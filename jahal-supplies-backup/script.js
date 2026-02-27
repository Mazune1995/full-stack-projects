data.forEach(product => {

    const imageUrl = product.image
        ? product.image
        : "/static/images/default.png";

    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
        <img src="${imageUrl}" style="width:100%;height:200px;object-fit:cover;border-radius:8px;">
        <h3>${product.name}</h3>
        <p>${product.category.name}</p>
        <p>${product.price} ${product.currency}</p>
    `;

    container.appendChild(card);
});