import Link from "@/Components/TranslateLink"
import { domain } from "@/config"
import Image from "next/image"
import "bootstrap/dist/css/bootstrap.min.css"
import { getServerTranslation } from "@/i18n/server"
import "./style.css"
import QuantityCounter from "@/Components/Pages/Breathalyzer/quantity-counter"

export default async function BreathalyzerPage() {
  const { t } = await getServerTranslation("breathalyzer")

  // Scroll to section when clicking on navigation
  const handleTabClick = (tab) => {
    const element = document.getElementById(tab)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Update the product features section
  const updateProductFeatures = () => {
    return (
      <div className="product-features">
        <ul className="product-features-list-one">
          <li>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/06/compact-size.png"
              alt={t("features.compact_size.alt")}
              width={60}
              height={60}
            />
            <h3>{t("features.compact_size.title")}</h3>
          </li>
          <li>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/06/reliable-icon.png"
              alt={t("features.reliable.alt")}
              width={60}
              height={60}
            />
            <h3>{t("features.reliable.title")}</h3>
          </li>
        </ul>
        <ul className="product-features-list-two">
          <li>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/06/stable-data-icon.png"
              alt={t("features.stable.alt")}
              width={60}
              height={60}
            />
            <h3>{t("features.stable.title")}</h3>
          </li>
          <li>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/06/contact-less-icon.png"
              alt={t("features.contactless.alt")}
              width={60}
              height={60}
            />
            <h3>{t("features.contactless.title")}</h3>
          </li>
        </ul>
        <ul className="product-features-list-two">
          <li>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/06/fuel-cell-sensor.png"
              alt={t("features.fuel_cell.alt")}
              width={60}
              height={60}
            />
            <h3>{t("features.fuel_cell.title")}</h3>
          </li>
          <li>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/06/on-board-storage.png"
              alt={t("features.storage.alt")}
              width={60}
              height={60}
            />
            <h3>{t("features.storage.title")}</h3>
          </li>
        </ul>
      </div>
    )
  }

  // Fix the Product Functions section to match the design in the screenshot
  const updateProductFunctions = () => {
    return (
      <div className="row">
        <div className="col-lg-6 col-md-12 key-func-right-bg ipad">
          <div id="main-order" className="product-key-func-box">
            <div id="heading-ord" className="prodt-heading">
              <p>{t("functions.product")}</p>
              <h4>{t("functions.key_functions")}</h4>
            </div>
            <div id="img-ord" className="prodt-img">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-key-functions.png"
                alt={t("functions.key_functions_img_alt")}
                width={190}
                height={300}
              />
            </div>
            <div id="key-word-ord" className="key-heading">
              <ul>
                <li>
                  {t("functions.air")}
                  <h4>{t("functions.inlet")}</h4>
                </li>
                <li>
                  {t("functions.screen")}
                  <h4>{t("functions.display")}</h4>
                </li>
                <li>
                  {t("functions.power")}
                  <h4>{t("functions.button")}</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 key-func-left-bg ipad">
          <div className="product-dimension-box">
            <ul>
              <li>
                {t("functions.product")}
                <h4>{t("functions.dimensions")}</h4>
                <p>{t("functions.dimensions_description")}</p>
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/dimension-of-prana-air-breathalyzer.png"
                  alt={t("functions.dimensions_img_alt")}
                  width={320}
                  height={200}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="breathalyzer-container">
      {/* Product Navigation */}
      {/* Breadcrumb */}
      <div className="static-breadcrums">
        <ul>
          <li>
            <Link href={`${domain}/`}>{t("breadcrumb.home")}</Link> <span>&gt;</span>
          </li>
          <li>
            <Link href={`${domain}/air-quality-monitor`}>{t("breadcrumb.monitors")}</Link> <span>&gt;</span>
          </li>
          <li>
            <Link href="#">
              <b>{t("breadcrumb.breathalyzer")}</b>
            </Link>
          </li>
        </ul>
      </div>

      {/* Product Section */}
      <section className="keychain-monitor-section" id="overview">
        <div className="container">
          <div className="row order-colum">
            {/* Product Images */}
            <div className="col-lg-4 col-md-12 ipad" id="product">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="Comonitora">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-portable-alcohol-tester.png"
                    alt={t("product.images.main_alt")}
                    width={400}
                    height={450}
                  />
                </div>

                <div className="tab-pane fade" id="Comonitorb">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-alcohol-detector.png"
                    alt={t("product.images.variant1_alt")}
                    width={400}
                    height={450}
                  />
                </div>

                <div className="tab-pane fade" id="Comonitorc">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-portable-breathalyzer-device.png"
                    alt={t("product.images.variant2_alt")}
                    width={400}
                    height={450}
                  />
                </div>

                <div className="tab-pane fade" id="Comonitord">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-device.png"
                    alt={t("product.images.variant3_alt")}
                    width={400}
                    height={450}
                  />
                </div>
              </div>

              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#Comonitora"
                    type="button"
                    role="tab"
                    aria-controls="Comonitora"
                    aria-selected="true"
                  >
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-portable-alcohol-tester.png"
                      alt={t("product.images.thumb_main_alt")}
                      width={80}
                      height={80}
                    />
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#Comonitorb"
                    type="button"
                    role="tab"
                    aria-controls="Comonitorb"
                    aria-selected="false"
                  >
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-alcohol-detector.png"
                      alt={t("product.images.thumb_variant1_alt")}
                      width={80}
                      height={80}
                    />
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#Comonitorc"
                    type="button"
                    role="tab"
                    aria-controls="Comonitorc"
                    aria-selected="false"
                  >
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-portable-breathalyzer-device.png"
                      alt={t("product.images.thumb_variant2_alt")}
                      width={80}
                      height={80}
                    />
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#Comonitord"
                    type="button"
                    role="tab"
                    aria-controls="Comonitord"
                    aria-selected="false"
                  >
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-device.png"
                      alt={t("product.images.thumb_variant3_alt")}
                      width={80}
                      height={80}
                    />
                  </button>
                </li>
              </ul>
            </div>

            {/* Product Details */}
            <div className="col-lg-4 col-md-12 ipad" id="text">
              <div className="product-text">
                <div className="inner-product-txt">
                  <h1>{t("product.title")}</h1>
                  <h4>{t("product.subtitle")}</h4>
                  <p>{t("product.description")}</p>
                </div>
                <div className="mrp-sec">
                  <div className="discount-mrp woocom-list-content">
                    <h6>{t("product.mrp")}</h6>
                    <h5>₹ 6990.00</h5>
                  </div>
                  <section className="articles-container">
                    <article className="article">
                      <p>
                        {t("product.details.part1")}
                      </p>
                      <p className="extra-content collapse" id="showMoreContent">
                        {t("product.details.part2")}
                      </p>
                      <button
                        className="read-more btn"
                        data-bs-toggle="collapse"
                        data-bs-target="#showMoreContent"
                        aria-expanded="false"
                        aria-controls="showMoreContent"
                      >
                        {t("product.show_more")}
                      </button>
                    </article>
                  </section>
                </div>
              </div>
            </div>

            {/* Buy Button */}
            <div className="col-lg-4 col-md-12 ipad" id="buybtn">
              <div className="add-cart-box">
                <div className="model-box">
                  <h5>{t("product.model")}</h5>
                  <center>
                    <select className="nav dropbtn" defaultValue="#">
                      <option value="#">{t("product.model_options.breathalyzer")}</option>
                      <option value="https://www.pranaair.com/air-quality-monitor/handheld/nano-tvoc-monitor/">
                        {t("product.model_options.nano_tvoc")}
                      </option>
                      <option value="https://www.pranaair.com/air-quality-monitor/handheld/nano-co-monitor/">
                        {t("product.model_options.nano_co")}
                      </option>
                      <option value="https://www.pranaair.com/air-quality-monitor/handheld/nano-co-monitor/">
                        {t("product.model_options.nano_co2")}
                      </option>
                    </select>
                  </center>

                  <div className="model-box">
                    <h5>{t("product.quantity")}</h5>
                    <QuantityCounter />
                    <div className="buy-btns">
                      <br />
                      <form
                        className="cart new-cart"
                        action="https://www.pranaair.com/air-quality-monitor/handheld/breathalyzer/"
                        method="post"
                        encType="multipart/form-data"
                      >
                        <button
                          type="submit"
                          name="add-to-cart"
                          value="77733"
                          className="single_add_to_cart_button button alt"
                        >
                          {t("product.add_to_cart")}
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

      {/* Features Section */}
      <section className="product-quality-section" id="features">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-lg-8 col-md-12 produt-img ipad">
              <div className="product-quantity-txt">
                <h3>{t("features.title")}</h3>
                <p>
                  {t("features.description")}
                </p>
              </div>
              {updateProductFeatures()}
            </div>
            <div className="col-lg-4 col-md-12 ipad product-img-right">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-portable-alcohol-tester.png"
                alt={t("features.image_alt")}
                width={210}
                height={300}
                className="tvoc-high-definition-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contactless Section */}
      <section className="contact-less-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="contact-less-txt">
                <h4>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/contactless-icon.png"
                    alt={t("contactless.icon_alt")}
                    width={50}
                    height={50}
                  />
                  {t("contactless.title")}
                </h4>
                <h5>{t("contactless.subtitle")}</h5>
                <p>
                  {t("contactless.description")}
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/06/a-man-using-prana-air-breathalyzer.png"
                alt={t("contactless.image_alt")}
                width={420}
                height={300}
                className="contact-less-men-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Functions Section */}
      <section className="product-function-section" id="functions">
        <div className="container">{updateProductFunctions()}</div>
      </section>

      {/* Did You Know Section */}
      <section className="did-u-know-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="did-u-know-txt">
                <ul>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/do-you-know-icon.png"
                      alt={t("did_you_know.icon_alt")}
                      width={80}
                      height={80}
                    />
                  </li>
                  <li>
                    <h4>{t("did_you_know.title")}</h4>
                    <p>
                      {t("did_you_know.description")}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="how-to-use-sec">
        <div className="container">
          <div className="row br-btm">
            <div className="col-lg-6 col-md-12">
              <div className="how-to-use-heading">
                <h2>{t("how_to_use.title")}</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tab-box">
                <ul className="nav nav-tabs tab-heading" id="howToUseTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="alcohol-test-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#alcohol-test"
                      type="button"
                      role="tab"
                      aria-controls="alcohol-test"
                      aria-selected="true"
                    >
                      {t("how_to_use.tabs.alcohol_test")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="date-time-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#date-time"
                      type="button"
                      role="tab"
                      aria-controls="date-time"
                      aria-selected="false"
                    >
                      {t("how_to_use.tabs.date_time")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="history-export-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#history-export"
                      type="button"
                      role="tab"
                      aria-controls="history-export"
                      aria-selected="false"
                    >
                      {t("how_to_use.tabs.history_export")}
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="howToUseTabsContent">
                  <div
                    className="tab-pane fade show active"
                    id="alcohol-test"
                    role="tabpanel"
                    aria-labelledby="alcohol-test-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="tab-content-box">
                          <h3>{t("how_to_use.alcohol_test.title")}</h3>
                          <p>
                            {t("how_to_use.alcohol_test.description")}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="auto-power-off">
                          <ul>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2025/02/automatically-powers-off.png"
                                alt={t("how_to_use.alcohol_test.power_off_alt")}
                                width={60}
                                height={60}
                              />
                            </li>
                            <li>{t("how_to_use.alcohol_test.power_off_text")}</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="row mob-row-parametere">
                      <div className="col-md-4">
                        <div className="tab-logo-box">
                          <h3>01</h3>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/prana-air-logo.jpg"
                            alt={t("how_to_use.alcohol_test.step1_alt")}
                            width={150}
                            height={100}
                          />
                          <p>{t("how_to_use.alcohol_test.step1_text")}</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="tab-logo-box">
                          <h3>02</h3>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/blow-for-5-6-seconds-until-the-bar-fills.jpg"
                            alt={t("how_to_use.alcohol_test.step2_alt")}
                            width={150}
                            height={100}
                          />
                          <p>{t("how_to_use.alcohol_test.step2_text")}</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="tab-logo-box">
                          <h3>03</h3>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/Alcohol-level-green-yellow-red-displays.jpg"
                            alt={t("how_to_use.alcohol_test.step3_alt")}
                            width={150}
                            height={100}
                          />
                          <p>{t("how_to_use.alcohol_test.step3_text")}</p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="ranges-display">
                          <ul className="rang">
                            <li>0~0.10mg/l</li>
                            <li>0.10~0.40mg/l</li>
                            <li>0.40~1.00mg/l</li>
                          </ul>
                          <ul className="rang-clr">
                            <li>{t("how_to_use.alcohol_test.green")}</li>
                            <li>{t("how_to_use.alcohol_test.yellow")}</li>
                            <li>{t("how_to_use.alcohol_test.red")}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="point-para">
                          <p>{t("how_to_use.alcohol_test.bac_explanation")}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="date-time" role="tabpanel" aria-labelledby="date-time-tab">
                    <div className="tab-content-box">
                      <h3>{t("how_to_use.date_time.title")}</h3>
                      <p>{t("how_to_use.date_time.description")}</p>
                    </div>

                    <div className="row mob-row-parametere">
                      <div className="col-md-4">
                        <div className="tab-logo-box">
                          <h3>01</h3>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/Press-the-button-for-few-second.jpg"
                            alt={t("how_to_use.date_time.step1_alt")}
                            width={150}
                            height={100}
                          />
                          <p>{t("how_to_use.date_time.step1_text")}</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="tab-logo-box">
                          <h3>02</h3>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/turn-on-long-press-the-button.png"
                            alt={t("how_to_use.date_time.step2_alt")}
                            width={150}
                            height={100}
                          />
                          <p>{t("how_to_use.date_time.step2_text")}</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="tab-logo-box">
                          <h3>03</h3>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/Use-short-long-press-to-adjust-time.jpg"
                            alt={t("how_to_use.date_time.step3_alt")}
                            width={150}
                            height={100}
                          />
                          <p>{t("how_to_use.date_time.step3_text")}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="history-export"
                    role="tabpanel"
                    aria-labelledby="history-export-tab"
                  >
                    <div className="tab-content-box">
                      <h3>{t("how_to_use.history_export.history_title")}</h3>
                      <p>
                        {t("how_to_use.history_export.history_description")}
                      </p>
                    </div>
                    <div className="tab-content-box data-txt">
                      <h3>{t("how_to_use.history_export.export_title")}</h3>
                      <p>{t("how_to_use.history_export.export_description")}</p>
                    </div>

                    <div className="row mob-row-parametere">
                      <div className="col-md-4">
                        <div className="tab-logo-box">
                          <h3>01</h3>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/Press-the-button-for-few-second.jpg"
                            alt={t("how_to_use.history_export.step1_alt")}
                            width={150}
                            height={100}
                          />
                          <p>{t("how_to_use.history_export.step1_text")}</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="tab-logo-box">
                          <h3>02</h3>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/Use-short-long-press-to-adjust-time.jpg"
                            alt={t("how_to_use.history_export.step2_alt")}
                            width={150}
                            height={100}
                          />
                          <p>{t("how_to_use.history_export.step2_text")}</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="tab-logo-box data-box">
                          <h3>03</h3>
                          <p>{t("how_to_use.history_export.step3_text")}</p>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/Connect-via-Type-C-cable.webp"
                            alt={t("how_to_use.history_export.step3_alt")}
                            width={150}
                            height={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row br-top">
                <div className="col-md-12">
                  <div className="tutroials-heading">
                    <h4>{t("how_to_use.tutorials.title")}</h4>
                  </div>
                </div>
              </div>

              <div className="row mob-row-video">
                <div className="col-md-6">
                  <div className="video-container">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/S-1hOGdcwIQ"
                      title={t("how_to_use.tutorials.video1_title")}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="video-container">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/b0opxV6JFk0"
                      title={t("how_to_use.tutorials.video2_title")}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Operation Section */}
      <section className="simplify-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 simplify-left-bg ipad">
              <div className="row">
                <div className="col-md-8">
                  <div className="simpli-oprt-txt">
                    <h4>{t("simplified_operation.title")}</h4>
                    <p>{t("simplified_operation.description")}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="simpli-img-left">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/man-using-breathalyzer-easily.png"
                      alt={t("simplified_operation.image_alt")}
                      width={273}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 simplify-right-bg ipad">
              <div className="row">
                <div className="col-md-8">
                  <div className="instent-result-txt">
                    <h4>{t("instant_results.title")}</h4>
                    <p>{t("instant_results.subtitle")}</p>
                    <ul>
                      <li>{t("instant_results.less_than")}</li>
                      <li>{t("instant_results.response_time")}</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="simpli-img-right">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-real-time-alcohol-detector.png"
                      alt={t("instant_results.image_alt")}
                      width={235}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ranges Section */}
      <section className="ranges-section">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="range-section">
                <h4>{t("ranges.title")}</h4>
                <p>{t("ranges.description")}</p>
              </div>
            </div>
            <div className="col-md-2">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/06/bottle-icon-100x100.png"
                alt={t("ranges.icon_alt")}
                width={45}
                height={45}
                className="alcohol-icon"
              />
            </div>
          </div>
          <div className="row alcohol-bg">
            <div className="col-md-4 ipad">
              <div className="range-bar-box">
                <ul>
                  <li>
                    <h4>{t("ranges.no_alcohol")}</h4>
                  </li>
                  <li>
                    0~0.10mg/l
                    <div className="bar"></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 ipad">
              <div className="range-bar-box">
                <ul>
                  <li>
                    <h4>{t("ranges.alcohol")}</h4>
                  </li>
                  <li>
                    0.10~0.40mg/l
                    <div className="yellow"></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 ipad">
              <div className="range-bar-box">
                <ul>
                  <li>
                    <h4>{t("ranges.high_alcohol")}</h4>
                  </li>
                  <li>
                    0.40~1.00mg/l
                    <div className="red"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="per-ml-text">{t("ranges.bac_explanation")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Export Section */}
      <section className="data-export-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 ipad">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/06/data-export-feature-in-prana-air-breathalyzer-device.jpeg"
                alt={t("data_export.image_alt")}
                width={400}
                height={300}
                className="data-img"
              />
            </div>
            <div className="col-lg-7 col-md-12 export-data-bg ipad">
              <div className="data-export-txt">
                <h4>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/connectivity-icon.png"
                    alt={t("data_export.icon_alt")}
                    width={30}
                    height={30}
                  />
                  {t("data_export.title")}
                </h4>
                <p>{t("data_export.description")}</p>
              </div>
              <ul className="store-box">
                <li>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/data-storage-icon.png"
                    alt={t("data_export.storage_icon_alt")}
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  {t("data_export.storable")}
                  <h4>{t("data_export.records")}</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fuel Cell Section */}
      <section className="fule-cell-section">
        <div className="container">
          <div className="row fule-cell-bg">
            <div className="col-lg-7 col-md-12 ipad">
              <div className="fule-cell-txt">
                <h4>
                  {t("fuel_cell.title")}
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/breathalyzer-accuracy.jpeg"
                    alt={t("fuel_cell.accuracy_alt")}
                    width={150}
                    height={100}
                  />
                </h4>
                <h3>{t("fuel_cell.subtitle")}</h3>
                <p>
                  {t("fuel_cell.description")}
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="cell-img-top-txt">
                <h4>{t("fuel_cell.sensor_title")}</h4>
                <p>{t("fuel_cell.sensor_subtitle")}</p>
              </div>
              <div className="sensore-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-fuel-cell-sensor.png"
                  alt={t("fuel_cell.sensor_image_alt")}
                  width={350}
                  height={300}
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
            <div className="col-md-12 ipad">
              <div className="quote-txt">
                <strong>{t("quote.country")}</strong>
                <p>
                  {t("quote.text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detection Section */}
      <section className="detection-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 ipad">
              <div className="detect-device-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-data-accuracy-with-fuel-cell-sensor.png"
                  alt={t("detection.image_alt")}
                  width={500}
                  height={400}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ipad">
              <div className="detection-txt">
                <h4>{t("detection.title")}</h4>
                <p>{t("detection.description")}</p>
                <ul>
                  <li>mg/L</li>
                  <li>mg/dL</li>
                  <li>%BAC</li>
                </ul>
              </div>
              <ul className="detect-icons">
                <li>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/not-detect-cold-drink.png"
                    alt={t("detection.cold_drink_alt")}
                    width={52}
                    height={52}
                  />
                </li>
                <li>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/not-detect-garlic.png"
                    alt={t("detection.garlic_alt")}
                    width={52}
                    height={52}
                  />
                </li>
                <li>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/not-detect-onion.png"
                    alt={t("detection.onion_alt")}
                    width={52}
                    height={52}
                  />
                </li>
                <li>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/not-detect-carrot.png"
                    alt={t("detection.carrot_alt")}
                    width={52}
                    height={52}
                  />
                </li>
                <li>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/not-detect-milk.png"
                    alt={t("detection.milk_alt")}
                    width={52}
                    height={52}
                  />
                </li>
                <li>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/not-detect-food-smell.png"
                    alt={t("detection.food_smell_alt")}
                    width={52}
                    height={52}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-sec" id="compare">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="breathlayzer-comparision-heading">
                <h4>
                  <span>{t("comparison.brand")}</span> {t("comparison.title")}
                </h4>
                <p>{t("comparison.description")}</p>
              </div>
            </div>
            <div className="col-md-9"></div>
          </div>
          <div className="row mob-scroll">
            <div className="col-md-3">
              <div className="product-discription">
                <div className="mobshow com-heading">
                  <h4>{t("comparison.comprehensive")}</h4>
                  <p>{t("comparison.breathalyzer")}</p>
                </div>
                <ul>
                  <li>{t("comparison.fuel_cell")} :</li>
                  <li>{t("comparison.alcohol_test")} :</li>
                  <li>{t("comparison.data_export")} :</li>
                  <li>{t("comparison.onion_garlic")}:</li>
                  <li>{t("comparison.price")} :</li>
                  <li>{t("comparison.accuracy")} :</li>
                  <li>{t("comparison.weight")} :</li>
                  <li>{t("comparison.portability")} :</li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="dis-img">
                <div className="disc-inner-img-one">
                  <h4>
                    <strong>{t("comparison.prana_air")}</strong> {t("comparison.breathalyzer")}
                  </h4>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-for-comparison.jpeg"
                    alt={t("comparison.prana_air_alt")}
                    width={205}
                    height={200}
                  />
                </div>
                <div className="disc-inner-img-two">
                  <h4>{t("comparison.ordinary")}</h4>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/ordinary-breathalyzer-for-comparison.jpeg"
                    alt={t("comparison.ordinary_alt")}
                    width={205}
                    height={200}
                  />
                </div>
                <div className="disc-inner-img-three">
                  <h4>{t("comparison.high_end")}</h4>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/high-end-breathalyzer-for-comparison.jpeg"
                    alt={t("comparison.high_end_alt")}
                    width={205}
                    height={200}
                  />
                </div>
              </div>
              <div className="product-feature">
                <ul className="mini-co-monitor">
                  <li>✔</li>
                  <li className="tab-bg">✔</li>
                  <li>✔</li>
                  <li className="tab-bg">{t("comparison.not_detected")}</li>
                  <li>$$$$</li>
                  <li className="tab-bg">{t("comparison.very_high")}</li>
                  <li>{t("comparison.lightweight")}</li>
                  <li className="tab-bg">{t("comparison.easily_portable")}</li>
                </ul>
                <ul className="co-multifuntion-monitor">
                  <li>X</li>
                  <li>✔</li>
                  <li>X</li>
                  <li>{t("comparison.detected_as_alcohol")}</li>
                  <li>$$$</li>
                  <li>{t("comparison.low")}</li>
                  <li>{t("comparison.lightweight")}</li>
                  <li>{t("comparison.easily_portable")}</li>
                </ul>
                <ul className="co-multifuntion-monitor">
                  <li>✔</li>
                  <li>✔</li>
                  <li>✔</li>
                  <li>{t("comparison.not_detected")}</li>
                  <li>$$$$$</li>
                  <li>{t("comparison.very_high")}</li>
                  <li>{t("comparison.bulky")}</li>
                  <li>{t("comparison.less_portable")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAC Standard Section */}
      <section className="data-export-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 ipad">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/06/police-checking-alcohol-test-with-a-breathalyzer.jpeg"
                alt={t("bac_standard.image_alt")}
                width={400}
                height={300}
                className="data-img bca-img"
              />
            </div>
            <div className="col-lg-7 col-md-12 export-data-bg bca-stanrd-bg ipad">
              <div className="bca-txt">
                <h4>{t("bac_standard.title")}</h4>
                <h3>{t("bac_standard.subtitle")}</h3>
                <p>
                  {t("bac_standard.description")}
                </p>
                <Link
                  className="myBtn"
                  href="https://www.pranaair.com/wp-content/uploads/2023/06/alcohol-concentration-standards.jpg"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("bac_standard.view_standards")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractive Details Section */}
      <section className="attractive-details-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="attractive-txt">
                <h4>{t("attractive_details.title")}</h4>
                <p>{t("attractive_details.subtitle")}</p>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 col-md-12">
              <div className="tft-display-box">
                <h3>{t("attractive_details.tft_title")}</h3>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-tft-display.png"
                  alt={t("attractive_details.tft_alt")}
                  width={600}
                  height={400}
                  className="feature-img"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="type-c-box">
                    <div className="type-c-content">
                      <h3>{t("attractive_details.type_c_title")}</h3>
                      <p>{t("attractive_details.type_c_subtitle")}</p>
                    </div>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalzyer-with-type-c-charging.png"
                      alt={t("attractive_details.type_c_alt")}
                      width={600}
                      height={200}
                      className="feature-img"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="lithium-box">
                    <div className="lithium-content">
                      <h3>{t("attractive_details.lithium_title")}</h3>
                      <p>{t("attractive_details.lithium_subtitle")}</p>
                    </div>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-battery-capacity.png"
                      alt={t("attractive_details.lithium_alt")}
                      width={600}
                      height={200}
                      className="feature-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="technical-specification" id="spec">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="attractive-txt product-specification-heading">
                <p>{t("specifications.product")}</p>
                <h4>{t("specifications.title")}</h4>
              </div>
            </div>
            <div className="col-md-9">
              <div className="brochore-btn">
                <Link href="https://www.pranaair.com/wp-content/uploads/2023/08/prana-air-alcohol-breathalyzer-brochure.pdf">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/brochore-btn.png"
                    alt={t("specifications.brochure_alt")}
                    width={20}
                    height={20}
                  />
                  {t("specifications.download_brochure")}
                </Link>
              </div>
            </div>
          </div>
          <div className="row mid-box mob-scroll">
            <div className="col-md-6 box-line">
              <div className="product-specifi">
                {t("specifications.product_name")} :<h4>{t("specifications.breathalyzer")}</h4>
              </div>
              <div className="product-specifi shdw-line">
                {t("specifications.sensor")} :<h4>{t("specifications.electrochemical")}</h4>
              </div>
              <div className="product-specifi">
                {t("specifications.working_current")} :<h4>-20~60°C</h4>
              </div>
              <div className="product-specifi shdw-line">
                {t("specifications.device_dimension")} :<h4>6.6 x 4x 1.6 (cm)</h4>
              </div>
              <div className="product-specifi">
                {t("specifications.blowing_test")} :<h4>35 Sec</h4>
              </div>
              <div className="product-specifi shdw-line">
                {t("specifications.measuring_range")} :<h4>0 ~ 1.00mg/l</h4>
              </div>
              <div className="product-specifi">
                {t("specifications.battery")}:
                <h4>{t("specifications.lithium_ion")}</h4>
              </div>
              <div className="product-specifi shdw-line">
                {t("specifications.weight")} :<h4>30 grams</h4>
              </div>
            </div>
            <div className="col-md-6 box-line">
              <div className="product-specifi">
                {t("specifications.response_time")} :<h4>10 seconds</h4>
              </div>
              <div className="product-specifi">
                {t("specifications.measurements")} :<h4>BAC (%)</h4>
              </div>
              <div className="product-specifi">
                {t("specifications.display")} :<h4>TFT HD Screen</h4>
              </div>
              <div className="product-specifi">
                {t("specifications.data_export")} :<h4>{t("specifications.export_to_computer")}</h4>
              </div>
              <div className="product-specifi">
                {t("specifications.data_refresh")} :<h4>2 Sec</h4>
              </div>
              <div className="product-specifi">
                {t("specifications.charging_mode")} :<h4>USB Type-C</h4>
              </div>
              <div className="product-specifi">
                {t("specifications.data_storage")} :<h4>{t("specifications.onboard_records")}</h4>
              </div>
              <div className="row">
                <div className="col-md-8"></div>
                <div className="col-md-4">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/rosh-icon.png"
                    alt={t("specifications.rohs_alt")}
                    width={80}
                    height={80}
                    className="rosh-iocn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="co-monitore-outdoor-slider">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="breathalyzer-slider-heading">
                <h2>{t("applications.title")}</h2>
                <h3>{t("applications.subtitle")}</h3>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row applications-slider">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="breathalyzer-slider-img">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/doctor-talking-with-his-patient.jpg"
                      alt={t("applications.health.image_alt")}
                      width={280}
                      height={200}
                    />
                    <h4>{t("applications.health.title")}</h4>
                    <p>
                      {t("applications.health.description")}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="breathalyzer-slider-img">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/people-celebrating-party.jpg"
                      alt={t("applications.limit.image_alt")}
                      width={280}
                      height={200}
                    />
                    <h4>{t("applications.limit.title")}</h4>
                    <p>
                      {t("applications.limit.description")}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="breathalyzer-slider-img">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/personal-use-of-breathalyzer-before-drive.jpeg"
                      alt={t("applications.self_testing.image_alt")}
                      width={280}
                      height={200}
                    />
                    <h4>{t("applications.self_testing.title")}</h4>
                    <p>
                      {t("applications.self_testing.description")}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="breathalyzer-slider-img">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prevent-drink-and-drive.jpg"
                      alt={t("applications.road_safety.image_alt")}
                      width={280}
                      height={200}
                    />
                    <h4>{t("applications.road_safety.title")}</h4>
                    <p>
                      {t("applications.road_safety.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="attractive-txt faq-heading">
                <h4>{t("faq.title")}</h4>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
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
                      <h3>1. {t("faq.q1.question")}</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        {t("faq.q1.answer")}
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
                      <h3>2. {t("faq.q2.question")}</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        {t("faq.q2.answer")}
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
                      <h3>3. {t("faq.q3.question")}</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        {t("faq.q3.answer")}
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
                      <h3>4. {t("faq.q4.question")}</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        {t("faq.q4.answer")}
                      </p>
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
                      <h3>5. {t("faq.q5.question")}</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        {t("faq.q5.answer")}
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
                      <h3>6. {t("faq.q6.question")}</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        {t("faq.q6.answer")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      <h3>7. {t("faq.q7.question")}</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        {t("faq.q7.answer")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEight">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      <h3>8. {t("faq.q8.question")}</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        {t("faq.q8.answer")}
                      </p>
                    </div>
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