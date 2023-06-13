console.log("this is a custom plugin")
document.addEventListener('DOMContentLoaded', function() {
    if (typeof window.particlesJS === "function") {
        window.particlesJS('particles-js', {
            particles: {
                number: {
                    value: 200,
                    density: {
                        enable: true,
                        value_area: 400
                    }
                },
                color: {
                    value: ["#feddfe", "#fefefe"]
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.3
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 0.6,
                    direction: "top",
                    out_mode: "out",
                    random: false
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    }
                },
                modes: {
                    repulse: {
                        distance: 100
                    },
                    push: {
                        quantity: 4
                    }
                }
            }
        });
    }
});
