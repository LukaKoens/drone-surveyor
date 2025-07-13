<script>
    import {
        ArrowLeft,
    } from "lucide-svelte";


  import { onMount } from 'svelte';
  // @ts-ignore
  import * as THREE from 'three';
  // @ts-ignore
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  // @ts-ignore
  // @ts-ignore
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
  import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

  let container;
  let scene, camera, renderer, controls;
  let loadingProgress = 0;

  onMount(() => {
    init();
    animate();
    return () => {
      if (renderer) renderer.dispose();
    };
  });

  function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color('#1a1a1a'); // Set background color

    camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.set(3, 3, 5);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    scene.add(ambientLight);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const mtlLoader = new MTLLoader();
    mtlLoader.load(
      '/slipModel/LeRoysBush_Waterfall_Slips_2.mtl',
      (/** @type {{ preload: () => void; }} */ materials) => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(
          '/slipModel/LeRoysBush_Waterfall_Slips_2.obj',
          (object) => {
            scene.add(object);
            loadingProgress = 100; // Fully loaded
          },
          (xhr) => {
            loadingProgress = (xhr.loaded / xhr.total) * 100;
          },
          (error) => {
            console.error('Error loading OBJ model', error);
          }
        );
      },
      (xhr) => {
        loadingProgress = (xhr.loaded / xhr.total) * 50; // Estimate for MTL load
      },
      (error) => {
        console.error('Error loading MTL file', error);
      }
    );

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
    if (controls) controls.update();
    if (renderer) renderer.render(scene, camera);
  }
</script>

<main>
  <div class="viewer-container" bind:this={container}>
    {#if loadingProgress < 100}
      <div class="loading-bar-wrapper">
        <div class="loading-bar" style="width: {loadingProgress}%"></div>
      </div>
    {/if}
    <a class="home-btn" href="/UAV"><ArrowLeft></ArrowLeft></a>
  </div>
</main>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            sans-serif;
        color: #ffffff;
    }

    .viewer-container {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }

  canvas {
    display: block;
  }

    /* === NAVIGATION === */
    .home-btn {
        position: absolute;
        top: 2rem;
        left: 2rem;
        background: rgba(15, 15, 15, 0.9);
        backdrop-filter: blur(20px);
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50px;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        text-decoration: none;
        z-index: 10;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }

    .home-btn:hover {
        background: rgba(100, 181, 246, 0.15);
        border-color: rgba(100, 181, 246, 0.5);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(100, 181, 246, 0.2);
    }

  .loading-bar-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    z-index: 1001;
  }

  .loading-bar {
    height: 100%;
    background-color: #00ff99;
    transition: width 0.2s ease;
  }
</style>
