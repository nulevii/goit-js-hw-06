const categories = document.querySelectorAll('.item')
console.log(`Number of categories: ${categories.length}`)

categories.forEach(category =>{
  const categoryName = category.querySelector('h2')
  console.log(`Category: ${categoryName.textContent}`)

  const categoryItems = category.querySelectorAll('ul > li')
  console.log(`Elements: ${categoryItems.length}`)
})
console.log()