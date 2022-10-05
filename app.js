
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
  console.log("data from fetch")
  console.log(data)
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

const newOrder = (id) =>{
  console.log ("newOrder - id of item selected");  console.log (id);
  shoppingCart.push(id)
  shoppingCartStorage.push(id)
  console.log("shoppingCartStorage");  console.log (shoppingCartStorage);
  console.log("shoppingCart");  console.log (shoppingCart);

}

