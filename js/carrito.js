const pintarCarrito = () =>{

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
  <p>$${item.precio}</p>
  `;
        modalContainer.append(carritoContent);

        let eliminar = document.createElement("button");
        eliminar.addEventListener("click", eliminarProducto);
        eliminar.innerText="x";
        eliminar.className = "eliminar-boton";

        carritoContent.append(eliminar);
        saveLocal();

    });
    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar $${total}`;
    if (total === 0) {
        let carritoVacio = document.createElement("h3");
        totalBuying.innerHTML = "El carrito de compras está vacío."
        totalBuying.append(carritoVacio);
    };
    modalContainer.append(totalBuying);
    saveLocal();
};
verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () =>{
    const foundId = carrito.find((item) => item.id);

    carrito = carrito.filter((carritoId) =>{
        return carritoId !== foundId;
    });
    pintarCarrito();
};