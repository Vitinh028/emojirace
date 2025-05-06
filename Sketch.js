let xJogador = [20, 20, 20, 20];
let yJogador = [50, 150, 250, 350];
let jogador = ["🗿x🤖", "🙍x👽", "🇧🇷x🇦🇷", "🐻x🐻‍❄" ]
let contagem = jogador.length;
let teclas = ["h", "e", "l", "o"]

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  defineTela();
  mostraJogadores();
  desenhaChegada();
  defineVencedor();
  
  function defineTela(){
  if(focused == true){
  background("#F56C07");
   } else { 
  background ("#F704D1");
   }
  }
  }
    
  function mostraJogadores(){
    textSize(30);
    for (let i = 0; i < contagem; i++){
      text(jogador[i], xJogador[i],
yJogador[i]);
    }    
  }
    function desenhaChegada(){
      fill("rgb(255,6,6)")
      rect(350, 0, 10, 400)
      fill("rgba(12,47,241,0.92)")
      for (let yAtual = 0; yAtual < 400; yAtual += 20){
      rect(350, yAtual, 10, 10);
  }
}
  function defineVencedor(){
  textAlign(CENTER, CENTER);
    for (let i = 0; i < contagem; i++) {
    if (xJogador [i] > 350){
    text(jogador[i] + "🥇𝔳𝔬𝔠ê 𝔰𝔢 𝔢𝔰𝔣𝔬𝔯ç𝔬𝔲 𝔢 𝔤𝔞𝔫𝔥𝔬𝔲🥇", width/2, height/2);
    noLoop ();
    }
    }
  }

  
function keyReleased(){
  for(let i = 0 ; i < contagem; i++){
  if (key == teclas[i]) {
    xJogador[i] += random(20);
  }
  }
}
