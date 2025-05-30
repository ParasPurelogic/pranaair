import "./style.css"
import { getServerTranslation } from "@/i18n/server"
export default async function FAQPage() {
    const { t } = await getServerTranslation("faq")
    return (
        <main>

            {/* Hero Section */}
            <section className="faq-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="hero-content">
                                <h1 className="hero-title">{t("faqHero.title")}</h1>
                                <p className="hero-subtitle">{t("faqHero.subtitle")}</p>
                                <div className="hero-divider"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Air Pollution FAQs Section */}
            <section id="pollution-faq" className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header">
                                <div className="section-icon">
                                    <i className="fas fa-smog"></i>
                                </div>
                                <h2 className="section-title">{t("airPollutionFaq.sectionTitle")}</h2>
                                <p className="section-subtitle">{t("airPollutionFaq.sectionSubtitle")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="faq-card">
                                <div className="accordion" id="pollutionAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="pollution1">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#pollutionCollapse1"
                                                aria-expanded="true"
                                                aria-controls="pollutionCollapse1"
                                            >
                                                <i className="fas fa-question-circle me-3"></i>
                                                {t("airPollutionFaq.questions.whatIsAirPollution.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="pollutionCollapse1"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="pollution1"
                                            data-bs-parent="#pollutionAccordion"
                                        >
                                            <div className="accordion-body">{t("airPollutionFaq.questions.whatIsAirPollution.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="pollution2">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#pollutionCollapse2"
                                                aria-expanded="false"
                                                aria-controls="pollutionCollapse2"
                                            >
                                                <i className="fas fa-microscope me-3"></i>
                                                {t("airPollutionFaq.questions.whatIsPM25.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="pollutionCollapse2"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="pollution2"
                                            data-bs-parent="#pollutionAccordion"
                                        >
                                            <div className="accordion-body">{t("airPollutionFaq.questions.whatIsPM25.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="pollution3">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#pollutionCollapse3"
                                                aria-expanded="false"
                                                aria-controls="pollutionCollapse3"
                                            >
                                                <i className="fas fa-chart-line me-3"></i>
                                                {t("airPollutionFaq.questions.whatIsAQI.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="pollutionCollapse3"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="pollution3"
                                            data-bs-parent="#pollutionAccordion"
                                        >
                                            <div className="accordion-body">
                                                {t("airPollutionFaq.questions.whatIsAQI.answer")}{" "}
                                                <a href="https://www.aqi.in/" target="_blank" rel="noopener noreferrer">
                                                    AQI.in
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="pollution4">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#pollutionCollapse4"
                                                aria-expanded="false"
                                                aria-controls="pollutionCollapse4"
                                            >
                                                <i className="fas fa-microscope me-3"></i>
                                                {t("airPollutionFaq.questions.whatIsPM10.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="pollutionCollapse4"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="pollution4"
                                            data-bs-parent="#pollutionAccordion"
                                        >
                                            <div className="accordion-body">{t("airPollutionFaq.questions.whatIsPM10.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="pollution5">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#pollutionCollapse5"
                                                aria-expanded="false"
                                                aria-controls="pollutionCollapse5"
                                            >
                                                <i className="fas fa-flag me-3"></i>
                                                {t("airPollutionFaq.questions.averageAQIIndia.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="pollutionCollapse5"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="pollution5"
                                            data-bs-parent="#pollutionAccordion"
                                        >
                                            <div className="accordion-body">
                                                {t("airPollutionFaq.questions.averageAQIIndia.answer")}
                                                <br />
                                                <br />
                                                <em>{t("airPollutionFaq.questions.averageAQIIndia.appNote")}</em>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="pollution6">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#pollutionCollapse6"
                                                aria-expanded="false"
                                                aria-controls="pollutionCollapse6"
                                            >
                                                <i className="fas fa-list-ol me-3"></i>
                                                {t("airPollutionFaq.questions.aqiValues.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="pollutionCollapse6"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="pollution6"
                                            data-bs-parent="#pollutionAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="aqi-values">
                                                    <h6 className="mb-3">{t("airPollutionFaq.questions.aqiValues.subtitle")}</h6>
                                                    <div className="aqi-list">
                                                        <div className="aqi-item good">
                                                            <span className="aqi-range">0 - 50</span>
                                                            <span className="aqi-label">{t("airPollutionFaq.aqiLevels.good")}</span>
                                                        </div>
                                                        <div className="aqi-item moderate">
                                                            <span className="aqi-range">51 - 100</span>
                                                            <span className="aqi-label">{t("airPollutionFaq.aqiLevels.moderate")}</span>
                                                        </div>
                                                        <div className="aqi-item unhealthy-groups">
                                                            <span className="aqi-range">101 - 150</span>
                                                            <span className="aqi-label">{t("airPollutionFaq.aqiLevels.unhealthyForGroups")}</span>
                                                        </div>
                                                        <div className="aqi-item unhealthy">
                                                            <span className="aqi-range">151 - 200</span>
                                                            <span className="aqi-label">{t("airPollutionFaq.aqiLevels.unhealthy")}</span>
                                                        </div>
                                                        <div className="aqi-item very-unhealthy">
                                                            <span className="aqi-range">201 - 300</span>
                                                            <span className="aqi-label">{t("airPollutionFaq.aqiLevels.veryUnhealthy")}</span>
                                                        </div>
                                                        <div className="aqi-item hazardous">
                                                            <span className="aqi-range">301+</span>
                                                            <span className="aqi-label">{t("airPollutionFaq.aqiLevels.hazardous")}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="pollution7">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#pollutionCollapse7"
                                                aria-expanded="false"
                                                aria-controls="pollutionCollapse7"
                                            >
                                                <i className="fas fa-heartbeat me-3"></i>
                                                {t("airPollutionFaq.questions.healthEffects.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="pollutionCollapse7"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="pollution7"
                                            data-bs-parent="#pollutionAccordion"
                                        >
                                            <div className="accordion-body">{t("airPollutionFaq.questions.healthEffects.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="pollution8">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#pollutionCollapse8"
                                                aria-expanded="false"
                                                aria-controls="pollutionCollapse8"
                                            >
                                                <i className="fas fa-child me-3"></i>
                                                {t("airPollutionFaq.questions.childrenEffects.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="pollutionCollapse8"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="pollution8"
                                            data-bs-parent="#pollutionAccordion"
                                        >
                                            <div className="accordion-body">{t("airPollutionFaq.questions.childrenEffects.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="pollution9">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#pollutionCollapse9"
                                                aria-expanded="false"
                                                aria-controls="pollutionCollapse9"
                                            >
                                                <i className="fas fa-shield-alt me-3"></i>
                                                {t("airPollutionFaq.questions.protection.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="pollutionCollapse9"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="pollution9"
                                            data-bs-parent="#pollutionAccordion"
                                        >
                                            <div className="accordion-body">
                                                {t("airPollutionFaq.questions.protection.answer")}{" "}
                                                <a href="https://www.pranaair.com" target="_blank" rel="noopener noreferrer">
                                                    Prana Air
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="pollution10">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#pollutionCollapse10"
                                                aria-expanded="false"
                                                aria-controls="pollutionCollapse10"
                                            >
                                                <i className="fas fa-map-marker-alt me-3"></i>
                                                {t("airPollutionFaq.questions.findInformation.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="pollutionCollapse10"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="pollution10"
                                            data-bs-parent="#pollutionAccordion"
                                        >
                                            <div className="accordion-body">
                                                {t("airPollutionFaq.questions.findInformation.answer")} <strong>AQI India</strong>{" "}
                                                {t("airPollutionFaq.questions.findInformation.comingSoon")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Divider */}
            <div className="section-divider">
                <div className="container">
                    <div className="divider-line"></div>
                </div>
            </div>

            {/* Prana Air Indoor Air Purifier FAQs Section */}
            <section id="purifier-faq" className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header">
                                <div className="section-icon">
                                    <i className="fas fa-wind"></i>
                                </div>
                                <h2 className="section-title">{t("purifierFaq.sectionTitle")}</h2>
                                <p className="section-subtitle">{t("purifierFaq.sectionSubtitle")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="faq-card">
                                <div className="accordion" id="purifierAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier1">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse1"
                                                aria-expanded="true"
                                                aria-controls="purifierCollapse1"
                                            >
                                                <i className="fas fa-clock me-3"></i>
                                                {t("purifierFaq.questions.filterFrequency.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse1"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="purifier1"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="highlight-box">
                                                    <i className="fas fa-info-circle"></i>
                                                    <span>{t("purifierFaq.questions.filterFrequency.answer")}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier2">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse2"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse2"
                                            >
                                                <i className="fas fa-power-off me-3"></i>
                                                {t("purifierFaq.questions.operatingHours.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse2"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier2"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">{t("purifierFaq.questions.operatingHours.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier3">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse3"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse3"
                                            >
                                                <i className="fas fa-virus me-3"></i>
                                                {t("purifierFaq.questions.pollutantRemoval.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse3"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier3"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="feature-highlight">
                                                    <div className="feature-stat">
                                                        <span className="stat-number">99%</span>
                                                        <span className="stat-label">{t("purifierFaq.questions.pollutantRemoval.statLabel")}</span>
                                                    </div>
                                                    <p>{t("purifierFaq.questions.pollutantRemoval.answer")}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier4">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse4"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse4"
                                            >
                                                <i className="fas fa-display me-3"></i>
                                                {t("purifierFaq.questions.aqiDisplay.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse4"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier4"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">{t("purifierFaq.questions.aqiDisplay.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier5">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse5"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse5"
                                            >
                                                <i className="fas fa-moon me-3"></i>
                                                {t("purifierFaq.questions.sleepMode.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse5"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier5"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">{t("purifierFaq.questions.sleepMode.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier6">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse6"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse6"
                                            >
                                                <i className="fas fa-remote me-3"></i>
                                                {t("purifierFaq.questions.remote.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse6"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier6"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">{t("purifierFaq.questions.remote.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier7">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse7"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse7"
                                            >
                                                <i className="fas fa-radiation me-3"></i>
                                                {t("purifierFaq.questions.ozoneProduction.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse7"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier7"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">{t("purifierFaq.questions.ozoneProduction.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier8">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse8"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse8"
                                            >
                                                <i className="fas fa-leaf me-3"></i>
                                                {t("purifierFaq.questions.co2Reduction.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse8"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier8"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">{t("purifierFaq.questions.co2Reduction.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier9">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse9"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse9"
                                            >
                                                <i className="fas fa-broom me-3"></i>
                                                {t("purifierFaq.questions.filterCleaning.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse9"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier9"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">{t("purifierFaq.questions.filterCleaning.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier10">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse10"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse10"
                                            >
                                                <i className="fas fa-redo me-3"></i>
                                                {t("purifierFaq.questions.filterReuse.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse10"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier10"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">{t("purifierFaq.questions.filterReuse.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier11">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse11"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse11"
                                            >
                                                <i className="fas fa-spray-can me-3"></i>
                                                {t("purifierFaq.questions.odorReduction.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse11"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier11"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">{t("purifierFaq.questions.odorReduction.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier12">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse12"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse12"
                                            >
                                                <i className="fas fa-cloud me-3"></i>
                                                {t("purifierFaq.questions.gasReduction.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse12"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier12"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">{t("purifierFaq.questions.gasReduction.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier13">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse13"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse13"
                                            >
                                                <i className="fas fa-wind me-3"></i>
                                                {t("purifierFaq.questions.ozoneFilter.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse13"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier13"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">{t("purifierFaq.questions.ozoneFilter.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier14">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse14"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse14"
                                            >
                                                <i className="fas fa-tachometer-alt me-3"></i>
                                                {t("purifierFaq.questions.pollutionIndicator.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse14"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier14"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">{t("purifierFaq.questions.pollutionIndicator.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier15">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse15"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse15"
                                            >
                                                <i className="fas fa-expand me-3"></i>
                                                {t("purifierFaq.questions.roomSpace.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse15"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier15"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">{t("purifierFaq.questions.roomSpace.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier16">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse16"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse16"
                                            >
                                                <i className="fas fa-arrows-alt me-3"></i>
                                                {t("purifierFaq.questions.portability.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse16"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier16"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">{t("purifierFaq.questions.portability.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier17">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse17"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse17"
                                            >
                                                <i className="fas fa-thumbtack me-3"></i>
                                                {t("purifierFaq.questions.wallMount.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse17"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier17"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">{t("purifierFaq.questions.wallMount.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="purifier18">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#purifierCollapse18"
                                                aria-expanded="false"
                                                aria-controls="purifierCollapse18"
                                            >
                                                <i className="fas fa-lock me-3"></i>
                                                {t("purifierFaq.questions.childLock.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="purifierCollapse18"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="purifier18"
                                            data-bs-parent="#purifierAccordion"
                                        >
                                            <div className="accordion-body">{t("purifierFaq.questions.childLock.answer")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Divider */}
            <div className="section-divider">
                <div className="container">
                    <div className="divider-line"></div>
                </div>
            </div>

            {/* Prana Air Outdoor Masks FAQs Section */}
            <section id="mask-faq" className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header">
                                <div className="section-icon">
                                    <i className="fas fa-mask"></i>
                                </div>
                                <h2 className="section-title">{t("maskFaq.sectionTitle")}</h2>
                                <p className="section-subtitle">{t("maskFaq.sectionSubtitle")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="faq-card">
                                <div className="accordion" id="maskAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="mask1">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#maskCollapse1"
                                                aria-expanded="true"
                                                aria-controls="maskCollapse1"
                                            >
                                                <i className="fas fa-tint me-3"></i>
                                                {t("maskFaq.questions.washable.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="maskCollapse1"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="mask1"
                                            data-bs-parent="#maskAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="warning-box">
                                                    <i className="fas fa-exclamation-triangle"></i>
                                                    <div>
                                                        <strong>{t("maskFaq.labels.mask")}</strong> {t("maskFaq.questions.washable.maskAnswer")}
                                                        <br />
                                                        <strong>{t("maskFaq.labels.filters")}</strong>{" "}
                                                        {t("maskFaq.questions.washable.filterAnswer")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="mask2">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#maskCollapse2"
                                                aria-expanded="false"
                                                aria-controls="maskCollapse2"
                                            >
                                                <i className="fas fa-sync-alt me-3"></i>
                                                {t("maskFaq.questions.filterReplacement.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="maskCollapse2"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="mask2"
                                            data-bs-parent="#maskAccordion"
                                        >
                                            <div className="accordion-body">{t("maskFaq.questions.filterReplacement.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="mask3">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#maskCollapse3"
                                                aria-expanded="false"
                                                aria-controls="maskCollapse3"
                                            >
                                                <i className="fas fa-fan me-3"></i>
                                                {t("maskFaq.questions.fanSpeed.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="maskCollapse3"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="mask3"
                                            data-bs-parent="#maskAccordion"
                                        >
                                            <div className="accordion-body">{t("maskFaq.questions.fanSpeed.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="mask4">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#maskCollapse4"
                                                aria-expanded="false"
                                                aria-controls="maskCollapse4"
                                            >
                                                <i className="fas fa-hourglass-half me-3"></i>
                                                {t("maskFaq.questions.continuousWear.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="maskCollapse4"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="mask4"
                                            data-bs-parent="#maskAccordion"
                                        >
                                            <div className="accordion-body">{t("maskFaq.questions.continuousWear.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="mask5">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#maskCollapse5"
                                                aria-expanded="false"
                                                aria-controls="maskCollapse5"
                                            >
                                                <i className="fas fa-lightbulb me-3"></i>
                                                {t("maskFaq.questions.powerIndicator.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="maskCollapse5"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="mask5"
                                            data-bs-parent="#maskAccordion"
                                        >
                                            <div className="accordion-body">{t("maskFaq.questions.powerIndicator.answer")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Divider */}
            <div className="section-divider">
                <div className="container">
                    <div className="divider-line"></div>
                </div>
            </div>

            {/* Car Cabin Air Filter FAQs Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header">
                                <div className="section-icon">
                                    <i className="fas fa-car"></i>
                                </div>
                                <h2 className="section-title">{t("carFilterFaq.sectionTitle")}</h2>
                                <p className="section-subtitle">{t("carFilterFaq.sectionSubtitle")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="faq-card">
                                <div className="accordion" id="carAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="car1">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#carCollapse1"
                                                aria-expanded="true"
                                                aria-controls="carCollapse1"
                                            >
                                                <i className="fas fa-filter me-3"></i>
                                                {t("carFilterFaq.questions.hepaFilter.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="carCollapse1"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="car1"
                                            data-bs-parent="#carAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="definition-box">
                                                    <h6>{t("carFilterFaq.questions.hepaFilter.subtitle")}</h6>
                                                    <p>{t("carFilterFaq.questions.hepaFilter.answer")}</p>
                                                    <div className="efficiency-stat">
                                                        <span className="stat-number">99.97%</span>
                                                        <span className="stat-label">{t("carFilterFaq.questions.hepaFilter.statLabel")}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="car2">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#carCollapse2"
                                                aria-expanded="false"
                                                aria-controls="carCollapse2"
                                            >
                                                <i className="fas fa-recycle me-3"></i>
                                                {t("carFilterFaq.questions.washable.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="carCollapse2"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="car2"
                                            data-bs-parent="#carAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="alert-box">
                                                    <i className="fas fa-times-circle"></i>
                                                    <span>{t("carFilterFaq.questions.washable.answer")}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="car3">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#carCollapse3"
                                                aria-expanded="false"
                                                aria-controls="carCollapse3"
                                            >
                                                <i className="fas fa-calendar-alt me-3"></i>
                                                {t("carFilterFaq.questions.lifespan.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="carCollapse3"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="car3"
                                            data-bs-parent="#carAccordion"
                                        >
                                            <div className="accordion-body">{t("carFilterFaq.questions.lifespan.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="car4">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#carCollapse4"
                                                aria-expanded="false"
                                                aria-controls="carCollapse4"
                                            >
                                                <i className="fas fa-tachometer-alt me-3"></i>
                                                {t("carFilterFaq.questions.aqiValue.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="carCollapse4"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="car4"
                                            data-bs-parent="#carAccordion"
                                        >
                                            <div className="accordion-body">{t("carFilterFaq.questions.aqiValue.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="car5">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#carCollapse5"
                                                aria-expanded="false"
                                                aria-controls="carCollapse5"
                                            >
                                                <i className="fas fa-tools me-3"></i>
                                                {t("carFilterFaq.questions.installation.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="carCollapse5"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="car5"
                                            data-bs-parent="#carAccordion"
                                        >
                                            <div className="accordion-body">{t("carFilterFaq.questions.installation.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="car6">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#carCollapse6"
                                                aria-expanded="false"
                                                aria-controls="carCollapse6"
                                            >
                                                <i className="fas fa-industry me-3"></i>
                                                {t("carFilterFaq.questions.engineFilters.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="carFilterFaq6"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="car6"
                                            data-bs-parent="#carAccordion"
                                        >
                                            <div className="accordion-body">{t("carFilterFaq.questions.engineFilters.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="car7">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#carCollapse7"
                                                aria-expanded="false"
                                                aria-controls="carCollapse7"
                                            >
                                                <i className="fas fa-plus-circle me-3"></i>
                                                {t("carFilterFaq.questions.addFilter.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="carCollapse7"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="car7"
                                            data-bs-parent="#carAccordion"
                                        >
                                            <div className="accordion-body">{t("carFilterFaq.questions.addFilter.answer")}</div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="car8">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#carCollapse8"
                                                aria-expanded="false"
                                                aria-controls="carCollapse8"
                                            >
                                                <i className="fas fa-check-circle me-3"></i>
                                                {t("carFilterFaq.questions.quality.question")}
                                            </button>
                                        </h2>
                                        <div
                                            id="carCollapse8"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="car8"
                                            data-bs-parent="#carAccordion"
                                        >
                                            <div className="accordion-body">{t("carFilterFaq.questions.quality.answer")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className="faq-cta">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="cta-content">
                                <h3>{t("faqCta.title")}</h3>
                                <p>{t("faqCta.subtitle")}</p>
                                <a href="/contact" className="btn btn-primary btn-lg">
                                    <i className="fas fa-envelope me-2"></i>
                                    {t("faqCta.buttonText")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
