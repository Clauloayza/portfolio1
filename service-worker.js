"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","2f77cdf0ad3074509e4627e3fe45943f"],["/static/css/main.1c87d05d.css","043443e87445474944a660916856cb93"],["/static/js/main.3245dc97.js","4975a36ba5f8f1d159030219a62bda4c"],["/static/media/biciLocas.b3c3a493.png","b3c3a4937a1f5d8dd5d222a015821f19"],["/static/media/claucv.842ba13e.pdf","842ba13ec7ca4dd8aced38cd6d80e823"],["/static/media/hackerApi.cdba83c8.png","cdba83c835b924540612aac3673aadf6"],["/static/media/herramientas.507990e2.jpg","507990e2dc28fad822c98a065cd398c4"],["/static/media/lyft.996c60b8.png","996c60b87019ed370fefae1a279972c5"],["/static/media/me.77722fec.jpg","77722fec1af6ad3a069949546ef272ba"],["/static/media/portada3.2a96b867.jpg","2a96b8673b3122fd0c0cc950ca6f7a9b"],["/static/media/portfolio.63a5d845.png","63a5d84546ff10c228a68f43e04dbb1a"],["/static/media/registrationApp.e844e3f2.png","e844e3f2685d0b81970c3846ca38e734"],["/static/media/routing.dcf50903.png","dcf5090390c513387c9196171703bf8f"],["/static/media/scoreboard.96cd8c4d.png","96cd8c4d39693eb1d7203ea6b34272c5"],["/static/media/triviamvc.3c3ef10d.png","3c3ef10dc4e1202fc6d4dc7bb3b626a8"],["/static/media/whatsapp.cd6c1d4c.png","cd6c1d4c03d55b306a7b9910fc8cda84"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});