if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const o={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return o;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-a444cf8b"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/fonts/platform-amazon.png",revision:"8b190df931e2054ee7d5a0c5101b5308"},{url:"/beta/apps/catalog/fonts/platform-default.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-openshift.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-tower.png",revision:"01c109fb5977d84edfbe585276bf9cad"},{url:"/beta/apps/catalog/index.html",revision:"b880f8904e7f1081f24e2c46e3fe82fe"},{url:"/beta/apps/catalog/js/App.44307318ecd7751ef095.js",revision:"69894c4d488abbd53ee79cec9072c5c0"},{url:"/beta/apps/catalog/js/defaultVendors~order-detail.99422dcd676c4f2c496b.js",revision:"d067e2cbf44f47ce6a43109c67074ce0"},{url:"/beta/apps/catalog/js/defaultVendors~orders.0c7b5dae06b3768a3fac.js",revision:"c74e0af9031b8b35af29c815c3c1271d"},{url:"/beta/apps/catalog/js/defaultVendors~survey-editor.e777786bfab23435ecb0.js",revision:"910adb45aee068c3c36f867858962b0e"},{url:"/beta/apps/catalog/js/default~orders~platform.4aad442577d8382ec7cd.js",revision:"a69d49f4aa44a4980e514a92db214dbf"},{url:"/beta/apps/catalog/js/default~platform~portfolio~portfolios.e5815d7d32645974f245.js",revision:"b357ca01d8409fd082b631ea60f1417d"},{url:"/beta/apps/catalog/js/error-page.0de18277cb173c6f4b77.js",revision:"32dcdfb222e5dfea6cbbbf9a1360b51f"},{url:"/beta/apps/catalog/js/order-detail.c23daaed51a73064fc9f.js",revision:"4711282b2aa251d60bb196df3936fa33"},{url:"/beta/apps/catalog/js/orders.82fedb5173073895a890.js",revision:"9087ea22d68a2db073e09dfb187dbb27"},{url:"/beta/apps/catalog/js/platform.9aedd0d049ed06e2e259.js",revision:"1d5cdc7d7419d2f8adad8be0f43373c3"},{url:"/beta/apps/catalog/js/platforms.a05adcbfd555d9e88c4d.js",revision:"407b7d8cd606656746a9370202a7f85d"},{url:"/beta/apps/catalog/js/portfolio.25d8b1ede453d806d75b.js",revision:"96d226edea06e7ae26ccc36eb6a53588"},{url:"/beta/apps/catalog/js/portfolios.0e6a53e4f0a81d2ddb48.js",revision:"60af9d939c52542d7a8d21cbc2fd82f9"},{url:"/beta/apps/catalog/js/products.ede830e6472cc77a49e5.js",revision:"0d992df272d0fd6e32e1169a3e817e78"},{url:"/beta/apps/catalog/js/survey-editor.a97dec8a189851bd408c.js",revision:"9648bf7de3c63cf4d4a82585a7e770f5"}],{})}));
