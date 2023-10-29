var buscador = document.getElementById("buscador");
var tabla = document.getElementById("tabla-pacientes");
var filas = tabla.getElementsByTagName("tr");

buscador.addEventListener("input", function () {
    var textoBuscado = buscador.value.toLowerCase();
    for (var i = 0; i < filas.length; i++) {
        var fila = filas[i];
        var celdas = fila.getElementsByTagName("td");
        
        var coincide = false;

        for (var j = 0; j < celdas.length; j++) {
            var celda = celdas[j];
            var contenidoCelda = celdas[j].textContent.toLowerCase();
            if (contenidoCelda.includes(textoBuscado)) {
                coincide = true;
                celda.classList.add("td-coincidencia");
            } else {
                celda.classList.remove("td-coincidencia");
            }
        }

        if (coincide) {
            fila.style.display = "table-row";
        } else {
            fila.style.display = "none";
        }

        if (textoBuscado === "") {
            for (var i = 0; i < filas.length; i++) {
                var celdas = filas[i].getElementsByTagName("td");
                for (var j = 0; j < celdas.length; j++) {
                    celdas[j].classList.remove("td-coincidencia");
                }
            }
        }
    }
});