<script>
    import Map from '$lib/components/Map.svelte'
    import Contact from '$lib/components/Contact.svelte'

    import {
        Home,
        Maximize,
    } from "lucide-svelte";

    // Location points data with tile layer references

    let droneProjects = [
        {
            id: 1,
            title: "Slip Modeling",
            description:
                "Photogrammetry modeling of slip sites in Le Roys Bush",
            type: "3d model",
            thumbnail: "/slipModel_thumb.jppm g",
            date: "2024-10",
            // External link to Sketchfab, GitHub, or dedicated project page
            externalUrl:
                "/3D",
            // Alternative: internal page
            // externalUrl: "/projects/slip-modeling"
        },
        {
            id: 2,
            title: "WIP - Temporal Site Tracking.",
            description:
                "I'm currently working on a number of different projects for local volunteer groups, building a collection of visits to various weeding sites as they've been, linked is story map discussing some of my work in this space.",
            type: "orthomosaic",
            thumbnail: "/temporalTracking_thumb.JPG",
            date: "2024-06 -> Present",
            // External link to research paper, data portal, or project documentation
            externalUrl: "https://arcg.is/1iH5an",
            // Alternative: internal page
            // externalUrl: "/projects/mangrove-encroachment"
        },

    ];
</script>

<svelte:head>
    <title>UAV/Drone Analysis - Luka Koens</title>
    <meta
        name="description"
        content="Professional drone services for aerial mapping, surveying, and data collection"
    />
</svelte:head>

<!-- Hero Section -->
<section class="hero">

    <a
        href="/"
        rel="external"
        class="home-btn"
        title="Return Home"
        >
        <Home size={20} class="home-icon" />
    </a>

    <div class="hero-content">
        <h1>UAV / Drone Analysis</h1>
        <p>Aerial mapping, surveying, and data collection services</p>
    </div>

    <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
    </div>
</section>

<section class="map-section">
    <h2>Interactive Map</h2>
    <p class="section-subtitle"> 
        Explore orthomosaics from a number of the sites I've documented and compiled for web viewing
    </p>
    <Map></Map>
</section>

<!--  Project Gallery with External Links -->
<section class="gallery">
    <div class="container">
        <h2>Project Gallery</h2>
        <p class="section-subtitle">
            Browse through some drone analysis projects
        </p>

        <div class="project-grid">
            {#each droneProjects as project}
                <a class="project-card" href={project.externalUrl}>
                    <div class="project-thumbnail">
                        <img src={project.thumbnail} alt={project.title} />
                        <div class="project-overlay">
                            <div class="project-type">{project.type}</div>
                            <div class="project-date">{project.date}</div>
                            <!-- External link indicator -->
                        </div>
                    </div>
                    <div class="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div class="project-actions">
                            <span class="view-project-text"
                                >Click to view project</span
                            >
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>


<!-- Methodologies & Goals Section -->
<section class="methodologies-goals">
    <div class="container">
        <h2>Methodologies & Goals</h2>
        <p class="section-subtitle">
            Currently I do not have high tech equipment, with all the imagery captured using just a DJI mini 2 se, a very accessible budget drone.<br><br>
            A large part of my work revolves around exploring how this tech can be leveraged by community volunteer groups, to enable and empower them to perform similar data collection using accessible equipment and software.
        </p>

        <div class="method-content">
            <div class="method-block">
                <h3>Methodologies</h3>
                <ul>
                    <li>Low-altitude orthomosaic imaging using consumer UAVs and manual flights</li>
                    <li>Image processing with OpenDroneMap & QGIS</li>
                    <li>Tile-based hosting for fast web visualization</li>
                    <li>Regular monitoring to assess temporal change after volunteer work</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<Contact></Contact>

<style>
    /* === GLOBAL STYLES === */
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        background: #0a0a0a;
        color: #ffffff;
    }

    /* === UTILITY CLASSES === */
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .section-subtitle {
        color: rgba(255, 255, 255, 0.75);
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    /* === HERO SECTION === */
    .hero {
        height: 100vh;
        background-image: url("/uav_bg.JPG");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    .hero-content {
        position: relative;
        z-index: 2;
        padding: 2rem;
        max-width: 800px;
        width: 100%;
    }

    .hero h1 {
        font-size: clamp(2.8rem, 6vw, 4.5rem);
        font-weight: 800;
        margin-bottom: 1.2rem;
        color: #ffffff;
        letter-spacing: -0.02em;
        line-height: 1.1;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 0, 0, 0.4);
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    }

    .hero p {
        font-size: clamp(1.2rem, 2.5vw, 1.4rem);
        margin-bottom: 2.5rem;
        color: #f8f8f8;
        font-weight: 400;
        line-height: 1.6;
        letter-spacing: 0.01em;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7), 0 0 15px rgba(0, 0, 0, 0.5);
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }

    /* === NAVIGATION === */
    .home-btn {
        position: absolute;
        top: 2rem;
        left: 2rem;
        background: rgba(15, 15, 15, 0.9);
        backdrop-filter: blur(20px);
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50px;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        text-decoration: none;
        z-index: 10;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }

    .home-btn:hover {
        background: rgba(100, 181, 246, 0.15);
        border-color: rgba(100, 181, 246, 0.5);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(100, 181, 246, 0.2);
    }

    /* === SCROLL INDICATOR === */
    .scroll-indicator {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3;
        animation: bounce 2s infinite;
        filter: drop-shadow(1em 10px 10px rgba(0, 0, 0, 0.7));
    }

    .scroll-arrow {
        width: 24px;
        height: 24px;
        border-right: 4px solid rgba(255, 255, 255, 0.7);
        border-bottom: 4px solid rgba(255, 255, 255, 0.7);
        transform: rotate(45deg);
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
        }
        40% {
            transform: translateX(-50%) translateY(-10px);
        }
        60% {
            transform: translateX(-50%) translateY(-5px);
        }
    }

    .map-section h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        text-align: center;
        color: #ffffff;
    }

    .section-subtitle {
        color: rgba(255, 255, 255, 0.75);
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
        text-align: center;
    }

    /* === GALLERY SECTION === */
    .gallery {
        padding: 5rem 0;
        background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    }

    .gallery h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        text-align: center;
        color: #ffffff;
    }

    .project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }

    .project-card {
        display: flex;
        flex-direction: column;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        text-decoration: none;
        color: inherit;
    }

    .project-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 40px rgba(100, 181, 246, 0.3);
        border-color: rgba(100, 181, 246, 0.4);
    }

    .project-thumbnail {
        position: relative;
        height: 200px;
        background: #2a2a2a;
        overflow: hidden;
    }

    .project-thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .project-overlay {
        position: absolute;
        top: 1rem;
        right: 1rem;
        display: flex;
        gap: 0.5rem;
        z-index: 2;
    }

    .project-type,
    .project-date {
        background: rgba(0, 0, 0, 0.7);
        padding: 0.3rem 0.6rem;
        border-radius: 15px;
        font-size: 0.8rem;
        backdrop-filter: blur(5px);
    }

    .project-info {
        padding: 2rem;
    }

    .project-info h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.3rem;
        color: #ffffff;
    }

    .project-info p {
        color: rgba(255, 255, 255, 0.75);
        font-size: 0.9rem;
        line-height: 1.5;
        margin-bottom: 1rem;
    }

    .project-actions {
        font-size: 0.85rem;
        color: #64b5f6;
        opacity: 0.85;
        transition: opacity 0.3s ease;
    }

    .project-card:hover .project-actions {
        opacity: 1;
    }

    /* === METHODOLOGIES & GOALS SECTION === */
    .methodologies-goals {
        padding: 5rem 0;
        background: #101010;
    }

    .methodologies-goals h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        text-align: center;
        color: #ffffff;
    }

    .method-content {
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;
        margin-top: 2rem;
    }

    .method-block {
        flex: 1 1 45%;
        background: rgba(255, 255, 255, 0.02);
        padding: 2rem;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .method-block h3 {
        color: #64b5f6;
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    .method-block ul {
        list-style: disc;
        padding-left: 1.5rem;
        color: rgba(255, 255, 255, 0.85);
    }

    .method-block li {
        margin-bottom: 0.75rem;
        font-size: 0.9rem;
        line-height: 1.5;
    }

    /* === RESPONSIVE DESIGN === */
    @media (max-width: 768px) {
        .container {
            padding: 0 1rem;
        }

        .project-grid {
            grid-template-columns: 1fr;
        }

        .method-content {
            flex-direction: column;
        }

        .method-block {
            flex: 1 1 100%;
        }

        .home-btn {
            top: 1rem;
            left: 1rem;
        }
    }
</style>