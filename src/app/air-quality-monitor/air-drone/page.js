"use client"
import { useEffect, useState, useRef } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import Image from "next/image";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
// Arrow icons for slider
const ChevronUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 15-6-6-6 6"></path>
  </svg>
)

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6"></path>
  </svg>
)

export default function AirDronePage() {
  const [activeTab, setActiveTab] = useState("vtol")
  const [activeSlide, setActiveSlide] = useState(0)

  const sectionRef = useRef(null)
  const tabsRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && tabsRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect()
        const sectionTop = sectionRect.top
        const sectionBottom = sectionRect.bottom
        const tabsHeight = tabsRef.current.offsetHeight

        // Make tabs sticky when section is in view and user has scrolled past the initial position
        if (sectionTop <= 0 && sectionBottom > tabsHeight) {
          tabsRef.current.classList.add("sticky-tabs")
        } else {
          tabsRef.current.classList.remove("sticky-tabs")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // VTOL drone slider images
  const vtolSliderImages = [
    "/img/prana-VTOL-air-quality-drone.png",
    "/img/front-of-the-prana-vtol-drone.png",
    "/img/prana-vtol-drone-from-left.png",
    "/img/vtol-drone-fron-the-front.png",
  ]
  
  // Quad drone slider images
  const quadSliderImages = [
    "/img/prana-quad-air-quality-drone.webp",
    "/img/prana-air-quad-drone-angle-from-top.webp",
    "/img/prana-air-quad-drone-view-from-side.webp",
    "/img/prana-air-quad-drone-from-front.webp",
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
  }, [])

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    setActiveSlide(0) // Reset active slide when changing tabs
  }

  const handleSlideClick = (index) => {
    setActiveSlide(index)
  }

  const handlePrevSlide = () => {
    const images = activeTab === "vtol" ? vtolSliderImages : quadSliderImages
    setActiveSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    const images = activeTab === "vtol" ? vtolSliderImages : quadSliderImages
    setActiveSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Carousel responsive settings
  const responsive = {
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
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="air-drone-page">
      <main className="air-drone-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title" style={{ position: "relative", zIndex: 1 }}>
              AIR QUALITY
              <br />
              MONITORING DRONE
            </h1>
            <div
              className="hero-drone-image"
              style={{ transform: "scale(1.2)", marginTop: "-40px", position: "relative", zIndex: 2 }}
            >
              <img src="https://www.pranaair.com/wp-content/uploads/2025/03/Prana-VTOL.webp" alt="Prana VTOL Drone" />
            </div>
            <p className="hero-subtitle">
              Transforming Environmental Insights Real-time Air
              <br />
              Quality Data with Cutting-edge Drone Technology
            </p>
            <div className="hero-buttons">
              <button className="btn-request-quote">
                Request a quote
              </button>
              <button>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#333" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container-fluid">
            <p className="features-intro">Industry leaders trust Prana Air to grow their revenue</p>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/03/real-time-data.png"
                    alt="Real-Time Data"
                  />
                </div>
                <div className="feature-text">Real-Time Data</div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/03/lightweight.png"
                    alt="Lightweight Design"
                  />
                </div>
                <div className="feature-text">Lightweight Design</div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/03/modular-sensors.png"
                    alt="Modular Sensors"
                  />
                </div>
                <div className="feature-text">Modular Sensors</div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/03/high-accuracy.png"
                    alt="High Accuracy"
                  />
                </div>
                <div className="feature-text">High Accuracy</div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/03/robut-connectivity.png"
                    alt="Robust Connectivity"
                  />
                </div>
                <div className="feature-text">Robust Connectivity</div>
              </div>
            </div>
          </div>
        </section>

        {/* Drone Category Section */}
        <section className="drone-category-section" ref={sectionRef}>
          <div className="container">
            <h2 className="section-title">Drone Category</h2>

            <div className="category-tabs" ref={tabsRef}>
              <button
                className={`category-tab ${activeTab === "vtol" ? "active" : ""}`}
                onClick={() => handleTabClick("vtol")}
              >
                Prana VTOL
              </button>
              <button
                className={`category-tab ${activeTab === "quad" ? "active" : ""}`}
                onClick={() => handleTabClick("quad")}
              >
                Prana Quad
              </button>
            </div>

            <div className="drone-details">
              {activeTab === "vtol" ? (
                <>
                  <div className="drone-title-overlay">Prana VTOL</div>
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                      <div className="drone-info">
                        <div className="drone-description">
                          <p>
                            The Prana <strong>VTOL</strong> (Vertical Takeoff and Landing) is a high-tech fixed-wing FPV
                            drone designed for long-range air quality monitoring. It combines the ability to take off
                            vertically with a long flight range of up to <strong>90 km</strong>. This makes it perfect
                            for <strong>mapping pollution</strong>, <strong>checking industrial compliance</strong>, and{" "}
                            <strong>conducting environmental research</strong>. With a thermal camera and advanced
                            sensors, it provides real-time data, even in remote or difficult areas.
                          </p>
                        </div>

                        <div className="drone-buttons">
                          <button className="btn-request">Request a quote</button>
                          <button className="btn-brochure">
                            <Image src="/img/btn-icon.png" alt="Logo" width={23} height={23} />
                            Brochure
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="drone-image-container">
                        <div className="drone-image">
                          <img
                            src={vtolSliderImages[activeSlide] || "https://www.pranaair.com/wp-content/uploads/2025/03/prana-VTOL-air-quality-drone.webp"}
                            alt="Prana VTOL Air Quality Drone"
                            className="img-fluid"
                          />
                        </div>

                        {/* Slider Card */}
                        <div className="slider-card">
                          <button className="slider-arrow" onClick={handlePrevSlide}>
                            <ChevronUpIcon />
                          </button>

                          <div className="slider-thumbnails">
                            {vtolSliderImages.map((image, index) => (
                              <div
                                key={index}
                                className={`slider-thumbnail ${activeSlide === index ? "active" : ""}`}
                                onClick={() => handleSlideClick(index)}
                              >
                                <img src={image || "/placeholder.svg"} alt={`VTOL view ${index + 1}`} />
                              </div>
                            ))}
                          </div>

                          <button className="slider-arrow" onClick={handleNextSlide}>
                            <ChevronDownIcon />
                          </button>
                        </div>

                        {/* Mobile Navigation Dots */}
                        <div className="navigation-dots">
                          {vtolSliderImages.map((_, index) => (
                            <div
                              key={index}
                              className={`nav-dot ${activeSlide === index ? "active" : ""}`}
                              onClick={() => handleSlideClick(index)}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* COMPLETELY REVISED SPEC CARDS - Now with just 2 rows */}
                  <div className="specs-container">
                    {/* First row - 6 cards */}
                    <div className="specs-row">
                      <div className="spec-card spec-card-text">
                        <div className="spec-title">large-area coverage</div>
                      </div>
                      <div className="spec-card spec-card-text">
                        <div className="spec-title">long-duration missions</div>
                      </div>
                      <div className="spec-card spec-card-text">
                        <div className="spec-title">thermal imaging</div>
                      </div>
                      <div className="spec-card spec-card-value">
                        <div className="spec-value">
                          90<span className="spec-unit">km</span>
                        </div>
                        <div className="spec-title">range</div>
                      </div>
                      <div className="spec-card spec-card-value">
                        <div className="spec-value">
                          28<span className="spec-unit">m/s</span>
                        </div>
                        <div className="spec-title">flight speed</div>
                      </div>
                      <div className="spec-card spec-card-value">
                        <div className="spec-value">
                          16<span className="spec-unit">m/s</span>
                        </div>
                        <div className="spec-title">cruising speed</div>
                      </div>
                    </div>

                    {/* Second row - 5 cards */}
                    <div className="specs-row">
                      <div className="spec-card spec-card-value">
                        <div className="spec-value">
                          4000<span className="spec-unit">m</span>
                        </div>
                        <div className="spec-title">altitude tolerance</div>
                      </div>
                      <div className="spec-card spec-card-description">
                        <div className="spec-title">Maximum Endurance Time</div>
                        <div className="spec-description">50 minutes to 90 minutes</div>
                      </div>
                      <div className="spec-card spec-card-description">
                        <div className="spec-title">Maximum Range</div>
                        <div className="spec-description">50 km to 90 km</div>
                      </div>
                      <div className="spec-card spec-card-description">
                        <div className="spec-title">Remote Control Range</div>
                        <div className="spec-description">15 km</div>
                        <div className="spec-note">in open conditions</div>
                      </div>
                      <div className="spec-card spec-card-description">
                        <div className="spec-title">Wind Resistance</div>
                        <div className="spec-description">Level 5</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="quad-drone-content">
                  <div className="drone-title-overlay">Prana QUAD</div>
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                      <div className="drone-info">
                        <div className="drone-description">
                          <p>
                            The Prana <strong>Quad</strong> is a small and fast quadcopter designed for detailed air
                            quality monitoring in specific areas. It is perfect for cities and quick operations because
                            it is easy to set up, carry, and use. With a <strong>20-minute flight time</strong> and{" "}
                            <strong>high-precision sensors</strong>, it helps detect pollution sources and monitor air
                            quality in real-time.
                          </p>
                        </div>

                        <div className="drone-buttons">
                          <button className="btn-request">Request a quote</button>
                          <button className="btn-brochure">
                            <span className="circle"></span>
                            Brochure
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="drone-image-container">
                        <div className="drone-image">
                          <img
                            src={quadSliderImages[activeSlide] || "https://www.pranaair.com/wp-content/uploads/2025/03/prana-quad-air-quality-drone.webp"}
                            alt="Prana QUAD Drone"
                            className="img-fluid"
                          />
                        </div>

                        {/* Slider Card */}
                        <div className="slider-card">
                          <button className="slider-arrow" onClick={handlePrevSlide}>
                            <ChevronUpIcon />
                          </button>

                          <div className="slider-thumbnails">
                            {quadSliderImages.map((image, index) => (
                              <div
                                key={index}
                                className={`slider-thumbnail ${activeSlide === index ? "active" : ""}`}
                                onClick={() => handleSlideClick(index)}
                              >
                                <img src={image || "/placeholder.svg"} alt={`QUAD view ${index + 1}`} />
                              </div>
                            ))}
                          </div>

                          <button className="slider-arrow" onClick={handleNextSlide}>
                            <ChevronDownIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="quad-specs">
                    {/* First row - 6 cards */}
                    <div className="specs-row">
                      <div className="spec-card spec-card-text">
                        <div className="spec-title">rapid response</div>
                      </div>
                      <div className="spec-card spec-card-text">
                        <div className="spec-title">localized pollution tracking</div>
                      </div>
                      <div className="spec-card spec-card-text">
                        <div className="spec-title">laser ranging</div>
                      </div>
                      <div className="spec-card spec-card-text">
                        <div className="spec-title">1km control range</div>
                      </div>
                      <div className="spec-card spec-card-text">
                        <div className="spec-title">ultra-portability</div>
                      </div>
                      <div className="spec-card spec-card-value">
                        <div className="spec-title">max speed</div>
                        <div className="spec-value">
                          6<span className="spec-unit">m/s</span>
                        </div>
                      </div>
                    </div>

                    {/* Second row - 4 cards */}
                    <div className="specs-row">
                      <div className="spec-card spec-card-value">
                        <div className="spec-title">max flight altitude</div>
                        <div className="spec-value">
                          120<span className="spec-unit">m</span>
                        </div>
                      </div>
                      <div className="spec-card spec-card-description">
                        <div className="spec-title">max flight time</div>
                        <div className="spec-description">20 minutes with payload</div>
                      </div>
                      <div className="spec-card spec-card-value">
                        <div className="spec-title">takeoff weight: approx.</div>
                        <div className="spec-value">
                          720<span className="spec-unit">g</span>
                        </div>
                      </div>
                      <div className="spec-card spec-card-value">
                        <div className="spec-title">max payload</div>
                        <div className="spec-value">
                          300<span className="spec-unit">g</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Advance air quality monitor tech */}
        <section className="air-quality-monitor-tech">
          <div className="container">
            <div className="row">
              <div className="monitor-tech">
                <h2>Advanced Air Quality Monitoring Technology</h2>
                <p>Both drones leverage AI-powered sensor suites to detect and map pollutants, enabling</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="slider-monitor-tech">
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    className="app-slider"
                  >
                    <div>
                      <div className="app-slide-img-box">
                        <Image src="/img/pollution-source-identification.webp" alt="Logo" width={200} height={100} />
                        <h3>
                          Pollution Source Identification
                        </h3>
                      </div>
                    </div>
                    <div>
                      <div className="app-slide-img-box">
                        <Image src="/img/pollution-source-identification.webp" alt="Logo" width={200} height={100} />
                        <h3>
                          Pollution Source Identification
                        </h3>
                      </div>
                    </div>
                    <div>
                      <div className="app-slide-img-box">
                        <Image src="/img/pollution-source-identification.webp" alt="Logo" width={200} height={100} />
                        <h3>
                          Pollution Source Identification
                        </h3>
                      </div>
                    </div>
                    <div>
                      <div className="app-slide-img-box">
                        <Image src="/img/pollution-source-identification.webp" alt="Logo" width={200} height={100} />
                        <h3>
                          Pollution Source Identification
                        </h3>
                      </div>
                    </div>
                    <div>
                      <div className="app-slide-img-box">
                        <Image src="/img/pollution-source-identification.webp" alt="Logo" width={200} height={100} />
                        <h3>
                          Pollution Source Identification
                        </h3>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* parameters measured */}
        <section className="parameter-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="parameter-img">
                <Image src="/img/prana-VTOL-parameters-measured.webp" alt="Logo" width={200} height={100} />
                <h3>Parameters</h3>
                <span>Measured</span>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="parameter-main">
                  <ul>
                    <li>
                      <span className="parameter-box">
                    <Image src="/img/pm1.png" alt="Logo" width={200} height={100} />
                    <span className="parameter-txt">PM1</span>
                    </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                    <Image src="/img/pm1.png" alt="Logo" width={200} height={100} />
                    <span className="parameter-txt">PM1</span>
                    </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                    <Image src="/img/pm1.png" alt="Logo" width={200} height={100} />
                    <span className="parameter-txt">PM1</span>
                    </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                    <Image src="/img/pm1.png" alt="Logo" width={200} height={100} />
                    <span className="parameter-txt">PM1</span>
                    </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                    <Image src="/img/pm1.png" alt="Logo" width={200} height={100} />
                    <span className="parameter-txt">PM1</span>
                    </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                    <Image src="/img/pm1.png" alt="Logo" width={200} height={100} />
                    <span className="parameter-txt">PM1</span>
                    </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                    <Image src="/img/pm1.png" alt="Logo" width={200} height={100} />
                    <span className="parameter-txt">PM1</span>
                    </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                    <Image src="/img/pm1.png" alt="Logo" width={200} height={100} />
                    <span className="parameter-txt">PM1</span>
                    </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                    <Image src="/img/pm1.png" alt="Logo" width={200} height={100} />
                    <span className="parameter-txt">PM1</span>
                    </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                    <Image src="/img/pm1.png" alt="Logo" width={200} height={100} />
                    <span className="parameter-txt">PM1</span>
                    </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                    <Image src="/img/pm1.png" alt="Logo" width={200} height={100} />
                    <span className="parameter-txt">PM1</span>
                    </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                    <Image src="/img/pm1.png" alt="Logo" width={200} height={100} />
                    <span className="parameter-txt">PM1</span>
                    </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
