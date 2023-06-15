const pintarCarrito = () => {

    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class= "model-header-title">Carrito de Compras</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("button");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button";
    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });
    modalHeader.append(modalbutton);

    carrito.forEach((item) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
  <img src="${item.img}">
  <h3>${item.nombre}</h3>
  <button class="restar"> - </button>
  <p>${item.cantidad}</p>
  <button class="sumar"> + </button>
  <p class="precio">$${item.precio * item.cantidad}</p>
  <button class="eliminar-boton">x</button>
  `;
        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar");
        restar.addEventListener("click", () => {
            if (item.cantidad !== 1) {
                item.cantidad--;
            };
            pintarCarrito();
            saveLocal();
        });

        let sumar = carritoContent.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            item.cantidad++;
            pintarCarrito();
            saveLocal();
        });

        let eliminar = carritoContent.querySelector(".eliminar-boton");
        eliminar.addEventListener("click", () => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            });

            Toast.fire({
                icon: 'success',
                title: 'Eliminado correctamente'
            });
            eliminarProducto(item.id);
        });
    });
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar $${total}`;
    
    const finalizar = document.createElement("button");
    finalizar.addEventListener("click", () => {

        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: 'success',
            title: 'Compra realizada con exito'
        });
        carrito.length= 0;
        setTimeout(pintarCarrito, 2000);
    });
    finalizar.className = "boton-finalizar";
    finalizar.innerText = "Finalizar compra";
    totalBuying.append(finalizar);
    if (total === 0) {
        let carritoVacio = document.createElement("h3");
        totalBuying.innerHTML = "El carrito de compras está vacío."
        totalBuying.append(carritoVacio);
    };
    modalContainer.append(totalBuying);
    saveLocal();
};
verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);
    console.log(foundId);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    pintarCarrito();
    saveLocal();
};