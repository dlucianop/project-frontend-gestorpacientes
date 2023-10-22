var num_pacientes = document.getElementsByClassName("paciente").length;

function imc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function getPaciente() {
    for (i = 1; i < num_pacientes+1; i++){
        var paciente = document.getElementById(i);
        var peso = paciente.querySelector(".info-peso").textContent;
        var altura = paciente.querySelector(".info-altura").textContent;

        var imcPaciente = imc(parseFloat(peso), parseFloat(altura))
        console.log(imcPaciente)

        paciente.querySelector(".info-imc").textContent = imcPaciente;
    }
}

console.log(getPaciente());