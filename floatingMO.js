console.log("This is a custom plugin");

document.addEventListener('DOMContentLoaded', function() {
    // Select the node that will be observed for mutations
    let targetNode = document.body; // watch all child elements of the body

    // Options for the observer (which mutations to observe)
    let config = { childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    let callback = function(mutationsList, observer) {
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Check if our target node has been added to the DOM
                let targetDiv = document.getElementById('particles-js');
                if(targetDiv) {
                    console.log("Particles.js status:", typeof window.particlesJS);
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

                        // Once we've found our node, we can stop observing
                        observer.disconnect();
                    }
                }
            }
        }
    };

    // Create an observer instance linked to the callback function
    let observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
});
