let btn = document.getElementById("generar");
let contenedor = document.getElementById("contenedor");
let API_URL = 'https://api.thecatapi.com/v1/images/search';

async function fetchData() {
    try {
      let response = await fetch(API_URL);
      let data = await response.json();
      return data;
    } catch (error) {
      console.error("Error trayendo la data:", error);
    }
  }


async function displayImages (){
    let datos = await fetchData();
    btn.addEventListener("click", function(){
        contenedor.innerHTML=`<img src='${datos[0].url}' heigth="300px" width="300px">`
    })
}

displayImages();

