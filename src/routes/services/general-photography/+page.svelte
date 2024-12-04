<script>
    // Placeholder data for the page
    let features = [
      {
        title: "High-Resolution Imagery",
        description: "Capture stunning aerial shots in crisp, high-definition quality.",
        icon: "📸",
      },
      {
        title: "Versatile Angles",
        description: "From wide landscapes to detailed close-ups, get the perfect shot.",
        icon: "📐",
      },
      {
        title: "Customizable Packages",
        description: "Tailor your photography needs with flexible pricing and options.",
        icon: "📦",
      },
    ];
  </script>
  
  <section class="hero">
    <div class="hero-content">
      <h1>General Photography</h1>
      <p>Professional drone photography to showcase your property, events, or landscapes.</p>
      <button class="cta-button">Contact Us</button>
    </div>
  </section>
  
  <section class="features">
    {#each features as feature}
      <div class="feature-card">
        <div class="icon">{feature.icon}</div>
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>
      </div>
    {/each}
  </section>
  
  <section class="gallery">
    <h2>Gallery</h2>
    <div class="image-grid">
      <img src="/general-photography/Roof.JPG" alt="Sample Photo 1"/>
      <img src="/general-photography/Slip.JPG" alt="Sample Photo 2" />
      <img src="/general-photography/BirdsEye.JPG" alt="Sample Photo 3" />
      <img src="/general-photography/GlamorShot.JPG" alt="Sample Photo 4" />
    </div>
  </section>
  
  <style>
    /* Hero Section */
    .hero {
      position: relative;
      width: 102vw;
      height: 50vh;
      top:-1em;
      left:-1vw;
      background: url('/general-photography/BackgroundPhoto.JPG') no-repeat;
      background-size: cover;
      background-position: center right;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #fff;
    }
  
    .hero-content {
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.5); /* For contrast */
      backdrop-filter: blur(5px);
      padding: 20px 40px;
      border-radius: 8px;
    }
  
    .cta-button {
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .cta-button:hover {
      background-color: #0056b3;
    }
  
    /* Features Section */
    .features {
      padding: 40px 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 20px;
      background-color: #f8f9fa;
    }
  
    .feature-card {
      background: #fff;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      flex: 1 1 calc(33.33% - 20px);
      max-width: 300px;
    }
  
    .feature-card .icon {
      font-size: 2rem;
      margin-bottom: 10px;
    }
  
    .feature-card h2 {
      font-size: 1.25rem;
      margin-bottom: 10px;
    }
  
    .feature-card p {
      font-size: 1rem;
      color: #555;
    }
  
    /* Gallery Section */
    .gallery {
      padding: 40px 20px;
      background: #fff;
      text-align: center;
    }
  
    .gallery h2 {
      margin-bottom: 20px;
      font-size: 2rem;
    }
  
    .image-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
  
    .image-grid img {
      width: 100%;
      border-radius: 8px;
      object-fit: cover;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
  
    .image-grid img:hover {
      transform: scale(1.05);
    }
  </style>
  