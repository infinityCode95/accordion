"use strict";

const accordItems = document.querySelectorAll('.accordion__item');

 accordItems.forEach(accordItem => {

    accordItem.addEventListener('click', function() {
        if (this.classList.contains('item__active')) {
            this.classList.remove('item__active');
        } else {

            accordItems.forEach(accordItem => {
                accordItem.classList.remove('item__active')
            })

            this.classList.add('item__active');
        }
    })
})

