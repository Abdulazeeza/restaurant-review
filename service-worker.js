let CACHE_NAME = 'restaurant-review-v1';
let urlsToCache = [
         '/',
         '/index.html',
         '/restaurant.html',
         '/css/styles.css',
         '/js/dbhelper.js',
         '/js/main.js',
         '/js/restaurant_info.js',
         '/data/restaurants.json',
         '/img/1.jpg',
         '/img/2.jpg',
         '/img/3.jpg',
         '/img/4.jpg',
         '/img/5.jpg',
         '/img/6.jpg',
         '/img/7.jpg',
         '/img/8.jpg',
         '/img/9.jpg',
         '/img/10.jpg'
];

self.addEventListener('install', event => { //adds the urls to the cache
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {  //check for any update and activate
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName != CACHE_NAME;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {  //fetches the urls from the cache

    event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
