'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "91643a209a34ee20f0b3d86abcb59f04",
".git/config": "b053a2a23d01a56226c71d24ff5b2691",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "efb6be956dfa5a35a362a9a27212ffdf",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dc7d4f5bb49a35df40c05f3cee29da7f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "594d77bbd2e6ff74733f4d682cb8ad25",
".git/logs/refs/heads/master": "594d77bbd2e6ff74733f4d682cb8ad25",
".git/logs/refs/remotes/origin/master": "c6b7d56dd75de600b1c7954732e2dcd7",
".git/objects/00/b67a5b1e1e01ce6ffb83e67b870ea1c4c4113b": "edcb5d62509fe2302877e4fc0e86ecdd",
".git/objects/03/cc78823925060b27990abc111206db6fbec96a": "21b0a98bf10593b147ff30e93e0bafcb",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0b/b5ceadfc19ba064b398419f030defc7128ab2e": "9d8072b9943b1382cbe3b4c31131ce25",
".git/objects/0b/b985d02b6aed4fa9a85e5d9b5044fd48bc55e5": "b272c27ce68d3433681d38a5d490c30f",
".git/objects/0d/1d848868fdb28e8d33dd980a80833722c0e705": "fe9ffc9b7a71231d8224ffca64373f8d",
".git/objects/10/b9d09a86bc38e50b0374a83a4126bb8fdf6e1e": "70dc550a606c2cfab2c6b12eb7cf9f04",
".git/objects/17/744a48681753ef0c3baa0be7a75df1cc1a8449": "eac02bbc29c105718519bf85cbcfef38",
".git/objects/1c/d8f3aefc077234cdd096ff6ecfcdc0d4ed7117": "462807fdb703d1d7464e662bbd231316",
".git/objects/1d/554c019e5b04783e82b9c5aff7e7bcad9d3988": "6e5b635f9b5e993a8fbb52b805d0cfc2",
".git/objects/1e/7467d5113ef45ec7f7a97dd526359f7fa03f5e": "b35de5cf96282b849d538c1b1da97281",
".git/objects/1e/ffc99d15aa051e80a32314e102ed0f30be7a70": "c9a686ba55ffabb422a6f9025c0e1d32",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/56742bdec60891c7d3764542c21a32f2a40c71": "4c66ffe41e2ae57e7a8e4a609c4e4057",
".git/objects/21/2c0d7eee37e3105242c69104897ae49ed5c337": "12a924e486b28e91b56874beda4aa408",
".git/objects/22/ff917efb4d614444a848807d1cc2ade034b85e": "2fa8fe55806e5a8b17d87b4a1091af58",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/e562934a6cc11522e1bc9733819e36352cd471": "9382885aa109b16f3bff1b45fb695e19",
".git/objects/29/30b81361ed99978292d94748ae8cfef3089c6c": "008bcc798e197a39c5c9db49be6fd89b",
".git/objects/2a/32b50f74eab71197a73497929e1e9cbe6dce13": "8ec7102a315f74960c1a8483f4df3dda",
".git/objects/2e/f13de413e104c10ead08a7c67ff62e302c539f": "2f41033ad8697a39a1c83245a4b69a1c",
".git/objects/2f/e6820931510b7346c2252a1369543af7858c6e": "02efbf6e48013ee69d519225acab2a67",
".git/objects/32/782ed884ac17fe6dfa929676ede8b87a2e493a": "63081b582d3a41b63b0cb1db520f0c79",
".git/objects/35/aadb46930724ccf4c1ef3d95b8281b95da0efe": "bd7293fd5e0fda5284721d9d349924d3",
".git/objects/36/9c23a2776cea129463e2a6084d6fcfd2a16e9f": "1bfbc1f6de23ae7e844c6379fd2eea3b",
".git/objects/36/c20b0d84bb7fcbd22f5335250cd5ef04adcb7c": "1f988edaf16cf1619b3f60dd2e3274db",
".git/objects/38/5853366046fe0f4123d520fd1fb1d532587dd5": "459804624a3f7c051d281e8607a148fe",
".git/objects/3a/94e22af34780826895f8c96686e28da2b7d6fe": "f89540453aded3ce76b2f223ba62f58e",
".git/objects/3a/ce84dea034c4cace0d8322ec09c1a59028bc80": "c3186da8f9d94114a97db7984163c7be",
".git/objects/3f/61230143d7d727beb0e564d13fed4c744cceec": "07be5298d3c9a4ac2c7881a829762437",
".git/objects/41/de173d9014b38f8290acf270c490b37fc79a60": "d2a9d01215e9d65fd0456ded49e98878",
".git/objects/44/88511fbae1cb7e7a3161d7a95a2404dae9e355": "8b2f81d9220e5776f80742b45f8a06fe",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/77256a9e161d2f55beadfe76cb43defa73674a": "6af851bd3d94e382f401b2af16a57c93",
".git/objects/48/fa9a81572af4f2268ca19a658774390e55b127": "a00744205967dd5c1ccc63c3fc30cc0f",
".git/objects/4a/4589e7abc2e02407c4c402f007ae7e959157ec": "3b5ad9d69a7e0a9e0a61133d23aba399",
".git/objects/4c/e81c4cf61c7a1e2dcc7424019057500562c650": "76d272efd00295e7c47d426bce4c9a69",
".git/objects/4f/9a84ed415cddf67849a0bd065ab9ab8bf5fd74": "22888c947b3286a9d3865d615c53aa23",
".git/objects/5a/bf788e2c44cd4304f76d1c80681aefc26d8c77": "728ad4fdff3ba41f9e852ef4f5a2c41a",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/60/128cd9feb42ac1e117e8eb826af400c0f42ffc": "65a05d8645f5e60b9611c63212e81411",
".git/objects/60/76e750fba503cb3ad29957045a78e049410ab3": "9fc718a7c847935cb3d7e90a8d7c5d6c",
".git/objects/61/d12e2574a2a30930e7a04b87f5f1b5d2ebec7b": "d1ca54be6e501bb85cecd36896966ffc",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/0358dd6c2b103b36c03f868a793dd72382ed41": "aa1fe122b4c8b165b388f07bd63f1096",
".git/objects/68/61d9b3f9c3e5441effd23cbabf21c29a878c0c": "b363bce60a0019908f018fe83b2b3efa",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/556d526f4b4bfdbd461cce1f939fb13a41a218": "b52db04b0a32ed44270ea4005b13e486",
".git/objects/6a/bfb9255308f4e2fc2594e05af18dcd1cc81ce3": "acde1c4369f2efaff81739549f4c343c",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/a892d55931b73acb8f412c8b1e38988f822fea": "96f514cb09269ddd3a9668d287a45efe",
".git/objects/6d/eee3df24b1ea6382db8d9f1a1f5167c66551a0": "bbf6e0bf93050e264fe211b620adfe38",
".git/objects/6e/01995771f341624f0e9eb4ff5a429283121e29": "d853ab4450e16a9274416faa09a54d34",
".git/objects/6f/e62f2169e761d77dd6c8cadb3ccdca6106a20d": "9986f520353ed2759e802d2c386a55f0",
".git/objects/71/0fad74aeb3dc96a663814f4f59084ecbfb3102": "8b11448b16ade654c57e4d86a99c8872",
".git/objects/71/339251c57e991c44e11719093b4b2b5b65a6bd": "2c2bfdf5740feb3706a272a787eab56d",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7b/6daf2553662a25c737def28c9f9eb544dea5e2": "d0409e10b3095f3d702b0ae6574ab4b3",
".git/objects/82/fa9cfb1ced31c91816c8e0ea10c013090384b7": "489ade1ef046117f8abd7aa6e56eb6de",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/7c7c5c8d4e1688f3c092fbf007481ede002d13": "c05b80b2dd3c828946b872286c939db2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/40c6502eeb5e517599ebd372fc235d86de6215": "99da868b72a38a67b758f7b5287c25c0",
".git/objects/92/65271423f84461d77884d2951fb8bc3d1fd82a": "b19ea62170f08eea8d0867d33c16947d",
".git/objects/92/8753b8a2d58d44cbf7e97561d0a5bec88374a4": "8005988b9e26e3b5e16ae25125eff0b1",
".git/objects/94/e1f2113a69173dc09d35bb92c789cabfe05a36": "855f04718294fc4cfa8097ced33bce4f",
".git/objects/96/ca688b65b539200e61818701716a5ddf9c108b": "10f45dc8e7efcbc56c4cb83360cbd58a",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/43d3e14eae731f3b5fe22965a3e8990b1fa4e2": "f04a865f838a312be137b6f886c7d6d8",
".git/objects/9a/dc66151508f4e42a44ae805c1248ed986c2a96": "eca9f78f1f9bb3035525cf72e45f5c23",
".git/objects/9a/fdbe5631d1af518fe5ce43410c29409c9bf35c": "a82c733ede3831ef51e43ac5604d19dc",
".git/objects/9d/c9fc3bc9fa3f3264013f8af2d6ef02e97813d5": "c234dddf848d2715f4c56e5427dabee7",
".git/objects/a0/d701263431d99538935211503e0b9e73e8bc2b": "758b7f6fe42e7e12383681b0ed6e9020",
".git/objects/a4/993543a4616dd7760896905a8309ab44264436": "6887a4d89b134a190913b86df3ad4468",
".git/objects/a4/ced370b432731f6fbef1463a1cc844e324b796": "60b7fad053cc9d33120f635de38d9afb",
".git/objects/a6/f8ee198ab09d4da467eabc8302b5fae88cb15b": "ee94148587336a23ffec400b7b652467",
".git/objects/a7/2ba476f51cfbf4d203caa4074db6ec0b640582": "1c51544196098b249f2f1e87efa687f5",
".git/objects/a8/017e6ee7372879e1c7576a2ed38f227501f188": "bbf52448cb4ae9c4f48a049ecaf44149",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/a8/f852783b7ba0ac99984d1edcfaa6dd36f4acff": "73689d0ed10bb03d6a7149a08b17adbe",
".git/objects/ae/a65e4bb061e62aad00363f4afeca8c53206575": "3a8b6bad55c14f39f7aeede7afd8f6e3",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/d2e7bb2085283348f61ee41bb624a3eea8579f": "894dadec1b32bcc9032d27117ed844dd",
".git/objects/b1/052d4fcd915cfd1a30ad51598d34f414f3fd6e": "477e09bdea11c17cac8baa673869548e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b6/215be5c51fd2b9da31df39fec18fc4ebe926b4": "a8d1c3837dc19448e3290bcc9b9a1622",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f28c45176fd1a4c0a58e7e3bad8b4069fa3ea6": "26c0124c46eeab4ccfa055d5c97c9744",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/add05664c8d1ab4b573aa4823cf61d6460274a": "8a0325bbb221fb95a0d598ccd65d1832",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ca/e557c03ec389722371dbdd460c4118177a7192": "5c2b887954ef60dc04624e36ff434cb0",
".git/objects/ce/ca33049bd3bf05c80aa395385906c1539d4d09": "110f435eab12d09315319c5564706933",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3b88233901fbd557059387677203d5dc418a9d": "4b5e4affb3c1d56b7fdea16b5106f3d4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/be8207a8ef74c191f8c831bc3e2fe0e83f704d": "423c70dc0687b453fac904d8c45c7f0d",
".git/objects/da/17f66e3c7a33b86ae80392d0268dc042e4f779": "05602fa9c39d8fe1badcff87f1a943e4",
".git/objects/e0/321329ee131e5571859acfff858e16b0b68308": "6875f0d5c18b98404fdaf63c358cd1df",
".git/objects/e0/f6a3a7c374ccbe0270202369ad96d11ed2f610": "360f2e8ebef2ff4ca6db63a16c77e5d3",
".git/objects/e2/c4a2919581feedbeba67533b0f02976a2e66c4": "63484dc1dba64525c2214a43b96e4ab7",
".git/objects/e4/ba7e4cce32a78a5fe3e098a9fe38e662afd3d5": "58d25c1fa9a3625a6e33029516495748",
".git/objects/e5/38c60a5e3bffe03e0a2594b26e449f628ee8af": "1dc2f62e4948231bca3be0a8999cdb15",
".git/objects/e5/9e14d1c588a08c1f13282fbc541e87ac54e2ad": "a0fa7fe687315f0807aaf121fe1d9b8e",
".git/objects/e7/8a1242507e5a22a1852459ed0bde35e706734f": "85434e85e45e346369c3e89a4071bbdd",
".git/objects/eb/35345493dfb3ee124bfbb478c746a696dfc562": "0c93bd6453e51b813e19ed5f0ee93d68",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f1/332338967dd09793cd716aef00e8ee53cb4fdb": "6551c33916bbe064e797d50b092954b5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/af392fd5137f368bee615714f30592db99033b": "953cf38116d9fa8d0ee1de08bf841208",
".git/objects/fa/b9a4906513a35710e5c150c7342b8d0954c419": "45664508e978a375b6d112e0606c38bd",
".git/objects/fc/ee511d4694159f469681c679a5bebc2b2244ae": "1bf35ca2a6459d2567a5facc7c838657",
".git/objects/fd/9b522ba6ab511e88f25d03f285a43a492bf583": "29ff1d644b8259c1b3e4e464a4ad8819",
".git/objects/fe/bc81499f855117ba1c704be4d2af6debdffdb9": "f53ce5840f33c39d1e76bfa70d439133",
".git/objects/ff/f8dab77a513eaf104040e9afb49e6ff94ff4a7": "42790394902b70ad5c8b2842da8a3fec",
".git/ORIG_HEAD": "0435930180148c319b15ba4c95d6cd9e",
".git/refs/heads/master": "c902f9e7930687a54d37b006e191c9d4",
".git/refs/remotes/origin/master": "c902f9e7930687a54d37b006e191c9d4",
"assets/AssetManifest.bin": "e25e9669ff2fe981b2e6f70f21032827",
"assets/AssetManifest.bin.json": "7900b1306b915f1bac09b458e17f1ea2",
"assets/AssetManifest.json": "5b7050e96e2fa9c94cc3617d270ce116",
"assets/FontManifest.json": "3012868c0ff842aa971fbb310dc0ba4c",
"assets/fonts/MaterialIcons-Regular.otf": "8071e44fc9eed832a4fae7957bef4887",
"assets/NOTICES": "0a63173a0cb06794360746a929ba99de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "b6530f23d5df9d8b334e31a4dc62e0d0",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "2e09fc45f3f2569ed3ca7594e5d50e39",
"assets/packages/shadcn_ui/fonts/Geist-Black.otf": "cf003c4f85b590cf60bec1e111ebaaf5",
"assets/packages/shadcn_ui/fonts/Geist-Bold.otf": "d3e1d3dc690224fd330969af598a9c31",
"assets/packages/shadcn_ui/fonts/Geist-Light.otf": "21f434e8c2b53240a0c459b9d119f22f",
"assets/packages/shadcn_ui/fonts/Geist-Medium.otf": "f7ceaf00b58d396cf93ff1ea43740027",
"assets/packages/shadcn_ui/fonts/Geist-Regular.otf": "4d02716b4f2f2e4d9c568c8d24e8e74d",
"assets/packages/shadcn_ui/fonts/Geist-SemiBold.otf": "2c0b1d3e7b1c71bedc2eecf78f7a1d1d",
"assets/packages/shadcn_ui/fonts/Geist-Thin.otf": "8603d0fe0def4273ebeee670eedcfb86",
"assets/packages/shadcn_ui/fonts/Geist-UltraBlack.otf": "f3591a030925294b2bb427e6a6c9b0d8",
"assets/packages/shadcn_ui/fonts/Geist-UltraLight.otf": "b64b37fbec0a925067cbf530e4962fec",
"assets/packages/tdesign_flutter/assets/tdesign/TCloudNumberVF.ttf": "4f66f7ac7b3b222eb82f69539c49662c",
"assets/packages/tdesign_flutter/assets/tdesign/td_icons.ttf": "f497a607d1fd542ada6237743b06fd56",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "95de75831942db1d2c5169b90bd765af",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e9ee1977996ba691b6c11fc9f1f6c752",
"/": "e9ee1977996ba691b6c11fc9f1f6c752",
"main.dart.js": "0df7e90c5c6b0bfc47f355d5fb80ffcd",
"manifest.json": "98954890ca0184d5d94bae67f362837e",
"version.json": "1a30de36be08ef993c1c67037be44d0d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
