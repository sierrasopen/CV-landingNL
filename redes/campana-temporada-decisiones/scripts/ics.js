/* Genera Calendario.ics (12 posts, 20:30 ART = 23:30 UTC) leyendo caption.txt de cada carpeta */
const fs = require('fs');
const path = require('path');
const OUT = '/tmp/claude-0/-home-user-CV-landingNL/bd6c1c29-401b-5436-becd-1992d4055ec1/scratchpad/pack';

// id -> { date 'YYYYMMDD', title, fmt }
const sched = [
  ['01_valor_cuanto-vale','20260916','¿Cuánto vale de verdad tu casa?','Carrusel'],
  ['02_valor_reel-senales','20260918','3 señales de que te tasaron mal','Reel'],
  ['03_valor_historia-menos','20260920','Le dije que valía menos (y me lo agradeció)','Carrusel'],
  ['04_errores_5-errores','20260923','5 errores que te hacen perder plata al vender','Carrusel'],
  ['05_errores_reel-mito','20260925','El mito de "lo pongo caro y después bajo"','Reel'],
  ['06_errores_checklist','20260927','Tu primera propiedad: la checklist que nadie te da','Carrusel'],
  ['07_historia_operacion-dificil','20260930','La operación más difícil que cerré','Carrusel'],
  ['08_historia_reel-conoceme','20261002','Por qué elegí este oficio','Reel'],
  ['09_historia_venta-caida','20261004','Lo que aprendí de una venta que se cayó','Carrusel'],
  ['10_jugada_usd100k','20261007','Con USD 100.000, ¿qué comprás en cada lugar?','Carrusel'],
  ['11_jugada_reel-comprar-alquilar','20261009','¿Compro o sigo alquilando?','Reel'],
  ['12_jugada_cierre','20261011','Estás a un mensaje de decidir','Carrusel'],
];

const esc = s => String(s).replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/,/g,'\\,').replace(/;/g,'\\;');
const now = new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d+Z$/,'Z');

let ics = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//NLZ Estudio//Temporada de Decisiones//ES','CALSCALE:GREGORIAN','METHOD:PUBLISH'];
for(const [id,date,title,fmt] of sched){
  let desc = '';
  try{ desc = fs.readFileSync(path.join(OUT,id,'caption.txt'),'utf-8'); }catch(e){ desc = title; }
  const dt = `${date}T233000Z`;      // 20:30 America/Argentina/Cordoba
  const dtEnd = `${date}T240000Z`;   // +30 min (23:30 -> 24:00 -> next day 00:00)
  // fix end 24:00 -> 00:00 next day handled by using +30 min properly:
  const endH = '000000';
  const y=date.slice(0,4),m=date.slice(4,6),d=String(Number(date.slice(6,8))+1).padStart(2,'0');
  ics.push('BEGIN:VEVENT');
  ics.push(`UID:${id}@nlz-estudio`);
  ics.push(`DTSTAMP:${now}`);
  ics.push(`DTSTART:${dt}`);
  ics.push(`DTEND:${date}T235959Z`);
  ics.push(`SUMMARY:${esc('📸 NLZ · '+title+' ('+fmt+')')}`);
  ics.push(`DESCRIPTION:${esc(desc)}`);
  ics.push('BEGIN:VALARM','TRIGGER:-PT60M','ACTION:DISPLAY',`DESCRIPTION:${esc('Preparar post: '+title)}`,'END:VALARM');
  ics.push('END:VEVENT');
}
ics.push('END:VCALENDAR');
fs.writeFileSync(path.join(OUT,'Calendario_TemporadaDeDecisiones.ics'), ics.join('\r\n'));
console.log('ICS OK');
