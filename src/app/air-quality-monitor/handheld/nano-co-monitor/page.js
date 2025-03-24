"use client"
import { useEffect, useState, useRef, useCallback } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

export default function NanoCOMonitorPage() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("Overview")
  const [activeImage, setActiveImage] = useState(0)
  const navbarRef = useRef(null)
  const sliderRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeDetailCard, setActiveDetailCard] = useState(0)
  const [activeFaq, setActiveFaq] = useState(null)
  const tabsContainerRef = useRef(null)

  // Images for the product gallery
  const productImages = [
    "https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-device.png",
    "https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-left-side-view.png",
    "https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-back-side-view.png",
    "https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-device.png",
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

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
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

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const handleThumbnailClick = (index) => {
    setActiveImage(index)
  }

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? 1 : prev - 1))
  }, [])

  const goToSlide = useCallback((index) => {
    setActiveSlide(index)
  }, [])

  const handleDetailCardScroll = (event) => {
    const container = event.currentTarget
    const scrollPosition = container.scrollLeft
    const cardWidth = container.querySelector(".detail-card").offsetWidth
    const scrollIndex = Math.round(scrollPosition / cardWidth)
    setActiveDetailCard(scrollIndex)
  }

  const toggleFaq = (faqId) => {
    setActiveFaq(activeFaq === faqId ? null : faqId)
  }

  // Add auto-sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)
  }, [nextSlide])

  useEffect(() => {
    const detailsCards = document.querySelector(".details-cards")
    if (detailsCards) {
      detailsCards.addEventListener("scroll", handleDetailCardScroll)
      return () => {
        detailsCards.removeEventListener("scroll", handleDetailCardScroll)
      }
    }
  }, [])

  // Add these sections after Section 7 (Health Hazards of CO Gas)
  return (
    <main className="nano-co-monitor-page">
      {/* Sticky Navigation Bar */}
      <div
        className="product-navbar"
        ref={navbarRef}
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          padding: "8px 0",
        }}
      >
        <div className="container">
          <div
            className="nav-tabs"
            ref={tabsContainerRef}
            style={{
              display: "flex",
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              gap: "15px",
            }}
          >
            <button
              className={`nav-tab ${activeTab === "Overview" ? "active" : ""}`}
              onClick={() => scrollToSection("Overview")}
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              Overview
            </button>
            <button
              className={`nav-tab ${activeTab === "Features" ? "active" : ""}`}
              onClick={() => scrollToSection("Features")}
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              Features
            </button>
            <button
              className={`nav-tab ${activeTab === "Functions" ? "active" : ""}`}
              onClick={() => scrollToSection("Functions")}
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              Functions
            </button>
            <button
              className={`nav-tab ${activeTab === "Tech-Specs" ? "active" : ""}`}
              onClick={() => scrollToSection("Tech-Specs")}
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              Tech-Specs
            </button>
            <button
              className={`nav-tab ${activeTab === "Compare" ? "active" : ""}`}
              onClick={() => scrollToSection("Compare")}
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              Compare
            </button>
            <button
              className={`nav-tab ${activeTab === "FAQs" ? "active" : ""}`}
              onClick={() => scrollToSection("FAQs")}
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
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
            <div className="col-lg-6 col-md-12">
              <div className="product-gallery">
                <div className="main-image">
                  <img
                    src={productImages[activeImage] || "/placeholder.svg"}
                    alt="Nano CO Monitor"
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
                      <img src={image || "/placeholder.svg"} alt={`Nano CO Monitor view ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="col-lg-6 col-md-12">
              <div className="product-info">
                <h1 className="product-title">Nano CO Monitor</h1>
                <p className="product-subtitle">Your portable health device</p>

                <div className="product-price">
                  <span className="price-label">M.R.P.</span>
                  <span className="price-value">₹ 8,990.00</span>
                </div>

                <div className="product-description">
                  <p>
                    Prana Air nano CO monitor is a small portable device that enables real-time monitoring of carbon
                    monoxide (CO) levels. With its advanced and innovative cutting-edge technology, you can keep track
                    of your carbon footprint in real-time. It is a low-cost monitor that can give the same data reading
                    like the high-end equipments.
                  </p>
                </div>

                <div className="product-options">
                  <div className="option-group">
                    <label>Model</label>
                    <div className="select-wrapper">
                      <select className="form-select">
                        <option>Nano CO</option>
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
        </div>
      </section>

      {/* SECTION 2: Monitoring CO Gas */}
      <section className="monitoring-section">
        <div className="monitoring-banner">
          <div className="container position-relative">
            <div className="monitoring-content">
              <h2 className="monitoring-title">Monitoring CO Gas</h2>
              <h3 className="monitoring-subtitle">has never been this easy!</h3>
              <p className="monitoring-description">
                Prana Air nano CO monitor is convenient to carry over larger distances with a simple yet attractive
                style and high data accuracy.
              </p>
            </div>
            <div className="monitoring-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-portable-nano-co-monitor.png"
                alt="Portable Nano CO Monitor"
              />
            </div>
            <div className="activity-icons-wrapper">
              <div className="activity-icons">
                <div className="activity-icon">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/05/cycling-icon-new.png" alt="Cycling" />
                </div>
                <div className="activity-icon">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/05/sitting-icon-new.png" alt="Sitting" />
                </div>
                <div className="activity-icon">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/05/running-icon-new.png" alt="Running" />
                </div>
                <div className="activity-icon">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/05/health-icon-new.png" alt="Health" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Features */}
      <section className="features-section" id="Features">
        <div className="container">
          <div className="features-wrapper">
            <div className="features-left">
              <div className="feature-row">
                <div className="feature-item">
                  <div className="feature-icon">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/co-monitor-icon.png"
                      alt="Real-time Monitoring"
                    />
                  </div>
                  <div className="feature-text" style={{ color: "#333", fontWeight: "500" }}>
                    <span>Real-time Monitoring</span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/mah-battery-icon.png"
                      alt="1000 mAh Battery"
                    />
                  </div>
                  <div className="feature-text" style={{ color: "#333", fontWeight: "500" }}>
                    <span>1000 mAh Battery</span>
                  </div>
                </div>
              </div>

              <div className="feature-row">
                <div className="feature-item">
                  <div className="feature-icon">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/mini-device-icon.png"
                      alt="Portable Device"
                    />
                  </div>
                  <div className="feature-text" style={{ color: "#333", fontWeight: "500" }}>
                    <span>Portable Device</span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/hd-clr-icon.png"
                      alt="HD Color Display"
                    />
                  </div>
                  <div className="feature-text" style={{ color: "#333", fontWeight: "500" }}>
                    <span>HD Color Display</span>
                  </div>
                </div>
              </div>

              <div className="feature-row">
                <div className="feature-item">
                  <div className="feature-icon">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/electrochemical-sensor.png"
                      alt="Electrochemical Sensor"
                    />
                  </div>
                  <div className="feature-text" style={{ color: "#333", fontWeight: "500" }}>
                    <span>Electrochemical Sensor</span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/c-type-icon.png"
                      alt="Type-C Charging"
                    />
                  </div>
                  <div className="feature-text" style={{ color: "#333", fontWeight: "500" }}>
                    <span>Type-C Charging</span>
                  </div>
                </div>
              </div>

              <div className="feature-row">
                <div className="feature-item">
                  <div className="feature-icon">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/dynamic-ui-icon-1.png"
                      alt="Dynamic UI"
                    />
                  </div>
                  <div className="feature-text" style={{ color: "#333", fontWeight: "500" }}>
                    <span>Dynamic UI</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="features-right">
              <div className="device-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-real-time-detector-.png"
                  alt="Nano CO Monitor"
                />
              </div>
              <div className="features-content">
                <h4 className="features-label">Nano CO Monitor</h4>
                <h2 className="features-title">Qualitative features</h2>
                <p className="features-description">
                  It has a small, compact body with a minimal and attractive style. People adore our nano health
                  consultant and the way it combines aesthetics and technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Ultra High Definition Display */}
      <section className="uhd-display-section">
        <div className="display-banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="display-content">
                  <h2 className="display-size">19</h2>
                  <h3 className="display-title">Ultra High Definition Color Display</h3>
                  <p className="display-description">
                    Prana Air portable CO monitor is designed with a simple yet attractive style, making it convenient
                    to carry over long distances.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="display-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-high-resolution-display.png"
                    alt="1.9 inch Ultra High Definition Color Display"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Handy & Portable */}
      <section className="handy-portable-section">
        <div className="container">
          <div className="row">
            {/* Handy Column */}
            <div className="col-md-6">
              <div className="feature-box handy-box">
                <div className="feature-box-inner">
                  <div className="feature-image">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/handy-device.png"
                      alt="Handy Nano CO Monitor"
                      className="img-fluid"
                    />
                  </div>
                  <div className="feature-content">
                    <h2 className="feature-title">Handy</h2>
                    <p className="feature-description">
                      Equipped with high-precision sensors, the ultra-high definition color screen of Nano CO monitor
                      offers a more user-friendly and convenient way to monitor the real-time CO levels.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portable Column */}
            <div className="col-md-6">
              <div className="feature-box portable-box">
                <div className="feature-box-inner">
                  <div className="feature-image">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-portable-co-monitor-detector.png"
                      alt="Portable Nano CO Monitor"
                      className="img-fluid"
                    />
                  </div>
                  <div className="feature-content">
                    <h2 className="feature-title">Portable</h2>
                    <p className="feature-description">
                      The mini health consultant from Prana Air is loved for its sleek, compact design that seamlessly
                      combines aesthetics and advanced technology, making it a popular choice among users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Carbon Monoxide Hazards */}
      <section className="co-hazards-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="hazards-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/health-effects-of-carbon-monoxide-gas.jpeg"
                  alt="Carbon Monoxide Health Effects"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="hazards-content">
                <h2 className="hazards-title">
                  Carbon Monoxide Hazards: <br />
                  Why is it critical?
                </h2>
                <p className="hazards-description">
                  Carbon monoxide is a colorless, odorless, and non-irritating gas, therefore it cannot be detected with
                  mere human senses. It is also likely to explode when mixed with air (limit: 12.5%-74.2%). CO is very
                  easy to combine with hemoglobin, which further makes it difficult for the blood to carry oxygen to
                  other body parts. This compromises the tissue respiration rate and even death in severe cases. CO gas
                  has toxic effects on tissues and cells of the whole body, especially on the cerebral cortex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Health Hazards of CO Gas */}
      <section className="health-hazards-section">
        <div className="container">
          <h2 className="section-title">Health Hazards of CO Gas</h2>

          <div className="hazard-levels">
            <div className="hazard-level-item">
              <div className="level-text-container">
                <div className="level-range">0-1 PPM :</div>
                <div className="level-description">Normal Level</div>
              </div>
              <div className="level-indicator normal"></div>
            </div>

            <div className="hazard-level-item">
              <div className="level-text-container">
                <div className="level-range">2-9 PPM :</div>
                <div className="level-description">ASHRAE 62-1989 Specific Standard Living Area</div>
              </div>
              <div className="level-indicator low"></div>
            </div>

            <div className="hazard-level-item">
              <div className="level-text-container">
                <div className="level-range">10-50 PPM :</div>
                <div className="level-description">Avg. 8-Hour Stay In OSHA Confined Spaces</div>
              </div>
              <div className="level-indicator moderate"></div>
            </div>

            <div className="hazard-level-item">
              <div className="level-text-container">
                <div className="level-range">51-100 PPM :</div>
                <div className="level-description">OSHA Exposure Limits</div>
              </div>
              <div className="level-indicator high"></div>
            </div>

            <div className="hazard-level-item">
              <div className="level-text-container">
                <div className="level-range">101-200 PPM :</div>
                <div className="level-description">Mild Headache, Fatigue, Nausea, And Dizziness</div>
              </div>
              <div className="level-indicator very-high"></div>
            </div>

            <div className="hazard-level-item">
              <div className="level-text-container">
                <div className="level-range">&gt;800 PPM :</div>
                <div className="level-description">Dizziness, Nausea, And Convulsion, Death Within 2-3 Hrs.</div>
              </div>
              <div className="level-indicator extreme"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Product Slider */}
      <section className="product-slider-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="slider-image">
                {activeSlide === 0 && (
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/pocket-friendly-co-monitor.jpg"
                    alt="Pocket Friendly CO Monitor"
                    className="img-fluid"
                  />
                )}
                {activeSlide === 1 && (
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-smart-real-time-portable-co-monitor.jpeg"
                    alt="Smart Real-time Portable CO Monitor"
                    className="img-fluid"
                  />
                )}
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="slider-content">
                <h2 className="slider-title">Pocket-friendly · Lightweight</h2>
                <p className="slider-description">
                  Real-time monitoring of CO levels allows you to make data-driven decisions to improve the air quality
                  of your surrounding environment!
                </p>
                <div className="slider-navigation">
                  <button className="nav-arrow prev" onClick={prevSlide} aria-label="Previous slide">
                    <span>←</span>
                  </button>
                  <button className="nav-arrow next" onClick={nextSlide} aria-label="Next slide">
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Real-time Data */}
      <section
        className="realtime-data-section"
        style={{ backgroundColor: "#f8f8f8", margin: "40px 0", padding: "60px 0", borderRadius: "12px" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="realtime-image" style={{ position: "relative", height: "100%" }}>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-real-time-monitoring-device.png"
                  alt="Nano CO Real-time Monitoring Device"
                  className="img-fluid"
                  style={{
                    width: "90%",
                    position: "relative",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="realtime-content">
                <h2 className="realtime-title">Real-time Data</h2>
                <h3 className="realtime-subtitle">CO levels within seconds</h3>
                <p className="realtime-description">
                  Our advanced CO-Electrochemical sensing technology provides real-time data and insights on carbon
                  emissions, enabling you to stay informed and reduce harmful carbon monoxide levels for a healthier
                  lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Vehicle Emissions - Full width banner */}
      <section className="vehicle-emissions-section">
        <div className="emissions-banner">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/05/measuring-vehicle-emission-with-prana-air-co-monitor.jpg"
            alt="Measuring Vehicle Emission with Prana Air CO Monitor"
            className="full-width-banner"
          />
        </div>
      </section>

      {/* SECTION 11: Electrochemical Sensing Technology */}
      <section className="sensing-technology-section">
        <div className="container">
          <div className="sensing-top">
            <h2 className="sensing-title">Electrochemical Sensing Technology</h2>
            <h3 className="sensing-subtitle">For CO Detection</h3>
            <p className="sensing-description">
              It works by electrochemically oxidizing the CO gas at a platinum electrode, which generates a current
              proportional to the CO gas concentration. The generated current is then measured and processed by an
              electronic circuit to determine the CO concentration.
            </p>
          </div>
        </div>

        <div className="smart-chip-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-lg-1 order-2">
                <div className="smart-chip-content">
                  <h2 className="smart-chip-title">High-sensitive Smart Chip</h2>
                  <h3 className="smart-chip-subtitle">for more Accurate Detection</h3>
                  <p className="smart-chip-description">
                    Built-in high-performance smart chip for electrochemical carbon monoxide detection to ensure more
                    accurate detection by the instrument.
                  </p>

                  <div className="chip-features">
                    <div className="chip-feature">
                      <span className="feature-dot"></span>
                      <span className="feature-text">High Sensitivity</span>
                    </div>
                    <div className="chip-feature">
                      <span className="feature-dot"></span>
                      <span className="feature-text">Accurate Data</span>
                    </div>
                    <div className="chip-feature">
                      <span className="feature-dot"></span>
                      <span className="feature-text">Fast Operation Speed</span>
                    </div>
                    <div className="chip-feature">
                      <span className="feature-dot"></span>
                      <span className="feature-text">Energy Efficient</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 order-lg-2 order-1">
                <div className="smart-chip-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-smart-chip-sensor-on-co-monitor.png"
                    alt="Smart Chip Sensor"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Attractive Details */}
      <section className="attractive-details-section">
        <div className="container">
          <div className="details-header">
            <h2 className="details-title">
              Attractive details for
              <br />
              easy carrying
            </h2>
          </div>

          <div className="details-cards-container">
            <div className="details-cards">
              <div
                className="detail-card"
                style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div className="detail-number">01</div>
                <h3 className="detail-title">Type C</h3>
                <h4 className="detail-subtitle">Charging</h4>
                <div className="detail-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-with-type-c-charger.jpeg"
                    alt="Type C Charging"
                    className="img-fluid"
                    style={{ background: "transparent" }}
                  />
                </div>
              </div>

              <div
                className="detail-card"
                style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div className="detail-number">02</div>
                <h3 className="detail-title">Anti-loss</h3>
                <h4 className="detail-subtitle">Lanyard</h4>
                <div className="detail-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/anti-loss-lanyard-strap-on-co-monitor.jpeg"
                    alt="Anti-loss Lanyard"
                    className="img-fluid"
                    style={{ background: "transparent" }}
                  />
                </div>
              </div>

              <div
                className="detail-card"
                style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div className="detail-number">03</div>
                <h3 className="detail-title">Ultra HD</h3>
                <h4 className="detail-subtitle">Color screen</h4>
                <div className="detail-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/ultra-hd-screen-on-prana-air-co-monitor.jpeg"
                    alt="Ultra HD Color Screen"
                    className="img-fluid"
                    style={{ background: "transparent" }}
                  />
                </div>
              </div>
            </div>

            <div className="scroll-indicator">
              <div className={`scroll-dot ${activeDetailCard === 0 ? "active" : ""}`}></div>
              <div className={`scroll-dot ${activeDetailCard === 1 ? "active" : ""}`}></div>
              <div className={`scroll-dot ${activeDetailCard === 2 ? "active" : ""}`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: Product Key Functions */}
      <section className="key-functions-section" id="Functions" style={{ position: "relative", zIndex: 1 }}>
        <div className="container">
          <h2 className="functions-title">Product Key Functions</h2>

          <div className="functions-content">
            <div
              className="device-image-container"
              style={{ position: "relative", maxWidth: "100%", margin: "0 auto", textAlign: "center" }}
            >
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-button-functions.jpeg"
                alt="Nano CO Monitor Button Functions"
                className="device-image"
                style={{ maxWidth: "100%", height: "auto", display: "block", margin: "0 auto" }}
              />

              {/* Connection lines */}
              <div className="connection-lines">
                <div className="m-key-line"></div>
                <div className="power-key-line"></div>
                <div className="s-key-line"></div>
              </div>

              {/* Button indicators */}
              <div className="button-indicator m-key-indicator">M</div>
              <div className="button-indicator power-key-indicator"></div>
              <div className="button-indicator s-key-indicator">S</div>

              {/* Function descriptions */}
              <div className="function-description m-key-description">
                <div className="function-title">
                  <span className="bullet">•</span> Single Press : Change Brightness Levels
                </div>
                <div className="brightness-levels">
                  <span className="brightness-icon low">☼</span>
                  <span className="brightness-icon medium">☼</span>
                  <span className="brightness-icon high">☼</span>
                </div>
              </div>

              <div className="function-description power-key-description">
                <div className="function-title">
                  <span className="bullet">•</span> Power Key
                </div>
                <div className="function-details">
                  <div className="function-detail">
                    <span className="bullet">•</span> Long Press : On/Off
                  </div>
                  <div className="function-detail">
                    <span className="bullet">•</span> Single Press : Change Temp. Unit (°C/F)
                  </div>
                </div>
              </div>

              <div className="function-description s-key-description">
                <div className="function-title">
                  <span className="bullet">•</span> Single Press : Turn Alarm
                </div>
                <div className="alarm-options">
                  <div className="option">
                    <span className="bullet">•</span> on <span className="sound-icon">🔊</span>
                  </div>
                  <div className="option">
                    <span className="bullet">•</span> off <span className="sound-icon muted">🔊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: Battery Endurance */}
      <section className="battery-endurance-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <h2 className="battery-title">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/battery-icon.png"
                  alt="Battery Icon"
                  style={{ width: "30px", marginRight: "10px", verticalAlign: "middle" }}
                />
                Large-capacity Polymer
              </h2>
              <h3 className="battery-subtitle">1000 mAh Battery Endurance</h3>
              <p className="battery-description">
                Safe and Durable high-performance 1000 mAh large capacity polymer lithium ion battery, with super long
                endurance.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="battery-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-long-battery-capacity.png"
                  alt="Nano CO Monitor with Battery"
                  className="img-fluid battery-device-image"
                  style={{ maxWidth: "49%", margin: "0 auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15: Kitchen Monitoring */}
      <section className="kitchen-monitoring-section">
        <div className="kitchen-banner">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/05/real-time-measuring-of-co-gas-in-kitchen.jpeg"
            alt="Real-time measuring of CO gas in kitchen"
            className="kitchen-banner-image"
          />
          <div className="kitchen-content">
            <h2 className="kitchen-title">Monitor CO Levels While Cooking</h2>
            <p className="kitchen-description">
              Clip the Nano CO Monitor to your apron or keep it nearby to monitor carbon monoxide levels while cooking.
              Gas stoves and other cooking appliances can produce CO gas, making kitchen monitoring essential for your
              health.
            </p>
            <a href="#" className="learn-more-btn">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 16: Intelligent Alarm System */}
      <section className="alarm-system-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="alarm-content">
                <h2 className="alarm-title">Real-time CO detection with</h2>
                <h3 className="alarm-subtitle">An intelligent alarm system</h3>

                <div className="alarm-levels">
                  <div className="alarm-level">
                    <span className="level-label">Green:</span>
                    <span className="level-description">Safe, No alarm sound</span>
                  </div>
                  <div className="alarm-level">
                    <span className="level-label">Yellow, Orange, Red:</span>
                    <span className="level-description">Drip sound cycle alarm, once every 3 minutes.</span>
                  </div>
                </div>

                <div className="alarm-info">
                  <h4 className="info-title">Know the CO around you within 2 seconds:</h4>
                  <p className="info-description">
                    Detects CO in real-time with <span className="highlight">2 seconds</span> data refresh rate.
                  </p>
                </div>

                <div className="alarm-indicator">
                  <div className="indicator-bar">
                    <div className="indicator-segment green"></div>
                    <div className="indicator-segment yellow"></div>
                    <div className="indicator-segment orange"></div>
                    <div className="indicator-segment red"></div>
                  </div>
                  <div className="indicator-labels">
                    <div className="indicator-label">Security</div>
                    <div className="indicator-label">Cycle Alarm</div>
                    <div className="indicator-label">Cycle Alarm</div>
                    <div className="indicator-label">Cycle Alarm</div>
                  </div>
                </div>

                <div className="ppm-levels">
                  <div className="ppm-level">
                    <div className="ppm-indicator green"></div>
                    <span className="ppm-range">0-50 PPM</span>
                  </div>
                  <div className="ppm-level">
                    <div className="ppm-indicator orange"></div>
                    <span className="ppm-range">51-100 PPM</span>
                  </div>
                  <div className="ppm-level">
                    <div className="ppm-indicator yellow"></div>
                    <span className="ppm-range">101-200 PPM</span>
                  </div>
                  <div className="ppm-level">
                    <div className="ppm-indicator red"></div>
                    <span className="ppm-range">≥201 PPM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="alarm-device-container">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-with-alarm-system.png"
                  alt="Nano CO Monitor with Alarm System"
                  className="alarm-device-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 17: Technical Specifications */}
      <section className="tech-specs-section" id="Tech-Specs">
        <div className="container">
          {/* Header row with title and button side by side */}
          <div className="row align-items-center mb-4">
            <div className="col-md-8">
              <div className="specs-header">
                <h2 className="specs-title">CO Monitor</h2>
                <h3 className="specs-subtitle">Technical Specifications</h3>
              </div>
            </div>
            <div className="col-md-4 text-md-end">
              <a href="#" className="brochure-btn">
                <span className="download-icon">↓</span>
                Download Brochure
              </a>
            </div>
          </div>

          {/* Full width table */}
          <div className="specs-table">
            <div className="specs-row">
              <div className="specs-cell">
                <div className="specs-label">Product Name :</div>
                <div className="specs-value">Nano CO Monitor</div>
              </div>
              <div className="specs-cell">
                <div className="specs-label">Detection Range :</div>
                <div className="specs-value">0-1000 PPM</div>
              </div>
              <div className="specs-cell">
                <div className="specs-label">Working Voltage :</div>
                <div className="specs-value">DC5V0 . 5A</div>
              </div>
            </div>

            <div className="specs-row">
              <div className="specs-cell">
                <div className="specs-label">Warm-up time :</div>
                <div className="specs-value">35 Sec</div>
              </div>
              <div className="specs-cell">
                <div className="specs-label">Data Refresh Rate :</div>
                <div className="specs-value">2 Sec</div>
              </div>
              <div className="specs-cell">
                <div className="specs-label">Operating Humidity :</div>
                <div className="specs-value">0-95% RH</div>
              </div>
            </div>

            <div className="specs-row">
              <div className="specs-cell">
                <div className="specs-label">Working Temp. :</div>
                <div className="specs-value">-20~60°C</div>
              </div>
              <div className="specs-cell">
                <div className="specs-label">Charging Mode :</div>
                <div className="specs-value">USB Type-C</div>
              </div>
              <div className="specs-cell">
                <div className="specs-label">Product Dimensions :</div>
                <div className="specs-value">W85 x D51 x H17 (mm)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 18: Product Comparison */}
      <section className="product-comparison-section" id="Compare">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="comparison-title">
                Comparison of Prana Air Nano CO Monitor
                <br />
                Vs A High-End Monitor
              </h2>

              <div className="comparison-table-container">
                <div className="comparison-table">
                  <div className="comparison-header">
                    <div className="comparison-cell header-cell"></div>
                    <div className="comparison-cell header-cell">
                      <div className="product-image">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-low-cost.png"
                          alt="Nano CO Monitor"
                        />
                      </div>
                      <h3>Nano CO Monitor</h3>
                    </div>
                    <div className="comparison-cell header-cell">
                      <div className="product-image">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/tsi-high-end-co-monitor.png"
                          alt="High-End CO Monitor"
                        />
                      </div>
                      <h3>High-End CO Monitor</h3>
                    </div>
                  </div>

                  <div className="comparison-row">
                    <div className="comparison-cell label-cell">Description :</div>
                    <div className="comparison-cell">Nano CO Monitor</div>
                    <div className="comparison-cell">High-End CO Monitor</div>
                  </div>

                  <div className="comparison-row">
                    <div className="comparison-cell label-cell">Parameter :</div>
                    <div className="comparison-cell">CO, Temperature, Humidity</div>
                    <div className="comparison-cell">CO</div>
                  </div>

                  <div className="comparison-row">
                    <div className="comparison-cell label-cell">Price :</div>
                    <div className="comparison-cell">Low Cost</div>
                    <div className="comparison-cell">High Cost</div>
                  </div>

                  <div className="comparison-row">
                    <div className="comparison-cell label-cell">Weight :</div>
                    <div className="comparison-cell">75g</div>
                    <div className="comparison-cell">Almost 1 Kg</div>
                  </div>

                  <div className="comparison-row">
                    <div className="comparison-cell label-cell">Range :</div>
                    <div className="comparison-cell">0-1000 ppm</div>
                    <div className="comparison-cell">0-5000 ppm</div>
                  </div>

                  <div className="comparison-row">
                    <div className="comparison-cell label-cell">Accuracy :</div>
                    <div className="comparison-cell">±5%</div>
                    <div className="comparison-cell">±3%</div>
                  </div>

                  <div className="comparison-row">
                    <div className="comparison-cell label-cell">Technology :</div>
                    <div className="comparison-cell">Electrochemical Sensor</div>
                    <div className="comparison-cell">Electrochemical Sensor</div>
                  </div>

                  <div className="comparison-row">
                    <div className="comparison-cell label-cell">Portability :</div>
                    <div className="comparison-cell">Small & easy to carry</div>
                    <div className="comparison-cell">Comparatively less portable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 19: FAQs */}
      <section className="faqs-section" id="FAQs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="faqs-title">Frequently Asked Questions About CO & Its Monitoring</h2>

              <div className="faq-accordion" style={{ maxWidth: "100%", margin: "0 auto" }}>
                <div className="faq-item">
                  <div
                    className={`faq-question ${activeFaq === "faq1" ? "active" : ""}`}
                    onClick={() => toggleFaq("faq1")}
                  >
                    <span className="question-number">1.</span>
                    <span className="question-text">What is the ideal range of CO levels in indoor environments?</span>
                    <span className="toggle-icon">{activeFaq === "faq1" ? "−" : "+"}</span>
                  </div>
                  <div className={`faq-answer ${activeFaq === "faq1" ? "show" : ""}`}>
                    <p>
                      The ideal range of CO levels in indoor environments is below 9 parts per million (ppm). However,
                      it is recommended to maintain levels below 5 ppm for better indoor air quality and to ensure
                      safety.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div
                    className={`faq-question ${activeFaq === "faq2" ? "active" : ""}`}
                    onClick={() => toggleFaq("faq2")}
                  >
                    <span className="question-number">2.</span>
                    <span className="question-text">
                      How often should I check the CO levels using the portable monitor?
                    </span>
                    <span className="toggle-icon">{activeFaq === "faq2" ? "−" : "+"}</span>
                  </div>
                  <div className={`faq-answer ${activeFaq === "faq2" ? "show" : ""}`}>
                    <p>
                      Its recommended to check CO levels regularly, especially in areas with potential CO sources like
                      kitchens, garages, or near fuel-burning appliances. Daily checks are ideal in high-risk areas,
                      while weekly checks are sufficient for general monitoring in homes and offices.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div
                    className={`faq-question ${activeFaq === "faq3" ? "active" : ""}`}
                    onClick={() => toggleFaq("faq3")}
                  >
                    <span className="question-number">3.</span>
                    <span className="question-text">How accurate are the readings on the monitor?</span>
                    <span className="toggle-icon">{activeFaq === "faq3" ? "−" : "+"}</span>
                  </div>
                  <div className={`faq-answer ${activeFaq === "faq3" ? "show" : ""}`}>
                    <p>
                      The Prana Air Nano CO Monitor provides readings with an accuracy of ±5%, which is highly reliable
                      for a portable device. The electrochemical sensor technology ensures consistent and dependable
                      measurements across various environments.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div
                    className={`faq-question ${activeFaq === "faq4" ? "active" : ""}`}
                    onClick={() => toggleFaq("faq4")}
                  >
                    <span className="question-number">4.</span>
                    <span className="question-text">How does the alarm on the monitor work?</span>
                    <span className="toggle-icon">{activeFaq === "faq4" ? "−" : "+"}</span>
                  </div>
                  <div className={`faq-answer ${activeFaq === "faq4" ? "show" : ""}`}>
                    <p>
                      The monitor features an intelligent alarm system that activates based on CO concentration levels.
                      When levels exceed safe thresholds, the device emits audible alerts and displays visual warnings
                      through color-coded indicators, alerting you to potential dangers.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div
                    className={`faq-question ${activeFaq === "faq5" ? "active" : ""}`}
                    onClick={() => toggleFaq("faq5")}
                  >
                    <span className="question-number">5.</span>
                    <span className="question-text">How many times does the alarm work?</span>
                    <span className="toggle-icon">{activeFaq === "faq5" ? "−" : "+"}</span>
                  </div>
                  <div className={`faq-answer ${activeFaq === "faq5" ? "show" : ""}`}>
                    <p>
                      The alarm system works continuously as long as the device is powered on. For elevated CO levels
                      (yellow, orange, or red zones), the device emits a drip sound cycle alarm once every 3 minutes
                      until CO levels return to safe ranges or until the alarm is manually silenced.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div
                    className={`faq-question ${activeFaq === "faq6" ? "active" : ""}`}
                    onClick={() => toggleFaq("faq6")}
                  >
                    <span className="question-number">6.</span>
                    <span className="question-text">What is the use time of the monitor?</span>
                    <span className="toggle-icon">{activeFaq === "faq6" ? "−" : "+"}</span>
                  </div>
                  <div className={`faq-answer ${activeFaq === "faq6" ? "show" : ""}`}>
                    <p>
                      With its 1000 mAh large-capacity polymer lithium-ion battery, the Nano CO Monitor provides
                      approximately 8-10 hours of continuous use on a single charge. The device can also be used while
                      charging via the USB Type-C port for extended monitoring periods.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div
                    className={`faq-question ${activeFaq === "faq7" ? "active" : ""}`}
                    onClick={() => toggleFaq("faq7")}
                  >
                    <span className="question-number">7.</span>
                    <span className="question-text">
                      Can the portable CO monitor be used in vehicles, such as cars and trucks?
                    </span>
                    <span className="toggle-icon">{activeFaq === "faq7" ? "−" : "+"}</span>
                  </div>
                  <div className={`faq-answer ${activeFaq === "faq7" ? "show" : ""}`}>
                    <p>
                      Yes, the Nano CO Monitor is ideal for use in vehicles. Its portable design and quick response time
                      make it perfect for monitoring carbon monoxide levels in cars, trucks, RVs, and other enclosed
                      vehicles where CO buildup can occur from exhaust leaks or improper ventilation.
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

