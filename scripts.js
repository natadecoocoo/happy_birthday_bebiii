const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
const replayBtn = document.getElementById("replayBtn");
const music = document.getElementById("bgMusic");

let stars = [];
const STAR_COUNT = 100;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

function initStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2,
      d: Math.random() * 1
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.shadowBlur = 5;
  ctx.shadowColor = "#fff";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2, true);
    ctx.fill();
  });
  moveStars();
}

function moveStars() {
  stars.forEach(star => {
    star.y += star.d;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
}

function animateStars() {
  drawStars();
  requestAnimationFrame(animateStars);
}

initStars();
animateStars();

// Love heart effect
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.querySelector(".heart-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);

// Replay button
replayBtn.addEventListener("click", () => {
  const content = document.getElementById("mainContent");
  content.classList.remove("fade-in");
  void content.offsetWidth; // reflow
  content.classList.add("fade-in");

  music.currentTime = 0;
  music.play();
});
