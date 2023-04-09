function preload(){

}

function setup(){
  canvas=createCanvas(400,400);
  canvas.position(110,250);
  video=createCapture(VIDEO);
  video.size(200,200);
  video.hide(); 
};

function draw(){
  image(video,100,100,200,200);
  
    fill(0,225,0);
    stroke(0,225,0);
    rect(35, 17, 340, 30);
    rect(340, 17, 30, 340);
    rect(35, 17, 30, 340);
    rect(35, 340, 340, 30);
    fill(255,0,0);
    stroke(255,0,0);
   circle(45, 30, 40); 
   circle(350, 30, 40); 
   circle(45, 345, 40); 
   circle(350, 345, 40); 
}

function take_snapshot(){
save('student_name.png')
}


