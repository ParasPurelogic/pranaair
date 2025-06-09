import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import FaqAccordion from "@/Components/Pages/Airports/faq-accordion"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain } from "@/config"

export default async function AnimalCarePage() {
  const { t } = await getServerTranslation("animal-care-center")

  const faqItems = [
    {
      question: t("faqSection.items.1.question"),
      answer: t("faqSection.items.1.answer"),
    },
    {
      question: t("faqSection.items.2.question"),
      answer: t("faqSection.items.2.answer"),
    },
    {
      question: t("faqSection.items.3.question"),
      answer: t("faqSection.items.3.answer"),
    },
    {
      question: t("faqSection.items.4.question"),
      answer: t("faqSection.items.4.answer"),
    },
    {
      question: t("faqSection.items.5.question"),
      answer: t("faqSection.items.5.answer"),
    },
    {
      question: t("faqSection.items.6.question"),
      answer: t("faqSection.items.6.answer"),
    },
    {
      question: t("faqSection.items.7.question"),
      answer: t("faqSection.items.7.answer"),
    },
    {
      question: t("faqSection.items.8.question"),
      answer: t("faqSection.items.8.answer"),
    },
    {
      question: t("faqSection.items.9.question"),
      answer: t("faqSection.items.9.answer"),
    },
    {
      question: t("faqSection.items.10.question"),
      answer: t("faqSection.items.10.answer"),
    },
    {
      question: t("faqSection.items.11.question"),
      answer: t("faqSection.items.11.answer"),
    },
  ]
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
    <div>
      {/* SECTION 1: Hero Section */}
      <div className="hero-section">
        <div className="school_banner_box">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="pocket_title_box school_aqi_box">
                  <h1>
                    {t("animalFacilities.hero.title")}{" "}
                    <span className="bold_text" style={{ color: "#78ae60" }}>
                      {t("animalFacilities.hero.highlight")}
                    </span>
                  </h1>
                  {t("animalFacilities.hero.description")}
                  <p className="banner-high-co2">{t("animalFacilities.hero.facilities")}</p>
                  <a className="banner-btn" href="#get_in_touch" aria-label={t("animalFacilities.hero.ctaAriaLabel")}>
                    {t("animalFacilities.hero.cta")}
                  </a>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Common Pollutants */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="introducing_box sub_title_box text-center">
              <h2 className="title_heading">
                {t("animalFacilities.pollutants.title")}{" "}
                <span style={{ color: "#78ae60" }}>{t("animalFacilities.pollutants.highlight")}</span>
              </h2>
              <p>{t("animalFacilities.pollutants.description")}</p>
            </div>
          </div>
        </div>

        <div className="pollutants-grid">
          <div className="pollutant-item">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2024/08/Particulate-Matter.png"
              alt={t("animalFacilities.pollutants.particulateMatter.imgAlt")}
            />
            <h3>{t("animalFacilities.pollutants.particulateMatter.title")}</h3>
            <p>{t("animalFacilities.pollutants.particulateMatter.description")}</p>
          </div>

          <div className="pollutant-item">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2024/08/Ammonia.png"
              alt={t("animalFacilities.pollutants.ammonia.imgAlt")}
            />
            <h3>{t("animalFacilities.pollutants.ammonia.title")}</h3>
            <p>{t("animalFacilities.pollutants.ammonia.description")}</p>
          </div>

          <div className="pollutant-item">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2024/08/TVOC.png"
              alt={t("animalFacilities.pollutants.tvoc.imgAlt")}
            />
            <h3>{t("animalFacilities.pollutants.tvoc.title")}</h3>
            <p>{t("animalFacilities.pollutants.tvoc.description")}</p>
          </div>

          <div className="bottom-pollutants">
            <div className="pollutant-item">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2024/08/Pathogens.png"
                alt={t("animalFacilities.pollutants.pathogens.imgAlt")}
              />
              <h3>{t("animalFacilities.pollutants.pathogens.title")}</h3>
              <p>{t("animalFacilities.pollutants.pathogens.description")}</p>
            </div>

            <div className="pollutant-item">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2024/08/Carbon-Dioxide.png"
                alt={t("animalFacilities.pollutants.carbonDioxide.imgAlt")}
              />
              <h3>{t("animalFacilities.pollutants.carbonDioxide.title")}</h3>
              <p>{t("animalFacilities.pollutants.carbonDioxide.description")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Air pollution sources */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="source-heading">
              <h2>{t("animalFacilities.pollutionSources.title")}</h2>
              {t("animalFacilities.pollutionSources.description")}
            </div>
          </div>
        </div>
      </div>

      {/* Pollution Sources Grid */}
      <div className="railway-staion-plateform">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="animal-facility">{t("animalFacilities.pollutionSources.facilities")}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="source-box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Dust.png"
                  alt={t("animalFacilities.pollutionSources.sources.dustParticles.imgAlt")}
                  width="102"
                  height="99"
                />
                <div className="source-wrap_box">
                  <h2>
                    <strong>{t("animalFacilities.pollutionSources.sources.dustParticles.title")}</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="source-box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Cleaning-Agents-and-Disinfectants.png"
                  alt={t("animalFacilities.pollutionSources.sources.cleaningAgents.imgAlt")}
                  width="102"
                  height="99"
                />
                <div className="source-wrap_box">
                  <h2>
                    <strong>{t("animalFacilities.pollutionSources.sources.cleaningAgents.title")}</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="source-box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Research-Activities.png"
                  alt={t("animalFacilities.pollutionSources.sources.researchActivities.imgAlt")}
                  width="102"
                  height="99"
                />
                <div className="source-wrap_box">
                  <h2>
                    <strong>{t("animalFacilities.pollutionSources.sources.researchActivities.title")}</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="source-box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Ventilation-Systems.png"
                  alt={t("animalFacilities.pollutionSources.sources.ventilationSystems.imgAlt")}
                  width="102"
                  height="99"
                />
                <div className="source-wrap_box">
                  <h2>
                    <strong>{t("animalFacilities.pollutionSources.sources.ventilationSystems.title")}</strong>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <div className="source-box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Animal-Bedding.png"
                  alt={t("animalFacilities.pollutionSources.sources.animalBedding.imgAlt")}
                  width="102"
                  height="99"
                />
                <div className="source-wrap_box">
                  <h2>
                    <strong>{t("animalFacilities.pollutionSources.sources.animalBedding.title")}</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="source-box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Animal-Dander.png"
                  alt={t("animalFacilities.pollutionSources.sources.animalDander.imgAlt")}
                  width="102"
                  height="99"
                />
                <div className="source-wrap_box">
                  <h2>
                    <strong>{t("animalFacilities.pollutionSources.sources.animalDander.title")}</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="source-box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Animal-Feed.png"
                  alt={t("animalFacilities.pollutionSources.sources.animalFeed.imgAlt")}
                  width="102"
                  height="99"
                />
                <div className="source-wrap_box">
                  <h2>
                    <strong>{t("animalFacilities.pollutionSources.sources.animalFeed.title")}</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>

      {/* SECTION 4: Challenges in Maintaining Air Quality */}
      <div className="area-of-concern">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">{t("animalFacilities.challenges.title")}</h2>
                {t("animalFacilities.challenges.description")}
              </div>
            </div>
          </div>

          <div className="row gap-20 mg-l">
            <div className="col-md-4">
              <div className="area-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Ventilation-Systems.jpg"
                  alt={t("animalFacilities.challenges.items.ventilation.imgAlt")}
                />
                <h3>{t("animalFacilities.challenges.items.ventilation.title")}</h3>
                {t("animalFacilities.challenges.items.ventilation.description")}
              </div>
            </div>
            <div className="col-md-4">
              <div className="area-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Temperature-and-Humidity-Control.jpg"
                  alt={t("animalFacilities.challenges.items.temperatureHumidity.imgAlt")}
                />
                <h3>{t("animalFacilities.challenges.items.temperatureHumidity.title")}</h3>
                {t("animalFacilities.challenges.items.temperatureHumidity.description")}
              </div>
            </div>
            <div className="col-md-4">
              <div className="area-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Cross-Contamination.jpg"
                  alt={t("animalFacilities.challenges.items.crossContamination.imgAlt")}
                />
                <h3>{t("animalFacilities.challenges.items.crossContamination.title")}</h3>
                {t("animalFacilities.challenges.items.crossContamination.description")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: Who is at Risk? */}
      <div className="who-risk">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">
                  {t("animalFacilities.whoAtRisk.title")}{" "}
                  <span style={{ color: "#78ae60" }}>
                    <strong>{t("animalFacilities.whoAtRisk.highlight")}</strong>
                  </span>
                </h2>
                {t("animalFacilities.whoAtRisk.description")}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="passengers-box">
                <div className="risk-img">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/Animal-Health.png"
                    alt={t("animalFacilities.whoAtRisk.groups.animalHealth.imgAlt")}
                  />
                </div>
                <h3>{t("animalFacilities.whoAtRisk.groups.animalHealth.title")}</h3>
                {t("animalFacilities.whoAtRisk.groups.animalHealth.description")}
              </div>
            </div>
            <div className="col-md-4">
              <div className="passengers-box">
                <div className="risk-img">
                  <img
                    className="loco-pilot"
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/Staff-and-farmworkers.png"
                    alt={t("animalFacilities.whoAtRisk.groups.staffFarmworkers.imgAlt")}
                  />
                </div>
                <h3>{t("animalFacilities.whoAtRisk.groups.staffFarmworkers.title")}</h3>
                {t("animalFacilities.whoAtRisk.groups.staffFarmworkers.description")}
              </div>
            </div>
            <div className="col-md-4">
              <div className="passengers-box">
                <div className="risk-img">
                  <img
                    className="driver"
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/Research-outcomes.png"
                    alt={t("animalFacilities.whoAtRisk.groups.researchOutcomes.imgAlt")}
                  />
                </div>
                <h3>{t("animalFacilities.whoAtRisk.groups.researchOutcomes.title")}</h3>
                {t("animalFacilities.whoAtRisk.groups.researchOutcomes.description")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6: Guidelines */}
      <div className="guidelines-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">
                  {t("animalFacilities.guidelines.title")}{" "}
                  <span style={{ color: "#78ae60" }}>
                    <strong>{t("animalFacilities.guidelines.highlight")}</strong>{" "}
                  </span>
                </h2>
                <h3>{t("animalFacilities.guidelines.subtitle")}</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="guidelines-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/ccac.png"
                  alt={t("animalFacilities.guidelines.organizations.ccac.imgAlt")}
                />
                <a
                  href="https://www.pranaair.com/wp-content/uploads/2024/08/CCAC_guidelines-Laboratory.pdf"
                  aria-label={t("animalFacilities.guidelines.organizations.ccac.ariaLabel")}
                >
                  {t("animalFacilities.guidelines.organizations.ccac.title")}
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="guidelines-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/cpcsea-animal-facility.png"
                  alt={t("animalFacilities.guidelines.organizations.cpcsea.imgAlt")}
                />
                <a
                  href="https://www.pranaair.com/wp-content/uploads/2024/08/cpcsea.pdf"
                  aria-label={t("animalFacilities.guidelines.organizations.cpcsea.ariaLabel")}
                >
                  {t("animalFacilities.guidelines.organizations.cpcsea.title")}
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="guidelines-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Environmental-Quality-in-Animal-Production-Housing-Facilities.png"
                  alt={t("animalFacilities.guidelines.organizations.environmental.imgAlt")}
                />
                <a
                  href="https://www.pranaair.com/wp-content/uploads/2024/08/airbase_11092.pdf"
                  aria-label={t("animalFacilities.guidelines.organizations.environmental.ariaLabel")}
                >
                  {t("animalFacilities.guidelines.organizations.environmental.title")}
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="guidelines-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/animal-care-facility.png"
                  alt={t("animalFacilities.guidelines.organizations.laboratory.imgAlt")}
                />
                <a
                  href="https://www.pranaair.com/wp-content/uploads/2024/08/hs_Laboratory_Animal_Care_Facility.pdf"
                  aria-label={t("animalFacilities.guidelines.organizations.laboratory.ariaLabel")}
                >
                  {t("animalFacilities.guidelines.organizations.laboratory.title")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 7: Air quality Solutions */}
      <div className="air-quality-solution">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">
                  {t("animalFacilities.solutions.title")}{" "}
                  <span style={{ color: "#78ae60" }}>
                    <strong>{t("animalFacilities.solutions.highlight")}</strong>{" "}
                  </span>
                </h2>
                {t("animalFacilities.solutions.description")}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              {/* Bootstrap Tabs */}
              <ul className="nav nav-tabs" id="airQualityTabs" role="tablist">
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
                    {t("animalFacilities.solutions.tabs.monitors")}
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
                    {t("animalFacilities.solutions.tabs.freshAir")}
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
                    {t("animalFacilities.solutions.tabs.dataDisplay")}
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="airQualityTabsContent">
                <div className="tab-pane show active" id="monitors" role="tabpanel" aria-labelledby="monitors-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="air-quality-tab-img">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2024/08/pranaair-sensible-air-quality-device.jpg"
                          alt={t("animalFacilities.solutions.products.monitor.imgAlt")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="air-quality-heading">
                        <h3>{t("animalFacilities.solutions.products.monitor.title")}</h3>
                        {t("animalFacilities.solutions.products.monitor.description")}
                      </div>
                      <ul className="airquality_list">
                        <li>{t("animalFacilities.solutions.products.monitor.features.realTime")}</li>
                        <li>{t("animalFacilities.solutions.products.monitor.features.adjustments")}</li>
                        <li>{t("animalFacilities.solutions.products.monitor.features.multiple")}</li>
                      </ul>
                      <div className="btns-bottom">
                        <Link
                          className="knowmore_btn"
                          href={`${domain}/air-quality-monitor/sensible-plus-air-monitor`}
                          aria-label={t("animalFacilities.solutions.products.monitor.ctaAriaLabel")}
                        >
                          {t("animalFacilities.solutions.products.monitor.cta")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane " id="fresh-air" role="tabpanel" aria-labelledby="fresh-air-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="air-quality-tab-img">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2024/08/Prana-Air-Fresh-Air-Machines.jpg"
                          alt={t("animalFacilities.solutions.products.freshAir.imgAlt")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="air-quality-heading">
                        <h3>{t("animalFacilities.solutions.products.freshAir.title")}</h3>
                        {t("animalFacilities.solutions.products.freshAir.description")}
                      </div>
                      <ul className="airquality_list">
                        <li>{t("animalFacilities.solutions.products.freshAir.features.removes")}</li>
                        <li>{t("animalFacilities.solutions.products.freshAir.features.coverage")}</li>
                        <li>{t("animalFacilities.solutions.products.freshAir.features.aiPowered")}</li>
                      </ul>
                      <div className="btns-bottom">
                        <Link
                          className="knowmore_btn"
                          href={`${domain}/fresh-air-machine`}
                          aria-label={t("animalFacilities.solutions.products.freshAir.ctaAriaLabel")}
                        >
                          {t("animalFacilities.solutions.products.freshAir.cta")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane " id="data-display" role="tabpanel" aria-labelledby="data-display-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="air-quality-tab-img">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2024/08/animal-car-tv-display.jpg"
                          alt={t("animalFacilities.solutions.products.dataDisplay.imgAlt")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="air-quality-heading">
                        <h3>{t("animalFacilities.solutions.products.dataDisplay.title")}</h3>
                        {t("animalFacilities.solutions.products.dataDisplay.description")}
                      </div>
                      <ul className="airquality_list">
                        <li>{t("animalFacilities.solutions.products.dataDisplay.features.realTimeData")}</li>
                        <li>{t("animalFacilities.solutions.products.dataDisplay.features.customizable")}</li>
                        <li>{t("animalFacilities.solutions.products.dataDisplay.features.indoorOutdoor")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 8: Effects of Air Pollution */}
      <div className="effect-air-pollution">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">
                  {t("animalFacilities.effects.title")}
                  <span style={{ color: "#78ae60" }}>
                    <strong>{t("animalFacilities.effects.highlight")}</strong>
                  </span>
                </h2>
                {t("animalFacilities.effects.description")}
              </div>
            </div>
          </div>

          <div className="row line">
            <div className="col-md-6">
              <div className="air_quality_box">
                <h3>{t("animalFacilities.effects.without.title")}</h3>
                <ul className="airquality_list red_list">
                  <li>{t("animalFacilities.effects.without.items.poorHealth")}</li>
                  <li>{t("animalFacilities.effects.without.items.respiratoryRisks")}</li>
                  <li>{t("animalFacilities.effects.without.items.inaccuracy")}</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="air_quality_box">
                <h3>{t("animalFacilities.effects.with.title")}</h3>
                <ul className="airquality_list">
                  <li>{t("animalFacilities.effects.with.items.enhancedComfort")}</li>
                  <li>{t("animalFacilities.effects.with.items.reducedRisk")}</li>
                  <li>{t("animalFacilities.effects.with.items.accurateResults")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 10: Our Clientele */}
      <div className="our-client">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">
                  {t("animalFacilities.clientele.title")}{" "}
                  <span style={{ color: "#78ae60" }}>
                    <strong>{t("animalFacilities.clientele.highlight")}</strong>
                  </span>
                </h2>
                {t("animalFacilities.clientele.description")}
              </div>
            </div>
          </div>

          <div className="row client_logo_section inner_container">
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png"
                  alt={t("animalFacilities.clientele.logos.morganStanley")}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png"
                  alt={t("animalFacilities.clientele.logos.ola")}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png"
                  alt={t("animalFacilities.clientele.logos.microsoft")}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png"
                  alt={t("animalFacilities.clientele.logos.iitBhu")}
                />
              </div>
            </div>
          </div>

          <div className="row client_logo_section">
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/RENAULT-NISSAN.png"
                  alt={t("animalFacilities.clientele.logos.renaultNissan")}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/TATA.png"
                  alt={t("animalFacilities.clientele.logos.tata")}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/CSIR.png"
                  alt={t("animalFacilities.clientele.logos.csir")}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MAHINDRA.png"
                  alt={t("animalFacilities.clientele.logos.mahindra")}
                />
              </div>
            </div>
          </div>

          <div className="row client_logo_section">
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/INTERGLOBE.png"
                  alt={t("animalFacilities.clientele.logos.interglobe")}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/GMDA-1.png"
                  alt={t("animalFacilities.clientele.logos.gmda")}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  style={{ paddingTop: "20px" }}
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/leighton-logo.png"
                  alt={t("animalFacilities.clientele.logos.leighton")}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/HAVELLS.png"
                  alt={t("animalFacilities.clientele.logos.havells")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 11: Get in Touch */}
      <div className="contact-section-box" id="get_in_touch">
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
        <ContactForm pageName="Animal Care Center Page" />
      </div>

      {/* SECTION 12: FAQ */}
      <div className="faq_ask_section" id="faq_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">
                  {t("faq.title")} <span className="bold_text">{t("faq.highlight")}</span>
                </h2>
                <p>{t("faq.description")}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <FaqAccordion faqItems={faqItems} />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 13: Industrial Applications */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="introducing_box sub_title_box text-center">
              <h2 className="title_heading">
                {t("industrialApplications.title")}{" "}
                <span className="bold_text">{t("industrialApplications.highlight")}</span>
              </h2>
              <p>{t("industrialApplications.description")}</p>
            </div>
          </div>
        </div>

        <div className="row pd-bt">
          <div className="col-md-12">
            <div className="owl-slider">
              <IndustrialApplicationsCarousel applications={industrialApplications} />
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Scripts */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        `,
        }}
      />
    </div>
  )
}
