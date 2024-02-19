import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 1000);
const geometry = new THREE.ConeGeometry(5, 10, 8);
const material = new THREE.MeshBasicMaterial({ color: 0xD9D9D9 });
const cone = new THREE.Mesh(geometry, material);
scene.add(cone);
camera.position.z = 50;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
function animate() {
    requestAnimationFrame(animate);
    cone.rotation.x += 0.001;
    cone.rotation.y += 0.001;
    cone.rotation.z += 0.005;
    renderer.render(scene, camera);
}
animate();
