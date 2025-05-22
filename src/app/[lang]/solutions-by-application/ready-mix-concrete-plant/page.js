"use client"

import Image from "next/image"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "./style.css"

const MpcbGuidelinesSection = () => {
  return (
    <section className="top_space_heading">
      <div className="introducing_box sub_title_box">
        <h2 className="title_heading">
          <span>MPCB Guidelines</span> RMC Plants
        </h2>
        <p>
          Maharashtra Pollution Control Board, in consultation with the State Government, has issued guidelines for the
          siting criteria of Ready Mix Concrete Plants (RMC) in the state of Maharashtra, as well as environmental norms
          to be enforced on RMCs to implement additional control measures to reduce pollution and protect public health
          in surrounding areas.
        </p>
        <div className="introduce_button">
          <button
            className="bg-btn bg-green view_btn"
            data-bs-toggle="collapse"
            data-bs-target="#guidelinesCollapse"
            aria-expanded="false"
            aria-controls="guidelinesCollapse"
          >
            <span className="btn-text">Know More</span>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/05/view-button.png"
              alt="Know More"
              width={24}
              height={24}
              className="show-icon"
            />
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/05/close-button.png"
              alt="Hide"
              width={24}
              height={24}
              className="hide-icon"
            />
          </button>
        </div>
      </div>

      <div className="collapse" id="guidelinesCollapse">
        <div className="table_specifiction_collapse">
          <h3>Maharashtra Pollution Control Self Assessment</h3>
          <p>
            As per the MPCB, the authority shall comply with the provisions under the Air (Prevention and Control of
            Pollution) Act, 1981, and the following mentioned guidelines.
          </p>

          <div className="mpcb-logo-container">
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/05/mpcsa-logo-300x286.png"
              alt="MPCB logo"
              width={98}
              height={94}
            />
            <p>
              <strong>MPCB</strong>
              <br />
              (Maharashtra Pollution Control Board)
            </p>
          </div>

          <h4 className="guidelines-title">Guidelines for RMC Plants in Maharashtra, India</h4>

          <div className="guidelines-grid">
            <div className="guideline-item">
              <div className="bullet"></div>
              <span>The unit is required to monitor the ambient air quality at the plot boundary</span>
            </div>

            <div className="guideline-item">
              <div className="bullet"></div>
              <span>The ambient air quality standards must be met for a 24-hour average</span>
            </div>

            <div className="guideline-item">
              <div className="bullet"></div>
              <span>
                The maximum allowable concentration of Particulate Matter (PM10) is 100 μg/m<sup>3</sup>.
              </span>
            </div>

            <div className="guideline-item">
              <div className="bullet"></div>
              <span>
                The maximum allowable concentration of Particulate Matter (PM2.5) is 60 μg/m<sup>3</sup>.
              </span>
            </div>

            <div className="guideline-item">
              <div className="bullet"></div>
              <span>Commercial plants are required to install CAAQMS within their premises.</span>
            </div>

            <div className="guideline-item">
              <div className="bullet"></div>
              <span>Captive plants must conduct ambient air quality monitoring twice a week for 24 hours.</span>
            </div>

            <div className="guideline-item">
              <div className="bullet"></div>
              <span>
                Ready mix concrete industries must comply with the provisions under the Noise Pollution (Regulation and
                Control) Rule 2000 to control noise pollution.
              </span>
            </div>
          </div>

          <div className="rmc-gazette">
            <p>
              <strong>RMC Gazette circular</strong>
              <br />
              <a
                href="https://www.ecmpcb.in/cms/download/bXBjYmNtc3wyMDcyMA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.ecmpcb.in/cms/download/bXBjYmNtc3wyMDcyMA==
              </a>
            </p>
          </div>

          <h2 className="air_heading">How do we provide the solutions?</h2>

          {/* Solutions tabs section - Updated to use Bootstrap tabs */}
          <div className="solutions-tabs">
            <ul className="nav nav-tabs" id="solutionTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active solution-tab"
                  id="ambient-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#ambient"
                  type="button"
                  role="tab"
                  aria-controls="ambient"
                  aria-selected="true"
                >
                  <div className="solution-tab-image">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/ambient-air-quality-monitor.png"
                      alt="Ambient Monitor"
                      width={150}
                      height={150}
                    />
                  </div>
                  <h3>Ambient Monitor</h3>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link solution-tab"
                  id="api-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#api"
                  type="button"
                  role="tab"
                  aria-controls="api"
                  aria-selected="false"
                >
                  <div className="solution-tab-image">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/aqi-api-for-construction.png"
                      alt="API Data To Govt. Portal"
                      width={150}
                      height={150}
                    />
                  </div>
                  <h3>API Data To Govt. Portal</h3>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link solution-tab"
                  id="cctv-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#cctv"
                  type="button"
                  role="tab"
                  aria-controls="cctv"
                  aria-selected="false"
                >
                  <div className="solution-tab-image">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/cctv-camera.png"
                      alt="CCTV Camera"
                      width={150}
                      height={150}
                    />
                  </div>
                  <h3>CCTV Camera</h3>
                </button>
              </li>
            </ul>

            <div className="tab-content" id="solutionTabsContent">
              <div className="tab-pane fade show active" id="ambient" role="tabpanel" aria-labelledby="ambient-tab">
                <div className="solution-content-inner">
                  <p>
                    Prana Air Ambient Air Quality Monitors help RMC companies monitor air quality and ensure worker
                    safety. Accurate readings of different air quality parameters, including temperature, allow for
                    proactive measures to mitigate air pollution and improve overall air quality on the plant.
                  </p>

                  <h4>Features</h4>
                  <ul className="features-list">
                    <li>Real-time and historical data analysis</li>
                    <li>Lightweight, weatherproof monitor</li>
                    <li>Multiple sensors & connectivity options</li>
                    <li>Can function as a CAAQMS</li>
                  </ul>

                  <div className="parameter-tags">
                    <div className="parameter-tag">AQI</div>
                    <div className="parameter-tag">PM1.0</div>
                    <div className="parameter-tag">PM2.5</div>
                    <div className="parameter-tag">PM10</div>
                    <div className="parameter-tag">Temperature</div>
                    <div className="parameter-tag">Humidity</div>
                  </div>

                  <div className="action-buttons">
                    <a href="#" className="brochure-btn">
                      Brochure
                    </a>
                    <a href="#get_in_touch" className="quote-btn">
                      Get A Quote
                    </a>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="api" role="tabpanel" aria-labelledby="api-tab">
                <div className="solution-content-inner">
                  <p>
                    Prana Air offers seamless integration of air quality monitor data through an API, enabling easy
                    access and integration on any website, in accordance with government guidelines.
                  </p>

                  <h4>Features:</h4>
                  <ul className="features-list two-column">
                    <li>Uninterrupted API data delivery</li>
                    <li>Real-time and historical data</li>
                    <li>Guaranteed 100% uptime data</li>
                    <li>Reliable, stable, and secure data</li>
                  </ul>

                  <div className="action-buttons">
                    <a href="#" className="brochure-btn">
                      Brochure
                    </a>
                    <a href="#get_in_touch" className="quote-btn">
                      Get A Quote
                    </a>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="cctv" role="tabpanel" aria-labelledby="cctv-tab">
                <div className="solution-content-inner">
                  <p>
                    By providing remote access to live video footage and real-time air quality data, RMC teams can
                    enhance decision- making processes, ensure compliance with standards, and prioritize the safety of
                    their work environment.
                  </p>

                  <h4>Features</h4>
                  <ul className="features-list two-column">
                    <li>Live video feed of the site</li>
                    <li>Facilitates proactive pollution mitigation measures</li>
                    <li>Real-time monitoring of activities</li>
                    <li>Enhances worker safety and security</li>
                  </ul>

                  <div className="action-buttons">
                    <a href="#" className="brochure-btn">
                      Brochure
                    </a>
                    <a href="#get_in_touch" className="quote-btn">
                      Get A Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hide-button">
              <button
                data-bs-toggle="collapse"
                data-bs-target="#guidelinesCollapse"
                aria-expanded="true"
                aria-controls="guidelinesCollapse"
              >
                Hide <span>▲</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Update the Air Quality Monitoring section to use Bootstrap tabs
const AirQualityMonitoringSection = () => {
  return (
    <section className="quality_solution_section">
      <div className="container">
        <div className="introducing_box sub_title_box">
          <h2 className="title_heading">
            Air Quality <span className="bold_text">Monitoring at RMC Plants</span>
          </h2>
          <p>
            Our cutting-edge monitoring systems are specifically designed to precisely measure various pollutants
            including PM, SOx, NOx, CO, and more at RMC plants. With customizable Printed Circuit Boards (PCBs), our
            monitors are adaptable to real-time applications and can be tailored to meet the specific air quality needs of
            RMC plant environments.
          </p>
        </div>

        <ul className="nav nav-tabs monitoring-tabs" id="monitoringTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active monitoring-tab"
              id="monitor-tab"
              data-bs-toggle="tab"
              data-bs-target="#monitor"
              type="button"
              role="tab"
              aria-controls="monitor"
              aria-selected="true"
            >
              Air Quality Monitor
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link monitoring-tab"
              id="display-tab"
              data-bs-toggle="tab"
              data-bs-target="#display"
              type="button"
              role="tab"
              aria-controls="display"
              aria-selected="false"
            >
              LED/TV Display
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link monitoring-tab"
              id="storage-tab"
              data-bs-toggle="tab"
              data-bs-target="#storage"
              type="button"
              role="tab"
              aria-controls="storage"
              aria-selected="false"
            >
              Storage & Dashboard
            </button>
          </li>
        </ul>

        <div className="tab-content" id="monitoringTabsContent">
          <div className="tab-pane fade show active" id="monitor" role="tabpanel" aria-labelledby="monitor-tab">
            <div className="monitoring-content">
              <div className="monitoring-text">
                <h2>Ambient Air Monitor (CAAQMS)</h2>
                <p>
                  Prana Air monitors detect pollutants and function as a CAAQMS for RMC plants, enabling informed
                  decisions, emission control strategies, and improved air quality for worker and community health.
                </p>
                <div className="parameter-tags">
                  <div className="parameter-tag">PM1</div>
                  <div className="parameter-tag">PM2.5</div>
                  <div className="parameter-tag">PM10</div>
                  <div className="parameter-tag">Noise</div>
                  <div className="parameter-tag">Temperature</div>
                  <div className="parameter-tag">Humidity</div>
                </div>
              </div>
              <div className="monitoring-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/ambient-air-quality-monitor-caaqms.jpg"
                  alt="Ambient Air Monitor"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="display" role="tabpanel" aria-labelledby="display-tab">
            <div className="monitoring-content">
              <div className="monitoring-text">
                <h2>LED Display & Android TV Dashboard</h2>
                <p>
                  Real-time air quality data on displays at construction sites enables informed decisions and proactive
                  health risk mitigation for workers and communities.
                </p>
                <div className="parameter-tags">
                  <div className="parameter-tag">TV Display</div>
                  <div className="parameter-tag">Large Display</div>
                  <div className="parameter-tag">More Insightful</div>
                  <div className="parameter-tag">Real-time Data</div>
                </div>
              </div>
              <div className="monitoring-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/led-dispaly-and-tv-data.jpg"
                  alt="LED Display & TV Dashboard"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="storage" role="tabpanel" aria-labelledby="storage-tab">
            <div className="monitoring-content">
              <div className="monitoring-text">
                <h2>Cloud Storage & Data Dashboards</h2>
                <p>
                  Cloud storage is crucial for RMC Plants, offering secure remote access to monitored data through mobile
                  apps, Android TV, & web dashboards, anytime, anywhere.
                </p>
                <div className="parameter-tags">
                  <div className="parameter-tag">Mobile</div>
                  <div className="parameter-tag">Tablet</div>
                  <div className="parameter-tag">TV</div>
                  <div className="parameter-tag">Web</div>
                </div>
              </div>
              <div className="monitoring-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/aqi-cloud-storage-and-dashboards.jpg"
                  alt="Cloud Storage & Data Dashboards"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Update the Data Freemium Services section to match the design
const DataFreemiumSection = () => {
  return (
    <section className="data-freemium-section">
      <div className="container">
        <div className="introducing_box sub_title_box">
          <h2 className="title_heading">
            Data Freemium <span className="bold_text">Services</span>
          </h2>
          <p>
            Show the data on LED/LCD TV display or analyze it on a web dashboard or mobile & tablet apps with AQI data
            cloud storage service. No more hassle of data accessibility.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/05/ready-mix-concrete-plant.png"
              alt="Prana Air ambient air monitor at ready mix concrete plant"
              width={300}
              height={200}
            />
            <h3>Ambient Monitor (CAAQMS)</h3>
          </div>

          <div className="service-card">
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/05/led-display-and-lcd-tv.png"
              alt="prana air led display and lcd tv to show air quality data at RMC plant"
              width={300}
              height={200}
            />
            <h3>LED Display/TV Dashboard</h3>
          </div>

          <div className="service-card">
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/05/aqi-cloud-storage-and-dashboards.png"
              alt="aqi customized data dashboard and cloud storage"
              width={300}
              height={200}
            />
            <h3>Data Dashboards & Cloud Storage</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

// Update the Construction Banner section to match the design
const ConstructionBannerSection = () => {
  return (
    <section className="construction-banner">
      <div className="construction-banner-content">
        <div className="construction-banner-text">
          <h2>
            Discover the Importance of Air Quality Monitoring for <b>Construction Sites:</b> Ensuring Compliance and
            Healthy Atmospheres.
          </h2>
        </div>
        <div className="construction-banner-button">
          <a href="#">
            Know More
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/05/plant-btn-icon.png"
              alt="btn icon"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </section>
  )
}

// Update the Clientele section to match the design
const ClienteleSection = () => {
  return (
    <section className="clientele-section">
      <div className="introducing_box sub_title_box">
        <h2 className="title_heading">
          Our <span className="bold_text">Clientele</span>
        </h2>
        <p>We are honored to work with so many well-known companies.</p>
      </div>

      <div className="client-logos">
        <div className="client-logo">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/05/ultratech-cement-icon.png"
            alt="UltraTech Cement"
            width={180}
            height={90}
          />
        </div>
        <div className="client-logo">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/05/speco-logo-icon.png"
            alt="Speco Technologies"
            width={180}
            height={90}
          />
        </div>
        <div className="client-logo">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/05/starcrete-icon.png"
            alt="StarCrete"
            width={180}
            height={90}
          />
        </div>
        <div className="client-logo">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/05/indiscrete-icon-logo.png"
            alt="Indiscrete"
            width={180}
            height={90}
          />
        </div>
      </div>
    </section>
  )
}

// Update the Contact section to match the design
const ContactSection = () => {
  return (
    <section className="contact-section" id="get_in_touch">
      <div className="introducing_box sub_title_box">
        <h2 className="title_heading">
          Get in <span className="bold_text">Touch</span>
        </h2>
        <p>Please help us know what requirements you have. Our team will contact you very soon.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>Looking for air quality solutions for RMC plants?</p>

          <div className="contact-detail">
            <i className="fa fa-phone"></i>
            <div className="contact-detail-text">
              Phone Number:
              <br />
              (+91) 73918-73918
            </div>
          </div>

          <div className="contact-detail">
            <i className="fa fa-envelope"></i>
            <div className="contact-detail-text">
              Email Address:
              <br />
              info@purelogic.in
            </div>
          </div>

          <div className="contact-detail">
            <i className="fa fa-map-marker"></i>
            <div className="contact-detail-text">
              Office Location:
              <br />
              706, 7th Floor, Sec 10,
              <br />
              Rohini, Delhi 85, India
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <label>Your Full Name</label>
              <input type="text" name="name" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Your Phone No</label>
                <input type="tel" name="phone" required />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input type="email" name="email" required />
              </div>
            </div>

            <div className="form-group">
              <label>Your Organisation</label>
              <input type="text" name="organisation" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Write message here" required></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// Update the Industrial Applications section to fix the image display issue
const IndustrialApplicationsSection = () => {
  return (
    <section className="industrial-applications">
      <div className="introducing_box sub_title_box">
        <h2 className="title_heading">
          Industrial <span className="bold_text">Applications</span>
        </h2>
        <p>
          Irrespective of the business size, Prana Air provides an extensive range of intelligent, cost-effective, and
          exceptionally precise air quality solutions suitable for diverse industries.
        </p>
      </div>

      <div className="owl-slider">
        <div className="carousel-nav carousel-prev">
          <span>‹</span>
        </div>

        <Carousel
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              slidesToSlide: 1,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              slidesToSlide: 1,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
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
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="item"
        >
          <div className="app_service_box">
            <div className="app_img_bx">
              <a href="https://www.pranaair.com/solutions-by-application/retail-stores/">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/air-quality-solutions-for-retail-outlets.jpg"
                  alt="air quality solutions for retail stores"
                />
              </a>
            </div>
            <a href="https://www.pranaair.com/solutions-by-application/retail-stores/">
              <h4>Solutions for Retail Stores</h4>
            </a>
          </div>

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

          <div className="app_service_box">
            <div className="app_img_bx">
              <a href="https://www.pranaair.com/solutions-by-application/institutes/">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/solution-for-institutions.jpg"
                  alt="air quality solutions for schools and institutes"
                />
              </a>
            </div>
            <a href="https://www.pranaair.com/solutions-by-application/institutes/">
              <h4>Solutions for Institutes</h4>
            </a>
          </div>

          <div className="app_service_box">
            <div className="app_img_bx">
              <a href="https://www.pranaair.com/solutions-by-application/cinema-and-theatre/">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-cinema.jpg"
                  alt="air quality solutions for cinema and theatre"
                />
              </a>
            </div>
            <a href="https://www.pranaair.com/solutions-by-application/cinema-and-theatre/">
              <h4>Solutions for Cinema/Theatre</h4>
            </a>
          </div>

          <div className="app_service_box">
            <div className="app_img_bx">
              <a href="https://www.pranaair.com/solutions-by-application/automobile/">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-autombile.jpg"
                  alt="air quality solutions for automobiles"
                />
              </a>
            </div>
            <a href="https://www.pranaair.com/solutions-by-application/automobile/">
              <h4>Solutions for Automobiles</h4>
            </a>
          </div>

          <div className="app_service_box">
            <div className="app_img_bx">
              <a href="https://www.pranaair.com/solutions-by-application/real-estate/">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-real-estate.jpg"
                  alt="air quality solutions for real estates"
                />
              </a>
            </div>
            <a href="https://www.pranaair.com/solutions-by-application/real-estate/">
              <h4>Solutions for Real Estates</h4>
            </a>
          </div>

          <div className="app_service_box">
            <div className="app_img_bx">
              <a href="https://www.pranaair.com/solutions-by-application/smartphone-makers/">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/solutions-for-mobile-phone-makers.png"
                  alt="air quality solutions for smartphone makers"
                />
              </a>
            </div>
            <a href="https://www.pranaair.com/solutions-by-application/smartphone-makers/">
              <h4>Solutions for Smartphone Makers</h4>
            </a>
          </div>

          <div className="app_service_box">
            <div className="app_img_bx">
              <a href="https://www.pranaair.com/solutions-by-industry/pm2-5-monitoring-air-pollution-by-construction-sites/">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-construction-sites.jpg"
                  alt="air quality solutions for construction sites"
                />
              </a>
            </div>
            <a href="https://www.pranaair.com/solutions-by-industry/pm2-5-monitoring-air-pollution-by-construction-sites/">
              <h4>Solutions for Construction</h4>
            </a>
          </div>

          <div className="app_service_box">
            <div className="app_img_bx">
              <a href="https://www.pranaair.com/solutions-by-application/office/">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/solution-for-office-scaled.jpg"
                  alt="air quality solutions for office"
                />
              </a>
            </div>
            <a href="https://www.pranaair.com/solutions-by-application/office/">
              <h4>Solutions for Office</h4>
            </a>
          </div>

          <div className="app_service_box">
            <div className="app_img_bx">
              <a
                href="https://www.pranaair.com/solutions-by-application/animal-care-center/"
                aria-label="air quality Air quality Solutions for animale-care"
              >
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-animale-care-page.jpg"
                  alt="air quality Air quality Solutions for animale-care"
                />
              </a>
            </div>
            <a
              href="https://www.pranaair.com/solutions-by-application/animal-care-center/"
              aria-label="Air quality Solutions for Construction sites"
            >
              <h4>Air quality Solutions for Animal care</h4>
            </a>
          </div>

          <div className="app_service_box">
            <div className="app_img_bx">
              <a
                href="https://www.pranaair.com/solutions-by-application/logistics/"
                aria-label="air quality Air quality Solutions for logistics"
              >
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-logistics-page.jpg"
                  alt="air quality Air quality Solutions for logistics"
                />
              </a>
            </div>
            <a
              href="https://www.pranaair.com/solutions-by-application/logistics/"
              aria-label="Air quality Solutions for logistics"
            >
              <h4>Air quality Solutions for logistics</h4>
            </a>
          </div>

          <div className="app_service_box">
            <div className="app_img_bx">
              <a
                href="https://www.pranaair.com/in/solutions-by-application/railway/"
                aria-label="air quality Air quality Solutions for railway"
              >
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-railway-page.jpg"
                  alt="air quality Air quality Solutions for railway"
                />
              </a>
            </div>
            <a
              href="https://www.pranaair.com/solutions-by-application/railway/"
              aria-label="Air quality Solutions for railway"
            >
              <h4>Air quality Solutions for Railways</h4>
            </a>
          </div>
        </Carousel>

        <div className="carousel-nav carousel-next">
          <span>›</span>
        </div>
      </div>
    </section>
  )
}

export default function ReadyMixConcretePlant() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1366 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1366, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  }

  return (
    <main>
      {/* Banner Section */}
      <section className="school_banner_box">
        <div className="banner_quality_box">
          <div className="pocket_title_box school_aqi_box">
            <h1>
              Air Quality Solutions<span className="bold_text"> For Ready-Mix Concrete Plants</span>
            </h1>
            <span style={{ fontSize: "14pt" }}>
              A complete solution for air quality monitoring and data display at RMC Plants.
            </span>
            <a className="pocket_buy_btn" href="#get_in_touch">
              Get a Quote
            </a>
          </div>
        </div>
        <div className="banner_quality_img_box">{/* Banner image is set as background in CSS */}</div>
      </section>

      {/* Major Air Pollutants Section */}
      <section>
        <div className="introducing_box sub_title_box text-center">
          <h2 className="title_heading">
            Major Air <span className="bold_text">Pollutants</span>
          </h2>
          <p>
            Emissions from RMC plants, including the burning of fossil fuels, material transportation, and heavy gear
            operation, release pollutants that can harm human health with respiratory difficulties, cardiovascular
            disease, cancer risks, and cause environmental damage like acid rain and smog. Monitoring and controlling
            these emissions is vital to minimize their impact on both the environment and human well-being.
          </p>
        </div>
      </section>

      <section className="pollution_cntr inner_container">
        <div className="feature_box">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/04/pm-pollutant.png"
            alt="pm2.5 pm10 pollutants level at RMC plant"
            width={102}
            height={99}
          />
          <div className="feature_wrap_box">
            <h2>PM</h2>
            <p>Fossil fuels, material transport, and heavy machinery contribute to PM emissions.</p>
          </div>
        </div>

        <div className="feature_box">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/05/noise-pollutant.png"
            alt="noise pollution at RMC plant"
            width={102}
            height={99}
          />
          <div className="feature_wrap_box">
            <h2>Noise</h2>
            <p>Machinery on the sites creates noise that can cause ear injury and disturbance.</p>
          </div>
        </div>

        <div className="feature_box">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/04/CO-pollutant.png"
            alt="co pollution at RMC Plant"
            width={102}
            height={99}
          />
          <div className="feature_wrap_box">
            <h2>CO</h2>
            <p>Heavy machinery operation and transportation of equipment contribute to emissions.</p>
          </div>
        </div>

        <div className="feature_box">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/04/voc-pollutant.png"
            alt="voc pollutant at RMC Plant"
            width={102}
            height={99}
          />
          <div className="feature_wrap_box">
            <h2>VOCs</h2>
            <p>Released from the storage and handling of solvents, fuels, and certain chemical additives</p>
          </div>
        </div>
      </section>

      <section className="pollution_cntr inner_container">
        <div style={{ width: "25%" }}></div>
        <div className="feature_box">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/04/SOx-pollutant.png"
            alt="sox pollution at RMC plant"
            width={102}
            height={99}
          />
          <div className="feature_wrap_box">
            <h2>SOx</h2>
            <p>Sulfur-containing fuels and raw materials contribute to emissions.</p>
          </div>
        </div>

        <div className="feature_box">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/04/NOx-pollutant.png"
            alt="no2 pollution at RMC plants"
            width={102}
            height={99}
          />
          <div className="feature_wrap_box">
            <h2>NOx</h2>
            <p>Oxides of Nitrogen are released from the burning of fuel and natural gas.</p>
          </div>
        </div>
        <div style={{ width: "25%" }}></div>
      </section>

      {/* Impact Section */}
      <section className="school_img_box">
        <div className="school_box_cntr">
          <ul>
            <li className="first_school_box">
              <span className="school_icon_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/SOx-pollutant-icon.png"
                  alt="sox at rmc plant"
                  width={60}
                  height={60}
                />
              </span>
              <div className="schhol_text_box">
                <h3>SOx</h3>
                <p>
                  Exposure to SOx can cause irritation in the eyes and respiratory tract, and aggravate conditions like
                  asthma, bronchitis, etc.
                </p>
              </div>
            </li>
            <li className="second_school_box">
              <span className="school_icon_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/noise-icon.png"
                  alt="noise at rmc plant"
                  width={60}
                  height={60}
                />
              </span>
              <div className="schhol_text_box">
                <h3>Noise</h3>
                <p>
                  Excessive noise can lead to hearing loss, sleep disturbances, high blood pressure, headaches, and
                  other various discomforts.
                </p>
              </div>
            </li>
            <li className="third_school_box">
              <span className="school_icon_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/NOx-pollutant-icon.png"
                  alt="NOx pollutant at rmc plant"
                  width={96}
                  height={96}
                />
              </span>
              <div className="schhol_text_box">
                <h3>NOx</h3>
                <p>
                  Nitrogen oxide can cause irritation in the eyes, nose, and throat. Symptoms may involve cough,
                  shortness of breath, nausea, etc.
                </p>
              </div>
            </li>
            <li className="fourth_school_box">
              <span className="school_icon_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/particulate-pm2.5-icon.png"
                  alt="particulate matter pm2.5 and pm10 at rmc plant"
                  width={108}
                  height={108}
                />
              </span>
              <div className="schhol_text_box">
                <h3>PM</h3>
                <p>
                  Particulate matter (PM) pollution from RMC plants can cause respiratory disorders, heart disease, and
                  other health problems.
                </p>
              </div>
            </li>
            <li className="fivth_school_box">
              <span className="school_icon_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/co-pollutant-icon.png"
                  alt="co gas at rmc plant"
                  width={93}
                  height={93}
                />
              </span>
              <div className="schhol_text_box">
                <h3>CO</h3>
                <p>
                  Headaches, nausea, dizziness, and even death can happen when exposed to CO pollution from RMC plants
                  at high concentrations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* MPCB Guidelines Section */}
      <MpcbGuidelinesSection />

      {/* Air Quality Monitoring Section */}
      <AirQualityMonitoringSection />

      {/* Data Freemium Services Section */}
      <DataFreemiumSection />

      {/* RMC Plant Banner */}
      <ConstructionBannerSection />

      {/* Clientele Section */}
      <ClienteleSection />

      {/* FAQ Section */}
      <section className="faq_ask_section">
        <div className="introducing_box sub_title_box text-center">
          <h2 className="title_heading">
            Frequently Asked <span className="bold_text">Questions</span>
          </h2>
          <p>About Air Quality Monitoring Solutions for RMC Plants Have questions? Were here to help.</p>
        </div>
      </section>

      <section className="faq_section faq_ask_section">
        <div className="container">
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item faq-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  1. Why is air quality monitoring important at RMC sites?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Air quality monitoring is crucial at RMC sites to ensure that the emissions from the plants do not
                    cause harmful impacts on public health and the environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item faq-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  2. What pollutants are typically monitored at RMC sites?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>Common pollutants monitored at RMC sites include particulate matter (PM), NOx, CO, and SOx.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item faq-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  3. What are the typical monitoring methods used at RMC sites?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Monitoring methods can vary, but commonly used techniques include continuous ambient air quality
                    monitoring stations (CAAQMS), and real-time monitoring instruments.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item faq-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  4. Who is responsible for conducting air quality monitoring at RMC sites?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Typically, the RMC plant operators are responsible for conducting air quality monitoring at their
                    sites. However, regulatory agencies may also conduct periodic inspections and monitoring to ensure
                    compliance with environmental regulations.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item faq-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  5. What are the consequences of non-compliance with air quality standards at RMC sites?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Non-compliance with air quality standards at RMC sites can lead to regulatory action such as fines,
                    shutdowns, or legal action. Additionally, non-compliance can also lead to negative impacts on public
                    health and the environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item faq-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  6. What kind of equipment is used for air quality monitoring at RMC sites?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Continuous Ambient Air Quality Monitoring Stations (CAAQMS) are commonly used for air quality
                    monitoring at RMC sites. These systems are capable of measuring various pollutants in real-time and
                    can be customized based on specific monitoring requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item faq-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  7. How often should air quality monitoring be conducted at RMC sites?
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Air quality monitoring at RMC sites should be conducted continuously to ensure that the levels of
                    pollutants are within acceptable limits. The frequency of monitoring may vary depending on local
                    regulations and monitoring requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Industrial Applications Section */}
      <IndustrialApplicationsSection />

      {/* Bootstrap initialization script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Initialize all Bootstrap components
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
              return new bootstrap.Tooltip(tooltipTriggerEl)
            })
            
            // Initialize school box interactions
            const schoolBoxItems = document.querySelectorAll(".school_box_cntr li")
            schoolBoxItems.forEach((item) => {
              item.addEventListener("click", function () {
                const textBox = this.querySelector(".schhol_text_box")
                if (textBox) {
                  if (textBox.style.display === "none" || textBox.style.display === "") {
                    document.querySelectorAll(".schhol_text_box").forEach((box) => {
                      box.style.display = "none"
                    })
                    textBox.style.display = "inline-block"
                  } else {
                    textBox.style.display = "none"
                  }
                }
              })
            })
          });
        `,
        }}
      />
    </main>
  )
}
