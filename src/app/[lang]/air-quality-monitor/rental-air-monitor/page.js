import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain } from "@/config"

// ✅ SEO Metadata
export async function generateMetadata() {
  const { t } = await getServerTranslation("pocket-co2");
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
export default async function RentalAirMonitorPage() {
  const { t } = await getServerTranslation("pocket-co2")

  return (
    <main className="rental-air-monitor-page">
      {/* Banner Section */}
      <section className="school_banner_box">
        <div className="container">
          <div className="row">
            <div className="col-md-6 banner_quality_box">
              <div className="pocket_title_box school_aqi_box">
                <h1>
                  <strong>{t("rentalBanner.title.part1")} </strong>{" "}
                  <span className="bold_text">{t("rentalBanner.title.highlight")}</span>
                </h1>
                <p>{t("rentalBanner.description")}</p>
                <ul className="rate_list">
                  <li>{t("rentalBanner.benefits.lowCost")}</li>
                  <li>{t("rentalBanner.benefits.timeSaving")}</li>
                  <li>{t("rentalBanner.benefits.hassleFree")}</li>
                </ul>
                <a className="pocket_buy_btn" href="#get_in_touch">
                  {t("rentalBanner.contactButton")}
                </a>
              </div>
            </div>
            <div className="col-md-6 banner_quality_img_box">
              <div className="rental_fetaure_box">
                <span className="featured_icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/wifi.png"
                    width="25"
                    height="22"
                    alt={t("rentalBanner.altTexts.wifi")}
                  />
                </span>
                {t("rentalBanner.features.wifi")}
              </div>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/09/prana-air-squair-air-quality-monitor-for-rent.png"
                alt={t("rentalBanner.altTexts.rentalMonitor")}
                className="img-fluid"
              />
              <div className="rental_fetaure_box rental_fetaure_box2">
                <span className="featured_icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/app.png"
                    width="14"
                    height="26"
                    alt={t("rentalBanner.altTexts.app")}
                  />
                </span>
                {t("rentalBanner.features.mobileApp")}
              </div>
              <div className="rental_fetaure_box rental_fetaure_box3">
                <span className="featured_icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/data.png"
                    width="20"
                    height="20"
                    alt={t("rentalBanner.altTexts.data")}
                  />
                </span>
                {t("rentalBanner.features.realTimeData")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Rental the Best Option Section */}
      <section className="best-option-section">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2>{t("rentalBenefits.title")}</h2>
            <p>{t("rentalBenefits.description")}</p>
          </div>

          <div className="row process_box">
            <div className="col-md-3">
              <div className="process-item">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/low-cost-device-icon.png"
                    alt={t("rentalBenefits.benefits.minimalPrice.altText")}
                    width="73"
                    height="88"
                  />
                </h4>
                <h3>{t("rentalBenefits.benefits.minimalPrice.title")}</h3>
                <p>{t("rentalBenefits.benefits.minimalPrice.description")}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-item">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/easy-procedure-icon.png"
                    alt={t("rentalBenefits.benefits.simpleProcedure.altText")}
                    width="73"
                    height="73"
                  />
                </h4>
                <h3>{t("rentalBenefits.benefits.simpleProcedure.title")}</h3>
                <p>{t("rentalBenefits.benefits.simpleProcedure.description")}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-item">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/no-maintenance-cost.png"
                    alt={t("rentalBenefits.benefits.noUpkeep.altText")}
                    width="74"
                    height="75"
                  />
                </h4>
                <h3>{t("rentalBenefits.benefits.noUpkeep.title")}</h3>
                <p>{t("rentalBenefits.benefits.noUpkeep.description")}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-item">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/data-accurate-reports.png"
                    alt={t("rentalBenefits.benefits.preciseReports.altText")}
                    width="73"
                    height="73"
                  />
                </h4>
                <h3>{t("rentalBenefits.benefits.preciseReports.title")}</h3>
                <p>{t("rentalBenefits.benefits.preciseReports.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prana Air SQUAIR Monitor Section */}
      <section className="squair-monitor-section">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              <strong>{t("rentalSquairMonitor.title")}</strong>
            </h2>
            <p>{t("rentalSquairMonitor.description")}</p>
            <Link className="pocket_buy_btn" href={`${domain}/air-quality-monitor`}>
              {t("rentalSquairMonitor.knowMoreButton")}
            </Link>
          </div>

          <div className="text-center">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2022/09/prana-air-squair-monitor-as-iaq-device.png"
              alt={t("rentalSquairMonitor.altTexts.squairMonitor")}
              className="img-fluid"
            />
          </div>

          <div className="featured_cntr">
            <div className="feature_box">
              <img
                className="responsive_icon"
                src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-parameter.png"
                alt={t("rentalSquairMonitor.features.pm25.altText")}
                width="58"
                height="46"
              />
              <div className="feature_wrap_box">
                <h4>{t("rentalSquairMonitor.features.pm25.title")}</h4>
              </div>
            </div>
            <div className="feature_box">
              <img
                className="responsive_icon"
                src="https://www.pranaair.com/wp-content/uploads/2022/07/co2.png"
                alt={t("rentalSquairMonitor.features.co2.altText")}
                width="58"
                height="46"
              />
              <div className="feature_wrap_box">
                <h4>{t("rentalSquairMonitor.features.co2.title")}</h4>
              </div>
            </div>
            <div className="feature_box">
              <img
                className="responsive_icon"
                src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-parameter-icon.png"
                alt={t("rentalSquairMonitor.features.tvoc.altText")}
                width="58"
                height="46"
              />
              <div className="feature_wrap_box">
                <h4>{t("rentalSquairMonitor.features.tvoc.title")}</h4>
              </div>
            </div>
            <div className="feature_box">
              <img
                className="responsive_icon"
                src="https://www.pranaair.com/wp-content/uploads/2022/08/noise-icon.png"
                alt={t("rentalSquairMonitor.features.noise.altText")}
                width="58"
                height="46"
              />
              <div className="feature_wrap_box">
                <h4>{t("rentalSquairMonitor.features.noise.title")}</h4>
              </div>
            </div>
            <div className="feature_box">
              <img
                className="responsive_icon"
                src="https://www.pranaair.com/wp-content/uploads/2022/09/light.png"
                alt={t("rentalSquairMonitor.features.light.altText")}
                width="58"
                height="46"
              />
              <div className="feature_wrap_box">
                <h4>{t("rentalSquairMonitor.features.light.title")}</h4>
              </div>
            </div>
            <div className="feature_box">
              <img
                className="responsive_icon"
                src="https://www.pranaair.com/wp-content/uploads/2022/09/temp.png"
                alt={t("rentalSquairMonitor.features.temperature.altText")}
                width="40"
                height="46"
              />
              <div className="feature_wrap_box">
                <h4>{t("rentalSquairMonitor.features.temperature.title")}</h4>
              </div>
            </div>
            <div className="feature_box">
              <img
                className="responsive_icon"
                src="https://www.pranaair.com/wp-content/uploads/2022/09/humidity-parameter.png"
                alt={t("rentalSquairMonitor.features.humidity.altText")}
                width="40"
                height="46"
              />
              <div className="feature_wrap_box">
                <h4>{t("rentalSquairMonitor.features.humidity.title")}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Data Accessibility Section */}
      <section className="data-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-air-quality-mobile-app.png"
                alt={t("rentalDataAccessibility.altTexts.mobileApp")}
                className="img-fluid mobile_app"
              />
            </div>
            <div className="col-md-6">
              <div className="introducing_box sub_title_box">
                <h2 className="title_heading" style={{ textAlign: "left" }}>
                  <strong>{t("rentalDataAccessibility.title")}</strong>
                </h2>
                <p style={{ textAlign: "left" }}>{t("rentalDataAccessibility.description")}</p>

                <h4 style={{ textAlign: "left" }}>{t("rentalDataAccessibility.featuresTitle")}</h4>
                <p style={{ textAlign: "left" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/okay-icon.png"
                    alt={t("rentalDataAccessibility.altTexts.okayIcon")}
                    width="20"
                    height="20"
                  />{" "}
                  {t("rentalDataAccessibility.features.remoteAccess")}
                </p>
                <p style={{ textAlign: "left" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/okay-icon.png"
                    alt={t("rentalDataAccessibility.altTexts.okayIcon")}
                    width="20"
                    height="20"
                  />{" "}
                  {t("rentalDataAccessibility.features.realTimeUpdates")}
                </p>
                <p style={{ textAlign: "left" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/okay-icon.png"
                    alt={t("rentalDataAccessibility.altTexts.okayIcon")}
                    width="20"
                    height="20"
                  />{" "}
                  {t("rentalDataAccessibility.features.historicalAnalytics")}
                </p>
                <p style={{ textAlign: "left" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/okay-icon.png"
                    alt={t("rentalDataAccessibility.altTexts.okayIcon")}
                    width="20"
                    height="20"
                  />{" "}
                  {t("rentalDataAccessibility.features.graphicalRepresentations")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Process Section */}
      <section className="rental-process-section">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            <strong>{t("rentalProcess.title")}</strong>
          </h2>
          <p style={{ textAlign: "center" }}>{t("rentalProcess.description")}</p>

          <div className="row payment_process_section">
            <div className="col-md-2">
              <div className="process-step">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/payment-icon.png"
                    alt={t("rentalProcess.steps.payment.altText")}
                    width="67"
                    height="67"
                  />
                </h4>
                <h4 style={{ textAlign: "center" }}>
                  <strong>{t("rentalProcess.steps.payment.title")}</strong>
                </h4>
                <p style={{ textAlign: "center" }}>{t("rentalProcess.steps.payment.description")}</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="process-step">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/shipment-icon.png"
                    alt={t("rentalProcess.steps.shipment.altText")}
                    width="67"
                    height="67"
                  />
                </h4>
                <h4 style={{ textAlign: "center" }}>
                  <strong>{t("rentalProcess.steps.shipment.title")}</strong>
                </h4>
                <p style={{ textAlign: "center" }}>{t("rentalProcess.steps.shipment.description")}</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="process-step">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/product-setup-icon.png"
                    alt={t("rentalProcess.steps.setup.altText")}
                    width="67"
                    height="67"
                  />
                </h4>
                <h4 style={{ textAlign: "center" }}>
                  <strong>{t("rentalProcess.steps.setup.title")}</strong>
                </h4>
                <p style={{ textAlign: "center" }}>{t("rentalProcess.steps.setup.description")}</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="process-step">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/support-service-icon.png"
                    alt={t("rentalProcess.steps.support.altText")}
                    width="67"
                    height="67"
                  />
                </h4>
                <h4 style={{ textAlign: "center" }}>
                  <strong>{t("rentalProcess.steps.support.title")}</strong>
                </h4>
                <p style={{ textAlign: "center" }}>{t("rentalProcess.steps.support.description")}</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="process-step">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/product-return-icon.png"
                    alt={t("rentalProcess.steps.return.altText")}
                    width="67"
                    height="67"
                  />
                </h4>
                <h4 style={{ textAlign: "center" }}>
                  <strong>{t("rentalProcess.steps.return.title")}</strong>
                </h4>
                <p style={{ textAlign: "center" }}>{t("rentalProcess.steps.return.description")}</p>
              </div>
            </div>
          </div>

          <div className="row process-images">
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/09/step-1st-payment-received.jpg"
                alt={t("rentalProcess.images.image1")}
                className="img-fluid"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/09/step-2nd-product-delivery.jpg"
                alt={t("rentalProcess.images.image2")}
                className="img-fluid"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/09/step-3rd-product-usage.jpg"
                alt={t("rentalProcess.images.image3")}
                className="img-fluid"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/09/step-4th-product-return.jpg"
                alt={t("rentalProcess.images.image4")}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section
        className="terms-section"
        style={{ backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2022/08/background-icons.png)" }}
      >
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            <strong>{t("rentalTerms.title")}</strong>
          </h2>
          <p style={{ textAlign: "center" }}>{t("rentalTerms.description")}</p>

          <div className="terms-list">
            {t("rentalTerms.terms", { returnObjects: true }).map((term, index) => (
              <p key={index}>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/Rectangle-43.png"
                  alt=""
                  width="14"
                  height="15"
                />{" "}
                {term}
              </p>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
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
      <ContactForm pageName="Rental Monitor Page" />

      {/* FAQ Section */}
      <section className="faq_section faq_ask_section">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              <strong>
                {t("rentalFAQ.title.part1")} <span className="bold_text">{t("rentalFAQ.title.part2")}</span>
              </strong>
            </h2>
            <p>{t("rentalFAQ.subtitle")}</p>
          </div>

          <div className="faq-accordion">
            {t("rentalFAQ.questions", { returnObjects: true }).map((faq, index) => (
              <details key={index}>
                <summary>{`${index + 1}. ${faq.question}`}</summary>
                <div className="faq-content">
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Clientele Section */}
      <section className="clientele-section">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              <strong>
                {t("clientele.title")} <span className="bold_text"></span>
              </strong>
            </h2>
            <p>{t("clientele.description")}</p>
          </div>

          <div className="row client_logo_section">
            <div className="logo-box">
              <ul>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png"
                    alt="Client Logo"
                    className="img-fluid"
                  />
                </li>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png"
                    alt="Client Logo"
                    className="img-fluid"
                  />
                </li>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png"
                    alt="Client Logo"
                    className="img-fluid"
                  />
                </li>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png"
                    alt="Client Logo"
                    className="img-fluid"
                  />
                </li>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/RENAULT-NISSAN.png"
                    alt="Client Logo"
                    className="img-fluid"
                  />
                </li>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/TATA.png"
                    alt="Client Logo"
                    className="img-fluid"
                  />
                </li>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/CSIR.png"
                    alt="Client Logo"
                    className="img-fluid"
                  />
                </li>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/MAHINDRA.png"
                    alt="Client Logo"
                    className="img-fluid"
                  />
                </li>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/INTERGLOBE.png"
                    alt="Client Logo"
                    className="img-fluid"
                  />
                </li>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/GMDA-1.png"
                    alt="Client Logo"
                    className="img-fluid"
                  />
                </li>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/download.png"
                    alt="Client Logo"
                    className="img-fluid"
                  />
                </li>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/HAVELLS.png"
                    alt="Client Logo"
                    className="img-fluid"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
