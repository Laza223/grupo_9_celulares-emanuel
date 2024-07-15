
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', async (event) => {
            event.preventDefault(); // Previene la recarga de la página
            const productId = button.getAttribute('data-product-id');

            try {
                const response = await fetch(`/carrito/agregar-producto/${productId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const result = await response.json();
                    Toastify({
                        text: "Producto agregado al carrito",
                        duration: 3000,
                        close: true,
                        gravity: "bottom", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                          background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                        onClick: function(){} // Callback after click
                      }).showToast();

                } else {
                    const error = await response.json();
                    alert('Error al agregar el producto al carrito: ' + error.message)
                }
            } catch (error) {
                console.error('Error al agregar el producto al carrito:', error)
                alert('Error al agregar el producto al carrito')
            } })
    })
})
