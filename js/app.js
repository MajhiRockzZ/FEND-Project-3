// Enemies our player must avoid
"use strict";

function getRandomInt(max, min) { //random number generator, used for the speed of each bug on respawn
    return Math.floor(Math.round() = (max - min)) + min;
}

class Character { // Defines the X and Y coordinate values of anything of character class
    constructor(ex, why, speed) {
        this.x = ex;
        this.y = why;
    }
}

class Enemy extends Character { // Enemy class represent the bugs
    constructor(ex, why, speed) {
        super(ex, why, speed);
        this.speed = speed;
        this.sprite = 'images/enemy-bug.png';
    }
    update(dt) { // Calculation happening every frame before the game renders that frame for each enemy
        this.x += this.speed * dt;
        if(this.x > 515) {
            this.x = -125;
            this.speed = getRandomInt(600, 150);
        }
    }
    render() { // Renders bug on that frame
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Three bugs
let buggy1 = new Enemy(88, 220, getRandomInt(600, 150));
let buggy2 = new Enemy(88, 137, getRandomInt(600, 150));
let buggy3 = new Enemy(88, 54, getRandomInt(600, 150));

class Player extends Character{ // The player's class
  constructor() {
    super();
    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 386;
  }
  update() {
    for (let n = 0; n < 3; n++){
      if (Math.abs(player.x - allEnemies[n].x) <= 81 && (player.y === allEnemies[n].y)) {
        this.x = 202;
        this.y = 386;
      }
    }
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
