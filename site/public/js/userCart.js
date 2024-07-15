
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart')
    const removeButtons = document.querySelectorAll('.remove-from-cart');
    const cancelButtons = document.querySelectorAll('.cancel-order');
      
    cancelButtons.forEach(cancelButton => {
        cancelButton.addEventListener('click', async () => {
            const productId = button.getAttribute('data-product-id')
          try {
            const response = await fetch('/carrito/cancelar/' + productId, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              }
            })
    
            if (!response.ok) {
              throw new Error('Error al cancelar la orden.')
            }
    
            console.log('Orden cancelada correctamente.')
    
          } catch (error) {
            console.error('Error al cancelar la orden:', error)
          }
        });
      });
        
   
      

    addToCartButtons.forEach(button => {
        button.addEventListener('click', async (event) => {
       
            const productId = button.getAttribute('data-product-id')

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
                    console.log(error.message)
                }
            } catch (error) {
                console.error('Error al agregar el producto al carrito:', error)
                console.log('Error al agregar el producto al carrito')
            } })
    })

    removeButtons.forEach(button => {
        button.addEventListener('click', async () => {
          const productId = button.dataset.productId;
    
          try {
            const response = await fetch(`/carrito/remover-producto/${productId}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
       
            })
            if (!response.ok) {
              console.log("Error al eliminar el producto.")
            }
    
            button.parentElement.remove()
            console.log('Producto eliminado correctamente.')
    
          } catch (error) {
            console.error('Error al eliminar el producto:', error)

          }
        })
      })
})




  
  
  