let qtdCartas = Number(prompt('Digite com quantas cartas deseja jogar:'));
let caixaCartas = document.querySelector('.cartas');
let arrayCartas = [];
let cartaClicada;
let clicks = 0;
let acertos = 0;
let gifs = [
    'bobross', 'bobross',
    'explody', 'explody',
    'fiesta', 'fiesta',
    'metal', 'metal',
    'revertit', 'revertit',
    'triplets', 'triplets',
    'unicorn', 'unicorn'
]

while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas %2 == 1 || isNaN(qtdCartas) === true) {
    qtdCartas = prompt('Ops! A quantidade de cartas deve ser um número par entre 4 a 14.')
} alert ('Ok, pode jogar!')

for (let i = 0; i < qtdCartas; i++) {

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
    arrayCartas.push(cartas)
}

arrayCartas.sort(comparador)
function comparador() {
    return Math.random() - 0.5;
}

caixaCartas.innerHTML = arrayCartas.join("")

function virarCarta(elemento) {
    elemento.classList.add('virou');
    clicks++;

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
        acertos += 2;
        console.log(acertos)

        if (qtdCartas === acertos) {
            setTimeout(() => {
                alert(`Você ganhou em ${clicks} jogadas!`);
                reiniciarPartida();
            }, 500)
        }

    } else {
        setTimeout(() => {
            carta1.classList.remove('virou');
            carta2.classList.remove('virou');
        }, 1000)
    }
}

function reiniciarPartida() {
    const reiniciar = prompt('Deseja jogar novamente? Digite "sim" ou "não".');

    if (reiniciar === "sim") {
        window.location.reload();
    } else {
        alert('Fim de jogo');
    }
}