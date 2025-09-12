let secreto = Math.floor(Math.random() * (10 - 1 + 1) + 1)
console.log(secreto);

let vidas = 3
let chute = 15;

alert("Bem vindo(a) ao jogo do número aleatório!");

while(chute != secreto && vidas > 0){
    chute = prompt(`Digite um número e tente acertar o número aleatório de 1 a 10. Você possui ${vidas} vidas`);
    vidas -= 1;
}

if(vidas == 0){
    alert(`Infelizmente você não acertou, o número secreto era ${secreto}!`);
} else {
    alert(`Parabéns! O número era ${secreto}, você acertou!`)
}