const logo = document.querySelector('.logo')

logo.addEventListener("load", () => {
    let logoSvg = logo.contentDocument.querySelector("svg")
    logoSvg.addEventListener('click', () => {
        window.scrollTo(0, 0)
    })
})