// Отсортируйте массив в рандомном порядке
// Math.random()
// let array = [1,2,3,4,5,6,7,8,9,10]

// let result = array.sort(()=> 0.5 - Math.random())
// let result = array.sort(()=> Math.random() - Math.random())

// console.log(result)

// currentElem secondElem


// currentElem > secondElem         1 (положительное число)
// currentElem < secondElem         -1 (отрицательное число)
// currentElem == secondElem        0  (ноль)

// ------------------------------
// Метод find() - возвращает значение ЭЛЕМЕНТА массива по условию колбека

// let users = [
//     {id: 1, name: 'Alex', salary: 1000},
//     {id: 2, name: 'Steven', salary: 5000},
//     {id: 3, name: 'Neena', salary: 450},
//     {id: 4, name: 'Wolyam', salary: 10000},
//     {id: 5, name: 'Jonh', salary: 799},
//     {id: 6, name: 'Clark', salary: 2222},
// ]

// let result1 = users.find(value => value.salary < 1000) 
// // let result2 = users.filter(value => value.salary < 1000) 
// console.log(result1)
// // console.log(result2)

// // В случае, если по условию метод find не найдет элемент массива - он вернет undefined
// let result = users.find(value => value.id == 10) 
// console.log(result)

// -------
// Пример поиска по индексу 
// let result = users.find((value, index) => index > 1 && value.salary < 5000) 
// console.log(result)


// ---------------------------
// Метод findIndex() - возвращает индекс ЭЛЕМЕНТА массива по условию колбека

// let users = [
//     {id: 1, name: 'Alex', salary: 1000},
//     {id: 2, name: 'Steven', salary: 5000},
//     {id: 3, name: 'Neena', salary: 450},
//     {id: 4, name: 'Wolyam', salary: 10000},
//     {id: 5, name: 'Jonh', salary: 799},
//     {id: 6, name: 'Clark', salary: 2222},
// ]

// let result = users.findIndex(value => value.salary > 5000) 
// console.log(result)

// -----
// В случае, если по условию метод findIndex не найдет элемент массива - он вернет -1
// let result = users.findIndex((value) => value.id == 5000) 
// console.log(result)


// ----------------------------
// Задача 1
// Найдите пользователся, id которого представляется в виде четного числа, а возраст менее 33

// let users = [
//     {id: 1, name: 'Alex', lastname: 'Folon', age: 24},
//     {id: 2, name: 'Willyam', lastname: 'Maxwell', age: 33},
//     {id: 3, name: 'Steven', lastname: 'Fersters', age: 35},
//     {id: 4, name: 'Neena', lastname: 'Maxwell', age: 31},
// ]


// -----------------------------
// Метод some() и every()

// Метод some() определяет существует ли хотябы 1 элемент, который соответствует колбек условию
// ! возвращает булевый тип

// Пример:
// let users = [
//     {id: 1, name: 'Alex', salary: 1000},
//     {id: 2, name: 'Steven', salary: 5000},
//     {id: 3, name: 'Neena', salary: 450},
//     {id: 4, name: 'Wolyam', salary: 10000},
//     {id: 5, name: 'Jonh', salary: 799},
//     {id: 6, name: 'Clark', salary: 2222},
// ]

// let result = users.some((value) => value.id == 2)                    - true
// let result = users.some((value) => value.salary > 5000)              - true
// let result = users.some((value) => value.id == 100)                  - false

// console.log(result)


// ---------------------
// Метод every() определяет все ли элементы удовлетворяют условию колбека
// ! возвращает булевый тип

// let users = [
//     {id: 1, name: 'Alex', salary: 1000},
//     {id: 2, name: 'Steven', salary: 5000},
//     {id: 3, name: 'Neena', salary: 450},
//     {id: 4, name: 'Wolyam', salary: 10000},
//     {id: 5, name: 'Jonh', salary: 799},
//     {id: 6, name: 'Clark', salary: 2222},
// ]

// let result = users.every((value) => value.id > 0)            - true
// let result = users.every((value) => value.id == 1)           - false

// console.log(result)

// ---------
// Задача 2

// Решите следующие задачи: 
// 1) Определите наличие одного элемента, чей квадратный корень цены будет вычисляться без остатка. Выведите булевый тип
// 2) Определите, у всех ли элементов массива сво-во count отличимо от 0

// let data = [
//     {id : 2, goods: 'Самокат', count: 1, price: 3500},
//     {id : 3, goods: 'Ролики', count: 15, price: 6000},
//     {id : 5, goods: 'Скейтборд', count: 8, price: 999},
//     {id : 4, goods: 'Ракетки', count: 30, price: 100},
//     {id : 1, goods: 'Велосипед', count: 5, price: 2000}
// ]

// 1)
// console.log(data.some(value => Math.sqrt(value.price) % 1 == 0))
// Второе решение (большое, не актуальное)
// console.log(data.some(value => Math.sqrt(value.price) == Math.floor(Math.sqrt(value.price))))

// 2)
// console.log(data.every(value => value.count != 0))


// -----------------------------
// Повторить метод some(), сформировав функцию some2(array, callback)
// Функция должна вернуть булевый тип

let data = [
    {id : 2, goods: 'Самокат', count: 1, price: 3500},
    {id : 3, goods: 'Ролики', count: 15, price: 6000},
    {id : 5, goods: 'Скейтборд', count: 8, price: 999},
    {id : 4, goods: 'Ракетки', count: 30, price: 100},
    {id : 1, goods: 'Велосипед', count: 5, price: 2000}
]

function some2(array, callback){
    for (let elem of array){
        if (callback(elem)){
            return true
        }
    }
    return false
}

// // // Должен вернуть true
// console.log(some2(data, (elem) => elem.price > 1000))
// // // Должен вернуть false
// console.log(some2(data, (elem) => elem.id == 10))


console.log(some2(data, (elem) => console.log(elem)))