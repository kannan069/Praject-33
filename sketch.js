var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var particle;
var plinkos = [];
var points;

var count = 0;
var score = 0;

var divisionHeight=300;
var score =0;



gameState = 'play';

var divisions = [];

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  
    
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
  
  if(count >= 5){
    gameState = 'end';
    //console.log('manja');
    }
  if(gameState === 'end'){
    push()
    textSize(50);
    text('GAME OVER',260,350)
    pop()
   }
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   */
   stroke(255,255,0); 
   line(0,490,800,490);
 
      
    
    text('500',25,650);
    text('500',210-25,650);
    text('100',370-25,650);
    text('100',530-25,650);
    text('200',690-25,650);
    text('500',130-25,650);
    text('500',290-25,650);
    text('100',450-25,650);
    text('200',610-25,650);
    text('200',770-25,650);

    points()


   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     
   }


   
   

   
   
}


function mousePressed(){
  if(gameState != 'end'){
    particle = new Particle(mouseX,mouseY,10,10);
    count += 1;
  }
}

async function points(){
  if(particle){
    particle.display();
    if(particle.body.position.y>690){
      
     
      if(particle.body.position.x >601 && particle.body.position.x < 900){
        score += 200 
        particle = null;
        // console.log('manja200')
      }
      if(particle.body.position.x <300){
        score += 500
        particle = null;
        // console.log('manja500')
      }
      
      if(particle.body.position.x > 301 && particle.body.position.x < 600){
         score += 100
         particle = null;
         //console.log('manja100')
      }
     
      

     
     //particle.delete();
     
     
    }

    //console.log(particle)
  }

}
