
//                              EVENTOS INICIALES

const shoppingCart = [];
const shoppingCartStorage = [];
const totalAmount = 0;
const contenedor = document.getElementById("container");
const totalAmountShowcase = document.getElementById("totalAmount");

document.addEventListener('DOMContentLoaded', () => {
  getData();
});
//                              EVENTOS INICIALES

const getData = async () => {
try {
  const respuesta = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await respuesta.json();
  console.log("data from fetch (just using first 43 items)")
  console.log(data)
  data.length = 43;
  data.forEach(item => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>$${item.price}</p>
      <img src="${item.images[0]}" class="card-image">
      <p> ${item.description}</p>
      <button id="addcart${item.id}">Buy</button>`;
      contenedor.append(div);

      const boton = document.getElementById(`addcart${item.id}`);
      boton.addEventListener("click", () => {
        newOrder(item.id);
      });
  })} catch{
    console.log(error)
  }
};
//funcion para compras
const newOrder = (id) =>{
    let producto = data.find( producto => data.id === id)
    shoppingCart.push(producto)
    console.log ("newOrder - id of item selected");  console.log (id);
    //shoppingCart.push(id)
    shoppingCartStorage.push(id)
    console.log("shoppingCartStorage");  console.log (shoppingCartStorage);
    console.log("shoppingCart");  console.log (shoppingCart);
    refreshCart()
    console.log(totalAmount); 
    }


function refreshCart() {
    for(let i = 0; i < shoppingCart.length; i++){
        console.log('test1')
    }
    totalAmountShowcase.innerHTML = `$${totalAmount}<br>
      ${shoppingCart.length} items en el carrito`;
  }

  refreshCart();