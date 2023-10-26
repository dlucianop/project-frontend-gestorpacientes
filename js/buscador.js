var buscador = document.getElementById("buscador");
var tabla = document.getElementById("tabla-pacientes");
var filas = tabla.getElementsByTagName("tr");

    buscador.addEventListener("input", function() {
        var textoBuscado = buscador.value.toLowerCase();

        for (var i = 0; i < filas.length; i++) {
            var fila = filas[i];
            var contenidoFila = fila.textContent.toLowerCase();

            if (contenidoFila.includes(textoBuscado)) {
                //ver si hay coincidencias o no
                fila.style.display = "table-row";
            } else {
                fila.style.display = "none";
            }
        }
    });