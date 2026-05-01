const menuBtn = document.querySelector(".menu-botao")
const navbar = document.querySelector(".navbar")

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active")
})