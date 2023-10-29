document.getElementById("tabla-pacientes").addEventListener("dblclick", function (event) {
    var fila = event.target.closest('tr');
    if (fila) {
        var confirmacion = confirm("¿Seguro que deseas eliminar esta fila?");
        if (confirmacion) {
            //console.log(fila);
            recorridoFila(fila);
            console.log("Fila eliminada")
            fila.classList.add('fade-out');
            setTimeout(function () {
                fila.remove();
            }, 300); 
        }
    }
});

function recorridoFila(filaEliminada) {
    var num_pacientes = (document.getElementsByClassName("paciente").length);
    var idFila = parseInt(filaEliminada.id);

    for (i = idFila+1; i <= num_pacientes; i++){
        var pacienteTr = document.getElementById(i);
        pacienteTr.setAttribute("id", i - 1);
        pacienteTr.querySelector(".info-numero").textContent = i - 1;
    }
}