// Create and style the canvas
const canvas = document.createElement('canvas');
canvas.id = 'universe-canvas';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
let stars = [];

// Set canvas to full screen
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Mouse move listener
document.addEventListener('mousemove', e => {
  for (let i = 0; i < 3; i++) {
    stars.push({
      x: e.clientX + (Math.random() * 10 - 5),
      y: e.clientY + (Math.random() * 10 - 5),
      alpha: 1,
      radius: Math.random() * 2 + 0.5
    });
  }
});

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star, index) => {
    star.alpha -= 0.01;
    if (star.alpha <= 0) {
      stars.splice(index, 1);
    } else {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();
    }
  });

  requestAnimationFrame(animate);
}
animate();
