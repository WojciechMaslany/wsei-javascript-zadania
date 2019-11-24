var array = ['apple', 'banana', 'blueberry'];
console.log(array[0]);

console.log(array[array.length-1]);

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

function printTable(tab){
    for(let i = 0; i<tab.length; i++) {
        console.log(tab[i]);
    }
}

printTable(array);

function multiply(array){
    var suma = 1;

    for(i=0; i< array.length; i++){
        suma = suma * array[i];
    }
    return suma;
}

multiply([1, 2, 3, 4, 5, 6, 7]);


function getEvenAverage(tab) {
    let evenNumbers = [];


    for (let i = 0; i < tab.length; i++) {
        const element = tab[i];
        if(tab[i] % 2 === 0) {
            evenNumbers.push(element);
        }
    }

    let sum = 0;

    for (let i = 0; i<evenNumbers.length; i++) {
        sum+=evenNumbers[i];
    }

    if (evenNumbers.lenght === 0) {
        return null;
    } else {
        return sum/evenNumbers.length;
    }
}

getEvenAverage([1,2,3,4,5,6,7])
