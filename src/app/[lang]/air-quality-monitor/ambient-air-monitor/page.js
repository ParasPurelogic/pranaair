
import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/Components/Contacform/ContactForm"
import "./style.css"
import CaseStudiesSlider from "@/Components/Pages/AmbientAirmonitor/CaseSlider"
import { getServerTranslation } from "@/i18n/server"

export default async function AmbientAirMonito() {
    const { t } = await getServerTranslation("ambient")
    const caseStudies = [
        {
            image: "https://www.pranaair.com/wp-content/uploads/2023/10/air-quality-monitors-for-tata.webp",
            title: "Aided TATA STEEL Plant In Hyperlocal Air Monitoring",
            link: "https://www.pranaair.com/blog/case-study-prana-air-aids-tata-steel-in-hyperlocal-air-quality-monitoring/",
            alt: "prana air ambient air quality monitors at tata steel",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2023/10/air-quality-monitors-for-ola-and-microsoft.webp",
            title: "Aided Ola & Microsoft studied street-level pollution",
            link: "https://www.pranaair.com/blog/prana-air-monitors-street-level-pollution/",
            alt: "prana air ambient air quality monitors for ola and microsoft",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2023/10/air-quality-monitors-for-mahindra-lifespaces.webp",
            title: "Mahindra Lifespaces to monitor air pollution due to construction activities.",
            link: "https://www.pranaair.com/blog/mahindra-lifespaces-air-quality-due-to-construction-and-demolition-activities/",
            alt: "prana air ambient air quality monitors for mahindra lifespaces",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2023/10/air-quality-monitors-for-CII.webp",
            title: "CII to monitor air pollution due to stubble burning",
            link: "https://www.pranaair.com/blog/case-study-air-pollution-due-to-stubble-burning/",
            alt: "prana air ambient air quality monitors for CII",
        },
    ]
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ambient-banner">
                                <span className="title">{t("ambient.title")}</span>
                                <h1>
                                    <span className="hd-txt">{t("ambient.heading.highlight")}</span> {t("ambient.heading.main")}
                                </h1>
                                <p>{t("ambient.description")}</p>
                                <a href="#contact_form" aria-label={t("ambient.ctaAriaLabel")}>
                                    {t("ambient.cta")}
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ambient-img">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/ambient-air-quality-monitors.webp"
                                    alt={t("ambient.imageAlt")}
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

                    <div className="row tab-sections">
                        <div className="col-lg-9">
                            {/* Tab Content */}
                            <div className="tab-content" id="ambientTabsContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="ambient-pm-content"
                                    role="tabpanel"
                                    aria-labelledby="ambient-pm-tab"
                                >
                                    <div className="color-box">
                                        <div className="ambient-pm-content">
                                            <h3>Ambient PM</h3>
                                            <p>
                                                It is the basic ambient monitor that measures AQI, PM2.5, PM10, temperature, and humidity providing a
                                                comprehensive overview of the air quality around you.
                                            </p>
                                            <h4>Features</h4>
                                        </div>

                                        <div className="drone-icon-list">
                                            <ul>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/low-cost-icon.png"
                                                        alt="low cost icon"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>Low-cost real-time air quality monitoring</p>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/compact-device.png"
                                                        alt="compact device"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>Compact and lightweight design</p>
                                                </li>
                                            </ul>

                                            <ul>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/weatherproof-icon.png"
                                                        alt="weatherproof icon"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>Fully Waterproof Housing</p>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/portable-icon.png"
                                                        alt="portable icon"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>Portable and easy to carry anywhere</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="aqi-data">
                                            <ul>
                                                <li>
                                                    <h5>AQI</h5>
                                                </li>
                                                <li>
                                                    <h5>PM1</h5>
                                                </li>
                                                <li>
                                                    <h5>PM2.5</h5>
                                                </li>
                                                <li>
                                                    <h5>PM10</h5>
                                                </li>
                                                <li>
                                                    <h5>Temp.</h5>
                                                </li>
                                                <li>
                                                    <h5>Humid.</h5>
                                                </li>
                                                <li>
                                                    <h5>Noise</h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="get-brochur">
                                        <ul>
                                            <li>
                                                <a href="https://www.pranaair.com/wp-content/uploads/2024/06/construction-site-Prana-Air-Air-quality-monitor-brochure.pdf">
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                                                        alt="download brochure"
                                                        width={22}
                                                        height={22}
                                                    />
                                                    Brochure
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#contact_form">Get a Quote</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="show-container">
                                        <button
                                            className="showbutton"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#londonDetails"
                                            aria-expanded="false"
                                            aria-controls="londonDetails"
                                        >
                                            View Details
                                            <Image
                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                                                alt=""
                                                width={18}
                                                height={18}
                                            />
                                        </button>
                                        <div className="collapse" id="londonDetails">
                                            <div className="contentmy">
                                                <h3>Ambient PM</h3>
                                                <p>
                                                    Prana Air Ambient PM Basic Monitor is a comprehensive solution for measuring air quality. It
                                                    accurately measures PM2.5, PM10, temperature, and humidity, providing you with valuable insights
                                                    into the air you breathe. With an optional weather station, you can also gain data on wind speed,
                                                    wind direction, rainfall, and barometric pressure. The compact and portable design of the Prana Air
                                                    Ambient PM Basic Monitor makes it easy to use anywhere. The clear and easy-to-read screen displays
                                                    real-time data, and built-in data logging allows you to track trends over time. Cloud connectivity
                                                    provides remote access to data, so you can stay informed about air quality even when youe not on
                                                    site.
                                                </p>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Prana-Air-Ambient-PM-Basic-Monitors.webp"
                                                    alt="prana air ambient air quality monitor for constructions site"
                                                    width={800}
                                                    height={400}
                                                />
                                            </div>
                                            <button
                                                className="close-btn hidebutton"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#londonDetails"
                                                aria-expanded="true"
                                                aria-controls="londonDetails"
                                            >
                                                Close
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                                                    alt="close icon"
                                                    width={18}
                                                    height={18}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="prana-sense-content" role="tabpanel" aria-labelledby="prana-sense-tab">
                                    <div className="color-box">
                                        <div className="ambient-pm-content">
                                            <h3>Prana Sense</h3>
                                            <p>
                                                Revolutionizing Air Quality Monitoring with cutting-edge technology for better accuracy and
                                                reliability with seamless connectivity and comprehensive data access.
                                            </p>
                                            <h4>Features</h4>
                                        </div>

                                        <div className="drone-icon-list">
                                            <ul>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/low-cost-icon.png"
                                                        alt="low cost icon"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>Low-cost real-time air quality monitoring</p>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/weatherproof-icon.png"
                                                        alt="weatherproof icon"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>Fully Waterproof Housing</p>
                                                </li>
                                            </ul>

                                            <ul>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/solar-powered.png"
                                                        alt="solar powered"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>Solar Powered</p>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/battery-backup.png"
                                                        alt="battery-backup icon"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>96h Battery Backup</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="aqi-data">
                                            <ul>
                                                <li>
                                                    <h5>AQI</h5>
                                                </li>
                                                <li>
                                                    <h5>PM1</h5>
                                                </li>
                                                <li>
                                                    <h5>PM2.5</h5>
                                                </li>
                                                <li>
                                                    <h5>PM10</h5>
                                                </li>
                                                <li>
                                                    <h5>CO</h5>
                                                </li>
                                                <li>
                                                    <h5>CO2</h5>
                                                </li>
                                                <li>
                                                    <h5>SO2</h5>
                                                </li>
                                                <li>
                                                    <h5>NO</h5>
                                                </li>
                                                <li>
                                                    <h5>NO2</h5>
                                                </li>
                                                <li>
                                                    <h5>O3</h5>
                                                </li>
                                                <li>
                                                    <h5>CH4</h5>
                                                </li>
                                                <li>
                                                    <h5>TVOC</h5>
                                                </li>
                                                <li>
                                                    <h5>H2S</h5>
                                                </li>
                                                <li>
                                                    <h5>Temp.</h5>
                                                </li>
                                                <li>
                                                    <h5>Humid.</h5>
                                                </li>
                                                <li>
                                                    <h5>Noise</h5>
                                                </li>
                                                <li>
                                                    <h5>Wind Direction</h5>
                                                </li>
                                                <li>
                                                    <h5>Wind Speed</h5>
                                                </li>
                                                <li>
                                                    <h5>Rainfall</h5>
                                                </li>
                                                <li>
                                                    <h5>UV Index</h5>
                                                </li>
                                                <li>
                                                    <h5>LUX</h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="get-brochur">
                                        <ul>
                                            <li>
                                                <a href="https://www.pranaair.com/wp-content/uploads/2024/06/construction-site-Prana-Air-Air-quality-monitor-brochure.pdf">
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                                                        alt="brochure"
                                                        width={22}
                                                        height={22}
                                                    />
                                                    Brochure
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#contact_form">Get a Quote</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="show-container">
                                        <button
                                            className="showbutton"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#solarDetails"
                                            aria-expanded="false"
                                            aria-controls="solarDetails"
                                        >
                                            View Details
                                            <Image
                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                                                alt=""
                                                width={18}
                                                height={18}
                                            />
                                        </button>
                                        <div className="collapse" id="solarDetails">
                                            <div className="contentmy">
                                                <h3>Prana Sense</h3>
                                                <p>
                                                    Prana Sense offers the ultimate solution for continuous, real-time outdoor air quality monitoring.
                                                    Monitor several parameters and pollutants with the advanced technology of the device. Connect the
                                                    device with a solar panel for continuous power supply with a 40,000 mAh battery that can last long
                                                    for 96 hours. The compact and portable design of the monitor makes it easy to install anywhere. Also
                                                    provide real-time readings of temperature, humidity and noise for perfect environmental monitoring.
                                                    Seamlessly connect to the AQI app or cloud storage to access your data from anywhere, anytime.
                                                </p>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Prana-Sense-device.webp"
                                                    alt="prana air ambient pro air quality monitor in used"
                                                    width={800}
                                                    height={400}
                                                />
                                            </div>
                                            <button
                                                className="close-btn hidebutton"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#solarDetails"
                                                aria-expanded="true"
                                                aria-controls="solarDetails"
                                            >
                                                Close
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                                                    alt="close icon"
                                                    width={18}
                                                    height={18}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="ambient-pro-content" role="tabpanel" aria-labelledby="ambient-pro-tab">
                                    <div className="color-box">
                                        <div className="ambient-pm-content">
                                            <h3>Ambient Pro</h3>
                                            <p>
                                                It is the most advanced monitor in Prana Airs Ambient family. It measures all of the same pollutants
                                                as the Ambient Lite monitor, plus temperature and humidity.
                                            </p>
                                            <h4>Features</h4>
                                        </div>

                                        <div className="drone-icon-list">
                                            <ul>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/low-cost-icon.png"
                                                        alt="low cost icon"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>Low-cost air quality monitors</p>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/online-data-access.png"
                                                        alt="online data access"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>Data on website, mobile & table apps, TV</p>
                                                </li>
                                            </ul>

                                            <ul>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/weatherproof-icon.png"
                                                        alt="weatherproof icon"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>Fully Waterproof Housing</p>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/multiple-sensors.png"
                                                        alt="multiple sensors icon"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>Multiple air sensors (PM & Gases)</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="aqi-data">
                                            <ul>
                                                <li>
                                                    <h5>AQI</h5>
                                                </li>
                                                <li>
                                                    <h5>PM1</h5>
                                                </li>
                                                <li>
                                                    <h5>PM2.5</h5>
                                                </li>
                                                <li>
                                                    <h5>PM10</h5>
                                                </li>
                                                <li>
                                                    <h5>CO</h5>
                                                </li>
                                                <li>
                                                    <h5>CO2</h5>
                                                </li>
                                                <li>
                                                    <h5>SO2</h5>
                                                </li>
                                                <li>
                                                    <h5>NO</h5>
                                                </li>
                                                <li>
                                                    <h5>NO2</h5>
                                                </li>
                                                <li>
                                                    <h5>O3</h5>
                                                </li>
                                                <li>
                                                    <h5>CH4</h5>
                                                </li>
                                                <li>
                                                    <h5>TVOC</h5>
                                                </li>
                                                <li>
                                                    <h5>H2S</h5>
                                                </li>
                                                <li>
                                                    <h5>Temp.</h5>
                                                </li>
                                                <li>
                                                    <h5>Humid.</h5>
                                                </li>
                                                <li>
                                                    <h5>Noise</h5>
                                                </li>
                                                <li>
                                                    <h5>Wind Direction</h5>
                                                </li>
                                                <li>
                                                    <h5>Wind Speed</h5>
                                                </li>
                                                <li>
                                                    <h5>Rainfall</h5>
                                                </li>
                                                <li>
                                                    <h5>LUX</h5>
                                                </li>
                                                <li>
                                                    <h5>UV Index</h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="get-brochur">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                                                        alt="brochure"
                                                        width={22}
                                                        height={22}
                                                    />
                                                    Brochure
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/air-quality-monitor/ambient-air-monitor/prana-sense/">Get a Quote</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="ambent-weather-staion">
                                        <div className="staions-image">
                                            <Image
                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-ambient-pro-monitor-variants.webp"
                                                alt="prana air ambient pro monitor variants"
                                                width={250}
                                                height={250}
                                            />
                                        </div>
                                        <div className="staion-tetx">
                                            <h4>Ambient Pro Monitor</h4>
                                            <p>
                                                It is the most advanced ambient air quality monitor of Prana Air that comes with inbuilt weather
                                                station.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="show-container">
                                        <button
                                            className="showbutton"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#tokyoDetails"
                                            aria-expanded="false"
                                            aria-controls="tokyoDetails"
                                        >
                                            View Details
                                            <Image
                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                                                alt=""
                                                width={18}
                                                height={18}
                                            />
                                        </button>
                                        <div className="collapse" id="tokyoDetails">
                                            <div className="contentmy">
                                                <h3>Ambient Pro Inbuilt Weather Station</h3>
                                                <p>
                                                    The primary aspect for determining environmental stability is the Continuous Ambient Air Quality
                                                    Monitoring System (CAAQMS). There are many factors that control the quality of air and many sources
                                                    contributing to it such as natural, industrial and anthropogenic. Meteorological factors also alter
                                                    and impact air quality. Outdoor air pollution does not just jeopardize the living. It is also
                                                    detrimental to the ecology and the atmospheric chemistry of the earth. Chronic Obstructive Pulmonary
                                                    Disease (COPD) and asthma are examples of bad air quality for human health.
                                                </p>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Ambient-Pro-Monitor.webp"
                                                    alt="prana air ambient pro air quality monitor in used"
                                                    width={800}
                                                    height={400}
                                                />
                                            </div>
                                            <button
                                                className="close-btn hidebutton"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#tokyoDetails"
                                                aria-expanded="true"
                                                aria-controls="tokyoDetails"
                                            >
                                                Close
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                                                    alt="close icon"
                                                    width={18}
                                                    height={18}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            {/* Nav tabs */}
                            <ul className="nav nav-tabs variant-tab" id="ambientTabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="ambient-pm-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#ambient-pm-content"
                                        type="button"
                                        role="tab"
                                        aria-controls="ambient-pm-content"
                                        aria-selected="true"
                                    >
                                        <div className="tab-inner">
                                            <div>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Ambient-PM-monitor.webp"
                                                    alt="prana air ambient pm air quality monitor"
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                            <div>
                                                <h3>Ambient PM</h3>
                                            </div>
                                            <div>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/arrow-ambient.png"
                                                    alt="arrow"
                                                    width={20}
                                                    height={20}
                                                    className="arrow"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="prana-sense-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#prana-sense-content"
                                        type="button"
                                        role="tab"
                                        aria-controls="prana-sense-content"
                                        aria-selected="false"
                                    >
                                        <div className="tab-inner">
                                            <div>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/ambient-variants-prana-sense-monitor.webp"
                                                    alt="prana air ambient pro air quality monitor"
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                            <div>
                                                <h3>Prana Sense</h3>
                                            </div>
                                            <div>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/arrow-ambient.png"
                                                    alt="arrow"
                                                    width={20}
                                                    height={20}
                                                    className="arrow"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="ambient-pro-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#ambient-pro-content"
                                        type="button"
                                        role="tab"
                                        aria-controls="ambient-pro-content"
                                        aria-selected="false"
                                    >
                                        <div className="tab-inner">
                                            <div>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Prana-Airs-ambient-pro-monitor.webp"
                                                    alt="prana air ambient pro air quality monitor"
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                            <div>
                                                <h3>Ambient Pro</h3>
                                            </div>
                                            <div>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/arrow-ambient.png"
                                                    alt="arrow"
                                                    width={20}
                                                    height={20}
                                                    className="arrow"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
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
                            <div className="part-label-tab">
                                <ul className="nav nav-tabs" id="partsLabelTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="ambient-pm-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#ambient-pm"
                                            type="button"
                                            role="tab"
                                            aria-controls="ambient-pm"
                                            aria-selected="true"
                                        >
                                            Ambient PM
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="ambient-pro-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#ambient-pro"
                                            type="button"
                                            role="tab"
                                            aria-controls="ambient-pro"
                                            aria-selected="false"
                                        >
                                            Ambient Pro
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="prana-sense-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#prana-sense"
                                            type="button"
                                            role="tab"
                                            aria-controls="prana-sense"
                                            aria-selected="false"
                                        >
                                            Prana Sense
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="partsLabelTabContent">
                                    <div className="tab-pane fade show active" id="ambient-pm" role="tabpanel" aria-labelledby="ambient-pm-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Image
                                                    className="ambeint-pm"
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-air-Ambient-PM.webp"
                                                    alt="ambient-pm-monitor-pranaair"
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                            <div className="col-md-6 list-line">
                                                <div className="ambient-lite-label-list">
                                                    <ul>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num1.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>Mode Button</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num2.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>Power Button</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num3.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>PM Sensor Inlet (2)</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num4.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>Air Inlet - Temperature & Humidity</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num5.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>Micro SD Card Slot</h4>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num6.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>Weather Station Slot</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num7.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>12V DC</h4>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="ambient-pro" role="tabpanel" aria-labelledby="ambient-pro-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Image
                                                    className="ambeint-pro"
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Parts-Label-Ambient-pro.webp"
                                                    alt="ambient-pro-monitor-pranaair.png"
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                            <div className="col-md-6 list-line">
                                                <div className="ambient-pro-label-list">
                                                    <ul>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num1.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                        </li>
                                                        <li>
                                                            <h4>Gases Inlet</h4>
                                                            SO2, NO2, CO, O3, TVOCS, H2S and NH3.
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num2.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                        </li>
                                                        <li>
                                                            <h4>7 inch LED Data Display</h4>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num3.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                        </li>
                                                        <li>
                                                            <h4>Air Inlet</h4>
                                                            Noise & PM (1, 2.5, 10), Temperature, Humidity and Pressure.
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num4.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                        </li>
                                                        <li>
                                                            <h4>Weather</h4>
                                                            LUX, Wind Speed, Wind Direction, UV and Rainfall.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="prana-sense" role="tabpanel" aria-labelledby="prana-sense-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Image
                                                    className="ambeint-lite"
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-sense-monitor-pranaair.webp"
                                                    alt="ambient-lite-monitor-pranaair"
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                            <div className="col-md-6 list-line">
                                                <div className="ambient-lite-label-list">
                                                    <ul>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num1.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>PM Sensor Inlet (2)</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num2.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>GPS Antenna</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num3.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>Air Inlet - T/H</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num4.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>Mode Button</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num5.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>Micro SD Card Slot</h4>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num6.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>Power Button</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num7.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>12V DC</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/10/num8.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>Weather Station Slot</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/10/num9.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>RS485/ Relay</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/10/num10.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>Air Out</h4>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            <div className="tech-tab-spec">
                                <ul className="nav nav-tabs" id="techTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="ambient-pm-tech-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#ambient-pm-tech"
                                            type="button"
                                            role="tab"
                                            aria-controls="ambient-pm-tech"
                                            aria-selected="true"
                                        >
                                            Ambient PM
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="ambient-pro-tech-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#ambient-pro-tech"
                                            type="button"
                                            role="tab"
                                            aria-controls="ambient-pro-tech"
                                            aria-selected="false"
                                        >
                                            Ambient Pro
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="prana-sense-tech-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#prana-sense-tech"
                                            type="button"
                                            role="tab"
                                            aria-controls="prana-sense-tech"
                                            aria-selected="false"
                                        >
                                            Prana Sense
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="techTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="ambient-pm-tech"
                                    role="tabpanel"
                                    aria-labelledby="ambient-pm-tech-tab"
                                >
                                    <a
                                        className="tech-spec-btn"
                                        href="https://www.pranaair.com/wp-content/uploads/2024/06/construction-site-Prana-Air-Air-quality-monitor-brochure.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                                            alt="brochure-icon"
                                            width={20}
                                            height={20}
                                        />
                                        Brochure
                                    </a>
                                    <div className="tech-spec-parameter">
                                        <ul className="basic-pm">
                                            <li>
                                                <h4>Basic Parameters:</h4>
                                            </li>
                                            <li>AQI, PM1, PM2.5, PM10, Temperature and Humidity</li>
                                        </ul>
                                        <ul className="tech-color-box">
                                            <li>
                                                <h4>Basic PM + Weather Station:</h4>
                                            </li>
                                            <li>Basic parameters + LUX, Solar Irradiance, Wind Speed, Wind Direction, Rainfall, Gust & UV Index</li>
                                        </ul>
                                        <div className="tech-spec-inner-parameter">
                                            <div className="tech-spec-inner-one ambient-lite-pm">
                                                <ul>
                                                    <li>
                                                        <h4>Connectivity</h4>
                                                    </li>
                                                    <li>Wifi or GSM</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Weight:</h4>
                                                    </li>
                                                    <li>600g (Approx)</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Data Interval:</h4>
                                                    </li>
                                                    <li>30s to 1hour</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>USB Type:</h4>
                                                    </li>
                                                    <li>Micro USB</li>
                                                </ul>
                                            </div>
                                            <div className="tech-spec-inner-two">
                                                <ul>
                                                    <li>
                                                        <h4>Mobile app:</h4>
                                                    </li>
                                                    <li>AQI App (available on ios and android)</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Dimensions:</h4>
                                                    </li>
                                                    <li>16.5 x 5 x 11.5 (cm)</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Storage:</h4>
                                                    </li>
                                                    <li>AQI Cloud Storage</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Housing</h4>
                                                    </li>
                                                    <li>Weatherproof</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="ambient-pro-tech" role="tabpanel" aria-labelledby="ambient-pro-tech-tab">
                                    <div className="tech-spec-parameter">
                                        <ul>
                                            <li>
                                                <h4>Parameters:</h4>
                                            </li>
                                            <li>Ambient Lite + O3, CH4, Noise, NH3, LUX, Wind Speed, Wind Direction, Rainfall and UV Index</li>
                                        </ul>
                                        <div className="tech-spec-inner-parameter">
                                            <div className="tech-spec-inner-one-pm">
                                                <ul>
                                                    <li>
                                                        <h4>Connectivity</h4>
                                                    </li>
                                                    <li>Wifi or GSM(4G) and RS-485 (MODBUS)</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Weight:</h4>
                                                    </li>
                                                    <li>1.4kg. (Approx)</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Battery:</h4>
                                                    </li>
                                                    <li>—</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>USB Type:</h4>
                                                    </li>
                                                    <li>—</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Data Interval:</h4>
                                                    </li>
                                                    <li>30 sec to 1 Hour</li>
                                                </ul>
                                            </div>
                                            <div className="tech-spec-inner-two mg-top">
                                                <ul>
                                                    <li>
                                                        <h4>Mobile app:</h4>
                                                    </li>
                                                    <li>AQI Mobile App</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Dimensions:</h4>
                                                    </li>
                                                    <li>18 X 38 (cm)</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Storage:</h4>
                                                    </li>
                                                    <li>AQI Cloud Storage</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Housing</h4>
                                                    </li>
                                                    <li>Weatherproof</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="prana-sense-tech" role="tabpanel" aria-labelledby="prana-sense-tech-tab">
                                    <Link className="tech-spec-btn" href="#">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                                            alt="brochure-icon"
                                            width={20}
                                            height={20}
                                        />
                                        Brochure
                                    </Link>
                                    <div className="tech-spec-parameter">
                                        <ul>
                                            <li>
                                                <h4>Parameters:</h4>
                                            </li>
                                            <li>PM10, PM2.5 & PM1, temp., Humid, CO2, NO2, CO, SO2, O3,NH3, TVOC MOS, Noise,CH4</li>
                                        </ul>
                                        <div className="tech-spec-inner-parameter">
                                            <div className="tech-spec-inner-one-pm">
                                                <ul>
                                                    <li>
                                                        <h4>Connectivity</h4>
                                                    </li>
                                                    <li>Wi-Fi, GSM, LoRa,and RS-485</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Weight:</h4>
                                                    </li>
                                                    <li>1 kg. (Approx)</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Power:</h4>
                                                    </li>
                                                    <li>Inbuilt Solar Panel</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Data Interval:</h4>
                                                    </li>
                                                    <li>30 sec to 1 Hour</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Display Size:</h4>
                                                    </li>
                                                    <li>Monochrome 3.5 inch</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Battery:</h4>
                                                    </li>
                                                    <li>40,000 mAh in-built Backup (96 Hours)</li>
                                                </ul>
                                            </div>
                                            <div className="tech-spec-inner-two mg-top">
                                                <ul>
                                                    <li>
                                                        <h4>Mobile app:</h4>
                                                    </li>
                                                    <li>AQI Mobile App</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Dimensions:</h4>
                                                    </li>
                                                    <li>230 X 150 X 85mm</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Housing</h4>
                                                    </li>
                                                    <li>Weatherproof</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Power Supply:</h4>
                                                    </li>
                                                    <li>Direct Power Supply or Solar (30watt)</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>Storage:</h4>
                                                    </li>
                                                    <li>Micro SD Card Storage + Cloud Storage (with AQI Dashboard)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            <div className="data-tab">
                                <ul className="nav nav-tabs" id="dataTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="web-dashboard-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#web-dashboard"
                                            type="button"
                                            role="tab"
                                            aria-controls="web-dashboard"
                                            aria-selected="true"
                                        >
                                            Web-Dashboard
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="mobile-app-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#mobile-app"
                                            type="button"
                                            role="tab"
                                            aria-controls="mobile-app"
                                            aria-selected="false"
                                        >
                                            Mobile App
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="tv-app-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tv-app"
                                            type="button"
                                            role="tab"
                                            aria-controls="tv-app"
                                            aria-selected="false"
                                        >
                                            TV App
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-content" id="dataTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="web-dashboard"
                                    role="tabpanel"
                                    aria-labelledby="web-dashboard-tab"
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="aqi-tv-app-box">
                                                <ul className="aqi-tv-img">
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/AQI-Dashboard-icon.png"
                                                            alt="aqi data web-dasbhoard"
                                                            width={85}
                                                            height={85}
                                                        />
                                                    </li>
                                                    <li>
                                                        <h4>AQI Web-Dashboard</h4>
                                                        <p>Analyze the real-time and historic data of your ambient monitor data on website.</p>
                                                    </li>
                                                </ul>
                                                <div className="data-icon">
                                                    <div className="data-icon-box1">
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/World-air-pollution.png"
                                                                    alt="world pollution"
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>Analysis: Worlds most polluted cities and countries.</h6>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/weather.png"
                                                                    alt="weather data"
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>Weather forecast of your current selected location</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="data-icon-box1">
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/health-recommendation.png"
                                                                    alt="health recommendation"
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>Health advice based on real-time air quality index</h6>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/Compare.png"
                                                                    alt="compare the air quality data"
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>Compare different air quality parameters of two or more location</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="aqi-tv-btn-box">
                                                    <ul>
                                                        <li>
                                                            <a className="apple-btn" href="https://www.aqi.in/userlogin">
                                                                View Dashboard
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="indoor-index-image">
                                                <Image
                                                    className="aqidash-img"
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-dashboard-co2.png"
                                                    alt="aqi data web-dashboard"
                                                    width={600}
                                                    height={400}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="mobile-app" role="tabpanel" aria-labelledby="mobile-app-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="aqi-tv-app-box">
                                                <ul className="aqi-tv-img">
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-dashboard-co2.png"
                                                            alt="aqi mobile app"
                                                            width={85}
                                                            height={85}
                                                        />
                                                    </li>
                                                    <li>
                                                        <h4>AQI Mobile App</h4>
                                                        <p>Access your ambient air monitor data on the app.</p>
                                                    </li>
                                                </ul>
                                                <div className="data-icon">
                                                    <div className="data-icon-box1">
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/real-time-co2-level.png"
                                                                    alt="real-time data"
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>Real-time air quality API for accurate global data</h6>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-data.png"
                                                                    alt="air quality historic data"
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>Insightful Air quality monitoring dashboard</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="data-icon-box1">
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/World-air-pollution.png"
                                                                    alt="world air pollution data"
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>World air pollution map and weather map</h6>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/Compare.png"
                                                                    alt="compare air quality data"
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>Compare different air quality parameters of two or more location</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="aqi-tv-btn-box">
                                                    <ul>
                                                        <li>
                                                            <a className="apple-btn" href="https://apps.apple.com/tt/app/aqi/id1439684571">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/apple-icon.png"
                                                                    alt="aqi ios app"
                                                                    width={15}
                                                                    height={15}
                                                                />
                                                                Download for <span className="iso">iOS</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="apple-btn andro-btn"
                                                                href="https://play.google.com/store/apps/details?id=com.aqi.data"
                                                            >
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/android-icon.png"
                                                                    alt="aqi android app"
                                                                    width={15}
                                                                    height={15}
                                                                />
                                                                Download for <span className="andro">android</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="indoor-index-image">
                                                <Image
                                                    className="mobile-app"
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/ambient-pm-only-pm.png"
                                                    alt="aqi mobile app"
                                                    width={300}
                                                    height={400}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tv-app" role="tabpanel" aria-labelledby="tv-app-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="aqi-tv-app-box">
                                                <ul className="aqi-tv-img">
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/AQI-Dashboard-icon.png"
                                                            alt="aqi tv app"
                                                            width={85}
                                                            height={85}
                                                        />
                                                    </li>
                                                    <li>
                                                        <h4>AQI TV App</h4>
                                                        <p>Display your ambient monitor data on big TV screen.</p>
                                                    </li>
                                                </ul>
                                                <div className="data-icon">
                                                    <div className="data-icon-box1">
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/Compare.png"
                                                                    alt="compare air quality data"
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>Outdoor vs Indoor Air Quality data</h6>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/24-hours.png"
                                                                    alt="historic data on tv"
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>24*7 remote access to the monitored data</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="data-icon-box1">
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/AQI.png"
                                                                    alt="aqi data on tv"
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>AQI TV app controlled by AQI mobile app.</h6>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/Choose.png"
                                                                    alt="choose aqi tv app theme"
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>Choose from multiple ranges of themes.</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="aqi-tv-btn-box">
                                                    <ul>
                                                        <li>
                                                            <a className="apple-btn" href="https://play.google.com/store/apps/details?id=com.aqitv.aqitvnew">
                                                                Download for <span className="iso">TV</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="indoor-index-image">
                                                <Image
                                                    className="tv-app"
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-tv-app-dashboard.png"
                                                    alt="aqi tv app"
                                                    width={600}
                                                    height={400}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            <CaseStudiesSlider caseStudies={caseStudies} />
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
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq1"
                                            aria-expanded="true"
                                            aria-controls="faq1"
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
                                            aria-controls="faq2"
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
                                            aria-controls="faq3"
                                        >
                                            3. How can I access OxyCo data?
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            You can seamlessly access the OxyCo data by downloading it in different formats or transferring it to your
                                            email.
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
                                            aria-controls="faq4"
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
