<script>
  import {
      Home,
      Maximize,
  } from "lucide-svelte";
  
  import { onMount } from 'svelte';
  // @ts-ignore
  import * as THREE from 'three';
  // @ts-ignore
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  // @ts-ignore
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
  import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

  let container;
  let scene, camera, renderer, controls;
  let currentObject = null; // track the currently loaded model so we can dispose it
  let loadingProgress = 0;
  let isLoading = false;

  // Define all the models you want to switch between here
const models = [
  {
    name: 'Māngere Pā site',
    mtl: '/3dModels/pāsiteModel/Pa_Site_Cut.mtl',
    obj: '/3dModels/pāsiteModel/Pa_Site_Cut.obj',
    // this model is probably much bigger/differently scaled — push the camera further out
    cameraPosition: { x: 20, y: 15, z: 20 },
    cameraTarget: { x: 0, y: 0, z: 0 },
  },
  {
    name: 'LeRoys Bush Waterfall Slips',
    mtl: '/3dModels/slipModel/LeRoysBush_Waterfall_Slips_2.mtl',
    obj: '/3dModels/slipModel/LeRoysBush_Waterfall_Slips_2.obj',
    cameraPosition: { x: 3, y: 3, z: 5 },
    cameraTarget: { x: 0, y: 0, z: 0 },
  }
  ];

  let activeModelIndex = 0;

  onMount(() => {
    init();
    animate();
    loadModel(models[activeModelIndex]);
    return () => {
      if (renderer) renderer.dispose();
    };
  });

  function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color('#1a1a1a');

    camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.set(3, 3, 5);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    scene.add(ambientLight);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    window.addEventListener('resize', onWindowResize, false);
  }

  /**
   * Disposes of the currently loaded model's geometry & materials,
   * then removes it from the scene. Prevents memory leaks / overlap
   * when switching between models.
   */
  function disposeCurrentModel() {
    if (!currentObject) return;

    currentObject.traverse((child) => {
      if (child.isMesh) {
        child.geometry?.dispose();
        if (Array.isArray(child.material)) {
          child.material.forEach((mat) => disposeMaterial(mat));
        } else if (child.material) {
          disposeMaterial(child.material);
        }
      }
    });

    scene.remove(currentObject);
    currentObject = null;
  }

  function applyCamera(modelConfig) {
    const pos = modelConfig.cameraPosition ?? { x: 3, y: 3, z: 5 };
    const target = modelConfig.cameraTarget ?? { x: 0, y: 0, z: 0 };

    camera.position.set(pos.x, pos.y, pos.z);

    if (controls) {
      controls.target.set(target.x, target.y, target.z);
      controls.update();
    } else {
      camera.lookAt(target.x, target.y, target.z);
    }
  }

  function disposeMaterial(material) {
    // Dispose any textures attached to the material
    Object.keys(material).forEach((key) => {
      const value = material[key];
      if (value && typeof value.dispose === 'function') {
        value.dispose();
      }
    });
    material.dispose();
  }

  /**
   * Loads a model given its {name, mtl, obj} config.
   * Swaps out whatever model is currently in the scene.
   */
  function loadModel(modelConfig) {
    if (!modelConfig) return;

    isLoading = true;
    loadingProgress = 0;

    disposeCurrentModel();

    const mtlLoader = new MTLLoader();
    mtlLoader.load(
      modelConfig.mtl,
      (materials) => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(
          modelConfig.obj,
          (object) => {
            scene.add(object);
            currentObject = object;
            applyCamera(modelConfig);   // <-- add this line
            loadingProgress = 100;
            isLoading = false;
          },
          (xhr) => {
            loadingProgress = xhr.total ? (xhr.loaded / xhr.total) * 100 : loadingProgress;
          },
          (error) => {
            console.error('Error loading OBJ model', error);
            isLoading = false;
          }
        );
      },
      (xhr) => {
        loadingProgress = xhr.total ? (xhr.loaded / xhr.total) * 50 : loadingProgress;
      },
      (error) => {
        console.error('Error loading MTL file', error);
        isLoading = false;
      }
    );
  }

  function selectModel(index) {
    if (index === activeModelIndex || isLoading) return;
    activeModelIndex = index;
    loadModel(models[activeModelIndex]);
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

        <a
        href="/"
        rel="external"
        class="home-btn"
        title="Return Home"
        >
        <Home size={20} class="home-icon" />
    </a>
    {#if models.length > 1}
      <div class="model-selector">
        {#each models as model, i}
          <button
            class="model-btn"
            class:active={i === activeModelIndex}
            on:click={() => selectModel(i)}
            disabled={isLoading}
          >
            {model.name}
          </button>
        {/each}
      </div>
    {/if}
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

  /* === MODEL SELECTOR === */
  .model-selector {
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 10;
    background: rgba(15, 15, 15, 0.9);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 0.75rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  .model-btn {
    background: transparent;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .model-btn:hover:not(:disabled) {
    background: rgba(100, 181, 246, 0.15);
    border-color: rgba(100, 181, 246, 0.5);
  }

  .model-btn.active {
    background: rgba(0, 255, 153, 0.15);
    border-color: #00ff99;
    color: #00ff99;
  }

  .model-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>