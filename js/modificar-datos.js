var btn_modificar = document.getElementById("modificar-paciente");
btn_modificar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.getElementById("form-modify");
    var paciente = capturaDatos(form);

    var validacion = verificarExistencia(paciente.numero, paciente.nombre);
    if (validacion == true) {
        alert("Datos del paciente " + paciente.nombre + " modificados existosamente.");
        modificarDatos(paciente.numero, paciente.nombre, paciente.peso, paciente.altura, paciente.gordura);
        imcComprobation();
        console.log("Modificación de datos exitosa.");
    } else {
        console.log("Modificación de datos no realizada.");
        alert("No hay coincidencias, revise si existe el numero de paciente.");
    }
});

function capturaDatos(form) {
    var paciente = {
        numero: form.numero.value,
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
    }
    return paciente;
}

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