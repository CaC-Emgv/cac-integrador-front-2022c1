function onClick() {
    let cantEntradas =  document.getElementById("cantidad").value;
    let tipoEntradas = document.getElementById("categoria").value;
    let precioFinal;

    console.log(tipoEntradas);
    console.log(cantEntradas);
    switch (tipoEntradas) {
        case "Estudiante":
            
            precioFinal = (200*cantEntradas) - ((200*cantEntradas)*80)/100;
            console.log(precioFinal);
            document.getElementById("outputprecio").innerHTML = precioFinal;
            break;
    
        case "Trainee":
        precioFinal = (200*cantEntradas) - ((200*cantEntradas)*50)/100;
        console.log(precioFinal);
        document.getElementById("outputprecio").innerHTML = precioFinal;
        break;

        case "Junior":
        precioFinal = (200*cantEntradas) - ((200*cantEntradas)*15)/100;
        console.log(precioFinal);
        document.getElementById("outputprecio").innerHTML = precioFinal;
        
        break;
        default:
            alert("Falta ingresar alguna opción, por favor, revise el formulario.")
            break;

        precioFinal = 0;
    }
    
}