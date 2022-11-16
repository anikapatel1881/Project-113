function take_snapshot() {    
    save('student_name.png');
}

function setup() {
    //5. Set the characteristics for the canvas and the video
     canvas = createCanvas(700, 500);
     canvas.position(10, 183)
     video = createCapture(VIDEO);
}

function draw() {
    circle(50, 50, 50, 50);
    circle(50, 450, 50, 100);
    circle(650, 450, 50, 450);
    circle(650, 50, 50, 50);
}