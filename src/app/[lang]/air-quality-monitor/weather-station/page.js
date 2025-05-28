import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import DurabilitySlider from "@/Components/Pages/WeatherStation/durability-slider"
import VeriouseSlider from "@/Components/Pages/WeatherStation/various-app-slider"
import { getServerTranslation } from "@/i18n/server"

export default async function WeatherStation() {
  const { t } = await getServerTranslation("weather-station")
  const durabilityImages = [
    {
      id: 1,
      image: "https://www.pranaair.com/wp-content/uploads/2024/10/Weather-station-rander.webp",
      alt: t("durabilityImages.images.weatherStation.alt"),
      className: "weather-img",
    },
    {
      id: 2,
      image: "https://www.pranaair.com/wp-content/uploads/2024/10/Side-view-of-the-weather-station.webp",
      alt: t("durabilityImages.images.sideView.alt"),
      className: "",
    },
    {
      id: 3,
      image: "https://www.pranaair.com/wp-content/uploads/2024/10/Top-view-of-the-weather-station.webp",
      alt: t("durabilityImages.images.topView.alt"),
      className: "",
    },
  ]
  const variousApplications = [
    {
      id: 1,
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/Urban-Planning-and-Infrastructure.jpg",
      alt: t("variousApplications.applications.urbanPlanning.alt"),
      title: t("variousApplications.applications.urbanPlanning.title"),
      description: t("variousApplications.applications.urbanPlanning.description"),
    },
    {
      id: 2,
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/Education-and-Research.jpg",
      alt: t("variousApplications.applications.publicSafety.alt"),
      title: t("variousApplications.applications.publicSafety.title"),
      description: t("variousApplications.applications.publicSafety.description"),
    },
    {
      id: 3,
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/Sports-and-outdoor-activities.jpg",
      alt: t("variousApplications.applications.sports.alt"),
      title: t("variousApplications.applications.sports.title"),
      description: t("variousApplications.applications.sports.description"),
    },
    {
      id: 4,
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/education-and-research.webp",
      alt: t("variousApplications.applications.education.alt"),
      title: t("variousApplications.applications.education.title"),
      description: t("variousApplications.applications.education.description"),
    },
    {
      id: 5,
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/Environmental-Monitoring.jpg",
      alt: t("variousApplications.applications.environmental.alt"),
      title: t("variousApplications.applications.environmental.title"),
      description: t("variousApplications.applications.environmental.description"),
    },
  ]
  const boxItems = [
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/Weather-Station.png",
      key: "weatherStation",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/Tool-Pouch.png",
      key: "toolPouch",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/Rain-GaugeRain-Gauge.png",
      key: "rainGauge",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/Pole-1.png",
      key: "pole",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/Attachment-Belt.png",
      key: "attachmentBelt",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/Cable-Adapter.png",
      key: "cableAdapter",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/Antenna.png",
      key: "antenna",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/Wind-Vane-1.png",
      key: "windVane",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/Anemometer.png",
      key: "anemometer",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/UClamp.png",
      key: "uClamp",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/Pole-Mounting-Bracket.png",
      key: "poleMountingBracket",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/06/Air-Quality-Monitor-inside-box.png",
      key: "airQualityMonitor",
    },
  ]
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <video id="main-hero-video" autoPlay loop muted width="100%" height="100%">
                <source
                  src="https://www.pranaair.com/wp-content/uploads/2024/10/Weather-station-banner-bg-page-video.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="row hero-mob-row">
                <div className="col-md-6">
                  <div className="hero-heading">
                    <h1>{t("weatherStationHero.title")}</h1>
                    <p>{t("weatherStationHero.description")}</p>
                    <a className="hero-btn" href="#contact">
                      {t("weatherStationHero.requestButton")}{" "}
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/button-icon.png"
                        alt={t("weatherStationHero.altTexts.buttonIcon")}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ambi-monitor-img">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/10/Weather-station-mounted-on-a-pole.webp"
                      alt={t("weatherStationHero.altTexts.weatherStation")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="salinet-feture-sec">
        <div className="container">
          <div className="row br-line">
            <div className="col-md-5">
              <div className="salinet-feture-heading">
                <h2>{t('weatherStationKeyFeatures.title')}</h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="sailent-feture-para">
                <p>{t('weatherStationKeyFeatures.description')}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="salinet-feture-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/10/mounted-weather-station-in-clear-sky.webp"
                  alt={t('weatherStationKeyFeatures.altTexts.weatherStation')}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="sailent-feture-point">
                <ul>
                  <li>
                    <h3>{t('weatherStationKeyFeatures.features.integrated.title')}</h3>
                    <p>{t('weatherStationKeyFeatures.features.integrated.description')}</p>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/sailemt-feature-arrow.png"
                      alt={t('weatherStationKeyFeatures.altTexts.arrow')}
                    />
                  </li>
                </ul>
              </div>
              <div className="sailent-feture-point">
                <ul>
                  <li>
                    <h3>{t('weatherStationKeyFeatures.features.dataLogger.title')}</h3>
                    <p>{t('weatherStationKeyFeatures.features.dataLogger.description')}</p>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/sailemt-feature-arrow.png"
                      alt={t('weatherStationKeyFeatures.altTexts.arrow')}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sailent-feture-point">
                <ul>
                  <li>
                    <h3>{t('weatherStationKeyFeatures.features.connectivity.title')}</h3>
                    <p>{t('weatherStationKeyFeatures.features.connectivity.description')}</p>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/sailemt-feature-arrow.png"
                      alt={t('weatherStationKeyFeatures.altTexts.arrow')}
                    />
                  </li>
                </ul>
              </div>
              <div className="sailent-feture-point">
                <ul>
                  <li>
                    <h3>{t('weatherStationKeyFeatures.features.realTime.title')}</h3>
                    <p>{t('weatherStationKeyFeatures.features.realTime.description')}</p>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/sailemt-feature-arrow.png"
                      alt={t('weatherStationKeyFeatures.altTexts.arrow')}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parameters Section */}
      <section className="parameters-sec">
        <div className="container">
          <div className="row dark-br-line">
            <div className="col-md-5">
              <div className="salinet-feture-heading parameter-heading">
                <h2>{t('weatherStationParameters.title')}</h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="sailent-feture-para parameter-para">
                <p>{t('weatherStationParameters.description')}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row mob-flex">
                <div className="col-6">
                  <ul className="patrameter-gif">
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/Rainfall.gif"
                        alt={t('weatherStationParameters.parameters.rainfall.alt')}
                      />
                    </li>
                    <li>
                      <h3>{t('weatherStationParameters.parameters.rainfall.title')}</h3>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="patrameter-gif">
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/UV-index.gif"
                        alt={t('weatherStationParameters.parameters.uvIndex.alt')}
                      />
                    </li>
                    <li>
                      <h3>{t('weatherStationParameters.parameters.uvIndex.title')}</h3>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mob-flex">
                <div className="col-6">
                  <ul className="patrameter-gif">
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/Wind-speed.gif"
                        alt={t('weatherStationParameters.parameters.windSpeed.alt')}
                      />
                    </li>
                    <li>
                      <h3>{t('weatherStationParameters.parameters.windSpeed.title')}</h3>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="patrameter-gif">
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/Wind-direction.gif"
                        alt={t('weatherStationParameters.parameters.windDirection.alt')}
                      />
                    </li>
                    <li>
                      <h3>{t('weatherStationParameters.parameters.windDirection.title')}</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mob-flex">
                <div className="col-6">
                  <ul className="patrameter-gif">
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/Light.gif"
                        alt={t('weatherStationParameters.parameters.light.alt')}
                      />
                    </li>
                    <li>
                      <h3>{t('weatherStationParameters.parameters.light.title')}</h3>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="patrameter-gif">
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/Solar-Radiance.gif"
                        alt={t('weatherStationParameters.parameters.solarRadiance.alt')}
                      />
                    </li>
                    <li>
                      <h3>{t('weatherStationParameters.parameters.solarRadiance.title')}</h3>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mob-flex">
                <div className="col-6">
                  <ul className="patrameter-gif">
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/Humidity.gif"
                        alt={t('weatherStationParameters.parameters.humidity.alt')}
                      />
                    </li>
                    <li>
                      <h3>{t('weatherStationParameters.parameters.humidity.title')}</h3>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="patrameter-gif">
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/Temp.gif"
                        alt={t('weatherStationParameters.parameters.temperature.alt')}
                      />
                    </li>
                    <li>
                      <h3>{t('weatherStationParameters.parameters.temperature.title')}</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity Section - Using Bootstrap Tabs */}
      <section className="connectivety-sec">
        <div className="container">
          <div className="row br-line">
            <div className="col-md-5">
              <div className="salinet-feture-heading connectivety-heading">
                <h2>{t("weatherStationConnectivity.title")}</h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="sailent-feture-para connectivety-para">
                <p>{t("weatherStationConnectivity.description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="connectivety-tab-box">
                <div className="connectivety-tab-title">
                  {/* Bootstrap Nav Tabs */}
                  <ul className="connect-tab nav" id="connectivityTab" role="tablist">
                    <li className="connect-tab-item nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="wifi-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#wifi-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="wifi-tab-pane"
                        aria-selected="true"
                      >
                        {t("weatherStationConnectivity.tabs.wifi.title")} <i className="fas fa-arrow-right"></i>
                      </button>
                    </li>
                    <li className="connect-tab-item nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="gsm-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#gsm-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="gsm-tab-pane"
                        aria-selected="false"
                      >
                        {t("weatherStationConnectivity.tabs.gsm.title")} <i className="fas fa-arrow-right"></i>
                      </button>
                    </li>
                  </ul>

                  {/* Bootstrap Tab Content */}
                  <div className="tab-content" id="connectivityTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="wifi-tab-pane"
                      role="tabpanel"
                      aria-labelledby="wifi-tab"
                      tabIndex={0}
                    >
                      <ul className="connectivity-box">
                        <li>
                          <div className="img-box">
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2024/06/weather-station-connectivity.webp"
                              alt={t("weatherStationConnectivity.tabs.wifi.steps.weatherStation.alt")}
                            />
                          </div>
                          <h3>{t("weatherStationConnectivity.tabs.wifi.steps.weatherStation.title")}</h3>
                        </li>
                        <li>
                          <div className="img-box">
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2024/06/wifi-connectivity.png"
                              alt={t("weatherStationConnectivity.tabs.wifi.steps.wifiConnectivity.alt")}
                            />
                          </div>
                          <h3>{t("weatherStationConnectivity.tabs.wifi.steps.wifiConnectivity.title")}</h3>
                        </li>
                        <li>
                          <div className="img-box">
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2024/06/aqi-colud-storage.png"
                              alt={t("weatherStationConnectivity.tabs.wifi.steps.cloudStorage.alt")}
                            />
                          </div>
                          <h3>{t("weatherStationConnectivity.tabs.wifi.steps.cloudStorage.title")}</h3>
                        </li>
                        <li>
                          <div className="img-box">
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2024/06/mob-app-web-dashborad.png"
                              alt={t("weatherStationConnectivity.tabs.wifi.steps.dataAccess.alt")}
                            />
                          </div>
                          <h3>{t("weatherStationConnectivity.tabs.wifi.steps.dataAccess.title")}</h3>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="gsm-tab-pane"
                      role="tabpanel"
                      aria-labelledby="gsm-tab"
                      tabIndex={0}
                    >
                      <ul className="connectivity-box">
                        <li>
                          <div className="img-box">
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2024/06/weather-station-connectivity.webp"
                              alt={t("weatherStationConnectivity.tabs.gsm.steps.weatherStation.alt")}
                            />
                          </div>
                          <h3>{t("weatherStationConnectivity.tabs.gsm.steps.weatherStation.title")}</h3>
                        </li>
                        <li className="gsm">
                          <div className="img-box">
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2024/06/gsm-connectivity.png"
                              alt={t("weatherStationConnectivity.tabs.gsm.steps.gsmConnectivity.alt")}
                            />
                          </div>
                          <h3>{t("weatherStationConnectivity.tabs.gsm.steps.gsmConnectivity.title")}</h3>
                        </li>
                        <li>
                          <div className="img-box">
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2024/06/aqi-colud-storage.png"
                              alt={t("weatherStationConnectivity.tabs.gsm.steps.cloudStorage.alt")}
                            />
                          </div>
                          <h3>{t("weatherStationConnectivity.tabs.gsm.steps.cloudStorage.title")}</h3>
                        </li>
                        <li>
                          <div className="img-box">
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2024/06/mob-app-web-dashborad.png"
                              alt={t("weatherStationConnectivity.tabs.gsm.steps.dataAccess.alt")}
                            />
                          </div>
                          <h3>{t("weatherStationConnectivity.tabs.gsm.steps.dataAccess.title")}</h3>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Durability Section */}
      <section className="durability-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="durability-heading">
                <h2>{t("weatherStationDurability.title")}</h2>
                <p>{t("weatherStationDurability.description")}</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="durability-slider">
                <DurabilitySlider durabilityImages={durabilityImages} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Convert into air quality Section */}
      <section className="convert-into-air-quality-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="convert-into-air-quality-heading">
                <h2>
                  <strong>{t("title.part1")}</strong> {t("title.part2")}
                </h2>
              </div>
            </div>
          </div>
          <div className="row row-flex">
            <div className="col-md-6">
              <div className="weather-staition-variant">
                <h3>
                  {t("variant1.title")} <span className="weahter-st">({t("variant1.subtitle")})</span>
                </h3>
                <ul>
                  <li>{t("variant1.param1")}</li>
                  <li>{t("variant1.param2")}</li>
                  <li>{t("variant1.param3")}</li>
                  <li>{t("variant1.param4")}</li>
                  <li>{t("variant1.param5")}</li>
                  <li>{t("variant1.param6")}</li>
                  <li>{t("variant1.param7")}</li>
                  <li>{t("variant1.param8")}</li>
                </ul>
              </div>
              <div className="weather-staition-variant variant2">
                <h3>
                  {t("variant2.title")} <span className="weahter-st">({t("variant2.subtitle")})</span>
                </h3>
                <ul>
                  <li>{t("variant2.param1")}</li>
                  <li>{t("variant2.param2")}</li>
                  <li>{t("variant2.param3")}</li>
                  <li>{t("variant2.param4")}</li>
                  <li>{t("variant2.param5")}</li>
                  <li>{t("variant2.param6")}</li>
                  <li>{t("variant2.param7")}</li>
                  <li>{t("variant2.param8")}</li>
                  <li>{t("variant2.param9")}</li>
                  <li>{t("variant2.param10")}</li>
                  <li>{t("variant2.param11")}</li>
                  <li>{t("variant2.param12")}</li>
                  <li>{t("variant2.param13")}</li>
                  <li>{t("variant2.param14")}</li>
                  <li>{t("variant2.param15")}</li>
                  <li>{t("variant2.param16")}</li>
                  <li>{t("variant2.param17")}</li>
                  <li>{t("variant2.param18")}</li>
                  <li>{t("variant2.param19")}</li>
                  <li>{t("variant2.param20")}</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="covert-weather-station-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Weather-Station-variant.png"
                  alt={t("altTexts.variants")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hyper Local Networks Section */}
      <section className="hyper-local-networks-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hyper-local-networks-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/10/Hyper-Local-Networks.webp"
                  alt={t("weatherStationHyperlocal.altTexts.networkImage")}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="hyper-local-networks-para">
                <h2>{t("weatherStationHyperlocal.title")}</h2>
                <p>{t("weatherStationHyperlocal.description")}</p>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      {/* Various Applications Section */}
      <section className="various-applications-sec">
        <div className="container">
          <div className="row br-line">
            <div className="col-md-7">
              <div className="various-applications-heaidng">
                <h2>{t("variousApplications.title")}</h2>
              </div>
            </div>
            <div className="col-md-5">
              <div className="various-applications-para">
                <p>{t("variousApplications.description")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid visbel">
          <div className="row">
            <div className="col-12">
              <VeriouseSlider variousApplications={variousApplications} />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className="thunder-video-box">
                <video id="thunder-video" autoPlay loop muted width="100%" height="100%">
                  <source
                    src="https://www.pranaair.com/wp-content/uploads/2024/06/Video-for-wether-station-page.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AQI Mobile App Section */}
      <section className="aqi-mob-app-sec">
        <div className="container">
          <div className="row br-line part-line">
            <div className="col-12">
              <div className="various-applications-heaidng app-heading">
                <h2>{t("weatherStationAqiApp.heading")}</h2>
              </div>
            </div>
          </div>
          <div className="row app-bg">
            <div className="col-md-7">
              <div className="mob-app-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/aqi-moobile-app.png"
                  alt={t("weatherStationAqiApp.appImageAlt")}
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="mob-app-txt">
                <h3>{t("weatherStationAqiApp.subheading")}</h3>
                <p>{t("weatherStationAqiApp.description")}</p>
                <a className="ios" href="https://apps.apple.com/tt/app/aqi/id1439684571">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/06/apple-app-icon.png"
                    alt={t("weatherStationAqiApp.iosIconAlt")}
                  />{" "}
                  {t("weatherStationAqiApp.downloadFor")} <strong>{t("weatherStationAqiApp.ios")}</strong>
                </a>
                <a className="anndro" href="https://play.google.com/store/apps/details?id=com.aqi.data">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/06/android-app-icon.png"
                    alt={t("weatherStationAqiApp.androidIconAlt")}
                  />{" "}
                  {t("weatherStationAqiApp.downloadFor")} <strong>{t("weatherStationAqiApp.android")}</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Monitoring Section */}
      <section className="environmental-monitoring-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="environmental-monitoring-txt">
                <h2>{t("weatherStationEnvironmental.heading")}</h2>
                <h3>{t("weatherStationEnvironmental.subheading")}</h3>
                <p>{t("weatherStationEnvironmental.description")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="environmental-monitoring-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/10/weather-station-in-an-open-land.webp"
                  alt={t("weatherStationEnvironmental.imageAlt")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Dashboard Section */}
      <section className="web-dashboard-sec">
        <div className="container-fluid">
          <div className="row mob-dash-row">
            <div className="col-md-7">
              <div className="web-dash-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/web-dashboard.jpg"
                  alt={t("weatherStationWebDashboard.altTexts.dashboard")}
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="inner-mob-row">
                <div className="web-dash-row">
                  <ul>
                    <li>
                      <img
                        className="web-dash-device-img"
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/temperature-card.png"
                        alt={t("weatherStationWebDashboard.altTexts.temperatureCard")}
                      />
                    </li>
                    <li>
                      <img
                        className="web-dash-device-img"
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/uv-index-card.png"
                        alt={t("weatherStationWebDashboard.altTexts.uvIndexCard")}
                      />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        className="web-dash-device-img"
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/solar-irradiance-card.png"
                        alt={t("weatherStationWebDashboard.altTexts.solarIrradianceCard")}
                      />
                    </li>
                    <li>
                      <img
                        className="web-dash-device-img"
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/rainfall-card.png"
                        alt={t("weatherStationWebDashboard.altTexts.rainfallCard")}
                      />
                    </li>
                  </ul>
                </div>
                <div className="web-dash-txt">
                  <h3>{t("weatherStationWebDashboard.title")}</h3>
                  <h4>{t("weatherStationWebDashboard.subtitle")}</h4>
                  <p>{t("weatherStationWebDashboard.description")}</p>
                  <a href="https://www.aqi.in/userlogin" target="_blank" rel="noreferrer noopener">
                    {t("weatherStationWebDashboard.loginButton")}{" "}
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/wifi-icon.png"
                      alt={t("weatherStationWebDashboard.altTexts.wifiIcon")}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TV App Section */}
      <section className="tv-app-sec">
        <div className="container">
          <div className="row tv-br-line">
            <div className="col-md-6">
              <div className="tv-app-heading">
                <h2>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/06/tv-app-icon.png"
                    alt={t("weatherStationTvApp.altTexts.tvAppIcon")}
                  />{" "}
                  {t("weatherStationTvApp.title")}
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tv-app-para">
                <p>{t("weatherStationTvApp.description")}</p>
                <a className="apple-btn" href={t("weatherStationTvApp.downloadLink")}>
                  {t("weatherStationTvApp.downloadButton.text")}{" "}
                  <span className="iso">{t("weatherStationTvApp.downloadButton.highlight")}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row theme-line">
            <div className="col-md-4">
              <div className="multi-themes">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/multiple-themes.png"
                      alt={t("weatherStationTvApp.features.multipleThemes.altText")}
                    />
                  </li>
                  <li>
                    <h3>{t("weatherStationTvApp.features.multipleThemes.title")}</h3>
                    <p>{t("weatherStationTvApp.features.multipleThemes.description")}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="multi-themes">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/control-via-mobile-app.png"
                      alt={t("weatherStationTvApp.features.controlViaMobile.altText")}
                    />
                  </li>
                  <li>
                    <h3>{t("weatherStationTvApp.features.controlViaMobile.title")}</h3>
                    <p>{t("weatherStationTvApp.features.controlViaMobile.description")}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="multi-themes">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/compare-data.png"
                      alt={t("weatherStationTvApp.features.compareData.altText")}
                    />
                  </li>
                  <li>
                    <h3>{t("weatherStationTvApp.features.compareData.title")}</h3>
                    <p>{t("weatherStationTvApp.features.compareData.description")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tv-app-theme-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/tv-app-integration.jpg"
                  alt={t("weatherStationTvApp.altTexts.tvAppIntegration")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parts & Label Section */}
      <div className="container">
        <div className="row br-line part-line">
          <div className="col-md-5">
            <div className="various-applications-heaidng">
              <h2>{t("weatherStationPartsLabel.title")}</h2>
            </div>
          </div>
          <div className="col-md-7">
            <div className="various-applications-para">
              <p>{t("weatherStationPartsLabel.description")}</p>
            </div>
          </div>
        </div>
      </div>
      <section className="part-label-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="parts-label-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/10/Parts-Label.webp"
                  alt={t("weatherStationPartsLabel.altTexts.partsLabelImage")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prana Air Ambient Section */}
      <section className="prana-air-ambient-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="web-dash-txt pranaair-ambient-txt">
                <h3>{t("weatherStationAmbient.title")}</h3>
                <p>{t("weatherStationAmbient.description")}</p>
                <a href="#">
                  {t("weatherStationAmbient.knowMoreButton")}{" "}
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/06/wifi-icon.png"
                    alt={t("weatherStationAmbient.altTexts.icon")}
                  />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="prana-air-ambient-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/prana-air-ambient-air-quality-monitor.webp"
                  alt={t("weatherStationAmbient.altTexts.ambientMonitor")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Box Section */}
      <section className="whats-inside-box-sec">
        <div className="container">
          <div className="row tv-br-line">
            <div className="col-md-6">
              <div className="tv-app-heading whats-inside-heading">
                <h2>{t("weatherStationInsideBox.title")}</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tv-app-para whats-inside-para">
                <p>{t("weatherStationInsideBox.description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="inside-box">
                <ul>
                  {boxItems.map((item) => (
                    <li key={item.key}>
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={t(`weatherStationInsideBox.items.${item.key}.alt`)}
                      />
                      <h4>{t(`weatherStationInsideBox.items.${item.key}.title`)}</h4>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Using Bootstrap Accordion */}
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="faq-heading">
                <h2>{t("weatherStationFAQ.heading")}</h2>
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
                      {t("weatherStationFAQ.questions.q1")}
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">{t("weatherStationFAQ.answers.a1")}</div>
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
                      {t("weatherStationFAQ.questions.q2")}
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">{t("weatherStationFAQ.answers.a2")}</div>
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
                      {t("weatherStationFAQ.questions.q3")}
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">{t("weatherStationFAQ.answers.a3")}</div>
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
                      {t("weatherStationFAQ.questions.q4")}
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">{t("weatherStationFAQ.answers.a4")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="airqulality_contact_section inner_container" id="contact">
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
        <ContactForm pageName="Weather Station Monitor Page" />
      </section>

      {/* You May Also Like Section */}
      <section className="also-like-sec">
        <div className="container">
          <div className="row line-also">
            <div className="col-md-6">
              <div className="also-like-heading">
                <h2>{t("weatherStationAlsoLike.heading")}</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row mob-row-like">
            <div className="col-md-3">
              <div className="also-like-img">
                <a className="also-like-link" href={t("weatherStationAlsoLike.products.pocketPM.link")}>
                  <img
                    src={t("weatherStationAlsoLike.products.pocketPM.image") || "/placeholder.svg"}
                    alt={t("weatherStationAlsoLike.altTexts.pocketPM")}
                  />
                </a>
                <ul>
                  <li>{t("weatherStationAlsoLike.products.pocketPM.name")}</li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/sailemt-feature-arrow.png"
                      alt={t("weatherStationAlsoLike.altTexts.arrow")}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="also-like-img">
                <a className="also-like-link" href={t("weatherStationAlsoLike.products.cair.link")}>
                  <img
                    src={t("weatherStationAlsoLike.products.cair.image") || "/placeholder.svg"}
                    alt={t("weatherStationAlsoLike.altTexts.cair")}
                  />
                </a>
                <ul>
                  <li>{t("weatherStationAlsoLike.products.cair.name")}</li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/sailemt-feature-arrow.png"
                      alt={t("weatherStationAlsoLike.altTexts.arrow")}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="also-like-img">
                <a className="also-like-link" href={t("weatherStationAlsoLike.products.sensible.link")}>
                  <img
                    src={t("weatherStationAlsoLike.products.sensible.image") || "/placeholder.svg"}
                    alt={t("weatherStationAlsoLike.altTexts.sensible")}
                  />
                </a>
                <ul>
                  <li>{t("weatherStationAlsoLike.products.sensible.name")}</li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/sailemt-feature-arrow.png"
                      alt={t("weatherStationAlsoLike.altTexts.arrow")}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="also-like-img">
                <a className="also-like-link" href={t("weatherStationAlsoLike.products.ambientPro.link")}>
                  <img
                    src={t("weatherStationAlsoLike.products.ambientPro.image") || "/placeholder.svg"}
                    alt={t("weatherStationAlsoLike.altTexts.ambientPro")}
                  />
                </a>
                <ul>
                  <li>{t("weatherStationAlsoLike.products.ambientPro.name")}</li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/sailemt-feature-arrow.png"
                      alt={t("weatherStationAlsoLike.altTexts.arrow")}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
