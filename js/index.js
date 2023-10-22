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

getPaciente();