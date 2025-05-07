// Imports
import "./home.css";
import Link from "next/link";
import Image from "next/image";
import BlogSection from "./BlogSection";
import HeroImageGrid from "./HeroImageGrid";
import SectionDiscover from "./SectionDiscover";
import { getServerTranslation } from "../../../i18n/server";

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
              <Link href="/air-quality-monitor" className="hero-button">
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
                <Link href="/what-is-particulate-matter-pm/" className="parameter-btn param-1">
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

                <Link href="/what-is-nitrogen-dioxide-no2/" className="parameter-btn param-2">
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

                <Link href="/what-is-ozone-o3/" className="parameter-btn param-3">
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
                <Link href="/what-is-carbon-monoxide-co/" className="parameter-btn param-4">
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

                <Link href="/what-is-particulate-matter-pm/" className="parameter-btn param-5">
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

                <Link href="/what-is-hydrogen-sulfide-h2s/" className="parameter-btn param-6">
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
                <Link href="/what-is-sulfur-dioxide-so2/" className="parameter-btn param-7">
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
      <section className="seamless-connective">
        <div className="container">
          <div className="connectivity-header">
            <div className="seamless-connect-heading">
              <h2>Seamless Connectivity for Air Quality Monitoring</h2>
            </div>
            <div className="seamless-txt">
              <p>
                Connect Prana Airs air quality monitoring devices effortlessly, designed for seamless integration with AQI platforms.
              </p>
            </div>
          </div>

          <div className="seamless-tab">
            <ul className="nav nav-tabs tabs-header" id="connectivityTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="tab1-seamless-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab1-seamless"
                  type="button"
                  role="tab"
                  aria-controls="tab1-seamless"
                  aria-selected="true"
                >
                  AQI Mobile App <i className="tab-arrow"></i>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tab2-seamless-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab2-seamless"
                  type="button"
                  role="tab"
                  aria-controls="tab2-seamless"
                  aria-selected="false"
                >
                  Web-Dashboard <i className="tab-arrow"></i>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tab3-seamless-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab3-seamless"
                  type="button"
                  role="tab"
                  aria-controls="tab3-seamless"
                  aria-selected="false"
                >
                  AQI TV App <i className="tab-arrow"></i>
                </button>
              </li>
            </ul>

            <div className="tab-content tab-bg" id="connectivityTabsContent">
              <div
                className="tab-pane fade show active"
                id="tab1-seamless"
                role="tabpanel"
                aria-labelledby="tab1-seamless-tab"
              >
                {/* AQI Mobile App Tab Content */}
                <div className="panel-content">
                  <div className="connectivety-tab-text">
                    <ul className="mob-heading">
                      <li>
                        <Image
                          src="https://www.pranaair.com/wp-content/uploads/2024/08/mobile-AQI-APP-icon.png"
                          alt="aqi mobile app logo"
                          width={100}
                          height={100}
                        />
                      </li>
                      <li>
                        <h3>Mobile App</h3>
                        <h4>Seamless Connectivity</h4>
                      </li>
                    </ul>
                    <p>
                      Stay informed with real-time updates and personalized alerts on your mobile app, ensuring you always know the air quality around you, wherever you are.
                    </p>
                    <div className="connect-btn-box">
                      <Link href="https://apps.apple.com/tt/app/aqi/id1439684571" className="iso-btn">
                        <ul className="seamless-connect-btn">
                          <li>
                            <Image
                              src="https://www.pranaair.com/wp-content/uploads/2024/07/app-store.png"
                              alt="ios app logo"
                              width={35}
                              height={35}
                            />
                          </li>
                          <li>
                            <span className="btn-txt-small">Download on the</span>
                            <br />
                            <span className="btan-txt">App Store</span>
                          </li>
                        </ul>
                      </Link>
                      <Link href="https://play.google.com/store/apps/details?id=com.aqi.data" className="play-store-btn">
                        <ul className="seamless-connect-btn">
                          <li>
                            <Image
                              src="https://www.pranaair.com/wp-content/uploads/2024/07/google-play.png"
                              alt="android app"
                              width={35}
                              height={35}
                            />
                          </li>
                          <li>
                            <span className="btn-txt-small">Get it on</span>
                            <br />
                            <span className="btan-txt">Google Play</span>
                          </li>
                        </ul>
                      </Link>
                    </div>
                  </div>
                  <div className="connectivety-tab-bg">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/aqi-mobile-air-quality-app.png"
                      alt="AQI mobile app"
                      width={300}
                      height={500}
                      className="app-image"
                    />
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="tab2-seamless"
                role="tabpanel"
                aria-labelledby="tab2-seamless-tab"
              >
                {/* Web-Dashboard Tab Content */}
                <div className="panel-content">
                  <div className="connectivety-tab-text">
                    <h3>Web dashboard connectivity</h3>
                    <h4>Real-Time Insights</h4>
                    <p>
                      Discover real-time insights into the air quality with our intuitive web dashboard connectivity. Enjoy seamless integration across multiple devices for a complete picture of your air environment.
                    </p>
                    <Link href="https://www.aqi.in/userlogin" className="dashboard-button">
                      <ul className="seamless-connect-btn dash-btn">
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/07/AQI-api-logo.png"
                            alt="aqi logo"
                            width={40}
                            height={40}
                          />
                        </li>
                        <li>
                          <span className="btn-txt-small">View</span>
                          <br />
                          <span className="btan-txt">Dashboard</span>
                        </li>
                      </ul>
                    </Link>
                  </div>
                  <div className="connectivety-tab-bg">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/aqi-web-dashboard.png"
                      alt="Web dashboard"
                      width={500}
                      height={300}
                      className="web-dash"
                    />
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="tab3-seamless"
                role="tabpanel"
                aria-labelledby="tab3-seamless-tab"
              >
                {/* AQI TV App Tab Content */}
                <div className="panel-content">
                  <div className="connectivety-tab-text">
                    <ul className="mob-heading">
                      <li>
                        <Image
                          src="https://www.pranaair.com/wp-content/uploads/2024/08/tv-aqi-app-icon.png"
                          alt="AQI TV app"
                          width={100}
                          height={100}
                        />
                      </li>
                      <li>
                        <h3>TV connectivity</h3>
                        <h4>View Air quality data</h4>
                      </li>
                    </ul>
                    <p>
                      Easily view your air quality data on your TV screen with our seamless connectivity feature. Stay informed about your environment with clear, easy-to-read visuals directly on your TV.
                    </p>
                  </div>
                  <div className="connectivety-tab-bg">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Tv-connectivity.png"
                      alt="TV app"
                      width={500}
                      height={300}
                      className="tv-screen"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Air Quality Drone Section */}
      <section className="air-quality-drone-secv">
        <div className="container">
          <div className="drone-content">
            <div className="air-quality-drone-txt">
              <h2>See the Air You Breathe</h2>
              <p>
                Get real-time insights into air quality with Prana Airs Air Quality Drone, equipped with cutting-edge
                sensor technology.
              </p>
              <Link href="/air-quality-monitor/air-drone" className="drone-button">
                Know More
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
                <h2>Our Clientele</h2>
              </div>
              <div className="our-client-para">
                <p>Join industry leaders who rely on our advanced solutions to ensure cleaner, safer environments.</p>
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
                <div className="stats-number">4000</div>
                <div className="counter_suffix">+</div>
              </div>

              <div className="truted-client-heading">
                <h3>Air Quality Monitors Installed</h3>
              </div>

              <div className="monitor-insalled-txt">
                <h3>
                  <span className="text-highlight">Across Top Sectors:</span> Construction, Hospitality, Education,
                  Tech, Research Study, and many more
                </h3>
                <p>
                  Installed in numerous strategic sites, ensuring comprehensive coverage and accurate data collection.
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
            <h2>Some of Our Case Studies</h2>
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
                <h3>How Prana Air helped Mahindra Lifespaces</h3>
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
                <h3>Aided in Air Quality Monitoring Solutions for INTERGLOBE</h3>
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
                <h3>How Prana Air helped CII to monitor air pollution</h3>
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
                <h3>How Prana Air aided Ola and Microsoft</h3>
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
                <h3>Prana Air aids TATA Steel</h3>
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
              <h2>Breathing Fresh Air Is Not An Option, It Is Our Right</h2>
              <Link href="/fresh-air-machine/" className="fresh-air-button">
                Know More
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
              <h3>Most Accurate & Low-Cost</h3>
              <h4>
                Prana Air Monitors, Reliable
                <br />
                Alternative To Costly Devices
              </h4>
            </div>
            <div className="accurate-btn">
              <Link href="https://www.pranaair.com/air-quality-data-accuracy/" className="accuracy-button">
                Check Accuracy
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
                    Air Quality <span className="text-highlight">Solutions</span>
                  </h3>
                  <Link href="/solutions-by-application" className="solutions-button">
                    Explore More
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
                  <Link href="/solutions-by-application/smart-city/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Smart-City-Projects.jpg"
                      alt="prana air - air quality solutions for smart city project"
                      width={500}
                      height={300}
                      className="solution-image"
                    />
                    <h4>
                      Smart City
                      <br />
                      Projects
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
                  <Link href="/solutions-by-application/institutes/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Institutes-Schools.jpg"
                      alt="prana air - air quality solutions for schools and insitutes"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Institutes/
                      <br />
                      Schools
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
                  <Link href="/solutions-by-application/constructions/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/air-quality-solutions-for-contruction-sites.jpg"
                      alt="prana air - air quality solutions for construction sites"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Construction
                      <br />
                      Sites
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
                  <Link href="/solutions-by-application/hotel-businesses/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Hotel-Businesses.jpg"
                      alt="prana air - air quality solutions for hotel businesses"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Hotel
                      <br />
                      Businesses
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
                  <Link href="/solutions-by-application/airports/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Airports.jpg"
                      alt="prana air - air quality solutions for airport"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Airports
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
                  <Link href="/solutions-by-application/hospital/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Hospital-Healthcare.jpg"
                      alt="prana air - air quality solutions for hospital and healthcare industries"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Hospital/
                      <br />
                      Healthcare
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
                  <Link href="/solutions-by-application/real-estate/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Real-Estates.jpg"
                      alt="prana air - air quality solutions for real estates businesses"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Real
                      <br />
                      Estates
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
                  Discover why people love <span className="text-highlight">Prana Air</span>
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
                <h3>Dr. Siddhartha Agarwal</h3>
                <h4>Assistant Professor, IIT (ISM) Dhanbad, India.</h4>
                <p>
                  Prana Air outdoor air quality monitors have been a valuable tool in our environmental project. The
                  devices provide reliable data that has helped us to track air quality trends over time. The
                  organization is sincere and dedicated towards its customers. Their customer service is also excellent.
                  I would recommend them to everyone who is working in the field of Environment or Air quality.
                </p>
              </div>
              <div className="clinet-txt">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/J.M.-Envirolab-Pvt-Ltd.png"
                  alt="J.M Envirolab Pvt Ltd logo"
                  width={60}
                  height={60}
                />
                <h3>Dr. Surender Yadav</h3>
                <h4>General Manager, J.M. Envirolab Pvt. Ltd.</h4>
                <p>
                  We have procured multiple Prana Air Air quality monitors for our work. The monitors have been valuable
                  tool in our field of work. The devices provide accurate and reliable data that has helped us immensely
                  in our application. The devices are capable of performing in harsh situations as well. Their customer
                  service is also very responsive in case of any rare occurrence of malfunction.
                </p>
              </div>
              <div className="clinet-txt">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/Unity-Groups.png"
                  alt="unity groups logo"
                  width={60}
                  height={60}
                />
                <h3>Anil Sobti</h3>
                <h4>General Manager-commercial, Unity Group</h4>
                <p>
                  We have been using the Prana Air Air Quality monitors, installed by Purelogic Labs India Pvt. Ltd. at
                  our different construction sites and have found their product accurate and reliable. The devices
                  installed have helped us to comply with the air quality standards and ensure the safety of our
                  workers. The after-sales service is very prompt and excellent.
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
                  <span className="text-highlight">Best Wearable Brand Award </span>
                  Winner in 2019 by IHW council
                </h2>
                <p>
                  Prana Air is proud to receive the Wearable Brand Award at the 4th Edition Good Air Summit and Awards.
                  This recognition highlights our commitment to innovative solutions for clean air.
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
                  <span className="text-highlight">Best Monitoring Devices Brand Award </span>
                  in 2019 by IHW Council
                </h2>
                <p>
                  We are pleased to announce that we received the prestigious Monitoring Devices Brand Award at the
                  highly regarded 4th Edition Good Air Summit and Awards. Our regular development of new ideas to aid in
                  reducing air pollution demonstrates our commitment to bettering air quality everywhere.
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
                <span className="text-highlight">Have a Query?</span>
                <br />
                Get in touch with us
              </h2>
            </div>
            <div className="lets-talk-link">
              <Link href="https://www.pranaair.com/contact/">
                Let Talk
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
