let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function (event) {
  menu.classList.toggle('visible');
  event.preventDefault();
  
})

