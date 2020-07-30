var form,database,user,backgroundImg,medicImg,ambulanceImg ;

function preload(){
backgroundImg = loadImage("images/background3.png");
medicImg = loadImage("images/medic.png");
ambulanceImg = loadImage("images/ambulance.jpg");
}

function setup() {
  createCanvas(displayWidth , displayHeight);
  //createSprite(400, 200, 50, 50);
  database =  firebase.database();
  form  = new Form();
}
function draw() {
  background(backgroundImg); 
  //drawSprites();

  form.display();


}