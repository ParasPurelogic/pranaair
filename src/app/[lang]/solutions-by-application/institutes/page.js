import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import AppInstitutesCarousel from "@/Components/Pages/Institutes/air-quality-slider"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import { getServerTranslation } from "@/i18n/server"

export default async function AirQualitySolutions() {
    const { t } = await getServerTranslation("insitutes")
    const industrialItems = [
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-squair-iaq-monitor-for-schools.jpg",
            imageAlt: "prana air squair air quality monitor for school & institutes",
            title: "Prana Air SQUAIR<br /> Air quality monitor",
            description: "SQUAIR monitor is a smart indoor air quality monitoring device that can detect IAQ pollutants.",
            features: [
                "Detects PM2.5, CO, CO2, TVOC, noise, temp., & humidity",
                "Mobile & Smart TV App Enabled",
                "Reliable Web Dashboard Accessibility"
            ],
            knowMoreLink: "https://www.pranaair.com/air-quality-monitor/squair-air-monitor/",
            hasRentOption: true
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-sensible-plus-air-quality-monitor-iaq.jpg",
            imageAlt: "prana air squair air quality monitor for school & institutes",
            title: "Prana Air Sensible+<br /> Air quality monitor",
            description: "This is a smart air quality monitor that comes with 7 inch touch screen display that gives more insightful data.",
            features: [
                "7 Inch LED Touch Screen Display",
                "5000 mAh Battery InBuilt",
                "WiFi Connectivity With Mobile App"
            ],
            knowMoreLink: "https://www.pranaair.com/air-quality-monitor/squair-air-monitor/",
            hasRentOption: true
        }
    ]
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

    return (
        <div>
            {/* Banner Section */}
            <div
                className="row school_banner_box"
                style={{
                    backgroundImage:
                        "url('https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-solutions-for-school.png')",
                }}
            >
                <div className="col-md-6 banner_quality_box">
                    <div className="pocket_title_box school_aqi_box">
                        <h1>
                            {t("schoolBanner.title")} <span className="bold_text">{t("schoolBanner.highlight")}</span>
                        </h1>
                        <p>{t("schoolBanner.description")}</p>
                        <ul className="rate_list">
                            <li>{t("schoolBanner.list.schools")}</li>
                            <li>{t("schoolBanner.list.colleges")}</li>
                            <li>{t("schoolBanner.list.institutes")}</li>
                        </ul>
                        <a className="pocket_buy_btn" href="#get_in_touch">
                            {t("schoolBanner.cta")}
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
                                {t("schoolMajorPollutants.title")}{" "}
                                <span className="bold_text">{t("schoolMajorPollutants.highlight")}</span>
                            </h2>
                            <p>{t("schoolMajorPollutants.description")}</p>
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
                                alt="pm2.5 in school and institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("schoolPollutantFeatures.pm25.title")}</h2>
                                <p>{t("schoolPollutantFeatures.pm25.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-gas-icon.png"
                                alt="co2 gas in schools and institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("schoolPollutantFeatures.co2.title")}</h2>
                                <p>{t("schoolPollutantFeatures.co2.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-parameter-icon.png"
                                alt="tvoc in schools and institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("schoolPollutantFeatures.tvoc.title")}</h2>
                                <p>{t("schoolPollutantFeatures.tvoc.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/ozone-o3-pollutant-icon.png"
                                alt="ozone in school & institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("schoolPollutantFeatures.ozone.title")}</h2>
                                <p>{t("schoolPollutantFeatures.ozone.description")}</p>
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
                        "url('https://www.pranaair.com/wp-content/uploads/2022/08/air-pollution-in-schools-and-insitutess.jpg')",
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
                                        src="https://www.pranaair.com/wp-content/uploads/2022/08/ozone-o3-icon.png"
                                        alt="ozone o3 in school & institutes"
                                    />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>{t("schoolImageBox.ozone.title")}</h3>
                                    <p>{t("schoolImageBox.ozone.description")}</p>
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
                                {t("schoolRisk.title")} <span className="bold_text">{t("schoolRisk.highlight")}</span>
                            </h2>
                            <p>{t("schoolRisk.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Risk Features */}
            <div className="container pollution_cntr inner_container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/air-pollution-harmful-to-respiratory-illness.png"
                                alt="respiratory illness in schools & institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("schoolRiskFeatures.respiratoryIllness.title")}</h2>
                                <p>{t("schoolRiskFeatures.respiratoryIllness.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/air-pollution-harmful-to-teacher.png"
                                alt="teacher in schools & institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("schoolRiskFeatures.teachers.title")}</h2>
                                <p>{t("schoolRiskFeatures.teachers.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/air-pollution-harmful-to-sensitive-groups.png"
                                alt="sensitive groups in schools & institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("schoolRiskFeatures.sensitiveGroups.title")}</h2>
                                <p>{t("schoolRiskFeatures.sensitiveGroups.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/air-pollution-harmful-to-students.png"
                                alt="students in schools & institutes"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("schoolRiskFeatures.students.title")}</h2>
                                <p>{t("schoolRiskFeatures.students.description")}</p>
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
                                {t("schoolQualitySolutions.title")}{" "}
                                <span className="bold_text">{t("schoolQualitySolutions.highlight")}</span>
                            </h2>
                            <p>{t("schoolQualitySolutions.description")}</p>
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
                                        {t("schoolQualitySolutions.tabs.monitors")}
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
                                        {t("schoolQualitySolutions.tabs.freshAir")}
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
                                        {t("schoolQualitySolutions.tabs.apiData")}
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content" id="airQualityTabsContent">
                            <div className="tab-pane fade show active" id="monitors" role="tabpanel" aria-labelledby="monitors-tab">
                                <div className="inner_container">
                                    <div className="owl-slider">
                                        <AppInstitutesCarousel industrialItems={industrialItems} />
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="fresh-air" role="tabpanel" aria-labelledby="fresh-air-tab">
                                <div className="slider_cntr">
                                    <div className="slider_img_box">
                                        <a href="https://www.pranaair.com/fresh-air-machine/">
                                            <img
                                                style={{ width: "100%" }}
                                                src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-fresh-air-machine-for-iaq-solution.jpg"
                                                alt="prana air fresh air machine as iaq solution for school & institutes"
                                            />
                                        </a>
                                    </div>
                                    <div className="slider_details_box">
                                        <h3>{t("schoolQualitySolutions.freshAir.title")}</h3>
                                        <span>{t("schoolQualitySolutions.freshAir.subtitle")}</span>
                                        <ul className="airquality_list">
                                            <li>{t("schoolQualitySolutions.freshAir.features.feature1")}</li>
                                            <li>{t("schoolQualitySolutions.freshAir.features.feature2")}</li>
                                            <li>{t("schoolQualitySolutions.freshAir.features.feature3")}</li>
                                        </ul>
                                        <a href="https://www.pranaair.com/fresh-air-machine/" className="knowmore_btn">
                                            {t("schoolQualitySolutions.freshAir.knowMore")}
                                        </a>
                                        <a href="#" className="rent_btn">
                                            {t("schoolQualitySolutions.freshAir.rent")}
                                        </a>
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
                                        <h3>{t("schoolQualitySolutions.apiData.title")}</h3>
                                        <span>{t("schoolQualitySolutions.apiData.subtitle")}</span>
                                        <ul className="airquality_list">
                                            <li>{t("schoolQualitySolutions.apiData.features.feature1")}</li>
                                            <li>{t("schoolQualitySolutions.apiData.features.feature2")}</li>
                                            <li>{t("schoolQualitySolutions.apiData.features.feature3")}</li>
                                        </ul>
                                        <br />
                                        <a href="#get_in_touch" className="knowmore_btn">
                                            {t("schoolQualitySolutions.apiData.knowMore")}
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
                                {t("schoolDataServices.title")} <span className="bold_text">{t("schoolDataServices.highlight")}</span>
                            </h2>
                            <p>{t("schoolDataServices.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container inner_container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/aqi-tv-app-dashboard-for-school.jpg"
                                alt="aqi tv app dashboard for school & institutes"
                            />
                            <h4>{t("schoolDataServices.tvApp")}</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-monitor-aqi-web-dashboard.jpg"
                                alt="aqi customized dashboard app for school & institutes"
                            />
                            <h4>{t("schoolDataServices.customApp")}</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/scan-qr-code-to-check-aqi.jpg"
                                alt="aqi monitor data qr code scan for school & institutes"
                            />
                            <h4>{t("schoolDataServices.qrCode")}</h4>
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
                                {t("schoolEffects.title")} - <span className="bold_text">{t("schoolEffects.highlight")}</span>
                            </h2>
                            <p>{t("schoolEffects.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container inner_container airgraph_cntr">
                <div className="row">
                    <div className="col-md-6 air_graph_box">
                        <div className="air_quality_box">
                            <h3>
                                <span style={{ fontSize: "15pt", color: "#78ae60" }}>{t("schoolEffects.withCleanAir.title")}</span>
                            </h3>
                            <ul className="airquality_list">
                                <li>{t("schoolEffects.withCleanAir.benefits.benefit1")}</li>
                                <li>{t("schoolEffects.withCleanAir.benefits.benefit2")}</li>
                                <li>{t("schoolEffects.withCleanAir.benefits.benefit3")}</li>
                            </ul>
                        </div>
                        <span className="vs_text">VS</span>
                    </div>
                    <div className="col-md-6 air_qualiity_right">
                        <div className="air_quality_box">
                            <h3>
                                <span style={{ fontSize: "15pt", color: "#e86868" }}>{t("schoolEffects.withoutCleanAir.title")}</span>
                            </h3>
                            <ul className="airquality_list red_list">
                                <li>{t("schoolEffects.withoutCleanAir.drawbacks.drawback1")}</li>
                                <li>{t("schoolEffects.withoutCleanAir.drawbacks.drawback2")}</li>
                                <li>{t("schoolEffects.withoutCleanAir.drawbacks.drawback3")}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <h3>{t("schoolEffects.iqImpact.title")}</h3>
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/08/Impact-Of-Clean-Air-on-General-IQ-of-Students-graph-1536x887.jpg"
                            alt="Impact of clean air on IQ"
                            className="img-responsive center-block"
                        />
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
                                            {t("schoolFaq.questions.q1")}
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">{t("schoolFaq.answers.a1")}</div>
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
                                            {t("schoolFaq.questions.q2")}
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">{t("schoolFaq.answers.a2")}</div>
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
                                            {t("schoolFaq.questions.q3")}
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">{t("schoolFaq.answers.a3")}</div>
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
                                            {t("schoolFaq.questions.q4")}
                                        </button>
                                    </h2>
                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">{t("schoolFaq.answers.a4")}</div>
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
                                            {t("schoolFaq.questions.q5")}
                                        </button>
                                    </h2>
                                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">{t("schoolFaq.answers.a5")}</div>
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
                                            {t("schoolFaq.questions.q6")}
                                        </button>
                                    </h2>
                                    <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">{t("schoolFaq.answers.a6")}</div>
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
                <ContactForm pageName="Institutes Page" />
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
