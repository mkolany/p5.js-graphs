/*
* @name Lorenz Attractor
* @description Generative painting of a Lorenz's strange attractor.
*/

// ode init
let x = 0;
let y = 1;
let z = 5;

let a = 10;
let b = 28;
let c = 8.0 / 3.0;

// simulation settings
var speed = 50;
var step = 0.0005;
var fade_alpha = 5;

// ui related stuff
let button;
let butToggle=false;
let slider;

function doShit(iters){
  if (butToggle){
  for( let i = 0; i < iters; i++) {
    let dt = step;
    let dx = a * (y - x) * dt;
    let dy = (x * (b - z) - y) * dt;
    let dz = (x * y - c * z) * dt;
    x = x + dx;
    y = y + dy;
    z = z + dz;
    
    x0=map(x,-25,25,0,width/2);
    y0=map(y,-30,30,0,height/2);
    z0=map(z,-18,48,0,height/2);

    point(x0,y0);
    point(x0+width/2,z0);
    point(y0,z0+height/2-10);
    fill(0,fade_alpha);
  }
  rect(-1,-1,width+2,height+2); //fade
  }
}

function setup(){
  createCanvas(600,600);
  background(0);
  
  // ui
  button = createButton('start/stop');
  button.position(10, 10);
  button.mousePressed(toggleFun);
  
  slider = createSlider(0.1, 500, speed);
  slider.position(100, 10);
  slider.style('width', '80px');
  }

function toggleFun(){
  butToggle = !butToggle;
}

function draw(){
  stroke(255,500);
  speed = slider.value();
  
  // noprotect
  doShit(speed);
}
