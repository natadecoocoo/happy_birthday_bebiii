// Efek love
const hearts = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = Math.random() * 100 + "vh";
  heart.style.fontSize = Math.random() * 30 + 10 + "px";
  heart.style.opacity = 0.8;
  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}

setInterval(createHeart, 300);
