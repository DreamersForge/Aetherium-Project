const canvas = document.createElement('canvas');
canvas.classList.add('universe');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

document.addEventListener('mousemove', e => {
  stars.push({ x: e.clientX, y: e.clientY, alpha: 1, radius: Math.random() * 2 + 1 });
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star, i) => {
    star.alpha -= 0.01;
    if (star.alpha <= 0) {
      stars.splice(i, 1);
    } else {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();
    }
  });
  requestAnimationFrame(animate);
}
animate();
