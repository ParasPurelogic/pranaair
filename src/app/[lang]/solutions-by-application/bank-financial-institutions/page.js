import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain } from "@/config"

export default async function BankFinancePage() {
  const { t } = await getServerTranslation("bank-financial")
  const industrialApplications = [
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-hotel.jpg",
      title: t("industrialApplicationsData.hotel.title"),
      link: "/solutions-by-application/hotel-businesses/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-restaurant.jpg",
      title: t("industrialApplicationsData.restaurant.title"),
      link: "/solutions-by-application/restaurants/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-institute.jpg",
      title: t("industrialApplicationsData.institutes.title"),
      link: "/solutions-by-application/institutes/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-cinema.jpg",
      title: t("industrialApplicationsData.cinema.title"),
      link: "/solutions-by-application/cinema-and-theatre/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-autombile.jpg",
      title: t("industrialApplicationsData.automobiles.title"),
      link: "/solutions-by-application/automobile/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-real-estate.jpg",
      title: t("industrialApplicationsData.realEstate.title"),
      link: "/solutions-by-application/real-estate/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/solutions-for-mobile-phone-makers.png",
      title: t("industrialApplicationsData.smartphone.title"),
      link: "/solutions-by-application/smartphone-makers/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-construction-sites.jpg",
      title: t("industrialApplicationsData.construction.title"),
      link: "/solutions-by-industry/pm2-5-monitoring-air-pollution-by-construction-sites/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-animale-care-page.jpg",
      title: t("industrialApplicationsData.animalCare.title"),
      link: "/solutions-by-application/animal-care-center/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-logistics-page.jpg",
      title: t("industrialApplicationsData.logistics.title"),
      link: "/solutions-by-application/logistics/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-railway-page.jpg",
      title: t("industrialApplicationsData.railways.title"),
      link: "/solutions-by-application/railway/",
    }
  ]

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
              {t("banking.banner.title")} <span className="bold_text">{t("banking.banner.highlight")}</span>
            </h1>
            <p style={{ fontSize: "14pt" }}>{t("banking.banner.description")}</p>

            <a className="pocket_buy_btn" href="#get_in_touch">
              {t("banking.banner.cta")}
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
              {t("banking.pollutants.title")} <span className="bold_text">{t("banking.pollutants.highlight")}</span>
            </h2>
            <p>{t("banking.pollutants.description")}</p>
          </div>
        </div>
      </div>

      {/* Pollutants Grid - Modern Layout */}
      <div className="modern-pollutants-grid inner_container mobile-optimized">
        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-parameter.png"
            alt={t("banking.pollutantFeatures.pm25.imgAlt")}
            className="pollutant-icon"
          />
          <h3>{t("banking.pollutantFeatures.pm25.title")}</h3>
          <p>{t("banking.pollutantFeatures.pm25.description")}</p>
        </div>

        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-gas-icon.png"
            alt={t("banking.pollutantFeatures.co2.imgAlt")}
            className="pollutant-icon"
          />
          <h3>{t("banking.pollutantFeatures.co2.title")}</h3>
          <p>{t("banking.pollutantFeatures.co2.description")}</p>
        </div>

        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-parameter-icon.png"
            alt={t("banking.pollutantFeatures.tvoc.imgAlt")}
            className="pollutant-icon"
          />
          <h3>{t("banking.pollutantFeatures.tvoc.title")}</h3>
          <p>{t("banking.pollutantFeatures.tvoc.description")}</p>
        </div>

        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/08/noise-icon.png"
            alt={t("banking.pollutantFeatures.noise.imgAlt")}
            className="pollutant-icon"
          />
          <h3>{t("banking.pollutantFeatures.noise.title")}</h3>
          <p>{t("banking.pollutantFeatures.noise.description")}</p>
        </div>

        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/12/odor-icon.png"
            alt={t("banking.pollutantFeatures.odor.imgAlt")}
            className="pollutant-icon"
          />
          <h3>{t("banking.pollutantFeatures.odor.title")}</h3>
          <p>{t("banking.pollutantFeatures.odor.description")}</p>
        </div>

        <div className="pollutant-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2022/12/microbe-icon.png"
            alt={t("banking.pollutantFeatures.microbial.imgAlt")}
            className="pollutant-icon"
          />
          <h3>{t("banking.pollutantFeatures.microbial.title")}</h3>
          <p>{t("banking.pollutantFeatures.microbial.description")}</p>
        </div>
      </div>

      {/* SECTION 3: Who is at Risk? */}
      <div className="vc_row full_width stretch_row" style={{ paddingTop: "45px" }}>
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("banking.risk.title")} <span className="bold_text">{t("banking.risk.highlight")}</span>
            </h2>
            <p>{t("banking.risk.description")}</p>
          </div>
        </div>
      </div>

      {/* Risk Factors Grid - Modern Layout */}
      <div className="modern-risk-grid inner_container mobile-optimized">
        <div className="risk-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/01/bank-customers.png"
            alt={t("banking.riskGroups.customers.imgAlt")}
            className="risk-icon"
          />
          <h3>{t("banking.riskGroups.customers.title")}</h3>
          <p>{t("banking.riskGroups.customers.description")}</p>
        </div>

        <div className="risk-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/01/bankers.png"
            alt={t("banking.riskGroups.banker.imgAlt")}
            className="risk-icon"
          />
          <h3>{t("banking.riskGroups.banker.title")}</h3>
          <p>{t("banking.riskGroups.banker.description")}</p>
        </div>

        <div className="risk-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/01/Cashiers.png"
            alt={t("banking.riskGroups.cashiers.imgAlt")}
            className="risk-icon"
          />
          <h3>{t("banking.riskGroups.cashiers.title")}</h3>
          <p>{t("banking.riskGroups.cashiers.description")}</p>
        </div>

        <div className="risk-item">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/01/bank-manager.png"
            alt={t("banking.riskGroups.manager.imgAlt")}
            className="risk-icon"
          />
          <h3>{t("banking.riskGroups.manager.title")}</h3>
          <p>{t("banking.riskGroups.manager.description")}</p>
        </div>
      </div>

      {/* SECTION 4: Air quality Solutions */}
      <div className="vc_row full_width stretch_row quality_solution_section top_space_heading">
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("banking.solutions.title")} <span className="bold_text">{t("banking.solutions.highlight")}</span>
            </h2>
            <p>{t("banking.solutions.description")}</p>
          </div>
        </div>
      </div>

      {/* Solutions Tabs Section */}
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
                  {t("banking.tabs.monitors")}
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
                  {t("banking.tabs.freshAir")}
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
                  {t("banking.tabs.apiData")}
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
                        alt={t("banking.tabContent.monitors.imgAlt")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="air-quality-heading">
                      <h3>{t("banking.tabContent.monitors.title")}</h3>
                      <p>{t("banking.tabContent.monitors.description")}</p>
                    </div>
                    <ul className="airquality_list">
                      <li>{t("banking.tabContent.monitors.features.item1")}</li>
                      <li>{t("banking.tabContent.monitors.features.item2")}</li>
                      <li>{t("banking.tabContent.monitors.features.item3")}</li>
                    </ul>
                    <div className="btns-bottom">
                      <Link
                        className="knowmore_btn"
                        href={`${domain}/air-quality-monitor/sensible-plus-air-monitor/`}
                        aria-label={t("banking.tabContent.monitors.knowMoreAriaLabel")}
                      >
                        {t("banking.tabContent.monitors.knowMore")}
                      </Link>
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
                        alt={t("banking.tabContent.freshAir.imgAlt")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="air-quality-heading">
                      <h3>{t("banking.tabContent.freshAir.title")}</h3>
                      <p>{t("banking.tabContent.freshAir.description")}</p>
                    </div>
                    <ul className="airquality_list">
                      <li>{t("banking.tabContent.freshAir.features.item1")}</li>
                      <li>{t("banking.tabContent.freshAir.features.item2")}</li>
                      <li>{t("banking.tabContent.freshAir.features.item3")}</li>
                    </ul>
                    <div className="btns-bottom">
                      <Link
                        className="knowmore_btn"
                        href={`${domain}/fresh-air-machine/`}
                        aria-label={t("banking.tabContent.freshAir.knowMoreAriaLabel")}
                      >
                        {t("banking.tabContent.freshAir.knowMore")}
                      </Link>
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
                        alt={t("banking.tabContent.apiData.imgAlt")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="air-quality-heading">
                      <h3>{t("banking.tabContent.apiData.title")}</h3>
                      <p>{t("banking.tabContent.apiData.description")}</p>
                    </div>
                    <ul className="airquality_list">
                      <li>{t("banking.tabContent.apiData.features.item1")}</li>
                      <li>{t("banking.tabContent.apiData.features.item2")}</li>
                      <li>{t("banking.tabContent.apiData.features.item3")}</li>
                    </ul>
                    <div className="btns-bottom">
                      <a
                        className="knowmore_btn"
                        href="#get_in_touch"
                        aria-label={t("banking.tabContent.apiData.knowMoreAriaLabel")}
                      >
                        {t("banking.tabContent.apiData.knowMore")}
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
              {t("banking.dataServices.title")} <span className="bold_text">{t("banking.dataServices.highlight")}</span>
            </h2>
            <p>{t("banking.dataServices.description")}</p>
          </div>
        </div>
      </div>

      <div className="container inner_container">
        <div className="row">
          <div className="col-md-4">
            <div className="app_service_box">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/aqi-tv-app-dashboard.jpg"
                alt={t("banking.dataServicesFeatures.tvDashboard.imgAlt")}
              />
              <h4>{t("banking.dataServicesFeatures.tvDashboard.title")}</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="app_service_box">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/aqi-customized-tablet-app.jpg"
                alt={t("banking.dataServicesFeatures.webDashboard.imgAlt")}
              />
              <h4>{t("banking.dataServicesFeatures.webDashboard.title")}</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="app_service_box">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-data-qrcode-for-airpot.jpg"
                alt={t("banking.dataServicesFeatures.qrCode.imgAlt")}
              />
              <h4>{t("banking.dataServicesFeatures.qrCode.title")}</h4>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 8: Effects of Air Pollution */}
      <div className="vc_row full_width stretch_row top_space_heading" style={{ paddingTop: "15px" }}>
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("banking.airPollutionEffects.title")}
              <span className="bold_text">{t("banking.airPollutionEffects.highlight")}</span>
            </h2>
            <p>{t("banking.airPollutionEffects.description")}</p>
          </div>
        </div>
      </div>

      <div className="modern-comparison-container inner_container mobile-friendly">
        <div className="comparison-column with-clean">
          <h3>{t("banking.airComparison.cleanAir.title")}</h3>
          <ul className="comparison-list">
            <li>{t("banking.airComparison.cleanAir.benefits.item1")}</li>
            <li>{t("banking.airComparison.cleanAir.benefits.item2")}</li>
            <li>{t("banking.airComparison.cleanAir.benefits.item3")}</li>
            <li>{t("banking.airComparison.cleanAir.benefits.item4")}</li>
          </ul>
        </div>

        <div className="comparison-divider"></div>

        <div className="comparison-column without-clean">
          <h3>{t("banking.airComparison.uncleanAir.title")}</h3>
          <ul className="comparison-list red">
            <li>{t("banking.airComparison.uncleanAir.drawbacks.item1")}</li>
            <li>{t("banking.airComparison.uncleanAir.drawbacks.item2")}</li>
            <li>{t("banking.airComparison.uncleanAir.drawbacks.item3")}</li>
            <li>{t("banking.airComparison.uncleanAir.drawbacks.item4")}</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="vc_row full_width stretch_row faq_ask_section" style={{ paddingTop: "60px" }}>
        <div className="vc_column">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("banking.faq.title")} <span className="bold_text">{t("banking.faq.highlight")}</span>
            </h2>
            <p>{t("banking.faq.description")}</p>
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
                  {t("banking.clientele.title")}{" "}
                  <span style={{ color: "#78ae60" }}>
                    <strong>{t("banking.clientele.highlight")}</strong>
                  </span>
                </h2>
                <p>{t("banking.clientele.description")}</p>
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
                <h2>{t("banking.contact.title")}</h2>
                <p>{t("banking.contact.description")}</p>
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
              {t("banking.industrialApplications.title")}{" "}
              <span className="bold_text">{t("banking.industrialApplications.highlight")}</span>
            </h2>
            <p>{t("banking.industrialApplications.description")}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pd-bt">
          <div className="col-md-12">
            <div className="owl-slider">
              <IndustrialApplicationsCarousel applications={industrialApplications} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
