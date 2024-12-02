<script>
  // Array of portfolio images
  const images = [
    { src: '/images/photo1.jpg', alt: 'Aerial View of a Park' },
    { src: '/images/photo2.jpg', alt: 'Construction Site' },
    { src: '/images/photo3.jpg', alt: 'Urban Planning View' },
  ];

  // Array of mapping projects
  const mappingProjects = [
    { title: 'Urban Mapping', description: 'Detailed urban project.', tilesUrl: '/tiles/urban/' },
    { title: 'Forest Survey', description: 'Environmental survey mapping.', tilesUrl: '/tiles/forest/' },
    { title: 'Coastal Mapping', description: 'Coastal erosion and planning.', tilesUrl: '/tiles/coastal/' },
  ];
</script>

<style>
  .portfolio {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .portfolio h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .gallery img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .projects {
    margin-top: 3rem;
  }

  .projects h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: #333;
  }

  .project-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }

  .project-item {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    text-align: center;
  }

  .project-item h3 {
    margin-bottom: 1rem;
    color: #333;
  }

  .project-item p {
    margin-bottom: 1rem;
    color: #555;
  }

  .project-item a {
    display: inline-block;
    color: white;
    background-color: #007BFF;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  .project-item a:hover {
    background-color: #0056b3;
  }
</style>

<div class="portfolio">
  <h1>Our Portfolio</h1>

  <!-- Image Gallery -->
  <div class="gallery">
    {#each images as image}
      <img src={image.src} alt={image.alt} />
    {/each}
  </div>

  <!-- Mapping Projects -->
  <div class="projects">
    <h2>Mapping Projects</h2>
    <div class="project-list">
      {#each mappingProjects as project}
        <div class="project-item">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.tilesUrl} target="_blank">View Map</a>
        </div>
      {/each}
    </div>
  </div>
</div>
