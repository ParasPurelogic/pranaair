import Link from "next/link"
import "./styles.css"
import AnimatedSection from "@/Components/Pages/AboutVideo/AnimatedSection"
import VideoSection from "@/Components/Pages/AboutVideo/VideoSection"
import { getServerTranslation } from "../../../i18n/server"

export default async function AboutUs({ params }) {
  // Get translations for the about-us page
  const { t } = await getServerTranslation("about-us")

  return (
    <main className="about-page">
      {/* Hero Section */}
      <AnimatedSection id="hero" className="hero-section">
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1>{t("hero.title")}</h1>
              <p>{t("hero.description")}</p>
              <div className="hero-buttons">
                <Link href={`/${params.lang}/air-quality-monitor`} className="btn-primary">
                  {t("hero.exploreProducts")} <span className="icon-arrow-right"></span>
                </Link>
                <a href="#about" className="btn-secondary">
                  {t("hero.learnMore")} <span className="icon-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t("about.subtitle")}</span>
            <h2 className="section-title">{t("about.title")}</h2>
          </div>

          <div className="about-grid">
            <div className="about-content">
              <p>{t("about.paragraph1")}</p>
              <p>{t("about.paragraph2", { company: "Purelogic Labs India Pvt. Ltd." })}</p>
              <p>{t("about.paragraph3")}</p>

              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon">
                    <span className="icon-check"></span>
                  </div>
                  <div className="feature-text">
                    <h3>{t("about.features.innovative.title")}</h3>
                    <p>{t("about.features.innovative.description")}</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">
                    <span className="icon-check"></span>
                  </div>
                  <div className="feature-text">
                    <h3>{t("about.features.affordable.title")}</h3>
                    <p>{t("about.features.affordable.description")}</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">
                    <span className="icon-check"></span>
                  </div>
                  <div className="feature-text">
                    <h3>{t("about.features.customerCentric.title")}</h3>
                    <p>{t("about.features.customerCentric.description")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-logos">
              <div className="logo-container">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/03/about-logo.png"
                  alt={t("about.logoAlt")}
                  className="about-logo-img"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Video Section */}
      <VideoSection />

      {/* Mission Section */}
      <AnimatedSection id="mission" className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <span className="section-subtitle">{t("mission.subtitle")}</span>
              <h2 className="section-title">{t("mission.title")}</h2>
              <p>{t("mission.description")}</p>

              <div className="stats-container">
                <div className="stat">
                  <span className="stat-number">2016</span>
                  <span className="stat-label">{t("mission.stats.yearFounded")}</span>
                </div>
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">{t("mission.stats.products")}</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100K+</span>
                  <span className="stat-label">{t("mission.stats.livesImproved")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Solutions Section */}
      <AnimatedSection id="solutions" className="solutions-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t("solutions.subtitle")}</span>
            <h2 className="section-title">{t("solutions.title")}</h2>
            <p className="section-description">{t("solutions.description")}</p>
          </div>

          <div className="solutions-tabs">
            <ul className="nav nav-tabs" id="solutionsTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="monitoring-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#monitoring"
                  type="button"
                  role="tab"
                  aria-controls="monitoring"
                  aria-selected="true"
                >
                  Air Quality Monitoring
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="purification-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#purification"
                  type="button"
                  role="tab"
                  aria-controls="purification"
                  aria-selected="false"
                >
                  Air Purification
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="protection-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#protection"
                  type="button"
                  role="tab"
                  aria-controls="protection"
                  aria-selected="false"
                >
                  Personal Protection
                </button>
              </li>
            </ul>

            <div className="tab-content" id="solutionsTabsContent">
              <div className="tab-pane fade show active" id="monitoring" role="tabpanel" aria-labelledby="monitoring-tab">
                <div className="tab-grid">
                  <div className="tab-image">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-office-purelogic-labs-new-delhi.jpeg"
                      alt="Air Quality Monitoring"
                      className="solution-img"
                    />
                  </div>
                  <div className="tab-content">
                    <h3>Advanced Air Quality Monitoring</h3>
                    <p>
                      Our air quality monitoring devices provide accurate, real-time data on various pollutants including
                      PM2.5, PM10, CO, CO2, VOCs, and more. These smart devices help you understand the air you breathe and
                      make informed decisions.
                    </p>
                    <ul className="solution-features">
                      <li>
                        <span className="feature-icon icon-check"></span>
                        <span>Handheld Pocket Monitors for personal use</span>
                      </li>
                      <li>
                        <span className="feature-icon icon-check"></span>
                        <span>Nano CO and CO2 Monitors for specific gas detection</span>
                      </li>
                      <li>
                        <span className="feature-icon icon-check"></span>
                        <span>Air Drones for outdoor air quality assessment</span>
                      </li>
                      <li>
                        <span className="feature-icon icon-check"></span>
                        <span>Rental Air Monitors for temporary monitoring needs</span>
                      </li>
                    </ul>
                    <a href="/air-quality-monitor" className="btn-outline">
                      Explore Monitoring Solutions <span className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="purification" role="tabpanel" aria-labelledby="purification-tab">
                <div className="tab-grid">
                  <div className="tab-image">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-office-purelogic-labs-new-delhi.jpeg"
                      alt="Air Purification"
                      className="solution-img"
                    />
                  </div>
                  <div className="tab-content">
                    <h3>Effective Air Purification Systems</h3>
                    <p>
                      Our range of air purifiers and sanitizers effectively remove pollutants, allergens, and harmful
                      particles from indoor air, creating a healthier living and working environment.
                    </p>
                    <ul className="solution-features">
                      <li>
                        <span className="feature-icon icon-check"></span>
                        <span>Air Sanitizers for eliminating airborne pathogens</span>
                      </li>
                      <li>
                        <span className="feature-icon icon-check"></span>
                        <span>Fresh Air Machines for continuous air renewal</span>
                      </li>
                      <li>
                        <span className="feature-icon icon-check"></span>
                        <span>Outdoor Air Purifiers for larger spaces</span>
                      </li>
                      <li>
                        <span className="feature-icon icon-check"></span>
                        <span>Car Air Filters for cleaner air while traveling</span>
                      </li>
                    </ul>
                    <a href="/air-sanitizer" className="btn-outline">
                      Explore Purification Solutions <span className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="protection" role="tabpanel" aria-labelledby="protection-tab">
                <div className="tab-grid">
                  <div className="tab-image">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-office-purelogic-labs-new-delhi.jpeg"
                      alt="Personal Protection"
                      className="solution-img"
                    />
                  </div>
                  <div className="tab-content">
                    <h3>Personal Air Protection</h3>
                    <p>
                      Our personal protection products provide individuals with clean air solutions on the go, ensuring you
                      can breathe safely even in polluted environments.
                    </p>
                    <ul className="solution-features">
                      <li>
                        <span className="feature-icon icon-check"></span>
                        <span>Air Masks with HEPA filters for daily use</span>
                      </li>
                      <li>
                        <span className="feature-icon icon-check"></span>
                        <span>Junior Pollution Masks designed for children</span>
                      </li>
                      <li>
                        <span className="feature-icon icon-check"></span>
                        <span>Wearable Air Purifiers for continuous protection</span>
                      </li>
                      <li>
                        <span className="feature-icon icon-check"></span>
                        <span>Motorized masks for enhanced filtration</span>
                      </li>
                    </ul>
                    <a href="/air-mask" className="btn-outline">
                      Explore Protection Solutions <span className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bootstrap initialization script */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Initialize Bootstrap tabs
            var tabElms = document.querySelectorAll('[data-bs-toggle="tab"]');
            tabElms.forEach(function(tabElm) {
              new bootstrap.Tab(tabElm);
            });
          });
        `,
              }}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Company Structure Section */}
      <AnimatedSection id="company" className="company-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t("company.subtitle")}</span>
            <h2 className="section-title">{t("company.title")}</h2>
            <p className="section-description">{t("company.description")}</p>
          </div>

          <div className="company-structure">
            <div className="company-main">
              <div className="company-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/03/purelogic-labs.png"
                  alt={t("company.parentLogoAlt")}
                />
              </div>
              <h3>{t("company.parentName")}</h3>
              <Link href="https://purelogic.in/" className="brand-link">
                {t("company.parentLink")} <span className="icon-external-link"></span>
              </Link>
            </div>

            <div className="company-brands">
              <div className="brand-card">
                <div className="brand-logo">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/03/about-logo.png"
                    alt={t("company.pranaAirLogoAlt")}
                  />
                </div>
                <h3>{t("company.pranaAirName")}</h3>
                <p>{t("company.pranaAirDescription")}</p>
                <Link href={`/${params.lang}/air-quality-monitor`} className="brand-link">
                  {t("company.exploreProducts")} <span className="icon-external-link"></span>
                </Link>
              </div>

              <div className="brand-card">
                <div className="brand-logo">
                  <img src="https://www.aqi.in/media/misc/aqi-logo.svg" alt={t("company.aqiLogoAlt")} />
                </div>
                <h3>{t("company.aqiName")}</h3>
                <p>{t("company.aqiDescription")}</p>
                <a href="https://www.aqi.in/" target="_blank" rel="noopener noreferrer" className="brand-link">
                  {t("company.visitWebsite")} <span className="icon-external-link"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="company-info">
            <p>{t("company.info.paragraph1")}</p>
            <p>
              {t("company.info.paragraph2")}
              <a href="https://www.aqi.in" target="_blank" rel="noopener noreferrer">
                www.aqi.in
              </a>{" "}
              – {t("company.info.alsoAvailable")}{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.aqi.data"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("company.info.googlePlay")}
              </a>{" "}
              {t("company.info.and")}{" "}
              <a
                href="https://itunes.apple.com/tt/app/airqualityindex-aqi/id1439684571?"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("company.info.appStore")}
              </a>
              .
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Founder Section */}
      <AnimatedSection id="founder" className="founder-section">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/rohit-bansal-founder-of-prana-air-purelogic-labs.jpeg"
                alt={t("founder.imageAlt")}
              />
            </div>
            <div className="founder-content">
              <span className="section-subtitle">{t("founder.subtitle")}</span>
              <h2 className="section-title">{t("founder.title")}</h2>
              <h3 className="founder-name">{t("founder.name")}</h3>
              <p className="founder-title">{t("founder.position")}</p>
              <p className="founder-bio">{t("founder.bio.paragraph1")}</p>
              <p className="founder-bio">{t("founder.bio.paragraph2")}</p>
              <p className="founder-bio">{t("founder.bio.paragraph3")}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection id="team" className="team-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t("team.subtitle")}</span>
            <h2 className="section-title">{t("team.title")}</h2>
            <p className="section-description">{t("team.description")}</p>
          </div>

          <div className="team-image">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2022/04/Purelogic-Labs-India-Team.png"
              alt={t("team.imageAlt")}
              className="desktop-team"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Vision Section */}
      <AnimatedSection id="vision" className="vision-section">
        <div className="container">
          <div className="vision-content">
            <div className="vision-icon">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/vision-icon.png"
                alt={t("vision.iconAlt")}
              />
            </div>
            <span className="section-subtitle light">{t("vision.subtitle")}</span>
            <h2 className="section-title light">{t("vision.title")}</h2>
            <p className="vision-text">{t("vision.description")}</p>
            <Link href={`/${params.lang}/contact`} className="btn-light">
              {t("vision.joinMission")} <span className="icon-arrow-right"></span>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Initialize smooth scroll */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').slice(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                  window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                  });
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
