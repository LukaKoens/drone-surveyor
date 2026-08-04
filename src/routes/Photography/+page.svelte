<script>
    import Contact from '$lib/components/Contact.svelte'
    import {
        Home,
        X,
        ChevronLeft,
        ChevronRight,
        Camera,
    } from "lucide-svelte";

    /** @type {string} */
    let activeCategory = "all";

    /** @type {number | null} */
    let lightboxIndex = null;

    let categories = [
        { id: "all", label: "All" },
        { id: "landscape", label: "Landscape" },
        { id: "aerial", label: "Aerial" },
        { id: "wildlife", label: "Wildlife" },
        { id: "macro", label: "Macro" },
    ];

    // Replace thumbnail/full paths and details with your own images.
    let photos = [
        {
            id: 1,
            title: "Le Roys Bush, First Light",
            category: "landscape",
            location: "Auckland, NZ",
            date: "2024-05",
            thumbnail: "/photography/leroys-bush_thumb.jpg",
            full: "/photography/leroys-bush_full.jpg",
        },
        {
            id: 2,
            title: "Ridge Line from Above",
            category: "aerial",
            location: "Waitakere Ranges, NZ",
            date: "2024-07",
            thumbnail: "/photography/ridge-aerial_thumb.jpg",
            full: "/photography/ridge-aerial_full.jpg",
        },
        {
            id: 3,
            title: "Tui in the Flax",
            category: "wildlife",
            location: "Auckland, NZ",
            date: "2024-03",
            thumbnail: "/photography/tui_thumb.jpg",
            full: "/photography/tui_full.jpg",
        },
        {
            id: 4,
            title: "Fern Unfurling",
            category: "macro",
            location: "Waitakere Ranges, NZ",
            date: "2024-06",
            thumbnail: "/photography/fern_thumb.jpg",
            full: "/photography/fern_full.jpg",
        },
        {
            id: 5,
            title: "Estuary at Low Tide",
            category: "landscape",
            location: "Auckland, NZ",
            date: "2024-09",
            thumbnail: "/photography/estuary_thumb.jpg",
            full: "/photography/estuary_full.jpg",
        },
        {
            id: 6,
            title: "Orthomosaic Sunrise Pass",
            category: "aerial",
            location: "Auckland, NZ",
            date: "2024-10",
            thumbnail: "/photography/aerial-sunrise_thumb.jpg",
            full: "/photography/aerial-sunrise_full.jpg",
        },
    ];

    $: filteredPhotos =
        activeCategory === "all"
            ? photos
            : photos.filter((p) => p.category === activeCategory);

    /** @param {number} index */
    function openLightbox(index) {
        lightboxIndex = index;
    }

    function closeLightbox() {
        lightboxIndex = null;
    }

    function nextPhoto() {
        if (lightboxIndex === null) return;
        lightboxIndex = (lightboxIndex + 1) % filteredPhotos.length;
    }

    function prevPhoto() {
        if (lightboxIndex === null) return;
        lightboxIndex =
            (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    }

    /** @param {KeyboardEvent} e */
    function handleKeydown(e) {
        if (lightboxIndex === null) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextPhoto();
        if (e.key === "ArrowLeft") prevPhoto();
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
    <title>Photography - Luka Koens</title>
    <meta
        name="description"
        content="Drone Photography by Luka Koens"
    />
</svelte:head>

<!-- Hero Section -->
<section class="hero">
    <a href="/" rel="external" class="home-btn" title="Return Home">
        <Home size={20} class="home-icon" />
    </a>

    <div class="hero-content">
        <h1>Photography</h1>
        <!-- <p>Drone Photography</p> -->
    </div>

    <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
    </div>
</section>

<!-- Gallery Section -->
<section class="gallery">
    <div class="container">
        <h2>Gallery</h2>
        <p class="section-subtitle">
            A collection of shots from the field, spanning quiet landscapes to
            aerial perspectives
        </p>

        <div class="filter-tabs">
            {#each categories as category}
                <button
                    class="filter-tab"
                    class:active={activeCategory === category.id}
                    on:click={() => (activeCategory = category.id)}
                >
                    {category.label}
                </button>
            {/each}
        </div>

        <div class="photo-grid">
            {#each filteredPhotos as photo, index}
                <button
                    class="photo-card"
                    on:click={() => openLightbox(index)}
                    aria-label={`Open ${photo.title}`}
                >
                    <div class="photo-thumbnail">
                        <img src={photo.thumbnail} alt={photo.title} loading="lazy" />
                        <div class="photo-overlay">
                            <div class="photo-category">{photo.category}</div>
                        </div>
                    </div>
                    <div class="photo-info">
                        <h3>{photo.title}</h3>
                        <p>{photo.location} &middot; {photo.date}</p>
                    </div>
                </button>
            {/each}
        </div>
    </div>
</section>

<!-- Lightbox -->
{#if lightboxIndex !== null}
    <div class="lightbox" on:click={closeLightbox}>
        <button class="lightbox-close" on:click={closeLightbox} aria-label="Close">
            <X size={28} />
        </button>

        <button
            class="lightbox-nav lightbox-prev"
            on:click|stopPropagation={prevPhoto}
            aria-label="Previous photo"
        >
            <ChevronLeft size={32} />
        </button>

        <div class="lightbox-content" on:click|stopPropagation>
            <img
                src={filteredPhotos[lightboxIndex].full}
                alt={filteredPhotos[lightboxIndex].title}
            />
            <div class="lightbox-caption">
                <h3>{filteredPhotos[lightboxIndex].title}</h3>
                <p>
                    {filteredPhotos[lightboxIndex].location} &middot; {filteredPhotos[
                        lightboxIndex
                    ].date}
                </p>
            </div>
        </div>

        <button
            class="lightbox-nav lightbox-next"
            on:click|stopPropagation={nextPhoto}
            aria-label="Next photo"
        >
            <ChevronRight size={32} />
        </button>
    </div>
{/if}

<!-- Approach Section
<section class="approach">
    <div class="container">
        <h2>Behind the Lens</h2>
        <p class="section-subtitle">
            Photography sits alongside my drone and geospatial work &mdash; the same
            eye for composition and terrain carries across both
        </p>

        <div class="method-content">
            <div class="method-block">
                <h3>Equipment</h3>
                <ul>
                    <li>Mirrorless camera body with a small prime & zoom lens kit</li>
                    <li>DJI Mini 2 SE for aerial and landscape perspectives</li>
                    <li>Lightroom for editing and colour grading</li>
                    <li>Manual exposure for controlled, consistent results</li>
                </ul>
            </div>
            <div class="method-block">
                <h3>Focus Areas</h3>
                <ul>
                    <li>Landscape and long-exposure work around Auckland and the Waitakeres</li>
                    <li>Aerial photography, drawing on UAV survey experience</li>
                    <li>Wildlife and macro shots from volunteer restoration sites</li>
                    <li>Documenting environmental change over time alongside my GIS work</li>
                </ul>
            </div>
        </div>
    </div>
</section> -->

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
        text-align: center;
    }

    /* === HERO SECTION === */
    .hero {
        height: 100vh;
        background-image: url("/photography_bg.webp");
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

    .filter-tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        justify-content: center;
        margin-bottom: 3rem;
    }

    .filter-tab {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: rgba(255, 255, 255, 0.75);
        padding: 0.6rem 1.4rem;
        border-radius: 50px;
        font-size: 0.9rem;
        font-family: inherit;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .filter-tab:hover {
        border-color: rgba(100, 181, 246, 0.5);
        color: #ffffff;
    }

    .filter-tab.active {
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-color: transparent;
        color: #ffffff;
    }

    .photo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
    }

    .photo-card {
        display: flex;
        flex-direction: column;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        text-align: left;
        cursor: pointer;
        padding: 0;
        font-family: inherit;
        color: inherit;
    }

    .photo-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 40px rgba(100, 181, 246, 0.3);
        border-color: rgba(100, 181, 246, 0.4);
    }

    .photo-thumbnail {
        position: relative;
        height: 240px;
        background: #2a2a2a;
        overflow: hidden;
    }

    .photo-thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .photo-card:hover .photo-thumbnail img {
        transform: scale(1.06);
    }

    .photo-overlay {
        position: absolute;
        top: 1rem;
        right: 1rem;
        z-index: 2;
    }

    .photo-category {
        background: rgba(0, 0, 0, 0.7);
        padding: 0.3rem 0.7rem;
        border-radius: 15px;
        font-size: 0.75rem;
        text-transform: capitalize;
        backdrop-filter: blur(5px);
    }

    .photo-info {
        padding: 1.4rem 1.6rem;
    }

    .photo-info h3 {
        margin: 0 0 0.4rem 0;
        font-size: 1.1rem;
        color: #ffffff;
    }

    .photo-info p {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.85rem;
        margin: 0;
    }

    /* === LIGHTBOX === */
    .lightbox {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.92);
        backdrop-filter: blur(6px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 2rem;
    }

    .lightbox-content {
        max-width: 90vw;
        max-height: 85vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .lightbox-content img {
        max-width: 90vw;
        max-height: 75vh;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
    }

    .lightbox-caption {
        text-align: center;
        margin-top: 1.2rem;
        color: #ffffff;
    }

    .lightbox-caption h3 {
        font-size: 1.2rem;
        margin-bottom: 0.3rem;
    }

    .lightbox-caption p {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9rem;
        margin: 0;
    }

    .lightbox-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .lightbox-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    .lightbox-nav {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        cursor: pointer;
        transition: all 0.3s ease;
        flex-shrink: 0;
        z-index: 5;
    }

    .lightbox-nav:hover {
        background: rgba(100, 181, 246, 0.3);
        border-color: rgba(100, 181, 246, 0.5);
    }

    .lightbox-prev {
        position: absolute;
        left: 1.5rem;
        top: 50%;
        transform: translateY(-50%);
    }

    .lightbox-next {
        position: absolute;
        right: 1.5rem;
        top: 50%;
        transform: translateY(-50%);
    }

    /* === APPROACH SECTION === */
    .approach {
        padding: 5rem 0;
        background: #101010;
    }

    .approach h2 {
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

        .photo-grid {
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

        .lightbox-nav {
            width: 44px;
            height: 44px;
        }

        .lightbox-prev {
            left: 0.5rem;
        }

        .lightbox-next {
            right: 0.5rem;
        }
    }
</style>