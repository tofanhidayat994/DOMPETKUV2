const VER='dompetku-v7';
const SHELL=['./','index.html','manifest.json','icon-192.png','icon-512.png','maskable-512.png','firebase-config.js','firebase-app-compat.js','firebase-auth-compat.js','firebase-firestore-compat.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VER).then(c=>Promise.allSettled(SHELL.map(u=>c.add(u)))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VER).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET')return;
  /* hanya berkas aplikasi dan font; lalu lintas Firebase/Google TIDAK boleh dicegat atau di-cache */
  const u=new URL(r.url);if(u.origin!==location.origin&&!/(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(u.hostname))return;
  if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(VER).then(c=>c.put('index.html',cp));return res}).catch(()=>caches.match('index.html')));return}
  e.respondWith(caches.match(r).then(hit=>{const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque')){const cp=res.clone();caches.open(VER).then(c=>c.put(r,cp))}return res}).catch(()=>hit);return hit||net}))
});
