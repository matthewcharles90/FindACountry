// const url = "https:;//restcountries.eu/rest/v2/all";
const countriesList = document.getElementById("countries");
let countries;

//Event Listeners

countriesList.addEventListener("change", function(event) {
    // console.log(event.target.vale)
    displayCountryInfo(event.target.value);
});


fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData) {
    countries = countriesData;
    let options = "";
    //For.Each Method
    for(let i=0; i<countries.length; i++) {
        options += `<option value="${countries[i].alpha3Code}">${countries[i].name}</option>`;
    }
    document.querySelector("#countries").innerHTML = options;
    displayCountryInfo("AFG");
}

function displayCountryInfo(countryByAlpha3Code) {
    const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
    console.log(countryData);
    document.querySelector("#flag-container img").src = countryData.flag;
    document.querySelector("#flag-container img").alt = `Flag of $(countryData.name)`;
    document.getElementById("capital").innerHTML = countryData.capital;
    document.getElementById("dialog-code").innerHTML = `+${countryData.callingCodes[0]}`;
    document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
    document.getElementById("currencies").innerHTML = countryData.currencies.map(c => `${c.name} (${c.code})`).join(", ");
    document.getElementById("region").innerHTML = countryData.region;
    document.getElementById("subregion").innerHTML = countryData.subregion;
    
    
}
