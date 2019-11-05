'use strict';

window.addEventListener('load', () => {
    
    /** Timers (setInterval - setTimeout) */
    
    let header = document.querySelector('h1');

    /** setInterval */
    function startSetInterval() {
        let time = setInterval(() => {
            console.log('setInterval exceeded');
            header.style.fontSize = header.style.fontSize !== '40px'
            ? header.style.fontSize = '40px' : '60px';
        }, 1000);
        return time;
    }

    let time = startSetInterval();

    let stop = document.querySelector('#stop');
    stop.addEventListener('click', () => {
        console.log('Stop setInterval exceeded');
        clearInterval(time);
    });

    let start = document.querySelector('#start');
    start.addEventListener('click', () => {
        console.log('Start setInterval exceeded');
        time = startSetInterval();
    })

    /** setTimeout */
    setTimeout(() => {
        console.log('setTimeout exceeded');
        document.querySelector('h1').style.color = 'mediumpurple'
    }, 2000);
});