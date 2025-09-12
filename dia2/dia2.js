nome = prompt("Qual o seu nome?");
idade = prompt("Quantos anos você tem?");
linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

res = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if(res == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}else if(res == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
} else{
    alert("Opção inválida!");
}