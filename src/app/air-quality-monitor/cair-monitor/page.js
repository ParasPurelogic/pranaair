"use client"

import { useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./style.css"

export default function CairMonitor() {
  // Tab states for different sections
  const [activeTab, setActiveTab] = useState("AQI")
  const [activeVisualTab, setActiveVisualTab] = useState("section1")
  const [activeTvTab, setActiveTvTab] = useState("tab5")
  const [trackTab, trackActiveSpecTab] = useState("MobileApp")
  const [activePartTab, setActivePartTab] = useState("Parts & Label")

  // Carousel responsive settings
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="row inner-banner-section">
            <div className="col-md-6">
              <div className="banner-content">
                <h1>
                  <span className="hd-txt-color">Cair+</span>
                  <br />
                  Indoor Air Quality Monitor
                </h1>
                <p>
                  Track your indoor air quality with a low-cost, highly accurate, and portable device. It makes
                  invisible air contaminants presence visible in your house.
                </p>
                <ul className="banner-table">
                  <li>Low Cost</li>
                  <li>Accurate</li>
                  <li>Portable</li>
                </ul>

                <form className="cart" action="https://www.pranaair.com/product/cair-plus-monitor/" method="post">
                  <button
                    className="single_add_to_cart_button button alt button button_slide slide_right"
                    name="add-to-cart"
                    type="submit"
                  >
                    Buy Now{" "}
                    <img
                      className="banner-btn-arrow"
                      src="https://www.pranaair.com/wp-content/uploads/2023/12/Vector-1.png"
                      alt=""
                    />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="car-in-outdoor-monitior-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="carin-in-outdoor-heading">
                <h2>Features of Cair+ Monitor</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="car-in-outdoor-para">
                <p>Cair+ monitoring device is where your search stops</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="cair-indoor-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/11/pranaair-cair-monitor-all-specifications.webp"
                  alt="pranaair cair monitor all specification"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="carin-tab-box-main">
                <div className="carin-tab-box-left">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/real-time-monitoring-icon.png"
                        alt="real time air quality monitoring icon"
                      />
                    </li>
                    <li>
                      <h4>Real-Time Monitoring</h4>
                      <p>AQI, PM2.5, PM10, CO2, TVOC, HCHO, Temperature, and Humidity.</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/micro-sd-card-storage.png"
                        alt="micro sd card storage"
                      />
                    </li>
                    <li>
                      <h4>Micro SD Card Storage</h4>
                      <p> Provide better data storage with a micro SD card</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/type-c-usb-cable.png"
                        alt="type c usb cable"
                      />
                    </li>
                    <li>
                      <h4>Type-C USB Cable</h4>
                      <p>Charge the air quality device anytime with a Type-C USB cable.</p>
                    </li>
                  </ul>
                </div>
                <div className="carin-tab-box-right">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/wifi-cloud-data-storage.png"
                        alt="wifi cloud data storage"
                      />
                    </li>
                    <li>
                      <h4>Wi-Fi + Cloud Data Storage</h4>
                      <p>Data accessibility on AQIs mobile, TV, Tablet App or web-dashboard.</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/lithium-ion-battery.png"
                        alt="lithium-ion battery"
                      />
                    </li>
                    <li>
                      <h4>Battery Capacity</h4>
                      <p>With a 1600 mAh lithium-ion battery, it can last upto 3 Hrs on a full charge.</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/portable-device.png"
                        alt="portable device"
                      />
                    </li>
                    <li>
                      <h4>Portable Device</h4>
                      <p>Carry the device anywhere and measure the air quality on your own.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEED WELL Section */}
      <div className="container">
        <div className="row leed-well">
          <div className="col-12">
            <div className="leed-well-heading">
              <h2>Cair+ meets all standard of IAQ</h2>
              <p>LEED v4.1, WELL, WHO, ASHRAE - Meet your standards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Parameters Section */}
      <section className="cair-monitore-slider-section slider-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="content-tab-box">
                <h3>
                  <span className="txt-color">Cair +</span>
                  <br />
                  Indoor Air Quality monitor
                </h3>
              </div>
            </div>
            <div className="col-md-7">
              <div className="parameter-para">
                <p>
                  Measure the air quality of your place on your own air pollution device for indoor and outdoor. Along
                  our new Cair+ air monitor, you will get a free ambient air quality monitor.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="content-tab-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/11/cair-indoor-air-quality-monitor.webp"
                  alt="prana air cair indoor air quality monitor device"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="parameters-icons-box">
                <h4>Parameters</h4>
                <div className="parameter-icons">
                  <div className="parameter-icons-left">
                    <ul>
                      <li>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-aqi-parameter.png"
                          alt="cair aqi parameter"
                        />
                        <h5>AQI</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/pm1-parameter.png"
                          alt="pm1 parameter"
                        />
                        <h5>PM1</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-pm2.5-parameter.png"
                          alt="cair pm2.5 parameter"
                        />
                        <h5>PM2.5</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-pm10-parameter.png"
                          alt="cair pm10 parameter"
                        />
                        <h5>PM10</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="parameter-icons-right">
                    <ul>
                      <li>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-co2-parameter.png"
                          alt="cair co2 parameter"
                        />
                        <h5>CO2</h5>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="parameter-icons">
                  <div className="parameter-icons-left">
                    <ul>
                      <li>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-tvoc-parameter.png"
                          alt="cair tvoc parameter"
                        />
                        <h5>TVOC</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-hcho-parameter.png"
                          alt="cair hcho parameter"
                        />
                        <h5>HCHO</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          className="temp-icon"
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-temp-parameter.png"
                          alt="cair temp parameter"
                        />
                        <h5>Temp.</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-humidity-parameter.png"
                          alt="cair humidity parameter"
                        />
                        <h5>Humi.</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="parameter-icons-right">
                    <ul>
                      <li className="partical-count">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-pc0.3-parameter.png"
                          alt="cair pc0.3 parameter"
                        />
                        <h5>
                          Particle Counts
                          <br />
                          (0.3, 0.5, 1.0, 2.5, 5.0, 10 μm)
                        </h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="app-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="app-heading">
                <h2>
                  <strong>Cair+</strong> Installation
                </h2>
                <p>Install Cair+ device anywhere indoor your house, office, resturants etc</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className="app-slider"
              >
                <div>
                  <div className="app-slide-img-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/12/prana-air-cair-air-quality-monitor.jpg"
                      alt="prana air cair air quality monitor"
                    />
                    <h3>
                      Cair+ monitors display various real-time air pollutants within the house. You can also know the
                      outdoor AQI to compare the level.
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="app-slide-img-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/12/prana-air-cair-air-quality-monitor-clock.jpg"
                      alt="prana air cair air quality monitor clock"
                    />
                    <h3>Screen saver feature is present that shows the clock with pollutants as well.</h3>
                  </div>
                </div>
                <div>
                  <div className="app-slide-img-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/12/prana-air-cair-air-quality-monitor-graph.jpg"
                      alt="prana air cair air quality monitor graph"
                    />
                    <h3>Ensures the air quality trend in a day inside your room.</h3>
                  </div>
                </div>
                <div>
                  <div className="app-slide-img-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/11/prana-air-cair-air-quality-monitor-parameters.webp"
                      alt="prana air cair air quality monitor parameters"
                    />
                    <h3>
                      Displays the concentration of air pollutants in the air. To ensure the range from good to
                      hazardous.
                    </h3>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Clock Section */}
      <section className="monitor-turn-into-clock">
        <div className="container">
          <div className="row mob-row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="monitor-clock-text">
                <h2>Transform Your Device into a</h2>
                <h3>
                  Cl
                  <span className="clock-icon">
                    <img
                      className="hithere"
                      src="https://www.pranaair.com/wp-content/uploads/2023/12/clock-icon.png"
                      alt="clock icon"
                    />
                  </span>
                  ck
                </h3>
                <p>
                  Transit your device into a clock with an AQI display by activating the screen saver mode. AQI (Air
                  Quality Index) also displays the indoor air quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Pollution Section */}
      <section className="air-pollition-section">
        <div className="container">
          <div className="row mob-img">
            <div className="col-md-6">
              <div className="air-pollution-para">
                <h2>What is Indoor Air Pollution?</h2>
                <p>
                  Indoor air pollution, originating from various sources like tobacco smoke and household products,
                  poses health risks such as respiratory issues and allergies. Common pollutants include particulate
                  matter and volatile organic compounds. Adequate ventilation is crucial for mitigating these concerns,
                  as poor air quality can lead to headaches and fatigue. Regular monitoring, adherence to standards, and
                  mitigation strategies are key to creating environments conducive to well-being.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pollution-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/01/health-problem-of-indoor-air-pollution.jpg"
                  alt="health problem of indoor air pollution"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WiFi Connectivity Section */}
      <section className="wifi-connective-section">
        <div className="container-fluid">
          <div className="row wifi-mob-row">
            <div className="col-md-5 wifi-connect-heading">
              <h2>
                <img src="https://www.pranaair.com/wp-content/uploads/2024/01/wifi.png" alt="wifi connectivity" /> Wifi
                Connectivity
              </h2>
              <p>
                Wifi connectivity feature to access the tools data on your smartphones, AQI India app, android TV and
                tabs. With it, you can ensure particular places information whenever you require.
              </p>
              <h3 className="bg">Remote Data Accessibility</h3>
            </div>
            <div className="col-md-7 wifi-connect-img"></div>
          </div>
        </div>
      </section>

      {/* Office Monitor Section */}
      <section className="cair-monitor-ofc">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cair-ofc-monitor">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/11/prana-air-cair-indoor-air-quality-monitor-in-office.webp"
                  alt="prana air cair indoor air quality monitor in office"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="quote-heading">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/12/quote-icon.png" alt="quote icon" />
                <h2>Cair+</h2>
                <h3>Indoor Quality monitor</h3>
                <p>
                  Indoor pollution is a major concern due to many issues. Cair+ ensures thermal comfort in your house.
                  As it exhibits real-time temperature and humidity. Check the filtration and ventilation with pollutant
                  levels in the air.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AQI Mobile App Section */}
      <section className="aqi-mobile-app">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="aqi-mobile-text">
                <h2>
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png" alt="aqi logo" /> Mobile
                </h2>
                <h3>Application</h3>
                <ul>
                  <li>Attainability of Air quality alerts in your area.</li>
                  <li>Air quality graph, health advice as per the real-time air quality,</li>
                  <li>Steer through countries to check AQI across the world</li>
                  <li>Easy managing of your Air quality monitors</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cair-data-on-app">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/01/pranaair-cair-air-quality-monitor-connected-with-aqi-app.jpg"
                  alt="prana air cair air quality monitor connected with aqi mobile app"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventilation Risks Section */}
      <section className="ventilation-pose-health-risk">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="high-co2level">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/12/high-co2-level.png"
                  alt="high co2 level"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="high-co2level">
                <img
                  className="right-icon"
                  src="https://www.pranaair.com/wp-content/uploads/2023/12/high-co2-level.png"
                  alt="high co2 level"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="health-risk-text">
                <h2>High CO2 Levels and Poor Ventilation Pose Health Risks</h2>
                <p>
                  When ventilation is inadequate, the accumulation of CO2 increases, negatively impacting air quality.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="poor-health-box" style={{ animationDuration: "4s" }}>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/12/ventilation.png"
                    alt="bad ventilation due to high co2 level"
                  />
                </li>
                <li>
                  <h3>Ventilation Score</h3>
                  the provision of fresh air to your room
                </li>
                <li>
                  <h4 style={{ color: "#fb291e" }}>05</h4>
                  <h5 style={{ color: "#fb291e" }}>Moderate</h5>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="high-co2level">
                <img
                  className="bottm-left-icon"
                  src="https://www.pranaair.com/wp-content/uploads/2023/12/high-co2-level.png"
                  alt="high co2 level"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="high-co2level">
                <img
                  className="bottom-icon"
                  src="https://www.pranaair.com/wp-content/uploads/2023/12/high-co2-level.png"
                  alt="high co2 level"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AQI Ranges Section */}
      <section className="aqi-ranges-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tab-range-heading">
                <h2>Pollutants Ranges</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tab-range-para">
                <p>
                  Air Quality Index to check the values of every pollutant in your area. Through it, you can make
                  well-informed decisions for indoor air quality.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="car-in-outdoor-tab">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeTab === "AQI" ? "active" : ""}`}
                      onClick={() => setActiveTab("AQI")}
                      href="#!"
                    >
                      AQI
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeTab === "PM1" ? "active" : ""}`}
                      onClick={() => setActiveTab("PM1")}
                      href="#!"
                    >
                      PM1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeTab === "PM2.5" ? "active" : ""}`}
                      onClick={() => setActiveTab("PM2.5")}
                      href="#!"
                    >
                      PM2.5
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeTab === "PM10" ? "active" : ""}`}
                      onClick={() => setActiveTab("PM10")}
                      href="#!"
                    >
                      PM10
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeTab === "CO2" ? "active" : ""}`}
                      onClick={() => setActiveTab("CO2")}
                      href="#!"
                    >
                      CO2
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeTab === "HCHO" ? "active" : ""}`}
                      onClick={() => setActiveTab("HCHO")}
                      href="#!"
                    >
                      HCHO
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeTab === "TVOC" ? "active" : ""}`}
                      onClick={() => setActiveTab("TVOC")}
                      href="#!"
                    >
                      TVOC
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className={`tab-pane ${activeTab === "AQI" ? "show active" : ""}`}>
                    <div className="tab-aqi-ranges">
                      <ul className="perameter">
                        <li>Good</li>
                        <li>Moderate</li>
                        <li>Poor</li>
                        <li>Unhealthy</li>
                        <li>Severe</li>
                        <li>Hazardous</li>
                      </ul>
                      <div className="d-flex">
                        <p
                          className="green-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}
                        ></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                        <p
                          className="red-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}
                        ></p>
                      </div>
                      <ul className="aqi-rang">
                        <li>0</li>
                        <li>50</li>
                        <li>100</li>
                        <li>150</li>
                        <li>200</li>
                        <li>300</li>
                        <li>300+</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`tab-pane ${activeTab === "PM1" ? "show active" : ""}`}>
                    <div className="tab-aqi-ranges">
                      <ul className="perameter">
                        <li>Good</li>
                        <li>Moderate</li>
                        <li>Poor</li>
                        <li>Unhealthy</li>
                        <li>Severe</li>
                        <li>Hazardous</li>
                      </ul>
                      <div className="d-flex">
                        <p
                          className="green-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}
                        ></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                        <p
                          className="red-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}
                        ></p>
                      </div>
                      <ul className="aqi-rang">
                        <li>0</li>
                        <li>10</li>
                        <li>20</li>
                        <li>40</li>
                        <li>60</li>
                        <li>90</li>
                        <li>90+</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`tab-pane ${activeTab === "PM2.5" ? "show active" : ""}`}>
                    <div className="tab-aqi-ranges">
                      <ul className="perameter">
                        <li>Good</li>
                        <li>Moderate</li>
                        <li>Poor</li>
                        <li>Unhealthy</li>
                        <li>Severe</li>
                        <li>Hazardous</li>
                      </ul>
                      <div className="d-flex">
                        <p
                          className="green-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}
                        ></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                        <p
                          className="red-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}
                        ></p>
                      </div>
                      <ul className="aqi-rang">
                        <li>0</li>
                        <li>30</li>
                        <li>60</li>
                        <li>90</li>
                        <li>120</li>
                        <li>250</li>
                        <li>250+</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`tab-pane ${activeTab === "PM10" ? "show active" : ""}`}>
                    <div className="tab-aqi-ranges">
                      <ul className="perameter">
                        <li>Good</li>
                        <li>Moderate</li>
                        <li>Poor</li>
                        <li>Unhealthy</li>
                        <li>Severe</li>
                        <li>Hazardous</li>
                      </ul>
                      <div className="d-flex">
                        <p
                          className="green-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}
                        ></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                        <p
                          className="red-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}
                        ></p>
                      </div>
                      <ul className="aqi-rang">
                        <li>0</li>
                        <li>50</li>
                        <li>100</li>
                        <li>250</li>
                        <li>350</li>
                        <li>430</li>
                        <li>430+</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`tab-pane ${activeTab === "CO2" ? "show active" : ""}`}>
                    <div className="tab-aqi-ranges">
                      <ul className="perameter">
                        <li>Good</li>
                        <li>Moderate</li>
                        <li>Poor</li>
                        <li>Unhealthy</li>
                        <li>Severe</li>
                        <li>Hazardous</li>
                      </ul>
                      <div className="d-flex">
                        <p
                          className="green-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}
                        ></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                        <p
                          className="red-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}
                        ></p>
                      </div>
                      <ul className="aqi-rang">
                        <li>0</li>
                        <li>600</li>
                        <li>800</li>
                        <li>1000</li>
                        <li>1200</li>
                        <li>1500</li>
                        <li>1500+</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`tab-pane ${activeTab === "HCHO" ? "show active" : ""}`}>
                    <div className="tab-aqi-ranges">
                      <ul className="perameter">
                        <li>Good</li>
                        <li>Moderate</li>
                        <li>Poor</li>
                        <li>Unhealthy</li>
                        <li>Severe</li>
                        <li>Hazardous</li>
                      </ul>
                      <div className="d-flex">
                        <p
                          className="green-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}
                        ></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                        <p
                          className="red-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}
                        ></p>
                      </div>
                      <ul className="aqi-rang">
                        <li>0</li>
                        <li>0.025</li>
                        <li>0.050</li>
                        <li>0.100</li>
                        <li>0.200</li>
                        <li>0.350</li>
                        <li>0.350+</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`tab-pane ${activeTab === "TVOC" ? "show active" : ""}`}>
                    <div className="tab-aqi-ranges">
                      <ul className="perameter">
                        <li>Good</li>
                        <li>Moderate</li>
                        <li>Poor</li>
                        <li>Unhealthy</li>
                        <li>Severe</li>
                        <li>Hazardous</li>
                      </ul>
                      <div className="d-flex">
                        <p
                          className="green-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}
                        ></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                        <p
                          className="red-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}
                        ></p>
                      </div>
                      <ul className="aqi-rang">
                        <li>0</li>
                        <li>0.060</li>
                        <li>0.220</li>
                        <li>0.660</li>
                        <li>1</li>
                        <li>2.220</li>
                        <li>2.220+</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Visuals Section */}
      <section className="types-visuals-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="graph-title visual-title">
                <h2>Types of Visuals</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="graph-para visual-para">
                <p>
                  Different screens access various information on one device. Makes it more convenient for better
                  follow-up
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="graph-minitor-device">
                <div id="section1" className={`ntabcontent ${activeVisualTab === "section1" ? "d-block" : "d-none"}`}>
                  <div className="show-img">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Main-screen.webp"
                      alt="aqi tv app for pocket pm2.5 monitor"
                    />
                  </div>
                  <h5>Displays indoor and outdoor data of AQI with LED lights highlighting each pollutant.</h5>
                </div>

                <div id="section2" className={`ntabcontent ${activeVisualTab === "section2" ? "d-block" : "d-none"}`}>
                  <div className="show-img">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Graph-screen.webp"
                      alt="prana air cair air quality monitor graph screen"
                    />
                  </div>
                  <h5>Check the air quality trend in your house with the graph of quality ups and downs.</h5>
                </div>

                <div id="section3" className={`ntabcontent ${activeVisualTab === "section3" ? "d-block" : "d-none"}`}>
                  <div className="show-img">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Concentrated-Value-visuals.webp"
                      alt=" prana air cair air quality monitor particle counts"
                    />
                  </div>
                  <h5>Ensure real-time values of each pollutant with its condition as by different colors</h5>
                </div>

                <div id="section4" className={`ntabcontent ${activeVisualTab === "section4" ? "d-block" : "d-none"}`}>
                  <div className="show-img">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Clock-Screen.webp"
                      alt="prana air cair air quality monitor clock screen"
                    />
                  </div>
                  <h5>Activate the screen saver on your device to make it a digital clock with AQI.</h5>
                </div>

                <div id="section5" className={`ntabcontent ${activeVisualTab === "section5" ? "d-block" : "d-none"}`}>
                  <div className="show-img">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Parameter-Ranges.webp"
                      alt="prana air cair air quality monitor parameter ranges"
                    />
                  </div>
                  <h5>Check the Air quality parameters in your room and decide per the status from good to severe.</h5>
                </div>
              </div>

              <div className="new-ntabb">
                <button
                  className={`ntab ntablinks ${activeVisualTab === "section1" ? "active" : ""}`}
                  onClick={() => setActiveVisualTab("section1")}
                >
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/12/concentrated-values.png"
                    alt="prana air cair air quality monitor particle counts"
                  />
                  <h5>Main Screens</h5>
                </button>
                <button
                  className={`ntab ntablinks ${activeVisualTab === "section2" ? "active" : ""}`}
                  onClick={() => setActiveVisualTab("section2")}
                >
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/12/humi-graph.png"
                    alt="prana air cair air quality monitor graph screen"
                  />
                  <h5>Historic Graphs</h5>
                </button>
                <button
                  className={`ntab ntablinks ${activeVisualTab === "section3" ? "active" : ""}`}
                  onClick={() => setActiveVisualTab("section3")}
                >
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/12/concentration-value.png"
                    alt="prana air cair air quality monitor concentration screen"
                  />
                  <h5>Concentrated Values</h5>
                </button>
                <button
                  className={`ntab ntablinks ${activeVisualTab === "section4" ? "active" : ""}`}
                  onClick={() => setActiveVisualTab("section4")}
                >
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/12/clock-screen.png"
                    alt="prana air cair air quality monitor clock screen"
                  />
                  <h5>Screen saver</h5>
                </button>
                <button
                  className={`ntab ntablinks ${activeVisualTab === "section5" ? "active" : ""}`}
                  onClick={() => setActiveVisualTab("section5")}
                >
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/12/air-qualtiy-parameters.png"
                    alt="prana air cair air quality monitor parameters"
                  />
                  <h5>Parameter Range</h5>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graph Heading Section */}
      <div className="container">
        <div className="row graph-heading">
          <div className="col-md-6">
            <div className="graph-title">
              <h2>Data Comparing Graph</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="graph-para">
              <p>
                A comparison of BAM and Prana Airs Cair+ shows both data are correlated. Our device also shows accurate
                data as a high-end device.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Graph Chart Section */}
      <div className="container-fluid">
        <div className="row graph-chartt">
          <div className="col">
            <div className="graph-chart-img">
              <img src="https://www.pranaair.com/wp-content/uploads/2023/12/graph-chart-scaled.jpg" alt="graph chart" />
            </div>
          </div>
        </div>
      </div>

      {/* AQI TV App Section */}
      <div className="container-fluid">
        <div className="row graph-chart aqi-tv-screen">
          <div className="col-md-6">
            <div className="aqi-tv-app-title">
              <h2>
                <img src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png" alt="aqi-logo" /> TV
                Application
              </h2>
              <h3>
                Compare Real-time <span className="pink">Indoor</span> and <span className="pink">Outdoor</span> air
                quality in one place.
              </h3>
              <p>So you can make the right decision whether to stay in or go out.</p>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>

      {/* track quality Section */}
      <section className="tv-app-section">
        <div className="container">
          <div className="row aqi-app-heading">
            <div className="col-md-6">
              <div className="track-aqi-heading">
                <h2>
                  Track the <span className="txt-color">quality of the air</span> you breathe on different
                  <span className="aqi-logo">
                    <img src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png" />
                  </span>{" "}
                  platforms
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="graph-para track-aqi-para">
                <p>Get access of air quality data on TV, Mobile App, Web Dashboard</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <button className={`nav-link ${trackTab === "MobileApp" ? "active" : ""}`} onClick={() => trackActiveSpecTab("MobileApp")}
                    href="#"
                  >
                    Mobile App
                  </button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${trackTab === "TVApp" ? "active" : ""}`} onClick={() => trackActiveSpecTab("TVApp")}
                    href="#"
                  >
                    TV App
                  </button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${trackTab === "WebDashboard" ? "active" : ""}`} onClick={() => trackActiveSpecTab("WebDashboard")}
                    href="#"
                  >
                    Web Dashboard
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div className={`tab-pane ${trackTab === "MobileApp" ? "show active" : ""}`}>
                  <div className="row">
                    <div className="col-12">
                      <div className="mobile-screen">
                        <h3>Mobile App</h3>
                        <img src="https://www.pranaair.com/wp-content/uploads/2024/01/aqi-mobile-application.png"
                          alt="aqi mobile application" />
                      </div>
                      <div className="main-health-box">
                        <div className="health-real-time">
                          <div className="health-data-box">
                            <ul>
                              <li>
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/02/health-advice.png"
                                  alt="health advice icon" />
                              </li>
                              <li>
                                <h4>Get health advices</h4>
                                Take some precautions about what to do and not to do when the air quality is good and
                                bad.
                              </li>
                            </ul>
                          </div>
                          <div className="health-data-box">
                            <ul>
                              <li>
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/02/real-time-data.png"
                                  alt="real time and historic data icon" />
                              </li>
                              <li>
                                <h4>Real-time and historic data access</h4>
                                Access real-time and historic air quality data (24 hours, week, or months) via AQI app.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mob-app-btn">
                        <a className="m-btn iphone-btn" href="#">
                          <img src="https://www.pranaair.com/wp-content/uploads/2024/01/ios-icon.png" alt="" /> Download
                          for <strong>iOS</strong>
                        </a>
                        <a className="m-btn anddro-btn" href="#">
                          <img src="https://www.pranaair.com/wp-content/uploads/2024/01/android-icon.png" alt="" />{" "}
                          Download for <strong>android</strong>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane ${trackTab === "TVApp" ? "show active" : ""}`}>
                  <div className="tav-app-screen">
                    <div id="tab5" className={`tabb ${activeTvTab === "tab5" ? "d-block" : "d-none"}`}>
                      <div className="show-img">
                        <h3>TV App</h3>
                        <img src="https://www.pranaair.com/wp-content/uploads/2024/01/indoor-outdoor-aqi-range-on-tv-app.jpg"
                          alt="indoor outdoor aqi range on tv app" />
                      </div>
                    </div>

                    <div id="tab6" className={`tabb ${activeTvTab === "tab6" ? "d-block" : "d-none"}`}>
                      <div className="show-img">
                        <h3>TV App</h3>
                        <img src="https://www.pranaair.com/wp-content/uploads/2024/01/indoor-outdoor-all-parameters-on-tv-screen.jpg"
                          alt="aqi-tv-app-screen" />
                      </div>
                    </div>

                    <div id="tab7" className={`tabb ${activeTvTab === "tab7" ? "d-block" : "d-none"}`}>
                      <div className="show-img">
                        <h3>TV App</h3>
                        <img src="https://www.pranaair.com/wp-content/uploads/2024/01/outdoor-and-indoor-data-show-in-tv-app.jpg"
                          alt="outdoor and indoor data show in tv app" />
                      </div>
                    </div>

                    <div id="tab8" className={`tabb ${activeTvTab === "tab8" ? "d-block" : "d-none"}`}>
                      <div className="show-img">
                        <h3>TV App</h3>
                        <img src="https://www.pranaair.com/wp-content/uploads/2024/01/aqi-data-in-tv-screen.jpg"
                          alt="aqi data in tv screen" />
                      </div>
                    </div>

                    <div className="all-btn">
                      <button className={`tab-button ${activeTvTab === "tab5" ? "active" : ""}`} onClick={() => setActiveTvTab("tab5")}
                      >
                        <img src="https://www.pranaair.com/wp-content/uploads/2024/01/indoor-outdoor-aqi-range-on-tv-app.jpg"
                          alt="indoor outdoor aqi range on tv app" />
                      </button>
                      <button className={`tab-button ${activeTvTab === "tab6" ? "active" : ""}`} onClick={() => setActiveTvTab("tab6")}
                      >
                        <img src="https://www.pranaair.com/wp-content/uploads/2024/01/indoor-outdoor-all-parameters-on-tv-screen.jpg"
                          alt="aqi tv app for pocket pm2.5 monitor" />
                      </button>
                      <button className={`tab-button ${activeTvTab === "tab7" ? "active" : ""}`} onClick={() => setActiveTvTab("tab7")}
                      >
                        <img src="https://www.pranaair.com/wp-content/uploads/2024/01/outdoor-and-indoor-data-show-in-tv-app.jpg"
                          alt="outdoor and indoor data show in tv app" />
                      </button>
                      <button className={`tab-button ${activeTvTab === "tab8" ? "active" : ""}`} onClick={() => setActiveTvTab("tab8")}
                      >
                        <img src="https://www.pranaair.com/wp-content/uploads/2024/01/aqi-data-in-tv-screen.jpg"
                          alt="aqi data in tv screen" />
                      </button>
                    </div>
                  </div>
                  <div className="main-health-box">
                    <div className="health-real-time">
                      <div className="health-data-box">
                        <ul>
                          <li>
                            <img src="https://www.pranaair.com/wp-content/uploads/2024/02/theme-option.png" alt="theme option" />
                          </li>
                          <li>
                            <h4>Themes option</h4>
                            Offers a variety of themes for better access to data on your TV.
                          </li>
                        </ul>
                      </div>
                      <div className="health-data-box">
                        <ul>
                          <li>
                            <img src="https://www.pranaair.com/wp-content/uploads/2024/02/connect-mob-app.png"
                              alt="connect mob app" />
                          </li>
                          <li>
                            <h4>Connect Mobile App</h4>
                            The mobile app can connect with your TV screen to have details on a big screen.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a className="tv-app-btn" href="https://play.google.com/store/apps/details?id=com.aqitv.aqitvnew">
                    Download for <strong>TV</strong>
                  </a>
                </div>
                <div className={`tab-pane ${trackTab === "WebDashboard" ? "show active" : ""}`}>
                  <div className="web-screen">
                    <h3>Web Dashboard</h3>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/01/aqi-website-dashboard.png"
                      alt="aqi-website-dashboard" />
                  </div>
                  <div className="main-health-box">
                    <div className="health-real-time">
                      <div className="health-data-box">
                        <ul>
                          <li>
                            <img src="https://www.pranaair.com/wp-content/uploads/2024/02/remote-access.png" alt="remote access" />
                          </li>
                          <li>
                            <h4>Remote access</h4>
                            Get access to 24*7 monitored data of AQI or temperature on the go.
                          </li>
                        </ul>
                      </div>
                      <div className="health-data-box">
                        <ul>
                          <li>
                            <img src="https://www.pranaair.com/wp-content/uploads/2024/02/data-comprasion.png"
                              alt="data comprasion" />
                          </li>
                          <li>
                            <h4>Data comparison</h4>
                            Compare two different locations data at one place and get real-time results
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a className="tv-app-btn" href="https://www.aqi.in/userlogin">
                    Login <strong>AQI dashboard</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* health index Section */}
        <div className="graph-heading container">
          <div className="row">
            <div className="col-md-6">
              <div className="graph-title health-index-heading">
                <h2>
                  <span className="txt-color">AI</span> Calculated{" "}
                  <span className="txt-color">Health</span> Index-Score
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="graph-para">
                <p>
                  Ensure hows your indoor environment and thermal comfort. Our
                  device confirms it by temperature, Humidity, and concentrations of
                  Air pollutants.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="health-index-section">
          <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="co2-bar">
                <ul className="security">
                  <li>Bad</li>
                  <li>Moderate</li>
                  <li>Good</li>
                </ul>
                <ul className="rang">
                  <li>0</li>
                  <li>5</li>
                  <li>10</li>
                </ul>
              </div>

              <div className="health-index-score">
                <div className="health-index-score-box">
                  <ul className="position-one" style={{ animationDuration: "4s" }}>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/ventilation.png"
                        alt="ventilation"
                      />
                    </li>
                    <li>
                      <h3>Ventilation Score</h3>
                      <p>the provision of fresh air to your room</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#fbb400" }}>05</h4>
                      <h5>Moderate</h5>
                    </li>
                  </ul>
                  <ul className="position-two" style={{ animationDuration: "6s" }}>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/odor-score.png"
                        alt="odor score"
                      />
                    </li>
                    <li>
                      <h3>Odor score</h3>
                      <p>a distinctive smell in the room</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#f4231c" }}>05</h4>
                      <h5>Bad</h5>
                    </li>
                  </ul>
                  <ul className="position-three" style={{ animationDuration: "4s" }}>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/mold-score.png"
                        alt="mold score"
                      />
                    </li>
                    <li>
                      <h3>Mold Score</h3>
                      <p>probability of mold formation in the room</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#29b713" }}>05</h4>
                      <h5>Good</h5>
                    </li>
                  </ul>
                </div>
                <div className="health-index-score-box">
                  <ul className="position-four" style={{ animationDuration: "6s" }}>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/capacity-index.png"
                        alt="capacity index"
                      />
                    </li>
                    <li>
                      <h3>Capacity index</h3>
                      <p>people capacity of the room</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#29b713" }}>05</h4>
                      <h5>Good</h5>
                    </li>
                  </ul>
                  <ul className="position-five" style={{ animationDuration: "4s" }}>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/comfort-score.png"
                        alt="comfort score"
                      />
                    </li>
                    <li>
                      <h3>Comfort score</h3>
                      <p>a state of physical ease in the room</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#29b713" }}>10</h4>
                      <h5>Good</h5>
                    </li>
                  </ul>
                  <ul className="position-six" style={{ animationDuration: "6s" }}>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/filtration-score.png"
                        alt="filtration score"
                      />
                    </li>
                    <li>
                      <h3>Filtration Score</h3>
                      <p>efficiency of filter in the room</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#f4231c" }}>10</h4>
                      <h5>Bad</h5>
                    </li>
                  </ul>
                </div>
                <div className="health-index-score-box">
                  <ul className="position-seven" style={{ animationDuration: "4s" }}>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/mites-scroe.png"
                        alt="mites score"
                      />
                    </li>
                    <li>
                      <h3>Mites Score</h3>
                      <p>presence of any mites in the room</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#f4231c" }}>02</h4>
                      <h5>Bad</h5>
                    </li>
                  </ul>
                  <ul className="position-eight" style={{ animationDuration: "6s" }}>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/virus-index.png"
                        alt="virus index"
                      />
                    </li>
                    <li>
                      <h3>Virus Index</h3>
                      <p>probability of virus formation in the room</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#f4231c" }}>02</h4>
                      <h5>Bad</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

      {/* historic data Section */}
      <section className="access-real-time-historic-data">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="historic-data-text">
                <h2>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png"
                    alt="aqi-logo"
                  />
                  Web Dashboard
                </h2>
                <h3>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/12/quote-data.png"
                    alt="quote data"
                  />
                  Access Real-time and Historic Data
                </h3>
                <p>
                  Our platform offers easy access to crucial information for air quality.
                  Individuals can make the best decision with ease. Accessing real-time
                  data regardless of their location or daytime.
                </p>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      {/* Parts and Labels Section */}
      <div className="container">
        <div className="row parts-label-tabs">
          <div className="col-md-6">
            <div className="parts-label-heading">
              <h2>Parts and Labels</h2>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row parts-label-tabsection">
          <div className="col-12">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className={`nav-link ${activePartTab === "Parts & Label" ? "active" : ""}`}
                  onClick={() => setActivePartTab("Parts & Label")}
                  href="#!"
                >
                  Parts & Label
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activePartTab === "Disassambley" ? "active" : ""}`}
                  onClick={() => setActivePartTab("Disassambley")}
                  href="#!"
                >
                  Disassambley
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className={`tab-pane ${activePartTab === "Parts & Label" ? "show active" : ""}`}>
                <div className="row part-labe-bg">
                  <div className="col-md-6">
                    <div className="part-lables-img">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/parts-and-label-cair-monitor.png"
                        alt="parts and label cair monitor"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="part-label-box">
                      <ul>
                        <li>
                          <span className="num">1</span>
                          <h4>NDIR Co2 sensor</h4>
                        </li>
                        <li>
                          <span className="num">2</span>
                          <h4>Laser particulate sensor (PM1, PM2.5, PM10)</h4>
                        </li>
                        <li>
                          <span className="num">3</span>
                          <h4>MEMS volatile organic compound sensor</h4>
                        </li>
                        <li>
                          <span className="num">4</span>
                          <h4>Electrochemical based Formaldehyde (HCHO) sensor</h4>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span className="num">5</span>
                          <h4>Wifi module</h4>
                        </li>
                        <li>
                          <span className="num">6</span>
                          <h4>Buzzer</h4>
                        </li>
                        <li>
                          <span className="num">7</span>
                          <h4>Temperature and Humidity Sensor</h4>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`tab-pane ${activePartTab === "Disassambley" ? "show active" : ""}`}>
                <div className="row mob-disassamble">
                  <div className="col-md-6">
                    <div className="disassamble-img">
                      <div className="glow-img">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/disassambley-cair-monitor.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="disassamble-glow-img">
                      <div className="glow-img">
                        <img src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-inside-parts-1.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="disassamble-text">
                      <h2>CAir+</h2>
                      <h3>Air Quality Monitor</h3>
                      <p>
                        Prana Air employs a holistic approach to assess indoor air quality using its proprietary Air
                        Quality Index (AQI). Through its innovative technology, Prana Air monitors pollutants such as
                        PM2.5 and PM10, alongside particle counts, temperature, humidity, total volatile organic
                        compounds (TVOC), and formaldehyde (HCHO).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* long battery Section */}
      <section className="long-battery-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="long-battery animated fadeInUp">
                <p>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/12/1600mah-long-battery.jpg"
                    alt="1600mAh long battery"
                  />
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="long-battery-text animated fadeInUp">
                <h2>1600mAh</h2>
                <h5>Battery Monitor</h5>
                <p>1600 mAh battery makes it mobile, and more productive. Quick to charge with a USB type-C cable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* tech spec Section */}
      <section className="tech-spec-section">
        <div className="container">
          <div className="row tech-spec-line">
            <div className="col-md-6">
              <div className="graph-title tech-spec-heading animated fadeInUp">
                <h2>Technical Specifications</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="animated fadeInUp">
                <p>
                  <a
                    className="tech-spec-btn"
                    href="https://www.pranaair.com/wp-content/uploads/2024/02/Prana-air-Cair-Air-quality-monitor-brochure.pdf"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                      alt="brochure-icon"
                    />
                    Brochure
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="car-in-outdoor-tab">
                <div className="tab-pane active">
                  <div className="row texh-spec-box">
                    <div className="col-md-6">
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Parameters:</h5>
                          </li>
                          <li>AQI, PM1, PM2.5, PM10, TVOCs, HCHO, CO2, Particle Counts, Temp. & Humi.</li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Connectivity:</h5>
                          </li>
                          <li>Wi-Fi</li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Color:</h5>
                          </li>
                          <li>Ivory</li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Size:</h5>
                          </li>
                          <li>11 x 3.4 x 7.5 (in cm)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Storage:</h5>
                          </li>
                          <li>
                            Micro SD Card Storage +<br />
                            AQI Cloud Storage
                          </li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Weight:</h5>
                          </li>
                          <li>175g</li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Screen:</h5>
                          </li>
                          <li>Color LED Display</li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Power Supply:</h5>
                          </li>
                          <li>Type C USB Cable</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row how-to-connect">
            <div className="col-12">
              <div className="how-to-connect-heading animated fadeInUp">
                <h2>How to connect</h2>
              </div>
            </div>
          </div>

          <div className="row qr-code-bg">
            <div className="col-md-4">
              <div className="qr-code-img">
                <ul>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/04/cair-manual.png" alt="QR code for manual" />
                  </li>
                  <li>
                    <h5>SCAN THE QR CODE</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="or-txt">
                <p>or</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <p>
                  <a
                    className="manual-btn"
                    href="https://www.pranaair.com/wp-content/uploads/2024/02/Prana-Air-Cair-Air-Quality-Monitor-Manual.pdf"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                      alt="brochure-icon"
                    />
                    Download Manual
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* airqulality contact Section */}
      <section className="airqulality_contact_section inner_container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">
                  Get in <span className="bold_text">Touch</span>
                </h2>
                <p>
                  Please help us know what requirements you have.
                  <br />
                  Our team will contact you very soon.
                </p>
              </div>

              <div className="row airquality_inner_form">
                <div className="contact_content_box col-md-3">
                  <div className="contact_information_box">
                    <h4>Contact Info</h4>
                    <p>Looking for Any Indoor Air Quality Monitor?</p>
                    <ul className="contact_info">
                      <li>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        Phone Number:
                        <br />
                        (+91) 73918-73918
                      </li>
                      <li>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        Email Address:
                        <br />
                        info@purelogic.in
                      </li>
                      <li>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        Office Location:
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
                    <form action="#" method="post" className="contact-form">
                      <div className="row">
                        <div className="col-12">
                          <p>
                            <label>
                              Your Full Name
                              <br />
                              <input type="text" name="your-name" className="form-control" required />
                            </label>
                          </p>
                        </div>

                        <div className="col-md-6">
                          <p>
                            <label>
                              Your Phone No
                              <br />
                              <input type="tel" name="phone" className="form-control" required />
                            </label>
                          </p>
                        </div>

                        <div className="col-md-6">
                          <p>
                            <label>
                              Your Email
                              <br />
                              <input type="email" name="your-email" className="form-control" required />
                            </label>
                          </p>
                        </div>

                        <div className="col-12">
                          <p>
                            <label>
                              Your Organisation
                              <br />
                              <input type="text" name="company-name" className="form-control" required />
                            </label>
                          </p>
                        </div>

                        <div className="col-12">
                          <p>
                            <label className="message_text">
                              Message
                              <br />
                              <textarea
                                name="your-message"
                                className="form-control"
                                rows="5"
                                placeholder="Write message here"
                              ></textarea>
                            </label>
                          </p>
                        </div>

                        <div className="col-12">
                          <p>
                            <input type="submit" value="Send Message" className="wpcf7-submit" />
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="faq-heading">
                <h2>FAQs of Cair+ Monitor</h2>
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
                      1. What does Prana Air Cair+ air quality monitor measure?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                      Prana Air Cair+ is an air quality monitor designed to measure indoor air pollutants - AQI, PM2.5,
                      PM10, CO2, TVOC, HCHO, Temperature, and Humidity. It provides accurate data on various pollutants,
                      helping you understand and improve your indoor air quality.
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
                      2. How does the device connect to the internet?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                      Cair+ monitor features WiFi connectivity, allowing it to seamlessly connect to your home network.
                      This enables you to access real-time air quality data on various devices, including your mobile,
                      tablet, TV app, and through a web dashboard.
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
                      3. What platforms are supported for accessing data?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                      Prana Air Cair+ device supports multiple platforms for data access. You can monitor air quality
                      data on your mobile devices (iOS and Android), tablets, and even your television. Additionally, a
                      web dashboard is available for easy access via a computer.
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
                      4. Is Cair+ monitor portable?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                      Yes, Prana Air Cair+ monitor is designed to be portable. Its compact size allows you to move it
                      around your living spaces effortlessly, ensuring that you can monitor air quality in different
                      rooms or areas of your home.
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
                      5. How accurate is the air quality data provided by Cair+?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                      Cair+ monitor is known for its high accuracy in measuring air quality. Its advanced sensors
                      provide precise readings of various pollutants, giving you reliable information to make informed
                      decisions about improving your indoor air quality.
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

