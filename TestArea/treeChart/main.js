const grand = document.getElementById("head");

grand.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    createEntry("something", e.target.parentNode.nextElementSibling);
    console.log(e);
  }
  if (e.target.classList.contains("copy")) {
    let clip = e.target.parentNode.children[0].innerText;
    navigator.clipboard.writeText(clip);
  }
  if (e.target.classList.contains("delet")) {
    e.target.parentNode.parentNode.remove();
    console.log(e);
  }
  if (e.target.classList.contains("edit")) {
    console.log(e);
    let prevtxt = e.target.parentNode.children[4].innerText;
    e.target.parentNode.children[4].remove();
    let inp = document.createElement("input");
    inp.placeholder = prevtxt;
    e.target.parentNode.appendChild(inp);
    e.target.parentNode.children[4].focus();
  }
});

grand.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    console.log(e);
    let txt = e.target.value;
    let txtp = document.createElement("p");
    txtp.innerText = txt;
    e.target.parentNode.appendChild(txtp);
    e.target.remove();
  }
});

const createEntry = (textvalue, attachnode) => {
  const fdiv = document.createElement("div");
  const ediv = document.createElement("div");
  const cdiv = document.createElement("div");
  const btninline = `<button class="icon edit">L</button>
        <button class="icon copy">X</button>
        <button class="icon delet">9</button>
        <button class="icon add">&#xe035;</button><p>${textvalue}</p>`;

  ediv.innerHTML = btninline;
  ediv.classList.add("entry");
  cdiv.classList.add("children");
  fdiv.classList.add("fam");

  fdiv.appendChild(ediv);
  fdiv.appendChild(cdiv);
  attachnode.appendChild(fdiv);
};
