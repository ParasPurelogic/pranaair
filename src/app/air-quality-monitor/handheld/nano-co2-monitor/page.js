"use client"
import { useEffect, useState, useRef } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

export default function NanoCO2MonitorPage() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("Overview")
  const [activeImage, setActiveImage] = useState(0)
  const navbarRef = useRef(null)
  const tabsContainerRef = useRef(null)
  const [activeFaq, setActiveFaq] = useState(null)

  // Add these additional mobile responsiveness improvements at the top of the file, after the useState declarations

  // Add this function to handle smooth scrolling for mobile navigation
  const scrollToTabSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Add offset for the sticky header
      const yOffset = -70
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({
        top: y,
        behavior: "smooth",
      })
    }
    setActiveTab(sectionId)
  }

  // Images for the product gallery
  const productImages = [
    "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor.png",
    "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-co2-monitor.png",
    "https://www.pranaair.com/wp-content/uploads/2023/06/pranaa-air-nano-co2-device.png",
    "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor-backview.png",
  ]

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

    // Add scroll event listener for sticky navbar
    const handleScroll = () => {
      const navbar = navbarRef.current
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Add scroll event for buy now button on mobile
    const handleBuyNowButtonScroll = () => {
      const buyNowButton = document.getElementById("buy-now-button")
      if (buyNowButton) {
        if (window.pageYOffset > 1200) {
          buyNowButton.style.display = "block"
        } else {
          buyNowButton.style.display = "none"
        }
      }
    }

    window.addEventListener("scroll", handleBuyNowButtonScroll)

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", handleBuyNowButtonScroll)
    }
  }, [])

  // Function to scroll to section when tab is clicked
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setActiveTab(sectionId)
  }

  // Handle horizontal scrolling for tabs on mobile
  useEffect(() => {
    const tabsContainer = tabsContainerRef.current
    if (tabsContainer) {
      const handleWheel = (e) => {
        if (window.innerWidth < 768) {
          e.preventDefault()
          tabsContainer.scrollLeft += e.deltaY
        }
      }

      tabsContainer.addEventListener("wheel", handleWheel, { passive: false })

      return () => {
        tabsContainer.removeEventListener("wheel", handleWheel)
      }
    }
  }, [])

  const handleThumbnailClick = (index) => {
    setActiveImage(index)
  }

  const toggleFaq = (faqId) => {
    setActiveFaq(activeFaq === faqId ? null : faqId)
  }

  return (
    <main className="nano-co2-monitor-page">
      {/* Sticky Navigation Bar */}
      <div className="product-navbar" ref={navbarRef}>
        <div className="container">
          <div className="nav-tabs" ref={tabsContainerRef}>
            <button
              className={`nav-tab ${activeTab === "Overview" ? "active" : ""}`}
              onClick={() => scrollToTabSection("Overview")}
            >
              Overview
            </button>
            <button
              className={`nav-tab ${activeTab === "Features" ? "active" : ""}`}
              onClick={() => scrollToTabSection("Features")}
            >
              Features
            </button>
            <button
              className={`nav-tab ${activeTab === "Functions" ? "active" : ""}`}
              onClick={() => scrollToTabSection("Functions")}
            >
              Functions
            </button>
            <button
              className={`nav-tab ${activeTab === "Tech-Specs" ? "active" : ""}`}
              onClick={() => scrollToTabSection("Tech-Specs")}
            >
              Tech-Specs
            </button>
            <button
              className={`nav-tab ${activeTab === "Compare" ? "active" : ""}`}
              onClick={() => scrollToTabSection("Compare")}
            >
              Compare
            </button>
            <button
              className={`nav-tab ${activeTab === "FAQs" ? "active" : ""}`}
              onClick={() => scrollToTabSection("FAQs")}
            >
              FAQs
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: Product Overview */}
      <section className="product-overview" id="Overview">
        <div className="container">
          <div className="row align-items-stretch">
            {/* Product Gallery */}
            <div className="col-lg-4">
              <div className="product-gallery">
                <div className="main-image">
                  <img
                    src={productImages[activeImage] || "/placeholder.svg"}
                    alt="Nano CO2 Monitor"
                    className="img-fluid"
                  />
                </div>
                <div className="thumbnails">
                  {productImages.map((image, index) => (
                    <div
                      key={index}
                      className={`thumbnail ${activeImage === index ? "active" : ""}`}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <img src={image || "/placeholder.svg"} alt={`Nano CO2 Monitor view ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="product-info">
                <h1 className="product-title">Nano CO2 Monitor</h1>
                <p className="product-subtitle">Your portable health consultant</p>

                <div className="product-price">
                  <span className="price-label">M.R.P.</span>
                  <span className="price-value">₹ 2,490.00</span>
                </div>

                <div className="product-description">
                  <p>
                    Prana Air Nano CO2 monitor with NDIR Sensor is a handy air quality monitoring device that helps you
                    monitor CO2 levels in real-time. Track your carbon footprint in real-time with an advanced and
                    innovative cutting edge technology. Empowering you to make informed decisions about CO2 levels
                    around you.
                  </p>
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="col-lg-4">
              <div className="product-options">
                <div className="option-group">
                  <label>Model</label>
                  <div className="select-wrapper">
                    <select className="form-select">
                      <option>Nano CO2</option>
                      <option>Nano CO</option>
                      <option>Nano TVOC/HCHO</option>
                    </select>
                  </div>
                </div>

                <div className="option-group">
                  <label>Quantity</label>
                  <input type="number" className="form-control" min="1" defaultValue="1" />
                </div>

                <button className="buy-now-btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CO2 Monitoring Banner */}
      <section className="new-monitor-section-feature">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">{/* This div will contain the background image */}</div>
            <div className="col-lg-6 col-md-12">
              <div className="monitor_right_box">
                <h2>CO2 Monitoring has never been this easy!</h2>
                <p>
                  Prana Air Nano CO2 monitor is convenient to carry over larger distances with a simple yet attractive
                  style.
                </p>
                <ul className="monitor_features">
                  <li>
                    <div className="feature-icon-circle">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/running-fitness-icon.png"
                        alt="use for fitness icon"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon-circle">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/cycing-icon.png"
                        alt="cycling use icon"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon-circle">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/work-out-icon.png"
                        alt="work out icon"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon-circle">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/working-in-office-icon.png"
                        alt="use for office work icon"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Features */}
      <section className="monitor_section qualitative_feature_sec" id="Features">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="Qualitativ_feature_box feature-icon">
                <h2>Qualitative features of Nano CO2 Monitor | Portable</h2>
                <p>
                  It has a small, compact body with a minimal and attractive style. People adore our mini health
                  consultant and the way it combines aesthetics and technology.
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/co2-real-time-icon.png"
                      alt="Real-time CO2 Monitoring"
                    />
                  </div>
                  <div className="feature-text">
                    <span>
                      Real-time CO2
                      <br />
                      Monitoring
                    </span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img src="https://www.pranaair.com/wp-content/uploads/2023/06/ndir.png" alt="NDIR Technology" />
                  </div>
                  <div className="feature-text">
                    <span>
                      NDIR
                      <br />
                      Technology
                    </span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/mini-device-icon.png"
                      alt="Mini & Portable Device"
                    />
                  </div>
                  <div className="feature-text">
                    <span>
                      Mini & Portable
                      <br />
                      Device
                    </span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/hd-clr-icon.png"
                      alt="HD Color Display"
                    />
                  </div>
                  <div className="feature-text">
                    <span>
                      HD Color
                      <br />
                      Display
                    </span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/mah-battery-icon.png"
                      alt="700 mAh Lithium battery"
                    />
                  </div>
                  <div className="feature-text">
                    <span>
                      700 mAh Lithium
                      <br />
                      battery
                    </span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/c-type-icon.png"
                      alt="Type-C interface"
                    />
                  </div>
                  <div className="feature-text">
                    <span>
                      Type-C
                      <br />
                      interface
                    </span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/dynamic-ui-icon-1.png"
                      alt="Dynamic UI"
                    />
                  </div>
                  <div className="feature-text">
                    <span>Dynamic UI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Ultra High Definition Display */}
      <section className="monitor_section ultra_high_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-ultra-hd-screen.png"
                alt="Ultra HD Display"
                className="img-fluid hd-img-device"
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="ultra_heading">
                <h2 className="display-title">
                  <span className="inch_text">19</span>
                  Ultra High Definition color Display
                </h2>
                <p>
                  The ultra-high definition color screen has high-precision sensors installed to precisely monitor the
                  CO2 gas concentration in real-time, and reading is more user-friendly and convenient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Handy & Portable */}
      <section className="handy-portable-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="handy-box">
                <div className="handy-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-handy-nano-co2-monitor.png"
                    alt="Hand holding Prana Air Nano CO2 monitor"
                    className="img-fluid"
                  />
                </div>
                <div className="handy-content">
                  <h3>Handy</h3>
                  <p>
                    The monitor is very user-friendly and convenient to measure CO2 gas concentration in real-time. It
                    is very easy to hold with one hand.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="portable-box">
                <div className="portable-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-portable-co2-monitor.png"
                    alt="Prana Air Nano CO2 monitor with lanyard"
                    className="img-fluid"
                  />
                </div>
                <div className="portable-content">
                  <h3>Portable</h3>
                  <p>
                    It has a small, compact body with a simple, attractive style. People adore our mini health
                    consultant and the way it combines aesthetics and technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Carbon Dioxide in the respiratory environment */}
      <section className="environment_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="carbon_dioxide_box">
                <h2>Carbon Dioxide</h2>
                <h3>in the respiratory environment</h3>
                <p>
                  The respiratory environment is critical. CO2 impacts the comfort levels of a person. When Its level
                  exceeds the limits, it can do both short-term and long-term damage to ones health. Excess CO2 levels
                  can result in stuffiness, dizziness, loss of attention, etc.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="respiratory-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/health-effects-of-co2-gas.jpeg"
                  alt="Carbon Dioxide in respiratory environment"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="health-hazards">
                <h3 className="health_head">
                  Health Hazards of <span className="highlight_text">CO2</span>
                </h3>
                <div className="hazard-grid">
                  <div className="hazard-item">
                    <div className="hazard-icon">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/Feeling-sleepy-and-drowsy.png"
                        alt="Feeling sleepy and drowsy"
                      />
                    </div>
                    <div className="hazard-content">
                      <h4>Feeling sleepy and drowsy</h4>
                      <div className="hazard-level">
                        <span>1000-2000 PPM :</span>
                        <div className="hazard-indicator yellow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="hazard-item">
                    <div className="hazard-icon">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/smooth-breathing-icon.png"
                        alt="Smooth Breathing"
                      />
                    </div>
                    <div className="hazard-content">
                      <h4>Smooth Breathing</h4>
                      <div className="hazard-level">
                        <span>400-1000 PPM :</span>
                        <div className="hazard-indicator green"></div>
                      </div>
                    </div>
                  </div>
                  <div className="hazard-item">
                    <div className="hazard-icon">
                      <img src="https://www.pranaair.com/wp-content/uploads/2023/06/headache.png" alt="Headache" />
                    </div>
                    <div className="hazard-content">
                      <h4>Headache, lethargy, and inability to concentrate</h4>
                      <div className="hazard-level">
                        <span>2000-3000 PPM :</span>
                        <div className="hazard-indicator orange"></div>
                      </div>
                    </div>
                  </div>
                  <div className="hazard-item">
                    <div className="hazard-icon">
                      <img src="https://www.pranaair.com/wp-content/uploads/2023/06/brain.png" alt="Brain damage" />
                    </div>
                    <div className="hazard-content">
                      <h4>Can cause brain damage, coma, even death</h4>
                      <div className="hazard-level">
                        <span>&gt;5000 PPM :</span>
                        <div className="hazard-indicator red"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Small, Sleek, Reliable */}
      <section className="slider_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="slider-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/portable-nano-co2-monitor-of-prana-air.jpg"
                  alt="portable nano co2 monitor of prana air"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="slider-content">
                <h2>Small · Sleek · Reliable</h2>
                <p>
                  Our mini air quality monitor is a perfect companion for a healthier lifestyle. Stay informed about the
                  air you breathe without the hassle of large and complicated equipment.
                </p>
                <div className="slider-navigation">
                  <button className="nav-button prev" aria-label="Previous slide">
                    <span>←</span>
                  </button>
                  <button className="nav-button next" aria-label="Next slide">
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Banner Image */}
      <section className="image_responsive_sec">
        <img
          src="https://www.pranaair.com/wp-content/uploads/2023/06/measuring-co2-level-in-office-with-prana-air-device.jpeg"
          alt="CO2 Monitor Banner"
          className="img-fluid banner-outdoor"
        />
      </section>

      {/* SECTION 9: Real-time CO2 Air quality monitoring */}
      <section className="minigraph_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="mini-co-monitoring-keychain">
                <div className="monitior-heading">
                  <h3>Real-time CO2</h3>
                  <h4>Air quality monitoring</h4>
                </div>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/air-quality-monitoring-co2-gas.png"
                  alt="co2 air quality monitor graph"
                  className="img-fluid"
                />
                <ul className="dot-icon">
                  <li>
                    <h3>
                      CO<sub>2</sub> Level
                    </h3>
                  </li>
                  <li>
                    <h3>Occupancy</h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="Qualitativ_feature_box mini-co2">
                <h3>Accurate</h3>
                <h2>
                  CO<sub>2</sub> Detection
                </h2>
                <p>
                  Indoor CO<sub>2</sub> levels are influenced by various factors, with occupancy being a significant
                  one. Our advanced NDIR Sensor Technology monitor efficiently tracks and measures CO<sub>2</sub>{" "}
                  levels, helping maintain a healthy and comfortable indoor environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: NDIR Technology */}
      <section>
        <div className="container">
          <div className="ndirtechnology_box text-center electrochecmial-para">
            <h5 className="heading-bg">NDIR Technology</h5>
            <h4>
              For CO<sub>2</sub> Detection
            </h4>
            <p>
              For monitoring CO<sub>2</sub>, NDIR sensors are preferred over other detection technologies due to their
              precision, long-term stability, and low power consumption. The sensor is comprised of an infrared emitter,
              a detector, an optical filter, a gas cell, and signal-processing circuitry that detects CO2 in the
              immediate environment by real-time air quality monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11: High-sensitive Smart Chip */}
      <section className="highsensitive_section mob-revers">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="high_sensitive_box">
                <h3>
                  High-sensitive <span className="blue_head">Smart Chip</span>
                </h3>
                <h4>for more Accurate Detection</h4>
                <p>
                  Built-in high-performance chip for air quality detection ensures more accurate instrument detection.
                </p>
                <ul className="sensitive_list">
                  <li>High-sensitivity</li>
                  <li>Fast Operation speed</li>
                  <li>Data Accuracy</li>
                  <li>Energy Efficient</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 sensitive_bg_image">
              <div className="chip-sensor-img floating">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/smart-chip-for-prana-air-co2-monitor.png"
                  alt="Smart Chip Sensor"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Attractive details */}
      <section>
        <div className="container">
          <h2 className="sub_heading">Attractive details for easy carrying</h2>
          <div className="row product_grid_section">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="attractive_box interface_box">
                <div className="top_head">
                  <span className="range_no">01</span>
                  <h4>
                    Type C <span className="detail_text">Interface</span>
                  </h4>
                </div>
                <img
                  className="type-c"
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor-type-c-charging.png"
                  alt="prana air nano co2 monitor type-c charging"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="attractive_box anti_box">
                <div className="top_head">
                  <span className="range_no">02</span>
                  <h4>
                    Anti-loss <span className="detail_text">Lanyard</span>
                  </h4>
                </div>
                <img
                  className="landyard"
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-co2-monitor-lanyard.png"
                  alt="prana air co2 monitor lanyard"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="attractive_box">
                <div className="top_head">
                  <span className="range_no">03</span>
                  <h4>
                    Ultra HD <span className="detail_text">Color screen</span>
                  </h4>
                </div>
                <img
                  className="ultra-hd"
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-ultra-hd-screen.png"
                  alt="prana air nano co2 monitor hd screen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: Product Key functions */}
      <section className="product_key_section" id="Functions">
        <div className="container">
          <h2 className="sub_heading">Product Key functions</h2>
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
              <div className="product-key-img text-center">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor-key-functions.png"
                  alt="Product Key Functions"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="product-key-functions">
                <div className="key-function-item d-flex align-items-center mb-4">
                  <div className="key-function-image me-3">
                    <img
                      className="d-none d-md-block"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/on-off-key.png"
                      alt="on off key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <img
                      className="d-block d-md-none"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/mob-brightness-btn.png"
                      alt="brightness key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="key-function-text">
                    <h3 className="mb-0 fs-5">On/Off key</h3>
                  </div>
                </div>

                <div className="key-function-item d-flex align-items-center mb-4">
                  <div className="key-function-image me-3">
                    <img
                      className="d-none d-md-block"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/auto-calibration-key.png"
                      alt="auto calibration key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <img
                      className="d-block d-md-none"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/mob-power-btn.png"
                      alt="power button key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="key-function-text">
                    <h3 className="mb-0 fs-5">One-button automatic calibration</h3>
                  </div>
                </div>

                <div className="key-function-item d-flex align-items-center">
                  <div className="key-function-image me-3">
                    <img
                      className="d-none d-md-block"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/bright-adjust-key.png"
                      alt="brightness adjust key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <img
                      className="d-block d-md-none"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/auto-btn.png"
                      alt="auto calibration key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="key-function-text">
                    <h3 className="mb-0 fs-5">Brightness adjusting button</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: Battery Capacity */}
      <section className="capacity_polymer_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="Qualitativ_feature_box">
                <h2>Large-capacity Polymer</h2>
                <span className="battery_text">Battery endurance</span>
                <p>
                  Safe and Durable high-performance 700 mAh large capacity polymer lithium battery, with super long
                  endurance.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 capacity_img">
              <div className="battery-device-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/long-battery-life-of-prana-air-co2-monitor.png"
                  alt="Battery Capacity"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15: Technical Specifications */}
      <section className="technical-specification" id="Tech-Specs">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="attractive-txt product-specification-heading">
                <h3>Nano CO2 Monitor</h3>
                <h4>Technical Specifications</h4>
              </div>
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="brochore-btn">
                <a href="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor-brochure.pdf">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/05/brochore-btn.png" alt="brochore-btn" />{" "}
                  Download Brochure
                </a>
              </div>
            </div>
          </div>

          <div className="row mid-box">
            <div className="col-lg-4 col-md-12 box-line">
              <div className="product-specifi">
                Product Name :<h4>Nano CO2 Monitor</h4>
              </div>
              <div className="product-specifi">
                Warm-up time :<h4>35 Sec</h4>
              </div>
              <div className="product-specifi">
                Working Temp. :<h4>-10~50°C</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 box-line">
              <div className="product-specifi">
                Detection Range :<h4>Upto -5000 PPM</h4>
              </div>
              <div className="product-specifi">
                Data Refresh Rate :<h4>2 Sec</h4>
              </div>
              <div className="product-specifi">
                Charging Mode :<h4>USB Type-C</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 box-line">
              <div className="product-specifi">
                Working Voltage :<h4>3.6V</h4>
              </div>
              <div className="product-specifi">
                Operating Humidity :<h4>0-95% RH</h4>
              </div>
              <div className="product-specifi">
                Interface Dimensions :<h4>50.6 x 17 x 85 (mm)</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 16: Banner Image */}
      <section className="image_responsive_sec">
        <img
          src="https://www.pranaair.com/wp-content/uploads/2023/06/monitoring-real-time-co2-gas-level-in-restaurant.jpeg"
          alt="CO2 Monitor Banner"
          className="img-fluid party-outdoor-img"
        />
      </section>

      {/* SECTION 17: Intelligent Alarm System */}
      <section className="intelligent-alarm-system" id="Alarm">
        <div className="container">
          <div className="intelligent-alarm-container">
            <div className="alarm-device-container">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/alert-of-alarm-system-in-prana-air-co2-monitor.png"
                alt="Intelligent Alarm System"
                className="alarm-device-image"
              />
              <div className="sound-waves">
                <div className="sound-wave"></div>
                <div className="sound-wave"></div>
                <div className="sound-wave"></div>
              </div>
            </div>
            <div className="alarm-content">
              <h3 className="alarm-title">Real-time</h3>
              <h2 className="alarm-subtitle">
                <span className="highlight">CO2</span> detection with an intelligent alarm system
              </h2>

              <div className="alarm-description">
                <div className="alarm-level-item">
                  <span className="alarm-level-label">Green:</span>
                  <span className="alarm-level-text">Safe, No alarm sound</span>
                </div>
                <div className="alarm-level-item">
                  <span className="alarm-level-label">Yellow, Orange, and Red:</span>
                  <span className="alarm-level-text">Drip sound cycle alarm, once every 10 minutes.</span>
                </div>
              </div>

              <div className="co2-levels">
                <div className="co2-level">
                  <div className="co2-level-indicator co2-level-green"></div>
                  <span className="co2-level-text">400 – 1000 ± 50PPM</span>
                </div>
                <div className="co2-level">
                  <div className="co2-level-indicator co2-level-yellow"></div>
                  <span className="co2-level-text">1001 – 1200 ± 50PPM</span>
                </div>
                <div className="co2-level">
                  <div className="co2-level-indicator co2-level-orange"></div>
                  <span className="co2-level-text">1201 – 1500 ± 50PPM</span>
                </div>
                <div className="co2-level">
                  <div className="co2-level-indicator co2-level-red"></div>
                  <span className="co2-level-text">1501 ± 50PPM</span>
                </div>
              </div>

              <div className="alarm-note">Know the CO2 around you within 2 seconds:</div>
              <div className="alarm-note-text">
                Detects CO2 in real-time with <span className="highlight">2 seconds</span> data refresh rate.
              </div>

              <div className="gradient-bar"></div>
              <div className="gradient-labels">
                <div className="gradient-label">Security</div>
                <div className="gradient-label">Cycle Alarm</div>
                <div className="gradient-label">Cycle Alarm</div>
                <div className="gradient-label">Cycle Alarm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 18: Product Comparison */}
      <section className="comparison-section" id="Compare">
        <div className="container">
          <h2 className="comparison-title">
            Comparison of Nano CO<sub>2</sub> vs High-End Monitor
          </h2>

          <div className="comparison-products">
            <div className="comparison-product">
              <div className="comparison-product-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor-portable.png"
                  alt="Nano CO2 Monitor"
                />
              </div>
              <div className="comparison-product-name">Nano CO2 Monitor</div>
            </div>
            <div className="comparison-product">
              <div className="comparison-product-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/tsi-co2-monitor.png"
                  alt="High-End Monitor"
                />
              </div>
              <div className="comparison-product-name">High-End Monitor</div>
            </div>
          </div>

          <div className="comparison-table">
            <div className="comparison-row">
              <div className="comparison-label">Description :</div>
              <div className="comparison-value">Nano CO2 Monitor</div>
              <div className="comparison-value">High-End Monitor</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-label">Size :</div>
              <div className="comparison-value">Small</div>
              <div className="comparison-value">Bulky</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-label">Price :</div>
              <div className="comparison-value">Low-cost</div>
              <div className="comparison-value">Expensive</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-label">Weight :</div>
              <div className="comparison-value">Lightweight</div>
              <div className="comparison-value">Comparatively Heavy</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-label">Range :</div>
              <div className="comparison-value">Upto 5000 ppm</div>
              <div className="comparison-value">Upto 5000 ppm</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-label">Accuracy :</div>
              <div className="comparison-value">±5%</div>
              <div className="comparison-value">±3%</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-label">Technology :</div>
              <div className="comparison-value">NDIR Sensor</div>
              <div className="comparison-value">NDIR Sensor</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-label">Portability :</div>
              <div className="comparison-value">High Portability</div>
              <div className="comparison-value">Comparatively less portable</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 19: FAQs */}
      <section className="faqs-section" id="FAQs">
        <div className="container">
          <h2 className="faqs-title">Frequently Asked</h2>
          <h3 className="faqs-subtitle">Questions About Nano CO2 Monitor</h3>

          <div className="faq-accordion">
            <div className="faq-item">
              <div className={`faq-question ${activeFaq === "faq1" ? "active" : ""}`} onClick={() => toggleFaq("faq1")}>
                <span className="question-text">1. What is a nano portable CO2 monitor?</span>
                <span className="toggle-icon">{activeFaq === "faq1" ? "−" : "+"}</span>
              </div>
              <div className={`faq-answer ${activeFaq === "faq1" ? "show" : ""}`}>
                <p>
                  A nano CO2 monitor is a device used to measure the concentration of carbon dioxide in the air in
                  real-time. It is small and portable, making it convenient to carry and use in various indoor spaces.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className={`faq-question ${activeFaq === "faq2" ? "active" : ""}`} onClick={() => toggleFaq("faq2")}>
                <span className="question-text">2. How does Prana Air Nano CO2 monitor work?</span>
                <span className="toggle-icon">{activeFaq === "faq2" ? "−" : "+"}</span>
              </div>
              <div className={`faq-answer ${activeFaq === "faq2" ? "show" : ""}`}>
                <p>
                  This monitor operates by utilizing an NDIR sensor to detect the amount of carbon dioxide in the air.
                  The sensor is capable of measuring the infrared radiation that is absorbed by CO2 molecules present in
                  the air, and this data is then processed to determine the concentration of CO2 in the environment.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className={`faq-question ${activeFaq === "faq3" ? "active" : ""}`} onClick={() => toggleFaq("faq3")}>
                <span className="question-text">3. Why is it important to monitor CO2 levels?</span>
                <span className="toggle-icon">{activeFaq === "faq3" ? "−" : "+"}</span>
              </div>
              <div className={`faq-answer ${activeFaq === "faq3" ? "show" : ""}`}>
                <p>
                  Maintaining optimal indoor air quality is crucial, and monitoring CO2 levels is an effective way to
                  achieve this. Elevated CO2 levels signify inadequate ventilation, and can cause various health issues
                  such as headaches, drowsiness, discomfort, and other related problems. By keeping track of CO2 levels,
                  it is possible to identify when ventilation needs to be improved to ensure good indoor air quality.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className={`faq-question ${activeFaq === "faq4" ? "active" : ""}`} onClick={() => toggleFaq("faq4")}>
                <span className="question-text">4. Where can this carbon dioxide monitor be used?</span>
                <span className="toggle-icon">{activeFaq === "faq4" ? "−" : "+"}</span>
              </div>
              <div className={`faq-answer ${activeFaq === "faq4" ? "show" : ""}`}>
                <p>
                  It is a versatile device suitable for use in diverse indoor environments such as homes, offices,
                  schools, hospitals, and other public buildings. it proves to be especially valuable in areas where
                  people tend to spend extended periods and where ventilation may be insufficient. These devices enable
                  the monitoring of CO2 levels, ensuring optimal indoor air quality in various settings.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className={`faq-question ${activeFaq === "faq5" ? "active" : ""}`} onClick={() => toggleFaq("faq5")}>
                <span className="question-text">5. How accurate is the data of this monitor?</span>
                <span className="toggle-icon">{activeFaq === "faq5" ? "−" : "+"}</span>
              </div>
              <div className={`faq-answer ${activeFaq === "faq5" ? "show" : ""}`}>
                <p>
                  When it comes to measuring CO2 levels, our Nano CO2 monitor has an exceptional quality, and regular
                  calibration further enhances their accuracy. High-quality NDIR sensor is incorporated into the device
                  to deliver precise measurements of CO2 levels, ensuring reliable results.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className={`faq-question ${activeFaq === "faq6" ? "active" : ""}`} onClick={() => toggleFaq("faq6")}>
                <span className="question-text">6. How do I use this CO2 monitor?</span>
                <span className="toggle-icon">{activeFaq === "faq6" ? "−" : "+"}</span>
              </div>
              <div className={`faq-answer ${activeFaq === "faq6" ? "show" : ""}`}>
                <p>
                  To use the CO2 monitor, simply turn it on and let it run for a few minutes to allow it to calibrate
                  and take readings. The device will display the current CO2 concentration in parts per million (ppm).
                  You can then use this information to adjust ventilation and improve indoor air quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  )
}

