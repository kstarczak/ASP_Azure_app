'use strict';

const themeBtn = document.querySelector('.btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    const currentTheme = document.body.className;
    if(currentTheme === 'light-theme') {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
} );