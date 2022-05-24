const URL = 'https://api.thecatapi.com/v1/images/search';

//Para que al cargar el DOM se muestre una primera imagen
document.addEventListener('DOMContentLoaded', getCat); 


async function getCat() {
    try {
        const response = await fetch(URL);
        const data = await response.json(); //Conviertiendo la respuesta a un objeto JSON
        const image = document.querySelector('img');
        image.src = data[0].url; 
    } catch (error) {
        console.log("Error", error);
    }
}

const reload = document.querySelector('#reload');
reload.onclick = getCat;