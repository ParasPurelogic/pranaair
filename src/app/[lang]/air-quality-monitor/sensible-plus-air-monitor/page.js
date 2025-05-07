'use client';

import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.css';
import ContactForm from "@/Components/Contacform/ContactForm";

export default function SensiblePlusAirMonitor() {
  // State for tabs
  const [activeBasicAdvancedTab, setActiveBasicAdvancedTab] = useState('Basic');
  const [activeAqiTab, setActiveAqiTab] = useState('AQI');

  // Carousel responsive settings
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => {
        console.log("Bootstrap JS loaded");
      })
      .catch((err) => console.error("Error loading Bootstrap JS:", err));
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div className="banner_section sensibel_banner_new">
        <div className="container">
          <div className="row">
            <div className="col-md-6 bannet_title_box sensible_banner sensible_plus_banner">
              <div className="sensibleplusbanner">
                <h2><span className="heading-bg">Sensible+</span> Air Monitor</h2>
                <p>Keep track of indoor air quality along-with ambient indoor & outdoor pollutants</p>
                <div className="banner-btns">
                  <form class="cart" action="https://www.pranaair.com/product/sensible-plus-air-monitor/" enctype="multipart/form-data"
                    method="post"><button class="single_add_to_cart_button button alt btnbuynow" name="add-to-cart" type="submit"
                      value="15945">Buy Now <img decoding="async"
                        src="https://www.pranaair.com/wp-content/uploads/2024/11/butnow-btn.png" alt="" /></button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 bannet_title_box sensible_banner hideatmobile"></div>
          </div>
        </div>
      </div>

      {/* Specification Box */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="specification_box monitor_box text-center">
              <h1 className="specification_heading">SENSIBLE+ AIR QUALITY MONITOR<sup><img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" /></sup></h1>
              <h3 className="aqi_heading">An intelligent smart portable indoor air pollution monitor to keep a tab over the air you breathe</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Tab AQI Section */}
      <div className="tab_aqi_section aqi_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="tabs-container">
                <div className="tabs-header">
                  <button
                    className={activeBasicAdvancedTab === 'Basic' ? 'active' : ''}
                    onClick={() => setActiveBasicAdvancedTab('Basic')}
                  >
                    Basic
                  </button>
                  <button
                    className={activeBasicAdvancedTab === 'Advanced' ? 'active' : ''}
                    onClick={() => setActiveBasicAdvancedTab('Advanced')}
                  >
                    Advanced
                  </button>
                </div>

                <div className="tabs-content">
                  {activeBasicAdvancedTab === 'Basic' && (
                    <section className="aqi_icon_section">
                      <div className="aqi_box">
                        <ul>
                          <li>
                            <h3><img src="https://www.pranaair.com/wp-content/uploads/2021/03/Pm10.png" alt="pm10 icon" /></h3>
                            <code>PM10</code>
                          </li>
                          <li>
                            <h3><img src="https://www.pranaair.com/wp-content/uploads/2021/03/pm2.5.png" alt="pm2.5 icon" /></h3>
                            <code>PM2.5</code>
                          </li>
                          <li>
                            <h3><img src="https://www.pranaair.com/wp-content/uploads/2021/03/co2.png" alt="co2 icon" /></h3>
                            <code>CO2</code>
                          </li>
                          <li className="icon_fix_size">
                            <h3><img src="https://www.pranaair.com/wp-content/uploads/2021/03/tvoc.png" alt="tvoc icon" /></h3>
                            <code>TVOC</code>
                          </li>
                          <li>
                            <h3><img src="https://www.pranaair.com/wp-content/uploads/2021/03/hcho.png" alt="hcho" /></h3>
                            <code>HCHO</code>
                          </li>
                          <li>
                            <h3><img src="https://www.pranaair.com/wp-content/uploads/2021/03/temperature-icon.png" alt="temperature icon" /></h3>
                            <code>Temperature</code>
                          </li>
                          <li className="icon_fix_size">
                            <h3><img src="https://www.pranaair.com/wp-content/uploads/2021/03/humidity-icon.png" alt="humidity icon" /></h3>
                            <code>Humidity</code>
                          </li>
                        </ul>
                      </div>
                      <div className="pranaair_img_box">
                        <img src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-plus-air-quality-monitor-1.jpg" alt="Prana Air sensible+ basic air pollution monitor" />
                      </div>
                    </section>
                  )}

                  {activeBasicAdvancedTab === 'Advanced' && (
                    <section className="aqi_icon_section">
                      <div className="aqi_box">
                        <ul>
                          <li>
                            <h3><img src="https://www.pranaair.com/wp-content/uploads/2021/03/Pm10.png" alt="pm10 icon" /></h3>
                            <code>PM10</code>
                          </li>
                          <li>
                            <h3><img src="https://www.pranaair.com/wp-content/uploads/2021/03/pm2.5.png" alt="pm2.5 icon" /></h3>
                            <code>PM2.5</code>
                          </li>
                          <li>
                            <h3><img src="https://www.pranaair.com/wp-content/uploads/2021/03/co.png" alt="co icon" /></h3>
                            <code>CO</code>
                          </li>
                          <li>
                            <h3><img src="https://www.pranaair.com/wp-content/uploads/2021/03/co2.png" alt="co2 icon" /></h3>
                            <code>CO2</code>
                          </li>
                          <li>
                            <h3><img src="https://www.pranaair.com/wp-content/uploads/2021/03/No2.png" alt="no2 icon" /></h3>
                            <code>NO2</code>
                          </li>
                          <li>
                            <h3><img src="https://www.pranaair.com/wp-content/uploads/2021/03/so2.png" alt="so2 icon" /></h3>
                            <code>SO2</code>
                          </li>
                          <li>
                            <h3><img src="https://www.pranaair.com/wp-content/uploads/2021/03/tvoc.png" alt="tvoc icon" /></h3>
                            <code>TVOC</code>
                          </li>
                          <li className="icon_fix_size">
                            <h3><img src="https://www.pranaair.com/wp-content/uploads/2021/03/temperature-icon.png" alt="temperature icon" /></h3>
                            <code>Temperature</code>
                          </li>
                          <li className="icon_fix_size">
                            <h3><img src="https://www.pranaair.com/wp-content/uploads/2021/03/humidity-icon.png" alt="humidity icon" /></h3>
                            <code>Humidity</code>
                          </li>
                        </ul>
                      </div>
                      <div className="pranaair_img_box">
                        <img src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-plus-air-quality-monitor-1.jpg" alt="Prana Air sensible+ advanced air pollution monitor" />
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monitor Section */}
      <div className="moniator_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="sensor_feature_list sensible_feature_list">
                <ul>
                  <li className="top_sensibel_space">
                    <small><img src="https://www.pranaair.com/wp-content/uploads/2021/03/real-time-air-quality.png" alt="real-time air quality graph" /></small>
                    Real-Time & Historic Air Quality Data (Hourly, Weekly & Monthly)
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="sensor_feature_list sensible_feature_list">
                <ul>
                  <li className="top_sensibel_space">
                    <small><img src="https://www.pranaair.com/wp-content/uploads/2021/03/wifi-connectivity.png" alt="wifi connectivity" /></small>
                    Easy Access of Data via Web & Mobile App Through WiFi Connection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monitor Section New */}
      <div className="moniator_sec monitor_sec_new">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="sensor_feature_list sensible_feature_list">
                <ul>
                  <li>
                    <small><img src="https://www.pranaair.com/wp-content/uploads/2021/03/monitor-battery.png" alt="monitor battery" /></small>
                    5000 mAh Inbuilt Battery Long Screen-Time
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sensor_feature_list sensible_feature_list">
                <ul>
                  <li>
                    <small><img src="https://www.pranaair.com/wp-content/uploads/2021/03/on-board.png" alt="micro sd card" /></small>
                    On-board Micro SD Card Data Storage
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sensor_feature_list sensible_feature_list">
                <ul>
                  <li>
                    <small><img src="https://www.pranaair.com/wp-content/uploads/2021/03/touch-screen.png" alt="touch screen" /></small>
                    7 inch Touch Screen To Have Smarter Access
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sensor_feature_list sensible_feature_list">
                <ul>
                  <li>
                    <small><img src="https://www.pranaair.com/wp-content/uploads/2021/03/typec-usb.png" alt="type-c cable" /></small>
                    Micro USB Charging Easily Recharging Cable
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Section */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p style={{ textAlign: 'center' }}>
              <em>
                <span style={{ fontSize: '16pt' }}>
                  <sup>
                    <span style={{ fontSize: '16pt' }}>
                      <sub><img className="alignnone size-full wp-image-52304" src="https://www.pranaair.com/wp-content/uploads/2022/07/compliance-icon.png" alt="compliance icon" width="30" height="30" /></sub>
                      {' '}Compliance with <span style={{ color: '#4cae51' }}><strong>LEED, WELL,</strong></span> and <span style={{ color: '#4cae51' }}><strong>ASHRAE</strong></span> standards
                    </span>
                  </sup>
                </span>
              </em>
            </p>
          </div>
        </div>
      </div>

      {/* Accuracy Section */}
      <div className="top_space_air">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="specification_box monitor_box text-center">
                <h2 className="specification_heading">Accuracy of Prana Air Monitor<img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" /></h2>
              </div>
              <div className="comparison_graph_img">
                <img className="aligncenter" src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-pm2.5-data-comparison-with-dusttrak.jpeg" alt="prana air monitor pm2.5 accuracy" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to connect section */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-plus-air-quality-monitor-1.jpg" alt="Sensible+ monitor" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="step-dots">
              <h2 className="specification_heading">How to connect SENSIBLE+ with dashboard?</h2>
              <button>
                <div>
                  <h5>1</h5>
                  <p>Click on the Settings icon and select Wi-Fi option.</p>
                </div>
              </button>
              <button>
                <div>
                  <h5>2</h5>
                  <p>Enter the required details and connect the device with Wi-Fi.</p>
                </div>
              </button>
              <button>
                <div>
                  <h5>3</h5>
                  <p>Keep Your Device on Graph Screen by pressing the touch button.</p>
                </div>
              </button>
              <button>
                <div>
                  <h5>4</h5>
                  <p>Download AQI India app and sign up.</p>
                </div>
              </button>
              <button>
                <div>
                  <h5>5</h5>
                  <p>Click Add Device and choose the Sensible+ monitor out of the options given.</p>
                </div>
              </button>
              <button>
                <div>
                  <h5>6</h5>
                  <p>Enter the Device ID or scan the QR code from the device screen.</p>
                </div>
              </button>
              <button>
                <div>
                  <h5>7</h5>
                  <p>Device is now connected.</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '14pt' }}><strong><span style={{ fontSize: '18pt' }}>Scan this QR Code to</span>
                <br />
                <img className="size-full wp-image-24466 aligncenter" src="https://www.pranaair.com/wp-content/uploads/2022/09/sensible-plus-monitor-manual.png" alt="prana air sensible+ air quality monitor manual" width="200" height="200" /></strong></span>
              <br />
              <span style={{ fontSize: '14pt' }}> <strong>Download Products Manual</strong></span>
            </p>
          </div>
          <div className="col-md-6">
            <p style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '18pt' }}><strong>Scan this QR Code to</strong></span>
              <br />
              <strong><img className="aligncenter wp-image-24465 size-full" src="https://www.pranaair.com/wp-content/uploads/2022/04/prana-air-sensible-plus-air-monitor-brochure-qr-code.png" alt="prana air sensible+ air quality monitor brochure" width="200" height="200" /></strong>
              <br />
              <span style={{ fontSize: '14pt' }}><strong>Download Products Brochure</strong></span>
            </p>
          </div>
        </div>
      </div>

      {/* AQI App & Dashboard */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="qualitymonitor_heading_box text-center">
              <h2>One-Stop Solution- AQI App & Dashboard <img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" /></h2>
            </div>
          </div>
        </div>
      </div>

      {/* Download App Section */}
      <div className="download_app_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="downloadapp_deail_box hidemobile">
                <h3>To get the updates about Air Quality near you, Download AQI App</h3>
                <p>To track the quality of air you inhale, download the AQI app on your iOS/Android device(s) and forget all your worries.
                  Download the app via Google Play Store (for Android), or Apple App Store (for iOS).</p>
                <a className="download_app_btn" href="https://apps.apple.com/in/app/air-quality-index-aqi-india/id1439684571">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/02/app-store.png" alt="App Store" />
                </a>
                <a className="download_app_btn" href="https://play.google.com/store/apps/details?id=com.aqi.data&hl=en">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/02/play-store.png" alt="Play Store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TV App Section */}
      <div className="tv_app_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="qualitymonitor_heading_box italic_para tv_app_box">
                <h2>Download AQI TV App<img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" /></h2>
                <p>Install our app in your smart TV, and connect your monitors to display air quality data on your television sets 24*7.</p>
                <a className="tv_app_btn" href="https://drive.google.com/file/d/1y9IBVJ_8zYclSKtfEYR7qhnMII5XQ-Ie/view?usp=sharing">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/03/tv-app.png" alt="AQI tv app" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src="https://www.pranaair.com/wp-content/uploads/2023/07/air-quality-data-on-aqi-tv-app.png" alt="air quality data on aqi tv app" />
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Slide Section */}
      <div className="dashboard_slide_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="qualitymonitor_heading_box web_heading text-center">
                <h2 style={{ textAlign: 'center' }}>AQI Web Dashboard<img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" /></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className="new-slider"
              >
                <div className="slide-img">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/05/aqi-web-dashboard-graph.png" alt="aqi-web-dashboard-graph.png" />
                </div>
                <div className="slide-img">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/05/aqi-web-dashboard-monitor-data-comparison.png" alt="aqi-web-dashboard-monitor-data-comparison" />
                </div>
                <div className="slide-img">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/05/aqi-web-dashboard-data-download.png" alt="aqi-web-dashboard-data-download" />
                </div>
                <div className="slide-img">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/05/aqi-web-dashboard-monitor-data.png" alt="aqi-web-dashboard-monitor-data" />
                </div>
                <div className="slide-img">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/05/aqi-web-dashboard-for-prana-air-monitor.png" alt="aqi-web-dashboard-for-prana-air-monitor" />
                </div>
                <div className="slide-img">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/05/aqi-web-dashboard-home-screen.png" alt="aqi-web-dashboard-home-screen" />
                </div>
                <div className="slide-img">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/05/aqi-web-dashboard-qr-code-scan.png" alt="aqi-web-dashboard-qr-code-scan" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Feature Section */}
      <div className="quality_feature_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <ul className="feature_quality_cntr">
                <li>
                  <div className="feature_sensor_box">
                    <small><img src="https://www.pranaair.com/wp-content/uploads/2021/03/historical-data.png" alt="historical data" /></small>
                    <div className="features_detail_box">
                      <h3>Real-time & Historical Data</h3>
                      <p>Access your citys data on real-time or historic air pollution parameters like AQI, PM2.5, PM10, Temperature, Humidity & Noise parameters anytime, anywhere.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="feature_sensor_box">
                    <small><img src="https://www.pranaair.com/wp-content/uploads/2021/03/Health-Recommendations.png" alt="Health Recommendations" /></small>
                    <div className="features_detail_box">
                      <h3>Health Recommendations</h3>
                      <p>Get health recommendations according to the current air quality. These will be particularly helpful to you on the days with high pollution levels.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="feature_sensor_box height_fix_sensor">
                    <small><img src="https://www.pranaair.com/wp-content/uploads/2021/03/Scan-the-QR.png" alt="Scan the QR" /></small>
                    <div className="features_detail_box">
                      <h3 className="smart_height_fix">Generate a Link/Scan the QR</h3>
                      <p>Share the live monitoring data externally by generating a link or a QR code.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="feature_sensor_box height_fix_sensor">
                    <small><img src="https://www.pranaair.com/wp-content/uploads/2021/03/Comprehensive-Air-Quality-Data.png" alt="Comprehensive Air Quality Data" /></small>
                    <div className="features_detail_box">
                      <h3>Comprehensive Air Quality Data</h3>
                      <p>Place AQI India widget on your home screen to view AQI information on the go.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="feature_sensor_box height_fix_sensor2">
                    <small><img src="https://www.pranaair.com/wp-content/uploads/2021/03/Reliable-Dashboard.png" alt="Reliable Dashboard" /></small>
                    <div className="features_detail_box">
                      <h3>Reliable Dashboard</h3>
                      <p>Log in to our exclusive AQI dashboard with your credentials for a reliable experience.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="feature_sensor_box height_fix_sensor2">
                    <small><img src="https://www.pranaair.com/wp-content/uploads/2021/03/Export-Data.png" alt="Export Data" /></small>
                    <div className="features_detail_box">
                      <h3>Export Data</h3>
                      <p>Export the air quality data of your device(s) in an Excel Sheet format for future reference.</p>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="feature_quality_cntr feature_width_auto">
                <li>
                  <div className="feature_sensor_box">
                    <small><img src="https://www.pranaair.com/wp-content/uploads/2021/03/Convergence-of-Multiple-Devices.png" alt="Convergence of Multiple Devices" /></small>
                    <div className="features_detail_box">
                      <h3>Convergence of Multiple Devices at one place</h3>
                      <p>Pair one or multiple Prana Air – Air Pollution Monitors with the dashboard through WiFi/GSM SIM connectivity.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="feature_sensor_box">
                    <small><img src="https://www.pranaair.com/wp-content/uploads/2021/03/Graphical-Representation.png" alt="Graphical Representation" /></small>
                    <div className="features_detail_box">
                      <h3>Graphical Representation for Comparative Ease</h3>
                      <p>Get graphical representation of air quality data for your ease. Also, you can compare multiple data and make inferences.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Check Your Air Pollution Data */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center" style={{ fontSize: '28px' }}>Check Your Air Pollution Data By Scan QR Code</h3>
            <p style={{ textAlign: 'center' }}>
              <img className="img-fluid" src="https://www.pranaair.com/wp-content/uploads/2021/06/check-air-pollution-by-qr-code-scan.gif" alt="check air pollution by qr code scan" />
            </p>
          </div>
        </div>
      </div>

      {/* Technical Specification */}
      <div className="padd-top-bot product-specifications table_sensible_cntr">
        <div className="container">
          <div className="row">
            <div className="col-12 product-slider-sec product-slider-first">
              <h2 className="specification_heading specific_head">Technical Specification <img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" /></h2>
              <div className="table_box">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th style={{ width: '195px', textAlign: 'center' }}>Parameter name</th>
                      <th style={{ width: '216px', textAlign: 'center' }}>Index</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Operating Temperature</td>
                      <td>5°C to 50°C [40°F to 122°F]</td>
                    </tr>
                    <tr>
                      <td>Storage temperature</td>
                      <td>-20°C to 60°C [-4° to 140°F]</td>
                    </tr>
                    <tr>
                      <td>Dimension</td>
                      <td>185 x 30 x 110 mm</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>475 gram</td>
                    </tr>
                    <tr>
                      <td>Power Supply</td>
                      <td>5V DC</td>
                    </tr>
                    <tr>
                      <td>Display</td>
                      <td>7 Inch Color LED Display [Touch Screen]</td>
                    </tr>
                    <tr>
                      <td>Connectivity</td>
                      <td>WiFi [2.4GHz]</td>
                    </tr>
                    <tr>
                      <td>Storage</td>
                      <td>Micro SD Card + Cloud Storage [AQI dashboard]</td>
                    </tr>
                    <tr>
                      <td>Mobile App</td>
                      <td>AQI India [iOS & android]</td>
                    </tr>
                    <tr>
                      <td>Battery</td>
                      <td>5000 mAh rechargeable battery</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="sensible_popup broucher_download_cntr text-center">
                <span style={{ fontSize: '12pt' }}>
                  <a href="/wp-content/uploads/2022/04/prana-air-sensible-plus-air-quality-monitor-brochure.pdf">Download Brochure</a>
                  <a href="/wp-content/uploads/2022/09/Prana-air-sensible-plus-monitor-manual.pdf">Download Manual</a>
                  <a className="btn btn-primary btnbuynow" href="#form">Request A Quote</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Applications */}
      <div className="discreet_section sensible_discreet solution_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="discreet_box text-center">
                <h2 className="specification_heading green_heading">Solution Applications <img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" /></h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Direction */}
      <div className="product_direction product_direction_bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sensible_cntr_point">
                <div className="row">
                  <div className="col-md-3">
                    <div className="sensible_point_box">
                      <img src="https://www.pranaair.com/wp-content/uploads/2021/03/PM2.jpg" alt="use of sensible+ monitor in office" />
                      <code>Office</code>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="sensible_point_box">
                      <img src="https://www.pranaair.com/wp-content/uploads/2021/03/Hotel.jpg" alt="use of sensible+ monitor in hotel" />
                      <code>Hotel</code>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="sensible_point_box">
                      <img src="https://www.pranaair.com/wp-content/uploads/2021/03/hospital.jpg" alt="use of sensible+ monitor in hospital" />
                      <code>Hospital</code>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="sensible_point_box">
                      <img src="https://www.pranaair.com/wp-content/uploads/2021/03/Factory.jpg" alt="use of sensible+ monitor in factory" />
                      <code>Factory</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq_section sensible_new_faq">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="specification_box monitor_box text-center">
                <h2 className="specification_heading">FAQs<img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" /></h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="accordian_section accordian_section2 sinitizer_faq_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      1. Which air quality parameters can be monitored by SENSIBLE+ ?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p style={{ textAlign: 'justify' }}>SENSIBLE+ is an indoor air quality monitor that effectively measures a wide range of primary and secondary air pollutants. It monitors and gives user the account of Air Quality Index (AQI), Temperature, Relative Humidity, PM (10, 2.5, and 1), CO<sub>2</sub>, and Total Volatile Organic Compounds (TVOCs) in the air around them.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      2. Is SENSIBLE+ monitor competent as per the international standards?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p style={{ textAlign: 'justify' }}>Yes. It has been curated with cutting edge technology, keeping national and international requirements in mind. SENSIBLE+ is compliant with the standards set by WELL, LEED, ISHRAE and WHO.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      3. Can I connect my device with Wi-Fi?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p style={{ textAlign: 'justify' }}>Yes. SENSIBLE+ comes with Wi-Fi connectivity. You can connect your device with the Wi-Fi of your place by accessing the Settings menu.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      4. Do I get any on-board storage with SENSIBLE+ ?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes. SENSIBLE+ comes with on-board micro-SD card storage.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      5. Can I connect my SENSIBLE+ with my Building Management System (BMS)?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p style={{ textAlign: 'justify' }}>Yes, absolutely. SENSIBLE+ air quality monitor is extremely versatile and flexible in terms of connectivity. It comes with RS-485 connectivity which renders it compatible with your BMS.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      6. How much does SENSIBLE+ monitor weigh?
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      SENSIBLE+ monitor weighs 475 gm (16.75 oz).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
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
      <ContactForm pageName="Sensible Plus Air Monitor Page" />

      {/* Product Compare Section */}
      <div className="product_compare_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 style={{ textAlign: 'center' }}><span className="nova-light" style={{ fontSize: '20pt' }}><strong className="nova-bold">You May Also Like Other</strong></span></h3>
              <p style={{ textAlign: 'center' }}><span style={{ fontSize: '18pt' }}>Air Quality Monitors</span><sup><img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" width="32" height="24" /></sup></p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product_compare_box">
                <a href="/air-quality-monitor/cair-monitor"><img src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-cair-monitor-indoor.jpeg" alt="prana air cair air quality monitor" /></a>
                <h3>CAIR+</h3>
              </div>
              <div className="product_compare_box">
                <a href="/air-quality-monitor/sensible-air-monitor"><img src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-monitor-on-table.jpg" alt="prana air sensible air quality monitor" /></a>
                <h3>Sensible</h3>
              </div>
              <div className="product_compare_box">
                <a href="/air-quality-monitor/squair-air-monitor"><img src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-squair-air-quality-monitor.jpg" alt="prana air squair air quality monitor" /></a>
                <h3>SQUAIR</h3>
              </div>
              <div className="product_compare_box">
                <a href="/air-quality-monitor/ambient-air-monitor"><img src="https://www.pranaair.com/wp-content/uploads/2022/06/prana-air-caaqms-ambient-air-quality-monitor.jpg" alt="prana air caaqms ambient air quality monitor" /></a>
                <h3>Ambient</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
