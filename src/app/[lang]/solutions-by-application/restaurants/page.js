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
            <div className="row school_banner_box" style={{ backgroundImage: "url('https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-solutions-for-restaurant-businesses.jpg')" }}>
                <div className="col-md-6 banner_quality_box">
                    <div className="pocket_title_box school_aqi_box">
                        <h1>Air quality solutions for <span className="bold_text">Restaurant & Cafe</span></h1>
                        <p>A complete solution for air monitoring, air purification,
                            and data monitoring for your restaurant spaces.</p>
                        <ul className="rate_list">
                            <li>Kitchen</li>
                            <li>Cafe</li>
                            <li>Restaurant</li>
                        </ul>
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
                            <p>Restaurants emit the greatest mean value of indoor air pollutants and are one of the major reasons for ambient pollution.
                                That makes it extremely important to monitor the air quality inside and outside restaurants.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pollutants Features */}
            <div className="container pollution_cntr inner_container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-parameter.png" alt="pm2.5 in school and institutes" />
                            <div className="feature_wrap_box">
                                <h2>PM2.5</h2>
                                <p>Ultra-fine breathable dust & liquid particles that enter deep into our lungs and cause many diseases.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-gas-icon.png" alt="co2 gas in schools and institutes" />
                            <div className="feature_wrap_box">
                                <h2>CO2</h2>
                                <p>At times, especially when there is a higher client occupancy, CO2 levels surpass the desired CO2 limitations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-parameter-icon.png" alt="tvoc in schools and institutes" />
                            <div className="feature_wrap_box">
                                <h2>TVOC</h2>
                                <p>Emissions from urban cooking and its various methodologies, aerosol sprays are some of the potential sources.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/co-icon.png" alt="ozone in school & institutes" />
                            <div className="feature_wrap_box">
                                <h2>CO</h2>
                                <p>Cooking methods like barbequing, grilling and charbroiling emit CO inside & outside the restaurants.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/no2-icon.png" alt="ozone in school & institutes" />
                            <div className="feature_wrap_box">
                                <h2>NO2</h2>
                                <p>Gas stoves used in restaurant kitchens are a major source of indoor NO2 combustion of fuel.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/noise-icon.png" alt="ozone in school & institutes" />
                            <div className="feature_wrap_box">
                                <h2>Noise</h2>
                                <p>Restaurants are busy and many restaurants play high music that can be irritating for some customers..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* School Image Box */}
            <div className="row school_img_box" style={{ backgroundImage: "url('https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-problems-in-restaurants-and-cafes-scaled.jpg')" }}>
                <div className="col-md-12">
                    <div className="school_box_cntr">
                        <ul>
                            <li className="first_school_box">
                                <span className="school_icon_box">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-icon-2.png" alt="pm2.5 in school & institutes" />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>PM2.5</h3>
                                    <p>Ultra-fine breathable dust
                                        and liquid particles</p>
                                </div>
                            </li>
                            <li className="second_school_box">
                                <span className="school_icon_box">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-icon.png" alt="co2 in school & institutes" />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>CO2</h3>
                                    <p>When customer occupancy is more,
                                        the desired CO2 limits exceed.</p>
                                </div>
                            </li>
                            <li className="third_school_box">
                                <span className="school_icon_box">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2022/08/ozone-o3-icon.png" alt="ozone o3 in school & institutes" />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>Noise</h3>
                                    <p>Playing high music that can be
                                        irritating for some customers</p>
                                </div>
                            </li>
                            <li className="fourth_school_box">
                                <span className="school_icon_box">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2022/08/no2-icon-for-restaurant.png" alt="tvoc in school & institutes" />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>NO2</h3>
                                    <p>Gas stoves used in restaurant
                                        kitchens are a major source.</p>
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
                            <p>Different people from different age groups can be present in a restaurant. But certain groups
                                are significantly impacted as compared to healthy adults.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Risk Features */}
            <div className="container pollution_cntr inner_container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/respiratory-ill.png" alt="respiratory illness people in restaurant" />
                            <div className="feature_wrap_box">
                                <h2>Respiratory Illness</h2>
                                <p>Customers and staff with respiratory illnesses already have a weaker respiratory system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/staff.png" alt="staff of a restaurant" />
                            <div className="feature_wrap_box">
                                <h2>Staff</h2>
                                <p>Unattentiveness, a high chance of acquiring respiratory illnesses, and loss of coordination can be seen in the staff.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/chef.png" alt="chef of a restaurant" />
                            <div className="feature_wrap_box">
                                <h2>Chef</h2>
                                <p>Children have developing organs. When exposed, the growing tissue and cell growth are hampered.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/customer.png" alt="a customer of a restaurant" />
                            <div className="feature_wrap_box">
                                <h2>Customers</h2>
                                <p>Uneasiness, headaches, respiratory irritation, and nausea are some of the side effects of exposure.</p>
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
                            <h2 className="title_heading">Air quality <span className="bold_text">Solutions For Restaurant</span></h2>
                            <p>Prana Airs air quality monitoring and air purifying solutions give you the power to know what your customers and staff breathe
                                and what you could do to clean the air to make your restaurant an Air pollution-free zone and view and analyze your IAQ.</p>
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
                                    <div className="owl-slider">
                                        <Carousel
                                            responsive={sliderQuality}
                                            infinite={true}
                                            autoPlay={true}
                                            autoPlaySpeed={7000}
                                            keyBoardControl={true}
                                            customTransition="all .5"
                                            transitionDuration={500}
                                        >
                                            <div className="item">
                                                <div className="slider_cntr">
                                                    <div className="slider_img_box">
                                                        <a href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/">
                                                            <img style={{ width: '100%' }} src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-squair-monitor-for-restaurant.jpg" alt="prana air squair monitor as the air quality solutions for restaurant or cafe" />
                                                        </a>
                                                    </div>
                                                    <div className="slider_details_box">
                                                        <h3>Prana Air SQUAIR<br /> Air quality monitor</h3>
                                                        <span>SQUAIR monitor is a smart indoor air quality monitoring device that measures particulate matters & toxic gases of a restaurant or cafe.</span>
                                                        <ul className="airquality_list">
                                                            <li>Detects PM2.5, PM10, CO2, TVOC, Noise, Light (LUX), Temperature & humidity</li>
                                                            <li>Mode of connectivity: WiFi, GSM, BMS</li>
                                                            <li>Mobile & Smart TV App, web-dashboard</li>
                                                        </ul>
                                                        <a href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/" className="knowmore_btn">Know More</a>
                                                        <a href="#" className="rent_btn">Looking to Rent?</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="slider_cntr">
                                                    <div className="slider_img_box">
                                                        <a href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/">
                                                            <img style={{ width: '100%' }} src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-sensible-plus-monitor-for-restaurant.jpg" alt="prana air sensible+ air quality monitor for restaurants and cafe" />
                                                        </a>
                                                    </div>
                                                    <div className="slider_details_box">
                                                        <h3>Prana Air Sensible+<br /> Air quality monitor</h3>
                                                        <span>This is a smart air quality monitor with a touch screen display that gives you more insightful data for a restaurant.
                                                        </span>
                                                        <ul className="airquality_list">
                                                            <li>Detects PM2.5, PM10, CO2, TVOC, HCHO, Temperature, Humidity</li>
                                                            <li>7 Inch LED Touch Screen Display
                                                            </li>
                                                            <li>5000 mAh Battery InBuilt
                                                            </li>
                                                            <li>WiFi Connectivity With Mobile App
                                                            </li>
                                                        </ul>
                                                        <a href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/" className="knowmore_btn">Know More</a>
                                                        <a href="#" className="rent_btn">Looking to Rent?</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel>
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
                                Scan the QR to know the AQI of the restaurant.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container inner_container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/restaurant-tv-dashboard-app.jpg" alt="aqi tv app dashboard for restaurants" />
                            <h4>TV Dashboard App</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/restaurant-aqi-customized-dashboard-app.jpg" alt="aqi customized dashboard app for a restaurant" />
                            <h4>Customised App for Schools</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/restaurant-aqi-qr-code-scan.jpg" alt="aqi monitor data qr code scan in a restaurant" />
                            <h4>QR Code Scan</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Effects of Air Pollution */}
            <div className="container top_space_heading">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">The Effects of Air Pollution - In <span className="bold_text">A Restaurant</span></h2>
                            <p>When customers are exposed to poor air quality, they feel dizzy and unwell, and
                                headaches are a common symptom of air pollution exposure.</p>
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
                                <li>Good comfort level</li>
                                <li>Improved air filtration</li>
                            </ul>
                        </div>
                        <span className="vs_text">VS</span>
                    </div>
                    <div className="col-md-6 air_qualiity_right">
                        <div className="air_quality_box">
                            <h3><span style={{ fontSize: '15pt', color: '#e86868' }}> Without Clean Air</span></h3>
                            <ul className="airquality_list red_list">
                                <li>Low ventilation score</li>
                                <li>Less comfort</li>
                                <li>Reduced Filtration score</li>
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
                                            1. What are the major pollutants that present in a restaurant / Cafe?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Many pollutants can be present inside a typical restaurant or diner. CO2 and CO are the main pollutants followed by PM2.5, NO2, TVOCs, SO2, Noise, etc.
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
                                            2. How can I check the AQI of my restaurant using your device?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Prana Air Monitors are WiFi enabled so you don’t need to set up a wire framework to extract and display the data. Simply connect the monitor to the dashboard through WiFi connectivity and view the real-time data on your screens.
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
                                            3. What are the health impacts of the pollutants present inside the restaurants?
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Physical discomforts like headaches, nausea, dizziness, etc. among customers and staff.
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
                                            4. Are any other parameters included in the monitors other than the air pollutants?
                                        </button>
                                    </h2>
                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
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
                                            data-bs-target="#faq5"
                                            aria-expanded="false"
                                        >
                                            5. What are some criteria that need to be kept in mind for a healthy and comfortable restaurant experience?
                                        </button>
                                    </h2>
                                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Ventilation rate, noise, comfort level, mold score, organic aerosols, etc. are some of the criteria.
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
                                            6. Why is it necessary to have air quality monitoring solutions?
                                        </button>
                                    </h2>
                                    <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            To know the nature of pollutants and by how much are they present in a restaurant so that necessary actions can be taken.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq7"
                                            aria-expanded="false"
                                        >
                                            7. Are there any additional benefits that come with the solutions?
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
            <div className=" airqulality_contact_section inner_container" id="get_in_touch">
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
                <ContactForm pageName="Restaurants Monitor Page" />
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
