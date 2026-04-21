//obstacle object
function obstacle() {
    //start location
    this.x = 100
    this.y = 100

    this.show = function() {
        fill(0,0,255)
        rect(this.x,this.y,400,400)
    }

}