const btna = document.getElementById('all')
const btnr = document.getElementById('red')
const btng = document.getElementById('green')
const btnb = document.getElementById('blue')
const container = document.querySelector('.grid')

btna.addEventListener('click',()=>{
    container.dataset.filter = "All"
})
btnr.addEventListener('click',()=>{
    container.dataset.filter = "Red"
})
btng.addEventListener('click',()=>{
    container.dataset.filter = "Green"
})
btnb.addEventListener('click',()=>{
    container.dataset.filter = "Blue"
})