const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")



function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value // input de captacao de valor
    const currencyValueToConvert = document.getElementById("to-convert")
    const currencyValueConverted = document.getElementById("converted")
    
    
    const dolarToday = 5.71 
    const euroToday = 6.2
    const btcToday = 397185.30
    const libraToday = 7.41

    if(currencySelect.value == "defaut"){
        currencyValueConverted.innerHTML = " "
    }

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyValue / dolarToday)
    
    }
    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if(currencySelect.value == "btc"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', 
            currency: 'BTC',
            minimumFractionDigits: 8 
        }).format(inputCurrencyValue / btcToday)
    }
    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency:"BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-img")
    
    if(currencySelect.value == "defaut"){
        currencyName.innerHTML = "Selecione uma moeda"
        currencyImage.src = "./assets/selecao-removebg-preview.png"
    }

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar Americano"
       currencyImage.src = "./assets/dolar.png"
        
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value == "btc"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    convertValues()
}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues) //Ouvinte de Eventos


