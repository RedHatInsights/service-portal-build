if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return c[a]||(e=new Promise(async e=>{if("document"in self){const c=document.createElement("script");c.src=a,document.head.appendChild(c),c.onload=e}else importScripts(a),e()})),e.then(()=>{if(!c[a])throw new Error(`Module ${a} didn’t register its module`);return c[a]})},e=(e,c)=>{Promise.all(e.map(a)).then(a=>c(1===a.length?a[0]:a))},c={require:Promise.resolve(e)};self.define=(e,s,b)=>{c[e]||(c[e]=Promise.resolve().then(()=>{let c={};const f={uri:location.origin+e.slice(1)};return Promise.all(s.map(e=>{switch(e){case"exports":return c;case"module":return f;default:return a(e)}})).then(a=>{const e=b(...a);return c.default||(c.default=e),c})}))}}define("./service-worker.js",["./workbox-1a4f2008"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/fonts/platform-amazon.png",revision:"8b190df931e2054ee7d5a0c5101b5308"},{url:"/beta/apps/catalog/fonts/platform-default.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-openshift.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-tower.png",revision:"01c109fb5977d84edfbe585276bf9cad"},{url:"/beta/apps/catalog/index.html",revision:"c62c9bd22f1d7c76d94fc6ea06726f73"},{url:"/beta/apps/catalog/js/0.6bdf72ca23b88d539900.js",revision:"aced4c7f6432e177d597ad04566010f6"},{url:"/beta/apps/catalog/js/2.37fe91d1c218c30c3fb2.js",revision:"e7f69b2ce7ae3eb207f730406bab1e57"},{url:"/beta/apps/catalog/js/68.aeee327cab7f3aa6bfd4.js",revision:"cf19d9cbe15213d0c495d363c9297e1d"},{url:"/beta/apps/catalog/js/App.8a2ca050270c46408ea7.js",revision:"10ba4b56a271fd745948e45360b09301"},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.ebdb26c9157d270c1067.js",revision:"6f2d9653fe6fd85f002625d82aa2a3f9"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.15fbab6b4276ddf12bd4.js",revision:"a6cd5323fff919bb49a3c23c7b0fec3f"},{url:"/beta/apps/catalog/js/approval-request~31ecd969.75f217dc18d275d1ac4e.js",revision:"fb19c80fbbbe23a4852477ba948ed361"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~31ecd969.11941162e707288b9de0.js",revision:"b296870c052489d89cfe13247416483a"},{url:"/beta/apps/catalog/js/edit-approval-workflow~91f4305a.b13a3d665fe678e08bd4.js",revision:"bafe0b25849bb8de2facd74912715b6d"},{url:"/beta/apps/catalog/js/error-page~31ecd969.70ffac64a27f7978b280.js",revision:"b812cb1b0b8cddf00e6c1f667bdbadc1"},{url:"/beta/apps/catalog/js/framework~f9ca8911.869bdfbd5a34dc736912.js",revision:"c4f1604ce2b3c8d5406716ff721ba23c"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.91573563be419e7027b6.js",revision:"df2ca57a4f1cb1f83c23c471390e977e"},{url:"/beta/apps/catalog/js/lib~App~0f485567.0c95818fe997563d1f0e.js",revision:"06df5e2d0a463b48ab1e61b7a810d473"},{url:"/beta/apps/catalog/js/lib~App~1c3a2c3f.f203244fc4c37eb4d8eb.js",revision:"95d10d4f349e3fbf9ed342313ac25fdd"},{url:"/beta/apps/catalog/js/lib~App~2539590c.024883d4f88b57d19c39.js",revision:"c92325249aa9661d0f7bcacaa3018976"},{url:"/beta/apps/catalog/js/lib~App~253ae210.87496b0be276fc664008.js",revision:"5e004681006afd1551ab8b0ad8fdb651"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.fe80768d86742aaac19d.js",revision:"5d13de7a277d7b14feeb558ee3f50e74"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.0108b612b47c4bf4a267.js",revision:"4e1522f41e6e59d8ca689fb90d28586f"},{url:"/beta/apps/catalog/js/lib~App~545c15e3.91a62d2dd6ff6af60383.js",revision:"145ffe922230abce453496ab411c116b"},{url:"/beta/apps/catalog/js/lib~App~60b88c48.746cb041f356a51fd06b.js",revision:"4858db31c4bcfdb21f8fbb989b3eb8c4"},{url:"/beta/apps/catalog/js/lib~App~678f84af.eb2647ccfd978e8a4d30.js",revision:"d0e2c9b0fbfe647bf0a0639824ec044b"},{url:"/beta/apps/catalog/js/lib~App~690b702c.a007ca00c14782c367ab.js",revision:"0e8d1d1e822a10bc79cf5e78be57ee1c"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.77d254bdfd6c76b87617.js",revision:"bc64a78332c216e93feed1a2d6b0f5b1"},{url:"/beta/apps/catalog/js/lib~App~b8ebd723.8ac32d616ce1222b3fb6.js",revision:"3261a2e43fdee5f32f534d741d8bf4dc"},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.ae0c5bea099c655c1d56.js",revision:"e19467d9b281b43513d019833ef4ce49"},{url:"/beta/apps/catalog/js/lib~App~cf15acf0.381f2d9d00108c2dcb95.js",revision:"b55888c594168f9942f92bcc261804e0"},{url:"/beta/apps/catalog/js/lib~App~f373cf78.7b8c12148b8d6c9a14a9.js",revision:"0045c9998a77edb311bb60c57b5bea5f"},{url:"/beta/apps/catalog/js/lib~App~f79053e5.dc7cddae979f6df83aeb.js",revision:"6a5e9a1bc27e40bb41bc62624f80d078"},{url:"/beta/apps/catalog/js/lib~add-portfolio~approval-request~copy-portfolio-item-modal~253ae210.38f2f742e428e9eedbbe.js",revision:"588a75d2e9780aeebe59865c0a09b803"},{url:"/beta/apps/catalog/js/lib~add-products-to-portfolio~platform-templates~platforms~portfolios~31ecd969.dcf373f160306f66daba.js",revision:"82a0fdb36547e522f8257d7eb774759a"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~76d93fce.863fcbd1590363995ebc.js",revision:"54469cdb0a1a602a2a7eb98db3b58eec"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~77bf5e45.e98ddf5de0d1cc53c6a6.js",revision:"4cb6f01446d8461c5143814ac51ec623"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~b09b0461.e49f0ecea155c3795c42.js",revision:"2371f975bf7c5288ba926733f2c3365a"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~cbe9451d.66e4bd16b46f003dfb56.js",revision:"6731bc1dae2a4f2a3b5bfc18749c1bef"},{url:"/beta/apps/catalog/js/lib~approval-request~portfolio-item-detail~807bc7cd.0d9a3c6f3518bceab92c.js",revision:"55f2d28c828f89a5d07398f135dc3889"},{url:"/beta/apps/catalog/js/lib~order-details~service-offering-detail~4bec7f87.d2a0dae6723859c973b9.js",revision:"685f82d4072bc65dba2c3d3fd79470be"},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.07cb2d9e729cb92cabca.js",revision:"a738c8f0bb560462b7928f555fcd5113"},{url:"/beta/apps/catalog/js/lib~order-processes~orders~platform~platforms~portfolio~portfolios~products~31ecd969.2aa1d011a858b9618007.js",revision:"bfac95b51291d328c189feafe2c63f23"},{url:"/beta/apps/catalog/js/lib~platform~platforms~portfolio~products~31ecd969.6b28edb4325b9d7d546b.js",revision:"e3fce93fca84c8eec2047c7b3c5ee41f"},{url:"/beta/apps/catalog/js/order-details~31ecd969.b42ab128f805d880abd8.js",revision:"2c658f0664ce4b99ac91e82e6ec654b5"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.c97ef8fe7a809a5919ff.js",revision:"b455f25a20cc287c29e6cf1dfa1029db"},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.f97f49c3c5b4e38eea68.js",revision:"814ddb31c378aaabd04d93c04d6f65dd"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.5a9433441f98b2d185f1.js",revision:"e47772bb38c6f7ca6965f90def251aa2"},{url:"/beta/apps/catalog/js/order-processes~0f485567.7aa01898ba28e53a7563.js",revision:"1c91b3784558e100a5cb5897927981e2"},{url:"/beta/apps/catalog/js/order-processes~31ecd969.040436fd23bfe4471f22.js",revision:"4d6bf6bc3876f559a70e0d8eae3e1e1e"},{url:"/beta/apps/catalog/js/order-processes~5a11b65b.fcdf970ab6293097639d.js",revision:"c6357e2accc69d2d8aeb7294db128828"},{url:"/beta/apps/catalog/js/order-processes~76d93fce.f70c0da9c6f5b3e6f6ef.js",revision:"101c28bc05f42a36d4defa821af1c339"},{url:"/beta/apps/catalog/js/order-processes~b3141737.98ff32736c8d7241472b.js",revision:"5a6c7b39e73c7f9c6e506c8aeee6b2ba"},{url:"/beta/apps/catalog/js/orders~0f485567.4737571dda6d263ac8fa.js",revision:"4f076b0950c97e7a0199d264d1cda4a8"},{url:"/beta/apps/catalog/js/orders~76d93fce.6fc8953b412aa3f2024a.js",revision:"383157638586b59956b6c70960aec0fb"},{url:"/beta/apps/catalog/js/orders~91f4305a.2e91fb78b76c2fbccace.js",revision:"645cd61ed60ad9a3549acc875266f82a"},{url:"/beta/apps/catalog/js/orders~b3141737.46bb99520c3d684c1e7f.js",revision:"230135daa5880b92759d838c0cb38078"},{url:"/beta/apps/catalog/js/orders~c895ce40.e951585cf650485768b3.js",revision:"69e490c2d20b22954bbc3fa33a3a3fe1"},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.4426d7b3d1c7629dbea5.js",revision:"4ed514dafd709f82bf893fd23fd08ecc"},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.2d1ddee376eeeb83c89e.js",revision:"aba54cf656aaa73256b64772a61998fa"},{url:"/beta/apps/catalog/js/platforms~f71cff67.fe1171e3b245c819caed.js",revision:"6a5bb87e29da9f347aa55805fba7f02b"},{url:"/beta/apps/catalog/js/platform~31ecd969.b5bb6c9b0c1b4c604419.js",revision:"4aaf72ecd43ec596783f391f05c9b937"},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.ffe93d7cd919d367c163.js",revision:"f17aa3659fe73c4a2378d1da3e8a433f"},{url:"/beta/apps/catalog/js/portfolios~0f485567.a226cf63ef0507b8d3b2.js",revision:"f54a9a8bace06cee3e254d19c22f6b91"},{url:"/beta/apps/catalog/js/portfolios~3d9b8e9e.b94f5e23e82090e6d0d5.js",revision:"089afd2a353bc5a4401971d961aec91c"},{url:"/beta/apps/catalog/js/portfolios~b3141737.dbe2770499703213d854.js",revision:"02176567368b88b3df60bb7bcd985e5b"},{url:"/beta/apps/catalog/js/portfolios~c895ce40.6fd1b85b4d4af67bd5a1.js",revision:"2bf3f3b865346c12b0cfecb64e0ce9ee"},{url:"/beta/apps/catalog/js/portfolio~31ecd969.3c5a9938627928175b07.js",revision:"28444b5281a08f4e4f3327e126c73473"},{url:"/beta/apps/catalog/js/products~31ecd969.3ca2cf5f6550ff9e3223.js",revision:"5ed3c9eaeb99faa417371439e53950ac"},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.094c4baaf34fd410c4aa.js",revision:"dd1c474811c766c0358fd870e7f28403"},{url:"/beta/apps/catalog/js/service-offering-detail~5a11b65b.86d78f168c592b811bf1.js",revision:"cb81978038694365fa10ee1264492143"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.7e1094bc5f4fbf5064c6.js",revision:"3062b0d12906f28cf3c91b9c92db311a"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.76ddb4ae9f4644ad0add.js",revision:"3d722f59bc96195fd1c0006cd011ccdf"},{url:"/beta/apps/catalog/js/survey-editor~cacb8e57.a041c2401882fb5d8531.js",revision:"5f1f9afff417df9ffa48384b305610df"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
