if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return c[a]||(e=new Promise(async e=>{if("document"in self){const c=document.createElement("script");c.src=a,document.head.appendChild(c),c.onload=e}else importScripts(a),e()})),e.then(()=>{if(!c[a])throw new Error(`Module ${a} didn’t register its module`);return c[a]})},e=(e,c)=>{Promise.all(e.map(a)).then(a=>c(1===a.length?a[0]:a))},c={require:Promise.resolve(e)};self.define=(e,o,s)=>{c[e]||(c[e]=Promise.resolve().then(()=>{let c={};const f={uri:location.origin+e.slice(1)};return Promise.all(o.map(e=>{switch(e){case"exports":return c;case"module":return f;default:return a(e)}})).then(a=>{const e=s(...a);return c.default||(c.default=e),c})}))}}define("./service-worker.js",["./workbox-e50bde17"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/fonts/platform-amazon.png",revision:"8b190df931e2054ee7d5a0c5101b5308"},{url:"/beta/apps/catalog/fonts/platform-default.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-openshift.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-tower.png",revision:"01c109fb5977d84edfbe585276bf9cad"},{url:"/beta/apps/catalog/index.html",revision:"fd7a050e88f245346f71e4587fb7c24e"},{url:"/beta/apps/catalog/js/0.90c82f54889a4a8635ae.js",revision:"cee78aa9ae15c70fad9e6ddc562d3ffd"},{url:"/beta/apps/catalog/js/53.1c8acd6713a3f5e5fccd.js",revision:"deb75e1f138e7e74ac4a035d8b115f17"},{url:"/beta/apps/catalog/js/7.7f6dbe72a77a8989b7f5.js",revision:"30950fc62709bdd92b1cedb5d2223b1d"},{url:"/beta/apps/catalog/js/App.c26906b81613bddc1bce.js",revision:"81c1d443881b75f04d3463b687cab8b6"},{url:"/beta/apps/catalog/js/add-portfolio~31ecd969.56589905232429071a07.js",revision:"be86273ede01fba7afeecb4a8e99551a"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.54e04c680047255af1d7.js",revision:"70fcc2b0982d46fd03bcfa7238c4e35b"},{url:"/beta/apps/catalog/js/approval-request~31ecd969.67538ccdd0341401c35d.js",revision:"4476aac25f06a28bdd442fc454639cb7"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~31ecd969.8c86b0950f2ea977fe59.js",revision:"edd5d120a3351af7afef15cb4c6c19bd"},{url:"/beta/apps/catalog/js/edit-approval-workflow~31ecd969.44629a1fc005c7d60cc6.js",revision:"0aa1cc17623b14aeda2c7beb2bba6210"},{url:"/beta/apps/catalog/js/error-page~31ecd969.495093672e683deab51a.js",revision:"913fb99ac7823cffbc4c7dd039c53c39"},{url:"/beta/apps/catalog/js/framework~f9ca8911.797b33502260fb7e59a5.js",revision:"5891c1efb15b0addb0c59232ef800740"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.0cf87fee4251ac1ca2df.js",revision:"be6775de3d22d295e6e02bc9442971d3"},{url:"/beta/apps/catalog/js/lib~App~0f485567.6f80fe7aed9988350b3c.js",revision:"9e4449273e554477033b74701e9e1eb0"},{url:"/beta/apps/catalog/js/lib~App~1c3a2c3f.2307afb25ec82edeceef.js",revision:"72faad77fd7f0beb297c9bb7469275fd"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.6fa6541d508e022af591.js",revision:"ecfac3c4bb66f32020015507962089c1"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.cccf79f9066f346950f0.js",revision:"4c17b14fa26057139e5ff11f67d31005"},{url:"/beta/apps/catalog/js/lib~App~545c15e3.1fe6f22d6cd670202189.js",revision:"32f0860066dce31e14138ced614ee27b"},{url:"/beta/apps/catalog/js/lib~App~6353c401.d47574205abcca33a13e.js",revision:"66ec434de38c7899f6429a40f9bf9caf"},{url:"/beta/apps/catalog/js/lib~App~678f84af.27df3369896899e9ea5b.js",revision:"06045e47359a1a8aa40248b571736a68"},{url:"/beta/apps/catalog/js/lib~App~690b702c.6c930c0ebfd542b6d32a.js",revision:"9ae6d07e3672fd262c20e299b154b58e"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.e37fbb68f40a8774d218.js",revision:"e40986dfd00dd45aac17f9909f026a41"},{url:"/beta/apps/catalog/js/lib~App~c6d1b060.9aa1530d7bf4e5ff4f60.js",revision:"0f06aa7ed19d218202a8dc1890f667ff"},{url:"/beta/apps/catalog/js/lib~App~cf15acf0.f76778fc293e53517707.js",revision:"9d29e9ade141d3798a51ff7c6d14a008"},{url:"/beta/apps/catalog/js/lib~App~f79053e5.d5d609503f9441f721f0.js",revision:"009f0e8b12e7fe11cc142018dc183c65"},{url:"/beta/apps/catalog/js/lib~App~f9ca8911.585dd120c428c2f7286a.js",revision:"fb4a470bf8d7faa88c359d8d9ca4a56e"},{url:"/beta/apps/catalog/js/lib~add-portfolio~add-products-to-portfolio~copy-portfolio-item-modal~edit-approval-workflow~order-m~0629c9d2.d140bb13f3788bba3cc7.js",revision:"966ec4b4ff0197c3853fbc70409ee9a4"},{url:"/beta/apps/catalog/js/lib~add-portfolio~copy-portfolio-item-modal~edit-approval-workflow~order-detail~order-modal~portfoli~5b362261.0fcc123b2b60af10f3d4.js",revision:"e8d81f29c75082908f2f53e4a467afc9"},{url:"/beta/apps/catalog/js/lib~add-portfolio~copy-portfolio-item-modal~edit-approval-workflow~order-modal~portfolio-item-detail~55ab1030.0bf03df0d87c6ceada10.js",revision:"829d7654bc94f57a7d7ec7f3dd3e491f"},{url:"/beta/apps/catalog/js/lib~add-portfolio~copy-portfolio-item-modal~portfolio~portfolios~products~remove-portfolio~share-por~a2fe5007.d7a3e7e2e44b13b82859.js",revision:"25c2d7a2019bab3cfe7cffb2cfcbc9ce"},{url:"/beta/apps/catalog/js/lib~order-details~service-offering-detail~4bec7f87.f57a4251b319226f88d0.js",revision:"5dce93fb669318f205b333b3fe171ddf"},{url:"/beta/apps/catalog/js/lib~order-detail~orders~platform~platforms~portfolio~portfolios~products~31ecd969.0165010db18881e243ea.js",revision:"cbfa46e7bf1f54f266484430f942f3e8"},{url:"/beta/apps/catalog/js/lib~orders~platform-inventories~31ecd969.c3b48fcd45b9fe3123e9.js",revision:"9c32cc2f0408133e43c5aa5615c2f9ba"},{url:"/beta/apps/catalog/js/lib~orders~platform-inventories~77bf5e45.7ce32574ac203bd2ab76.js",revision:"f0f75319ae0a52f48aa64ce10af3519b"},{url:"/beta/apps/catalog/js/lib~orders~platform~platforms~portfolio~portfolios~products~31ecd969.c06304bcda053c039d09.js",revision:"b12cff391469659bb6bde9f034557bb8"},{url:"/beta/apps/catalog/js/order-details~31ecd969.5dd46f94fcdb4ace141b.js",revision:"f493aed09ff4583847cf2d0474361bde"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.debb1ad949066a7aa9b1.js",revision:"1d50bc57a87d340ab454b91bc6f25a4b"},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.3bab2b72c87832d4cbc3.js",revision:"7ffe6d404b018faeefaa3352943f21a2"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.2de0caa99c8d5ceca490.js",revision:"4471840729ca28f927864a442c812375"},{url:"/beta/apps/catalog/js/orders~91f4305a.c972373d72623f199bc9.js",revision:"2757f31a37d39b5b22de8b7891c226ae"},{url:"/beta/apps/catalog/js/orders~c895ce40.48ca6c8a811b4369e1e2.js",revision:"0dd9114ec14940cbdd0291e29700b464"},{url:"/beta/apps/catalog/js/orders~cf15acf0.3c61ca22f36301ce16ae.js",revision:"2721f8ef5ab9a766052c0f9f45662831"},{url:"/beta/apps/catalog/js/platform-inventories~3d9b8e9e.ef6c2e61b5db7a119498.js",revision:"0d4ae27add1fd51c227c38c5228b0b83"},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.60c5a291909e3ddf0104.js",revision:"612a01b60f829c38f506879bd54a7516"},{url:"/beta/apps/catalog/js/platforms~31ecd969.cdffb05fc13ed7d7aad2.js",revision:"0f0a406958ea22c9cb8aa99f585f66f9"},{url:"/beta/apps/catalog/js/platform~91f4305a.11656ba1fe951067d00e.js",revision:"626bf811014713b468bf29c5530fcb71"},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.f654fed88be743b44abc.js",revision:"313f04b53b324553ce22d1df28d0b5a9"},{url:"/beta/apps/catalog/js/portfolios~31ecd969.ccf4425c284647b968fd.js",revision:"cd6192e491d4b434ccc901599e84cd38"},{url:"/beta/apps/catalog/js/portfolio~91f4305a.3ee98a02cfdab1c1bebd.js",revision:"461b6b0d14a9461a1b02235479cc6f85"},{url:"/beta/apps/catalog/js/products~31ecd969.9620fa3b91a216edaddb.js",revision:"1b0e52f0250d2ad3894196a352b6cca8"},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.eacdc25224241711be49.js",revision:"b57253ba4e3b725365934a0336b91ec7"},{url:"/beta/apps/catalog/js/service-offering-detail~3d9b8e9e.0ff7c2dd9cf620b17d6d.js",revision:"b35e40c3c266a68bb38ded8f023fee74"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.3c6cb28631c3f52d8bb7.js",revision:"bc6a43d54838d7d0a856c961eead62ff"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.ef1ad1cd842c99fcc103.js",revision:"8240d47637ee4f978f837ca7a4e35589"},{url:"/beta/apps/catalog/js/survey-editor~cacb8e57.7f8ba2d9cc256a58fe40.js",revision:"87622d3963c1676c703d227fc221b225"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
