
const alphabet = [
'A','B','C','D','E','F',
'G','H','I','J','K','L',
'M','N','O','P','Q','R',
'S','T','U','V','W','X',
'Y','Z'
];


function ceasarCypherEncrypt(){
const str = document.getElementById('text').value.split(' ').join('');
const text = str.toLowerCase();
const shift = Number(document.getElementById('shift').value);

let result = [];

for(let i = 0; i < text.length; i++) {
let code = text.charCodeAt(i) + shift
while (code>122){
code = (code - 122) + 96
}
result.push(String.fromCharCode(code))
}
document.getElementById('result').innerHTML = result.join('');

resultAnimate();
}


function ceasarCypherDecrypt(){
const str = document.getElementById('text').value.split(' ').join('');
const text = str.toLowerCase();
const shift = Number(document.getElementById('shift').value);

let result = [];
let code;

for(let i = 0; i < text.length; i++) {




code = text.charCodeAt(i) - shift
while (code>122){
code = (code - 122) + 96
}
while (code<96) {
code = (code + 122) - 96
}
result.push(String.fromCharCode(code))

}
document.getElementById('result').innerHTML = result.join('');
resultAnimate();
}


