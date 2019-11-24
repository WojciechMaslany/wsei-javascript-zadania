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