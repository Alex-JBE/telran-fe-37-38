// Работа с датой. Экземпляр класса Date.

// Инициализация даты (3 подхода)
// 1-ый 
// let date = new Date('2023-01-20 9:30:00') или ('2023-01-20 9:30:00 GMT')

// 2-ой
// Если указать месяц в виде числа, тогда январь будет 0, а декабрь - 11
// let date = new Date(2023,0,20,9,30)

// 3-ий
// Отсчет с 1970 года 1 месяца 1 числа в 00:00

// -----------------

// let date = new Date(0)
// 1970-01-01T00:00:00.000Z

// let date = new Date(1000 * 60 * 6)
// 1970-01-01T00:06:00.000Z

// let date = new Date((1000 * 60 * 60 * 24 * 365 * 30) + (1000 * 60 * 60 * 24 * 7))
// 2000-01-01T00:00:00.000Z

// ----------------
// Текущий момент времени
// let date = new Date() - возвращает ДАТУ текущего момента времени
// let num = Date.now()  - возвращает количество пройденных милесекунд с 1970 года до момента вызова

// ----------------
// Методы даты (компоненты даты)
// --------
// Методы, которые позволяет получить в виде числа любой компонент даты
// let date = new Date('2023-01-20 9:30:00')


// console.log(date.getFullYear())          - год даты (в виде числа)
// console.log(date.getMonth())             - месяц даты (начиная с 0)
// console.log(date.getDate())              - день месяца

// console.log(date.getHours())             - часы
// console.log(date.getMinutes())           - минуты
// console.log(date.getSeconds())           - секунды
// console.log(date.getMilliseconds())      - милисекунды

// -------
// День недели

// console.log(date.getDay())
// 0    - воскресенье
// 1    - понедельник
// 2    - вторник
// 3    - среда
// 4    - четверг
// 5    - пятница
// 6    - суббота

// --------
// Методы, которые позволяет именить дату указав отдельные компоненты
// let date = new Date('2023-01-20 9:30:00')

// Методы, помимо того, что меняют значение даты, еще возвращают количество
// пройденных миллесекунд с 1970 года до значения измененной даты

// date.setFullYear(2030)       
// date.setMonth(11)             
// date.setDate(30)              
// date.setHours(20)             
// date.setMinutes(0)           
// date.setSeconds(0)           
// date.setMilliseconds(0)  

// console.log(date)

// -------------------------
// Задача 1. 
// Напишите функцию getWeekDay(), которая в зависимости от даты 
// (текущего момента времени) в консоль выводит день недели согласно результату

// Пример:
// getWeekDay()

// Результат:
// 'Сегодня вторник'

// Большое решение 

// function getWeekDay(){
//     let date = new Date()
//     let day = date.getDay()

//     if (day == 0){
//         console.log('Сегодня воскресенье')
//     } else if (day == 1){
//         console.log('Сегодня понедельник')
//     } else if (day == 2){
//         console.log('Сегодня вторник')
//     } else if (day == 3){
//         console.log('Сегодня среда')
//     } else if (day == 4){
//         console.log('Сегодня четверг')
//     } else if (day == 5){
//         console.log('Сегодня пятница')
//     } else if (day == 6){
//         console.log('Сегодня суббота')
//     }
// }
// ---------------
// Более короткое решение

// function getWeekDay(){
//     let day = new Date().getDay()
//     let array = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
//     console.log(`Сегодня ${array[day]}`)
// }

// getWeekDay()

// -----------------------------
// Из даты в количество милисекунд 
// getTime()

// let date = new Date ('2023-5-10 10:00:00')
// console.log(date.getTime())
// 1683698400000

// -------------------------
// Сравнение дат 

// let date1 = new Date ('2023-5-10 10:00:00')
// let date2 = new Date ('2023-5-10 10:00:00')
// console.log(date1 == date2)     false

// console.log(date1.getTime() == date2.getTime())    
//  true


// ---------------------------
// Из даты в строку
// let date = new Date ('2023-5-10 20:00:00')

// console.log(date.toLocaleDateString())      5/10/2023
// console.log(date.toLocaleTimeString())      10:00:00 AM
// console.log(date.toLocaleString())          5/10/2023, 10:00:00 AM


// console.log(date.toLocaleString('ru-RU'))   10.05.2023, 10:00:00       ('it-IT' Локализация по коду страны)

// console.log(date.toLocaleString('it-IT',{month: 'long', hour: '2-digit'}))


// HW
// ----------------------

// Задан массив elems, передающий элемент HTML разметки. 
// Реализуйте очистку данных по примеру ниже:
// let elems = [
//     '<div><p class="text">Home</p></div>', 
//     '<div><p class="text">About</p></div>', 
//     '<div><p class="text">FAQ</p></div>', 
//     '<div><p class="text">Contacts</p></div>' 
// ] 
// Результат: ['Home','About','FAQ','Contacts']

// for (let elem in elems){
//     elems[elem] = elems[elem].slice(elems[elem].indexOf('>',elems[elem].indexOf('>')+1)+1, elems[elem].indexOf('</'))
// }

// console.log(elems)


// Напишите функцию initCap(array), которая получает массив с элементами 
// строкового значения и возвращает элементы с заглавной первой буквой по примеру: 

// let words = ['стакан','молоко','табуретка','вода'] 

// function initCap(array){
//     let newArray = []
//     for (let elem of array){
//         // newArray.push(elem.slice(0,1).toUpperCase() + elem.slice(1))
//         newArray.push(elem.replace(elem[0], elem[0].toUpperCase()))
//     }
//     return newArray
// }
// console.log(initCap(words), words)


// Результат: ['Cтакан','Молоко','Табуретка','Вода']