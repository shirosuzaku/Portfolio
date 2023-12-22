const asp = document.querySelectorAll('.asp')
const section = document.querySelectorAll('.section')
const bgFilter = document.querySelector('.bgFilter')


const scrollIntoViewWithOffset = (selector, offset) => {
    window.scrollTo({
      behavior: 'smooth',
      top:
        selector.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    })
}

let offset = [0,0.15,0.3,0.45,0.6,0.75,0.9]

asp.forEach((btn,i)=>{
    btn.addEventListener('mouseenter',()=>{

        // console.log(section[i].getBoundingClientRect().height - 80)
        scrollIntoViewWithOffset(section[i],window.innerHeight*offset[i])
        bgFilter.style.top = `calc( ${window.innerHeight*offset[i]}px)`
        bgFilter.style.gap = `${section[i].getBoundingClientRect().height - 80}px`
        // section[i].scrollIntoView({behavior: 'smooth',block: 'start'})
    })
})