/**
 * Chatlab - Conceitos de array/object em Javascript.
 *
 * Implemente as funções a partir daqui.
 */

// Exemplo: function minhaFuncao() { ... }

// --------------------------------
// Não remover estas linhas
// --------------------------------

let listaMensagens = [];
let mensFinal = '';

function adicionarMensagem(apelido, mensagem) {
  const mensagemNova = {
    apelido: apelido,
    mensagem: mensagem
  };

  listaMensagens.push(mensagemNova);
}

function formatarMensagens() {
  mensFinal = '';

  for (let i = 0; i < listaMensagens.length; i++) {
    let mensagem = listaMensagens[i];

    let mensagemFinalizada =
    `
    <div class="chat-message">
      <span class="chat-message-apelido">${mensagem.apelido}</span>
      <span class="chat-message-item">${mensagem.mensagem}</span>
    </div>
  `;

    mensFinal += mensagemFinalizada.trim();
  }

  console.log(mensFinal)
  return mensFinal;
}

function login() {
  const buscarApelido = document.getElementById("buscarApelido");
  const chatContainer = document.getElementById("chat-container");
  buscarApelido.classList.add("hide");
  chatContainer.classList.remove("hide");
}

function atualizarHTML() {
  const container = document.getElementById("chat-messages");
  if (container) {
    container.innerHTML = mensFinal
  } 
}

function commitMessageClickHandler() {
  const textoMensagem = document.getElementById("message-input");
  const textoApelido = document.getElementById("message-nickname");
  adicionarMensagem(textoApelido?.value, textoMensagem?.value);
  formatarMensagens();
  atualizarHTML();
  textoMensagem.value = '';
}

if (typeof module !== 'undefined' && module.exports) {

  document.addEventListener("DOMContentLoaded", function() {
    const botaoEnviar = document.getElementById("message-commit");
    botaoEnviar.addEventListener("click", commitMessageClickHandler);
  });
}

module.exports = {
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler,
};
// --------------------------------
