"use client"

import { useState } from "react"
import "./style.css"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"
import ContactForm from "@/Components/Contacform/ContactForm";


export default function RailwayPage() {
  // State to track active tab
  const [activeTab, setActiveTab] = useState("air-quality-monitors")
  const [activeFaq, setActiveFaq] = useState("collapseOne")

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  const toggleFaq = (faqId) => {
    setActiveFaq(activeFaq === faqId ? "" : faqId)
  }

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
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="school_banner_box">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="pocket_title_box school_aqi_box">
                  <h1>
                    Air quality solutions for{" "}
                    <span className="bold_text" style={{ color: "#78ae60" }}>
                      {" "}
                      Railways
                    </span>
                  </h1>
                  <p>
                    Lets embark on a journey towards cleaner, healthier railways for everyone with comprehensive air
                    monitoring, purification, and data management solutions.
                  </p>
                  <p className="banner-high-co2">
                    <strong>Railways</strong> | <strong>Metros</strong> | <strong>Trains</strong>
                  </p>
                  <a className="banner-btn" href="#get_in_touch" aria-label="contact form">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Factors Affecting Air Quality Section */}
      <section>
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              <span style={{ fontSize: "24pt" }}>
                Factors affecting air quality in <span style={{ color: "#78ae60" }}>Railway Stations </span>
              </span>
            </h2>
            <p>Diesel-powered trains and crowded stations are fueling a rise in air pollutants at railway stations.</p>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/pm-icon.png"
                  alt="pm2.5 pm10 icon"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>
                    <strong>
                      Particulate Matter
                      <br />
                      (PM2.5 and PM10)
                    </strong>
                  </h2>
                  <p>Dust from rail systems, and dust from maintenance activities.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/vocs-icon.png"
                  alt="vocs icon"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>
                    <strong>
                      Volatile Organic
                      <br />
                      Compounds (VOCs)
                    </strong>
                  </h2>
                  <p>Emits from solvents used in maintenance, and chemical interactions.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Carbon-Monoxide-CO.png"
                  alt="co parameter icon"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>
                    <strong>
                      Carbon
                      <br />
                      Monoxide (CO)
                    </strong>
                  </h2>
                  <p>Emits from Diesel engines and incomplete combustion of fuel in trains.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Nitrogen-Oxides-NOx.png"
                  alt="NOx gas icon"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>
                    <strong>
                      Nitrogen
                      <br />
                      Oxides (NOx)
                    </strong>
                  </h2>
                  <p>Emits from diesel-powered locomotives and engines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Railway Station Platform Section */}
      <section className="railway-staion-plateform">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="feature_box factors-affect-box congested-stations">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Congested-Stations.png"
                  alt="congested station"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>
                    <strong>Congested Stations</strong>
                  </h2>
                  <p>Crowded stations result in poor ventilation, trapping pollutants and worsening air quality.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature_box factors-affect-box congested-stations">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Noise.png"
                  alt="noise pollution"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>
                    <strong>Noise Pollution</strong>
                  </h2>
                  <p>
                    High noise level increases the stress levels in a person and can exacerbate respiratory problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature_box factors-affect-box congested-stations">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Nitrogen-Oxides-NOx.png"
                  alt="diesel engine emissions NOx"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>
                    <strong>Diesel Emissions</strong>
                  </h2>
                  <p>
                    Diesel engines powered trains emit various pollutants such as nitrogen oxides (NOx) and particulate
                    matter (PM).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote">
        <div className="container">
          <div className="quote-heading">
            <h2>DO YOU KNOW?</h2>
            <p>
              According to the study by the California Air Resources Board (CARB), locomotives are projected to produce{" "}
              <strong>Over 640 tons per year of PM2.5 and Over 29,800 tons per year of NOx in California.</strong>
            </p>
            <p>
              <strong>
                Such emissions not only deteriorate air quality within the state but can also contribute to global air
                pollution.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Concern Section */}
      <section className="area-of-concern">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Areas of{" "}
              <span style={{ color: "#78ae60" }}>
                <strong>Concern</strong>{" "}
              </span>
            </h2>
            <p>Railway stations are bustling activity hubs and also pose significant air quality challenges.</p>
          </div>

          <div className="row mg-l">
            <div className="col-md-3">
              <div className="area-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Railway-Stations.jpg"
                  alt="air pollution in railway station"
                />
                <h3>Railway Stations</h3>
                <p>
                  Train emissions and crowded conditions emit various pollutants that affect indoor and outdoor air
                  quality.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="area-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Locomotive-Cabins.jpg"
                  alt="air pollution in locomotive cabins"
                />
                <h3>Locomotive Cabins</h3>
                <p>Loco Pilot and other members are exposed to diesel emissions for extended periods.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="area-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Rail-Tracks-in-Urban-Areas.jpg"
                  alt="air pollution in rail tracks"
                />
                <h3>Rail Tracks in Urban Areas</h3>
                <p>The passing trains suspend pollutants from tracks in residential and commercial areas.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="area-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Maintenance-Yards.jpg"
                  alt="air pollution in maintenance yards"
                />
                <h3>Maintenance Yards</h3>
                <p>Train maintenance includes engines and other equipment repairs that release pollutants.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is at Risk Section */}
      <section className="who-risk">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Who is at{" "}
              <span style={{ color: "#78ae60" }}>
                <strong>Risk?</strong>
              </span>
            </h2>
            <p>The air quality issues at railway stations impact various groups, each facing unique risks.</p>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="passengers-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Passengers.png"
                  alt="passengers in railways"
                />
                <h3>Passengers</h3>
                <p>Children, older, and those with pre-existing respiratory conditions.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="passengers-box">
                <img
                  className="loco-pilot"
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Loco-Pilot.png"
                  alt="loco pilot in railway"
                />
                <h3>Loco Pilot</h3>
                <p>Prolonged exposure to pollutants trapped in the cabin.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="passengers-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Nearby-Residents.png"
                  alt="nearby residents in railway stations"
                />
                <h3>Nearby Residents</h3>
                <p>Communities living close to railway tracks and stations.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="passengers-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Railway-Workers.png"
                  alt="railway workers"
                />
                <h3>Railway Workers</h3>
                <p>Long-term exposure while performing their duties.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions Section */}
      <section className="air-quality-solution">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Air quality <span style={{ color: "#78ae60" }}>Solutions</span>
            </h2>
            <p>
              Identifying and addressing these risks is essential to safeguard everyone affected by the air quality
              challenges at railway stations.
            </p>
          </div>

          <div className="modern-tabs">
            <div className="tab-buttons">
              <button
                className={`tab-btn ${activeTab === "air-quality-monitors" ? "active" : ""}`}
                onClick={() => handleTabClick("air-quality-monitors")}
              >
                Air quality Monitors
              </button>
              <button
                className={`tab-btn ${activeTab === "outdoor-air-purifier" ? "active" : ""}`}
                onClick={() => handleTabClick("outdoor-air-purifier")}
              >
                Outdoor Air Purifier
              </button>
              <button
                className={`tab-btn ${activeTab === "data-display" ? "active" : ""}`}
                onClick={() => handleTabClick("data-display")}
              >
                Data Display
              </button>
            </div>

            <div className="tab-content">
              <div
                className={`tab-pane ${activeTab === "air-quality-monitors" ? "active" : ""}`}
                id="air-quality-monitors"
              >
                <div className="solution-content">
                  <div className="solution-image">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Prana-Air-Ambient-Air-quality-monitor.jpg"
                      alt="prana air's air quality monitors for railways"
                    />
                  </div>
                  <div className="solution-details">
                    <h3>Prana Air Ambient Air quality monitor</h3>
                    <p>Integrating air quality monitoring systems is key to address concerns at railway stations.</p>
                    <ul className="solution-features">
                      <li>Real-time air quality monitoring</li>
                      <li>Fully Waterproof Housing</li>
                      <li>Low-cost Multiple sensors available</li>
                    </ul>
                    <a className="solution-btn" href="#" aria-label="Know More about prana air monitors">
                      Know More
                    </a>
                  </div>
                </div>
              </div>

              <div
                className={`tab-pane ${activeTab === "outdoor-air-purifier" ? "active" : ""}`}
                id="outdoor-air-purifier"
              >
                <div className="solution-content">
                  <div className="solution-image">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Prana-Air-Outdoor-Air-Purifier-monitor.jpg"
                      alt="prana air outdoor air purifier for railways"
                    />
                  </div>
                  <div className="solution-details">
                    <h3>Prana Air Outdoor Air Purifier</h3>
                    <p>
                      Implementing Air Purifiers can help in tackling air pollution effectively at railway stations.
                    </p>
                    <ul className="solution-features">
                      <li>Filter out PM2.5, NOx, and VOCs etc.</li>
                      <li>High-capacity filtration system</li>
                      <li>Reduces pollutant levels for better protection</li>
                    </ul>
                    <a
                      className="solution-btn"
                      href="#"
                      aria-label="Know More about prana air outdoor air purifier"
                    >
                      Know More
                    </a>
                  </div>
                </div>
              </div>

              <div className={`tab-pane ${activeTab === "data-display" ? "active" : ""}`} id="data-display">
                <div className="solution-content">
                  <div className="solution-image">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Prana-Air-Customized-display.jpg"
                      alt="air quality data on tv app in railway station"
                    />
                  </div>
                  <div className="solution-details">
                    <h3>Prana Air Customized TV Displays</h3>
                    <p>
                      Tailor the interface to your specific needs and Monitor air quality in real-time for immediate
                      insights.
                    </p>
                    <ul className="solution-features">
                      <li>Real-time air quality monitoring</li>
                      <li>Customized display</li>
                      <li>Accessible Data for everyone</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Effects of Air Pollution Section */}
      <section className="effect-air-pollution">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              The Effects of Air Pollution -
              <span style={{ color: "#78ae60" }}>
                <strong>Railway Station</strong>
              </span>
            </h2>
            <p>
              Poor Air Quality at railway stations affects every passenger and workers health causing various problems.
            </p>
          </div>

          <div className="row line">
            <div className="col-md-6">
              <div className="air_quality_box">
                <h3>Without Air Quality Solutions</h3>
                <ul className="airquality_list red_list">
                  <li>Poor airflow and pollutant upsurge</li>
                  <li>Decreased comfort for everyone</li>
                  <li>Unpleasant and stuffy environment.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="air_quality_box">
                <h3>With Air Quality Solutions</h3>
                <ul className="airquality_list">
                  <li>Better airflow and pollutant removal</li>
                  <li>Improve everyones comfort</li>
                  <li>Cleaner and fresher environment.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="slider">
        <div className="container">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={7000}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <div className="row">
                <div className="col-md-6">
                  <div className="slidder-txt">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/tv-aqi-app-icon.png"
                      alt="aqi tv app logo"
                    />
                    <h3>AQI TV App</h3>
                    <p>
                      Display monitor data on a large TV screen with the AQI TV app. Compare real-time and historical
                      data, and access 24/7 remote monitoring to stay updated on AQI levels. Data availability to
                      everyone.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="slider-img">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/AQI-TV-App.jpg"
                      alt="aqi android tv app data for railway stations"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-md-6">
                  <div className="slidder-txt">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/AQI-Dashboard-icon.jpg"
                      alt="aqi web dashboard"
                    />
                    <h3>AQI Web-Dashboard</h3>
                    <p>
                      Analyze monitor data effortlessly with the AQI Web Dashboard. Access real-time and historic air
                      quality data directly on our website, and explore global pollution trends with detailed analysis
                      of the worlds most polluted cities and countries.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="slider-img">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/aqi-web-dashboard-screen.jpg"
                      alt="aqi web dashboard for railways"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-md-6">
                  <div className="slidder-txt">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/mobile-AQI-APP-icon.png"
                      alt="aqi mobile app"
                    />
                    <h3>AQI Mobile App</h3>
                    <p>
                      Access air monitor data anytime with the AQI Mobile App. Enjoy real-time air quality updates
                      through our accurate global data API and advanced features. With the AQI Mobile App, you have all
                      the essential air quality information right at your fingertips.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="slider-img">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/AQI-Mobile-App.jpg"
                      alt="aqi mobile app for railways"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Our Clientele Section */}
      <section className="our-client">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Our{" "}
              <span style={{ color: "#78ae60" }}>
                <strong>Clientele</strong>
              </span>
            </h2>
            <p>
              Our partnerships with these renowned organizations reflect our commitment to excellence and innovation.
            </p>
          </div>

          <div className="row client_logo_section inner_container">
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png"
                  alt="morgan stanley logo"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png" alt="ola logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png" alt="microsoft logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png" alt="IIT banaras logo" />
              </div>
            </div>
          </div>
          <div className="row client_logo_section">
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/RENAULT-NISSAN.png" alt="renault logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/TATA.png" alt="tata logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/CSIR.png" alt="csir logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MAHINDRA.png" alt="mahindra logo" />
              </div>
            </div>
          </div>
          <div className="row client_logo_section">
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/INTERGLOBE.png" alt="interglobe logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/GMDA-1.png" alt="GMDA logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2024/08/leighton-logo.png" alt="leighton logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/HAVELLS.png" alt="havells logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Applications Section */}
      <section className="industrial-applications">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              <span className="industrial-text">Industrial</span>{" "}
              <span className="applications-text">Applications</span>
            </h2>
            <p>
              Prana Air offers a diverse selection of smart, affordable, and remarkably precise air quality solutions,
              catering to various sectors, irrespective of their scale.
            </p>
          </div>

          <div className="modern-carousel-container">
            <Carousel
              responsive={{
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
              }}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="modern-carousel"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              customLeftArrow={
                <div className="custom-arrow left-arrow">
                  <span>&#10094;</span>
                </div>
              }
              customRightArrow={
                <div className="custom-arrow right-arrow">
                  <span>&#10095;</span>
                </div>
              }
            >
              <div className="modern-item">
                <div className="modern-service-box">
                  <div className="modern-img-box">
                    <a
                      href="https://www.pranaair.com/solutions-by-application/bank-financial-institutions/"
                      aria-label="Air quality Solutions for Bank"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/air-quality-solutions-for-banks.jpg"
                        alt="air quality Solutions for banks"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.pranaair.com/solutions-by-application/bank-financial-institutions/"
                    aria-label="Air quality Solutions for Bank"
                    className="modern-title"
                  >
                    Air quality Solutions for Bank
                  </a>
                </div>
              </div>
              <div className="modern-item">
                <div className="modern-service-box">
                  <div className="modern-img-box">
                    <a
                      href="https://www.pranaair.com/solutions-by-application/parking-lot/"
                      aria-label="Air quality Solutions for Parking Lot"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/solution-for-parking-lot.jpg"
                        alt="air quality Solutions for car parking lot"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.pranaair.com/solutions-by-application/parking-lot/"
                    aria-label="Air quality Solutions for Parking Lot"
                    className="modern-title"
                  >
                    Air quality Solutions for Parking Lot
                  </a>
                </div>
              </div>
              <div className="modern-item">
                <div className="modern-service-box">
                  <div className="modern-img-box">
                    <a
                      href="https://www.pranaair.com/solutions-by-application/washroom-and-bathroom/"
                      aria-label="Air quality Solutions for Washroom"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/air-solutions-for-washroom-and-bathroom.jpg"
                        alt="air quality Solutions for washroom or bathroom"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.pranaair.com/solutions-by-application/washroom-and-bathroom/"
                    aria-label="Air quality Solutions for Washroom"
                    className="modern-title"
                  >
                    Air quality Solutions for Washroom
                  </a>
                </div>
              </div>
              <div className="modern-item">
                <div className="modern-service-box">
                  <div className="modern-img-box">
                    <a
                      href="https://www.pranaair.com/solutions-by-application/institutes/"
                      aria-label="Air quality Solutions for Institutes"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-institute.jpg"
                        alt="air quality Solutions for schools and institutes"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.pranaair.com/solutions-by-application/institutes/"
                    aria-label="Air quality Solutions for Institutes"
                    className="modern-title"
                  >
                    Air quality Solutions for Institutes
                  </a>
                </div>
              </div>
              <div className="modern-item">
                <div className="modern-service-box">
                  <div className="modern-img-box">
                    <a
                      href="https://www.pranaair.com/solutions-by-application/hotel-businesses/"
                      aria-label="Air quality Solutions for Hotel"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-hotel.jpg"
                        alt="air quality Solutions for hotel business"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.pranaair.com/solutions-by-application/hotel-businesses/"
                    aria-label="Air quality Solutions for Hotel"
                    className="modern-title"
                  >
                    Air quality Solutions for Hotel
                  </a>
                </div>
              </div>
              <div className="modern-item">
                <div className="modern-service-box">
                  <div className="modern-img-box">
                    <a
                      href="https://www.pranaair.com/solutions-by-application/restaurants/"
                      aria-label="Air quality Solutions for Restaurant"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-restaurant.jpg"
                        alt="air quality Solutions for restaurants"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.pranaair.com/solutions-by-application/restaurants/"
                    aria-label="Air quality Solutions for Restaurant"
                    className="modern-title"
                  >
                    Air quality Solutions for Restaurant
                  </a>
                </div>
              </div>
              <div className="modern-item">
                <div className="modern-service-box">
                  <div className="modern-img-box">
                    <a
                      href="https://www.pranaair.com/solutions-by-application/airports/"
                      aria-label="Air quality Solutions for Airport"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-airport.jpg"
                        alt="air quality Solutions for airport"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.pranaair.com/solutions-by-application/airports/"
                    aria-label="Air quality Solutions for Airport"
                    className="modern-title"
                  >
                    Air quality Solutions for Airport
                  </a>
                </div>
              </div>
              <div className="modern-item">
                <div className="modern-service-box">
                  <div className="modern-img-box">
                    <a
                      href="https://www.pranaair.com/solutions-by-application/fitness-center-gym/"
                      aria-label="Air quality Solutions for Fitness & Gym"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/04/air-quality-solution-for-fitness-gym.jpg"
                        alt="air quality Solutions for fitness and gym"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.pranaair.com/solutions-by-application/fitness-center-gym/"
                    aria-label="Air quality Solutions for Fitness & Gym"
                    className="modern-title"
                  >
                    Air quality Solutions for Fitness & Gym
                  </a>
                </div>
              </div>
              <div className="modern-item">
                <div className="modern-service-box">
                  <div className="modern-img-box">
                    <a
                      href="https://www.pranaair.com/solutions-by-application/cinema-and-theatre/"
                      aria-label="Air quality Solutions for Cinema/Theatre"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-cinema.jpg"
                        alt="air quality Solutions for cinema and theatre"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.pranaair.com/solutions-by-application/cinema-and-theatre/"
                    aria-label="Air quality Solutions for Cinema/Theatre"
                    className="modern-title"
                  >
                    Air quality Solutions for Cinema/Theatre
                  </a>
                </div>
              </div>
              <div className="modern-item">
                <div className="modern-service-box">
                  <div className="modern-img-box">
                    <a
                      href="https://www.pranaair.com/solutions-by-application/automobile/"
                      aria-label="Air quality Solutions for Automobiles"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-autombile.jpg"
                        alt="air quality Solutions for automobiles"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.pranaair.com/solutions-by-application/automobile/"
                    aria-label="Air quality Solutions for Automobiles"
                    className="modern-title"
                  >
                    Air quality Solutions for Automobiles
                  </a>
                </div>
              </div>
              <div className="modern-item">
                <div className="modern-service-box">
                  <div className="modern-img-box">
                    <a
                      href="https://www.pranaair.com/solutions-by-application/real-estate/"
                      aria-label="Air quality Solutions for Real Estates"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-real-estate.jpg"
                        alt="air quality Solutions for real estates"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.pranaair.com/solutions-by-application/real-estate/"
                    aria-label="Air quality Solutions for Real Estates"
                    className="modern-title"
                  >
                    Air quality Solutions for Real Estates
                  </a>
                </div>
              </div>
              <div className="modern-item">
                <div className="modern-service-box">
                  <div className="modern-img-box">
                    <a
                      href="https://www.pranaair.com/solutions-by-application/smartphone-makers/"
                      aria-label="Air quality Solutions for Smartphone Makers"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/08/solutions-for-mobile-phone-makers.png"
                        alt="air quality Solutions for smartphone makers"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.pranaair.com/solutions-by-application/smartphone-makers/"
                    aria-label="Air quality Solutions for Smartphone Makers"
                    className="modern-title"
                  >
                    Air quality Solutions for Smartphone Makers
                  </a>
                </div>
              </div>
              <div className="modern-item">
                <div className="modern-service-box">
                  <div className="modern-img-box">
                    <a
                      href="https://www.pranaair.com/solutions-by-application/constructions/"
                      aria-label="air quality Solutions for construction sites"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-construction-sites.jpg"
                        alt="air quality Solutions for construction sites"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.pranaair.com/solutions-by-application/constructions/"
                    aria-label="Air quality Solutions for Construction sites"
                    className="modern-title"
                  >
                    Air quality Solutions for Construction
                  </a>
                </div>
              </div>
              <div className="modern-item">
                <div className="modern-service-box">
                  <div className="modern-img-box">
                    <a
                      href="https://www.pranaair.com/solutions-by-application/animal-care-center/"
                      aria-label="air quality Solutions for animale-care"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-animale-care-page.jpg"
                        alt="air quality Solutions for animale-care"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.pranaair.com/solutions-by-application/animal-care-center/"
                    aria-label="Air quality Solutions for Animal care"
                    className="modern-title"
                  >
                    Air quality Solutions for Animal care
                  </a>
                </div>
              </div>
              <div className="modern-item">
                <div className="modern-service-box">
                  <div className="modern-img-box">
                    <a
                      href="https://www.pranaair.com/solutions-by-application/logistics/"
                      aria-label="air quality Solutions for logistics"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-logistics-page.jpg"
                        alt="air quality Solutions for logistics"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.pranaair.com/solutions-by-application/logistics/"
                    aria-label="Air quality Solutions for logistics"
                    className="modern-title"
                  >
                    Air quality Solutions for logistics
                  </a>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="modern-contact-section" id="get_in_touch">
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
        <ContactForm pageName="Cair Monitor Page" />
      </section>

      {/* FAQ Section */}
      <section className="faq_ask_section">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Frequently Asked{" "}
              <span className="bold_text" style={{ color: "#78ae60" }}>
                Questions
              </span>
            </h2>
            <p>
              About Air Quality Solution for Railways
              <br />
              Have questions? Were here to help.
            </p>
          </div>

          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default faq-tab-heading">
              <div
                className="panel-heading"
                role="tab"
                id="headingOne"
                onClick={() => toggleFaq("collapseOne")}
                style={{ cursor: "pointer" }}
              >
                <h4 className="panel-title">
                  <a role="button" aria-expanded={activeFaq === "collapseOne"} aria-controls="collapseOne">
                    1. Why air quality is a concern at railway stations?
                  </a>
                </h4>
              </div>
              <div
                id="collapseOne"
                className={`panel-collapse collapse ${activeFaq === "collapseOne" ? "in" : ""}`}
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="panel-body faq-para">
                  Trains operate with diesel engines and other activities emit various pollutants like PM2.5, NOx,
                  carbon monoxide (CO), and volatile organic compounds (VOCs).
                </div>
              </div>
            </div>

            <div className="panel panel-default faq-tab-heading">
              <div
                className="panel-heading"
                role="tab"
                id="headingTwo"
                onClick={() => toggleFaq("collapseTwo")}
                style={{ cursor: "pointer" }}
              >
                <h4 className="panel-title">
                  <a
                    className={activeFaq !== "collapseTwo" ? "collapsed" : ""}
                    role="button"
                    aria-expanded={activeFaq === "collapseTwo"}
                    aria-controls="collapseTwo"
                  >
                    2. What are the health impacts of poor air quality at railway stations?
                  </a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                className={`panel-collapse collapse ${activeFaq === "collapseTwo" ? "in" : ""}`}
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="panel-body faq-para">
                  Exposure to poor air quality can cause or worsen respiratory problems including asthma, bronchitis,
                  cardiovascular issues etc.
                </div>
              </div>
            </div>

            <div className="panel panel-default faq-tab-heading">
              <div
                className="panel-heading"
                role="tab"
                id="headingThree"
                onClick={() => toggleFaq("collapseThree")}
                style={{ cursor: "pointer" }}
              >
                <h4 className="panel-title">
                  <a
                    className={activeFaq !== "collapseThree" ? "collapsed" : ""}
                    role="button"
                    aria-expanded={activeFaq === "collapseThree"}
                    aria-controls="collapseThree"
                  >
                    3. Can air quality issues be managed without advanced solutions at railway stations?
                  </a>
                </h4>
              </div>
              <div
                id="collapseThree"
                className={`panel-collapse collapse ${activeFaq === "collapseThree" ? "in" : ""}`}
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div className="panel-body faq-para">
                  Managing air quality without advanced solutions is challenging. Air quality monitors and purifiers
                  have a proactive approach to maintaining healthy air quality.
                </div>
              </div>
            </div>

            <div className="panel panel-default faq-tab-heading">
              <div
                className="panel-heading"
                role="tab"
                id="headingFour"
                onClick={() => toggleFaq("collapseFour")}
                style={{ cursor: "pointer" }}
              >
                <h4 className="panel-title">
                  <a
                    className={activeFaq !== "collapseFour" ? "collapsed" : ""}
                    role="button"
                    aria-expanded={activeFaq === "collapseFour"}
                    aria-controls="collapseFour"
                  >
                    4. How does Prana Air Ambient Air Monitor improve air quality?
                  </a>
                </h4>
              </div>
              <div
                id="collapseFour"
                className={`panel-collapse collapse ${activeFaq === "collapseFour" ? "in" : ""}`}
                role="tabpanel"
                aria-labelledby="headingFour"
              >
                <div className="panel-body faq-para">
                  The Prana Air Ambient Air Monitor provides real-time data on pollutant levels, enabling timely
                  responses and informed decision-making for air quality management.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Scripts removed - using internal libraries */}
    </main>
  )
}

