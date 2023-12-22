const container = document.querySelector('.container')
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
container.addEventListener('mousemove',e=>{
    // console.log(e.movementX)
    // if(tive(move) == tive(e.movementX) * -1){
    //     move = 0
    // }
    // move += e.movementX
    // if(move < -75){
    //     cauro.style.animationDirection = "normal"
    //     console.log('reversed')
    //     // console.log(cauro.style)
    // }
    // if(move > 75){
    //     cauro.style.animationDirection = "reverse"
    //     console.log('normal')
    // }
})


// cauro.style.animationPlayState = 'paused'
// cauro.style.animationPlayState = 'running'
