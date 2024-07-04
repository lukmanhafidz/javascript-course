function logging(data) {
    console.log(data)
}

//calling / running / invoking function
logging('lorem ipsum'); 

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples &
    ${oranges} oranges`;

    return juice;
}

fruitProcessor(5,0); // result is 5,0

const applesJuice = fruitProcessor(5,0);
console.log(applesJuice);

const applesOrangesJuice = fruitProcessor(2,3);
console.log(applesOrangesJuice);
