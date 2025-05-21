"use client"

import { useEffect, useRef, useState } from "react"

export default function AnimatedSection({ id, className, children }) {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        }

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Unobserve after element becomes visible to improve performance
                    if (entry.target && observer) {
                        observer.unobserve(entry.target)
                    }
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current && observer) {
                observer.unobserve(sectionRef.current)
            }
            observer.disconnect()
        }
    }, [])

    return (
        <section id={id} ref={sectionRef} className={`${className} ${isVisible ? "visible" : ""}`}>
            {children}
        </section>
    )
}
