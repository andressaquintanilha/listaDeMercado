let BotaoDeleta = () => {
    let botaoDeleta = document.createElement("button");

    botaoDeleta.innerText = "Deletar";
    botaoDeleta.addEventListener("click", deletarTarefa);

    return botaoDeleta;
}

let deletarTarefa = (evento) => {
    let botaoDeleta = evento.target;

    let tarefaCompleta = botaoDeleta.parentElement;

    tarefaCompleta.remove();

    return botaoDeleta;
}

