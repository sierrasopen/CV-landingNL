# NLZ Inmobiliaria — Campaña "Temporada de Decisiones"

Plan de contenido de **1 mes (4 semanas)** para Instagram, en el sistema visual de NLZ
(verde bosque + coral, serif editorial, kickers en mayúscula).

- **Cliente:** NLZ Inmobiliaria · Natalia Luque (CPI 6518) · @nati_luquezampieri · Córdoba, AR
- **Ventana sugerida:** 15 sep – 12 oct
- **Cadencia:** 3 posts/semana (Mar · Jue · Sáb, 20:30) + historias L-a-V
- **Hashtag de campaña:** #DecidirConNLZ
- **CTA madre:** agendar tasación sin cargo (DM "TASACIÓN" / "DECIDO")

## Pilares por semana
1. **Valor real** (autoridad) — cuánto vale de verdad, tasación/pericia.
2. **Sin errores** (alcance) — mitos y errores al comprar/vender.
3. **Historias del oficio** (confianza) — relatos reales, marca personal.
4. **Tu jugada** (conversión) — comparativas, números y CTA fuerte.

## Archivos
- `index.html` — dossier visual completo: calendario, copy slide por slide, captions,
  hashtags y CTAs. Abrir en el navegador (o publicar en el sitio) para verlo/compartirlo.

## Nota
El post de Instagram de referencia estaba bloqueado por el proxy de red al armar esto,
así que la campaña se apoya en el estilo que NLZ ya tiene publicado. Si se comparte el
ejemplo, se ajusta el estilo para que calce.

## Reutilizar para otros clientes
Copiar esta carpeta como plantilla: `redes/campana-<cliente>/` con su `index.html` +
`README.md`. Un dossier por campaña, una carpeta por cliente.

## Pack de producción (`pack/`)
- Una carpeta por post (`NN_semana_tema/`) con `slide_1..N.png` (carruseles) o `cover.png` (reels) + `caption.txt`.
- `PLAN_captions.txt` — todos los captions, guiones y cronograma juntos.
- `Calendario_TemporadaDeDecisiones.ics` — importar a Google Calendar para los 12 recordatorios (20:30 ART).
- Estilo: sistema visual del post de referencia (@faceit_lab) adaptado a la identidad NLZ (crema + coral, serif). Voz argentina.
- Portadas con foto usan `hero-natalia.jpg` como placeholder → reemplazar por la foto real.

## Regenerar / editar
`scripts/gen.js` define los 12 posts como datos y renderiza las placas con Playwright:
```
PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers node scripts/gen.js
node scripts/build_doc.js   # arma PLAN_captions.txt
node scripts/ics.js         # arma el .ics
```
Editar textos/estilo en `scripts/gen.js` (array `posts` y bloque `CSS`) y re-correr.

## En Google Drive
Carpeta **RR.SS NLZ STUDIO / Temporada de Decisiones — Set 2026**: Doc de captions+guiones y el `.ics`.
Las imágenes se entregan por chat en `.zip` (subir a Buffer desde ahí).
