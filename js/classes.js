class Entity {
  constructor() {
    // Sprite image
    this.sprite = 'images/';
    // x pos
    this.x = 2;
    // y pos
    this.y = 5;
  }

  render() {
    // Draw player sprite on current x and y coord position
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
  }
}

class player extends Entity {
  constructor() {
    super();
    this.sprite += 'char-boy.png';
  }
}