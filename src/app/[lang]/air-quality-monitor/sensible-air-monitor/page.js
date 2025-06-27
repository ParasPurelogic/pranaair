import './style.css';
import ContactForm from "@/Components/Contacform/ContactForm";
import SensibleSlider from '@/Components/Pages/SensibleAirMonitor/carousel';
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain } from "@/config"

// ✅ SEO Metadata
export async function generateMetadata() {
  const { t } = await getServerTranslation("sensible-air-monitor");
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
export default async function SensibleAirMonitor() {
  const { t } = await getServerTranslation("sensible-air-monitor")
  const sensors = [
    {
      id: 1,
      icon: "https://www.pranaair.com/wp-content/uploads/2021/03/particulate-matters-icon.png",
      title: "indoorAirPollutionSensors.sensors.particulateMatters.title",
      description: "indoorAirPollutionSensors.sensors.particulateMatters.description",
      alt: "indoorAirPollutionSensors.altTexts.particulateMatters",
    },
    {
      id: 2,
      icon: "https://www.pranaair.com/wp-content/uploads/2021/03/carbon-monoxide-parameter-icon.png",
      title: "indoorAirPollutionSensors.sensors.carbonMonoxide.title",
      description: "indoorAirPollutionSensors.sensors.carbonMonoxide.description",
      alt: "indoorAirPollutionSensors.altTexts.carbonMonoxide",
    },
    {
      id: 3,
      icon: "https://www.pranaair.com/wp-content/uploads/2021/03/carbon-dioxide-parameter-icon.png",
      title: "indoorAirPollutionSensors.sensors.carbonDioxide.title",
      description: "indoorAirPollutionSensors.sensors.carbonDioxide.description",
      alt: "indoorAirPollutionSensors.altTexts.carbonDioxide",
    },
    {
      id: 4,
      icon: "https://www.pranaair.com/wp-content/uploads/2021/03/FormalDehyde-icon.png",
      title: "indoorAirPollutionSensors.sensors.formaldehyde.title",
      description: "indoorAirPollutionSensors.sensors.formaldehyde.description",
      alt: "indoorAirPollutionSensors.altTexts.formaldehyde",
    },
    {
      id: 5,
      icon: "https://www.pranaair.com/wp-content/uploads/2021/03/voc-icon.png",
      title: "indoorAirPollutionSensors.sensors.voc.title",
      description: "indoorAirPollutionSensors.sensors.voc.description",
      alt: "indoorAirPollutionSensors.altTexts.voc",
    },
    {
      id: 6,
      icon: "https://www.pranaair.com/wp-content/uploads/2021/03/ozone-icon.png",
      title: "indoorAirPollutionSensors.sensors.ozone.title",
      description: "indoorAirPollutionSensors.sensors.ozone.description",
      alt: "indoorAirPollutionSensors.altTexts.ozone",
    },
    {
      id: 7,
      icon: "https://www.pranaair.com/wp-content/uploads/2021/03/temperature-parameter-icon.png",
      title: "indoorAirPollutionSensors.sensors.temperature.title",
      description: "indoorAirPollutionSensors.sensors.temperature.description",
      alt: "indoorAirPollutionSensors.altTexts.temperature",
    },
    {
      id: 8,
      icon: "https://www.pranaair.com/wp-content/uploads/2021/03/humidity-parameter-icon.png",
      title: "indoorAirPollutionSensors.sensors.humidity.title",
      description: "indoorAirPollutionSensors.sensors.humidity.description",
      alt: "indoorAirPollutionSensors.altTexts.humidity",
    },
  ]
  return (
    <div>
      {/* Home Banner Section */}
      <div className="home-banner-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="home-banner-image">
                <img src="https://www.pranaair.com/wp-content/uploads/2021/02/slider-1.png" alt="Sensible Air Monitor" className="img-fluid" />
              </div>
              <div className="banner-pm-icons">
                <ul>
                  <li><img className="b1" src="https://www.pranaair.com/wp-content/uploads/2021/02/b1.png" alt="" /></li>
                  <li><img className="b2" src="https://www.pranaair.com/wp-content/uploads/2021/02/b2.png" alt="" /></li>
                  <li><img className="b3" src="https://www.pranaair.com/wp-content/uploads/2021/02/b5.png" alt="" /></li>
                  <li><img className="b4" src="https://www.pranaair.com/wp-content/uploads/2021/02/b4.png" alt="" /></li>
                  <li><img className="b5" src="https://www.pranaair.com/wp-content/uploads/2021/02/b3.png" alt="" /></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="home-banner">
                <h1>{t("homeBanner.title")}</h1>
                <p>{t("homeBanner.description")}</p>
                <form
                  className="cart"
                  action="https://www.pranaair.com/product/sensible-air-monitor/"
                  encType="multipart/form-data"
                  method="post"
                >
                  <button
                    className="single_add_to_cart_button button alt banner-btn"
                    name="add-to-cart"
                    type="submit"
                    value="12151"
                  >
                    {t("homeBanner.buyButton")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="padd-80 featured-sec wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="cus-heading text-center">
                {t("featuredSection.title")}
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("featuredSection.altTexts.logo")}
                />
              </h2>
              <p className="text-center">{t("featuredSection.description")}</p>
            </div>
          </div>
          <div className="row featured-info-sec">
            <div className="col-md-4">
              <div className="featured-info">
                <p dangerouslySetInnerHTML={{ __html: t("featuredSection.features.realTimeData") }} />
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/real-time-and-historic-data.jpg"
                  alt={t("featuredSection.altTexts.realTimeData")}
                />
              </div>

              <div className="featured-info">
                <p dangerouslySetInnerHTML={{ __html: t("featuredSection.features.portable") }} />
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/portable-monitor.jpg"
                  alt={t("featuredSection.altTexts.portable")}
                />
              </div>

              <div className="featured-info">
                <p dangerouslySetInnerHTML={{ __html: t("featuredSection.features.detectGases") }} />
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/detects-toxic-gases.jpg"
                  alt={t("featuredSection.altTexts.toxicGases")}
                />
              </div>
            </div>
            <div className="col-md-4 featured-center-sec">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-air-monitor-for-indoor.png"
                alt={t("featuredSection.altTexts.featuredBanner")}
                className="img-fluid featured-banner"
              />
              <p className="text-center">
                <a className="bg-btn bg-green" href="#request_a_quote">
                  {t("featuredSection.requestQuoteButton")}
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <div className="featured-info featured-right-sec">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/micro-sd-card.jpg"
                  alt={t("featuredSection.altTexts.sdCard")}
                />
                <p dangerouslySetInnerHTML={{ __html: t("featuredSection.features.sdCardStorage") }} />
              </div>

              <div className="featured-info featured-right-sec">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/led-display.jpg"
                  alt={t("featuredSection.altTexts.ledDisplay")}
                />
                <p dangerouslySetInnerHTML={{ __html: t("featuredSection.features.healthTips") }} />
              </div>

              <div className="featured-info featured-right-sec">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/07/type-c-cable.jpg"
                  alt={t("featuredSection.altTexts.usbCharging")}
                />
                <p dangerouslySetInnerHTML={{ __html: t("featuredSection.features.typeCPower") }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Does It Do Section */}
      <div
        className="padd-80 does-sec wow fadeInUp"
        style={{ backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2021/03/what-do.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="cus-heading text-center">
                {t("whatDoesItDo.title")}
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("whatDoesItDo.altTexts.logo")}
                />
              </h2>
              <p className="text-center">{t("whatDoesItDo.description")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="technology-sec technology-bg-sec wow fadeInUp">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/07/technology-sensors-used-in-sensible-air-monitor.jpg"
                alt={t("technologySection.altTexts.technologyImage")}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 technology-right-sec">
              <h2 className="cus-heading">
                {t("technologySection.title")}
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("technologySection.altTexts.logo")}
                />
              </h2>
              <p>{t("technologySection.paragraph1")}</p>
              <p>{t("technologySection.paragraph2")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Indoor Air Pollution Sensors Section */}
      <div className="padd-80 advanced-sec wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="cus-heading text-center">
                {t("indoorAirPollutionSensors.title")}
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("indoorAirPollutionSensors.altTextss.logo")}
                />
              </h2>
              <p className="text-center">{t("indoorAirPollutionSensors.description")}</p>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-air-pollution-monitor.png"
                alt={t("indoorAirPollutionSensors.altTextss.monitorImage")}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row advanced-indoor-body">
            {sensors.map((sensor) => (
              <div className="col-md-4 col-sm-6" key={sensor.id}>
                <div className="advanced-indoor-detail">
                  <img src={sensor.icon || "/placeholder.svg"} alt={t(sensor.alt)} />
                  <h5>{t(sensor.title)}</h5>
                  <p style={{ textAlign: "center" }}>{t(sensor.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="padd-80 gallery-sec wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="cus-heading text-center">
                <span style={{ fontSize: "28pt" }}>
                  <strong>{t("accuracyComparison.title")}</strong>
                </span>
                <span style={{ fontSize: "28pt" }}>
                  <strong>{t("accuracyComparison.questionMark")}</strong>
                </span>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("accuracyComparison.altTexts.logo")}
                />
              </h5>
              <p className="text-center">{t("accuracyComparison.description")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <SensibleSlider />
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="tutorial-video-sec padd-80 wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="cus-heading text-center">
                {t("comparison.title")}
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("comparison.altTexts.logo")}
                />
              </h2>
              <p className="sub-heading text-center">{t("comparison.description")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/2EIYZoY9MPw"
                  title="Comparison Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Applications Section */}
      <div className="padd-80 solution-application-sec wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-center">
                <span style={{ fontSize: "18pt" }}>{t("solutionApplications.qrCodes.brochure.scanText")}</span>
              </h3>
              <img
                className="img-fluid mx-auto d-block"
                src="https://www.pranaair.com/wp-content/uploads/2022/04/prana-air-sensible-air-monitor-brochure-qr-code.png"
                alt={t("solutionApplications.qrCodes.brochure.altText")}
                width="200"
                height="200"
              />
              <h3 className="text-center">
                <span style={{ fontSize: "14pt" }}>{t("solutionApplications.qrCodes.brochure.downloadText")}</span>
              </h3>
            </div>
            <div className="col-md-6">
              <h3 className="text-center">
                <span style={{ fontSize: "18pt" }}>{t("solutionApplications.qrCodes.manual.scanText")}</span>
              </h3>
              <img
                className="img-fluid mx-auto d-block"
                src="https://www.pranaair.com/wp-content/uploads/2022/07/prana-air-sensible-air-quality-monitor.png"
                alt={t("solutionApplications.qrCodes.manual.altText")}
                width="200"
                height="200"
              />
              <h3 className="text-center">
                <span style={{ fontSize: "14pt" }}>{t("solutionApplications.qrCodes.manual.downloadText")}</span>
              </h3>
            </div>
          </div>
          <div className="row solution-main-top-headd">
            <div className="col-12">
              <h2 className="cus-heading text-center">
                {t("solutionApplications.title")}
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("solutionApplications.altTexts.logo")}
                />
              </h2>
            </div>
          </div>
          <div className="row desktop-sec">
            <div className="col-md-6 application-left-sec">
              <div className="row solution-top solution-vertical-center">
                <div className="col-md-8">
                  <h2 className="applications applications1">{t("solutionApplications.applications.office.title")}</h2>
                  <p className="text-right">{t("solutionApplications.applications.office.description")}</p>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/03/use-of-sensible-monitor-in-office.jpeg"
                    alt={t("solutionApplications.applications.office.altText")}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="row solution-top solution-vertical-center">
                <div className="col-md-8">
                  <h2 className="applications applications2">{t("solutionApplications.applications.hotel.title")}</h2>
                  <p className="text-right">{t("solutionApplications.applications.hotel.description")}</p>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/03/use-of-sensible-monitor-in-hospital.jpeg"
                    alt={t("solutionApplications.applications.hotel.altText")}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="row solution-top solution-vertical-center">
                <div className="col-md-8">
                  <h2 className="applications applications3">{t("solutionApplications.applications.school.title")}</h2>
                  <p className="text-right applicationstext applicationstext3">
                    {t("solutionApplications.applications.school.description")}
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/School.jpg"
                    alt={t("solutionApplications.applications.school.altText")}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row solution-top solution-vertical-center">
                <div className="col-md-4 hospital-img">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/03/use-of-sensible-monitor-in-hospital.jpeg"
                    alt={t("solutionApplications.applications.hospital.altText")}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <h2 className="applications applications4 text-left">
                    {t("solutionApplications.applications.hospital.title")}
                  </h2>
                  <p className="text-left">{t("solutionApplications.applications.hospital.description")}</p>
                </div>
              </div>
              <div className="row solution-top solution-vertical-center">
                <div className="col-md-4">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/Factory.jpg"
                    alt={t("solutionApplications.applications.factory.altText")}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <h2 className="applications applications5">{t("solutionApplications.applications.factory.title")}</h2>
                  <p className="text-left">{t("solutionApplications.applications.factory.description")}</p>
                </div>
              </div>
              <div className="row solution-top solution-vertical-center">
                <div className="col-md-4">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/CollegeUniversity.jpg"
                    alt={t("solutionApplications.applications.college.altText")}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <h2 className="applications applications6">{t("solutionApplications.applications.college.title")}</h2>
                  <p className="text-left">{t("solutionApplications.applications.college.description")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mobile-slider">
            <div className="col-12">{/* Mobile slider content would go here */}</div>
          </div>
        </div>
      </div>

      {/* Portable Section */}
      <div className="portable-sec" id="portable-sec-top" style={{ backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2021/03/quality-moniter.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-7 hideatmobile">
              <h2>{t("ctaSection.title")}</h2>
              <a className="bg-btn bg-green" href="#">
                {t("ctaSection.buyNowButton")}
              </a>
              <a
                className="bg-btn bg-orange"
                href="https://www.amazon.in/Prana-Air-Sensible-Quality-Measuring/dp/B07Z5TSN2R/"
              >
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/quality-amazon.png"
                  alt={t("ctaSection.altTexts.amazon")}
                />
                {t("ctaSection.amazonButton")}
              </a>
            </div>
            <div className="col-md-5"></div>
          </div>
        </div>
      </div>

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
      <ContactForm pageName="Sensible Air Monitor Page" />

      {/* Related Products Section */}
      <div className="product_compare_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center"><span className="nova-light" style={{ fontSize: "20pt" }}><strong className="nova-bold">You May Also Like Other</strong></span></h3>
              <p className="text-center"><span style={{ fontSize: "18pt" }}>Air Quality Monitors</span><sup><img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" width="32" height="24" /></sup></p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product_compare_box">
                <Link href={`${domain}/air-quality-monitor/handheld/pocket-monitor`}>
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/03/pocket-monitor-in-outdoor.jpeg" alt="prana air pocket air quality monitor" />
                  <h3>Pocket+</h3>
                </Link>

              </div>
              <div className="product_compare_box">
                <Link href={`${domain}/air-quality-monitor/cair-monitor`}>
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-cair-monitor-indoor.jpeg" alt="prana air cair air quality monitor" />
                  <h3>CAIR+</h3>
                </Link>

              </div>
              <div className="product_compare_box">
                <Link href={`${domain}/air-quality-monitor/sensible-plus-air-monitor`}>
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/03/Sensible-air-monitor-on-table.jpg" alt="prana air sensible plus air quality monitor" />
                  <h3>Sensible+</h3>
                </Link>

              </div>
              <div className="product_compare_box">
                <Link href={`${domain}/air-quality-monitor/squair-air-monitor`}>
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-squair-air-quality-monitor.jpg" alt="prana air squair air quality monitor" />
                  <h3>SQUAIR</h3>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
