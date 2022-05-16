function onClickResumen() {
    let cantEntradas = document.getElementById("cantidad").value;
    let tipoEntradas = document.getElementById("categoria").value;
    let precioFinal;




    switch (tipoEntradas) {
        case "Estudiante":

            precioFinal = (200 * cantEntradas) - ((200 * cantEntradas) * 80) / 100;
            document.getElementById("outputprecio").innerHTML = precioFinal;
            break;

        case "Trainee":
            precioFinal = (200 * cantEntradas) - ((200 * cantEntradas) * 50) / 100;
            document.getElementById("outputprecio").innerHTML = precioFinal;
            break;

        case "Junior":
            precioFinal = (200 * cantEntradas) - ((200 * cantEntradas) * 15) / 100;
            document.getElementById("outputprecio").innerHTML = precioFinal;

            break;
        default:
            alert("Falta ingresar alguna opción, por favor, revise el formulario.");
            break;

            precioFinal = 0;
    }

} 


function onClickBorrar() {

    cantEntradas = 0;
    tipoEntradas = "";
    precioFinal = 0;
    document.getElementById("outputprecio").innerHTML = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("nombre").value  = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    
}