document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
  try {
    const response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json');
    const data = await response.json();

    if (data && data.products) {
      const productsArray = Object.values(data.products);
      const sortedProducts = productsArray.sort((a, b) => b.popularity - a.popularity);
      displayData(sortedProducts);
    } else {
      console.error('Invalid JSON data structure');
    }
  } catch (error) {
    console.error(`Failed to fetch data. Error: ${error.message}`);
  }
}

function displayData(products) {
  const tableBody = document.getElementById('tableBody');

  products.forEach(product => {
    const row = tBody.insertRow();
    const subCategoryCell = row.insertCell(0)
    const titleCell = row.insertCell(1);
    const priceCell = row.insertCell(2);
    const popularityCell = row.insertCell(3);

    subCategoryCell.textContent=product.subcategory;
    titleCell.textContent = product.title;
    priceCell.textContent = product.price;
    popularityCell.textContent = product.popularity;
  });
}

