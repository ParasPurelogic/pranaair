"use client"

import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Image from 'next/image';
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
                                                <a href="https://www.pranaair.com/in/air-quality-monitor/pocket-co2-monitor/">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/Pocket-Co2.png"
                                                        alt="prana air pocket co2 monitor"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="https://www.pranaair.com/in/air-quality-monitor/pocket-co2-monitor/">
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
                                                <a href="https://www.pranaair.com/in/air-quality-monitor/handheld/pocket-monitor/">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/Pocket-PM.png"
                                                        alt="prana air pocket pm2.5 monitor"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="https://www.pranaair.com/in/air-quality-monitor/handheld/pocket-monitor/">
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
                                                <a href="https://www.pranaair.com/in/air-quality-monitor/oxygen-monitor/">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2025/01/prana-air-oxygen-co-monitor.png"
                                                        alt="prana air pocket pm2.5 monitor"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="https://www.pranaair.com/in/air-quality-monitor/oxygen-monitor/">OxyCO Monitor</a>
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
                                                <a href="https://www.pranaair.com/in/air-quality-monitor/pocket-co2-monitor/">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/Pocket-Co2.png"
                                                        alt="prana air pocket co2 monitor"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="https://www.pranaair.com/in/air-quality-monitor/pocket-co2-monitor/">
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
                                                <a href="https://www.pranaair.com/in/air-quality-monitor/handheld/pocket-monitor/">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/Pocket-PM.png"
                                                        alt="prana air pocket pm2.5 monitor"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="https://www.pranaair.com/in/air-quality-monitor/handheld/pocket-monitor/">
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
                                                <a href="https://www.pranaair.com/in/air-quality-monitor/oxygen-monitor/">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2025/01/prana-air-oxygen-co-monitor.png"
                                                        alt="prana air pocket pm2.5 monitor"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="https://www.pranaair.com/in/air-quality-monitor/oxygen-monitor/">OxyCO Monitor</a>
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
                                                <a href="https://www.pranaair.com/in/air-quality-monitor/sensible-air-monitor/">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/sensible-air-quality-monitor.png"
                                                        alt="prana air sensible air quality monitor"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="https://www.pranaair.com/in/air-quality-monitor/sensible-air-monitor/">
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
                                                <a href="https://www.pranaair.com/in/air-quality-monitor/ambient-air-monitor/">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/07/Ambient-PM-product.png"
                                                        alt="prana air Ambient PM air quality monitor"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="https://www.pranaair.com/in/air-quality-monitor/ambient-air-monitor/">Ambient PM</a>
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
                        <a href="#" className="btn btn-primary">
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

                                            <a className="key-btn" href="#">
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

                                            <a className="key-btn" href="#">
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

                                            <a className="key-btn" href="#">
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
                                <a href="#">Discover Now</a>
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

            {/* Trusted By Section */}
            <section className="trust-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
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
            <section className="testimonial-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-4">
                            <h2 className="section-title">We care about customer experience too</h2>
                            <p className="section-subtitle">Some of the  Top Organisations</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-6 mx-auto">
                                                <div className="testimonial-card">
                                                    <div className="quote-icon">
                                                        <i className="fa fa-quote-left"></i>
                                                    </div>
                                                    <p className="testimonial-text">
                                                        Using it for last two weeks. Presently excellent performance. Showing PM 2.5 and PM 10, temperature and Humidity along with AQI. Hope it will last.
                                                    </p>
                                                    <div className="testimonial-author">
                                                        <h5>Thomas Mattackal</h5>
                                                        <div className="rating">
                                                            <span className="star">★</span>
                                                            <span className="star">★</span>
                                                            <span className="star">★</span>
                                                            <span className="star">★</span>
                                                            <span className="star">★</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-md-6 mx-auto">
                                                <div className="testimonial-card">
                                                    <div className="quote-icon">
                                                        <i className="fa fa-quote-left"></i>
                                                    </div>
                                                    <p className="testimonial-text">
                                                        Very useful if you are aware of the need to know air quality where you sleep, work, or exercise. The battery life is very low, so better to not keep it on for long or keep a charger handy.
                                                    </p>
                                                    <div className="testimonial-author">
                                                        <h5>Amit</h5>
                                                        <div className="rating">
                                                            <span className="star">★</span>
                                                            <span className="star">★</span>
                                                            <span className="star">★</span>
                                                            <span className="star">★</span>
                                                            <span className="star">★</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-md-6 mx-auto">
                                                <div className="testimonial-card">
                                                    <div className="quote-icon">
                                                        <i className="fa fa-quote-left"></i>
                                                    </div>
                                                    <p className="testimonial-text">
                                                        Compact size, accurate reading, battery life is good. I was unable to pair with Android app but not that important for me.
                                                    </p>
                                                    <div className="testimonial-author">
                                                        <h5>SA</h5>
                                                        <div className="rating">
                                                            <span className="star">★</span>
                                                            <span className="star">★</span>
                                                            <span className="star">★</span>
                                                            <span className="star">★</span>
                                                            <span className="star">★</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-controls">
                                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
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

                    <div className="app-slider-inner">
                        <div className="row">
                            <div className="col-md-3">
                                <a href="https://www.pranaair.com/in/solutions-by-application/smart-city/">
                                    <div className="app-air-slider">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/03/smart-city.jpg"
                                            alt="air quality solutions for smart city by prana air"
                                        />
                                        <div className="require-content app-content">
                                            <h3>
                                                Smart City{" "}
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/03/app-slider.png" alt="" />
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-3">
                                <a href="https://www.pranaair.com/in/solutions-by-application/constructions/">
                                    <div className="app-air-slider">
                                        <img
                                            src="/wp-content/uploads/2024/03/air-quality-solutions-for-construction-sites.webp"
                                            alt="air quality monitoring solutions for construction sites"
                                        />
                                        <div className="require-content app-content">
                                            <h3>
                                                Construction Sites{" "}
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/03/app-slider.png" alt="" />
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-3">
                                <a href="https://www.pranaair.com/in/solutions-by-application/institutes/">
                                    <div className="app-air-slider">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/03/air-quality-solutions-for-schools.jpg"
                                            alt="air quality solutions for schools by prana air"
                                        />
                                        <div className="require-content app-content">
                                            <h3>
                                                School/ Institutes{" "}
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/03/app-slider.png" alt="icon" />
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-3">
                                <a href="https://www.pranaair.com/in/solutions-by-application/office/">
                                    <div className="app-air-slider">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/03/air-quality-solution-for-office.jpg"
                                            alt="air quality solution for office by prana air"
                                        />
                                        <div className="require-content app-content">
                                            <h3>
                                                Offices <img src="https://www.pranaair.com/wp-content/uploads/2024/03/app-slider.png" alt="" />
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-3">
                                <a href="https://www.pranaair.com/in/solutions-by-application/hotel-businesses/">
                                    <div className="app-air-slider">
                                        <img
                                            src="/wp-content/uploads/2024/03/air-quality-solutions-for-hotel.webp"
                                            alt="air quality solutions for hotel by prana air"
                                        />
                                        <div className="require-content app-content">
                                            <h3>
                                                Hotels{" "}
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/03/app-slider.png" alt="icon" />
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-3">
                                <a href="https://www.pranaair.com/in/solutions-by-application/restaurants/">
                                    <div className="app-air-slider">
                                        <img
                                            src="/wp-content/uploads/2024/03/air-pollution-in-Restaurants.webp"
                                            alt="air quality solutions for Restaurants by prana air"
                                        />
                                        <div className="require-content app-content">
                                            <h3>
                                                Restaurants{" "}
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/03/app-slider.png" alt="" />
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-3">
                                <a href="https://www.pranaair.com/in/solutions-by-application/hospital/">
                                    <div className="app-air-slider">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/03/air-quality-solutions-for-hospital.jpg"
                                            alt="air quality solutions for hospitals by prana air"
                                        />
                                        <div className="require-content app-content">
                                            <h3>
                                                Hospital <img src="https://www.pranaair.com/wp-content/uploads/2024/03/app-slider.png" alt="" />
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-3">
                                <a href="https://www.pranaair.com/in/solutions-by-application/real-estate/">
                                    <div className="app-air-slider">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/03/air-quality-solutions-for-real-estates.jpg"
                                            alt="air quality solutions for real estates by prana air"
                                        />
                                        <div className="require-content app-content">
                                            <h3>
                                                Real Estates{" "}
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/03/app-slider.png" alt="" />
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <section className="airqulality_contact_section inner_container" id="contact">
                <div className="container">
                    <div className="introducing_box sub_title_box text-center">
                        <h2 className="title_heading">
                            Get in <span className="bold_text">Touch</span>
                        </h2>
                        <p>Please help us know what requirements you have. Our team will contact you very soon.</p>
                    </div>

                    <div className="row airquality_inner_form">
                        <div className="col-md-3 contact_content_box">
                            <div className="contact_information_box">
                                <h4>Contact Info</h4>
                                <p>Looking for Any Indoor Air Quality Monitor?</p>
                                <ul className="contact_info">
                                    <li>
                                        <i className="fa fa-phone" aria-hidden="true"></i>Phone Number: (+91) 73918-73918
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>Email Address: info@purelogic.in
                                    </li>
                                    <li>
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>Office Location: 706, 7th Floor, Sec 10,
                                        Rohini, Delhi 85, India
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="airquality_contact_box">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <input type="text" className="form-control" placeholder="Your Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <input type="email" className="form-control" placeholder="Your Email" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <input type="tel" className="form-control" placeholder="Phone Number" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <input type="text" className="form-control" placeholder="Subject" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                                        <a href="#">
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
                                        <a href="#">
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
                                        <a href="#">
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
                                        <a href="#">
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
                                        <a href="#">
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

            {/* Type of Air Quality Monitor */}
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

            {/* CSS Styles */}
            <style jsx global>{`
     @import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap);

html {
    scroll-behavior: smooth
}

a {
    text-decoration: none !important
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Nunito Sans", sans-serif !important
}

.hero-section {
    background: url(https://www.pranaair.com/wp-content/uploads/2024/09/know-the-quality-of-air-you-breathe-scaled.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 850px;
    margin-top: -22px
}

.ambient-banner a:hover img {
    transform: translateX(10px)
}

span.prana-txt {
    color: #7AB261
}

.ambient-banner h1 {
    color: #fff;
    font-size: 50px;
    line-height: 60px;
    width: 100%;
    text-transform: capitalize
}

.ambient-banner a img {
    width: 30px;
    transition: .2s linear
}

.heading-para {
    font-size: 40px !important;
    width: 100% !important;
    margin-bottom: 20px !important
}

.ambient-banner p {
    color: #fff;
    font-size: 18px;
    text-transform: capitalize;
    line-height: 30px;
    padding-top: 15px;
    width: 65%
}

.ambient-banner a {
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    border-radius: 50px;
    padding: 15px 0;
    display: flex;
    align-items: center;
    gap: 10px;
    background: #7AB261;
    justify-content: center;
    width: 40%;
    margin-top: 10px
}

.ambient-banner {
    padding-top: 150px
}

.explore-monitor {
    background: #F4F8FE;
    margin-top: 0;
    padding-top: 150px;
    z-index: 0;
    overflow: visible !important
}

.all-monitore-tite h2 {
    color: #7AB261;
    font-size: 20px;
    font-weight: 700
}

.all-monitore-tite h2 {
    color: #263D4F;
    font-size: 32px;
    font-weight: 700
}

.all-monitore-tite p {
    color: #263D4F;
    font-size: 18px;
    font-weight: 600;
    margin: 0
}

.video-title p {
    margin: 0
}

.pd {
    padding-bottom: 50px
}

.page-tabs ul {
   background: #e4e7ec;
    gap: 0px;
    top: -85px;
    left: 900px;
    border-radius: 50px !important;
    justify-content: space-between;
    width: 25% !important;
    padding: 5px 0 !important;
    position: relative;
}

li.ult_tab_li.home-tab-title.current {
    border-radius: 25px !important;
    box-shadow: 0 0 4px #afafaf !important
}

li.ult_tab_li.home-tab-title.current a {
    padding: 10px 40px !important
}

.card-img img {
    width: 170px;
    padding: 15px 0;
    transition: .2s linear
}

.card-img a {
    display: block
}

.prdocut-card {
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 0 20px #dbe0e770;
    padding: 20px 20px;
    margin: 0 auto;
    width: 95%;
    margin-bottom: 40px;
    height: 470px
}

.arrow-link img {
    width: 20px;
    float: right;
    margin-top: -10px
}

.card-text ul li {
    text-align: left
}

.card-text ul {
    background: #fff0;
    float: none;
    width: 100% !important;
    list-style: none;
    display: flex;
    justify-content: space-between !important;
    padding-top: 15px !important;
    margin: 0;
    padding-left: 0
}

.card-img {
    background: #F4F8FE;
    border-radius: 13px;
    position: relative;
    top: 20px;
    text-align: center
}

.in-outdoor {
    color: #33444C;
    font-size: 13px;
    font-weight: 800 !important;
    border: 1px solid #E4E4E4;
    background: #fff;
    width: 25%;
    position: absolute;
    right: 0;
    margin: 0;
    border-radius: 0 10px;
    padding: 3px
}

.card-text {
    padding-top: 40px;
    text-align: left
}

.card-text a {
    color: #31343D;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    position: relative
}

.card-text a:hover {
    color: #7ab261
}

.card-text a:before {
    position: absolute;
    content: "";
    background-image: linear-gradient(45deg, transparent, #00000024, transparent);
    width: 230%;
    height: 1px;
    left: 0;
    bottom: -60px
}

.coast {
    color: #7AB261;
    font-size: 17px;
    font-weight: 700
}

.card-text ul li img {
    width: 80px
}

.card-text ul li h5 {
    color: #677580;
    font-size: 13px;
    margin: 0
}

.card-text ul li h4 {
    color: #31343D;
    font-size: 14px;
    font-weight: 700;
    padding-top: 5px
}

.card-btn button {
    text-decoration: none;
    background: #7AB261;
    color: #fff;
    font-size: 14px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 12px !important;
    border-radius: 5px !important;
    gap: 10px;
    transition: .3s linear;
    width: 100%
}

.prdocut-card ul {
    left: 0;
    background: transparent;
    width: 100% !important;
    display: flex;
    justify-content: space-between !important;
    top: 0;
    padding-bottom: 10px !important;
    padding-top: 10px !important;
}

.card-btn button img {
    width: 22px
}

.card-btn button:hover {
    background: #507640 !important;
    color: #fff
}

.prdocut-card:hover .card-btn button {
    transform: scale(1.02);
    background: #507640
}

.prdocut-card:hover .card-img img {
    transform: scale(1.05)
}

.prdocut-card:hover .card-text a {
    color: #7ab261
}

.air-pollution-sec {
    padding-top: 100px
}

.pranaasir-slider-title h2 {
    color: #222327;
    font-weight: 300;
    font-size: 32px;
    line-height: 40px;
    padding-right: 60px;
    padding-top: 30px
}

.comp {
    background: #F4F8FE;
    width: 45%;
    float: right;
    border-radius: 10px;
    padding: 5px 20px
}

.comp p {
    color: #222327;
    font-size: 16px;
    line-height: 26px
}

.leed {
    color: #7AB261;
    font-size: 20px;
    font-weight: 800
}

.clr {
    color: #222327
}

.air-pollution-slider {
    background: #232327;
    border-radius: 17px;
    margin-top: 50px;
    padding: 30px;
    height: 550px
}

.air-pollution-box {
    background: #91C8FF40;
    height: 180px;
    border-radius: 10px;
    padding: 20px 30px;
    margin-bottom: 15px;
}

.air-pollution-box ul {
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;
    display: flex
}

.air-pollution-box ul li img {
    width: 100%
}

.air-pollution-box ul li:first-child {
    width: 40%
}

.air-pollution-box ul li h3 {
    color: #263D4F;
    font-size: 18px;
    margin: 0
}

.air-pollution-box ul li p {
    color: #263D4F;
    font-size: 14px;
    width: 90%;
    line-height: 24px
}

ul.air-poll-box-last-row {
    list-style: none;
    margin: 0;
    display: flex;
    gap: 15px;
    padding: 0;
}

.last-box {
    width: 100%;
}

.most-accurate-sec {
    background: #080809;
    border-radius: 15px;
    overflow: hidden;
    margin-top: 70px;
    position: relative;
    z-index: 1
}

.tailored {
    background: #91C8FF40;
    height: 180px;
    border-radius: 10px;
    padding: 40px 30px 0
}

.tailored ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex
}

.tailored ul li img {
    width: 100%
}

.tailored ul li h3 {
    color: #263D4F;
    font-size: 18px;
    margin: 0;
    line-height: 24px
}

.tailored ul li p {
    color: #263D4F;
    font-size: 14px;
    width: 90%;
    line-height: 24px;
    padding-top: 10px
}

.tailored ul li:first-child {
    width: 70%
}

.hassle {
    background: #91C8FF40;
    height: 180px;
    border-radius: 10px;
    padding: 40px 30px 0
}

.hassle ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex
}

.hassle ul li img {
    width: 100%
}

.hassle ul li h3 {
    color: #263D4F;
    font-size: 18px;
    margin: 0;
    line-height: 24px
}

.hassle ul li p {
    color: #263D4F;
    font-size: 14px;
    width: 90%;
    line-height: 24px;
    padding-top: 10px
}

.hassle ul li:first-child {
    width: 80%
}

.versatile {
    background: #91C8FF40;
    height: 180px;
    border-radius: 10px;
    padding: 40px 30px 0
}

.versatile ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex
}

.versatile ul li img {
    width: 100%
}

.versatile ul li h3 {
    color: #263D4F;
    font-size: 18px;
    margin: 0;
    line-height: 24px
}

.versatile ul li p {
    color: #263D4F;
    font-size: 14px;
    width: 90%;
    line-height: 24px;
    padding-top: 10px
}

.versatile ul li:first-child {
    width: 70%
}

.mob-flex .wpb_text_column.wpb_content_element {
    margin-bottom: 15px
}

.mob-flex {
    margin-top: 70px
}

.accurate-text h2 {
    color: #A0DC85;
    font-size: 16px;
    font-weight: 600;
    margin: 0
}

.accurate-text p {
    color: #F3F3F3;
    font-size: 30px;
    font-weight: 500;
    line-height: 35px;
    padding-right: 0;
    padding-bottom: 20px;
    margin: 0
}

.accurate-text a {
    color: #A0DC85;
    text-decoration: none;
    font-size: 14px;
    border: 1px solid #7ab362;
    padding: 10px 30px;
    border-radius: 50px;
    font-weight: 400;
    transition: .3s linear
}

.accurate-text a:hover {
    background: #7ab362;
    color: #fff
}

.accurate-icon img {
    width: 160px;
    margin-right: -20px
}

.accurate-icon {
    margin: 0;
    text-align: right
}

.garph-line img {
    width: 100%;
    margin-left: 30px
}

.accurate-text {
    padding-left: 80px;
    padding-top: 20px
}

.gaes-img img {
    width: 100%;
    position: relative;
    left: -230px;
    height: 540px
}

.gases-sec {
    padding-top: 150px;
    margin-top: 70px;
    z-index: 0;
    padding-bottom: 50px
}

.gases-text h2 {
    color: #3B3D3F;
    font-size: 32px;
    line-height: 40px;
    font-weight: 600;
    margin-bottom: 30px;
    position: relative;
    padding-right: 100px;
    border-bottom: 1px solid #6161613d;
    padding-bottom: 20px;
}

.gases-text p {
    color: #263D4FEE;
    font-size: 18px
}

.gases-text p strong {
    color: #263D4FEE
}

.gases-text h2:before {
    position: absolute;
    content: "";
    background-image: linear-gradient(45deg, #ffffff00, #ffffff52, #ffffff00);
    width: 100%;
    height: 1px;
    left: 0;
    bottom: -15px
}

.gases-text {
    margin-left: -180px
}

.gases-text a {
    background: #7AB261;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    padding: 10px 30px;
    display: block;
    width: 25%;
    text-align: center;
    border-radius: 50px;
    margin-top: 30px;
    transition: .3s linear
}

.gases-text a:hover {
    background: #fff0;
    border: 1px solid #7AB261;
    color: #7AB261
}

.home-video {
    padding-top: 150px
}

.video-bg img {
    width: 100%
}

.explore {
    color: #7AB261;
    font-size: 20px;
    font-weight: 600;
    margin: 0
}

.video-title h3 {
    color: #263D4F;
    font-size: 32px;
    font-weight: 700
}

.require-slider {
    padding-top: 150px
}

.require-title h2 {
    color: #263D4F;
    font-size: 32px;
    font-weight: 700;
    padding-right: 50px;
    line-height: 40px
}

.require-title p {
    color: #263d4fa6;
    font-size: 16px
}

.require-air-slider img {
    width: 100%
}

.require-content {
    padding: 20px
}

.require-slider-inner {
    margin-left: 230px;
    padding-top: 10px
}

.require-air-slider {
    background: #F4F8FE;
    border-radius: 25px;
    transition: 1s linear
}

.require-air-slider:hover {
    transform: scale(1.03)
}

.sensor {
    color: #263D4F;
    font-size: 16px;
    display: block;
    line-height: 15px
}

.require-air-slider h3 {
    color: #263D4F;
    font-size: 16px;
    font-weight: 800;
    margin: 0;
    padding-bottom: 15px
}

.app-air-slider {
    position: relative;
    overflow: hidden;
    margin: 0 10px
}

.app-air-slider:before {
    position: absolute;
    content: "";
    background-image: linear-gradient(360deg, black, transparent);
    width: 100%;
    height: 150px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto
}

.blog-carousel-shortcode.blog-carousel-shortcode-id-1:not(.mode-masonry) article {
    height: 470px !important
}

.require-air-slider p {
    margin: 0
}

.require-air-slider p {
    color: #263d4fdb;
    font-size: 16px
}

.require-slider-row {
    height: 700px;
    overflow: visible !important
}

.require-slider-inner .owl-nav {
    position: relative;
    left: -500px;
    top: 20px
}

.key-parameter-sec {
    background: #171819;
    padding-top: 60px;
    margin-top: 120px
}

.key-title h2 {
    color: #F4F8FE;
    font-size: 32px;
    font-weight: 600;
    padding-top: 20px;
    width: 50%;
    line-height: 42px;
    padding-left: 0
}

.air-pollution-img {
    text-align: right
}

.air-pollution-img img {
    width: 70%
}

.key-parameter ul {
z-index: 2;
    background: #2f3031;
    gap: 55px;
    position: relative;
    top: 0;
    left: 700px;
    border-radius: 50px !important;
    justify-content: space-between;
    width: 45% !important;
    padding: 0 !important;
}

.key-parameter ul li button {
    padding: 15px 25px !important;
    border-radius: 30px !important;
}


.product-tabs ul {
    z-index: 2;
    background: #d3dae1;
    gap: 55px;
    position: relative;
    top: -60px;
    left: 740px;
    border-radius: 50px !important;
    justify-content: space-between;
    width: 40% !important;
    padding: 0 !important;
}

.product-tabs ul li button {
    padding: 15px 27px !important;
    border-radius: 30px !important;
}

img.para-bg {
    width: 40%;
    position: absolute;
    bottom: -50px;
    right: -40px;
    z-index: 0;
}

.prdocut-card ul {
    left: 0;
    background: transparent;
    width: 100% !important;
    display: flex;
    justify-content: space-between !important;
    top: 0;
    padding-bottom: 10px !important;
    padding-top: 10px !important;
}

.dash-tabs ul {
    z-index: 2;
    background: #2f3031;
    gap: 55px;
    position: relative;
    top: -80px;
    left: 700px;
    border-radius: 50px !important;
    justify-content: space-between;
    width: 44%!important;
    padding: 0 !important;
}

.dash-tabs ul li button {
    padding: 15px 25px !important;
    border-radius: 30px !important;
}

.key-para {
    padding-top: 80px;
    padding-left: 50px
}

.key-para h3 {
    color: #F4F8FE;
    font-size: 20px;
    font-weight: 800
}

.key-para h4 {
    color: #F4F8FE;
    font-size: 18px
}

.key-para p {
    color: #f4f8feb3;
    padding-bottom: 20px;
    padding-right: 10px;
    font-size: 18px;
}

.key-btn {
    color: #fff;
    background: #7ab261;
    border-radius: 50px;
    padding: 15px 60px;
    font-size: 16px;
    transition: all .3s linear;
    position: relative;
    z-index: 1;
}

.key-btn:hover {
    background: #fff0;
    border: 1px solid #7ab261;
    color: #7ab261
}

.sensor-img img {
    width: 80%;
    margin-top: -100px
}

.sensor-img {
    text-align: center
}

.air-quality-sensor-bg {
    background: url(https://www.pranaair.com/wp-content/uploads/2024/02/air-quality-sensor-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 250px;
    border-radius: 15px;
    margin-top: 200px
}

.air-quality-sensor-content h2 {
    color: #F3F3F3;
    font-size: 30px;
    font-weight: 600
}

.air-quality-sensor-content h3 {
    color: #CDF8BA;
    font-size: 26px;
    font-weight: 600;
    padding-bottom: 20px
}

.know-more-btn {
    background: #0F2A03;
    text-decoration: none;
    color: #A0DC85;
    border: 1px solid #A0DC85;
    padding: 10px 40px;
    border-radius: 40px;
    transition: .3s linear
}

.know-more-btn:hover {
    background: #A0DC85;
    color: #fff
}

.air-quality-sensor-content {
    padding-top: 50px;
    padding-left: 100px
}

.air-quality-manage {
    padding-top: 150px
}

.manage-heading h2 {
    color: #263D4F;
    font-size: 32px;
    font-weight: 700;
    width: 80%;
    line-height: 40px
}

.gtq-btn {
    background: #7AB261;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    padding: 13px 60px;
    border-radius: 50px;
    float: right;
        border: none;
    transition: .3s linear
}

.manage-heading {
    margin-bottom: 0
}

.gtq-btn:hover {
    color: #7AB261;
    border: 1px solid #7ab261;
    background: #fff0
}

.borderr {
    border-bottom: 1px solid #c5c3c3cc;
    padding-bottom: 20px;
    margin-bottom: 30px
}

.mannage-para p {
    font-size: 18px;
    font-weight: 400;
    color: #263D4F
}

.mannage-para p strong {
    font-size: 18px;
    font-weight: 800
}

.managment-img img {
    width: 63%
}

.managment-img {
    text-align: left;
    padding-left: 50px
}

.managment-data {
    background: #E7EBEC;
    border-radius: 20px;
    margin-top: 30px;
    padding: 30px 0 0;
    margin-bottom: 0
}

.data-para {
    margin-left: -40px;
    padding-top: 0px;
    padding-right: 50px;
    line-height: 28px;
    font-size: 18px;
    font-weight: 400;
    color: #263D4F;
}

.air-standard-parameter ul {
        background: #fff0;
    margin: 0;
    list-style: none;
    width: 100% !important;
    padding: 0 !important;
    left: 0;
    top: 20px;
}
.page-tabs ul li button {
    border-radius: 30px !important;
    padding: 15px 40px !important;
}
.air-quality-standard-sec {
    padding-top: 50px
}

.air-quality-standard-title h2 {
    color: #263D4F;
    font-size: 32px;
    font-weight: 700;
    width: 100%;
    line-height: 40px
}

.key-title {
    margin: 0
}

.air-quality-standard-para p {
    color: #263D4F;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: -60px !important
}


.air-standard-parameter {
    display: flex
}

.air-standard-parameter li {
    padding: 10px;
    color: #263D4F;
    font-size: 16px;
    font-weight: 700;
    height: 50px;
    margin-bottom: 10px
}

.air-standard-parameter li strong {
    color: #263d4f8a;
    padding-bottom: 10px !important;
    display: block
}

.historic-para {
    margin-bottom: 0 !important
}

.mg-btm {
    margin-bottom: -20px
}

.air-standard-parameter li:nth-child(2) {
    background: #F4F8FE;
    padding-top: 10px
}

.air-standard-parameter li:nth-child(4) {
    background: #F4F8FE;
    padding-top: 10px
}

.air-standard-parameter li:nth-child(6) {
    background: #F4F8FE;
    padding-top: 10px
}

.historic-data-section {
    margin-top: 60px;
    background: url(https://www.pranaair.com/wp-content/uploads/2024/03/aqi-dashboard-bg-scaled.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 700px;
    padding-top: 80px
}

.historic-table-img ul {
    list-style: none;
    padding: 0;
    margin: 0
}

.historic-table-img ul li img {
    width: 100%;
    animation-name: floating;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out
}

@keyframes floating {
    0% {
        transform: translate(0, 0)
    }

    65% {
        transform: translate(0, 15px)
    }

    100% {
        transform: translate(0, 0)
    }
}

.historic-table-img {
    display: flex
}

.aqi-dashbord-img img {
    width: 100%;
    position: relative;
    top: 120px;
    animation-name: floating;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out
}

.historic-title h2 {
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    width: 100%;
    line-height: 40px;
    padding-bottom: 70px
}

.historic-para p {
    color: #ffffff8f;
    font-size: 16px
}

.historic-table-img ul li:nth-child(2) img {
    position: relative;
    top: -50px;
    animation-duration: 3s
}

.historic-table-img ul li:first-child img {
    animation-duration: 5s
}

.graph-img img {
    width: 100%
}

.highly-accurate-monitor {
    padding-top: 150px
}

.highly-accurate-heading h2 {
    color: #263D4F;
    font-size: 32px;
    font-weight: 700;
    margin: 0
}

.highly-accurate-heading p {
    color: #263D4F;
    font-size: 16px;
    padding-top: 10px
}

.graph-img {
    padding-top: 0;
    margin-bottom: 0;
}

.despite-para p {
    font-size: 16px;
    margin-top: -20px
}

.despite-para p strong {
    color: #263D4F;
    font-size: 18px
}

.dashbord-section {
    background: #0C0C0D;
    margin-top: 100px;
    padding-top: 50px
}

.dashbord-heading h2 {
    color: #F4F8FE;
    font-size: 32px;
    font-weight: 700;
    width: 80%;
    line-height: 52px
}

.dash-aqi {
    width: 80px
}

.mob-dash-img img {
    width: 70%;
    position: relative;
    top: 60px
}

.tv-dash-img img {
    width: 100%;
    margin-left: -110px
}

.web-dash-img img {
    width: 100%;
    margin-left: -20px
}

.dash-tabs .ult_tabitemname {
    overflow: visible
}

.dash-tabs {
    margin-bottom: 0;
    margin-top: 0px
}

.dash-content ul {
    gap: 30px;
    background: #fff0;
    margin: 0;
    list-style: none;
    display: flex;
    top: 30px;
    width: 100% !important;
    padding: 0 0 30px !important;
    left: 0;
    justify-content: center;
}

.tv-web-btn {
    margin-left: -170px !important
}

.tv-web-btn a:hover {
    color: #fff
}

.tv-web-btn a {
    border: 0 !important;
    background: #7AB261;
    display: flex;
    align-items: center;
    padding: 12px 30px;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    gap: 5px;
    border-radius: 50px;
    transition: .3s linear
}

.tv-web-btn li a img {
    width: 18px !important;
    filter: brightness(40.5)
}

.dash-tabs .ult_tabmenu {
    top: -30px !important;
    width: 45% !important
}

.aqi-text h6 {
    color: #7AB261;
    font-size: 16px
}

.aqi-text h3 img {
    width: 55px
}

.aqi-text h3 {
    color: #F4F8FE;
    font-size: 34px;
    font-weight: 600;
    padding-top: 3px;
    position: relative
}

.aqi-text {
    position: relative
}

.aqi-text:before {
    position: absolute;
    content: "";
    background-image: linear-gradient(45deg, transparent, #7d7c7c54, #7d7c7c00);
    width: 50%;
    height: 2px;
    bottom: -20px;
    left: 0
}

.dash-content ul li img {
    width: 44px
}

.dash-content ul li h4 {
    color: #F4F8FE;
    font-size: 22px;
    font-weight: 500;
    margin: 0
}

.dash-content ul li p {
    color: #F4F8FEC7;
    font-size: 16px;
    padding-top: 10px
}

.dash-content {
    padding-top: 10px
}

.dashbord-btn li:first-child a {
    background: #7AB261
}

.dashbord-btn li a img {
    width: 15px
}

.dashbord-btn li a {
    display: flex;
    align-items: center;
    padding: 12px 30px;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    gap: 5px;
    border-radius: 50px;
    transition: .3s linear
}

.dashbord-btn li:last-child a {
    border: 1px solid #fff
}

.dashbord-btn li:last-child a img {
    filter: brightness(11.5);
    width: 20px
}

.dashbord-btn {
    margin-left: -80px !important;
    margin-top: 20px !important
}

.dashbord-btn li:first-child a:hover {
    background: #fff0;
    border: 1px solid #fff
}

.dashbord-btn li:last-child a:hover {
    background: #7ab261;
    border: 0
}

.healt-score-img img {
    width: 100%;
    transition: .3s linear
}

.health-score-section {
    padding-top: 150px
}

.health-score-title h2 {
    color: #263D4F;
    font-size: 32px;
    font-weight: 800;
    line-height: 36px
}

.green-txt {
    color: #7AB261
}

.health-score-title {
    padding-bottom: 50px
}

.health-score-para p {
    color: #263D4F;
    font-size: 16px
}

.healt-score-text ul {
    list-style: none;
    margin: 0;
    padding: 0 8px;
    display: flex;
    width: 100%;
    align-items: center
}

.calculate-health-score {
    position: relative
}

.healt-score-text {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 1
}

.healt-score-img {
    position: relative;
    overflow: hidden;
    border-radius: 10px
}

.healt-score-img:before {
    position: absolute;
    content: "";
    background-image: linear-gradient(359deg, #181818, transparent);
    width: 100%;
    height: 50%;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 10px;
    z-index: 1
}

.healt-score-text ul li h3 {
    color: #F4F8FE;
    margin: 0;
    font-size: 18px;
    font-weight: 700
}

.healt-score-text ul li p {
    color: #f4f8fecf;
    font-size: 12px;
    padding-right: 30px;
    line-height: 18px
}

.healt-score-text ul li h4 {
    text-align: center;
    font-size: 32px;
    font-weight: 800
}

.score-clr {
    font-size: 12px
}

.healt-score-text ul li {
    width: 60%;
    padding-left: 10px
}

.healt-score-text ul li:last-child {
    width: 40%
}

.healt-score-img:hover img {
    transform: scale(1.05)
}

.calculate-health-score {
    position: relative;
    margin-bottom: 30px !important
}

.trust-section {
    padding-top: 150px
}

.trust-title h2 {
    color: #263D4F;
    font-size: 32px;
    font-weight: 800
}

.trust-title p {
    color: #263D4F
}

.all-company-sec {
    background: #F4F8FE;
    padding: 70px 0;
    margin-top: 50px
}

.dppc-guidelines {
    background: #0C0C0D;
    padding-top: 100px;
    padding-bottom: 100px
}

.dppc-heading h2 {
    color: #F4F8FE;
    font-size: 32px;
    font-weight: 700;
    padding-right: 100px;
    line-height: 40px;
    padding-bottom: 40px
}

.dppc-heading img {
    width: 80%
}

.dpcc-btn {
    background: #7AB261;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    padding: 9px;
    display: block;
    width: 25%;
    text-align: center;
    border-radius: 30px;
    margin-top: -30px;
    position: relative;
    margin-left: 150px;
    transition: .3s linear
}

.dpcc-btn:hover {
    color: #fcfcfc
}

.dpcc-guid-line h3 {
    color: #FFF;
    font-size: 31px;
    font-weight: 600;
    margin-top: 200px
}

.dpcc-guid-line h4 {
    color: #7AB261;
    font-size: 42px;
    font-weight: 800;
    display: flex;
    align-items: center;
    padding-top: 10px
}

.dpcc-guid-line h4 img {
    width: 50px
}

.site-coverd ul {
    list-style: none;
    padding: 35px 10px;
    margin: 50px 0 0;
    display: flex;
    align-items: center;
    gap: 80px;
    position: relative;
    background-image: linear-gradient(286deg, #56575C70, transparent);
    width: 80%;
    border-radius: 10px
}

.count {
    color: #fff;
    font-size: 80px;
    font-weight: 700;
    display: block
}

.site-coverd ul li h5 {
    color: #F4F8FE;
    font-size: 27px;
    font-weight: 500 !important;
    line-height: 30px
}

.blog-carousel-shortcode.blog-carousel-shortcode-id-1:not(.mode-masonry) article {
    margin-top: 30px !important;
    border-radius: 10px !important
}

.blog-heading h2 {
    color: #F4F8FE;
    font-size: 32px;
    font-weight: 700
}

.blog-heading {
    padding-top: 200px
}

.line {
    position: relative
}

.line:before {
    position: absolute;
    content: "";
    background-image: linear-gradient(45deg, #7d7c7c00, #7d7c7c80, #7d7c7c00);
    width: 100%;
    height: 2px;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 90px
}

.types-air-quality {
    padding-top: 150px
}

.types-of-tab ul {
      background: #e4e7ec;
    border-radius: 50px;
    justify-content: space-between;
    position: relative;
    top: -80px;
    left: 850px;
    width: 34% !important;
    margin-top: 0 !important;
    padding: 7px !important
}

.types-of-tab ul li a {
    border-radius: 50px
}
    .types-of-tab ul li button {
    border-radius: 30px !important;
    padding: 15px 25px !important;
}

.type-of-air-quality-heading h2 {
    font-size: 32px;
    color: #263D4F;
    font-weight: 700;
    padding-right: 200px;
    line-height: 40px
}

.types-img {
    width: 100%
}

.types-air-quality-contect {
  -webkit-backdrop-filter: blur(5.5px);
    background: #f4f8feba;
    border-left: 1px solid #ffffff52;
    border-right: 1px solid #ffffff59;
    margin-top: -130px;
    padding: 50px 50px 70px;
    position: relative;
    backdrop-filter: blur(10.5px);
}

.types-air-quality-contect h3 {
    color: #263D4F;
    font-size: 20px;
    font-weight: 800
}

.types-air-quality-contect p {
    color: #263d4fd6;
    font-size: 18px
}

.gaq-btn {
    background: #7AB261;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    float: right;
    padding: 10px 40px;
    border-radius: 50px;
    transition: .3s linear
}

.gaq-btn:hover {
    background: #fff0;
    border: 2px solid #7ab261;
    color: #7AB261
}

.tab {
    float: left;
    width: 30%;
    padding-top: 30px
}

.tab button {
    display: flex;
    background-color: inherit;
    color: #263d4f9c;
    padding: 22px 0;
    width: 65%;
    border: none;
    outline: none;
    text-align: left;
    cursor: pointer;
    transition: 0.3s;
    font-size: 16px;
    border-bottom: 1px solid #263d4f38;
    align-items: center;
    gap: 15px;
    font-weight: 600
}

.custom-tab button:hover {
    color: #7ab261
}

.custom-tab button.active {
    color: #7ab261
}

.tab button img {
    filter: brightness(.5);
    width: 20px
}

.custom-tab button.active img {
    filter: brightness(.9)
}

.tabcontent {
    float: left;
    padding: 30px 0 0;
    border-top: 1px solid #263d4f38;
    width: 70%;
    margin-top: 40px;
    animation: fadeEffect 1s
}

@keyframes fadeEffect {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.tabcontent p {
    color: #263D4FC7;
    font-size: 18px
}

.tabcontent p strong {
    color: #263D4F
}

.tab-para {
    padding-bottom: 30px
}

.app-slider-inner {
    margin-left: 230px;
    padding-bottom: 100px
}

.app-heading h2 {
    color: #263D4F;
    font-size: 32px;
    font-weight: 700
}

.app-slider-row {
    padding-top: 150px
}

.app-content h3 {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    color: #fff;
    font-weight: 800;
    margin: 0;
    position: relative
}

.app-content h3 img {
    width: 22px
}

.app-content p {
    color: #263D4F;
    font-size: 14px;
    font-weight: 700;
    line-height: 25px
}

.airqulality_contact_section.inner_container {
    margin-top: 100px;
    padding-top: 50px;
    background: #f0f8f0;
    overflow: visible !important;
    height: 400px
}

.airquality_inner_form {
    background: #fff;
    padding: 20px;
    border-radius: 15px;
    max-width: 950px;
    margin: 0 auto 30px;
    box-shadow: 2px 2px 11px 0 #ccc
}

.airqulality_contact_section .contact_content_box {
    background: #7AB261;
    padding: 40px 20px 75px;
    width: 35%;
    border-radius: 25px;
    position: relative;
    overflow: hidden
}

.airqulality_contact_section .wpb_column.vc_column_container.vc_col-sm-9 {
    width: 60%;
    padding: 6px 0 0 40px
}

.airquality_contact_box input.wpcf7-form-control.has-spinner.wpcf7-submit {
    background: #7AB261;
    border: none;
    width: auto;
    margin-top: 30px;
    color: #fff;
    font-size: 16px;
    border-radius: 5px
}

.title_heading {
    text-align: center;
    color: #263D4F;
    font-size: 32px;
    margin-bottom: 0;
    font-weight: 800
}

.introducing_box p {
    color: #677580;
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 30px
}

.text-center {
    text-align: center;
    padding-bottom: 40px
}

.introducing_box {
    padding: 15px 0
}

.contact_information_box h4 {
    font-size: 25px;
    color: #fff
}

.contact_information_box p {
    color: #fff;
    font-weight: 400;
    padding-top: 10px
}

ul.contact_info {
    list-style: none;
    padding: 0;
    margin: 0
}

.contact_info li {
    display: flex;
    align-items: center;
    color: #fff;
    padding-bottom: 25px;
    font-size: 16px;
    font-weight: 300
}

.contact_info li i {
    font-size: 21px;
    margin-right: 10px
}

.contact_content_box:after {
    background: url(https://www.pranaair.com/wp-content/uploads/2022/08/circle_bg.png) no-repeat;
    width: 160px;
    height: 160px;
    content: "";
    position: absolute;
    bottom: -92px;
    left: -25px;
    z-index: 0;
    background-size: 66%
}

.airquality_contact_box input.wpcf7-form-control {
    width: 100%;
    margin-bottom: 15px !important;
    border: none;
    border-bottom: 1px solid #60606073;
    padding-left: 4px
}

.airquality_contact_box label {
    width: 100%
}

.airquality_contact_box textarea.wpcf7-form-control.wpcf7-textarea {
    max-height: 78px;
    border: none;
    border-bottom: 1px solid #60606073;
    padding-left: 4px
}

.also-like {
    padding-top: 100px;
    padding-bottom: 100px
}

.also-like-heading h2 {
    color: #263D4F;
    font-size: 32px;
    font-weight: 800
}

.may-also ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center
}

.may-also ul li a img {
    width: 95%;
    transition: .3s linear
}

.may-also ul li {
    text-align: center;
    overflow: hidden
}

.may-also ul li a img:hover {
    transform: scale(1.02)
}

.may-also ul li h5 {
    display: flex;
    align-items: self-end;
    justify-content: space-between;
    color: #263D4F;
    font-size: 22px;
    font-weight: 700;
    padding: 10px
}

.may-also ul li h5 img {
    width: 15px
}

.may-also ul li a {
    text-decoration: none
}

.app-content {
    width: 80%;
    margin: 0 auto;
    margin-top: -80px
}

.app-content p {
    text-align: left !important
}

.app-air-slider p {
    text-align: center;
    margin: 0
}

.app-air-slider img {
    width: 100%
}

.video-sec {
    width: 500px;
    float: right
}

.all-product .row {
    display: flex;
    gap: 50px
}

.product-tabs .ult_tabmenu {
    justify-content: space-between;
    background: #E4E7EC;
    padding: 5px;
    border-radius: 50px;
    width: 30%;
    margin-right: 0;
    margin-top: -60px;
    margin-bottom: 50px
}

.product-tab-title.current {
    background: #fff !important;
    padding: 2px 30px !important;
    border-radius: 50px !important
}

.product-tab-title .ult-span-text {
    font-size: 18px !important;
    font-weight: 500
}

.custom-tab {
    float: left;
    width: 30%;
    padding-top: 30px
}

.custom-tab button {
    display: flex;
    background-color: inherit;
    color: #263d4f9c;
    padding: 22px 0;
    width: 65%;
    border: none;
    outline: none;
    text-align: left;
    cursor: pointer;
    transition: 0.3s;
    font-size: 16px;
    border-bottom: 1px solid #263d4f38;
    align-items: center;
    gap: 15px;
    font-weight: 600
}

.custom-tab button img {
    filter: brightness(.5);
    width: 20px
}

.custom-tab-content {
    float: left;
    padding: 30px 0 0;
    border-top: 1px solid #263d4f38;
    width: 70%;
    margin-top: 40px;
    animation: fadeEffect 1s
}

.custom-tab-content p {
    color: #263D4FC7;
    font-size: 18px
}

.custom-tab-content p strong {
    color: #263D4F
}

.healt-impact-img img {
    width: 100%
}

.healt-impact-img {
    text-align: right
}

.new-hm-video iframe {
    width: 100%;
    height: 700px
}

.app-tab.active {
    color: #67b455
}

.app-tab {
    padding: 10px 0;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
    font-size: 16px;
    margin-bottom: 20px;
    color: #263d4f9c;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #263d4f38;
    font-weight: 600;
    gap: 10px
}

.app-tab-content.active {
    display: block;
    opacity: 1
}

.app-tab-content {
    display: none;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    -webkit-animation: fadeEffect 1s;
    animation: fadeEffect 1s
}

.main-tab {
    display: flex;
    gap: 50px;
    padding-top: 50px
}

ul.application-tabs {
    background: #fff0;
    margin: 0;
    list-style: none;
    padding: 0 !important;
    width: 70% !important
}

.app-tab img {
    filter: brightness(.5);
    width: 20px
}

.app-tab.active img {
    filter: brightness(.9)
}

.app-key-feature-mobile-bg ul {
    list-style: none;
    padding: 0 !important;
    margin: 0;
    width: 90% !important;
    background: transparent !important
}

.app-tab-content p {
    color: #263D4FC7;
    font-size: 18px
}

.app-tab-content p strong {
    color: #263D4F
}

.marquee div span img {
    display: inline-block;
    width: 15%;
    background: #fff;
    border-radius: 10px;
    margin: 0 7px 5px
}

.popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.popup-content {
    background-color: #fff;
    padding: 10px 10px 3px;
    border-radius: 5px;
    position: relative;
}

.close {
    position: absolute;
    top: 0px;
    right: -40px;
    cursor: pointer;
    color: #fff;
    font-size: 50px;
}

#playButton {
    cursor: pointer;
    position: relative;
    top: 350px;
    left: 350px;
    background: none;
    border: none;
    z-index: 1;
}

#playButton img {
    width: 60px;
}

.how-to-work-sec {
    background: #171819;
    border-radius: 60px 60px 0 0;
    padding-top: 50px;
    margin-top: 100px;
}

.work-box ul {
    align-items: normal;
    margin-left: 70px;
    padding: 0;
    list-style: none;
    display: flex;
    margin-top: 40px;
}

.work-box ul li:first-child {
    width: 40%;
}

.work-box ul li img {
    width: 100%;
    border-radius: 15px;
}

.work-box ul li:last-child {
    width: 55%;
    padding-left: 15px;
}

.work-box ul li h3 {
    color: #ffffff2e;
    font-size: 30px;
    margin: 0;
    line-height: 32px;
}

.work-box ul li h4 {
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 0;
}

.work-box ul li p {
    color: #ffffffd4;
    font-size: 14px;
    line-height: 22px;
}

.work-heading {
    text-align: center;
    z-index: 99;
    background: #7ba75e;
    border-bottom: 10px solid #0202024f;
    border-radius: 25px;
    width: 30%;
    margin: 50px auto 30px;
    padding: 30px 50px;
    position: relative;
}

.work-heading h3 {
    font-size: 24px;
    color: #fff;
    margin: 0;
    position: relative;
}

.work-heading p {
    font-size: 18px;
    color: #fff;
    margin: 0;
    font-weight: 300;
}

.work-heading:before {
    position: absolute;
    content: "";
    border: 10px solid #9DD77730;
    margin: 0 auto;
    left: -200px;
    width: 800px;
    top: -40px;
    border-radius: 0 0 25px 25px;
    height: 100px;
    border-top: 0;
    border-left: 3px solid #9dd77729;
    border-right: 3px solid #9dd77729;
    z-index: -1;
}

.work-heading:after {
    position: absolute;
    content: "";
    border: 10px solid #9DD77730;
    margin: 0 auto;
    left: -200px;
    width: 800px;
    top: 90px;
    border-radius: 0 0 25px 25px;
    height: 100px;
    border-top: 0;
    border-left: 3px solid #9dd77729;
    border-right: 3px solid #9dd77729;
    z-index: -1;
    transform: rotate(180deg);
}

.accurate-box {
background: #eaeff5;
    border-top: 1px solid #0000004a;
    border-bottom: 1px solid #0000004a;
    position: relative;
    padding: 30px 0;
}
.highly-accurate-heading {
    padding-bottom: 20px;
    padding-left: 190px;
}
.accurate-box:before {
    position: absolute;
    content: "";
    background: url(https://www.pranaair.com/wp-content/uploads/2025/01/graph-line.png);
    background-size: 30%;
    background-position: bottom;
    width: 100%;
    height: 110px;
    background-repeat: no-repeat;
}

.despite-para h3 {
    color: #7AB261;
    font-size: 18px;
    margin: 0;
    font-weight: 400;
}

.despite-para h4 {
    color: #2E2D37;
    font-size: 22px;
    margin: 0;
    width: 60%;
}

.despite-para {
    padding-left: 300px;
    padding-top: 20px;
}

.graph-btn a {
    background: #67b455;
    color: #fff;
    padding: 10px 30px;
    float: right;
    margin-right: 300px;
    border-radius: 40px;
    margin-top: 20px;
}

@keyframes waves {
    0% {
        -webkit-transform: scale(0.2, 0.2);
        transform: scale(0.2, 0.2);
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    }

    50% {
        opacity: 0.9;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
    }

    100% {
        -webkit-transform: scale(0.9, 0.9);
        transform: scale(0.9, 0.9);
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    }
}

.video-main {
    position: relative;
    top: 238px;
    left: 82px;
    z-index: 0;
}

.waves {
    position: absolute;
    width: 150px;
    height: 150px;
    background: rgb(20 20 20 / 45%);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    border-radius: 100%;
    z-index: 0;
    -webkit-animation: waves 3s ease-in-out infinite;
    animation: waves 3s ease-in-out infinite;
    margin: 0 auto;
    top: 49%;
    left: 44%;
    transform: translate(-50%, -50%);
}

.wave-1 {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
}

.wave-2 {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
}

.wave-3 {
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
}


.icon-button {
    position: relative;
    z-index: 1 !important;
}

.video-button-holder {
    z-index: 1;
}

.work {
    top: 34%;
    left: 37%;
    background: rgb(255 246 246 / 33%);
}

.container {
    overflow: hidden;
    position: relative
}

.marquee {
    position: relative;
    overflow: hidden;
    width: 100%;
    margin: auto 0
}

.marquee-inner {
    display: flex;
    animation: marquee 10s linear infinite;
    gap: 10px
}

.marquee-inner-rgt {
gap: 10px;
    animation: 10s linear infinite marquee-rgt;
    display: flex
;
    padding-top: 15px;
}

.marquee-inner img {
    width: 80%
}

.marquee-inner-rgt img {
    width: 80%;
}

.all-company-sec .wpb_content_element {
    margin-bottom: 20px;
}

@keyframes marquee {
    0% {
        transform: translateX(0)
    }

    100% {
        transform: translateX(-100%)
    }
}

@keyframes marquee-rgt {
    0% {
        transform: translateX(-100%)
    }

    100% {
        transform: translateX(0)
    }
}

.marquee-img-box ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 25px;
}

.marquee-img-box ul li {
    width: 170px;
    text-align: center;
    background: #fff;
    height: 100px;
    padding-top: 10px;
}

.customre-exp-heading h2 {
    color: #263D4F;
    font-size: 32px;
    font-weight: 700;
    margin: 0;
}

.customre-exp-heading p {
    color: #263D4F;
    font-size: 16px;
    font-weight: 200;
}

.customre-sec {
    padding-top: 150px;
    padding-bottom: 150px;
}

.customre-sec .vc_row {
    overflow: visible;
}

.review-box p img {
    width: 30px;
}

.customre-experience-slider {
    margin-left: 220px;
}

.customre-experience-slider .owl-nav {
    position: relative;
    top: 30px;
    left: 50px;
}

.review-box p {
    color: #263D4FC7;
    font-size: 16px;
    line-height: 28px;
    border-bottom: 1px solid #7AB261;
    padding-bottom: 10px;
}

.hide-txt {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: 0 !important;
}

.review-img {
    margin: 0 10px;
    border: 1px solid #cfcfcf;
    border-radius: 25px;
    padding: 40px 40px 20px;
}

.review-box ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.review-box ul li:last-child {
    display: flex;
    align-items: center;
    gap: 2px;
    width: 100%;
    justify-content: flex-end;
}

.review-box ul li img {
    width: 6%;
}

.review-box ul li:first-child {
    width: 100%;
}

.review-box ul li:first-child h3 {
    color: #263D4F;
    font-size: 16px;
}

.sensor-heading-box h2 {
    color: #fff;
}

.impact-img img {
    width: 95%;
    height: auto;
}

.impact-txt {
    width: 50%;
}

.impact-txt a {
    background: #7AB261;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    padding: 10px 30px;
    display: block;
    width: 25%;
    text-align: center;
    border-radius: 50px;
    margin-top: 30px;
    transition: .3s linear;
    border: 0;
}

.impact-txt a:hover {
    background: #5cae36;
}

.impact-img {
    padding-top: 150px;
}
    .carousel-controls button {
    border-radius: 8px;
    background: #7AB261;
    opacity: 1;
    width: 4%;
    height: 30%;
}

.carousel-control-next {
    left: 60px;
    right: 0;
}

@media only screen and (min-width:320px) and (max-width:767px) {
    .marquee div span img {
        width: 19%;
        margin: 0 0 -5px;
        border-radius: 5px
    }

    .card-text ul {
        padding-top: 5px !important
    }

    .ambient-banner {
        padding-top: 60px;
        text-align: center
    }

    .ambient-banner h1 {
        font-size: 32px;
        margin-top: 0;
        line-height: 34px;
        width: 100%;
        text-align: left
    }

    .ambient-banner p {
        font-size: 16px;
        line-height: 24px;
        padding-top: 0;
        width: 80%;
        margin: 0;
        padding-bottom: 20px;
        text-align: left
    }

    .heading-para {
        font-size: 24px !important;
        width: 100% !important;
        margin-bottom: -10px !important
    }

    .ambient-img {
        padding-top: 20px
    }

    .ambient-img img {
        width: 90%
    }

    .hero-section {
        height: 600px;
        margin-top: 0;
        background-position: -420px center
    }

    .ambient-banner a {
        font-size: 16px;
        margin-top: 0;
        width: 70%;
        padding: 12px 0
    }

    .hero-section:before {
        position: absolute;
        content: "";
        background-image: linear-gradient(180deg, #010400, transparent);
        width: 100%;
        height: 300px;
        left: 0;
        right: 0;
        top: 0
    }

    .explore-monitor {
        margin-top: 0;
        padding-top: 70px
    }

    .all-monitore-tite h2 {
        font-size: 24px;
        margin: 0;
        line-height: 26px;
        padding-bottom: 10px
    }

    .card-text a:before {
        width: 1%;
        height: 100px;
        left: 150px;
        bottom: -80px;
        right: 0;
        margin: 0 auto
    }

    .all-monitore-tite p {
        font-size: 16px;
        padding-bottom: 0
    }

    .explore {
        font-size: 18px
    }

    .page-tabs ul {
        top: 0;
        width: 90% !important;
        gap: 20px;
        padding: 5px 0 !important;
        left: 0
    }

    li.ult_tab_li.home-tab-title.current a {
        padding: 3px 45px !important
    }

    .page-tabs ul li {
        height: 40px
    }

    .air-standard-parameter li:nth-child(2) {
        padding-top: 0;
        margin-bottom: 0
    }

    .air-standard-parameter li:nth-child(4) {
        padding-top: 0;
        margin-bottom: 0;
        margin-top: 0
    }

    .air-standard-parameter li:nth-child(6) {
        padding-top: 0
    }

    .prdocut-card {
        box-shadow: 0 0 20px #dbe0e770;
        padding: 15px 10px;
        width: 100%;
        margin-bottom: 20px;
        height: auto
    }

    .arrow-link img {
        width: 17px;
        margin-top: -5px
    }

    .dashbord-section {
        margin-top: 80px
    }

    .card-img img {
        width: 130px;
        padding: 10px 0
    }

    .card-text a {
        font-size: 14px
    }

    .card-text {
        padding-top: 30px 5px 0
    }

    span.ult-span-text.no_icon.ult_tab_display_text {
        display: inline !important
    }

    .card-text ul li {
        display: flex;
        align-items: baseline;
        gap: 5px
    }

    .air-pollution-sec {
        padding-top: 70px;
        height: auto;
        padding-bottom: 50px
    }

    ul.dashbord-btn {
        width: 100% !important
    }

    .pranaasir-slider-title h2 {
        font-size: 22px;
        line-height: 34px;
        padding-right: 0
    }

    .pranaasir-slider-title {
        margin-bottom: 0
    }

    .comp {
        width: 80%;
        float: none;
        border-radius: 10px;
        padding: 5px 20px;
        margin-top: 20px
    }

    .comp p {
        font-size: 12px;
        line-height: 22px
    }

    .leed {
        font-size: 16px
    }

    .air-pollution-sec:before {
        display: none
    }

    .air-pollution-sec:after {
        display: none
    }

    .air-pollution-slider {
        padding: 30px;
        width: 90%;
        margin: 20px auto;
        height: auto
    }

    .type-tab-title a {
        padding: 3px !important
    }

    .mob-flex {
        margin-top: 0;
        display: flex;
        align-items: center
    }

    .garph-line {
        margin-bottom: 0
    }

    .air-pollution-box ul {
        flex-direction: column
    }

    .air-pollution-box ul li:first-child {
        width: 60%
    }

    .air-pollution-box ul li h3 {
        font-size: 15px;
        line-height: 22px
    }

    .air-pollution-box ul li p {
        font-size: 12px;
        width: 100%;
        line-height: 17px
    }

    .air-pollution-box {
        height: 250px;
        padding: 10px 15px
    }

    .tailored ul {
        display: flex;
        flex-direction: column
    }

    .tailored ul li h3 {
        font-size: 15px;
        line-height: 22px
    }

    .tailored ul li p {
        font-size: 12px;
        width: 100%;
        line-height: 20px;
        padding-top: 5px
    }

    ul.air-poll-box-last-row {
        display: block
    }

    ul.air-poll-box-last-row li {
        display: inline-block;
        width: 49%
    }

    .tailored {
        height: 250px;
        margin-right: 5px;
        padding: 10px 15px 0
    }

    .tailored ul li {
        width: 100%
    }

    .tailored ul li:first-child {
        width: 60%
    }

    .hassle {
        height: 240px;
        padding: 10px 15px;
        margin-left: 5px
    }

    .hassle ul {
        flex-direction: column
    }

    .hassle ul li:first-child {
        width: 60%
    }

    .hassle ul li {
        width: 100%
    }

    .hassle ul li h3 {
        font-size: 15px;
        line-height: 21px
    }

    .hassle ul li p {
        font-size: 12px;
        width: 100%;
        line-height: 18px;
        padding-top: 5px
    }

    .versatile ul li img {
        width: 90%
    }

    .versatile {
        height: 150px;
        padding: 20px 10px 0;
        margin-top: 20px
    }

    .last-box {
        width: 190%;
        margin-right: 0
    }

    .versatile ul li {
        width: 100%
    }

    .versatile ul li:first-child {
        width: 50%
    }

    .accurate-text h2 {
        font-size: 14px
    }

    .accurate-text p {
        color: #F3F3F3;
        font-size: 18px;
        line-height: 25px;
        padding-right: 0;
        padding-bottom: 10px;
        margin: 0
    }

    .garph-line img {
        width: 100%;
        margin-left: 0
    }

    .accurate-icon img {
        width: 120px;
        margin-right: -15px
    }

    .gases-sec {
        margin-top: 80px;
        padding-bottom: 20px;
        padding-top: 50px
    }

    .gaes-img img {
        left: 0;
        height: auto
    }

    .gases-text {
        margin-left: 0
    }

    .gases-text h2 {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 50px;
        padding-right: 0;
        padding-top: 10px
    }

    .gases-text p {
        font-size: 16px
    }

    .gases-text a {
        font-size: 15px;
        padding: 10px 30px;
        width: 80%
    }

    .most-accurate-sec {
        margin-top: 0;
        background: #0c0c0d
    }

    .accurate-text {
        padding-left: 0;
        padding-top: 0;
        margin-bottom: 10px
    }

    .home-video {
        padding-top: 70px
    }

    .video-title h3 {
        font-size: 28px;
        padding-bottom: 20px
    }

    .require-slider {
        padding-top: 0
    }

    .require-title h2 {
        font-size: 25px;
        padding-right: 0;
        line-height: 30px;
        padding-bottom: 0
    }

    .require-air-slider h3 {
        padding-bottom: 5px
    }

    .require-slider-inner {
        margin-left: 0;
        width: 100% !important
    }

    .require-slider-inner .owl-nav {
        left: -60px;
        top: 0
    }

    .carousel-shortcode.carousel-shortcode-id-2.reposition-arrows .owl-nav .owl-prev {
        right: 60px !important
    }

    .key-parameter-sec {
        padding-top: 20px;
        margin-top: 20px
    }

    .key-title h2 {
        font-size: 20px;
        padding-top: 20px;
        width: 90%;
        line-height: 28px;
        padding-bottom: 20px;
        padding-left: 10px
    }

    .healt-impact-img {
        margin-bottom: 0
    }

    .air-pollution-img img {
        width: 100%
    }

    .key-parameter ul {
        gap: 0 !important
    }

    li.ult_tab_li.home-tab-title.key-tab-title.current a {
        padding: 2px 26px !important
    }

    .key-para {
        padding-top: 10px;
        padding-left: 0
    }

    .key-para h3 {
        font-size: 18px;
        margin: 0
    }

    .key-para h4 {
        font-size: 16px
    }

    .key-para p {
        font-size: 16px;
        padding-right: 0;
        padding-bottom: 0
    }

    img.para-bg {
        display: none
    }

    .key-btn {
        font-size: 14px;
        padding: 15px;
        margin-top: 20px;
        display: block;
        text-align: center
    }

    .air-quality-sensor-content {
        padding-top: 0;
        padding-left: 0
    }

    .air-quality-sensor-content h2 {
        font-size: 20px;
        margin: 0;
        line-height: 20px
    }

    .air-quality-sensor-content h3 {
        font-size: 18px;
        padding-bottom: 0
    }

    .sensor-img {
        margin-bottom: 0
    }

    .sensor-img img {
        width: 80%;
        margin-top: -100px;
        position: relative;
        top: 0
    }

    .air-quality-sensor-bg {
        height: 250px;
        margin-top: 100px;
        display: flex;
        flex-direction: column-reverse;
        padding: 10px;
        justify-content: space-between
    }

    .manage-heading h2 {
        font-size: 24px;
        width: 100%;
        line-height: 30px
    }

    .gtq-btn {
        font-size: 14px;
        padding: 10px;
        float: none;
        margin-top: 15px;
        display: block;
        text-align: center;
        width: 90%
    }

    .air-quality-manage {
        padding-top: 60px
    }

    .managment-img img {
        width: 100%
    }

    .managment-img {
        padding-left: 0;
        margin-bottom: 0
    }

    .mannage-para p {
        font-size: 16px;
        padding-bottom: 10px
    }

    .data-para {
        margin-left: 10px;
        padding-top: 10px;
        padding-right: 0
    }

    .air-quality-standard-sec {
        padding-top: 0
    }

    .air-quality-standard-title {
        margin-bottom: 0
    }

    .air-quality-standard-title h2 {
        font-size: 24px;
        width: 100%;
        line-height: 30px
    }

    .air-quality-standard-para p {
        padding-top: 10px;
        padding-bottom: 30px
    }

    .air-standard-parameter li {
        padding: 0;
        font-size: 14px;
        width: 115px;
        height: 70px !important
    }

    .may-also ul li h5 {
        font-size: 13px;
        padding: 5px;
        align-items: center
    }

    .may-also ul li h5 img {
        width: 11px
    }

    .air-standard-parameter {
        display: flex;
        width: 100%;
        overflow-y: scroll;
        gap: 0
    }

    .out {
        padding-top: 20px
    }

    .historic-data-section {
        margin-top: 0;
        height: auto;
        padding-top: 50px
    }

    .historic-title {
        margin: 0
    }

    .historic-title h2 {
        font-size: 24px;
        width: 100%;
        line-height: 34px;
        padding-bottom: 10px
    }

    .historic-table-img ul li:nth-child(2) img {
        top: -25px
    }

    .aqi-dashbord-img img {
        top: -20px
    }

    .highly-accurate-monitor {
        padding-top: 60px
    }

    .highly-accurate-heading h2 {
        font-size: 24px;
        line-height: 30px
    }

    .dash-tabs {
        margin-top: 0
    }

    .dashbord-heading h2 {
        font-size: 24px;
        width: 100%;
        line-height: 30px
    }

    .health-score-section {
        padding-top: 70px
    }

    .dash-tabs .ult_tabmenu {
        top: 20px !important;
        width: 100% !important
    }

    .aqi-text {
        padding-top: 40px
    }

    .dash-content ul li img {
        width: 35px
    }

    .dash-content ul li h4 {
        font-size: 18px
    }

    .mob-row {
        display: flex;
        flex-direction: column-reverse
    }

    .dash-content ul li {
        height: auto
    }

    .dash-content ul li h4 {
        padding-left: 15px
    }

    .dash-content ul li p {
        padding-left: 15px
    }

    .dash-content {
        padding-top: 0
    }

    .health-score-title {
        padding-bottom: 10px;
        margin-bottom: 0
    }

    .dashbord-btn {
        margin-left: 0px !important;
        margin-top: 20px !important
    }

    .dashbord-btn li a {
        padding: 10px 20px;
        font-size: 8px;
        gap: 4px;
        height: 40px
    }

    .mob-dash-img img {
        width: 90%;
        top: 60px
    }

    .tv-dash-img img {
        width: 100%;
        margin-left: -20px
    }

    .dash-content ul li:first-child a img {
        width: 18px
    }

    .healt-score-img {
        height: 150px
    }

    .calculate-health-score {
        margin-bottom: 15px !important
    }

    .trust-section {
        padding-top: 50px
    }

    .all-company-sec {
        padding: 20px 0;
        margin-top: 0
    }

    .dppc-guidelines {
        padding-top: 50px
    }

    .dppc-heading h2 {
        font-size: 24px;
        padding-right: 0;
        line-height: 32px;
        padding-bottom: 10px
    }

    .dppc-heading img {
        width: 100%
    }

    .dpcc-btn {
        font-size: 14px;
        padding: 10px;
        width: 50%;
        margin-left: 70px
    }

    .dpcc-guid-line h3 {
        font-size: 18px;
        margin-top: 50px;
        margin-bottom: 0
    }

    .dpcc-guid-line h4 img {
        width: 30px
    }

    .dpcc-guid-line h4 {
        font-size: 24px;
        padding-top: 0
    }

    .count {
        font-size: 45px
    }

    .site-coverd ul {
        padding: 15px 10px;
        margin: 20px 0 0;
        gap: 70px;
        width: 90%
    }

    .site-coverd ul li h5 {
        font-size: 16px;
        line-height: 30px
    }

    .blog-heading {
        padding-top: 70px
    }

    .blog-heading h2 {
        font-size: 24px;
        line-height: 30px
    }

    .line:before {
        top: 50px
    }

    .blog-carousel-shortcode.blog-carousel-shortcode-id-1.reposition-arrows .owl-nav .owl-prev {
        right: 60px !important
    }

    .types-air-quality {
        padding-top: 70px
    }

    .type-of-air-quality-heading h2 {
        font-size: 24px;
        padding-right: 40px;
        line-height: 30px;
        padding-bottom: 0
    }

    .types-of-tab ul {
        width: 100% !important;
        left: 0;
        background: #E4E7EC;
        border-radius: 50px;
        padding: 5px 5px !important;
        top: 0;
        margin-top: 0px !important
    }

    li.ult_tab_li.type-tab-title.current {
        border-radius: 30px !important
    }

    .types-air-quality-contect {
        margin-top: -40px;
        padding: 20px 10px 30px
    }

    .types-air-quality-contect h3 {
        font-size: 16px
    }

    .types-air-quality-contect p {
        font-size: 16px
    }

    .gaq-btn {
        font-size: 14px;
        float: none;
        padding: 10px 40px;
        text-align: center;
        display: block;
        margin-top: 15px
    }

    .tab button {
        padding: 15px 0;
        width: 90%;
        font-size: 10px;
        gap: 3px
    }

    .tabcontent p {
        font-size: 14px
    }

    .tabcontent {
        padding: 10px 0 0;
        margin-top: 30px
    }

    .tab-para {
        padding-bottom: 0
    }

    .app-slider-row {
        padding-top: 20px
    }

    .app-heading h2 {
        font-size: 24px
    }

    .carousel-shortcode.carousel-shortcode-id-3.reposition-arrows .owl-nav .owl-prev {
        right: 60px !important
    }

    .airqulality_contact_section.inner_container {
        margin-top: 30px;
        padding-top: 20px;
        height: auto
    }

    .title_heading {
        font-size: 24px;
        margin: 0 !important;
        text-align: left
    }

    .introducing_box p {
        font-size: 16px;
        padding-top: 5px;
        padding-bottom: 20px;
        text-align: left
    }

    .airqulality_contact_section .contact_content_box {
        padding: 30px 10px 50px;
        width: 100%
    }

    .airqulality_contact_section .wpb_column.vc_column_container.vc_col-sm-9 {
        width: 100%;
        padding: 30px 0 0 10px
    }

    .airquality_contact_box input.wpcf7-form-control.has-spinner.wpcf7-submit {
        width: 100%;
        margin-top: 30px;
        font-size: 16px;
        border-radius: 70px;
        display: block
    }

    .also-like {
        padding-top: 40px;
        padding-bottom: 50px
    }

    .also-like-heading h2 {
        font-size: 24px
    }

    .may-also ul {
        display: flex;
        align-items: center;
        gap: 3px;
        flex-wrap: wrap;
        justify-content: flex-start
    }

    .may-also ul li a img {
        width: 100px
    }

    .showing {
        overflow-x: scroll;
        width: 100%
    }

    .contentmy .row {
        gap: 10px
    }

    .require-slider-row {
        height: 600px
    }

    .blog-carousel-shortcode.blog-carousel-shortcode-id-1:not(.mode-masonry) article {
        height: auto !important
    }

    .dash-aqi {
        width: 70px
    }

    .require-content {
        height: auto
    }

    .accordion-button {
        width: 50% !important;
        padding: 10px !important
    }

    .accordion-item button {
        font-size: 14px
    }

    .video-sec {
        width: 330px !important;
        float: none !important;
        margin: 0 auto
    }

    .tv-web-btn {
        margin-left: 0px !important
    }

    .all-product .row {
        display: flex;
        gap: 0;
        flex-direction: column
    }

    .product-tabs .ult_tabmenu {
        margin-right: 0 !important;
        margin-top: 0px !important;
        margin-bottom: 10px !important;
        width: 100% !important
    }

    .product-tab-title.current {
        padding: 0 30px !important
    }

    .product-tab-title .ult-span-text {
        font-size: 14px !important
    }

    .healt-impact-img img {
        width: 100% !important
    }

    .new-hm-video iframe {
        height: 190px !important
    }

    .custom-tab button {
        font-size: 12px !important
    }

    .custom-tab-content {
        margin-top: 20px !important
    }

    .custom-tab-content p {
        font-size: 14px !important;
        line-height: 28px
    }

    .app-tab {
        font-size: 12px !important;
        margin-bottom: 10px !important;
        gap: 5px !important
    }

    .app-tab-content p {
        font-size: 14px !important;
        line-height: 28px !important
    }

    .main-tab {
        gap: 20px !important;
        padding-top: 20px !important;
        flex-direction: row
    }

    .app-key-feature-mobile-bg ul {
        width: 100% !important
    }

    .mg-btm {
        margin-bottom: 20px
    }

    .ult_tabmenu.style1 a.ult_a {
        padding: 0 5px
    }

    #playButton {
        left: 45px;
        top: 30px;
    }

    .close {
        top: -40px;
        right: 10px;
    }

    .popup-content iframe {
        height: 210px;
    }

    .popup-content {
        padding: 5px 5px 0px;
    }

    .video-main {
        top: -80px;
        left: 0px;
    }

    .work {
        top: 0px;
        left: 0px;
    }

    .how-to-work-sec {
        border-radius: 30px 30px 0 0;
        padding-top: 60px;
        margin-top: 20px;
    }

    .work-heading:before {
        display: none;
    }

    .work-heading:after {
        display: none;
    }

    .work-box ul li:first-child {
        width: 40%;
    }

    .work-box ul li:last-child {
        width: 90%;
    }

    .work-box ul li h3 {
        font-size: 24px;
        line-height: 22px;
    }

    .work-box ul li h4 {
        font-size: 16px;
        margin-bottom: 5px;
        line-height: 24px;
    }

    .sensor-heading-box h2 {
        font-size: 28px;
        line-height: 32px;
    }

    .work-box ul li p {
        font-size: 14px;
        line-height: 21px;
    }

    .work-heading {
        margin: 20px auto;
        width: 70%;
        padding: 20px 40px;
        z-index: 9;
    }

    .work-heading h3 {
        font-size: 20px;
    }

    .work-heading p {
        font-size: 16px;
    }

    .despite-para {
        padding-left: 20px;
        padding-top: 20px;
    }

    .despite-para h4 {
        width: 90%;
    }

    .graph-btn a {
        float: none;
        margin-right: 0px;
        margin-top: 0px;
        margin-left: 20px;
    }

    .accurate-box:before {
        background-size: 100%;
        width: 100%;
        height: 100px;
        top: 90px;
    }

    .customre-exp-heading h2 {
        font-size: 24px;
        line-height: 30px;
    }

    .customre-exp-heading p {
        font-size: 14px;
    }

    .customre-experience-slider {
        margin-left: 0px;
    }

    .customre-experience-slider .owl-nav {
        top: 20px;
        left: 70px;
    }

    .customre-sec {
        padding-top: 60px;
        padding-bottom: 100px;
    }

    .marquee-img-box ul {
        gap: 15px;
    }

    .marquee-img-box ul li {
        width: 110px;
        height: 70px;
    }

    .marquee-inner img {
        width: 90%;
    }

    .marquee-inner-rgt img {
        width: 90%;
    }

    .marquee-inner-rgt {
        animation: marquee-rgt 5s linear infinite;
    }

    .marquee-inner {
        animation: marquee-rgt 5s linear infinite;
    }

    .work-box ul {
        margin-left: 10px;
    }

    .review-img {
        padding: 20px 30px 20px;
    }
}

@media only screen and (min-width:767px) and (max-width:1023px) {
    .marquee div span img {
        width: 18%;
        border-radius: 10px;
        margin: 0 3px 3px
    }

    .hero-section {
        height: 400px;
        margin-top: -50px
    }

    .ambient-banner {
        padding-top: 100px;
        padding-left: 20px
    }

    .ambient-banner h1 {
        font-size: 28px;
        line-height: 40px;
        width: 80%
    }

    .ambient-banner p {
        font-size: 16px;
        line-height: 27px;
        padding-top: 0;
        width: 80%
    }

    .ambient-img img {
        width: 90%
    }

    .ambient-img {
        text-align: center;
        padding-top: 50px
    }

    .ambient-banner a {
        font-size: 18px;
        padding: 10px 0;
        gap: 10px
    }

    .all-monitore-tite p {
        font-size: 14px
    }

    .all-monitore-tite h2 {
        font-size: 28px;
        line-height: 36px
    }

    .page-tabs ul {
        top: -150px;
        width: 36% !important;
        gap: 50px;
        left: 200px
    }

    .may-also ul li h5 {
        font-size: 16px
    }

    .prdocut-card {
        box-shadow: 0 0 20px #dbe0e770;
        padding: 15px 10px;
        width: 100%;
        margin-bottom: 20px
    }

    .pranaasir-slider-title h2 {
        font-size: 22px;
        line-height: 32px;
        padding-right: 0
    }

    .air-pollution-box ul li h3 {
        font-size: 14px
    }

    .air-pollution-box ul li p {
        font-size: 14px;
        width: 100%;
        line-height: 20px
    }

    .air-pollution-box {
        height: 110px;
        padding: 30px 30px
    }

    .air-pollution-box ul li:first-child {
        width: 70%
    }

    .versatile {
        height: 150px;
        padding: 30px 30px 0
    }

    .tailored ul li:first-child {
        width: 20%
    }

    .tailored {
        height: 160px;
        padding: 10px 30px 0
    }

    ul.air-poll-box-last-row {
        flex-direction: column
    }

    .tailored ul li h3 {
        font-size: 14px;
        line-height: 22px;
        padding-top: 30px
    }

    .tailored ul li p {
        font-size: 14px;
        width: 80%;
        line-height: 24px;
        padding-top: 5px
    }

    .hassle ul li:first-child {
        width: 22%
    }

    .hassle ul {
        align-items: center
    }

    .hassle {
        padding: 10px 30px 10px
    }

    .last-box {
        width: 92%;
        margin-right: 0
    }

    .versatile ul li:first-child {
        width: 20%
    }

    .versatile ul {
        align-items: center
    }

    .versatile {
        padding: 20px 30px 10px
    }

    .gases-sec {
        padding-top: 50px
    }

    .home-video {
        padding-top: 80px
    }

    .require-slider {
        padding-top: 80px
    }

    .comp {
        width: 90%;
        padding: 10px 20px
    }

    .carousel-shortcode.carousel-shortcode-id-1.reposition-arrows .owl-nav .owl-next {
        right: -50px !important
    }

    .accurate-text {
        padding-left: 20px
    }

    .accurate-text p {
        font-size: 24px;
        line-height: 40px;
        padding-right: 0;
        padding-bottom: 20px;
        margin: 0;
        padding-top: 20px
    }

    .gases-text {
        margin-left: 0
    }

    .gaes-img img {
        width: 100%;
        left: 0;
        height: auto
    }

    .gases-text h2 {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 30px;
        padding-right: 0
    }

    .gases-text p {
        font-size: 14px
    }

    .gases-text a {
        font-size: 15px;
        padding: 10px 30px;
        width: 50%
    }

    .require-title h2 {
        font-size: 24px;
        padding-right: 0;
        line-height: 34px
    }

    .require-content {
        padding: 10px 10px 20px
    }

    .carousel-shortcode.carousel-shortcode-id-2.reposition-arrows .owl-nav .owl-next {
        right: -50px !important
    }

    .key-title h2 {
        font-size: 22px;
        padding-top: 0;
        width: 70%;
        line-height: 32px;
        padding-left: 20px
    }

    .key-parameter ul {
        gap: 6px !important;
        width: 46% !important;
        top: 0;
        left: 170px
    }

    .tab-card {
        flex-direction: row !important
    }

    .ult_tabitemname .vc_row {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px
    }

    .mob-row {
        flex-direction: column-reverse !important
    }

    .ult_tabitemname .vc_row .vc_col-sm-6 {
        width: 100%
    }

    .key-para {
        padding-top: 10px;
        padding-left: 10px
    }

    .key-para p {
        font-size: 14px;
        padding-bottom: 10px;
        padding-right: 15px
    }

    .air-pollution-img img {
        width: 100%
    }

    .key-para h3 {
        font-size: 18px
    }

    .air-quality-sensor-content {
        padding-top: 60px;
        padding-left: 20px
    }

    .sensor-img img {
        width: 80%;
        margin-top: -50px
    }

    .air-quality-sensor-bg {
        margin-top: 100px
    }

    .air-quality-manage {
        padding-top: 70px
    }

    .manage-heading h2 {
        font-size: 28px;
        width: 100%;
        line-height: 40px
    }

    .managment-img img {
        width: 90%
    }

    .managment-img {
        text-align: left;
        padding-left: 10px
    }

    .mannage-para p {
        font-size: 14px;
        padding-bottom: 10px
    }

    .data-para {
        margin-left: 0;
        padding-top: 0;
        padding-right: 0
    }

    .air-quality-standard-sec {
        padding-top: 50px
    }

    .air-quality-standard-title h2 {
        font-size: 24px;
        width: 100%;
        line-height: 32px
    }

    .air-quality-standard-para p {
        padding-top: 10px
    }

    .historic-data-section {
        margin-top: 50px;
        padding-top: 40px;
        height: 550px
    }

    .historic-title h2 {
        font-size: 22px;
        width: 100%;
        line-height: 30px;
        padding-bottom: 70px
    }

    .aqi-dashbord-img img {
        top: 70px
    }

    .historic-table-img ul li:nth-child(2) img {
        top: -30px
    }

    .highly-accurate-monitor {
        padding-top: 80px
    }

    .dashbord-section {
        margin-top: 80px;
        padding-top: 30px
    }

    .dashbord-heading h2 {
        font-size: 32px;
        width: 60%
    }

    .dash-content ul {
        width: 100% !important;
        gap: 10px
    }

    .dash-tabs .ult_tabmenu {
        width: 62% !important;
        left: 130px
    }

    .dashbord-btn li a {
        padding: 12px 50px;
        font-size: 13px
    }

    .tv-dash-img img {
        margin-left: -40px
    }

    .health-score-section {
        padding-top: 70px
    }

    .score-clr {
        font-size: 10px
    }

    .healt-score-text ul li h4 {
        font-size: 24px
    }

    .healt-score-text ul {
        padding: 0 7px;
        width: 100%
    }

    .healt-score-text ul li h3 {
        font-size: 12px;
        line-height: 15px
    }

    .trust-section {
        padding-top: 50px
    }

    .dppc-guidelines {
        padding-top: 50px
    }

    .dppc-heading h2 {
        font-size: 24px;
        padding-right: 10px;
        line-height: 34px;
        padding-bottom: 20px
    }

    .dpcc-guid-line h3 {
        font-size: 24px;
        margin-top: 90px
    }

    .dpcc-guid-line h4 {
        font-size: 30px
    }

    .count {
        font-size: 40px
    }

    .site-coverd ul li h5 {
        font-size: 20px;
        line-height: 28px
    }

    .site-coverd ul {
        padding: 30px 10px;
        margin: 30px 0 0;
        gap: 30px
    }

    .dpcc-btn {
        font-size: 16px;
        padding: 9px;
        width: 45%;
        margin-top: -30px;
        margin-left: 50px
    }

    .blog-heading {
        padding-top: 150px
    }

    .blog-carousel-shortcode.blog-carousel-shortcode-id-1.reposition-arrows .owl-nav .owl-prev {
        right: 60px !important
    }

    .types-air-quality {
        padding-top: 70px
    }

    .type-of-air-quality-heading h2 {
        font-size: 26px;
        padding-right: 0;
        line-height: 33px
    }

    .types-of-tab ul {
        width: 50% !important;
        left: 160px;
        background: #E4E7EC;
        border-radius: 50px;
        padding: 4px 5px !important
    }

    .types-of-tab ul a {
        border-radius: 30px
    }

    .app-slider-row {
        padding-top: 50px
    }

    .app-heading h2 {
        font-size: 28px
    }

    .carousel-shortcode.carousel-shortcode-id-3.reposition-arrows .owl-nav .owl-next {
        right: -40px !important
    }

    .also-like {
        padding-top: 50px
    }

    .also-like-heading h2 {
        font-size: 28px
    }

    .healt-score-text ul li p {
        padding-right: 0
    }

    .air-standard-parameter {
        overflow-x: scroll
    }

    .air-standard-parameter li {
        padding: 20px 20px;
        height: 100px;
        width: 150px
    }

    .video-sec {
        width: 345px !important;
        float: none !important;
        margin: 0 auto
    }

    .tv-web-btn {
        margin-left: -100px !important
    }

    .product-tabs .ult_tabmenu {
        width: 55% !important
    }

    .product-tab-title.current {
        padding: 2px 15px !important
    }

    .healt-impact-img img {
        width: 100% !important
    }

    .airqulality_contact_section.inner_container {
        height: auto
    }

    .new-hm-video iframe {
        height: 400px !important
    }

    .heading-para {
        font-size: 28px !important;
        margin-bottom: 10px !important
    }

    .require-slider-inner {
        margin-left: 100px
    }

    #playButton {
        top: 150px;
        left: 150px;
    }

    .video-main {
        top: 38px;
        left: -30px;
    }

    .how-to-work-sec {
        border-radius: 50px 50px 0 0;
        padding-top: 60px;
    }

    .work-box ul li h3 {
        font-size: 26px;
    }

    .work-box ul li:last-child {
        width: 70%;
    }

    .work-box ul li h4 {
        font-size: 16px;
    }

    .work-heading {
        margin: 20px auto;
        width: 70%;
    }

    .despite-para {
        padding-left: 30px;
    }

    .despite-para h4 {
        font-size: 20px;
        width: 90%;
    }

    .graph-btn a {
        padding: 10px 30px;
        float: right;
        margin-right: 50px;
        border-radius: 40px;
        margin-top: 20px;
    }

    .accurate-box:before {
        background-size: 70%;
        width: 100%;
        height: 120px;
    }

    .marquee-img-box ul li {
        width: 130px;
        height: 80px;
    }

    .customre-experience-slider {
        margin-left: 20px;
    }

    .customre-experience-slider .owl-nav {
        top: 50px;
        left: 60px;
    }

    .review-img {
        padding: 20px 20px 20px;
    }

    .work-box ul {
        margin-left: 10px;
    }

    .work-box ul li:first-child {
        width: 32%;
    }

    .work-heading:before {
        left: -160px;
        width: 680px;
    }

    .work-heading:after {
        left: -160px;
        width: 680px;
    }
}

@media only screen and (min-width:1024px) and (max-width:1366px) {
    .heading-para {
        font-size: 30px !important;
        width: 100% !important;
        margin-bottom: 0px !important
    }

    .ambient-banner p {
        width: 85%
    }

    .product-tabs .ult_tabmenu {
        width: 40%
    }

    .comp {
        width: 55%
    }

    .pranaasir-slider-title h2 {
        font-size: 26px;
        padding-right: 0
    }

    .air-pollution-box {
        height: 110px
    }

    .tailored {
        height: 130px;
        padding: 20px 10px 0
    }

    .tailored ul li h3 {
        font-size: 16px;
        line-height: 20px
    }

    .tailored ul li p {
        font-size: 14px;
        width: 100%;
        line-height: 20px;
        padding-top: 5px
    }

    .hassle {
        height: 130px;
        padding: 20px 10px 0
    }

    .hassle ul li h3 {
        font-size: 16px;
        line-height: 20px
    }

    .hassle ul li p {
        font-size: 14px;
        width: 100%;
        line-height: 20px;
        padding-top: 3px
    }

    .versatile {
        height: 130px;
        padding: 20px 0 0
    }

    .versatile ul li:first-child {
        width: 50%
    }

    .gases-sec {
        padding-top: 80px
    }

    .gaes-img img {
        width: 100%;
        height: auto;
        left: 0
    }

    .gases-text {
        margin-left: 0
    }

    .gases-text h2 {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 30px;
        padding-right: 10px
    }

    .gases-text p {
        line-height: 26px;
        font-size: 16px
    }

    .gases-text a {
        margin-top: 10px
    }

    .key-title h2 {
        font-size: 27px;
        padding-top: 20px;
        line-height: 36px;
        padding-left: 50px
    }

    .healt-impact-img img {
        width: 100%
    }

    .key-parameter ul {
        top: 0;
        width: 44% !important;
        gap: 40px;
        left: 250px
    }

    .key-para {
        padding-top: 10px;
        padding-left: 30px
    }

    .key-para p {
        font-size: 16px;
        padding-bottom: 10px;
        padding-right: 20px
    }

    .data-para {
        padding-top: 10px
    }

    .type-of-air-quality-heading h2 {
        font-size: 26px;
        padding-right: 100px;
        line-height: 34px
    }

    .types-of-tab ul {
        width: 35% !important;
        left: 250px;
        top: -40px
    }

    .out ul {
        width: 26% !important;
        top: -200px;
        left: 300px
    }

    .dash-tabs .ult_tabmenu {
        top: -40px !important;
        width: 42% !important;
        gap: 20px
    }

    .mob-dash-img img {
        width: 75%;
        top: 70px
    }

    .dashbord-btn {
        margin-left: -10px !important;
        margin-top: 0px !important
    }

    .trust-section {
        padding-top: 50px
    }

    .site-coverd ul {
        gap: 30px;
        width: 100%
    }

    .dash-content ul {
        width: 100% !important
    }

    ul.dashbord-btn {
        gap: 10px
    }

    .dashbord-btn li a {
        padding: 12px 20px
    }
}

@media only screen and (min-device-width :1024px) and (max-device-width :1366px) and (orientation :landscape) {
    .marquee div span img {
        width: 18%;
        margin: 0 4px 0
    }

    .heading-para {
        font-size: 30px !important;
        width: 100% !important;
        margin-bottom: 0px !important
    }

    .ambient-banner p {
        width: 85%
    }

    .product-tabs .ult_tabmenu {
        width: 40%
    }

    .comp {
        width: 55%
    }

    .pranaasir-slider-title h2 {
        font-size: 26px;
        padding-right: 0
    }

    .air-pollution-box {
        height: 110px
    }

    .tailored {
        height: 130px;
        padding: 20px 10px 0
    }

    .tailored ul li h3 {
        font-size: 16px;
        line-height: 20px
    }

    .tailored ul li p {
        font-size: 14px;
        width: 100%;
        line-height: 20px;
        padding-top: 5px
    }

    .hassle {
        height: 130px;
        padding: 20px 10px 0
    }

    .hassle ul li h3 {
        font-size: 16px;
        line-height: 20px
    }

    .hassle ul li p {
        font-size: 14px;
        width: 100%;
        line-height: 20px;
        padding-top: 3px
    }

    .versatile {
        height: 130px;
        padding: 20px 0 0
    }

    .versatile ul li:first-child {
        width: 50%
    }

    .gases-sec {
        padding-top: 80px
    }

    .gaes-img img {
        width: 100%;
        height: auto;
        left: 0
    }

    .gases-text {
        margin-left: 0
    }

    .gases-text h2 {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 30px;
        padding-right: 10px
    }

    .gases-text p {
        line-height: 26px;
        font-size: 16px
    }

    .gases-text a {
        margin-top: 10px
    }

    .key-title h2 {
        font-size: 27px;
        padding-top: 20px;
        line-height: 36px;
        padding-left: 50px
    }

    .healt-impact-img img {
        width: 100%
    }

    .key-parameter ul {
        top: 0;
        width: 36% !important;
        gap: 40px;
        left: 250px
    }

    img.para-bg {
        bottom: -350px
    }

    .key-para {
        padding-top: 10px;
        padding-left: 30px
    }

    .key-para p {
        font-size: 16px;
        padding-bottom: 10px;
        padding-right: 20px
    }

    .data-para {
        padding-top: 10px
    }

    .type-of-air-quality-heading h2 {
        font-size: 26px;
        padding-right: 100px;
        line-height: 34px
    }

    .types-of-tab ul {
        width: 35% !important;
        left: 250px;
        top: -40px
    }

    .out ul {
        width: 26% !important;
        top: -200px;
        left: 300px
    }

    .dash-tabs .ult_tabmenu {
        top: -40px !important;
        width: 35% !important;
        gap: 20px
    }

    .mob-dash-img img {
        width: 75%;
        top: 70px
    }

    .dashbord-btn {
        margin-left: -10px !important;
        margin-top: 0px !important
    }

    .trust-section {
        padding-top: 50px
    }

    .site-coverd ul {
        gap: 30px;
        width: 100%
    }

    .dash-content ul {
        width: 100% !important
    }

    ul.dashbord-btn {
        gap: 10px
    }

    .dashbord-btn li a {
        padding: 12px 20px
    }
}

@media only screen and (min-device-width :768px) and (max-device-width :1024px) and (orientation :landscape) {
    .marquee div span img {
        width: 18%;
        margin: 0 4px 0
    }

    .heading-para {
        font-size: 30px !important;
        width: 100% !important;
        margin-bottom: 0px !important
    }

    .ambient-banner p {
        width: 85%
    }

    .product-tabs .ult_tabmenu {
        width: 40%
    }

    .comp {
        width: 55%
    }

    .pranaasir-slider-title h2 {
        font-size: 26px;
        padding-right: 0
    }

    .air-pollution-box {
        height: 110px
    }

    .tailored {
        height: 130px;
        padding: 20px 10px 0
    }

    .tailored ul li h3 {
        font-size: 16px;
        line-height: 20px
    }

    .tailored ul li p {
        font-size: 14px;
        width: 100%;
        line-height: 20px;
        padding-top: 5px
    }

    .hassle {
        height: 130px;
        padding: 20px 10px 0
    }

    .hassle ul li h3 {
        font-size: 16px;
        line-height: 20px
    }

    .hassle ul li p {
        font-size: 14px;
        width: 100%;
        line-height: 20px;
        padding-top: 3px
    }

    .versatile {
        height: 130px;
        padding: 20px 0 0
    }

    .versatile ul li:first-child {
        width: 50%
    }

    .gases-sec {
        padding-top: 80px
    }

    .gaes-img img {
        width: 100%;
        height: auto;
        left: 0
    }

    .gases-text {
        margin-left: 0
    }

    .gases-text h2 {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 30px;
        padding-right: 10px
    }

    .gases-text p {
        line-height: 26px;
        font-size: 16px
    }

    .gases-text a {
        margin-top: 10px
    }

    .key-title h2 {
        font-size: 27px;
        padding-top: 20px;
        line-height: 36px;
        padding-left: 50px
    }

    .healt-impact-img img {
        width: 100%
    }

    .key-parameter ul {
        top: 0;
        width: 44% !important;
        gap: 40px;
        left: 250px
    }

    .key-para {
        padding-top: 10px;
        padding-left: 30px
    }

    .key-para p {
        font-size: 16px;
        padding-bottom: 10px;
        padding-right: 20px
    }

    .data-para {
        padding-top: 10px
    }

    .type-of-air-quality-heading h2 {
        font-size: 26px;
        padding-right: 100px;
        line-height: 34px
    }

    .types-of-tab ul {
        width: 35% !important;
        left: 250px;
        top: -40px
    }

    .out ul {
        width: 26% !important;
        top: -200px;
        left: 300px
    }

    .dash-tabs .ult_tabmenu {
        top: -40px !important;
        width: 52% !important;
        gap: 20px
    }

    .mob-dash-img img {
        width: 75%;
        top: 70px
    }

    .dashbord-btn {
        margin-left: -10px !important;
        margin-top: 0px !important
    }

    .trust-section {
        padding-top: 50px
    }

    .site-coverd ul {
        gap: 30px;
        width: 100%
    }

    .dash-content ul {
        width: 100% !important
    }

    ul.dashbord-btn {
        gap: 10px
    }

    .dashbord-btn li a {
        padding: 12px 20px
    }

    #playButton {
        left: 300px;
    }

    .work-box ul {
        margin-left: 10px;
    }

    .work-box ul li h4 {
        font-size: 17px;
    }

    .work-heading {
        margin: 20px auto 50px;
        width: 60%;
    }

    .sensor-heading-box h2 {
        font-size: 28px;
        line-height: 32px;
    }

    .despite-para {
        padding-left: 50px;
    }

    .despite-para h4 {
        width: 90%;
    }

    .graph-btn a {
        margin-right: 100px;
    }

    .accurate-box:before {
        background-size: 50%;
        width: 100%;
        height: 120px;
    }

    .marquee-img-box ul li {
        width: 150px;
        height: 100px;
    }

    .customre-sec {
        padding-top: 90px;
        padding-bottom: 80px;
    }

    .customre-experience-slider {
        margin-left: 40px;
    }

    .customre-experience-slider .owl-nav {
        top: 10px;
        left: 60px;
    }

    .review-img {
        padding: 20px;
    }
}
      `}</style>
        </main>
    )
}

