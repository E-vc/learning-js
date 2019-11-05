'use strict';

/** BOM - Browser Object Model */
function bom() {
    console.log(`Window ${window.innerHeight} ${window.innerWidth}`);
    console.log(`Screen ${screen.width} ${screen.height}`);
    console.log('Location', window.location);
}

bom();

function redirectTo(url) {
    window.location.href = url;
}

function openWindow(url) {
    window.open(url, '', 'width=400, height=400');
}