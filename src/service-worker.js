workbox.core.setCacheNameDetails({
    prefix: 'pwa-test',
    suffix: 'v1.0.0',
  });
  workbox.skipWaiting();
  workbox.clientsClaim();
  
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
  
  workbox.routing.registerRoute(
    new RegExp('.*experiments\?.*'), 
    workbox.strategies.networkFirst()
  );
  workbox.routing.registerRoute(
    new RegExp('.*experiments/\\d'),
    workbox.strategies.networkFirst()  
  )
  workbox.routing.registerRoute(
    new RegExp('.*experiment_types.*'),
    workbox.strategies.networkFirst()
  )
  