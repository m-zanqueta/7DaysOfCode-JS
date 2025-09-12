let nome = prompt("Digite o seu nome");
let materia2;
let area2;
let carreira2;

alert(`Olá, ${nome}! Vamos jogar um jogo? Digite o número em parêntesis após a sua opção escolhida!`);


let area = prompt("Você deseja useguir para a área Back-End (1) ou para a carreira Front-End (2)?");

if(area == 1){
    area2 = "Back-End";

    let materia = prompt(`Ótimo, e na área de ${area}, você deseja aprender C# (1) ou Java (2)?`);
    
    if(materia == 1){
        materia2 = "C#"
    } else{
        materia2 = "Java"
    }

}else if(area == 2){
    area2 = "Front-End";

    let materia = prompt(`Ótimo, e na área de ${area}, você deseja aprender React (1) ou Vue (2)?`);
    
    if(materia == 1){
        materia2 = "React";
    } else{
        materia2 = "Vue";
    }
}

carreira = prompt("Por fim, você deseja se especializar na área escolhida (1) ou se se desenvolver e virar Full-Stack? (2)");

if(carreira == 1){
    carreira2 = "especialista em sua área"
}else{
    carreira2 = "Full-Stack"
}


alert(`Então você, ${nome}, quer seguir uma área ${area2}, estudar ${materia2} e se desenvolver como ${carreira2}. Que ótimo!`);



