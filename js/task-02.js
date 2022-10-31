const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const INGREDIENTS_LIST = document.getElementById('ingredients')

const addIngridients = (ingredients) => {
  const ingredientsArr = ingredients.map(ingredient =>{
  const ingridientElement = document.createElement('li')
  ingridientElement.innerHTML = ingredient
  ingridientElement.className = 'item'
  return ingridientElement
  
  })
  INGREDIENTS_LIST.append(...ingredientsArr)
}

addIngridients(ingredients)
