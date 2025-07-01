import "./styles.css"
import { getServerTranslation } from "@/i18n/server"
import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
  const lang = params?.lang || "en";
  const slug = "air-quality-monitor"; // page-specific slug
  const { t } = await getServerTranslation("pocket-monitor");
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

export default async function PocketMonitorPage() {
  const { t } = await getServerTranslation("pocket-monitor")
  return (
    <main>
      {/* SECTION 1: Hero Section */}
      <div className="hero-container">
        <div className="hero-content-wrapper">
          <h1 className="product-title">
            <span className="product-name">{t("hero.title.productName")}</span>
            <span className="product-type">{t("hero.title.productType")}</span>
          </h1>

          <p className="product-description">
            {t("hero.description.line1")}
            <br />
            {t("hero.description.line2")}
          </p>

          <div className="product-features">
            <span className="feature">{t("hero.features.smallest")}</span>
            <span className="feature-divider">|</span>
            <span className="feature">{t("hero.features.portable")}</span>
            <span className="feature-divider">|</span>
            <span className="feature">{t("hero.features.affordable")}</span>
          </div>

          <div className="product-price">{t("hero.price")}</div>

          <form
            className="cart"
            action="https://www.pranaair.com/product/pm2-5-pocket-monitor/"
            encType="multipart/form-data"
            method="post"
          >
            <button
              className="single_add_to_cart_button button alt banner-btn"
              name="add-to-cart"
              type="submit"
              value="7312"
            >
              {t("hero.buyButton")}
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/09/Vector-3.png"
                alt={t("hero.altTexts.buttonIcon")}
              />
            </button>
          </form>
        </div>
      </div>

      {/* SECTION 2: Product Features */}
      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">
                {t("productFeatures.title")}
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/09/wifi-icon.png"
                  alt={t("productFeatures.altTexts.wifiIcon")}
                  className="wifi-icon"
                />
              </h2>
              <h3 className="section-subtitle">{t("productFeatures.subtitle")}</h3>
            </div>
          </div>

          <div className="row position-relative features-container">
            {/* Features */}
            <div className="feature-wrapper top-left">
              <div className="feature-item">
                <div className="feature-icon-container">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/09/real-time-pm2.5-icon.png"
                    alt={t("productFeatures.features.realTimePM25.altText")}
                  />
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">{t("productFeatures.features.realTimePM25.title")}</h4>
                  <p className="feature-description">{t("productFeatures.features.realTimePM25.description")}</p>
                </div>
              </div>
            </div>

            <div className="feature-wrapper bottom-left">
              <div className="feature-item">
                <div className="feature-icon-container">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/09/lithium-battery.png"
                    alt={t("productFeatures.features.lithiumBattery.altText")}
                  />
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">{t("productFeatures.features.lithiumBattery.title")}</h4>
                  <p className="feature-description">{t("productFeatures.features.lithiumBattery.description")}</p>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="center-image-container">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pm2.5-monitor.png"
                alt={t("productFeatures.altTexts.centerImage")}
                className="center-image"
              />
            </div>

            <div className="feature-wrapper top-right">
              <div className="feature-item">
                <div className="feature-icon-container">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/09/wifi-symbol.png"
                    alt={t("productFeatures.features.wifiEnabled.altText")}
                  />
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">{t("productFeatures.features.wifiEnabled.title")}</h4>
                  <p className="feature-description">{t("productFeatures.features.wifiEnabled.description")}</p>
                </div>
              </div>
            </div>

            <div className="feature-wrapper bottom-right">
              <div className="feature-item">
                <div className="feature-icon-container">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/09/lcd-display-screen.png"
                    alt={t("productFeatures.features.lcdDisplay.altText")}
                  />
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">{t("productFeatures.features.lcdDisplay.title")}</h4>
                  <p className="feature-description">{t("productFeatures.features.lcdDisplay.description")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* AQI Tabs */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="aqi-tabs-container">
                <div className="aqi-tabs">
                  <button className="aqi-tab active">{t("productFeatures.aqiTabs.aqi")}</button>
                  <button className="aqi-tab">{t("productFeatures.aqiTabs.pm1")}</button>
                  <button className="aqi-tab">{t("productFeatures.aqiTabs.pm25")}</button>
                  <button className="aqi-tab">{t("productFeatures.aqiTabs.pm10")}</button>
                </div>
              </div>
            </div>
          </div>

          {/* AQI Indicators */}
          <div className="row mt-4">
            <div className="col-12">
              <div className="aqi-indicators">
                <div className="aqi-indicator">
                  <div className="indicator-circle good">
                    <span>{t("productFeatures.aqiIndicators.good.range")}</span>
                  </div>
                  <div className="indicator-label">{t("productFeatures.aqiIndicators.good.label")}</div>
                </div>
                <div className="aqi-indicator">
                  <div className="indicator-circle moderate">
                    <span>{t("productFeatures.aqiIndicators.moderate.range")}</span>
                  </div>
                  <div className="indicator-label">{t("productFeatures.aqiIndicators.moderate.label")}</div>
                </div>
                <div className="aqi-indicator">
                  <div className="indicator-circle poor">
                    <span>{t("productFeatures.aqiIndicators.poor.range")}</span>
                  </div>
                  <div className="indicator-label">{t("productFeatures.aqiIndicators.poor.label")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: World's Smallest Monitor */}
      <section className="worlds-smallest-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="worlds-smallest-title">
                {t("worldsSmallest.title.part1")}{" "}
                <span className="highlight">{t("worldsSmallest.title.highlight")}</span>
                <br />
                {t("worldsSmallest.title.part2")}
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("worldsSmallest.altTexts.pranaAirLogo")}
                  className="title-icon"
                />
              </h2>
              <p className="worlds-smallest-subtitle">{t("worldsSmallest.subtitle")}</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="pocket-monitor-badge">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pm2.5-monitor-particle-counts-sceern.png"
                  alt={t("productFeatures.altTexts.centerImage")}
                  className="pocket-monitor-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Multiple Data Displays */}
      <section className="multiple-displays-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="tab-content" id="pocketDisplayTabContent">
                <div className="tab-pane fade show active" id="aqi" role="tabpanel" aria-labelledby="aqi-tab">
                  <div className="display-device">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pocket-pm2.5-monitor-wifi.png"
                      alt={t("multipleDisplays.altTexts.displayDevice")}
                      className="display-device-image"
                    />
                  </div>
                </div>
                <div className="tab-pane fade" id="graph" role="tabpanel" aria-labelledby="graph-tab">
                  <div className="display-device">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pm2.5-monitor-graph.png"
                      alt={t("multipleDisplays.altTexts.graphScreen")}
                      className="display-device-image"
                    />
                  </div>
                </div>
                <div className="tab-pane fade" id="particle" role="tabpanel" aria-labelledby="particle-tab">
                  <div className="display-device">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pm2.5-monitor-particle-count.png"
                      alt={t("multipleDisplays.altTexts.particleCountScreen")}
                      className="display-device-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="display-content">
                <h2 className="display-title">
                  {t("multipleDisplays.title")}

                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt={t("multipleDisplays.altTexts.pranaAirLogo")}
                    className="title-icon"
                  />
                </h2>
                <p className="display-description">{t("multipleDisplays.description")}</p>

                <ul className="nav display-options" id="pocketDisplayTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="display-option-primary active"
                      id="aqi-tab"
                      data-bs-toggle="tab"
                      href="#aqi"
                      role="tab"
                      aria-controls="aqi"
                      aria-selected="true"
                    >
                      <div className="display-option-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/08/face-number-icon.png"
                          alt={t("multipleDisplays.altTexts.faceNumberIcon")}
                        />
                      </div>
                      <div className="display-option-content">
                        <h3>{t("multipleDisplays.tabs.main.title")}</h3>
                        <p>{t("multipleDisplays.tabs.main.description")}</p>
                      </div>
                    </a>
                  </li>

                  <div className="display-options-row">
                    <li className="nav-item" role="presentation">
                      <a
                        className="display-option-secondary"
                        id="graph-tab"
                        data-bs-toggle="tab"
                        href="#graph"
                        role="tab"
                        aria-controls="graph"
                        aria-selected="false"
                      >
                        <div className="display-option-icon">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/graphic-screen.png"
                            alt={t("multipleDisplays.altTexts.graphIcon")}
                          />
                        </div>
                        <div className="display-option-content">
                          <h3>{t("multipleDisplays.tabs.graph.title")}</h3>
                          <p>{t("multipleDisplays.tabs.graph.description")}</p>
                        </div>
                      </a>
                    </li>

                    <li className="nav-item" role="presentation">
                      <a
                        className="display-option-secondary"
                        id="particle-tab"
                        data-bs-toggle="tab"
                        href="#particle"
                        role="tab"
                        aria-controls="particle"
                        aria-selected="false"
                      >
                        <div className="display-option-icon">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/number-screen.png"
                            alt={t("multipleDisplays.altTexts.numberIcon")}
                          />
                        </div>
                        <div className="display-option-content">
                          <h3>{t("multipleDisplays.tabs.particle.title")}</h3>
                          <p>{t("multipleDisplays.tabs.particle.description")}</p>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: AQI Platforms */}
      <section className="aqi-platforms-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="platform-tabs-container">
                <ul className="platform-tabs nav nav-tabs" id="platformTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="platform-tab nav-link active"
                      id="aqi-app-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#aqi-app"
                      type="button"
                      role="tab"
                      aria-controls="aqi-app"
                      aria-selected="true"
                    >
                      {t("aqiPlatforms.tabs.app")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="platform-tab nav-link"
                      id="aqi-dashboard-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#aqi-dashboard"
                      type="button"
                      role="tab"
                      aria-controls="aqi-dashboard"
                      aria-selected="false"
                    >
                      <span className="platform-icon d-none">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/09/leaf-icon.png"
                          alt={t("aqiPlatforms.altTexts.leafIcon")}
                          className="tab-leaf-icon"
                        />
                      </span>
                      {t("aqiPlatforms.tabs.dashboard")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="platform-tab nav-link"
                      id="aqi-tv-app-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#aqi-tv-app"
                      type="button"
                      role="tab"
                      aria-controls="aqi-tv-app"
                      aria-selected="false"
                    >
                      <span className="platform-icon d-none">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/09/leaf-icon.png"
                          alt={t("aqiPlatforms.altTexts.leafIcon")}
                          className="tab-leaf-icon"
                        />
                      </span>
                      {t("aqiPlatforms.tabs.tvApp")}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content" id="platformTabsContent">
            {/* AQI App Content */}
            <div className="tab-pane fade show active" id="aqi-app" role="tabpanel" aria-labelledby="aqi-app-tab">
              <div className="platform-content">
                <div className="row">
                  <div className="col-12 text-center">
                    <p className="platform-description">{t("aqiPlatforms.app.description")}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-md-12">
                    <div className="app-info">
                      <h2 className="app-title">{t("aqiPlatforms.app.title")}</h2>
                      <p className="app-subtitle">{t("aqiPlatforms.app.subtitle")}</p>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-12">
                    <div className="app-features-layout">
                      <div className="app-phone-container">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/08/pm-monitor-mob-app.png"
                          alt={t("aqiPlatforms.altTexts.appPhone")}
                          className="app-phone-image"
                        />
                      </div>

                      <div className="app-feature-item feature-01">
                        <div className="feature-number">01</div>
                        <h3 className="feature-title">{t("aqiPlatforms.app.features.healthAdvice")}</h3>
                        <div className="feature-image-container">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/09/health-advice-of-pm-pollution.webp"
                            alt={t("aqiPlatforms.altTexts.healthAdvice")}
                            className="feature-image"
                          />
                        </div>
                      </div>

                      <div className="app-feature-item feature-02">
                        <div className="feature-number">02</div>
                        <h3 className="feature-title">{t("aqiPlatforms.app.features.historicData")}</h3>
                        <div className="feature-image-container">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-pm-datas-on-AQI-app.png"
                            alt={t("aqiPlatforms.altTexts.historicData")}
                            className="feature-image"
                          />
                        </div>
                      </div>

                      <div className="app-feature-item feature-03">
                        <div className="feature-number">03</div>
                        <h3 className="feature-title">{t("aqiPlatforms.app.features.monthlyInsight")}</h3>
                        <div className="feature-image-container">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/monthly-insight-data.png"
                            alt={t("aqiPlatforms.altTexts.monthlyInsight")}
                            className="feature-image"
                          />
                        </div>
                      </div>

                      <div className="app-feature-item feature-04">
                        <div className="feature-number">04</div>
                        <h3 className="feature-title">{t("aqiPlatforms.app.features.filtrationScore")}</h3>
                        <div className="feature-image-container">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/filtration-score.png"
                            alt={t("aqiPlatforms.altTexts.filtrationScore")}
                            className="feature-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AQI Dashboard Content */}
            <div className="tab-pane fade" id="aqi-dashboard" role="tabpanel" aria-labelledby="aqi-dashboard-tab">
              <div className="platform-content">
                <div className="row">
                  <div className="col-12 text-center">
                    <p className="platform-description">{t("aqiPlatforms.dashboard.description")}</p>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="dashboard-features">
                      <div className="dashboard-feature-item">
                        <div className="feature-icon">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/10/real-time-co2-level.png"
                            alt={t("aqiPlatforms.altTexts.realTimePM25")}
                          />
                        </div>
                        <div className="feature-text">
                          <h3>{t("aqiPlatforms.dashboard.features.realTimePM25")}</h3>
                        </div>
                      </div>

                      <div className="dashboard-feature-item">
                        <div className="feature-icon">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-data.png"
                            alt={t("aqiPlatforms.altTexts.insightfulDashboard")}
                          />
                        </div>
                        <div className="feature-text">
                          <h3>{t("aqiPlatforms.dashboard.features.insightfulDashboard")}</h3>
                        </div>
                      </div>

                      <div className="dashboard-feature-item">
                        <div className="feature-icon">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-co2-graph-level.png"
                            alt={t("aqiPlatforms.altTexts.historicalGraphs")}
                          />
                        </div>
                        <div className="feature-text">
                          <h3>{t("aqiPlatforms.dashboard.features.historicalGraphs")}</h3>
                        </div>
                      </div>

                      <div className="dashboard-feature-item">
                        <div className="feature-icon">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/10/health-recommendation.png"
                            alt={t("aqiPlatforms.altTexts.healthRecommendations")}
                          />
                        </div>
                        <div className="feature-text">
                          <h3>{t("aqiPlatforms.dashboard.features.healthRecommendations")}</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12">
                    <div className="dashboard-preview">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/10/pm2.5-aqi-dashboard.png"
                        alt={t("aqiPlatforms.altTexts.dashboardPreview")}
                        className="dashboard-preview-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AQI TV App Content */}
            <div className="tab-pane fade" id="aqi-tv-app" role="tabpanel" aria-labelledby="aqi-tv-app-tab">
              <div className="platform-content">
                <div className="row">
                  <div className="col-12 text-center">
                    <p className="platform-description">{t("aqiPlatforms.tvApp.description")}</p>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="tv-app-features">
                      <div className="tv-app-feature-item">
                        <div className="feature-icon">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/10/real-time-co2-level.png"
                            alt={t("aqiPlatforms.altTexts.realTimePM")}
                          />
                        </div>
                        <div className="feature-text">
                          <h3>{t("aqiPlatforms.tvApp.features.realTimePM")}</h3>
                        </div>
                      </div>

                      <div className="tv-app-feature-item">
                        <div className="feature-icon">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-data.png"
                            alt={t("aqiPlatforms.altTexts.historicalPMData")}
                          />
                        </div>
                        <div className="feature-text">
                          <h3>{t("aqiPlatforms.tvApp.features.historicalPMData")}</h3>
                        </div>
                      </div>

                      <div className="tv-app-feature-item">
                        <div className="feature-icon">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/10/control-tv-app-form-mobile.png"
                            alt={t("aqiPlatforms.altTexts.controlTVApp")}
                          />
                        </div>
                        <div className="feature-text">
                          <h3>{t("aqiPlatforms.tvApp.features.controlTVApp")}</h3>
                        </div>
                      </div>

                      <div className="tv-app-feature-item">
                        <div className="feature-icon">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/10/indicate-valid-score-co2.png"
                            alt={t("aqiPlatforms.altTexts.airQualityScore")}
                          />
                        </div>
                        <div className="feature-text">
                          <h3>{t("aqiPlatforms.tvApp.features.airQualityScore")}</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12">
                    <div className="tv-app-preview">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-tv-app-for-pocket-pm2.5-monitor.webp"
                        alt={t("aqiPlatforms.altTexts.tvAppPreview")}
                        className="tv-app-preview-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Remote Data Accessibility */}
      <section className="remote-data-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="remote-data-content">
                <h2 className="remote-data-title">
                  {t("remoteData.title")}
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt={t("remoteData.altTexts.pranaAirLogo")}
                    className="title-icon"
                  />
                </h2>
                <p className="remote-data-description">{t("remoteData.description")}</p>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="remote-data-flow">
                <ul className="remote-data-steps">
                  <li className="remote-data-step step-01">
                    <div className="step-number">{t("remoteData.steps.step1.number")}</div>
                    <h6 className="step-title">{t("remoteData.steps.step1.title")}</h6>
                    <div className="step-image-container">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pm2.5-monitor.png"
                        alt={t("remoteData.altTexts.pmMonitor")}
                        className="step-image"
                      />
                    </div>
                    <p className="step-label">{t("remoteData.steps.step1.label")}</p>
                  </li>
                  <li className="remote-data-step step-02">
                    <div className="step-number">{t("remoteData.steps.step2.number")}</div>
                    <h6 className="step-title">{t("remoteData.steps.step2.title")}</h6>
                    <div className="step-image-container">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/08/pm-wifi.png"
                        alt={t("remoteData.altTexts.wifiConnectivity")}
                        className="step-image"
                      />
                    </div>
                    <p className="step-label">{t("remoteData.steps.step2.label")}</p>
                  </li>
                  <li className="remote-data-step step-03">
                    <div className="step-number">{t("remoteData.steps.step3.number")}</div>
                    <h6 className="step-title">{t("remoteData.steps.step3.title")}</h6>
                    <div className="step-image-container">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/08/pm-aqi-cloud.png"
                        alt={t("remoteData.altTexts.aqiCloudServer")}
                        className="step-image"
                      />
                    </div>
                    <p className="step-label">{t("remoteData.steps.step3.label")}</p>
                  </li>
                  <li className="remote-data-step step-04">
                    <div className="step-number">{t("remoteData.steps.step4.number")}</div>
                    <h6 className="step-title">{t("remoteData.steps.step4.title")}</h6>
                    <div className="step-image-container">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/08/pm-aqi-app.png"
                        alt={t("remoteData.altTexts.pmDataOnApp")}
                        className="step-image"
                      />
                    </div>
                    <p className="step-label">{t("remoteData.steps.step4.label")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Data Connectivity to Mobile App */}
      <section className="data-connectivity-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="connectivity-content">
                <h2 className="connectivity-title">
                  {t("dataConnectivity.title")}
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt={t("dataConnectivity.altTexts.pranaAirLogo")}
                    className="title-icon"
                  />
                </h2>
                <h3 className="connectivity-subtitle">{t("dataConnectivity.subtitle")}</h3>

                <div className="connectivity-steps">
                  <ul className="nav nav-tabs connectivity-tabs" id="connectivityTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="connectivity-step nav-link active"
                        id="step1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#step1"
                        type="button"
                        role="tab"
                        aria-controls="step1"
                        aria-selected="true"
                      >
                        <div className="step-icon">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/08/install.png.png"
                            alt={t("dataConnectivity.altTexts.installApp")}
                          />
                        </div>
                        <div className="step-content">
                          <h4 className="step-title">{t("dataConnectivity.steps.step1.title")}</h4>
                          <p className="step-description">{t("dataConnectivity.steps.step1.description")}</p>
                        </div>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="connectivity-step nav-link"
                        id="step2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#step2"
                        type="button"
                        role="tab"
                        aria-controls="step2"
                        aria-selected="false"
                      >
                        <div className="step-icon">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/09/connect.png"
                            alt={t("dataConnectivity.altTexts.connectDevice")}
                          />
                        </div>
                        <div className="step-content">
                          <h4 className="step-title">{t("dataConnectivity.steps.step2.title")}</h4>
                          <p className="step-description">{t("dataConnectivity.steps.step2.description")}</p>
                        </div>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="connectivity-step nav-link"
                        id="step3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#step3"
                        type="button"
                        role="tab"
                        aria-controls="step3"
                        aria-selected="false"
                      >
                        <div className="step-icon">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/09/scan-qr-code.png"
                            alt={t("dataConnectivity.altTexts.scanQRCode")}
                          />
                        </div>
                        <div className="step-content">
                          <h4 className="step-title">{t("dataConnectivity.steps.step3.title")}</h4>
                          <p className="step-description">{t("dataConnectivity.steps.step3.description")}</p>
                        </div>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="connectivity-step nav-link"
                        id="step4-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#step4"
                        type="button"
                        role="tab"
                        aria-controls="step4"
                        aria-selected="false"
                      >
                        <div className="step-icon">
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/09/data.png"
                            alt={t("dataConnectivity.altTexts.getInsightfulData")}
                          />
                        </div>
                        <div className="step-content">
                          <h4 className="step-title">{t("dataConnectivity.steps.step4.title")}</h4>
                          <p className="step-description">{t("dataConnectivity.steps.step4.description")}</p>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="download-app-section">
                  <h3 className="download-title">
                    {t("dataConnectivity.downloadApp.title")}{" "}
                    <span className="highlight-text">{t("dataConnectivity.downloadApp.highlightText")}</span>
                  </h3>
                  <p className="download-description">{t("dataConnectivity.downloadApp.description")}</p>
                  <div className="app-store-buttons">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.aqi.data"
                      className="app-store-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/google-play-store.png"
                        alt={t("dataConnectivity.altTexts.googlePlayStore")}
                      />
                    </a>
                    <a
                      href="https://apps.apple.com/tt/app/airqualityindex-aqi/id1439684571"
                      className="app-store-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/02/appstore.png"
                        alt={t("dataConnectivity.altTexts.appleAppStore")}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="tab-content" id="connectivityTabsContent">
                <div className="tab-pane fade show active" id="step1" role="tabpanel" aria-labelledby="step1-tab">
                  <div className="app-preview">
                    <div className="app-image-container">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/06/1.png"
                        alt={t("dataConnectivity.altTexts.installAppPreview")}
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="step2" role="tabpanel" aria-labelledby="step2-tab">
                  <div className="app-preview">
                    <div className="app-image-container">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/09/connect-device-with-our-app.png"
                        alt={t("dataConnectivity.altTexts.connectDevicePreview")}
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="step3" role="tabpanel" aria-labelledby="step3-tab">
                  <div className="app-preview">
                    <div className="app-image-container">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/09/scan-qr-and-configure-with-wifi.png"
                        alt={t("dataConnectivity.altTexts.scanQRCodePreview")}
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="step4" role="tabpanel" aria-labelledby="step4-tab">
                  <div className="app-preview">
                    <div className="app-image-container">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/09/insightful-data.png"
                        alt={t("dataConnectivity.altTexts.insightfulDataPreview")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Easy Monitoring */}
      <section className="easy-monitoring-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="monitoring-content">
                <h2 className="monitoring-title">
                  {t("easyMonitoring.title")}
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt={t("easyMonitoring.altTexts.pranaAirLogo")}
                    className="title-icon"
                  />
                </h2>
                <h3 className="monitoring-subtitle">{t("easyMonitoring.subtitle")}</h3>
                <p className="monitoring-description">{t("easyMonitoring.description")}</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="monitoring-image-container">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pm2.5-monitor-data-on-aqi-mobile-app.webp"
                  alt={t("easyMonitoring.altTexts.monitorWithApp")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Unboxing Video */}
      <section className="unboxing-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="unboxing-title">
                {t("unboxing.title")}
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("unboxing.altTexts")}
                  className="title-icon"
                />
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/vKTDgUu1K_E"
                  title="Unboxing of Prana Air Pocket PM2.5 Air Quality Monitor"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Product Gallery & Salient Features */}
      <section className="gallery-features-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="section-title">
                {t("productGallery.title")}
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("productGallery.altTexts.leafIcon")}
                  className="leaf-icon"
                />
              </h2>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 col-md-12">
              <div className="gallery-container">
                <div className="tab-content" id="galleryTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="front-view"
                    role="tabpanel"
                    aria-labelledby="front-view-tab"
                  >
                    <div className="gallery-main-image">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-smart-portable-monitor.png"
                        alt={t("productGallery.altTexts.frontView")}
                      />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="side-view" role="tabpanel" aria-labelledby="side-view-tab">
                    <div className="gallery-main-image">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/pocket-monitor-side-view.jpeg"
                        alt={t("productGallery.altTexts.sideView")}
                      />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="back-view" role="tabpanel" aria-labelledby="back-view-tab">
                    <div className="gallery-main-image">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/pm-pocket-monitor-sideview.jpeg"
                        alt={t("productGallery.altTexts.backView")}
                      />
                    </div>
                  </div>
                </div>
                <ul className="nav gallery-thumbnails" id="galleryTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link gallery-thumbnail active"
                      id="front-view-tab"
                      data-bs-toggle="tab"
                      href="#front-view"
                      role="tab"
                      aria-controls="front-view"
                      aria-selected="true"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-smart-portable-monitor-280x280.png"
                        alt={t("productGallery.altTexts.frontView")}
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link gallery-thumbnail"
                      id="side-view-tab"
                      data-bs-toggle="tab"
                      href="#side-view"
                      role="tab"
                      aria-controls="side-view"
                      aria-selected="false"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/pocket-monitor-side-view-300x273.jpeg"
                        alt={t("productGallery.altTexts.sideView")}
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link gallery-thumbnail"
                      id="back-view-tab"
                      data-bs-toggle="tab"
                      href="#back-view"
                      role="tab"
                      aria-controls="back-view"
                      aria-selected="false"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/03/pm-pocket-monitor-sideview-300x273.jpeg"
                        alt={t("productGallery.altTexts.backView")}
                      />
                    </a>
                  </li>
                </ul>
                <div className="gallery-brochure">
                  <a href="#" className="download-brochure-btn">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png"
                      alt={t("productGallery.altTexts.brochureBtn")}
                      className="btn-icon"
                    />
                    <span>{t("productGallery.brochure")}</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="salient-features">
                <h2 className="features-title">
                  {t("salientFeatures.title")}
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt={t("salientFeatures.altTexts.leafIcon")}
                    className="leaf-icon"
                  />
                </h2>
                <h3 className="features-subtitle">{t("salientFeatures.subtitle")}</h3>
                <p className="features-description">{t("salientFeatures.description")}</p>

                <div className="features-grid">
                  <div className="features-item">
                    <h4 className="item-title">{t("salientFeatures.features.particlesCount.title")}</h4>
                    <p className="item-value">{t("salientFeatures.features.particlesCount.value")}</p>
                  </div>
                  <div className="features-item">
                    <h4 className="item-title">{t("salientFeatures.features.connectivity.title")}</h4>
                    <p className="item-value">{t("salientFeatures.features.connectivity.value")}</p>
                  </div>
                  <div className="features-item">
                    <h4 className="item-title">{t("salientFeatures.features.battery.title")}</h4>
                    <p className="item-value">{t("salientFeatures.features.battery.value")}</p>
                  </div>
                  <div className="features-item">
                    <h4 className="item-title">{t("salientFeatures.features.range.title")}</h4>
                    <p className="item-value">{t("salientFeatures.features.range.value")}</p>
                  </div>
                </div>

                <div className="features-buttons">
                  <a
                    href="https://www.pranaair.com/wp-content/uploads/2023/10/Prana-Air-Pocket-PM2.5-Air-Quality-Monitor-Brochure.pdf"
                    className="feature-btn brochure-btn"
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png"
                      alt={t("salientFeatures.buttons.brochure.altText")}
                      className="btn-icon"
                    />
                    <span>{t("salientFeatures.buttons.brochure.text")}</span>
                  </a>
                  <a
                    href="https://www.pranaair.com/wp-content/uploads/2024/10/Prana-air-Pocket-PM-air-quality-monitor-manual.pdf"
                    className="feature-btn manual-btn"
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png"
                      alt={t("salientFeatures.buttons.manual.altText")}
                      className="btn-icon"
                    />
                    <span>{t("salientFeatures.buttons.manual.text")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Technical Specifications */}
      <section className="technical-specs-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="technical-specs">
                <h2 className="specs-title">
                  {t("techSpecs.title")}
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt={t("techSpecs.altTexts.leafIcon")}
                    className="leaf-icon"
                  />
                </h2>
                <h3 className="specs-subtitle">{t("techSpecs.subtitle")}</h3>

                <div className="specs-table">
                  <div className="specs-row">
                    <div className="specs-cell">
                      <div className="specs-label">{t("techSpecs.specs.sensor.label")}</div>
                      <div className="specs-value">{t("techSpecs.specs.sensor.value")}</div>
                    </div>
                    <div className="specs-cell">
                      <div className="specs-label">{t("techSpecs.specs.weight.label")}</div>
                      <div className="specs-value">{t("techSpecs.specs.weight.value")}</div>
                    </div>
                  </div>
                  <div className="specs-row">
                    <div className="specs-cell">
                      <div className="specs-label">{t("techSpecs.specs.dimension.label")}</div>
                      <div className="specs-value">{t("techSpecs.specs.dimension.value")}</div>
                    </div>
                    <div className="specs-cell">
                      <div className="specs-label">{t("techSpecs.specs.range.label")}</div>
                      <div className="specs-value">{t("techSpecs.specs.range.value")}</div>
                    </div>
                  </div>
                  <div className="specs-row">
                    <div className="specs-cell">
                      <div className="specs-label">{t("techSpecs.specs.powerSupply.label")}</div>
                      <div className="specs-value">{t("techSpecs.specs.powerSupply.value")}</div>
                    </div>
                    <div className="specs-cell">
                      <div className="specs-label">{t("techSpecs.specs.display.label")}</div>
                      <div className="specs-value">{t("techSpecs.specs.display.value")}</div>
                    </div>
                  </div>
                  <div className="specs-row">
                    <div className="specs-cell">
                      <div className="specs-label">{t("techSpecs.specs.connectivity.label")}</div>
                      <div className="specs-value">{t("techSpecs.specs.connectivity.value")}</div>
                    </div>
                    <div className="specs-cell">
                      <div className="specs-label">{t("techSpecs.specs.dataStorage.label")}</div>
                      <div className="specs-value">{t("techSpecs.specs.dataStorage.value")}</div>
                    </div>
                  </div>
                  <div className="specs-row">
                    <div className="specs-cell">
                      <div className="specs-label">{t("techSpecs.specs.mobileApp.label")}</div>
                      <div className="specs-value">{t("techSpecs.specs.mobileApp.value")}</div>
                    </div>
                    <div className="specs-cell">
                      <div className="specs-label">{t("techSpecs.specs.battery.label")}</div>
                      <div className="specs-value">{t("techSpecs.specs.battery.value")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Banner and Slider */}
      <section className="banner-slider-section">
        <div className="container">
          {/* Banner Part */}
          <div className="row">
            <div className="col-12">
              <div className="portable-banner">
                <div className="banner-content">
                  <h2 className="banner-title">
                    {t("bannerSlider.banner.title")}{" "}
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                      alt={t("bannerSlider.banner.altTexts.leafIcon")}
                      className="leaf-icon"
                    />
                  </h2>
                  <div className="banner-buttons">
                    <a href="https://www.pranaair.com/checkout/?add-to-cart=7312" className="banner-btn buy-now">
                      {t("bannerSlider.banner.buttons.buyNow")}
                    </a>
                    <a href="https://www.amazon.in/dp/B07YPLTX7F?ref=myi_title_dp" className="banner-btn amazon">
                      {t("bannerSlider.banner.buttons.amazon")}
                    </a>
                  </div>
                </div>
                <div className="banner-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/10/smallest-and-portable-air-quality-monitor.png"
                    alt={t("bannerSlider.banner.altTexts.monitorImage")}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Slider Part */}
          <div className="row mt-5">
            <div className="col-12">
              <div id="monitorSlider" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#monitorSlider"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#monitorSlider"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#monitorSlider"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/pm2.5-monitor-graphic-scaled.jpg"
                      className="d-block w-100"
                      alt={t("bannerSlider.slider.slides.slide1.altText")}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/pm2.5-monitor-graphic-scaled.jpg"
                      className="d-block w-100"
                      alt={t("bannerSlider.slider.slides.slide2.altText")}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/pm2.5-monitor-numberic-scaled.jpg"
                      className="d-block w-100"
                      alt={t("bannerSlider.slider.slides.slide3.altText")}
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#monitorSlider"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">{t("bannerSlider.slider.controls.previous")}</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#monitorSlider"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">{t("bannerSlider.slider.controls.next")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: Our Clientele */}
      <section className="clientele-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="clientele-title">
                {t("clientele.title")}
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("clientele.altTexts.leafIcon")}
                  className="leaf-icon"
                />
              </h2>
              <p className="clientele-subtitle">We are honored to work with so many well-known companies.</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/microsoftt.jpg"
                  alt="Microsoft"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/morgan.jpg"
                  alt="Morgan Stanley"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/12/ola.jpg"
                  alt="OLA"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/renault-nissan.jpg"
                  alt="Renault Nissan"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/cii.jpg"
                  alt="CII"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/interglobe.jpg"
                  alt="Interglobe"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/marriott.jpg"
                  alt="Marriott"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/csir.jpg"
                  alt="CSIR"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/tata.jpg"
                  alt="TATA"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/mahindra.jpg"
                  alt="Mahindra"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/gmda.jpg"
                  alt="GMDA"
                  className="client-logo"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo-card">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/havellss.jpg"
                  alt="Havells"
                  className="client-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: FAQs */}
      <section className="faqs-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="faqs-title">
                {t("faqSection.title")}
              </h2>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div className="accordion" id="pocketFaqAccordion">
                {t("faqSection.items", { returnObjects: true }).map((item, index) => (
                  <div className="accordion-item faq-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index + 1}`}>
                      <button
                        className={`accordion-button faq-question ${index !== 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index + 1}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`collapse${index + 1}`}
                      >
                        <span className="question-number">{item.number}.</span>
                        <span className="question-text">{item.question}</span>
                      </button>
                    </h2>
                    <div
                      id={`collapse${index + 1}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      aria-labelledby={`heading${index + 1}`}
                      data-bs-parent="#pocketFaqAccordion"
                    >
                      <div className="accordion-body faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

