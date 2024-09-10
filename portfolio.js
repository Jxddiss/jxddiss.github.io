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

const logo = document.querySelector(".logo");
setupMutationObserver();

function addSvgClickListener() {
  let logoSvg = logo.contentDocument.querySelector("svg");
  logoSvg.addEventListener("click", () => {
    document.body.classList.remove("no-scroll");
    gsap.to(window, {
      scrollTo: {
        y: 0,
      },
      duration: 1,
      ease: "power2",
    });
  });
}

function setupMutationObserver() {
  const observer = new MutationObserver(() => {
    if (logo.contentDocument) {
      const logoSvg = logo.contentDocument.querySelector("svg");
      if (logoSvg) {
        addSvgClickListener();
        observer.disconnect();
      }
    }
  });

  observer.observe(logo, { attributes: true, childList: true, subtree: true });
}

document.addEventListener("DOMContentLoaded", () => {
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

  btnNavList.forEach((btnNav) => {
    btnNav.addEventListener("click", () => {
      document.body.classList.remove("no-scroll");
      let goTo = btnNav.dataset.go;
      let offsetY = 0;

      if (goTo.includes("projets")) {
        offsetY = 45;
      }
      gsap.to(window, {
        scrollTo: {
          y: goTo,
          offsetY: offsetY,
        },
        duration: 1,
        ease: "power2",
      });
    });
  });
});
