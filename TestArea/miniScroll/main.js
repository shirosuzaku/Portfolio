const bar = document.querySelector('.bar')
const thumb = document.querySelector('.thumb')
const chapterBox = document.querySelector('.chapterBox')
const holder = document.querySelector('.holder')

const doubleLarp = (OldMin,OldMax,NewMin,NewMax,OldValue) =>{
    let OldRange = (OldMax - OldMin)  
    let NewRange = (NewMax - NewMin)  
    let NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin
    if(NewValue > NewMax){return NewMax}
    if(NewValue < NewMin){return NewMin}
    return NewValue
}

let circleFree = false
thumb.addEventListener('mousedown',()=>{circleFree = true})
window.addEventListener('mouseup',()=>{circleFree = false})

let cont
window.addEventListener('mousemove',e=>{
    if(!circleFree){
        chapterBox.classList.remove('active')
        return
    }
    cont = bar.getClientRects()[0]
    // console.log(cont.top,cont.bottom)
    console.log(doubleLarp(cont.top,cont.bottom,0,100,e.clientY))
    
    thumb.style.top = `${doubleLarp(cont.top,cont.bottom,0,100,e.clientY)}%`
    chapterBox.classList.add('active')
    chapterBox.style.top = `${doubleLarp(cont.top,cont.bottom,0,100,e.clientY)}%`
    holder.style.top = `-${doubleLarp(cont.top,cont.bottom,0,500,e.clientY)}%`
    // document.body.scrollTo()
    window.scrollTo(0,doubleLarp(cont.top,cont.bottom,0,document.body.getClientRects()[0].height,e.clientY))
    
})
console.log(document.body.getClientRects()[0].height)