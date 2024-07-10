document.addEventListener('DOMContentLoaded', function () {
    
    // Función para truncar el título del producto

    const productTitleElements = document.querySelectorAll('.product-title');

    productTitleElements.forEach((productTitleElement) => {
        const productTitle = productTitleElement.textContent;
        if (productTitle.length > 22) {
            productTitleElement.textContent = productTitle.slice(0, 22) + '...';
        }
    });

    // Función para truncar y mostrar la descripción del producto

    const productDescriptionElements = document.querySelectorAll('.product-description');

    productDescriptionElements.forEach((productDescriptionElement) => {
        const productDescription = productDescriptionElement.textContent;
        if (productDescription.length > 50) {
            productDescriptionElement.textContent = productDescription.slice(0, 50) + '...';
        }
    });

    // Función para mostrar la burbuja de chat después de 5 segundos

    setTimeout(function() {
        const chatBubble = document.querySelector('.chat-bubble');
        chatBubble.style.display = 'block';
    }, 7000);
});