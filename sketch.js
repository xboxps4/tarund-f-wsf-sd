var car,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(800,400);

  speed = random(99,121);
  weight = random(32,52);
  car = createSprite(50,200,50,30);
  wall = createSprite(700,200,thickness, height/2);
  thickness = random(22,83);
}

function draw() {
  background(0);

  car.velocityX = speed;

   if(wall.x - car.x < (wall.width + car.width)/2 )
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500; 

    if(deformation>180)
     {
      car.shapeColor = "red";
     }

    if(deformation<180 && deformation>100)
     {
      car.shapeColor = "yellow";
     }
 
    if(deformation<100)
     {
      car.shapeColor = "green";
     }

  }
    drawSprites();


}