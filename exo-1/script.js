// you can write js here
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
let celsius = kelvins - 273; /* prends la valeur de kelvins et lui retire 273 */
let fahrenheits = Math.floor(celsius * (9/5) + 32) /* permet d'obtenir un nombre entier */
console.log('La température en celsus est : ' + kelvins);
console.log('La température en celsus est : ' + celsius);
console.log('La température en fahrenheits est : ' + fahrenheits);
