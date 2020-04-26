
//TASK #1
const cub = () => {
    let b = +prompt('Ввеіть число');
    alert(b * b * b);
}
//cub();

//TASK #2
const result = () => {
let first = +prompt('Введіть перше число');
let second = +prompt('Введіть друге число');
let third = +prompt('Введіть дільник');
 alert((first + second) / third);
}
//result();

function calendar () {
    let number = +prompt('Введіть число від 1 до 7');
    let day = ["Понеділок", "Вівторок", "Середа", "Четвер", "Пятниця", "Субота", "Неділя"];
    alert(day[number - 1]);
}
//calendar();
/*
function factorial() {
    let chisla = []
    for(let i = 0; i == 0; i--){
    let n = +prompt('введіть числа');
    chisla.push(n);
}
}
console.log(chisla);
*/

// let sec = 0;
// function time () {
//     let info = prompt('Введіть дату в форматі години:хвилини:секунди');
//     let arr = info.split(":");
//     if (arr.length !== 3) {
//         return 'Pls enter correct number';
//     }
//     for(let i = 0; i < arr.length; i++) {
//         if (i == 0) {
//             sec += +arr[i] * 3600;
//         } else if (i == 1 ) {
//             sec += +arr[i] * 60;
//         } else {
//             sec += +arr[i];
//         }
//     }

//     return sec;
// }
// let seconds = time();
// alert(seconds);
//TASK #4
// function factorial(x)
// {
// let z = 1;
// for (i=1; i <= x; i++) z = z * i;
// return (z);
// }
// let x = prompt("Введіт число, факторіал якого бажаєте знайти");
// let y = factorial(x);
// if (x >= 0) {alert("факторіал числа " + x + " рівний " + y );
// document.write (" факторіал числа " + x + " = " + y );}
// else
// if (x < 0) {
//     alert('Факторіала для відємних чисел не існує ');
// }
/*
let time = +prompt('Введіть час в секундах');
let hour = 0;
let minute = 0;
let sec = 0;
if(time > 24 * 3600) {
   alert ('Більше одного дня');
} else {
hour = Math.floor(time / 3600);
minute = Math.floor(time % 3600 / 60);
sec = time % 60;
alert(`${hour}:${minute}:${sec}`);
}
*/

