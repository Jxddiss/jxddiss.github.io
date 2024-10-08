import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { animateHero } from "./animation.js";

import { gsap } from "gsap";

import textureJpg from "../assets/model/Obsidian_002_SD/Obsidian_002_basecolor.png";

const computerModel = new URL(
  "../assets/model/retro_futuristic_computer/retrofuturistic_computer.glb",
  import.meta.url
);

export function initializeAllAnimationPlus3D() {
  const computerDomContainer = document.getElementById("computer-container");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  computerDomContainer.appendChild(renderer.domElement);
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(2, 0, 3);
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);
  scene.add(light);
  const backgroundTexture = new THREE.TextureLoader().load(textureJpg);
  backgroundTexture.wrapS = THREE.RepeatWrapping;
  backgroundTexture.wrapT = THREE.RepeatWrapping;
  backgroundTexture.repeat.set(4, 4);
  backgroundTexture.colorSpace = THREE.SRGBColorSpace;
  scene.background = backgroundTexture;

  let doneLoading = false;

  const loader = new GLTFLoader();
  loader.load(
    computerModel.href,
    function (gltf) {
      const model = gltf.scene;
      model.rotation.y = Math.PI;
      scene.add(model);
      camera.position.set(0, 1.5, 4);
      renderer.render(scene, camera);
      gsap.to(model.rotation, {
        y: model.rotation.y + Math.PI,
        duration: 3,
        ease: "power1.inOut",
        onComplete: () => {
          setTimeout(() => {
            doneLoading = true;
          }, 1000);
        },
      });
      animateHero();
      animateCameraAndLight();
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  renderer.render(scene, camera);

  let checkAnimFinis = setInterval(function () {
    if (doneLoading) {
      scene.remove(renderer.domElement);
      renderer.domElement.remove();
      computerDomContainer.innerHTML = "";
      renderer.dispose();
      clearInterval(checkAnimFinis);
    }
  }, 100);

  function animateCameraAndLight() {
    gsap.fromTo(
      camera.position,
      {
        x: 0,
        z: 8,
      },
      {
        x: 0,
        z: 0.9,
        duration: 4,
        ease: "power1.inOut",
        onUpdate: () => {
          renderer.render(scene, camera);
        },
      }
    );

    gsap.fromTo(
      light.position,
      {
        x: 2,
      },
      {
        x: 0,
        z: -3,
        duration: 8.5,
        ease: "power1.inOut",
        onUpdate: () => {
          renderer.render(scene, camera);
        },
      }
    );
  }
}
