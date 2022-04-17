$(document).ready(function() {

    $('#page-services').on('click', function(ev) {
        const el = ev.target.closest('a');

        if(el.tagName === 'A') {
            ev.preventDefault();

            sessionStorage.setItem('id', el.id);
            window.location = 'servicos.html';
        }
    });

});