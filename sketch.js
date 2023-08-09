let personagem
let grama 
let buraco
let tamanho = 64
let andarX = 0
let andarY = 0
let botao
let botao1
let randomx
let randomy
let randomx1
let randomy1
let randomx2
let randomy2
let randomx3
let randomy3
let randomx4
let randomy4
let saidax
let saiday
let w = 0

//é executado uma vez quando o programa é iniciado 
function setup() {
  createCanvas(576, 576);
  personagem = loadImage('ninja.png')
  grama = loadImage('ceu.png')
  buraco = loadImage('buraco.png')
  portal = loadImage('portal.png')
}
// fica executando até que o programa seja encerrado 
function draw() {
  background(220);
//Para que o personagem não saia da tela  
  if(andarX < 0){
    andarX = 0
  }
  if(andarY < 0){
    andarY = 0
  }
  if(andarX > tamanho*8){
    andarX = tamanho*8
  }
  if(andarY > tamanho*8){
    andarY = tamanho*8
  }
//preenchendo todo o mapa 
  for(let i = 0; i < 9; i++){
    for(let y = 0; y < 9; y++){
    image(grama, i*tamanho, y*tamanho, tamanho, tamanho)  
    }  
  }  
  //carregando o buraco
  image(buraco, randomx, randomy, 64, 64)
  image(buraco, randomx1, randomy1, 64, 64)
  image(buraco, randomx2, randomy2, 64, 64)
  image(buraco, randomx3, randomy3, 64, 64)
  image(buraco, randomx4, randomy4, 64, 64)
  //portal para vencer
  image(portal, saidax, saiday, 64, 64)
  //carregando o personagem
  image(personagem, andarX, andarY, tamanho, tamanho)
  //para quando vencer o jogo
  if(andarX === saidax && andarY === saiday){
    //criar um retangulo
    rect(160, 160, 256, 256)
    //escrever um texto 'ganhou'
    textSize(35)
    text('YOU WIN', 200, 300)
    //criar botão
    botao = createButton('RESET')
    //reiniciar o jogo
    botao.mousePressed(reset)
    //parar o jogo
    noLoop()
  }
  //para perder
  if(andarX === randomx && andarY === randomy){
    rect(160,160, 256, 256)
    textSize(35)
    text('YOU LOSE', 200, 300)
    botao1 = createButton('TRY AGAIN')
    botao1.mousePressed(lose)
    noLoop()
  }
  if(andarX === randomx1 && andarY === randomy1){
    rect(160,160, 256, 256)
    textSize(35)
    text('YOU LOSE', 200, 300)
    botao1 = createButton('TRY AGAIN')
    botao1.mousePressed(lose)
    noLoop()
  }
  if(andarX === randomx2 && andarY === randomy2){
    rect(160,160, 256, 256)
    textSize(35)
    text('YOU LOSE', 200, 300)
    botao1 = createButton('TRY AGAIN')
    botao1.mousePressed(lose)
    noLoop()
  }
  if(andarX === randomx3 && andarY === randomy3){
    rect(160,160, 256, 256)
    textSize(35)
    text('YOU LOSE', 200, 300)
    botao1 = createButton('TRY AGAIN')
    botao1.mousePressed(lose)
    noLoop()
  }
  if(andarX === randomx4 && andarY === randomy4){
    rect(160,160, 256, 256)
    textSize(35)
    text('YOU LOSE', 200, 300)
    botao1 = createButton('TRY AGAIN')
    botao1.mousePressed(lose)
    noLoop()
  }
}
//reiniciar o jogo
function reset(){
  andarX = 0
  andarY = 0
  w = 0
  botao.remove()
  loop()
}
function lose(){
  andarX = 0
  andarY = 0
  w = 0
  botao1.remove()
  loop()

}
//gerando número aleátorio 
function randomnumber(a, b){
  return Math.floor(Math.random() * (b - a + 1)) + a 
}
// executado uma vez, toda vez que há um evento de teclado
function keyPressed(){
  if (keyIsDown(DOWN_ARROW)){
    andarY += tamanho
    w++
  }
  if (keyIsDown(UP_ARROW)){
    andarY -= tamanho
    w++
  }  
  if (keyIsDown(LEFT_ARROW)){
    andarX -= tamanho
    w++
  }  
  if (keyIsDown(RIGHT_ARROW)){
    andarX += tamanho
    w++
  }
if(w % 3 == 0){
  randomx = tamanho * randomnumber(0, 8)
  randomy = tamanho * randomnumber(0, 8)
  randomx1 = tamanho * randomnumber(0, 8)
  randomy1 = tamanho * randomnumber(0, 8)
  randomx2 = tamanho * randomnumber(0, 8)
  randomy2 = tamanho * randomnumber(0, 8)
  randomx3 = tamanho * randomnumber(0, 8)
  randomy3 = tamanho * randomnumber(0, 8)
  randomx4 = tamanho * randomnumber(0, 8)
  randomy4 = tamanho * randomnumber(0, 8)
  saidax = tamanho * randomnumber(0, 8)
  saiday = tamanho * randomnumber(0, 8)
  if (randomx == 0 && randomy == 0){
      randomx = tamanho * randomnumber(0, 8)
      randomy = tamanho * randomnumber(0, 8)
  }
  if (randomx1 == 0 && randomy1 == 0){
      randomx1 = tamanho * randomnumber(0, 8)
      randomy1 = tamanho * randomnumber(0, 8)
  }
  if (randomx2 == 0 && randomy2 == 0){
      randomx2 = tamanho * randomnumber(0, 8)
      randomy2 = tamanho * randomnumber(0, 8)
  }
  if (randomx3 == 0 && randomy3 == 0){
      randomx3 = tamanho * randomnumber(0, 8)
      randomy3 = tamanho * randomnumber(0, 8)
  }
  if (randomx4 == 0 && randomy4 == 0){
      randomx4 = tamanho * randomnumber(0, 8)
      randomy4 = tamanho * randomnumber(0, 8)
  }
}
}