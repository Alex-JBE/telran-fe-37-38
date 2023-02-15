// Инструкция: 
// 1) Установка Nodejs с официального сайта
// 2) Установка расширение внутри VSC CodeRunner

// console.log(123)

// -----------------------
// Методы массива
// filter() - это метод, который возвращает новый отфильтрованный массив.

// let array = [1,2,3,4,5,6,7,8,9]

// let result = array.filter((value) => value < 5)

// console.log(result)

// --------------------------------
// Задача 1
// Отфильтровать элементы таким образом, чтобы получить новый массив, который содержит только булевый тип данных
// пример:
// let array = [true, false, '12',0,true,'string',[1,2,3],{name:'tigran'}]

// Результат:
// [true,false,true]

// Решение 1 
// let result = array.filter((value)=> typeof value == 'boolean' )
// console.log(result)

// Решение 2 
// let result = []
// for (let value of array){
//     if(typeof value == 'boolean'){
//         result.push(value)
//     }
// }

// console.log(result)

// -------------------------
// Задача 2
// Отфильтровать значения по условию - первая буква строки должна быть "А"
// Пример:
let array = ['Арбуз', 'Антена','Бор','Арбуз','Сеть','Трон']

// Результат:
// ['Арбуз','Антена','Арбуз']

// Решение 
// console.log(array.filter((value) => value.startsWith('А')))
// console.log(array.filter((value) => value[0] == 'А'))
// console.log(array.filter((value) => value.slice(0,1) == 'А'))
// console.log(array.filter((value) => value.charAt(0) == 'А'))

// -----------------------------------
// Предложенные аргументы внутри колбека (filter)
// 1) Значение элемента массива
// 2) Индекс элемента массива
// 3) Целый массив

// let array = ["Один","Два","Три","Четыре"]

// Вывести элементы массива, чей индекс делится на 2 без остатка
// console.log(array.filter((value, index) => index % 2 == 0))