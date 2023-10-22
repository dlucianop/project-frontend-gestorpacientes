var btn_adicionar = document.querySelector("#adicionar-paciente");
btn_adicionar.addEventListener("click", function (event) {
    var num_pacientes = document.getElementsByClassName("paciente");
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
    pacienteTr.setAttribute("id", num_pacientes.length+1);

    nombreTd.textContent = nombre;
    nombreTd.classList.add("info-nombre");
    alturaTd.textContent = altura;
    alturaTd.classList.add("info-altura");
    pesoTd.textContent = peso;
    pesoTd.classList.add("info-peso");
    gorduraTd.textContent = gordura;
    gorduraTd.classList.add("info-gordura");

    imcTd.classList.add("info-imc");

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabla = document.getElementById("tabla-pacientes");
    //console.log(pacienteTr)
    tabla.appendChild(pacienteTr);

    getPaciente();
});