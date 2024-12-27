<script>
  // Placeholder data for the page
  let features = [
    {
      title: "High-Resolution Imagery",
      description:
        "Capture stunning aerial shots in crisp, high-definition quality.",
      icon: "📸",
    },
    {
      title: "Versatile Angles",
      description:
        "From wide landscapes to detailed close-ups, get the perfect shot.",
      icon: "📐",
    },
    {
      title: "Customizable Packages",
      description:
        "Tailor your photography needs with flexible pricing and options.",
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
    <h3>
      Photography you just can't get from the ground.
    </h3>
    <a href="/contact"><button class="cta-button">Contact Us</button></a>
  </div>
</section>
<a class="home-button" href="/">Home</a>

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
      src="/general-photography/above_everything.JPG"
      alt="Sample Photo 1"
      on:click={() => openModal("/general-photography/above_everything.JPG")}
    />
    <img
      src="/general-photography/tough_spots.JPG"
      alt="Sample Photo 2"
      on:click={() => openModal("/general-photography/tough_spots.JPG")}
    />
    <img
      src="/general-photography/birds_eye.JPG"
      alt="Sample Photo 3"
      on:click={() => openModal("/general-photography/birds_eye.JPG")}
    />
    <img
      src="/general-photography/top_down.JPG"
      alt="Sample Photo 4"
      on:click={() => openModal("/general-photography/top_down.JPG")}
    />
    <img
      src="/general-photography/sumit.JPG"
      alt="Sample Photo 5"
      on:click={() => openModal("/general-photography/sumit.JPG")}
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
    top: -1em;
    left: -1vw;
    background: url("/background-images/photography_page.JPG") no-repeat;
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
    font-family: sans-serif;
    padding: 20px 40px;
    border-radius: 8px;
  }

  .cta-button {
    margin-top: 1em;
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
    background-color: #d6ccc2;
  }

  .feature-card {
    background: #edede9;

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

  .home-button {
    position: absolute;
    top: 2rem;
    left: 2rem;
    background: #007bff;
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
    background-color: #0056b3;
  }
</style>
