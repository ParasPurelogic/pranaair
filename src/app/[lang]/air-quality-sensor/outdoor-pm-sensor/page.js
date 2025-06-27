import Image from "next/image"
import "bootstrap/dist/css/bootstrap.min.css"
import Link from "@/Components/TranslateLink"
import { domain } from "@/config"
import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import ProductCarousel from "@/Components/Pages/OutPmSensor/product-carousel"
import { getServerTranslation } from "@/i18n/server"

// ✅ SEO Metadata
export async function generateMetadata() {
  const { t } = await getServerTranslation("outdoor-pm-sensor");
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
export default async function PMSensorPage() {
  const { t } = await getServerTranslation("outdoor-pm-sensor")

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  const alsoLikeResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-heading">
                <h1>{t("pmSensorHero.title")}</h1>
                <p>
                  {t("pmSensorHero.description.part1")}{" "}
                  <span className="range">{t("pmSensorHero.description.range")}</span>
                </p>
                <a href="#contact">
                  {t("pmSensorHero.requestButton")}{" "}
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/12/btn-icon.jpg"
                    alt={t("pmSensorHero.buttonIconAlt")}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Heading Section */}
      <div className="feature-heaidng">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="feature-heading">
                <h2>
                  {t("pmSensorFeature.title")}
                  <span className="amazing">{t("pmSensorFeature.subtitle")}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <section className="feature-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="amazing-feature">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Fan-closed-loop-control-stable-flow.png"
                      alt={t("pmSensorAlt.fanControl")}
                    />
                    <h3>{t("pmSensorFeatures.fanControl")}</h3>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Own-fault-detection-function.png"
                      alt={t("pmSensorAlt.faultDetection")}
                    />
                    <h3>{t("pmSensorFeatures.faultDetection")}</h3>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/anti-dust-duct.png"
                      alt={t("pmSensorAlt.dustProof")}
                    />
                    <h3>{t("pmSensorFeatures.dustProof")}</h3>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/easy-to-install.png"
                      alt={t("pmSensorAlt.smallSize")}
                    />
                    <div className="img-bx">
                      <h3>{t("pmSensorFeatures.smallSize")}</h3>
                    </div>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/anti-interferene-ability.png"
                      alt={t("pmSensorAlt.interference")}
                    />
                    <h3>{t("pmSensorFeatures.interference")}</h3>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/moisture-proof-design.png"
                      alt={t("pmSensorAlt.moistureResistant")}
                    />
                    <h3>{t("pmSensorFeatures.moistureResistant")}</h3>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/multiple-communication.png"
                      alt={t("pmSensorAlt.communication")}
                    />
                    <div className="img-bx">
                      <h3>{t("pmSensorFeatures.communication")}</h3>
                    </div>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/fast-detection-speed.png"
                      alt={t("pmSensorAlt.detection")}
                    />
                    <h3>{t("pmSensorFeatures.detection")}</h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="tab-container">
                {/* Tab Content */}
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/PM-Sensor-Front-View.webp"
                      alt={t("pmSensorAlt.frontView")}
                    />
                  </div>
                  <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Particulate-matter-Sensor-Side-View.webp"
                      alt={t("pmSensorAlt.sideView")}
                    />
                  </div>
                  <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/PM-Sensor-Metallic-Front-View.webp"
                      alt={t("pmSensorAlt.metallicFront")}
                    />
                  </div>
                  <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/PM-Sensor-Metallic-Side-View.webp"
                      alt={t("pmSensorAlt.metallicSide")}
                    />
                  </div>
                </div>

                {/* Tab Buttons */}
                <ul className="nav nav-tabs tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active tab-button"
                      id="tab1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tab1"
                      type="button"
                      role="tab"
                      aria-controls="tab1"
                      aria-selected="true"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/PM-Sensor-Front-View.webp"
                        alt={t("pmSensorAlt.frontView")}
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tab-button"
                      id="tab2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tab2"
                      type="button"
                      role="tab"
                      aria-controls="tab2"
                      aria-selected="false"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/Particulate-matter-Sensor-Side-View.webp"
                        alt={t("pmSensorAlt.sideView")}
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tab-button"
                      id="tab3-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tab3"
                      type="button"
                      role="tab"
                      aria-controls="tab3"
                      aria-selected="false"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/PM-Sensor-Metallic-Front-View.webp"
                        alt={t("pmSensorAlt.metallicFront")}
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tab-button"
                      id="tab4-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tab4"
                      type="button"
                      role="tab"
                      aria-controls="tab4"
                      aria-selected="false"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/PM-Sensor-Metallic-Side-View.webp"
                        alt={t("pmSensorAlt.metallicSide")}
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PM Tech Section */}
      <section className="pm-tech-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="feature-heading">
                <h2>
                  {t("pmTechSection.title")}
                  <span className="amazing">{t("pmTechSection.laserTechnology")}</span>
                </h2>
                <p>{t("pmTechSection.lightScattering")}</p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="tech-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/pm-laser-sensor-light-scattering-working-mechanism.webp"
                  alt={t("pmTechSection.imgAlt")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Range Section */}
      <section className="range-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="range-para">
                <p>
                  {t("rangeSection.description.part1")}
                  <span className="green">{t("rangeSection.description.laser")}</span>
                  {t("rangeSection.description.part2")}
                  <span className="green">{t("rangeSection.description.lightSpreading")}</span>
                  {t("rangeSection.description.part3")}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="range-heading">
                <h3>
                  {t("rangeSection.rangeTitle")}
                  <strong>{t("rangeSection.rangeValue")}</strong>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Connectivity Section */}
      <section className="seamless-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="seamless-txt">
                <h2>{t("seamlessSection.title")}</h2>
              </div>
            </div>
          </div>
          <div className="row tab-row">
            <div className="col-md-9">
              <div className="aqi-box-bg">
                <div className="indoor-sensor">
                  <ul>
                    <li>
                      <img
                        className="pm-sensor"
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/pm-sensor-of-laser.webp"
                        alt={t("seamlessSection.pmSensorAlt")}
                      />
                    </li>
                    <li>
                      <h3>{t("seamlessSection.pmSensor")}</h3>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/pm-sensor-and-air-quality-monitor.webp"
                        alt={t("seamlessSection.monitorAndSensorAlt")}
                      />
                    </li>
                    <li>
                      <h3>{t("seamlessSection.monitorAndSensor")}</h3>
                    </li>
                  </ul>
                </div>
                <div className="wifi-aqi">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/wifi-connectivity.webp"
                        alt={t("seamlessSection.wifiAlt")}
                      />
                    </li>
                    <li>
                      <h3>{t("seamlessSection.wifiConnectivity")}</h3>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/aqi-cloud.png"
                        alt={t("seamlessSection.cloudAlt")}
                      />
                    </li>
                    <li>
                      <h3>{t("seamlessSection.cloudTransmission")}</h3>
                    </li>
                  </ul>
                </div>
                <div className="monitor">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/aqi-monitoring-platforms.webp"
                        alt={t("seamlessSection.platformsAlt")}
                      />
                    </li>
                    <li>
                      <h3>{t("seamlessSection.displayingData")}</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="seamless-para">
                <p>{t("seamlessSection.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indoor/Outdoor Sensor Tab Section */}
      <section className="indoor-outdoor-sensor-tab-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tab-heading">
                <h2>{t("indoorOutdoorSection.title")}</h2>
                <p>{t("indoorOutdoorSection.description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tab-box">
                {/* Tab Navigation */}
                <ul className="nav nav-tabs tab-nav" id="sensorTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active tab-title"
                      id="outdoor-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#outdoor"
                      type="button"
                      role="tab"
                      aria-controls="outdoor"
                      aria-selected="true"
                    >
                      {t("indoorOutdoorSection.outdoorTab")} <i className="far fa-arrow-alt-circle-right"></i>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tab-title"
                      id="indoor-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#indoor"
                      type="button"
                      role="tab"
                      aria-controls="indoor"
                      aria-selected="false"
                    >
                      {t("indoorOutdoorSection.indoorTab")} <i className="far fa-arrow-alt-circle-right"></i>
                    </button>
                  </li>
                </ul>

                {/* Tab Content */}
                <div className="tab-content" id="sensorTabsContent">
                  <div className="tab-pane fade show active" id="outdoor" role="tabpanel" aria-labelledby="outdoor-tab">
                    <div className="sensnor-slider">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="tab-content-box">
                            <h2>
                              {t("indoorOutdoorSection.outdoor.titlePart1")}{" "}
                              <strong>{t("indoorOutdoorSection.outdoor.titlePart2")}</strong>
                            </h2>
                            <p>{t("indoorOutdoorSection.outdoor.description")}</p>
                            <a href="#contact">
                              {t("indoorOutdoorSection.requestQuote")}{" "}
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2024/12/tab-btn.png"
                                alt={t("indoorOutdoorSection.linkIconAlt")}
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="sensor-img">
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2025/01/prana-air-outdoor-pm-sensor.webp"
                              alt={t("indoorOutdoorSection.outdoor.imgAlt")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="indoor" role="tabpanel" aria-labelledby="indoor-tab">
                    <div className="sensnor-slider">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="tab-content-box">
                            <h2>
                              {t("indoorOutdoorSection.indoor.titlePart1")}{" "}
                              <strong>{t("indoorOutdoorSection.indoor.titlePart2")}</strong>
                            </h2>
                            <p>{t("indoorOutdoorSection.indoor.description")}</p>
                            <a href="#">
                              {t("indoorOutdoorSection.requestQuote")}{" "}
                              <img
                                src="https://www.pranaair.com/wp-content/uploads/2024/12/tab-btn.png"
                                alt={t("indoorOutdoorSection.linkIconAlt")}
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="sensor-img">
                            <img
                              src="https://www.pranaair.com/wp-content/uploads/2025/01/prana-air-indoor-pm-sensor.webp"
                              alt={t("indoorOutdoorSection.indoor.imgAlt")}
                            />
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
      </section>

      {/* Size Comparison Section */}
      <section className="size-compare-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="size-compare-img">
                <h2>{t("sizeComparisonSection.title")}</h2>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/12/PM2.5-size.webp"
                  alt={t("sizeComparisonSection.mainImgAlt")}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="size-compare-box-txt">
                <p>{t("sizeComparisonSection.description")}</p>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/12/pm1.webp"
                      alt={t("sizeComparisonSection.pm1.imgAlt")}
                    />
                  </li>
                  <li>
                    <h3>{t("sizeComparisonSection.pm1.title")}</h3>
                    <p>{t("sizeComparisonSection.pm1.size")}</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/pm2.5.png"
                      alt={t("sizeComparisonSection.pm25.imgAlt")}
                    />
                  </li>
                  <li>
                    <h3>{t("sizeComparisonSection.pm25.title")}</h3>
                    <p>{t("sizeComparisonSection.pm25.size")}</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/pm10.png"
                      alt={t("sizeComparisonSection.pm10.imgAlt")}
                    />
                  </li>
                  <li>
                    <h3>{t("sizeComparisonSection.pm10.title")}</h3>
                    <p>{t("sizeComparisonSection.pm10.size")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Particulate Matter Heading */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="particulate-matter-heading">
              <h2>{t("particulateMatterSection.title")}</h2>
              <p>
                {t("particulateMatterSection.descriptionPart1")}{" "}
                <a href="https://www.aqi.in/blog/pm2-5-pollution-is-threatening-the-tourism-industry-in-bali/">
                  {t("particulateMatterSection.pm25Link")}
                </a>{" "}
                {t("particulateMatterSection.descriptionPart2")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section className="experince-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="experince-heading">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/12/pm1.webp"
                      alt={t("particulateMatterSection.experience.pm1Alt")}
                    />
                    {t("particulateMatterSection.experience.pm1")}
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/pm10.png"
                      alt={t("particulateMatterSection.experience.pm10Alt")}
                    />
                    {t("particulateMatterSection.experience.pm10")}
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/pm2.5.png"
                      alt={t("particulateMatterSection.experience.pm25Alt")}
                    />
                    {t("particulateMatterSection.experience.pm25")}
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/pm2.5.png"
                      alt={t("particulateMatterSection.experience.pm25Alt")}
                    />
                    {t("particulateMatterSection.experience.pm25")}
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/12/pm1.webp"
                      alt={t("particulateMatterSection.experience.pm1Alt")}
                    />
                    {t("particulateMatterSection.experience.pm1")}
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/pm10.png"
                      alt={t("particulateMatterSection.experience.pm10Alt")}
                    />
                    {t("particulateMatterSection.experience.pm10")}
                  </li>
                </ul>
              </div>
              <div className="pm-indoor-heading">
                <h3>{t("particulateMatterSection.knowAbout")}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Black Background Section */}
      <div className="black-bg">
        <div className="container">
          <div className="row pm-indoor-bg">
            <div className="col-md-12">
              <ul>
                <li>
                  <h4>{t("particulateMatterSection.details.pm1.title")}</h4>
                  <p>{t("particulateMatterSection.details.pm1.description")}</p>
                </li>
                <li>
                  <h4>{t("particulateMatterSection.details.pm25.title")}</h4>
                  <p>{t("particulateMatterSection.details.pm25.description")}</p>
                </li>
                <li>
                  <h4>{t("particulateMatterSection.details.pm10.title")}</h4>
                  <p>{t("particulateMatterSection.details.pm10.description")}</p>
                </li>
                <li>
                  <h4>{t("particulateMatterSection.details.particleCount.title")}</h4>
                  <p>{t("particulateMatterSection.details.particleCount.description")}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Source Section */}
      <section className="source-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="source-box">
                <h2>{t("sourceSection.title")}</h2>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Vehicle-Exhaust.webp"
                      alt={t("sourceSection.sources.vehicleExhaust.alt")}
                    />
                    {t("sourceSection.sources.vehicleExhaust.label")}
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Factory-Emission.webp"
                      alt={t("sourceSection.sources.factoryEmission.alt")}
                    />
                    {t("sourceSection.sources.factoryEmission.label")}
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Construction-sites-area.webp"
                      alt={t("sourceSection.sources.constructionSites.alt")}
                    />
                    {t("sourceSection.sources.constructionSites.label")}
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Wildfires.webp"
                      alt={t("sourceSection.sources.wildfires.alt")}
                    />
                    {t("sourceSection.sources.wildfires.label")}
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Dusty-roads.webp"
                      alt={t("sourceSection.sources.dustyRoads.alt")}
                    />
                    {t("sourceSection.sources.dustyRoads.label")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Chart Section */}
      <section className="comapre-chart-sec">
        <div className="container">
          <div className="row border-line">
            <div className="col-md-12">
              <div className="data-compare-chart-heading">
                <h2>{t("compareChartSection.title")}</h2>
              </div>
              <div className="data-compare-chart-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/data-accuracy-of-prana-air-pm2.5-sensor.webp"
                  alt={t("compareChartSection.chartImgAlt")}
                />
              </div>
            </div>
          </div>
          <div className="row border-line border-left">
            <div className="col-md-6">
              <div className="comapre-chart-para">
                <p>{t("compareChartSection.paragraph1")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="comapre-chart-para">
                <p>{t("compareChartSection.paragraph2")}</p>
              </div>
            </div>
          </div>
          <div className="row border-line border-bg">
            <div className="col-md-12">
              <div className="clinet-heading">
                <h3>{t("compareChartSection.clients.title")}</h3>
              </div>
              <div className="container">
                <div className="marquee">
                  <div className="marquee-inner">
                    <div className="marquee-img-box">
                      <ul>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/Symbiosis-Pune.webp"
                            alt={t("compareChartSection.clients.logos.symbiosis")}
                          />
                        </li>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/taj.webp"
                            alt={t("compareChartSection.clients.logos.taj")}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="marquee-img-box">
                      <ul>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/TATA-Steel-Jamshedpur.webp"
                            alt={t("compareChartSection.clients.logos.tataSteel")}
                          />
                        </li>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/UOC.webp"
                            alt={t("compareChartSection.clients.logos.uoc")}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="marquee-img-box">
                      <ul>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/WRI.webp"
                            alt={t("compareChartSection.clients.logos.wri")}
                          />
                        </li>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/Adani-Group.webp"
                            alt={t("compareChartSection.clients.logos.adani")}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="marquee-img-box">
                      <ul>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/BARC-Bhabha-Atomic-Research-Centre.webp"
                            alt={t("compareChartSection.clients.logos.barc")}
                          />
                        </li>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/BCG-Boston-Consulting-Group.webp"
                            alt={t("compareChartSection.clients.logos.bcg")}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="marquee-img-box">
                      <ul>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/BIRLA-Ultratech.webp"
                            alt={t("compareChartSection.clients.logos.birla")}
                          />
                        </li>
                        <li>
                          <img
                            className="arrow"
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/BITS-pilani.webp"
                            alt={t("compareChartSection.clients.logos.bits")}
                          />
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

      {/* app sensor Section */}
      <section className="app-sensor-sec">
        <div className="container">
          <div className="row br-btm">
            <div className="col-sm-6">
              <div className="feature-heading fadeInUp animated">
                <h2>
                  {t("applicationsSection.title")}
                  <br />
                  <span className="amazing">{t("applicationsSection.subtitle")}</span>
                </h2>
              </div>
            </div>
            <div className="col-sm-6">{/* This column was empty in the original code */}</div>
          </div>

          <div className="row visible-box">
            <div className="col-sm-12">
              <ProductCarousel responsive={responsive} className="app-sensor-slider">
                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Airport.webp"
                      alt={t("applicationsSection.applications.airport.alt")}
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>{t("applicationsSection.applications.airport.title")}</h4>
                </div>

                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Homes.webp"
                      alt={t("applicationsSection.applications.homes.alt")}
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>{t("applicationsSection.applications.homes.title")}</h4>
                </div>

                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Office.webp"
                      alt={t("applicationsSection.applications.offices.alt")}
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>{t("applicationsSection.applications.offices.title")}</h4>
                </div>

                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Railway-stations.webp"
                      alt={t("applicationsSection.applications.railwayStations.alt")}
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>{t("applicationsSection.applications.railwayStations.title")}</h4>
                </div>

                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Schools.webp"
                      alt={t("applicationsSection.applications.schools.alt")}
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>{t("applicationsSection.applications.schools.title")}</h4>
                </div>

                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Smart-citie.webp"
                      alt={t("applicationsSection.applications.smartCities.alt")}
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>{t("applicationsSection.applications.smartCities.title")}</h4>
                </div>

                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Construction-sites.webp"
                      alt={t("applicationsSection.applications.constructionSites.alt")}
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>{t("applicationsSection.applications.constructionSites.title")}</h4>
                </div>

                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Factories-and-warehouse.webp"
                      alt={t("applicationsSection.applications.factories.alt")}
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>{t("applicationsSection.applications.factories.title")}</h4>
                </div>

                <div className="app-sensor-title">
                  <p>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Health-care-facilities.webp"
                      alt={t("applicationsSection.applications.healthcare.alt")}
                      width={300}
                      height={250}
                      className="img-fluid"
                    />
                  </p>
                  <h4>{t("applicationsSection.applications.healthcare.title")}</h4>
                </div>
              </ProductCarousel>
            </div>
          </div>
        </div>
      </section>

      {/* construction site Section */}
      <section className="construction-site-sec">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="construction-heading fadeInUp animated">
                <h2>{t("constructionSection.title")}</h2>
                <p>{t("constructionSection.description")}</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="construction-btn fadeInUp animated">
                <p>
                  <Link href={`${domain}/solutions-by-application/constructions`} className="btn-link">
                    {t("constructionSection.linkText")}{" "}
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/12/tab-btn.png"
                      alt={t("constructionSection.buttonIconAlt")}
                      width={20}
                      height={20}
                    />
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="construction-bg">
                <ul className="construct-site">
                  <li>
                    <h3>{t("constructionSection.stats.count")}</h3>
                  </li>
                  <li>{t("constructionSection.stats.label")}</li>
                </ul>
                <ul className="dpcc">
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/DPCC-logo.png"
                      alt={t("constructionSection.dpcc.logoAlt")}
                      width={80}
                      height={80}
                    />
                  </li>
                  <li>
                    {t("constructionSection.dpcc.text")}
                    <br />
                    <h4>{t("constructionSection.dpcc.guidelines")}</h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">{/* This column was empty in the original code */}</div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="feature-heading">
                <h2>
                  {t("caseStudiesSection.title")}
                  <span className="amazing">{t("caseStudiesSection.subtitle")}</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row laser-br">
            <div className="col-md-6">
              <div className="laser-heading">
                <h3>{t("caseStudiesSection.caseStudy1.title")}</h3>
                <h4>{t("caseStudiesSection.caseStudy1.subtitle")}</h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="laser-para">
                <p>
                  <strong>{t("caseStudiesSection.caseStudy1.briefLabel")}</strong>{" "}
                  {t("caseStudiesSection.caseStudy1.brief")}
                </p>
              </div>
              <div className="laser-author">
                <p>
                  - <strong>{t("caseStudiesSection.caseStudy1.authorName")}</strong>
                  {t("caseStudiesSection.caseStudy1.authorAffiliation")}
                </p>
              </div>
            </div>
          </div>
          <div className="row calibration-bg">
            <div className="col-md-7">
              <div className="note-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/pm2.5-calibration.webp"
                  alt={t("caseStudiesSection.caseStudy1.calibrationImgAlt")}
                />
                <p className="pm-note-para">
                  <strong>{t("caseStudiesSection.caseStudy1.noteLabel")}</strong>{" "}
                  {t("caseStudiesSection.caseStudy1.noteText")}
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="study-link">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/full-study-here.webp"
                  alt={t("caseStudiesSection.caseStudy1.studyImgAlt")}
                />
                <p className="study-para">
                  {t("caseStudiesSection.caseStudy1.findFullStudy")}
                  <a href="https://www.pranaair.com/wp-content/uploads/2025/01/C33_Comp_Eval_PM_Sensors_FiCloud2021_Ishan.pdf">
                    https://pubmed.ncbi.nlm.nih.gov/37318651/
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row laser-br green-bg">
            <div className="col-md-6">
              <div className="laser-heading">
                <h3>{t("caseStudiesSection.caseStudy2.title")}</h3>
                <h4>{t("caseStudiesSection.caseStudy2.subtitle")}</h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="laser-para">
                <p>
                  <strong>{t("caseStudiesSection.caseStudy2.briefLabel")}</strong>{" "}
                  {t("caseStudiesSection.caseStudy2.brief")}
                </p>
              </div>
              <div className="laser-author">
                <p>
                  - <strong>{t("caseStudiesSection.caseStudy2.authorName")}</strong>
                  {t("caseStudiesSection.caseStudy2.authorAffiliation")}
                </p>
              </div>
            </div>
          </div>
          <div className="row case-bg">
            <div className="col-md-12">
              <div className="laser-pm-case">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/economical-portable-sensor-eps.webp"
                      alt={t("caseStudiesSection.caseStudy2.image1Alt")}
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/ranking-eps.webp"
                      alt={t("caseStudiesSection.caseStudy2.image2Alt")}
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/ranking-of-eps-on-physical.webp"
                      alt={t("caseStudiesSection.caseStudy2.image3Alt")}
                    />
                    <p className="study-para">
                      {t("caseStudiesSection.caseStudy2.findFullStudy")}
                      <a href="https://www.pranaair.com/wp-content/uploads/2025/01/0e5918e1-0456-44a7-847e-a576447b8c62_230615_221224.pdf">
                        https://pubmed.ncbi.nlm.nih.gov/37318651/
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Impact Section */}
      <section className="health-impact-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="healt-impact-heading">
                <h2>{t("healthImpactSection.title")}</h2>
              </div>
            </div>
          </div>
          <div className="mob-flex">
            <div className="col-md-1/5">
              <div className="healt-impact-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/Asthma-and-allergies.webp"
                  alt={t("healthImpactSection.impacts.asthma.alt")}
                />
                <h4>{t("healthImpactSection.impacts.asthma.title")}</h4>
              </div>
            </div>
            <div className="col-md-1/5">
              <div className="healt-impact-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/High-risk-of-lung-cancer.webp"
                  alt={t("healthImpactSection.impacts.lungCancer.alt")}
                />
                <h4>{t("healthImpactSection.impacts.lungCancer.title")}</h4>
              </div>
            </div>
            <div className="col-md-1/5">
              <div className="healt-impact-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/Respiratory-infections.webp"
                  alt={t("healthImpactSection.impacts.respiratoryInfections.alt")}
                />
                <h4>{t("healthImpactSection.impacts.respiratoryInfections.title")}</h4>
              </div>
            </div>
            <div className="col-md-1/5">
              <div className="healt-impact-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/Lung-diseases.webp"
                  alt={t("healthImpactSection.impacts.lungDiseases.alt")}
                />
                <h4>{t("healthImpactSection.impacts.lungDiseases.title")}</h4>
              </div>
            </div>
            <div className="col-md-1/5">
              <div className="healt-impact-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/Heart-related-issues.webp"
                  alt={t("healthImpactSection.impacts.heartIssues.alt")}
                />
                <h4>{t("healthImpactSection.impacts.heartIssues.title")}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="tech-spec-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tech-spec-heading">
                <h2>{t("techSpecsSection.title")}</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="construction-btn">
                <ul>
                  <li>
                    <Link href={`${domain}/solutions-by-application/constructions`}>
                      {t("techSpecsSection.links.arduinoCode")}
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/12/tab-btn.png"
                        alt={t("techSpecsSection.links.iconAlt")}
                      />
                    </Link>
                  </li>
                  <li>
                    <a href="https://www.pranaair.com/wp-content/uploads/2025/01/prana-air-pas-out-1-outdoor-pm-sensor-datasheet.pdf">
                      {t("techSpecsSection.links.datasheet")}
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/12/tab-btn.png"
                        alt={t("techSpecsSection.links.iconAlt")}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="tech-spec-tabel">
                <ul>
                  <li>
                    <h3>{t("techSpecsSection.specs.productName.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("techSpecsSection.specs.productName.value")}</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>{t("techSpecsSection.specs.ratedVoltage.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("techSpecsSection.specs.ratedVoltage.value")}</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>{t("techSpecsSection.specs.communicationPort.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("techSpecsSection.specs.communicationPort.value")}</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>{t("techSpecsSection.specs.dimensions.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("techSpecsSection.specs.dimensions.value")}</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>{t("techSpecsSection.specs.particleSize.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("techSpecsSection.specs.particleSize.value")}</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>{t("techSpecsSection.specs.storageTemp.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("techSpecsSection.specs.storageTemp.value")}</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>{t("techSpecsSection.specs.workingTemp.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("techSpecsSection.specs.workingTemp.value")}</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>{t("techSpecsSection.specs.workingHumidity.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("techSpecsSection.specs.workingHumidity.value")}</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>{t("techSpecsSection.specs.ratedCurrent.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("techSpecsSection.specs.ratedCurrent.value")}</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>{t("techSpecsSection.specs.massConcentration.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("techSpecsSection.specs.massConcentration.value")}</h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="outdoor-bg-box">
                <ul>
                  <li>
                    <h3>{t("techSpecsSection.dimensions.outdoor")}</h3>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/outdoor-PM-sensor-dimensions.png"
                      alt={t("techSpecsSection.dimensions.outdoorImgAlt")}
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>{t("techSpecsSection.dimensions.indoor")}</h3>
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Indoor-Sensor-Dimensions.png"
                      alt={t("techSpecsSection.dimensions.indoorImgAlt")}
                    />
                  </li>
                </ul>
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
                <h2>{t("contactSection.title")}</h2>
                <p>{t("contactSection.description")}</p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm pageName="Outdoor Pm Sensor Page" />
      </section>

      {/* You May Also Like Section */}
      <section className="also-like">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="also-like-heading">
                <h2>{t("alsoLikeSection.title")}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ProductCarousel responsive={alsoLikeResponsive} className="allsensor-slide">
                <div className="may-also">
                  <Link href={`${domain}/air-quality-sensor/carbon-dioxide-co2-sensor/`}>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/CO2-gas-sensor.jpg"
                      alt={t("alsoLikeSection.products.co2.alt")}
                    />
                  </Link>
                  <h5>
                    {t("alsoLikeSection.products.co2.title")}{" "}
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png"
                      alt={t("alsoLikeSection.linkIconAlt")}
                    />
                  </h5>
                </div>
                <div className="may-also">
                  <Link href={`${domain}/air-quality-sensor/carbon-monoxide-co-sensor/`}>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/CO-gas-sensor.jpg"
                      alt={t("alsoLikeSection.products.co.alt")}
                    />
                  </Link>
                  <h5>
                    {t("alsoLikeSection.products.co.title")}{" "}
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png"
                      alt={t("alsoLikeSection.linkIconAlt")}
                    />
                  </h5>
                </div>
                <div className="may-also">
                  <Link href={`${domain}/air-quality-sensor/ammonia-nh3-sensor/`}>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Ammonia-gas-sensor.jpg"
                      alt={t("alsoLikeSection.products.ammonia.alt")}
                    />
                  </Link>
                  <h5>
                    {t("alsoLikeSection.products.ammonia.title")}{" "}
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png"
                      alt={t("alsoLikeSection.linkIconAlt")}
                    />
                  </h5>
                </div>
                <div className="may-also">
                  <Link href={`${domain}/air-quality-sensor/hydrogen-sulfide-h2s-sensor/`}>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/H2S-gas-sensor.jpg"
                      alt={t("alsoLikeSection.products.h2s.alt")}
                    />
                  </Link>
                  <h5>
                    {t("alsoLikeSection.products.h2s.title")}{" "}
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png"
                      alt={t("alsoLikeSection.linkIconAlt")}
                    />
                  </h5>
                </div>
                <div className="may-also">
                  <Link href={`${domain}/air-quality-sensor/ozone-o3-sensor/`}>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Ozone-gas-sensor.jpg"
                      alt={t("alsoLikeSection.products.ozone.alt")}
                    />
                  </Link>
                  <h5>
                    {t("alsoLikeSection.products.ozone.title")}{" "}
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png"
                      alt={t("alsoLikeSection.linkIconAlt")}
                    />
                  </h5>
                </div>
                <div className="may-also">
                  <Link href={`${domain}/air-quality-sensor/chlorine-cl2-sensor/`}>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Chlorine-gas-sensor.jpg"
                      alt={t("alsoLikeSection.products.chlorine.alt")}
                    />
                  </Link>
                  <h5>
                    {t("alsoLikeSection.products.chlorine.title")}{" "}
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png"
                      alt={t("alsoLikeSection.linkIconAlt")}
                    />
                  </h5>
                </div>
                <div className="may-also">
                  <Link href={`${domain}/air-quality-sensor/sulfur-dioxide-so2-sensor/`}>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/SO2-gas-sensor.jpg"
                      alt={t("alsoLikeSection.products.so2.alt")}
                    />
                  </Link>
                  <h5>
                    {t("alsoLikeSection.products.so2.title")}{" "}
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png"
                      alt={t("alsoLikeSection.linkIconAlt")}
                    />
                  </h5>
                </div>
                <div className="may-also">
                  <Link href={`${domain}/air-quality-sensor/nitrogen-dioxide-no2-sensor/`}>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/No2-gas-sensor.jpg"
                      alt={t("alsoLikeSection.products.no2.alt")}
                    />
                  </Link>
                  <h5>
                    {t("alsoLikeSection.products.no2.title")}{" "}
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png"
                      alt={t("alsoLikeSection.linkIconAlt")}
                    />
                  </h5>
                </div>
              </ProductCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
