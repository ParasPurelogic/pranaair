import ProductCarousel from "@/Components/Pages/CarbonDioxidesensor/product-carousel"
import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import CO2GraphAnimation from "@/Components/Pages/CarbonDioxidesensor/co2-graph-animation"
import { getServerTranslation } from "@/i18n/server"

// ✅ SEO Metadata
export async function generateMetadata() {
  const { t } = await getServerTranslation("carbon-dioxide-co2-sensor");
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
export default async function CO2SensorPage() {
  const { t } = await getServerTranslation("carbon-dioxide-co2-sensor")

  const graphTitle = t("co2GraphAnimation.title")
  const graphDescription = t("co2GraphAnimation.description")
  const graphImageUrl = t("co2GraphAnimation.imageUrl")
  const sensors = [
    {
      id: "co2",
      imageUrl: "https://www.pranaair.com/wp-content/uploads/2024/08/CO2-gas-sensor.jpg",
      altKey: "relatedSensors.sensors.co2.alt",
      titleKey: "relatedSensors.sensors.co2.title",
    },
    {
      id: "co",
      imageUrl: "https://www.pranaair.com/wp-content/uploads/2024/08/CO-gas-sensor.jpg",
      altKey: "relatedSensors.sensors.co.alt",
      titleKey: "relatedSensors.sensors.co.title",
    },
    {
      id: "ammonia",
      imageUrl: "https://www.pranaair.com/wp-content/uploads/2024/08/Ammonia-gas-sensor.jpg",
      altKey: "relatedSensors.sensors.ammonia.alt",
      titleKey: "relatedSensors.sensors.ammonia.title",
    },
    {
      id: "h2s",
      imageUrl: "https://www.pranaair.com/wp-content/uploads/2024/08/H2S-gas-sensor.jpg",
      altKey: "relatedSensors.sensors.h2s.alt",
      titleKey: "relatedSensors.sensors.h2s.title",
    },
    {
      id: "ozone",
      imageUrl: "https://www.pranaair.com/wp-content/uploads/2024/08/Ozone-gas-sensor.jpg",
      altKey: "relatedSensors.sensors.ozone.alt",
      titleKey: "relatedSensors.sensors.ozone.title",
    },
    {
      id: "chlorine",
      imageUrl: "https://www.pranaair.com/wp-content/uploads/2024/08/Chlorine-gas-sensor.jpg",
      altKey: "relatedSensors.sensors.chlorine.alt",
      titleKey: "relatedSensors.sensors.chlorine.title",
    },
    {
      id: "so2",
      imageUrl: "https://www.pranaair.com/wp-content/uploads/2024/08/SO2-gas-sensor.jpg",
      altKey: "relatedSensors.sensors.so2.alt",
      titleKey: "relatedSensors.sensors.so2.title",
    },
    {
      id: "no2",
      imageUrl: "https://www.pranaair.com/wp-content/uploads/2024/08/No2-gas-sensor.jpg",
      altKey: "relatedSensors.sensors.no2.alt",
      titleKey: "relatedSensors.sensors.no2.title",
    },
  ]
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-heading">
                <h1>
                  <strong>{t("co2SensorHero.title.strong")}</strong> {t("co2SensorHero.title.normal")}
                  <br />
                  {t("co2SensorHero.title.technology")}
                </h1>
                <h3>{t("co2SensorHero.resolution")}</h3>
                <a href="#contact">
                  {t("co2SensorHero.requestButton")}{" "}
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/12/btn-icon.jpg"
                    alt={t("co2SensorHero.altTexts.buttonIcon")}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Heading Section */}
      <div className="container-fluid">
        <div className="row feature-heaidng">
          <div className="col-md-8">
            <div className="feature-heading">
              <h2>
                {t("co2SensorFeature.heading.normal")}{" "}
                <span className="amazing">{t("co2SensorFeature.heading.highlighted")}</span>
              </h2>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>

      {/* Feature Section */}
      <section className="feature-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tab-container">
                {/* Tab Content */}
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                      alt={t("co2SensorFeature.tabs.tab1.alt")}
                    />
                  </div>
                  <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                      alt={t("co2SensorFeature.tabs.tab2.alt")}
                    />
                  </div>
                  <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                      alt={t("co2SensorFeature.tabs.tab3.alt")}
                    />
                  </div>
                  <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                      alt={t("co2SensorFeature.tabs.tab4.alt")}
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
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                        alt={t("co2SensorFeature.tabs.tab1.alt")}
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
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                        alt={t("co2SensorFeature.tabs.tab2.alt")}
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
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                        alt={t("co2SensorFeature.tabs.tab3.alt")}
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
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                        alt={t("co2SensorFeature.tabs.tab4.alt")}
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-para">
                <p>
                  {t("co2SensorFeature.description.part1")}{" "}
                  <strong>{t("co2SensorFeature.description.highlight1")}</strong>.{" "}
                  {t("co2SensorFeature.description.part2")}{" "}
                  <strong>{t("co2SensorFeature.description.highlight2")}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="key-feature-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="key-feature-heading">
                <h2>{t("co2SensorKeyFeatures.heading")}</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="key-box">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Unmatched-Accuracy.png"
                      alt={t("co2SensorKeyFeatures.features.accuracy.alt")}
                    />
                  </li>
                  <li>
                    <h3>{t("co2SensorKeyFeatures.features.accuracy.title")}</h3>
                    {t("co2SensorKeyFeatures.features.accuracy.description")}
                  </li>
                </ul>
                <ul className="dark">
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Long-term-working-power.png"
                      alt={t("co2SensorKeyFeatures.features.longTerm.alt")}
                    />
                  </li>
                  <li>
                    <h3>{t("co2SensorKeyFeatures.features.longTerm.title")}</h3>
                    {t("co2SensorKeyFeatures.features.longTerm.description")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="key-box">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Smaller-in-size.png"
                      alt={t("co2SensorKeyFeatures.features.smallSize.alt")}
                    />
                  </li>
                  <li>
                    <h3>{t("co2SensorKeyFeatures.features.smallSize.title")}</h3>
                    {t("co2SensorKeyFeatures.features.smallSize.description")}
                  </li>
                </ul>
                <ul className="dark">
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Any-environment-adaptability.png"
                      alt={t("co2SensorKeyFeatures.features.adaptability.alt")}
                    />
                  </li>
                  <li>
                    <h3>{t("co2SensorKeyFeatures.features.adaptability.title")}</h3>
                    {t("co2SensorKeyFeatures.features.adaptability.description")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="key-box">
                <ul className="dark">
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Auto-and-manual-calibration.png"
                      alt={t("co2SensorKeyFeatures.features.calibration.alt")}
                    />
                  </li>
                  <li>
                    <h3>{t("co2SensorKeyFeatures.features.calibration.title")}</h3>
                    {t("co2SensorKeyFeatures.features.calibration.description")}
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Signal-output-PWMUART.png"
                      alt={t("co2SensorKeyFeatures.features.signalOutput.alt")}
                    />
                  </li>
                  <li>
                    <h3>{t("co2SensorKeyFeatures.features.signalOutput.title")}</h3>
                    {t("co2SensorKeyFeatures.features.signalOutput.description")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="key-box">
                <ul className="dark">
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Use-less-energy.png"
                      alt={t("co2SensorKeyFeatures.features.energy.alt")}
                    />
                  </li>
                  <li>
                    <h3>{t("co2SensorKeyFeatures.features.energy.title")}</h3>
                    {t("co2SensorKeyFeatures.features.energy.description")}
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Better-customer-support.png"
                      alt={t("co2SensorKeyFeatures.features.support.alt")}
                    />
                  </li>
                  <li>
                    <h3>{t("co2SensorKeyFeatures.features.support.title")}</h3>
                    {t("co2SensorKeyFeatures.features.support.description")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="tech-co-sec">
        <div className="container">
          <div className="row br-btm">
            <div className="col-md-8">
              <div className="tech-co-heading">
                <h2>{t("co2SensorTechnology.heading")}</h2>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="calculate-co-heading">
                <h3>{t("co2SensorTechnology.subheading")}</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tech-co-para">
                <p>
                  {t("co2SensorTechnology.description.part1")}{" "}
                  <strong>{t("co2SensorTechnology.description.highlight")}</strong>
                  {t("co2SensorTechnology.description.part2")}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="ndir-sensor-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/NDIR-CO2-Sensor.webp"
                  alt={t("co2SensorTechnology.image.alt")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Necessary Section */}
      <section className="why-necessary-sec">
        <div className="container">
          <div className="row br-btm">
            <div className="col-md-6">
              <div className="why-necessary-heading">
                <h2>{t("co2SensorWhyNecessary.heading")}</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="why-necessary-para">
                <p>{t("co2SensorWhyNecessary.description")}</p>
              </div>
              <div className="health-impact-heading">
                <h3>{t("co2SensorWhyNecessary.healthImpacts.title")}</h3>
              </div>
            </div>
          </div>
          <div className="row mob-flex-scroll">
            <div className="col-md-2">
              <div className="health-impact-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/dizziness.webp"
                  alt={t("co2SensorWhyNecessary.healthImpacts.item1.alt")}
                />
                <h4>{t("co2SensorWhyNecessary.healthImpacts.item1.title")}</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div className="health-impact-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/side-view-man-dealing-with-imposter-syndrome.webp"
                  alt={t("co2SensorWhyNecessary.healthImpacts.item2.alt")}
                />
                <h4>{t("co2SensorWhyNecessary.healthImpacts.item2.title")}</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div className="health-impact-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/mental-health.webp"
                  alt={t("co2SensorWhyNecessary.healthImpacts.item3.alt")}
                />
                <h4>{t("co2SensorWhyNecessary.healthImpacts.item3.title")}</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div className="health-impact-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/man-using-asthma-inhaler-while-sitting-couch-home.webp"
                  alt={t("co2SensorWhyNecessary.healthImpacts.item4.alt")}
                />
                <h4>{t("co2SensorWhyNecessary.healthImpacts.item4.title")}</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div className="health-impact-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/young-male-psysician-with-patient-measuring-blood-pressure.webp"
                  alt={t("co2SensorWhyNecessary.healthImpacts.item5.alt")}
                />
                <h4>{t("co2SensorWhyNecessary.healthImpacts.item5.title")}</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div className="health-impact-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/Nausea.webp"
                  alt={t("co2SensorWhyNecessary.healthImpacts.item6.alt")}
                />
                <h4>{t("co2SensorWhyNecessary.healthImpacts.item6.title")}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="monitor-heading">
                <h3>{t("co2SensorWhyNecessary.analysis.title")}</h3>
              </div>
              {/* GSAP ScrollTrigger Animation Section */}
              <CO2GraphAnimation title={graphTitle} description={graphDescription} imageUrl={graphImageUrl} />
              <div className="row">
                <div className="col-md-6">
                  <div className="monitor-box-heading">
                    <h3>{t("co2SensorWhyNecessary.crucial.title")}</h3>
                    <p>{t("co2SensorWhyNecessary.crucial.subtitle")}</p>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
              <div className="row mob-crucial-scroll">
                <div className="col-md-4">
                  <div className="monitor-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/entrepreneur-working-overtime-marketing-project-falling-asleep-desk-while-looking-financial-documents-trying-respect-deadline.webp"
                      alt={t("co2SensorWhyNecessary.crucial.item1.alt")}
                    />
                    <h4>{t("co2SensorWhyNecessary.crucial.item1.title")}</h4>
                    <p>{t("co2SensorWhyNecessary.crucial.item1.description")}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="monitor-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/black-woman-wearing-face-mask-holding-her-chest-pain-while-sitting-sofa-living-room.webp"
                      alt={t("co2SensorWhyNecessary.crucial.item2.alt")}
                    />
                    <h4>{t("co2SensorWhyNecessary.crucial.item2.title")}</h4>
                    <p>{t("co2SensorWhyNecessary.crucial.item2.description")}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="monitor-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/young-woman-working-office.webp"
                      alt={t("co2SensorWhyNecessary.crucial.item3.alt")}
                    />
                    <h4>{t("co2SensorWhyNecessary.crucial.item3.title")}</h4>
                    <p>{t("co2SensorWhyNecessary.crucial.item3.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Index Score Section */}
      <section className="index-score-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="index-heading">
                <h2>{t("co2SensorIndexScore.heading")}</h2>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="custom-tabs-container">
                <div className="custom-tabs">
                  <ul className="nav nav-tabs" id="indexScoreTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="custom-tab green active"
                        id="custom-tab1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#custom-tab1"
                        type="button"
                        role="tab"
                        aria-controls="custom-tab1"
                        aria-selected="true"
                      >
                        <h3>
                          {t("co2SensorIndexScore.tab1.title")}{" "}
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png"
                            alt={t("co2SensorIndexScore.tab1.iconAlt")}
                          />
                        </h3>
                        <ul>
                          <li>{t("co2SensorIndexScore.tab1.min")}</li>
                          <li>{t("co2SensorIndexScore.tab1.max")}</li>
                        </ul>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="custom-tab yellow"
                        id="custom-tab2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#custom-tab2"
                        type="button"
                        role="tab"
                        aria-controls="custom-tab2"
                        aria-selected="false"
                      >
                        <h3>
                          {t("co2SensorIndexScore.tab2.title")}{" "}
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png"
                            alt={t("co2SensorIndexScore.tab2.iconAlt")}
                          />
                        </h3>
                        <ul>
                          <li>{t("co2SensorIndexScore.tab2.min")}</li>
                          <li>{t("co2SensorIndexScore.tab2.max")}</li>
                        </ul>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="custom-tab orange"
                        id="custom-tab3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#custom-tab3"
                        type="button"
                        role="tab"
                        aria-controls="custom-tab3"
                        aria-selected="false"
                      >
                        <h3>
                          {t("co2SensorIndexScore.tab3.title")}{" "}
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png"
                            alt={t("co2SensorIndexScore.tab3.iconAlt")}
                          />
                        </h3>
                        <ul>
                          <li>{t("co2SensorIndexScore.tab3.min")}</li>
                          <li>{t("co2SensorIndexScore.tab3.max")}</li>
                        </ul>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="custom-tab pink"
                        id="custom-tab4-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#custom-tab4"
                        type="button"
                        role="tab"
                        aria-controls="custom-tab4"
                        aria-selected="false"
                      >
                        <h3>
                          {t("co2SensorIndexScore.tab4.title")}{" "}
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png"
                            alt={t("co2SensorIndexScore.tab4.iconAlt")}
                          />
                        </h3>
                        <ul>
                          <li>{t("co2SensorIndexScore.tab4.min")}</li>
                          <li>{t("co2SensorIndexScore.tab4.max")}</li>
                        </ul>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="custom-tab puple"
                        id="custom-tab5-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#custom-tab5"
                        type="button"
                        role="tab"
                        aria-controls="custom-tab5"
                        aria-selected="false"
                      >
                        <h3>
                          {t("co2SensorIndexScore.tab5.title")}{" "}
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png"
                            alt={t("co2SensorIndexScore.tab5.iconAlt")}
                          />
                        </h3>
                        <ul>
                          <li>{t("co2SensorIndexScore.tab5.min")}</li>
                          <li>{t("co2SensorIndexScore.tab5.max")}</li>
                        </ul>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="custom-tab red"
                        id="custom-tab6-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#custom-tab6"
                        type="button"
                        role="tab"
                        aria-controls="custom-tab6"
                        aria-selected="false"
                      >
                        <h3>
                          {t("co2SensorIndexScore.tab6.title")}{" "}
                          <img
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png"
                            alt={t("co2SensorIndexScore.tab6.iconAlt")}
                          />
                        </h3>
                        <ul>
                          <li>{t("co2SensorIndexScore.tab6.min")}</li>
                          <li>{t("co2SensorIndexScore.tab6.max")}</li>
                        </ul>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="indexScoreTabsContent">
                  <div
                    id="custom-tab1"
                    className="tab-pane fade show active"
                    role="tabpanel"
                    aria-labelledby="custom-tab1-tab"
                  >
                    <p>{t("co2SensorIndexScore.tab1.description")}</p>
                  </div>
                  <div id="custom-tab2" className="tab-pane fade" role="tabpanel" aria-labelledby="custom-tab2-tab">
                    <p>{t("co2SensorIndexScore.tab2.description")}</p>
                  </div>
                  <div id="custom-tab3" className="tab-pane fade" role="tabpanel" aria-labelledby="custom-tab3-tab">
                    <p>{t("co2SensorIndexScore.tab3.description")}</p>
                  </div>
                  <div id="custom-tab4" className="tab-pane fade" role="tabpanel" aria-labelledby="custom-tab4-tab">
                    <p>{t("co2SensorIndexScore.tab4.description")}</p>
                  </div>
                  <div id="custom-tab5" className="tab-pane fade" role="tabpanel" aria-labelledby="custom-tab5-tab">
                    <p>{t("co2SensorIndexScore.tab5.description")}</p>
                  </div>
                  <div id="custom-tab6" className="tab-pane fade" role="tabpanel" aria-labelledby="custom-tab6-tab">
                    <p>{t("co2SensorIndexScore.tab6.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensor Calibration Section */}
      <section className="sensor-calibration-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sensor-calibration-heading">
                <h2>{t("co2SensorCalibration.heading")}</h2>
              </div>
            </div>
            <div className="col-md-9">
              <div className="calibration-para">
                <p>{t("co2SensorCalibration.description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="calibration-video">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/sensor-calibration-video.webp"
                  alt={t("co2SensorCalibration.imageAlt")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="app-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="app-heading">
                <h2>{t("co2SensorApplications.heading")}</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <ProductCarousel className="app-slider" showDots={true} arrows={false}>
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/01/Air-Filtration-Systems.webp"
                    alt="Air Filtration Systems"
                  />
                  <h3>{t("co2SensorApplications.applications.airFiltration.title")}</h3>
                  <p>{t("co2SensorApplications.applications.airFiltration.description")}</p>
                </div>
                <div className="slider-box">
                  <img src="https://www.pranaair.com/wp-content/uploads/2025/02/HVAC-Industry.webp" alt="HVAC Industry" />
                  <h3>{t("co2SensorApplications.applications.hvac.title")}</h3>
                  <p>{t("co2SensorApplications.applications.hvac.description")}</p>
                </div>
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/02/Research-Purposes.webp"
                    alt="Research Purposes"
                  />
                  <h3>{t("co2SensorApplications.applications.research.title")}</h3>
                  <p>{t("co2SensorApplications.applications.research.description")}</p>
                </div>
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/02/smoke-rises-from-factory-chimney-polluting-nature-generated-by-ai.webp"
                    alt="Landfill Gas Monitoring"
                  />
                  <h3>{t("co2SensorApplications.applications.landfill.title")}</h3>
                  <p>{t("co2SensorApplications.applications.landfill.description")}</p>
                </div>
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/02/young-women-using-home-technology.webp"
                    alt="Smart Homes"
                  />
                  <h3>{t("co2SensorApplications.applications.smartHomes.title")}</h3>
                  <p>{t("co2SensorApplications.applications.smartHomes.description")}</p>
                </div>
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/02/people-office-working-project.webp"
                    alt="Offices"
                  />
                  <h3>{t("co2SensorApplications.applications.offices.title")}</h3>
                  <p>{t("co2SensorApplications.applications.offices.description")}</p>
                </div>
              </ProductCarousel>
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="source-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="source-heading">
                <h2>{t("co2SensorSources.heading")}</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="manmade-heading">
                <h3>{t("co2SensorSources.manmadeHeading")}</h3>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row mob-row">
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src={t("co2SensorSources.manmadeSources.combustion.imageUrl") || "/placeholder.svg"}
                  alt={t("co2SensorSources.manmadeSources.combustion.alt")}
                />
                <h5>{t("co2SensorSources.manmadeSources.combustion.description")}</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src={t("co2SensorSources.manmadeSources.burning.imageUrl") || "/placeholder.svg"}
                  alt={t("co2SensorSources.manmadeSources.burning.alt")}
                />
                <h5>{t("co2SensorSources.manmadeSources.burning.description")}</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src={t("co2SensorSources.manmadeSources.industries.imageUrl") || "/placeholder.svg"}
                  alt={t("co2SensorSources.manmadeSources.industries.alt")}
                />
                <h5>{t("co2SensorSources.manmadeSources.industries.description")}</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src={t("co2SensorSources.manmadeSources.smoking.imageUrl") || "/placeholder.svg"}
                  alt={t("co2SensorSources.manmadeSources.smoking.alt")}
                />
                <h5>{t("co2SensorSources.manmadeSources.smoking.description")}</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="manmade-heading">
                <h3>{t("co2SensorSources.naturalHeading")}</h3>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row mob-row">
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src={t("co2SensorSources.naturalSources.carbonateRocks.imageUrl") || "/placeholder.svg"}
                  alt={t("co2SensorSources.naturalSources.carbonateRocks.alt")}
                />
                <h5>{t("co2SensorSources.naturalSources.carbonateRocks.description")}</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src={t("co2SensorSources.naturalSources.volcanicEruption.imageUrl") || "/placeholder.svg"}
                  alt={t("co2SensorSources.naturalSources.volcanicEruption.alt")}
                />
                <h5>{t("co2SensorSources.naturalSources.volcanicEruption.description")}</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src={t("co2SensorSources.naturalSources.glaciers.imageUrl") || "/placeholder.svg"}
                  alt={t("co2SensorSources.naturalSources.glaciers.alt")}
                />
                <h5>{t("co2SensorSources.naturalSources.glaciers.description")}</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src={t("co2SensorSources.naturalSources.petroleum.imageUrl") || "/placeholder.svg"}
                  alt={t("co2SensorSources.naturalSources.petroleum.alt")}
                />
                <h5>{t("co2SensorSources.naturalSources.petroleum.description")}</h5>
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
                <h2>{t("co2SensorTechnicalSpecifications.heading")}</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="construction-btn">
                <ul>
                  <li>
                    <a href="#">
                      {t("co2SensorTechnicalSpecifications.buttons.arduinoCode")}
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/12/tab-btn.png"
                        alt={t("co2SensorTechnicalSpecifications.buttons.linkIconAlt")}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pranaair.com/wp-content/uploads/2025/01/prana-air-pas-out-1-outdoor-pm-sensor-datasheet.pdf">
                      {t("co2SensorTechnicalSpecifications.buttons.datasheet")}
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/12/tab-btn.png"
                        alt={t("co2SensorTechnicalSpecifications.buttons.linkIconAlt")}
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
                    <h3>{t("co2SensorTechnicalSpecifications.specifications.productName.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("co2SensorTechnicalSpecifications.specifications.productName.value")}</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>{t("co2SensorTechnicalSpecifications.specifications.ratedVoltage.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("co2SensorTechnicalSpecifications.specifications.ratedVoltage.value")}</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>{t("co2SensorTechnicalSpecifications.specifications.communicationPortLevel.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("co2SensorTechnicalSpecifications.specifications.communicationPortLevel.value")}</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>{t("co2SensorTechnicalSpecifications.specifications.dimensions.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("co2SensorTechnicalSpecifications.specifications.dimensions.value")}</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>{t("co2SensorTechnicalSpecifications.specifications.particleSizeResolution.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("co2SensorTechnicalSpecifications.specifications.particleSizeResolution.value")}</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>{t("co2SensorTechnicalSpecifications.specifications.storageTemperature.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("co2SensorTechnicalSpecifications.specifications.storageTemperature.value")}</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>{t("co2SensorTechnicalSpecifications.specifications.workingTemperature.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("co2SensorTechnicalSpecifications.specifications.workingTemperature.value")}</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>{t("co2SensorTechnicalSpecifications.specifications.workingHumidity.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("co2SensorTechnicalSpecifications.specifications.workingHumidity.value")}</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>{t("co2SensorTechnicalSpecifications.specifications.ratedCurrent.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("co2SensorTechnicalSpecifications.specifications.ratedCurrent.value")}</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>{t("co2SensorTechnicalSpecifications.specifications.massConcentrationDataResolution.label")}</h3>
                  </li>
                  <li>
                    <h4>{t("co2SensorTechnicalSpecifications.specifications.massConcentrationDataResolution.value")}</h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="outdoor-bg-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/Dimensions-co2-sensor.webp"
                  alt={t("co2SensorTechnicalSpecifications.dimensionsImageAlt")}
                />
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
                <h2>{t("contactHeadingSensors.title")}</h2>
                <p>{t("contactHeadingSensors.description")}</p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm pageName="Carbon Dioxide Co2 Sensor Page" />
      </section>

      {/* You May Also Like Section */}
      <section className="also-like">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="also-like-heading">
                <h2>You may also like</h2>
              </div>
              <ProductCarousel className="allsensor-slide" showDots={true} arrows={false} >
                {sensors.map((sensor) => (
                  <div className="may-also" key={sensor.id}>
                    <a href="">
                      <img src={sensor.imageUrl || "/placeholder.svg"} alt={t(sensor.altKey)} />
                    </a>
                    <h5>
                      {t(sensor.titleKey)}
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png"
                        alt={t("relatedSensors.linkIconAlt")}
                      />
                    </h5>
                  </div>
                ))}
              </ProductCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
