export const terminalMoreSkills = () => {
  const plusBouton = document.getElementById("plus");
  const plusSkillsDialogue = document.getElementById("more-skills");
  const linesElements = document.querySelectorAll(".line");

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
        gsap.set(".typing-indicator", {
          text: {
            value: "|",
          },
        });
      }, 500);
      document.removeEventListener("click", closeHandler);
    }
  };

  plusBouton.addEventListener("click", () => {
    if (plusSkillsDialogue.open) {
      return;
    }
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
      let command = commandSpan.dataset.command;
      lineTimeline
        .to(line, {
          display: "block",
          opacity: 1,
          duration: 0,
        })
        .to({}, { duration: 0.2 })
        .to(commandSpan, {
          text: {
            value: command,
          },
          duration: command.length * 0.2,
          onComplete: () => {
            doCommand(command, index, line);
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
    gsap.to(".ls-result", {
      display: "none",
      opacity: 0,
      duration: 0,
    });
  }

  function doCommand(command, index, line) {
    switch (command) {
      case "clear":
        clear(index);
        break;
      case "ls":
        ls();
        break;
      default:
        break;
    }
    gsap.to(line.children[4], {
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

    gsap.to(".ls-result", {
      display: "none",
      duration: 0,
    });
  }

  function ls() {
    gsap.to(".ls-result", {
      display: "block",
      opacity: 1,
      duration: 0,
    });
    lineTimeline.to({}, { duration: 1 });
  }
};
