
function calculateAverage(list) {
    const sumList = list.reduce(function(acValue = 0, newElement){
        return acValue + newElement;
    });
    const averageList = sumList / list.length;

    return averageList;
}

const list1 = [
    100,
    200,
    500,
    6000
]

const halfList1 = parseInt(list1.length)

function isPar(num){
    if (num % 2 === 0) {
        return
    }else {
        return
    }
}

let median;

if (isPar(list1.length)) {
    const element1 = list1[halfList1 - 1];
    const element2 = list1[halfList1];

    const averageElement1And2 = calculateAverage([element1, element2]);

    median = averageElement1And2;
} else {
    median = list1(halfList1)
}