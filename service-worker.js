if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return s[a]||(e=new Promise(async e=>{if("document"in self){const s=document.createElement("script");s.src=a,document.head.appendChild(s),s.onload=e}else importScripts(a),e()})),e.then(()=>{if(!s[a])throw new Error(`Module ${a} didn’t register its module`);return s[a]})},e=(e,s)=>{Promise.all(e.map(a)).then(a=>s(1===a.length?a[0]:a))},s={require:Promise.resolve(e)};self.define=(e,c,b)=>{s[e]||(s[e]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+e.slice(1)};return Promise.all(c.map(e=>{switch(e){case"exports":return s;case"module":return f;default:return a(e)}})).then(a=>{const e=b(...a);return s.default||(s.default=e),s})}))}}define("./service-worker.js",["./workbox-1a4f2008"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/fonts/platform-amazon.png",revision:"8b190df931e2054ee7d5a0c5101b5308"},{url:"/beta/apps/catalog/fonts/platform-default.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-openshift.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-tower.png",revision:"01c109fb5977d84edfbe585276bf9cad"},{url:"/beta/apps/catalog/index.html",revision:"245383e60f48162a1cd5db79151e0034"},{url:"/beta/apps/catalog/js/0.159b2fae30e6cd75a1f3.js",revision:"97fdd4cb2509a12233f1aa26f8a5b99d"},{url:"/beta/apps/catalog/js/2.13dfe6732f1b19a8708e.js",revision:"5155bcaadc92f35fd9e0fbeec0f7d64c"},{url:"/beta/apps/catalog/js/3.e9a060f087fe48bfeb61.js",revision:"f6a96bb4345c9d5ab6c40f52a2a6f011"},{url:"/beta/apps/catalog/js/63.f2f6500ce97facf8d907.js",revision:"467e791dffdaff521a354ac628dc8508"},{url:"/beta/apps/catalog/js/App.60f5e5f991bb5601096f.js",revision:"33cab687a01d127920d42fcd929a0c49"},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.4084469fa54a7228f537.js",revision:"b5be229fbef818258253ac3f44a487db"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.a986445d522965b2b714.js",revision:"8cf1414a8b22992d899cde02610e1f7b"},{url:"/beta/apps/catalog/js/approval-request~31ecd969.990ccc1711f79a37253d.js",revision:"e770b2647493f01cceda8fc1ffcc97bc"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~6f498858.38d4645875e8e8776e9a.js",revision:"c9641df1d4114e5e880462cccead0976"},{url:"/beta/apps/catalog/js/edit-approval-workflow~91f4305a.65eee7921e4e0c01dbd7.js",revision:"23d9642c636ff4a19d6e39d5972f34df"},{url:"/beta/apps/catalog/js/error-page~31ecd969.0046dfd03ec1a35997b9.js",revision:"0e88c1181716e612874cfd8e5712e09c"},{url:"/beta/apps/catalog/js/framework~f9ca8911.df2b6c68e894d54a5b8b.js",revision:"09faeef919ca37794323c7bc6f451aad"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.c61d40883192e7af5900.js",revision:"d30ed50d46d65edcf350e1623c60a299"},{url:"/beta/apps/catalog/js/lib~App~0f485567.d199b9eab11b939cdfe7.js",revision:"d4f2527b2562e3889fe6a43fcc4e4bab"},{url:"/beta/apps/catalog/js/lib~App~1c3a2c3f.1e2a6fe74206d9e78cf8.js",revision:"10e983b2c7a5e1b3120bf3456b69edac"},{url:"/beta/apps/catalog/js/lib~App~253ae210.f0a0f955df93ef043e87.js",revision:"3e7288966470334e23de49e56a3db52c"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.ebc308d4f2277f22f63a.js",revision:"97c00e2bd3b5ad65146c614f120e60ad"},{url:"/beta/apps/catalog/js/lib~App~2f284f0b.ad0990d6d7893f251491.js",revision:"ef0fb8f6d7561589ec8790d1f4fd7763"},{url:"/beta/apps/catalog/js/lib~App~43bb34aa.ed9c5d8dcd655d24a121.js",revision:"771d5dd6ca9cca7dec915d22cf461ff3"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.6e164c3a77a61d116dac.js",revision:"30cffffcdcc0f45de09b0630c5cb725f"},{url:"/beta/apps/catalog/js/lib~App~50314d7e.e2a162688d03f35d9059.js",revision:"522101aca0d12b16853f16032506653c"},{url:"/beta/apps/catalog/js/lib~App~5a358dc8.3eceba5ac9610e6ef8f4.js",revision:"79b337fdfaed6314d1ac347aa15245cb"},{url:"/beta/apps/catalog/js/lib~App~60b88c48.f29bbc52d8351ef41cb3.js",revision:"5268a15e83ec7c1271e3647f462908cf"},{url:"/beta/apps/catalog/js/lib~App~6625447d.759118698c2da01d2d68.js",revision:"9be1ebe95d08cb2365e014e632f3c96e"},{url:"/beta/apps/catalog/js/lib~App~678f84af.a0bd53f25160587e19f5.js",revision:"3b34b50da6174dd310fd27b2f23eadc7"},{url:"/beta/apps/catalog/js/lib~App~690b702c.736b023147e9d62832df.js",revision:"6b97154ea01bf54baba9a45a1c96bb56"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.961365e15a77b405be17.js",revision:"002ca912755f8fb4ddfd481122243983"},{url:"/beta/apps/catalog/js/lib~App~b3141737.5635aee8a156a18c6bb2.js",revision:"b308a1ca55f5626e43ac19d7ee40cf63"},{url:"/beta/apps/catalog/js/lib~App~b8ebd723.b1b11587456c27cef9a2.js",revision:"e70471a9dc1c15438406b3325974a3e4"},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.709bc96447f0d35de26d.js",revision:"9afa00c7bf76cee81ba41cadbecaffd1"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~2930ad93.e30053fafc5edab94f83.js",revision:"70e9849790904e6df03e4e1607350ccf"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~cf15acf0.b03d8249f158a6de07c1.js",revision:"23c8137f8460c56f643d1dbe8499bb9e"},{url:"/beta/apps/catalog/js/lib~approval-request~portfolio-item-detail~e2647e31.02b9d8bd8f5754d9a28d.js",revision:"f46806af42a442302cf0eaf98e43dd60"},{url:"/beta/apps/catalog/js/lib~order-details~service-offering-detail~4bec7f87.79ff5c70d13ec8409cab.js",revision:"2242543cdac956fc64c74ada81fe3690"},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.c6e220d477fc339cf611.js",revision:"9e011b25a0db86169c68362318eb00be"},{url:"/beta/apps/catalog/js/lib~order-detail~platform~platforms~portfolio~31ecd969.7068ebd4465cc4335373.js",revision:"2f3f9062641ecb3b125cb312b4677ac7"},{url:"/beta/apps/catalog/js/lib~order-processes~orders~platform~platforms~portfolio~portfolios~products~31ecd969.4acb694a0df1e8d7b26b.js",revision:"68a2d34ac6a376cbcc6b603bb0d4891a"},{url:"/beta/apps/catalog/js/lib~platform~portfolio~31ecd969.1820198df143b9e84d15.js",revision:"32819238eb7098cc5b1db778a8409b92"},{url:"/beta/apps/catalog/js/order-details~31ecd969.c3614c371c983e36bc9e.js",revision:"f4726fad9ac8e75e3486707449fcd4df"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.a003ed60897edece5086.js",revision:"b30a2ff8b6c32320560cd33266a3660d"},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.25acffa9c36a5a791727.js",revision:"e145359d5e3ada8784cf2b5949f71f5f"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.022f1b23892b5e20de10.js",revision:"e0d2985de7bfe37dbbde209e61e377ef"},{url:"/beta/apps/catalog/js/order-processes~0f485567.a93faaf19d229b984e2d.js",revision:"8b1ad3c79b06aa5b149b5ab15b57ac24"},{url:"/beta/apps/catalog/js/order-processes~31ecd969.2766cfd1890f6a078c11.js",revision:"2948cf2c1e726c14ab76f1e7bb8e4af3"},{url:"/beta/apps/catalog/js/order-processes~5a11b65b.cfdffba1517b0f2489e0.js",revision:"146d9fbfc59ac575fbb8bd9e61744f6f"},{url:"/beta/apps/catalog/js/orders~5a358dc8.df02c3b96939b8b4211b.js",revision:"d5df652040e88ddd75e1fb38f7eda5ef"},{url:"/beta/apps/catalog/js/orders~91f4305a.50f3bfef31ab72229ec2.js",revision:"dffec6bbe977fca1c1f6e69cd08f522a"},{url:"/beta/apps/catalog/js/orders~c895ce40.a169879a9e4c53d7b411.js",revision:"e6ba0d6d817f43b04915e3ddf96e20c3"},{url:"/beta/apps/catalog/js/orders~cf15acf0.5237c173ecb83a2bbee5.js",revision:"e321064e5ab6e5c0205ccce869a248ea"},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.ed389691c6201cc2b4bf.js",revision:"8810cce19d52bfb6d3946e7897a9b05f"},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.f622d39e0330b40dad71.js",revision:"051a4a516d42384df5d70241da28884c"},{url:"/beta/apps/catalog/js/platforms~31ecd969.5d78adad865737257a48.js",revision:"151c8ec865029ba94a308e877fa3bd4a"},{url:"/beta/apps/catalog/js/platform~91f4305a.e2497efba996fe2e29ab.js",revision:"5031c1eb1574e61d3f2879ea2e12e87d"},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.2af876d34617aa091c30.js",revision:"545f2ed2889c39998c9566a20b49dc33"},{url:"/beta/apps/catalog/js/portfolios~3d9b8e9e.6de86d7ed2ee4a4d3f32.js",revision:"a9f7d443a5a0ebe32ff6c65a3e6776a2"},{url:"/beta/apps/catalog/js/portfolios~c895ce40.367e114d749b2acb649b.js",revision:"b0d83f4df8321908b9b2e446d1b6d774"},{url:"/beta/apps/catalog/js/portfolios~cf15acf0.88d4a0f4387291d9e9bc.js",revision:"889771625fc5856727e521d7345ad616"},{url:"/beta/apps/catalog/js/portfolio~91f4305a.f57bae073c14f31ff25f.js",revision:"e1ebaa1c007e59f8bd330830f9977048"},{url:"/beta/apps/catalog/js/products~31ecd969.b1d99ff8ebd24f617f94.js",revision:"09b0c877bfff27a81c74803accd5ae8a"},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.2b3a30b6d8aa7c3c83f4.js",revision:"8a0e4944744ba712285a89f81c91e5e7"},{url:"/beta/apps/catalog/js/service-offering-detail~5a11b65b.725ae0b1803299a3f961.js",revision:"066bcd089b7b6162bdd76595e162ea63"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.a27c99a9b3d5667797bc.js",revision:"7e13ea380cd7a23492bc486944691615"},{url:"/beta/apps/catalog/js/survey-editor~0f485567.6803acb066c4e3bbbbe5.js",revision:"13f897acc4fc41b6e716eb62f8af995f"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.565966e8b2cdbd5cdf92.js",revision:"901d349e1a1d700cd0dc1e58f8b381fa"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
