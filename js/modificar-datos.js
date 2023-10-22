var btn_modificar = document.getElementById("modificar-paciente");
btn_modificar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.getElementById("form-modify");
    
    var numero = form.numero.value;
    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var validacion = verificarExistencia(numero, nombre);
    if (validacion == true) {
        alert("Datos del paciente " + nombre + " modificados existosamente.");
        modificarDatos(numero, nombre, peso, altura, gordura);
        getPaciente();
    } else {
        alert("No hay coincidencias, revise si existe el numero de paciente.");
    }
});

function verificarExistencia(numero, nombre) {
    var num_pacientes = document.getElementsByClassName("paciente");
    for (i = 1; i <= num_pacientes.length; i++){
        var paciente = document.getElementById(i);
        var numeroP = paciente.querySelector(".info-numero").textContent;
        //var nombreP = paciente.querySelector(".info-nombre").textContent;
        //Se queria tambien validar el nombre, pero no se podria modificar, asi que solo validare el numero de paciente

        if ((numeroP == numero) /*&& (nombreP == nombre)*/) {
            return true;
        } 
    }
    return false;
}

function modificarDatos(numero, nombre, peso, altura, gordura) {
    var paciente = document.getElementById(numero);
    paciente.querySelector(".info-nombre").textContent = nombre;
    paciente.querySelector(".info-peso").textContent = peso;
    paciente.querySelector(".info-altura").textContent = altura;
    paciente.querySelector(".info-gordura").textContent = gordura;
    paciente.setAttribute("class", "paciente");
}