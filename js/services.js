$(document).ready(function() {

    const $otherInput = $('#other-input')[0];
    const sessionId = sessionStorage.getItem('id');

    if(sessionId) {
        const input = $('#' + sessionId).closest('input')[0];
        input.checked = true;

        if(sessionId === 'other') {
            $otherInput.style.display = 'block';
        }
    }
    sessionStorage.clear();

    $('#services').on('click', function(ev) {
        if(ev.target.id === 'other') {
            $otherInput.style.display = 'block';
        } else {
            $otherInput.style.display = 'none';
        }
    });

    $('#enviar').on('click', function(ev) {
        ev.preventDefault();

        const required = $('.required');

        $(required).each(function(i, value) {
            const labelRequiredInput = $(value)[0].parentNode;
            const requiredInput = labelRequiredInput.nextElementSibling;
            
            if(!requiredInput.value) {
                const $ancora = $('#forms-legend')[0];
                $('#campo-nao-preenchido')[0].style.display = 'flex';

                $('html, body').animate({
                        scrollTop: $('#' + $ancora.id).offset().top
                    }, 
                    800, 
                    function() {
                        window.location.hash = '#' + $ancora.id;
                    }
                );

                return false; // break
            }
        });
    });

});
