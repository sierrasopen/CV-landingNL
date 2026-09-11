/* Combina los caption.txt en un solo documento (para Drive) */
const fs = require('fs');
const path = require('path');
const OUT = '/tmp/claude-0/-home-user-CV-landingNL/bd6c1c29-401b-5436-becd-1992d4055ec1/scratchpad/pack';
const order = fs.readdirSync(OUT).filter(f=>fs.statSync(path.join(OUT,f)).isDirectory()).sort();
let doc = `NLZ ESTUDIO — CAMPAÑA "TEMPORADA DE DECISIONES"\nPlan de contenido · 4 semanas · Córdoba\nCadencia: Mar / Jue / Sáb · 20:30 hs · Hashtag: #DecidirConNLZ\n\n`;
doc += `CÓMO USAR ESTE PACK\n- Imágenes: carpeta por post (slide_1..N.png) para subir a Buffer como carrusel.\n- Reels: cover.png es la portada; grabá el video con el guion de abajo.\n- Calendario: importá el archivo .ics a Google Calendar y quedan los 12 recordatorios.\n\n${'='.repeat(60)}\n\n`;
for(const id of order){
  const p = path.join(OUT, id, 'caption.txt');
  if(fs.existsSync(p)){ doc += fs.readFileSync(p,'utf-8') + `\n${'-'.repeat(60)}\n\n`; }
}
fs.writeFileSync(path.join(OUT, 'PLAN_captions.txt'), doc);
console.log('DOC OK', doc.length, 'chars');
