import PollutantsToggle from "@/Components/Pages/SquairAirmonitor/pollutants-toggle"
import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
  const lang = params?.lang || "en";
  const slug = "air-quality-monitor"; // page-specific slug
  const { t } = await getServerTranslation("squair-monitor");
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
export default async function SquairMonitor() {
  const { t } = await getServerTranslation("squair-monitor")
  return (
    <div>
      {/* Banner Section */}
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="squairMonitorbanner-content">
                <h3>{t("squairBanner.title.brand")}</h3>
                <h1>
                  {t("squairBanner.title.product")}{" "}
                  <span className="heading-sub">{t("squairBanner.title.subtitle")}</span>
                </h1>
                <p>{t("squairBanner.description")}</p>
                <div className="banner-btn">
                  <form
                    className="cart"
                    action="https://www.pranaair.com/product/squair-air-monitor/"
                    encType="multipart/form-data"
                    method="post"
                  >
                    <button
                      className="single_add_to_cart_button button alt bg-btn bg-green"
                      name="add-to-cart"
                      type="submit"
                      value="20807"
                    >
                      {t("squairBanner.buttons.buyNow")}
                    </button>
                  </form>
                  <a className="bg-btn bg-green" href="#request_a_quote">
                    {t("squairBanner.buttons.getQuote")}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/12/prana-air-indoor-squair-air-quality-monitor.png"
                alt={t("squairBanner.altTexts.monitorImage")}
                className="squair-monitor-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="container squairProductTabs" id="pdngT0">
        <div className="row cntrtxt">
          <div className="col-md-12">
            <div className="squairMonitorContent">
              <h2 style={{ textAlign: "center" }}>{t("squairBanner.productDescription.title")}</h2>
              <p style={{ textAlign: "center" }}>{t("squairBanner.productDescription.paragraph1")}</p>
              <p style={{ textAlign: "center" }}>
                {t("squairBanner.productDescription.paragraph2Part1")}{" "}
                <strong>{t("squairBanner.productDescription.paragraph2Part2")}</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="row">
          <div className="col-md-12">
            <div className="video-container">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/vKTDgUu1K_E"
                title={t("squairBanner.video.title")}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="row squairMonitorContent">
          <div className="col-md-12">
            <h3 style={{ textAlign: "center" }}>{t("squairBanner.features.heading")}</h3>
          </div>
        </div>

        <div className="squair-monitor-feature-pointer">
          <div className="square-customeResponsive">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/04/icon-realtime-SQUAIR.png"
              alt={t("squairBanner.features.realTime.alt")}
            />
            <h5 style={{ textAlign: "center" }}>{t("squairBanner.features.realTime.title")}</h5>
            <p style={{ textAlign: "center", color: "#adadad" }}>{t("squairBanner.features.realTime.description")}</p>
          </div>
          <div className="square-customeResponsive">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/04/icon-reliable-web-SQUAIR.png"
              alt={t("squairBanner.features.webDashboard.alt")}
            />
            <h5 style={{ textAlign: "center" }}>{t("squairBanner.features.webDashboard.title")}</h5>
            <p style={{ textAlign: "center", color: "#adadad" }}>
              {t("squairBanner.features.webDashboard.description")}
            </p>
          </div>
          <div className="square-customeResponsive">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/04/icon-app-enabled-SQUAIR.png"
              alt={t("squairBanner.features.mobileApp.alt")}
            />
            <h5 style={{ textAlign: "center" }}>{t("squairBanner.features.mobileApp.title")}</h5>
            <p style={{ textAlign: "center", color: "#adadad" }}>{t("squairBanner.features.mobileApp.description")}</p>
          </div>
          <div className="square-customeResponsive">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/04/icon-versatile-SQUAIR.png"
              alt={t("squairBanner.features.connectivity.alt")}
            />
            <h5 style={{ textAlign: "center" }}>{t("squairBanner.features.connectivity.title")}</h5>
            <p style={{ textAlign: "center", color: "#adadad" }}>
              {t("squairBanner.features.connectivity.description")}
            </p>
          </div>
          <div className="square-customeResponsive">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/04/icon-sd-card-SQUAIR.png"
              alt={t("squairBanner.features.sdCard.alt")}
            />
            <h5 style={{ textAlign: "center" }}>{t("squairBanner.features.sdCard.title")}</h5>
            <p style={{ textAlign: "center", color: "#adadad" }}>{t("squairBanner.features.sdCard.description")}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 square-customeResponsive">
            <p style={{ textAlign: "center" }}>
              <em>
                <span style={{ fontSize: "17pt" }}>
                  <sup>
                    <span style={{ fontSize: "17pt" }}>
                      <sub>
                        <img
                          className="alignnone size-full"
                          src="https://www.pranaair.com/wp-content/uploads/2022/07/compliance-icon.png"
                          alt={t("squairBanner.compliance.altText")}
                          width="30"
                          height="30"
                        />
                      </sub>{" "}
                      {t("squairBanner.compliance.text.complianceWith")}{" "}
                      <span style={{ color: "#4cae51" }}>
                        <strong>{t("squairBanner.compliance.text.leedWell")}</strong>
                      </span>{" "}
                      {t("squairBanner.compliance.text.and")}{" "}
                      <span style={{ color: "#4cae51" }}>
                        <strong>{t("squairBanner.compliance.text.ashrae")}</strong>
                      </span>{" "}
                      {t("squairBanner.compliance.text.standards")}
                    </span>
                  </sup>
                </span>
              </em>
            </p>
          </div>
        </div>
      </div>

      {/* Tutorial Video */}
      <div className="container-fluid popup-tutorial popup-tutorial-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/QS2pE69EZdI"
                  title="SQUAIR Air Quality Monitor Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Air Quality Index Ranges */}
      <div className="container top_space_air" id="top_space_air">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: "center" }}>{t("squairBanner.aqiRanges.title")}</h3>
            <table className="squair-quality-ranges">
              <tbody>
                <tr>
                  <td className="brdr grn">
                    <h5>{t("squairBanner.aqiRanges.ranges.good.range")}</h5>
                    {t("squairBanner.aqiRanges.ranges.good.label")}
                  </td>
                  <td className="brdr ylw">
                    <h5>{t("squairBanner.aqiRanges.ranges.moderate.range")}</h5>
                    {t("squairBanner.aqiRanges.ranges.moderate.label")}
                  </td>
                  <td className="brdr orng">
                    <h5>{t("squairBanner.aqiRanges.ranges.poor.range")}</h5>
                    {t("squairBanner.aqiRanges.ranges.poor.label")}
                  </td>
                  <td className="brdr pnk">
                    <h5>{t("squairBanner.aqiRanges.ranges.unhealthy.range")}</h5>
                    {t("squairBanner.aqiRanges.ranges.unhealthy.label")}
                  </td>
                  <td className="brdr jmni">
                    <h5>{t("squairBanner.aqiRanges.ranges.severe.range")}</h5>
                    {t("squairBanner.aqiRanges.ranges.severe.label")}
                  </td>
                  <td className="brdr red">
                    <h5>{t("squairBanner.aqiRanges.ranges.hazardous.range")}</h5>
                    {t("squairBanner.aqiRanges.ranges.hazardous.label")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Squair Variants */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="squair-variant-heading">
              <h2>{t("squairBanner.variants.title")}</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="squair-variant-para">
              <p>{t("squairBanner.variants.description")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs for Squair Variants - Using Bootstrap Tabs */}
      <div className="container-fluid tab-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="squair-variant-tab">
                {/* Bootstrap Nav Tabs */}
                <ul className="nav nav-tabs" id="squairVariantTabs" role="tablist">
                  <li className="nav-item squair-variant-title" role="presentation">
                    <button
                      className="nav-link active"
                      id="squair-lite-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#squair-lite-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="squair-lite-tab-pane"
                      aria-selected="true"
                    >
                      {t("squairBanner.variants.tabs.lite.title")}
                    </button>
                  </li>
                  <li className="nav-item squair-variant-title" role="presentation">
                    <button
                      className="nav-link"
                      id="squair-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#squair-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="squair-tab-pane"
                      aria-selected="false"
                    >
                      {t("squairBanner.variants.tabs.standard.title")}
                    </button>
                  </li>
                  <li className="nav-item squair-variant-title" role="presentation">
                    <button
                      className="nav-link"
                      id="squair-pro-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#squair-pro-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="squair-pro-tab-pane"
                      aria-selected="false"
                    >
                      {t("squairBanner.variants.tabs.pro.title")}
                    </button>
                  </li>
                </ul>

                {/* Bootstrap Tab Content */}
                <div className="tab-content" id="squairVariantTabsContent">
                  {/* Squair Lite Tab */}
                  <div
                    className="tab-pane fade show active"
                    id="squair-lite-tab-pane"
                    role="tabpanel"
                    aria-labelledby="squair-lite-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      <div className="col-md-4 squair-bg">
                        <div className="squair-img">
                          <div className="mob-boxx">
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2024/01/pranaair-squair-lite.png"
                              alt={t("squairBanner.variants.tabs.lite.image")}
                            />
                            <h4>
                              {t("squairBanner.variants.tabs.standard.title")}{" "}
                              <span className="pro">{t("squairBanner.variants.tabs.lite.variant")}</span>
                            </h4>
                          </div>
                          <ul>
                            <li>
                              <a href="#request_a_quote">{t("squairBanner.variants.common.getQuote")}</a>
                            </li>
                            <li>
                              <a href="https://www.pranaair.com/wp-content/uploads/2023/04/prana-air-squair-lite-air-monitor-brochure.pdf">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png"
                                  alt="icon"
                                />{" "}
                                {t("squairBanner.variants.common.brochure")}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-8 squair-parameter-bg">
                        <div className="squair-parameters">
                          <p className="parameter-para">{t("squairBanner.variants.tabs.lite.description")}</p>

                          <h4>{t("squairBanner.variants.common.parameters")}</h4>
                          <ul className="parameter-list">
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/AQI-parameter.png"
                                  alt="AQI parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.aqi")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/PM1-para.png"
                                  alt="PM1 para"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.pm1")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/PM2.5-parameter.png"
                                  alt="PM2.5 parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.pm25")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/PM10-parameter.png"
                                  alt="PM10 parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.pm10")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/parmeter-CO2.png"
                                  alt="CO2 parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.co2")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/TVOC-parameter.png"
                                  alt="TVOC parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.tvoc")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/PARTICLE-COUNT-0.5-parameter.png"
                                  alt="PARTICLE COUNT (0.5) parameter"
                                />
                                <span className="parameter-data">
                                  {t("squairBanner.variants.parameters.particlesCount")}
                                </span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/Humidity-parameter.png"
                                  alt="Humidity parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.humidity")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/TEMPERATURE-parameter.png"
                                  alt="TEMPERATURE parameter"
                                />
                                <span className="parameter-data">
                                  {t("squairBanner.variants.parameters.temperature")}
                                </span>
                              </span>
                            </li>
                          </ul>
                          <h4>{t("squairBanner.variants.common.connectivity")}</h4>
                          <ul className="connect-list">
                            <li>
                              <span className="para-flex">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/01/wifi-connect.png" alt="" />
                                {t("squairBanner.variants.connectivity.wifi")}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Squair Tab */}
                  <div
                    className="tab-pane fade"
                    id="squair-tab-pane"
                    role="tabpanel"
                    aria-labelledby="squair-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      <div className="col-md-4 squair-bg">
                        <div className="squair-img">
                          <div className="mob-boxx">
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2024/01/pranaair-squair.png"
                              alt={t("squairBanner.variants.tabs.standard.image")}
                            />
                            <h4>{t("squairBanner.variants.tabs.standard.title")}</h4>
                          </div>
                          <ul>
                            <li>
                              <a href="#request_a_quote">{t("squairBanner.variants.common.getQuote")}</a>
                            </li>
                            <li>
                              <a href="https://www.pranaair.com/wp-content/uploads/2023/04/prana-air-squair-air-monitor-brochure.pdf">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png"
                                  alt="icon"
                                />{" "}
                                {t("squairBanner.variants.common.brochure")}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-8 squair-parameter-bg">
                        <div className="squair-parameters">
                          <p className="parameter-para">{t("squairBanner.variants.tabs.standard.description")}</p>

                          <h4>{t("squairBanner.variants.common.parameters")}</h4>
                          <ul className="parameter-list">
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/AQI-parameter.png"
                                  alt="AQI parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.aqi")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/PM1-para.png"
                                  alt="PM1 para"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.pm1")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/PM2.5-parameter.png"
                                  alt="PM2.5 parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.pm25")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/PM10-parameter.png"
                                  alt="PM10 parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.pm10")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/parmeter-CO2.png"
                                  alt="CO2 parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.co2")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/HCHO-parameter.png"
                                  alt="HCHO parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.hcho")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/TVOC-parameter.png"
                                  alt="TVOC parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.tvoc")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/PARTICLE-COUNT-0.5-parameter.png"
                                  alt="PARTICLE COUNT (0.5) parameter"
                                />
                                <span className="parameter-data">
                                  {t("squairBanner.variants.parameters.particlesCount")}
                                </span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/Humidity-parameter.png"
                                  alt="Humidity parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.humidity")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/TEMPERATURE-parameter.png"
                                  alt="TEMPERATURE parameter"
                                />
                                <span className="parameter-data">
                                  {t("squairBanner.variants.parameters.temperature")}
                                </span>
                              </span>
                            </li>
                          </ul>
                          <h4>{t("squairBanner.variants.common.connectivity")}</h4>
                          <ul className="connect-list">
                            <li>
                              <span className="para-flex">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/01/wifi-connect.png" alt="" />
                                {t("squairBanner.variants.connectivity.wifi")}
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/01/RS485.png" alt="" />
                                {t("squairBanner.variants.connectivity.rs485")}
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/01/GSM.png" alt="GSM" />
                                {t("squairBanner.variants.connectivity.gsm")}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Squair Pro Tab */}
                  <div
                    className="tab-pane fade"
                    id="squair-pro-tab-pane"
                    role="tabpanel"
                    aria-labelledby="squair-pro-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      <div className="col-md-4 squair-bg">
                        <div className="squair-img">
                          <div className="mob-boxx">
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2024/08/pranaair-Squair-pro-monitor.png"
                              alt={t("squairBanner.variants.tabs.pro.image")}
                            />
                            <h4>
                              {t("squairBanner.variants.tabs.standard.title")}{" "}
                              <span className="pro">{t("squairBanner.variants.tabs.pro.variant")}</span>
                            </h4>
                          </div>
                          <ul>
                            <li>
                              <a href="#request_a_quote">{t("squairBanner.variants.common.getQuote")}</a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png" alt="" />{" "}
                                {t("squairBanner.variants.common.brochure")}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-8 squair-parameter-bg">
                        <div className="squair-parameters">
                          <p className="parameter-para">{t("squairBanner.variants.tabs.pro.description")}</p>

                          <h4>{t("squairBanner.variants.common.parameters")}</h4>
                          <ul className="parameter-list">
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/AQI-parameter.png"
                                  alt="AQI parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.aqi")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/PM1-para.png"
                                  alt="PM1 para"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.pm1")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/PM2.5-parameter.png"
                                  alt="PM2.5 parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.pm25")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/PM10-parameter.png"
                                  alt="PM10 parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.pm10")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/parmeter-CO2.png"
                                  alt="CO2 parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.co2")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/HCHO-parameter.png"
                                  alt="HCHO parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.hcho")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/TVOC-parameter.png"
                                  alt="TVOC parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.tvoc")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/PARTICLE-COUNT-0.5-parameter.png"
                                  alt="PARTICLE COUNT (0.5) parameter"
                                />
                                <span className="parameter-data">
                                  {t("squairBanner.variants.parameters.particlesCount")}
                                </span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/parmeter-CO.png"
                                  alt="CO parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.co")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/parmeterNO2.png"
                                  alt="SO2 parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.so2")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/parmeter-SO2.png"
                                  alt="NO2"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.no2")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/SO2-2-parameter.png"
                                  alt="SO2-2 parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.h2s")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/NH3-parameter.png"
                                  alt="NH3 parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.nh3")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/parmeter-O3.png"
                                  alt="O3 parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.o3")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/Lightv-parameter.png"
                                  alt="Lightv parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.light")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/Noise-parameter.png"
                                  alt="Noise parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.noise")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/Humidity-parameter.png"
                                  alt="Humidity parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.humidity")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/TEMPERATURE-parameter.png"
                                  alt="TEMPERATURE parameter"
                                />
                                <span className="parameter-data">
                                  {t("squairBanner.variants.parameters.temperature")}
                                </span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/O2-parameter.png"
                                  alt="O2 parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.o2")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/Pressure-parameter.png"
                                  alt="Pressure parameter"
                                />
                                <span className="parameter-data">{t("squairBanner.variants.parameters.pressure")}</span>
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/CH4-parameter.png"
                                  alt="CH4 parameter"
                                />
                                <span className="parameter-data">
                                  {t("squairBanner.variants.parameters.ch4")}{" "}
                                  <span className="op">{t("squairBanner.variants.common.optional")}</span>
                                </span>
                              </span>
                            </li>
                          </ul>
                          <h4>{t("squairBanner.variants.common.connectivity")}</h4>
                          <ul className="connect-list">
                            <li>
                              <span className="para-flex">
                                <img
                                  src="https://www.pranaair.com/wp-content/uploads/2024/01/wifi-connect.png"
                                  alt="wifi-connect"
                                />
                                {t("squairBanner.variants.connectivity.wifi")}
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/01/Lora.png" alt="Lora" />
                                {t("squairBanner.variants.connectivity.lora")}
                              </span>
                            </li>
                            <li>
                              <span className="para-flex">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/01/RS485.png" alt="RS485" />
                                {t("squairBanner.variants.connectivity.rs485")}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <p style={{ textAlign: "center" }}>
              <strong>
                <span style={{ fontSize: "18pt" }}>{t("squairQrCode.manual.scanText")}</span>
                <img
                  className="aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/04/prana-air-squair-air-monitor-manual-qr-code.png"
                  alt={t("squairQrCode.manual.altText")}
                  width="200"
                  height="200"
                />
                <span style={{ fontSize: "14pt" }}>{t("squairQrCode.manual.downloadText")}</span>
              </strong>
            </p>
          </div>
          <div className="col-md-3">
            <p style={{ textAlign: "center" }}>
              <strong>
                <span style={{ fontSize: "18pt" }}>{t("squairQrCode.brochure.scanText")}</span>
                <img
                  className="aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/04/prana-air-squair-air-monitor-brochure-qr-code.png"
                  alt={t("squairQrCode.brochure.altText")}
                  width="200"
                  height="200"
                />
                <span style={{ fontSize: "14pt" }}>{t("squairQrCode.brochure.downloadText")}</span>
              </strong>
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

      {/* Use Cases Image */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/use-of-squair-air-quality-monitor.jpeg"
              alt="use of Prana Air SQUAIR air quality monitor"
              width="100%"
              className="displaynone550"
            />
          </div>
        </div>
      </div>

      {/* Indoor Air Quality Monitoring */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "17pt" }}>{t("indoorAirQualityMonitoring.title")}</span>
            </h3>
            <p style={{ textAlign: "center", color: "#adadad", padding: "0 5%" }}>
              <span style={{ fontSize: "13pt" }}>{t("indoorAirQualityMonitoring.paragraph1")}</span>
            </p>
            <p style={{ textAlign: "center", color: "#adadad", padding: "0 5%" }}>
              <span style={{ fontSize: "13pt" }}>{t("indoorAirQualityMonitoring.paragraph2")}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Monitor Connectivity Process */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: "center" }}>{t("monitorConnectivityProcess.title")}</h3>
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/12/squair-air-quality-monitor-connectivity-process.jpg"
              alt={t("monitorConnectivityProcess.altText")}
              width="100%"
              className="displaynone550"
            />
          </div>
        </div>
      </div>

      {/* Comparison Chart */}
      <div className="container" id="comparison-chart">
        <div className="row">
          <div className="col-md-12">
            <h4 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16pt" }}>{t("comparisonChart.title.line1")}</span>
              <br />
              <span style={{ fontSize: "16pt" }}>{t("comparisonChart.title.line2")}</span>
            </h4>
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/04/BAM-VS-PRANA-AIR-PM2-squair.png"
              alt={t("comparisonChart.altText")}
              width="100%"
            />
          </div>
        </div>
      </div>

      {/* See the Invisible Air Pollutants */}
      <div className="container-fluid squair-polluted-after-before" id="squair-polluted-after-before">
        <div className="row">
          <div className="col-md-12">
            <h4 style={{ textAlign: "center" }}>
              <strong>
                <span style={{ fontSize: "16pt" }}>{t("invisiblePollutants.title")}</span>
              </strong>
            </h4>
            <PollutantsToggle />
          </div>
        </div>
      </div>

      {/* Mobile App Section */}
      <div className="container-fluid squairMonitorMobilebanner">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/squair-monitor-connects-to-AQI-mobile-app.png"
              alt={t("mobileApp.altTexts.mobileApp")}
              className="squairMonitorMobile"
            />
          </div>
          <div className="col-md-6 squairMonitorMobilebanner-content">
            <h3 style={{ textAlign: "right", color: "#fff" }}>{t("mobileApp.title")}</h3>
            <p style={{ textAlign: "right", color: "#adadad" }}>{t("mobileApp.description")}</p>
            <p className="appICONS" style={{ textAlign: "right" }}>
              <a href="https://play.google.com/store/apps/details?id=com.aqi.data&hl=en">
                <img
                  className="brdr"
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/squair-monitor-connects-to-AQI-mobile-app.png"
                  alt={t("mobileApp.altTexts.googlePlayStore")}
                />
              </a>
              <a href="https://apps.apple.com/in/app/air-quality-index-aqi-india/id1439684571">
                <img
                  className="brdr"
                  src="https://www.pranaair.com/wp-content/uploads/2021/04/squair-apple-store.png"
                  alt={t("mobileApp.altTexts.appStore")}
                />
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Web Dashboard Section */}
      <div className="container webDashboardSquareSection">
        <div className="row">
          <div className="col-md-6 lptopSection">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/web-dashboard.jpeg"
              alt={t("webDashboard.altTexts.dashboard")}
            />
          </div>
          <div className="col-md-6 SquairContentSectionLaptrop">
            <h3 style={{ textAlign: "left" }}>{t("webDashboard.realTimeData.title")}</h3>
            <p style={{ textAlign: "left", color: "#adadad" }}>{t("webDashboard.realTimeData.description")}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 lptopSection">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/web-dashboard.jpeg"
              alt={t("webDashboard.altTexts.dashboard")}
            />
          </div>
          <div className="col-md-6 SquairContentSectionLaptrop">
            <h3 style={{ textAlign: "left" }}>{t("webDashboard.reliableDashboard.title")}</h3>
            <p style={{ textAlign: "left", color: "#adadad" }}>{t("webDashboard.reliableDashboard.description")}</p>
          </div>
        </div>
      </div>

      {/* TV App Section */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <a href="https://www.aqi.tv">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/AQI-TV-App-for-prana-air-squair-monitor.jpeg"
                alt="AQI TV App for prana air squair monitor"
                width="100%"
                className="dsplyOfff768"
              />
            </a>
          </div>
        </div>
      </div>

      {/* QR Code Scan */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: "center", fontSize: "30px" }}>{t("qrCodeHeading.title")}</h3>
            <img
              className="alignnone size-full"
              src="https://www.pranaair.com/wp-content/uploads/2021/06/air-quality-dat-by-qr-code-scan.gif"
              alt="air quality data by qr code scan"
              width="1280"
              height="720"
            />
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="request_a_quote">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-heading">
                <h2>{t("contactHeading.title")}</h2>
                <p>{t("contactHeading.description")}</p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm pageName="Squair Air Monitor Page" />
      </div>

      {/* FAQ Section - Using Bootstrap Accordion */}
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="faq-heading">
                <h2>{t("faqSection.heading")}</h2>
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
                      {t("faqSection.questions.q1")}
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">{t("faqSection.answers.a1")}</div>
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
                      {t("faqSection.questions.q2")}
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">{t("faqSection.answers.a2")}</div>
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
                      {t("faqSection.questions.q3")}
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">{t("faqSection.answers.a3")}</div>
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
                      {t("faqSection.questions.q4")}
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">{t("faqSection.answers.a4")}</div>
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
                      {t("faqSection.questions.q5")}
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">{t("faqSection.answers.a5")}</div>
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
                    >
                      {t("faqSection.questions.q6")}
                    </button>
                  </h2>
                  <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">{t("faqSection.answers.a6")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <div className="container product_compare_section">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: "center" }}>
              <span className="nova-light" style={{ fontSize: "20pt" }}>
                <strong className="nova-bold">{t("relatedProducts.title.part1")}</strong>
              </span>
            </h3>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "18pt" }}>{t("relatedProducts.title.part2")}</span>
              <sup>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("relatedProducts.altTexts.logo")}
                  width="32"
                  height="24"
                />
              </sup>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="product_compare_box">
            <Link href={`${domain}/air-quality-monitor/handheld/pocket-monitor`}>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/pocket-monitor-in-outdoor.jpeg"
                alt={t("relatedProducts.products.pocket.alt")}
              />
              <h3>{t("relatedProducts.products.pocket.name")}</h3>
            </Link>

          </div>
          <div className="product_compare_box">
            <Link href={`${domain}/air-quality-monitor/cair-monitor`}>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-cair-monitor-indoor.jpeg"
                alt={t("relatedProducts.products.cair.alt")}
              />
              <h3>{t("relatedProducts.products.cair.name")}</h3>
            </Link>

          </div>
          <div className="product_compare_box">
            <Link href={`${domain}/air-quality-monitor/sensible-air-monitor`}>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-monitor-on-table.jpg"
                alt={t("relatedProducts.products.sensible.alt")}
              />
              <h3>{t("relatedProducts.products.sensible.name")}</h3>
            </Link>

          </div>
          <div className="product_compare_box">
            <Link href={`${domain}/air-quality-monitor/sensible-plus-air-monitor`}>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/Sensible-air-monitor-on-table.jpg"
                alt={t("relatedProducts.products.sensiblePlus.alt")}
              />
              <h3>{t("relatedProducts.products.sensiblePlus.name")}</h3>
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}
