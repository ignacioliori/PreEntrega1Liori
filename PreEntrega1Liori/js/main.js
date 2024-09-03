// PREENTREGA

function calcularPrecioConImpuestos() {
    

    let nombre = document.getElementById("nom").value;
    let numero1 = parseInt(document.getElementById("num1").value);
    let impuesto = parseInt(document.getElementById("num2").value);
    const cajaResultado = document.getElementById("resultado");

    
        /* Chequea que los campos ingresados de precio e impuesto sean de tipo numerico */
        if (!isNaN(numero1) && !isNaN(impuesto)){

            /* Parseo a entero los valores de los campos para calcular el impuesto */
            const iva=(parseInt(numero1) * parseInt(impuesto))/100;
    
            /* sumo el impuesto al precio */
            const resultado = parseInt(numero1) + parseInt(iva);

          
            /* Llamo a la funcion agregarParrafo pasandole como parametro la cadena de texto que quiero imprimir en pantalla */
            agregarParrafo('El producto ' + nombre + ' tiene un costo de ' + resultado + ' con impuestos incluidos');
            console.log("El resultado es: " + resultado);
            
        
            /* Llamo a la funcion limpiarCampos luego de realizar el calculo para limpiar los inputs */
            limpiarCampos();

    
        }else {
            /* Si los campos no son de tipo numerico, muestro mensaje de ayuda al usuario */
            document.getElementById("resultado").innerHTML = "Por favor, ingrese números válidos.";
            console.log("Por favor, ingrese números válidos.");
        }
       
        
        
}

function agregarParrafo(texto) {
    /* Selecciono div cpara imprimir el resultado */
    let divResultado = document.getElementById("resultado");
    
    /* Creo un elemento de tipo parrafo */
    let nuevoParrafo = document.createElement('p');

    /* Asigno el texto al nuevo parrafo */
    nuevoParrafo.textContent = texto;

    /* Agrego el nuevo parrafo al div con id resultado */
    divResultado.appendChild(nuevoParrafo);
}

function limpiarCampos(){
    
    /* Selecciono todos los inputs */
    const input = document.querySelectorAll('input');

    /* Recorro todos los inputs y les cambio su value a vacio */
    for(let i = 0; i < input.length; i++) {
            input[i].value='';
        
           console.log('borro contenido inputs al aplretar boton calcular');
        }


}