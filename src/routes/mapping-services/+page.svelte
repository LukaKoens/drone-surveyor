<script>
  // Placeholder for navigation or interactivity, if needed
</script>

<main>
  <section class="hero">
    <h1>Mapping Services</h1>
    <p>Explore whats possible with Drones to elevate your projects.</p>
  </section>

  <section class="services">
    <div class="service-card">
      <h2>Large Area Mapping</h2>
      <p class='desc'>
        Transform your perspective with large-area drone mapping! delivering high-resolution, detailed maps for your properties, farms, or construction sites, this can help you save time, reduce costs, and make informed decisions with accurate, up to date data.
      </p>
      <a href="/mapping" class="learn-more">Explore</a>
    </div>

    <div class="service-card">
      <h2>Temporal Mapping</h2>
      <p class='desc'>
        Highlight progress with before-and-after drone mapping! Perfect for small areas, our detailed follow-up maps showcase transformations over time, ideal for cleanups, restorations, or project milestones.
      </p>
      <a href="/site-tracking" class="learn-more">Explore</a>
    </div>

  </section>
  <a class="home-button" href="/">Home</a>

</main>

<style>
  main{
    position: absolute;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    background-image: url("/background-images/Mapping_Background.JPG");
    margin: 0;
  }
  /* Hero Section */
  .hero {
    text-align: center;
    padding: 3rem 1rem;
    border-radius: 0 0 15px 15px;
    background: linear-gradient(135deg, rgb(96, 108, 56), rgb(40, 54, 24));
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
    background: rgb(254, 250, 224);
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
    background-color: #283618;
    padding: 0.7rem 1.5rem;
    border-radius: 25px;
    transition: background-color 0.3s;
  }

  .service-card .learn-more:hover {
    background-color: #606C38;
  }

  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
    /* Home Button */
    .home-button {
    position: absolute;
    top: 3rem;
    left: 3rem;
    background: #283618;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transition: background-color 0.3s;
    text-decoration: none;
  }

  .home-button:hover {
    background-color: #606C38;
  }


  /* Responsive Design */
  @media (max-width: 768px) {

    main{
      background-position:-600px -1200px;
    }

    .desc{
      display: none;
    }

    .home-button{
      top:1rem;
      left:1rem;
    }

    .services {
      flex-direction: column;
      align-items: center;
    }

    .service-card {
      padding:1rem;
      max-width: 100%;
    }
    .service-card h2{
      padding-bottom: 10px;
    }
  }
</style>
