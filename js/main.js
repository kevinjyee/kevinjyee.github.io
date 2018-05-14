// typing
$(function () {
    $('.type').typed({
        strings: ['deep learn in the cloud.', 'blockchain.', 'to use DP.', 'be noticed by senpai.'],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });
});

window.sr = ScrollReveal({ reset: true });
sr.reveal('.section-title', { duration: 3000 });
