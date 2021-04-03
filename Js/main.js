
const btn = document.getElementById('btn-toggle')

btn.addEventListener('click', function(){
 document.getElementById('section-principal-1').classList.toggle("active")
 document.getElementById('section-secundario').classList.toggle("active")
 document.getElementById('footer').classList.toggle("active")
});