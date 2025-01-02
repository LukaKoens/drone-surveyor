<script>
    import { onMount } from "svelte";
    import "ol/ol.css";
    import { Map, View } from "ol";
    import TileLayer from "ol/layer/Tile";
    import OSM from "ol/source/OSM";
    import XYZ from "ol/source/XYZ";
    import {getRenderPixel} from 'ol/render.js';

    let map;
    let beforeLayer, afterLayer;
    let isDragging = false;
    let dragX = 0; // Position of the cut line in pixels
    let mapWidth = 0;

    let left = 100;

    let moving = false;

    // 	$: console.log(moving);

    onMount(() => {
        const mapElement = document.getElementById("map");

        // Initialize the map
        map = new Map({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
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
                center: [19451683.86, -4413250.92],
                zoom: 22,
            }),
        });

        // Get the width of the map container
        mapWidth = mapElement.clientWidth;
        const rect = mapElement.getBoundingClientRect();

        let clipX = mapWidth / 2; // Start the button at the center

        const dragbutton = document.getElementById("draggable");
        dragbutton?.addEventListener("mousedown", () => {
            moving = true;
        });

        document.addEventListener("mousemove", (e) => {
            if (moving) {
                console.log(left);
                left += e.movementX;
                if (left <= 0) {
                    left = 0;
                } else if (left >= mapWidth - 10) {
                    left = mapWidth - 10;
                }
            }
            clipX = left - rect.left;

            afterLayer.on("prerender", (evt) => {
                const context = evt.context;
                const mapSize = map.getSize();

                const width =left;
                const height = context.canvas.height;
                const tl = getRenderPixel(evt, [width, 0]);
                const tr = getRenderPixel(evt, [mapSize[0], 0]);
                const bl = getRenderPixel(evt, [width, mapSize[1]]);
                const br = getRenderPixel(evt, mapSize);

                context.restore();
                context.save();
                context.beginPath();
                context.moveTo(tl[0], tl[1]);
                context.lineTo(bl[0], bl[1]);
                context.lineTo(br[0], br[1]);
                context.lineTo(tr[0], tr[1]);
                context.closePath();
                context.clip();
            });

            afterLayer.on("postrender", (evt) => {
                evt.context.restore();
            });

            map.render();
        });
        document.addEventListener("mouseup", () => {
            moving = false;
        });
        // Add the drag button
    });
</script>
<a class="home-button" href="/">Home</a>

<div id="map">
    <div style="left: {left}px" id="draggable"></div>
</div>

<style>
    #map {
        width: 100%;
        height: 100vh;
        position: relative;
    }

    #draggable {
        width: 10px;
        height: 100%;
        user-select: none;
        /* cursor: move; */
        cursor: ew-resize;
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
        background-color: gray;
        position: absolute;
        z-index: 1000;
    }
    .home-button {
    position: absolute;
    top: 2rem;
    right: 2rem;
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
