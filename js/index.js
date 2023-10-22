var num_pacientes = document.getElementsByClassName("paciente").length;
//document.querySelectorAll("paciente").length;

function imc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function validationPeso(peso) {
    // para signo OR se usa las teclas ALT+124
    return (peso > 0 && peso < 1000)
}

function validationAltura(altura) {
    return (altura > 0 && altura < 3)
}

function getPaciente() {
    for (i = 1; i <= num_pacientes; i++){
        var paciente = document.getElementById(i);
        var nombre = paciente.querySelector(".info-nombre").textContent;
        var peso = paciente.querySelector(".info-peso").textContent;
        var altura = paciente.querySelector(".info-altura").textContent;

        var verificacionPeso = validationPeso(parseFloat(peso));
        var verificacionAltura = validationAltura(parseFloat(altura));

        if (verificacionPeso == true && verificacionAltura) {
            var imcPaciente = imc(parseFloat(peso), parseFloat(altura));
            /*console.log(imcPaciente)*/
            paciente.querySelector(".info-imc").textContent = imcPaciente;
        } else {
            alert(nombre + " tiene un dato irreal, favor de ingresar informacion correcta.");
            //CSS - cambio de color
            paciente.classList.add("paciente-incorrecto");
            if (verificacionPeso == false) {
                paciente.querySelector(".info-imc").textContent = "Peso No Valido";
            }
            if (verificacionAltura == false) {
                paciente.querySelector(".info-imc").textContent = "Altura No Valida";
            }
        }
        
    }
}

var btn_adicionar = document.querySelector("#adicionar-paciente");
btn_adicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.getElementById("form-adicionar");
    
    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    pacienteTr = document.createElement("tr");
    nombreTd = document.createElement("td");
    alturaTd = document.createElement("td");
    pesoTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    pacienteTr.classList.add("paciente");

    nombreTd.textContent = nombre;
    nombreTd.classList.add("info-nombre");
    alturaTd.textContent = altura;
    alturaTd.classList.add("info-altura");
    pesoTd.textContent = peso;
    pesoTd.classList.add("info-peso");
    gorduraTd.textContent = gordura;
    gorduraTd.classList.add("info-gordura");

    gorduraTd.classList.add("info-imc");

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabla = document.getElementById("tabla-pacientes");
    console.log(pacienteTr)
    tabla.appendChild(pacienteTr);
});

getPaciente();