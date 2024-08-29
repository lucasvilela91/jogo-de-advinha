
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}


function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo de advinhação');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');  
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let messagensTentativas = `Você acertou em ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', messagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela('h1', 'Tente novamente!');
        exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
        exibirTextoNaTela('h1', 'Tente novamente!');
        exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadesDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadesDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
}
    
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(); 
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
        
    } 
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo de advinhação';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número de 1 a 10';

