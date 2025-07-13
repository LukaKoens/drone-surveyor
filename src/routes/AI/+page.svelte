<script>
    import { Home, Brain, TreePine, Camera} from 'lucide-svelte';
    import Contact from '$lib/components/Contact.svelte'
</script>

<svelte:head>
    <title>Computer Vision Development - Luka Koens</title>
    <meta name="description" content="Computer Vision Model Development, YOLO, Object Detection, Professional Experience, AI Solutions Discussion" />
</svelte:head>

<body>
    <div class="hero">
        <a
            href="/"
            rel="external"
            class="home-btn"
            title="Return Home"
            >
            <Home size={20} class="home-icon" />
        </a>
        
        <div class="hero-content">
            <h1>Computer Vision Development</h1>
            <p>Professional Experience in AI Model Development & Implementation</p>
        </div>
        
        <div class="scroll-indicator">
            <div class="scroll-arrow"></div>
        </div>
    </div>

    <div class="overview-section">
        <div class="container">
            <h2 class="section-title">Background & Experience</h2>
            
            <div class="intro-content">
                <p class="intro-text">
                    With a Computer Science background, I have hands-on experience in machine learning and computer vision development. 
                    My professional journey began at Scion's UAV team, where I worked on computer vision annotation for forest insights projects, 
                    before branching out into independent computer vision applications and model development.
                </p>
            </div>
        </div>
    </div>

    <div class="work-section">
        <div class="container">
            <h2 class="section-title">Professional Experience</h2>
            
            <div class="work-timeline">
                <div class="work-item">
                    <div class="work-header">
                        <div class="work-icon">
                            <TreePine size={24} />
                        </div>
                        <div class="work-title">
                            <h3>Geospatial Analyst & Computer Vision Annotation</h3>
                            <p class="work-company">Scion Research - UAV Team</p>
                            <p class="work-duration">2023 - 2024</p>
                        </div>
                    </div>
                    <div class="work-content">
                        <p class="work-description">
                            During a internship at Scion, I helped developed computer vision annotations leveraging LINZ's regional aerial imagery for the detection of Radiata Pine, 
                            as well as focused annotations on multi spectral imagery for wilding pine detection, along side other GIS work.
                            I also explored some of the YOLO models and more sophisticated implementations of Computer Vision and 3D Gaussians to explore tree stem texture extraction from non optimal imagery.                        </p>
                        <div class="work-tech">
                            <span class="tech-tag">YOLO & RESNet</span>
                            <span class="tech-tag">3D Guassians & Photogrammetry</span>
                            <span class="tech-tag">Annotation Tools</span>
                            <span class="tech-tag">Aerial & UAV Imagery</span>
                        </div>
                    </div>
                </div>
                <div class="work-item">
                    <div class="work-header">
                        <div class="work-icon">
                            <Camera size={24} />
                        </div>
                        <div class="work-title">
                            <h3>Independent & University Computer Vision Projects</h3>
                            <p class="work-company">Education & Personal Development</p>
                            <p class="work-duration">2024 - Present</p>
                        </div>
                    </div>
                    <div class="work-content">
                        <p class="work-description">
                            I've engaged in computer vision research and development through academic coursework and independent projects. 
                            Focused on exploring practical applications in image processing as well as developing the piplines to leverage computer vision models on data. 
                            I've explored developing models on my own drone imagery, but lack the quantity of data to really pursue any specifc projects.
                            I have had success in developing models to explore what can be leveraged from the 0.075m LINZ imagery.
                            Both of these projects have revloved around the detection of weeds in imagery.
                        </p>
                        <div class="work-tech">
                            <span class="tech-tag">Research & Development</span>
                            <span class="tech-tag">Academic Projects</span>
                            <span class="tech-tag">Aerial & UAV Imagery</span>
                        </div>
                    </div>
                </div>
                <div class="work-item">
                    <div class="work-header">
                        <div class="work-icon">
                            <Brain size={24} />
                        </div>
                        <div class="work-title">
                            <h3>Business Analysis LLM Inference Development</h3>
                            <p class="work-company">Flipview Limited</p>
                            <p class="work-duration">2024 - 2025</p>
                        </div>
                    </div>
                    <div class="work-content">
                        <p class="work-description">
                            I worked on developing and implementing Large Language Model inference systems for business analysis applications. 
                            I designed and developed the prototypes and inital production versions of automated workflows for performing a business analysis leveraring Flipviews existing platform to frame the anaylsis. 
                            This solution enabled faster onboarding and trailing of the site, as well as often providing left feild or otherwise overlooked aspects. It leveraged multiple different models to achive the best results as effiecently as possible. 
                        </p>
                        <div class="work-tech">
                            <span class="tech-tag">LLM Inference</span>
                            <span class="tech-tag">Business Intelligence</span>
                            <span class="tech-tag">NLP Processing</span>
                            <span class="tech-tag">Automation</span>
                        </div>
                    </div>
                </div>
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
        line-height: 1.6;
    }

    .container {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding: 0 2rem;
    }

    /* Hero Section */
    .hero {
        height: 100vh;
        background-image: url('/ai_bg.jpg');
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

    .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1;
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

    /* Home Button */
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

    /* Section Titles */
    .section-title {
        text-align: center;
        font-size: clamp(2rem, 5vw, 3rem);
        font-weight: 600;
        margin-bottom: 3rem;
        background: linear-gradient(135deg, #00d4ff, #0099cc);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    /* Overview Section */
    .overview-section {
        padding: 5rem 0;
        background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    }

    .intro-content {
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
    }

    .intro-text {
        font-size: clamp(1rem, 2vw, 1.2rem);
        color: #b0b0b0;
        line-height: 1.7;
    }

    /* Work Section */
    .work-section {
        padding: 5rem 0;
        background: #101010;
    }

    .work-timeline {
        max-width: 900px;
        margin: 0 auto;
    }

    .work-item {
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 2rem;
        margin-bottom: 2rem;
        transition: all 0.3s ease;
    }

    .work-item:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(100, 181, 246, 0.3);
        transform: translateY(-2px);
    }

    .work-header {
        display: flex;
        align-items: flex-start;
        margin-bottom: 1.5rem;
        gap: 1rem;
    }

    .work-icon {
        color: #00d4ff;
        background: rgba(0, 212, 255, 0.1);
        padding: 0.5rem;
        border-radius: 8px;
        flex-shrink: 0;
    }

    .work-title h3 {
        font-size: 1.4rem;
        color: #ffffff;
        margin-bottom: 0.5rem;
    }

    .work-company {
        color: #00d4ff;
        font-weight: 500;
        margin-bottom: 0.25rem;
    }

    .work-duration {
        color: #888;
        font-size: 0.9rem;
    }

    .work-description {
        color: #b0b0b0;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    .work-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .tech-tag {
        background: rgba(0, 212, 255, 0.1);
        color: #00d4ff;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.85rem;
        border: 1px solid rgba(0, 212, 255, 0.2);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .container {
            padding: 0 1rem;
        }

        .work-header {
            flex-direction: column;
            align-items: flex-start;
        }

        .hero {
            background-attachment: scroll;
        }

        .home-btn {
            top: 1rem;
            left: 1rem;
        }
    }
</style>