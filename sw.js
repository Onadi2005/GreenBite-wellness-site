const cacheName = "greenbite-cache-v1";
const assetsToCache = [
  "./index.html",
  "./style.css",
  "./hero.js",
  "./utiles.js",
  "./images/basket.png",
  "./images/fitness.png",
  "./images/doctor.png"
];

self.addEventListener("install", evt => {
    evt.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
    );
});

self.addEventListener("fetch", evt => {
    evt.respondWith(
        caches.match(evt.request).then(response => response || fetch(evt.request))
    );
});
