const button = document.getElementById("startBtn");
const countdownPage = document.getElementById("countdownPage");
const countdownText = document.getElementById("countdownText");
const heartContainer = document.querySelector(".hearts-container");

// 🎂 Set your birthday here (month is 0-indexed: Jan = 0, Feb = 1, etc.)
const birthday = new Date("2025-06-08");

button.addEventListener("click", () => {
  document.querySelector(".center").classList.add("hidden");
  countdownPage.classList.remove("hidden");

  showCountdown();
  generateHearts();
});

// Calculate and show the countdown
function showCountdown() {
  const today = new Date();
  const timeDiff = birthday - today;
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  if (daysLeft > 0) {
    countdownText.textContent = `${daysLeft} Days to your Birthday My Love of My Life 💕`;
  } else if (daysLeft === 0) {
    countdownText.textContent = "Happy Birthday My Love! 🎉🎂";
  } else {
    countdownText.textContent = "Your birthday has passed. 😢";
  }
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
  
        document.querySelector(".hearts-container").appendChild(heart);
  
        setTimeout(() => heart.remove(), 5000);

      }
    }, 300);
  }
  
  
