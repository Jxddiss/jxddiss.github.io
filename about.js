import * as THREE from "https://cdn.skypack.dev/three@0.133.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.133.0/examples/jsm/loaders/GLTFLoader.js";

export const initializeAndAnimate3DAbout = () => {
  const wiiCanvasElement = document.getElementById("wii-container");
  const cdCanvasElement = document.getElementById("cd-container");
  const aboutSection = document.getElementById("a-propos");

  const introTexts = document.querySelectorAll(".intro-text");
  const paragraphOne =
    "Passionnée par la technologie depuis tout jeune, la programmation est pour moi un " +
    "moyen d'exprimmer ma créativité, autant du côté frontend que backend";
  const paragraphTwo =
    " Après être passée par des études en sciences humeiane. J'ai finis par suivre ma passion et donc aujourd'hui," +
    "<br><br>je suis présentement en train de terminer un DEC technique en développement web et mobile.";
  gsap.set(introTexts[0], {
    text: {
      value: "",
    },
  });

  gsap.set(introTexts[1], {
    text: {
      value: "",
    },
  });

  ScrollTrigger.create({
    trigger: aboutSection,
    start: "top +=300",
    end: "bottom top",
    onEnter: () => {
      gsap.to(introTexts[0], {
        text: {
          value: paragraphOne,
        },
        duration: 0.01 * paragraphOne.length,
      });

      setTimeout(() => {
        gsap.to(introTexts[1], {
          text: {
            value: paragraphTwo,
          },
          duration: 0.01 * paragraphTwo.length,
        });
      }, 1000);
    },
    onLeaveBack: () => {
      gsap.to(introTexts[0], {
        text: {
          value: "",
        },
      });
      gsap.to(introTexts[1], {
        text: {
          value: "",
        },
      });
    },
  });

  initializeModelInAbout(
    "assets/model/wii_controller/scene.gltf",
    wiiCanvasElement,
    {
      x: -3,
      y: -38,
      z: 220,
    },
    25,
    1
  );

  initializeModelInAbout(
    "assets/model/lowpoly_cd/scene.gltf",
    cdCanvasElement,
    {
      x: -6,
      y: -30,
      z: 20,
    },
    100,
    1
  );
};

const initializeModelInAbout = (
  urlModel,
  container,
  cameraPositions,
  ratioModifCamera,
  direction
) => {
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
      camera.position.set(
        cameraPositions.x,
        cameraPositions.y,
        cameraPositions.z
      );
      camera.lookAt(0, 0, 0);
      //   const gui = new dat.GUI();
      //   gui.add(camera.position, "x", -1000, 1000, 1).name("Camera position X");
      //   gui.add(camera.position, "y", -1000, 1000, 1).name("Camera position Y");
      //   gui.add(camera.position, "z", -1000, 1000, 1).name("Camera position Z");
      //   gui.add(light.position, "x", -1000, 1000, 1).name("Light position X");
      //   gui.add(light.position, "y", -1000, 1000, 1).name("Light position Y");
      //   gui.add(light.position, "z", -1000, 1000, 1).name("Light position Z");
      //   gui.add(model.rotation, "y", 0, Math.PI * 2, 0.01).name("Rotate Y model");
      //   gui.add(model.rotation, "x", 0, Math.PI * 2, 0.01).name("Rotate X model");
      //   gui.add(model.rotation, "z", 0, Math.PI * 2, 0.01).name("Rotate Z model");

      let oldX = 0;
      let oldY = 0;
      window.addEventListener("mousemove", (event) => {
        let changeX = event.clientX - oldX;
        let changeY = event.clientY - oldY;
        camera.position.x -= (changeX / ratioModifCamera) * direction;
        camera.position.y += (changeY / ratioModifCamera) * direction;
        oldX = event.clientX;
        oldY = event.clientY;
      });
      renderer.render(scene, camera);

      function animate() {
        model.rotation.y += 0.005;
        model.rotation.x += 0.005;
        model.rotation.z += 0.005;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      animate();
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  window.addEventListener("resize", function () {
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
  });
};
