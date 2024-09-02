// you can write js here
console.log('exo-2');

let isTesting = true;

const myDate = new Date();

var week = "Nop, retourne au boulot !";
var weekEnd = "Ouiiiii, Go au lac !!!";
let weekDay = myDate.getDay();
let hour = myDate.getHours();




function IsWeekEnd() {
    if (isTesting) {
        weekDay = parseInt(prompt("Quel jour de la semaine somme nous ? (Chiffre entre 0 et 6"));
        console.log(weekDay);
    }
    if (weekDay === 6 || weekDay === 0 || (weekDay === 5 && hour > 17) || (weekDay === 0 && hour < 9)) {
        console.log("if Week-end: " + weekDay);
        console.log(weekEnd);
    } else {
        console.log("if semaine:" + weekDay);
        console.log(week);
    }
}

IsWeekEnd();