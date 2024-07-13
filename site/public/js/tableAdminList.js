document.addEventListener('DOMContentLoaded', function() {
    let rows = document.querySelectorAll('tr.clickable-row');
    rows.forEach((row) => {
        row.addEventListener('click', function() {
            let url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});