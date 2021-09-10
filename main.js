function preload(){

}

function setup(){
canvas=createCanvas(450,390);
canvas.position(100,250);
video = createCapture(VIDEO); 
video.hide();
tint_color=" ";
}

function draw(){
    image(video,0,0,450,390);
    tint(tint_color);
}

function take_snapshot(){
    save('your_clicked_pic.png');
}

function filter_button(){
    tint_color=document.getElementById("colour_input").value;
}