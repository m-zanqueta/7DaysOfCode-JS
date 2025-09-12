alert("Bem vindo ao sistema de lista de compras!");

let lista_frutas = [];
let lista_latic = [];
let lista_congel = [];
let lista_doces = [];

while(true){

let res = prompt("Deseja adicionar algum produto? (1) Sim ou (2) Não?")
if(res == 2){
    break;
}

produto = prompt("Digite o produto a ser adicionado!")
categoria = prompt("Digite o número da categoria: (1) frutas, (2) laticíneos, (3) congelados ou (4) doces.")

if(categoria == 1){
    lista_frutas.push(produto);
}else if(categoria == 2){
    lista_latic .push(produto);
}else if(categoria == 3){
    lista_congel.push(produto);
}else{
    lista_doces.push(produto);
}

}

alert(`--Lista de compras--\n` +
    `Frutas: ${lista_frutas.join(", ")}\n`+
    `Laticineos: ${lista_latic.join(", ")}\n`+
    `Congelados: ${lista_congel.join(", ")}\n`+
    `Doces: ${lista_doces.join(", ")}`
);