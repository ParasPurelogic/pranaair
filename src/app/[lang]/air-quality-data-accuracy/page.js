import "./style.css"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain, supportedLanguages } from "@/config"


// ✅ SEO Metadata
export async function generateMetadata({ params }) {
    const lang = params?.lang || "en";
    const slug = "air-quality-monitor"; // page-specific slug
    const { t } = await getServerTranslation("data-accuracy");
    const title = t("meta.title");
    const description = t("meta.description");
    const image = t("meta.image") || `${domain}/images/${slug}.jpg`;

    const languages = supportedLanguages.reduce((acc, code) => {
        acc[code] = `${domain}/${code}/${slug}`;
        return acc;
    }, {});

    return {
        title,
        description,
        alternates: {
            canonical: `${domain}/${lang}/${slug}`,
            languages,
        },
        openGraph: {
            title,
            description,
            url: `${domain}/${lang}/${slug}`,
            siteName: "Prana Air",
            type: "website",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}

export default async function AirQualityDataAccuracy() {
    const { t } = await getServerTranslation("data-accuracy")
    return (
        <main>
            {/* Hero Banner Section */}
            <section className="realtime_banner_section realtime_feature_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="quality_real_box">
                                <h1>{t("pranaAirLanding.hero.title")}</h1>
                                <h2>{t("pranaAirLanding.hero.subtitle")}</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="airquality_content_box">
                                <p>{t("pranaAirLanding.hero.description")}</p>
                                <Link className="discover_btn" href={`${domain}/air-quality-monitor`}>
                                    {t("pranaAirLanding.hero.buttonText")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner Bottom Image */}
            <section className="banner_bottom_image">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="data_accuracy_image">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-monitor-accurate-data-.png"
                                    alt={t("pranaAirLanding.hero.imageAlt")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Prana Air Section */}
            <section className="realtime_feature_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="features_real_box">
                                <h2 className="real_feature_heading">{t("pranaAirLanding.whyPranaAir.title")}</h2>
                                <h3>{t("pranaAirLanding.whyPranaAir.subtitle")}</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature_content_box">
                                <p>{t("pranaAirLanding.whyPranaAir.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Cards Section */}
            <section className="feature_list_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_card_box">
                                <span className="featured_icon">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2023/03/low-cost-sensor-icon.png"
                                        alt={t("pranaAirLanding.features.lowCost.imageAlt")}
                                        width="126"
                                        height="90"
                                    />
                                </span>
                                <h3>{t("pranaAirLanding.features.lowCost.title")}</h3>
                                <p>{t("pranaAirLanding.features.lowCost.description")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_card_box">
                                <span className="featured_icon">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2023/03/highly-responsive-sensor-icon.png"
                                        alt={t("pranaAirLanding.features.responsive.imageAlt")}
                                        width="126"
                                        height="90"
                                    />
                                </span>
                                <h3>{t("pranaAirLanding.features.responsive.title")}</h3>
                                <p>{t("pranaAirLanding.features.responsive.description")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_card_box">
                                <span className="featured_icon">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2023/03/reliable-sensor-icon.png"
                                        alt={t("pranaAirLanding.features.reliable.imageAlt")}
                                        width="126"
                                        height="90"
                                    />
                                </span>
                                <h3>{t("pranaAirLanding.features.reliable.title")}</h3>
                                <p>{t("pranaAirLanding.features.reliable.description")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_card_box">
                                <span className="featured_icon">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2023/03/accurate-sensor-icon.png"
                                        alt={t("pranaAirLanding.features.accurate.imageAlt")}
                                        width="126"
                                        height="90"
                                    />
                                </span>
                                <h3>{t("pranaAirLanding.features.accurate.title")}</h3>
                                <p>{t("pranaAirLanding.features.accurate.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prana Air Sensors Section */}
            <section
                className="pranaair_sensor_section"
                style={{
                    backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-sensors.jpg)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="pranaair_sensor_box">
                                <h3>{t("pranaAirLanding.sensorsSection.title")}</h3>
                                <p>{t("pranaAirLanding.sensorsSection.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Accuracy Comparison Title */}
            <section style={{ paddingTop: "80px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center">
                                <span style={{ fontSize: "24pt" }}>{t("pranaAirLanding.dataAccuracy.mainTitle")}</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1st Case Comparison */}
            <section className="realtime_feature_section" style={{ paddingTop: "10px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="features_real_box">
                                <h4 className="real_feature_heading">
                                    <span style={{ color: "#a6a6a6", fontSize: "18pt" }}>
                                        {t("pranaAirLanding.dataAccuracy.case1.caseNumber")}
                                    </span>
                                </h4>
                                <h2 className="real_feature_heading">{t("pranaAirLanding.dataAccuracy.case1.title")}</h2>
                                <h3>{t("pranaAirLanding.dataAccuracy.case1.subtitle")}</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature_content_box">
                                <p>{t("pranaAirLanding.dataAccuracy.case1.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Graph 1 */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="comparison_graph_box">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2023/03/comparison-graph.jpg"
                                    alt={t("pranaAirLanding.dataAccuracy.case1.graphAlt")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2nd Case Comparison */}
            <section className="realtime_feature_section" style={{ paddingTop: "80px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="features_real_box">
                                <h4 className="real_feature_heading">
                                    <span style={{ color: "#a6a6a6", fontSize: "18pt" }}>
                                        {t("pranaAirLanding.dataAccuracy.case2.caseNumber")}
                                    </span>
                                </h4>
                                <h2 className="real_feature_heading">{t("pranaAirLanding.dataAccuracy.case2.title")}</h2>
                                <h3 className="air_heading">{t("pranaAirLanding.dataAccuracy.case2.subtitle")}</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature_content_box">
                                <p>{t("pranaAirLanding.dataAccuracy.case2.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BAM Comparison Image */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/03/comparison-graph.jpg"
                                alt={t("pranaAirLanding.dataAccuracy.case2.graphAlt")}
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3rd Case Comparison */}
            <section className="realtime_feature_section" style={{ paddingTop: "80px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="features_real_box">
                                <h4 className="real_feature_heading">
                                    <span style={{ color: "#a6a6a6", fontSize: "18pt" }}>
                                        {t("pranaAirLanding.dataAccuracy.case3.caseNumber")}
                                    </span>
                                </h4>
                                <h2 className="real_feature_heading">{t("pranaAirLanding.dataAccuracy.case3.title")}</h2>
                                <h3>{t("pranaAirLanding.dataAccuracy.case3.subtitle")}</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature_content_box">
                                <p>
                                    {t("pranaAirLanding.dataAccuracy.case3.description1")}{" "}
                                    <em>{t("pranaAirLanding.dataAccuracy.case3.studyTitle")}</em>{" "}
                                    {t("pranaAirLanding.dataAccuracy.case3.description2")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IIIT Study Graph */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="comparison_graph_box">
                                <img
                                    className="img-fluid"
                                    src="https://www.pranaair.com/wp-content/uploads/2023/03/comparison-of-prana-air-pm-sensor-with-other-sensors.jpg"
                                    alt={t("pranaAirLanding.dataAccuracy.case3.graphAlt")}
                                />
                                <div className="image_source_text">
                                    <div className="text-center">
                                        <span style={{ fontSize: "14pt" }}>{t("pranaAirLanding.dataAccuracy.case3.sourceText")}</span>
                                        <br />
                                        <a href="https://www.pranaair.com/wp-content/uploads/2023/03/comparative-evaluation-of-low-cost-pm-sensors.pdf">
                                            {t("pranaAirLanding.dataAccuracy.case3.linkText")}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real-time Comparison Section */}
            <section className="realtime_feature_section" style={{ paddingTop: "80px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="features_real_box">
                                <h2 className="real_feature_heading">{t("pranaAirLanding.realtimeComparison.title")}</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature_content_box">
                                <p>{t("pranaAirLanding.realtimeComparison.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="realtime_feature_section video_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="video-container">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/b9QxSEBGL9I"
                                    title={t("pranaAirLanding.videos.video1Title")}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="video-container">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/pHkRJpNdEAE"
                                    title={t("pranaAirLanding.videos.video2Title")}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monitors & Sensors Introduction */}
            <section className="realtime_feature_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="features_real_box">
                                <h2 className="real_feature_heading">{t("pranaAirLanding.products.title")}</h2>
                                <h3>{t("pranaAirLanding.products.subtitle")}</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature_content_box">
                                <p>{t("pranaAirLanding.products.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monitors & Sensors Tabs Section */}
            <section className="monitor_tab_section" style={{ backgroundColor: "#55b592" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Bootstrap Tabs */}
                            <ul className="nav nav-tabs" id="productTabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="monitors-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#monitors"
                                        type="button"
                                        role="tab"
                                        aria-controls="monitors"
                                        aria-selected="true"
                                    >
                                        {t("pranaAirLanding.products.tabs.monitors")}
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="sensors-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#sensors"
                                        type="button"
                                        role="tab"
                                        aria-controls="sensors"
                                        aria-selected="false"
                                    >
                                        {t("pranaAirLanding.products.tabs.sensors")}
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content" id="productTabContent">
                                {/* Monitors Tab */}
                                <div className="tab-pane fade show active" id="monitors" role="tabpanel" aria-labelledby="monitors-tab">
                                    <div className="pills_tab">
                                        <ul className="nav nav-pills" id="monitorPills" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link active"
                                                    id="squair-pill"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#squair"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="squair"
                                                    aria-selected="true"
                                                >
                                                    <span className="no_text">01</span>
                                                    {t("pranaAirLanding.products.monitors.squair.name")}
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="sensible-plus-pill"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#sensible-plus"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="sensible-plus"
                                                    aria-selected="false"
                                                >
                                                    <span className="no_text">02</span>
                                                    {t("pranaAirLanding.products.monitors.sensiblePlus.name")}
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="sensible-pill"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#sensible"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="sensible"
                                                    aria-selected="false"
                                                >
                                                    <span className="no_text">03</span>
                                                    {t("pranaAirLanding.products.monitors.sensible.name")}
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="particulate-pill"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#particulate"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="particulate"
                                                    aria-selected="false"
                                                >
                                                    <span className="no_text">04</span>
                                                    {t("pranaAirLanding.products.monitors.particulate.name")}
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="ambient-pill"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#ambient"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="ambient"
                                                    aria-selected="false"
                                                >
                                                    <span className="no_text">05</span>
                                                    {t("pranaAirLanding.products.monitors.ambient.name")}
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tab-content" id="monitorPillContent">
                                        {/* SQUAIR Monitor */}
                                        <div
                                            className="tab-pane fade show active"
                                            id="squair"
                                            role="tabpanel"
                                            aria-labelledby="squair-pill"
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="monitor_product_box">
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-squair-monitor.png"
                                                            alt={t("pranaAirLanding.products.monitors.squair.imageAlt")}
                                                            width="486"
                                                            height="auto"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="monitor_details_box">
                                                        <h2>{t("pranaAirLanding.products.monitors.squair.title")}</h2>
                                                        <p>{t("pranaAirLanding.products.monitors.squair.description")}</p>
                                                        <a className="checkout_btn" href="/?page_id=20162">
                                                            {t("pranaAirLanding.products.findOutButton")}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Sensible+ Monitor */}
                                        <div
                                            className="tab-pane fade"
                                            id="sensible-plus"
                                            role="tabpanel"
                                            aria-labelledby="sensible-plus-pill"
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="monitor_product_box">
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/Sensible-plus-monitor-prana-air.png"
                                                            alt={t("pranaAirLanding.products.monitors.sensiblePlus.imageAlt")}
                                                            width="486"
                                                            height="auto"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="monitor_details_box">
                                                        <h2>{t("pranaAirLanding.products.monitors.sensiblePlus.title")}</h2>
                                                        <p>{t("pranaAirLanding.products.monitors.sensiblePlus.description")}</p>
                                                        <a className="checkout_btn" href="/?page_id=17842">
                                                            {t("pranaAirLanding.products.findOutButton")}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Sensible Monitor */}
                                        <div className="tab-pane fade" id="sensible" role="tabpanel" aria-labelledby="sensible-pill">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="monitor_product_box">
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/Sensible-monitor-prana-air.png"
                                                            alt={t("pranaAirLanding.products.monitors.sensible.imageAlt")}
                                                            width="486"
                                                            height="auto"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="monitor_details_box">
                                                        <h2>{t("pranaAirLanding.products.monitors.sensible.title")}</h2>
                                                        <p>{t("pranaAirLanding.products.monitors.sensible.description")}</p>
                                                        <a className="checkout_btn" href="/?page_id=16263">
                                                            {t("pranaAirLanding.products.findOutButton")}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Particulate Monitor */}
                                        <div className="tab-pane fade" id="particulate" role="tabpanel" aria-labelledby="particulate-pill">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="monitor_product_box">
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/smart-PM-monitor-prana-air.png"
                                                            alt={t("pranaAirLanding.products.monitors.particulate.imageAlt")}
                                                            width="486"
                                                            height="auto"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="monitor_details_box">
                                                        <h2>{t("pranaAirLanding.products.monitors.particulate.title")}</h2>
                                                        <p>{t("pranaAirLanding.products.monitors.particulate.description")}</p>
                                                        <a className="checkout_btn" href="/?page_id=22075">
                                                            {t("pranaAirLanding.products.findOutButton")}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Ambient Monitor */}
                                        <div className="tab-pane fade" id="ambient" role="tabpanel" aria-labelledby="ambient-pill">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="monitor_product_box">
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-ambient-air-quality-monitor-caaqms.png"
                                                            alt={t("pranaAirLanding.products.monitors.ambient.imageAlt")}
                                                            width="486"
                                                            height="auto"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="monitor_details_box">
                                                        <h2>{t("pranaAirLanding.products.monitors.ambient.title")}</h2>
                                                        <p>{t("pranaAirLanding.products.monitors.ambient.description")}</p>
                                                        <a className="checkout_btn" href="/?page_id=17118">
                                                            {t("pranaAirLanding.products.findOutButton")}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sensors Tab */}
                                <div className="tab-pane fade" id="sensors" role="tabpanel" aria-labelledby="sensors-tab">
                                    <div className="pills_tab">
                                        <ul className="nav nav-pills" id="sensorPills" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link active"
                                                    id="co2-sensor-pill"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#co2-sensor"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="co2-sensor"
                                                    aria-selected="true"
                                                >
                                                    <span className="no_text">01</span>
                                                    {t("pranaAirLanding.products.sensors.co2.name")}
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="co-sensor-pill"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#co-sensor"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="co-sensor"
                                                    aria-selected="false"
                                                >
                                                    <span className="no_text">02</span>
                                                    {t("pranaAirLanding.products.sensors.co.name")}
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="so2-sensor-pill"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#so2-sensor"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="so2-sensor"
                                                    aria-selected="false"
                                                >
                                                    <span className="no_text">03</span>
                                                    {t("pranaAirLanding.products.sensors.so2.name")}
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="no2-sensor-pill"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#no2-sensor"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="no2-sensor"
                                                    aria-selected="false"
                                                >
                                                    <span className="no_text">04</span>
                                                    {t("pranaAirLanding.products.sensors.no2.name")}
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="o3-sensor-pill"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#o3-sensor"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="o3-sensor"
                                                    aria-selected="false"
                                                >
                                                    <span className="no_text">05</span>
                                                    {t("pranaAirLanding.products.sensors.o3.name")}
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tab-content" id="sensorPillContent">
                                        {/* CO2 Sensor */}
                                        <div
                                            className="tab-pane fade show active"
                                            id="co2-sensor"
                                            role="tabpanel"
                                            aria-labelledby="co2-sensor-pill"
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="monitor_product_box">
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/CO2-sensor-prana-air.png"
                                                            alt={t("pranaAirLanding.products.sensors.co2.imageAlt")}
                                                            width="486"
                                                            height="auto"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="monitor_details_box">
                                                        <h2>{t("pranaAirLanding.products.sensors.co2.title")}</h2>
                                                        <p>{t("pranaAirLanding.products.sensors.co2.description")}</p>
                                                        <a className="checkout_btn" href="/?page_id=22552">
                                                            {t("pranaAirLanding.products.findOutButton")}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CO Sensor */}
                                        <div className="tab-pane fade" id="co-sensor" role="tabpanel" aria-labelledby="co-sensor-pill">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="monitor_product_box">
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/CO-sensor-prana-air.png"
                                                            alt={t("pranaAirLanding.products.sensors.co.imageAlt")}
                                                            width="486"
                                                            height="auto"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="monitor_details_box">
                                                        <h2>{t("pranaAirLanding.products.sensors.co.title")}</h2>
                                                        <p>{t("pranaAirLanding.products.sensors.co.description")}</p>
                                                        <a className="checkout_btn" href="/?page_id=16804">
                                                            {t("pranaAirLanding.products.findOutButton")}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* SO2 Sensor */}
                                        <div className="tab-pane fade" id="so2-sensor" role="tabpanel" aria-labelledby="so2-sensor-pill">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="monitor_product_box">
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/SO2-sensor-prana-air.png"
                                                            alt={t("pranaAirLanding.products.sensors.so2.imageAlt")}
                                                            width="486"
                                                            height="auto"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="monitor_details_box">
                                                        <h2>{t("pranaAirLanding.products.sensors.so2.title")}</h2>
                                                        <p>{t("pranaAirLanding.products.sensors.so2.description")}</p>
                                                        <a className="checkout_btn" href="/?page_id=16851">
                                                            {t("pranaAirLanding.products.findOutButton")}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* NO2 Sensor */}
                                        <div className="tab-pane fade" id="no2-sensor" role="tabpanel" aria-labelledby="no2-sensor-pill">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="monitor_product_box">
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/No2-sensor-prana-air.png"
                                                            alt={t("pranaAirLanding.products.sensors.no2.imageAlt")}
                                                            width="486"
                                                            height="auto"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="monitor_details_box">
                                                        <h2>{t("pranaAirLanding.products.sensors.no2.title")}</h2>
                                                        <p>{t("pranaAirLanding.products.sensors.no2.description")}</p>
                                                        <a className="checkout_btn" href="/?page_id=16833">
                                                            {t("pranaAirLanding.products.findOutButton")}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* O3 Sensor */}
                                        <div className="tab-pane fade" id="o3-sensor" role="tabpanel" aria-labelledby="o3-sensor-pill">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="monitor_product_box">
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/O3-Sensor-prana-air.png"
                                                            alt={t("pranaAirLanding.products.sensors.o3.imageAlt")}
                                                            width="486"
                                                            height="auto"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="monitor_details_box">
                                                        <h2>{t("pranaAirLanding.products.sensors.o3.title")}</h2>
                                                        <p>{t("pranaAirLanding.products.sensors.o3.description")}</p>
                                                        <a className="checkout_btn" href="/?page_id=16875">
                                                            {t("pranaAirLanding.products.findOutButton")}
                                                        </a>
                                                    </div>
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

            {/* Trusted By Section */}
            <section className="realtime_feature_section trustedby_section" style={{ paddingTop: "80px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="features_real_box">
                                <h2 className="real_feature_heading">{t("pranaAirLanding.trustedBy.title")}</h2>
                                <h3>{t("pranaAirLanding.trustedBy.subtitle")}</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature_content_box">
                                <p>{t("pranaAirLanding.trustedBy.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Logos Section */}
            <section className="ourclient_section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="our_client_box">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/csir-logo.png"
                                            alt={t("pranaAirLanding.clients.csir")}
                                            width="220"
                                            height="auto"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/iit-varanasi-logo.png"
                                            alt={t("pranaAirLanding.clients.iitVaranasi")}
                                            width="220"
                                            height="auto"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/iit-roorkee-logo.png"
                                            alt={t("pranaAirLanding.clients.iitRoorkee")}
                                            width="220"
                                            height="auto"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/iit-hyderabad-logo.png"
                                            alt={t("pranaAirLanding.clients.iitHyderabad")}
                                            width="220"
                                            height="auto"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/iit-dhanbad-logo.png"
                                            alt={t("pranaAirLanding.clients.iitDhanbad")}
                                            width="220"
                                            height="auto"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/iit-bombay-logo.png"
                                            alt={t("pranaAirLanding.clients.iitBombay")}
                                            width="220"
                                            height="auto"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/dae-logo.png"
                                            alt={t("pranaAirLanding.clients.dae")}
                                            width="220"
                                            height="auto"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/ola-logo.png"
                                            alt={t("pranaAirLanding.clients.ola")}
                                            width="220"
                                            height="auto"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/renault-nissan.png"
                                            alt={t("pranaAirLanding.clients.renaultNissan")}
                                            width="220"
                                            height="auto"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/havells.png"
                                            alt={t("pranaAirLanding.clients.havells")}
                                            width="220"
                                            height="auto"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/tata.png"
                                            alt={t("pranaAirLanding.clients.tata")}
                                            width="220"
                                            height="auto"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/microsoft.png"
                                            alt={t("pranaAirLanding.clients.microsoft")}
                                            width="220"
                                            height="auto"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/gmda.png"
                                            alt={t("pranaAirLanding.clients.gmda")}
                                            width="220"
                                            height="auto"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/marriott.png"
                                            alt={t("pranaAirLanding.clients.marriott")}
                                            width="220"
                                            height="auto"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/mahindra.png"
                                            alt={t("pranaAirLanding.clients.mahindra")}
                                            width="220"
                                            height="auto"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/03/taj-hotel.png"
                                            alt={t("pranaAirLanding.clients.tajHotel")}
                                            width="220"
                                            height="auto"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
