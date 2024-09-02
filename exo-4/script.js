// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
let deleteLast = secretMessage.pop();
let addWorld = secretMessage.push('to', 'program');
let pos = secretMessage.indexOf("easily");
secretMessage[6] = 'right';
let deleteFirst = secretMessage.shift();
let newFirst = secretMessage.unshift('Programming');
let removedItem = secretMessage.splice(5, 5, 'know');
console.log(secretMessage.join(' '));