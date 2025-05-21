"use client"
import "./style.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import ContactForm from "@/Components/Contacform/ContactForm"

export default function ParkingLotPage() {
  return (
    <div className="parking-lot-page">
      {/* Banner Section */}
      <section
        className="school_banner_box"
        style={{
          backgroundImage:
            "url(https://www.pranaair.com/wp-content/uploads/2023/04/air-quality-solutions-for-parking-spaces.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 banner_quality_box">
              <div className="pocket_title_box school_aqi_box">
                <h1>
                  Air quality solutions for <span className="bold_text">Parking Spaces</span>
                </h1>
                <span style={{ fontSize: "14pt" }}>
                  A complete solution for air monitoring, data analysis, and fresh air solutions for enclosed car
                  parking areas and car lots.
                </span>
                <ul className="rate_list">
                  <li>Underground</li>
                  <li>Multi-storey</li>
                  <li>Open Area</li>
                </ul>
                <a className="pocket_buy_btn" href="#get_in_touch">
                  Request A Quote
                </a>
              </div>
            </div>
            <div className="col-md-6 banner_quality_img_box"></div>
          </div>
        </div>
      </section>

      {/* Major Air Pollutants Section */}
      <section className="full_width">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              <span style={{ fontSize: "24pt" }}>
                Major air pollutants in <span style={{ color: "#78ae60" }}>Parking Spaces</span>
              </span>
            </h2>
            <p>
              Enclosed parking areas can emit a variety of air pollutants, including carbon monoxide (CO), nitrogen
              oxides (NOx), volatile organic compounds (VOCs), sulfur oxides (SOx), and particulate matter (PM2.5 &amp;
              PM10), all of which are harmful to human health.
            </p>
          </div>
        </div>
      </section>

      {/* Pollutants Grid Section */}
      <section className="pollution_cntr inner_container">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/pm-pollutant.png"
                  alt="particulate matter pm2.5, pm10 in parking spaces"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>PM2.5 &amp; PM10</h2>
                  <p>PM levels increase in poorly ventilated underground parking due to lack of particle dispersion.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/CO-pollutant.png"
                  alt="CO pollutant in parking space"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>CO</h2>
                  <p>
                    Sources can include exhaust emissions from vehicles, gasoline-powered equipment, and generators.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/voc-pollutant.png"
                  alt="voc pollutant in parking spaces"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>VOC</h2>
                  <p>
                    Gasoline and diesel exhaust, as well as emissions from building materials, cleaning agents, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>

      <section className="pollution_cntr inner_container">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/SOx-pollutant.png"
                  alt="SOx pollutant in parking spaces"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>SOx</h2>
                  <p>Carbon and gasoline emissions from various vehicles can release various toxins including SOx.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/NOx-pollutant.png"
                  alt="NOx pollutant in parking spaces"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>NOx</h2>
                  <p>High-temperature combustion processes like engine operation &amp; fuel combustion can emit NOx.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>

      {/* Affecting Air Pollution Section */}
      <section
        className="school_img_box"
        style={{
          backgroundImage:
            "url(https://www.pranaair.com/wp-content/uploads/2023/04/affecting-air-pollution-in-parking-spaces.jpg)",
        }}
      >
        <div className="container">
          <div className="school_box_cntr">
            <ul>
              <li className="first_school_box">
                <span className="school_icon_box">
                  <img src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-icon.png" alt="voc icon" />
                </span>
                <div className="schhol_text_box">
                  <h3>VOCs</h3>
                  <p>VOCs from vehicles can contribute to the formation of ground-level ozone.</p>
                </div>
              </li>
              <li className="second_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/04/SOx-pollutant-icon.png"
                    alt="sox pollutant icon"
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>SOx</h3>
                  <p>Shifting to alternative fuels can decrease SOx emissions.</p>
                </div>
              </li>
              <li className="third_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/04/NOx-pollutant-icon.png"
                    alt="NOx pollutant icon"
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>NOx</h3>
                  <p>
                    Driving habits such as avoiding hard acceleration &amp; maintaining a steady speed can reduce NOx
                    emissions.
                  </p>
                </div>
              </li>
              <li className="fourth_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/particulate-pm2.5-icon.png"
                    alt="particulate matter pm2.5 and pm10"
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>PM2.5 &amp; PM10</h3>
                  <p>PM levels increase in poorly ventilated underground parking due to lack of particle dispersion.</p>
                </div>
              </li>
              <li className="fivth_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/04/co-pollutant-icon.png"
                    alt="co from vehicles"
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>CO</h3>
                  <p>
                    Sources can include exhaust emissions from vehicles, gasoline-powered equipment, and generators.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Health Effects Section */}
      <section className="pollution_cntr inner_container">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2>
              Health <span style={{ color: "#78ae60" }}>Effects</span>
            </h2>
          </div>
        </div>
      </section>

      <section className="pollution_cntr inner_container">
        <div className="container">
          <div className="row">
            <div className="col-md-1-5">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/eyes-and-respiration-irritation.png"
                  alt="eyes and respiration irritation due to air quality in parking"
                  width="142"
                  height="112"
                />
                <div className="feature_wrap_box">
                  <span style={{ fontSize: "12pt" }}>Irritation in the eyes and the respiratory tract</span>
                </div>
              </div>
            </div>
            <div className="col-md-1-5">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/heart-disorder.png"
                  alt="Coughing, wheezing shortness of breath to air pollution in parking space"
                  width="142"
                  height="112"
                />
                <div className="feature_wrap_box">
                  <span style={{ fontSize: "12pt" }}>Coughing, wheezing shortness of breath</span>
                </div>
              </div>
            </div>
            <div className="col-md-1-5">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/infection-and-stomach-illness.png"
                  alt="Vomiting & stomach discomfort due to air quality"
                  width="142"
                  height="112"
                />
                <div className="feature_wrap_box">
                  <span style={{ fontSize: "12pt" }}>Vomiting &amp; stomach discomfort</span>
                </div>
              </div>
            </div>
            <div className="col-md-1-5">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/headache-and-high-bp.png"
                  alt="Dizziness, vertigo, and headaches due to air quality"
                  width="142"
                  height="112"
                />
                <div className="feature_wrap_box">
                  <span style={{ fontSize: "12pt" }}>Dizziness, vertigo, and headaches</span>
                </div>
              </div>
            </div>
            <div className="col-md-1-5">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/trigger-asthma-and-illness.png"
                  alt="trigger asthma and illness due to air quality"
                  width="142"
                  height="112"
                />
                <div className="feature_wrap_box">
                  <span style={{ fontSize: "12pt" }}>Triggers asthma &amp; other related illnesses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parking Types Section */}
      <section className="parking-types-section">
        <div className="container">
          <div className="text-center mb-5">
            <p style={{ fontSize: "12pt" }}>
              Parking lots contribute to air pollution through exhaust emissions from cars, dust, and debris from
              unpaved surfaces, negatively impacting the health and well-being of nearby communities.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="text-center">
                <img
                  className="img-responsive"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/multistorey-car-parking.jpg"
                  alt="Air pollution buildup on car parking multistorey floors"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "13pt" }}>Air pollution buildup on all floors</span>
                </h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <img
                  className="img-responsive"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/open-area-car-parking.jpg"
                  alt="air pollution in open area car parking"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "13pt" }}>Air pollution dispersion to nearby areas</span>
                </h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <img
                  className="img-responsive"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/car-parking-in-underground-close-area.jpg"
                  alt="air pollution by car parking in underground close area"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "13pt" }}>Lack of natural air circulation</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions Section */}
      <section className="quality_solution_section top_space_heading">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Air quality <span className="bold_text">Solutions</span>
            </h2>
            <span style={{ fontSize: "12pt" }}>
              Prana Air air quality monitoring and air purifying solutions help in making a green infrastructure,
              improved ventilation, eco-friendly materials, and sustainable transportation options that can reduce air
              pollution in urban areas, improve health, and promote sustainability.
            </span>
          </div>
        </div>
      </section>

      {/* Air Quality Monitors Tab Section - Updated with Bootstrap tabs */}
      <section className="air_quality_tab_sec">
        <div className="container">
          <div className="tabs-container">
            <ul className="nav nav-tabs" id="solutionTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="ambient-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#ambient-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="ambient-tab-pane"
                  aria-selected="true"
                >
                  Ambient Monitor
                </button>
              </li>
            </ul>
            <div className="tab-content" id="solutionTabsContent">
              <div
                className="tab-pane fade show active"
                id="ambient-tab-pane"
                role="tabpanel"
                aria-labelledby="ambient-tab"

              >
                <div className="slider_cntr">
                  <div className="slider_details_box">
                    <h3>Ambient Monitor</h3>
                    <span>
                      Its compact design and precise pollutant-sensing technology help you meet and exceed the
                      expectations of environmental monitoring.
                    </span>
                    <ul className="airquality_list">
                      <li>Detects PM, VOCs, CO, SOx, NOx pollutants</li>
                      <li>Low-cost air monitoring</li>
                      <li>Multiple connectivity (Wifi, GSM, RS-485)</li>
                      <li>Data accessibility on mobile, tablet, TV apps, and web-dashboard</li>
                    </ul>
                    <br />
                    <a
                      href="https://www.pranaair.com/air-quality-monitor/ambient-air-monitor/"
                      className="knowmore_btn"
                    >
                      Know More
                    </a>
                  </div>
                  <div className="slider_img_box">
                    <a href="https://www.pranaair.com/air-quality-monitor/ambient-air-monitor/">
                      <img
                        style={{ width: "100%" }}
                        src="https://www.pranaair.com/wp-content/uploads/2023/04/ambient-air-monitor-in-car-parking.jpg"
                        alt="Prana Air ambient air monitor in car parking"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Accessibility Section */}
      <section className="top_space_heading">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Easy Data <span style={{ color: "#78ae60" }}>Accessibility</span>
            </h2>
            <p>
              Easy access to accurate air quality data for parking lots can aid stakeholders in making informed
              decisions to minimize their impact on public health and the environment, promoting sustainable urban
              development.
            </p>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="text-center">
                <img
                  className="img-responsive"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/car-parking-spaces.jpg"
                  alt="car parking spaces"
                />
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt" }}>Air quality monitor installed on different parking space</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <img
                  className="img-responsive"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/prana-air-sensible-monitor-for-parking.jpg"
                  alt="prana air sensible monitor for parking"
                />
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt" }}>Air quality monitor connected to Wifi/GSM/RS-485</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <img
                  className="img-responsive"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/aqi-cloud-storage-server.jpg"
                  alt="aqi cloud storage server"
                />
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt" }}>Data is stored in AQI Cloud Storage.</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <img
                  className="img-responsive"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/aqi-dashboard-web-app-and-mobile-app.jpg"
                  alt="aqi dashboard web app and mobile app"
                />
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt" }}>
                    The data can be accessed on AQI mobile, web-dashboard, tablet apps remotely.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Freemium Services Section */}
      <section className="top_space_heading">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Data Freemium <span className="bold_text">Services</span>
            </h2>
            <p>
              Our customized dashboard can display or analyze data on the LCD panels or the apps. Use{" "}
              <strong>AQI</strong> mobile app to find out the air quality around or inside the parking spaces.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="app_service_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/tv-dashboard-app-for-parking-space-for-car-parking-space.jpg"
                  alt="tv dashboard app for parking space for car parking space"
                />
                <span style={{ fontSize: "14pt" }}>Smart TV Dashboard App</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app_service_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/customized-aqi-web-or-tablet-app-for-car-parking-space.jpg"
                  alt="aqi mobile app to access air quality data for car parking space"
                />
                <span style={{ fontSize: "14pt" }}>Customized Web/Tablet App</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app_service_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/aqi-mobile-app-to-access-air-quality-data-for-car-parking-space.jpg"
                  alt="customized aqi web or tablet app for car parking space"
                />
                <span style={{ fontSize: "14pt" }}>AQI Mobile App</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Updated with Bootstrap accordion */}
      <section className="faq_ask_section">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Frequently Asked <span className="bold_text">Questions</span>
            </h2>
            <p>About Air Quality Solution for car parking spaces Have questions? Were here to help.</p>
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
                  aria-controls="faq1"
                >
                  1. Why is air quality a concern in parking lots?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p>
                    - Poor air quality in parking lots can have adverse effects on the health of drivers, pedestrians,
                    and nearby residents. It can also contribute to environmental pollution and climate change.
                  </p>
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
                  aria-controls="faq2"
                >
                  2. What are the common sources of air pollution in parking lots?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p>
                    - The most common sources of air pollution in parking lots are exhaust fumes from vehicles, as well
                    as dust and particulate matter from tires and brakes.
                  </p>
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
                  aria-controls="faq3"
                >
                  3. What are the health effects of poor air quality in parking lots?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p>
                    - Exposure to poor air quality in parking lots can cause respiratory problems, eye irritation,
                    headaches, and other health issues. Prolonged exposure can also increase the risk of cancer and
                    other chronic diseases.
                  </p>
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
                  aria-controls="faq4"
                >
                  4. How can air quality be improved in parking lots?
                </button>
              </h2>
              <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p>
                    - Air quality in parking lots can be improved by promoting the use of low-emission vehicles,
                    implementing green infrastructure like trees and plants, continuous monitoring of air quality,
                    installing air filtration systems, and improving ventilation.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq5"
                  aria-expanded="false"
                  aria-controls="faq5"
                >
                  5. What are some effective air quality monitoring solutions for parking lots?
                </button>
              </h2>
              <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p>
                    - Air quality monitoring solutions for parking lots can include sensor-based monitoring systems such
                    as Prana Air monitors, real-time data analytics, and AQI mobile apps that provide users with air
                    quality information.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq6"
                  aria-expanded="false"
                  aria-controls="faq6"
                >
                  6. How can air quality data collected in parking lots be used for research and public health purposes?
                </button>
              </h2>
              <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p>
                    - Air quality data collected in parking lots can be used to study the impacts of air pollution on
                    human health and the environment. It can also inform public policy and regulatory decisions related
                    to air quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientele Section */}
      <section className="top_space_heading">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Our <span className="bold_text">Clientele</span>
            </h2>
            <p>We are honored to work with so many well-known companies.</p>
          </div>
          <div className="row client_logo_section inner_container">
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png"
                  alt="UltraTech Cement"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png"
                  alt="Speco Technologies"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png"
                  alt="StarCrete"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png"
                  alt="Indiscrete"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="contact-section-box"
        id="get_in_touch"
        style={{ backgroundColor: "#f5f8f5", padding: "60px 0" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-heading">
                <h2>Get in Touch</h2>
                <p>Please help us know what requirements you have. Our team will contact you very soon.</p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm pageName="Parking Lot Page" />
      </section>

      {/* Industrial Applications Section */}
      <section className="seperate_industrial_box">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Industrial <span className="bold_text">Applications</span>
            </h2>
            <p>
              Prana Air provides a wide range of Smart, inexpensive, and highly accurate air quality solutions for a
              variety of sectors, regardless of their size.
            </p>
          </div>
        </div>
      </section>

      <section className="inner_container industries_application_section">
        <div className="container">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <div className="item">
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
            </div>
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
            </div>
            <div className="item">
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
            </div>
            <div className="item">
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
            </div>
          </Carousel>
        </div>
      </section>

      {/* Add Bootstrap JS */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Initialize Bootstrap components
              if (typeof bootstrap !== 'undefined') {
                // Initialize tooltips
                var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                  return new bootstrap.Tooltip(tooltipTriggerEl)
                })
                
                // Initialize popovers
                var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
                var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
                  return new bootstrap.Popover(popoverTriggerEl)
                })
              }
            });
          `,
        }}
      />
    </div>
  )
}
