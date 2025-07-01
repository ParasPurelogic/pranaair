import Image from "next/image"
import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import { getServerTranslation } from "@/i18n/server"
import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
  const lang = params?.lang || "en";
  const slug = "air-quality-monitor"; // page-specific slug
  const { t } = await getServerTranslation("rmc-plant");
  const title = t("meta.title");
  const description = t("meta.description");
  const image = t("meta.image") || `${domain}/images/${slug}.jpg`;

  const languages = supportedLanguages.reduce((acc, code) => {
    acc[code] = `${domain}/${code}/${slug}`;
    return acc;
  }, {});

  return {
    title,
    description,
    alternates: {
      canonical: `${domain}/${lang}/${slug}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${domain}/${lang}/${slug}`,
      siteName: "Prana Air",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
export default async function ReadyMixConcretePlant() {
  const { t } = await getServerTranslation("rmc-plant")
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
    <main>
      {/* Banner Section */}
      <section className="school_banner_box">
        <div className="banner_quality_box">
          <div className="pocket_title_box school_aqi_box">
            <h1>
              {t("rmcBanner.title")}
              <span className="bold_text"> {t("rmcBanner.highlight")}</span>
            </h1>
            <span style={{ fontSize: "14pt" }}>{t("rmcBanner.description")}</span>
            <a className="pocket_buy_btn" href="#get_in_touch">
              {t("rmcBanner.cta")}
            </a>
          </div>
        </div>
        <div className="banner_quality_img_box">{/* Banner image is set as background in CSS */}</div>
      </section>

      {/* Major Air Pollutants Section */}
      <section>
        <div className="introducing_box sub_title_box text-center">
          <h2 className="title_heading">
            {t("rmcPollutants.title")} <span className="bold_text">{t("rmcPollutants.highlight")}</span>
          </h2>
          <p>{t("rmcPollutants.description")}</p>
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
            <h2>{t("rmcPollutants.pm.title")}</h2>
            <p>{t("rmcPollutants.pm.description")}</p>
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
            <h2>{t("rmcPollutants.noise.title")}</h2>
            <p>{t("rmcPollutants.noise.description")}</p>
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
            <h2>{t("rmcPollutants.co.title")}</h2>
            <p>{t("rmcPollutants.co.description")}</p>
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
            <h2>{t("rmcPollutants.vocs.title")}</h2>
            <p>{t("rmcPollutants.vocs.description")}</p>
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
            <h2>{t("rmcPollutants.sox.title")}</h2>
            <p>{t("rmcPollutants.sox.description")}</p>
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
            <h2>{t("rmcPollutants.nox.title")}</h2>
            <p>{t("rmcPollutants.nox.description")}</p>
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
                <h3>{t("rmcImpact.sox.title")}</h3>
                <p>{t("rmcImpact.sox.description")}</p>
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
                <h3>{t("rmcImpact.noise.title")}</h3>
                <p>{t("rmcImpact.noise.description")}</p>
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
                <h3>{t("rmcImpact.nox.title")}</h3>
                <p>{t("rmcImpact.nox.description")}</p>
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
                <h3>{t("rmcImpact.pm.title")}</h3>
                <p>{t("rmcImpact.pm.description")}</p>
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
                <h3>{t("rmcImpact.co.title")}</h3>
                <p>{t("rmcImpact.co.description")}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* MPCB Guidelines Section */}
      <section className="top_space_heading">
        <div className="introducing_box sub_title_box">
          <h2 className="title_heading">
            <span>{t("rmcGuidelines.title")}</span> {t("rmcGuidelines.subtitle")}
          </h2>
          <p>{t("rmcGuidelines.description")}</p>
          <div className="introduce_button">
            <button
              className="bg-btn bg-green view_btn"
              data-bs-toggle="collapse"
              data-bs-target="#guidelinesCollapse"
              aria-expanded="false"
              aria-controls="guidelinesCollapse"
            >
              <span className="btn-text">{t("rmcGuidelines.knowMore")}</span>
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
            <h3>{t("rmcGuidelines.selfAssessment.title")}</h3>
            <p>{t("rmcGuidelines.selfAssessment.description")}</p>

            <div className="mpcb-logo-container">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/05/mpcsa-logo-300x286.png"
                alt="MPCB logo"
                width={98}
                height={94}
              />
              <p>
                <strong>{t("rmcGuidelines.mpcb.title")}</strong>
                <br />
                {t("rmcGuidelines.mpcb.fullName")}
              </p>
            </div>

            <h4 className="guidelines-title">{t("rmcGuidelines.guidelinesTitle")}</h4>

            <div className="guidelines-grid">
              {Array.from({ length: 7 }).map((_, index) => (
                <div className="guideline-item" key={index}>
                  <div className="bullet"></div>
                  <span>{t(`rmcGuidelines.guidelines.guideline${index + 1}`)}</span>
                </div>
              ))}
            </div>

            <div className="rmc-gazette">
              <p>
                <strong>{t("rmcGuidelines.gazette.title")}</strong>
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

            <h2 className="air_heading">{t("rmcGuidelines.solutions.title")}</h2>

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
                    <h3>{t("rmcGuidelines.solutions.tabs.ambient")}</h3>
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
                    <h3>{t("rmcGuidelines.solutions.tabs.api")}</h3>
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
                    <h3>{t("rmcGuidelines.solutions.tabs.cctv")}</h3>
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="solutionTabsContent">
                <div className="tab-pane fade show active" id="ambient" role="tabpanel" aria-labelledby="ambient-tab">
                  <div className="solution-content-inner">
                    <p>{t("rmcGuidelines.solutions.ambient.description")}</p>

                    <h4>{t("rmcGuidelines.solutions.features")}</h4>
                    <ul className="features-list">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <li key={index}>{t(`rmcGuidelines.solutions.ambient.features.feature${index + 1}`)}</li>
                      ))}
                    </ul>

                    <div className="parameter-tags">
                      {["AQI", "PM1.0", "PM2.5", "PM10", "Temperature", "Humidity"].map((param) => (
                        <div className="parameter-tag" key={param}>
                          {param}
                        </div>
                      ))}
                    </div>

                    <div className="action-buttons">
                      <a href="#" className="brochure-btn">
                        {t("rmcGuidelines.solutions.brochure")}
                      </a>
                      <a href="#get_in_touch" className="quote-btn">
                        {t("rmcGuidelines.solutions.quote")}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="api" role="tabpanel" aria-labelledby="api-tab">
                  <div className="solution-content-inner">
                    <p>{t("rmcGuidelines.solutions.api.description")}</p>

                    <h4>{t("rmcGuidelines.solutions.features")}</h4>
                    <ul className="features-list two-column">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <li key={index}>{t(`rmcGuidelines.solutions.api.features.feature${index + 1}`)}</li>
                      ))}
                    </ul>

                    <div className="action-buttons">
                      <a href="#" className="brochure-btn">
                        {t("rmcGuidelines.solutions.brochure")}
                      </a>
                      <a href="#get_in_touch" className="quote-btn">
                        {t("rmcGuidelines.solutions.quote")}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="cctv" role="tabpanel" aria-labelledby="cctv-tab">
                  <div className="solution-content-inner">
                    <p>{t("rmcGuidelines.solutions.cctv.description")}</p>

                    <h4>{t("rmcGuidelines.solutions.features")}</h4>
                    <ul className="features-list two-column">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <li key={index}>{t(`rmcGuidelines.solutions.cctv.features.feature${index + 1}`)}</li>
                      ))}
                    </ul>

                    <div className="action-buttons">
                      <a href="#" className="brochure-btn">
                        {t("rmcGuidelines.solutions.brochure")}
                      </a>
                      <a href="#get_in_touch" className="quote-btn">
                        {t("rmcGuidelines.solutions.quote")}
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
                  {t("rmcGuidelines.hide")} <span>▲</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Monitoring Section */}
      <section className="quality_solution_section">
        <div className="container">
          <div className="introducing_box sub_title_box">
            <h2 className="title_heading">
              {t("rmcMonitoring.title")} <span className="bold_text">{t("rmcMonitoring.highlight")}</span>
            </h2>
            <p>{t("rmcMonitoring.description")}</p>
          </div>

          <ul className="nav nav-tabs monitoring-tabs" id="monitoringTabs" role="tablist">
            {["monitor", "display", "storage"].map((tab, index) => (
              <li className="nav-item" role="presentation" key={tab}>
                <button
                  className={`nav-link monitoring-tab ${index === 0 ? "active" : ""}`}
                  id={`${tab}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${tab}`}
                  type="button"
                  role="tab"
                  aria-controls={tab}
                  aria-selected={index === 0 ? "true" : "false"}
                >
                  {t(`rmcMonitoring.tabs.${tab}`)}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content" id="monitoringTabsContent">
            <div className="tab-pane fade show active" id="monitor" role="tabpanel" aria-labelledby="monitor-tab">
              <div className="monitoring-content">
                <div className="monitoring-text">
                  <h2>{t("rmcMonitoring.monitor.title")}</h2>
                  <p>{t("rmcMonitoring.monitor.description")}</p>
                  <div className="parameter-tags">
                    {["PM1", "PM2.5", "PM10", "Noise", "Temperature", "Humidity"].map((param) => (
                      <div className="parameter-tag" key={param}>
                        {param}
                      </div>
                    ))}
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
                  <h2>{t("rmcMonitoring.display.title")}</h2>
                  <p>{t("rmcMonitoring.display.description")}</p>
                  <div className="parameter-tags">
                    {["TV Display", "Large Display", "More Insightful", "Real-time Data"].map((param) => (
                      <div className="parameter-tag" key={param}>
                        {param}
                      </div>
                    ))}
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
                  <h2>{t("rmcMonitoring.storage.title")}</h2>
                  <p>{t("rmcMonitoring.storage.description")}</p>
                  <div className="parameter-tags">
                    {["Mobile", "Tablet", "TV", "Web"].map((param) => (
                      <div className="parameter-tag" key={param}>
                        {param}
                      </div>
                    ))}
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

      {/* Data Freemium Services Section */}
      <section className="data-freemium-section">
        <div className="container">
          <div className="introducing_box sub_title_box">
            <h2 className="title_heading">
              {t("rmcFreemium.title")} <span className="bold_text">{t("rmcFreemium.highlight")}</span>
            </h2>
            <p>{t("rmcFreemium.description")}</p>
          </div>
          <div className="services-grid">
            {["monitor", "display", "storage"].map((service, index) => (
              <div className="service-card" key={service}>
                <Image
                  src={`https://www.pranaair.com/wp-content/uploads/2023/05/${index === 0
                    ? "ready-mix-concrete-plant"
                    : index === 1
                      ? "led-display-and-lcd-tv"
                      : "aqi-cloud-storage-and-dashboards"
                    }.png`}
                  alt={t(`rmcFreemium.services.${service}.alt`)}
                  width={300}
                  height={200}
                />
                <h3>{t(`rmcFreemium.services.${service}.title`)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Banner Section */}
      <section className="construction-banner">
        <div className="construction-banner-content">
          <div className="construction-banner-text">
            <h2>
              {t("rmcConstruction.title")} <b>{t("rmcConstruction.highlight")}</b>
            </h2>
          </div>
          <div className="construction-banner-button">
            <a href="#">
              {t("rmcConstruction.cta")}
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

      {/* Clientele Section */}
      <section className="clientele-section">
        <div className="introducing_box sub_title_box">
          <h2 className="title_heading">
            {t("clientele.title")} <span className="bold_text">{t("clientele.highlight")}</span>
          </h2>
          <p>{t("rmcClientele.description")}</p>
        </div>

        <div className="client-logos">
          {["ultratech", "speco", "starcrete", "indiscrete"].map((client) => (
            <div className="client-logo" key={client}>
              <Image
                src={`https://www.pranaair.com/wp-content/uploads/2023/05/${client}-${client === "ultratech"
                  ? "cement-icon"
                  : client === "speco"
                    ? "logo-icon"
                    : client === "starcrete"
                      ? "icon"
                      : "icon-logo"
                  }.png`}
                alt={t(`rmcClientele.clients.${client}.alt`)}
                width={180}
                height={90}
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq_ask_section">
        <div className="introducing_box sub_title_box text-center">
          <h2 className="title_heading">
            {t("faq.title")} <span className="bold_text">{t("faq.highlight")}</span>
          </h2>
          <p>{t("rmcFaq.description")}</p>
        </div>
      </section>

      <section className="faq_section faq_ask_section">
        <div className="container">
          <div className="accordion" id="faqAccordion">
            {Array.from({ length: 7 }).map((_, index) => (
              <div className="accordion-item faq-item" key={index}>
                <h2 className="accordion-header" id={`heading${index + 1}`}>
                  <button
                    className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index + 1}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse${index + 1}`}
                  >
                    {t(`rmcFaq.questions.q${index + 1}`)}
                  </button>
                </h2>
                <div
                  id={`collapse${index + 1}`}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  aria-labelledby={`heading${index + 1}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>{t(`rmcFaq.answers.a${index + 1}`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="get_in_touch">
        <div className="introducing_box sub_title_box">
          <h2 className="title_heading">
            {t("contact.title")} <span className="bold_text">{t("contact.highlight")}</span>
          </h2>
          <p>{t("contact.description")}</p>
        </div>

        <div className="container">
          <ContactForm pageName="RMC Page" />
        </div>
      </section>

      {/* Industrial Applications Section */}
      <section className="industrial-applications">
        <div className="introducing_box sub_title_box">
          <h2 className="title_heading">
            {t("industrial.title")} <span className="bold_text">{t("industrial.highlight")}</span>
          </h2>
          <p>{t("rmcIndustrial.description")}</p>
        </div>

        <div className="owl-slider">
          <IndustrialApplicationsCarousel applications={industrialApplications} />
        </div>
      </section>

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
