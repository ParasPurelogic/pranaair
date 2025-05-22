"use client"

import "./style.css"
import "react-multi-carousel/lib/styles.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import Carousel from "react-multi-carousel"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"

export default function BankFinancePage() {
  // Carousel responsive settings
  const responsive = {
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
  }

  return (
    <div className="bank-financial-page">
      {/* SECTION 1: Hero Section */}
      <div
        className="vc_row full_width stretch_row_content school_banner_box"
        style={{
          backgroundImage:
            "url(https://www.pranaair.com/wp-content/uploads/2023/01/air-quality-solutions-for-banking-services.jpg)",
        }}
      >
        <div className="vc_column banner_quality_box" style={{ width: "50%" }}>
          <div className="pocket_title_box school_aqi_box">
            <h1>
              Air quality solutions for <span className="bold_text">Bank / Financial Institutions</span>
            </h1>
            <p style={{ fontSize: "14pt" }}>
              A complete solution for air monitoring air purification and data monitoring for banks and other
              financial institutions.
            </p>

            <a className="pocket_buy_btn" href="#get_in_touch">
              Get a Quote
            </a>
          </div>
        </div>
        <div className="vc_column banner_quality_img_box" style={{ width: "50%" }}></div>
      </div>

      {/* SECTION 2: Major Air Pollutants */}
      <div className="vc_row full_width stretch_row">
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Major Air <span className="bold_text">Pollutants</span>
            </h2>
            <p>
              Due to the diverse nature of air pollutants present in a bank setting precaution and mitigation
              strategies have become a challenge. To prevent bad air quality it is critical to monitor air quality and
              take appropriate precautions to avoid poor air quality episodes.
            </p>
          </div>
        </div>
      </div>

      {/* Pollutants Grid - Modern Layout */}
      <div className="modern-pollutants-grid inner_container mobile-optimized">
        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-parameter.png"
            alt="pm2.5 level"
            className="pollutant-icon"
          />
          <h3>PM2.5</h3>
          <p>These are fine particles of dust and water that are suspended in the air.</p>
        </div>

        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-gas-icon.png"
            alt="high co2 level"
            className="pollutant-icon"
          />
          <h3>CO2</h3>
          <p>Depends on the number of people in the room and its ventilation rate.</p>
        </div>

        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-parameter-icon.png"
            alt="tvoc gas"
            className="pollutant-icon"
          />
          <h3>TVOC</h3>
          <p>Cleaning agents markers tobacco smoke etc. emit TVOC</p>
        </div>

        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/08/noise-icon.png"
            alt="noise pollution"
            className="pollutant-icon"
          />
          <h3>Noise</h3>
          <p>Noise levels rises when large number of customers are present.</p>
        </div>

        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/12/odor-icon.png"
            alt="Odor"
            className="pollutant-icon"
          />
          <h3>Odor</h3>
          <p>Sweaty customers & public washrooms release bad odor</p>
        </div>

        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/12/microbe-icon.png"
            alt="Microbial Pollutants"
            className="pollutant-icon"
          />
          <h3>Microbial Pollutants</h3>
          <p>Microbiological contaminants spread easily in closed spaces.</p>
        </div>
      </div>

      {/* SECTION 3: Who is at Risk? */}
      <div className="vc_row full_width stretch_row" style={{ paddingTop: "45px" }}>
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Who are at <span className="bold_text">Risk?</span>
            </h2>
            <p>
              People in the bank/financial institutions experience stuffiness in the air as the occupancy rate increases
              and there is poor ventilation. Customers and staff are exposed to other air pollutants like PM2.5
              TVOC
              etc.
            </p>
          </div>
        </div>
      </div>

      {/* Risk Factors Grid - Modern Layout */}
      <div className="modern-risk-grid inner_container mobile-optimized">
        <div className="risk-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/01/bank-customers.png"
            alt="bank customers"
            className="risk-icon"
          />
          <h3>Customers</h3>
          <p>Customers comfort level highly depend on the air quality inside your bank.</p>
        </div>

        <div className="risk-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/01/bankers.png"
            alt="bankers"
            className="risk-icon"
          />
          <h3>Banker</h3>
          <p>High risk of developing lung cancer etc. are some of the health effects</p>
        </div>

        <div className="risk-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/01/Cashiers.png"
            alt="cashiers"
            className="risk-icon"
          />
          <h3>Cashiers</h3>
          <p>Lack of attention & coordination a high risk of respiratory infections.</p>
        </div>

        <div className="risk-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/01/bank-manager.png"
            alt="bank manager"
            className="risk-icon"
          />
          <h3>Manager</h3>
          <p>Poor judgment inaptness more prone to make bad decisions</p>
        </div>
      </div>

      {/* SECTION 4: Air quality Solutions */}
      <div className="vc_row full_width stretch_row quality_solution_section top_space_heading">
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Air quality <span className="bold_text">Solutions</span>
            </h2>
            <p>
              Prana Airs air quality monitoring and air purifying solutions give you the power to know what your
              customers and staff breathe and what you could do to clean the air to make banks/financial institutions
              air pollution-free zone and view and analyze your IAQ.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 5: Bootstrap Tabs */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Bootstrap Tabs */}
            <ul className="nav nav-tabs" id="airQualityTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="monitors-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#monitors"
                  type="button"
                  role="tab"
                  aria-controls="monitors"
                  aria-selected="true"
                >
                  Air Quality Monitors
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="fresh-air-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#fresh-air"
                  type="button"
                  role="tab"
                  aria-controls="fresh-air"
                  aria-selected="false"
                >
                  Fresh Air Machine
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="api-data-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#api-data"
                  type="button"
                  role="tab"
                  aria-controls="api-data"
                  aria-selected="false"
                >
                  API Data
                </button>
              </li>
            </ul>
            <div className="tab-content" id="airQualityTabsContent">
              <div className="tab-pane fade show active" id="monitors" role="tabpanel" aria-labelledby="monitors-tab">
                <div className="row">
                  <div className="col-md-6">
                    <div className="air-quality-tab-img">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/prana-air-sensible-plus-air-monitor-for-bank.jpg"
                        alt="prana air sensible+ air quality monitor for banking services"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="air-quality-heading">
                      <h3>Sensible+ Air Monitor</h3>
                      <p>
                        This is a smart air quality monitor that comes with 7 inch touch screen display that gives more
                        insightful data for banks.
                      </p>
                    </div>
                    <ul className="airquality_list">
                      <li>7 Inch LED Touch Screen Display</li>
                      <li>5000 mAh Battery InBuilt</li>
                      <li>WiFi Connectivity With Mobile App</li>
                    </ul>
                    <div className="btns-bottom">
                      <a
                        className="knowmore_btn"
                        href="https://www.pranaair.com/air-quality-monitor/sensible-plus-air-monitor/"
                        aria-label="Know More about Sensible+ Air Monitor"
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="fresh-air" role="tabpanel" aria-labelledby="fresh-air-tab">
                <div className="row">
                  <div className="col-md-6">
                    <div className="air-quality-tab-img">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-fresh-air-machine-for-iaq-solution.jpg"
                        alt="prana air fresh air machine as iaq solution for banks"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="air-quality-heading">
                      <h3>Fresh Air Machine As IAQ Solution</h3>
                      <p>
                        One-stop solution for indoor air pollution by Prana Air Fresh Air Machine working as an air
                        purifier with the capability to filter out 99.5% efficiency and multi-layer HEPA filters.
                      </p>
                    </div>
                    <ul className="airquality_list">
                      <li>Comes with multi-layers HEPA Filters</li>
                      <li>Compact Design makes it easy to place</li>
                      <li>Promising you up to 99.5% efficiency</li>
                    </ul>
                    <div className="btns-bottom">
                      <a
                        className="knowmore_btn"
                        href="https://www.pranaair.com/fresh-air-machine/"
                        aria-label="Know More about Fresh Air Machine"
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="api-data" role="tabpanel" aria-labelledby="api-data-tab">
                <div className="row">
                  <div className="col-md-6">
                    <div className="air-quality-tab-img">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/08/aqi-api-data-for-institutes.jpg"
                        alt="aqi api data for banks"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="air-quality-heading">
                      <h3>AQI API Data</h3>
                      <p>Avail the real-time air quality data of nearby outdoor area on the web.</p>
                    </div>
                    <ul className="airquality_list">
                      <li>Integrate air quality data on the web</li>
                      <li>Access the real-time data quickly</li>
                      <li>Take precautions from the air pollution</li>
                    </ul>
                    <div className="btns-bottom">
                      <a className="knowmore_btn" href="#get_in_touch" aria-label="Know More about API Data">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6: Data Freemium Services */}
      <div className="vc_row full_width stretch_row top_space_heading">
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Data Freemium <span className="bold_text">Services</span>
            </h2>
            <p>
              The data can be displayed or analyzed on the LCD screens or the app via our customized dashboard. Scan the
              QR to know the AQI of the area you are in.
            </p>
          </div>
        </div>
      </div>

      <div class="container inner_container">
        <div class="row">
          <div class="col-md-4">
            <div class="app_service_box">
              <img src="https://www.pranaair.com/wp-content/uploads/2022/12/aqi-tv-app-dashboard.jpg"
                alt="aqi tv app dashboard for fitness center &amp; gym" />
              <h4>TV Dashboard App</h4>
            </div>
          </div>
          <div class="col-md-4">
            <div class="app_service_box"><img
              src="https://www.pranaair.com/wp-content/uploads/2022/12/aqi-customized-tablet-app.jpg"
              alt="aqi customized dashboard app for fitness center &amp; gym" />
              <h4>Customised App for Schools</h4>
            </div>
          </div>
          <div class="col-md-4">
            <div class="app_service_box"><img
              src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-data-qrcode-for-airpot.jpg"
              alt="aqi monitor data qr code scan for airport" />
              <h4>QR Code Scan</h4>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 8: Effects of Air Pollution */}
      <div className="vc_row full_width stretch_row top_space_heading" style={{ paddingTop: "15px" }}>
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              The Effects of Air Pollution - <span className="bold_text">Banks/Financial Institutions</span>
            </h2>
            <p>
              When customers & staff members are exposed to poor air quality they feel unwell and irritation in the
              eyes nose and throat headaches and nausea are common symptoms of air pollution exposure.
            </p>
          </div>
        </div>
      </div>

      <div className="modern-comparison-container inner_container mobile-friendly">
        <div className="comparison-column with-clean">
          <h3>With Clean Air</h3>
          <ul className="comparison-list">
            <li>Improve ventilation</li>
            <li>Good comfort score</li>
            <li>Enhanced experience</li>
            <li>Improved air filtration.</li>
          </ul>
        </div>

        <div className="comparison-divider"></div>

        <div className="comparison-column without-clean">
          <h3>Without Clean Air</h3>
          <ul className="comparison-list red">
            <li>Less comfort</li>
            <li>Low ventilation score</li>
            <li>Bad experience</li>
            <li>Bad odor and mold score.</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="vc_row full_width stretch_row faq_ask_section" style={{ paddingTop: "60px" }}>
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Frequently Asked <span className="bold_text">Questions</span>
            </h2>
            <p>About Air Quality Solution for Bank/Financial Institutions Have questions? Were here to help.</p>
          </div>
        </div>
      </div>

      {/* SECTION 10: Our Clientele */}
      <div className="our-client">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">
                  Our{" "}
                  <span style={{ color: "#78ae60" }}>
                    <strong>Clientele</strong>
                  </span>
                </h2>
                <p>We are honored to work with so many well-known companies.</p>
              </div>
            </div>
          </div>

          <div className="row client_logo_section inner_container">
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png"
                  alt="morgan stanley logo"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png" alt="ola logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png" alt="microsoft logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png" alt="iit banaras logo" />
              </div>
            </div>
          </div>

          <div className="row client_logo_section">
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/RENAULT-NISSAN.png"
                  alt="renault nissan logo"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/TATA.png" alt="tata logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/CSIR.png" alt="csir logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MAHINDRA.png" alt="mahindra logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 11: Get in Touch */}
      <div className="contact-section-box" id="get_in_touch">
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
        <ContactForm pageName="Bank Financial institution Page" />
      </div>

      {/* Industrial Applications Section */}
      <div className="vc_row full_width stretch_row seperate_industrial_box">
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Industrial <span className="bold_text">Applications</span>
            </h2>
            <p>
              Regardless of how small or large a business is, Prana Air offers a wide choice of Smart, affordable, and
              highly accurate air quality solutions for various industries.
            </p>
          </div>
        </div>
      </div>

      <div className="row pd-bt">
        <div className="col-md-12">
          <div className="owl-slider">
            <IndustrialApplicationsCarousel applications={industrialApplications} />
          </div>
        </div>
      </div>
    </div>

  )
}
