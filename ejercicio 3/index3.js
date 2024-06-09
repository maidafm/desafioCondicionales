let verificar = document.querySelector("#submit")

verificar.addEventListener('click', ()=> {
    let numero1 = parseInt(document.querySelector("#num1").value)
    let numero2 = parseInt(document.querySelector("#num2").value)
    let numero3 = parseInt(document.querySelector("#num3").value)
    res = document.querySelector(".resultado")

    if(numero1 == 9 && numero2 == 1 && numero3 == 1) {
        res.innerHTML = "password 1 correcto"
    }
    else if (numero1 == 7 && numero2 == 1 && numero3 == 4){
        res.innerHTML = "password 2 es correcto"
    }
    else{
        res.innerHTML = "password incorrecto"
    }
    
})