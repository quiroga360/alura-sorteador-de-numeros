const shuffle = (minInput, maxInput) => {
    minInput = Math.ceil(minInput);
    maxInput = Math.floor(maxInput);
    return Math.floor(Math.random() * (maxInput - minInput + 1) + minInput);
};

const repeatShuffle = (amountOfShuffleInput, minInput, maxInput) => {

    const drawnNumbers = [];
    amountOfShuffleInput = parseInt(amountOfShuffleInput);
    minInput = parseInt(minInput);
    maxInput = parseInt(maxInput);

    for (let i = 0; i < amountOfShuffleInput; i++) {
        drawnNumbers.push(shuffle(minInput, maxInput));
    }

    return drawnNumbers;

}

module.exports = { repeatShuffle };
