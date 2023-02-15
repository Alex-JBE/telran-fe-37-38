// Методы строк

// \n - вынос строки для "" ''
// \t - табуляция

// let a = 'Привет'
// let b = "Привет"

// let c = `При
// вет`

// console.log(c)

// console.log(b)

// --------------------
// concat() - метод, конкатенирующий строки

// let a = 'Привет'
// let b = 'друг'

// console.log(a.concat(', ',b,' +'))

// console.log(a + ', ' + b + ' +')

// console.log(`${a}, ${b} +`)

// --------
// concat для массива
// let a = [1,2,3]
// let b = [4,5,6]

// console.log(b.concat(a))
// console.log([...b,...a])

// console.log(a * b)

// -----------------
// repeat(n) - повторить n-ое раз строку

// let a = '_-'
// console.log(a.repeat(10))


// -----------------------------
// includes(substring) - метод, который определяет, существует ли подстрока substring в строке

// let a = 'Привет мой друг'

// console.log(a.includes('Привет'))       - true
// console.log(a.includes('мой'))          - true
// console.log(a.includes('друг'))         - true

// console.log(a.includes('вет м'))        - true
// console.log(a.includes('ой д'))         - true

// console.log(a.includes('Друг'))         - false
// console.log(a.includes('привет'))       - false

// -------------------
// startsWith(substring) - метод, который проверяет, начинается ли строка с переданной в качестве аргумента подстроки

// let a = 'Привет мой друг'

// console.log(a.startsWith('Привет'))     - true
// console.log(a.startsWith('мой'))        - false
// console.log(a.startsWith('друг'))       - false

// ---------------------
// endsWith(substring) - метод, который проверяет, заканчивается ли строка с переданной в качестве аргумента подстроки

// let a = 'Привет мой друг'

// console.log(a.endsWith('Привет'))          - false   
// console.log(a.endsWith('мой'))             - false

// console.log(a.endsWith('друг'))            - true
// console.log(a.endsWith('т мой друг'))      - true 
// console.log(a.endsWith('ривет мой друг'))  - true   

// --------------------------------------
// indexOf() - возвращает индекс налача посдтроки (слева-направо)

// let a = 'Привет мой друг'

// console.log(a.indexOf('Привет'))     0
// console.log(a.indexOf('мой'))        7

// console.log(a.indexOf('Мой'))        -1

// -----

// let a = 'Привет мой друг мой'

// console.log(a.indexOf('мой',8))      16

// lastIndexOf()  - возвращает индекс налача посдтроки (справа-наналево)
// console.log(a.lastIndexOf('мой'))     16
 
// ---------------
// Задача 1.
// Определить индекс второй подстроки 'date' у переменной string.
// Код должен работать на 2 тестах
// 1-ый тест
// let string = 'date 10.10.10 date 20.20.20 date 30.30.30' 
// 14    

// 2-ой тест
// let string = '10.10.10.10.10.10 date 20.20.20 date 30.30.30 date'   
// 32

// Решение
// console.log(string.indexOf('date', string.indexOf('date')+1))

// ------------
// Задача 2

// Задан формат даты в переменной dates в виде строки.
// '2022/10/18' - американский
// '2022.10.18' - русский

// Напишите программу, которая определит к какой стране относится формат даты
// В качестве ответа вывести сообщение "Формат даты российский"

// Пример:
// let date = '2020.10.18'

// Результат:
// Формат даты американский

// Решение
// if (date.includes('/')){
//     console.log('Формат даты американский')
// } else if(date.includes('.')){
//     console.log("Формат даты российский")
// }


// Задача 3.
// Задан массив emails, передающий строковые элементы. Определите, все ли элементы содержат верную почту.
// Критерии правильной почты: наличие "@" и "."
// В качестве ответа необходимо в консоль вывести ответ true/false для каждого элемента.

// Пример:
// let emails = ['top@dot.com', 'abra@gmailcom', 'pot.mail.ru', 'grek@pro.pro']

// Результат:
// true
// false
// false
// true

// Решение 1:
// for (let elem of emails){
//     if (elem.includes('@') && elem.includes('.')){
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// Решение 2:
// for (let elem of emails){
//     console.log(elem.includes('@') && elem.includes('.'))
// }

// Решение 3:
// emails.forEach((elem) => console.log(elem.includes('@') && elem.includes('.')))

// ----------------------------
// replace(substr, newsubctr) - заменяет 1 подстроку на другую подстроку. Метод возращает новую строку

// let a = 'Привет мой друг'

// console.log(a.replace('мой', 'наш'))
// console.log(a)

// ------
// let a = 'Привет мой друг мой'
// метод вернет новую строку без изменений
// console.log(a.replace('Мой', 'наш'))

// ------
// reaplce так же может заменить посдтроку на пустую строку (удаление подстроки)
// let a = 'Привет мой друг'
// console.log(a.replace('мой', ''))


// ----------------
// replaceAll заменяет все найденные совпадения

// let a = 'Привет мой друг мой'
// console.log(a.replaceAll('мой', 'наш'))
// 'Привет наш друг наш'


// ------------------------
// Задача 4
// Задан массив phones, передающий номера телефонов в виде строки.
// Реализуйте очистку данных, сформировав единый вид для все элементов массива.phones

// Пример:
let phones = ['891 11112 233','89111-1122-44','8911-11122-55','89111112266']

// Результат:
// ['+79111112233','+79111112244','+79111112255','+79111112266']

// Решение 1:
// for (let i in phones){
//     phones[i] = phones[i].replaceAll(' ', '').replaceAll('-', '').replace('8', '+7')
// }
// console.log(phones)

// Решение 2 
// console.log(phones.map(elem => elem.replaceAll(' ', '').replaceAll('-', '').replace('8', '+7')))

// --------------------
// slice(n,m) - позволяет софрмировть подстроку от n индекса до m (не включительно) индекса строки
// let a = 'Привет мой друг'

// console.log(a.slice(7,10))