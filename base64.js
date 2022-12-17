

function encode64() {

   
    const str = document.getElementById('text').value;

    const message = btoa(str);

    const result = [];

    result.push(message);

    document.getElementById('result').innerHTML = result;
    
    const borderEffect = [
        {width: '1200px'},
        {width: '500px'}
    ];

    const borderTiming = {
        duration: 400
    };

    const border = document.querySelector('.tool');
    // border.animate(borderEffect, borderTiming);
   
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