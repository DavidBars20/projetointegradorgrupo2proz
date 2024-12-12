/*
!main
*/

// Ajustar brilho
const brilhoInput = document.querySelector('.input-brilho');
const fundoImagem = document.querySelector('.fundo-imagem');

brilhoInput.addEventListener('input', (e) => {
  const brilho = e.target.value;
  fundoImagem.style.filter = `brightness(${brilho}%)`;
});

////////////////////////////////////////////

// Controle da barra de progresso do filme
const progressoInput = document.querySelector('.progressoFilme input[type="range"]');

progressoInput.addEventListener('input', (e) => {
  const valor = e.target.value;
  console.log(`Progresso do filme: ${valor}%`);
});

/////////////////////////////////////////

/*
!footer
*/

// Botão "Curtir e não curtir"
const curtirButton = document.querySelector('.btn-curtir');
const naoCurtirButton = document.querySelector('.btn-nao-curtir');

curtirButton.addEventListener('click', () => {
  alert('Você curtiu o filme!');
});

naoCurtirButton.addEventListener('click', () => {
  alert('Você não curtiu o filme!');
});

////////////////////////////////////////

// Botão "Voltar"
const btnVoltar = document.querySelector('.btn-voltar');
console.log(btnVoltar);
btnVoltar.addEventListener("click", () => {
  alert("Voltou 10 segundos");
  // Retrocede o vídeo em 10 segundos
  video.currentTime = Math.max(video.currentTime - 10, 0);
});

/////////////////////////////////////////////////

// Controle de Play/Pause
const btnPlayPause = document.querySelector('.btn-play-pause');
let isPlaying = false;

btnPlayPause.addEventListener('click', () => {
  isPlaying = !isPlaying;
  alert(isPlaying ? 'Reproduzindo...' : 'Pausado');
});

/////////////////////////////////////////////////

// Botão "Avançar"
const btnAvancar = document.querySelector('.btn-avancar');
btnAvancar.addEventListener("click", () => {
  alert("Avançou 10 segundos");
  // Avança o vídeo em 10 segundos
  video.currentTime = Math.min(video.currentTime + 10, video.duration);

});

////////////////////////////////////////////////////

// Botão "Volume"
document.addEventListener("DOMContentLoaded", () => {
  const volumeButton = document.querySelector(".btn-volume");

  if (!volumeButton) {
    console.error("Botão de Volume não encontrado.");
    return;
  }

  // Criação do slider de volume
  const volumeSlider = document.createElement("input");
  volumeSlider.type = "range";
  volumeSlider.min = "0";
  volumeSlider.max = "100";
  volumeSlider.value = "50"; // Volume inicial em 50%
  volumeSlider.classList.add("volume-slider");

  // Adiciona o slider ao body
  document.body.appendChild(volumeSlider);

  // Exibe/oculta o slider ao clicar no botão
  volumeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const rect = volumeButton.getBoundingClientRect();

    // Posiciona o slider acima do botão Volume
    volumeSlider.style.top = `${rect.top + window.scrollY - volumeSlider.offsetHeight + -75}px`; // Ajuste a altura e o espaçamento
    volumeSlider.style.left = `${rect.left + window.scrollX + rect.width / 2 - volumeSlider.offsetWidth / 2}px`; // Centraliza o slider

    // Alterna visibilidade do slider
    volumeSlider.classList.toggle("show");
  });

  // Fecha o slider ao clicar fora
  document.addEventListener("click", () => {
    volumeSlider.classList.remove("show");
  });

  // Ajuste do volume (simulação)
  volumeSlider.addEventListener("input", () => {
    const volume = volumeSlider.value / 100;
    console.log(`Volume ajustado para: ${volume * 100}%`);
  });
});
//////////////////////////////////////////////////////

// Botão tela cheia
const btnTelaCheia = document.querySelector('.btn-Tela-cheia');
btnTelaCheia.addEventListener('click', () => {
  alert('Tela cheia ativada');
});

/////////////////////////////////////////////////////

// Mostrar ou ocultar o menu de legenda e idioma
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o botão de Legenda e Idioma
  const legendaButton = document.querySelector(".btn-legenda-idioma");

  // Cria o menu suspenso
  const dropdownMenu = document.createElement("div");
  dropdownMenu.classList.add("dropdown-menu");
  dropdownMenu.innerHTML = `
      <a href="#" onclick="changeLanguage('Português')">Português</a>
      <a href="#" onclick="changeLanguage('Inglês')">Inglês</a>
      <a href="#" onclick="changeLanguage('Espanhol')">Espanhol</a>
      <hr />
      <a href="#" onclick="changeSubtitle('Sem Legenda')">Sem Legenda</a>
      <a href="#" onclick="changeSubtitle('Legenda em Português')">Português</a>
      <a href="#" onclick="changeSubtitle('Legenda em Inglês')">Inglês</a>
    `;

  // Insere o menu no DOM ao lado do botão
  legendaButton.parentNode.insertBefore(dropdownMenu, legendaButton.nextSibling);

  // Adiciona o evento de clique para exibir/ocultar o menu
  legendaButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Evita que o clique feche o menu imediatamente
    dropdownMenu.classList.toggle("show");
  });

  // Fecha o menu ao clicar fora
  document.addEventListener("click", () => {
    dropdownMenu.classList.remove("show");
  });

  // Impede que o clique no menu o feche
  dropdownMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

// Funções para alterar idioma e legenda
function changeLanguage(language) {
  alert(`Idioma alterado para: ${language}`);
}

function changeSubtitle(subtitle) {
  alert(`Legenda alterada para: ${subtitle}`);
}
/////////////////////////////////////////////