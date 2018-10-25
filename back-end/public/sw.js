const cacheName = 'news-v1';

const staticAssets = [
    "./",
    "./bundle.js",
    "./6ba79f5e6bdf5d0cdca7.js",
    "./d223bfcca896beb4c62d.js",
    "./load-sw.js",
    "./styles.css",
    "./assets/img/monkey.jpg"

];

self.addEventListener('install', async event => {
    console.log('sw installed');

    const cache = await caches.open(cacheName);
    cache.addAll(staticAssets);

    
});

const cacheFirst = async req => {
    const cacheResponse = await caches.match(req);
    return cacheResponse || fetch(req);
}

const networkFirst = async (request) => {
    const dynamicCache = await caches.open('news-dynamic');
    try {
        const networkResponse = await fetch(request);
        dynamicCache.put(request, networkResponse.clone());
        return networkResponse;
    } catch (err) {
        const cachedResponse = await dynamicCache.match(request);
        return cachedResponse;
    }    
}

self.addEventListener('fetch', event => {
    const request = event.request;
   console.log(request.url);
    if (request.url.indexOf('api') > -1) {
        event.respondWith(networkFirst(request));
    } else {
        event.respondWith(cacheFirst(request));
    }
});


