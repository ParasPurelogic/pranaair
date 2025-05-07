"use client"

import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import ContactForm from "@/Components/Contacform/ContactForm";
export default function WeatherStation() {
  const [activeTab, setActiveTab] = useState(1);
  const [activeFaqTab, setActiveFaqTab] = useState(1);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const applicationsResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
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
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <video id="main-hero-video" autoPlay loop muted width="100%" height="100%">
                <source src="https://www.pranaair.com/wp-content/uploads/2024/10/Weather-station-banner-bg-page-video.mp4" type="video/mp4" />
              </video>
              <div className="row hero-mob-row">
                <div className="col-md-6">
                  <div className="hero-heading">
                    <h1>Weather Station</h1>
                    <p>Get accurate weather forecasts to predict weather conditions for different activities with stand-out features.</p>
                    <a className="hero-btn" href="#contact">
                      Request a Quote <img src="https://www.pranaair.com/wp-content/uploads/2024/06/button-icon.png" alt="button icon" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ambi-monitor-img">
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/10/Weather-station-mounted-on-a-pole.webp" alt="prana air weather station device" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="salinet-feture-sec">
        <div className="container">
          <div className="row br-line">
            <div className="col-md-5">
              <div className="salinet-feture-heading">
                <h2>Key Features of Automatic Weather Station</h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="sailent-feture-para">
                <p>Designed to provide users with a seamless monitoring experience. Get flexibility and adaptability to suit different requirements.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="salinet-feture-img">
                <img src="https://www.pranaair.com/wp-content/uploads/2024/10/mounted-weather-station-in-clear-sky.webp" alt="prana air weather station installation" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="sailent-feture-point">
                <ul>
                  <li>
                    <h3>Integrated Environmental Monitoring</h3>
                    <p>Combines Weather station with air quality monitoring</p>
                  </li>
                  <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/sailemt-feature-arrow.png" alt="icon" /></li>
                </ul>
              </div>
              <div className="sailent-feture-point">
                <ul>
                  <li>
                    <h3>In-built data logger</h3>
                    <p>Access the device data without a separate data logger</p>
                  </li>
                  <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/sailemt-feature-arrow.png" alt="icon" /></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sailent-feture-point">
                <ul>
                  <li>
                    <h3>Effortless Connectivity</h3>
                    <p>WiFi and GSM for seamless and reliable data</p>
                  </li>
                  <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/sailemt-feature-arrow.png" alt="icon" /></li>
                </ul>
              </div>
              <div className="sailent-feture-point">
                <ul>
                  <li>
                    <h3>Real-time Meteorological Data</h3>
                    <p>Access various meteorological parameters data</p>
                  </li>
                  <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/sailemt-feature-arrow.png" alt="icon" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parameters Section */}
      <section className="parameters-sec">
        <div className="container">
          <div className="row dark-br-line">
            <div className="col-md-5">
              <div className="salinet-feture-heading parameter-heading">
                <h2>Parameters It Can Measure</h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="sailent-feture-para parameter-para">
                <p>Measures meteorological parameters in your immediate surroundings to provide reliable data.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row mob-flex">
                <div className="col-6">
                  <ul className="patrameter-gif">
                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/Rainfall.gif" alt="rainfall icon" /></li>
                    <li>
                      <h3>Rainfall</h3>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="patrameter-gif">
                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/UV-index.gif" alt="uv index icon" /></li>
                    <li>
                      <h3>UV Index</h3>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mob-flex">
                <div className="col-6">
                  <ul className="patrameter-gif">
                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/Wind-speed.gif" alt="wind speed icon" /></li>
                    <li>
                      <h3>Wind Speed</h3>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="patrameter-gif">
                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/Wind-direction.gif" alt="wind speed icon" /></li>
                    <li>
                      <h3>Wind Direction</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mob-flex">
                <div className="col-6">
                  <ul className="patrameter-gif">
                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/Light.gif" alt="light icon" /></li>
                    <li>
                      <h3>Light (Lux)</h3>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="patrameter-gif">
                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/Solar-Radiance.gif" alt="solar radiance icon" /></li>
                    <li>
                      <h3>Solar Radiance</h3>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mob-flex">
                <div className="col-6">
                  <ul className="patrameter-gif">
                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/Humidity.gif" alt="humidity icon" /></li>
                    <li>
                      <h3>Humidity</h3>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="patrameter-gif">
                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/Temp.gif" alt="temperature icon" /></li>
                    <li>
                      <h3>Temperature</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity Section */}
      <section className="connectivety-sec">
        <div className="container">
          <div className="row br-line">
            <div className="col-md-5">
              <div className="salinet-feture-heading connectivety-heading">
                <h2>Connectivity</h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="sailent-feture-para connectivety-para">
                <p>Get effortless connectivity for seamless and reliable data transmission, ensuring constant access to data.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="connectivety-tab-box">
                <div className="connectivety-tab-title">
                  <ul className="connect-tab">
                    <li className="connect-tab-item">
                      <button
                        className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
                        onClick={() => setActiveTab(1)}
                        href="#wifi"
                      >
                        Wifi <i className="fas fa-arrow-right"></i>
                      </button>
                    </li>
                    <li className="connect-tab-item">
                      <button
                        className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
                        onClick={() => setActiveTab(2)}
                        href="#gsm"
                      >
                        GSM (Optional) <i className="fas fa-arrow-right"></i>
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="wifi">
                      <ul className="connectivity-box">
                        <li>
                          <div className="img-box"><img src="https://www.pranaair.com/wp-content/uploads/2024/06/weather-station-connectivity.webp" alt="prana air weather station connectivity" /></div>
                          <h3>Weather station</h3>
                        </li>
                        <li>
                          <div className="img-box"><img src="https://www.pranaair.com/wp-content/uploads/2024/06/wifi-connectivity.png" alt="wifi connectivity" /></div>
                          <h3>Wifi Connectivity</h3>
                        </li>
                        <li>
                          <div className="img-box"><img src="https://www.pranaair.com/wp-content/uploads/2024/06/aqi-colud-storage.png" alt="aqi cloud" /></div>
                          <h3>AQI Cloud Storage</h3>
                        </li>
                        <li>
                          <div className="img-box"><img src="https://www.pranaair.com/wp-content/uploads/2024/06/mob-app-web-dashborad.png" alt="prana air weather station WiFi connected to aqi cloud" /></div>
                          <h3>Data Accessibility via Mobile App, Web Dashboard and TV App</h3>
                        </li>
                      </ul>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`} id="gsm">
                      <ul className="connectivity-box">
                        <li>
                          <div className="img-box"><img src="https://www.pranaair.com/wp-content/uploads/2024/06/weather-station-connectivity.webp" alt="prana air weather station connectivity" /></div>
                          <h3>Weather station</h3>
                        </li>
                        <li className="gsm">
                          <div className="img-box"><img src="https://www.pranaair.com/wp-content/uploads/2024/06/gsm-connectivity.png" alt="gsm connectivity" /></div>
                          <h3>GSM Connectivity</h3>
                        </li>
                        <li>
                          <div className="img-box"><img src="https://www.pranaair.com/wp-content/uploads/2024/06/aqi-colud-storage.png" alt="aqi cloud" /></div>
                          <h3>AQI Cloud Storage</h3>
                        </li>
                        <li>
                          <div className="img-box"><img src="https://www.pranaair.com/wp-content/uploads/2024/06/mob-app-web-dashborad.png" alt="prana air weather station GSM connected to aqi cloud" /></div>
                          <h3>Data Accessibility via Mobile App, Web Dashboard and TV App</h3>
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

      {/* Durability Section */}
      <section className="durability-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="durability-heading">
                <h2>Durability to ensure longevity</h2>
                <p>The weather station withstands various environmental conditions, from extreme heat to cold, rain, and even snow.</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="durability-slider">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={4000}
                  className="durability-slider"
                >
                  <div className="durability-slider-img">
                    <img className="weather-img" src="https://www.pranaair.com/wp-content/uploads/2024/10/Weather-station-rander.webp" alt="Weather-station-rander" />
                  </div>
                  <div className="durability-slider-img">
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/10/Side-view-of-the-weather-station.webp" alt="prana air weather station durability" />
                  </div>
                  <div className="durability-slider-img">
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/10/Top-view-of-the-weather-station.webp" alt="prana air weather station durability" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Convert into air quality Section */}
      <section className="convert-into-air-quality-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="convert-into-air-quality-heading">
                <h2><strong>Convert into air quality monitor</strong> with weather station.</h2>
              </div>
            </div>
          </div>
          <div className="row row-flex">
            <div className="col-md-6">
              <div className="weather-staition-variant">
                <h3>Variant 1 <span className="weahter-st">(Weather Station)</span></h3>
                <ul>
                  <li>Rainfall</li>
                  <li>UV Index</li>
                  <li>Light (Lux)</li>
                  <li>Solar Radiance</li>
                  <li>Wind Speed</li>
                  <li>Wind Direction</li>
                  <li>Humidity</li>
                  <li>Temperature</li>
                </ul>
              </div>
              <div className="weather-staition-variant variant2">
                <h3>Variant 2 <span className="weahter-st">(Weather Station with Air Quality Monitor)</span></h3>
                <ul>
                  <li>Rainfall</li>
                  <li>UV Index</li>
                  <li>Light (Lux)</li>
                  <li>Solar Radiance</li>
                  <li>Wind Speed</li>
                  <li>Wind Direction</li>
                  <li>AQI</li>
                  <li>PM1</li>
                  <li>PM2.5</li>
                  <li>PM10</li>
                  <li>H2S</li>
                  <li>O3</li>
                  <li>TVOC</li>
                  <li>CO</li>
                  <li>CO2</li>
                  <li>SO2</li>
                  <li>NO</li>
                  <li>NO2</li>
                  <li>Humi.</li>
                  <li>Temp.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="covert-weather-station-img">
                <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Weather-Station-variant.png" alt="prana air weather station variants" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hyper Local Networks Section */}
      <section className="hyper-local-networks-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hyper-local-networks-img">
                <img src="https://www.pranaair.com/wp-content/uploads/2024/10/Hyper-Local-Networks.webp" alt="prana air weather station used at hyperlocal network" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="hyper-local-networks-para">
                <h2>Hyper-Local Networks</h2>
                <p>Facilitating real-time data for governments, businesses, and individuals to proactively prepare and respond to adverse weather conditions.</p>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      {/* Various Applications Section */}
      <section className="various-applications-sec">
        <div className="container">
          <div className="row br-line">
            <div className="col-md-5">
              <div className="various-applications-heaidng">
                <h2>Various Applications</h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="various-applications-para">
                <p>Weather station data plays a pivotal role in numerous sectors by providing essential information crucial for decision-making and operations.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid visbel">
          <div className="row">
            <div className="col-12">
              <Carousel
                responsive={applicationsResponsive}
                infinite={true}
                autoPlay={true}
                className="various-applications-slider"
              >
                <div className="various-applications-slider-img">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Urban-Planning-and-Infrastructure.jpg" alt="use of weather station for Urban Planning and Infrastructure" />
                  <h3>Urban Planning and Infrastructure:</h3>
                  <p>Weather station data can be used in smart city solutions and construction project planning for better safety.</p>
                </div>
                <div className="various-applications-slider-img">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Education-and-Research.jpg" alt="use of weather station for Public Safety" />
                  <h3>Public Safety:</h3>
                  <p>Real-time weather data can enhance public safety measures and can also issue health advisories accordingly.</p>
                </div>
                <div className="various-applications-slider-img">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Sports-and-outdoor-activities.jpg" alt="use of weather station for Sports and outdoor activities" />
                  <h3>Sports and outdoor activities:</h3>
                  <p>Weather station data can be used for planning outdoor activities and managed as per weather disruptions.</p>
                </div>
                <div className="various-applications-slider-img">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/06/education-and-research.webp" alt="use of weather station for education and research " />
                  <h3>Education and Research:</h3>
                  <p>Researchers can use weather data for scientific studies. The data can also help educational institutions.</p>
                </div>
                <div className="various-applications-slider-img">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Environmental-Monitoring.jpg" alt="use of weather station for Environmental Monitoring" />
                  <h3>Environmental Monitoring</h3>
                  <p>Air quality and weather data can help in environmental protection and wildlife management.</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className="thunder-video-box">
                <video id="thunder-video" autoPlay loop muted width="100%" height="100%">
                  <source src="https://www.pranaair.com/wp-content/uploads/2024/06/Video-for-wether-station-page.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AQI Mobile App Section */}
      <section className="aqi-mob-app-sec">
        <div className="container">
          <div className="row br-line part-line">
            <div className="col-12">
              <div className="various-applications-heaidng app-heading">
                <h2>AQI Mobile App</h2>
              </div>
            </div>
          </div>
          <div className="row app-bg">
            <div className="col-md-7">
              <div className="mob-app-img">
                <img src="https://www.pranaair.com/wp-content/uploads/2024/06/aqi-moobile-app.png" alt="prana air weather station mobile app" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="mob-app-txt">
                <h3>Real-Time Weather Data on Your Smartphone</h3>
                <p>Get real-time data of your weather station on your smartphone for seamless connectivity.</p>
                <a className="ios" href="https://apps.apple.com/tt/app/aqi/id1439684571">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/06/apple-app-icon.png" alt="ios icon" /> Download for <strong>iOS</strong>
                </a>
                <a className="anndro" href="https://play.google.com/store/apps/details?id=com.aqi.data">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/06/android-app-icon.png" alt="android iconn" /> Download for <strong>android</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Monitoring Section */}
      <section className="environmental-monitoring-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="environmental-monitoring-txt">
                <h2>Environmental Monitoring</h2>
                <h3>with precision of weather station</h3>
                <p>Advanced Monitoring of Key Weather Parameters in Diverse Outdoor Areas.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="environmental-monitoring-img">
                <img src="https://www.pranaair.com/wp-content/uploads/2024/10/weather-station-in-an-open-land.webp" alt="weather station in open land" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Dashboard Section */}
      <section className="web-dashboard-sec">
        <div className="container-fluid">
          <div className="row mob-dash-row">
            <div className="col-md-7">
              <div className="web-dash-img">
                <img src="https://www.pranaair.com/wp-content/uploads/2024/06/web-dashboard.jpg" alt="prana air weather station dashboard" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="inner-mob-row">
                <div className="web-dash-row">
                  <ul>
                    <li><img className="web-dash-device-img" src="https://www.pranaair.com/wp-content/uploads/2024/06/temperature-card.png" alt="temperature data on mobile app" /></li>
                    <li><img className="web-dash-device-img" src="https://www.pranaair.com/wp-content/uploads/2024/06/uv-index-card.png" alt="uv index data on mobile app" /></li>
                  </ul>
                  <ul>
                    <li><img className="web-dash-device-img" src="https://www.pranaair.com/wp-content/uploads/2024/06/solar-irradiance-card.png" alt="solar irradiance data in mobile app" /></li>
                    <li><img className="web-dash-device-img" src="https://www.pranaair.com/wp-content/uploads/2024/06/rainfall-card.png" alt="rainfall data on mobile app" /></li>
                  </ul>
                </div>
                <div className="web-dash-txt">
                  <h3>Web Dashboard</h3>
                  <h4>Enhanced Device Insights</h4>
                  <p>Access the device data on the web dashboard for better insight.</p>
                  <a href="https://www.aqi.in/userlogin" target="_blank" rel="noopener">
                    Login Dashboard <img src="https://www.pranaair.com/wp-content/uploads/2024/06/wifi-icon.png" alt="wifi icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TV App Section */}
      <section className="tv-app-sec">
        <div className="container">
          <div className="row tv-br-line">
            <div className="col-md-6">
              <div className="tv-app-heading">
                <h2><img src="https://www.pranaair.com/wp-content/uploads/2024/06/tv-app-icon.png" alt="tv app icon" /> TV App Integration</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tv-app-para">
                <p>Enables easy and customize environmental data monitoring with TV app feature to display the data on your television.</p>
                <a className="apple-btn" href="https://play.google.com/store/apps/details?id=com.aqitv.aqitvnew">
                  Download for <span className="iso">TV</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row theme-line">
            <div className="col-md-4">
              <div className="multi-themes">
                <ul>
                  <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/multiple-themes.png" alt="theme icon" /></li>
                  <li>
                    <h3>Multiple themes</h3>
                    <p>Choose from multiple ranges of themes</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="multi-themes">
                <ul>
                  <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/control-via-mobile-app.png" alt="app connectivity icon" /></li>
                  <li>
                    <h3>Control via mobile app</h3>
                    <p>Integrated and controlled via the AQI mobile app</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="multi-themes">
                <ul>
                  <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/compare-data.png" alt="data comparison icon" /></li>
                  <li>
                    <h3>Compare data</h3>
                    <p>Compare weather parameters data of two locations.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tv-app-theme-img">
                <img src="https://www.pranaair.com/wp-content/uploads/2024/06/tv-app-integration.jpg" alt="prana air weather station data on smart TV app" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parts & Label Section */}
      <div className="container">
        <div className="row br-line part-line">
          <div className="col-md-5">
            <div className="various-applications-heaidng">
              <h2>Parts &amp; Label</h2>
            </div>
          </div>
          <div className="col-md-7">
            <div className="various-applications-para">
              <p>Access real-time, hyper-local weather data and go beyond basic forecasts to stay informed.</p>
            </div>
          </div>
        </div>
      </div>
      <section className="part-label-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="parts-label-img">
                <img src="https://www.pranaair.com/wp-content/uploads/2024/10/Parts-Label.webp" alt="parts and labels of prana air weather station" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prana Air Ambient Section */}
      <section className="prana-air-ambient-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="web-dash-txt pranaair-ambient-txt">
                <h3>Ambient Air Monitor</h3>
                <p>Prana Air ambient air quality monitor for precision monitoring &amp; accurate insights</p>
                <a href="#">Know More <img src="https://www.pranaair.com/wp-content/uploads/2024/06/wifi-icon.png" alt="icon" /></a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="prana-air-ambient-img">
                <img src="https://www.pranaair.com/wp-content/uploads/2024/06/prana-air-ambient-air-quality-monitor.webp" alt="prana air ambient air quality monitor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Box Section */}
      <section className="whats-inside-box-sec">
        <div className="container">
          <div className="row tv-br-line">
            <div className="col-md-6">
              <div className="tv-app-heading whats-inside-heading">
                <h2>Whats Inside the Box</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tv-app-para whats-inside-para">
                <p>Inspect the weather station box contents to ensure everything needed for an easy installation is included.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="inside-box">
                <ul>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Weather-Station.png" alt="Weather Station" />
                    <h4>Weather Station</h4>
                  </li>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Tool-Pouch.png" alt="Tool Pouch" />
                    <h4>Tool Pouch</h4>
                  </li>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Rain-GaugeRain-Gauge.png" alt="Rain Gauge" />
                    <h4>Rain Gauge</h4>
                  </li>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Pole-1.png" alt="Pole" />
                    <h4>Pole</h4>
                  </li>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Attachment-Belt.png" alt="Attachment Belt" />
                    <h4>Attachment Belt</h4>
                  </li>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Cable-Adapter.png" alt="Cable & Adapter" />
                    <h4>Cable &amp; Adapter</h4>
                  </li>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Antenna.png" alt="Antenna" />
                    <h4>Antenna</h4>
                  </li>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Wind-Vane-1.png" alt="Wind Vane" />
                    <h4>Wind Vane</h4>
                  </li>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Anemometer.png" alt="Anemometer" />
                    <h4>Anemometer</h4>
                  </li>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/06/UClamp.png" alt="U-Clamp" />
                    <h4>U- Clamp</h4>
                  </li>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Pole-Mounting-Bracket.png" alt="Pole Mounting Bracket" />
                    <h4>Pole Mounting Bracket</h4>
                  </li>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Air-Quality-Monitor-inside-box.png" alt="Air Quality Monitor" />
                    <h4>Air Quality Monitor</h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                      What kind of data can I collect from the weather station?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                      Weather station measures various meteorological parameters including temperature, humidity, wind speed and direction, rainfall and many more.
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
                      Can I access the weather stations real-time data remotely?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                      Yes, accessing the weather station’s real-time data is possible with remote monitoring capabilities.
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
                      Is the weather station durable against harsh weather?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                      Yes, the weather station is designed to resist various environmental conditions.
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
                      Do I have to install air quality monitors for air monitoring with the weather station?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                    With Prana Air weather station, you can turn the device into air quality monitoring system with the advanced variant.
                    </div>
                  </div>
                </div>
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
        <ContactForm pageName="Weather Station Monitor Page" />
      </section>

      {/* You May Also Like Section */}
      <section className="also-like-sec">
        <div className="container">
          <div className="row line-also">
            <div className="col-md-6">
              <div className="also-like-heading">
                <h2>You may also like</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row mob-row-like">
            <div className="col-md-3">
              <div className="also-like-img">
                <a className="also-like-link" href="/air-quality-monitor/handheld/pocket-monitor">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Pocket-PM.jpg" alt="prana air Pocket PM2.5 monitor" />
                </a>
                <ul>
                  <li>Pocket PM</li>
                  <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/sailemt-feature-arrow.png" alt="icon" /></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="also-like-img">
                <a className="also-like-link" href="/air-quality-monitor/cair-monitor">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Cair.jpg" alt="prana air Cair+ air quality monitor" />
                </a>
                <ul>
                  <li>Cair+</li>
                  <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/sailemt-feature-arrow.png" alt="icon" /></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="also-like-img">
                <a className="also-like-link" href="/air-quality-monitor/sensible-air-monitor">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/06/prana-air-sensible-air-monitor.webp" alt="prana air sensible indoor air quality monitor" />
                </a>
                <ul>
                  <li>Sensible</li>
                  <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/sailemt-feature-arrow.png" alt="icon" /></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="also-like-img">
                <a className="also-like-link" href="/air-quality-monitor/weather-station#">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Ambient-pro.jpg" alt="prana air Ambient pro air quality monitor" />
                </a>
                <ul>
                  <li>Ambient pro</li>
                  <li><img src="https://www.pranaair.com/wp-content/uploads/2024/06/sailemt-feature-arrow.png" alt="icon" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
