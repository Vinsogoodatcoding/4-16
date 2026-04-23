//obstacle object
function obstacle() {
    //start location
    this.x = -400
    this.y = -400

    this.show = function() {
        fill(0,0,255)
        rect(this.x,this.y,400,400)
    }
//This obstacle needs to start off the screen to the right
//It should move to the left
//Once it is no longer visible, place it back on the right hand side off the screen
//prob has sum to do with framerate()
}

