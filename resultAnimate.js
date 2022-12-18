const resultAnimate = () => {

    const resultEffect=[
        {opacity: '0.0'},
        {opacity: '0.10'},
        {opacity: '0.2'},
        {opacity:'0.15'},
        {opacity:'0.45'},
        {opacity:'0.65'},
        {opacity:'0.85'}
    ];

    const resultTiming = {
        duration: 3000
    };
    const res = document.getElementById('result');
    res.animate(resultEffect, resultTiming);

}