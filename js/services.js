function verificarSeOutrosFoiSelecionado() {
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
}

function verificarPronomes() {
    const pronome = $('#pronomes').val();
    const rePronome = /\D{1,4}\/\D{3,5}\/?-?\D{1,2}?/;

    if(pronome) {
        return rePronome.test(pronome);
    } else {
        return null;
    }
}

function verificarTelefone() {
    const telefone = $('#cel-number').val();
    const reTel = /\(?\d{2,3}\)? ?9?\d{4}-?\d{4}/;

    if(telefone) {
        return reTel.test(telefone);
    } else {
        return null;
    }
}

function mostrarMensagemErroCamposInvalidos(mensagem) {
    const $ancora = $('#forms-legend')[0];
    const $campoNaoPreenchido = $('#campo-nao-preenchido')[0];
    const $msg = $($campoNaoPreenchido).find('p')[0];

    $campoNaoPreenchido.style.display = 'flex';
    $msg.innerHTML = mensagem;

    $('html, body').animate({
            scrollTop: $('#' + $ancora.id).offset().top
        }, 
        800, 
        function() {

            window.location.hash = '#' + $ancora.id;
        }
    );
}

function verificarInputsGeral(ev) {
    ev.preventDefault();
    const required = document.getElementsByClassName('required');

    for(let i = 0; i < required.length; i++) {
        const val = required[i];

        const labelRequiredInput = $(val)[0].parentNode;
        const requiredInput = labelRequiredInput.nextElementSibling;
        
        if(!requiredInput.value) {
            mostrarMensagemErroCamposInvalidos('Campos obrigatórios não foram preenchidos!');
            return false;
        }
    }

    const pronome = verificarPronomes();
    const tel = verificarTelefone();

    if(pronome === false || tel === false) {
        mostrarMensagemErroCamposInvalidos('Algum campo foi preenchido incorretamente!');
        return false;
    }

    return true;
}

$(document).ready(function() {

    verificarSeOutrosFoiSelecionado();

    $('#services').on('click', function(ev) {
        const $otherInput = $('#other-input')[0];

        if(ev.target.id === 'other') {
            $otherInput.style.display = 'block';
        } else {
            $otherInput.style.display = 'none';
        }
    });

    $('#enviar').on('click', function(ev) {
        const allRight = verificarInputsGeral(ev);

        if(allRight) {
            window.location = 'index.html';
        }

    });

});
