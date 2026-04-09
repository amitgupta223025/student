const overlay = document.getElementById('intro-overlay');
const mainContent = document.querySelector('.main');
const video = document.getElementById('netflix-intro');

function dismissIntro() {
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.style.display = 'none';
    mainContent.style.display = 'block';
  }, 500); // matches the CSS transition duration
}

// Dismiss after 5 seconds
setTimeout(dismissIntro, 5000);

// Also dismiss early if video ends before 5s
video.addEventListener('ended', dismissIntro);