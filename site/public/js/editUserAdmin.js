document.addEventListener('DOMContentLoaded', function() {
    let roleSelect = document.getElementById('inputState')

    roleSelect.addEventListener('change', function() {
      let selectedRoleId = parseInt(roleSelect.value, 10)
      if (selectedRoleId !== 2) {
        alert("Advertencia: Se estan quitando permisos de administrador al usuario logueado actualmente, si se guardan los cambios se redireccionara al inicio")
      }
    })
  })
  

  