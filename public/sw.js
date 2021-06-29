// self.addEventListener("install", function (e) {
//   e.waitUntil(
//     caches.open("borstil").then(function (cache) {
//       return cache.addAll([
//         "/",
//         "/images/Slider-Image-1.webp",
//         "/images/Slider-Image-2.webp",
//         "/images/Slider-Image-3.webp",
//       ]);
//     })
//   );
// });

// self.addEventListener("fetch", function (event) {
//   //console.log(event.request.url);

//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       return response || fetch(event.request);
//     })
//   );
// });
