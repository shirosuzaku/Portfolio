const mod = document.querySelector('.module')
const clo = document.getElementById('close')
const ope = document.getElementById('open')


clo.addEventListener('click',()=>{mod.classList.remove('active')})
ope.addEventListener('click',()=>{mod.classList.add('active')})