export interface ContactEnv {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

export interface CFContext {
  request: Request;
  env: ContactEnv;
}

interface ContactPayload {
  email?: unknown;
  project?: unknown;
  website?: unknown;
}

const DEFAULT_TO_EMAIL = "studiocoders.dev@gmail.com";
const DEFAULT_FROM_EMAIL = "Studio Coders <contacto@studiocoders.dev>";
const RESEND_API_URL = "https://api.resend.com/emails";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

/**
 * Cloudflare Pages Function (`POST /api/contact`).
 * Validates contact form submissions and forwards them via Resend to Gmail.
 */
export async function onRequestPost(context: CFContext): Promise<Response> {
  let payload: ContactPayload;

  try {
    payload = (await context.request.json()) as ContactPayload;
  } catch {
    return jsonResponse({ ok: false, error: "Solicitud JSON inválida." }, 400);
  }

  // Silently accept honeypot-filled submissions to neutralize simple bots.
  if (typeof payload.website === "string" && payload.website.trim().length > 0) {
    return jsonResponse({ ok: true }, 200);
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const project = typeof payload.project === "string" ? payload.project.trim() : "";

  if (!email || email.length > 254 || !EMAIL_REGEX.test(email)) {
    return jsonResponse(
      { ok: false, error: "Ingresa un correo electrónico válido." },
      400
    );
  }

  if (project.length < 5 || project.length > 5000) {
    return jsonResponse(
      {
        ok: false,
        error: "Cuéntanos brevemente tu proyecto (mínimo 5 caracteres).",
      },
      400
    );
  }

  const apiKey = context.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return jsonResponse(
      { ok: false, error: "Servicio de correo no configurado." },
      500
    );
  }

  const toEmail = context.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_TO_EMAIL;
  const fromEmail = context.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM_EMAIL;

  const resendResponse = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Nuevo lead en studiocoders.dev — ${email}`,
      text: [
        "Nuevo mensaje desde el formulario de studiocoders.dev",
        "",
        `Correo: ${email}`,
        "",
        "Descripción del proyecto:",
        project,
      ].join("\n"),
    }),
  });

  if (!resendResponse.ok) {
    return jsonResponse(
      {
        ok: false,
        error:
          "No pudimos enviar tu mensaje en este momento. Intenta nuevamente o escribe a contacto@studiocoders.dev.",
      },
      502
    );
  }

  return jsonResponse({ ok: true }, 200);
}
