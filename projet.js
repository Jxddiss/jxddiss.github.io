import { getScrollAnimShouldPlay } from "./portfolio.js";

const projectObjList = [
  {
    name: "Live Messenger",
    encodedName: "TGl2ZSBNZXNzZW5nZXI=",
    description:
      "Une reconstitution du bureau de windows 7 et de l'application Live messenger avec Angular et Springboot",
    encodedDescription:
      "VW5lIHJlY29uc3RpdHV0aW9uIGR1IGJ1cmVhdSBkZSB3aW5kb3dzIDcgZXQgZGUgbCdhcHBsaWNhdGlvbiBMaXZlIG1lc3NlbmdlciBhdmVjIEFuZ3VsYXIgZXQgU3ByaW5nYm9vdA==",
    fonctionnalites: [
      "Détails :",
      [
        "Système de fenêtres avec différentes applications, dont la plupart sont des iframes menant a d'autres applications web",
        "Personnalisation du bureau, fond d'écran et photo d'utilisateur",
        "Création de profil sur l'application msn",
        "Communications en temps réel sur l'application msn",
        "Appels vidéos (webRTC)",
        "Animations qui peuvent être envoyées par message",
        "Possibilité d'envoyer une invitation à rejoindre l'application par email à un ami",
        "Technologies utilisées",
        [
          "Spring Boot",
          "Spring Security",
          "Angular",
          "WebRTC",
          "JavaScript",
          "HTML",
          "CSS",
          "TypeScript",
          "REST API",
          "WebSockets",
          "Email Integration",
        ],
      ],
    ],
    encodedFonctionnalites: [
      "RMOpdGFpbHMgOg==",
      [
        "U8OqbnN0ZW1lIGRlIHZpdHJlcyBhdmVjIGRpZmYlQWJlbnRlcyBhcHBsaWNhdGlvbnMsIGRvbnQgbGEgcGx1cGFydCBzb250IGRlcyBpZnJhbWVzIG1lbmFudCBhIGQnYXV0cmVzIGFwcGxpY2F0aW9ucyB3ZWI=",
        "UGVyc29ubmFsaXNhdGlvbiBkdSBidXJlYXUsIGZvbmQgZCcObWlyIGV0IGZvaG8gZCd1dGlsaXNhdGV1cg==",
        "Q3LyYXRpb24gZGUgcHJvZmlsIHN1ciBsJ2FwcGxpY2F0aW9uIG1zbg==",
        "Q29tbXVuaWNhdGlvbnMgdGVtcHMgcmVhbCBzdXIgbCdhcHBsaWNhdGlvbiBtc24=",
        "QXBwZWxzIHZpZMOob3MgKHdlYlJUQyk=",
        "QW5pbWF0aW9ucyBxdWkgcGV1dmVudCBldHJlIGVudnVvIHBhciBtZXNzYWdl",
        "UG9zc2liaWxpdMOobSBlbnZveWVyIHVuZSBpbnZpdGF0aW9uIMOnIHJlam9pbnRyZSBsJ2FwcGxpY2F0aW9uIHBhciBlbWFpbCBhIHVuIGFtaQ==",
        "VGVjaG5vbG9naWVz :",
        [
          "U3ByaW5nIEJvb3Q=",
          "U3ByaW5nIFNlY3VyaXR5",
          "QW5ndWxhcg==",
          "V2ViUlRD",
          "SmF2YVNjcmlwdA==",
          "SFRNTC",
          "Q1NT",
          "VHlwZVNjcmlwdA==",
          "UkVTVCBBUEk=",
          "V2ViU29ja2V0cw==",
          "RW1haWwgSW50ZWdyYXRpb24=",
        ],
      ],
    ],
    url: "https://example.com/live-messenger",
    urlRepository: "https://github.com/example/live-messenger",
  },
  {
    name: "ArtSync",
    encodedName: "QXJ0c3luYw==",
    description:
      "Application permetant le partage d'oeuvres artistiques et la collaboration sur des projets artistiques.",
    encodedDescription:
      "QXBwbGljYXRpb24gd2ViIHBlcm1ldGFudCBhdSB1dGlsaXNhdGV1ciBkZSBwYXJ0YWdlciBkaWZmw6lyZW50ZXMgb2V1dnJlcyBkJ2FydCBldCBkZSBjb2xsYWJvcmVyIHN1ciBkZXMgcHJvamV0cyBhcnRpc3RpcXVlcw==",
    fonctionnalites: [
      "Détails :",
      [
        "Gestion de son profil artistique",
        "Fonctionnalités de réseautage social",
        [
          "Fil d’actualité basé sur les abonnements",
          "Conversations en temps réel",
          "Interactions avec les publications",
        ],
        "Appel vidéo",
        ["Un à un", "Plusieurs à plusieurs"],
        "Diffusions en direct",
        "Gestion de projet artistique collaboratif",
        [
          "Partage des tâches",
          "Organisation des échéances",
          "Partage de fichiers, conversation de groupe",
        ],
        "Notification en temps réel",
        "Génération d’idées grâce à l’API d’Open AI",
        "Génération d’image grâce à l’API de Stability AI",
        "Application d’administration faite en Angular",
        "Technologies utilisées",
        [
          "Spring Boot",
          "Spring Security",
          "Angular",
          "WebRTC",
          "JavaScript",
          "HTML",
          "CSS",
          "TypeScript",
          "REST API",
          "WebSockets",
          "Email Integration",
        ],
      ],
    ],
    encodedFonctionnalites: [
      "RMOpdGFpbHMgOg==",
      [
        "R2VzdGlvbiBkZSBzb24gcHJvZmlsIGFydGlzdGlxdWU=",
        "Rm9uY3Rpb25uYWxpdMOpcyBkZSByw6lzZWF1dGFnZSBzb2NpYWwg",
        [
          "RmlsIGTigJlhY3R1YWxpdMOgjkkFH45=",
          "Y29udmVyc2F0aW9ucyBlbiB0ZW1wcyByw6llbA==",
          "aW50ZXJhY3Rpb25zIGF2ZWMgbGVzIHB1YmxpY2F0aW9ucw==",
        ],
        "QXBwZWwgdmlkw6lv",
        ["dW4gw6AgdW4", "cGx1c2lldXJzIMOgIG51bWw="],
        "RGlmZnVzaW9ucyBlbiBkaXJlY3Q=",
        "R2VzdGlvbiBkZSBwcm9qZXQgYXJ0aXN0aXF1ZSBjb2xsYWJvcmF0aWY=",
        [
          "cGFydGFnZSBkZXMgdMOpYWNoZXM=",
          "b3JnYW5pc2F0aW9uIGRlcyDDq2NRpb24gZGUgdGFjaGVz",
          "cGFydGFnZSBkZSBmaWzc2FnZXJpZSBkZSBncm91cGU=",
        ],
        "Tm90aWZpY2F0aW9uIGVuIHRlbXBzIHJlYWw=",
        "R2Vuw6lyaXRpb24gyw6ljIGwgcMOoIGwnQVBJIGQnT3BlbiBBSQ==",
        "R2VuZXJJ2ltYWdlIGdyw6ljaSBsJ0FQSSBkZSBTdGFiaWxpdHkgQUk=",
        "QXXRpb24gZCdhZG1pbmlzdHJhdGlvbiBmYWl0ZSB1bmUgYW5ndWxhcg==",
        "VGVjaG5vbG9naWVz :",
        [
          "U3ByaW5nIEJvb3Q=",
          "U3ByaW5nIFNlY3VyaXR5",
          "QW5ndWxhcg==",
          "V2ViUlRD",
          "SmF2YVNjcmlwdA==",
          "SFRNTC",
          "Q1NT",
          "VHlwZVNjcmlwdA==",
          "UkVTVCBBUEk=",
          "V2ViU29ja2V0cw==",
          "RW1haWwgSW50ZWdyYXRpb24=",
        ],
      ],
    ],
    url: "https://artsync.tech/",
    urlRepository: "https://github.com/Jxddiss",
  },
];

export const projectAnimation = (scrollAnimShouldPlay) => {
  const projects = document.querySelectorAll(".project");
  const dateList = document.querySelectorAll(".date");
  const dateLineOverlays = document.querySelectorAll(".date-line-overlay");
  let currentIndex = 0;
  let nextIndex = 1;

  ScrollTrigger.create({
    trigger: "#projets",
    start: "top +=300",
    // markers: true,
    onEnter: () => {
      gsap.fromTo(
        ".projects-container",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          ease: "power1.inOut",
        }
      );
      animateOneProject(projects[currentIndex], currentIndex);
      if (getScrollAnimShouldPlay()) {
        gsap.to(window, {
          scrollTo: {
            y: "#projets",
            offsetY: 45,
          },
        });
      }
    },
    onLeaveBack: () => {
      resetOneProject(projects[currentIndex], currentIndex);
    },
  });

  const animateOneProject = (project, index) => {
    const {
      name,
      description,
      fonctionnalites: fonctionnalitesDecodes,
      url,
      urlRepository,
    } = projectObjList[index];
    const mediaHolder = project.querySelector(".medias-holder");
    const nameElement = project.querySelector(".description .name-project");
    const descriptionElement = project.querySelector(
      ".description .description-text"
    );
    const fonctionnalitesElement = project.querySelector(
      ".description .fonctionnalites"
    );
    const urlElement = project.querySelector(".links-holder .link-live");
    const urlRepositoryElement = project.querySelector(
      ".links-holder .link-github"
    );
    const descriptionElementParent = project.querySelector(".description");

    urlElement.href = url;
    urlRepositoryElement.href = urlRepository;

    const tlProjects = gsap.timeline();

    tlProjects
      .fromTo(
        project,
        {
          opacity: 0,
          width: 0,
          zIndex: 4,
        },
        {
          opacity: 1,
          width: "100%",
          duration: 0.8,
          ease: "bounce.out",
        }
      )
      .to(mediaHolder, {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(nameElement, {
        text: {
          value: name,
        },
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(descriptionElement, {
        text: {
          value: description,
        },
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.set(descriptionElementParent, { overflowY: "auto" });
        },
      });

    dateList.forEach((date, i) => {
      if (index === i) {
        date.setAttribute("past", "false");
        date.setAttribute("current", "true");
      } else if (index < i) {
        date.setAttribute("past", "true");
        date.setAttribute("current", "false");
      }
    });

    animateFonctionnalites(
      fonctionnalitesElement,
      fonctionnalitesDecodes,
      tlProjects
    );

    for (let i = dateLineOverlays.length - 1; i >= 0; i--) {
      if (i >= index) {
        gsap.to(dateLineOverlays[i], {
          left: "50px",
          duration: 0.5,
          ease: "power1.inOut",
        });
      }
    }
    currentIndex = index;
    if (currentIndex < projects.length - 1) {
      nextIndex = currentIndex + 1;
    } else {
      nextIndex = 0;
    }
    descriptionElementParent.addEventListener("scroll", descScrollHandler);
  };

  function animateFonctionnalites(
    fonctionalitesElement,
    fonctionnalitesDecode,
    tl
  ) {
    fonctionnalitesDecode.forEach((fonctionnalite, index) => {
      const child = fonctionalitesElement.children[index];
      if (Array.isArray(fonctionnalite)) {
        if (child && child.tagName === "UL") {
          animateFonctionnalites(child, fonctionnalite, tl);
        }
      } else {
        if (child && child.tagName === "LI") {
          tl.to(child, {
            text: {
              value: fonctionnalite,
            },
            duration: 0.2,
          });
        }
      }
    });
  }

  let debounce = false;
  let debouceTimeout;
  const descScrollHandler = () => {
    if (!debounce) {
      if (currentIndex < 0) {
        projects[currentIndex - 1]
          .querySelector(".description")
          .removeEventListener(descScrollHandler);
      }
      const descriptionElementParent =
        projects[currentIndex].querySelector(".description");
      const scrollTop = descriptionElementParent.scrollTop;
      const scrollHeight = descriptionElementParent.scrollHeight;
      const clientHeight = descriptionElementParent.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        debounce = true;
        resetOneProject(projects[currentIndex], currentIndex);
        animateOneProject(projects[nextIndex], nextIndex);
      }
    } else {
      if (debouceTimeout) {
        clearTimeout(debouceTimeout);
      }
      debouceTimeout = setTimeout(() => {
        debounce = false;
      }, 1000);
    }
  };

  const resetOneProject = (project, index) => {
    const { encodedName, encodedDescription, encodedFonctionnalites } =
      projectObjList[index];
    const mediaHolder = project.querySelector(".medias-holder");
    const nameElement = project.querySelector(".description .name-project");
    const descriptionElement = project.querySelector(
      ".description .description-text"
    );
    const fonctionnalitesElement = project.querySelector(
      ".description .fonctionnalites"
    );
    const descriptionElementParent = project.querySelector(".description");

    const tlReset = gsap.timeline();
    animateFonctionnalites(
      fonctionnalitesElement,
      encodedFonctionnalites,
      tlReset
    );
    tlReset
      .to(
        descriptionElement,
        {
          text: {
            value: encodedDescription,
          },
        },
        0
      )
      .to(
        nameElement,
        {
          text: {
            value: encodedName,
          },
        },
        0
      )
      .to(
        mediaHolder,
        {
          opacity: 0,
        },
        0
      )
      .fromTo(
        project,
        {
          opacity: 1,
          width: "100%",
        },
        {
          opacity: 0,
          width: 0,
          zIndex: 3,
          onComplete: () => {
            gsap.set(descriptionElementParent, { overflowY: "hidden" });
          },
        },
        0
      );

    for (let i = dateLineOverlays.length - 1; i >= 0; i--) {
      if (i >= index) {
        gsap.to(dateLineOverlays[i], {
          left: "120%",
          duration: 0.2,
          ease: "power1.inOut",
        });
      }
    }

    dateList[index].setAttribute("current", "false");

    descriptionElementParent.scrollTo(0, 0);
    currentIndex = index;
    if (currentIndex < projects.length - 1) {
      nextIndex = currentIndex + 1;
    } else {
      nextIndex = 0;
    }
  };

  dateList.forEach((date, index) => {
    date.addEventListener("click", () => {
      console.log("currentIndex", currentIndex);
      if (currentIndex === index) return;
      resetOneProject(projects[currentIndex], currentIndex);
      animateOneProject(projects[nextIndex], nextIndex);
    });
  });
};
