const grid = document.querySelector('.columns')

const changeColum = () => {
    // console.log(Math.round(grid.getBoundingClientRect().width / 200))
    // grid.style.columns = `${Math.round(grid.getBoundingClientRect().width / 200)}`
    grid.style.columns = `${Math.round((window.innerWidth * 0.8) / 120)}`
}
window.onresize = changeColum

const container = document.querySelector('.aboutContainer')
const cauro = document.querySelector('.cauro')

const tive = (x) => {
    if(x < 0){
        return -1;
    }else if(x > 0){
        return 1;
    }else{
        return 0;
    }
}

let move = 0
container.addEventListener('mouseenter',e=>{
    cauro.style.animationPlayState = 'paused'
})
container.addEventListener('mouseleave',e=>{
    cauro.style.animationPlayState = 'running'
})