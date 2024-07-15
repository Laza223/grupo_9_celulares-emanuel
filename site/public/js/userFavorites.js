document.addEventListener("DOMContentLoaded", function () {


    const addToFavoritesButtons = document.querySelectorAll(".add-to-favorites")
  
    addToFavoritesButtons.forEach(button => {
      button.addEventListener("click", async function (event) {

        event.preventDefault()

        const productId = button.getAttribute("data-product-id")
        const isFavorite = button.querySelector("i").classList.contains("fa-solid")
  
        try {
          let response = ""
          if (isFavorite) {
            response = await fetch(`/perfil/remover-favorito/${productId}`, {
              method: "DELETE",
            });
          } else {
            response = await fetch(`/perfil/agregar-favorito/${productId}`, {
              method: "POST",
            })
          }
  
          if (response.ok) {
            const responseData = await response.json();
            console.log(responseData.message)
  
            button.querySelector("i").classList.toggle("fa-solid")
            button.querySelector("i").classList.toggle("fa-regular")
          } else {
            console.error("Error en la petición fetch:", response.statusText);
          }
  
        } catch (error) {
          console.error("Error:", error)
        }
      })
    })
  })
  