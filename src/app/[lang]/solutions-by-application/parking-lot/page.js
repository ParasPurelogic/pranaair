import "./style.css"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import ContactForm from "@/Components/Contacform/ContactForm"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
  const lang = params?.lang || "en";
  const slug = "air-quality-monitor"; // page-specific slug
  const { t } = await getServerTranslation("parking");
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
export default async function ParkingLotPage() {
  const { t } = await getServerTranslation("parking")

  const industrialApplications = [
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-hotel.jpg",
      title: t("industrialApplicationsData.hotel.title"),
      link: "/solutions-by-application/hotel-businesses/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-restaurant.jpg",
      title: t("industrialApplicationsData.restaurant.title"),
      link: "/solutions-by-application/restaurants/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-institute.jpg",
      title: t("industrialApplicationsData.institutes.title"),
      link: "/solutions-by-application/institutes/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-cinema.jpg",
      title: t("industrialApplicationsData.cinema.title"),
      link: "/solutions-by-application/cinema-and-theatre/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-autombile.jpg",
      title: t("industrialApplicationsData.automobiles.title"),
      link: "/solutions-by-application/automobile/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-real-estate.jpg",
      title: t("industrialApplicationsData.realEstate.title"),
      link: "/solutions-by-application/real-estate/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/solutions-for-mobile-phone-makers.png",
      title: t("industrialApplicationsData.smartphone.title"),
      link: "/solutions-by-application/smartphone-makers/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-construction-sites.jpg",
      title: t("industrialApplicationsData.construction.title"),
      link: "/solutions-by-industry/pm2-5-monitoring-air-pollution-by-construction-sites/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-animale-care-page.jpg",
      title: t("industrialApplicationsData.animalCare.title"),
      link: "/solutions-by-application/animal-care-center/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-logistics-page.jpg",
      title: t("industrialApplicationsData.logistics.title"),
      link: "/solutions-by-application/logistics/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-railway-page.jpg",
      title: t("industrialApplicationsData.railways.title"),
      link: "/solutions-by-application/railway/",
    }
  ]
  return (
    <div className="parking-lot-page">
      {/* Banner Section */}
      <section
        className="school_banner_box"
        style={{
          backgroundImage:
            "url(https://www.pranaair.com/wp-content/uploads/2023/04/air-quality-solutions-for-parking-spaces.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 banner_quality_box">
              <div className="pocket_title_box school_aqi_box">
                <h1>
                  {t("parkingBanner.title")} <span className="bold_text">{t("parkingBanner.highlight")}</span>
                </h1>
                <span style={{ fontSize: "14pt" }}>{t("parkingBanner.description")}</span>
                <ul className="rate_list">
                  <li>{t("parkingBanner.types.underground")}</li>
                  <li>{t("parkingBanner.types.multiStorey")}</li>
                  <li>{t("parkingBanner.types.openArea")}</li>
                </ul>
                <a className="pocket_buy_btn" href="#get_in_touch">
                  {t("parkingBanner.cta")}
                </a>
              </div>
            </div>
            <div className="col-md-6 banner_quality_img_box"></div>
          </div>
        </div>
      </section>

      {/* Major Air Pollutants Section */}
      <section className="full_width">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              <span style={{ fontSize: "24pt" }}>
                {t("parkingPollutants.title")}{" "}
                <span style={{ color: "#78ae60" }}>{t("parkingPollutants.highlight")}</span>
              </span>
            </h2>
            <p>{t("parkingPollutants.description")}</p>
          </div>
        </div>
      </section>

      {/* Pollutants Grid Section */}
      <section className="pollution_cntr inner_container">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/pm-pollutant.png"
                  alt="particulate matter pm2.5, pm10 in parking spaces"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>{t("parkingPollutants.pm.title")}</h2>
                  <p>{t("parkingPollutants.pm.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/CO-pollutant.png"
                  alt="CO pollutant in parking space"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>{t("parkingPollutants.co.title")}</h2>
                  <p>{t("parkingPollutants.co.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/voc-pollutant.png"
                  alt="voc pollutant in parking spaces"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>{t("parkingPollutants.voc.title")}</h2>
                  <p>{t("parkingPollutants.voc.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>

      <section className="pollution_cntr inner_container">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/SOx-pollutant.png"
                  alt="SOx pollutant in parking spaces"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>{t("parkingPollutants.sox.title")}</h2>
                  <p>{t("parkingPollutants.sox.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/NOx-pollutant.png"
                  alt="NOx pollutant in parking spaces"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>{t("parkingPollutants.nox.title")}</h2>
                  <p>{t("parkingPollutants.nox.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>

      {/* Affecting Air Pollution Section */}
      <section
        className="school_img_box"
        style={{
          backgroundImage:
            "url(https://www.pranaair.com/wp-content/uploads/2023/04/affecting-air-pollution-in-parking-spaces.jpg)",
        }}
      >
        <div className="container">
          <div className="school_box_cntr">
            <ul>
              <li className="first_school_box">
                <span className="school_icon_box">
                  <img src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-icon.png" alt="voc icon" />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("parkingEffects.vocs.title")}</h3>
                  <p>{t("parkingEffects.vocs.description")}</p>
                </div>
              </li>
              <li className="second_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/04/SOx-pollutant-icon.png"
                    alt="sox pollutant icon"
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("parkingEffects.sox.title")}</h3>
                  <p>{t("parkingEffects.sox.description")}</p>
                </div>
              </li>
              <li className="third_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/04/NOx-pollutant-icon.png"
                    alt="NOx pollutant icon"
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("parkingEffects.nox.title")}</h3>
                  <p>{t("parkingEffects.nox.description")}</p>
                </div>
              </li>
              <li className="fourth_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/particulate-pm2.5-icon.png"
                    alt="particulate matter pm2.5 and pm10"
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("parkingEffects.pm.title")}</h3>
                  <p>{t("parkingEffects.pm.description")}</p>
                </div>
              </li>
              <li className="fivth_school_box">
                <span className="school_icon_box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/04/co-pollutant-icon.png"
                    alt="co from vehicles"
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("parkingEffects.co.title")}</h3>
                  <p>{t("parkingEffects.co.description")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Health Effects Section */}
      <section className="pollution_cntr inner_container">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2>
              {t("parkingHealthEffects.title")}{" "}
              <span style={{ color: "#78ae60" }}>{t("parkingHealthEffects.highlight")}</span>
            </h2>
          </div>
        </div>
      </section>

      <section className="pollution_cntr inner_container">
        <div className="container">
          <div className="row">
            <div className="col-md-1-5">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/eyes-and-respiration-irritation.png"
                  alt="eyes and respiration irritation due to air quality in parking"
                  width="142"
                  height="112"
                />
                <div className="feature_wrap_box">
                  <span style={{ fontSize: "12pt" }}>{t("parkingHealthEffects.irritation")}</span>
                </div>
              </div>
            </div>
            <div className="col-md-1-5">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/heart-disorder.png"
                  alt="Coughing, wheezing shortness of breath to air pollution in parking space"
                  width="142"
                  height="112"
                />
                <div className="feature_wrap_box">
                  <span style={{ fontSize: "12pt" }}>{t("parkingHealthEffects.respiratory")}</span>
                </div>
              </div>
            </div>
            <div className="col-md-1-5">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/infection-and-stomach-illness.png"
                  alt="Vomiting & stomach discomfort due to air quality"
                  width="142"
                  height="112"
                />
                <div className="feature_wrap_box">
                  <span style={{ fontSize: "12pt" }}>{t("parkingHealthEffects.stomach")}</span>
                </div>
              </div>
            </div>
            <div className="col-md-1-5">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/headache-and-high-bp.png"
                  alt="Dizziness, vertigo, and headaches due to air quality"
                  width="142"
                  height="112"
                />
                <div className="feature_wrap_box">
                  <span style={{ fontSize: "12pt" }}>{t("parkingHealthEffects.dizziness")}</span>
                </div>
              </div>
            </div>
            <div className="col-md-1-5">
              <div className="feature_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/trigger-asthma-and-illness.png"
                  alt="trigger asthma and illness due to air quality"
                  width="142"
                  height="112"
                />
                <div className="feature_wrap_box">
                  <span style={{ fontSize: "12pt" }}>{t("parkingHealthEffects.asthma")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parking Types Section */}
      <section className="parking-types-section">
        <div className="container">
          <div className="text-center mb-5">
            <p style={{ fontSize: "12pt" }}>{t("parkingTypes.description")}</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="text-center">
                <img
                  className="img-responsive"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/multistorey-car-parking.jpg"
                  alt="Air pollution buildup on car parking multistorey floors"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "13pt" }}>{t("parkingTypes.multiStorey")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <img
                  className="img-responsive"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/open-area-car-parking.jpg"
                  alt="air pollution in open area car parking"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "13pt" }}>{t("parkingTypes.openArea")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <img
                  className="img-responsive"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/car-parking-in-underground-close-area.jpg"
                  alt="air pollution by car parking in underground close area"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "13pt" }}>{t("parkingTypes.underground")}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions Section */}
      <section className="quality_solution_section top_space_heading">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("parkingSolutions.title")} <span className="bold_text">{t("parkingSolutions.highlight")}</span>
            </h2>
            <span style={{ fontSize: "12pt" }}>{t("parkingSolutions.description")}</span>
          </div>
        </div>
      </section>

      {/* Air Quality Monitors Tab Section - Updated with Bootstrap tabs */}
      <section className="air_quality_tab_sec">
        <div className="container">
          <div className="tabs-container">
            <ul className="nav nav-tabs" id="solutionTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="ambient-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#ambient-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="ambient-tab-pane"
                  aria-selected="true"
                >
                  {t("parkingSolutions.tabs.ambientMonitor")}
                </button>
              </li>
            </ul>
            <div className="tab-content" id="solutionTabsContent">
              <div
                className="tab-pane fade show active"
                id="ambient-tab-pane"
                role="tabpanel"
                aria-labelledby="ambient-tab"
              >
                <div className="slider_cntr">
                  <div className="slider_details_box">
                    <h3>{t("parkingSolutions.ambientMonitor.title")}</h3>
                    <span>{t("parkingSolutions.ambientMonitor.description")}</span>
                    <ul className="airquality_list">
                      <li>{t("parkingSolutions.ambientMonitor.features.feature1")}</li>
                      <li>{t("parkingSolutions.ambientMonitor.features.feature2")}</li>
                      <li>{t("parkingSolutions.ambientMonitor.features.feature3")}</li>
                      <li>{t("parkingSolutions.ambientMonitor.features.feature4")}</li>
                    </ul>
                    <br />
                    <a
                      href="https://www.pranaair.com/air-quality-monitor/ambient-air-monitor/"
                      className="knowmore_btn"
                    >
                      {t("parkingSolutions.ambientMonitor.cta")}
                    </a>
                  </div>
                  <div className="slider_img_box">
                    <Link href={`${domain}/air-quality-monitor/ambient-air-monitor/`}>
                      <img
                        style={{ width: "100%" }}
                        src="https://www.pranaair.com/wp-content/uploads/2023/04/ambient-air-monitor-in-car-parking.jpg"
                        alt="Prana Air ambient air monitor in car parking"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Accessibility Section */}
      <section className="top_space_heading">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("parkingDataAccess.title")}{" "}
              <span style={{ color: "#78ae60" }}>{t("parkingDataAccess.highlight")}</span>
            </h2>
            <p>{t("parkingDataAccess.description")}</p>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="text-center">
                <img
                  className="img-responsive"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/car-parking-spaces.jpg"
                  alt="car parking spaces"
                />
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt" }}>{t("parkingDataAccess.steps.step1")}</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <img
                  className="img-responsive"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/prana-air-sensible-monitor-for-parking.jpg"
                  alt="prana air sensible monitor for parking"
                />
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt" }}>{t("parkingDataAccess.steps.step2")}</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <img
                  className="img-responsive"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/aqi-cloud-storage-server.jpg"
                  alt="aqi cloud storage server"
                />
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt" }}>{t("parkingDataAccess.steps.step3")}</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <img
                  className="img-responsive"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/aqi-dashboard-web-app-and-mobile-app.jpg"
                  alt="aqi dashboard web app and mobile app"
                />
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt" }}>{t("parkingDataAccess.steps.step4")}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Freemium Services Section */}
      <section className="top_space_heading">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("dataServices.title")} <span className="bold_text">{t("dataServices.highlight")}</span>
            </h2>
            <p>{t("parkingDataServices.description")}</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="app_service_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/tv-dashboard-app-for-parking-space-for-car-parking-space.jpg"
                  alt="tv dashboard app for parking space for car parking space"
                />
                <span style={{ fontSize: "14pt" }}>{t("parkingDataServices.tvDashboard")}</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app_service_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/customized-aqi-web-or-tablet-app-for-car-parking-space.jpg"
                  alt="aqi mobile app to access air quality data for car parking space"
                />
                <span style={{ fontSize: "14pt" }}>{t("parkingDataServices.webTabletApp")}</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app_service_box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/aqi-mobile-app-to-access-air-quality-data-for-car-parking-space.jpg"
                  alt="customized aqi web or tablet app for car parking space"
                />
                <span style={{ fontSize: "14pt" }}>{t("parkingDataServices.mobileApp")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Updated with Bootstrap accordion */}
      <section className="faq_ask_section">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("faq.title")} <span className="bold_text">{t("faq.highlight")}</span>
            </h2>
            <p>{t("parkingFaq.description")}</p>
          </div>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                  aria-expanded="true"
                  aria-controls="faq1"
                >
                  {t("parkingFaq.questions.q1")}
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p>{t("parkingFaq.answers.a1")}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                  aria-expanded="false"
                  aria-controls="faq2"
                >
                  {t("parkingFaq.questions.q2")}
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p>{t("parkingFaq.answers.a2")}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                  aria-expanded="false"
                  aria-controls="faq3"
                >
                  {t("parkingFaq.questions.q3")}
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p>{t("parkingFaq.answers.a3")}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq4"
                  aria-expanded="false"
                  aria-controls="faq4"
                >
                  {t("parkingFaq.questions.q4")}
                </button>
              </h2>
              <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p>{t("parkingFaq.answers.a4")}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq5"
                  aria-expanded="false"
                  aria-controls="faq5"
                >
                  {t("parkingFaq.questions.q5")}
                </button>
              </h2>
              <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p>{t("parkingFaq.answers.a5")}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq6"
                  aria-expanded="false"
                  aria-controls="faq6"
                >
                  {t("parkingFaq.questions.q6")}
                </button>
              </h2>
              <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p>{t("parkingFaq.answers.a6")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientele Section */}
      <section className="top_space_heading">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("clientele.title")} <span className="bold_text">{t("clientele.highlight")}</span>
            </h2>
            <p>{t("clientele.description")}</p>
          </div>
          <div className="row client_logo_section inner_container">
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png"
                  alt="UltraTech Cement"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png"
                  alt="Speco Technologies"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png"
                  alt="StarCrete"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png"
                  alt="Indiscrete"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="contact-section-box"
        id="get_in_touch"
        style={{ backgroundColor: "#f5f8f5", padding: "60px 0" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-heading">
                <h2>{t("contact.title")}</h2>
                <p>{t("contact.description")}</p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm pageName="Parking Lot Page" />
      </section>

      {/* Industrial Applications Section */}
      <section className="seperate_industrial_box">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("industrial.title")} <span className="bold_text">{t("industrial.highlight")}</span>
            </h2>
            <p>{t("parkingIndustrial.description")}</p>
          </div>
        </div>
      </section>

      <section className="inner_container industries_application_section">
        <div className="container">
          <IndustrialApplicationsCarousel applications={industrialApplications} />
        </div>
      </section>

      {/* Add Bootstrap JS */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Initialize Bootstrap components
              if (typeof bootstrap !== 'undefined') {
                // Initialize tooltips
                var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                  return new bootstrap.Tooltip(tooltipTriggerEl)
                })
                
                // Initialize popovers
                var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
                var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
                  return new bootstrap.Popover(popoverTriggerEl)
                })
              }
            });
          `,
        }}
      />
    </div>
  )
}
