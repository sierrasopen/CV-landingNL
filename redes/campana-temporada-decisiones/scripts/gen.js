/* NLZ Estudio — "Temporada de Decisiones" — generador v2
   Base visual: carrusel aprobado "Todos miran la comisión" (estilo faceit + identidad NLZ). */
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs');
const path = require('path');

const BASE = '/tmp/claude-0/-home-user-CV-landingNL/bd6c1c29-401b-5436-becd-1992d4055ec1/scratchpad';
const OUT = BASE + '/pack';
const COVER = 'file:///home/user/CV-landingNL/hero-natalia.jpg';

const H = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const L = arr => (arr||[]).map(H).join('<br>');

/* ---------- POSTS (componentes ricos) ---------- */
const posts = [
{ id:'01_valor_cuanto-vale', wk:1, fmt:'Carrusel', day:'Mar 16 sep', date:'2026-09-16',
  title:'¿Cuánto vale de verdad tu casa?',
  caption:`Arranquemos por lo incómodo: el precio de tu casa no lo pone tu bolsillo. 🏠\nLo pone el mercado, y hoy el mercado mira todo. En este carrusel te dejo los 4 factores que mueven el número de verdad.\n¿Querés saber en cuál está parada tu propiedad hoy? Escribime TASACIÓN por DM y te la hago sin cargo.`,
  tags:'#Córdoba #Inmobiliaria #Tasación #VenderMiCasa #NLZestudio', cta:'DM "TASACIÓN"',
  slides:[
    {t:'coverphoto', box:['Le pusiste precio','a tu casa.'], cta:'Pero… ¿es el real? →'},
    {t:'lead', pre:'Arranquemos por lo incómodo:', big:['El precio no lo','pone tu bolsillo.'], list:['Ni lo que pagaste.','Ni lo que necesitás.','Ni lo que dice el vecino.'], darkbox:'Lo pone el mercado. Y hoy mira todo.'},
    {t:'boxes', pre:'Cuatro cosas mueven el número:', items:['Ubicación real','Estado y mantenimiento','Papeles al día','El momento del mercado']},
    {t:'bigwhite', pre:'Y ojo con esto:', big:['Publicar caro'], color:'coral', whitebox:'= meses sin vender.', list:['El estreno es una sola vez.','Después la casa "ya está vista".']},
    {t:'lead', pre:'La buena noticia:', big:['Tasar bien es','vender rápido.'], color:'coral', post:'Con criterio, no con miedo.'},
    {t:'final', small:['¿Querés el número real de tu propiedad?'], big:['Te la taso','sin cargo.'], box:'Escribime TASACIÓN por DM.'},
  ]},

{ id:'02_valor_reel-senales', wk:1, fmt:'Reel', day:'Jue 18 sep', date:'2026-09-18',
  title:'3 señales de que te tasaron mal',
  caption:`Una tasación no es un número al azar: es un informe. 📋\nSi te dieron el valor sin ver la casa ni los papeles, te dieron un chiste. Guardá esto para cuando decidas vender.`,
  tags:'#Tasación #Córdoba #TipsInmobiliarios #VenderPropiedad #NLZestudio', cta:'Guardá + "agendá tu tasación" (link en bio)',
  guion:`GUION (20-30s, a cámara + texto en pantalla)\n0-3s (gancho): "Si te tasaron así, desconfiá 👇"\n3-9s: Señal 1 — "Te dieron el número por teléfono, sin ver nada."\n9-15s: Señal 2 — "El precio es igual al del portal, sin mirar tu caso."\n15-21s: Señal 3 — "Nadie te preguntó por los papeles."\n21-28s (cierre a cámara): "Una tasación seria mira la propiedad Y la carpeta. Agendá la tuya."`,
  slides:[ {t:'reelhook', big:['3 señales de que','te tasaron mal.'], sub:'Guardá esto para cuando vendas 👇'} ]},

{ id:'03_valor_historia-menos', wk:1, fmt:'Carrusel', day:'Sáb 20 sep', date:'2026-09-20',
  title:'Le dije que valía menos (y me lo agradeció)',
  caption:`Prefiero perder una exclusiva antes que inflarte un precio que después te tiene 10 meses esperando. 🤝\nEsta operación se cerró porque empezamos por la verdad. Si querés que te diga el número real de tu propiedad —el que la vende— hablemos.`,
  tags:'#HistoriasDelOficio #Inmobiliaria #Córdoba #Confianza #NLZestudio', cta:'DM "quiero mi número real"',
  slides:[
    {t:'coverphoto', box:['Le dije que su casa','valía menos.'], cta:'Y me lo agradeció →'},
    {t:'lead', pre:'Tenía en la mano', big:['otra tasación','inflada.'], darkbox:'Alguien le prometió más para quedarse con la exclusiva.'},
    {t:'quotes', pairs:[{lbl:'El otro tasador',q:'«Poné más, después bajás.»'},{lbl:'Yo',q:'«Pongamos el número real.»'}], post:'Le mostré los comparables de su cuadra.', big:['La cara','le cambió.'], color:'coral'},
    {t:'lead', pre:'Ajustamos el precio con criterio,', big:['no con','miedo.'], list:['Sin inflarlo.','Sin regalarlo.']},
    {t:'bigwhite', big:['Se vendió'], color:'coral', whitebox:'en 5 semanas.', list:['Al valor que proyectamos desde el día uno.']},
    {t:'final', small:['Decir la verdad no cuesta la operación.'], big:['La','salva.'], box:'¿Querés tu número real? DM.'},
  ]},

{ id:'04_errores_5-errores', wk:2, fmt:'Carrusel', day:'Mar 23 sep', date:'2026-09-23',
  title:'5 errores que te hacen perder plata al vender',
  caption:`Vender solo parece más barato… hasta el mes 6. 👀\nEstos 5 errores los veo todas las semanas. Guardá el post y mandáselo a ese conocido que "lo vende solo".`,
  tags:'#VenderMiCasa #ErroresComunes #Córdoba #Inmobiliaria #NLZestudio', cta:'Guardá + compartí · DM "vendo"',
  slides:[
    {t:'coverphoto', box:['Vender solo','parece más barato.'], cta:'Hasta que ves esto →'},
    {t:'lead', pre:'Los que veo todas las semanas:', big:['5 errores que','cuestan plata.']},
    {t:'verbs', pre:'Anotá:', lead:['Los 5:'], items:['Precio inflado','Fotos malas','Sin estrategia','Papeles a medias','Marcar defectos'], big:['¿Te suena','alguno?']},
    {t:'bigwhite', pre:'El más caro de todos:', big:['Publicar caro'], color:'coral', whitebox:'y bajar de a poco.', list:['La propiedad se "quema" en los portales.','Y el que mira piensa: algo tiene.']},
    {t:'lead', pre:'Vender bien', big:['no es suerte.'], color:'coral', post:'Es método (y un buen acompañamiento).'},
    {t:'final', small:['¿En cuántos caíste?'], big:['Te ayudo a','no repetirlos.'], box:'Escribime VENDO por DM.'},
  ]},

{ id:'05_errores_reel-mito', wk:2, fmt:'Reel', day:'Jue 25 sep', date:'2026-09-25',
  title:'El mito de "lo pongo caro y después bajo"',
  caption:`La propiedad que baja de precio tres veces grita "algo tiene". 📉\nLa que sale a valor justo se vende en las primeras semanas, cuando el interés está fresco. No es magia: es entender cómo mira quien compra.`,
  tags:'#MitosInmobiliarios #Córdoba #PrecioDeVenta #Inmobiliaria #NLZestudio', cta:'Comentá "MITO" para la parte 2',
  guion:`GUION (25s, a cámara)\n0-3s: "'Lo pongo caro y si no, bajo.' Pará. 🚩"\n3-9s: "Una propiedad tiene un solo estreno: la primera semana."\n9-16s: "Cara, nadie la mira. Y cuando bajás, ya pasó de moda."\n16-22s: "Quien la ve después piensa: ¿por qué no se vendió?"\n22-25s (cierre): "Precio justo desde el día 1 = venta rápida. Es matemática."`,
  slides:[ {t:'reelhook', big:['"Lo pongo caro','y después bajo."'], sub:'Pará. Te explico por qué no 🚩'} ]},

{ id:'06_errores_checklist', wk:2, fmt:'Carrusel', day:'Sáb 27 sep', date:'2026-09-27',
  title:'Tu primera propiedad: la checklist que nadie te da',
  caption:`Comprar tu primera propiedad es emocionante… y ahí está el peligro. 💛\nEsta checklist te la deberían dar antes de la primera visita. Guardala para cuando salgas a buscar, y si querés un ojo experto al lado, escribime.`,
  tags:'#PrimeraPropiedad #ComprarEnCórdoba #Inmobiliaria #Checklist #NLZestudio', cta:'Guardá · DM "quiero comprar"',
  slides:[
    {t:'coverphoto', box:['Comprás tu','primera propiedad.'], cta:'Guardá esta checklist →'},
    {t:'lead', pre:'Antes de enamorarte de una casa:', big:['Presupuesto','real.'], darkbox:'Sumá gastos de escritura, sellos e impuestos.'},
    {t:'rows', pre:'Pedí y verificá siempre:', rows:[['Matrícula','✓','titularidad'],['Deudas','✓','muni + rentas'],['Planos','✓','aprobados']], post:'Si algo no está, se frena en la firma.'},
    {t:'lead', pre:'Visitá dos veces:', big:['de día','y de noche.'], list:['Ruido, humedad, luz, vecinos.']},
    {t:'bigwhite', big:['Reservá'], color:'coral', whitebox:'por escrito.', list:['Nunca de palabra. Nunca sin boleto.']},
    {t:'final', small:['Guardala para cuando salgas a buscar.'], big:['Y la recorremos','juntos.'], box:'DM: quiero comprar.'},
  ]},

{ id:'07_historia_operacion-dificil', wk:3, fmt:'Carrusel', day:'Mar 30 sep', date:'2026-09-30',
  title:'La operación más difícil que cerré',
  caption:`La operación más difícil de mi carrera no se trabó por plata. Se trabó porque nadie quería sentir que perdía. 🤝\nA veces el oficio es 20% inmobiliaria y 80% escuchar. Te cuento cómo se destrabó.`,
  tags:'#HistoriasDelOficio #Martillera #Córdoba #Negociación #NLZestudio', cta:'"¿Te pasó algo así? Contame 👇"',
  slides:[
    {t:'coverphoto', box:['La operación más','difícil que cerré.'], cta:'No se trabó por la plata →'},
    {t:'lead', pre:'Ninguno quería ceder.', big:['Uno sentía que','bajar era perder.'], darkbox:'El otro, que aceptar era quedar en desventaja.'},
    {t:'quotes', pairs:[{lbl:'El comprador',q:'«Que baje él primero.»'},{lbl:'El vendedor',q:'«No regalo mi casa.»'}], post:'El problema no era el precio.', big:['Era el orgullo','de dos familias.'], color:'coral'},
    {t:'lead', pre:'Dejé los números de lado', big:['y escuché de qué','tenían miedo.'], darkbox:'Cuando cada uno se sintió respetado, apareció el acuerdo.'},
    {t:'lead', pre:'A veces el oficio es', big:['20% inmobiliaria,','80% escuchar.'], color:'coral'},
    {t:'final', small:['Lo que destraba una operación'], big:['no siempre','se tasa.'], box:'¿Te pasó algo así? Contame 👇'},
  ]},

{ id:'08_historia_reel-conoceme', wk:3, fmt:'Reel', day:'Jue 02 oct', date:'2026-10-02',
  title:'Por qué elegí este oficio',
  caption:`No soñaba con ser martillera. Soñaba con que comprar una casa no fuera una pesadilla. 💛\nHace años que me dedico a que la operación más importante de tu vida esté en buenas manos. Gracias por confiar.`,
  tags:'#Conoceme #Martillera #Córdoba #DetrásDeEscena #NLZestudio', cta:'Presentate en comentarios · DM abierto',
  guion:`GUION (30s, a cámara, luz cálida)\n0-4s: "Nadie sueña de chica con ser martillera. Yo tampoco. 😅"\n4-11s: "Llegué buscando lo que a mí me faltó cuando compré: que alguien me cuidara."\n11-18s: "Vi gente perder los ahorros de su vida por un mal consejo."\n18-24s: "Y dije: esto se puede hacer bien, con papeles y con respeto."\n24-30s (cierre): "Por eso hago esto. Y todavía me emociono en cada entrega de llaves. 🔑"`,
  slides:[ {t:'reelhook', big:['Nadie sueña con','ser martillera.'], sub:'Yo tampoco. Por qué elegí esto 👇'} ]},

{ id:'09_historia_venta-caida', wk:3, fmt:'Carrusel', day:'Sáb 04 oct', date:'2026-10-04',
  title:'Lo que aprendí de una venta que se cayó',
  caption:`Sí, se me cayó una venta a días de la escritura. Y fue la mejor lección de mi carrera. 📑\nHoy reviso cada carpeta como si fuera la mía, porque una firma frustrada no se olvida. Los papeles al día no son burocracia: son que puedas festejar tranquila.`,
  tags:'#HistoriasDelOficio #SeguridadJurídica #Córdoba #Inmobiliaria #NLZestudio', cta:'DM "¿mis papeles están en regla?"',
  slides:[
    {t:'coverphoto', box:['Se me cayó una venta','a días de la firma.'], cta:'La mejor lección de mi carrera →'},
    {t:'lead', pre:'A último momento', big:['apareció una','deuda oculta.'], darkbox:'Nadie la había declarado.'},
    {t:'bigwhite', big:['El comprador'], color:'coral', whitebox:'se bajó.', list:['Me dolió como si fuera mi propia casa.']},
    {t:'lead', pre:'Desde ese día,', big:['ninguna carpeta','avanza a medias.'], color:'coral'},
    {t:'rows', pre:'Reviso todo, siempre:', rows:[['Escritura','✓','al día'],['Deudas','✓','en cero'],['Planos','✓','aprobados']]},
    {t:'final', small:['Los papeles no son un trámite.'], big:['Son tu','tranquilidad.'], box:'DM: ¿mis papeles están en regla?'},
  ]},

{ id:'10_jugada_usd100k', wk:4, fmt:'Carrusel', day:'Mar 07 oct', date:'2026-10-07',
  title:'Con USD 100.000, ¿qué comprás en cada lugar?',
  caption:`El mismo billete, cuatro vidas distintas. 🌎\nEn Córdoba, USD 100.000 todavía te dan metros, luz y cochera — algo impensado en otras ciudades. Pero los ciclos se mueven. ¿Querés que te arme opciones reales con tu presupuesto? Escribime tu número por DM.`,
  tags:'#Córdoba #Inversión #DólarInmobiliario #ComprarEnCórdoba #NLZestudio', cta:'DM con tu presupuesto',
  slides:[
    {t:'covertext', kicker:'NLZ · CÓRDOBA', big:['Con USD 100.000'], big2:['¿qué comprás?'], cta:'Deslizá →'},
    {t:'quotes', pairs:[{lbl:'Miami',q:'Un monoambiente lejos del mar.'},{lbl:'Buenos Aires',q:'2 ambientes en barrio medio.'}]},
    {t:'quotes', pairs:[{lbl:'Sierras',q:'Una casa con patio.'}], post:'Y en tu ciudad…', big:['Córdoba: 2 o 3 amb.','con cochera.'], color:'coral'},
    {t:'lead', pre:'La diferencia:', big:['Acá tu','dólar rinde.'], color:'coral', darkbox:'Metros, luz y cochera. Impensado afuera.'},
    {t:'lead', pre:'Pero los ciclos se mueven.', big:['La ventana','no es eterna.']},
    {t:'final', small:['¿Querés ver qué comprás hoy con tu presupuesto?'], big:['Armémoslo','juntos.'], box:'Mandame tu número por DM.'},
  ]},

{ id:'11_jugada_reel-comprar-alquilar', wk:4, fmt:'Reel', day:'Jue 09 oct', date:'2026-10-09',
  title:'¿Compro o sigo alquilando?',
  caption:`"¿Compro o sigo alquilando?" es la pregunta del año. 🧮\nLa respuesta no es igual para todos: depende de tus ahorros, tu laburo y tu horizonte. Pero los números ayudan a decidir con la cabeza y no con la ansiedad. ¿Te armo tu cuenta personalizada? DM.`,
  tags:'#ComprarVsAlquilar #Córdoba #FinanzasPersonales #Inmobiliaria #NLZestudio', cta:'DM "mi cuenta" · link en bio',
  guion:`GUION (25s, texto en pantalla + cifras — ACTUALIZAR los valores del mes)\n0-3s: "'¿Sigo alquilando o compro?' Los números 👇"\n3-9s: "Alquiler promedio 2 amb: $[ACTUALIZAR]/mes."\n9-15s: "En [X] años de alquiler pagaste [Y]… y la propiedad no es tuya."\n15-21s: "Comprar hoy: cuota vs. alquiler, y el activo queda tuyo."\n21-25s (cierre): "No es para todos ni para siempre. Hagamos TU cuenta."`,
  slides:[ {t:'reelhook', big:['¿Compro o','sigo alquilando?'], sub:'Los números, sin vueltas 👇'} ]},

{ id:'12_jugada_cierre', wk:4, fmt:'Carrusel', day:'Sáb 11 oct', date:'2026-10-11',
  title:'Estás a un mensaje de decidir',
  caption:`Todo el mes te hablé de valor, errores, historias y números. Ahora te toca a vos. 💛\nCerramos la Temporada de Decisiones con una invitación simple: escribime "DECIDO" y vemos juntos tu próximo paso —vender, comprar o solo entender dónde estás parado. Sin humo, sin compromiso.`,
  tags:'#DecidirConNLZ #Córdoba #Inmobiliaria #Tasación #NLZestudio', cta:'DM "DECIDO" → agenda de tasación',
  slides:[
    {t:'covertext', kicker:'TEMPORADA DE DECISIONES', big:['Todo el mes','lo pensaste.'], big2:['Este es el mensaje.']},
    {t:'lead', pre:'Si querés vender:', big:['te taso','sin cargo.']},
    {t:'lead', pre:'Si querés comprar:', big:['armamos tu búsqueda','con criterio.']},
    {t:'lead', pre:'Si solo querés entender el mercado:', big:['también.'], color:'coral', post:'Sin humo, sin compromiso.'},
    {t:'final', small:['Escribime una palabra y empezamos hoy.'], big:['DECIDO 🔑'], box:'DM: DECIDO'},
  ]},
];

/* ---------- CSS (base del carrusel aprobado) ---------- */
const CSS = `
:root{--crema:#F4EFE6;--verde:#1E3A31;--verde-d:#16281F;--coral:#EF6A5B;--ink:#1E3A31;}
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0c1512;font-family:"Archivo",sans-serif}
.board{position:relative;width:1080px;height:1350px;overflow:hidden;display:flex;flex-direction:column;padding:96px 84px 92px}
.cream{background:var(--crema);color:var(--ink)}
.count{position:absolute;top:40px;right:44px;z-index:6;background:var(--verde);color:var(--crema);font-weight:700;font-size:26px;padding:12px 24px;border-radius:999px}
.wm{position:absolute;top:40px;left:84px;z-index:6;font-weight:800;font-size:24px;color:var(--verde);opacity:.75}
.wm b{color:var(--coral)}
.small{font-weight:400;font-size:40px;line-height:1.35;color:#3a5449}
.big{font-family:"Fraunces",Georgia,serif;font-weight:900;font-size:96px;line-height:1.0;letter-spacing:-.02em;color:var(--verde)}
.big.coral{color:var(--coral)}
.lead{font-family:"Fraunces",serif;font-weight:900;font-size:84px;line-height:1.02;letter-spacing:-.02em;color:var(--verde)}
.lead.coral{color:var(--coral)}
.post{margin-top:26px}
.push{margin-top:auto}
.gap{height:34px}.gap-s{height:22px}
.list{font-weight:400;font-size:38px;line-height:1.5;color:#2b4137;margin-top:26px}
.kicker{font-weight:700;text-transform:uppercase;letter-spacing:.22em;font-size:28px;color:var(--coral);margin-bottom:28px}
/* boxes verdes (3ro coral) */
.boxes{display:flex;flex-direction:column;gap:20px;align-items:flex-start;margin-top:10px}
.boxes span{background:var(--verde);color:var(--crema);font-family:"Fraunces",serif;font-weight:700;font-size:50px;padding:12px 26px;border-radius:8px}
.boxes span:nth-child(3){background:var(--coral);color:#fff}
.pre{font-weight:400;font-size:40px;line-height:1.35;color:#3a5449;margin-bottom:26px}
/* caja verde de remate */
.darkbox{display:inline;background:var(--verde);color:var(--crema);box-decoration-break:clone;-webkit-box-decoration-break:clone;padding:.12em .32em;font-family:"Fraunces",serif;font-weight:700;font-size:50px;line-height:1.5;}
/* caja blanca inline */
.whitebox{display:inline;background:#fff;color:var(--verde);box-decoration-break:clone;-webkit-box-decoration-break:clone;padding:.06em .28em;font-family:"Fraunces",serif;font-weight:700;font-size:66px;line-height:1.35;}
/* filas con flecha */
.rows{display:flex;flex-direction:column;gap:26px;margin-top:8px}
.row{display:flex;align-items:center;gap:20px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;font-size:34px;color:var(--verde)}
.row .mid{background:var(--coral);color:#fff;padding:8px 18px;border-radius:6px;letter-spacing:.02em}
.row .ar{color:var(--coral);font-weight:800;font-size:30px}
/* pares de cita */
.qp{display:flex;flex-direction:column;gap:30px;margin-top:6px}
.qp .lbl{font-weight:700;text-transform:uppercase;letter-spacing:.16em;font-size:24px;color:var(--coral);margin-bottom:8px}
.qp .q{font-family:"Fraunces",serif;font-weight:700;font-size:52px;line-height:1.05;color:var(--verde)}
/* verbos */
.verbs{display:flex;flex-wrap:wrap;gap:16px;max-width:900px;margin-top:8px}
.verbs span{background:var(--coral);color:#fff;font-weight:700;font-size:36px;padding:12px 22px;border-radius:8px}
.annot{font-family:"Fraunces",serif;font-style:italic;font-weight:600;font-size:44px;color:var(--coral);align-self:flex-end;margin:20px 30px -4px 0}
/* cover foto */
.cover{padding:0}
.cover .photo{position:absolute;inset:0;background-size:cover;background-position:center 20%}
.cover .grad{position:absolute;inset:0;background:linear-gradient(180deg,rgba(20,36,29,.14) 0%,rgba(20,36,29,0) 42%,rgba(20,36,29,.30) 100%)}
.cover .stack{position:absolute;left:70px;bottom:150px;z-index:5;display:flex;flex-direction:column;align-items:flex-start}
.cover .cb{background:#fff;color:var(--verde);font-family:"Fraunces",serif;font-weight:700;font-size:58px;line-height:1.16;padding:8px 20px;box-decoration-break:clone;-webkit-box-decoration-break:clone;display:inline}
.cover .cta{background:#fff;color:var(--coral);font-family:"Fraunces",serif;font-weight:700;font-size:50px;padding:10px 20px;margin-top:12px}
.cover .wm{color:#fff}.cover .wm b{color:var(--coral)}
/* covertext */
.covertext{justify-content:center}.covertext .big{font-size:110px}
/* reel */
.reelhook{justify-content:center;background:var(--crema)}
.reelhook .tag{position:absolute;top:40px;left:84px;background:var(--coral);color:#fff;font-weight:800;letter-spacing:.14em;font-size:24px;padding:10px 22px;border-radius:8px}
.reelhook .big{font-size:100px}.reelhook .sub{margin-top:34px;font-size:40px;color:#3a5449}
/* final */
.final{background:var(--verde);color:var(--crema)}
.final .count{background:var(--crema);color:var(--verde)}
.final .small{color:#cfdcd4;font-size:42px;line-height:1.34}
.final .big{color:var(--coral)}
.final .fbox{display:inline-block;background:#fff;color:var(--verde);font-weight:700;font-size:38px;padding:16px 22px;line-height:1.4;margin-top:8px}
.final .brand{position:absolute;right:84px;bottom:70px;text-align:right;font-weight:800;font-size:30px;color:#fff}
.final .brand b{color:var(--coral)}
.final .brand span{display:block;font-weight:600;font-size:20px;color:#aebfb5;letter-spacing:.1em;margin-top:4px}
`;

function slideHTML(s, i, n){
  const wm = `<div class="wm">NL<b>Z</b> ESTUDIO</div>`;
  const cnt = `<div class="count">${i}/${n}</div>`;
  const bc = s.color==='coral' ? 'big coral' : 'big';
  const lc = s.color==='coral' ? 'lead coral' : 'lead';

  if(s.t==='coverphoto') return `<div class="board cover">
    <div class="photo" style="background-image:url('${COVER}')"></div><div class="grad"></div>${wm}${cnt}
    <div class="stack"><span class="cb">${L(s.box)}</span><span class="cta">${H(s.cta)}</span></div></div>`;

  if(s.t==='covertext') return `<div class="board cream covertext">${wm}${cnt}
    ${s.kicker?`<div class="kicker">${H(s.kicker)}</div>`:''}
    <div class="big">${L(s.big)}</div>${s.big2?`<div class="big coral">${L(s.big2)}</div>`:''}
    ${s.cta?`<div class="post small">${H(s.cta)}</div>`:''}</div>`;

  if(s.t==='reelhook') return `<div class="board reelhook"><div class="tag">REEL</div>
    <div class="wm" style="top:auto;bottom:56px">NL<b>Z</b> ESTUDIO</div>
    <div class="big">${L(s.big)}</div><div class="sub">${H(s.sub)}</div></div>`;

  if(s.t==='boxes') return `<div class="board cream">${wm}${cnt}
    <div class="pre">${H(s.pre)}</div><div class="boxes">${s.items.map(x=>`<span>${H(x)}</span>`).join('')}</div></div>`;

  if(s.t==='lead') return `<div class="board cream">${wm}${cnt}
    ${s.pre?`<div class="pre">${H(s.pre)}</div>`:''}
    <div class="${lc}">${L(s.big)}</div>
    ${s.post?`<div class="post small">${H(s.post)}</div>`:''}
    ${s.list?`<div class="list">${L(s.list)}</div>`:''}
    ${s.darkbox?`<div class="push"></div><div><span class="darkbox">${H(s.darkbox)}</span></div>`:''}</div>`;

  if(s.t==='bigwhite') return `<div class="board cream">${wm}${cnt}
    ${s.pre?`<div class="pre">${H(s.pre)}</div>`:''}
    <div class="${bc}">${L(s.big)}</div>
    <div class="gap"></div><div><span class="whitebox">${H(s.whitebox)}</span></div>
    ${s.list?`<div class="list">${L(s.list)}</div>`:''}</div>`;

  if(s.t==='rows') return `<div class="board cream">${wm}${cnt}
    ${s.pre?`<div class="pre">${H(s.pre)}</div>`:''}
    ${s.big?`<div class="${lc}" style="margin-bottom:34px">${L(s.big)}</div>`:''}
    <div class="rows">${s.rows.map(r=>`<div class="row"><span>${H(r[0])}</span> <span class="ar">↔</span> <span class="mid">${H(r[1])}</span> <span class="ar">↔</span> <span>${H(r[2])}</span></div>`).join('')}</div>
    ${s.post?`<div class="push"></div><div class="small">${H(s.post)}</div>`:''}</div>`;

  if(s.t==='quotes') return `<div class="board cream">${wm}${cnt}
    <div class="qp">${s.pairs.map(p=>`<div><div class="lbl">${H(p.lbl)}</div><div class="q">${H(p.q)}</div></div>`).join('')}</div>
    ${(s.post||s.big)?`<div class="push"></div>`:''}
    ${s.post?`<div class="small">${H(s.post)}</div><div class="gap-s"></div>`:''}
    ${s.big?`<div class="${bc}">${L(s.big)}</div>`:''}</div>`;

  if(s.t==='verbs') return `<div class="board cream">${wm}${cnt}
    ${s.pre?`<div class="pre">${H(s.pre)}</div>`:''}
    ${s.lead?`<div class="lead" style="font-size:60px;margin-bottom:26px">${L(s.lead)}</div>`:''}
    <div class="verbs">${s.items.map(x=>`<span>${H(x)}</span>`).join('')}</div>
    ${s.annot?`<div class="annot">${H(s.annot)}</div>`:''}
    ${s.big?`<div class="push"></div><div class="${bc}">${L(s.big)}</div>`:''}</div>`;

  if(s.t==='final') return `<div class="board final">${wm}${cnt}
    ${(s.small||[]).map(x=>`<div class="small">${H(x)}</div><div class="gap"></div>`).join('')}
    <div class="big">${L(s.big)}</div><div class="gap"></div><div class="gap"></div>
    <div><span class="fbox">${H(s.box)}</span></div>
    <div class="brand">NL<b>Z</b> ESTUDIO<span>@NATI_LUQUEZAMPIERI · CÓRDOBA</span></div></div>`;

  return `<div class="board cream">${wm}${cnt}<div class="big">${L(s.big)}</div></div>`;
}

function docFor(post){
  const n = post.slides.length;
  const boards = post.slides.map((s,idx)=>slideHTML(s, idx+1, n)).join('\n');
  return `<!doctype html><html lang="es"><head><meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,700;9..144,900&family=Archivo:wght@400;600;700;800&display=swap">
  <style>${CSS}</style></head><body>${boards}</body></html>`;
}

function captionFile(p){
  let out = `${p.title}\n${p.fmt} · Semana ${p.wk} · ${p.day} · 20:30 hs\n\n— CAPTION —\n${p.caption}\n\n${p.tags}\n\nCTA: ${p.cta}\n`;
  if(p.guion){ out += `\n— ${p.guion}\n`; }
  return out;
}

(async () => {
  fs.rmSync(OUT, {recursive:true, force:true});
  fs.mkdirSync(OUT, {recursive:true});
  const browser = await chromium.launch();
  const page = await browser.newPage({viewport:{width:1080,height:1350}, deviceScaleFactor:1});
  for(const p of posts){
    const dir = path.join(OUT, p.id);
    fs.mkdirSync(dir, {recursive:true});
    fs.writeFileSync(path.join(dir,'caption.txt'), captionFile(p));
    await page.setContent(docFor(p), {waitUntil:'load'});
    try{ await page.waitForLoadState('networkidle',{timeout:8000}); }catch(e){}
    try{ await page.evaluate(()=>document.fonts.ready); }catch(e){}
    await page.waitForTimeout(400);
    const boards = await page.$$('.board');
    for(let i=0;i<boards.length;i++){
      const name = p.fmt==='Reel' ? 'cover.png' : `slide_${i+1}.png`;
      await boards[i].screenshot({path:path.join(dir,name)});
    }
    console.log('OK', p.id, '('+boards.length+')');
  }
  await browser.close();
  console.log('DONE ->', OUT);
})().catch(e=>{console.error('ERR',e);process.exit(1);});
