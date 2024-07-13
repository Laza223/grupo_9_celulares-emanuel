document.addEventListener('DOMContentLoaded', function() {

  const deleteButtons = document.querySelectorAll('.deleteButton')

  deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', async function(event) {
      event.preventDefault()
      event.stopPropagation()


      const id = deleteButton.dataset.id;

      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: 'No podrás revertir esto',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar!',
        cancelButtonText:"Cancelar"
      })
     
      if (result.isConfirmed) {
       
        try {
          const response = await fetch(`/admin/dashboard/eliminar/${id}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },

          });

        if (!response.ok) { throw new Error("Error al eliminar elemento")}

         
         
         
          
          setTimeout(() => {
            window.location.reload()
          }, 1000)

        } catch (error) {
          console.error('Error al eliminar elemento:', error);
          Swal.fire('Error', 'Hubo un problema al intentar eliminar el elemento', 'error');
        }}}
      )
  })
})