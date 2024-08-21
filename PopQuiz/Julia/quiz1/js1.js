//seleciono principais elementos pra ver eventos
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // variável de pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.imagemDaQuestao img')  // ADICIONE
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

//estruturas das quetões usando objetos
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
    pergunta     : "Quando e onde Whitney Houston nasceu?",
    alternativaA : "5 de Outubro de 1963, em Newark, New Jersey",
    alternativaB : "20 de Agosto de 1963, em New York, New York",
    alternativaC : "9 de Agosto de 1963, em Newark, New Jersey",
    alternativaD : "16 de Janeiro de 1964, em Los Angeles, Califórnia",
    correta      : "9 de Agosto de 1963, em Newark, New Jersey",
}
const q2 = {
    numQuestao   : 2,
    imagem       : '2.png',  
    pergunta     : "Ex marido de Whitney Houston:",
    alternativaA : "Michael Jackson",
    alternativaB : "Eddie Murphy",
    alternativaC : "Bobby Brown",
    alternativaD : "Jermine Jackson",
    correta      : "Bobby Brown",
}
const q3 = {
    numQuestao   : 3,
    imagem       : '3.jpg', 
    pergunta     : "Qual é a música de maior sucesso de Whitney Houston?",
    alternativaA : "Greatest Love Of All",
    alternativaB : "I Have Nothing",
    alternativaC : "Didn't We Almost Have It All",
    alternativaD : "I Will Always Love You",
    correta      : "I will Always Love You",
}
const q4 = {
    numQuestao   : 4,
    imagem       : '4.jpg',  
    pergunta     : "Qual filme de sucesso Whitney protagonizou com Kevin Costner?",
    alternativaA : "O Fantasma da Ópera",
    alternativaB : "O Mágico de Oz",
    alternativaC : "O Guarda-Costas",
    alternativaD : "O Filho Perdido",
    correta      : "O Guarda-Costas",
}
const q5 = {
    numQuestao   : 5,
    imagem       : '5.jpg', 
    pergunta     : "Quem era a Madrinha da Whitney?",
    alternativaA : "Aretha Franklin",
    alternativaB : "Tina Turner",
    alternativaC : "Diana Ross",
    alternativaD : "Bonnie Tyler",
    correta      : "Aretha Franklin",
}
const q6 = {
    numQuestao   : 6,
    imagem       : '6.jpg',  
    pergunta     : "Na verdade, Whitney não começou como cantora, mas sim na carreira de...",
    alternativaA : "Atriz",
    alternativaB : "Modelo",
    alternativaC : "Dubladora",
    alternativaD : "Apresentadora",
    correta      : "Modelo",
}
const q7 = {
    numQuestao   : 7,
    imagem       : '7.jpg', 
    pergunta     : "A cantora faleceu no dia de uma das maiores premiações americanas. Qual?",
    alternativaA : "Tony",
    alternativaB : "Oscar",
    alternativaC : "Emmy",
    alternativaD : "Grammy",
    correta      : "Grammy",
}
const q8 = {
    numQuestao   : 8,
    imagem       : '8.jpg',  
    pergunta     : "Nome de sua filha:",
    alternativaA : "Bobbi Kristina Houston Brown",
    alternativaB : "Kristina Houston",
    alternativaC : "Bobbie Krissy Brown",
    alternativaD : "Bobby Kristina Houston",
    correta      : "Bobbi Kristina Houston Brown",
}
const q9 = {
    numQuestao   : 9,
    imagem       : '9.jpg', 
    pergunta     : "Whitney Houston cantou o Hino Nacional dos Estados Unidos em que famoso evento esportivo?",
    alternativaA : "1983 Stanley Cup Finals",
    alternativaB : "2001 World Series",
    alternativaC : "1994 World Cup Final",
    alternativaD : "Super Bowl XXV",
    correta      : "Super Bowl XXV",
}
const q10 = {
    numQuestao   : 10,
    imagem       : '10.jpg',  
    pergunta     : "Qual o nome da fundação que Whitney criou em 1989 em prol das crianças?",
    alternativaA : "Whitney Houston Pediatric Cancer Hospital",
    alternativaB : "Whitney Houston Foundation For Children",
    alternativaC : "Whitney Houston Summer Camp",
    alternativaD : "Whitney Houston Mentor Program",
    correta      : "Whitney Houston Foundation For Children",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total') //tamanho do quiz

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1 //pega o tamanho da lista de questoes e faz -1
console.log("Total de questões " + totalDeQuestoes) //só aparece no navegador se abrir inspecionar
total.textContent = totalDeQuestoes //pega o total e coloca dentro dele o valor do tamanho das questoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao  //o n e texto da quest vai ser o n da quest que ta no obj q1
imgQuestao.setAttribute('src', 'images/'+q1.imagem) //cria imagem dentro do imgquestao  
pergunta.textContent   = q1.pergunta //o texto da pergunta vai ser a pergunta que está no q1
a.textContent = q1.alternativaA //o texto da alternativa A vai ser a altern A da q1
b.textContent = q1.alternativaB //ta pegando b e colocando dentro desses campos aquelas variaveis
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA (serve p identificar as quest unicamente)
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) { //passa o paramentro p saber em qual quest estamos  
    numero.textContent = nQuestao //essa funcao pega o n da quest e vai colocar dentro do numero.text 
    numQuestao.textContent = questoes[nQuestao].numQuestao
    imgQuestao.setAttribute('src', 'images/'+questoes[nQuestao].imagem) 
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA //dentro do A, pega a lista de questoes e procura o index que é o numero da minha questao 
    b.textContent = questoes[nQuestao].alternativaB // por ex: se eu passei o n da questao 1, vai procurar esse n, pegar a alternativa A e colocar dentro do A que é meu elemento
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
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 } //se a pessoa chegou no final c 110 pontos, a pontuação será no máx 100 por ex 
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
    console.log("Questão " + numeroDaQuestao) //imprime uma msg

    let respostaEscolhida = resposta.textContent

    let certa = questoes[numeroDaQuestao].correta

    if(respostaEscolhida == certa) {
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 //recebe os pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 } //prevenção de erro - verificar se na primeira quest a pessoa der um double click nao pegar os 20 pontos
    } else {
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);

    // atualizar placar
    placar = pontos //escrevo como conteúdo de texto nas instruções
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1 //o numero da quest que eu estou + 1 = proxima quest q eu vou

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
        articleQuestoes.style.display = 'block' //bloquear o quadro de questões ao reiniciar
        proximaQuestao(1) 
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000) //reiniciar quiz após 8 segundos

}