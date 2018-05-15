// typing
$(function () {
    $('.type').typed({
        strings: ['deep learn in the cloud.', 'blockchain.', 'use DP.', 'breadth-first search.'],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });
});

window.sr = ScrollReveal({ reset: true });
sr.reveal('.section-title', { duration: 3000 });


// Add Scroll Effects

var current = 1; //keeps track of the current div
var height = $('.roles').height(); //the height of the roles div
var numberDivs = $('.roles').children().length; //the number of children of the roles div
var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2000);
