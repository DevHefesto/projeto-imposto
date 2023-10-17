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
        "Total Produto: R$50.000",
        "ICMS: 18%",
        "IPI: 7~11%",
        "IPVA: 2,5%",
        "IOF: 1,5%",
        "Total Imposto: R$16.500",
        "Valor Original: R$33.500"
    ],
    image3: [
        "Total Produto: R$9",
        "ICMS: 7%",
        "PIS: 1,65%",
        "COFINS: 7,6%",
        "Total Imposto: R$1,46",
        "Valor Original: R$7,54"
    ],
    image4: [
        "Total Produto: R$5,52",
        "ICMS: 27%",
        "CIDE: R$0,1/L",
        "PIS: 1,97%",
        "COFINS: 9,65%",
        "Total Imposto: R$2,24",
        "Valor Original: R$3,28"
    ],
    image5: [
        "Total Produto: R$7.320",
        "ICMS: 18%",
        "II: 60%",
        "COFINS: 12,85%",
        "Total Imposto: R$3.675",
        "Valor Original: R$3.495"
    ],
    image6: [
        "Total Produto: R$120",
        "ICMS: 18%",
        "IPI: 10%",
        "COFINS: 7,6%",
        "ISS: 5%",
        "Total Imposto: R$50,70",
        "Valor Original: R$69,30"
    ],
    image7: [
        "Total Produto: R$4200",
        "ICMS: 18%",
        "IPI: 40~50%",
        "Total Imposto: R$2.856",
        "Valor Original: R$1.344"
    ],
    image8: [
        "Total Produto: R$40",
        "ICMS: 18%",
        "IPI: 10%",
        "PIS: 0,65%",
        "COFINS: 3%",
        "Total Imposto: R$12,66",
        "Valor Original: R$27,35"
    ],
    image9: [
        "Total Produto: R$50",
        "ICMS: 18%",
        "PIS: 1,75%",
        "COFINS: 7,6%",
        "II: 0~35%",
        "Total Imposto: R$22,42",
        "Valor Original: R$27,58"
    ],
};

// Função para mostrar o componente de texto com a descrição em formato de coluna
function showDescription(description, altText, imageNumber) {
    const productInfo = document.querySelector(`.product-info-${imageNumber}`);
    productInfo.innerHTML = `<h2>${altText}</h2>` + description.map(line => `<p>${line}</p>`).join('');
    productInfo.style.display = 'block';
}

// Adicione eventos de mouseover para cada imagem
for (let i = 1; i <= 9; i++) {
    const image = document.querySelector(`.image${i}`);
    const description = productDescriptions[`image${i}`] || []; // Obtemos a descrição a partir do objeto
    const altText = image.getAttribute('alt'); // Obtém o texto do atributo alt

    image.addEventListener('mouseover', () => {
        showDescription(description, altText, i);
    });

    image.addEventListener('mouseout', () => {
        hideDescription(i);
    });
}

// Função para esconder o componente de texto
function hideDescription(imageNumber) {
    const productInfo = document.querySelector(`.product-info-${imageNumber}`);
    productInfo.style.display = 'none';
}