"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import "./style.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import ContactForm from "@/Components/Contacform/ContactForm";


export default function WashroomPage() {
  const [activeTab, setActiveTab] = useState("monitors")
  const [activeAccordion, setActiveAccordion] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentFreshAirSlide, setCurrentFreshAirSlide] = useState(0)

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

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null)
    } else {
      setActiveAccordion(index)
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : prev - 1))
  }

  const nextFreshAirSlide = () => {
    setCurrentFreshAirSlide((prev) => (prev === 0 ? 0 : prev + 1))
  }

  const prevFreshAirSlide = () => {
    setCurrentFreshAirSlide((prev) => (prev === 0 ? 0 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Toggle school box text on mobile
  useEffect(() => {
    const handleSchoolBoxClick = () => {
      const schoolBoxes = document.querySelectorAll(".school_box_cntr li")
      schoolBoxes.forEach((box) => {
        box.addEventListener("click", function () {
          const textBox = this.querySelector(".schhol_text_box")
          if (textBox) {
            // Hide all other text boxes
            document.querySelectorAll(".schhol_text_box").forEach((tb) => {
              if (tb !== textBox) tb.style.display = "none"
            })

            // Toggle current text box
            textBox.style.display = textBox.style.display === "block" ? "none" : "block"
          }
        })
      })
    }

    handleSchoolBoxClick()

    return () => {
      // Cleanup event listeners if needed
    }
  }, [])

  const industrialSlides = [
    {
      image: "https://www.pranaair.com/wp-content/uploads/2023/01/air-quality-solutions-for-banks.jpg",
      alt: "air quality solutions for banks",
      title: "Solutions for Bank",
      link: "https://www.pranaair.com/solutions-by-application/bank-financial-institutions/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-hotel.jpg",
      alt: "air quality solutions for hotel business",
      title: "Solutions for Hotel",
      link: "https://www.pranaair.com/solutions-by-application/hotel-businesses/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-restaurant.jpg",
      alt: "air quality solutions for restaurants",
      title: "Solutions for Restaurant",
      link: "https://www.pranaair.com/solutions-by-application/restaurants/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-airport.jpg",
      alt: "air quality solutions for airport",
      title: "Solutions for Airport",
      link: "https://www.pranaair.com/solutions-by-application/airports/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2023/04/air-quality-solution-for-fitness-gym.jpg",
      alt: "air quality solutions for fitness and gym",
      title: "Solutions for Fitness & Gym",
      link: "https://www.pranaair.com/solutions-by-application/fitness-center-gym/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2023/05/solution-for-parking-lot.jpg",
      alt: "air quality solutions for car parking lot",
      title: "Solutions for Parking Lot",
      link: "https://www.pranaair.com/solutions-by-application/parking-lot/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2023/05/air-solutions-for-washroom-and-bathroom.jpg",
      alt: "air quality solutions for washroom or bathroom",
      title: "Solutions for Washroom",
      link: "https://www.pranaair.com/solutions-by-application/washroom-and-bathroom/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-institute.jpg",
      alt: "air quality solutions for schools and institutes",
      title: "Solutions for Institutes",
      link: "https://www.pranaair.com/solutions-by-application/institutes/",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      alt: "air quality solutions for real estates",
      title: "Solutions for Real Estates",
      link: "#",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      alt: "air quality solutions for smartphone makers",
      title: "Solutions for Smartphone Makers",
      link: "#",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      alt: "air quality solutions for construction",
      title: "Solutions for Construction",
      link: "#",
    },
  ]

  return (
    <main>
      {/* Banner Section - Updated to match reference design */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Air quality solutions for <span className="highlight">Washroom | Bathroom</span>
          </h1>
          <p>
            A complete solution for air monitoring, data analysis, and fresh air solutions for bathrooms, restrooms, or
            washrooms.
          </p>
          <a href="#get_in_touch" className="cta-button">
            Request A Quote
          </a>
        </div>
        <div className="hero-image">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/04/air-quality-solutions-for-washroom-and-bathroom.jpg"
            alt="Washroom and bathroom air quality solutions"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Introduction Section - Updated to match reference design */}
      <section className="intro-section">
        <div className="container">
          <h2 className="section-title">
            Factors affecting air quality in
            <span className="highlight"> Restrooms</span> and <span className="highlight">Bathrooms</span>
          </h2>
          <p className="section-description">
            Restrooms and bathrooms can be significant contributors to unpleasant odors and harmful VOCs that can cause
            discomfort. This issue is not limited to residential spaces but also affects restrooms in public places such
            as malls, schools, and other institutions. It is crucial to monitor and control these pollutants to ensure a
            comfortable and healthy indoor environment for users.
          </p>

          {/* Factors Icons - Updated to match reference design */}
          <div className="factors-grid">
            <div className="factor-item">
              <div className="factor-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/odor-icon.png"
                  alt="Odor in washroom or bathroom"
                  width={80}
                  height={80}
                />
              </div>
              <h3>Odor</h3>
              <p>Washrooms release bad odors and TVOC</p>
            </div>
            <div className="factor-item">
              <div className="factor-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/co2-icon.png"
                  alt="high co2 level in bathroom or washroom"
                  width={80}
                  height={80}
                />
              </div>
              <h3>CO2</h3>
              <p>More occupancy, high co2 accumulation</p>
            </div>
            <div className="factor-item">
              <div className="factor-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/microbes-icon.png"
                  alt="Microbial Pollutants in washroom and bathroom"
                  width={80}
                  height={80}
                />
              </div>
              <h3>Microbes</h3>
              <p>Microbiological contaminants spread easily in closed spaces</p>
            </div>
            <div className="factor-item">
              <div className="factor-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/temperature-icon.png"
                  alt="temperature in bathroom and washroom"
                  width={80}
                  height={80}
                />
              </div>
              <h3>Temperature</h3>
              <p>Comfort level and mold growth depend upon it</p>
            </div>
            <div className="factor-item">
              <div className="factor-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/humidity-icon.png"
                  alt="humidity in bathroom and washroom"
                  width={80}
                  height={80}
                />
              </div>
              <h3>Humidity</h3>
              <p>Depends on the number of people and the ventilation rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Air Pollutants Section */}
      <section
        className="school_img_box"
        style={{
          backgroundImage:
            "url(https://www.pranaair.com/wp-content/uploads/2023/04/air-pollutants-in-washroom-and-bathroom.jpg)",
        }}
      >
        <div className="school_box_cntr">
          <ul>
            <li className="first_school_box">
              <span className="school_icon_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-icon.png"
                  alt="tvoc odor icon"
                  width={60}
                  height={60}
                />
              </span>
              <div className="schhol_text_box">
                <h3>Odor</h3>
                <p>Poor ventilation can cause odor to trap inside that can be unpleasant and can cause discomfort.</p>
              </div>
            </li>
            <li className="second_school_box">
              <span className="school_icon_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-icon.png"
                  alt="co2 icon"
                  width={60}
                  height={60}
                />
              </span>
              <div className="schhol_text_box">
                <h3>CO2</h3>
                <p>Excess CO2 can cause lack of attentiveness, fatigue, suffocation, etc.</p>
              </div>
            </li>
            <li className="third_school_box">
              <span className="school_icon_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/temperature-pollutant-icon.png"
                  alt="temperature icon"
                  width={96}
                  height={96}
                />
              </span>
              <div className="schhol_text_box">
                <h3>Temperature</h3>
                <p>High temperature is very uncomfortable for everyone</p>
              </div>
            </li>
            <li className="six_school_box">
              <span className="school_icon_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/humidity-pollutant-icon.png"
                  alt="humidity in washroom"
                  width={60}
                  height={60}
                />
              </span>
              <div className="schhol_text_box">
                <h3>Humidity</h3>
                <p>Water and condensation inside bathrooms & restrooms many times increase the humidity.</p>
              </div>
            </li>
            <li className="fivth_school_box">
              <span className="school_icon_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/bacteria-icon.png"
                  alt="microbes in washroom and bathroom"
                  width={93}
                  height={93}
                />
              </span>
              <div className="schhol_text_box">
                <h3>Microbial Pollutants</h3>
                <p>Poor maintenance and ventilation can cause the spreading of viruses and bacteria.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Health Effects Section */}
      <section className="health-effects-section">
        <div className="container">
          <h2 className="section-title">
            Health <span className="highlight">Effects</span>
          </h2>
          <div className="effects-grid">
            <div className="effect-item">
              <div className="effect-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/eyes-and-respiration-irritation.png"
                  alt="eyes and respiration irritation due to air quality"
                  width={120}
                  height={100}
                />
              </div>
              <p>Irritation in the eyes and the respiratory tract</p>
            </div>
            <div className="effect-item">
              <div className="effect-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/building-property-damages.png"
                  alt="building property damages due to air quality"
                  width={120}
                  height={100}
                />
              </div>
              <p>Damages to the property</p>
            </div>
            <div className="effect-item">
              <div className="effect-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/infection-and-stomach-illness.png"
                  alt="infection and stomach illness due to air quality"
                  width={120}
                  height={100}
                />
              </div>
              <p>Infection and stomach illness</p>
            </div>
            <div className="effect-item">
              <div className="effect-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/headache-and-high-bp.png"
                  alt="headache and high bp due to air quality"
                  width={120}
                  height={100}
                />
              </div>
              <p>Headache and high BP</p>
            </div>
            <div className="effect-item">
              <div className="effect-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/trigger-asthma-and-illness.png"
                  alt="trigger asthma and illness due to air quality"
                  width={120}
                  height={100}
                />
              </div>
              <p>Triggers asthma & other related illnesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Do You Know Section - Updated to match reference design */}
      <section className="do-you-know-section">
        <div className="container">
          <div className="quote-box">
            <div className="quote-mark quote-mark-left"></div>
            <div className="quote-content">
              <h2>DO YOU KNOW?</h2>
              <p>ASHRAE recommends relative humidity (RH) values between 30 and 60%.</p>
              <p>Microbial growth may be promoted by increased humidity.</p>
              <p>Minimum exhaust rates for Public and Private washrooms as per ASHRAE:</p>
              <p>Public: 50/70 (Exhaust Rate cfm/unit), Private: 25/50 (Exhaust Rate cfm/unit)</p>
            </div>
            <div className="quote-mark quote-mark-right"></div>
          </div>
        </div>
      </section>

      {/* Bathroom Issues Section */}
      <section className="bathroom-issues-section">
        <div className="container">
          <p className="section-description">
            Poor ventilation, a lack of frequent maintenance and cleaning, and the buildup of mold and bacteria can all
            contribute to poor air quality and other inconveniences such as unpleasant odors, moisture, and germ spread
            in restrooms and washrooms.
          </p>
          <div className="issues-grid">
            <div className="issue-item">
              <div className="issue-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/humidity-in-shower-bathroom.jpg"
                  alt="humidity in shower bathroom"
                  width={325}
                  height={240}
                  className="rounded"
                />
              </div>
              <h4>Excessive humidity in Showers</h4>
            </div>
            <div className="issue-item">
              <div className="issue-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/high-condensation-in-bathroom.jpg"
                  alt="high condensation in bathroom"
                  width={325}
                  height={240}
                  className="rounded"
                />
              </div>
              <h4>High condensation = Mold growth & bad odor</h4>
            </div>
            <div className="issue-item">
              <div className="issue-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/high-microbes-in-washroom.jpg"
                  alt="high microbes in washroom"
                  width={325}
                  height={240}
                  className="rounded"
                />
              </div>
              <h4>Cleaning agents increase TVOCs</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions Section - Updated to match reference design */}
      <section className="solutions-section">
        <div className="container">
          <h2 className="section-title">
            Air quality <span className="highlight">Solutions</span>
          </h2>
          <p className="section-description">
            Prana Air provides air quality solutions intended exclusively for bathrooms and restrooms. Our products are
            developed for these spaces and help promote a healthier atmosphere for everyone, with a focus on efficiency,
            air purification, ease of use, and effectiveness.
          </p>

          {/* Tabs Section - Updated to match reference design */}
          <div className="solutions-tabs">
            <div className="tab-header">
              <button
                className={`tab-button ${activeTab === "monitors" ? "active" : ""}`}
                onClick={() => setActiveTab("monitors")}
              >
                Air Quality Monitors
              </button>
              <button
                className={`tab-button ${activeTab === "fresh-air" ? "active" : ""}`}
                onClick={() => setActiveTab("fresh-air")}
              >
                Fresh Air Machine
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "monitors" && (
                <div className="product-slider">
                  <div className="slider-controls">
                    <button className="slider-arrow prev" onClick={prevSlide}>
                      &lt;
                    </button>
                    <button className="slider-arrow next" onClick={nextSlide}>
                      &gt;
                    </button>
                  </div>

                  <div className="slider-container">
                    {currentSlide === 0 && (
                      <div className="product-slide">
                        <div className="product-info">
                          <h3>SQUAIR Air Monitor</h3>
                          <p>
                            This is a smart indoor air quality monitoring device that can detect the odor, humidity, and
                            other toxic gas parameters.
                          </p>
                          <ul className="feature-list">
                            <li>Detects TVOCs (odor), temperature, and humidity as well</li>
                            <li>Mobile & Smart TV App Enabled</li>
                            <li>Reliable Web Dashboard Accessibility</li>
                          </ul>
                          <div className="product-actions">
                            <a href="#" className="action-button primary">
                              Know More
                            </a>
                            <a href="#" className="action-button secondary">
                              Looking to Rent?
                            </a>
                          </div>
                        </div>
                        <div className="product-image">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2023/04/air-quality-monitoring-in-bathroom.jpg"
                            alt="SQUAIR Air Monitor for washroom and bathroom"
                            width={500}
                            height={400}
                            className="rounded"
                          />
                        </div>
                      </div>
                    )}

                    {currentSlide === 1 && (
                      <div className="product-slide">
                        <div className="product-info">
                          <h3>Sensible+ Monitor</h3>
                          <p>
                            This smart air quality monitor features a 7-inch touchscreen display that provides detailed
                            data insights for washroom or bathroom
                          </p>
                          <ul className="feature-list">
                            <li>7 Inch LED Touch Screen Display</li>
                            <li>5000 mAh Battery InBuilt</li>
                            <li>WiFi Connectivity With Mobile App</li>
                          </ul>
                          <div className="product-actions">
                            <a href="#" className="action-button primary">
                              Know More
                            </a>
                          </div>
                        </div>
                        <div className="product-image">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2023/04/prana-air-quality-monitoring-in-washroom.jpg"
                            alt="Sensible+ Monitor for washroom and bathroom"
                            width={500}
                            height={400}
                            className="rounded"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="slider-dots">
                    <button
                      className={`dot ${currentSlide === 0 ? "active" : ""}`}
                      onClick={() => setCurrentSlide(0)}
                    ></button>
                    <button
                      className={`dot ${currentSlide === 1 ? "active" : ""}`}
                      onClick={() => setCurrentSlide(1)}
                    ></button>
                  </div>
                </div>
              )}

              {activeTab === "fresh-air" && (
                <div className="product-slider">
                  <div className="slider-container">
                    <div className="product-slide">
                      <div className="product-image">
                        <Image
                          src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-fresh-air-machine-for-iaq-solution.jpg"
                          alt="Fresh Air Machine for washrooms"
                          width={500}
                          height={400}
                          className="rounded"
                        />
                      </div>
                      <div className="product-info">
                        <h3>Fresh Air Machine As IAQ Solution</h3>
                        <p>
                          Prana Air Fresh Air Machine is a one-stop solution for indoor air pollution, functioning as an
                          air purifier with a 99.5% efficiency rate and multi-layer HEPA filters.
                        </p>
                        <ul className="feature-list">
                          <li>Comes with multi-layers HEPA Filters</li>
                          <li>Compact Design makes it easy to place</li>
                          <li>Promising you up to 99.5% efficiency</li>
                        </ul>
                        <div className="product-actions">
                          <a href="#" className="action-button primary">
                            Know More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Data Services Section */}
      <section className="data-services-section">
        <div className="container">
          <h2 className="section-title">
            Data Freemium <span className="highlight">Services</span>
          </h2>
          <p className="section-description">
            Our customized dashboard can display or analyze data on the LCD panels or the apps. Use <strong>AQI</strong>{" "}
            mobile app to find out the air quality inside washroom or bathroom.
          </p>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/aqi-tv-app-data-for-washroom.jpg"
                  alt="aqi tv app data for washroom"
                  width={400}
                  height={300}
                  className="rounded"
                />
              </div>
              <h4>TV Dashboard App</h4>
            </div>
            <div className="service-item">
              <div className="service-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/aqi-web-or-table-app-for-bathroom.jpg"
                  alt="aqi web or table app for bathroom"
                  width={400}
                  height={300}
                  className="rounded"
                />
              </div>
              <h4>Customized Web/Tablet App</h4>
            </div>
            <div className="service-item">
              <div className="service-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/aqi-app-to-check-washroom-data.jpg"
                  alt="aqi app to check washroom data"
                  width={400}
                  height={300}
                  className="rounded"
                />
              </div>
              <h4>AQI Mobile App</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Fresh Air Machine Effects Section - Updated to match reference design */}
      <section className="effects-comparison-section">
        <div className="container">
          <h2 className="section-title">
            The Effects of Air Pollution - <span className="highlight">Fresh Air Machine</span>
          </h2>
          <p className="section-description">
            Poor air quality in the washroom or bathroom is caused by high humidity, lack of ventilation, and toxic
            contaminants, leading to unpleasant smells, harmful pollutants, and health concerns. Fresh air solutions can
            improve ventilation rates and minimize pollutants, providing a clean and healthy environment for restroom
            users.
          </p>

          <div className="comparison-container">
            <div className="comparison-column without">
              <h3>Without Fresh Air Solutions</h3>
              <ul className="comparison-list">
                <li>Very bad air quality</li>
                <li>Uncomfortable experience</li>
                <li>Increased health concerns</li>
                <li>Unpleasant smells</li>
              </ul>
              <div className="comparison-chart">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/without-fresh-air-solution-in-washroom.jpg"
                  alt="without fresh air solution in washroom"
                  width={350}
                  height={186}
                  className="rounded"
                />
              </div>
            </div>

            <div className="comparison-column with">
              <h3>With Fresh Air Solutions</h3>
              <ul className="comparison-list">
                <li>Improve ventilation & air quality</li>
                <li>Comfortable experience</li>
                <li>Improved health and well-being</li>
                <li>Reduced airborne pollutants</li>
              </ul>
              <div className="comparison-chart">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/with-fresh-air-solution-in-washroom.jpg"
                  alt="with fresh air solution in washroom"
                  width={350}
                  height={185}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Updated to match reference design */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p className="section-description">
            About Air Quality Solution for washrooms / bathroom Have questions? Were here to help.
          </p>

          <div className="faq-accordion">
            {[
              {
                title: "1. Why is air quality important in restrooms?",
                content:
                  "- Poor air quality in restrooms can lead to unpleasant odors, the growth of mold and mildew, and the spread of bacteria and viruses. It can also cause health problems for people who have allergies or asthma.",
              },
              {
                title: "2. What are some common sources of poor air quality in restrooms?",
                content:
                  "- Poor ventilation, lack of proper cleaning, moisture buildup, and the use of harsh cleaning chemicals can all contribute to poor air quality in restrooms.",
              },
              {
                title: "3. What are some solutions for improving air quality in restrooms?",
                content:
                  "- Some solutions include improving ventilation through the use of fans or opening windows, using natural cleaning products, maintaining a regular cleaning schedule, and addressing any moisture issues.",
              },
              {
                title: "4. How can I tell if the air quality in my restroom is poor?",
                content:
                  "- Signs of poor air quality in restrooms can include unpleasant odors, mold or mildew growth, and visible moisture or condensation on surfaces.",
              },
              {
                title: "5. Are there any regulations or standards for air quality in restrooms?",
                content:
                  "- Yes, there are regulations and standards set by organizations such as the Occupational Safety and Health Administration (OSHA) and the ASHRAE that set guidelines for air quality in commercial and public spaces, including restrooms.",
              },
              {
                title: "6. Can air purifiers help improve air quality in restrooms?",
                content:
                  "- Yes, air purifiers can help to remove pollutants and odors from the air in restrooms. However, it's important to choose an air purifier that is designed for use in commercial spaces and to properly maintain and replace the filters as needed.",
              },
              {
                title: "7. Why is it necessary to have air quality monitoring solutions?",
                content:
                  "- To know the nature of pollutants and how much are they present in a space so that necessary actions can be taken.",
              },
              {
                title: "8. How often should I clean and maintain the ventilation system in my restroom?",
                content:
                  "- It's recommended to clean and maintain the ventilation system in restrooms at least twice a year, or more frequently if there are signs of poor air quality or moisture buildup.",
              },
            ].map((faq, index) => (
              <div key={index} className={`faq-item ${activeAccordion === index ? "active" : ""}`}>
                <div className="faq-question" onClick={() => toggleAccordion(index)}>
                  {faq.title}
                  <span className="faq-icon">{activeAccordion === index ? "-" : "+"}</span>
                </div>
                {activeAccordion === index && (
                  <div className="faq-answer">
                    <p>{faq.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientele Section */}
      <section className="clientele-section">
        <div className="container">
          <h2 className="section-title">
            Our <span className="highlight">Clientele</span>
          </h2>
          <p className="section-description">We are honored to work with so many well-known companies.</p>
          <div className="client-grid">
            <div className="client-logo">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png"
                alt="Client Logo"
                width={200}
                height={100}
              />
            </div>
            <div className="client-logo">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png"
                alt="Client Logo"
                width={200}
                height={100}
              />
            </div>
            <div className="client-logo">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png"
                alt="Client Logo"
                width={200}
                height={100}
              />
            </div>
            <div className="client-logo">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png"
                alt="Client Logo"
                width={200}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated to match reference design */}
      <section id="get_in_touch" className="contact-section-box">
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
        <ContactForm pageName="Cair Monitor Page" />
      </section>

      {/* Industrial Applications Section - Updated to fix missing carousel slides */}
      <section className="industrial-section">
        <div className="container">
          <h2 className="section-title">
            Industrial <span className="highlight">Applications</span>
          </h2>
          <p className="section-description">
            Prana Air provides a wide range of Smart, inexpensive, and highly accurate air quality solutions for a
            variety of sectors, regardless of their size.
          </p>

          <div className="industrial-carousel-container">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              itemClass="carousel-item-padding"
            >
              {industrialSlides.map((slide, index) => (
                <div key={index} className="industry-card">
                  <a href={slide.link} className="industry-link">
                    <div className="industry-image">
                      <Image
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.alt}
                        width={350}
                        height={250}
                        className="rounded"
                      />
                    </div>
                    <h3>{slide.title}</h3>
                  </a>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  )
}

