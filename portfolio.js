import { animateHero, animationMatrix, animationSkills } from "./animation.js";
import { initializeAllAnimationPlus3D } from "./computer.js";
import { projectAnimation } from "./projet.js";
import { terminalMoreSkills } from "./terminal.js";

const logo = document.querySelector(".logo");
const threeActivated = false;
gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  Observer,
  Draggable,
  MotionPathPlugin,
  TextPlugin
);

document.addEventListener("DOMContentLoaded", () => {
  if (Math.floor(window.scrollY) > 0 || !threeActivated) {
    document.body.classList.remove("no-scroll");
    animateHero(0);
    animationMatrix();
  } else {
    window.scrollTo(0, 0);
    initializeAllAnimationPlus3D();
  }
  animationSkills();
  terminalMoreSkills();
  projectAnimation();

  logo.addEventListener("load", () => {
    let logoSvg = logo.contentDocument.querySelector("svg");
    logoSvg.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  });
});
