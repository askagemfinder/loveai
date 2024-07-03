const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 300;

// Character
const character = {
  x: 100,
  y: 100,
  width: 30,
  height: 30,
  speed: 5
};

// Water background (simple example)
function drawWater() {
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Draw character
function drawCharacter() {
  ctx.fillStyle = "red";
  ctx.fillRect(character.x, character.y, character.width, character.height);
}

// Update character position
function update() {
  if (keys['a']) {
    character.x -= character.speed;
  }
  if (keys['d']) {
    character.x += character.speed;
  }

  // Clear canvas and redraw
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawWater();
  drawCharacter();

  requestAnimationFrame(update);
}

// Keyboard event listener
const keys = {};
document.addEventListener('keydown', (e) => {
  keys[e.key] = true;
});
document.addEventListener('keyup', (e) => {
  keys[e.key] = false;
});

// Start animation
drawWater();
drawCharacter();
update();
