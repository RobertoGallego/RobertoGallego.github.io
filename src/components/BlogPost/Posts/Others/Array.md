Métodos de Array en ES2023
1) toReversed()

Devuelve un nuevo array invertido sin mutar el original. 
José Silva

const original = [1, 2, 3];
const rev = original.toReversed();
console.log(original); // [1, 2, 3]
console.log(rev);      // [3, 2, 1]

2) toSorted()

Devuelve un nuevo array ordenado sin cambiar el original. 
José Silva

const nums = [3, 1, 4];
console.log(nums.toSorted()); // [1, 3, 4]

3) toSpliced(start, deleteCount, ...items)

Como splice, pero devuelve un nuevo array y no modifica el original. 
José Silva

const arr = [1, 2, 3, 4];
console.log(arr.toSpliced(1, 2, 9)); // [1, 9, 4]

4) with(index, value)

Devuelve una copia del array con un elemento reemplazado. 
José Silva

const a = [10, 20, 30];
console.log(a.with(1, 99)); // [10, 99, 30]

5) findLast(callback)

Busca desde el último elemento hacia adelante. 
José Silva

const numbers = [1, 2, 3, 4, 5];
let lastEven = numbers.findLast(n => n % 2 === 0);
console.log(lastEven); // 4

6) findLastIndex(callback)

Devuelve el índice del último elemento que cumple la condición. 
José Silva

console.log(numbers.findLastIndex(n => n % 2 === 0); // 3


👉 Todos estos métodos no mutan el array original cuando trabajan con copias (“immutable” helpers). 
W3Schools