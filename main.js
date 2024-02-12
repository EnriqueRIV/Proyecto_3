import './style.css';
import { standardButton } from './src/components/StandardButton/StandardButton.js';
import { searchButton } from './src/components/SearchButton/SearchButton.js';
import { standardCard } from './src/components/Card/Card.js';

const navbarButton = document.querySelector('.eri_li');
navbarButton.innerHTML = `
  ${standardButton('Hoy')}
`;

const navbarButton_1 = document.querySelector('.eri_li_1');
navbarButton_1.innerHTML = `
  ${standardButton('Explorar')}
`;

const searchButtonBar = document.querySelector('.eri-search-bar');
searchButtonBar.innerHTML = `
${searchButton()}`;

const navbarButton_2 = document.querySelector('.eri_li_2');
navbarButton_2.innerHTML = `
  ${standardButton('Iniciar sesión')}
`;

const navbarButton_3 = document.querySelector('.eri_li_3');
navbarButton_3.innerHTML = `
  ${standardButton('Registrarse')}
`;

const navbarButton_4 = document.querySelector('.eri_li_4');
navbarButton_4.innerHTML = `
  ${standardButton(
    `<svg class="gUZ R19" height="24" width="24" viewBox="0 0 24 24" aria-label="Inicio" role="img"><path d="M12 0 1 10v14h8v-7a3 3 0 1 1 6 0v7h8V10z"></path></svg>`
  )}
`;

const navbarButton_5 = document.querySelector('.eri_li_5');
navbarButton_5.innerHTML = `
  ${standardButton(
    `<svg class="gUZ ztu" height="24" width="24" viewBox="0 0 24 24" aria-label="Buscar" role="img"><path d="M10 16a6 6 0 1 1 .01-12.01A6 6 0 0 1 10 16m13.12 2.88-4.26-4.26a10 10 0 1 0-4.24 4.24l4.26 4.26a3 3 0 1 0 4.24-4.24"></path></svg>`
  )}
`;

const navbarButton_6 = document.querySelector('.eri_li_6');
navbarButton_6.innerHTML = `
  ${standardButton(
    `<svg class="gUZ ztu" height="24" width="24" viewBox="0 0 24 24" aria-label="Mi perfil" role="img"><path d="M17.5 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M2 22a10 10 0 1 1 20 0v2H2z"></path></svg>`
  )}
`;

let term = '';
const accessKey = '41wcOU4zVaZdy9pffz83TYESyamMn03NR0w6juGq6Gs';
const apiUrl = 'https://api.unsplash.com/photos/random';
const requestOptions = {
  method: 'GET',
  headers: {
    Authorization: `Client-ID ${accessKey}`
  }
};
const section = document.querySelector('.eri_section');
const divContainerImages = document.createElement('div');

divContainerImages.className = 'eri_section_container';

const onSearchButtonClicked = () => {
  if (searchButtonBar.style.display === 'flex') {
    searchButtonBar.style.display = '';
  } else {
    searchButtonBar.style.display = 'flex';
  }
};

const getInputValue = (event) => {
  term = event.target.value;
};

const onButtonClicked = () => {
  const elements = document.querySelectorAll('.eri_card');
  for (let j = 0; j < elements.length; j++) {
    const element = document.querySelector('.eri_card');
    element.remove();
  }
  main(term);
};
const inputElement = document.querySelector('#searchbar');
inputElement.addEventListener('input', getInputValue);
const buttonSearch = document.querySelector('.searchButton');
buttonSearch.addEventListener('click', onButtonClicked);
const miniButtonSearch = document.querySelector('.eri_li_5');
miniButtonSearch.addEventListener('click', onSearchButtonClicked);

const main = async () => {
  for (let i = 0; i < 9; i++) {
    const resp = await fetch(`${apiUrl}?query=${term}`, requestOptions);
    const photo = await resp.json();

    divContainerImages.append(standardCard(photo));
  }
  section.append(divContainerImages);
};

main();
