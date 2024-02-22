let resultado = Math.floor(Math.random() * 10);
let valor;

do{
    valor = prompt("Digite um valor do 0 ao 10: ");

    if (valor > resultado){
        alert("Valor muito alto");
    }
    else if( valor < resultado){
        alert("Valor muito baixo");
    }

}while(valor != resultado);

alert("Acertou");