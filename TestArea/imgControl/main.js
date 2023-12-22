const cir = document.querySelector('.circle')
const container = document.querySelector('.container')
const layer1 = document.querySelector('.layer1')
const layer2 = document.querySelector('.layer2')
const line = document.querySelector('.line')

let circleFree = false
cir.addEventListener('mousedown',()=>{
    circleFree = true
    console.log('donw')
})
window.addEventListener('mouseup',()=>{
    if(circleFree){
        circleFree = false
    }
    console.log('up')
})

let percent

window.addEventListener('mousemove',(e)=>{
    if(!circleFree){
        return
    }
    let cont = container.getClientRects()[0]
    
    if(e.x < cont.left){
        return
    }
    if(e.x > cont.right){
        return
    }
    // console.log(e.x, cont.left,cont.width)
    percent = ((e.x - cont.left) / cont.width) * 100
    console.log(percent)
    line.style.left = `calc(${percent}% - 2px)`
    layer1.style.clipPath = `polygon(0% 0%, ${percent}% 0%, ${percent}% 100%,0 100%)`
    layer2.style.clipPath = `polygon(100% 0%, ${percent}% 0%, ${percent}% 100%,100% 100%)`

})
