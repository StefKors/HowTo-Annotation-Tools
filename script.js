window.onload = function() {
  // Using leaflet.js to pan and zoom a big image.
  // See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html


  // create the slippy map
  var map = L.map('mapid', {
    minZoom: 1,
    maxZoom: 4,
    center: [0, 0],
    zoom: 1,
    crs: L.CRS.Simple
  });

  // dimensions of the image
  var w = 2000,
      h = 1500,
      url = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg';

  var myIcon = L.icon({
    iconUrl: 'arrow.png',
    iconSize: [28, 41],
    iconAnchor: [14, 41],
    popupAnchor: [0, -43],
  });

  var myPopup = L.tooltip({
    opacity: 0.2
  });

  var marker = L.marker([0, 0], {icon: myIcon}).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();


  // calculate the edges of the image, in coordinate space
  var southWest = map.unproject([0, h], map.getMaxZoom()-1);
  var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
  var bounds = new L.LatLngBounds(southWest, northEast);

  // add the image overlay,
  // so that it covers the entire map
  L.imageOverlay(url, bounds).addTo(map);

  // tell leaflet that the map is exactly as big as the image
  map.setMaxBounds(bounds);
};
