const API = "http://127.0.0.1:8000/api/products/";

async function loadProducts(){

const res = await fetch(API);

const products = await res.json();

const container = document.getElementById("product-list");

products.forEach(product => {

const card = document.createElement("div");

card.className = "product-card";

card.innerHTML = `
<img src="${product.image}">
<h3>${product.name}</h3>
<p>${product.description}</p>
<p><b>Price:</b> ${product.price}</p>
`;

container.appendChild(card);

});

}

loadProducts();