<script>
  let sections = [
    {
      title: "Services",
      href: "/services",
      description: "Discover what we offer for your drone surveying needs.",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
      description: "Browse our stunning drone photography and project gallery.",
    },
    {
      title: "Contact",
      href: "/contact",
      description: "Get in touch with us for inquiries or to book a service.",
    },
  ];
</script>

<main>
<!-- Hero Section -->
<section class="hero">
  <div class="hero-content">
    <h1>Drone Surveyor</h1>
    <p>
      A small, independent contractor delivering <strong>affordable</strong>, <strong>fast</strong>, and <strong>flexible</strong> drone surveying services.
    </p>
    <a href="/mapping" class="btn-primary">Explore some of Our Works</a>
  </div>
</section>


  <!-- Features Section -->
  <section class="features">
    <h2>Why Choose Us?</h2>
    <div class="feature-cards">
      <a href="/mapping-services" class="feature-card">        
        <h3>Aerial Mapping</h3>
        <p>
          Tailored solutions that fit your budget, bringing real world data quickly.
        </p>
      </a>
      <a href="/3d-modeling" class="feature-card">
        <h3>Photogrammertry Modeling</h3>
        <p>
          Using specific flight techniques and modern image processing, stunning 3d models can generated of a variaty of objects and enviroments.
        </p>
      </a>
      <a href="/general-photography" class="feature-card">
        <h3>General Photography</h3>
        <p>
          Capture stunning aerial views with high-quality, flexible drone photography for any project or occasion.
        </p>
      </a>
    </div>
  </section>


  <!-- Navigation Cards Section -->
<!-- Navigation Cards Section -->
<section class="navigation">
  <div class="nav-cards">
    <!-- Link directly to the contact page -->
    <a href="/contact" class="nav-card">
      <h3>Contact</h3>
      <p>Get in touch with us for inquiries or to book a service.</p>
    </a>
  </div>
</section>

</main>

<style>
  /* General Styling */
  main {
    min-height: 100vh;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 auto;
    background-image: url("/background-images/introImage.JPG");
    background-repeat: no-repeat;
    background-size: cover;
  }
  /* Hero Section */
  .hero {
    color: white;
    text-align: center;
    padding: 5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-content {
    max-width: 700px;
  }
  .hero-content strong {
    color: white;
  }
  .hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  .btn-primary {
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  .btn-primary:hover {
    background-color: #0056b3;
  }

  /* Features Section */
  .features {
    text-align: center;
    padding: 4rem 1rem;
  }
  .features h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: white;
  }
  .feature-cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .feature-card {
    flex: 1;
    max-width: 300px;
    background: #f9f9f9;
    padding: 1.5rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    color: black;
    text-decoration: none; /* Remove underline */
  }
  .feature-card:hover {
    transform: scale(1.1);
  }

  .feature-card img {
    width: 60px;
    margin-bottom: 1rem;
    transition: transform 0.3s;
  }

  .feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  /* Navigation Cards Section */
    .navigation {
    position: relative;
    padding: 4rem 1rem;
    text-align: center;
    color: white;
  }
  
  .nav-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  .nav-card {
    flex: 1;
    max-width: 300px;
    background: #007bff;
    padding: 1.5rem;
    border-radius: 10px;
    text-align: center;
    color: white;
    transition: transform 0.3s, background-color 0.3s;
    text-decoration: none; /* Remove underline */
  }
  .nav-card:hover {
    transform: translateY(-10px);
    background-color: #0056b3;
  }
  .nav-card h3 {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }
  .nav-card p {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
</style>
