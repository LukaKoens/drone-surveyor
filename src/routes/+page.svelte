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
        Your ultimate solution for aerial surveys and high-resolution mapping.
      </p>
      <a href="/services" class="btn-primary">Explore Our Services</a>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features">
    <h2>Why Choose Us?</h2>
    <div class="feature-cards">
      <div class="feature-card">
        <img src="/icons/precision.svg" alt="Precision Icon" />
        <h3>Precision</h3>
        <p>
          Capture high-accuracy aerial data with cutting-edge drone technology.
        </p>
      </div>
      <div class="feature-card">
        <img src="/icons/speed.svg" alt="Speed Icon" />
        <h3>Efficiency</h3>
        <p>Fast turnaround times for surveys and project deliverables.</p>
      </div>
      <div class="feature-card">
        <img src="/icons/innovation.svg" alt="Innovation Icon" />
        <h3>Innovation</h3>
        <p>
          State-of-the-art equipment and techniques for exceptional results.
        </p>
      </div>
    </div>
  </section>

  <!-- Navigation Cards Section -->
  <section class="navigation">
    <h2>Explore</h2>
    <div class="nav-cards">
      {#each sections as section}
        <div class="nav-card">
          <h3><a href={section.href}>{section.title}</a></h3>
          <p>{section.description}</p>
        </div>
      {/each}
    </div>
  </section>
</main>

<style>
  body {
    padding: 0;
  }
  /* General Styling */
  main {
    min-height: 100vh;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 auto;
    background-image: url("introImage.JPG");
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
  }
  .feature-card img {
    width: 50px;
    margin-bottom: 1rem;
  }
  .feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  /* Navigation Cards Section */
  .navigation {
    padding: 4rem 1rem;
    text-align: center;
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
    color: white;
    padding: 1.5rem;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3s;
  }
  .nav-card:hover {
    transform: translateY(-10px);
  }
  .nav-card h3 a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }
  .nav-card p {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
</style>
