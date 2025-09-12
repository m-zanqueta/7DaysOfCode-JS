alert("Bem vindo ao sistema de lista de compras!");

let lista_frutas = [];
let lista_latic = [];
let lista_congel = [];
let lista_doces = [];
console.log(lista_congel);
let remover;
let categoria;
let num;
let x;

while(true){

let res = prompt("--Menu de Opções--\n"+
                "(1) Adicionar Item\n" +
                "(2) Remover Item\n" +
                "(3) Visualizar lista\n"+
                "(4) Finalizar lista")

if(res == 1){

produto = prompt("Digite o produto a ser adicionado!")
categoria = prompt("Digite o número da categoria\n" +
    "(1) Frutas\n" +
    "(2) Laticíneos\n"+
    "(3) Congelados\n"+
    "(4) Doces")

if(categoria == 1){
    lista_frutas.push(produto);
}else if(categoria == 2){
    lista_latic .push(produto);
}else if(categoria == 3){
    lista_congel.push(produto);
}else{
    lista_doces.push(produto);
}

} else if (res == 2){

if(lista_congel.length == 0 && lista_doces.length == 0 && lista_frutas.length == 0 && lista_latic.length == 0){
    alert("Adicione algum item primeiro!")
} else {
    categoria = prompt("Digite o número da categoria do item a ser removido\n"+
        "(1) Frutas\n" +
        "(2) Laticíneos\n" +
        "(3) Congelados\n" +
        "(4) Doces");

        if(categoria == 1){
            remover = prompt(`Escolha o item a ser removido \n`+
                `Frutas: ${lista_frutas.join(", ")}`);

            num = lista_frutas.indexOf(remover);
            lista_frutas.splice(num, 1);

            alert(`Item ${remover} removido! \n`+
                `Frutas: ${lista_frutas.join(", ")}`);

        }else if(categoria == 2){
            remover = prompt(`Escolha o item a ser removido \n`+
                `Laticineos: ${lista_latic.join(", ")}`);

            num = lista_latic.indexOf(remover);
            lista_latic.splice(num, 1);

            alert(`Item ${remover} removido! \n`+
                `Frutas: ${lista_latic.join(", ")}`);

        }else if(categoria == 3){
            remover = prompt(`Escolha o item a ser removido \n`+
                `Congelados: ${lista_congel.join(", ")}`);

            num = lista_congel.indexOf(remover);
            lista_congel.splice(num, 1);

            alert(`Item ${remover} removido! \n`+
                `Frutas: ${lista_congel.join(", ")}`);
        }else{
            remover = prompt(`Escolha o item a ser removido \n`+
                `Doces: ${lista_doces.join(", ")}`);

            num = lista_doces.indexOf(remover);
            lista_doces.splice(num, 1);

            alert(`Item ${remover} removido! \n`+
                `Frutas: ${lista_doces.join(", ")}`);
        }

    }
} else if(res == 3){
    alert(`--Visualizar Lista--\n` +
    `Frutas: ${lista_frutas.join(", ")}\n`+
    `Laticineos: ${lista_latic.join(", ")}\n`+
    `Congelados: ${lista_congel.join(", ")}\n`+
    `Doces: ${lista_doces.join(", ")}`);
} else{
    break;
}

}

alert(`--Lista de Compras--\n` +
    `Frutas: ${lista_frutas.join(", ")}\n`+
    `Laticineos: ${lista_latic.join(", ")}\n`+
    `Congelados: ${lista_congel.join(", ")}\n`+
    `Doces: ${lista_doces.join(", ")}`);
