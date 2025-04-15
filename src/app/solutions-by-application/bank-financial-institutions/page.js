"use client"

import { useEffect, useState } from "react"
import "./style.css"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"
import ContactForm from "@/Components/Contacform/ContactForm";


export default function BankFinancialInstitutions() {
  const [activeTab, setActiveTab] = useState("air-quality-monitors")
  const [activeAccordion, setActiveAccordion] = useState(null)

  useEffect(() => {
    // Initialize accordion functionality
    const initAccordion = () => {
      const accordionItems = document.querySelectorAll(".vc_tta-panel-heading")
      accordionItems.forEach((item, index) => {
        item.addEventListener("click", () => {
          setActiveAccordion(activeAccordion === index ? null : index)
        })
      })
    }

    // Initialize school box interactions
    const initSchoolBoxes = () => {
      const schoolBoxes = [
        "second_school_box",
        "third_school_box",
        "fourth_school_box",
        "fivth_school_box",
        "six_school_box",
      ]

      schoolBoxes.forEach((boxClass) => {
        const box = document.querySelector(`.${boxClass}`)
        if (box) {
          box.addEventListener("click", () => {
            // Hide all text boxes first
            schoolBoxes.forEach((cls) => {
              const textBox = document.querySelector(`li.${cls} .schhol_text_box`)
              if (textBox && cls !== boxClass) {
                textBox.style.display = "none"
              }
            })

            // Toggle the clicked one
            const textBox = document.querySelector(`li.${boxClass} .schhol_text_box`)
            if (textBox) {
              textBox.style.display = textBox.style.display === "block" ? "none" : "block"
            }
          })
        }
      })
    }

    // Run initializations
    setTimeout(() => {
      initAccordion()
      initSchoolBoxes()
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
    <div className="bank-financial-page">
      {/* Banner Section */}
      <div
        className="vc_row full_width stretch_row_content school_banner_box"
        style={{
          backgroundImage:
            "url(https://www.pranaair.com/wp-content/uploads/2023/01/air-quality-solutions-for-banking-services.jpg)",
        }}
      >
        <div className="vc_column banner_quality_box" style={{ width: "50%" }}>
          <div className="pocket_title_box school_aqi_box">
            <h1>
              Air quality solutions for <span className="bold_text">Bank / Financial Institutions</span>
            </h1>
            <span style={{ fontSize: "14pt" }}>
              A complete solution for air monitoring, air purification, and data monitoring for banks and other
              financial institutions.
            </span>

            <a className="pocket_buy_btn" href="#get_in_touch">
              Get a Quote
            </a>
          </div>
        </div>
        <div className="vc_column banner_quality_img_box" style={{ width: "50%" }}></div>
      </div>

      {/* Major Air Pollutants Section */}
      <div className="vc_row full_width stretch_row">
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Major Air <span className="bold_text">Pollutants</span>
            </h2>
            <p>
              Due to the diverse nature of air pollutants present in a bank setting, precaution and mitigation
              strategies have become a challenge. To prevent bad air quality, it is critical to monitor air quality and
              take appropriate precautions to avoid poor air quality episodes.
            </p>
          </div>
        </div>
      </div>

      {/* Pollutants Grid - Modern Layout */}
      <div className="modern-pollutants-grid inner_container mobile-optimized">
        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-parameter.png"
            alt="pm2.5 level"
            className="pollutant-icon"
          />
          <h3>PM2.5</h3>
          <p>These are fine particles of dust and water that are suspended in the air.</p>
        </div>

        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-gas-icon.png"
            alt="high co2 level"
            className="pollutant-icon"
          />
          <h3>CO2</h3>
          <p>Depends on the number of people in the room and its ventilation rate.</p>
        </div>

        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-parameter-icon.png"
            alt="tvoc gas"
            className="pollutant-icon"
          />
          <h3>TVOC</h3>
          <p>Cleaning agents, markers, tobacco smoke, etc. emit TVOC</p>
        </div>

        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/08/noise-icon.png"
            alt="noise pollution"
            className="pollutant-icon"
          />
          <h3>Noise</h3>
          <p>Noise levels rises when large number of customers are present.</p>
        </div>

        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/12/odor-icon.png"
            alt="Odor"
            className="pollutant-icon"
          />
          <h3>Odor</h3>
          <p>Sweaty customers & public washrooms release bad odor</p>
        </div>

        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/12/microbe-icon.png"
            alt="Microbial Pollutants"
            className="pollutant-icon"
          />
          <h3>Microbial Pollutants</h3>
          <p>Microbiological contaminants spread easily in closed spaces.</p>
        </div>
      </div>

      <div
        className="vc_row full_width stretch_row full_height school_img_box"
        style={{
          backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2023/01/air-pollutants-in-bank.jpg)",
        }}
      >
        <div className="vc_column">
          <div className="school_box_cntr">
            <ul>
              <li className="first_school_box">
                <span className="school_icon_box">
                  <img src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-icon-2.png" alt="pm2.5 icon" />
                </span>
                <div className="schhol_text_box">
                  <h3>PM2.5</h3>
                  <p>These dust particles enter deep into the lungs and can cause lung cancer.</p>
                </div>
              </li>
              <li className="second_school_box">
                <span className="school_icon_box">
                  <img src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-icon.png" alt="co2 icon" />
                </span>
                <div className="schhol_text_box">
                  <h3>CO2</h3>
                  <p>Excess CO2 can cause nausea, lack of attentiveness, suffocation, etc.</p>
                </div>
              </li>
              <li className="third_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/noise-icon-for-restaurant.png"
                    alt="noise icon"
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>Noise</h3>
                  <p>High noise can cause headaches, stress, and hypertension.</p>
                </div>
              </li>
              <li className="fourth_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/12/bacteria-icon.png"
                    alt="temperature and humidity"
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>Microbial Pollutants</h3>
                  <p>Cough, cold, flu, etc. are caused when exposed to microbial pollutants.</p>
                </div>
              </li>
              <li className="fivth_school_box">
                <span className="school_icon_box">
                  <img src="https://www.pranaair.com/wp-content/uploads/2022/12/odor.png" alt="odor problem" />
                </span>
                <div className="schhol_text_box">
                  <h3>Odor</h3>
                  <p>Customers and bank employees comfort levels are impacted by bad odor.</p>
                </div>
              </li>
              <li className="six_school_box">
                <span className="school_icon_box">
                  <img src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-icon.png" alt="tvoc icon" />
                </span>
                <div className="schhol_text_box">
                  <h3>TVOC</h3>
                  <p>Irritation in the eyes, nose & throat, etc. are caused by high TVOC.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Who are at Risk Section */}
      <div className="vc_row full_width stretch_row" style={{ paddingTop: "45px" }}>
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Who are at <span className="bold_text">Risk?</span>
            </h2>
            <p>
              People in the bank/financial institutions experience stuffiness in the air as the occupancy rate increases
              and there is poor ventilation. Customers and staff are exposed to other air pollutants like PM2.5, TVOC,
              etc.
            </p>
          </div>
        </div>
      </div>

      {/* Risk Factors Grid - Modern Layout */}
      <div className="modern-risk-grid inner_container mobile-optimized">
        <div className="risk-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/01/bank-customers.png"
            alt="bank customers"
            className="risk-icon"
          />
          <h3>Customers</h3>
          <p>Customers comfort level highly depend on the air quality inside your bank.</p>
        </div>

        <div className="risk-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/01/bankers.png"
            alt="bankers"
            className="risk-icon"
          />
          <h3>Banker</h3>
          <p>High risk of developing lung cancer, etc. are some of the health effects</p>
        </div>

        <div className="risk-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/01/Cashiers.png"
            alt="cashiers"
            className="risk-icon"
          />
          <h3>Cashiers</h3>
          <p>Lack of attention & coordination, a high risk of respiratory infections.</p>
        </div>

        <div className="risk-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/01/bank-manager.png"
            alt="bank manager"
            className="risk-icon"
          />
          <h3>Manager</h3>
          <p>Poor judgment, inaptness, more prone to make bad decisions</p>
        </div>
      </div>

      {/* Air Quality Solutions Section */}
      <div className="vc_row full_width stretch_row quality_solution_section top_space_heading">
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Air quality <span className="bold_text">Solutions</span>
            </h2>
            <p>
              Prana Airs air quality monitoring and air purifying solutions give you the power to know what your
              customers and staff breathe and what you could do to clean the air to make banks/financial institutions
              air pollution-free zone and view and analyze your IAQ.
            </p>
          </div>
        </div>
      </div>

      {/* Modern Tabs Section */}
      <div className="modern-tabs-container mobile-friendly">
        <div className="modern-tabs">
          <button
            className={activeTab === "air-quality-monitors" ? "active" : ""}
            onClick={() => setActiveTab("air-quality-monitors")}
          >
            Air Quality Monitors
          </button>
          <button
            className={activeTab === "fresh-air-machine" ? "active" : ""}
            onClick={() => setActiveTab("fresh-air-machine")}
          >
            Fresh Air Machine
          </button>
          <button className={activeTab === "api-data" ? "active" : ""} onClick={() => setActiveTab("api-data")}>
            API Data
          </button>
        </div>

        <div className="modern-tab-content">
          {activeTab === "air-quality-monitors" && (
            <div className="modern-product-display">
              <div className="product-carousel">
                <button className="carousel-arrow left-arrow">❮</button>

                <div className="product-slide active">
                  <div className="product-info">
                    <h3>Sensible+ Air Monitor</h3>
                    <p>
                      This is a smart air quality monitor that comes with 7 inch touch screen display that gives more
                      insightful data for banks.
                    </p>
                    <ul className="product-features">
                      <li>7 Inch LED Touch Screen Display</li>
                      <li>5000 mAh Battery InBuilt</li>
                      <li>WiFi Connectivity With Mobile App</li>
                    </ul>
                    <a
                      href="https://www.pranaair.com/air-quality-monitor/sensible-plus-air-monitor/"
                      className="know-more-btn"
                    >
                      Know More
                    </a>
                  </div>
                  <div className="product-image">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/01/prana-air-sensible-plus-air-monitor-for-bank.jpg"
                      alt="prana air sensible+ air quality monitor for banking services"
                    />
                  </div>
                </div>

                <div className="product-slide">
                  <div className="product-info">
                    <h3>SQUAIR Air Monitor</h3>
                    <p>
                      SQUAIR monitor is a smart indoor air quality monitoring device that can detect particulate
                      matters, temperature, humidity, and gas parameters in bank.
                    </p>
                    <ul className="product-features">
                      <li>Detects PM2.5, CO, CO2, TVOC, noise, temp., & humidity</li>
                      <li>Mobile & Smart TV App Enabled</li>
                      <li>Reliable Web Dashboard Accessibility</li>
                    </ul>
                    <a
                      href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/"
                      className="know-more-btn"
                    >
                      Know More
                    </a>
                    <a href="https://www.pranaair.com/air-quality-monitor/rental-air-monitor/" className="rent-btn">
                      Looking to Rent?
                    </a>
                  </div>
                  <div className="product-image">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/01/prana-air-squair-air-quality-monitor-for-bank.jpg"
                      alt="prana air squair air quality monitor for banking services"
                    />
                  </div>
                </div>

                <button className="carousel-arrow right-arrow">❯</button>
              </div>

              <div className="carousel-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
              </div>
            </div>
          )}

          {activeTab === "fresh-air-machine" && (
            <div className="vc_row_inner">
              <div className="vc_column_inner">
                <div id="myCarousel2" className="carousel slide">
                  <ol className="carousel-indicators">
                    <li className="active" data-target="#myCarousel2" data-slide-to="0"></li>
                  </ol>

                  <div className="carousel-inner">
                    <div className="item active">
                      <div className="slider_cntr">
                        <div className="slider_img_box">
                          <a href="https://www.pranaair.com/fresh-air-machine/">
                            <img
                              style={{ width: "100%" }}
                              src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-fresh-air-machine-for-iaq-solution.jpg"
                              alt="prana air fresh air machine as iaq solution for real estates"
                            />
                          </a>
                        </div>
                        <div className="slider_details_box">
                          <h3>
                            Fresh Air Machine
                            <br /> As IAQ Solution
                          </h3>
                          <span>
                            One-stop solution for indoor air pollution by Prana Air Fresh Air Machine working as an air
                            purifier with the capability to filter out 99.5% efficiency and multi-layer HEPA filters.
                          </span>
                          <ul className="airquality_list">
                            <li>Comes with multi-layers HEPA Filters</li>
                            <li>Compact Design makes it easy to place</li>
                            <li>Promising you up to 99.5% efficiency</li>
                          </ul>
                          <a href="https://www.pranaair.com/fresh-air-machine/" className="knowmore_btn">
                            Know More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a className="left carousel-control" href="#myCarousel2" data-slide="prev">
                    <span className="carousel-arrow carousel-arrow-left">&#10094;</span>
                  </a>
                  <a className="right carousel-control" href="#myCarousel2" data-slide="next">
                    <span className="carousel-arrow carousel-arrow-right">&#10095;</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === "api-data" && (
            <div className="vc_row_inner">
              <div className="vc_column_inner">
                <div id="myCarousel3" className="carousel slide">
                  <ol className="carousel-indicators">
                    <li className="active" data-target="#myCarousel3" data-slide-to="0"></li>
                  </ol>

                  <div className="carousel-inner">
                    <div className="item active">
                      <div className="slider_cntr">
                        <div className="slider_img_box">
                          <img
                            style={{ width: "100%" }}
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/aqi-api-data-for-institutes.jpg"
                            alt="aqi api data for banks"
                          />
                        </div>
                        <div className="slider_details_box">
                          <h3>AQI API Data</h3>
                          <span>Avail the real-time air quality data of nearby outdoor area on the web.</span>
                          <ul className="airquality_list">
                            <li>Integrate air quality data on the web</li>
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

                  <a className="left carousel-control" href="#myCarousel3" data-slide="prev">
                    <span className="carousel-arrow carousel-arrow-left">&#10094;</span>
                  </a>
                  <a className="right carousel-control" href="#myCarousel3" data-slide="next">
                    <span className="carousel-arrow carousel-arrow-right">&#10095;</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Data Freemium Services Section */}
      <div className="vc_row full_width stretch_row top_space_heading">
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Data Freemium <span className="bold_text">Services</span>
            </h2>
            <p>
              The data can be displayed or analyzed on the LCD screens or the app via our customized dashboard. Scan the
              QR to know the AQI of the area you are in.
            </p>
          </div>
        </div>
      </div>

      <div className="modern-services-grid inner_container mobile-optimized">
        <div className="service-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/01/aqi-tv-app-for-bank.jpg"
            alt="aqi tv app dashboard for banks"
            className="service-image"
          />
          <h3>TV Dashboard App</h3>
        </div>

        <div className="service-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/01/Customised-App-for-banks.jpg"
            alt="aqi customized dashboard app for banks"
            className="service-image"
          />
          <h3>Customised App for Banks</h3>
        </div>

        <div className="service-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/01/qr-code-scan-for-bank.jpg"
            alt="aqi monitor data qr code scan for banks"
            className="service-image"
          />
          <h3>QR Code Scan</h3>
        </div>
      </div>

      {/* Effects of Air Pollution Section */}
      <div className="vc_row full_width stretch_row top_space_heading" style={{ paddingTop: "15px" }}>
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              The Effects of Air Pollution - <span className="bold_text">Banks/Financial Institutions</span>
            </h2>
            <p>
              When customers & staff members are exposed to poor air quality, they feel unwell, and irritation in the
              eyes, nose, and throat, headaches, and nausea are common symptoms of air pollution exposure.
            </p>
          </div>
        </div>
      </div>

      <div className="modern-comparison-container inner_container mobile-friendly">
        <div className="comparison-column with-clean">
          <h3>With Clean Air</h3>
          <ul className="comparison-list">
            <li>Improve ventilation</li>
            <li>Good comfort score</li>
            <li>Enhanced experience</li>
            <li>Improved air filtration.</li>
          </ul>
        </div>

        <div className="comparison-divider"></div>

        <div className="comparison-column without-clean">
          <h3>Without Clean Air</h3>
          <ul className="comparison-list red">
            <li>Less comfort</li>
            <li>Low ventilation score</li>
            <li>Bad experience</li>
            <li>Bad odor and mold score.</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="vc_row full_width stretch_row faq_ask_section" style={{ paddingTop: "60px" }}>
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Frequently Asked <span className="bold_text">Questions</span>
            </h2>
            <p>About Air Quality Solution for Bank/Financial Institutions Have questions? Were here to help.</p>
          </div>
        </div>
      </div>

      <div className="vc_row full_width stretch_row faq_section faq_ask_section">
        <div className="vc_column">
          <div className="vc_tta-accordion">
            <div className={`vc_tta-panel ${activeAccordion === 0 ? "active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleAccordion(0)}>
                <h4 className="vc_tta-panel-title">1. What are the major pollutants that are present in a bank?</h4>
              </div>
              <div className="vc_tta-panel-body" style={{ display: activeAccordion === 0 ? "block" : "none" }}>
                <p>
                  - Many pollutants can be present inside a typical bank setting. CO2, TVOC, and dust particles are the
                  main pollutants followed by noise, CO, airborne pathogens, temperature, etc.
                </p>
              </div>
            </div>

            <div className={`vc_tta-panel ${activeAccordion === 1 ? "active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleAccordion(1)}>
                <h4 className="vc_tta-panel-title">
                  2. What are the health impacts of the pollutants present inside the bank?
                </h4>
              </div>
              <div className="vc_tta-panel-body" style={{ display: activeAccordion === 1 ? "block" : "none" }}>
                <p>- Physical discomforts like headaches, nausea, dizziness, etc. among customers, and staff.</p>
              </div>
            </div>

            <div className={`vc_tta-panel ${activeAccordion === 2 ? "active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleAccordion(2)}>
                <h4 className="vc_tta-panel-title">
                  3. What are some criteria that need to be kept in mind for a good and comfortable banking experience?
                </h4>
              </div>
              <div className="vc_tta-panel-body" style={{ display: activeAccordion === 2 ? "block" : "none" }}>
                <p>
                  - Ventilation rate, noise, comfort level, mold score, organic aerosols, etc. are some of the criteria.
                </p>
              </div>
            </div>

            <div className={`vc_tta-panel ${activeAccordion === 3 ? "active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleAccordion(3)}>
                <h4 className="vc_tta-panel-title">4. Why is it necessary to have air quality monitoring solutions?</h4>
              </div>
              <div className="vc_tta-panel-body" style={{ display: activeAccordion === 3 ? "block" : "none" }}>
                <p>
                  To know the nature of pollutants and how much are they present in a space so that necessary actions
                  can be taken.
                </p>
              </div>
            </div>

            <div className={`vc_tta-panel ${activeAccordion === 4 ? "active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleAccordion(4)}>
                <h4 className="vc_tta-panel-title">5. How can I check the AQI of my store using your device?</h4>
              </div>
              <div className="vc_tta-panel-body" style={{ display: activeAccordion === 4 ? "block" : "none" }}>
                <p>
                  - Prana Air Monitors are WiFi enabled so you dont need to set up a wire framework to extract and
                  display the data. Simply connect the monitor to the dashboard through WiFi connectivity and view the
                  real-time data on your screens.
                </p>
              </div>
            </div>

            <div className={`vc_tta-panel ${activeAccordion === 5 ? "active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleAccordion(5)}>
                <h4 className="vc_tta-panel-title">
                  6. Are any other parameters included in the monitors other than the air pollutants?
                </h4>
              </div>
              <div className="vc_tta-panel-body" style={{ display: activeAccordion === 5 ? "block" : "none" }}>
                <p>- Yes, you can monitor the temperature, noise, and humidity in an area.</p>
              </div>
            </div>

            <div className={`vc_tta-panel ${activeAccordion === 6 ? "active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleAccordion(6)}>
                <h4 className="vc_tta-panel-title">
                  7. Are there any additional benefits that come with the solutions?
                </h4>
              </div>
              <div className="vc_tta-panel-body" style={{ display: activeAccordion === 6 ? "block" : "none" }}>
                <p>
                  - Customizable dashboard, 24*7 remote access to the data, get health tips, real-time and historical
                  data analysis, QR code to scan and know the real-time AQI of that area, and many more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clientele Section */}
      <div className="vc_row full_width stretch_row top_space_heading">
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Our <span className="bold_text">Clientele</span>
            </h2>
            <p>We are honored to work with so many well-known companies.</p>
          </div>
        </div>
      </div>

      <div className="modern-clients-grid inner_container mobile-optimized">
        <div className="client-logo">
          <img src="https://www.pranaair.com/wp-content/uploads/2022/08/client-logo-1.png" alt="client logo" />
        </div>
        <div className="client-logo">
          <img src="https://www.pranaair.com/wp-content/uploads/2022/08/client-logo-2.png" alt="client logo" />
        </div>
        <div className="client-logo">
          <img src="https://www.pranaair.com/wp-content/uploads/2022/08/client-logo-3.png" alt="client logo" />
        </div>
        <div className="client-logo">
          <img src="https://www.pranaair.com/wp-content/uploads/2022/08/client-logo-4.png" alt="client logo" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="modern-contact-section mobile-friendly" id="get_in_touch">
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
        <ContactForm pageName="Bank Financial institution Page" />
      </div>

      {/* Industrial Applications Section */}
      <div className="vc_row full_width stretch_row seperate_industrial_box">
        <div className="vc_column">
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

      <div className="vc_row inner_container industries_application_section">
        <div className="vc_column">
          <div className="owl-slider">
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
              <div className="item">
                <div className="app_service_box">
                  <div className="app_img_bx">
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
              </div>
              <div className="item">
                <div className="app_service_box">
                  <div className="app_img_bx">
                    <a href="https://www.pranaair.com/solutions-by-application/office/">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/07/solution-for-office-scaled.jpg"
                        alt="air quality solutions for office"
                      />
                    </a>
                  </div>
                  <a href="https://www.pranaair.com/solutions-by-application/office/">
                    <h4>Solutions for Office</h4>
                  </a>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

