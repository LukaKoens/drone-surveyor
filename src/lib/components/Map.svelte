<script>
    import { onMount } from "svelte";
    import { Home, Maximize } from "lucide-svelte";

    let locationPoints = [
        {
            id: 1,
            name: "Le Roys Bush Wet Land",
            description:
                "Mapping of the main wetland area in Le Roys Bush Reserve.",
            coordinates: [174.7363582, -36.8145912],
            zoom: 18,
            date: "2024-11",
            active: false,
            tileUrl: "/tiles/lrb_tiles/{z}/{x}/{-y}.png",
            extent: [
                174.7323925923344063, -36.8162048820841648,
                174.7396310398941068, -36.8129420370134852,
            ],
        },
        {
            id: 2,
            name: "Tuff Crater",
            description:
                "An extended project to map out tuff crater, was a good learning experince in mapping out larger more complex regions",
            coordinates: [174.753795, -36.801929],
            zoom: 17,
            date: "2024-12",
            active: false,
            tileUrl: "/tiles/tuff_crater_tiles/{z}/{x}/{-y}.png",
            extent: [
                174.7506067385581616, -36.8046882561862887,
                174.7573549964118627, -36.7991509912179566,
            ],
        },
        {
            id: 3,
            name: "Onepoto domain",
            description:
                "Mapping on Onepoto domain showcasing the pampass grass that is otherwise difficult to see in the established grassland",
            coordinates: [174.7523118, -36.8075986],
            zoom: 19,
            date: "2024-11",
            active: false,
            tileUrl: "/tiles/onepoto_tiles/{z}/{x}/{-y}.png",
            extent: [
                174.7512495885832209, -36.8085739793310225,
                174.7532463838352612, -36.8067508119465501,
            ],
        },
        {
            id: 4,
            name: "Waiarohia Planting Site",
            description:
                "Done on behalf of UWEN, this documents the progress done on restoring a section of wetland within the upper waitemata catchment, this flight needed a lot of planning due to the proximity to whenuapai airbase",
            coordinates: [174.6320712, -36.7997813],
            zoom: 20,
            date: "2025-07",
            active: false,
            tileUrl: "/tiles/waiarohia_tiles/{z}/{x}/{-y}.png",
            extent: [
                174.6317666710622518, -36.8002110542346443,
                174.6326035291993719, -36.7994650129530712,
            ], // Adjust these coordinates
        },
        {
            id: 5,
            name: "Chelsea Heritage Park Refuse Site",
            description:
                "A follow up to a extensive weeding effort by the CHERPA to tackle moth plant, this flight aimed to try and identify any that they had missed, this is likely at the limit of whats fesiable with this type of imagery, but is still a good photo point for future conservation efforts.",
            coordinates: [174.720867, -36.8183132],
            date: "2025-07",
            active: false,
            tileUrl: "/tiles/chp_refuse_tiles/{z}/{x}/{-y}.png",
            extent: [
                174.7201107381571887, -36.8189516293703818,
                174.7215373592291598, -36.8177884878194916,
            ], // Adjust these coordinates
        },
    ];

    /**
     * @param {{ title: any; }} project
     */

    import "ol/ol.css";
    import { Map, View } from "ol";
    import * as olProj from "ol/proj";
    import TileLayer from "ol/layer/Tile";

    import XYZ from "ol/source/XYZ";
    import OSM from "ol/source/OSM";

    /**
     * @type {Map}
     */
    let map;
    /**
     * @type {boolean}
     */
    let showLocations;

    let isFullscreen = false;

    onMount(() => {
        const fullscreenBtn = document.getElementById("fullscreenBtn");
        const mapInterface = document.querySelector(".map-interface");

        // Fullscreen functionality
        if (fullscreenBtn && mapInterface) {
            fullscreenBtn.addEventListener("click", () => {
                if (!isFullscreen) {
                    // Enter fullscreen
                    mapInterface.requestFullscreen();
                } else {
                    // Exit fullscreen
                    document.exitFullscreen();
                }
            });
        }

        // Listen for fullscreen changes
        const handleFullscreenChange = () => {
            isFullscreen = !!document.fullscreenElement;

            // Resize map when entering/exiting fullscreen
            if (map) {
                setTimeout(() => {
                    map.updateSize();
                }, 100);
            }
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);

        // Initialize map
        map = new Map({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [19451604.13, -4413351.34],
                zoom: 18,
            }),
        });
        locationPoints.forEach((location) => {
            const tileLayer = new TileLayer({
                source: new XYZ({
                    projection: "EPSG:3857",
                    url: location.tileUrl,
                    wrapX: true,
                }),
                extent: olProj.transformExtent(
                    location.extent,
                    "EPSG:4326",
                    "EPSG:3857",
                ),
            });

            // Add to map
            map.addLayer(tileLayer);

            console.log(`Added tile layer for ${location.name}`, {});
        });
    });

    // Function to pan to a specific location
    /**
     * @param {{ id: number; name: string; description: string; coordinates: number[]; zoom: number; date: string; active: boolean; tileUrl: string; extent: number[]; } | { id: number; name: string; description: string; coordinates: number[]; date: string; active: boolean; tileUrl: string; extent: number[]; zoom?: undefined; }} location
     */
    function panToLocation(location) {
        // Reset all active states
        locationPoints = locationPoints.map((point) => ({
            ...point,
            active: false,
        }));

        // Set the clicked location as active
        location.active = true;
        locationPoints = [...locationPoints]; // Trigger reactivity

        if (map) {
            // Transform coordinates from EPSG:4326 to EPSG:3857
            const coordinates = olProj.transform(
                [location.coordinates[0], location.coordinates[1]],
                "EPSG:4326",
                "EPSG:3857",
            );

            // Animate pan to the location
            map.getView().animate({
                center: coordinates,
                zoom: location.zoom, // Zoom in closer to the location
                duration: 1000, // 1 second animation
            });
        }

        console.log("Panning to:", location.name, location.coordinates);
    }
</script>

<!-- Interactive Map Section -->
<section class="map-section">
    <div class="container">
        <div class="map-interface">
            <div class="map-container" id="map"></div>

            <!-- Floating controls panel -->
            <div class="map-controls-floating" id="mapControls">
                <div class="controls-header">
                    <h3>Project Locations</h3>
                    <button on:click={() => (showLocations = !showLocations)}>
                        {showLocations ? "Hide" : "Show"}
                    </button>
                </div>

                {#if showLocations}
                    <div class="controls-content">
                        <div class="location-list">
                            {#each locationPoints as location}
                                <button
                                    class="location-item"
                                    class:active={location.active}
                                    on:click={() => panToLocation(location)}
                                >
                                    <div class="location-info">
                                        <h4 class="location-name">
                                            {location.name}
                                            <span class="location-date"
                                                >{location.date}</span
                                            >
                                        </h4>
                                        <p class="location-description">
                                            {location.description}
                                        </p>
                                    </div>
                                    <div class="location-indicator">
                                        <div class="indicator-dot"></div>
                                    </div>
                                </button>
                            {/each}
                        </div>
                    </div>
                {/if}
            </div>

            <!-- Fullscreen button -->
            <button
                class="fullscreen-btn"
                id="fullscreenBtn"
                title="Toggle Fullscreen"
            >
                <Maximize size={20} class="fullscreen-icon" />
            </button>
        </div>
    </div>
</section>

<style>
    /* === MAP SECTION === */
    .map-section {
        padding: 5rem 0;
        background: #101010;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    /* === MAP INTERFACE === */
    .map-interface {
        position: relative;
        height: 80vh;
        min-height: 600px;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
        animation: mapFadeIn 0.6s ease-out;
    }

    .map-container {
        width: 100%;
        height: 100%;
        background: #1a1a1a;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        overflow: hidden;
    }

    @keyframes mapFadeIn {
        from {
            opacity: 0;
            transform: scale(0.98);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    /* === CONTROLS PANEL === */
    .map-controls-floating {
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(15, 15, 15, 0.95);
        backdrop-filter: blur(20px);
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        z-index: 1000;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 320px;
        min-width: 280px;
    }

    .controls-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 1.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(100, 181, 246, 0.1);
        border-radius: 15px 15px 0 0;
    }

    .controls-header h3 {
        margin:0 1em 0 0;
        color: #64b5f6;
        font-size: 1.1rem;
        font-weight: 600;
    }

    .controls-header button {
        background: rgba(100, 181, 246, 0.2);
        border: 1px solid rgba(100, 181, 246, 0.3);
        color: #64b5f6;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.9rem;
    }

    .controls-header button:hover {
        background: rgba(100, 181, 246, 0.3);
        border-color: rgba(100, 181, 246, 0.5);
    }

    /* === FULLSCREEN BUTTON === */
    .fullscreen-btn {
        position: absolute;
        bottom: 20px;
        right: 20px;
        background: rgba(15, 15, 15, 0.9);
        backdrop-filter: blur(10px);
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 999;
        transition: all 0.3s ease;
    }

    .fullscreen-btn:hover {
        background: rgba(100, 181, 246, 0.2);
        border-color: #64b5f6;
        transform: scale(1.05);
    }

    /* === LOCATION LIST === */
    .location-list {
        padding: 1rem;
        margin-bottom: 1.5rem;
        max-height: 400px;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: rgba(100, 181, 246, 0.3) transparent;
    }

    .location-list::-webkit-scrollbar {
        width: 6px;
    }

    .location-list::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 3px;
    }

    .location-list::-webkit-scrollbar-thumb {
        background: rgba(100, 181, 246, 0.3);
        border-radius: 3px;
    }

    .location-list::-webkit-scrollbar-thumb:hover {
        background: rgba(100, 181, 246, 0.5);
    }

    /* === LOCATION ITEMS === */
    .location-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        margin-bottom: 0.75rem;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.08);
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
        width: 100%;
    }

    .location-item::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(100, 181, 246, 0.1), transparent);
        transition: left 0.5s;
        pointer-events: none;
    }

    .location-item:hover::before {
        left: 100%;
    }

    .location-item:hover {
        background: rgba(100, 181, 246, 0.08);
        border-color: rgba(100, 181, 246, 0.3);
        transform: translateX(4px);
        box-shadow: 0 4px 12px rgba(100, 181, 246, 0.1);
    }

    .location-item.active {
        background: rgba(100, 181, 246, 0.15);
        border-color: rgba(100, 181, 246, 0.5);
        transform: translateX(4px);
        box-shadow: 0 4px 16px rgba(100, 181, 246, 0.2);
    }

    .location-info {
        flex: 1;
        min-width: 0;
        text-align: left;
    }

    .location-name {
        margin: 0 0 0.5rem 0;
        font-size: 0.95rem;
        font-weight: 600;
        color: #ffffff;
        line-height: 1.2;
        word-wrap: break-word;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .location-date {
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
    }

    .location-description {
        margin: 0;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    /* === LOCATION INDICATOR === */
    .location-indicator {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        flex-shrink: 0;
    }

    .indicator-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transition: all 0.3s ease;
    }

    .location-item:hover .indicator-dot {
        background: rgba(100, 181, 246, 0.7);
        transform: scale(1.3);
    }

    .location-item.active .indicator-dot {
        background: #64b5f6;
        box-shadow: 0 0 12px rgba(100, 181, 246, 0.6);
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.2);
            opacity: 0.7;
        }
    }

    /* === RESPONSIVE DESIGN === */
    @media (max-width: 768px) {
        .map-section {
            padding: 0;
            margin: 0;
        }

        .map-section .container {
            padding: 0;
        }

        .map-interface {
            width: 100vw;
            height: 100vh;
            border-radius: 0;
            display: flex;
            flex-direction: column;
        }

        .map-container {
            flex: 1;
            border-radius: 0;
        }

        .map-controls-floating {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            top: auto;
            background: rgba(15, 15, 15, 0.95);
            border-radius: 12px 12px 0 0;
            max-height: 50vh;
            overflow-y: auto;
            z-index: 999;
            padding-bottom: 1rem;
            max-width: none;
            min-width: auto;
        }

        .location-list {
            max-height: 30vh;
        }

        .fullscreen-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            bottom: auto;
            z-index: 1000;
        }
    }

    @media (max-width: 480px) {
        .map-interface {
            height: 90vh;
            min-height: 350px;
        }

        .controls-header h3 {
            font-size: 1rem;
        }

        .container {
            padding: 0 1rem;
        }

        .map-section h2 {
            padding-left: 1rem;
        }
    }
</style>