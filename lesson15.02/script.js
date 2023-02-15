// Событие в JS

// let btn = document.querySelector('.btn_elem');

// function handle() {
//    console.log(101)
//    btn.removeEventListener('click', handle);
//}
 
// btn.onclick = handle 

//tn.addEventListener('click', handle);
// btn.addEventListener('click', () => console.log('test'));

// btn.removeEventListener('click', handle);
// remove для функции handle не сработает, т.к. это разные функции
// btn.removeEventListener('click', () => console.log('test'));
// remove для стрелочной функции работать не будет, т.к. у функции совершенно другой адрес в памяти по сравнению с указанной в addEventListener

// let btn = document.querySelector('.btn_elem');

// document.body.addEventListener('dbclick', () => console.log('dbclick'));
// document.body.addEventListener('click', () => console.log('click'));
// document.body.addEventListener('mousedown', () => console.log('mousedown'));
// document.body.addEventListener('mouseup', () => console.log('mouseup'));

// document.body.addEventListener('mouseout', () => console.log('mouseout'));
// document.body.addEventListener('mouseover', () => console.log('mousemover'));

// let btn = document.querySelector('.btn_elem');
// document.body.addEventListener('keydown', () => console.log(keydown));

// Задание: по нажатию на кнопку, необходимо заменить цвет с brown на darkgreen.
// При воторном нажатии необходимо вернуть старый цвет (brown)


/* let container = document.querySelector(".container");
let button = document.querySelector(".btn_elem");

button.addEventListener("click", function() {
  if (container.style.backgroundColor === "brown") {
    container.style.backgroundColor = "darkgreen";
  } else {
    container.style.backgroundColor = "brown";
  }
}); */

/* const container = document.querySelector('.container');
const button = document.querySelector('.btn_elem');

button.addEventListener('click', () => {
  container.style.backgroundColor = container.style.backgroundColor === 'brown' ? 'darkgreen' : 'brown';
}); */

/* let btn = document.querySelector('.btn_elem')

let themeMode = true

function clickHandler(){
    themeMode = !themeMode
    div.style.backgroundColor = (themeMode) ? 'brown' : 'darkgreen'
}

btn.addEventListener('click', clickHandler) */

// Объект Event (события)

/*  document.body.addEventListener('keydown', (event) => {
    console.log(event.key , 'key');
    console.log(event.code , 'code');
    console.log(event.keyCode , 'keyCode');
}); */
 
// Задание. Реализуте горячую клавишу SHIFT(любой) + кнопка L (любой регистр), которая 
// заменит текстовое сво-во заголовка на дату, которая отражает текущий момент времени (HH:MM:SS)

/* document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.key.toLowerCase() === "l") {
    document.title = new Date().toLocaleTimeString();
  }
}); */

let h_elem = document.querySelector('.h_text');

document.body.addEventListener('keydown', (event) => {
  if (event.code === 'KeyL' && event.shiftKey) {
    
    h_elem.textContent = new Date().toLocaleTimeString();
  }