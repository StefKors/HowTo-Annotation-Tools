# Readme
## Stap 1
Maak een nieuw html bestand en Voeg het Leaflet css en .js bestand toe aan een `index.html` file.

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css"
  integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ=="
  crossorigin=""/>
```

```html
<!-- Make sure you put this AFTER Leaflet's CSS -->
<script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"
  integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw=="
  crossorigin=""></script>
```


Het gehele `index.html` bestand:

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <title>HowTo</title>

    <link rel="stylesheet" href="style.css" media="screen" title="no title">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==" crossorigin="" />

    <script src="jquery.js"></script>
    <script src="script.js" charset="utf-8"></script>
    <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js" integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw==" crossorigin=""></script>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

  </head>

  <body>
  </body>

</html>
```

## Stap 2
Voeg een div element en css toe aan voor het kaart element.

```html
 <div id="mapid"></div>
```

```css
 #mapid { height: 180px; }
```

## Stap 3
Voeg de volgende code toe aan de script file

```javascript
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


# Made by
[Stef Kors](http://www.stefkors.com )
2018
