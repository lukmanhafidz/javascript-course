const year = '2024';

//function declaration
function calcAgeDeclare (birthYear) {
    return year - birthYear;
}

const func1 = calcAgeDeclare(2000)

//function expression
const calcAgeExpress = function (birthYear){
    return year - birthYear;
}

const func2 = calcAgeExpress(2000)

console.log(func1, func2)