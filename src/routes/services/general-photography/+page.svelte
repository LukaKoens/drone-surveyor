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


  /**
     * @type {string | null}
     */
  let selectedImage = null;

  /**
     * @param {string} imageSrc
     */
  function openModal(imageSrc) {
    selectedImage = imageSrc;
  }

  function closeModal() {
    selectedImage = null;
  }
  </script>
  
  <section class="hero">
    <div class="hero-content">
      <h1>General Photography</h1>
      <p>Professional drone photography to showcase your property, events, or landscapes in a way you just can't from the ground.</p>
      <p>Getting a Different perspective on a problem can offer invaluable insights and save time and money in planning and perperation when approaching difficult problems</p>
      <a href='/contact'><button class="cta-button">Contact Us</button></a>
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
      <img
        src="/general-photography/PampasGrass.JPG"
        alt="Sample Photo 1"
        on:click={() => openModal('/general-photography/PampasGrass.JPG')}
      />
      <img
        src="/general-photography/Slip.JPG"
        alt="Sample Photo 2"
        on:click={() => openModal('/general-photography/Slip.JPG')}
      />
      <img
        src="/general-photography/BirdsEye.JPG"
        alt="Sample Photo 3"
        on:click={() => openModal('/general-photography/BirdsEye.JPG')}
      />
      <img
        src="/general-photography/GlamorShot.JPG"
        alt="Sample Photo 4"
        on:click={() => openModal('/general-photography/GlamorShot.JPG')}
      />
    </div>
  
    <!-- Modal -->
    {#if selectedImage}
      <div class="modal" on:click={closeModal}>
        <div class="modal-content" on:click|stopPropagation>
          <img src={selectedImage} alt="Selected Image" />
          <button class="close-btn" on:click={closeModal}>✕</button>
        </div>
      </div>
    {/if}
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
      margin-top: 2em;
      padding: 0.5em 1em;
      background-color: #007bff;
      color: #fff;
      font-size: 1.5em;
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

    /* Modal styles */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal-content {
    position: relative;
    max-width: 80%;
    max-height: 80%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal-content img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #fff;
    color: #333;
    border: none;
    font-size: 1.5rem;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
  }

  .close-btn:hover {
    background: #f0f0f0;
  }
  </style>
  