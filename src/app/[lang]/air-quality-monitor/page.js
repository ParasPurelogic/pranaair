import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import Image from "next/image";
import ContactForm from "@/Components/Contacform/ContactForm"
import VideoPopup from "@/Components/Pages/AirQualityCommonMonitor/video-popup"
import ApplicationsSlider from "@/Components/Pages/AirQualityCommonMonitor/applications-slider"
import TestimonialsSlider from "@/Components/Pages/AirQualityCommonMonitor/testimonials-slider"
import { getServerTranslation } from "@/i18n/server"

export default async function CommonMonitorPage() {
    const { t } = await getServerTranslation("common-monitor")
    const testimonials = [
        {
            id: 1,
            name: "Sameer W.",
            rating: 5,
            review:
                "It's a great product that can indicate the level of PM2.5 in a closed or outdoor environment. It's not 100% accurate and given its size and price I think it would be an unrealistic expectation to have that level of accuracy. It tells you the order of magnitude of PM2.5 pollution in a place and it also indicates the measurement extremely fast. I have tested and triangulated the device output with other readings (from air purifiers) and I don't think the margin of error is beyond 10%. However, this has been at levels of PM2.5 below 100. I am not sure if the margin of error expands or reduces with the PM2.5 increases to levels beyond 150. If you wish to know, on an indicative basis, of the range of pollution in a place at a point of time, then this would be a highly recommended device.",
        },
        {
            id: 2,
            name: "Priya M.",
            rating: 5,
            review:
                "I purchased the Prana Air quality monitor for my home as my child has asthma. This device has been incredibly helpful in monitoring the air quality in different rooms and alerting us when we need to take action. The readings are consistent and the device is easy to use. The battery life is also impressive. I would definitely recommend this to anyone concerned about indoor air quality, especially those with respiratory conditions.",
        },
        {
            id: 3,
            name: "Rajesh K.",
            rating: 4,
            review:
                "I've been using the Prana Sense monitor for about 3 months now in my office space. The device is compact and portable, making it easy to move around different areas. The readings seem accurate when compared to other professional equipment. The only improvement I would suggest is making the app interface a bit more user-friendly. Otherwise, it's a solid product that delivers on its promises.",
        },
        {
            id: 4,
            name: "Anita S.",
            rating: 5,
            review:
                "Living in a city with high pollution levels, I wanted a reliable way to monitor air quality both inside and outside my home. The Prana Air monitor has exceeded my expectations. It detects even slight changes in air quality and the historical data tracking helps me understand patterns over time. The customer service team was also very responsive when I had questions about calibration. Highly recommended for urban dwellers!",
        },
        {
            id: 5,
            name: "Michael T.",
            rating: 5,
            review:
                "As someone who works in environmental science, I was looking for a consumer-grade device that could provide reasonably accurate readings. This device strikes a good balance between accuracy and affordability. I've been using it for various field projects and it has proven to be reliable. The solar charging option is also a great sustainable feature that reduces the need for battery replacements.",
        },
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
                                <a href="#contact" aria-label={t("ambientBanner.ariaLabel")}>
                                    {t("ambientBanner.contactUs")}{" "}
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/09/banner-icon.png" alt={t("ambientBanner.iconAlt")} />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <VideoPopup />
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
                                    {/* Pocket CO2 Monitor */}
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
                                                <a href={t("productTabs.products.pocketCO2.link")}>
                                                    <img
                                                        src={t("productTabs.products.pocketCO2.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.pocketCO2.imageAlt")}
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href={t("productTabs.products.pocketCO2.link")}>{t("productTabs.products.pocketCO2.name")}</a>
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
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt="" />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pocket PM2.5 Monitor */}
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
                                                <a href={t("productTabs.products.pocketPM.link")}>
                                                    <img
                                                        src={t("productTabs.products.pocketPM.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.pocketPM.imageAlt")}
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href={t("productTabs.products.pocketPM.link")}>{t("productTabs.products.pocketPM.name")}</a>
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
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt="" />
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
                                                <a href={t("productTabs.products.sensible.link")}>
                                                    <img
                                                        src={t("productTabs.products.sensible.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.sensible.imageAlt")}
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href={t("productTabs.products.sensible.link")}>{t("productTabs.products.sensible.name")}</a>
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
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt="" />
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
                                                <a href={t("productTabs.products.ambientPM.link")}>
                                                    <img
                                                        src={t("productTabs.products.ambientPM.image") || "/placeholder.svg"}
                                                        alt={t("productTabs.products.ambientPM.imageAlt")}
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href={t("productTabs.products.ambientPM.link")}>{t("productTabs.products.ambientPM.name")}</a>
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
                                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt="" />
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

                                            <a className="key-btn" href={t("airPollutants.pm.link")}>
                                                {t("airPollutants.exploreMore")}
                                            </a>

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

                                            <a className="key-btn" href={t("airPollutants.co2.link")}>
                                                {t("airPollutants.exploreMore")}
                                            </a>

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

                                            <a className="key-btn" href={t("airPollutants.tvoc.link")}>
                                                {t("airPollutants.exploreMore")}
                                            </a>

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
                                                <a className="key-btn" href={t("airPollutants.hcho.link")}>
                                                    {t("airPollutants.exploreMore")}
                                                </a>
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
                                                <div className="air-quality-type-content">
                                                    <h3>{t("typesAirQuality.indoor.title")}</h3>
                                                    <p>{t("typesAirQuality.indoor.paragraph1")}</p>
                                                    <p>{t("typesAirQuality.indoor.paragraph2")}</p>
                                                </div>
                                                <div className="air-quality-type-image">
                                                    <img
                                                        className="types-img"
                                                        src={t("typesAirQuality.indoor.image") || "/placeholder.svg"}
                                                        alt={t("typesAirQuality.indoor.imageAlt")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="outdoor-type" role="tabpanel" aria-labelledby="outdoor-type-tab">
                                        <div className="ult_tabitemname">
                                            <div className="air-quality-type">
                                                <div className="air-quality-type-content">
                                                    <h3>{t("typesAirQuality.outdoor.title")}</h3>
                                                    <p>{t("typesAirQuality.outdoor.paragraph1")}</p>
                                                    <p>{t("typesAirQuality.outdoor.paragraph2")}</p>
                                                </div>
                                                <div className="air-quality-type-image">
                                                    <img
                                                        className="types-img"
                                                        src={t("typesAirQuality.outdoor.image") || "/placeholder.svg"}
                                                        alt={t("typesAirQuality.outdoor.imageAlt")}
                                                    />
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
                                                    <a href={t("aqiAppsSection.mobileApp.downloadLinks.ios.url")}>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/01/ios-icon.png"
                                                            alt={t("aqiAppsSection.mobileApp.downloadLinks.ios.iconAlt")}
                                                        />{" "}
                                                        {t("aqiAppsSection.mobileApp.downloadLinks.ios.text")}{" "}
                                                        <strong>{t("aqiAppsSection.mobileApp.downloadLinks.ios.platform")}</strong>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={t("aqiAppsSection.mobileApp.downloadLinks.android.url")}>
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/01/android-icon.png"
                                                            alt={t("aqiAppsSection.mobileApp.downloadLinks.android.iconAlt")}
                                                        />{" "}
                                                        {t("aqiAppsSection.mobileApp.downloadLinks.android.text")}{" "}
                                                        <strong>{t("aqiAppsSection.mobileApp.downloadLinks.android.platform")}</strong>
                                                    </a>
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
                                                    <a href={t("aqiAppsSection.tvApp.downloadLink.url")}>
                                                        {" "}
                                                        {t("aqiAppsSection.tvApp.downloadLink.text")}{" "}
                                                        <strong>{t("aqiAppsSection.tvApp.downloadLink.platform")}</strong>
                                                    </a>
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
                                                    <a href={t("aqiAppsSection.webDashboard.downloadLink.url")}>
                                                        {" "}
                                                        {t("aqiAppsSection.webDashboard.downloadLink.text")}{" "}
                                                        <strong>{t("aqiAppsSection.webDashboard.downloadLink.platform")}</strong>
                                                    </a>
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
        </main>
    )
}
