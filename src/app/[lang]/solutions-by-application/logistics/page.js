import "./style.css"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import ContactForm from "@/Components/Contacform/ContactForm"
import { getServerTranslation } from "@/i18n/server"
import LogisticApplicationsCarousel from "@/Components/Pages/Logistics/app-slider"

export default async function LogisticsPage() {
  const { t } = await getServerTranslation("logstics")
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
  const appSlides = [
    {
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2024/08/mobile-AQI-APP-icon.png",
      iconAlt: "AQI Mobile App",
      title: "AQI Mobile App",
      description: "Access a real-time air quality monitor data and API for accurate global data to stay informed. Check the world air pollution map and weather map, and easily compare air quality parameters across multiple locations with AQI App.",
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/08/AQI-Mobile-Apps.jpg",
      imageAlt: "AQI Mobile App interface"
    },
    {
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2024/08/tv-aqi-app-icon.png",
      iconAlt: "AQI TV App",
      title: "AQI TV App",
      description: "View real-time and historical air quality data on a large TV screen. Effortlessly enjoy 24/7 remote monitoring to stay informed about AQI levels with data accessibility to everyone.",
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/08/AQI-TV-Apps.jpg",
      imageAlt: "AQI TV App interface"
    },
    {
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2024/08/AQI-Dashboard-icon.jpg",
      iconAlt: "AQI Web-Dashboard",
      title: "AQI Web-Dashboard",
      description: "Explore global pollution trends through detailed analyses of the worlds most polluted cities and countries. Receive health advice based on real-time air quality indexes, and easily compare air quality parameters across multiple locations with Web Dashboard.",
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/08/AQI-Web-Dashboards.jpg",
      imageAlt: "AQI Web Dashboard interface"
    }
  ]
  return (
    <div className="logistics-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            {t("logisticsBanner.title")} <span className="highlight">{t("logisticsBanner.highlight")}</span>
          </h1>
          <p className="hero-description">{t("logisticsBanner.description")}</p>
          <p className="hero-subtitle">{t("logisticsBanner.subtitle")}</p>
          <a className="primary-button" href="#get_in_touch">
            {t("logisticsBanner.cta")}
          </a>
        </div>
      </section>

      {/* Factors Section */}
      <section className="factors-section">
        <div className="section-header">
          <h2>
            {t("logisticsFactors.title")} <span className="highlight">{t("logisticsFactors.highlight")}</span>
          </h2>
          <p className="section-description">{t("logisticsFactors.description")}</p>
        </div>

        <div className="factors-grid">
          <div className="factor-card">
            <div className="factor-icon">
              <img src="https://www.pranaair.com/wp-content/uploads/2023/07/pm-icon.png" alt="Particulate Matter" />
            </div>
            <h3>{t("logisticsFactors.pm.title")}</h3>
            <p>{t("logisticsFactors.pm.description")}</p>
          </div>

          <div className="factor-card">
            <div className="factor-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/07/vocs-icon.png"
                alt="Volatile Organic Compounds"
              />
            </div>
            <h3>{t("logisticsFactors.vocs.title")}</h3>
            <p>{t("logisticsFactors.vocs.description")}</p>
          </div>

          <div className="factor-card">
            <div className="factor-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2024/08/Carbon-Monoxide-CO.png"
                alt="Carbon Monoxide"
              />
            </div>
            <h3>{t("logisticsFactors.co.title")}</h3>
            <p>{t("logisticsFactors.co.description")}</p>
          </div>

          <div className="factor-card">
            <div className="factor-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2024/08/Nitrogen-Oxides-NOx.png"
                alt="Nitrogen Oxides"
              />
            </div>
            <h3>{t("logisticsFactors.nox.title")}</h3>
            <p>{t("logisticsFactors.nox.description")}</p>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="transportation-section">
        <div className="split-container">
          <div className="split-half transportation">
            <h3>{t("logisticsTransportation.transportation.title")}</h3>
            <div className="icon-grid">
              <div className="icon-item">
                <div className="round-icon">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/08/truck.png" alt="Trucks" />
                  <span>{t("logisticsTransportation.transportation.trucks")}</span>
                </div>
              </div>
              <div className="icon-item">
                <div className="round-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/marine-vessels.png"
                    alt="Marine Vessels"
                  />
                  <span>{t("logisticsTransportation.transportation.marineVessels")}</span>
                </div>
              </div>
              <div className="icon-item">
                <div className="round-icon">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/08/locomotive.png" alt="Locomotives" />
                  <span>{t("logisticsTransportation.transportation.locomotives")}</span>
                </div>
              </div>
              <div className="icon-item">
                <div className="round-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/handling-equipment.png"
                    alt="Handling Equipment"
                  />
                  <span>{t("logisticsTransportation.transportation.handlingEquipment")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="split-half stationary">
            <h3>{t("logisticsTransportation.stationary.title")}</h3>
            <div className="icon-grid">
              <div className="icon-item">
                <div className="round-icon">
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/08/refineries.png" alt="Refineries" />
                  <span>{t("logisticsTransportation.stationary.refineries")}</span>
                </div>
              </div>
              <div className="icon-item">
                <div className="round-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/oil-gas-storage.png"
                    alt="Oil & Gas Storage"
                  />
                  <span>{t("logisticsTransportation.stationary.oilGasStorage")}</span>
                </div>
              </div>
              <div className="icon-item">
                <div className="round-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/storage-piles-of-coal.png"
                    alt="Storage of Coal"
                  />
                  <span>{t("logisticsTransportation.stationary.storagePilesCoal")}</span>
                </div>
              </div>
              <div className="icon-item">
                <div className="round-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/power-genration.png"
                    alt="Power Generation"
                  />
                  <span>{t("logisticsTransportation.stationary.powerGeneration")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-container">
          <h2>{t("logisticsQuote.title")}</h2>
          <p>{t("logisticsQuote.content")}</p>
        </div>
      </section>

      {/* Areas of Concern Section */}
      <section className="concern-section">
        <div className="section-header">
          <h2>
            {t("logisticsConcern.title")} <span className="highlight">{t("logisticsConcern.highlight")}</span>
          </h2>
          <p className="section-description">{t("logisticsConcern.description")}</p>
        </div>

        <div className="concern-grid">
          <div className="concern-card">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2024/08/Warehouse-Facilities.jpg"
              alt="Warehouse Facilities"
            />
            <h3>{t("logisticsConcern.warehouse.title")}</h3>
            <p>{t("logisticsConcern.warehouse.description")}</p>
          </div>

          <div className="concern-card">
            <img src="https://www.pranaair.com/wp-content/uploads/2024/08/Loading-Docks.jpg" alt="Loading Docks" />
            <h3>{t("logisticsConcern.loadingDocks.title")}</h3>
            <p>{t("logisticsConcern.loadingDocks.description")}</p>
          </div>

          <div className="concern-card">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2024/08/Transportation-Routes.jpg"
              alt="Transportation Routes"
            />
            <h3>{t("logisticsConcern.transportationRoutes.title")}</h3>
            <p>{t("logisticsConcern.transportationRoutes.description")}</p>
          </div>

          <div className="concern-card">
            <img src="https://www.pranaair.com/wp-content/uploads/2024/08/Logistics-Hubs.jpg" alt="Logistics Hubs" />
            <h3>{t("logisticsConcern.logisticsHubs.title")}</h3>
            <p>{t("logisticsConcern.logisticsHubs.description")}</p>
          </div>
        </div>
      </section>

      {/* Who is at Risk Section */}
      <section className="risk-section">
        <div className="section-header">
          <h2>
            {t("logisticsRisk.title")} <span className="highlight">{t("logisticsRisk.highlight")}</span>
          </h2>
          <p className="section-description">{t("logisticsRisk.description")}</p>
        </div>

        <div className="risk-grid">
          <div className="risk-card">
            <div className="risk-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2024/08/Logistics-Workers.png"
                alt="Logistics Workers"
              />
            </div>
            <h3>{t("logisticsRisk.workers.title")}</h3>
            <p>{t("logisticsRisk.workers.description")}</p>
          </div>

          <div className="risk-card">
            <div className="risk-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2024/08/Nearby-Resident.png"
                alt="Nearby Residents"
              />
            </div>
            <h3>{t("logisticsRisk.residents.title")}</h3>
            <p>{t("logisticsRisk.residents.description")}</p>
          </div>

          <div className="risk-card">
            <div className="risk-icon">
              <img src="https://www.pranaair.com/wp-content/uploads/2024/08/Drivers.png" alt="Drivers" />
            </div>
            <h3>{t("logisticsRisk.drivers.title")}</h3>
            <p>{t("logisticsRisk.drivers.description")}</p>
          </div>

          <div className="risk-card">
            <div className="risk-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2024/08/Delivery-Personnel.png"
                alt="Delivery Personnel"
              />
            </div>
            <h3>{t("logisticsRisk.deliveryPersonnel.title")}</h3>
            <p>{t("logisticsRisk.deliveryPersonnel.description")}</p>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions Section */}
      <section className="solutions-section">
        <div className="section-header">
          <h2>
            {t("logisticsSolutions.title")} <span className="highlight">{t("logisticsSolutions.highlight")}</span>
          </h2>
          <p className="section-description">{t("logisticsSolutions.description")}</p>
        </div>

        <div className="tabs-container">
          <ul className="nav nav-tabs" id="solutionsTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="air-quality-monitors-tab"
                data-bs-toggle="tab"
                data-bs-target="#air-quality-monitors"
                type="button"
                role="tab"
                aria-controls="air-quality-monitors"
                aria-selected="true"
              >
                {t("logisticsSolutions.tabs.monitors")}
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="fresh-air-machine-tab"
                data-bs-toggle="tab"
                data-bs-target="#fresh-air-machine"
                type="button"
                role="tab"
                aria-controls="fresh-air-machine"
                aria-selected="false"
              >
                {t("logisticsSolutions.tabs.freshAir")}
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="data-display-tab"
                data-bs-toggle="tab"
                data-bs-target="#data-display"
                type="button"
                role="tab"
                aria-controls="data-display"
                aria-selected="false"
              >
                {t("logisticsSolutions.tabs.dataDisplay")}
              </button>
            </li>
          </ul>

          <div className="tab-content" id="solutionsTabsContent">
            <div
              className="tab-pane fade show active"
              id="air-quality-monitors"
              role="tabpanel"
              aria-labelledby="air-quality-monitors-tab"
            >
              <div className="solution-card">
                <div className="solution-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/Prana-Air-SensibleAir-quality-monitor.jpg"
                    alt="Prana Air Sensible indoor air quality monitor"
                  />
                </div>
                <div className="solution-content">
                  <h3>{t("logisticsSolutions.monitors.title")}</h3>
                  <p>{t("logisticsSolutions.monitors.description")}</p>
                  <ul className="feature-list">
                    <li>{t("logisticsSolutions.monitors.features.feature1")}</li>
                    <li>{t("logisticsSolutions.monitors.features.feature2")}</li>
                    <li>{t("logisticsSolutions.monitors.features.feature3")}</li>
                  </ul>
                  <a className="secondary-button" href="#">
                    {t("logisticsSolutions.monitors.cta")}
                  </a>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="fresh-air-machine"
              role="tabpanel"
              aria-labelledby="fresh-air-machine-tab"
            >
              <div className="solution-card">
                <div className="solution-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/Prana-Air-Fresh-Air-Machines.jpg"
                    alt="Fresh air machine for logistics business"
                  />
                </div>
                <div className="solution-content">
                  <h3>{t("logisticsSolutions.freshAir.title")}</h3>
                  <p>{t("logisticsSolutions.freshAir.description")}</p>
                  <ul className="feature-list">
                    <li>{t("logisticsSolutions.freshAir.features.feature1")}</li>
                    <li>{t("logisticsSolutions.freshAir.features.feature2")}</li>
                    <li>{t("logisticsSolutions.freshAir.features.feature3")}</li>
                  </ul>
                  <a className="secondary-button" href="#">
                    {t("logisticsSolutions.freshAir.cta")}
                  </a>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="data-display" role="tabpanel" aria-labelledby="data-display-tab">
              <div className="solution-card">
                <div className="solution-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/Prana-Air-Customized-screen.jpg"
                    alt="Prana air customized data display"
                  />
                </div>
                <div className="solution-content">
                  <h3>{t("logisticsSolutions.dataDisplay.title")}</h3>
                  <p>{t("logisticsSolutions.dataDisplay.description")}</p>
                  <ul className="feature-list">
                    <li>{t("logisticsSolutions.dataDisplay.features.feature1")}</li>
                    <li>{t("logisticsSolutions.dataDisplay.features.feature2")}</li>
                    <li>{t("logisticsSolutions.dataDisplay.features.feature3")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Effects of Air Pollution Section */}
      <section className="effects-section">
        <div className="section-header">
          <h2>
            {t("logisticsEffects.title")} - <span className="highlight">{t("logisticsEffects.highlight")}</span>
          </h2>
          <p className="section-description">{t("logisticsEffects.description")}</p>
        </div>

        <div className="effects-container">
          <div className="effects-column negative">
            <h3>{t("logisticsEffects.without.title")}</h3>
            <ul className="effects-list negative">
              <li>{t("logisticsEffects.without.effects.effect1")}</li>
              <li>{t("logisticsEffects.without.effects.effect2")}</li>
              <li>{t("logisticsEffects.without.effects.effect3")}</li>
            </ul>
          </div>

          <div className="effects-column positive">
            <h3>{t("logisticsEffects.with.title")}</h3>
            <ul className="effects-list positive">
              <li>{t("logisticsEffects.with.effects.effect1")}</li>
              <li>{t("logisticsEffects.with.effects.effect2")}</li>
              <li>{t("logisticsEffects.with.effects.effect3")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AQI App Slider Section */}
      <section className="aqi-app-section">
        <div className="container">
          <LogisticApplicationsCarousel appSlides={appSlides} />
        </div>
      </section>

      {/* Clientele Section */}
      <section className="clientele-section">
        <div className="section-header">
          <h2>
            {t("clientele.title")} <span className="highlight">{t("clientele.highlight")}</span>
          </h2>
          <p className="section-description">{t("logisticsClientele.description")}</p>
        </div>

        <div className="client-grid">
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png" alt="Morgan Stanley" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png" alt="OLA" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png" alt="Microsoft" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png" alt="IIT BHU" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/RENAULT-NISSAN.png" alt="Renault Nissan" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/TATA.png" alt="TATA" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/CSIR.png" alt="CSIR" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MAHINDRA.png" alt="Mahindra" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/INTERGLOBE.png" alt="Interglobe" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/GMDA-1.png" alt="GMDA" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2024/08/leighton-logo.png" alt="Leighton" />
          </div>
          <div className="client-logo">
            <img src="https://www.pranaair.com/wp-content/uploads/2022/08/HAVELLS.png" alt="Havells" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section-box" id="get_in_touch">
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
        <ContactForm pageName="Logistic Page" />
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>
              {t("faq.title")} <span className="highlight">{t("faq.highlight")}</span>
            </h2>
            <p className="section-description">{t("faq.description")}</p>
          </div>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                  aria-expanded="true"
                  aria-controls="faq1"
                >
                  {t("logisticsFaq.questions.q1")}
                </button>
              </h2>
              <div
                id="faq1"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("logisticsFaq.answers.a1")}</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                  aria-expanded="false"
                  aria-controls="faq2"
                >
                  {t("logisticsFaq.questions.q2")}
                </button>
              </h2>
              <div
                id="faq2"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("logisticsFaq.answers.a2")}</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                  aria-expanded="false"
                  aria-controls="faq3"
                >
                  {t("logisticsFaq.questions.q3")}
                </button>
              </h2>
              <div
                id="faq3"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("logisticsFaq.answers.a3")}</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq4"
                  aria-expanded="false"
                  aria-controls="faq4"
                >
                  {t("logisticsFaq.questions.q4")}
                </button>
              </h2>
              <div
                id="faq4"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("logisticsFaq.answers.a4")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Applications Section */}
      <section className="applications-section">
        <div className="section-header">
          <h2>
            {t("industrial.title")} <span className="highlight">{t("industrial.highlight")}</span>
          </h2>
          <p className="section-description">{t("industrial.description")}</p>
        </div>

        <div className="modern-applications-container">
          <IndustrialApplicationsCarousel applications={industrialApplications} />
        </div>
      </section>

      {/* Bootstrap JS */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Initialize Bootstrap components
              var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
              var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
              })
            });
          `,
        }}
      />
    </div>
  )
}
