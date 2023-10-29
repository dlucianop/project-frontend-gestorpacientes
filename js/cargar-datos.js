document.getElementById('cargarArchivo').addEventListener('click', function () {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = ".csv";
    input.addEventListener('change', function () {
        var archivo = input.files[0];
        if (archivo) {
            var reader = new FileReader();
            reader.readAsBinaryString(archivo);

            reader.onload = function (e) {
                var contenido = e.target.result;
                var lineas = contenido.split('\n');
                for (var i = 1; i < lineas.length - 1; i++) {
                    var tabla = document.getElementById('tabla-pacientes');
                    var datos = lineas[i].split(',');
                    var paciente = obtenerdatos(datos);
                    var pacienteTr = construirTr(paciente);
                    //console.log(tabla);
                    tabla.appendChild(pacienteTr);
                    console.log("Datos cargados");
                    imcComprobation();
                }
                alert("Se agregaron nuevos datos");
                console.log(tabla);
            };
        }
    });
    input.click();
});

function obtenerdatos(datos) {
    var paciente = {
        nombre: datos[1],
        peso: datos[2],
        altura: datos[3],
        gordura: datos[4]
    }
    return paciente;
}