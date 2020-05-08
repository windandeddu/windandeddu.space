let page = document.querySelector('.page');
let themeButton1 = document.querySelector('.theme-button1');
let themeButton2 = document.querySelector('.theme-button2');

themeButton1.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};

themeButton2.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};

