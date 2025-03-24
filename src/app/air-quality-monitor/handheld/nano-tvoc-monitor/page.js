"use client"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

export default function NanoTVOCMonitorPage() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("Overview")
  const [activeImage, setActiveImage] = useState(0)
  const navbarRef = useRef(null)
  const tabsContainerRef = useRef(null)
  const [activeFaq, setActiveFaq] = useState(null)

  // Images for the product gallery
  const productImages = [
    "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-tvoc-hcho-odor-monitor.png",
    "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-tvoc-odor-monitor.png",
    "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-tvoc-odor-monitor-sideview.png",
    "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-tvoc-monitor-backview.png",
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
    <main className="nano-tvoc-monitor-page">
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

      {/* Breadcrumbs */}
      <section className="bredcrums-pages">
        <div className="container">
          <div className="page-breadcrum">
            <div className="static-breadcrums">
              <ul>
                <li>
                  <Link href="/">Home</Link> &gt;
                </li>
                <li>
                  <Link href="/air-quality-monitor">Air Quality Monitors</Link> &gt;
                </li>
                <li>
                  <Link href="#">
                    <b>Nano TVOC &amp; HCHO</b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Product Overview */}
      <section className="keychain-monitor-section" id="Overview">
        <div className="container">
          <div className="row order-colum">
            {/* Product Gallery */}
            <div className="col-lg-4 col-md-12 ipad">
              <div className="tabcontent disply" id="Comonitora">
                <img
                  src={productImages[activeImage] || "/placeholder.svg"}
                  alt="prana air nano tvoc hcho odor monitor"
                  className="img-fluid"
                />
              </div>
              <div className="tab">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    className={`tablinks ${activeImage === index ? "active" : ""}`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img src={image || "/placeholder.svg"} alt={`TVOC Monitor view ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="col-lg-4 col-md-12 ipad">
              <div className="product-text">
                <div className="inner-product-txt">
                  <h1>Nano TVOC & HCHO</h1>
                  <h4>Odor Monitor</h4>
                  Your portable health device
                </div>
                <div className="mrp-sec">
                  <div className="discount-mrp woocom-list-content">
                    <h6>m.r.p.</h6>
                    <h5>₹ 4,990.00</h5>
                  </div>

                  <section className="articles-container">
                    <article className="article">
                      <p>
                        Prana Air Nano TVOC & HCHO monitor is a handy air quality monitoring device that helps you
                        monitor Total Volatile Organic Compounds & Formaldehyde levels in real-time along temperature
                        and humidity.
                      </p>
                      <p className="extra-content" data-is-toggled="false">
                        Monitor odor in real-time with an advanced and innovative cutting edge technology.
                      </p>
                      <button className="read-more btn">Show More</button>
                    </article>
                  </section>
                </div>
              </div>
            </div>

            {/* Buy Button */}
            <div className="col-lg-4 col-md-12 ipad">
              <div className="add-cart-box">
                <div className="model-box">
                  <h5>model</h5>
                  <center>
                    <select className="nav dropbtn" onChange={(e) => (window.location = e.target.value)}>
                      <option value="https://www.pranaair.com/air-quality-monitor/handheld/nano-tvoc-monitor/">
                        TVOC & HCHO
                      </option>
                      <option value="https://www.pranaair.com/air-quality-monitor/handheld/nano-co-monitor/">
                        Nano CO
                      </option>
                      <option value="https://www.pranaair.com/air-quality-monitor/handheld/nano-co2-monitor/">
                        Nano CO2
                      </option>
                    </select>
                  </center>

                  <div className="model-box">
                    <h5>Quantity</h5>
                    <div className="stepper">
                      <input type="number" className="form-control" min="1" defaultValue="1" />
                    </div>
                    <div className="buy-btns">
                      <br />
                      <button className="buy-now-btn">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Monitoring Banner */}
      <section className="women-bag-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="monitoring-image-container">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-portable-nano-odor-tvoc-monitor.jpeg"
                  alt="Person wearing backpack with Prana Air nano TVOC monitor"
                  className="img-fluid monitoring-person-img"
                />
                <div className="device-zoom-circle">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-tvoc-hcho-odor-monitor.png"
                    alt="Prana Air nano TVOC monitor closeup"
                    className="device-zoom-img"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="monitoring-content">
                <h2 className="monitoring-title">Monitoring</h2>
                <h3 className="monitoring-subtitle">has never been this easy!</h3>
                <p className="monitoring-description">
                  Prana Air nano TVOC/HCHO monitor possesses an elegant and attractive design, facilitating effortless
                  portability even during extensive travels.
                </p>
                <div className="activity-icons">
                  <div className="activity-icon-circle">
                    <img src="https://www.pranaair.com/wp-content/uploads/2023/05/cycing-icon.png" alt="cycling icon" />
                  </div>
                  <div className="activity-icon-circle">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/work-out-icon.png"
                      alt="work out icon"
                    />
                  </div>
                  <div className="activity-icon-circle">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/running-fitness-icon.png"
                      alt="running fitness icon"
                    />
                  </div>
                  <div className="activity-icon-circle">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/working-in-office-icon.png"
                      alt="working in office icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Features */}
      <section className="product-quality-section" id="Features">
        <div className="container">
          <div className="row">
            <div className="col-md-6 features-left-col">
              <div className="features-content">
                <h2 className="features-title">Outstanding features of the Monitor</h2>
                <p className="features-description">
                  It has a small, compact body with a minimal and attractive style that seamlessly blends aesthetics and
                  technology to create a product thats both beautiful and practical.
                </p>

                <div className="features-list">
                  <div className="feature-row">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/real-time-monitor-icon.png"
                          alt="real time monitoring icon"
                        />
                      </div>
                      <div className="feature-text">Real-time Monitoring</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/tvoc-device-battery-icon.png"
                          alt="battery icon"
                        />
                      </div>
                      <div className="feature-text">1000 mAh Lithium battery</div>
                    </div>
                  </div>

                  <div className="feature-row">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/pocket-friendly-device-icon.png"
                          alt="portable device icon"
                        />
                      </div>
                      <div className="feature-text">Mini & Portable Device</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/hd-display-icon.png"
                          alt="HD display icon"
                        />
                      </div>
                      <div className="feature-text">HD Color Display</div>
                    </div>
                  </div>

                  <div className="feature-row">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/mos-sensor-icon.png"
                          alt="Metal Oxide Semiconductor icon"
                        />
                      </div>
                      <div className="feature-text">Metal Oxide Semiconductor</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/type-c-icon.png"
                          alt="type-c interface icon"
                        />
                      </div>
                      <div className="feature-text">Type-C interface</div>
                    </div>
                  </div>

                  <div className="feature-row">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/tvoc-monitor-dynamic-ui-icon.png"
                          alt="dynamic UI icon"
                        />
                      </div>
                      <div className="feature-text">Dynamic UI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 features-right-col">
              <div className="ultra-hd-content">
                <h2 className="ultra-hd-title">Ultra HD</h2>
                <h3 className="ultra-hd-subtitle">1.9 Vibrant Color Screen With Unparalleled Ultra High Definition</h3>
                <p className="ultra-hd-description">
                  High-precision sensors for real-time gas concentration monitoring on a vivid color display, with a
                  user-friendly interface for easy reading and interpretation.
                </p>
                <div className="ultra-hd-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-odor-tvoc-hd-display.png"
                    alt="TVOC monitor high definition display"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Handy & Portable */}
      <section className="heandy-portable-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 handy-bg ipad">
              <div className="handy-box">
                <div className="handy-img">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-tvoc-monitor-is-handy.jpeg"
                    alt="prana air nano tvoc monitor is handy"
                  />
                </div>
                <div className="handy-txt">
                  <h4>Compact</h4>
                  <p>
                    Prana Air nano TVOC/ HCHO monitor is an incredibly handy device features a user-friendly interface
                    that allows for hassle-free reading and interpretation of results.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 ipad">
              <div className="handy-box handy-box-left">
                <div className="handy-img portable-img">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-odor-tvoc-monitor-is-portable.jpeg"
                    alt="prana air odor tvoc monitor is portable"
                  />
                </div>
                <div className="handy-txt portable-txt">
                  <h4>Convenient</h4>
                  <p>
                    This device allows for convenient and hassle-free reading and interpretation of results, and its
                    compact design makes it incredibly easy to carry around wherever you go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TVOC and Formaldehyde Dangers */}
      <section className="corbon-monoxide-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 ipad">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-odor-tvoc-formaldehyde-detector-device.jpeg"
                alt="TVOC and Formaldehyde Dangers"
                className="img-fluid carbon-monoxide-img"
              />
              <div className="monoxide-txt">
                <h4>TVOC and Formaldehyde Dangers</h4>
                <p>
                  Monitoring TVOC and formaldehyde in the respiratory environment is important as exposures can cause
                  dizziness, respiratory disorders, skin problems, endocrine system disorders, dermatitis, headache, and
                  even cancer.
                </p>
              </div>
            </div>
            <div className="col-md-7 ipad tvoc-health-bg">
              <h4 className="hazard-txt-co">
                Potential Health Risks from <span> TVOC & HCHO </span>
              </h4>
              <div className="row data-mob-row">
                <div className="col-md-6">
                  <div className="inner-data">
                    &lt;0.100mg/m<sup>3</sup>
                    <h4>Security Range</h4>
                    <div className="bar"></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inner-data innr-last-data">
                    20.100mg/m<sup>3</sup>
                    <h4>Pharyngeal Discomfort</h4>
                    <div className="yellow"></div>
                  </div>
                </div>
              </div>
              <div className="row data-mob-row">
                <div className="col-md-6">
                  <div className="inner-data">
                    &gt;0.500mg/m<sup>3</sup>
                    <h4>Irritation in the eyes, tearing</h4>
                    <div className="orange"></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inner-data innr-last-data">
                    &gt;0.600mg/m<sup>3</sup>
                    <h4>Brain damage, coma, or even death</h4>
                    <div className="red"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Slider Section */}
      <section className="co-monitore-outdoor-slider">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="home-slider">
                <div>
                  <div className="row mob-revers">
                    <div className="col-md-7 ipad">
                      <div className="ac_slider_content">
                        <h2>Accurate · Compact · Reliable</h2>
                        <p>
                          Experience the convenience of this sleek and compact TVOC monitoring device, which eliminates
                          the need for bulky and complex equipment. With its reliable data on indoor air quality, you
                          can stay informed and take control of your environment effortlessly.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-5 ipad">
                      <div className="ac_slider_left_box">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-odor-tvoc-monitor-with-real-time-data.jpeg"
                          alt="prana air nano odor tvoc monitor with real-time data"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row mob-revers">
                    <div className="col-md-7 ipad">
                      <div className="ac_slider_content">
                        <h2>Versatile · Convenient · Sleek</h2>
                        <p>
                          Experience the ultimate in practicality and versatility with our sleek and convenient TVOC
                          pocket monitor. From tracking indoor air quality to adapting to different air quality
                          environments, its the must-have device for effortless monitoring wherever you go.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-5 ipad">
                      <div className="ac_slider_left_box">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/portable-nano-tvoc-hcho-monitor.jpg"
                          alt="prana air portable nano tvoc hcho monitor"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Real-Time Data */}
      <section className="real-time-data-section">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-7 ipad">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/real-time-tvoc-and-hcho-data.png"
                alt="TVOC real-time data display"
                className="img-fluid real-time-data-img"
              />
            </div>
            <div className="col-md-5 ipad">
              <div className="real-time-data-txt">
                <h5>Real-Time Data</h5>
                <h4>TVOC, HCHO, Temp., & Humidity</h4>
                <p>
                  Prana Air TVOC/HCHO monitor utilizes advanced MOS monitoring technology to provide real-time data and
                  insights on indoor odor levels. This cutting-edge device empowers you to take control of your
                  environment and making informed decisions to reduce odor and promote clean air.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Full Width Banner */}
      <section className="out-door-banner">
        <img
          src="https://www.pranaair.com/wp-content/uploads/2023/05/monitoring-real-time-odor-tvc-in-washroom.jpeg"
          alt="measuring indoor tvoc level with prana air monitor"
          className="img-fluid outdoor-monitor-device-img"
        />
      </section>

      {/* SECTION 9: MOS Technology */}
      <section className="electrochemical-heading">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="electrochecmial-para">
                <h5 className="heading-bg">MOS- Metal Oxide Semiconductor</h5>
                <h4>For TVOC & HCHO Detection</h4>
                <p>
                  When TVOC & HCHO gases come in contact with the metal oxide surface, they change the resistance of the
                  semiconductor material, causing a measurable change in the electrical current passing through it. This
                  change is then recorded by the device and interpreted as a gas concentration level, providing
                  real-time data on indoor air quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Smart Chip */}
      <section className="smart-chip-section">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-5">
              <div className="smart-chip-txt">
                <h5>
                  High-sensitive <span>Smart Chip</span>
                </h5>
                <h4>for more Accurate Detection</h4>
                <p>
                  The instrument has a built-in high-performance smart chip that detects TVOC and formaldehyde levels,
                  ensuring more accurate measurements.
                </p>
                <ul className="smart-chip-quality">
                  <li>High Sensitivity</li>
                  <li>Accurate Data</li>
                  <li>Fast Operation Speed</li>
                  <li>Energy Efficiency</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/smart-chip-on-prana-air-tvoc-odor-monitor.png"
                alt="TVOC smart chip"
                className="img-fluid smart-chip-img floating"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Attractive Details */}
      <section className="attractive-details-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 ipad">
              <div className="attractive-txt">
                <h4>Portable Convenience in Style</h4>
              </div>
            </div>
          </div>
          <div className="row ipad mob-scroll">
            <div className="col-md-4 ipad">
              <div className="attract-bg-box">
                <div className="top_head">
                  <p>
                    <span className="range_no">01</span>
                  </p>
                  <h4>
                    Type C <span className="detail_text">Charging</span>
                  </h4>
                </div>
                <img
                  className="mob-type-c-img"
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/tvoc-monitor-type-c-charging.png"
                  alt="prana air nano tvoc monitor type c charging"
                />
              </div>
            </div>
            <div className="col-md-4 ipad attract-bg">
              <div className="attract-bg-box">
                <div className="top_head">
                  <p>
                    <span className="range_no">02</span>
                  </p>
                  <h4>
                    Anti-loss <span className="detail_text">Lanyard</span>
                  </h4>
                </div>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/anti-loss-lanyard-of-tvoc-monitor.png"
                  alt="prana air tvoc monitor anti loss lanyard"
                />
              </div>
            </div>
            <div className="col-md-4 ipad attract-bg">
              <div className="attract-bg-box">
                <div className="top_head">
                  <p>
                    <span className="range_no">03</span>
                  </p>
                  <h4>
                    Ultra HD <span className="detail_text">Color screen</span>
                  </h4>
                </div>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/ulta-hd-display-of-tvoc-monitor.png"
                  alt="prana air tvoc monitor ulta hd display"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Product Key Functions */}
      <section className="product-key-function-section" id="Functions">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="product-function-txt">
                <h4>Product Key functions</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-tvoc-monitor-key-functions.png"
                alt="Product key functions"
                className="img-fluid product-key-function"
              />
            </div>
            <div className="col-md-7">
              <div className="power-key-box">
                <ul>
                  <li>power key</li>
                  <li>Long Press : On/Off</li>
                  <li>Single Press : Change Temp. Unit (°C/F)</li>
                </ul>
              </div>
              <div className="turn-alarm">
                <ul>
                  <li>Single Press : Turn Alarm </li>
                  <li>
                    on <img src="https://www.pranaair.com/wp-content/uploads/2023/05/volume-on.png" alt="volume-on" />
                    <span>|</span>
                    off{" "}
                    <img src="https://www.pranaair.com/wp-content/uploads/2023/05/volume-off.png" alt="volume-off" />
                  </li>
                </ul>
              </div>
              <div className="brightness-levels">
                <ul>
                  <li>Single Press : Change Brightness Levels </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/full-brightness.png"
                      alt="full-brightness"
                    />
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/half-brightness.png"
                      alt="half-brightness"
                    />
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/low-brightness.png"
                      alt="low-brightness.png"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: Battery Endurance */}
      <section className="battery-endurance-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="battery-txt">
                <h5>Large-capacity Polymer</h5>
                <h4>Battery Endurance (1000 mAh)</h4>
                <p>A durable, high-performance polymer lithium-ion battery with a large capacity and long lifespan.</p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-tvoc-odor-battery-capacity.png"
                alt="TVOC battery endurance"
                className="img-fluid large-battery-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: Handy and Portable Banner */}
      <section className="out-door-banner">
        <div className="outdoor-device-bg">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/05/handy-and-portable-tvco-monitor-of-prana-air.png"
            alt="measuring real-time tvoc hcho level with prana air monitor"
          />
        </div>
      </section>

      {/* SECTION 15: Real-time TVOC Detection */}
      <section className="real-time-co-detection">
        <div className="container">
          <div className="row">
            <div className="col-md-5 ipad">
              <div className="tvoc-real-time">
                <h4>
                  Real-time <span> TVOC </span> and <span>HCHO</span> detection with An intelligent alarm system
                </h4>
                <ul>
                  <li>
                    <p>Know the TVOC & HCHO levels around you </p>
                  </li>
                  <li>
                    <p>Detects TVOC/ odor in real-time with 2 seconds data refresh rate. </p>
                  </li>
                </ul>
              </div>
              <div className="tovc-cycle">
                <ul>
                  <li>
                    <span className="circule-icon">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/green-circle.png"
                        alt="green-circule"
                      />
                    </span>
                    <p>
                      {" "}
                      <span className="green-txt">green:</span> <b>0-0.99 mg/m3,</b> Safe, No alarm sound:
                    </p>
                  </li>
                </ul>
              </div>
              <div className="tovc-cycle">
                <ul>
                  <li>
                    <span className="circule-icon">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/yellow-circle.png"
                        alt="yellow-circule"
                      />
                    </span>
                    <p>
                      {" "}
                      <span className="green-txt yelw-txt">Yellow:</span> <b>0.100mg/m3,</b> it will start a beep cycle
                      alarm, once every 10 minutes.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 ipad">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/alarm-system-in-prana-air-tvoc-monitor.png"
                alt="TVOC detection alarm"
                className="img-fluid co-detection-img"
              />
            </div>
            <div className="col-md-4 ipad">
              <div className="co2-bar">
                <ul className="security">
                  <li>Security</li>
                  <li>Cycle Alarm</li>
                  <li>Cycle Alarm</li>
                  <li>Cycle Alarm</li>
                </ul>
                <div className="bar-box">
                  <ul className="bar-colr">
                    <li>
                      <div className="co-data"></div>
                    </li>
                    <li>0.000~0.080mg/m³</li>
                    <li>
                      <div className="co-data orange-bar"></div>
                    </li>
                    <li>0.501~1.999mg/m³</li>
                  </ul>
                  <ul className="bar-colr">
                    <li>
                      <div className="co-data yellow-bar"></div>
                    </li>
                    <li>0.201~0.500mg/m³</li>
                    <li className="last-bar">
                      <div className="co-data red-bar"></div>
                    </li>
                    <li>0.101~0.200mg/m³</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 16: Technical Specifications */}
      <section className="technical-specification" id="Tech-Specs">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="attractive-txt product-specification-heading">
                Monitors
                <h4>Technical Specifications</h4>
              </div>
            </div>
            <div className="col-md-9">
              <div className="brochore-btn">
                <a href="/wp-content/uploads/2023/06/prana-air-nano-odor-tvoc-monitor-brochure.pdf">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/05/brochore-btn.png" alt="brochore-btn" />{" "}
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
          <div className="row mid-box">
            <div className="col-md-4 box-line">
              <div className="product-specifi shdw-line">
                Product Name :<h4>Nano TVOC & HCHO Monitor</h4>
              </div>
              <div className="product-specifi">
                Warm-up time :<h4>35 Sec</h4>
              </div>
              <div className="product-specifi">
                Working Temp. :<h4>-10~50°C</h4>
              </div>
            </div>
            <div className="col-md-4 box-line">
              <div className="product-specifi">
                Detection Range :
                <h4>
                  0~9.999mg/m<sup>3</sup>
                </h4>
              </div>
              <div className="product-specifi">
                Data Refresh Rate :<h4>2 Sec</h4>
              </div>
              <div className="product-specifi">
                Charging Mode :<h4>USB Type-C</h4>
              </div>
            </div>
            <div className="col-md-4 box-line">
              <div className="product-specifi">
                Working Voltage :<h4>3.7 V</h4>
              </div>
              <div className="product-specifi">
                Operating Humidity :<h4>0-95% RH</h4>
              </div>
              <div className="product-specifi">
                Monitor Dimension :<h4>51 x 17 x 85 (mm)</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 17: Product Comparison */}
      <section className="comparison-sec" id="Compare">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="attractive-txt comparision-heading">
                <h4>Comparison of Our Nano TVOC/HCHO monitor vs a high-end monitor</h4>
              </div>
            </div>
          </div>
          <div className="row mob-scroll">
            <div className="col-md-3">
              <div className="comp-heading mobshow">
                <h4>TVOC Monitor</h4>
              </div>
              <div className="product-discription">
                <ul>
                  <li>Description :</li>
                  <li>Parameter :</li>
                  <li>Price :</li>
                  <li>Weight :</li>
                  <li>Range :</li>
                  <li>Accuracy :</li>
                  <li>Technology :</li>
                  <li>Portability :</li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="dis-img">
                <div className="disc-inner-img-one">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-tvoc-hcho-odor-monitor.png"
                    alt="prana air nano tvoc monitor low cost"
                  />
                </div>
                <div className="disc-inner-img-two">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/high-end-tvoc-monitor.png"
                    alt="tsi high end tvoc monitor"
                  />
                </div>
              </div>
              <div className="product-feature">
                <ul className="mini-co-monitor">
                  <li>Nano TVOC Monitor</li>
                  <li className="tab-bg">TVOC, HCHO, Temp, Humidity</li>
                  <li>Low Cost</li>
                  <li className="tab-bg">75g</li>
                  <li>0~9.999 mg/m3</li>
                  <li className="tab-bg">±5%</li>
                  <li>MOS Sensing</li>
                  <li className="tab-bg">Small & easy to carry</li>
                </ul>
                <ul className="co-multifuntion-monitor">
                  <li>High-End TVOC Monitor</li>
                  <li>TVOC</li>
                  <li>High Cost</li>
                  <li>Almost 1 Kg</li>
                  <li>0-20,000 ppb</li>
                  <li>±3%</li>
                  <li>PID Sensing</li>
                  <li>Comparatively less portable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 18: FAQs */}
      <section className="faq" id="FAQs">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="attractive-txt faq-heading">
                <h4>Frequently Asked Questions</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="my-faq">
                <div className="inner-faq">
                  <div className={`faq-item ${activeFaq === 1 ? "active" : ""}`} onClick={() => toggleFaq(1)}>
                    <h4>1. What gases can this nano monitor of Prana Air detect?</h4>
                    {activeFaq === 1 && (
                      <div className="faq-para">
                        <p>This nano monitor is designed to detect TVOC and HCHO gases.</p>
                      </div>
                    )}
                  </div>
                  <div className={`faq-item ${activeFaq === 2 ? "active" : ""}`} onClick={() => toggleFaq(2)}>
                    <h4>2. Can this nano monitor detect gases other than TVOC and HCHO?</h4>
                    {activeFaq === 2 && (
                      <div className="faq-para">
                        <p>No, this device is specifically designed to detect TVOC and HCHO gases only.</p>
                      </div>
                    )}
                  </div>
                  <div className={`faq-item ${activeFaq === 3 ? "active" : ""}`} onClick={() => toggleFaq(3)}>
                    <h4>3. Can Prana Air nano TVOC/HCHO monitor measure temperature and humidity levels?</h4>
                    {activeFaq === 3 && (
                      <div className="faq-para">
                        <p>
                          Yes, this device also measures temperature and humidity levels in addition to TVOC and HCHO
                          gases.
                        </p>
                      </div>
                    )}
                  </div>
                  <div className={`faq-item ${activeFaq === 4 ? "active" : ""}`} onClick={() => toggleFaq(4)}>
                    <h4>4. How accurate is this nano TVOC/HCHO monitor?</h4>
                    {activeFaq === 4 && (
                      <div className="faq-para">
                        <p>
                          The device is equipped with high-precision sensors that provide accurate and reliable data
                          (±5%).
                        </p>
                      </div>
                    )}
                  </div>
                  <div className={`faq-item ${activeFaq === 5 ? "active" : ""}`} onClick={() => toggleFaq(5)}>
                    <h4>5. Is this nano monitor easy to use?</h4>
                    {activeFaq === 5 && (
                      <div className="faq-para">
                        <p>Yes, the device is designed to be user-friendly and easy to operate.</p>
                      </div>
                    )}
                  </div>
                  <div className={`faq-item ${activeFaq === 6 ? "active" : ""}`} onClick={() => toggleFaq(6)}>
                    <h4>6. Is Prana Air nano monitor portable?</h4>
                    {activeFaq === 6 && (
                      <div className="faq-para">
                        <p>Yes, the device is small and compact, making it easy to carry around wherever you go.</p>
                      </div>
                    )}
                  </div>
                  <div className={`faq-item ${activeFaq === 7 ? "active" : ""}`} onClick={() => toggleFaq(7)}>
                    <h4>7. Does this monitor have alarm system?</h4>
                    {activeFaq === 7 && (
                      <div className="faq-para">
                        <p>
                          Yes, it gives an alarm sound when the TVOCs value is yellow color{" "}
                          <b>
                            0.100mg/m<sup>3</sup>.{" "}
                          </b>{" "}
                          It will start a beep cycle alarm, once every 10 minutes.
                        </p>
                      </div>
                    )}
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

