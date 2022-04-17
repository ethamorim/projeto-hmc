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

});
