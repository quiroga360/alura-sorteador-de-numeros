const inputQuantidade = document.getElementById('quantidade');
const inputMin = document.getElementById('de');
const inputMax = document.getElementById('ate');
//const btnSortear = document.getElementById('btn-sortear');
const numerosSorteados = [];

const sortear = (numerosQtd, min, max) => {

    min = Math.ceil(min);
    max = Math.floor(max);

    for (let index = 0; index < numerosQtd; index++) {
        numerosSorteados.push(Math.floor(Math.random() * (max - min + 1) + min));
    }

};

document.getElementById('btn-sortear').addEventListener('onclick', console.log('click'));
