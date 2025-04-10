"use client"

import { useState, useEffect } from "react"
import "react-multi-carousel/lib/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-multi-carousel"
import './style.css';
import ContactForm from "@/Components/Contacform/ContactForm";

export default function PranaSense() {
    const [activeTab, setActiveTab] = useState('mobile-app');

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const applicationResponsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js")
            .then(() => {
                console.log("Bootstrap JS loaded");
            })
            .catch((err) => console.error("Error loading Bootstrap JS:", err));
    }, []);
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hero-text">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/09/prana-air-logo.png" alt="prana" />
                                <h1>Prana Sense Outdoor Air Quality Monitor</h1>
                                <p>Revolutionizing Air Quality Monitoring with cutting-edge technology for better accuracy and reliability with seamless connectivity and comprehensive data access.</p>
                                <a href="#get-in-touch">Contact Us <img src="https://www.pranaair.com/wp-content/uploads/2024/09/download-btn.png" alt="button icon" /></a>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="why-choose">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="why-choose-heading">
                                <h2>Features</h2>
                                <h3>Why Choose Prana Sense?</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="why-choose-prana">
                                <ul>
                                    <li>
                                        <h3>Next-Gen Sensor Technology <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Next-Gen-Sensor-Technology.webp" alt="high technology air quality sensors" /></h3>
                                    </li>
                                    <li>
                                        <h3>Smart Calibration <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Smart-Calibration.webp" alt="smart calibration for the sensors" /></h3>
                                    </li>
                                    <li>
                                        <h3>Affordable Excellence <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Affordable-Excellence.webp" alt="easy affordable price" /></h3>
                                    </li>
                                    <li>
                                        <h3>Always Connected <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Always-Connected.webp" alt="hassle free data connectivity" /></h3>
                                    </li>
                                    <li>
                                        <h3>Real-time insights <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Real-time-insights.webp" alt="real-time air quality data insights" /></h3>
                                    </li>
                                    <li>
                                        <h3>Unbeatable Accuracy <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Unbeatable-Accuracy.webp" alt="highly accurate air quality data" /></h3>
                                    </li>
                                    <li>
                                        <h3>Seamless Connectivity <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Prana-Sense-Seamless-Connectivity.webp" alt="seamless data connectivity wifi and GSM" /></h3>
                                    </li>
                                    <li>
                                        <h3>Cost-Effective Maintenance <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Cost-Effective-Maintenances.webp" alt="cost effective maintenance" /></h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gas Monitor Section */}
            <section className="gas-monitor-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="gas-monitor-heading">
                                <h2>Precision Pollutant Detection: <strong>Outdoor Air Quality Monitoring</strong></h2>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="pollutant-gas-monitor">
                                <ul>
                                    <li>
                                        <h3><img src="https://www.pranaair.com/wp-content/uploads/2024/10/PM.png" alt="sensor of Particular Matter PM2.5, PM10, PM1" /> Particular Matter (PM1,2.5 & 10)</h3>
                                    </li>
                                    <li>
                                        <h3><img src="https://www.pranaair.com/wp-content/uploads/2024/10/Temp.png" alt="sensor of Temperature and Humidity" /> Temperature & Humidity</h3>
                                    </li>
                                    <li>
                                        <h3><img src="https://www.pranaair.com/wp-content/uploads/2024/10/noise-icon.png" alt="sensor of noise monitoring" /> Noise Monitoring</h3>
                                    </li>
                                    <li>
                                        <h3><img src="https://www.pranaair.com/wp-content/uploads/2024/09/Sulfur-Dioxide.png" alt="sensor of SO2 gas" /> Sulfur Dioxide (SO2)</h3>
                                    </li>
                                    <li>
                                        <h3><img src="https://www.pranaair.com/wp-content/uploads/2024/09/Nitrogen-Dioxide.png" alt="sensor of NO2 gas" /> Nitrogen Dioxide (NO2)</h3>
                                    </li>
                                    <li>
                                        <h3><img src="https://www.pranaair.com/wp-content/uploads/2024/09/Ozone.png" alt="sensor of Ozone gas" /> Ozone (O3)</h3>
                                    </li>
                                    <li>
                                        <h3><img src="https://www.pranaair.com/wp-content/uploads/2024/09/Hydrogen-Sulfide.png" alt="sensor of H2S gas" /> Hydrogen Sulfide (H2S)</h3>
                                    </li>
                                    <li>
                                        <h3><img src="https://www.pranaair.com/wp-content/uploads/2024/09/NH3.png" alt="sensor of Ammonia NH3" /> Ammonia (NH3)</h3>
                                    </li>
                                    <li>
                                        <h3><img src="https://www.pranaair.com/wp-content/uploads/2024/09/CO.png" alt="sensor of CO gas" /> Carbon Monoxide (CO)</h3>
                                    </li>
                                    <li>
                                        <h3><img src="https://www.pranaair.com/wp-content/uploads/2024/09/CH4.png" alt="sensor of Methane CH4" /> Methane (CH4)</h3>
                                    </li>
                                    <li>
                                        <h3><img src="https://www.pranaair.com/wp-content/uploads/2024/09/VOC.png" alt="sensor of TVOC odor monitoring" /> TVOC Monitoring</h3>
                                    </li>
                                    <li>
                                        <h3><img src="https://www.pranaair.com/wp-content/uploads/2024/09/CO2.png" alt="sensor of CO2 gas" /> CO₂ Sensing</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interruption Section */}
            <section className="interruption-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="interruption-txt">
                                <h2>Power to Last without interruption</h2>
                                <p>Get mega power backup that keep your air quality monitoring working for days.</p>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="battery-txt">
                                <span className="battry">Battery</span>
                                <h3>40,000 <span className="mah">mAh</span></h3>
                            </div>
                            <div className="battery-txt backup-txt">
                                <span className="battry">Battery Backup</span>
                                <h3>96 <span className="mah">Hours</span></h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="power-img">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-sense-battery-backup.webp" alt="prana sense ambient air quality monitoring device with inbuilt battery" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solar Innovation */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="solar-heading">
                            <h2>Solar Innovation</h2>
                            <h3>power-up your air quality monitor with sunlight</h3>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="solar-txt">
                            <p>Solar-Powered Reliability for continuous operation without power supply and Eco-friendly monitoring.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="solar-innovation-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="solar-panel-txt">
                                <ul className="solar-box">
                                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/09/Prana-sense.png" alt="Prana Sense ambient air quality monitor with solar panel" /></li>
                                    <li>
                                        <h4>Solar Panel</h4>
                                        <h5>30 <span className="watt">Watt</span></h5>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="no-addi-box">
                                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/09/no-additional-controller.png" alt="Prana Sense ambient air quality monitor with No additional controllers" /></li>
                                    <li>
                                        <h4>No additional controllers or connectors Needed</h4>
                                        <p>Direct connect solar panel to the air quality monitor without additional controllers or connectors.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>

            {/* Waterproof Section */}
            <section className="waterproof-resistabnt-sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <video id="myVideo" autoPlay loop muted width="300" height="150">
                                <source src="https://www.pranaair.com/wp-content/uploads/2024/10/all-weather-warrior-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="row text-sec">
                        <div className="col-md-6">
                            <div className="waterproof-resistant-txt">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/09/IP68.png" alt="Prana Sense is a weatherproof ambient air quality monitor" />
                                <h3>All-Weather Warrior</h3>
                                <p>Built to Last that stands in every Weather condition and ensures reliable performance in rain, heatwaves, dust etc.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="all-weather-monitor-img">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/10/Weather-resistant-ambient-air-quality-monitor.webp" alt="Weather resistant ambient air quality monitor" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Weather Data */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="weaher-data">
                            <h2>Weather Data</h2>
                            <p>Not just an air quality monitor: Weather Monitoring</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="weather-monitor-headimg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="weather-data-para">
                                <p><strong>Get a complete Environmental overview:</strong> Optional weather station for real-time data weather monitoring capabilities. <a href="#"><strong>Weather Station</strong></a></p>
                            </div>
                            <div className="card-box">
                                <ul>
                                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/09/Wind-Gust.webp" alt="measuring wind gust parameter" /></li>
                                    <li className="mg-tp"><img src="https://www.pranaair.com/wp-content/uploads/2024/09/Solar-Irradiance.webp" alt="measuring solar irradiance" /></li>
                                    <li className="mg-tp"><img src="https://www.pranaair.com/wp-content/uploads/2024/09/Wind-Direction.webp" alt="measuring wind direction" /></li>
                                </ul>
                                <ul>
                                    <li className="speed"><img src="https://www.pranaair.com/wp-content/uploads/2024/09/Wind-Speed-Direction.webp" alt="measuring wind speed direction" /></li>
                                    <li className="chart"><img src="https://www.pranaair.com/wp-content/uploads/2024/09/Wind-Rose-Chart.webp" alt="wind rose chart" /></li>
                                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/09/UV-Index.webp" alt="measuring UV index" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="weather-data-img">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/10/air-quality-monitor-with-weather-station.webp" alt="Prana Sense ambient air quality monitor with weather station monitoring air quality and weather data" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Smart Features */}
            <section className="smart-feature">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="innovation-heading">
                                <h2>Innovations</h2>
                                <h3>Smart Features for Seamless Operation</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mob-row">
                        <div className="col-md-4">
                            <div className="smart-feature-box">
                                <div className="smart-feature-txt">
                                    <h3 style={{ color: '#263d4f' }}>Pinpoint Precision</h3>
                                    <p style={{ color: '#263d4f' }}>Integrated GPS for exact location tracking</p>
                                </div>
                                <div className="gps"><img src="https://www.pranaair.com/wp-content/uploads/2024/09/Pinpoint-Precision.webp" alt="Prana Sense with GPS integration to locate exact location" /></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="smart-feature-box-display">
                                <div className="smart-feature-txt">
                                    <h3>Crystal Clear Display</h3>
                                    <p>3.5-inch monochrome screen for easy data visualisation</p>
                                </div>
                                <div className="clear-display">
                                    <h4>3.5</h4>
                                    <span className="display">Display</span>
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Crystal-Clear-Display.webp" alt="air quality data display on clear big screen" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="smart-feature-data">
                                <div className="smart-feature-txt">
                                    <h3>Onboard Data Storage</h3>
                                    <p>SD card support for secure, local data logging</p>
                                </div>
                                <div className="data-storage"><img src="https://www.pranaair.com/wp-content/uploads/2024/09/Onboard-Data-Storage.webp" alt="onboard data storage on micro SD card" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Connectivity Section */}
            <section className="connectivety-sec">
                <div className="container">
                    <div className="row mob-flex">
                        <div className="col-md-6">
                            <div className="stay-monitor-img">
                                <ul>
                                    <li className="wifi"><img src="https://www.pranaair.com/wp-content/uploads/2024/09/Wi-Fi.png" alt="wifi connectivity on Prana Sense" />Wi-Fi</li>
                                </ul>
                                <div className="connect-monitor"><img src="https://www.pranaair.com/wp-content/uploads/2024/09/Anytime-connect-prana-sense-monitor.webp" alt="Easy data connectivity of Prana Sense Outdoor air quality monitor" /></div>
                                <ul>
                                    <li className="rs-mod"><img src="https://www.pranaair.com/wp-content/uploads/2024/09/RS485.png" alt="RS485 connectivity on Prana Sense" />
                                        RS485
                                        <span className="rs">(MODBUS)</span></li>
                                    <li className="gsm"><img src="https://www.pranaair.com/wp-content/uploads/2024/09/GSM.png" alt="GSM connectivity on Prana Sense" />GSM</li>
                                    <li className="lora"><img src="https://www.pranaair.com/wp-content/uploads/2024/09/LoRa.png" alt="LoRa connectivity on Prana Sense" />LoRa</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="connect-anywhere-txt">
                                <h2>Connectivity</h2>
                                <h3>Stay Connected Anytime, Anywhere</h3>
                                <p>Always stay connected and informed with Multi-Mode Connectivity: RS485, WiFi, LoRa, and 4G options in your Prana Sense.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced Technology */}
            <section className="adv-monitor">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="innovation-heading adv-tec-heading">
                                <h2>Prana Sense</h2>
                                <h3>Air Quality Monitoring with Advanced Technology</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="power-box">
                                <h3>Power Source</h3>
                                <ul className="colar">
                                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/09/solar.png" alt="solar power source in Prana Sense ambient air quality monitor" />Solar</li>
                                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/09/ac.png" alt="DC power source in Prana Sense ambient air quality monitor" />D/C</li>
                                </ul>
                                <div className="data-ofline">
                                    <div className="data-ofline-img"><img src="https://www.pranaair.com/wp-content/uploads/2024/09/air-quality-monitor.webp" alt="Prana Sense Air Quality Monitoring with Advanced Technology" /></div>
                                    <div className="data-ofline-txt">
                                        <h3>Offline Data Storage</h3>
                                        <ul>
                                            <li><img src="https://www.pranaair.com/wp-content/uploads/2024/09/sd-card.png" alt="data storage in micro SD card in Prana Sense ambient air quality monitor" />SD Card</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="connectivity-heading">
                                <h3>Connectivity</h3>
                                <div className="connectivity-ofline">
                                    <div className="connectivity-img">
                                        <ul>
                                            <li><img src="https://www.pranaair.com/wp-content/uploads/2024/09/Wi-Fi.png" alt="wifi connectivity" />
                                                Wi-Fi</li>
                                            <li><img src="https://www.pranaair.com/wp-content/uploads/2024/09/GSM.png" alt="GSM connectivity" />
                                                GSM</li>
                                        </ul>
                                    </div>
                                    <div className="connectivity-txt">
                                        <h3>Cloud Storage</h3>
                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/09/cloud-storage.png" alt="cloud data storage" />
                                    </div>
                                </div>
                                <div className="lora-mo">
                                    <span className="or">Or</span>
                                    <ul>
                                        <li><img src="https://www.pranaair.com/wp-content/uploads/2024/09/LoRa.png" alt="LoRa connectivity" />
                                            LoRa</li>
                                        <li><img src="https://www.pranaair.com/wp-content/uploads/2024/09/RS485.png" alt="RS485 connectivity" />
                                            RS485
                                            <span className="rs-mod">(MODBUS)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <ul className="app">
                                <li><img src="https://www.pranaair.com/wp-content/uploads/2024/09/aqi-mob-app.png" alt="data connectivity on AQI mobile app" />
                                    <h4>AQI Mobile Application</h4>
                                </li>
                                <li><img src="https://www.pranaair.com/wp-content/uploads/2024/09/aqi-web-dash.png" alt="air quality data accessibility on AQI web-dashboard" />
                                    <h4>AQI Web Dashboard</h4>
                                </li>
                                <li><img src="https://www.pranaair.com/wp-content/uploads/2024/09/aqi-tv-app.png" alt="air quality data accessibility on AQI TV app" />
                                    <h4>AQI TV Application</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Noise Monitoring */}
            <section className="noise-monitor">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div id="noise-heading">
                                <h2>Noise Monitoring</h2>
                                <h3>Hear the difference with Prana Sense</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="noise-para">
                                <p>Prana Sense Monitor noise levels from 30 to 130 dB with 1 dB accuracy, ensuring precise acoustic measurements.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="monitor-noise-box">
                                <li>
                                    <h5>Monitor noise levels from</h5>
                                    <h6>30 - 130 dB</h6>
                                </li>
                                <li>
                                    <h5>Accuracy</h5>
                                    <h6>1 dB</h6>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="applications">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="app-heading">
                                <h2>Applications</h2>
                                <h3>Versatility in Every Application</h3>
                                <p>Monitor air quality with Prana Sense in diverse environments and needs.</p>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="row slider-inner">
                        <div className="col-12">
                            <Carousel
                                responsive={applicationResponsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2500}
                                showDots={true}
                                className="app-slider"
                            >
                                <div className="app-card">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/09/construction-site.webp" alt="application of Prana Sense at Construction Sites" />
                                    <h3>Construction Site</h3>
                                </div>
                                <div className="app-card">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Sea-Ports.webp" alt="Application of Prana Sense at Sea Ports" />
                                    <h3>Sea Ports</h3>
                                </div>
                                <div className="app-card">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Schools-and-Universities.webp" alt="Application of Prana Sense at Schools and Universities" />
                                    <h3>Schools and Universities</h3>
                                </div>
                                <div className="app-card">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Railways-and-Metros.webp" alt="Application of Prana Sense at Railways and metros" />
                                    <h3>Railways and Metros</h3>
                                </div>
                                <div className="app-card">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Roads-And-Highways.webp" alt="Application of Prana Sense at Roads and Highways" />
                                    <h3>Roads And Highways</h3>
                                </div>
                                <div className="app-card">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Industries.webp" alt="Application of Prana Sense at industries and factories" />
                                    <h3>Industries</h3>
                                </div>
                                <div className="app-card">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Parking-Lots.webp" alt="Application of Prana Sense at Parking lots" />
                                    <h3>Parking Lots</h3>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monitor Wall */}
            <section id="monitor-wall">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="wall-monitor-img">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/10/monitor-at-wall-with-apps-data.webp" alt="Prana Sense ambient air quality monitor installed outside a building and data accessing on mobile app" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aqi-data-tab-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tab-heading">
                                <h2>Seamless accessibility</h2>
                                <h3>Air Quality Data at Your Fingertips</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row tab-inner">
                        <div className="col-12">
                            <div className="tab-section">
                                <ul className="nav nav-tabs justify-content-center">
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === 'mobile-app' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('mobile-app')}
                                        >
                                            Mobile App
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === 'web-dashboard' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('web-dashboard')}
                                        >
                                            Web Dashboard
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === 'tv-application' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('tv-application')}
                                        >
                                            TV Application
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    {activeTab === 'mobile-app' && (
                                        <div className="tab-pane fade show active">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="tab-txt">
                                                        <h3>See the data on your smartphone</h3>
                                                        <p>Get Prana Senses real-time environmental insights right in your pocket for convenient monitoring and peace of mind.</p>
                                                        <div className="connect-btn-box">
                                                            <a href="https://apps.apple.com/tt/app/aqi/id1439684571" className="iso-btn">
                                                                <ul className="seamless-connect-btn">
                                                                    <li>
                                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/07/app-store.png" alt="ios app logo" />
                                                                    </li>
                                                                    <li>
                                                                        <span className="btn-txt-small">Download on the</span>
                                                                        <br />
                                                                        <span className="btan-txt">App Store</span>
                                                                    </li>
                                                                </ul>
                                                            </a>
                                                            <a href="https://play.google.com/store/apps/details?id=com.aqi.data" className="play-store-btn">
                                                                <ul className="seamless-connect-btn">
                                                                    <li>
                                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/07/google-play.png" alt="android app" />
                                                                    </li>
                                                                    <li>
                                                                        <span className="btn-txt-small">Get it on</span>
                                                                        <br />
                                                                        <span className="btan-txt">Google Play</span>
                                                                    </li>
                                                                </ul>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="tab-img smart-phn">
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/09/air-quality-data-at-your-smartphone.webp" alt="insightful air quality data accessibility on AQI mobile app" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 'web-dashboard' && (
                                        <div className="tab-pane fade show active">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="tab-txt">
                                                        <h3>Air Quality Data on Web Dashboard</h3>
                                                        <p>Monitor real-time Prana Senses data on your laptop anytime anywhere with the web-dashboard data accessibility feature.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="tab-img web-img">
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/08/aqi-web-dashboard.png" alt="more details air quality data insights on AQI web-dashboard" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 'tv-application' && (
                                        <div className="tab-pane fade show active">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="tab-txt">
                                                        <h3>See the data on your Smart TV</h3>
                                                        <p>Get real-time environmental insights of Prana Sense on your smart TV to ensure continuous monitoring.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="tab-img tv-img">
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/07/Tv-connectivity.png" alt="air quality data on AQI TV app" />
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

            {/* Sensor Innovation */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sensor-heading">
                            <h2>Sensor innovation</h2>
                            <h3><strong>Double</strong> the Sensors, <strong>Double</strong> the Security</h3>
                        </div>
                    </div>
                </div>
            </div>

            <section className="semsor-inovation">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="sensor-para">
                                <p>The advanced technology of <strong>dual sensors</strong> in our monitors safeguards against possible sensor failure.</p>
                                <p>Also <strong>ensures continuous monitoring with zero downtime</strong>. It offers a faster response time in any discrepancies and is also a reliable option to tackle the situation.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="sensor-img">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/09/double-sensor-air-quality-monitor.webp" alt="highly accurate and advanced air quality sensors in Prana Sense Monitor" />
                                <ul>
                                    <li><span className="green">1</span>Primary sensor</li>
                                    <li><span className="yellow">1</span>Reserve sensor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sensor Data */}
            <section className="sensor-data">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="sensor-data-img">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Sensor-Data-Aligned.webp" alt="chart showing air quality sensor Data Aligned" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="sensor-data-para">
                                <h2>Scenario 1</h2>
                                <h3>Sensor Data <span className="green-txt" style={{ color: '#34a853' }}>Aligned</span></h3>
                                <p>Dual sensor technology to ensure continuous PM monitoring. The primary and reserve sensors data are aligning. Thus, the reserve sensor goes on the sleep mode.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mob-flex">
                        <div className="col-md-5">
                            <div className="sensor-data-para">
                                <h2>Scenario 2</h2>
                                <h3>Sensor Data <span className="green-txt" style={{ color: '#c63939' }}>Not Aligned</span></h3>
                                <p>The data of primary sensor and reserve sensor not aligned. Hence the reserve sensor takes over the function on Primary sensor without changing.</p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="sensor-data-img">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/09/Sensor-Data-Not-Aligned.webp" alt="chart showing air quality sensor Data Not Aligned" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slider Section */}
            <section className="slider-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="video-txt">
                                <h2>Product</h2>
                                <h3>In-house Manufacturing</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', width: '100%' }}>
                                <iframe
                                    src="https://www.youtube.com/embed/XniUY8nRFD4?autoplay=1&loop=1&playlist=XniUY8nRFD4&controls=0&vq=hd1080&mute=1"
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '20px' }}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={6000}
                                showDots={true}
                                className="video-slider"
                                centerMode={true}
                                focusOnSelect={true}
                            >
                                <div className="air-quality-monitor-manufacturing">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-sense-and-its-pcb.jpg" alt="Prana sense and its PCB" />
                                </div>
                                <div className="air-quality-monitor-manufacturing">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/10/internal-parts-of-prana-sense-monitor.jpg" alt="Internal parts of Prana sense monitor" />
                                </div>
                                <div className="air-quality-monitor-manufacturing">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/10/assembling-prana-sense-monitor.jpg" alt="Assembling Prana sense monitor" />
                                </div>
                                <div className="air-quality-monitor-manufacturing">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/10/air-quality-sensors-of-prana-sense-monitor.jpg" alt="Air quality sensors of Prana sense monitor" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
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
                                <a href="#">Brochure <img src="https://www.pranaair.com/wp-content/uploads/2024/09/download-btn.png" alt="brochore-btn" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row mid-box mob-scroll">
                        <div className="col-md-6">
                            <div className="product-specifi">
                                Product Name :
                                <h4>Prana Sense</h4>
                            </div>
                            <div className="product-specifi shdw-line">
                                Solar Panel:
                                <h4>30Watt</h4>
                            </div>
                            <div className="product-specifi">
                                LED Screen Size:
                                <h4>3.5inch</h4>
                            </div>
                            <div className="product-specifi shdw-line">
                                Dimension :
                                <h4>230*150*85mm</h4>
                            </div>
                            <div className="product-specifi">
                                Weight:
                                <h4>1kg</h4>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="product-specifi">
                                Battery working hours :
                                <h4>96hrs</h4>
                            </div>
                            <div className="product-specifi shdw-line">
                                Battery capacity:
                                <h4>40,000mAh</h4>
                            </div>
                            <div className="product-specifi">
                                Connectivity:
                                <h4>LoRa, GSM, WiFi, RS485</h4>
                            </div>
                            <div className="product-specifi shdw-line">
                                Location Tracking:
                                <h4>GPS</h4>
                            </div>
                            <div className="product-specifi">
                                Weather Rating:
                                <h4>IP68</h4>
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
                            <p>
                                Please help us know what requirements you have. Our team will
                                contact you very soon.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm pageName="Prana Sense Page" />

            {/* FAQ Section */}
            <section className="tab-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="frequently-asked-questions">
                                <h2>Frequently Asked <span className="faq">Questions</span></h2>
                            </div>
                        </div>
                        <div className="col-md-8"></div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item my-tab-section">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                            1. What makes Prana Sense different from other air quality monitors?
                                        </button>
                                    </h4>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>Prana Sense is not your ordinary outdoor air quality monitor because it is a complete environmental monitoring device. Additionally, it can operate with solar power.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item my-tab-section">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                            2. Can I use Prana Sense in remote areas?
                                        </button>
                                    </h4>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>Yes, the Prana Sense monitor can be used in remote areas as it has an option for solar panels. It can connect directly to the device without the need for a controller.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item my-tab-section">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                            3. What parameters can be monitored with the Dual sensor technology?
                                        </button>
                                    </h4>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>Dual-sensor technology is available for Particulate Matter. It offers the continuous monitoring of PM in the air without facing any difficulty.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item my-tab-section">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                            4. What if both sensors data does not aligned?
                                        </button>
                                    </h4>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>In dual-sensor technology, the reserve sensor works for one month to check the primary sensors working capabilities. If both sensors data is not aligned, the reserve sensor takes over and the primary sensor goes to sleep.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
