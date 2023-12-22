const accountlist = document.querySelector(".listbox")
const copy = document.querySelectorAll('.copy')
const dispAcc = document.getElementById('acc')
const dispName = document.getElementById('name')
const dispPass = document.getElementById('pss')

const addbtn = document.getElementById('incert')

let data = [
    {
        "account":"Google",
        "userName":"Sample Name",
        "password":"Password1234",
        "badge":"⚫️"
    }
]
console.log(window.localStorage.pass02)
if (window.localStorage.getItem('pass02') != null){
    data = JSON.parse(window.localStorage.getItem('pass02'))
    console.log(data)
    data.forEach((element,index) => {
        createData(element.account,element.userName,element.password,element.badge,index)
    });
}else{
    alert('data is saved on the browser, it does not transfer from browser to browser')
}
console.log(data)
accountlist.childNodes.forEach( (account,i) => {
    account.addEventListener('click',e=>{
        setDetails(e.target.id)
    })
});

accountlist.addEventListener('click',e=>{
    // Delete
    if(e.target.id != "delete"){
        return
    }
    console.log(e.target.parentElement.id)
    let x = e.target.parentElement.id * 1
    data.splice( x , 1)
    window.localStorage.setItem('pass02',JSON.stringify(data))
    location.reload()
    // if(confirm("delete currunt accoutn") == true){
    //     // console.log(e.path[1].id)
    //     let x = i - 1 
    // }
})



addbtn.addEventListener('click',(e)=>{
    
    if(e.target.parentElement.children[0].value ==""){
        e.target.parentElement.children[0].focus()
        return
    }
    if(e.target.parentElement.children[1].value ==""){
        e.target.parentElement.children[1].focus()
        return
    }
    if(e.target.parentElement.children[2].value ==""){
        e.target.parentElement.children[2].focus()
        return
    }
    incertData(
        e.target.parentElement.children[0].value,
        e.target.parentElement.children[1].value,
        e.target.parentElement.children[2].value,
        e.target.parentElement.children[3].value,
    )
    location.reload()
})

function setDetails(code) {
    let detaildata = data[code]
    dispAcc.innerHTML = detaildata.account
    dispName.innerHTML = detaildata.userName
    dispPass.innerHTML = detaildata.password

}

function incertData(acc,names,password,clr) {
    let temp = document.createElement('div')
    temp.classList.add('accounts')
    temp.id = data.length
    temp.innerHTML = `
    <p>${clr}</p>
    <p>${acc}</p>
    <button id="delete">✖️</button>
    `

    data.push({
        account: acc,
        userName: names,
        password: password,
        badge: clr
    })
    accountlist.appendChild(temp)

    window.localStorage.setItem('pass02',JSON.stringify(data))
    console.log(data)
}

function createData(acc,names,password,clr,i) {
    let temp = document.createElement('div')
    temp.classList.add('accounts')
    temp.id = i
    temp.innerHTML = `
    <p>${clr}</p>
    <p>${acc}</p>
    <button id="delete">✖️</button>
    `
    accountlist.appendChild(temp)
}