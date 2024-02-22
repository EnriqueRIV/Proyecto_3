import './style.css';
import { data } from './data/data.js';
import { standardButton } from './src/components/StandardButton/StandardButton.js';
import { searchButton } from './src/components/SearchButton/SearchButton.js';
import { standardCard } from './src/components/Card/Card.js';

data.button.forEach(
  (element) =>
    (document.querySelector(
      `.eri_li_${element.id}`
    ).innerHTML = `${standardButton(element.name)}`)
);

const searchButtonBar = document.querySelector('.eri-search-bar');
searchButtonBar.innerHTML = `
${searchButton()}`;

let term = '';
const accessKey = import.meta.env.VITE_ACCESS_KEY;
const apiUrl = 'https://api.unsplash.com/photos/random';
const totalImages = '30';
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
  const resp = await fetch(
    `${apiUrl}?count=${totalImages}&query=${term}`,
    requestOptions
  );
  const photos = await resp.json();

  photos.forEach((photo) => divContainerImages.append(standardCard(photo)));
  section.append(divContainerImages);
};

main();
