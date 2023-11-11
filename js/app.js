const assentos = {
    pista: 100,
    superior: 200,
    inferior: 400
};

function comprar() {

    //Pega o valor de ingressos adicionados no campo Quantidade.
    let quantidadeDeIngressosComprados = document.getElementById('qtd').value;

    //verifica se a quantidade é valida.
    if(quantidadeDeIngressosComprados <= 0){
        alert('Adicione uma quantidade valida!');
        return;
    };

    //Pega a fileira desejada pelo cliente e index do assento
    let possicaoDoassento = document.getElementById('tipo-ingresso').value;

    //verifica se a ingressos disponives
    if (quantidadeDeIngressosComprados <= assentos[possicaoDoassento]) {
        let resultado = assentos[possicaoDoassento] - quantidadeDeIngressosComprados;
        document.getElementById(`qtd-${possicaoDoassento}`).textContent = resultado;
        assentos[possicaoDoassento] = resultado;
    } else {
        alert('Quantidade de ingressos não disponiveis.');
    };

    //Desabilita opção caso não tenha mais ingressos
    if(assentos[possicaoDoassento] === 0){
        let chamarId = document.getElementById('tipo-ingresso');
        let desabilitarOpcao = chamarId.querySelector(`#tipo-ingresso option[value="${possicaoDoassento}"]`);
        desabilitarOpcao.setAttribute('disabled', 'true');
    };
};