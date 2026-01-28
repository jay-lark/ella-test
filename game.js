const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Simple game state
let enemy = {
  x: 0,
  y: canvas.height / 2,
  radius: 12,
  speed: 1.5,
};

function update() {
  enemy.x += enemy.speed;

  // wrap around
  if (enemy.x > canvas.width + enemy.radius) {
    enemy.x = -enemy.radius;
  }
}

function draw() {
  // clear screen
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw enemy
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
  ctx.fill();

  // label
  ctx.fillStyle = "white";
  ctx.font = "16px sans-serif";
  ctx.fillText("Canvas is working 🎉", 20, 30);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
