<script>
  // Placeholder for navigation or interactivity, if needed
</script>

<main>
  <section class="hero">
    <h1>Mapping Services</h1>
    <p>Explore the cutting-edge drone solutions we offer to elevate your projects.</p>
  </section>

  <section class="services">
    <div class="service-card">
      <h2>Large Area Mapping</h2>
      <p>
        Transform your perspective with large-area drone mapping! delivering high-resolution, detailed maps for your properties, farms, or construction sites, this can help you save time, reduce costs, and make informed decisions with accurate, up to date data.
      </p>
      <a href="/mapping" class="learn-more">Learn More</a>
    </div>

    <div class="service-card">
      <h2>Temporal Mapping</h2>
      <p>
        Highlight progress with before-and-after drone mapping! Perfect for small areas, our detailed follow-up maps showcase transformations over time, ideal for cleanups, restorations, or project milestones.
      </p>
      <a href="/site-tracking" class="learn-more">Learn More</a>
    </div>

  </section>
</main>

<style>
  main{
    position: absolute;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    background-image: url("/general-photography/Mapping_Background.JPG");
    margin: 0;
  }
  /* Hero Section */
  .hero {
    text-align: center;
    padding: 3rem 1rem;
    background: linear-gradient(135deg, rgb(87 90 75), rgb(42 44 36));
    opacity: 0.8;
    z-index: 1;
    border-radius: 0 0 15px 15px;
    background: linear-gradient(135deg, rgb(87 90 75), rgb(42 44 36));
    opacity: 0.95;
    z-index: 1;
    color: white;
  }

  .hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    opacity: 1;
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
