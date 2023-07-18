var perguntas = [
    /*Pergunta*/[],
    /*Alternativa A*/[],
    /*Alternativa B*/[],
    /*Alternativa C*/[],
    /*Alternativa Correta*/[]
];

//btn registrar pergunta
function btnRegistrar() {
    for (let i = 0; i < 2; i++) {
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
        for (let i = 0; i < 2; i++) {

            let resposta = prompt(`${perguntas[0][i]}
  A) ${perguntas[1][i]}
  B) ${perguntas[2][i]}
  C) ${perguntas[3][i]}`);

            if (resposta.toLowerCase() == perguntas[4][i].toLowerCase()) {
                alert(`Parabéns a aternativa ${resposta.toUpperCase()} está correta!`)
                pontosPositivos += 1
            } else {
                alert(`Infelizmente a aternativa ${resposta.toUpperCase()} está incorreta!`)
                pontosNegativos += 1
            }
        }
        //pontuação do quiz
        alert(`Pontos Positivos ${pontosPositivos}
Pontos Negatios ${pontosNegativos}`);

    } else {
        alert("Cadastre as perguntas antes de tentar responder!")
    }
}
function btnResetar() {
    alert("Perguntas Resetadas")

    for(let i = 0; i < 2; i++){
        perguntas[0].splice(i)
        perguntas[1].splice(i)
        perguntas[2].splice(i)
        perguntas[3].splice(i)
        perguntas[4].splice(i)
    }
}

function btnSair(){
    window.close()
}