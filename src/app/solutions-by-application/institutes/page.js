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
            <div className="row school_banner_box" style={{ backgroundImage: "url('https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-solutions-for-school.png')" }}>
                <div className="col-md-6 banner_quality_box">
                    <div className="pocket_title_box school_aqi_box">
                        <h1>Air quality solutions for <span className="bold_text">Educational Institutes</span></h1>
                        <p>A complete solution including air quality monitoring, air purification &amp; data accessibility</p>
                        <ul className="rate_list">
                            <li>Schools</li>
                            <li>Colleges</li>
                            <li>Institutes</li>
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
                            <p>Compared to their homes, students spend more time in educational institutes. Following are some air pollutants that
                                can potentially exist in educational institutes that could hamper students and staffs productivity.</p>
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
                                <p>Small, breathable dust particles that can enter the bloodstream through respiration.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-gas-icon.png" alt="co2 gas in schools and institutes" />
                            <div className="feature_wrap_box">
                                <h2>CO2</h2>
                                <p>CO2 levels exceed the desired CO2 limits at times, especially in educational institutes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-parameter-icon.png" alt="tvoc in schools and institutes" />
                            <div className="feature_wrap_box">
                                <h2>TVOC</h2>
                                <p>Items like glue, markers, aerosol sprays are some of the potential sources.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/ozone-o3-pollutant-icon.png" alt="ozone in school & institutes" />
                            <div className="feature_wrap_box">
                                <h2>Ozone</h2>
                                <p>Ozone is very harmful especially for developing lungs in students.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* School Image Box */}
            <div className="row school_img_box" style={{ backgroundImage: "url('https://www.pranaair.com/wp-content/uploads/2022/08/air-pollution-in-schools-and-insitutess.jpg')" }}>
                <div className="col-md-12">
                    <div className="school_box_cntr">
                        <ul>
                            <li className="first_school_box">
                                <span className="school_icon_box">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-icon-2.png" alt="pm2.5 in school & institutes" />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>PM2.5</h3>
                                    <p>Chalkdust, outdoor PM coming in from windows</p>
                                </div>
                            </li>
                            <li className="second_school_box">
                                <span className="school_icon_box">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-icon.png" alt="co2 in school & institutes" />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>CO2</h3>
                                    <p>Respiration</p>
                                </div>
                            </li>
                            <li className="third_school_box">
                                <span className="school_icon_box">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2022/08/ozone-o3-icon.png" alt="ozone o3 in school & institutes" />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>Ozone</h3>
                                    <p>Outdoor O3 coming in from windows, printers, photocopiers</p>
                                </div>
                            </li>
                            <li className="fourth_school_box">
                                <span className="school_icon_box">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-icon.png" alt="tvoc in school & institutes" />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>TVOCs</h3>
                                    <p>Carpets, Furniture, Craft supplies like markers, glue, paints, etc.</p>
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
                            <p>Each category of people is at risk when exposed to air pollution in schools or institutes.
                                But certain groups are significantly impacted as compared to healthy adults.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Risk Features */}
            <div className="container pollution_cntr inner_container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/air-pollution-harmful-to-respiratory-illness.png" alt="respiratory illness in schools & institutes" />
                            <div className="feature_wrap_box">
                                <h2>Respiratory Illness</h2>
                                <p>Students and staff with respiratory illnesses already have a weaker respiratory system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/air-pollution-harmful-to-teacher.png" alt="teacher in schools & institutes" />
                            <div className="feature_wrap_box">
                                <h2>Teachers</h2>
                                <p>Lower productivity, absenteeism, and lower concentration are some of the side effects.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/air-pollution-harmful-to-sensitive-groups.png" alt="sensitive groups in schools & institutes" />
                            <div className="feature_wrap_box">
                                <h2>Sensitive Groups</h2>
                                <p>Old teachers, pregnant ladies, etc. have a high chance of acquiring respiratory illnesses.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/air-pollution-harmful-to-students.png" alt="students in schools & institutes" />
                            <div className="feature_wrap_box">
                                <h2>Student</h2>
                                <p>When they are exposed to the unhealthy air, the growing tissue &amp; cells are hampered.</p>
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
                            <h2 className="title_heading">Air quality <span className="bold_text">Solutions For Schools</span></h2>
                            <p>Prana Air provides the solutions of air quality monitoring and fresh air that you can find out what quality of air
                                your students and staff breathe and make your premises air pollution-free zone.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="container air_quality_tab_sec">
                <div className="row">
                    <div className="col-md-12">
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
                                                            <img style={{ width: '100%' }} src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-squair-iaq-monitor-for-schools.jpg" alt="prana air squair air quality monitor for school & institutes" />
                                                        </a>
                                                    </div>
                                                    <div className="slider_details_box">
                                                        <h3>Prana Air SQUAIR<br /> Air quality monitor</h3>
                                                        <span>SQUAIR monitor is a smart indoor air quality monitoring device that can detect IAQ pollutants. </span>
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
                                            <div className="item">
                                                <div className="slider_cntr">
                                                    <div className="slider_img_box">
                                                        <a href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/">
                                                            <img style={{ width: '100%' }} src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-sensible-plus-air-quality-monitor-iaq.jpg" alt="prana air squair air quality monitor for school & institutes" />
                                                        </a>
                                                    </div>
                                                    <div className="slider_details_box">
                                                        <h3>Prana Air Sensible+<br /> Air quality monitor</h3>
                                                        <span>This is a smart air quality monitor that comes with 7 inch touch screen display that gives more insightful data.
                                                        </span>
                                                        <ul className="airquality_list">
                                                            <li>7 Inch LED Touch Screen Display</li>
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
                                Scan the QR to know the AQI of the area you are in.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container inner_container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/aqi-tv-app-dashboard-for-school.jpg" alt="aqi tv app dashboard for school & institutes" />
                            <h4>TV Dashboard App</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-monitor-aqi-web-dashboard.jpg" alt="aqi customized dashboard app for school & institutes" />
                            <h4>Customised App for Schools</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/scan-qr-code-to-check-aqi.jpg" alt="aqi monitor data qr code scan for school & institutes" />
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
                            <h2 className="title_heading">The Effects of Air Pollution - <span className="bold_text">On Students</span></h2>
                            <p>When students are exposed to poor air quality a drastic drop in their overall performance is noticed.
                                According to a study report of <strong>UNICEF</strong>, a four-point drop in IQ by the age of 5 among a sample of children exposed to toxic air pollution.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container inner_container airgraph_cntr">
                <div className="row">
                    <div className="col-md-6 air_graph_box">
                        <div className="air_quality_box">
                            <h3><span style={{ fontSize: '15pt', color: '#78ae60' }}>Students With Clean Air</span></h3>
                            <ul className="airquality_list">
                                <li>Improved arithmetic and calculation skills</li>
                                <li>Pupil absence decreased by 10-20%</li>
                                <li>Improved memory, attention, and IQ skills</li>
                            </ul>
                        </div>
                        <span className="vs_text">VS</span>
                    </div>
                    <div className="col-md-6 air_qualiity_right">
                        <div className="air_quality_box">
                            <h3><span style={{ fontSize: '15pt', color: '#e86868' }}>Students Without Clean Air</span></h3>
                            <ul className="airquality_list red_list">
                                <li>An increase in the absence rate is noticed</li>
                                <li>Lower IQ levels among the students</li>
                                <li>Reduced attention and concentration</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <h3>Impact Of Clean Air on General IQ of Students</h3>
                        <img src="https://www.pranaair.com/wp-content/uploads/2022/08/Impact-Of-Clean-Air-on-General-IQ-of-Students-graph-1536x887.jpg" alt="Impact of clean air on IQ" className="img-responsive center-block" />
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
                                            1. What are the major pollutants that are present in educational institutes?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Many pollutants can be present inside a typical classroom. CO2 is the main pollutant followed by PM2.5 - dust, TVOCs, Ozone, etc.
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
                                            2. Are any other parameters included in the monitors other than the air pollutants?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
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
                                            data-bs-target="#faq3"
                                            aria-expanded="false"
                                        >
                                            3. What are the health impacts of the pollutants present inside the classrooms and college premises?
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Decreased IQ, alertness, attention, brain functioning, concentration, and increase in illness absence rates.
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
                                            4. How can I check the AQI in my classroom using your device?
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
                                            5. Why is it necessary to have air quality monitoring solutions?
                                        </button>
                                    </h2>
                                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            To know the nature of pollutants and by how much are they present in a classroom so that necessary actions can be taken.
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
                <ContactForm pageName="Institutes Page" />
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
