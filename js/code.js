"use strict";

function toggleMenu() {
    var x = document.getElementById("links");

    if (x.style.display === "flex") {
        x.style.display = "none";
    }
    else {
        x.style.display = "flex";
    }
}

$(document).ready(function() {

    $(window).on('scroll', function() {
        if($(window).scrollTop() > $('#main').offset().top) {
            $('#get-back-up')[0].style.display = 'flex';
        } else {
            $('#get-back-up')[0].style.display = 'none';
        }
    });

    $('a').on('click', function(e) {
        if(this.hash !== '' && this.hash.includes('#')) {
            e.preventDefault();
            const hash = this.hash;
    
            $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 
                800, 
                function() {
                    window.location.hash = hash;
                }
            );
        }
    });

    $('#get-back-up').on('click', function() {
        $('html, body').animate({
                scrollTop: 0
            },
            800,
            function() {
                window.location.hash = '#';
            }
        );
    });

});
