import Image from "next/image"
import "./style.css"
import CaseStudiesSlider from "@/Components/Pages/AmbientAirmonitor/CaseSlider"
import { getServerTranslation } from "@/i18n/server"
import ContactForm from "@/Components/Contacform/ContactForm"
import Link from "@/Components/TranslateLink"
import { domain, supportedLanguages } from "@/config"

// ✅ SEO Metadata
export async function generateMetadata({ params }) {
    const lang = params?.lang || "en";
    const slug = "air-quality-monitor"; // page-specific slug
    const { t } = await getServerTranslation("ambient");
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

export default async function AmbientAirMonito() {
    const { t } = await getServerTranslation("ambient")
    const caseStudies = [
        {
            image: "https://www.pranaair.com/wp-content/uploads/2023/10/air-quality-monitors-for-tata.webp",
            title: t("caseStudies.items.0.title"),
            link: "https://www.pranaair.com/blog/case-study-prana-air-aids-tata-steel-in-hyperlocal-air-quality-monitoring/",
            alt: t("caseStudies.items.0.alt"),
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2023/10/air-quality-monitors-for-ola-and-microsoft.webp",
            title: t("caseStudies.items.1.title"),
            link: "https://www.pranaair.com/blog/prana-air-monitors-street-level-pollution/",
            alt: t("caseStudies.items.1.alt"),
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2023/10/air-quality-monitors-for-mahindra-lifespaces.webp",
            title: t("caseStudies.items.2.title"),
            link: "https://www.pranaair.com/blog/mahindra-lifespaces-air-quality-due-to-construction-and-demolition-activities/",
            alt: t("caseStudies.items.2.alt"),
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2023/10/air-quality-monitors-for-CII.webp",
            title: t("caseStudies.items.3.title"),
            link: "https://www.pranaair.com/blog/case-study-air-pollution-due-to-stubble-burning/",
            alt: t("caseStudies.items.3.alt"),
        },
    ]
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ambient-banner">
                                <span className="title">{t("ambient.title")}</span>
                                <h1>
                                    <span className="hd-txt">{t("ambient.heading.highlight")}</span> {t("ambient.heading.main")}
                                </h1>
                                <p>{t("ambient.description")}</p>
                                <Link href="#contact_form" aria-label={t("ambient.ctaAriaLabel")}>
                                    {t("ambient.cta")}
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ambient-img">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/ambient-air-quality-monitors.webp"
                                    alt={t("ambient.imageAlt")}
                                    width={500}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ambient Monitor Variants Section */}
            <section className="ambient-monitor-variants-section">
                <div className="container">
                    <div className="row ambi-line">
                        <div className="col-md-6">
                            <div className="ambi-moni-variant-heading">
                                <h2>{t("ambientMonitors.variants.title")}</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ambi-monitor-para">
                                <p>{t("ambientMonitors.variants.description")}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row tab-sections">
                        <div className="col-lg-9">
                            {/* Tab Content */}
                            <div className="tab-content" id="ambientTabsContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="ambient-pm-content"
                                    role="tabpanel"
                                    aria-labelledby="ambient-pm-tab"
                                >
                                    <div className="color-box">
                                        <div className="ambient-pm-content">
                                            <h3>{t("ambientMonitors.variants.ambientPM.title")}</h3>
                                            <p>{t("ambientMonitors.variants.ambientPM.description")}</p>
                                            <h4>{t("ambientMonitors.variants.ambientPM.features")}</h4>
                                        </div>

                                        <div className="drone-icon-list">
                                            <ul>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/low-cost-icon.png"
                                                        alt={t("ambientMonitors.variants.ambientPM.featuresList.lowCost.alt")}
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>{t("ambientMonitors.variants.ambientPM.featuresList.lowCost.title")}</p>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/compact-device.png"
                                                        alt={t("ambientMonitors.variants.ambientPM.featuresList.compact.alt")}
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>{t("ambientMonitors.variants.ambientPM.featuresList.compact.title")}</p>
                                                </li>
                                            </ul>

                                            <ul>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/weatherproof-icon.png"
                                                        alt={t("ambientMonitors.variants.ambientPM.featuresList.waterproof.alt")}
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>{t("ambientMonitors.variants.ambientPM.featuresList.waterproof.title")}</p>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/portable-icon.png"
                                                        alt={t("ambientMonitors.variants.ambientPM.featuresList.portable.alt")}
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>{t("ambientMonitors.variants.ambientPM.featuresList.portable.title")}</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="aqi-data">
                                            <ul>
                                                {t("ambientMonitors.variants.ambientPM.parameters", { returnObjects: true }).map(
                                                    (param, index) => (
                                                        <li key={index}>
                                                            <h5>{param}</h5>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="get-brochur">
                                        <ul>
                                            <li>
                                                <Link href="https://www.pranaair.com/wp-content/uploads/2024/06/construction-site-Prana-Air-Air-quality-monitor-brochure.pdf">
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                                                        alt={t("ambientMonitors.variants.ambientPM.brochure")}
                                                        width={22}
                                                        height={22}
                                                    />
                                                    {t("ambientMonitors.variants.ambientPM.brochure")}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#contact_form">{t("ambientMonitors.variants.ambientPM.getQuote")}</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="show-container">
                                        <button
                                            className="showbutton"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#londonDetails"
                                            aria-expanded="false"
                                            aria-controls="londonDetails"
                                        >
                                            {t("ambientMonitors.variants.ambientPM.viewDetails")}
                                            <Image
                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                                                alt=""
                                                width={18}
                                                height={18}
                                            />
                                        </button>
                                        <div className="collapse" id="londonDetails">
                                            <div className="contentmy">
                                                <h3>{t("ambientMonitors.variants.ambientPM.detailsTitle")}</h3>
                                                <p>{t("ambientMonitors.variants.ambientPM.detailsDescription")}</p>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Prana-Air-Ambient-PM-Basic-Monitors.webp"
                                                    alt={t("ambientMonitors.variants.ambientPM.detailsImageAlt")}
                                                    width={800}
                                                    height={400}
                                                />
                                            </div>
                                            <button
                                                className="close-btn hidebutton"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#londonDetails"
                                                aria-expanded="true"
                                                aria-controls="londonDetails"
                                            >
                                                {t("ambientMonitors.variants.ambientPM.close")}
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                                                    alt="close icon"
                                                    width={18}
                                                    height={18}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="prana-sense-content"
                                    role="tabpanel"
                                    aria-labelledby="prana-sense-tab"
                                >
                                    <div className="color-box">
                                        <div className="ambient-pm-content">
                                            <h3>{t("ambientMonitors.variants.pranaSense.title")}</h3>
                                            <p>{t("ambientMonitors.variants.pranaSense.description")}</p>
                                            <h4>{t("ambientMonitors.variants.pranaSense.features")}</h4>
                                        </div>

                                        <div className="drone-icon-list">
                                            <ul>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/low-cost-icon.png"
                                                        alt={t("ambientMonitors.variants.pranaSense.featuresList.lowCost.alt")}
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>{t("ambientMonitors.variants.pranaSense.featuresList.lowCost.title")}</p>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/weatherproof-icon.png"
                                                        alt={t("ambientMonitors.variants.pranaSense.featuresList.waterproof.alt")}
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>{t("ambientMonitors.variants.pranaSense.featuresList.waterproof.title")}</p>
                                                </li>
                                            </ul>

                                            <ul>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/solar-powered.png"
                                                        alt={t("ambientMonitors.variants.pranaSense.featuresList.solarPowered.alt")}
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>{t("ambientMonitors.variants.pranaSense.featuresList.solarPowered.title")}</p>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/10/battery-backup.png"
                                                        alt={t("ambientMonitors.variants.pranaSense.featuresList.batteryBackup.alt")}
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>{t("ambientMonitors.variants.pranaSense.featuresList.batteryBackup.title")}</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="aqi-data">
                                            <ul>
                                                {t("ambientMonitors.variants.pranaSense.parameters", { returnObjects: true }).map(
                                                    (param, index) => (
                                                        <li key={index}>
                                                            <h5>{param}</h5>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="get-brochur">
                                        <ul>
                                            <li>
                                                <Link href="https://www.pranaair.com/wp-content/uploads/2024/06/construction-site-Prana-Air-Air-quality-monitor-brochure.pdf">
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                                                        alt={t("ambientMonitors.variants.pranaSense.brochure")}
                                                        width={22}
                                                        height={22}
                                                    />
                                                    {t("ambientMonitors.variants.pranaSense.brochure")}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#contact_form">{t("ambientMonitors.variants.pranaSense.getQuote")}</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="show-container">
                                        <button
                                            className="showbutton"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#solarDetails"
                                            aria-expanded="false"
                                            aria-controls="solarDetails"
                                        >
                                            {t("ambientMonitors.variants.pranaSense.viewDetails")}
                                            <Image
                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                                                alt=""
                                                width={18}
                                                height={18}
                                            />
                                        </button>
                                        <div className="collapse" id="solarDetails">
                                            <div className="contentmy">
                                                <h3>{t("ambientMonitors.variants.pranaSense.detailsTitle")}</h3>
                                                <p>{t("ambientMonitors.variants.pranaSense.detailsDescription")}</p>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Prana-Sense-device.webp"
                                                    alt={t("ambientMonitors.variants.pranaSense.detailsImageAlt")}
                                                    width={800}
                                                    height={400}
                                                />
                                            </div>
                                            <button
                                                className="close-btn hidebutton"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#solarDetails"
                                                aria-expanded="true"
                                                aria-controls="solarDetails"
                                            >
                                                {t("ambientMonitors.variants.pranaSense.close")}
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                                                    alt="close icon"
                                                    width={18}
                                                    height={18}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="ambient-pro-content"
                                    role="tabpanel"
                                    aria-labelledby="ambient-pro-tab"
                                >
                                    <div className="color-box">
                                        <div className="ambient-pm-content">
                                            <h3>{t("ambientMonitors.variants.ambientPro.title")}</h3>
                                            <p>{t("ambientMonitors.variants.ambientPro.description")}</p>
                                            <h4>{t("ambientMonitors.variants.ambientPro.features")}</h4>
                                        </div>

                                        <div className="drone-icon-list">
                                            <ul>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/low-cost-icon.png"
                                                        alt={t("ambientMonitors.variants.ambientPro.featuresList.lowCost.alt")}
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>{t("ambientMonitors.variants.ambientPro.featuresList.lowCost.title")}</p>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/online-data-access.png"
                                                        alt={t("ambientMonitors.variants.ambientPro.featuresList.dataAccess.alt")}
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>{t("ambientMonitors.variants.ambientPro.featuresList.dataAccess.title")}</p>
                                                </li>
                                            </ul>

                                            <ul>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/weatherproof-icon.png"
                                                        alt={t("ambientMonitors.variants.ambientPro.featuresList.waterproof.alt")}
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>{t("ambientMonitors.variants.ambientPro.featuresList.waterproof.title")}</p>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/multiple-sensors.png"
                                                        alt={t("ambientMonitors.variants.ambientPro.featuresList.multipleSensors.alt")}
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>{t("ambientMonitors.variants.ambientPro.featuresList.multipleSensors.title")}</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="aqi-data">
                                            <ul>
                                                {t("ambientMonitors.variants.ambientPro.parameters", { returnObjects: true }).map(
                                                    (param, index) => (
                                                        <li key={index}>
                                                            <h5>{param}</h5>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="get-brochur">
                                        <ul>
                                            <li>
                                                <Link href={`${domain}/#`}>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                                                        alt={t("ambientMonitors.variants.ambientPro.brochure")}
                                                        width={22}
                                                        height={22}
                                                    />
                                                    {t("ambientMonitors.variants.ambientPro.brochure")}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={`${domain}/air-quality-monitor/ambient-air-monitor/prana-sense/`}>
                                                    {t("ambientMonitors.variants.ambientPro.getQuote")}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="ambent-weather-staion">
                                        <div className="staions-image">
                                            <Image
                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-ambient-pro-monitor-variants.webp"
                                                alt={t("ambientMonitors.variants.ambientPro.title")}
                                                width={250}
                                                height={250}
                                            />
                                        </div>
                                        <div className="staion-tetx">
                                            <h4>{t("ambientMonitors.variants.ambientPro.weatherStation.title")}</h4>
                                            <p>{t("ambientMonitors.variants.ambientPro.weatherStation.description")}</p>
                                        </div>
                                    </div>

                                    <div className="show-container">
                                        <button
                                            className="showbutton"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#tokyoDetails"
                                            aria-expanded="false"
                                            aria-controls="tokyoDetails"
                                        >
                                            {t("ambientMonitors.variants.ambientPro.viewDetails")}
                                            <Image
                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                                                alt=""
                                                width={18}
                                                height={18}
                                            />
                                        </button>
                                        <div className="collapse" id="tokyoDetails">
                                            <div className="contentmy">
                                                <h3>{t("ambientMonitors.variants.ambientPro.detailsTitle")}</h3>
                                                <p>{t("ambientMonitors.variants.ambientPro.detailsDescription")}</p>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Ambient-Pro-Monitor.webp"
                                                    alt={t("ambientMonitors.variants.ambientPro.detailsImageAlt")}
                                                    width={800}
                                                    height={400}
                                                />
                                            </div>
                                            <button
                                                className="close-btn hidebutton"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#tokyoDetails"
                                                aria-expanded="true"
                                                aria-controls="tokyoDetails"
                                            >
                                                {t("ambientMonitors.variants.ambientPro.close")}
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/cllapse-icon.png"
                                                    alt="close icon"
                                                    width={18}
                                                    height={18}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            {/* Nav tabs */}
                            <ul className="nav nav-tabs variant-tab" id="ambientTabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="ambient-pm-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#ambient-pm-content"
                                        type="button"
                                        role="tab"
                                        aria-controls="ambient-pm-content"
                                        aria-selected="true"
                                    >
                                        <div className="tab-inner">
                                            <div>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Ambient-PM-monitor.webp"
                                                    alt={t("ambientMonitors.variants.ambientPM.title")}
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                            <div>
                                                <h3>{t("ambientMonitors.variants.ambientPM.title")}</h3>
                                            </div>
                                            <div>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/arrow-ambient.png"
                                                    alt="arrow"
                                                    width={20}
                                                    height={20}
                                                    className="arrow"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="prana-sense-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#prana-sense-content"
                                        type="button"
                                        role="tab"
                                        aria-controls="prana-sense-content"
                                        aria-selected="false"
                                    >
                                        <div className="tab-inner">
                                            <div>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/ambient-variants-prana-sense-monitor.webp"
                                                    alt={t("ambientMonitors.variants.pranaSense.title")}
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                            <div>
                                                <h3>{t("ambientMonitors.variants.pranaSense.title")}</h3>
                                            </div>
                                            <div>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/arrow-ambient.png"
                                                    alt="arrow"
                                                    width={20}
                                                    height={20}
                                                    className="arrow"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="ambient-pro-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#ambient-pro-content"
                                        type="button"
                                        role="tab"
                                        aria-controls="ambient-pro-content"
                                        aria-selected="false"
                                    >
                                        <div className="tab-inner">
                                            <div>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Prana-Airs-ambient-pro-monitor.webp"
                                                    alt={t("ambientMonitors.variants.ambientPro.title")}
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                            <div>
                                                <h3>{t("ambientMonitors.variants.ambientPro.title")}</h3>
                                            </div>
                                            <div>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/arrow-ambient.png"
                                                    alt="arrow"
                                                    width={20}
                                                    height={20}
                                                    className="arrow"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Prana Air's Ambient Air Monitors? */}
            <section className="monitor-main-feature-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="main-feature-heading">
                                <h2>{t("ambientMonitors.whyPranaAir.title")}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="moniotr-main-icons-box">
                                <ul>
                                    <li className="line-shdw">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/pranaair-real-time-data-monitoring.png"
                                            alt={t("ambientMonitors.whyPranaAir.features.0.alt")}
                                            width={80}
                                            height={80}
                                        />
                                        <h3>{t("ambientMonitors.whyPranaAir.features.0.title")}</h3>
                                    </li>
                                    <li className="line-shdw">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/pranaair-low-cost-monitors.png"
                                            alt={t("ambientMonitors.whyPranaAir.features.1.alt")}
                                            width={80}
                                            height={80}
                                        />
                                        <h3>{t("ambientMonitors.whyPranaAir.features.1.title")}</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="moniotr-main-icons-box">
                                <ul>
                                    <li className="line-shdw">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/pranaair-accurate-sensors.png"
                                            alt={t("ambientMonitors.whyPranaAir.features.2.alt")}
                                            width={80}
                                            height={80}
                                        />
                                        <h3>{t("ambientMonitors.whyPranaAir.features.2.title")}</h3>
                                    </li>
                                    <li className="line-shdw">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/pranaair-cloud-data-access.png"
                                            alt={t("ambientMonitors.whyPranaAir.features.3.alt")}
                                            width={80}
                                            height={80}
                                        />
                                        <h3>{t("ambientMonitors.whyPranaAir.features.3.title")}</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="moniotr-main-icons-box">
                                <ul>
                                    <li className="line-shdw">
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/pranaair-connectivity.png"
                                            alt={t("ambientMonitors.whyPranaAir.features.4.alt")}
                                            width={80}
                                            height={80}
                                        />
                                        <h3>{t("ambientMonitors.whyPranaAir.features.4.title")}</h3>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/pranaair-low-cost-maintenance.png"
                                            alt={t("ambientMonitors.whyPranaAir.features.5.alt")}
                                            width={80}
                                            height={80}
                                        />
                                        <h3>{t("ambientMonitors.whyPranaAir.features.5.title")}</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section className="app-ambient-section">
                <div className="container">
                    <div className="row app-ambient-line">
                        <div className="col-md-6">
                            <div className="app-ambient-heading">
                                <h2>{t("applications.title")}</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="app-ambeint-para">
                                <p>{t("applications.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="box-mob">
                                        <div className="box-inner">
                                            <div className="container-my">
                                                <Link href={`${domain}/solutions-by-application/constructions/`}>
                                                    <Image
                                                        className="image"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/construction-air-quality-monitor.webp"
                                                        alt={t("applications.items.0.alt")}
                                                        width={400}
                                                        height={300}
                                                    />
                                                </Link>
                                                <div className="overlay">
                                                    <div className="text">
                                                        <p>{t("applications.items.0.description")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="app-card-title">
                                                <h3>
                                                    <Link href={`${domain}/solutions-by-application/constructions/`}>
                                                        {t("applications.items.0.title")}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="box-inner">
                                            <div className="container-my">
                                                <Link href={`${domain}/solutions-by-application/parking-lot/`}>
                                                    <Image
                                                        className="image"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/smart-city-air-quality-monitor.webp"
                                                        alt={t("applications.items.1.alt")}
                                                        width={400}
                                                        height={300}
                                                    />
                                                </Link>
                                                <div className="overlay">
                                                    <div className="text">
                                                        <p>{t("applications.items.1.description")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="app-card-title">
                                                <h3>
                                                    <Link href={`${domain}/solutions-by-application/parking-lot/`}>
                                                        {t("applications.items.1.title")}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="box-mob">
                                        <div className="box-inner">
                                            <div className="container-my">
                                                <Link href={`${domain}/solutions-by-application/smart-city/`}>
                                                    <Image
                                                        className="image"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/rmc-air-quality-monitor.webp"
                                                        alt={t("applications.items.2.alt")}
                                                        width={400}
                                                        height={300}
                                                    />
                                                </Link>
                                                <div className="overlay">
                                                    <div className="text">
                                                        <p>{t("applications.items.2.description")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="app-card-title">
                                                <h3>
                                                    <Link href={`${domain}/solutions-by-application/smart-city/`}>
                                                        {t("applications.items.2.title")}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="box-inner">
                                            <div className="container-my">
                                                <Link href={`${domain}/solutions-by-application/real-estate/`}>
                                                    <Image
                                                        className="image"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/parking-lot-air-quality-monitor.webp"
                                                        alt={t("applications.items.3.alt")}
                                                        width={400}
                                                        height={300}
                                                    />
                                                </Link>
                                                <div className="overlay">
                                                    <div className="text">
                                                        <p>{t("applications.items.3.description")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="app-card-title">
                                                <h3>
                                                    <Link href={`${domain}/solutions-by-application/real-estate/`}>
                                                        {t("applications.items.3.title")}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="box-mob">
                                        <div className="box-inner">
                                            <div className="container-my">
                                                <Link href={`${domain}/solutions-by-application/ready-mix-concrete-plant/`}>
                                                    <Image
                                                        className="image"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/real-estates-air-quality-monitor.webp"
                                                        alt={t("applications.items.4.alt")}
                                                        width={400}
                                                        height={300}
                                                    />
                                                </Link>
                                                <div className="overlay">
                                                    <div className="text">
                                                        <p>{t("applications.items.4.description")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="app-card-title">
                                                <h3>
                                                    <Link href={`${domain}/solutions-by-application/ready-mix-concrete-plant/`}>
                                                        {t("applications.items.4.title")}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="box-inner">
                                            <div className="container-my">
                                                <Link href={`${domain}/solutions-by-application/airports/`}>
                                                    <Image
                                                        className="image"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/airport-air-quality-monitor.webp"
                                                        alt={t("applications.items.5.alt")}
                                                        width={400}
                                                        height={300}
                                                    />
                                                </Link>
                                                <div className="overlay">
                                                    <div className="text">
                                                        <p>{t("applications.items.5.description")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="app-card-title">
                                                <h3>
                                                    <Link href={`${domain}/solutions-by-application/airports/`}>
                                                        {t("applications.items.5.title")}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="explore-btn">
                                <Link href={`${domain}/solutions-by-application/`}>{t("applications.exploreMore")}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Weather Station Section */}
            <section className="weather-staiton-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="weather-staiton-headimg">
                                <h2>{t("weatherStation.title")}</h2>
                                <p>{t("weatherStation.description")}</p>
                                <Link href={`${domain}/air-quality-monitor/weather-station/`}>{t("weatherStation.knowMore")}</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="weather-staiton-img">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-air-accurate-weather-station.webp"
                                    alt={t("weatherStation.imageAlt")}
                                    width={400}
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Parts & Labels Section */}
            <section className="part-label-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="part-label-heading">
                                <h2>{t("partsLabels.title")}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="part-label-tab">
                                <ul className="nav nav-tabs" id="partsLabelTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="ambient-pm-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#ambient-pm"
                                            type="button"
                                            role="tab"
                                            aria-controls="ambient-pm"
                                            aria-selected="true"
                                        >
                                            {t("partsLabels.tabs.ambientPM")}
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="ambient-pro-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#ambient-pro"
                                            type="button"
                                            role="tab"
                                            aria-controls="ambient-pro"
                                            aria-selected="false"
                                        >
                                            {t("partsLabels.tabs.ambientPro")}
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="prana-sense-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#prana-sense"
                                            type="button"
                                            role="tab"
                                            aria-controls="prana-sense"
                                            aria-selected="false"
                                        >
                                            {t("partsLabels.tabs.pranaSense")}
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="partsLabelTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="ambient-pm"
                                        role="tabpanel"
                                        aria-labelledby="ambient-pm-tab"
                                    >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Image
                                                    className="ambeint-pm"
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-air-Ambient-PM.webp"
                                                    alt={t("partsLabels.ambientPM.imageAlt")}
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                            <div className="col-md-6 list-line">
                                                <div className="ambient-lite-label-list">
                                                    <ul>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num1.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.ambientPM.parts.0")}</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num2.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.ambientPM.parts.1")}</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num3.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.ambientPM.parts.2")}</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num4.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.ambientPM.parts.3")}</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num5.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.ambientPM.parts.4")}</h4>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num6.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.ambientPM.parts.5")}</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num7.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.ambientPM.parts.6")}</h4>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="ambient-pro" role="tabpanel" aria-labelledby="ambient-pro-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Image
                                                    className="ambeint-pro"
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Parts-Label-Ambient-pro.webp"
                                                    alt={t("partsLabels.ambientPro.imageAlt")}
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                            <div className="col-md-6 list-line">
                                                <div className="ambient-pro-label-list">
                                                    <ul>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num1.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                        </li>
                                                        <li>
                                                            <h4>{t("partsLabels.ambientPro.parts.0.title")}</h4>
                                                            {t("partsLabels.ambientPro.parts.0.description")}
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num2.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                        </li>
                                                        <li>
                                                            <h4>{t("partsLabels.ambientPro.parts.1.title")}</h4>
                                                            {t("partsLabels.ambientPro.parts.1.description")}
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num3.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                        </li>
                                                        <li>
                                                            <h4>{t("partsLabels.ambientPro.parts.2.title")}</h4>
                                                            {t("partsLabels.ambientPro.parts.2.description")}
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num4.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                        </li>
                                                        <li>
                                                            <h4>{t("partsLabels.ambientPro.parts.3.title")}</h4>
                                                            {t("partsLabels.ambientPro.parts.3.description")}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="prana-sense" role="tabpanel" aria-labelledby="prana-sense-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Image
                                                    className="ambeint-lite"
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-sense-monitor-pranaair.webp"
                                                    alt={t("partsLabels.pranaSense.imageAlt")}
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                            <div className="col-md-6 list-line">
                                                <div className="ambient-lite-label-list">
                                                    <ul>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num1.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.pranaSense.parts.0")}</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num2.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.pranaSense.parts.1")}</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num3.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.pranaSense.parts.2")}</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num4.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.pranaSense.parts.3")}</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num5.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.pranaSense.parts.4")}</h4>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num6.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.pranaSense.parts.5")}</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/num7.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.pranaSense.parts.6")}</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/10/num8.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.pranaSense.parts.7")}</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/10/num9.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.pranaSense.parts.8")}</h4>
                                                        </li>
                                                        <li>
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/10/num10.png"
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <h4>{t("partsLabels.pranaSense.parts.9")}</h4>
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
                </div>
            </section>

            {/* Technical Specifications Section */}
            <section className="tech-spec-section">
                <div className="container">
                    <div className="row texh-spec-line">
                        <div className="col-md-6">
                            <div className="tech-spec-heading">
                                <h2>{t("techSpecs.title")}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="tech-tab-spec">
                                <ul className="nav nav-tabs" id="techTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="ambient-pm-tech-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#ambient-pm-tech"
                                            type="button"
                                            role="tab"
                                            aria-controls="ambient-pm-tech"
                                            aria-selected="true"
                                        >
                                            {t("techSpecs.tabs.ambientPM")}
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="ambient-pro-tech-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#ambient-pro-tech"
                                            type="button"
                                            role="tab"
                                            aria-controls="ambient-pro-tech"
                                            aria-selected="false"
                                        >
                                            {t("techSpecs.tabs.ambientPro")}
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="prana-sense-tech-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#prana-sense-tech"
                                            type="button"
                                            role="tab"
                                            aria-controls="prana-sense-tech"
                                            aria-selected="false"
                                        >
                                            {t("techSpecs.tabs.pranaSense")}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="techTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="ambient-pm-tech"
                                    role="tabpanel"
                                    aria-labelledby="ambient-pm-tech-tab"
                                >
                                    <Link
                                        className="tech-spec-btn"
                                        href="https://www.pranaair.com/wp-content/uploads/2024/06/construction-site-Prana-Air-Air-quality-monitor-brochure.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                                            alt={t("techSpecs.brochureAlt")}
                                            width={20}
                                            height={20}
                                        />
                                        {t("techSpecs.brochure")}
                                    </Link>
                                    <div className="tech-spec-parameter">
                                        <ul className="basic-pm">
                                            <li>
                                                <h4>{t("techSpecs.ambientPM.basicParams.title")}</h4>
                                            </li>
                                            <li>{t("techSpecs.ambientPM.basicParams.description")}</li>
                                        </ul>
                                        <ul className="tech-color-box">
                                            <li>
                                                <h4>{t("techSpecs.ambientPM.weatherStation.title")}</h4>
                                            </li>
                                            <li>{t("techSpecs.ambientPM.weatherStation.description")}</li>
                                        </ul>
                                        <div className="tech-spec-inner-parameter">
                                            <div className="tech-spec-inner-one ambient-lite-pm">
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPM.specs.connectivity.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPM.specs.connectivity.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPM.specs.weight.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPM.specs.weight.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPM.specs.dataInterval.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPM.specs.dataInterval.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPM.specs.usbType.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPM.specs.usbType.value")}</li>
                                                </ul>
                                            </div>
                                            <div className="tech-spec-inner-two">
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPM.specs.mobileApp.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPM.specs.mobileApp.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPM.specs.dimensions.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPM.specs.dimensions.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPM.specs.storage.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPM.specs.storage.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPM.specs.housing.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPM.specs.housing.value")}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="ambient-pro-tech"
                                    role="tabpanel"
                                    aria-labelledby="ambient-pro-tech-tab"
                                >
                                    <div className="tech-spec-parameter">
                                        <ul>
                                            <li>
                                                <h4>{t("techSpecs.ambientPro.params.title")}</h4>
                                            </li>
                                            <li>{t("techSpecs.ambientPro.params.description")}</li>
                                        </ul>
                                        <div className="tech-spec-inner-parameter">
                                            <div className="tech-spec-inner-one-pm">
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPro.specs.connectivity.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPro.specs.connectivity.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPro.specs.weight.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPro.specs.weight.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPro.specs.battery.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPro.specs.battery.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPro.specs.usbType.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPro.specs.usbType.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPro.specs.dataInterval.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPro.specs.dataInterval.value")}</li>
                                                </ul>
                                            </div>
                                            <div className="tech-spec-inner-two mg-top">
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPro.specs.mobileApp.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPro.specs.mobileApp.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPro.specs.dimensions.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPro.specs.dimensions.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPro.specs.storage.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPro.specs.storage.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.ambientPro.specs.housing.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.ambientPro.specs.housing.value")}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="prana-sense-tech"
                                    role="tabpanel"
                                    aria-labelledby="prana-sense-tech-tab"
                                >
                                    <Link className="tech-spec-btn" href={`${domain}/#`}>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                                            alt={t("techSpecs.brochureAlt")}
                                            width={20}
                                            height={20}
                                        />
                                        {t("techSpecs.brochure")}
                                    </Link>
                                    <div className="tech-spec-parameter">
                                        <ul>
                                            <li>
                                                <h4>{t("techSpecs.pranaSense.params.title")}</h4>
                                            </li>
                                            <li>{t("techSpecs.pranaSense.params.description")}</li>
                                        </ul>
                                        <div className="tech-spec-inner-parameter">
                                            <div className="tech-spec-inner-one-pm">
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.pranaSense.specs.connectivity.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.pranaSense.specs.connectivity.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.pranaSense.specs.weight.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.pranaSense.specs.weight.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.pranaSense.specs.power.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.pranaSense.specs.power.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.pranaSense.specs.dataInterval.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.pranaSense.specs.dataInterval.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.pranaSense.specs.displaySize.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.pranaSense.specs.displaySize.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.pranaSense.specs.battery.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.pranaSense.specs.battery.value")}</li>
                                                </ul>
                                            </div>
                                            <div className="tech-spec-inner-two mg-top">
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.pranaSense.specs.mobileApp.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.pranaSense.specs.mobileApp.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.pranaSense.specs.dimensions.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.pranaSense.specs.dimensions.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.pranaSense.specs.housing.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.pranaSense.specs.housing.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.pranaSense.specs.powerSupply.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.pranaSense.specs.powerSupply.value")}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>{t("techSpecs.pranaSense.specs.storage.title")}</h4>
                                                    </li>
                                                    <li>{t("techSpecs.pranaSense.specs.storage.value")}</li>
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

            {/* Modes of Connectivity Section */}
            <div className="generic-heading-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="app-ambient-heading generic-heading">
                                <h2>{t("connectivity.title")}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modes of Connectivity Section */}

            {/* Data Accessibility & Analysis Section */}
            <div className="app-ambient-line aqi-tv-heading-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="app-ambient-heading aqi-tv-heading">
                                <h2>{t("dataAccess.title")}</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="app-ambeint-para graph-para">
                                <p>{t("dataAccess.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aqi-tab-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="data-tab">
                                <ul className="nav nav-tabs" id="dataTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="web-dashboard-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#web-dashboard"
                                            type="button"
                                            role="tab"
                                            aria-controls="web-dashboard"
                                            aria-selected="true"
                                        >
                                            {t("dataAccess.tabs.webDashboard")}
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="mobile-app-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#mobile-app"
                                            type="button"
                                            role="tab"
                                            aria-controls="mobile-app"
                                            aria-selected="false"
                                        >
                                            {t("dataAccess.tabs.mobileApp")}
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="tv-app-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tv-app"
                                            type="button"
                                            role="tab"
                                            aria-controls="tv-app"
                                            aria-selected="false"
                                        >
                                            {t("dataAccess.tabs.tvApp")}
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-content" id="dataTabContent">
                                {/* Web Dashboard Tab */}
                                <div
                                    className="tab-pane fade show active"
                                    id="web-dashboard"
                                    role="tabpanel"
                                    aria-labelledby="web-dashboard-tab"
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="aqi-tv-app-box">
                                                <ul className="aqi-tv-img">
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/AQI-Dashboard-icon.png"
                                                            alt={t("dataAccess.webDashboard.iconAlt")}
                                                            width={85}
                                                            height={85}
                                                        />
                                                    </li>
                                                    <li>
                                                        <h4>{t("dataAccess.webDashboard.title")}</h4>
                                                        <p>{t("dataAccess.webDashboard.description")}</p>
                                                    </li>
                                                </ul>
                                                <div className="data-icon">
                                                    <div className="data-icon-box1">
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/World-air-pollution.png"
                                                                    alt={t("dataAccess.webDashboard.features.0.alt")}
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>{t("dataAccess.webDashboard.features.0.text")}</h6>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/weather.png"
                                                                    alt={t("dataAccess.webDashboard.features.1.alt")}
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>{t("dataAccess.webDashboard.features.1.text")}</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="data-icon-box1">
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/health-recommendation.png"
                                                                    alt={t("dataAccess.webDashboard.features.2.alt")}
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>{t("dataAccess.webDashboard.features.2.text")}</h6>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/Compare.png"
                                                                    alt={t("dataAccess.webDashboard.features.3.alt")}
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>{t("dataAccess.webDashboard.features.3.text")}</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="aqi-tv-btn-box">
                                                    <ul>
                                                        <li>
                                                            <Link className="apple-btn" href="https://www.aqi.in/userlogin">
                                                                {t("dataAccess.webDashboard.viewButton")}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="indoor-index-image">
                                                <Image
                                                    className="aqidash-img"
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-dashboard-co2.png"
                                                    alt={t("dataAccess.webDashboard.imageAlt")}
                                                    width={600}
                                                    height={400}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile App Tab */}
                                <div className="tab-pane fade" id="mobile-app" role="tabpanel" aria-labelledby="mobile-app-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="aqi-tv-app-box">
                                                <ul className="aqi-tv-img">
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-dashboard-co2.png"
                                                            alt={t("dataAccess.mobileApp.iconAlt")}
                                                            width={85}
                                                            height={85}
                                                        />
                                                    </li>
                                                    <li>
                                                        <h4>{t("dataAccess.mobileApp.title")}</h4>
                                                        <p>{t("dataAccess.mobileApp.description")}</p>
                                                    </li>
                                                </ul>
                                                <div className="data-icon">
                                                    <div className="data-icon-box1">
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/real-time-co2-level.png"
                                                                    alt={t("dataAccess.mobileApp.features.0.alt")}
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>{t("dataAccess.mobileApp.features.0.text")}</h6>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-data.png"
                                                                    alt={t("dataAccess.mobileApp.features.1.alt")}
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>{t("dataAccess.mobileApp.features.1.text")}</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="data-icon-box1">
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/World-air-pollution.png"
                                                                    alt={t("dataAccess.mobileApp.features.2.alt")}
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>{t("dataAccess.mobileApp.features.2.text")}</h6>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/Compare.png"
                                                                    alt={t("dataAccess.mobileApp.features.3.alt")}
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>{t("dataAccess.mobileApp.features.3.text")}</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="aqi-tv-btn-box">
                                                    <ul>
                                                        <li>
                                                            <Link className="apple-btn" href="https://apps.apple.com/tt/app/aqi/id1439684571">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/apple-icon.png"
                                                                    alt={t("dataAccess.mobileApp.iosAlt")}
                                                                    width={15}
                                                                    height={15}
                                                                />
                                                                {t("dataAccess.mobileApp.iosButton")} <span className="iso">iOS</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="apple-btn andro-btn"
                                                                href="https://play.google.com/store/apps/details?id=com.aqi.data"
                                                            >
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/android-icon.png"
                                                                    alt={t("dataAccess.mobileApp.androidAlt")}
                                                                    width={15}
                                                                    height={15}
                                                                />
                                                                {t("dataAccess.mobileApp.androidButton")} <span className="andro">android</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="indoor-index-image">
                                                <Image
                                                    className="mobile-app"
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/ambient-pm-only-pm.png"
                                                    alt={t("dataAccess.mobileApp.imageAlt")}
                                                    width={300}
                                                    height={400}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* TV App Tab */}
                                <div className="tab-pane fade" id="tv-app" role="tabpanel" aria-labelledby="tv-app-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="aqi-tv-app-box">
                                                <ul className="aqi-tv-img">
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/AQI-Dashboard-icon.png"
                                                            alt={t("dataAccess.tvApp.iconAlt")}
                                                            width={85}
                                                            height={85}
                                                        />
                                                    </li>
                                                    <li>
                                                        <h4>{t("dataAccess.tvApp.title")}</h4>
                                                        <p>{t("dataAccess.tvApp.description")}</p>
                                                    </li>
                                                </ul>
                                                <div className="data-icon">
                                                    <div className="data-icon-box1">
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/Compare.png"
                                                                    alt={t("dataAccess.tvApp.features.0.alt")}
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>{t("dataAccess.tvApp.features.0.text")}</h6>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/24-hours.png"
                                                                    alt={t("dataAccess.tvApp.features.1.alt")}
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>{t("dataAccess.tvApp.features.1.text")}</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="data-icon-box1">
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/AQI.png"
                                                                    alt={t("dataAccess.tvApp.features.2.alt")}
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>{t("dataAccess.tvApp.features.2.text")}</h6>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/Choose.png"
                                                                    alt={t("dataAccess.tvApp.features.3.alt")}
                                                                    width={41}
                                                                    height={41}
                                                                />
                                                            </li>
                                                            <li>
                                                                <h6>{t("dataAccess.tvApp.features.3.text")}</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="aqi-tv-btn-box">
                                                    <ul>
                                                        <li>
                                                            <Link
                                                                className="apple-btn"
                                                                href="https://play.google.com/store/apps/details?id=com.aqitv.aqitvnew"
                                                            >
                                                                {t("dataAccess.tvApp.downloadButton")} <span className="iso">TV</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="indoor-index-image">
                                                <Image
                                                    className="tv-app"
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-tv-app-dashboard.png"
                                                    alt={t("dataAccess.tvApp.imageAlt")}
                                                    width={600}
                                                    height={400}
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

            {/* Ambient Air Quality Section */}
            <section className="ambient-air-quality-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="ambient-air-quote fadeInUp animated">
                                <p>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/quote-icon-ambient.png"
                                        alt={t("ambientAirQuality.quoteIconAlt")}
                                        width={30}
                                        height={30}
                                    />
                                    <br />
                                    {t("ambientAirQuality.quote")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CAAQMS Section */}
            <section className="caaqms-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="caaqms-heading fadeInUp animated">
                                <h2>{t("caaqms.title")}</h2>
                                <p className="text-center">{t("caaqms.description1")}</p>
                                <p className="text-center">{t("caaqms.description2")}</p>
                                <p className="text-center">{t("caaqms.description3")}</p>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="compression-caaqms-title fadeInUp animated">
                                        <h3>{t("caaqms.comparison.title")}</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="row mob-row">
                                <div className="col-sm-4">
                                    <div className="caaqms-data">
                                        <h4>{t("caaqms.comparison.parameters.0")}</h4>
                                        <h4>{t("caaqms.comparison.parameters.1")}</h4>
                                        <h4>{t("caaqms.comparison.parameters.2")}</h4>
                                        <h4>{t("caaqms.comparison.parameters.3")}</h4>
                                        <h4>{t("caaqms.comparison.parameters.4")}</h4>
                                        <h4>{t("caaqms.comparison.parameters.5")}</h4>
                                        <h4>{t("caaqms.comparison.parameters.6")}</h4>
                                        <h4>{t("caaqms.comparison.parameters.7")}</h4>
                                        <h4>{t("caaqms.comparison.parameters.8")}</h4>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="prana-air-caaqms-heading">
                                        <h3>{t("caaqms.comparison.pranaAir.title")}</h3>
                                    </div>
                                    <div className="prana-caaqms-data">
                                        <h5>{t("caaqms.comparison.pranaAir.values.0")}</h5>
                                        <h5>{t("caaqms.comparison.pranaAir.values.1")}</h5>
                                        <h5>{t("caaqms.comparison.pranaAir.values.2")}</h5>
                                        <h5>{t("caaqms.comparison.pranaAir.values.3")}</h5>
                                        <h5>{t("caaqms.comparison.pranaAir.values.4")}</h5>
                                        <h5>{t("caaqms.comparison.pranaAir.values.5")}</h5>
                                        <h5>{t("caaqms.comparison.pranaAir.values.6")}</h5>
                                        <h5>{t("caaqms.comparison.pranaAir.values.7")}</h5>
                                        <h5>{t("caaqms.comparison.pranaAir.values.8")}</h5>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="prana-air-caaqms-heading">
                                        <h3>{t("caaqms.comparison.traditional.title")}</h3>
                                    </div>
                                    <div className="prana-caaqms-data tardition-data">
                                        <h5>{t("caaqms.comparison.traditional.values.0")}</h5>
                                        <h5>{t("caaqms.comparison.traditional.values.1")}</h5>
                                        <h5>{t("caaqms.comparison.traditional.values.2")}</h5>
                                        <h5>{t("caaqms.comparison.traditional.values.3")}</h5>
                                        <h5>{t("caaqms.comparison.traditional.values.4")}</h5>
                                        <h5>{t("caaqms.comparison.traditional.values.5")}</h5>
                                        <h5>{t("caaqms.comparison.traditional.values.6")}</h5>
                                        <h5>{t("caaqms.comparison.traditional.values.7")}</h5>
                                        <h5>{t("caaqms.comparison.traditional.values.8")}</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="caaqms-air-quality-monitor-systm">
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/caaqms-air-quality-monitor.png"
                                                    alt={t("caaqms.pranaAir.imageAlt")}
                                                    width={500}
                                                    height={300}
                                                />
                                            </li>
                                            <li>
                                                <span className="parana">{t("caaqms.pranaAir.brandName")}</span>{" "}
                                                {t("caaqms.pranaAir.description")}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="caaqms-air-quality-monitor-systm">
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/caaqms-air-quality-monitor-systm.png"
                                                    alt={t("caaqms.traditional.imageAlt")}
                                                    width={500}
                                                    height={300}
                                                />
                                            </li>
                                            <li>
                                                <span className="parana">{t("caaqms.traditional.brandName")}</span>{" "}
                                                {t("caaqms.traditional.description")}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BAM Banner */}
            <section className="bam-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6"></div>
                        <div className="col-sm-6">
                            <div className="chip-sensor-heading bam-content fadeInUp animated">
                                <h2>{t("bamBanner.title")}</h2>
                                <p>{t("bamBanner.description")}</p>
                                <p>
                                    <Link href="#contact_form">{t("bamBanner.knowMore")}</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accuracy Graph */}
            <section className="accuracy-graph-section">
                <div className="container">
                    <div className="row app-ambient-line">
                        <div className="col-sm-6">
                            <div className="app-ambient-heading graph-heading fadeInUp animated">
                                <h2>{t("accuracyGraph.title")}</h2>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="app-ambeint-para graph-para fadeInUp animated">
                                <p>{t("accuracyGraph.description")}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-center">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-sensor-data-accuracy-graph.webp"
                                    alt={t("accuracyGraph.imageAlt")}
                                    width={1000}
                                    height={600}
                                    className="graph-img img-fluid"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row mini-graph-bg">
                        <div className="col-sm-4">
                            <div className="text-center">
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-data-accuracy-comparison.png"
                                    alt={t("accuracyGraph.comparisonAlt")}
                                    width={300}
                                    height={200}
                                    className="mini-graph img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="mini-graph-text">
                                <p>{t("accuracyGraph.question")}</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="text-center">
                                <Link href={`${domain}/air-quality-data-accuracy/`} className="mini-graph-btn">
                                    {t("accuracyGraph.exploreMore")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="case-studies-section">
                <div className="container">
                    <div className="row app-ambient-line case-studies-heading">
                        <div className="col-sm-6">
                            <div className="app-ambient-heading graph-heading fadeInUp animated">
                                <h2>{t("caseStudies.title")}</h2>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="app-ambeint-para graph-para fadeInUp animated">
                                <p>{t("caseStudies.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            {/* Case Studies Slider Component would go here */}
                            <CaseStudiesSlider caseStudies={caseStudies} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Construction Site Section */}
            <section className="construction-site-section">
                <div className="container">
                    <div className="row mob-row-top">
                        <div className="col-sm-6">
                            <div className="construction-heading fadeInUp animated">
                                <h2>{t("constructionSite.count")}</h2>
                                <p>{t("constructionSite.description")}</p>
                                <ul className="guid-line">
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/DPCC-logo.png"
                                            alt={t("constructionSite.dpccLogoAlt")}
                                            width={80}
                                            height={80}
                                        />
                                    </li>
                                    <li>
                                        {t("constructionSite.according")}
                                        <br />
                                        <h5>{t("constructionSite.guidelines")}</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div>
                                <Link href={`${domain}/solutions-by-application/constructions/`}>
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/contruction-image.jpg"
                                        alt={t("constructionSite.imageAlt")}
                                        width={500}
                                        height={350}
                                        className="construction-img img-fluid"
                                    />
                                </Link>
                                <p>
                                    <Link href={`${domain}/solutions-by-application/constructions/`} className="learn-more">
                                        {t("constructionSite.knowMore")}
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/arrow-ambient.png"
                                            alt={t("constructionSite.arrowAlt")}
                                            width={20}
                                            height={20}
                                        />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chip Sensor Section */}
            <section className="chip-sensor-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="chip-sensor-heading fadeInUp animated">
                                <h2>{t("chipSensor.title")}</h2>
                                <p>
                                    {t("chipSensor.description")}
                                    <br />
                                    <Link href={`${domain}/air-quality-sensor/`} className="know-how-link">
                                        {t("chipSensor.knowHow")}
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6">{/* This column was empty in the original code */}</div>
                    </div>
                </div>
            </section>

            {/* Client Section */}
            <section className="client-section">
                <div className="container">
                    <div className="row app-ambient-line aqi-tv-heading-section">
                        <div className="col-sm-6">
                            <div className="app-ambient-heading clinet-heading fadeInUp animated">
                                <h2>{t("clients.title")}</h2>
                            </div>
                        </div>
                        <div className="col-sm-6">{/* This column was empty in the original code */}</div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="client-logo-img-box">
                                <ul>
                                    <li>
                                        <Image
                                            src={t("clients.logos.0.image") || "/placeholder.svg"}
                                            alt={t("clients.logos.0.alt")}
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={t("clients.logos.1.image") || "/placeholder.svg"}
                                            alt={t("clients.logos.1.alt")}
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={t("clients.logos.2.image") || "/placeholder.svg"}
                                            alt={t("clients.logos.2.alt")}
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={t("clients.logos.3.image") || "/placeholder.svg"}
                                            alt={t("clients.logos.3.alt")}
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={t("clients.logos.4.image") || "/placeholder.svg"}
                                            alt={t("clients.logos.4.alt")}
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={t("clients.logos.5.image") || "/placeholder.svg"}
                                            alt={t("clients.logos.5.alt")}
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={t("clients.logos.6.image") || "/placeholder.svg"}
                                            alt={t("clients.logos.6.alt")}
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={t("clients.logos.7.image") || "/placeholder.svg"}
                                            alt={t("clients.logos.7.alt")}
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={t("clients.logos.8.image") || "/placeholder.svg"}
                                            alt={t("clients.logos.8.alt")}
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={t("clients.logos.9.image") || "/placeholder.svg"}
                                            alt={t("clients.logos.9.alt")}
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={t("clients.logos.10.image") || "/placeholder.svg"}
                                            alt={t("clients.logos.10.alt")}
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={t("clients.logos.11.image") || "/placeholder.svg"}
                                            alt={t("clients.logos.11.alt")}
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={t("clients.logos.12.image") || "/placeholder.svg"}
                                            alt={t("clients.logos.12.alt")}
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={t("clients.logos.13.image") || "/placeholder.svg"}
                                            alt={t("clients.logos.13.alt")}
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={t("clients.logos.14.image") || "/placeholder.svg"}
                                            alt={t("clients.logos.14.alt")}
                                            width={150}
                                            height={80}
                                            className="img-fluid"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="contact-heading">
                            <h2>{t("contactForm.title")}</h2>
                            <p>{t("contactForm.description")}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ContactForm component would go here */}
            <div className="contact-form-placeholder">
                {/* This would be replaced with your actual ContactForm component */}
                <ContactForm />
            </div>

            {/* FAQs Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="faq-heading">
                                <h2>{t("faqs.title")}</h2>
                            </div>
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq1"
                                            aria-expanded="true"
                                            aria-controls="faq1"
                                        >
                                            {t("faqs.items.0.question")}
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">{t("faqs.items.0.answer")}</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq2"
                                            aria-expanded="false"
                                            aria-controls="faq2"
                                        >
                                            {t("faqs.items.1.question")}
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">{t("faqs.items.1.answer")}</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq3"
                                            aria-expanded="false"
                                            aria-controls="faq3"
                                        >
                                            {t("faqs.items.2.question")}
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">{t("faqs.items.2.answer")}</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq4"
                                            aria-expanded="false"
                                            aria-controls="faq4"
                                        >
                                            {t("faqs.items.3.question")}
                                        </button>
                                    </h2>
                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">{t("faqs.items.3.answer")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
