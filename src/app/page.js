"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function PranaAirHomepage() {
  // State for slider
  const [currentSlide, setCurrentSlide] = useState(0)
  // State for product tabs
  const [activeTab, setActiveTab] = useState(0)
  // State for connectivity tabs
  const [activeConnectivityTab, setActiveConnectivityTab] = useState(1)

  // Auto-rotate slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Function to activate custom tab
  const activateCustomTab = (index) => {
    setActiveTab(index)
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content-wrapper">
            {/* Left Column - Text Content */}
            <div className="hero-text-content">
              <h1>
                Simplify Your <span className="text-highlight">Air Quality Monitoring</span>
              </h1>
              <p>Keep tabs on your indoor and outdoor air quality index using cutting-edge technology devices.</p>
              <Link href="/explore" className="hero-button">
                Explore More
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/hero-button-icon.png"
                  alt="Button icon"
                  width={100}
                  height={100}
                  className="hero-button-icon"
                />
              </Link>
            </div>

            {/* Right Column - Image Grid */}
            <div className="hero-image-grid">
              <div className="slider-container">
                <div className={`slider-item ${currentSlide === 0 ? "active" : ""}`}>
                  <div className="all-device">
                    <ul>
                      <li>
                        <Link href="/products/sensible-plus">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-air-sensible-plus-monitor.webp"
                            alt="prana air sensible plus indoor air quality monitor"
                            width={300}
                            height={200}
                            className="device-image"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://play.google.com/store/apps/details?id=com.aqi.data">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-air-Insightful-data.webp"
                            alt="aqi web-dashboard for prana air's air quality monitors"
                            width={300}
                            height={200}
                            className="device-image"
                          />
                        </Link>
                      </li>
                    </ul>
                    <ul className="second-row">
                      <li className="mt">
                        <Link href="/products/pocket-pm25">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/10/Pocket-PM2.5-Monitor-WiFi.webp"
                            alt="prana air pocket pm2.5 monitor"
                            width={300}
                            height={200}
                            className="device-image"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/cair-plus">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/10/Cair-plus-Indoor-Air-Quality-Monitor.webp"
                            alt="prana air cair+ indoor air quality monitor"
                            width={300}
                            height={200}
                            className="device-image"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`slider-item ${currentSlide === 1 ? "active" : ""}`}>
                  <div className="all-device">
                    <ul>
                      <li>
                        <Link href="/products/prana-sense">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/10/Highly-accurate-prana-senes-monitor.webp"
                            alt="prana air prana sense ambient air quality monitor"
                            width={300}
                            height={200}
                            className="device-image"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/co2-monitor">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/10/Worlds-Smallest-CO2-Monitor.webp"
                            alt="prana air co2 air quality monitor"
                            width={300}
                            height={200}
                            className="device-image"
                          />
                        </Link>
                      </li>
                    </ul>
                    <ul className="second-row">
                      <li className="mt">
                        <Link href="/products/sensible">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/10/sensible-monitor.webp"
                            alt="prana air sensible indoor air quality monitor"
                            width={300}
                            height={200}
                            className="device-image"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.aqi.in/">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/10/aqi-website.webp"
                            alt="aqi dashboard"
                            width={300}
                            height={200}
                            className="device-image"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Parameters Section */}
      <section className="explore-functionality-sec">
        <div className="container">
          <div className="parameters-content">
            <div className="function-txt">
              <h2>Stay Ahead: Guard Yourself Against Harmful Pollutants!</h2>
              <p>
                According to the World Health Organization (WHO), air pollution causes around 7 million premature deaths
                each year due to various diseases. Including heart disease, stroke, chronic obstructive pulmonary
                disease, lung cancer, and acute respiratory infections.
              </p>
            </div>
            <div className="parameter-box">
              <div className="firstn">
                <a href="https://www.pranaair.com/what-is-particulate-matter-pm/" className="parameter-btn param-1">
                  <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-pm10.png" alt="pm10 pollutant" width={55} height={55} />
                  PM10
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="button icon"
                    width={15}
                    height={15}
                  />
                </a>

                <a href="https://www.pranaair.com/what-is-nitrogen-dioxide-no2/" className="parameter-btn param-2">
                  <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-no2.png" alt="no2 pollutant" width={55} height={55} />
                  NO2
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="button icon"
                    width={15}
                    height={15}
                  />
                </a>

                <a href="https://www.pranaair.com/what-is-ozone-o3/" className="parameter-btn param-3">
                  <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-o3.png" alt="ozone pollutant" width={55} height={55} />
                  O3
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="button icon"
                    width={15}
                    height={15}
                  />
                </a>
              </div>
              <div className="firstn">
                <a href="https://www.pranaair.com/what-is-carbon-monoxide-co/" className="parameter-btn param-4">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/co-parameter.png"
                    alt="co pollutant"
                    width={55}
                    height={55}
                  />
                  CO
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="pollutant icon"
                    width={15}
                    height={15}
                  />
                </a>

                <a href="https://www.pranaair.com/what-is-particulate-matter-pm/" className="parameter-btn param-5">
                  <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-pm2.5.png" alt="pm2.5 pollutant" width={55} height={55} />
                  PM2.5
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="pollutant icon"
                    width={15}
                    height={15}
                  />
                </a>

                <a href="https://www.pranaair.com/what-is-hydrogen-sulfide-h2s/" className="parameter-btn param-6">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-h2s.png"
                    alt="h2s pollutant"
                    width={55}
                    height={55}
                  />
                  H2S
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="pollutant icon"
                    width={15}
                    height={15}
                  />
                </a>
              </div>
              <div className="firstn last-para">
                <a href="https://www.pranaair.com/what-is-sulfur-dioxide-so2/" className="parameter-btn param-7">
                  <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-so2.png" alt="so2 pollutant" width={55} height={55} />
                  SO2
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="pollutant icon"
                    width={15}
                    height={15}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Air Quality Section */}
      <section className="discover-air-quality">
        <div className="container">
          <div className="row-line">
            <div className="discover-header">
              <div className="discover-air-quality-heading">
                <h2>Discover the Ultimate Air Quality Solutions</h2>
              </div>
              <div className="discover-air-quality-para">
                <p>
                  Prana Air offers a range of advanced air quality monitors, sensors, purifiers designed for every
                  environment, ensuring you can breathe clean air wherever you are.
                </p>
              </div>
            </div>
          </div>

          <div className="discover-content">
            <div className="tabs-container">
              <div className="custom-tabs">
                <div className={`custom-tab ${activeTab === 0 ? "active" : ""}`} onClick={() => activateCustomTab(0)}>
                  <div className="product-catgeory">
                    <h3>
                      Air Quality Monitors <i className="tab-arrow"></i>
                    </h3>
                  </div>
                </div>
                <div className={`custom-tab ${activeTab === 1 ? "active" : ""}`} onClick={() => activateCustomTab(1)}>
                  <div className="product-catgeory">
                    <h3>
                      Air Quality Sensors <i className="tab-arrow"></i>
                    </h3>
                  </div>
                </div>
                <div className={`custom-tab ${activeTab === 2 ? "active" : ""}`} onClick={() => activateCustomTab(2)}>
                  <div className="product-catgeory">
                    <h3>
                      Air Quality PCBs <i className="tab-arrow"></i>
                    </h3>
                  </div>
                </div>
                <div className={`custom-tab ${activeTab === 3 ? "active" : ""}`} onClick={() => activateCustomTab(3)}>
                  <div className="product-catgeory">
                    <h3>
                      Weather Station <i className="tab-arrow"></i>
                    </h3>
                  </div>
                </div>
                <div className={`custom-tab ${activeTab === 4 ? "active" : ""}`} onClick={() => activateCustomTab(4)}>
                  <div className="product-catgeory">
                    <h3>
                      Air Purifiers <i className="tab-arrow"></i>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="custom-content-container">
              {/* Air Quality Monitors Tab Content */}
              <div className={`custom-content ${activeTab === 0 ? "active" : ""}`}>
                <div className="aq-monitor-box">
                  <div className="discover-air-quality-page-img">
                    <Link
                      href="https://www.pranaair.com/air-quality-monitor/handheld/pocket-monitor/"
                      className="page-link"
                    >
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-pocket-pm2.5-monitor-portable-PM2.5-Monitor.jpg"
                        alt="prana air pocket pm2.5 monitor portable"
                        width={400}
                        height={200}
                        className="monitor-image"
                      />
                      <ul>
                        <li>Pocket PM2.5 Monitor</li>
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                            alt="arrow icon"
                            width={15}
                            height={15}
                            className="arrow-icon"
                          />
                        </li>
                      </ul>
                    </Link>
                  </div>
                  <div className="discover-air-quality-page-img">
                    <Link href="https://www.pranaair.com/air-quality-monitor/air-drone/" className="page-link">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-Air-Quality-Drone.jpg"
                        alt="prana air air quality drone"
                        width={400}
                        height={200}
                        className="monitor-image"
                      />
                      <ul>
                        <li>Air Quality Drone</li>
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                            alt="arrow icon"
                            width={15}
                            height={15}
                            className="arrow-icon"
                          />
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>
                <div className="aq-monitor-last">
                  <div className="discover-air-quality-page-img cair-monitor">
                    <Link href="https://www.pranaair.com/air-quality-monitor/cair-monitor/" className="page-link">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-indoor-Cair-Monitor.jpg"
                        alt="prana air cair indoor air quality monitor"
                        width={400}
                        height={200}
                        className="monitor-image"
                      />
                      <ul>
                        <li>Cair + Monitor</li>
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                            alt="arrow icon"
                            width={15}
                            height={15}
                            className="arrow-icon"
                          />
                        </li>
                      </ul>
                    </Link>
                  </div>
                  <div className="discover-air-quality-page-img cair-monitor ambient-lite">
                    <Link
                      href="https://www.pranaair.com/air-quality-monitor/ambient-air-monitor/"
                      className="page-link"
                    >
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-Ambient-Lite-monitor.jpg"
                        alt="prana air ambient air quality monitor"
                        width={400}
                        height={200}
                        className="monitor-image"
                      />
                      <ul>
                        <li>Ambient Lite Monitor</li>
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                            alt="arrow icon"
                            width={15}
                            height={15}
                            className="arrow-icon"
                          />
                        </li>
                      </ul>
                    </Link>
                  </div>
                  <div className="see-more-box">
                    <Link href="https://www.pranaair.com/air-quality-monitor/" className="see-more">
                      Know More
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                        alt="arrow icon"
                        width={15}
                        height={15}
                        className="arrow-icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Air Quality Sensors Tab Content */}
              <div className={`custom-content ${activeTab === 1 ? "active" : ""}`}>
                <div className="sensor-row">
                  <ul className="all-sensor">
                    <li>
                      <div className="discover-air-sensor-page-img">
                        <Link
                          href="https://www.pranaair.com/air-quality-sensor/outdoor-pm-sensor/"
                          className="sensor-page-link"
                        >
                          <div className="img-box">
                            <Image
                              src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-pm-sensor.jpg"
                              alt="prana air outdoor pm2.5 sensor"
                              width={250}
                              height={150}
                              className="sensor-image"
                            />
                          </div>
                          <ul>
                            <li>PM Sensor</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="discover-air-sensor-page-img">
                        <Link
                          href="https://www.pranaair.com/air-quality-sensor/carbon-dioxide-co2-sensor/"
                          className="sensor-page-link"
                        >
                          <div className="img-box">
                            <Image
                              src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-co2-sensor.jpg"
                              alt="prana air ndir co2 sensor"
                              width={250}
                              height={150}
                              className="sensor-image co2-sensor-img"
                            />
                          </div>
                          <ul>
                            <li>CO2 Sensor</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="discover-air-sensor-page-img">
                        <Link
                          href="https://www.pranaair.com/air-quality-sensor/carbon-monoxide-co-sensor/"
                          className="sensor-page-link"
                        >
                          <div className="img-box">
                            <Image
                              src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-co-sensor.jpg"
                              alt="prana air co sensor"
                              width={250}
                              height={150}
                              className="sensor-image"
                            />
                          </div>
                          <ul>
                            <li>CO Sensor</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="discover-air-sensor-page-img">
                        <Link
                          href="https://www.pranaair.com/air-quality-sensor/sulfur-dioxide-so2-sensor/"
                          className="sensor-page-link"
                        >
                          <div className="img-box">
                            <Image
                              src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-so2-sensor.jpg"
                              alt="prana air so2 sensor"
                              width={250}
                              height={150}
                              className="sensor-image"
                            />
                          </div>
                          <ul>
                            <li>SO2 Sensor</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <ul className="all-sensor">
                    <li>
                      <div className="discover-air-sensor-page-img">
                        <Link
                          href="https://www.pranaair.com/air-quality-sensor/ammonia-nh3-sensor/"
                          className="sensor-page-link"
                        >
                          <div className="img-box">
                            <Image
                              src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-ammonia-sensor.jpg"
                              alt="prana air nh3 ammonia sensor"
                              width={250}
                              height={150}
                              className="sensor-image"
                            />
                          </div>
                          <ul>
                            <li>NH3 Sensor</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="discover-air-sensor-page-img">
                        <Link
                          href="https://www.pranaair.com/air-quality-sensor/ozone-o3-sensor/"
                          className="sensor-page-link"
                        >
                          <div className="img-box">
                            <Image
                              src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-ozone-sensor.jpg"
                              alt="prana air o3 ozone sensor"
                              width={250}
                              height={150}
                              className="sensor-image"
                            />
                          </div>
                          <ul>
                            <li>Ozone Sensor</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="discover-air-sensor-page-img">
                        <Link
                          href="https://www.pranaair.com/air-quality-sensor/nitrogen-dioxide-no2-sensor/"
                          className="sensor-page-link"
                        >
                          <div className="img-box">
                            <Image
                              src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-no2-sensor.jpg"
                              alt="prana air no2 sensor"
                              width={250}
                              height={150}
                              className="sensor-image"
                            />
                          </div>
                          <ul>
                            <li>NO2 Sensor</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="knwo-more-box">
                        <Link href="https://www.pranaair.com/air-quality-sensor/" className="see-more">
                          Know More
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                            alt="arrow icon"
                            width={15}
                            height={15}
                            className="arrow-icon"
                          />
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Air Quality PCBs Tab Content */}
              <div className={`custom-content ${activeTab === 2 ? "active" : ""}`}>
                <div className="aq-monitor-pcb-box">
                  <div className="discover-air-quality-pcb-page-img">
                    <Link href="https://www.pranaair.com/air-quality-pcb-board/" className="pcb-page-link">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/09/pranaair-pcb-board.webp"
                        alt="air quality pcb boards of prana air"
                        width={500}
                        height={300}
                        className="pcb-image"
                      />
                      <ul>
                        <li>Air Quality PCBs</li>
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                            alt="arrow icon"
                            width={15}
                            height={15}
                            className="arrow-icon"
                          />
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Weather Station Tab Content */}
              <div className={`custom-content ${activeTab === 3 ? "active" : ""}`}>
                <div className="aq-monitor-pcb-box">
                  <div className="discover-air-quality-pcb-page-img weather-st-img">
                    <Link
                      href="https://www.pranaair.com/air-quality-monitor/weather-station/"
                      className="pcb-page-link"
                    >
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-Weather-station.jpg"
                        alt="Weather station of prana air"
                        width={500}
                        height={300}
                        className="weather-image"
                      />
                      <ul>
                        <li>Weather Station</li>
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                            alt="arrow icon"
                            width={15}
                            height={15}
                            className="arrow-icon"
                          />
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Air Purifiers Tab Content */}
              <div className={`custom-content ${activeTab === 4 ? "active" : ""}`}>
                <div className="aq-monitor-box">
                  <div className="discover-air-quality-page-img">
                    <Link href="https://www.pranaair.com/wearable-air-purifier/" className="page-link">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-Hanging-Purifier.jpg"
                        alt="prana air wearable personal air purifier"
                        width={400}
                        height={200}
                        className="purifier-image"
                      />
                      <ul>
                        <li>Wearable Air Purifier</li>
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                            alt="arrow icon"
                            width={15}
                            height={15}
                            className="arrow-icon"
                          />
                        </li>
                      </ul>
                    </Link>
                  </div>
                  <div className="discover-air-quality-page-img">
                    <Link href="https://www.pranaair.com/fresh-air-machine/" className="page-link">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-Fresh-air-Machine.jpg"
                        alt="prana air fresh air machine as air quality solution"
                        width={400}
                        height={200}
                        className="purifier-image"
                      />
                      <ul>
                        <li>Fresh air machine</li>
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                            alt="arrow icon"
                            width={15}
                            height={15}
                            className="arrow-icon"
                          />
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>
                <div className="aq-monitor-last">
                  <div className="discover-air-quality-page-img cair-monitor ambient-lite">
                    <Link href="https://www.pranaair.com/outdoor-air-purifier/" className="page-link">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-outdoor-air-Purifier.jpg"
                        alt="prana air outdoor air purifier"
                        width={400}
                        height={200}
                        className="purifier-image"
                      />
                      <ul>
                        <li>Outdoor air Purifier</li>
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                            alt="arrow icon"
                            width={15}
                            height={15}
                            className="arrow-icon"
                          />
                        </li>
                      </ul>
                    </Link>
                  </div>
                  <div className="discover-air-quality-page-img cair-monitor ambient-lite">
                    <Link href="https://www.pranaair.com/car-air-filter/" className="page-link">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-Car-cabin-filters.jpg"
                        alt="prana air anti pollution car air filter"
                        width={400}
                        height={200}
                        className="purifier-image"
                      />
                      <ul>
                        <li>Car Cabin Filter</li>
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                            alt="arrow icon"
                            width={15}
                            height={15}
                            className="arrow-icon"
                          />
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Shopping Section */}
        <div className="shopping-section">
          <div className="container">
            <div className="shopping-content">
              <div className="experince-heading">
                <h3>Experience the convenience of shopping</h3>
              </div>
              <div className="experience-function">
                <ul className="experince-shoping">
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/shipping-truck.png"
                      alt="Free Shipping icon"
                      width={45}
                      height={45}
                    />
                    Global Shipping
                  </li>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Quick-Delivery.png"
                      alt="quick delivery icon"
                      width={45}
                      height={45}
                    />
                    Quick Delivery
                  </li>
                </ul>
                <ul className="experince-shoping">
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Warranty-Products.png"
                      alt="warranty products icon"
                      width={45}
                      height={45}
                    />
                    Warranty Products
                  </li>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Return-Policy.png"
                      alt="return policy icon"
                      width={45}
                      height={45}
                    />
                    Return Policy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Connectivity Section */}
      <section className="seamless-connective">
        <div className="container">
          <div className="connectivity-header">
            <div className="seamless-connect-heading">
              <h2>Seamless Connectivity for Air Quality Monitoring</h2>
            </div>
            <div className="seamless-txt">
              <p>
                Connect Prana Airs air quality monitoring devices effortlessly, designed for seamless integration with
                AQI platforms.
              </p>
            </div>
          </div>

          <div className="seamless-tab">
            <div className="tabs-header">
              <button
                className={`tab-button ${activeConnectivityTab === 1 ? "active" : ""}`}
                onClick={() => setActiveConnectivityTab(1)}
              >
                AQI Mobile App <i className="tab-arrow"></i>
              </button>
              <button
                className={`tab-button ${activeConnectivityTab === 2 ? "active" : ""}`}
                onClick={() => setActiveConnectivityTab(2)}
              >
                Web-Dashboard <i className="tab-arrow"></i>
              </button>
              <button
                className={`tab-button ${activeConnectivityTab === 3 ? "active" : ""}`}
                onClick={() => setActiveConnectivityTab(3)}
              >
                AQI TV App <i className="tab-arrow"></i>
              </button>
            </div>

            <div className="tab-bg">
              {/* AQI Mobile App Tab Content */}
              {activeConnectivityTab === 1 && (
                <div className="tab-panel active">
                  <div className="panel-content">
                    <div className="connectivety-tab-text">
                      <ul className="mob-heading">
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/08/mobile-AQI-APP-icon.png"
                            alt="aqi mobile app logo"
                            width={100}
                            height={100}
                          />
                        </li>
                        <li>
                          <h3>Mobile App</h3>
                          <h4>Seamless Connectivity</h4>
                        </li>
                      </ul>
                      <p>
                        Stay informed with real-time updates and personalized alerts on your mobile app, ensuring you
                        always know the air quality around you, wherever you are.
                      </p>
                      <div className="connect-btn-box">
                        <a href="https://apps.apple.com/tt/app/aqi/id1439684571" className="iso-btn">
                          <ul className="seamless-connect-btn">
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/app-store.png"
                                alt="ios app logo"
                                width={35}
                                height={35}
                              />
                            </li>
                            <li>
                              <span className="btn-txt-small">Download on the</span>
                              <br />
                              <span className="btan-txt">App Store</span>
                            </li>
                          </ul>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.aqi.data" className="play-store-btn">
                          <ul className="seamless-connect-btn">
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/google-play.png"
                                alt="android app"
                                width={35}
                                height={35}
                              />
                            </li>
                            <li>
                              <span className="btn-txt-small">Get it on</span>
                              <br />
                              <span className="btan-txt">Google Play</span>
                            </li>
                          </ul>
                        </a>
                      </div>
                    </div>
                    <div className="connectivety-tab-bg">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/aqi-mobile-air-quality-app.png"
                        alt="AQI mobile app for air quality monitoring data"
                        width={300}
                        height={500}
                        className="app-image"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Web-Dashboard Tab Content */}
              {activeConnectivityTab === 2 && (
                <div className="tab-panel active">
                  <div className="panel-content">
                    <div className="connectivety-tab-text">
                      <h3>Web dashboard connectivity</h3>
                      <h4>Real-Time Insights</h4>
                      <p>
                        Discover real-time insights into the air quality with our intuitive web dashboard connectivity.
                        Enjoy seamless integration across multiple devices for a complete picture of your air
                        environment.
                      </p>
                      <a href="https://www.aqi.in/userlogin" className="dashboard-button">
                        <ul className="seamless-connect-btn dash-btn">
                          <li>
                            <Image
                              src="https://www.pranaair.com/wp-content/uploads/2024/07/AQI-api-logo.png"
                              alt="aqi logo"
                              width={40}
                              height={40}
                            />
                          </li>
                          <li>
                            <span className="btn-txt-small">View</span>
                            <br />
                            <span className="btan-txt">Dashboard</span>
                          </li>
                        </ul>
                      </a>
                    </div>
                    <div className="connectivety-tab-bg">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/aqi-web-dashboard.png"
                        alt="aqi web-dashboard for more insightful data of air quality monitors"
                        width={500}
                        height={300}
                        className="web-dash"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* AQI TV App Tab Content */}
              {activeConnectivityTab === 3 && (
                <div className="tab-panel active">
                  <div className="panel-content">
                    <div className="connectivety-tab-text">
                      <ul className="mob-heading">
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/08/tv-aqi-app-icon.png"
                            alt="AQI TV app logo"
                            width={100}
                            height={100}
                          />
                        </li>
                        <li>
                          <h3>TV connectivity</h3>
                          <h4>View Air quality data</h4>
                        </li>
                      </ul>
                      <p>
                        Easily view your air quality data on your TV screen with our seamless connectivity feature. Stay
                        informed about your environment with clear, easy-to-read visuals directly on your TV.
                      </p>
                    </div>
                    <div className="connectivety-tab-bg">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/Tv-connectivity.png"
                        alt="AQI TV app for displaying air quality data remotely"
                        width={500}
                        height={300}
                        className="tv-screen"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Drone Section */}
      <section className="air-quality-drone-secv">
        <div className="container">
          <div className="drone-content">
            <div className="air-quality-drone-txt">
              <h2>See the Air You Breathe</h2>
              <p>
                Get real-time insights into air quality with Prana Airs Air Quality Drone, equipped with cutting-edge
                sensor technology.
              </p>
              <Link href="/air-quality-drone" className="drone-button">
                Know More
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/parameters-icon.webp"
                  alt="link icon"
                  width={15}
                  height={15}
                  className="button-icon"
                />
              </Link>
            </div>
            <div className="drone-img">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2024/08/air-quality-drone-of-prana-air.webp"
                alt="air quality drone of prana air"
                width={500}
                height={400}
                className="drone-image"
              />
            </div>
          </div>
        </div>
        <div className="controller">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2024/08/aqi-quality-drone-cntroller.png"
            alt="prana air quality drone remote controller"
            width={1200}
            height={300}
            className="controller-image"
          />
        </div>
      </section>

      {/* Our Clientele Section */}
      <section className="our-clientele-sec">
        <div className="container">
          <div className="clint-br">
            <div className="clientele-header">
              <div className="our-client-heading">
                <h2>Our Clientele</h2>
              </div>
              <div className="our-client-para">
                <p>Join industry leaders who rely on our advanced solutions to ensure cleaner, safer environments.</p>
              </div>
            </div>
          </div>

          <div className="all-cliente-logo">
            <ul>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/tata.jpg" alt="tata logo" width={150} height={80} />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/taj.jpg" alt="taj logo" width={150} height={80} />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/renault-nissan.jpg"
                  alt="renault nissan logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/ola.jpg" alt="ola logo" width={150} height={80} />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/microsoft.jpg" alt="microsolft logo" width={150} height={80} />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/08/L-T-logo.jpg" alt="L&T logo" width={150} height={80} />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/marriott.jpg" alt="marriott logo" width={150} height={80} />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/mahindra.jpg" alt="mahindra logo" width={150} height={80} />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/iit-rorkee.jpg" alt="iit rorkee logo" width={150} height={80} />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/leighton.jpg"
                  alt="leighton logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/iit-hyderabad.jpg"
                  alt="iit hyderabad logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/iit-danbad.jpg" alt="iit danbad logo" width={150} height={80} />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/iit-bombay.jpg" alt="iit bombay logo" width={150} height={80} />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/IIT-Banaras.jpg"
                  alt="iit banaras logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/havells.jpg" alt="havells logo" width={150} height={80} />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/Google-Bangalore-.jpg"
                  alt="google bangalore logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/gmda.jpg" alt="gmda logo" width={150} height={80} />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/dae.jpg" alt="dae logo" width={150} height={80} />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Neeri.jpg"
                  alt="csir logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/bhu-varanasi.jpg" alt="bhu logo" width={150} height={80} />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/BCG-Boston-Consulting-Group.jpg"
                  alt="bcg boston consulting group logo"
                  width={150}
                  height={80}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="trusted-clients-sec">
        <div className="container">
          <div className="trusted-clients-content">
            <div className="trusted-clients-text">
              <div className="counter-txt">
                <div className="stats-number">4000</div>
                <div className="counter_suffix">+</div>
              </div>

              <div className="truted-client-heading">
                <h3>Air Quality Monitors Installed</h3>
              </div>

              <div className="monitor-insalled-txt">
                <h3>
                  <span className="text-highlight">Across Top Sectors:</span> Construction, Hospitality, Education,
                  Tech, Research Study, and many more
                </h3>
                <p>
                  Installed in numerous strategic sites, ensuring comprehensive coverage and accurate data collection.
                </p>
              </div>
            </div>
            <div className="trusted-clients-img">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2024/07/Prana-Airs-Monitors-Installed-Sites.gif"
                alt="Prana Air clients all over India"
                width={600}
                height={400}
                className="clients-map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies-sec">
        <div className="container">
          <div className="case-studies-heading">
            <h2>Some of Our Case Studies</h2>
          </div>
        </div>
        <div className="case-studies-slider">
          <div className="case-studies-slider-container">
            <div className="case-study-item">
              <Link href="/case-studies/mahindra" className="case-study-link">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/How-Prana-Air-helped-Mahindra-Lifespaces.jpg"
                  alt="case study of How Prana Air helped Mahindra Lifespaces"
                  width={300}
                  height={200}
                  className="case-study-image"
                />
                <h3>How Prana Air helped Mahindra Lifespaces</h3>
              </Link>
            </div>
            <div className="case-study-item">
              <Link href="/case-studies/interglobe" className="case-study-link">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/Aided-in-Air-Quality-Monitoring-Solutions-for-INTERGLOBE-1.jpg"
                  alt="case study of Aided in Air Quality Monitoring Solutions for INTERGLOBE"
                  width={300}
                  height={200}
                  className="case-study-image"
                />
                <h3>Aided in Air Quality Monitoring Solutions for INTERGLOBE</h3>
              </Link>
            </div>
            <div className="case-study-item">
              <Link href="/case-studies/cii" className="case-study-link">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/How-Prana-Air-helped-CII-to-monitor-air-pollution.jpg"
                  alt="case study of How Prana Air helped CII to monitor air pollution"
                  width={300}
                  height={200}
                  className="case-study-image"
                />
                <h3>How Prana Air helped CII to monitor air pollution</h3>
              </Link>
            </div>
            <div className="case-study-item">
              <Link href="/case-studies/ola-microsoft" className="case-study-link">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/How-Prana-Air-aided-Ola-and-Microsoft.jpg"
                  alt="case study of How Prana Air aided Ola and Microsoft"
                  width={300}
                  height={200}
                  className="case-study-image"
                />
                <h3>How Prana Air aided Ola and Microsoft</h3>
              </Link>
            </div>
            <div className="case-study-item">
              <Link href="/case-studies/tata-steel" className="case-study-link">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/Prana-Air-aids-TATA-Steel.jpg"
                  alt="case study of Prana Air aids TATA Steel"
                  width={300}
                  height={200}
                  className="case-study-image"
                />
                <h3>Prana Air aids TATA Steel</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breathing Fresh Air Section */}
      <section className="breathing-fresh-air">
        <div className="container">
          <div className="breathing-fresh-air-content">
            <div className="breathing-fresh-air-txt">
              <h2>Breathing Fresh Air Is Not An Option, It Is Our Right</h2>
              <Link href="/about-us" className="fresh-air-button">
                Know More
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/green-arrow.png"
                  alt="link icon"
                  width={15}
                  height={15}
                  className="button-icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Most Accurate Section */}
      <div className="most-accurate-row container">
        <div className="container">
          <div className="most-accurate-content">
            <div className="most-accurate-text">
              <h3>Most Accurate & Low-Cost</h3>
              <h4>
                Prana Air Monitors, Reliable
                <br />
                Alternative To Costly Devices
              </h4>
            </div>
            <div className="accurate-btn">
              <Link href="/accuracy" className="accuracy-button">
                Check Accuracy
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/green-arrow.png" alt="link icon" width={15} height={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Air Quality Solutions Section */}
      <section className="air-quality-solution-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-page-tab">
                <div className="solution-text">
                  <h3>
                    Air Quality <span className="text-highlight">Solutions</span>
                  </h3>
                  <Link href="/solutions-by-application" className="solutions-button">
                    Explore More
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                      alt="link button icon"
                      width={15}
                      height={15}
                      className="button-icon"
                    />
                  </Link>
                </div>
                <div className="solution-pages-link smart-city">
                  <Link href="/solutions-by-application/smart-city/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Smart-City-Projects.jpg"
                      alt="prana air - air quality solutions for smart city project"
                      width={500}
                      height={300}
                      className="solution-image"
                    />
                    <h4>
                      Smart City
                      <br />
                      Projects
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="all-solu-tab">
                <div className="solution-tab-links">
                  <Link href="/solutions-by-application/institutes/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Institutes-Schools.jpg"
                      alt="prana air - air quality solutions for schools and insitutes"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Institutes/
                      <br />
                      Schools
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
                <div className="solution-tab-links">
                  <Link href="/solutions-by-application/constructions/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/air-quality-solutions-for-contruction-sites.jpg"
                      alt="prana air - air quality solutions for construction sites"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Construction
                      <br />
                      Sites
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link iconn"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="all-solu-tab">
                <div className="solution-tab-links">
                  <Link href="/solutions-by-application/hotel-businesses/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Hotel-Businesses.jpg"
                      alt="prana air - air quality solutions for hotel businesses"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Hotel
                      <br />
                      Businesses
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
                <div className="solution-tab-links">
                  <Link href="/solutions-by-application/airports/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Airports.jpg"
                      alt="prana air - air quality solutions for airport"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Airports
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="all-solu-tab">
                <div className="solution-tab-links">
                  <Link href="/solutions-by-application/hospital/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Hospital-Healthcare.jpg"
                      alt="prana air - air quality solutions for hospital and healthcare industries"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Hospital/
                      <br />
                      Healthcare
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
                <div className="solution-tab-links">
                  <Link href="/solutions-by-application/real-estate/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Real-Estates.jpg"
                      alt="prana air - air quality solutions for real estates businesses"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Real
                      <br />
                      Estates
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-sec">
        <div className="container">
          <div className="blog-content">
            <div className="articles-list">
              <div className="project-odd">
                <div className="post-thumbnail-wrap">
                  <Link href="/blog/air-quality-in-india">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Air Quality in India"
                      width={500}
                      height={300}
                      className="blog-image"
                    />
                  </Link>
                </div>
                <div className="post-entry-content">
                  <div className="entry-meta">
                    <Link href="/category/air-quality" className="category-link">
                      Air Quality
                    </Link>
                  </div>
                  <h3 className="entry-title">
                    <Link href="/blog/air-quality-in-india">
                      Understanding Air Quality in India: Challenges and Solutions
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="project-odd">
                <div className="post-thumbnail-wrap">
                  <Link href="/blog/pm2.5-effects">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="PM2.5 Effects on Health"
                      width={500}
                      height={300}
                      className="blog-image"
                    />
                  </Link>
                </div>
                <div className="post-entry-content">
                  <div className="entry-meta">
                    <Link href="/category/health" className="category-link">
                      Health
                    </Link>
                  </div>
                  <h3 className="entry-title">
                    <Link href="/blog/pm2.5-effects">
                      The Hidden Dangers of PM2.5: How Small Particles Cause Big Health Problems
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="blog-title">
              <h2>
                Air Quality <span className="text-highlight">Blogs</span>
              </h2>
              <Link href="/blogs" className="blogs-button">
                See More Blogs
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                  alt="arrow icon"
                  width={10}
                  height={10}
                  className="button-icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="discover-sec">
        <div className="container">
          <div className="discover-title">
            <ul>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/discover-icon.png" alt="leaf icon" width={80} height={80} />
              </li>
              <li>
                <h2>
                  Discover why people love <span className="text-highlight">Prana Air</span>
                </h2>
              </li>
            </ul>
          </div>

          <div className="discover-row">
            <div className="testimonials-container">
              <div className="clinet-txt">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/IIT-ISM-Dhanbad-Indi.png"
                  alt="IIT ISM Dhanbad India logo"
                  width={60}
                  height={60}
                />
                <h3>Dr. Siddhartha Agarwal</h3>
                <h4>Assistant Professor, IIT (ISM) Dhanbad, India.</h4>
                <p>
                  Prana Air outdoor air quality monitors have been a valuable tool in our environmental project. The
                  devices provide reliable data that has helped us to track air quality trends over time. The
                  organization is sincere and dedicated towards its customers. Their customer service is also excellent.
                  I would recommend them to everyone who is working in the field of Environment or Air quality.
                </p>
              </div>
              <div className="clinet-txt">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/J.M.-Envirolab-Pvt-Ltd.png"
                  alt="J.M Envirolab Pvt Ltd logo"
                  width={60}
                  height={60}
                />
                <h3>Dr. Surender Yadav</h3>
                <h4>General Manager, J.M. Envirolab Pvt. Ltd.</h4>
                <p>
                  We have procured multiple Prana Air Air quality monitors for our work. The monitors have been
                  valuable tool in our field of work. The devices provide accurate and reliable data that has helped us
                  immensely in our application. The devices are capable of performing in harsh situations as well. Their
                  customer service is also very responsive in case of any rare occurrence of malfunction.
                </p>
              </div>
              <div className="clinet-txt">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/Unity-Groups.png"
                  alt="unity groups logo"
                  width={60}
                  height={60}
                />
                <h3>Anil Sobti</h3>
                <h4>General Manager-commercial, Unity Group</h4>
                <p>
                  We have been using the Prana Air Air Quality monitors, installed by Purelogic Labs India Pvt. Ltd.
                  at our different construction sites and have found their product accurate and reliable. The devices
                  installed have helped us to comply with the air quality standards and ensure the safety of our
                  workers. The after-sales service is very prompt and excellent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="award-sec">
        <div className="container">
          <div className="awards-content">
            <div className="award-box">
              <div className="award-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/best-wearable-award-by-IHW-Council.png"
                  alt="Prana Air's Best Wearable Brand Award in 2019 by IHW Council"
                  width={400}
                  height={300}
                />
              </div>
              <div className="award-txt">
                <h2>
                  <span className="text-highlight">Best Wearable Brand Award </span>
                  Winner in 2019 by IHW council
                </h2>
                <p>
                  Prana Air is proud to receive the Wearable Brand Award at the 4th Edition Good Air Summit and Awards.
                  This recognition highlights our commitment to innovative solutions for clean air.
                </p>
              </div>
            </div>
            <div className="award-box mg-tops">
              <div className="award-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/best-monitoring-device-award-by-IHW-Council.png"
                  alt="Prana Air's Best Monitoring Devices Brand-Award in 2019 by IHW Council"
                  width={400}
                  height={300}
                />
              </div>
              <div className="award-txt">
                <h2>
                  <span className="text-highlight">Best Monitoring Devices Brand Award </span>
                  in 2019 by IHW Council
                </h2>
                <p>
                  We are pleased to announce that we received the prestigious Monitoring Devices Brand Award at the
                  highly regarded 4th Edition Good Air Summit and Awards. Our regular development of new ideas to aid in
                  reducing air pollution demonstrates our commitment to bettering air quality everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Query Section */}
      <section className="query-sec">
        <div className="container">
          <div className="query-content">
            <div className="query-heading">
              <h2>
                <span className="text-highlight">Have a Query?</span>
                <br />
                Get in touch with us
              </h2>
            </div>
            <div className="lets-talk-link">
              <Link href="/contact">
                Let Talk
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png" alt="link icon" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200..1000;1,200..1000&display=swap');

        /* Base Styles */
 h1,
 h2,
 h3,
 h4,
 h5,
 h6,
 p,
 a {
     font-family: 'Nunito Sans', sans-serif;
 }

 a {
     text-decoration: none;
 }

 /* Hero Section */
 .hero-section {
     background-image: url(https://www.pranaair.com/wp-content/uploads/2024/08/breathe-freely-embrace-the-power-of-clean-air-scaled.webp);
     background-size: cover;
     height: 950px;
     position: relative;
 }

 .hero-content-wrapper {
     display: flex;
     flex-direction: row;
     padding-top: 100px;
 }

 .hero-text-content {
     width: 40%;
     padding-top: 50px;
 }

 .hero-text-content h1 {
     color: #fff;
     font-size: 54px;
     font-weight: 400;
     line-height: 1.2;
 }

 .text-highlight {
     color: #8FE758;
 }

 .hero-text-content p {
     color: #fff;
     font-size: 18px;
     width: 80%;
     line-height: 30px;
     padding-top: 10px;
 }

 .hero-button {
     display: flex;
     align-items: center;
     gap: 10px;
     color: #fff;
     font-size: 16px;
     font-weight: 400;
     border: 2px solid #fff;
     border-radius: 50px;
     justify-content: center;
     padding: 15px 10px;
     width: 60%;
     margin-top: 20px;
     transition: .2s linear;
     text-decoration: none;
 }

 .hero-button-icon {
     background: #fff;
     border-radius: 100%;
     transition: .2s linear;
     width: 10%;
     height: auto;
 }

 .hero-button:hover {
     background: rgba(77, 138, 49, 0.63);
 }

 .hero-image-grid {
     width: 60%;
     position: relative;
 }

 .slider-container {
     position: relative;
     height: 500px;
 }

 .slider-item {
     position: absolute;
     top: 50px;
     left: 0;
     width: 100%;
     height: 100%;
     opacity: 0;
     transition: opacity 1s ease-in-out;
 }

 .slider-item.active {
     opacity: 1;
     z-index: 9;
 }

 .all-device ul {
     list-style: none;
     margin: 0;
     padding: 0;
     display: flex;
     gap: 10px;
 }

 .all-device ul.second-row {
     margin-top: 10px;
 }

 .all-device ul li.mt {
     margin-top: -30px;
 }

 .device-image {
     border-radius: 10px;
     width: 100%;
     height: auto;
 }

 /* Parameters Section */
 .explore-functionality-sec {
     height: 850px;
     margin-top: 50px;
     position: relative;
     overflow: visible;
     background: url(https://www.pranaair.com/wp-content/uploads/2024/08/parameters-bg-scaled.jpg);
 }

 .parameters-content {
     display: flex;
     flex-direction: row;
 }

 .function-txt {
     width: 50%;
     margin-top: 50px;
 }

 .function-txt h2 {
     color: #263D4F;
     font-size: 54px;
     line-height: 62px;
     text-transform: capitalize;
 }

 .function-txt p {
     color: #263D4F;
     font-size: 18px;
     font-weight: 600;
 }

 .parameter-box {
     width: 60%;
     margin-top: 150px;
 }

 .firstn {
     display: flex;
     gap: 30px;
 }

 .parameter-btn {
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 20px;
     background: rgba(77, 86, 75, 0.41);
     border-radius: 50px;
     padding: 10px 0;
     transition: .2s linear;
     color: #fff;
     text-decoration: none;
     width: 100%;
 }

 .parameter-btn:hover {
     background: #6b715c;
 }

 .parameter-arrow {
     width: 15px;
 }

 .param-1 {
     animation-name: floating;
     animation-duration: 4s;
     animation-iteration-count: infinite;
     animation-timing-function: ease-in-out;
 }

 .param-2 {
     position: relative;
     top: -40px;
     animation-name: floating;
     animation-duration: 3s;
     animation-iteration-count: infinite;
     animation-timing-function: ease-in-out;
 }

 .param-3 {
     position: relative;
     left: 50px;
     animation-name: floating;
     animation-duration: 2s;
     animation-iteration-count: infinite;
     animation-timing-function: ease-in-out;
 }

 .param-4 {
     position: relative;
     top: 50px;
     animation-name: floating;
     animation-duration: 3s;
     animation-iteration-count: infinite;
     animation-timing-function: ease-in-out;
 }

 .param-5 {
     position: relative;
     left: 40px;
     animation-name: floating;
     animation-duration: 3s;
     animation-iteration-count: infinite;
     animation-timing-function: ease-in-out;
 }

 .param-6 {
     position: relative;
     top: 100px;
     animation-name: floating;
     animation-duration: 2s;
     animation-iteration-count: infinite;
     animation-timing-function: ease-in-out;
 }

 .param-7 {
     position: relative;
     top: 100px;
     left: 200px;
     width: 32%;
     animation-name: floating;
     animation-duration: 2s;
     animation-iteration-count: infinite;
     animation-timing-function: ease-in-out;
 }

 .last-para a {
     width: 32%;
 }

 @keyframes floating {
     0% {
         transform: translate(0, 0);
     }

     65% {
         transform: translate(0, 15px);
     }

     100% {
         transform: translate(0, 0);
     }
 }

 /* Discover Air Quality Section */
 .discover-air-quality {
     padding-top: 80px;
 }

 .discover-header {
     display: flex;
     flex-direction: row;
     margin-bottom: 50px;
 }

 .discover-air-quality-heading {
     width: 50%;
 }

 .discover-air-quality-heading h2 {
     color: #263D4F;
     font-size: 54px;
     line-height: 62px;
 }

 .discover-air-quality-para {
     width: 50%;
 }

 .discover-air-quality-para p {
     color: #263D4F;
     font-weight: 600;
     font-size: 18px;
     padding-left: 200px;
     padding-top: 10px;
 }

 .row-line {
     border-bottom: 1px solid rgba(0, 0, 0, 0.17);
     padding-bottom: 30px;
     margin-bottom: 50px;
 }

 .discover-content {
     display: flex;
     flex-direction: row;
 }

 .tabs-container {
     width: 25%;
 }

 .custom-tabs {
     display: flex;
     flex-direction: column;
     width: 100%;
 }

 .custom-tab {
     cursor: pointer;
     padding: 15px;
     text-align: center;
     border-bottom: 1px solid #c3c3c3;
     transition: all 0.3s ease;
     margin-bottom: 10px;
 }

 .custom-tab:hover {
     background-color: #67b455;
     color: white;
 }

 .custom-tab.active {
     background-color: #67b455;
     color: white;
 }

 .product-catgeory h3 {
     display: flex;
     align-items: center;
     justify-content: space-between;
     margin: 0;
     font-size: 18px;
     font-weight: normal;
 }

 .tab-arrow {
     display: inline-block;
     transform: rotate(-45deg);
 }

 .custom-tab.active .tab-arrow {
     transform: rotate(0);
 }

 .custom-content-container {
     width: 75%;
     padding-left: 40px;
 }

 .custom-content {
     display: none;
 }

 .custom-content.active {
     display: block;
 }

 .aq-monitor-box {
     display: flex;
     gap: 15px;
 }

 .discover-air-quality-page-img {
     position: relative;
     overflow: hidden;
     height: auto;
     width: 50%;
 }

 .monitor-image,
 .purifier-image {
     width: 100%;
     height: 100%;
     object-fit: cover;
     border-radius: 8px;
 }

 .discover-air-quality-page-img ul {
     list-style: none;
     padding: 0;
     display: flex;
     align-items: center;
     margin-top: 0;
     gap: 20px;
     position: absolute;
     bottom: 0px;
     left: 15px;
     color: white;
 }

 .discover-air-quality-page-img ul li {
     font-size: 16px;
     font-weight: 500;
 }

 .arrow-icon {
     filter: brightness(8.5);
     transition: .2s linear;
 }

 .discover-air-quality-page-img:hover .arrow-icon {
     transform: rotate(45deg);
 }

 .aq-monitor-last {
     display: flex;
     gap: 15px;
     margin-top: 15px;
 }

 .cair-monitor {
     width: 100%;
 }

 .see-more-box {
     width: 50%;
 }

 .see-more .arrow-icon {
     filter: brightness(0.5);
 }

 .see-more {
     display: flex;
     align-items: center;
     color: #263D4F;
     font-size: 14px;
     font-weight: 700;
     justify-content: space-around;
     border: 1px solid #263D4F;
     border-radius: 50px;
     padding: 10px;
     margin-top: 90px;
     text-decoration: none;
 }

 .see-more:hover {
     background: #7ab261;
     border: 1px solid #fff;
     color: #fff;
 }

 .see-more:hover .arrow-icon {
     transform: rotate(45deg);
     filter: brightness(9.5);
 }

 /* Sensors Tab */
 .sensor-row {
     margin-bottom: 20px;
 }

 .all-sensor {
     margin: 0 0 40px;
     display: flex;
     gap: 10px;
     list-style: none;
     padding: 0;
 }

 .discover-air-sensor-page-img {
     margin-bottom: 5px;
     text-align: center;
 }

 .img-box {
     height: 150px;
     padding-top: 0;
 }

 .sensor-image {
     width: 100%;
     height: 100%;
     object-fit: contain;
     border-radius: 8px;
 }

 .co2-sensor-img {
     width: 100%;
 }

 .discover-air-sensor-page-img ul {
     list-style: none;
     padding: 0 5px;
     margin: -30px;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 8px;
     position: relative;
     z-index: 1;
 }

 .discover-air-sensor-page-img ul li {
     color: #fff;
     font-size: 14px;
     font-weight: 500;
 }

 /* PCB Tab */
 .aq-monitor-pcb-box {
     margin-bottom: 20px;
 }

 .discover-air-quality-pcb-page-img {
     text-align: center;
     position: relative;
     margin-bottom: 15px;
 }

 .pcb-image,
 .weather-image {
     width: 100%;
     border-radius: 8px;
 }

 .discover-air-quality-pcb-page-img ul {
     list-style: none;
     padding: 0 20px;
     margin: -50px 0 0;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 8px;
     position: relative;
     z-index: 1;
 }

 .discover-air-quality-pcb-page-img ul li {
     color: #fff;
     font-size: 14px;
     font-weight: 500;
 }

 /* Shopping Section */
 .shopping-section {
     margin-top: 50px;
 }

 .shopping-content {
     display: flex;
     flex-direction: row;
 }

 .experince-heading {
     width: 30%;
 }

 .experince-heading h3 {
     color: #263D4F;
     font-size: 24px;
     line-height: 32px;
     padding-top: 50px;
 }

 .experience-function {
     width: 70%;
     display: flex;
     gap: 60px;
 }

 .experince-shoping {
     list-style: none;
     padding: 0;
     margin: 50px 0 0;
     display: flex;
     gap: 100px;
 }

 .experince-shoping li {
     display: flex;
     align-items: center;
     gap: 10px;
     position: relative;
     color: #263D4F;
     font-size: 18px;
     line-height: 20px;
 }

 .experince-shoping li:before {
     position: absolute;
     content: "";
     background: rgba(38, 61, 79, 0.15);
     width: 1px;
     height: 40px;
     right: -30px;
 }

 /* Seamless Connectivity Section */
 .seamless-connective {
     padding-top: 100px;
     background: url(https://www.pranaair.com/wp-content/uploads/2024/07/seamless-connection-background-scaled.jpg);
     background-repeat: no-repeat;
     background-size: cover;
     background-position: center;
     margin-top: 100px;
     padding-bottom: 60px;
 }

 .connectivity-header {
     display: flex;
     flex-direction: row;
     margin-bottom: 50px;
 }

 .seamless-connect-heading {
     width: 50%;
 }

 .seamless-connect-heading h2 {
     font-size: 54px;
     color: #263D4F;
     line-height: 60px;
 }

 .seamless-txt {
     width: 50%;
 }

 .seamless-txt p {
     color: #263D4F;
     font-size: 18px;
     font-weight: 600;
     padding-left: 200px;
     padding-top: 10px;
 }

 .seamless-tab {
     margin-top: 60px;
 }

 .tabs-header {
     display: flex;
     border-bottom: 1px solid #ddd;
     margin-bottom: 30px;
 }

 .tab-button {
     padding: 10px 20px;
     margin-right: 20px;
     background: none;
     border: none;
     cursor: pointer;
     color: #263D4F;
     font-size: 16px;
     display: flex;
     align-items: center;
     gap: 10px;
 }

 .tab-button.active {
     background-color: #7AB261;
     color: white;
 }

 .tab-bg {
     background: white;
     border: 1px solid #DFDFDF;
     border-radius: 10px;
     overflow: hidden;
 }

 .panel-content {
     display: flex;
     flex-direction: row;
 }

 .connectivety-tab-text {
         width: 50%;
    padding: 70px 0 40px 80px;
 }

 .mob-heading {
     padding: 0 0 20px;
     margin: 0;
     list-style: none;
     display: flex;
     align-items: center;
     gap: 12px;
 }

 .connectivety-tab-text h3 {
     color: #7AB261;
     font-size: 20px;
     margin: 0;
 }

 .connectivety-tab-text h4 {
     color: #263D4F;
     font-size: 26px;
     font-weight: 600;
     width: 70%;
     line-height: 30px;
     margin: 0;
 }

 .connectivety-tab-text p {
     color: #263D4F;
     font-size: 16px;
     font-weight: 600;
     width: 70%;
     padding-bottom: 20px;
 }

 .connect-btn-box {
     display: flex;
     gap: 20px;
     padding-top: 20px;
 }

 .connect-btn-box a {
     width: 35%;
     transition: .2s linear;
     border-radius: 50px;
     text-decoration: none;
 }

 .connect-btn-box a:hover {
     box-shadow: 0 20px 20px rgba(190, 190, 190, 0.3);
 }

 .seamless-connect-btn {
     list-style: none;
     padding: 10px;
     margin: 0;
     display: flex;
     align-items: center;
     gap: 10px;
     justify-content: center;
     border-radius: 50px;
     height: 65px;
 }

 .iso-btn ul {
     background: #7AB261;
 }

 .iso-btn ul li span {
     color: #FFF;
 }

 .play-store-btn ul {
     background: #E4E4EE;
 }

 .play-store-btn ul li span {
     color: #31343D;
 }

 .btn-txt-small {
     font-size: 10px;
 }

 .btan-txt {
     font-size: 14px;
     font-weight: 700;
     display: block;
     margin-top: -5px;
 }

 .dash-btn {
     width: 30%;
     height: 40px;
     margin-top: 20px;
 }

 .connectivety-tab-bg {
     width: 50%;
     background: #F7F7FC;
     position: relative;
     left: -80px;
     padding-top: 50px;
     text-align: center;
 }

 .app-image {
     display: inline-block;
         height: auto;
 }

 .web-dash {
     width: 70%;
     padding-bottom: 70px;
     height: auto;
 }

 .dash-btn li img {
     height: auto;
     width: 100%;
 }

 .tv-screen {
     width: 70%;
    padding-bottom: 70px;
    height: auto;
 }

 /* Air Quality Drone Section */
 .air-quality-drone-secv {
     background: url(https://www.pranaair.com/wp-content/uploads/2024/08/aqi-quality-drone-bcakground-scaled.jpg);
     background-repeat: no-repeat;
     background-size: cover;
     background-position: center;
     height: 700px;
     margin-top: 100px;
     position: relative;
     overflow: visible;
 }

 .drone-content {
     display: flex;
     flex-direction: row;
     padding-top: 80px;
 }

 .air-quality-drone-txt {
     width: 60%;
     padding-top: 30px;
     margin-top: -150px;
 }

 .air-quality-drone-txt h2 {
     color: #263D4F;
     font-size: 54px;
     font-weight: 500;
 }

 .air-quality-drone-txt p {
     color: #263D4F;
     font-size: 18px;
     padding-top: 10px;
     width: 70%;
 }

 .air-quality-drone-txt a {
     background: #67b455;
     display: flex;
     color: #fff;
     text-decoration: none;
     font-size: 14px;
     font-weight: 500;
     align-items: center;
     gap: 10px;
     justify-content: center;
     padding: 15px;
     border-radius: 50px;
     width: 25%;
     margin-top: 20px;
 }

 .air-quality-drone-txt a:hover {
     background: #263d4f;
 }

 .drone-img {
     width: 42%;
 }

 .drone-image {
     width: 100%;
     animation: float 2s ease-in-out infinite;
 }

 .controller {
     margin-top: -300px;
 }

 .controller-image {
     width: 100%;
     height: auto;
 }

 /* Our Clientele Section */
 .our-clientele-sec {
     padding-top: 150px;
 }

 .clientele-header {
     display: flex;
     flex-direction: row;
     margin-bottom: 40px;
 }

 .our-client-heading {
     width: 50%;
 }

 .our-client-heading h2 {
     color: #263D4F;
     font-size: 54px;
     width: 40%;
     line-height: 60px;
 }

 .our-client-para {
     width: 50%;
 }

 .our-client-para p {
     color: #263D4F;
     font-size: 18px;
     font-weight: 500;
     padding-left: 200px;
     padding-top: 10px;
 }

 .clint-br {
     border-bottom: 1px solid rgba(38, 61, 79, 0.21);
     padding-bottom: 30px;
     margin-bottom: 40px;
 }

 .all-cliente-logo ul {
     list-style: none;
     padding: 0;
     margin: 0;
     display: flex;
     flex-wrap: wrap;
 }

 .all-cliente-logo ul li {
     display: inline-block;
     width: 14%;
     margin-bottom: 30px;
     text-align: center;
 }

 /* Trusted Clients Section */
 .trusted-clients-sec {
     background: #091205;
     margin-top: 160px;
     padding: 70px 0;
 }

 .trusted-clients-content {
     display: flex;
     flex-direction: row;
 }

 .trusted-clients-text {
     width: 50%;
 }

 .counter-txt {
     flex-direction: row;
     display: flex;
 }

 .stats-number {
     color: #7AB261;
     font-weight: 800;
     font-size: 84px;
     font-family: 'Nunito Sans';
 }

 .counter_suffix {
     color: #7AB261;
     font-weight: 800;
     font-size: 84px;
     font-family: 'Nunito Sans';
 }

 .truted-client-heading {
     border-bottom: 1px solid rgba(255, 255, 255, 0.16);
     width: 60%;
     padding-bottom: 10px;
 }

 .truted-client-heading h3 {
     color: #FEFEFE;
     font-size: 32px;
     font-weight: 600;
     line-height: 56px;
     margin: 0;
 }

 .monitor-insalled-txt h3 {
     color: #F7F7FC;
     font-size: 30px;
     font-weight: 500;
     line-height: 46px;
     width: 90%;
     padding-top: 0;
     margin-top: 20px;
 }

 .monitor-insalled-txt p {
     color: #F7F7FC;
     font-size: 18px;
     font-weight: 400;
     width: 70%;
     opacity: 80%;
 }

 .trusted-clients-img {
     width: 50%;
 }

 .clients-map {
     width: 100%;
     height: auto;
 }

 /* Case Studies Section */
 .case-studies-sec {
     padding-top: 150px;
 }

 .case-studies-heading h2 {
     color: #263D4F;
     font-size: 54px;
     line-height: 62px;
     text-align: center;
     padding-bottom: 50px;
 }

 .case-studies-slider {
     overflow-x: auto;
     padding: 20px 0;
 }

 .case-studies-slider-container {
     display: flex;
     gap: 20px;
     padding: 0 20px;
 }

 .case-study-item {
     position: relative;
     width: 300px;
     flex-shrink: 0;
 }

 .case-study-image {
     width: 100%;
     height: auto;
 }

 .case-study-item h3 {
     color: white;
     font-size: 16px;
     position: absolute;
     bottom: 20px;
     left: 0;
     padding: 0 20px;
     z-index: 10;
     line-height: 22px;
 }

 .case-study-item::before {
     position: absolute;
     content: "";
     background-image: linear-gradient(0deg, #091205, transparent);
     width: 100%;
     height: 130px;
     bottom: 0;
     z-index: 1;
     border-radius: 0 0 8px 8px;
 }

 /* Breathing Fresh Air Section */
 .breathing-fresh-air {
     background: url(https://www.pranaair.com/wp-content/uploads/2024/07/young-beautiful-business-woman-is-resting-sofa-after-successful-working-day-rest-break-scaled.jpg);
     background-repeat: no-repeat;
     background-size: cover;
     height: 570px;
     margin-top: 100px;
     position: relative;
 }

 .breathing-fresh-air-content {
     display: flex;
     justify-content: flex-end;
     height: 100%;
     align-items: center;
 }

 .breathing-fresh-air-txt {
    background: #7ab261e8;
    width: 50%;
    margin-right: -195px;
    padding: 50px 30px;
    margin-top: 200px;
 }

 .breathing-fresh-air-txt h2 {
     color: #FFF;
     font-size: 40px;
     line-height: 50px;
     margin-bottom: 20px;
 }

 .fresh-air-button {
     background: #fff;
     display: flex;
     color: #7AB261;
     align-items: center;
     gap: 10px;
     justify-content: center;
     border-radius: 50px;
     width: 40%;
     height: 50px;
     transition: .2s linear;
     text-decoration: none;
 }

 .fresh-air-button:hover {
     box-shadow: 0 10px 10px rgba(39, 55, 33, 0.34);
 }

 .fresh-air-button:hover .button-icon {
     transform: rotate(45deg);
 }

 /* Most Accurate Section */
 .most-accurate-row {
     background: #091205;
     height: 300px;
     border-radius: 0 0 35px 35px;
     position: relative;
     overflow: hidden;
     margin-top: -50px;
 }

 .most-accurate-row::before {
     position: absolute;
     content: "";
     background: url(https://www.pranaair.com/wp-content/uploads/2024/08/Most-Accurate-Low-Cost-graph.png);
     background-size: 100%;
     width: 100%;
     height: 220px;
     bottom: 0;
     left: 0;
     background-repeat: no-repeat;
     z-index: 0;
     opacity: 100%;
 }

 .most-accurate-content {
     display: flex;
     flex-direction: row;
     position: relative;
     z-index: 1;
 }

 .most-accurate-text {
     width: 50%;
     padding-top: 100px;
     position: relative;
     left: 100px;
 }

 .most-accurate-text h3 {
     color: #7AB261;
     font-size: 20px;
     margin: 0;
 }

 .most-accurate-text h4 {
     color: #FFF;
     font-size: 24px;
     line-height: 30px;
     margin-top: 10px;
 }

 .accurate-btn {
     width: 50%;
     padding-top: 140px;
     position: relative;
     left: 200px;
 }

 .accuracy-button {
     background: #fff;
     display: flex;
     color: #7AB261;
     font-size: 14px;
     align-items: center;
     gap: 10px;
     width: 33%;
     justify-content: space-around;
     border-radius: 50px;
     height: 50px;
     transition: .2s linear;
     text-decoration: none;
 }

 .accuracy-button:hover {
     background: #7AB261;
     color: #fff;
 }

 .accuracy-button:hover img {
     filter: brightness(10.5);
 }

 /* Air Quality Solutions Section */
 .air-quality-solution-sec {
     background: #091205;
     margin-top: 150px;
     padding: 100px 0;
 }

 .solutions-content {
     color: white;
 }

 .solution-page-tab {
     display: flex;
     margin-bottom: 0px;
 }

 .solution-text {
     width: 50%;
 }

 .solution-text h3 {
     color: #F7F7FC;
     font-size: 54px;
     line-height: 60px;
     padding-bottom: 10px;
 }

 .solutions-button {
     color: #F7F7FC;
     font-size: 14px;
     display: flex;
     align-items: center;
     gap: 30px;
     border: 1px solid #fff;
     width: 50%;
     height: 40px;
     border-radius: 40px;
     justify-content: center;
     text-decoration: none;
     transition: .2s linear;
 }

 .solutions-button:hover {
     background: #7ab261;
     border: none;
 }

 .solution-pages-link.smart-city {
     width: 50%;
     position: relative;
     overflow: hidden;
 }

 .solution-image {
     width: 100%;
     height: auto;
     transition: .4s linear;
 }

 .solution-pages-link.smart-city:hover .solution-image {
     transform: scale(1.05);
 }

 .solution-pages-link.smart-city::before {
     position: absolute;
     content: "";
     background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.64), transparent);
     width: 100%;
     height: 110px;
     bottom: 0;
     z-index: 1;
 }

 .solution-pages-link.smart-city h4 {
     color: #F7F7FD;
     font-size: 20px;
     display: flex;
     align-items: baseline;
     gap: 10px;
     position: relative;
     z-index: 2;
     bottom: 60px;
     left: 15px;
     line-height: 22px;
 }

 .all-solu-tab {
     display: flex;
     gap: 15px;
     margin-bottom: 20px;
 }

 .solution-tab-links {
     width: 50%;
     position: relative;
     overflow: hidden;
 }

 .solution-tab-links::before {
     position: absolute;
     content: "";
     background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.84), transparent);
     width: 100%;
     height: 110px;
     bottom: 0;
     z-index: 1;
 }

 .solution-tab-links:hover .solution-image {
     transform: scale(1.05);
 }

 .solution-tab-links h4 {
     color: #F7F7FD;
     font-size: 20px;
     display: flex;
     align-items: baseline;
     gap: 10px;
     position: relative;
     z-index: 2;
     bottom: 60px;
     left: 15px;
     line-height: 22px;
 }

 /* Blog Section */
 .blog-sec {
     background: #303D2A;
     padding: 100px 0;
 }

 .blog-content {
     display: flex;
     flex-direction: row;
 }

 .articles-list {
     width: 66.66%;
     display: flex;
     gap: 30px;
 }

 .project-odd {
     width: 50%;
     display: flex;
     flex-direction: column;
 }

 .blog-image {
     width: 100%;
     height: auto;
     border-radius: 8px;
 }

 .entry-meta {
     margin-top: 20px;
 }

 .category-link {
     border: 1px solid rgba(255, 255, 255, 0.44);
     border-radius: 50px;
     padding: 3px 15px;
     color: #fff;
     text-decoration: none;
     font-size: 14px;
 }

 .entry-title {
     color: white;
     font-size: 20px;
     font-weight: 300;
     margin-top: 10px;
 }

 .entry-title a {
     color: white;
     text-decoration: none;
 }

 .blog-title {
         width: 30%;
    position: relative;
    top: 0px;
    left: 100px;
 }

 .blog-title h2 {
     color: #fff;
     font-size: 54px;
     line-height: 60px;
 }

 .blogs-button {
     color: #F7F7FC;
     font-size: 14px;
     display: flex;
     align-items: center;
     gap: 20px;
     border: 1px solid #fff;
     justify-content: center;
     border-radius: 50px;
     width: 45%;
     height: 40px;
     transition: .2s linear;
     text-decoration: none;
     margin-top: 20px;
 }

 .blogs-button:hover {
     background: #7ab261;
     border: none;
 }

 .blogs-button:hover .button-icon {
     transform: rotate(45deg);
 }

 /* Discover Section */
 .discover-sec {
     background: #091205;
     padding: 60px 0 100px;
 }

 .discover-title ul {
     align-items: center;
     list-style: none;
     padding: 0;
     margin: 0;
     display: flex;
     gap: 50px;
 }

 .discover-title ul li h2 {
     color: #F7F7FD;
     font-size: 54px;
     line-height: 60px;
 }

 .discover-row {
     border-top: 1px solid rgba(140, 140, 140, 0.26);
     margin-top: 40px;
     padding-top: 60px;
 }

 .testimonials-container {
     display: flex;
     gap: 30px;
 }

 .clinet-txt {
     position: relative;
     padding-left: 40px;
     width: 33.33%;
 }

 .clinet-txt::before {
     position: absolute;
     content: "";
     background-image: linear-gradient(45deg, #7AB261, transparent);
     left: 0;
     width: 1px;
     height: 280px;
 }

 .clinet-txt h3 {
     color: #F7F7FD;
     font-size: 18px;
     margin: 10px 0 5px;
 }

 .clinet-txt h4 {
     color: rgba(247, 247, 253, 0.6);
     font-size: 16px;
     margin: 0 0 10px;
 }

 .clinet-txt p {
     color: rgba(247, 247, 253, 0.9);
     font-size: 14px;
     font-weight: 300;
     line-height: 22px;
     width: 90%;
 }

 /* Awards Section */
 .award-sec {
     margin-top: 150px;
     position: relative;
     overflow: visible;
 }

 .award-sec::before {
     position: absolute;
     content: "";
     background: rgba(122, 178, 97, 0.1);
     width: 50%;
     height: 350px;
     left: 0;
     top: 0;
     z-index: 0;
 }

 .award-sec::after {
     position: absolute;
     content: "";
     background: #F3F7FA;
     width: 50%;
     height: 380px;
     right: 0;
     top: 50px;
     z-index: 0;
 }

 .awards-content {
     position: relative;
     z-index: 1;
     display: flex;
 }

 .award-box {
     display: flex;
     margin-bottom: 50px;
 }

 .award-img {
     width: 50%;
 }
     .mg-tops .award-img {
    width: 30%;
}

 .award-img img {
        width: 60%;
    margin-top: -50px;
    height: auto;
 }

 .award-txt {
    width: 80%;
    padding: 50px 10px;
 }

 .award-txt h2 {
     color: #263D4F;
     font-size: 24px;
     font-weight: 500;
     line-height: 32px;
 }

 .award-txt p {
     color: rgba(38, 61, 79, 0.89);
     font-size: 18px;
 }

 .mg-tops {
     padding-top: 50px;
 }

 /* Query Section */
 .query-sec {
     padding: 100px 0 200px;
 }

 .query-content {
     display: flex;
     flex-direction: row;
 }

 .query-heading {
     width: 50%;
 }

 .query-heading h2 {
     font-size: 40px;
     line-height: 50px;
 }

 .lets-talk-link {
     width: 50%;
 }

 .lets-talk-link a {
     color: #263D4F;
     font-size: 32px;
     font-weight: 700;
     display: flex;
     align-items: center;
     gap: 15px;
     transition: .2s linear;
     border-bottom: 1px solid #263D4F;
     width: 60%;
     margin-left: 100px;
     padding: 15px;
     text-decoration: none;
 }

 .lets-talk-link a:hover {
     background: #7AB261;
     color: #fff;
 }

 .lets-talk-link a:hover img {
     transform: rotate(45deg);
     filter: brightness(10.5);
 }

 /* Responsive Styles */
 @media (max-width: 768px) {
     .hero-content-wrapper {
         flex-direction: column;
         padding-top: 50px;
     }

     .hero-text-content {
         width: 100%;
         text-align: center;
         padding-top: 20px;
     }

     .hero-text-content h1 {
         font-size: 36px;
     }

     .hero-text-content p {
         width: 100%;
         font-size: 16px;
     }

     .hero-button {
         margin: 20px auto;
         width: 80%;
     }

     .hero-image-grid {
         width: 100%;
     }

     .slider-container {
         height: 400px;
     }

     .parameters-content {
         flex-direction: column;
     }

     .function-txt {
         width: 100%;
         margin-top: -100px;
     }

     .function-txt h2 {
         font-size: 32px;
         line-height: 40px;
     }

     .parameter-box {
         width: 100%;
         margin-top: 30px;
     }

     .firstn {
         flex-wrap: wrap;
         gap: 10px;
     }

     .parameter-btn {
         width: 48%;
         font-size: 12px;
         gap: 10px;
     }

     .last-para a {
         width: 48%;
     }

     .discover-header {
         flex-direction: column;
     }

     .discover-air-quality-heading,
     .discover-air-quality-para {
         width: 100%;
     }

     .discover-air-quality-para p {
         padding-left: 0;
     }

     .discover-content {
         flex-direction: column;
     }

     .tabs-container,
     .custom-content-container {
         width: 100%;
         padding-left: 0;
     }

     .custom-tabs {
         flex-direction: row;
         overflow-x: auto;
     }

     .aq-monitor-box,
     .aq-monitor-last {
         flex-direction: column;
     }

     .discover-air-quality-page-img {
         width: 100%;
         margin-bottom: 15px;
     }

     .see-more-box {
         width: 100%;
     }

     .see-more {
         margin-top: 20px;
     }

     .all-sensor {
         flex-direction: column;
     }

     .shopping-content {
         flex-direction: column;
     }

     .experince-heading,
     .experience-function {
         width: 100%;
     }

     .experience-function {
         flex-direction: column;
         gap: 20px;
     }

     .connectivity-header {
         flex-direction: column;
     }

     .seamless-connect-heading,
     .seamless-txt {
         width: 100%;
     }

     .seamless-txt p {
         padding-left: 0;
     }

     .panel-content {
         flex-direction: column;
     }

     .connectivety-tab-text,
     .connectivety-tab-bg {
         width: 100%;
         padding: 20px;
         left: 0;
     }

     .drone-content {
         flex-direction: column;
     }

     .air-quality-drone-txt,
     .drone-img {
         width: 100%;
         text-align: center;
     }

     .air-quality-drone-txt a {
         width: 80%;
         margin: 20px auto;
     }

     .clientele-header {
         flex-direction: column;
     }

     .our-client-heading,
     .our-client-para {
         width: 100%;
     }

     .our-client-para p {
         padding-left: 0;
     }

     .all-cliente-logo ul li {
         width: 33%;
     }

     .trusted-clients-content {
         flex-direction: column;
     }

     .trusted-clients-text,
     .trusted-clients-img {
         width: 100%;
     }

     .case-studies-slider-container {
         padding: 0 10px;
     }

     .breathing-fresh-air-content {
         justify-content: center;
     }

     .breathing-fresh-air-txt {
         width: 90%;
         margin: 0;
     }

     .most-accurate-content {
         flex-direction: column;
     }

     .most-accurate-text,
     .accurate-btn {
         width: 100%;
         left: 0;
         padding-top: 40px;
         text-align: center;
     }

     .accuracy-button {
         width: 80%;
         margin: 0 auto;
     }

     .solution-page-tab {
         flex-direction: column;
     }

     .solution-text,
     .solution-pages-link.smart-city {
         width: 100%;
     }

     .solutions-button {
         width: 100%;
     }

     .all-solu-tab {
         flex-direction: column;
     }

     .solution-tab-links {
         width: 100%;
         margin-bottom: 20px;
     }

     .blog-content {
         flex-direction: column-reverse;
     }

     .articles-list,
     .blog-title {
         width: 100%;
     }

     .blog-title {
         left: 0;
         top: 0;
         margin-bottom: 30px;
     }

     .blogs-button {
         width: 100%;
     }

     .project-odd {
         width: 100%;
         margin-bottom: 30px;
     }

     .discover-title ul {
         flex-direction: column;
         align-items: flex-start;
         gap: 20px;
     }

     .testimonials-container {
         flex-direction: column;
     }

     .clinet-txt {
         width: 100%;
         margin-bottom: 40px;
     }

     .award-box {
         flex-direction: column;
     }

     .award-img,
     .award-txt {
         width: 100%;
     }

     .query-content {
         flex-direction: column;
     }

     .query-heading,
     .lets-talk-link {
         width: 100%;
     }

     .lets-talk-link a {
         width: 100%;
         margin-left: 0;
         margin-top: 20px;
     }
 }
      `}</style>
    </main>
  )
}

