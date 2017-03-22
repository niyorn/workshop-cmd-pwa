self.addEventListener('install', event => event.waitUntil(
    caches.open('bs-v1-core')
        .then(cache => cache.addAll([
            '/offline/',
            '/dist/css/bootstrap.css',
            '/dist/css/bootstrap-theme.css',
            '/dist/css/fonts.css',
            '/dist/js/bootstrap.js',
            '/dist/fonts/glyphicons-halflings-regular.woff2'
        ]))
        .then(self.skipWaiting())
));

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .catch(err => fetchOfflinePage())
    );
});

function fetchOfflinePage() {
    return caches.open('bs-v1-core')
        .then(cache => cache.match('/offline/'));
}