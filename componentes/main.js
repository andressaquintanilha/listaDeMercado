// função criarTarefa: a partir do momento que eu clico no meu botão escolhido, ele vai executar a função que irá percorrer o DOM,
// vai buscar o input, vai pegar o valor que está dentro do input, vai colocar no console.log e vai exibir para nós no navegador. 

let criarTarefa = (evento) => {

    //previne que nosso html recarrega a pagina sem pedirmos
    evento.preventDefault()

    let lista = document.querySelector("[data-list]")

    //pega o que o nosso input irá receber de informação
    const input = document.querySelector("[data-form-input]");

    //essa variavel irá armazenar a informação que a varival input recebeu
    const valor = input.value;

    //irá criar uma lista no nosso html sem alterar nosso codigo html em si
    let tarefa = document.createElement("li")

    //como criar uma classe para estilizarmos os elementos criados no html a partir do js
    tarefa.classList.add("task");
    //agora podemos usar a class=task para estilizarmos os novos itens da nossa listas recebidos pelo input

    let conteudo = `<p>${valor}</p>`;

    //variavel tarefa ira receber a variavel valor, que por sua vez guarda o que foi digitado no input.
    tarefa.innerHTML = conteudo;

    //colocando o botão junto com a tarefa (novo item) que adicionamos e consequentemente excutando a ação da função descrita la embaixo
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());

    //criando um "filho" para a nossa ul do html que está como a variavel lista
    lista.appendChild(tarefa);

    //vai limpar nosso campo input
    input.value = ""
}

let novaTarefa = document.querySelector("[data-form-button]");

//evento de click: ao clicar no botão, algo acontece

//addEventListener: escuta e recebe uma ação... no caso a ação é clicar, depois temos que colocar uma função anonima, 
//pois ao clicar a função dispara uma ação.

novaTarefa.addEventListener('click', criarTarefa);

//criando o componente do botão que será uma arrow function.
//Ele deve começar com letra maiuscula


