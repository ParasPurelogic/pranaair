import "./style.css"
import Link from "next/link"
import Image from "next/image"
import SensorNavBar from "@/Components/Sensorbar/SensorNavBar"
import QuantityCounter from "@/Components/Pages/SulfurDioxide/quantity-counter"
import ContactForm from "@/Components/Contacform/ContactForm"
import ProductCarousel from "@/Components/Pages/SulfurDioxide/product-carousel"
import { getServerTranslation } from "@/i18n/server"

export default async function AirDronePage() {
    const { t } = await getServerTranslation("sulfur-dioxide-so2-sensor")
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }
    const gallery = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }
    const applications = [
        {
            id: 1,
            image: "/img/Air-Quality-Monitoring-Equipment.webp",
            title: t("applicationsSO2Section.applications.airQualityMonitoring.title"),
            alt: t("applicationsSO2Section.applications.airQualityMonitoring.alt")
        },
        {
            id: 2,
            image: "/img/Air-Quality-Monitoring-Equipment.webp",
            title: t("applicationsSO2Section.applications.industrialSafety.title"),
            alt: t("applicationsSO2Section.applications.industrialSafety.alt")
        },
        {
            id: 3,
            image: "/img/Air-Quality-Monitoring-Equipment.webp",
            title: t("applicationsSO2Section.applications.environmentalCompliance.title"),
            alt: t("applicationsSO2Section.applications.environmentalCompliance.alt")
        },
        {
            id: 4,
            image: "/img/Air-Quality-Monitoring-Equipment.webp",
            title: t("applicationsSO2Section.applications.smartCities.title"),
            alt: t("applicationsSO2Section.applications.smartCities.alt")
        },
        {
            id: 5,
            image: "/img/Air-Quality-Monitoring-Equipment.webp",
            title: t("applicationsSO2Section.applications.researchInstitutions.title"),
            alt: t("applicationsSO2Section.applications.researchInstitutions.alt")
        }
    ]
    const relatedProducts = [
        {
            id: 1,
            name: t("youMayAlsoLikeSection.products.ethanol.name"),
            image: "/img/ethanol-sensor.webp",
            alt: t("youMayAlsoLikeSection.products.ethanol.alt"),
            link: "/sensors/ethanol",
        },
        {
            id: 2,
            name: t("youMayAlsoLikeSection.products.co2.name"),
            image: "/img/ethanol-sensor.webp", // This would be replaced with the actual CO2 sensor image
            alt: t("youMayAlsoLikeSection.products.co2.alt"),
            link: "/sensors/co2",
        },
        {
            id: 3,
            name: t("youMayAlsoLikeSection.products.no2.name"),
            image: "/img/ethanol-sensor.webp", // This would be replaced with the actual NO2 sensor image
            alt: t("youMayAlsoLikeSection.products.no2.alt"),
            link: "/sensors/no2",
        },
        {
            id: 4,
            name: t("youMayAlsoLikeSection.products.co.name"),
            image: "/img/ethanol-sensor.webp", // This would be replaced with the actual CO sensor image
            alt: t("youMayAlsoLikeSection.products.co.alt"),
            link: "/sensors/co",
        },
        {
            id: 5,
            name: t("youMayAlsoLikeSection.products.ozone.name"),
            image: "/img/ethanol-sensor.webp", // This would be replaced with the actual Ozone sensor image
            alt: t("youMayAlsoLikeSection.products.ozone.alt"),
            link: "/sensors/ozone",
        },
        {
            id: 6,
            name: t("youMayAlsoLikeSection.products.ammonia.name"),
            image: "/img/ethanol-sensor.webp", // This would be replaced with the actual Ammonia sensor image
            alt: t("youMayAlsoLikeSection.products.ammonia.alt"),
            link: "/sensors/ammonia",
        },
        {
            id: 7,
            name: t("youMayAlsoLikeSection.products.h2s.name"),
            image: "/img/ethanol-sensor.webp", // This would be replaced with the actual H2S sensor image
            alt: t("youMayAlsoLikeSection.products.h2s.alt"),
            link: "/sensors/h2s",
        },
    ]
    return (
        <div className="air-drone-page">
            <main className="air-drone-page">
                {/* Hero Section */}
                <SensorNavBar />
                {/* Hero Section */}
                <section className="product-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-img">
                                    <div className="tab-content">
                                        <div
                                            className="tab-pane fade show active"
                                            id="MobileApp"
                                            role="tabpanel"
                                            aria-labelledby="MobileApp-tab"
                                        >
                                            <div className="sensor-img">
                                                <Image src="/img/so2-sensor.webp" alt={t("productSection.imageAlt")} width={100} height={100} />
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="TVApp" role="tabpanel" aria-labelledby="TVApp-tab">
                                            <div className="sensor-img">
                                                <Image src="/img/so2-sensor.webp" alt={t("productSection.imageAlt")} width={100} height={100} />
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="WebDashboard" role="tabpanel" aria-labelledby="WebDashboard-tab">
                                            <div className="sensor-img">
                                                <Image src="/img/so2-sensor.webp" alt={t("productSection.imageAlt")} width={100} height={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="nav nav-tabs sensor-product-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="MobileApp-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#MobileApp"
                                                type="button"
                                                role="tab"
                                                aria-controls="MobileApp"
                                                aria-selected="true"
                                            >
                                                <div className="sensor-img-thumb">
                                                    <Image src="/img/so2-sensor.webp" alt={t("productSection.imageAlt")} width={100} height={100} />
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="TVApp-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#TVApp"
                                                type="button"
                                                role="tab"
                                                aria-controls="TVApp"
                                                aria-selected="false"
                                            >
                                                <div className="sensor-img-thumb">
                                                    <Image src="/img/so2-sensor.webp" alt={t("productSection.imageAlt")} width={100} height={100} />
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="WebDashboard-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#WebDashboard"
                                                type="button"
                                                role="tab"
                                                aria-controls="WebDashboard"
                                                aria-selected="false"
                                            >
                                                <div className="sensor-img-thumb">
                                                    <Image src="/img/so2-sensor.webp" alt={t("productSection.imageAlt")} width={100} height={100} />
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="product-discription">
                                    <h1>{t("productSection.title")}</h1>
                                    <span>
                                        <Image
                                            src="/img/highly-precise.png"
                                            alt={t("productSection.precisionImageAlt")}
                                            width={50}
                                            height={50}
                                        />
                                    </span>
                                    <ul className="nav nav-tabs sensor-disc-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="SensorDisc-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#SensorDisc"
                                                type="button"
                                                role="tab"
                                                aria-controls="SensorDisc"
                                                aria-selected="true"
                                            >
                                                <div className="sensor-tab-btn">
                                                    <Image src="/img/so2-sensor.webp" alt={t("productSection.imageAlt")} width={50} height={50} />
                                                    <span>{t("productSection.variants.standard.ppm")}</span>
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="SensorDiscTVApp-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#SensorDiscTVApp"
                                                type="button"
                                                role="tab"
                                                aria-controls="SensorDiscTVApp"
                                                aria-selected="false"
                                            >
                                                <div className="sensor-tab-btn">
                                                    <Image src="/img/so2-sensor.webp" alt={t("productSection.imageAlt")} width={50} height={50} />
                                                    <span>{t("productSection.variants.premium.ppm")}</span>
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="product-disc">
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane fade show active"
                                                id="SensorDisc"
                                                role="tabpanel"
                                                aria-labelledby="SensorDisc-tab"
                                            >
                                                <div className="product-rate">
                                                    <span>{t("productSection.variants.standard.price")}</span>
                                                    <p>{t("productSection.description")}</p>
                                                    <QuantityCounter />
                                                    <ul className="buy-now-btn">
                                                        <li>
                                                            <button className="add-cart product-buy">
                                                                {t("productSection.buttons.addToCart")} <span className="fw-bold">+</span>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="buy-now product-buy">{t("productSection.buttons.buyNow")}</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="SensorDiscTVApp"
                                                role="tabpanel"
                                                aria-labelledby="SensorDiscTVApp-tab"
                                            >
                                                <div className="product-rate">
                                                    <span>{t("productSection.variants.premium.price")}</span>
                                                    <p>{t("productSection.description")}</p>
                                                    <QuantityCounter />
                                                    <ul className="buy-now-btn">
                                                        <li>
                                                            <button className="add-cart product-buy">
                                                                {t("productSection.buttons.addToCart")} <span className="fw-bold">+</span>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="buy-now product-buy">{t("productSection.buttons.buyNow")}</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* sensor introduction */}
                <section className="intro">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="intro-heading">
                                    <h2>
                                        <span>{t("introductionSection.titleHighlight")}</span> {t("introductionSection.title")}
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="variant-box">
                                    <ul className="nav nav-tabs variant-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="IntroSensor-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#IntroSensor"
                                                type="button"
                                                role="tab"
                                                aria-controls="IntroSensor"
                                                aria-selected="true"
                                            >
                                                <div className="variant-tab-btn">
                                                    <span>{t("introductionSection.variants.variantA")}</span>
                                                    <Image
                                                        src="/img/variant-icon.png"
                                                        alt={t("introductionSection.variantIconAlt")}
                                                        width={50}
                                                        height={50}
                                                    />
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="IntroTVApp-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#IntroTVApp"
                                                type="button"
                                                role="tab"
                                                aria-controls="IntroTVApp"
                                                aria-selected="false"
                                            >
                                                <div className="variant-tab-btn">
                                                    <span>{t("introductionSection.variants.variantB")}</span>
                                                    <Image
                                                        src="/img/variant-icon.png"
                                                        alt={t("introductionSection.variantIconAlt")}
                                                        width={50}
                                                        height={50}
                                                    />
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="IntroSensor"
                                        role="tabpanel"
                                        aria-labelledby="IntroSensor-tab"
                                    >
                                        <div className="sensor-txt">
                                            <div className="content">
                                                <p>{t("introductionSection.description")}</p>
                                                <ul>
                                                    <li>
                                                        <strong>{t("introductionSection.specs.resolution.value")}</strong>{" "}
                                                        {t("introductionSection.specs.resolution.label")}
                                                    </li>
                                                    <li>
                                                        <strong>{t("introductionSection.specs.range.value")}</strong>{" "}
                                                        {t("introductionSection.specs.range.label")}
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sensor-imgs">
                                                <h3>{t("introductionSection.sensorTitle")}</h3>
                                                <Image
                                                    src="/img/so2-sensor-inbuilt-pcb.webp"
                                                    alt={t("introductionSection.sensorPcbAlt")}
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="IntroTVApp" role="tabpanel" aria-labelledby="IntroTVApp-tab">
                                        <div className="sensor-txt">
                                            <div className="content">
                                                <p>{t("introductionSection.description")}</p>
                                                <ul>
                                                    <li>
                                                        <strong>{t("introductionSection.specs.resolution.value")}</strong>{" "}
                                                        {t("introductionSection.specs.resolution.label")}
                                                    </li>
                                                    <li>
                                                        <strong>{t("introductionSection.specs.range.value")}</strong>{" "}
                                                        {t("introductionSection.specs.range.label")}
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sensor-imgs">
                                                <h3>{t("introductionSection.variantBTitle")}</h3>
                                                <Image
                                                    src="/img/so2-sensor-inbuilt-pcb.webp"
                                                    alt={t("introductionSection.sensorPcbAlt")}
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="why-choose-heading">
                                    <h2>
                                        {t("introductionSection.whyChoose.titleStart")}{" "}
                                        <span>{t("introductionSection.whyChoose.titleHighlight")}</span>{" "}
                                    </h2>
                                </div>
                                <div className="why-choose-icon">
                                    <ul>
                                        {[1, 2, 3, 4, 5, 6].map((index) => (
                                            <li key={index}>
                                                <Image
                                                    src="/img/Compact.png"
                                                    alt={t(`introductionSection.whyChoose.features.feature${index}.iconAlt`)}
                                                    width={50}
                                                    height={50}
                                                />
                                                <h3>{t(`introductionSection.whyChoose.features.feature${index}.title`)}</h3>
                                                <p>{t(`introductionSection.whyChoose.features.feature${index}.description`)}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SO2 Sensor Calibration video */}
                <section className="calibration-video">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="video-box">
                                    <Image
                                        src="/img/so2-sensor-calibration.webp"
                                        alt={t("calibrationSection.videoAlt")}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <div className="video-txt">
                                    <h2>{t("calibrationSection.title")}</h2>
                                    <p>{t("calibrationSection.description")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* what technology used */}
                <section className="what-tech">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="what-tech-heading">
                                    <h2>{t("technologySection.title")}</h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bg">
                                    <Image src="/img/tech-bg.jpg" alt={t("technologySection.backgroundAlt")} width={50} height={50} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tech-txt">
                                    <h3>{t("technologySection.subtitle")}</h3>
                                    <Link href="#">{t("technologySection.learnMore")}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* what is sulfur */}
                <section className="what-is-sulfur">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="sulfur-heading">
                                    <h2>{t("sulfurDioxideSection.title")}</h2>
                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                            <div className="col-lg-12">
                                <div className="sulfur-img">
                                    <Image
                                        src="/img/what-is-sulfur-di-oxide.webp"
                                        alt={t("sulfurDioxideSection.imageAlt")}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sulfur-txt">
                                    <p>{t("sulfurDioxideSection.description")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* light mode */}
                <section className="light-mode">
                    <div className="container">
                        <div className="col-lg-6">
                            <div className="light-mode-txt">
                                <h2>{t("lightModeSection.title")}</h2>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                        <div className="col-lg-12">
                            <div className="light-mode-img">
                                <Image src="/img/SO2-light-mode.webp" alt={t("lightModeSection.imageAlt")} width={50} height={50} />
                                <p>{t("lightModeSection.description")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* sensor chip */}
                <section className="sensor-chip">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="sensor-chip-img">
                                    <Image src="/img/sensor-chip.webp" alt={t("sensorChipSection.imageAlt")} width={50} height={50} />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="sensor-chip-txt">
                                    <ul>
                                        <li>
                                            <h2>{t("sensorChipSection.title")}</h2>
                                            <Link href="#">{t("sensorChipSection.buyNowLink")}</Link>
                                        </li>
                                        <li>
                                            <p>{t("sensorChipSection.description")}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* app slider */}
                <section className="app-slider-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slider-title">
                                    <h2>{t("applicationsSO2Section.title")}</h2>
                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <ProductCarousel responsive={responsive} className="app-slider">
                                    <div className="applications-slider">
                                        {applications.map((app) => (
                                            <div key={app.id}>
                                                <div className="app-slide-img-box">
                                                    <Image src={app.image || "/placeholder.svg"} alt={app.alt} width={200} height={100} />
                                                    <h3>{app.title}</h3>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </ProductCarousel>
                            </div>
                        </div>
                    </div>
                </section>

                {/* technical Specifications */}
                <section className="tech-spec-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tech-heading">
                                    <h2>{t("technicalSpecsSO2Section.title")}</h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="variant-box">
                                    <ul className="nav nav-tabs variant-tab tech-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="TechSpec-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#TechSpec"
                                                type="button"
                                                role="tab"
                                                aria-controls="TechSpec"
                                                aria-selected="true"
                                            >
                                                <div className="variant-tab-btn">
                                                    <span>{t("technicalSpecsSO2Section.variants.variantA")}</span>
                                                    <Image
                                                        src="/img/variant-icon.png"
                                                        alt={t("technicalSpecsSO2Section.variantIconAlt")}
                                                        width={50}
                                                        height={50}
                                                    />
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="TechTVApp-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#TechTVApp"
                                                type="button"
                                                role="tab"
                                                aria-controls="TechTVApp"
                                                aria-selected="false"
                                            >
                                                <div className="variant-tab-btn">
                                                    <span>{t("technicalSpecsSO2Section.variants.variantB")}</span>
                                                    <Image
                                                        src="/img/variant-icon.png"
                                                        alt={t("technicalSpecsSO2Section.variantIconAlt")}
                                                        width={50}
                                                        height={50}
                                                    />
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="TechSpec" role="tabpanel" aria-labelledby="TechSpec-tab">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="tech-spec-txt">
                                            <ul>
                                                <li>
                                                    <h4>{t("technicalSpecsSO2Section.specs.productName.label")}</h4>
                                                </li>
                                                <li>
                                                    <h5>{t("technicalSpecsSO2Section.specs.productName.value")}</h5>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <h4>{t("technicalSpecsSO2Section.specs.resolution.label")}</h4>
                                                </li>
                                                <li>
                                                    <h5>{t("technicalSpecsSO2Section.specs.resolution.value")}</h5>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <h4>{t("technicalSpecsSO2Section.specs.responseTime.label")}</h4>
                                                </li>
                                                <li>
                                                    <h5>{t("technicalSpecsSO2Section.specs.responseTime.value")}</h5>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <h4>{t("technicalSpecsSO2Section.specs.operatingTemperature.label")}</h4>
                                                </li>
                                                <li>
                                                    <h5>{t("technicalSpecsSO2Section.specs.operatingTemperature.value")}</h5>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <h4>{t("technicalSpecsSO2Section.specs.operatingHumidity.label")}</h4>
                                                </li>
                                                <li>
                                                    <h5>{t("technicalSpecsSO2Section.specs.operatingHumidity.value")}</h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="tech-spec-txt">
                                            <ul>
                                                <li>
                                                    <h4>{t("technicalSpecsSO2Section.specs.measurementRange.label")}</h4>
                                                </li>
                                                <li>
                                                    <h5>{t("technicalSpecsSO2Section.specs.measurementRange.value")}</h5>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <h4>{t("technicalSpecsSO2Section.specs.repeatability.label")}</h4>
                                                </li>
                                                <li>
                                                    <h5>{t("technicalSpecsSO2Section.specs.repeatability.value")}</h5>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <h4>{t("technicalSpecsSO2Section.specs.sensitivity.label")}</h4>
                                                </li>
                                                <li>
                                                    <h5>{t("technicalSpecsSO2Section.specs.sensitivity.value")}</h5>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <h4>{t("technicalSpecsSO2Section.specs.operatingVoltage.label")}</h4>
                                                </li>
                                                <li>
                                                    <h5>{t("technicalSpecsSO2Section.specs.operatingVoltage.value")}</h5>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <h4>{t("technicalSpecsSO2Section.specs.operatingHumidity.label")}</h4>
                                                </li>
                                                <li>
                                                    <h5>{t("technicalSpecsSO2Section.specs.operatingHumidity.value")}</h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="tech-spec-img">
                                            <Image
                                                src="/img/prana-air-sulfur-ioxide-so2-sensor-with-board.webp"
                                                alt={t("technicalSpecsSO2Section.sensorImageAlt")}
                                                width={50}
                                                height={50}
                                            />
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        {t("technicalSpecsSO2Section.buttons.buyNow")}{" "}
                                                        <Image
                                                            src="/img/tech-btn-icon.png"
                                                            alt={t("technicalSpecsSO2Section.buttons.buyNowIconAlt")}
                                                            width={50}
                                                            height={50}
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <Image
                                                            src="/img/data-document-sheet-icon.png"
                                                            alt={t("technicalSpecsSO2Section.buttons.dataSheetIconAlt")}
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        {t("technicalSpecsSO2Section.buttons.dataSheet")}{" "}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="TechTVApp" role="tabpanel" aria-labelledby="TechTVApp-tab">
                                <div className="sensor-txt">
                                    <h1>{t("technicalSpecsSO2Section.variantBTitle")}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* sensor gallery */}
                <section className="sensor-gallery-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sensor-gallery-heading">
                                    <h2>
                                        {t("sensorGallerySection.titleStart")} <span>{t("sensorGallerySection.titleHighlight")}</span>
                                    </h2>
                                    <p>{t("sensorGallerySection.description")}</p>
                                </div>
                                <div className="sensor-gallery-img">
                                    <ProductCarousel responsive={gallery} className="sensor-slider">
                                        <div>
                                            <div className="sensor-img-box">
                                                <Image src="/img/sensors-gallery-img.webp" alt="so2-sensor" width={50} height={50} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="sensor-img-box">
                                                <Image src="/img/sensors-gallery-img.webp" alt="so2-sensor" width={50} height={50} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="sensor-img-box">
                                                <Image src="/img/sensors-gallery-img.webp" alt="so2-sensor" width={50} height={50} />
                                            </div>
                                        </div>
                                    </ProductCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* airqulality contact Section */}
                <section className="airqulality_contact_section inner_container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="contact-heading">
                                    <h2>{t("contactHeadingSection.title")}</h2>
                                    <p>{t("contactHeadingSection.description")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContactForm pageName="SulFur Dioxide So2 Page" />
                </section>
                {/* You may also like */}
                <section className="you-may-also">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="you-may-also-heading">
                                    <h2>{t("youMayAlsoLikeSection.title")}</h2>
                                    <ul>
                                        {relatedProducts.map((product) => (
                                            <li key={product.id}>
                                                <Link href={product.link}>
                                                    <Image src={product.image || "/placeholder.svg"} alt={product.alt} width={50} height={50} />
                                                    <span>
                                                        {product.name}{" "}
                                                        <Image src="/img/tech-btn-icon.png" alt={t("youMayAlsoLikeSection.iconAlt")} width={50} height={50} />
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
