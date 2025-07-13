<script>
    import { Map, Activity, Satellite, Globe, Home} from 'lucide-svelte';
    import Contact from '$lib/components/Contact.svelte'
    
    let projects = [
        {
            icon: Map,
            title: 'GIS Portfolio & Introduction',
            description: 'A Personal introduction through GIS and showcase of foundational GIS techniques and methodologies. This story map introduces my skills in geospatial analysis and presents basic examples of spatial data visualization, map design principles, and analytical workflows.',
            tags: ['ArcGIS Story Maps', 'Map Design', 'Spatial Analysis'],
            category: 'Portfolio Overview',
            link: 'https://arcg.is/az1jK0' // Replace with your actual Story Map URL
        },
        {
            icon: Activity,
            title: 'Solar Potential Analysis',
            description: 'Solar energy assessment analyzing rooftop potential of industrial areas in South Auckland, and optimal panel placement. Utilized Auckland Regional LiDAR to identify high-potential areas for renewable energy development.',
            tags: ['Solar Analysis', 'ArcGIS Pro', 'Renewable Energy'],
            category: 'Regional Analysis',
            link: 'https://arcg.is/0j4zKi0' // Replace with your actual Story Map URL
        },
        {
            icon: Satellite,
            title: 'UAV Data Analysis Project',
            description: 'Processing and analysis of unmanned aerial vehicle imagery for high-resolution spatial analysis. Includes photogrammetric processing, orthomosaic generation, and feature extraction from drone-captured data.',
            tags: ['UAV/Drone Data', 'Photogrammetry', 'Remote Sensing'],
            category: 'Remote Sensing',
            link: 'https://arcg.is/1XjObz2' // Replace with your actual Story Map URL
        },
        {
            icon: Globe,
            title: 'Conservation GIS Collaboration',
            description: "Active volunteer contributor to conservation organization GIS initiatives. I've been working with local volunteer groups to work on a solution / methodolgy to bring UAV data / imagery into existing tools and platforms",
            tags: ['Conservation', 'Volunteer Work', 'Collaborative GIS'],
            category: 'Community Engagement',
            link: "https://arcg.is/1iH5an" 
        }
    ];

</script>

<svelte:head>
    <title>GIS Analysis Portfolio - Luka Koens</title>
    <meta name="description" content="Geospatial Analysis & Solutions - Professional GIS work and data visualization projects" />
</svelte:head>

<body>
    <a
        href="/"
        rel="external"
        class="home-btn"
        title="Return Home"
        >
        <Home size={20} class="home-icon" />
    </a>
    
    <div class="hero">
        <div class="hero-content">
            <h1>GIS Analysis & Solutions</h1>
            <p>Developing geospatial expertise through academic projects<br>and hands-on analysis with industry-standard tools</p>
        </div>
        
        <div class="scroll-indicator">
            <div class="scroll-arrow"></div>
        </div>
    </div>

    <div class="projects-section">
        <div class="projects-container">
            <h2 class="section-title">University Projects</h2>
            
            <div class="projects-grid">
                {#each projects as project}
                    {#if project.link}
                        <a href={project.link} target="_blank" rel="noopener noreferrer" class="project-tile">
                            <div class="project-header">
                                <div class="project-icon">
                                    <svelte:component this={project.icon} size={40} />
                                </div>
                                <span class="project-category">{project.category}</span>
                            </div>
                            <div class="project-content">
                                <h3 class="project-title">{project.title}</h3>
                                <p class="project-description">{project.description}</p>
                                <div class="project-tags">
                                    {#each project.tags as tag}
                                        <span class="tag">{tag}</span>
                                    {/each}
                                </div>
                                <div class="view-project">
                                    <span>View Story Map →</span>
                                </div>
                            </div>
                        </a>
                    {:else}
                        <div class="project-tile volunteer-tile">
                            <div class="project-header">
                                <div class="project-icon">
                                    <svelte:component this={project.icon} size={40} />
                                </div>
                                <span class="project-category">{project.category}</span>
                            </div>
                            <div class="project-content">
                                <h3 class="project-title">{project.title}</h3>
                                <p class="project-description">{project.description}</p>
                                <div class="project-tags">
                                    {#each project.tags as tag}
                                        <span class="tag">{tag}</span>
                                    {/each}
                                </div>
                                <div class="view-project">
                                    <span>Ongoing Collaboration</span>
                                </div>
                            </div>
                        </div>
                    {/if}
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
        background-image: url('/gis_bg.JPG');
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
     /* Home Button Styles */
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

    .projects-section {
        padding: 5rem 2rem;
        background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
        min-height: 100vh;
    }

    .projects-container {
        max-width: 1400px;
        margin: 0 auto;
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

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }

    .project-tile {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 2.5rem;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
        overflow: hidden;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        display: block;
    }

    .project-tile::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.5s;
    }

    .project-tile:hover::before {
        left: 100%;
    }

    .project-tile:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        border-color: rgba(255, 255, 255, 0.2);
    }

    .project-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
    }

    .project-icon {
        background: linear-gradient(135deg, #667eea, #764ba2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .project-category {
        font-size: 0.8rem;
        padding: 0.3rem 0.8rem;
        background: rgba(102, 126, 234, 0.2);
        color: #667eea;
        border-radius: 12px;
        font-weight: 500;
    }

    .project-title {
        font-size: 1.4rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #ffffff;
        line-height: 1.3;
    }

    .project-description {
        color: #b0b0b0;
        line-height: 1.6;
        margin-bottom: 1.5rem;
        font-size: 0.95rem;
    }

    .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .tag {
        padding: 0.4rem 0.8rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        font-size: 0.8rem;
        color: #e0e0e0;
        font-weight: 500;
    }
    
    .view-project {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .view-project span {
        color: #667eea;
        font-weight: 500;
        font-size: 0.9rem;
        transition: color 0.3s ease;
    }

    .project-tile:hover .view-project span {
        color: #764ba2;
    }

    .volunteer-tile {
        border: 1px solid rgba(118, 75, 162, 0.3);
        background: linear-gradient(135deg, rgba(118, 75, 162, 0.1), rgba(102, 126, 234, 0.05));
    }

    .volunteer-tile .project-category {
        background: rgba(118, 75, 162, 0.2);
        color: #764ba2;
    }

    .volunteer-tile .view-project span {
        color: #764ba2;
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
        .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
        .project-tile {
            padding: 2rem;
        }

        .project-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
        }
    }
</style>