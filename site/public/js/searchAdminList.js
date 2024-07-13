document.addEventListener("DOMContentLoaded", function() {
    
    let input = document.getElementById("input-search-admin");
  
    input.addEventListener("keyup", function() {

      let filter, table, tr, td, i, txtValue
      
      filter = input.value.toUpperCase();
      table = document.getElementById("table-search-admin");
      tr = table.getElementsByTagName("tr");
  
      for (i = 0; i < tr.length; i++) {
    
        tdName = tr[i].getElementsByTagName("td")[0]; 
        tdPrice = tr[i].getElementsByTagName("td")[1]; 
        tdStock = tr[i].getElementsByTagName("td")[2]; 
        tdCategory = tr[i].getElementsByTagName("td")[3]; 
  
        if (tdName || tdPrice || tdStock || tdCategory) {
          txtValueName = tdName ? tdName.textContent || tdName.innerText : "";
          txtValuePrice = tdPrice ? tdPrice.textContent || tdPrice.innerText : "";
          txtValueStock = tdStock ? tdStock.textContent || tdStock.innerText : "";
          txtValueCategory = tdCategory ? tdCategory.textContent || tdCategory.innerText : "";
  
          if (txtValueName.toUpperCase().indexOf(filter) > -1 || 
              txtValuePrice.toUpperCase().indexOf(filter) > -1 || 
              txtValueStock.toUpperCase().indexOf(filter) > -1 || 
              txtValueCategory.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
    });
  });
  
 