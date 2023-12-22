const a1 = document.getElementById("a1")
const b1 = document.getElementById("b1")
const a3 = document.getElementById("a3")
const i3 = document.getElementById("i3")
const a4 = document.getElementById("a4")
const a5 = document.getElementById("a5")

const reset = (el) => {
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = null; 
}

b1.addEventListener('click',()=>{reset(a1)}) 

// THIRD
// let width = a3.innerText.length
// let x = 100 / width
// let step = 0
// let direction = 1
// let newWord = "word"
// setInterval(() => {
//     a3.style.width = `${x * (step - 1)}%`
//     console.log(x * step)
//     step += direction
//     if(step>width){
//         direction *= -1
//     }
//     if(step == 0){
//         direction *= -1
//         width = newWord.length
//         x = 100/width
//         a3.innerHTML= newWord
//     }
// }, 200);
i3.addEventListener('input',e=>{
    a3.innerHTML = `${e.target.value}`
})

// FORTH
window.addEventListener('scroll',e=>{
    if(a4.getClientRects()[0].bottom < window.innerHeight){
        a4.classList.add('active')
    }else{
        a4.classList.remove('active')
    }
})


// fifth
let delay = 0
let arr = a5.children
console.log(arr)
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.style.animationDelay = `${delay}ms`
    delay += 50
    console.log(delay)
}
// arr.forEach(s => {
// });