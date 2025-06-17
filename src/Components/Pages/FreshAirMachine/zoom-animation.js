"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export default function ToxicPollutantsSection({ toxicContent }) {
    const toxicRef = useRef(null)

    useEffect(() => {
        if (!toxicRef.current) return

        gsap.fromTo(
            toxicRef.current,
            { scale: 0.5, opacity: 1 },
            {
                scale: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: toxicRef.current,
                    start: "top 70%",
                    end: "top 30%",
                    scrub: 1,
                },
            }
        )
    }, [])

    return (
        <section className="toxic-sec-bg" ref={toxicRef}>
            <section className="toxic-img">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="toxic-heading">
                                <h2>{toxicContent.heading}</h2>
                                <h3>{toxicContent.subheading}</h3>
                                <p>{toxicContent.description}</p>
                            </div>
                            <div className="particular">
                                <ul>
                                    {toxicContent.pollutants.map((item, index) => (
                                        <li className="floating" key={index}>
                                            <Image
                                                src="/img/particulate-matter.png"
                                                alt=""
                                                width={40}
                                                height={40}
                                            />
                                            <p>{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
