AOS.init({
  duration: 400,
  delay: 200,
});
let barsBtn = document.querySelector('#bars-btn');
let nabVar = document.querySelector('.nabvar');

barsBtn.addEventListener('click', () => {
  barsBtn.classList.toggle('fa-times');
  nabVar.classList.toggle('active');
});

window.onscroll = () => {
  nabVar.classList.remove('active');
}