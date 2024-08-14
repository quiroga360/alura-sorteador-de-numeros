// função: sortear número
const shuffle = (minInput, maxInput) => {
    minInput = Math.ceil(minInput);
    maxInput = Math.floor(maxInput);
    return Math.floor(Math.random() * (maxInput - minInput + 1) + minInput);
};

// função: repetir sorteio
const repeatShuffle = (amountOfShuffleInput, minInput, maxInput) => {

    const drawnNumbers = [];
    amountOfShuffleInput = parseInt(amountOfShuffleInput);
    minInput = parseInt(minInput);
    maxInput = parseInt(maxInput);

    for (let i = 0; i < amountOfShuffleInput; i++) {
        drawnNumbers.push(shuffle(minInput, maxInput));
    };

    return drawnNumbers;

};

// função: montar string de números sorteados
const renderdrawnNumbersString = (listInput) => {

    let messageOutput = "";

    listInput.forEach((number) => {
        return messageOutput += `&nbsp;&nbsp;${number}&nbsp;&nbsp;`;
    });

    return messageOutput;

};

// função: resetar valores

const resetValues = () => {
    amountOfShuffle.value = 1;
    min.value = 0;
    max.value = 1;
}

// importar DOM
let resultMessage = document.querySelector('#resultado > label');
const btnSortear = document.querySelector('#btn-sortear');
const btnReiniciar = document.querySelector('#btn-reiniciar');
const amountOfShuffle = document.querySelector('#quantidade');
const min = document.querySelector('#de');
const max = document.querySelector('#ate');

resetValues();

// evento: sortear
btnSortear.addEventListener('click', () => {
    const drawnNumbers = repeatShuffle(amountOfShuffle.value, min.value, max.value);
    console.log(amountOfShuffle.value);
    resultMessage.innerHTML = `Números sorteados: ${renderdrawnNumbersString(drawnNumbers)}`;
    btnReiniciar.setAttribute('class', 'container__botao');
});

// evento: reiniciar
btnReiniciar.addEventListener('click', () => {
    
    if(btnReiniciar.getAttribute('class') === 'container__botao') {
        resetValues();
        btnReiniciar.setAttribute('class', 'container__botao-desabilitado');
        resultMessage.innerHTML = `Números sorteados: nenhum número sorteado ainda`;
    } else {
        console.log('resetar desabilitado');
        
    }
    
});
