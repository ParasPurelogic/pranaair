import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import { getServerTranslation } from "@/i18n/server"
import RailwayApplicationsCarousel from "@/Components/Pages/Railway/appslider"
import Link from "@/Components/TranslateLink"
import { domain } from "@/config"

export default async function RailwayPage() {
  const { t } = await getServerTranslation("railway")
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
  const railwayApplications = [
    {
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2024/08/tv-aqi-app-icon.png",
      iconAlt: "aqi tv app logo",
      title: t("railwayApplications.tvApp.title"),
      description: t("railwayApplications.tvApp.description"),
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/08/AQI-TV-App.jpg",
      imageAlt: "aqi android tv app data for railway stations"
    },
    {
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2024/08/AQI-Dashboard-icon.jpg",
      iconAlt: "aqi web dashboard",
      title: t("railwayApplications.webDashboard.title"),
      description: t("railwayApplications.webDashboard.description"),
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/08/aqi-web-dashboard-screen.jpg",
      imageAlt: "aqi web dashboard for railways"
    },
    {
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2024/08/mobile-AQI-APP-icon.png",
      iconAlt: "aqi mobile app",
      title: t("railwayApplications.mobileApp.title"),
      description: t("railwayApplications.mobileApp.description"),
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/08/AQI-Mobile-App.jpg",
      imageAlt: "aqi mobile app for railways"
    }
  ];
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="school_banner_box">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="pocket_title_box school_aqi_box">
                  <h1>
                    {t("railwayBanner.title")}{" "}
                    <span className="bold_text" style={{ color: "#78ae60" }}>
                      {" "}
                      {t("railwayBanner.highlight")}
                    </span>
                  </h1>
                  <p>{t("railwayBanner.description")}</p>
                  <p className="banner-high-co2">
                    <strong>{t("railwayBanner.types.railways")}</strong> |{" "}
                    <strong>{t("railwayBanner.types.metros")}</strong> |{" "}
                    <strong>{t("railwayBanner.types.trains")}</strong>
                  </p>
                  <a className="banner-btn" href="#get_in_touch" aria-label="contact form">
                    {t("railwayBanner.cta")}
                  </a>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Factors Affecting Air Quality Section */}
      <section>
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              <span style={{ fontSize: "24pt" }}>
                {t("railwayFactors.title")} <span style={{ color: "#78ae60" }}>{t("railwayFactors.highlight")}</span>
              </span>
            </h2>
            <p>{t("railwayFactors.description")}</p>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/pm-icon.png"
                  alt="pm2.5 pm10 icon"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>
                    <strong>{t("railwayFactors.pm.title")}</strong>
                  </h2>
                  <p>{t("railwayFactors.pm.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/vocs-icon.png"
                  alt="vocs icon"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>
                    <strong>{t("railwayFactors.vocs.title")}</strong>
                  </h2>
                  <p>{t("railwayFactors.vocs.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Carbon-Monoxide-CO.png"
                  alt="co parameter icon"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>
                    <strong>{t("railwayFactors.co.title")}</strong>
                  </h2>
                  <p>{t("railwayFactors.co.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Nitrogen-Oxides-NOx.png"
                  alt="NOx gas icon"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>
                    <strong>{t("railwayFactors.nox.title")}</strong>
                  </h2>
                  <p>{t("railwayFactors.nox.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Railway Station Platform Section */}
      <section className="railway-staion-plateform">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="feature_box factors-affect-box congested-stations">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Congested-Stations.png"
                  alt="congested station"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>
                    <strong>{t("railwayPlatform.congested.title")}</strong>
                  </h2>
                  <p>{t("railwayPlatform.congested.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature_box factors-affect-box congested-stations">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Noise.png"
                  alt="noise pollution"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>
                    <strong>{t("railwayPlatform.noise.title")}</strong>
                  </h2>
                  <p>{t("railwayPlatform.noise.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature_box factors-affect-box congested-stations">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Nitrogen-Oxides-NOx.png"
                  alt="diesel engine emissions NOx"
                  width="102"
                  height="99"
                />
                <div className="feature_wrap_box">
                  <h2>
                    <strong>{t("railwayPlatform.diesel.title")}</strong>
                  </h2>
                  <p>{t("railwayPlatform.diesel.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote">
        <div className="container">
          <div className="quote-heading">
            <h2>{t("railwayQuote.title")}</h2>
            <p>
              {t("railwayQuote.content1")} <strong>{t("railwayQuote.highlight")}</strong>
            </p>
            <p>
              <strong>{t("railwayQuote.content2")}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Concern Section */}
      <section className="area-of-concern">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("railwayConcern.title")}{" "}
              <span style={{ color: "#78ae60" }}>
                <strong>{t("railwayConcern.highlight")}</strong>{" "}
              </span>
            </h2>
            <p>{t("railwayConcern.description")}</p>
          </div>

          <div className="row mg-l">
            <div className="col-md-3">
              <div className="area-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Railway-Stations.jpg"
                  alt="air pollution in railway station"
                />
                <h3>{t("railwayConcern.stations.title")}</h3>
                <p>{t("railwayConcern.stations.description")}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="area-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Locomotive-Cabins.jpg"
                  alt="air pollution in locomotive cabins"
                />
                <h3>{t("railwayConcern.cabins.title")}</h3>
                <p>{t("railwayConcern.cabins.description")}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="area-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Rail-Tracks-in-Urban-Areas.jpg"
                  alt="air pollution in rail tracks"
                />
                <h3>{t("railwayConcern.tracks.title")}</h3>
                <p>{t("railwayConcern.tracks.description")}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="area-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Maintenance-Yards.jpg"
                  alt="air pollution in maintenance yards"
                />
                <h3>{t("railwayConcern.yards.title")}</h3>
                <p>{t("railwayConcern.yards.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is at Risk Section */}
      <section className="who-risk">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("railwayRisk.title")}{" "}
              <span style={{ color: "#78ae60" }}>
                <strong>{t("railwayRisk.highlight")}</strong>
              </span>
            </h2>
            <p>{t("railwayRisk.description")}</p>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="passengers-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Passengers.png"
                  alt="passengers in railways"
                />
                <h3>{t("railwayRisk.passengers.title")}</h3>
                <p>{t("railwayRisk.passengers.description")}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="passengers-box">
                <img
                  className="loco-pilot"
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Loco-Pilot.png"
                  alt="loco pilot in railway"
                />
                <h3>{t("railwayRisk.pilot.title")}</h3>
                <p>{t("railwayRisk.pilot.description")}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="passengers-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Nearby-Residents.png"
                  alt="nearby residents in railway stations"
                />
                <h3>{t("railwayRisk.residents.title")}</h3>
                <p>{t("railwayRisk.residents.description")}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="passengers-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Railway-Workers.png"
                  alt="railway workers"
                />
                <h3>{t("railwayRisk.workers.title")}</h3>
                <p>{t("railwayRisk.workers.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions Section */}
      <section className="air-quality-solution">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("railwaySolutions.title")} <span style={{ color: "#78ae60" }}>{t("railwaySolutions.highlight")}</span>
            </h2>
            <p>{t("railwaySolutions.description")}</p>
          </div>

          <div className="modern-tabs">
            <ul className="nav nav-tabs" id="solutionsTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="air-quality-monitors-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#air-quality-monitors"
                  type="button"
                  role="tab"
                  aria-controls="air-quality-monitors"
                  aria-selected="true"
                >
                  {t("railwaySolutions.tabs.monitors")}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="outdoor-air-purifier-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#outdoor-air-purifier"
                  type="button"
                  role="tab"
                  aria-controls="outdoor-air-purifier"
                  aria-selected="false"
                >
                  {t("railwaySolutions.tabs.purifier")}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="data-display-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#data-display"
                  type="button"
                  role="tab"
                  aria-controls="data-display"
                  aria-selected="false"
                >
                  {t("railwaySolutions.tabs.display")}
                </button>
              </li>
            </ul>

            <div className="tab-content" id="solutionsTabsContent">
              <div
                className="tab-pane fade show active"
                id="air-quality-monitors"
                role="tabpanel"
                aria-labelledby="air-quality-monitors-tab"
              >
                <div className="solution-content">
                  <div className="solution-image">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Prana-Air-Ambient-Air-quality-monitor.jpg"
                      alt="prana air's air quality monitors for railways"
                    />
                  </div>
                  <div className="solution-details">
                    <h3>{t("railwaySolutions.monitors.title")}</h3>
                    <p>{t("railwaySolutions.monitors.description")}</p>
                    <ul className="solution-features">
                      <li>{t("railwaySolutions.monitors.features.feature1")}</li>
                      <li>{t("railwaySolutions.monitors.features.feature2")}</li>
                      <li>{t("railwaySolutions.monitors.features.feature3")}</li>
                    </ul>
                    <Link className="solution-btn" href={`${domain}/air-quality-monitor/ambient-air-monitor`} aria-label="Know More about prana air monitors">
                      {t("railwaySolutions.monitors.cta")}
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="outdoor-air-purifier"
                role="tabpanel"
                aria-labelledby="outdoor-air-purifier-tab"
              >
                <div className="solution-content">
                  <div className="solution-image">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Prana-Air-Outdoor-Air-Purifier-monitor.jpg"
                      alt="prana air outdoor air purifier for railways"
                    />
                  </div>
                  <div className="solution-details">
                    <h3>{t("railwaySolutions.purifier.title")}</h3>
                    <p>{t("railwaySolutions.purifier.description")}</p>
                    <ul className="solution-features">
                      <li>{t("railwaySolutions.purifier.features.feature1")}</li>
                      <li>{t("railwaySolutions.purifier.features.feature2")}</li>
                      <li>{t("railwaySolutions.purifier.features.feature3")}</li>
                    </ul>
                    <Link className="solution-btn" href={`${domain}/outdoor-air-purifier`} aria-label="Know More about prana air outdoor air purifier">
                      {t("railwaySolutions.purifier.cta")}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="data-display" role="tabpanel" aria-labelledby="data-display-tab">
                <div className="solution-content">
                  <div className="solution-image">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Prana-Air-Customized-display.jpg"
                      alt="air quality data on tv app in railway station"
                    />
                  </div>
                  <div className="solution-details">
                    <h3>{t("railwaySolutions.display.title")}</h3>
                    <p>{t("railwaySolutions.display.description")}</p>
                    <ul className="solution-features">
                      <li>{t("railwaySolutions.display.features.feature1")}</li>
                      <li>{t("railwaySolutions.display.features.feature2")}</li>
                      <li>{t("railwaySolutions.display.features.feature3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Effects of Air Pollution Section */}
      <section className="effect-air-pollution">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("railwayEffects.title")} -
              <span style={{ color: "#78ae60" }}>
                <strong>{t("railwayEffects.highlight")}</strong>
              </span>
            </h2>
            <p>{t("railwayEffects.description")}</p>
          </div>

          <div className="row line">
            <div className="col-md-6">
              <div className="air_quality_box">
                <h3>{t("railwayEffects.without.title")}</h3>
                <ul className="airquality_list red_list">
                  <li>{t("railwayEffects.without.effects.effect1")}</li>
                  <li>{t("railwayEffects.without.effects.effect2")}</li>
                  <li>{t("railwayEffects.without.effects.effect3")}</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="air_quality_box">
                <h3>{t("railwayEffects.with.title")}</h3>
                <ul className="airquality_list">
                  <li>{t("railwayEffects.with.effects.effect1")}</li>
                  <li>{t("railwayEffects.with.effects.effect2")}</li>
                  <li>{t("railwayEffects.with.effects.effect3")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <RailwayApplicationsCarousel applications={railwayApplications} />

      {/* Our Clientele Section */}
      <section className="our-client">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("clientele.title")}{" "}
              <span style={{ color: "#78ae60" }}>
                <strong>{t("clientele.highlight")}</strong>
              </span>
            </h2>
            <p>{t("railwayClientele.description")}</p>
          </div>

          <div className="row client_logo_section inner_container">
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png"
                  alt="morgan stanley logo"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png" alt="ola logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png" alt="microsoft logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png" alt="IIT banaras logo" />
              </div>
            </div>
          </div>
          <div className="row client_logo_section">
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/RENAULT-NISSAN.png" alt="renault logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/TATA.png" alt="tata logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/CSIR.png" alt="csir logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MAHINDRA.png" alt="mahindra logo" />
              </div>
            </div>
          </div>
          <div className="row client_logo_section">
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/INTERGLOBE.png" alt="interglobe logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/GMDA-1.png" alt="GMDA logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2024/08/leighton-logo.png" alt="leighton logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/HAVELLS.png" alt="havells logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Applications Section */}
      <section className="industrial-applications-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              <span className="industrial-text">{t("industrial.title")}</span>{" "}
              <span className="applications-text">{t("industrial.highlight")}</span>
            </h2>
            <p>{t("railwayIndustrial.description")}</p>
          </div>

          <div className="industrial-carousel">
            <IndustrialApplicationsCarousel applications={industrialApplications} />
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="modern-contact-section" id="get_in_touch">
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
        <ContactForm pageName="Cair Monitor Page" />
      </section>

      {/* FAQ Section */}
      <section className="faq_ask_section">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("faq.title")}{" "}
              <span className="bold_text" style={{ color: "#78ae60" }}>
                {t("faq.highlight")}
              </span>
            </h2>
            <p>{t("railwayFaq.description")}</p>
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
                  {t("railwayFaq.questions.q1")}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{t("railwayFaq.answers.a1")}</div>
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
                  {t("railwayFaq.questions.q2")}
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{t("railwayFaq.answers.a2")}</div>
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
                  {t("railwayFaq.questions.q3")}
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{t("railwayFaq.answers.a3")}</div>
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
                  {t("railwayFaq.questions.q4")}
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{t("railwayFaq.answers.a4")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bootstrap JS */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Initialize Bootstrap components
              var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
              var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
              })
            });
          `,
        }}
      />
    </main>
  )
}
