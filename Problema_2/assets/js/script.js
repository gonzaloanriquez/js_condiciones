let perro1=parseInt(document.getElementById("input_perro1").value);
let perro2=parseInt(document.getElementById("input_perro2").value);
let perro3=parseInt(document.getElementById("input_perro3").value);
let resultado_span = document.querySelector(".resultado-span");
let resultado = document.querySelector(".validar");

function suma(){

    var perro1=parseInt(document.getElementById("input_perro1").value);
    var perro2=parseInt(document.getElementById("input_perro2").value);
    var perro3=parseInt(document.getElementById("input_perro3").value);

    perro1 = isNaN(perro1) ? 0 : perro1;
    perro2 = isNaN(perro2) ? 0 : perro2;
    perro3 = isNaN(perro3) ? 0 : perro3;

    var suma=perro1+perro2+perro3;
    document.querySelector(".span").innerText=suma;
    if(suma>10){
        document.querySelector(".span").innerText=" demasiados "
    }

}