let qtdcartas = prompt('Digite com quantas cartas deseja jogar:');

while (qtdcartas < 4 || qtdcartas > 14 || qtdcartas %2 == 1 || isNaN(qtdcartas) === true) {
    qtdcartas = prompt('Ops! A quantidade de cartas deve ser um número par entre 4 a 14.')
} alert ('Ok, pode jogar!')

let caixacartas = document.querySelector('.cartas');
for (contador = 0; contador < qtdcartas; contador++) {

    let cartas =
    `<div class="carta" ">
        <img class="papagaio" src="imgs/papagaio.png">
    </div>`

    caixacartas.innerHTML = caixacartas.innerHTML + cartas
}