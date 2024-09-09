const projectObjList = [
  {
    name: "ArtSync",
    description:
      "Application permetant le partage d'oeuvres artistiques et la collaboration sur des projets artistiques.",
    fonctionnalites: [
      "Fonctionnalités :",
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
      ],
    ],
    url: "https://artsync.tech/",
    urlRepository: "#",
  },
];

export const projectAnimation = () => {
  const projects = document.querySelectorAll(".project");
  let tlProjects = gsap.timeline();

  projects.forEach((project, index) => {
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

    urlElement.href = url;
    urlRepositoryElement.href = urlRepository;

    ScrollTrigger.create({
      trigger: "#projets",
      start: "top 60%",
      markers: {
        startColor: "white",
        endColor: "white",
        fontSize: "18px",
        fontWeight: "bold",
        indent: 20,
      },
      onEnter: () => {
        initializeOrResetTimeline();
        tlProjects
          .fromTo(
            ".projects-container",
            {
              opacity: 0,
            },
            {
              opacity: 1,
              duration: 0.5,
              ease: "power1.inOut",
            }
          )
          .from(project, {
            height: 0,
            width: 0,
            duration: 2,
            ease: "bounce.out",
          })
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
          });

        function animateFonctionnalites(
          fonctionalitesElement,
          fonctionnalitesDecode
        ) {
          fonctionnalitesDecode.forEach((fonctionnalite, index) => {
            const child = fonctionalitesElement.children[index];
            if (Array.isArray(fonctionnalite)) {
              if (child && child.tagName === "UL") {
                animateFonctionnalites(child, fonctionnalite);
              }
            } else {
              if (child && child.tagName === "LI") {
                tlProjects.to(child, {
                  text: {
                    value: fonctionnalite,
                  },
                  duration: 0.2,
                });
              }
            }
          });
        }

        animateFonctionnalites(fonctionnalitesElement, fonctionnalitesDecodes);
      },
    });

    ScrollTrigger.observe({
      type: "wheel, touch",
      onUp: () => {
        allow;
      },
    });
  });

  const initializeOrResetTimeline = () => {
    if (tlProjects) {
      tlProjects.kill();
      tlProjects = gsap.timeline();
    }
  };
};
