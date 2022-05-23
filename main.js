const URL = 'https://api.thecatapi.com/v1/images/search';

async function getCat () {
    const response = await fetch(URL);
    const data = await response.json();
    const img = document.querySelector('img');
    img.src = data[0].url; 
}

const input = document.querySelector('input');
input.onclick = getCat;