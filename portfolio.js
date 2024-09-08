import { animateHero, animationMatrix, animationSkills } from "./animation.js";
import { initializeAllAnimationPlus3D } from "./computer.js";
import { terminalMoreSkills } from "./terminal.js";

const logo = document.querySelector(".logo");

document.addEventListener("DOMContentLoaded", () => {
  if (Math.floor(window.scrollY) > 0) {
    document.body.classList.remove("no-scroll");
    animateHero(0);
    animationMatrix();
  } else {
    window.scrollTo(0, 0);
    initializeAllAnimationPlus3D();
  }
  animationSkills();
  terminalMoreSkills();
});

logo.addEventListener("load", () => {
  let logoSvg = logo.contentDocument.querySelector("svg");
  logoSvg.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
});
