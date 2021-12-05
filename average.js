
function calculateAverage(list) {
    // let sumList = 0;

    // for (let i = 0; i < list.length; i++) {
    //     sumList = sumList + list[i];
    // }
    const sumList = list.reduce(function(acValue = 0, newElement){
        return acValue + newElement;
    });
    const averageList = sumList / list.length;

    return averageList;
}
console.log(calculateAverage([12,50,65,85]))



