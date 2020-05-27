let cacheName = 'capstoneproject';
// let caches;
let filesToCache = [
  'music1.jpg',
  'butter4.jpg',
  'butter6.jpg',
  'baby1.jpg',
  'baby2.jpg',
  'baby3.jpg',
  'baby4.jpg',
  'baby5.jpg',
  'baby6.jpg',
  'baby.html',
  'butter.html',
  'music.html',
  'init-nav.js',
  'style.css',
  'script.js',
  'manifest.json'
]

/* 
start the service worker, when the user access
the website online. This will add the all the files 
listed in filesToCache to the browser cache.

*/
self.addEventListener('install', function(e){
  console.log("on install")
    console.log(cacheName);
  e.waitUntil(
    caches.open(cacheName).then(function(cache){
      console.log("Adding files to cache")
      return cache.addAll(filesToCache)
    })
  )
})

/*
If offline or if the file exists in the cache, then it will fetch the files from cache
*/
self.addEventListener('fetch', function(e){
  e.respondWith(
    caches.match(e.request,{
        cacheName: cacheName
    }).then(function(response){
        console.log("Fetching "+e.request.url);
      return response || fetch (e.request)
    })
  )
})

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});