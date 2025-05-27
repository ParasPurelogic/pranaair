import VideoPlayer from "@/Components/Pages/WearableAirpurifier/VideoPlayer"
import "./style.css"
import ProductSlider from "@/Components/Pages/PranaSensMonitor/product-slider"
import { getServerTranslation } from "@/i18n/server"

export default async function PranaAirPersonal() {
  const { t } = await getServerTranslation("wearable-air-purifier")
  const manufacturingImages = [
    {
      src: "https://www.pranaair.com/wp-content/uploads/2024/10/prana-sense-and-its-pcb.jpg",
      alt: "Prana sense and its PCB"
    },
    {
      src: "https://www.pranaair.com/wp-content/uploads/2024/10/internal-parts-of-prana-sense-monitor.jpg",
      alt: "Internal parts of Prana sense monitor"
    },
    {
      src: "https://www.pranaair.com/wp-content/uploads/2024/10/assembling-prana-sense-monitor.jpg",
      alt: "Assembling Prana sense monitor"
    },
    {
      src: "https://www.pranaair.com/wp-content/uploads/2024/10/air-quality-sensors-of-prana-sense-monitor.jpg",
      alt: "Air quality sensors of Prana sense monitor"
    }
  ];
  return (
    <div>
      {/* Header Section */}
      <section className="header" id="new-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="sticky-bar">
                <ul className="nav navbar-nav new-nav-bar" id="pranaNavbar">
                  <li className="nav-item">
                    <a className="nav-link active" href="#overview" data-bs-toggle="tab" role="tab">
                      {t("personalPurifier.nav.overview")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#features" data-bs-toggle="tab" role="tab">
                      {t("personalPurifier.nav.features")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#dual" data-bs-toggle="tab" role="tab">
                      {t("personalPurifier.nav.dualIons")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#comparison" data-bs-toggle="tab" role="tab">
                      {t("personalPurifier.nav.comparison")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#spec" data-bs-toggle="tab" role="tab">
                      {t("personalPurifier.nav.specs")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner-section" id="overview">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="banner-txt banner-txt-anim">
                <h4>{t("personalPurifier.banner.subtitle")}</h4>
                <h2>{t("personalPurifier.banner.title1")}</h2>
                <ul>
                  <li>P</li>
                  <li>u</li>
                  <li>r</li>
                  <li>i</li>
                  <li>f</li>
                  <li>i</li>
                  <li>e</li>
                  <li>r</li>
                </ul>
                {t("personalPurifier.banner.title2")}
                <div className="buy-now-box">
                  <button className="single_add_to_cart_button button alt button button_slide slide_right">
                    {t("personalPurifier.banner.buyNow")}{" "}
                    <img
                      className="banner-btn-arrow"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/banner-btn-arrow.png"
                      alt={t("personalPurifier.banner.arrowAlt")}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-personal-wearable-air-purifier.png"
                alt={t("personalPurifier.banner.imageAlt")}
                className="banner-girl-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Elimination Section */}
      <div className="container">
        <div className="row elimation-heading">
          <div className="col-md-12">
            <div className="elimination-heading">
              <h3>
                <img
                  className="rotet"
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/heading-ion-icon.png"
                  alt={t("personalPurifier.elimination.iconAlt")}
                />
                {t("personalPurifier.elimination.title")}
              </h3>
              {t("personalPurifier.elimination.description")}
            </div>
          </div>
        </div>
      </div>

      <section className="elimination-bg-section">
        <div className="container">
          <div className="row mobile-layout">
            <div className="col-md-4 mobile-position-change">
              <div className="elimination-specs">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/ensuring-cleaner-air-icon.png"
                      alt={t("personalPurifier.elimination.pollen.iconAlt")}
                    />
                  </li>
                  <li>
                    <h5>{t("personalPurifier.elimination.pollen.text")}</h5>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/effectively-traps-icon.png"
                      alt={t("personalPurifier.elimination.dust.iconAlt")}
                    />
                  </li>
                  <li>
                    <h5>{t("personalPurifier.elimination.dust.text")}</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/personal-air-purifier-cleaning-pollutants.png"
                alt={t("personalPurifier.elimination.deviceAlt")}
                className="elimination-device-img"
              />
            </div>
            <div className="col-md-4">
              <div className="elimination-specs">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/tackles-harmful-icons.png"
                      alt={t("personalPurifier.elimination.pm25.iconAlt")}
                    />
                  </li>
                  <li>
                    <h5>{t("personalPurifier.elimination.pm25.text")}</h5>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/remove-smoke-.png"
                      alt={t("personalPurifier.elimination.smoke.iconAlt")}
                    />
                  </li>
                  <li>
                    <h5>{t("personalPurifier.elimination.smoke.text")}</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impressive Features Section */}
      <section className="impressive-feature-section" id="features">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="impressive-feature">
                <h3>{t("personalPurifier.features.title")}</h3>
                <h5>{t("personalPurifier.features.subtitle")}</h5>
              </div>
              <div className="impressive-feature-icon-box">
                <div className="impressive-feature-icons">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/high-density-negative-ion.png"
                        alt={t("personalPurifier.features.dualIon.iconAlt")}
                      />
                    </li>
                    <li>
                      <h4>{t("personalPurifier.features.dualIon.title")}</h4>
                      {t("personalPurifier.features.dualIon.description")}
                    </li>
                  </ul>
                </div>
                <div className="impressive-feature-icons">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/long-battery-life-icon.png"
                        alt={t("personalPurifier.features.battery.iconAlt")}
                      />
                    </li>
                    <li>
                      <h4>{t("personalPurifier.features.battery.title")}</h4>
                      {t("personalPurifier.features.battery.description")}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="impressive-feature-icon-box">
                <div className="impressive-feature-icons">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/extended-runtime-icon.png"
                        alt={t("personalPurifier.features.runtime.iconAlt")}
                      />
                    </li>
                    <li>
                      <h4>{t("personalPurifier.features.runtime.title")}</h4>
                      {t("personalPurifier.features.runtime.description")}
                    </li>
                  </ul>
                </div>
                <div className="impressive-feature-icons">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/ultra-quite-design-icon.png"
                        alt={t("personalPurifier.features.quiet.iconAlt")}
                      />
                    </li>
                    <li>
                      <h4>{t("personalPurifier.features.quiet.title")}</h4>
                      {t("personalPurifier.features.quiet.description")}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="impressive-feature-icon-box">
                <div className="impressive-feature-icons">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/portable-and-wearable-icon.png"
                        alt={t("personalPurifier.features.portable.iconAlt")}
                      />
                    </li>
                    <li>
                      <h4>{t("personalPurifier.features.portable.title")}</h4>
                      {t("personalPurifier.features.portable.description")}
                    </li>
                  </ul>
                </div>
                <div className="impressive-feature-icons">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/no-filter-replacements-icon.png"
                        alt={t("personalPurifier.features.noFilter.iconAlt")}
                      />
                    </li>
                    <li>
                      <h4>{t("personalPurifier.features.noFilter.title")}</h4>
                      {t("personalPurifier.features.noFilter.description")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/portable-personal-air-purifier.png"
                alt={t("personalPurifier.features.imageAlt")}
                className="frature-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wearable Section */}
      <section className="wearable-section">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-6">
              <img
                className="wearable-arrow-icon"
                src="https://www.pranaair.com/wp-content/uploads/2023/06/wearable-arrow-icon.png"
                alt={t("personalPurifier.wearable.arrowAlt")}
              />
              <div className="wearable-box">
                <h3>{t("personalPurifier.wearable.title")}</h3>
                <h4>{t("personalPurifier.wearable.subtitle")}</h4>
                <p>{t("personalPurifier.wearable.description")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-wearable-purifier-1024x466.jpeg"
                alt={t("personalPurifier.wearable.imageAlt")}
                className="wearable-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="benefit-section">
              <h3>{t("personalPurifier.benefits.title")}</h3>
              <h5>{t("personalPurifier.benefits.subtitle")}</h5>
            </div>
          </div>
        </div>
      </div>

      <section className="benefit-bg-section">
        <div className="container">
          <div className="row benefits-colum">
            <div className="col-md-2 col-sm-4">
              <div className="benefit-icon-box">
                <div className="benefit-icons">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/healthier-breathing-icon.png"
                    alt={t("personalPurifier.benefits.breathing.iconAlt")}
                  />
                </div>
                <div className="benfit-txt">
                  <h3>{t("personalPurifier.benefits.breathing.title")}</h3>
                  <p>{t("personalPurifier.benefits.breathing.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="benefit-icon-box">
                <div className="benefit-icons">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/enhanced-focus-icon.png"
                    alt={t("personalPurifier.benefits.focus.iconAlt")}
                  />
                </div>
                <div className="benfit-txt">
                  <h3>{t("personalPurifier.benefits.focus.title")}</h3>
                  <p>{t("personalPurifier.benefits.focus.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 left-side">
              <div className="benefit-icon-box">
                <div className="benefit-icons">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/smoke-removal-icon.png"
                    alt={t("personalPurifier.benefits.smoke.iconAlt")}
                  />
                </div>
                <div className="benfit-txt">
                  <h3>{t("personalPurifier.benefits.smoke.title")}</h3>
                  <p>{t("personalPurifier.benefits.smoke.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="benefit-icon-box">
                <div className="benefit-icons">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/strong-immunity-icn.png"
                    alt={t("personalPurifier.benefits.immunity.iconAlt")}
                  />
                </div>
                <div className="benfit-txt">
                  <h3>{t("personalPurifier.benefits.immunity.title")}</h3>
                  <p>{t("personalPurifier.benefits.immunity.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="benefit-icon-box">
                <div className="benefit-icons">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/customizable-purification-icon.png"
                    alt={t("personalPurifier.benefits.customizable.iconAlt")}
                  />
                </div>
                <div className="benfit-txt">
                  <h3>{t("personalPurifier.benefits.customizable.title")}</h3>
                  <p>{t("personalPurifier.benefits.customizable.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-work-section">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-6">
              <div className="how-to-work-text">
                <h3>
                  {t("personalPurifier.howItWorks.title")}{" "}
                  <img
                    className="floating"
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/negetive-ions-.png"
                    alt={t("personalPurifier.howItWorks.iconAlt")}
                  />
                </h3>
                <h5>{t("personalPurifier.howItWorks.subtitle")}</h5>
                <p>{t("personalPurifier.howItWorks.description")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/dual-negative-ions-emitter-in-prana-air-purifier--768x637.png"
                alt={t("personalPurifier.howItWorks.imageAlt")}
                className="how-work-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="step-video-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="video-heading">
                <h4>
                  {t("personalPurifier.video1.title1")}{" "}
                  <span className="prana">{t("personalPurifier.video1.titleHighlight")}</span>{" "}
                  {t("personalPurifier.video1.title2")}
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-paara">
                <p>{t("personalPurifier.video1.description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <VideoPlayer
                thumbnailSrc="https://www.pranaair.com/wp-content/uploads/2023/06/how-to-use-prana-wearable-purifier-video-thumbnail-1536x658.jpg"
                videoSrc="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-personal-air-purifier-cleaning-smoke.mp4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Effortless Operation Section */}
      <section className="effortless-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="effortless-heading">
                <h3>{t("personalPurifier.operation.title")}</h3>
                <p>{t("personalPurifier.operation.subtitle")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="effortless-box">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/2nd-step-to-switch-the-mode-of-purifier.png"
                      alt={t("personalPurifier.operation.step1.imageAlt")}
                    />
                  </li>
                  <li className="long-press-top">
                    <h3>{t("personalPurifier.operation.step1.number")}</h3>
                    <p>{t("personalPurifier.operation.step1.description")}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="effortless-box">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/2nd-step-to-switch-the-mode-of-purifier.png"
                      alt={t("personalPurifier.operation.step2.imageAlt")}
                    />
                  </li>
                  <li className="green-top">
                    <h3>{t("personalPurifier.operation.step2.number")}</h3>
                    <p>{t("personalPurifier.operation.step2.description")}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="effortless-box">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/red-indicator-when-need-to-charge.png"
                      alt={t("personalPurifier.operation.step3.imageAlt")}
                    />
                  </li>
                  <li className="red-indicator-top">
                    <h3>{t("personalPurifier.operation.step3.number")}</h3>
                    <p>{t("personalPurifier.operation.step3.description")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ionization Technology Section */}
      <section className="lonization-tech-section" id="dual">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-6 lonization-colm-bg">
              <div className="lonization-text">
                <h4>{t("personalPurifier.ionization.subtitle")}</h4>
                <h3>{t("personalPurifier.ionization.title")}</h3>
                <p>{t("personalPurifier.ionization.description")}</p>
              </div>
            </div>
            <div className="col-md-6 lonization-tech-img-bg">
              <div className="dual-icon-txt">
                <h4>{t("personalPurifier.ionization.dual.title")}</h4>
                <h5>
                  {t("personalPurifier.ionization.dual.subtitle1")}{" "}
                  <span className="dual-icon">{t("personalPurifier.ionization.dual.highlight")}</span>{" "}
                  {t("personalPurifier.ionization.dual.subtitle2")}
                </h5>
              </div>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/lonization-technology-of-prana-air-purifier-738x1024.png"
                alt={t("personalPurifier.ionization.imageAlt")}
                className="lonization-tech-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stay Protected Section */}
      <section className="stay-protected-section">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-6">
              <div className="stay-protect-txt">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/stay-protected-icon.jpg"
                  alt={t("personalPurifier.protected.iconAlt")}
                />
                <h3>{t("personalPurifier.protected.title")}</h3>
                <h4>{t("personalPurifier.protected.subtitle")}</h4>
                <p>{t("personalPurifier.protected.description")}</p>
              </div>
            </div>
            <div className="col-md-6 stay-protect-ing-bg">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/stay-protected-with-prana-air-purifier-768x499.jpeg"
                alt={t("personalPurifier.protected.imageAlt")}
                className="stay-protect-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="air-purifier-other-purifier-section" id="comparison">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="purifier-heading">
                <h3>{t("personalPurifier.comparison.pranaTitle")}</h3>
                <h5>{t("personalPurifier.comparison.pranaSubtitle")}</h5>
              </div>
            </div>
            <div className="col-md-5">
              <div className="other-purifier-heading">
                <h5>{t("personalPurifier.comparison.otherTitle")}</h5>
                <h6>{t("personalPurifier.comparison.otherSubtitle")}</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 paran-purifier-col-bg">
              <div className="row">
                <div className="col-md-6">
                  <div className="dual-icon-txt parna-purifieri-txt">
                    <h4>{t("personalPurifier.comparison.prana.title")}</h4>
                    <h5>
                      {t("personalPurifier.comparison.prana.subtitle1")}{" "}
                      <span className="dual-icon">{t("personalPurifier.comparison.prana.highlight")}</span>{" "}
                      {t("personalPurifier.comparison.prana.subtitle2")}
                    </h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-dual-negative-ions-emitters-768x739.png"
                    alt={t("personalPurifier.comparison.prana.imageAlt")}
                    className="prana-purifier-img"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5 other-purifier-col-bg">
              <div className="row">
                <div className="col-md-6">
                  <div className="other-purifieri-txt">
                    <h4>{t("personalPurifier.comparison.other.title")}</h4>
                    <h5>{t("personalPurifier.comparison.other.subtitle")}</h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/other-purifier-with-single-ion-emitter-300x435.png"
                    alt={t("personalPurifier.comparison.other.imageAlt")}
                    className="other-purifier-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Application Video Section */}
      <section className="step-video2-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="video-heading">
                <h4>
                  {t("personalPurifier.video2.title1")}{" "}
                  <span className="prana">{t("personalPurifier.video2.titleHighlight")}</span>{" "}
                  {t("personalPurifier.video2.title2")}
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-paara">
                <p>{t("personalPurifier.video2.description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <VideoPlayer
                thumbnailSrc="https://www.pranaair.com/wp-content/uploads/2023/06/paran-air-purifier-video-thumbnail.jpeg"
                videoSrc="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-personal-air-purifier-cleaning-smoke.mp4"
                iconSrc="https://www.pranaair.com/wp-content/uploads/2023/06/video-play-icon-button.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Age Group Section */}
      <section className="every-age-group-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="age-group-heading">
                <h3>{t("personalPurifier.ageGroups.title")}</h3>
                <h4>{t("personalPurifier.ageGroups.subtitle")}</h4>
              </div>
            </div>
          </div>
          <div className="row mob-scroll">
            <div className="col-md-4">
              <div className="age-group-imgs">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/personal-air-purifier-for-child-768x735.jpeg"
                  alt={t("personalPurifier.ageGroups.kids.imageAlt")}
                />
              </div>
              <div className="age-group-txt-para">
                <h4>{t("personalPurifier.ageGroups.kids.title")}</h4>
                <p>{t("personalPurifier.ageGroups.kids.description")}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="age-group-imgs">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/use-of-prana-air-purifier-in-office-768x735.jpeg"
                  alt={t("personalPurifier.ageGroups.adults.imageAlt")}
                />
              </div>
              <div className="age-group-txt-para">
                <h4>{t("personalPurifier.ageGroups.adults.title")}</h4>
                <p>{t("personalPurifier.ageGroups.adults.description")}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="age-group-imgs">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/old-man-using-personal-air-purifier-768x735.jpeg"
                  alt={t("personalPurifier.ageGroups.elderly.imageAlt")}
                />
              </div>
              <div className="age-group-txt-para">
                <h4>{t("personalPurifier.ageGroups.elderly.title")}</h4>
                <p>{t("personalPurifier.ageGroups.elderly.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractive Details Section */}
      <section className="attractive-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="benefit-section attractive-heading">
                <h3>
                  <img
                    className="rotet"
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/heading-ion-icon.png"
                    alt={t("personalPurifier.attractive.iconAlt")}
                  />{" "}
                  {t("personalPurifier.attractive.title")}
                </h3>
                <h5>{t("personalPurifier.attractive.subtitle")}</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 attractive-dark-colm">
              <div className="row">
                <div className="col-md-4">
                  <div className="product-feature-heading">
                    <ul className="left-heading">
                      <li>
                        <h4>
                          {t("personalPurifier.attractive.features.lowGear")}
                          <img
                            className="deskshow"
                            src="https://www.pranaair.com/wp-content/uploads/2023/06/feature-line-upper.png"
                            alt={t("personalPurifier.attractive.features.lineAlt")}
                          />
                        </h4>
                      </li>
                      <li>
                        <h4>
                          {t("personalPurifier.attractive.features.highGear")}{" "}
                          <img
                            className="deskshow"
                            src="https://www.pranaair.com/wp-content/uploads/2023/06/feature-line.png"
                            alt={t("personalPurifier.attractive.features.lineAlt")}
                          />
                        </h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-wearable-air-purifier-300x443.png"
                    alt={t("personalPurifier.attractive.productAlt")}
                    className="product-feature-img"
                  />
                </div>
                <div className="col-md-4">
                  <div className="product-feature-heading">
                    <ul className="right-heading">
                      <li>
                        <h4>
                          <img
                            className="deskshow"
                            src="https://www.pranaair.com/wp-content/uploads/2023/06/feature-line-upper.png"
                            alt={t("personalPurifier.attractive.features.lineAlt")}
                          />
                          {t("personalPurifier.attractive.features.batteryIndicator")}
                        </h4>
                      </li>
                      <li>
                        <h4>
                          <img
                            className="deskshow"
                            src="https://www.pranaair.com/wp-content/uploads/2023/06/feature-line-upper.png"
                            alt={t("personalPurifier.attractive.features.lineAlt")}
                          />{" "}
                          {t("personalPurifier.attractive.features.switchKey")}
                        </h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 attractive-light-colm">
              <div className="row mobile-revres-coulm">
                <div className="col-md-6 mob-down-postion">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/air-purifier-type-c-charging-300x481.png"
                    alt={t("personalPurifier.attractive.typeC.imageAlt")}
                    className="type-c-charger-img"
                  />
                </div>
                <div className="col-md-6">
                  <div className="type-c-heading">
                    <h3>{t("personalPurifier.attractive.typeC.title")}</h3>
                    <h5>{t("personalPurifier.attractive.typeC.subtitle")}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mobile-revres-coulm">
            <div className="col-md-6 attractive-hanging-colm">
              <div className="row mobile-flex-dric">
                <div className="col-md-6">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/hanging-device-img-300x463.png"
                    alt={t("personalPurifier.attractive.hanging.imageAlt")}
                    className="hanging-device-img"
                  />
                </div>
                <div className="col-md-6">
                  <div className="type-c-heading hanging-heading">
                    <h3>{t("personalPurifier.attractive.hanging.title")}</h3>
                    <h5>{t("personalPurifier.attractive.hanging.subtitle")}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 two-modes-colm">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/two-modes-of-speed-in-prana-air-personal-air-purifier-768x876.png"
                    alt={t("personalPurifier.attractive.modes.imageAlt")}
                    className="two-modes-img"
                  />
                </div>
                <div className="col-md-6">
                  <div className="two-mode-heading">
                    <h3>{t("personalPurifier.attractive.modes.title")}</h3>
                    <ul>
                      <li>{t("personalPurifier.attractive.modes.highGear")}</li>
                      <li>{t("personalPurifier.attractive.modes.lowGear")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="technical-spec-section" id="spec">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="technical-spec-heading">
                <h3>
                  <img
                    className="rotet"
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/heading-ion-icon.png"
                    alt={t("personalPurifier.specs.iconAlt")}
                  />{" "}
                  {t("personalPurifier.specs.title")}
                </h3>
                <h5>{t("personalPurifier.specs.subtitle")}</h5>
              </div>
            </div>
            <div className="col-md-8">
              <div className="brochore-btn">
                <a href="#">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/brochore-btn.png"
                    alt={t("personalPurifier.specs.brochureAlt")}
                  />{" "}
                  {t("personalPurifier.specs.downloadBrochure")}
                </a>
              </div>
            </div>
          </div>
          <div className="row mid-box">
            <div className="col-md-4 box-line">
              <div className="product-specifi shdw-line">
                <p>{t("personalPurifier.specs.ionConcentration.label")}</p>
                <h4>{t("personalPurifier.specs.ionConcentration.value")}</h4>
              </div>
              <div className="product-specifi mrg-btm">
                <p>{t("personalPurifier.specs.weight.label")}</p>
                <h4>{t("personalPurifier.specs.weight.value")}</h4>
              </div>
              <div className="product-specifi">
                <p>{t("personalPurifier.specs.voltage.label")}</p>
                <h4>{t("personalPurifier.specs.voltage.value")}</h4>
              </div>
            </div>
            <div className="col-md-4 mob-product-spec-box1">
              <div className="product-specifi shdw-line">
                <p>{t("personalPurifier.specs.model.label")}</p>
                <h4>{t("personalPurifier.specs.model.value")}</h4>
              </div>
              <div className="product-specifi mob-mrg-btm">
                <p>{t("personalPurifier.specs.batteryCapacity.label")}</p>
                <h4>{t("personalPurifier.specs.batteryCapacity.value")}</h4>
              </div>
              <div className="product-specifi">
                <p>{t("personalPurifier.specs.batteryLife.label")}</p>
                <h4>{t("personalPurifier.specs.batteryLife.value")}</h4>
              </div>
            </div>
            <div className="col-md-4 mob-product-spec-box2">
              <div className="product-specifi">
                <p>{t("personalPurifier.specs.chargingTime.label")}</p>
                <h4>{t("personalPurifier.specs.chargingTime.value")}</h4>
              </div>
              <div className="product-specifi mob-mrg-btm">
                <p>{t("personalPurifier.specs.size.label")}</p>
                <h4>{t("personalPurifier.specs.size.value")}</h4>
              </div>
              <div className="product-specifi">
                <p>{t("personalPurifier.specs.filter.label")}</p>
                <h4>{t("personalPurifier.specs.filter.value")}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customize Section */}
      <section className="customize-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="customize-slider-heading">
                <h2>{t("personalPurifier.customize.title")}</h2>
                <h4>{t("personalPurifier.customize.subtitle")}</h4>
              </div>
            </div>
            <div className="col-md-9">
              <ProductSlider manufacturingImages={manufacturingImages} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="tab-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="frequently-asked-questions">
                    <h4>{t("personalPurifier.faq.title")}</h4>
                  </div>
                </div>
                <div className="col-md-8"></div>
              </div>

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
                      {t("personalPurifier.faq.q1")}
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{t("personalPurifier.faq.a1")}</div>
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
                      {t("personalPurifier.faq.q2")}
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{t("personalPurifier.faq.a2")}</div>
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
                      {t("personalPurifier.faq.q3")}
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{t("personalPurifier.faq.a3")}</div>
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
                      {t("personalPurifier.faq.q4")}
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{t("personalPurifier.faq.a4")}</div>
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
                      {t("personalPurifier.faq.q5")}
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{t("personalPurifier.faq.a5")}</div>
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
                      {t("personalPurifier.faq.q6")}
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{t("personalPurifier.faq.a6")}</div>
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
                      {t("personalPurifier.faq.q7")}
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{t("personalPurifier.faq.a7")}</div>
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
                      {t("personalPurifier.faq.q8")}
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{t("personalPurifier.faq.a8")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Overlay */}
      <div id="video-overlay" className="video-overlay"></div>

      {/* Bootstrap Initialization Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Initialize Bootstrap components
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
              return new bootstrap.Tooltip(tooltipTriggerEl);
            });
            
            // Make header sticky on scroll
            window.addEventListener('scroll', function() {
              var header = document.getElementById('new-header');
              if (window.scrollY >= 50) {
                header.classList.add('sticky');
              } else {
                header.classList.remove('sticky');
              }
            });
            
            // Handle nav item active state on scroll
            var sections = document.querySelectorAll('section[id]');
            window.addEventListener('scroll', function() {
              var scrollY = window.scrollY;
              
              sections.forEach(function(section) {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                  document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.add('active');
                } else {
                  document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.remove('active');
                }
              });
            });
          });
        `,
        }}
      />
    </div>
  )
}
