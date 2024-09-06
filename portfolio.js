export const animateHero = (delai = 4) =>{
    gsap.registerPlugin(Flip,ScrollTrigger,Observer,Draggable,MotionPathPlugin,TextPlugin)
    document.querySelectorAll(".no-opacity").forEach(element => {
        element.classList.remove("no-opacity")
    })

    const timelineHeroSection = gsap.timeline()

    timelineHeroSection.from('.hero-section', {
        opacity: 0,
        ease: 'power1.inOut',
    })
    .fromTo('.hero-section', {
        width: "100vw",
        height: "100vh",
        ease: 'power1.inOut',
    },{
        width: "95%",
        height:"97vh",
        background: '#0f0f0f',
        clearProps: true,
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
    })
    .to(".power-anim", {
        duration: 0.3,
        opacity: 0,
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

    ctx.fillStyle = "#000"
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
