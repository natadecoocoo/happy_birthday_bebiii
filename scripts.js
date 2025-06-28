// Pesan romantis panjang
const message = 
`I’m grateful every day because God brought you into my life.
You are the reason I smile, the reason I rise from all my exhaustion.

Today is a special day, Bebiinduttt
because the one I love most was born into this world.

Thank you for loving me so sincerely.
Thank you for being my home, my storyteller, and the keeper of my heart.

I don’t know how to live without you, and I don’t want to know.
Because every second with you is an irreplaceable blessing.

Happy birthday, Bebi my love.
May all your dreams and wishes come true, and I pray I can always be by your side —
in laughter, in tears, in love, forever.

I love you. Today, tomorrow, and always. 💖`;

// Efek ketik
const typedText = document.getElementById("typedText");
let index = 0;

function typeText() {
  if (index < message.length) {
    const char = message.charAt(index);
    typedText.innerHTML += char === "\n" ? "<br>" : char;
    index++;
    setTimeout(typeText, 50);
  }
}
window.onload = typeText;

// Musik
const audio = document.getElementById("bgMusic");
document.getElementById("playMusic").addEventListener("click", () => {
  audio.play();
});

// Ulangi pesan
document.getElementById("playAgain").addEventListener("click", () => {
  audio.currentTime = 0;
  audio.play();
  typedText.innerHTML = "";
  index = 0;
  typeText();
});

// Efek hati jatuh
const heartContainer = document.querySelector('.heart-container');
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = (3 + Math.random() * 2) + 's';
  heartContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);
