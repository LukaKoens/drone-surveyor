<script>
  import { onMount } from 'svelte';
  import 'ol/ol.css';
  import { Map, View } from 'ol';
  import * as olProj from 'ol/proj';
  import TileLayer from 'ol/layer/Tile';
  import XYZ from 'ol/source/XYZ';
  import OSM from 'ol/source/OSM';

  let map;
  let mapExtent = [174.73217961424615,-36.81623890464144,174.73961033745633,-36.81287946841008]
  let defaultExtent = olProj.transformExtent(mapExtent, 'EPSG:4326', 'EPSG:3857')

  onMount(() => {
    map = new Map({
      target: 'map', // The div ID where the map will render
      layers: [
        // Base Layer: OpenStreetMap
        new TileLayer({
          source: new OSM(),
        }),

        // GeoTIFF Layer or Custom Tiles
        new TileLayer({
          source: new XYZ({
            projection: 'EPSG:3857',
            url: '/tiles/{z}/{x}/{-y}.png', // Path to your tiles\
            wrapX: true,
          }),
          extent:defaultExtent
        }),

      ],
      view: new View({
        center: [19452784.22599327, -4414888.05648541], // Use appropriate coordinates
        zoom: 15,
        
      }),
    });
  });
</script>

<style>
  #map {
    width: 100%;
    height: 100vh;
  }
</style>

<div id="map"></div>