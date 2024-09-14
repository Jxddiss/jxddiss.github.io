import { animateHero, animationMatrix, animationSkills } from "./animation.js";
import { initializeAllAnimationPlus3D } from "./computer.js";
import { projectAnimation } from "./projet.js";
import { terminalMoreSkills } from "./terminal.js";
import { initializeAndAnimate3DAbout } from "./about.js";

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
const showNavBtn = document.getElementById("show-nav");
const header = document.querySelector("header");

function openNav() {
  header.classList.toggle("open");
  if (header.classList.contains("open")) {
    document.body.classList.add("no-scroll");
    showNavBtn.innerHTML = `<i class="bi bi-x"></i>`;
  } else {
    document.body.classList.remove("no-scroll");
    showNavBtn.innerHTML = `<i class="bi bi-list"></i>`;
  }
}

setupMutationObserver();

function addSvgClickListener() {
  let logoSvg = logo.contentDocument.querySelector("svg");
  logoSvg.addEventListener("click", () => {
    openNav();
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
  const threeActivated = true;
  const btnPlayDemoProject = document.querySelectorAll(".play-demo");
  const playVideoDialog = document.getElementById("video-dialog");
  const vidDialogTimeline = gsap.timeline();
  const allShowMoreBtns = document.querySelectorAll(".show-more");

  vidDialogTimeline.to(playVideoDialog, {
    height: "clamp(600px, 70vh, 70vh)",
    width: "clamp(350px, 70vw, 70vw)",
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
  initializeAndAnimate3DAbout();

  showNavBtn.addEventListener("click", () => {
    openNav();
  });

  btnNavList.forEach((btnNav) => {
    btnNav.addEventListener("click", () => {
      openNav();
      document.body.classList.remove("no-scroll");
      let goTo = btnNav.dataset.go;
      let offsetY = 10;

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

  allShowMoreBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const parent = btn.parentElement;
      const description = parent.querySelector(".description");
      const mediasHolder = parent.querySelector(".medias-holder");
      mediasHolder.classList.toggle("open");
      description.classList.toggle("open");
      if (description.classList.contains("open")) {
        btn.innerHTML = `<i class="bi bi-x"></i>`;
      } else {
        btn.innerHTML = `<i class="bi bi-plus"></i>`;
      }
    });
  });
});
