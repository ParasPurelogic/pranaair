import "./style.css"
import Image from "next/image";
import ContactForm from "@/Components/Contacform/ContactForm"
import VideoPopup from "@/Components/Pages/AirQualityCommonMonitor/video-popup"
import ApplicationsSlider from "@/Components/Pages/AirQualityCommonMonitor/applications-slider"
import TestimonialsSlider from "@/Components/Pages/AirQualityCommonMonitor/testimonials-slider"
import { getServerTranslation } from "@/i18n/server"
import AirQualitySensorSlider from "@/Components/Pages/AirQualityCommonMonitor/air-quality-monitor-sensor";
import Link from "@/Components/TranslateLink"
import { domain } from "@/config"

// ✅ SEO Metadata
export async function generateMetadata() {
    const { t } = await getServerTranslation("common-monitor");
    const title = t("meta.title");
    const description = t("meta.description");
    const image = t("meta.image") || "https://www.pranaair.com/images/air-drone.jpg";
    const url = `https://www.pranaair.com/air-drone`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
            languages: {
                en: "https://www.pranaair.com/air-drone",
                hi: "https://www.pranaair.com/hi/air-drone",
            }
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "Prana Air",
            type: "website",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: "Air Drone - Prana Air"
                }
            ]
        }
    };
}
export default async function CommonMonitorPage() {
    const { t } = await getServerTranslation("common-monitor")
    const testimonials = [
        {
            id: 1,
            name: t("testimonials.sameer.name"),
            rating: 5,
            review: t("testimonials.sameer.review"),
        },
        {
            id: 2,
            name: t("testimonials.priya.name"),
            rating: 5,
            review: t("testimonials.priya.review"),
        },
        {
            id: 3,
            name: t("testimonials.rajesh.name"),
            rating: 4,
            review: t("testimonials.rajesh.review"),
        },
        {
            id: 4,
            name: t("testimonials.anita.name"),
            rating: 5,
            review: t("testimonials.anita.review"),
        },
        {
            id: 5,
            name: t("testimonials.michael.name"),
            rating: 5,
            review: t("testimonials.michael.review"),
        },
    ]
    const airQualitySensors = [
        {
            id: 1,
            imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/09/Particulate-Matter.webp",
            imageAlt: t("sensors.particulateMatter.imageAlt"),
            sensorName: t("sensors.particulateMatter.name"),
            sensorLink: "https://www.pranaair.com/air-quality-sensor/outdoor-pm-sensor/",
            operatingPrinciple: t("sensors.particulateMatter.principle"),
            description: t("sensors.particulateMatter.description"),
        },
        {
            id: 2,
            imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/09/Total-volatile-organic-compounds-tvoc.webp",
            imageAlt: t("sensors.tvoc.imageAlt"),
            sensorName: t("sensors.tvoc.name"),
            sensorLink: "https://www.pranaair.com/air-quality-monitor/?y#",
            operatingPrinciple: t("sensors.tvoc.principle"),
            description: t("sensors.tvoc.description"),
        },
        {
            id: 3,
            imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/09/toxic-gases.webp",
            imageAlt: t("sensors.toxicGasesH2S.imageAlt"),
            sensorName: t("sensors.toxicGasesH2S.name"),
            sensorLink: "https://www.pranaair.com/air-quality-sensor/outdoor-pm-sensor/",
            operatingPrinciple: t("sensors.toxicGasesH2S.principle"),
            description: t("sensors.toxicGasesH2S.description"),
        },
        {
            id: 4,
            imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/09/Carbon-Dioxide-co2.webp",
            imageAlt: t("sensors.carbonDioxide.imageAlt"),
            sensorName: t("sensors.carbonDioxide.name"),
            sensorLink: "https://www.pranaair.com/air-quality-sensor/outdoor-pm-sensor/",
            operatingPrinciple: t("sensors.carbonDioxide.principle"),
            description: t("sensors.carbonDioxide.description"),
        },
        {
            id: 5,
            imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/09/co-o3-toxic-gases.webp",
            imageAlt: t("sensors.toxicGasesCO.imageAlt"),
            sensorName: t("sensors.toxicGasesCO.name"),
            sensorLink: "https://www.pranaair.com/air-quality-sensor/outdoor-pm-sensor/",
            operatingPrinciple: t("sensors.toxicGasesCO.principle"),
            description: t("sensors.toxicGasesCO.description"),
        }

    ]
    return (
        <main>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ambient-banner">
                                <p className="heading-para">{t("ambientBanner.headingPara")}</p>
                                <h1>
                                    <span className="prana-txt">{t("ambientBanner.pranaText")}</span> {t("ambientBanner.title")}
                                </h1>
                                <p>{t("ambientBanner.description")}</p>
                                <Link href="#contact" aria-label={t("ambientBanner.ariaLabel")}>
                                    {t("ambientBanner.contactUs")}{" "}
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/09/banner-icon.png" alt={t("ambientBanner.iconAlt")} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <VideoPopup videoUrl="https://www.youtube.com/embed/vKTDgUu1K_E?autoplay=1&mute=1" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Tabs Section */}
            <section className="explore-monitor">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="all-monitore-tite">
                                <span className="explore">{t("productTabs.explore")}</span>
                                <h2>{t("productTabs.title")}</h2>
                                <p>{t("productTabs.subtitle")}</p>
                            </div>
                        </div>
                    </div>

                    <div className="product-tabs">
                        <ul className="nav nav-tabs" id="product-tabs-nav" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="handheld-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#handheld"
                                    type="button"
                                    role="tab"
                                    aria-controls="handheld"
                                    aria-selected="true"
                                >
                                    {t("productTabs.categories.handheld")}
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="indoor-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#indoor"
                                    type="button"
                                    role="tab"
                                    aria-controls="indoor"
                                    aria-selected="false"
                                >
                                    {t("productTabs.categories.indoor")}
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="outdoor-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#outdoor"
                                    type="button"
                                    role="tab"
                                    aria-controls="outdoor"
                                    aria-selected="false"
                                >
                                    {t("productTabs.categories.outdoor")}
                                </button>
                            </li>
                        </ul>

                        <div className="tab-content">
                            {/* Handheld Tab */}
                            <div className="tab-pane fade show active" id="handheld" role="tabpanel" aria-labelledby="handheld-tab">
                                <div className="row tab-card">
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png"
                                                    alt={t("productTabs.altTexts.arrowIcon")}
                                                />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">{t("productTabs.categories.handheld")}</span>
                                                <Link href={`${domain}/air-quality-monitor/pocket-co2-monitor`}>
                                                    <img
                                                        src={t("productTabs.products.pocketCO2.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.pocketCO2.imageAlt")}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-text">
                                                <Link href={`${domain}/air-quality-monitor/pocket-co2-monitor`}>{t("productTabs.products.pocketCO2.name")}</Link>
                                                <ul>
                                                    <li>
                                                        <span className="coast">{t("productTabs.products.pocketCO2.price")}</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt={t("productTabs.altTexts.rating")}
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>{t("productTabs.specs.connectivity")} :</h5>
                                                        <h4>{t("productTabs.products.pocketCO2.connectivity")}</h4>
                                                    </li>
                                                    <li>
                                                        <h5>{t("productTabs.specs.battery")} :</h5>
                                                        <h4>{t("productTabs.products.pocketCO2.battery")}</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <form
                                                    className="cart"
                                                    action={t("productTabs.products.pocketCO2.formAction")}
                                                    encType="multipart/form-data"
                                                    method="post"
                                                >
                                                    <button
                                                        className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                                        name="add-to-cart"
                                                        type="submit"
                                                        value="52265"
                                                    >
                                                        {t("productTabs.buttons.buyNow")}{" "}
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt={t("productTabs.altTexts.buttonIcon")} />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png"
                                                    alt={t("productTabs.altTexts.arrowIcon")}
                                                />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">{t("productTabs.categories.handheld")}</span>
                                                <Link href={`${domain}/air-quality-monitor/handheld/pocket-monitor`}>
                                                    <img
                                                        src={t("productTabs.products.pocketPM.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.pocketPM.imageAlt")}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-text">
                                                <Link href={`${domain}/air-quality-monitor/handheld/pocket-monitor`}>{t("productTabs.products.pocketPM.name")}</Link>
                                                <ul>
                                                    <li>
                                                        <span className="coast">{t("productTabs.products.pocketPM.price")}</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt={t("productTabs.altTexts.rating")}
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>{t("productTabs.specs.connectivity")} :</h5>
                                                        <h4>{t("productTabs.products.pocketPM.connectivity")}</h4>
                                                    </li>
                                                    <li>
                                                        <h5>{t("productTabs.specs.battery")} :</h5>
                                                        <h4>{t("productTabs.products.pocketPM.battery")}</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <form
                                                    className="cart"
                                                    action={t("productTabs.products.pocketPM.formAction")}
                                                    encType="multipart/form-data"
                                                    method="post"
                                                >
                                                    <button
                                                        className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                                        name="add-to-cart"
                                                        type="submit"
                                                        value="7312"
                                                    >
                                                        {t("productTabs.buttons.buyNow")}{" "}
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt={t("productTabs.altTexts.buttonIcon")} />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png"
                                                    alt={t("productTabs.altTexts.arrowIcon")}
                                                />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">{t("productTabs.categories.handheld")}</span>
                                                <Link href={`${domain}/air-quality-monitor/oxyco-monitor`}>
                                                    <img
                                                        src={t("productTabs.products.oxyCO.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.oxyCO.imageAlt")}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-text">
                                                <Link href={`${domain}/air-quality-monitor/oxyco-monitor`}>{t("productTabs.products.oxyCO.name")}</Link>
                                                <ul>
                                                    <li>
                                                        <span className="coast">{t("productTabs.products.oxyCO.price")}</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt={t("productTabs.altTexts.rating")}
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>{t("productTabs.specs.connectivity")} :</h5>
                                                        <h4>{t("productTabs.products.oxyCO.connectivity")}</h4>
                                                    </li>
                                                    <li>
                                                        <h5>{t("productTabs.specs.battery")} :</h5>
                                                        <h4>{t("productTabs.products.oxyCO.battery")}</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <form
                                                    className="cart"
                                                    action={t("productTabs.products.oxyCO.formAction")}
                                                    encType="multipart/form-data"
                                                    method="post"
                                                >
                                                    <button
                                                        className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                                        name="add-to-cart"
                                                        type="submit"
                                                        value="7312"
                                                    >
                                                        {t("productTabs.buttons.buyNow")}{" "}
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt={t("productTabs.altTexts.buttonIcon")} />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png"
                                                    alt={t("productTabs.altTexts.arrowIcon")}
                                                />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">{t("productTabs.categories.handheld")}</span>
                                                <Link href={`${domain}/air-quality-monitor/nano-co-monitor`}>
                                                    <img
                                                        src={t("productTabs.products.nanoCO.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.nanoCO.imageAlt")}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-text">
                                                <Link href={`${domain}/air-quality-monitor/nano-co-monitor`}>{t("productTabs.products.nanoCO.name")}</Link>
                                                <ul>
                                                    <li>
                                                        <span className="coast">{t("productTabs.products.nanoCO.price")}</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt={t("productTabs.altTexts.rating")}
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>{t("productTabs.specs.connectivity")} :</h5>
                                                        <h4>{t("productTabs.products.nanoCO.connectivity")}</h4>
                                                    </li>
                                                    <li>
                                                        <h5>{t("productTabs.specs.battery")} :</h5>
                                                        <h4>{t("productTabs.products.nanoCO.battery")}</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <form
                                                    className="cart"
                                                    action={t("productTabs.products.nanoCO.formAction")}
                                                    encType="multipart/form-data"
                                                    method="post"
                                                >
                                                    <button
                                                        className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                                        name="add-to-cart"
                                                        type="submit"
                                                        value="7312"
                                                    >
                                                        {t("productTabs.buttons.buyNow")}{" "}
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt={t("productTabs.altTexts.buttonIcon")} />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png"
                                                    alt={t("productTabs.altTexts.arrowIcon")}
                                                />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">{t("productTabs.categories.handheld")}</span>
                                                <Link href={`${domain}/air-quality-monitor/nano-co2-monitor`}>
                                                    <img
                                                        src={t("productTabs.products.nanoCO2.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.nanoCO2.imageAlt")}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-text">
                                                <Link href={`${domain}/air-quality-monitor/nano-co2-monitor`}>{t("productTabs.products.nanoCO2.name")}</Link>
                                                <ul>
                                                    <li>
                                                        <span className="coast">{t("productTabs.products.nanoCO2.price")}</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt={t("productTabs.altTexts.rating")}
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>{t("productTabs.specs.connectivity")} :</h5>
                                                        <h4>{t("productTabs.products.nanoCO2.connectivity")}</h4>
                                                    </li>
                                                    <li>
                                                        <h5>{t("productTabs.specs.battery")} :</h5>
                                                        <h4>{t("productTabs.products.nanoCO2.battery")}</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <form
                                                    className="cart"
                                                    action={t("productTabs.products.nanoCO2.formAction")}
                                                    encType="multipart/form-data"
                                                    method="post"
                                                >
                                                    <button
                                                        className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                                        name="add-to-cart"
                                                        type="submit"
                                                        value="7312"
                                                    >
                                                        {t("productTabs.buttons.buyNow")}{" "}
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt={t("productTabs.altTexts.buttonIcon")} />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png"
                                                    alt={t("productTabs.altTexts.arrowIcon")}
                                                />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">{t("productTabs.categories.handheld")}</span>
                                                <Link href={`${domain}/air-quality-monitor/nano-tvoc-monitor`}>
                                                    <img
                                                        src={t("productTabs.products.nanoTVOC.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.nanoTVOC.imageAlt")}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-text">
                                                <Link href={`${domain}/air-quality-monitor/nano-tvoc-monitor`}>{t("productTabs.products.nanoTVOC.name")}</Link>
                                                <ul>
                                                    <li>
                                                        <span className="coast">{t("productTabs.products.nanoTVOC.price")}</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt={t("productTabs.altTexts.rating")}
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>{t("productTabs.specs.connectivity")} :</h5>
                                                        <h4>{t("productTabs.products.nanoTVOC.connectivity")}</h4>
                                                    </li>
                                                    <li>
                                                        <h5>{t("productTabs.specs.battery")} :</h5>
                                                        <h4>{t("productTabs.products.nanoTVOC.battery")}</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <form
                                                    className="cart"
                                                    action={t("productTabs.products.nanoTVOC.formAction")}
                                                    encType="multipart/form-data"
                                                    method="post"
                                                >
                                                    <button
                                                        className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                                        name="add-to-cart"
                                                        type="submit"
                                                        value="7312"
                                                    >
                                                        {t("productTabs.buttons.buyNow")}{" "}
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt={t("productTabs.altTexts.buttonIcon")} />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Indoor Tab */}
                            <div className="tab-pane fade" id="indoor" role="tabpanel" aria-labelledby="indoor-tab">
                                <div className="row tab-card">
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png"
                                                    alt={t("productTabs.altTexts.arrowIcon")}
                                                />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">{t("productTabs.categories.indoor")}</span>
                                                <Link href={`${domain}/air-quality-monitor/sensible-air-monitor`}>
                                                    <img
                                                        src={t("productTabs.products.sensible.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.sensible.imageAlt")}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-text">
                                                <Link href={`${domain}/air-quality-monitor/sensible-air-monitor`}>{t("productTabs.products.sensible.name")}</Link>
                                                <ul>
                                                    <li>
                                                        <span className="coast">{t("productTabs.products.sensible.price")}</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt={t("productTabs.altTexts.rating")}
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>{t("productTabs.specs.connectivity")} :</h5>
                                                        <h4>{t("productTabs.products.sensible.connectivity")}</h4>
                                                    </li>
                                                    <li>
                                                        <h5>{t("productTabs.specs.battery")} :</h5>
                                                        <h4>{t("productTabs.products.sensible.battery")}</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <form
                                                    className="cart"
                                                    action={t("productTabs.products.sensible.formAction")}
                                                    encType="multipart/form-data"
                                                    method="post"
                                                >
                                                    <button
                                                        className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                                        name="add-to-cart"
                                                        type="submit"
                                                        value="12151"
                                                    >
                                                        {t("productTabs.buttons.buyNow")}{" "}
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt={t("productTabs.altTexts.buttonIcon")} />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png"
                                                    alt={t("productTabs.altTexts.arrowIcon")}
                                                />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">{t("productTabs.categories.indoor")}</span>
                                                <Link href={`${domain}/air-quality-monitor/sensible-plus-monitor`}>
                                                    <img
                                                        src={t("productTabs.products.sensiblePlus.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.sensiblePlus.imageAlt")}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-text">
                                                <Link href={`${domain}/air-quality-monitor/sensible-plus-monitor`}>{t("productTabs.products.sensiblePlus.name")}</Link>
                                                <ul>
                                                    <li>
                                                        <span className="coast">{t("productTabs.products.sensiblePlus.price")}</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt={t("productTabs.altTexts.rating")}
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>{t("productTabs.specs.connectivity")} :</h5>
                                                        <h4>{t("productTabs.products.sensiblePlus.connectivity")}</h4>
                                                    </li>
                                                    <li>
                                                        <h5>{t("productTabs.specs.battery")} :</h5>
                                                        <h4>{t("productTabs.products.sensiblePlus.battery")}</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <form
                                                    className="cart"
                                                    action={t("productTabs.products.sensiblePlus.formAction")}
                                                    encType="multipart/form-data"
                                                    method="post"
                                                >
                                                    <button
                                                        className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                                        name="add-to-cart"
                                                        type="submit"
                                                        value="7312"
                                                    >
                                                        {t("productTabs.buttons.buyNow")}{" "}
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt={t("productTabs.altTexts.buttonIcon")} />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png"
                                                    alt={t("productTabs.altTexts.arrowIcon")}
                                                />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">{t("productTabs.categories.indoor")}</span>
                                                <Link href={`${domain}/air-quality-monitor/cair-plus`}>
                                                    <img
                                                        src={t("productTabs.products.cairPlus.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.cairPlus.imageAlt")}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-text">
                                                <Link href={`${domain}/air-quality-monitor/cair-plus`}>{t("productTabs.products.cairPlus.name")}</Link>
                                                <ul>
                                                    <li>
                                                        <span className="coast">{t("productTabs.products.cairPlus.price")}</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt={t("productTabs.altTexts.rating")}
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>{t("productTabs.specs.connectivity")} :</h5>
                                                        <h4>{t("productTabs.products.cairPlus.connectivity")}</h4>
                                                    </li>
                                                    <li>
                                                        <h5>{t("productTabs.specs.battery")} :</h5>
                                                        <h4>{t("productTabs.products.cairPlus.battery")}</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <form
                                                    className="cart"
                                                    action={t("productTabs.products.cairPlus.formAction")}
                                                    encType="multipart/form-data"
                                                    method="post"
                                                >
                                                    <button
                                                        className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                                        name="add-to-cart"
                                                        type="submit"
                                                        value="7312"
                                                    >
                                                        {t("productTabs.buttons.buyNow")}{" "}
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt={t("productTabs.altTexts.buttonIcon")} />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png"
                                                    alt={t("productTabs.altTexts.arrowIcon")}
                                                />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">{t("productTabs.categories.indoor")}</span>
                                                <Link href={`${domain}/air-quality-monitor/squair`}>
                                                    <img
                                                        src={t("productTabs.products.squair.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.squair.imageAlt")}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-text">
                                                <Link href={`${domain}/air-quality-monitor/squair`}>{t("productTabs.products.squair.name")}</Link>
                                                <ul>
                                                    <li>
                                                        <span className="coast">{t("productTabs.products.squair.price")}</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt={t("productTabs.altTexts.rating")}
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>{t("productTabs.specs.connectivity")} :</h5>
                                                        <h4>{t("productTabs.products.squair.connectivity")}</h4>
                                                    </li>
                                                    <li>
                                                        <h5>{t("productTabs.specs.battery")} :</h5>
                                                        <h4>{t("productTabs.products.squair.battery")}</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <form
                                                    className="cart"
                                                    action={t("productTabs.products.squair.formAction")}
                                                    encType="multipart/form-data"
                                                    method="post"
                                                >
                                                    <button
                                                        className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                                        name="add-to-cart"
                                                        type="submit"
                                                        value="7312"
                                                    >
                                                        {t("productTabs.buttons.buyNow")}{" "}
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt={t("productTabs.altTexts.buttonIcon")} />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Outdoor Tab */}
                            <div className="tab-pane fade" id="outdoor" role="tabpanel" aria-labelledby="outdoor-tab">
                                <div className="row tab-card">
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png"
                                                    alt={t("productTabs.altTexts.arrowIcon")}
                                                />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">{t("productTabs.categories.outdoor")}</span>
                                                <Link href={`${domain}/air-quality-monitor/squair`}>
                                                    <img
                                                        src={t("productTabs.products.ambientPM.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.ambientPM.imageAlt")}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-text">
                                                <Link href={`${domain}/air-quality-monitor/squair`}>{t("productTabs.products.ambientPM.name")}</Link>
                                                <ul>
                                                    <li>
                                                        <span className="coast">{t("productTabs.products.ambientPM.price")}</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt={t("productTabs.altTexts.rating")}
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>{t("productTabs.specs.connectivity")} :</h5>
                                                        <h4>{t("productTabs.products.ambientPM.connectivity")}</h4>
                                                    </li>
                                                    <li>
                                                        <h5>{t("productTabs.specs.battery")} :</h5>
                                                        <h4>{t("productTabs.products.ambientPM.battery")}</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <form
                                                    className="cart"
                                                    action={t("productTabs.products.ambientPM.formAction")}
                                                    encType="multipart/form-data"
                                                    method="post"
                                                >
                                                    <button
                                                        className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                                        name="add-to-cart"
                                                        type="submit"
                                                    >
                                                        {t("productTabs.buttons.knowMore")}{" "}
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt={t("productTabs.altTexts.buttonIcon")} />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png"
                                                    alt={t("productTabs.altTexts.arrowIcon")}
                                                />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">{t("productTabs.categories.outdoor")}</span>
                                                <Link href={`${domain}/air-quality-monitor/prana-sense`}>
                                                    <img
                                                        src={t("productTabs.products.pranaSense.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.pranaSense.imageAlt")}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-text">
                                                <Link href={`${domain}/air-quality-monitor/prana-sense`}>{t("productTabs.products.pranaSense.name")}</Link>
                                                <ul>
                                                    <li>
                                                        <span className="coast">{t("productTabs.products.pranaSense.price")}</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt={t("productTabs.altTexts.rating")}
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>{t("productTabs.specs.connectivity")} :</h5>
                                                        <h4>{t("productTabs.products.pranaSense.connectivity")}</h4>
                                                    </li>
                                                    <li>
                                                        <h5>{t("productTabs.specs.battery")} :</h5>
                                                        <h4>{t("productTabs.products.pranaSense.battery")}</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <form
                                                    className="cart"
                                                    action={t("productTabs.products.pranaSense.formAction")}
                                                    encType="multipart/form-data"
                                                    method="post"
                                                >
                                                    <button
                                                        className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                                        name="add-to-cart"
                                                        type="submit"
                                                        value="7312"
                                                    >
                                                        {t("productTabs.buttons.buyNow")}{" "}
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt={t("productTabs.altTexts.buttonIcon")} />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png"
                                                    alt={t("productTabs.altTexts.arrowIcon")}
                                                />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">{t("productTabs.categories.outdoor")}</span>
                                                <Link href={`${domain}/air-quality-monitor/ambient-pro`}>
                                                    <img
                                                        src={t("productTabs.products.ambientPro.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.ambientPro.imageAlt")}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-text">
                                                <Link href={`${domain}/air-quality-monitor/ambient-pro`}>{t("productTabs.products.ambientPro.name")}</Link>
                                                <ul>
                                                    <li>
                                                        <span className="coast">{t("productTabs.products.ambientPro.price")}</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt={t("productTabs.altTexts.rating")}
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>{t("productTabs.specs.connectivity")} :</h5>
                                                        <h4>{t("productTabs.products.ambientPro.connectivity")}</h4>
                                                    </li>
                                                    <li>
                                                        <h5>{t("productTabs.specs.battery")} :</h5>
                                                        <h4>{t("productTabs.products.ambientPro.battery")}</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <form
                                                    className="cart"
                                                    action={t("productTabs.products.ambientPro.formAction")}
                                                    encType="multipart/form-data"
                                                    method="post"
                                                >
                                                    <button
                                                        className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                                        name="add-to-cart"
                                                        type="submit"
                                                        value="7312"
                                                    >
                                                        {t("productTabs.buttons.buyNow")}{" "}
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt={t("productTabs.altTexts.buttonIcon")} />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="prdocut-card">
                                            <div className="arrow-link">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png"
                                                    alt={t("productTabs.altTexts.arrowIcon")}
                                                />
                                            </div>
                                            <div className="card-img">
                                                <span className="in-outdoor">{t("productTabs.categories.outdoor")}</span>
                                                <Link href={`${domain}/air-quality-monitor/air-quality-drone`}>
                                                    <img
                                                        src={t("productTabs.products.airQualityDrone.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.airQualityDrone.imageAlt")}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-text">
                                                <Link href={`${domain}/air-quality-monitor/air-quality-drone`}>{t("productTabs.products.airQualityDrone.name")}</Link>
                                                <ul>
                                                    <li>
                                                        <span className="coast">{t("productTabs.products.airQualityDrone.price")}</span>
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                            alt={t("productTabs.altTexts.rating")}
                                                        />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h5>{t("productTabs.specs.connectivity")} :</h5>
                                                        <h4>{t("productTabs.products.airQualityDrone.connectivity")}</h4>
                                                    </li>
                                                    <li>
                                                        <h5>{t("productTabs.specs.battery")} :</h5>
                                                        <h4>{t("productTabs.products.airQualityDrone.battery")}</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-btn">
                                                <form
                                                    className="cart"
                                                    action={t("productTabs.products.airQualityDrone.formAction")}
                                                    encType="multipart/form-data"
                                                    method="post"
                                                >
                                                    <button
                                                        className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                                        name="add-to-cart"
                                                        type="submit"
                                                        value="7312"
                                                    >
                                                        {t("productTabs.buttons.buyNow")}{" "}
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt={t("productTabs.altTexts.buttonIcon")} />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="air-pollution-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pranaasir-slider-title">
                                <h2>
                                    {t("features.title.part1")} <strong>{t("features.title.part2")}</strong>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="comp">
                                {t("features.compliance.part1")}
                                <span className="leed">
                                    {t("features.compliance.leedWell")} <span className="clr">&</span> {t(
                                        "features.compliance.ashrae",
                                    )}{" "}
                                </span>
                                {t("features.compliance.standards")}
                            </div>
                        </div>
                    </div>

                    <div className="row mob-flex">
                        <div className="col-md-6">
                            <div className="air-pollution-box">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/Low-cost-and-Highly-Reliable-Datas.png"
                                            alt={t("features.lowCost.alt")}
                                        />
                                    </li>
                                    <li>
                                        <h3>{t("features.lowCost.title")}</h3>
                                        {t("features.lowCost.description")}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="air-pollution-box">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/Remote-Data-at-Your-Fingertip.png"
                                            alt={t("features.remoteData.alt")}
                                        />
                                    </li>
                                    <li>
                                        <h3>{t("features.remoteData.title")}</h3>
                                        {t("features.remoteData.description")}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <ul className="air-poll-box-last-row">
                                <li>
                                    <div className="tailored">
                                        <ul>
                                            <li>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/Tailored-Air-Quality-Monitorings.png"
                                                    alt={t("features.personalized.alt")}
                                                />
                                            </li>
                                            <li>
                                                <h3>{t("features.personalized.title")}</h3>
                                                {t("features.personalized.description")}
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="hassle">
                                        <ul>
                                            <li>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/Hassle-Free-Precisions.png"
                                                    alt={t("features.perfect.alt")}
                                                />
                                            </li>
                                            <li>
                                                <h3>{t("features.perfect.title")}</h3>
                                                {t("features.perfect.description")}
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="last-box versatile">
                                        <ul>
                                            <li>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/Versatile-Connect.png"
                                                    alt={t("features.versatile.alt")}
                                                />
                                            </li>
                                            <li>
                                                <h3>{t("features.versatile.title")}</h3>
                                                {t("features.versatile.description")}
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-to-work-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="sensor-heading-box">
                                <h2>{t("howItWorks.title")}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="work-box">
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2025/01/pcb-monitor-function.webp"
                                            alt={t("howItWorks.pcb.alt")}
                                            width={500}
                                            height={300}
                                        />
                                    </li>
                                    <li>
                                        <h3>{t("howItWorks.pcb.number")}</h3>
                                        <h4>{t("howItWorks.pcb.title")}</h4>
                                        <p>{t("howItWorks.pcb.description")}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="work-box">
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2025/03/pcb-embedded-or-platform.webp"
                                            alt={t("howItWorks.sensors.alt")}
                                            width={500}
                                            height={300}
                                        />
                                    </li>
                                    <li>
                                        <h3>{t("howItWorks.sensors.number")}</h3>
                                        <h4>{t("howItWorks.sensors.title")}</h4>
                                        <p>{t("howItWorks.sensors.description")}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="work-heading">
                                <h3>{t("howItWorks.fromSensorToData.title")}</h3>
                                <p>{t("howItWorks.fromSensorToData.subtitle")}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="work-box">
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2025/03/Housing-Protecting-the-System.webp"
                                            alt={t("howItWorks.housing.alt")}
                                            width={500}
                                            height={300}
                                        />
                                    </li>
                                    <li>
                                        <h3>{t("howItWorks.housing.number")}</h3>
                                        <h4>{t("howItWorks.housing.title")}</h4>
                                        <p>{t("howItWorks.housing.description")}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="work-box">
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2025/03/Dashboard-Analyzing-and-Visualizing-Data.webp"
                                            alt={t("howItWorks.dashboard.alt")}
                                            width={500}
                                            height={300}
                                        />
                                    </li>
                                    <li>
                                        <h3>{t("howItWorks.dashboard.number")}</h3>
                                        <h4>{t("howItWorks.dashboard.title")}</h4>
                                        <p>{t("howItWorks.dashboard.description")}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hidden Impact of Air Pollution */}
            <section className="gases-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="gaes-img">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/industries-gases.jpg"
                                    alt="air pollution by industrial gases"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gases-text">
                                <h2>{t("hiddenImpact.title")}</h2>
                                <p><strong>{t("hiddenImpact.subtitle")}</strong></p>
                                <p>{t("hiddenImpact.description1")}</p>
                                <p>{t("hiddenImpact.description2")}
                                    <Link href="https://www.pranaair.com/solutions-by-application/">{t("hiddenImpact.learnMore")}</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next-Gen Technology */}
            <section className="require-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="require-title">
                                <h2>{t("nextGenTechnology.title")}</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="require-para">
                                <p>{t("nextGenTechnology.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <AirQualitySensorSlider sensors={airQualitySensors} />
                    </div>
                </div>
            </section>

            {/* Air Pollutants Section */}
            <section className="key-parameter-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="key-title">
                                <h2>{t("airPollutants.title")}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="key-parameter">
                        <ul className="nav nav-tabs" id="pollutant-tabs-nav" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="pm-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#pm"
                                    type="button"
                                    role="tab"
                                    aria-controls="pm"
                                    aria-selected="true"
                                >
                                    {t("airPollutants.tabs.pm")}
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="co2-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#co2"
                                    type="button"
                                    role="tab"
                                    aria-controls="co2"
                                    aria-selected="false"
                                >
                                    {t("airPollutants.tabs.co2")}
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="tvoc-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tvoc"
                                    type="button"
                                    role="tab"
                                    aria-controls="tvoc"
                                    aria-selected="false"
                                >
                                    {t("airPollutants.tabs.tvoc")}
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="hcho-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#hcho"
                                    type="button"
                                    role="tab"
                                    aria-controls="hcho"
                                    aria-selected="false"
                                >
                                    {t("airPollutants.tabs.hcho")}
                                </button>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="pm" role="tabpanel" aria-labelledby="pm-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="healt-impact-img">
                                            <img src={t("airPollutants.pm.image") || "/placeholder.svg"} alt={t("airPollutants.pm.imageAlt")} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 pm-pg">
                                        <div className="key-para">
                                            <h3>{t("airPollutants.pm.title")}</h3>
                                            <h4>{t("airPollutants.sourcesTitle")}</h4>
                                            <p>{t("airPollutants.pm.sources")}</p>
                                            <h4>{t("airPollutants.healthImpactTitle")}</h4>
                                            <p>{t("airPollutants.pm.healthImpact")}</p>

                                            <Link className="key-btn" href={`${domain}/what-is-particulate-matter-pm/`}>
                                                {t("airPollutants.exploreMore")}
                                            </Link>

                                            <img
                                                className="para-bg"
                                                src={t("airPollutants.pm.backgroundImage") || "/placeholder.svg"}
                                                alt={t("airPollutants.backgroundImageAlt")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="co2" role="tabpanel" aria-labelledby="co2-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="healt-impact-img">
                                            <img
                                                src={t("airPollutants.co2.image") || "/placeholder.svg"}
                                                alt={t("airPollutants.co2.imageAlt")}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 co-pg">
                                        <div className="key-para">
                                            <h3>{t("airPollutants.co2.title")}</h3>
                                            <h4>{t("airPollutants.sourcesTitle")}</h4>
                                            <p>{t("airPollutants.co2.sources")}</p>
                                            <h4>{t("airPollutants.healthImpactTitle")}</h4>
                                            <p>{t("airPollutants.co2.healthImpact")}</p>

                                            <Link className="key-btn" href={`${domain}/what-is-carbon-dioxide-co2/`}>
                                                {t("airPollutants.exploreMore")}
                                            </Link>

                                            <img
                                                className="para-bg"
                                                src={t("airPollutants.co2.backgroundImage") || "/placeholder.svg"}
                                                alt={t("airPollutants.backgroundImageAlt")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="tvoc" role="tabpanel" aria-labelledby="tvoc-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="healt-impact-img">
                                            <img
                                                src={t("airPollutants.tvoc.image") || "/placeholder.svg"}
                                                alt={t("airPollutants.tvoc.imageAlt")}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 tvoc-pg">
                                        <div className="key-para">
                                            <h3>{t("airPollutants.tvoc.title")}</h3>
                                            <h4>{t("airPollutants.sourcesTitle")}</h4>
                                            <p>{t("airPollutants.tvoc.sources")}</p>
                                            <h4>{t("airPollutants.healthImpactTitle")}</h4>
                                            <p>{t("airPollutants.tvoc.healthImpact")}</p>

                                            <Link className="key-btn" href={`${domain}/what-is-voc/`}>
                                                {t("airPollutants.exploreMore")}
                                            </Link>

                                            <img
                                                className="para-bg"
                                                src={t("airPollutants.tvoc.backgroundImage") || "/placeholder.svg"}
                                                alt={t("airPollutants.backgroundImageAlt")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="hcho" role="tabpanel" aria-labelledby="hcho-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="healt-impact-img">
                                            <img
                                                src={t("airPollutants.hcho.image") || "/placeholder.svg"}
                                                alt={t("airPollutants.hcho.imageAlt")}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 hcho-pg">
                                        <div className="key-para">
                                            <h3>{t("airPollutants.hcho.title")}</h3>
                                            <h4>{t("airPollutants.sourcesTitle")}</h4>
                                            <p>{t("airPollutants.hcho.sources")}</p>
                                            <h4>{t("airPollutants.healthImpactTitle")}</h4>
                                            <p>{t("airPollutants.hcho.healthImpact")}</p>

                                            {t("airPollutants.hcho.link") && (
                                                <Link className="key-btn" href={`${domain}/airPollutants.hcho.link`}>
                                                    {t("airPollutants.exploreMore")}
                                                </Link>
                                            )}

                                            <img
                                                className="para-bg"
                                                src={t("airPollutants.hcho.backgroundImage") || "/placeholder.svg"}
                                                alt={t("airPollutants.backgroundImageAlt")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Air Quality Sensors */}
            <section className="air-quality-sensor">
                <div className="container">
                    <div className="row air-quality-sensor-bg">
                        <div className="col-lg-6">
                            <div className="air-quality-sensor-content">
                                <h2>{t("airQualitySensors.title")}</h2>
                                <h3>{t("airQualitySensors.subtitle")}</h3>
                                <Link class="know-more-btn" href="https://www.pranaair.com/air-quality-sensor/">{t("airQualitySensors.knowMore")}</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sensor-img">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/02/air-quality-sensor.png" alt={t("airQualitySensors.imageAlt")} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Air Quality Monitoring System */}
            <section className="air-quality-manage">
                <div className="container">
                    <div className="row borderr">
                        <div className="col-lg-6">
                            <div className="manage-heading">
                                <h2>{t("airQualityManagement.title")}</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="manage-btn">
                                <a class="gtq-btn" href="#contact">{t("airQualityManagement.getQuote")}</a>
                            </div>
                        </div>
                    </div>
                    <div className="row managment-data">
                        <div className="col-lg-6">
                            <div className="managment-img">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/02/air-quality-management-system.png" alt={t("airQualityManagement.imageAlt")} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mannage-para data-para">
                                <p><strong>{t("airQualityManagement.systemTitle")}</strong> {t("airQualityManagement.description")}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Type of Air Quality Monitor */}
            <section className="types-air-quality">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="type-of-air-quality-heading">
                                <h2>{t("typesAirQuality.title")}</h2>
                            </div>
                        </div>
                        <div className="col-sm-6"></div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="page-tabs out">
                                <ul className="nav nav-tabs" id="type-tabs-nav" role="tablist">
                                    <li className="nav-item home-tab-title">
                                        <button
                                            className="nav-link active"
                                            id="indoor-type-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#indoor-type"
                                            type="button"
                                            role="tab"
                                            aria-controls="indoor-type"
                                            aria-selected="true"
                                        >
                                            <span className="ult-span-text">{t("typesAirQuality.tabs.ambient")}</span>
                                        </button>
                                    </li>
                                    <li className="nav-item home-tab-title">
                                        <button
                                            className="nav-link"
                                            id="outdoor-type-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#outdoor-type"
                                            type="button"
                                            role="tab"
                                            aria-controls="outdoor-type"
                                            aria-selected="false"
                                        >
                                            <span className="ult-span-text">{t("typesAirQuality.tabs.indoor")}</span>
                                        </button>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="indoor-type"
                                        role="tabpanel"
                                        aria-labelledby="indoor-type-tab"
                                    >
                                        <div className="ult_tabitemname">
                                            <div className="air-quality-type">
                                                <div className="air-quality-type-image">
                                                    <img
                                                        className="types-img"
                                                        src={t("typesAirQuality.indoor.image") || "/placeholder.svg"}
                                                        alt={t("typesAirQuality.indoor.imageAlt")}
                                                    />
                                                </div>
                                                <div className="air-quality-type-content">
                                                    <h3>{t("typesAirQuality.indoor.title")}</h3>
                                                    <p>{t("typesAirQuality.indoor.paragraph1")}</p>
                                                    <p>{t("typesAirQuality.indoor.paragraph2")}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="outdoor-type" role="tabpanel" aria-labelledby="outdoor-type-tab">
                                        <div className="ult_tabitemname">
                                            <div className="air-quality-type">
                                                <div className="air-quality-type-image">
                                                    <img
                                                        className="types-img"
                                                        src={t("typesAirQuality.outdoor.image") || "/placeholder.svg"}
                                                        alt={t("typesAirQuality.outdoor.imageAlt")}
                                                    />
                                                </div>
                                                <div className="air-quality-type-content">
                                                    <h3>{t("typesAirQuality.outdoor.title")}</h3>
                                                    <p>{t("typesAirQuality.outdoor.paragraph1")}</p>
                                                    <p>{t("typesAirQuality.outdoor.paragraph2")}</p>
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

            {/* AQI Apps Section */}
            <section className="dashbord-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="dashbord-heading">
                                <h2>
                                    {t("aqiAppsSection.heading.connectText")}{" "}
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                                        alt={t("aqiAppsSection.heading.logoAlt")}
                                    />{" "}
                                    {t("aqiAppsSection.heading.withVariousText")}{" "}
                                    <img
                                        className="dash-aqi"
                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png"
                                        alt={t("aqiAppsSection.heading.aqiLogoAlt")}
                                    />{" "}
                                    {t("aqiAppsSection.heading.platformsText")}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="dash-tabs">
                        <ul className="nav nav-tabs" id="aqi-tabs-nav" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="mobile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#mobile"
                                    type="button"
                                    role="tab"
                                    aria-controls="mobile"
                                    aria-selected="true"
                                >
                                    {t("aqiAppsSection.tabs.mobileApp")}
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="tv-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tv"
                                    type="button"
                                    role="tab"
                                    aria-controls="tv"
                                    aria-selected="false"
                                >
                                    {t("aqiAppsSection.tabs.tvApp")}
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="web-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#web"
                                    type="button"
                                    role="tab"
                                    aria-controls="web"
                                    aria-selected="false"
                                >
                                    {t("aqiAppsSection.tabs.webDashboard")}
                                </button>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="mobile" role="tabpanel" aria-labelledby="mobile-tab">
                                <div className="row mob-row">
                                    <div className="col-md-6">
                                        <div className="mob-dash-img">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/aqi-mobile-app-dashboard.webp"
                                                alt={t("aqiAppsSection.mobileApp.imageAlt")}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="aqi-text">
                                            <h6>{t("aqiAppsSection.common.oneStopSolution")}</h6>
                                            <h3>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png"
                                                    alt={t("aqiAppsSection.common.aqiLogoAlt")}
                                                />{" "}
                                                {t("aqiAppsSection.mobileApp.title")}
                                            </h3>
                                        </div>
                                        <div className="dash-content">
                                            <ul>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/get-health-advice.png"
                                                        alt={t("aqiAppsSection.mobileApp.features.healthAdvice.imageAlt")}
                                                    />
                                                </li>
                                                <li>
                                                    <h4>{t("aqiAppsSection.mobileApp.features.healthAdvice.title")}</h4>
                                                    <p>{t("aqiAppsSection.mobileApp.features.healthAdvice.description")}</p>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/real-time-data-historic-data.png"
                                                        alt={t("aqiAppsSection.mobileApp.features.realTimeData.imageAlt")}
                                                    />
                                                </li>
                                                <li>
                                                    <h4>{t("aqiAppsSection.mobileApp.features.realTimeData.title")}</h4>
                                                    <p>{t("aqiAppsSection.mobileApp.features.realTimeData.description")}</p>
                                                </li>
                                            </ul>
                                            <ul className="dashbord-btn">
                                                <li>
                                                    <Link href="https://apps.apple.com/tt/app/aqi/id1439684571?utm_campaign=ios_app_install%27&utm_medium=iOS+app&utm_source=app+store">
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/01/ios-icon.png"
                                                            alt={t("aqiAppsSection.mobileApp.downloadLinks.ios.iconAlt")}
                                                        />{" "}
                                                        {t("aqiAppsSection.mobileApp.downloadLinks.ios.text")}{" "}
                                                        <strong>{t("aqiAppsSection.mobileApp.downloadLinks.ios.platform")}</strong>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://play.google.com/store/apps/details?id=com.aqi.data&hl=en&utm_source=play+store&utm_medium=android&utm_campaign=android_app_install%27&pli=1">
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/01/android-icon.png"
                                                            alt={t("aqiAppsSection.mobileApp.downloadLinks.android.iconAlt")}
                                                        />{" "}
                                                        {t("aqiAppsSection.mobileApp.downloadLinks.android.text")}{" "}
                                                        <strong>{t("aqiAppsSection.mobileApp.downloadLinks.android.platform")}</strong>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="tv" role="tabpanel" aria-labelledby="tv-tab">
                                <div className="row mob-row">
                                    <div className="col-md-6">
                                        <div className="tv-dash-img">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/aqi-tv-app-dashboard.webp"
                                                alt={t("aqiAppsSection.tvApp.imageAlt")}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="aqi-text">
                                            <h6>{t("aqiAppsSection.common.oneStopSolution")}</h6>
                                            <h3>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png"
                                                    alt={t("aqiAppsSection.common.aqiLogoAlt")}
                                                />{" "}
                                                {t("aqiAppsSection.tvApp.title")}
                                            </h3>
                                        </div>
                                        <div className="dash-content">
                                            <ul>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/themes-variety.png"
                                                        alt={t("aqiAppsSection.tvApp.features.themesVariety.imageAlt")}
                                                    />
                                                </li>
                                                <li>
                                                    <h4>{t("aqiAppsSection.tvApp.features.themesVariety.title")}</h4>
                                                    <p>{t("aqiAppsSection.tvApp.features.themesVariety.description")}</p>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/24x7-data.png"
                                                        alt={t("aqiAppsSection.tvApp.features.dataAccessibility.imageAlt")}
                                                    />
                                                </li>
                                                <li>
                                                    <h4>{t("aqiAppsSection.tvApp.features.dataAccessibility.title")}</h4>
                                                    <p>{t("aqiAppsSection.tvApp.features.dataAccessibility.description")}</p>
                                                </li>
                                            </ul>
                                            <ul className="tv-web-btn">
                                                <li>
                                                    <Link href="https://play.google.com/store/apps/details?id=com.aqitv.aqitvnew">
                                                        {" "}
                                                        {t("aqiAppsSection.tvApp.downloadLink.text")}{" "}
                                                        <strong>{t("aqiAppsSection.tvApp.downloadLink.platform")}</strong>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="web" role="tabpanel" aria-labelledby="web-tab">
                                <div className="row mob-row">
                                    <div className="col-md-6">
                                        <div className="web-dash-img">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/03/aqi-web-dashboard-for-prana-air-monitors.webp"
                                                alt={t("aqiAppsSection.webDashboard.imageAlt")}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="aqi-text">
                                            <h6>{t("aqiAppsSection.common.oneStopSolution")}</h6>
                                            <h3>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png"
                                                    alt={t("aqiAppsSection.common.aqiLogoAlt")}
                                                />{" "}
                                                {t("aqiAppsSection.webDashboard.title")}
                                            </h3>
                                        </div>
                                        <div className="dash-content">
                                            <ul>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/remote-access-icon.png"
                                                        alt={t("aqiAppsSection.webDashboard.features.remoteAccess.imageAlt")}
                                                    />
                                                </li>
                                                <li>
                                                    <h4>{t("aqiAppsSection.webDashboard.features.remoteAccess.title")}</h4>
                                                    <p>{t("aqiAppsSection.webDashboard.features.remoteAccess.description")}</p>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/data-comparison.png"
                                                        alt={t("aqiAppsSection.webDashboard.features.dataComparison.imageAlt")}
                                                    />
                                                </li>
                                                <li>
                                                    <h4>{t("aqiAppsSection.webDashboard.features.dataComparison.title")}</h4>
                                                    <p>{t("aqiAppsSection.webDashboard.features.dataComparison.description")}</p>
                                                </li>
                                            </ul>
                                            <ul className="tv-web-btn">
                                                <li>
                                                    <Link href="https://www.aqi.in/userlogin">
                                                        {" "}
                                                        {t("aqiAppsSection.webDashboard.downloadLink.text")}{" "}
                                                        <strong>{t("aqiAppsSection.webDashboard.downloadLink.platform")}</strong>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Calculated Health Index-Score */}
            <section className="health-score-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="health-score-title">
                                <h2><span className="green-txt">{t("healthScore.ai")}</span> {t("healthScore.calculated")}
                                    <span className="green-txt">{t("healthScore.health")}</span> {t("healthScore.indexScore")}</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="health-score-para">
                                <p>{t("healthScore.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="calculate-health-score">
                                <div className="healt-score-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/ventilation-score.jpg" alt="ventilation score" />
                                </div>
                                <div className="healt-score-text">
                                    <ul>
                                        <li>
                                            <h3>{t("healthScore.ventilation.title")}</h3>
                                            <p>{t("healthScore.ventilation.description")}</p>
                                        </li>
                                        <li>
                                            <h4 style={{ color: '#fbb400' }}>
                                                {t("healthScore.ventilation.score")} <br />
                                                <span className="score-clr">{t("healthScore.ventilation.status")}</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="calculate-health-score">
                                <div className="healt-score-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Capacity-Index.jpg" alt="ventilation score" />
                                </div>
                                <div className="healt-score-text">
                                    <ul>
                                        <li>
                                            <h3>{t("healthScore.capacity.title")}</h3>
                                            <p>{t("healthScore.capacity.description")}</p>
                                        </li>
                                        <li>
                                            <h4 style={{ color: '#29b713' }}>
                                                {t("healthScore.capacity.score")} <br />
                                                <span className="score-clr">{t("healthScore.capacity.status")}</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="calculate-health-score">
                                <div className="healt-score-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Mites-Score.jpg" alt="ventilation score" />
                                </div>
                                <div className="healt-score-text">
                                    <ul>
                                        <li>
                                            <h3>{t("healthScore.mites.title")}</h3>
                                            <p>{t("healthScore.mites.description")}</p>
                                        </li>
                                        <li>
                                            <h4 style={{ color: '#fbb400' }}>
                                                {t("healthScore.mites.score")} <br />
                                                <span className="score-clr">{t("healthScore.mites.status")}</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="calculate-health-score">
                                <div className="healt-score-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Virus-Index.jpg" alt="ventilation score" />
                                </div>
                                <div className="healt-score-text">
                                    <ul>
                                        <li>
                                            <h3>{t("healthScore.virus.title")}</h3>
                                            <p>{t("healthScore.virus.description")}</p>
                                        </li>
                                        <li>
                                            <h4 style={{ color: '#f4231c' }}>
                                                {t("healthScore.virus.score")} <br />
                                                <span className="score-clr">{t("healthScore.virus.status")}</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="calculate-health-score">
                                <div className="healt-score-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Mold-Score.jpg" alt="ventilation score" />
                                </div>
                                <div className="healt-score-text">
                                    <ul>
                                        <li>
                                            <h3>{t("healthScore.mold.title")}</h3>
                                            <p>{t("healthScore.mold.description")}</p>
                                        </li>
                                        <li>
                                            <h4 style={{ color: '#f4231c' }}>
                                                {t("healthScore.mold.score")} <br />
                                                <span className="score-clr">{t("healthScore.mold.status")}</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="calculate-health-score">
                                <div className="healt-score-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Odor-score.jpg" alt="ventilation score" />
                                </div>
                                <div className="healt-score-text">
                                    <ul>
                                        <li>
                                            <h3>{t("healthScore.odor.title")}</h3>
                                            <p>{t("healthScore.odor.description")}</p>
                                        </li>
                                        <li>
                                            <h4 style={{ color: '#29b713' }}>
                                                {t("healthScore.odor.score")} <br />
                                                <span className="score-clr">{t("healthScore.odor.status")}</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="calculate-health-score">
                                <div className="healt-score-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Filtration-Score.jpg" alt="ventilation score" />
                                </div>
                                <div className="healt-score-text">
                                    <ul>
                                        <li>
                                            <h3>{t("healthScore.filtration.title")}</h3>
                                            <p>{t("healthScore.filtration.description")}</p>
                                        </li>
                                        <li>
                                            <h4 style={{ color: '#fbb400' }}>
                                                {t("healthScore.filtration.score")} <br />
                                                <span className="score-clr">{t("healthScore.filtration.status")}</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="calculate-health-score">
                                <div className="healt-score-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Comfort-score.jpg" alt="ventilation score" />
                                </div>
                                <div className="healt-score-text">
                                    <ul>
                                        <li>
                                            <h3>{t("healthScore.comfort.title")}</h3>
                                            <p>{t("healthScore.comfort.description")}</p>
                                        </li>
                                        <li>
                                            <h4 style={{ color: '#f4231c' }}>
                                                {t("healthScore.comfort.score")} <br />
                                                <span className="score-clr">{t("healthScore.comfort.status")}</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By */}
            <section className="trust-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="trust-title">
                                <h2>{t("trustedBy.title")}</h2>
                                <p>{t("trustedBy.subtitle")}</p>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </section>
            <section className="all-company-sec">
                <div className="container-fluid">
                    <div className="col-lg-12">
                        <div className="container">
                            <div className="marquee">
                                <div className="marquee-inner">
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/taj.png" alt="taj logo" />
                                            </li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/mahindra.png" alt="mahindra" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/renault-nissan.png" alt="renault logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/marriott.png" alt="marriott logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/tata.png" alt="tata logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/havells.png" alt="havells logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/microsoft.png" alt="microsoft logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/iit-bombay.png" alt="iit-bombay logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/UOC.png" alt="UOC logo" />
                                            </li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Symbiosis-Pune.png" alt="Symbiosis logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Siemens.png" alt="Siemens logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Schneider-Electric-.png" alt="Schneider logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/OLA.png" alt="OLA logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/WRI.png" alt="WRI logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/BITS-pilani.png" alt="BITS-pilani logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/BIRLA-Ultratech.png" alt="BIRLA-Ultratech logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/taj.png" alt="taj logo" />
                                            </li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/mahindra.png" alt="mahindra" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/renault-nissan.png" alt="renault logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/marriott.png" alt="marriott logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/tata.png" alt="tata logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/havells.png" alt="havells logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/microsoft.png" alt="microsoft logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/iit-bombay.png" alt="iit-bombay logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/UOC.png" alt="UOC logo" />
                                            </li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Symbiosis-Pune.png" alt="Symbiosis logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Siemens.png" alt="Siemens logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Schneider-Electric-.png" alt="Schneider logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/OLA.png" alt="OLA logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/WRI.png" alt="WRI logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/BITS-pilani.png" alt="BITS-pilani logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/BIRLA-Ultratech.png" alt="BIRLA-Ultratech logo" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="marquee">
                                <div className="marquee-inner-rgt">
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/BCG-Boston-Consulting-Group.png" alt="BCG-Boston-Consulting-Group logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Adani-Group.png" alt="Adani-Group logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/hyderabad-iit.png" alt="hyderabad-iit logo" />
                                            </li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/iit-kanpur.png" alt="iit-kanpur logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/rorkee-iit.png" alt="iit roorkee logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/marriott.png" alt="marriott logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/dae.png" alt="dae logo" />
                                            </li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/iiot.png" alt="iiot logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/bhu.png" alt="bhu logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/iit-rorkee.png" alt="iit-rorkee logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/LODHA.png" alt="LODHA logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Leighton.png" alt="Leighton logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/InterGlobe-Aviation-Indigo.png" alt="InterGlobe-Aviation-Indigo logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/IIT-Banaras.png" alt="IIT-Banaras" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/FOOD-works.png" alt="FOOD-works logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Emaar.png" alt="Emaar logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/CII.png" alt="CII logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/CEEW.png" alt="CEEW logo" /></li>
                                        </ul>
                                    </div>

                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/BCG-Boston-Consulting-Group.png" alt="BCG-Boston-Consulting-Group logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Adani-Group.png" alt="Adani-Group logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/hyderabad-iit.png" alt="hyderabad-iit logo" />
                                            </li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/iit-kanpur.png" alt="iit-kanpur logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/rorkee-iit.png" alt="iit roorkee logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/marriott.png" alt="marriott logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/dae.png" alt="dae logo" />
                                            </li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/iiot.png" alt="iiot logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/bhu.png" alt="bhu logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/iit-rorkee.png" alt="iit-rorkee logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/LODHA.png" alt="LODHA logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Leighton.png" alt="Leighton logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/InterGlobe-Aviation-Indigo.png" alt="InterGlobe-Aviation-Indigo logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/IIT-Banaras.png" alt="IIT-Banaras" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/FOOD-works.png" alt="FOOD-works logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Emaar.png" alt="Emaar logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/CII.png" alt="CII logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/CEEW.png" alt="CEEW logo" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Air Quality Monitoring at Construction Site */}
            <section className="dppc-guidelines">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="dppc-heading">
                                <h2>{t("constructionSite.title")}</h2>
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/03/air-quality-device-at-construction-site.jpg" alt={t("constructionSite.imageAlt")} />
                                <Link className="dpcc-btn" href="https://www.pranaair.com/solutions-by-application/constructions/">{t("constructionSite.learnMore")}</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="dpcc-guid-line">
                                <h3>{t("constructionSite.accordingTo")}</h3>
                                <h4><img src="https://www.pranaair.com/wp-content/uploads/2024/03/dpss-logo.png" alt="dpss-logo" />  {t("constructionSite.dpccGuidelines")}</h4>
                            </div>
                            <div className="site-coverd">
                                <ul>
                                    <li><span className="count">{t("constructionSite.sitesCount")}</span></li>
                                    <li>
                                        <h5>{t("constructionSite.sitesDescription")}</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Air Quality Standard */}
            <section className="air-quality-standard-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="air-quality-standard-title">
                                <h2>{t("airQualityStandard.title")}</h2>
                            </div>
                        </div>
                        <div className="col-sm-6"></div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="air-quality-standard-para">
                                <p>{t("airQualityStandard.description")}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="page-tabs out">
                                <ul className="nav nav-tabs" id="standard-tabs-nav" role="tablist">
                                    <li className="nav-item home-tab-title">
                                        <button
                                            className="nav-link active"
                                            id="indoor-standard-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#indoor-standard"
                                            type="button"
                                            role="tab"
                                            aria-controls="indoor-standard"
                                            aria-selected="true"
                                        >
                                            <span className="ult-span-text">{t("airQualityStandard.tabs.indoor")}</span>
                                        </button>
                                    </li>
                                    <li className="nav-item home-tab-title">
                                        <button
                                            className="nav-link"
                                            id="outdoor-standard-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#outdoor-standard"
                                            type="button"
                                            role="tab"
                                            aria-controls="outdoor-standard"
                                            aria-selected="false"
                                        >
                                            <span className="ult-span-text">{t("airQualityStandard.tabs.outdoor")}</span>
                                        </button>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="indoor-standard"
                                        role="tabpanel"
                                        aria-labelledby="indoor-standard-tab"
                                    >
                                        <div className="ult_tabitemname">
                                            <div className="air-standard-parameter">
                                                <ul>
                                                    <li>
                                                        <strong>{t("airQualityStandard.indoor.parameters.title")}</strong>
                                                    </li>
                                                    <li>{t("airQualityStandard.indoor.parameters.pm25")}</li>
                                                    <li>{t("airQualityStandard.indoor.parameters.o3")}</li>
                                                    <li>{t("airQualityStandard.indoor.parameters.tvoc")}</li>
                                                    <li>{t("airQualityStandard.indoor.parameters.hcho")}</li>
                                                    <li>{t("airQualityStandard.indoor.parameters.co")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <strong>{t("airQualityStandard.indoor.well.title")}</strong>
                                                    </li>
                                                    <li>{t("airQualityStandard.indoor.well.pm25")}</li>
                                                    <li>{t("airQualityStandard.indoor.well.o3")}</li>
                                                    <li>{t("airQualityStandard.indoor.well.tvoc")}</li>
                                                    <li>{t("airQualityStandard.indoor.well.hcho")}</li>
                                                    <li>{t("airQualityStandard.indoor.well.co")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <strong>{t("airQualityStandard.indoor.leed.title")}</strong>
                                                    </li>
                                                    <li>{t("airQualityStandard.indoor.leed.pm25")}</li>
                                                    <li>{t("airQualityStandard.indoor.leed.o3")}</li>
                                                    <li>{t("airQualityStandard.indoor.leed.tvoc")}</li>
                                                    <li>{t("airQualityStandard.indoor.leed.hcho")}</li>
                                                    <li>{t("airQualityStandard.indoor.leed.co")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <strong>{t("airQualityStandard.indoor.ashrae.title")}</strong>
                                                    </li>
                                                    <li>{t("airQualityStandard.indoor.ashrae.pm25")}</li>
                                                    <li>{t("airQualityStandard.indoor.ashrae.o3")}</li>
                                                    <li>{t("airQualityStandard.indoor.ashrae.tvoc")}</li>
                                                    <li>{t("airQualityStandard.indoor.ashrae.hcho")}</li>
                                                    <li>{t("airQualityStandard.indoor.ashrae.co")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <strong>{t("airQualityStandard.indoor.whoEurope.title")}</strong>
                                                    </li>
                                                    <li>{t("airQualityStandard.indoor.whoEurope.pm25")}</li>
                                                    <li>{t("airQualityStandard.indoor.whoEurope.o3")}</li>
                                                    <li>{t("airQualityStandard.indoor.whoEurope.tvoc")}</li>
                                                    <li>{t("airQualityStandard.indoor.whoEurope.hcho")}</li>
                                                    <li>{t("airQualityStandard.indoor.whoEurope.co")}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="tab-pane fade"
                                        id="outdoor-standard"
                                        role="tabpanel"
                                        aria-labelledby="outdoor-standard-tab"
                                    >
                                        <div className="ult_tabitemname">
                                            <div className="air-standard-parameter">
                                                <ul>
                                                    <li>
                                                        <strong>{t("airQualityStandard.outdoor.parameters.title")}</strong>
                                                    </li>
                                                    <li>{t("airQualityStandard.outdoor.parameters.pm25")}</li>
                                                    <li>{t("airQualityStandard.outdoor.parameters.pm10")}</li>
                                                    <li>{t("airQualityStandard.outdoor.parameters.o3")}</li>
                                                    <li>{t("airQualityStandard.outdoor.parameters.no2")}</li>
                                                    <li>{t("airQualityStandard.outdoor.parameters.so2")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <strong>{t("airQualityStandard.outdoor.time.title")}</strong>
                                                    </li>
                                                    <li dangerouslySetInnerHTML={{ __html: t("airQualityStandard.outdoor.time.pm25") }} />
                                                    <li dangerouslySetInnerHTML={{ __html: t("airQualityStandard.outdoor.time.pm10") }} />
                                                    <li>{t("airQualityStandard.outdoor.time.o3")}</li>
                                                    <li dangerouslySetInnerHTML={{ __html: t("airQualityStandard.outdoor.time.no2") }} />
                                                    <li>{t("airQualityStandard.outdoor.time.so2")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <strong>{t("airQualityStandard.outdoor.who.title")}</strong>
                                                    </li>
                                                    <li dangerouslySetInnerHTML={{ __html: t("airQualityStandard.outdoor.who.pm25") }} />
                                                    <li dangerouslySetInnerHTML={{ __html: t("airQualityStandard.outdoor.who.pm10") }} />
                                                    <li>{t("airQualityStandard.outdoor.who.o3")}</li>
                                                    <li dangerouslySetInnerHTML={{ __html: t("airQualityStandard.outdoor.who.no2") }} />
                                                    <li>{t("airQualityStandard.outdoor.who.so2")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <strong>{t("airQualityStandard.outdoor.india.title")}</strong>
                                                    </li>
                                                    <li dangerouslySetInnerHTML={{ __html: t("airQualityStandard.outdoor.india.pm25") }} />
                                                    <li dangerouslySetInnerHTML={{ __html: t("airQualityStandard.outdoor.india.pm10") }} />
                                                    <li>{t("airQualityStandard.outdoor.india.o3")}</li>
                                                    <li dangerouslySetInnerHTML={{ __html: t("airQualityStandard.outdoor.india.no2") }} />
                                                    <li>{t("airQualityStandard.outdoor.india.so2")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <strong>{t("airQualityStandard.outdoor.us.title")}</strong>
                                                    </li>
                                                    <li dangerouslySetInnerHTML={{ __html: t("airQualityStandard.outdoor.us.pm25") }} />
                                                    <li dangerouslySetInnerHTML={{ __html: t("airQualityStandard.outdoor.us.pm10") }} />
                                                    <li>{t("airQualityStandard.outdoor.us.o3")}</li>
                                                    <li dangerouslySetInnerHTML={{ __html: t("airQualityStandard.outdoor.us.no2") }} />
                                                    <li>{t("airQualityStandard.outdoor.us.so2")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <strong>{t("airQualityStandard.outdoor.european.title")}</strong>
                                                    </li>
                                                    <li dangerouslySetInnerHTML={{ __html: t("airQualityStandard.outdoor.european.pm25") }} />
                                                    <li dangerouslySetInnerHTML={{ __html: t("airQualityStandard.outdoor.european.pm10") }} />
                                                    <li>{t("airQualityStandard.outdoor.european.o3")}</li>
                                                    <li dangerouslySetInnerHTML={{ __html: t("airQualityStandard.outdoor.european.no2") }} />
                                                    <li>{t("airQualityStandard.outdoor.european.so2")}</li>
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

            {/* Air Quality Data Insight */}
            <section className="historic-data-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="historic-title">
                                <h2>{t("dataInsight.title")}</h2>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="historic-para">
                                <p>{t("dataInsight.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="historic-table-img">
                                <ul>
                                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/02/partical-counts.png" alt={t("dataInsight.particleCountsAlt")} /></li>
                                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/02/aqi-avrage.png" alt={t("dataInsight.aqiAverageAlt")} /></li>
                                </ul>
                                <ul>
                                    <li><img src="https://www.pranaair.com/wp-content/uploads/2024/02/history-data.png" alt={t("dataInsight.historyDataAlt")} /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aqi-dashbord-img">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/03/aqi-dashboard-for-prana-air-monitors.webp" alt={t("dataInsight.dashboardAlt")}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highly Accurate Prana Air Monitor */}
            <section className="highly-accurate-monitor">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="highly-accurate-heading">
                                <h2>{t("highlyAccurate.title")}</h2>
                                <p>{t("highlyAccurate.subtitle")}</p>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="graph-img">
                                <img src="https://www.pranaair.com/wp-content/uploads/2024/02/highly-accurate-graph-monitor.jpg" alt={t("highlyAccurate.graphAlt")} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <div className="app-slider-row">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="app-heading">
                                <h2>{t("applicationsHeading.title")}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <ApplicationsSlider />
                </div>
            </div>

            {/* Testimonial Slider Section */}
            <section className="testimonial-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-2">
                            <h2 className="section-title">{t("customerExperience.title")}</h2>
                            <p className="section-subtitle">{t("customerExperience.subtitle")}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <TestimonialsSlider testimonials={testimonials} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="contact-heading">
                            <h2>{t("contactHeading.title")}</h2>
                            <p>{t("contactHeading.description")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm pageName="Air Quality Monitor Common Page" />

            <section className="also-like py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-4">{t("youMayAlsoLike.title")}</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="may-also">
                            <ul>
                                <li><Link href={`${domain}/air-quality-monitor/handheld/pocket-monitor/`}>
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Pocket-PM.jpg"
                                        alt="Pocket-PM" />
                                </Link>
                                    <h5>{t("youMayAlsoLike.products.pocketPM")} <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="" /></h5>

                                </li>
                                <li><Link href={`${domain}/air-quality-monitor/cair-monitor/`}>
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Cair.jpg" alt="Cair" />
                                </Link>

                                    <h5>{t("youMayAlsoLike.products.cairPlus")} <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="" /></h5>

                                </li>
                                <li><Link href={`${domain}/air-quality-monitor/sensible-air-monitor/`}>
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/pranaair-sensible-air-monitor.webp"
                                        alt="pranaair-sensible-air-monitor" />
                                </Link>

                                    <h5>{t("youMayAlsoLike.products.sensible")} <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="" /></h5>

                                </li>
                                <li><Link href={`${domain}/air-quality-monitor/ambient-air-monitor/`}>
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/Ambient-pro.jpg"
                                        alt="Ambient-pro" />
                                </Link>

                                    <h5>{t("youMayAlsoLike.products.ambientPro")} <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="" /></h5>

                                </li>
                                <li><Link href={`${domain}/air-quality-monitor/squair-air-monitor/`}>
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/SQUAIR.jpg" alt="SQUAIR" />
                                </Link>

                                    <h5>{t("youMayAlsoLike.products.squair")} <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="" /></h5>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}
