import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const wiiModel = new URL(
  "../assets/model/wii_controller/wii_controller.glb",
  import.meta.url
);
const cdModel = new URL(
  "../assets/model/lowpoly_cd/lowpoly_cd.glb",
  import.meta.url
);

export const initializeAndAnimate3DAbout = () => {
  const wiiCanvasElement = document.getElementById("wii-container");
  const cdCanvasElement = document.getElementById("cd-container");
  const aboutSection = document.getElementById("a-propos");

  const introTexts = document.querySelectorAll(".intro-text");
  const paragraphOne =
    "Passionné par la technologie depuis tout jeune, la programmation est pour moi un " +
    "moyen d'exprimer ma créativité, autant du côté frontend que backend";
  const paragraphTwo =
    " Après être passé par des études en sciences humaines, j'ai fini par suivre ma passion" +
    "<br><br>Donc aujourd'hui, je suis en train de terminer un DEC technique en développement web et mobile.";
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
    wiiModel.href,
    wiiCanvasElement,
    {
      x: -3,
      y: -38,
      z: 220,
    },
    25,
    -1
  );

  initializeModelInAbout(
    cdModel.href,
    cdCanvasElement,
    {
      x: -30,
      y: -7.4,
      z: 370,
    },
    25,
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
      // const gui = new dat.GUI();

      // gui.add(camera.position, "y", -30, 30).name("camera Y model");
      // gui.add(camera.position, "x", -30, 30).name("camera X model");
      // gui.add(camera.position, "z", -30, 30).name("camera Z model");

      let oldX = 0;
      let oldY = 0;
      container.addEventListener("mousemove", (event) => {
        let changeX = event.clientX - oldX;
        let changeY = event.clientY - oldY;

        gsap.to(model.position, {
          x: camera.position.x - (changeX / ratioModifCamera) * direction,
          y: camera.position.y + (changeY / ratioModifCamera) * direction,
          duration: 0.1,
          ease: "power1.inOut",
          onComplete: () => {
            oldX = event.clientX;
            oldY = event.clientY;
          },
        });
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
