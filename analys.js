const salaryVe = venezuela.map(person => {
    return person.salary;
}
);
console.log(salaryVe + "%cResultado","Color:withe; background: black")

const salaryVeSorted = salaryVe.sort(function(a, b){
    return a + b;
});
console.log(salaryVeSorted + "%cResultado","Color:withe; background: pink")

function isPar(num) {
    return (num % 2 === 0);
}

function calculateMediaAritmetica(list){
    const sumlist = list.reduce((valueAcc, newValue) =>{
        return valueAcc + newValue
    }
);
}

function medianSalary(list) {
    const half = parseInt(list.length / 2);

    if (isPar(list.length)) {
        const personHalf1 = list[half - 1];
        const personHalf2 = list[half];

        const median = calculateMediaAritmetica([personHalf1, personHalf2]);
        return median;
    } else {
        const personHalf = list[half];
        return personHalf;
    }
}

const medianGeneralVe = medianSalary(salaryVeSorted);

//Median Top 10%//

const spliceStar = (salaryVeSorted.length * 90) /100;
const spliceCount = salaryVeSorted.length - spliceStar;

const salaryVeTop10 = salaryVeSorted.splice(
    spliceStar,
    spliceCount);

const medianTop10Ve = medianSalary(salaryVeTop10)

console.log({
 medianGeneralVe,
 medianTop10Ve
}
);