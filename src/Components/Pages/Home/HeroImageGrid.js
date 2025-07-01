"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { domain } from "@/config"

export default function HeroImageGrid() {

    // State for slider
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-rotate slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === 0 ? 1 : 0))
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    // Return JSX
    return <div className="hero-image-grid">
        <div className="slider-container">
            <div className={`slider-item ${currentSlide === 0 ? "active" : ""}`}>
                <div className="all-device">
                    <ul>
                        <li>
                            <Link href={`${domain}/air-quality-monitor/ambient-air-monitor/prana-sense`}>
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-air-sensible-plus-monitor.webp"
                                    alt="prana air sensible plus indoor air quality monitor"
                                    width={300}
                                    height={200}
                                    className="device-image"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://play.google.com/store/apps/details?id=com.aqi.data">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-air-Insightful-data.webp"
                                    alt="aqi web-dashboard for prana air's air quality monitors"
                                    width={300}
                                    height={200}
                                    className="device-image"
                                />
                            </Link>
                        </li>
                    </ul>
                    <ul className="second-row">
                        <li className="mt">
                            <Link href={`${domain}/air-quality-monitor/handheld/pocket-monitor`}>
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Pocket-PM2.5-Monitor-WiFi.webp"
                                    alt="prana air pocket pm2.5 monitor"
                                    width={300}
                                    height={200}
                                    className="device-image"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href={`${domain}/air-quality-monitor/cair-monitor`}>
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Cair-plus-Indoor-Air-Quality-Monitor.webp"
                                    alt="prana air cair+ indoor air quality monitor"
                                    width={300}
                                    height={200}
                                    className="device-image"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`slider-item ${currentSlide === 1 ? "active" : ""}`}>
                <div className="all-device">
                    <ul>
                        <li>
                            <Link href={`${domain}/air-quality-monitor/ambient-air-monitor/prana-sense`}>
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Highly-accurate-prana-senes-monitor.webp"
                                    alt="prana air prana sense ambient air quality monitor"
                                    width={300}
                                    height={200}
                                    className="device-image"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href={`${domain}/air-quality-monitor/pocket-co2-monitor`}>
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Worlds-Smallest-CO2-Monitor.webp"
                                    alt="prana air co2 air quality monitor"
                                    width={300}
                                    height={200}
                                    className="device-image"
                                />
                            </Link>
                        </li>
                    </ul>
                    <ul className="second-row">
                        <li className="mt">
                            <Link href={`${domain}/air-quality-monitor/sensible-air-monitor`}>
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/sensible-monitor.webp"
                                    alt="prana air sensible indoor air quality monitor"
                                    width={300}
                                    height={200}
                                    className="device-image"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.aqi.in/">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/aqi-website.webp"
                                    alt="aqi dashboard"
                                    width={300}
                                    height={200}
                                    className="device-image"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}