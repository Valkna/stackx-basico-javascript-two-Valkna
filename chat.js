// Array para armazenar as mensagens
let listaMensagens = [];

// Função para adicionar uma nova mensagem ao array
function adicionarMensagem(apelido, mensagem) {
    listaMensagens.push({
        apelido: apelido,
        mensagem: mensagem
    });
}

// Função para formatar as mensagens
function formatarMensagens() {
    let mensagensFormatadas = '';
    for (let i = 0; i < listaMensagens.length; i++) {
        const mensagem = listaMensagens[i];
        const mensagemFormatada = `
            <div class="chat-message">
                <span class="chat-message-apelido">${mensagem.apelido}</span>
                <span class="chat-message-item">${mensagem.mensagem}</span>
            </div>
        `;
        mensagensFormatadas += mensagemFormatada;
    }
    return mensagensFormatadas;
}

// Função para atualizar o conteúdo da div #chat-messages
function atualizarHTML() {
    const chatMessagesDiv = document.getElementById('chat-messages');
    chatMessagesDiv.innerHTML = formatarMensagens();
}

// Função para lidar com o clique no botão #message-commit
function commitMessageClickHandler() {
    const inputMensagem = document.getElementById('message-input');
    const mensagem = inputMensagem.value.trim();
    if (mensagem !== '') {
        adicionarMensagem("Usuário: ", mensagem);
        inputMensagem.value = '';
        atualizarHTML();
    }
}

// Adicionar um ouvinte de evento para o clique no botão #message-commit
const btnMessageCommit = document.getElementById('message-commit');
btnMessageCommit.addEventListener('click', commitMessageClickHandler);
