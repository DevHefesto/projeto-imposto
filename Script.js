// Customized descriptions for each product
const productDescriptions = {
    image1: [
        "Total Produto: R$42,00",
        "ICMS: 12~17%",
        "PIS: 1,65%",
        "COFINS: 7,6%",
        "Total Imposto: R$11,04",
        "Valor Original: R$30,96"
    ],
    image2: [
        "Descrição 1 - Produto 2",
        "Descrição 2 - Produto 2",
        "Descrição 3 - Produto 2",
    ],
};

// Show Text Component
function showProductInfo(event) {
    const productImage = event.target;
    const productInfo = document.querySelector('.product-info'); // Select the product information element

    // Gets the class name of the image to identify the product
    const productClass = productImage.classList[0];

    // Gets all custom descriptions for the product
    const descriptions = productDescriptions[productClass] || ["Descrição não disponível"];

    // Builds text component content with all descriptions
    let productDescriptionHTML = `<h2>${productImage.alt}</h2>`;
    descriptions.forEach((description) => {
        productDescriptionHTML += `<p>${description}</p>`;
    });

    productInfo.innerHTML = productDescriptionHTML;

    productInfo.style.display = 'block';
}


// Hide Text Component
function hideProductInfo() {
    const productInfo = document.querySelector('.product-info');

    productInfo.style.display = 'none';
}

// Select all product images
const productImages = document.querySelectorAll('.product');

// Adds mouseover and mouseout events to each product image
productImages.forEach((image) => {
    image.addEventListener('mouseover', showProductInfo);
    image.addEventListener('mouseout', hideProductInfo);
});
