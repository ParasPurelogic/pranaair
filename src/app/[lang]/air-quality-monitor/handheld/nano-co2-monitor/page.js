import ProductNavbar from "@/Components/Pages/NanoCo2monitor/product-navbar"
import "./style.css"
import ProductGalleryTabs from "@/Components/Pages/NanoCo2monitor/product-gallery-tabs"
import CO2MonitorSlider from "@/Components/Pages/NanoCo2monitor/co2-monitor-slider"
import FaqAccordionCO2 from "@/Components/Pages/NanoCo2monitor/faq-accordion-co2"
import { getServerTranslation } from "@/i18n/server"
import { domain, supportedLanguages } from "@/config"

// ✅ SEO Metadata
export async function generateMetadata({ params }) {
  const lang = params?.lang || "en";
  const slug = "air-quality-monitor"; // page-specific slug
  const { t } = await getServerTranslation("nano-co2");
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
export default async function NanoCO2MonitorPage() {
  const { t } = await getServerTranslation("nano-co2")
  const nanocoSliderContent = [
    {
      id: 1,
      image: "https://www.pranaair.com/wp-content/uploads/2023/06/portable-nano-co2-monitor-of-prana-air.jpg",
      heading: t("slider.slide1.heading"),
      paragraph: t("slider.slide1.paragraph"),
    },
    {
      id: 2,
      image: "https://www.pranaair.com/wp-content/uploads/2023/06/easy-to-use-anywhere-prana-air-co2-monitor.jpg",
      heading: t("slider.slide2.heading"),
      paragraph: t("slider.slide2.paragraph"),
    },
  ]
  const faqs = [
    {
      id: "faq1",
      question: t("faqs.faq1.question"),
      answer: t("faqs.faq1.answer"),
    },
    {
      id: "faq2",
      question: t("faqs.faq2.question"),
      answer: t("faqs.faq2.answer"),
    },
    {
      id: "faq3",
      question: t("faqs.faq3.question"),
      answer: t("faqs.faq3.answer"),
    },
    {
      id: "faq4",
      question: t("faqs.faq4.question"),
      answer: t("faqs.faq4.answer"),
    },
    {
      id: "faq5",
      question: t("faqs.faq5.question"),
      answer: t("faqs.faq5.answer"),
    },
    {
      id: "faq6",
      question: t("faqs.faq6.question"),
      answer: t("faqs.faq6.answer"),
    },
  ]
  return (
    <main className="nano-co2-monitor-page">
      {/* Sticky Navigation Bar */}
      <ProductNavbar />

      {/* SECTION 1: Product Overview */}
      <section className="product-overview" id="Overview">
        <div className="container">
          <div className="row align-items-stretch">
            {/* Product Gallery */}
            <div className="col-lg-4">
              <ProductGalleryTabs />
            </div>
            <div className="col-lg-4">
              <div className="product-info">
                <h1 className="product-title">{t("productInfo.title")}</h1>
                <p className="product-subtitle">{t("productInfo.subtitle")}</p>

                <div className="product-price">
                  <span className="price-label">{t("productInfo.priceLabel")}</span>
                  <span className="price-value">{t("productInfo.priceValue")}</span>
                </div>

                <div className="product-description">
                  <p>{t("productInfo.description")}</p>
                </div>
              </div>
            </div>
            {/* Product Information */}
            <div className="col-lg-4">
              <div className="product-options">
                <div className="option-group">
                  <label>{t("productOptions.modelLabel")}</label>
                  <div className="select-wrapper">
                    <select className="form-select">
                      <option>{t("productOptions.models.nanoCO2")}</option>
                      <option>{t("productOptions.models.nanoCO")}</option>
                      <option>{t("productOptions.models.nanoTVOC")}</option>
                    </select>
                  </div>
                </div>

                <div className="option-group">
                  <label>{t("productOptions.quantityLabel")}</label>
                  <input type="number" className="form-control" min="1" defaultValue="1" />
                </div>

                <form
                  className="cart new-cart"
                  action="https://www.pranaair.com/air-quality-monitor/handheld/nano-co2-monitor/"
                  method="post"
                  encType="multipart/form-data"
                >
                  <button
                    type="submit"
                    name="add-to-cart"
                    value="77731"
                    className="single_add_to_cart_button button alt"
                  >
                    {t("productOptions.buyNowButton")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CO2 Monitoring Banner */}
      <section className="new-monitor-section-feature">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">{/* This div will contain the background image */}</div>
            <div className="col-lg-6 col-md-12">
              <div className="monitor_right_box">
                <h2>{t("monitoringBanner.title")}</h2>
                <p>{t("monitoringBanner.description")}</p>
                <ul className="monitor_features">
                  <li>
                    <div className="feature-icon-circle">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/running-fitness-icon.png"
                        alt="use for fitness icon"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon-circle">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/cycing-icon.png"
                        alt="cycling use icon"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon-circle">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/work-out-icon.png"
                        alt="work out icon"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon-circle">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/working-in-office-icon.png"
                        alt="use for office work icon"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="monitor_section qualitative_feature_sec" id="Features">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="Qualitativ_feature_box feature-icon">
                <h2>{t("features.title")}</h2>
                <p>{t("features.description")}</p>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/co2-real-time-icon.png"
                      alt="Real-time CO2 Monitoring"
                    />
                  </div>
                  <div className="feature-text">
                    <span>{t("features.items.realTime")}</span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img src="https://www.pranaair.com/wp-content/uploads/2023/06/ndir.png" alt="NDIR Technology" />
                  </div>
                  <div className="feature-text">
                    <span>{t("features.items.ndir")}</span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/mini-device-icon.png"
                      alt="Mini & Portable Device"
                    />
                  </div>
                  <div className="feature-text">
                    <span>{t("features.items.portable")}</span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/hd-clr-icon.png"
                      alt="HD Color Display"
                    />
                  </div>
                  <div className="feature-text">
                    <span>{t("features.items.display")}</span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/mah-battery-icon.png"
                      alt="700 mAh Lithium battery"
                    />
                  </div>
                  <div className="feature-text">
                    <span>{t("features.items.battery")}</span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/c-type-icon.png"
                      alt="Type-C interface"
                    />
                  </div>
                  <div className="feature-text">
                    <span>{t("features.items.interface")}</span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/dynamic-ui-icon-1.png"
                      alt="Dynamic UI"
                    />
                  </div>
                  <div className="feature-text">
                    <span>{t("features.items.ui")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra High Definition Display */}
      <section className="monitor_section ultra_high_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-ultra-hd-screen.png"
                alt="Ultra HD Display"
                className="img-fluid hd-img-device"
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="ultra_heading">
                <h2 className="display-title">
                  <span className="inch_text">{t("ultraHD.inch")}</span>
                  {t("ultraHD.title")}
                </h2>
                <p>{t("ultraHD.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Handy & Portable */}
      <section className="handy-portable-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="handy-box">
                <div className="handy-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-handy-nano-co2-monitor.png"
                    alt="Hand holding Prana Air Nano CO2 monitor"
                    className="img-fluid"
                  />
                </div>
                <div className="handy-content">
                  <h3>{t("handyPortable.handy.title")}</h3>
                  <p>{t("handyPortable.handy.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="portable-box">
                <div className="portable-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-portable-co2-monitor.png"
                    alt="Prana Air Nano CO2 monitor with lanyard"
                    className="img-fluid"
                  />
                </div>
                <div className="portable-content">
                  <h3>{t("handyPortable.portable.title")}</h3>
                  <p>{t("handyPortable.portable.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Carbon Dioxide in the respiratory environment */}
      <section className="environment_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="carbon_dioxide_box">
                <h2>{t("respiratoryEnvironment.title")}</h2>
                <h3>{t("respiratoryEnvironment.subtitle")}</h3>
                <p>{t("respiratoryEnvironment.description")}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="respiratory-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/health-effects-of-co2-gas.jpeg"
                  alt="Carbon Dioxide in respiratory environment"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="health-hazards">
                <h3 className="health_head">
                  {t("respiratoryEnvironment.healthHazards.title")}{" "}
                  <span className="highlight_text">{t("respiratoryEnvironment.healthHazards.highlight")}</span>
                </h3>
                <div className="hazard-grid">
                  <div className="hazard-item">
                    <div className="hazard-icon">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/Feeling-sleepy-and-drowsy.png"
                        alt="Feeling sleepy and drowsy"
                      />
                    </div>
                    <div className="hazard-content">
                      <h4>{t("respiratoryEnvironment.healthHazards.hazards.sleepy.title")}</h4>
                      <div className="hazard-level">
                        <span>{t("respiratoryEnvironment.healthHazards.hazards.sleepy.level")}</span>
                        <div className="hazard-indicator yellow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="hazard-item">
                    <div className="hazard-icon">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/smooth-breathing-icon.png"
                        alt="Smooth Breathing"
                      />
                    </div>
                    <div className="hazard-content">
                      <h4>{t("respiratoryEnvironment.healthHazards.hazards.breathing.title")}</h4>
                      <div className="hazard-level">
                        <span>{t("respiratoryEnvironment.healthHazards.hazards.breathing.level")}</span>
                        <div className="hazard-indicator green"></div>
                      </div>
                    </div>
                  </div>
                  <div className="hazard-item">
                    <div className="hazard-icon">
                      <img src="https://www.pranaair.com/wp-content/uploads/2023/06/headache.png" alt="Headache" />
                    </div>
                    <div className="hazard-content">
                      <h4>{t("respiratoryEnvironment.healthHazards.hazards.headache.title")}</h4>
                      <div className="hazard-level">
                        <span>{t("respiratoryEnvironment.healthHazards.hazards.headache.level")}</span>
                        <div className="hazard-indicator orange"></div>
                      </div>
                    </div>
                  </div>
                  <div className="hazard-item">
                    <div className="hazard-icon">
                      <img src="https://www.pranaair.com/wp-content/uploads/2023/06/brain.png" alt="Brain damage" />
                    </div>
                    <div className="hazard-content">
                      <h4>{t("respiratoryEnvironment.healthHazards.hazards.brainDamage.title")}</h4>
                      <div className="hazard-level">
                        <span>{t("respiratoryEnvironment.healthHazards.hazards.brainDamage.level")}</span>
                        <div className="hazard-indicator red"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Small, Sleek, Reliable */}
      <section className="slider_section">
        <CO2MonitorSlider nanocoSliderContent={nanocoSliderContent} />
      </section>

      {/* SECTION 8: Banner Image */}
      <section className="image_responsive_sec">
        <img
          src="https://www.pranaair.com/wp-content/uploads/2023/06/measuring-co2-level-in-office-with-prana-air-device.jpeg"
          alt="CO2 Monitor Banner"
          className="img-fluid banner-outdoor"
        />
      </section>

      {/* SECTION 9: Real-time CO2 Air quality monitoring */}
      <section className="minigraph_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="mini-co-monitoring-keychain">
                <div className="monitior-heading">
                  <h3>{t("realTimeMonitoring.title")}</h3>
                  <h4>{t("realTimeMonitoring.subtitle")}</h4>
                </div>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/air-quality-monitoring-co2-gas.png"
                  alt="co2 air quality monitor graph"
                  className="img-fluid"
                />
                <ul className="dot-icon">
                  <li>
                    <h3>
                      CO<sub>2</sub> {t("realTimeMonitoring.indicators.co2Level")}
                    </h3>
                  </li>
                  <li>
                    <h3>{t("realTimeMonitoring.indicators.occupancy")}</h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="Qualitativ_feature_box mini-co2">
                <h3>{t("realTimeMonitoring.detection.title")}</h3>
                <h2>
                  CO<sub>2</sub> {t("realTimeMonitoring.detection.subtitle")}
                </h2>
                <p>{t("realTimeMonitoring.detection.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: NDIR Technology */}
      <section>
        <div className="container">
          <div className="ndirtechnology_box text-center electrochecmial-para">
            <h5 className="heading-bg">{t("ndirTechnology.heading")}</h5>
            <h4>{t("ndirTechnology.subtitle")}</h4>
            <p>{t("ndirTechnology.description")}</p>
          </div>
        </div>
      </section>

      {/* SECTION 11: High-sensitive Smart Chip */}
      <section className="highsensitive_section mob-revers">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="high_sensitive_box">
                <h3>
                  {t("smartChip.title")} <span className="blue_head">{t("smartChip.highlight")}</span>
                </h3>
                <h4>{t("smartChip.subtitle")}</h4>
                <p>{t("smartChip.description")}</p>
                <ul className="sensitive_list">
                  <li>{t("smartChip.features.sensitivity")}</li>
                  <li>{t("smartChip.features.speed")}</li>
                  <li>{t("smartChip.features.accuracy")}</li>
                  <li>{t("smartChip.features.efficiency")}</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 sensitive_bg_image">
              <div className="chip-sensor-img floating">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/smart-chip-for-prana-air-co2-monitor.png"
                  alt="Smart Chip Sensor"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Attractive details */}
      <section>
        <div className="container">
          <h2 className="sub_heading">{t("attractiveDetails.heading")}</h2>
          <div className="row product_grid_section">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="attractive_box interface_box">
                <div className="top_head">
                  <span className="range_no">{t("attractiveDetails.typeC.number")}</span>
                  <h4>
                    {t("attractiveDetails.typeC.title")}{" "}
                    <span className="detail_text">{t("attractiveDetails.typeC.subtitle")}</span>
                  </h4>
                </div>
                <img
                  className="type-c"
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor-type-c-charging.png"
                  alt="prana air nano co2 monitor type-c charging"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="attractive_box anti_box">
                <div className="top_head">
                  <span className="range_no">{t("attractiveDetails.lanyard.number")}</span>
                  <h4>
                    {t("attractiveDetails.lanyard.title")}{" "}
                    <span className="detail_text">{t("attractiveDetails.lanyard.subtitle")}</span>
                  </h4>
                </div>
                <img
                  className="landyard"
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-co2-monitor-lanyard.png"
                  alt="prana air co2 monitor lanyard"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="attractive_box">
                <div className="top_head">
                  <span className="range_no">{t("attractiveDetails.screen.number")}</span>
                  <h4>
                    {t("attractiveDetails.screen.title")}{" "}
                    <span className="detail_text">{t("attractiveDetails.screen.subtitle")}</span>
                  </h4>
                </div>
                <img
                  className="ultra-hd"
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-ultra-hd-screen.png"
                  alt="prana air nano co2 monitor hd screen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: Product Key functions */}
      <section className="product_key_section" id="Functions">
        <div className="container">
          <h2 className="sub_heading">{t("productKeyFunctions.heading")}</h2>
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
              <div className="product-key-img text-center">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor-key-functions.png"
                  alt="Product Key Functions"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="product-key-functions">
                <div className="key-function-item d-flex mb-4">
                  <div className="key-function-image me-3">
                    <img
                      className="d-none d-md-block"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/on-off-key.png"
                      alt="on off key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <img
                      className="d-block d-md-none"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/mob-brightness-btn.png"
                      alt="brightness key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="key-function-text">
                    <h3 className="mb-0 fs-5">{t("productKeyFunctions.onOff")}</h3>
                  </div>
                </div>

                <div className="key-function-item d-flex mb-4 calibration">
                  <div className="key-function-image me-3">
                    <img
                      className="d-none d-md-block"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/auto-calibration-key.png"
                      alt="auto calibration key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <img
                      className="d-block d-md-none"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/mob-power-btn.png"
                      alt="power button key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="key-function-text">
                    <h3 className="mb-0 fs-5">{t("productKeyFunctions.calibration")}</h3>
                  </div>
                </div>

                <div className="key-function-item d-flex brightness">
                  <div className="key-function-image me-3">
                    <img
                      className="d-none d-md-block"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/bright-adjust-key.png"
                      alt="brightness adjust key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <img
                      className="d-block d-md-none"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/auto-btn.png"
                      alt="auto calibration key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="key-function-text">
                    <h3 className="mb-0 fs-5">{t("productKeyFunctions.brightness")}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: Battery Capacity */}
      <section className="capacity_polymer_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="Qualitativ_feature_box">
                <h2>{t("batteryCapacity.title")}</h2>
                <span className="battery_text">{t("batteryCapacity.subtitle")}</span>
                <p>{t("batteryCapacity.description")}</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 capacity_img">
              <div className="battery-device-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/long-battery-life-of-prana-air-co2-monitor.png"
                  alt="Battery Capacity"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15: Technical Specifications */}
      <section className="technical-specification" id="Tech-Specs">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="attractive-txt product-specification-heading">
                <h3>{t("technicalSpecifications.title")}</h3>
                <h4>{t("technicalSpecifications.subtitle")}</h4>
              </div>
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="brochore-btn">
                <a href="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor-brochure.pdf">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/05/brochore-btn.png" alt="brochore-btn" />{" "}
                  {t("technicalSpecifications.downloadBrochure")}
                </a>
              </div>
            </div>
          </div>

          <div className="row mid-box">
            <div className="col-lg-4 col-md-12 box-line">
              <div className="product-specifi">
                {t("technicalSpecifications.specs.productName.label")}
                <h4>{t("technicalSpecifications.specs.productName.value")}</h4>
              </div>
              <div className="product-specifi">
                {t("technicalSpecifications.specs.warmupTime.label")}
                <h4>{t("technicalSpecifications.specs.warmupTime.value")}</h4>
              </div>
              <div className="product-specifi">
                {t("technicalSpecifications.specs.workingTemp.label")}
                <h4>{t("technicalSpecifications.specs.workingTemp.value")}</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 box-line">
              <div className="product-specifi">
                {t("technicalSpecifications.specs.detectionRange.label")}
                <h4>{t("technicalSpecifications.specs.detectionRange.value")}</h4>
              </div>
              <div className="product-specifi">
                {t("technicalSpecifications.specs.refreshRate.label")}
                <h4>{t("technicalSpecifications.specs.refreshRate.value")}</h4>
              </div>
              <div className="product-specifi">
                {t("technicalSpecifications.specs.chargingMode.label")}
                <h4>{t("technicalSpecifications.specs.chargingMode.value")}</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 box-line">
              <div className="product-specifi">
                {t("technicalSpecifications.specs.workingVoltage.label")}
                <h4>{t("technicalSpecifications.specs.workingVoltage.value")}</h4>
              </div>
              <div className="product-specifi">
                {t("technicalSpecifications.specs.operatingHumidity.label")}
                <h4>{t("technicalSpecifications.specs.operatingHumidity.value")}</h4>
              </div>
              <div className="product-specifi">
                {t("technicalSpecifications.specs.dimensions.label")}
                <h4>{t("technicalSpecifications.specs.dimensions.value")}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 16: Banner Image */}
      <section className="image_responsive_sec">
        <img
          src="https://www.pranaair.com/wp-content/uploads/2023/06/monitoring-real-time-co2-gas-level-in-restaurant.jpeg"
          alt="CO2 Monitor Banner"
          className="img-fluid party-outdoor-img"
        />
      </section>

      {/* SECTION 17: Intelligent Alarm System */}
      <section className="intelligent-alarm-system" id="Alarm">
        <div className="container">
          <div className="intelligent-alarm-container">
            <div className="alarm-device-container">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/alert-of-alarm-system-in-prana-air-co2-monitor.png"
                alt="Intelligent Alarm System"
                className="alarm-device-image"
              />
              <div className="sound-waves">
                <div className="sound-wave"></div>
                <div className="sound-wave"></div>
                <div className="sound-wave"></div>
              </div>
            </div>
            <div className="alarm-content">
              <h3 className="alarm-title">{t("intelligentAlarm.title")}</h3>
              <h2 className="alarm-subtitle">
                <span className="highlight">{t("intelligentAlarm.highlight")}</span> {t("intelligentAlarm.subtitle")}
              </h2>

              <div className="alarm-description">
                <div className="alarm-level-item">
                  <span className="alarm-level-label">{t("intelligentAlarm.alarmLevels.green.label")}</span>
                  <span className="alarm-level-text">{t("intelligentAlarm.alarmLevels.green.text")}</span>
                </div>
                <div className="alarm-level-item">
                  <span className="alarm-level-label">{t("intelligentAlarm.alarmLevels.others.label")}</span>
                  <span className="alarm-level-text">{t("intelligentAlarm.alarmLevels.others.text")}</span>
                </div>
              </div>

              <div className="co2-levels">
                <div className="co2-level">
                  <div className="co2-level-indicator co2-level-green"></div>
                  <span className="co2-level-text">{t("intelligentAlarm.co2Levels.green")}</span>
                </div>
                <div className="co2-level">
                  <div className="co2-level-indicator co2-level-yellow"></div>
                  <span className="co2-level-text">{t("intelligentAlarm.co2Levels.yellow")}</span>
                </div>
                <div className="co2-level">
                  <div className="co2-level-indicator co2-level-orange"></div>
                  <span className="co2-level-text">{t("intelligentAlarm.co2Levels.orange")}</span>
                </div>
                <div className="co2-level">
                  <div className="co2-level-indicator co2-level-red"></div>
                  <span className="co2-level-text">{t("intelligentAlarm.co2Levels.red")}</span>
                </div>
              </div>

              <div className="alarm-note">{t("intelligentAlarm.note")}</div>
              <div className="alarm-note-text">
                {t("intelligentAlarm.noteText").replace(
                  "2 seconds",
                  `<span className="highlight">${t("intelligentAlarm.highlight2")}</span>`,
                )}
              </div>

              <div className="gradient-bar"></div>
              <div className="gradient-labels">
                <div className="gradient-label">{t("intelligentAlarm.gradientLabels.security")}</div>
                <div className="gradient-label">{t("intelligentAlarm.gradientLabels.cycleAlarm")}</div>
                <div className="gradient-label">{t("intelligentAlarm.gradientLabels.cycleAlarm")}</div>
                <div className="gradient-label">{t("intelligentAlarm.gradientLabels.cycleAlarm")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 18: Product Comparison */}
      <section className="comparison-section" id="Compare">
        <div className="comparison-section">
          <div className="container">
            <h2 className="comparison-title">{t("productComparison.title").replace("CO2", "CO<sub>2</sub>")}</h2>

            <div className="comparison-products">
              <div className="comparison-product">
                <div className="comparison-product-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor-portable.png"
                    alt="Nano CO2 Monitor"
                  />
                </div>
                <div className="comparison-product-name">{t("productComparison.products.nanoCO2")}</div>
              </div>
              <div className="comparison-product">
                <div className="comparison-product-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/tsi-co2-monitor.png"
                    alt="High-End Monitor"
                  />
                </div>
                <div className="comparison-product-name">{t("productComparison.products.highEnd")}</div>
              </div>
            </div>

            <div className="comparison-table">
              <div className="comparison-row">
                <div className="comparison-label">{t("productComparison.comparisonTable.description.label")}</div>
                <div className="comparison-value">{t("productComparison.comparisonTable.description.nanoCO2")}</div>
                <div className="comparison-value">{t("productComparison.comparisonTable.description.highEnd")}</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-label">{t("productComparison.comparisonTable.size.label")}</div>
                <div className="comparison-value">{t("productComparison.comparisonTable.size.nanoCO2")}</div>
                <div className="comparison-value">{t("productComparison.comparisonTable.size.highEnd")}</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-label">{t("productComparison.comparisonTable.price.label")}</div>
                <div className="comparison-value">{t("productComparison.comparisonTable.price.nanoCO2")}</div>
                <div className="comparison-value">{t("productComparison.comparisonTable.price.highEnd")}</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-label">{t("productComparison.comparisonTable.weight.label")}</div>
                <div className="comparison-value">{t("productComparison.comparisonTable.weight.nanoCO2")}</div>
                <div className="comparison-value">{t("productComparison.comparisonTable.weight.highEnd")}</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-label">{t("productComparison.comparisonTable.range.label")}</div>
                <div className="comparison-value">{t("productComparison.comparisonTable.range.nanoCO2")}</div>
                <div className="comparison-value">{t("productComparison.comparisonTable.range.highEnd")}</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-label">{t("productComparison.comparisonTable.accuracy.label")}</div>
                <div className="comparison-value">{t("productComparison.comparisonTable.accuracy.nanoCO2")}</div>
                <div className="comparison-value">{t("productComparison.comparisonTable.accuracy.highEnd")}</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-label">{t("productComparison.comparisonTable.technology.label")}</div>
                <div className="comparison-value">{t("productComparison.comparisonTable.technology.nanoCO2")}</div>
                <div className="comparison-value">{t("productComparison.comparisonTable.technology.highEnd")}</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-label">{t("productComparison.comparisonTable.portability.label")}</div>
                <div className="comparison-value">{t("productComparison.comparisonTable.portability.nanoCO2")}</div>
                <div className="comparison-value">{t("productComparison.comparisonTable.portability.highEnd")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 19: FAQs */}
      <section className="faqs-section" id="FAQs">
        <div className="container">
          <h2 className="faqs-title">{t("faqs.title")}</h2>
          <h3 className="faqs-subtitle">{t("faqs.subtitle")}</h3>
          <FaqAccordionCO2 faqs={faqs} />
        </div>
      </section>
    </main>
  )
}
