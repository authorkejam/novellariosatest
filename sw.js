const CACHE_NAME = 'author-novel-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/alert.js',
  '/data/function.js',
  '/data/novel.js',
  '/data/short.js',
  '/data/blog.js',
  '/data/about.js',
  '/weblogo.png',
  '/logo/web-cover.png',
  '/logo/footer-logo.png',
  '/logo/instagram.svg',
  '/logo/twitter.svg',
  '/logo/authorputih.png',
  '/logo/authorhitam.png',
  // Add cover images
  '/cover/Another-cover.jpg',
  '/cover/beingkind-cover.jpg',
  '/cover/Boulevards-cover.jpg',
  '/cover/Broken-cover.jpg',
  '/cover/BungaBintang-cover.jpg',
  '/cover/Clara-cover.jpg',
  '/cover/EveryStory-cover.jpg',
  '/cover/Hunted-cover.jpg',
  '/cover/Jendela-cover.jpg',
  '/cover/Monic-cover.jpg',
  '/cover/Obsesi-cover.jpg',
  '/cover/Val-cover.jpg',
  '/cover/Van-cover.jpg',
  '/cover/villain-cover.jpg',
  '/cover/Yakuza-cover.jpg',
  // External resources for offline access
  'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Open+Sans:wght@400;700&family=Lato:wght@400;700&family=Montserrat:wght@400;700&family=Oswald:wght@400;700&family=Raleway:wght@400;700&family=Poppins:wght@400;700&family=Playfair+Display:wght@400;700&family=Merriweather:wght@400;700&family=Inter:wght@400;700&family=Quicksand:wght@400;700&family=Karla:wght@400;700&family=Mulish:wght@400;700&family=Manrope:wght@400;700&family=Outfit:wght@400;700&family=Readex+Pro:wght@400;700&family=Space+Grotesk:wght@400;700&family=JetBrains+Mono:wght@400;700&family=Fira+Code:wght@400;700&family=Roboto+Mono:wght@400;700&family=Ubuntu+Mono:wght@400;700&family=Space+Mono:wght@400;700&family=Noto+Sans:wght@400;700&family=Lora:wght@400;700&family=Crimson+Text:wght@400;700&family=Libre+Baskerville:wght@400;700&family=Vollkorn:wght@400;700&family=EB+Garamond:wght@400;700&family=Old+Standard+TT:wght@400;700&family=Caveat:wght@400;700&family=Dancing+Script:wght@400;700&family=Great+Vibes&family=Satisfy&family=Allura&family=Kalam:wght@400;700&family=Shadows+Into+Light&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.7.13/lottie.min.js',
  'https://authorkejam.github.io/authornovel/weblogo.png',
  // About markdown files
  '/About/about.md',
  '/About/name.md',
  '/About/privacy.md',
  // Blog markdown files
  '/Blog/BlogInformasi/blog1.md',
  '/Blog/BlogInformasi/blog2.md',
  '/Blog/BlogInformasi/blog3.md',
  '/Blog/BlogInformasi/blog4.md',
  '/Blog/BlogInformasi/blog5.md',
  '/Blog/BlogInformasi/blog6.md',
  '/Blog/BlogInformasi/blog7.md',
  '/Blog/BlogInformasi/blog8.md',
  '/Blog/BlogInformasi/blog9.md',
  '/Blog/BlogInformasi/blog10.md',
  '/Blog/BlogUpdate/1sampleblog.md',
  '/Blog/BlogUpdate/2sampleblog.md',
  '/Blog/BlogUpdate/3sampleblog.md',
  '/Blog/BlogUpdate/4sampleblog.md',
  '/Blog/BlogUpdate/5update.md',
  // Novel markdown files
  '/Novel/1Anotherside/anotherside_chapter1.md',
  '/Novel/1Anotherside/anotherside_chapter2.md',
  '/Novel/1Anotherside/anotherside_chapter3.md',
  '/Novel/1Anotherside/anotherside_chapter4.md',
  '/Novel/1Anotherside/anotherside_chapter5.md',
  '/Novel/1Anotherside/anotherside_chapter6.md',
  '/Novel/1Anotherside/anotherside_chapter7.md',
  '/Novel/1Anotherside/anotherside_chapter8.md',
  '/Novel/1Anotherside/anotherside_chapter9.md',
  '/Novel/1Anotherside/anotherside_chapter10.md',
  '/Novel/1Anotherside/anotherside_chapter11.md',
  '/Novel/1Anotherside/anotherside_chapter12.md',
  '/Novel/1Anotherside/anotherside_chapter13.md',
  '/Novel/1Anotherside/anotherside_chapter14.md',
  '/Novel/1Anotherside/anotherside_chapter15.md',
  '/Novel/1Anotherside/anotherside_chapter16.md',
  '/Novel/1Anotherside/Know the Characters.md',
  '/Novel/2BoulevardsofBrokenDream/boulevards_chapter1.md',
  '/Novel/2BoulevardsofBrokenDream/boulevards_chapter2.md',
  '/Novel/2BoulevardsofBrokenDream/boulevards_chapter3.md',
  '/Novel/2BoulevardsofBrokenDream/boulevards_chapter4.md',
  '/Novel/2BoulevardsofBrokenDream/boulevards_chapter5.md',
  '/Novel/2BoulevardsofBrokenDream/boulevards_chapter6.md',
  '/Novel/2BoulevardsofBrokenDream/boulevards_chapter7.md',
  '/Novel/2BoulevardsofBrokenDream/boulevards_chapter8.md',
  '/Novel/2BoulevardsofBrokenDream/boulevards_chapter9.md',
  '/Novel/2BoulevardsofBrokenDream/boulevards_chapter10.md',
  '/Novel/2BoulevardsofBrokenDream/boulevards_chapter11.md',
  '/Novel/2BoulevardsofBrokenDream/boulevards_chapter12.md',
  '/Novel/2BoulevardsofBrokenDream/boulevards_chapter13.md',
  '/Novel/2BoulevardsofBrokenDream/boulevards_chapter14.md',
  '/Novel/3BeingKind/beingkind_chapter1.md',
  '/Novel/3BeingKind/beingkind_chapter2.md',
  '/Novel/3BeingKind/beingkind_chapter3.md',
  '/Novel/3BeingKind/beingkind_chapter4.md',
  '/Novel/3BeingKind/beingkind_chapter5.md',
  '/Novel/3BeingKind/beingkind_chapter6.md',
  '/Novel/3BeingKind/beingkind_chapter7.md',
  '/Novel/3BeingKind/beingkind_chapter8.md',
  '/Novel/3BeingKind/beingkind_chapter9.md',
  '/Novel/3BeingKind/beingkind_chapter10.md',
  '/Novel/3BeingKind/beingkind_chapter11.md',
  '/Novel/3BeingKind/beingkind_chapter12.md',
  '/Novel/3BeingKind/beingkind_chapter13.md',
  '/Novel/3BeingKind/beingkind_chapter14.md',
  '/Novel/3Huntedbydeath/novel3_chapter1.md',
  '/Novel/3Huntedbydeath/novel3_chapter2.md',
  '/Novel/4VAL/val_chapter1.md',
  '/Novel/4VAL/val_chapter2.md',
  '/Novel/4VAL/val_chapter3.md',
  '/Novel/4VAL/val_chapter4.md',
  '/Novel/6Yakuza/1yakuza.md',
  '/Novel/6Yakuza/2yakuza.md',
  '/Novel/6Yakuza/3yakuza.md',
  '/Novel/6Yakuza/4yakuza.md',
  '/Novel/6Yakuza/5yakuza.md',
  '/Novel/6Yakuza/6yakuza.md',
  '/Novel/6Yakuza/7yakuza.md',
  '/Novel/6Yakuza/8yakuza.md',
  '/Novel/6Yakuza/9yakuza.md',
  '/Novel/6Yakuza/10yakuza.md',
  '/Novel/Jendela Restoran Keluarga/Jendela1.md',
  '/Novel/Jendela Restoran Keluarga/Jendela2.md',
  '/Novel/Jendela Restoran Keluarga/Jendela3.md',
  '/Novel/Jendela Restoran Keluarga/Jendela4.md',
  '/Novel/Jendela Restoran Keluarga/Jendela5.md',
  '/Novel/Jendela Restoran Keluarga/Jendela6.md',
  '/Novel/Jendela Restoran Keluarga/Jendela7.md',
  '/Novel/Jendela Restoran Keluarga/Jendela8.md',
  '/Novel/Jendela Restoran Keluarga/Jendela9.md',
  '/Novel/Jendela Restoran Keluarga/Jendela10.md',
  '/Novel/Jendela Restoran Keluarga/Jendela11.md',
  '/Novel/Jendela Restoran Keluarga/Jendela12.md',
  '/Novel/Jendela Restoran Keluarga/Jendela13.md',
  '/Novel/Jendela Restoran Keluarga/Jendela14.md',
  '/Novel/Jendela Restoran Keluarga/Jendela15.md',
  '/Novel/Jendela Restoran Keluarga/Jendela16.md',
  '/Novel/Jendela Restoran Keluarga/Jendela17.md',
  '/Novel/Jendela Restoran Keluarga/Jendela18.md',
  '/Novel/Jendela Restoran Keluarga/Jendela19.md',
  '/Novel/Jendela Restoran Keluarga/Jendela20.md',
  '/Novel/Jendela Restoran Keluarga/Jendela21.md',
  '/Novel/Jendela Restoran Keluarga/Jendela22.md',
  '/Novel/Jendela Restoran Keluarga/Jendela23.md',
  '/Novel/Jendela Restoran Keluarga/Jendela24.md',
  '/Novel/Tutorial/listkeinginan.md',
  '/Novel/Tutorial/Pengenalan.md',
  '/Novel/Tutorial/tutorial1.md',
  '/Novel/Tutorial/tutorial2.md',
  // Short story markdown files
  '/Short/BrokenHome/1Broken.md',
  '/Short/BrokenHome/2Broken.md',
  '/Short/BrokenHome/3Broken.md',
  '/Short/BrokenHome/4Broken.md',
  '/Short/BrokenHome/5Broken.md',
  '/Short/BrokenHome/6Broken.md',
  '/Short/BrokenHome/7Note.md',
  '/Short/BungaBintang/1BungaBintang.md',
  '/Short/BungaBintang/2BungaBintang.md',
  '/Short/BungaBintang/3BungaBintang.md',
  '/Short/BungaBintang/4BungaBintang.md',
  '/Short/BungaBintang/5BungaBintang.md',
  '/Short/EveryStory/1EveryStory.md',
  '/Short/EveryStory/2EveryStory.md',
  '/Short/EveryStory/3EveryStory.md',
  '/Short/EveryStory/4EveryStory.md',
  '/Short/EveryStory/5EveryStory.md',
  '/Short/Monic/1chapter.md',
  '/Short/Monic/2chapter.md',
  '/Short/Monic/3chapter.md',
  '/Short/Monic/4chapter.md',
  '/Short/Monic/5chapter.md',
  '/Short/Monic/6chapter.md',
  '/Short/Monic/7chapter.md',
  '/Short/Monic/8chapter.md',
  '/Short/Monic/9chapter.md'
];

// Install event - cache all static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache first, then network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request).then(networkResponse => {
          // Cache new requests
          if (networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        });
      })
      .catch(() => {
        // Offline fallback - return a basic offline page or cached content
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
