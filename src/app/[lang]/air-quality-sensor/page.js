import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain } from "@/config"
// ✅ SEO Metadata
export async function generateMetadata() {
  const { t } = await getServerTranslation("air-quality-sensor");
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
export default async function AirQualitySensors() {
  const { t } = await getServerTranslation("air-quality-sensor")
  return (
    <div>
      {/* Banner Section */}
      <section
        className="monitor_banner_section"
        style={{
          backgroundImage:
            "url('https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-quality-sensor-board.jpeg')",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="monitor_banner_box">
                <h2>
                  <span style={{ fontSize: "24pt" }}>{t("airQualitySensorsBanner.companyName")}</span>
                </h2>
                <h2>
                  <span style={{ fontSize: "36pt" }}>{t("airQualitySensorsBanner.title")}</span>
                </h2>
                <span style={{ fontSize: "24pt" }}>{t("airQualitySensorsBanner.subtitle")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="qualitymonitor_heading_box air_first_heading text-center">
              <h1>
                <span style={{ fontSize: "18pt" }}>{t("airQualitySensorsIntro.title")}</span>
              </h1>
              <span style={{ fontSize: "12pt" }}>{t("airQualitySensorsIntro.subtitle")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p style={{ textAlign: "center" }}>{t("airQualitySensorsIntro.description")}</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container tab_aqi_section">
        <div className="row">
          <div className="col-md-12">
            <div className="all-sensor-tab">
              <ul className="nav nav-tabs" id="sensorTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="all-tab"
                    data-bs-toggle="tab"
                    href="#all"
                    role="tab"
                    aria-controls="all"
                    aria-selected="true"
                  >
                    {t("airQualitySensorsTabs.tabs.all")}
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="pm-tab"
                    data-bs-toggle="tab"
                    href="#pm"
                    role="tab"
                    aria-controls="pm"
                    aria-selected="false"
                  >
                    {t("airQualitySensorsTabs.tabs.pm")}
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="gases-tab"
                    data-bs-toggle="tab"
                    href="#gases"
                    role="tab"
                    aria-controls="gases"
                    aria-selected="false"
                  >
                    {t("airQualitySensorsTabs.tabs.gases")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content" id="sensorTabsContent">
              <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                <div className="ui-tabs-panel">
                  <div className="pocket_monitor_box">
                    <div className="pocket_monitor_img">
                      <Link href={`${domain}/air-quality-sensor/carbon-dioxide-co2-sensor`}>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-co2-sensor.png"
                          alt={t("airQualitySensorsTabs.sensors.co2.altText")}
                          width="100"
                          height="100"
                        />
                      </Link>
                    </div>
                    <div className="monitor_detail_box">
                      <h3>
                        <Link href={`${domain}/air-quality-sensor/carbon-dioxide-co2-sensor`}>
                          {t("airQualitySensorsTabs.sensors.co2.name")}</Link>
                      </h3>
                      <div className="rate_compare_box">{t("airQualitySensorsTabs.sensors.co2.price")}</div>
                      <ul className="product_feature_list">
                        <li>✓ {t("airQualitySensorsTabs.sensors.co2.features.range")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.co2.features.accuracy")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.co2.features.resolution")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.co2.features.type")}</li>
                      </ul>
                      <div className="monitor_btn_box">
                        <Link className="monitor_know_btn" href={`${domain}/air-quality-sensor/carbon-dioxide-co2-sensor`}>
                          {t("airQualitySensorsTabs.buttons.knowMore")}
                        </Link>
                        <form
                          className="cart"
                          action="https://www.pranaair.com/product/carbon-dioxide-sensor/"
                          encType="multipart/form-data"
                          method="post"
                        >
                          <button
                            className="single_add_to_cart_button button alt banner-btn"
                            name="add-to-cart"
                            type="submit"
                            value="15437"
                          >
                            {t("airQualitySensorsTabs.buttons.buyNow")}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="pocket_monitor_box">
                    <div className="pocket_monitor_img">
                      <Link href={`${domain}/air-quality-sensor/carbon-monoxide-co-sensor`}>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-co-sensor.png"
                          alt={t("airQualitySensorsTabs.sensors.co.altText")}
                          width="100"
                          height="100"
                        />
                      </Link>
                    </div>
                    <div className="monitor_detail_box">
                      <h3>
                        <Link href={`${domain}/air-quality-sensor/carbon-monoxide-co-sensor`}>{t("airQualitySensorsTabs.sensors.co.name")}</Link>
                      </h3>
                      <div className="rate_compare_box">{t("airQualitySensorsTabs.sensors.co.price")}</div>
                      <ul className="product_feature_list">
                        <li>✓ {t("airQualitySensorsTabs.sensors.co.features.range")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.co.features.powerConsumption")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.co.features.resolution")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.co.features.responseTime")}</li>
                      </ul>
                      <div className="monitor_btn_box">
                        <Link className="monitor_know_btn" href={`${domain}/air-quality-sensor/carbon-monoxide-co-sensor`}>
                          {t("airQualitySensorsTabs.buttons.knowMore")}
                        </Link>
                        <a className="monitor_know_btn monitor_card_btn" href="#">
                          {t("airQualitySensorsTabs.buttons.buyNow")}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pocket_monitor_box">
                    <div className="pocket_monitor_img">
                      <Link href={`${domain}/air-quality-sensor/sulfur-dioxide-so2-sensor`}>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-so2-sensor.png"
                          alt={t("airQualitySensorsTabs.sensors.so2.altText")}
                          width="100"
                          height="100"
                        />
                      </Link>
                    </div>
                    <div className="monitor_detail_box">
                      <h3>
                        <Link href={`${domain}/air-quality-sensor/sulfur-dioxide-so2-sensor`}>{t("airQualitySensorsTabs.sensors.so2.name")}</Link>
                      </h3>
                      <div className="rate_compare_box">{t("airQualitySensorsTabs.sensors.so2.price")}</div>
                      <ul className="product_feature_list">
                        <li>✓ {t("airQualitySensorsTabs.sensors.so2.features.range")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.so2.features.powerConsumption")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.so2.features.resolution")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.so2.features.responseTime")}</li>
                      </ul>
                      <div className="monitor_btn_box">
                        <Link className="monitor_know_btn" href={`${domain}/air-quality-sensor/sulfur-dioxide-so2-sensor`}>
                          {t("airQualitySensorsTabs.buttons.knowMore")}
                        </Link>
                        <a className="monitor_know_btn monitor_card_btn" href="#">
                          {t("airQualitySensorsTabs.buttons.buyNow")}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pocket_monitor_box">
                    <div className="pocket_monitor_img">
                      <Link href={`${domain}/air-quality-sensor/nitrogen-dioxide-no2-sensor`}>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-no2-sensor.png"
                          alt={t("airQualitySensorsTabs.sensors.no2.altText")}
                          width="100"
                          height="100"
                        />
                      </Link>
                    </div>
                    <div className="monitor_detail_box">
                      <h3>
                        <Link href={`${domain}/air-quality-sensor/nitrogen-dioxide-no2-sensor`}>{t("airQualitySensorsTabs.sensors.no2.name")}</Link>
                      </h3>
                      <div className="rate_compare_box">{t("airQualitySensorsTabs.sensors.no2.price")}</div>
                      <ul className="product_feature_list">
                        <li>✓ {t("airQualitySensorsTabs.sensors.no2.features.pmRange")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.no2.features.particleSize")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.no2.features.purpose")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.no2.features.workingTemp")}</li>
                      </ul>
                      <div className="monitor_btn_box">
                        <Link className="monitor_know_btn" href={`${domain}/air-quality-sensor/nitrogen-dioxide-no2-sensor`}>
                          {t("airQualitySensorsTabs.buttons.knowMore")}
                        </Link>
                        <Link
                          className="monitor_know_btn monitor_card_btn"
                          href={`${domain}/air-quality-sensor/nitrogen-dioxide-no2-sensor`}
                        >
                          {t("airQualitySensorsTabs.buttons.buyNow")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="pm" role="tabpanel" aria-labelledby="pm-tab">
                <div className="ui-tabs-panel">
                  <div className="pocket_monitor_box">
                    <div className="pocket_monitor_img">
                      <Link href={`${domain}/air-quality-sensor/indoor-pm-sensor`}>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-indoor-pm-sensor.png"
                          alt={t("airQualitySensorsTabs.sensors.indoorPM.altText")}
                          width="100"
                          height="100"
                        />
                      </Link>
                    </div>
                    <div className="monitor_detail_box">
                      <h3>
                        <Link href={`${domain}/air-quality-sensor/indoor-pm-sensor`}>{t("airQualitySensorsTabs.sensors.indoorPM.name")}</Link>
                      </h3>
                      <div className="rate_compare_box">{t("airQualitySensorsTabs.sensors.indoorPM.price")}</div>
                      <ul className="product_feature_list">
                        <li>✓ {t("airQualitySensorsTabs.sensors.indoorPM.features.pmRange")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.indoorPM.features.resolution")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.indoorPM.features.purpose")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.indoorPM.features.workingTemp")}</li>
                      </ul>
                      <div className="monitor_btn_box">
                        <Link className="monitor_know_btn" href={`${domain}/air-quality-sensor/indoor-pm-sensor`}>
                          {t("airQualitySensorsTabs.buttons.knowMore")}
                        </Link>
                        <a className="monitor_know_btn monitor_card_btn" href="#">
                          {t("airQualitySensorsTabs.buttons.buyNow")}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pocket_monitor_box">
                    <div className="pocket_monitor_img">
                      <Link href={`${domain}/air-quality-sensor/outdoor-pm-sensor`}>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2021/03/outdoor-pm2.5-sensor.png"
                          alt={t("airQualitySensorsTabs.sensors.outdoorPM.altText")}
                        />
                      </Link>
                    </div>
                    <div className="monitor_detail_box">
                      <h3>
                        <Link href={`${domain}/air-quality-sensor/outdoor-pm-sensor`}>{t("airQualitySensorsTabs.sensors.outdoorPM.name")}</Link>
                      </h3>
                      <span className="rating_box">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2021/02/rating_img-1.png"
                          alt={t("airQualitySensorsTabs.common.ratingAlt")}
                        />
                      </span>
                      <small className="price_tag">23%</small>
                      <div className="rate_compare_box">{t("airQualitySensorsTabs.sensors.outdoorPM.price")}</div>
                      <ul className="product_feature_list">
                        <li>✓ {t("airQualitySensorsTabs.sensors.outdoorPM.features.pmRange")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.outdoorPM.features.resolution")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.outdoorPM.features.purpose")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.outdoorPM.features.workingTemp")}</li>
                      </ul>
                      <div className="monitor_btn_box">
                        <Link className="monitor_know_btn" href={`${domain}/air-quality-sensor/outdoor-pm-sensor`}>
                          {t("airQualitySensorsTabs.buttons.knowMore")}
                        </Link>
                        <a className="monitor_know_btn monitor_card_btn" href="#">
                          {t("airQualitySensorsTabs.buttons.buyNow")}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="gases" role="tabpanel" aria-labelledby="gases-tab">
                <div className="ui-tabs-panel">
                  <div className="pocket_monitor_box">
                    <div className="pocket_monitor_img">
                      <Link href={`${domain}/air-quality-sensor/carbon-dioxide-co2-sensor`}>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-co2-sensor.png"
                          alt={t("airQualitySensorsTabs.sensors.co2.altText")}
                          width="100"
                          height="100"
                        />
                      </Link>
                    </div>
                    <div className="monitor_detail_box">
                      <h3>
                        <Link href={`${domain}/air-quality-sensor/carbon-dioxide-co2-sensor`}>{t("airQualitySensorsTabs.sensors.co2.name")}</Link>
                      </h3>
                      <span className="rating_box">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2021/02/rating_img-1.png"
                          alt={t("airQualitySensorsTabs.common.ratingAlt")}
                        />
                      </span>
                      <small className="price_tag">23%</small>
                      <div className="rate_compare_box">{t("airQualitySensorsTabs.sensors.co2.price")}</div>
                      <ul className="product_feature_list">
                        <li>✓ {t("airQualitySensorsTabs.sensors.co2.features.range")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.co2.features.accuracy")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.co2.features.resolution")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.co2.features.type")}</li>
                      </ul>
                      <div className="monitor_btn_box">
                        <Link className="monitor_know_btn" href={`${domain}/air-quality-sensor/carbon-dioxide-co2-sensor`}>
                          {t("airQualitySensorsTabs.buttons.knowMore")}
                        </Link>
                        <button className="single_add_to_cart_button button alt banner-btn">
                          {t("airQualitySensorsTabs.buttons.buyNow")}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pocket_monitor_box">
                    <div className="pocket_monitor_img">
                      <Link href={`${domain}/air-quality-sensor/carbon-monoxide-co-sensor`}>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-co-sensor.png"
                          alt={t("airQualitySensorsTabs.sensors.co.altText")}
                          width="100"
                          height="100"
                        />
                      </Link>
                    </div>
                    <div className="monitor_detail_box">
                      <h3>
                        <Link href={`${domain}/air-quality-sensor/carbon-monoxide-co-sensor`}>{t("airQualitySensorsTabs.sensors.co.name")}</Link>
                      </h3>
                      <span className="rating_box">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2021/02/rating_img-1.png"
                          alt={t("airQualitySensorsTabs.common.ratingAlt")}
                        />
                      </span>
                      <small className="price_tag">23%</small>
                      <div className="rate_compare_box">{t("airQualitySensorsTabs.sensors.co.price")}</div>
                      <ul className="product_feature_list">
                        <li>✓ {t("airQualitySensorsTabs.sensors.co.features.range")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.co.features.powerConsumption")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.co.features.resolution")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.co.features.responseTime")}</li>
                      </ul>
                      <div className="monitor_btn_box">
                        <Link className="monitor_know_btn" href={`${domain}/air-quality-sensor/carbon-monoxide-co-sensor`}>
                          {t("airQualitySensorsTabs.buttons.knowMore")}
                        </Link>
                        <a className="monitor_know_btn monitor_card_btn" href="#">
                          {t("airQualitySensorsTabs.buttons.buyNow")}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pocket_monitor_box">
                    <div className="pocket_monitor_img">
                      <Link href={`${domain}/air-quality-sensor/sulfur-dioxide-so2-sensor`}>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-so2-sensor.png"
                          alt={t("airQualitySensorsTabs.sensors.so2.altText")}
                          width="100"
                          height="100"
                        />
                      </Link>
                    </div>
                    <div className="monitor_detail_box">
                      <h3>
                        <Link href={`${domain}/air-quality-sensor/sulfur-dioxide-so2-sensor`}>{t("airQualitySensorsTabs.sensors.so2.name")}</Link>
                      </h3>
                      <span className="rating_box">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2021/02/rating_img-1.png"
                          alt={t("airQualitySensorsTabs.common.ratingAlt")}
                        />
                      </span>
                      <small className="price_tag">23%</small>
                      <div className="rate_compare_box">{t("airQualitySensorsTabs.sensors.so2.price")}</div>
                      <ul className="product_feature_list">
                        <li>✓ {t("airQualitySensorsTabs.sensors.so2.features.range")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.so2.features.powerConsumption")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.so2.features.resolution")}</li>
                        <li>✓ {t("airQualitySensorsTabs.sensors.so2.features.responseTime")}</li>
                      </ul>
                      <div className="monitor_btn_box">
                        <Link className="monitor_know_btn" href={`${domain}/air-quality-sensor/sulfur-dioxide-so2-sensor`}>
                          {t("airQualitySensorsTabs.buttons.knowMore")}
                        </Link>
                        <a className="monitor_know_btn monitor_card_btn" href="#">
                          {t("airQualitySensorsTabs.buttons.buyNow")}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Prana Air Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="qualitymonitor_heading_box italic_para text-center">
              <h2>{t("whyChoosePranaSensors.title")}</h2>
              <p>{t("whyChoosePranaSensors.description")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="monitor_feature_box green_border">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/structure-design-icon.png"
                alt={t("whyChoosePranaSensors.features.structuredDesign.altText")}
              />
              <h4>{t("whyChoosePranaSensors.features.structuredDesign.title")}</h4>
              <p style={{ textAlign: "justify" }}>{t("whyChoosePranaSensors.features.structuredDesign.description")}</p>
            </div>

            <div className="monitor_feature_box red_border">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/highly-receptive-icon.png"
                alt={t("whyChoosePranaSensors.features.highlyReceptive.altText")}
              />
              <h4>{t("whyChoosePranaSensors.features.highlyReceptive.title")}</h4>
              <p style={{ textAlign: "justify" }}>{t("whyChoosePranaSensors.features.highlyReceptive.description")}</p>
            </div>

            <div className="monitor_feature_box yellow_border">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/rohs-compliant-icon.png"
                alt={t("whyChoosePranaSensors.features.rohsCompliant.altText")}
              />
              <h4>{t("whyChoosePranaSensors.features.rohsCompliant.title")}</h4>
              <p style={{ textAlign: "justify" }}>{t("whyChoosePranaSensors.features.rohsCompliant.description")}</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="monitor_feature_box purple_border">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/sturdy-build-icon.png"
                alt={t("whyChoosePranaSensors.features.sturdyBuilt.altText")}
              />
              <h4>{t("whyChoosePranaSensors.features.sturdyBuilt.title")}</h4>
              <p style={{ textAlign: "justify" }}>{t("whyChoosePranaSensors.features.sturdyBuilt.description")}</p>
            </div>

            <div className="monitor_feature_box pink_border">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/low-carbon-sensor-icon.png"
                alt={t("whyChoosePranaSensors.features.lowCarbonSensors.altText")}
              />
              <h4>{t("whyChoosePranaSensors.features.lowCarbonSensors.title")}</h4>
              <p style={{ textAlign: "justify" }}>{t("whyChoosePranaSensors.features.lowCarbonSensors.description")}</p>
            </div>

            <div className="monitor_feature_box blue_border">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/individually-calibrated-sensor.png"
                alt={t("whyChoosePranaSensors.features.individuallyCalibrated.altText")}
              />
              <h4>{t("whyChoosePranaSensors.features.individuallyCalibrated.title")}</h4>
              <p style={{ textAlign: "justify" }}>
                {t("whyChoosePranaSensors.features.individuallyCalibrated.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "18pt" }}>Prana Air Sensor Calibration</span>
            </h3>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/yYrY2ws31-Y"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      {/* Data Accuracy Section */}
      <div className="row data_accuracy_section">
        <div className="col-md-6">
          <div className="quality_real_box">
            <h3>{t("sensorCalibration.dataAccuracy.heading")}</h3>
            <h2>{t("sensorCalibration.dataAccuracy.subheading")}</h2>
            <Link className="discover_btn" href={`${domain}/air-quality-data-accuracy`}>
              {t("sensorCalibration.dataAccuracy.discoverButton")}
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="dataauracy_img_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2023/03/air-quality-data-accuracy.png"
              alt={t("sensorCalibration.dataAccuracy.altTexts.accuracyImage")}
            />
            <Link className="discover_btn accuracy_btn" href={`${domain}/air-quality-data-accuracy`}>
              {t("sensorCalibration.dataAccuracy.accuracyButton")}
            </Link>
          </div>
        </div>
      </div>

      {/* Accuracy Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="qualitymonitor_heading_box text-center">
              <h2>{t("sensorCalibration.accuracySection.title")}</h2>
              <p>{t("sensorCalibration.accuracySection.subtitle")}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="comparison_graph_img">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/pm2.5-comparison-BAM-vs-Prana-Air-sensor.png"
                alt={t("sensorCalibration.accuracySection.altTexts.comparisonGraph")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* PCB Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="qualitymonitor_heading_box text-center">
              <h2>{t("airQualityPcbs.title")}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p style={{ textAlign: "center" }}>
              <Link href={`${domain}/air-quality-pcb-board`}>
                <img
                  className="img-responsive center-block"
                  src="https://www.pranaair.com/wp-content/uploads/2021/09/air-quality-sensor-pcb-board-scaled.jpg"
                  alt={t("airQualityPcbs.altTexts.pcbBoard")}
                />
              </Link>
            </p>
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
      <ContactForm pageName="Air Quality Sensor Page" />

      {/* Trusted By Section */}
      <section className="trust-sec">
        <div className="container">
          <div className="row ourclient_section">
            <div className="col-md-12">
              <h2 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>{t("trustedBy.title")}</span>
              </h2>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "18pt" }}>{t("trustedBy.description")}</span>
              </p>
            </div>
            <div className="col-md-12">
              <div className="our_client_box">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/03/csir-logo.png"
                      alt="Prana Air client csir"
                      width="220"
                      height="auto"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/03/iit-varanasi-logo.png"
                      alt="Prana Air client iit varanasi"
                      width="220"
                      height="auto"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/03/iit-varanasi-logo.png"
                      alt="Prana Air client iit roorkee"
                      width="220"
                      height="auto"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/03/iit-hyderabad-logo.png"
                      alt="Prana Air client iit hyderabad"
                      width="220"
                      height="auto"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/03/iit-dhanbad-logo.png"
                      alt="Prana Air client iit dhanbad"
                      width="220"
                      height="auto"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/03/iit-bombay-logo.png"
                      alt="Prana Air client iit bombay"
                      width="220"
                      height="auto"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/03/dae-logo.png"
                      alt="Prana Air client dae"
                      width="220"
                      height="auto"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/03/ola-logo.png"
                      alt="Prana Air client ola"
                      width="220"
                      height="auto"
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
