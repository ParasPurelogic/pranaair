'use client';

import React, { useState } from 'react';
import './style.css';
import ContactForm from "@/Components/Contacform/ContactForm";

export default function AirQualitySensors() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div>
      {/* Banner Section */}
      <div className="row monitor_banner_section" style={{ backgroundImage: "url('https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-quality-sensor-board.jpeg')" }}>
        <div className="col-md-12">
          <div className="monitor_banner_box">
            <h2><span style={{ fontSize: '24pt' }}>Prana Air</span></h2>
            <h2><span style={{ fontSize: '36pt' }}>Air Quality Sensors</span></h2>
            <span style={{ fontSize: '24pt' }}>Know the quality of the air you breathe.</span>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="qualitymonitor_heading_box air_first_heading text-center">
              <h1><span style={{ fontSize: '18pt' }}>Air Quality Sensor</span></h1>
              <span style={{ fontSize: '12pt' }}>Prana Air provides low-cost air quality analyzers for particulate matters &amp; gases,
                that speak durability and accuracy in volumes.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p style={{ textAlign: 'center' }}>Air quality sensors are used in air quality monitoring devices for both indoor and ambient environments. They can detect the presence of air pollution in air. The sensors are of different types and applications. Air pollution sensors are built for specific aspects of measuring particulate matters, carbon monoxide, ozone, sulfur dioxide, nitrous oxide, etc. In the past, the sensors were not easily affordable. Now, with the technological advancement, they become more and more affordable. The air pollution sensors have a very important role to understand and study the environmental issues.</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container tab_aqi_section">
        <div className="row">
          <div className="col-md-12">
            <ul className="nav nav-tabs">
              <li className={activeTab === 'all' ? 'active' : ''}>
                <a href="#" onClick={() => setActiveTab('all')}>All</a>
              </li>
              <li className={activeTab === 'pm' ? 'active' : ''}>
                <a href="#" onClick={() => setActiveTab('pm')}>PM</a>
              </li>
              <li className={activeTab === 'gases' ? 'active' : ''}>
                <a href="#" onClick={() => setActiveTab('gases')}>Gases</a>
              </li>
            </ul>

            <div className="tab-content">
              {activeTab === 'all' && (
                <div className="tab-pane active">
                  <div className="ui-tabs-panel">
                    <div className="pocket_monitor_box">
                      <div className="pocket_monitor_img">
                        <a href="#">
                          <img src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-co2-sensor.png" alt="prana air NDIR co2 sensor" width="100" height="100" />
                        </a>
                      </div>
                      <div className="monitor_detail_box">
                        <h3><a href="#">Carbon Dioxide (CO2) Sensor</a></h3>
                        <div className="rate_compare_box">₹9,990</div>
                        <ul className="product_feature_list">
                          <li>✓ Range: Upto 10,000 PPM</li>
                          <li>✓ Accuracy: ± 200 ppm ± 2%</li>
                          <li>✓ Resolution: 100 PPM</li>
                          <li>✓ Type of Sensor: NDIR sensor</li>
                        </ul>
                        <div className="monitor_btn_box">
                          <a className="monitor_know_btn" href="#">Know More</a>
                          <button className="single_add_to_cart_button button alt banner-btn">Buy Now</button>
                        </div>
                      </div>
                    </div>

                    <div className="pocket_monitor_box">
                      <div className="pocket_monitor_img">
                        <a href="#">
                          <img src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-co-sensor.png" alt="prana air co sensor" width="100" height="100" />
                        </a>
                      </div>
                      <div className="monitor_detail_box">
                        <h3><a href="#">Carbon Monoxide (CO) Sensor</a></h3>
                        <div className="rate_compare_box">₹9,990</div>
                        <ul className="product_feature_list">
                          <li>✓ Range: 500 PPM</li>
                          <li>✓ Power Consumption: 10 to 50 uW</li>
                          <li>✓ Resolution: 0.1 PPM</li>
                          <li>✓ Response Time: &lt; 30 seconds</li>
                        </ul>
                        <div className="monitor_btn_box">
                          <a className="monitor_know_btn" href="#">Know More</a>
                          <a className="monitor_know_btn monitor_card_btn" href="#">Buy Now</a>
                        </div>
                      </div>
                    </div>

                    <div className="pocket_monitor_box">
                      <div className="pocket_monitor_img">
                        <a href="#">
                          <img src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-so2-sensor.png" alt="prana air sulfur dioxide so2 sensor" width="100" height="100" />
                        </a>
                      </div>
                      <div className="monitor_detail_box">
                        <h3><a href="#">Sulful Dioxide SO2 Sensor</a></h3>
                        <div className="rate_compare_box">₹9,990</div>
                        <ul className="product_feature_list">
                          <li>✓ Range: 50 PPM</li>
                          <li>✓ Power Consumption: 10 to 50 uW</li>
                          <li>✓ Resolution: 0.01 PPM</li>
                          <li>✓ Response Time: &lt; 15 seconds</li>
                        </ul>
                        <div className="monitor_btn_box">
                          <a className="monitor_know_btn" href="#">Know More</a>
                          <a className="monitor_know_btn monitor_card_btn" href="#">Buy Now</a>
                        </div>
                      </div>
                    </div>

                    <div className="pocket_monitor_box">
                      <div className="pocket_monitor_img">
                        <a href="#">
                          <img src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-no2-sensor.png" alt="Prana Air indoor pm sensor" width="100" height="100" />
                        </a>
                      </div>
                      <div className="monitor_detail_box">
                        <h3><a href="#">Nitrogen Dioxide NO2 Sensor</a></h3>
                        <div className="rate_compare_box">₹Request on quote</div>
                        <ul className="product_feature_list">
                          <li>✓ PM Range: Upto 2000 μg/m3</li>
                          <li>✓ Particle Size Resolution: 0.3 μm</li>
                          <li>✓ Purpose: Indoor Monitors</li>
                          <li>✓ Working Temp.: -20~70 °C</li>
                        </ul>
                        <div className="monitor_btn_box">
                          <a className="monitor_know_btn" href="#">Know More</a>
                          <a className="monitor_know_btn monitor_card_btn" href="#">Buy Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'pm' && (
                <div className="tab-pane active">
                  <div className="ui-tabs-panel">
                    <div className="pocket_monitor_box">
                      <div className="pocket_monitor_img">
                        <a href="#">
                          <img src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-indoor-pm-sensor.png" alt="prana air indoor pm sensor" width="100" height="100" />
                        </a>
                      </div>
                      <div className="monitor_detail_box">
                        <h3><a href="#">Indoor PM Sensor</a></h3>
                        <div className="rate_compare_box">₹Request on quote</div>
                        <ul className="product_feature_list">
                          <li>✓ PM Range: Upto 0-2000 μg/m3</li>
                          <li>✓ Resolution: 0.3 μm</li>
                          <li>✓ Purpose: Indoor Monitors</li>
                          <li>✓ Working Temp.: -20~70 °C</li>
                        </ul>
                        <div className="monitor_btn_box">
                          <a className="monitor_know_btn" href="#">Know More</a>
                          <a className="monitor_know_btn monitor_card_btn" href="#">Buy Now</a>
                        </div>
                      </div>
                    </div>

                    <div className="pocket_monitor_box">
                      <div className="pocket_monitor_img">
                        <a href="#">
                          <img src="https://www.pranaair.com/wp-content/uploads/2021/03/outdoor-pm2.5-sensor.png" alt="Prana Air outdoor pm sensor" />
                        </a>
                      </div>
                      <div className="monitor_detail_box">
                        <h3><a href="#">Outdoor Air Monitor</a></h3>
                        <span className="rating_box">
                          <img src="https://www.pranaair.com/wp-content/uploads/2021/02/rating_img-1.png" alt="rating" />
                        </span>
                        <small className="price_tag">23%</small>
                        <div className="rate_compare_box">₹Request on quote</div>
                        <ul className="product_feature_list">
                          <li>✓ PM Range: Upto 31,000 μg/m3</li>
                          <li>✓ Resolution: 0.3 μm</li>
                          <li>✓ Purpose: Outdoor Monitors</li>
                          <li>✓ Working Temp.: -20~70 °C</li>
                        </ul>
                        <div className="monitor_btn_box">
                          <a className="monitor_know_btn" href="#">Know More</a>
                          <a className="monitor_know_btn monitor_card_btn" href="#">Buy Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'gases' && (
                <div className="tab-pane active">
                  <div className="ui-tabs-panel">
                    <div className="pocket_monitor_box">
                      <div className="pocket_monitor_img">
                        <a href="#">
                          <img src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-co2-sensor.png" alt="prana air NDIR co2 sensor" width="100" height="100" />
                        </a>
                      </div>
                      <div className="monitor_detail_box">
                        <h3><a href="#">Carbon Dioxide (CO2) Sensor</a></h3>
                        <span className="rating_box">
                          <img src="https://www.pranaair.com/wp-content/uploads/2021/02/rating_img-1.png" alt="rating" />
                        </span>
                        <small className="price_tag">23%</small>
                        <div className="rate_compare_box">₹9,990</div>
                        <ul className="product_feature_list">
                          <li>✓ Range: Upto 10,000 PPM</li>
                          <li>✓ Accuracy: ± 200 ppm ± 2%</li>
                          <li>✓ Resolution: 100 PPM</li>
                          <li>✓ Type of Sensor: NDIR sensor</li>
                        </ul>
                        <div className="monitor_btn_box">
                          <a className="monitor_know_btn" href="#">Know More</a>
                          <button className="single_add_to_cart_button button alt banner-btn">Buy Now</button>
                        </div>
                      </div>
                    </div>

                    <div className="pocket_monitor_box">
                      <div className="pocket_monitor_img">
                        <a href="#">
                          <img src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-co-sensor.png" alt="prana air co sensor" width="100" height="100" />
                        </a>
                      </div>
                      <div className="monitor_detail_box">
                        <h3><a href="#">Carbon Monoxide (CO) Sensor</a></h3>
                        <span className="rating_box">
                          <img src="https://www.pranaair.com/wp-content/uploads/2021/02/rating_img-1.png" alt="rating" />
                        </span>
                        <small className="price_tag">23%</small>
                        <div className="rate_compare_box">₹9,990</div>
                        <ul className="product_feature_list">
                          <li>✓ Range: 500 PPM</li>
                          <li>✓ Power Consumption: 10 to 50 uW</li>
                          <li>✓ Resolution: 0.1 PPM</li>
                          <li>✓ Response Time: &lt; 30 seconds</li>
                        </ul>
                        <div className="monitor_btn_box">
                          <a className="monitor_know_btn" href="#">Know More</a>
                          <a className="monitor_know_btn monitor_card_btn" href="#">Buy Now</a>
                        </div>
                      </div>
                    </div>

                    <div className="pocket_monitor_box">
                      <div className="pocket_monitor_img">
                        <a href="#">
                          <img src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-so2-sensor.png" alt="prana air sulfur dioxide so2 sensor" width="100" height="100" />
                        </a>
                      </div>
                      <div className="monitor_detail_box">
                        <h3><a href="#">Sulful Dioxide SO2 Sensor</a></h3>
                        <span className="rating_box">
                          <img src="https://www.pranaair.com/wp-content/uploads/2021/02/rating_img-1.png" alt="rating" />
                        </span>
                        <small className="price_tag">23%</small>
                        <div className="rate_compare_box">₹9,990</div>
                        <ul className="product_feature_list">
                          <li>✓ Range: 50 PPM</li>
                          <li>✓ Power Consumption: 10 to 50 uW</li>
                          <li>✓ Resolution: 0.01 PPM</li>
                          <li>✓ Response Time: &lt; 15 seconds</li>
                        </ul>
                        <div className="monitor_btn_box">
                          <a className="monitor_know_btn" href="#">Know More</a>
                          <a className="monitor_know_btn monitor_card_btn" href="#">Buy Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Prana Air Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="qualitymonitor_heading_box italic_para text-center">
              <h2>Why Should You Choose Prana Air Sensors ?</h2>
              <p>Prana Air has designed air quality sensors with finesse and precision for consumer- and industrial-grade safety monitoring.
                Our state-of-art sensors come packed with cutting-edge technology for detection of air contaminants.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="monitor_feature_box green_border">
              <img src="https://www.pranaair.com/wp-content/uploads/2021/03/structure-design-icon.png" alt="sensor structure design" />
              <h4>Structured Design</h4>
              <p style={{ textAlign: 'justify' }}>Prana Air sensors have an ultra-thin package and miniaturized design that enable them to fit in any kind of device or instrument. They are an apt choice for both portable devices and real-time outdoor monitoring.</p>
            </div>

            <div className="monitor_feature_box red_border">
              <img src="https://www.pranaair.com/wp-content/uploads/2021/03/highly-receptive-icon.png" alt="highly receptive icon" />
              <h4>Highly Receptive</h4>
              <p style={{ textAlign: 'justify' }}>The average response time of most of our gaseous sensors is less than 15 seconds rendering them robust and responsive. Hence, they are tailor-made for real-time monitoring for faster and precise results.</p>
            </div>

            <div className="monitor_feature_box yellow_border">
              <img src="https://www.pranaair.com/wp-content/uploads/2021/03/rohs-compliant-icon.png" alt="rohs compliant icon" />
              <h4>RoHS Compliant</h4>
              <p style={{ textAlign: 'justify' }}>Our sensors comply with the Restriction of Hazardous Substances Directive (RoHS) for electrical and electronic equipment.</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="monitor_feature_box purple_border">
              <img src="https://www.pranaair.com/wp-content/uploads/2021/03/sturdy-build-icon.png" alt="sensor sturdy built icon" />
              <h4>Sturdy-Built</h4>
              <p style={{ textAlign: 'justify' }}>The highly accurate air pollution sensors can monitor your air hassle-free for up to a decade. Lodge them in your instrument once and forget all your sensor-related worries.</p>
            </div>

            <div className="monitor_feature_box pink_border">
              <img src="https://www.pranaair.com/wp-content/uploads/2021/03/low-carbon-sensor-icon.png" alt="low carbon sensor icon" />
              <h4>Low-Carbon Sensors</h4>
              <p style={{ textAlign: 'justify' }}>Our air quality analyzers operate on low power input (0 mW at 0 mV bias). Therefore, these are energy-saving options that produce less carbon footprint. They take you one step closer to sustainability.</p>
            </div>

            <div className="monitor_feature_box blue_border">
              <img src="https://www.pranaair.com/wp-content/uploads/2021/03/individually-calibrated-sensor.png" alt="individually calibrated sensor" />
              <h4>Individually Calibrated</h4>
              <p style={{ textAlign: 'justify' }}>Individual calibration yields highly accurate readings for every device the sensors are lodged in. It makes sure that you obtain the readings with minimum error. Thus, our sensors are a reliable choice for precision.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h3 style={{ textAlign: 'center' }}><span style={{ fontSize: '18pt' }}>Prana Air Sensor Calibration</span></h3>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/yYrY2ws31-Y" allowFullScreen></iframe>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      {/* Data Accuracy Section */}
      <div className="row data_accuracy_section">
        <div className="col-md-6">
          <div className="quality_real_box">
            <h3>Most Accurate &amp; Low-Cost</h3>
            <h2>Prana Airs Monitors, Reliable Alternative to Costly Devices</h2>
            <a className="discover_btn" href="#">Discover Now</a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="dataauracy_img_box">
            <img src="https://www.pranaair.com/wp-content/uploads/2023/03/air-quality-data-accuracy.png" alt="air quality data accuracy" />
            <a className="discover_btn accuracy_btn" href="#">99% Accuracy</a>
          </div>
        </div>
      </div>

      {/* Accuracy Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="qualitymonitor_heading_box text-center">
              <h2>Accuracy of Prana Air Sensors</h2>
              <p>PM2.5 correlation with high-end instrument</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="comparison_graph_img">
              <img src="https://www.pranaair.com/wp-content/uploads/2021/03/pm2.5-comparison-BAM-vs-Prana-Air-sensor.png" alt="prana air quality sensor pm2.5 data accuracy" />
            </div>
          </div>
        </div>
      </div>

      {/* PCB Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="qualitymonitor_heading_box text-center">
              <h2>Air Quality PCBs</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p style={{ textAlign: 'center' }}>
              <a href="#">
                <img className="img-responsive center-block" src="https://www.pranaair.com/wp-content/uploads/2021/09/air-quality-sensor-pcb-board-scaled.jpg" alt="prana air quality sensor pcb board" />
              </a>
            </p>
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
      <ContactForm pageName="Air Quality Sensor Page" />

      {/* Trusted By Section */}
      <div className="row ourclient_section">
        <div className="col-md-12">
          <h2 style={{ textAlign: 'center' }}><span style={{ fontSize: '24pt' }}>Trusted By</span></h2>
          <p style={{ textAlign: 'center' }}><span style={{ fontSize: '18pt' }}>Some of the industrys top organisations</span></p>
        </div>
        <div className="col-md-12">
          <div className="our_client_box">
            <ul>
              <li><img src="https://www.pranaair.com/wp-content/uploads/2023/03/csir-logo.png" alt="Prana Air client csir" width="220" height="auto" /></li>
              <li><img src="https://www.pranaair.com/wp-content/uploads/2023/03/iit-varanasi-logo.png" alt="Prana Air client iit varanasi" width="220" height="auto" /></li>
              <li><img src="https://www.pranaair.com/wp-content/uploads/2023/03/iit-varanasi-logo.png" alt="Prana Air client iit roorkee" width="220" height="auto" /></li>
              <li><img src="https://www.pranaair.com/wp-content/uploads/2023/03/iit-hyderabad-logo.png" alt="Prana Air client iit hyderabad" width="220" height="auto" /></li>
              <li><img src="https://www.pranaair.com/wp-content/uploads/2023/03/iit-dhanbad-logo.png" alt="Prana Air client iit dhanbad" width="220" height="auto" /></li>
              <li><img src="https://www.pranaair.com/wp-content/uploads/2023/03/iit-bombay-logo.png" alt="Prana Air client iit bombay" width="220" height="auto" /></li>
              <li><img src="https://www.pranaair.com/wp-content/uploads/2023/03/dae-logo.png" alt="Prana Air client dae" width="220" height="auto" /></li>
              <li><img src="https://www.pranaair.com/wp-content/uploads/2023/03/ola-logo.png" alt="Prana Air client ola" width="220" height="auto" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
