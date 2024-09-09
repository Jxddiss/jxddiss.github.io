import { animateHero, animationMatrix, animationSkills } from "./animation.js";
import { initializeAllAnimationPlus3D } from "./computer.js";
import { projectAnimation } from "./projet.js";
import { terminalMoreSkills } from "./terminal.js";

gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  Observer,
  Draggable,
  MotionPathPlugin,
  TextPlugin,
  ScrollToPlugin
);

document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const btnNavList = document.querySelectorAll(".link-nav");
  const threeActivated = false;

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
      gsap.to(window, {
        scrollTo: {
          y: 0,
          x: 0,
        },
        duration: 1,
        ease: "power2",
      });
    });
  });

  btnNavList.forEach((btnNav) => {
    btnNav.addEventListener("click", () => {
      let goTo = btnNav.dataset.go;
      console.log(goTo);

      gsap.to(window, {
        scrollTo: goTo,
        duration: 1,
        ease: "power2",
      });
    });
  });
});
