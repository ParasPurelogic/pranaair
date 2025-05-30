import "./style.css"
import { getServerTranslation } from "@/i18n/server"

export default async function CEMMiddleEastLanding() {
    const { t } = await getServerTranslation("cem-middle-east")
    return (
        <main>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="row align-items-center min-vh-100 py-5">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <div className="event-badge mb-3">{t("cemMiddleEast2025.hero.eventBadge")}</div>
                                <h1 className="display-4 fw-bold text-white mb-3">{t("cemMiddleEast2025.hero.title")}</h1>
                                <p className="lead text-white-50 mb-4">{t("cemMiddleEast2025.hero.subtitle")}</p>
                                <div className="event-details mb-4">
                                    <div className="d-flex flex-wrap gap-3">
                                        <div className="event-detail">
                                            <i className="fas fa-calendar text-warning me-2"></i>
                                            <span>{t("cemMiddleEast2025.hero.date")}</span>
                                        </div>
                                        <div className="event-detail">
                                            <i className="fas fa-map-marker-alt text-warning me-2"></i>
                                            <span>{t("cemMiddleEast2025.hero.location")}</span>
                                        </div>
                                        <div className="event-detail">
                                            <i className="fas fa-bookmark text-warning me-2"></i>
                                            <span>{t("cemMiddleEast2025.hero.booth")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex gap-3">
                                    <a href="https://www.ilmexhibitions.com/cem-middleeast/" className="btn btn-primary btn-lg">
                                        {t("cemMiddleEast2025.hero.registerNow")}
                                    </a>
                                    <a href="#contact" className="btn btn-success btn-lg">
                                        {t("cemMiddleEast2025.hero.contactUs")}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-image">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2025/04/prana-air-at-cem-middle-east-2025.webp"
                                    alt={t("cemMiddleEast2025.hero.imageAlt")}
                                    className="img-fluid rounded-3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wave-divider">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path
                            fill="#ffffff"
                            fillOpacity="1"
                            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-5 bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="badge bg-light text-primary fs-6 px-3 py-2 rounded-pill mb-3">
                            {t("cemMiddleEast2025.about.badge")}
                        </span>
                        <h2 className="display-5 fw-bold">{t("cemMiddleEast2025.about.title")}</h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="pe-lg-4">
                                <p className="lead mb-4">{t("cemMiddleEast2025.about.description")}</p>
                                <div className="alert alert-info d-flex align-items-center">
                                    <i className="fas fa-map-marker-alt text-primary me-3 fs-4"></i>
                                    <div>
                                        <strong>{t("cemMiddleEast2025.about.boothInfo")}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2025/04/cem-middle-east.webp"
                                alt={t("cemMiddleEast2025.about.imageAlt")}
                                className="img-fluid rounded-3"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Important Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="badge bg-light text-primary fs-6 px-3 py-2 rounded-pill mb-3">
                            {t("cemMiddleEast2025.keyFocus.badge")}
                        </span>
                        <h2 className="display-5 fw-bold">{t("cemMiddleEast2025.keyFocus.title")}</h2>
                        <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
                            {t("cemMiddleEast2025.keyFocus.description")}
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm text-center p-4">
                                <div className="card-body">
                                    <div className="text-primary mb-3">
                                        <i className="fas fa-wind fs-1"></i>
                                    </div>
                                    <h5 className="card-title">{t("cemMiddleEast2025.keyFocus.airQuality.title")}</h5>
                                    <p className="card-text text-muted">{t("cemMiddleEast2025.keyFocus.airQuality.description")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm text-center p-4">
                                <div className="card-body">
                                    <div className="text-primary mb-3">
                                        <i className="fas fa-industry fs-1"></i>
                                    </div>
                                    <h5 className="card-title">{t("cemMiddleEast2025.keyFocus.industrial.title")}</h5>
                                    <p className="card-text text-muted">{t("cemMiddleEast2025.keyFocus.industrial.description")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm text-center p-4">
                                <div className="card-body">
                                    <div className="text-primary mb-3">
                                        <i className="fas fa-leaf fs-1"></i>
                                    </div>
                                    <h5 className="card-title">{t("cemMiddleEast2025.keyFocus.greenhouse.title")}</h5>
                                    <p className="card-text text-muted">{t("cemMiddleEast2025.keyFocus.greenhouse.description")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm text-center p-4">
                                <div className="card-body">
                                    <div className="text-primary mb-3">
                                        <i className="fas fa-microchip fs-1"></i>
                                    </div>
                                    <h5 className="card-title">{t("cemMiddleEast2025.keyFocus.sensor.title")}</h5>
                                    <p className="card-text text-muted">{t("cemMiddleEast2025.keyFocus.sensor.description")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm text-center p-4">
                                <div className="card-body">
                                    <div className="text-primary mb-3">
                                        <i className="fas fa-chart-line fs-1"></i>
                                    </div>
                                    <h5 className="card-title">{t("cemMiddleEast2025.keyFocus.dataAnalytics.title")}</h5>
                                    <p className="card-text text-muted">{t("cemMiddleEast2025.keyFocus.dataAnalytics.description")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm text-center p-4">
                                <div className="card-body">
                                    <div className="text-primary mb-3">
                                        <i className="fas fa-gavel fs-1"></i>
                                    </div>
                                    <h5 className="card-title">{t("cemMiddleEast2025.keyFocus.regulations.title")}</h5>
                                    <p className="card-text text-muted">{t("cemMiddleEast2025.keyFocus.regulations.description")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Schedule */}
            <section id="schedule" className="py-5 bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="badge bg-light text-primary fs-6 px-3 py-2 rounded-pill mb-3">
                            {t("cemMiddleEast2025.schedule.badge")}
                        </span>
                        <h2 className="display-5 fw-bold">{t("cemMiddleEast2025.schedule.title")}</h2>
                        <p className="lead text-muted">{t("cemMiddleEast2025.schedule.description")}</p>
                        <p className="text-muted">{t("cemMiddleEast2025.schedule.timezone")}</p>
                    </div>

                    <div className="card shadow-sm">
                        <ul className="nav nav-tabs nav-fill" id="scheduleTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active py-3"
                                    id="day1-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#day1"
                                    type="button"
                                    role="tab"
                                >
                                    <div className="fw-bold">{t("cemMiddleEast2025.schedule.day1.title")}</div>
                                    <small className="text-muted">{t("cemMiddleEast2025.schedule.day1.date")}</small>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link py-3"
                                    id="day2-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#day2"
                                    type="button"
                                    role="tab"
                                >
                                    <div className="fw-bold">{t("cemMiddleEast2025.schedule.day2.title")}</div>
                                    <small className="text-muted">{t("cemMiddleEast2025.schedule.day2.date")}</small>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link py-3"
                                    id="day3-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#day3"
                                    type="button"
                                    role="tab"
                                >
                                    <div className="fw-bold">{t("cemMiddleEast2025.schedule.day3.title")}</div>
                                    <small className="text-muted">{t("cemMiddleEast2025.schedule.day3.date")}</small>
                                </button>
                            </li>
                        </ul>

                        <div className="tab-content p-4" id="scheduleTabContent">
                            <div className="tab-pane fade show active" id="day1" role="tabpanel">
                                <h4 className="mb-4">{t("cemMiddleEast2025.schedule.day1.subtitle")}</h4>
                                <div className="timeline">
                                    <div className="d-flex mb-4">
                                        <div className="text-primary fw-bold me-4" style={{ minWidth: "100px" }}>
                                            09:00
                                        </div>
                                        <div>
                                            <h6 className="fw-bold">{t("cemMiddleEast2025.schedule.day1.opening.title")}</h6>
                                            <p className="text-muted mb-0">{t("cemMiddleEast2025.schedule.day1.opening.description")}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="text-primary fw-bold me-4" style={{ minWidth: "100px" }}>
                                            11:00 - 12:45
                                        </div>
                                        <div>
                                            <h6 className="fw-bold">{t("cemMiddleEast2025.schedule.day1.keynote.title")}</h6>
                                            <p className="text-muted mb-0">{t("cemMiddleEast2025.schedule.day1.keynote.description")}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="text-primary fw-bold me-4" style={{ minWidth: "100px" }}>
                                            13:30 - 15:45
                                        </div>
                                        <div>
                                            <h6 className="fw-bold">{t("cemMiddleEast2025.schedule.day1.technology.title")}</h6>
                                            <p className="text-muted mb-0">{t("cemMiddleEast2025.schedule.day1.technology.description")}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4 p-3 bg-light rounded">
                                        <div className="text-primary fw-bold me-4" style={{ minWidth: "100px" }}>
                                            16:15 - 17:30
                                        </div>
                                        <div>
                                            <h6 className="fw-bold">{t("cemMiddleEast2025.schedule.day1.exhibition.title")}</h6>
                                            <p className="text-muted mb-0">{t("cemMiddleEast2025.schedule.day1.exhibition.description")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="day2" role="tabpanel">
                                <h4 className="mb-4">{t("cemMiddleEast2025.schedule.day2.subtitle")}</h4>
                                <div className="timeline">
                                    <div className="d-flex mb-4">
                                        <div className="text-primary fw-bold me-4" style={{ minWidth: "100px" }}>
                                            09:00 - 10:45
                                        </div>
                                        <div>
                                            <h6 className="fw-bold">{t("cemMiddleEast2025.schedule.day2.workshops.title")}</h6>
                                            <p className="text-muted mb-0">{t("cemMiddleEast2025.schedule.day2.workshops.description")}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="text-primary fw-bold me-4" style={{ minWidth: "100px" }}>
                                            11:15 - 12:15
                                        </div>
                                        <div>
                                            <h6 className="fw-bold">{t("cemMiddleEast2025.schedule.day2.panel.title")}</h6>
                                            <p className="text-muted mb-0">{t("cemMiddleEast2025.schedule.day2.panel.description")}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4 p-3 bg-light rounded">
                                        <div className="text-primary fw-bold me-4" style={{ minWidth: "100px" }}>
                                            14:00 - 15:15
                                        </div>
                                        <div>
                                            <h6 className="fw-bold">{t("cemMiddleEast2025.schedule.day2.networking.title")}</h6>
                                            <p className="text-muted mb-0">{t("cemMiddleEast2025.schedule.day2.networking.description")}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="text-primary fw-bold me-4" style={{ minWidth: "100px" }}>
                                            16:15 - 17:30
                                        </div>
                                        <div>
                                            <h6 className="fw-bold">{t("cemMiddleEast2025.schedule.day2.methane.title")}</h6>
                                            <p className="text-muted mb-0">{t("cemMiddleEast2025.schedule.day2.methane.description")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="day3" role="tabpanel">
                                <h4 className="mb-4">{t("cemMiddleEast2025.schedule.day3.subtitle")}</h4>
                                <div className="timeline">
                                    <div className="d-flex mb-4">
                                        <div className="text-primary fw-bold me-4" style={{ minWidth: "100px" }}>
                                            09:00 - 10:30
                                        </div>
                                        <div>
                                            <h6 className="fw-bold">{t("cemMiddleEast2025.schedule.day3.regulations.title")}</h6>
                                            <p className="text-muted mb-0">{t("cemMiddleEast2025.schedule.day3.regulations.description")}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="text-primary fw-bold me-4" style={{ minWidth: "100px" }}>
                                            11:15 - 12:00
                                        </div>
                                        <div>
                                            <h6 className="fw-bold">{t("cemMiddleEast2025.schedule.day3.sustainability.title")}</h6>
                                            <p className="text-muted mb-0">
                                                {t("cemMiddleEast2025.schedule.day3.sustainability.description")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4 p-3 bg-light rounded">
                                        <div className="text-primary fw-bold me-4" style={{ minWidth: "100px" }}>
                                            12:15
                                        </div>
                                        <div>
                                            <h6 className="fw-bold">{t("cemMiddleEast2025.schedule.day3.closing.title")}</h6>
                                            <p className="text-muted mb-0">{t("cemMiddleEast2025.schedule.day3.closing.description")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booth Section */}
            <section id="booth" className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="badge bg-light text-primary fs-6 px-3 py-2 rounded-pill mb-3">
                            {t("cemMiddleEast2025.booth.badge")}
                        </span>
                        <h2 className="display-5 fw-bold">{t("cemMiddleEast2025.booth.title")}</h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2025/04/why-visit-prana-air-booth.webp"
                                alt={t("cemMiddleEast2025.booth.imageAlt")}
                                className="img-fluid rounded-3"
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <div className="d-flex">
                                            <div className="text-primary me-3">
                                                <i className="fas fa-brain fs-3"></i>
                                            </div>
                                            <div>
                                                <h5>{t("cemMiddleEast2025.booth.smartMonitoring.title")}</h5>
                                                <p className="text-muted">{t("cemMiddleEast2025.booth.smartMonitoring.description")}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex">
                                            <div className="text-primary me-3">
                                                <i className="fas fa-lightbulb fs-3"></i>
                                            </div>
                                            <div>
                                                <h5>{t("cemMiddleEast2025.booth.innovative.title")}</h5>
                                                <p className="text-muted">{t("cemMiddleEast2025.booth.innovative.description")}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex">
                                            <div className="text-primary me-3">
                                                <i className="fas fa-cogs fs-3"></i>
                                            </div>
                                            <div>
                                                <h5>{t("cemMiddleEast2025.booth.practical.title")}</h5>
                                                <p className="text-muted">{t("cemMiddleEast2025.booth.practical.description")}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex">
                                            <div className="text-primary me-3">
                                                <i className="fas fa-user-graduate fs-3"></i>
                                            </div>
                                            <div>
                                                <h5>{t("cemMiddleEast2025.booth.expert.title")}</h5>
                                                <p className="text-muted">{t("cemMiddleEast2025.booth.expert.description")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="hero py-5">
                <div className="container">
                    <div className="text-center text-white">
                        <h2 className="display-5 fw-bold mb-4">{t("cemMiddleEast2025.cta.title")}</h2>
                        <p className="lead mb-4 mx-auto" style={{ maxWidth: "600px", color: "#fff" }}>
                            {t("cemMiddleEast2025.cta.description")}
                        </p>
                        <div className="d-flex justify-content-center gap-3 mb-4">
                            <a href="https://in.linkedin.com/company/pranaair" className="btn btn-outline-light">
                                <i className="fab fa-linkedin me-2"></i>
                                {t("cemMiddleEast2025.cta.linkedin")}
                            </a>
                            <a href="https://www.pranaair.com/" className="btn btn-outline-light">
                                <i className="fas fa-globe me-2"></i>
                                {t("cemMiddleEast2025.cta.website")}
                            </a>
                        </div>
                        <div className="d-flex justify-content-center gap-3">
                            <a href="https://www.ilmexhibitions.com/cem-middleeast/" className="btn btn-primary btn-lg">
                                {t("cemMiddleEast2025.cta.register")}
                            </a>
                            <a href="#contact" className="btn btn-success btn-lg">
                                {t("cemMiddleEast2025.cta.contact")}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="badge bg-light text-primary fs-6 px-3 py-2 rounded-pill mb-3">
                            {t("cemMiddleEast2025.contact.badge")}
                        </span>
                        <h2 className="display-5 fw-bold">{t("cemMiddleEast2025.contact.title")}</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="row g-4 mb-5">
                                <div className="col-md-3 text-center">
                                    <div className="card border-0 h-100">
                                        <div className="card-body">
                                            <div className="text-primary mb-3">
                                                <i className="fas fa-envelope fs-2"></i>
                                            </div>
                                            <h6 className="fw-bold">{t("cemMiddleEast2025.contact.email.title")}</h6>
                                            <p className="text-muted small">{t("cemMiddleEast2025.contact.email.value")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center">
                                    <div className="card border-0 h-100">
                                        <div className="card-body">
                                            <div className="text-primary mb-3">
                                                <i className="fas fa-phone fs-2"></i>
                                            </div>
                                            <h6 className="fw-bold">{t("cemMiddleEast2025.contact.phone.title")}</h6>
                                            <p className="text-muted small">{t("cemMiddleEast2025.contact.phone.value")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center">
                                    <div className="card border-0 h-100">
                                        <div className="card-body">
                                            <div className="text-primary mb-3">
                                                <i className="fas fa-map-marker-alt fs-2"></i>
                                            </div>
                                            <h6 className="fw-bold">{t("cemMiddleEast2025.contact.booth.title")}</h6>
                                            <p className="text-muted small">{t("cemMiddleEast2025.contact.booth.value")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center">
                                    <div className="card border-0 h-100">
                                        <div className="card-body">
                                            <div className="text-primary mb-3">
                                                <i className="fas fa-info-circle fs-2"></i>
                                            </div>
                                            <h6 className="fw-bold">{t("cemMiddleEast2025.contact.eventInfo.title")}</h6>
                                            <p className="text-muted small">{t("cemMiddleEast2025.contact.eventInfo.value")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow-sm">
                                <div className="card-body p-4">
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label">{t("cemMiddleEast2025.contact.form.name")}</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder={t("cemMiddleEast2025.contact.form.namePlaceholder")}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">{t("cemMiddleEast2025.contact.form.email")}</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder={t("cemMiddleEast2025.contact.form.emailPlaceholder")}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">{t("cemMiddleEast2025.contact.form.phone")}</label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    placeholder={t("cemMiddleEast2025.contact.form.phonePlaceholder")}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">{t("cemMiddleEast2025.contact.form.organization")}</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder={t("cemMiddleEast2025.contact.form.organizationPlaceholder")}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">{t("cemMiddleEast2025.contact.form.message")}</label>
                                                <textarea
                                                    className="form-control"
                                                    rows={4}
                                                    placeholder={t("cemMiddleEast2025.contact.form.messagePlaceholder")}
                                                ></textarea>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-success w-100 py-3">
                                                    {t("cemMiddleEast2025.contact.form.submit")}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

