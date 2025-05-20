const button = document.getElementById("startBtn");
const countdownPage = document.getElementById("countdownPage");
const countdownText = document.getElementById("countdownText");
const heartContainer = document.querySelector(".hearts-container");

// 🎂 Automatically set birthday (June 8) for current or next year
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
});

// Show live countdown with days, hours, and minutes
function startCountdown() {
  updateCountdown(); // Initial call
  setInterval(updateCountdown, 1000); // Update every second
}

function updateCountdown() {
  const now = new Date();
  const timeDiff = birthday - now;

  if (timeDiff <= 0) {
    countdownText.textContent = "Happy Birthday My Love! 🎉🎂";
    return;
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);

  countdownText.textContent = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds to your Birthday Meri Zindagi 💕`;
}

// Create floating hearts
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
