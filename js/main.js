let contenedor = document.getElementById("contenedor");
let verCarrito = document.getElementById("verCarrito");
let modalContainer = document.getElementById("modal-container");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((item) => {
  let div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
  <img src="${item.img}">
  <p>${item.nombre}</p>
  <b>Precio:$${item.precio}</b>
  `;
  contenedor.append(div);

  let boton = document.createElement("button");
  boton.innerText = "COMPRAR";
  boton.className = "boton";

  div.append(boton);

  boton.addEventListener("click", () => {
    carrito.push({
      id: item.id,
      img: item.img,
      nombre: item.nombre,
      precio: item.precio,
    });
    saveLocal();
  });
});

suplementos.forEach((item) => {
  let div = document.createElement("div");
  div.className = "card-suplementos";
  div.innerHTML = `
  <img src="${item.img}">
  <p>${item.nombre}</p>
  <b>Precio:$${item.precio}</b>
  `;
  ofertas.append(div);

  let boton = document.createElement("button");
  boton.innerText = "COMPRAR";
  boton.className = "boton-suplementos";
  div.append(boton);

  boton.addEventListener("click", () => {
    carrito.push({
      id:item.id,
      img: item.img,
      nombre: item.nombre,
      precio: item.precio,
    });
    saveLocal();
  });
});
const saveLocal = () =>{
  localStorage.setItem("carrito",JSON.stringify(carrito));
};


















