import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm";
import TvAppTabs from '@/Components/Pages/CairMonitor/TvApptabs'
import InstallationSlider from "@/Components/Pages/CairMonitor/InstallationSlider"
import { getServerTranslation } from "@/i18n/server"

// ✅ SEO Metadata
export async function generateMetadata() {
  const { t } = await getServerTranslation("cair");
  const title = t("meta.title");
  const description = t("meta.description");
  const image = t("meta.image") || "https://www.pranaair.com/images/air-drone.jpg";
  const url = `https://www.pranaair.com/air-drone`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.pranaair.com/air-drone",
        hi: "https://www.pranaair.com/hi/air-drone",
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Prana Air",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Air Drone - Prana Air"
        }
      ]
    }
  };
}
export default async function CairMonitor() {
  const { t } = await getServerTranslation("cair")

  return (
    <div>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="row inner-banner-section">
            <div className="col-md-6">
              <div className="banner-content">
                <h1>
                  <span className="hd-txt-color">{t("banner.titleHighlight")}</span>
                  <br />
                  {t("banner.titleRest")}
                </h1>
                <p>{t("banner.description")}</p>
                <ul className="banner-table">
                  <li>{t("banner.feature1")}</li>
                  <li>{t("banner.feature2")}</li>
                  <li>{t("banner.feature3")}</li>
                </ul>

                <form className="cart" action={t("banner.buyNowLink")} method="post">
                  <button
                    className="single_add_to_cart_button button alt button button_slide slide_right"
                    name="add-to-cart"
                    type="submit"
                  >
                    {t("banner.buyNowText")}{" "}
                    <img
                      className="banner-btn-arrow"
                      src={t("banner.arrowImageSrc") || "/placeholder.svg"}
                      alt={t("banner.arrowImageAlt")}
                    />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6">{/* Image placeholder - will be added in next section */}</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="car-in-outdoor-monitior-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="carin-in-outdoor-heading">
                <h2>{t("features.title")}</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="car-in-outdoor-para">
                <p>{t("features.subtitle")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="cair-indoor-img">
                <img src={t("features.image.src") || "/placeholder.svg"} alt={t("features.image.alt")} />
              </div>
            </div>
            <div className="col-md-7">
              <div className="carin-tab-box-main">
                <div className="carin-tab-box-left">
                  <ul>
                    <li>
                      <img
                        src={t("features.items.1.icon.src") || "/placeholder.svg"}
                        alt={t("features.items.1.icon.alt")}
                      />
                    </li>
                    <li>
                      <h4>{t("features.items.1.title")}</h4>
                      <p>{t("features.items.1.description")}</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src={t("features.items.2.icon.src") || "/placeholder.svg"}
                        alt={t("features.items.2.icon.alt")}
                      />
                    </li>
                    <li>
                      <h4>{t("features.items.2.title")}</h4>
                      <p>{t("features.items.2.description")}</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src={t("features.items.3.icon.src") || "/placeholder.svg"}
                        alt={t("features.items.3.icon.alt")}
                      />
                    </li>
                    <li>
                      <h4>{t("features.items.3.title")}</h4>
                      <p>{t("features.items.3.description")}</p>
                    </li>
                  </ul>
                </div>
                <div className="carin-tab-box-right">
                  <ul>
                    <li>
                      <img
                        src={t("features.items.4.icon.src") || "/placeholder.svg"}
                        alt={t("features.items.4.icon.alt")}
                      />
                    </li>
                    <li>
                      <h4>{t("features.items.4.title")}</h4>
                      <p>{t("features.items.4.description")}</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src={t("features.items.5.icon.src") || "/placeholder.svg"}
                        alt={t("features.items.5.icon.alt")}
                      />
                    </li>
                    <li>
                      <h4>{t("features.items.5.title")}</h4>
                      <p>{t("features.items.5.description")}</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src={t("features.items.6.icon.src") || "/placeholder.svg"}
                        alt={t("features.items.6.icon.alt")}
                      />
                    </li>
                    <li>
                      <h4>{t("features.items.6.title")}</h4>
                      <p>{t("features.items.6.description")}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEED WELL Section */}
      <div className="container">
        <div className="row leed-well">
          <div className="col-12">
            <div className="leed-well-heading">
              <h2>{t("leedWell.title")}</h2>
              <p>{t("leedWell.subtitle")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Parameters Section */}
      <section className="cair-monitore-slider-section slider-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="content-tab-box">
                <h3>
                  <span className="txt-color">{t("parameters.titleHighlight")}</span>
                  <br />
                  {t("parameters.titleRest")}
                </h3>
              </div>
            </div>
            <div className="col-md-7">
              <div className="parameter-para">
                <p>{t("parameters.description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="content-tab-box">
                <img src={t("parameters.image.src") || "/placeholder.svg"} alt={t("parameters.image.alt")} />
              </div>
            </div>
            <div className="col-md-7">
              <div className="parameters-icons-box">
                <h4>{t("parameters.sectionTitle")}</h4>
                <div className="parameter-icons">
                  <div className="parameter-icons-left">
                    <ul>
                      <li>
                        <img
                          src={t("parameters.items.1.icon.src") || "/placeholder.svg"}
                          alt={t("parameters.items.1.icon.alt")}
                        />
                        <h5>{t("parameters.items.1.title")}</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src={t("parameters.items.2.icon.src") || "/placeholder.svg"}
                          alt={t("parameters.items.2.icon.alt")}
                        />
                        <h5>{t("parameters.items.2.title")}</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src={t("parameters.items.3.icon.src") || "/placeholder.svg"}
                          alt={t("parameters.items.3.icon.alt")}
                        />
                        <h5>{t("parameters.items.3.title")}</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src={t("parameters.items.4.icon.src") || "/placeholder.svg"}
                          alt={t("parameters.items.4.icon.alt")}
                        />
                        <h5>{t("parameters.items.4.title")}</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="parameter-icons-right">
                    <ul>
                      <li>
                        <img
                          src={t("parameters.items.5.icon.src") || "/placeholder.svg"}
                          alt={t("parameters.items.5.icon.alt")}
                        />
                        <h5>{t("parameters.items.5.title")}</h5>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="parameter-icons">
                  <div className="parameter-icons-left">
                    <ul>
                      <li>
                        <img
                          src={t("parameters.items.6.icon.src") || "/placeholder.svg"}
                          alt={t("parameters.items.6.icon.alt")}
                        />
                        <h5>{t("parameters.items.6.title")}</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src={t("parameters.items.7.icon.src") || "/placeholder.svg"}
                          alt={t("parameters.items.7.icon.alt")}
                        />
                        <h5>{t("parameters.items.7.title")}</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          className="temp-icon"
                          src={t("parameters.items.8.icon.src") || "/placeholder.svg"}
                          alt={t("parameters.items.8.icon.alt")}
                        />
                        <h5>{t("parameters.items.8.title")}</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src={t("parameters.items.9.icon.src") || "/placeholder.svg"}
                          alt={t("parameters.items.9.icon.alt")}
                        />
                        <h5>{t("parameters.items.9.title")}</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="parameter-icons-right">
                    <ul>
                      <li className="partical-count">
                        <img
                          src={t("parameters.items.10.icon.src") || "/placeholder.svg"}
                          alt={t("parameters.items.10.icon.alt")}
                        />
                        <h5>
                          {t("parameters.items.10.title")}
                          <br />
                          {t("parameters.items.10.subtitle")}
                        </h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="app-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="app-heading">
                <h2>
                  <strong>{t("installation.titleBold")}</strong> {t("installation.title")}
                </h2>
                <p>{t("installation.description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <InstallationSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Clock Section */}
      <section className="monitor-turn-into-clock">
        <div className="container">
          <div className="row mob-row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="monitor-clock-text">
                <h2>{t("clock.title")}</h2>
                <h3>
                  {t("clock.specialTitle.before")}
                  <span className="clock-icon">
                    <img
                      className="hithere"
                      src={t("clock.icon.src") || "/placeholder.svg"}
                      alt={t("clock.icon.alt")}
                    />
                  </span>
                  {t("clock.specialTitle.after")}
                </h3>
                <p>{t("clock.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Pollution Section */}
      <section className="air-pollition-section">
        <div className="container">
          <div className="row mob-img">
            <div className="col-md-6">
              <div className="air-pollution-para">
                <h2>{t("airPollution.title")}</h2>
                <p>{t("airPollution.description")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pollution-img">
                <img src={t("airPollution.image.src") || "/placeholder.svg"} alt={t("airPollution.image.alt")} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WiFi Connectivity Section */}
      <section className="wifi-connective-section">
        <div className="container-fluid">
          <div className="row wifi-mob-row">
            <div className="col-md-5 wifi-connect-heading">
              <h2>
                <img src={t("wifiConnectivity.icon.src") || "/placeholder.svg"} alt={t("wifiConnectivity.icon.alt")} />{" "}
                {t("wifiConnectivity.title")}
              </h2>
              <p>{t("wifiConnectivity.description")}</p>
              <h3 className="bg">{t("wifiConnectivity.subtitle")}</h3>
            </div>
            <div className="col-md-7 wifi-connect-img"></div>
          </div>
        </div>
      </section>

      {/* Office Monitor Section */}
      <section className="cair-monitor-ofc">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cair-ofc-monitor">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/11/prana-air-cair-indoor-air-quality-monitor-in-office.webp"
                  alt="prana air cair indoor air quality monitor in office"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="quote-heading">
                <img src={t("quote.icon.src") || "/placeholder.svg"} alt={t("quote.icon.alt")} />
                <h2>{t("quote.title")}</h2>
                <h3>{t("quote.subtitle")}</h3>
                <p>{t("quote.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AQI Mobile App Section */}
      <section className="aqi-mobile-app">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="aqi-mobile-text">
                <h2>
                  <img
                    src={t("aqiMobileApp.title.logo.src") || "/placeholder.svg"}
                    alt={t("aqiMobileApp.title.logo.alt")}
                  />{" "}
                  {t("aqiMobileApp.title.text")}
                </h2>
                <h3>{t("aqiMobileApp.subtitle")}</h3>
                <ul>
                  <li>{t("aqiMobileApp.features.1")}</li>
                  <li>{t("aqiMobileApp.features.2")}</li>
                  <li>{t("aqiMobileApp.features.3")}</li>
                  <li>{t("aqiMobileApp.features.4")}</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cair-data-on-app">
                <img src={t("aqiMobileApp.image.src") || "/placeholder.svg"} alt={t("aqiMobileApp.image.alt")} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventilation Risks Section */}
      <section className="ventilation-pose-health-risk">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="high-co2level">
                <img
                  src={t("ventilationRisks.co2Image.src") || "/placeholder.svg"}
                  alt={t("ventilationRisks.co2Image.alt")}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="high-co2level">
                <img
                  className="right-icon"
                  src={t("ventilationRisks.co2Image.src") || "/placeholder.svg"}
                  alt={t("ventilationRisks.co2Image.alt")}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="health-risk-text">
                <h2>{t("ventilationRisks.title")}</h2>
                <p>{t("ventilationRisks.description")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="poor-health-box" style={{ animationDuration: "4s" }}>
                <li>
                  <img
                    src={t("ventilationRisks.ventilationScore.icon.src") || "/placeholder.svg"}
                    alt={t("ventilationRisks.ventilationScore.icon.alt")}
                  />
                </li>
                <li>
                  <h3>{t("ventilationRisks.ventilationScore.title")}</h3>
                  {t("ventilationRisks.ventilationScore.description")}
                </li>
                <li>
                  <h4 style={{ color: "#fb291e" }}>{t("ventilationRisks.ventilationScore.score")}</h4>
                  <h5 style={{ color: "#fb291e" }}>{t("ventilationRisks.ventilationScore.rating")}</h5>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="high-co2level">
                <img
                  className="bottm-left-icon"
                  src={t("ventilationRisks.co2Image.src") || "/placeholder.svg"}
                  alt={t("ventilationRisks.co2Image.alt")}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="high-co2level">
                <img
                  className="bottom-icon"
                  src={t("ventilationRisks.co2Image.src") || "/placeholder.svg"}
                  alt={t("ventilationRisks.co2Image.alt")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AQI Ranges Section */}
      <section className="aqi-ranges-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tab-range-heading">
                <h2>{t("aqiRanges.title")}</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tab-range-para">
                <p>{t("aqiRanges.description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="car-in-outdoor-tab">
                <ul className="nav nav-tabs" id="aqiRangesTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="aqi-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#aqi-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="aqi-tab-pane"
                      aria-selected="true"
                    >
                      {t("aqiRanges.tabs.aqi")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pm1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#pm1-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="pm1-tab-pane"
                      aria-selected="false"
                    >
                      {t("aqiRanges.tabs.pm1")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pm25-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#pm25-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="pm25-tab-pane"
                      aria-selected="false"
                    >
                      {t("aqiRanges.tabs.pm25")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pm10-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#pm10-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="pm10-tab-pane"
                      aria-selected="false"
                    >
                      {t("aqiRanges.tabs.pm10")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="co2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#co2-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="co2-tab-pane"
                      aria-selected="false"
                    >
                      {t("aqiRanges.tabs.co2")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="hcho-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#hcho-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="hcho-tab-pane"
                      aria-selected="false"
                    >
                      {t("aqiRanges.tabs.hcho")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="tvoc-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tvoc-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="tvoc-tab-pane"
                      aria-selected="false"
                    >
                      {t("aqiRanges.tabs.tvoc")}
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="aqiRangesTabsContent">
                  <div
                    className="tab-pane fade show active"
                    id="aqi-tab-pane"
                    role="tabpanel"
                    aria-labelledby="aqi-tab"
                    tabIndex={0}
                  >
                    <div className="tab-aqi-ranges">
                      <ul className="perameter">
                        <li>{t("aqiRanges.categories.good")}</li>
                        <li>{t("aqiRanges.categories.moderate")}</li>
                        <li>{t("aqiRanges.categories.poor")}</li>
                        <li>{t("aqiRanges.categories.unhealthy")}</li>
                        <li>{t("aqiRanges.categories.severe")}</li>
                        <li>{t("aqiRanges.categories.hazardous")}</li>
                      </ul>
                      <div className="d-flex">
                        <p
                          className="green-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}
                        ></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                        <p
                          className="red-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}
                        ></p>
                      </div>
                      <ul className="aqi-rang">
                        <li>{t("aqiRanges.values.aqi.0")}</li>
                        <li>{t("aqiRanges.values.aqi.1")}</li>
                        <li>{t("aqiRanges.values.aqi.2")}</li>
                        <li>{t("aqiRanges.values.aqi.3")}</li>
                        <li>{t("aqiRanges.values.aqi.4")}</li>
                        <li>{t("aqiRanges.values.aqi.5")}</li>
                        <li>{t("aqiRanges.values.aqi.6")}</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pm1-tab-pane"
                    role="tabpanel"
                    aria-labelledby="pm1-tab"
                    tabIndex={0}
                  >
                    <div className="tab-aqi-ranges">
                      <ul className="perameter">
                        <li>{t("aqiRanges.categories.good")}</li>
                        <li>{t("aqiRanges.categories.moderate")}</li>
                        <li>{t("aqiRanges.categories.poor")}</li>
                        <li>{t("aqiRanges.categories.unhealthy")}</li>
                        <li>{t("aqiRanges.categories.severe")}</li>
                        <li>{t("aqiRanges.categories.hazardous")}</li>
                      </ul>
                      <div className="d-flex">
                        <p
                          className="green-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}
                        ></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                        <p
                          className="red-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}
                        ></p>
                      </div>
                      <ul className="aqi-rang">
                        <li>{t("aqiRanges.values.pm1.0")}</li>
                        <li>{t("aqiRanges.values.pm1.1")}</li>
                        <li>{t("aqiRanges.values.pm1.2")}</li>
                        <li>{t("aqiRanges.values.pm1.3")}</li>
                        <li>{t("aqiRanges.values.pm1.4")}</li>
                        <li>{t("aqiRanges.values.pm1.5")}</li>
                        <li>{t("aqiRanges.values.pm1.6")}</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pm25-tab-pane"
                    role="tabpanel"
                    aria-labelledby="pm25-tab"
                    tabIndex={0}
                  >
                    <div className="tab-aqi-ranges">
                      <ul className="perameter">
                        <li>{t("aqiRanges.categories.good")}</li>
                        <li>{t("aqiRanges.categories.moderate")}</li>
                        <li>{t("aqiRanges.categories.poor")}</li>
                        <li>{t("aqiRanges.categories.unhealthy")}</li>
                        <li>{t("aqiRanges.categories.severe")}</li>
                        <li>{t("aqiRanges.categories.hazardous")}</li>
                      </ul>
                      <div className="d-flex">
                        <p
                          className="green-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}
                        ></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                        <p
                          className="red-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}
                        ></p>
                      </div>
                      <ul className="aqi-rang">
                        <li>{t("aqiRanges.values.pm25.0")}</li>
                        <li>{t("aqiRanges.values.pm25.1")}</li>
                        <li>{t("aqiRanges.values.pm25.2")}</li>
                        <li>{t("aqiRanges.values.pm25.3")}</li>
                        <li>{t("aqiRanges.values.pm25.4")}</li>
                        <li>{t("aqiRanges.values.pm25.5")}</li>
                        <li>{t("aqiRanges.values.pm25.6")}</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pm10-tab-pane"
                    role="tabpanel"
                    aria-labelledby="pm10-tab"
                    tabIndex={0}
                  >
                    <div className="tab-aqi-ranges">
                      <ul className="perameter">
                        <li>{t("aqiRanges.categories.good")}</li>
                        <li>{t("aqiRanges.categories.moderate")}</li>
                        <li>{t("aqiRanges.categories.poor")}</li>
                        <li>{t("aqiRanges.categories.unhealthy")}</li>
                        <li>{t("aqiRanges.categories.severe")}</li>
                        <li>{t("aqiRanges.categories.hazardous")}</li>
                      </ul>
                      <div className="d-flex">
                        <p
                          className="green-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}
                        ></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                        <p
                          className="red-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}
                        ></p>
                      </div>
                      <ul className="aqi-rang">
                        <li>{t("aqiRanges.values.pm10.0")}</li>
                        <li>{t("aqiRanges.values.pm10.1")}</li>
                        <li>{t("aqiRanges.values.pm10.2")}</li>
                        <li>{t("aqiRanges.values.pm10.3")}</li>
                        <li>{t("aqiRanges.values.pm10.4")}</li>
                        <li>{t("aqiRanges.values.pm10.5")}</li>
                        <li>{t("aqiRanges.values.pm10.6")}</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="co2-tab-pane"
                    role="tabpanel"
                    aria-labelledby="co2-tab"
                    tabIndex={0}
                  >
                    <div className="tab-aqi-ranges">
                      <ul className="perameter">
                        <li>{t("aqiRanges.categories.good")}</li>
                        <li>{t("aqiRanges.categories.moderate")}</li>
                        <li>{t("aqiRanges.categories.poor")}</li>
                        <li>{t("aqiRanges.categories.unhealthy")}</li>
                        <li>{t("aqiRanges.categories.severe")}</li>
                        <li>{t("aqiRanges.categories.hazardous")}</li>
                      </ul>
                      <div className="d-flex">
                        <p
                          className="green-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}
                        ></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                        <p
                          className="red-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}
                        ></p>
                      </div>
                      <ul className="aqi-rang">
                        <li>{t("aqiRanges.values.co2.0")}</li>
                        <li>{t("aqiRanges.values.co2.1")}</li>
                        <li>{t("aqiRanges.values.co2.2")}</li>
                        <li>{t("aqiRanges.values.co2.3")}</li>
                        <li>{t("aqiRanges.values.co2.4")}</li>
                        <li>{t("aqiRanges.values.co2.5")}</li>
                        <li>{t("aqiRanges.values.co2.6")}</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="hcho-tab-pane"
                    role="tabpanel"
                    aria-labelledby="hcho-tab"
                    tabIndex={0}
                  >
                    <div className="tab-aqi-ranges">
                      <ul className="perameter">
                        <li>{t("aqiRanges.categories.good")}</li>
                        <li>{t("aqiRanges.categories.moderate")}</li>
                        <li>{t("aqiRanges.categories.poor")}</li>
                        <li>{t("aqiRanges.categories.unhealthy")}</li>
                        <li>{t("aqiRanges.categories.severe")}</li>
                        <li>{t("aqiRanges.categories.hazardous")}</li>
                      </ul>
                      <div className="d-flex">
                        <p
                          className="green-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}
                        ></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                        <p
                          className="red-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}
                        ></p>
                      </div>
                      <ul className="aqi-rang">
                        <li>{t("aqiRanges.values.hcho.0")}</li>
                        <li>{t("aqiRanges.values.hcho.1")}</li>
                        <li>{t("aqiRanges.values.hcho.2")}</li>
                        <li>{t("aqiRanges.values.hcho.3")}</li>
                        <li>{t("aqiRanges.values.hcho.4")}</li>
                        <li>{t("aqiRanges.values.hcho.5")}</li>
                        <li>{t("aqiRanges.values.hcho.6")}</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tvoc-tab-pane"
                    role="tabpanel"
                    aria-labelledby="tvoc-tab"
                    tabIndex={0}
                  >
                    <div className="tab-aqi-ranges">
                      <ul className="perameter">
                        <li>{t("aqiRanges.categories.good")}</li>
                        <li>{t("aqiRanges.categories.moderate")}</li>
                        <li>{t("aqiRanges.categories.poor")}</li>
                        <li>{t("aqiRanges.categories.unhealthy")}</li>
                        <li>{t("aqiRanges.categories.severe")}</li>
                        <li>{t("aqiRanges.categories.hazardous")}</li>
                      </ul>
                      <div className="d-flex">
                        <p
                          className="green-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}
                        ></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                        <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                        <p
                          className="red-range"
                          style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}
                        ></p>
                      </div>
                      <ul className="aqi-rang">
                        <li>{t("aqiRanges.values.tvoc.0")}</li>
                        <li>{t("aqiRanges.values.tvoc.1")}</li>
                        <li>{t("aqiRanges.values.tvoc.2")}</li>
                        <li>{t("aqiRanges.values.tvoc.3")}</li>
                        <li>{t("aqiRanges.values.tvoc.4")}</li>
                        <li>{t("aqiRanges.values.tvoc.5")}</li>
                        <li>{t("aqiRanges.values.tvoc.6")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Visuals Section */}
      <section className="types-visuals-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="graph-title visual-title">
                <h2>{t("typesOfVisuals.title")}</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="graph-para visual-para">
                <p>{t("typesOfVisuals.description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* Tab Content */}
              <div className="tab-content mb-4 mt-4">
                <div className="tab-pane fade show active" id="section1" role="tabpanel" aria-labelledby="section1-tab">
                  <div className="text-center show-img">
                    <img
                      src={t("typesOfVisuals.screens.main.image.src") || "/placeholder.svg"}
                      alt={t("typesOfVisuals.screens.main.image.alt")}
                      className="img-fluid"
                    />
                    <h5 className="mt-3">{t("typesOfVisuals.screens.main.description")}</h5>
                  </div>
                </div>

                <div className="tab-pane fade" id="section2" role="tabpanel" aria-labelledby="section2-tab">
                  <div className="text-center show-img">
                    <img
                      src={t("typesOfVisuals.screens.graph.image.src") || "/placeholder.svg"}
                      alt={t("typesOfVisuals.screens.graph.image.alt")}
                      className="img-fluid"
                    />
                    <h5 className="mt-3">{t("typesOfVisuals.screens.graph.description")}</h5>
                  </div>
                </div>

                <div className="tab-pane fade" id="section3" role="tabpanel" aria-labelledby="section3-tab">
                  <div className="text-center show-img">
                    <img
                      src={t("typesOfVisuals.screens.concentrated.image.src") || "/placeholder.svg"}
                      alt={t("typesOfVisuals.screens.concentrated.image.alt")}
                      className="img-fluid"
                    />
                    <h5 className="mt-3">{t("typesOfVisuals.screens.concentrated.description")}</h5>
                  </div>
                </div>

                <div className="tab-pane fade" id="section4" role="tabpanel" aria-labelledby="section4-tab">
                  <div className="text-center show-img">
                    <img
                      src={t("typesOfVisuals.screens.clock.image.src") || "/placeholder.svg"}
                      alt={t("typesOfVisuals.screens.clock.image.alt")}
                      className="img-fluid"
                    />
                    <h5 className="mt-3">{t("typesOfVisuals.screens.clock.description")}</h5>
                  </div>
                </div>

                <div className="tab-pane fade" id="section5" role="tabpanel" aria-labelledby="section5-tab">
                  <div className="text-center show-img">
                    <img
                      src={t("typesOfVisuals.screens.parameter.image.src") || "/placeholder.svg"}
                      alt={t("typesOfVisuals.screens.parameter.image.alt")}
                      className="img-fluid"
                    />
                    <h5 className="mt-3">{t("typesOfVisuals.screens.parameter.description")}</h5>
                  </div>
                </div>
              </div>
              {/* Tab Navigation */}
              <ul className="nav nav-tabs justify-content-center" id="visualTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="section1-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#section1"
                    type="button"
                    role="tab"
                    aria-controls="section1"
                    aria-selected="true"
                  >
                    <div className="text-center">
                      <img
                        src={t("typesOfVisuals.tabs.main.icon.src") || "/placeholder.svg"}
                        alt={t("typesOfVisuals.tabs.main.icon.alt")}
                        className="img-fluid mb-2"
                        style={{ maxHeight: "40px" }}
                      />
                      <h5 className="mb-0 small">{t("typesOfVisuals.tabs.main.title")}</h5>
                    </div>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="section2-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#section2"
                    type="button"
                    role="tab"
                    aria-controls="section2"
                    aria-selected="false"
                  >
                    <div className="text-center">
                      <img
                        src={t("typesOfVisuals.tabs.graph.icon.src") || "/placeholder.svg"}
                        alt={t("typesOfVisuals.tabs.graph.icon.alt")}
                        className="img-fluid mb-2"
                        style={{ maxHeight: "40px" }}
                      />
                      <h5 className="mb-0 small">{t("typesOfVisuals.tabs.graph.title")}</h5>
                    </div>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="section3-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#section3"
                    type="button"
                    role="tab"
                    aria-controls="section3"
                    aria-selected="false"
                  >
                    <div className="text-center">
                      <img
                        src={t("typesOfVisuals.tabs.concentrated.icon.src") || "/placeholder.svg"}
                        alt={t("typesOfVisuals.tabs.concentrated.icon.alt")}
                        className="img-fluid mb-2"
                        style={{ maxHeight: "40px" }}
                      />
                      <h5 className="mb-0 small">{t("typesOfVisuals.tabs.concentrated.title")}</h5>
                    </div>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="section4-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#section4"
                    type="button"
                    role="tab"
                    aria-controls="section4"
                    aria-selected="false"
                  >
                    <div className="text-center">
                      <img
                        src={t("typesOfVisuals.tabs.clock.icon.src") || "/placeholder.svg"}
                        alt={t("typesOfVisuals.tabs.clock.icon.alt")}
                        className="img-fluid mb-2"
                        style={{ maxHeight: "40px" }}
                      />
                      <h5 className="mb-0 small">{t("typesOfVisuals.tabs.clock.title")}</h5>
                    </div>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="section5-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#section5"
                    type="button"
                    role="tab"
                    aria-controls="section5"
                    aria-selected="false"
                  >
                    <div className="text-center">
                      <img
                        src={t("typesOfVisuals.tabs.parameter.icon.src") || "/placeholder.svg"}
                        alt={t("typesOfVisuals.tabs.parameter.icon.alt")}
                        className="img-fluid mb-2"
                        style={{ maxHeight: "40px" }}
                      />
                      <h5 className="mb-0 small">{t("typesOfVisuals.tabs.parameter.title")}</h5>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Graph Heading Section */}
      <div className="container">
        <div className="row graph-heading">
          <div className="col-md-6">
            <div className="graph-title">
              <h2>{t("graphHeading.title")}</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="graph-para">
              <p>{t("graphHeading.description")}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Graph Chart Section */}
      <div className="container-fluid">
        <div className="row graph-chartt">
          <div className="col">
            <div className="graph-chart-img">
              <img src="https://www.pranaair.com/wp-content/uploads/2023/12/graph-chart-scaled.jpg" alt="graph chart" />
            </div>
          </div>
        </div>
      </div>

      {/* AQI TV App Section */}
      <div className="container-fluid">
        <div className="row graph-chart aqi-tv-screen">
          <div className="col-md-6">
            <div className="aqi-tv-app-title">
              <h2>
                <img src={t("aqiTvApp.logo.src") || "/placeholder.svg"} alt={t("aqiTvApp.logo.alt")} />{" "}
                {t("aqiTvApp.title")}
              </h2>
              <h3>
                {t("aqiTvApp.subtitle.before")} <span className="pink">{t("aqiTvApp.subtitle.indoor")}</span>{" "}
                {t("aqiTvApp.subtitle.and")} <span className="pink">{t("aqiTvApp.subtitle.outdoor")}</span>{" "}
                {t("aqiTvApp.subtitle.after")}
              </h3>
              <p>{t("aqiTvApp.description")}</p>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>

      {/* Track Quality Section */}
      <section className="tv-app-section">
        <div className="container">
          <div className="row aqi-app-heading">
            <div className="col-md-6">
              <div className="track-aqi-heading">
                <h2>
                  {t("trackQuality.title.before")}{" "}
                  <span className="txt-color">{t("trackQuality.title.highlight")}</span>{" "}
                  {t("trackQuality.title.middle")}
                  <span className="aqi-logo">
                    <img src={t("trackQuality.logo.src") || "/placeholder.svg"} alt={t("trackQuality.logo.alt")} />
                  </span>{" "}
                  {t("trackQuality.title.after")}
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="graph-para track-aqi-para">
                <p>{t("trackQuality.subtitle")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="plateform-tab">
                <ul className="nav nav-tabs" id="trackQualityTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="mobile-app-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#mobile-app-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="mobile-app-tab-pane"
                      aria-selected="true"
                    >
                      {t("trackQuality.tabs.mobileApp")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="tv-app-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tv-app-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="tv-app-tab-pane"
                      aria-selected="false"
                    >
                      {t("trackQuality.tabs.tvApp")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="web-dashboard-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#web-dashboard-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="web-dashboard-tab-pane"
                      aria-selected="false"
                    >
                      {t("trackQuality.tabs.webDashboard")}
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="trackQualityTabsContent">
                <div
                  className="tab-pane fade show active"
                  id="mobile-app-tab-pane"
                  role="tabpanel"
                  aria-labelledby="mobile-app-tab"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="mobile-screen">
                        <h3>{t("trackQuality.mobileApp.title")}</h3>
                        <img
                          src={t("trackQuality.mobileApp.image.src") || "/placeholder.svg"}
                          alt={t("trackQuality.mobileApp.image.alt")}
                        />
                      </div>
                      <div className="main-health-box">
                        <div className="health-real-time">
                          <div className="health-data-box">
                            <ul>
                              <li>
                                <img
                                  src={t("trackQuality.mobileApp.features.health.icon.src") || "/placeholder.svg"}
                                  alt={t("trackQuality.mobileApp.features.health.icon.alt")}
                                />
                              </li>
                              <li>
                                <h4>{t("trackQuality.mobileApp.features.health.title")}</h4>
                                {t("trackQuality.mobileApp.features.health.description")}
                              </li>
                            </ul>
                          </div>
                          <div className="health-data-box">
                            <ul>
                              <li>
                                <img
                                  src={t("trackQuality.mobileApp.features.realTime.icon.src") || "/placeholder.svg"}
                                  alt={t("trackQuality.mobileApp.features.realTime.icon.alt")}
                                />
                              </li>
                              <li>
                                <h4>{t("trackQuality.mobileApp.features.realTime.title")}</h4>
                                {t("trackQuality.mobileApp.features.realTime.description")}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mob-app-btn">
                        <a className="m-btn iphone-btn" href={t("trackQuality.mobileApp.buttons.ios.link")}>
                          <img
                            src={t("trackQuality.mobileApp.buttons.ios.icon.src") || "/placeholder.svg"}
                            alt={t("trackQuality.mobileApp.buttons.ios.icon.alt")}
                          />{" "}
                          {t("trackQuality.mobileApp.buttons.ios.textBefore")}{" "}
                          <strong>{t("trackQuality.mobileApp.buttons.ios.textHighlight")}</strong>
                        </a>
                        <a className="m-btn anddro-btn" href={t("trackQuality.mobileApp.buttons.android.link")}>
                          <img
                            src={t("trackQuality.mobileApp.buttons.android.icon.src") || "/placeholder.svg"}
                            alt={t("trackQuality.mobileApp.buttons.android.icon.alt")}
                          />{" "}
                          {t("trackQuality.mobileApp.buttons.android.textBefore")}{" "}
                          <strong>{t("trackQuality.mobileApp.buttons.android.textHighlight")}</strong>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tv-app-tab-pane"
                  role="tabpanel"
                  aria-labelledby="tv-app-tab"
                  tabIndex={0}
                >
                  <div className="tv-screen">
                    <h3>{t("trackQuality.tvApp.title")}</h3>
                    <img
                      src={t("trackQuality.tvApp.image.src") || "/placeholder.svg"}
                      alt={t("trackQuality.tvApp.image.alt")}
                    />
                  </div>
                  <TvAppTabs />
                  <div className="main-health-box">
                    <div className="health-real-time">
                      <div className="health-data-box">
                        <ul>
                          <li>
                            <img
                              src={t("trackQuality.tvApp.features.themes.icon.src") || "/placeholder.svg"}
                              alt={t("trackQuality.tvApp.features.themes.icon.alt")}
                            />
                          </li>
                          <li>
                            <h4>{t("trackQuality.tvApp.features.themes.title")}</h4>
                            {t("trackQuality.tvApp.features.themes.description")}
                          </li>
                        </ul>
                      </div>
                      <div className="health-data-box">
                        <ul>
                          <li>
                            <img
                              src={t("trackQuality.tvApp.features.connect.icon.src") || "/placeholder.svg"}
                              alt={t("trackQuality.tvApp.features.connect.icon.alt")}
                            />
                          </li>
                          <li>
                            <h4>{t("trackQuality.tvApp.features.connect.title")}</h4>
                            {t("trackQuality.tvApp.features.connect.description")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a className="tv-app-btn" href={t("trackQuality.tvApp.button.link")}>
                    {t("trackQuality.tvApp.button.textBefore")}{" "}
                    <strong>{t("trackQuality.tvApp.button.textHighlight")}</strong>
                  </a>
                </div>
                <div
                  className="tab-pane fade"
                  id="web-dashboard-tab-pane"
                  role="tabpanel"
                  aria-labelledby="web-dashboard-tab"
                  tabIndex={0}
                >
                  <div className="web-screen">
                    <h3>{t("trackQuality.webDashboard.title")}</h3>
                    <img
                      src={t("trackQuality.webDashboard.image.src") || "/placeholder.svg"}
                      alt={t("trackQuality.webDashboard.image.alt")}
                    />
                  </div>
                  <div className="main-health-box">
                    <div className="health-real-time">
                      <div className="health-data-box">
                        <ul>
                          <li>
                            <img
                              src={t("trackQuality.webDashboard.features.remote.icon.src") || "/placeholder.svg"}
                              alt={t("trackQuality.webDashboard.features.remote.icon.alt")}
                            />
                          </li>
                          <li>
                            <h4>{t("trackQuality.webDashboard.features.remote.title")}</h4>
                            {t("trackQuality.webDashboard.features.remote.description")}
                          </li>
                        </ul>
                      </div>
                      <div className="health-data-box">
                        <ul>
                          <li>
                            <img
                              src={t("trackQuality.webDashboard.features.comparison.icon.src") || "/placeholder.svg"}
                              alt={t("trackQuality.webDashboard.features.comparison.icon.alt")}
                            />
                          </li>
                          <li>
                            <h4>{t("trackQuality.webDashboard.features.comparison.title")}</h4>
                            {t("trackQuality.webDashboard.features.comparison.description")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a className="tv-app-btn" href={t("trackQuality.webDashboard.button.link")}>
                    {t("trackQuality.webDashboard.button.textBefore")}{" "}
                    <strong>{t("trackQuality.webDashboard.button.textHighlight")}</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Index Section */}
      <div className="graph-heading container">
        <div className="row">
          <div className="col-md-6">
            <div className="graph-title health-index-heading">
              <h2>
                <span className="txt-color">{t("healthIndex.title.ai")}</span> {t("healthIndex.title.calculated")}{" "}
                <span className="txt-color">{t("healthIndex.title.health")}</span> {t("healthIndex.title.indexScore")}
              </h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="graph-para">
              <p>{t("healthIndex.description")}</p>
            </div>
          </div>
        </div>
      </div>
      <section className="health-index-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="co2-bar">
                <ul className="security">
                  <li>{t("healthIndex.scale.bad")}</li>
                  <li>{t("healthIndex.scale.moderate")}</li>
                  <li>{t("healthIndex.scale.good")}</li>
                </ul>
                <ul className="rang">
                  <li>{t("healthIndex.scale.min")}</li>
                  <li>{t("healthIndex.scale.mid")}</li>
                  <li>{t("healthIndex.scale.max")}</li>
                </ul>
              </div>

              <div className="health-index-score">
                <div className="health-index-score-box">
                  <ul className="position-one" style={{ animationDuration: "4s" }}>
                    <li>
                      <img
                        src={t("healthIndex.scores.ventilation.icon.src") || "/placeholder.svg"}
                        alt={t("healthIndex.scores.ventilation.icon.alt")}
                      />
                    </li>
                    <li>
                      <h3>{t("healthIndex.scores.ventilation.title")}</h3>
                      <p>{t("healthIndex.scores.ventilation.description")}</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#fbb400" }}>{t("healthIndex.scores.ventilation.score")}</h4>
                      <h5>{t("healthIndex.scores.ventilation.rating")}</h5>
                    </li>
                  </ul>
                  <ul className="position-two" style={{ animationDuration: "6s" }}>
                    <li>
                      <img
                        src={t("healthIndex.scores.odor.icon.src") || "/placeholder.svg"}
                        alt={t("healthIndex.scores.odor.icon.alt")}
                      />
                    </li>
                    <li>
                      <h3>{t("healthIndex.scores.odor.title")}</h3>
                      <p>{t("healthIndex.scores.odor.description")}</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#f4231c" }}>{t("healthIndex.scores.odor.score")}</h4>
                      <h5>{t("healthIndex.scores.odor.rating")}</h5>
                    </li>
                  </ul>
                  <ul className="position-three" style={{ animationDuration: "4s" }}>
                    <li>
                      <img
                        src={t("healthIndex.scores.mold.icon.src") || "/placeholder.svg"}
                        alt={t("healthIndex.scores.mold.icon.alt")}
                      />
                    </li>
                    <li>
                      <h3>{t("healthIndex.scores.mold.title")}</h3>
                      <p>{t("healthIndex.scores.mold.description")}</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#29b713" }}>{t("healthIndex.scores.mold.score")}</h4>
                      <h5>{t("healthIndex.scores.mold.rating")}</h5>
                    </li>
                  </ul>
                </div>
                <div className="health-index-score-box">
                  <ul className="position-four" style={{ animationDuration: "6s" }}>
                    <li>
                      <img
                        src={t("healthIndex.scores.capacity.icon.src") || "/placeholder.svg"}
                        alt={t("healthIndex.scores.capacity.icon.alt")}
                      />
                    </li>
                    <li>
                      <h3>{t("healthIndex.scores.capacity.title")}</h3>
                      <p>{t("healthIndex.scores.capacity.description")}</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#29b713" }}>{t("healthIndex.scores.capacity.score")}</h4>
                      <h5>{t("healthIndex.scores.capacity.rating")}</h5>
                    </li>
                  </ul>
                  <ul className="position-five" style={{ animationDuration: "4s" }}>
                    <li>
                      <img
                        src={t("healthIndex.scores.comfort.icon.src") || "/placeholder.svg"}
                        alt={t("healthIndex.scores.comfort.icon.alt")}
                      />
                    </li>
                    <li>
                      <h3>{t("healthIndex.scores.comfort.title")}</h3>
                      <p>{t("healthIndex.scores.comfort.description")}</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#29b713" }}>{t("healthIndex.scores.comfort.score")}</h4>
                      <h5>{t("healthIndex.scores.comfort.rating")}</h5>
                    </li>
                  </ul>
                  <ul className="position-six" style={{ animationDuration: "6s" }}>
                    <li>
                      <img
                        src={t("healthIndex.scores.filtration.icon.src") || "/placeholder.svg"}
                        alt={t("healthIndex.scores.filtration.icon.alt")}
                      />
                    </li>
                    <li>
                      <h3>{t("healthIndex.scores.filtration.title")}</h3>
                      <p>{t("healthIndex.scores.filtration.description")}</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#f4231c" }}>{t("healthIndex.scores.filtration.score")}</h4>
                      <h5>{t("healthIndex.scores.filtration.rating")}</h5>
                    </li>
                  </ul>
                </div>
                <div className="health-index-score-box">
                  <ul className="position-seven" style={{ animationDuration: "4s" }}>
                    <li>
                      <img
                        src={t("healthIndex.scores.mites.icon.src") || "/placeholder.svg"}
                        alt={t("healthIndex.scores.mites.icon.alt")}
                      />
                    </li>
                    <li>
                      <h3>{t("healthIndex.scores.mites.title")}</h3>
                      <p>{t("healthIndex.scores.mites.description")}</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#f4231c" }}>{t("healthIndex.scores.mites.score")}</h4>
                      <h5>{t("healthIndex.scores.mites.rating")}</h5>
                    </li>
                  </ul>
                  <ul className="position-eight" style={{ animationDuration: "6s" }}>
                    <li>
                      <img
                        src={t("healthIndex.scores.virus.icon.src") || "/placeholder.svg"}
                        alt={t("healthIndex.scores.virus.icon.alt")}
                      />
                    </li>
                    <li>
                      <h3>{t("healthIndex.scores.virus.title")}</h3>
                      <p>{t("healthIndex.scores.virus.description")}</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#f4231c" }}>{t("healthIndex.scores.virus.score")}</h4>
                      <h5>{t("healthIndex.scores.virus.rating")}</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Data Section */}
      <section className="access-real-time-historic-data">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="historic-data-text">
                <h2>
                  <img src={t("historicData.logo.src") || "/placeholder.svg"} alt={t("historicData.logo.alt")} />
                  {t("historicData.title")}
                </h2>
                <h3>
                  <img
                    src={t("historicData.subtitle.icon.src") || "/placeholder.svg"}
                    alt={t("historicData.subtitle.icon.alt")}
                  />
                  {t("historicData.subtitle.text")}
                </h3>
                <p>{t("historicData.description")}</p>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      {/* Parts and Labels Section */}
      <div className="container">
        <div className="row parts-label-tabs">
          <div className="col-md-6">
            <div className="parts-label-heading">
              <h2>{t("partsAndLabels.title")}</h2>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row parts-label-tabsection">
          <div className="col-12">
            <div className="label-part-tab">
              <ul className="nav nav-tabs" id="partsLabelTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="parts-label-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#parts-label-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="parts-label-tab-pane"
                    aria-selected="true"
                  >
                    {t("partsAndLabels.tabs.partsLabel")}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="disassambley-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#disassambley-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="disassambley-tab-pane"
                    aria-selected="false"
                  >
                    {t("partsAndLabels.tabs.disassembly")}
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="partsLabelTabsContent">
              <div
                className="tab-pane fade show active"
                id="parts-label-tab-pane"
                role="tabpanel"
                aria-labelledby="parts-label-tab"
                tabIndex={0}
              >
                <div className="row part-labe-bg">
                  <div className="col-md-6">
                    <div className="part-lables-img">
                      <img
                        src={t("partsAndLabels.partsLabel.image.src") || "/placeholder.svg"}
                        alt={t("partsAndLabels.partsLabel.image.alt")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="part-label-box">
                      <ul>
                        <li>
                          <span className="num">1</span>
                          <h4>{t("partsAndLabels.partsLabel.components.1")}</h4>
                        </li>
                        <li>
                          <span className="num">2</span>
                          <h4>{t("partsAndLabels.partsLabel.components.2")}</h4>
                        </li>
                        <li>
                          <span className="num">3</span>
                          <h4>{t("partsAndLabels.partsLabel.components.3")}</h4>
                        </li>
                        <li>
                          <span className="num">4</span>
                          <h4>{t("partsAndLabels.partsLabel.components.4")}</h4>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span className="num">5</span>
                          <h4>{t("partsAndLabels.partsLabel.components.5")}</h4>
                        </li>
                        <li>
                          <span className="num">6</span>
                          <h4>{t("partsAndLabels.partsLabel.components.6")}</h4>
                        </li>
                        <li>
                          <span className="num">7</span>
                          <h4>{t("partsAndLabels.partsLabel.components.7")}</h4>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="disassambley-tab-pane"
                role="tabpanel"
                aria-labelledby="disassambley-tab"
                tabIndex={0}
              >
                <div className="row mob-disassamble">
                  <div className="col-md-6">
                    <div className="disassamble-img">
                      <div className="glow-img">
                        <img
                          src={t("partsAndLabels.disassembly.images.main.src") || "/placeholder.svg"}
                          alt={t("partsAndLabels.disassembly.images.main.alt")}
                        />
                      </div>
                    </div>
                    <div className="disassamble-glow-img">
                      <div className="glow-img">
                        <img
                          src={t("partsAndLabels.disassembly.images.inside.src") || "/placeholder.svg"}
                          alt={t("partsAndLabels.disassembly.images.inside.alt")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="disassamble-text">
                      <h2>{t("partsAndLabels.disassembly.title")}</h2>
                      <h3>{t("partsAndLabels.disassembly.subtitle")}</h3>
                      <p>{t("partsAndLabels.disassembly.description")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Long Battery Section */}
      <section className="long-battery-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="long-battery animated fadeInUp">
                <p>
                  <img src={t("longBattery.image.src") || "/placeholder.svg"} alt={t("longBattery.image.alt")} />
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="long-battery-text animated fadeInUp">
                <h2>{t("longBattery.capacity")}</h2>
                <h5>{t("longBattery.title")}</h5>
                <p>{t("longBattery.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="tech-spec-section">
        <div className="container">
          <div className="row tech-spec-line">
            <div className="col-md-6">
              <div className="graph-title tech-spec-heading animated fadeInUp">
                <h2>{t("techSpecs.title")}</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="animated fadeInUp">
                <p>
                  <a
                    className="tech-spec-btn"
                    href={t("techSpecs.brochure.link")}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={t("techSpecs.brochure.icon.src") || "/placeholder.svg"}
                      alt={t("techSpecs.brochure.icon.alt")}
                    />
                    {t("techSpecs.brochure.text")}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="car-in-outdoor-tab">
                <div className="tab-pane active">
                  <div className="row texh-spec-box">
                    <div className="col-md-6">
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>{t("techSpecs.specs.parameters.title")}</h5>
                          </li>
                          <li>{t("techSpecs.specs.parameters.value")}</li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>{t("techSpecs.specs.connectivity.title")}</h5>
                          </li>
                          <li>{t("techSpecs.specs.connectivity.value")}</li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>{t("techSpecs.specs.color.title")}</h5>
                          </li>
                          <li>{t("techSpecs.specs.color.value")}</li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>{t("techSpecs.specs.size.title")}</h5>
                          </li>
                          <li>{t("techSpecs.specs.size.value")}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>{t("techSpecs.specs.storage.title")}</h5>
                          </li>
                          <li dangerouslySetInnerHTML={{ __html: t("techSpecs.specs.storage.value") }}></li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>{t("techSpecs.specs.weight.title")}</h5>
                          </li>
                          <li>{t("techSpecs.specs.weight.value")}</li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>{t("techSpecs.specs.screen.title")}</h5>
                          </li>
                          <li>{t("techSpecs.specs.screen.value")}</li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>{t("techSpecs.specs.powerSupply.title")}</h5>
                          </li>
                          <li>{t("techSpecs.specs.powerSupply.value")}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row how-to-connect">
            <div className="col-12">
              <div className="how-to-connect-heading animated fadeInUp">
                <h2>{t("techSpecs.howToConnect.title")}</h2>
              </div>
            </div>
          </div>

          <div className="row qr-code-bg">
            <div className="col-md-4">
              <div className="qr-code-img">
                <ul>
                  <li>
                    <img
                      src={t("techSpecs.howToConnect.qrCode.image.src") || "/placeholder.svg"}
                      alt={t("techSpecs.howToConnect.qrCode.image.alt")}
                    />
                  </li>
                  <li>
                    <h5>{t("techSpecs.howToConnect.qrCode.text")}</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="or-txt">
                <p>{t("techSpecs.howToConnect.or")}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <p>
                  <a
                    className="manual-btn"
                    href={t("techSpecs.howToConnect.manual.link")}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={t("techSpecs.howToConnect.manual.icon.src") || "/placeholder.svg"}
                      alt={t("techSpecs.howToConnect.manual.icon.alt")}
                    />
                    {t("techSpecs.howToConnect.manual.text")}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* airqulality contact Section */}
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
      <ContactForm pageName="Cair Monitor Page" />

      {/* FAQs Section */}
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="faq-heading">
                <h2>{t("faqs.title")}</h2>
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
                    >
                      {t("faqs.items.1.question")}
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">{t("faqs.items.1.answer")}</div>
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
                    >
                      {t("faqs.items.2.question")}
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">{t("faqs.items.2.answer")}</div>
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
                    >
                      {t("faqs.items.3.question")}
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">{t("faqs.items.3.answer")}</div>
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
                    >
                      {t("faqs.items.4.question")}
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">{t("faqs.items.4.answer")}</div>
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
                    >
                      {t("faqs.items.5.question")}
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">{t("faqs.items.5.answer")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

