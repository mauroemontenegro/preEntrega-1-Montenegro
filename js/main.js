const productos = [
    { id: 1, nombre: "remera oversize", precio: 5999 },
    { id: 2, nombre: "musculosa cerrada", precio: 4299 },
    { id: 3, nombre: "musculosa abierta", precio: 4299 },
    { id: 4, nombre: "remera slim fit", precio: 4499 },
];
let carrito = [];

let disponibles = productos.map(
    (producto) => producto.nombre + "  ");
    alert(`Productos Disponibles
    ${disponibles}`);
let nombre = prompt("ingrese nombre del producto"); {
    for (const producto of productos) {
            if (producto.nombre === nombre) {
                let mensaje = `
                  id:${producto.id} 
                  nombre:${producto.nombre}
                  precio:$${producto.precio}
                  `;
                alert(mensaje);
            }
        };
};
let precio = 0;
if(nombre === "remera oversize" || nombre === "musculosa cerrada" || nombre === "musculosa abierta" || nombre === "remera slim fit"){  
    switch(nombre){
            case "remera oversize":
            precio = 5999
            break;
            case "musculosa cerrada":
            precio = 4299
            break;
            case "musculosa abierta":
            precio = 4299
            break;
            case "remera slim fit":
            precio = 4499
            break;
            default:
                break;
        }
        let unidades = parseInt((prompt("Cuantas Unidades solicita")))
        carrito.push({nombre,unidades,precio});  
    }else {
        alert("no contamos con ese producto")
    };
    nombre = parseInt(prompt("1 = Para finalizar la compra"));
    if(nombre === 1){
        carrito.forEach((carritoFinal) =>{
            alert(`
            producto:${carritoFinal.nombre}
            unidades: ${carritoFinal.unidades}
            total a pagar:$${carritoFinal.unidades * carritoFinal.precio}
            `)
            alert("Gracias por elegirnos, hasta pronto.")
        })
    }else{
        alert("No existe esa opcion.")
};





