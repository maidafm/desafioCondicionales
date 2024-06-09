let boton = document.querySelector("#verify");
res = document.querySelector(".resultado");

boton.addEventListener('click', ()=> {
    let numero1 = parseInt(document.querySelector("#uno").value);
    let numero2 = parseInt(document.querySelector("#dos").value);
    let numero3 = parseInt(document.querySelector("#tres").value);
    
    let suma = numero1 + numero2 + numero3

    if(suma <= 10) {
        res.innerHTML = "Llevas " + suma + " stickers"
    }
    else if (suma > 10){
        res.innerHTML = "Llevas demasiados stickers"
    }
})

