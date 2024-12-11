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

// Botão "Curtir"
const curtirButton = document.querySelector('.btn-curtir');
const naoCurtirButton = document.querySelector('.btn-nao-curtir');

curtirButton.addEventListener('click', () => {
  alert('Você curtiu o filme!');
});

naoCurtirButton.addEventListener('click', () => {
  alert('Você não curtiu o filme!');
});


////////////////////////////////////////

// Controle de Play/Pause
const playPauseButton = document.querySelector('.btn-play-pause');
let isPlaying = false;

playPauseButton.addEventListener('click', () => {
  isPlaying = !isPlaying;
  alert(isPlaying ? 'Reproduzindo...' : 'Pausado');
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

    // Posiciona o slider ao lado do botão Volume
    volumeSlider.style.top = `${rect.top + window.scrollY}px`;
    volumeSlider.style.left = `${rect.right + 10 + window.scrollX}px`;

    // Alterna visibilidade do slider
    volumeSlider.classList.toggle("show");
  });

  // Fecha o slider ao clicar fora
  document.addEventListener("click", () => {
    volumeSlider.classList.remove("show");
  });

  // Ajuste do volume (simulação)
  volumeSlider.addEventListener("input", () => {
    const volume = volumeSlider.value;
    console.log(`Volume ajustado para: ${volume}%`);
    // Aqui você pode adicionar lógica para ajustar o volume real do player
  });
});
//////////////////////////////////////////////////////

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


