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
    pergunta     : "Marty McFly era um garoto que voltava no tempo em uma máquina feita pelo professor Doc Brown. Qual é o nome do filme?",
    alternativaA : "Os Garotos Perdidos",
    alternativaB : "Uma Corrida No Tempo",
    alternativaC : "De Volta Para o Futuro",
    alternativaD : "Conta Comigo",
    correta      : "De Volta Para o Futuro",
}
const q2 = {
    numQuestao   : 2,
    imagem       : '2.jpeg',  
    pergunta     : "Qual é o filme?",
    alternativaA : "Grease - Nos Tempos da Brilhantina",
    alternativaB : "Os Embalos de Sábado à Noite",
    alternativaC : "Os Embalos de Sábado Continuam",
    alternativaD : "Dirty Dancing",
    correta      : "Os Embalos de Sábado Continuam",
}
const q3 = {
    numQuestao   : 3,
    imagem       : '3.jpg', 
    pergunta     : "Qual o verdadeiro nome do personagem Indiana Jones (revelado por seu pai em 'A Última Cruzada')?",
    alternativaA : "Henry Jones Jr.",
    alternativaB : "Indiana Henry Jones",
    alternativaC : "Robert Indiana Jones",
    alternativaD : "Henry Indiana Jones Jr.",
    correta      : "Henry Jones Jr.",
}
const q4 = {
    numQuestao   : 4,
    imagem       : '4.jpg',  
    pergunta     : "A qual filme pertence a frase: 'Você é uma doença. E eu sou a cura'?",
    alternativaA : "Stallone Cobra",
    alternativaB : "Rambo 2: A Missão",
    alternativaC : "Comando para Matar",
    alternativaD : "Duplo Impacto",
    correta      : "Stallone Cobra",
}
const q5 = {
    numQuestao   : 5,
    imagem       : '5.jpg',  
    pergunta     : "A musica 'Glory of Love' de Peter Cetera foi tema de qual filme?",
    alternativaA : "Karate Kid 2",
    alternativaB : "Karate Kid",
    alternativaC : "Um príncipe em Nova Iorque",
    alternativaD : "Flashdance",
    correta      : "Karate Kid 2",
}
const q6 = {
    numQuestao   : 6,
    imagem       : '6.jpg',  
    pergunta     : "Como se chama o filme de ação que uniu Sylvester Stallone e Kurt Russell em tela?",
    alternativaA : "Máquina Mortífera",
    alternativaB : "Rambo",
    alternativaC : "Tango e Cash",
    alternativaD : "Creed",
    correta      : "Tango e Cash",
}
const q7 = {
    numQuestao   : 7,
    imagem       : '7.jpeg', 
    pergunta     : "Como se chama esse clássico do cinema brasileiro?",
    alternativaA : "Pixote: A Lei do Mais Fraco",
    alternativaB : "O Bandido da Luz Vermelha",
    alternativaC : "Cidade de Deus",
    alternativaD : "O Homem da Capa Preta",
    correta      : "Pixote: A Lei do Mais Fraco",
}
const q8 = {
    numQuestao   : 8,
    imagem       : '8.jpg',  
    pergunta     : "Foi nos anos 80 que Tom Cruise se consagrou. Essa imagem é de qual filme estrelado por ele?",
    alternativaA : "Top Gun",
    alternativaB : "Cocktail",
    alternativaC : "Negócio Arriscado",
    alternativaD : "A Cor do Dinheiro",
    correta      : "Cocktail",
}
const q9 = {
    numQuestao   : 9,
    imagem       : '9.jpg',  
    pergunta     : "Qual é o filme?",
    alternativaA : "À Espera de um Milagre",
    alternativaB : "Forrest Gump: O Contador de Histórias",
    alternativaC : "Quero Ser Grande",
    alternativaD : "Uma Dupla Quase Perfeita",
    correta      : "Quero Ser Grande",
}
const q10 = {
    numQuestao   : 10,
    imagem       : '10.jpg', 
    pergunta     : "Qual é o filme?",
    alternativaA : "Flashdance - Em Ritmo de Embalo",
    alternativaB : "Dirty Dancing: Ritmo Quente",
    alternativaC : "Gatinhas e Gatões",
    alternativaD : "Footloose - Ritmo Louco",
    correta      : "Dirty Dancing: Ritmo Quente",
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