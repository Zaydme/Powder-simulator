document.body.style.margin = 0
const width = document.body.clientWidth 
const height = document.body.clientHeight 

let Dots = []
let gravity = 2

numOfD = 15 // dots count to generate each click

mode = 1   // 0 for flat 1 for spikes (nicer)

class Dot {
    constructor(fx,fy){
        this.x = fx
        this.y = fy
        this.ys = gravity

    }
    draw(){
        point(this.x,this.y)
    }
    move(){
        if(this.y <= height && !Dots.find(d => d.y == this.y+1 && Math.abs(d.x-this.x) <= mode )) this.y += this.ys
    }

}

function setup() {
    createCanvas(width, height);
    frameRate(30);
    stroke(214, 155, 45);
    fill(255)
    strokeWeight(1);
}

function draw() {
    background(0, 7, 13);
    text(`${Dots.length} dots, fps: ${frameRate().toFixed()}`,20,20)
    Dots.forEach(d => {
        d.draw()
        d.move()
    });
}

function generateDots(x,y,numOfD) {
    for(var i = 0; i<numOfD;i++){
    let Dx = floor(Math.floor(random(x-10,x+10)));
    let Dy = floor(Math.floor(random(y-10,y+10)));
    let newD = new Dot(Dx,Dy)
    Dots.push(newD);
    }
}

function mouseDragged() {
    generateDots(mouseX,mouseY,numOfD)
}
