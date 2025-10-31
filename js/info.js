const start = document.querySelector('.click');
const lessons = document.querySelector('.lessons');
const up = document.querySelector('.up');
const down = document.querySelector('.down');

start.addEventListener('click', function () {

  lessons.classList.toggle('lessons')
  lessons.classList.toggle("videos");

    // up.style.display = 'none'
    // down.style.display = 'block'



});
start.addEventListener('click', function () {
    up.classList.toggle('up');
  up.classList.toggle('arrow-up');

  down.classList.toggle('down');
  down.classList.toggle('arrow-down');
})