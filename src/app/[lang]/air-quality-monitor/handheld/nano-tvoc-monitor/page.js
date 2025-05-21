import Link from "next/link"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import TVOCProductNavbar from "@/Components/Pages/NanoTvocmonitor/tvoc-product-navbar"
import TVOCProductGallery from "@/Components/Pages/NanoTvocmonitor/tvoc-product-gallery"
import TVOCMonitorSlider from "@/Components/Pages/NanoTvocmonitor/tvoc-monitor-slider"
import { getServerTranslation } from "@/i18n/server"
export default async function NanoTVOCMonitorPage() {
  const { t } = await getServerTranslation("nano-tvoc")
  const tvocSliderContent = [
    {
      id: 1,
      heading: t("nano-tvoc:slider.item1.heading"),
      paragraph: t("nano-tvoc:slider.item1.paragraph"),
      image:
        "https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-odor-tvoc-monitor-with-real-time-data.jpeg",
      alt: t("nano-tvoc:alt.item1.paragraph"),
    },
    {
      id: 2,
      heading: t("nano-tvoc:slider.item2.heading"),
      paragraph: t("nano-tvoc:slider.item2.paragraph"),
      image: "https://www.pranaair.com/wp-content/uploads/2023/05/portable-nano-tvoc-hcho-monitor.jpg",
      alt: t("nano-tvoc:alt.item2.paragraph"),
    },
  ]
  return (
    <main className="nano-tvoc-monitor-page">

      {/* Sticky Navigation Bar */}
      <TVOCProductNavbar />

      {/* Breadcrumbs */}
      <section className="bredcrums-pages">
        <div className="container">
          <div className="page-breadcrum">
            <div className="static-breadcrums">
              <ul>
                <li>
                  <Link href="/">{t("breadcrumbs.home")}</Link> &gt;
                </li>
                <li>
                  <Link href="/air-quality-monitor">{t("breadcrumbs.airQualityMonitors")}</Link> &gt;
                </li>
                <li>
                  <Link href="#">
                    <b>{t("breadcrumbs.nanoTvoc")}</b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Product Overview */}
      <section className="keychain-monitor-section" id="Overview">
        <div className="container">
          <div className="row order-colum">
            {/* Product Gallery */}
            <TVOCProductGallery />

            {/* Product Information */}
            <div className="col-lg-4 col-md-12 ipad">
              <div className="product-text">
                <div className="inner-product-txt">
                  <h1>{t("productInfo.title")}</h1>
                  <h4>{t("productInfo.subtitle")}</h4>
                  {t("productInfo.tagline")}
                </div>
                <div className="mrp-sec">
                  <div className="discount-mrp woocom-list-content">
                    <h6>{t("productInfo.mrp")}</h6>
                    <h5>{t("productInfo.price")}</h5>
                  </div>

                  <section className="articles-container">
                    <article className="article">
                      <p>{t("productInfo.description")}</p>
                      <p className="extra-content" data-is-toggled="false">
                        {t("productInfo.extraContent")}
                      </p>
                      <button className="read-more btn">{t("productInfo.showMore")}</button>
                    </article>
                  </section>
                </div>
              </div>
            </div>

            {/* Buy Button */}
            <div className="col-lg-4 col-md-12 ipad">
              <div className="add-cart-box">
                <div className="model-box">
                  <h5>{t("buySection.model")}</h5>
                  <center>
                    <select className="nav dropbtn">
                      <option value="https://www.pranaair.com/air-quality-monitor/handheld/nano-tvoc-monitor/">
                        TVOC & HCHO
                      </option>
                      <option value="https://www.pranaair.com/air-quality-monitor/handheld/nano-co-monitor/">
                        Nano CO
                      </option>
                      <option value="https://www.pranaair.com/air-quality-monitor/handheld/nano-co2-monitor/">
                        Nano CO2
                      </option>
                    </select>
                  </center>

                  <div className="model-box">
                    <h5>{t("buySection.quantity")}</h5>
                    <div className="stepper">
                      <input type="number" className="form-control" min="1" defaultValue="1" />
                    </div>
                    <div className="buy-btns">
                      <br />
                      <form
                        className="cart new-cart"
                        action="https://www.pranaair.com/air-quality-monitor/handheld/nano-tvoc-monitor/"
                        method="post"
                        encType="multipart/form-data"
                      >
                        <button
                          type="submit"
                          name="add-to-cart"
                          value="76924"
                          className="single_add_to_cart_button button alt"
                        >
                          {t("buySection.buyNow")}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Monitoring Banner */}
      <section className="women-bag-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="monitoring-image-container">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-portable-nano-odor-tvoc-monitor.jpeg"
                  alt={t("monitoringBanner.personImg")}
                  className="img-fluid monitoring-person-img"
                />
                <div className="device-zoom-circle">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-tvoc-hcho-odor-monitor.png"
                    alt={t("monitoringBanner.deviceImg")}
                    className="device-zoom-img"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="monitoring-content">
                <h2 className="monitoring-title">{t("monitoringBanner.title")}</h2>
                <h3 className="monitoring-subtitle">{t("monitoringBanner.subtitle")}</h3>
                <p className="monitoring-description">{t("monitoringBanner.description")}</p>
                <div className="activity-icons">
                  <div className="activity-icon-circle">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/cycing-icon.png"
                      alt={t("monitoringBanner.cyclingIcon")}
                    />
                  </div>
                  <div className="activity-icon-circle">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/work-out-icon.png"
                      alt={t("monitoringBanner.workoutIcon")}
                    />
                  </div>
                  <div className="activity-icon-circle">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/running-fitness-icon.png"
                      alt={t("monitoringBanner.runningIcon")}
                    />
                  </div>
                  <div className="activity-icon-circle">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/working-in-office-icon.png"
                      alt={t("monitoringBanner.officeIcon")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Features */}
      <section className="product-quality-section" id="Features">
        <div className="container">
          <div className="row">
            <div className="col-md-6 features-left-col">
              <div className="features-content">
                <h2 className="features-title">{t("features.title")}</h2>
                <p className="features-description">{t("features.description")}</p>

                <div className="features-list">
                  <div className="feature-row">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/real-time-monitor-icon.png"
                          alt={t("features.altTexts.realTimeMonitoring")}
                        />
                      </div>
                      <div className="feature-text">{t("features.featureTexts.realTimeMonitoring")}</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/tvoc-device-battery-icon.png"
                          alt={t("features.altTexts.battery")}
                        />
                      </div>
                      <div className="feature-text">{t("features.featureTexts.battery")}</div>
                    </div>
                  </div>

                  <div className="feature-row">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/pocket-friendly-device-icon.png"
                          alt={t("features.altTexts.portable")}
                        />
                      </div>
                      <div className="feature-text">{t("features.featureTexts.portable")}</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/hd-display-icon.png"
                          alt={t("features.altTexts.hdDisplay")}
                        />
                      </div>
                      <div className="feature-text">{t("features.featureTexts.hdDisplay")}</div>
                    </div>
                  </div>

                  <div className="feature-row">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/mos-sensor-icon.png"
                          alt={t("features.altTexts.metalOxide")}
                        />
                      </div>
                      <div className="feature-text">{t("features.featureTexts.metalOxide")}</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/type-c-icon.png"
                          alt={t("features.altTexts.typeC")}
                        />
                      </div>
                      <div className="feature-text">{t("features.featureTexts.typeC")}</div>
                    </div>
                  </div>

                  <div className="feature-row">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/05/tvoc-monitor-dynamic-ui-icon.png"
                          alt={t("features.altTexts.dynamicUI")}
                        />
                      </div>
                      <div className="feature-text">{t("features.featureTexts.dynamicUI")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 features-right-col">
              <div className="ultra-hd-content">
                <h2 className="ultra-hd-title">{t("features.ultraHD.title")}</h2>
                <h3 className="ultra-hd-subtitle">{t("features.ultraHD.subtitle")}</h3>
                <p className="ultra-hd-description">{t("features.ultraHD.description")}</p>
                <div className="ultra-hd-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-odor-tvoc-hd-display.png"
                    alt={t("features.altTexts.tvocDisplay")}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Handy & Portable */}
      <section className="heandy-portable-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 handy-bg ipad">
              <div className="handy-box">
                <div className="handy-img">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-tvoc-monitor-is-handy.jpeg"
                    alt={t("handyPortable.altTexts.handy")}
                  />
                </div>
                <div className="handy-txt">
                  <h4>{t("handyPortable.compact.title")}</h4>
                  <p>{t("handyPortable.compact.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 ipad">
              <div className="handy-box handy-box-left">
                <div className="handy-img portable-img">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-odor-tvoc-monitor-is-portable.jpeg"
                    alt={t("handyPortable.altTexts.portable")}
                  />
                </div>
                <div className="handy-txt portable-txt">
                  <h4>{t("handyPortable.convenient.title")}</h4>
                  <p>{t("handyPortable.convenient.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TVOC and Formaldehyde Dangers */}
      <section className="corbon-monoxide-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 ipad">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-odor-tvoc-formaldehyde-detector-device.jpeg"
                alt={t("tvocDangers.altTexts.dangers")}
                className="img-fluid carbon-monoxide-img"
              />
              <div className="monoxide-txt">
                <h4>{t("tvocDangers.title")}</h4>
                <p>{t("tvocDangers.description")}</p>
              </div>
            </div>
            <div className="col-md-7 ipad tvoc-health-bg">
              <h4 className="hazard-txt-co">
                {t("tvocDangers.healthRisks.title")} <span> {t("tvocDangers.healthRisks.titleHighlight")} </span>
              </h4>
              <div className="row data-mob-row">
                <div className="col-md-6">
                  <div className="inner-data">
                    {t("tvocDangers.healthRisks.levels.safe.measurement")}
                    <h4>{t("tvocDangers.healthRisks.levels.safe.effect")}</h4>
                    <div className="bar"></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inner-data innr-last-data">
                    {t("tvocDangers.healthRisks.levels.moderate.measurement")}
                    <h4>{t("tvocDangers.healthRisks.levels.moderate.effect")}</h4>
                    <div className="yellow"></div>
                  </div>
                </div>
              </div>
              <div className="row data-mob-row">
                <div className="col-md-6">
                  <div className="inner-data">
                    {t("tvocDangers.healthRisks.levels.high.measurement")}
                    <h4>{t("tvocDangers.healthRisks.levels.high.effect")}</h4>
                    <div className="orange"></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inner-data innr-last-data">
                    {t("tvocDangers.healthRisks.levels.severe.measurement")}
                    <h4>{t("tvocDangers.healthRisks.levels.severe.effect")}</h4>
                    <div className="red"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Slider Section */}
      <section className="co-monitore-outdoor-slider">
        <TVOCMonitorSlider tvocSliderContent={tvocSliderContent} />
      </section>

      {/* SECTION 7: Real-Time Data */}
      <section className="real-time-data-section">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-7 ipad">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/real-time-tvoc-and-hcho-data.png"
                alt={t("realTimeData.altTexts.display")}
                className="img-fluid real-time-data-img"
              />
            </div>
            <div className="col-md-5 ipad">
              <div className="real-time-data-txt">
                <h5>{t("realTimeData.subtitle")}</h5>
                <h4>{t("realTimeData.title")}</h4>
                <p>{t("realTimeData.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Full Width Banner */}
      <section className="out-door-banner">
        <img
          src="https://www.pranaair.com/wp-content/uploads/2023/05/monitoring-real-time-odor-tvc-in-washroom.jpeg"
          alt={t("fullWidthBanner.altTexts.washroom")}
          className="img-fluid outdoor-monitor-device-img"
        />
      </section>

      {/* SECTION 9: MOS Technology */}
      <section className="electrochemical-heading">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="electrochecmial-para">
                <h5 className="heading-bg">{t("mosTechnology.title")}</h5>
                <h4>{t("mosTechnology.subtitle")}</h4>
                <p>{t("mosTechnology.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Smart Chip */}
      <section className="smart-chip-section">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-5">
              <div className="smart-chip-txt">
                <h5>
                  {t("smartChip.title.part1")} <span>{t("smartChip.title.highlight")}</span>
                </h5>
                <h4>{t("smartChip.subtitle")}</h4>
                <p>{t("smartChip.description")}</p>
                <ul className="smart-chip-quality">
                  <li>{t("smartChip.features.sensitivity")}</li>
                  <li>{t("smartChip.features.accuracy")}</li>
                  <li>{t("smartChip.features.speed")}</li>
                  <li>{t("smartChip.features.efficiency")}</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/smart-chip-on-prana-air-tvoc-odor-monitor.png"
                alt={t("smartChip.altTexts.chip")}
                className="img-fluid smart-chip-img floating"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Attractive Details */}
      <section className="attractive-details-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 ipad">
              <div className="attractive-txt">
                <h4>{t("attractiveDetails.title")}</h4>
              </div>
            </div>
          </div>
          <div className="row ipad mob-scroll">
            <div className="col-md-4 ipad">
              <div className="attract-bg-box">
                <div className="top_head">
                  <p>
                    <span className="range_no">{t("attractiveDetails.typeC.number")}</span>
                  </p>
                  <h4>
                    {t("attractiveDetails.typeC.title")}{" "}
                    <span className="detail_text">{t("attractiveDetails.typeC.subtitle")}</span>
                  </h4>
                </div>
                <img
                  className="mob-type-c-img"
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/tvoc-monitor-type-c-charging.png"
                  alt={t("attractiveDetails.typeC.altText")}
                />
              </div>
            </div>
            <div className="col-md-4 ipad attract-bg">
              <div className="attract-bg-box">
                <div className="top_head">
                  <p>
                    <span className="range_no">{t("attractiveDetails.lanyard.number")}</span>
                  </p>
                  <h4>
                    {t("attractiveDetails.lanyard.title")}{" "}
                    <span className="detail_text">{t("attractiveDetails.lanyard.subtitle")}</span>
                  </h4>
                </div>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/anti-loss-lanyard-of-tvoc-monitor.png"
                  alt={t("attractiveDetails.lanyard.altText")}
                />
              </div>
            </div>
            <div className="col-md-4 ipad attract-bg">
              <div className="attract-bg-box">
                <div className="top_head">
                  <p>
                    <span className="range_no">{t("attractiveDetails.display.number")}</span>
                  </p>
                  <h4>
                    {t("attractiveDetails.display.title")}{" "}
                    <span className="detail_text">{t("attractiveDetails.display.subtitle")}</span>
                  </h4>
                </div>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/ulta-hd-display-of-tvoc-monitor.png"
                  alt={t("attractiveDetails.display.altText")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Product Key Functions */}
      <section className="product-key-function-section" id="Functions">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="product-function-txt">
                <h4>{t("productKeyFunctions.title")}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-tvoc-monitor-key-functions.png"
                alt={t("productKeyFunctions.altTexts.functions")}
                className="img-fluid product-key-function"
              />
            </div>
            <div className="col-md-7">
              <div className="power-key-box">
                <ul>
                  <li>{t("productKeyFunctions.powerKey.title")}</li>
                  <li>{t("productKeyFunctions.powerKey.longPress")}</li>
                  <li>{t("productKeyFunctions.powerKey.singlePress")}</li>
                </ul>
              </div>
              <div className="turn-alarm">
                <ul>
                  <li>{t("productKeyFunctions.alarmKey.singlePress")}</li>
                  <li>
                    {t("productKeyFunctions.alarmKey.on")}{" "}
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/volume-on.png"
                      alt={t("productKeyFunctions.altTexts.volumeOn")}
                    />
                    <span>|</span>
                    {t("productKeyFunctions.alarmKey.off")}{" "}
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/volume-off.png"
                      alt={t("productKeyFunctions.altTexts.volumeOff")}
                    />
                  </li>
                </ul>
              </div>
              <div className="brightness-levels">
                <ul>
                  <li>{t("productKeyFunctions.brightnessKey.singlePress")}</li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/full-brightness.png"
                      alt={t("productKeyFunctions.altTexts.fullBrightness")}
                    />
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/half-brightness.png"
                      alt={t("productKeyFunctions.altTexts.halfBrightness")}
                    />
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/low-brightness.png"
                      alt={t("productKeyFunctions.altTexts.lowBrightness")}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: Battery Endurance */}
      <section className="battery-endurance-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="battery-txt">
                <h5>{t("batteryEndurance.subtitle")}</h5>
                <h4>{t("batteryEndurance.title")}</h4>
                <p>{t("batteryEndurance.description")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-tvoc-odor-battery-capacity.png"
                alt={t("batteryEndurance.altTexts.battery")}
                className="img-fluid large-battery-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: Handy and Portable Banner */}
      <section className="out-door-banner">
        <div className="outdoor-device-bg">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/05/handy-and-portable-tvco-monitor-of-prana-air.png"
            alt={t("handyPortableBanner.altTexts.monitor")}
          />
        </div>
      </section>

      {/* SECTION 15: Real-time TVOC Detection */}
      <section className="real-time-co-detection">
        <div className="container">
          <div className="row">
            <div className="col-md-5 ipad">
              <div className="tvoc-real-time">
                <h4>
                  {t("realTimeTvocDetection.title.part1")} <span> {t("realTimeTvocDetection.title.highlight1")} </span>
                  {t("realTimeTvocDetection.title.part2")} <span>{t("realTimeTvocDetection.title.highlight2")}</span>
                  {t("realTimeTvocDetection.title.part3")}
                </h4>
                <ul>
                  <li>
                    <p>{t("realTimeTvocDetection.features.levels")}</p>
                  </li>
                  <li>
                    <p>{t("realTimeTvocDetection.features.refresh")}</p>
                  </li>
                </ul>
              </div>
              <div className="tovc-cycle">
                <ul>
                  <li>
                    <span className="circule-icon">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/green-circle.png"
                        alt={t("realTimeTvocDetection.altTexts.greenCircle")}
                      />
                    </span>
                    <p>
                      {" "}
                      <span className="green-txt">{t("realTimeTvocDetection.indicators.green.color")}</span>
                      <b>{t("realTimeTvocDetection.indicators.green.range")}</b>
                      {t("realTimeTvocDetection.indicators.green.status")}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="tovc-cycle">
                <ul>
                  <li>
                    <span className="circule-icon">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/yellow-circle.png"
                        alt={t("realTimeTvocDetection.altTexts.yellowCircle")}
                      />
                    </span>
                    <p>
                      {" "}
                      <span className="green-txt yelw-txt">{t("realTimeTvocDetection.indicators.yellow.color")}</span>
                      <b>{t("realTimeTvocDetection.indicators.yellow.range")}</b>
                      {t("realTimeTvocDetection.indicators.yellow.status")}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 ipad">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/alarm-system-in-prana-air-tvoc-monitor.png"
                alt={t("realTimeTvocDetection.altTexts.alarm")}
                className="img-fluid co-detection-img"
              />
            </div>
            <div className="col-md-4 ipad">
              <div className="co2-bar">
                <ul className="security">
                  <li>{t("realTimeTvocDetection.securityLevels.security")}</li>
                  <li>{t("realTimeTvocDetection.securityLevels.cycleAlarm")}</li>
                  <li>{t("realTimeTvocDetection.securityLevels.cycleAlarm")}</li>
                  <li>{t("realTimeTvocDetection.securityLevels.cycleAlarm")}</li>
                </ul>
                <div className="bar-box">
                  <ul className="bar-colr">
                    <li>
                      <div className="co-data"></div>
                    </li>
                    <li>{t("realTimeTvocDetection.securityLevels.ranges.safe")}</li>
                    <li>
                      <div className="co-data orange-bar"></div>
                    </li>
                    <li>{t("realTimeTvocDetection.securityLevels.ranges.severe")}</li>
                  </ul>
                  <ul className="bar-colr">
                    <li>
                      <div className="co-data yellow-bar"></div>
                    </li>
                    <li>{t("realTimeTvocDetection.securityLevels.ranges.high")}</li>
                    <li className="last-bar">
                      <div className="co-data red-bar"></div>
                    </li>
                    <li>{t("realTimeTvocDetection.securityLevels.ranges.moderate")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 16: Technical Specifications */}
      <section className="technical-specification" id="Tech-Specs">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="attractive-txt product-specification-heading">
                {t("technicalSpecifications.title.part1")}
                <h4>{t("technicalSpecifications.title.part2")}</h4>
              </div>
            </div>
            <div className="col-md-9">
              <div className="brochore-btn">
                <a href="/wp-content/uploads/2023/06/prana-air-nano-odor-tvoc-monitor-brochure.pdf">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/brochore-btn.png"
                    alt={t("technicalSpecifications.altTexts.brochure")}
                  />{" "}
                  {t("technicalSpecifications.brochure")}
                </a>
              </div>
            </div>
          </div>
          <div className="row mid-box">
            <div className="col-md-4 box-line">
              <div className="product-specifi shdw-line">
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
            <div className="col-md-4 box-line">
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
            <div className="col-md-4 box-line">
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

      {/* SECTION 17: Product Comparison */}
      <section className="comparison-sec" id="Compare">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="attractive-txt comparision-heading">
                <h4>{t("productComparison.title")}</h4>
              </div>
            </div>
          </div>
          <div className="row mob-scroll">
            <div className="col-md-3">
              <div className="comp-heading mobshow">
                <h4>TVOC Monitor</h4>
              </div>
              <div className="product-discription">
                <ul>
                  <li>{t("productComparison.parameters.description")}</li>
                  <li>{t("productComparison.parameters.parameter")}</li>
                  <li>{t("productComparison.parameters.price")}</li>
                  <li>{t("productComparison.parameters.weight")}</li>
                  <li>{t("productComparison.parameters.range")}</li>
                  <li>{t("productComparison.parameters.accuracy")}</li>
                  <li>{t("productComparison.parameters.technology")}</li>
                  <li>{t("productComparison.parameters.portability")}</li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="dis-img">
                <div className="disc-inner-img-one">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-tvoc-hcho-odor-monitor.png"
                    alt={t("productComparison.altTexts.pranaMonitor")}
                  />
                </div>
                <div className="disc-inner-img-two">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/high-end-tvoc-monitor.png"
                    alt={t("productComparison.altTexts.highEndMonitor")}
                  />
                </div>
              </div>
              <div className="product-feature">
                <ul className="mini-co-monitor">
                  <li>{t("productComparison.pranaMonitor.name")}</li>
                  <li className="tab-bg">{t("productComparison.pranaMonitor.parameter")}</li>
                  <li>{t("productComparison.pranaMonitor.price")}</li>
                  <li className="tab-bg">{t("productComparison.pranaMonitor.weight")}</li>
                  <li>{t("productComparison.pranaMonitor.range")}</li>
                  <li className="tab-bg">{t("productComparison.pranaMonitor.accuracy")}</li>
                  <li>{t("productComparison.pranaMonitor.technology")}</li>
                  <li className="tab-bg">{t("productComparison.pranaMonitor.portability")}</li>
                </ul>
                <ul className="co-multifuntion-monitor">
                  <li>{t("productComparison.highEndMonitor.name")}</li>
                  <li>{t("productComparison.highEndMonitor.parameter")}</li>
                  <li>{t("productComparison.highEndMonitor.price")}</li>
                  <li>{t("productComparison.highEndMonitor.weight")}</li>
                  <li>{t("productComparison.highEndMonitor.range")}</li>
                  <li>{t("productComparison.highEndMonitor.accuracy")}</li>
                  <li>{t("productComparison.highEndMonitor.technology")}</li>
                  <li>{t("productComparison.highEndMonitor.portability")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 18: FAQs */}
      <section className="faq" id="FAQs">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="attractive-txt faq-heading">
                <h4>{t("faqs.title")}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="accordion" id="tvocFaqAccordion">
                {t("faqs.questions", { returnObjects: true }).map((faq, index) => (
                  <div className="accordion-item faq-item" key={index}>
                    <h4 className="accordion-header" id={`heading${index + 1}`}>
                      <button
                        className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index + 1}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`collapse${index + 1}`}
                      >
                        {faq.question}
                      </button>
                    </h4>
                    <div
                      id={`collapse${index + 1}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      aria-labelledby={`heading${index + 1}`}
                      data-bs-parent="#tvocFaqAccordion"
                    >
                      <div className="accordion-body faq-para">
                        <p>{faq.answer}</p>
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
