// // Atividade Prática - Funções

// 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e uma letra. Se a letra for A a função deve calcular a média aritmética, se for P, a média ponderada (peso: 5, 3 e 2).

function notasAluno(arrayNotas, arrayPesos, tipoMedia) {
    const [nota1, nota2, nota3] = arrayNotas // desestruturação do array - inverte a ordem de declaração: declara-se os elementos e os atribui ao array elencado com parâmetro
    const [peso1, peso2, peso3] = arrayPesos
    const media =
        tipoMedia === "A" ? (nota1 + nota2 + nota3) / 3 :
            tipoMedia === "P" ? (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3) :
                null
    return media
}
const notas = [9, 8, 7]
const pesos = [5, 3, 2]
const mediaTipoP = "P"
// const mediaTipoA = "A"

document.write(`1. A média dos aluno ficou em ${notasAluno(notas, pesos, mediaTipoP)}.<br><br>`) // Ao chamar a função eu escolho quais argumentos eu atribuirei aos parâmetros requeridos pela função, para que ela os utilize e me de um retorno com base neles.



// // 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se for ímpar ou falso se for par.

function verificarImpar(numero) {
    return numero % 2 !== 0
}
const numeroEscolhido = 2
document.write(`2. O número escolhido é ímpar? ${verificarImpar(numeroEscolhido)}.<br><br>`)



// 3. Crie uma função que recebe por parâmetro um valor inteiro e positivo e retorne verdadeiro se o número for primo ou falso se não for.

// código reduzido
function numeroPrimo(numero) {
    let primo
    let detect = 0
    for (let k = 1; k <= numero; k++) {
        if (numero % k == 0) {
            detect++
        }
    }
    detect === 2 ? primo = true : primo = false
    return primo
}
const numeroEscolhido2 = 8297
document.write(`3. O número ${numeroEscolhido2} é primo? ${numeroPrimo(numeroEscolhido2)}.<br><br>`)



// 4. Crie uma função que recebe por parâmetro o tempo de duração de uma fábrica expressa em segundos e retorna esse tempo em horas, minutos e segundos.
// Ex:    Entrada: 3672    Saída: 1:1:12

function conversorTempo(segundos) {
    const horas = segundos / 60 / 60 | 0 // o operador |0 executar um Math.floor para números positivos e Math.ceil para números negativos
    segundos %= (60 * 60)
    const minutos = segundos / 60 | 0
    segundos %= 60
    return { horas, minutos, segundos } // return como objeto possibilitando múltiplos retornos
}

const tempoEmSegundos = 9999
const tempoEm = conversorTempo(tempoEmSegundos)
document.write(`4. Tempo: ${tempoEm.horas} horas, ${tempoEm.minutos} minutos e ${tempoEm.segundos} segundos.<br><br>`);



// 5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se é um valor perfeito ou falso se não for. Um valor é dito perfeito quando ele é igual a soma dos seus divisores excetuando ele próprio.
// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores


let somaDivisores = 0
function numeroPerfeito(inteiro) {
    for (let j = 1; j < inteiro; j++) {
        if (inteiro % j === 0) somaDivisores += j
    }
    return somaDivisores === inteiro
}
const numeroEscolhido3 = 28
document.write(`5. O número ${numeroEscolhido3} é um número perfeito? ${numeroPerfeito(numeroEscolhido3)}.<br><br>`)



// 6. Crie uma função chamada acessoAoSite() que não tenha parâmetro. Esta função será chamada ao abrir a página e mostrará um alerta informando “Bem vindo ao site”.

function acessoAoSite() {
    alert(`6. Bem vindo ao site!`)
}
acessoAoSite()




// // 7. Crie uma função chamada mostrarMensagem() que não tenha parâmetro. Esta função será chamada ao abrir a página e mostrará uma mensagem no console.log() informando “Acesso à aplicação NomeAplicação” e um alerta informando “Bem vindo à aplicação NomeAplicação”. Sendo que o nome da aplicação deve ser salvo em uma variável para mostrar nas mensagens.

const aplicacao = "Deste Site"
function mostrarMensagem() {
    console.log(`7. Acesso à aplicação ${aplicacao}.`)
    alert(`7. Bem vindo à aplicação ${aplicacao}!`)
}
mostrarMensagem()



// // 8. Crie uma função chamada mostrarDobro(num), que recebe um parâmetro sendo um número inteiro. Esta função será chamada ao abrir a página e mostrará um alerta com o resultado. Exemplo: “O dobro do número 5 é 10.”

function mostrarDobro(num) {
    alert(`8. O dobro do número ${num} é ${num*2}!`)
}
const numeroEscolhido4 = 6
mostrarDobro(numeroEscolhido4)




// // 9. Crie uma função chamada calcularMedia(nota1, nota2, nota3, nome), que recebe 4 parâmetros sendo três inteiros e um texto (String). Esta função será chamada ao abrir a página e mostrará um alerta com a média. Exemplo: “João, sua média é 70.” A função também deve mostrar no console.log() as notas recebidas. Exemplo “Nota 1: 60,Nota 2: 70,Nota 3: 80”.

function calcularMedia(nota1, nota2, nota3, nome) {
    alert(`9. ${nome}, sua média é ${(nota1 + nota2 + nota3) /3}.`)
    document.write(`9. As três notas de ${nome} são: ${nota1}, ${nota2} e ${nota3}.`)
}
const nota1 = 9
const nota2 = 10
const nota3 = 9.5
const nome  = "João"

calcularMedia(nota1, nota2, nota3, nome)
