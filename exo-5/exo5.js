// you can write js here
console.log('exo-5');
input = prompt("Quel phrase voulez vous traduire en baleine?");
const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];


// 1ere solution
let resultArray = [];
for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
    if (vowels.indexOf(input[i]) !== -1) {
        resultArray.push(input[i]);
    }
}
console.log(resultArray.join('').toUpperCase())

// 2eme solution
let resultArray2 = [];
for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray2.push(input[i]);
        }
    }
}
console.log(resultArray2.join('').toUpperCase())