const list = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
]

const objCount = {};

list.map(element => {
    if (objCount[element]) {
        objCount[element] += 1;
    } else {
        objCount[element] = 1;
    }
});
console.log(objCount)

// el Object.entries(objeto a convertir) -- convierte un objeto a un array//
const list2 = Object.entries(objCount).sort((valorAcc, newValue) => {
    return valorAcc - newValue;
});
console.log(list2);


const listSort = list2.sort((elementA, elementB) => {
    return elementA[1] - elementB[1];
  });
  console.log(listSort)

  
const listSort = list2.sort((elementA, elementB) => {
    return elementA[1] - elementB[1];
  });
  console.log(listSort);

const moda = listSort[listSort.length - 1];
console.log(moda)