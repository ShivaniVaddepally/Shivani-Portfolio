// Mobile menu
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
btn.addEventListener('click', ()=> menu.classList.toggle('show'));

// Back to top
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) toTop.classList.add('show');
  else toTop.classList.remove('show');
});
toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple contact form guard
function validateForm(){ return true; }
