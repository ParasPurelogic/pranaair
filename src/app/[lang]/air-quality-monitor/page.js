import "bootstrap/dist/css/bootstrap.min.css"
import "react-multi-carousel/lib/styles.css"
import "./style.css"
import Image from "next/image";
import ContactForm from "@/Components/Contacform/ContactForm"
import VideoPopup from "@/Components/Pages/AirQualityCommonMonitor/video-popup"
import ProductTabs from "@/Components/Pages/AirQualityCommonMonitor/product-tabs"
import AirPollutantsTabs from "@/Components/Pages/AirQualityCommonMonitor/air-pollutants-tabs"
import AirQualityStandardTabs from "@/Components/Pages/AirQualityCommonMonitor/air-quality-standard-tabs"
import AQIAppsTabs from "@/Components/Pages/AirQualityCommonMonitor/aqi-apps-tabs"
import ApplicationsSlider from "@/Components/Pages/AirQualityCommonMonitor/applications-slider"
import TestimonialsSlider from "@/Components/Pages/AirQualityCommonMonitor/testimonials-slider"
import AirQualityTypeTabs from "@/Components/Pages/AirQualityCommonMonitor/air-quality-type-tabs";

export default function CommonMonitorPage() {
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
                            <VideoPopup />
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

                    <ProductTabs />
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
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2025/01/pcb-monitor-function.webp"
                                            alt="air quality PCB"
                                            width={500}
                                            height={300}
                                        />
                                    </li>
                                    <li>
                                        <h3>01</h3>
                                        <h4>PCB Embedded or Platform</h4>
                                        <p>
                                            The PCB manages power, processing, and communication. It converts analogue to digital output,
                                            supports BMS (Battery Management System), and enables data logging and communication via Wi-Fi,
                                            Bluetooth, or LoRa.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="work-box">
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2025/03/pcb-embedded-or-platform.webp"
                                            alt="air quality sensors"
                                            width={500}
                                            height={300}
                                        />
                                    </li>
                                    <li>
                                        <h3>02</h3>
                                        <h4>Sensors For Air Quality Detection</h4>
                                        <p>
                                            Sensors detect pollutants and undergo calibration for accuracy. Automation helps them adjust
                                            to factors like temperature and humidity. Bisynking ensures multiple sensors cross-verify
                                            data for reliability.
                                        </p>
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
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2025/03/Housing-Protecting-the-System.webp"
                                            alt=""
                                            width={500}
                                            height={300}
                                        />
                                    </li>
                                    <li>
                                        <h3>03</h3>
                                        <h4>Housing Protecting the System</h4>
                                        <p>
                                            The housing ensures proper sampling of air for precise readings. A perfection-oriented design
                                            reduces interference. Weatherproofing protects against environmental damage, while a robust
                                            structure ensures durability.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="work-box">
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2025/03/Dashboard-Analyzing-and-Visualizing-Data.webp"
                                            alt=""
                                            width={500}
                                            height={300}
                                        />
                                    </li>
                                    <li>
                                        <h3>04</h3>
                                        <h4>Dashboard Analyzing and Visualizing Data</h4>
                                        <p>
                                            The dashboard processes and displays air quality data. The backend (server) handles data
                                            storage and processing, while the frontend presents graphs, alerts, and insights for easy
                                            monitoring.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
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

                    <AirPollutantsTabs />
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
                            <AirQualityTypeTabs />
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

                    <AQIAppsTabs />
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
                            <AirQualityStandardTabs />
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
                    <ApplicationsSlider />
                </div>
            </div>

            {/* Testimonial Slider Section */}
            <section className="testimonial-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-2">
                            <h2 className="section-title">We care about customer experience too</h2>
                            <p className="section-subtitle">Some of the Top Organisations</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <TestimonialsSlider />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="contact-heading">
                            <h2>Get in Touch</h2>
                            <p>Please help us know what requirements you have. Our team will contact you very soon.</p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm pageName="Air Quality Monitor Common Page" />
        </main>
    )
}
