import debounce from "lodash.debounce";
import { alert, error as notifyError, info as notifyInfo } from '@pnotify/core'
import '@pnotify/core/dist/PNotify.css';
import fetchCountries from "./js/fetchCountries";




// function fetchCountries(searchQuery) {
//     return fetch(`https://restcountries.com/v3.1/name/${searchQuery}?fields=name,capital,population,flags,languages`).then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     })
// }

const input = document.getElementById('input');
const list = document.getElementById('list');
const country = document.getElementById('country');


input.addEventListener('input', debounce(onInputChange, 500));


function onInputChange(e) {

    e.preventDefault();
    clearData()

    const inputValue = e.target.value.trim();

    if (inputValue === '') {
        clearData()
        return
    }

    fetchCountries(inputValue)
        .then(fetchResponse)
        .catch(error => notifyError(`Something went wrong ${error}`))
}

function clearData() {
    list.innerHTML = ''
    country.innerHTML = ''
}

function renderCountry(countryInfo) {
    country.insertAdjacentHTML('beforeend', countryInfo)
}

function renderCountriesList(countriesListInfo) {
    list.insertAdjacentHTML('beforeend', countriesListInfo)
}

function fetchResponse(countries) {
    if (countries.length >= 1 && countries.length <= 10) {
        const countryList = countries.map(country => {
            console.log(country)
            return `
            <li>
            <img class='list__img' src='${country.flags.svg}' >
            <p>${country.name.official}</p>
            </li>`
        }).join('')
        
        renderCountriesList(countryList)
    } else if (countries.length === 1) {
        const countryInfo = countries.map(country => {
            return `
                <h1 class="title">${country.name.common}</h1>
    <div class="country__thunb">
      <div class="country__content">
        <p class="country-capital"><b>Capital:</b>${country.capital}</p>
        <p class="country-population"><b>Population:</b>${country.population}</p>
        <p class="country-languages"><b>Languages:</b>${Object.values(country.languages)}</p>
      </div>
       <img class='country__img' src='${country.flags.svg}' >
    </div>`
        }).join('')
        renderCountry(countryInfo)
    } else {
        notifyInfo('Too many matches')
    }
}

function error() {
    notifyError('There is no country with such name')
}