// Решение ДЗ от 20.01
// ----------------------------
// Метод строки split(sep) - проеобразовывает строку в массив по разделителю 

// let string = 'Привет мой друг'

// console.log(string.split(' '))
// [ 'Привет', 'мой', 'друг' ]

// console.log(string.split(''))
// ['П', 'р', 'и', 'в','е', 'т',' ', 'м','о', 'й', ' ', 'д','р', 'у', 'г']

// console.log(string.split('р'))
// [ 'П', 'ивет мой д', 'уг' ]


// Метод join(sep) - проеобразовывает из массива в с строку по разделителю (sep)

// let array = [ 'П', 'ивет мой д', 'уг' ]
// console.log(array.join('р'))
// Привет мой друг

// ----------------
// task 3

// Задан массив names. 
// Сформируйте новый массив full_names, элементы которого будут содежрать вложенный массив с именем и фамилией. 
// Если фамилии не окажется - второй элемент должен хранить undefined 

// let names = [ 
//     'Steven King', 
//     'Jonh Snow', 
//     'Oliver', 
//     'Neena Stich',
//     'Grant Laster', 
//     'Persius Master', 
//     'Lest' 
// ] 

// Решение 1

// full_names = []
// for (let elem of names){
//     let elem_array = elem.split(' ')
//     if (elem_array.length == 2){
//         full_names.push(elem_array)
//     } else if (elem_array.length == 1){
//         elem_array.push(undefined)
//         full_names.push(elem_array)
//     }
// }
    
// console.log(full_names)

// [
//     [ 'Steven', 'King' ],
//     [ 'Jonh', 'Snow' ],
//     [ 'Oliver', undefined ],
//     [ 'Neena', 'Stich' ],
//     [ 'Grant', 'Laster' ],
//     [ 'Persius', 'Master' ],
//     [ 'Lest', undefined ]
//   ]

//  Решение 2
// const full_names = names.map(elem => {
//     if (elem.includes(' ')) {
//       return elem.split(' ');
//     } else {
//       return [elem, undefined];
//     }
//   }); 

// console.log(full_names);

// Решение 3
// const full_names = names.map((el) =>
// 	el.includes(' ') ? el.split(' ') : [el,undefined]
// );

// console.log(full_names)

// ----------------------------------
// Регулярные выражения

// Сформировать из строки только число

// let array = [
//     'word134strin'              
//     ,'!?.14strin'                   
//     ,'word134345'                
//     ,'wordstrin134234564'
// ]   

// for (let elem of array){
//     reg = /\d+/
//     console.log(elem.match(reg)[0])
// }

// ------------------
// Метод match() - возвращает массив данных, в котором определяется информация найденного совпадения по маске

// let string = 'hello world'
// let reg = /wo/
// let result = string.match(reg)
// console.log(result)

// в случае, если маска не найдет совпадение - метод match вернет null

// let string = 'hello world'
// let reg = /123/
// let result = string.match(reg)
// console.log(result)

// ------------------------------
// Поиск по группе символов
// \w           -   латинские буквы и диапазон чисел от 0 до 9 и символ _
// \d           -   только диапазон чисел от 0 до 9
// \s           -   только пробел
// \W           -   НЕ латинские буквы и диапазон чисел от 0 до 9 и символ _
// \D           -   НЕ диапазон чисел от 0 до 9
// \S           -   НЕ пробел
// [abcABC123]  -   пользовательский набор символов
// .            -   любой символ
// [.]          -   экранирование спец. символов 
// или \.
// ^ (циркумфлекс)  - начало строки
// $                - конец строки

// let string = '?HelMo . world'
// let reg = /^[!?]\w\w\w\w\w\s[.]\s\w\w\w\w\w$/
// let result = string.match(reg)

// if (result != null){
//     console.log(result[0])
// } else {
//     console.log(null)
// }

// ---------------------------------
// Задача 1
// Задан массив phones. Найдите номера телефонов, которые соответствуют маске
// 'xxx.xxx.xxx'. Поместите эти номера в новый массив newPhones.

// let phones = [
//     '4235123.123.123',
//     '453.567.9857876',
//     '23.33.22.34',
//     '567.986.423',
//     '123456.4533',
//     '567.90987.5',
//     '12.3323.321',
//     '1234.566777',
//     '655.432.342'
// ]


// let reg = /^\d\d\d[.]\d\d\d[.]\d\d\d$/
// let newPhones = []

// for (let elem of phones){
//     if (elem.match(reg) != null){
//         // newPhones.push(elem)
//         newPhones.push(elem.match(reg)[0])
//     }
// }

// console.log(newPhones)

// -----------------------------
// Квантификаторы
// {n}      - n-ое количество подряд идущих групп символа 
// {n,m}    - количество подярд идущих символов от n, до m
// {n,}     - n или много
// +        - замена {1,} (один или много)
// *        - замена {0,} ( 0 или много)
// ?        - замена {0,1} (0 или 1)

// let string = 'tigran@mai.com.ru'
// let reg = /\w+[@]\w{2,}[.]\w{2,}[.]?\w+/
// let result = string.match(reg)

// console.log(result)

// ------------------------------------
// Метод split в качестве аргумента может пердавать маску

// Задача: сформировать из строки string массив, элементы которого будут содержать только подстроку test
// let string = 'test1test7test9test20test'

// let result = string.split(/\d+/)

// console.log(result)

// let string = 'привет мой друг '
// console.log(string.split(' '))


















// --------------------------
// Деректива break - принудетльная остановка цикла
// while(true){
//     let answer = prompt('2+2=?')
//     if (answer == 4){
//         break
//     }
// }

// '4' == 4         true
// '4' === 4        false


// --------
// for (let elem of array){
//     console.log(elem)
//     if (elem > 6){
//         break
//     }
// }

// Важно! Ответ: 
// 5
// 6
// 7

// -----------------

// for (let elem of array){
//     if (elem > 6){
//         break
//     }
//     console.log(elem)
// }

// Важно! Ответ: 
// 5
// 6

// ----------------
// Деректива continue - принудетльно переходит к следующей итерации

// let array = [5,6,7,8,9,10]

// for (let elem of array){
//     if (elem == 8){
//         continue
//     }
//     console.log(elem)
// }

// for (let elem of array){
//     if (elem != 8){
//         console.log(elem)
//     }
// }