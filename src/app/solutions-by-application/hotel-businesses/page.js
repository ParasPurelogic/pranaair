'use client';

import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.css';
import ContactForm from "@/Components/Contacform/ContactForm";


export default function AirQualitySolutions() {
    const [activeTab, setActiveTab] = useState('air-quality-monitors');

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };
    const sliderQuality = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
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
            {/* Banner Section */}
            <div className="row school_banner_box" style={{ backgroundImage: "url('https://www.pranaair.com/wp-content/uploads/2022/09/air-quality-solution-for-hotels.jpg')" }}>
                <div className="col-md-6 banner_quality_box">
                    <div className="pocket_title_box school_aqi_box">
                        <h1>Air quality solutions for <span className="bold_text">Hotel Businesses</span></h1>
                        <p>All-around air quality monitoring systems and clean air solutions with data accessibility for Hotel Businesses.</p>

                        <a className="pocket_buy_btn" href="#get_in_touch">Get a Quote</a>
                    </div>
                </div>
                <div className="col-md-6 banner_quality_img_box"></div>
            </div>

            {/* Major Air Pollutants Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">Major Air <span className="bold_text">Pollutants</span></h2>
                            <p>Hotel and inn guests come from various geographical places. As a result, these visitors bring a range of air pollutants with them, which contaminate the air within hotels. In addition to this, the air is further contaminated by emissions from tools and other hotel-related utilities, making it more dangerous to breathe.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pollutants Features */}
            <div className="container pollution_cntr inner_container">
                <div className="row d-flex justify-content-between custom">
                    <div className="col flex-fill text-center">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-parameter.png" alt="pm2.5 in school and institutes" />
                            <div className="feature_wrap_box">
                                <h2>PM2.5</h2>
                                <p>Hotel boilers that run on coal emit a lot of dust particles. Breathing these particles can cause cardiorespiratory issues.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col flex-fill text-center">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-gas-icon.png" alt="co2 gas in schools and institutes" />
                            <div className="feature_wrap_box">
                                <h2>CO2</h2>
                                <p>Guests occupancy is very high during the holiday season in the hotels.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col flex-fill text-center">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-parameter-icon.png" alt="tvoc in schools and institutes" />
                            <div className="feature_wrap_box">
                                <h2>TVOC</h2>
                                <p>The air fresheners and cleaning agents. Paints, carpets, and furniture can emit TVOC as well.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col flex-fill text-center">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/co-icon.png" alt="ozone in school & institutes" />
                            <div className="feature_wrap_box">
                                <h2>CO</h2>
                                <p>Various utilities such as fireplaces and diesel exhausts emit gases such as carbon monoxide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col flex-fill text-center">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/noise-icon.png" alt="ozone in school & institutes" />
                            <div className="feature_wrap_box">
                                <h2>Noise</h2>
                                <p>Hustle and bustle in hotels are quite normal. This sometimes creates disturbance for guests.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* School Image Box */}
            <div className="row school_img_box" style={{ backgroundImage: "url('https://www.pranaair.com/wp-content/uploads/2022/09/air-quality-problems-in-hotel.jpg')" }}>
                <div className="col-md-12">
                    <div className="school_box_cntr">
                        <ul>
                            <li className="first_school_box">
                                <span className="school_icon_box">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-icon-2.png" alt="pm2.5 in school & institutes" />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>PM2.5</h3>
                                    <p>Carpet and clothing fibers,
                                        degradation of buildings</p>
                                </div>
                            </li>
                            <li className="second_school_box">
                                <span className="school_icon_box">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-icon.png" alt="co2 in school & institutes" />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>CO2</h3>
                                    <p>Respiration
                                        or breathing</p>
                                </div>
                            </li>
                            <li className="third_school_box">
                                <span className="school_icon_box">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2022/09/hcho-icon.png" alt="ozone o3 in school & institutes" />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>HCHO</h3>
                                    <p>Air fresheners,
                                        wood preservatives</p>
                                </div>
                            </li>
                            <li className="fourth_school_box">
                                <span className="school_icon_box">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-icon.png" alt="tvoc in school & institutes" />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>TVOCs</h3>
                                    <p>Paints, carpets,
                                        disinfectants</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Who are at Risk Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">Who are at <span className="bold_text">Risk?</span></h2>
                            <p>The occupancy of hotels is one of the major reasons for bad air quality inside hotels. People with underlying
                                health issues, old age groups, children, and sensitive groups are at risk when exposed to air pollution.
                                Even healthy adults can feel sick due to exposure to bad air quality..</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Risk Features */}
            <div className="container pollution_cntr inner_container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/09/person-with-respiratory-illness.png" alt="respiratory illness in schools & institutes" />
                            <div className="feature_wrap_box">
                                <h2>Underlying Health Issues
                                </h2>
                                <p>Guests with underlying illnesses like breathing issues are seriously impacted when exposed to air pollution.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/09/hotel-chef.png" alt="teacher in schools & institutes" />
                            <div className="feature_wrap_box">
                                <h2>Kitchen Staff
                                </h2>
                                <p>There are many sources of emissions in a kitchen scenario. The kitchen staff is most affected by pollutants like CO in the kitchen.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/09/hotel-staff.png" alt="sensitive groups in schools & institutes" />
                            <div className="feature_wrap_box">
                                <h2>Hotel Staff</h2>
                                <p>Unattentiveness, loss of coordination, higher absenteeism, and being more prone to illnesses caused due to bad air exposure.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/09/guests.png" alt="students in schools & institutes" />
                            <div className="feature_wrap_box">
                                <h2>Guests</h2>
                                <p>When healthy individuals are exposed to bad air quality, they can feel uneasy and possibly can get sick.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Air Quality Solutions Section */}
            <div className="container quality_solution_section top_space_heading">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">Air quality <span className="bold_text">Solutions</span></h2>
                            <p>Prana Air air quality monitoring and purification solutions are suited for hotel rooms and large lobby areas. They empower you to understand the air quality you breathe and what you can do to clean the air for your guests’ comfort and to create an air pollution-free zone, as well as view and analyze the IAQ of different floors of your hotel.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="container air_quality_tab_sec">
                <div className="row">
                    <div className="col-md-12">
                        <div className='solution-tab'>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <button className={`nav-link ${activeTab === "air-quality-monitors" ? "active" : ""}`} onClick={() => setActiveTab("air-quality-monitors")}
                                    href="#"
                                >
                                    Air Quality Monitors
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${activeTab === "fresh-air-machine" ? "active" : ""}`} onClick={() => setActiveTab("fresh-air-machine")}
                                    href="#"
                                >
                                    Fresh Air Machine
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${activeTab === "api-data" ? "active" : ""}`} onClick={() => setActiveTab("api-data")}
                                    href="#"
                                >
                                    API Data
                                </button>
                            </li>
                        </ul>
                        </div>
                        <div className="tab-content">
                            {activeTab === 'air-quality-monitors' && (
                                <div className="tab-pane active inner_container">
                                    <div className="slider_cntr">
                                        <div className="slider_img_box">
                                            <a href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/">
                                                <img style={{ width: '100%' }} src="https://www.pranaair.com/wp-content/uploads/2022/09/air-quality-monitor-for-hotel-business.jpg" alt="prana air squair air quality monitor for hotel businesses" />
                                            </a>
                                        </div>
                                        <div className="slider_details_box">
                                            <h3>Prana Air SQUAIR<br /> Air quality monitor</h3>
                                            <span>SSQUAIR monitor is a smart indoor air quality monitoring device that can detect IAQ pollutants.</span>
                                            <ul className="airquality_list">
                                                <li>Detects PM2.5, CO, CO2, TVOC, noise, temp., & humidity</li>
                                                <li>Mobile & Smart TV App Enabled</li>
                                                <li>Reliable Web Dashboard Accessibility</li>
                                            </ul>
                                            <a href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/" className="knowmore_btn">Know More</a>
                                            <a href="#" className="rent_btn">Looking to Rent?</a>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'fresh-air-machine' && (
                                <div className="tab-pane active">
                                    <div className="slider_cntr">
                                        <div className="slider_img_box">
                                            <a href="https://www.pranaair.com/fresh-air-machine/">
                                                <img style={{ width: '100%' }} src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-fresh-air-machine-for-iaq-solution.jpg" alt="prana air fresh air machine as iaq solution for school & institutes" />
                                            </a>
                                        </div>
                                        <div className="slider_details_box">
                                            <h3>Fresh Air Machine<br /> As IAQ Solution</h3>
                                            <span>It is one-stop solution for indoor air pollution, working as an air purifier - IAQ solution.</span>
                                            <ul className="airquality_list">
                                                <li>Comes with multi-layers HEPA Filters</li>
                                                <li>Compact Design makes it easy to place</li>
                                                <li>Promising you up to 99.5% efficiency</li>
                                            </ul>
                                            <a href="https://www.pranaair.com/fresh-air-machine/" className="knowmore_btn">Know More</a>
                                            <a href="#" className="rent_btn">Looking to Rent?</a>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'api-data' && (
                                <div className="tab-pane active">
                                    <div className="slider_cntr">
                                        <div className="slider_img_box">
                                            <img style={{ width: '100%' }} src="https://www.pranaair.com/wp-content/uploads/2022/08/aqi-api-data-for-institutes.jpg" alt="aqi api data for school & institutes" />
                                        </div>
                                        <div className="slider_details_box">
                                            <h3>AQI API Data<br /> For Institutes</h3>
                                            <span>Avail the real-time air quality data of your institutes nearby outdoor area on the web.</span>
                                            <ul className="airquality_list">
                                                <li>Integrate the institutes data on the web</li>
                                                <li>Access the real-time data quickly</li>
                                                <li>Take precautions from the air pollution</li>
                                            </ul>
                                            <br />
                                            <a href="#get_in_touch" className="knowmore_btn">Know More</a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Freemium Services */}
            <div className="container top_space_heading">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">Data Freemium <span className="bold_text">Services</span></h2>
                            <p>The data can be displayed or analyzed on the LCD screens or the app via our customized dashboard.
                                Scan the QR to know the AQI of the area you are in.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container inner_container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-tv-app-for-hotel.jpg" alt="aqi tv app dashboard for hotel" />
                            <h4>TV Dashboard App</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-dashboard-app-for-hotel.jpg" alt="aqi customized dashboard app for hotel" />
                            <h4>Customised App for Schools</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-qr-code-scan-for-hotel.jpg" alt="aqi monitor data qr code scan for hotel" />
                            <h4>QR Code Scan</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Effects of Air Pollution */}
            <section className="img-box-sec">
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-6">
                            <div className='imgs-box'>
                                <img src='https://www.pranaair.com/wp-content/uploads/2021/08/aqi-qr-code-768x453.jpg' alt='aqi qr code' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='imgs-box'>
                                <img src='https://www.pranaair.com/wp-content/uploads/2021/08/scan-air-quality-qr-code-768x453.jpg' alt='scan air quality qr code' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container top_space_heading">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">The Effects of Air Pollution - <span className="bold_text">On Hotel Business</span></h2>
                            <p>When guests are exposed to bad air quality, it affects their health, and therefore their overall experience while staying at your hotel.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container inner_container airgraph_cntr">
                <div className="row">
                    <div className="col-md-6 air_graph_box">
                        <div className="air_quality_box">
                            <h3><span style={{ fontSize: '15pt', color: '#78ae60' }}> With Clean Air</span></h3>
                            <ul className="airquality_list">
                                <li>Improved ventilation</li>
                                <li>Guests – good comfort score</li>
                                <li>Enhanced experience</li>
                                <li>Healthy air quality</li>
                            </ul>
                        </div>
                        <span className="vs_text">VS</span>
                    </div>
                    <div className="col-md-6 air_qualiity_right">
                        <div className="air_quality_box">
                            <h3><span style={{ fontSize: '15pt', color: '#e86868' }}> Without Clean Air</span></h3>
                            <ul className="airquality_list red_list">
                                <li>Low ventilation score</li>
                                <li>Less guest comfort</li>
                                <li>Bad experience</li>
                                <li>Unhealthy air quality</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
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
                                            1. What are the health impacts of the pollutants present inside a hotel?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Your health could be harmed by increased CO2 exposure. Health effects like nausea, vertigo, exhaustion, difficulty breathing, and perspiration can be evident in public spaces like hotel lobbies and reception areas. Transmission of chronic illnesses like the flu and the common cold is fairly common.                                        </div>
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
                                            2. What are the major pollutants that are present in hotels?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Many pollutants can be present inside hotel rooms and lobbies. CO2 is one of the main pollutants followed by microbial pollution, CO, TVOC, and noise.
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
                                            3. Why is it necessary to have air quality monitoring solutions?
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            To know the nature of pollutants and by how much are they present in hotels so that necessary actions can be taken.
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
                                            4. How can I check the AQI in a hotel area using your device?
                                        </button>
                                    </h2>
                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Prana Air Monitors are WiFi enabled so you dont need to set up a wire framework to extract and display the data. Simply connect the monitor to the dashboard through WiFi connectivity and view the real-time data on your screens.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq5"
                                            aria-expanded="false"
                                        >
                                            5. Are any other parameters included in the monitors other than the air pollutants?
                                        </button>
                                    </h2>
                                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Yes, you can monitor the temperature, noise, and humidity in an area.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq6"
                                            aria-expanded="false"
                                        >
                                            6. Are there any additional benefits that come with the solutions?
                                        </button>
                                    </h2>
                                    <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Customizable dashboard, 24*7 remote access to the data, get health tips, real-time and historical data analysis, QR code to scan and know the real-time AQI of that area, and many more.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clientele Section */}
            <div className="container top_space_heading">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">Our <span className="bold_text">Clientele</span></h2>
                            <p>We are honored to work with so many well-known companies.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container client_logo_section inner_container">
                <div className="row">
                    <div className="col-md-3">
                        <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png" className="img-responsive" alt="Client Logo" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png" className="img-responsive" alt="Client Logo" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png" className="img-responsive" alt="Client Logo" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png" className="img-responsive" alt="Client Logo" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <img src="https://www.pranaair.com/wp-content/uploads/2022/08/RENAULT-NISSAN.png" className="img-responsive" alt="Client Logo" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://www.pranaair.com/wp-content/uploads/2022/08/TATA.png" className="img-responsive" alt="Client Logo" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://www.pranaair.com/wp-content/uploads/2022/08/CSIR.png" className="img-responsive" alt="Client Logo" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MAHINDRA.png" className="img-responsive" alt="Client Logo" />
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="airqulality_contact_section inner_container" id="get_in_touch">
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
                <ContactForm pageName="Hotel Businesses Page" />
            </div>

            {/* Industrial Applications */}
            <div className="container seperate_industrial_box">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">Industrial <span className="bold_text">Applications</span></h2>
                            <p>Regardless of how small or large a business is, Prana Air offers a wide choice of Smart, affordable,
                                and highly accurate air quality solutions for various industries.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container inner_container industries_application_section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="owl-slider">
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={7000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                            >
                                <div className="item">
                                    <div className="app_service_box">
                                        <div className="app_img_bx">
                                            <a href="https://www.pranaair.com/solutions-by-application/retail-stores/">
                                                <img src="https://www.pranaair.com/wp-content/uploads/2023/01/air-quality-solutions-for-retail-outlets.jpg" alt="air quality solutions for retail stores" />
                                            </a>
                                        </div>
                                        <a href="https://www.pranaair.com/solutions-by-application/retail-stores/">
                                            <h4>Solutions for Retail Stores</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="app_service_box">
                                        <div className="app_img_bx">
                                            <a href="https://www.pranaair.com/solutions-by-application/bank-financial-institutions/">
                                                <img src="https://www.pranaair.com/wp-content/uploads/2023/01/air-quality-solutions-for-banks.jpg" alt="air quality solutions for banks" />
                                            </a>
                                        </div>
                                        <a href="https://www.pranaair.com/solutions-by-application/bank-financial-institutions/">
                                            <h4>Solutions for Bank</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="app_service_box">
                                        <div className="app_img_bx">
                                            <a href="https://www.pranaair.com/solutions-by-application/hotel-businesses/">
                                                <img src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-hotel.jpg" alt="air quality solutions for hotel business" />
                                            </a>
                                        </div>
                                        <a href="https://www.pranaair.com/solutions-by-application/hotel-businesses/">
                                            <h4>Solutions for Hotel</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="app_service_box">
                                        <div className="app_img_bx">
                                            <a href="https://www.pranaair.com/solutions-by-application/restaurants/">
                                                <img src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-restaurant.jpg" alt="air quality solutions for restaurants" />
                                            </a>
                                        </div>
                                        <a href="https://www.pranaair.com/solutions-by-application/restaurants/">
                                            <h4>Solutions for Restaurant</h4>
                                        </a>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
