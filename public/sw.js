if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const d=e=>i(e,n),o={module:{uri:n},exports:r,require:d};a[n]=Promise.all(s.map((e=>o[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Photo.png",revision:"0f37a9ff8e61e0852436b3a8f2ac7319"},{url:"/_next/static/4pH04aRHDJHLoc0gv7Jus/_buildManifest.js",revision:"6310079bf1ae7bebeb6a2135896e4564"},{url:"/_next/static/4pH04aRHDJHLoc0gv7Jus/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1326-0edaa9d24cc7cee0.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/1695-4a83b5f118e4ee80.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/211-a230e639c513dbbd.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/3494-0a98d0a4fffde464.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/4473.74723ce9d0fbd2f1.js",revision:"74723ce9d0fbd2f1"},{url:"/_next/static/chunks/4838-a4ee9684ce1710ed.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/507-ef17c2fb1409660f.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/5311-c0795fd1b6952311.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/5328-24984ae822a04132.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/570.039924bc63e27b93.js",revision:"039924bc63e27b93"},{url:"/_next/static/chunks/6157-71bca7314bb3dc9e.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/6475-f7219e17efec34de.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/6631-384ff69bd10a5356.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/6997-0bfa984f2e14c8f2.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/7007-02ff97e64fcb6c71.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/7317-18b1ebe281e158bc.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/7527-c47c3b8dc4ec2bf1.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/7754-12fa65b3ec26236d.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/8038-57d1959c216e0a20.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/8140-f56d835e18a22348.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/8829-aef81307b3b6bb0b.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/8908-50d1a269ccc6e878.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/9133-9f39fdc420f6306c.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/9205.43957b017283ce6e.js",revision:"43957b017283ce6e"},{url:"/_next/static/chunks/9283-512032bd02d4508c.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/94ca1967-f38a6bf300f4f6c5.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/964ecbae-71fdd819b00ee274.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/9b0008ae-9ee03501a0e1451b.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/ad2866b8-d9a081783e4ea5b3.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/_not-found/page-b7f2e8b715130730.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/chat/page-0172dd265039bc4b.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/dashboard/layout-aa9feff9551ffaba.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/dashboard/notes/page-ae1e92968ff4be55.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/dashboard/page-63f4ddc1249e92dd.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/dashboard/pdf/page-033b36bc67097d69.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/dashboard/profile/page-6e89be73901741b3.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/dashboard/settings/page-9bcf6f07b194e1e6.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/layout-290a9b73e3f5d2b9.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/note/%5Bid%5D/layout-74b566dbb96e5251.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/note/%5Bid%5D/page-54eaf4974ebf66a5.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/page-6ed3b1f740145c41.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/pdfnote/%5Bid%5D/layout-b4e28c94b6d6d669.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/pdfnote/%5Bid%5D/page-a2c916d3779b03b3.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/pdftest/%5Bid%5D/layout-89420430b8cd21a0.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/pdftest/%5Bid%5D/page-12ced66f14bbfffe.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/app/test/page-aa5a5997667c648c.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/e37a0b60-57eb15bde63b67d7.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/fd9d1056-f03758da1054d506.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/main-2a4789b26642a26c.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/main-app-057c5b4e2e63078a.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/pages/_app-3c9ca398d360b709.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/pages/_error-cf5ca766ac8f493f.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-af20dbfebe19e368.js",revision:"4pH04aRHDJHLoc0gv7Jus"},{url:"/_next/static/css/bc55bbbba71cc233.css",revision:"bc55bbbba71cc233"},{url:"/_next/static/css/c0b1b44faca4808c.css",revision:"c0b1b44faca4808c"},{url:"/_next/static/css/db8e41c98d5b4a16.css",revision:"db8e41c98d5b4a16"},{url:"/_next/static/media/Photo.be863c10.png",revision:"0f37a9ff8e61e0852436b3a8f2ac7319"},{url:"/_next/static/media/Rubik-Regular.63d1603c.woff2",revision:"63d1603c"},{url:"/_next/static/media/Rubik-Regular.aa78c358.woff",revision:"aa78c358"},{url:"/_next/static/media/Virgil.ef46db37.woff2",revision:"ef46db37"},{url:"/_next/static/media/acolyte.f0dfd803.png",revision:"20a48e9a3dc3065aab5a66a286f3507b"},{url:"/_next/static/media/acolytechat.a14138fb.svg",revision:"3b5fef4f6ed01f170b22a3085bcaf1ea"},{url:"/_next/static/media/acolytelogo.ede42628.svg",revision:"999db4f594fead96aa81ba6069ece924"},{url:"/_next/static/media/brushmenu.c21143e2.svg",revision:"c2d1fa42d598b654e994500d8a422678"},{url:"/_next/static/media/calendar.931f9f51.svg",revision:"9779d917aa1e03c7a9879bbd21666dfa"},{url:"/_next/static/media/caraouselview.fbe37a57.svg",revision:"03f16eed3202cd99c6c5fa459814302f"},{url:"/_next/static/media/chat.4438cde9.svg",revision:"e2c555de01b5260df5630650355c688d"},{url:"/_next/static/media/chat.c45658ba.svg",revision:"32a26b20148812fe03a27fd820666003"},{url:"/_next/static/media/community.ad76f329.svg",revision:"4f5de93a7568cf439cf0285740735673"},{url:"/_next/static/media/darkmode.8a675928.svg",revision:"cf699962fde40b8cf494f949341bd767"},{url:"/_next/static/media/darkmodebg.4fb2a525.svg",revision:"f788f79301f4aaa9675bcc6381f6bcde"},{url:"/_next/static/media/doublepageview.6eeb03af.svg",revision:"3408b64dc57b55f80a9e4e87638b39b0"},{url:"/_next/static/media/editicon.3e270e1f.svg",revision:"91de917ef53301a6899d210d7b1f1680"},{url:"/_next/static/media/ef46db3751d8e999-s.p.woff",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/_next/static/media/emojis.c173109d.svg",revision:"bcec7fc92f9dbd51e7caaf610df22a27"},{url:"/_next/static/media/erasertool.40ec5c06.svg",revision:"77999c40e9f75841674fc87beca66005"},{url:"/_next/static/media/expand.f0651274.svg",revision:"3b48e063747d35a6b5d29373f49db224"},{url:"/_next/static/media/folder.e8634c5f.svg",revision:"ebb5d3eb85227f0bfad7fd760c3689c1"},{url:"/_next/static/media/home.76e35773.svg",revision:"97aab760545fedb98388d3954e4abc63"},{url:"/_next/static/media/home.bc5d4ef0.svg",revision:"4002112f3c2cce7352d262183d475e17"},{url:"/_next/static/media/homesidebar.f6052f00.svg",revision:"58cd675378598a219a2040fbb8a3f2d5"},{url:"/_next/static/media/kebabmenu.f50b2bc9.svg",revision:"f796d5ca6557343b6b9e9746a1e68b24"},{url:"/_next/static/media/lightmode.d3628403.svg",revision:"2d51cc8390dc68d133b9fd9edefb56f9"},{url:"/_next/static/media/lightmodebg.4bab4515.svg",revision:"b040ac9fc97f79e406493843eac59a81"},{url:"/_next/static/media/markertool.18de45f8.svg",revision:"322e1710599d54eb71928a8b649946d3"},{url:"/_next/static/media/mynotes.e6258943.svg",revision:"97ef1e8d350e860597dae2097f10131f"},{url:"/_next/static/media/mypdf.c3b71c7d.svg",revision:"1b5e776b488b2f4006847d4f65845589"},{url:"/_next/static/media/newfolder.f119ed2b.svg",revision:"75319b7cb6a4d352fca40bcf49460ac6"},{url:"/_next/static/media/note.4d2995de.svg",revision:"2d17c99e35bd997fd40222d618ee0e5a"},{url:"/_next/static/media/notecreate.2c06a339.svg",revision:"545e3b4fae491401f2a7b43eb5c2b24a"},{url:"/_next/static/media/noteplain.aa308301.svg",revision:"18dff6a9340653635ec6615b471159b6"},{url:"/_next/static/media/notes.0261c6ae.svg",revision:"87234c32fadd6dc76c19ee0f1d2b9055"},{url:"/_next/static/media/notification.8a22f720.svg",revision:"920b1fdf7c7aceeca3f30131a10ad669"},{url:"/_next/static/media/notifications.fb6064d5.svg",revision:"74019defe2d260f8af5e0e977992d531"},{url:"/_next/static/media/paperclip.3b689dae.svg",revision:"13632f15d6728be577c0aaa48d0c888c"},{url:"/_next/static/media/pdf-file.c7b16d1f.svg",revision:"e840a50f79117afa5a425ce53ac00048"},{url:"/_next/static/media/pdf.63778558.svg",revision:"01c7b3905013824fdf3d9dd2db313439"},{url:"/_next/static/media/pdfsearch.52d6e5fc.svg",revision:"30980d6d58cc9d1e991e660a9c52800b"},{url:"/_next/static/media/pdfviewer.b8990b86.svg",revision:"08fd6859e038fe29c70a4b492652d398"},{url:"/_next/static/media/pen.2312cefe.svg",revision:"5a97d6d1aa6094703603d96fc749b4f4"},{url:"/_next/static/media/penciltool.b3ed2c74.svg",revision:"46892b2907cdde3b03f744d52268f1d3"},{url:"/_next/static/media/read.a05a82cc.svg",revision:"01db1fad8430e859858c76be45d99d01"},{url:"/_next/static/media/redo.39351fb0.svg",revision:"dd82481d4c8a8e229b83ade1eeeaef66"},{url:"/_next/static/media/search.38af4ee3.svg",revision:"0b13d4b066ea10323335e82c0589dcb6"},{url:"/_next/static/media/send.238f153d.svg",revision:"ce5252a70b1a24ac5619f81cc512de34"},{url:"/_next/static/media/shapestool.e95c11ae.svg",revision:"9de925f915230130ee9f58d15e5e0780"},{url:"/_next/static/media/singlepageview.15fd79ad.svg",revision:"420f09b44715adbd3dd7ec1f3261aae8"},{url:"/_next/static/media/stroke.b409e1cc.svg",revision:"2a752f515eb5bf7191c872ba682a98ef"},{url:"/_next/static/media/subjectclose.15a4fe25.svg",revision:"1ea29e3a0892bd2e4d4131f099d94551"},{url:"/_next/static/media/subjectexpand.144b7d22.svg",revision:"25afbd3f12d06cde75124ced4fe12033"},{url:"/_next/static/media/subjects.0f9c8596.svg",revision:"d06c6edbd8705e264fd752d229d5f2ae"},{url:"/_next/static/media/text.19aec9bf.svg",revision:"5f4eaf52db03b77b69b1a000fab897c8"},{url:"/_next/static/media/textquestion.974f457d.svg",revision:"1b4fc0fdc50ac2a8fdc13febd8a19221"},{url:"/_next/static/media/toolbarmenu.98d73515.svg",revision:"97e49f46d8a07e3c1a1b88be6a803f03"},{url:"/_next/static/media/undo.fc924896.svg",revision:"52bd7bc749a2a42c0db2e5e08bfcdcdc"},{url:"/_next/static/media/write.18d3f733.svg",revision:"98be9fdac215162e1985a167b348d166"},{url:"/acolyte.png",revision:"20a48e9a3dc3065aab5a66a286f3507b"},{url:"/acolytechat.svg",revision:"3b5fef4f6ed01f170b22a3085bcaf1ea"},{url:"/acolytelogo.svg",revision:"999db4f594fead96aa81ba6069ece924"},{url:"/addtext.svg",revision:"61f1f7a3bce0e92804f490c03c3cce72"},{url:"/android/android-launchericon-144-144.png",revision:"27ce7dca72a0f60d787a6932f14bc678"},{url:"/android/android-launchericon-192-192.png",revision:"2b9f939cd05acd0b8b74096b0258fc96"},{url:"/android/android-launchericon-48-48.png",revision:"24d3e41359b4d4eb0edd5204345107e6"},{url:"/android/android-launchericon-512-512.png",revision:"f305c3d45b309d8b8dbe21a1564a95ac"},{url:"/android/android-launchericon-72-72.png",revision:"6e01af0a7dc6293c3295236c9d4e1eeb"},{url:"/android/android-launchericon-96-96.png",revision:"ce27002c1b9e50c1f86c96bc30d002f5"},{url:"/annotations.svg",revision:"f8573f70e6732816923dabbdbd1bfd66"},{url:"/brushmenu.svg",revision:"c2d1fa42d598b654e994500d8a422678"},{url:"/calendar.svg",revision:"9779d917aa1e03c7a9879bbd21666dfa"},{url:"/caraouselview.svg",revision:"03f16eed3202cd99c6c5fa459814302f"},{url:"/chat.svg",revision:"e2c555de01b5260df5630650355c688d"},{url:"/community.svg",revision:"4f5de93a7568cf439cf0285740735673"},{url:"/currentknow.svg",revision:"7008d92b0bda51614d35a36f4d800e92"},{url:"/darkmode.svg",revision:"cf699962fde40b8cf494f949341bd767"},{url:"/darkmodebg.svg",revision:"f788f79301f4aaa9675bcc6381f6bcde"},{url:"/doublepageview.svg",revision:"3408b64dc57b55f80a9e4e87638b39b0"},{url:"/editicon.svg",revision:"91de917ef53301a6899d210d7b1f1680"},{url:"/emojis.svg",revision:"bcec7fc92f9dbd51e7caaf610df22a27"},{url:"/eraser.svg",revision:"1af882e534fc1a5b50d3c3dc930d4929"},{url:"/erasertool.svg",revision:"77999c40e9f75841674fc87beca66005"},{url:"/expand.svg",revision:"3b48e063747d35a6b5d29373f49db224"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/folder.svg",revision:"ebb5d3eb85227f0bfad7fd760c3689c1"},{url:"/fonts/Rubik-Regular.woff",revision:"8d75163009487be78e780437976255b6"},{url:"/fonts/Rubik-Regular.woff2",revision:"975638e9ebdf661bc47be69ca06eb877"},{url:"/frame.png",revision:"54c21dec74697456c7213c0b7eb5fb9d"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/goal.svg",revision:"5d0a003e15c1fb35efca3f82d8a4dfae"},{url:"/home.svg",revision:"97aab760545fedb98388d3954e4abc63"},{url:"/homesidebar.svg",revision:"58cd675378598a219a2040fbb8a3f2d5"},{url:"/images.svg",revision:"e48c2541b62f8f9bb3f452797227d876"},{url:"/ios/100.png",revision:"1ea3e4fa1d140320bd171727fc88fd9d"},{url:"/ios/1024.png",revision:"0b96abfad9a74e598dad4e94c8ed7bed"},{url:"/ios/114.png",revision:"6468ad78636a460bb57eef9c3ba673ee"},{url:"/ios/120.png",revision:"881e939cdfd25668ceedb033daa9808c"},{url:"/ios/128.png",revision:"5873a93e017fdae19a14ac3d5caa0981"},{url:"/ios/144.png",revision:"27ce7dca72a0f60d787a6932f14bc678"},{url:"/ios/152.png",revision:"b04b97b88b9bceb187505e410904413c"},{url:"/ios/16.png",revision:"f1dac52ef8a0d264c1135037d56f9df3"},{url:"/ios/167.png",revision:"748e93fe82df2c49757f00327d612634"},{url:"/ios/180.png",revision:"29385c79e2be259f406cc577f01f33d4"},{url:"/ios/192.png",revision:"2b9f939cd05acd0b8b74096b0258fc96"},{url:"/ios/20.png",revision:"a76df6b700b741402454a323362dbca2"},{url:"/ios/256.png",revision:"fa0dfb5c1484d4a17741b23ca4a56502"},{url:"/ios/29.png",revision:"7a17f017e9e8e4470b30e052d74d5a9b"},{url:"/ios/32.png",revision:"db00182b3f10a1160be6301b3fa212a6"},{url:"/ios/40.png",revision:"a7274311ae1cbc97c7d7b40ec1db9716"},{url:"/ios/50.png",revision:"f15120685eca316c982b6254e37493e5"},{url:"/ios/512.png",revision:"f305c3d45b309d8b8dbe21a1564a95ac"},{url:"/ios/57.png",revision:"6e8e95b65c4286dbda5ea19be9a11a4d"},{url:"/ios/58.png",revision:"437b515d29efb6a589da933ce831d1b3"},{url:"/ios/60.png",revision:"87700a43afeed4d39edd5726d64b8345"},{url:"/ios/64.png",revision:"5d08ada836e42c8dfc35ec2052debb12"},{url:"/ios/72.png",revision:"6e01af0a7dc6293c3295236c9d4e1eeb"},{url:"/ios/76.png",revision:"47abf04f39dc13b75686acb0f7b11747"},{url:"/ios/80.png",revision:"cb1b7f08759678af59111f5485351518"},{url:"/ios/87.png",revision:"e0be6879d96d95bb4a118f23c3caa685"},{url:"/kebabmenu.svg",revision:"f796d5ca6557343b6b9e9746a1e68b24"},{url:"/knowledge.svg",revision:"961847586f16868a5b80359348b68c1f"},{url:"/lightmode.svg",revision:"2d51cc8390dc68d133b9fd9edefb56f9"},{url:"/lightmodebg.svg",revision:"b040ac9fc97f79e406493843eac59a81"},{url:"/link.svg",revision:"114e76e23f7b7aaa9f3a966a96ba1968"},{url:"/loop.svg",revision:"3d8c8298a33d5fb6afcd96aace065dcf"},{url:"/manifest.json",revision:"f08ad109a5607eba6cf034bbad16e01d"},{url:"/marker.png",revision:"f42ce25399b5813033dde472b2016e9c"},{url:"/marker.svg",revision:"b8182ec347551a58a4edca15026a1f14"},{url:"/markertool.svg",revision:"322e1710599d54eb71928a8b649946d3"},{url:"/moretools.svg",revision:"ec7ef4236288d450edbd5db8b6b1263a"},{url:"/mynotes.svg",revision:"97ef1e8d350e860597dae2097f10131f"},{url:"/mypdf.svg",revision:"1b5e776b488b2f4006847d4f65845589"},{url:"/nav/chat.svg",revision:"32a26b20148812fe03a27fd820666003"},{url:"/nav/home.svg",revision:"4002112f3c2cce7352d262183d475e17"},{url:"/nav/note.svg",revision:"2d17c99e35bd997fd40222d618ee0e5a"},{url:"/nav/pdf.svg",revision:"01c7b3905013824fdf3d9dd2db313439"},{url:"/newfolder.svg",revision:"75319b7cb6a4d352fca40bcf49460ac6"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/notecreate.svg",revision:"545e3b4fae491401f2a7b43eb5c2b24a"},{url:"/noteplain.svg",revision:"18dff6a9340653635ec6615b471159b6"},{url:"/notes.svg",revision:"87234c32fadd6dc76c19ee0f1d2b9055"},{url:"/notification.svg",revision:"920b1fdf7c7aceeca3f30131a10ad669"},{url:"/notifications.svg",revision:"74019defe2d260f8af5e0e977992d531"},{url:"/paperclip.svg",revision:"13632f15d6728be577c0aaa48d0c888c"},{url:"/pdf-file.svg",revision:"e840a50f79117afa5a425ce53ac00048"},{url:"/pdfsearch.svg",revision:"30980d6d58cc9d1e991e660a9c52800b"},{url:"/pdfviewer.svg",revision:"08fd6859e038fe29c70a4b492652d398"},{url:"/pen.svg",revision:"5a97d6d1aa6094703603d96fc749b4f4"},{url:"/penciltool.svg",revision:"46892b2907cdde3b03f744d52268f1d3"},{url:"/pentool.svg",revision:"d8ab531ff082aa88c38803b98df4d419"},{url:"/read.svg",revision:"01db1fad8430e859858c76be45d99d01"},{url:"/redo.svg",revision:"dd82481d4c8a8e229b83ade1eeeaef66"},{url:"/search.svg",revision:"0b13d4b066ea10323335e82c0589dcb6"},{url:"/send.svg",revision:"ce5252a70b1a24ac5619f81cc512de34"},{url:"/shapes.svg",revision:"d020a910bc027e7fbb8b86b7dbd3d055"},{url:"/shapestool.svg",revision:"9de925f915230130ee9f58d15e5e0780"},{url:"/singlepage.svg",revision:"bb9e8cca133cc3c0909fcb9a77625aef"},{url:"/singlepageview.svg",revision:"420f09b44715adbd3dd7ec1f3261aae8"},{url:"/stroke.svg",revision:"2a752f515eb5bf7191c872ba682a98ef"},{url:"/subjectclose.svg",revision:"1ea29e3a0892bd2e4d4131f099d94551"},{url:"/subjectexpand.svg",revision:"25afbd3f12d06cde75124ced4fe12033"},{url:"/subjects.svg",revision:"d06c6edbd8705e264fd752d229d5f2ae"},{url:"/template.svg",revision:"ccca14704db1dc7e9620c05b8e44770a"},{url:"/text.svg",revision:"5f4eaf52db03b77b69b1a000fab897c8"},{url:"/textquestion.svg",revision:"1b4fc0fdc50ac2a8fdc13febd8a19221"},{url:"/threepages.svg",revision:"0ec2ab0f7e1093e61d73b1797c9c481c"},{url:"/todays.svg",revision:"8560cbad279011d3c78db4351abe2d4f"},{url:"/toolbarmenu.svg",revision:"97e49f46d8a07e3c1a1b88be6a803f03"},{url:"/totalpages.svg",revision:"c5d231e5a22e7d63ba44f21a419fc66a"},{url:"/totalstudy.svg",revision:"24905517891d2ea8a79721868c641101"},{url:"/twopages.svg",revision:"dc2d5c4a42ea5b95d4e5b20354172806"},{url:"/undo.svg",revision:"52bd7bc749a2a42c0db2e5e08bfcdcdc"},{url:"/uploadpdf.svg",revision:"5c94ccae6b3736bc5bdd91dffc663931"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/videos.svg",revision:"8d83bc24c3d39ac571c02f2845b1b537"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"},{url:"/windows11/LargeTile.scale-100.png",revision:"c037ec98b49873bd5218d11b681bf541"},{url:"/windows11/LargeTile.scale-125.png",revision:"2ddb8c2b322e064ea73985d9aa8fdc4a"},{url:"/windows11/LargeTile.scale-150.png",revision:"9b4e17200f474ecdb4f88c84a3620ebc"},{url:"/windows11/LargeTile.scale-200.png",revision:"8072acc5db18c9021e029ceeed6208cb"},{url:"/windows11/LargeTile.scale-400.png",revision:"732e7fdfb295208d387adbbe8465f41a"},{url:"/windows11/SmallTile.scale-100.png",revision:"2a37df7f0f6c9ff6b113c6bec419187c"},{url:"/windows11/SmallTile.scale-125.png",revision:"aac2cbe49b9d06ddfcf3827dcb5d2fa8"},{url:"/windows11/SmallTile.scale-150.png",revision:"9fbcf893a756aa13cfe700a0030be363"},{url:"/windows11/SmallTile.scale-200.png",revision:"b7b5407d9f31c2109e563982d953c7b0"},{url:"/windows11/SmallTile.scale-400.png",revision:"61a268154f4a6464fbcfaf8fe0e7fab0"},{url:"/windows11/SplashScreen.scale-100.png",revision:"b6f7397d85dc1deaf4d69466c470365e"},{url:"/windows11/SplashScreen.scale-125.png",revision:"ef44250c81508694f71ceba2650d143c"},{url:"/windows11/SplashScreen.scale-150.png",revision:"8fbdcd41f2c82efb551a5f70d6bcaeee"},{url:"/windows11/SplashScreen.scale-200.png",revision:"70b0d630ee5ac33de16425253886b95f"},{url:"/windows11/SplashScreen.scale-400.png",revision:"c98e9011bc5b5ba64bcc69ae5d154145"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"dc78562df1cf0daa7925a3c9b2a05734"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"b62abe2f7baaedb81101a921afa15ba7"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"89f4c23d19040fb368807e4a2880d1e3"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"f56f83ecff1e26968c04a4a274ded36a"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"7579209c39dac10e60389f3d46fba7b7"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"c1a978f6815a9f4d58e6a368194d1432"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"7c9ce9effc97e5cc03f9c56191e4bad9"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"3b1328581f5ae4a6b26df97c77de3d2d"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"5ec59e8451ab3c68b475c97e79b56e30"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"32724c465381a4058af468ecef68fcf4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"fd48a4d1258c0cd0bc4ccc7b45f47991"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"cb6f8a6e86e505ca01514319741159c1"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"5f1953c513b916f3dbb19960862156a4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"945f09d19a764328093ac84ec5150a86"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"5d1216b8766a10b9a34701465cd72cfc"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"31d65a040f178b35ef772598f1ea2344"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"e2ba455fb1bfbf497589cd7fee464f76"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"1d67e440c27434528a755e32489a7318"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"1a191f817cf1181088835eb23abc0ad2"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"3431018e7cc442dbc6c3445b0fd433da"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"c1a978f6815a9f4d58e6a368194d1432"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"7c9ce9effc97e5cc03f9c56191e4bad9"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"3b1328581f5ae4a6b26df97c77de3d2d"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"5ec59e8451ab3c68b475c97e79b56e30"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"32724c465381a4058af468ecef68fcf4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"fd48a4d1258c0cd0bc4ccc7b45f47991"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"cb6f8a6e86e505ca01514319741159c1"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"5f1953c513b916f3dbb19960862156a4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"945f09d19a764328093ac84ec5150a86"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"5d1216b8766a10b9a34701465cd72cfc"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"31d65a040f178b35ef772598f1ea2344"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"e2ba455fb1bfbf497589cd7fee464f76"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"1d67e440c27434528a755e32489a7318"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"1a191f817cf1181088835eb23abc0ad2"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"3431018e7cc442dbc6c3445b0fd433da"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"945f09d19a764328093ac84ec5150a86"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"829ded298c77ebda16e34075fabb3edc"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"6c23f9909797f54572daf19a5a6ef74b"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"10770830a3057197b91de36c58f2cad9"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"6c7756d0ec09cb202afc25e5097819b1"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"c1a978f6815a9f4d58e6a368194d1432"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"7c9ce9effc97e5cc03f9c56191e4bad9"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"3b1328581f5ae4a6b26df97c77de3d2d"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"5ec59e8451ab3c68b475c97e79b56e30"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"32724c465381a4058af468ecef68fcf4"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"fd48a4d1258c0cd0bc4ccc7b45f47991"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"cb6f8a6e86e505ca01514319741159c1"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"5f1953c513b916f3dbb19960862156a4"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"945f09d19a764328093ac84ec5150a86"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"5d1216b8766a10b9a34701465cd72cfc"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"31d65a040f178b35ef772598f1ea2344"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"e2ba455fb1bfbf497589cd7fee464f76"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"1d67e440c27434528a755e32489a7318"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"1a191f817cf1181088835eb23abc0ad2"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"3431018e7cc442dbc6c3445b0fd433da"},{url:"/windows11/StoreLogo.scale-100.png",revision:"f15120685eca316c982b6254e37493e5"},{url:"/windows11/StoreLogo.scale-125.png",revision:"7442082af2a7764532731c9c6f0336e1"},{url:"/windows11/StoreLogo.scale-150.png",revision:"4835fc50f7e5a79f4d9735381e25bf8f"},{url:"/windows11/StoreLogo.scale-200.png",revision:"1ea3e4fa1d140320bd171727fc88fd9d"},{url:"/windows11/StoreLogo.scale-400.png",revision:"43608e6c29b32ce880469598193a0f51"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"14b8f4174f1f95222b24fe6027c14788"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"46149e6cfe553512f9bc772e79c59d6c"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"356d988067ee017f4a61257da2953de8"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"b6f7397d85dc1deaf4d69466c470365e"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"70b0d630ee5ac33de16425253886b95f"},{url:"/write.svg",revision:"98be9fdac215162e1985a167b348d166"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
