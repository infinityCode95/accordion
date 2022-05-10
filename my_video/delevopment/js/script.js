"use strict";

const btn = document.querySelector('.btn__switch');
const video = document.querySelector('.content__video-wrapper');

btn.addEventListener('click', function () {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        video.pause();  
    } else {
        btn.classList.remove('slide');
        video.play();          
    }
});

