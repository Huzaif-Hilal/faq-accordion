let buttons = Array.from(document.getElementsByClassName('button'));
let question = Array.from(document.getElementsByClassName('question'));
let paragraphs = Array.from(document.getElementsByClassName('paragraph'));
let design_img = document.querySelector('.design-img')
let width = window.innerWidth;

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", (e)=>{
       if(e.target.alt === "Minus")
       {
            e.target.src = ("/assets/images/icon-plus.svg")
            e.target.alt = "Plus";
            paragraphs[i].style.display = "none"
       } else {
            e.target.src = ("/assets/images/icon-minus.svg")
            e.target.alt = "Minus";
            paragraphs[i].style.display = "block"
       }
    })
}
for(let i=0; i<question.length; i++){
    question[i].addEventListener("click", (e)=>{
       if(e.target.alt === "Minus")
       {
            e.target.src = ("/assets/images/icon-plus.svg")
            e.target.alt = "Plus";
            paragraphs[i].style.display = "none"
       } else {
            e.target.src = ("/assets/images/icon-minus.svg")
            e.target.alt = "Minus";
            paragraphs[i].style.display = "block"
       }
    })
}
window.addEventListener("DOMContentLoaded", ()=>{
    width = window.innerWidth
})
if(width <= 414){
    design_img.src = "/assets/images/background-pattern-mobile.svg";
}else{
    design_img.src = "/assets/images/background-pattern-desktop.svg";
}