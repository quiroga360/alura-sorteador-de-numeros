// inputs
const numerosQtd = parseInt(document.getElementById('quantidade').value);
const min = parseInt(document.getElementById('de').value);
const max = parseInt(document.getElementById('ate').value);

// placeholder
const numerosSorteados = [];

// botões
const btnSortear = document.getElementById('btn-sortear');
const btnReiniciar = document.getElementById('btn-reiniciar');

// resultado
let resultadoTexto = document.getElementById('resultado').innerText;

// iniciar botão de reiniciar desabilitado
btnReiniciar.setAttribute('class', 'container__botao-desabilitado');

// função - conferir se todos os inputs estão preenchidos para sortear
const conferirInputs = (numerosQtdInput, minInput, maxInput) => {
    const valoresDoInput = [numerosQtdInput, minInput, maxInput];
    const semValor = (input) => input > 0;
    return valoresDoInput.some(semValor);
}



// função - sortear números
const sortear = (arrayInput, numerosQtdInput, minInput, maxInput) => {

    minInput = Math.ceil(minInput);
    maxInput = Math.floor(maxInput);

    for (let index = 0; index < numerosQtdInput; index++) {
        arrayInput.push(Math.floor(Math.random() * (maxInput - minInput + 1) + minInput));
    }

    console.log(arrayInput);

};

// função - resetar array de números sorteados
const resetarNumerosSorteados = () => {
    numerosSorteados.forEach((numero) => {
        numerosSorteados.splice(numerosSorteados.indexOf(numero), 1)
    })

    console.log(numerosSorteados);

};

// evento - reiniciar
btnReiniciar.addEventListener('click', () => {

    if (resultadoTexto !== 'Números sorteados: nenhum até agora') {

        resultadoTexto = 'Números sorteados: nenhum até agora';
        min = 0;
        max = 0;
        numerosQtd = 0;
        btnReiniciar.setAttribute('class', 'container__botao-desabilitado');

        console.log(numerosSorteados);

        resetarNumerosSorteados();


    } else {
        console.log('Nenhum sorteio foi feito.');
    }

});

// evento - sortear
btnSortear.addEventListener('click', () => {
    const inputsPreenchidos = conferirInputs(numerosQtd, min, max);

    if (!inputsPreenchidos) {
        sortear(numerosSorteados, numerosQtd, min, max);
    } else {
        console.log("Algum input não foi preenchido.");
    }

});






