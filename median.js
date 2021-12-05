
function calculateAverage(list) {
    const sumList = list.reduce(function(acValue = 0, newElement){
        return acValue + newElement;
    });
    const averageList = sumList / list.length;

    return averageList;
}

function isPar(num){
    if (num % 2 === 0) {
        return
    }else {
        return
    }
}

let median;
function medianF(list){
    const halfList = parseInt(list.length)
if (isPar(list.length)) {
    const element1 = list[halfList - 1];
    const element2 = list[halfList];

    const averageElement1And2 = calculateAverage([element1, element2]);

    median = averageElement1And2;
} else {
    median = list(halfList)
}
}