function soma(x, y){
    return x + y;
}

function subtração(x, y){
    return x - y;
}

function multiplicação(x, y){
    return x * y;
}

function divisão(x, y){
    return x / y;
}

function sair(){
    alert("Até mais!")
}

let opcao;
let res;

alert("Bem vindo(a) a calculadora!");

while(true){
    opcao = prompt("--Menu--\n"+
        "(1) Somar\n"+
        "(2) Subtrair\n"+
        "(3) Multiplicar\n"+
        "(4) Dividir\n"+
        "(5) Sair");
    
    if(opcao == 5){
        sair();
        break;
    } else{
        num1 = prompt("Digite o primeiro número!");
        num2 = prompt("Digite o segundo número!");
        num1 = parseInt(num1, 10);
        num2= parseInt(num2, 10);

        if(opcao == 1){
            res = soma(num1, num2);
        }else if(opcao == 2){
            res = subtração(num1, num2);
        }else if(opcao == 3){
            res = multiplicação(num1, num2);
        }else{
            res = divisão(num1, num2);
        }

        alert(`O resultado é ${res}`)
    }
}