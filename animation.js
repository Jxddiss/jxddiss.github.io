export const animateHero = (delai = 4) =>{
    gsap.registerPlugin(Flip,ScrollTrigger,Observer,Draggable,MotionPathPlugin,TextPlugin)
    document.querySelectorAll(".no-opacity").forEach(element => {
        element.classList.remove("no-opacity")
    })

    const timelineHeroSection = gsap.timeline()

    timelineHeroSection.from('.hero-section', {
        opacity: 0,
        background: '#0a0a0',
        ease: 'power1.inOut',
    })
    .to(".power-anim", {
        duration: 0.5,
        width: "100%",
        background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
    })
    .to(".power-anim", {
        duration: 0.2,
        height: "100%",
        top: "0",
        left: "0",
        onComplete: () => {
            document.querySelector(".hero-section").classList.add("backlight")
        }
    })
    .to(".power-anim", {
        duration: 0.3,
        opacity: 0,
    })
    .fromTo(".hero-section", {
        background: "#161515",
    },
    {
        background: "#0e0d0d",
        ease: 'bounce.out',
        clearProps: true,
    })
    .from('#nav', {
        opacity: 0,
        duration: 0.1,
    })
    .fromTo('#nav', {
        width: 0,
        padding: 0,
        height: '100px',
        duration: 0.3,
        ease: 'bounce.out',
    },{
        width: "90%",
        height: "auto",
        paddingLeft: "20px",
        paddingRight: "20px",
        clearProps: true,
    })
    .from(".logo, .sections", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
    })
    .to('.name', {
        duration: 1.2,
        text:{
            value: "Nicholson Rainville Jacques",
            delimiter: '',
        }
    })
    .to('.job', {
        duration: 1.5,
        text:{
            value: "Étudiant en développement web et mobile",
            delimiter: '',
        },
        ease: 'power1.inOut',
        onComplete: () => {
            document.body.classList.remove('no-scroll')
            document.querySelector("nav").classList.remove("no-click")
        }
    })
    .from('.ascii-art-container', {
        opacity: 0,
        duration: 1,
    })
    if(delai > 0){
        timelineHeroSection.delay(delai)
    }
}

export const animationMatrix = () => {
    const matrixCanvas = document.getElementById("matrix-effect-container")
    const ctx = matrixCanvas.getContext("2d")

    matrixCanvas.width =  matrixCanvas.offsetWidth
    matrixCanvas.height = matrixCanvas.offsetHeight

    const width = matrixCanvas.width
    const height = matrixCanvas.height
    const charDistance = 15
    const columns = Math.floor(width / charDistance) + 1
    const yPosition = Array(columns).fill(0)

    ctx.fillStyle = "#0f0f0f"
    ctx.fillRect(0, 0, width, height)
    

    const letterAnimation = () => {
        ctx.fillStyle = "#0001"
        ctx.fillRect(0, 0, width, height)

        ctx.fillStyle = "#21df21"
        ctx.font = `20px monospace`

        yPosition.forEach((y, index) => {
            const text = String.fromCharCode(Math.random() * 128)
            const x = index * charDistance
            ctx.fillText(text, x, y)
            if(y > 100 + Math.random() * 10000) {
                yPosition[index] = 0
            }else{
                yPosition[index] = y + charDistance
            }
        })
    }

    setInterval(letterAnimation, 70)
}

export const animationSkills = () => {
    const skillsList = document.querySelectorAll(".skill");
    const skillsContainer = document.querySelector(".skills-container");
    const containerHeight = skillsContainer.offsetHeight;
    const containerWidth = skillsContainer.offsetWidth;
    const tl = gsap.timeline();

    const generatePosition = ( nbSkills,index) => {
        const cols = Math.ceil(Math.sqrt(nbSkills)); 
        const rows = Math.ceil(nbSkills / cols);

        const cellWidth = containerWidth / cols;
        const cellHeight = containerHeight / rows;

        const row = Math.floor(index / cols);
        const col = index % cols;

        let posX = col * cellWidth + cellWidth / 2 - skillsList[index].offsetWidth / 2;
        let posY = row * cellHeight + cellHeight / 2 - skillsList[index].offsetHeight / 2;

        const offsetRangeX = cellWidth * 0.2; 
        const offsetRangeY = cellHeight * 0.2; 

        posX += (Math.random() - 0.5) * offsetRangeX;
        posY += (Math.random() - 0.5) * offsetRangeY;

        posX = Math.min(containerWidth - skillsList[index].offsetWidth, Math.max(0, posX));
        posY = Math.min(containerHeight - skillsList[index].offsetHeight, Math.max(0, posY));

        return { posX, posY };
    };

    const moveSkillAround = (skill) => {
        
        const move = () => {
            const currentX = parseFloat(skill.style.left);
            const currentY = parseFloat(skill.style.top);

            const deltaX = (Math.random() - 0.5) * 40; 
            const deltaY = (Math.random() - 0.5) * 40; 

            const posX = Math.min(containerWidth - skill.offsetWidth, Math.max(0, currentX + deltaX));
            const posY = Math.min(containerHeight - skill.offsetHeight, Math.max(0, currentY + deltaY));

            const animation = gsap.to(skill, {
                top: posY,
                left: posX,
                duration: 3 + Math.random() * 2, 
                ease: "power1.inOut",
                onComplete: move, 
            });

            skill.addEventListener("mouseover",() => {
                animation.pause();
                gsap.to(skill, {
                    background: "#000",
                })
                mouseOverAnimationTextAnimation(skill)
            });
            skill.addEventListener("mouseout", () => {{
                animation.resume()
                gsap.to(skill, {
                    background: "transparent",
                })
                mouseOutAnimationTextAnimation(skill)
            }});
            
        };


        move(); 
    };

    const mouseOverAnimationTextAnimation = (skill) => {
        const skillNameContainer = skill.querySelector(".skill-name");
        const tl = gsap.timeline();
        const name = skill.dataset.name;
        const progress = skill.dataset.progress;
        let progressText = ""
        for (let i = 0; i < progress; i++) {
            progressText += "|"
        } 
        
        tl
        .to(skillNameContainer, {
            visibility: "visible",
            duration:0
        })
        .to(skillNameContainer, {
            opacity: 1,
            duration:0.2,
            ease: "power1.inOut",
        })
        .to(skillNameContainer.children[0], {
            text:{
                value: name,
            }
        })
        gsap.to(skillNameContainer.children[1], {
            text:{
                value: progressText,
            },
            duration: 1,
            stagger: 0.1
        });
    }

    const mouseOutAnimationTextAnimation = (skill) => {
        const skillNameContainer = skill.querySelector(".skill-name");
        const tl = gsap.timeline();
        tl
        .to(skillNameContainer, {
            opacity: 0,
            ease: "power1.inOut",
        })
        .to(skillNameContainer, {
            visibility: "hidden",
        })
        .to(skillNameContainer.children[0], {
            text:{
                value: "",
            }
        })
        gsap.to(skillNameContainer.children[1], {
            text:{
                value: "",
            },
            duration: 1,
            stagger: 0.1
        });
    }

    ScrollTrigger.create({
        trigger: '.skills-section',
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
            skillsList.forEach((skill, index) => {
                const { posX, posY } = generatePosition(skillsList.length, index);

                tl.fromTo(skill, {
                    scale: 0,
                    visibility: 'hidden',
                    top: containerHeight / 2,
                    left: containerWidth / 2,
                }, {
                    scale: 1,
                    visibility: 'visible',
                    top: posY,
                    left: posX,
                    duration: 1,
                    ease: 'power1.inOut',
                    delay: index * 0.1,
                    clearProps: "scale",
                    onComplete: () => moveSkillAround(skill) 
                });
            });
        },
        // onLeaveBack: () => {
        //     skillsList.forEach((skill) => {
        //         gsap.to(skill, {
        //             scale: 0,
        //             opacity: 0,
        //             duration: 1,
        //             clearProps: true,
        //         })
        //     });
        // }
    });
};
