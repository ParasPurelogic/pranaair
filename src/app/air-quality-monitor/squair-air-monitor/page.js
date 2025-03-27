'use client';

import React, { useState, useEffect } from 'react';
import './style.css';

export default function SquairMonitor() {
  const [activeTab, setActiveTab] = useState('squair-lite');
  const [showPollutants, setShowPollutants] = useState(false);

  // Function to handle tab switching
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  // Function to toggle pollutants visibility
  const togglePollutants = () => {
    setShowPollutants(!showPollutants);
  };

  // Initialize particles.js when component mounts
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined' && window.particlesJS) {
      window.particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 355,
            "density": {
              "enable": true,
              "value_area": 789.1476416322727
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            }
          },
          "opacity": {
            "value": 0.48927153781200905,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 0.2,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 4,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 8,
              "size_min": 0,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 83.91608391608392,
              "size": 1,
              "duration": 3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="squairMonitorbanner-content">
                <h3>Prana Air</h3>
                <h1>SQUAIR <span className="heading-sub">Air Quality Monitor</span></h1>
                <p>Know your harmful air pollutants with a smart indoor air quality monitoring device</p>
                <div className="banner-btn">
                  <form className="cart" action="https://www.pranaair.com/product/squair-air-monitor/" encType="multipart/form-data" method="post">
                    <button className="single_add_to_cart_button button alt bg-btn bg-green" name="add-to-cart" type="submit" value="20807">Buy Now</button>
                  </form>
                  <a className="bg-btn bg-green" href="#request_a_quote">Get A Quote</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src="https://www.pranaair.com/wp-content/uploads/2021/12/prana-air-indoor-squair-air-quality-monitor.png" alt="SQUAIR Air Quality Monitor" className="squair-monitor-img" />
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="container squairProductTabs" id="pdngT0">
        <div className="row cntrtxt">
          <div className="col-md-12">
            <div className="squairMonitorContent">
              <h2 style={{ textAlign: 'center' }}>SQUAIR (IAQ) Air Quality Monitor</h2>
              <p style={{ textAlign: 'center' }}>SQUAIR monitor is a smart indoor air quality monitoring device that can detect particulate matters and gas parameters. It detects PM10, PM2.5, CO, CO<sub>2</sub>, O<sub>3</sub>, NO<sub>2</sub>, SO<sub>2</sub>, TVOC, HCHO, noise, light, temperature & humidity. The monitor comes with two product variants like SQUAIR Lite & SQUAIR Pro which have a few different sensors inside the monitor.</p>
              <p style={{ textAlign: 'center' }}>The monitor also gives an alert system when the air quality around you is good, poor, or unhealthy. You can easily find out what quality of the air you are breathing in your house or office and control the alert system from the <strong>AQI mobile app</strong>.</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="row">
          <div className="col-md-12">
            <div className="video-container">
              <iframe 
                width="100%" 
                height="500" 
                src="https://www.youtube.com/embed/vKTDgUu1K_E" 
                title="SQUAIR Air Quality Monitor" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="row squairMonitorContent">
          <div className="col-md-12">
            <h3 style={{ textAlign: 'center' }}>What Does Prana Air SQUAIR Air Monitor Offer?</h3>
          </div>
        </div>

        <div className="squair-monitor-feature-pointer">
          <div className="square-customeResponsive">
            <img src="https://www.pranaair.com/wp-content/uploads/2021/04/icon-realtime-SQUAIR.png" alt="Real-time Air Quality" />
            <h5 style={{ textAlign: 'center' }}>Real-time Air Quality</h5>
            <p style={{ textAlign: 'center', color: '#adadad' }}>Get the real-time air pollution data of your monitor with the various air quality parameters anytime.</p>
          </div>
          <div className="square-customeResponsive">
            <img src="https://www.pranaair.com/wp-content/uploads/2021/04/icon-reliable-web-SQUAIR.png" alt="Web Dashboard" />
            <h5 style={{ textAlign: 'center' }}>Reliable Web Dashboard Accessibility</h5>
            <p style={{ textAlign: 'center', color: '#adadad' }}>Explore our exclusive web dashboard and enjoy the amazing features like download data, scan QR code, link generation, and comparison with graphical representations.</p>
          </div>
          <div className="square-customeResponsive">
            <img src="https://www.pranaair.com/wp-content/uploads/2021/04/icon-app-enabled-SQUAIR.png" alt="Mobile App" />
            <h5 style={{ textAlign: 'center' }}>Mobile & Smart TV App Enabled</h5>
            <p style={{ textAlign: 'center', color: '#adadad' }}>Get access to real-time & historic data with graphical representations, health recommendations, and many other features via AQI mobile & smart TV apps.</p>
          </div>
          <div className="square-customeResponsive">
            <img src="https://www.pranaair.com/wp-content/uploads/2021/04/icon-versatile-SQUAIR.png" alt="Connectivity" />
            <h5 style={{ textAlign: 'center' }}>Versatile Connectivity</h5>
            <p style={{ textAlign: 'center', color: '#adadad' }}>Wide range of connectivity options based on GSM, Wi-Fi, and RS-485 connection. Be assured to manage your indoor environment smartly.</p>
          </div>
          <div className="square-customeResponsive">
            <img src="https://www.pranaair.com/wp-content/uploads/2021/04/icon-sd-card-SQUAIR.png" alt="SD Card" />
            <h5 style={{ textAlign: 'center' }}>Micro SD-Card Data Storage</h5>
            <p style={{ textAlign: 'center', color: '#adadad' }}>Just insert your micro SD-card into the monitor to facilitate the continuous storage of all the air quality data for future use.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 square-customeResponsive">
            <p style={{ textAlign: 'center' }}>
              <em>
                <span style={{ fontSize: '17pt' }}>
                  <sup>
                    <span style={{ fontSize: '17pt' }}>
                      <sub>
                        <img className="alignnone size-full" src="https://www.pranaair.com/wp-content/uploads/2022/07/compliance-icon.png" alt="compliance icon" width="30" height="30" />
                      </sub> Compliance with <span style={{ color: '#4cae51' }}><strong>LEED, WELL,</strong></span> and <span style={{ color: '#4cae51' }}><strong>ASHRAE</strong></span> standards
                    </span>
                  </sup>
                </span>
              </em>
            </p>
          </div>
        </div>
      </div>

      {/* Tutorial Video */}
      <div className="container-fluid popup-tutorial popup-tutorial-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="video-container">
                <iframe 
                  width="100%" 
                  height="500" 
                  src="https://www.youtube.com/embed/QS2pE69EZdI" 
                  title="SQUAIR Air Quality Monitor Tutorial" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Air Quality Index Ranges */}
      <div className="container top_space_air" id="top_space_air">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: 'center' }}>Air Quality Index Ranges</h3>
            <table className="squair-quality-ranges">
              <tbody>
                <tr>
                  <td className="brdr grn">
                    <h5>0-50</h5>
                    Good
                  </td>
                  <td className="brdr ylw">
                    <h5>51-100</h5>
                    Moderate
                  </td>
                  <td className="brdr orng">
                    <h5>101-200</h5>
                    Poor
                  </td>
                  <td className="brdr pnk">
                    <h5>201-300</h5>
                    Unhealthy
                  </td>
                  <td className="brdr jmni">
                    <h5>301-400</h5>
                    Severe
                  </td>
                  <td className="brdr red">
                    <h5>401-500<sup>+</sup></h5>
                    Hazardous
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Squair Variants */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="squair-variant-heading">
              <h2>Squair Variants</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="squair-variant-para">
              <p>Prana Air indoor air quality monitors use advanced sensors for real-time tracking of indoor air pollutants, delivering a thorough insight into your indoor air quality.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs for Squair Variants */}
      <div className="container-fluid tab-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="squair-variant-tab">
                <ul className="nav nav-tabs">
                  <li className={activeTab === 'squair-lite' ? 'active squair-variant-title current' : 'squair-variant-title'}>
                    <a href="#squair-lite" onClick={() => handleTabChange('squair-lite')}>Squair lite</a>
                  </li>
                  <li className={activeTab === 'squair' ? 'active squair-variant-title current' : 'squair-variant-title'}>
                    <a href="#squair" onClick={() => handleTabChange('squair')}>Squair</a>
                  </li>
                  <li className={activeTab === 'squair-pro' ? 'active squair-variant-title current' : 'squair-variant-title'}>
                    <a href="#squair-pro" onClick={() => handleTabChange('squair-pro')}>Squair Pro</a>
                  </li>
                </ul>

                <div className="tab-content">
                  {activeTab === 'squair-lite' && (
                    <div className="tab-pane active" id="squair-lite">
                      <div className="row">
                        <div className="col-md-4 squair-bg">
                          <div className="squair-img">
                            <div className="mob-boxx">
                              <img src="https://www.pranaair.com/wp-content/uploads/2024/01/pranaair-squair-lite.png" alt="pranaair SQUAIR lite" />
                              <h4>Squair <span className="pro">Lite</span></h4>
                            </div>
                            <ul>
                              <li><a href="#request_a_quote">Get a quote</a></li>
                              <li><a href="https://www.pranaair.com/wp-content/uploads/2023/04/prana-air-squair-lite-air-monitor-brochure.pdf">
                                <img src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png" alt="icon" /> Brochure</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-8 squair-parameter-bg">
                          <div className="squair-parameters">
                            <p className="parameter-para">Squair Lite is, an affordable air quality monitor, a compact version of Prana Air Squair with essential features. Ideal for those prioritizing both functionality and cost.</p>

                            <h4>Parameters :</h4>
                            <ul className="parameter-list">
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/AQI-parameter.png" alt="AQI parameter" />
                                  <span className="parameter-data">AQI</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/PM1-para.png" alt="PM1 para" />
                                  <span className="parameter-data">PM1</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/PM2.5-parameter.png" alt="PM2.5 parameter" />
                                  <span className="parameter-data">PM2.5</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/PM10-parameter.png" alt="PM10 parameter" />
                                  <span className="parameter-data">PM10</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/parmeter-CO2.png" alt="CO2 parameter" />
                                  <span className="parameter-data">CO2</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/TVOC-parameter.png" alt="TVOC parameter" />
                                  <span className="parameter-data">TVOC</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/PARTICLE-COUNT-0.5-parameter.png" alt="PARTICLE COUNT (0.5) parameter" />
                                  <span className="parameter-data">Particles<br />Count</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/Humidity-parameter.png" alt="Humidity parameter" />
                                  <span className="parameter-data">Humi.</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/TEMPERATURE-parameter.png" alt="TEMPERATURE parameter" />
                                  <span className="parameter-data">Temp.</span>
                                </span>
                              </li>
                            </ul>
                            <h4>Connectivity :</h4>
                            <ul className="connect-list">
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/wifi-connect.png" alt="" />
                                  Wifi
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'squair' && (
                    <div className="tab-pane active" id="squair">
                      <div className="row">
                        <div className="col-md-4 squair-bg">
                          <div className="squair-img">
                            <div className="mob-boxx">
                              <img src="https://www.pranaair.com/wp-content/uploads/2024/01/pranaair-squair.png" alt="pranaair SQUAIR" />
                              <h4>Squair</h4>
                            </div>
                            <ul>
                              <li><a href="#request_a_quote">Get a quote</a></li>
                              <li><a href="https://www.pranaair.com/wp-content/uploads/2023/04/prana-air-squair-air-monitor-brochure.pdf">
                                <img src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png" alt="icon" /> Brochure</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-8 squair-parameter-bg">
                          <div className="squair-parameters">
                            <p className="parameter-para">Prana Air Squair offers real-time indoor air quality monitoring, featuring sensors for a detailed understanding of your indoor environment.</p>

                            <h4>Parameters :</h4>
                            <ul className="parameter-list">
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/AQI-parameter.png" alt="AQI parameter" />
                                  <span className="parameter-data">AQI</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/PM1-para.png" alt="PM1 para" />
                                  <span className="parameter-data">PM1</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/PM2.5-parameter.png" alt="PM2.5 parameter" />
                                  <span className="parameter-data">PM2.5</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/PM10-parameter.png" alt="PM10 parameter" />
                                  <span className="parameter-data">PM10</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/parmeter-CO2.png" alt="CO2 parameter" />
                                  <span className="parameter-data">CO2</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/HCHO-parameter.png" alt="HCHO parameter" />
                                  <span className="parameter-data">HCHO</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/TVOC-parameter.png" alt="TVOC parameter" />
                                  <span className="parameter-data">TVOC</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/PARTICLE-COUNT-0.5-parameter.png" alt="PARTICLE COUNT (0.5) parameter" />
                                  <span className="parameter-data">Particles<br />Count</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/Humidity-parameter.png" alt="Humidity parameter" />
                                  <span className="parameter-data">Humi.</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/TEMPERATURE-parameter.png" alt="TEMPERATURE parameter" />
                                  <span className="parameter-data">Temp.</span>
                                </span>
                              </li>
                            </ul>
                            <h4>Connectivity :</h4>
                            <ul className="connect-list">
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/wifi-connect.png" alt="" />
                                  Wifi
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/RS485.png" alt="" />
                                  RS-485
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/GSM.png" alt="GSM" />
                                  GSM (Optional)
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'squair-pro' && (
                    <div className="tab-pane active" id="squair-pro">
                      <div className="row">
                        <div className="col-md-4 squair-bg">
                          <div className="squair-img">
                            <div className="mob-boxx">
                              <img src="https://www.pranaair.com/wp-content/uploads/2024/08/pranaair-Squair-pro-monitor.png" alt="pranaair SQUAIR Pro" />
                              <h4>Squair <span className="pro">Pro</span></h4>
                            </div>
                            <ul>
                              <li><a href="#request_a_quote">Get a quote</a></li>
                              <li><a href="#">
                                <img src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png" alt="" /> Brochure</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-8 squair-parameter-bg">
                          <div className="squair-parameters">
                            <p className="parameter-para">Squair Pro, an advanced variant in Prana Air Squair series, prioritizing precision and high-performance air quality monitoring with enhanced sensors and extra features.</p>

                            <h4>Parameters :</h4>
                            <ul className="parameter-list">
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/AQI-parameter.png" alt="AQI parameter" />
                                  <span className="parameter-data">AQI</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/PM1-para.png" alt="PM1 para" />
                                  <span className="parameter-data">PM1</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/PM2.5-parameter.png" alt="PM2.5 parameter" />
                                  <span className="parameter-data">PM2.5</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/PM10-parameter.png" alt="PM10 parameter" />
                                  <span className="parameter-data">PM10</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/parmeter-CO2.png" alt="CO2 parameter" />
                                  <span className="parameter-data">CO2</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/HCHO-parameter.png" alt="HCHO parameter" />
                                  <span className="parameter-data">HCHO</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/TVOC-parameter.png" alt="TVOC parameter" />
                                  <span className="parameter-data">TVOC</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/PARTICLE-COUNT-0.5-parameter.png" alt="PARTICLE COUNT (0.5) parameter" />
                                  <span className="parameter-data">Particles<br />Count</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/parmeter-CO.png" alt="CO parameter" />
                                  <span className="parameter-data">CO</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/parmeterNO2.png" alt="SO2 parameter" />
                                  <span className="parameter-data">SO2</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/parmeter-SO2.png" alt="NO2" />
                                  <span className="parameter-data">NO2</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/SO2-2-parameter.png" alt="SO2-2 parameter" />
                                  <span className="parameter-data">H2S</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/NH3-parameter.png" alt="NH3 parameter" />
                                  <span className="parameter-data">NH3</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/parmeter-O3.png" alt="O3 parameter" />
                                  <span className="parameter-data">O3</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/Lightv-parameter.png" alt="Lightv parameter" />
                                  <span className="parameter-data">Light</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/Noise-parameter.png" alt="Noise parameter" />
                                  <span className="parameter-data">Noise</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/Humidity-parameter.png" alt="Humidity parameter" />
                                  <span className="parameter-data">Humi.</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/TEMPERATURE-parameter.png" alt="TEMPERATURE parameter" />
                                  <span className="parameter-data">Temp.</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/O2-parameter.png" alt="O2 parameter" />
                                  <span className="parameter-data">O2</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/Pressure-parameter.png" alt="Pressure parameter" />
                                  <span className="parameter-data">Pressure</span>
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/CH4-parameter.png" alt="CH4 parameter" />
                                  <span className="parameter-data">CH4 <span className="op">(optional)</span></span>
                                </span>
                              </li>
                            </ul>
                            <h4>Connectivity :</h4>
                            <ul className="connect-list">
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/wifi-connect.png" alt="wifi-connect" />
                                  Wifi
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/Lora.png" alt="Lora" />
                                  LORA
                                </span>
                              </li>
                              <li>
                                <span className="para-flex">
                                  <img src="https://www.pranaair.com/wp-content/uploads/2024/01/RS485.png" alt="RS485" />
                                  RS-485
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <p style={{ textAlign: 'center' }}>
              <strong>
                <span style={{ fontSize: '18pt' }}>Scan this QR Code to</span>
                <img className="aligncenter" src="https://www.pranaair.com/wp-content/uploads/2022/04/prana-air-squair-air-monitor-manual-qr-code.png" alt="prana air squair air monitor manual QR code" width="200" height="200" />
                <span style={{ fontSize: '14pt' }}>Download Manual</span>
              </strong>
            </p>
          </div>
          <div className="col-md-3">
            <p style={{ textAlign: 'center' }}>
              <strong>
                <span style={{ fontSize: '18pt' }}>Scan this QR Code to</span>
                <img className="aligncenter" src="https://www.pranaair.com/wp-content/uploads/2022/04/prana-air-squair-air-monitor-brochure-qr-code.png" alt="prana air squair air monitor brochure qr code" width="200" height="200" />
                <span style={{ fontSize: '14pt' }}>Download Brochure</span>
              </strong>
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

      {/* Use Cases Image */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src="https://www.pranaair.com/wp-content/uploads/2021/05/use-of-squair-air-quality-monitor.jpeg" alt="use of Prana Air SQUAIR air quality monitor" width="100%" className="displaynone550" />
          </div>
        </div>
      </div>

      {/* Indoor Air Quality Monitoring */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: 'center' }}><span style={{ fontSize: '17pt' }}>Indoor Air Quality Monitoring</span></h3>
            <p style={{ textAlign: 'center', color: '#adadad', padding: '0 5%' }}>
              <span style={{ fontSize: '13pt' }}>
                Indoor air pollution is a big matter of concern and an environmental risk to our health. 80-90% of the time, People stay indoors at home and working places. Due to this huge exposure to harmful indoor air quality, there are 3.8 million premature deaths annually caused only by indoor (household) air pollution according to WHO. This impact is not only limited to rural homes, but also to modern housing in urban cities. There are causes and effects of indoor air contamination like cooking, cleaning chemicals, paints, smoking, dust, etc., how a building is ventilated, room temperature, dampness, and condensation.
              </span>
            </p>
            <p style={{ textAlign: 'center', color: '#adadad', padding: '0 5%' }}>
              <span style={{ fontSize: '13pt' }}>
                Some of the main pollutants like particulate matter - (PM1, PM2.5, PM10), CO, TVOC, Formaldehyde, CO2, NO2, etc. are to measure and control from sources inside the building and drawn outdoor. Prana Air uses low-cost, highly responsive, compact design, energy-efficient, and RoHS compliant air quality sensors in our air quality monitoring devices to detect these air pollutants.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Monitor Connectivity Process */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: 'center' }}>Monitor Connectivity Process</h3>
            <img src="https://www.pranaair.com/wp-content/uploads/2021/12/squair-air-quality-monitor-connectivity-process.jpg" alt="prana air SQUAIR indoor air quality monitor connectivity process" width="100%" className="displaynone550" />
          </div>
        </div>
      </div>

      {/* Comparison Chart */}
      <div className="container" id="comparison-chart">
        <div className="row">
          <div className="col-md-12">
            <h4 style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '16pt' }}>Prana Air PM2.5 Data Accuracy Level</span>
              <br />
              <span style={{ fontSize: '16pt' }}>Comparison Chart With BAM</span>
            </h4>
            <img src="https://www.pranaair.com/wp-content/uploads/2021/04/BAM-VS-PRANA-AIR-PM2-squair.png" alt="BAM VS PRANA AIR PM2 accuracy comparison chart" width="100%" />
          </div>
        </div>
      </div>

      {/* See the Invisible Air Pollutants */}
      <div className="container-fluid squair-polluted-after-before" id="squair-polluted-after-before">
        <div className="row">
          <div className="col-md-12">
            <h4 style={{ textAlign: 'center' }}><strong><span style={{ fontSize: '16pt' }}>See the Invisible Air Pollutants</span></strong></h4>
            <div className="pollutionParticlesHoverEffect">
              <img src="https://www.pranaair.com/wp-content/uploads/2021/05/indoor-air-pollutants.jpeg" alt="invisible indoor air pollutants" width="100%" />
              <input 
                type="button" 
                name="type" 
                id="pollutedeffectBtn" 
                value={showPollutants ? 'Hide the invisible' : 'See the invisible'} 
                onClick={togglePollutants} 
              />
              <div id="pollutedOnHover" style={{ opacity: showPollutants ? 1 : 0 }}>
                <img src="https://www.pranaair.com/wp-content/uploads/2021/05/squair-polution-paticle-name.png" alt="indoor air pollutants" width="100%" className="motion-css" />
                <img src="https://www.pranaair.com/wp-content/uploads/2021/05/invisible-air-pollutants-of-indoor-pollution.jpeg" alt="invisible air pollutants of indoor pollution" width="100%" />
                <div id="particles-js"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile App Section */}
      <div className="container-fluid squairMonitorMobilebanner">
        <div className="row">
          <div className="col-md-6">
            <img src="https://www.pranaair.com/wp-content/uploads/2021/05/squair-monitor-connects-to-AQI-mobile-app.png" alt="AQI Mobile App" className="squairMonitorMobile" />
          </div>
          <div className="col-md-6 squairMonitorMobilebanner-content">
            <h3 style={{ textAlign: 'right', color: '#fff' }}>To get the updates about Air Quality near you, Download AQI India app</h3>
            <p style={{ textAlign: 'right', color: '#adadad' }}>To track the quality of the air you inhale, download the AQI India app on your iOS/Android device(s) and forget all your worries. Download the app via Google Play Store (for Android), or Apple App Store (for iOS).</p>
            <p className="appICONS" style={{ textAlign: 'right' }}>
              <a href="https://play.google.com/store/apps/details?id=com.aqi.data&hl=en">
                <img className="brdr" src="https://www.pranaair.com/wp-content/uploads/2021/05/squair-monitor-connects-to-AQI-mobile-app.png" alt="google playstore icon " />
              </a> 
              <a href="https://apps.apple.com/in/app/air-quality-index-aqi-india/id1439684571">
                <img className="brdr" src="https://www.pranaair.com/wp-content/uploads/2021/04/squair-apple-store.png" alt="app store icon" />
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Web Dashboard Section */}
      <div className="container webDashboardSquareSection">
        <div className="row">
          <div className="col-md-6 lptopSection">
            <img src="https://www.pranaair.com/wp-content/uploads/2021/05/web-dashboard.jpeg" alt="Web Dashboard" />
          </div>
          <div className="col-md-6 SquairContentSectionLaptrop">
            <h3 style={{ textAlign: 'left' }}>Real-time & Historical Data</h3>
            <p style={{ textAlign: 'left', color: '#adadad' }}>Access the real-time or historic air pollution data with AQI, PM2.5, PM10, Temperature, Humidity & Noise parameters of your city anytime, anywhere.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 lptopSection">
            <img src="https://www.pranaair.com/wp-content/uploads/2021/05/web-dashboard.jpeg" alt="Web Dashboard" />
          </div>
          <div className="col-md-6 SquairContentSectionLaptrop">
            <h3 style={{ textAlign: 'left' }}>Reliable Dashboard</h3>
            <p style={{ textAlign: 'left', color: '#adadad' }}>Log in to the web dashboard and explore the amazing features. It provides meaningful and more understandable monitor data.</p>
          </div>
        </div>
      </div>

      {/* TV App Section */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <a href="https://www.aqi.tv">
              <img src="https://www.pranaair.com/wp-content/uploads/2021/05/AQI-TV-App-for-prana-air-squair-monitor.jpeg" alt="AQI TV App for prana air squair monitor" width="100%" className="dsplyOfff768" />
            </a>
          </div>
        </div>
      </div>

      {/* QR Code Scan */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: 'center', fontSize: '30px' }}>Scan QR Code & Check the Air Quality Around You</h3>
            <img className="alignnone size-full" src="https://www.pranaair.com/wp-content/uploads/2021/06/air-quality-dat-by-qr-code-scan.gif" alt="air quality data by qr code scan" width="1280" height="720" />
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container contact_senitizer_section sensible_conact_section contact_monitor_sec" id="request_a_quote">
        <div className="row">
          <div className="col-md-6">
            <div className="contact_img_box">
              <img className="alignleft" src="https://www.pranaair.com/wp-content/uploads/2021/05/contact-us-image.jpeg" alt="contact us image" width="600" height="538" />
            </div>
          </div>
          <div className="col-md-6">
            <h4><span style={{ fontSize: '16pt' }}><strong>Request A Quote</strong></span></h4>
            <p>Contact us for more details about the air pollution monitoring devices.</p>
            <p>Drop a message</p>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <input type="tel" className="form-control" placeholder="Your Phone" />
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>


      {/* FAQ Section */}
      <div className="container-fluid squairMonitorFaq" style={{ backgroundImage: "url(/wp-content/uploads/2021/04/faqBg-square.jpg)" }}>
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: 'center', color: '#fff' }}>Frequently Asked Questions</h3>
            <div className="panel-group" id="faqAccordion">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#faqAccordion" href="#faq1">
                      1. What air quality parameters are measured by SQUAIR Monitor?
                    </a>
                  </h4>
                </div>
                <div id="faq1" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <p style={{ textAlign: 'justify' }}>SQUAIR is an indoor air quality monitor that effectively measures a wide range of primary and secondary air pollutants.</p>
                    <p><strong>Parameters:</strong></p>
                    <p><strong>SQUAIR+ (Lite):</strong> PM 2.5, PM 10, CO2, TVOC, HCHO, Noise, Light, Temperature, Humidity</p>
                    <p><strong>SQUAIR+ (Pro):</strong> PM 2.5, PM 10, CO, O3, CO2, SO2, NO2, TVOC, Noise, Light, Temperature, Humidity</p>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#faqAccordion" href="#faq2">
                      2. Is SQUAIR monitor competent as per the international standards?
                    </a>
                  </h4>
                </div>
                <div id="faq2" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p style={{ textAlign: 'justify' }}>Yes. It has been curated with cutting-edge technology, keeping national and international requirements in mind. SQUAIR is compliant with the standards set by WELL, LEED, ISHRAE, and WHO.</p>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#faqAccordion" href="#faq3">
                      3. How can I connect my monitor to get the data?
                    </a>
                  </h4>
                </div>
                <div id="faq3" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p style={{ textAlign: 'justify' }}>Yes. You can connect your SQUAIR monitor through Wi-Fi, GSM SIM, and RS-485 connectivity. Go through the above video on this page about the whole process of connectivity process.</p>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#faqAccordion" href="#faq4">
                      4. Do I get any on-board storage with SQUAIR?
                    </a>
                  </h4>
                </div>
                <div id="faq4" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Yes. SQUAIR monitor comes with on-board micro-SD card storage.</p>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#faqAccordion" href="#faq5">
                      5. Can I connect my SQUAIR monitor with my Building Management System (BMS)?
                    </a>
                  </h4>
                </div>
                <div id="faq5" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p style={{ textAlign: 'justify' }}>Yes, absolutely. the monitor is extremely versatile and flexible in terms of connectivity. It comes with RS-485 connectivity which renders it compatible with your BMS.</p>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#faqAccordion" href="#faq6">
                      6. How much does SQUAIR monitor weigh?
                    </a>
                  </h4>
                </div>
                <div id="faq6" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>SQUAIR monitor weighs 475 gm (16.75 oz).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="container product_compare_section">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: 'center' }}><span className="nova-light" style={{ fontSize: '20pt' }}><strong className="nova-bold">You May Also Like Other</strong></span></h3>
            <p style={{ textAlign: 'center' }}><span style={{ fontSize: '18pt' }}>Air Quality Monitors</span><sup><img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" width="32" height="24" /></sup></p>
          </div>
        </div>
        <div className="row">
          <div className="product_compare_box">
            <a href="#">
              <img src="https://www.pranaair.com/wp-content/uploads/2021/03/pocket-monitor-in-outdoor.jpeg" alt="prana air pocket air quality monitor" />
            </a>
            <h3>Pocket+</h3>
          </div>
          <div className="product_compare_box">
            <a href="#">
              <img src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-cair-monitor-indoor.jpeg" alt="prana air cair air quality monitor" />
            </a>
            <h3>CAIR+</h3>
          </div>
          <div className="product_compare_box">
            <a href="#">
              <img src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-monitor-on-table.jpg" alt="prana air sensible air quality monitor" />
            </a>
            <h3>Sensible</h3>
          </div>
          <div className="product_compare_box">
            <a href="#">
              <img src="https://www.pranaair.com/wp-content/uploads/2021/03/Sensible-air-monitor-on-table.jpg" alt="prana air sensible plus air quality monitor" />
            </a>
            <h3>Sensible+</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
