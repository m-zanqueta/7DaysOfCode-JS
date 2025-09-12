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

let tecnologias = prompt("Por fim, digite um tecnologia que você deseja aprender!")

while(true){
    add = prompt("Deseja incluir mais alguma tecnologia? Escreva caso deseje, caso não deseje mantenha o campo em branco.")
    if(add == ""){
        break
    } else {
        tecnologias += ", " + add;
    }
}


alert(`Então você, ${nome}, quer seguir uma área ${area2}, estudar ${materia2} e se desenvolver como ${carreira2}. Além disso deseja aprender as tecnologias: ${tecnologias}. Que ótimo!`);



