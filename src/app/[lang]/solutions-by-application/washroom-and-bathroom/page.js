import Image from "next/image"
import "./style.css"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import ContactForm from "@/Components/Contacform/ContactForm"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
  const lang = params?.lang || "en";
  const slug = "air-quality-monitor"; // page-specific slug
  const { t } = await getServerTranslation("washroom");
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

export default async function WashroomPage() {
  const { t } = await getServerTranslation("washroom")
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
    <main>
      {/* Banner Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            {t("washroomBanner.title")} <span className="highlight">{t("washroomBanner.highlight")}</span>
          </h1>
          <p>{t("washroomBanner.description")}</p>
          <a href="#get_in_touch" className="cta-button">
            {t("washroomBanner.cta")}
          </a>
        </div>
        <div className="hero-image">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/04/air-quality-solutions-for-washroom-and-bathroom.jpg"
            alt={t("washroomBanner.imageAlt")}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <h2 className="section-title">
            {t("washroomIntro.title")}
            <span className="highlight"> {t("washroomIntro.highlight1")}</span> {t("washroomIntro.and")}{" "}
            <span className="highlight">{t("washroomIntro.highlight2")}</span>
          </h2>
          <p className="section-description">{t("washroomIntro.description")}</p>

          {/* Factors Icons */}
          <div className="factors-grid">
            <div className="factor-item">
              <div className="factor-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/odor-icon.png"
                  alt={t("washroomFactors.odor.imageAlt")}
                  width={80}
                  height={80}
                />
              </div>
              <h3>{t("washroomFactors.odor.title")}</h3>
              <p>{t("washroomFactors.odor.description")}</p>
            </div>
            <div className="factor-item">
              <div className="factor-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/co2-icon.png"
                  alt={t("washroomFactors.co2.imageAlt")}
                  width={80}
                  height={80}
                />
              </div>
              <h3>{t("washroomFactors.co2.title")}</h3>
              <p>{t("washroomFactors.co2.description")}</p>
            </div>
            <div className="factor-item">
              <div className="factor-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/microbes-icon.png"
                  alt={t("washroomFactors.microbes.imageAlt")}
                  width={80}
                  height={80}
                />
              </div>
              <h3>{t("washroomFactors.microbes.title")}</h3>
              <p>{t("washroomFactors.microbes.description")}</p>
            </div>
            <div className="factor-item">
              <div className="factor-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/temperature-icon.png"
                  alt={t("washroomFactors.temperature.imageAlt")}
                  width={80}
                  height={80}
                />
              </div>
              <h3>{t("washroomFactors.temperature.title")}</h3>
              <p>{t("washroomFactors.temperature.description")}</p>
            </div>
            <div className="factor-item">
              <div className="factor-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/humidity-icon.png"
                  alt={t("washroomFactors.humidity.imageAlt")}
                  width={80}
                  height={80}
                />
              </div>
              <h3>{t("washroomFactors.humidity.title")}</h3>
              <p>{t("washroomFactors.humidity.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Air Pollutants Section */}
      <section
        className="school_img_box"
        style={{
          backgroundImage:
            "url(https://www.pranaair.com/wp-content/uploads/2023/04/air-pollutants-in-washroom-and-bathroom.jpg)",
        }}
      >
        <div className="school_box_cntr">
          <ul>
            <li className="first_school_box">
              <span className="school_icon_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-icon.png"
                  alt={t("washroomPollutants.odor.imageAlt")}
                  width={60}
                  height={60}
                />
              </span>
              <div className="schhol_text_box">
                <h3>{t("washroomPollutants.odor.title")}</h3>
                <p>{t("washroomPollutants.odor.description")}</p>
              </div>
            </li>
            <li className="second_school_box">
              <span className="school_icon_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-icon.png"
                  alt={t("washroomPollutants.co2.imageAlt")}
                  width={60}
                  height={60}
                />
              </span>
              <div className="schhol_text_box">
                <h3>{t("washroomPollutants.co2.title")}</h3>
                <p>{t("washroomPollutants.co2.description")}</p>
              </div>
            </li>
            <li className="third_school_box">
              <span className="school_icon_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/temperature-pollutant-icon.png"
                  alt={t("washroomPollutants.temperature.imageAlt")}
                  width={96}
                  height={96}
                />
              </span>
              <div className="schhol_text_box">
                <h3>{t("washroomPollutants.temperature.title")}</h3>
                <p>{t("washroomPollutants.temperature.description")}</p>
              </div>
            </li>
            <li className="six_school_box">
              <span className="school_icon_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/humidity-pollutant-icon.png"
                  alt={t("washroomPollutants.humidity.imageAlt")}
                  width={60}
                  height={60}
                />
              </span>
              <div className="schhol_text_box">
                <h3>{t("washroomPollutants.humidity.title")}</h3>
                <p>{t("washroomPollutants.humidity.description")}</p>
              </div>
            </li>
            <li className="fivth_school_box">
              <span className="school_icon_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/bacteria-icon.png"
                  alt={t("washroomPollutants.microbes.imageAlt")}
                  width={93}
                  height={93}
                />
              </span>
              <div className="schhol_text_box">
                <h3>{t("washroomPollutants.microbes.title")}</h3>
                <p>{t("washroomPollutants.microbes.description")}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Health Effects Section */}
      <section className="health-effects-section">
        <div className="container">
          <h2 className="section-title">
            {t("washroomHealth.title")} <span className="highlight">{t("washroomHealth.highlight")}</span>
          </h2>
          <div className="effects-grid">
            <div className="effect-item">
              <div className="effect-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/eyes-and-respiration-irritation.png"
                  alt={t("washroomHealth.effects.irritation.imageAlt")}
                  width={120}
                  height={100}
                />
              </div>
              <p>{t("washroomHealth.effects.irritation.description")}</p>
            </div>
            <div className="effect-item">
              <div className="effect-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/building-property-damages.png"
                  alt={t("washroomHealth.effects.damages.imageAlt")}
                  width={120}
                  height={100}
                />
              </div>
              <p>{t("washroomHealth.effects.damages.description")}</p>
            </div>
            <div className="effect-item">
              <div className="effect-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/infection-and-stomach-illness.png"
                  alt={t("washroomHealth.effects.infection.imageAlt")}
                  width={120}
                  height={100}
                />
              </div>
              <p>{t("washroomHealth.effects.infection.description")}</p>
            </div>
            <div className="effect-item">
              <div className="effect-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/headache-and-high-bp.png"
                  alt={t("washroomHealth.effects.headache.imageAlt")}
                  width={120}
                  height={100}
                />
              </div>
              <p>{t("washroomHealth.effects.headache.description")}</p>
            </div>
            <div className="effect-item">
              <div className="effect-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/trigger-asthma-and-illness.png"
                  alt={t("washroomHealth.effects.asthma.imageAlt")}
                  width={120}
                  height={100}
                />
              </div>
              <p>{t("washroomHealth.effects.asthma.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Do You Know Section */}
      <section className="do-you-know-section">
        <div className="container">
          <div className="quote-box">
            <div className="quote-mark quote-mark-left"></div>
            <div className="quote-content">
              <h2>{t("washroomQuote.title")}</h2>
              <p>{t("washroomQuote.content1")}</p>
              <p>{t("washroomQuote.content2")}</p>
              <p>{t("washroomQuote.content3")}</p>
              <p>{t("washroomQuote.content4")}</p>
            </div>
            <div className="quote-mark quote-mark-right"></div>
          </div>
        </div>
      </section>

      {/* Bathroom Issues Section */}
      <section className="bathroom-issues-section">
        <div className="container">
          <p className="section-description">{t("washroomIssues.description")}</p>
          <div className="issues-grid">
            <div className="issue-item">
              <div className="issue-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/humidity-in-shower-bathroom.jpg"
                  alt={t("washroomIssues.humidity.imageAlt")}
                  width={325}
                  height={240}
                  className="rounded"
                />
              </div>
              <h4>{t("washroomIssues.humidity.title")}</h4>
            </div>
            <div className="issue-item">
              <div className="issue-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/high-condensation-in-bathroom.jpg"
                  alt={t("washroomIssues.condensation.imageAlt")}
                  width={325}
                  height={240}
                  className="rounded"
                />
              </div>
              <h4>{t("washroomIssues.condensation.title")}</h4>
            </div>
            <div className="issue-item">
              <div className="issue-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/high-microbes-in-washroom.jpg"
                  alt={t("washroomIssues.microbes.imageAlt")}
                  width={325}
                  height={240}
                  className="rounded"
                />
              </div>
              <h4>{t("washroomIssues.microbes.title")}</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions Section */}
      <section className="solutions-section">
        <div className="container">
          <h2 className="section-title">
            {t("washroomSolutions.title")} <span className="highlight">{t("washroomSolutions.highlight")}</span>
          </h2>
          <p className="section-description">{t("washroomSolutions.description")}</p>

          {/* Bootstrap Tabs */}
          <div className="solutions-tabs">
            <ul className="nav nav-tabs" id="solutionsTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="monitors-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#monitors"
                  type="button"
                  role="tab"
                  aria-controls="monitors"
                  aria-selected="true"
                >
                  {t("washroomSolutions.tabs.monitors")}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="fresh-air-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#fresh-air"
                  type="button"
                  role="tab"
                  aria-controls="fresh-air"
                  aria-selected="false"
                >
                  {t("washroomSolutions.tabs.freshAir")}
                </button>
              </li>
            </ul>

            <div className="tab-content" id="solutionsTabsContent">
              <div className="tab-pane fade show active" id="monitors" role="tabpanel" aria-labelledby="monitors-tab">
                <div id="monitorsCarousel" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="product-slide">
                        <div className="product-info">
                          <h3>{t("washroomSolutions.monitors.squair.title")}</h3>
                          <p>{t("washroomSolutions.monitors.squair.description")}</p>
                          <ul className="feature-list">
                            <li>{t("washroomSolutions.monitors.squair.features.feature1")}</li>
                            <li>{t("washroomSolutions.monitors.squair.features.feature2")}</li>
                            <li>{t("washroomSolutions.monitors.squair.features.feature3")}</li>
                          </ul>
                          <div className="product-actions">
                            <Link href={`${domain}/air-quality-monitor/squair-air-monitor`} className="action-button primary">
                              {t("washroomSolutions.knowMore")}
                            </Link>
                            <Link href={`${domain}/air-quality-monitor/rental-air-monitor`} className="action-button secondary">
                              {t("washroomSolutions.lookingToRent")}
                            </Link>
                          </div>
                        </div>
                        <div className="product-image">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2023/04/air-quality-monitoring-in-bathroom.jpg"
                            alt={t("washroomSolutions.monitors.squair.imageAlt")}
                            width={500}
                            height={400}
                            className="rounded"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="product-slide">
                        <div className="product-info">
                          <h3>{t("washroomSolutions.monitors.sensible.title")}</h3>
                          <p>{t("washroomSolutions.monitors.sensible.description")}</p>
                          <ul className="feature-list">
                            <li>{t("washroomSolutions.monitors.sensible.features.feature1")}</li>
                            <li>{t("washroomSolutions.monitors.sensible.features.feature2")}</li>
                            <li>{t("washroomSolutions.monitors.sensible.features.feature3")}</li>
                          </ul>
                          <div className="product-actions">
                            <Link href={`${domain}/air-quality-monitor/sensible-plus-air-monitor`} className="action-button primary">
                              {t("washroomSolutions.knowMore")}
                            </Link>
                          </div>
                        </div>
                        <div className="product-image">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2023/04/prana-air-quality-monitoring-in-washroom.jpg"
                            alt={t("washroomSolutions.monitors.sensible.imageAlt")}
                            width={500}
                            height={400}
                            className="rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#monitorsCarousel"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">{t("washroomSolutions.carousel.previous")}</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#monitorsCarousel"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">{t("washroomSolutions.carousel.next")}</span>
                  </button>
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#monitorsCarousel"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label={t("washroomSolutions.carousel.slide1")}
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#monitorsCarousel"
                      data-bs-slide-to="1"
                      aria-label={t("washroomSolutions.carousel.slide2")}
                    ></button>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="fresh-air" role="tabpanel" aria-labelledby="fresh-air-tab">
                <div className="product-slide">
                  <div className="product-image">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-fresh-air-machine-for-iaq-solution.jpg"
                      alt={t("washroomSolutions.freshAir.imageAlt")}
                      width={500}
                      height={400}
                      className="rounded"
                    />
                  </div>
                  <div className="product-info">
                    <h3>{t("washroomSolutions.freshAir.title")}</h3>
                    <p>{t("washroomSolutions.freshAir.description")}</p>
                    <ul className="feature-list">
                      <li>{t("washroomSolutions.freshAir.features.feature1")}</li>
                      <li>{t("washroomSolutions.freshAir.features.feature2")}</li>
                      <li>{t("washroomSolutions.freshAir.features.feature3")}</li>
                    </ul>
                    <div className="product-actions">
                      <Link href={`${domain}/fresh-air-machine`} className="action-button primary">
                        {t("washroomSolutions.knowMore")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Services Section */}
      <section className="data-services-section">
        <div className="container">
          <h2 className="section-title">
            {t("washroomDataServices.title")} <span className="highlight">{t("washroomDataServices.highlight")}</span>
          </h2>
          <p className="section-description">{t("washroomDataServices.description")}</p>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/aqi-tv-app-data-for-washroom.jpg"
                  alt={t("washroomDataServices.tvApp.imageAlt")}
                  width={400}
                  height={300}
                  className="rounded"
                />
              </div>
              <h4>{t("washroomDataServices.tvApp.title")}</h4>
            </div>
            <div className="service-item">
              <div className="service-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/aqi-web-or-table-app-for-bathroom.jpg"
                  alt={t("washroomDataServices.webApp.imageAlt")}
                  width={400}
                  height={300}
                  className="rounded"
                />
              </div>
              <h4>{t("washroomDataServices.webApp.title")}</h4>
            </div>
            <div className="service-item">
              <div className="service-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/aqi-app-to-check-washroom-data.jpg"
                  alt={t("washroomDataServices.mobileApp.imageAlt")}
                  width={400}
                  height={300}
                  className="rounded"
                />
              </div>
              <h4>{t("washroomDataServices.mobileApp.title")}</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Fresh Air Machine Effects Section */}
      <section className="effects-comparison-section">
        <div className="container">
          <h2 className="section-title">
            {t("washroomComparison.title")} - <span className="highlight">{t("washroomComparison.highlight")}</span>
          </h2>
          <p className="section-description">{t("washroomComparison.description")}</p>

          <div className="comparison-container">
            <div className="comparison-column without">
              <h3>{t("washroomComparison.without.title")}</h3>
              <ul className="comparison-list">
                <li>{t("washroomComparison.without.points.point1")}</li>
                <li>{t("washroomComparison.without.points.point2")}</li>
                <li>{t("washroomComparison.without.points.point3")}</li>
                <li>{t("washroomComparison.without.points.point4")}</li>
              </ul>
              <div className="comparison-chart">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/without-fresh-air-solution-in-washroom.jpg"
                  alt={t("washroomComparison.without.imageAlt")}
                  width={350}
                  height={186}
                  className="rounded"
                />
              </div>
            </div>

            <div className="comparison-column with">
              <h3>{t("washroomComparison.with.title")}</h3>
              <ul className="comparison-list">
                <li>{t("washroomComparison.with.points.point1")}</li>
                <li>{t("washroomComparison.with.points.point2")}</li>
                <li>{t("washroomComparison.with.points.point3")}</li>
                <li>{t("washroomComparison.with.points.point4")}</li>
              </ul>
              <div className="comparison-chart">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/with-fresh-air-solution-in-washroom.jpg"
                  alt={t("washroomComparison.with.imageAlt")}
                  width={350}
                  height={185}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">
            {t("washroomFaq.title")} <span className="highlight">{t("washroomFaq.highlight")}</span>
          </h2>
          <p className="section-description">{t("washroomFaq.description")}</p>

          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingfaqOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefaqOne"
                  aria-expanded="false"
                  aria-controls="collapsefaqOne"
                >
                  {t("washroomFaq.questions.q1")}
                </button>
              </h2>
              <div
                id="collapsefaqOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingfaqOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("washroomFaq.answers.a1")}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingfaqTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefaqTwo"
                  aria-expanded="false"
                  aria-controls="collapsefaqTwo"
                >
                  {t("washroomFaq.questions.q2")}
                </button>
              </h2>
              <div
                id="collapsefaqTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingfaqTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("washroomFaq.answers.a2")}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingfaqThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefaqThree"
                  aria-expanded="false"
                  aria-controls="collapsefaqThree"
                >
                  {t("washroomFaq.questions.q3")}
                </button>
              </h2>
              <div
                id="collapsefaqThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingfaqThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("washroomFaq.answers.a3")}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingfaqFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefaqFour"
                  aria-expanded="false"
                  aria-controls="collapsefaqFour"
                >
                  {t("washroomFaq.questions.q4")}
                </button>
              </h2>
              <div
                id="collapsefaqFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingfaqFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("washroomFaq.answers.a4")}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingfaqFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefaqFive"
                  aria-expanded="false"
                  aria-controls="collapsefaqFive"
                >
                  {t("washroomFaq.questions.q5")}
                </button>
              </h2>
              <div
                id="collapsefaqFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingfaqFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("washroomFaq.answers.a5")}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingfaqSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefaqSix"
                  aria-expanded="false"
                  aria-controls="collapsefaqSix"
                >
                  {t("washroomFaq.questions.q6")}
                </button>
              </h2>
              <div
                id="collapsefaqSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingfaqSix"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("washroomFaq.answers.a6")}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingfaqSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefaqSeven"
                  aria-expanded="false"
                  aria-controls="collapsefaqSeven"
                >
                  {t("washroomFaq.questions.q7")}
                </button>
              </h2>
              <div
                id="collapsefaqSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingfaqSeven"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("washroomFaq.answers.a7")}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingfaqEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefaqEight"
                  aria-expanded="false"
                  aria-controls="collapsefaqEight"
                >
                  {t("washroomFaq.questions.q8")}
                </button>
              </h2>
              <div
                id="collapsefaqEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingfaqEight"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("washroomFaq.answers.a8")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientele Section */}
      <section className="clientele-section">
        <div className="container">
          <h2 className="section-title">
            {t("clientele.title")} <span className="highlight">{t("clientele.highlight")}</span>
          </h2>
          <p className="section-description">{t("clientele.description")}</p>
          <div className="client-grid">
            <div className="client-logo">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png"
                alt={t("clientele.logos.morgan")}
                width={200}
                height={100}
              />
            </div>
            <div className="client-logo">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png"
                alt={t("clientele.logos.ola")}
                width={200}
                height={100}
              />
            </div>
            <div className="client-logo">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png"
                alt={t("clientele.logos.microsoft")}
                width={200}
                height={100}
              />
            </div>
            <div className="client-logo">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png"
                alt={t("clientele.logos.iit")}
                width={200}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="get_in_touch" className="contact-section-box">
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
        <ContactForm pageName="Washroom Page" />
      </section>

      {/* Industrial Applications Section */}
      <section className="industrial-section">
        <div className="container">
          <h2 className="section-title">
            {t("industrial.title")} <span className="highlight">{t("industrial.highlight")}</span>
          </h2>
          <p className="section-description">{t("industrial.description")}</p>

          <div className="industrial-carousel-container">
            <IndustrialApplicationsCarousel applications={industrialApplications} />
          </div>
        </div>
      </section>

      {/* Bootstrap initialization script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Initialize all Bootstrap components
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
              return new bootstrap.Tooltip(tooltipTriggerEl);
            });
            
            // Handle school box text on mobile
            const schoolBoxes = document.querySelectorAll(".school_box_cntr li");
            schoolBoxes.forEach((box) => {
              box.addEventListener("click", function () {
                const textBox = this.querySelector(".schhol_text_box");
                if (textBox) {
                  // Hide all other text boxes
                  document.querySelectorAll(".schhol_text_box").forEach((tb) => {
                    if (tb !== textBox) tb.style.display = "none";
                  });
                  
                  // Toggle current text box
                  textBox.style.display = textBox.style.display === "block" ? "none" : "block";
                }
              });
            });
          });
        `,
        }}
      />
    </main>
  )
}
