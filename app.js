let listaNumSorteado = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


// Adiciona Textos no html (<h1> e <p>) por parâmetros
function exibirTextoTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
  exibirTextoTela('h1', 'Jogo do número secreto');
  exibirTextoTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;

  if(chute == numeroSecreto){
    exibirTextoTela('h1', 'Acertou!');
    let palavraTentiva = tentativas > 1 ? 'tentativas' : 'tentativa';
    let menssagemTentativa = `Você descobriu o número secreto com ${tentativas}
    ${palavraTentiva}!`;
    exibirTextoTela('p', menssagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');

  } else if (chute > numeroSecreto) {
      exibirTextoTela('p', 'O número secreto é menor que '+ chute);
  } else {
      exibirTextoTela('p', 'O número secreto é maior que '+ chute);
  }
  tentativas++;

  limparCampo();

}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let qtdElementosLista = listaNumSorteado.length;

   if (qtdElementosLista == numeroLimite) {
    listaNumSorteado = [];
   }

   if (listaNumSorteado.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
   } else {
    listaNumSorteado.push(numeroEscolhido); //Insere ao final da lista
    console.log(listaNumSorteado);
    return numeroEscolhido;
   }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = ' ';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}