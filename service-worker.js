if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return c[a]||(e=new Promise(async e=>{if("document"in self){const c=document.createElement("script");c.src=a,document.head.appendChild(c),c.onload=e}else importScripts(a),e()})),e.then(()=>{if(!c[a])throw new Error(`Module ${a} didn’t register its module`);return c[a]})},e=(e,c)=>{Promise.all(e.map(a)).then(a=>c(1===a.length?a[0]:a))},c={require:Promise.resolve(e)};self.define=(e,s,b)=>{c[e]||(c[e]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+e.slice(1)};return Promise.all(s.map(e=>{switch(e){case"exports":return c;case"module":return r;default:return a(e)}})).then(a=>{const e=b(...a);return c.default||(c.default=e),c})}))}}define("./service-worker.js",["./workbox-1a4f2008"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/index.html",revision:"3e6e095011f05489d29a245ae04743d3"},{url:"/beta/apps/catalog/js/0.85251ac3c588097ee384.js",revision:"4d3195079ec9082e216011ab78e02315"},{url:"/beta/apps/catalog/js/12.5036d0b6262fad704424.js",revision:"2e738c22751fc8c23fd27c9aa027b674"},{url:"/beta/apps/catalog/js/6.f962e4ce3e7ef143c29e.js",revision:"fd5eb0a97597e0edeb6a9add048b7a5a"},{url:"/beta/apps/catalog/js/67.1a5d7a9c9e4ff0668de2.js",revision:"e4effebc94e391c0b120a5a81dd4afb6"},{url:"/beta/apps/catalog/js/9.9a6b4bccf1f4855bcf72.js",revision:"abbbf6949a1db4fb30664413c8d91003"},{url:"/beta/apps/catalog/js/App.87d0013bb01565dec0eb.js",revision:"05f6986363d21d1d91e880b51b51f929"},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.bd60e79a19ac4d7e26ec.js",revision:"b68f66795cc519b563c775e59cd7db3b"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.1f08f66b166437025fa4.js",revision:"5671fe42222aa98cc571e0c81b5c3ef6"},{url:"/beta/apps/catalog/js/approval-request~31ecd969.726e7f3829af67db372f.js",revision:"f490ad003f6f9d8695349a78aa725017"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~6f498858.01e764c1c8c11d0ee436.js",revision:"fc26d415a4278a9127b0d7c7c6c14815"},{url:"/beta/apps/catalog/js/edit-approval-workflow~91f4305a.308d199e5b07ee47b103.js",revision:"a4501fa6fbb9009b28c6f84032c52d20"},{url:"/beta/apps/catalog/js/error-page~31ecd969.25090dd376f05faff3f5.js",revision:"41f49a181762a630aacb3026898e0a6e"},{url:"/beta/apps/catalog/js/framework~f9ca8911.dae7525389bff7868959.js",revision:"7bdc5413dea8fc3e72c71f2948ce2ad3"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.bc7f6eeb76901a20bf45.js",revision:"c9bd2ff9a55a1a05b0736a69d031da1a"},{url:"/beta/apps/catalog/js/lib~App~0f485567.dcba127ee12b049bf3b6.js",revision:"b78bae4029fdb241919f52e29998c8ef"},{url:"/beta/apps/catalog/js/lib~App~2539590c.c6f36800d7eb7710c59f.js",revision:"5fde2b5434c3e2f1dcc4e91087f3f918"},{url:"/beta/apps/catalog/js/lib~App~253ae210.2b2e00d1e36045e5ddb2.js",revision:"705791e9b8cf24630257a9d3683d15fd"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.0ae6043f297de7a43c1f.js",revision:"7044e859411f7f23da8faf43d81c44c5"},{url:"/beta/apps/catalog/js/lib~App~43bb34aa.465ae9b084ffc6a69c90.js",revision:"ecfd6b7707e00d86457c0e8d6fae31e5"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.1b05cbb9aa9ba4515664.js",revision:"d42bf6653c0cd38bc646181024d3b928"},{url:"/beta/apps/catalog/js/lib~App~50b4bdc6.3bbf3616b9f42dd1864b.js",revision:"a66d5ab8006423153ffd51c2a7489e17"},{url:"/beta/apps/catalog/js/lib~App~60b88c48.27383e2414621502c5e8.js",revision:"33262842e7672b4c33c63c79cae6eb8e"},{url:"/beta/apps/catalog/js/lib~App~678f84af.9a4184587bf2ab20b652.js",revision:"9acca356996af5545cbe8cb8eb6315ac"},{url:"/beta/apps/catalog/js/lib~App~690b702c.77886405ab461c69afc7.js",revision:"777ca6d6e13860042064a7f354ca7440"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.29c38c1be46f163482ec.js",revision:"8e7ce6415370a0a65ddd0aa0db2b825d"},{url:"/beta/apps/catalog/js/lib~App~b3141737.54340ba7d1b0eae5e5e7.js",revision:"bfe93422ef09d6414ef57ea9c3c20380"},{url:"/beta/apps/catalog/js/lib~App~b8ebd723.19d8a506387f057b69a3.js",revision:"53cc8b9a4a303305d8b0696fd0e878b5"},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.1e63a9f93003c836d36b.js",revision:"ae034d0c998e2afac281d77fb477721a"},{url:"/beta/apps/catalog/js/lib~App~e9435529.a4ded8dc485264ba3748.js",revision:"cd5fc7387392b2dbaa65db2c4a1088c2"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~2930ad93.afb931292e2c9d19b64d.js",revision:"9911dec0aef342b646455d8c1263cc6b"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~7293ddd8.d30088fd49c4c2bc2bfa.js",revision:"f0ed74d02549431542ab01cfaff9f004"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~76d93fce.74caa64636645ce7b126.js",revision:"4b25b690d6a0f2ee40c36c07a2eb9582"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~8c657992.0c71d740b5c4bd47a0c5.js",revision:"03f116fbec6c2672768a8fbd51fb7d3a"},{url:"/beta/apps/catalog/js/lib~approval-request~order-provision~portfolio-item-detail~990daa13.41d5aac7de315da9e142.js",revision:"d5d7edf6de7add25af612892fd94e140"},{url:"/beta/apps/catalog/js/lib~order-details~order-lifecycle~order-provision~service-offering-detail~4bec7f87.0712f59beca29a859dca.js",revision:"e4ca073f8aec2d24ff58cd0f6c3544b3"},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.dc76e4f576909b25753c.js",revision:"d8729ed00d7a0b68e070151369b364d1"},{url:"/beta/apps/catalog/js/lib~order-processes~orders~platform~platforms~portfolio~portfolios~products~31ecd969.6f6a7df3e46ee4cd8239.js",revision:"e3bb5df5e0294cbeda4b2196a2592c51"},{url:"/beta/apps/catalog/js/lib~orders~platform~platforms~portfolio~products~31ecd969.bb17a1d1cf6987c36372.js",revision:"101f12161b7ecbdd0f9f0979bb8d6a86"},{url:"/beta/apps/catalog/js/order-details~31ecd969.b669d5763688527fae52.js",revision:"f360e67321a8bcbb6d6ba589061fac74"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.c97fc94423e623092cf6.js",revision:"48846cbe55688bf374f57424a49a05b1"},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.b5e0ce83b1d09e177d30.js",revision:"ab6b7b06a261ae323d799def8acf7d46"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.15885cf60e2c751027b3.js",revision:"1b195a7dc9a783bcca6f5bc31c69fa92"},{url:"/beta/apps/catalog/js/order-processes~31ecd969.18a2220f871e5611c2e7.js",revision:"3985277105aedd4593f07280fc4e7204"},{url:"/beta/apps/catalog/js/order-processes~5a11b65b.0ea971a3c227ca2adfb8.js",revision:"47751c69b60c7b36e5d104bd15c3834e"},{url:"/beta/apps/catalog/js/order-processes~bc848bd0.e5e612f8842a375048be.js",revision:"49d58f81d0cbf0b68692ebbcf736b785"},{url:"/beta/apps/catalog/js/order-processes~cf15acf0.ded2af10cf1b1d4a62cf.js",revision:"da236c321282e8e12d589895958be1ad"},{url:"/beta/apps/catalog/js/order-provision~31ecd969.eccb8874e2f95afa0681.js",revision:"3df1b102adaf5273f262f052d838a190"},{url:"/beta/apps/catalog/js/orders~43bb34aa.d67d9c207e39c887c909.js",revision:"960384263b7b764eebe43b35897ef6c6"},{url:"/beta/apps/catalog/js/orders~91f4305a.f699af58f29826423261.js",revision:"5b66d306652e469953294150da53d00d"},{url:"/beta/apps/catalog/js/orders~a8479bfa.ed03d0167cb273e2f082.js",revision:"88c9b89c9cb4641b5692af255c52a263"},{url:"/beta/apps/catalog/js/orders~b3141737.f247414d851e527e501a.js",revision:"17cc736a748141f8e990261ccac8c3a6"},{url:"/beta/apps/catalog/js/orders~c895ce40.b682e41c1f8954f4c530.js",revision:"e1e6c310d00a387288e8fbea9eb93a2f"},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.4c9cf7a250e75845a6c2.js",revision:"d19cc3833768769e9b157954ff5e7ceb"},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.bc4b394b27b38fee2e5b.js",revision:"c7b0bfdfbfa3222824546132cce5880f"},{url:"/beta/apps/catalog/js/platforms~31ecd969.62d9c8f80a7248892b8d.js",revision:"bf9e641c34cea721a7709447d2d8c727"},{url:"/beta/apps/catalog/js/platform~91f4305a.c95908fa0cc2d9882b17.js",revision:"fa1d10d54f092c8450fe4a424853fbbf"},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.3f141c51a62fccb96f0c.js",revision:"f3d6e613875612b3545669fa531676f6"},{url:"/beta/apps/catalog/js/portfolios~3d9b8e9e.82e6892338241b39ee58.js",revision:"c42cba9b3ec6910a16482a789bb80cff"},{url:"/beta/apps/catalog/js/portfolios~807bc7cd.0f0cae427b446a2a7f16.js",revision:"b9d5f9e9c19f1d1157bce3dabab1c900"},{url:"/beta/apps/catalog/js/portfolios~b3141737.efa5d14734d9917e2b51.js",revision:"34a61a49ee9c2fe1509c798922a93cac"},{url:"/beta/apps/catalog/js/portfolios~c895ce40.eb429667f0932e2057b0.js",revision:"6ff53cbe9183684e4a3014e212b6d334"},{url:"/beta/apps/catalog/js/portfolio~31ecd969.73b01af3ebc0917b58c2.js",revision:"74bc777b4cabfd149c3c0955f259c8d0"},{url:"/beta/apps/catalog/js/products~31ecd969.2d670fef326c19c6af11.js",revision:"8e9e268363f2737b7892e9cd689799cd"},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.20794e18c97b0a7c7f88.js",revision:"afc52f4faabfc78975987ecc94d5c0fb"},{url:"/beta/apps/catalog/js/service-offering-detail~31ecd969.3717310ac55bcb2fa828.js",revision:"c43fa35868b6946fe30a27b0b484eeb4"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.a9052b85a2be05d24b2a.js",revision:"759b84c5a7c1f7b79b6c383ff0ccc114"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.455c04311248855a39a0.js",revision:"7f5740e0a5ed2f55b26f17ef3e21261a"},{url:"/beta/apps/catalog/js/survey-editor~cacb8e57.d65b3f152d713f6093ba.js",revision:"be7f905d2eb13e073daea47e70708644"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
