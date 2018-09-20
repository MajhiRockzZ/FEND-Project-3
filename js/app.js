// Create array of enemy positions at y coordinate
var positions = [80, 100, 200, 300, 500, 700];
var positionStar = [10, 50, 150, 300, 500, 800];

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
