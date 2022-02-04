let BotaoConclui = () => {
    //criando um botão no html
    let botaoConclui = document.createElement("button");

    //criei uma classe para o elemento criado acima
    botaoConclui.classList.add("check-button");

    //dei um nome para o botão criado
    botaoConclui.innerText = "Done";

    botaoConclui.addEventListener("click", concluirTarefa);
    return botaoConclui;
}

let concluirTarefa = (evento) => {

    //evento.target capturamos qual elemento foi clicado
    let botaoConclui = evento.target

    //estou pegando o pai do elemento que eu cliquei, ou o pai do botão
    let tarefaCompleta = botaoConclui.parentElement;

    //toggle pode tanto adicionar quanto remover uma classe
    //ele vai executar essa classe css a partir do momento que eu clicar no botão
    //ele devolve um boleeano verdadeiro ou falso
    tarefaCompleta.classList.toggle("done");
}
