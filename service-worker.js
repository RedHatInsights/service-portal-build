if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return s[a]||(e=new Promise(async e=>{if("document"in self){const s=document.createElement("script");s.src=a,document.head.appendChild(s),s.onload=e}else importScripts(a),e()})),e.then(()=>{if(!s[a])throw new Error(`Module ${a} didn’t register its module`);return s[a]})},e=(e,s)=>{Promise.all(e.map(a)).then(a=>s(1===a.length?a[0]:a))},s={require:Promise.resolve(e)};self.define=(e,c,b)=>{s[e]||(s[e]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+e.slice(1)};return Promise.all(c.map(e=>{switch(e){case"exports":return s;case"module":return r;default:return a(e)}})).then(a=>{const e=b(...a);return s.default||(s.default=e),s})}))}}define("./service-worker.js",["./workbox-1a4f2008"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/index.html",revision:"70333a133110209b46abcc5b32be3663"},{url:"/beta/apps/catalog/js/0.d3c3f9883c50eb40c952.js",revision:"01874025c2533fd181746c28d7cbca39"},{url:"/beta/apps/catalog/js/1.cb39e212e3faab91933a.js",revision:"b72326b1bb1f1eac293496641c78f3c9"},{url:"/beta/apps/catalog/js/3.0d5be97ce6a3d47ef44d.js",revision:"bced4997baad685462ee9b20d647db5f"},{url:"/beta/apps/catalog/js/67.81423c4faed2d5a6d918.js",revision:"5351ce9c5d33271b33204297d3543aac"},{url:"/beta/apps/catalog/js/9.e8c3286942286f99bbf8.js",revision:"30445c60080572d434f524c0ca397cbc"},{url:"/beta/apps/catalog/js/App.619e70ea5fce0aff6d01.js",revision:"13fe3db816a6c525342c39d950d1dd30"},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.3a6e1595dad696c037b5.js",revision:"35a4a07c94f503881fbc46b8792fbafc"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.ea7d7ff26d982f1b5aeb.js",revision:"8687525f149f77fd4a0dbdd3b2a24baf"},{url:"/beta/apps/catalog/js/approval-request~31ecd969.3b2fb1a2a90a7b985753.js",revision:"376210119bc196258e93fa671bac16d9"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~6f498858.b0cb19e975770033186a.js",revision:"1cc6650bbd0a39ca1c4bb434c6729224"},{url:"/beta/apps/catalog/js/edit-approval-workflow~91f4305a.096e490de598473dd335.js",revision:"d0ff27ea91a9a76f3f8ab513a36a5b6b"},{url:"/beta/apps/catalog/js/error-page~31ecd969.4629471ab8af5654efff.js",revision:"04123c2b3242615a0a80cf87482db73a"},{url:"/beta/apps/catalog/js/framework~f9ca8911.2491388d5286e4f0484e.js",revision:"ede2428a725700009248b6b0d2521c0c"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.ce3c4d3286fbaf971966.js",revision:"5f6e1f65e7a10cba2eb052cf817b04a4"},{url:"/beta/apps/catalog/js/lib~App~0f485567.2c384264d1388186f833.js",revision:"d0523d626f991ea2f72ad22654f03ed1"},{url:"/beta/apps/catalog/js/lib~App~253ae210.7ac0bbb752f5ef88abac.js",revision:"cb393278fd43011b7cb1db99ec9ee788"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.4525869817ca94a92a0a.js",revision:"fe7be650c01ebb076cde45551f2f5be7"},{url:"/beta/apps/catalog/js/lib~App~3ba6b00f.ac050139b20d9a02542e.js",revision:"fd6899dfac6a4ea96626ff159a43da97"},{url:"/beta/apps/catalog/js/lib~App~43bb34aa.8aa1eea7c7423059a281.js",revision:"5ef06770cb6a5078624e3d6b4284ef05"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.eededc037d0670f53ba5.js",revision:"ae3e76be46b044a269ad4170c2fc63ef"},{url:"/beta/apps/catalog/js/lib~App~50314d7e.fbbe405973d2d05fab78.js",revision:"25ec16d623d660a4dbb391ba90cba836"},{url:"/beta/apps/catalog/js/lib~App~56d643cd.93313627cd9326230979.js",revision:"cda8fec536327578253ebba14e79ba8d"},{url:"/beta/apps/catalog/js/lib~App~5a358dc8.76a26651d220f169935a.js",revision:"3f8bfab87ba5199f18abe70ec918a183"},{url:"/beta/apps/catalog/js/lib~App~60b88c48.2c8ce1bb10fba37e9548.js",revision:"1acf4a2d37a8cf0bf629891f486c1c3b"},{url:"/beta/apps/catalog/js/lib~App~6625447d.e6bc709c7add72e7ee97.js",revision:"23b5a471333ff74db54c149d8c96b00d"},{url:"/beta/apps/catalog/js/lib~App~678f84af.e44a184fa37fdcfa0868.js",revision:"e191573c93ac2e280e76e4984b90460f"},{url:"/beta/apps/catalog/js/lib~App~690b702c.3642518cda1b5231b5aa.js",revision:"31f40f1840c912d1edc58ee1ca97ec57"},{url:"/beta/apps/catalog/js/lib~App~8ac75459.b006560fe26a81e5ea64.js",revision:"44fa5ac41fc1f86887be77d301c8778b"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.17ec8d28b599100a99bb.js",revision:"fe1a3af59b9ca8596ec33f3b5e99d04a"},{url:"/beta/apps/catalog/js/lib~App~b8ebd723.eae79e7769ba7c588084.js",revision:"89ec1214eba8609e7f30c01b8788e58d"},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.ddfa9bf1e5bac59ee53b.js",revision:"3aeb60d04bfa1e7907a8acc0f17e2ad0"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~platform-inventories~portfolios~2930ad93.098afdc5953f4bf34135.js",revision:"b1c1ff70984e38e0de13cce19a7171dc"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~platform-inventories~portfolios~cf15acf0.a6b2eb05e0fdcc573fee.js",revision:"8cf1f734f66710666c80197ae3bad10c"},{url:"/beta/apps/catalog/js/lib~approval-request~order-provision~portfolio-item-detail~e2647e31.0041b7da83a700afea0a.js",revision:"12175cd10f30c8a01daaf5b1e6c776ba"},{url:"/beta/apps/catalog/js/lib~order-details~order-lifecycle~order-provision~service-offering-detail~4bec7f87.0bc018926ab24c3c370f.js",revision:"36d3ffc85ca9ec1044bad0d21c52d7d9"},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.bd188e092cbc6c71bb28.js",revision:"3e2a2b1358f2240fb576ffb9f0ec8c1d"},{url:"/beta/apps/catalog/js/lib~order-detail~platform~portfolio~31ecd969.e38fdbef777b36186907.js",revision:"2cc30d8c68fafd1da9ca5b3128a10ff9"},{url:"/beta/apps/catalog/js/lib~order-processes~orders~platform~platforms~portfolio~portfolios~products~31ecd969.39ac67c7aed0b4a9ecd6.js",revision:"43990c91a244883c35847794513fdcee"},{url:"/beta/apps/catalog/js/order-details~31ecd969.ea6725faee4b87f50ac5.js",revision:"6f81e328fe80ed54a2107d6868f360de"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.5749f0e2a8b687360619.js",revision:"71c469743877ba027fc7ea53e4456a71"},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.9268ab1617814a9461dc.js",revision:"6a419eacd577cb93e19f31a3b499ae11"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.01adfef5e30946436852.js",revision:"1cd3fcd9983c52d118aeaa8f3ec70066"},{url:"/beta/apps/catalog/js/order-processes~0f485567.2d3cb48ec2c23ea6eb24.js",revision:"7e06f62b1106f28802c5ab6630b51a75"},{url:"/beta/apps/catalog/js/order-processes~31ecd969.d5dc0d058ef65cd0d533.js",revision:"68e94c802c2fff4b4d70c460067b0d41"},{url:"/beta/apps/catalog/js/order-processes~5a11b65b.7e633bcecde6bab11440.js",revision:"37b47b8a43dda57b63e594285ccf19ec"},{url:"/beta/apps/catalog/js/order-provision~31ecd969.1d82517fd96501c869b7.js",revision:"96018978057c7a9786035fa13a89a8b6"},{url:"/beta/apps/catalog/js/orders~1469e04f.67a2f73da64c1b8da694.js",revision:"3a46816479fb1dcf9c687cf1d095a5f1"},{url:"/beta/apps/catalog/js/orders~2930ad93.01f0f17d1322568d9703.js",revision:"8d47eb533e94dfcdde17dd804dd1d513"},{url:"/beta/apps/catalog/js/orders~2f284f0b.35e63a855ada12b3cead.js",revision:"39a0fa3d0714a981507e46738c287d73"},{url:"/beta/apps/catalog/js/orders~91f4305a.aa5e0f1d42acf5514dc3.js",revision:"8510ad284588509c24a0dc61c73f0c59"},{url:"/beta/apps/catalog/js/orders~bc848bd0.f01cbe344d763ac0e42e.js",revision:"02152d27c9658b08a0e506441a42f707"},{url:"/beta/apps/catalog/js/orders~c895ce40.d4931987f299ec34df39.js",revision:"59437b0783f5b18f7e39b3d8f7cb0d6e"},{url:"/beta/apps/catalog/js/orders~cf15acf0.2323bde7145f36f9c8d8.js",revision:"2e12d3bf1310f2e66649f025aeed1bb8"},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.781e2df97b26243996e8.js",revision:"c762b9d6f6e533bcf289407f3e5a9db5"},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.d84757721d8f4e1b8ded.js",revision:"7625d088addf8acbd228e27eb971f341"},{url:"/beta/apps/catalog/js/platforms~31ecd969.6c9cb6aa56dae545bf7d.js",revision:"323fa349c96d09dc65dfddac22aeeb66"},{url:"/beta/apps/catalog/js/platform~31ecd969.2206ba4b07730372ec54.js",revision:"2e15273dd0776b6fbf5f3aaeb6521001"},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.b2bf4a2ab64ffa5b4336.js",revision:"b2d8b2531c8a67928b0c9c5a7f3c74d7"},{url:"/beta/apps/catalog/js/portfolios~0f485567.efa54645bdef3c812223.js",revision:"87ace463d423dbe93e1b0d70438f3267"},{url:"/beta/apps/catalog/js/portfolios~253ae210.3c21414680b9b5e2da04.js",revision:"9f19eddd2143322148a25cb5e106b7e5"},{url:"/beta/apps/catalog/js/portfolios~5a11b65b.1e4c19d8e0c5f74687a0.js",revision:"f35df53576419857d1719535b8f70540"},{url:"/beta/apps/catalog/js/portfolio~31ecd969.a28725706abca607a29c.js",revision:"a93305048c063101987f1634c596c8c2"},{url:"/beta/apps/catalog/js/products~31ecd969.ace14ba34a3605373891.js",revision:"2ff03a32be40585a975d0fb620186032"},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.7b3a48483202eaa90e31.js",revision:"a83f73624a3c37b8a7142d68710b79ff"},{url:"/beta/apps/catalog/js/service-offering-detail~5a11b65b.6da3982b3d3b13a0b9c4.js",revision:"98e037fabe7bbfe46e71d4ce01a73a78"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.c70d2ea71459066ee4c8.js",revision:"f4896e0fa614d414bf760979dff618f7"},{url:"/beta/apps/catalog/js/survey-editor~0f485567.c05da63865f2814a01c4.js",revision:"151f738666a60c771ed45a8356210a35"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.2f4fc56cb9321155ed5a.js",revision:"8e007bfd312f9974f035a806d1a3c83a"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
