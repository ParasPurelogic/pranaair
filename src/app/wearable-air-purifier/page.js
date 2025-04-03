"use client"

import { useState, useEffect } from "react"
import "./style.css"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"

export default function WearableAirPurifier() {
  const [activeAccordion, setActiveAccordion] = useState(0)
  const [videoOverlayOpen, setVideoOverlayOpen] = useState(false)

  // Add click handler for the navigation items
  const [activeNavItem, setActiveNavItem] = useState(0)

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index)
  }

  const openVideoOverlay = () => {
    setVideoOverlayOpen(true)
  }

  const closeVideoOverlay = () => {
    setVideoOverlayOpen(false)
  }

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
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const faqItems = [
    {
      title: "1. How does Prana Air Personal Air Purifier work?",
      content:
        "Prana Air Personal Air Purifier utilizes advanced high-density dual negative ion emitters to purify the air around you, providing cleaner and healthier air to breathe.",
    },
    {
      title: "2. Is Prana Air Personal Air Purifier suitable for people with respiratory conditions?",
      content:
        "Yes, Prana Air Personal Air Purifier is designed to improve air quality and can be beneficial for individuals with respiratory conditions by reducing pollutants and allergens in the surrounding air.",
    },
    {
      title: "3. How long does the battery of Prana Air Personal Air Purifier last?",
      content:
        "The battery of Prana Air Personal Air Purifier can last up to 45 hours on a single charge, providing long-lasting usage before requiring a recharge.",
    },
    {
      title: "4. Is Prana Air Personal Air Purifier easy to use?",
      content:
        "Prana Air Personal Air Purifier features user-friendly controls, making it easy to operate and adjust settings according to your preferences.",
    },
    {
      title: "5. Can I wear Prana Air Personal Air Purifier during physical activities?",
      content:
        "Yes, Prana Air Personal Air Purifier is designed to be portable and wearable, making it suitable for use during various physical activities like workouts or outdoor adventures.",
    },
    {
      title: "6. Is there any need to replace the filters?",
      content:
        "Prana Air Personal Air purifier works on the principle of negative ion emitters. It does not constitute any air filters thereby reducing the hassle of filter changes.",
    },
    {
      title: "7. Can I adjust the purification intensity of the Personal Air Purifier?",
      content:
        "Yes, the Personal Air Purifier offers adjustable settings, allowing you to customize the purification intensity based on your preferences and the air quality of your surroundings.",
    },
    {
      title: "8. Is Prana Air Personal Air Purifier suitable for travel?",
      content:
        "The compact and portable design of Prana Air Personal Air Purifier makes it perfect for travel, providing clean and fresh air wherever you go.",
    },
  ]

  const customizeSlides = [
    {
      number: "01",
      title: "Respiratory Relief",
      description: "Healthy respiratory environment for people with breathing difficulties.",
      image:
        "https://www.pranaair.com/wp-content/uploads/2023/06/use-of-prana-air-air-purifier-for-respiatory-issue.jpeg",
    },
    {
      number: "02",
      title: "Healthcare Facilities",
      description: "Provide additional protection in hospitals, clinics, and medical settings.",
      image: "https://www.pranaair.com/wp-content/uploads/2023/06/use-of-prana-air-purifier-for-health.jpeg",
    },
    {
      number: "03",
      title: "Shopping Malls/Retail Stores",
      description: "Breathe clean air while shopping or spending time in crowded areas.",
      image: "https://www.pranaair.com/wp-content/uploads/2023/06/use-of-prana-air-purifier-while-shopping.jpeg",
    },
    {
      number: "04",
      title: "Office Spaces",
      description: "Enhance productivity by breathing in purified air during work hours.",
      image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-purifier-use-in-office.jpg",
    },
    {
      number: "05",
      title: "Gyms/Fitness Centers",
      description: "Enhance productivity by breathing in purified air during work hours.",
      image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-purifier-use-in-gym.jpg",
    },
    {
      number: "06",
      title: "Classrooms",
      description: "Ensure clean air for students and educators to support concentration and well-being.",
      image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-purifier-use-in-classroom.jpg",
    },
    {
      title: "07",
      title: "Outdoor activity",
      description: "Enjoy fresh air during outdoor adventures, sports, or leisure activities.",
      image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-purifier-use-in-outdoor-activity.jpg",
    },
    {
      title: "08",
      title: "Airplane/Train Travel",
      description: "Enjoy fresh air during outdoor adventures, sports, or leisure activities.",
      image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-purifier-use-during-travel.jpg",
    },
  ]

  // Add scroll event listener to update active nav item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const navBar = document.querySelector(".product-nav-bar")
      const navBarPosition = navBar?.offsetTop || 0

      // Make the navigation bar sticky when scrolling past it
      if (scrollPosition > navBarPosition) {
        navBar?.classList.add("sticky")
      } else {
        navBar?.classList.remove("sticky")
      }

      // Get all section elements
      const overviewSection = document.getElementById("overview")
      const featuresSection = document.getElementById("features")
      const dualSection = document.getElementById("dual")
      const comparisonSection = document.getElementById("comparison")
      const specSection = document.getElementById("spec")

      // Get positions of each section
      const overviewPosition = overviewSection?.offsetTop - 180
      const featuresPosition = featuresSection?.offsetTop - 180
      const dualPosition = dualSection?.offsetTop - 180
      const comparisonPosition = comparisonSection?.offsetTop - 180
      const specPosition = specSection?.offsetTop - 180

      // Determine which section is currently in view
      if (scrollPosition >= specPosition) {
        setActiveNavItem(4)
      } else if (scrollPosition >= comparisonPosition) {
        setActiveNavItem(3)
      } else if (scrollPosition >= dualPosition) {
        setActiveNavItem(2)
      } else if (scrollPosition >= featuresPosition) {
        setActiveNavItem(1)
      } else {
        setActiveNavItem(0)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Update the handleNavItemClick function to account for the sticky navigation
  const handleNavItemClick = (index, sectionId) => {
    setActiveNavItem(index)

    // Smooth scroll to the section
    const element = document.getElementById(sectionId)
    if (element) {
      const navBar = document.querySelector(".product-nav-bar")
      const navBarHeight = navBar?.classList.contains("sticky") ? navBar.offsetHeight : 0
      const yOffset = -navBarHeight // Only account for nav bar height if it's sticky
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({
        top: y,
        behavior: "smooth",
      })
    }
  }

  // Update the product navigation bar with the click handler
  return (
    <main>
      {/* Product Navigation Bar */}
      <div className="product-nav-bar">
        <ul>
          <li className={activeNavItem === 0 ? "active" : ""}>
            <a
              href="#overview"
              onClick={(e) => {
                e.preventDefault()
                handleNavItemClick(0, "overview")
              }}
            >
              Overview
            </a>
          </li>
          <li className={activeNavItem === 1 ? "active" : ""}>
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault()
                handleNavItemClick(1, "features")
              }}
            >
              Features
            </a>
          </li>
          <li className={activeNavItem === 2 ? "active" : ""}>
            <a
              href="#dual"
              onClick={(e) => {
                e.preventDefault()
                handleNavItemClick(2, "dual")
              }}
            >
              Dual-Ions
            </a>
          </li>
          <li className={activeNavItem === 3 ? "active" : ""}>
            <a
              href="#comparison"
              onClick={(e) => {
                e.preventDefault()
                handleNavItemClick(3, "comparison")
              }}
            >
              Comparison
            </a>
          </li>
          <li className={activeNavItem === 4 ? "active" : ""}>
            <a
              href="#spec"
              onClick={(e) => {
                e.preventDefault()
                handleNavItemClick(4, "spec")
              }}
            >
              Specs
            </a>
          </li>
        </ul>
      </div>

      {/* Banner Section */}
      <section className="banner-section" id="overview">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="banner-content">
                <h4 className="text-white text-xl font-medium mb-2">Prana Air Personal</h4>
                <h2 className="text-white text-5xl font-bold mb-0">Wearable Air</h2>
                <h2 className="text-white text-6xl font-bold mb-4">Purifier</h2>
                <div className="subtitle text-white text-xl mb-6">Dual -VE Ions Emitter</div>
                <a
                  href="https://www.pranaair.com/product/personal-air-purifier/"
                  className="buy-now-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    color: "#fff",
                    border: "2px solid #fff",
                    padding: "12px 30px",
                    fontSize: "18px",
                    fontWeight: "500",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                >
                  Buy Now
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
                    className="ml-2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-personal-wearable-air-purifier.png"
                  alt="Prana Air Wearable Air Purifier"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elimination Heading */}
      <section className="elimination-section" style={{ padding: "60px 0 0", background: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="elimination-heading d-flex flex-column align-items-center">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/heading-ion-icon.png"
                    alt="heading ion icon"
                    className="rotet mr-3"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <h2 className="text-3xl font-bold text-gray-800">Effective Elimination from various Pollutants</h2>
                </div>
                <p className="text-center text-gray-600 max-w-3xl">
                  Prana Air Personal Air Purifier, Ideal for Respiratory Disorders, Effectively Eliminates Pollutants
                  for a Healthier Environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elimination Section */}
      <section
        className="elimination-bg-section"
        style={{
          backgroundImage: "url('https://www.pranaair.com/wp-content/uploads/2023/06/elimation-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 0",
          position: "relative",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 position-relative">
              <div className="elimination-content d-flex flex-column flex-md-row align-items-center justify-content-center">
                <div className="elimination-left text-right mb-5 mb-md-0" style={{ flex: "1" }}>
                  <div className="elimination-item d-flex align-items-center justify-content-end mb-5">
                    <div className="elimination-text mr-4 text-right">
                      <h4 className="text-lg font-medium text-gray-800">Eliminates Pollen, ensuring cleaner air.</h4>
                    </div>
                    <div className="elimination-icon">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/ensuring-cleaner-air-icon.png"
                        alt="ensuring cleaner air icon"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                  </div>
                  <div className="elimination-item d-flex align-items-center justify-content-end">
                    <div className="elimination-text mr-4 text-right">
                      <h4 className="text-lg font-medium text-gray-800">
                        Effectively traps Dust Particles with our hanging purifier.
                      </h4>
                    </div>
                    <div className="elimination-icon">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/effectively-traps-icon.png"
                        alt="effectively traps icon"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="elimination-center mx-4" style={{ flex: "0 0 auto" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/personal-air-purifier-cleaning-pollutants.png"
                    alt="Wearable Air Purifier Device"
                    style={{ maxWidth: "300px", height: "auto" }}
                  />
                </div>

                <div className="elimination-right text-left" style={{ flex: "1" }}>
                  <div className="elimination-item d-flex align-items-center mb-5">
                    <div className="elimination-icon mr-4">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/tackles-harmful-icons.png"
                        alt="tackles harmful icons"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div className="elimination-text">
                      <h4 className="text-lg font-medium text-gray-800">
                        Tackles harmful PM2.5 for fresher indoor and outdoor environments.
                      </h4>
                    </div>
                  </div>
                  <div className="elimination-item d-flex align-items-center">
                    <div className="elimination-icon mr-4">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/remove-smoke-.png"
                        alt="remove smoke"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div className="elimination-text">
                      <h4 className="text-lg font-medium text-gray-800">
                        Removes Smoke, keeping surroundings fresh and clean.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impressive Features Section */}
      <section
        className="impressive-feature-section"
        id="features"
        style={{
          background: "linear-gradient(to right, #93adbc, #a7c1d0, #d4e3ea)",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="text-4xl font-bold text-white mb-2">Impressive Features</h2>
              <p className="text-xl text-white">That Redefine Air Purification</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-7">
              <div className="row mb-5">
                <div className="col-md-2 col-3">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/high-density-negative-ion.png"
                    alt="Dual Ion Emitters"
                    className="feature-icon"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="col-md-10 col-9">
                  <h3 className="text-xl font-bold text-white mb-2">Dual (-ve) Ion Emitters</h3>
                  <p className="text-white opacity-80">High-Density Negative Ion Emission (80-150 million/cm3)</p>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-2 col-3">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/long-battery-life-icon.png"
                    alt="Long Battery Life"
                    className="feature-icon"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="col-md-10 col-9">
                  <h3 className="text-xl font-bold text-white mb-2">Long Battery Life</h3>
                  <p className="text-white opacity-80">Long-lasting Power with up to 30-60 Hours of Battery Life.</p>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-2 col-3">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/extended-runtime-icon.png"
                    alt="Extended Runtime"
                    className="feature-icon"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="col-md-10 col-9">
                  <h3 className="text-xl font-bold text-white mb-2">Extended Runtime</h3>
                  <p className="text-white opacity-80">Quick 2-Hour Charge, 45-Hour Purification with 700mAh Battery</p>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-2 col-3">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/ultra-quite-design-icon.png"
                    alt="Ultra Quiet Design"
                    className="feature-icon"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="col-md-10 col-9">
                  <h3 className="text-xl font-bold text-white mb-2">Ultra Quiet Design</h3>
                  <p className="text-white opacity-80">The Device Silently works its Magic by your side.</p>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-2 col-3">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/portable-and-wearable-icon.png"
                    alt="Portable and Wearable"
                    className="feature-icon"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="col-md-10 col-9">
                  <h3 className="text-xl font-bold text-white mb-2">Portable and Wearable</h3>
                  <p className="text-white opacity-80">Purify the air on the go, wherever you are.</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-2 col-3">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/no-filter-replacements-icon.png"
                    alt="No Filter Replacements"
                    className="feature-icon"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="col-md-10 col-9">
                  <h3 className="text-xl font-bold text-white mb-2">No Filter Replacements</h3>
                  <p className="text-white opacity-80">Hassle-free Maintenance with no Filter Replacement.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div className="device-showcase" style={{ position: "relative" }}>
                <div
                  className="device-platform"
                  style={{
                    background: "#fff",
                    width: "250px",
                    height: "40px",
                    borderRadius: "10px 10px 0 0",
                    position: "relative",
                    zIndex: "1",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                ></div>
                <div
                  className="device-angle"
                  style={{
                    background: "#d4e3ea",
                    width: "300px",
                    height: "200px",
                    transform: "skewY(-20deg)",
                    position: "absolute",
                    top: "20px",
                    left: "-25px",
                    zIndex: "0",
                  }}
                ></div>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/portable-personal-air-purifier.png"
                  alt="Wearable Air Purifier"
                  style={{
                    maxWidth: "200px",
                    position: "relative",
                    top: "-20px",
                    zIndex: "2",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wearable Section */}
      <section className="wearable-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="wearable-box">
                <h3>Wearable</h3>
                <h4>Air Purifier</h4>
                <p>
                  Experience effortless protection with our wearable air purifier. Easy to carry and use, it ensures
                  clean and fresh air wherever you go.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="wearable-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-wearable-purifier.jpeg"
                  alt="Wearable Air Purifier Device"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="benefit-section">
              <h3>The Benefits</h3>
              <h5>of Wearable Air Purification</h5>
            </div>
          </div>
        </div>
      </div>

      <section className="benefit-bg-section">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-4 col-6">
              <div className="benefit-icon-box">
                <div className="benefit-icons">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/healthier-breathing-icon.png"
                    alt="healthier breathing icon"
                  />
                </div>
                <div className="benfit-txt">
                  <h3>Healthier Breathing</h3>
                  <p>Eliminate pollutants and allergens for improved respiratory health.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-6">
              <div className="benefit-icon-box">
                <div className="benefit-icons">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/enhanced-focus-icon.png"
                    alt="enhanced focus icon"
                  />
                </div>
                <div className="benfit-txt">
                  <h3>Enhanced Focus</h3>
                  <p>Breathe clean air to boost energy and mental clarity.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-6">
              <div className="benefit-icon-box">
                <div className="benefit-icons">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/smoke-removal-icon.png"
                    alt="smoke removal icon"
                  />
                </div>
                <div className="benfit-txt">
                  <h3>Smoke Removal</h3>
                  <p>Say goodbye to secondhand smoke with effective smoke elimination.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-6">
              <div className="benefit-icon-box">
                <div className="benefit-icons">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/strong-immunity-icn.png"
                    alt="strong immunity icon"
                  />
                </div>
                <div className="benfit-txt">
                  <h3>Stronger Immunity</h3>
                  <p>Reduce exposure to pathogens and boost your immune system.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-6">
              <div className="benefit-icon-box">
                <div className="benefit-icons">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/customizable-purification-icon.png"
                    alt="customizable-purification-icon"
                  />
                </div>
                <div className="benfit-txt">
                  <h3>Customizable Purification</h3>
                  <p>Adjust settings for personalized air cleansing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className="how-work-section"
        id="how-it-works"
        style={{
          background: "#1e2124",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="how-to-work-text">
                <h2 className="text-white text-4xl font-bold mb-4">
                  How It Works{" "}
                  <img
                    className="floating"
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/negetive-ions-.png"
                    alt="negative ions"
                    style={{ width: "50px", display: "inline-block", marginLeft: "15px" }}
                  />
                </h2>
                <h3 className="text-white text-xl font-medium mb-4">Harnessing the Power of Negative Ions</h3>
                <p className="text-white opacity-90 leading-relaxed">
                  Harnessing Negative Ions for Healthier Air. Neutralizes harmful particles, enhances mood, and promotes
                  well-being. Breathe pure and revitalizing air now!
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="how-work-img text-center">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/dual-negative-ions-emitter-in-prana-air-purifier-.png"
                  alt="How It Works Wearable Air Purifier"
                  className="mx-auto"
                  style={{ maxWidth: "100%", position: "relative" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="step-video-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="video-heading">
                <h4>
                  Efficiency Experiment: How <span className="prana">Prana Air</span> Personal Air Purifier Cleans The
                  Air Pollutants
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-paara">
                <p>
                  Find out how much filtration efficiency of Prana Airs Personal Wearable Air Purifier has. In this
                  experiment, you will be able to see the efficiency of the product cleaning the smoke inside the small
                  closed-chamber.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="video-thumbnail-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/how-to-use-prana-wearable-purifier-video-thumbnail.jpg"
                  alt="Prana Air Personal Air Purifier Cleaning Smoke"
                />
                <a
                  id="play-video"
                  className="video-play-button"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    openVideoOverlay()
                  }}
                >
                  <span></span>
                </a>
              </div>
              {videoOverlayOpen && (
                <div id="video-overlay" className="video-overlay open">
                  <a
                    className="video-overlay-close"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      closeVideoOverlay()
                    }}
                  >
                    &times;
                  </a>
                  <video controls autoPlay>
                    <source
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-personal-air-purifier-cleaning-smoke.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Effortless Operation Section */}
      <section className="effortless-section" style={{ padding: "100px 0", background: "#ffffff" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Effortless</h2>
              <p className="text-2xl text-gray-600">Operation</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-5 mb-md-0">
              <div className="operation-step text-center">
                <div className="device-image mb-4">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/2nd-step-to-switch-the-mode-of-purifier.png"
                    alt="Step 1"
                    className="mx-auto"
                    style={{ maxWidth: "200px", height: "auto" }}
                  />
                </div>
                <div className="step-number mb-3">
                  <span className="text-8xl font-light text-gray-300">01</span>
                </div>
                <p className="text-gray-700 px-4">
                  Long press the button to turn it on/off and pressing the button once again shows blue (high gear).
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5 mb-md-0">
              <div className="operation-step text-center">
                <div className="device-image mb-4">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/2nd-step-to-switch-the-mode-of-purifier.png"
                    alt="Step 2"
                    className="mx-auto"
                    style={{ maxWidth: "200px", height: "auto" }}
                  />
                </div>
                <div className="step-number mb-3">
                  <span className="text-8xl font-light text-gray-300">02</span>
                </div>
                <p className="text-gray-700 px-4">
                  After the negative ion purifier is turned on, the indicator light shows green (low gear).
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="operation-step text-center">
                <div className="device-image mb-4">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/red-indicator-when-need-to-charge.png"
                    alt="Step 3"
                    className="mx-auto"
                    style={{ maxWidth: "200px", height: "auto" }}
                  />
                </div>
                <div className="step-number mb-3">
                  <span className="text-8xl font-light text-gray-300">03</span>
                </div>
                <p className="text-gray-700 px-4">
                  The low battery indicator light is red, and the indicator light is red when charging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ionization Technology Section */}
      <section className="lonization-tech-section" id="dual">
        <div className="container">
          <div className="row">
            <div className="col-md-6 lonization-colm-bg">
              <div className="lonization-text">
                <h4>Advanced</h4>
                <h3>Ionization Technology</h3>
                <p>
                  Now with Dual Ionizer! Effortlessly purify and freshen the air you breathe. Breathe cleaner, feel
                  rejuvenated!
                </p>
              </div>
            </div>
            <div className="col-md-6 lonization-tech-img-bg">
              <div className="dual-icon-txt">
                <h4>Dual</h4>
                <h5>
                  Negative <span className="dual-icon">ion</span> emitter
                </h5>
              </div>
              <div className="lonization-tech-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/lonization-technology-of-prana-air-purifier.png"
                  alt="Dual Negative Ion Emitter"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Protected Section */}
      <section className="stay-protected-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="stay-protect-txt">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/stay-protected-icon.jpg"
                  alt="Stay Protected Icon"
                />
                <h3>Stay Protected</h3>
                <h4>On-the-Go</h4>
                <p>
                  Experience effortless protection with our wearable air purifier. Easy to carry and use, it ensures
                  clean and fresh air wherever you go.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="stay-protect-ing-bg">
                <div className="stay-protect-img">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/stay-protected-with-prana-air-purifier.jpeg"
                    alt="Stay Protected On The Go"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Purifier Comparison Section */}
      <section className="air-purifier-other-purifier-section" id="comparison">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="purifier-heading">
                <h3>Prana Airs</h3>
                <h5>Air Purifier</h5>
              </div>
            </div>
            <div className="col-md-6">
              <div className="other-purifier-heading">
                <h5>Other</h5>
                <h6>Air Purifier</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="paran-purifier-col-bg">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="dual-icon-txt parna-purifieri-txt">
                      <h4>Dual</h4>
                      <h5>
                        Negative <span className="dual-icon">ion</span> emitter
                      </h5>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="prana-purifier-img">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-dual-negative-ions-emitters.png"
                        alt="Prana Air Purifier Device"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="other-purifier-col-bg">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="other-purifieri-txt">
                      <h4>Single</h4>
                      <h5>Negative ion emitter</h5>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="other-purifier-img">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/other-purifier-with-single-ion-emitter.png"
                        alt="Other Air Purifier Device"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section 2 */}
      <section className="step-video2-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="video-heading">
                <h4>
                  Product Application: Use of <span className="prana">Prana Air</span> Personal Air Purifier
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-paara">
                <p>
                  This innovative personal air purifier can be used by anyone anytime at home or any workplace. The
                  small air purifier can help you breathe clean air and give your safety from the unhealthy air quality.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="video-thumbnail-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/paran-air-purifier-video-thumbnail.jpeg"
                  alt="Prana Air Purifier Video Thumbnail"
                />
                <a
                  className="video-play-button"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    openVideoOverlay()
                  }}
                >
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Group Section */}
      <section className="every-age-group-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="age-group-heading">
                <h3>For Every</h3>
                <h4>Age Group</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="age-group-imgs">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/personal-air-purifier-for-child.jpeg"
                  alt="Kids Using Air Purifier"
                />
              </div>
              <div className="age-group-txt-para">
                <h4>Kids</h4>
                <p>Clean air for little lungs, Prana Air cares!</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="age-group-imgs">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/use-of-prana-air-purifier-in-office.jpeg"
                  alt="Adults Using Air Purifier"
                />
              </div>
              <div className="age-group-txt-para">
                <h4>Adults</h4>
                <p>Breathe easy with Prana Air, your daily companion.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="age-group-imgs">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/old-man-using-personal-air-purifier.jpeg"
                  alt="Old Age Using Air Purifier"
                />
              </div>
              <div className="age-group-txt-para">
                <h4>Old Age</h4>
                <p>Nurture your health with Prana Air, age gracefully.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractive Details Section */}
      <section className="attractive-section" style={{ padding: "80px 0", background: "#ffffff" }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="section-heading d-flex align-items-center">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/heading-ion-icon.png"
                  alt="Icon"
                  className="rotet mr-3"
                  style={{ width: "40px", height: "40px" }}
                />
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-1">Attractive</h2>
                  <p className="text-xl text-gray-600">details for easy carrying</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <div
                className="feature-panel"
                style={{
                  background: "#1e2124",
                  borderRadius: "8px",
                  padding: "40px",
                  height: "100%",
                  position: "relative",
                }}
              >
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="feature-labels text-white">
                      <div className="mb-5">
                        <p className="mb-1">Low Gear</p>
                        <div style={{ width: "80px", height: "1px", background: "rgba(255,255,255,0.3)" }}></div>
                      </div>
                      <div>
                        <p className="mb-1">High Gear</p>
                        <div style={{ width: "80px", height: "1px", background: "rgba(255,255,255,0.3)" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-dual-negative-ions-emitters.png"
                      alt="Device Features"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="col-md-4">
                    <div className="feature-labels text-white text-right">
                      <div className="mb-5">
                        <p className="mb-1">Battery indicater</p>
                        <div
                          style={{
                            width: "80px",
                            height: "1px",
                            background: "rgba(255,255,255,0.3)",
                            marginLeft: "auto",
                          }}
                        ></div>
                      </div>
                      <div>
                        <p className="mb-1">ON & OFF Switch Key</p>
                        <div
                          style={{
                            width: "80px",
                            height: "1px",
                            background: "rgba(255,255,255,0.3)",
                            marginLeft: "auto",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="feature-panel"
                style={{
                  background: "#e4f1f4",
                  borderRadius: "8px",
                  padding: "40px",
                  height: "100%",
                }}
              >
                <div className="row align-items-center">
                  <div className="col-md-6 text-center">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/portable-personal-air-purifier.png"
                      alt="Type C Charging"
                      style={{ maxWidth: "60%", height: "auto" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">Type C</h3>
                    <p className="text-lg text-gray-600">Charging Port</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div
                className="feature-panel"
                style={{
                  background: "#e4f1f4",
                  borderRadius: "8px",
                  padding: "40px",
                  height: "100%",
                }}
              >
                <div className="row align-items-center">
                  <div className="col-md-6 text-center">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/lonization-technology-of-prana-air-purifier.png"
                      alt="Hanging Thread"
                      style={{ maxWidth: "60%", height: "auto" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">Hanging</h3>
                    <p className="text-lg text-gray-600">Thread</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="feature-panel"
                style={{
                  background: "#1e2124",
                  borderRadius: "8px",
                  padding: "40px",
                  height: "100%",
                }}
              >
                <div className="row align-items-center">
                  <div className="col-md-6 text-center">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-dual-negative-ions-emitters.png"
                      alt="Adjustable Modes"
                      style={{ maxWidth: "60%", height: "auto" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <h3 className="text-2xl font-bold text-white mb-3">2 Adjustable Modes</h3>
                    <div className="d-flex align-items-center text-white mb-2">
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          background: "#5ec2e9",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      ></div>
                      <p>High Gear</p>
                    </div>
                    <div className="d-flex align-items-center text-white">
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          background: "#5ec2e9",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      ></div>
                      <p>Low Gear</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="technical-spec-section" id="spec" style={{ padding: "80px 0", background: "#f9f9f9" }}>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <div className="spec-heading d-flex align-items-center">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/heading-ion-icon.png"
                  alt="Product Icon"
                  className="mr-3"
                  style={{ width: "40px", height: "40px" }}
                />
                <div>
                  <h3 className="text-xl font-medium text-gray-600 mb-1">Product</h3>
                  <h2 className="text-3xl font-bold text-gray-800">Technical specifications</h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-md-right">
              <a
                href="https://www.pranaair.com/wp-content/uploads/2023/07/prana-air-personal-wearable-air-purifier-brochure.pdf"
                className="download-btn"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "#7ab261",
                  color: "#fff",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Brochure
              </a>
            </div>
          </div>

          <div className="specs-table">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="spec-item d-flex justify-content-between align-items-center p-3 mb-3"
                  style={{ background: "#fff", borderRadius: "4px" }}
                >
                  <div className="spec-label text-gray-600">Negative ion concentration :</div>
                  <div className="spec-value font-bold">80-150 million /cm3</div>
                </div>
                <div
                  className="spec-item d-flex justify-content-between align-items-center p-3 mb-3"
                  style={{ background: "#f0f7fa", borderRadius: "4px" }}
                >
                  <div className="spec-label text-gray-600">Product weight :</div>
                  <div className="spec-value font-bold">42g</div>
                </div>
                <div
                  className="spec-item d-flex justify-content-between align-items-center p-3 mb-3"
                  style={{ background: "#fff", borderRadius: "4px" }}
                >
                  <div className="spec-label text-gray-600">Input voltage :</div>
                  <div className="spec-value font-bold">DC5V C</div>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="spec-item d-flex justify-content-between align-items-center p-3 mb-3"
                  style={{ background: "#fff", borderRadius: "4px" }}
                >
                  <div className="spec-label text-gray-600">Model :</div>
                  <div className="spec-value font-bold">M8</div>
                </div>
                <div
                  className="spec-item d-flex justify-content-between align-items-center p-3 mb-3"
                  style={{ background: "#f0f7fa", borderRadius: "4px" }}
                >
                  <div className="spec-label text-gray-600">Battery capacity :</div>
                  <div className="spec-value font-bold">700mAh</div>
                </div>
                <div
                  className="spec-item d-flex justify-content-between align-items-center p-3 mb-3"
                  style={{ background: "#fff", borderRadius: "4px" }}
                >
                  <div className="spec-label text-gray-600">Battery life :</div>
                  <div className="spec-value font-bold">30-60h</div>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="spec-item d-flex justify-content-between align-items-center p-3 mb-3"
                  style={{ background: "#fff", borderRadius: "4px" }}
                >
                  <div className="spec-label text-gray-600">Charging time :</div>
                  <div className="spec-value font-bold">About 2 hours</div>
                </div>
                <div
                  className="spec-item d-flex justify-content-between align-items-center p-3 mb-3"
                  style={{ background: "#f0f7fa", borderRadius: "4px" }}
                >
                  <div className="spec-label text-gray-600">Size :</div>
                  <div className="spec-value font-bold">72*35*20mm</div>
                </div>
                <div
                  className="spec-item d-flex justify-content-between align-items-center p-3 mb-3"
                  style={{ background: "#fff", borderRadius: "4px" }}
                >
                  <div className="spec-label text-gray-600">Filter :</div>
                  <div className="spec-value font-bold">No filter replacement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customize Section */}
      <section className="customize-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="customize-slider-heading">
                <h2>Customize</h2>
                <h4>Your Air Purification Experience</h4>
              </div>
            </div>
            <div className="col-md-9">
              <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={4000}
                infinite={true}
                showDots={true}
                arrows={false}
                className="new-slider"
              >
                {customizeSlides.map((slide, index) => (
                  <div key={index} className="customize-slider-img">
                    <h3>{slide.number}</h3>
                    <h4>{slide.title}</h4>
                    <p>{slide.description}</p>
                    <img src={slide.image || "/placeholder.svg"} alt={slide.title} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" style={{ padding: "80px 0", background: "#ffffff" }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Frequently Asked</h2>
              <h3 className="text-2xl font-bold text-gray-700">Questions</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="faq-accordion">
                {faqItems.map((item, index) => (
                  <div key={index} className="faq-item mb-4" style={{ borderBottom: "1px solid #eee" }}>
                    <div
                      className={`faq-question d-flex justify-content-between align-items-center p-3 cursor-pointer ${activeAccordion === index ? "active" : ""}`}
                      onClick={() => handleAccordionClick(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <h4 className="text-lg font-medium text-gray-800 mb-0">{item.title}</h4>
                      <span className="toggle-icon">
                        {activeAccordion === index ? (
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
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        ) : (
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
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        )}
                      </span>
                    </div>
                    {activeAccordion === index && (
                      <div className="faq-answer p-3 pb-4">
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

