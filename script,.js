const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const fechar = document.getElementById("fechar");

document.querySelectorAll(".foto-card").forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalText.textContent = card.dataset.text;
    modal.style.display = "flex";
  });
});

fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
function abrirFlor() {

  const flor = document.getElementById("flor");
  const mensagem = document.getElementById("mensagemFlor");

  flor.classList.add("ativa");

  setTimeout(() => {
    mensagem.classList.add("ativa");
  }, 1800);

  resgatar();
}




const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(item => {
    const top = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      item.classList.add("active");
    }
  });
});

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

let confetes = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function resgatar() {
  confetes = [];

  for (let i = 0; i < 120; i++) {
    confetes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 4,
      speed: Math.random() * 4 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`
    });
  }

  animarConfete();
}

function animarConfete() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetes.forEach(c => {
    ctx.fillStyle = c.color;
    ctx.fillRect(c.x, c.y, c.size, c.size);
    c.y += c.speed;
  });

  confetes = confetes.filter(c => c.y < canvas.height);

  if (confetes.length > 0) {
    requestAnimationFrame(animarConfete);
  }
}
document.body.addEventListener("mousemove", e => {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = "❤";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
});