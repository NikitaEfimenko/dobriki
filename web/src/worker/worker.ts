/// <reference lib="webworker" />
// @ts-ignore 
import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkOnly } from 'workbox-strategies';
import { BackgroundSyncPlugin } from "workbox-background-sync";
import { QueueKeys } from '@/features/motion/types';


export default null
declare let self: ServiceWorkerGlobalScope

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

// const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
// registerRoute(
//   // Return false to exempt requests from being fulfilled by index.html.
//   ({ request, url }: { request: Request; url: URL }) => {
//     // If this isn't a navigation, skip.
//     if (request.mode !== 'navigate') {
//       return false;
//     }

//     // If this is a URL that starts with /_, skip.
//     if (url.pathname.startsWith('/_')) {
//       return false;
//     }

//     // If this looks like a URL for a resource, because it contains
//     // a file extension, skip.
//     if (url.pathname.match(fileExtensionRegexp)) {
//       return false;
//     }

//     console.log(url.pathname, "in worker")

//     if (url.pathname.startsWith("/api")) {
//       return false;
//     }

//     // Return true to signal that we want to use the handler.
//     return true;
//   },
//   createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
// );


registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

const bgSyncPlugin = new BackgroundSyncPlugin(QueueKeys.SYNC as any, {
  maxRetentionTime: 24 * 60,
});

const syncUrl = process.env.NEXT_PUBLIC_BACKEND_URL

registerRoute(
  ({ url }) => {
    console.log(url.href, "in worker")
    return url.href === syncUrl
  },
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "PATCH"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

