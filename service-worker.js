if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return s[a]||(e=new Promise(async e=>{if("document"in self){const s=document.createElement("script");s.src=a,document.head.appendChild(s),s.onload=e}else importScripts(a),e()})),e.then(()=>{if(!s[a])throw new Error(`Module ${a} didn’t register its module`);return s[a]})},e=(e,s)=>{Promise.all(e.map(a)).then(a=>s(1===a.length?a[0]:a))},s={require:Promise.resolve(e)};self.define=(e,c,b)=>{s[e]||(s[e]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+e.slice(1)};return Promise.all(c.map(e=>{switch(e){case"exports":return s;case"module":return d;default:return a(e)}})).then(a=>{const e=b(...a);return s.default||(s.default=e),s})}))}}define("./service-worker.js",["./workbox-e50bde17"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/fonts/platform-amazon.png",revision:"8b190df931e2054ee7d5a0c5101b5308"},{url:"/beta/apps/catalog/fonts/platform-default.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-openshift.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-tower.png",revision:"01c109fb5977d84edfbe585276bf9cad"},{url:"/beta/apps/catalog/index.html",revision:"394d1abc73c80a06256c4e21ea2b1080"},{url:"/beta/apps/catalog/js/0.3ce20386c6516277f1cb.js",revision:"a39fad3ccf74c8855fe1d6e10af466f6"},{url:"/beta/apps/catalog/js/64.7fb522ffd1a2739386d7.js",revision:"76ce09c132df2c2bffb78561cfacaff0"},{url:"/beta/apps/catalog/js/7.3c9a9e63a034a0a2b8ef.js",revision:"5ce32c45f81d0a409afebf67c4198bd7"},{url:"/beta/apps/catalog/js/App.4bdc5de22a332c12c404.js",revision:"71bcf17b03d4100fdf525f4b46bcf1aa"},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.fe35862ebcf403fcd19d.js",revision:"ecfcaee5b78ffa5204535f3262af6d9e"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.761d188dd3b24f0cd8cf.js",revision:"8be191f055edf0903060abeeb1be93a4"},{url:"/beta/apps/catalog/js/approval-request~31ecd969.b97c243f7ddefd8ee65b.js",revision:"7e81a16ffad48fbf30af355221c2ae7c"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~1601866c.aeee7162fead62f3a364.js",revision:"3b28ebf8e3f1db87ca03e3c4aa30a8da"},{url:"/beta/apps/catalog/js/edit-approval-workflow~91f4305a.7481164bef6df2be2202.js",revision:"9f4cefcd7dde8ca1d4c3a7c4e598f35c"},{url:"/beta/apps/catalog/js/error-page~31ecd969.99e991bb6116cdc78433.js",revision:"a1a63b1ad061e7eaa5f82bdc59e9ecf9"},{url:"/beta/apps/catalog/js/framework~f9ca8911.b89f15f93d43d6396c42.js",revision:"e0afe10876a01209d85bffeefc0deb44"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.27fdcc68239d89853363.js",revision:"0b729e2703b205958b6e2734eda854c7"},{url:"/beta/apps/catalog/js/lib~App~0f485567.d601b70823a5b2a25a11.js",revision:"babbc509cf0b05bc63ee4f9eacd4225e"},{url:"/beta/apps/catalog/js/lib~App~1c3a2c3f.2cc61e81ac72bbc58163.js",revision:"17e739a3579cac501dd7497a3b690c0b"},{url:"/beta/apps/catalog/js/lib~App~2539590c.dc88127ba51e71374c3c.js",revision:"4a196c476ff61e75d4a76f21993cfe4a"},{url:"/beta/apps/catalog/js/lib~App~253ae210.d3db01a65c4fbfaa9d7e.js",revision:"783a960c2816e46f95d16bd3144836fb"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.c4daca6ab61073221126.js",revision:"b9e513210ba9caf17780dd170e56b637"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.dee1faaa3b93abe6813e.js",revision:"7fb880cf03a77f36f136fc683db757aa"},{url:"/beta/apps/catalog/js/lib~App~60b88c48.2e223c146d9f21aa8dc6.js",revision:"f3b973610e20cd36818eea2752f16643"},{url:"/beta/apps/catalog/js/lib~App~6625447d.a9b9e22ef22e3960e073.js",revision:"f8ee61f46494dc9d5c71dc73a7aa5f6a"},{url:"/beta/apps/catalog/js/lib~App~678f84af.80e3e5e838ae54eb8c63.js",revision:"7a1f00a9c1573234b5b178b66429ca86"},{url:"/beta/apps/catalog/js/lib~App~690b702c.a73147a5938219176df4.js",revision:"3729603109de7c19e05e2e4fdf7a5e34"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.56d27098d74f5e279a3b.js",revision:"cf6f7cbbd28213a36d28f2c41559f6b6"},{url:"/beta/apps/catalog/js/lib~App~b2e0d743.2946e6be026c42c49e2d.js",revision:"a81195f387b7b88687c851368d80de4f"},{url:"/beta/apps/catalog/js/lib~App~b8ebd723.bb6e55d08df5af133410.js",revision:"94f5fd98c1500a5c1e269a654a7ffbeb"},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.6eba322783961029a3ee.js",revision:"9210f7cf573e637271d668e9c3d4330e"},{url:"/beta/apps/catalog/js/lib~App~cf15acf0.44ca31397b96b9b78cd2.js",revision:"0b65bd00d473772fe66251003f89960a"},{url:"/beta/apps/catalog/js/lib~App~f373cf78.bfe0f97623bf19f233eb.js",revision:"e59ad95db9e7dfbd1f3995f9d6c88ddf"},{url:"/beta/apps/catalog/js/lib~App~f79053e5.4dd17b4b1a66fbd8088b.js",revision:"dd9064acfb494435496d3e76f693371e"},{url:"/beta/apps/catalog/js/lib~add-portfolio~approval-request~copy-portfolio-item-modal~253ae210.adec340c62c30960a047.js",revision:"81314fd7d357b73e0d34d5f99b75bfc1"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~76d93fce.8dd88451be8cbdf50a41.js",revision:"349bce4f398a204d946b5c6d262bc228"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~77bf5e45.bf33293a71b356d9cda1.js",revision:"048c8419e16a3cd2221851ba2df9c350"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~b09b0461.c5848d1bb48623a6f1af.js",revision:"0594764208bce4813fa9e3cd90618c21"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~cbe9451d.80aea28625726c63fb06.js",revision:"cb98b61e3e1752977df78c4d00c267cb"},{url:"/beta/apps/catalog/js/lib~approval-request~portfolio-item-detail~807bc7cd.ec7f7eb60b1d5d267163.js",revision:"00647d7f56bab37b1eea50dfff1569af"},{url:"/beta/apps/catalog/js/lib~order-details~service-offering-detail~4bec7f87.4a6c3e127dc6b532d316.js",revision:"633b9dddd1a954999a5433f9232b53c3"},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.f0373924547bc1574980.js",revision:"d495e8a0c7e9cc4e30888aae1dcccc45"},{url:"/beta/apps/catalog/js/lib~order-detail~portfolios~c84bddb0.4cc1b594af148f17ad46.js",revision:"51cbf1e9c7b2144eb2efcc47a7018e04"},{url:"/beta/apps/catalog/js/lib~order-processes~orders~platform~platforms~portfolio~portfolios~products~31ecd969.98f3945e1a12a2a5697b.js",revision:"e5d5fd1045fe4fb05eaa1b8c24538387"},{url:"/beta/apps/catalog/js/lib~order-processes~portfolios~31ecd969.876d9d984b3b3ec35e99.js",revision:"c2d4f6d8694e2f267b85a4e364326216"},{url:"/beta/apps/catalog/js/lib~order-processes~portfolios~807bc7cd.e16f075556ac80898df3.js",revision:"928dafd67803af0d1b2fc4615cc6c9fa"},{url:"/beta/apps/catalog/js/lib~order-processes~portfolios~b3141737.93d24ccdc5d678e5c5e1.js",revision:"09f0930c1032f15f50f90ee3355659a8"},{url:"/beta/apps/catalog/js/lib~orders~platform~platforms~portfolio~products~31ecd969.5540974b4e0a96a3f480.js",revision:"74788da7f2fe3cb26b89d601f821a443"},{url:"/beta/apps/catalog/js/order-details~31ecd969.cd50318b87ba399ffdf5.js",revision:"9fb819fa78659975cee794eb50c9cfe0"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.1d84271f9d570e34a13d.js",revision:"1a648d73888608abad5baeb10fae2a79"},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.f9063d6fb93599d3dacc.js",revision:"00b53bb538ed9be7e34f48173f1d46d7"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.5d44134803802cc95669.js",revision:"5224ae32fb3b2111719d0424e3b8df81"},{url:"/beta/apps/catalog/js/order-processes~31ecd969.7912be36e4173d7d7a5d.js",revision:"d04be56c363504ea663c357e3a9d89ae"},{url:"/beta/apps/catalog/js/orders~0f485567.bde2c5d50a52598ee38c.js",revision:"139718da4d786cee64ca2a5b27017e09"},{url:"/beta/apps/catalog/js/orders~763301a3.90d1b5a8c2461b59684b.js",revision:"3c89d13fbd57e2cace7af0389b3ddee4"},{url:"/beta/apps/catalog/js/orders~91f4305a.08af6380e14d454ed89a.js",revision:"c881721f15c57a3052a16ef07340fc19"},{url:"/beta/apps/catalog/js/orders~c895ce40.f786dc2e8266fc1bd180.js",revision:"ff6f77eb8b7bceffad96157c4cf3f40f"},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.ff95e8fbdcbdc3c26d4a.js",revision:"0a86a516327cb3b9c0b80b730ce43ba1"},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.bd194ccde90cbfeb07f3.js",revision:"c036a916bd3396ca38eb4414adeed14d"},{url:"/beta/apps/catalog/js/platforms~31ecd969.8fc07206971d8aad47b9.js",revision:"30a2039a40dca5e49963f2c82ab65b4e"},{url:"/beta/apps/catalog/js/platform~31ecd969.430080d49c45428c6d94.js",revision:"1045bcd1200c5de405252411c274e9db"},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.3ecf6dbdfa32057e0c39.js",revision:"bd1b6aeaef195545fd7d730dfedbb967"},{url:"/beta/apps/catalog/js/portfolios~31ecd969.4597db32ca906f52e6a7.js",revision:"a1dc25b801e34b00a1820103cc3feb5f"},{url:"/beta/apps/catalog/js/portfolio~31ecd969.342518c7e4b3ab62199f.js",revision:"167b46a3e5c8d826fdfe6c7da1077bce"},{url:"/beta/apps/catalog/js/products~31ecd969.3d0bd257ac12052c5b75.js",revision:"0ffdb677d06317c61d0216e83ec128aa"},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.a52f8eb99783d92f5af9.js",revision:"5033dd09fd98fefa9e202c493be07d53"},{url:"/beta/apps/catalog/js/service-offering-detail~5a11b65b.35b09038ab46fbe40c51.js",revision:"79e81b171ab0cf737b4c56e364230a2a"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.678560113fb0d5fefdc8.js",revision:"a0d5e2803110599ed1cf79f74ab69d14"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.266abbb849d5385ae181.js",revision:"a324f8d0da105aed47272e1a1d86e1ed"},{url:"/beta/apps/catalog/js/survey-editor~cacb8e57.31cfdd6340109cfe7c7b.js",revision:"043f027f2efda08a04fe9ae2e851f447"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
