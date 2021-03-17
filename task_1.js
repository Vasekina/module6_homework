/*Задание 1.
В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
*/

let arr = [1, 2, 0, null];
let filterArr = arr.filter(item => typeof item == 'number');

function checkOddEven (filterArr) {
  
let even = 0;
let odd = 0;
let nil = 0;



 for (let i = 0; i < filterArr.length; i++) {
   if (filterArr[i] % 2 === 0 && filterArr[i] != 0) {
    even++;
   }
   else if (filterArr[i] % 2 === 1){
    odd++;
   }
   else if (filterArr[i] === 0) {
    nil++;
   }
}

console.log(even);
console.log(odd);
console.log(nil);
}

checkOddEven (filterArr)
