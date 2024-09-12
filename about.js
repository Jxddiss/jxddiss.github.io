import * as THREE from "https://cdn.skypack.dev/three@0.133.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.133.0/examples/jsm/loaders/GLTFLoader.js";

export const initializeAndAnimate3DAbout = () => {
  const wiiCanvasElement = document.getElementById("wii-container");
  const cdCanvasElement = document.getElementById("cd-container");

  initializeModelInAbout(
    "assets/model/wii_controller/scene.gltf",
    wiiCanvasElement,
    {
      x: -3,
      y: -38,
      z: 231,
    }
  );

  initializeModelInAbout(
    "assets/model/lowpoly_cd/scene.gltf",
    cdCanvasElement,
    {
      x: -3,
      y: -30,
      z: 0,
    }
  );
};

const initializeModelInAbout = (urlModel, container, cameraPositions) => {
  const gui = new dat.GUI();
  const aboutSection = document.getElementById("a-propos");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    container.offsetHeight / container.offsetHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(2, 0, 3);
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);
  scene.add(light);

  const loader = new GLTFLoader();
  loader.load(
    urlModel,
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      //   camera.position.set(-5, 5.5, 5);
      camera.position.set(
        cameraPositions.x,
        cameraPositions.y,
        cameraPositions.z
      );
      camera.lookAt(0, 0, 0);
      //   gui.add(camera.position, "x", -1000, 1000, 1).name("Camera position X");
      //   gui.add(camera.position, "y", -1000, 1000, 1).name("Camera position Y");
      //   gui.add(camera.position, "z", -1000, 1000, 1).name("Camera position Z");
      //   gui.add(light.position, "x", -1000, 1000, 1).name("Light position X");
      //   gui.add(light.position, "y", -1000, 1000, 1).name("Light position Y");
      //   gui.add(light.position, "z", -1000, 1000, 1).name("Light position Z");
      //   gui.add(model.rotation, "y", 0, Math.PI * 2, 0.01).name("Rotate Y model");
      //   gui.add(model.rotation, "x", 0, Math.PI * 2, 0.01).name("Rotate X model");
      //   gui.add(model.rotation, "z", 0, Math.PI * 2, 0.01).name("Rotate Z model");
      //   aboutSection.addEventListener("mousemove", (event) => {
      //     const { clientX, clientY } = event;
      //     const { left, top, width, height } = container.getBoundingClientRect();
      //     const x = ((clientX - left) / width) * 2 - 1;
      //     const y = -((clientY - top) / height) * 2 + 1;
      //     const direction = new THREE.Vector3(x, y, 1);
      //     model.lookAt(direction);
      //   });
      renderer.render(scene, camera);

      const gsapAnimate = () => {
        gsap.to(model.rotation, {
          y: model.rotation.y + Math.PI * 2,
          x: model.rotation.x + Math.PI * 2,
          duration: 10,
          ease: "none",
          onComplete: () => {
            gsapAnimate();
          },
        });
      };

      gsapAnimate();
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  container.addEventListener("resize", function () {
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
  });

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
};
