import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import HealthCarousel from "@/Components/Pages/Hospital/hospital"
import SourcesCarousel from "@/Components/Pages/Hospital/sources"
import AppCarousel from "@/Components/Pages/Hospital/appslider"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import MonitorCarousel from "@/Components/Pages/Hospital/monitor-slider"
import { getServerTranslation } from "@/i18n/server"

export default async function HospitalPage() {
  const { t } = await getServerTranslation("hospital")

  // Health impacts data
  const healthImpacts = [
    {
      title: t("banking.healthImpacts.immunity.title"),
      description: t("banking.healthImpacts.immunity.description"),
      icon: "https://www.pranaair.com/wp-content/uploads/2023/08/hospital-weakened-immunity.png",
    },
    {
      title: t("banking.healthImpacts.neurological.title"),
      description: t("banking.healthImpacts.neurological.description"),
      icon: "https://www.pranaair.com/wp-content/uploads/2023/08/hospital-neurological-problems.png",
    },
    {
      title: t("banking.healthImpacts.respiratory.title"),
      description: t("banking.healthImpacts.respiratory.description"),
      icon: "https://www.pranaair.com/wp-content/uploads/2023/08/Mask-group.png",
    },
    {
      title: t("banking.healthImpacts.cancer.title"),
      description: t("banking.healthImpacts.cancer.description"),
      icon: "https://www.pranaair.com/wp-content/uploads/2023/08/hospital-respiratory-problems.png",
    },
    {
      title: t("banking.healthImpacts.chronic.title"),
      description: t("banking.healthImpacts.chronic.description"),
      icon: "https://www.pranaair.com/wp-content/uploads/2023/08/hospital-cardiovascular-problems.png",
    },
  ]
  // Sources of air pollution data
  const pollutionSources = [
    {
      title: t("banking.pollutionSources.equipment.title"),
      description: t("banking.pollutionSources.equipment.description"),
      image: "https://www.pranaair.com/wp-content/uploads/2023/08/air-pollutants-from-hospital-equipments.jpg",
    },
    {
      title: t("banking.pollutionSources.waste.title"),
      description: t("banking.pollutionSources.waste.description"),
      image:
        "https://www.pranaair.com/wp-content/uploads/2023/08/air-pollutants-from-cleaning-products-waste-materials.jpg",
    },
    {
      title: t("banking.pollutionSources.cleaning.title"),
      description: t("banking.pollutionSources.cleaning.description"),
      image: "https://www.pranaair.com/wp-content/uploads/2023/08/air-pollutants-from-cleaning-products.jpg",
    },
    {
      title: t("banking.pollutionSources.occupancy.title"),
      description: t("banking.pollutionSources.occupancy.description"),
      image: "https://www.pranaair.com/wp-content/uploads/2023/08/high-co2-from-high-occupancy.jpg",
    },
  ]
  // App slider data
  const appSlides = [
    {
      title: t("banking.appSlides.tvDashboard.title"),
      description: t("banking.appSlides.tvDashboard.description"),
      image: "https://www.pranaair.com/wp-content/uploads/2023/08/aqi-tv-app-data-in-hospital.jpg",
    },
    {
      title: t("banking.appSlides.webDashboard.title"),
      description: t("banking.appSlides.webDashboard.description"),
      image: "https://www.pranaair.com/wp-content/uploads/2023/08/aqi-web-or-table-app-for-hospital.jpg",
    },
    {
      title: t("banking.appSlides.mobileApp.title"),
      description: t("banking.appSlides.mobileApp.description"),
      image: "https://www.pranaair.com/wp-content/uploads/2023/08/aqi-app-to-check-hospital-air-quality.jpg",
    },
  ]
  // Monitor data for carousel
  const monitorSlides = [
    {
      title: t("banking.monitorSlides.squair.title"),
      description: t("banking.monitorSlides.squair.description"),
      features: [
        t("banking.monitorSlides.squair.features.item1"),
        t("banking.monitorSlides.squair.features.item2"),
        t("banking.monitorSlides.squair.features.item3"),
      ],
      image: "https://www.pranaair.com/wp-content/uploads/2023/08/prana-air-squair-monitore.jpg",
      hasRentOption: true,
    },
    {
      title: t("banking.monitorSlides.sensible.title"),
      description: t("banking.monitorSlides.sensible.description"),
      features: [
        t("banking.monitorSlides.sensible.features.item1"),
        t("banking.monitorSlides.sensible.features.item2"),
        t("banking.monitorSlides.sensible.features.item3"),
      ],
      image: "https://www.pranaair.com/wp-content/uploads/2023/08/sensible-air-quality-monitor-for-hospital.jpg",
      hasRentOption: false,
    },
  ]
  // FAQ data
  const faqData = [
    {
      question: t("banking.faqData.q1.question"),
      answer: t("banking.faqData.q1.answer"),
    },
    {
      question: t("banking.faqData.q2.question"),
      answer: t("banking.faqData.q2.answer"),
    },
    {
      question: t("banking.faqData.q3.question"),
      answer: t("banking.faqData.q3.answer"),
    },
    {
      question: t("banking.faqData.q4.question"),
      answer: t("banking.faqData.q4.answer"),
    },
    {
      question: t("banking.faqData.q5.question"),
      answer: t("banking.faqData.q5.answer"),
    },
    {
      question: t("banking.faqData.q6.question"),
      answer: t("banking.faqData.q6.answer"),
    },
    {
      question: t("banking.faqData.q7.question"),
      answer: t("banking.faqData.q7.answer"),
    },
    {
      question: t("banking.faqData.q8.question"),
      answer: t("banking.faqData.q8.answer"),
    },
  ]
  // Client logos
  const clientLogos = [
    { name: "Morgan Stanley", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png" },
    { name: "Ola", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png" },
    { name: "Microsoft", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png" },
    { name: "IIT", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png" },
    { name: "Renault Nissan", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/RENAULT-NISSAN.png" },
    { name: "Tata", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/TATA.png" },
    { name: "CSIR", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/CSIR.png" },
    { name: "Mahindra", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/MAHINDRA.png" },
    { name: "Interglobe", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/INTERGLOBE.png" },
    { name: "GMDA", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/GMDA-1.png" },
    { name: "Leighton", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/download.png" },
    { name: "Havells", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/HAVELLS.png" },
  ]
  // Industrial applications data
  const industrialApplications = [
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-hotel.jpg",
      title: t("industrialApplicationsData.hotel.title"),
      link: "https://www.pranaair.com/solutions-by-application/hotel-businesses/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-restaurant.jpg",
      title: t("industrialApplicationsData.restaurant.title"),
      link: "https://www.pranaair.com/solutions-by-application/restaurants/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-institute.jpg",
      title: t("industrialApplicationsData.institutes.title"),
      link: "https://www.pranaair.com/solutions-by-application/institutes/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-cinema.jpg",
      title: t("industrialApplicationsData.cinema.title"),
      link: "https://www.pranaair.com/solutions-by-application/cinema-and-theatre/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-autombile.jpg",
      title: t("industrialApplicationsData.automobiles.title"),
      link: "https://www.pranaair.com/solutions-by-application/automobile/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-real-estate.jpg",
      title: t("industrialApplicationsData.realEstate.title"),
      link: "https://www.pranaair.com/solutions-by-application/real-estate/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/solutions-for-mobile-phone-makers.png",
      title: t("industrialApplicationsData.smartphone.title"),
      link: "https://www.pranaair.com/solutions-by-application/smartphone-makers/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-construction-sites.jpg",
      title: t("industrialApplicationsData.construction.title"),
      link: "https://www.pranaair.com/solutions-by-industry/pm2-5-monitoring-air-pollution-by-construction-sites/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-animale-care-page.jpg",
      title: t("industrialApplicationsData.animalCare.title"),
      link: "https://www.pranaair.com/solutions-by-application/animal-care-center/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-logistics-page.jpg",
      title: t("industrialApplicationsData.logistics.title"),
      link: "https://www.pranaair.com/solutions-by-application/logistics/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-railway-page.jpg",
      title: t("industrialApplicationsData.railways.title"),
      link: "https://www.pranaair.com/solutions-by-application/railway/",
    }
  ]

  return (
    <main className="hospital-page">
      {/* Banner Section - Updated to match the modern design */}
      <section className="modern-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 banner-content">
              <h1>{t("pmSensorHero.title")}</h1>
              <p>{t("pmSensorHero.description")}</p>
              <p className="tagline">{t("pmSensorHero.tagline")}</p>
              <a href="#get_in_touch" className="cta-button">
                {t("pmSensorHero.cta")}
              </a>
            </div>
            <div className="col-lg-6 banner-image">{/* Banner image is set in CSS background */}</div>
          </div>
        </div>
      </section>

      {/* Factors Affecting Air Quality Section - Updated with modern icons and layout */}
      <section className="factors-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t("factors.title")}</h2>
            <p>{t("factors.subtitle")}</p>
          </div>

          <div className="factors-grid">
            <div className="factor-card">
              <div className="factor-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/pm-icon.png" alt="PM icon" />
              </div>
              <h3>{t("factors.pm.title")}</h3>
              <p>{t("factors.pm.description")}</p>
            </div>

            <div className="factor-card">
              <div className="factor-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/co2-icon.png" alt="CO2 icon" />
              </div>
              <h3>{t("factors.co2.title")}</h3>
              <p>{t("factors.co2.description")}</p>
            </div>

            <div className="factor-card">
              <div className="factor-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/02/co.png" alt="CO icon" />
              </div>
              <h3>{t("factors.co.title")}</h3>
              <p>{t("factors.co.description")}</p>
            </div>

            <div className="factor-card">
              <div className="factor-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/ozone-icon.png" alt="Ozone icon" />
              </div>
              <h3>{t("factors.ozone.title")}</h3>
              <p>{t("factors.ozone.description")}</p>
            </div>

            <div className="factor-card">
              <div className="factor-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/vocs-icon.png" alt="VOCs icon" />
              </div>
              <h3>{t("factors.vocs.title")}</h3>
              <p>{t("factors.vocs.description")}</p>
            </div>

            <div className="factor-card">
              <div className="factor-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/hcho-icon.png" alt="HCHO icon" />
              </div>
              <h3>{t("factors.hcho.title")}</h3>
              <p>{t("factors.hcho.description")}</p>
            </div>

            <div className="factor-card">
              <div className="factor-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/04/microbes-icon.png" alt="Microbes icon" />
              </div>
              <h3>{t("factors.microbes.title")}</h3>
              <p>{t("factors.microbes.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Air Pollutants Section - Full-width with always visible information */}
      <section className="air-pollutants-section">
        <div className="section-header text-center">
          <h2>{t("pollutants.title")}</h2>
          <p>{t("pollutants.subtitle")}</p>
        </div>

        <div className="pollutants-visual-fullwidth">
          <div className="hospital-image-container">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2023/08/air-pollutants-in-hospitals.jpg"
              alt="Hospital environment with air pollutants visualization"
              className="img-fluid"
            />

            <div className="pollutants-overlay">
              {/* PM & PM10 */}
              <div className="pollutant-item-visible" style={{ top: "20%", left: "20%" }}>
                <div className="pollutant-icon-visible">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/07/pm-icon.png" alt="PM & PM10" />
                </div>
                <div className="pollutant-connector" style={{ width: "80px", top: "30px", left: "60px" }}></div>
                <div className="pollutant-info-visible" style={{ left: "140px", top: "-10px" }}>
                  <h3>{t("pollutants.pm.title")}</h3>
                  <p>{t("pollutants.pm.description")}</p>
                </div>
              </div>

              {/* VOCs */}
              <div className="pollutant-item-visible" style={{ top: "15%", right: "30%" }}>
                <div className="pollutant-icon-visible">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/07/vocs-icon.png" alt="VOCs" />
                </div>
                <div className="pollutant-connector" style={{ width: "80px", top: "30px", left: "60px" }}></div>
                <div className="pollutant-info-visible" style={{ left: "140px", top: "-10px" }}>
                  <h3>{t("pollutants.vocs.title")}</h3>
                  <p>{t("pollutants.vocs.description")}</p>
                </div>
              </div>

              {/* CO */}
              <div className="pollutant-item-visible" style={{ top: "45%", left: "30%" }}>
                <div className="pollutant-icon-visible">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/02/co.png" alt="CO" />
                </div>
                <div className="pollutant-connector" style={{ width: "80px", top: "30px", left: "60px" }}></div>
                <div className="pollutant-info-visible" style={{ left: "140px", top: "-10px" }}>
                  <h3>{t("pollutants.co.title")}</h3>
                  <p>{t("pollutants.co.description")}</p>
                </div>
              </div>

              {/* HCHO */}
              <div className="pollutant-item-visible" style={{ top: "30%", right: "15%" }}>
                <div className="pollutant-icon-visible">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/07/hcho-icon.png" alt="HCHO" />
                </div>
                <div className="pollutant-connector" style={{ width: "80px", top: "30px", right: "60px" }}></div>
                <div className="pollutant-info-visible" style={{ right: "140px", top: "-10px" }}>
                  <h3>{t("pollutants.hcho.title")}</h3>
                  <p>{t("pollutants.hcho.description")}</p>
                </div>
              </div>

              {/* Ozone */}
              <div className="pollutant-item-visible" style={{ bottom: "30%", left: "25%" }}>
                <div className="pollutant-icon-visible">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/07/ozone-icon.png" alt="Ozone" />
                </div>
                <div className="pollutant-connector" style={{ width: "80px", top: "30px", left: "60px" }}></div>
                <div className="pollutant-info-visible" style={{ left: "140px", top: "-10px" }}>
                  <h3>{t("pollutants.ozone.title")}</h3>
                  <p>{t("pollutants.ozone.description")}</p>
                </div>
              </div>

              {/* Microbes */}
              <div className="pollutant-item-visible" style={{ bottom: "25%", right: "20%" }}>
                <div className="pollutant-icon-visible">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/04/microbes-icon.png" alt="Microbes" />
                </div>
                <div className="pollutant-connector" style={{ width: "80px", top: "30px", right: "60px" }}></div>
                <div className="pollutant-info-visible" style={{ right: "140px", top: "-10px" }}>
                  <h3>{t("pollutants.microbes.title")}</h3>
                  <p>{t("pollutants.microbes.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Impacts Section - Updated with modern card design */}
      <section className="health-impacts-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t("healthImpacts.title")}</h2>
            <p>{t("healthImpacts.subtitle")}</p>
          </div>

          <div className="health-impacts-slider">
            <HealthCarousel healthImpacts={healthImpacts} />
          </div>
        </div>
      </section>

      {/* Quote Section - Updated to match reference design */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-container">
            <div className="quote-content">
              <h2>{t("quote.title")}</h2>
              <p>{t("quote.content")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources of Air Pollution Section - NEW */}
      <section className="pollution-sources-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t("pollutionSources.title")}</h2>
            <p>{t("pollutionSources.description")}</p>
          </div>

          <div className="sources-slider">
            <SourcesCarousel pollutionSources={pollutionSources} />
          </div>
        </div>
      </section>

      {/* Air Quality Solutions Section - Updated with Bootstrap tabs */}
      <section className="solutions-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t("solutions.title")}</h2>
            <p>{t("solutions.description")}</p>
          </div>

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
                  {t("solutions.tabs.monitors")}
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
                  {t("solutions.tabs.freshAir")}
                </button>
              </li>
            </ul>
            <div className="tab-content" id="solutionsTabsContent">
              <div className="tab-pane fade show active" id="monitors" role="tabpanel" aria-labelledby="monitors-tab">
                <div className="solution-card monitor-slider-container">
                  <MonitorCarousel monitorSlides={monitorSlides} />
                </div>
              </div>
              <div className="tab-pane fade" id="fresh-air" role="tabpanel" aria-labelledby="fresh-air-tab">
                <div className="solution-card">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="solution-image">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/08/fresh-air-solutions-for-hospital-scaled.jpg"
                          alt="Fresh Air Machine"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="solution-content">
                        <h3>{t("solutions.freshAir.title")}</h3>
                        <p>{t("solutions.freshAir.description")}</p>
                        <ul className="feature-list">
                          <li>{t("solutions.freshAir.features.feature1")}</li>
                          <li>{t("solutions.freshAir.features.feature2")}</li>
                          <li>{t("solutions.freshAir.features.feature3")}</li>
                        </ul>
                        <div className="action-buttons">
                          <a href="#" className="primary-button">
                            {t("solutions.freshAir.cta")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Solutions Section - Reused slider component */}
      <section className="app-solutions-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t("appSolutions.title")}</h2>
            <p>{t("appSolutions.description")}</p>
          </div>

          <div className="app-slider-container">
            <AppCarousel appSlides={appSlides} />
          </div>
        </div>
      </section>

      {/* Comparison Section - Updated with modern comparison layout */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t("comparison.title")}</h2>
            <p>{t("comparison.description")}</p>
          </div>

          <div className="comparison-container">
            <div className="row">
              <div className="col-md-6">
                <div className="comparison-card negative">
                  <h3>{t("comparison.without.title")}</h3>
                  <ul className="comparison-list negative">
                    <li>{t("comparison.without.points.point1")}</li>
                    <li>{t("comparison.without.points.point2")}</li>
                    <li>{t("comparison.without.points.point3")}</li>
                  </ul>
                  <div className="comparison-chart">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/08/without-fresh-air-solution-in-hospital.jpeg"
                      alt="Air Quality Graph Without Fresh Air Solutions"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="comparison-card positive">
                  <h3>{t("comparison.with.title")}</h3>
                  <ul className="comparison-list positive">
                    <li>{t("comparison.with.points.point1")}</li>
                    <li>{t("comparison.with.points.point2")}</li>
                    <li>{t("comparison.with.points.point3")}</li>
                  </ul>
                  <div className="comparison-chart">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/08/with-fresh-air-solution-in-hospital.jpeg"
                      alt="Air Quality Graph With Fresh Air Solutions"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientele Section */}
      <section className="clientele-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              {t("clientele.title")} <span className="text-primary">{t("clientele.highlight")}</span>
            </h2>
            <p>{t("clientele.description")}</p>
          </div>

          <div className="client-logos">
            <div className="row">
              {clientLogos.map((client, index) => (
                <div key={index} className="col-6 col-md-3 client-logo-wrapper">
                  <div className="client-logo">
                    <img src={client.logo || "/placeholder.svg"} alt={client.name} className="img-fluid" />
                  </div>
                </div>
              ))}
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
        <ContactForm pageName="Hospital Page" />
      </section>

      {/* FAQ Section - Using Bootstrap accordion */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              {t("faq.title")} <span className="text-primary">{t("faq.highlight")}</span>
            </h2>
            <p>{t("faq.description")}</p>
          </div>

          <div className="accordion" id="faqAccordion">
            {faqData.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse${index}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Applications Section */}
      <section className="industrial-applications-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              {t("industrial.title")} <span className="text-primary">{t("industrial.highlight")}</span>
            </h2>
            <p>{t("industrial.description")}</p>
          </div>

          <div className="applications-slider">
            <IndustrialApplicationsCarousel applications={industrialApplications} />
          </div>
        </div>
      </section>

      {/* Bootstrap Scripts */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        `,
        }}
      />
    </main>
  )
}
