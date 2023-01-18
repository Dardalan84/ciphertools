

function encode64() {

   
    const str = document.getElementById('text').value;

    const message = btoa(str);

    const result = [];

    result.push(message);

    document.getElementById('result').innerHTML = result;
   
    resultAnimate();
}



function decode64() {
    const strB = document.getElementById('text').value;

    const message = atob(strB);

    const resultB = [];

    resultB.push(message);

    document.getElementById('result').innerHTML = resultB;
    resultAnimate();
}