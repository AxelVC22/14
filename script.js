const noBtn = document.querySelector("#noBtn");
const yesBtn = document.querySelector("#yesBtn");
const gameContainer = document.querySelector("#game-container");
const successScreen = document.querySelector("#success-screen");
const backgroundContainer = document.querySelector("#background-gifs");

let currentScale = 1;

const allGifs = [
  "assets/cat-kitty.gif",
  "assets/fat-cat.gif",
  "assets/pusheen-love.gif",
  "assets/pusheen-sticker-pack-pusheen.gif",
  "assets/vampurr.gif",
];

function scatterGifs() {
  allGifs.forEach((gifSrc) => {
    const img = document.createElement("img");
    img.src = gifSrc;
    img.classList.add("scattered-gif");
    const randomTop = Math.random() * 80 + 5;
    const randomLeft = Math.random() * 80 + 5;
    img.style.top = `${randomTop}%`;
    img.style.left = `${randomLeft}%`;
    const randomRotate = Math.random() * 60 - 30;
    img.style.transform = `rotate(${randomRotate}deg)`;

    backgroundContainer.appendChild(img);
  });
}

scatterGifs();

// Posicionar el botón "No" inicialmente
function positionNoButton() {
  const yesRect = yesBtn.getBoundingClientRect();
  noBtn.style.left = `${yesRect.right + 10}px`;
  noBtn.style.top = `${yesRect.top}px`;
}

// Posicionar al cargar
positionNoButton();

noBtn.addEventListener("mouseover", () => {
  const padding = 20;

  // Obtener dimensiones del viewport
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Obtener dimensiones del botón
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // Calcular límites seguros
  const minX = padding;
  const maxX = viewportWidth - btnWidth - padding;
  const minY = padding;
  const maxY = viewportHeight - btnHeight - padding;

  // Generar posición aleatoria dentro de los límites
  const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
  const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  // Hacer crecer el botón "Sí"
  currentScale += 0.15;
  yesBtn.style.transform = `scale(${currentScale})`;
  yesBtn.style.transition = "transform 0.3s ease";
});

yesBtn.addEventListener("click", () => {
  gameContainer.classList.add("hidden");
  successScreen.classList.remove("hidden");
  backgroundContainer.style.display = "none";
  console.log("¡Misión cumplida! ❤️");
});
