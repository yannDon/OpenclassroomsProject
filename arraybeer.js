


async function apiBeer() {
  try {
    const response = await fetch ('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    const data = await response.json()
    
    console.log(data.drinks)
    data.drinks.forEach(element => {
      const drinkName = element.strDrink
      createOption(drinkName)
    });
    
    
    
  }
  catch (error) {
    console.log(error)
  }
} 
apiBeer()




