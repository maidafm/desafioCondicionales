let imagen = document.querySelector("img");
let hasBorder = false

imagen.addEventListener('click', ()=>{
    if(hasBorder == false) {
       imagen.style.border = "solid 2px red";
       hasBorder = true
    }
    else {
        imagen.style.border = "none";
        hasBorder = false
    }
})