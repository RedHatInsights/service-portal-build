if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return c[a]||(e=new Promise(async e=>{if("document"in self){const c=document.createElement("script");c.src=a,document.head.appendChild(c),c.onload=e}else importScripts(a),e()})),e.then(()=>{if(!c[a])throw new Error(`Module ${a} didn’t register its module`);return c[a]})},e=(e,c)=>{Promise.all(e.map(a)).then(a=>c(1===a.length?a[0]:a))},c={require:Promise.resolve(e)};self.define=(e,s,f)=>{c[e]||(c[e]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+e.slice(1)};return Promise.all(s.map(e=>{switch(e){case"exports":return c;case"module":return r;default:return a(e)}})).then(a=>{const e=f(...a);return c.default||(c.default=e),c})}))}}define("./service-worker.js",["./workbox-1a4f2008"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/apps/catalog/index.html",revision:"abfde3283b994289acadfc3f9e8f33a8"},{url:"/apps/catalog/js/0.4ab633eeb7b729caf086.js",revision:"8662ebe61375dec9aa26272f421dbcd3"},{url:"/apps/catalog/js/2.47513674414367575f61.js",revision:"4d883b2895e7bc17a79fb53a2e1fb13c"},{url:"/apps/catalog/js/3.f8f1bcac3d74d4a1af1b.js",revision:"b6542caae515449354a5b162c22f393d"},{url:"/apps/catalog/js/63.36dd531207860c3a6804.js",revision:"dbeead1fad7cf1adf65d3bd53e55481c"},{url:"/apps/catalog/js/App.6ae03435c21262375289.js",revision:"6e44ea6a26948ef698fc2579677e06a3"},{url:"/apps/catalog/js/add-portfolio~5a4d8549.98c02861f343f6ef9979.js",revision:"aa760cc506f39903802d513b7bdd6e9e"},{url:"/apps/catalog/js/add-products-to-portfolio~31ecd969.cbdd8689ff9d0e8b053d.js",revision:"eb54b6ae3ca1f65027387bb644820497"},{url:"/apps/catalog/js/approval-request~31ecd969.edc1239ba0aa27a5082e.js",revision:"c2968c8ca086e58c1aa09443b3ef16b8"},{url:"/apps/catalog/js/copy-portfolio-item-modal~6f498858.71877f8b0904a0c4ad63.js",revision:"7a3dbd65b2ac1a5c7f91caf36ac414b5"},{url:"/apps/catalog/js/edit-approval-workflow~91f4305a.db78a3bc541a91f6d104.js",revision:"23d9642c636ff4a19d6e39d5972f34df"},{url:"/apps/catalog/js/error-page~31ecd969.a4d5c3e4e83b099b2ecf.js",revision:"4c709295add197ff4783636bd468c312"},{url:"/apps/catalog/js/framework~f9ca8911.fcfbcba0e5e3f7c52028.js",revision:"f99233567e152731181202aa5d63d860"},{url:"/apps/catalog/js/lib~App~06837ae4.a454b685deb744c94a59.js",revision:"4c340399737f14af3765b48d64218761"},{url:"/apps/catalog/js/lib~App~0f485567.f42039e19c222979fbcf.js",revision:"7743b74af0a7d17202cd93a84b1949e1"},{url:"/apps/catalog/js/lib~App~1c3a2c3f.ee438aa0bba5d8462d95.js",revision:"100f9e45d44023b4d93e21e7b70385af"},{url:"/apps/catalog/js/lib~App~253ae210.7220bafc0bdddba18767.js",revision:"06dbd5b9bc50410f7d2c86718511b698"},{url:"/apps/catalog/js/lib~App~2a42e354.7893089a63e685250113.js",revision:"81d2aa5ab7e5ae3bb65b7b45e26fe10a"},{url:"/apps/catalog/js/lib~App~2f284f0b.ee0120c65fe9ba070081.js",revision:"e0a2c8aba6fcb7a4553a9443a41b02a5"},{url:"/apps/catalog/js/lib~App~43bb34aa.dd93e8acee1fd039b0df.js",revision:"0ca1ec65c10cc27564291d7cdba5941c"},{url:"/apps/catalog/js/lib~App~47974c6d.9ab171383c58fc60f8b3.js",revision:"a6c6f632723bed541099517fd4ab30a6"},{url:"/apps/catalog/js/lib~App~50314d7e.6db44971c18452a550d4.js",revision:"55a1be1cd1605e602f2d64e0172aebbf"},{url:"/apps/catalog/js/lib~App~5a358dc8.7a32a33a9d502bce7749.js",revision:"712d5734a3f138718c88d9313d0ff29e"},{url:"/apps/catalog/js/lib~App~60b88c48.1c123827f16037417027.js",revision:"f61491e7869adade8d62579218e9bbef"},{url:"/apps/catalog/js/lib~App~6625447d.cd2fb4e6c6376cd48508.js",revision:"63da1b6625c7770eac8b432e1b0b4325"},{url:"/apps/catalog/js/lib~App~678f84af.fc4fddfefad2a3ee81e1.js",revision:"37b3025f6d977cd60ee59c3bf2d9901d"},{url:"/apps/catalog/js/lib~App~690b702c.1b2cb963e62cabcbc6d1.js",revision:"2de8dba63b2b2170d5c9b9cbc78c2cd2"},{url:"/apps/catalog/js/lib~App~8b4a6063.5d5663538065b9be0996.js",revision:"a791e7a9278340cb67b80ad4cc1c2665"},{url:"/apps/catalog/js/lib~App~b3141737.8413b70d66ea59c89e34.js",revision:"e0b06f7a79c63522ea6d7da59266b933"},{url:"/apps/catalog/js/lib~App~b8ebd723.11f177f68133feb5fd15.js",revision:"c650feb129915c8c28bfe9a665fe07c3"},{url:"/apps/catalog/js/lib~App~b9cf3951.2ff8bbe4d3220c3118b7.js",revision:"dc9f96449fae8b475fcf923bcde208e2"},{url:"/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~2930ad93.7dea63982c2bf6e1bdb4.js",revision:"cbff943f5ae0b82b87fab321b917a0b6"},{url:"/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~cf15acf0.8af58a05e0ba583d2c79.js",revision:"d2cbaec51892ff96d26a572947812f56"},{url:"/apps/catalog/js/lib~approval-request~portfolio-item-detail~e2647e31.95d0bd786c80d5fc677e.js",revision:"893e802c82fa4745dfdeb8c3b360b8d5"},{url:"/apps/catalog/js/lib~order-details~service-offering-detail~4bec7f87.79ff5c70d13ec8409cab.js",revision:"2242543cdac956fc64c74ada81fe3690"},{url:"/apps/catalog/js/lib~order-detail~order-modal~91f4305a.b62c695c99f4b7f89c71.js",revision:"2cbb3b56e62f0e9704059d2dbc8efb45"},{url:"/apps/catalog/js/lib~order-detail~platform~portfolio~31ecd969.be25ae7051e81bf2d514.js",revision:"abb251174798f5c81f87b275ffbe1271"},{url:"/apps/catalog/js/lib~order-processes~orders~platform~platforms~portfolio~portfolios~products~31ecd969.3c783a1108e8f47374e4.js",revision:"9cfc8486e2addd03aed7aa05737d8588"},{url:"/apps/catalog/js/lib~platform~portfolio~31ecd969.ede9134030de3209c553.js",revision:"9e9e977156369f0782036c58e58cf97a"},{url:"/apps/catalog/js/order-details~31ecd969.e14062e53a6c9317562f.js",revision:"813beba54e70dec0d5a9e09688556870"},{url:"/apps/catalog/js/order-detail~31ecd969.6c11ddb004b5b5d81f3c.js",revision:"c8ba4b19f6dba7b3a6938e7605927157"},{url:"/apps/catalog/js/order-lifecycle~31ecd969.ff0b2233f4e971e6e98e.js",revision:"e826513cb295b02105241fec75595da3"},{url:"/apps/catalog/js/order-modal~31ecd969.73ccaa48a0e38dcb12cb.js",revision:"9c50a3ae79ba2ab8c6530d6fd5ca6762"},{url:"/apps/catalog/js/order-processes~0f485567.0b32380c0951017c2ab2.js",revision:"88f31b3c7cb049fe7e404304c45829ef"},{url:"/apps/catalog/js/order-processes~31ecd969.d19fb06e063c04c3fe2c.js",revision:"acfc2f41403aa9a59524ae07c7d6c06a"},{url:"/apps/catalog/js/order-processes~5a11b65b.f653f9f36a28fc4a57c5.js",revision:"f9364285813012d0cdf6bb2eba38994e"},{url:"/apps/catalog/js/orders~5a358dc8.c4444e8ff44cc94779c4.js",revision:"e7d4de83ebe8ba337c1aac07fd8310f7"},{url:"/apps/catalog/js/orders~91f4305a.a2e1a3fc8149d581afa9.js",revision:"1a8380cadb7e368731f57bd850c61252"},{url:"/apps/catalog/js/orders~c895ce40.09accad141c9e2948b50.js",revision:"b0d3d7c7279718471a07716c5000d1fa"},{url:"/apps/catalog/js/orders~cf15acf0.fb3bc0dc7471f041f61b.js",revision:"5301f6438a45e2b2977be364c8957673"},{url:"/apps/catalog/js/platform-inventories~31ecd969.c4015dc5d3698df7943e.js",revision:"da0bbfbca771a24576fc5107280da336"},{url:"/apps/catalog/js/platform-templates~31ecd969.ff0879780f8a291604b5.js",revision:"0b0689dce07f5e185f77824e0de0fcaf"},{url:"/apps/catalog/js/platforms~31ecd969.fc6c860b3fdc010edbf8.js",revision:"9e6ca2286c57cfeed98464f3f997eefe"},{url:"/apps/catalog/js/platform~ea1f58e8.a7c16acf95d353a8615a.js",revision:"bfe92f2e78695d238d9bd49db806482f"},{url:"/apps/catalog/js/portfolio-item-detail~31ecd969.3598cefb9c1bab5d39f4.js",revision:"6d4772f9c6af665c13cd287651cd8c0a"},{url:"/apps/catalog/js/portfolios~3d9b8e9e.32be8f5248c5faace3f5.js",revision:"307ddcb168816413537342fd3adeb4b4"},{url:"/apps/catalog/js/portfolios~c895ce40.9539418ba08abb6fba32.js",revision:"e1d159b6906cf49f637e055787dce2af"},{url:"/apps/catalog/js/portfolios~cf15acf0.314b6bd675f8260ef84d.js",revision:"049c626c6487c4204177bea1e0710af1"},{url:"/apps/catalog/js/portfolio~91f4305a.ec06c15355c3ac4fc468.js",revision:"d8f644ddda5d16300bf643245471f227"},{url:"/apps/catalog/js/products~31ecd969.83c8dc3876bbae2fbce8.js",revision:"5c25879f0a0b7b767cba47169495d48f"},{url:"/apps/catalog/js/remove-portfolio~31ecd969.524154f8d033ab329577.js",revision:"7e5731c0c3eca43b125f97d6ef42300f"},{url:"/apps/catalog/js/service-offering-detail~5a11b65b.5af5cd7f963e698e02f5.js",revision:"9ab441ba0f433b4de20e738a7c64eea1"},{url:"/apps/catalog/js/share-portfolio~31ecd969.9af6a75d747a7d18bf4d.js",revision:"4415e62b008cd30c1641b8955c3f97e4"},{url:"/apps/catalog/js/survey-editor~0f485567.0c69f9e575d6f9dd5519.js",revision:"3981003fce0335ba4260120293dea46d"},{url:"/apps/catalog/js/survey-editor~31ecd969.f3ec55897b07e988b76d.js",revision:"fe6bf3278d54aa5917741ce0a5a5991c"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
