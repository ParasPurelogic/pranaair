"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export default function CO2GraphAnimation({ title, description, imageUrl }) {
    // Refs for GSAP animations
    const page2Ref = useRef(null)
    const partnerRef = useRef(null)
    const swipRef = useRef(null)

    // Initialize GSAP ScrollTrigger animations
    useEffect(() => {
        // Check if window is defined (client-side)
        if (typeof window !== "undefined") {
            // Function to initialize ScrollTrigger animations
            const initScrollTrigger = () => {
                // Bottom card animation
                gsap.fromTo(
                    swipRef.current,
                    { y: "100%", opacity: 0 }, // Start off-screen and invisible
                    {
                        y: "-100%", // Move to the top
                        opacity: 1, // Become visible
                        scrollTrigger: {
                            trigger: page2Ref.current,
                            scrub: true,
                            scroller: "body",
                            start: "top 20%",
                            end: "top -80%",
                            pin: true,
                            onUpdate: (self) => {
                                // Gradually hide the top card as the bottom card moves
                                gsap.to(partnerRef.current, {
                                    opacity: 1 - self.progress,
                                    duration: 0.1,
                                    overwrite: true,
                                })
                            },
                        },
                    },
                )
            }

            // Media query for desktop
            const desktopQuery = window.matchMedia("(min-width: 1025px)")

            // Check if the screen width matches the desktop query
            if (desktopQuery.matches) {
                console.log("Desktop animation active") // Debugging step
                initScrollTrigger()
            } else {
                console.log("Mobile/tablet detected, ScrollTrigger disabled") // Debugging step

                // Disable ScrollTrigger for smaller screens
                ScrollTrigger.getAll().forEach((st) => st.kill())
            }

            // Add event listener for when screen size changes (optional)
            desktopQuery.addEventListener("change", (e) => {
                if (e.matches) {
                    // Screen switched to desktop size
                    initScrollTrigger()
                } else {
                    // Screen switched to mobile/tablet size
                    ScrollTrigger.getAll().forEach((st) => st.kill())
                }
            })

            // Ensure ScrollTrigger recalculates everything
            ScrollTrigger.refresh()

            // Cleanup function
            return () => {
                ScrollTrigger.getAll().forEach((st) => st.kill())
                desktopQuery.removeEventListener("change", (e) => {
                    // Cleanup
                })
            }
        }
    }, [])

    return (
        <div className="product-card" id="page2" ref={page2Ref}>
            <div className="watch-card-inner-box partner" ref={partnerRef}>
                <ul>
                    <li>
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </li>
                    <li>
                        <img src={imageUrl || "/placeholder.svg"} alt="CO2 graph analysis" />
                    </li>
                </ul>
            </div>
            <div className="watch-card-inner-box swip" ref={swipRef}>
                <ul>
                    <li>
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </li>
                    <li>
                        <img src={imageUrl || "/placeholder.svg"} alt="CO2 graph analysis" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
