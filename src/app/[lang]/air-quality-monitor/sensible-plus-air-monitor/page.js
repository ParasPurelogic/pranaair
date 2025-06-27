import SensiblePluseSlider from "@/Components/Pages/SensiblePluse/carousel"
import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain } from "@/config"
// ✅ SEO Metadata
export async function generateMetadata() {
  const { t } = await getServerTranslation("sensiblepluse-monitor");
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
export default async function SensiblePlusAirMonitor() {
  const { t } = await getServerTranslation("sensiblepluse-monitor")
  return (
    <div>
      {/* Banner Section */}
      <div className="banner_section sensibel_banner_new">
        <div className="container">
          <div className="row">
            <div className="col-md-6 bannet_title_box sensible_banner sensible_plus_banner">
              <div className="sensibleplusbanner">
                <h2>
                  <span className="heading-bg">{t("sensibleBanner.title.highlight")}</span>{" "}
                  {t("sensibleBanner.title.main")}
                </h2>
                <p>{t("sensibleBanner.description")}</p>
                <div className="banner-btns">
                  <form
                    className="cart"
                    action="https://www.pranaair.com/product/sensible-plus-air-monitor/"
                    encType="multipart/form-data"
                    method="post"
                  >
                    <button
                      className="single_add_to_cart_button button alt btnbuynow"
                      name="add-to-cart"
                      type="submit"
                      value="15945"
                    >
                      {t("sensibleBanner.buyButton")}{" "}
                      <img
                        decoding="async"
                        src="https://www.pranaair.com/wp-content/uploads/2024/11/butnow-btn.png"
                        alt={t("sensibleBanner.altTexts.buyButtonIcon")}
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 bannet_title_box sensible_banner hideatmobile"></div>
          </div>
        </div>
      </div>

      {/* Specification Box */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="specification_box monitor_box text-center">
              <h1 className="specification_heading">
                {t("specificationBox.title")}
                <sup>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt={t("specificationBox.altTexts.logo")}
                  />
                </sup>
              </h1>
              <h3 className="aqi_heading">{t("specificationBox.description")}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Tab AQI Section - Using Bootstrap Tabs */}
      <div className="tab_aqi_section aqi_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="tabs-container">
                {/* Bootstrap Nav Tabs */}
                <ul className="nav nav-tabs" id="basicAdvancedTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="basic-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#basic-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="basic-tab-pane"
                      aria-selected="true"
                    >
                      {t("tabAqiSection.tabs.basic")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="advanced-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#advanced-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="advanced-tab-pane"
                      aria-selected="false"
                    >
                      {t("tabAqiSection.tabs.advanced")}
                    </button>
                  </li>
                </ul>

                {/* Bootstrap Tab Content */}
                <div className="tab-content" id="basicAdvancedTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="basic-tab-pane"
                    role="tabpanel"
                    aria-labelledby="basic-tab"
                    tabIndex={0}
                  >
                    <section className="aqi_icon_section">
                      <div className="aqi_box">
                        <ul>
                          <li>
                            <h3>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2021/03/Pm10.png"
                                alt={t("tabAqiSection.altTexts.pm10")}
                              />
                            </h3>
                            <code>{t("tabAqiSection.parameters.pm10")}</code>
                          </li>
                          <li>
                            <h3>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2021/03/pm2.5.png"
                                alt={t("tabAqiSection.altTexts.pm25")}
                              />
                            </h3>
                            <code>{t("tabAqiSection.parameters.pm25")}</code>
                          </li>
                          <li>
                            <h3>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2021/03/co2.png"
                                alt={t("tabAqiSection.altTexts.co2")}
                              />
                            </h3>
                            <code>{t("tabAqiSection.parameters.co2")}</code>
                          </li>
                          <li className="icon_fix_size">
                            <h3>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2021/03/tvoc.png"
                                alt={t("tabAqiSection.altTexts.tvoc")}
                              />
                            </h3>
                            <code>{t("tabAqiSection.parameters.tvoc")}</code>
                          </li>
                          <li>
                            <h3>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2021/03/hcho.png"
                                alt={t("tabAqiSection.altTexts.hcho")}
                              />
                            </h3>
                            <code>{t("tabAqiSection.parameters.hcho")}</code>
                          </li>
                          <li>
                            <h3>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2021/03/temperature-icon.png"
                                alt={t("tabAqiSection.altTexts.temperature")}
                              />
                            </h3>
                            <code>{t("tabAqiSection.parameters.temperature")}</code>
                          </li>
                          <li className="icon_fix_size">
                            <h3>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2021/03/humidity-icon.png"
                                alt={t("tabAqiSection.altTexts.humidity")}
                              />
                            </h3>
                            <code>{t("tabAqiSection.parameters.humidity")}</code>
                          </li>
                        </ul>
                      </div>
                      <div className="pranaair_img_box">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-plus-air-quality-monitor-1.jpg"
                          alt={t("tabAqiSection.altTexts.basicMonitor")}
                        />
                      </div>
                    </section>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="advanced-tab-pane"
                    role="tabpanel"
                    aria-labelledby="advanced-tab"
                    tabIndex={0}
                  >
                    <section className="aqi_icon_section">
                      <div className="aqi_box">
                        <ul>
                          <li>
                            <h3>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2021/03/Pm10.png"
                                alt={t("tabAqiSection.altTexts.pm10")}
                              />
                            </h3>
                            <code>{t("tabAqiSection.parameters.pm10")}</code>
                          </li>
                          <li>
                            <h3>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2021/03/pm2.5.png"
                                alt={t("tabAqiSection.altTexts.pm25")}
                              />
                            </h3>
                            <code>{t("tabAqiSection.parameters.pm25")}</code>
                          </li>
                          <li>
                            <h3>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2021/03/co.png"
                                alt={t("tabAqiSection.altTexts.co")}
                              />
                            </h3>
                            <code>{t("tabAqiSection.parameters.co")}</code>
                          </li>
                          <li>
                            <h3>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2021/03/co2.png"
                                alt={t("tabAqiSection.altTexts.co2")}
                              />
                            </h3>
                            <code>{t("tabAqiSection.parameters.co2")}</code>
                          </li>
                          <li>
                            <h3>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2021/03/No2.png"
                                alt={t("tabAqiSection.altTexts.no2")}
                              />
                            </h3>
                            <code>{t("tabAqiSection.parameters.no2")}</code>
                          </li>
                          <li>
                            <h3>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2021/03/so2.png"
                                alt={t("tabAqiSection.altTexts.so2")}
                              />
                            </h3>
                            <code>{t("tabAqiSection.parameters.so2")}</code>
                          </li>
                          <li>
                            <h3>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2021/03/tvoc.png"
                                alt={t("tabAqiSection.altTexts.tvoc")}
                              />
                            </h3>
                            <code>{t("tabAqiSection.parameters.tvoc")}</code>
                          </li>
                          <li className="icon_fix_size">
                            <h3>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2021/03/temperature-icon.png"
                                alt={t("tabAqiSection.altTexts.temperature")}
                              />
                            </h3>
                            <code>{t("tabAqiSection.parameters.temperature")}</code>
                          </li>
                          <li className="icon_fix_size">
                            <h3>
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2021/03/humidity-icon.png"
                                alt={t("tabAqiSection.altTexts.humidity")}
                              />
                            </h3>
                            <code>{t("tabAqiSection.parameters.humidity")}</code>
                          </li>
                        </ul>
                      </div>
                      <div className="pranaair_img_box">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-plus-air-quality-monitor-1.jpg"
                          alt={t("tabAqiSection.altTexts.advancedMonitor")}
                        />
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AQI Tab Section - Using Bootstrap Tabs */}
      <div className="tab_aqi_section aqi_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="tabs-container">
                {/* Bootstrap Nav Tabs for AQI */}
                <ul className="nav nav-tabs" id="aqiTab" role="tablist">
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
                      {t("aqiTabSection.tabs.aqi")}
                    </button>
                  </li>
                </ul>

                {/* Bootstrap Tab Content for AQI */}
                <div className="tab-content" id="aqiTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="aqi-tab-pane"
                    role="tabpanel"
                    aria-labelledby="aqi-tab"
                    tabIndex={0}
                  >
                    {/* AQI content here if needed */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monitor Section */}
      <div className="moniator_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="sensor_feature_list sensible_feature_list">
                <ul>
                  <li className="top_sensibel_space">
                    <small>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/real-time-air-quality.png"
                        alt={t("monitorSection.altTexts.realTimeAirQuality")}
                      />
                    </small>
                    {t("monitorSection.features.realTimeData")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="sensor_feature_list sensible_feature_list">
                <ul>
                  <li className="top_sensibel_space">
                    <small>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/wifi-connectivity.png"
                        alt={t("monitorSection.altTexts.wifiConnectivity")}
                      />
                    </small>
                    {t("monitorSection.features.easyAccess")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monitor Section New */}
      <div className="moniator_sec monitor_sec_new">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="sensor_feature_list sensible_feature_list">
                <ul>
                  <li>
                    <small>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/monitor-battery.png"
                        alt={t("monitorSectionNew.altTexts.battery")}
                      />
                    </small>
                    {t("monitorSectionNew.features.battery")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sensor_feature_list sensible_feature_list">
                <ul>
                  <li>
                    <small>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/on-board.png"
                        alt={t("monitorSectionNew.altTexts.sdCard")}
                      />
                    </small>
                    {t("monitorSectionNew.features.sdCard")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sensor_feature_list sensible_feature_list">
                <ul>
                  <li>
                    <small>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/touch-screen.png"
                        alt={t("monitorSectionNew.altTexts.touchScreen")}
                      />
                    </small>
                    {t("monitorSectionNew.features.touchScreen")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sensor_feature_list sensible_feature_list">
                <ul>
                  <li>
                    <small>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/typec-usb.png"
                        alt={t("monitorSectionNew.altTexts.usbCharging")}
                      />
                    </small>
                    {t("monitorSectionNew.features.usbCharging")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Section */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p style={{ textAlign: "center" }}>
              <em>
                <span style={{ fontSize: "16pt" }}>
                  <sup>
                    <span style={{ fontSize: "16pt" }}>
                      <sub>
                        <img
                          className="alignnone size-full wp-image-52304"
                          src="https://www.pranaair.com/wp-content/uploads/2022/07/compliance-icon.png"
                          alt={t("complianceSection.altTexts.complianceIcon")}
                          width="30"
                          height="30"
                        />
                      </sub>{" "}
                      {t("complianceSection.text.complianceWith")}{" "}
                      <span style={{ color: "#4cae51" }}>
                        <strong>{t("complianceSection.text.leedWell")}</strong>
                      </span>{" "}
                      {t("complianceSection.text.and")}{" "}
                      <span style={{ color: "#4cae51" }}>
                        <strong>{t("complianceSection.text.ashrae")}</strong>
                      </span>{" "}
                      {t("complianceSection.text.standards")}
                    </span>
                  </sup>
                </span>
              </em>
            </p>
          </div>
        </div>
      </div>

      {/* Accuracy Section */}
      <div className="top_space_air">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="specification_box monitor_box text-center">
                <h2 className="specification_heading">
                  {t("accuracySection.title")}
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt={t("accuracySection.altTexts.logo")}
                  />
                </h2>
              </div>
              <div className="comparison_graph_img">
                <img
                  className="aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-pm2.5-data-comparison-with-dusttrak.jpeg"
                  alt={t("accuracySection.altTexts.comparisonGraph")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to connect section */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-plus-air-quality-monitor-1.jpg"
              alt={t("howToConnect.altTexts.sensibleMonitor")}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <div className="step-dots">
              <h2 className="specification_heading">{t("howToConnect.title")}</h2>
              {t("howToConnect.steps", { returnObjects: true }).map((step, index) => (
                <button key={index}>
                  <div>
                    <h5>{index + 1}</h5>
                    <p>{step}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                <strong>
                  <span style={{ fontSize: "18pt" }}>{t("qrCodeSection.manual.scanText")}</span>
                  <br />
                  <img
                    className="size-full wp-image-24466 aligncenter"
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/sensible-plus-monitor-manual.png"
                    alt={t("qrCodeSection.manual.altText")}
                    width="200"
                    height="200"
                  />
                </strong>
              </span>
              <br />
              <span style={{ fontSize: "14pt" }}>
                {" "}
                <strong>{t("qrCodeSection.manual.downloadText")}</strong>
              </span>
            </p>
          </div>
          <div className="col-md-6">
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "18pt" }}>
                <strong>{t("qrCodeSection.brochure.scanText")}</strong>
              </span>
              <br />
              <strong>
                <img
                  className="aligncenter wp-image-24465 size-full"
                  src="https://www.pranaair.com/wp-content/uploads/2022/04/prana-air-sensible-plus-air-monitor-brochure-qr-code.png"
                  alt={t("qrCodeSection.brochure.altText")}
                  width="200"
                  height="200"
                />
              </strong>
              <br />
              <span style={{ fontSize: "14pt" }}>
                <strong>{t("qrCodeSection.brochure.downloadText")}</strong>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* AQI App & Dashboard */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="qualitymonitor_heading_box text-center">
              <h2>
                {t("aqiAppDashboard.title")}{" "}
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("aqiAppDashboard.altTexts.logo")}
                />
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Download App Section */}
      <div className="download_app_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="downloadapp_deail_box hidemobile">
                <h3>{t("aqiAppDashboard.downloadSection.heading")}</h3>
                <p>{t("aqiAppDashboard.downloadSection.description")}</p>
                <a
                  className="download_app_btn"
                  href="https://apps.apple.com/in/app/air-quality-index-aqi-india/id1439684571"
                >
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/app-store.png"
                    alt={t("aqiAppDashboard.altTexts.appStore")}
                  />
                </a>
                <a className="download_app_btn" href="https://play.google.com/store/apps/details?id=com.aqi.data&hl=en">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/play-store.png"
                    alt={t("aqiAppDashboard.altTexts.playStore")}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TV App Section */}
      <div className="tv_app_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="qualitymonitor_heading_box italic_para tv_app_box">
                <h2>
                  {t("tvAppSection.title")}
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt={t("tvAppSection.logoAlt")}
                  />
                </h2>
                <p>{t("tvAppSection.description")}</p>
                <a className="tv_app_btn" href={t("tvAppSection.downloadLink")}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/03/tv-app.png"
                    alt={t("tvAppSection.downloadBtnAlt")}
                  />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="https://www.pranaair.com/wp-content/uploads/2023/07/air-quality-data-on-aqi-tv-app.png"
                alt={t("tvAppSection.appImageAlt")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Slide Section */}
      <div className="dashboard_slide_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="qualitymonitor_heading_box web_heading text-center">
                <h2 style={{ textAlign: "center" }}>
                  {t("aqiWebDashboard.title")}
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt={t("aqiWebDashboard.logoAlt")}
                  />
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <SensiblePluseSlider />
            </div>
          </div>
        </div>
      </div>

      {/* Quality Feature Section */}
      <div className="quality_feature_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <ul className="feature_quality_cntr">
                <li>
                  <div className="feature_sensor_box">
                    <small>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/historical-data.png"
                        alt={t("aqiWebDashboard.features.historicalData.altText")}
                      />
                    </small>
                    <div className="features_detail_box">
                      <h3>{t("aqiWebDashboard.features.historicalData.title")}</h3>
                      <p>{t("aqiWebDashboard.features.historicalData.description")}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="feature_sensor_box">
                    <small>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/Health-Recommendations.png"
                        alt={t("aqiWebDashboard.features.healthRecommendations.altText")}
                      />
                    </small>
                    <div className="features_detail_box">
                      <h3>{t("aqiWebDashboard.features.healthRecommendations.title")}</h3>
                      <p>{t("aqiWebDashboard.features.healthRecommendations.description")}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="feature_sensor_box height_fix_sensor">
                    <small>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/Scan-the-QR.png"
                        alt={t("aqiWebDashboard.features.scanQR.altText")}
                      />
                    </small>
                    <div className="features_detail_box">
                      <h3 className="smart_height_fix">{t("aqiWebDashboard.features.scanQR.title")}</h3>
                      <p>{t("aqiWebDashboard.features.scanQR.description")}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="feature_sensor_box height_fix_sensor">
                    <small>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/Comprehensive-Air-Quality-Data.png"
                        alt={t("aqiWebDashboard.features.comprehensiveData.altText")}
                      />
                    </small>
                    <div className="features_detail_box">
                      <h3>{t("aqiWebDashboard.features.comprehensiveData.title")}</h3>
                      <p>{t("aqiWebDashboard.features.comprehensiveData.description")}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="feature_sensor_box height_fix_sensor2">
                    <small>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/Reliable-Dashboard.png"
                        alt={t("aqiWebDashboard.features.reliableDashboard.altText")}
                      />
                    </small>
                    <div className="features_detail_box">
                      <h3>{t("aqiWebDashboard.features.reliableDashboard.title")}</h3>
                      <p>{t("aqiWebDashboard.features.reliableDashboard.description")}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="feature_sensor_box height_fix_sensor2">
                    <small>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/Export-Data.png"
                        alt={t("aqiWebDashboard.features.exportData.altText")}
                      />
                    </small>
                    <div className="features_detail_box">
                      <h3>{t("aqiWebDashboard.features.exportData.title")}</h3>
                      <p>{t("aqiWebDashboard.features.exportData.description")}</p>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="feature_quality_cntr feature_width_auto">
                <li>
                  <div className="feature_sensor_box">
                    <small>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/Convergence-of-Multiple-Devices.png"
                        alt={t("aqiWebDashboard.features.multipleDevices.altText")}
                      />
                    </small>
                    <div className="features_detail_box">
                      <h3>{t("aqiWebDashboard.features.multipleDevices.title")}</h3>
                      <p>{t("aqiWebDashboard.features.multipleDevices.description")}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="feature_sensor_box">
                    <small>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/Graphical-Representation.png"
                        alt={t("aqiWebDashboard.features.graphicalRepresentation.altText")}
                      />
                    </small>
                    <div className="features_detail_box">
                      <h3>{t("aqiWebDashboard.features.graphicalRepresentation.title")}</h3>
                      <p>{t("aqiWebDashboard.features.graphicalRepresentation.description")}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Check Your Air Pollution Data */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center" style={{ fontSize: "28px" }}>
              {t("aqiWebDashboard.qrCodeSection.title")}
            </h3>
            <p style={{ textAlign: "center" }}>
              <img
                className="img-fluid"
                src="https://www.pranaair.com/wp-content/uploads/2021/06/check-air-pollution-by-qr-code-scan.gif"
                alt={t("aqiWebDashboard.qrCodeSection.altText")}
              />
            </p>
          </div>
        </div>
      </div>

      {/* Technical Specification */}
      <div className="padd-top-bot product-specifications table_sensible_cntr">
        <div className="container">
          <div className="row">
            <div className="col-12 product-slider-sec product-slider-first">
              <h2 className="specification_heading specific_head">
                {t("technicalSpecificationSection.title")}{" "}
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("technicalSpecificationSection.altTexts.logo")}
                />
              </h2>
              <div className="table_box">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th style={{ width: "195px", textAlign: "center" }}>
                        {t("technicalSpecificationSection.table.headers.parameterName")}
                      </th>
                      <th style={{ width: "216px", textAlign: "center" }}>
                        {t("technicalSpecificationSection.table.headers.index")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{t("technicalSpecificationSection.table.rows.operatingTemperature.name")}</td>
                      <td>{t("technicalSpecificationSection.table.rows.operatingTemperature.value")}</td>
                    </tr>
                    <tr>
                      <td>{t("technicalSpecificationSection.table.rows.storageTemperature.name")}</td>
                      <td>{t("technicalSpecificationSection.table.rows.storageTemperature.value")}</td>
                    </tr>
                    <tr>
                      <td>{t("technicalSpecificationSection.table.rows.dimension.name")}</td>
                      <td>{t("technicalSpecificationSection.table.rows.dimension.value")}</td>
                    </tr>
                    <tr>
                      <td>{t("technicalSpecificationSection.table.rows.weight.name")}</td>
                      <td>{t("technicalSpecificationSection.table.rows.weight.value")}</td>
                    </tr>
                    <tr>
                      <td>{t("technicalSpecificationSection.table.rows.powerSupply.name")}</td>
                      <td>{t("technicalSpecificationSection.table.rows.powerSupply.value")}</td>
                    </tr>
                    <tr>
                      <td>{t("technicalSpecificationSection.table.rows.display.name")}</td>
                      <td>{t("technicalSpecificationSection.table.rows.display.value")}</td>
                    </tr>
                    <tr>
                      <td>{t("technicalSpecificationSection.table.rows.connectivity.name")}</td>
                      <td>{t("technicalSpecificationSection.table.rows.connectivity.value")}</td>
                    </tr>
                    <tr>
                      <td>{t("technicalSpecificationSection.table.rows.storage.name")}</td>
                      <td>{t("technicalSpecificationSection.table.rows.storage.value")}</td>
                    </tr>
                    <tr>
                      <td>{t("technicalSpecificationSection.table.rows.mobileApp.name")}</td>
                      <td>{t("technicalSpecificationSection.table.rows.mobileApp.value")}</td>
                    </tr>
                    <tr>
                      <td>{t("technicalSpecificationSection.table.rows.battery.name")}</td>
                      <td>{t("technicalSpecificationSection.table.rows.battery.value")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="sensible_popup broucher_download_cntr text-center">
                <span style={{ fontSize: "12pt" }}>
                  <a href="/wp-content/uploads/2022/04/prana-air-sensible-plus-air-quality-monitor-brochure.pdf">
                    {t("technicalSpecificationSection.downloads.brochure")}
                  </a>
                  <a href="/wp-content/uploads/2022/09/Prana-air-sensible-plus-monitor-manual.pdf">
                    {t("technicalSpecificationSection.downloads.manual")}
                  </a>
                  <a className="btn btn-primary btnbuynow" href="#form">
                    {t("technicalSpecificationSection.downloads.requestQuote")}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Applications */}
      <div className="discreet_section sensible_discreet solution_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="discreet_box text-center">
                <h2 className="specification_heading green_heading">
                  {t("solutionApplications.title")}{" "}
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt={t("solutionApplications.altTexts.logo")}
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Direction */}
      <div className="product_direction product_direction_bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sensible_cntr_point">
                <div className="row">
                  <div className="col-md-3">
                    <div className="sensible_point_box">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/PM2.jpg"
                        alt={t("productDirection.altTexts.office")}
                      />
                      <code>{t("productDirection.locations.office")}</code>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="sensible_point_box">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/Hotel.jpg"
                        alt={t("productDirection.altTexts.hotel")}
                      />
                      <code>{t("productDirection.locations.hotel")}</code>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="sensible_point_box">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/hospital.jpg"
                        alt={t("productDirection.altTexts.hospital")}
                      />
                      <code>{t("productDirection.locations.hospital")}</code>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="sensible_point_box">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/Factory.jpg"
                        alt={t("productDirection.altTexts.factory")}
                      />
                      <code>{t("productDirection.locations.factory")}</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq_section sensible_new_faq">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="specification_box monitor_box text-center">
                <h2 className="specification_heading">
                  FAQs
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Section - Using Bootstrap Accordion */}
      <div className="accordian_section accordian_section2 sinitizer_faq_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      {t("faqAccordion.questions.q1")}
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p style={{ textAlign: "justify" }}>
                        {t("faqAccordion.answers.a1")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      {t("faqAccordion.questions.q2")}
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p style={{ textAlign: "justify" }}>
                        {t("faqAccordion.answers.a2")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      {t("faqAccordion.questions.q3")}
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p style={{ textAlign: "justify" }}>
                        {t("faqAccordion.answers.a3")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      {t("faqAccordion.questions.q4")}
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      {t("faqAccordion.answers.a4")}
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      {t("faqAccordion.questions.q5")}
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p style={{ textAlign: "justify" }}>
                        {t("faqAccordion.answers.a5")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      {t("faqAccordion.questions.q6")}
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      {t("faqAccordion.answers.a6")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
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
      <ContactForm pageName="Sensible Plus Air Monitor Page" />

      {/* Product Compare Section */}
      <div className="product_compare_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 style={{ textAlign: "center" }}>
                <span className="nova-light" style={{ fontSize: "20pt" }}>
                  <strong className="nova-bold">{t("productCompare.title.part1")}</strong>
                </span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "18pt" }}>{t("productCompare.title.part2")}</span>
                <sup>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt={t("productCompare.altTexts.logo")}
                    width="32"
                    height="24"
                  />
                </sup>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product_compare_container">
                <div className="product_compare_box">
                  <Link href={`${domain}/air-quality-monitor/cair-monitor`}>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-cair-monitor-indoor.jpeg"
                      alt={t("productCompare.products.cair.alt")}
                    />
                    <h3>{t("productCompare.products.cair.name")}</h3>
                  </Link>

                </div>
                <div className="product_compare_box">
                  <Link href={`${domain}/air-quality-monitor/sensible-plus-air-monitor`}>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-monitor-on-table.jpg"
                      alt={t("productCompare.products.sensible.alt")}
                    />
                    <h3>{t("productCompare.products.sensible.name")}</h3>
                  </Link>

                </div>
                <div className="product_compare_box">
                  <Link href={`${domain}/air-quality-monitor/squair-air-monitor`}>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-squair-air-quality-monitor.jpg"
                      alt={t("productCompare.products.squair.alt")}
                    />
                    <h3>{t("productCompare.products.squair.name")}</h3>
                  </Link>

                </div>
                <div className="product_compare_box">
                  <Link href={`${domain}/air-quality-monitor/ambient-air-monitor`}>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2022/06/prana-air-caaqms-ambient-air-quality-monitor.jpg"
                      alt={t("productCompare.products.ambient.alt")}
                    />
                    <h3>{t("productCompare.products.ambient.name")}</h3>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
