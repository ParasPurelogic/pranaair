"use client"

import { useState, useEffect } from "react"
import "react-multi-carousel/lib/styles.css"
import Image from "next/image"
import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link"
import Carousel from "react-multi-carousel"
import './style.css';
import ContactForm from "@/Components/Contacform/ContactForm";

export default function PMSensorPage() {
  // State for tabs in the product image section
  const [activeTab, setActiveTab] = useState("tab1")

  // State for indoor/outdoor sensor tabs
  const [activeSensorTab, setActiveSensorTab] = useState("outdoor")

  // Function to handle tab changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }

  // Function to handle sensor tab changes
  const handleSensorTabChange = (tabId) => {
    setActiveSensorTab(tabId)
  }

  // Responsive settings for the applications carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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

  // Responsive settings for the "You may also like" carousel
  const alsoLikeResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

  const appSensor = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 576 },
      items: 2,
    },
    smallMobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-heading">
                <h1>PM SENSOR (LASER)</h1>
                <p>
                  (PAS-OUT-01) - For outdoor air quality monitoring applications. Range up to{" "}
                  <span className="range">(0-31,000 µg/m³)</span>
                </p>
                <a href="#contact">
                  Request A Quote{" "}
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/12/btn-icon.jpg" alt="button icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Heading Section */}
      <div className="feature-heaidng">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="feature-heading">
                <h2>
                  Particulate Matter (PM) Sensor
                  <span className="amazing">amazing features</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <section className="feature-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="amazing-feature">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Fan-closed-loop-control-stable-flow.png"
                      alt="pm sensor of Fan"
                    />
                    <h3>Fan control for steady airflow</h3>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Own-fault-detection-function.png"
                      alt="pm sensor of Own fault"
                    />
                    <h3>Built-in fault detection</h3>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/anti-dust-duct.png"
                      alt="pm sensor of Design"
                    />
                    <h3>Dust-proof duct design</h3>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/easy-to-install.png"
                      alt="pm sensor of Small size and easy to install"
                    />
                    <div className="img-bx">
                      <h3>Small size and easy to install</h3>
                    </div>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/anti-interferene-ability.png"
                      alt="pm sensor of Strong"
                    />
                    <h3>Excellent resistance to interference</h3>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/moisture-proof-design.png"
                      alt="pm sensor of Circuit board"
                    />
                    <h3>Moisture-resistant circuit board</h3>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/multiple-communication.png"
                      alt="pm sensor of Multiple communication modes"
                    />
                    <div className="img-bx">
                      <h3>Multiple communication modes</h3>
                    </div>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/fast-detection-speed.png"
                      alt="pm sensor of Fast"
                    />
                    <h3>Quick detection capability</h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="tab-container">
                <div className="tab-content">
                  <div id="tab1" style={{ display: activeTab === "tab1" ? "block" : "none" }}>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/PM-Sensor-Front-View.webp"
                      alt="Prana Air PM Sensor"
                    />
                  </div>
                  <div id="tab2" style={{ display: activeTab === "tab2" ? "block" : "none" }}>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Particulate-matter-Sensor-Side-View.webp"
                      alt="Prana Air PM2.5 Sensor"
                    />
                  </div>
                  <div id="tab3" style={{ display: activeTab === "tab3" ? "block" : "none" }}>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/PM-Sensor-Metallic-Front-View.webp"
                      alt="Prana Air PM Sensor of metallic body"
                    />
                  </div>
                  <div id="tab4" style={{ display: activeTab === "tab4" ? "block" : "none" }}>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/PM-Sensor-Metallic-Side-View.webp"
                      alt="Prana Air PM2.5 Sensor of side view"
                    />
                  </div>
                </div>

                <div className="tabs">
                  <button
                    className={`tab-button ${activeTab === "tab1" ? "active" : ""}`}
                    onClick={() => handleTabChange("tab1")}
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/PM-Sensor-Front-View.webp"
                      alt="Prana Air PM Sensor"
                    />
                  </button>
                  <button
                    className={`tab-button ${activeTab === "tab2" ? "active" : ""}`}
                    onClick={() => handleTabChange("tab2")}
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Particulate-matter-Sensor-Side-View.webp"
                      alt="Prana Air PM2.5 Sensor"
                    />
                  </button>
                  <button
                    className={`tab-button ${activeTab === "tab3" ? "active" : ""}`}
                    onClick={() => handleTabChange("tab3")}
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/PM-Sensor-Metallic-Front-View.webp"
                      alt="Prana Air PM Sensor of metallic body"
                    />
                  </button>
                  <button
                    className={`tab-button ${activeTab === "tab4" ? "active" : ""}`}
                    onClick={() => handleTabChange("tab4")}
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/PM-Sensor-Metallic-Side-View.webp"
                      alt="Prana Air PM2.5 Sensor of side view"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PM Tech Section */}
      <section className="pm-tech-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="feature-heading">
                <h2>
                  PM Sensor
                  <span className="amazing">Laser Technology</span>
                </h2>
                <p>Light scattering Method</p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="tech-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/pm-laser-sensor-light-scattering-working-mechanism.webp"
                  alt="Prana Air PM laser sensor light scattering working mechanism"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Range Section */}
      <section className="range-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="range-para">
                <p>
                  PAS-OUT-01 is a Light-based designed Built for industries, digital laser sensor to measure particulate
                  matter – dust particles. Since it comes with an Inbuilt<span className="green"> laser</span> and
                  Light-based receiving module. Different than its contemporaries, PAS-OUT-01 is Set accurately for PM10
                  and PM2.5 Apart. Because it works on the principle of{" "}
                  <span className="green"> 90° light Spreading.</span>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="range-heading">
                <h3>
                  Range upto
                  <strong>(0-31,000 µg/m³)</strong>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Connectivity Section */}
      <section className="seamless-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="seamless-txt">
                <h2>Seamless Connectivity</h2>
              </div>
            </div>
          </div>
          <div className="row tab-row">
            <div className="col-md-9">
              <div className="aqi-box-bg">
                <div className="indoor-sensor">
                  <ul>
                    <li>
                      <img
                        className="pm-sensor"
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/pm-sensor-of-laser.webp"
                        alt="Prana Air PM2.5 sensor"
                      />
                    </li>
                    <li>
                      <h3>PM Sensor</h3>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/pm-sensor-and-air-quality-monitor.webp"
                        alt="pm sensor and air quality monitor"
                      />
                    </li>
                    <li>
                      <h3>Monitor and PM Sensor</h3>
                    </li>
                  </ul>
                </div>
                <div className="wifi-aqi">
                  <ul>
                    <li>
                      <img src="https://www.pranaair.com/wp-content/uploads/2025/01/wifi-connectivity.webp" alt="wifi connectivity" />
                    </li>
                    <li>
                      <h3>WiFi connectivity to the monitor</h3>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/aqi-cloud.png"
                        alt="aqi cloud data storage"
                      />
                    </li>
                    <li>
                      <h3>Sensors Data transmission to cloud.</h3>
                    </li>
                  </ul>
                </div>
                <div className="monitor">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/aqi-monitoring-platforms.webp"
                        alt="aqi monitoring platforms"
                      />
                    </li>
                    <li>
                      <h3>Displaying the Sensors data on mobile, laptop or TV.</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="seamless-para">
                <p>
                  The PM sensor has a compact design which allows the sensor to fit easily in any air quality monitor.
                  Besides, anyone can integrate or change the sensor without requiring advanced technical knowledge.
                  Also, the network access of the sensor is smooth as can directly transfer the data from the sensor to
                  cloud for easy technology for users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indoor/Outdoor Sensor Tab Section */}
      <section className="indoor-outdoor-sensor-tab-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tab-heading">
                <h2>PM Sensors for outdoor and indoor</h2>
                <p>
                  The PM Sensors has two options that meet the specific need of each environment so it offer optimal
                  performance and better air quality monitoring.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tab-box">
                <div className="tab-nav">
                  <button
                    className={`tab-title ${activeSensorTab === "outdoor" ? "active" : ""}`}
                    onClick={() => handleSensorTabChange("outdoor")}
                  >
                    Outdoor PM Sensor <i className="far fa-arrow-alt-circle-right"></i>
                  </button>
                  <button
                    className={`tab-title ${activeSensorTab === "indoor" ? "active" : ""}`}
                    onClick={() => handleSensorTabChange("indoor")}
                  >
                    Indoor PM Sensor <i className="far fa-arrow-alt-circle-right"></i>
                  </button>
                </div>

                <div className="tab-content">
                  {activeSensorTab === "outdoor" && (
                    <div className="sensnor-slider">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="tab-content-box">
                            <h2>
                              Experience the ease of advanced <strong> Outdoor Sensor</strong>
                            </h2>
                            <p>
                              The outdoor PM sensor is built to resist any harsh environmental conditions. Hence, the
                              advanced technology monitors the particulate matter levels in any open area. Moreover,
                              with advanced filtration systems, the sensor offers consistent and reliable air quality
                              data.
                            </p>
                            <a href="#contact">
                              Request A Quote{" "}
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2024/12/tab-btn.png"
                                alt="link icon"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="sensor-img">
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2025/01/prana-air-outdoor-pm-sensor.webp"
                              alt="prana air outdoor pm sensor"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSensorTab === "indoor" && (
                    <div className="sensnor-slider">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="tab-content-box">
                            <h2>
                              Experience the ease of advanced <strong> Indoor Sensor</strong>
                            </h2>
                            <p>
                              Indoor PM Sensor is designed to monitor air quality in closed spaces such as homes,
                              offices, schools and other indoor spaces. By doing so, it ensures the accurate measurement
                              of particulate matter levels in narrow spaces. Moreover, it is highly sensitive and can
                              detect even a small changes in the air, offering a reliable means of keeping a healthy
                              indoor atmosphere.
                            </p>
                            <a href="#">
                              Request A Quote{" "}
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2024/12/tab-btn.png"
                                alt="link icon"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="sensor-img">
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2025/01/prana-air-indoor-pm-sensor.webp"
                              alt="prana air indoor pm sensor"
                            />
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

      {/* Size Comparison Section */}
      <section className="size-compare-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="size-compare-img">
                <h2>PM Size Comparison</h2>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/12/PM2.5-size.webp"
                  alt="PM pollutant size comparison with human hair"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="size-compare-box-txt">
                <p>
                  Particulate Matter or PM is a mixture of tiny particles or liquid droplets. And these also emits in
                  the air from different sources. As a result, these particles can
                  enter the human lungs and cause many harm to
                  health.
                </p>
                <ul>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/12/pm1.webp" alt="PM1 size 1µm" />
                  </li>
                  <li>
                    <h3>PM1</h3>
                    <p>Smaller than or 1µm</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2025/01/pm2.5.png" alt="PM2 size 2.5µm" />
                  </li>
                  <li>
                    <h3>PM2.5</h3>
                    <p>Smaller than or 2.5µm</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2025/01/pm10.png" alt="PM10 size 10µm" />
                  </li>
                  <li>
                    <h3>PM10</h3>
                    <p>Smaller than or 10µm</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Particulate Matter Heading */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="particulate-matter-heading">
              <h2>The Tiny Threats in the Air: Particulate Matter</h2>
              <p>
                Particulate Matter (PM) comes in various sizes as{" "}
                <a href="https://www.aqi.in/blog/pm2-5-pollution-is-threatening-the-tourism-industry-in-bali/">PM2.5</a>{" "}
                (particles smaller than 2.5 microns) and PM10 (particles smaller than 10 microns) the most common.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section className="experince-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="experince-heading">
                <ul>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/12/pm1.webp" alt="PM1 pollutant icon" />
                    PM1
                  </li>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2025/01/pm10.png" alt="PM10 pollutant icon" />
                    PM10
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/pm2.5.png"
                      alt="PM2.5 pollutant icon"
                    />
                    PM2.5
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/pm2.5.png"
                      alt="PM2.5 pollutant icon"
                    />
                    PM2.5
                  </li>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/12/pm1.webp" alt="PM1 pollutant icon" />
                    PM1
                  </li>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2025/01/pm10.png" alt="PM10 pollutant icon" />
                    PM10
                  </li>
                </ul>
              </div>
              <div className="pm-indoor-heading">
                <h3>Know about each PM size</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Black Background Section */}
      <div className="black-bg">
        <div className="container">
          <div className="row pm-indoor-bg">
            <div className="col-md-12">
              <ul>
                <li>
                  <h4>PM1</h4>
                  <p>
                    PM1 are the particles with a diameter of 1 micrometre or smaller which also includes nanoparticles
                    and emissions from burning. Hence, these can easily enter the blood flow and cause health
                    conditions.
                  </p>
                </li>
                <li>
                  <h4>PM2.5</h4>
                  <p>
                    PM2.5 refers to fine particles with a diameter of 2.5 micrometres or more smaller. Because of their
                    tiny size, these are enough to enter deep into the lungs and result in severe health issues.
                  </p>
                </li>
                <li>
                  <h4>PM10</h4>
                  <p>
                    The particles in the air with a diameter of 10 micrometres or others smaller than PM10. It includes
                    dust, pollen and mould and is large enough that mostly trapped in the nose or throat and results in
                    allergies.
                  </p>
                </li>
                <li>
                  <h4>Particle Count</h4>
                  <p>
                    Lastly, these represent the total number of particles present in the air, without considering their
                    individual sizes. Instead, it focuses on the overall particle load, including particles of various
                    sizes.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Source Section */}
      <section className="source-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="source-box">
                <h2>Sources:</h2>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Vehicle-Exhaust.webp"
                      alt="Vehicle Exhaust as source of PM pollutant"
                    />
                    Vehicle Exhaust
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Factory-Emission.webp"
                      alt="Factory Emission as source of PM pollutant"
                    />
                    Factory Emission
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Construction-sites-area.webp"
                      alt="Construction sites as source of PM pollutant"
                    />
                    Construction sites
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Wildfires.webp"
                      alt="Wildfires as source of PM pollutant"
                    />
                    Wildfires
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Dusty-roads.webp"
                      alt="Dusty roads as source of PM pollutant"
                    />
                    Dusty roads
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Chart Section */}
      <section className="comapre-chart-sec">
        <div className="container">
          <div className="row border-line">
            <div className="col-md-12">
              <div className="data-compare-chart-heading">
                <h2>Data Accuracy Level Comparison Chart With BAM</h2>
              </div>
              <div className="data-compare-chart-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/data-accuracy-of-prana-air-pm2.5-sensor.webp"
                  alt="data accuracy of Prana Air PM2.5 sensor comparing with BAM data"
                />
              </div>
            </div>
          </div>
          <div className="row border-line border-left">
            <div className="col-md-6">
              <div className="comapre-chart-para">
                <p>
                  In a comprehensive comparative study evaluating the data accuracy of Prana Airs PM2.5 sensor against
                  a high-end Beta Attenuation Monitoring (BAM) system.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="comapre-chart-para">
                <p>Furthermore, the results demonstrated a high correlation between the two devices.</p>
              </div>
            </div>
          </div>
          <div className="row border-line border-bg">
            <div className="col-md-12">
              <div className="clinet-heading">
                <h3>Happy to serve our clients</h3>
              </div>
              <div className="container">
                <div className="marquee">
                  <div className="marquee-inner">
                    <div className="marquee-img-box">
                      <ul>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/Symbiosis-Pune.webp"
                            alt="Symbiosis Pune logo"
                          />
                        </li>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/taj.webp"
                            alt="taj logo"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="marquee-img-box">
                      <ul>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/TATA-Steel-Jamshedpur.webp"
                            alt="TATA Steel Jamshedpur logo"
                          />
                        </li>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/UOC.webp"
                            alt="UOC logo"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="marquee-img-box">
                      <ul>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/WRI.webp"
                            alt="WRI logo"
                          />
                        </li>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/Adani-Group.webp"
                            alt="Adani Group logo"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="marquee-img-box">
                      <ul>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/BARC-Bhabha-Atomic-Research-Centre.webp"
                            alt="BARC Bhabha Atomic Research Centre logo"
                          />
                        </li>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/BCG-Boston-Consulting-Group.webp"
                            alt="BCG Boston Consulting Group logo"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="marquee-img-box">
                      <ul>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/BIRLA-Ultratech.webp"
                            alt="BIRLA Ultratech logo"
                          />
                        </li>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/BITS-pilani.webp"
                            alt="BITS pilani logo"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* app sensor Section */}
      <section className="app-sensor-sec">
        <div className="container">
          <div className="row br-btm">
            <div className="col-sm-6">
              <div className="feature-heading fadeInUp animated">
                <h2>
                  PM air quality sensor
                  <br />
                  <span className="amazing">applications</span>
                </h2>
              </div>
            </div>
            <div className="col-sm-6">{/* This column was empty in the original code */}</div>
          </div>

          <div className="row visible-box">
            <div className="col-sm-12">
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 400ms ease-in-out"
                transitionDuration={400}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding"
                showDots={true}
                arrows={false}
              >
                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Airport.webp"
                      alt="application of PM sensor in airports"
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>Airport</h4>
                </div>

                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Homes.webp"
                      alt="application of PM sensor at home"
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>Homes</h4>
                </div>

                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Office.webp"
                      alt="application of PM sensor in offices"
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>Offices</h4>
                </div>

                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Railway-stations.webp"
                      alt="application of PM sensor in railway stations"
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>Railway Stations</h4>
                </div>

                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Schools.webp"
                      alt="application of PM sensor in schools"
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>Schools</h4>
                </div>

                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Smart-citie.webp"
                      alt="application of PM sensor for smart cities"
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>Smart cities</h4>
                </div>

                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Construction-sites.webp"
                      alt="application of PM sensor for construction sites"
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>Construction sites</h4>
                </div>

                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Factories-and-warehouse.webp"
                      alt="application of PM sensor in factories and warehouses"
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>Factories and warehouse</h4>
                </div>

                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Health-care-facilities.webp"
                      alt="application of PM sensor in healthcare facilities"
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>Health care facilities</h4>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* construction site Section */}
      <section className="construction-site-sec">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="construction-heading fadeInUp animated">
                <h2>Construction Sites Covered by Prana Airs PM2.5 Sensor</h2>
                <p>
                  The PM Sensor has been used across multiple construction sites to monitor high PM levels produced from
                  various activities at these sites. As a result, it helps ensure real-time tracking of air quality and
                  enables timely interventions when necessary.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="construction-btn fadeInUp animated">
                <p>
                  <Link href="https://www.pranaair.com/solutions-by-application/constructions/" className="btn-link">
                    Construction Sites <Image src="https://www.pranaair.com/wp-content/uploads/2024/12/tab-btn.png" alt="button icon" width={20} height={20} />
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="construction-bg">
                <ul className="construct-site">
                  <li>
                    <h3>500+</h3>
                  </li>
                  <li>Sites Covered</li>
                </ul>
                <ul className="dpcc">
                  <li>
                    <Image src="https://www.pranaair.com/wp-content/uploads/2025/01/DPCC-logo.png" alt="DPCC Logo" width={80} height={80} />
                  </li>
                  <li>
                    Sites Covered
                    <br />
                    <h4>DPCC Guidelines</h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">{/* This column was empty in the original code */}</div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="feature-heading">
                <h2>
                  Outdoor PM
                  <span className="amazing">Case Study</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row laser-br">
            <div className="col-md-6">
              <div className="laser-heading">
                <h3>Laser PM sensor Case Study - I</h3>
                <h4>Comparative Evaluation of New Low-Cost Particulate Matter Sensors</h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="laser-para">
                <p>
                  <strong>Study Brief</strong> : So, the paper involves our Prana Air device alongside other low-cost
                  sensors for PM2.5 and PM10 measurements. For the results, they compared them to the standard Aeroqual
                  Series-500. Since, their challenge with traditional devices was the high cost, heaviness, and frequent
                  service needs, which limited usin in cities.
                </p>
              </div>
              <div className="laser-author">
                <p>
                  - <strong>By Dr. Sachin Chaudhari,</strong>
                  International Institute of Information Technology Hyderabad, India
                </p>
              </div>
            </div>
          </div>
          <div className="row calibration-bg">
            <div className="col-md-7">
              <div className="note-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/pm2.5-calibration.webp"
                  alt="comparison of PM sensor data between Aeroqual and Prana Air before and after calibration"
                />
                <p className="pm-note-para">
                  <strong>Note :</strong> Monitors update in every 30 seconds, moreover our PM sensors have a resolution
                  of ±1.0 micrograms per cubic meter, and our NO2 sensors boast a resolution of ±1.0 ppb.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="study-link">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/full-study-here.webp"
                  alt="case study of low-cost PM sensor using Prana Air's sensors by By Dr. Sachin Chaudhari, International Institute of Information Technology Hyderabad, India"
                />
                <p className="study-para">
                  Find Full Study Here :
                  <a href="https://www.pranaair.com/wp-content/uploads/2025/01/C33_Comp_Eval_PM_Sensors_FiCloud2021_Ishan.pdf">
                    https://pubmed.ncbi.nlm.nih.gov/37318651/
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row laser-br green-bg">
            <div className="col-md-6">
              <div className="laser-heading">
                <h3>Laser PM sensor Case Study - II</h3>
                <h4>
                  Performance‐based protocol for selection of Affordable and easy to carry sensor for air quality
                  measurement
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="laser-para">
                <p>
                  <strong>Study Brief :</strong> In their research, they used our device in their Environmental
                  Protection Sensors (EPS) assessment. So in this, they compared factory calibration data with reference
                  monitors. Because, their challenge was reasonable cost with accuracy, sensitivity, and data
                  management. In the result, Prana Air proved to be a reliable and affordable choice.
                </p>
              </div>
              <div className="laser-author">
                <p>
                  - <strong>By Dr. Sunil Gulia,</strong>
                  National Environmental Engineering Research Institute, New Delhi, India
                </p>
              </div>
            </div>
          </div>
          <div className="row case-bg">
            <div className="col-md-12">
              <div className="laser-pm-case">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/economical-portable-sensor-eps.webp"
                      alt="Case Study of economical portable sensor by By Dr. Sunil Gulia, National Environmental Engineering Research Institute, New Delhi, India"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/ranking-eps.webp"
                      alt="Ranking of EPS for air quality assessment from the case study By Dr. Sunil Gulia, National Environmental Engineering Research Institute, New Delhi, India"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/ranking-of-eps-on-physical.webp"
                      alt="Ranking of EPS on physical features and cost from the case study By Dr. Sunil Gulia, National Environmental Engineering Research Institute, New Delhi, India"
                    />
                    <p className="study-para">
                      Find Full Study Here :
                      <a href="https://www.pranaair.com/wp-content/uploads/2025/01/0e5918e1-0456-44a7-847e-a576447b8c62_230615_221224.pdf">
                        https://pubmed.ncbi.nlm.nih.gov/37318651/
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Impact Section */}
      <section className="health-impact-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="healt-impact-heading">
                <h2>Health Impacts - Why it is important to measure particulate matter?</h2>
              </div>
            </div>
          </div>
          <div className="mob-flex">
            <div className="col-md-1/5">
              <div className="healt-impact-img">
                <img src="https://www.pranaair.com/wp-content/uploads/2025/01/Asthma-and-allergies.webp" alt="Asthma" />
                <h4>Asthma and Triggers</h4>
              </div>
            </div>
            <div className="col-md-1/5">
              <div className="healt-impact-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/High-risk-of-lung-cancer.webp"
                  alt="High risk of lung cancer as health impacts by particulate matters"
                />
                <h4>High risk of lung cancer</h4>
              </div>
            </div>
            <div className="col-md-1/5">
              <div className="healt-impact-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/Respiratory-infections.webp"
                  alt="Respiratory infections as health impact by particulate matters"
                />
                <h4>Respiratory infections</h4>
              </div>
            </div>
            <div className="col-md-1/5">
              <div className="healt-impact-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/Lung-diseases.webp"
                  alt="Lung diseases as health impact by particulate matters"
                />
                <h4>Lung diseases</h4>
              </div>
            </div>
            <div className="col-md-1/5">
              <div className="healt-impact-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/Heart-related-issues.webp"
                  alt="Heart-related issues as health impact by particulate matters"
                />
                <h4>Heart-related issues</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="tech-spec-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tech-spec-heading">
                <h2>Technical Specifications</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="construction-btn">
                <ul>
                  <li>
                    <a href="#">
                      Arduino Code
                      <img src="https://www.pranaair.com/wp-content/uploads/2024/12/tab-btn.png" alt="link icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pranaair.com/wp-content/uploads/2025/01/prana-air-pas-out-1-outdoor-pm-sensor-datasheet.pdf">
                      Datasheet
                      <img src="https://www.pranaair.com/wp-content/uploads/2024/12/tab-btn.png" alt="link icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="tech-spec-tabel">
                <ul>
                  <li>
                    <h3>Product Name:</h3>
                  </li>
                  <li>
                    <h4>PM Sensor</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>Rated voltage:</h3>
                  </li>
                  <li>
                    <h4>5V</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>Communication Port Level:</h3>
                  </li>
                  <li>
                    <h4>3.3 V</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>Dimensions L x W x H :</h3>
                  </li>
                  <li>
                    <h4>4.5 x 4.5 x 2 cm</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>Particle Size Resolution:</h3>
                  </li>
                  <li>
                    <h4>0.3 µm</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>Storage Temperature :</h3>
                  </li>
                  <li>
                    <h4>-20~85 C°</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>Working Temperature:</h3>
                  </li>
                  <li>
                    <h4>-20~70 C°</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>Working humidity:</h3>
                  </li>
                  <li>
                    <h4>0~99C%RH (No Moisture formation)</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>Rated current:</h3>
                  </li>
                  <li>
                    <h4>70mA</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>Mass concentration data resolution:</h3>
                  </li>
                  <li>
                    <h4>1 μg/m3</h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="outdoor-bg-box">
                <ul>
                  <li>
                    <h3>Outdoor Sensor Dimensions</h3>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/outdoor-PM-sensor-dimensions.png"
                      alt="Prana Air outdoor PM sensor dimensions"
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>Indoor Sensor Dimensions</h3>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Indoor-Sensor-Dimensions.png"
                      alt="Prana Air indoor PM sensor dimensions"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="airqulality_contact_section inner_container" id="contact">
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
        <ContactForm pageName="Outdoor Pm Sensor Page" />
      </section>

      {/* You May Also Like Section */}
      <section className="also-like">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="also-like-heading">
                <h2>You may also like</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Carousel
                responsive={alsoLikeResponsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5s"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/CO2-gas-sensor.jpg"
                      alt="prana air co2 sensor"
                    />
                  </a>
                  <h5>
                    Co2 Sensor{" "}
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/CO-gas-sensor.jpg"
                      alt="Prana Air CO gas sensor"
                    />
                  </a>
                  <h5>
                    CO Sensor{" "}
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Ammonia-gas-sensor.jpg"
                      alt="prana air ammonia sensor NH3"
                    />
                  </a>
                  <h5>
                    Ammonia Sensor{" "}
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/H2S-gas-sensor.jpg"
                      alt="Prana Air H2S sensor"
                    />
                  </a>
                  <h5>
                    H2S Sensor{" "}
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Ozone-gas-sensor.jpg"
                      alt="Prana Air Ozone sensor O3"
                    />
                  </a>
                  <h5>
                    Ozone Gas{" "}
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Chlorine-gas-sensor.jpg"
                      alt="Prana Air Chlorine sensor "
                    />
                  </a>
                  <h5>
                    Chlorine Gas{" "}
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/SO2-gas-sensor.jpg"
                      alt="Prana Air SO2 sensor"
                    />
                  </a>
                  <h5>
                    SO2 Sensor{" "}
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/No2-gas-sensor.jpg"
                      alt="Prana Air NO2 sensor"
                    />
                  </a>
                  <h5>
                    NO2 Sensor{" "}
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

