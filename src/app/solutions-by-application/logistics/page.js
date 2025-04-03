"use client"

import { useState } from "react"
import "./style.css"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"

export default function LogisticsPage() {
  const [activeTab, setActiveTab] = useState("air-quality-monitors")
  const [activeFaq, setActiveFaq] = useState("faq1")

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  const toggleFaq = (faqId) => {
    setActiveFaq(activeFaq === faqId ? "" : faqId)
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1366 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1366, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  }

  const applicationsResponsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  const appCarouselResponsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="logistics-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Air quality solutions for <span className="highlight">Logistics</span>
          </h1>
          <p className="hero-description">
            Innovative solutions for logistics firms to reduce their environmental impact, protect public wellness, and
            contribute to a cleaner, greener future.
          </p>
          <p className="hero-subtitle">Warehouse | Ports | Transportation</p>
          <a className="primary-button" href="#get_in_touch">
            Contact Us
          </a>
        </div>
      </section>

      {/* Factors Section */}
      <section className="factors-section">
        <div className="section-header">
          <h2>
            Factors affecting air quality in <span className="highlight">Logistics</span>
          </h2>
          <p className="section-description">
            Logistics sectors involve various activities that contribute to air pollution through various pollutant
            emissions, such as:
          </p>
        </div>

        <div className="factors-grid">
          <div className="factor-card">
            <div className="factor-icon">
              <img src="https://www.pranaair.com/wp-content/uploads/2023/07/pm-icon.png" alt="Particulate Matter" />
            </div>
            <h3>
              Particulate Matter
              <br />
              (PM2.5 and PM10)
            </h3>
            <p>Diesel trucks and locomotives, handling equipment and loading operations emit PM.</p>
          </div>

          <div className="factor-card">
            <div className="factor-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/07/vocs-icon.png"
                alt="Volatile Organic Compounds"
              />
            </div>
            <h3>
              Volatile Organic
              <br />
              Compounds (VOCs)
            </h3>
            <p>Vehicles, industrial processes, heating systems, and packaging activities emit VOCs.</p>
          </div>

          <div className="factor-card">
            <div className="factor-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2024/08/Carbon-Monoxide-CO.png"
                alt="Carbon Monoxide"
              />
            </div>
            <h3>
              Carbon
              <br />
              Monoxide (CO)
            </h3>
            <p>Fuel combustion, handling equipment, loading and unloading operations releases CO.</p>
          </div>

          <div className="factor-card">
            <div className="factor-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2024/08/Nitrogen-Oxides-NOx.png"
                alt="Nitrogen Oxides"
              />
            </div>
            <h3>
              Nitrogen
              <br />
              Oxides (NOx)
            </h3>
            <p>Fossil fuel combustion in trucks and shipping vessels, heating systems, etc. suspend NOx.</p>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="transportation-section">
        <div className="split-container">
          <div className="split-half transportation">
            <h3>Transportation</h3>
            <div className="icon-grid">
              <div className="icon-item">
                <div className="round-icon">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/08/truck.png" alt="Trucks" />
                  <span>Trucks</span>
                </div>
              </div>
              <div className="icon-item">
                <div className="round-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/marine-vessels.png"
                    alt="Marine Vessels"
                  />
                  <span>Marine Vessels</span>
                </div>
              </div>
              <div className="icon-item">
                <div className="round-icon">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/08/locomotive.png" alt="Locomotives" />
                  <span>Locomotives</span>
                </div>
              </div>
              <div className="icon-item">
                <div className="round-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/handling-equipment.png"
                    alt="Handling Equipment"
                  />
                  <span>Handling Equipment</span>
                </div>
              </div>
            </div>
          </div>

          <div className="split-half stationary">
            <h3>Stationary</h3>
            <div className="icon-grid">
              <div className="icon-item">
                <div className="round-icon">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/08/refineries.png" alt="Refineries" />
                  <span>Refineries</span>
                </div>
              </div>
              <div className="icon-item">
                <div className="round-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/oil-gas-storage.png"
                    alt="Oil & Gas Storage"
                  />
                  <span>Oil & Gas Storage</span>
                </div>
              </div>
              <div className="icon-item">
                <div className="round-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/storage-piles-of-coal.png"
                    alt="Storage of Coal"
                  />
                  <span>Storage Piles of Coal</span>
                </div>
              </div>
              <div className="icon-item">
                <div className="round-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/power-genration.png"
                    alt="Power Generation"
                  />
                  <span>Power Generation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-container">
          <h2>DO YOU KNOW?</h2>
          <p>
            According to the International Agency for Research on Cancer (IARC), diesel engine exhaust is carcinogenic
            to humans as its exposure increases the risk of lung cancer.
          </p>
        </div>
      </section>

      {/* Areas of Concern Section */}
      <section className="concern-section">
        <div className="section-header">
          <h2>
            Areas of <span className="highlight">Concern</span>
          </h2>
          <p className="section-description">
            Logistics sectors are bustling with activity and face significant challenges when it comes to maintaining
            good air quality.
          </p>
        </div>

        <div className="concern-grid">
          <div className="concern-card">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2024/08/Warehouse-Facilities.jpg"
              alt="Warehouse Facilities"
            />
            <h3>Warehouse Facilities</h3>
            <p>Highly trap pollutants due to enclosed spaces and heavy operations.</p>
          </div>

          <div className="concern-card">
            <img src="https://www.pranaair.com/wp-content/uploads/2024/08/Loading-Docks.jpg" alt="Loading Docks" />
            <h3>Loading Docks</h3>
            <p>Loading and unloading operations and vehicle emissions release pollutants emissions.</p>
          </div>

          <div className="concern-card">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2024/08/Transportation-Routes.jpg"
              alt="Transportation Routes"
            />
            <h3>Transportation Routes</h3>
            <p>Diesel vehicle emissions in major routes affect the nearby and commercial areas.</p>
          </div>

          <div className="concern-card">
            <img src="https://www.pranaair.com/wp-content/uploads/2024/08/Logistics-Hubs.jpg" alt="Logistics Hubs" />
            <h3>Logistics Hubs</h3>
            <p>Continuous operations in high-activity centres result in localized pollution.</p>
          </div>
        </div>
      </section>

      {/* Who is at Risk Section */}
      <section className="risk-section">
        <div className="section-header">
          <h2>
            Who is at <span className="highlight">Risk?</span>
          </h2>
          <p className="section-description">
            Air quality issues in the logistics sector pose various health risk for everyone involved.
          </p>
        </div>

        <div className="risk-grid">
          <div className="risk-card">
            <div className="risk-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2024/08/Logistics-Workers.png"
                alt="Logistics Workers"
              />
            </div>
            <h3>Logistics Workers</h3>
            <p>Prolonged pollutants exposure lead to respiratory and cardiovascular issues.</p>
          </div>

          <div className="risk-card">
            <div className="risk-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2024/08/Nearby-Resident.png"
                alt="Nearby Residents"
              />
            </div>
            <h3>Nearby Residents</h3>
            <p>People living near logistics hubs have higher health risk due to pollutants.</p>
          </div>

          <div className="risk-card">
            <div className="risk-icon">
              <img src="https://www.pranaair.com/wp-content/uploads/2024/08/Drivers.png" alt="Drivers" />
            </div>
            <h3>Drivers</h3>
            <p>Drives highly exposed harmful pollutants due to Extended periods in vehicles.</p>
          </div>

          <div className="risk-card">
            <div className="risk-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2024/08/Delivery-Personnel.png"
                alt="Delivery Personnel"
              />
            </div>
            <h3>Delivery Personnel</h3>
            <p>Long-term harmful pollutants exposure while delivering or pickups.</p>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions Section */}
      <section className="solutions-section">
        <div className="section-header">
          <h2>
            Air quality <span className="highlight">Solutions</span>
          </h2>
          <p className="section-description">
            Maintaining air quality is crucial in the logistics sector for the well-being of everyone. It requires a
            multi-faceted approach with advanced air quality monitoring, pollution control strategies etc.
          </p>
        </div>

        <div className="tabs-container">
          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === "air-quality-monitors" ? "active" : ""}`}
              onClick={() => handleTabClick("air-quality-monitors")}
            >
              Air quality Monitors
            </button>
            <button
              className={`tab-btn ${activeTab === "fresh-air-machine" ? "active" : ""}`}
              onClick={() => handleTabClick("fresh-air-machine")}
            >
              Fresh air machine
            </button>
            <button
              className={`tab-btn ${activeTab === "data-display" ? "active" : ""}`}
              onClick={() => handleTabClick("data-display")}
            >
              Data Display
            </button>
          </div>

          <div className="tab-content">
            <div
              className={`tab-pane ${activeTab === "air-quality-monitors" ? "active" : ""}`}
              id="air-quality-monitors"
            >
              <div className="solution-card">
                <div className="solution-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/Prana-Air-SensibleAir-quality-monitor.jpg"
                    alt="Prana Air Sensible indoor air quality monitor"
                  />
                </div>
                <div className="solution-content">
                  <h3>Prana Air Sensible+Air quality monitor</h3>
                  <p>Installing indoor air quality monitor can help in maintaining a healthy working environment.</p>
                  <ul className="feature-list">
                    <li>Real-time air quality monitoring</li>
                    <li>5000 mAh Inbuilt Battery for Long Screen-Time</li>
                    <li>Monitors Multiple Indoor Pollutants</li>
                  </ul>
                  <a className="secondary-button" href="#">
                    Know More
                  </a>
                </div>
              </div>
            </div>

            <div className={`tab-pane ${activeTab === "fresh-air-machine" ? "active" : ""}`} id="fresh-air-machine">
              <div className="solution-card">
                <div className="solution-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/Prana-Air-Fresh-Air-Machines.jpg"
                    alt="Fresh air machine for logistics business"
                  />
                </div>
                <div className="solution-content">
                  <h3>Prana Air Fresh Air Machine</h3>
                  <p>
                    Integrating an Indoor Air Purifier can help in tackling air pollution effectively in the logistics
                    sector.
                  </p>
                  <ul className="feature-list">
                    <li>Filter out up to 99.5% indoor pollutants</li>
                    <li>Coverage area is 1200 square feet</li>
                    <li>AI-Enabled for automates the airflow</li>
                  </ul>
                  <a className="secondary-button" href="#">
                    Know More
                  </a>
                </div>
              </div>
            </div>

            <div className={`tab-pane ${activeTab === "data-display" ? "active" : ""}`} id="data-display">
              <div className="solution-card">
                <div className="solution-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/Prana-Air-Customized-screen.jpg"
                    alt="Prana air customized data display"
                  />
                </div>
                <div className="solution-content">
                  <h3>Prana Air Customized Data Display</h3>
                  <p>
                    Implementing a customized digital display in the logistics sector allows continuous, 24/7 data
                    visualization.
                  </p>
                  <ul className="feature-list">
                    <li>Real-Time Air Quality Data Display</li>
                    <li>Customized display</li>
                    <li>Access outdoor and indoor Data</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Effects of Air Pollution Section */}
      <section className="effects-section">
        <div className="section-header">
          <h2>
            The Effects of Air Pollution - <span className="highlight">Logistics</span>
          </h2>
          <p className="section-description">
            Poor Air Quality in the logistics sector affects workers, drivers, Residents etc. health causing various
            problems.
          </p>
        </div>

        <div className="effects-container">
          <div className="effects-column negative">
            <h3>Without Air Quality Solutions</h3>
            <ul className="effects-list negative">
              <li>Impacts workers and drivers productivity.</li>
              <li>More risks of respiratory conditions.</li>
              <li>Affecting nearby communities air.</li>
            </ul>
          </div>

          <div className="effects-column positive">
            <h3>With Air Quality Solutions</h3>
            <ul className="effects-list positive">
              <li>Enhanced productivity for workers and drivers</li>
              <li>Reduced risk of respiratory conditions</li>
              <li>Clean and fresh air for everyone</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AQI App Slider Section */}
      <section className="aqi-app-section">
        <Carousel
          responsive={appCarouselResponsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={7000}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          containerClass="app-carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="app-dot-list"
          itemClass="app-carousel-item"
          showDots={true}
        >
          <div className="app-slide">
            <div className="app-slide-content">
              <div className="app-slide-text">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/mobile-AQI-APP-icon.png"
                  alt="AQI Mobile App"
                  className="app-slide-icon"
                />
                <h3>AQI Mobile App</h3>
                <p>
                  Access a real-time air quality monitor data and API for accurate global data to stay informed. Check
                  the world air pollution map and weather map, and easily compare air quality parameters across multiple
                  locations with AQI App.
                </p>
              </div>
              <div className="app-slide-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/AQI-Mobile-Apps.jpg"
                  alt="AQI Mobile App interface"
                />
              </div>
            </div>
          </div>

          <div className="app-slide">
            <div className="app-slide-content">
              <div className="app-slide-text">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/tv-aqi-app-icon.png"
                  alt="AQI TV App"
                  className="app-slide-icon"
                />
                <h3>AQI TV App</h3>
                <p>
                  View real-time and historical air quality data on a large TV screen. Effortlessly enjoy 24/7 remote
                  monitoring to stay informed about AQI levels with data accessibility to everyone.
                </p>
              </div>
              <div className="app-slide-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/AQI-TV-Apps.jpg"
                  alt="AQI TV App interface"
                />
              </div>
            </div>
          </div>

          <div className="app-slide">
            <div className="app-slide-content">
              <div className="app-slide-text">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/AQI-Dashboard-icon.jpg"
                  alt="AQI Web-Dashboard"
                  className="app-slide-icon"
                />
                <h3>AQI Web-Dashboard</h3>
                <p>
                  Explore global pollution trends through detailed analyses of the worlds most polluted cities and
                  countries. Receive health advice based on real-time air quality indexes, and easily compare air
                  quality parameters across multiple locations with Web Dashboard.
                </p>
              </div>
              <div className="app-slide-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/AQI-Web-Dashboards.jpg"
                  alt="AQI Web Dashboard interface"
                />
              </div>
            </div>
          </div>
        </Carousel>
      </section>

      {/* Clientele Section */}
      <section className="clientele-section">
        <div className="section-header">
          <h2>
            Our <span className="highlight">Clientele</span>
          </h2>
          <p className="section-description">
            Our partnerships with these renowned organizations reflect our commitment to excellence and innovation.
          </p>
        </div>

        <div className="client-grid">
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png" alt="Morgan Stanley" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png" alt="OLA" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png" alt="Microsoft" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png" alt="IIT BHU" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/RENAULT-NISSAN.png" alt="Renault Nissan" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/TATA.png" alt="TATA" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/CSIR.png" alt="CSIR" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MAHINDRA.png" alt="Mahindra" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/INTERGLOBE.png" alt="Interglobe" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/GMDA-1.png" alt="GMDA" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2024/08/leighton-logo.png" alt="Leighton" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/HAVELLS.png" alt="Havells" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="get_in_touch">
        <div className="section-header">
          <h2>
            Get in <span className="highlight">Touch</span>
          </h2>
          <p className="section-description">
            Please help us know what requirements you have. Our team will contact you very soon.
          </p>
        </div>

        <div className="modern-contact-container">
          <div className="contact-card">
            <div className="contact-sidebar">
              <h3>Contact Info</h3>
              <p>Looking for air quality solutions for Logistics Business?</p>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/08/menu-call-icon.png" alt="Phone" />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Phone Number:</span>
                  <span>(+91) 73918-73918</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/08/menu-mail-icon.png" alt="Email" />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Email Address:</span>
                  <span>info@purelogic.in</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/menu-loaction-icon.png"
                    alt="Location"
                  />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Office Location:</span>
                  <span>706, 7th Floor, Sec 10, Rohini, Delhi 110085, India</span>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="form-row">
                <div className="form-field full-width">
                  <input type="text" placeholder="Your Full Name" />
                </div>
              </div>

              <div className="form-row two-columns">
                <div className="form-field">
                  <input type="tel" placeholder="Your Phone No" />
                </div>
                <div className="form-field">
                  <input type="email" placeholder="Your Email" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field full-width">
                  <input type="text" placeholder="Your Organisation" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field full-width">
                  <textarea placeholder="Message" rows="4"></textarea>
                </div>
              </div>

              <div className="form-row">
                <button className="send-message-btn">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-header">
          <h2>
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p className="section-description">Have questions? Were here to help.</p>
        </div>

        <div className="faq-container">
          <div className={`faq-item ${activeFaq === "faq1" ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFaq("faq1")}>
              <h3>1. How do logistics sectors affect the nearby residents air quality?</h3>
              <span className="faq-icon">{activeFaq === "faq1" ? "−" : "+"}</span>
            </div>
            <div className={`faq-answer ${activeFaq === "faq1" ? "show" : ""}`}>
              <p>
                The logistics sector involves several activities that involve diesel-powered transportation and various
                operations that can impact nearby communities.
              </p>
            </div>
          </div>

          <div className={`faq-item ${activeFaq === "faq2" ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFaq("faq2")}>
              <h3>2. What are the major pollutants in the logistic sectors?</h3>
              <span className="faq-icon">{activeFaq === "faq2" ? "−" : "+"}</span>
            </div>
            <div className={`faq-answer ${activeFaq === "faq2" ? "show" : ""}`}>
              <p>
                Logistics sectors include warehouses, transportation, and stationary that emit pollutants like PM2.5,
                NOx, CO, VOCs etc.
              </p>
            </div>
          </div>

          <div className={`faq-item ${activeFaq === "faq3" ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFaq("faq3")}>
              <h3>3. Why air quality is a major issue in the warehouse?</h3>
              <span className="faq-icon">{activeFaq === "faq3" ? "−" : "+"}</span>
            </div>
            <div className={`faq-answer ${activeFaq === "faq3" ? "show" : ""}`}>
              <p>
                Warehouses highly trap pollutants due to Congested operational areas and impact the indoor and outdoor
                air quality.
              </p>
            </div>
          </div>

          <div className={`faq-item ${activeFaq === "faq4" ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFaq("faq4")}>
              <h3>4. What are the solutions for logistics sectors to improve air quality?</h3>
              <span className="faq-icon">{activeFaq === "faq4" ? "−" : "+"}</span>
            </div>
            <div className={`faq-answer ${activeFaq === "faq4" ? "show" : ""}`}>
              <p>
                Prana Air offers practical solutions to improve air quality in the logistics sectors as air quality
                monitoring systems, advanced air purifiers etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Applications Section */}
      <section className="applications-section">
        <div className="section-header">
          <h2>
            Industrial <span className="highlight">Applications</span>
          </h2>
          <p className="section-description">
            Prana Air offers a diverse selection of smart, affordable, and remarkably precise air quality solutions,
            catering to various sectors, irrespective of their scale.
          </p>
        </div>

        <div className="modern-applications-container">
          <Carousel
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 1,
              },
              tablet: {
                breakpoint: { max: 1024, min: 768 },
                items: 2,
                slidesToSlide: 1,
              },
              mobile: {
                breakpoint: { max: 768, min: 0 },
                items: 1,
                slidesToSlide: 1,
              },
            }}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="applications-carousel"
            itemClass="application-item-wrapper"
            removeArrowOnDeviceType={["mobile"]}
            dotListClass="applications-dots"
            showDots={false}
          >
            <div className="application-item">
              <div className="application-image">
                <a href="https://www.pranaair.com/solutions-by-application/hotel-businesses/">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-hotel.jpg"
                    alt="Air quality Solutions for hotel business"
                  />
                </a>
              </div>
              <a
                href="https://www.pranaair.com/solutions-by-application/hotel-businesses/"
                className="application-title"
              >
                Air quality Solutions for Hotel
              </a>
            </div>

            <div className="application-item">
              <div className="application-image">
                <a href="https://www.pranaair.com/solutions-by-application/restaurants/">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-restaurant.jpg"
                    alt="Air quality Solutions for restaurants"
                  />
                </a>
              </div>
              <a href="https://www.pranaair.com/solutions-by-application/restaurants/" className="application-title">
                Air quality Solutions for Restaurant
              </a>
            </div>

            <div className="application-item">
              <div className="application-image">
                <a href="https://www.pranaair.com/solutions-by-application/airports/">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-airport.jpg"
                    alt="Air quality Solutions for airport"
                  />
                </a>
              </div>
              <a href="https://www.pranaair.com/solutions-by-application/airports/" className="application-title">
                Air quality Solutions for Airport
              </a>
            </div>

            <div className="application-item">
              <div className="application-image">
                <a href="https://www.pranaair.com/solutions-by-application/bank-financial-institutions/">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/01/air-quality-solutions-for-banks.jpg"
                    alt="Air quality Solutions for banks"
                  />
                </a>
              </div>
              <a
                href="https://www.pranaair.com/solutions-by-application/bank-financial-institutions/"
                className="application-title"
              >
                Air quality Solutions for Bank
              </a>
            </div>

            <div className="application-item">
              <div className="application-image">
                <a href="https://www.pranaair.com/solutions-by-application/fitness-center-gym/">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/04/air-quality-solution-for-fitness-gym.jpg"
                    alt="Air quality Solutions for fitness and gym"
                  />
                </a>
              </div>
              <a
                href="https://www.pranaair.com/solutions-by-application/fitness-center-gym/"
                className="application-title"
              >
                Air quality Solutions for Fitness & Gym
              </a>
            </div>

            <div className="application-item">
              <div className="application-image">
                <a href="https://www.pranaair.com/solutions-by-application/railway/">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-railway-page.jpg"
                    alt="Air quality Solutions for railway"
                  />
                </a>
              </div>
              <a href="https://www.pranaair.com/solutions-by-application/railway/" className="application-title">
                Air quality Solutions for Railways
              </a>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  )
}

