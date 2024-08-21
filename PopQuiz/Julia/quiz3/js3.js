let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.imagemDaQuestao img')  
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    imagem       : '0.jpg',  
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    imagem       : '1.jpg',  
    pergunta     : "Qual é a música icônica desta série?",
    alternativaA : "I'll Be There For You",
    alternativaB : "Smelly Cat Medley",
    alternativaC : "Shinny Happy People",
    alternativaD : "Good Intentions",
    correta      : "I'll Be There For You",
}
const q2 = {
    numQuestao   : 2,
    imagem       : '2.jpg',  
    pergunta     : "Na 2° temporada, Joey resolve dar uma pulseira de ouro a Chandler como agradecimento pela sua amizade. O que estava escrito na pulseira?",
    alternativaA : "To My Best Bud",
    alternativaB : "Best Friends Forever",
    alternativaC : "To My Brother",
    alternativaD : "To My Best Friend",
    correta      : "To My Best Bud",
}
const q3 = {
    numQuestao   : 3,
    imagem       : '3.jpg', 
    pergunta     : "Houve 1 ator na série que representou mais de 1 personagem, quem é esse ator?",
    alternativaA : "June Gable",
    alternativaB : "Peter Dennis",
    alternativaC : "Kyle Gass",
    alternativaD : "Michael Rapaport",
    correta      : "June Gable",
}
const q4 = {
    numQuestao   : 4,
    imagem       : '4.jpg',  
    pergunta     : "Qual é o nome da poltrona do Joey?",
    alternativaA : "Sherley",
    alternativaB : "Rosita",
    alternativaC : "Tatiana",
    alternativaD : "Rose",
    correta      : "Rosita",
}
const q5 = {
    numQuestao   : 5,
    imagem       : '5.jpeg',  
    pergunta     : "Por qual motivo Monica e Chandler começaram a ficar?",
    alternativaA : "Joey sonhou com Monica e desafiou Chandler a beijá-la e os dois se apaixonaram",
    alternativaB : "Um homem bem burro achou que Monica era mãe de Ross no casamento do mesmo",
    alternativaC : "Monica sempre guardou uma paixãozinha de Chandler dentro de si, mas, um dia, ficou à sós com Chandler e eles começaram a ficar",
    alternativaD : "Ross fez uma aposta com Chandler",
    correta      : "Um homem bem burro achou que Monica era mãe de Ross no casamento do mesmo",
}
const q6 = {
    numQuestao   : 6,
    imagem       : '6.png',  
    pergunta     : "Qual o nome da irmã gêmea de Phoebe?",
    alternativaA : "Lina",
    alternativaB : "Dinny",
    alternativaC : "Ursulla",
    alternativaD : "Úrsula",
    correta      : "Úrsula",
}
const q7 = {
    numQuestao   : 7,
    imagem       : '7.jpg', 
    pergunta     : "No início da série, Rachel foge de seu casamento. Ela iria se casar com quem?",
    alternativaA : "Joey",
    alternativaB : "Paolo",
    alternativaC : "Barry",
    alternativaD : "Ross",
    correta      : "Barry",
}
const q8 = {
    numQuestao   : 8,
    imagem       : '8.jpg',  
    pergunta     : "De quem Rachel engravida na 8° temporada de Friends?",
    alternativaA : "Ross",
    alternativaB : "Joey",
    alternativaC : "Barry",
    alternativaD : "Tag",
    correta      : "Ross",
}
const q9 = {
    numQuestao   : 9,
    imagem       : '9.jpg',  
    pergunta     : "Quantos episódios a série teve, ao total?",
    alternativaA : "182",
    alternativaB : "302",
    alternativaC : "289",
    alternativaD : "236",
    correta      : "182",
}
const q10 = {
    numQuestao   : 10,
    imagem       : '10.jpg', 
    pergunta     : "Qual é o primeiro e último cenário da série em que os amigos vão?",
    alternativaA : "O apartamento",
    alternativaB : "Bloomingdale’s",
    alternativaC : "Central Perk",
    alternativaD : "Plaza Hotel",
    correta      : "Central Perk",
}


// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
imgQuestao.setAttribute('src', 'images/'+q1.imagem)  
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    imgQuestao.setAttribute('src', 'images/'+questoes[nQuestao].imagem) 
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent

    let certa = questoes[numeroDaQuestao].correta

    if(respostaEscolhida == certa) {
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}