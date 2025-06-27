import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import FaqAccordion from "@/Components/Pages/FreshAirMachine/faq-accordion"
import { getServerTranslation } from "@/i18n/server"
import Image from "next/image"
import Link from "next/link"


export default async function FreshAirMachine() {
  const { t } = await getServerTranslation("fresh-air-machine")
  const faqItems = [
    {
      question: t("freshAirMachineFAQ.items.1.question"),
      answer: t("freshAirMachineFAQ.items.1.answer"),
    },
    {
      question: t("freshAirMachineFAQ.items.2.question"),
      answer: t("freshAirMachineFAQ.items.2.answer"),
    },
    {
      question: t("freshAirMachineFAQ.items.3.question"),
      answer: t("freshAirMachineFAQ.items.3.answer"),
    },
    {
      question: t("freshAirMachineFAQ.items.4.question"),
      answer: t("freshAirMachineFAQ.items.4.answer"),
    },
    {
      question: t("freshAirMachineFAQ.items.5.question"),
      answer: t("freshAirMachineFAQ.items.5.answer"),
    },
    {
      question: t("freshAirMachineFAQ.items.6.question"),
      answer: t("freshAirMachineFAQ.items.6.answer"),
    },
    {
      question: t("freshAirMachineFAQ.items.7.question"),
      answer: t("freshAirMachineFAQ.items.7.answer"),
    },
    {
      question: t("freshAirMachineFAQ.items.8.question"),
      answer: t("freshAirMachineFAQ.items.8.answer"),
    },
  ]
  const featuresRow1 = [
    {
      id: 1,
      image: "https://www.pranaair.com/wp-content/uploads/2023/04/automatic-air-partition.png",
      title: t("featuresSection.features.automaticAirPartition.title"),
      description: t("featuresSection.features.automaticAirPartition.description"),
      alt: t("featuresSection.features.automaticAirPartition.alt"),
    },
    {
      id: 2,
      image: "https://www.pranaair.com/wp-content/uploads/2023/04/large-coverage-area.png",
      title: t("featuresSection.features.largeCoverageArea.title"),
      description: t("featuresSection.features.largeCoverageArea.description"),
      alt: t("featuresSection.features.largeCoverageArea.alt"),
    },
    {
      id: 3,
      image: "https://www.pranaair.com/wp-content/uploads/2021/12/promising-99-efficiency-of-fresh-air-machine.jpg",
      title: t("featuresSection.features.efficiency.title"),
      description: t("featuresSection.features.efficiency.description"),
      alt: t("featuresSection.features.efficiency.alt"),
    },
    {
      id: 4,
      image: "https://www.pranaair.com/wp-content/uploads/2021/12/fresh-air-machine-hepa-filter.jpg",
      title: t("featuresSection.features.hepaFilter.title"),
      description: t("featuresSection.features.hepaFilter.description"),
      alt: t("featuresSection.features.hepaFilter.alt"),
    },
  ]

  const featuresRow2 = [
    {
      id: 5,
      image:
        "https://www.pranaair.com/wp-content/uploads/2023/04/prana-air-fresh-air-machine-mobile-app-and-led-display-monitor.png",
      title: t("featuresSection.features.mobileApp.title"),
      description: t("featuresSection.features.mobileApp.description"),
      alt: t("featuresSection.features.mobileApp.alt"),
    },
    {
      id: 6,
      image: "https://www.pranaair.com/wp-content/uploads/2023/04/ionizer-in-prana-air-fresh-air-machine.png",
      title: t("featuresSection.features.ionizer.title"),
      description: t("featuresSection.features.ionizer.description"),
      alt: t("featuresSection.features.ionizer.alt"),
    },
    {
      id: 7,
      image: "https://www.pranaair.com/wp-content/uploads/2023/04/uv-light.png",
      title: t("featuresSection.features.uvLight.title"),
      description: t("featuresSection.features.uvLight.description"),
      alt: t("featuresSection.features.uvLight.alt"),
    },
    {
      id: 8,
      image: "https://www.pranaair.com/wp-content/uploads/2023/04/heat-exchanger.png",
      title: t("featuresSection.features.heating.title"),
      description: t("featuresSection.features.heating.description"),
      alt: t("featuresSection.features.heating.alt"),
    },
  ]

  const topImages = [
    {
      id: 1,
      image: "https://www.pranaair.com/wp-content/uploads/2023/07/multi-layer-hepa-filters.png",
      title: t("multiImagesSection.images.hepaFilters.title"),
      description: t("multiImagesSection.images.hepaFilters.description"),
      alt: t("multiImagesSection.images.hepaFilters.alt"),
    },
    {
      id: 2,
      image: "https://www.pranaair.com/wp-content/uploads/2023/07/large-coverage-area.png",
      title: t("multiImagesSection.images.coverageArea.title"),
      description: t("multiImagesSection.images.coverageArea.description"),
      alt: t("multiImagesSection.images.coverageArea.alt"),
    },
  ]

  const bottomImages = [
    {
      id: 3,
      image: "https://www.pranaair.com/wp-content/uploads/2023/07/filtration-of-99.5-efficiency.png",
      title: t("multiImagesSection.images.efficiency.title"),
      description: t("multiImagesSection.images.efficiency.description"),
      alt: t("multiImagesSection.images.efficiency.alt"),
    },
    {
      id: 4,
      image: "https://www.pranaair.com/wp-content/uploads/2023/07/ai-enabled-airflow.png",
      title: t("multiImagesSection.images.aiEnabled.title"),
      description: t("multiImagesSection.images.aiEnabled.description"),
      alt: t("multiImagesSection.images.aiEnabled.alt"),
    },
  ]
  return (
    <div className="fresh-air-machine-page">
      {/* Banner Section */}
      <div className="home-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="banner-text">
                <h1>{t("bannerSection.title")}</h1>
                <h2>{t("bannerSection.subtitle")}</h2>
                <p>{t("bannerSection.description")}</p>
                <a href="#fresh_air_machine_contact">{t("bannerSection.ctaButton")}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Air Machine Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="clean-air-para">
              <h1 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "20pt", lineHeight: "1" }}>
                  <strong>{t("cleanAirSection.title.part1")} </strong>
                </span>
                <span style={{ fontSize: "18pt" }}>
                  <strong>
                    {t("cleanAirSection.title.part2")}
                    <sup>
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                        alt={t("cleanAirSection.logoAlt")}
                        width={32}
                        height={24}
                      />
                    </sup>
                  </strong>
                </span>
              </h1>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  {t("cleanAirSection.description.part1")}{" "}
                  <strong>{t("cleanAirSection.description.highlight")}, </strong>
                  {t("cleanAirSection.description.part2")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="featured_bg_section">
        <div className="container">
          <div className="featured_ctnr">
            {featuresRow1.map((feature) => (
              <div key={feature.id} className="feature_box">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.alt}
                  width={175}
                  height={175}
                  style={{ height: "auto" }}
                />
                <div className="feature_wrap_box">
                  <h2>
                    <span style={{ fontSize: "14pt" }}>
                      <strong>{feature.title}</strong>
                    </span>
                  </h2>
                  <span style={{ fontSize: "12pt" }}>{feature.description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="featured_ctnr">
            {featuresRow2.map((feature) => (
              <div key={feature.id} className="feature_box">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.alt}
                  width={163}
                  height={163}
                  style={{ height: "auto" }}
                />
                <div className="feature_wrap_box">
                  <h2>
                    <span style={{ fontSize: "14pt" }}>
                      <strong>{feature.title}</strong>
                    </span>
                  </h2>
                  <span style={{ fontSize: "12pt" }}>{feature.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Multi Images Section */}
      {/* Multi Images Section - Top Row */}
      <div className="container multi-imgs">
        <div className="row">
          {topImages.map((item) => (
            <div key={item.id} className="col-md-6">
              <div className="clean-air-machine-imgs">
                <Image src={item.image || "/placeholder.svg"} alt={item.alt} width={500} height={300} />
              </div>
              <div className="air-quality-solution-txt">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Multi Images Section - Bottom Row */}
      <div className="container multi-imgs-bottom">
        <div className="row">
          {bottomImages.map((item) => (
            <div key={item.id} className="col-md-6">
              <div className="clean-air-machine-imgs">
                <Image src={item.image || "/placeholder.svg"} alt={item.alt} width={500} height={300} />
              </div>
              <div className="air-quality-solution-txt">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="container">
        <div className="lets-find-heading">
          <h2 style={{ textAlign: "center" }}>
            {t("purificationHeadingSection.mainTitle")}
            <span style={{ fontSize: "24pt" }}>
              <sup>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("purificationHeadingSection.logoAlt")}
                  width={32}
                  height={24}
                />
              </sup>
            </span>
          </h2>
        </div>
        <div className="video-container">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/_3Sn_BjiwfA"
            title="How Prana Air Fresh Air Machine maintains indoor good air quality"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Indoor Pollutant Section */}
      <div className="container">
        <div className="indoor-pollutant-heading">
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "18pt" }}>{t("purificationHeadingSection.subTitle1")}</span>
          </h2>
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "18pt" }}>{t("purificationHeadingSection.subTitle2")}</span>
            <span style={{ fontSize: "24pt" }}>
              <sup>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("purificationHeadingSection.logoAlt")}
                  width={32}
                  height={24}
                />
              </sup>
            </span>
          </h2>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="tabs-container">
              <ul className="nav nav-tabs" id="pollutantTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pm25-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#pm25-content"
                    type="button"
                    role="tab"
                    aria-controls="pm25-content"
                    aria-selected="true"
                  >
                    {t("pollutantTabsSection.tabs.pm25")}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="co2-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#co2-content"
                    type="button"
                    role="tab"
                    aria-controls="co2-content"
                    aria-selected="false"
                  >
                    {t("pollutantTabsSection.tabs.co2")}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="tvoc-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tvoc-content"
                    type="button"
                    role="tab"
                    aria-controls="tvoc-content"
                    aria-selected="false"
                  >
                    {t("pollutantTabsSection.tabs.tvoc")}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="hcho-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#hcho-content"
                    type="button"
                    role="tab"
                    aria-controls="hcho-content"
                    aria-selected="false"
                  >
                    {t("pollutantTabsSection.tabs.hcho")}
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="pollutantTabsContent">
                <div className="tab-pane fade show active" id="pm25-content" role="tabpanel" aria-labelledby="pm25-tab">
                  <div className="tab-para-txt">
                    <h4 style={{ textAlign: "justify" }}>
                      <strong>{t("pollutantTabsSection.sourcesLabel")}</strong>
                    </h4>
                    <p style={{ textAlign: "justify" }}>{t("pollutantTabsSection.pm25.sources")}</p>
                    <h4 style={{ textAlign: "justify" }}>
                      <strong>{t("pollutantTabsSection.healthImpactsLabel")}</strong>
                    </h4>
                    <p style={{ textAlign: "justify" }}>{t("pollutantTabsSection.pm25.healthImpacts")}</p>
                  </div>
                </div>

                <div className="tab-pane fade" id="co2-content" role="tabpanel" aria-labelledby="co2-tab">
                  <div className="tab-para-txt">
                    <h4 style={{ textAlign: "justify" }}>
                      <strong>{t("pollutantTabsSection.sourcesLabel")}</strong>
                    </h4>
                    <p style={{ textAlign: "justify" }}>{t("pollutantTabsSection.co2.sources")}</p>
                    <h4 style={{ textAlign: "justify" }}>
                      <strong>{t("pollutantTabsSection.healthImpactsLabel")}</strong>
                    </h4>
                    <p style={{ textAlign: "justify" }}>{t("pollutantTabsSection.co2.healthImpacts")}</p>
                  </div>
                </div>

                <div className="tab-pane fade" id="tvoc-content" role="tabpanel" aria-labelledby="tvoc-tab">
                  <div className="tab-para-txt">
                    <h4 style={{ textAlign: "justify" }}>
                      <span style={{ color: "#000000" }}>
                        <strong>{t("pollutantTabsSection.sourcesLabel")}</strong>
                      </span>
                    </h4>
                    <p style={{ textAlign: "justify" }}>{t("pollutantTabsSection.tvoc.sources")}</p>
                    <h4 style={{ textAlign: "justify" }}>
                      <span style={{ color: "#000000" }}>
                        <strong>{t("pollutantTabsSection.healthImpactsLabel")}</strong>
                      </span>
                    </h4>
                    <p style={{ textAlign: "justify" }}>{t("pollutantTabsSection.tvoc.healthImpacts")}</p>
                  </div>
                </div>

                <div className="tab-pane fade" id="hcho-content" role="tabpanel" aria-labelledby="hcho-tab">
                  <div className="tab-para-txt">
                    <h4 style={{ textAlign: "justify" }}>
                      <strong>{t("pollutantTabsSection.sourcesLabel")}</strong>
                    </h4>
                    <p style={{ textAlign: "justify" }}>{t("pollutantTabsSection.hcho.sources")}</p>
                    <h4 style={{ textAlign: "justify" }}>
                      <strong>{t("pollutantTabsSection.healthImpactsLabel")}</strong>
                    </h4>
                    <p style={{ textAlign: "justify" }}>{t("pollutantTabsSection.hcho.healthImpacts")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pollutant-icons">
              <div className="tvocs-iocn">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/tvocs.png"
                  alt={t("pollutantTabsSection.icons.tvoc")}
                  width={100}
                  height={100}
                />
              </div>
              <div className="germs-iocn">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/germs-and-bacteria.png"
                  alt={t("pollutantTabsSection.icons.germs")}
                  width={100}
                  height={100}
                />
              </div>
              <div className="pollutant-indoor-bg">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/pollutants-indoor.jpg"
                  alt={t("pollutantTabsSection.icons.background")}
                  width={400}
                  height={400}
                />
              </div>
              <div className="pm10-iocn">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/pm10.png"
                  alt={t("pollutantTabsSection.icons.pm10")}
                  width={100}
                  height={100}
                />
              </div>
              <div className="pm25-iocn">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/pm2.5.png"
                  alt={t("pollutantTabsSection.icons.pm25")}
                  width={100}
                  height={100}
                />
              </div>
              <div className="dust-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/dust.png"
                  alt={t("pollutantTabsSection.icons.dust")}
                  width={100}
                  height={100}
                />
              </div>
              <div className="co2-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/co2.png"
                  alt={t("pollutantTabsSection.icons.co2")}
                  width={100}
                  height={100}
                />
              </div>
              <div className="hcho-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/hcho.png"
                  alt={t("pollutantTabsSection.icons.hcho")}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Specifications Section */}
      <div className="container product-specifications">
        <div className="prana-air-clean-machine-heading">
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>{t("productSpecificationsSection.title")}</span>
            <span style={{ fontSize: "24pt" }}>
              <sup>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("productSpecificationsSection.logoAlt")}
                  width={32}
                  height={24}
                />
              </sup>
            </span>
          </h2>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "12pt" }}>{t("productSpecificationsSection.description")}</span>
          </p>
        </div>
      </div>

      {/* Image Tabs */}
      <div className="container">
        <div className="tabimgs">
          <div className="tab-content" id="productImageTabsContent">
            <div className="tab-pane fade show active" id="image1" role="tabpanel" aria-labelledby="image1-tab">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/07/prana-air-iaq-solution-machine-with-control-1024x467.jpg"
                alt={t("productSpecificationsSection.images.machineWithControl.alt")}
                className="main-product-image"
                width={1024}
                height={467}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="tab-pane fade" id="image2" role="tabpanel" aria-labelledby="image2-tab">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2024/01/pranaair-fresher-air-machine-inner-parts.jpg"
                alt={t("productSpecificationsSection.images.innerParts.alt")}
                className="main-product-image"
                width={1024}
                height={467}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="tab-pane fade" id="image3" role="tabpanel" aria-labelledby="image3-tab">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2024/01/fresher-air-filter-monitor.jpg"
                alt={t("productSpecificationsSection.images.filterMonitor.alt")}
                className="main-product-image"
                width={1024}
                height={467}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="tab-pane fade" id="image4" role="tabpanel" aria-labelledby="image4-tab">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2024/01/fresher-air-filter-layers.jpg"
                alt={t("productSpecificationsSection.images.filterLayers.alt")}
                className="main-product-image"
                width={1024}
                height={467}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="tab-pane fade" id="image5" role="tabpanel" aria-labelledby="image5-tab">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2024/01/fresher-air-filter.jpg"
                alt={t("productSpecificationsSection.images.filter.alt")}
                className="main-product-image"
                width={1024}
                height={467}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="tab-pane fade" id="image6" role="tabpanel" aria-labelledby="image6-tab">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2024/01/prana-air-aqi-solution-inner.jpg"
                alt={t("productSpecificationsSection.images.aqiSolutionInner.alt")}
                className="main-product-image"
                width={1024}
                height={467}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <ul className="nav nav-tabs product-thumbnails" id="productImageTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active thumbnail-btn"
                id="image1-tab"
                data-bs-toggle="tab"
                data-bs-target="#image1"
                type="button"
                role="tab"
                aria-controls="image1"
                aria-selected="true"
              >
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/prana-air-iaq-solution-machine-with-control-1024x467.jpg"
                  alt={t("productSpecificationsSection.images.machineWithControl.alt")}
                  width={100}
                  height={60}
                  style={{ width: "100%", height: "auto" }}
                />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link thumbnail-btn"
                id="image2-tab"
                data-bs-toggle="tab"
                data-bs-target="#image2"
                type="button"
                role="tab"
                aria-controls="image2"
                aria-selected="false"
              >
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/01/pranaair-fresher-air-machine-inner-parts.jpg"
                  alt={t("productSpecificationsSection.images.innerParts.alt")}
                  width={100}
                  height={60}
                  style={{ width: "100%", height: "auto" }}
                />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link thumbnail-btn"
                id="image3-tab"
                data-bs-toggle="tab"
                data-bs-target="#image3"
                type="button"
                role="tab"
                aria-controls="image3"
                aria-selected="false"
              >
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/01/fresher-air-filter-monitor.jpg"
                  alt={t("productSpecificationsSection.images.filterMonitor.alt")}
                  width={100}
                  height={60}
                  style={{ width: "100%", height: "auto" }}
                />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link thumbnail-btn"
                id="image4-tab"
                data-bs-toggle="tab"
                data-bs-target="#image4"
                type="button"
                role="tab"
                aria-controls="image4"
                aria-selected="false"
              >
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/01/fresher-air-filter-layers.jpg"
                  alt={t("productSpecificationsSection.images.filterLayers.alt")}
                  width={100}
                  height={60}
                  style={{ width: "100%", height: "auto" }}
                />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link thumbnail-btn"
                id="image5-tab"
                data-bs-toggle="tab"
                data-bs-target="#image5"
                type="button"
                role="tab"
                aria-controls="image5"
                aria-selected="false"
              >
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/01/fresher-air-filter.jpg"
                  alt={t("productSpecificationsSection.images.filter.alt")}
                  width={100}
                  height={60}
                  style={{ width: "100%", height: "auto" }}
                />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link thumbnail-btn"
                id="image6-tab"
                data-bs-toggle="tab"
                data-bs-target="#image6"
                type="button"
                role="tab"
                aria-controls="image6"
                aria-selected="false"
              >
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/01/prana-air-aqi-solution-inner.jpg"
                  alt={t("productSpecificationsSection.images.aqiSolutionInner.alt")}
                  width={100}
                  height={60}
                  style={{ width: "100%", height: "auto" }}
                />
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Machine Working Mechanism */}
      <div className="container">
        <div className="machine-working-heading">
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>{t("machineMechanismSection.title")}</span>
            <span style={{ fontSize: "24pt" }}>
              <sup>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("machineMechanismSection.logoAlt")}
                  width={32}
                  height={24}
                />
              </sup>
            </span>
          </h2>
        </div>
        <div className="matching-workig-img">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2024/01/pranaair-advanced-fresh-air-machine-scaled.jpg"
            alt={t("machineMechanismSection.imageAlt")}
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="matching-workig-para">
          <p>{t("machineMechanismSection.description")}</p>
        </div>
      </div>

      {/* Filter Technology */}
      <div className="container">
        <div className="firsh-air-two-mode-heading tech-heading">
          <h2>
            {t("filterTechnologySection.title")}
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
              alt={t("filterTechnologySection.logoAlt")}
              width={32}
              height={24}
            />
          </h2>
        </div>
        <div className="matching-workig-para tech-para">
          <p>{t("filterTechnologySection.description")}</p>
        </div>
        <div className="technology-image">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/07/technology.jpg"
            alt={t("filterTechnologySection.imageAlt")}
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* Control Air Breath Section */}
      <div className="control-air-breath">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="control-air-breath-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/control-the-fresh-air-mahcine-remotely.png"
                  alt={t("controlAirSection.imageAlt")}
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="control-breath-heading">
                <h2>
                  {t("controlAirSection.title")}
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt={t("controlAirSection.logoAlt")}
                    width={32}
                    height={24}
                  />
                </h2>
                <p>{t("controlAirSection.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Energy-Efficient Heating Section */}
      <div className="control-air-breath">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="comfort-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/winter-comfort.png"
                  alt={t("energyEfficientSection.comfortIconAlt")}
                  width={100}
                  height={100}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="control-breath-heading">
                <h2>
                  {t("energyEfficientSection.title")}
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt={t("energyEfficientSection.logoAlt")}
                    width={32}
                    height={24}
                  />
                </h2>
                <p>{t("energyEfficientSection.description")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="control-air-breath-img hot-cold-air-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/energy-efficient-heating-winter-comfort.png"
                  alt={t("energyEfficientSection.mainImageAlt")}
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fresh Air Two Modes */}
      <div className="container">
        <div className="firsh-air-two-mode-heading">
          <h2>
            {t("freshAirModesSection.title")}
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
              alt={t("freshAirModesSection.logoAlt")}
              width={32}
              height={24}
            />
          </h2>
        </div>
        <div className="row">
          <div className="col-md-6 shdw-line">
            <div className="recicular-img">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/07/recirculation-mode-on-fresh-air-machine.png"
                alt={t("freshAirModesSection.mode1.imageAlt")}
                width={500}
                height={300}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="firsh-air-two-modes-txt">
              <ul>
                <li>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/recirculation-door-img.png"
                    alt={t("freshAirModesSection.mode1.doorImageAlt")}
                    width={100}
                    height={100}
                    style={{ width: "auto", height: "auto" }}
                  />
                </li>
                <li>
                  <h3>{t("freshAirModesSection.mode1.title")}</h3>
                  <p>{t("freshAirModesSection.mode1.description")}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="recicular-img">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/07/outdoor-air-mode-on-fresh-air-machine.png"
                alt={t("freshAirModesSection.mode2.imageAlt")}
                width={500}
                height={300}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="firsh-air-two-modes-txt outdoor-txt-mode">
              <ul>
                <li>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/outdoor-air-door-img.png"
                    alt={t("freshAirModesSection.mode2.doorImageAlt")}
                    width={100}
                    height={100}
                    style={{ width: "auto", height: "auto" }}
                  />
                </li>
                <li>
                  <h3>{t("freshAirModesSection.mode2.title")}</h3>
                  <p>{t("freshAirModesSection.mode2.description")}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="container">
        <div className="firsh-air-two-mode-heading">
          <h2>
            {t("technicalSpecsSection.title")}
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
              alt={t("technicalSpecsSection.logoAlt")}
              width={32}
              height={24}
            />
          </h2>
        </div>
        <div className="row">
          <div className="broucher-btn">
            <Link href="https://www.pranaair.com/wp-content/uploads/2023/07/prana-air-fresh-air-machine-brochure-doc.pdf">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png"
                alt={t("technicalSpecsSection.brochureButtonAlt")}
                width={30}
                height={30}
              />
              {t("technicalSpecsSection.downloadBrochure")}
            </Link>
          </div>
        </div>
        <div className="row box-bg">
          <div className="col-md-4">
            <div className="tech-spec">
              <ul>
                <li>
                  <h5>{t("technicalSpecsSection.specs.product.label")}</h5>
                </li>
                <li>
                  <h3>{t("technicalSpecsSection.specs.product.value")}</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>{t("technicalSpecsSection.specs.cadr.label")}</h5>
                </li>
                <li>
                  <h3>{t("technicalSpecsSection.specs.cadr.value")}</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>{t("technicalSpecsSection.specs.pressure.label")}</h5>
                </li>
                <li>
                  <h3>{t("technicalSpecsSection.specs.pressure.value")}</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>{t("technicalSpecsSection.specs.filters.label")}</h5>
                </li>
                <li>
                  <h3>{t("technicalSpecsSection.specs.filters.value")}</h3>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 box-shdw-line">
            <div className="tech-spec">
              <ul>
                <li>
                  <h5>{t("technicalSpecsSection.specs.power.label")}</h5>
                </li>
                <li>
                  <h3>{t("technicalSpecsSection.specs.power.value")}</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>{t("technicalSpecsSection.specs.voltage.label")}</h5>
                </li>
                <li>
                  <h3>{t("technicalSpecsSection.specs.voltage.value")}</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>{t("technicalSpecsSection.specs.efficiency.label")}</h5>
                </li>
                <li>
                  <h3>{t("technicalSpecsSection.specs.efficiency.value")}</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>{t("technicalSpecsSection.specs.dimensions.label")}</h5>
                </li>
                <li>
                  <h3>{t("technicalSpecsSection.specs.dimensions.value")}</h3>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tech-spec">
              <ul>
                <li>
                  <h5>{t("technicalSpecsSection.specs.coverage.label")}</h5>
                </li>
                <li>
                  <h3>{t("technicalSpecsSection.specs.coverage.value")}</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>{t("technicalSpecsSection.specs.filtrationStage.label")}</h5>
                </li>
                <li>
                  <h3>{t("technicalSpecsSection.specs.filtrationStage.value")}</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>{t("technicalSpecsSection.specs.filterType.label")}</h5>
                </li>
                <li>
                  <h3>{t("technicalSpecsSection.specs.filterType.value")}</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>{t("technicalSpecsSection.specs.control.label")}</h5>
                </li>
                <li>
                  <h3>{t("technicalSpecsSection.specs.control.value")}</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="container">
        <div className="compare-heading">
          <div className="firsh-air-two-mode-heading">
            <h2>
              {t("comparisonSection.title")}
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                alt={t("comparisonSection.logoAlt")}
                width={32}
                height={24}
              />
            </h2>
          </div>
        </div>
      </div>
      <div className="container mob-scroll">
        <div className="row">
          <div className="col-md-2">
            <div className="room-air-purifier-spec">
              <ul>
                <li>
                  <h5>{t("comparisonSection.specs.mode")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.specs.ventilation")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.specs.co2Emissions")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.specs.numberOfFilters")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.specs.filterLife")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.specs.coverageArea")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.specs.purificationEfficiency")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.specs.pm")}</h5>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div className="room-air-purifier">
              <h3>{t("comparisonSection.roomAirPurifier.title")}</h3>
              <ul>
                <li className="list-bg">
                  <h5>{t("comparisonSection.roomAirPurifier.mode")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.roomAirPurifier.ventilation")}</h5>
                </li>
                <li className="list-bg">
                  <h5>{t("comparisonSection.roomAirPurifier.co2Emissions")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.roomAirPurifier.numberOfFilters")}</h5>
                </li>
                <li className="list-bg">
                  <h5>{t("comparisonSection.roomAirPurifier.filterLife")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.roomAirPurifier.coverageArea")}</h5>
                </li>
                <li className="list-bg">
                  <h5>{t("comparisonSection.roomAirPurifier.purificationEfficiency")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.roomAirPurifier.pm")}</h5>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div className="room-air-purifier prana-air-fresh-machine">
              <h3>{t("comparisonSection.pranaAirMachine.title")}</h3>
              <ul className="tabs-list">
                <li>
                  <h5>{t("comparisonSection.pranaAirMachine.mode")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.pranaAirMachine.ventilation")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.pranaAirMachine.co2Emissions")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.pranaAirMachine.numberOfFilters")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.pranaAirMachine.filterLife")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.pranaAirMachine.coverageArea")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.pranaAirMachine.purificationEfficiency")}</h5>
                </li>
                <li>
                  <h5>{t("comparisonSection.pranaAirMachine.pm")}</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* HVAC vs Fresh Air Machine */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Image
              className="havc-img"
              src="https://www.pranaair.com/wp-content/uploads/2022/06/hvac-machine-1024x572.jpg"
              alt={t("hvacComparisonSection.imageAlt")}
              width={1024}
              height={572}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-6">
            <div className="diff-vs-fresh-air-heading">
              <h2>{t("hvacComparisonSection.titlePart1")}</h2>
              <h2>
                {t("hvacComparisonSection.titlePart2")}
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("hvacComparisonSection.logoAlt")}
                  width={32}
                  height={24}
                />
              </h2>
              <p style={{ textAlign: "justify" }}>{t("hvacComparisonSection.description")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="container">
        <div className="app-prana-heading">
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "18pt" }}>{t("applicationsSection.title")}</span>
            <span style={{ fontSize: "24pt" }}>
              <sup>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("applicationsSection.logoAlt")}
                  width={32}
                  height={24}
                />
              </sup>
            </span>
          </h2>
        </div>
        <div className="applications-grid">
          {/* Hospital Application */}
          <div className="application-card">
            <div className="application-overlay">
              <p>{t("applicationsSection.applications.hospital.description")}</p>
            </div>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2022/06/fresh-air-machine-for-hospital.jpg"
              alt={t("applicationsSection.applications.hospital.imageAlt")}
              width={400}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="application-title">{t("applicationsSection.applications.hospital.title")}</div>
          </div>

          {/* Hotel Application */}
          <div className="application-card">
            <div className="application-overlay">
              <p>{t("applicationsSection.applications.hotel.description")}</p>
            </div>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2022/06/fresh-air-machine-for-hotel.jpg"
              alt={t("applicationsSection.applications.hotel.imageAlt")}
              width={400}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="application-title">{t("applicationsSection.applications.hotel.title")}</div>
          </div>

          {/* Office Application */}
          <div className="application-card">
            <div className="application-overlay">
              <p>{t("applicationsSection.applications.office.description")}</p>
            </div>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2022/06/fresh-air-machine-for-office.jpg"
              alt={t("applicationsSection.applications.office.imageAlt")}
              width={400}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="application-title">{t("applicationsSection.applications.office.title")}</div>
          </div>

          {/* School Application */}
          <div className="application-card">
            <div className="application-overlay">
              <p>{t("applicationsSection.applications.school.description")}</p>
            </div>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2022/06/fresh-air-machine-for-school.jpg"
              alt={t("applicationsSection.applications.school.imageAlt")}
              width={400}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="application-title">{t("applicationsSection.applications.school.title")}</div>
          </div>

          {/* Mall Application */}
          <div className="application-card">
            <div className="application-overlay">
              <p>{t("applicationsSection.applications.mall.description")}</p>
            </div>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2022/06/fresh-air-machine-for-shopping-malls.png"
              alt={t("applicationsSection.applications.mall.imageAlt")}
              width={400}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="application-title">{t("applicationsSection.applications.mall.title")}</div>
          </div>

          {/* Home Application */}
          <div className="application-card">
            <div className="application-overlay">
              <p>{t("applicationsSection.applications.home.description")}</p>
            </div>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2022/06/fresh-air-machine-for-home.jpg"
              alt={t("applicationsSection.applications.home.imageAlt")}
              width={400}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="application-title">{t("applicationsSection.applications.home.title")}</div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
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
      <ContactForm pageName="Fresh Air Machine Page" />

      {/* FAQ Section */}
      <div className="container">
        <div className="faq-heading">
          <h3 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "18pt" }}>{t("faqHeadingSection.title")}</span>
            <span style={{ fontSize: "18pt" }}>
              {t("faqHeadingSection.subtitle")}
              <sup>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("faqHeadingSection.logoAlt")}
                  width={32}
                  height={24}
                />
              </sup>
            </span>
          </h3>
        </div>
        <FaqAccordion faqItems={faqItems} />
      </div>
    </div>
  )
}
