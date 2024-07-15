document.addEventListener('DOMContentLoaded', function() {
    let rows = document.querySelectorAll('tr.clickable-row');
    $('#table-orders').DataTable({
        "pagingType": "simple",
        "columnDefs": [
            { "orderable": false, "targets": [6] }
        ],
        "pageLength": 10, 
        "lengthChange": false,
       
    });
    $('#table-products').DataTable({
        layout: {
            bottomEnd: {
                paging: {
                    type: 'simple'
                }
            }
        },
        "columnDefs": [
            { "orderable": false, "targets": [6, 7] }
        ],
        "pageLength": 10, 
        "lengthChange": false,
       
    });

    $('#table-users').DataTable({
        "pagingType": "simple",
        "columnDefs": [
            { "orderable": false, "targets": [5] }
        ],
        "pageLength": 10, 
        "lengthChange": false,
        
    });


    rows.forEach((row) => {
        row.addEventListener('click', function() {
            let url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});