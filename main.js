const nextbtns = document.querySelectorAll('.next')
const prevbtns = document.querySelectorAll('.prev')
const ce = document.querySelectorAll('.caurocelElement')

let translate = [0,0,0,0]
let tmax = [1,1,1,1]
let width = 1

const adjust = () => {
    let w = nextbtns[0].parentElement.parentElement.getClientRects()[0].width
    width = Math.floor(w / (nextbtns[0].nextElementSibling.children[0].getClientRects()[0].width + 40))
    nextbtns.forEach((btn,i)=>{
        tmax[i] = btn.nextElementSibling.children.length
        if(tmax[i] > width){
            btn.dataset.active = "true"
        }else{
            btn.dataset.active = "false"
        }
    })
}
adjust()

nextbtns.forEach((btn,i)=>{
    tmax[i] = btn.nextElementSibling.children.length
    if(tmax[i] > width){
        btn.dataset.active = "true"
    }else{
        btn.dataset.active = "false"
    }
})
prevbtns.forEach(btn=>{
    btn.dataset.active = "false"
})
nextbtns.forEach((btn,i)=>{btn.addEventListener('click',e=>{
    let chold = e.target.nextElementSibling
    let w = chold.children[0].getClientRects()[0].width
    if(chold.children.length == 1){
        return
    }
    console.log("M")
    
    if(chold.children.length - 1 != translate[i]){
        console.log("NEXT")
        console.log("BEFORE",translate)
        translate[i] += 1
        console.log("AFTER",translate)
        chold.style.transform = `translateX(-${(w + 40 )* translate[i] }px)`
    }
    if(chold.children.length - 1 == translate[i]){
        btn.dataset.active = "false"
    }
    if(translate[i] > 0){
        e.target.previousElementSibling.dataset.active = "true"
    }
})})

prevbtns.forEach((btn,i)=>{btn.addEventListener('click',e=>{
    let chold = e.target.nextElementSibling.nextElementSibling
    let w = chold.children[0].getClientRects()[0].width
    if(translate[i] > 0){
        console.log("PREV")
        console.log("BEFORE",translate)
        translate[i] -= 1
        console.log("AFTER",translate)
        chold.style.transform = `translateX(-${(w + 40 )* (translate[i])}px)`
    }
    if(chold.children.length - 1 != translate[i]){
        e.target.nextElementSibling.dataset.active = "true"
    }
    if(translate[i] == 0){
        btn.dataset.active = "false"
    }
})})

ce.forEach(ele=> ele.addEventListener('click',(e)=>{
    if(e.target.dataset.link){
        // console.log(window.location)
        // console.log(`${window.location.origin}${e.target.dataset.link}`)
        window.location.href = `${window.location.origin}${e.target.dataset.link}`
    }else if(e.target.parentElement.dataset.link){
        // console.log(`${window.location.href}${e.target.parentElement.dataset.link}`)
        window.location.href = `${window.location.origin}${e.target.parentElement.dataset.link}`
    }
}))


window.onresize = adjust
/*
file:///C:/Users/samat/OneDrive/Documents/GitHub/Portfolio/Layouts/Layout01/index.html
file:///C:/Users/samat/OneDrive/Documents/GitHub/Portfolio/index.html/Layouts/Layout01/index.html
*/