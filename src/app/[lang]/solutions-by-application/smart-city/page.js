import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import SmartApplicationsCarousel from "@/Components/Pages/SmartCity/banner-slider"
import HealthimpactCarousel from "@/Components/Pages/SmartCity/healthimpact"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
  const lang = params?.lang || "en";
  const slug = "air-quality-monitor"; // page-specific slug
  const { t } = await getServerTranslation("smart-city");
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

export default async function SmartCityPage() {
  const { t } = await getServerTranslation("smart-city")
  const smartCitySlides = [
    {
      title: t("smartCitySlides.slides.0.title"),
      titleHighlight: t("smartCitySlides.slides.0.titleHighlight"),
      subtitle: t("smartCitySlides.slides.0.subtitle"),
      buttonText: t("smartCitySlides.slides.0.buttonText"),
      buttonLink: "#contact_form",
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2023/08/prana-air-smart-city-air-quality-solutions.jpg",
      imageAlt: t("smartCitySlides.slides.0.imageAlt"),
      isMainHeading: true,
    },
    {
      title: t("smartCitySlides.slides.1.title"),
      titleHighlight: t("smartCitySlides.slides.1.titleHighlight"),
      subtitle: t("smartCitySlides.slides.1.subtitle"),
      buttonText: t("smartCitySlides.slides.1.buttonText"),
      buttonLink: "#contact_form",
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2023/08/prana-air-smart-city-air-quality-monitoring.jpg",
      imageAlt: t("smartCitySlides.slides.1.imageAlt"),
      isMainHeading: false,
    },
    {
      title: t("smartCitySlides.slides.2.title"),
      titleHighlight: t("smartCitySlides.slides.2.titleHighlight"),
      subtitle: t("smartCitySlides.slides.2.subtitle"),
      buttonText: t("smartCitySlides.slides.2.buttonText"),
      buttonLink: "#contact_form",
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-air-quality-solutions.jpg",
      imageAlt: t("smartCitySlides.slides.2.imageAlt"),
      isMainHeading: false,
    },
  ]
  const healthImpacts = [
    {
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2023/08/Cardiovascular-problems.png",
      iconAlt: t("smartCityHealthImpacts.items.0.iconAlt"),
      title: t("smartCityHealthImpacts.items.0.title"),
      description: t("smartCityHealthImpacts.items.0.description"),
    },
    {
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2023/08/cancer.png",
      iconAlt: t("smartCityHealthImpacts.items.1.iconAlt"),
      title: t("smartCityHealthImpacts.items.1.title"),
      description: t("smartCityHealthImpacts.items.1.description"),
    },
    {
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2023/08/neurological-problems.png",
      iconAlt: t("smartCityHealthImpacts.items.2.iconAlt"),
      title: t("smartCityHealthImpacts.items.2.title"),
      description: t("smartCityHealthImpacts.items.2.description"),
    },
    {
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2023/08/premature-death.png",
      iconAlt: t("smartCityHealthImpacts.items.3.iconAlt"),
      title: t("smartCityHealthImpacts.items.3.title"),
      description: t("smartCityHealthImpacts.items.3.description"),
    },
    {
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2023/08/respiratory-problems.png",
      iconAlt: t("smartCityHealthImpacts.items.4.iconAlt"),
      title: t("smartCityHealthImpacts.items.4.title"),
      description: t("smartCityHealthImpacts.items.4.description"),
    },
  ]
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
    <main className="smart-city-page">
      {/* Banner Section */}
      <section className="home-banner-section">
        <div className="slider-container">
          <SmartApplicationsCarousel applications={smartCitySlides} />
          <div className="slider-buttons">
            {[0, 1, 2].map((index) => (
              <button key={index} className="slider-button" data-bs-slide={index}>
                {t(`smartCityBanner.buttons.${index}.title`)} <br />
                <p>{t(`smartCityBanner.buttons.${index}.subtitle`)}</p>
              </button>
            ))}
          </div>
          <div className="mouse-scroll-icon">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2023/08/scroll-down-icon.png"
              alt={t("smartCityBanner.scrollIconAlt")}
            />
          </div>
        </div>
      </section>

      {/* Factors Affecting Section */}
      <section className="factor-affecting">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="factor-heading">
                <h2>
                  {t("smartCityFactors.title")}{" "}
                  <span className="smart-city-factor">{t("smartCityFactors.highlight")}</span>
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="factor-para">
                <p>{t("smartCityFactors.description")}</p>
              </div>
            </div>
          </div>

          <div className="factor-affect-tab">
            <ul className="nav nav-tabs" id="factorTab" role="tablist">
              {["pm25", "co", "no2", "so2", "ozone"].map((pollutant, index) => (
                <li className="nav-item" role="presentation" key={pollutant}>
                  <button
                    className={`nav-link ${index === 0 ? "active" : ""}`}
                    id={`${pollutant}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${pollutant}`}
                    type="button"
                    role="tab"
                    aria-controls={pollutant}
                    aria-selected={index === 0 ? "true" : "false"}
                  >
                    {t(`smartCityFactors.tabs.${pollutant}`)}
                  </button>
                </li>
              ))}
            </ul>

            <div className="tab-content" id="factorTabContent">
              {["pm25", "co", "no2", "so2", "ozone"].map((pollutant, index) => (
                <div
                  key={pollutant}
                  className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                  id={pollutant}
                  role="tabpanel"
                  aria-labelledby={`${pollutant}-tab`}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="factor-tab-image">
                        <img
                          src={`https://www.pranaair.com/wp-content/uploads/2023/08/${pollutant === "pm25"
                            ? "pm2.5-from-constructions-sites.jpg"
                            : pollutant === "co"
                              ? "co-gas-from-vehicle-emissions.jpg"
                              : pollutant === "no2"
                                ? "no2-gas-from-power-plant.jpg"
                                : pollutant === "so2"
                                  ? "so2-gas-from-diesel-generator.jpg"
                                  : "ozone-gas-from-factories.jpg"
                            }`}
                          alt={t(`smartCityFactors.content.${pollutant}.imageAlt`)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="factor-tab-para">
                        <span className="green-clr">{t(`smartCityFactors.content.${pollutant}.title`)}</span>{" "}
                        {t(`smartCityFactors.content.${pollutant}.description`)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Health Impact Section */}
      <section className="health-impact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="health-impact-heading">
                <h2>
                  {t("smartCityHealth.title")} <span className="healt-impaact">{t("smartCityHealth.highlight")}</span>
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="factor-para health-impact-para">
                <p>{t("smartCityHealth.description")}</p>
              </div>
            </div>
          </div>

          <div className="office-pollutatnt-bg">
            <div className="office-pollutant-icons">
              {["so2", "pm25", "co2", "nh3", "no2", "ozone"].map((pollutant) => (
                <img
                  key={pollutant}
                  className={pollutant}
                  src={`https://www.pranaair.com/wp-content/uploads/2023/08/${pollutant === "so2"
                    ? "so2-pollutant.png"
                    : pollutant === "pm25"
                      ? "pm2.5-pollutant.png"
                      : pollutant === "co2"
                        ? "co-pollutant.png"
                        : pollutant === "nh3"
                          ? "nh3-pollutant.png"
                          : pollutant === "no2"
                            ? "no2-pollutant.png"
                            : "ozone-pollutant.png"
                    }`}
                  alt={t(`smartCityHealth.pollutants.${pollutant}.imageAlt`)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Health Impact Slider */}
      <section className="health-impact-slider">
        <div className="container">
          <HealthimpactCarousel applications={healthImpacts} />
        </div>
      </section>

      {/* City Frame Section */}
      <section className="city-frame">
        <div className="container">
          <div className="city-frame-heading">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2023/08/frame-arrow.png"
              alt={t("smartCityModel.arrowIconAlt")}
            />
            <h2>{t("smartCityModel.title")}</h2>
          </div>

          <div className="frame-section">
            <ul className="nav nav-tabs" id="frameTab" role="tablist">
              {["monitor", "drone", "purifier"].map((step, index) => (
                <li className="nav-item" role="presentation" key={step}>
                  <button
                    className={`nav-link ${index === 0 ? "active" : ""}`}
                    id={`${step}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${step}`}
                    type="button"
                    role="tab"
                    aria-controls={step}
                    aria-selected={index === 0 ? "true" : "false"}
                  >
                    <div className="frame-tab-number">{`0${index + 1}`}</div>
                    <div className="frame-tab-content">
                      <div className="frame-tab-title">{t(`smartCityModel.steps.${step}.stepTitle`)}</div>
                      <div className="frame-tab-subtitle">{t(`smartCityModel.steps.${step}.subtitle`)}</div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>

            <div className="tab-content" id="frameTabContent">
              {["monitor", "drone", "purifier"].map((step, index) => (
                <div
                  key={step}
                  className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                  id={step}
                  role="tabpanel"
                  aria-labelledby={`${step}-tab`}
                >
                  <div className="frame-content-item">
                    <div className="frame-image">
                      <img
                        src={`https://www.pranaair.com/wp-content/uploads/2023/08/${step === "monitor" || step === "drone"
                          ? "ambient-air-quality-monitors-for-smart-city.jpg"
                          : "air-quality-solutions-for-a-smart-city.jpg"
                          }`}
                        alt={t(`smartCityModel.steps.${step}.imageAlt`)}
                      />
                    </div>
                    <div className="frame-description">
                      <h3>
                        <span className="highlight">{t(`smartCityModel.steps.${step}.title`)}</span>
                      </h3>
                      <p>{t(`smartCityModel.steps.${step}.description`)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions Section */}
      <section className="air-quality-solution">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="factor-heading air-quality-heading">
                <h2>
                  {t("smartCitySolutions.title")}{" "}
                  <span className="smart-city-factor">{t("smartCitySolutions.highlight")}</span>
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="factor-para air-qaulity-para">
                <p>{t("smartCitySolutions.description")}</p>
              </div>
            </div>
          </div>

          <div className="accordion" id="accordionAirQuality">
            {["ambient", "drone", "purifier"].map((solution, index) => (
              <div className="accordion-item" key={solution}>
                <h2 className="accordion-header" id={`heading${index + 1}`}>
                  <button
                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index + 1}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse${index + 1}`}
                  >
                    <div className="accord-icons">
                      <img
                        className={`heading-icon ${solution === "drone" ? "drone-icon" : solution === "purifier" ? "purifier-icon" : ""}`}
                        src={`https://www.pranaair.com/wp-content/uploads/2023/08/${solution === "ambient"
                          ? "ambient-air-monitor-green-icon.png"
                          : solution === "drone"
                            ? "drone-green-icon.png"
                            : "purifier-green-icon.png"
                          }`}
                        alt=""
                      />
                    </div>
                    <h4>{t(`smartCitySolutions.accordion.${solution}.title`)}</h4>
                  </button>
                </h2>
                <div
                  id={`collapse${index + 1}`}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  aria-labelledby={`heading${index + 1}`}
                  data-bs-parent="#accordionAirQuality"
                >
                  <div className="accordion-body">
                    <div className="main-box">
                      <div className="row">
                        <div className="col-lg-5">
                          <a href={`${domain}/air-quality-monitor/air-drone`}>
                            <img
                              className={`ambient-monitor ${solution === "drone" ? "mob-drone" : ""}`}
                              src={`https://www.pranaair.com/wp-content/uploads/2023/08/${solution === "ambient"
                                ? "prana-air-ambient-air-quality-monitor-for-smart-city.png"
                                : solution === "drone"
                                  ? "smart-city-air-quality-drone.png"
                                  : "smart-city-outdoor-air-purifier.png"
                                }`}
                              alt={t(`smartCitySolutions.accordion.${solution}.imageAlt`)}
                            />
                          </a>
                        </div>
                        <div className="col-lg-7">
                          <div className="ambient-air-monitor-box">
                            <h3>{t(`smartCitySolutions.accordion.${solution}.brand`)}</h3>
                            <h4>{t(`smartCitySolutions.accordion.${solution}.productTitle`)}</h4>
                            <ul>
                              {[0, 1].map((featureIndex) => (
                                <li key={featureIndex}>
                                  <img
                                    src={`https://www.pranaair.com/wp-content/uploads/2023/08/${solution === "ambient"
                                      ? featureIndex === 0
                                        ? "low-cost-air-monitor.png"
                                        : "highly-accurate-data.png"
                                      : solution === "drone"
                                        ? featureIndex === 0
                                          ? "real-time-monitoring.png"
                                          : "very-accurate.png"
                                        : featureIndex === 0
                                          ? "highly-cadr.png"
                                          : "electrostatic-filter.png"
                                      }`}
                                    alt={t(
                                      `smartCitySolutions.accordion.${solution}.features.${featureIndex}.imageAlt`,
                                    )}
                                  />
                                  <h5>
                                    {t(`smartCitySolutions.accordion.${solution}.features.${featureIndex}.title`)}
                                  </h5>
                                </li>
                              ))}
                            </ul>
                            <ul>
                              {[2, 3].map((featureIndex) => (
                                <li key={featureIndex}>
                                  <img
                                    src={`https://www.pranaair.com/wp-content/uploads/2023/08/${solution === "ambient"
                                      ? featureIndex === 2
                                        ? "weatherproof-monitor.png"
                                        : "cloud-data-and-dashboards.png"
                                      : solution === "drone"
                                        ? featureIndex === 2
                                          ? "wide-coverage-area.png"
                                          : "4k-video.png"
                                        : featureIndex === 2
                                          ? "weatherproof.png"
                                          : "multiple-filtrations.png"
                                      }`}
                                    alt={t(
                                      `smartCitySolutions.accordion.${solution}.features.${featureIndex}.imageAlt`,
                                    )}
                                  />
                                  <h5>
                                    {t(`smartCitySolutions.accordion.${solution}.features.${featureIndex}.title`)}
                                  </h5>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="row perameter-bg">
                        <div className="col-lg-5">
                          <h3 className={`perameter-heading ${solution === "ambient" ? "pera-line" : ""}`}>
                            {t(`smartCitySolutions.accordion.${solution}.parametersTitle`)}
                            {solution === "ambient" && (
                              <span className="wheat">
                                {" "}
                                {t(`smartCitySolutions.accordion.${solution}.parametersSubtitle`)}
                              </span>
                            )}
                          </h3>
                        </div>
                        <div className="col-lg-7">
                          <div className={`parameter ${solution !== "ambient" ? "dronne-ul" : ""}`}>
                            <ul>
                              {solution === "ambient" ? (
                                <>
                                  {["pm25", "pm10", "ozone", "so2", "no2", "co"].map((param) => (
                                    <li key={param}>
                                      <img
                                        className={param === "co" ? "carbon-icon" : ""}
                                        src={`https://www.pranaair.com/wp-content/uploads/2023/08/${param === "pm25"
                                          ? "pm2.5.png"
                                          : param === "pm10"
                                            ? "pm10.png"
                                            : param === "ozone"
                                              ? "ozone.png"
                                              : param === "so2"
                                                ? "so2.png"
                                                : param === "no2"
                                                  ? "no2.png"
                                                  : "carbon-mono.png"
                                          }`}
                                        alt={t(`smartCitySolutions.accordion.${solution}.parameters.${param}.imageAlt`)}
                                      />
                                      <h6>{t(`smartCitySolutions.accordion.${solution}.parameters.${param}.title`)}</h6>
                                    </li>
                                  ))}
                                </>
                              ) : solution === "drone" ? (
                                <>
                                  {["pm", "co", "no2", "so2"].map((param) => (
                                    <li key={param}>
                                      <img
                                        className={param === "co" ? "carbon-icon" : ""}
                                        src={`https://www.pranaair.com/wp-content/uploads/2023/08/${param === "pm"
                                          ? "pm2.5.png"
                                          : param === "co"
                                            ? "carbon-mono.png"
                                            : param === "no2"
                                              ? "no2.png"
                                              : "so2.png"
                                          }`}
                                        alt={t(`smartCitySolutions.accordion.${solution}.parameters.${param}.imageAlt`)}
                                      />
                                      <h6>{t(`smartCitySolutions.accordion.${solution}.parameters.${param}.title`)}</h6>
                                    </li>
                                  ))}
                                </>
                              ) : (
                                <>
                                  {["pm25", "pm10", "dust", "smoke"].map((param) => (
                                    <li key={param}>
                                      <img
                                        src={`https://www.pranaair.com/wp-content/uploads/2023/08/${param === "pm25"
                                          ? "pm2.5.png"
                                          : param === "pm10"
                                            ? "pm10.png"
                                            : param === "dust"
                                              ? "dust-icon.png"
                                              : "smoke-icon.png"
                                          }`}
                                        alt={t(`smartCitySolutions.accordion.${solution}.parameters.${param}.imageAlt`)}
                                      />
                                      <h6>{t(`smartCitySolutions.accordion.${solution}.parameters.${param}.title`)}</h6>
                                    </li>
                                  ))}
                                </>
                              )}
                            </ul>
                            {solution !== "purifier" && (
                              <ul>
                                {solution === "ambient" ? (
                                  <>
                                    {["windSpeed", "temp", "humidity", "uvIndex"].map((param) => (
                                      <li key={param}>
                                        <img
                                          src={`https://www.pranaair.com/wp-content/uploads/2023/08/${param === "windSpeed"
                                            ? "wind-speed.png"
                                            : param === "temp"
                                              ? "temperature.png"
                                              : param === "humidity"
                                                ? "humidity.png"
                                                : "uv-index.png"
                                            }`}
                                          alt={t(
                                            `smartCitySolutions.accordion.${solution}.parameters.${param}.imageAlt`,
                                          )}
                                        />
                                        <h6>
                                          {t(`smartCitySolutions.accordion.${solution}.parameters.${param}.title`)}
                                        </h6>
                                      </li>
                                    ))}
                                  </>
                                ) : (
                                  <>
                                    {["nh3", "o3", "temp", "humidity"].map((param) => (
                                      <li key={param}>
                                        <img
                                          src={`https://www.pranaair.com/wp-content/uploads/2023/08/${param === "nh3"
                                            ? "nh3.png"
                                            : param === "o3"
                                              ? "ozone.png"
                                              : param === "temp"
                                                ? "temperature.png"
                                                : "humidity.png"
                                            }`}
                                          alt={t(
                                            `smartCitySolutions.accordion.${solution}.parameters.${param}.imageAlt`,
                                          )}
                                        />
                                        <h6>
                                          {t(`smartCitySolutions.accordion.${solution}.parameters.${param}.title`)}
                                        </h6>
                                      </li>
                                    ))}
                                  </>
                                )}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="know-more">
                        <Link href={`${domain}/air-quality-monitor/ambient-air-monitor`}>
                          {t("smartCitySolutions.knowMore")}{" "}
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/know-more-icon.png"
                            alt={t("smartCitySolutions.knowMoreIconAlt")}
                          />
                        </Link>
                      </div>
                    </div>

                    <div className="ambient-monitor-city-img">
                      <h3 className="ambient-monitorin-city">
                        {t(`smartCitySolutions.accordion.${solution}.cityTitle`)}{" "}
                        <span className="ambient-monitor-bold">
                          {t(`smartCitySolutions.accordion.${solution}.cityHighlight`)}
                        </span>
                      </h3>
                      <img
                        src={`https://www.pranaair.com/wp-content/uploads/2023/08/${solution === "ambient"
                          ? "smart-city-ambient-air-quality-monitor.jpg"
                          : solution === "drone"
                            ? "smart-city-air-quality-drone.jpg"
                            : "smart-city-outdoor-air-purifier.jpg"
                          }`}
                        alt={t(`smartCitySolutions.accordion.${solution}.cityImageAlt`)}
                      />
                    </div>

                    <div className="data-insight-box">
                      <div className="data-insight-heading">
                        <h3 className="data-insight">
                          {solution === "purifier" ? (
                            <>
                              {t(`smartCitySolutions.accordion.${solution}.insightTitle`)}{" "}
                              <span className="data-clr">
                                {t(`smartCitySolutions.accordion.${solution}.insightHighlight`)}
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="data-clr">
                                {t(`smartCitySolutions.accordion.${solution}.insightHighlight`)}
                              </span>{" "}
                              {t(`smartCitySolutions.accordion.${solution}.insightTitle`)}
                            </>
                          )}
                        </h3>
                      </div>
                      <div className="data-insight-para">
                        <p>{t(`smartCitySolutions.accordion.${solution}.insightDescription`)}</p>
                      </div>
                    </div>

                    <div className="data-insight-img-box">
                      <div className="image-row1">
                        <ul>
                          {[0, 1].map((imageIndex) => (
                            <li key={imageIndex}>
                              <img
                                src={`https://www.pranaair.com/wp-content/uploads/2023/08/${solution === "ambient"
                                  ? imageIndex === 0
                                    ? "smart-city-air-pollution-led-display.jpg"
                                    : "ambient-air-quality-data-on-aqi-app.jpg"
                                  : solution === "drone"
                                    ? imageIndex === 0
                                      ? "smart-city-air-quality-drone-monitor.jpg"
                                      : "smart-city-air-quality-drone-remote-sensing.jpg"
                                    : imageIndex === 0
                                      ? "smart-city-outdoor-air-purifier-at-bus-stop.jpg"
                                      : "smart-city-outdoor-air-purifier-at-public-park.jpg"
                                  }`}
                                alt={t(`smartCitySolutions.accordion.${solution}.insights.${imageIndex}.imageAlt`)}
                              />
                              <div className="overlay">
                                <div className="text">
                                  <h3>{t(`smartCitySolutions.accordion.${solution}.insights.${imageIndex}.title`)}</h3>
                                  <p>
                                    {t(`smartCitySolutions.accordion.${solution}.insights.${imageIndex}.description`)}
                                  </p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="image-row1">
                        <ul>
                          {[2, 3].map((imageIndex) => (
                            <li key={imageIndex}>
                              <img
                                src={`https://www.pranaair.com/wp-content/uploads/2023/08/${solution === "ambient"
                                  ? imageIndex === 2
                                    ? "smart-city-air-quality-lcd-dispay.jpg"
                                    : "smart-city-air-quality-data-dashboards.jpg"
                                  : solution === "drone"
                                    ? imageIndex === 2
                                      ? "smart-city-air-quality-drone-dashboard.jpg"
                                      : "smart-city-air-quality-drone-data.jpg"
                                    : imageIndex === 2
                                      ? "smart-city-outdoor-air-purifier-at-train-station.jpg"
                                      : "smart-city-outdoor-air-purifier-at-airport.jpg"
                                  }`}
                                alt={t(`smartCitySolutions.accordion.${solution}.insights.${imageIndex}.imageAlt`)}
                              />
                              <div className="overlay">
                                <div className="text">
                                  <h3>{t(`smartCitySolutions.accordion.${solution}.insights.${imageIndex}.title`)}</h3>
                                  <p>
                                    {t(`smartCitySolutions.accordion.${solution}.insights.${imageIndex}.description`)}
                                  </p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {solution === "ambient" && (
                        <div className="image-row1 last-row">
                          <ul>
                            <li>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/smart-city-air-quality-data-on-smart-tv.jpg"
                                alt={t("smartCitySolutions.accordion.ambient.insights.4.imageAlt")}
                              />
                              <div className="overlay">
                                <div className="text last-text">
                                  <h3>{t("smartCitySolutions.accordion.ambient.insights.4.title")}</h3>
                                  <p>{t("smartCitySolutions.accordion.ambient.insights.4.description")}</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="technical-spec">
        <div className="container">
          <h2 className="tech-heading">
            {t("smartCityTech.title")} <span className="spec-bold">{t("smartCityTech.highlight")}</span>
          </h2>

          <div className="tech-spec-tab">
            <ul className="nav nav-tabs" id="techTab" role="tablist">
              {["ambient", "drone", "purifier"].map((tech, index) => (
                <li className="nav-item" role="presentation" key={tech}>
                  <button
                    className={`nav-link ${index === 0 ? "active" : ""}`}
                    id={`${tech === "drone" ? "tech-drone" : tech === "purifier" ? "tech-purifier" : tech}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${tech === "drone" ? "tech-drone" : tech === "purifier" ? "tech-purifier" : tech}`}
                    type="button"
                    role="tab"
                    aria-controls={tech === "drone" ? "tech-drone" : tech === "purifier" ? "tech-purifier" : tech}
                    aria-selected={index === 0 ? "true" : "false"}
                  >
                    {t(`smartCityTech.tabs.${tech}`)}
                  </button>
                </li>
              ))}
            </ul>

            <div className="tab-content" id="techTabContent">
              {["ambient", "drone", "purifier"].map((tech, index) => (
                <div
                  key={tech}
                  className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                  id={tech === "drone" ? "tech-drone" : tech === "purifier" ? "tech-purifier" : tech}
                  role="tabpanel"
                  aria-labelledby={`${tech === "drone" ? "tech-drone" : tech === "purifier" ? "tech-purifier" : tech}-tab`}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="tech-spec">
                        <div className="tech-spec-colm">
                          <ul>
                            {[0, 1, 2, 3, 4].map((specIndex) => (
                              <li key={specIndex} className={specIndex % 2 === 1 ? "tech-spec-row-bg" : ""}>
                                <h6>{t(`smartCityTech.specs.${tech}.left.${specIndex}.label`)}:</h6>
                                <h5>{t(`smartCityTech.specs.${tech}.left.${specIndex}.value`)}</h5>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tech-spec">
                        <div className="tech-spec-colm">
                          <ul>
                            {[0, 1, 2, 3, 4].map((specIndex) => (
                              <li key={specIndex} className={specIndex % 2 === 1 ? "tech-spec-row-bg" : ""}>
                                <h6>{t(`smartCityTech.specs.${tech}.right.${specIndex}.label`)}:</h6>
                                <h5 className={specIndex === 4 ? "last-text" : ""}>
                                  {t(`smartCityTech.specs.${tech}.right.${specIndex}.value`)}
                                </h5>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {tech === "ambient" && (
                        <ul className="logo-tech-spec">
                          <li>
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2023/08/ce-logo.png"
                              alt={t("smartCityTech.certifications.ce")}
                            />
                          </li>
                          <li>
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2023/08/RoHS.png"
                              alt={t("smartCityTech.certifications.rohs")}
                            />
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ul className="download-brochure">
            <li>
              <h5>{t("smartCityTech.brochure.question")}</h5>
            </li>
            <li>
              <a href="https://www.pranaair.com/wp-content/uploads/2023/09/prana-air-smart-city-air-quality-solutions-brochure.pdf">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png" alt="" />{" "}
                {t("smartCityTech.brochure.downloadText")}
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="our-client">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="our-clinet-heading">
                {t("smartCityClients.title")} <span className="client-bold">{t("smartCityClients.highlight")}</span>
              </h2>
            </div>
            <div className="col-md-6">
              <div className="our-client-para">
                <p>{t("smartCityClients.description")}</p>
              </div>
            </div>
          </div>

          {[0, 1, 2, 3].map((rowIndex) => (
            <div className="mob-row" key={rowIndex}>
              {[0, 1, 2, 3].map((colIndex) => {
                const clientIndex = rowIndex * 4 + colIndex
                const clientKey = `client${clientIndex}`
                return (
                  <div className="col-md-3" key={clientKey}>
                    <img
                      src={`https://www.pranaair.com/wp-content/uploads/2023/08/${clientIndex === 0
                        ? "tata-company.png"
                        : clientIndex === 1
                          ? "igcar-org.png"
                          : clientIndex === 2
                            ? "microsoft-company.png"
                            : clientIndex === 3
                              ? "emaar-company.png"
                              : clientIndex === 4
                                ? "l-and-t-company.png"
                                : clientIndex === 5
                                  ? "siemens-company.png"
                                  : clientIndex === 6
                                    ? "jw-marriott.png"
                                    : clientIndex === 7
                                      ? "bcg-group.png"
                                      : clientIndex === 8
                                        ? "ola-company.png"
                                        : clientIndex === 9
                                          ? "mahindra-company.png"
                                          : clientIndex === 10
                                            ? "renault-company.png"
                                            : clientIndex === 11
                                              ? "neeri-company.png"
                                              : clientIndex === 12
                                                ? "taj-hotel.png"
                                                : clientIndex === 13
                                                  ? "foodworks.png"
                                                  : clientIndex === 14
                                                    ? "asianpaints.png"
                                                    : "iit-institutes.png"
                        }`}
                      alt={t(`smartCityClients.logos.${clientKey}.alt`)}
                      className="our-clients-logo"
                    />
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form" id="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="get-in-heading">
                {t("contact.title")} <span className="touch-bold">{t("contact.highlight")}</span>
              </h2>
            </div>
            <div className="col-md-6">
              <div className="get-in-touch-para">
                <p>{t("contact.description")}</p>
              </div>
            </div>
          </div>
          <ContactForm pageName="Cair Monitor Page" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="faq-heading">
                {t("smartCityFaq.title")}
                <span className="question-bold"> {t("smartCityFaq.highlight")}</span>
              </h2>
            </div>
            <div className="col-md-6">
              <div className="get-in-touch-para">
                <p>{t("smartCityFaq.helpText")}</p>
              </div>
            </div>
          </div>

          <div className="accordion" id="faqAccordion">
            {[0, 1].map((faqIndex) => (
              <div className="accordion-item my-tab-section" key={faqIndex}>
                <h2 className="accordion-header" id={`headingFaq${faqIndex + 1}`}>
                  <button
                    className={`accordion-button ${faqIndex !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseFaq${faqIndex + 1}`}
                    aria-expanded={faqIndex === 0 ? "true" : "false"}
                    aria-controls={`collapseFaq${faqIndex + 1}`}
                  >
                    <h4>{t(`smartCityFaq.questions.q${faqIndex + 1}`)}</h4>
                  </button>
                </h2>
                <div
                  id={`collapseFaq${faqIndex + 1}`}
                  className={`accordion-collapse collapse ${faqIndex === 0 ? "show" : ""}`}
                  aria-labelledby={`headingFaq${faqIndex + 1}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body faq-tab-para">
                    <div dangerouslySetInnerHTML={{ __html: t(`smartCityFaq.answers.a${faqIndex + 1}`) }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Applications Section */}
      <section className="indusrtial-application">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="indusrial-heading">
                {t("industrial.title")} <span className="appli-bold">{t("industrial.highlight")}</span>
              </h2>
            </div>
            <div className="col-md-6">
              <div className="our-client-para">
                <p>{t("industrial.description")}</p>
              </div>
            </div>
          </div>

          <div className="owl-slider">
            <IndustrialApplicationsCarousel applications={industrialApplications} />
          </div>
        </div>
      </section>

      {/* Bootstrap initialization script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Initialize all Bootstrap components
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
              return new bootstrap.Tooltip(tooltipTriggerEl);
            });
            
            // Handle slider buttons
            var sliderButtons = document.querySelectorAll('.slider-button');
            sliderButtons.forEach(function(button, index) {
              button.addEventListener('click', function() {
                // Remove active class from all buttons
                sliderButtons.forEach(function(btn) {
                  btn.classList.remove('active');
                });
                // Add active class to clicked button
                button.classList.add('active');
              });
            });
            
            // Set first slider button as active by default
            if (sliderButtons.length > 0) {
              sliderButtons[0].classList.add('active');
            }
          });
        `,
        }}
      />
    </main>
  )
}
