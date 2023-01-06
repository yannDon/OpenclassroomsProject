const dataListElement = document.getElementById('drink')


function createOption(drinkValue) {
    const optionElement = document.createElement('option')
    optionElement.value = drinkValue
    console.log(optionElement)
    dataListElement.append(optionElement)
    

}