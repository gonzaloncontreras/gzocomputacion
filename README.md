# GZO Computación — sitio web

Proyecto completo en Next.js con diseño oscuro, acentos naranjas e integración directa con WhatsApp.

## Requisitos

- Node.js 20 o superior
- npm

## Abrir y ejecutar

```powershell
cd C:\Users\Gonzalo\Documents\proyectos\gzocomputacion
npm.cmd install
npm.cmd run dev
```

Abrí `http://localhost:3000`.

## Cambiar datos de contacto

Editá `lib/site.ts`:

- `whatsappNumber`
- `email`
- `name`

## Logo

El logo principal entregado se encuentra en:

- `public/brand/gzo-logo-fondo-negro.png`

## Imágenes

Cada imagen visible en el sitio utiliza un archivo diferente. La sección **Seguridad y respaldo** usa una ilustración original de escudo digital y la sección **Asesoramiento de compra** cuenta con una ilustración propia.

## Páginas incluidas

- Inicio
- Servicios
- Soporte remoto
- Soporte presencial
- Nosotros
- Contacto
- Preguntas frecuentes
- Página 404

## Antes de publicar

1. Confirmar textos y servicios definitivos.
2. Cambiar la URL del sitemap en `app/sitemap.ts` cuando exista el dominio.
3. Ejecutar `npm.cmd run build`.
4. Subir el repositorio a GitHub y desplegar en Vercel.
