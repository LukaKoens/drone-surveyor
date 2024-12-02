<script>
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
  import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'; // Import MTLLoader

  let container; // Reference to the DOM element
  let scene, camera, renderer, controls; // Three.js components

  onMount(() => {
    init();
    animate();
    return () => {
      // Cleanup on component destruction
      if (renderer) renderer.dispose();
    };
  });

  function init() {
    // Set up the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // Set up the camera
    camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.set(3, 3, 5);

    // Set up the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add controls for interactive rotation, zoom, etc.
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Load the materials first using MTLLoader
    const mtlLoader = new MTLLoader();
    mtlLoader.load(
      '/LeRoyBush_Model/odm_textured_model_geo.mtl', // Path to your MTL file
      (materials) => {
        materials.preload(); // Preload the materials

        // After materials are loaded, load the OBJ model
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials); // Apply materials to the OBJ model
        objLoader.load(
          '/LeRoyBush_Model/odm_textured_model_geo.obj', // Path to your OBJ file
          (object) => {
            scene.add(object);
          },
          (xhr) => {
            console.log(`Loading: ${(xhr.loaded / xhr.total) * 100}% loaded`);
          },
          (error) => {
            console.error('Error loading OBJ model', error);
          }
        );
      },
      (xhr) => {
        console.log(`Loading MTL: ${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        console.error('Error loading MTL file', error);
      }
    );

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);
  }

  function onWindowResize() {
    if (!camera || !renderer) return;

    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
  }

  function animate() {
    requestAnimationFrame(animate);

    // Update controls for smooth interaction
    if (controls) controls.update();

    // Render the scene
    if (renderer) renderer.render(scene, camera);
  }
</script>

<main>
  <div class="viewer-container" bind:this={container}></div>
</main>

<style>
  .viewer-container {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }

  canvas {
    display: block;
  }
</style>
