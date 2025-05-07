"use client"

import { useState, useEffect, useRef } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "./style.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ContactForm from "@/Components/Contacform/ContactForm";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CO2SensorPage() {
  // State for tabs in the feature section
  const [activeTab, setActiveTab] = useState("tab1")

  // State for custom tabs in the index score section
  const [activeCustomTab, setActiveCustomTab] = useState("custom-tab1")

  // Refs for GSAP animations
  const page2Ref = useRef(null)
  const partnerRef = useRef(null)
  const swipRef = useRef(null)

  // Function to handle tab changes
  const openTab = (tabId) => {
    setActiveTab(tabId)
  }

  // Function to handle custom tab changes
  const handleCustomTabClick = (tabId) => {
    setActiveCustomTab(tabId)
  }

  // Initialize GSAP ScrollTrigger animations
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      // Function to initialize ScrollTrigger animations
      const initScrollTrigger = () => {
        // Bottom card animation
        gsap.fromTo(
          swipRef.current,
          { y: "100%", opacity: 0 }, // Start off-screen and invisible
          {
            y: "-100%", // Move to the top
            opacity: 1, // Become visible
            scrollTrigger: {
              trigger: page2Ref.current,
              scrub: true,
              scroller: "body",
              start: "top 20%",
              end: "top -80%",
              pin: true,
              onUpdate: (self) => {
                // Gradually hide the top card as the bottom card moves
                gsap.to(partnerRef.current, {
                  opacity: 1 - self.progress,
                  duration: 0.1,
                  overwrite: true,
                })
              },
            },
          },
        )
      }

      // Media query for desktop
      const desktopQuery = window.matchMedia("(min-width: 1025px)")

      // Check if the screen width matches the desktop query
      if (desktopQuery.matches) {
        console.log("Desktop animation active") // Debugging step
        initScrollTrigger()
      } else {
        console.log("Mobile/tablet detected, ScrollTrigger disabled") // Debugging step

        // Disable ScrollTrigger for smaller screens
        ScrollTrigger.getAll().forEach((st) => st.kill())
      }

      // Add event listener for when screen size changes (optional)
      desktopQuery.addEventListener("change", (e) => {
        if (e.matches) {
          // Screen switched to desktop size
          initScrollTrigger()
        } else {
          // Screen switched to mobile/tablet size
          ScrollTrigger.getAll().forEach((st) => st.kill())
        }
      })

      // Ensure ScrollTrigger recalculates everything
      ScrollTrigger.refresh()

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill())
        desktopQuery.removeEventListener("change", (e) => {
          // Cleanup
        })
      }
    }
  }, [])

  // Carousel responsive settings
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-heading">
                <h1>
                  <strong>CO2</strong> SENSOR
                  <br />
                  NDIR Technology
                </h1>
                <h3>1 PPM Resolution</h3>
                <a href="#contact">
                  Request A Quote{" "}
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/12/btn-icon.jpg" alt="Button Icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Heading Section */}
      <div className="container-fluid">
        <div className="row feature-heaidng">
          <div className="col-md-8">
            <div className="feature-heading">
              <h2>
                Advanced Carbon Dioxide (CO₂) sensor with <span className="amazing">NDIR Technology</span>
              </h2>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>

      {/* Feature Section */}
      <section className="feature-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tab-container">
                <div className="tab-content" id="tab1" style={{ display: activeTab === "tab1" ? "block" : "none" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                    alt="Prana Air PM Sensor"
                  />
                </div>
                <div className="tab-content" id="tab2" style={{ display: activeTab === "tab2" ? "block" : "none" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                    alt="Prana Air PM2.5 Sensor"
                  />
                </div>
                <div className="tab-content" id="tab3" style={{ display: activeTab === "tab3" ? "block" : "none" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                    alt="Prana Air PM Sensor of metallic body"
                  />
                </div>
                <div className="tab-content" id="tab4" style={{ display: activeTab === "tab4" ? "block" : "none" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                    alt="Prana Air PM2.5 Sensor of side view"
                  />
                </div>

                <div className="tabs">
                  <button
                    className={`tab-button ${activeTab === "tab1" ? "active" : ""}`}
                    onClick={() => openTab("tab1")}
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                      alt="Prana Air PM Sensor"
                    />
                  </button>
                  <button
                    className={`tab-button ${activeTab === "tab2" ? "active" : ""}`}
                    onClick={() => openTab("tab2")}
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                      alt="Prana Air PM2.5 Sensor"
                    />
                  </button>
                  <button
                    className={`tab-button ${activeTab === "tab3" ? "active" : ""}`}
                    onClick={() => openTab("tab3")}
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                      alt="Prana Air PM Sensor of metallic body"
                    />
                  </button>
                  <button
                    className={`tab-button ${activeTab === "tab4" ? "active" : ""}`}
                    onClick={() => openTab("tab4")}
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                      alt="Prana Air PM2.5 Sensor of side view"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-para">
                <p>
                  Breathe smarter with Prana Airs state-of-the-art CO₂ sensor, powered by{" "}
                  <strong>Non-Dispersive Infrared (NDIR) technology</strong>. This advanced sensor provides unparalleled
                  accuracy in real-time CO₂ monitoring, ensuring healthier indoor environments for your{" "}
                  <strong>home, office, or industrial space.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="key-feature-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="key-feature-heading">
                <h2>Key features of the CO2 sensor</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="key-box">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Unmatched-Accuracy.png"
                      alt="Unmatched Accuracy"
                    />
                  </li>
                  <li>
                    <h3>Unmatched Accuracy</h3>
                    Our CO2 sensor offers the high accuracy for the CO2 concentration readings with a 1 PPM resolution.
                  </li>
                </ul>
                <ul className="dark">
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Long-term-working-power.png"
                      alt="Long-term working power"
                    />
                  </li>
                  <li>
                    <h3>Long-term working power</h3>
                    The robust NDIR technology in our sensor ensures the long-term performance with less drift over
                    time.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="key-box">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Smaller-in-size.png"
                      alt="Smaller in size"
                    />
                  </li>
                  <li>
                    <h3>Smaller in size</h3>
                    Its size makes our CO2 sensor easy to install in any system or device and make it portable for easy
                    installation.
                  </li>
                </ul>
                <ul className="dark">
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Any-environment-adaptability.png"
                      alt="Any environment adaptability"
                    />
                  </li>
                  <li>
                    <h3>Any environment adaptability</h3>
                    Our CO2 sensor is suitable for various applications like air quality monitors, greenhouses, HVAC
                    systems etc.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="key-box">
                <ul className="dark">
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Auto-and-manual-calibration.png"
                      alt="Auto and manual calibration"
                    />
                  </li>
                  <li>
                    <h3>Auto and manual calibration</h3>
                    Our CO2 sensor offers the automatic and manual calibration function to maintain better accuracy in
                    different condition.
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Signal-output-PWMUART.png"
                      alt="Signal output PWM/UART"
                    />
                  </li>
                  <li>
                    <h3>Signal output PWM/UART</h3>
                    This sensor supports 2 advanced CO2 data output formats for easy data transfer and compatibility
                    with multiple platforms.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="key-box">
                <ul className="dark">
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Use-less-energy.png"
                      alt="Use less energy"
                    />
                  </li>
                  <li>
                    <h3>Use less energy</h3>
                    Our co2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                    accurate.
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Better-customer-support.png"
                      alt="Better customer support"
                    />
                  </li>
                  <li>
                    <h3>Better customer support</h3>
                    Our co2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                    accurate.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="tech-co-sec">
        <div className="container">
          <div className="row br-btm">
            <div className="col-md-8">
              <div className="tech-co-heading">
                <h2>Technology we use in Non Dispersive Infrared (NDIR) CO2 Sensor</h2>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="calculate-co-heading">
                <h3>How does Prana Airs CO2 sensor work and calculate Its concentration?</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tech-co-para">
                <p>
                  Our carbon dioxide (CO2) sensors are based on <strong>NDIR technology</strong>, which stands for Non-
                  Dispersive Infrared radiation. This procedure is commonly used to detect carbon- based gases in the
                  atmosphere, such as CO2.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="ndir-sensor-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/NDIR-CO2-Sensor.webp"
                  alt="NDIR CO2 Sensor"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Necessary Section */}
      <section className="why-necessary-sec">
        <div className="container">
          <div className="row br-btm">
            <div className="col-md-6">
              <div className="why-necessary-heading">
                <h2>Why is it necessary to monitor carbon dioxide gas?</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="why-necessary-para">
                <p>
                  Carbon dioxide is a gas exhaled by human beings as a part of their respiration process. As the
                  population grows and the number of individuals per square foot rises, CO2 concentrations can be
                  substantially higher indoors than they are outside. The usual CO2 level in outdoor air is 400 parts
                  per million or ppm, and it is now growing at a rate of 2 ppm every year. Indoors, due to stuffy rooms
                  or insufficient ventilation,
                </p>
              </div>
              <div className="health-impact-heading">
                <h3>Health Impacts</h3>
              </div>
            </div>
          </div>
          <div className="row mob-flex-scroll">
            <div className="col-md-2">
              <div className="health-impact-box">
                <img src="https://www.pranaair.com/wp-content/uploads/2025/01/dizziness.webp" alt="Dizziness" />
                <h4>Dizziness</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div className="health-impact-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/side-view-man-dealing-with-imposter-syndrome.webp"
                  alt="Restlessness"
                />
                <h4>Restlessness</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div className="health-impact-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/mental-health.webp"
                  alt="Altered brain activity"
                />
                <h4>Altered brain activity</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div className="health-impact-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/man-using-asthma-inhaler-while-sitting-couch-home.webp"
                  alt="Breathing difficulty"
                />
                <h4>Breathing difficulty</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div className="health-impact-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/young-male-psysician-with-patient-measuring-blood-pressure.webp"
                  alt="Blood pressure elevation"
                />
                <h4>Blood pressure elevation</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div className="health-impact-box">
                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/Nausea.webp" alt="Nausea" />
                <h4>Nausea</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="monitor-heading">
                <h3>Analysis of CO2 graph</h3>
              </div>
              {/* GSAP ScrollTrigger Animation Section */}
              <div className="product-card" id="page2" ref={page2Ref}>
                <div className="watch-card-inner-box partner" ref={partnerRef}>
                  <ul>
                    <li>
                      <h4>Create multiple alerts</h4>
                      <p>
                        Carbon dioxide is a gas exhaled by human beings as a part of their respiration process. As the
                        population grows and the number of individuals per square foot rises.
                      </p>
                    </li>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/analysis-data.webp"
                        alt="CO2 graph analysis"
                      />
                    </li>
                  </ul>
                </div>
                <div className="watch-card-inner-box swip" ref={swipRef}>
                  <ul>
                    <li>
                      <h4>Create multiple alerts</h4>
                      <p>
                        Carbon dioxide is a gas exhaled by human beings as a part of their respiration process. As the
                        population grows and the number of individuals per square foot rises.
                      </p>
                    </li>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/analysis-data.webp"
                        alt="CO2 graph analysis"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="monitor-box-heading">
                    <h3>Why is Monitoring CO₂ Crucial?</h3>
                    <p>Excess CO₂ in enclosed spaces can lead to:</p>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
              <div className="row mob-crucial-scroll">
                <div className="col-md-4">
                  <div className="monitor-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/entrepreneur-working-overtime-marketing-project-falling-asleep-desk-while-looking-financial-documents-trying-respect-deadline.webp"
                      alt="Reduced Alertness"
                    />
                    <h4>Reduced Alertness:</h4>
                    <p>High CO₂ levels impair focus and productivity.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="monitor-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/black-woman-wearing-face-mask-holding-her-chest-pain-while-sitting-sofa-living-room.webp"
                      alt="Health Issues"
                    />
                    <h4>Health Issues</h4>
                    <p>Long-term exposure impacts respiratory health and cognitive functions.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="monitor-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/young-woman-working-office.webp"
                      alt="Poor Indoor Comfort"
                    />
                    <h4>Poor Indoor Comfort</h4>
                    <p>Stale air contributes to discomfort and fatigue.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Index Score Section */}
      <section className="index-score-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="index-heading">
                <h2>CO2 Air Quality Index Score and What does it say?</h2>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="custom-tabs-container">
                <div className="custom-tabs">
                  <ul>
                    <li>
                      <button
                        className={`custom-tab green ${activeCustomTab === "custom-tab1" ? "active" : ""}`}
                        onClick={() => handleCustomTabClick("custom-tab1")}
                      >
                        <h3>
                          Good <img src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png" alt="" />
                        </h3>
                        <ul>
                          <li>0</li>
                          <li>600</li>
                        </ul>
                      </button>
                    </li>
                    <li>
                      <button
                        className={`custom-tab yellow ${activeCustomTab === "custom-tab2" ? "active" : ""}`}
                        onClick={() => handleCustomTabClick("custom-tab2")}
                      >
                        <h3>
                          Moderate <img src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png" alt="" />
                        </h3>
                        <ul>
                          <li>601</li>
                          <li>800</li>
                        </ul>
                      </button>
                    </li>
                    <li>
                      <button
                        className={`custom-tab orange ${activeCustomTab === "custom-tab3" ? "active" : ""}`}
                        onClick={() => handleCustomTabClick("custom-tab3")}
                      >
                        <h3>
                          Poor <img src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png" alt="" />
                        </h3>
                        <ul>
                          <li>0</li>
                          <li>600</li>
                        </ul>
                      </button>
                    </li>
                    <li>
                      <button
                        className={`custom-tab pink ${activeCustomTab === "custom-tab4" ? "active" : ""}`}
                        onClick={() => handleCustomTabClick("custom-tab4")}
                      >
                        <h3>
                          Unhealthy{" "}
                          <img src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png" alt="" />
                        </h3>
                        <ul>
                          <li>0</li>
                          <li>600</li>
                        </ul>
                      </button>
                    </li>
                    <li>
                      <button
                        className={`custom-tab puple ${activeCustomTab === "custom-tab5" ? "active" : ""}`}
                        onClick={() => handleCustomTabClick("custom-tab5")}
                      >
                        <h3>
                          Severe <img src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png" alt="" />
                        </h3>
                        <ul>
                          <li>0</li>
                          <li>600</li>
                        </ul>
                      </button>
                    </li>
                    <li>
                      <button
                        className={`custom-tab red ${activeCustomTab === "custom-tab6" ? "active" : ""}`}
                        onClick={() => handleCustomTabClick("custom-tab6")}
                      >
                        <h3>
                          Hazardous{" "}
                          <img src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png" alt="" />
                        </h3>
                        <ul>
                          <li>0</li>
                          <li>600</li>
                        </ul>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="custom-tab-content">
                  <div
                    id="custom-tab1"
                    className={`custom-content ${activeCustomTab === "custom-tab1" ? "active" : ""}`}
                  >
                    <p>
                      Our CO2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                      accurate.
                    </p>
                  </div>
                  <div
                    id="custom-tab2"
                    className={`custom-content ${activeCustomTab === "custom-tab2" ? "active" : ""}`}
                  >
                    <p>
                      Our CO2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                      accurate.
                    </p>
                  </div>
                  <div
                    id="custom-tab3"
                    className={`custom-content ${activeCustomTab === "custom-tab3" ? "active" : ""}`}
                  >
                    <p>
                      Our CO2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                      accurate.
                    </p>
                  </div>
                  <div
                    id="custom-tab4"
                    className={`custom-content ${activeCustomTab === "custom-tab4" ? "active" : ""}`}
                  >
                    <p>
                      Our CO2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                      accurate.
                    </p>
                  </div>
                  <div
                    id="custom-tab5"
                    className={`custom-content ${activeCustomTab === "custom-tab5" ? "active" : ""}`}
                  >
                    <p>
                      Our CO2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                      accurate.
                    </p>
                  </div>
                  <div
                    id="custom-tab6"
                    className={`custom-content ${activeCustomTab === "custom-tab6" ? "active" : ""}`}
                  >
                    <p>
                      Our CO2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                      accurate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensor Calibration Section */}
      <section className="sensor-calibration-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sensor-calibration-heading">
                <h2>Sensor Calibration</h2>
              </div>
            </div>
            <div className="col-md-9">
              <div className="calibration-para">
                <p>
                  Prana Air sensors are calibrated by the zero-point calibration method. This method reveals a range of
                  measurements of the instrument. The zero point for sensor calibration is 400 ppm and the calibration
                  cycle is of 96 hours (4 days) duration.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="calibration-video">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/sensor-calibration-video.webp"
                  alt="Sensor Calibration Video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="app-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="app-heading">
                <h2>Applications of Prana Air CO2 Sensor</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className="app-slider"
                showDots={true}
                arrows={false}
              >
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/01/Air-Filtration-Systems.webp"
                    alt="Air Filtration Systems"
                  />
                  <h3>Air Filtration Systems</h3>
                  <p>
                    Our co2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                    accurate.
                  </p>
                </div>
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/02/HVAC-Industry.webp"
                    alt="HVAC Industry"
                  />
                  <h3>HVAC Industry</h3>
                  <p>
                    Our co2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                    accurate.
                  </p>
                </div>
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/02/Research-Purposes.webp"
                    alt="Research Purposes"
                  />
                  <h3>Research Purposes</h3>
                  <p>
                    Our co2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                    accurate.
                  </p>
                </div>
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/02/smoke-rises-from-factory-chimney-polluting-nature-generated-by-ai.webp"
                    alt="Landfill Gas Monitoring"
                  />
                  <h3>Landfill Gas Monitoring</h3>
                  <p>
                    Our co2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                    accurate.
                  </p>
                </div>
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/02/young-women-using-home-technology.webp"
                    alt="Smart Homes"
                  />
                  <h3>Smart Homes</h3>
                  <p>
                    Our co2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                    accurate.
                  </p>
                </div>
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/02/people-office-working-project.webp"
                    alt="Offices"
                  />
                  <h3>Offices</h3>
                  <p>
                    Our co2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                    accurate.
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="source-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="source-heading">
                <h2>Sources Of Carbon Dioxide Gas</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="manmade-heading">
                <h3>Manmade Sources</h3>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row mob-row">
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/global-warming-pollution.webp"
                  alt="Combustion of fuel"
                />
                <h5>Combustion of fuel by cars, aircraft, or trucks.</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/burning-fire-background-green-trees.webp"
                  alt="Burning of waste"
                />
                <h5>Burning of waste in the open</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/pollution-concept-factory-emision.webp"
                  alt="Industries"
                />
                <h5>Industries that use burning operations</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/man-smoking-cigarette.webp"
                  alt="Smoking"
                />
                <h5>Smoking</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="manmade-heading">
                <h3>Natural Sources</h3>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row mob-row">
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/beautiful-shot-rocks-seashore.webp"
                  alt="Carbonate rocks"
                />
                <h5>Carbonate rocks after contact with water react and produce this gas</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/beautiful-shot-active-volcano-with-flowing-lava-smoke-clear-sky.webp"
                  alt="Volcanic eruption"
                />
                <h5>Volcanic eruption produces a large amount of CO2</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/glaciers-icebergs-ai-generated-image.webp"
                  alt="Glaciers"
                />
                <h5>Occurs in glaciers as it is easily dissolved in water</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/oil-pump-background-industrial-landscape-winter-sky-smoke.webp"
                  alt="Petroleum deposits"
                />
                <h5>Petroleum deposits</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="tech-spec-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tech-spec-heading">
                <h2>Technical Specifications</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="construction-btn">
                <ul>
                  <li>
                    <a href="#">
                      Arduino Code
                      <img src="https://www.pranaair.com/wp-content/uploads/2024/12/tab-btn.png" alt="link icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pranaair.com/wp-content/uploads/2025/01/prana-air-pas-out-1-outdoor-pm-sensor-datasheet.pdf">
                      Datasheet
                      <img src="https://www.pranaair.com/wp-content/uploads/2024/12/tab-btn.png" alt="link icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="tech-spec-tabel">
                <ul>
                  <li>
                    <h3>Product Name:</h3>
                  </li>
                  <li>
                    <h4>PM Sensor</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>Rated voltage:</h3>
                  </li>
                  <li>
                    <h4>5V</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>Communication Port Level:</h3>
                  </li>
                  <li>
                    <h4>3.3 V</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>Dimensions L x W x H :</h3>
                  </li>
                  <li>
                    <h4>4.5 x 4.5 x 2 cm</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>Particle Size Resolution:</h3>
                  </li>
                  <li>
                    <h4>0.3 µm</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>Storage Temperature :</h3>
                  </li>
                  <li>
                    <h4>-20~85 C°</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>Working Temperature:</h3>
                  </li>
                  <li>
                    <h4>-20~70 C°</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>Working humidity:</h3>
                  </li>
                  <li>
                    <h4>0~99C%RH (No Moisture formation)</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>Rated current:</h3>
                  </li>
                  <li>
                    <h4>70mA</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>Mass concentration data resolution:</h3>
                  </li>
                  <li>
                    <h4>1 μg/m3</h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="outdoor-bg-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/Dimensions-co2-sensor.webp"
                  alt="Dimensions CO2 Sensor"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="airqulality_contact_section inner_container" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-heading">
                <h2>Get in Touch</h2>
                <p>
                  Please help us know what requirements you have. Our team will
                  contact you very soon.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm pageName="Carbon Dioxide Co2 Sensor Page" />
      </section>

      {/* You May Also Like Section */}
      <section className="also-like">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="also-like-heading">
                <h2>You may also like</h2>
              </div>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className="allsensor-slide"
                showDots={true}
                arrows={false}
              >
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/CO2-gas-sensor.jpg"
                      alt="prana air co2 sensor"
                    />
                  </a>
                  <h5>
                    Co2 Sensor
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/CO-gas-sensor.jpg"
                      alt="Prana Air CO gas sensor"
                    />
                  </a>
                  <h5>
                    CO Sensor
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Ammonia-gas-sensor.jpg"
                      alt="prana air ammonia sensor NH3"
                    />
                  </a>
                  <h5>
                    Ammonia Sensor
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/H2S-gas-sensor.jpg"
                      alt="Prana Air H2S sensor"
                    />
                  </a>
                  <h5>
                    H2S Sensor
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Ozone-gas-sensor.jpg"
                      alt="Prana Air Ozone sensor O3"
                    />
                  </a>
                  <h5>
                    Ozone Gas
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Chlorine-gas-sensor.jpg"
                      alt="Prana Air Chlorine sensor"
                    />
                  </a>
                  <h5>
                    Chlorine Gas
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/SO2-gas-sensor.jpg"
                      alt="Prana Air SO2 sensor"
                    />
                  </a>
                  <h5>
                    SO2 Sensor
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/No2-gas-sensor.jpg"
                      alt="Prana Air NO2 sensor"
                    />
                  </a>
                  <h5>
                    NO2 Sensor
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

