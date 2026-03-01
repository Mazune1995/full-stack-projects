document.addEventListener("DOMContentLoaded", function () {

    fetch("http://127.0.0.1:8000/api/products/")
        .then(response => response.json())
        .then(data => {

            const container = document.getElementById("product-list");
            container.innerHTML = "";

            data.forEach(product => {

                const card = document.createElement("div");
                card.classList.add("product-card");

                card.innerHTML = `
                    <img src="http://127.0.0.1:8000${product.image}" class="product-img">
                    <h3>${product.name}</h3>
                    <p>${product.description || ""}</p>
                    <p class="price">UGX ${product.price}</p>
                `;

                container.appendChild(card);
            });

        })
        .catch(error => {
            console.error("Error loading products:", error);
        });

});