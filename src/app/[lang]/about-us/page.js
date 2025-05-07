"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import "./styles.css"

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("monitoring")
  const [isVisible, setIsVisible] = useState({})

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    mission: useRef(null),
    solutions: useRef(null),
    company: useRef(null),
    founder: useRef(null),
    team: useRef(null),
    vision: useRef(null),
  }

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Reduced threshold for earlier triggering
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          setIsVisible((prev) => ({ ...prev, [id]: true }))

          // Unobserve after element becomes visible to improve performance
          if (entry.target && observer) {
            observer.unobserve(entry.target)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Delay observation slightly to improve initial load performance
    setTimeout(() => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.observe(ref.current)
        }
      })
    }, 100)

    // Smooth scroll for anchor links with improved performance
    const handleAnchorClick = (e) => {
      const target = e.target
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href").slice(1)
        const element = document.getElementById(id)
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
          })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick, { passive: true })

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current && observer) {
          observer.unobserve(ref.current)
        }
      })
      document.removeEventListener("click", handleAnchorClick)
      observer.disconnect()
    }
  }, [])

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section id="hero" ref={sectionRefs.hero} className={`hero-section ${isVisible.hero ? "visible" : ""}`}>
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1>Pioneering Clean Air Solutions for a Healthier Tomorrow</h1>
              <p>
                With pollution taking a toll on everyones life while risking their health – it is about time we
                increase our efforts in putting together relevant information, creating awareness and providing clean
                air solutions for a future that is truly sane for every individual.
              </p>
              <div className="hero-buttons">
                <Link href="/air-quality-monitor" className="btn-primary">
                  Explore Our Products <span className="icon-arrow-right"></span>
                </Link>
                <a href="#about" className="btn-secondary">
                  Learn More <span className="icon-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={sectionRefs.about} className={`about-section ${isVisible.about ? "visible" : ""}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">About Prana Air</span>
            <h2 className="section-title">Breathing Life Into a Cleaner Future</h2>
          </div>

          <div className="about-grid">
            <div className="about-content">
              <p>
                Incepted from a personal experience of not being able to breathe fresh air, Prana Air came to life when
                people questioned the safety of their lives. No city in the country is immune to pollution anymore, and
                here is why we aim to address the issue at a mass level.
              </p>
              <p>
                Prana Air, a product brand under <strong>Purelogic Labs India Pvt. Ltd.</strong>, ensures the best of
                Indias first low-cost, smart features enabled and highly accurate air quality monitoring devices &amp;
                clean air solutions for both indoors and outdoors, households &amp; businesses.
              </p>
              <p>
                Located in New Delhi, India, Prana Air is specialized in air quality monitors, sensors, fresh air
                machines, room air purifiers, and motorized HEPA filter pollution masks for the safety of your health.
              </p>

              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon">
                    <span className="icon-check"></span>
                  </div>
                  <div className="feature-text">
                    <h3>Innovative Technology</h3>
                    <p>Cutting-edge solutions for monitoring and improving air quality</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">
                    <span className="icon-check"></span>
                  </div>
                  <div className="feature-text">
                    <h3>Affordable Solutions</h3>
                    <p>High-quality products at reasonable prices for wider accessibility</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">
                    <span className="icon-check"></span>
                  </div>
                  <div className="feature-text">
                    <h3>Customer-Centric Approach</h3>
                    <p>Focused on solving real problems with practical solutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-logos">
              <div className="logo-container">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/03/about-logo.png"
                  alt="Prana Air logo"
                  className="about-logo-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Watch Our Story</span>
            <h2 className="section-title">Learn More About Prana Air</h2>
          </div>

          <div className="video-container-wrapper">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/nKmkJGCgP78"
                title="Prana Air Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        ref={sectionRefs.mission}
        className={`mission-section ${isVisible.mission ? "visible" : ""}`}
      >
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <span className="section-subtitle">Our Mission</span>
              <h2 className="section-title">Committed to Clean Air for All</h2>
              <p>
                Our mission at Prana Air is to make Delhi – and India as a whole – a safe place to live, making use of
                innovation, modern technology and reasonable pricing. We believe that everyone deserves to breathe clean
                air, and were dedicated to making that possible through our innovative products and solutions.
              </p>

              <div className="stats-container">
                <div className="stat">
                  <span className="stat-number">2016</span>
                  <span className="stat-label">Year Founded</span>
                </div>
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Products</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100K+</span>
                  <span className="stat-label">Lives Improved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        ref={sectionRefs.solutions}
        className={`solutions-section ${isVisible.solutions ? "visible" : ""}`}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Solutions</span>
            <h2 className="section-title">Comprehensive Air Quality Solutions</h2>
            <p className="section-description">
              Prana Air offers a wide range of products designed to monitor air quality and provide clean air solutions
              for various environments.
            </p>
          </div>

          <div className="solutions-tabs">
            <div className="tabs-header">
              <button
                className={`tab-button ${activeTab === "monitoring" ? "active" : ""}`}
                onClick={() => handleTabChange("monitoring")}
              >
                Air Quality Monitoring
              </button>
              <button
                className={`tab-button ${activeTab === "purification" ? "active" : ""}`}
                onClick={() => handleTabChange("purification")}
              >
                Air Purification
              </button>
              <button
                className={`tab-button ${activeTab === "protection" ? "active" : ""}`}
                onClick={() => handleTabChange("protection")}
              >
                Personal Protection
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === "monitoring" && (
                <div className="tab-pane">
                  <div className="tab-grid">
                    <div className="tab-image">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-office-purelogic-labs-new-delhi.jpeg"
                        alt="Air Quality Monitoring"
                        className="solution-img"
                      />
                    </div>
                    <div className="tab-content">
                      <h3>Advanced Air Quality Monitoring</h3>
                      <p>
                        Our air quality monitoring devices provide accurate, real-time data on various pollutants
                        including PM2.5, PM10, CO, CO2, VOCs, and more. These smart devices help you understand the air
                        you breathe and make informed decisions.
                      </p>
                      <ul className="solution-features">
                        <li>
                          <span className="feature-icon icon-check"></span>
                          <span>Handheld Pocket Monitors for personal use</span>
                        </li>
                        <li>
                          <span className="feature-icon icon-check"></span>
                          <span>Nano CO and CO2 Monitors for specific gas detection</span>
                        </li>
                        <li>
                          <span className="feature-icon icon-check"></span>
                          <span>Air Drones for outdoor air quality assessment</span>
                        </li>
                        <li>
                          <span className="feature-icon icon-check"></span>
                          <span>Rental Air Monitors for temporary monitoring needs</span>
                        </li>
                      </ul>
                      <Link href="/air-quality-monitor" className="btn-outline">
                        Explore Monitoring Solutions <span className="icon-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "purification" && (
                <div className="tab-pane">
                  <div className="tab-grid">
                    <div className="tab-image">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-office-purelogic-labs-new-delhi.jpeg"
                        alt="Air Purification"
                        className="solution-img"
                      />
                    </div>
                    <div className="tab-content">
                      <h3>Effective Air Purification Systems</h3>
                      <p>
                        Our range of air purifiers and sanitizers effectively remove pollutants, allergens, and harmful
                        particles from indoor air, creating a healthier living and working environment.
                      </p>
                      <ul className="solution-features">
                        <li>
                          <span className="feature-icon icon-check"></span>
                          <span>Air Sanitizers for eliminating airborne pathogens</span>
                        </li>
                        <li>
                          <span className="feature-icon icon-check"></span>
                          <span>Fresh Air Machines for continuous air renewal</span>
                        </li>
                        <li>
                          <span className="feature-icon icon-check"></span>
                          <span>Outdoor Air Purifiers for larger spaces</span>
                        </li>
                        <li>
                          <span className="feature-icon icon-check"></span>
                          <span>Car Air Filters for cleaner air while traveling</span>
                        </li>
                      </ul>
                      <Link href="/air-sanitizer" className="btn-outline">
                        Explore Purification Solutions <span className="icon-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "protection" && (
                <div className="tab-pane">
                  <div className="tab-grid">
                    <div className="tab-image">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-office-purelogic-labs-new-delhi.jpeg"
                        alt="Personal Protection"
                        className="solution-img"
                      />
                    </div>
                    <div className="tab-content">
                      <h3>Personal Air Protection</h3>
                      <p>
                        Our personal protection products provide individuals with clean air solutions on the go,
                        ensuring you can breathe safely even in polluted environments.
                      </p>
                      <ul className="solution-features">
                        <li>
                          <span className="feature-icon icon-check"></span>
                          <span>Air Masks with HEPA filters for daily use</span>
                        </li>
                        <li>
                          <span className="feature-icon icon-check"></span>
                          <span>Junior Pollution Masks designed for children</span>
                        </li>
                        <li>
                          <span className="feature-icon icon-check"></span>
                          <span>Wearable Air Purifiers for continuous protection</span>
                        </li>
                        <li>
                          <span className="feature-icon icon-check"></span>
                          <span>Motorized masks for enhanced filtration</span>
                        </li>
                      </ul>
                      <Link href="/air-mask" className="btn-outline">
                        Explore Protection Solutions <span className="icon-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Company Structure Section */}
      <section
        id="company"
        ref={sectionRefs.company}
        className={`company-section ${isVisible.company ? "visible" : ""}`}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Company Structure</span>
            <h2 className="section-title">Purelogic Labs India Pvt. Ltd.</h2>
            <p className="section-description">
              Established in 2016, Purelogic Labs India Pvt. Ltd. is the parent company behind Prana Air and AQI.IN,
              working together to combat air pollution through monitoring, awareness, and innovative solutions.
            </p>
          </div>

          <div className="company-structure">
            <div className="company-main">
              <div className="company-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/03/purelogic-labs.png"
                  alt="Purelogic Labs India Pvt. Ltd."
                />
              </div>
              <h3>Purelogic Labs India Pvt. Ltd.</h3>
              <Link href="https://purelogic.in/" className="brand-link">
                Parent Company <span className="icon-external-link"></span>
              </Link>
            </div>

            <div className="company-brands">
              <div className="brand-card">
                <div className="brand-logo">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/03/about-logo.png" alt="Prana Air" />
                </div>
                <h3>Prana Air</h3>
                <p>Air Quality Monitoring & Clean Air Solutions</p>
                <Link href="/air-quality-monitor" className="brand-link">
                  Explore Products <span className="icon-external-link"></span>
                </Link>
              </div>

              <div className="brand-card">
                <div className="brand-logo">
                  <img src="https://www.aqi.in/media/misc/aqi-logo.svg" alt="AQI.IN" />
                </div>
                <h3>AQI.IN</h3>
                <p>Real-time Air Quality Index & Pollution Data</p>
                <a href="https://www.aqi.in/" target="_blank" rel="noopener noreferrer" className="brand-link">
                  Visit Website <span className="icon-external-link"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="company-info">
            <p>
              Purelogic Labs India is an initiative to increase awareness about air pollution in India. As consciousness
              about poor air in society grows, people will want to take some action to protect themselves. Based on this
              premise, Purelogic Labs established Prana Air for providing the best clean air solution in India.
            </p>
            <p>
              To bring everyones attention to the rising issue of air pollution while also providing real-time data and
              solutions for the same, Purelogic Labs India is currently working on a unique platform, AQI India –{" "}
              <a href="https://www.aqi.in" target="_blank" rel="noopener noreferrer">
                www.aqi.in
              </a>{" "}
              – also available on{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.aqi.data"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play Store
              </a>{" "}
              and{" "}
              <a
                href="https://itunes.apple.com/tt/app/airqualityindex-aqi/id1439684571?"
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section
        id="founder"
        ref={sectionRefs.founder}
        className={`founder-section ${isVisible.founder ? "visible" : ""}`}
      >
        <div className="container">
          <div className="founder-grid">
            <div className="founder-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/rohit-bansal-founder-of-prana-air-purelogic-labs.jpeg"
                alt="Rohit Bansal, Founder and CEO"
              />
            </div>
            <div className="founder-content">
              <span className="section-subtitle">Leadership</span>
              <h2 className="section-title">Meet Our Founder</h2>
              <h3 className="founder-name">Rohit Bansal</h3>
              <p className="founder-title">Founder & CEO</p>
              <p className="founder-bio">
                Native from India, Rohit Bansal has been dealing with air pollution for quite a long time – until he
                decided to do something about it. Driven by personal experience and a vision for cleaner air, he founded
                Purelogic Labs India Pvt. Ltd. in 2016.
              </p>
              <p className="founder-bio">
                Under his leadership, the company has developed two complementary brands: Prana Air for air quality
                monitoring and clean air solutions, and AQI.IN for real-time air quality data and awareness.
              </p>
              <p className="founder-bio">
                One of his first projects was the successful E.T. scooter, an electric, sustainable and portable vehicle
                of transportation, showcasing his commitment to environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" ref={sectionRefs.team} className={`team-section ${isVisible.team ? "visible" : ""}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Team</span>
            <h2 className="section-title">The Minds Behind Our Mission</h2>
            <p className="section-description">
              Based in New Delhi, India, our office counts with a diverse and multicultural team. Young, passionate and
              motivated members from India, Brazil, Egypt, Sudan, Sweden and Taiwan have joined on board towards a
              sustainable environment and a healthier life.
            </p>
          </div>

          <div className="team-image">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2022/04/Purelogic-Labs-India-Team.png"
              alt="Purelogic Labs India Team"
              className="desktop-team"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" ref={sectionRefs.vision} className={`vision-section ${isVisible.vision ? "visible" : ""}`}>
        <div className="container">
          <div className="vision-content">
            <div className="vision-icon">
              <img src="https://www.pranaair.com/wp-content/uploads/2021/03/vision-icon.png" alt="Vision Icon" />
            </div>
            <span className="section-subtitle light">Our Vision</span>
            <h2 className="section-title light">Creating a Breathable Future</h2>
            <p className="vision-text">
              Our vision at Prana Air is to make Delhi – and India as a whole – a safe place to live, making use of
              innovation, modern technology and reasonable pricing.
            </p>
            <Link href="/contact" className="btn-light">
              Join Our Mission <span className="icon-arrow-right"></span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

