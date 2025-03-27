"use client"

import { useEffect, useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "./style.css"

export default function ConstructionAirQuality() {
    const [activeTab, setActiveTab] = useState("home")
    const [aqmTab, aqmActiveTab] = useState("aqm")
    const [showGuidelines, setShowGuidelines] = useState(false)

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
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
    const insdurialapp = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
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
            <div
                className="school_banner_box"
                style={{
                    backgroundImage:
                        "url(https://www.pranaair.com/wp-content/uploads/2023/01/air-quality-solutions-for-construction.jpg)",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pocket_title_box school_aqi_box">
                                <h1>
                                    Air quality Monitoring solutions<span className="bold_text"> For Construction Sites</span>
                                </h1>
                                <span style={{ fontSize: "14pt" }}>
                                    A complete solution to air quality monitoring of PM2.5, PM10, dust emissions, and VOCs at construction
                                    and demolition sites.
                                </span>
                                <br />
                                <br />
                                <a className="pocket_buy_btn" href="#get_in_touch">
                                    Get a Quote
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 banner_quality_img_box"></div>
                    </div>
                </div>
            </div>

            {/* Major Air Pollutants Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                Major Air <span className="bold_text">Pollutants</span>
                            </h2>
                            <p>
                                Air pollution has been a major cause of concern for a long time now and there one major aspect of it
                                that goes unnoticed is the air pollution due to construction. 30% of the air pollution prevalent in
                                Delhi is caused due to construction pollution i.e. particulate matter – pm2.5, pm10 dust particles
                                produced from the construction sites.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pollutants Grid */}
            <div className="container pollution_cntr inner_container">
                <div className="main-inner_box">
                    <div className="inner_box">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/04/pm-pollutant.png"
                                alt="pm2.5 pm10 pollutants level at construction site"
                                width="102"
                                height="99"
                            />
                            <div className="feature_wrap_box">
                                <h2>PM</h2>
                                <p>Fine particles suspended in the air, especially at the sites</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner_box">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/05/noise-pollutant.png"
                                alt="noise pollution"
                                width="102"
                                height="99"
                            />
                            <div className="feature_wrap_box">
                                <h2>Noise</h2>
                                <p>Machinery on the sites creates noise that can cause ear injury.</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner_box">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/04/CO-pollutant.png"
                                alt="co pollution at construction site"
                                width="102"
                                height="99"
                            />
                            <div className="feature_wrap_box">
                                <h2>CO</h2>
                                <p>It is produced from the combustion of carbon-based fuels.</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner_box">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/04/voc-pollutant.png"
                                alt="VOCs pollution at construction site"
                                width="102"
                                height="99"
                            />
                            <div className="feature_wrap_box">
                                <h2>VOCs</h2>
                                <p>Activities like welding emits organic compounds & cause illness</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner_box">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/04/NOx-pollutant.png"
                                alt="no2 pollution at construction site"
                                width="102"
                                height="99"
                            />
                            <div className="feature_wrap_box">
                                <h2>NOx</h2>
                                <p>Burning of fuels used in machinery can release NOx into the air.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Construction Air Pollution Image */}
            <div
                className="container-fluid school_img_box"
                style={{
                    backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2023/01/construction-air-pollution.jpg)",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="school_box_cntr">
                                <ul>
                                    <li className="first_school_box">
                                        <span className="school_icon_box">
                                            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-icon.png" alt="voc at construction site" />
                                        </span>
                                        <div className="schhol_text_box">
                                            <h3>VOCs</h3>
                                            <p>Exposures can cause dizziness, headaches, and other discomforts.</p>
                                        </div>
                                    </li>
                                    <li className="second_school_box">
                                        <span className="school_icon_box">
                                            <img src="https://www.pranaair.com/wp-content/uploads/2023/05/noise-icon.png" alt="noise at construction site" />
                                        </span>
                                        <div className="schhol_text_box">
                                            <h3>SOx</h3>
                                            <p>Shifting to alternative fuels can decrease SOx emissions.</p>
                                        </div>
                                    </li>
                                    <li className="third_school_box">
                                        <span className="school_icon_box">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/04/NOx-pollutant-icon.png"
                                                alt="NOx pollutant at construction site"
                                            />
                                        </span>
                                        <div className="schhol_text_box">
                                            <h3>NOx</h3>
                                            <p>Causes respiratory problems and is a major cause of acid rain.</p>
                                        </div>
                                    </li>
                                    <li className="fourth_school_box">
                                        <span className="school_icon_box">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2022/08/particulate-pm2.5-icon.png"
                                                alt="particulate matter pm2.5 and pm10 at construction site"
                                            />
                                        </span>
                                        <div className="schhol_text_box">
                                            <h3>PM</h3>
                                            <p>It can cause respiratory and cardiovascular problems.</p>
                                        </div>
                                    </li>
                                    <li className="fivth_school_box">
                                        <span className="school_icon_box">
                                            <img src="https://www.pranaair.com/wp-content/uploads/2023/04/co-pollutant-icon.png" alt="co gas at construction site" />
                                        </span>
                                        <div className="schhol_text_box">
                                            <h3>CO</h3>
                                            <p>It can cause nausea, dizziness, headaches, and even death at very high levels.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Who are at Risk Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                Who are at <span className="bold_text">Risk?</span>
                            </h2>
                            <p>
                                The workers working on the C&D site are affected the most by air pollution. Other than them, people
                                living nearby these areas are affected by both indoor and outdoor air pollution caused by C&D emissions
                                near their homes. These include:
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* People at the site */}
            <div className="container pollution_cntr inner_container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 style={{ textAlign: "center", fontSize: "18pt" }}>People at the site</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2023/01/worker.png" alt="Construction workers" width="108" height="160" />
                            <div className="feature_wrap_box">
                                <h2>Construction workers</h2>
                                <p>They are most exposed to various pollution sources</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/01/inspector.png"
                                alt="Construction Inspector"
                                width="108"
                                height="160"
                            />
                            <div className="feature_wrap_box">
                                <h2>Construction Inspector</h2>
                                <p>They can experience short-term health effects.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/01/surveyor.png"
                                alt="construction surveyor"
                                width="108"
                                height="160"
                            />
                            <div className="feature_wrap_box">
                                <h2>Surveyor</h2>
                                <p>Eye & respiratory tract irritations, & aggravation in asthma.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/01/civil-engineer.png"
                                alt="civil engineer for construction"
                                width="108"
                                height="160"
                            />
                            <div className="feature_wrap_box">
                                <h2>Civil Engineer</h2>
                                <p>Exposure can impact attentiveness.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nearby Residential Areas */}
            <div className="container pollution_cntr inner_container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 style={{ textAlign: "center", fontSize: "18pt" }}>Nearby Residential Areas</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/01/children-near-construction-site.png"
                                alt="Children"
                                width="108"
                                height="160"
                            />
                            <div className="feature_wrap_box">
                                <h2>Children</h2>
                                <p>Their airways are narrower, resulting in more obstructions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img src="https://www.pranaair.com/wp-content/uploads/2023/01/pregnant-lady.png" alt="Pregnant ladies" width="108" height="160" />
                            <div className="feature_wrap_box">
                                <h2>Pregnant ladies</h2>
                                <p>PM exposure can cause preterm labor, low-weight deliveries, etc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/01/old-people-near-construction-site.png"
                                alt="Old people"
                                width="108"
                                height="160"
                            />
                            <div className="feature_wrap_box">
                                <h2>Old people</h2>
                                <p>Aggravates COPD, asthma, and other disorders among old age people.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/01/people-with-health-issue.png"
                                alt="People with health issues"
                                width="108"
                                height="160"
                            />
                            <div className="feature_wrap_box">
                                <h2>People with health issues</h2>
                                <p>Their conditions might worsen and harm organs such as the kidneys, lungs, etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Guidelines Section */}
            <div className="container-fluid" style={{ backgroundColor: "#f8f2e7" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="introducing_box sub_title_box text-center">
                                <h2 className="title_heading">
                                    Guidelines for C&D sites <span className="bold_text">as per the CAQM</span>
                                </h2>
                                <p>
                                    The government of India recognized the problem and has come up with a solution for dust mitigation.
                                    The Ministry of Environment, Forest, and Climate Change recently issued a notice regarding the
                                    construction pollution at the project sites in Delhi NCR and other regions that come under the
                                    Commission for Air Quality and Management (CAQM).
                                </p>
                            </div>
                            <div className="introduce_button" style={{ display: "flex", justifyContent: "center" }}>
                                <a className="bg-btn bg-green view_btn" onClick={() => setShowGuidelines(!showGuidelines)}>
                                    {showGuidelines ? "Hide " : "Know More "}
                                    <img
                                        className="alignnone"
                                        src={
                                            showGuidelines
                                                ? "https://www.pranaair.com/wp-content/uploads/2023/05/view-button.png"
                                                : "https://www.pranaair.com/wp-content/uploads/2023/05/view-button.png"
                                        }
                                        width="24"
                                        height="24"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Guidelines Details (Collapsible) */}
            {showGuidelines && (
                <div className="container-fluid table_specifiction_collapse" style={{ backgroundColor: "#f8f2e7" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 style={{ textAlign: "center" }}>Dust Pollution Control Self Assessment</h3>
                            </div>
                            <div className="col-md-4">
                                <p style={{ textAlign: "center" }}>
                                    <img
                                        className="wp-image-66977 aligncenter"
                                        src="https://www.pranaair.com/wp-content/uploads/2023/02/DPCC-300x286.png"
                                        alt="DPCC"
                                        width="186"
                                        height="177"
                                    />
                                    <strong>DPCC</strong> (Delhi Pollution Control Committee)
                                </p>
                            </div>
                            <div className="col-md-4">
                                <p style={{ textAlign: "center" }}>
                                    <img
                                        className="wp-image-66977 aligncenter"
                                        src="https://www.pranaair.com/wp-content/uploads/2023/02/HSPCB.png"
                                        alt="HSPCB (Haryana State Pollution Control Board)"
                                        width="186"
                                        height="177"
                                    />
                                    <strong>HSPCB</strong> (Haryana State Pollution Control Board)
                                </p>
                            </div>
                            <div className="col-md-4">
                                <p style={{ textAlign: "center" }}>
                                    <img
                                        className="wp-image-66977 aligncenter"
                                        src="https://www.pranaair.com/wp-content/uploads/2023/02/UPPCB.png"
                                        alt="UPPCB (Uttar Pradesh Pollution Control Board)"
                                        width="186"
                                        height="177"
                                    />
                                    <strong>UPPCB</strong> (Uttar Pradesh Pollution Control Board)
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p style={{ textAlign: "center", fontSize: "12pt" }}>
                                    A bunch of instructions by Govt. of India is given in order to curb the Construction and Demolition
                                    activities in Delhi NCR, India which are as follows:-
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="alert alert-info">
                                    The Government announced that an online tool should be introduced to keep track of whether the
                                    pollution control rules are being implemented as per said rules.
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="alert alert-info">
                                    All projects of construction and demolition whose area is 500 square meters or more than 500 square
                                    meters which come under Delhi NCR have to register at the web portal.
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="alert alert-info">
                                    Video fencing that is also well-found with remote 4G connectivity should be integrated with the web
                                    portal for effective observation of the implementation of pollution control measures.
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="alert alert-info">
                                    All the construction and demolition sites need to be equipped with economical and accurate sensors of
                                    the particulate matter, PM10, AND PM2.5. The sensors should be linked to where they can be accessed
                                    live at all times by the CPCB, government, and other government bodies.
                                </div>
                            </div>
                            <div className="col-md-12">
                                <h3 style={{ textAlign: "center", color: "#78ae60" }}>Press Release by CAQM:</h3>
                                <p style={{ textAlign: "center" }}>
                                    <a href="https://pib.gov.in/Pressreleaseshare.aspx?PRID=1759914" rel="nofollow">
                                        https://pib.gov.in/Pressreleaseshare.aspx?PRID=1759914
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="air_heading" style={{ textAlign: "center" }}>
                                    How we can help?
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Ambient Monitor Section */}
            <div className="ambient_monitor_section">
                <div className="pills_tab">
                    <ul className="nav nav-pills">
                        <li className={activeTab === "home" ? "active" : ""}>
                            <a href="#home" onClick={() => setActiveTab("home")}>
                                <span className="tab_img">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/05/Prana-Air-Ambient-Air-quality-monitor-for-construction.webp"
                                        alt="Prana air construction ambient air quality monitor"
                                        height="183"
                                    />
                                </span>
                                Ambient Monitor
                            </a>
                        </li>
                        <li className={activeTab === "menu1" ? "active" : ""}>
                            <a href="#menu1" onClick={() => setActiveTab("menu1")}>
                                <span className="tab_img">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2023/05/aqi-api-for-construction.png"
                                        alt="prana air monitor api data for construction site"
                                        width="242"
                                        height="183"
                                    />
                                </span>
                                API Data To Govt. Portal
                            </a>
                        </li>
                        <li className={activeTab === "menu2" ? "active" : ""}>
                            <a href="#menu2" onClick={() => setActiveTab("menu2")}>
                                <span className="tab_img">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2023/05/cctv-camera.png"
                                        alt="construction cctv camera"
                                        width="242"
                                        height="183"
                                    />
                                </span>
                                CCTV Camera
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    {activeTab === "home" && (
                        <div id="home" className="tab-pane active">
                            <div className="ambient_monitor_box">
                                <p>
                                    Prana Air Ambient Air Quality Monitors help construction companies monitor air quality and ensure
                                    worker safety. Accurate readings of different air quality parameters, including temperature, allow for
                                    proactive measures to mitigate air pollution and improve overall air quality on site.
                                </p>
                                <h5 className="features">Features</h5>
                                <ul>
                                    <li>Real-time and historical data analysis</li>
                                    <li>Lightweight and Weatherproof monitor</li>
                                    <li>Multiple sensor & connectivity available</li>
                                    <li>Can be used as a CAAQMS</li>
                                </ul>

                                <ul className="paramete_list">
                                    <li>AQI</li>
                                    <li>PM1.0</li>
                                    <li>PM2.5</li>
                                    <li>PM10</li>
                                    <li>Temperature</li>
                                    <li>Humidity</li>
                                </ul>

                                <div className="ambient_btn_box">
                                    <a
                                        href="https://www.pranaair.com/wp-content/uploads/2024/05/Prana-Air-ambient-quality-monitor-brochure-for-construction-sites.pdf"
                                        className="broucher_btn"
                                    >
                                        Brochure
                                    </a>
                                    <a href="#get_in_touch" className="broucher_btn get_quote_btn">
                                        Get A Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === "menu1" && (
                        <div id="menu1" className="tab-pane active">
                            <div className="ambient_monitor_box">
                                <p>
                                    As per the Govt. guidlines, the data has to be accessed on a website portal owned by the government.
                                    Prana Air will provide the data of the air quality monitor through an API that can be integrated on
                                    any website.
                                </p>
                                <h5 className="features">Features:</h5>
                                <ul>
                                    <li>Uninterrupted API data </li>
                                    <li>Real-time and historical data</li>
                                    <li>100% uptime data transfer</li>
                                    <li>Reliable, stable & secure data</li>
                                </ul>

                                <ul className="paramete_list"></ul>

                                <div className="ambient_btn_box">
                                    <a href="#" className="broucher_btn">
                                        Brochure
                                    </a>
                                    <a href="#get_in_touch" className="broucher_btn get_quote_btn">
                                        Get A Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === "menu2" && (
                        <div id="menu2" className="tab-pane active">
                            <div className="ambient_monitor_box">
                                <p>
                                    With the ability to remotely access live video footage and real-time air quality data, construction
                                    teams can make informed decisions to improve the air quality, and follow the standards, and safety of
                                    their work environment.
                                </p>
                                <h5 className="features">Features</h5>
                                <ul className="feature_list_box">
                                    <li>Live video footage of the site</li>
                                    <li>Enables proactive measures to mitigate pollution</li>
                                    <li>Real-time monitoring of actvities</li>
                                    <li>Improves the saftety & security of the workers </li>
                                </ul>

                                <ul className="paramete_list"></ul>

                                <div className="ambient_btn_box">
                                    <a href="#" className="broucher_btn">
                                        Brochure
                                    </a>
                                    <a href="#get_in_touch" className="broucher_btn get_quote_btn">
                                        Get A Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Air Quality Monitoring Section */}
            <div className="container-fluid quality_solution_section top_space_heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="introducing_box sub_title_box text-center">
                                <h2 className="title_heading">
                                    Air Quality <span className="bold_text">Monitoring at Construction Sites</span>
                                </h2>
                                <strong>Bad air quality means bad health for construction workers and people living nearby</strong>
                                <p>
                                    Air quality assessment at C&D sites will help in monitoring and maintaining the air quality as per the
                                    Govt. norms, and therefore mitigation strategies can be adapted to maintain the air quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs for Air Quality Solutions */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <button className={`nav-link ${aqmTab === "aqm" ? "active" : ""}`} onClick={() =>
                                    aqmActiveTab("aqm")}
                                    href="#"
                                >
                                    Air Quality Monitor
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${aqmTab === "TVApp" ? "active" : ""}`} onClick={() => aqmActiveTab("TVApp")}
                                    href="#"
                                >
                                    LED/TV Display
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${aqmTab === "WebDashboard" ? "active" : ""}`} onClick={() =>
                                    aqmActiveTab("WebDashboard")}
                                    href="#"
                                >
                                    Storage & Dashboard
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className={`tab-pane ${aqmTab === "aqm" ? "show active" : ""}`}>
                                <div role="tabpanel" className="tab-pane active" id="airQualityMonitor">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h2>
                                                <span style={{ color: "#78ae60" }}>Ambient Air Monitor (CAAQMS)</span>
                                            </h2>
                                            <p>
                                                Prana Air monitors detect various pollutants and can be used as a CAAQMS for construction sites.
                                                This Continuous Ambient Air Quality Management System enables informed decisions and emission
                                                control strategies, ensuring improved air quality and reducing health risks for workers and
                                                communities.
                                            </p>
                                            <ul className="paramete_list new-para">
                                                <li>PM1</li>
                                                <li>PM2.5</li>
                                                <li>PM10</li>
                                                <li>Noise</li>
                                                <li>Temperature</li>
                                                <li>Humidity</li>
                                                <li>TVOC</li>
                                            </ul>
                                            <a className="new-brochure"
                                                href="https://www.pranaair.com/wp-content/uploads/2024/05/Prana-Air-ambient-quality-monitor-brochure-for-construction-sites.pdf">
                                                Download Brochure
                                            </a>
                                        </div>
                                        <div className="col-md-6 new-monitor-bg">
                                            <a href="#">
                                                <img className="wp-image-74252 aligncenter"
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/05/Prana-Air-Ambient-Air-quality-monitor-for-construction.webp"
                                                    alt="prana air ambient caaqms air quality monitor for construction sites" width="306" height="419" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane ${aqmTab === "TVApp" ? "show active" : ""}`}>
                                <div role="tabpane2" className="tab-pane" id="ledDisplay">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h2>
                                                <span style={{ color: "#78ae60" }}>LED Display & Android TV Dashboard</span>
                                            </h2>
                                            <p>
                                                Display real-time air quality data on your Android television sets or LED displays 24/7 at
                                                construction sites. This enables construction teams to easily monitor and analyze air quality
                                                data, helping them make informed decisions and take proactive measures to mitigate potential
                                                health risks for workers and nearby communities.
                                            </p>
                                            <ul className="paramete_list">
                                                <li>TV Display</li>
                                                <li>Large Display</li>
                                                <li>More Insightful</li>
                                                <li>Real-time Data</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <img className="wp-image-74236 aligncenter"
                                                src="https://www.pranaair.com/wp-content/uploads/2023/05/led-and-android-tv-display.png"
                                                alt="prana air construction monitor led and android tv display" width="420" height="318" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane ${aqmTab === "WebDashboard" ? "show active" : ""}`}>
                                <div role="tabpane3" className="tab-pane" id="storageDashboard">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h2>
                                                <span style={{ color: "#78ae60" }}>Cloud Storage & Data Dashboards</span>
                                            </h2>
                                            <p>
                                                Cloud storage is an essential tool for construction sites to remotely access monitored data. Cloud
                                                storage provides a secure backup for critical data, reducing the risk of data loss or corruption.
                                                The data can be accessed on mobile and tablet apps, android TV and web-dashboard anytime anywhere
                                                24/7.
                                            </p>
                                            <ul className="paramete_list">
                                                <li>Mobile</li>
                                                <li>Tablet</li>
                                                <li>TV</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <img className="wp-image-74195 aligncenter"
                                                src="https://www.pranaair.com/wp-content/uploads/2023/05/aqi-cloud-storage-and-data-dashboard.png"
                                                alt="aqi cloud storage and data dashboard" width="480" height="363" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Monitor Features Cards */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="new-card-monitor">
                            <div className="new-card-text">
                                <h3>Uninterrupted Performance :</h3>
                                <p>No Continuous Power Needed</p>
                            </div>
                            <div className="new-card-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/05/Uninterrupted-Performance.webp"
                                    alt="uninterrupted performance of prana air ambient air quality monitor at constructions site"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="new-card-monitor">
                            <div className="new-card-text">
                                <h3>GPS Enabled :</h3>
                                <p>Location-based deployment</p>
                            </div>
                            <div className="new-card-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/05/GPS-Enabled.webp"
                                    alt="gps enabled on prana air ambient air quality monitor at constructions site"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="new-card-monitor">
                            <div className="new-card-text">
                                <h3>SD Card Storage :</h3>
                                <p>Efficiently store data offline</p>
                            </div>
                            <div className="new-card-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/05/SD-CARD-STORAGE.webp"
                                    alt="sd card offline data storage on prana air ambient air quality monitor at constructions site"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Waterproof Banner */}
            <div className="container-fluid air-qulity-monitor-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="air-qlty-banner-txt">
                                <h2>Ambient Air Quality Monitor</h2>
                                <p>
                                    Monitor boasts an IP68 waterproof housing to provide unparalleled durability and performance in any
                                    weather condition. Ensures reliable data collection and analysis with accurate air quality.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="waterproof-housing">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/05/IP68-Weatherproof.png"
                                    alt="IP68 Weatherproof of Prana Air Ambient air quality monitor for construction sites"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Web Dashboard Section */}
            <div className="container web-dash">
                <div className="row">
                    <div className="col-md-6">
                        <div className="web-dash-heading">
                            <h2>AQI App and Web Dashboard</h2>
                            <p>
                                Access device data display with AQI App and Web Dashboard connectivity. Seamlessly navigate to trend
                                analysis, leveraging historical and comparative insights on air quality.
                            </p>
                            <ul>
                                <li>
                                    <a href="https://apps.apple.com/tt/app/aqi/id1439684571">
                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/05/icon-_apple.png" alt="" /> Download
                                        for <strong>iOS</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://play.google.com/store/apps/details?id=com.aqi.data">
                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/05/icon-android.png" alt="" /> Download
                                        for <strong>android</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="web-dash-img">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2024/05/aqi-app-and-web-dashboard.webp"
                                alt="aqi apps and web dashboard for prana air ambient air quality monitor at constructions sites"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Freemium Services */}
            <div className="container-fluid top_space_heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="introducing_box sub_title_box text-center">
                                <h2 className="title_heading">
                                    Data Freemium <span className="bold_text">Services</span>
                                </h2>
                                <p>
                                    You can access the real-time & historical air quality data of your monitor on multiple devices like
                                    mobile and tablet apps, android TV/LED display, and website 24*7. For more analytical and data
                                    reports, you can avail the premium data features of AQI dashboard.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container inner_container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2024/05/Air-Quality-Monitor-services.webp"
                                alt="prana air ambient air quality monitor caaqms for construction sites"
                            />
                            <h4>Ambient Monitor (CAAQMS)</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/05/led-display-and-tv-dashboard-at-construction-site.jpg"
                                alt="led display and android tv dashboard at construction site"
                            />
                            <h4>LED Display/TV Dashboard</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/05/aqi-cloud-and-data-dashboards.jpg"
                                alt="aqi customized data dashboard and cloud storage "
                            />
                            <h4>Data Dashboards & Cloud Storage</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Installation Section */}
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 style={{ textAlign: "center", fontSize: "18pt" }}>
                                Installation of Ambient Monitors at Construction Sites
                            </h3>
                            <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={8000} infinite={true} showDots={true}>
                                <div>
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2023/05/installed-of-prana-air-ambient-air-monitors-at-construction-site-2048x863.jpg"
                                        alt="Installation of ambient monitors"
                                        className="img-responsive"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2023/05/installed-of-prana-air-ambient-air-monitors-at-construction-site-2048x863.jpg"
                                        alt="Installation of ambient monitors"
                                        className="img-responsive"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2023/05/installed-prana-air-ambient-monitors-at-construction-site-1536x635.jpg"
                                        alt="Installation of ambient monitors"
                                        className="img-responsive"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2023/05/installed-prana-air-ambient-monitors-at-construction-site-1536x635.jpg"
                                        alt="Installation of ambient monitors"
                                        className="img-responsive"
                                    />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            <div className="container">
                <div className="row testimonial-bg-image">
                    <div className="col-md-9">
                        <p>
                            We have been using the PRANA AIRs Air Quality Monitors, installed by PURELOGIC LABS INDIA PVT. LTD.,
                            706, 7th Floor, Crown Heights, Sector - 10, Rohini, New Delhi, at our different construction sites and
                            have found their product accurate and reliable. The devices installed have helped us to comply with the
                            air quality standards and ensure the safety of our workers. The after-sales service is very prompt and
                            excellent.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <img
                            className="wp-image-74390 aligncenter"
                            src="https://www.pranaair.com/wp-content/uploads/2023/05/unity-group-logo.png"
                            alt="unity group logo"
                            width="182"
                            height="63"
                        />
                        <p style={{ textAlign: "center" }}>
                            <strong>Anil Sobti</strong>
                            <br />
                            General Manager Commercial
                        </p>
                    </div>
                </div>
            </div>

            {/* RMC Plant Section */}
            <div className="container-fluid rmc-plant">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="rmc-plant-sec">
                                <ul>
                                    <li>
                                        <h5>
                                            Discover the Importance of Air Quality Monitoring for <b>RMC Plants:</b> Ensuring Compliance and
                                            Healthy Atmospheres.
                                        </h5>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Know More
                                            <img src="https://www.pranaair.com/wp-content/uploads/2023/05/plant-btn-icon.png" alt="btn icon" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clientele Section */}
            <div className="container-fluid top_space_heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="introducing_box sub_title_box text-center">
                                <h2 className="title_heading">
                                    Our <span className="bold_text">Clientele</span>
                                </h2>
                                <p>We are honored to work with so many well-known companies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Client Logos */}
            <div className="container inner_container client_logo_section">
                <div className="row">
                    <div className="col-md-3">
                        <img src="https://www.pranaair.com/wp-content/uploads/2023/05/L-and-T-300x154.png" alt="Client Logo" className="img-responsive" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://www.pranaair.com/wp-content/uploads/2023/05/omax-300x154.png" alt="Client Logo" className="img-responsive" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://www.pranaair.com/wp-content/uploads/2023/05/unity-group-300x154.png" alt="Client Logo" className="img-responsive" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://www.pranaair.com/wp-content/uploads/2023/05/NKG-300x154.png" alt="Client Logo" className="img-responsive" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <img src="https://www.pranaair.com/wp-content/uploads/2023/05/signature-global-comp-logo-300x154.png" alt="Client Logo" className="img-responsive" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://www.pranaair.com/wp-content/uploads/2023/05/central-park-comp-logo-300x154.png" alt="Client Logo" className="img-responsive" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://www.pranaair.com/wp-content/uploads/2023/05/dcm-shriram-logo-300x154.png" alt="Client Logo" className="img-responsive" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://www.pranaair.com/wp-content/uploads/2023/05/emaar-300x154.png" alt="Client Logo" className="img-responsive" />
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="container-fluid faq_ask_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="introducing_box sub_title_box text-center">
                                <h2 className="title_heading">
                                    Frequently Asked <span className="bold_text">Questions</span>
                                </h2>
                                <p>
                                    About Air Quality Solution for construction sites
                                    <br />
                                    Have questions? Were here to help.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Accordion */}
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
                                            1. What are some common air pollutants that are present at C&D sites?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            – Common air pollutants present at C&D sites are PM2.5, PM10, CO, NOx, VOCs, etc, and noise.
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
                                            2. What are the health impacts of the pollutants present at a C&D site?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            – Workers and people living nearby are affected the most. The harm can be increased by subsequent exposure to PM and dust pollution. Health effects include eye and respiratory tract irritations, lung and kidney damage, and cancer.


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
                                            3. What are some effective methods for reducing dust at C&D sites?
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            – The best methods for reducing dust at C&D facilities include routinely wetting down surfaces, employing dust suppression devices, and making sure enclosed spaces have adequate ventilation.


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
                                            4. Why is it necessary to have air quality monitoring solutions?
                                        </button>
                                    </h2>
                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            – To know the nature of pollutants and how much they are present at the site so that necessary actions can be taken while complying with the standards under the CAQM.


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
                                            5. What are some of the regulations that C&D sites must follow in order to maintain appropriate air quality?
                                        </button>
                                    </h2>
                                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            – C&D sites are required to abide by rules established by the regional air quality management district or a state agency, which may include restrictions on the number of certain pollutants that can be emitted, measures to reduce dust, and reporting requirements.
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
                                            6. Other than the air pollutants, do your monitors include any other parameters?                                        </button>
                                    </h2>
                                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            – Yes, you can keep an eye on the humidity, noise, and temperature of a place.

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
                                            7. Are there any further advantages to the solutions?                                  </button>
                                    </h2>
                                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            – Customizable dashboard, 24*7 remote access to the data, health suggestions, real-time and historical data analysis, QR code to scan for real-time AQI in that location, and much more.

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <div className="container-fluid airqulality_contact_section inner_container">
                <div className="container">
                    <div className="row" id="get_in_touch">
                        <div className="col-md-12">
                            <div className="introducing_box sub_title_box text-center">
                                <h2 className="title_heading">
                                    Get in <span className="bold_text">Touch </span>
                                </h2>
                                <p>
                                    Please help us know what requirements you have.
                                    <br />
                                    Our team will contact you very soon.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row airquality_inner_form">
                        <div className="col-md-3 contact_content_box">
                            <div className="contact_information_box">
                                <h4>Contact Info</h4>
                                <p>Looking for air quality solutions for construction sites?</p>
                                <ul className="contact_info">
                                    <li>
                                        <i className="fa fa-phone" aria-hidden="true"></i>Phone Number:
                                        <br />
                                        (+91) 73918-73918
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>Email Address:
                                        <br />
                                        info@purelogic.in
                                    </li>
                                    <li>
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>Office Location:
                                        <br />
                                        706, 7th Floor, Sec 10,
                                        <br />
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
                                            <div className="form-group">
                                                <label>Your Name</label>
                                                <input type="text" className="form-control" placeholder="Enter your name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Your Email</label>
                                                <input type="email" className="form-control" placeholder="Enter your email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Phone Number</label>
                                                <input type="tel" className="form-control" placeholder="Enter your phone number" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Company Name</label>
                                                <input type="text" className="form-control" placeholder="Enter your company name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="message_text">Your Message</label>
                                        <textarea className="form-control" rows="3" placeholder="Enter your message"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industrial Applications */}
            <div className="container-fluid seperate_industrial_box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="introducing_box sub_title_box text-center">
                                <h2 className="title_heading">
                                    Industrial <span className="bold_text">Applications</span>
                                </h2>
                                <p>
                                    Regardless of how small or large a business is, Prana Air offers a wide choice of Smart,
                                    <br />
                                    affordable, and highly accurate air quality solutions for various industries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industrial Applications Carousel */}
            <div className="container inner_container industries_application_section">
                <div className="row">
                    <div className="col-md-12">
                        <Carousel responsive={insdurialapp} autoPlay={true} autoPlaySpeed={8000} infinite={true} showDots={false}>
                            <div className="app_service_box">
                                <div className="app_img_bx">
                                    <a href="https://www.pranaair.com/solutions-by-application/retail-stores/">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/01/air-quality-solutions-for-retail-outlets.jpg"
                                            alt="air quality solutions for retail stores"
                                        />
                                    </a>
                                </div>
                                <a href="https://www.pranaair.com/solutions-by-application/retail-stores/">
                                    <h4>Solutions for Retail Stores</h4>
                                </a>
                            </div>
                            <div className="app_service_box">
                                <div className="app_img_bx">
                                    <a href="https://www.pranaair.com/solutions-by-application/bank-financial-institutions/">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2022/08/solutions-for-mobile-phone-makers.png"
                                            alt="air quality solutions for banks"
                                        />
                                    </a>
                                </div>
                                <a href="https://www.pranaair.com/solutions-by-application/bank-financial-institutions/">
                                    <h4>Solutions for Bank</h4>
                                </a>
                            </div>
                            <div className="app_service_box">
                                <div className="app_img_bx">
                                    <a href="https://www.pranaair.com/solutions-by-application/hotel-businesses/">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/07/solution-for-office-scaled.jpg"
                                            alt="air quality solutions for hotel business"
                                        />
                                    </a>
                                </div>
                                <a href="https://www.pranaair.com/solutions-by-application/hotel-businesses/">
                                    <h4>Solutions for Hotel</h4>
                                </a>
                            </div>
                            <div className="app_service_box">
                                <div className="app_img_bx">
                                    <a href="https://www.pranaair.com/solutions-by-application/restaurants/">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-animale-care-page.jpg"
                                            alt="air quality solutions for restaurants"
                                        />
                                    </a>
                                </div>
                                <a href="https://www.pranaair.com/solutions-by-application/restaurants/">
                                    <h4>Solutions for Restaurant</h4>
                                </a>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

