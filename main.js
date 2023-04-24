let remeraOver = 3000; alert("La remera Overzise tiene un valor de $3000");
let pantalon = 5000; alert("el pantalon tiene un valor de $5000");
let agregarAlCarrito = parseInt(prompt("Agregar al carrito 1= remera Overzise, 2= pantalon 3= ambos"))
let resultado = remeraOver + pantalon;
let precioActual = resultado;
let descuento = 10;

for(prendasDisponibles = 5 ; prendasDisponibles >= 0 ; prendasDisponibles--){  
    document.write("Quedan"+ " " + prendasDisponibles + " " + "prendas disponibles" + "<br>");
};

if(agregarAlCarrito === 1){
    alert("Total a pagar $3000")
}else if(agregarAlCarrito === 2){
    alert("Total a pagar $5000")
}else{
    let resultado = remeraOver + pantalon;
    alert(`su coste final es de $${resultado}`)
};

const validarCliente = (posicion)=>{
    if(posicion === 1){
        alert("Por ser la primer persona en comprar tenes un descuento disponible");
    }else{
        alert("no hay descuentos disponibles");
    }if (agregarAlCarrito === 1 && posicion === 1){
        let precioFinal = remeraOver - descuento;
        alert(`coste final es de $${precioFinal}`)
    }else if(agregarAlCarrito === 2 && posicion === 1){
        let precioFinal = pantalon - descuento;
        alert(`coste final $${precioFinal}`)
    }else if(agregarAlCarrito === 3 && posicion === 1){
        precioFinal = resultado - descuento;
        alert(`coste final es de ${precioFinal}`)
    }else{
        alert(`no hay descuentos disponible`)
    }
}; 
validarCliente(1);

// no va
 // if(prendasDisponibles === 0){
    //    alert("No tenemos esta prenda disponibles");
    // //    document.write(prendasDisponibles + "<br>")
    // }else{
    //     alert("Tenemos esta prenda disponible");
    //     document.write(prendasDisponibles )
    //     break
    // }
// if(prendasDisponibles === 0){
    //     alert("No tenemos esta prenda disponibles");
    //  }else{
    //      alert("Tenemos esta prenda disponible");
    //  } 





