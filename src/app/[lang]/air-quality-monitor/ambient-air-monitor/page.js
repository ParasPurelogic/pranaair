"use client"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/Components/Contacform/ContactForm"
import "./style.css"
import AmbientMonitorVariantsTab from "@/Components/Pages/AmbientAirmonitor/AmbientMonitorvariantstab"
import CaseStudiesSlider from "@/Components/Pages/AmbientAirmonitor/CaseSlider"
import DataAccessibilityTab from "@/Components/Pages/AmbientAirmonitor/DataAccessibitly"
import FaqAccordion from "@/Components/Pages/AmbientAirmonitor/FaqAccordion"
import AMPartsLabelTab from "@/Components/Pages/AmbientAirmonitor/AmPartLabel"
import TechSpecTab from "@/Components/Pages/AmbientAirmonitor/TechSpec"

export default function AmbientAirMonitor() {

    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ambient-banner">
                                <span className="title">Prana Air</span>
                                <h1>
                                    <span className="hd-txt">Ambient+</span> Air Quality Monitor
                                </h1>
                                <p>A compact and affordable solution for personal and community monitoring.</p>
                                <a href="#contact_form" aria-label="prana air ambient air quality all monitors">
                                    Request a Quote
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ambient-img">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/ambient-air-quality-monitors.webp"
                                    alt="ambient air quality monitors"
                                    width={500}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ambient Monitor Variants Section */}
            <section className="ambient-monitor-variants-section">
                <div className="container">
                    <div className="row ambi-line">
                        <div className="col-md-6">
                            <div className="ambi-moni-variant-heading">
                                <h2>Ambient Monitor Variants</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ambi-monitor-para">
                                <p>Prana Airs ambient air quality monitoring devices are where your search stops.</p>
                            </div>
                        </div>
                    </div>

                    <AmbientMonitorVariantsTab />
                </div>
            </section>

            {/* Why Prana Air's Ambient Air Monitors? */}
            <section className="monitor-main-feature-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="main-feature-heading">
                                <h2>Why Prana Airs Ambient Air Monitors?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="moniotr-main-icons-box">
                                <ul>
                                    <li className="line-shdw">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/pranaair-real-time-data-monitoring.png"
                                            alt="Real-time air quality monitoring"
                                            width={80}
                                            height={80}
                                        />
                                        <h3>Real-time air quality monitoring</h3>
                                    </li>
                                    <li className="line-shdw">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/pranaair-low-cost-monitors.png"
                                            alt="Low-cost monitors & sensors"
                                            width={80}
                                            height={80}
                                        />
                                        <h3>Low-cost air quality monitors/sensors</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="moniotr-main-icons-box">
                                <ul>
                                    <li className="line-shdw">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/pranaair-accurate-sensors.png"
                                            alt="accurate sensors"
                                            width={80}
                                            height={80}
                                        />
                                        <h3>Highly accurate and reliable sensors</h3>
                                    </li>
                                    <li className="line-shdw">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/pranaair-cloud-data-access.png"
                                            alt="cloud data access"
                                            width={80}
                                            height={80}
                                        />
                                        <h3>Data accessibility on website, mobile & TV apps</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="moniotr-main-icons-box">
                                <ul>
                                    <li className="line-shdw">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/pranaair-connectivity.png"
                                            alt="modes of data connectivity"
                                            width={80}
                                            height={80}
                                        />
                                        <h3>Multiple modes of connectivity</h3>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/pranaair-low-cost-maintenance.png"
                                            alt="low cost maintenance"
                                            width={80}
                                            height={80}
                                        />
                                        <h3>Low-cost maintenance expense</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section className="app-ambient-section">
                <div className="container">
                    <div className="row app-ambient-line">
                        <div className="col-md-6">
                            <div className="app-ambient-heading">
                                <h2>Applications of Ambient Air Quality Monitor</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="app-ambeint-para">
                                <p>Protecting public health and improving the environment in a variety of industries</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="box-mob">
                                        <div className="box-inner">
                                            <div className="container-my">
                                                <Link href="#">
                                                    <Image
                                                        className="image"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/construction-air-quality-monitor.webp"
                                                        alt="Prana Air construction site air quality monitor"
                                                        width={400}
                                                        height={300}
                                                    />
                                                </Link>
                                                <div className="overlay">
                                                    <div className="text">
                                                        <p>
                                                            Construction sites are a major source of dust and other pollutants. Prana Air can help
                                                            construction sites to monitor their air quality levels and take steps to reduce emissions.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="app-card-title">
                                                <h3>
                                                    <Link href="/solutions-by-application/constructions/">Construction Site</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="box-inner">
                                            <div className="container-my">
                                                <Link href="#">
                                                    <Image
                                                        className="image"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/smart-city-air-quality-monitor.webp"
                                                        alt="Prana Air parking lot air quality monitor"
                                                        width={400}
                                                        height={300}
                                                    />
                                                </Link>
                                                <div className="overlay">
                                                    <div className="text">
                                                        <p>
                                                            Parking lots are a major source of vehicle emissions. Our solution can help parking lot
                                                            operators to monitor their air quality levels and take steps to reduce emissions.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="app-card-title">
                                                <h3>
                                                    <Link href="/solutions-by-application/parking-lot/">Parking Lots</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="box-mob">
                                        <div className="box-inner">
                                            <div className="container-my">
                                                <Link href="#">
                                                    <Image
                                                        className="image"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/rmc-air-quality-monitor.webp"
                                                        alt="Prana Air smart city air quality monitor"
                                                        width={400}
                                                        height={300}
                                                    />
                                                </Link>
                                                <div className="overlay">
                                                    <div className="text">
                                                        <p>
                                                            Smart city projects are increasingly incorporating air quality monitoring into their
                                                            designs. Prana Airs ambient air quality solution can help smart city projects to monitor
                                                            their air quality levels.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="app-card-title">
                                                <h3>
                                                    <Link href="/solutions-by-application/smart-city/">Smart City Project</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="box-inner">
                                            <div className="container-my">
                                                <Link href="#">
                                                    <Image
                                                        className="image"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/parking-lot-air-quality-monitor.webp"
                                                        alt="Prana Air real estates air quality monitor"
                                                        width={400}
                                                        height={300}
                                                    />
                                                </Link>
                                                <div className="overlay">
                                                    <div className="text">
                                                        <p>
                                                            New real estate developments are often located in areas with poor air quality. Prana Airs
                                                            solution can help real estate developers to identify areas with good air quality.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="app-card-title">
                                                <h3>
                                                    <Link href="/solutions-by-application/real-estate/">Real Estates</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="box-mob">
                                        <div className="box-inner">
                                            <div className="container-my">
                                                <Link href="#">
                                                    <Image
                                                        className="image"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/real-estates-air-quality-monitor.webp"
                                                        alt="Prana Air RMC air quality monitor"
                                                        width={400}
                                                        height={300}
                                                    />
                                                </Link>
                                                <div className="overlay">
                                                    <div className="text">
                                                        <p>
                                                            Ready-mix concrete plants are a major source of air pollution, emitting particulate
                                                            matter, dust, and other pollutants. Our solution can help RMC plants to monitor their air
                                                            quality levels.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="app-card-title">
                                                <h3>
                                                    <Link href="/solutions-by-application/ready-mix-concrete-plant/">RMC Plant</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="box-inner">
                                            <div className="container-my">
                                                <Link href="#">
                                                    <Image
                                                        className="image"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/airport-air-quality-monitor.webp"
                                                        alt="prana air airport air quality monitor"
                                                        width={400}
                                                        height={300}
                                                    />
                                                </Link>
                                                <div className="overlay">
                                                    <div className="text">
                                                        <p>
                                                            Airports are another major source of air pollution, emitting pollutants from aircraft,
                                                            vehicles, and other sources. Prana Airs ambient air quality solution can help airports to
                                                            monitor their air quality levels.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="app-card-title">
                                                <h3>
                                                    <Link href="/solutions-by-application/airports/">Airports</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="explore-btn">
                                <Link href="/solutions-by-application/">Explore More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Weather Station Section */}
            <section className="weather-staiton-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="weather-staiton-headimg">
                                <h2>Weather Station</h2>
                                <p>
                                    Get accurate weather forecasts to predict weather conditions for different activities with stand-out
                                    features.
                                </p>
                                <Link href="/air-quality-monitor/weather-station/">Know More</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="weather-staiton-img">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-air-accurate-weather-station.webp"
                                    alt="prana air accurate weather station"
                                    width={400}
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Parts & Labels Section */}
            <section className="part-label-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="part-label-heading">
                                <h2>Parts & Labels</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <AMPartsLabelTab />
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications Section */}
            <section className="tech-spec-section">
                <div className="container">
                    <div className="row texh-spec-line">
                        <div className="col-md-6">
                            <div className="tech-spec-heading">
                                <h2>Technical Specifications</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <TechSpecTab />
                        </div>
                    </div>
                </div>
            </section>

            {/* Modes of Connectivity Section */}
            <div className="generic-heading-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="app-ambient-heading generic-heading">
                                <h2>Modes of Connectivity</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="generic-connective-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="generic-connect-device-box devices">
                                <div className="line-arrow">
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/arrow-line-generic.png"
                                        alt="arrow line"
                                        width={120}
                                        height={80}
                                    />
                                </div>
                                <Image
                                    className="devices-img"
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/generic-connectivity-devices.webp"
                                    alt="prana air ambient air quality monitors"
                                    width={130}
                                    height={130}
                                />
                                <h3>Devices</h3>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="generic-connect-device-box tyc">
                                <div className="type-arrow">
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/arrow-line-generic.png"
                                        alt="arrow line"
                                        width={120}
                                        height={80}
                                    />
                                </div>
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/wifi.webp"
                                            alt="wifi connectivity"
                                            width={35}
                                            height={35}
                                        />
                                        <h5>Wifi</h5>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/gsm.png"
                                            alt="gsm sim connectivity"
                                            width={35}
                                            height={35}
                                        />
                                        <h5>GSM</h5>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/rs-485.png"
                                            alt="rs-485 connectivity"
                                            width={35}
                                            height={35}
                                        />
                                        <h5>RS 485</h5>
                                    </li>
                                </ul>
                                <h3>Types of Connectivity</h3>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="generic-connect-device-box sd-card-cloud">
                                <div className="type-arrow">
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/arrow-line-generic.png"
                                        alt="arrow icon"
                                        width={120}
                                        height={80}
                                    />
                                </div>
                                <Image
                                    className="sd-card"
                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/SD-CARD.png"
                                    alt="micro sd card data storage"
                                    width={90}
                                    height={90}
                                />
                                <h3>SD Card & Cloud Storage</h3>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="generic-connect-device-box web-tv-board">
                                <Image
                                    className="dashboard"
                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-data-dashboard-and-apps.png"
                                    alt="aqi data dashboard and apps"
                                    width={180}
                                    height={180}
                                />
                                <h3>Web-Dashboard, TV & Mobile</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Accessibility & Analysis Section */}
            <div className="app-ambient-line aqi-tv-heading-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="app-ambient-heading aqi-tv-heading">
                                <h2>Data Accessibility & Analysis</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="app-ambeint-para graph-para">
                                <p>Explore the most versatile ways of air quality data dashboards in various platforms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aqi-tab-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <DataAccessibilityTab />
                        </div>
                    </div>
                </div>
            </div>

            {/* ambient air quality */}
            <section className="ambient-air-quality-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="ambient-air-quote fadeInUp animated">
                                <p>
                                    <Image src="/images/quote-icon-ambient.png" alt="quote-icon-ambient" width={50} height={50} />
                                    <br />
                                    <strong>Ambient</strong> Air Quality Monitoring is one of the primary aspects that govern
                                    environmental stability. Air quality is dynamic. Several factors control the air quality of a place.
                                    There are numerous natural, industrial, and anthropogenic sources that emit air toxins. Meteorological
                                    factors also alter and impact air quality. Outdoor air pollution does not just jeopardize the living.
                                    It is also detrimental to the ecology and the atmospheric chemistry of the earth. Thus, outdoor air
                                    monitoring is essential.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* caaqms section */}
            <section className="caaqms-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="caaqms-heading fadeInUp animated">
                                <h2>
                                    <strong>Ambient</strong> Air Quality Monitoring Devices
                                </h2>
                                <p className="text-center">
                                    Outdoor air quality monitoring is an integral part of environmental assessments. Proper air monitoring
                                    helps in the formulation of an efficient action plan to mitigate air pollution. Conventionally, the
                                    Continuous Ambient Air Quality Management System (CAAQMS) used for ambient air monitoring is a very
                                    extensive and expensive set-up. However, not only does our device exemplify efficiency, but it is also
                                    compact and cost-efficient.
                                </p>
                                <p>&nbsp;</p>
                                <p className="text-center">
                                    The primary aspect for determining environmental stability is the Continuous Ambient Air Quality
                                    Monitoring System (CAAQMS). There are many factors that control the quality of air and many sources
                                    contributing to it such as natural, industrial and anthropogenic. Meteorological factors also alter
                                    and impact air quality. Outdoor air pollution does not just jeopardize the living. It is also
                                    detrimental to the ecology and the atmospheric chemistry of the earth. Chronic Obstructive Pulmonary
                                    Disease (COPD) and asthma are examples of bad air quality for human health. Thus, outdoor air
                                    monitoring is essential. Conventionally, the Continuous Ambient Air Quality Management System (CAAQMS)
                                    used for ambient air monitoring is a very extensive and expensive set-up as it involves regular filter
                                    changes, and importing regulations. Prana Air provides ambient air quality monitors that are easy to
                                    regulations. Prana Air provides ambient air quality monitors that are easy to use, portable, and
                                    highly accurate and cost-effective. The monitors come with detecting sensors for particulate matter,
                                    nitrogen dioxide, sulfur dioxide, hydrogen sulfide, carbon monoxide, and ozone based on different
                                    sensing techniques.
                                </p>
                                <p>&nbsp;</p>
                                <p className="text-center">
                                    Using Continuous Ambient Air Quality Management System helps you to assess pollution extent, create
                                    awareness among the general public, decisions, and policymaking, and provides you with data for air
                                    quality model evaluation and emission control strategies.
                                </p>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="compression-caaqms-title fadeInUp animated">
                                        <h3>
                                            <strong>Prana Air</strong> CAAQMS vs Traditional CAAQMS
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="row mob-row">
                                <div className="col-sm-4">
                                    <div className="caaqms-data">
                                        <h4>Pollutants</h4>
                                        <h4>Monitor Size</h4>
                                        <h4>Real-time Data</h4>
                                        <h4>Portability</h4>
                                        <h4>Device Cost</h4>
                                        <h4>Manpower</h4>
                                        <h4>Accuracy</h4>
                                        <h4>Technology</h4>
                                        <h4>Data Accessibility</h4>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="prana-air-caaqms-heading">
                                        <h3>Prana Air CAAQMS</h3>
                                    </div>
                                    <div className="prana-caaqms-data">
                                        <h5>PM10, PM2.5, SO2. NO2, O3, CO</h5>
                                        <h5>Compact &amp; lightweight</h5>
                                        <h5>In less than 30 seconds.</h5>
                                        <h5>Easy portability</h5>
                                        <h5>Low cost</h5>
                                        <h5>Very less manpower</h5>
                                        <h5>Highly accurate &amp; precise</h5>
                                        <h5>Sensor based</h5>
                                        <h5>Available on website, mobile &amp; TV app</h5>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="prana-air-caaqms-heading">
                                        <h3>Traditional CAAQMS</h3>
                                    </div>
                                    <div className="prana-caaqms-data tardition-data">
                                        <h5>Technology such as BAM</h5>
                                        <h5>Huge and bulky</h5>
                                        <h5>In 20-25 minutes.</h5>
                                        <h5>Restricted portability</h5>
                                        <h5>High cost</h5>
                                        <h5>Intensive Manpower</h5>
                                        <h5>Highly accurate results</h5>
                                        <h5>BAM/ Gravimetric etc.</h5>
                                        <h5>Centralized government websites</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="caaqms-air-quality-monitor-systm">
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/caaqms-air-quality-monitor.png"
                                                    alt="prana air ambient caaqms monitor"
                                                    width={500}
                                                    height={300}
                                                />
                                            </li>
                                            <li>
                                                <span className="parana"> Prana Air</span> Ambient Air monitor is CAAQMS (Continuous Ambient Air
                                                Quality Monitoring System) installed with sensors to detect the concentration of pollutants like
                                                PM10, PM2.5, SO2. NO2, O3, H2S, NH3, CO, etc. Prana Air monitor is smart, economical, easy to
                                                use, portable, compact lightweight, and consumes very less time for analysis and has Wi-Fi, GSM,
                                                and RS-485 type connectivity. The data is shown on a digital screen and provides 24×7 access to
                                                analytic results. The real-time data is given in less than 30 seconds with accuracy and
                                                precision.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="caaqms-air-quality-monitor-systm">
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/caaqms-air-quality-monitor-systm.png"
                                                    alt="traditional caaqms (Continuous Ambient Air Quality Monitoring System)"
                                                    width={500}
                                                    height={300}
                                                />
                                            </li>
                                            <li>
                                                <span className="parana"> Traditional CAAQMS</span> (Continuous Ambient Air Quality Monitoring
                                                System) is very big in size comparable to a small room. The system has different analyzers for
                                                different parameters such as BAM for Particulate Matter, pulsed UV fluorescence for SO2,
                                                chemiluminescence for NO2 and NH3, NDIR (Non-Dispersive Infrared Technology) for CO2, and UV
                                                photometric/ chemiluminescence for O3 and gives real-time data within 20-25 minutes. The system
                                                is bulky &amp; huge and hence its portability is restricted. It requires manpower and high
                                                maintenance cost.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* bam banner */}
            <section className="bam-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6"></div>
                        <div className="col-sm-6">
                            <div className="chip-sensor-heading bam-content fadeInUp animated">
                                <h2>Beta Attenuation Mass (BAM) Monitor</h2>
                                <p>Prana Airs high-end, but low-cost, accurate and reliable air quality monitoring system</p>
                                <p>
                                    <Link href="#contact_form">Know More</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* accuracy graph */}
            <section className="accuracy-graph-section">
                <div className="container">
                    <div className="row app-ambient-line">
                        <div className="col-sm-6">
                            <div className="app-ambient-heading graph-heading fadeInUp animated">
                                <h2>Data Accuracy Graph</h2>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="app-ambeint-para graph-para fadeInUp animated">
                                <p>
                                    In a study comparing the data accuracy of Prana Airs PM2.5 monitor to a high-end BAM monitor, the
                                    results showed that the two monitors were highly correlated.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-center">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-sensor-data-accuracy-graph.webp"
                                    alt="prana air sensor data accuracy graph"
                                    width={1000}
                                    height={600}
                                    className="graph-img img-fluid"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row mini-graph-bg">
                        <div className="col-sm-4">
                            <div className="text-center">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-data-accuracy-comparison.png"
                                    alt="prana air data accuracy comparison"
                                    width={300}
                                    height={200}
                                    className="mini-graph img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="mini-graph-text">
                                <p>How are Prana Airs sensors very reliable and accurate?</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="text-center">
                                <Link href="https://www.pranaair.com/air-quality-data-accuracy/" className="mini-graph-btn">
                                    Explore More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* case studies */}
            <section className="case-studies-section">
                <div className="container">
                    <div className="row app-ambient-line case-studies-heading">
                        <div className="col-sm-6">
                            <div className="app-ambient-heading graph-heading fadeInUp animated">
                                <h2>Case Studies</h2>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="app-ambeint-para graph-para fadeInUp animated">
                                <p>Here are some of the top organizations that have installed our ambient monitors.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <CaseStudiesSlider />
                        </div>
                    </div>
                </div>
            </section>

            {/* construction site */}
            <section className="construction-site-section">
                <div className="container">
                    <div className="row mob-row-top">
                        <div className="col-sm-6">
                            <div className="construction-heading fadeInUp animated">
                                <h2>150+</h2>
                                <p>
                                    Constructions
                                    <br />
                                    Sites Covered
                                </p>
                                <ul className="guid-line">
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/DPCC-logo.png"
                                            alt="DPCC Logo"
                                            width={80}
                                            height={80}
                                        />
                                    </li>
                                    <li>
                                        Acc. to
                                        <br />
                                        <h5>DPCC Guidelines</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div>
                                <Link href="/solutions-by-application/constructions/">
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/contruction-image.jpg"
                                        alt="prana air ambient air quality monitors for construction sites"
                                        width={500}
                                        height={350}
                                        className="construction-img img-fluid"
                                    />
                                </Link>
                                <p>
                                    <Link href="/solutions-by-application/constructions/" className="learn-more">
                                        Know More
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/arrow-ambient.png"
                                            alt="explore more"
                                            width={20}
                                            height={20}
                                        />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* chip sensor */}
            <section className="chip-sensor-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="chip-sensor-heading fadeInUp animated">
                                <h2>Air Quality Sensors</h2>
                                <p>
                                    Prana Airs sensors are the most accurate and reliable sensors on the market, providing real-time
                                    monitoring of a wide range of air pollutants.
                                    <br />
                                    <Link href="/air-quality-sensor/" className="know-how-link">
                                        Know How
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            {/* This column was empty in the original code, 
                possibly for an image or other content */}
                        </div>
                    </div>
                </div>
            </section>

            {/* client section */}
            <section className="client-section">
                <div className="container">
                    <div className="row app-ambient-line aqi-tv-heading-section">
                        <div className="col-sm-6">
                            <div className="app-ambient-heading clinet-heading fadeInUp animated">
                                <h2>Our Clientele</h2>
                            </div>
                        </div>
                        <div className="col-sm-6">{/* This column was empty in the original code */}</div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="client-logo-img-box">
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/igcar-org.png"
                                            alt="igcar org company logo"
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/microsoft-company.png"
                                            alt="microsoft company logo"
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/emaar-company.png"
                                            alt="emaar company logo"
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/siemens-company.png"
                                            alt="siemens company logo"
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/mahindra-company.png"
                                            alt="mahindra company logo"
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/renault-company.png"
                                            alt="renualt company logo"
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/bcg-group.png"
                                            alt="bcg company logo"
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/taj-hotel.png"
                                            alt="taj hotel logo"
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/foodworks.png"
                                            alt="foodworks logo"
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/asianpaints.png"
                                            alt="asianpaints logo"
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/iit-institutes.png"
                                            alt="iit institute logo"
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/neeri-company.png"
                                            alt="neeri logo"
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/ola-cab.png"
                                            alt="ola cab"
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/l-and-t-company.png"
                                            alt="l & t company logo"
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/jw-marriott.png"
                                            alt="jw marriott logo"
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                </ul>
                            </div>
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
            <ContactForm pageName="Ambient Monitor Page" />

            {/* FAQs Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="faq-heading">
                                <h2>Frequently Asked Questions</h2>
                            </div>
                            <FaqAccordion />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
