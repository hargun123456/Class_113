function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    vedio = createCapture(VEDIO);
    vedio.hide();

    tint_colour = "";
}

function draw() {
    image(vedio, 0, 0, 640, 480);
    tint(tint_colour);
}

function take_snapshot() {
    save(student_name.png);
}

function filter_tint () {
  tint_colour = document.getElementById("colour_name").value;
}