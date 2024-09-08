const logo = document.querySelector(".logo");
const plusBouton = document.getElementById("plus");
const plusSkillsDialogue = document.getElementById("more-skills");
const linesElements = document.querySelectorAll(".line");

logo.addEventListener("load", () => {
  let logoSvg = logo.contentDocument.querySelector("svg");
  logoSvg.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
});

let tl = gsap.timeline();
let lineTimeline = gsap.timeline();

const closeHandler = (event) => {
  if (!plusSkillsDialogue.contains(event.target)) {
    if (!plusSkillsDialogue.open) {
      return;
    }
    tl.reverse(0);
    setTimeout(() => {
      plusSkillsDialogue.close();
      closeLines();
      lineTimeline.kill();
      lineTimeline = gsap.timeline();
    }, 500);
    document.removeEventListener("click", closeHandler);
  }
};

plusBouton.addEventListener("click", () => {
  if (tl) {
    tl.kill();
    tl = gsap.timeline();
  }
  plusSkillsDialogue.show();

  tl.to(plusSkillsDialogue, {
    height: "70vh",
    width: "70vw",
    duration: 0.5,
    ease: "bounce.out",
  });

  setTimeout(() => {
    cliMoreSkillAnimation();
  }, 500);

  setTimeout(() => {
    document.addEventListener("click", closeHandler);
  }, 100);
});

function cliMoreSkillAnimation() {
  linesElements.forEach((line, index) => {
    let commandSpan = line.children[3];
    lineTimeline
      .to(line, {
        display: "block",
        opacity: 1,
        duration: 0,
      })
      .to(commandSpan, {
        text: {
          value: commandSpan.dataset.command,
        },
        duration: 2,
        onComplete: () => {
          doCommand(commandSpan.dataset.command, index, line);
        },
      });
  });
}

function closeLines() {
  lineTimeline.kill();
  lineTimeline = gsap.timeline();

  linesElements.forEach((line) => {
    let commandSpan = line.children[3];
    lineTimeline
      .to(line, {
        display: "block",
        opacity: 0,
        duration: 0,
      })
      .to(commandSpan, {
        text: {
          value: "",
        },
        duration: 0,
      });
  });
}

function doCommand(command, index, line) {
  switch (command) {
    case "clear":
      clear(index);
      break;
  }
  gsap.to(line.children[4], {
    text: {
      value: "",
    },
    duration: 0,
  });
  gsap.to(line.children[3], {
    text: {
      value: "",
    },
    duration: 0,
  });
}

function clear(index) {
  linesElements.forEach((line, ind) => {
    if (ind <= index) {
      line.style.display = "none";
    }
  });
}
