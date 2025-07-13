<script>
    import { Drone, Map, Eye, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-svelte';
    import Contact from '$lib/components/Contact.svelte'
 
    
    let tiles = [
        {
            icon: Drone,
            title: 'Drone Data Collection & Communication',
            description: 'UAV aerial mapping, surveying, and data collection with CAA compliant flight planning and execution.',
            link: '/UAV'
        },
        {
            icon: Map,
            title: 'Geospatial Analysis & Solutions',
            description: 'Utilizing GIS software such as the Esri ecosystem, QGIS and python approachs to turn underlying data into interactive and informative products and solutions',
            link: '/GIS'
        },
        {
            icon: Eye,
            title: 'Computer Vison & LLM development',
            description: "AI implementation and development services focused on computer vision and language models, helping you choose the right tools for your specific needs.",
            link: '/AI'
        }
    ]
</script>


<svelte:head>
    <title>Luka Koens - Developer Portfolio</title>
    <meta name="description" content="Geospatial Analysis, Drone Operation, Computer Vision Development" />
</svelte:head>

<body>
    <div class="hero">
        <div class="hero-content">
            <h1>Curriculum Vitae Luka Koens</h1>
            <p>Geospatial Analysis, Drone Operation,<br> Computer Vision Development</p>
        </div>
        
        <div class="scroll-indicator">
            <div class="scroll-arrow"></div>
        </div>
    </div>

    <div class="navigation-section">
        <div class="nav-container">
            <h2 class="section-title">Explore My Portfolio</h2>
            
            <div class="nav-grid">
                {#each tiles as tile}
                    <a href={tile.link} class="nav-tile">
                        <span class="tile-icon">
                            <svelte:component this={tile.icon} size={48} />
                        </span>
                        <h3 class="tile-title">{tile.title}</h3>
                        <p class="tile-description">{tile.description}</p>
                    </a>
                {/each}
            </div>
        </div>
    </div>

    <Contact></Contact>
</body>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: #0a0a0a;
        color: #ffffff;
        overflow-x: hidden;
    }

 /* Hero Section */
    .hero {
        height: 100vh;
        background-image: url('/intro_bg.JPG');
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
        text-shadow: 
            0 2px 10px rgba(0, 0, 0, 0.8),
            0 0 20px rgba(0, 0, 0, 0.6),
            0 0 40px rgba(0, 0, 0, 0.4);
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    }

    .hero p {
        font-size: clamp(1.2rem, 2.5vw, 1.4rem);
        margin-bottom: 2.5rem;
        color: #f8f8f8;
        font-weight: 400;
        line-height: 1.6;
        letter-spacing: 0.01em;
        text-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.7),
            0 0 15px rgba(0, 0, 0, 0.5);
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }

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
    
    .navigation-section {
        padding: 5rem 2rem;
        background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nav-container {
        max-width: 1200px;
        width: 100%;
    }

    .section-title {
        text-align: center;
        font-size: clamp(2rem, 5vw, 3rem);
        font-weight: 600;
        margin-bottom: 3rem;
        background: linear-gradient(135deg, #667eea, #764ba2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .nav-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }

    .nav-tile {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 2.5rem;
        text-decoration: none;
        color: inherit;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }

    .nav-tile::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.5s;
    }

    .nav-tile:hover::before {
        left: 100%;
    }

    .nav-tile:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        border-color: rgba(255, 255, 255, 0.2);
    }

    .tile-icon {
        font-size: 3rem;
        margin-bottom: 1.5rem;
        display: block;
        background: linear-gradient(135deg, #667eea, #764ba2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .tile-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #ffffff;
    }

    .tile-description {
        color: #b0b0b0;
        line-height: 1.6;
        font-size: 0.95rem;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(60px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .nav-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
        .nav-tile {
            padding: 2rem;
        }
    }
</style>