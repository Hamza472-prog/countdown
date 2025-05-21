const button = document.getElementById("startBtn");
const countdownPage = document.getElementById("countdownPage");
const countdownText = document.getElementById("countdownText");
const heartContainer = document.querySelector(".hearts-container");

// 🎂 Automatically set birthday (June 8)
function getNextBirthday() {
  const today = new Date();
  let birthday = new Date(today.getFullYear(), 5, 8); // June = 5
  if (today > birthday) {
    birthday = new Date(today.getFullYear() + 1, 5, 8);
  }
  return birthday;
}

let birthday = getNextBirthday();

button.addEventListener("click", () => {
  document.querySelector(".center").classList.add("hidden");
  countdownPage.classList.remove("hidden");
  startCountdown();
  generateHearts();
  fadeInParagraph();
});

// Show live countdown with icons and blocks
function startCountdown() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const now = new Date();
  const timeDiff = birthday - now;

  if (timeDiff <= 0) {
    countdownText.textContent = "🎉 Happy Birthday My Love! 🎂";
    return;
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);

  countdownText.innerHTML = `
    <div class="count-block">
      <div class="count-number">${days}</div>
      <div class="count-label">💖 Days</div>
    </div>
    <div class="count-block">
      <div class="count-number">${hours}</div>
      <div class="count-label">⏰ Hours</div>
    </div>
    <div class="count-block">
      <div class="count-number">${minutes}</div>
      <div class="count-label">⏳ Minutes</div>
    </div>
    <div class="count-block">
      <div class="count-number">${seconds}</div>
      <div class="count-label">🎈 Seconds</div>
    </div>
  `;
}

// Floating hearts
function generateHearts() {
  const colors = ["#ff4d4d", "#ff66b2", "#ff99cc", "#ffb3b3", "#ff0000", "#ff80aa", "#e60073"];
  setInterval(() => {
    for (let i = 0; i < 5; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (2 + Math.random() * 3) + "s";
      heart.style.opacity = Math.random();
      heart.style.transform = `scale(${Math.random() * 1.5 + 0.5}) rotate(45deg)`;
      heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      heartContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }
  }, 300);
}

// Glowing button animation
const btn = document.getElementById('startBtn');
btn.classList.add('glow');
const letters = btn.querySelectorAll('span');
letters.forEach((letter, index) => {
  letter.style.animationDelay = `${index * 0.1}s`;
});

// Animated paragraph lines
function fadeInParagraph() {
  const para = document.getElementById('animatedPara');
  if (!para) return;

  const lines = para.querySelectorAll('p');
  lines.forEach(line => {
    line.style.opacity = 0;
    line.style.transition = 'opacity 1.5s ease';
  });

  let current = 0;
  function showNextLine() {
    if (current < lines.length) {
      lines[current].style.opacity = 1;
      current++;
      setTimeout(showNextLine, 2000);
    }
  }
  showNextLine();
}
