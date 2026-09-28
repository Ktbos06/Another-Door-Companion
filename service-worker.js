const CACHE_NAME = 'another-door-v7';
const FILES = ['./', 'index.html', 'manifest.json', 'background.jpg',
  'icons/SprBabyBottleSmall_0.webp',
  'icons/SprBadTripSmall_0.webp',
  'icons/SprBandageSmall_0.webp',
  'icons/SprBellRevoltSmall_0.webp',
  'icons/SprBenedictionOracleSmall_0.webp',
  'icons/SprBluePillSmall_0.webp',
  'icons/SprConfusedSmall_0.webp',
  'icons/SprDamagedShellSmall_0.webp',
  'icons/SprDictatorshipSmall_0.webp',
  'icons/SprDragonSkinSmall_0.webp',
  'icons/SprEffectArmorSmall_0.webp',
  'icons/SprEggSmall_0.webp',
  'icons/SprExplosionSmall_0.webp',
  'icons/SprFawnSmall_0.webp',
  'icons/SprGoldCoinSmall_0.webp',
  'icons/SprGoldenSapSmall_0.webp',
  'icons/SprGoldenTicketSmall_0.webp',
  'icons/SprGrapeDrinkSmall_0.webp',
  'icons/SprGreenPillSmall_0.webp',
  'icons/SprHallucinogenicVisionSmall_0.webp',
  'icons/SprHazelnutSmall_0.webp',
  'icons/SprItemDynamiteSmall_0.webp',
  'icons/SprItemPhilosopherStoneSmall_0.webp',
  'icons/SprLadybugSmall_0.webp',
  'icons/SprLuteSmall_0.webp',
  'icons/SprMagicStickSmall_0.webp',
  'icons/SprMagnyfyingGlassSmall_0.webp',
  'icons/SprMotherCurseSmall_0.webp',
  'icons/SprMurkyWaterSmall_0.webp',
  'icons/SprNudgeSmall_0.webp',
  'icons/SprPeacefulMindSmall_0.webp',
  'icons/SprPearlyPerlSmall_0.webp',
  'icons/SprPieceOfClothSmall_0.webp',
  'icons/SprPigeonHeadSmall_0.webp',
  'icons/SprPoisonSmall_0.webp',
  'icons/SprPredatoryInstinctSmall_0.webp',
  'icons/SprRadianceSmall_0.webp',
  'icons/SprRatTailSmall_0.webp',
  'icons/SprSlimeBallSmall_0.webp',
  'icons/SprSockSmall_0.webp',
  'icons/SprSpiderSmall_0.webp',
  'icons/SprStarShapedNoseSmall_0.webp',
  'icons/SprStoneLifeSmall_0.webp',
  'icons/SprStraSmall_0.webp',
  'icons/SprSweetDreamsSmall_0.webp',
  'icons/SprTapewormSmall_0.webp',
  'icons/SprThornSmall_0.webp',
  'icons/SprToothSmall_0.webp',
  'icons/SprTrappedSmall_0.webp',
  'icons/SprWoodenSpoonSmall_0.webp',
  'icons/SprWoolSmall_0.webp',
  'icons/SprZlataLiquorSmall_0.webp'
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
