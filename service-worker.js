if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return s[a]||(e=new Promise(async e=>{if("document"in self){const s=document.createElement("script");s.src=a,document.head.appendChild(s),s.onload=e}else importScripts(a),e()})),e.then(()=>{if(!s[a])throw new Error(`Module ${a} didn’t register its module`);return s[a]})},e=(e,s)=>{Promise.all(e.map(a)).then(a=>s(1===a.length?a[0]:a))},s={require:Promise.resolve(e)};self.define=(e,c,b)=>{s[e]||(s[e]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+e.slice(1)};return Promise.all(c.map(e=>{switch(e){case"exports":return s;case"module":return f;default:return a(e)}})).then(a=>{const e=b(...a);return s.default||(s.default=e),s})}))}}define("./service-worker.js",["./workbox-e50bde17"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/fonts/platform-amazon.png",revision:"8b190df931e2054ee7d5a0c5101b5308"},{url:"/beta/apps/catalog/fonts/platform-default.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-openshift.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-tower.png",revision:"01c109fb5977d84edfbe585276bf9cad"},{url:"/beta/apps/catalog/index.html",revision:"7b89451aa43d3c41bffd57c5fcdc3730"},{url:"/beta/apps/catalog/js/0.7f708f0f5576974ce7d9.js",revision:"d95d254dae7e07fc035a10699eb31910"},{url:"/beta/apps/catalog/js/3.c416d9fa40c9ce46d120.js",revision:"de76a110e983adf24345482f3080dc6b"},{url:"/beta/apps/catalog/js/63.36f86684df7a4cc0da41.js",revision:"962664630c1bd39f729f377f37071467"},{url:"/beta/apps/catalog/js/App.16029c49e94f1f27074c.js",revision:"fe85ea5a62a202c0fb0cba33ecfc8596"},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.9b9776afe46ef12e942b.js",revision:"963d17638c48648f5fb0cc50e51e4591"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.4d12906ed51fa66b7f14.js",revision:"829d92603d57116812387a82380667be"},{url:"/beta/apps/catalog/js/approval-request~31ecd969.f8fbfa51192ed7b9fa50.js",revision:"5d8afbe7168989b404c143787574ca1b"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~1601866c.18f28c22badeb86c3ddf.js",revision:"c02af5eb7d88b6ab656db737df32ab73"},{url:"/beta/apps/catalog/js/edit-approval-workflow~91f4305a.6e296346da5c96576016.js",revision:"9323618a3c751c8e226074f8d6325a9e"},{url:"/beta/apps/catalog/js/error-page~31ecd969.2aa55d582f20a7198a52.js",revision:"d2e386b4301b3ece2f7dfff19abe8ce0"},{url:"/beta/apps/catalog/js/framework~f9ca8911.86e83cecbd6e2fe32546.js",revision:"10fde38910fa9ff037f87a02e539f32d"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.561f0a0e36a6cd746caf.js",revision:"8aa9e0e82c73dcd78ab9b242a1fa89b5"},{url:"/beta/apps/catalog/js/lib~App~0f485567.031e39608099a405a3f0.js",revision:"ee9851f95c77aa8425046aebfed87dfa"},{url:"/beta/apps/catalog/js/lib~App~1c3a2c3f.e5ad3f8f24cb6f431474.js",revision:"f1f5312f08ff117aaac91091d3422a0b"},{url:"/beta/apps/catalog/js/lib~App~2539590c.8be9015c3c67b9a83e12.js",revision:"164516d6ffdc838bbf5e2a03ca817713"},{url:"/beta/apps/catalog/js/lib~App~253ae210.68f42af62beebf584b78.js",revision:"170791dd555b73ea16ba74c8f4a81ad0"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.034db7169769654768ba.js",revision:"c40f7642b733a82a5204c1063d537227"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.2f9cd7745ff3c8b417a6.js",revision:"f209da305051aec101fb8b5b0e85a610"},{url:"/beta/apps/catalog/js/lib~App~60b88c48.3c50e882016ca1e2924a.js",revision:"edac0182fb3d07f14d205762261f8602"},{url:"/beta/apps/catalog/js/lib~App~6625447d.7a0c30077bfbb190730f.js",revision:"6766e09535abb00aa55f55702d9ae855"},{url:"/beta/apps/catalog/js/lib~App~678f84af.3677321b1d3e31eb438a.js",revision:"0713cff0641b57372097ca3f56dd5ac4"},{url:"/beta/apps/catalog/js/lib~App~690b702c.6858bda92aa895cfe581.js",revision:"77781d11d0fb78824a67564a0572141d"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.3798480362a72f667a94.js",revision:"709ff7b1be494db494a11bd19e671c38"},{url:"/beta/apps/catalog/js/lib~App~b2e0d743.5eec4bdf82b9d5ab92b1.js",revision:"f1e3a759e977e8c1c89bbdecc22c6871"},{url:"/beta/apps/catalog/js/lib~App~b8ebd723.5adad15578c007a88336.js",revision:"96c961e526c357bc6a35aa6a59fee120"},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.e63a849dfdd893497896.js",revision:"40beee30fd2d8893a80ce914e42280fa"},{url:"/beta/apps/catalog/js/lib~App~cf15acf0.6aceb7bf37dbe6aac862.js",revision:"1617e6ce5ad22af66fb7f2c583314647"},{url:"/beta/apps/catalog/js/lib~App~f373cf78.12daa48ce67bde600bd9.js",revision:"156dca525b3504be93e72c4d03d9c1f4"},{url:"/beta/apps/catalog/js/lib~App~f79053e5.83be0d360a83e2f4f246.js",revision:"6d69570642b049705d8b8390546a1583"},{url:"/beta/apps/catalog/js/lib~add-portfolio~copy-portfolio-item-modal~order-detail~order-modal~orders~share-portfolio~253ae210.9e834433325df60b6d39.js",revision:"153f1506ea8ccb662ca8c0fb985280a7"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~76d93fce.12486116c524d14b8c43.js",revision:"c63e67a7f511f2a6f9e6686801646a87"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~77bf5e45.1a4d33bd8cc089b1dc44.js",revision:"a2fe93c779400383e1451eecb2a6e400"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~b09b0461.685a5b5d0e9ac77f610b.js",revision:"f36bb91f46da11d8a63fe961a7a5b474"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~cbe9451d.cdc184dbb1025fedada6.js",revision:"f583d9f2f01568d6123aafb487c662cf"},{url:"/beta/apps/catalog/js/lib~approval-request~portfolio-item-detail~807bc7cd.fd4f52b6132df0e715e4.js",revision:"fc76e39f8e383ca3b788989826517e35"},{url:"/beta/apps/catalog/js/lib~order-details~service-offering-detail~4bec7f87.d691065d2218f8162b9c.js",revision:"fdd351eb39b56569ffa468e11301b9b7"},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.98789ea453c85ad6f017.js",revision:"4a8075bd083250c9e876e6c44fd1a2b7"},{url:"/beta/apps/catalog/js/lib~order-processes~orders~platform~platforms~portfolio~portfolios~products~31ecd969.5ea1e14d09b913a5e7a4.js",revision:"c4f5f688eb62fbe42ae45d2287b38f34"},{url:"/beta/apps/catalog/js/lib~order-processes~portfolios~76d93fce.b6e26ab31bbe28630e59.js",revision:"c1484cd2035080d69cb2b6694a6490cd"},{url:"/beta/apps/catalog/js/lib~order-processes~portfolios~c895ce40.718ebd07eb860cd7190c.js",revision:"640baaff62ad8d5ca78d1777f7ba153d"},{url:"/beta/apps/catalog/js/lib~order-processes~portfolios~cf15acf0.3582adf1ad95b0b77c22.js",revision:"5f5dbe67ba03c47f521c53c591127c14"},{url:"/beta/apps/catalog/js/lib~platform~platforms~portfolio~products~31ecd969.e80fd7a519f3e3fc9df6.js",revision:"d59a3f4565ac22d155b6bdb74fefafef"},{url:"/beta/apps/catalog/js/order-details~31ecd969.0cf7c8fedca059359d72.js",revision:"7511cf95cdbdcd5220b40dd253d4e2c2"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.cd6cf313763b05d14d04.js",revision:"6cb06573eb62cfe29fce43cbfb6a9f83"},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.c138d9a7305868ba6cfd.js",revision:"0aaf522d8753f195cb7f8127b7722d05"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.873ae6e9aa09a171fc0c.js",revision:"152c886226df0663a15238dfed574f89"},{url:"/beta/apps/catalog/js/order-processes~31ecd969.491d94661a32d55601d2.js",revision:"a827e53cc36d54fd709daf69efb2ce2d"},{url:"/beta/apps/catalog/js/orders~763301a3.16a662de2c9022a19600.js",revision:"738324f9d2fef592e307db2109940fac"},{url:"/beta/apps/catalog/js/orders~91f4305a.b0626d6e214bf2f31b6c.js",revision:"11bfe752abda060bcab8e6c87033acd3"},{url:"/beta/apps/catalog/js/orders~c895ce40.d51e36c8131bbddcc70e.js",revision:"c3a434b35eaa23e75694eab715bff45e"},{url:"/beta/apps/catalog/js/orders~cf15acf0.37f5d3011fab112a554d.js",revision:"570cbd2ac9ce3b57ba977960828f64f4"},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.01b43c2688f1801b24df.js",revision:"1b24296187af31ba137371d59507c74c"},{url:"/beta/apps/catalog/js/platform-templates~5a11b65b.801d4f4f5ce7209d29cb.js",revision:"b1a0eeffe838bb3df8290f945dca97cb"},{url:"/beta/apps/catalog/js/platforms~f71cff67.0fe958c80c6567b16ae1.js",revision:"eab5fb76f14e5ca7bb6404870aba4dc0"},{url:"/beta/apps/catalog/js/platform~91f4305a.93774cafe740de68bd6c.js",revision:"3ba43803d2e15b12b478924da0658ba2"},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.2c79fe585f3aea414aa6.js",revision:"7ebab8b8159f750e05ac551c0aa4b5f0"},{url:"/beta/apps/catalog/js/portfolios~31ecd969.00e1b22a4d57b4f360f1.js",revision:"dccfe1fb0fa389c7c7cf3cd11f07eae6"},{url:"/beta/apps/catalog/js/portfolio~31ecd969.13e7a90d0b519996a40c.js",revision:"4a6822d8e75e44c97fe14ae53e16a9a8"},{url:"/beta/apps/catalog/js/products~31ecd969.1a17f5c520bcd37906af.js",revision:"7cdd8cd7ef219404da4d948090d562ec"},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.981398773e0cb1f6d8be.js",revision:"f1269c7f41e4a99177c18aca9557cb62"},{url:"/beta/apps/catalog/js/service-offering-detail~5a11b65b.80f444ba9947d4b0ec8c.js",revision:"7c77eb8b93367bae669f74fadaa780e0"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.807340e4a7a216bb0144.js",revision:"402c9b5f34fc99c315264aa03573df1b"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.a6204af3dedb37ace66a.js",revision:"844efb8baa3b4b4c50e6d666b3cae6a7"},{url:"/beta/apps/catalog/js/survey-editor~cacb8e57.4b46466f5cd65143be41.js",revision:"35f4ef536c276d3e9eaf2092cdc6c387"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
