# Readme
1) Add leaflet css and script to the `index.html` file.

```
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css"
  integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ=="
  crossorigin=""/>
```

```
<!-- Make sure you put this AFTER Leaflet's CSS -->
<script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"
  integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw=="
  crossorigin=""></script>
```

2) Add div element and some CSS styles for the map element

```
 <div id="mapid"></div>
```

```
 #mapid { height: 180px; }
```

3) Add the following script to the `script.js` file

```
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
```

4) This is how you add map markers the `[0, 0]` are the X and Y coordinates, you need to add this under the `map` variable.

```
var marker = L.marker([0, 0]).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();
```


# Made by
[Stef Kors](http://www.stefkors.com )
2018
