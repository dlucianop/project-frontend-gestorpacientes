var btn_adicionar = document.querySelector("#adicionar-paciente");

btn_adicionar.addEventListener("click", function (event) {
    event.preventDefault();
    
    var form = document.getElementById("form-adicionar");
    var paciente = capturarDatosPaciente(form);
    var pacienteTr = construirTr(paciente);

    var tabla = document.getElementById("tabla-pacientes");
    tabla.appendChild(pacienteTr);

    //console.log(tabla);

    alert("Se agrego un nuevo paciente");
    console.log("Se agrego datos de un paciente");
    imcComprobation();
    form.reset();
});

function capturarDatosPaciente(form) {
    //capturar datos del formulario
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }
    return paciente;
}

function construirTr(paciente) {
    var num_pacientes = document.getElementsByClassName("paciente");

    //crear el td
    var pacienteTr = document.createElement("tr");

    //asignar la clase a Tr y modificar su id
    pacienteTr.classList.add("paciente");
    pacienteTr.setAttribute("id", num_pacientes.length + 1);

    //asignacion al tr de los td y a la tabla el tr
    pacienteTr.appendChild(construirTd(num_pacientes.length + 1, "info-numero"));
    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(0, "info-imc"));

    return pacienteTr;
}

function construirTd(dato, clase) {
    //crear los td, asignar su clase y agregar su contenido
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}