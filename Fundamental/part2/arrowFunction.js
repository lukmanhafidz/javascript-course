const year = '2024';

//one line
const calcRetirementYear = birthYear => year - birthYear;
const func1 = calcRetirementYear(2000);

console.log(func1);

//multiple lines
const calcRetirementYear2 = birthYear => {
    const age = year - birthYear;
    const retirement = 65 - age;
    return retirement;
}

const func2 = calcRetirementYear2(2000)

console.log(func2);

//multiple lines and parameters
const calcRetirementYear3 = (birthYear, name) => {
    const age = year - birthYear;
    const retirement = 65 - age;
    return `${name} retires in ${retirement} years`;
}

const func3 = calcRetirementYear3(2000, 'bob');

console.log(func3);
