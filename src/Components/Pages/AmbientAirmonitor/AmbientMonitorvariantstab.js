"use client"

import Image from "next/image"

export default function AmbientMonitorVariantsTab() {
  return (
    <div className="row tab-sections">
      <div className="col-lg-9">
        {/* Tab Content */}
        <div className="tab-content" id="ambientTabsContent">
          <div
            className="tab-pane fade show active"
            id="ambient-pm-content"
            role="tabpanel"
            aria-labelledby="ambient-pm-tab"
          >
            <div className="color-box">
              <div className="ambient-pm-content">
                <h3>Ambient PM</h3>
                <p>
                  It is the basic ambient monitor that measures AQI, PM2.5, PM10, temperature, and humidity providing a
                  comprehensive overview of the air quality around you.
                </p>
                <h4>Features</h4>
              </div>

              <div className="drone-icon-list">
                <ul>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/low-cost-icon.png"
                      alt="low cost icon"
                      width={50}
                      height={50}
                    />
                    <p>Low-cost real-time air quality monitoring</p>
                  </li>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/compact-device.png"
                      alt="compact device"
                      width={50}
                      height={50}
                    />
                    <p>Compact and lightweight design</p>
                  </li>
                </ul>

                <ul>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/weatherproof-icon.png"
                      alt="weatherproof icon"
                      width={50}
                      height={50}
                    />
                    <p>Fully Waterproof Housing</p>
                  </li>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/portable-icon.png"
                      alt="portable icon"
                      width={50}
                      height={50}
                    />
                    <p>Portable and easy to carry anywhere</p>
                  </li>
                </ul>
              </div>

              <div className="aqi-data">
                <ul>
                  <li>
                    <h5>AQI</h5>
                  </li>
                  <li>
                    <h5>PM1</h5>
                  </li>
                  <li>
                    <h5>PM2.5</h5>
                  </li>
                  <li>
                    <h5>PM10</h5>
                  </li>
                  <li>
                    <h5>Temp.</h5>
                  </li>
                  <li>
                    <h5>Humid.</h5>
                  </li>
                  <li>
                    <h5>Noise</h5>
                  </li>
                </ul>
              </div>
            </div>

            <div className="get-brochur">
              <ul>
                <li>
                  <a href="https://www.pranaair.com/wp-content/uploads/2024/06/construction-site-Prana-Air-Air-quality-monitor-brochure.pdf">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                      alt="download brochure"
                      width={22}
                      height={22}
                    />
                    Brochure
                  </a>
                </li>
                <li>
                  <a href="#contact_form">Get a Quote</a>
                </li>
              </ul>
            </div>

            <div className="show-container">
              <button
                className="showbutton"
                data-bs-toggle="collapse"
                data-bs-target="#londonDetails"
                aria-expanded="false"
                aria-controls="londonDetails"
              >
                View Details
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
              </button>
              <div className="collapse" id="londonDetails">
                <div className="contentmy">
                  <h3>Ambient PM</h3>
                  <p>
                    Prana Air Ambient PM Basic Monitor is a comprehensive solution for measuring air quality. It
                    accurately measures PM2.5, PM10, temperature, and humidity, providing you with valuable insights
                    into the air you breathe. With an optional weather station, you can also gain data on wind speed,
                    wind direction, rainfall, and barometric pressure. The compact and portable design of the Prana Air
                    Ambient PM Basic Monitor makes it easy to use anywhere. The clear and easy-to-read screen displays
                    real-time data, and built-in data logging allows you to track trends over time. Cloud connectivity
                    provides remote access to data, so you can stay informed about air quality even when youe not on
                    site.
                  </p>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Prana-Air-Ambient-PM-Basic-Monitors.webp"
                    alt="prana air ambient air quality monitor for constructions site"
                    width={800}
                    height={400}
                  />
                </div>
                <button
                  className="close-btn hidebutton"
                  data-bs-toggle="collapse"
                  data-bs-target="#londonDetails"
                  aria-expanded="true"
                  aria-controls="londonDetails"
                >
                  Close
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                    alt="close icon"
                    width={18}
                    height={18}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="prana-sense-content" role="tabpanel" aria-labelledby="prana-sense-tab">
            <div className="color-box">
              <div className="ambient-pm-content">
                <h3>Prana Sense</h3>
                <p>
                  Revolutionizing Air Quality Monitoring with cutting-edge technology for better accuracy and
                  reliability with seamless connectivity and comprehensive data access.
                </p>
                <h4>Features</h4>
              </div>

              <div className="drone-icon-list">
                <ul>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/low-cost-icon.png"
                      alt="low cost icon"
                      width={50}
                      height={50}
                    />
                    <p>Low-cost real-time air quality monitoring</p>
                  </li>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/weatherproof-icon.png"
                      alt="weatherproof icon"
                      width={50}
                      height={50}
                    />
                    <p>Fully Waterproof Housing</p>
                  </li>
                </ul>

                <ul>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/10/solar-powered.png"
                      alt="solar powered"
                      width={50}
                      height={50}
                    />
                    <p>Solar Powered</p>
                  </li>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/10/battery-backup.png"
                      alt="battery-backup icon"
                      width={50}
                      height={50}
                    />
                    <p>96h Battery Backup</p>
                  </li>
                </ul>
              </div>

              <div className="aqi-data">
                <ul>
                  <li>
                    <h5>AQI</h5>
                  </li>
                  <li>
                    <h5>PM1</h5>
                  </li>
                  <li>
                    <h5>PM2.5</h5>
                  </li>
                  <li>
                    <h5>PM10</h5>
                  </li>
                  <li>
                    <h5>CO</h5>
                  </li>
                  <li>
                    <h5>CO2</h5>
                  </li>
                  <li>
                    <h5>SO2</h5>
                  </li>
                  <li>
                    <h5>NO</h5>
                  </li>
                  <li>
                    <h5>NO2</h5>
                  </li>
                  <li>
                    <h5>O3</h5>
                  </li>
                  <li>
                    <h5>CH4</h5>
                  </li>
                  <li>
                    <h5>TVOC</h5>
                  </li>
                  <li>
                    <h5>H2S</h5>
                  </li>
                  <li>
                    <h5>Temp.</h5>
                  </li>
                  <li>
                    <h5>Humid.</h5>
                  </li>
                  <li>
                    <h5>Noise</h5>
                  </li>
                  <li>
                    <h5>Wind Direction</h5>
                  </li>
                  <li>
                    <h5>Wind Speed</h5>
                  </li>
                  <li>
                    <h5>Rainfall</h5>
                  </li>
                  <li>
                    <h5>UV Index</h5>
                  </li>
                  <li>
                    <h5>LUX</h5>
                  </li>
                </ul>
              </div>
            </div>

            <div className="get-brochur">
              <ul>
                <li>
                  <a href="https://www.pranaair.com/wp-content/uploads/2024/06/construction-site-Prana-Air-Air-quality-monitor-brochure.pdf">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                      alt="brochure"
                      width={22}
                      height={22}
                    />
                    Brochure
                  </a>
                </li>
                <li>
                  <a href="#contact_form">Get a Quote</a>
                </li>
              </ul>
            </div>

            <div className="show-container">
              <button
                className="showbutton"
                data-bs-toggle="collapse"
                data-bs-target="#solarDetails"
                aria-expanded="false"
                aria-controls="solarDetails"
              >
                View Details
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
              </button>
              <div className="collapse" id="solarDetails">
                <div className="contentmy">
                  <h3>Prana Sense</h3>
                  <p>
                    Prana Sense offers the ultimate solution for continuous, real-time outdoor air quality monitoring.
                    Monitor several parameters and pollutants with the advanced technology of the device. Connect the
                    device with a solar panel for continuous power supply with a 40,000 mAh battery that can last long
                    for 96 hours. The compact and portable design of the monitor makes it easy to install anywhere. Also
                    provide real-time readings of temperature, humidity and noise for perfect environmental monitoring.
                    Seamlessly connect to the AQI app or cloud storage to access your data from anywhere, anytime.
                  </p>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Prana-Sense-device.webp"
                    alt="prana air ambient pro air quality monitor in used"
                    width={800}
                    height={400}
                  />
                </div>
                <button
                  className="close-btn hidebutton"
                  data-bs-toggle="collapse"
                  data-bs-target="#solarDetails"
                  aria-expanded="true"
                  aria-controls="solarDetails"
                >
                  Close
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                    alt="close icon"
                    width={18}
                    height={18}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="ambient-pro-content" role="tabpanel" aria-labelledby="ambient-pro-tab">
            <div className="color-box">
              <div className="ambient-pm-content">
                <h3>Ambient Pro</h3>
                <p>
                  It is the most advanced monitor in Prana Airs Ambient family. It measures all of the same pollutants
                  as the Ambient Lite monitor, plus temperature and humidity.
                </p>
                <h4>Features</h4>
              </div>

              <div className="drone-icon-list">
                <ul>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/low-cost-icon.png"
                      alt="low cost icon"
                      width={50}
                      height={50}
                    />
                    <p>Low-cost air quality monitors</p>
                  </li>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/online-data-access.png"
                      alt="online data access"
                      width={50}
                      height={50}
                    />
                    <p>Data on website, mobile & table apps, TV</p>
                  </li>
                </ul>

                <ul>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/weatherproof-icon.png"
                      alt="weatherproof icon"
                      width={50}
                      height={50}
                    />
                    <p>Fully Waterproof Housing</p>
                  </li>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/multiple-sensors.png"
                      alt="multiple sensors icon"
                      width={50}
                      height={50}
                    />
                    <p>Multiple air sensors (PM & Gases)</p>
                  </li>
                </ul>
              </div>

              <div className="aqi-data">
                <ul>
                  <li>
                    <h5>AQI</h5>
                  </li>
                  <li>
                    <h5>PM1</h5>
                  </li>
                  <li>
                    <h5>PM2.5</h5>
                  </li>
                  <li>
                    <h5>PM10</h5>
                  </li>
                  <li>
                    <h5>CO</h5>
                  </li>
                  <li>
                    <h5>CO2</h5>
                  </li>
                  <li>
                    <h5>SO2</h5>
                  </li>
                  <li>
                    <h5>NO</h5>
                  </li>
                  <li>
                    <h5>NO2</h5>
                  </li>
                  <li>
                    <h5>O3</h5>
                  </li>
                  <li>
                    <h5>CH4</h5>
                  </li>
                  <li>
                    <h5>TVOC</h5>
                  </li>
                  <li>
                    <h5>H2S</h5>
                  </li>
                  <li>
                    <h5>Temp.</h5>
                  </li>
                  <li>
                    <h5>Humid.</h5>
                  </li>
                  <li>
                    <h5>Noise</h5>
                  </li>
                  <li>
                    <h5>Wind Direction</h5>
                  </li>
                  <li>
                    <h5>Wind Speed</h5>
                  </li>
                  <li>
                    <h5>Rainfall</h5>
                  </li>
                  <li>
                    <h5>LUX</h5>
                  </li>
                  <li>
                    <h5>UV Index</h5>
                  </li>
                </ul>
              </div>
            </div>

            <div className="get-brochur">
              <ul>
                <li>
                  <a href="#">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                      alt="brochure"
                      width={22}
                      height={22}
                    />
                    Brochure
                  </a>
                </li>
                <li>
                  <a href="/air-quality-monitor/ambient-air-monitor/prana-sense/">Get a Quote</a>
                </li>
              </ul>
            </div>

            <div className="ambent-weather-staion">
              <div className="staions-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-ambient-pro-monitor-variants.webp"
                  alt="prana air ambient pro monitor variants"
                  width={250}
                  height={250}
                />
              </div>
              <div className="staion-tetx">
                <h4>Ambient Pro Monitor</h4>
                <p>
                  It is the most advanced ambient air quality monitor of Prana Air that comes with inbuilt weather
                  station.
                </p>
              </div>
            </div>

            <div className="show-container">
              <button
                className="showbutton"
                data-bs-toggle="collapse"
                data-bs-target="#tokyoDetails"
                aria-expanded="false"
                aria-controls="tokyoDetails"
              >
                View Details
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
              </button>
              <div className="collapse" id="tokyoDetails">
                <div className="contentmy">
                  <h3>Ambient Pro Inbuilt Weather Station</h3>
                  <p>
                    The primary aspect for determining environmental stability is the Continuous Ambient Air Quality
                    Monitoring System (CAAQMS). There are many factors that control the quality of air and many sources
                    contributing to it such as natural, industrial and anthropogenic. Meteorological factors also alter
                    and impact air quality. Outdoor air pollution does not just jeopardize the living. It is also
                    detrimental to the ecology and the atmospheric chemistry of the earth. Chronic Obstructive Pulmonary
                    Disease (COPD) and asthma are examples of bad air quality for human health.
                  </p>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Ambient-Pro-Monitor.webp"
                    alt="prana air ambient pro air quality monitor in used"
                    width={800}
                    height={400}
                  />
                </div>
                <button
                  className="close-btn hidebutton"
                  data-bs-toggle="collapse"
                  data-bs-target="#tokyoDetails"
                  aria-expanded="true"
                  aria-controls="tokyoDetails"
                >
                  Close
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                    alt="close icon"
                    width={18}
                    height={18}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        {/* Nav tabs */}
        <ul className="nav nav-tabs variant-tab" id="ambientTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="ambient-pm-tab"
              data-bs-toggle="tab"
              data-bs-target="#ambient-pm-content"
              type="button"
              role="tab"
              aria-controls="ambient-pm-content"
              aria-selected="true"
            >
              <div className="tab-inner">
                <div>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Ambient-PM-monitor.webp"
                    alt="prana air ambient pm air quality monitor"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h3>Ambient PM</h3>
                </div>
                <div>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/10/arrow-ambient.png"
                    alt="arrow"
                    width={20}
                    height={20}
                    className="arrow"
                  />
                </div>
              </div>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="prana-sense-tab"
              data-bs-toggle="tab"
              data-bs-target="#prana-sense-content"
              type="button"
              role="tab"
              aria-controls="prana-sense-content"
              aria-selected="false"
            >
              <div className="tab-inner">
                <div>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/10/ambient-variants-prana-sense-monitor.webp"
                    alt="prana air ambient pro air quality monitor"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h3>Prana Sense</h3>
                </div>
                <div>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/10/arrow-ambient.png"
                    alt="arrow"
                    width={20}
                    height={20}
                    className="arrow"
                  />
                </div>
              </div>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="ambient-pro-tab"
              data-bs-toggle="tab"
              data-bs-target="#ambient-pro-content"
              type="button"
              role="tab"
              aria-controls="ambient-pro-content"
              aria-selected="false"
            >
              <div className="tab-inner">
                <div>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Prana-Airs-ambient-pro-monitor.webp"
                    alt="prana air ambient pro air quality monitor"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h3>Ambient Pro</h3>
                </div>
                <div>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/10/arrow-ambient.png"
                    alt="arrow"
                    width={20}
                    height={20}
                    className="arrow"
                  />
                </div>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
