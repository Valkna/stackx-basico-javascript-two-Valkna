let listaMensagens = [];

function adicionarMensagem(apelido, mensagem) 
{
    listaMensagens.push({
        apelido, mensagem
    });
}

function formatarMensagens() 
{  
    let mensagens = '';

    for (let i in listaMensagens)
    {
        let item = listaMensagens[i];

        mensagens += `<div class="chat-message">
            <span class="chat-message-apelido">${item.apelido}</span>
            <span class="chat-message-item">${item.mensagem}</span>
        </div>`;
    }

    return mensagens;
}

function atualizarHTML() 
{
    let mensagens = formatarMensagens();
    document.getElementById('chat-messages').innerHTML = mensagens;
}

function commitMessageClickHandler() 
{
    let message = document.getElementById('message-input').value;
    adicionarMensagem('stackx', message);
    atualizarHTML();
    document.getElementById('message-input').value = '';
}

module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};