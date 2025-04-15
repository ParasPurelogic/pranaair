"use client"

import { useState, useEffect } from "react"
import Carousel from "react-multi-carousel/lib/Carousel"
import "react-multi-carousel/lib/styles.css"
import "./style.css"

export default function OxygenMonitor() {
    // Tab states
    const [activeVariantTab, setActiveVariantTab] = useState("London")
    const [activeScreenTab, setActiveScreenTab] = useState("tab1")
    const [activeMobileTab, setActiveMobileTab] = useState(0)

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js")
            .then(() => {
                console.log("Bootstrap JS loaded");
            })
            .catch((err) => console.error("Error loading Bootstrap JS:", err));
    }, []);

    // Responsive settings for carousel
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hero-txt">
                                <h1>Oxygen Monitor</h1>
                                <h2>Live Easy with OxyCO Monitor</h2>
                                <p>Monitor Real-Time Oxygen and Carbon Monoxide Levels</p>
                                <form
                                    className="cart"
                                    action="https://www.pranaair.com/product/oxyco-monitor/"
                                    encType="multipart/form-data"
                                    method="post"
                                >
                                    <button
                                        className="single_add_to_cart_button button alt banner-btn"
                                        name="add-to-cart"
                                        type="submit"
                                        value="124689"
                                    >
                                        Buy Now{" "}
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/download-btn.png"
                                            alt="buy now icon"
                                        />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="feature-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="key-feature-txt">
                                <h2>Features</h2>
                                <h3>
                                    Key Features Of <span className="green-txt">Oxygen Monitor</span>
                                </h3>
                                <p>
                                    Experience cutting-edge monitoring of Oxygen and Carbon Monoxide with advanced and intelligent
                                    features of the device.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="feature">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/10/compact-and-portable-oxyco-monitor.webp"
                                            alt="Prana Air oxygen monitor of Compact and Portable design"
                                        />
                                        <div className="feature-txt">
                                            <h3>Compact and Portable</h3>
                                            <p>Fits into any space—home, office, classroom, or outdoors.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="connect-txt">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/10/connectivity-options.png"
                                                alt="Prana Air oxygen monitor of multiple Connectivity Options"
                                            />
                                            <h3>Connectivity Options</h3>
                                            <p>Mobile app and dashboard connectivity.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-air-OxyCO-calibration.webp"
                                            alt="Prana Air oxygen monitor calibration for higher accuracy"
                                        />
                                        <div className="feature-txt">
                                            <h3>Oxygen Calibration</h3>
                                            <p>Ensure accuracy with our O2 calibration feature</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="could-sotrage">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/10/data-securely-in-cloud-storage.png"
                                                alt="data Cloud Storage available in Prana Air oxygen monitor"
                                            />
                                            <h3>Cloud Storage</h3>
                                            <p>Store your data securely in the cloud</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/10/real-time-data-monitoring.webp"
                                            alt="Real-Time Data Monitoring by Prana Air oxygen monitor"
                                        />
                                        <div className="feature-txt">
                                            <h3>Real-Time Data Monitoring</h3>
                                            <p>Monitor Oxygen, Carbon Monoxide, humidity, and temperature in real-time.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="could-sotrage">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/10/built-in-battery.png"
                                                alt="Built-in Battery in Prana Air oxygen monitor"
                                            />
                                            <h3>Built-in Battery</h3>
                                            <p>The in-built battery keeps your monitor operational.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Variants Section */}
            <section className="variant-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="variant-txt">
                                <h2>Variants</h2>
                                <p>Variants of OxyCo</p>
                            </div>
                            <div className="tab">
                                <button
                                    className={`tablinks ${activeVariantTab === "London" ? "active" : ""}`}
                                    onClick={() => setActiveVariantTab("London")}
                                >
                                    Oxygen + CO <i className="fas fa-arrow-right"></i>
                                </button>
                                <button
                                    className={`tablinks ${activeVariantTab === "Paris" ? "active" : ""}`}
                                    onClick={() => setActiveVariantTab("Paris")}
                                >
                                    Oxygen + CO2 <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            {/* Tab content */}
                            <div
                                className={`tabcontent ${activeVariantTab === "London" ? "" : "hide"}`}
                                style={{ display: activeVariantTab === "London" ? "block" : "none" }}
                            >
                                <div className="content-para">
                                    <p>
                                        Get real-time oxygen levels and also detect harmful carbon monoxide with precision. The perfect
                                        device to ensuring safety in enclosed spaces.
                                    </p>
                                    <form
                                        className="cart"
                                        action="https://www.pranaair.com/product/oxyco-monitor/"
                                        encType="multipart/form-data"
                                        method="post"
                                    >
                                        <button
                                            className="single_add_to_cart_button button alt banner-btn"
                                            name="add-to-cart"
                                            type="submit"
                                            value="124689"
                                        >
                                            Buy Now{" "}
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/download-btn.png"
                                                alt="buy now icon"
                                            />
                                        </button>
                                    </form>
                                </div>
                                <div className="oxy-co-box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/12/oxygen-monitor.webp"
                                        alt="Prana Air oxygen monitor"
                                    />
                                    <div className="parameter">
                                        <ul>
                                            <li>
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/10/CO-icon.png" alt="co icon" />
                                                <h5>Carbon Monoxide(CO)</h5>
                                            </li>
                                            <li>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/TEMPERATURE.png"
                                                    alt="temperature icon"
                                                />
                                                <h5>Temperature</h5>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/10/O2.png" alt="o2 icon" />
                                                <h5>Oxygen(O2)</h5>
                                            </li>
                                            <li>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Humidity.png"
                                                    alt="humidity icon"
                                                />
                                                <h5>Humidity</h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`tabcontent ${activeVariantTab === "Paris" ? "" : "hide"}`}
                                style={{ display: activeVariantTab === "Paris" ? "block" : "none" }}
                            >
                                <div className="content-para">
                                    <p>
                                        Track real-time oxygen and carbon dioxide levels with advanced sensors. The ideal device for labs,
                                        greenhouses, and controlled environments.
                                    </p>
                                    <form
                                        className="cart"
                                        action="https://www.pranaair.com/product/oxyco-monitor/"
                                        encType="multipart/form-data"
                                        method="post"
                                    >
                                        <button
                                            className="single_add_to_cart_button button alt banner-btn"
                                            name="add-to-cart"
                                            type="submit"
                                            value="1"
                                        >
                                            Buy Now{" "}
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/download-btn.png"
                                                alt="buy now icon"
                                            />
                                        </button>
                                    </form>
                                </div>
                                <div className="oxy-co-box oxy-co2-box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/OxyCO2-monitor.webp"
                                        alt="prana air oxygen monitor"
                                    />
                                    <div className="parameter">
                                        <ul>
                                            <li>
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/10/CO-icon.png" alt="co icon" />
                                                <h5>Carbon Monoxide(CO2)</h5>
                                            </li>
                                            <li>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/TEMPERATURE.png"
                                                    alt="temperature icon"
                                                />
                                                <h5>Temperature</h5>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <img src="https://www.pranaair.com/wp-content/uploads/2024/10/O2.png" alt="o2 icon" />
                                                <h5>Oxygen(O2)</h5>
                                            </li>
                                            <li>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Humidity.png"
                                                    alt="humidity icon"
                                                />
                                                <h5>Humidity</h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visualize Data Section */}
            <section className="visualise-data-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="visualise-data-txt">
                                <h2>Intuitive screen types</h2>
                                <h3>Visualise your data</h3>
                                <p>
                                    The <strong>OxyCO</strong> monitor features four distinct screens to enhance your monitoring
                                    experience
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="tabs">
                                <button
                                    className={`tab-button ${activeScreenTab === "tab1" ? "active" : ""}`}
                                    onClick={() => setActiveScreenTab("tab1")}
                                >
                                    Main Screen <i className="fas fa-arrow-right"></i>
                                </button>
                                <div
                                    id="content2-tab1"
                                    className={`tab-content tab-content-para ${activeScreenTab !== "tab1" ? "hidden" : ""}`}
                                >
                                    Instant overview of all key parameters for quick assessments
                                </div>

                                <button
                                    className={`tab-button ${activeScreenTab === "tab2" ? "active" : ""}`}
                                    onClick={() => setActiveScreenTab("tab2")}
                                >
                                    O2 Curve <i className="fas fa-arrow-right"></i>
                                </button>
                                <div
                                    id="content2-tab2"
                                    className={`tab-content tab-content-para ${activeScreenTab !== "tab2" ? "hidden" : ""}`}
                                >
                                    Check the historical O2 condition in your environment with the curve.
                                </div>

                                <button
                                    className={`tab-button ${activeScreenTab === "tab3" ? "active" : ""}`}
                                    onClick={() => setActiveScreenTab("tab3")}
                                >
                                    CO Curve <i className="fas fa-arrow-right"></i>
                                </button>
                                <div
                                    id="content2-tab3"
                                    className={`tab-content tab-content-para ${activeScreenTab !== "tab3" ? "hidden" : ""}`}
                                >
                                    Review the historical CO in your environment.
                                </div>

                                <button
                                    className={`tab-button ${activeScreenTab === "tab4" ? "active" : ""}`}
                                    onClick={() => setActiveScreenTab("tab4")}
                                >
                                    Calibration Screen <i className="fas fa-arrow-right"></i>
                                </button>
                                <div
                                    id="content2-tab4"
                                    className={`tab-content tab-content-para ${activeScreenTab !== "tab4" ? "hidden" : ""}`}
                                >
                                    Calibrate your devices O2 sensor for accurate readings.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="monitor-bg">
                                <div id="content1-tab1" className={`tab-content ${activeScreenTab !== "tab1" ? "hidden" : ""}`}>
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/12/oxygen-monitor-main-screen.webp"
                                        alt="Prana Air oxygen monitor main screen"
                                    />
                                </div>
                                <div id="content1-tab2" className={`tab-content ${activeScreenTab !== "tab2" ? "hidden" : ""}`}>
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/12/oxygen-monitor-o2-graph.webp"
                                        alt="Prana Air oxygen monitor O2 graph"
                                    />
                                </div>
                                <div id="content1-tab3" className={`tab-content ${activeScreenTab !== "tab3" ? "hidden" : ""}`}>
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/12/oxygen-monitor-co-graph.webp"
                                        alt="Prana Air oxygen monitor CO graph"
                                    />
                                </div>
                                <div id="content1-tab4" className={`tab-content ${activeScreenTab !== "tab4" ? "hidden" : ""}`}>
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/12/oxygen-monitor-calibration.webp"
                                        alt="Prana Air oxygen monitor calibration"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hospital Section */}
            <section className="hospital">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hospital-heading">
                                <h2>Hospital-Grade Precision</h2>
                                <p>
                                    OxyCO monitor provides real-time and accurate oxygen level tracking that can help in ensuring patient
                                    safety and optimal care in hospitals or health care centres.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hospital-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/12/prana-air-oxygen-monitor-in-hospital.webp"
                                    alt="Prana Air oxygen monitor in hospital measuring O2 level"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="why-choose">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="why-choose-heading">
                                <h2>
                                    Why Choose <span className="oxy">OxyCo?</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="why-choose-para">
                                <p>OxyCo monitor is your one search go for better living and health environment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mob-row">
                        <div className="col-md-3">
                            <div className="why-choose-box">
                                <h3>01</h3>
                                <h4>
                                    Better <span className="why-bg">health and safety</span>
                                </h4>
                                <p className="why-para">
                                    Detect CO and Oxygen levels to ensure safe environment for yourself and your loved ones.
                                </p>
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/oxyco-monitor-Better-health-and-safety.webp"
                                    alt="Prana Air Oxygen Monitor (OxyCO) for Better health and safety"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="why-choose-box grey-green">
                                <h3>02</h3>
                                <h4>
                                    Improved <span className="why-bg">productivity</span>
                                </h4>
                                <p className="why-para">
                                    Do you know maintained oxygen levels helps in improving focus and productivity in work and study?
                                </p>
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Improved-productivity.webp"
                                    alt="Prana Air Oxygen Monitor (OxyCO) for improving productivity"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="why-choose-box blue">
                                <h3>03</h3>
                                <h4>
                                    Informed <span className="why-bg">decisions</span>
                                </h4>
                                <p className="why-para">
                                    Know the real-time and accurate readings of Oxygen and CO in your environment to make informed
                                    decision.
                                </p>
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/informed-decisions.webp"
                                    alt="Prana Air Oxygen Monitor (OxyCO) helps in your environment to make informed decision"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="why-choose-box purpel">
                                <h3>04</h3>
                                <h4>
                                    Stay <span className="why-bg">informed</span>
                                </h4>
                                <p className="why-para">
                                    Track air pollution round you to check your environmental health and protect yourself.
                                </p>
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Stay-informed.webp"
                                    alt="Prana Air Oxygen Monitor detects O2 along CO gas level"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Your Data Section */}
            <section className="your-data-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="your-data-txt">
                                <h2>
                                    <strong>Data at your fingertips:</strong> Export with ease
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="your-data-graph-txt">
                                <h3>Your Data, Your Way</h3>
                                <p>
                                    Easily download your OxyCo monitor data in multiple formats, including .csv and .xls, for seamless
                                    access.
                                </p>
                                <ul>
                                    <li>.CSV</li>
                                    <li>.Xls</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="email-transfer-box">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/12/oxygen-monitor-export-data.webp"
                                    alt="Data of Prana Air Oxygen Monitor can be exported in .csv file"
                                />
                                <div className="feature-txt transfer">
                                    <h3>Email Transfers</h3>
                                    <p>Quickly share data via email for online access and collaborative analysis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Dashboard Section */}
            <section className="mob-dash-tab">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mob-dash-heading">
                                <h2>
                                    Command your environment anytime, anywhere <strong>Mobile, Web-dashboard, TV app connectivity</strong>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tab-sec">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link ${activeMobileTab === 0 ? "active" : ""}`}
                                            onClick={() => setActiveMobileTab(0)}
                                            role="tab"
                                        >
                                            Mobile App
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link ${activeMobileTab === 1 ? "active" : ""}`}
                                            onClick={() => setActiveMobileTab(1)}
                                            role="tab"
                                        >
                                            Web Dashboard
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link ${activeMobileTab === 2 ? "active" : ""}`}
                                            onClick={() => setActiveMobileTab(2)}
                                            role="tab"
                                        >
                                            Smart TV App
                                        </a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div className={`tab-pane fade ${activeMobileTab === 0 ? "show active" : ""}`} role="tabpanel">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="start-work-txt">
                                                    <h2>
                                                        <span className="green-txt">Diverse connectivity of </span>OxyCo
                                                    </h2>
                                                    <p>
                                                        Connect your OxyCo monitor with AQI mobile app to access air quality data on your
                                                        fingertips.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <a className="btn" href="https://play.google.com/store/apps/details?id=com.aqi.data">
                                                    <i className="fas fa-arrow-right"></i>
                                                    Download Mob App
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dash-mob-img app">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/12/Mobile-App-OxyCo.webp"
                                                alt="Mobile App for OxyCo monitor"
                                            />
                                        </div>
                                    </div>

                                    <div className={`tab-pane fade ${activeMobileTab === 1 ? "show active" : ""}`} role="tabpanel">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="start-work-txt">
                                                    <h2>
                                                        <span className="green-txt">Diverse connectivity of </span>OxyCo
                                                    </h2>
                                                    <p>
                                                        Access your OxyCo monitors reading directly to Web-Dashboard to see data anytime anywhere.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <a className="btn" href="https://www.aqi.in/userlogin">
                                                    <i className="fas fa-arrow-right"></i>
                                                    View Dashboard
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dash-mob-img web">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/12/Web-Dashboard-OxyCo-monitor.webp"
                                                alt="Web Dashboard for OxyCo monitor"
                                            />
                                        </div>
                                    </div>

                                    <div className={`tab-pane fade ${activeMobileTab === 2 ? "show active" : ""}`} role="tabpanel">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="start-work-txt">
                                                    <h2>
                                                        <span className="green-txt">Diverse connectivity of </span>OxyCo
                                                    </h2>
                                                    <p>
                                                        Display your OxyCo monitors data on a big screen for better and enhanced visibility for
                                                        all.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <a className="btn" href="https://play.google.com/store/apps/details?id=com.aqitv.aqitvnew">
                                                    <i className="fas fa-arrow-right"></i>
                                                    View TV
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dash-mob-img tv">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/12/Smart-TV-App-OxyCo-monitor.webp"
                                                alt="Smart TV App for OxyCo monitor"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Oxygen Tracking Section */}
            <section className="oxygen-tracking-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="oxygen-tracking-heading">
                                <h2>On-the-Go</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="oxygen-tracking-heading track-head">
                                <p>
                                    Your handy OxyCo monitor can ensure accurate oxygen levels for tracking an ideal choice for athletes,
                                    hikers, or anyone on the track.
                                </p>
                                <h2>Oxygen Tracking</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="oxygen-tracking-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/athletes-hikers-or-anyone-on-the-track.webp"
                                    alt="Tracking O2 level in high peak area with Prana Air Oxygen Monitor"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section className="application-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="app-txt">
                                <h2>Applications</h2>
                                <h3>
                                    Where can <strong>OxyCo</strong> shine?
                                </h3>
                                <p>OxyCo monitor is beneficial for many applications and usage:</p>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} className="app-slide">
                                <div className="app-img">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/Residential-Use.webp"
                                        alt="application of Oxygen Monitor for Residential Use"
                                    />
                                    <h4>Residential Use</h4>
                                </div>
                                <div className="app-img">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/front-view-kids-cheating-school.webp"
                                        alt="application of Oxygen Monitor for Educational Institutes"
                                    />
                                    <h4>Educational Institutes</h4>
                                </div>
                                <div className="app-img">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/front-view-family-celebrating-birthday.webp"
                                        alt="application of Oxygen Monitor for Outdoor Events"
                                    />
                                    <h4>Outdoor Events</h4>
                                </div>
                                <div className="app-img">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/12/healthcare-center.webp"
                                        alt="application of Oxygen Monitor for Healthcare Facilities"
                                    />
                                    <h4>Healthcare Facilities</h4>
                                </div>
                                <div className="app-img">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/industrial-health-measures-corona-virus-pandemic.webp"
                                        alt="application of Oxygen Monitor for Industrial Applications"
                                    />
                                    <h4>Industrial Applications</h4>
                                </div>
                                <div className="app-img">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/so-many-vegetables-this-field.webp"
                                        alt="application of Oxygen Monitor for Agricultural Settings"
                                    />
                                    <h4>Agricultural Settings</h4>
                                </div>
                                <div className="app-img">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/12/colleagues-in-workplace.webp"
                                        alt="application of Oxygen Monitor for Workplace"
                                    />
                                    <h4>Workplace</h4>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications Section */}
            <section className="technical-specification">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="spec-heading">
                                <h4>Technical Specifications</h4>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="brochore-btn">
                                <a href="https://www.pranaair.com/wp-content/uploads/2024/12/Prana-air-OxyCO-Monitor-Brochure.pdf">
                                    Brochure{" "}
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/09/download-btn.png" alt="brochore-btn" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row mid-box mob-scroll">
                        <div className="col-md-6">
                            <div className="product-specifi">
                                Product Name :<h4>OxyCo</h4>
                            </div>
                            <div className="product-specifi shdw-line">
                                Max detecting concentration:
                                <h4>30% Vol</h4>
                            </div>
                            <div className="product-specifi">
                                LED Screen Size:
                                <h4>2.8inch</h4>
                            </div>
                            <div className="product-specifi shdw-line">
                                Dimension :<h4>8 * 8 cm</h4>
                            </div>
                            <div className="product-specifi">
                                Weight:
                                <h4>113g</h4>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="product-specifi">
                                Parameters:
                                <h4>O2, CO, Temp, Humid.</h4>
                            </div>
                            <div className="product-specifi shdw-line">
                                Battery capacity:
                                <h4>1000mAh</h4>
                            </div>
                            <div className="product-specifi">
                                Connectivity:
                                <h4>WiFi</h4>
                            </div>
                            <div className="product-specifi shdw-line">
                                Sensitivity:
                                <h4>(0.1~0.3) mA (In air)</h4>
                            </div>
                            <div className="product-specifi">
                                data Accessibility:
                                <h4>Mobile & TV app and Web-Dashboard</h4>
                            </div>
                            <div className="row">
                                <div className="col-md-8"></div>
                                <div className="col-md-4">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/09/download-btn.png"
                                        alt="rosh-icon"
                                        className="rosh-iocn"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="faq-heading">
                                <h2>Frequently Asked Questions</h2>
                            </div>
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq1"
                                            aria-expanded="true"
                                        >
                                            1. What parameters OxyCo does monitor?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            OxyCo is designed to monitor real-time Oxygen, carbon monoxide, temperature and humidity in your air.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq2"
                                            aria-expanded="false"
                                        >
                                            2. What is the battery capacity of the OxyCo?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            The compact monitor is packed with a 1000mAh battery that works for a long time.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq3"
                                            aria-expanded="false"
                                        >
                                            3. How can I access OxyCo data?
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            You can seamlessly access the OxyCo data by downloading it in different formats or transferring it to your email.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq4"
                                            aria-expanded="false"
                                        >
                                            4. Why do Oxygen Calibration?
                                        </button>
                                    </h2>
                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            The OxyCo monitor performs Oxygen Calibration to maintain optimal accuracy in the device readings.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

