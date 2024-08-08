function logging(data) {
    console.log(data)
}

//calling / running / invoking function
logging('lorem ipsum'); 

function cutFruitPieces(pieces, fruit){
    return fruit * pieces;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(4, apples);// calling another function
    const orangePieces = cutFruitPieces(4, oranges);

    const juice = `Juice with ${applePieces} piece of apples &
    ${orangePieces} pieces of oranges`;

    return juice;
}

fruitProcessor(5,0); // result is 5,0

const applesJuice = fruitProcessor(5,0);
console.log(applesJuice);

const applesOrangesJuice = fruitProcessor(2,3);
console.log(applesOrangesJuice);
