const axios = require('axios')
async function getExchangeRate(currencyCode) { // Your code here

    try {

        const response = await axios.get("https://api.exchangerate.host/latest")

        if (response.status == 200 && response.data.rates) {
            for (const key in response.data.rates) {
                if (key == currencyCode) {
                    console.log(response.data.rates[key].toFixed(4));
                } else return null
            }
        }
    } catch {

    }
}

getExchangeRate("AUR")