/*
* @name Clifford Attractor
* @description Generative painting of Clifford attractor.
*/

// ode init
let a = -2;
let b = -2.4;
let c = 1.1;
let d = -0.9;

// simulation settings
var speed = 50;
var step = 0.0005;
var fade_alpha = 0;

// ui
let button;
let button2;
let butToggle = false;
let slider;

// appearance
var bg_color = 250;
var fg_stroke = 50;

var xlim=2.5;
var ylim=2.5;

function doShit(iters) {
  if (butToggle) {

    for (i = 0; i < iters; i++) {
      var xt = x;
      var yt = y;
      x = sin(a * yt) + c * cos(a * xt);
      y = sin(b * xt) + d * cos(b * yt);
      
      if(x>xlim){
        print(x);
        xlim=x;
      }
      if(y>ylim){
        print(y);
        ylim=y;
      }
      x0=map(x,-xlim,xlim, 0, width);
      y0=map(y,-ylim,ylim,0,height);
      point(x0,y0);
      
      
    }

    fill(bg_color, fade_alpha);
    rect(-1, -1, width + 2, height + 2);
  }
}

function setup() {
  createCanvas(600, 600);
  background(bg_color);

  // ui
  button = createButton('start');
  button.position(10, 10);
  button.mousePressed(toggleFun);
  
  button2 = createButton('stop');
  button2.position(10, 10);
  button2.mousePressed(toggleFun);
  button2.hide();
  
  slider = createSlider(0.1, 500, speed);
  slider.position(70, 10);
  slider.style('width', '80px');
}

function toggleFun() {
  butToggle = !butToggle;
}

function draw() {
  stroke(255-bg_color, fg_stroke);
  speed = slider.value();

  x = random(-10, 10);
  y = random(-10, 10);

  doShit(speed);
  
  if(butToggle){
    button.hide();
    button2.show();
  } else {
    button2.hide();
    button.show();
  }
}
