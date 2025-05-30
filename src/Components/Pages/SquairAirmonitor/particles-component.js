"use client"
import { useEffect } from "react"
export default function ParticlesComponent() {
    // Initialize particles.js when component mounts
    useEffect(() => {
        // Check if window is defined (client-side)
        if (typeof window !== "undefined" && window.particlesJS) {
            window.particlesJS("particles-js", {
                particles: {
                    number: {
                        value: 355,
                        density: {
                            enable: true,
                            value_area: 789.1476416322727,
                        },
                    },
                    color: {
                        value: "#ffffff",
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000",
                        },
                    },
                    opacity: {
                        value: 0.48927153781200905,
                        random: false,
                        anim: {
                            enable: true,
                            speed: 0.2,
                            opacity_min: 0,
                            sync: false,
                        },
                    },
                    size: {
                        value: 4,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 8,
                            size_min: 0,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: false,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.2,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "bubble",
                        },
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 83.91608391608392,
                            size: 1,
                            duration: 3,
                            opacity: 1,
                            speed: 3,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        push: {
                            particles_nb: 4,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                retina_detect: true,
            })
        }
    }, [])

    return null // This component doesn't render anything visible
}
