/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 50,
            "density": {
                "enable": true,
                "value_area": 552
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 0,
                "color": "#2199e8"
            },
            "polygon": {
                "nb_sides": 1
            },
            "image": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Ketone-group-2D-skeletal.svg/150px-Ketone-group-2D-skeletal.svg.png",
                "width": 50,
                "height": 50
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 40,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 15,
                "size_min": 20,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": .4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 802,
                "rotateY": 561
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": .8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

