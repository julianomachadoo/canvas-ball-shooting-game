const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;   
canvas.height = innerHeight;

class Player {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  // Draw a filled circle with canvas
  draw() { 
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
  }

}

// Setting player in the middle of the screen
const x = canvas.width / 2
const y = canvas.height / 2

const player = new Player(x, y, 30, 'blue');
player.draw();
console.log(player);
