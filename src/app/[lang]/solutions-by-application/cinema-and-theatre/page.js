import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import ProductCarousel from "@/Components/Pages/CinemaTheatre/airQualityMonitors"
import { getServerTranslation } from "@/i18n/server"

export default async function AirQualitySolutionsPage() {
    const { t } = await getServerTranslation("cinema-theatre")

    const industrialApplications = [
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-hotel.jpg",
            title: t("industrialApplicationsData.hotel.title"),
            link: "https://www.pranaair.com/solutions-by-application/hotel-businesses/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-restaurant.jpg",
            title: t("industrialApplicationsData.restaurant.title"),
            link: "https://www.pranaair.com/solutions-by-application/restaurants/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-institute.jpg",
            title: t("industrialApplicationsData.institutes.title"),
            link: "https://www.pranaair.com/solutions-by-application/institutes/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-cinema.jpg",
            title: t("industrialApplicationsData.cinema.title"),
            link: "https://www.pranaair.com/solutions-by-application/cinema-and-theatre/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-autombile.jpg",
            title: t("industrialApplicationsData.automobiles.title"),
            link: "https://www.pranaair.com/solutions-by-application/automobile/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-real-estate.jpg",
            title: t("industrialApplicationsData.realEstate.title"),
            link: "https://www.pranaair.com/solutions-by-application/real-estate/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/08/solutions-for-mobile-phone-makers.png",
            title: t("industrialApplicationsData.smartphone.title"),
            link: "https://www.pranaair.com/solutions-by-application/smartphone-makers/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-construction-sites.jpg",
            title: t("industrialApplicationsData.construction.title"),
            link: "https://www.pranaair.com/solutions-by-industry/pm2-5-monitoring-air-pollution-by-construction-sites/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-animale-care-page.jpg",
            title: t("industrialApplicationsData.animalCare.title"),
            link: "https://www.pranaair.com/solutions-by-application/animal-care-center/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-logistics-page.jpg",
            title: t("industrialApplicationsData.logistics.title"),
            link: "https://www.pranaair.com/solutions-by-application/logistics/",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-railway-page.jpg",
            title: t("industrialApplicationsData.railways.title"),
            link: "https://www.pranaair.com/solutions-by-application/railway/",
        }
    ]
    const airQualityMonitors = [
        {
            image: "/air-quality-monitor.png",
            imageAlt: t("airQualityMonitors.squair.imageAlt"),
            title: t("airQualityMonitors.squair.title"),
            description: t("airQualityMonitors.squair.description"),
            features: [
                t("airQualityMonitors.squair.features.item1"),
                t("airQualityMonitors.squair.features.item2"),
                t("airQualityMonitors.squair.features.item3"),
            ],
            knowMoreLink: "https://www.pranaair.com/air-quality-monitor/squair-air-monitor/",
            hasRentOption: true,
        },
        {
            image: "/sensible-plus-monitor.png",
            imageAlt: t("airQualityMonitors.sensiblePlus.imageAlt"),
            title: t("airQualityMonitors.sensiblePlus.title"),
            description: t("airQualityMonitors.sensiblePlus.description"),
            features: [
                t("airQualityMonitors.sensiblePlus.features.item1"),
                t("airQualityMonitors.sensiblePlus.features.item2"),
                t("airQualityMonitors.sensiblePlus.features.item3"),
                t("airQualityMonitors.sensiblePlus.features.item4"),
            ],
            knowMoreLink: "https://www.pranaair.com/air-quality-monitor/squair-air-monitor/",
            hasRentOption: true,
        },
    ]
    return (
        <div>
            {/* Banner Section */}
            <div
                className="row school_banner_box"
                style={{
                    backgroundImage:
                        "url('https://www.pranaair.com/wp-content/uploads/2022/09/air-quality-solutions-for-cinema-halls-by-prana-air.jpg')",
                }}>
                <div className="col-md-6 banner_quality_box">
                    <div className="pocket_title_box school_aqi_box">
                        <h1>
                            {t("cinema.banner.title")} <span className="bold_text">{t("cinema.banner.highlight")}</span>
                        </h1>
                        <p>{t("cinema.banner.description")}</p>
                        <a className="pocket_buy_btn" href="#get_in_touch">
                            {t("cinema.banner.cta")}
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
                                {t("cinema.pollutants.title")} <span className="bold_text">{t("cinema.pollutants.highlight")}</span>
                            </h2>
                            <p>{t("cinema.pollutants.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pollutants Features */}
            <div className="container pollution_cntr inner_container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-parameter.png"
                                alt={t("cinema.pollutantFeatures.pm25.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("cinema.pollutantFeatures.pm25.title")}</h2>
                                <p>{t("cinema.pollutantFeatures.pm25.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-gas-icon.png"
                                alt={t("cinema.pollutantFeatures.co2.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("cinema.pollutantFeatures.co2.title")}</h2>
                                <p>{t("cinema.pollutantFeatures.co2.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-parameter-icon.png"
                                alt={t("cinema.pollutantFeatures.tvoc.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("cinema.pollutantFeatures.tvoc.title")}</h2>
                                <p>{t("cinema.pollutantFeatures.tvoc.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/09/hcho-icon-plain.png"
                                alt={t("cinema.pollutantFeatures.hcho.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("cinema.pollutantFeatures.hcho.title")}</h2>
                                <p>{t("cinema.pollutantFeatures.hcho.description")}</p>
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
                        "url('https://www.pranaair.com/wp-content/uploads/2022/09/air-pollution-problems-in-cinema-hall.jpg')",
                }}
            >
                <div className="col-md-12">
                    <div className="school_box_cntr">
                        <ul>
                            <li className="first_school_box">
                                <span className="school_icon_box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-icon-2.png"
                                        alt={t("cinema.pollutantSources.pm25.imgAlt")}
                                    />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>{t("cinema.pollutantSources.pm25.title")}</h3>
                                    <p>{t("cinema.pollutantSources.pm25.description")}</p>
                                </div>
                            </li>
                            <li className="second_school_box">
                                <span className="school_icon_box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-icon.png"
                                        alt={t("cinema.pollutantSources.co2.imgAlt")}
                                    />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>{t("cinema.pollutantSources.co2.title")}</h3>
                                    <p>{t("cinema.pollutantSources.co2.description")}</p>
                                </div>
                            </li>
                            <li className="third_school_box">
                                <span className="school_icon_box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2022/08/ozone-o3-icon.png"
                                        alt={t("cinema.pollutantSources.tvocs.imgAlt")}
                                    />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>{t("cinema.pollutantSources.tvocs.title")}</h3>
                                    <p>{t("cinema.pollutantSources.tvocs.description")}</p>
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
                                {t("cinema.risk.title")} <span className="bold_text">{t("cinema.risk.highlight")}</span>
                            </h2>
                            <p>{t("cinema.risk.description")}</p>
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
                                src="https://www.pranaair.com/wp-content/uploads/2022/09/respiratory-illness-in-cinema-hall.png"
                                alt={t("cinema.riskGroups.respiratoryIllness.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("cinema.riskGroups.respiratoryIllness.title")}</h2>
                                <p>{t("cinema.riskGroups.respiratoryIllness.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/09/children-in-cinemal-hall.png"
                                alt={t("cinema.riskGroups.children.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("cinema.riskGroups.children.title")}</h2>
                                <p>{t("cinema.riskGroups.children.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/09/cinema-hall-staff.png"
                                alt={t("cinema.riskGroups.staff.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("cinema.riskGroups.staff.title")}</h2>
                                <p>{t("cinema.riskGroups.staff.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/09/movie-goers.png"
                                alt={t("cinema.riskGroups.movieGoers.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("cinema.riskGroups.movieGoers.title")}</h2>
                                <p>{t("cinema.riskGroups.movieGoers.description")}</p>
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
                                {t("cinema.solutions.title")} <span className="bold_text">{t("cinema.solutions.highlight")}</span>
                            </h2>
                            <p>{t("cinema.solutions.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bootstrap Tabs Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="solution-tab">
                            {/* Bootstrap Tabs */}
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
                                        {t("cinema.tabs.monitors")}
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
                                        {t("cinema.tabs.freshAir")}
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="data-display-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#data-display"
                                        type="button"
                                        role="tab"
                                        aria-controls="data-display"
                                        aria-selected="false"
                                    >
                                        {t("cinema.tabs.apiData")}
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Tab Content */}
                        <div className="tab-content">
                            <div
                                className="tab-pane active inner_container"
                                id="monitors"
                                role="tabpanel"
                                aria-labelledby="monitors-tab"
                            >
                                <ProductCarousel airQualityMonitors={airQualityMonitors} />
                            </div>

                            <div className="tab-pane" id="fresh-air" role="tabpanel" aria-labelledby="fresh-air-tab">
                                <div className="slider_cntr">
                                    <div className="slider_img_box">
                                        <a href="https://www.pranaair.com/fresh-air-machine/">
                                            <img
                                                style={{ width: "100%" }}
                                                src="/fresh-air-machine.png"
                                                alt={t("cinema.tabContent.freshAir.imgAlt")}
                                            />
                                        </a>
                                    </div>
                                    <div className="slider_details_box">
                                        <h3>
                                            {t("cinema.tabContent.freshAir.title")}
                                            <br /> {t("cinema.tabContent.freshAir.subtitle")}
                                        </h3>
                                        <span>{t("cinema.tabContent.freshAir.description")}</span>
                                        <ul className="airquality_list">
                                            <li>{t("cinema.tabContent.freshAir.features.item1")}</li>
                                            <li>{t("cinema.tabContent.freshAir.features.item2")}</li>
                                            <li>{t("cinema.tabContent.freshAir.features.item3")}</li>
                                        </ul>
                                        <a href="https://www.pranaair.com/fresh-air-machine/" className="knowmore_btn">
                                            {t("cinema.tabContent.freshAir.knowMore")}
                                        </a>
                                        <a href="#" className="rent_btn">
                                            {t("cinema.tabContent.freshAir.rent")}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane" id="data-display" role="tabpanel" aria-labelledby="data-display-tab">
                                <div className="slider_cntr">
                                    <div className="slider_img_box">
                                        <img style={{ width: "100%" }} src="/api-data.png" alt={t("cinema.tabContent.apiData.imgAlt")} />
                                    </div>
                                    <div className="slider_details_box">
                                        <h3>
                                            {t("cinema.tabContent.apiData.title")}
                                            <br /> {t("cinema.tabContent.apiData.subtitle")}
                                        </h3>
                                        <span>{t("cinema.tabContent.apiData.description")}</span>
                                        <ul className="airquality_list">
                                            <li>{t("cinema.tabContent.apiData.features.item1")}</li>
                                            <li>{t("cinema.tabContent.apiData.features.item2")}</li>
                                            <li>{t("cinema.tabContent.apiData.features.item3")}</li>
                                        </ul>
                                        <br />
                                        <a href="#get_in_touch" className="knowmore_btn">
                                            {t("cinema.tabContent.apiData.knowMore")}
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
                                {t("cinema.dataServices.title")} <span className="bold_text">{t("cinema.dataServices.highlight")}</span>
                            </h2>
                            <p>{t("cinema.dataServices.description")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container inner_container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/12/aqi-tv-app-dashboard.jpg"
                                alt={t("cinema.dataServices.features.tvDashboard.imgAlt")}
                            />
                            <h4>{t("cinema.dataServices.features.tvDashboard.title")}</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/12/aqi-customized-tablet-app.jpg"
                                alt={t("cinema.dataServices.features.customApp.imgAlt")}
                            />
                            <h4>{t("cinema.dataServices.features.customApp.title")}</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-data-qrcode-for-airpot.jpg"
                                alt={t("cinema.dataServices.features.qrCode.imgAlt")}
                            />
                            <h4>{t("cinema.dataServices.features.qrCode.title")}</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Effects of Air Pollution */}
            <div className="container top_space_heading">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                {t("cinema.effects.title")} <span className="bold_text">{t("cinema.effects.highlight")}</span>
                            </h2>
                            <p>{t("cinema.effects.description")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container inner_container airgraph_cntr">
                <div className="row">
                    <div className="col-md-6 air_graph_box">
                        <div className="air_quality_box">
                            <h3>
                                <span style={{ fontSize: "15pt", color: "#78ae60" }}>{t("cinema.effects.cleanAir.title")}</span>
                            </h3>
                            <ul className="airquality_list">
                                <li>{t("cinema.effects.cleanAir.benefits.item1")}</li>
                                <li>{t("cinema.effects.cleanAir.benefits.item2")}</li>
                                <li>{t("cinema.effects.cleanAir.benefits.item3")}</li>
                                <li>{t("cinema.effects.cleanAir.benefits.item4")}</li>
                            </ul>
                        </div>
                        <span className="vs_text">{t("cinema.effects.vsText")}</span>
                    </div>
                    <div className="col-md-6 air_qualiity_right">
                        <div className="air_quality_box">
                            <h3>
                                <span style={{ fontSize: "15pt", color: "#e86868" }}>{t("cinema.effects.uncleanAir.title")}</span>
                            </h3>
                            <ul className="airquality_list red_list">
                                <li>{t("cinema.effects.uncleanAir.drawbacks.item1")}</li>
                                <li>{t("cinema.effects.uncleanAir.drawbacks.item2")}</li>
                                <li>{t("cinema.effects.uncleanAir.drawbacks.item3")}</li>
                                <li>{t("cinema.effects.uncleanAir.drawbacks.item4")}</li>
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
                                    <h2 className="accordion-header" id="heading1">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse1"
                                            aria-expanded="true"
                                            aria-controls="collapse1"
                                        >
                                            {t("cinema.faq.questions.q1.question")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse1"
                                        className="accordion-collapse collapse show"
                                        data-bs-parent="#faqAccordion"
                                        aria-labelledby="heading1"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("cinema.faq.questions.q1.answer")}</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading2">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse2"
                                            aria-expanded="false"
                                            aria-controls="collapse2"
                                        >
                                            {t("cinema.faq.questions.q2.question")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse2"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                        aria-labelledby="heading2"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("cinema.faq.questions.q2.answer")}</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading3">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse3"
                                            aria-expanded="false"
                                            aria-controls="collapse3"
                                        >
                                            {t("cinema.faq.questions.q3.question")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse3"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                        aria-labelledby="heading3"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("cinema.faq.questions.q3.answer")}</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading4">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse4"
                                            aria-expanded="false"
                                            aria-controls="collapse4"
                                        >
                                            {t("cinema.faq.questions.q4.question")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse4"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                        aria-labelledby="heading4"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("cinema.faq.questions.q4.answer")}</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading5">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse5"
                                            aria-expanded="false"
                                            aria-controls="collapse5"
                                        >
                                            {t("cinema.faq.questions.q5.question")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse5"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                        aria-labelledby="heading5"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("cinema.faq.questions.q5.answer")}</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading6">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse6"
                                            aria-expanded="false"
                                            aria-controls="collapse6"
                                        >
                                            {t("cinema.faq.questions.q6.question")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse6"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                        aria-labelledby="heading6"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("cinema.faq.questions.q6.answer")}</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading7">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse7"
                                            aria-expanded="false"
                                            aria-controls="collapse7"
                                        >
                                            {t("cinema.faq.questions.q7.question")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse7"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                        aria-labelledby="heading7"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("cinema.faq.questions.q7.answer")}</div>
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
                                {t("cinema.clientele.title")} <span className="bold_text">{t("cinema.clientele.highlight")}</span>
                            </h2>
                            <p>{t("cinema.clientele.description")}</p>
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
                                <h2>{t("cinema.contact.title")}</h2>
                                <p>{t("cinema.contact.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactForm pageName="Cinema And Theatre Page" />
            </div>

            {/* Industrial Applications */}
            <div className="container seperate_industrial_box">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                {t("cinema.industrialApplications.title")}{" "}
                                <span className="bold_text">{t("cinema.industrialApplications.highlight")}</span>
                            </h2>
                            <p>{t("cinema.industrialApplications.description")}</p>
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
