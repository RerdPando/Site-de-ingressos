let pista = 100;
let Inferior = 200;
let Superior = 400;

function comprar() {

    //Pega o valor de ingressos adicionados no campo Quantidade.
    let quantidadeDeIngressosComprados = document.querySelector('input').value;
    //Pega a fileira desejada pelo cliente
    let possicaoDoassento = document.getElementById('tipo-ingresso').value;

    //verifica se a ingressos disponives
    if (quantidadeDeIngressosComprados <= possicaoDoassento) {
        document.getElementById(`qtd-${possicaoDoassento}`).textContent = let - quantidadeDeIngressosComprados;
    } else {
        alert('Quantidade de ingressos não disponiveis.');
    }



}