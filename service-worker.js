/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "958523c9f69b2bc17d3977bd4fc3d9a2"
  },
  {
    "url": "accumulate/index.html",
    "revision": "c1c81d12e98ca397383c81a6175d38c2"
  },
  {
    "url": "algorithm/index.html",
    "revision": "0c158b07bcb774da6f358617e96a7a1c"
  },
  {
    "url": "assets/css/0.styles.61c7acb5.css",
    "revision": "4323bac446eb6bba0eae56e8fc5a8a35"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.9802a842.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.d799a74f.js",
    "revision": "79d535a9dd7f81156e73c93b63860feb"
  },
  {
    "url": "assets/js/4.9778e2a6.js",
    "revision": "0ec7a0c397ca05efbe3f6a678e620d48"
  },
  {
    "url": "assets/js/5.5d1de3a0.js",
    "revision": "2b7d2dba8c3f812c3c2732a9a74b7e2d"
  },
  {
    "url": "assets/js/6.024b95a0.js",
    "revision": "45629aab8c4f7da6d91ad230b4f47c94"
  },
  {
    "url": "assets/js/7.e7b3631b.js",
    "revision": "3803aa4625b66eb33a316c4938baf13a"
  },
  {
    "url": "assets/js/8.2a736532.js",
    "revision": "96e584c7b994a13aa55791c93c33f368"
  },
  {
    "url": "assets/js/app.896be0cd.js",
    "revision": "2c2b80197b33661d2605303700c95f8f"
  },
  {
    "url": "guide.html",
    "revision": "12c5abc5ba3cb85ee9d543e6b04e0d58"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "147b614b749eae17e03fc11aeb607614"
  },
  {
    "url": "others/index.html",
    "revision": "8b1ca9c2c4fcec657d2d0881212ee1b6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
