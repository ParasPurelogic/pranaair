"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FadeInText from "@/Components/FadeInText"
import Image from "next/image"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export default function ToxicPollutantsSection({ toxicContent }) {
    const toxicRef = useRef(null)

    useEffect(() => {
        if (!toxicRef.current) return
        // Disable animation on mobile and tablet
        if (window.innerWidth < 1024) return

        gsap.fromTo(
            toxicRef.current,
            { scale: 0.8, opacity: 1 },
            {
                scale: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: toxicRef.current,
                    start: "top 60%",
                    end: "top 30%",
                    scrub: 1,
                },
            }
        )
    }, [])

    return (
        <section className="toxic-sec-bg" ref={toxicRef}>
            <section className="toxic-img">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="toxic-heading">
                                <FadeInText>
                                    <span className="sub-heading">Your Data. Always Within Reach.</span>
                                    <h2 className="page-heading">Modes of Connectivity</h2>
                                </FadeInText>
                            </div>
                        </div>
                    </div>
                    <div className="row mob-row-flex">
                        <div className="col-lg-3">
                            <div className="aqm-device arrow">
                                <Image src="/img/modes-air-quality-monitor.webp" alt="" width={800} height={400} />
                                <p>Air Quality Monitor</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="type-device arrow">
                                <ul>
                                    <li>
                                        <Image src="/img/wifi-mode.webp" alt="" width={800} height={400} />
                                        <p>Wifi</p>
                                    </li>
                                    <li>
                                        <Image src="/img/gsm-mode.webp" alt="" width={800} height={400} />
                                        <p>GSM</p>
                                    </li>
                                    <li>
                                        <Image src="/img/rs485-mode.webp" alt="" width={800} height={400} />
                                        <p>RS 485</p>
                                    </li>
                                </ul>
                                <p>Types of Connectivity</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="aqm-device arrow">
                                <Image src="/img/cloud-storage-mode.webp" alt="" width={800} height={400} />
                                <p>SD Card & Cloud Storage</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="type-device mob-tv">
                                <ul>
                                    <li>
                                        <Image src="/img/laptop-mode.webp" alt="" width={800} height={400} />
                                        <p>Laptop</p>
                                    </li>
                                    <li>
                                        <Image src="/img/tv-mode.webp" alt="" width={800} height={400} />
                                        <p>TV</p>
                                    </li>
                                    <li>
                                        <Image src="/img/mobile-mode.webp" alt="" width={800} height={400} />
                                        <p>Mobile</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
