import AirQualityTabs from "@/Components/Pages/Airports/air-quality-tabs"
import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import FaqAccordion from "@/Components/Pages/Airports/faq-accordion"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"

export default function AirportSolutions() {
  const industrialApplications = [
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-hotel.jpg",
      title: "Solutions for Hotel",
      link: "https://www.pranaair.com/solutions-by-application/hotel-businesses/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-restaurant.jpg",
      title: "Solutions for Restaurant",
      link: "https://www.pranaair.com/solutions-by-application/restaurants/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-institute.jpg",
      title: "Solutions for Institutes",
      link: "https://www.pranaair.com/solutions-by-application/institutes/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-cinema.jpg",
      title: "Solutions for Cinema/Theatre",
      link: "https://www.pranaair.com/solutions-by-application/cinema-and-theatre/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-autombile.jpg",
      title: "Solutions for Automobiles",
      link: "https://www.pranaair.com/solutions-by-application/automobile/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-real-estate.jpg",
      title: "Solutions for Real Estates",
      link: "https://www.pranaair.com/solutions-by-application/real-estate/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/solutions-for-mobile-phone-makers.png",
      title: "Solutions for Smartphone Makers",
      link: "https://www.pranaair.com/solutions-by-application/smartphone-makers/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-construction-sites.jpg",
      title: "Solutions for Construction",
      link: "https://www.pranaair.com/solutions-by-industry/pm2-5-monitoring-air-pollution-by-construction-sites/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-animale-care-page.jpg",
      title: "Air quality Solutions for Animal care",
      link: "https://www.pranaair.com/solutions-by-application/animal-care-center/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-logistics-page.jpg",
      title: "Air quality Solutions for logistics",
      link: "https://www.pranaair.com/solutions-by-application/logistics/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-railway-page.jpg",
      title: "Air quality Solutions for Railways",
      link: "https://www.pranaair.com/solutions-by-application/railway/",
    },
  ]

  const faqItems = [
    {
      question: "1. What are the major pollutants that are present in airports?",
      answer:
        "A variety of pollutants can be present inside and around the airport. PM, CO2, NOx, SOx, bacterial pathogens, and CO are the main pollutants followed by TVOCs, noise, humidity, etc.",
    },
    {
      question: "2. Are any other parameters included in the monitors other than the air pollutants?",
      answer: "- Yes, you can monitor the temperature, noise, and humidity in an area.",
    },
    {
      question: "3. Why is it necessary to have air quality monitoring solutions?",
      answer:
        "- To know the nature of air pollutants and by how much are they present in an airport setting so that necessary actions can be taken by the authorities to maintain regulatory standards.",
    },
    {
      question: "4. How can I check the AQI inside the airport using Prana Air's monitor?",
      answer:
        "Prana Air Monitors are WiFi, GSM and LoRa technology so you don't need to set up a wire framework to extract and display the data. Simply connect the monitor to our AQI Cloud Server through WiFi, GSM or LoRa connectivity and view the real-time data on smart TV screens, AQI mobile or table app and web-dashboard remotely.",
    },
    {
      question: "5. What are the health impacts of the pollutants present inside the airport?",
      answer:
        "- Headaches, nausea, dizziness, etc. among passengers and staff are some of the health discomforts experienced when exposed to bad air quality.",
    },
    {
      question:
        "6. What are some criteria that need to be kept in mind for a healthy and comfortable travel experience?",
      answer: "- Ventilation rate, noise, comfort level, mold score, organic aerosols, etc. are some of the criteria.",
    },
    {
      question: "7. Are there any additional benefits that come with the solutions?",
      answer:
        "- An insightful web-dashboard, 24*7 remote access to the data, get health tips, real-time and historical data analysis, QR code to scan and know the real-time AQI of that area, and many more.",
    },
  ]

  return (
    <div className="airport-solutions-page">
      {/* Banner Section */}
      <section className="school_banner_box">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="banner_content_wrapper">
                <h1>
                  Air quality solutions for <span className="bold_text">Airport</span>
                </h1>
                <p>
                  A complete solution for air quality monitoring, air purification, data accessibility for areas in and
                  around the airports.
                </p>
                <a className="pocket_buy_btn" href="#get_in_touch">
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Air Pollutants Section */}
      <section>
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Major Air <span className="bold_text">Pollutants</span>
            </h2>
            <p>
              The nature of air pollutants inside an airport is so vast that if ignored, they can have extreme effects
              on passengers, staff, and people living near airports. Due to this, air monitoring becomes essential in
              and around airports. A real-time air quality monitoring system will enable airport authorities to estimate
              pollution levels caused by various sources to comply with regulatory standards.
            </p>
          </div>
        </div>
      </section>

      {/* Pollutants Feature Boxes */}
      <section className="pollution_cntr inner_container">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-parameter.png"
                  alt="pm2.5 level in airport"
                  width="76"
                  height="60"
                />
                <div className="feature_wrap_box">
                  <h2>PM2.5</h2>
                  <p>fine breathable water and dust particles</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-gas-icon.png"
                  alt="high co2 level in airport"
                  width="85"
                  height="83"
                />
                <div className="feature_wrap_box">
                  <h2>CO2</h2>
                  <p>High occupancy of passengers</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-parameter-icon.png"
                  alt="tvoc in airport"
                  width="73"
                  height="79"
                />
                <div className="feature_wrap_box">
                  <h2>TVOC</h2>
                  <p>carpets, disinfectants, room fresheners, etc.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/oxides-like-no2-and-so2.png"
                  alt="oxides emissions in airport"
                  width="74"
                  height="80"
                />
                <div className="feature_wrap_box">
                  <h2>Oxides (NOx, SOx)</h2>
                  <p>Emission of oxides during the operation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/virus-and-bacteria-icon.png"
                  alt="virus and bacteria in airport"
                  width="86"
                  height="89"
                />
                <div className="feature_wrap_box">
                  <h2>Viruses &amp; Bacteria</h2>
                  <p>Carrying diseases by passengers</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/noise-icon.png"
                  alt="noise in airport"
                  width="86"
                  height="89"
                />
                <div className="feature_wrap_box">
                  <h2>Noise</h2>
                  <p>Loud noise due to huge no. of people gathering</p>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>

      {/* Who are at Risk Section */}
      <section>
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Who are at <span className="bold_text">Risk?</span>
            </h2>
            <p>
              The occupancy of hotels is one of the major reasons for bad air quality inside hotels. People with
              underlying health issues, old age groups, children, and sensitive groups are at risk when exposed to air
              pollution. Even healthy adults can feel sick due to exposure to bad air quality.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Feature Boxes */}
      <section className="pollution_cntr inner_container">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/respiratory-illness-passengers-in-airport.png"
                  alt="person with respiratory illness in hotel"
                  width="75"
                  height="163"
                />
                <div className="feature_wrap_box">
                  <h2>Underlying Health Issues</h2>
                  <p>Passengers and staff with respiratory illnesses already have a weaker respiratory system.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/security-staff-in-airport.png"
                  alt="hotel chef"
                  width="83"
                  height="159"
                />
                <div className="feature_wrap_box">
                  <h2>Security Staff</h2>
                  <p>The airport security staffs are also threat to the air pollution present inside the premises.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/airport-staff.png"
                  alt="hotel staff"
                  width="55"
                  height="166"
                />
                <div className="feature_wrap_box">
                  <h2>Staff</h2>
                  <p>The staff may have low of coordination and performance, a high chance of illness.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/passenger-in-airport.png"
                  alt="hotel guests"
                  width="83"
                  height="159"
                />
                <div className="feature_wrap_box">
                  <h2>Passenger</h2>
                  <p>Even healthy passengers may experience uneasiness, headaches, etc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Pollutants Visualization */}
      <section className="school_img_box">
        <div className="container">
          <div className="school_box_cntr">
            <ul>
              <li className="first_school_box">
                <span className="school_icon_box">
                  <img src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-icon-2.png" alt="pm2.5 icon" />
                </span>
                <div className="schhol_text_box">
                  <h3>PM2.5</h3>
                  <p>Cardiorespiratory disorders due to particle exposure</p>
                </div>
              </li>
              <li className="second_school_box">
                <span className="school_icon_box">
                  <img src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-icon.png" alt="co2 icon" />
                </span>
                <div className="schhol_text_box">
                  <h3>CO2</h3>
                  <p>People experience breathing issue, nausea, convulsions</p>
                </div>
              </li>
              <li className="third_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/noise-icon-for-restaurant.png"
                    alt="noise icon"
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>Noise</h3>
                  <p>Stress, anxiety, high BP, headache due to noise</p>
                </div>
              </li>
              <li className="fourth_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/oxide.png"
                    alt="oxides like no2 and so2 in air port"
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>Oxides</h3>
                  <p>Coughing, choking, fatigue, etc. are experienced if exposed</p>
                </div>
              </li>
              <li className="fivth_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/Viruses.png"
                    alt="viruses and bacteria in airport"
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>Virus &amp; Bacteria</h3>
                  <p>Infections are common when exposed to viruses &amp; bacteria</p>
                </div>
              </li>
              <li className="six_school_box">
                <span className="school_icon_box">
                  <img src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-icon.png" alt="tvoc icon" />
                </span>
                <div className="schhol_text_box">
                  <h3>TVOC</h3>
                  <p>Headaches, and irritation in the eyes, nose, and throat</p>
                </div>
              </li>
            </ul>
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
            <p>
              As the aviation industry is growing rapidly, it becomes essential to monitor and control air pollution in
              and around airports.
              <strong>Prana Air</strong> air quality monitoring and air purifying solutions give you the power to know
              what your passengers and staff breathe and analyze the IAQ at airports and in aircraft.
            </p>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions Tabs */}
      <section className="air_quality_tab_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <AirQualityTabs />
            </div>
          </div>
        </div>
      </section>

      {/* Data Freemium Services */}
      <section className="top_space_heading">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Data Freemium <span className="bold_text">Services</span>
            </h2>
            <p>
              You can examine data on LCD screens or in the app for additional analysis with the help of our customized
              dashboard. To know the AQI for your current location, simply scan the QR code.
            </p>
          </div>
        </div>
      </section>

      {/* Data Services Feature Boxes */}
      <section className="inner_container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="app_service_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-tv-app-for-airport.jpg"
                  alt="aqi tv app dashboard for airport"
                />
                <h4>TV Dashboard App</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app_service_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-data-dashboard-for-airport.jpg"
                  alt="aqi customized dashboard app for airport"
                />
                <h4>Web-Dashboard &amp; App for Airport</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app_service_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-data-qrcode-for-airpot.jpg"
                  alt="aqi monitor data qr code scan for airport"
                />
                <h4>QR Code Scan</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Effects of Air Pollution Section */}
      <section className="top_space_heading">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              The Effects of Air Pollution -<span className="bold_text">In Airports</span>
            </h2>
            <p>
              When passengers and staff are exposed to poor air quality, they feel nauseous, dizzy, and unwell, and
              headaches are common symptoms of air pollution exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Clean vs Unclean Air Comparison */}
      <section className="inner_container airgraph_cntr">
        <div className="container">
          <div className="row">
            <div className="col-md-6 air_graph_box">
              <div className="air_quality_box">
                <h3>
                  <span style={{ fontSize: "15pt", color: "#78ae60" }}>With Clean Air</span>
                </h3>
                <ul className="airquality_list">
                  <li>Improved ventilation</li>
                  <li>Good air quality</li>
                  <li>Enhanced experience</li>
                  <li>Increase staff performance</li>
                </ul>
              </div>
              <div className="vs_text">VS</div>
            </div>
            <div className="col-md-6 air_qualiity_right">
              <div className="air_quality_box">
                <h3>
                  <span style={{ fontSize: "15pt", color: "#e86868" }}>Without Clean Air</span>
                </h3>
                <ul className="airquality_list red_list">
                  <li>Bad customer experience</li>
                  <li>Passengers less comfort</li>
                  <li>Staff low performance</li>
                  <li>Unhealthy air quality</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq_ask_section" id="faq_section">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              Frequently Asked <span className="bold_text">Questions</span>
            </h2>
            <p>About Air Quality Solution for Airports Have questions? Were here to help.</p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="faq_section faq_ask_section">
        <div className="container">
          <FaqAccordion faqItems={faqItems} />
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
        </div>
      </section>

      {/* Client Logos */}
      <section className="client_logo_section inner_container">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="client-logo-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png"
                  alt="Client Logo"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="client-logo-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png"
                  alt="Client Logo"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="client-logo-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png"
                  alt="Client Logo"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="client-logo-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png"
                  alt="Client Logo"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="client-logo-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/RENAULT-NISSAN.png"
                  alt="Client Logo"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="client-logo-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/TATA.png"
                  alt="Client Logo"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="client-logo-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/CSIR.png"
                  alt="Client Logo"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="client-logo-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MAHINDRA.png"
                  alt="Client Logo"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="client-logo-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/INTERGLOBE.png"
                  alt="Client Logo"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="client-logo-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/GMDA-1.png"
                  alt="Client Logo"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="client-logo-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/download.png"
                  alt="Client Logo"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="client-logo-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/HAVELLS.png"
                  alt="Client Logo"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section-wrapper" id="get_in_touch">
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
        <ContactForm pageName="Airports Page" />
      </section>

      {/* Industrial Applications Section */}
      <section className="seperate_industrial_box">
        <div className="container">
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
      </section>

      {/* Industrial Applications Carousel */}
      <section className="inner_container industries_application_section">
        <div className="container">
          <IndustrialApplicationsCarousel applications={industrialApplications} />
        </div>
      </section>

      {/* Bootstrap Scripts */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        `,
        }}
      />

      {/* JavaScript for School Box Interactions */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <script>
            jQuery(".second_school_box").click(function(){
              jQuery("li.second_school_box .schhol_text_box").slideToggle();
            });
            
            jQuery(".third_school_box").click(function(){
              jQuery("li.third_school_box .schhol_text_box").slideToggle();
            });
            jQuery(".fourth_school_box").click(function(){
              jQuery("li.fourth_school_box .schhol_text_box").slideToggle();
            });
            
            jQuery(".third_school_box").click(function(){
              jQuery("li.second_school_box .schhol_text_box").hide();
            });
            
            jQuery(".second_school_box ").click(function(){
              jQuery("li.third_school_box .schhol_text_box").hide();
            });
            
            jQuery(".fourth_school_box ").click(function(){
              jQuery("li.second_school_box .schhol_text_box").hide();
            });
            jQuery(".fourth_school_box ").click(function(){
              jQuery("li.third_school_box .schhol_text_box").hide();
            });
            jQuery(".second_school_box ").click(function(){
              jQuery("li.fourth_school_box .schhol_text_box").hide();
            });
            
            jQuery(".third_school_box ").click(function(){
              jQuery("li.fourth_school_box .schhol_text_box").hide();
            });
            
            jQuery(".fivth_school_box").click(function(){
              jQuery("li.fivth_school_box .schhol_text_box").slideToggle();
            });
            jQuery(".six_school_box").click(function(){
              jQuery("li.six_school_box .schhol_text_box").slideToggle();
            });
            
            jQuery(".fivth_school_box ").click(function(){
              jQuery("li.six_school_box .schhol_text_box").hide();
            });
            
            jQuery(".six_school_box ").click(function(){
              jQuery("li.fivth_school_box .schhol_text_box").hide();
            });
          </script>
        `,
        }}
      />
    </div>
  )
}
