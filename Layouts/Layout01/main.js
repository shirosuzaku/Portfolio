const foot = document.querySelector('footer')

const id = document.getElementById('info')
const man = document.getElementById('main')
const real = document.getElementById('related')
const grid = document.querySelector('.grid')

let x
window.addEventListener('scroll', ()=>{
    x = foot.getBoundingClientRect().bottom / window.innerHeight
    if(x < 1.27){
        if(!foot.classList.contains('active')){
            foot.classList.add('active')
        }
    }else{
        if(foot.classList.contains('active')){
            foot.classList.remove('active')
        }
    }
})

const changeColum = () => {
    grid.style.columns = `${Math.round(man.getBoundingClientRect().width / 200)}`
}
window.onresize = changeColum