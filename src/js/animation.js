import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

export const animateHero = (delai = 4) => {
  document.querySelectorAll(".no-opacity").forEach((element) => {
    element.classList.remove("no-opacity");
  });

  const timelineHeroSection = gsap.timeline();

  timelineHeroSection
    .from(".hero-section", {
      opacity: 0,
      background: "#0a0a0",
      ease: "power1.inOut",
    })
    .to(".power-anim", {
      duration: 0.5,
      width: "100%",
      background:
        "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
    })
    .to(".power-anim", {
      duration: 0.2,
      height: "100%",
      top: "0",
      left: "0",
      onComplete: () => {
        document.querySelector(".hero-section").classList.add("backlight");
      },
    })
    .to(".power-anim", {
      duration: 0.3,
      opacity: 0,
    })
    .fromTo(
      ".hero-section",
      {
        background: "#161515",
      },
      {
        background: "#0e0d0d",
        ease: "bounce.out",
        clearProps: true,
      }
    )
    .from("#nav", {
      opacity: 0,
      duration: 0.1,
    })
    .fromTo(
      "#nav",
      {
        width: 0,
        padding: 0,
        height: "100px",
        duration: 0.3,
        ease: "bounce.out",
      },
      {
        width: "90%",
        height: "auto",
        paddingLeft: "20px",
        paddingRight: "20px",
        clearProps: true,
      }
    )
    .from(".logo, .sections", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    })
    .to(".name", {
      duration: 1.2,
      text: {
        value: "Nicholson Rainville Jacques",
        delimiter: "",
      },
    })
    .to(".job", {
      duration: 1.5,
      text: {
        value: "Étudiant en développement web et mobile",
        delimiter: "",
      },
      ease: "power1.inOut",
      onComplete: () => {
        document.body.classList.remove("no-scroll");
        document.querySelector("nav").classList.remove("no-click");
      },
    })
    .from(".ascii-art-container", {
      opacity: 0,
      duration: 1,
    });
  if (delai > 0) {
    timelineHeroSection.delay(delai);
  }
};

export const animationMatrix = () => {
  const matrixCanvas = document.getElementById("matrix-effect-container");
  const ctx = matrixCanvas.getContext("2d", {
    willReadFrequently: true,
    alpha: false,
  });

  matrixCanvas.width = matrixCanvas.offsetWidth;
  matrixCanvas.height = matrixCanvas.offsetHeight;

  const width = matrixCanvas.width;
  const height = matrixCanvas.height;
  const charDistance = 15;
  const columns = Math.floor(width / charDistance) + 1;
  const yPosition = Array(columns).fill(0);

  ctx.fillStyle = "#0f0f0f";
  ctx.fillRect(0, 0, width, height);

  const letterAnimation = () => {
    ctx.fillStyle = "#0001";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#21df21";
    ctx.font = `20px monospace`;

    yPosition.forEach((y, index) => {
      const text = String.fromCharCode(Math.random() * 128);
      const x = index * charDistance;
      ctx.fillText(text, x, y);
      if (y > 100 + Math.random() * 10000) {
        yPosition[index] = 0;
      } else {
        yPosition[index] = y + charDistance;
      }
    });
  };

  setInterval(letterAnimation, 70);
};

export const animationSkills = () => {
  const skillsList = document.querySelectorAll(".skill");
  const skillsContainer = document.querySelector(".skills-container");
  const containerHeight = skillsContainer.offsetHeight;
  const containerWidth = skillsContainer.offsetWidth;
  const tl = gsap.timeline();

  const generatePosition = (nbSkills, index) => {
    const cols = Math.ceil(nbSkills / Math.sqrt(nbSkills));
    const rows = Math.ceil(nbSkills / cols);

    const cellWidth = containerWidth / cols;
    const cellHeight = containerHeight / rows;

    const row = Math.floor(index / cols);
    const col = index % cols;

    let posX =
      col * cellWidth + cellWidth / 2 - skillsList[index].offsetWidth / 2;
    let posY =
      row * cellHeight + cellHeight / 2 - skillsList[index].offsetHeight / 2;

    return { posX, posY };
  };

  let shouldMove = true;

  const addTextAnimEvent = (skill) => {
    let tlEnter = gsap.timeline();

    skill.addEventListener("mouseover", () => {
      gsap.to(skill, {
        background: "#000",
      });
      mouseOverAnimationTextAnimation(skill, tlEnter);
    });
    skill.addEventListener("mouseout", () => {
      gsap.to(skill, {
        background: "transparent",
      });
    });
  };

  const mouseOverAnimationTextAnimation = (skill, tlEnter) => {
    const skillNameContainer = skill.querySelector(".skill-name");
    const name = skill.dataset.name;
    const progress = skill.dataset.progress;
    let progressText = "";
    for (let i = 0; i < progress; i++) {
      progressText += "|";
    }

    if (tlEnter.isActive()) {
      return;
    } else {
      tlEnter
        .to(
          skillNameContainer,
          {
            visibility: "hidden",
            opacity: 0,
            duration: 0,
            clearProps: "all",
          },
          0
        )
        .to(
          skillNameContainer.children[1],
          {
            text: {
              value: "",
            },
            duration: 0,
          },
          0
        )
        .to(
          skillNameContainer.children[0],
          {
            text: {
              value: "",
            },
            duration: 0,
          },
          0
        );
      tlEnter.kill();
      tlEnter = gsap.timeline();
    }

    tlEnter
      .to(skillNameContainer, {
        visibility: "visible",
        duration: 0,
      })
      .to(skillNameContainer, {
        opacity: 1,
        duration: 0.2,
        ease: "power1.inOut",
      })
      .to(skillNameContainer.children[1], {
        text: {
          value: progressText,
        },
        duration: progressText.length * 0.2,
      })
      .to(
        skillNameContainer.children[0],
        {
          text: {
            value: name,
            duration: name.length * 0.2,
          },
        },
        0
      );
    skill.addEventListener("mouseout", () => tlEnter.reverse());
  };

  skillsList.forEach((skill) => {
    addTextAnimEvent(skill);
  });

  ScrollTrigger.create({
    trigger: ".skills-section",
    start: "top center",
    end: "bottom 100px",
    // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
    onEnter: () => {
      skillsList.forEach((skill, index) => {
        const { posX, posY } = generatePosition(skillsList.length, index);
        tl.fromTo(
          skill,
          {
            scale: 0,
            visibility: "hidden",
            top: containerHeight / 2,
            left: containerWidth / 2,
          },
          {
            scale: 1,
            visibility: "visible",
            top: posY,
            left: posX,
            duration: index * 0.02 + 0.2,
            ease: "power1.inOut",
            delay: index * 0.01,
            clearProps: "scale",
          }
        );
      });
    },
    onLeaveBack: () => {
      shouldMove = false;
      skillsList.forEach((skill) => {
        gsap.to(skill, {
          scale: 0,
          opacity: 0,
          duration: 0.2,
          clearProps: true,
        });
      });
    },
  });
};
