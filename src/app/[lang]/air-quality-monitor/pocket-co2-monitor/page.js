import Image from "next/image"
import { getServerTranslation } from "@/i18n/server"
import "./style.css"
import Link from "next/link"
import RangeMonitorPage from "@/Components/Pages/PocketCo2Monitor/range"

export default async function CO2MonitorPage() {
    const { t } = await getServerTranslation("pocket-co2")
    const rangeData = [
        {
            id: "good_range",
            name: t("co2Ranges.good.name"),
            range: t("co2Ranges.good.range"),
            isActive: true,
            image: {
                src: "https://www.pranaair.com/wp-content/uploads/2022/06/good_child.png",
                width: 55,
                height: 55,
                alt: t("co2Ranges.good.imageAlt"),
            },
            tooltip: t("co2Ranges.good.tooltip"),
        },
        {
            id: "moderate_range",
            name: t("co2Ranges.moderate.name"),
            range: t("co2Ranges.moderate.range"),
            isActive: false,
            image: {
                src: "https://www.pranaair.com/wp-content/uploads/2022/06/moderate_child.png",
                width: 55,
                height: 55,
                alt: t("co2Ranges.moderate.imageAlt"),
            },
            tooltip: t("co2Ranges.moderate.tooltip"),
        },
        {
            id: "poor_range",
            name: t("co2Ranges.poor.name"),
            range: t("co2Ranges.poor.range"),
            isActive: false,
            image: {
                src: "https://www.pranaair.com/wp-content/uploads/2022/06/poor_child.png",
                width: 88,
                height: 88,
                alt: t("co2Ranges.poor.imageAlt"),
            },
            tooltip: t("co2Ranges.poor.tooltip"),
        },
        {
            id: "unhealthy_range",
            name: t("co2Ranges.unhealthy.name"),
            range: t("co2Ranges.unhealthy.range"),
            isActive: false,
            image: {
                src: "https://www.pranaair.com/wp-content/uploads/2022/06/unhealthy_child.png",
                width: 68,
                height: 68,
                alt: t("co2Ranges.unhealthy.imageAlt"),
            },
            tooltip: t("co2Ranges.unhealthy.tooltip"),
        },
        {
            id: "serve_range",
            name: t("co2Ranges.severe.name"),
            range: t("co2Ranges.severe.range"),
            isActive: false,
            image: {
                src: "https://www.pranaair.com/wp-content/uploads/2022/06/sevre_child.png",
                width: 74,
                height: 74,
                alt: t("co2Ranges.severe.imageAlt"),
            },
            tooltip: t("co2Ranges.severe.tooltip"),
        },
        {
            id: "hazaedous_range",
            name: t("co2Ranges.hazardous.name"),
            range: t("co2Ranges.hazardous.range"),
            isActive: false,
            image: {
                src: "https://www.pranaair.com/wp-content/uploads/2022/06/hazardous_child.png",
                width: 106,
                height: 106,
                alt: t("co2Ranges.hazardous.imageAlt"),
            },
            tooltip: t("co2Ranges.hazardous.tooltip"),
        },
    ]
    return (
        <div className="co2-monitor-page">
            {/* Banner Section */}
            <section className="pocket_banner_box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="banner-content">
                                <h1>
                                    {t("banner.title.prefix")} <span className="banner-txt">{t("banner.title.highlight")}</span>
                                </h1>
                                <p>{t("banner.description")}</p>
                                <ul className="rate_list">
                                    <li>
                                        <div className="woocom-list-content">{t("banner.price")}</div>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2022/07/Pocket-Sized-icon.png"
                                            width={20}
                                            height={20}
                                            alt={t("banner.features.pocketSized.alt")}
                                        />{" "}
                                        {t("banner.features.pocketSized.text")}
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2022/07/WIFI-enable-icon.png"
                                            width={20}
                                            height={20}
                                            alt={t("banner.features.wifi.alt")}
                                        />{" "}
                                        {t("banner.features.wifi.text")}
                                    </li>
                                </ul>
                                <form
                                    className="cart"
                                    action="https://www.pranaair.com/product/pocket-co2-monitor/"
                                    encType="multipart/form-data"
                                    method="post"
                                >
                                    <button
                                        className="single_add_to_cart_button button alt banner-btn"
                                        name="add-to-cart"
                                        type="submit"
                                        value="52265"
                                    >
                                        {t("banner.buyButton")}{" "}
                                        <img
                                            decoding="async"
                                            src="https://www.pranaair.com/wp-content/uploads/2023/09/Vector-3.png"
                                            alt={t("banner.buyButton.iconAlt")}
                                        />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 right_pocket_Image">{/* Right side image is in the background */}</div>
                    </div>
                </div>
            </section>

            {/* Qualitative Features Section */}
            <section className="qualitytative_features_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 features_left_box">
                            <div className="title_heading circle_heading">
                                <span style={{ fontSize: "24pt" }}>{t("qualitativeFeatures.heading.first")}</span>
                                <sup>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                                        width={24}
                                        height={24}
                                        alt={t("common.logoAlt")}
                                    />
                                </sup>
                                <span style={{ fontSize: "24pt" }}>{t("qualitativeFeatures.heading.second")}</span>
                            </div>
                            <span style={{ fontSize: "15pt" }}>{t("qualitativeFeatures.description")}</span>
                        </div>
                        <div className="col-md-6 border_left_line">
                            <div className="features_detail_box">
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2022/07/real-time-co2-levels.png"
                                            width={109}
                                            height={109}
                                            alt={t("qualitativeFeatures.features.realTime.alt")}
                                        />
                                        <span className="fetures_name" style={{ fontSize: "12pt" }}>
                                            {t("qualitativeFeatures.features.realTime.text")}
                                        </span>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2022/07/wifi.png"
                                            width={109}
                                            height={109}
                                            alt={t("qualitativeFeatures.features.wifi.alt")}
                                        />
                                        <span className="fetures_name" style={{ fontSize: "12pt" }}>
                                            {t("qualitativeFeatures.features.wifi.text")}
                                        </span>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2022/07/mobile-app.png"
                                            width={109}
                                            height={109}
                                            alt={t("qualitativeFeatures.features.mobileApp.alt")}
                                        />
                                        <span className="fetures_name" style={{ fontSize: "12pt" }}>
                                            {t("qualitativeFeatures.features.mobileApp.text")}
                                        </span>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2022/07/portable-monitor.png"
                                            width={109}
                                            height={109}
                                            alt={t("qualitativeFeatures.features.portable.alt")}
                                        />
                                        <span className="fetures_name" style={{ fontSize: "12pt" }}>
                                            {t("qualitativeFeatures.features.portable.text")}
                                        </span>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2022/07/lcd-display.png"
                                            width={109}
                                            height={109}
                                            alt={t("qualitativeFeatures.features.lcd.alt")}
                                        />
                                        <span className="fetures_name" style={{ fontSize: "12pt" }}>
                                            {t("qualitativeFeatures.features.lcd.text")}
                                        </span>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2022/07/battery.png"
                                            width={109}
                                            height={109}
                                            alt={t("qualitativeFeatures.features.battery.alt")}
                                        />
                                        <span className="fetures_name" style={{ fontSize: "12pt" }}>
                                            {t("qualitativeFeatures.features.battery.text")}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance Section */}
            <section className="qualitytative_features_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 text-center">
                            <p style={{ textAlign: "center" }}>
                                <em>
                                    <span style={{ fontSize: "17pt" }}>
                                        <sup>
                                            <sub>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/07/compliance-icon.png"
                                                    width={30}
                                                    height={30}
                                                    alt={t("compliance.iconAlt")}
                                                />
                                            </sub>{" "}
                                            {t("compliance.text.prefix")}{" "}
                                            <span style={{ color: "#4cae51" }}>
                                                <strong>{t("compliance.text.highlight1")}</strong>
                                            </span>{" "}
                                            {t("compliance.text.conjunction")}{" "}
                                            <span style={{ color: "#4cae51" }}>
                                                <strong>{t("compliance.text.highlight2")}</strong>
                                            </span>{" "}
                                            {t("compliance.text.suffix")}
                                        </sup>
                                    </span>
                                </em>
                            </p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </section>

            {/* Portable Monitor Image */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="pocket_portable_box">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2022/08/portable-pocket-co2-monitor.jpeg"
                                    width={1200}
                                    height={400}
                                    alt={t("portableMonitor.imageAlt")}
                                    className="Image-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Multiple User Interfaces Section */}
            <section className="bottom_tab_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="multi-data-content">
                                <h2 className="title_heading">
                                    {t("userInterfaces.heading")}
                                    <span className="heading-leaf">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                                            width={24}
                                            height={24}
                                            alt={t("common.logoAlt")}
                                        />
                                    </span>
                                </h2>
                                <p>{t("userInterfaces.description")}</p>
                            </div>
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active tablinks"
                                        id="comonitora-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Comonitora"
                                        type="button"
                                        role="tab"
                                        aria-controls="Comonitora"
                                        aria-selected="true"
                                    >
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/08/face-number-icon.png"
                                                    width={30}
                                                    height={30}
                                                    alt={t("userInterfaces.tabs.faceNumber.iconAlt")}
                                                />
                                            </li>
                                            <li>
                                                <h3>{t("userInterfaces.tabs.faceNumber.title")}</h3>
                                                <p>{t("userInterfaces.tabs.faceNumber.description")}</p>
                                            </li>
                                        </ul>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link tablinks"
                                        id="comonitorb-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Comonitorb"
                                        type="button"
                                        role="tab"
                                        aria-controls="Comonitorb"
                                        aria-selected="false"
                                    >
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/08/number-screen.png"
                                                    width={30}
                                                    height={30}
                                                    alt={t("userInterfaces.tabs.numberScreen.iconAlt")}
                                                />
                                            </li>
                                            <li>
                                                <h3>{t("userInterfaces.tabs.numberScreen.title")}</h3>
                                                <p>{t("userInterfaces.tabs.numberScreen.description")}</p>
                                            </li>
                                        </ul>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link tablinks"
                                        id="comonitorc-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Comonitorc"
                                        type="button"
                                        role="tab"
                                        aria-controls="Comonitorc"
                                        aria-selected="false"
                                    >
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/08/face-screen.png"
                                                    width={30}
                                                    height={30}
                                                    alt={t("userInterfaces.tabs.faceScreen.iconAlt")}
                                                />
                                            </li>
                                            <li>
                                                <h3>{t("userInterfaces.tabs.faceScreen.title")}</h3>
                                                <p>{t("userInterfaces.tabs.faceScreen.description")}</p>
                                            </li>
                                        </ul>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link tablinks"
                                        id="comonitord-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Comonitord"
                                        type="button"
                                        role="tab"
                                        aria-controls="Comonitord"
                                        aria-selected="false"
                                    >
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/08/graphic-screen.png"
                                                    width={30}
                                                    height={30}
                                                    alt={t("userInterfaces.tabs.graphScreen.iconAlt")}
                                                />
                                            </li>
                                            <li>
                                                <h3>{t("userInterfaces.tabs.graphScreen.title")}</h3>
                                                <p>{t("userInterfaces.tabs.graphScreen.description")}</p>
                                            </li>
                                        </ul>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <div className="tab-content">
                                <div
                                    id="Comonitora"
                                    className="tab-pane fade show active"
                                    role="tabpanel"
                                    aria-labelledby="comonitora-tab"
                                >
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/face-number-co2-monitor.png"
                                        width={400}
                                        height={400}
                                        alt={t("userInterfaces.tabContent.faceNumber.imageAlt")}
                                    />
                                </div>
                                <div id="Comonitorb" className="tab-pane fade" role="tabpanel" aria-labelledby="comonitorb-tab">
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/number-co2-monitor.png"
                                        width={400}
                                        height={400}
                                        alt={t("userInterfaces.tabContent.numberScreen.imageAlt")}
                                    />
                                </div>
                                <div id="Comonitorc" className="tab-pane fade" role="tabpanel" aria-labelledby="comonitorc-tab">
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/face-co2-monitor.png"
                                        width={400}
                                        height={400}
                                        alt={t("userInterfaces.tabContent.faceScreen.imageAlt")}
                                    />
                                </div>
                                <div id="Comonitord" className="tab-pane fade" role="tabpanel" aria-labelledby="comonitord-tab">
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/graph-co2-monitor.png"
                                        width={400}
                                        height={400}
                                        alt={t("userInterfaces.tabContent.graphScreen.imageAlt")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Remote Data Accessibility */}
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="remote-data-para">
                                <h2 className="title_heading circle_heading data_heading">
                                    {t("remoteData.heading.first")}
                                    <sup>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                                            width={24}
                                            height={24}
                                            alt={t("common.logoAlt")}
                                        />
                                    </sup>
                                    {t("remoteData.heading.second")}
                                </h2>
                                <p>{t("remoteData.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Remote Data Images */}
            <section className="remote-data-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="remote-data-iamges">
                                <ul>
                                    <li className="image-box-first">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/remote-data-co2-monitor.png"
                                            width={200}
                                            height={200}
                                            alt={t("remoteData.images.co2Monitor.alt")}
                                            className="screen-monitor"
                                        />
                                        <h5>{t("remoteData.images.co2Monitor.text")}</h5>
                                    </li>
                                    <li className="image-box">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/wifi-image.png"
                                            width={100}
                                            height={100}
                                            alt={t("remoteData.images.wifi.alt")}
                                            className="wife"
                                        />
                                        <h5>{t("remoteData.images.wifi.text")}</h5>
                                    </li>
                                    <li className="image-box">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/aqi-cloud.png"
                                            width={135}
                                            height={135}
                                            alt={t("remoteData.images.aqiCloud.alt")}
                                            className="aqi-cloud"
                                        />
                                        <h5>{t("remoteData.images.aqiCloud.text")}</h5>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/mobile-app.png"
                                            width={220}
                                            height={220}
                                            alt={t("remoteData.images.mobileApp.alt")}
                                            className="mob-app"
                                        />
                                        <h5>{t("remoteData.images.mobileApp.text")}</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Key Features */}
            <section className="app-key-features">
                <div className="container">
                    <div className="product-tabs">
                        <ul className="nav nav-tabs" id="productTabs" role="tablist">
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
                                    {t("appKeyFeatures.tabs.aqiApp")}
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
                                    {t("appKeyFeatures.tabs.aqiDashboard")}
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
                                    {t("appKeyFeatures.tabs.aqiTvApp")}
                                </button>
                            </li>
                        </ul>

                        <div className="tab-content" id="productTabsContent">
                            <div className="tab-pane fade show active" id="handheld" role="tabpanel" aria-labelledby="handheld-tab">
                                <div className="row">
                                    <div className="aqi-dashboard-para">
                                        <p>{t("appKeyFeatures.aqiApp.description")}</p>
                                    </div>
                                    <div className="tab-card row">
                                        <div className="col-md-6">
                                            <ul className="application-tabs nav nav-tabs" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className="app-tab nav-link active"
                                                        id="tab1-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#tab1Content"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="tab1Content"
                                                        aria-selected="true"
                                                    >
                                                        {t("appKeyFeatures.aqiApp.features.healthAdvice.title")}
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className="app-tab nav-link"
                                                        id="tab2-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#tab2Content"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="tab2Content"
                                                        aria-selected="false"
                                                    >
                                                        {t("appKeyFeatures.aqiApp.features.ventilationScore.title")}
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className="app-tab nav-link"
                                                        id="tab3-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#tab3Content"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="tab3Content"
                                                        aria-selected="false"
                                                    >
                                                        {t("appKeyFeatures.aqiApp.features.historicData.title")}
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className="app-tab nav-link"
                                                        id="tab4-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#tab4Content"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="tab4Content"
                                                        aria-selected="false"
                                                    >
                                                        {t("appKeyFeatures.aqiApp.features.monthlyInsight.title")}
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="app-key-feature-mobile-bg">
                                                <div className="tab-content">
                                                    <ul>
                                                        <li data-tab="tab1">
                                                            <div
                                                                id="tab1Content"
                                                                className="tab-pane fade show active"
                                                                role="tabpanel"
                                                                aria-labelledby="tab1-tab"
                                                            >
                                                                <p>{t("appKeyFeatures.aqiApp.features.healthAdvice.description")}</p>
                                                            </div>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/08/health-advice-of-co2-level.webp"
                                                                width={220}
                                                                height={220}
                                                                alt={t("appKeyFeatures.aqiApp.features.healthAdvice.imageAlt")}
                                                                className="br-clr helth-advice-Image active"
                                                            />
                                                        </li>
                                                        <li data-tab="tab2">
                                                            <div
                                                                id="tab2Content"
                                                                className="tab-pane fade"
                                                                role="tabpanel"
                                                                aria-labelledby="tab2-tab"
                                                            >
                                                                <p>{t("appKeyFeatures.aqiApp.features.ventilationScore.description")}</p>
                                                            </div>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/08/vantilation-score-data.png"
                                                                width={220}
                                                                height={220}
                                                                alt={t("appKeyFeatures.aqiApp.features.ventilationScore.imageAlt")}
                                                                className="br-clr vantilation-score-Image"
                                                            />
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li data-tab="tab3">
                                                            <div
                                                                id="tab3Content"
                                                                className="tab-pane fade"
                                                                role="tabpanel"
                                                                aria-labelledby="tab3-tab"
                                                            >
                                                                <p>{t("appKeyFeatures.aqiApp.features.historicData.description")}</p>
                                                            </div>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/08/pocket-co2-monitor-history-data.webp"
                                                                width={220}
                                                                height={220}
                                                                alt={t("appKeyFeatures.aqiApp.features.historicData.imageAlt")}
                                                                className="br-clr historic-data-Image"
                                                            />
                                                        </li>
                                                        <li data-tab="tab4">
                                                            <div
                                                                id="tab4Content"
                                                                className="tab-pane fade"
                                                                role="tabpanel"
                                                                aria-labelledby="tab4-tab"
                                                            >
                                                                <p>{t("appKeyFeatures.aqiApp.features.monthlyInsight.description")}</p>
                                                            </div>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/08/monthly-insight-data.png"
                                                                width={220}
                                                                height={220}
                                                                alt={t("appKeyFeatures.aqiApp.features.monthlyInsight.imageAlt")}
                                                                className="br-clr monthly-insight-Image"
                                                            />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="indoor" role="tabpanel" aria-labelledby="indoor-tab">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="dashboard-data">
                                            <ul>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/real-time-co2-level.png"
                                                        alt={t("appKeyFeatures.aqiDashboard.features.realTime.imageAlt")}
                                                        width={100}
                                                        height={100}
                                                    />
                                                    <h5>{t("appKeyFeatures.aqiDashboard.features.realTime.title")}</h5>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-data.png"
                                                        alt={t("appKeyFeatures.aqiDashboard.features.insightful.imageAlt")}
                                                        width={100}
                                                        height={100}
                                                    />
                                                    <h5>{t("appKeyFeatures.aqiDashboard.features.insightful.title")}</h5>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-co2-graph-level.png"
                                                        alt={t("appKeyFeatures.aqiDashboard.features.historic.imageAlt")}
                                                        width={100}
                                                        height={100}
                                                    />
                                                    <h5>{t("appKeyFeatures.aqiDashboard.features.historic.title")}</h5>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/health-recommendation.png"
                                                        alt={t("appKeyFeatures.aqiDashboard.features.healthRecommendations.imageAlt")}
                                                        width={100}
                                                        height={100}
                                                    />
                                                    <h5>{t("appKeyFeatures.aqiDashboard.features.healthRecommendations.title")}</h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <Image
                                            className="dashborad-Image"
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-web-dashboard-for-pocket-co2-monitor.png"
                                            alt={t("appKeyFeatures.aqiDashboard.dashboardImageAlt")}
                                            width={300}
                                            height={200}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="outdoor" role="tabpanel" aria-labelledby="outdoor-tab">
                                <div className="aqi-dashboard-para">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="dashboard-data">
                                                <ul>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/real-time-co2-level.png"
                                                            alt={t("appKeyFeatures.aqiTvApp.features.realTime.imageAlt")}
                                                            width={100}
                                                            height={100}
                                                        />
                                                        <h5>{t("appKeyFeatures.aqiTvApp.features.realTime.title")}</h5>
                                                    </li>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-data.png"
                                                            alt={t("appKeyFeatures.aqiTvApp.features.historic.imageAlt")}
                                                            width={100}
                                                            height={100}
                                                        />
                                                        <h5>{t("appKeyFeatures.aqiTvApp.features.historic.title")}</h5>
                                                    </li>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/control-tv-app-form-mobile.png"
                                                            alt={t("appKeyFeatures.aqiTvApp.features.control.imageAlt")}
                                                            width={100}
                                                            height={100}
                                                        />
                                                        <h5>{t("appKeyFeatures.aqiTvApp.features.control.title")}</h5>
                                                    </li>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/indicate-valid-score-co2.png"
                                                            alt={t("appKeyFeatures.aqiTvApp.features.ventilationScore.imageAlt")}
                                                            width={100}
                                                            height={100}
                                                        />
                                                        <h5>{t("appKeyFeatures.aqiTvApp.features.ventilationScore.title")}</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <Image
                                                className="dashborad-Image tv-Image"
                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-tv-app-pocket-co2-monitor.png"
                                                alt={t("appKeyFeatures.aqiTvApp.dashboardImageAlt")}
                                                width={300}
                                                height={200}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Connectivity Section */}
            <section className="data-connectivity-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="connectivity-content">
                                <h2 className="connectivity-title">
                                    {t("dataConnectivity.title")}
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                                        width={20}
                                        height={20}
                                        alt={t("common.logoAlt")}
                                        className="title-icon"
                                    />
                                </h2>
                                <h3 className="connectivity-subtitle">{t("dataConnectivity.subtitle")}</h3>

                                <ul className="connectivity-steps nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="connectivity-step nav-link active"
                                            id="step1-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#step1Content"
                                            type="button"
                                            role="tab"
                                            aria-controls="step1Content"
                                            aria-selected="true"
                                        >
                                            <div className="step-icon">
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/08/install.png.png"
                                                    alt={t("dataConnectivity.steps.install.iconAlt")}
                                                    width={20}
                                                    height={20}
                                                />
                                            </div>
                                            <div className="step-content">
                                                <h4 className="step-title">{t("dataConnectivity.steps.install.title")}</h4>
                                                <p className="step-description">{t("dataConnectivity.steps.install.description")}</p>
                                            </div>
                                        </button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="connectivity-step nav-link"
                                            id="step2-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#step2Content"
                                            type="button"
                                            role="tab"
                                            aria-controls="step2Content"
                                            aria-selected="false"
                                        >
                                            <div className="step-icon">
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/09/connect.png"
                                                    width={20}
                                                    height={20}
                                                    alt={t("dataConnectivity.steps.connect.iconAlt")}
                                                />
                                            </div>
                                            <div className="step-content">
                                                <h4 className="step-title">{t("dataConnectivity.steps.connect.title")}</h4>
                                                <p className="step-description">{t("dataConnectivity.steps.connect.description")}</p>
                                            </div>
                                        </button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="connectivity-step nav-link"
                                            id="step3-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#step3Content"
                                            type="button"
                                            role="tab"
                                            aria-controls="step3Content"
                                            aria-selected="false"
                                        >
                                            <div className="step-icon">
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/09/scan-qr-code.png"
                                                    width={20}
                                                    height={20}
                                                    alt={t("dataConnectivity.steps.scan.iconAlt")}
                                                />
                                            </div>
                                            <div className="step-content">
                                                <h4 className="step-title">{t("dataConnectivity.steps.scan.title")}</h4>
                                                <p className="step-description">{t("dataConnectivity.steps.scan.description")}</p>
                                            </div>
                                        </button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="connectivity-step nav-link"
                                            id="step4-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#step4Content"
                                            type="button"
                                            role="tab"
                                            aria-controls="step4Content"
                                            aria-selected="false"
                                        >
                                            <div className="step-icon">
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/09/data.png"
                                                    alt={t("dataConnectivity.steps.data.iconAlt")}
                                                    width={20}
                                                    height={20}
                                                />
                                            </div>
                                            <div className="step-content">
                                                <h4 className="step-title">{t("dataConnectivity.steps.data.title")}</h4>
                                                <p className="step-description">{t("dataConnectivity.steps.data.description")}</p>
                                            </div>
                                        </button>
                                    </li>
                                </ul>

                                <div className="download-app-section">
                                    <h3 className="download-title">
                                        {t("dataConnectivity.download.titlePrefix")}{" "}
                                        <span className="highlight-text">{t("dataConnectivity.download.titleHighlight")}</span>
                                    </h3>
                                    <p className="download-description">{t("dataConnectivity.download.description")}</p>
                                    <div className="app-store-buttons">
                                        <a
                                            href="https://play.google.com/store/apps/details?id=com.aqi.data"
                                            className="app-store-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                src="https://www.pranaair.com/wp-content/uploads/2021/03/google-play-store.png"
                                                alt={t("dataConnectivity.download.googlePlayAlt")}
                                                width={20}
                                                height={20}
                                            />
                                        </a>
                                        <a
                                            href="https://apps.apple.com/tt/app/airqualityindex-aqi/id1439684571"
                                            className="app-store-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                src="https://www.pranaair.com/wp-content/uploads/2021/02/appstore.png"
                                                alt={t("dataConnectivity.download.appStoreAlt")}
                                                width={20}
                                                height={20}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="app-preview">
                                <div className="app-image-container tab-content">
                                    <div
                                        id="step1Content"
                                        className="tab-pane fade show active"
                                        role="tabpanel"
                                        aria-labelledby="step1-tab"
                                    >
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2022/06/1.png"
                                            alt={t("dataConnectivity.steps.install.previewAlt")}
                                            width={600}
                                            height={400}
                                            data-step="1"
                                        />
                                    </div>
                                    <div id="step2Content" className="tab-pane fade" role="tabpanel" aria-labelledby="step2-tab">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/09/connect-device-with-our-app.png"
                                            alt={t("dataConnectivity.steps.connect.previewAlt")}
                                            width={600}
                                            height={400}
                                            data-step="2"
                                        />
                                    </div>
                                    <div id="step3Content" className="tab-pane fade" role="tabpanel" aria-labelledby="step3-tab">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/09/scan-qr-and-configure-with-wifi.png"
                                            alt={t("dataConnectivity.steps.scan.previewAlt")}
                                            width={600}
                                            height={400}
                                            data-step="3"
                                        />
                                    </div>
                                    <div id="step4Content" className="tab-pane fade" role="tabpanel" aria-labelledby="step4-tab">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/09/insightful-data.png"
                                            alt={t("dataConnectivity.steps.data.previewAlt")}
                                            width={600}
                                            height={400}
                                            data-step="4"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Slider */}
            <section className="pocket_flex_slider">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 product-slider-first">
                            <div className="tab-content">
                                <div
                                    id="MonitorTab1"
                                    className="tab-pane fade show active"
                                    role="tabpanel"
                                    aria-labelledby="monitortab1-tab"
                                >
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-co2-monitor-face-and-number-screen.png"
                                        width={400}
                                        height={400}
                                        alt={t("productSlider.images.frontView.alt")}
                                    />
                                </div>
                                <div id="MonitorTab2" className="tab-pane fade" role="tabpanel" aria-labelledby="monitortab2-tab">
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2023/08/co2-monitor-left-view.png"
                                        width={400}
                                        height={400}
                                        alt={t("productSlider.images.leftView.alt")}
                                    />
                                </div>
                                <div id="MonitorTab3" className="tab-pane fade" role="tabpanel" aria-labelledby="monitortab3-tab">
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2023/08/co2-monitor-side-view.png"
                                        width={400}
                                        height={400}
                                        alt={t("productSlider.images.sideView.alt")}
                                    />
                                </div>
                            </div>
                            <ul className="nav nav-tabs new-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active new-tablinks"
                                        id="monitortab1-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#MonitorTab1"
                                        type="button"
                                        role="tab"
                                        aria-controls="MonitorTab1"
                                        aria-selected="true"
                                    >
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-co2-monitor-face-and-number-screen.png"
                                            width={80}
                                            height={80}
                                            alt={t("productSlider.images.frontView.thumbAlt")}
                                        />
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link new-tablinks"
                                        id="monitortab2-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#MonitorTab2"
                                        type="button"
                                        role="tab"
                                        aria-controls="MonitorTab2"
                                        aria-selected="false"
                                    >
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/co2-monitor-left-view.png"
                                            width={80}
                                            height={80}
                                            alt={t("productSlider.images.leftView.thumbAlt")}
                                        />
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link new-tablinks"
                                        id="monitortab3-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#MonitorTab3"
                                        type="button"
                                        role="tab"
                                        aria-controls="MonitorTab3"
                                        aria-selected="false"
                                    >
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/co2-monitor-side-view.png"
                                            width={80}
                                            height={80}
                                            alt={t("productSlider.images.sideView.thumbAlt")}
                                        />
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 pocket_slider_content">
                            <h2 className="title_heading circle_heading">
                                {t("productSlider.heading.first")}
                                <sup>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                                        width={24}
                                        height={24}
                                        alt={t("common.logoAlt")}
                                    />
                                </sup>
                                {t("productSlider.heading.second")}
                            </h2>
                            <p>{t("productSlider.description")}</p>
                            <div className="introduce_features clearfix">
                                <ul>
                                    <li>
                                        <span className="highlight_feature">{t("productSlider.features.charging.highlight")}</span>
                                        {t("productSlider.features.charging.text")}
                                    </li>
                                    <li>
                                        <span className="highlight_feature">{t("productSlider.features.co2Level.highlight")}</span>
                                        {t("productSlider.features.co2Level.text")}
                                    </li>
                                    <li>
                                        <span className="highlight_feature">{t("productSlider.features.battery.highlight")}</span>
                                        {t("productSlider.features.battery.text")}
                                    </li>
                                    <li>
                                        <span className="highlight_feature">{t("productSlider.features.size.highlight")}</span>
                                        {t("productSlider.features.size.text")}
                                    </li>
                                    <li>
                                        <span className="highlight_feature">{t("productSlider.features.sensor.highlight")}</span>
                                        {t("productSlider.features.sensor.text")}
                                    </li>
                                    <li>
                                        <span className="highlight_feature">{t("productSlider.features.wifi.highlight")}</span>
                                        {t("productSlider.features.wifi.text")}
                                    </li>
                                </ul>
                            </div>
                            <div className="introduce_button">
                                <Link
                                    href="https://www.pranaair.com/wp-content/uploads/2023/10/Prana-Air-Pocket-CO2-Air-Quality-Monitor-Brochure.pdf"
                                    className="pocket_buy_btn black_download_brochure"
                                >
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png"
                                        width={20}
                                        height={20}
                                        alt={t("productSlider.downloads.brochure.iconAlt")}
                                    />{" "}
                                    {t("productSlider.downloads.brochure.text")}
                                </Link>
                                <Link
                                    href="https://www.pranaair.com/wp-content/uploads/2024/10/Prana-air-Pocket-CO2-air-quality-monitor-manual.pdf"
                                    className="pocket_buy_btn black_download_brochure"
                                >
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png"
                                        width={20}
                                        height={20}
                                        alt={t("productSlider.downloads.manual.iconAlt")}
                                    />{" "}
                                    {t("productSlider.downloads.manual.text")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="tech-spec-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pocket-air-sec">
                            <div className="tech-spec-heading">
                                <h2 className="title_heading circle_heading data_heading">
                                    {t("technicalSpecs.heading")}
                                    <sup>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                                            width={24}
                                            height={24}
                                            alt={t("common.logoAlt")}
                                        />
                                    </sup>
                                </h2>
                                <p>{t("technicalSpecs.subheading")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications Details */}
            <section className="tech-spec-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pocket-air-sec">
                            <div className="tech-spec">
                                <div className="tech-spec-colm">
                                    <ul>
                                        <li>
                                            <h6>{t("technicalSpecs.details.productName.label")}</h6>
                                            <h5>{t("technicalSpecs.details.productName.value")}</h5>
                                        </li>
                                        <li className="tech-spec-row-bg">
                                            <h6>{t("technicalSpecs.details.sensor.label")}</h6>
                                            <h5>{t("technicalSpecs.details.sensor.value")}</h5>
                                        </li>
                                        <li>
                                            <h6>{t("technicalSpecs.details.dimension.label")}</h6>
                                            <h5>{t("technicalSpecs.details.dimension.value")}</h5>
                                        </li>
                                        <li className="tech-spec-row-bg">
                                            <h6>{t("technicalSpecs.details.powerSupply.label")}</h6>
                                            <h5>{t("technicalSpecs.details.powerSupply.value")}</h5>
                                        </li>
                                        <li>
                                            <h6>{t("technicalSpecs.details.connectivity.label")}</h6>
                                            <h5>{t("technicalSpecs.details.connectivity.value")}</h5>
                                        </li>
                                        <li className="tech-spec-row-bg">
                                            <h6>{t("technicalSpecs.details.mobileApp.label")}</h6>
                                            <h5>{t("technicalSpecs.details.mobileApp.value")}</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tech-spec">
                                <div className="tech-spec-colm">
                                    <ul>
                                        <li>
                                            <h6>{t("technicalSpecs.details.range.label")}</h6>
                                            <h5>{t("technicalSpecs.details.range.value")}</h5>
                                        </li>
                                        <li className="tech-spec-row-bg">
                                            <h6>{t("technicalSpecs.details.temperature.label")}</h6>
                                            <h5>{t("technicalSpecs.details.temperature.value")}</h5>
                                        </li>
                                        <li>
                                            <h6>{t("technicalSpecs.details.weight.label")}</h6>
                                            <h5>{t("technicalSpecs.details.weight.value")}</h5>
                                        </li>
                                        <li className="tech-spec-row-bg">
                                            <h6>{t("technicalSpecs.details.display.label")}</h6>
                                            <h5>{t("technicalSpecs.details.display.value")}</h5>
                                        </li>
                                        <li>
                                            <h6>{t("technicalSpecs.details.dataStorage.label")}</h6>
                                            <h5>{t("technicalSpecs.details.dataStorage.value")}</h5>
                                        </li>
                                        <li className="tech-spec-row-bg">
                                            <h6>{t("technicalSpecs.details.battery.label")}</h6>
                                            <h5>{t("technicalSpecs.details.battery.value")}</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NDIR Technology Section */}
            <section className="ndir-techo-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ndir-sensor-Image">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/ndir-sensor-for-pocket-co2-monitor.png"
                                    width={600}
                                    height={600}
                                    alt={t("ndirTechnology.imageAlt")}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ndir-sensor-taxt">
                                <h2>
                                    <span className="ndir">{t("ndirTechnology.heading.highlight")}</span>{" "}
                                    {t("ndirTechnology.heading.text")}
                                </h2>
                                <h3>{t("ndirTechnology.subheading")}</h3>
                                <p>{t("ndirTechnology.description")}</p>
                                <Link href="https://www.pranaair.com/air-quality-sensor/carbon-dioxide-co2-sensor/">
                                    {t("ndirTechnology.linkText")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CO2 Health Index */}
            <section className="quality_range_section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="introducing_box text-center">
                                <h2 className="title_heading">
                                    {t("co2HealthIndex.heading")}
                                    <sup>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                                            width={24}
                                            height={24}
                                            alt={t("common.logoAlt")}
                                        />
                                    </sup>
                                </h2>
                                <span style={{ fontSize: "13pt" }}>
                                    {t("co2HealthIndex.description")}
                                </span>
                                <p>
                                    <span style={{ fontSize: "13pt" }}>
                                        <Link href="/what-is-carbon-dioxide-co2/">
                                            {t("co2HealthIndex.linkText")}
                                        </Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <RangeMonitorPage rangeData={rangeData} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="introducing_box text-center">
                                <h2 className="title_heading">
                                    {t("applications.heading")}
                                    <sup>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                                            width={24}
                                            height={24}
                                            alt={t("common.logoAlt")}
                                        />
                                    </sup>
                                </h2>
                                <span style={{ fontSize: "14pt" }}>{t("applications.description")}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="app-tabs">
                            <ul className="nav nav-tabs" id="appTabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="home-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#home"
                                        type="button"
                                        role="tab"
                                        aria-controls="home"
                                        aria-selected="true"
                                    >
                                        {t("applications.tabs.home")}
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="school-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#school"
                                        type="button"
                                        role="tab"
                                        aria-controls="school"
                                        aria-selected="false"
                                    >
                                        {t("applications.tabs.school")}
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="office-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#office"
                                        type="button"
                                        role="tab"
                                        aria-controls="office"
                                        aria-selected="false"
                                    >
                                        {t("applications.tabs.office")}
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content" id="appTabsContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tab_left_Image">
                                                <span className="range_btn_Image">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-tag.png"
                                                        width={30}
                                                        height={30}
                                                        alt={t("applications.home.moderate.tagAlt")}
                                                    />
                                                </span>
                                                <Image
                                                    decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-home.jpg"
                                                    width={300}
                                                    height={300}
                                                    alt={t("applications.home.moderate.imageAlt")}
                                                />
                                                <span className="tab_monitor_device">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/face-number-co2-monitor.png"
                                                        width={300}
                                                        height={300}
                                                        alt={t("applications.home.moderate.monitorAlt")}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p>
                                                    <span className="application_no">{t("applications.home.moderate.number")}</span>
                                                </p>
                                                <h3 style={{ textAlign: "left", color: "#e8c92e" }}>{t("applications.home.moderate.title")}</h3>
                                                <p style={{ textAlign: "justify", fontSize: "13pt" }}>
                                                    {t("applications.home.moderate.description")}
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt={t("applications.home.moderate.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.home.moderate.range")}
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt={t("applications.home.moderate.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.home.moderate.timeFrame")}
                                                </p>
                                                <p style={{ fontSize: "13pt", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt={t("applications.home.moderate.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.home.moderate.healthImpacts")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p style={{ textAlign: "right" }}>
                                                    <span className="application_no">{t("applications.home.good.number")}</span>
                                                </p>
                                                <h3 style={{ textAlign: "right", color: "#33c262" }}>{t("applications.home.good.title")}</h3>
                                                <p style={{ textAlign: "right", fontSize: "13pt" }}>
                                                    {t("applications.home.good.description")}
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    {t("applications.home.good.range")}{" "}
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt={t("applications.home.good.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    {t("applications.home.good.timeFrame")}{" "}
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt={t("applications.home.good.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", color: "#1c1b1b" }}>
                                                    {t("applications.home.good.healthImpacts")}{" "}
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt={t("applications.home.good.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="tab_left_Image">
                                                <span className="range_btn_Image">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/good-tag.png"
                                                        width={30}
                                                        height={30}
                                                        alt={t("applications.home.good.tagAlt")}
                                                    />
                                                </span>
                                                <Image
                                                    decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/good-home.jpg"
                                                    width={300}
                                                    height={300}
                                                    alt={t("applications.home.good.imageAlt")}
                                                />
                                                <span className="tab_monitor_device">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/co2-monitor-in-home-device.png"
                                                        width={300}
                                                        height={300}
                                                        alt={t("applications.home.good.monitorAlt")}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tab_left_Image">
                                                <span className="range_btn_Image">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-tag.png"
                                                        width={30}
                                                        height={30}
                                                        alt={t("applications.home.bad.tagAlt")}
                                                    />
                                                </span>
                                                <Image
                                                    decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-home.jpg"
                                                    width={300}
                                                    height={300}
                                                    alt={t("applications.home.bad.imageAlt")}
                                                />
                                                <span className="tab_monitor_device">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/remote-data-co2-monitor.png"
                                                        width={300}
                                                        height={300}
                                                        alt={t("applications.home.bad.monitorAlt")}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p>
                                                    <span className="application_no">{t("applications.home.bad.number")}</span>
                                                </p>
                                                <h3 style={{ textAlign: "left", color: "#db4746" }}>{t("applications.home.bad.title")}</h3>
                                                <p style={{ textAlign: "justify", fontSize: "13pt" }}>
                                                    {t("applications.home.bad.description")}
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt={t("applications.home.bad.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.home.bad.range")}
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt={t("applications.home.bad.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.home.bad.timeFrame")}
                                                </p>
                                                <p style={{ fontSize: "13pt", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt={t("applications.home.bad.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.home.bad.healthImpacts")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="school" role="tabpanel" aria-labelledby="school-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tab_left_Image">
                                                <span className="range_btn_Image">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-tag.png"
                                                        width={30}
                                                        height={30}
                                                        alt={t("applications.school.moderate.tagAlt")}
                                                    />
                                                </span>
                                                <Image
                                                    decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-classroom.jpg"
                                                    width={300}
                                                    height={300}
                                                    alt={t("applications.school.moderate.imageAlt")}
                                                />
                                                <span className="tab_monitor_device">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-monitor.png"
                                                        width={300}
                                                        height={300}
                                                        alt={t("applications.school.moderate.monitorAlt")}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p>
                                                    <span className="application_no">{t("applications.school.moderate.number")}</span>
                                                </p>
                                                <h3 style={{ textAlign: "left", color: "#e8c92e" }}>{t("applications.school.moderate.title")}</h3>
                                                <p style={{ textAlign: "justify", fontSize: "13pt" }}>
                                                    {t("applications.school.moderate.description")}
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt={t("applications.school.moderate.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.school.moderate.range")}
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt={t("applications.school.moderate.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.school.moderate.timeFrame")}
                                                </p>
                                                <p style={{ fontSize: "13pt", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt={t("applications.school.moderate.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.school.moderate.healthImpacts")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p style={{ textAlign: "right" }}>
                                                    <span className="application_no">{t("applications.school.good.number")}</span>
                                                </p>
                                                <h3 style={{ textAlign: "right", color: "#33c262" }}>{t("applications.school.good.title")}</h3>
                                                <p style={{ textAlign: "right", fontSize: "13pt" }}>
                                                    {t("applications.school.good.description")}
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    {t("applications.school.good.range")}{" "}
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt={t("applications.school.good.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    {t("applications.school.good.timeFrame")}{" "}
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt={t("applications.school.good.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", color: "#1c1b1b" }}>
                                                    {t("applications.school.good.healthImpacts")}{" "}
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt={t("applications.school.good.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="tab_left_Image">
                                                <span className="range_btn_Image">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-tag.png"
                                                        width={30}
                                                        height={30}
                                                        alt={t("applications.school.good.tagAlt")}
                                                    />
                                                </span>
                                                <Image
                                                    decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-classroom-1.jpg"
                                                    width={300}
                                                    height={300}
                                                    alt={t("applications.school.good.imageAlt")}
                                                />
                                                <span className="tab_monitor_device">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-monitor.png"
                                                        width={300}
                                                        height={300}
                                                        alt={t("applications.school.good.monitorAlt")}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tab_left_Image">
                                                <span className="range_btn_Image">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/good-tag.png"
                                                        width={30}
                                                        height={30}
                                                        alt={t("applications.school.bad.tagAlt")}
                                                    />
                                                </span>
                                                <Image
                                                    decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/good-classroom.jpg"
                                                    width={300}
                                                    height={300}
                                                    alt={t("applications.school.bad.imageAlt")}
                                                />
                                                <span className="tab_monitor_device">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/good-monitor.png"
                                                        width={300}
                                                        height={300}
                                                        alt={t("applications.school.bad.monitorAlt")}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p>
                                                    <span className="application_no">{t("applications.school.bad.number")}</span>
                                                </p>
                                                <h3 style={{ textAlign: "left", color: "#db4746" }}>{t("applications.school.bad.title")}</h3>
                                                <p style={{ textAlign: "justify", fontSize: "13pt" }}>
                                                    {t("applications.school.bad.description")}
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt={t("applications.school.bad.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.school.bad.range")}
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt={t("applications.school.bad.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.school.bad.timeFrame")}
                                                </p>
                                                <p style={{ fontSize: "13pt", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt={t("applications.school.bad.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.school.bad.healthImpacts")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="office" role="tabpanel" aria-labelledby="office-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tab_left_Image">
                                                <span className="range_btn_Image">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-tag.png"
                                                        width={30}
                                                        height={30}
                                                        alt={t("applications.office.moderate.tagAlt")}
                                                    />
                                                </span>
                                                <Image
                                                    decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-office.jpg"
                                                    width={300}
                                                    height={300}
                                                    alt={t("applications.office.moderate.imageAlt")}
                                                />
                                                <span className="tab_monitor_device">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/face-number-co2-monitor.png"
                                                        width={300}
                                                        height={300}
                                                        alt={t("applications.office.moderate.monitorAlt")}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p>
                                                    <span className="application_no">{t("applications.office.moderate.number")}</span>
                                                </p>
                                                <h3 style={{ textAlign: "left", color: "#e8c92e" }}>{t("applications.office.moderate.title")}</h3>
                                                <p style={{ textAlign: "justify", fontSize: "13pt" }}>
                                                    {t("applications.office.moderate.description")}
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt={t("applications.office.moderate.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.office.moderate.range")}
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt={t("applications.office.moderate.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.office.moderate.timeFrame")}
                                                </p>
                                                <p style={{ fontSize: "13pt", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt={t("applications.office.moderate.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.office.moderate.healthImpacts")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p style={{ textAlign: "right" }}>
                                                    <span className="application_no">{t("applications.office.good.number")}</span>
                                                </p>
                                                <h3 style={{ textAlign: "right", color: "#33c262" }}>{t("applications.office.good.title")}</h3>
                                                <p style={{ textAlign: "right", fontSize: "13pt" }}>
                                                    {t("applications.office.good.description")}
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    {t("applications.office.good.range")}{" "}
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt={t("applications.office.good.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    {t("applications.office.good.timeFrame")}{" "}
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt={t("applications.office.good.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", color: "#1c1b1b" }}>
                                                    {t("applications.office.good.healthImpacts")}{" "}
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt={t("applications.office.good.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="tab_left_Image">
                                                <span className="range_btn_Image">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-tag.png"
                                                        width={30}
                                                        height={30}
                                                        alt={t("applications.office.good.tagAlt")}
                                                    />
                                                </span>
                                                <Image
                                                    decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-office.jpg"
                                                    width={300}
                                                    height={300}
                                                    alt={t("applications.office.good.imageAlt")}
                                                />
                                                <span className="tab_monitor_device">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-monitor.png"
                                                        width={300}
                                                        height={300}
                                                        alt={t("applications.office.good.monitorAlt")}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tab_left_Image">
                                                <span className="range_btn_Image">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/good-tag.png"
                                                        width={30}
                                                        height={30}
                                                        alt={t("applications.office.bad.tagAlt")}
                                                    />
                                                </span>
                                                <Image
                                                    decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/good-office.jpg"
                                                    width={300}
                                                    height={300}
                                                    alt={t("applications.office.bad.imageAlt")}
                                                />
                                                <span className="tab_monitor_device">
                                                    <Image
                                                        decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/good-monitor.png"
                                                        width={300}
                                                        height={300}
                                                        alt={t("applications.office.bad.monitorAlt")}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p>
                                                    <span className="application_no">{t("applications.office.bad.number")}</span>
                                                </p>
                                                <h3 style={{ textAlign: "left", color: "#db4746" }}>{t("applications.office.bad.title")}</h3>
                                                <p style={{ textAlign: "justify", fontSize: "13pt" }}>
                                                    {t("applications.office.bad.description")}
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt={t("applications.office.bad.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.office.bad.range")}
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt={t("applications.home.bad.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.office.bad.timeFrame")}
                                                </p>
                                                <p style={{ fontSize: "13pt", color: "#1c1b1b" }}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt={t("applications.office.bad.iconAlt")}
                                                        width="20"
                                                        height="20"
                                                    />{" "}
                                                    {t("applications.office.bad.healthImpacts")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Places with High CO2 */}
            <section className="product_application_sec">
                <div className="container">
                    <div className="row">
                        <div className="introducing_box text-center">
                            <h2 className="places_heading">
                                {t("placesHighCO2.heading")}
                                <sup>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                                        width={24}
                                        height={24}
                                        alt={t("common.logoAlt")}
                                    />
                                </sup>
                            </h2>
                            <span style={{ fontSize: "14pt" }}>{t("placesHighCO2.description")}</span>
                        </div>
                        <div className="col-md-6">
                            <div className="pocket_monitor_cntr">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2022/07/co2-monitor-at-home.jpg"
                                    width={600}
                                    height={400}
                                    alt={t("placesHighCO2.places.home.imageAlt")}
                                />
                                <div className="pocket_overlay_box pocket_overlay_box2 hover_overlay_pocket">
                                    <h3>{t("placesHighCO2.places.home.title")}</h3>
                                    <p>{t("placesHighCO2.places.home.description")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pocket_monitor_cntr">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2022/07/co2-monitor-at-school.jpg"
                                    width={600}
                                    height={400}
                                    alt={t("placesHighCO2.places.schools.imageAlt")}
                                />
                                <div className="pocket_overlay_box pocket_overlay_box2 hover_overlay_pocket">
                                    <h3>{t("placesHighCO2.places.schools.title")}</h3>
                                    <p>{t("placesHighCO2.places.schools.description")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pocket_monitor_cntr">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2022/07/co2-monitor-at-mall.jpg"
                                    width={600}
                                    height={400}
                                    alt={t("placesHighCO2.places.malls.imageAlt")}
                                />
                                <div className="pocket_overlay_box pocket_overlay_box2 hover_overlay_pocket">
                                    <h3>{t("placesHighCO2.places.malls.title")}</h3>
                                    <p>{t("placesHighCO2.places.malls.description")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pocket_monitor_cntr">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2022/07/co2-monitor-at-hospitals.jpg"
                                    width={600}
                                    height={400}
                                    alt={t("placesHighCO2.places.hospitals.imageAlt")}
                                />
                                <div className="pocket_overlay_box pocket_overlay_box2 hover_overlay_pocket">
                                    <h3>{t("placesHighCO2.places.hospitals.title")}</h3>
                                    <p>{t("placesHighCO2.places.hospitals.description")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pocket_monitor_cntr">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2022/07/co2-monitor-at-restaurant.jpg"
                                    width={600}
                                    height={400}
                                    alt={t("placesHighCO2.places.restaurants.imageAlt")}
                                />
                                <div className="pocket_overlay_box pocket_overlay_box2 hover_overlay_pocket">
                                    <h3>{t("placesHighCO2.places.restaurants.title")}</h3>
                                    <p>{t("placesHighCO2.places.restaurants.description")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pocket_monitor_cntr">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2022/07/co2-monitor-at-subway.jpg"
                                    width={600}
                                    height={400}
                                    alt={t("placesHighCO2.places.metroSubways.imageAlt")}
                                />
                                <div className="pocket_overlay_box pocket_overlay_box2 hover_overlay_pocket">
                                    <h3>{t("placesHighCO2.places.metroSubways.title")}</h3>
                                    <p>{t("placesHighCO2.places.metroSubways.description")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clean Air Quality Solution */}
            <section className="smallest_portable_section">
                <div className="container-fluid">
                    <div className="row equal-height content-placement-middle">
                        <div className="col-md-6" style={{ backgroundColor: "#f2f8f0", paddingLeft: "90px" }}>
                            <div className="pocket_cntr_bg">
                                <h2 className="title_heading">
                                    <span style={{ fontSize: "24pt", lineHeight: "55px" }}>{t("cleanAirSolution.heading.first")}</span>
                                    <sup>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                                            width={24}
                                            height={24}
                                            alt={t("common.logoAlt")}
                                        />
                                    </sup>
                                    <span style={{ fontSize: "24pt" }}>{t("cleanAirSolution.heading.second")}</span>
                                </h2>
                                <span style={{ fontSize: "14pt" }}>{t("cleanAirSolution.description")}</span>
                                <Link href="/fresh-air-machine/" className="learn_more">
                                    {t("cleanAirSolution.linkText")}
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 clean-air-Image">
                            <Image
                                src="https://www.pranaair.com/wp-content/uploads/2022/07/air-quality-solutions-of-prana-air-1.png"
                                width={600}
                                height={400}
                                alt={t("cleanAirSolution.imageAlt")}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section */}
            <section className="trusted-by-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="trusted_heading">
                                {t("trustedBy.heading")}
                                <sup>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                                        width={24}
                                        height={24}
                                        alt={t("common.logoAlt")}
                                    />
                                </sup>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="logo-box">
                            <ul>
                                <li>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2022/07/ola.jpg"
                                        width={65}
                                        height={65}
                                        alt={t("trustedBy.logos.ola")}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2022/07/microsoftt.jpg"
                                        width={65}
                                        height={65}
                                        alt={t("trustedBy.logos.microsoft")}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2022/07/marriott.jpg"
                                        width={65}
                                        height={65}
                                        alt={t("trustedBy.logos.marriott")}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2022/07/tata.jpg"
                                        width={65}
                                        height={65}
                                        alt={t("trustedBy.logos.tata")}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2022/07/havellss.jpg"
                                        width={65}
                                        height={65}
                                        alt={t("trustedBy.logos.havells")}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2022/07/csir.jpg"
                                        width={65}
                                        height={65}
                                        alt={t("trustedBy.logos.csir")}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2022/07/gmda.jpg"
                                        width={65}
                                        height={65}
                                        alt={t("trustedBy.logos.gmda")}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2022/07/cii.jpg"
                                        width={65}
                                        height={65}
                                        alt={t("trustedBy.logos.cii")}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2022/07/morgan.jpg"
                                        width={65}
                                        height={65}
                                        alt={t("trustedBy.logos.morgan")}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2022/07/interglobe.jpg"
                                        width={65}
                                        height={65}
                                        alt={t("trustedBy.logos.interglobe")}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2022/07/mahindra.jpg"
                                        width={65}
                                        height={65}
                                        alt={t("trustedBy.logos.mahindra")}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2022/07/renault-nissan.jpg"
                                        width={65}
                                        height={65}
                                        alt={t("trustedBy.logos.renaultNissan")}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Smallest & Portable Section */}
            <section className="smallest_portable">
                <div className="container">
                    <div className="row smallest_portable_monitore-section">
                        <div className="col-md-7">
                            <div className="smallest-portable-heading">
                                <h2>{t("smallestPortable.heading")}</h2>
                                <h3>
                                    {t("smallestPortable.subheadingPrefix")}
                                    <sub>2</sub> {t("smallestPortable.subheadingSuffix")}
                                    <span className="heading-Image">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                                            width={24}
                                            height={24}
                                            alt={t("common.logoAlt")}
                                        />
                                    </span>
                                </h3>
                                <div className="buy-btns">
                                    <ul>
                                        <li>
                                            <Link href="/?page_id=9&amp;add-to-cart=52265">{t("smallestPortable.buttons.buyNow")}</Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.amazon.in/dp/B0CKQXGKW1?ref=myi_title_dp">
                                                {t("smallestPortable.buttons.amazon")}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <Image
                                src="https://www.pranaair.com/wp-content/uploads/2023/08/pocket-co2-side-view-300x259.png"
                                width={220}
                                height={220}
                                alt={t("smallestPortable.imageAlt")}
                                className="pocket-co-monitor-side-view"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
