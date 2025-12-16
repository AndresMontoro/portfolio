const track = document.getElementById('skillsTrack');
const pauseBtn = document.getElementById('pauseBtn');
const speedBtn = document.getElementById('speedBtn');

let isPaused = false;
let currentSpeed = 30; // segundos
const speeds = [30, 20, 15, 40]; // diferentes velocidades
let speedIndex = 0;

// Pausar/Reanudar
pauseBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  
  if (isPaused) {
    track.style.animationPlayState = 'paused';
    pauseBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"/>
      </svg>
      Reanudar
    `;
  } else {
    track.style.animationPlayState = 'running';
    pauseBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
      </svg>
      Pausar
    `;
  }
});

// Cambiar velocidad
speedBtn.addEventListener('click', () => {
  speedIndex = (speedIndex + 1) % speeds.length;
  currentSpeed = speeds[speedIndex];
  track.style.animation = `scroll ${currentSpeed}s linear infinite`;
  
  // Feedback visual
  speedBtn.style.transform = 'scale(0.9)';
  setTimeout(() => {
    speedBtn.style.transform = 'scale(1)';
  }, 100);
});

// Pausar al hacer hover sobre cualquier card
const cards = document.querySelectorAll('.skill-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
  });
  
  card.addEventListener('mouseleave', () => {
    if (!isPaused) {
      track.style.animationPlayState = 'running';
    }
  });
});