function fetchCountries(searchQuery) {
    fetch(`https://restcountries.com/v3.1/name/${searchQuery}?fiels=name,capital,population,languages,flags`)
    .then(response => { 
        if (!response.ok) {
            throw new Error(response.status)
        }
        return response.json
        // JSON.stringify(response)
        })
}