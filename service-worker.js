if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return s[a]||(e=new Promise(async e=>{if("document"in self){const s=document.createElement("script");s.src=a,document.head.appendChild(s),s.onload=e}else importScripts(a),e()})),e.then(()=>{if(!s[a])throw new Error(`Module ${a} didn’t register its module`);return s[a]})},e=(e,s)=>{Promise.all(e.map(a)).then(a=>s(1===a.length?a[0]:a))},s={require:Promise.resolve(e)};self.define=(e,c,b)=>{s[e]||(s[e]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+e.slice(1)};return Promise.all(c.map(e=>{switch(e){case"exports":return s;case"module":return r;default:return a(e)}})).then(a=>{const e=b(...a);return s.default||(s.default=e),s})}))}}define("./service-worker.js",["./workbox-1a4f2008"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/index.html",revision:"25f88b8c16a475e4d7f98b44b15d1f81"},{url:"/beta/apps/catalog/js/0.2e1b1e2c700309cb79ba.js",revision:"2d66b1c1e7f6efe2725f0731536e806d"},{url:"/beta/apps/catalog/js/6.dfafbeeaddcef8126288.js",revision:"19619159f6988649632dabef1e996a0a"},{url:"/beta/apps/catalog/js/69.5eb4b9816c1a24f26c03.js",revision:"dc4f4c8df7cf57c4a8515767d24dace3"},{url:"/beta/apps/catalog/js/9.d6a74d49e8a0d7abd84e.js",revision:"673edf08d0616b3ff855c3ceb6bcb84b"},{url:"/beta/apps/catalog/js/App.da8f884f44e333e7e1de.js",revision:"fb7a44d2f30b4e3d687e2b357b77f893"},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.baa908d7a19978adb894.js",revision:"5e7822ff5159690a05236d4d4ab528c3"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.ff962304f41de3ecd815.js",revision:"cfe61688568cde829ce522a000005a0a"},{url:"/beta/apps/catalog/js/approval-request~31ecd969.aacb709db6bd2e1d56a6.js",revision:"5eea5057cb8e6d82cfc9a99f3f846021"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~6f498858.1164340a63187b9cd927.js",revision:"bdba517833de1a627f9637cba3e7f6b3"},{url:"/beta/apps/catalog/js/edit-approval-workflow~91f4305a.98127f4a88ed06e848be.js",revision:"1fe018a6697b82705c309048060ae0dc"},{url:"/beta/apps/catalog/js/error-page~31ecd969.de9c19716bc0e0d702bd.js",revision:"eba6b8db8151dd9de3f8494c746a760d"},{url:"/beta/apps/catalog/js/framework~f9ca8911.7b6b850473db50db0b76.js",revision:"82aea58d4c9c3c1fe5c462ffc076003c"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.4b68aa287995af1b14ba.js",revision:"2da1eee634f527f80cddaeea487f00ab"},{url:"/beta/apps/catalog/js/lib~App~0f485567.68e18b3599d6f8ea094b.js",revision:"8f5f290e3d6585f498201e0a9fcd717c"},{url:"/beta/apps/catalog/js/lib~App~2539590c.26d6066c56765faf382c.js",revision:"96eaa223d9fd24c453cdc70dd6a20e2c"},{url:"/beta/apps/catalog/js/lib~App~253ae210.248512e02b70d2bf760d.js",revision:"4299d0afa75435cff5da6683b3d41b37"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.46e2ee790ab4e1588ce4.js",revision:"553a2963eefa165e3ec49e2e5fd6dd8f"},{url:"/beta/apps/catalog/js/lib~App~43bb34aa.5bba6a37b6316746b9cc.js",revision:"4f092e9a597a8b3809ec0898a0ae23f0"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.f587fbc285f9f40db7c8.js",revision:"b75a2010240a8a33e6a178365957715d"},{url:"/beta/apps/catalog/js/lib~App~50b4bdc6.f68d78e2f60e73b4f2fb.js",revision:"90ea3bc330671ef75f8dc1f6f8ad94eb"},{url:"/beta/apps/catalog/js/lib~App~60b88c48.f75bd9b29bbb068a0a2c.js",revision:"e493f8dfa384e188d1aa0237e389dcdb"},{url:"/beta/apps/catalog/js/lib~App~678f84af.2b40943bba6b5942f934.js",revision:"d6fae26f50b6740efc3049f9349374e6"},{url:"/beta/apps/catalog/js/lib~App~690b702c.e6bad4676ecfb3b6da9c.js",revision:"92fec410d17dc3e73295b86d27b950d4"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.ec4fc5523c5b13aea0a6.js",revision:"f7a3f106b0f48ec55f6a3b6d97edecbe"},{url:"/beta/apps/catalog/js/lib~App~b3141737.f19add7cf368f042aaec.js",revision:"15a4ef3bd73a545818e2eb9daa581764"},{url:"/beta/apps/catalog/js/lib~App~b8ebd723.b039591e4dbdee842190.js",revision:"3a0d9d80c9cb5546d39166a7c2dded69"},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.778c34afc5a38f06c352.js",revision:"ea2057273a416f551db6829b78af4fff"},{url:"/beta/apps/catalog/js/lib~App~e9435529.d73fae5300ca15086a33.js",revision:"ab05b06a55ef5cea25281f700b2ebe29"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~2930ad93.508c30533f2a62ceaaee.js",revision:"06805b2232965b4e2f20245f6ab6787f"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~763301a3.7cab83021067c946f26b.js",revision:"de5b8740bbee064b897d8eab9eb97c54"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~8c657992.fce5992a8b9a04f456fd.js",revision:"4f676178a98244b07e126424250c4bf3"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~b3141737.648265b872b071a13582.js",revision:"39276560d1d13a91e4874cc3e01616eb"},{url:"/beta/apps/catalog/js/lib~approval-request~order-provision~portfolio-item-detail~990daa13.d7e1760153b354c587d4.js",revision:"5e66a19ecc84e6190e87570cdb24c5c5"},{url:"/beta/apps/catalog/js/lib~order-details~order-lifecycle~order-provision~service-offering-detail~4bec7f87.add4b5cfe2b81b5550ae.js",revision:"fed9b4c59cfcc3838655925fe7db526a"},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.2eea48ef280cfaa98da0.js",revision:"a3777b8b2bebd91cf0cde132b7bd3797"},{url:"/beta/apps/catalog/js/lib~order-detail~orders~platform~platforms~portfolio~portfolios~products~31ecd969.a0888a9d289362ad12a8.js",revision:"ba937f57a73f639e56868e2e82271428"},{url:"/beta/apps/catalog/js/lib~orders~platform~platforms~portfolio~products~31ecd969.87621a59d2f04136f0e7.js",revision:"cc41f460dd1f84cc732fb3130f69e3a4"},{url:"/beta/apps/catalog/js/order-details~31ecd969.821055dab4f9e4e89c7e.js",revision:"edfa14d8b815ea4431c396b8acf6f7e1"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.a58d86e91d1c3d6d916c.js",revision:"a9692e18e7ed07b1cf1f30ca46c95df1"},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.36d70ce64bfcf0b7196b.js",revision:"4e1322fa197c54ebab643b13ba5938e4"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.1bfe57d618b5daf14168.js",revision:"20e78cb9d28bb0fe9a3941dfdab0d075"},{url:"/beta/apps/catalog/js/order-processes~31ecd969.ee886aef1caffe35e9d0.js",revision:"36419201e1a1395e4b4948e475492c01"},{url:"/beta/apps/catalog/js/order-processes~5a11b65b.0ee4e920acda765645a7.js",revision:"77933945e303aa052158972bef282b64"},{url:"/beta/apps/catalog/js/order-processes~807bc7cd.71a19ef2d14d25f72beb.js",revision:"7bba90701c4d66324ec6cfa21d41817b"},{url:"/beta/apps/catalog/js/order-processes~b3141737.62220ad603572867bc1b.js",revision:"fcb07ee95248efade6639d3ce7e50ac8"},{url:"/beta/apps/catalog/js/order-processes~bc848bd0.8f50b535094051e11537.js",revision:"9ac2e2d2cc9911a2ca6616b83b1910fd"},{url:"/beta/apps/catalog/js/order-provision~31ecd969.21cf113aa39974db3fbb.js",revision:"5f474b1ef6ddfd0c0b443c613fec7ae7"},{url:"/beta/apps/catalog/js/orders~43bb34aa.0af627e55f95d0907250.js",revision:"c90c97bbc62a3235110a24b7238bf9b7"},{url:"/beta/apps/catalog/js/orders~91f4305a.59c338a38e2620e009e5.js",revision:"a69e9eeb5c44a96fd7dca88f2942207e"},{url:"/beta/apps/catalog/js/orders~a8479bfa.f999f0d0f80a5fab5b99.js",revision:"33aac9d9086596887b5215181c47b2ab"},{url:"/beta/apps/catalog/js/orders~b3141737.dbf1530df9cb4ac3d08a.js",revision:"e8e9b417a4dbfb277c9d0a10bbc7d0d0"},{url:"/beta/apps/catalog/js/orders~c895ce40.8430b923fe297cfdb5c1.js",revision:"da6a518f043f73e89230d513bccb8079"},{url:"/beta/apps/catalog/js/platform-details~31ecd969.2a29d705779f8fde0f52.js",revision:"61f7cae61119865c162c173a0312656d"},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.063727bcf58e73b4ee15.js",revision:"ac2b5c095263a5b6e50cdeb18d2a69b5"},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.ac4089c1617aa6498ecd.js",revision:"0798df1e493e6d429cf943c6db01ac5c"},{url:"/beta/apps/catalog/js/platforms~31ecd969.9b041e33414c3304c3f7.js",revision:"5a2dbc4d23656ea5256c6738fbcc5c2a"},{url:"/beta/apps/catalog/js/platform~31ecd969.ecccde2f558aecd00089.js",revision:"2f90d32d699e1eb97b5d446734a3906e"},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.8ccab730b17b3e07fcd5.js",revision:"67e06053a66c179ba33891e16be573b1"},{url:"/beta/apps/catalog/js/portfolios~253ae210.89bdd71b26770076ae2e.js",revision:"043d959292be79640b13194732e62dc3"},{url:"/beta/apps/catalog/js/portfolios~3d9b8e9e.6d392c88e965951ff906.js",revision:"b8a774d255d6d34d4a7b7ae36af4d42c"},{url:"/beta/apps/catalog/js/portfolios~807bc7cd.c1cd7348d3b9a37e9a09.js",revision:"43688367167e6d7d71cc874a40e2810c"},{url:"/beta/apps/catalog/js/portfolios~b3141737.197bb66c07e772503088.js",revision:"ec67c14ab5bee60b5598325cf3a3e884"},{url:"/beta/apps/catalog/js/portfolios~bc848bd0.043ccae2ec86a1b9ab0d.js",revision:"c7b0f3c79f8a606cb6f59cd87f19113c"},{url:"/beta/apps/catalog/js/portfolio~31ecd969.210605dde82fa63dc866.js",revision:"8739c6f7f6fc3b76038faaec1ef52253"},{url:"/beta/apps/catalog/js/products~31ecd969.428a684b148e1b4deb56.js",revision:"efb33ab8cb85dd515d089e778f563cae"},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.d740c32fda9c6e42e7b5.js",revision:"201936f4a45a97c118b57f9e03e88ec9"},{url:"/beta/apps/catalog/js/service-offering-detail~31ecd969.1f2cdd1c14ac23291e72.js",revision:"940216fcb1cef42c855ffe4e73297bf2"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.d9a4046e5b3af8ef17ba.js",revision:"f5ff030c206af3d929a61560fed76377"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.198ee85f83cd01a082dc.js",revision:"8621bbe1d591b3d257cbd44aa53d139a"},{url:"/beta/apps/catalog/js/survey-editor~cacb8e57.d69f79de21e5010ba062.js",revision:"6cfb2f50d5c21bf195f79a94385d1dba"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
