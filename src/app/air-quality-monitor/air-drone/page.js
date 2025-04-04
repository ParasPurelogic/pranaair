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
              <Image src="/img/Prana-air-VTOL.webp" alt="Logo" width={200} height={200} />
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
              <Image src="/img/hero-btn-icon.png" alt="Logo" width={20} height={20} />
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
              <div className="feature-item last">
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
            <h2 className="section-title">Drone <span className="heading-grey">Category</span> </h2>

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

            <div className="drone-details ">
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
                        <div className="spec-description">15 km in open conditions</div>
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
                        <Image src="/img/health-risk-mitigation.webp" alt="Logo" width={200} height={100} />
                        <h3>
                          Environmental Compliance
                        </h3>
                      </div>
                    </div>
                    <div>
                      <div className="app-slide-img-box">
                        <Image src="/img/environmental-complince.webp" alt="Logo" width={200} height={100} />
                        <h3>
                          Health Risk Mitigation
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
                        <Image src="/img/CH4.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">CH4</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/CO.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">CO</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/H2S.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">H2S</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/Humidity.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">Humidity</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/NH3.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">NH3</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/NO2.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">NO2</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/O3.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">O3</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/PM2.5.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">PM2.5</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/PM10.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">PM10</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/SO2.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">SO2</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/TEMPERATURE.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">TEMPERATURE</span>
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
                      <Image src="/img/Historical-Data.png" alt="real-time-maps" width={100} height={100} />
                    </li>
                    <li>
                      <h3>Historical Data</h3>
                      <p>Analysis of past measurements for trend identification</p>
                    </li>
                  </ul>
                </div>
                <div className="map-box">
                  <ul>
                    <li>
                      <Image src="/img/graph-generation.png" alt="real-time-maps" width={100} height={100} />
                    </li>
                    <li>
                      <h3>Graph Generation</h3>
                      <p>Visual graphs for easy interpretation</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src="/img/Data-Plotting.png" alt="real-time-maps" width={100} height={100} />
                    </li>
                    <li>
                      <h3>Data Plotting</h3>
                      <p>Detailed plots for in-depth analysis</p>
                    </li>
                  </ul>
                </div>
                <div className="map-img">
                  <ul>
                    <li>
                      <Image src="/img/heat-maps.webp" alt="heat-maps" width={100} height={100} />
                      <h3>Heat Maps</h3>
                      <p>Colour-coded maps highlighting pollution hotspots</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src="/img/custom-data.webp" alt="heat-maps" width={100} height={100} />
                      <h3>Custom Data</h3>
                      <p>Tailored reports based on user needs</p>
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
                    autoPlaySpeed={4000}
                    className="video-slider"
                  >
                    <div>
                      <div className="video-slider-img">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://customer-12c4mdft3x8eqlll.cloudflarestream.com/484294820fe7b20ff36ed750ff19324a/iframe?muted=true&autoplay=true&loop=true" // Replace with your actual video URL
                          title="YouTube video player"
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <div>
                      <div className="video-slider-img">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://customer-12c4mdft3x8eqlll.cloudflarestream.com/484294820fe7b20ff36ed750ff19324a/iframe?muted=true&autoplay=true&loop=true" // Replace with your actual video URL
                          title="YouTube video player"
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <div>
                      <div className="video-slider-img">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://customer-12c4mdft3x8eqlll.cloudflarestream.com/484294820fe7b20ff36ed750ff19324a/iframe?muted=true&autoplay=true&loop=true" // Replace with your actual video URL
                          title="YouTube video player"
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <div>
                      <div className="video-slider-img">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://customer-12c4mdft3x8eqlll.cloudflarestream.com/484294820fe7b20ff36ed750ff19324a/iframe?muted=true&autoplay=true&loop=true" // Replace with your actual video URL
                          title="YouTube video player"
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        ></iframe>
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
                                className={`slider-thumbnail ${activeSlide === index ? "active fade-in" : ""}`}
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
                              className={`nav-dot ${activeSlide === index ? "active fade-in" : ""}`}
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
                      <Image src="/img/Use-Case.png" alt="Logo" width={200} height={100} />
                      Use Case
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src="/img/Camera.png" alt="Logo" width={200} height={100} />
                      Camera
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src="/img/Portability.png" alt="Logo" width={200} height={100} />
                      Portability
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
                    <p>Industrial sites, environmental research</p>
                    <p>Thermal + 4K night vision</p>
                    <p>Compact design, 1.8kg max weight</p>
                    <a href="#">Request a quote  <Image src="/img/blue-icon.png" alt="Logo" width={200} height={100} /></a>
                  </div>

                  <div className="compare">
                    <h3>Prana QUAD</h3>
                    <p>1km (localized precision)</p>
                    <p>Urban areas, rapid deployments</p>
                    <p>High-resolution with GNSS</p>
                    <p>Ultra-lightweight (720g), 5-inch props</p>
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
              <div className="col-lg-6">
                <ul className="nav nav-tabs tech-tab">
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
              </div>
              <div className="col-lg-6">
                <a className="brochure-btn" href="#"><Image src="/img/btn-icon.png" alt="Logo" width={200} height={100} /> Brochure</a>
              </div>
              <div className="tab-content">
                <div className={`tab-pane ${activePartTab === "Parts & Label" ? "show active fade-in" : ""}`}>
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
                      <div class="tech-spec-list bg">
                        <ul>
                          <li>
                            <h5>Materials :</h5>
                          </li>
                          <li>PC+ABS</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Working current : </h5>
                          </li>
                          <li>≤20mA</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list bg">
                        <ul>
                          <li>
                            <h5>Device dimension : </h5>
                          </li>
                          <li>66mm X 40mm X 16mm </li>
                        </ul>
                      </div>
                      <div class="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Parameters:</h5>
                          </li>
                          <li>Breathalyzer</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list bg">
                        <ul>
                          <li>
                            <h5>Materials :</h5>
                          </li>
                          <li>PC+ABS</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Working current : </h5>
                          </li>
                          <li>≤20mA</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list bg">
                        <ul>
                          <li>
                            <h5>Device dimension : </h5>
                          </li>
                          <li>66mm X 40mm X 16mm </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Parameters:</h5>
                          </li>
                          <li>Breathalyzer</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list bg">
                        <ul>
                          <li>
                            <h5>Materials :</h5>
                          </li>
                          <li>PC+ABS</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Working current : </h5>
                          </li>
                          <li>≤20mA</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list bg">
                        <ul>
                          <li>
                            <h5>Device dimension : </h5>
                          </li>
                          <li>66mm X 40mm X 16mm </li>
                        </ul>
                      </div>
                      <div class="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Parameters:</h5>
                          </li>
                          <li>Breathalyzer</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list bg">
                        <ul>
                          <li>
                            <h5>Materials :</h5>
                          </li>
                          <li>PC+ABS</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Working current : </h5>
                          </li>
                          <li>≤20mA</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list bg">
                        <ul>
                          <li>
                            <h5>Device dimension : </h5>
                          </li>
                          <li>66mm X 40mm X 16mm </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane ${activePartTab === "Disassambley" ? "show active fade-in" : ""}`}>
                  <div class="row texh-spec-box">
                    <div class="col-md-6">
                      <div class="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Parameters:</h5>
                          </li>
                          <li>test</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list bg">
                        <ul>
                          <li>
                            <h5>Materials :</h5>
                          </li>
                          <li>PC+ABS</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Working current : </h5>
                          </li>
                          <li>≤20mA</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list bg">
                        <ul>
                          <li>
                            <h5>Device dimension : </h5>
                          </li>
                          <li>66mm X 40mm X 16mm </li>
                        </ul>
                      </div>
                      <div class="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Parameters:</h5>
                          </li>
                          <li>Breathalyzer</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list bg">
                        <ul>
                          <li>
                            <h5>Materials :</h5>
                          </li>
                          <li>PC+ABS</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Working current : </h5>
                          </li>
                          <li>≤20mA</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list bg">
                        <ul>
                          <li>
                            <h5>Device dimension : </h5>
                          </li>
                          <li>66mm X 40mm X 16mm </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Parameters:</h5>
                          </li>
                          <li>Breathalyzer</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list bg">
                        <ul>
                          <li>
                            <h5>Materials :</h5>
                          </li>
                          <li>PC+ABS</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Working current : </h5>
                          </li>
                          <li>≤20mA</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list bg">
                        <ul>
                          <li>
                            <h5>Device dimension : </h5>
                          </li>
                          <li>66mm X 40mm X 16mm </li>
                        </ul>
                      </div>
                      <div class="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Parameters:</h5>
                          </li>
                          <li>Breathalyzer</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list bg">
                        <ul>
                          <li>
                            <h5>Materials :</h5>
                          </li>
                          <li>PC+ABS</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Working current : </h5>
                          </li>
                          <li>≤20mA</li>
                        </ul>
                      </div>
                      <div class="tech-spec-list bg">
                        <ul>
                          <li>
                            <h5>Device dimension : </h5>
                          </li>
                          <li>66mm X 40mm X 16mm </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
                  <div className="contact_content_box col-md-4">
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

                  <div className="col-md-8">
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
                  <h2>Frequently asked questions</h2>
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
      </main>
    </div>
  )
}
