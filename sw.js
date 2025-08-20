// In your service worker file (e.g., sw.js)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(response => {
      const newHeaders = new Headers(response.headers);
      newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');
      newHeaders.set('Cross-Origin-Embedder-Policy', 'require-corp');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
      });
    })
  );
});
