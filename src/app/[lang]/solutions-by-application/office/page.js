"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import "./style.css"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"
import ContactForm from "@/Components/Contacform/ContactForm";

export default function OfficeSolutions() {
  const [activeTab, setActiveTab] = useState("monitors")
  const [activeFaq, setActiveFaq] = useState(1)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    // Initialize any client-side scripts here if needed
    const handleScroll = () => {
      // Scroll behavior if needed
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main>
      {/* Banner Section */}
      <section className="school_banner_box">
        <div className="container">
          <div className="row">
            <div className="col-md-6 banner_quality_box">
              <div className="pocket_title_box school_aqi_box">
                <h1>
                  Air quality solutions for<span className="bold_text"> Offices </span>
                </h1>
                <p>
                  A complete solution for air quality monitoring, data analysis, and fresh air solutions in workplaces
                  prioritizing employees health and productivity.
                </p>
                <p className="banner-high-co2">Higher Occupancy, Higher CO2</p>
                <a className="banner-btn" href="#get_in_touch">
                  Request A Quote
                </a>
              </div>
            </div>
            <div className="col-md-6 banner_quality_img_box"></div>
          </div>
        </div>
      </section>

      {/* Factors Section */}
      <section>
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              <span style={{ fontSize: "24pt" }}>
                Factors affecting the health of <span style={{ color: "#78ae60" }}>Office Employees </span>
              </span>
            </h2>
            <p>
              Exposure to air pollution in offices can lead to a range of health problems, including respiratory
              infections, headaches, fatigue, and difficulty concentrating.
            </p>
          </div>
        </div>
      </section>

      {/* Factors Grid */}
      <section className="pollution_cntr-inner-factors">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/pm-icon.png"
                  alt="PM icon"
                  width={102}
                  height={99}
                />
                <div className="feature_wrap_box">
                  <h2>PM</h2>
                  <p>Fine particulate matter in an office environment primarily originates from outdoor air</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/co2-icon.png"
                  alt="CO2 level in offices"
                  width={102}
                  height={99}
                />
                <div className="feature_wrap_box">
                  <h2>CO2</h2>
                  <p>Office CO2 originates from occupants respiration and is influenced by ventilation.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/vocs-icon.png"
                  alt="VOCs icon"
                  width={102}
                  height={99}
                />
                <div className="feature_wrap_box">
                  <h2>VOCs</h2>
                  <p>Arises from office materials, equipment, cleaning agents, and personal care products.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/hcho-icon.png"
                  alt="HCHO icon"
                  width={102}
                  height={99}
                />
                <div className="feature_wrap_box">
                  <h2>HCHO</h2>
                  <p>Found in office environment through off-gassing of furniture and carpets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pollution_cntr-inner-factors">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/ozone-icon.png"
                  alt="Ozone icon"
                  width={102}
                  height={99}
                />
                <div className="feature_wrap_box">
                  <h2>Ozone</h2>
                  <p>Typically a byproduct of office equipment like printers and copiers</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/humidity-icon.png"
                  alt="Humidity level in offices"
                  width={102}
                  height={99}
                />
                <div className="feature_wrap_box">
                  <h2>Humidity</h2>
                  <p>Indoor levels vary based on building design, occupancy, and weather.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/temperature-icon.png"
                  alt="Temperature level in offices"
                  width={102}
                  height={99}
                />
                <div className="feature_wrap_box">
                  <h2>Temperature</h2>
                  <p>Regulated by HVAC systems, weather, and heat from equipment and occupants</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/noise-icon.png"
                  alt="Noise icon"
                  width={102}
                  height={99}
                />
                <div className="feature_wrap_box">
                  <h2>Noise</h2>
                  <p>Comes from office machinery, HVAC systems, conversations, and external sources.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Effects Section */}
      <section className="school_img_box">
        <div className="container">
          <div className="school_box_cntr">
            <ul>
              <li className="first_school_box">
                <span className="school_icon_box">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/pm.png"
                    alt="PM odor icon"
                    width={60}
                    height={60}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>PM &amp; PM10</h3>
                  <p>Harms breathing, heart, and cardiovascular health</p>
                </div>
              </li>
              <li className="second_school_box">
                <span className="school_icon_box">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/vocs.png"
                    alt="VOCs icon"
                    width={60}
                    height={60}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>VOCs</h3>
                  <p>Irritates eyes, nose, throat, some carcinogenic</p>
                </div>
              </li>
              <li className="third_school_box">
                <span className="school_icon_box">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/co2-1.png"
                    alt="CO2 icon"
                    width={60}
                    height={60}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>CO2</h3>
                  <p>Reduces focus, productivity, harms cognition</p>
                </div>
              </li>
              <li className="six_school_box">
                <span className="school_icon_box">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/temp.png"
                    alt="Temperature in washroom"
                    width={60}
                    height={60}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>Temperature</h3>
                  <p>Impacts mood, focus, productivity, risks heat illnesses</p>
                </div>
              </li>
              <li className="fivth_school_box">
                <span className="school_icon_box">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/o3-icon.png"
                    alt="O3 icon"
                    width={60}
                    height={60}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>Ozone</h3>
                  <p>Irritates lungs, worsens existing conditions</p>
                </div>
              </li>
              <li className="sixth_school_box">
                <span className="school_icon_box">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/noise.png"
                    alt="Noise"
                    width={60}
                    height={60}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>Noise</h3>
                  <p>Raises stress, hampers focus, affects mental health</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Health Impacts Section */}
      <section className="pollution_cntr-inner-heading">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2>
              Health <span style={{ color: "#78ae60" }}>Impacts on Employees</span>
            </h2>
            <h3 className="heading-box">Some Short-Term Health Effects</h3>
          </div>
        </div>
      </section>

      {/* Short-Term Health Effects */}
      <section className="pollution_cntr inner_container">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="health-impact">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/eyes-and-respiration-irritation.png"
                  alt="Eyes and respiration irritation due to air quality"
                  width={142}
                  height={112}
                />
                <div className="feature_wrap_box">
                  <h3>Eye, nose, and throat irritation</h3>
                  <p>
                    Air pollutants can also irritate the eyes, nose, and throat, causing symptoms such as redness,
                    watering, burning, and sneezing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 sprt-mrgn">
              <div className="health-impact">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Respiratory-problems.png"
                  alt="Respiratory problems"
                  width={142}
                  height={112}
                />
                <div className="feature_wrap_box">
                  <h3>Respiratory problems</h3>
                  <p>
                    Air pollutants can irritate the airways &amp; lungs leading to coughing, shortness of breath, &amp;
                    chest tightness.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="health-impact">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Cardiovascular-problems.png"
                  alt="Cardiovascular problems"
                  width={142}
                  height={112}
                />
                <div className="feature_wrap_box">
                  <h3>Cardiovascular problems</h3>
                  <p>
                    Short-term exposure to air pollution can increase the risk of heart attacks, strokes, and other
                    cardiovascular events.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 sprt-last-mrgn">
              <div className="health-impact">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/headache-and-high-bp.png"
                  alt="Headache and high BP due to air quality"
                  width={142}
                  height={112}
                />
                <div className="feature_wrap_box">
                  <h3>Headaches</h3>
                  <p>
                    Air pollutants that can cause headaches include PM2.5, NO2, and O3, that irritate the lining of the
                    nose and throat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Health Effects */}
      <section className="pollution_heading">
        <div className="container">
          <h3 className="heading-box long-term-heading">Long-Term Health Effects:</h3>
        </div>
      </section>

      <section className="pollution_cntr inner_container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="health-impact">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Chronic-respiratory-diseases.png"
                  alt="Chronic respiratory diseases"
                  width={142}
                  height={112}
                />
                <div className="feature_wrap_box">
                  <h3>Chronic respiratory diseases</h3>
                  <p>
                    Air pollutants can damage the lungs, leading to chronic respiratory diseases such as asthma, chronic
                    obstructive pulmonary disease (COPD), and lung cancer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="health-impact">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/health-problems-due-to-air-pollution.png"
                  alt="Health problems due to air pollution"
                  width={142}
                  height={112}
                />
                <div className="feature_wrap_box">
                  <h3>Other health problems</h3>
                  <p>
                    Air pollutants have also been linked to a number of other health problems, including diabetes,
                    reproductive problems, and neurological problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-container">
            <div className="quote-content">
              <h2>DO YOU KNOW?</h2>
              <p>
                The World Health Organization (WHO) estimates that indoor air pollution causes 4.3 million deaths each
                year worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources of Air Pollution */}
      <section>
        <div className="container">
          <div className="source-of-air-pollution-heading">
            <h2>
              Sources of air pollution in <span style={{ color: "#78ae60" }}>Offices</span>
            </h2>
            <p>
              Offices can be polluted by building materials, office equipment, personal care products, cigarette smoke,
              and outdoor air. These pollutants can irritate the eyes, nose, throat, and respiratory system, and can
              also cause headaches, dizziness, nausea, and asthma attacks.
            </p>
          </div>

          <div className="pollution-sources-slider">
            <div className="row">
              <div className="col-md-3">
                <div className="source-air-pollution-slider-txt">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/air-pollutants-from-office-equipments.jpg"
                    alt="Air pollutants from office equipments"
                    width={325}
                    height={200}
                  />
                  <h3>Office equipment</h3>
                  <p>Printers, photocopiers, and computers can emit VOCs, ozone, and nitrogen dioxide.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="source-air-pollution-slider-txt">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/air-pollutants-from-cleaning-products.jpg"
                    alt="Air pollutants from cleaning products"
                    width={325}
                    height={200}
                  />
                  <h3>Cleaning products</h3>
                  <p>Many cleaning products contain VOCs, which can irritate the eyes, nose, and throat.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="source-air-pollution-slider-txt">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/air-pollutants-from-dusting.jpg"
                    alt="Air pollutants from dusting"
                    width={325}
                    height={200}
                  />
                  <h3>Dusting</h3>
                  <p>Dust can contain mold spores, bacteria, and other pollutants that can irritate the airways.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="source-air-pollution-slider-txt">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/high-co2-due-to-higher-occupancy.jpg"
                    alt="High CO2 due to higher occupancy"
                    width={325}
                    height={200}
                  />
                  <h3>High occupancy</h3>
                  <p>
                    High levels of CO2 can cause headaches, dizziness, nausea, reduced productivity, and other health
                    problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions */}
      <section className="quality-solutions-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              Air Quality <span className="highlight">Solutions</span>
            </h2>
            <p>
              Prana Air offers air quality solutions for offices, including air quality monitors and fresh air machines.
              These solutions can improve air quality, reduce health risks, increase productivity, and reduce sick days.
            </p>
          </div>

          <div className="solutions-tabs-container">
            <div className="tabs-header">
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
                Fresh Air Solution
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === "monitors" && (
                <div className="tab-pane">
                  <Carousel
                    responsive={{
                      desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 1,
                      },
                      tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 1,
                      },
                      mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1,
                      },
                    }}
                    infinite={true}
                    autoPlay={false}
                    arrows={true}
                    renderButtonGroupOutside={true}
                    customLeftArrow={<button className="carousel-arrow left-arrow">‹</button>}
                    customRightArrow={<button className="carousel-arrow right-arrow">›</button>}
                  >
                    <div className="product-slide">
                      <div className="product-content">
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
                          <a className="know-more-btn" href="#">
                            Know More
                          </a>
                        </div>
                        <div className="product-image">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2023/07/sensible-plus-air-quality-monitor-scaled.jpg"
                            alt="Prana air sensible+ air quality monitor for office"
                            width={500}
                            height={400}
                            objectFit="contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="product-slide">
                      <div className="product-content">
                        <div className="product-info">
                          <h3>SQUAIR Air Monitor</h3>
                          <p>
                            This is a smart indoor air quality monitoring device that can detect the odor, humidity, and
                            other toxic gas parameters.
                          </p>
                          <ul className="feature-list">
                            <li>Detects TVOCs (odor), temperature, and humidity as well</li>
                            <li>Mobile &amp; Smart TV App Enabled</li>
                            <li>Reliable Web Dashboard Accessibility</li>
                          </ul>
                          <div className="button-group">
                            <a className="know-more-btn" href="#">
                              Know More
                            </a>
                            <a className="rent-btn" href="#">
                              Looking for Rent?
                            </a>
                          </div>
                        </div>
                        <div className="product-image">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2023/07/squair-air-quality-monitor-scaled.jpg"
                            alt="Prana air squair air quality monitor for offices"
                            width={500}
                            height={400}
                            objectFit="contain"
                          />
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              )}

              {activeTab === "fresh-air" && (
                <div className="tab-pane">
                  <div className="product-slide">
                    <div className="product-content fresh-air-content">
                      <div className="product-image">
                        <Image
                          src="https://www.pranaair.com/wp-content/uploads/2023/07/for-fresh-air-machine-scaled.jpg"
                          alt="For fresh air machine"
                          width={500}
                          height={400}
                          objectFit="contain"
                        />
                      </div>
                      <div className="product-info">
                        <h3>Fresh Air Machine</h3>
                        <p>
                          It is an advanced air purifier designed to bring in fresh outdoor air and filter out
                          pollutants, allergens, odors and enough oxygen.
                        </p>
                        <ul className="feature-list">
                          <li>Comes with multi-layers HEPA Filters</li>
                          <li>Promising you up to 99.5% efficiency</li>
                          <li>Improves air ventilation</li>
                        </ul>
                        <a className="know-more-btn" href="#">
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              The <span className="highlight">Comparison</span>
            </h2>
            <p>
              Prana Air fresh air machine offer several benefits for office environments, including improved air
              quality, reduced illnesses, and increased productivity. Here, you can see the differences of impacts.
            </p>
          </div>

          <div className="comparison-container">
            <div className="comparison-columns">
              <div className="comparison-column without-solution">
                <h3>Without Fresh Air Solutions</h3>
                <ul className="comparison-list negative-list">
                  <li>Reduce work productivity</li>
                  <li>Uncomfortable experience</li>
                  <li>Unhealthy environment</li>
                </ul>
                <div className="comparison-image">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/04/without-fresh-air-solution-in-washroom.jpg"
                    alt="Without fresh air solution in washroom"
                    width={350}
                    height={186}
                  />
                </div>
              </div>

              <div className="comparison-divider"></div>

              <div className="comparison-column with-solution">
                <h3>With Fresh Air Solutions</h3>
                <ul className="comparison-list positive-list">
                  <li>Improve work productivity</li>
                  <li>More comfort level</li>
                  <li>Healthy environment</li>
                </ul>
                <div className="comparison-image">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/04/with-fresh-air-solution-in-washroom.jpg"
                    alt="With fresh air solution in washroom"
                    width={350}
                    height={185}
                  />
                </div>
              </div>
            </div>

            <div className="comparison-studies">
              <p>
                A study by the Harvard School of Public Health found that workers in offices with good air quality were
                10% more productive than workers in offices with poor air quality.
              </p>
              <p>
                Another study by the University of California, Berkeley found that workers in offices with fresh air
                machines had a 30% lower risk of developing asthma than workers in offices without fresh air machines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Freemium Services */}
      <section className="top_space_heading">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Freemium <span className="bold_text">Services</span>
            </h2>
            <p>
              You can display or analyze air quality data for your office on LCD screens or in AQI App and our
              web-dashboards.
            </p>
          </div>
        </div>
      </section>

      <section className="inner_container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="app_service_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/aqi-tv-app-data-in-office.jpg"
                  alt="AQI TV app data in office"
                  width={350}
                  height={200}
                />
                <h3>TV Dashboard App</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app_service_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/aqi-web-or-table-app-for-office.jpg"
                  alt="AQI web or table app for office"
                  width={350}
                  height={200}
                />
                <h3>Web-Dashboards for Offices</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app_service_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/aqi-app-to-check-office-air-quality.jpg"
                  alt="AQI app to check office air quality"
                  width={350}
                  height={200}
                />
                <h3>AQI Mobile App</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientele Section */}
      <section className="clientele-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              Our <span className="highlight">Clientele</span>
            </h2>
            <p>We are honored to work with so many well-known companies.</p>
          </div>

          <div className="client-grid">
            <div className="client-row">
              <div className="client-logo-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png"
                  alt="Morgan Stanley"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
              <div className="client-logo-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png"
                  alt="Ola"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
              <div className="client-logo-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png"
                  alt="Microsoft"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
              <div className="client-logo-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png"
                  alt="IIT"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="client-row">
              <div className="client-logo-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/RENAULT-NISSAN.png"
                  alt="Renault Nissan"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
              <div className="client-logo-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/TATA.png"
                  alt="Tata"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
              <div className="client-logo-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/CSIR.png"
                  alt="CSIR"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
              <div className="client-logo-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MAHINDRA.png"
                  alt="Mahindra"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
        <ContactForm pageName="Office Page" />
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              Frequently Asked <span className="highlight">Questions</span>
            </h2>
            <p>About Air Quality Solution for offices / corporates. Have questions? Were here to help.</p>
          </div>

          <div className="faq-container">
            <div className={`faq-item ${activeFaq === 1 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)}>
                <h3>1. What is office air pollution, and how does it affect employees?</h3>
                <span className="faq-toggle">{activeFaq === 1 ? "−" : "+"}</span>
              </div>
              <div className={`faq-answer ${activeFaq === 1 ? "show" : ""}`}>
                <p>
                  Office air pollution is harmful indoor contaminants that can cause respiratory problems, allergies,
                  headaches, and reduced productivity among employees.
                </p>
              </div>
            </div>

            <div className={`faq-item ${activeFaq === 2 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)}>
                <h3>2. Why is an Air Quality Monitor essential for offices?</h3>
                <span className="faq-toggle">{activeFaq === 2 ? "−" : "+"}</span>
              </div>
              <div className={`faq-answer ${activeFaq === 2 ? "show" : ""}`}>
                <p>
                  An Air Quality Monitor tracks indoor pollutants in real-time, ensuring a healthy work environment by
                  identifying and addressing air quality issues promptly.
                </p>
              </div>
            </div>

            <div className={`faq-item ${activeFaq === 3 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => setActiveFaq(activeFaq === 3 ? null : 3)}>
                <h3>3. How does Prana Airs Air Quality Monitor work?</h3>
                <span className="faq-toggle">{activeFaq === 3 ? "−" : "+"}</span>
              </div>
              <div className={`faq-answer ${activeFaq === 3 ? "show" : ""}`}>
                <p>
                  Prana Airs monitor uses advanced sensors to detect pollutants like PM2.5, PM10, CO2, VOCs, and
                  temperature, providing real-time data via a user-friendly interface and app.
                </p>
              </div>
            </div>

            <div className={`faq-item ${activeFaq === 4 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => setActiveFaq(activeFaq === 4 ? null : 4)}>
                <h3>4. What are the benefits of Prana Airs Air Quality Monitor?</h3>
                <span className="faq-toggle">{activeFaq === 4 ? "−" : "+"}</span>
              </div>
              <div className={`faq-answer ${activeFaq === 4 ? "show" : ""}`}>
                <p>
                  It enables data-driven decisions for better air quality, leading to healthier employees and increased
                  productivity.
                </p>
              </div>
            </div>

            <div className={`faq-item ${activeFaq === 5 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => setActiveFaq(activeFaq === 5 ? null : 5)}>
                <h3>5. What is Prana Airs Fresh Air Machine, and how does it enhance office air quality?</h3>
                <span className="faq-toggle">{activeFaq === 5 ? "−" : "+"}</span>
              </div>
              <div className={`faq-answer ${activeFaq === 5 ? "show" : ""}`}>
                <p>
                  Prana Airs Fresh Air Machine filters outdoor air, removing pollutants and maintaining a constant
                  supply of clean air indoors, promoting better respiratory health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Applications */}
      <section className="industrial-applications-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              Industrial <span className="highlight">Applications</span>
            </h2>
            <p>
              Prana Air offers a diverse selection of smart, affordable, and remarkably precise air quality solutions,
              catering to various sectors, irrespective of their scale.
            </p>
          </div>

          <div className="applications-carousel">
            <Carousel
              responsive={{
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
              }}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              customLeftArrow={<button className="carousel-arrow left-arrow">‹</button>}
              customRightArrow={<button className="carousel-arrow right-arrow">›</button>}
            >
              <div className="application-item">
                <div className="application-image">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-airport.jpg"
                    alt="Air quality solutions for airport"
                    width={400}
                    height={300}
                    objectFit="cover"
                  />
                </div>
                <h3>Solutions for Airport</h3>
              </div>

              <div className="application-item">
                <div className="application-image">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/04/air-quality-solution-for-fitness-gym.jpg"
                    alt="Air quality solutions for fitness and gym"
                    width={400}
                    height={300}
                    objectFit="cover"
                  />
                </div>
                <h3>Solutions for Fitness & Gym</h3>
              </div>

              <div className="application-item">
                <div className="application-image">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/solution-for-parking-lot.jpg"
                    alt="Air quality solutions for parking lot"
                    width={400}
                    height={300}
                    objectFit="cover"
                  />
                </div>
                <h3>Solutions for Parking Lot</h3>
              </div>

              <div className="application-item">
                <div className="application-image">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/01/air-quality-solutions-for-banks.jpg"
                    alt="Air quality solutions for banks"
                    width={400}
                    height={300}
                    objectFit="cover"
                  />
                </div>
                <h3>Solutions for Bank</h3>
              </div>

              <div className="application-item">
                <div className="application-image">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-hotel.jpg"
                    alt="Air quality solutions for hotel business"
                    width={400}
                    height={300}
                    objectFit="cover"
                  />
                </div>
                <h3>Solutions for Hotel</h3>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  )
}

