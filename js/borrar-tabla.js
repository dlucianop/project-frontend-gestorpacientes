document.getElementById('borrarTabla').addEventListener('click', function () {
    var filas = document.getElementsByClassName("paciente");
    if (filas.length !== 0) {
        for (var i = filas.length - 1; i >= 0; i--) {
            var fila = filas[i];
            fila.remove();
        }
        alert("Tabla borrada");
        console.log(filas);
    } else {
        alert("No hay datos por borrar");
    }
});