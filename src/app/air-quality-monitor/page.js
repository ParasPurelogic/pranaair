"use client"

import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 4 },
    desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
    tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};
const customer = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
    desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
    tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

export default function CommonMonitorPage() {
    useEffect(() => {
        // Import Bootstrap JS
        require("bootstrap/dist/js/bootstrap.bundle.min.js")

        // Video Popup Functionality
        const playButton = document.getElementById("playButton")
        const videoPopup = document.getElementById("videoPopup")
        const closeBtn = document.getElementById("closeBtn")
        const videoFrame = document.getElementById("videoFrame")

        // YouTube video URL
        const videoUrl = "https://www.youtube.com/embed/vKTDgUu1K_E?autoplay=1&mute=1"

        // Show the popup and play the video
        if (playButton) {
            playButton.addEventListener("click", () => {
                if (videoPopup) {
                    videoPopup.style.display = "flex"
                }
                if (videoFrame) {
                    videoFrame.src = videoUrl
                }
            })
        }

        // Close the popup
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                if (videoPopup) {
                    videoPopup.style.display = "none"
                }
                if (videoFrame) {
                    videoFrame.src = ""
                }
            })
        }

        // Close the popup if clicked outside the video content
        if (videoPopup) {
            window.addEventListener("click", (event) => {
                if (event.target === videoPopup) {
                    videoPopup.style.display = "none"
                    if (videoFrame) {
                        videoFrame.src = ""
                    }
                }
            })
        }

        // Cleanup event listeners on component unmount
        return () => {
            if (playButton) {
                playButton.removeEventListener("click", () => { })
            }
            if (closeBtn) {
                closeBtn.removeEventListener("click", () => { })
            }
            if (videoPopup) {
                window.removeEventListener("click", () => { })
            }
        }
    }, [])

    // Product Tabs State
    const [activeProductTab, setActiveProductTab] = useState("handheld")

    // Air Pollutants State
    const [activePollutantTab, setActivePollutantTab] = useState("pm")

    // AQI Apps State
    const [activeAQITab, setActiveAQITab] = useState("mobile")

    const [activeTab, setActiveTab] = useState("ambient")

    const [activeStandardTab, setActiveStandardTab] = useState("indoor")




    return (
        <main>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ambient-banner">
                                <p className="heading-para">Measure Air Pollution With</p>
                                <h1>
                                    <span className="prana-txt">Prana Air</span> Smart Air Quality Monitors
                                </h1>
                                <p>Monitor, Analyze, and Control Your Air Quality with Precision Technology.</p>
                                <a href="#contact" aria-label="prana air ambient air quality all monitors">
                                    Contact Us <img src="https://www.pranaair.com/wp-content/uploads/2024/09/banner-icon.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="video-container">
                                <button id="playButton">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/01/play-button.png" alt="" />
                                </button>

                                <div id="videoPopup" className="popup">
                                    <div className="popup-content">
                                        <span id="closeBtn" className="close">
                                            &times;
                                        </span>
                                        <iframe
                                            id="videoFrame"
                                            width="650"
                                            height="400"
                                            src=""
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>

                                <div className="wrapper">
                                    <div className="video-main">
                                        <div className="promo-video">
                                            <div className="waves-block">
                                                <div className="waves wave-1 work"></div>
                                                <div className="waves wave-2 work"></div>
                                                <div className="waves wave-3 work"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Tabs Section */}
            <section className="explore-monitor">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="all-monitore-tite">
                                <span className="explore">Explore</span>
                                <h2>Air Quality Monitoring Devices</h2>
                                <p>For Every Space: Home, Office, & Industrial Use</p>
                            </div>
                        </div>
                    </div>

                    <div className="product-tabs">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeProductTab === "handheld" ? "active" : ""}`}
                                    onClick={() => setActiveProductTab("handheld")}
                                >
                                    Handheld
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeProductTab === "indoor" ? "active" : ""}`}
                                    onClick={() => setActiveProductTab("indoor")}
                                >
                                    Indoor
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeProductTab === "outdoor" ? "active" : ""}`}
                                    onClick={() => setActiveProductTab("outdoor")}
                                >
                                    Outdoor
                                </button>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className={`tab-pane fade ${activeProductTab === "handheld" ? "show active" : ""}`}>
                                <div className="row tab-card">
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png" alt="icon" />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">Handheld</span>
                                                <a href="/air-quality-monitor/pocket-co2-monitor/">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/Pocket-Co2.png"
                                                        alt="prana air pocket co2 monitor"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="/air-quality-monitor/pocket-co2-monitor/">
                                                    Pocket CO2 Monitor
                                                </a>
                                                <ul>
                                                    <li>
                                                        <span className="coast">₹4,999</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt="card-rating"
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>Connectivity :</h5>
                                                        <h4>WiFi</h4>
                                                    </li>
                                                    <li>
                                                        <h5>Battery :</h5>
                                                        <h4>400 mAh</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <button className="btn">
                                                    Buy Now{" "}
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png" alt="" />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">Handheld</span>
                                                <a href="/air-quality-monitor/handheld/pocket-monitor/">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/Pocket-PM.png"
                                                        alt="prana air pocket pm2.5 monitor"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="/air-quality-monitor/handheld/pocket-monitor/">
                                                    Pocket PM2.5 Monitor
                                                </a>
                                                <ul>
                                                    <li>
                                                        <span className="coast">₹3,499</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt="card-rating"
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>Connectivity :</h5>
                                                        <h4>WiFi</h4>
                                                    </li>
                                                    <li>
                                                        <h5>Battery :</h5>
                                                        <h4>450 mAh</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <button className="btn">
                                                    Buy Now{" "}
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png" alt="" />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">Handheld</span>
                                                <a href="/air-quality-monitor/oxygen-monitor/">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2025/01/prana-air-oxygen-co-monitor.png"
                                                        alt="prana air pocket pm2.5 monitor"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="/air-quality-monitor/oxygen-monitor/">OxyCO Monitor</a>
                                                <ul>
                                                    <li>
                                                        <span className="coast">₹5,999</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt="card-rating"
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>Connectivity :</h5>
                                                        <h4>WiFi</h4>
                                                    </li>
                                                    <li>
                                                        <h5>Battery :</h5>
                                                        <h4>450 mAh</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <button className="btn">
                                                    Buy Now{" "}
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png" alt="icon" />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">Handheld</span>
                                                <a href="/air-quality-monitor/pocket-co2-monitor/">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/Pocket-Co2.png"
                                                        alt="prana air pocket co2 monitor"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="/air-quality-monitor/pocket-co2-monitor/">
                                                    Pocket CO2 Monitor
                                                </a>
                                                <ul>
                                                    <li>
                                                        <span className="coast">₹4,999</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt="card-rating"
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>Connectivity :</h5>
                                                        <h4>WiFi</h4>
                                                    </li>
                                                    <li>
                                                        <h5>Battery :</h5>
                                                        <h4>400 mAh</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <button className="btn">
                                                    Buy Now{" "}
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png" alt="" />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">Handheld</span>
                                                <a href="/air-quality-monitor/handheld/pocket-monitor/">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/Pocket-PM.png"
                                                        alt="prana air pocket pm2.5 monitor"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="/air-quality-monitor/handheld/pocket-monitor/">
                                                    Pocket PM2.5 Monitor
                                                </a>
                                                <ul>
                                                    <li>
                                                        <span className="coast">₹3,499</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt="card-rating"
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>Connectivity :</h5>
                                                        <h4>WiFi</h4>
                                                    </li>
                                                    <li>
                                                        <h5>Battery :</h5>
                                                        <h4>450 mAh</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <button className="btn">
                                                    Buy Now{" "}
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png" alt="" />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">Handheld</span>
                                                <a href="/air-quality-monitor/oxygen-monitor/">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2025/01/prana-air-oxygen-co-monitor.png"
                                                        alt="prana air pocket pm2.5 monitor"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="/air-quality-monitor/oxygen-monitor/">OxyCO Monitor</a>
                                                <ul>
                                                    <li>
                                                        <span className="coast">₹5,999</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt="card-rating"
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>Connectivity :</h5>
                                                        <h4>WiFi</h4>
                                                    </li>
                                                    <li>
                                                        <h5>Battery :</h5>
                                                        <h4>450 mAh</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <button className="btn">
                                                    Buy Now{" "}
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab-pane fade ${activeProductTab === "indoor" ? "show active" : ""}`}>
                                <div className="row tab-card">
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png" alt="icon" />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">Indoor</span>
                                                <a href="/air-quality-monitor/sensible-air-monitor/">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/sensible-air-quality-monitor.png"
                                                        alt="prana air sensible air quality monitor"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="/air-quality-monitor/sensible-air-monitor/">
                                                    Sensible Monitor
                                                </a>
                                                <ul>
                                                    <li>
                                                        <span className="coast">₹9,999</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt="card-rating"
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>Connectivity :</h5>
                                                        <h4>WiFi</h4>
                                                    </li>
                                                    <li>
                                                        <h5>Battery :</h5>
                                                        <h4>NA</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <button className="btn">
                                                    Buy Now{" "}
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt="icon" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab-pane fade ${activeProductTab === "outdoor" ? "show active" : ""}`}>
                                <div className="row tab-card">
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png" alt="" />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">Outdoor</span>
                                                <a href="/air-quality-monitor/ambient-air-monitor/">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/07/Ambient-PM-product.png"
                                                        alt="prana air Ambient PM air quality monitor"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="/air-quality-monitor/ambient-air-monitor/">Ambient PM</a>
                                                <ul>
                                                    <li>
                                                        <span className="coast">Request A Quote</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt="card-rating"
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>Connectivity :</h5>
                                                        <h4>WiFi / GSM</h4>
                                                    </li>
                                                    <li>
                                                        <h5>Battery :</h5>
                                                        <h4>NA</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <button className="btn">
                                                    Know More{" "}
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt="icon" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="air-pollution-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pranaasir-slider-title">
                                <h2>
                                    Why Should You Choose <strong>Prana Airs Air Pollution Monitors?</strong>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="comp">
                                Compliance with
                                <span className="leed">
                                    LEED, WELL, <span className="clr">&</span> ASHRAE{" "}
                                </span>
                                Standards
                            </div>
                        </div>
                    </div>

                    <div className="row mob-flex">
                        <div className="col-md-6">
                            <div className="air-pollution-box">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/Low-cost-and-Highly-Reliable-Datas.png"
                                            alt="low-cost and reliable data"
                                        />
                                    </li>
                                    <li>
                                        <h3>Low-cost and Highly Reliable Data</h3>
                                        Cost-effective solutions without compromising on accuracy, using high-end sensors for measuring.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="air-pollution-box">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/Remote-Data-at-Your-Fingertip.png"
                                            alt="remote data connectivity"
                                        />
                                    </li>
                                    <li>
                                        <h3>Remote Data at Your Fingertips</h3>
                                        Monitor air quality anytime, anywhere through the AQI mobile app, TV app or web dashboard.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <ul className="air-poll-box-last-row">
                                <li>
                                    <div className="tailored">
                                        <ul>
                                            <li>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/Tailored-Air-Quality-Monitorings.png"
                                                    alt="air quality monitoring devices"
                                                />
                                            </li>
                                            <li>
                                                <h3>Personalized Air Quality Monitoring</h3>
                                                Customized solutions for various industries, offering clear, detailed data views.
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="hassle">
                                        <ul>
                                            <li>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/Hassle-Free-Precisions.png"
                                                    alt="hassle free precision monitoring"
                                                />
                                            </li>
                                            <li>
                                                <h3>Perfect for every application</h3>
                                                Accurate, real-time pollutant tracking with compact, easy-to-use devices.
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="last-box versatile">
                                        <ul>
                                            <li>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/Versatile-Connect.png"
                                                    alt="versatile connectivity"
                                                />
                                            </li>
                                            <li>
                                                <h3>Versatile Connectivity</h3>
                                                Connect via Wi-Fi, GSM, or RS-485 and integrate with BMS for 24/7 real-time monitoring.
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-to-work-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="sensor-heading-box">
                                <h2>How Does An Air Quality Monitoring System Work?</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="work-box">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2025/01/pcb-monitor-function.webp"
                                            alt="air quality PCB"
                                        />
                                    </li>
                                    <li>
                                        <h3>01</h3>
                                        <h4>PCB  Embedded or Platform</h4>
                                        <p>
                                            The PCB manages power, processing, and communication. It converts analogue to digital output,
                                            supports BMS (Battery Management System), and enables data logging and communication via Wi-Fi,
                                            Bluetooth, or LoRa.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="work-box">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2025/03/pcb-embedded-or-platform.webp"
                                            alt="air quality sensors"
                                        />
                                    </li>
                                    <li>
                                        <h3>02</h3>
                                        <h4>Sensors  For Air Quality Detection</h4>
                                        <p>
                                            Sensors detect pollutants and undergo calibration for accuracy. Automation helps them adjust to
                                            factors like temperature and humidity. Bisynking ensures multiple sensors cross-verify data for
                                            reliability.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="work-heading">
                                <h3>From Sensor to Data:</h3>
                                <p>From Sensor to Data: How Air Quality Monitors Work</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="work-box">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2025/03/Housing-Protecting-the-System.webp"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <h3>03</h3>
                                        <h4>Housing  Protecting the System</h4>
                                        <p>
                                            The housing ensures proper sampling of air for precise readings. A perfection-oriented design
                                            reduces interference. Weatherproofing protects against environmental damage, while a robust
                                            structure ensures durability.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="work-box">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2025/03/Dashboard-Analyzing-and-Visualizing-Data.webp"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <h3>04</h3>
                                        <p>
                                            <h4>Dashboard  Analyzing and Visualizing Data</h4>
                                            The dashboard processes and displays air quality data. The backend (server) handles data storage and
                                            processing, while the frontend presents graphs, alerts, and insights for easy monitoring.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to air quality monitor */}
            <section className="container-fluid">
                <div className="row align-items-center impact-img">
                    <div className="col-md-5">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2024/02/industries-gases.jpg"
                            alt="air pollution by industrial gases"
                            width={600} // Adjust width as needed
                            height={400} // Adjust height as needed
                        />
                    </div>
                    <div className="col-md-7 impact-txt">
                        <h2>How Air Quality Monitoring Can Reveal the Hidden Impact of Air Pollution?</h2>
                        <p>
                            <strong>The harmful substances released into the air are air pollutants that negatively impact the environment and human health.</strong>
                        </p>
                        <p>
                            According to WHO research, <strong>nine out of ten people</strong> breathe poor air quality, with 99% of the global population exposed to levels exceeding recommended limits. Air pollution causes <strong>8 million deaths</strong> each year—<strong>3.8 million indoors and 4.2 million outdoors.</strong>
                        </p>
                        <p>
                            The dramatic rise in population has increased energy consumption and resource use. It leads to higher pollutant levels and greater health risks, particularly respiratory illnesses. Therefore, air quality monitoring is crucial. Prana Air’s air quality monitors help in checking pollutants in your environment to make informed decisions for healthier, cleaner air.
                        </p>
                        <a href="/solutions-by-application/" className="btn btn-primary">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* Air Pollutants Section */}
            <section className="key-parameter-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="key-title">
                                <h2>Air Pollutants, Its Sources & the Health Impacts</h2>
                            </div>
                        </div>
                    </div>

                    <div className="key-parameter">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activePollutantTab === "pm" ? "active" : ""}`}
                                    onClick={() => setActivePollutantTab("pm")}
                                >
                                    PM2.5/10
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activePollutantTab === "co2" ? "active" : ""}`}
                                    onClick={() => setActivePollutantTab("co2")}
                                >
                                    CO2
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activePollutantTab === "tvoc" ? "active" : ""}`}
                                    onClick={() => setActivePollutantTab("tvoc")}
                                >
                                    TVOC
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activePollutantTab === "hcho" ? "active" : ""}`}
                                    onClick={() => setActivePollutantTab("hcho")}
                                >
                                    HCHO
                                </button>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className={`tab-pane fade ${activePollutantTab === "pm" ? "show active" : ""}`}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="healt-impact-img">
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/07/sources-of-pm2.5.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 pm-pg">
                                        <div className="key-para">
                                            <h3>Particulate Matter</h3>
                                            <h4>Sources</h4>
                                            <p>
                                                Indoor sources- cooking, candle burning, tobacco smoking, kerosene heaters, construction
                                                activities. Outdoor sources- forest fires, earthquakes, volcanic eruptions, power plants, waste
                                                treatment plants, oil refineries, etc.
                                            </p>
                                            <h4>Health Impact</h4>
                                            <p>
                                                PM 2.5 diameter is less than 2.5 microns and easily enters the lungs and bloodstream. It causes
                                                sneezing, inflammation, skin allergies, asthma, coughing, pneumonia, irregular heartbeat,
                                                nonfatal heart attacks, etc. A high PM 2.5 level reduces the visibility. It can also lead to
                                                environmental changes as well. PM10 causes allergies that can influence sensitive groups.
                                            </p>

                                            <a className="key-btn" href="/what-is-particulate-matter-pm/">
                                                Explore More
                                            </a>

                                            <img
                                                className="para-bg"
                                                src="https://www.pranaair.com/wp-content/uploads/2024/02/pm-bg.png"
                                                alt="background img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab-pane fade ${activePollutantTab === "co2" ? "show active" : ""}`}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="healt-impact-img">
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/07/sources-of-CO2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 co-pg">
                                        <div className="key-para">
                                            <h3>CO2</h3>
                                            <h4>Sources</h4>
                                            <p>
                                                The top source of indoor presence of CO2 is humans. As humans inhale oxygen and exhale CO2. It
                                                also releases from heating devices, oil-burning coal, and gas burning. CO2 is also emitted
                                                because of Deforestation or soil degradation.
                                            </p>
                                            <h4>Health Impact</h4>
                                            <p>
                                                High CO2 levels highly influence the individuals performance in a school or office. CO2
                                                exposure can cause headaches, dizziness, restlessness, breathing difficulty, increased heart
                                                rate, and other symptoms. CO2 emissions also cause global warming. Long-term exposure can cause
                                                extreme health issues. Such as cardiac arrest, and impaired cognitive function.
                                            </p>

                                            <a className="key-btn" href="/what-is-carbon-dioxide-co2/">
                                                Explore More
                                            </a>

                                            <img
                                                className="para-bg"
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/CO2-bg.png"
                                                alt="background img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab-pane fade ${activePollutantTab === "tvoc" ? "show active" : ""}`}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="healt-impact-img">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/07/sources-of-tvoc-odor-gas.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 tvoc-pg">
                                        <div className="key-para">
                                            <h3>TVOC</h3>
                                            <h4>Sources</h4>
                                            <p>
                                                Indoor- Paint, glue, soaps, fabrics, wood, cleansers, plastic products, solvents, etc. TVOCs
                                                vaporate at room temperature and release into the air. Outdoor sources of TVOCs are industrial
                                                processes, wildfires, and vehicle emissions.
                                            </p>
                                            <h4>Health Impact</h4>
                                            <p>
                                                TVOCs evaporate at room temperature. It causes strong odors that cause headaches, fatigue
                                                (tiredness), dizziness, nosebleeding, and eye, nose, and throat irritation. High exposure to
                                                TVOCs can cause severe health issues. Such as nausea, asthma, and damage to the kidneys, liver,
                                                or nervous system. Some chemicals can also cause cancer in animals.
                                            </p>

                                            <a className="key-btn" href="/what-is-voc/">
                                                Explore More
                                            </a>

                                            <img
                                                className="para-bg"
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/TVOC-bg.png"
                                                alt="background img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab-pane fade ${activePollutantTab === "hcho" ? "show active" : ""}`}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="healt-impact-img">
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/07/sources-of-hcho-gas.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 hcho-pg">
                                        <div className="key-para">
                                            <h3>HCHO</h3>
                                            <h4>Sources</h4>
                                            <p>
                                                Indoor: Smoking, cleaning products, furniture, burning fuel, cosmetics, paint, incense lighting,
                                                etc. releases HCHO in the indoor air. Outdoor: HCHO releases from natural gases burning,
                                                gasoline, etc.
                                            </p>
                                            <h4>Health Impact</h4>
                                            <p>
                                                HCHO exposure can cause extreme health issues. Any individual can face irritation of the eyes,
                                                nose, and throat. It can also lead to skin or lung allergies. With it, it increases the chances
                                                of some types of cancer and also causes consciousness loss, pneumonia, and other extreme health
                                                issues. HCHO exposure can also affect reproductive health.
                                            </p>

                                            <img
                                                className="para-bg"
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/HCHO-bg.png"
                                                alt="background img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Air Quality Sensors Section */}
            <section className="air-quality-sensor">
                <div className="container">
                    <div className="row air-quality-sensor-bg">
                        <div className="col-md-6">
                            <div className="air-quality-sensor-content">
                                <h2>Air Quality Sensors</h2>
                                <h3>High Quality & Responsive</h3>
                                <a className="know-more-btn" href="#">
                                    Know More
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="sensor-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/air-quality-sensor.png"
                                    alt="prana air air quality sensors"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Air Quality Manage */}
            <section className="vc_section air-quality-manage">
                <div className="container">
                    <div className="row align-items-center borderr">
                        <div className="col-md-6">
                            <h2 className="manage-heading">
                                <strong>Our Air Quality Monitoring System in the Management!</strong>
                            </h2>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <a href="#contact" className="btn btn-primary gtq-btn">
                                Get A Quote
                            </a>
                        </div>
                    </div>

                    <div className="row align-items-center managment-data mt-4">
                        <div className="col-md-6 text-center">
                            <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/02/air-quality-management-system.png"
                                alt="air quality management system"
                                width={500}
                                height={300}
                                className="img-fluid managment-img"
                            />
                        </div>
                        <div className="col-md-6">
                            <p className="mannage-para data-para">
                                <strong> Air Quality Management System</strong> is a comprehensive plan to reduce air
                                pollution by tracking root cause of air pollution in different
                                settings. Prana Air’s air quality monitors play a crucial role in
                                each step. These are needed for emission inventories, helping to
                                identify and understand air quality problems. The real-time data
                                from our monitors support effective decision-making for emission
                                control and contribute to the overall assessment of air quality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Type of Air Quality Monitor */}
            <section className="types-air-quality">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="type-of-air-quality-heading">
                                <h2>Types of Air Quality Monitoring</h2>
                            </div>
                        </div>
                        <div className="col-sm-6"></div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="types-of-tab">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item type-tab-title">
                                        <button
                                            className={`nav-link ${activeTab === "ambient" ? "active" : ""}`}
                                            onClick={() => setActiveTab("ambient")}
                                        >
                                            <span className="ult-span-text">Ambient Monitoring</span>
                                        </button>
                                    </li>
                                    <li className="nav-item type-tab-title">
                                        <button
                                            className={`nav-link ${activeTab === "indoor" ? "active" : ""}`}
                                            onClick={() => setActiveTab("indoor")}
                                        >
                                            <span className="ult-span-text">Indoor Monitoring</span>
                                        </button>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    {activeTab === "ambient" && (
                                        <div className="tab-pane fade show active">
                                            <div className="ult_tabitemname">
                                                <div className="fadeInUp animated">
                                                    <div>
                                                        <Image
                                                            className="types-img"
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/Prana-sense.webp"
                                                            alt="ambient air quality monitoring"
                                                            width={600}
                                                            height={400}
                                                        />
                                                        <div className="types-air-quality-contect">
                                                            <h3>Ambient Air Quality Monitoring</h3>
                                                            <p>
                                                                Outdoor air is also known as ambient air typically monitored using (Continuous Ambient Air
                                                                Quality Monitoring Station) CAAQMs. Prana Airs outdoor air quality monitors offer the
                                                                same functionality as CAAQMs with a compact and efficient design.
                                                            </p>
                                                            <h3>Pollutants we monitor</h3>
                                                            <p>
                                                                Prana Airs outdoor monitors track AQI, PM2.5, PM10, CO, NO2, SO2, O3, Noise and other
                                                                pollutants.
                                                                <br />
                                                                <a className="gaq-btn" href="#contact">
                                                                    Get A Quote
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "indoor" && (
                                        <div className="tab-pane fade show active">
                                            <div className="ult_tabitemname">
                                                <div className="fadeInUp animated">
                                                    <div>
                                                        <Image
                                                            className="types-img"
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/Indoor-monitor.webp"
                                                            alt="indoor air quality monitoring"
                                                            width={600}
                                                            height={400}
                                                        />
                                                        <div className="types-air-quality-contect">
                                                            <h3>Indoor Air Quality Monitoring</h3>
                                                            <p>
                                                                Prana Ais indoor air quality monitors are perfect for any setting—offices, homes,
                                                                schools, and more. Their compact design and user-friendly features make them the perfect
                                                                choice for indoor air monitoring.
                                                            </p>
                                                            <h3>Pollutants we monitor</h3>
                                                            <p>
                                                                Prana Airs indoor air quality monitors measure PM2.5, CO2, CO, VOCs, temperature,
                                                                humidity more.
                                                                <br />
                                                                <a className="gaq-btn" href="#contact">
                                                                    Get A Quote
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AQI Apps Section */}
            <section className="dashbord-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="dashbord-heading">
                                <h2>
                                    Connect your AQI Monitors{" "}
                                    <img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" /> with
                                    Various{" "}
                                    <img
                                        className="dash-aqi"
                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png"
                                        alt="aqi logo"
                                    />{" "}
                                    Platforms
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="dash-tabs">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeAQITab === "mobile" ? "active" : ""}`}
                                    onClick={() => setActiveAQITab("mobile")}
                                >
                                    Mobile App
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeAQITab === "tv" ? "active" : ""}`}
                                    onClick={() => setActiveAQITab("tv")}
                                >
                                    TV App
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeAQITab === "web" ? "active" : ""}`}
                                    onClick={() => setActiveAQITab("web")}
                                >
                                    Web Dashboard
                                </button>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className={`tab-pane fade ${activeAQITab === "mobile" ? "show active" : ""}`}>
                                <div className="row mob-row">
                                    <div className="col-md-6">
                                        <div className="mob-dash-img">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/aqi-mobile-app-dashboard.webp"
                                                alt="aqi mobile app dashboard"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="aqi-text">
                                            <h6>One-Stop Solution</h6>
                                            <h3>
                                                <img src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png" alt="aqi logo" />{" "}
                                                Mobile App
                                            </h3>
                                        </div>
                                        <div className="dash-content">
                                            <ul>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/get-health-advice.png"
                                                        alt="Get health advices"
                                                    />
                                                </li>
                                                <li>
                                                    <h4>Get health advices</h4>
                                                    <p>
                                                        Take some precautions about what to do and not to do when the air quality is good and bad.
                                                    </p>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/real-time-data-historic-data.png"
                                                        alt="Real-time and historic data access"
                                                    />
                                                </li>
                                                <li>
                                                    <h4>Real-time and historic data access</h4>
                                                    <p>Access real-time and historic air quality data (24 hours, week, or months) via AQI app.</p>
                                                </li>
                                            </ul>
                                            <ul className="dashbord-btn">
                                                <li>
                                                    <a href="https://apps.apple.com/tt/app/aqi/id1439684571?utm_campaign=ios_app_install%27&utm_medium=iOS+app&utm_source=app+store">
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/01/ios-icon.png"
                                                            alt="ios icon"
                                                        />{" "}
                                                        Download for <strong>iOS</strong>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://play.google.com/store/apps/details?id=com.aqi.data&hl=en&utm_source=play+store&utm_medium=android&utm_campaign=android_app_install%27&pli=1">
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/01/android-icon.png"
                                                            alt="android-icon"
                                                        />{" "}
                                                        Download for <strong>android</strong>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab-pane fade ${activeAQITab === "tv" ? "show active" : ""}`}>
                                <div className="row mob-row">
                                    <div className="col-md-6">
                                        <div className="tv-dash-img">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/aqi-tv-app-dashboard.webp"
                                                alt="aqi tv app dashboard"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="aqi-text">
                                            <h6>One-Stop Solution</h6>
                                            <h3>
                                                <img src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png" alt="aqi logo" /> TV
                                                Application
                                            </h3>
                                        </div>
                                        <div className="dash-content">
                                            <ul>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/themes-variety.png"
                                                        alt="Themes variety"
                                                    />
                                                </li>
                                                <li>
                                                    <h4>Themes variety</h4>
                                                    <p>
                                                        Get a variety of theme options to set on your TV for a better and more personalized data
                                                        showcase.
                                                    </p>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/24x7-data.png"
                                                        alt="24*7 data accessibility"
                                                    />
                                                </li>
                                                <li>
                                                    <h4>24*7 data accessibility</h4>
                                                    <p>Connect your device with the TV app and get 24*7 air quality data on your TV screen.</p>
                                                </li>
                                            </ul>
                                            <ul className="tv-web-btn">
                                                <li>
                                                    <a href="https://play.google.com/store/apps/details?id=com.aqitv.aqitvnew">
                                                        {" "}
                                                        Download for <strong>TV</strong>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab-pane fade ${activeAQITab === "web" ? "show active" : ""}`}>
                                <div className="row mob-row">
                                    <div className="col-md-6">
                                        <div className="web-dash-img">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/aqi-web-dashboard-for-prana-air-monitors.webp"
                                                alt="aqi web dashboard for prana air monitors"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="aqi-text">
                                            <h6>One-Stop Solution</h6>
                                            <h3>
                                                <img src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png" alt="aqi logo" />{" "}
                                                Web Dashboard
                                            </h3>
                                        </div>
                                        <div className="dash-content">
                                            <ul>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/remote-access-icon.png"
                                                        alt="remote access icon"
                                                    />
                                                </li>
                                                <li>
                                                    <h4>Remote Access</h4>
                                                    <p>Get Real-time and historical air quality, temperature, etc, data anytime and anywhere.</p>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/data-comparison.png"
                                                        alt="Data comparison"
                                                    />
                                                </li>
                                                <li>
                                                    <h4>Data comparison</h4>
                                                    <p>Compare multiple data from outdoor air quality to make informed decisions.</p>
                                                </li>
                                            </ul>
                                            <ul className="tv-web-btn">
                                                <li>
                                                    <a href="https://www.aqi.in/userlogin">
                                                        {" "}
                                                        Download for <strong>Dashboard</strong>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section */}
            <section className="trust-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="trust-title">
                                <h2>Trusted By</h2>
                                <p>Some of the Industrys Top Organisations</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="all-company-sec">
                    <div className="container-fluid">
                        <div className="marquee">
                            <div className="marquee-inner">
                                <div className="marquee-img-box">
                                    <ul>
                                        <li>
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/03/taj.png" alt="taj logo" />
                                        </li>
                                        <li>
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/03/mahindra.png" alt="mahindra" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="marquee-img-box">
                                    <ul>
                                        <li>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/renault-nissan.png"
                                                alt="renault logo"
                                            />
                                        </li>
                                        <li>
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/03/marriott.png" alt="marriott logo" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="marquee-img-box">
                                    <ul>
                                        <li>
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/03/tata.png" alt="tata logo" />
                                        </li>
                                        <li>
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/03/havells.png" alt="havells logo" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="marquee-img-box">
                                    <ul>
                                        <li>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/microsoft.png"
                                                alt="microsoft logo"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/iit-bombay.png"
                                                alt="iit-bombay logo"
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <div className="marquee-img-box">
                                    <ul>
                                        <li>
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/03/UOC.png" alt="UOC logo" />
                                        </li>
                                        <li>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/Symbiosis-Pune.png"
                                                alt="Symbiosis logo"
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="marquee">
                            <div className="marquee-inner-rgt">
                                <div className="marquee-img-box">
                                    <ul>
                                        <li>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/BCG-Boston-Consulting-Group.png"
                                                alt="BCG-Boston-Consulting-Group logo"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/Adani-Group.png"
                                                alt="Adani-Group logo"
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <div className="marquee-img-box">
                                    <ul>
                                        <li>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/hyderabad-iit.png"
                                                alt="hyderabad-iit logo"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/iit-kanpur.png"
                                                alt="iit-kanpur logo"
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <div className="marquee-img-box">
                                    <ul>
                                        <li>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/rorkee-iit.png"
                                                alt="iit roorkee logo"
                                            />
                                        </li>
                                        <li>
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/03/marriott.png" alt="marriott logo" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="marquee-img-box">
                                    <ul>
                                        <li>
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/03/dae.png" alt="dae logo" />
                                        </li>
                                        <li>
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/03/iiot.png" alt="iiot logo" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Slider Section */}
            <section className="testimonial-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-2">
                            <h2 className="section-title">We care about customer experience too</h2>
                            <p className="section-subtitle">Some of the  Top Organisations</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="app-slider-inner">
                                <Carousel responsive={customer} infinite autoPlay autoPlaySpeed={6000}>
                                    <div className="review-img">
                                        <div className="review-box">
                                            <img src="https://www.pranaair.com/wp-content/uploads/2025/02/quote-icon.png" alt="" />
                                            <p className="hide-txt">Its a great product that can indicate the level of PM2.5 in a closed or outdoor environment. Its
                                                not 100% accurate and given its size and price I think it would be an unrealistic expectation to have that level of
                                                accuracy. It tells you the order of magnitude of PM2.5 pollution in a place and it also indicates the measurement
                                                extremely fast. I have tested and triangulated the device output with other readings (from air purifiers) and I
                                                dont think the margin of error is beyond 10%. However, this has been at levels of PM2.5 below 100. I am not sure if
                                                the margin of error expands or reduces with the PM2.5 increases to levels beyond 150. If you wish to know, on an
                                                indicative basis, of the range of pollution in a place at a point of time, then this would be a highly recommended
                                                device.</p>

                                            <ul>
                                                <li>
                                                    <h3>Sameer W.</h3>
                                                </li>
                                                <li><img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div className="review-img">
                                        <div className="review-box">
                                            <img src="https://www.pranaair.com/wp-content/uploads/2025/02/quote-icon.png" alt="" />
                                            <p className="hide-txt">Its a great product that can indicate the level of PM2.5 in a closed or outdoor environment. Its
                                                not 100% accurate and given its size and price I think it would be an unrealistic expectation to have that level of
                                                accuracy. It tells you the order of magnitude of PM2.5 pollution in a place and it also indicates the measurement
                                                extremely fast. I have tested and triangulated the device output with other readings (from air purifiers) and I
                                                dont think the margin of error is beyond 10%. However, this has been at levels of PM2.5 below 100. I am not sure if
                                                the margin of error expands or reduces with the PM2.5 increases to levels beyond 150. If you wish to know, on an
                                                indicative basis, of the range of pollution in a place at a point of time, then this would be a highly recommended
                                                device.</p>

                                            <ul>
                                                <li>
                                                    <h3>Sameer W.</h3>
                                                </li>
                                                <li><img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                </li>
                                            </ul>
                                        </div>

                                    </div>


                                    <div className="review-img">
                                        <div className="review-box">
                                            <img src="https://www.pranaair.com/wp-content/uploads/2025/02/quote-icon.png" alt="" />
                                            <p className="hide-txt">Its a great product that can indicate the level of PM2.5 in a closed or outdoor environment. Its
                                                not 100% accurate and given its size and price I think it would be an unrealistic expectation to have that level of
                                                accuracy. It tells you the order of magnitude of PM2.5 pollution in a place and it also indicates the measurement
                                                extremely fast. I have tested and triangulated the device output with other readings (from air purifiers) and I
                                                dont think the margin of error is beyond 10%. However, this has been at levels of PM2.5 below 100. I am not sure if
                                                the margin of error expands or reduces with the PM2.5 increases to levels beyond 150. If you wish to know, on an
                                                indicative basis, of the range of pollution in a place at a point of time, then this would be a highly recommended
                                                device.</p>

                                            <ul>
                                                <li>
                                                    <h3>Sameer W.</h3>
                                                </li>
                                                <li><img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>



                                    <div className="review-img">
                                        <div className="review-box">
                                            <img src="https://www.pranaair.com/wp-content/uploads/2025/02/quote-icon.png" alt="" />
                                            <p className="hide-txt">Its a great product that can indicate the level of PM2.5 in a closed or outdoor environment. Its
                                                not 100% accurate and given its size and price I think it would be an unrealistic expectation to have that level of
                                                accuracy. It tells you the order of magnitude of PM2.5 pollution in a place and it also indicates the measurement
                                                extremely fast. I have tested and triangulated the device output with other readings (from air purifiers) and I
                                                dont think the margin of error is beyond 10%. However, this has been at levels of PM2.5 below 100. I am not sure if
                                                the margin of error expands or reduces with the PM2.5 increases to levels beyond 150. If you wish to know, on an
                                                indicative basis, of the range of pollution in a place at a point of time, then this would be a highly recommended
                                                device.</p>

                                            <ul>
                                                <li>
                                                    <h3>Sameer W.</h3>
                                                </li>
                                                <li><img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <div className="app-slider-row">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="app-heading">
                                <h2>Applications of Air Quality Monitor</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="app-slider-monitor">
                        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={6000}>
                            {/* Slide 1 */}
                            <div className="app-air-slider">
                                <a href="/solutions-by-application/smart-city/">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/smart-city.jpg"
                                        alt="Smart City"
                                    />
                                    <div className="require-content app-content">
                                        <h3>Smart City</h3>
                                    </div>
                                </a>
                            </div>

                            {/* Slide 2 */}
                            <div className="app-air-slider">
                                <a href="/solutions-by-application/schools/">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/air-quality-solutions-for-real-estates.jpg"
                                        alt="Air Quality for Schools"
                                    />
                                    <div className="require-content app-content">
                                        <h3>Schools</h3>
                                    </div>
                                </a>
                            </div>

                            {/* Slide 3 */}
                            <div className="app-air-slider">
                                <a href="/solutions-by-application/hospitals/">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/smart-city.jpg"
                                        alt="Air Quality for Hospitals"
                                    />
                                    <div className="require-content app-content">
                                        <h3>Hospitals</h3>
                                    </div>
                                </a>
                            </div>

                            {/* Slide 4 */}
                            <div className="app-air-slider">
                                <a href="/solutions-by-application/offices/">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/air-quality-solutions-for-construction-sites.webp"
                                        alt="Air Quality for Offices"
                                    />
                                    <div className="require-content app-content">
                                        <h3>Offices</h3>
                                    </div>
                                </a>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="contact-heading">
                            <h2>Get in Touch</h2>
                            <p>
                                Please help us know what requirements you have. Our team will
                                contact you very soon.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm pageName="Air Quality Monitor Common Page" />

            {/* Related Products Section */}
            <section className="also-like">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="also-like-heading">
                                <h2>You may also like</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="may-also">
                                <ul>
                                    <li>
                                        <a href="/air-quality-monitor/handheld/pocket-monitor/">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/Pocket-PM.jpg"
                                                alt="prana air Pocket PM2.5 monitor portable"
                                            />
                                        </a>
                                        <h5>
                                            Pocket PM{" "}
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="icon" />
                                        </h5>
                                    </li>
                                    <li>
                                        <a href="/air-quality-monitor/cair-monitor/">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/Cair.jpg"
                                                alt="prana air Cair indoor air quality monitor"
                                            />
                                        </a>
                                        <h5>
                                            Cair+ <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="icon" />
                                        </h5>
                                    </li>
                                    <li>
                                        <a href="/air-quality-monitor/sensible-air-monitor/">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/pranaair-sensible-air-monitor.webp"
                                                alt="prana air sensible indoor air quality monitor"
                                            />
                                        </a>
                                        <h5>
                                            Sensible{" "}
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="icon" />
                                        </h5>
                                    </li>
                                    <li>
                                        <a href="/air-quality-monitor/ambient-air-monitor/">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/Ambient-pro.jpg"
                                                alt="prana air Ambient pro monitor"
                                            />
                                        </a>
                                        <h5>
                                            Ambient pro{" "}
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="icon" />
                                        </h5>
                                    </li>
                                    <li>
                                        <a href="/air-quality-monitor/squair-air-monitor/">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/SQUAIR.jpg"
                                                alt="prana air SQUAIR monitor"
                                            />
                                        </a>
                                        <h5>
                                            SQUAIR <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="icon" />
                                        </h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Air Quality Standard */}
            <section className="air-quality-standard-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="air-quality-standard-title">
                                <h2>Our air quality monitoring devices comply with All Major Standards</h2>
                            </div>
                        </div>
                        <div className="col-sm-6"></div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="air-quality-standard-para">
                                <p>
                                    Our air quality monitors meet all air quality standards. These standards are just recommended to make
                                    them applicable to global solutions. With it, it also supports many air quality management policy
                                    alternatives. Check different pollutant parameters in outdoor or indoor air.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="page-tabs out">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item home-tab-title">
                                        <button
                                            className={`nav-link ${activeStandardTab === "indoor" ? "active" : ""}`}
                                            onClick={() => setActiveStandardTab("indoor")}
                                        >
                                            <span className="ult-span-text">Indoor</span>
                                        </button>
                                    </li>
                                    <li className="nav-item home-tab-title">
                                        <button
                                            className={`nav-link ${activeStandardTab === "outdoor" ? "active" : ""}`}
                                            onClick={() => setActiveStandardTab("outdoor")}
                                        >
                                            <span className="ult-span-text">Outdoor</span>
                                        </button>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    {activeStandardTab === "indoor" && (
                                        <div className="tab-pane fade show active">
                                            <div className="ult_tabitemname">
                                                <div className="air-standard-parameter">
                                                    <ul>
                                                        <li>
                                                            <strong>Parameters:</strong>
                                                        </li>
                                                        <li>PM 2.5</li>
                                                        <li>O3</li>
                                                        <li>TVOC</li>
                                                        <li>HCHO</li>
                                                        <li>CO</li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <strong>WELL:</strong>
                                                        </li>
                                                        <li>35 µg/m3</li>
                                                        <li>&lt;9 ppm</li>
                                                        <li>&lt;500 µg/m3</li>
                                                        <li>&lt;27 ppb</li>
                                                        <li>&lt;51 ppb</li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <strong>LEED:</strong>
                                                        </li>
                                                        <li>15 µg/m3</li>
                                                        <li>10 ppm</li>
                                                        <li>500 µg/m3</li>
                                                        <li>27 ppb</li>
                                                        <li>.075 ppm</li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <strong>ASHRAE:</strong>
                                                        </li>
                                                        <li>35 µg/m3</li>
                                                        <li>11 ppm</li>
                                                        <li>–</li>
                                                        <li>33 µg/m3</li>
                                                        <li>.075 ppm</li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <strong>WHO-Europe:</strong>
                                                        </li>
                                                        <li>–</li>
                                                        <li>10 ppm (8h)</li>
                                                        <li>–</li>
                                                        <li>0.1 mg/m3</li>
                                                        <li>0.064 ppm (8h)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeStandardTab === "outdoor" && (
                                        <div className="tab-pane fade show active">
                                            <div className="ult_tabitemname">
                                                <div className="air-standard-parameter">
                                                    <ul>
                                                        <li>
                                                            <strong>Parameters:</strong>
                                                        </li>
                                                        <li>PM 2.5</li>
                                                        <li>PM 10</li>
                                                        <li>O3</li>
                                                        <li>NO2</li>
                                                        <li>SO2</li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <strong>Time</strong>
                                                        </li>
                                                        <li>
                                                            Annual Mean
                                                            <br /> 24-hr Mean.
                                                        </li>
                                                        <li>
                                                            Annual Mean
                                                            <br /> 24-hr Mean.
                                                        </li>
                                                        <li>8-hr Mean.</li>
                                                        <li>
                                                            Annual Mean
                                                            <br /> 1-hr Mean.
                                                        </li>
                                                        <li>24-hr Mean.</li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <strong>WHO</strong>
                                                        </li>
                                                        <li>
                                                            5 µg/m3
                                                            <br /> 15 µg/m3
                                                        </li>
                                                        <li>
                                                            5 µg/m3
                                                            <br /> 45 µg/m3
                                                        </li>
                                                        <li>100 µg/m3</li>
                                                        <li>
                                                            10 µg/m3
                                                            <br /> 200 µg/m3
                                                        </li>
                                                        <li>40 µg/m3</li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <strong>India (CPCB)</strong>
                                                        </li>
                                                        <li>
                                                            40 µg/m3
                                                            <br /> 60 µg/m3
                                                        </li>
                                                        <li>
                                                            60 µg/m3
                                                            <br /> 100 µg/m3
                                                        </li>
                                                        <li>100 µg/m3</li>
                                                        <li>
                                                            40 µg/m3
                                                            <br /> 80 µg/m3 (24-hr)
                                                        </li>
                                                        <li>80 µg/m3</li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <strong>US (EPA)</strong>
                                                        </li>
                                                        <li>
                                                            15 µg/m3
                                                            <br /> 35 µg/m3
                                                        </li>
                                                        <li>
                                                            –<br /> 150 µg/m3
                                                        </li>
                                                        <li>0.070 ppm</li>
                                                        <li>
                                                            53 ppb
                                                            <br /> 100 ppb
                                                        </li>
                                                        <li>75 ppb (1-hr)</li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <strong>European (EEA)</strong>
                                                        </li>
                                                        <li>
                                                            Limit value, 25 µg/m3
                                                            <br /> –
                                                        </li>
                                                        <li>
                                                            Limit value, 40 µg/m3
                                                            <br /> Limit value, 50 µg/m3 (1-hr)
                                                        </li>
                                                        <li>Target value, 120µg/m3</li>
                                                        <li>
                                                            40 µg/m3
                                                            <br /> Limit value, 200 µg/m3
                                                        </li>
                                                        <li>–</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Historic Data */}
            <section className="historic-data-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="historic-title">
                                <h2>Air Quality Data Insight on your TV or Web Dashboard</h2>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="historic-para">
                                <p>
                                    Connect your device with a TV or Web Dashboard. As to showcase various sights for air quality monitoring
                                    on a big screen. As you can see the individual pollutant in the air. With it, it also displays the
                                    historical data to determine past exposure. You can also check the pollutant summary for the last 24
                                    hours and the filtration score.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="historic-table-img">
                                <ul>
                                    <li>
                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/partical-counts.png" alt="partical counts" />
                                    </li>
                                    <li>
                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/aqi-avrage.png" alt="aqi average" />
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/history-data.png" alt="aqi historic data" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="aqi-dashbord-img">
                                <p>
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/aqi-dashboard-for-prana-air-monitors.webp" alt="aqi dashboard for prana air monitors" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accuracy Section */}
            <section className="highly-accurate-monitor">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="highly-accurate-heading">
                                <h2>Highly Accurate Prana Air Monitor</h2>
                                <p>PM2.5 correlation with a high-end instrument</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="graph-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/highly-accurate-graph-monitor.jpg"
                                    alt="comparison of prana air monitor data with highly expensive equipment"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row accurate-box">
                        <div className="col-md-6">
                            <div className="despite-para">
                                <h3>Most Accurate & Low-Cost</h3>
                                <h4>Prana Airs Monitors, Reliable Alternative to Costly Devices</h4>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="graph-btn">
                                <a href="/air-quality-data-accuracy/">Discover Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Health Score Data */}
            <section className="vc_section health-score-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="health-score-title">
                                <h2>
                                    <span className="green-txt">AI</span> Calculated
                                    <br />
                                    <span className="green-txt">Health</span> Index-Score
                                </h2>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="health-score-para">
                                <p>
                                    Get an insight into various scores such as thermal comfort, mold, ventilation, filtration, odor, mites,
                                    viruses, etc. Make well-informed decisions to control after monitoring.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <div className="calculate-health-score">
                                <div className="healt-score-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/ventilation-score.jpg" alt="Ventilation Score" />
                                </div>
                                <div className="healt-score-text">
                                    <ul>
                                        <li>
                                            <h3>Ventilation Score</h3>
                                            <p>the provision of fresh air to your room</p>
                                        </li>
                                        <li>
                                            <h4 style={{ color: "#fbb400" }}>
                                                05
                                                <br />
                                                <span className="score-clr">Moderate</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="calculate-health-score">
                                <div className="healt-score-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Capacity-Index.jpg" alt="Capacity Index" />
                                </div>
                                <div className="healt-score-text">
                                    <ul>
                                        <li>
                                            <h3>Capacity Index</h3>
                                            <p>people capacity of the room</p>
                                        </li>
                                        <li>
                                            <h4 style={{ color: "#29b713" }}>
                                                02
                                                <br />
                                                <span className="score-clr">Good</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="calculate-health-score">
                                <div className="healt-score-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Mites-Score.jpg" alt="Mites Score" />
                                </div>
                                <div className="healt-score-text">
                                    <ul>
                                        <li>
                                            <h3>Mites score</h3>
                                            <p>the provision of fresh air to your room</p>
                                        </li>
                                        <li>
                                            <h4 style={{ color: "#fbb400" }}>
                                                03
                                                <br />
                                                <span className="score-clr">Moderate</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="calculate-health-score">
                                <div className="healt-score-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Virus-Index.jpg" alt="Virus Index" />
                                </div>
                                <div className="healt-score-text">
                                    <ul>
                                        <li>
                                            <h3>Virus Index</h3>
                                            <p>probability of virus formation in the room</p>
                                        </li>
                                        <li>
                                            <h4 style={{ color: "#f4231c" }}>
                                                02
                                                <br />
                                                <span className="score-clr">Bad</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <div className="calculate-health-score">
                                <div className="healt-score-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Mold-Score.jpg" alt="Mold Score" />
                                </div>
                                <div className="healt-score-text">
                                    <ul>
                                        <li>
                                            <h3>Mold Score</h3>
                                            <p>probability of mold formation in the room</p>
                                        </li>
                                        <li>
                                            <h4 style={{ color: "#f4231c" }}>
                                                02
                                                <br />
                                                <span className="score-clr">Bad</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="calculate-health-score">
                                <div className="healt-score-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Odor-score.jpg" alt="Odor score" />
                                </div>
                                <div className="healt-score-text">
                                    <ul>
                                        <li>
                                            <h3>Odor score</h3>
                                            <p>a distinctive smell in the room</p>
                                        </li>
                                        <li>
                                            <h4 style={{ color: "#29b713" }}>
                                                03
                                                <br />
                                                <span className="score-clr">Good</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="calculate-health-score">
                                <div className="healt-score-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Filtration-Score.jpg" alt="Filtration Score" />
                                </div>
                                <div className="healt-score-text">
                                    <ul>
                                        <li>
                                            <h3>Filtration Score</h3>
                                            <p>efficiency of filter in the room</p>
                                        </li>
                                        <li>
                                            <h4 style={{ color: "#fbb400" }}>
                                                03
                                                <br />
                                                <span className="score-clr">Moderate</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="calculate-health-score">
                                <div className="healt-score-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Comfort-score.jpg" alt="Comfort score" />
                                </div>
                                <div className="healt-score-text">
                                    <ul>
                                        <li>
                                            <h3>Comfort score</h3>
                                            <p>a state of physical ease in the room</p>
                                        </li>
                                        <li>
                                            <h4 style={{ color: "#f4231c" }}>
                                                04
                                                <br />
                                                <span className="score-clr">Bad</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dppc Guidlines */}
            <section className="dppc-guidelines">
                <div className="container">
                    {/* Top Section */}
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="dppc-heading">
                                <h2>Air Quality Monitoring at Construction Site</h2>
                                <p>
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/air-quality-device-at-construction-site.jpg"
                                        alt="prana air air quality monitors at construction sites"
                                    />
                                    <br />
                                    <a className="dpcc-btn" href="https://www.pranaair.com/solutions-by-application/constructions/">Learn More</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="dpcc-guid-line">
                                <h3>According to</h3>
                                <h4>
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/dpss-logo.png"
                                        alt="dpss-logo"
                                    /> DPCC Guidelines
                                </h4>
                            </div>
                            <div className="site-coverd">
                                <ul>
                                    <li><span className="count">150+</span></li>
                                    <li>
                                        <h5>Constructions<br /> Sites Covered</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Divider Line */}
                    <div className="row line">
                        <div className="col-sm-12">
                            <div className="blog-heading">
                                <h2>Prana Airs air quality monitoring system projects</h2>
                            </div>
                        </div>
                    </div>

                    {/* Blog Carousel */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="blog-carousel">
                                <div className="row">
                                    {/* Case Study 1 */}
                                    <div className="col-md-3">
                                        <article className="post">
                                            <div className="post-thumbnail-wrap">
                                                <div className="post-thumbnail">
                                                    <a href="#" className="post-thumbnail-rollover">
                                                        <img
                                                            src="/placeholder.svg?height=300&width=400"
                                                            alt="Case Study"
                                                            className="img-fluid"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="post-entry-content">
                                                <h3 className="entry-title">
                                                    <a href="#">How Prana Airs Solutions Enhanced Air Quality Monitoring at IGCAR?</a>
                                                </h3>
                                                <div className="entry-meta">
                                                    <a className="author vcard" href="#">By <span className="fn">Shakshi</span></a>
                                                    <a href="#" className="data-link">20/03/2024</a>
                                                </div>
                                                <a href="#" className="post-details details-type-link">
                                                    Know more<i className="arrow-icon" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </article>
                                    </div>

                                    {/* Case Study 2 */}
                                    <div className="col-md-3">
                                        <article className="post">
                                            <div className="post-thumbnail-wrap">
                                                <div className="post-thumbnail">
                                                    <a href="#" className="post-thumbnail-rollover">
                                                        <img
                                                            src="/placeholder.svg?height=300&width=400"
                                                            alt="Case Study"
                                                            className="img-fluid"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="post-entry-content">
                                                <h3 className="entry-title">
                                                    <a href="#">Aided in Air Quality Monitoring Solutions for INTERGLOBE</a>
                                                </h3>
                                                <div className="entry-meta">
                                                    <a className="author vcard" href="#">By <span className="fn">Manasvi Kumar</span></a>
                                                    <a href="#" className="data-link">22/06/2023</a>
                                                </div>
                                                <a href="#" className="post-details details-type-link">
                                                    Know more<i className="arrow-icon" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </article>
                                    </div>

                                    {/* Case Study 3 */}
                                    <div className="col-md-3">
                                        <article className="post">
                                            <div className="post-thumbnail-wrap">
                                                <div className="post-thumbnail">
                                                    <a href="#" className="post-thumbnail-rollover">
                                                        <img
                                                            src="/placeholder.svg?height=300&width=400"
                                                            alt="Case Study"
                                                            className="img-fluid"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="post-entry-content">
                                                <h3 className="entry-title">
                                                    <a href="#">Prana Air aids TATA Steel in Hyperlocal Air Quality Monitoring</a>
                                                </h3>
                                                <div className="entry-meta">
                                                    <a className="author vcard" href="#">By <span className="fn">Manasvi Kumar</span></a>
                                                    <a href="#" className="data-link">27/04/2023</a>
                                                </div>
                                                <a href="#" className="post-details details-type-link">
                                                    Know more<i className="arrow-icon" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </article>
                                    </div>

                                    {/* Case Study 4 */}
                                    <div className="col-md-3">
                                        <article className="post">
                                            <div className="post-thumbnail-wrap">
                                                <div className="post-thumbnail">
                                                    <a href="#" className="post-thumbnail-rollover">
                                                        <img
                                                            src="/placeholder.svg?height=300&width=400"
                                                            alt="Case Study"
                                                            className="img-fluid"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="post-entry-content">
                                                <h3 className="entry-title">
                                                    <a href="#">How Prana Air assisted Pacific Golf Estate</a>
                                                </h3>
                                                <div className="entry-meta">
                                                    <a className="author vcard" href="#">By <span className="fn">Poorna Khanna</span></a>
                                                    <a href="#" className="data-link">05/03/2021</a>
                                                </div>
                                                <a href="#" className="post-details details-type-link">
                                                    Know more<i className="arrow-icon" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CSS Styles */}
        </main>
    )
}

