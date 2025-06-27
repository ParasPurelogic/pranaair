// Imports
import "./home.css";
import Image from "next/image";
import BlogSection from "./BlogSection";
import HeroImageGrid from "./HeroImageGrid";
import SectionDiscover from "./SectionDiscover";
import SeamleassConnectivitySection from "./SeamlessConnectivitySection";
import { getServerTranslation } from "../../../i18n/server";
import Link from "@/Components/TranslateLink"
import { domain } from "@/config"

export default async function PranaAirHomepage() {
  // Initialize i18n
  const { t } = await getServerTranslation("home");
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content-wrapper">
            {/* Left Column - Text Content */}
            <div className="hero-text-content">
              <h1>
                {t("hero.title")} <span className="text-highlight">{t("hero.highlight")}</span>
              </h1>
              <p>{t("hero.description")}</p>
              <Link href={`${domain}/air-quality-monitor`} className="hero-button">
                {t("hero.button")}
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/hero-button-icon.png"
                  alt="Button icon"
                  width={100}
                  height={100}
                  className="hero-button-icon"
                />
              </Link>
            </div>

            {/* Right Column - Image Grid */}
            <HeroImageGrid />
          </div>
        </div>
      </section>

      {/* Air Quality Parameters Section */}
      <section className="explore-functionality-sec">
        <div className="container">
          <div className="parameters-content">
            <div className="function-txt">
              <h2>{t("parameters.title")}</h2>
              <p>{t("parameters.description")}</p>
            </div>
            <div className="parameter-box">
              <div className="firstn">
                <Link href={`${domain}/what-is-particulate-matter-pm`} className="parameter-btn param-1">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-pm10.png"
                    alt="pm10 pollutant"
                    width={55}
                    height={55}
                  />
                  PM10
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="button icon"
                    width={15}
                    height={15}
                  />
                </Link>

                <Link href={`${domain}/what-is-nitrogen-dioxide-no2`} className="parameter-btn param-2">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-no2.png"
                    alt="no2 pollutant"
                    width={55}
                    height={55}
                  />
                  NO2
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="button icon"
                    width={15}
                    height={15}
                  />
                </Link>

                <Link href={`${domain}/what-is-ozone-o3`} className="parameter-btn param-3">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-o3.png"
                    alt="ozone pollutant"
                    width={55}
                    height={55}
                  />
                  O3
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="button icon"
                    width={15}
                    height={15}
                  />
                </Link>
              </div>
              <div className="firstn">
                <Link href={`${domain}/what-is-carbon-monoxide-co`} className="parameter-btn param-4">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/co-parameter.png"
                    alt="co pollutant"
                    width={55}
                    height={55}
                  />
                  CO
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="pollutant icon"
                    width={15}
                    height={15}
                  />
                </Link>

                <Link href={`${domain}/what-is-particulate-matter-pm`} className="parameter-btn param-5">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-pm2.5.png"
                    alt="pm2.5 pollutant"
                    width={55}
                    height={55}
                  />
                  PM2.5
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="pollutant icon"
                    width={15}
                    height={15}
                  />
                </Link>

                <Link href={`${domain}/what-is-hydrogen-sulfide-h2s`} className="parameter-btn param-6">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-h2s.png"
                    alt="h2s pollutant"
                    width={55}
                    height={55}
                  />
                  H2S
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="pollutant icon"
                    width={15}
                    height={15}
                  />
                </Link>
              </div>
              <div className="firstn last-para">
                <Link href={`${domain}/what-is-sulfur-dioxide-so2`} className="parameter-btn param-7">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-so2.png"
                    alt="so2 pollutant"
                    width={55}
                    height={55}
                  />
                  SO2
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="pollutant icon"
                    width={15}
                    height={15}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Air Quality Section */}
      <SectionDiscover />

      {/* Seamless Connectivity Section */}

      <SeamleassConnectivitySection />

      {/* Air Quality Drone Section */}
      <section className="air-quality-drone-secv">
        <div className="container">
          <div className="drone-content">
            <div className="air-quality-drone-txt">
              <h2>{t("drone.title")}</h2>
              <p>
                {t("drone.description")}
              </p>
              <Link href={`${domain}/air-quality-monitor/air-drone`} className="drone-button">
                {t("drone.button")}
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/parameters-icon.webp"
                  alt="link icon"
                  width={15}
                  height={15}
                  className="button-icon"
                />
              </Link>
            </div>
            <div className="drone-img">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2024/08/air-quality-drone-of-prana-air.webp"
                alt="air quality drone of prana air"
                width={500}
                height={400}
                className="drone-image"
              />
            </div>
          </div>
        </div>
        <div className="controller">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2024/08/aqi-quality-drone-cntroller.png"
            alt="prana air quality drone remote controller"
            width={1200}
            height={300}
            className="controller-image"
          />
        </div>
      </section>

      {/* Our Clientele Section */}
      <section className="our-clientele-sec">
        <div className="container">
          <div className="clint-br">
            <div className="clientele-header">
              <div className="our-client-heading">
                <h2>{t("clientele.title")}</h2>
              </div>
              <div className="our-client-para">
                <p>{t("clientele.description")}</p>
              </div>
            </div>
          </div>

          <div className="all-cliente-logo">
            <ul>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/tata.jpg"
                  alt="tata logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/taj.jpg"
                  alt="taj logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/renault-nissan.jpg"
                  alt="renault nissan logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/ola.jpg"
                  alt="ola logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/microsoft.jpg"
                  alt="microsolft logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/L-T-logo.jpg"
                  alt="L&T logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/marriott.jpg"
                  alt="marriott logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/mahindra.jpg"
                  alt="mahindra logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/iit-rorkee.jpg"
                  alt="iit rorkee logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/leighton.jpg"
                  alt="leighton logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/iit-hyderabad.jpg"
                  alt="iit hyderabad logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/iit-danbad.jpg"
                  alt="iit danbad logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/iit-bombay.jpg"
                  alt="iit bombay logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/IIT-Banaras.jpg"
                  alt="iit banaras logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/havells.jpg"
                  alt="havells logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/Google-Bangalore-.jpg"
                  alt="google bangalore logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/gmda.jpg"
                  alt="gmda logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/dae.jpg"
                  alt="dae logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Neeri.jpg"
                  alt="csir logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/bhu-varanasi.jpg"
                  alt="bhu logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/BCG-Boston-Consulting-Group.jpg"
                  alt="bcg boston consulting group logo"
                  width={150}
                  height={80}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="trusted-clients-sec">
        <div className="container">
          <div className="trusted-clients-content">
            <div className="trusted-clients-text">
              <div className="counter-txt">
                <div className="stats-number">{t("trustedClients.counter")}</div>
                <div className="counter_suffix">{t("trustedClients.suffix")}</div>
              </div>

              <div className="truted-client-heading">
                <h3>{t("trustedClients.title")}</h3>
              </div>

              <div className="monitor-insalled-txt">
                <h3>
                  <span className="text-highlight">{t("trustedClients.sectorTitle")}</span> {t("trustedClients.sectors")}
                </h3>
                <p>
                  {t("trustedClients.description")}
                </p>
              </div>
            </div>
            <div className="trusted-clients-img">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2024/07/Prana-Airs-Monitors-Installed-Sites.gif"
                alt="Prana Air clients all over India"
                width={600}
                height={400}
                className="clients-map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies-sec">
        <div className="container">
          <div className="case-studies-heading">
            <h2>{t("caseStudies.title")}</h2>
          </div>
        </div>
        <div className="case-studies-slider">
          <div className="case-studies-slider-container">
            <div className="case-study-item">
              <Link
                href="https://www.pranaair.com/blog/mahindra-lifespaces-air-quality-due-to-construction-and-demolition-activities/"
                className="case-study-link"
              >
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/How-Prana-Air-helped-Mahindra-Lifespaces.jpg"
                  alt="case study of How Prana Air helped Mahindra Lifespaces"
                  width={300}
                  height={200}
                  className="case-study-image"
                />
                <h3>{t("caseStudies.case1")}</h3>
              </Link>
            </div>
            <div className="case-study-item">
              <Link
                href="https://www.pranaair.com/blog/case-study-air-quality-monitoring-solution-for-interglobe/"
                className="case-study-link"
              >
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/Aided-in-Air-Quality-Monitoring-Solutions-for-INTERGLOBE-1.jpg"
                  alt="case study of Aided in Air Quality Monitoring Solutions for INTERGLOBE"
                  width={300}
                  height={200}
                  className="case-study-image"
                />
                <h3>{t("caseStudies.case2")}</h3>
              </Link>
            </div>
            <div className="case-study-item">
              <Link
                href="https://www.pranaair.com/blog/case-study-air-pollution-due-to-stubble-burning/"
                className="case-study-link"
              >
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/How-Prana-Air-helped-CII-to-monitor-air-pollution.jpg"
                  alt="case study of How Prana Air helped CII to monitor air pollution"
                  width={300}
                  height={200}
                  className="case-study-image"
                />
                <h3>{t("caseStudies.case3")}</h3>
              </Link>
            </div>
            <div className="case-study-item">
              <Link
                href="https://www.pranaair.com/blog/prana-air-monitors-street-level-pollution/"
                className="case-study-link"
              >
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/How-Prana-Air-aided-Ola-and-Microsoft.jpg"
                  alt="case study of How Prana Air aided Ola and Microsoft"
                  width={300}
                  height={200}
                  className="case-study-image"
                />
                <h3>{t("caseStudies.case4")}</h3>
              </Link>
            </div>
            <div className="case-study-item">
              <Link
                href="https://www.pranaair.com/blog/case-study-prana-air-aids-tata-steel-in-hyperlocal-air-quality-monitoring/"
                className="case-study-link"
              >
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/Prana-Air-aids-TATA-Steel.jpg"
                  alt="case study of Prana Air aids TATA Steel"
                  width={300}
                  height={200}
                  className="case-study-image"
                />
                <h3>{t("caseStudies.case5")}</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breathing Fresh Air Section */}
      <section className="breathing-fresh-air">
        <div className="container">
          <div className="breathing-fresh-air-content">
            <div className="breathing-fresh-air-txt">
              <h2>{t("freshAir.title")}</h2>
              <Link href={`${domain}/fresh-air-machine`} className="fresh-air-button">
                {t("freshAir.button")}
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/green-arrow.png"
                  alt="link icon"
                  width={15}
                  height={15}
                  className="button-icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Most Accurate Section */}
      <div className="most-accurate-row container">
        <div className="container">
          <div className="most-accurate-content">
            <div className="most-accurate-text">
              <h3>{t("accurate.title")}</h3>
              <h4>
                {t("accurate.subtitle")}
              </h4>
            </div>
            <div className="accurate-btn">
              <Link href={`${domain}/air-quality-data-accuracy`} className="accuracy-button">
                {t("accurate.button")}
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/green-arrow.png"
                  alt="link icon"
                  width={15}
                  height={15}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Air Quality Solutions Section */}
      <section className="air-quality-solution-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-page-tab">
                <div className="solution-text">
                  <h3>
                    {t("solutions.title")} <span className="text-highlight">{t("solutions.highlight")}</span>
                  </h3>
                  <Link href={`${domain}/solutions-by-application`} className="solutions-button">
                    {t("solutions.button")}
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                      alt="link button icon"
                      width={15}
                      height={15}
                      className="button-icon"
                    />
                  </Link>
                </div>
                <div className="solution-pages-link smart-city">
                  <Link href={`${domain}/solutions-by-application/smart-city`}>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Smart-City-Projects.jpg"
                      alt="prana air - air quality solutions for smart city project"
                      width={500}
                      height={300}
                      className="solution-image"
                    />
                    <h4>
                      {t("solutions.smartCity")}
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="all-solu-tab">
                <div className="solution-tab-links">
                  <Link href={`${domain}/solutions-by-application/institutes/`}>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Institutes-Schools.jpg"
                      alt="prana air - air quality solutions for schools and insitutes"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      {t("solutions.institutes")}
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
                <div className="solution-tab-links">
                  <Link href={`${domain}/solutions-by-application/constructions/`}>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/air-quality-solutions-for-contruction-sites.jpg"
                      alt="prana air - air quality solutions for construction sites"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      {t("solutions.construction")}
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link iconn"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="all-solu-tab">
                <div className="solution-tab-links">
                  <Link href={`${domain}/solutions-by-application/hotel-businesses`}>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Hotel-Businesses.jpg"
                      alt="prana air - air quality solutions for hotel businesses"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      {t("solutions.hotel")}
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
                <div className="solution-tab-links">
                  <Link href={`${domain}/solutions-by-application/airports/`}>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Airports.jpg"
                      alt="prana air - air quality solutions for airport"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      {t("solutions.airports")}
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="all-solu-tab">
                <div className="solution-tab-links">
                  <Link href={`${domain}/solutions-by-application/hospital/`}>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Hospital-Healthcare.jpg"
                      alt="prana air - air quality solutions for hospital and healthcare industries"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      {t("solutions.hospital")}
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
                <div className="solution-tab-links">
                  <Link href={`${domain}/solutions-by-application/real-estate`}>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Real-Estates.jpg"
                      alt="prana air - air quality solutions for real estates businesses"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      {t("solutions.realEstate")}
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Discover Section */}
      <section className="discover-sec">
        <div className="container">
          <div className="discover-title">
            <ul>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/discover-icon.png"
                  alt="leaf icon"
                  width={80}
                  height={80}
                />
              </li>
              <li>
                <h2>
                  {t("discover.title")} <span className="text-highlight">Prana Air</span>
                </h2>
              </li>
            </ul>
          </div>

          <div className="discover-row">
            <div className="testimonials-container">
              <div className="clinet-txt">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/IIT-ISM-Dhanbad-Indi.png"
                  alt="IIT ISM Dhanbad India logo"
                  width={60}
                  height={60}
                />
                <h3>{t("discover.testimonial1.name")}</h3>
                <h4>{t("discover.testimonial1.position")}</h4>
                <p>
                  {t("discover.testimonial1.text")}
                </p>
              </div>
              <div className="clinet-txt">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/J.M.-Envirolab-Pvt-Ltd.png"
                  alt="J.M Envirolab Pvt Ltd logo"
                  width={60}
                  height={60}
                />
                <h3>{t("discover.testimonial2.name")}</h3>
                <h4>{t("discover.testimonial2.position")}</h4>
                <p>
                  {t("discover.testimonial2.text")}
                </p>
              </div>
              <div className="clinet-txt">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/Unity-Groups.png"
                  alt="unity groups logo"
                  width={60}
                  height={60}
                />
                <h3>{t("discover.testimonial3.name")}</h3>
                <h4>{t("discover.testimonial3.position")}</h4>
                <p>
                  {t("discover.testimonial3.text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="award-sec">
        <div className="container">
          <div className="awards-content">
            <div className="award-box">
              <div className="award-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/best-wearable-award-by-IHW-Council.png"
                  alt="Prana Air's Best Wearable Brand Award in 2019 by IHW Council"
                  width={400}
                  height={300}
                />
              </div>
              <div className="award-txt">
                <h2>
                  <span className="text-highlight">{t("awards.wearable.title")} </span>
                  {t("awards.wearable.subtitle")}
                </h2>
                <p>
                  {t("awards.wearable.description")}
                </p>
              </div>
            </div>
            <div className="award-box mg-tops">
              <div className="award-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/best-monitoring-device-award-by-IHW-Council.png"
                  alt="Prana Air's Best Monitoring Devices Brand-Award in 2019 by IHW Council"
                  width={400}
                  height={300}
                />
              </div>
              <div className="award-txt">
                <h2>
                  <span className="text-highlight">{t("awards.monitoring.title")} </span>
                  {t("awards.monitoring.subtitle")}
                </h2>
                <p>
                  {t("awards.monitoring.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Query Section */}
      <section className="query-sec">
        <div className="container">
          <div className="query-content">
            <div className="query-heading">
              <h2>
                <span className="text-highlight">{t("query.title")}</span>
                <br />
                {t("query.subtitle")}
              </h2>
            </div>
            <div className="lets-talk-link">
              <Link href={`${domain}/https://www.pranaair.com/contact/`}>
                {t("query.button")}
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                  alt="link icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}