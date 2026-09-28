const CACHE_NAME = 'another-door-v8';
const FILES = ['./', 'index.html', 'manifest.json', 'background.jpg',
  'img/SprBabyBottleSmall_0.webp',
  'img/SprBadTripSmall_0.webp',
  'img/SprBandageSmall_0.webp',
  'img/SprBellRevoltSmall_0.webp',
  'img/SprBenedictionOracleSmall_0.webp',
  'img/SprBluePillSmall_0.webp',
  'img/SprConfusedSmall_0.webp',
  'img/SprDamagedShellSmall_0.webp',
  'img/SprDictatorshipSmall_0.webp',
  'img/SprDragonSkinSmall_0.webp',
  'img/SprEffectArmorSmall_0.webp',
  'img/SprEggSmall_0.webp',
  'img/SprExplosionSmall_0.webp',
  'img/SprFawnSmall_0.webp',
  'img/SprGoldCoinSmall_0.webp',
  'img/SprGoldenSapSmall_0.webp',
  'img/SprGoldenTicketSmall_0.webp',
  'img/SprGrapeDrinkSmall_0.webp',
  'img/SprGreenPillSmall_0.webp',
  'img/SprHallucinogenicVisionSmall_0.webp',
  'img/SprHazelnutSmall_0.webp',
  'img/SprItemDynamiteSmall_0.webp',
  'img/SprItemPhilosopherStoneSmall_0.webp',
  'img/SprLadybugSmall_0.webp',
  'img/SprLuteSmall_0.webp',
  'img/SprMagicStickSmall_0.webp',
  'img/SprMagnyfyingGlassSmall_0.webp',
  'img/SprMotherCurseSmall_0.webp',
  'img/SprMurkyWaterSmall_0.webp',
  'img/SprNudgeSmall_0.webp',
  'img/SprPeacefulMindSmall_0.webp',
  'img/SprPearlyPerlSmall_0.webp',
  'img/SprPieceOfClothSmall_0.webp',
  'img/SprPigeonHeadSmall_0.webp',
  'img/SprPoisonSmall_0.webp',
  'img/SprPredatoryInstinctSmall_0.webp',
  'img/SprRadianceSmall_0.webp',
  'img/SprRatTailSmall_0.webp',
  'img/SprSlimeBallSmall_0.webp',
  'img/SprSockSmall_0.webp',
  'img/SprSpiderSmall_0.webp',
  'img/SprStarShapedNoseSmall_0.webp',
  'img/SprStoneLifeSmall_0.webp',
  'img/SprStraSmall_0.webp',
  'img/SprSweetDreamsSmall_0.webp',
  'img/SprTapewormSmall_0.webp',
  'img/SprThornSmall_0.webp',
  'img/SprToothSmall_0.webp',
  'img/SprTrappedSmall_0.webp',
  'img/SprWoodenSpoonSmall_0.webp',
  'img/SprWoolSmall_0.webp',
  'img/SprZlataLiquorSmall_0.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
