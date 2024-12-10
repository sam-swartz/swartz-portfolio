'use strict';
import * as THREE from '../vendor/three.js-dev/build/three.module.js';
import { GLTFLoader } from '../vendor/three.js-dev/examples/jsm/loaders/GLTFLoader.js';


// Select the target div
const container = document.getElementById('render-container');

// 1. Create a Scene
const scene = new THREE.Scene();

// 2. Create a Camera
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  container.clientWidth / container.clientHeight, // Aspect ratio
  0.1, // Near clipping
  1000 // Far clipping
);
camera.position.set(0, 1, 3); // Adjust position to view the model

// 3. Create a Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement); // Attach to the div

// 4. Add Lights
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// 5. Load the GLTF Model
const loader = new GLTFLoader();
loader.load(
  './assets/models/swartz_element-dots.gltf', // Path to the GLTF file
  (gltf) => {
    const model = gltf.scene;
    model.scale.set(1, 1, 1); // Adjust scale if necessary
    scene.add(model);
  },
  undefined,
  (error) => {
    console.error('Error loading GLTF model:', error);
  }
);

// 6. Animation Loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// 7. Handle Window Resizing
window.addEventListener('resize', () => {
  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
});
