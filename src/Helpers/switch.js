import React from 'react'

const Switch = (elementID) => {
    var ele = document.getElementById(elementID);
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++){
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}

export default Switch
