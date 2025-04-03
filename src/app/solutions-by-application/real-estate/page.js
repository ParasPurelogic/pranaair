"use client"

import { useEffect, useState } from "react"
import "./style.css"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"

export default function RealEstate() {
  const [activeTab, setActiveTab] = useState("air-quality-monitors")
  const [activeAccordion, setActiveAccordion] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    // Initialize accordion functionality
    const initAccordion = () => {
      const accordionItems = document.querySelectorAll(".faq-item-header")
      accordionItems.forEach((item, index) => {
        item.addEventListener("click", () => {
          setActiveAccordion(activeAccordion === index ? null : index)
        })
      })
    }

    // Run initializations
    setTimeout(() => {
      initAccordion()
    }, 500)

    return () => {
      // Cleanup if needed
    }
  }, [activeAccordion])

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null)
    } else {
      setActiveAccordion(index)
    }
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
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

  return (
    <div className="real-estate-page">
      {/* Banner Section - Updated to match reference design */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>
            Air quality solutions for
            <br />
            <span className="highlight-text">Real Estates</span>
          </h1>
          <p>A complete solution for air quality monitoring, air purification, and other solutions for real-estates.</p>
          <div className="category-tabs">
            <span className="category-tab active">Residential</span>
            <span className="category-tab">Commercial</span>
          </div>
          <a className="cta-button" href="#get_in_touch">
            Get a Quote
          </a>
        </div>
        <div className="hero-image">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/12/air-quality-solutions-for-real-estates.jpg"
            alt="Real estate cityscape with modern buildings"
          />
        </div>
      </div>

      {/* Major Air Pollutants Section - Updated to match reference */}
      <div className="section-container">
        <div className="section-header">
          <h2>
            Major Air <span className="highlight-text">Pollutants</span>
          </h2>
          <p>
            We spend more than 90% of our lives indoors and the air pollutants present indoors are 10x times more
            harmful than the ambient environment. Therefore, indoor air quality affects most occupants' health. Various
            air pollutants in real estate such as residential areas and malls can exist.
          </p>
        </div>

        <div className="pollutants-grid">
          <div className="pollutant-item">
            <div className="pollutant-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-parameter.png"
                alt="pm2.5 level"
                width="76"
                height="60"
              />
            </div>
            <h3>PM2.5</h3>
            <p>
              Indoor PM or dust can be generated due to smoking, and combustion activities, and brought in by
              ventilation.
            </p>
          </div>

          <div className="pollutant-item">
            <div className="pollutant-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-gas-icon.png"
                alt="high co2 level"
                width="85"
                height="83"
              />
            </div>
            <h3>CO2</h3>
            <p>Ventilation and occupancy rates highly influence the CO2 levels in a room or enclosed area.</p>
          </div>

          <div className="pollutant-item">
            <div className="pollutant-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-parameter-icon.png"
                alt="tvoc gas"
                width="73"
                height="79"
              />
            </div>
            <h3>TVOC</h3>
            <p>Air fresheners, cleaning agents, paints, carpets, and furniture are some potential sources of TVOC.</p>
          </div>

          <div className="pollutant-item">
            <div className="pollutant-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/08/co-icon.png"
                alt="co gas"
                width="66"
                height="69"
              />
            </div>
            <h3>CO</h3>
            <p>Various utilities such as fireplaces and coal burning emit gases such as carbon monoxide.</p>
          </div>

          <div className="pollutant-item">
            <div className="pollutant-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/odor-icon.png"
                alt="Odor"
                width="66"
                height="69"
              />
            </div>
            <h3>Odor</h3>
            <p>
              Odor is one of the factors that affect the comfort level of occupants. Restrooms are a major source of the
              odor.
            </p>
          </div>

          <div className="pollutant-item">
            <div className="pollutant-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/smoke.png"
                alt="smoke icon"
                width="66"
                height="69"
              />
            </div>
            <h3>Smoke</h3>
            <p>Cooking, fireplaces, burning of fuels, smoking, etc. release various air pollutants including smoke.</p>
          </div>

          <div className="pollutant-item">
            <div className="pollutant-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/temp-humidity.png"
                alt="temperature and humidity"
                width="86"
                height="89"
              />
            </div>
            <h3>Temp. & Humidity</h3>
            <p>These two air factors play an important role in the comfort level of the occupants.</p>
          </div>

          <div className="pollutant-item">
            <div className="pollutant-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/08/noise-icon.png"
                alt="noise pollution"
                width="86"
                height="89"
              />
            </div>
            <h3>Noise</h3>
            <p>
              Hustle and bustle in hotels are quite normal. This sometimes creates a nuisance and disturbance for
              guests.
            </p>
          </div>
        </div>
      </div>

      {/* Pollutants Effects Section - Updated to match reference design */}
      <div
        className="pollutants-overlay-section"
        style={{
          backgroundImage:
            "url(https://www.pranaair.com/wp-content/uploads/2022/12/air-quality-problems-for-real-estates.jpg)",
        }}
      >
        <div className="overlay-content">
          <div className="pollutant-marker" style={{ top: "15%", left: "25%" }}>
            <div className="marker-circle">
              <img src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-icon-2.png" alt="pm2.5 icon" />
            </div>
            <div className="marker-box">
              <h3>PM2.5</h3>
              <p>They have the ability to enter the bloodstream & can cause various diseases.</p>
            </div>
          </div>

          <div className="pollutant-marker" style={{ top: "15%", right: "15%" }}>
            <div className="marker-circle">
              <img src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-icon.png" alt="co2 icon" />
            </div>
            <div className="marker-box">
              <h3>CO2</h3>
              <p>Excess CO2 can cause perspiration, fatigue, suffocation, convulsions.</p>
            </div>
          </div>

          <div className="pollutant-marker" style={{ top: "40%", left: "10%" }}>
            <div className="marker-circle">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/08/noise-icon-for-restaurant.png"
                alt="noise icon"
              />
            </div>
            <div className="marker-box">
              <h3>Noise</h3>
              <p>Excessive noise can result in headaches & high blood pressure.</p>
            </div>
          </div>

          <div className="pollutant-marker" style={{ top: "35%", right: "10%" }}>
            <div className="marker-circle">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/temp-and-humidity-icon.png"
                alt="temperature and humidity"
              />
            </div>
            <div className="marker-box">
              <h3>Temp-Humidity</h3>
              <p>Presence of more people increases more temp-humidity level.</p>
            </div>
          </div>

          <div className="pollutant-marker" style={{ bottom: "30%", left: "15%" }}>
            <div className="marker-circle">
              <img src="https://www.pranaair.com/wp-content/uploads/2022/12/odor.png" alt="odor problem" />
            </div>
            <div className="marker-box">
              <h3>Odor</h3>
              <p>When sweat and bacteria are exposed to gym fabric, produces a bad odor.</p>
            </div>
          </div>

          <div className="pollutant-marker" style={{ bottom: "25%", right: "15%" }}>
            <div className="marker-circle">
              <img src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-icon.png" alt="tvoc icon" />
            </div>
            <div className="marker-box">
              <h3>TVOC</h3>
              <p>Headaches, and irritation in the eyes, nose, and throat.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Who are at Risk Section - Residential Areas */}
      <div className="section-container">
        <div className="section-header">
          <h2>
            Who are at <span className="highlight-text">Risk?</span>
          </h2>
          <p>
            People experience stuffiness in the air as the breathing rate goes up while exercising. That means people
            inhale more oxygen and release more O2 than the normal rate.
          </p>
        </div>

        <h3 className="subsection-title">Residential Areas</h3>

        <div className="risk-grid">
          <div className="risk-item">
            <div className="risk-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/children.png"
                alt="children"
                width="75"
                height="163"
              />
            </div>
            <h3>Children</h3>
            <p>
              Air pollution severely hampers and impacts cognitive abilities and growth, tissue building, organ
              functioning, etc. among children.
            </p>
          </div>

          <div className="risk-item">
            <div className="risk-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/pregnant-women.png"
                alt="pregnant women"
                width="83"
                height="159"
              />
            </div>
            <h3>Pregnant Ladies</h3>
            <p>
              When they are exposed to poor air quality, both mother's and child's health are affected. Poor air can
              affect prenatal development.
            </p>
          </div>

          <div className="risk-item">
            <div className="risk-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/old-people.png"
                alt="old people"
                width="35"
                height="146"
              />
            </div>
            <h3>Old People</h3>
            <p>
              Bad air quality promotes respiratory illnesses and disorders among old age people. Their old age makes
              them more vulnerable to illness.
            </p>
          </div>

          <div className="risk-item">
            <div className="risk-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/people-with-health-issues.png"
                alt="person with health issues"
                width="73"
                height="149"
              />
            </div>
            <h3>People with underlying health issues</h3>
            <p>
              People with underlying disorders are highly susceptible to air pollution since their immune system is
              already weak.
            </p>
          </div>
        </div>

        <h3 className="subsection-title">Commercial Buildings</h3>

        <div className="risk-grid">
          <div className="risk-item">
            <div className="risk-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/returning-customer.png"
                alt="returning customers"
                width="65"
                height="176"
              />
            </div>
            <h3>Returning Customers</h3>
            <p>
              Good air quality encourages good business by creating a healthy and comfortable environment, especially
              for returning consumers.
            </p>
          </div>

          <div className="risk-item">
            <div className="risk-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/staff-member.png"
                alt="Staff Members"
                width="83"
                height="159"
              />
            </div>
            <h3>Staff Members</h3>
            <p>
              When staff members are exposed to poor air quality, they experience reduced attentiveness and bad health
              that influences their attendance.
            </p>
          </div>

          <div className="risk-item">
            <div className="risk-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/sensitive-person.png"
                alt="sensitive group"
                width="65"
                height="176"
              />
            </div>
            <h3>Sensitive Group</h3>
            <p>
              Children, old age people, pregnant ladies, and people with underlying health issues like cardiovascular
              disorders come under the sensitive group.
            </p>
          </div>

          <div className="risk-item">
            <div className="risk-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/healthy-individual.png"
                alt="healthy individual"
                width="83"
                height="159"
              />
            </div>
            <h3>Healthy Individual</h3>
            <p>
              Even in healthy people, different air pollution parameters have varied effects on the body. Headaches &
              nausea are some of the symptoms.
            </p>
          </div>
        </div>
      </div>

      {/* Air Quality Solutions Section */}
      <div className="section-container">
        <div className="section-header">
          <h2>
            Air quality <span className="highlight-text">Solutions</span>
          </h2>
          <p>
            Prana Air's air quality monitoring and air purifying solutions give you the power to know what your
            residents and visitors breathe and what you could do to clean the air to make real estate properties
            pollution-free zones and view and analyze your IAQ.
          </p>
        </div>

        <div className="solutions-tabs">
          <div className="tabs-header">
            <button
              className={activeTab === "air-quality-monitors" ? "tab-button active" : "tab-button"}
              onClick={() => setActiveTab("air-quality-monitors")}
            >
              Air Quality Monitors
            </button>
            <button
              className={activeTab === "fresh-air-machine" ? "tab-button active" : "tab-button"}
              onClick={() => setActiveTab("fresh-air-machine")}
            >
              Fresh Air Machine
            </button>
            <button
              className={activeTab === "api-data" ? "tab-button active" : "tab-button"}
              onClick={() => setActiveTab("api-data")}
            >
              API Data
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === "air-quality-monitors" && (
              <div className="tab-content-item">
                <div className="product-slider">
                  {/* Slider for Air Quality Monitors */}
                  <div className="slider-container">
                    <div className="slider-wrapper">
                      <div className={`product-slide ${activeSlide === 0 ? "active" : ""}`}>
                        <div className="product-info">
                          <h3>Sensible+ Air Monitor</h3>
                          <p>
                            This is a smart air quality monitor that comes with 7 inch touch screen display that gives
                            more insightful data for real estate properties.
                          </p>
                          <ul className="feature-list">
                            <li>7 Inch LED Touch Screen Display</li>
                            <li>5000 mAh Battery InBuilt</li>
                            <li>WiFi Connectivity With Mobile App</li>
                          </ul>
                          <div className="product-actions">
                            <a
                              href="https://www.pranaair.com/air-quality-monitor/sensible-plus-air-monitor/"
                              className="primary-button"
                            >
                              Know More
                            </a>
                          </div>
                        </div>
                        <div className="product-image">
                          <img
                            style={{ width: "100%" }}
                            src="https://www.pranaair.com/wp-content/uploads/2022/12/prana-air-sensible-plus-air-monitor-for-real-estates.png"
                            alt="prana air sensible+ air quality monitor for real estates"
                          />
                        </div>
                      </div>

                      <div className={`product-slide ${activeSlide === 1 ? "active" : ""}`}>
                        <div className="product-info">
                          <h3>SQUAIR Air Monitor</h3>
                          <p>
                            SQUAIR monitor is a smart indoor air quality monitoring device that can detect particulate
                            matters, temperature, humidity, and gas parameters in real estate properties.
                          </p>
                          <ul className="feature-list">
                            <li>Detects PM2.5, CO, CO2, TVOC, noise, temp., & humidity</li>
                            <li>Mobile & Smart TV App Enabled</li>
                            <li>Reliable Web Dashboard Accessibility</li>
                          </ul>
                          <div className="product-actions">
                            <a
                              href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/"
                              className="primary-button"
                            >
                              Know More
                            </a>
                            <a
                              href="https://www.pranaair.com/air-quality-monitor/rental-air-monitor/"
                              className="secondary-link"
                            >
                              Looking to Rent?
                            </a>
                          </div>
                        </div>
                        <div className="product-image">
                          <img
                            style={{ width: "100%" }}
                            src="https://www.pranaair.com/wp-content/uploads/2022/12/prana-air-squair-air-monitor-for-real-estates.png"
                            alt="prana air squair air quality monitor for real estates"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Slider navigation */}
                    <button
                      className="slider-nav prev"
                      onClick={() => {
                        setActiveSlide(activeSlide === 0 ? 1 : 0)
                      }}
                    >
                      ❮
                    </button>
                    <button
                      className="slider-nav next"
                      onClick={() => {
                        setActiveSlide(activeSlide === 1 ? 0 : 1)
                      }}
                    >
                      ❯
                    </button>

                    {/* Slider dots */}
                    <div className="slider-dots">
                      <span
                        className={`slider-dot ${activeSlide === 0 ? "active" : ""}`}
                        onClick={() => setActiveSlide(0)}
                      ></span>
                      <span
                        className={`slider-dot ${activeSlide === 1 ? "active" : ""}`}
                        onClick={() => setActiveSlide(1)}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "fresh-air-machine" && (
              <div className="tab-content-item">
                <div className="product-slider">
                  <div className="product-slide active">
                    <div className="product-info">
                      <h3>Fresh Air Machine</h3>
                      <p>
                        One-stop solution for indoor air pollution by Prana Air Fresh Air Machine working as an air
                        purifier with the capability to filter out 99.5% efficiency and multi-layer HEPA filters.
                      </p>
                      <ul className="feature-list">
                        <li>Comes with multi-layers HEPA Filters</li>
                        <li>Compact Design makes it easy to place</li>
                        <li>Promising you up to 99.5% efficiency</li>
                      </ul>
                      <div className="product-actions">
                        <a href="https://www.pranaair.com/fresh-air-machine/" className="primary-button">
                          Know More
                        </a>
                      </div>
                    </div>
                    <div className="product-image">
                      <img
                        style={{ width: "100%" }}
                        src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-fresh-air-machine-for-iaq-solution.jpg"
                        alt="prana air fresh air machine as iaq solution for real estates"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "api-data" && (
              <div className="tab-content-item">
                <div className="product-slider">
                  <div className="product-slide active">
                    <div className="product-info">
                      <h3>AQI API Data</h3>
                      <p>Avail the real-time air quality data of nearby outdoor area on the web.</p>
                      <ul className="feature-list">
                        <li>Integrate air quality data on the web</li>
                        <li>Access the real-time data quickly</li>
                        <li>Take precautions from the air pollution</li>
                      </ul>
                      <div className="product-actions">
                        <a href="#get_in_touch" className="primary-button">
                          Know More
                        </a>
                      </div>
                    </div>
                    <div className="product-image">
                      <img
                        style={{ width: "100%" }}
                        src="https://www.pranaair.com/wp-content/uploads/2022/08/aqi-api-data-for-institutes.jpg"
                        alt="aqi api data for real estates"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Data Freemium Services Section - Updated to match reference */}
      <div className="section-container">
        <div className="section-header">
          <h2>
            Data Freemium <span className="highlight-text">Services</span>
          </h2>
          <p>
            The data can be displayed or analyzed on the LCD screens or the app via our customized dashboard. Scan the
            QR to know the AQI of the area you are in.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-item">
            <div className="service-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/tv-app-dashboard-for-real-estates.png"
                alt="aqi tv app dashboard for real estates"
              />
            </div>
            <h3>TV Dashboard App</h3>
          </div>

          <div className="service-item">
            <div className="service-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/customized-app-dashboard-for-real-estates.png"
                alt="aqi customized dashboard app for real estates"
              />
            </div>
            <h3>Customized App for Real Estates</h3>
          </div>

          <div className="service-item">
            <div className="service-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/aqi-qr-code-scan.png"
                alt="aqi monitor data qr code scan for real estates"
              />
            </div>
            <h3>QR Code Scan</h3>
          </div>
        </div>
      </div>

      {/* Effects of Air Pollution Section - Updated to match reference */}
      <div className="section-container">
        <div className="section-header">
          <h2>
            The Effects of Air Pollution - <span className="highlight-text">Real Estates</span>
          </h2>
          <p>
            When residents, customers, and staff are exposed to bad air quality, it affects their health, and therefore
            their overall experience. This majorly affects the real estate business.
          </p>
        </div>

        <div className="comparison-container">
          <div className="comparison-column clean">
            <h3>With Clean Air</h3>
            <ul className="comparison-list">
              <li>Improve ventilation</li>
              <li>Good comfort score</li>
              <li>Enhanced experience</li>
              <li>Profits will increase</li>
            </ul>
          </div>

          <div className="comparison-divider"></div>

          <div className="comparison-column unclean">
            <h3>Without Clean Air</h3>
            <ul className="comparison-list">
              <li>Less comfort</li>
              <li>Low ventilation score</li>
              <li>Bad experience</li>
              <li>Profits will decrease</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section - Updated to match reference */}
      <div className="section-container">
        <div className="section-header">
          <h2>
            Frequently Asked <span className="highlight-text">Questions</span>
          </h2>
          <p>
            About Air Quality Solution for Real Estates
            <br />
            Have questions? We're here to help.
          </p>
        </div>

        <div className="faq-container">
          <div className={`faq-item ${activeAccordion === 0 ? "active" : ""}`}>
            <div className="faq-item-header" onClick={() => toggleAccordion(0)}>
              <h4>1. What are the health impacts of the pollutants present inside a mall?</h4>
              <span className="faq-icon">{activeAccordion === 0 ? "-" : "+"}</span>
            </div>
            <div className="faq-item-body" style={{ display: activeAccordion === 0 ? "block" : "none" }}>
              <p>
                Your health could be harmed by increased CO2 exposure. Health effects like nausea, vertigo, exhaustion,
                difficulty breathing, and perspiration can be evident in public spaces. Transmission of chronic
                illnesses like the flu and the common cold is fairly common.
              </p>
            </div>
          </div>

          <div className={`faq-item ${activeAccordion === 1 ? "active" : ""}`}>
            <div className="faq-item-header" onClick={() => toggleAccordion(1)}>
              <h4>2. What are the major pollutants that are present in residential buildings?</h4>
              <span className="faq-icon">{activeAccordion === 1 ? "-" : "+"}</span>
            </div>
            <div className="faq-item-body" style={{ display: activeAccordion === 1 ? "block" : "none" }}>
              <p>
                Many pollutants can be present inside residential buildings. PM2.5, CO2, TVOC, CO, odor, smoke,
                temperature, humidity, and noise are the main pollutants that affect indoor air quality.
              </p>
            </div>
          </div>

          <div className={`faq-item ${activeAccordion === 2 ? "active" : ""}`}>
            <div className="faq-item-header" onClick={() => toggleAccordion(2)}>
              <h4>3. Why is it necessary to have air quality monitoring solutions?</h4>
              <span className="faq-icon">{activeAccordion === 2 ? "-" : "+"}</span>
            </div>
            <div className="faq-item-body" style={{ display: activeAccordion === 2 ? "block" : "none" }}>
              <p>
                To know the nature of pollutants and how much they are present in a space so that necessary actions can
                be taken to improve air quality and protect occupants' health.
              </p>
            </div>
          </div>

          <div className={`faq-item ${activeAccordion === 3 ? "active" : ""}`}>
            <div className="faq-item-header" onClick={() => toggleAccordion(3)}>
              <h4>
                4. How can I check the AQI of a room and a specific lobby in a residential building using your device?
              </h4>
              <span className="faq-icon">{activeAccordion === 3 ? "-" : "+"}</span>
            </div>
            <div className="faq-item-body" style={{ display: activeAccordion === 3 ? "block" : "none" }}>
              <p>
                Prana Air Monitors are WiFi enabled so you don't need to set up a wire framework to extract and display
                the data. Simply connect the monitor to the dashboard through WiFi connectivity and view the real-time
                data on your screens or mobile app.
              </p>
            </div>
          </div>

          <div className={`faq-item ${activeAccordion === 4 ? "active" : ""}`}>
            <div className="faq-item-header" onClick={() => toggleAccordion(4)}>
              <h4>5. Are any other parameters included in the monitors other than the air pollutants?</h4>
              <span className="faq-icon">{activeAccordion === 4 ? "-" : "+"}</span>
            </div>
            <div className="faq-item-body" style={{ display: activeAccordion === 4 ? "block" : "none" }}>
              <p>
                Yes, our monitors include additional parameters like temperature, humidity, and noise levels which are
                important for overall comfort and well-being in indoor environments.
              </p>
            </div>
          </div>

          <div className={`faq-item ${activeAccordion === 5 ? "active" : ""}`}>
            <div className="faq-item-header" onClick={() => toggleAccordion(5)}>
              <h4>6. Are there any additional benefits that come with the solutions?</h4>
              <span className="faq-icon">{activeAccordion === 5 ? "-" : "+"}</span>
            </div>
            <div className="faq-item-body" style={{ display: activeAccordion === 5 ? "block" : "none" }}>
              <p>
                Yes, our solutions come with customized dashboards, mobile apps, and data analytics that help property
                managers make informed decisions about ventilation, HVAC systems, and other air quality improvement
                measures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section" id="get_in_touch">
        <div className="section-header">
          <h2>
            Get in <span className="highlight-text">Touch</span>
          </h2>
          <p>Please help us know what requirements you have. Our team will contact you very soon.</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>Looking for the air quality solutions for real estate properties?</p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>Phone Number: (+91) 73918-73918</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>Email Address: info@purelogic.in</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Office Location: 706, 7th Floor, Sec 10, Rohini, Delhi 85, India</span>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form className="modern-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name (required)</label>
                  <input type="text" name="your-name" required />
                </div>
                <div className="form-group">
                  <label>Your Email (required)</label>
                  <input type="email" name="your-email" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number (required)</label>
                  <input type="tel" name="your-phone" required />
                </div>
                <div className="form-group">
                  <label>Your Organisation</label>
                  <input type="text" name="your-organisation" />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Message</label>
                <textarea name="your-message" placeholder="Write message here"></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Industrial Applications Section */}
      <div className="section-container">
        <div className="section-header">
          <h2>
            Industrial <span className="highlight-text">Applications</span>
          </h2>
          <p>
            Regardless of how small or large a business is, Prana Air offers a wide choice of Smart, affordable, and
            highly accurate air quality solutions for various industries.
          </p>
        </div>

        <div className="applications-slider">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="application-item">
              <div className="application-image">
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

            <div className="application-item">
              <div className="application-image">
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

            <div className="application-item">
              <div className="application-image">
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

            <div className="application-item">
              <div className="application-image">
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

            <div className="application-item">
              <div className="application-image">
                <a href="https://www.pranaair.com/solutions-by-application/institutes/">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/solution-for-institutions.jpg"
                    alt="air quality solutions for schools and institutes"
                  />
                </a>
              </div>
              <a href="https://www.pranaair.com/solutions-by-application/institutes/">
                <h4>Solutions for Institutes</h4>
              </a>
            </div>

            <div className="application-item">
              <div className="application-image">
                <a href="https://www.pranaair.com/solutions-by-application/office/">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-cinema.jpg"
                    alt="air quality solutions for cinema and theatre"
                  />
                </a>
              </div>
              <a href="https://www.pranaair.com/solutions-by-application/office/">
                <h4>Solutions for Office</h4>
              </a>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

