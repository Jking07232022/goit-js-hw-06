// Select the ul#categories element
const categoriesList = document.querySelector('#categories');

// Get all li.item elements within the ul#categories
const items = categoriesList.querySelectorAll('.item');

// Display the number of categories
console.log(`Number of categories: ${items.length}`);

// Iterate over each li.item element
items.forEach(item => {
  // Get the header text (h2 tag)
  const categoryName = item.querySelector('h2').textContent;
  
  // Get the number of elements in the category (all nested li elements)
  const elementsCount = item.querySelectorAll('ul li').length;
  
  // Display the category name and the number of elements
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
