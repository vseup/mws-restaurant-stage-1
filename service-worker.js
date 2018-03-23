/*For my service worker I watched this tutorial and edited the code for my project: https://www.youtube.com/watch?v=BfL3pprhnms*/

var cacheName = 'v3';
var cacheFiles = [
  './',
  './index.html',
  './restaurant.html',
  './manifest.json',
  './?utm_source=homescreen',
  './css/styles.css',
  './data/restaurants.json',
  './js/app.js',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './img/1-big.jpg',
  './img/1-extra-small.jpg',
  './img/1-medium.jpg',
  './img/1-small.jpg',
  './img/2-big.jpg',
  './img/2-extra-small.jpg',
  './img/2-medium.jpg',
  './img/2-small.jpg',
  './img/3-big.jpg',
  './img/3-extra-small.jpg',
  './img/3-medium.jpg',
  './img/3-small.jpg',
  './img/4-big.jpg',
  './img/4-extra-small.jpg',
  './img/4-medium.jpg',
  './img/4-small.jpg',
  './img/5-big.jpg',
  './img/5-extra-small.jpg',
  './img/5-medium.jpg',
  './img/5-small.jpg',
  './img/6-big.jpg',
  './img/6-extra-small.jpg',
  './img/6-medium.jpg',
  './img/6-small.jpg',
  './img/7-big.jpg',
  './img/7-extra-small.jpg',
  './img/7-medium.jpg',
  './img/7-small.jpg',
  './img/8-big.jpg',
  './img/8-extra-small.jpg',
  './img/8-medium.jpg',
  './img/8-small.jpg',
  './img/9-big.jpg',
  './img/9-extra-small.jpg',
  './img/9-medium.jpg',
  './img/9-small.jpg',
  './img/10-big.jpg',
  './img/10-extra-small.jpg',
  './img/10-medium.jpg',
  './img/10-small.jpg'
]


self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Installed');

  // e.waitUntil Delays the event until the Promise is resolved
  e.waitUntil(

    // Open the cache
    caches.open(cacheName).then(function(cache) {

      // Add all the default files to the cache
      console.log('[ServiceWorker] Caching cached Files');
      return cache.addAll(cacheFiles); 
     })
  ); // end e.waitUntil
});


self.addEventListener('activate', function(e) {

  console.log('[ServiceWorker] Activated');

  e.waitUntil(
    // Get all the cache keys (cacheName)
    caches.keys().then(function(cacheNames) {
      return Promise.all(cacheNames.map(function(thisCacheName) {
        // If a cached item is saved under a previous cacheName
        if (thisCacheName !== cacheName) {
          // Delete that cached file
          console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
          return caches.delete(thisCacheName);
        }
      }));
    })
  ); // end e.waitUntil
});


self.addEventListener('fetch', function(e) {

  console.log('[ServiceWorker] Fetch', e.request.url);

  // e.respondWidth Responds to the fetch event
  e.respondWith(

    // Check in cache for the request being made
    caches.match(e.request)

    .then(function(response) {

      // If the request is in the cache
      if ( response ) {
        console.log("[ServiceWorker] Found in Cache", e.request.url, response);
        // Return the cached version
        return response;
      }

      // If the request is NOT in the cache, fetch and cache

      var requestClone = e.request.clone();
      fetch(requestClone)
      .then(function(response) {

        if ( !response ) {
          console.log("[ServiceWorker] No response from fetch ")
          return response;
        }

        var responseClone = response.clone();

        //  Open the cache
        caches.open(cacheName).then(function(cache) {

          // Put the fetched response in the cache
          cache.put(e.request, responseClone);
          console.log('[ServiceWorker] New Data Cached', e.request.url);

          // Return the response
          return response;

        }); // end caches.open

      })

      .catch(function(err) {
        console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
      });

    }) // end caches.match(e.request)
  ); // end e.respondWith
});
