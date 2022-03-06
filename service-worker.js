/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/0.823d95d38411f7e86596.bundle.js","4f660fcf157e0ecfaea15b5999c20eb6"],["/0.823d95d38411f7e86596.bundle.js.LICENSE.txt","e4a0d87becbcc6d09668875fe197b50f"],["/3.823d95d38411f7e86596.bundle.js","2b50a0cfc915233cd3d2394c22e6e10c"],["/38f8c9d4456dfcc22f4f4261ff56d2de.png","38f8c9d4456dfcc22f4f4261ff56d2de"],["/4.823d95d38411f7e86596.bundle.js","39532b40f91b7be09d25b8c116816fc0"],["/4.823d95d38411f7e86596.bundle.js.LICENSE.txt","81896c98bac7b5b16ab1d3790da5b937"],["/5.823d95d38411f7e86596.bundle.js","08e474df4e8d41cb918bc911b3a0b102"],["/6.823d95d38411f7e86596.bundle.js","ba71ce5103c6f20d9523ca084f658607"],["/6607d946018e934b0a97e2b24a576a93.svg","6607d946018e934b0a97e2b24a576a93"],["/7.823d95d38411f7e86596.bundle.js","3b326d15112f735e442cc112fea74b63"],["/8.823d95d38411f7e86596.bundle.js","530b31cc807c1fc02dfee3e936d43955"],["/94a31e46c7d6860641a72085ee724e12.svg","94a31e46c7d6860641a72085ee724e12"],["/assets/android-chrome-144x144.png","4c997e112d0a24afb45bd86f663a6aaf"],["/assets/android-chrome-192x192.png","2451a485855aad21d0bd24b1e65438bf"],["/assets/android-chrome-256x256.png","52b50d4ea00108353fc0d2cf3612f62f"],["/assets/android-chrome-36x36.png","ae79cb329269aaa1fbb23c7fab1849e6"],["/assets/android-chrome-384x384.png","6493acb7f5a994734d06d7a177031080"],["/assets/android-chrome-48x48.png","a265521fc8de96bf0b6a13e1cad556eb"],["/assets/android-chrome-512x512.png","5566142ea81cc61aa655b506eaea7af5"],["/assets/android-chrome-72x72.png","54b76b9a82f87cbbf3f885658526301c"],["/assets/android-chrome-96x96.png","108d3ffce957d3f501b22a125699d3ca"],["/assets/apple-touch-icon-1024x1024.png","e6812711eb822566765683912f2c295f"],["/assets/apple-touch-icon-114x114.png","030715a6464025f4f2a12d30c2f8bd1c"],["/assets/apple-touch-icon-120x120.png","1fc51b08c946d40737df7f900d9d48c0"],["/assets/apple-touch-icon-144x144.png","76a0fa5991eedeeca0a1974d27ec40ea"],["/assets/apple-touch-icon-152x152.png","dcb05406c2036fd867f28d265270c942"],["/assets/apple-touch-icon-167x167.png","8486a96716ead6dd3ab44836319967b1"],["/assets/apple-touch-icon-180x180.png","6af5853ff77a69db5d8fd5c6d9fd171a"],["/assets/apple-touch-icon-57x57.png","0a52efbc26bad46a35e73538b7f07632"],["/assets/apple-touch-icon-60x60.png","4eee1404f6bb98c56bb78314f693a681"],["/assets/apple-touch-icon-72x72.png","6a3a733d51e2d53d123a0255f99d573f"],["/assets/apple-touch-icon-76x76.png","620f45dc32f2c16cec769f7383e397b7"],["/assets/apple-touch-icon-precomposed.png","6af5853ff77a69db5d8fd5c6d9fd171a"],["/assets/apple-touch-icon.png","6af5853ff77a69db5d8fd5c6d9fd171a"],["/assets/apple-touch-startup-image-1125x2436.png","3ace68e8f91a69c8d57642c042f0899b"],["/assets/apple-touch-startup-image-1136x640.png","54a3af1dd6401f9cdde04ef4cf7eb54c"],["/assets/apple-touch-startup-image-1242x2208.png","5eeb4e1d174f7fc6fe7b1bca6a3a3492"],["/assets/apple-touch-startup-image-1242x2688.png","c0391d32d07547e01366f73790a0de48"],["/assets/apple-touch-startup-image-1334x750.png","c829fe61c26cf95cc0086016703489d1"],["/assets/apple-touch-startup-image-1536x2048.png","9dd0f95a2aef4acbfcf883cea67daee2"],["/assets/apple-touch-startup-image-1620x2160.png","14724cfeb5410ed19a3d550cb7876121"],["/assets/apple-touch-startup-image-1668x2224.png","bb74c8334e4938a60da6e3bc4146cffc"],["/assets/apple-touch-startup-image-1668x2388.png","1e1da15142542de74c9d1e4951b36d82"],["/assets/apple-touch-startup-image-1792x828.png","4788e37d053e9a8b1325f6336910ca63"],["/assets/apple-touch-startup-image-2048x1536.png","3aefcb3b044651682700e50736ec7b90"],["/assets/apple-touch-startup-image-2048x2732.png","dce466f628fc99703c80cfbe0db54f94"],["/assets/apple-touch-startup-image-2160x1620.png","585917be31a86676ac08d0d8a3d0be35"],["/assets/apple-touch-startup-image-2208x1242.png","6ecc6d971ca2b36debd65ed39f2e5009"],["/assets/apple-touch-startup-image-2224x1668.png","3ba28b20e7e67885cda33b0c20f86c48"],["/assets/apple-touch-startup-image-2388x1668.png","2ab2453ee3081cd5b263831bef6eec5f"],["/assets/apple-touch-startup-image-2436x1125.png","e9e22ceb8d6fd21a452ae0a7220c58c5"],["/assets/apple-touch-startup-image-2688x1242.png","effe9293b26c28a7806ea251e24d6c8c"],["/assets/apple-touch-startup-image-2732x2048.png","dc9f03fef5edb6f3cf25f3cf362ade8c"],["/assets/apple-touch-startup-image-640x1136.png","85159908c5faa4300655d5cc3b53b824"],["/assets/apple-touch-startup-image-750x1334.png","9e33a2c4ea7c8a73d5afeeb9d339c281"],["/assets/apple-touch-startup-image-828x1792.png","3a7b607655063fbe0287699f67397e50"],["/assets/browserconfig.xml","99164bf33e930bafa6bbcd92a1579b9e"],["/assets/coast-228x228.png","f2bca630dbc25dbf3a5381c10d67fb95"],["/assets/favicon-16x16.png","fff6a5bdcf1d8f0b0aab16c820d14acd"],["/assets/favicon-32x32.png","8230759e24ad0f1c619f3c1ad9023c61"],["/assets/favicon-48x48.png","a265521fc8de96bf0b6a13e1cad556eb"],["/assets/favicon.ico","45ba07c20e12ef4376707d99e1001fe1"],["/assets/firefox_app_128x128.png","467eaddc85f0adc8c08b11d5f9c50c85"],["/assets/firefox_app_512x512.png","78611c694110149adabb296d291c977d"],["/assets/firefox_app_60x60.png","d4950e85394142ae3f99a5eca1768db2"],["/assets/manifest.json","5186bf983fb48c049e5df6825eecf680"],["/assets/manifest.webapp","b6202c13153e2b9b401a0710092ec038"],["/assets/mstile-144x144.png","4c997e112d0a24afb45bd86f663a6aaf"],["/assets/mstile-150x150.png","4e84b77ea7b387c904a7d23ea1d757b3"],["/assets/mstile-310x150.png","20e153297aa6c942a03ad3fe03e3480e"],["/assets/mstile-310x310.png","63d3c4a9a8b31fd72b6feafd2cb802ca"],["/assets/mstile-70x70.png","bed7e19d4811c1285d85d2f67c13298a"],["/assets/yandex-browser-50x50.png","2ceba0f27c190b6be97face0b1aca055"],["/assets/yandex-browser-manifest.json","7ec1efcd1e2e424df305daedeeef0c00"],["/d01287e287bb6813e26409bdf860b101.svg","d01287e287bb6813e26409bdf860b101"],["/index.html","2c365336ec6f6734410e9445e22068eb"],["/main.823d95d38411f7e86596.bundle.js","cffebd7e7a5d7bf3dc18b04a4328a6f3"],["/vendors~main.823d95d38411f7e86596.bundle.js","1872d4932487d9461f96f5833cfa7097"],["/vendors~main.823d95d38411f7e86596.bundle.js.LICENSE.txt","c87550333da8df8ab4c80bd1d6e9defb"]];
var cacheName = 'sw-precache-v3-sw-precache-webpack-plugin-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







