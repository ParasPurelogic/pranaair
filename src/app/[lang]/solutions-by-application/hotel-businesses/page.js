import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
    const lang = params?.lang || "en";
    const slug = "air-quality-monitor"; // page-specific slug
    const { t } = await getServerTranslation("hotel-businesses");
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

export default async function AirQualitySolutions() {
    const { t } = await getServerTranslation("hotel-businesses")

    const industrialApplications = [
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-hotel.jpg",
            title: t("industrialApplicationsData.hotel.title"),
            link: "/solutions-by-application/hotel-businesses/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-restaurant.jpg",
            title: t("industrialApplicationsData.restaurant.title"),
            link: "/solutions-by-application/restaurants/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-institute.jpg",
            title: t("industrialApplicationsData.institutes.title"),
            link: "/solutions-by-application/institutes/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-cinema.jpg",
            title: t("industrialApplicationsData.cinema.title"),
            link: "/solutions-by-application/cinema-and-theatre/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-autombile.jpg",
            title: t("industrialApplicationsData.automobiles.title"),
            link: "/solutions-by-application/automobile/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-real-estate.jpg",
            title: t("industrialApplicationsData.realEstate.title"),
            link: "/solutions-by-application/real-estate/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/08/solutions-for-mobile-phone-makers.png",
            title: t("industrialApplicationsData.smartphone.title"),
            link: "/solutions-by-application/smartphone-makers/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-construction-sites.jpg",
            title: t("industrialApplicationsData.construction.title"),
            link: "/solutions-by-industry/pm2-5-monitoring-air-pollution-by-construction-sites/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-animale-care-page.jpg",
            title: t("industrialApplicationsData.animalCare.title"),
            link: "/solutions-by-application/animal-care-center/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-logistics-page.jpg",
            title: t("industrialApplicationsData.logistics.title"),
            link: "/solutions-by-application/logistics/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-railway-page.jpg",
            title: t("industrialApplicationsData.railways.title"),
            link: "/solutions-by-application/railway/",
        }
    ]

    return (
        <div>
            <div
                className="row school_banner_box"
                style={{
                    backgroundImage:
                        "url('https://www.pranaair.com/wp-content/uploads/2022/09/air-quality-solution-for-hotels.jpg')",
                }}
            >
                <div className="col-md-6 banner_quality_box">
                    <div className="pocket_title_box school_aqi_box">
                        <h1>
                            {t("hotelBanner.title")} <span className="bold_text">{t("hotelBanner.highlight")}</span>
                        </h1>
                        <p>{t("hotelBanner.description")}</p>

                        <a className="pocket_buy_btn" href="#get_in_touch">
                            {t("hotelBanner.cta")}
                        </a>
                    </div>
                </div>
                <div className="col-md-6 banner_quality_img_box"></div>
            </div>

            {/* Major Air Pollutants Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                {t("majorPollutants.title")} <span className="bold_text">{t("majorPollutants.highlight")}</span>
                            </h2>
                            <p>{t("majorPollutants.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pollutants Features */}
            <div className="container pollution_cntr inner_container">
                <div className="row d-flex justify-content-between custom">
                    <div className="col-lg-3 flex-fill text-center">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-parameter.png"
                                alt="pm2.5 in school and institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("pollutantFeatures.pm25.title")}</h2>
                                <p>{t("pollutantFeatures.pm25.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 flex-fill text-center">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-gas-icon.png"
                                alt="co2 gas in schools and institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("pollutantFeatures.co2.title")}</h2>
                                <p>{t("pollutantFeatures.co2.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 flex-fill text-center">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-parameter-icon.png"
                                alt="tvoc in schools and institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("pollutantFeatures.tvoc.title")}</h2>
                                <p>{t("pollutantFeatures.tvoc.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 flex-fill text-center">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/co-icon.png"
                                alt="ozone in school & institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("pollutantFeatures.co.title")}</h2>
                                <p>{t("pollutantFeatures.co.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* School Image Box */}
            <div
                className="row school_img_box"
                style={{
                    backgroundImage:
                        "url('https://www.pranaair.com/wp-content/uploads/2022/09/air-quality-problems-in-hotel.jpg')",
                }}
            >
                <div className="col-md-12">
                    <div className="school_box_cntr">
                        <ul>
                            <li className="first_school_box">
                                <span className="school_icon_box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-icon-2.png"
                                        alt="pm2.5 in school & institutes"
                                    />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>{t("schoolImageBox.pm25.title")}</h3>
                                    <p>{t("schoolImageBox.pm25.description")}</p>
                                </div>
                            </li>
                            <li className="second_school_box">
                                <span className="school_icon_box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-icon.png"
                                        alt="co2 in school & institutes"
                                    />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>{t("schoolImageBox.co2.title")}</h3>
                                    <p>{t("schoolImageBox.co2.description")}</p>
                                </div>
                            </li>
                            <li className="third_school_box">
                                <span className="school_icon_box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2022/09/hcho-icon.png"
                                        alt="ozone o3 in school & institutes"
                                    />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>{t("schoolImageBox.hcho.title")}</h3>
                                    <p>{t("schoolImageBox.hcho.description")}</p>
                                </div>
                            </li>
                            <li className="fourth_school_box">
                                <span className="school_icon_box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-icon.png"
                                        alt="tvoc in school & institutes"
                                    />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>{t("schoolImageBox.tvocs.title")}</h3>
                                    <p>{t("schoolImageBox.tvocs.description")}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Who are at Risk Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                {t("risk.title")} <span className="bold_text">{t("risk.highlight")}</span>
                            </h2>
                            <p>{t("risk.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Risk Features */}
            <div className="container pollution_cntr inner_container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/09/person-with-respiratory-illness.png"
                                alt="respiratory illness in schools & institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("riskFeatures.healthIssues.title")}</h2>
                                <p>{t("riskFeatures.healthIssues.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/09/hotel-chef.png"
                                alt="teacher in schools & institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("riskFeatures.kitchenStaff.title")}</h2>
                                <p>{t("riskFeatures.kitchenStaff.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/09/hotel-staff.png"
                                alt="sensitive groups in schools & institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("riskFeatures.hotelStaff.title")}</h2>
                                <p>{t("riskFeatures.hotelStaff.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/09/guests.png"
                                alt="students in schools & institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("riskFeatures.guests.title")}</h2>
                                <p>{t("riskFeatures.guests.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Air Quality Solutions Section */}
            <div className="container quality_solution_section top_space_heading">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                {t("qualitySolutions.title")} <span className="bold_text">{t("qualitySolutions.highlight")}</span>
                            </h2>
                            <p>{t("qualitySolutions.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bootstrap Tabs Section */}
            <div className="container air_quality_tab_sec">
                <div className="row">
                    <div className="col-md-12">
                        <div className="solution-tab">
                            <ul className="nav nav-tabs" id="airQualityTabs" role="tablist">
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
                                        {t("qualitySolutions.tabs.monitors")}
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="fresh-air-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#fresh-air"
                                        type="button"
                                        role="tab"
                                        aria-controls="fresh-air"
                                        aria-selected="false"
                                    >
                                        {t("qualitySolutions.tabs.freshAir")}
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="api-data-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#api-data"
                                        type="button"
                                        role="tab"
                                        aria-controls="api-data"
                                        aria-selected="false"
                                    >
                                        {t("qualitySolutions.tabs.apiData")}
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content" id="airQualityTabsContent">
                            <div className="tab-pane fade show active" id="monitors" role="tabpanel" aria-labelledby="monitors-tab">
                                <div className="tab-pane active inner_container">
                                    <div className="slider_cntr">
                                        <div className="slider_img_box">
                                            <Link href={`${domain}/air-quality-monitor/squair-air-monitor`}>
                                                <img
                                                    style={{ width: "100%" }}
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/air-quality-monitor-for-hotel-business.jpg"
                                                    alt="prana air squair air quality monitor for hotel businesses"
                                                />
                                            </Link>
                                        </div>
                                        <div className="slider_details_box">
                                            <h3>{t("qualitySolutions.monitors.title")}</h3>
                                            <span>{t("qualitySolutions.monitors.subtitle")}</span>
                                            <ul className="airquality_list">
                                                <li>{t("qualitySolutions.monitors.features.feature1")}</li>
                                                <li>{t("qualitySolutions.monitors.features.feature2")}</li>
                                                <li>{t("qualitySolutions.monitors.features.feature3")}</li>
                                            </ul>
                                            <Link
                                                href={`${domain}/air-quality-monitor/squair-air-monitor/`}
                                                className="knowmore_btn"
                                            >
                                                {t("qualitySolutions.monitors.knowMore")}
                                            </Link>
                                            <Link href={`${domain}/air-quality-monitor/rental-air-monitor`} className="rent_btn">
                                                {t("qualitySolutions.monitors.rent")}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="fresh-air" role="tabpanel" aria-labelledby="fresh-air-tab">
                                <div className="slider_cntr">
                                    <div className="slider_img_box">
                                        <Link href={`${domain}/fresh-air-machine/`}>
                                            <img
                                                style={{ width: "100%" }}
                                                src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-fresh-air-machine-for-iaq-solution.jpg"
                                                alt="prana air fresh air machine as iaq solution for school & institutes"
                                            />
                                        </Link>
                                    </div>
                                    <div className="slider_details_box">
                                        <h3>{t("qualitySolutions.freshAir.title")}</h3>
                                        <span>{t("qualitySolutions.freshAir.subtitle")}</span>
                                        <ul className="airquality_list">
                                            <li>{t("qualitySolutions.freshAir.features.feature1")}</li>
                                            <li>{t("qualitySolutions.freshAir.features.feature2")}</li>
                                            <li>{t("qualitySolutions.freshAir.features.feature3")}</li>
                                        </ul>
                                        <Link href={`${domain}/fresh-air-machine/`} className="knowmore_btn">
                                            {t("qualitySolutions.freshAir.knowMore")}
                                        </Link>
                                        <Link href={`${domain}/air-quality-monitor/rental-air-monitor`} className="rent_btn">
                                            {t("qualitySolutions.freshAir.rent")}
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="api-data" role="tabpanel" aria-labelledby="api-data-tab">
                                <div className="slider_cntr">
                                    <div className="slider_img_box">
                                        <img
                                            style={{ width: "100%" }}
                                            src="https://www.pranaair.com/wp-content/uploads/2022/08/aqi-api-data-for-institutes.jpg"
                                            alt="aqi api data for school & institutes"
                                        />
                                    </div>
                                    <div className="slider_details_box">
                                        <h3>{t("qualitySolutions.apiData.title")}</h3>
                                        <span>{t("qualitySolutions.apiData.subtitle")}</span>
                                        <ul className="airquality_list">
                                            <li>{t("qualitySolutions.apiData.features.feature1")}</li>
                                            <li>{t("qualitySolutions.apiData.features.feature2")}</li>
                                            <li>{t("qualitySolutions.apiData.features.feature3")}</li>
                                        </ul>
                                        <br />
                                        <a href="#get_in_touch" className="knowmore_btn">
                                            {t("qualitySolutions.apiData.knowMore")}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Freemium Services */}
            <div className="container top_space_heading">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                {t("dataServices.title")} <span className="bold_text">{t("dataServices.highlight")}</span>
                            </h2>
                            <p>{t("dataServices.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container inner_container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-tv-app-for-hotel.jpg"
                                alt="aqi tv app dashboard for hotel"
                            />
                            <h4>{t("dataServices.tvApp")}</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-dashboard-app-for-hotel.jpg"
                                alt="aqi customized dashboard app for hotel"
                            />
                            <h4>{t("dataServices.customApp")}</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-qr-code-scan-for-hotel.jpg"
                                alt="aqi monitor data qr code scan for hotel"
                            />
                            <h4>{t("dataServices.qrCode")}</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Effects of Air Pollution */}
            <section className="img-box-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="imgs-box">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2021/08/aqi-qr-code-768x453.jpg"
                                    alt="aqi qr code"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="imgs-box">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2021/08/scan-air-quality-qr-code-768x453.jpg"
                                    alt="scan air quality qr code"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container top_space_heading">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                {t("effects.title")} - <span className="bold_text">{t("effects.highlight")}</span>
                            </h2>
                            <p>{t("effects.description")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container inner_container airgraph_cntr">
                <div className="row">
                    <div className="col-md-6 air_graph_box">
                        <div className="air_quality_box">
                            <h3>
                                <span style={{ fontSize: "15pt", color: "#78ae60" }}> {t("effects.withCleanAir.title")}</span>
                            </h3>
                            <ul className="airquality_list">
                                <li>{t("effects.withCleanAir.benefits.benefit1")}</li>
                                <li>{t("effects.withCleanAir.benefits.benefit2")}</li>
                                <li>{t("effects.withCleanAir.benefits.benefit3")}</li>
                                <li>{t("effects.withCleanAir.benefits.benefit4")}</li>
                            </ul>
                        </div>
                        <span className="vs_text">VS</span>
                    </div>
                    <div className="col-md-6 air_qualiity_right">
                        <div className="air_quality_box">
                            <h3>
                                <span style={{ fontSize: "15pt", color: "#e86868" }}> {t("effects.withoutCleanAir.title")}</span>
                            </h3>
                            <ul className="airquality_list red_list">
                                <li>{t("effects.withoutCleanAir.drawbacks.drawback1")}</li>
                                <li>{t("effects.withoutCleanAir.drawbacks.drawback2")}</li>
                                <li>{t("effects.withoutCleanAir.drawbacks.drawback3")}</li>
                                <li>{t("effects.withoutCleanAir.drawbacks.drawback4")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq1"
                                            aria-expanded="true"
                                        >
                                            {t("faq.questions.q1")}
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">{t("faq.answers.a1")}</div>
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
                                        >
                                            {t("faq.questions.q2")}
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">{t("faq.answers.a2")}</div>
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
                                        >
                                            {t("faq.questions.q3")}
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">{t("faq.answers.a3")}</div>
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
                                        >
                                            {t("faq.questions.q4")}
                                        </button>
                                    </h2>
                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">{t("faq.answers.a4")}</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq5"
                                            aria-expanded="false"
                                        >
                                            {t("faq.questions.q5")}
                                        </button>
                                    </h2>
                                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">{t("faq.answers.a5")}</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq6"
                                            aria-expanded="false"
                                        >
                                            {t("faq.questions.q6")}
                                        </button>
                                    </h2>
                                    <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">{t("faq.answers.a6")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clientele Section */}
            <div className="container top_space_heading">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                {t("clientele.title")} <span className="bold_text">{t("clientele.highlight")}</span>
                            </h2>
                            <p>{t("clientele.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container client_logo_section inner_container">
                <div className="row">
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png"
                            className="img-responsive"
                            alt="Client Logo"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png"
                            className="img-responsive"
                            alt="Client Logo"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png"
                            className="img-responsive"
                            alt="Client Logo"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png"
                            className="img-responsive"
                            alt="Client Logo"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/RENAULT-NISSAN.png"
                            className="img-responsive"
                            alt="Client Logo"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/TATA.png"
                            className="img-responsive"
                            alt="Client Logo"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/CSIR.png"
                            className="img-responsive"
                            alt="Client Logo"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/MAHINDRA.png"
                            className="img-responsive"
                            alt="Client Logo"
                        />
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="airqulality_contact_section inner_container" id="get_in_touch">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contact-heading">
                                <h2>{t("contact.title")}</h2>
                                <p>{t("contact.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactForm pageName="Hotel Businesses Page" />
            </div>

            {/* Industrial Applications */}
            <div className="container seperate_industrial_box">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                {t("industrial.title")} <span className="bold_text">{t("industrial.highlight")}</span>
                            </h2>
                            <p>{t("industrial.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container inner_container industries_application_section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="owl-slider">
                            <IndustrialApplicationsCarousel applications={industrialApplications} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bootstrap Scripts */}
            <div
                dangerouslySetInnerHTML={{
                    __html: `
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        `,
                }}
            />
        </div>
    )
}
