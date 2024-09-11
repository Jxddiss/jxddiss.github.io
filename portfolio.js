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

let scrollAnimShouldPlay = true;
export function getScrollAnimShouldPlay() {
  return scrollAnimShouldPlay;
}

function setScrollanimationShouldPlay(value) {
  scrollAnimShouldPlay = value;
}

const logo = document.querySelector(".logo");
setupMutationObserver();

function addSvgClickListener() {
  let logoSvg = logo.contentDocument.querySelector("svg");
  logoSvg.addEventListener("click", () => {
    document.body.classList.remove("no-scroll");
    setScrollanimationShouldPlay(false);
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
  const threeActivated = true;
  const btnPlayDemoProject = document.querySelectorAll(".play-demo");
  const playVideoDialog = document.getElementById("video-dialog");
  const vidDialogTimeline = gsap.timeline();
  vidDialogTimeline.to(playVideoDialog, {
    height: "auto",
    width: "auto",
    duration: 0.5,
    ease: "bounce.out",
  });
  vidDialogTimeline.pause();

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
        setScrollanimationShouldPlay(true);
      } else {
        setScrollanimationShouldPlay(false);
      }
      gsap.to(window, {
        scrollTo: {
          y: goTo,
          offsetY: offsetY,
        },
        duration: 1,
        ease: "power2",
        onComplete: () => {
          setScrollanimationShouldPlay(true);
        },
      });
    });
  });

  const closeVidHandler = (event) => {
    if (!playVideoDialog.contains(event.target)) {
      if (!playVideoDialog.open) {
        return;
      }
      vidDialogTimeline.reverse();
      setTimeout(() => {
        playVideoDialog.close();
      }, 500);
      document.removeEventListener("click", closeVidHandler);
    }
  };

  btnPlayDemoProject.forEach((btn) => {
    const tlText = gsap.timeline();
    const textElem = btn.querySelector(".play-text");
    tlText.to(textElem, {
      text: {
        value: "Jouez la démo",
      },
      duration: 0.7,
    });
    tlText.pause();
    btn.addEventListener("mouseover", () => {
      tlText.play();
    });

    btn.addEventListener("mouseout", () => {
      tlText.reverse();
    });

    btn.addEventListener("click", () => {
      if (playVideoDialog.open) return;
      playVideoDialog.children[0].src = btn.dataset.video;
      playVideoDialog.children[0].setAttribute("autoplay", "");
      playVideoDialog.show();
      vidDialogTimeline.play();
      setTimeout(() => {
        document.addEventListener("click", closeVidHandler);
      }, 100);
    });
  });
});
