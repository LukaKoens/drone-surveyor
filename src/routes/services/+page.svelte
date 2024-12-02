<script>
  // Placeholder for navigation or interactivity, if needed
</script>

<main>
  <section class="hero">
    <h1>Our Services</h1>
    <p>Explore the cutting-edge drone solutions we offer to elevate your projects.</p>
  </section>

  <section class="services">
    <div class="service-card">
      <h2>General Photography & Inspections</h2>
      <p>
        Capture stunning aerial images and perform high-resolution visual inspections
        with precision and efficiency.
      </p>
      <a href="/services/general-photography" class="learn-more">Learn More</a>
    </div>

    <div class="service-card">
      <h2>Mapping</h2>
      <p>
        Create detailed maps with layered data, ideal for land surveys, planning,
        and construction.
      </p>
      <a href="/services/mapping" class="learn-more">Learn More</a>
    </div>

    <div class="service-card">
      <h2>3D Modeling</h2>
      <p>
        Generate accurate 3D models of landscapes, buildings, and infrastructure to
        visualize projects in three dimensions.
      </p>
      <a href="/services/3d-modeling" class="learn-more">Learn More</a>
    </div>
  </section>
</main>

<style>
  /* Hero Section */
  .hero {
    text-align: center;
    padding: 3rem 1rem;
    background: linear-gradient(135deg, #007bff, #0056b3);
    color: white;
    border-radius: 0 0 15px 15px;
  }

  .hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .hero p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
  }

  /* Services Section */
  .services {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .service-card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    text-align: center;
    flex: 1 1 calc(30% - 2rem); /* Responsive cards */
    min-width: 280px;
    max-width: 400px;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .service-card h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  .service-card p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  .service-card .learn-more {
    text-decoration: none;
    font-weight: bold;
    color: white;
    background-color: #007bff;
    padding: 0.7rem 1.5rem;
    border-radius: 25px;
    transition: background-color 0.3s;
  }

  .service-card .learn-more:hover {
    background-color: #0056b3;
  }

  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .services {
      flex-direction: column;
      align-items: center;
    }

    .service-card {
      max-width: 100%;
    }
  }
</style>
