//Definir a palavra a ser descoberta
let segredo = ""
let rodada = 0;
let qtdLetras = 5;
let tentativas = [];

function iniciar() {
    //Banco de Palavras
    const palavrasEducacao = [
        "BETEL", "ALUNO", "TURMA", "LIVRO", "TEXTO",
        "PROVA", "SABER", "LIÇÃO", "NOTAS", "REGRA",
        "AULAS", "MENTE", "LÁPIS", "PAPEL", "RÉGUA",
        "TINTA", "MAPAS", "CURSO", "EXAME", "TESTE",
        "CÓPIA", "TERMO", "CANTO", "ARTES", "CORAL",
        "GRUPO", "AMIGO", "UNIÃO", "ORDEM", "NORMA",
        "VALOR", "AFETO", "CULTO", "VERBO", "SALMO",
        "HONRA", "MORAL", "ÉTICA", "GRAÇA", "SANTO",
        "LOUSA", "LÍDER", "PASTA", "SÁBIO", "IDEIA",
        "FALAR", "OUVIR", "GUIAR", "PAUTA", "REINO"
    ];

    //Definir a palavra a ser descoberta
    let posicao = Math.floor(Math.random() * palavrasEducacao.length);

    segredo = palavrasEducacao[posicao]

    //Definir a rodada atual
    rodada = 0;

    //Criar o formulário
    criarFormulario();
}


function verificar() {
    //Repetir até 5x

    //Passo 1: Pegar todas as letras digitadas pelo usuário

    let tentativa = "";
    let posicaoCerta = 0;

    for (let i = 0; i < qtdLetras; i++) {
        let caixa = document.forms["termo" + rodada]["letra" + i].value.toUpperCase();

        if (caixa == segredo[i]) {
            posicaoCerta++;
            document.forms["termo" + rodada]["letra" + i].style.backgroundColor = "LightBlue";
        } else if (segredo.includes(caixa)) {
            document.forms["termo" + rodada]["letra" + i].style.backgroundColor = "yellow";
        } else {
            document.forms["termo" + rodada]["letra" + i].style.backgroundColor = "gray";
        }

        tentativa += caixa;
    }

    tentativas.push(tentativa);

    if (segredo == tentativa) {
        alert("Acertou")
    } else {
        rodada++;

        if (rodada < 5) {
            criarFormulario();
        } else {
            alert("Fim de Jogo")
        }
    }


    alert(tentativa);

    //Passo 1.1: Adicionar na lista de letras já utilizadas

    //Passo 2: Verificar se as letras estão na posição correta

    //Passo 3: Verificar se tem a letra em outra posição

    //Passo 4: Colocar a Cor

    //Passo 5: Verificar se o usuário acertou a palavra

    //Passo 5.1: Se o usuário não acertou:
    // Incrementar a Rodada
    //Passo 5.1.1
    // Verificar se ainda pode incrementar rodada ou se o jogo acabou

    // Criar Formulário

    //Fim da repetição
}

function criarFormulario() {
    //Criar formulário
    let jogo = document.getElementById("jogo");

    //Criando o elemento form
    let formulario = document.createElement("form");

    formulario.name = "termo" + rodada;

    formulario.onsubmit = function () {
        verificar();
        return false;
    }

    for (let i = 0; i < qtdLetras; i++) {
        let caixa = document.createElement("input");

        caixa.type = "text";
        caixa.maxLength = 1;
        caixa.name = "letra" + i

        formulario.appendChild(caixa);
    }

    let botao = document.createElement("input");
    botao.type = "submit";
    botao.value = "Enviar";

    formulario.appendChild(botao)

    jogo.appendChild(formulario);
}

iniciar();