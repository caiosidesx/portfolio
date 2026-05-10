const menuBtn = document.querySelector(".menu-botao");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active")
})

navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
       navbar.classList.remove('active')
    })
})

function abrirWhatsapp(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5579998898979';

    const texto = `Olá, me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');
}