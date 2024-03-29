import './SearchButton.css';

export const searchButton = () => {
  return `<button class="searchButton">
  <svg
    height="16"
    width="16"
    viewBox="0 0 24 24"
    aria-label="Buscar"
    role="img"
    class="searchImg"
  >
    <path
      d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"
    ></path>
  </svg>
</button>
<input
  type="search"
  name="search"
  id="searchbar"
  placeholder="Encuentra ideas sobre cenas fáciles, moda, etc."
  class="searchbar"
/>`;
};
