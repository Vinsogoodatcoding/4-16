//This is a JS object to store all of our player data
let w = window.innerWidth;
let h = window.innerHeight;
function player() {
    this.x = w/2
    this.y = h/2

    //setting up how it will be displayed
    this.show = function() {
        fill(255,0,0)
        circle(this.x,this.y)
    }
}