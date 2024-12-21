<script>
    import { onMount } from "svelte";
    import "ol/ol.css";
    import { Map, Tile, View } from "ol";
    import * as olProj from "ol/proj";
    import TileLayer from "ol/layer/Tile";
    import ImageLayer from "ol/layer/Image";
    import OSM from "ol/source/OSM";
    import Static from "ol/source/ImageStatic";
    import { XYZ } from "ol/source";

    /**
     * @type {Map}
     */
    let map;
    let beforeLayer, afterLayer;
    let sliderValue = 50; // Default slider value for opacity
    // {
    //   name: 'Mountain Survey',
    //   center: olProj.fromLonLat([174.750, -36.830]),
    //   zoom: 15,
    // },

    onMount(() => {
        map = new Map({
            target: "map", // The div ID where the map will render
            layers: [
                // Base Layer: OpenStreetMap
                new TileLayer({
                    source: new OSM(),
                }),

                // GeoTIFF Layer or Custom Tiles
                beforeLayer = new TileLayer({
                    source: new XYZ({
                        url: "/site-tracking/before_tiles/{z}/{x}/{-y}.png",
                        wrapX: true,
                    }),
                }),

                afterLayer = new TileLayer({
                    source: new XYZ({
                        url: "/site-tracking/after_tiles/{z}/{x}/{-y}.png",
                        wrapX: true,
                    }),
                    opacity: sliderValue / 100, // Initialize opacity
                }),
            ],
            view: new View({
                center: [19451683.86, -4413250.92], // Use appropriate coordinates
                zoom: 22,
            }),
        });
        const slider = document.getElementById("slider");
        slider.addEventListener("input", (event) => {
            afterLayer.setOpacity(event.target.value / 100);
        });
    });
</script>

<div id="map">
    <div class="overlay"></div>

    <input id="slider" type="range" min="0" max="100" value="50" on:input="{(e) => (sliderValue = e.target.value)}" />
    <!-- Home Button -->
    <a class="home-button" href="/">Home</a>
</div>

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

    #slider {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        width: 300px;
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
