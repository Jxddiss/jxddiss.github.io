import { AsciiMorph2 } from "./lib/asciiMorph.min.js";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const dirHomeInnerHtmlTemplates = [
  {
    name: "home",
    template: `
  <ul>
      <li>..</li>
      <li>/more-skills</li>
      <li>/super-awesome-projects</li>
      <li>cat.png</li>
      <li>/pictures</li>
      <li>/documents</li>
      <li>/other</li>
      <li>definitely_not_a_virus.sh</li>
  </ul>
  `,
    previousLocation: "home",
  },
  {
    name: "more-skills",
    template: `
  <ul>
      <li>..</li>
      <li>skills.txt</li>
  </ul>
  `,
    previousLocation: "home",
  },
  {
    name: "super-awesome-projects",
    template: `
    <ul>
      <li>..</li>
      <li>UniBank</li>
      <li>ArtSync</li>
      <li>Msn_Live_Messenger</li>
  </ul>
    `,
    previousLocation: "home",
  },
  {
    name: "pictures",
    template: `
  <ul>
      <li>..</li>
      <li>sky.png</li>
      <li>mountain.png</li>
      <li>sea.png</li>
  </ul>
    `,
    previousLocation: "home",
  },
  {
    name: "documents",
    template: `
    <ul>
      <li>..</li>
      <li>secret.txt</li>
  </ul>
    `,
    previousLocation: "home",
  },
  {
    name: "other",
    template: `
    <ul>
      <li>..</li>
  </ul>
    `,
    previousLocation: "home",
  },
];

const catResults = [
  {
    name: "cat.png",
    result: "Cant read this file type",
  },
  {
    name: "sky.png",
    result: "Cant read this file type",
  },
  {
    name: "mountain.png",
    result: "Cant read this file type",
  },
  {
    name: "sea.png",
    result: "Cant read this file type",
  },
  {
    name: "definitely_not_a_virus.sh",
    result: "Uh oh, you have been infected",
  },
  {
    name: "UniBank",
    result:
      "<a href='https://github.com/Jxddiss/Projet_guichet_banque' target='_blank'>Allez voir le projet sur github</a>",
  },
  {
    name: "ArtSync",
    result:
      "<a href='https://artsync.tech' target='_blank'>Allez visiter le site</a>",
  },
  {
    name: "Msn_Live_Messenger",
    result:
      "<a href='https://msn.nicholsonrj.com' target='_blank'>Allez visiter le site</a>",
  },
  {
    name: "secret.txt",
    result:
      "😡😡😡 Vous ne devriez pas fouiller ou vous n'avez pas le droit 😡😡😡",
  },
];

const basicLineInnerHtmlTemplate = `
<span class="username">nick@portfolio</span>
<span class="location">~/more-skills</span>
<span class="user-type">$</span>
<span class="command" data-command="cat skills.txt"></span>
<span class="typing-indicator" style="display: none;">|</span>
`;

const addedLines = [];

export const terminalMoreSkills = () => {
  const plusBouton = document.getElementById("plus");
  const plusSkillsDialogue = document.getElementById("more-skills");
  let linesElementsDomElements = document.querySelectorAll(".line");
  let linesElements = Array.from(linesElementsDomElements);

  let moreSkillContainer = document.querySelector(".cat-result-more-skills");
  const inputLine = document.getElementById("input-line");

  let tl = gsap.timeline();
  let lineTimeline = gsap.timeline();
  let stopAscii = false;
  let asciiPlaying = false;
  let cdAnimPlaying = false;

  inputLine.querySelector("input").addEventListener("keydown", (event) => {
    linesElementsDomElements = document.querySelectorAll(".line");
    linesElements = Array.from(linesElementsDomElements);
    if (event.key === "Enter") {
      const command = event.target.value;
      const index = linesElements.length - 2;
      if (command !== "clear") {
        const newLine = document.createElement("div");
        newLine.classList.add("line");
        gsap.set(newLine, { display: "block", opacity: 1 });
        newLine.innerHTML = basicLineInnerHtmlTemplate;
        newLine.querySelector(".command").dataset.command = command;
        newLine.querySelector(".command").textContent = command;
        newLine.dataset.location = inputLine.dataset.location;
        newLine.querySelector(".location").innerText =
          inputLine.querySelector(".location").innerText;
        plusSkillsDialogue.insertBefore(newLine, inputLine);
        addedLines.push(newLine);
        const lastLine = linesElements.splice(linesElements.length - 1, 1);
        linesElements.push(newLine);
        linesElements.push(lastLine);
      }
      event.target.value = "";
      doCommand(command, index, inputLine, false);
    }
  });

  const closeHandler = (event) => {
    if (!plusSkillsDialogue.contains(event.target)) {
      closeDialogue();
    }
  };

  function closeDialogue() {
    linesElementsDomElements = document.querySelectorAll(".line");
    linesElements = Array.from(linesElementsDomElements);
    if (!plusSkillsDialogue.open) {
      return;
    }
    tl.reverse(0);
    addedLines.forEach((line) => {
      line.remove();
      linesElements.splice(linesElements.indexOf(line), 1);
    });
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
      inputLine.dataset.location = "more-skills";
      inputLine.querySelector(".location").innerHTML = "~/more-skills";
      cdAnimPlaying = true;
    }, 500);
    document.removeEventListener("click", closeHandler);
  }

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
      height: "clamp(600px, 70vh, 70vh)",
      width: "clamp(350px, 70vw, 70vw)",
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
    linesElementsDomElements = document.querySelectorAll(".line");
    linesElements = Array.from(linesElementsDomElements);
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
            if (index !== linesElements.length - 1) {
              if (command.includes("cd")) {
                cdAnimPlaying = true;
              }
              doCommand(command, index, line);
            }
          },
        });
    });
  }

  function closeLines() {
    linesElementsDomElements = document.querySelectorAll(".line");
    linesElements = Array.from(linesElementsDomElements);
    lineTimeline.kill();
    lineTimeline = gsap.timeline();
    stopAscii = !stopAscii;

    gsap.set(moreSkillContainer, {
      display: "none",
    });

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
    gsap.to(".ls-result, .not-found", {
      display: "none",
      opacity: 0,
      duration: 0,
    });
  }

  function doCommand(commandeComplete, index, line, anim = true) {
    let command = commandeComplete.split(" ")[0];
    let param;
    if (commandeComplete.split(" ")[1]) {
      param = commandeComplete.split(" ")[1];
    }
    switch (command) {
      case "clear":
        clear(index);
        break;
      case "ls":
        ls(anim);
        break;
      case "cat":
        doCat(param);
        break;
      case "cd":
        if (!cdAnimPlaying) {
          doCd(param);
        }
        cdAnimPlaying = false;
        break;
      case "help":
        doHelp();
        break;
      case "exit":
        closeDialogue();
        break;
      default:
        doNotFound(command);
        break;
    }
    gsap.to(line.children[4], {
      text: {
        value: "",
      },
      duration: 0,
    });

    plusSkillsDialogue.scrollTop = plusSkillsDialogue.scrollHeight;
  }

  function clear(index) {
    linesElementsDomElements = document.querySelectorAll(".line");
    linesElements = Array.from(linesElementsDomElements);
    linesElements.forEach((line, ind) => {
      if (ind <= index) {
        line.style.display = "none";
      }
    });
    gsap.set(moreSkillContainer, {
      display: "none",
    });
    gsap.set(".ls-result, .not-found", {
      display: "none",
    });

    if (asciiPlaying) {
      stopAscii = true;
    }
  }

  function ls(anim) {
    if (anim) {
      gsap.to(".ls-result", {
        display: "block",
        opacity: 1,
        duration: 0,
      });
      lineTimeline.to({}, { duration: 1 });
    } else {
      const lsResult = document.createElement("div");
      lsResult.classList.add("ls-result");
      gsap.set(lsResult, { display: "block", opacity: 1 });
      const folder = dirHomeInnerHtmlTemplates.filter((item) => {
        return item.name === inputLine.dataset.location;
      })[0];
      lsResult.innerHTML = folder.template;
      plusSkillsDialogue.insertBefore(lsResult, inputLine);
      addedLines.push(lsResult);
    }
  }

  function doHelp() {
    const helpResult = document.createElement("div");
    helpResult.classList.add("ls-result");
    gsap.set(helpResult, { display: "block", opacity: 1 });
    helpResult.innerText = "Commandes disponibles : ls, cat, cd, help, exit";
    plusSkillsDialogue.insertBefore(helpResult, inputLine);
    addedLines.push(helpResult);
  }

  function doCat(param) {
    if (param) {
      let lowerParam = param.toLowerCase();
      switch (lowerParam) {
        case "skills.txt":
          stopAscii = false;
          catMoreSkills();
          break;
        default:
          let found = false;
          catResults.forEach((item) => {
            if (item.name === param) {
              const catResult = document.createElement("div");
              catResult.classList.add("ls-result");
              gsap.set(catResult, { display: "block", opacity: 1 });
              catResult.innerHTML = item.result;
              plusSkillsDialogue.insertBefore(catResult, inputLine);
              addedLines.push(catResult);
              found = true;
            }
          });
          if (!found) {
            doNotFound("cat", param);
          }
          break;
      }
    }
  }

  function doCd(param) {
    if (param) {
      let newLocation;
      let newLocationName = param.split("./").pop();
      switch (param) {
        case "..":
          newLocation = dirHomeInnerHtmlTemplates.filter((item) => {
            return item.name === inputLine.dataset.location;
          })[0];
          if (newLocation) {
            inputLine.dataset.location = newLocation.previousLocation;
            if (newLocation.previousLocation === "home") {
              inputLine.querySelector(".location").innerText = "~";
            } else {
              inputLine.querySelector(".location").innerText +=
                "/" + newLocation.name;
            }
          }
          break;
        default:
          let found = false;
          dirHomeInnerHtmlTemplates.forEach((item) => {
            if (item.name == newLocationName) {
              if (inputLine.dataset.location !== newLocationName) {
                inputLine.dataset.location = newLocationName;
                if (inputLine.dataset.location === "home") {
                  newLocationName = "~";
                  inputLine.querySelector(".location").innerText =
                    newLocationName;
                } else {
                  inputLine.querySelector(".location").innerText +=
                    "/" + newLocationName;
                }
              }
              found = true;
            }
          });
          if (!found) {
            doNotFound("cd", param);
          }
          break;
      }
    }
  }

  function doNotFound(command, param) {
    const lsResult = document.createElement("div");
    lsResult.classList.add("not-found");
    gsap.set(lsResult, { display: "block", opacity: 1 });
    if (command === "cat") {
      lsResult.innerHTML = `cat ${param} Fichier non trouvé`;
      plusSkillsDialogue.insertBefore(lsResult, inputLine);
      addedLines.push(lsResult);
    } else if (command === "cd") {
      lsResult.innerHTML = `${param} Dossier non trouvé`;
      plusSkillsDialogue.insertBefore(lsResult, inputLine);
      addedLines.push(lsResult);
    } else if (command !== "") {
      lsResult.innerHTML = `commande ${command} non trouvé tentez 'help' pour plus d'informations`;
      plusSkillsDialogue.insertBefore(lsResult, inputLine);
      addedLines.push(lsResult);
    }
  }

  let intervalRender;
  function catMoreSkills() {
    asciiPlaying = true;
    const asciiSkillContainer = document.getElementById("skill-logo-ascii");
    const skillNameAscii = document.getElementById("skill-name-ascii");
    const newMoreskillsContainer =
      plusSkillsDialogue.removeChild(moreSkillContainer);
    plusSkillsDialogue.insertBefore(newMoreskillsContainer, inputLine);

    gsap.set(newMoreskillsContainer, {
      display: "block",
    });

    AsciiMorph2(asciiSkillContainer, {
      x: 10,
      y: 15,
    });

    const skills = [
      "Angular",
      "SQL",
      "Python",
      "Android Studio",
      "Spring Boot",
      "PHP",
      "BootStrap",
      "GSAP",
    ];

    const skillsAscii = [
      [
        "                                         ...           ...                                           ",
        "                                      ...-:..          ..:-..                                        ",
        "                                 ....:==+=..             .-++=-.....                                 ",
        "                             ....:-+++++=...             ..=+++*+=:.....                             ",
        "                         ....:-+++++++++..                ..+*******+=:....                          ",
        "                     ....:=++++++++++++..                  ..+***********=:...                       ",
        "                 ....:=+++++++++++++++:..                   .:**************+=:....                  ",
        "                 ..=+++++++++++++++++-...                   ..-*****************+:.                  ",
        "                 ..+++++++++++++++++-..                      ..-*****************:.                  ",
        "                 ..++++++++++++++++=..                        ..=****************...                 ",
        "                  .++++++++++++++++..           ....           ..+***************..                  ",
        "                  .=++++++++++++++...           .:-...         ...+*************+.                   ",
        "                 ..=+++++++++++++:..           ..++:..           .:*************+.                   ",
        "                  .-++++++++++++:.            ..+**+...           .:************=...                 ",
        "                 ..-+++++++++++-...          ..=****=..            .-***********-.                   ",
        "                  .:++++++++++=...           .:******-..           ..=**********-.                   ",
        "                  .:*+++++++*+..            ..********..            ..+*********:.                   ",
        "                  ..********+...           ..+********+..            ..+********:.                   ",
        "                   .+******+:...          ..=**********=..            .:********..                   ",
        "                   .+******:..           ..-************-..            .:*******..                   ",
        "                   .=*****-.             ..**************:.             .-*****+.                    ",
        "                   .=****=..            ..+***************..           ...=**#*+..                   ",
        "                   .-***=..            ..:----------------:.             ..+##*=..                   ",
        "                   .-**+..             ....... ..... .   ...              ..+##-.                    ",
        "                   .:*+..                                                  ..*#-.                    ",
        "                   ..*:..                                                  ..:*:.                    ",
        "                    .-..                                                    ..-..                    ",
        "                    ..             ...      ....................              ..                     ",
        "                                   .:+*************************:.                                    ",
        "                                 ...****************###########*..                                   ",
        "                                 ..+************################+..                                  ",
        "                                 .-**************################=..                                 ",
        "                                ..************###################*:.                                 ",
        "                                 ...-********#################*=.....                                ",
        "                                   ....-+#**###############+-..... .                                 ",
        "                                       ...-+*##########*+-....                                       ",
        "                                          ...-+*####*+-.....                                         ",
        "                                              ..:++:..                                               ",
        "                                                 ...                                                 ",
      ],
      [
        "                                                       +++++                                        ",
        "                                                       ++ +++++++                                    ",
        "                                                       +++     +++++                                 ",
        "                                                         ++  ++   ++++                               ",
        "                                                          ++         ++                              ",
        "                                                          +++         +++                            ",
        "                                                           ++          +++                           ",
        "                                                           ++           ++                           ",
        "                                                           ++  +         ++                          ",
        "                                                           ++ +++         +++                        ",
        "                                                           +++++++         +++++                     ",
        "                                                            +++ +++            +++                   ",
        "                                                                  ++         ++++++                  ",
        "                                                                             +++                     ",
        "                                                                              +++++                  ",
        "              +++++      +++++                =======     ========    ====        ++                ",
        "              ++++++     +++++              =========   ============  ====                           ",
        "              ++++++    ++++++  +++    ++++ ===        ====     -===  ====                           ",
        "              +++++++   ++++++  ++++   +++  ======     ====      ===- ====                           ",
        "              +++ +++  +++ ++++ ++++   +++   =======   ===-      ==== ====                           ",
        "              +++ ++++++++ ++++  ++++ ++++      ====== ====      ==== ====                           ",
        "              +++  ++++++  ++++   +++ +++          ===-====      ===  ====                           ",
        "             ++++  ++++++  ++++   +++++++   =     -===  ====   =====  ====                           ",
        "             ++++   ++++   ++++    +++++    ==========   ==========   ========= ====                ",
        "             +++     ++     +++    ++++        ===         ========== ========= ===-                ",
        "                               +++++++                            ==                                 ",
        "                               ++++                                                           ",
      ],
      [
        "                                              ********                                               ",
        "                                        *******************                                          ",
        "                                      ***********************                                        ",
        "                                     *****   *****************                                       ",
        "                                     *****  ******************                                       ",
        "                                     *************************                                       ",
        "                                     *************************                                       ",
        "                               ******************************* ::::::                                ",
        "                            ********************************** :::::::::                             ",
        "                          ************************************ :::::::::::                           ",
        "                          ************************************ :::::::::::                           ",
        "                         ************************************* ::::::::::::                          ",
        "                         ************************************* ::::::::::::                          ",
        "                         ***********************************  :::::::::::::                          ",
        "                         *****************+::::::::::::::::::::::::::::::::                          ",
        "                         ************* ::::::::::::::::::::::::::::::::::::                          ",
        "                         ************ :::::::::::::::::::::::::::::::::::::                          ",
        "                         ************ :::::::::::::::::::::::::::::::::::::                          ",
        "                          *********** ::::::::::::::::::::::::::::::::::::                           ",
        "                          ***********::::::::::::::::::::::::::::::::::::                            ",
        "                            *********:::::::::::::::::::::::::::::::::::                             ",
        "                              *******:::::::::::::                                                   ",
        "                                     ::::::::::::::::::::::::::                                      ",
        "                                     ::::::::::::::::::::::::::                                      ",
        "                                      :::::::::::::::::   :::::                                      ",
        "                                      :::::::::::::::::: :::::                                       ",
        "                                       :::::::::::::::::::::::                                       ",
        "                                         ::::::::::::::::::                                          ",
      ],
      [
        "                                                 ..                                                  ",
        "                                               .=++=.                                                ",
        "                                               -++++:                                                ",
        "                                               -++++:                                                ",
        "                                               -++++:                                                ",
        "                                             .+%%%%%#=.                                              ",
        "                                           .*%%%%##%%%%+.                                            ",
        "                                          .#%%#:.  .-%%%+                                            ",
        "                                          -%%#.      :%%%.                                           ",
        "                                          -%%#.      :%%%.                                           ",
        "                                          .#%%#:   .-%%%+                                            ",
        "                                          .+#%%%%%%%%%%#=                                            ",
        "                                         .=+++#%%%%%%#+++-                                           ",
        "                                        .-+++++++:-+++++++-.              .-.                        ",
        "                                        -+++++++-..=+++++++----------:.  :-.                         ",
        "                         .::.          :+++++++=.  .=+++++++============-:.                          ",
        "                       .-++++:        :+++++++=.    .++++++++=====-:-=====:.                         ",
        "    .                .=+++++++=.     :+++++++=.      .++++++++====:.-======-.                  .    ",
        "    .                .=+++++++++-.  .=++++++=.        :++++++++=============-.                 .    ",
        "    :.                .-++++++++++=:=+++++++:         .:++++++++=============-.               .-    ",
        "     -.                 .=+++++++++++++++++:            -++++++++=============:               -     ",
        "      .                   :+++++++++++++++-....      ....=+++++++=============-.....         :      ",
        "      =                     :=++++++++++++++++++++++++++++++++++++============-:::::.       .       ",
        "       .                      .-+++++++++++++++++++++++++++++++++++=====..-===:             .       ",
        "                               -++++++++++++++++++++++++++++++++++++=========-.                      ",
        "                              :+++++++===++++++++++++++++++=-++++++++=======-.                       ",
        "                             .+++++++=.  ....:::----:::...   .++++++++=====-.                        ",
        "                            .++++++++:                        :++++++++===:                          ",
        "      .                    .++++++++:                          -++++++++:.                   :      ",
        "       :                  .=+++++++:                            -+++++++-.                  :       ",
        "        -.               .-+++++++:                              -+++++++:                .-        ",
        "          =.             .=++++++-.                              .=++++++-.             .+          ",
        "            =.           .=+++++:                                 .-+++++-.           .=            ",
        "              :          .=+++:.                                    .-+++-.          -              ",
        "               :         .:-:                                         .:-.          :               ",
        "               -.                                                                  .=               ",
        "                :.                                                                 -                ",
        "                 :                                                                :                 ",
        "                  -.                                                            .-                  ",
        "                   @=.                                                        .+@                    ",
        "                       @@*-:..                                        ..:-#@@                        ",
        "                             %=:                                    :=%                              ",
        "                                %:                                :%                                 ",
        "                                  *..          ......          .:#                                   ",
        "                                    #-:...::=+@      @+-:....:=#                                     ",
      ],
      [
        "                                                           ",
        "                                                :          ",
        "                     :::::::::::::::::          :          ",
        "                 :::::::::::::::::::::::::     :::         ",
        "              ::::::::::::::::::::::::::::::: :::::        ",
        "            :::::::::::::::::::::::::::::::::::: ::        ",
        "          :::::::::::::::::::::::::::::::::::::  :::       ",
        "         ::::::::::::::::::::::::::::::::::::     ::       ",
        "        :::::::::::::::::::::::::::::::::::       :::      ",
        "       :::::::::::::::::::::::::::::::::           ::      ",
        "      :::::::::::::::::::::::::::::.               ::      ",
        "      ::::::::::::::::                             :::     ",
        "     ::::::::::::::                                :::     ",
        "     ::::::::::::                                   ::     ",
        "     ::::::::::                             :       ::     ",
        "     :::::::::                            ::        ::     ",
        "     :::::::::                           :.        :::     ",
        "     :::::::::                         ::          :::     ",
        "      ::::::::                      ::::          .::      ",
        "      ::::::::                   :::::            :::      ",
        "       ::::::::              ::::::              :::       ",
        "        ::::::::       :::::::::               ::::        ",
        "         ::::::::::::::::::                  :::::         ",
        "          ::::::   ::.                 ::::::::::          ",
        "            ::::   ::::::::::::::::::::::::::::            ",
        "              :::::::::::::::::::::::::::::::              ",
        "                 :::::::::::::::::::::::::                 ",
        "                     :::::::::::::::::                      ",
      ],
      [
        "                                ..:-----------------========+====-:.                                 ",
        "                         .:------===+++++++++++++++++++++++++++++++++**++=:.                        ",
        "                   ..:---===++++++++++++++++++++++++++++++++++++++++++++++****+-.                    ",
        "               .:---==++++++++++++++++++++++-.:::::.++++++++++++++++++++++++++**##*-.                ",
        "            .:---=++++++++++++++++++++++++++:%@@@@#.+++++++++++++++++++++++++++++++*##=.            ",
        "          :--=++++++++++++++++++++++++++++++:@@@@@--++++++++++++++++++++++++++++++++++*##=.         ",
        "        ---++++++++++++++++++++++++++++++++:+@@@@@:=+++++++++++++++++++++++++++++++++++++*#+        ",
        "      -==+++++++++++--%%%%%%%%%%%%*-..=++++ #@@@@@%%%%%%#=:..=++.*%%%%%%%%%%%#=:.:+++++++++*#+      ",
        "    :==+++++++++++++.*@@@@@@@@@@@@@@@@%.-+-.@@@@@@@@@@@@@@@@@=.=.@@@@@@@@@@@@@@@@@+.=++++++++*#-    ",
        "   :==+++++++++++++=.@@@@@#+++**%@@@@@@@=::*@@@@@*****#@@@@@@@..-@@@@@*+++**@@@@@@@%.=++++++++*#=   ",
        "  :==++++++++++++++-=@@@@@.=+++++-:@@@@@%..@@@@@+.+++++:+@@@@@: %@@@@#.+++++=.+@@@@@+:+++++++++*#-  ",
        " .+=+++++++++++++++.%@@@@# +++++++:%@@@@@.-@@@@@:=+++++:#@@@@% :@@@@@-:+++++++:@@@@@*:++++++++++##. ",
        " -++++++++++++++++=:@@@@@+:+++++++.%@@@@%.*@@@@@.++++++.@@@@@+ *@@@@@.=++++++-=@@@@@=:+++++++++++#= ",
        " -++++++++++++++++:=@@@@@:+++++++.=@@@@@= %@@@@+-+++++--@@@@@-.%@@@@#:++++++=.%@@@@%.++++++++++++#+ ",
        " -++++++++++++++++.#@@@@%:+++++:.#@@@@@+ -@@@@@.=+++++.*@@@@@..@@@@@==++++-.-@@@@@@.=++++++++++++#= ",
        " .+++++++++++++++=:@@@@@%#####%@@@@@@@-::%@@@@#.+++++=.@@@@@+ *@@@@@#####%@@@@@@@#.=++++++++++++##. ",
        "  :++++++++++++++:*@@@@@@@@@@@@@@@@#-:=+:@@@@@=-+++++-+@@@@@..@@@@@@@@@@@@@@@@@+.-+++++++++++++*#-  ",
        "   -+++++++++++++.%@@@@%*******=:.:=+++--*****.++++++.+****= =@@@@@*******+-..-+++++++++++++++*#=   ",
        "    :+++++++++++-:@@@@@-=+++++++++++++++++++++++++++++++++++.*@@@@%.+++++++++++++++++++++++++*#-    ",
        "      =+++++++++:*@@@@@.+++++++++++++++++++++++++++++++++++=.@@@@@+-+++++++++++++++++++++++*#+      ",
        "        =++++++=.@@@@@*:+++++++++++++++++++++++++++++++++++-=@@@@@.=+++++++++++++++++++++*#+        ",
        "         .-++++=.......=+++++++++++++++++++++++++++++++++++-.......+++++++++++++++++++*##=.         ",
        "            .-++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**##=.            ",
        "               .:=++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**##*-.                ",
        "                   .:=+++++++++++++++++++++++++++++++++++++++++++++++++++**##*+-.                    ",
        "                         :-=+***+++++++++++++++++++++++++++++++++***###*+=:                          ",
        "                                .:-++++***************######*****=-.                                 ",
      ],
      [
        "                        #####################################################                        ",
        "                       #######################################################                       ",
        "                      #########################################################                      ",
        "                      #########################################################                      ",
        "                      #########################################################                      ",
        "                      #########################################################                      ",
        "                      #########################################################                      ",
        "                      #################                  ######################                      ",
        "                     ##################                    :####################                     ",
        "                     ##################     ##########       ###################                     ",
        "                     ##################     ############     ###################                     ",
        "                    ###################     ############     %###################                    ",
        "                   ####################     ############     #####################                   ",
        "                  #####################     ###########     #######################                  ",
        "              #########################                   #############################              ",
        "              #########################                    ############################              ",
        "              #########################     ##########       ##########################              ",
        "                  #####################     #############     %####################                  ",
        "                   ####################     ##############     ###################                   ",
        "                    ###################     ##############     ##################                    ",
        "                     ##################     #############      #################                     ",
        "                     ##################     ##########*       ##################                     ",
        "                     ##################                      ###################                     ",
        "                      #################                  :#####################                      ",
        "                      #########################################################                      ",
        "                      #########################################################                      ",
        "                      #########################################################                      ",
        "                      #########################################################                      ",
        "                      #########################################################                      ",
        "                       #######################################################                       ",
        "                        #####################################################                         ",
      ],
      [
        "                                         @@##%@@           ",
        "                                        @-.....%@          ",
        "                                        @:.....@@          ",
        "                                        @+.....@           ",
        "                                        @@.....@           ",
        "                                      @@@.+###=#           ",
        "                                @@@@#=====*+...#==@        ",
        "                          @@@%@:...................#==     ",
        "                     @@%=====##......................@.=@  ",
        "                @@@+=======@#........*%.......:--.....%.*  ",
        "             @@+===========@........%===:*=........=@@%.@  ",
        "          @@===========+@@@....-...@*===............@+..:@ ",
        "       @@===========@@***@%......@==@@+==...........@....@ ",
        "     @@=========@@#*****==@:......@===@@=-.........@@=.+.:@",
        "    @=======#@@*******=====+@+.....@===@==........-@@-....@",
        "  @*=====@@@@*******+==========@%...#*=@+@@-......=@ @:...@",
        " @*===#@@   @@*****===============%:....@.........%*....-@ ",
        "@@==@@       @#**+=================@...-+.........:=....@  ",
        "@=@@          @*=====================@:............@@%@    ",
        "@@            @=====================*@........:....#       ",
        "              @+==================**@........#:....:@      ",
        "               @================****@........@-.....@      ",
        "                 @===========*******@.......%+=.....@      ",
        "                    @@@@@@@@@*******@......+@==....=       ",
        "                              @@****@.....@@ @=...:@       ",
        "                                @%*@*...*@   @=-..*        ",
        "                                  @:...@@  @@==...@        ",
        "                                 @@....@@ @@@%##%@@        ",
        "                                 @.....@  @=====++@        ",
        "                                 @....%@  @======+@        ",
        "                                 @...+@    @=====*         ",
        "                                 @...@     @#====#         ",
        "                                 %...@      @====*         ",
        "                                @-..+@     @@=====@@       ",
        "                               @@...%@     @**=======%@@   ",
        "                               %.....@     @%#*++======*+@ ",
        "                               @@%*+#@                      ",
      ],
    ];

    let currentIndex = 1;

    setTimeout(function () {
      AsciiMorph2.morph(skillsAscii[0]);
      gsap.to(skillNameAscii, {
        text: {
          value: ">> " + skills[0],
        },
      });
    }, 500);

    moreSkillContainer = newMoreskillsContainer;

    intervalRender = setInterval(function () {
      gsap.to(skillNameAscii, {
        text: {
          value: ">> " + skills[currentIndex],
        },
      });
      AsciiMorph2.morph(skillsAscii[currentIndex]);
      currentIndex++;
      if (currentIndex > skillsAscii.length - 1) {
        currentIndex = 0;
      }

      if (stopAscii) {
        clearInterval(intervalRender);
        gsap.set(newMoreskillsContainer, {
          display: "none",
        });
        asciiPlaying = false;
      }
    }, 4500);
  }
};
