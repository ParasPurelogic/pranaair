import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import AirQualityTabs from "@/Components/Pages/Airports/air-quality-tabs"
import FaqAccordion from "@/Components/Pages/Airports/faq-accordion"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import { getServerTranslation } from "@/i18n/server"

export default async function AirportSolutions() {
  const { t } = await getServerTranslation("airports")
  const industrialApplications = [
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-hotel.jpg",
      title: t("industrialApplicationsData.hotel.title"),
      link: "https://www.pranaair.com/solutions-by-application/hotel-businesses/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-restaurant.jpg",
      title: t("industrialApplicationsData.restaurant.title"),
      link: "https://www.pranaair.com/solutions-by-application/restaurants/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-institute.jpg",
      title: t("industrialApplicationsData.institutes.title"),
      link: "https://www.pranaair.com/solutions-by-application/institutes/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-cinema.jpg",
      title: t("industrialApplicationsData.cinema.title"),
      link: "https://www.pranaair.com/solutions-by-application/cinema-and-theatre/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-autombile.jpg",
      title: t("industrialApplicationsData.automobiles.title"),
      link: "https://www.pranaair.com/solutions-by-application/automobile/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-real-estate.jpg",
      title: t("industrialApplicationsData.realEstate.title"),
      link: "https://www.pranaair.com/solutions-by-application/real-estate/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/solutions-for-mobile-phone-makers.png",
      title: t("industrialApplicationsData.smartphone.title"),
      link: "https://www.pranaair.com/solutions-by-application/smartphone-makers/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-construction-sites.jpg",
      title: t("industrialApplicationsData.construction.title"),
      link: "https://www.pranaair.com/solutions-by-industry/pm2-5-monitoring-air-pollution-by-construction-sites/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-animale-care-page.jpg",
      title: t("industrialApplicationsData.animalCare.title"),
      link: "https://www.pranaair.com/solutions-by-application/animal-care-center/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-logistics-page.jpg",
      title: t("industrialApplicationsData.logistics.title"),
      link: "https://www.pranaair.com/solutions-by-application/logistics/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-railway-page.jpg",
      title: t("industrialApplicationsData.railways.title"),
      link: "https://www.pranaair.com/solutions-by-application/railway/",
    }
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
                  {t("airportBanner.title")} <span className="bold_text">{t("airportBanner.highlight")}</span>
                </h1>
                <p>{t("airportBanner.description")}</p>
                <a className="pocket_buy_btn" href="#get_in_touch">
                  {t("airportBanner.cta")}
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
              {t("airPollutants.title")} <span className="bold_text">{t("airPollutants.highlight")}</span>
            </h2>
            <p>{t("airPollutants.description")}</p>
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
                  alt={t("pollutants.pm25.imgAlt")}
                  width="76"
                  height="60"
                />
                <div className="feature_wrap_box">
                  <h2>{t("pollutants.pm25.title")}</h2>
                  <p>{t("pollutants.pm25.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-gas-icon.png"
                  alt={t("pollutants.co2.imgAlt")}
                  width="85"
                  height="83"
                />
                <div className="feature_wrap_box">
                  <h2>{t("pollutants.co2.title")}</h2>
                  <p>{t("pollutants.co2.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-parameter-icon.png"
                  alt={t("pollutants.tvoc.imgAlt")}
                  width="73"
                  height="79"
                />
                <div className="feature_wrap_box">
                  <h2>{t("pollutants.tvoc.title")}</h2>
                  <p>{t("pollutants.tvoc.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/oxides-like-no2-and-so2.png"
                  alt={t("pollutants.oxides.imgAlt")}
                  width="74"
                  height="80"
                />
                <div className="feature_wrap_box">
                  <h2>{t("pollutants.oxides.title")}</h2>
                  <p>{t("pollutants.oxides.description")}</p>
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
                  alt={t("pollutants.virusBacteria.imgAlt")}
                  width="86"
                  height="89"
                />
                <div className="feature_wrap_box">
                  <h2>{t("pollutants.virusBacteria.title")}</h2>
                  <p>{t("pollutants.virusBacteria.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/noise-icon.png"
                  alt={t("pollutants.noise.imgAlt")}
                  width="86"
                  height="89"
                />
                <div className="feature_wrap_box">
                  <h2>{t("pollutants.noise.title")}</h2>
                  <p>{t("pollutants.noise.description")}</p>
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
              {t("risk.title")} <span className="bold_text">{t("risk.highlight")}</span>
            </h2>
            <p>{t("risk.description")}</p>
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
                  alt={t("riskGroups.healthIssues.imgAlt")}
                  width="75"
                  height="163"
                />
                <div className="feature_wrap_box">
                  <h2>{t("riskGroups.healthIssues.title")}</h2>
                  <p>{t("riskGroups.healthIssues.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/security-staff-in-airport.png"
                  alt={t("riskGroups.securityStaff.imgAlt")}
                  width="83"
                  height="159"
                />
                <div className="feature_wrap_box">
                  <h2>{t("riskGroups.securityStaff.title")}</h2>
                  <p>{t("riskGroups.securityStaff.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/airport-staff.png"
                  alt={t("riskGroups.staff.imgAlt")}
                  width="55"
                  height="166"
                />
                <div className="feature_wrap_box">
                  <h2>{t("riskGroups.staff.title")}</h2>
                  <p>{t("riskGroups.staff.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/passenger-in-airport.png"
                  alt={t("riskGroups.passenger.imgAlt")}
                  width="83"
                  height="159"
                />
                <div className="feature_wrap_box">
                  <h2>{t("riskGroups.passenger.title")}</h2>
                  <p>{t("riskGroups.passenger.description")}</p>
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
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-icon-2.png"
                    alt={t("pollutantsViz.pm25.imgAlt")}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("pollutantsViz.pm25.title")}</h3>
                  <p>{t("pollutantsViz.pm25.description")}</p>
                </div>
              </li>
              <li className="second_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-icon.png"
                    alt={t("pollutantsViz.co2.imgAlt")}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("pollutantsViz.co2.title")}</h3>
                  <p>{t("pollutantsViz.co2.description")}</p>
                </div>
              </li>
              <li className="third_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/noise-icon-for-restaurant.png"
                    alt={t("pollutantsViz.noise.imgAlt")}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("pollutantsViz.noise.title")}</h3>
                  <p>{t("pollutantsViz.noise.description")}</p>
                </div>
              </li>
              <li className="fourth_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/oxide.png"
                    alt={t("pollutantsViz.oxides.imgAlt")}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("pollutantsViz.oxides.title")}</h3>
                  <p>{t("pollutantsViz.oxides.description")}</p>
                </div>
              </li>
              <li className="fivth_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/Viruses.png"
                    alt={t("pollutantsViz.virusBacteria.imgAlt")}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("pollutantsViz.virusBacteria.title")}</h3>
                  <p>{t("pollutantsViz.virusBacteria.description")}</p>
                </div>
              </li>
              <li className="six_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-icon.png"
                    alt={t("pollutantsViz.tvoc.imgAlt")}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("pollutantsViz.tvoc.title")}</h3>
                  <p>{t("pollutantsViz.tvoc.description")}</p>
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
              {t("solutions.title")} <span className="bold_text">{t("solutions.highlight")}</span>
            </h2>
            <p>
              {t("solutions.description.part1")}
              <strong>{t("solutions.description.brandName")}</strong> {t("solutions.description.part2")}
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
              {t("dataServices.title")} <span className="bold_text">{t("dataServices.highlight")}</span>
            </h2>
            <p>{t("dataServices.description")}</p>
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
                  alt={t("dataServicesFeatures.tvDashboard.imgAlt")}
                />
                <h4>{t("dataServicesFeatures.tvDashboard.title")}</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app_service_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-data-dashboard-for-airport.jpg"
                  alt={t("dataServicesFeatures.webDashboard.imgAlt")}
                />
                <h4>{t("dataServicesFeatures.webDashboard.title")}</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app_service_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-data-qrcode-for-airpot.jpg"
                  alt={t("dataServicesFeatures.qrCode.imgAlt")}
                />
                <h4>{t("dataServicesFeatures.qrCode.title")}</h4>
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
              {t("airPollutionEffects.title")}
              <span className="bold_text">{t("airPollutionEffects.highlight")}</span>
            </h2>
            <p>{t("airPollutionEffects.description")}</p>
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
                  <span style={{ fontSize: "15pt", color: "#78ae60" }}>{t("airComparison.cleanAir.title")}</span>
                </h3>
                <ul className="airquality_list">
                  <li>{t("airComparison.cleanAir.benefits.item1")}</li>
                  <li>{t("airComparison.cleanAir.benefits.item2")}</li>
                  <li>{t("airComparison.cleanAir.benefits.item3")}</li>
                  <li>{t("airComparison.cleanAir.benefits.item4")}</li>
                </ul>
              </div>
              <div className="vs_text">{t("airComparison.vsText")}</div>
            </div>
            <div className="col-md-6 air_qualiity_right">
              <div className="air_quality_box">
                <h3>
                  <span style={{ fontSize: "15pt", color: "#e86868" }}>{t("airComparison.uncleanAir.title")}</span>
                </h3>
                <ul className="airquality_list red_list">
                  <li>{t("airComparison.uncleanAir.drawbacks.item1")}</li>
                  <li>{t("airComparison.uncleanAir.drawbacks.item2")}</li>
                  <li>{t("airComparison.uncleanAir.drawbacks.item3")}</li>
                  <li>{t("airComparison.uncleanAir.drawbacks.item4")}</li>
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
              {t("faq.title")} <span className="bold_text">{t("faq.highlight")}</span>
            </h2>
            <p>{t("faq.description")}</p>
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
              {t("clientele.title")} <span className="bold_text">{t("clientele.highlight")}</span>
            </h2>
            <p>{t("clientele.description")}</p>
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
                <h2>{t("contact.title")}</h2>
                <p>{t("contact.description")}</p>
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
              {t("industrialApplications.title")}{" "}
              <span className="bold_text">{t("industrialApplications.highlight")}</span>
            </h2>
            <p>{t("industrialApplications.description")}</p>
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
