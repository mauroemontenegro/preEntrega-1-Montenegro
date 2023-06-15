let contenedor = document.getElementById("contenedor");
let verCarrito = document.getElementById("verCarrito");
let modalContainer = document.getElementById("modal-container");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async ()=>{
  const response = await fetch("productos.json");
  const productos = await response.json();

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
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
      
      Toast.fire({
        icon: 'success',
        title: 'Agregado al carrito'
      });
      const repeat = carrito.some((repeatProduct) => repeatProduct.id === item.id);
      if(repeat){
        carrito.map((prod)=>{
          if(prod.id === item.id){
            prod.cantidad++;
          }
        });
      } else{
        carrito.push({
          id:item.id,
          img: item.img,
          nombre: item.nombre,
          cantidad: item.cantidad,
          precio: item.precio,
        });
      };
      saveLocal();
    });
  });
};
const getSuplementos = async ()=>{
  const response = await fetch("suplementos.json");
  const suplementos = await response.json();
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
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
      
      Toast.fire({
        icon: 'success',
        title: 'Agregado al carrito'
      });
      const repeat = carrito.some((repeatProduct) => repeatProduct.id === item.id);
      if(repeat){
        carrito.map((prod)=>{
          if(prod.id === item.id){
            prod.cantidad++;
          }
        });
      } else{
        carrito.push({
          id:item.id,
          img: item.img,
          nombre: item.nombre,
          cantidad: item.cantidad,
          precio: item.precio,
        });
      }
      saveLocal();
    });
  });
  };
getProducts();
getSuplementos();

const saveLocal = () =>{
  localStorage.setItem("carrito",JSON.stringify(carrito));
};


















