const currentYear = document.querySelector("#currentyear")
const lastModified = document.querySelector("#lastModified")
const wind_chill = document.querySelector("#wind-chill")
const wind = document.querySelector("#wind")
const conditions = document.querySelector("#conditions")
const temperature = document.querySelector("#temperature")


let calculateWindChill = (temperature, wind) =>{
    const wind_chill = 13.12 + 0.6215 * temperature - 11.37 * wind**0.16 + 0.3965 * temperature * wind**0.16
    return Math.round(wind_chill)
}

const today = new Date()
const wind_v = 5
const conditions_v = "Sunny"
const temperature_v = 33
const wind_chill_v = calculateWindChill(temperature_v, wind_v)


currentYear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;

lastModified.innerHTML = `<p id="lastModified">Last Modification: ${document.lastModified}</p>`;

wind_chill.innerHTML = `<p id="wind-chill"><strong>Wind Chil:</strong> ${wind_chill_v}°C</p>`;
wind.innerHTML = `<p id="wind"><strong>Wind:</strong> ${wind_v}Km</p>`;
conditions.innerHTML = `<p id="conditions"><strong>Conditions:</strong> ${conditions_v}</p>`;
temperature.innerHTML = `<p id="Temperature"><strong>Temperature:</strong> ${temperature_v}°C</p>`;    