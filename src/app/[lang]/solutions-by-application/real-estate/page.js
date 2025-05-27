import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import { getServerTranslation } from "@/i18n/server"

export default async function RealEstate() {
  const { t } = await getServerTranslation("real-estate")
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

  return (
    <div className="real-estate-page">
      {/* Banner Section */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>
            {t("realEstateBanner.title")}
            <br />
            <span className="highlight-text">{t("realEstateBanner.highlight")}</span>
          </h1>
          <p>{t("realEstateBanner.description")}</p>
          <div className="category-tabs">
            <span>{t("realEstateBanner.categories.residential")}</span>{" "}
            <span>{t("realEstateBanner.categories.commercial")}</span>
          </div>
          <a className="cta-button" href="#get_in_touch">
            {t("realEstateBanner.cta")}
          </a>
        </div>
        <div className="hero-image">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/12/air-quality-solutions-for-real-estates.jpg"
            alt={t("realEstateBanner.imageAlt")}
          />
        </div>
      </div>

      {/* Major Air Pollutants Section */}
      <div className="section-container">
        <div className="section-header">
          <h2>
            {t("realEstatePollutants.title")}{" "}
            <span className="highlight-text">{t("realEstatePollutants.highlight")}</span>
          </h2>
          <p>{t("realEstatePollutants.description")}</p>
        </div>

        <div className="pollutants-grid">
          {["pm25", "co2", "tvoc", "co", "odor", "smoke", "tempHumidity", "noise"].map((pollutant) => (
            <div className="pollutant-item" key={pollutant}>
              <div className="pollutant-icon">
                <img
                  src={`https://www.pranaair.com/wp-content/uploads/2022/${pollutant === "pm25"
                    ? "08/pm2.5-parameter.png"
                    : pollutant === "co2"
                      ? "08/co2-gas-icon.png"
                      : pollutant === "tvoc"
                        ? "08/tvoc-parameter-icon.png"
                        : pollutant === "co"
                          ? "08/co-icon.png"
                          : pollutant === "odor"
                            ? "12/odor-icon.png"
                            : pollutant === "smoke"
                              ? "12/smoke.png"
                              : pollutant === "tempHumidity"
                                ? "12/temp-humidity.png"
                                : "08/noise-icon.png"
                    }`}
                  alt={t(`realEstatePollutants.items.${pollutant}.imageAlt`)}
                  width={pollutant === "co2" || pollutant === "tempHumidity" || pollutant === "noise" ? 85 : 75}
                  height={pollutant === "co2" ? 83 : pollutant === "tvoc" ? 79 : pollutant === "co" ? 69 : 70}
                />
              </div>
              <h3>{t(`realEstatePollutants.items.${pollutant}.title`)}</h3>
              <p>{t(`realEstatePollutants.items.${pollutant}.description`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pollutants Effects Section */}
      <div
        className="pollutants-overlay-section"
        style={{
          backgroundImage:
            "url(https://www.pranaair.com/wp-content/uploads/2022/12/air-quality-problems-for-real-estates.jpg)",
        }}
      >
        <div className="overlay-content">
          {[
            { id: "pm25", position: { top: "15%", left: "25%" } },
            { id: "co2", position: { top: "15%", right: "15%" } },
            { id: "noise", position: { top: "40%", left: "10%" } },
            { id: "tempHumidity", position: { top: "35%", right: "10%" } },
            { id: "odor", position: { bottom: "10%", left: "15%" } },
            { id: "tvoc", position: { bottom: "25%", right: "15%" } },
          ].map((marker) => (
            <div className="pollutant-marker" style={marker.position} key={marker.id}>
              <div className="marker-circle">
                <img
                  src={`https://www.pranaair.com/wp-content/uploads/2022/${marker.id === "pm25"
                    ? "08/pm2.5-icon-2.png"
                    : marker.id === "co2"
                      ? "08/co2-icon.png"
                      : marker.id === "noise"
                        ? "08/noise-icon-for-restaurant.png"
                        : marker.id === "tempHumidity"
                          ? "12/temp-and-humidity-icon.png"
                          : marker.id === "odor"
                            ? "12/odor.png"
                            : "08/tvoc-icon.png"
                    }`}
                  alt={t(`realEstateEffects.markers.${marker.id}.imageAlt`)}
                />
              </div>
              <div className="marker-box">
                <h3>{t(`realEstateEffects.markers.${marker.id}.title`)}</h3>
                <p>{t(`realEstateEffects.markers.${marker.id}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Who are at Risk Section - Residential Areas */}
      <div className="section-container">
        <div className="section-header">
          <h2>
            {t("realEstateRisk.title")} <span className="highlight-text">{t("realEstateRisk.highlight")}</span>
          </h2>
          <p>{t("realEstateRisk.description")}</p>
        </div>

        <h3 className="subsection-title">{t("realEstateRisk.residential.title")}</h3>

        <div className="risk-grid">
          {["children", "pregnant", "old", "healthIssues"].map((risk) => (
            <div className="risk-item" key={risk}>
              <div className="risk-image">
                <img
                  src={`https://www.pranaair.com/wp-content/uploads/2022/12/${risk === "children"
                    ? "children.png"
                    : risk === "pregnant"
                      ? "pregnant-women.png"
                      : risk === "old"
                        ? "old-people.png"
                        : "people-with-health-issues.png"
                    }`}
                  alt={t(`realEstateRisk.residential.items.${risk}.imageAlt`)}
                  width={risk === "old" ? 35 : risk === "children" ? 75 : 80}
                  height={risk === "children" ? 163 : risk === "pregnant" ? 159 : 150}
                />
              </div>
              <h3>{t(`realEstateRisk.residential.items.${risk}.title`)}</h3>
              <p>{t(`realEstateRisk.residential.items.${risk}.description`)}</p>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">{t("realEstateRisk.commercial.title")}</h3>

        <div className="risk-grid">
          {["returning", "staff", "sensitive", "healthy"].map((risk) => (
            <div className="risk-item" key={risk}>
              <div className="risk-image">
                <img
                  src={`https://www.pranaair.com/wp-content/uploads/2022/12/${risk === "returning"
                    ? "returning-customer.png"
                    : risk === "staff"
                      ? "staff-member.png"
                      : risk === "sensitive"
                        ? "sensitive-person.png"
                        : "healthy-individual.png"
                    }`}
                  alt={t(`realEstateRisk.commercial.items.${risk}.imageAlt`)}
                  width={risk === "returning" || risk === "sensitive" ? 65 : 83}
                  height={risk === "returning" || risk === "sensitive" ? 176 : 159}
                />
              </div>
              <h3>{t(`realEstateRisk.commercial.items.${risk}.title`)}</h3>
              <p>{t(`realEstateRisk.commercial.items.${risk}.description`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Air Quality Solutions Section - Using Bootstrap Tabs */}
      <div className="section-container">
        <div className="section-header">
          <h2>
            {t("realEstateSolutions.title")}{" "}
            <span className="highlight-text">{t("realEstateSolutions.highlight")}</span>
          </h2>
          <p>{t("realEstateSolutions.description")}</p>
        </div>

        <div className="solutions-tabs">
          <ul className="nav nav-tabs" id="solutionsTabs" role="tablist">
            {["monitors", "freshAir", "apiData"].map((tab, index) => (
              <li className="nav-item" role="presentation" key={tab}>
                <button
                  className={`nav-link ${index === 0 ? "active" : ""}`}
                  id={`${tab}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${tab}`}
                  type="button"
                  role="tab"
                  aria-controls={tab}
                  aria-selected={index === 0 ? "true" : "false"}
                >
                  {t(`realEstateSolutions.tabs.${tab}`)}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content" id="solutionsTabsContent">
            <div className="tab-pane fade show active" id="monitors" role="tabpanel" aria-labelledby="monitors-tab">
              <div className="product-slider">
                {/* Slider for Air Quality Monitors */}
                <div id="airQualityMonitorsCarousel" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="product-slide">
                        <div className="product-info">
                          <h3>{t("realEstateSolutions.monitors.sensible.title")}</h3>
                          <p>{t("realEstateSolutions.monitors.sensible.description")}</p>
                          <ul className="feature-list">
                            {[1, 2, 3].map((num) => (
                              <li key={num}>{t(`realEstateSolutions.monitors.sensible.features.feature${num}`)}</li>
                            ))}
                          </ul>
                          <div className="product-actions">
                            <a
                              href="https://www.pranaair.com/air-quality-monitor/sensible-plus-air-monitor/"
                              className="primary-button"
                            >
                              {t("realEstateSolutions.knowMore")}
                            </a>
                          </div>
                        </div>
                        <div className="product-image">
                          <img
                            style={{ width: "100%" }}
                            src="https://www.pranaair.com/wp-content/uploads/2022/12/prana-air-sensible-plus-air-monitor-for-real-estates.png"
                            alt={t("realEstateSolutions.monitors.sensible.imageAlt")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="product-slide">
                        <div className="product-info">
                          <h3>{t("realEstateSolutions.monitors.squair.title")}</h3>
                          <p>{t("realEstateSolutions.monitors.squair.description")}</p>
                          <ul className="feature-list">
                            {[1, 2, 3].map((num) => (
                              <li key={num}>{t(`realEstateSolutions.monitors.squair.features.feature${num}`)}</li>
                            ))}
                          </ul>
                          <div className="product-actions">
                            <a
                              href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/"
                              className="primary-button"
                            >
                              {t("realEstateSolutions.knowMore")}
                            </a>
                            <a
                              href="https://www.pranaair.com/air-quality-monitor/rental-air-monitor/"
                              className="secondary-link"
                            >
                              {t("realEstateSolutions.lookingToRent")}
                            </a>
                          </div>
                        </div>
                        <div className="product-image">
                          <img
                            style={{ width: "100%" }}
                            src="https://www.pranaair.com/wp-content/uploads/2022/12/prana-air-squair-air-monitor-for-real-estates.png"
                            alt={t("realEstateSolutions.monitors.squair.imageAlt")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#airQualityMonitorsCarousel"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true">
                      ❮
                    </span>
                    <span className="visually-hidden">{t("realEstateSolutions.previous")}</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#airQualityMonitorsCarousel"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true">
                      ❯
                    </span>
                    <span className="visually-hidden">{t("realEstateSolutions.next")}</span>
                  </button>
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#airQualityMonitorsCarousel"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#airQualityMonitorsCarousel"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="freshAir" role="tabpanel" aria-labelledby="freshAir-tab">
              <div className="product-slider">
                <div className="product-slide active">
                  <div className="product-info">
                    <h3>{t("realEstateSolutions.freshAir.title")}</h3>
                    <p>{t("realEstateSolutions.freshAir.description")}</p>
                    <ul className="feature-list">
                      {[1, 2, 3].map((num) => (
                        <li key={num}>{t(`realEstateSolutions.freshAir.features.feature${num}`)}</li>
                      ))}
                    </ul>
                    <div className="product-actions">
                      <a href="https://www.pranaair.com/fresh-air-machine/" className="primary-button">
                        {t("realEstateSolutions.knowMore")}
                      </a>
                    </div>
                  </div>
                  <div className="product-image">
                    <img
                      style={{ width: "100%" }}
                      src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-fresh-air-machine-for-iaq-solution.jpg"
                      alt={t("realEstateSolutions.freshAir.imageAlt")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="apiData" role="tabpanel" aria-labelledby="apiData-tab">
              <div className="product-slider">
                <div className="product-slide active">
                  <div className="product-info">
                    <h3>{t("realEstateSolutions.apiData.title")}</h3>
                    <p>{t("realEstateSolutions.apiData.description")}</p>
                    <ul className="feature-list">
                      {[1, 2, 3].map((num) => (
                        <li key={num}>{t(`realEstateSolutions.apiData.features.feature${num}`)}</li>
                      ))}
                    </ul>
                    <div className="product-actions">
                      <a href="#get_in_touch" className="primary-button">
                        {t("realEstateSolutions.knowMore")}
                      </a>
                    </div>
                  </div>
                  <div className="product-image">
                    <img
                      style={{ width: "100%" }}
                      src="https://www.pranaair.com/wp-content/uploads/2022/08/aqi-api-data-for-institutes.jpg"
                      alt={t("realEstateSolutions.apiData.imageAlt")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Freemium Services Section */}
      <div className="section-container">
        <div className="section-header">
          <h2>
            {t("realEstateFreemium.title")} <span className="highlight-text">{t("realEstateFreemium.highlight")}</span>
          </h2>
          <p>{t("realEstateFreemium.description")}</p>
        </div>

        <div className="services-grid">
          {["tvApp", "customApp", "qrCode"].map((service) => (
            <div className="service-item" key={service}>
              <div className="service-image">
                <img
                  src={`https://www.pranaair.com/wp-content/uploads/2022/12/${service === "tvApp"
                    ? "tv-app-dashboard-for-real-estates.png"
                    : service === "customApp"
                      ? "customized-app-dashboard-for-real-estates.png"
                      : "aqi-qr-code-scan.png"
                    }`}
                  alt={t(`realEstateFreemium.services.${service}.imageAlt`)}
                />
              </div>
              <h3>{t(`realEstateFreemium.services.${service}.title`)}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Effects of Air Pollution Section */}
      <div className="section-container">
        <div className="section-header">
          <h2>
            {t("realEstateComparison.title")} -{" "}
            <span className="highlight-text">{t("realEstateComparison.highlight")}</span>
          </h2>
          <p>{t("realEstateComparison.description")}</p>
        </div>

        <div className="comparison-container">
          <div className="comparison-column clean">
            <h3>{t("realEstateComparison.clean.title")}</h3>
            <ul className="comparison-list">
              {[1, 2, 3, 4].map((num) => (
                <li key={num}>{t(`realEstateComparison.clean.benefits.benefit${num}`)}</li>
              ))}
            </ul>
          </div>

          <div className="comparison-divider"></div>

          <div className="comparison-column unclean">
            <h3>{t("realEstateComparison.unclean.title")}</h3>
            <ul className="comparison-list">
              {[1, 2, 3, 4].map((num) => (
                <li key={num}>{t(`realEstateComparison.unclean.drawbacks.drawback${num}`)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section - Using Bootstrap Accordion */}
      <div className="section-container">
        <div className="section-header">
          <h2>
            {t("faq.title")} <span className="highlight-text">{t("faq.highlight")}</span>
          </h2>
          <p>
            {t("realEstateFaq.description")}
            <br />
            {t("realEstateFaq.helpText")}
          </p>
        </div>

        <div className="accordion" id="faqAccordion">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div className="accordion-item" key={num}>
              <h2 className="accordion-header" id={`heading${num}`}>
                <button
                  className={`accordion-button ${num === 1 ? "" : "collapsed"}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${num}`}
                  aria-expanded={num === 1 ? "true" : "false"}
                  aria-controls={`collapse${num}`}
                >
                  {t(`realEstateFaq.questions.q${num}`)}
                </button>
              </h2>
              <div
                id={`collapse${num}`}
                className={`accordion-collapse collapse ${num === 1 ? "show" : ""}`}
                aria-labelledby={`heading${num}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t(`realEstateFaq.answers.a${num}`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section-box" id="get_in_touch">
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
        <ContactForm pageName="Real Estate Page" />
      </div>

      {/* Industrial Applications Section */}
      <div className="section-container">
        <div className="section-header">
          <h2>
            {t("industrial.title")} <span className="highlight-text">{t("industrial.highlight")}</span>
          </h2>
          <p>{t("industrial.description")}</p>
        </div>

        <div className="applications-slider">
          <IndustrialApplicationsCarousel applications={industrialApplications} />
        </div>
      </div>

      {/* Bootstrap initialization script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Initialize Bootstrap components
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
              return new bootstrap.Tooltip(tooltipTriggerEl)
            })
            
            // Initialize any other custom functionality
            // For example, school box interactions if needed
          });
        `,
        }}
      />
    </div>
  )
}
