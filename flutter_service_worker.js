'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a1fcc65b23755c1be954881cfe892690",
"assets/assets/images/gif/loading.gif": "df11fd9a6d8877dee44973d2c06481eb",
"assets/assets/images/gif/rocket.gif": "756728c72818ee998e0195399ab4ddcf",
"assets/assets/images/png/launcher_icon.png": "cd489d7f62fd952ef6e76793553243d0",
"assets/assets/images/svg/add_table.svg": "3be04f76afb950a5e06f7af130c17190",
"assets/assets/images/svg/bigposs_login_logo_title.svg": "772a50de284aba8d9aea112019353647",
"assets/assets/images/svg/cancel.svg": "301af41e6c83cec554e4633f6ed94571",
"assets/assets/images/svg/change.svg": "82fbc090be29081ff5bde5bbd13aa9d4",
"assets/assets/images/svg/clear_table.svg": "5e7852dbe8fd64c64fe2be05e724387a",
"assets/assets/images/svg/clock.svg": "f4805a024171a708010b5e2fa03ab12e",
"assets/assets/images/svg/combine_table.svg": "e33e08e630540c88f69c3120e5c00deb",
"assets/assets/images/svg/delete.svg": "08087329a11fc02ee54a8cd7250469ee",
"assets/assets/images/svg/discount.svg": "9aaa165e14a04ee17145e8341335988c",
"assets/assets/images/svg/edit-order.svg": "71fa31eb4ce7e4126624061ccdde0c0e",
"assets/assets/images/svg/edit.svg": "bead83daf9293b7f322924c60d7376c1",
"assets/assets/images/svg/eye.svg": "f77c52a2149a8aec4ff6a9a89e2e22e2",
"assets/assets/images/svg/hide.svg": "b377319002474861caaab5a3f6bdf9eb",
"assets/assets/images/svg/image_left_list.svg": "d164b7fd44df2bb34a466cddb3f53d95",
"assets/assets/images/svg/image_top_list.svg": "1dcedbe9b459a928229687c542684b1d",
"assets/assets/images/svg/invoice.svg": "c10252050eb7d242b18e10429437d250",
"assets/assets/images/svg/no_image_list.svg": "59cd3c104e92888e31d1baed48e37a94",
"assets/assets/images/svg/operations.svg": "5ce81d26b809fb55b140059fdc028f94",
"assets/assets/images/svg/paymentIllustration.svg": "09de4b42ef229baf9a5d66195ddccc25",
"assets/assets/images/svg/payment_comfirmed.svg": "cdd44cc96b3ffca3dae17061a278725b",
"assets/assets/images/svg/post-it.svg": "f730786238a4e533abd95bbde92b2572",
"assets/assets/images/svg/print.svg": "db075b3c829cbc39cca43b01783ab778",
"assets/assets/images/svg/reserved.svg": "2b495843e48859fd23d7c961580669d4",
"assets/assets/images/svg/restaurant.svg": "55b047a9f0df285153eb5b9bbc7b77fa",
"assets/assets/images/svg/rozet_1.svg": "9585ec0a4ce1e72a83ee64be31282d41",
"assets/assets/images/svg/rozet_2.svg": "5f6b66574c5368ae3ef6f0fd0830799e",
"assets/assets/images/svg/rozet_3.svg": "8b08617d70b3721851e7e1c0af8f8853",
"assets/assets/images/svg/rozet_4.svg": "77046052a54d82265656f7d25489213a",
"assets/assets/images/svg/separate_table.svg": "e8a656050d8f35adc3817cd1b76fb503",
"assets/assets/images/svg/serving_hand.svg": "f47f451b5ed19b3443d78b540f0fdfe5",
"assets/assets/images/svg/settings_table.svg": "bc0ecb4a647262a97e271f5e3b5cdb1f",
"assets/assets/images/svg/shopping-list.svg": "26b2a7767adfe8a84c80bb35f583bd9f",
"assets/assets/images/svg/splash_bottom_logo.svg": "12ebdd0cb0baba4d9072d3cca2c95d4c",
"assets/assets/images/svg/square.svg": "22c6aaf8006833456bbb186da184988f",
"assets/assets/images/svg/table-color.svg": "3592f766c1b59d0e6616ff83f93057c5",
"assets/assets/images/svg/table.svg": "8a3ab0d140867b29691225beb67237dd",
"assets/assets/images/svg/table_and_back_button.svg": "16b33b0845e02a43e228a0534bb0f5a3",
"assets/assets/images/svg/toque.svg": "b75b448d4972ad1586fec7e77cfebeae",
"assets/assets/images/svg/transfer_table.svg": "b3fa99ad6a782a8a66ae37be606c8186",
"assets/assets/images/svg/update_version.svg": "83a3bf9c68653bbd42f776a4ac9430cd",
"assets/assets/images/svg/update_version_mobil.svg": "6ed221d014a2ff387d641b181f9ac38d",
"assets/assets/images/svg/user.svg": "47be60baa8a7281a95b735338d2d4b18",
"assets/assets/images/svg/waiter.svg": "68c79a9c65142a8b5b0069a888055917",
"assets/assets/images/svg/waiter_waitress.svg": "154818356705128dddd549f66b9e154e",
"assets/assets/images/svg/waitress.svg": "646a81a2faf87830126757c1d07840b0",
"assets/assets/images/svg/writing.svg": "efcb21b9c9476a61a6cdfdf462a5223a",
"assets/assets/images/svg/zoom_icon.svg": "dd5264ff24881394938b8aea7edbd8e4",
"assets/environments/prod.env": "45edae868c76c95dc8652b5c75a8f0b1",
"assets/environments/stage.env": "45edae868c76c95dc8652b5c75a8f0b1",
"assets/environments/test.env": "45edae868c76c95dc8652b5c75a8f0b1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "712cf689410ac6cbccae106d9c6a06e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/esc_pos_utils/resources/capabilities.json": "ae5c3288b81125ab9c54fff02d30387e",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "ab9ba59aa2f83ff3f202c2f3bf9e2c57",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "abfd7c9c2822c8c0e3be1c2afb448edb",
"/": "abfd7c9c2822c8c0e3be1c2afb448edb",
"main.dart.js": "14f0e272e11398f95cb98d5698792a54",
"manifest.json": "e3a95ff3a04009bd3a08f925701622f8",
"splash/style.css": "c3b753869cd542e75ec3ca02ea2c12f7",
"version.json": "1aec3ebe7bcce8a68de0d1191bb08942"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
