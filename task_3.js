/*Задание 3.
Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
*/

function func1(num1) {
    return function func2(num2) {
      return result = num1 + num2;
    }
   }
   func1(10)(5)
   console.log (result)
   