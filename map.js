const map = L.map('mymap').setView(
  [51.50831233196794, -0.07725837315492363],
  13
);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.50831233196794, -0.07725837315492363])
  .addTo(map)
  .bindPopup('Currently we are here!')
  .openPopup();
