document.addEventListener("DOMContentLoaded", () => {
    // Lista de imagens do carrossel
    const bannerImages = [
        "img/banner entrada.jpg"
        ,"img/a baleia.png"
        ,"img/filme-corra.jpg"
    ];

    let currentIndex = 0; // Índice da imagem atual
    const bannerElement = document.querySelector(".banner img"); // Seleciona a imagem do banner

    function changeBanner() {
        currentIndex = (currentIndex + 1) % bannerImages.length; // Atualiza o índice
        bannerElement.src = bannerImages[currentIndex]; // Troca o caminho da imagem
    }

    // Altere o banner a cada 5 segundos
    setInterval(changeBanner, 5000);
});
