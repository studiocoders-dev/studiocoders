import { afterEach, describe, expect, it, vi } from "vitest";
import { onRequestPost, type ContactEnv } from "../functions/api/contact";

function makeRequest(body: unknown): Request {
  return new Request("https://studiocoders.dev/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

describe("Cloudflare Pages Function: POST /api/contact", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("envía el lead a studiocoders.dev@gmail.com vía Resend con reply_to", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ id: "email_123" }), { status: 200 })
    );
    vi.stubGlobal("fetch", fetchMock);

    const env: ContactEnv = { RESEND_API_KEY: "re_test_key" };
    const response = await onRequestPost({
      request: makeRequest({
        email: "ceo@acme.com",
        project: "Necesito una plataforma SaaS B2B en 30 días.",
      }),
      env,
    });

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("https://api.resend.com/emails");
    expect(init.method).toBe("POST");
    expect(init.headers).toMatchObject({
      Authorization: "Bearer re_test_key",
      "Content-Type": "application/json",
    });

    const sentPayload = JSON.parse(init.body as string);
    expect(sentPayload.to).toEqual(["studiocoders.dev@gmail.com"]);
    expect(sentPayload.reply_to).toBe("ceo@acme.com");
    expect(sentPayload.text).toContain("Necesito una plataforma SaaS B2B en 30 días.");
  });

  it("acepta silenciosamente envíos con honeypot sin llamar a Resend", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    const response = await onRequestPost({
      request: makeRequest({
        email: "bot@spam.com",
        project: "Buy cheap links",
        website: "https://spam.example",
      }),
      env: { RESEND_API_KEY: "re_test_key" },
    });

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("retorna 400 cuando el correo es inválido o el proyecto es muy corto", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    const badEmailRes = await onRequestPost({
      request: makeRequest({ email: "no-es-correo", project: "Proyecto válido" }),
      env: { RESEND_API_KEY: "re_test_key" },
    });
    expect(badEmailRes.status).toBe(400);

    const shortProjectRes = await onRequestPost({
      request: makeRequest({ email: "founder@acme.com", project: "hola" }),
      env: { RESEND_API_KEY: "re_test_key" },
    });
    expect(shortProjectRes.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("retorna 500 si falta RESEND_API_KEY en el entorno", async () => {
    const response = await onRequestPost({
      request: makeRequest({
        email: "founder@acme.com",
        project: "Necesito un MVP con Next.js",
      }),
      env: {},
    });

    expect(response.status).toBe(500);
    expect(await response.json()).toMatchObject({ ok: false });
  });

  it("retorna 502 si Resend responde con error", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ message: "Unauthorized" }), { status: 403 })
    );
    vi.stubGlobal("fetch", fetchMock);

    const response = await onRequestPost({
      request: makeRequest({
        email: "founder@acme.com",
        project: "Necesito un MVP con Next.js",
      }),
      env: { RESEND_API_KEY: "re_bad_key" },
    });

    expect(response.status).toBe(502);
    expect(await response.json()).toMatchObject({ ok: false });
  });
});
