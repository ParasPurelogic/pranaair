
import "./styles.css"
import PocketDisplayContent from "@/Components/Pages/PocketMonitor/pocket-display-content"
import PocketDisplayTabs from "@/Components/Pages/PocketMonitor/pocket-display-tabs"
import PocketPlatformContent from "@/Components/Pages/PocketMonitor/pocket-platform-content"
import PocketPlatformTabs from "@/Components/Pages/PocketMonitor/pocket-platform-tabs"
import PocketConnectivityContent from "@/Components/Pages/PocketMonitor/pocket-connectivity-content"
import PocketConnectivitySteps from "@/Components/Pages/PocketMonitor/pocket-connectivity-steps"
import PocketGalleryTabs from "@/Components/Pages/PocketMonitor/pocket-gallery-tabs"
import PocketFaqAccordion from "@/Components/Pages/PocketMonitor/pocket-faq-accordion"
import PocketMonitorSlider from "@/Components/Pages/PocketMonitor/pocket-monitor-slider"

export default function PocketMonitorPage() {

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

          <form
            className="cart"
            action="https://www.pranaair.com/product/pm2-5-pocket-monitor/"
            encType="multipart/form-data"
            method="post"
          >
            <button
              className="single_add_to_cart_button button alt banner-btn"
              name="add-to-cart"
              type="submit"
              value="7312"
            >
              Buy Now
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/09/Vector-3.png"
                alt="icon"
              />
            </button>
          </form>

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
              <PocketDisplayContent />
            </div>
            <div className="col-lg-7 col-md-12">
              <PocketDisplayTabs />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: AQI Platforms */}
      <section className="aqi-platforms-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <PocketPlatformTabs />
            </div>
          </div>

          <PocketPlatformContent />
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

                <PocketConnectivitySteps />

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
              <PocketConnectivityContent />
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
              <PocketGalleryTabs />
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
                  <a href="https://www.pranaair.com/wp-content/uploads/2023/10/Prana-Air-Pocket-PM2.5-Air-Quality-Monitor-Brochure.pdf" className="feature-btn brochure-btn">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png"
                      alt="Brochure"
                      className="btn-icon"
                    />
                    <span>Brochure</span>
                  </a>
                  <a href="https://www.pranaair.com/wp-content/uploads/2024/10/Prana-air-Pocket-PM-air-quality-monitor-manual.pdf" className="feature-btn manual-btn">
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
                    <a href="https://www.pranaair.com/checkout/?add-to-cart=7312" className="banner-btn buy-now">
                      Buy Now
                    </a>
                    <a href="https://www.amazon.in/dp/B07YPLTX7F?ref=myi_title_dp" className="banner-btn amazon">
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
              <PocketMonitorSlider />
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
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/morgan.jpg"
                  alt="Morgan Stanley"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/12/ola.jpg"
                  alt="OLA"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/renault-nissan.jpg"
                  alt="Renault Nissan"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/cii.jpg"
                  alt="CII"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/interglobe.jpg"
                  alt="Interglobe"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/marriott.jpg"
                  alt="Marriott"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/csir.jpg"
                  alt="CSIR"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/tata.jpg"
                  alt="TATA"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/mahindra.jpg"
                  alt="Mahindra"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/gmda.jpg"
                  alt="GMDA"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/havellss.jpg"
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
              <PocketFaqAccordion />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

