var score =0
var gameState = 1
var database
function preload(){
playerImg = loadImage("Images/download.png")
enemyImg = loadImage("Images/Enemy.png")
bulletImg = loadImage("Shooting game/bullet.png")
backgroundImg = loadImage("Images/background.jpeg")
restartImg = loadImage("Images/Restart.png")
}
function setup() {
  createCanvas(800,400);
  form = new Form()
  game = new Game()
  game.getState()
  player = new Player()
  player.getCount()
  bg = createSprite(400,200,800,400)
  bg.addImage(backgroundImg)
  bg.scale = 3.2
 player = createSprite(60,370)
player.addImage(playerImg)
player.scale = 0.6
player2 = createSprite(60,70)
player2.addImage(playerImg)
player2.scale = 0.6
ground = createSprite(400,400,800,20)
ground.visible = false
player.setCollider("rectangle",0,0,100,120)
Egroup = new Group()
Bgroup = new Group()
Edges = createEdgeSprites()
wall = createSprite(60,200,20,400)
wall.visible = false
restart = createSprite(400,200)
restart.addImage(restartImg)
restart.scale = 0.4
}

function draw() {
  background(180);
  player.collide(ground)
  player.collide(Edges[0])
  player2.collide(ground)
  player2.collide(Edges[0])
  if(playerCount === 2){
    gameState = 'play'
  if(gm === 1){
    restart.visible = false
  if(keyDown("space")){
    bullet = createSprite(100,player.y -18)
    bullet.velocityX = 4
    bullet.addImage(bulletImg)
    bullet.scale =0.05
    Bgroup.add(bullet)
  } 
  player.velocityY = 0
  if(keyDown("up")){
    player.velocityY = -3
    
  }
  if(keyDown("down")){
    player.velocityY = 3
  }
  for(var i=0; i< Egroup.length;i++){
    if(Bgroup.isTouching(Egroup.get(i))){
      Egroup.get(i).destroy()
      score++
      Bgroup.destroyEach()
  }
  }
if(Egroup.isTouching(wall)){
  gameState = 0
}

  enemys()
}
if(gameState === 0){
  player.velocityY = 0
  Egroup.setVelocityXEach(0)
  Bgroup.setVelocityXEach(0)
  restart.visible = true
  if(mousePressedOver(restart)){
    gameState = 1
    Egroup.destroyEach()
    Bgroup.destroyEach()
    score = 0
  }
}
  drawSprites()
  fill('green')
  text("Score: "+score,700,50)
}
}
function enemys(){
  if(frameCount % 50  ===0){
    enemy = createSprite(800,random(100,300))
    enemy.addImage(enemyImg)
    enemy.velocityX = -3
    enemy.scale = 0.05
    Egroup.add(enemy)
    restart.depth = enemy.depth +1
  }
}