import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import { getServerTranslation } from "@/i18n/server"
import Image from "next/image"
import ContactForm from "@/Components/Contacform/ContactForm"
import DroneTabsSlider from "@/Components/Pages/AirDrone/drone-tabs-slider"
import AirQualitySlider from "@/Components/Pages/AirDrone/air-quality-slider"
import VideoSlider from "@/Components/Pages/AirDrone/video-slider"
import GalleryTabsSlider from "@/Components/Pages/AirDrone/gallery-tabs-slider"
import TechSpecTabs from "@/Components/Pages/AirDrone/air-tech-spec"
import FaqAccordion from "@/Components/Pages/AirDrone/faq-accordion"

export default async function AirDronePage() {
  // Get translations for the air-drone page
  const { t } = await getServerTranslation("air-drone")

  // VTOL drone slider images
  const vtolSliderImages = [
    "/img/prana-VTOL-air-quality-drone.png",
    "/img/front-of-the-prana-vtol-drone.png",
    "/img/prana-vtol-drone-from-left.png",
    "/img/vtol-drone-fron-the-front.png",
  ]

  // Quad drone slider images
  const quadSliderImages = [
    "/img/prana-quad-air-quality-drone.webp",
    "/img/prana-air-quad-drone-angle-from-top.webp",
    "/img/prana-air-quad-drone-view-from-side.webp",
    "/img/prana-air-quad-drone-from-front.webp",
  ]

  // Photo gallery images
  const vtolGalleryImages = [
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
  ]

  // Quad photo gallery images
  const quadGalleryImages = [
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
    "/img/product-gallery.webp",
  ]

  // Air quality slider items
  const airQualityItems = [
    {
      image: "/img/pollution-source-identification.webp",
      title: t("airQualityMonitor.pollutionSource"),
    },
    {
      image: "/img/health-risk-mitigation.webp",
      title: t("airQualityMonitor.environmentalCompliance"),
    },
    {
      image: "/img/environmental-complince.webp",
      title: t("airQualityMonitor.healthRisk"),
    },
    {
      image: "/img/pollution-source-identification.webp",
      title: t("airQualityMonitor.pollutionSource"),
    },
  ]

  // Video slider URLs
  const videoUrls = [
    "https://customer-12c4mdft3x8eqlll.cloudflarestream.com/484294820fe7b20ff36ed750ff19324a/iframe?muted=true&autoplay=true&loop=true",
    "https://customer-12c4mdft3x8eqlll.cloudflarestream.com/484294820fe7b20ff36ed750ff19324a/iframe?muted=true&autoplay=true&loop=true",
    "https://customer-12c4mdft3x8eqlll.cloudflarestream.com/484294820fe7b20ff36ed750ff19324a/iframe?muted=true&autoplay=true&loop=true",
    "https://customer-12c4mdft3x8eqlll.cloudflarestream.com/484294820fe7b20ff36ed750ff19324a/iframe?muted=true&autoplay=true&loop=true",
  ]

  // Tech specs content
  const vtolSpecs = [
    { title: t("techSpecs.parameters"), value: "Breathalyzer" },
    { title: t("techSpecs.materials"), value: "PC+ABS" },
    { title: t("techSpecs.workingCurrent"), value: "≤20mA" },
    { title: t("techSpecs.deviceDimension"), value: "66mm X 40mm X 16mm" },
    { title: t("techSpecs.parameters"), value: "Breathalyzer" },
    { title: t("techSpecs.materials"), value: "PC+ABS" },
    { title: t("techSpecs.workingCurrent"), value: "≤20mA" },
    { title: t("techSpecs.deviceDimension"), value: "66mm X 40mm X 16mm" },
  ]

  const quadSpecs = [
    { title: t("techSpecs.parameters"), value: "test" },
    { title: t("techSpecs.materials"), value: "PC+ABS" },
    { title: t("techSpecs.workingCurrent"), value: "≤20mA" },
    { title: t("techSpecs.deviceDimension"), value: "66mm X 40mm X 16mm" },
    { title: t("techSpecs.parameters"), value: "Breathalyzer" },
    { title: t("techSpecs.materials"), value: "PC+ABS" },
    { title: t("techSpecs.workingCurrent"), value: "≤20mA" },
    { title: t("techSpecs.deviceDimension"), value: "66mm X 40mm X 16mm" },
  ]

  const vtolContent = {
    title: t("droneCategory.vtol.title"),
    description: t("droneCategory.vtol.description"),
    specs: [
      { type: "text", title: t("droneCategory.vtol.specs.largeAreaCoverage") },
      { type: "text", title: t("droneCategory.vtol.specs.longDurationMissions") },
      { type: "text", title: t("droneCategory.vtol.specs.thermalImaging") },
      { type: "value", title: t("droneCategory.vtol.specs.range"), value: "90", unit: "km" },
      { type: "value", title: t("droneCategory.vtol.specs.flightSpeed"), value: "28", unit: "m/s" },
      { type: "value", title: t("droneCategory.vtol.specs.cruisingSpeed"), value: "16", unit: "m/s" },
      { type: "value", title: t("droneCategory.vtol.specs.altitudeTolerance"), value: "4000", unit: "m" },
      {
        type: "description",
        title: t("droneCategory.vtol.specs.maxEnduranceTime"),
        description: t("droneCategory.vtol.specs.maxEnduranceTimeDesc"),
      },
      {
        type: "description",
        title: t("droneCategory.vtol.specs.maximumRange"),
        description: t("droneCategory.vtol.specs.maximumRangeDesc"),
      },
      {
        type: "description",
        title: t("droneCategory.vtol.specs.remoteControlRange"),
        description: t("droneCategory.vtol.specs.remoteControlRangeDesc"),
      },
      {
        type: "description",
        title: t("droneCategory.vtol.specs.windResistance"),
        description: t("droneCategory.vtol.specs.windResistanceDesc"),
      },
    ],
  }

  const quadContent = {
    title: t("droneCategory.quad.title"),
    description: t("droneCategory.quad.description"),
    specs: [
      { type: "text", title: t("droneCategory.quad.specs.rapidResponse") },
      { type: "text", title: t("droneCategory.quad.specs.localizedPollutionTracking") },
      { type: "text", title: t("droneCategory.quad.specs.laserRanging") },
      { type: "text", title: t("droneCategory.quad.specs.controlRange") },
      { type: "text", title: t("droneCategory.quad.specs.ultraPortability") },
      { type: "value", title: t("droneCategory.quad.specs.maxSpeed"), value: "6", unit: "m/s" },
      { type: "value", title: t("droneCategory.quad.specs.maxFlightAltitude"), value: "120", unit: "m" },
      {
        type: "description",
        title: t("droneCategory.quad.specs.maxFlightTime"),
        description: t("droneCategory.quad.specs.maxFlightTimeDesc"),
      },
      { type: "value", title: t("droneCategory.quad.specs.takeoffWeight"), value: "720", unit: "g" },
      { type: "value", title: t("droneCategory.quad.specs.maxPayload"), value: "300", unit: "g" },
    ],
  }

  // FAQ content
  const faqItems = [
    {
      question: t("faq.question1"),
      answer: t("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      answer: t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer: t("faq.answer3"),
    },
    {
      question: t("faq.question4"),
      answer: t("faq.answer4"),
    },
    {
      question: t("faq.question5"),
      answer: t("faq.answer5"),
    },
  ]

  return (
    <div className="air-drone-page">
      <main className="air-drone-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title" style={{ position: "relative", zIndex: 1 }}>
              {t("hero.title")}
            </h1>
            <div
              className="hero-drone-image"
              style={{ transform: "scale(1.2)", marginTop: "-40px", position: "relative", zIndex: 2 }}
            >
              <Image src="/img/prana-air-vtol.webp" alt="Logo" width={200} height={200} />
            </div>
            <p className="hero-subtitle">{t("hero.subtitle")}</p>
            <div className="hero-buttons">
              <button className="btn-request-quote">{t("droneCategory.buttons.requestQuote")}</button>
              <button>
                <Image src="public/img/hero-btn-icon.png" alt="Logo" width={20} height={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container-fluid">
            <p className="features-intro">{t("features.intro")}</p>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/03/real-time-data.png"
                    alt={t("features.realTimeData")}
                  />
                </div>
                <div className="feature-text">{t("features.realTimeData")}</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/03/lightweight.png"
                    alt={t("features.lightweightDesign")}
                  />
                </div>
                <div className="feature-text">{t("features.lightweightDesign")}</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/03/modular-sensors.png"
                    alt={t("features.modularSensors")}
                  />
                </div>
                <div className="feature-text">{t("features.modularSensors")}</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/03/high-accuracy.png"
                    alt={t("features.highAccuracy")}
                  />
                </div>
                <div className="feature-text">{t("features.highAccuracy")}</div>
              </div>
              <div className="feature-item last">
                <div className="feature-icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/03/robut-connectivity.png"
                    alt={t("features.robustConnectivity")}
                  />
                </div>
                <div className="feature-text">{t("features.robustConnectivity")}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Drone Category Section */}
        <section className="drone-category-section">
          <div className="container">
            <h2 className="section-title">{t("droneCategory.title")}</h2>

            <DroneTabsSlider
              vtolSliderImages={vtolSliderImages}
              quadSliderImages={quadSliderImages}
              vtolContent={vtolContent}
              quadContent={quadContent}
              buttonText={{
                requestQuote: t("droneCategory.buttons.requestQuote"),
                brochure: t("droneCategory.buttons.brochure"),
              }}
            />
          </div>
        </section>

        {/* Advance air quality monitor tech */}
        <section className="air-quality-monitor-tech">
          <div className="container">
            <div className="row">
              <div className="monitor-tech">
                <h2>{t("airQualityMonitor.title")}</h2>
                <p>{t("airQualityMonitor.subtitle")}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="slider-monitor-tech">
                  <AirQualitySlider items={airQualityItems} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* parameters measured */}
        <section className="parameter-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="parameter-img">
                  <Image src="/img/prana-VTOL-parameters-measured.webp" alt="Logo" width={200} height={100} />
                  <h3>{t("parameters.title")}</h3>
                  <span>{t("parameters.subtitle")}</span>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="parameter-main">
                  <ul>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/pm1.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">{t("parameters.pm1")}</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/PM2.5.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">{t("parameters.pm25")}</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/PM10.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">{t("parameters.pm10")}</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/TEMPERATURE.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">{t("parameters.temp")}</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/Humidity.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">{t("parameters.humid")}</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/CH4.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">{t("parameters.ch4")}</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/CO.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">{t("parameters.co")}</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/H2S.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">{t("parameters.h2s")}</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/NH3.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">{t("parameters.nh3")}</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/NO2.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">{t("parameters.no2")}</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/O3.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">{t("parameters.o3")}</span>
                      </span>
                    </li>
                    <li>
                      <span className="parameter-box">
                        <Image src="/img/SO2.png" alt="Logo" width={200} height={100} />
                        <span className="parameter-txt">{t("parameters.so2")}</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* app connectivity */}
        <section className="app-controller">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-app">
                  <h2>{t("appController.title")}</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="map-box">
                  <ul>
                    <li>
                      <Image src="/img/real-time-maps.png" alt="real-time-maps" width={100} height={100} />
                    </li>
                    <li>
                      <h3>{t("appController.realTimeMaps.title")}</h3>
                      <p>{t("appController.realTimeMaps.description")}</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src="/img/Historical-Data.png" alt="historical-data" width={100} height={100} />
                    </li>
                    <li>
                      <h3>{t("appController.historicalData.title")}</h3>
                      <p>{t("appController.historicalData.description")}</p>
                    </li>
                  </ul>
                </div>
                <div className="map-box">
                  <ul>
                    <li>
                      <Image src="/img/graph-generation.png" alt="graph-generation" width={100} height={100} />
                    </li>
                    <li>
                      <h3>{t("appController.graphGeneration.title")}</h3>
                      <p>{t("appController.graphGeneration.description")}</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src="/img/Data-Plotting.png" alt="data-plotting" width={100} height={100} />
                    </li>
                    <li>
                      <h3>{t("appController.dataPlotting.title")}</h3>
                      <p>{t("appController.dataPlotting.description")}</p>
                    </li>
                  </ul>
                </div>
                <div className="map-img">
                  <ul>
                    <li>
                      <Image src="/img/heat-maps.webp" alt="heat-maps" width={100} height={100} />
                      <h3>{t("appController.heatMaps.title")}</h3>
                      <p>{t("appController.heatMaps.description")}</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src="/img/custom-data.webp" alt="custom-data" width={100} height={100} />
                      <h3>{t("appController.customData.title")}</h3>
                      <p>{t("appController.customData.description")}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* night vision */}
        <section className="thermal-camera">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="night-vision-txt">
                  <h2>{t("thermalCamera.title")}</h2>
                  <p>{t("thermalCamera.description")}</p>
                  <ul>
                    <li>
                      <span>{t("thermalCamera.aiObjectTracking")}</span>
                    </li>
                    <li>
                      <span>{t("thermalCamera.stabilization")}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="camera-img">
                  <Image src="/img/night-vision-thermal-camera.webp" alt="thermal-camera" width={100} height={100} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* high capacity battery  */}
        <section className="high-capacity">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="h-c-battery">
                  <Image src="/img/high-capacity-battery.webp" alt="battery" width={100} height={100} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="high-capacity-txt">
                  <h2>{t("battery.title")}</h2>
                  <h3>{t("battery.subtitle")}</h3>
                  <p>{t("battery.description")}</p>
                  <ul>
                    <li>{t("battery.type1")}</li>
                    <li>{t("battery.type2")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* lightweight drone  */}
        <section className="high-capacity lightweight-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="light-weight-drone-txt">
                  <h2>{t("lightweightDrone.title")}</h2>
                  <p>{t("lightweightDrone.description")}</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="light-weight-drone-img">
                  <Image src="/img/lightweight-drone.webp" alt="lightweight-drone" width={100} height={100} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* long endurance drone  */}
        <section className="high-capacity long-endurance-drone-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="long-enduru-drone-img">
                  <Image src="/img/long-endurance-drone.webp" alt="long-endurance-drone" width={100} height={100} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="long-enduru-drone-txt">
                  <h2>{t("longEnduranceDrone.title")}</h2>
                  <p>{t("longEnduranceDrone.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* advance tech  */}
        <section className="advance-air-tech">
          <div className="container">
            <div className="row">
              <div className="advance-monitor-tech">
                <h2>{t("advancedAirQuality.title")}</h2>
                <p>{t("advancedAirQuality.subtitle")}</p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="slider-monitor-tech">
                  <VideoSlider videoUrls={videoUrls} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* labelling drone  */}
        <section className="labelling-drone">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="labell-txt">
                  <h2>{t("labellingDrone.title")}</h2>
                  <ul>
                    <li>
                      <a href="#">{t("labellingDrone.requestQuote")}</a>
                    </li>
                    <li>
                      <a href="#">
                        <Image src="/img/icon.png" alt="Logo" width={200} height={100} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="labell-txt">
                  <p>{t("labellingDrone.description")}</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="labell-img quad-drone">
                  <Image src="/img/prana-quad-drone.webp" alt="Logo" width={200} height={100} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="labell-img">
                  <Image src="/img/labelling-of-drone.webp" alt="Logo" width={200} height={100} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Drone gallery Section */}
        <section className="drone-category-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="gallery-title">{t("gallery.title")}</h2>
              </div>
              <div className="col-lg-12">
                <GalleryTabsSlider
                  vtolGalleryImages={vtolGalleryImages}
                  quadGalleryImages={quadGalleryImages}
                  tabLabels={{
                    vtol: t("droneCategory.vtol.title"),
                    quad: t("droneCategory.quad.title"),
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* volt quad tailored Section */}
        <section className="trailord">
          <div className="container">
            <div className="row">
              <div className="trailord-txt">
                <h2>{t("comparison.title")}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2">
                <div className="icon-rang">
                  <ul>
                    <li>
                      <Image src="/img/flight-range.png" alt="flight-range" width={200} height={100} />
                      {t("comparison.categories.flightRange")}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src="/img/Use-Case.png" alt="use-case" width={200} height={100} />
                      {t("comparison.categories.useCase")}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src="/img/Camera.png" alt="camera" width={200} height={100} />
                      {t("comparison.categories.camera")}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src="/img/Portability.png" alt="portability" width={200} height={100} />
                      {t("comparison.categories.portability")}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="img-box">
                  <div className="prana-vtol-quad-img">
                    <Image src="/img/prana-VTOL-air-quality-drone.png" alt="vtol-drone" width={200} height={100} />
                  </div>
                  <div className="prana-vtol-quad-img">
                    <Image src="/img/prana-quad-air-quality-drone.webp" alt="quad-drone" width={200} height={100} />
                  </div>
                </div>
                <div className="prana-vtol-main">
                  <div className="compare">
                    <h3>{t("comparison.vtol.title")}</h3>
                    <p>{t("comparison.vtol.range")}</p>
                    <p>{t("comparison.vtol.useCase")}</p>
                    <p>{t("comparison.vtol.camera")}</p>
                    <p>{t("comparison.vtol.portability")}</p>
                    <a href="#">
                      {t("comparison.vtol.requestQuote")}{" "}
                      <Image src="/img/blue-icon.png" alt="icon" width={200} height={100} />
                    </a>
                  </div>

                  <div className="compare">
                    <h3>{t("comparison.quad.title")}</h3>
                    <p>{t("comparison.quad.range")}</p>
                    <p>{t("comparison.quad.useCase")}</p>
                    <p>{t("comparison.quad.camera")}</p>
                    <p>{t("comparison.quad.portability")}</p>
                    <a href="#">
                      {t("comparison.quad.requestQuote")}{" "}
                      <Image src="/img/blue-icon.png" alt="icon" width={200} height={100} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* tech spec Section */}
        <section className="tech-spec">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <TechSpecTabs
                  vtolSpecs={vtolSpecs}
                  quadSpecs={quadSpecs}
                  tabLabels={{
                    vtol: t("droneCategory.vtol.title"),
                    quad: t("droneCategory.quad.title"),
                  }}
                  brochureText={t("techSpecs.brochure")}
                />
              </div>
              <div className="col-lg-6">
              </div>
            </div>
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <div className="roch-icon">

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* airqulality contact Section */}
        <ContactForm pageName="Air Drone Page" />

        {/* FAQs Section */}
        <section className="faq-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="faq-heading">
                  <h2>{t("faq.title")}</h2>
                </div>
                <FaqAccordion faqItems={faqItems} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

