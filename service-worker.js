if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return c[a]||(e=new Promise(async e=>{if("document"in self){const c=document.createElement("script");c.src=a,document.head.appendChild(c),c.onload=e}else importScripts(a),e()})),e.then(()=>{if(!c[a])throw new Error(`Module ${a} didn’t register its module`);return c[a]})},e=(e,c)=>{Promise.all(e.map(a)).then(a=>c(1===a.length?a[0]:a))},c={require:Promise.resolve(e)};self.define=(e,s,d)=>{c[e]||(c[e]=Promise.resolve().then(()=>{let c={};const f={uri:location.origin+e.slice(1)};return Promise.all(s.map(e=>{switch(e){case"exports":return c;case"module":return f;default:return a(e)}})).then(a=>{const e=d(...a);return c.default||(c.default=e),c})}))}}define("./service-worker.js",["./workbox-a444cf8b"],(function(a){"use strict";self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/apps/catalog/fonts/platform-amazon.png",revision:"8b190df931e2054ee7d5a0c5101b5308"},{url:"/apps/catalog/fonts/platform-default.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/apps/catalog/fonts/platform-openshift.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/apps/catalog/fonts/platform-tower.png",revision:"01c109fb5977d84edfbe585276bf9cad"},{url:"/apps/catalog/index.html",revision:"0713512e69ded057cc04a853c720990c"},{url:"/apps/catalog/js/15.76e1d8f4cb76b9c21767.js",revision:"2b6b1b265d97dc521b46750e317933ed"},{url:"/apps/catalog/js/61.879ded9d4ae49e1a0733.js",revision:"97d2e1ced9736b78b3682bdbcf582888"},{url:"/apps/catalog/js/App.6eba73b9bbe81f3f81aa.js",revision:"42d229411a72dab8cfa1d58f6e08477f"},{url:"/apps/catalog/js/add-portfolio~31ecd969.13a855fac08ae52d81a2.js",revision:"5c880fae858abc74d80e0670cb72f258"},{url:"/apps/catalog/js/add-products-to-portfolio~31ecd969.adcff58ad8e6960d1f29.js",revision:"1534bb02ebecbdaad44196a395802d26"},{url:"/apps/catalog/js/approval-request~ed7808ee.d8f1ba063282feb88f48.js",revision:"c21b7930e35c356ffc9797f01911bae4"},{url:"/apps/catalog/js/copy-portfolio-item-modal~31ecd969.b63c8ad6853f9f642d44.js",revision:"8e10a96dc7125bf79fabf3bdb42aaa1c"},{url:"/apps/catalog/js/edit-approval-workflow~31ecd969.473d0eccc4d0b3a95b8e.js",revision:"02b0cb1073f56d53a0245937c7c273fc"},{url:"/apps/catalog/js/error-page~31ecd969.c497babeacd3f234d136.js",revision:"5aa3c112b0394ff34e58c27a7e2c5434"},{url:"/apps/catalog/js/framework~f9ca8911.765838ce2c036055a872.js",revision:"121753dc2b75c880c706d833f0f74a1f"},{url:"/apps/catalog/js/lib~App~06837ae4.88ce2c1408b58e8d0f50.js",revision:"9a953088a353c20e74d66c87f59cdc09"},{url:"/apps/catalog/js/lib~App~0f485567.5ceec39cf8c9d4aa270e.js",revision:"e0ba4ee383f0ad7a921aced61159d3f2"},{url:"/apps/catalog/js/lib~App~1c3a2c3f.2b9b833262754f21cce9.js",revision:"190cec8e3c066d4a7e3f07e1381d3aed"},{url:"/apps/catalog/js/lib~App~1f20a385.a1f6f372fb020434b912.js",revision:"75f65abf5ae8def80061613491eba7a8"},{url:"/apps/catalog/js/lib~App~2a42e354.c42cea3b2748ceb6c659.js",revision:"b6935edf25db2b596a5af3c7999d09a4"},{url:"/apps/catalog/js/lib~App~365b37ca.8f7aed85db3db62c1bbd.js",revision:"6384202211b1ad94ab550636050cb984"},{url:"/apps/catalog/js/lib~App~47974c6d.5015bb0ccb4f7a877e80.js",revision:"c427c5dcf33d7e518e3c95b881b2e8e3"},{url:"/apps/catalog/js/lib~App~5650b515.4a55a25a88f068f1632f.js",revision:"999947d9633ff4fddfd4d035c786d16b"},{url:"/apps/catalog/js/lib~App~678f84af.654f2b38063385cb14b2.js",revision:"3583d3842bec55e3a38f286e68bd8064"},{url:"/apps/catalog/js/lib~App~77bf5e45.1a98d555ce134c6c5d1d.js",revision:"56f5e78c9575b49da1ca0435328972c6"},{url:"/apps/catalog/js/lib~App~8b4a6063.952a28f190d2e84154e4.js",revision:"5851a339701b8d0f0829286e93133e30"},{url:"/apps/catalog/js/lib~App~b58f7129.d7fdb8eb87cf6285b975.js",revision:"1df619d7b6d878c5d1cc39c00568f000"},{url:"/apps/catalog/js/lib~App~cfbf0a2e.530a78c8490362318af4.js",revision:"507257db0b16baec67239afd71ad653e"},{url:"/apps/catalog/js/lib~App~f9ca8911.c1056ec3bd80f636edf0.js",revision:"d4f79ffb20ce87e6b874d18ecb58f7a5"},{url:"/apps/catalog/js/lib~add-portfolio~add-products-to-portfolio~copy-portfolio-item-modal~edit-approval-workflow~order-m~36ed02ea.97bdcb4593bab71815a5.js",revision:"499bc2ee98d7b823a188cd34b171d583"},{url:"/apps/catalog/js/lib~add-portfolio~copy-portfolio-item-modal~edit-approval-workflow~order-modal~portfolio-item-detail~55ab1030.5cd8e0e0c85eac5fc26d.js",revision:"7ef209edb2072e4dd3a94e5719dff3e4"},{url:"/apps/catalog/js/lib~add-portfolio~copy-portfolio-item-modal~portfolio~portfolios~products~remove-portfolio~share-por~a2fe5007.f80b45ab5f7cb7208931.js",revision:"0792b3fdee0110b5dc1e79068ec42aec"},{url:"/apps/catalog/js/lib~order-details~service-offering-detail~4bec7f87.b9110d3d7b672b0ac10a.js",revision:"4df6d80b1ae61220fd3a247d62d85373"},{url:"/apps/catalog/js/lib~orders~platform~platforms~portfolio~portfolios~products~31ecd969.f01620b0e06179fccb3a.js",revision:"e2fdd0880b13964522060fbd995843cb"},{url:"/apps/catalog/js/order-details~a7f15e37.7d5db7d468e7218970d5.js",revision:"a99eb8a0ac1d98c9de443ee1c23f0316"},{url:"/apps/catalog/js/order-detail~31ecd969.03e65f24f82736524757.js",revision:"db54dedb2b5a41a2d74db24de3ffad87"},{url:"/apps/catalog/js/order-lifecycle~aa3a0269.4bfda0b37052400d0af0.js",revision:"128a967cc792b207606548a0203aee9a"},{url:"/apps/catalog/js/order-modal~31ecd969.296141583fb753e61872.js",revision:"9e3271be9e50042907fcfa09df66bc1b"},{url:"/apps/catalog/js/orders~31ecd969.229195051dea03a8b47d.js",revision:"8fb3c1564f82f13ef53a003ba1b4986c"},{url:"/apps/catalog/js/patternfly~33177f80.30687ecfb1394bdc01d7.js",revision:"3e10c1968f1b550854724887778dab1f"},{url:"/apps/catalog/js/patternfly~56d643cd.40945f2265b2f4f1de05.js",revision:"b578c1d208ea927d5c8f311707fdb20b"},{url:"/apps/catalog/js/patternfly~60fa4638.6a55c5162e593c510eca.js",revision:"05f9833bd9415aaa943d551af988d432"},{url:"/apps/catalog/js/patternfly~65bda0ae.e5d98033512d74e171b6.js",revision:"ff07b6a93e92d6695e19c7ed62c2f945"},{url:"/apps/catalog/js/patternfly~7903dfe8.7811a40d510e3642d15f.js",revision:"5389bb757f545126e0d8a78c7f30da95"},{url:"/apps/catalog/js/patternfly~99bd0af1.423bf7be0460fc5afc29.js",revision:"7fda21e324400b92803b6bcc980fcdb5"},{url:"/apps/catalog/js/patternfly~a8298385.a432f09db1a9f4336de0.js",revision:"87034f225354e50e02c44886c3b79889"},{url:"/apps/catalog/js/patternfly~b2e0d743.9993fce802f570e43834.js",revision:"b6a32d7502f70fcd7efd2630d1806f18"},{url:"/apps/catalog/js/patternfly~bc848bd0.ca9fd6c80c7be17f92ac.js",revision:"9ed34b8aa5c663abbc9c09bca34449c7"},{url:"/apps/catalog/js/patternfly~bea82045.f296e114bffeb0c06fcf.js",revision:"bfdae86e9e28a5ae8eb511aa8a341f6b"},{url:"/apps/catalog/js/patternfly~c058f71c.f4a044c6f0199f9693f4.js",revision:"22ad607456dd099c5146fe2b8afa8b30"},{url:"/apps/catalog/js/patternfly~c1b9a526.f860ed7e03b72834d6cd.js",revision:"ffc016ea441cd0f2852daabcb4a197c8"},{url:"/apps/catalog/js/patternfly~cbe9451d.83936b5a2788841d8ff1.js",revision:"9ec9ccb1d3e17c8fe5289c85abdbb2f0"},{url:"/apps/catalog/js/patternfly~d72c0824.1db1f449b1519190061f.js",revision:"430ab882eba26055acdeca61fd42cb78"},{url:"/apps/catalog/js/patternfly~de8e649c.3c7a2b5d1e4cf33a131d.js",revision:"1c9167d14dbf0ccb1860d10a756725d1"},{url:"/apps/catalog/js/platform-inventories~31ecd969.5f80d3d6eb2aa9f79671.js",revision:"4463cf851cbed396ffb3c7388b735ee7"},{url:"/apps/catalog/js/platform-templates~31ecd969.184766bcc0a9d6485d0b.js",revision:"8f7ff2c6d4c28e8ab40777af3170ebc8"},{url:"/apps/catalog/js/platforms~31ecd969.ddaddc484ad4c326a868.js",revision:"8e01e23aa98645664ea85f9cb449ce37"},{url:"/apps/catalog/js/platform~91f4305a.8a1b8db2a62cab1e1403.js",revision:"4a371d7e735a8e79e4953ad09438d255"},{url:"/apps/catalog/js/portfolio-item-detail~31ecd969.b21cccae6c3ce5ec37ed.js",revision:"61576f3b6e8f93881de8f40e0af7b04e"},{url:"/apps/catalog/js/portfolios~31ecd969.391d2f43dab292895412.js",revision:"c8f67e641863058ee03fa992942e665d"},{url:"/apps/catalog/js/portfolio~91f4305a.0a2129f7229d56d64485.js",revision:"7aa86cc65ccd11ea81204c8c79697590"},{url:"/apps/catalog/js/products~31ecd969.cfe0b1ea5e9bdd2aad83.js",revision:"6017c885ce4a104d9ecf8567b10ac8d1"},{url:"/apps/catalog/js/remove-portfolio~31ecd969.6585c941b75e77060759.js",revision:"6e64703d5a75d1586c4cf7820f047356"},{url:"/apps/catalog/js/service-offering-detail~31ecd969.c1ea1647a3de8e01627f.js",revision:"dd4001a55a1e75e175346cdf5ac675ec"},{url:"/apps/catalog/js/share-portfolio~31ecd969.faef7e4f480d9c9a79e1.js",revision:"9141722c8bd42525157a9a42ed83c2ae"},{url:"/apps/catalog/js/survey-editor~31ecd969.190a08eb52c8588fba40.js",revision:"e064ec7ef88a2669b3e82533bb863ef2"},{url:"/apps/catalog/js/survey-editor~f5f9d3de.c5c6f96fde7a8d5e9230.js",revision:"07cb79460496903e842ecd0835d65d4b"}],{})}));
