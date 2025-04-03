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
  const [activePartTab, setActivePartTab] = useState("Parts & Label")
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
  // Quad drone slider images
  const photpGallaery = [
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
  ]
  // Quad drone slider images
  const quadphotpGallaery = [
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
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
  const videoSlider = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30,
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

        {/* app connectivity */}
        <section className="app-controller">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-app">
                  <h2>Data Insights from Controller
                    or <span>App Connectivity</span></h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="map-box">
                  <ul>
                    <li>
                      <Image src="/img/real-time-maps.png" alt="real-time-maps" width={100} height={100} />
                    </li>
                    <li>
                      <h3>Real-Time Maps</h3>
                      <p>Visual representation of current air quality data</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src="/img/real-time-maps.png" alt="real-time-maps" width={100} height={100} />
                    </li>
                    <li>
                      <h3>Real-Time Maps</h3>
                      <p>Visual representation of current air quality data</p>
                    </li>
                  </ul>
                </div>
                <div className="map-box">
                  <ul>
                    <li>
                      <Image src="/img/real-time-maps.png" alt="real-time-maps" width={100} height={100} />
                    </li>
                    <li>
                      <h3>Real-Time Maps</h3>
                      <p>Visual representation of current air quality data</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src="/img/real-time-maps.png" alt="real-time-maps" width={100} height={100} />
                    </li>
                    <li>
                      <h3>Real-Time Maps</h3>
                      <p>Visual representation of current air quality data</p>
                    </li>
                  </ul>
                </div>
                <div className="map-img">
                  <ul>
                    <li>
                      <Image src="/img/custom-data.webp" alt="heat-maps" width={100} height={100} />
                      <h3>Heat Maps</h3>
                      <p>Colour-coded maps highlighting pollution hotspots</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src="/img/custom-data.webp" alt="heat-maps" width={100} height={100} />
                      <h3>Heat Maps</h3>
                      <p>Colour-coded maps highlighting pollution hotspots</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* night vision */}
        <section className="thermal-camera">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="night-vision-txt">
                  <h2>Dual <Image src="/img/4k-ultra-hd.png" alt="real-time-maps" width={100} height={100} />
                    <br />
                    Night vision + Thermal camera </h2>
                  <p>High-resolution camera with <strong> GNSS integration</strong> for precise <strong>geo-tagging.</strong></p>
                  <ul>
                    <li><span>AI</span> Object Tracking</li>
                    <li><span>±0.01°</span> stabilization</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="camera-img">
                  <Image src="/img/night-vision-thermal-camera.webp" alt="real-time-maps" width={100} height={100} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* high capacity battery  */}
        <section className="high-capacity">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="h-c-battery">
                  <Image src="/img/high-capacity-battery.webp" alt="real-time-maps" width={100} height={100} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="high-capacity-txt">
                  <h2>5000 mAh </h2>
                  <h3>High capacity Battery</h3>
                  <p>Up to 90km range with 90minute flight time ( 4SP and 3S Li-ion )</p>
                  <ul>
                    <li>4SP</li>
                    <li>3S Li-ion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* lightweight drone  */}
        <section className="high-capacity lightweight-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="light-weight-drone-txt">
                  <h2><span>Lightweight Drone</span> for Quick & Easy Air Monitoring </h2>
                  <p>Smallest, fastest Air Quality Drone as Weighing just 720g— perfect for quick pollution checks in cities. it is easy to deploy and manoeuvre, making it perfect for localized pollution tracking.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="light-weight-drone-img">
                  <Image src="/img/lightweight-drone.webp" alt="real-time-maps" width={100} height={100} />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* lightweight drone  */}
        <section className="high-capacity long-endurance-drone-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="long-enduru-drone-img">
                  <Image src="/img/long-endurance-drone.webp" alt="real-time-maps" width={100} height={100} />
                </div>

              </div>
              <div className="col-lg-6">
                <div className="long-enduru-drone-txt">
                  <h2><span>Long-Endurance Drone</span> for Large-Scale Pollution Mapping </h2>
                  <p>Designed for big missions, the Prana Air Drone can fly up to 90 km and stay airborne for long time. As whether monitoring industrial regions or large areas, it ensures maximum coverage with precise air quality insights!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* advance tech  */}
        <section className="advance-air-tech">
          <div className="container">
            <div className="row">
              <div className="advance-monitor-tech">
                <h2>Advanced Air Quality</h2>
                <p>Monitoring Technology</p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="slider-monitor-tech">
                  <Carousel
                    responsive={videoSlider}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    className="video-slider"
                  >
                    <div>
                      <div className="video-slider-img">
                        <Image src="/img/video-thumbnail.webp" alt="Logo" width={200} height={100} />
                      </div>
                    </div>
                    <div>
                      <div className="video-slider-img">
                        <Image src="/img/video-thumbnail.webp" alt="Logo" width={200} height={100} />
                      </div>
                    </div>
                    <div>
                      <div className="video-slider-img">
                        <Image src="/img/video-thumbnail.webp" alt="Logo" width={200} height={100} />
                      </div>
                    </div>
                    <div>
                      <div className="video-slider-img">
                        <Image src="/img/video-thumbnail.webp" alt="Logo" width={200} height={100} />
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* labelling drone  */}
        <section className="labelling-drone">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="labell-txt">
                  <h2><span>Labelling</span> of Drone</h2>
                  <p>High-resolution camera with GNSS integration for precise geo-tagging.</p>
                  <ul>
                    <li><a href="#">Request a quote</a></li>
                    <li><a href="#"><Image src="/img/icon.png" alt="Logo" width={200} height={100} /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="labell-img">
                  <Image src="/img/labelling-of-drone.webp" alt="Logo" width={200} height={100} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Drone gallery Section */}
        <section className="drone-category-section" ref={sectionRef}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="gallery-title">Product Gallery</h2>
              </div>
              <div className="col-lg-6">
                <div className="category-tabs gallery-tab" ref={tabsRef}>
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
              </div>
            </div>
            <div className="drone-details">
              {activeTab === "vtol" ? (
                <>
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="gallery-image-container">
                        <div className="drone-sensor-image">
                          <img
                            src={photpGallaery[activeSlide] || "https://www.pranaair.com/wp-content/uploads/2025/03/prana-VTOL-air-quality-drone.webp"}
                            alt="Prana VTOL Air Quality Drone"
                            className="img-fluid"
                          />
                        </div>

                        {/* Slider Card */}
                        <div className="gallery-slider-card">
                          <button className="slider-arrow" onClick={handlePrevSlide}>
                            <ChevronUpIcon />
                          </button>

                          <div className="slider-thumbnails">
                            {photpGallaery.map((image, index) => (
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


                </>
              ) : (
                <div className="quad-drone-content">
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <div className="gallery-image-container">
                        <div className="drone-sensor-image">
                          <img
                            src={quadphotpGallaery[activeSlide] || "https://www.pranaair.com/wp-content/uploads/2025/03/prana-quad-air-quality-drone.webp"}
                            alt="Prana QUAD Drone"
                            className="img-fluid"
                          />
                        </div>

                        {/* Slider Card */}
                        <div className="gallery-slider-card">
                          <button className="slider-arrow" onClick={handlePrevSlide}>
                            <ChevronUpIcon />
                          </button>

                          <div className="slider-thumbnails">
                            {quadphotpGallaery.map((image, index) => (
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
                </div>
              )}
            </div>
          </div>
        </section>

        {/* volt quad tailored Section */}
        <section className="trailord">
          <div className="container">
            <div className="row">
              <div className="trailord-txt">
                <h2>VTOL vs. Quad: <span>Tailored for Your Needs</span></h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2">
                <div class="icon-rang">
                  <ul>
                    <li>
                      <Image src="/img/flight-range.png" alt="Logo" width={200} height={100} />
                      Flight Range
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src="/img/flight-range.png" alt="Logo" width={200} height={100} />
                      Flight Range
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src="/img/flight-range.png" alt="Logo" width={200} height={100} />
                      Flight Range
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src="/img/flight-range.png" alt="Logo" width={200} height={100} />
                      Flight Range
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="img-box">
                  <div className="prana-vtol-quad-img">
                    <Image src="/img/prana-VTOL-air-quality-drone.png" alt="Logo" width={200} height={100} />
                  </div>
                  <div className="prana-vtol-quad-img">
                    <Image src="/img/prana-quad-air-quality-drone.webp" alt="Logo" width={200} height={100} />
                  </div>
                </div>
                <div className="prana-vtol-main">
                  <div className="compare">
                    <h3>Prana VTOL</h3>
                    <p>90km (long-endurance)</p>
                    <p>90km (long-endurance)</p>
                    <p>90km (long-endurance)</p>
                    <p>90km (long-endurance)</p>
                    <a href="#">Request a quote  <Image src="/img/blue-icon.png" alt="Logo" width={200} height={100} /></a>
                  </div>

                  <div className="compare">
                    <h3>Prana QUAD</h3>
                    <p>90km (long-endurance)</p>
                    <p>90km (long-endurance)</p>
                    <p>90km (long-endurance)</p>
                    <p>90km (long-endurance)</p>
                    <a href="#">Request a quote  <Image src="/img/blue-icon.png" alt="Logo" width={200} height={100} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* tech spec Section */}
        <section className="tech-spec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="parts-label-heading">
                  <h2>Technical Specifications</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activePartTab === "Parts & Label" ? "active" : ""}`}
                      onClick={() => setActivePartTab("Parts & Label")}
                      href="#!"
                    >
                      Prana VTOL
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activePartTab === "Disassambley" ? "active" : ""}`}
                      onClick={() => setActivePartTab("Disassambley")}
                      href="#!"
                    >
                      Prana Quad
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className={`tab-pane ${activePartTab === "Parts & Label" ? "show active" : ""}`}>
                    <div class="row texh-spec-box">
                      <div class="col-md-6">
                        <div class="tech-spec-list">
                          <ul>
                            <li>
                              <h5>Parameters:</h5>
                            </li>
                            <li>Breathalyzer</li>
                          </ul>
                        </div>
                        <div class="tech-spec-list">
                          <ul>
                            <li>
                              <h5>Connectivity:</h5>
                            </li>
                            <li>Wi-Fi</li>
                          </ul>
                        </div>
                        <div class="tech-spec-list">
                          <ul>
                            <li>
                              <h5>Color:</h5>
                            </li>
                            <li>Ivory</li>
                          </ul>
                        </div>
                        <div class="tech-spec-list">
                          <ul>
                            <li>
                              <h5>Size:</h5>
                            </li>
                            <li>11 x 3.4 x 7.5 (in cm)</li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="tech-spec-list">
                          <ul>
                            <li>
                              <h5>Storage:</h5>
                            </li>
                            <li>Micro SD Card Storage +<br />AQI Cloud Storage</li>
                          </ul>
                        </div>
                        <div class="tech-spec-list">
                          <ul>
                            <li>
                              <h5>Weight:</h5>
                            </li>
                            <li>175g</li>
                          </ul>
                        </div>
                        <div class="tech-spec-list">
                          <ul>
                            <li>
                              <h5>Screen:</h5>
                            </li>
                            <li>Color LED Display</li>
                          </ul>
                        </div>
                        <div class="tech-spec-list">
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
                  <div className={`tab-pane ${activePartTab === "Disassambley" ? "show active" : ""}`}>
                    <div class="row texh-spec-box">
                      <div class="col-md-6">
                        <div class="tech-spec-list">
                          <ul>
                            <li>
                              <h5>Parameters:</h5>
                            </li>
                            <li>Breathalyzer</li>
                          </ul>
                        </div>
                        <div class="tech-spec-list">
                          <ul>
                            <li>
                              <h5>Connectivity:</h5>
                            </li>
                            <li>Wi-Fi</li>
                          </ul>
                        </div>
                        <div class="tech-spec-list">
                          <ul>
                            <li>
                              <h5>Color:</h5>
                            </li>
                            <li>Ivory</li>
                          </ul>
                        </div>
                        <div class="tech-spec-list">
                          <ul>
                            <li>
                              <h5>Size:</h5>
                            </li>
                            <li>11 x 3.4 x 7.5 (in cm)</li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="tech-spec-list">
                          <ul>
                            <li>
                              <h5>Storage:</h5>
                            </li>
                            <li>Micro SD Card Storage +<br />AQI Cloud Storage</li>
                          </ul>
                        </div>
                        <div class="tech-spec-list">
                          <ul>
                            <li>
                              <h5>Weight:</h5>
                            </li>
                            <li>175g</li>
                          </ul>
                        </div>
                        <div class="tech-spec-list">
                          <ul>
                            <li>
                              <h5>Screen:</h5>
                            </li>
                            <li>Color LED Display</li>
                          </ul>
                        </div>
                        <div class="tech-spec-list">
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
          </div>
        </section>
      </main>
    </div>
  )
}
