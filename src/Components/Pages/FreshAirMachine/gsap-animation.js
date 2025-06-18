"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export default function AnyMomentScrollCards({ anyMomentData = [] }) {
    const cardsRef = useRef(null)

    useEffect(() => {
        if (!cardsRef.current) return
        // Disable animation on mobile/tablet
        if (window.innerWidth < 1024) return

        const container = cardsRef.current
        const cards = container.querySelectorAll(".moment-card")

        if (cards.length > 1) {
            gsap.to(cards, {
                xPercent: -60 * (cards.length - 1), // Adjust scroll length
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top 25%", // <- Change this to control when animation starts
                    end: () => "+=" + container.offsetWidth, // Total scroll length
                    pin: true,
                    scrub: 1,
                    snap: 1 / (cards.length - 1),
                    markers: false, // Change to true to debug trigger positions
                },
            })
        }

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill())
        }
    }, [])

    return (
        <div className="any-moment-wrapper" ref={cardsRef}>
            <div className="any-moment-track">
                {anyMomentData.map((item, i) => (
                    <div className="new-img" key={i}>
                        <div className="moment-card">
                            <img src={item.image} alt={item.title} width={200} height={150} />
                            <div className="any-moment-box">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
