
const btn = document.getElementById('btn-toggle');

btn.addEventListener('click', function(){
 document.querySelector('.section-tutoriales').classList.toggle("active")
 document.getElementsByClassName('tutorial').classList.toggle("active")
 document.getElementById('footer').classList.toggle("active")
});