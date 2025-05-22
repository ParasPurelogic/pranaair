"use client"

import "./style.css"
import "react-multi-carousel/lib/styles.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import Carousel from "react-multi-carousel"

export default function AirQualitySolutionsFitnessPage() {
    // Carousel responsive settings
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
        },
    }

    const sliderQuality = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
        },
    }

    // Carousel data for slider
    const carouselItems = [
        {
            id: 1,
            icon: "https://www.pranaair.com/wp-content/uploads/2024/08/tv-aqi-app-icon.png",
            title: "AQI TV App",
            description:
                "Access real-time air quality data on a large TV screen in your fitness center or gym. Get continuous 24/7 remote monitoring to stay informed about AQI levels and ensure a healthier environment for members and staff.",
            image: "https://www.pranaair.com/wp-content/uploads/2022/12/aqi-tv-app-dashboard.jpg",
        },
        {
            id: 2,
            icon: "https://www.pranaair.com/wp-content/uploads/2024/08/AQI-Dashboard-icon.jpg",
            title: "AQI Web-Dashboard",
            description:
                "Get real-time data from your fitness center on a web dashboard to make informed decisions. Explore global pollution trends, receive health advice based on real-time air quality indexes, and easily compare air quality parameters across multiple locations.",
            image: "https://www.pranaair.com/wp-content/uploads/2022/12/aqi-customized-tablet-app.jpg",
        },
        {
            id: 3,
            icon: "https://www.pranaair.com/wp-content/uploads/2024/08/mobile-AQI-APP-icon.png",
            title: "AQI Mobile App",
            description:
                "Monitor real-time air quality data from your fitness center anytime, anywhere with our mobile app. View global air pollution and weather maps, and easily compare air quality parameters across multiple locations with the AQI App.",
            image: "https://www.pranaair.com/wp-content/uploads/2022/09/aqi-data-qrcode-for-airpot.jpg",
        },
    ]

    return (
        <div>
            {/* Banner Section */}
            <div
                className="row school_banner_box"
                style={{
                    backgroundImage:
                        "url('https://www.pranaair.com/wp-content/uploads/2022/12/air-quality-solutions-for-fitness-center.jpg')",
                }}
            >
                <div className="col-md-6 banner_quality_box">
                    <div className="pocket_title_box school_aqi_box">
                        <h1>
                            Air quality solutions for <span className="bold_text">Fitness Center & Gym</span>
                        </h1>
                        <p>
                            A complete solution for air monitoring, air purification, and data monitoring for your fitness centers and
                            gyms.
                        </p>
                        <a className="pocket_buy_btn" href="#get_in_touch">
                            Get a Quote
                        </a>
                    </div>
                </div>
                <div className="col-md-6 banner_quality_img_box"></div>
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
                                Fitness centers and gym areas are enclosed, high-density spaces where fresh air is extremely necessary.
                                Occupancy, panting athletes, and ventilation rates are two factors that affect the air quality indoors.
                                Due to this, the transmission of airborne diseases and pathogens is very easy. Therefore, it is
                                necessary to monitor the air quality and take proper measures to avoid bad air quality scenarios.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pollutants Features */}
            <div className="container pollution_cntr inner_container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-parameter.png"
                                alt="pm2.5 in school and institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>PM2.5</h2>
                                <p>Microscopic breathable dust and liquid particles that enter deep into our lungs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-gas-icon.png"
                                alt="co2 gas in schools and institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>CO2</h2>
                                <p>The breathing rate of athletes is high in gyms which directly influences the CO2 levels.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-parameter-icon.png"
                                alt="tvoc in schools and institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>TVOC</h2>
                                <p>Gym equipment and cleaning agents are some of the potential sources.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/12/microbe-icon.png"
                                alt="ozone in school & institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>Microbial Pollutants</h2>
                                <p>Flu, cough, cold, etc. are caused when exposed to microbial pollutants.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/12/odor-icon.png"
                                alt="ozone in school & institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>Odor</h2>
                                <p>When sweat and bacteria are exposed to gym fabric, produces a bad odor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/noise-icon.png"
                                alt="ozone in school & institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>Noise</h2>
                                <p>Loud noise due to huge no. of people gathering</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* School Image Box */}
            <div
                className="row school_img_box"
                style={{
                    backgroundImage:
                        "url('https://www.pranaair.com/wp-content/uploads/2022/12/air-pollution-problem-in-fitness-center-gym.jpg')",
                }}
            >
                <div className="col-md-12">
                    <div className="school_box_cntr">
                        <ul>
                            <li className="first_school_box">
                                <span className="school_icon_box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-icon-2.png"
                                        alt="pm2.5 in school & institutes"
                                    />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>PM2.5</h3>
                                    <p>They have the ability to enter the bloodstream & can cause various diseases.</p>
                                </div>
                            </li>
                            <li className="second_school_box">
                                <span className="school_icon_box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-icon.png"
                                        alt="co2 in school & institutes"
                                    />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>CO2</h3>
                                    <p>Excess CO2 can cause perspiration, fatigue, suffocation, convulsions</p>
                                </div>
                            </li>
                            <li className="third_school_box">
                                <span className="school_icon_box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2022/08/ozone-o3-icon.png"
                                        alt="ozone o3 in school & institutes"
                                    />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>Noise</h3>
                                    <p>Excessive noise can result in headaches & high blood pressure.</p>
                                </div>
                            </li>
                            <li className="fourth_school_box">
                                <span className="school_icon_box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2022/12/bacteria-icon.png"
                                        alt="tvoc in school & institutes"
                                    />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>Microbe</h3>
                                    <p>Flu, cough, cold, etc. are caused when exposed to microbial pollutants.</p>
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
                            <h2 className="title_heading">
                                Who are at <span className="bold_text">Risk?</span>
                            </h2>
                            <p>
                                Different people from different age groups can be present in a fitness center. But certain groups are
                                significantly impacted as compared to healthy adults.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Risk Features */}
            <div className="container pollution_cntr inner_container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/12/gym-personal-trainer.png"
                                alt="Personal Trainer in fitness center"
                            />
                            <div className="feature_wrap_box">
                                <h2>Personal Trainer</h2>
                                <p>Unattentiveness, a high chance of acquiring respiratory illnesses, and loss of coordination.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/12/service-technicians.png"
                                alt="Service Technician in fitness center"
                            />
                            <div className="feature_wrap_box">
                                <h2>Service Technician</h2>
                                <p>Loss of coordination, unattentiveness, etc. are very common if exposed to bad air quality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/12/front-desk-staff.png"
                                alt="Front desk staff in fitness center & gym"
                            />
                            <div className="feature_wrap_box">
                                <h2>Front desk staff</h2>
                                <p>
                                    Bad air quality will affect every individual present in the same scenario, including the desk staff.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/12/gym-members.png"
                                alt="a customer of a restaurant"
                            />
                            <div className="feature_wrap_box">
                                <h2>Members</h2>
                                <p>Nausea, uneasiness, headaches, and breathlessness are some of the side effects of exposure.</p>
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
                            <p>Prana Air air quality monitoring and purifying solutions give you the power to know what your customers and staff breathe and what you could do to clean the air to make your fitness centers and gyms ‘Air pollution-free zone’ and view and analyze your IAQ.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bootstrap Tabs Section */}
            <div className="container air_quality_tab_sec">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav nav-tabs" id="airQualityTabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="air-quality-monitors-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#air-quality-monitors"
                                    type="button"
                                    role="tab"
                                    aria-controls="air-quality-monitors"
                                    aria-selected="true"
                                >
                                    Air Quality Monitors
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="fresh-air-machine-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#fresh-air-machine"
                                    type="button"
                                    role="tab"
                                    aria-controls="fresh-air-machine"
                                    aria-selected="false"
                                >
                                    Fresh Air Machine
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="api-data-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#api-data"
                                    type="button"
                                    role="tab"
                                    aria-controls="api-data"
                                    aria-selected="false"
                                >
                                    API Data
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="airQualityTabsContent">
                            <div
                                className="tab-pane fade show active inner_container"
                                id="air-quality-monitors"
                                role="tabpanel"
                                aria-labelledby="air-quality-monitors-tab"
                            >
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
                                                        <img
                                                            style={{ width: "100%" }}
                                                            src="https://www.pranaair.com/wp-content/uploads/2022/12/prana-air-squair-air-monitor-in-fitness-center-gym.png"
                                                            alt="prana air squair monitor as the air quality solutions for restaurant or cafe"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="slider_details_box">
                                                    <h3>
                                                        Prana Air SQUAIR
                                                        <br /> Air quality monitor
                                                    </h3>
                                                    <span>
                                                        SQUAIR monitor is a smart indoor air quality monitoring device that can detect particulate
                                                        matters, temperature, humidity, and gas parameters.
                                                    </span>
                                                    <ul className="airquality_list">
                                                        <li>Detects PM2.5, PM10, CO2, TVOC, Noise, Light (LUX), Temperature & humidity</li>
                                                        <li>Mode of connectivity: WiFi, GSM, BMS</li>
                                                        <li>Mobile & Smart TV App, web-dashboard</li>
                                                    </ul>
                                                    <a
                                                        href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/"
                                                        className="knowmore_btn"
                                                    >
                                                        Know More
                                                    </a>
                                                    <a href="#" className="rent_btn">
                                                        Looking to Rent?
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="slider_cntr">
                                                <div className="slider_img_box">
                                                    <a href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/">
                                                        <img
                                                            style={{ width: "100%" }}
                                                            src="https://www.pranaair.com/wp-content/uploads/2022/12/prana-air-sensible-plus-air-monitor-for-fitness-center-gym.jpg"
                                                            alt="prana air sensible+ air quality monitor for restaurants and cafe"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="slider_details_box">
                                                    <h3>
                                                        Prana Air Sensible+
                                                        <br /> Air quality monitor
                                                    </h3>
                                                    <span>
                                                        This is a smart air quality monitor that comes with 7 inch touch screen display that gives
                                                        more insightful data.
                                                    </span>
                                                    <ul className="airquality_list">
                                                        <li>Detects PM2.5, PM10, CO2, TVOC, HCHO, Temperature, Humidity</li>
                                                        <li>7 Inch LED Touch Screen Display</li>
                                                        <li>5000 mAh Battery InBuilt</li>
                                                        <li>WiFi Connectivity With Mobile App</li>
                                                    </ul>
                                                    <a
                                                        href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/"
                                                        className="knowmore_btn"
                                                    >
                                                        Know More
                                                    </a>
                                                    <a href="#" className="rent_btn">
                                                        Looking to Rent?
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="fresh-air-machine"
                                role="tabpanel"
                                aria-labelledby="fresh-air-machine-tab"
                            >
                                <div className="slider_cntr">
                                    <div className="slider_img_box">
                                        <a href="https://www.pranaair.com/fresh-air-machine/">
                                            <img
                                                style={{ width: "100%" }}
                                                src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-fresh-air-machine-for-iaq-solution.jpg"
                                                alt="prana air fresh air machine as iaq solution for school & institutes"
                                            />
                                        </a>
                                    </div>
                                    <div className="slider_details_box">
                                        <h3>
                                            Fresh Air Machine
                                            <br /> As IAQ Solution
                                        </h3>
                                        <span>
                                            It is one-stop solution for indoor air pollution, working as an air purifier - IAQ solution.
                                        </span>
                                        <ul className="airquality_list">
                                            <li>Comes with multi-layers HEPA Filters</li>
                                            <li>Compact Design makes it easy to place</li>
                                            <li>Promising you up to 99.5% efficiency</li>
                                        </ul>
                                        <a href="https://www.pranaair.com/fresh-air-machine/" className="knowmore_btn">
                                            Know More
                                        </a>
                                        <a href="#" className="rent_btn">
                                            Looking to Rent?
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="api-data" role="tabpanel" aria-labelledby="api-data-tab">
                                <div className="slider_cntr">
                                    <div className="slider_img_box">
                                        <img
                                            style={{ width: "100%" }}
                                            src="https://www.pranaair.com/wp-content/uploads/2022/08/aqi-api-data-for-institutes.jpg"
                                            alt="aqi api data for school & institutes"
                                        />
                                    </div>
                                    <div className="slider_details_box">
                                        <h3>
                                            AQI API Data
                                            <br /> For Institutes
                                        </h3>
                                        <span>Avail the real-time air quality data of your institutes nearby outdoor area on the web.</span>
                                        <ul className="airquality_list">
                                            <li>Integrate the institutes data on the web</li>
                                            <li>Access the real-time data quickly</li>
                                            <li>Take precautions from the air pollution</li>
                                        </ul>
                                        <br />
                                        <a href="#get_in_touch" className="knowmore_btn">
                                            Know More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Freemium Services */}
            <div className="container top_space_heading">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                Data Freemium <span className="bold_text">Services</span>
                            </h2>
                            <p>
                                The data can be displayed or analyzed on the LCD screens or the app via our customized dashboard. Scan
                                the QR to know the AQI of the fitness center.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container inner_container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="app_service_box"><img
                            src="https://www.pranaair.com/wp-content/uploads/2022/12/aqi-tv-app-dashboard.jpg"
                            alt="aqi tv app dashboard for fitness center &amp; gym" />
                            <h4>TV Dashboard App</h4>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="app_service_box"><img
                            src="https://www.pranaair.com/wp-content/uploads/2022/12/aqi-customized-tablet-app.jpg"
                            alt="aqi customized dashboard app for fitness center &amp; gym" />
                            <h4>Customised App for Schools</h4>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="app_service_box"><img
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-data-qrcode-for-airpot.jpg"
                            alt="aqi monitor data qr code scan for airport" />
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
                            <h2 className="title_heading">
                                The Effects of Air Pollution - In <span className="bold_text">Fitness Center</span>
                            </h2>
                            <p>
                                When gym members are exposed to poor air quality, they feel unwell, and headaches and nausea are common
                                symptoms of air pollution exposure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container inner_container airgraph_cntr">
                <div className="row">
                    <div className="col-md-6 air_graph_box">
                        <div className="air_quality_box">
                            <h3>
                                <span style={{ fontSize: "15pt", color: "#78ae60" }}> With Clean Air</span>
                            </h3>
                            <ul className="airquality_list">
                                <li>Improved ventilation</li>
                                <li>Improve the health of the members</li>
                                <li>Increase the activeness of the members</li>
                                <li>Decrease absenteeism</li>
                            </ul>
                        </div>
                        <span className="vs_text">VS</span>
                    </div>
                    <div className="col-md-6 air_qualiity_right">
                        <div className="air_quality_box">
                            <h3>
                                <span style={{ fontSize: "15pt", color: "#e86868" }}> Without Clean Air</span>
                            </h3>
                            <ul className="airquality_list red_list">
                                <li>Decrease members’ willingness</li>
                                <li>Less comfort</li>
                                <li>Bad odor and mold</li>
                                <li>Members may get sick</li>
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
                                    <h2 className="accordion-header" id="heading1">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse1"
                                            aria-expanded="true"
                                            aria-controls="collapse1"
                                        >
                                            1. What are the major pollutants that are present in a gym?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse1"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="heading1"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">
                                            Many pollutants can be present inside a typical gym area setting. CO2, TVOC, and dust particles
                                            are the main pollutants followed by noise, CO, airborne pathogens, temperature, etc.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading2">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse2"
                                            aria-expanded="false"
                                            aria-controls="collapse2"
                                        >
                                            2. What are the health impacts of the pollutants present inside the gym?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse2"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading2"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">
                                            Physical discomforts like headaches, nausea, dizziness, etc. among gym goers and staff.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading3">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse3"
                                            aria-expanded="false"
                                            aria-controls="collapse3"
                                        >
                                            3. What are some criteria that need to be kept in mind for a healthy and comfortable gyming
                                            experience?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse3"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading3"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">
                                            Ventilation rate, noise, comfort level, mold score, organic aerosols, etc. are some of the
                                            criteria.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading4">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse4"
                                            aria-expanded="false"
                                            aria-controls="collapse4"
                                        >
                                            4. Why is it necessary to have air quality monitoring solutions?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse4"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading4"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">
                                            To know the nature of pollutants and by how much are they present in a gym so that necessary
                                            actions can be taken.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading5">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse5"
                                            aria-expanded="false"
                                            aria-controls="collapse5"
                                        >
                                            5. How can I check the AQI of my gym using your device?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse5"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading5"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">
                                            Prana Air Monitors are WiFi enabled so you don’t need to set up a wire framework to extract and display the data. Simply connect the monitor to the dashboard through WiFi connectivity and view the real-time data on your screens.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading6">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse6"
                                            aria-expanded="false"
                                            aria-controls="collapse6"
                                        >
                                            6. Are any other parameters included in the monitors other than the air pollutants?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse6"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading6"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">
                                            Yes, you can monitor the temperature, noise, and humidity in an area.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading7">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse7"
                                            aria-expanded="false"
                                            aria-controls="collapse7"
                                        >
                                            7. Are there any additional benefits that come with the solutions?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse7"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading7"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">
                                            Customizable dashboard, 24*7 remote access to the data, get health tips, real-time and historical
                                            data analysis, QR code to scan and know the real-time AQI of that area, and many more.
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
                            <h2 className="title_heading">
                                Our <span className="bold_text">Clientele</span>
                            </h2>
                            <p>We are honored to work with so many well-known companies.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container client_logo_section inner_container">
                <div className="row">
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png"
                            className="img-responsive"
                            alt="Client Logo"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png"
                            className="img-responsive"
                            alt="Client Logo"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png"
                            className="img-responsive"
                            alt="Client Logo"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png"
                            className="img-responsive"
                            alt="Client Logo"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/RENAULT-NISSAN.png"
                            className="img-responsive"
                            alt="Client Logo"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/TATA.png"
                            className="img-responsive"
                            alt="Client Logo"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/CSIR.png"
                            className="img-responsive"
                            alt="Client Logo"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/MAHINDRA.png"
                            className="img-responsive"
                            alt="Client Logo"
                        />
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
                                <p>Please help us know what requirements you have. Our team will contact you very soon.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactForm pageName="Fitness Center Gym Page" />
            </div>

            {/* Industrial Applications */}
            <div className="container seperate_industrial_box">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                Industrial <span className="bold_text">Applications</span>
                            </h2>
                            <p>
                                Regardless of how small or large a business is, Prana Air offers a wide choice of Smart, affordable, and
                                highly accurate air quality solutions for various industries.
                            </p>
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
                                </div>
                                <div className="item">
                                    <div className="app_service_box">
                                        <div className="app_img_bx">
                                            <a href="https://www.pranaair.com/solutions-by-application/bank-financial-institutions/">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/01/air-quality-solutions-for-banks.jpg"
                                                    alt="air quality solutions for banks"
                                                />
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
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-hotel.jpg"
                                                    alt="air quality solutions for hotel business"
                                                />
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
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-restaurant.jpg"
                                                    alt="air quality solutions for restaurants"
                                                />
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

            {/* Bootstrap Scripts */}
            <div
                dangerouslySetInnerHTML={{
                    __html: `
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        `,
                }}
            />
        </div>
    )
}
