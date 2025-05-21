"use client"
import "./style.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import ContactForm from "@/Components/Contacform/ContactForm"

export default function SmartCityPage() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
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
      items: 1,
    },
  }

  const healthImpactResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
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
      items: 1,
    },
  }

  const industrialResponsive = {
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

  return (
    <main className="smart-city-page">
      {/* Banner Section */}
      <section className="home-banner-section">
        <div className="slider-container">
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
            autoPlay={true}
            autoPlaySpeed={6000}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="slide">
              <div className="banner-content">
                <h1>
                  Air Quality Solutions For <span className="smart-city-txt">Smart Cities</span>
                </h1>
                <p>Data Monitoring & Purification</p>
                <a href="#contact_form" className="banner-btn">
                  Contact Us
                </a>
              </div>
              <img
                className="slide-img"
                src="https://www.pranaair.com/wp-content/uploads/2023/08/prana-air-smart-city-air-quality-solutions.jpg"
                alt="prana air smart city air quality solutions"
              />
            </div>
            <div className="slide">
              <div className="banner-content">
                <h2>
                  Real-time Air Pollution Monitoring & <span className="smart-city-txt">Data Analytics</span>
                </h2>
                <p>Real-time & Historic Data Dashboards</p>
                <a href="#contact_form" className="banner-btn">
                  Contact Us
                </a>
              </div>
              <img
                className="slide-img"
                src="https://www.pranaair.com/wp-content/uploads/2023/08/prana-air-smart-city-air-quality-monitoring.jpg"
                alt="prana air smart city air quality monitoring"
              />
            </div>
            <div className="slide">
              <div className="banner-content">
                <h2>
                  Purification, An Ultimate Solution To <span className="smart-city-txt">Air Pollution</span>
                </h2>
                <p>Outdoor Air Purifiers</p>
                <a href="#contact_form" className="banner-btn">
                  Contact Us
                </a>
              </div>
              <img
                className="slide-img"
                src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-air-quality-solutions.jpg"
                alt="Prana Air smart city air quality solutions"
              />
            </div>
          </Carousel>
          <div className="slider-buttons">
            <button className="slider-button" data-bs-slide="0">
              Real-time Data <br />
              <p>Monitoring</p>
            </button>
            <button className="slider-button" data-bs-slide="1">
              Analytical Dashboards
              <br />
              <p>Insightful Data</p>
            </button>
            <button className="slider-button" data-bs-slide="2">
              Air Purification <br />
              <p>An Ultimate Solution</p>
            </button>
          </div>
          <div className="mouse-scroll-icon">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2023/08/scroll-down-icon.png"
              alt="scroll down icon"
            />
          </div>
        </div>
      </section>

      {/* Factors Affecting Section */}
      <section className="factor-affecting">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="factor-heading">
                <h2>
                  Factor affecting air quality in <span className="smart-city-factor">Smart Cities</span>
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="factor-para">
                <p>
                  Air pollution in cities can be affected by traffic, industry, construction, vehicle emissions, waste
                  disposal, and weather conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="factor-affect-tab">
            <ul className="nav nav-tabs" id="factorTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pm25-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pm25"
                  type="button"
                  role="tab"
                  aria-controls="pm25"
                  aria-selected="true"
                >
                  PM2.5
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="co-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#co"
                  type="button"
                  role="tab"
                  aria-controls="co"
                  aria-selected="false"
                >
                  CO
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="no2-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#no2"
                  type="button"
                  role="tab"
                  aria-controls="no2"
                  aria-selected="false"
                >
                  NO2
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="so2-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#so2"
                  type="button"
                  role="tab"
                  aria-controls="so2"
                  aria-selected="false"
                >
                  SO2
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="ozone-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#ozone"
                  type="button"
                  role="tab"
                  aria-controls="ozone"
                  aria-selected="false"
                >
                  Ozone
                </button>
              </li>
            </ul>

            <div className="tab-content" id="factorTabContent">
              <div className="tab-pane fade show active" id="pm25" role="tabpanel" aria-labelledby="pm25-tab">
                <div className="row">
                  <div className="col-md-6">
                    <div className="factor-tab-image">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/08/pm2.5-from-constructions-sites.jpg"
                        alt="PM2.5 pollutant in city"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="factor-tab-para">
                      <span className="green-clr">Particulate Matter PM2.5</span> consists of fine particles with a
                      diameter of 2.5 micrometers or smaller. These particles can originate from various sources in
                      cities, including vehicle emissions, industrial processes, construction activities, and the
                      burning of fossil fuels.
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="co" role="tabpanel" aria-labelledby="co-tab">
                <div className="row">
                  <div className="col-md-6">
                    <div className="factor-tab-image">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/08/co-gas-from-vehicle-emissions.jpg"
                        alt="CO pollutant in city"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="factor-tab-para">
                      <span className="green-clr">Carbon monoxide (CO)</span> is produced from incomplete combustion of
                      fossil fuels, primarily in vehicles. In urban environments, heavy traffic and congested roadways
                      are major sources of carbon monoxide emissions.
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="no2" role="tabpanel" aria-labelledby="no2-tab">
                <div className="row">
                  <div className="col-md-6">
                    <div className="factor-tab-image">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/08/no2-gas-from-power-plant.jpg"
                        alt="NO2 pollutant in city"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="factor-tab-para">
                      <span className="green-clr">Nitrogen Dioxide NO2</span> is mainly produced from the combustion of
                      fossil fuels in vehicles and power plants. In cities, heavy traffic congestion is a significant
                      source of NO2 emissions. Industrial activities and residential heating using fossil fuels can also
                      release nitrogen dioxide.
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="so2" role="tabpanel" aria-labelledby="so2-tab">
                <div className="row">
                  <div className="col-md-6">
                    <div className="factor-tab-image">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/08/so2-gas-from-diesel-generator.jpg"
                        alt="SO2 pollutant in city"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="factor-tab-para">
                      <span className="green-clr">Sulfur Dioxide (SO2)</span> is primarily emitted from the burning of
                      coal and oil in power plants and industrial facilities. In urban areas, vehicles equipped with
                      diesel engines can also contribute to SO2 emissions. Additionally, certain industrial processes,
                      such as smelting and refining, release sulfur dioxide into the air.
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="ozone" role="tabpanel" aria-labelledby="ozone-tab">
                <div className="row">
                  <div className="col-md-6">
                    <div className="factor-tab-image">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/08/ozone-gas-from-factories.jpg"
                        alt="Ozone pollutant in city"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="factor-tab-para">
                      <span className="green-clr">Ground-level Ozone (O3)</span> is not directly emitted, but it forms
                      when pollutants like nitrogen oxides (NOx) and volatile organic compounds (VOCs) react in the
                      presence of sunlight. In urban areas, vehicle emissions are a primary source of these precursor
                      pollutants.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Impact Section */}
      <section className="health-impact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="health-impact-heading">
                <h2>
                  Health <span className="healt-impaact">Impacts</span>
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="factor-para health-impact-para">
                <p>
                  Air pollution in cities can have a significant impact on human health, the environment, and the
                  economy. Short-term exposure to air pollution can cause respiratory problems, such as asthma and
                  bronchitis. Long-term exposure can increase the risk of heart disease, stroke, cancer, and premature
                  death.
                </p>
              </div>
            </div>
          </div>

          <div className="office-pollutatnt-bg">
            <div className="office-pollutant-icons">
              <img
                className="so2"
                src="https://www.pranaair.com/wp-content/uploads/2023/08/so2-pollutant.png"
                alt="so2 pollutant in city"
              />
              <img
                className="pm2.5"
                src="https://www.pranaair.com/wp-content/uploads/2023/08/pm2.5-pollutant.png"
                alt="pm2.5 pollutant in city"
              />
              <img
                className="co2"
                src="https://www.pranaair.com/wp-content/uploads/2023/08/co-pollutant.png"
                alt="co pollutant in city"
              />
              <img
                className="tvocs"
                src="https://www.pranaair.com/wp-content/uploads/2023/08/nh3-pollutant.png"
                alt="nh3 pollutant in city"
              />
              <img
                className="no2"
                src="https://www.pranaair.com/wp-content/uploads/2023/08/no2-pollutant.png"
                alt="no2 pollutant in city"
              />
              <img
                className="co"
                src="https://www.pranaair.com/wp-content/uploads/2023/08/ozone-pollutant.png"
                alt="ozone pollutant in city"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Health Impact Slider - Updated to match the design */}
      <section className="health-impact-slider">
        <div className="container">
          <Carousel
            responsive={healthImpactResponsive}
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
          >
            <div className="health-impact-card">
              <div className="health-impact-icon">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/08/Cardiovascular-problems.png"
                  alt="Cardiovascular problems icon"
                />
              </div>
              <h3>Cardiovascular problems</h3>
              <p>Air pollution can increase the risk of heart disease, stroke, and arrhythmias.</p>
            </div>

            <div className="health-impact-card">
              <div className="health-impact-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/08/cancer.png" alt="Cancer icon" />
              </div>
              <h3>Cancer</h3>
              <p>
                Air pollution has been linked to an increased risk of lung cancer, as well as other types of cancer.
              </p>
            </div>

            <div className="health-impact-card">
              <div className="health-impact-icon">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/08/neurological-problems.png"
                  alt="Neurological problems icon"
                />
              </div>
              <h3>Neurological Problems</h3>
              <p>
                Air pollution can damage the brain and nervous system, leading to cognitive decline, dementia, and
                Alzheimers disease.
              </p>
            </div>

            <div className="health-impact-card">
              <div className="health-impact-icon">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/08/premature-death.png"
                  alt="Premature death icon"
                />
              </div>
              <h3>Premature death</h3>
              <p>Air pollution is estimated to cause millions of premature deaths each year worldwide.</p>
            </div>

            <div className="health-impact-card">
              <div className="health-impact-icon">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/08/respiratory-problems.png"
                  alt="Respiratory problems icon"
                />
              </div>
              <h3>Respiratory problems</h3>
              <p>
                Air pollution can irritate the lungs and airways, leading to coughing, wheezing, shortness of breath,
                and asthma attacks.
              </p>
            </div>
          </Carousel>
        </div>
      </section>

      {/* City Frame Section - Updated to match the design */}
      <section className="city-frame">
        <div className="container">
          <div className="city-frame-heading">
            <img src="https://www.pranaair.com/wp-content/uploads/2023/08/frame-arrow.png" alt="icon" />
            <h2>Smart City Model- Air Quality Solutions</h2>
          </div>

          <div className="frame-section">
            <ul className="nav nav-tabs" id="frameTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="monitor-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#monitor"
                  type="button"
                  role="tab"
                  aria-controls="monitor"
                  aria-selected="true"
                >
                  <div className="frame-tab-number">01</div>
                  <div className="frame-tab-content">
                    <div className="frame-tab-title">Step 1</div>
                    <div className="frame-tab-subtitle">Monitor</div>
                  </div>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="drone-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#drone"
                  type="button"
                  role="tab"
                  aria-controls="drone"
                  aria-selected="false"
                >
                  <div className="frame-tab-number">02</div>
                  <div className="frame-tab-content">
                    <div className="frame-tab-title">Step 2</div>
                    <div className="frame-tab-subtitle">Drone</div>
                  </div>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="purifier-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#purifier"
                  type="button"
                  role="tab"
                  aria-controls="purifier"
                  aria-selected="false"
                >
                  <div className="frame-tab-number">03</div>
                  <div className="frame-tab-content">
                    <div className="frame-tab-title">Step 3</div>
                    <div className="frame-tab-subtitle">Air Purifier</div>
                  </div>
                </button>
              </li>
            </ul>

            <div className="tab-content" id="frameTabContent">
              <div className="tab-pane fade show active" id="monitor" role="tabpanel" aria-labelledby="monitor-tab">
                <div className="frame-content-item">
                  <div className="frame-image">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/08/ambient-air-quality-monitors-for-smart-city.jpg"
                      alt="Smart city with air quality monitors"
                    />
                  </div>
                  <div className="frame-description">
                    <h3>
                      <span className="highlight">1st: Installation of Air Quality Monitors along LED Displays</span>
                    </h3>
                    <p>
                      across the city where there are more public gathering, traffic junctions, and hubspots with the
                      LED displays to dispay the real-time air pollution level of the areas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="drone" role="tabpanel" aria-labelledby="drone-tab">
                <div className="frame-content-item">
                  <div className="frame-image">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/08/ambient-air-quality-monitors-for-smart-city.jpg"
                      alt="Smart city with air quality drones"
                    />
                  </div>
                  <div className="frame-description">
                    <h3>
                      <span className="highlight">2nd: Air Quality Drone</span>
                    </h3>
                    <p>
                      along the ambient monitors are used to measure the air pollution level in the different areas of a
                      city. Thus, it makes the data more reliable and accurate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="purifier" role="tabpanel" aria-labelledby="purifier-tab">
                <div className="frame-content-item">
                  <div className="frame-image">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/08/air-quality-solutions-for-a-smart-city.jpg"
                      alt="Smart city with outdoor air purifiers"
                    />
                  </div>
                  <div className="frame-description">
                    <h3>
                      <span className="highlight">3rd: Installation of Outdoor Air Purifiers</span>
                    </h3>
                    <p>
                      is the very important solution to cope with the air pollution problem in the city. Besides air
                      quality monitoring, purification is the ultimate solution to the problem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions Section */}
      <section className="air-quality-solution">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="factor-heading air-quality-heading">
                <h2>
                  Prana Air Air quality solutions for <span className="smart-city-factor">Smart Cities</span>
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="factor-para air-qaulity-para">
                <p>
                  <strong>Prana Airs</strong> Smart City air quality solutions provide a comprehensive approach to
                  monitoring and improving air quality in cities. The solution includes air quality monitors, air
                  quality drones, outdoor air purifiers, and data dashboards.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion" id="accordionAirQuality">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div className="accord-icons">
                    <img
                      className="heading-icon"
                      src="https://www.pranaair.com/wp-content/uploads/2023/08/ambient-air-monitor-green-icon.png"
                      alt=""
                    />
                  </div>
                  <h4>Ambient Air Quality Monitor</h4>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionAirQuality"
              >
                <div className="accordion-body">
                  <div className="main-box">
                    <div className="row">
                      <div className="col-lg-5">
                        <a href="#">
                          <img
                            className="ambient-monitor"
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/prana-air-ambient-air-quality-monitor-for-smart-city.png"
                            alt="prana air ambient air quality monitor for smart city"
                          />
                        </a>
                      </div>
                      <div className="col-lg-7">
                        <div className="ambient-air-monitor-box">
                          <h3>Prana Air</h3>
                          <h4>Ambient Air Quality Monitor</h4>
                          <ul>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/low-cost-air-monitor.png"
                                alt="prana air low-cost air monitor"
                              />
                              <h5>Low-Cost Monitor</h5>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/highly-accurate-data.png"
                                alt="highly accurate data"
                              />
                              <h5>Highly Accurate Data</h5>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/weatherproof-monitor.png"
                                alt="weatherproof monitor"
                              />
                              <h5>Weatherproof Device</h5>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/cloud-data-and-dashboards.png"
                                alt="cloud data and dashboards"
                              />
                              <h5>Cloud Data, Dashboards, Apps</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="row perameter-bg">
                      <div className="col-lg-5">
                        <h3 className="perameter-heading pera-line">
                          Air Quality <span className="wheat"> Weather</span>
                        </h3>
                      </div>
                      <div className="col-lg-7">
                        <div className="parameter">
                          <ul>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/pm2.5.png"
                                alt="PM2.5 parameter"
                              />
                              <h6>PM2.5</h6>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/pm10.png"
                                alt="pm10 parameter"
                              />
                              <h6>PM10</h6>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/ozone.png"
                                alt="ozone parameter"
                              />
                              <h6>Ozone</h6>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/so2.png"
                                alt="so2 parameter"
                              />
                              <h6>SO2</h6>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/no2.png"
                                alt="no2 parameter"
                              />
                              <h6>NO2</h6>
                            </li>
                            <li>
                              <img
                                className="carbon-icon"
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/carbon-mono.png"
                                alt="co parameter"
                              />
                              <h6>CO</h6>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/wind-speed.png"
                                alt="wind speed parameter"
                              />
                              <h6>Wind Speed</h6>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/temperature.png"
                                alt="temperature parameter"
                              />
                              <h6>Temp</h6>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/humidity.png"
                                alt="humidity parameter"
                              />
                              <h6>Humidity</h6>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/uv-index.png"
                                alt="index parameter"
                              />
                              <h6>UV Index</h6>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="know-more">
                      <a href="#">
                        know more{" "}
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/08/know-more-icon.png"
                          alt="know more icon"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="ambient-monitor-city-img">
                    <h3 className="ambient-monitorin-city">
                      Ambient monitors in <span className="ambient-monitor-bold">Smart Cities</span>
                    </h3>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-ambient-air-quality-monitor.jpg"
                      alt="Prana Air smart city ambient air quality monitor"
                    />
                  </div>

                  <div className="data-insight-box">
                    <div className="data-insight-heading">
                      <h3 className="data-insight">
                        <span className="data-clr">Data</span> insights from the ambient monitors
                      </h3>
                    </div>
                    <div className="data-insight-para">
                      <p>
                        Ambient air quality monitoring and data insights can be used in smart city projects to improve
                        air quality and protect public health. Air quality data can be used to generate air quality
                        alerts, optimize traffic flow, and encourage green building.
                      </p>
                    </div>
                  </div>

                  <div className="data-insight-img-box">
                    <div className="image-row1">
                      <ul>
                        <li>
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-air-pollution-led-display.jpg"
                            alt="prana air smart city air pollution led display"
                          />
                          <div className="overlay">
                            <div className="text">
                              <h3>AQI LED Display for Public</h3>
                              <p>Anyone in the city can see and understand the real-time air quality level easily.</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/ambient-air-quality-data-on-aqi-app.jpg"
                            alt="prana air ambient air quality monitor data on aqi app"
                          />
                          <div className="overlay">
                            <div className="text">
                              <h3>AQI Air Quality App</h3>
                              <p>The free AQI mobile app for people to check the air quality level anytime anywhere.</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="image-row1">
                      <ul>
                        <li>
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-air-quality-lcd-dispay.jpg"
                            alt="prana air smart city air quality lcd dispay"
                          />
                          <div className="overlay">
                            <div className="text">
                              <h3>AQI LCD Displays</h3>
                              <p>Such screens/displays can be installed across the city to display the AQI level.</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-air-quality-data-dashboards.jpg"
                            alt="prana air smart city air quality data dashboards"
                          />
                          <div className="overlay">
                            <div className="text">
                              <h3>AQI TV App</h3>
                              <p>
                                The same data can be shown in smart TVs to check and analyze the air quality for a
                                better decision making.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="image-row1 last-row">
                      <ul>
                        <li>
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-air-quality-data-on-smart-tv.jpg"
                            alt="prana air smart city air quality data on smart tv"
                          />
                          <div className="overlay">
                            <div className="text last-text">
                              <h3>AQI Large Screen Displays</h3>
                              <p>Such large displays can be installed in places like airport, railways platforms.</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <div className="accord-icons">
                    <img
                      className="heading-icon drone-icon"
                      src="https://www.pranaair.com/wp-content/uploads/2023/08/drone-green-icon.png"
                      alt="drone icon"
                    />
                  </div>
                  <h4>Air Quality Drone</h4>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionAirQuality"
              >
                <div className="accordion-body">
                  <div className="main-box">
                    <div className="row">
                      <div className="col-lg-5">
                        <a href="#">
                          <img
                            className="ambient-monitor mob-drone"
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-air-quality-drone.png"
                            alt="Prana Air smart city air quality drone"
                          />
                        </a>
                      </div>
                      <div className="col-lg-7">
                        <div className="ambient-air-monitor-box">
                          <h3>Prana Air</h3>
                          <h4>Air Quality Drone</h4>
                          <ul>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/real-time-monitoring.png"
                                alt="drone real-time monitoring"
                              />
                              <h5>Real-time Monitoring</h5>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/very-accurate.png"
                                alt="drone very accurate"
                              />
                              <h5>Very Accurate Method</h5>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/wide-coverage-area.png"
                                alt="drone wide coverage area"
                              />
                              <h5>Wide Coverage Area</h5>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/4k-video.png"
                                alt="drone 4k video"
                              />
                              <h5>4K Video Footage</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="row perameter-bg">
                      <div className="col-lg-5">
                        <h3 className="perameter-heading">Sensors</h3>
                      </div>
                      <div className="col-lg-7">
                        <div className="parameter dronne-ul">
                          <ul>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/pm2.5.png"
                                alt="PM2.5 parameter"
                              />
                              <h6>PM</h6>
                            </li>
                            <li>
                              <img
                                className="carbon-icon"
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/carbon-mono.png"
                                alt="co parameter"
                              />
                              <h6>CO</h6>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/no2.png"
                                alt="no2 parameter"
                              />
                              <h6>NO2</h6>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/so2.png"
                                alt="so2 parameter"
                              />
                              <h6>SO2</h6>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/nh3.png"
                                alt="nh3 parameter"
                              />
                              <h6>NH3</h6>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/ozone.png"
                                alt="o3 parameter"
                              />
                              <h6>O3</h6>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/temperature.png"
                                alt="temperature parameter"
                              />
                              <h6>Temp</h6>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/humidity.png"
                                alt="humidity parameter"
                              />
                              <h6>Humidity</h6>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="know-more">
                      <a href="#">
                        know more{" "}
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/08/know-more-icon.png"
                          alt="know more icon"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="ambient-monitor-city-img">
                    <h3 className="ambient-monitorin-city">
                      Air quality drones in <span className="ambient-monitor-bold">Smart City</span>
                    </h3>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-air-quality-drone.jpg"
                      alt="Prana Air smart city air quality drone"
                    />
                  </div>

                  <div className="data-insight-box">
                    <div className="data-insight-heading">
                      <h3 className="data-insight">
                        <span className="data-clr">Data</span> insights from the drones
                      </h3>
                    </div>
                    <div className="data-insight-para">
                      <p>
                        Prana Airs drones can provide real-time air quality data, which can be used to identify and
                        respond to air quality problems more quickly. It collects data from hard-to-reach or remote
                        areas.
                      </p>
                    </div>
                  </div>

                  <div className="data-insight-img-box">
                    <div className="image-row1">
                      <ul>
                        <li>
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-air-quality-drone-monitor.jpg"
                            alt="Prana Air smart city air quality drone monitor"
                          />
                          <div className="overlay">
                            <div className="text">
                              <h3>Real-time Air Quality Monitoring</h3>
                              <p>The air quality data collected by drone are very accurate and reliable source.</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-air-quality-drone-remote-sensing.jpg"
                            alt="Prana Air smart city air quality drone remote sensing"
                          />
                          <div className="overlay">
                            <div className="text">
                              <h3>Remote Monitoring</h3>
                              <p>The drone can be easily controlled remotely by a device.</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="image-row1">
                      <ul>
                        <li>
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-air-quality-drone-dashboard.jpg"
                            alt="Prana Air smart city air quality drone data dashboard"
                          />
                          <div className="overlay">
                            <div className="text">
                              <h3>Real-time Data Insights</h3>
                              <p>
                                While the drone is in the operation, the real-time data can be easily seen and analyzed
                                remotely.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-air-quality-drone-data.jpg"
                            alt="Prana Air smart city air quality drone data"
                          />
                          <div className="overlay">
                            <div className="text">
                              <h3>Easy Decision Making</h3>
                              <p>
                                The useful insights of air quality data from the drone helps to make good strategic
                                decisions for the city.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <div className="accord-icons">
                    <img
                      className="heading-icon purifier-icon"
                      src="https://www.pranaair.com/wp-content/uploads/2023/08/purifier-green-icon.png"
                      alt="purifier icon"
                    />
                  </div>
                  <h4>Outdoor Air Purifier</h4>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionAirQuality"
              >
                <div className="accordion-body">
                  <div className="main-box">
                    <div className="row">
                      <div className="col-lg-5">
                        <a href="#">
                          <img
                            className="ambient-monitor"
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-outdoor-air-purifier.png"
                            alt="prana air smart city outdoor air purifier"
                          />
                        </a>
                      </div>
                      <div className="col-lg-7">
                        <div className="ambient-air-monitor-box">
                          <h3>Prana Air</h3>
                          <h4>Outdoor Air Purifier</h4>
                          <ul>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/highly-cadr.png"
                                alt="highly cadr"
                              />
                              <h5>High CADR</h5>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/electrostatic-filter.png"
                                alt="electrostatic filter"
                              />
                              <h5>Electrostatic Filter</h5>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/weatherproof.png"
                                alt="weatherproof"
                              />
                              <h5>Weatherproof Device</h5>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/multiple-filtrations.png"
                                alt="multiple filtrations"
                              />
                              <h5>Multiple Filtrations</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="row perameter-bg">
                      <div className="col-lg-5">
                        <h3 className="perameter-heading">Parameters</h3>
                      </div>
                      <div className="col-lg-7">
                        <div className="parameter dronne-ul">
                          <ul>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/pm2.5.png"
                                alt="PM2.5 parameter"
                              />
                              <h6>PM2.5</h6>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/pm10.png"
                                alt="pm10 parameter"
                              />
                              <h6>PM10</h6>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/dust-icon.png"
                                alt="dust icon"
                              />
                              <h6>Dust</h6>
                            </li>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/smoke-icon.png"
                                alt="smoke icon"
                              />
                              <h6>Smoke</h6>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="know-more">
                      <a href="#">
                        know more{" "}
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/08/know-more-icon.png"
                          alt="know more icon"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="ambient-monitor-city-img">
                    <h3 className="ambient-monitorin-city">
                      Outdoor Air Purifiers installed in <span className="ambient-monitor-bold">Smart City</span>
                    </h3>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-outdoor-air-purifier.jpg"
                      alt="Prana Air smart city outdoor air purifier"
                    />
                  </div>

                  <div className="data-insight-box">
                    <div className="data-insight-heading">
                      <h3 className="data-insight">
                        Multiple installations <span className="data-clr">at different areas</span>
                      </h3>
                    </div>
                    <div className="data-insight-para">
                      <p>
                        Outdoor air purifiers installed in different areas of a city can remove air pollutants from the
                        air and reduce the heat island effect, create a cleaner and healthier environment, and attract
                        businesses and residents.
                      </p>
                    </div>
                  </div>

                  <div className="data-insight-img-box">
                    <div className="image-row1">
                      <ul>
                        <li>
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-outdoor-air-purifier-at-bus-stop.jpg"
                            alt="prana air smart city outdoor air purifier at bus stop"
                          />
                          <div className="overlay">
                            <div className="text">
                              <h3>Air Purifier at Bus-Stop</h3>
                              <p>Bus stops are one of the most gathered places in the urban areas.</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-outdoor-air-purifier-at-public-park.jpg"
                            alt="prana air smart city outdoor air purifier at public park"
                          />
                          <div className="overlay">
                            <div className="text">
                              <h3>Air Purifier at Park</h3>
                              <p>Many people go to the public parks to relax and enjoy their leisures.</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="image-row1">
                      <ul>
                        <li>
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-outdoor-air-purifier-at-train-station.jpg"
                            alt="prana air smart city outdoor air purifier at train station"
                          />
                          <div className="overlay">
                            <div className="text">
                              <h3>Air Purifier at Train Stations</h3>
                              <p>
                                Usually, a huge number of people gather at train stations daily to commute for their
                                jobs.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-outdoor-air-purifier-at-airport.jpg"
                            alt="prana air smart city outdoor air purifier at airport"
                          />
                          <div className="overlay">
                            <div className="text">
                              <h3>Air Purifier at Airport</h3>
                              <p>
                                Airport is also the same place where many people come to travel to another place daily.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="technical-spec">
        <div className="container">
          <h2 className="tech-heading">
            Technical <span className="spec-bold">Specifications</span>
          </h2>

          <div className="tech-spec-tab">
            <ul className="nav nav-tabs" id="techTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="ambient-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#ambient"
                  type="button"
                  role="tab"
                  aria-controls="ambient"
                  aria-selected="true"
                >
                  Ambient Monitor
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tech-drone-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tech-drone"
                  type="button"
                  role="tab"
                  aria-controls="tech-drone"
                  aria-selected="false"
                >
                  Drone
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tech-purifier-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tech-purifier"
                  type="button"
                  role="tab"
                  aria-controls="tech-purifier"
                  aria-selected="false"
                >
                  Air Purifier
                </button>
              </li>
            </ul>

            <div className="tab-content" id="techTabContent">
              <div className="tab-pane fade show active" id="ambient" role="tabpanel" aria-labelledby="ambient-tab">
                <div className="row">
                  <div className="col-md-6">
                    <div className="tech-spec">
                      <div className="tech-spec-colm">
                        <ul>
                          <li>
                            <h6>Product Name:</h6>
                            <h5>Ambient air monitor</h5>
                          </li>
                          <li className="tech-spec-row-bg">
                            <h6>Type:</h6>
                            <h5>CAAQMS monitor</h5>
                          </li>
                          <li>
                            <h6>Price:</h6>
                            <h5>Low-cost device</h5>
                          </li>
                          <li className="tech-spec-row-bg">
                            <h6>Battery:</h6>
                            <h5>No In-built Battery</h5>
                          </li>
                          <li>
                            <h6>Housing:</h6>
                            <h5>Weatherproof</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tech-spec">
                      <div className="tech-spec-colm">
                        <ul>
                          <li>
                            <h6>Size:</h6>
                            <h5>Portable & Light weight</h5>
                          </li>
                          <li className="tech-spec-row-bg">
                            <h6>Data Storage:</h6>
                            <h5>MicroSD card & AQI Cloud</h5>
                          </li>
                          <li>
                            <h6>Communication:</h6>
                            <h5>Wifi, GSM, RS-485</h5>
                          </li>
                          <li className="tech-spec-row-bg">
                            <h6>Sensor Accuracy:</h6>
                            <h5>Very High</h5>
                          </li>
                          <li>
                            <h6>Data Access:</h6>
                            <h5 className="last-text">AQI mobile & TV apps, Web-Dashboard</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="logo-tech-spec">
                      <li>
                        <img src="https://www.pranaair.com/wp-content/uploads/2023/08/ce-logo.png" alt="ce logo" />
                      </li>
                      <li>
                        <img src="https://www.pranaair.com/wp-content/uploads/2023/08/RoHS.png" alt="rohs certified" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="tech-drone" role="tabpanel" aria-labelledby="tech-drone-tab">
                <div className="row">
                  <div className="col-md-6">
                    <div className="tech-spec">
                      <div className="tech-spec-colm">
                        <ul>
                          <li>
                            <h6>Product:</h6>
                            <h5>Air quality drone</h5>
                          </li>
                          <li className="tech-spec-row-bg">
                            <h6>Product Name:</h6>
                            <h5>Breathalyzer</h5>
                          </li>
                          <li>
                            <h6>Camera:</h6>
                            <h5>FPV Camera</h5>
                          </li>
                          <li className="tech-spec-row-bg">
                            <h6>Video:</h6>
                            <h5>4K Resolution</h5>
                          </li>
                          <li>
                            <h6>Flying Range:</h6>
                            <h5>Up to 2 Km</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tech-spec">
                      <div className="tech-spec-colm">
                        <ul>
                          <li>
                            <h6>Max Speed:</h6>
                            <h5>10 m/s</h5>
                          </li>
                          <li className="tech-spec-row-bg">
                            <h6>Battery Endurance:</h6>
                            <h5>25 min (LiPO 12S)</h5>
                          </li>
                          <li>
                            <h6>Propulsion Type:</h6>
                            <h5>Electric</h5>
                          </li>
                          <li className="tech-spec-row-bg">
                            <h6>Maximum Payload:</h6>
                            <h5>Up to 2.5 kg</h5>
                          </li>
                          <li>
                            <h6>Maximum Take Off Weight:</h6>
                            <h5>Up to 15Kg</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="tech-purifier" role="tabpanel" aria-labelledby="tech-purifier-tab">
                <div className="row">
                  <div className="col-md-6">
                    <div className="tech-spec">
                      <div className="tech-spec-colm">
                        <ul>
                          <li>
                            <h6>Product:</h6>
                            <h5>Outdoor air purifier</h5>
                          </li>
                          <li className="tech-spec-row-bg">
                            <h6>Parameters:</h6>
                            <h5>PM2.5, PM10, Dust, Smoke</h5>
                          </li>
                          <li>
                            <h6>Filter Used:</h6>
                            <h5>Electrostatic Filter</h5>
                          </li>
                          <li className="tech-spec-row-bg">
                            <h6>Life of filter:</h6>
                            <h5>Very long durability</h5>
                          </li>
                          <li>
                            <h6>Filtration:</h6>
                            <h5>Ionizer, UV light</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tech-spec">
                      <div className="tech-spec-colm">
                        <ul>
                          <li>
                            <h6>Housing:</h6>
                            <h5>Weatherproof</h5>
                          </li>
                          <li className="tech-spec-row-bg">
                            <h6>CADR:</h6>
                            <h5>High efficient</h5>
                          </li>
                          <li>
                            <h6>Power Consumption:</h6>
                            <h5>Very less</h5>
                          </li>
                          <li className="tech-spec-row-bg">
                            <h6>Maintenance:</h6>
                            <h5>Very low-cost</h5>
                          </li>
                          <li>
                            <h6>Manpower:</h6>
                            <h5>Only one person can handle it.</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul className="download-brochure">
            <li>
              <h5>Need Detailed Specifications?</h5>
            </li>
            <li>
              <a href="https://www.pranaair.com/wp-content/uploads/2023/09/prana-air-smart-city-air-quality-solutions-brochure.pdf">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png" alt="" /> Download
                Brochure
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="our-client">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="our-clinet-heading">
                Our <span className="client-bold">Clientele</span>
              </h2>
            </div>
            <div className="col-md-6">
              <div className="our-client-para">
                <p>
                  Prana Air works with a wide range of organizations to provide air quality monitoring and solutions.
                  These organizations include government agencies, corporations, academic institutions, non-profit
                  organizations, and individuals. Our goal is to help its clients improve air quality and protect public
                  health.
                </p>
              </div>
            </div>
          </div>

          <div className="mob-row">
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/08/tata-company.png"
                alt="client logo"
                className="our-clients-logo"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/08/igcar-org.png"
                alt="client logo"
                className="our-clients-logo"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/08/microsoft-company.png"
                alt="client logo"
                className="our-clients-logo"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/08/emaar-company.png"
                alt="client logo"
                className="our-clients-logo"
              />
            </div>
          </div>

          <div className="mob-row">
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/08/l-and-t-company.png"
                alt="client logo"
                className="our-clients-logo"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/08/siemens-company.png"
                alt="client logo"
                className="our-clients-logo"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/08/jw-marriott.png"
                alt="client logo"
                className="our-clients-logo"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/08/bcg-group.png"
                alt="client logo"
                className="our-clients-logo"
              />
            </div>
          </div>

          <div className="mob-row">
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/08/ola-company.png"
                alt="client logo"
                className="our-clients-logo"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/08/mahindra-company.png"
                alt="client logo"
                className="our-clients-logo"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/08/renault-company.png"
                alt="client logo"
                className="our-clients-logo"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/08/neeri-company.png"
                alt="client logo"
                className="our-clients-logo"
              />
            </div>
          </div>
          <div className="mob-row">
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/08/taj-hotel.png"
                alt="client logo"
                className="our-clients-logo"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/08/foodworks.png"
                alt="client logo"
                className="our-clients-logo"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/08/asianpaints.png"
                alt="client logo"
                className="our-clients-logo"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/08/iit-institutes.png"
                alt="client logo"
                className="our-clients-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form" id="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="get-in-heading">
                Get in <span className="touch-bold">Touch</span>
              </h2>
            </div>
            <div className="col-md-6">
              <div className="get-in-touch-para">
                <p>Please help us know what requirements you have. Our team will contact you very soon.</p>
              </div>
            </div>
          </div>
          <ContactForm pageName="Cair Monitor Page" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="faq-heading">
                Frequently Asked Questions<span className="question-bold"> About Smart City Air Quality Solutions</span>
              </h2>
            </div>
            <div className="col-md-6">
              <div className="get-in-touch-para">
                <p>Have questions? Were here to help.</p>
              </div>
            </div>
          </div>

          <div className="accordion" id="faqAccordion">
            <div className="accordion-item my-tab-section">
              <h2 className="accordion-header" id="headingFaq1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFaq1"
                  aria-expanded="true"
                  aria-controls="collapseFaq1"
                >
                  <h4>1. What is Prana Airs smart city air quality monitoring and solutions project?</h4>
                </button>
              </h2>
              <div
                id="collapseFaq1"
                className="accordion-collapse collapse show"
                aria-labelledby="headingFaq1"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body faq-tab-para">
                  <p>
                    Prana Airs smart city air quality monitoring and solutions project is a comprehensive solution that
                    provides air quality monitors, air quality drones, outdoor air purifiers, and data dashboards to
                    help cities improve their air quality. The project is designed to help cities meet air quality
                    standards, protect public health, and reduce greenhouse gas emissions.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item my-tab-section">
              <h2 className="accordion-header" id="headingFaq2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFaq2"
                  aria-expanded="false"
                  aria-controls="collapseFaq2"
                >
                  <h4>
                    2. What are the benefits of Prana Airs smart city air quality monitoring and solutions project?
                  </h4>
                </button>
              </h2>
              <div
                id="collapseFaq2"
                className="accordion-collapse collapse"
                aria-labelledby="headingFaq2"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body faq-tab-para">
                  <p>
                    Prana Airs smart city air quality monitoring and solutions project offers a number of benefits,
                    including:
                  </p>
                  <p>
                    <strong>1. Improved air quality:</strong> The project can help cities improve their air quality by
                    providing real-time data on air quality levels and by implementing targeted interventions to reduce
                    pollution.
                  </p>
                  <p>
                    <strong>2. Protected public health:</strong> The project can help protect public health by providing
                    citizens with information about air quality levels and by alerting them to unhealthy conditions.
                  </p>
                  <p>
                    <strong>3. Reduced greenhouse gas emissions:</strong> The project can help reduce greenhouse gas
                    emissions by promoting the use of cleaner fuels and technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Add more FAQ items as needed */}
          </div>
        </div>
      </section>

      {/* Industrial Applications Section */}
      <section className="indusrtial-application">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="indusrial-heading">
                Industrial <span className="appli-bold">Applications</span>
              </h2>
            </div>
            <div className="col-md-6">
              <div className="our-client-para">
                <p>
                  Regardless of how small or large a business is, Prana Air offers a wide choice of Smart, affordable,
                  and highly accurate air quality solutions for various industries.
                </p>
              </div>
            </div>
          </div>

          <div className="owl-slider">
            <Carousel
              responsive={industrialResponsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div className="item">
                <div className="app_service_box">
                  <div className="app_img_bx">
                    <a href="https://www.pranaair.com/solutions-by-application/bank-financial-institutions/">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/air-quality-solutions-for-banks.jpg"
                        alt="air quality solutions for banks"
                      />
                    </a>
                  </div>
                  <a href="https://www.pranaair.com/solutions-by-application/bank-financial-institutions/">
                    <h4>Solutions for Bank</h4>
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="app_service_box">
                  <div className="app_img_bx">
                    <a href="https://www.pranaair.com/solutions-by-application/hotel-businesses/">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-hotel.jpg"
                        alt="air quality solutions for hotel business"
                      />
                    </a>
                  </div>
                  <a href="https://www.pranaair.com/solutions-by-application/hotel-businesses/">
                    <h4>Solutions for Hotel</h4>
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="app_service_box">
                  <div className="app_img_bx">
                    <a href="https://www.pranaair.com/solutions-by-application/restaurants/">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-restaurant.jpg"
                        alt="air quality solutions for restaurants"
                      />
                    </a>
                  </div>
                  <a href="https://www.pranaair.com/solutions-by-application/restaurants/">
                    <h4>Solutions for Restaurant</h4>
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="app_service_box">
                  <div className="app_img_bx">
                    <a href="https://www.pranaair.com/solutions-by-application/airports/">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-airport.jpg"
                        alt="air quality solutions for airport"
                      />
                    </a>
                  </div>
                  <a href="https://www.pranaair.com/solutions-by-application/airports/">
                    <h4>Solutions for Airport</h4>
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="app_service_box">
                  <div className="app_img_bx">
                    <a href="https://www.pranaair.com/solutions-by-application/fitness-center-gym/">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/04/air-quality-solution-for-fitness-gym.jpg"
                        alt="air quality solutions for fitness and gym"
                      />
                    </a>
                  </div>
                  <a href="https://www.pranaair.com/solutions-by-application/fitness-center-gym/">
                    <h4>Solutions for Fitness & Gym</h4>
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="app_service_box">
                  <div className="app_img_bx">
                    <a href="https://www.pranaair.com/solutions-by-application/parking-lot/">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/solution-for-parking-lot.jpg"
                        alt="prana air - air quality solutions for car parking lot"
                      />
                    </a>
                  </div>
                  <a href="https://www.pranaair.com/solutions-by-application/parking-lot/">
                    <h4>Solutions for Parking Lot</h4>
                  </a>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Bootstrap initialization script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Initialize all Bootstrap components
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
              return new bootstrap.Tooltip(tooltipTriggerEl);
            });
            
            // Handle slider buttons
            var sliderButtons = document.querySelectorAll('.slider-button');
            sliderButtons.forEach(function(button, index) {
              button.addEventListener('click', function() {
                // Remove active class from all buttons
                sliderButtons.forEach(function(btn) {
                  btn.classList.remove('active');
                });
                // Add active class to clicked button
                button.classList.add('active');
              });
            });
            
            // Set first slider button as active by default
            if (sliderButtons.length > 0) {
              sliderButtons[0].classList.add('active');
            }
          });
        `,
        }}
      />
    </main>
  )
}
