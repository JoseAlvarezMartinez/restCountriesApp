// Bloque 1 - Puente entre HTML Y JS

const themeToggle = document.querySelector("#theme-toggle");
const searchInput = document.querySelector("#search-input");
const regionFilter = document.querySelector("#region-filter");
const flex = document.querySelector("#countries-flex")

// Bloque 2 - Estado Global de la app

let allCountries = []

// Bloque 3 - Light / Dark Mode