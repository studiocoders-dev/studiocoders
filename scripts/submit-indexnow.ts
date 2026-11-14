/**
 * Script de envío masivo de URLs a la API oficial de IndexNow (Bing / Microsoft Copilot / Yandex / Naver)
 * Uso: npx tsx scripts/submit-indexnow.ts
 */

async function submitIndexNow() {
  const host = "studiocoders.dev";
  const key = "9f8e4c3a2b1d0e5f6a7b8c9d0e1f2a3b";
  const keyLocation = `https://${host}/${key}.txt`;

  const urlList = [
    `https://${host}/`,
  ];

  const payload = {
    host,
    key,
    keyLocation,
    urlList,
  };

  console.log("Enviando URLs a IndexNow:", payload);

  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok || res.status === 200 || res.status === 202) {
      console.log(`✓ IndexNow aceptó las URLs exitosamente (Status: ${res.status})`);
    } else {
      const errText = await res.text();
      console.warn(`! Respuesta de IndexNow (${res.status}):`, errText);
    }
  } catch (err) {
    console.error("Error al conectar con la API de IndexNow:", err);
  }
}

submitIndexNow();
