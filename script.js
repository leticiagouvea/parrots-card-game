let qtdcartas = prompt('Digite com quantas cartas deseja jogar:');
let caixacartas = document.querySelector('.cartas');
let arraycartas = [];
let cartaClicada;

let gifs = [
    'bobross', 'bobross',
    'explody', 'explody',
    'fiesta', 'fiesta',
    'metal', 'metal',
    'revertit', 'revertit',
    'triplets', 'triplets',
    'unicorn', 'unicorn'
]

while (qtdcartas < 4 || qtdcartas > 14 || qtdcartas %2 == 1 || isNaN(qtdcartas) === true) {
    qtdcartas = prompt('Ops! A quantidade de cartas deve ser um número par entre 4 a 14.')
} alert ('Ok, pode jogar!')

for (let i = 0; i < qtdcartas; i++) {

    let cartas =`
    <div class="carta" onclick="virarCarta(this)">
        <div class="parrotimg">
            <img class="papagaio" src="imgs/papagaio.png">
        </div>

        <div class="parrotgif escondido">
            <img src="imgs/${gifs[i]}parrot.gif">
        </div>
    </div>
    `
    arraycartas.push(cartas)
}

arraycartas.sort(comparador)
function comparador() {
    return Math.random() - 0.5;
}

caixacartas.innerHTML = arraycartas.join("")

function virarCarta(elemento) {
    elemento.classList.add('virou');

    if (cartaClicada === undefined) {
        cartaClicada = elemento

    } else {
        comparaCartas(cartaClicada, elemento)
    }
}

function comparaCartas(carta1, carta2) {
    cartaClicada = undefined

    if (carta1.innerHTML === carta2.innerHTML) {
        carta1.removeAttribute('onclick')
        carta2.removeAttribute('onclick')

    } else {
        setTimeout(function() {
            carta1.classList.remove('virou')
            carta2.classList.remove('virou')
        }, 1000)
    }
}

