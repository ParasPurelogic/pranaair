import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

import { getServerTranslation } from "@/i18n/server"
import OxyGenslider from "@/Components/Pages/OxygenMonitor/carousel"

export default async function OxygenMonitor() {
    const { t } = await getServerTranslation("oxygen-monitor")
    const appresponsive = [
        {
            id: 1,
            image: "https://www.pranaair.com/wp-content/uploads/2024/10/Residential-Use.webp",
            title: t("oxygenApplications.items.residential.title"),
            alt: t("oxygenApplications.items.residential.alt"),
        },
        {
            id: 2,
            image: "https://www.pranaair.com/wp-content/uploads/2024/10/front-view-kids-cheating-school.webp",
            title: t("oxygenApplications.items.educational.title"),
            alt: t("oxygenApplications.items.educational.alt"),
        },
        {
            id: 3,
            image: "https://www.pranaair.com/wp-content/uploads/2024/10/front-view-family-celebrating-birthday.webp",
            title: t("oxygenApplications.items.outdoor.title"),
            alt: t("oxygenApplications.items.outdoor.alt"),
        },
        {
            id: 4,
            image: "https://www.pranaair.com/wp-content/uploads/2024/12/healthcare-center.webp",
            title: t("oxygenApplications.items.healthcare.title"),
            alt: t("oxygenApplications.items.healthcare.alt"),
        },
        {
            id: 5,
            image:
                "https://www.pranaair.com/wp-content/uploads/2024/10/industrial-health-measures-corona-virus-pandemic.webp",
            title: t("oxygenApplications.items.industrial.title"),
            alt: t("oxygenApplications.items.industrial.alt"),
        },
        {
            id: 6,
            image: "https://www.pranaair.com/wp-content/uploads/2024/10/so-many-vegetables-this-field.webp",
            title: t("oxygenApplications.items.agricultural.title"),
            alt: t("oxygenApplications.items.agricultural.alt"),
        },
        {
            id: 7,
            image: "https://www.pranaair.com/wp-content/uploads/2024/12/colleagues-in-workplace.webp",
            title: t("oxygenApplications.items.workplace.title"),
            alt: t("oxygenApplications.items.workplace.alt"),
        },
    ]


    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hero-txt">
                                <h1>{t("oxygenHero.title")}</h1>
                                <h2>{t("oxygenHero.subtitle")}</h2>
                                <p>{t("oxygenHero.description")}</p>
                                <form
                                    className="cart"
                                    action="https://www.pranaair.com/product/oxyco-monitor/"
                                    encType="multipart/form-data"
                                    method="post"
                                >
                                    <button
                                        className="single_add_to_cart_button button alt banner-btn"
                                        name="add-to-cart"
                                        type="submit"
                                        value="124689"
                                    >
                                        {t("oxygenHero.buyButton")}{" "}
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/download-btn.png"
                                            alt={t("oxygenHero.altTexts.buyIcon")}
                                        />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="feature-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="key-feature-txt">
                                <h2>{t("oxygenFeatures.title")}</h2>
                                <h3>
                                    {t("oxygenFeatures.subtitle.part1")}{" "}
                                    <span className="green-txt">{t("oxygenFeatures.subtitle.highlight")}</span>
                                </h3>
                                <p>{t("oxygenFeatures.description")}</p>
                            </div>
                        </div>
                        <div className="col-md-5"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="feature">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/10/compact-and-portable-oxyco-monitor.webp"
                                            alt={t("oxygenFeatures.items.compact.alt")}
                                        />
                                        <div className="feature-txt">
                                            <h3>{t("oxygenFeatures.items.compact.title")}</h3>
                                            <p>{t("oxygenFeatures.items.compact.description")}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="connect-txt">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/10/connectivity-options.png"
                                                alt={t("oxygenFeatures.items.connectivity.alt")}
                                            />
                                            <h3>{t("oxygenFeatures.items.connectivity.title")}</h3>
                                            <p>{t("oxygenFeatures.items.connectivity.description")}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-air-OxyCO-calibration.webp"
                                            alt={t("oxygenFeatures.items.calibration.alt")}
                                        />
                                        <div className="feature-txt">
                                            <h3>{t("oxygenFeatures.items.calibration.title")}</h3>
                                            <p>{t("oxygenFeatures.items.calibration.description")}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="could-sotrage">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/10/data-securely-in-cloud-storage.png"
                                                alt={t("oxygenFeatures.items.cloudStorage.alt")}
                                            />
                                            <h3>{t("oxygenFeatures.items.cloudStorage.title")}</h3>
                                            <p>{t("oxygenFeatures.items.cloudStorage.description")}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/10/real-time-data-monitoring.webp"
                                            alt={t("oxygenFeatures.items.realTime.alt")}
                                        />
                                        <div className="feature-txt">
                                            <h3>{t("oxygenFeatures.items.realTime.title")}</h3>
                                            <p>{t("oxygenFeatures.items.realTime.description")}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="could-sotrage">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/10/built-in-battery.png"
                                                alt={t("oxygenFeatures.items.battery.alt")}
                                            />
                                            <h3>{t("oxygenFeatures.items.battery.title")}</h3>
                                            <p>{t("oxygenFeatures.items.battery.description")}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Variants Section */}
            <section className="variant-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="variant-txt">
                                <h2>{t("oxygenVariants.title")}</h2>
                                <p>{t("oxygenVariants.subtitle")}</p>
                            </div>
                            <ul className="tab nav nav-tabs variant-tabs" id="variantTabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="london-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#london"
                                        type="button"
                                        role="tab"
                                        aria-controls="london"
                                        aria-selected="true"
                                    >
                                        {t("oxygenVariants.tabs.oxygenCO.title")} <i className="fas fa-arrow-right"></i>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="paris-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#paris"
                                        type="button"
                                        role="tab"
                                        aria-controls="paris"
                                        aria-selected="false"
                                    >
                                        {t("oxygenVariants.tabs.oxygenCO2.title")} <i className="fas fa-arrow-right"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            {/* Tab content */}
                            <div className="tab-content" id="variantTabsContent">
                                <div className="tab-pane fade show active" id="london" role="tabpanel" aria-labelledby="london-tab">
                                    <div className="content-para">
                                        <p>{t("oxygenVariants.tabs.oxygenCO.description")}</p>
                                        <form
                                            className="cart"
                                            action="https://www.pranaair.com/product/oxyco-monitor/"
                                            encType="multipart/form-data"
                                            method="post"
                                        >
                                            <button
                                                className="single_add_to_cart_button button alt banner-btn"
                                                name="add-to-cart"
                                                type="submit"
                                                value="124689"
                                            >
                                                {t("oxygenVariants.buyButton")}{" "}
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/download-btn.png"
                                                    alt={t("oxygenVariants.altTexts.buyIcon")}
                                                />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="oxy-co-box">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/12/oxygen-monitor.webp"
                                            alt={t("oxygenVariants.altTexts.oxygenMonitor")}
                                        />
                                        <div className="parameter">
                                            <ul>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/CO-icon.png"
                                                        alt={t("oxygenVariants.altTexts.coIcon")}
                                                    />
                                                    <h5>{t("oxygenVariants.parameters.co")}</h5>
                                                </li>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/TEMPERATURE.png"
                                                        alt={t("oxygenVariants.altTexts.temperatureIcon")}
                                                    />
                                                    <h5>{t("oxygenVariants.parameters.temperature")}</h5>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/O2.png"
                                                        alt={t("oxygenVariants.altTexts.o2Icon")}
                                                    />
                                                    <h5>{t("oxygenVariants.parameters.oxygen")}</h5>
                                                </li>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/Humidity.png"
                                                        alt={t("oxygenVariants.altTexts.humidityIcon")}
                                                    />
                                                    <h5>{t("oxygenVariants.parameters.humidity")}</h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="paris" role="tabpanel" aria-labelledby="paris-tab">
                                    <div className="content-para">
                                        <p>{t("oxygenVariants.tabs.oxygenCO2.description")}</p>
                                        <form
                                            className="cart"
                                            action="https://www.pranaair.com/product/oxyco-monitor/"
                                            encType="multipart/form-data"
                                            method="post"
                                        >
                                            <button
                                                className="single_add_to_cart_button button alt banner-btn"
                                                name="add-to-cart"
                                                type="submit"
                                                value="1"
                                            >
                                                {t("oxygenVariants.buyButton")}{" "}
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/download-btn.png"
                                                    alt={t("oxygenVariants.altTexts.buyIcon")}
                                                />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="oxy-co-box oxy-co2-box">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/10/OxyCO2-monitor.webp"
                                            alt={t("oxygenVariants.altTexts.oxyCO2Monitor")}
                                        />
                                        <div className="parameter">
                                            <ul>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/CO-icon.png"
                                                        alt={t("oxygenVariants.altTexts.coIcon")}
                                                    />
                                                    <h5>{t("oxygenVariants.parameters.co2")}</h5>
                                                </li>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/TEMPERATURE.png"
                                                        alt={t("oxygenVariants.altTexts.temperatureIcon")}
                                                    />
                                                    <h5>{t("oxygenVariants.parameters.temperature")}</h5>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/O2.png"
                                                        alt={t("oxygenVariants.altTexts.o2Icon")}
                                                    />
                                                    <h5>{t("oxygenVariants.parameters.oxygen")}</h5>
                                                </li>
                                                <li>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/Humidity.png"
                                                        alt={t("oxygenVariants.altTexts.humidityIcon")}
                                                    />
                                                    <h5>{t("oxygenVariants.parameters.humidity")}</h5>
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

            {/* Visualize Data Section */}
            <section className="visualise-data-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="visualise-data-txt">
                                <h2>{t("visualizeData.title")}</h2>
                                <h3>{t("visualizeData.subtitle")}</h3>
                                <p>
                                    {t("visualizeData.description.part1")} <strong>{t("visualizeData.description.highlight")}</strong>{" "}
                                    {t("visualizeData.description.part2")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button
                                    className="nav-link active"
                                    id="v-pills-main-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-main"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-main"
                                    aria-selected="true"
                                >
                                    {t("visualizeData.screens.main.title")} <i className="fas fa-arrow-right"></i>
                                </button>
                                <div className="tab-content-para">{t("visualizeData.screens.main.description")}</div>

                                <button
                                    className="nav-link"
                                    id="v-pills-o2-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-o2"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-o2"
                                    aria-selected="false"
                                >
                                    {t("visualizeData.screens.o2Curve.title")} <i className="fas fa-arrow-right"></i>
                                </button>
                                <div className="tab-content-para">{t("visualizeData.screens.o2Curve.description")}</div>

                                <button
                                    className="nav-link"
                                    id="v-pills-co-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-co"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-co"
                                    aria-selected="false"
                                >
                                    {t("visualizeData.screens.coCurve.title")} <i className="fas fa-arrow-right"></i>
                                </button>
                                <div className="tab-content-para">{t("visualizeData.screens.coCurve.description")}</div>

                                <button
                                    className="nav-link"
                                    id="v-pills-calibration-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-calibration"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-calibration"
                                    aria-selected="false"
                                >
                                    {t("visualizeData.screens.calibration.title")} <i className="fas fa-arrow-right"></i>
                                </button>
                                <div className="tab-content-para">{t("visualizeData.screens.calibration.description")}</div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="tab-content monitor-bg" id="v-pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="v-pills-main"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-main-tab"
                                >
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/12/oxygen-monitor-main-screen.webp"
                                        alt={t("visualizeData.altTexts.mainScreen")}
                                    />
                                </div>
                                <div className="tab-pane fade" id="v-pills-o2" role="tabpanel" aria-labelledby="v-pills-o2-tab">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/12/oxygen-monitor-o2-graph.webp"
                                        alt={t("visualizeData.altTexts.o2Graph")}
                                    />
                                </div>
                                <div className="tab-pane fade" id="v-pills-co" role="tabpanel" aria-labelledby="v-pills-co-tab">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/12/oxygen-monitor-co-graph.webp"
                                        alt={t("visualizeData.altTexts.coGraph")}
                                    />
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="v-pills-calibration"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-calibration-tab"
                                >
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/12/oxygen-monitor-calibration.webp"
                                        alt={t("visualizeData.altTexts.calibration")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hospital Section */}
            <section className="hospital">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hospital-heading">
                                <h2>{t("oxygenHospital.title")}</h2>
                                <p>{t("oxygenHospital.description")}</p>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hospital-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/12/prana-air-oxygen-monitor-in-hospital.webp"
                                    alt={t("oxygenHospital.altTexts.hospitalImage")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="why-choose">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="why-choose-heading">
                                <h2>
                                    {t("oxygenWhyChoose.title.part1")} <span className="oxy">{t("oxygenWhyChoose.title.highlight")}</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="why-choose-para">
                                <p>{t("oxygenWhyChoose.subtitle")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mob-row">
                        {t("oxygenWhyChoose.reasons", { returnObjects: true }).map((reason, index) => (
                            <div className="col-md-3" key={index}>
                                <div className={`why-choose-box ${reason.colorClass}`}>
                                    <h3>{reason.number}</h3>
                                    <h4>
                                        {reason.title.part1} <span className="why-bg">{reason.title.highlight}</span>
                                    </h4>
                                    <p className="why-para">{reason.description}</p>
                                    <img src={reason.image || "/placeholder.svg"} alt={reason.altText} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Your Data Section */}
            <section className="your-data-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="your-data-txt">
                                <h2>
                                    <strong>{t("oxygenDataExport.title.part1")}</strong> {t("oxygenDataExport.title.part2")}
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="your-data-graph-txt">
                                <h3>{t("oxygenDataExport.subtitle")}</h3>
                                <p>{t("oxygenDataExport.description")}</p>
                                <ul>
                                    {t("oxygenDataExport.formats", { returnObjects: true }).map((format, index) => (
                                        <li key={index}>{format}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="email-transfer-box">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/12/oxygen-monitor-export-data.webp"
                                    alt={t("oxygenDataExport.altTexts.exportData")}
                                />
                                <div className="feature-txt transfer">
                                    <h3>{t("oxygenDataExport.emailTransfer.title")}</h3>
                                    <p>{t("oxygenDataExport.emailTransfer.description")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Dashboard Section */}
            <section className="mob-dash-tab">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mob-dash-heading">
                                <h2>
                                    {t("oxygenMobileDashboard.title.part1")} <strong>{t("oxygenMobileDashboard.title.highlight")}</strong>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tab-sec">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="mobile-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#mobile-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="mobile-tab-pane"
                                            aria-selected="true"
                                        >
                                            {t("oxygenMobileDashboard.tabs.mobile")}
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="web-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#web-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="web-tab-pane"
                                            aria-selected="false"
                                        >
                                            {t("oxygenMobileDashboard.tabs.web")}
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="tv-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tv-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="tv-tab-pane"
                                            aria-selected="false"
                                        >
                                            {t("oxygenMobileDashboard.tabs.tv")}
                                        </button>
                                    </li>
                                </ul>

                                <div className="tab-content" id="myTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="mobile-tab-pane"
                                        role="tabpanel"
                                        aria-labelledby="mobile-tab"
                                        tabIndex={0}
                                    >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="start-work-txt">
                                                    <h2>
                                                        <span className="green-txt">{t("oxygenMobileDashboard.mobile.title.part1")}</span>{" "}
                                                        {t("oxygenMobileDashboard.mobile.title.part2")}
                                                    </h2>
                                                    <p>{t("oxygenMobileDashboard.mobile.description")}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <a className="btn" href="https://play.google.com/store/apps/details?id=com.aqi.data">
                                                    <i className="fas fa-arrow-right"></i>
                                                    {t("oxygenMobileDashboard.mobile.buttonText")}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dash-mob-img app">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/12/Mobile-App-OxyCo.webp"
                                                alt={t("oxygenMobileDashboard.mobile.altText")}
                                            />
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="web-tab-pane" role="tabpanel" aria-labelledby="web-tab" tabIndex={0}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="start-work-txt">
                                                    <h2>
                                                        <span className="green-txt">{t("oxygenMobileDashboard.web.title.part1")}</span>{" "}
                                                        {t("oxygenMobileDashboard.web.title.part2")}
                                                    </h2>
                                                    <p>{t("oxygenMobileDashboard.web.description")}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <a className="btn" href="https://www.aqi.in/userlogin">
                                                    <i className="fas fa-arrow-right"></i>
                                                    {t("oxygenMobileDashboard.web.buttonText")}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dash-mob-img web">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/12/Web-Dashboard-OxyCo-monitor.webp"
                                                alt={t("oxygenMobileDashboard.web.altText")}
                                            />
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tv-tab-pane" role="tabpanel" aria-labelledby="tv-tab" tabIndex={0}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="start-work-txt">
                                                    <h2>
                                                        <span className="green-txt">{t("oxygenMobileDashboard.tv.title.part1")}</span>{" "}
                                                        {t("oxygenMobileDashboard.tv.title.part2")}
                                                    </h2>
                                                    <p>{t("oxygenMobileDashboard.tv.description")}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <a className="btn" href="https://play.google.com/store/apps/details?id=com.aqitv.aqitvnew">
                                                    <i className="fas fa-arrow-right"></i>
                                                    {t("oxygenMobileDashboard.tv.buttonText")}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dash-mob-img tv">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/12/Smart-TV-App-OxyCo-monitor.webp"
                                                alt={t("oxygenMobileDashboard.tv.altText")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Oxygen Tracking Section */}
            <section className="oxygen-tracking-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="oxygen-tracking-heading">
                                <h2>{t("oxygenTracking.leftHeading")}</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="oxygen-tracking-heading track-head">
                                <p>{t("oxygenTracking.description")}</p>
                                <h2>{t("oxygenTracking.rightHeading")}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="oxygen-tracking-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/athletes-hikers-or-anyone-on-the-track.webp"
                                    alt={t("oxygenTracking.altText")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section className="application-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="app-txt">
                                <h2>{t("oxygenApplicationsText.title")}</h2>
                                <h3>
                                    {t("oxygenApplicationsText.subtitle.part1")}{" "}
                                    <strong>{t("oxygenApplicationsText.subtitle.highlight")}</strong>{" "}
                                    {t("oxygenApplicationsText.subtitle.part2")}
                                </h3>
                                <p>{t("oxygenApplicationsText.description")}</p>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <OxyGenslider appresponsive={appresponsive} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications Section */}
            <section className="technical-specification">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="spec-heading">
                                <h4>{t("oxygenTechSpecs.title")}</h4>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="brochore-btn">
                                <a href="https://www.pranaair.com/wp-content/uploads/2024/12/Prana-air-OxyCO-Monitor-Brochure.pdf">
                                    {t("oxygenTechSpecs.brochure")}{" "}
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/09/download-btn.png"
                                        alt={t("oxygenTechSpecs.altTexts.brochureBtn")}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row mid-box mob-scroll">
                        <div className="col-md-6">
                            <div className="product-specifi">
                                {t("oxygenTechSpecs.specs.productName.label")}
                                <h4>{t("oxygenTechSpecs.specs.productName.value")}</h4>
                            </div>
                            <div className="product-specifi shdw-line">
                                {t("oxygenTechSpecs.specs.maxConcentration.label")}
                                <h4>{t("oxygenTechSpecs.specs.maxConcentration.value")}</h4>
                            </div>
                            <div className="product-specifi">
                                {t("oxygenTechSpecs.specs.screenSize.label")}
                                <h4>{t("oxygenTechSpecs.specs.screenSize.value")}</h4>
                            </div>
                            <div className="product-specifi shdw-line">
                                {t("oxygenTechSpecs.specs.dimension.label")}
                                <h4>{t("oxygenTechSpecs.specs.dimension.value")}</h4>
                            </div>
                            <div className="product-specifi">
                                {t("oxygenTechSpecs.specs.weight.label")}
                                <h4>{t("oxygenTechSpecs.specs.weight.value")}</h4>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="product-specifi">
                                {t("oxygenTechSpecs.specs.parameters.label")}
                                <h4>{t("oxygenTechSpecs.specs.parameters.value")}</h4>
                            </div>
                            <div className="product-specifi shdw-line">
                                {t("oxygenTechSpecs.specs.batteryCapacity.label")}
                                <h4>{t("oxygenTechSpecs.specs.batteryCapacity.value")}</h4>
                            </div>
                            <div className="product-specifi">
                                {t("oxygenTechSpecs.specs.connectivity.label")}
                                <h4>{t("oxygenTechSpecs.specs.connectivity.value")}</h4>
                            </div>
                            <div className="product-specifi shdw-line">
                                {t("oxygenTechSpecs.specs.sensitivity.label")}
                                <h4>{t("oxygenTechSpecs.specs.sensitivity.value")}</h4>
                            </div>
                            <div className="product-specifi">
                                {t("oxygenTechSpecs.specs.dataAccessibility.label")}
                                <h4>{t("oxygenTechSpecs.specs.dataAccessibility.value")}</h4>
                            </div>
                            <div className="row">
                                <div className="col-md-8"></div>
                                <div className="col-md-4">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/09/download-btn.png"
                                        alt={t("oxygenTechSpecs.altTexts.downloadIcon")}
                                        className="rosh-iocn"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="faq-heading">
                                <h2>{t("oxygenFAQ.title")}</h2>
                            </div>
                            <div className="accordion" id="faqAccordion">
                                {t("oxygenFAQ.questions", { returnObjects: true }).map((faq, index) => (
                                    <div className="accordion-item" key={index}>
                                        <h2 className="accordion-header">
                                            <button
                                                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#faq${index + 1}`}
                                                aria-expanded={index === 0 ? "true" : "false"}
                                            >
                                                {faq.question}
                                            </button>
                                        </h2>
                                        <div
                                            id={`faq${index + 1}`}
                                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body faq-tab-para">{faq.answer}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
