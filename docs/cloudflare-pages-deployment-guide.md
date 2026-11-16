# Guía de Despliegue: Cloudflare Pages + Resend + GitHub Actions (`studiocoders.dev`)

> Guía operativa paso a paso para publicar `studiocoders.dev` en **Cloudflare Pages** con **0 consumo de Vercel**, formulario de contacto real hacia `studiocoders.dev@gmail.com` vía **Resend** y despliegue automático desde `.github/workflows/ci.yml`.

---

## Arquitectura en Producción

```text
Visitante ─▶ Cloudflare DNS / CDN ─┬─▶ Archivos estáticos (out/) ─▶ HTML/CSS/JS ($0/mes)
                                   └─▶ POST /api/contact (functions/api/contact.ts)
                                         └─▶ Resend API ─▶ studiocoders.dev@gmail.com
```

---

## Paso 1: Configurar Resend (Envío de correos del formulario)

1. Crea una cuenta gratuita en **Resend** (plan Free: 3,000 correos/mes, 100/día).
2. Ve a **Domains → Add Domain** e ingresa `studiocoders.dev`.
3. Resend te mostrará registros DNS (**TXT / MX / DKIM**). Como tu dominio ya está en Cloudflare:
   - Puedes usar la opción automática de Resend para Cloudflare o copiar los registros manualmente en **Cloudflare Dashboard → studiocoders.dev → DNS → Records**.
   - Asegúrate de que los registros **CNAME / MX / TXT** de Resend queden con proxy desactivado (**DNS only**, nube gris).
4. Haz clic en **Verify DNS Records** hasta que el estado aparezca como **Verified**.
5. Ve a **API Keys → Create API Key**:
   - **Name:** `studiocoders-cloudflare-pages`
   - **Permission:** `Sending access` (puedes restringirlo al dominio `studiocoders.dev`).
   - Copia y guarda el token (`re_...`).

---

## Paso 2: Crear el proyecto en Cloudflare Pages

1. Entra a **Cloudflare Dashboard → Workers & Pages → Create → Pages**.
2. Para evitar dobles builds (ya que `.github/workflows/ci.yml` compila y sube `out/` + `functions/`):
   - Selecciona **Upload assets** (Direct Upload) y nombra el proyecto exactamente **`studiocoders`**.
   - *(Alternativa sin GitHub Actions)*: si prefieres conectar GitHub directo en Cloudflare Pages, usa **Build command:** `npm run build` y **Build output directory:** `out`.
3. Una vez creado el proyecto `studiocoders`, ve a **Settings → Variables and Secrets** y agrega en **Production** (y **Preview** si lo usas):
   - `RESEND_API_KEY` = `re_...` *(marcar como Secret / Encrypt)*
   - *(Opcionales, ya tienen valores por defecto en `functions/api/contact.ts`)*:
     - `CONTACT_TO_EMAIL` = `studiocoders.dev@gmail.com`
     - `CONTACT_FROM_EMAIL` = `Studio Coders <contacto@studiocoders.dev>`

---

## Paso 3: Configurar Secretos en GitHub Actions (CI/CD Automático)

El workflow [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) ejecuta `verify` (`tsc`, `lint`, `test`, `build`) en cada PR/push y, al hacer `push` a `main`, ejecuta el job `deploy` con `cloudflare/wrangler-action@v3`.

Para activar el despliegue automático:

1. En **Cloudflare Dashboard**, copia tu **Account ID** (barra lateral derecha de *Workers & Pages* o de la vista del dominio).
2. Ve a **My Profile → API Tokens → Create Token → Create Custom Token**:
   - **Token name:** `github-actions-studiocoders-pages`
   - **Permissions:** `Account` → `Cloudflare Pages` → `Edit`
   - **Account Resources:** selecciona tu cuenta.
   - Copia el token generado.
3. En tu repositorio de GitHub ve a **Settings → Secrets and variables → Actions → New repository secret** y crea:
   - `CLOUDFLARE_API_TOKEN` = *(el token creado en el punto 2)*
   - `CLOUDFLARE_ACCOUNT_ID` = *(tu Account ID de Cloudflare)*

> **Nota:** Si estos dos secretos aún no están creados en GitHub, el workflow `ci.yml` omitirá el paso de subida a Cloudflare sin marcar error en CI.

---

## Paso 4: Conectar Dominio Personalizado y Retirar Vercel

1. En **Cloudflare Dashboard → Workers & Pages → studiocoders → Custom domains**:
   - Agrega `studiocoders.dev` y `www.studiocoders.dev`.
   - Cloudflare actualizará automáticamente los registros DNS `CNAME` apuntando a `studiocoders.pages.dev` con SSL activo.
2. Verifica en tu navegador que `https://www.studiocoders.dev` cargue correctamente y prueba enviar un mensaje desde `#contacto` para confirmar que llega a `studiocoders.dev@gmail.com`.
3. En **Vercel Dashboard**:
   - Entra al proyecto `studiocoders`, desconecta el dominio y **elimina/desvincula el proyecto** para que no vuelva a consumir builds ni *Fluid Active CPU* de tu cuenta compartida con `whagil.com`.

---

## Paso 5: (Opcional) Activar Cloudflare Email Routing para `contacto@studiocoders.dev`

La landing muestra `contacto@studiocoders.dev` en el Footer, Schema.org y enlace alternativo del formulario. Para que también recibas correos enviados directo a esa dirección:

1. En **Cloudflare Dashboard → studiocoders.dev → Email → Email Routing**, haz clic en **Enable Email Routing**.
2. Agrega la dirección de destino `studiocoders.dev@gmail.com` y confirma el correo de verificación que enviará Cloudflare a tu Gmail.
3. Crea la regla personalizada:
   - **Custom address:** `contacto@studiocoders.dev`
   - **Action:** `Send to an email` → `studiocoders.dev@gmail.com`
4. Acepta los registros MX/SPF automáticos que propone Cloudflare Email Routing.
