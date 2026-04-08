// Bloque 1 - Puente entre HTML Y JS

const themeToggle = document.querySelector("#theme-toggle");
const searchInput = document.querySelector("#search-input");
const regionFilter = document.querySelector("#region-filter");
const flex = document.querySelector("#countries-flex")

// Bloque 2 - Estado Global de la app

let allCountries = []

// Bloque 3 - Light / Dark Mode

themeToggle.addEventListener("click", () => {
    const isDark = document.body.dataset.theme === "dark"
    
    if(isDark){
        document.body.removeAttribute("data-theme")
    }else{
        document.body.dataset.theme = "dark"
    }
})

// Bloque 4 - Carga de datos (asincronia)

async function fetchCountries(){
    try{
        const response = await fetch("./js/data.json")
        
        if(!response.ok) throw new Error("No se pudo cargar el archivo")
        allCountries = await response.json()
        displayCountries(allCountries)
    
    }catch(error){
        flex.innerHTML = "<p>Error al cargar los datos</p>"
    }
}

function displayCountries(countries){
    flex.innerHTML = "";

    if(countries.length === 0){
        flex.innerHTML = "<p> No se encontraron resultados</p>"
    }

    countries.forEach(country => {
        const card = document.createElement("article");
        console.log(country);
        
        card.innerHTML = `
        <img src="${country.flags.png}" alt="${country.name}"/>
        <section>
            <h2>${country.name}</h2>
            <h3>Population: ${country.population}</h3>
            <h3>Region: ${country.region}</h3>
            <h3>Capital: ${country.capital} </h3>

        </section>
        `

        flex.appendChild(card)
    });
}

fetchCountries()
