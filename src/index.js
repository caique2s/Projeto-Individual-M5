import readlineSync from "readline-sync"

const lista = [];
let resp = "";

const adicionarNaLista = (prop) =>{
    lista.push(prop);
};

const ordenar = () => {
    lista.sort();
};

const listar = () => {
    lista.forEach((elemento)=> {console.log(elemento);});
};

while (true){
    resp = readlineSync.question("Digite a propriedade CSS ou 'SAIR' para exibir a listagem e encerrar: ");

    if(resp.toLocaleLowerCase() == "sair"){
        ordenar();
        listar();
        break;
    } else if (resp.toLowerCase() !== "sair" && resp !=="") {
        adicionarNaLista(resp);
      }
    }