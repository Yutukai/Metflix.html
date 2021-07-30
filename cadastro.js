const cadastro = document.getElementById('cadastro');

function cds () {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const cartao = document.getElementById('cartao').value;
    const verso = document.getElementById('verso').value;

    if (nome !== '' && cpf !== '' && cartao !== '' && verso!=='') {
 
        alert("Cadastro realizado com sucesso. Sua solicitação está sendo averiguada")

    }else {
        alert("preencha todos os campos")
    }

}

calcular.addEventListener('click', cds); 

