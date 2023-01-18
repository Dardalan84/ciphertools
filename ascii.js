




const encodeAscii = () => {
let codeArr = [];
var phrase = document.getElementById('text').value;

for(let i=0; i<phrase.length; i++){
    let code = phrase.charCodeAt(i);

    codeArr.push(code);
    
}

  document.getElementById('result').innerHTML = codeArr;
  resultAnimate();
};

// const decode = (phrase) => {
//     var phrase = document.getElementById('text').value;
//     var result = String.fromCharCode(...phrase);
//       document.getElementById('result').innerHTML = result;
//       resultAnimate();



// };

const decodeAscii = () => {
    var textArr = document.getElementById('text').value;

   var TA = textArr.split(',');
  
    var result = String.fromCharCode.apply(null, TA);

    document.getElementById('result').innerHTML = result;

 };
 
 