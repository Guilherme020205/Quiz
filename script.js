var perguntas = [
    /*Pergunta*/[],
    /*Alternativa A*/[],
    /*Alternativa B*/[],
    /*Alternativa C*/[],
    /*Alternativa Correta*/[]
];

//btn registrar pergunta
function btnRegistrar() {
    for (let i = 0; i < 10; i++) {
        //Número da pergunta
        // var nPergunta = i
        //questão é a certa ou não
        var questãoCerta

        //cadastrar pergunta
        var pergunta = prompt(`Cadastre a ${(i + 1)}° questão `);
        perguntas[0].push(pergunta);

        //cadastrar alternativa A
        var alternativaA = prompt(`Cadastre a primeira alternativa `);
        perguntas[1].push(alternativaA);

        //cadastrar alternativa B
        var alternativaB = prompt(`Cadastre a segunda alternativa `);
        perguntas[2].push(alternativaB);

        //cadastrar alternativa C
        var alternativaC = prompt(`Cadastre a terceira alternativa `);
        perguntas[3].push(alternativaC);

        //pergunta qual das alternativa está correta

        questãoCerta = prompt(`Qual é a alternativa correta? (A), (B) OU (C)`);
        perguntas[4].push(questãoCerta);
    }
}
function btnResponder() {
    //respondendo as perguntas cadastradas

    var pontosPositivos = 0
    var pontosNegativos = 0

    if (perguntas[0].length > 0) {
        //ordem de perguntas
        var ordemPergunta = [];

        let armazena_numeroOrdemPergunta;

        for (let i = 0; i < 10; i++) {
            armazena_numeroOrdemPergunta = parseInt((Math.random() * 10))

            if (ordemPergunta.indexOf(armazena_numeroOrdemPergunta) === -1) {
                ordemPergunta.push(armazena_numeroOrdemPergunta);
            } else {
                i--;
            }
        }
        console.log(ordemPergunta)

        for (let i = 0; i < 10; i++) {

            let resposta = prompt(`${(i + 1)}) ${perguntas[0][ordemPergunta[i]]}
  A) ${perguntas[1][ordemPergunta[i]]}
  B) ${perguntas[2][ordemPergunta[i]]}
  C) ${perguntas[3][ordemPergunta[i]]}`);

            if (resposta.toLowerCase() == perguntas[4][ordemPergunta[i]].toLowerCase()) {
                alert(`Parabéns a aternativa ${resposta.toUpperCase()} está correta!`)
                pontosPositivos += 1
            } else {
                alert(`Infelizmente a aternativa ${resposta.toUpperCase()} está incorreta!`)
                pontosNegativos += 1
            }
        }
        //pontuação do quiz
        alert(`Pontos Positivos ${pontosPositivos}
Pontos Negativos ${pontosNegativos}`);

    } else {
        alert("Cadastre as perguntas antes de tentar responder!")
    }
}

function btnResetar() {
    alert("Perguntas Resetadas")

    for (let i = 0; i < 10; i++) {
        perguntas[0].splice(i)
        perguntas[1].splice(i)
        perguntas[2].splice(i)
        perguntas[3].splice(i)
        perguntas[4].splice(i)
    }
}

function btnSair() {
    window.close()
}
