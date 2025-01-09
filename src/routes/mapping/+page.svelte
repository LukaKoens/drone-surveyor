<script>
  import { onMount } from 'svelte';
  import 'ol/ol.css';
  import { Map, View } from 'ol';
  import * as olProj from 'ol/proj';
  import TileLayer from 'ol/layer/Tile';
  import XYZ from 'ol/source/XYZ';
  import OSM from 'ol/source/OSM';

  /**
     * @type {Map}
     */
  let map;
  let mapExtent = [174.720604,-36.820171,174.765264,-36.796021]
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
        center: [19451604.13,-4413351.34], // Use appropriate coordinates
        zoom: 18,
        
      }),
    });
  });
</script>

<style>
  #map {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .overlay {
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(255, 255, 255, 0.9);
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    max-width: 500px;
  }

  .overlay h3 {
    margin: 0 0 1rem;
    font-size: 1rem;
    text-align: center;
  }

  .flight-info {
    margin-top: 1rem;
    font-size: 0.9rem;
    text-align: center;
  }

  .location-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
  }

  .location-buttons button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .location-buttons button:hover {
    background-color: #0056b3;
  }


  /* Home Button */
  .home-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transition: background-color 0.3s;
    text-decoration: none;
  }

  .home-button:hover {
    background-color: #0056b3;
  }
</style>

<div id="map">

    <!-- Home Button -->
    <a class="home-button" href="/">Home</a>
</div>