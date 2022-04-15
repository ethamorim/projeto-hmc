$(document).ready(function() {

    $('.faq__header').on('click', function(ev) { 
        const faq = ev.target.closest('.faq');
        const $div = $(faq).find('.ler-mais')[0];
        const $arrow = $(faq).find('i');

        $arrow.toggleClass('facing-down');

        if($div.style.maxHeight) {
            $div.style.maxHeight = null;
        } else {
            $div.style.maxHeight = `${$div.scrollHeight}px`;
        }
    });

});
