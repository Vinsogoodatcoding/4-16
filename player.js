//This is a JS object to store all of our player data

function player() {
    this.x = w/2
    this.y = h/2

    //setting up how it will be displayed
    this.show = function() {
        fill(255,0,0)
        circle(this.x,this.y,50)
    }
    
    this.update = function() {
        function draw() {
  // Update x and y if an arrow key is pressed.
  if (keyIsDown(LEFT_ARROW) === true) {
    player.x -= 1
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    player.x += 1
  }

  if (keyIsDown(UP_ARROW) === true) {
    
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    
  }


}
    }
}
