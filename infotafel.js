/* Gemeinsamer Code für Infotafel (index.html) und Bearbeiten-Seite (bearbeiten.html).
   Hier stehen die Symbole, Farben und das Lesen der Tabelle. */
const STANDARD_SEKUNDEN = 18;
/* ---------- Farben (Spalte "farbe") ---------- */
const FARBEN = {
  blau:  ["#036AB4","#E3EFF9"],
  gruen: ["#2E7D4F","#E2F2E8"],
  gelb:  ["#A87500","#FFF4CC"],
  orange:["#C85A12","#FCE9DA"],
  rot:   ["#C62828","#FBE3E3"],
  lila:  ["#6A4C9C","#EEE8F7"],
  grau:  ["#4E5A66","#ECEFF2"]
};

/* ---------- Symbole im Metacom-ähnlichen Stil (Spalte "symbol") ---------- */
const K = 'stroke="#1D1D1B" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"';
const HAUT = "#F6D2B0";
const SYMBOLE = {
  hallo: `<circle cx="52" cy="30" r="15" fill="${HAUT}" ${K}/>
    <path d="M28 112 V74 a24 24 0 0 1 48 0 V112 Z" fill="#7DB4E3" ${K}/>
    <path d="M72 70 L94 40" fill="none" stroke="#1D1D1B" stroke-width="12" stroke-linecap="round"/>
    <path d="M72 70 L94 40" fill="none" stroke="#7DB4E3" stroke-width="3" stroke-linecap="round"/>
    <circle cx="97" cy="34" r="9" fill="${HAUT}" ${K}/>
    <path d="M104 16 l6 -7 M112 28 l9 -3" fill="none" ${K}/>`,
  anmeldung: `<circle cx="64" cy="30" r="14" fill="${HAUT}" ${K}/>
    <path d="M40 72 a24 24 0 0 1 48 0 Z" fill="#7DB4E3" ${K}/>
    <rect x="8" y="72" width="104" height="38" rx="4" fill="#C99A6B" ${K}/>
    <path d="M14 72 a10 10 0 0 1 20 0 Z" fill="#FFD43B" ${K}/><path d="M24 58 v4" ${K}/>`,
  menschen: `<circle cx="28" cy="40" r="12" fill="${HAUT}" ${K}/><path d="M8 108 V76 a20 20 0 0 1 40 0 V108 Z" fill="#9BD08A" ${K}/>
    <circle cx="92" cy="40" r="12" fill="${HAUT}" ${K}/><path d="M72 108 V76 a20 20 0 0 1 40 0 V108 Z" fill="#F4A261" ${K}/>
    <circle cx="60" cy="30" r="14" fill="${HAUT}" ${K}/><path d="M36 110 V70 a24 24 0 0 1 48 0 V110 Z" fill="#7DB4E3" ${K}/>`,
  werkstatt: `<g transform="rotate(-40 60 60)"><rect x="54" y="34" width="12" height="80" rx="4" fill="#C99A6B" ${K}/><rect x="32" y="14" width="56" height="24" rx="4" fill="#9AA5B1" ${K}/></g>
    <g transform="rotate(40 60 60)"><rect x="54" y="40" width="12" height="72" rx="5" fill="#B8C2CC" ${K}/><path d="M51 8 v16 h18 v-16 a21 21 0 1 1 -18 0 Z" fill="#B8C2CC" ${K}/></g>`,
  bildung: `<path d="M60 36 C46 26 26 26 10 30 V96 C26 92 46 92 60 102 Z" fill="#fff" ${K}/>
    <path d="M60 36 C74 26 94 26 110 30 V96 C94 92 74 92 60 102 Z" fill="#fff" ${K}/>
    <path d="M22 46 h26 M22 60 h26 M22 74 h26 M72 46 h26 M72 60 h26 M72 74 h26" stroke="#7DB4E3" stroke-width="4" stroke-linecap="round"/>
    <path d="M60 36 V102" ${K}/>`,
  wohnen: `<rect x="24" y="54" width="72" height="56" fill="#F3E3C3" ${K}/>
    <path d="M10 60 L60 16 L110 60 Z" fill="#D9534F" ${K}/>
    <rect x="50" y="76" width="20" height="34" fill="#8B5E3C" ${K}/>
    <rect x="30" y="66" width="14" height="14" fill="#BFE3FF" ${K}/><rect x="76" y="66" width="14" height="14" fill="#BFE3FF" ${K}/>`,
  kinder: `<circle cx="40" cy="26" r="13" fill="${HAUT}" ${K}/><path d="M18 112 V66 a22 22 0 0 1 44 0 V112 Z" fill="#7DB4E3" ${K}/>
    <path d="M60 78 L78 82" ${K}/>
    <circle cx="90" cy="56" r="10" fill="${HAUT}" ${K}/><path d="M74 112 V86 a16 16 0 0 1 32 0 V112 Z" fill="#FFD43B" ${K}/>`,
  beratung: `<path d="M10 20 h56 a8 8 0 0 1 8 8 v28 a8 8 0 0 1 -8 8 h-34 l-14 12 v-12 h-8 a8 8 0 0 1 -8 -8 v-28 a8 8 0 0 1 8 -8 Z" fill="#BFE3FF" ${K}/>
    <path d="M54 52 h56 a8 8 0 0 1 8 8 v28 a8 8 0 0 1 -8 8 h-6 v12 l-14 -12 h-36 a8 8 0 0 1 -8 -8 v-28 a8 8 0 0 1 8 -8 Z" fill="#FFE08A" ${K}/>
    <circle cx="70" cy="74" r="4" fill="#1D1D1B"/><circle cx="84" cy="74" r="4" fill="#1D1D1B"/><circle cx="98" cy="74" r="4" fill="#1D1D1B"/>`,
  cafe: `<path d="M38 22 q-6 8 0 16 M54 18 q-6 10 0 20 M70 22 q-6 8 0 16" fill="none" ${K}/>
    <path d="M20 46 h68 v20 a34 34 0 0 1 -68 0 Z" fill="#fff" ${K}/>
    <path d="M88 52 a13 13 0 0 1 0 26" fill="none" ${K}/>
    <ellipse cx="54" cy="104" rx="46" ry="8" fill="#C99A6B" ${K}/>`,
  telefon: `<path d="M30 14 c-10 4 -16 16 -12 30 c9 28 30 50 58 60 c14 4 26 -2 30 -12 l-16 -18 c-4 -4 -10 -4 -14 0 l-7 7 c-14 -6 -26 -18 -32 -32 l7 -7 c4 -4 4 -10 0 -14 Z" fill="#5DBB63" ${K}/>`,
  email: `<rect x="10" y="26" width="100" height="70" rx="8" fill="#fff" ${K}/>
    <path d="M14 32 L60 68 L106 32" fill="none" ${K}/>`,
  hinweis: `<path d="M60 12 L112 104 H8 Z" fill="#FFD43B" ${K}/>
    <rect x="55" y="40" width="10" height="36" rx="5" fill="#1D1D1B"/><circle cx="60" cy="90" r="6" fill="#1D1D1B"/>`,
  kalender: `<rect x="12" y="22" width="96" height="88" rx="8" fill="#fff" ${K}/>
    <path d="M12 30 a8 8 0 0 1 8 -8 h80 a8 8 0 0 1 8 8 v18 h-96 Z" fill="#D9534F" ${K}/>
    <path d="M36 12 v20 M84 12 v20" ${K}/>
    <g fill="#7DB4E3"><rect x="24" y="60" width="14" height="12" rx="2"/><rect x="46" y="60" width="14" height="12" rx="2"/><rect x="68" y="60" width="14" height="12" rx="2"/>
    <rect x="24" y="82" width="14" height="12" rx="2"/><rect x="46" y="82" width="14" height="12" rx="2"/></g>
    <rect x="68" y="82" width="14" height="12" rx="2" fill="#D9534F"/>`,
  uhr: `<circle cx="60" cy="60" r="48" fill="#fff" ${K}/>
    <path d="M60 26 V60 L82 74" fill="none" stroke="#1D1D1B" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="60" cy="60" r="5" fill="#1D1D1B"/>`,
  essen: `<circle cx="60" cy="64" r="34" fill="#fff" ${K}/><circle cx="60" cy="64" r="20" fill="#EAF4FB" stroke="#9AA5B1" stroke-width="3"/>
    <path d="M12 26 v24 a6 6 0 0 0 12 0 v-24 M18 50 v58" fill="none" ${K}/>
    <path d="M106 108 V24 c-10 6 -12 26 -12 40 h12" fill="#B8C2CC" ${K}/>`,
  toilette: `<rect x="10" y="20" width="100" height="80" rx="14" fill="#7DB4E3" ${K}/>
    <text x="60" y="78" font-size="50" font-weight="800" text-anchor="middle" fill="#fff" font-family="Arial">WC</text>`,
  rollstuhl: `<rect x="8" y="8" width="104" height="104" rx="14" fill="#036AB4" ${K}/>
    <circle cx="54" cy="26" r="8" fill="#fff"/>
    <path d="M54 38 V64 H76 L84 88" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M54 50 H72" stroke="#fff" stroke-width="7" stroke-linecap="round"/>
    <path d="M40 56 a24 24 0 1 0 34 26" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,
  info: `<circle cx="60" cy="60" r="50" fill="#036AB4" ${K}/>
    <circle cx="60" cy="34" r="8" fill="#fff"/><rect x="53" y="50" width="14" height="44" rx="6" fill="#fff"/>`,
  firma: `<path d="M10 108 V60 L36 76 V60 L62 76 V60 L86 76 V24 h20 v84 Z" fill="#B8C2CC" ${K}/>
    <g fill="#FFD43B"><rect x="20" y="86" width="12" height="10"/><rect x="44" y="86" width="12" height="10"/><rect x="68" y="86" width="12" height="10"/></g>`,
  warten: `<path d="M24 20 v84 M24 66 h50 v38" fill="none" ${K}/>
    <rect x="24" y="58" width="52" height="10" rx="3" fill="#C99A6B" ${K}/>
    <rect x="18" y="16" width="14" height="50" rx="4" fill="#C99A6B" ${K}/>
    <circle cx="92" cy="34" r="20" fill="#fff" ${K}/><path d="M92 22 V34 L100 40" fill="none" ${K}/>`,
  garten: `<rect x="52" y="64" width="16" height="46" fill="#8B5E3C" ${K}/>
    <circle cx="60" cy="44" r="34" fill="#7CC36E" ${K}/>
    <path d="M10 110 H110" ${K}/>`,
  parken: `<rect x="10" y="10" width="100" height="100" rx="14" fill="#036AB4" ${K}/>
    <path d="M44 92 V30 h20 a16 16 0 0 1 0 32 h-20" fill="none" stroke="#fff" stroke-width="12" stroke-linejoin="round" stroke-linecap="round"/>`,
  geburtstag: `<rect x="18" y="60" width="84" height="48" rx="6" fill="#F7B2C4" ${K}/>
    <path d="M18 76 q10 8 21 0 q10 8 21 0 q10 8 21 0 q10 8 21 0" fill="none" ${K}/>
    <path d="M40 60 V40 M60 60 V40 M80 60 V40" ${K}/>
    <path d="M40 22 q6 8 0 12 q-6 -4 0 -12 M60 22 q6 8 0 12 q-6 -4 0 -12 M80 22 q6 8 0 12 q-6 -4 0 -12" fill="#FFB020" ${K}/>`
};
const SYMBOL_ALIAS = {
  willkommen:"hallo",begruessung:"hallo",hallo:"hallo",
  empfang:"anmeldung",rezeption:"anmeldung",anmeldung:"anmeldung",
  gruppe:"menschen",team:"menschen",wir:"menschen",ase:"menschen",
  arbeit:"werkstatt",handwerk:"werkstatt",werkzeug:"werkstatt",
  schule:"bildung",lernen:"bildung",bbb:"bildung",buch:"bildung",
  haus:"wohnen",wohnheim:"wohnen",
  familie:"kinder",kita:"kinder",kind:"kinder",
  kokobe:"beratung",gespraech:"beratung",reden:"beratung",
  kaffee:"cafe",
  anruf:"telefon",tel:"telefon",
  mail:"email","e-mail":"email",post:"email",brief:"email",
  achtung:"hinweis",wichtig:"hinweis",
  termin:"kalender",termine:"kalender",datum:"kalender",
  zeit:"uhr",oeffnungszeiten:"uhr",
  kantine:"essen",mittag:"essen",mittagessen:"essen",
  wc:"toilette",klo:"toilette",
  barrierefrei:"rollstuhl",
  information:"info",
  kunden:"firma",betrieb:"firma",fabrik:"firma",
  wartebereich:"warten",stuhl:"warten",
  natur:"garten",baum:"garten",
  parkplatz:"parken",
  fest:"geburtstag",feier:"geburtstag",kuchen:"geburtstag"
};
function norm(s){return String(s||"").trim().toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss");}
function symbolHTML(name){
  const raw = String(name||"").trim();
  if (/^(https?:\/\/|data:image\/|bilder\/)/i.test(raw) || /\.(png|jpe?g|svg|gif|webp)$/i.test(raw)) {
    return `<img src="${raw.replace(/"/g,"&quot;")}" alt="">`;   // eigenes Bild (z. B. später Metacom)
  }
  const n = norm(raw);
  const key = SYMBOLE[n] ? n : (SYMBOL_ALIAS[n] || "info");
  return `<svg viewBox="0 0 120 120">${SYMBOLE[key]}</svg>`;
}

/* ---------- CSV lesen (Komma oder Semikolon, Anführungszeichen erlaubt) ---------- */
function parseCSV(text){
  text = text.replace(/^﻿/,"");
  const first = text.split(/\r?\n/)[0];
  const sep = (first.split(";").length > first.split(",").length) ? ";" : ",";
  const rows=[]; let row=[], cell="", q=false;
  for (let i=0;i<text.length;i++){
    const c=text[i];
    if (q){
      if (c==='"'){ if (text[i+1]==='"'){cell+='"';i++;} else q=false; }
      else cell+=c;
    } else if (c==='"') q=true;
    else if (c===sep){ row.push(cell); cell=""; }
    else if (c==="\n"||c==="\r"){ if(c==="\r"&&text[i+1]==="\n") i++; row.push(cell); rows.push(row); row=[]; cell=""; }
    else cell+=c;
  }
  if (cell!==""||row.length){ row.push(cell); rows.push(row); }
  const head = (rows.shift()||[]).map(spaltenName);
  return rows.filter(r=>r.some(v=>v.trim()!=="")).map(r=>{
    const o={}; head.forEach((h,i)=>o[h]=(r[i]||"").trim()); return o;
  });
}
/* Spaltenüberschriften verstehen – egal ob kurz ("titel") oder ausführlich ("Überschrift") */
function spaltenName(h){
  const n = " " + norm(h).replace(/[^a-z0-9]+/g," ") + " ";
  let m;
  if (/ (anzeig|aktiv)/.test(n)) return "aktiv";
  if (/(untertitel|klein)/.test(n)) return "untertitel";
  if (/(ueberschrift|titel)/.test(n)) return "titel";
  if ((m = n.match(/ (?:satz|punkt|zeile) ?(\d)/))) return "punkt" + m[1];
  if (/(bild|symbol|pikto)/.test(n)) return "symbol";
  if (/farbe/.test(n)) return "farbe";
  if (/(sekunden|dauer)/.test(n)) return "sekunden";
  if (/ bis /.test(n)) return "bis";
  if (/ (ab|von) /.test(n)) return "von";
  return norm(h);
}
const JA_NEIN = ["","ja","j","x","1","nein","n","0","aus"];
function parseDate(s, endOfDay){
  s=String(s||"").trim(); if(!s) return null;
  let m=s.match(/^(\d{1,2})\.(\d{1,2})\.(\d{2,4})$/), d;
  if (m){ let y=+m[3]; if(y<100) y+=2000; d=new Date(y,+m[2]-1,+m[1]); }
  else if ((m=s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/))) d=new Date(+m[1],+m[2]-1,+m[3]);
  else return null;
  if (endOfDay) d.setHours(23,59,59,999);
  return d;
}
function toSlides(rows){
  return rows.filter(r=>JA_NEIN.includes(norm(r.aktiv))).map(r=>({   // Erklärungs-Zeilen werden übersprungen
    aktiv: !["nein","n","0","aus"].includes(norm(r.aktiv)),
    titel: r.titel||"",
    untertitel: r.untertitel||"",
    punkte: [r.punkt1,r.punkt2,r.punkt3,r.punkt4,r.punkt5].filter(p=>p&&p.trim()),
    symbol: r.symbol||"info",
    farbe: norm(r.farbe)||"blau",
    sekunden: Math.max(5, parseInt(r.sekunden,10)||STANDARD_SEKUNDEN),
    von: parseDate(r.von,false),
    bis: parseDate(r.bis,true)
  })).filter(s=>s.titel || s.punkte.length);
}
function visibleSlides(){
  const now=new Date();
  return ALL.filter(s=>s.aktiv && (!s.von||s.von<=now) && (!s.bis||s.bis>=now));
}


/* ---------- Prototyp: Folien direkt im Browser dieses Geräts speichern ---------- */
const LOKAL_KEY = "ase_folien_lokal";
const LOKAL_STAND_KEY = "ase_folien_stand";
function lokalerStand(){ try{ return localStorage.getItem(LOKAL_STAND_KEY)||""; }catch(e){ return ""; } }
function lokaleFolien(){
  try{ const d = localStorage.getItem(LOKAL_KEY); const a = d ? JSON.parse(d) : null; const l = Array.isArray(a) ? a.filter(f=>f && typeof f==="object") : []; return l.length ? l : null; }
  catch(e){ return null; }
}
function objZuSlides(arr){
  return (Array.isArray(arr)?arr:[]).filter(f=>f && typeof f==="object").map(f=>({
    aktiv: f.aktiv !== false,
    titel: f.titel||"", untertitel: f.untertitel||"",
    punkte: (Array.isArray(f.punkte)?f.punkte:[]).filter(p=>p && String(p).trim()),
    symbol: f.symbol||"info", farbe: f.farbe||"blau",
    sekunden: Math.max(5, parseInt(f.sekunden,10)||STANDARD_SEKUNDEN),
    von: parseDate(f.von,false), bis: parseDate(f.bis,true)
  })).filter(s=>s.titel || s.punkte.length);
}

/* SHA-256 (funktioniert auch ohne https, z. B. später im internen Netz) */
function sha256(text){
  const K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
  const bytes = Array.from(unescape(encodeURIComponent(text)), c=>c.charCodeAt(0));
  const l = bytes.length*8; bytes.push(0x80);
  while (bytes.length%64!==56) bytes.push(0);
  for (let i=7;i>=0;i--) bytes.push(i>3?0:(l>>>(i*8))&255);
  let H=[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
  const r=(x,n)=>(x>>>n)|(x<<(32-n));
  for (let o=0;o<bytes.length;o+=64){
    const w=new Array(64);
    for (let i=0;i<16;i++) w[i]=(bytes[o+i*4]<<24)|(bytes[o+i*4+1]<<16)|(bytes[o+i*4+2]<<8)|bytes[o+i*4+3];
    for (let i=16;i<64;i++){ const s0=r(w[i-15],7)^r(w[i-15],18)^(w[i-15]>>>3), s1=r(w[i-2],17)^r(w[i-2],19)^(w[i-2]>>>10); w[i]=(w[i-16]+s0+w[i-7]+s1)|0; }
    let [a,b,c,d,e,f,g,h]=H;
    for (let i=0;i<64;i++){
      const t1=(h+(r(e,6)^r(e,11)^r(e,25))+((e&f)^(~e&g))+K[i]+w[i])|0;
      const t2=((r(a,2)^r(a,13)^r(a,22))+((a&b)^(a&c)^(b&c)))|0;
      h=g; g=f; f=e; e=(d+t1)|0; d=c; c=b; b=a; a=(t1+t2)|0;
    }
    H=H.map((x,i)=>(x+[a,b,c,d,e,f,g,h][i])|0);
  }
  return H.map(x=>(x>>>0).toString(16).padStart(8,"0")).join("");
}
function passwortHash(pw, salz){ let h=salz+":"+pw; for(let i=0;i<2000;i++) h=sha256(h+salz); return h; }
