"use client"
import { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"

export default function PocketMonitorPage() {
  // Initialize Bootstrap JS components after component mounts
  useEffect(() => {
    // Dynamically import Bootstrap JS only on the client side
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => {
        console.log("Bootstrap JS initialized")
      })
      .catch((err) => {
        console.error("Failed to load Bootstrap JS:", err)
      })
  }, [])

  // Update the state for display tabs in section 4
  const [activeTab, setActiveTab] = useState("aqi-display")

  const openTab = (tabId) => {
    setActiveTab(tabId)
  }

  // State for AQI platform tabs in section 5
  const [activePlatform, setActivePlatform] = useState("aqi-app")
  const [activeAppFeature, setActiveAppFeature] = useState("health-advice")

  const changePlatform = (platform) => {
    setActivePlatform(platform)
  }

  const changeAppFeature = (feature) => {
    setActiveAppFeature(feature)
  }

  // Add this state for the active step in Section 7 after the other state declarations
  const [activeStep, setActiveStep] = useState(1)

  const changeStep = (step) => {
    setActiveStep(step)
  }

  // State for product gallery in Section 10
  const [activeGalleryTab, setActiveGalleryTab] = useState("MonitorTab1")

  const changeGalleryTab = (tabId) => {
    setActiveGalleryTab(tabId)
  }

  // State for FAQ accordion in Section 14
  const [activeFaq, setActiveFaq] = useState("faq1")

  const toggleFaq = (faqId) => {
    setActiveFaq(activeFaq === faqId ? null : faqId)
  }

  return (
    <main>
      {/* SECTION 1: Hero Section */}
      <div className="hero-container">
        <div className="hero-content-wrapper">
          <h1 className="product-title">
            <span className="product-name">Pocket PM2.5</span>
            <span className="product-type">Monitor (WiFi)</span>
          </h1>

          <p className="product-description">
            Track the real-time air quality levels on the go
            <br />
            with our pocket air monitor.
          </p>

          <div className="product-features">
            <span className="feature">Smallest</span>
            <span className="feature-divider">|</span>
            <span className="feature">Portable</span>
            <span className="feature-divider">|</span>
            <span className="feature">Affordable</span>
          </div>

          <div className="product-price">₹ 3,990.00</div>

          <a href="/checkout" className="buy-now-btn">
            Buy Now <span className="arrow">→</span>
          </a>
        </div>
      </div>

      {/* SECTION 2: Product Features */}
      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">
                Pocket PM2.5 Monitor
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/09/wifi-icon.png"
                  alt="WiFi"
                  className="wifi-icon"
                />
               
              </h2>
              <h3 className="section-subtitle">Air Quality Monitor</h3>
            </div>
          </div>

          <div className="row position-relative features-container">
            {/* Features */}
            <div className="feature-wrapper top-left">
              <div className="feature-item">
                <div className="feature-icon-container">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/09/real-time-pm2.5-icon.png"
                    alt="Real-Time PM2.5"
                  />
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">Real-Time PM2.5</h4>
                  <p className="feature-description">
                    Pocket Monitor helps you to track real-time PM2.5 pollution level wherever you go indoor & outdoor.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-wrapper bottom-left">
              <div className="feature-item">
                <div className="feature-icon-container">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/09/lithium-battery.png"
                    alt="450 mAh Lithium Battery"
                  />
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">450 mAh Lithium Battery</h4>
                  <p className="feature-description">
                    Charge it once and use it a lot with 450 mAh lithium battery last for upto 3-4 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="center-image-container">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pm2.5-monitor.png"
                alt="Pocket PM2.5 Monitor"
                className="center-image"
              />
            </div>

            <div className="feature-wrapper top-right">
              <div className="feature-item">
                <div className="feature-icon-container">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/09/wifi-symbol.png" alt="WiFi Enabled" />
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">WiFi Enabled</h4>
                  <p className="feature-description">
                    The smallest PM2.5 monitor has the WiFi connectivity feature to analyze the data on mobile app.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-wrapper bottom-right">
              <div className="feature-item">
                <div className="feature-icon-container">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/09/lcd-display-screen.png"
                    alt="LCD Display Screen"
                  />
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">LCD Display Screen</h4>
                  <p className="feature-description">
                    The LCD display screen gives a clear PM reading indicating if the Air is safe or not.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AQI Tabs */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="aqi-tabs-container">
                <div className="aqi-tabs">
                  <button className="aqi-tab active">AQI</button>
                  <button className="aqi-tab">PM1</button>
                  <button className="aqi-tab">PM2.5</button>
                  <button className="aqi-tab">PM10</button>
                </div>
              </div>
            </div>
          </div>

          {/* AQI Indicators */}
          <div className="row mt-4">
            <div className="col-12">
              <div className="aqi-indicators">
                <div className="aqi-indicator">
                  <div className="indicator-circle good">
                    <span>0-50</span>
                  </div>
                  <div className="indicator-label">Good</div>
                </div>
                <div className="aqi-indicator">
                  <div className="indicator-circle moderate">
                    <span>51-100</span>
                  </div>
                  <div className="indicator-label">Moderate</div>
                </div>
                <div className="aqi-indicator">
                  <div className="indicator-circle poor">
                    <span>101+</span>
                  </div>
                  <div className="indicator-label">Poor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: World's Smallest Monitor */}
      <section className="worlds-smallest-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="worlds-smallest-title">
                Worlds <span className="highlight">Smallest, Portable & Affordable</span>
                <br />
                PM2.5 Air Quality Monitor
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt="Prana Air"
                  className="title-icon"
                />
              </h2>
              <p className="worlds-smallest-subtitle">A smart portable device that monitors ambient dust particles</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="pocket-monitor-badge">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pm2.5-monitor-particle-counts-sceern.png"
                  alt="Pocket PM2.5 Monitor with display"
                  className="pocket-monitor-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Multiple Data Displays */}
      <section className="multiple-displays-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="display-device">
                {activeTab === "aqi-display" && (
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pocket-pm2.5-monitor-wifi.png"
                    alt="PM2.5 monitor face and number screen"
                    className="display-device-image"
                  />
                )}
                {activeTab === "graph-screen" && (
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pm2.5-monitor-graph.png"
                    alt="PM2.5 monitor graph screen"
                    className="display-device-image"
                  />
                )}
                {activeTab === "particle-count" && (
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pm2.5-monitor-particle-count.png"
                    alt="PM2.5 monitor particle count screen"
                    className="display-device-image"
                  />
                )}
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="display-content">
                <h2 className="display-title">
                  Multiple Data-Displays
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/09/leaf-icon.png"
                    alt=""
                    className="leaf-icon"
                  />
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt="Prana Air"
                    className="title-icon"
                  />
                </h2>
                <p className="display-description">
                  Displaying the real-time PM2.5 levels in form of both the emoticon and numerical levels like face,
                  number and graph.
                </p>

                <div className="display-options">
                  <div
                    className={`display-option-primary ${activeTab === "aqi-display" ? "active" : ""}`}
                    onClick={() => openTab("aqi-display")}
                  >
                    <div className="display-option-icon">
                      <img src="https://www.pranaair.com/wp-content/uploads/2023/08/face-number-icon.png" alt="" />
                    </div>
                    <div className="display-option-content">
                      <h3>AQI, PM 1, PM2.5 & PM10 Display</h3>
                      <p>Front view</p>
                    </div>
                  </div>

                  <div className="display-options-row">
                    <div
                      className={`display-option-secondary ${activeTab === "graph-screen" ? "active" : ""}`}
                      onClick={() => openTab("graph-screen")}
                    >
                      <div className="display-option-icon">
                        <img src="https://www.pranaair.com/wp-content/uploads/2023/08/graphic-screen.png" alt="" />
                      </div>
                      <div className="display-option-content">
                        <h3>Graph Screen</h3>
                        <p>Historical Data</p>
                      </div>
                    </div>

                    <div
                      className={`display-option-secondary ${activeTab === "particle-count" ? "active" : ""}`}
                      onClick={() => openTab("particle-count")}
                    >
                      <div className="display-option-icon">
                        <img src="https://www.pranaair.com/wp-content/uploads/2023/08/number-screen.png" alt="" />
                      </div>
                      <div className="display-option-content">
                        <h3>Particle Count</h3>
                        <p>Numerical View</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: AQI Platforms */}
      <section className="aqi-platforms-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="platform-tabs-container">
                <div className="platform-tabs">
                  <div
                    className={`platform-tab ${activePlatform === "aqi-app" ? "active" : ""}`}
                    onClick={() => changePlatform("aqi-app")}
                  >
                    {activePlatform === "aqi-app" && (
                      <span className="platform-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/09/leaf-icon.png"
                          alt=""
                          className="tab-leaf-icon"
                        />
                      </span>
                    )}
                    AQI App
                  </div>
                  <div
                    className={`platform-tab ${activePlatform === "aqi-dashboard" ? "active" : ""}`}
                    onClick={() => changePlatform("aqi-dashboard")}
                  >
                    {activePlatform === "aqi-dashboard" && (
                      <span className="platform-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/09/leaf-icon.png"
                          alt=""
                          className="tab-leaf-icon"
                        />
                      </span>
                    )}
                    AQI Dashboard
                  </div>
                  <div
                    className={`platform-tab ${activePlatform === "aqi-tv-app" ? "active" : ""}`}
                    onClick={() => changePlatform("aqi-tv-app")}
                  >
                    {activePlatform === "aqi-tv-app" && (
                      <span className="platform-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/09/leaf-icon.png"
                          alt=""
                          className="tab-leaf-icon"
                        />
                      </span>
                    )}
                    AQI TV App
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AQI App Content */}
          {activePlatform === "aqi-app" && (
            <div className="platform-content">
              <div className="row">
                <div className="col-12 text-center">
                  <p className="platform-description">
                    Access the real-time particulate matter PM1, PM2.5, PM10 data
                    <br />
                    of your PM2.5 monitor in AQI mobile app.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="app-info">
                    <h2 className="app-title">Health Advice</h2>
                    <p className="app-subtitle">
                      Prana Air Pocket PM2.5 Monitor
                      <br />
                      offers real-time health advice based
                      <br />
                      on current air quality conditions.
                    </p>
                  </div>
                </div>

                <div className="col-lg-8 col-md-12">
                  <div className="app-features-layout">
                    <div className="app-phone-container">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/08/pm-monitor-mob-app.png"
                        alt="AQI Mobile App"
                        className="app-phone-image"
                      />
                    </div>

                    <div className="app-feature-item feature-01">
                      <div className="feature-number">01</div>
                      <h3 className="feature-title">Health Advice</h3>
                      <div className="feature-image-container">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/09/health-advice-of-pm-pollution.webp"
                          alt="health advice of pm pollution level on AQI app"
                          className="feature-image"
                        />
                      </div>
                    </div>

                    <div className="app-feature-item feature-02">
                      <div className="feature-number">02</div>
                      <h3 className="feature-title">Historic Data</h3>
                      <div className="feature-image-container">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-pm-datas-on-AQI-app.png"
                          alt="historic pm data on AQI app from Prana Air Pocket PM Monitor"
                          className="feature-image"
                        />
                      </div>
                    </div>

                    <div className="app-feature-item feature-03">
                      <div className="feature-number">03</div>
                      <h3 className="feature-title">Monthly Insight</h3>
                      <div className="feature-image-container">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/08/monthly-insight-data.png"
                          alt="monthly calender pm data on AQI app"
                          className="feature-image"
                        />
                      </div>
                    </div>

                    <div className="app-feature-item feature-04">
                      <div className="feature-number">04</div>
                      <h3 className="feature-title">Filtration Score</h3>
                      <div className="feature-image-container">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/08/filtration-score.png"
                          alt="air pollution filtration score detected on AQI app"
                          className="feature-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AQI Dashboard Content */}
          {activePlatform === "aqi-dashboard" && (
            <div className="platform-content">
              <div className="row">
                <div className="col-12 text-center">
                  <p className="platform-description">
                    The dashboard is a free and easy-to-use tool that allows you to
                    <br />
                    connect your PM2.5 monitor and access your data from anywhere
                    <br />
                    in the world.
                  </p>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="dashboard-features">
                    <div className="dashboard-feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/10/real-time-co2-level.png"
                          alt="Real-time PM2.5 air quality level"
                        />
                      </div>
                      <div className="feature-text">
                        <h3>Real-time PM2.5 air quality level</h3>
                      </div>
                    </div>

                    <div className="dashboard-feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-data.png"
                          alt="Insightful air quality web-dashboard"
                        />
                      </div>
                      <div className="feature-text">
                        <h3>Insightful air quality web-dashboard</h3>
                      </div>
                    </div>

                    <div className="dashboard-feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-co2-graph-level.png"
                          alt="Historical air quality graphs of PM level"
                        />
                      </div>
                      <div className="feature-text">
                        <h3>Historical air quality graphs of PM level</h3>
                      </div>
                    </div>

                    <div className="dashboard-feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/10/health-recommendation.png"
                          alt="Air quality health recommendations"
                        />
                      </div>
                      <div className="feature-text">
                        <h3>Air quality health recommendations</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7 col-md-12">
                  <div className="dashboard-preview">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/pm2.5-aqi-dashboard.png"
                      alt="AQI Dashboard Preview"
                      className="dashboard-preview-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AQI TV App Content */}
          {activePlatform === "aqi-tv-app" && (
            <div className="platform-content">
              <div className="row">
                <div className="col-12 text-center">
                  <p className="platform-description">
                    Get a real-time overview of your PM2.5 air quality on the big
                    <br />
                    screen with AQI TV app.
                  </p>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="tv-app-features">
                    <div className="tv-app-feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/10/real-time-co2-level.png"
                          alt="Real-time PM1, PM2.5, PM10 air quality level"
                        />
                      </div>
                      <div className="feature-text">
                        <h3>Real-time PM1, PM2.5, PM10 air quality level</h3>
                      </div>
                    </div>

                    <div className="tv-app-feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-data.png"
                          alt="Historical PM data for 1, 8, 12 hours"
                        />
                      </div>
                      <div className="feature-text">
                        <h3>Historical PM data for 1, 8, 12 hours.</h3>
                      </div>
                    </div>

                    <div className="tv-app-feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/10/control-tv-app-form-mobile.png"
                          alt="Control AQI TV app from smartphone"
                        />
                      </div>
                      <div className="feature-text">
                        <h3>Control AQI TV app from smartphone.</h3>
                      </div>
                    </div>

                    <div className="tv-app-feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/10/indicate-valid-score-co2.png"
                          alt="The data indicates air quality score"
                        />
                      </div>
                      <div className="feature-text">
                        <h3>The data indicates air quality score.</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7 col-md-12">
                  <div className="tv-app-preview">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-tv-app-for-pocket-pm2.5-monitor.webp"
                      alt="AQI TV App Preview"
                      className="tv-app-preview-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 6: Remote Data Accessibility */}
      <section className="remote-data-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="remote-data-content">
                <h2 className="remote-data-title">
                  Remote Data
                  <br />
                  Accessibility
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt="Prana Air"
                    className="title-icon"
                  />
                </h2>
                <p className="remote-data-description">
                  AQI data cloud storage eases the accessibility of the monitors air quality data remotely anytime
                  anywhere wherever you go.
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="remote-data-flow">
                <ul className="remote-data-steps">
                  <li className="remote-data-step step-01">
                    <div className="step-number">01</div>
                    <h6 className="step-title">Device</h6>
                    <div className="step-image-container">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pm2.5-monitor.png"
                        alt="PM Monitor"
                        className="step-image"
                      />
                    </div>
                    <p className="step-label">PM Monitor</p>
                  </li>
                  <li className="remote-data-step step-02">
                    <div className="step-number">02</div>
                    <h6 className="step-title">Wifi</h6>
                    <div className="step-image-container">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/08/pm-wifi.png"
                        alt="Wifi Connectivity"
                        className="step-image"
                      />
                    </div>
                    <p className="step-label">Wifi Connectivity</p>
                  </li>
                  <li className="remote-data-step step-03">
                    <div className="step-number">03</div>
                    <h6 className="step-title">AQI cloud</h6>
                    <div className="step-image-container">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/08/pm-aqi-cloud.png"
                        alt="AQI Cloud Server"
                        className="step-image"
                      />
                    </div>
                    <p className="step-label">AQI Cloud Server</p>
                  </li>
                  <li className="remote-data-step step-04">
                    <div className="step-number">04</div>
                    <h6 className="step-title">AQI App</h6>
                    <div className="step-image-container">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/08/pm-aqi-app.png"
                        alt="PM2.5 Data on App"
                        className="step-image"
                      />
                    </div>
                    <p className="step-label">PM2.5 Data on App</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Data Connectivity to Mobile App */}
      <section className="data-connectivity-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="connectivity-content">
                <h2 className="connectivity-title">
                  Pocket PM2.5 Monitor
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt="Prana Air"
                    className="title-icon"
                  />
                </h2>
                <h3 className="connectivity-subtitle">Data connectivity to Mobile App</h3>

                <div className="connectivity-steps">
                  <div
                    className={`connectivity-step ${activeStep === 1 ? "active-step" : ""}`}
                    onClick={() => changeStep(1)}
                  >
                    <div className="step-icon">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/08/install.png.png"
                        alt="Install AQI App"
                      />
                    </div>
                    <div className="step-content">
                      <h4 className="step-title">1. INSTALL AQI APP & SIGN UP</h4>
                      <p className="step-description">
                        Install the AQI app on your smartphones from the app store. Sign up & log in through your
                        account.
                      </p>
                    </div>
                  </div>

                  <div
                    className={`connectivity-step ${activeStep === 2 ? "active-step" : ""}`}
                    onClick={() => changeStep(2)}
                  >
                    <div className="step-icon">
                      <img src="https://www.pranaair.com/wp-content/uploads/2023/09/connect.png" alt="Connect Device" />
                    </div>
                    <div className="step-content">
                      <h4 className="step-title">2. CONNECT THE DEVICE WITH THE APP</h4>
                      <p className="step-description">
                        Go to My Device & select Pocket PM2.5 Monitor. Long press the power button on top of the
                        device until a QR code appears on the screen.
                      </p>
                    </div>
                  </div>

                  <div
                    className={`connectivity-step ${activeStep === 3 ? "active-step" : ""}`}
                    onClick={() => changeStep(3)}
                  >
                    <div className="step-icon">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/09/scan-qr-code.png"
                        alt="Scan QR Code"
                      />
                    </div>
                    <div className="step-content">
                      <h4 className="step-title">3. SCAN THE QR & CONFIGURE WIFI</h4>
                      <p className="step-description">
                        Scan the QR code or Enter the device ID displayed on your device screen. Fill in your Wi-Fi
                        details. Your device should successfully be connected now.
                      </p>
                    </div>
                  </div>

                  <div
                    className={`connectivity-step ${activeStep === 4 ? "active-step" : ""}`}
                    onClick={() => changeStep(4)}
                  >
                    <div className="step-icon">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/09/data.png"
                        alt="Get Insightful Data"
                      />
                    </div>
                    <div className="step-content">
                      <h4 className="step-title">4. NOW GET THE INSIGHTFUL DATA-</h4>
                      <p className="step-description">
                        Analyse the PM2.5 level in real-time & historical data stored in the AQI cloud through the app
                        on your smartphone.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="download-app-section">
                  <h3 className="download-title">
                    Download the <span className="highlight-text">AQI App</span>
                  </h3>
                  <p className="download-description">
                    Integrate your monitors data to our mobile application to access the data remotely and analyze the
                    historical trend.
                  </p>
                  <div className="app-store-buttons">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.aqi.data"
                      className="app-store-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/google-play-store.png"
                        alt="Google Play Store"
                      />
                    </a>
                    <a
                      href="https://apps.apple.com/tt/app/airqualityindex-aqi/id1439684571"
                      className="app-store-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/02/appstore.png"
                        alt="Apple App Store"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-preview">
                <div className="app-image-container">
                  {activeStep === 1 && (
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2022/06/1.png"
                      alt="Install AQI App Preview"
                    />
                  )}
                  {activeStep === 2 && (
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/09/connect-device-with-our-app.png"
                      alt="Connect Device Preview"
                    />
                  )}
                  {activeStep === 3 && (
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/09/scan-qr-and-configure-with-wifi.png"
                      alt="Scan QR Code Preview"
                    />
                  )}
                  {activeStep === 4 && (
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/09/insightful-data.png"
                      alt="Insightful Data Preview"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Easy Monitoring */}
      <section className="easy-monitoring-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="monitoring-content">
                <h2 className="monitoring-title">
                  Monitoring PM2.5
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt="Prana Air"
                    className="title-icon"
                  />
                </h2>
                <h3 className="monitoring-subtitle">has never been this easy!</h3>
                <p className="monitoring-description">
                  Monitor PM2.5 levels in real time, easily and accurately with Prana Air Pocket PM2.5 Air Quality
                  Monitor. This compact and portable monitor is perfect for tracking air quality in your home, office,
                  car, or anywhere else you go. Simply turn it on and it will start measuring PM2.5 levels immediately.
                  The large, easy-to-read display shows you the current PM2.5 level, as well as air quality
                  recommendations.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="monitoring-image-container">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pm2.5-monitor-data-on-aqi-mobile-app.webp"
                  alt="Prana Air PM2.5 Monitor with mobile app"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Unboxing Video */}
      <section className="unboxing-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="unboxing-title">
                Unboxing of Prana Air Pocket PM2.5 Air Quality Monitor
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt="Prana Air"
                  className="title-icon"
                />
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/vKTDgUu1K_E"
                  title="Unboxing of Prana Air Pocket PM2.5 Air Quality Monitor"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Product Gallery & Salient Features */}
      <section className="gallery-features-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="section-title">
                Pocket PM2.5 Monitor
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/09/leaf-icon.png"
                  alt=""
                  className="leaf-icon"
                />
              </h2>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 col-md-12">
              <div className="gallery-container">
                <div className="gallery-main-image">
                  {activeGalleryTab === "MonitorTab1" && (
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-smart-portable-monitor.png"
                      alt="prana-air-smart-portable-monitor"
                    />
                  )}
                  {activeGalleryTab === "MonitorTab2" && (
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/03/pocket-monitor-side-view.jpeg"
                      alt="pocket-monitor-side-view"
                    />
                  )}
                  {activeGalleryTab === "MonitorTab3" && (
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/03/pm-pocket-monitor-sideview.jpeg"
                      alt="pm-pocket-monitor-sideview"
                    />
                  )}
                </div>
                <div className="gallery-thumbnails">
                  <button
                    className={`gallery-thumbnail ${activeGalleryTab === "MonitorTab1" ? "active" : ""}`}
                    onClick={() => changeGalleryTab("MonitorTab1")}
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-smart-portable-monitor-280x280.png"
                      alt="prana-air-smart-portable-monitor"
                    />
                  </button>
                  <button
                    className={`gallery-thumbnail ${activeGalleryTab === "MonitorTab2" ? "active" : ""}`}
                    onClick={() => changeGalleryTab("MonitorTab2")}
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/03/pocket-monitor-side-view-300x273.jpeg"
                      alt="pocket-monitor-side-view"
                    />
                  </button>
                  <button
                    className={`gallery-thumbnail ${activeGalleryTab === "MonitorTab3" ? "active" : ""}`}
                    onClick={() => changeGalleryTab("MonitorTab3")}
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/03/pm-pocket-monitor-sideview-300x273.jpeg"
                      alt="pm-pocket-monitor-sideview"
                    />
                  </button>
                </div>
                <div className="gallery-brochure">
                  <a href="#" className="download-brochure-btn">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png"
                      alt="Download Brochure"
                      className="btn-icon"
                    />
                    <span>Download Brochure</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="salient-features">
                <h2 className="features-title">
                  Salient Features
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/09/leaf-icon.png"
                    alt=""
                    className="leaf-icon"
                  />
                </h2>
                <h3 className="features-subtitle">Pocket PM2.5 Monitor</h3>
                <p className="features-description">
                  It is a smart portable monitor with amazing features that understand the quality of the air you
                  breathe in real-time indoors & outdoor.
                </p>

                <div className="features-grid">
                  <div className="features-item">
                    <h4 className="item-title">PM1, PM2.5, PM10</h4>
                    <p className="item-value">Particles Count</p>
                  </div>
                  <div className="features-item">
                    <h4 className="item-title">Connectivity</h4>
                    <p className="item-value">WiFi 2.4 GHz</p>
                  </div>
                  <div className="features-item">
                    <h4 className="item-title">450mAh</h4>
                    <p className="item-value">Battery</p>
                  </div>
                  <div className="features-item">
                    <h4 className="item-title">0-999µg/m³</h4>
                    <p className="item-value">Range</p>
                  </div>
                </div>

                <div className="features-buttons">
                  <a href="#" className="feature-btn brochure-btn">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png"
                      alt="Brochure"
                      className="btn-icon"
                    />
                    <span>Brochure</span>
                  </a>
                  <a href="#" className="feature-btn manual-btn">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png"
                      alt="Manual"
                      className="btn-icon"
                    />
                    <span>Manual</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Technical Specifications */}
      <section className="technical-specs-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="technical-specs">
                <h2 className="specs-title">
                  Technical Specifications
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/09/leaf-icon.png"
                    alt=""
                    className="leaf-icon"
                  />
                </h2>
                <h3 className="specs-subtitle">Pocket PM2.5 Monitor</h3>

                <div className="specs-table">
                  <div className="specs-row">
                    <div className="specs-cell">
                      <div className="specs-label">Sensor</div>
                      <div className="specs-value">Laser sensor</div>
                    </div>
                    <div className="specs-cell">
                      <div className="specs-label">Weight</div>
                      <div className="specs-value">60 gram</div>
                    </div>
                  </div>
                  <div className="specs-row">
                    <div className="specs-cell">
                      <div className="specs-label">Dimension</div>
                      <div className="specs-value">5.8 x 2.5 x 4.6 cm</div>
                    </div>
                    <div className="specs-cell">
                      <div className="specs-label">Range</div>
                      <div className="specs-value">Up to 999 µg/m³</div>
                    </div>
                  </div>
                  <div className="specs-row">
                    <div className="specs-cell">
                      <div className="specs-label">Power Supply</div>
                      <div className="specs-value">5V DC / Type-C USB cable</div>
                    </div>
                    <div className="specs-cell">
                      <div className="specs-label">Display</div>
                      <div className="specs-value">LCD Display</div>
                    </div>
                  </div>
                  <div className="specs-row">
                    <div className="specs-cell">
                      <div className="specs-label">Connectivity</div>
                      <div className="specs-value">WiFi [2.4GHz]</div>
                    </div>
                    <div className="specs-cell">
                      <div className="specs-label">Data Storage</div>
                      <div className="specs-value">AQI Cloud Storage (option)</div>
                    </div>
                  </div>
                  <div className="specs-row">
                    <div className="specs-cell">
                      <div className="specs-label">Mobile App Enabled</div>
                      <div className="specs-value">AQI Mobile App [iOS & Android]</div>
                    </div>
                    <div className="specs-cell">
                      <div className="specs-label">Battery</div>
                      <div className="specs-value">450 mAh</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Banner and Slider */}
      <section className="banner-slider-section">
        <div className="container">
          {/* Banner Part */}
          <div className="row">
            <div className="col-12">
              <div className="portable-banner">
                <div className="banner-content">
                  <h2 className="banner-title">
                    Smallest & Portable
                    <br />
                    Air Quality Monitor{" "}
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/09/leaf-icon.png"
                      alt=""
                      className="leaf-icon"
                    />
                  </h2>
                  <div className="banner-buttons">
                    <a href="#" className="banner-btn buy-now">
                      Buy Now
                    </a>
                    <a href="#" className="banner-btn amazon">
                      Amazon
                    </a>
                  </div>
                </div>
                <div className="banner-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/10/smallest-and-portable-air-quality-monitor.png"
                    alt="Smallest and Portable Air Quality Monitor"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Slider Part */}
          <div className="row mt-5">
            <div className="col-12">
              <div id="monitorSlider" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#monitorSlider"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#monitorSlider"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#monitorSlider"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/pm2.5-monitor-graphic-scaled.jpg"
                      className="d-block w-100"
                      alt="PM2.5 Monitor Graphic Display"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/pm2.5-monitor-graphic-scaled.jpg"
                      className="d-block w-100"
                      alt="PM2.5 Monitor Graphic Display"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/pm2.5-monitor-numberic-scaled.jpg"
                      className="d-block w-100"
                      alt="PM2.5 Monitor Numeric Display"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#monitorSlider"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#monitorSlider"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: Our Clientele */}
      <section className="clientele-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="clientele-title">
                Our Clientele
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/09/leaf-icon.png"
                  alt=""
                  className="leaf-icon"
                />
              </h2>
              <p className="clientele-subtitle">We are honored to work with so many well-known companies.</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/microsoftt.jpg"
                  alt="Microsoft"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/microsoftt.jpg"
                  alt="Morgan Stanley"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/microsoftt.jpg"
                  alt="OLA"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/microsoftt.jpg"
                  alt="Renault Nissan"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/microsoftt.jpg"
                  alt="CII"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/microsoftt.jpg"
                  alt="Interglobe"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/microsoftt.jpg"
                  alt="Marriott"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/microsoftt.jpg"
                  alt="CSIR"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/microsoftt.jpg"
                  alt="TATA"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/microsoftt.jpg"
                  alt="Mahindra"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/microsoftt.jpg"
                  alt="GMDA"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/microsoftt.jpg"
                  alt="Havells"
                  className="client-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: FAQs */}
      <section className="faqs-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="faqs-title">
                FAQs
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/09/leaf-icon.png"
                  alt=""
                  className="leaf-icon"
                />
              </h2>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <div className="faq-accordion">
                <div className="faq-item">
                  <div
                    className={`faq-question ${activeFaq === "faq1" ? "active" : ""}`}
                    onClick={() => toggleFaq("faq1")}
                  >
                    <span className="question-number">1.</span>
                    <span className="question-text">What is PM2.5, and why is it important to monitor?</span>
                    <span className="toggle-icon">{activeFaq === "faq1" ? "−" : "+"}</span>
                  </div>
                  <div className={`faq-answer ${activeFaq === "faq1" ? "show" : ""}`}>
                    <p>
                      PM2.5 refers to fine particulate matter with a diameter of 2.5 micrometers or smaller. It includes
                      pollutants like dust, smoke, and pollutants that can be harmful to health. Monitoring PM2.5 levels
                      is crucial because high concentrations can lead to respiratory and cardiovascular problems.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div
                    className={`faq-question ${activeFaq === "faq2" ? "active" : ""}`}
                    onClick={() => toggleFaq("faq2")}
                  >
                    <span className="question-number">2.</span>
                    <span className="question-text">How does Prana Air Pocket PM2.5 monitor work?</span>
                    <span className="toggle-icon">{activeFaq === "faq2" ? "−" : "+"}</span>
                  </div>
                  <div className={`faq-answer ${activeFaq === "faq2" ? "show" : ""}`}>
                    <p>
                      The Prana Air Pocket PM2.5 monitor uses a high-precision laser sensor to detect and measure
                      airborne particles. The sensor counts the number of particles in different size ranges (PM1,
                      PM2.5, and PM10) and calculates the concentration in micrograms per cubic meter (µg/m³). This data
                      is then displayed on the LCD screen and can be transmitted via WiFi to the AQI app for remote
                      monitoring and analysis.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div
                    className={`faq-question ${activeFaq === "faq3" ? "active" : ""}`}
                    onClick={() => toggleFaq("faq3")}
                  >
                    <span className="question-number">3.</span>
                    <span className="question-text">Is the Prana Air PM2.5 monitor easy to use?</span>
                    <span className="toggle-icon">{activeFaq === "faq3" ? "−" : "+"}</span>
                  </div>
                  <div className={`faq-answer ${activeFaq === "faq3" ? "show" : ""}`}>
                    <p>
                      Yes, the Prana Air PM2.5 monitor is designed for ease of use. Simply power it on, and it
                      immediately begins measuring air quality. The clear LCD display shows readings in real-time, with
                      color-coded indicators for easy interpretation. Connecting to the AQI app is straightforward with
                      the step-by-step instructions provided.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div
                    className={`faq-question ${activeFaq === "faq4" ? "active" : ""}`}
                    onClick={() => toggleFaq("faq4")}
                  >
                    <span className="question-number">4.</span>
                    <span className="question-text">Is the device portable?</span>
                    <span className="toggle-icon">{activeFaq === "faq4" ? "−" : "+"}</span>
                  </div>
                  <div className={`faq-answer ${activeFaq === "faq4" ? "show" : ""}`}>
                    <p>
                      The Pocket PM2.5 Monitor is one of the smallest and most portable air quality monitors available.
                      Weighing just 60 grams and measuring 5.8 x 2.5 x 4.6 cm, it fits easily in your pocket or bag. The
                      450 mAh battery provides 3-4 hours of continuous use, making it perfect for monitoring air quality
                      on the go.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div
                    className={`faq-question ${activeFaq === "faq5" ? "active" : ""}`}
                    onClick={() => toggleFaq("faq5")}
                  >
                    <span className="question-number">5.</span>
                    <span className="question-text">Is there a mobile app for monitoring the data remotely?</span>
                    <span className="toggle-icon">{activeFaq === "faq5" ? "−" : "+"}</span>
                  </div>
                  <div className={`faq-answer ${activeFaq === "faq5" ? "show" : ""}`}>
                    <p>
                      Yes, the Prana Air Pocket PM2.5 Monitor connects to the AQI mobile app (available for both iOS and
                      Android). Through the app, you can view real-time data, historical trends, health advice based on
                      current air quality, and monthly insights. The data is stored in the AQI cloud, allowing you to
                      access it from anywhere at any time.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div
                    className={`faq-question ${activeFaq === "faq6" ? "active" : ""}`}
                    onClick={() => toggleFaq("faq6")}
                  >
                    <span className="question-number">6.</span>
                    <span className="question-text">Is Prana Air PM2.5 monitor suitable for outdoor use?</span>
                    <span className="toggle-icon">{activeFaq === "faq6" ? "−" : "+"}</span>
                  </div>
                  <div className={`faq-answer ${activeFaq === "faq6" ? "show" : ""}`}>
                    <p>
                      Yes, the Prana Air PM2.5 monitor is designed for both indoor and outdoor use. Its portable design
                      makes it ideal for checking air quality in various environments, from your home and office to
                      outdoor spaces like parks or construction sites. The device can measure PM levels up to 999 µg/m³,
                      making it suitable for a wide range of air quality conditions.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div
                    className={`faq-question ${activeFaq === "faq7" ? "active" : ""}`}
                    onClick={() => toggleFaq("faq7")}
                  >
                    <span className="question-number">7.</span>
                    <span className="question-text">Does it have warranty period?</span>
                    <span className="toggle-icon">{activeFaq === "faq7" ? "−" : "+"}</span>
                  </div>
                  <div className={`faq-answer ${activeFaq === "faq7" ? "show" : ""}`}>
                    <p>
                      Yes, the Prana Air Pocket PM2.5 Monitor comes with a standard 1-year manufacturers warranty that
                      covers defects in materials and workmanship under normal use. Extended warranty options are also
                      available at the time of purchase. For warranty claims or service, please contact our customer
                      support team with your purchase details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

