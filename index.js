let body = document.querySelector('body')
let container = document.createElement('div')
container.classList.add('container')
body.append(container)
let headingdiv = document.createElement('div')
headingdiv.classList.add('heading')
container.append(headingdiv)
let h1 = document.createElement('h1')
h1.textContent = "🤩 Disco Grid 🤩 "
headingdiv.append(h1)

for (let i = 1;i<=500;i++){
    let box = document.createElement('div')
    box.classList.add('box')
    box.textContent = Math.floor(Math.random()*500)
    container.append(box)
}

document.addEventListener("mouseover",function(){
    let click = document.querySelectorAll('.box')
   
    for(let j=0; j<click.length;j++){
        click[j].textContent = Math.floor(Math.random()*500);
        click[j].style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16) 
        // click.style.backgroundColor = "blue"
    }
})

