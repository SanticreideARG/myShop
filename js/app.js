//                              EVENTOS INICIALES
document.addEventListener('DOMContentLoaded', () => {
    getData();
  
  });
  const getData = async () => {
  try {
    const respuesta = await fetch("json/products.json");
    const data = await respuesta.json();
    console.log(data)
    data.forEach(item => {
        console.log(data)
    })} catch{
      console.log(error)
    }
    ;
  };
  
  getData();
  
  let contenedor = document.getElementById("container");