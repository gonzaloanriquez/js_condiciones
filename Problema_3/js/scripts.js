function sumar() {
    var valorUno = document.getElementById("valor1").value;
    var valorDos = document.getElementById("valor2").value;
    var valorTres = document.getElementById("valor3").value;
    
    var pass = valorUno + valorDos + valorTres;
    if(pass == 911){
        document.getElementById("validacion").innerText = "password 1 correcto"
    }
    else if(pass == 714){
        document.getElementById("validacion").innerText = "password 2 correcto"
    }
    else{
        document.getElementById("validacion").innerText = "password incorrecto"
    }
  }