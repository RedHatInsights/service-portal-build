if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return c[a]||(e=new Promise(async e=>{if("document"in self){const c=document.createElement("script");c.src=a,document.head.appendChild(c),c.onload=e}else importScripts(a),e()})),e.then(()=>{if(!c[a])throw new Error(`Module ${a} didn’t register its module`);return c[a]})},e=(e,c)=>{Promise.all(e.map(a)).then(a=>c(1===a.length?a[0]:a))},c={require:Promise.resolve(e)};self.define=(e,s,b)=>{c[e]||(c[e]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+e.slice(1)};return Promise.all(s.map(e=>{switch(e){case"exports":return c;case"module":return r;default:return a(e)}})).then(a=>{const e=b(...a);return c.default||(c.default=e),c})}))}}define("./service-worker.js",["./workbox-1a4f2008"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/index.html",revision:"ab8cae9f5aa857b009cc3435ef9c7fdc"},{url:"/beta/apps/catalog/js/0.54444141ef64edd4bb9b.js",revision:"1db9dd764a4bd0de100cdbd6c3409c6c"},{url:"/beta/apps/catalog/js/2.5fe1bdfb13f6c9c64ae3.js",revision:"b3b0e943777c9ddf942a7f816fa75b50"},{url:"/beta/apps/catalog/js/69.bbbca2ee8634adece690.js",revision:"d663e508cab6883075ba5caa375252c9"},{url:"/beta/apps/catalog/js/7.c09dc1f2a6950e718208.js",revision:"e984e1e5df195f3668cb6702e97e2ef7"},{url:"/beta/apps/catalog/js/App.3419f14dc7da23e950ca.js",revision:"119ddb3c75e62d0fef637a83937450f0"},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.03abcd3cc191d4e149f7.js",revision:"d684aa7312abc68ad2c068d208cd62c7"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.c7af3c61688f69cf48fe.js",revision:"2b15518ab59ca64bc3c3f8b53977e3e2"},{url:"/beta/apps/catalog/js/approval-request~31ecd969.060f66fc5b1427181845.js",revision:"7ba1e14e6f138e6df210aea711b190e2"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~6f498858.5fc9f76b3e6f93a4038a.js",revision:"73da736ef12063933f370e47caa5d921"},{url:"/beta/apps/catalog/js/edit-approval-workflow~91f4305a.3213b2324b9f1a2b5635.js",revision:"8cd43f72c1dcc6f43c2a9cf4207553c0"},{url:"/beta/apps/catalog/js/error-page~31ecd969.644830853e585ab4872e.js",revision:"9ee4f583b418d59bf32f1333b19a4b73"},{url:"/beta/apps/catalog/js/framework~f9ca8911.befc7b0252aec1bf3914.js",revision:"55c5fc139c658861961ba9d470575304"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.ed4703ce1f3b8daee527.js",revision:"ab764e68e1898c779ba954e8ab06d935"},{url:"/beta/apps/catalog/js/lib~App~0f485567.08f2ad9bd665c9755f66.js",revision:"f1ac7958d505b820fd96add6c4456579"},{url:"/beta/apps/catalog/js/lib~App~1c3a2c3f.99cc2dec3a26125227c2.js",revision:"326cb72f46286a13544ce02a6bbe90d1"},{url:"/beta/apps/catalog/js/lib~App~253ae210.908ed1fc4cfcc3f3ebeb.js",revision:"6fb8cee0b0c4426b82c8098120cb582b"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.f6963726297b64ea4493.js",revision:"ba313f5c77462645063093bf6496a858"},{url:"/beta/apps/catalog/js/lib~App~2f284f0b.86881a3e1c2966d1c8ea.js",revision:"2ba37b88a5b4515715f55914ea7ce278"},{url:"/beta/apps/catalog/js/lib~App~43bb34aa.9efb73bc2e1adfb4c2be.js",revision:"28fda540ae350df61024017ed2e58872"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.02d8df0037a6a7995618.js",revision:"ffc48662e639f17358a88f4b74f699ee"},{url:"/beta/apps/catalog/js/lib~App~50314d7e.f386686e167ab5dbff8f.js",revision:"baa3f3d34daf35956a457c71831400c4"},{url:"/beta/apps/catalog/js/lib~App~5a358dc8.dd8771cc442ab1be0ded.js",revision:"09e1eddb2da9624129d9a7c60456cc66"},{url:"/beta/apps/catalog/js/lib~App~60b88c48.e5e4aa25d931cd4bb13b.js",revision:"9e30443b8c8c389e3a3d42f824b6587b"},{url:"/beta/apps/catalog/js/lib~App~6625447d.0dce8ddc396af9238f8a.js",revision:"832e3539814744b486e8a8b8f3b7c121"},{url:"/beta/apps/catalog/js/lib~App~678f84af.008f1b79a8317bdc8ff8.js",revision:"cd52454e1968b575482cefc8d67758bf"},{url:"/beta/apps/catalog/js/lib~App~690b702c.0bd3ff6cb34762416873.js",revision:"9eb4d6148f36912baeb58f717ed0a149"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.0a046ca32e66987df994.js",revision:"7f8c48d6d3034353878bd4fe67d97a70"},{url:"/beta/apps/catalog/js/lib~App~b3141737.fb8e697086863be1454b.js",revision:"12d4051786dcb26b48035fa3a317d871"},{url:"/beta/apps/catalog/js/lib~App~b8ebd723.334a24268de6ef12c68a.js",revision:"147840c18fca2a35badcb59a8e59ed47"},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.212eb4a1f52a6f4290df.js",revision:"51b805f964aaed98b1d231b86dbda387"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~2930ad93.d40ed26373cd77a1dd62.js",revision:"c904ded722bafb73ce31e08eada31ccd"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~7293ddd8.64308efa763024d01e0a.js",revision:"3ede21d31801281928ef37e50f4c1e22"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~76d93fce.015326cf70e2e43688a9.js",revision:"c6dd1581c207edd045c522f74561f651"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~8c657992.a8319a61661de02493ce.js",revision:"6a36de2545fe27b8b3e11abf01326abb"},{url:"/beta/apps/catalog/js/lib~approval-request~order-provision~portfolio-item-detail~e2647e31.cfd551536512c01f2c09.js",revision:"54bee6aa1364944bf23c969c9f39acf3"},{url:"/beta/apps/catalog/js/lib~order-details~order-lifecycle~order-provision~service-offering-detail~4bec7f87.98a624d50c44f3a98a87.js",revision:"523cb41fc034a077e86392c2f0cc1b09"},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.4322148a9f4d8be6b110.js",revision:"52cb7fa772a4dbe7e7b42eb52b8794e7"},{url:"/beta/apps/catalog/js/lib~order-detail~platform~portfolio~31ecd969.572a403107d1884f7640.js",revision:"3f2483a2cd54bb1345ebe3a35a4d3e28"},{url:"/beta/apps/catalog/js/lib~order-processes~orders~platform~platforms~portfolio~portfolios~products~31ecd969.8f470ba41d4d89db656d.js",revision:"c333303c796cc6f98d2f0674dd4dcc72"},{url:"/beta/apps/catalog/js/lib~platform~portfolio~31ecd969.633b09497dc4a047062e.js",revision:"a2ad9239ffe8c559e363eb05dd9f1332"},{url:"/beta/apps/catalog/js/order-details~31ecd969.16625b193d9c0c230e19.js",revision:"f416c580c3fe77e03e5d8c6a7666055e"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.13d34252539616ff3870.js",revision:"a1e59d62590265c6581474b112f34d66"},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.8c0fa072fbe4d7ef77be.js",revision:"9534151bfe59a3b3fda80f4092bf3da7"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.d4e5bf0cf3268365eaee.js",revision:"7bcb06d7e110b0e76c0cfdd6ac6a1a4b"},{url:"/beta/apps/catalog/js/order-processes~0f485567.871a0ef562d6c298950c.js",revision:"eb3b30c2ada388dc2d96aadeabbfcbe3"},{url:"/beta/apps/catalog/js/order-processes~31ecd969.b7fffe5f75ba8c0b9f72.js",revision:"3743eac594171cd49fd7f6f8a1509de8"},{url:"/beta/apps/catalog/js/order-processes~5a11b65b.25e6d35adb939cc00345.js",revision:"b913253c6f5f789c647ee1abbad2d1c4"},{url:"/beta/apps/catalog/js/order-processes~bc848bd0.3789b64e037d0a1e2350.js",revision:"5dc087594ff7a2cc2429c38263ad153b"},{url:"/beta/apps/catalog/js/order-provision~31ecd969.f9fbdcc86b218b7e71f7.js",revision:"e61a903b1fb5529c3ed710796fde0975"},{url:"/beta/apps/catalog/js/orders~50314d7e.610bf747518bfb6ab66d.js",revision:"88de91a2b30c9272f2549092893a9b0f"},{url:"/beta/apps/catalog/js/orders~91f4305a.ee974a5baea339d870f9.js",revision:"d4be33f04da6f398b38488be14d678f3"},{url:"/beta/apps/catalog/js/orders~bc848bd0.c1a413597284270a0779.js",revision:"a22385eb4ca76b478e6076943a32c5a3"},{url:"/beta/apps/catalog/js/orders~c895ce40.d1cb5f068c60842961fd.js",revision:"5eeeb66798c2e98510ed0ebe74e9dc1d"},{url:"/beta/apps/catalog/js/orders~cf15acf0.baefce6c4f74c3ec2fa4.js",revision:"d196fd39a361e68d25ca9d92679900d3"},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.8b873450fedaeebd7617.js",revision:"7d2aa50e67969616a1e5608715fdb328"},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.daf51cc450122f06fa29.js",revision:"57d359747ff2149323d7a46633abf5db"},{url:"/beta/apps/catalog/js/platforms~31ecd969.d7a6cb7028e2427cdff5.js",revision:"fab66e3983cdbd054256c1cd7e241fb6"},{url:"/beta/apps/catalog/js/platform~ea1f58e8.e3c3ef1ea0bd02c32f25.js",revision:"04429a5aa37db0ffbbee9b3ea493f160"},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.097e5775c21cf9ca44af.js",revision:"c82663c95d7fe4ff1f0ed49d90a6a1f5"},{url:"/beta/apps/catalog/js/portfolios~3d9b8e9e.0f4bf7a54e65c754d0d2.js",revision:"392f89a2305a74c157f56d55a2dd4292"},{url:"/beta/apps/catalog/js/portfolios~bc848bd0.fecfe3896f44e2294cec.js",revision:"f28e12b5d9c1b9f3b998595f30660238"},{url:"/beta/apps/catalog/js/portfolios~c895ce40.8f48a41f460d9e26ff65.js",revision:"eb8af6137e212b4cc5a1d453ac861363"},{url:"/beta/apps/catalog/js/portfolios~cf15acf0.1250f6b0c15ba125cd60.js",revision:"f8f828e6af971c6f21c1e4a2dd751208"},{url:"/beta/apps/catalog/js/portfolio~91f4305a.f106d33f531d7b5a7c43.js",revision:"b1ce57dec38c80b32206bbdeb9f702c5"},{url:"/beta/apps/catalog/js/products~31ecd969.9b9745de9aea2210142f.js",revision:"6f2aecfd0bda5563d16b8c3450ec3998"},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.bf0e34be982a3df5c319.js",revision:"869f09b80cc6c019863b7d00e8728f07"},{url:"/beta/apps/catalog/js/service-offering-detail~5a11b65b.a5909b871fa438e549d0.js",revision:"8c0f016c2e7b0535739c39c8df685e64"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.217c4bcac3b3cdecce06.js",revision:"c998bc784aab1ebb857b81ab44a4675c"},{url:"/beta/apps/catalog/js/survey-editor~0f485567.30dd3f690cab8b0b59c9.js",revision:"0b76032828b16e4ba1da16592aae6dac"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.30fc8e1f0cdb69c8adb1.js",revision:"c450e35dd352acac336bc39293bad3d0"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
