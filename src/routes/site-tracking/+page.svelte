<script>
    import { onMount } from "svelte";
    import "ol/ol.css";
    import { Map, View } from "ol";
    import TileLayer from "ol/layer/Tile";
    import OSM from "ol/source/OSM";
    import { XYZ } from "ol/source";

    /**
     * @type {Map}
     */
    let map;
    let beforeLayer, afterLayer;
    let sliderValue = 50; // Default slider value for opacity
    let mapWidth; // Map width in pixels

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
                (beforeLayer = new TileLayer({
                    source: new XYZ({
                        url: "/site-tracking/before_tiles/{z}/{x}/{-y}.png",
                        wrapX: true,
                    }),
                })),

                (afterLayer = new TileLayer({
                    source: new XYZ({
                        url: "/site-tracking/after_tiles/{z}/{x}/{-y}.png",
                        wrapX: true,
                    }),
                })),
            ],
            view: new View({
                center: [19451683.86, -4413250.92], // Use appropriate coordinates
                zoom: 22,
            }),
        });
        // Add the clip bar
        const clipBar = document.createElement("div");
        clipBar.className = "clip-bar";
        document.getElementById("map").appendChild(clipBar);
        mapWidth = document.getElementById("map")?.clientWidth
        console.log(mapWidth)


        const slider = document.getElementById("slider");

        const updateClip = (event) => {
            const value = event.target.value; // Slider value (0 to 100)
            const clipX = (value/100) * mapWidth;

            clipBar.style.left = `${clipX}px`;

            afterLayer.on("prerender", (evt) => {
                const context = evt.context;
                const width = context.canvas.width;
                const height = context.canvas.height;


                context.restore();
                context.save();
                context.beginPath();
                context.rect(clipX, 0, width , height);
                context.clip();
            });

            afterLayer.on("postrender", (evt) => {
                evt.context.restore();
            });

            map.render(); // Trigger a re-render to apply changes
        };

        slider.addEventListener("input", updateClip);
    });
</script>

<div id="map">
    <div class="clip-bar" style="left: {(sliderValue/100)*mapWidth}px"></div>
    <input
        id="slider"
        type="range"
        min="0"
        max="100"
        bind:value={sliderValue}
    />
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
        width: 100%;
        margin-top: 10px;
    }

    .clip-bar {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 2px;
        background-color: red;
        z-index: 10;
        pointer-events: none;
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
