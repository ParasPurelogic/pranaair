import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import InstallCarousel from "@/Components/Pages/Construction/construction"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain } from "@/config"

export default async function ConstructionAirQualityPage() {
    const { t } = await getServerTranslation("construction")
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
            {/* Banner Section */}
            <div
                className="school_banner_box"
                style={{
                    backgroundImage:
                        "url(https://www.pranaair.com/wp-content/uploads/2023/01/air-quality-solutions-for-construction.jpg)",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pocket_title_box school_aqi_box">
                                <h1>
                                    {t("construction.banner.title")}
                                    <span className="bold_text">{t("construction.banner.highlight")}</span>
                                </h1>
                                <span style={{ fontSize: "14pt" }}>{t("construction.banner.description")}</span>
                                <br />
                                <br />
                                <a className="pocket_buy_btn" href="#get_in_touch">
                                    {t("construction.banner.cta")}
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 banner_quality_img_box"></div>
                    </div>
                </div>
            </div>

            {/* Major Air Pollutants Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                {t("construction.pollutants.title")}{" "}
                                <span className="bold_text">{t("construction.pollutants.highlight")}</span>
                            </h2>
                            <p>{t("construction.pollutants.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pollutants Grid */}
            <div className="container pollution_cntr inner_container">
                <div className="main-inner_box">
                    <div className="inner_box">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/04/pm-pollutant.png"
                                alt={t("construction.pollutantGrid.pm.imgAlt")}
                                width="102"
                                height="99"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("construction.pollutantGrid.pm.title")}</h2>
                                <p>{t("construction.pollutantGrid.pm.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner_box">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/05/noise-pollutant.png"
                                alt={t("construction.pollutantGrid.noise.imgAlt")}
                                width="102"
                                height="99"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("construction.pollutantGrid.noise.title")}</h2>
                                <p>{t("construction.pollutantGrid.noise.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner_box">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/04/CO-pollutant.png"
                                alt={t("construction.pollutantGrid.co.imgAlt")}
                                width="102"
                                height="99"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("construction.pollutantGrid.co.title")}</h2>
                                <p>{t("construction.pollutantGrid.co.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner_box">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/04/voc-pollutant.png"
                                alt={t("construction.pollutantGrid.vocs.imgAlt")}
                                width="102"
                                height="99"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("construction.pollutantGrid.vocs.title")}</h2>
                                <p>{t("construction.pollutantGrid.vocs.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner_box">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/04/NOx-pollutant.png"
                                alt={t("construction.pollutantGrid.nox.imgAlt")}
                                width="102"
                                height="99"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("construction.pollutantGrid.nox.title")}</h2>
                                <p>{t("construction.pollutantGrid.nox.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Construction Air Pollution Image */}
            <div
                className="container-fluid school_img_box"
                style={{
                    backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2023/01/construction-air-pollution.jpg)",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="school_box_cntr">
                                <ul>
                                    <li className="first_school_box">
                                        <span className="school_icon_box">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-icon.png"
                                                alt={t("construction.pollutionEffects.vocs.imgAlt")}
                                            />
                                        </span>
                                        <div className="schhol_text_box">
                                            <h3>{t("construction.pollutionEffects.vocs.title")}</h3>
                                            <p>{t("construction.pollutionEffects.vocs.description")}</p>
                                        </div>
                                    </li>
                                    <li className="second_school_box">
                                        <span className="school_icon_box">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/05/noise-icon.png"
                                                alt={t("construction.pollutionEffects.sox.imgAlt")}
                                            />
                                        </span>
                                        <div className="schhol_text_box">
                                            <h3>{t("construction.pollutionEffects.sox.title")}</h3>
                                            <p>{t("construction.pollutionEffects.sox.description")}</p>
                                        </div>
                                    </li>
                                    <li className="third_school_box">
                                        <span className="school_icon_box">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/04/NOx-pollutant-icon.png"
                                                alt={t("construction.pollutionEffects.nox.imgAlt")}
                                            />
                                        </span>
                                        <div className="schhol_text_box">
                                            <h3>{t("construction.pollutionEffects.nox.title")}</h3>
                                            <p>{t("construction.pollutionEffects.nox.description")}</p>
                                        </div>
                                    </li>
                                    <li className="fourth_school_box">
                                        <span className="school_icon_box">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2022/08/particulate-pm2.5-icon.png"
                                                alt={t("construction.pollutionEffects.pm.imgAlt")}
                                            />
                                        </span>
                                        <div className="schhol_text_box">
                                            <h3>{t("construction.pollutionEffects.pm.title")}</h3>
                                            <p>{t("construction.pollutionEffects.pm.description")}</p>
                                        </div>
                                    </li>
                                    <li className="fivth_school_box">
                                        <span className="school_icon_box">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/04/co-pollutant-icon.png"
                                                alt={t("construction.pollutionEffects.co.imgAlt")}
                                            />
                                        </span>
                                        <div className="schhol_text_box">
                                            <h3>{t("construction.pollutionEffects.co.title")}</h3>
                                            <p>{t("construction.pollutionEffects.co.description")}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Who are at Risk Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                {t("construction.risk.title")} <span className="bold_text">{t("construction.risk.highlight")}</span>
                            </h2>
                            <p>{t("construction.risk.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* People at the Site */}
            <div className="container pollution_cntr inner_container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 style={{ textAlign: "center", fontSize: "18pt" }}>{t("construction.peopleAtSite.title")}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/01/worker.png"
                                alt={t("construction.peopleAtSite.workers.imgAlt")}
                                width="108"
                                height="160"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("construction.peopleAtSite.workers.title")}</h2>
                                <p>{t("construction.peopleAtSite.workers.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/01/inspector.png"
                                alt={t("construction.peopleAtSite.inspector.imgAlt")}
                                width="108"
                                height="160"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("construction.peopleAtSite.inspector.title")}</h2>
                                <p>{t("construction.peopleAtSite.inspector.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/01/surveyor.png"
                                alt={t("construction.peopleAtSite.surveyor.imgAlt")}
                                width="108"
                                height="160"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("construction.peopleAtSite.surveyor.title")}</h2>
                                <p>{t("construction.peopleAtSite.surveyor.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/01/civil-engineer.png"
                                alt={t("construction.peopleAtSite.civilEngineer.imgAlt")}
                                width="108"
                                height="160"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("construction.peopleAtSite.civilEngineer.title")}</h2>
                                <p>{t("construction.peopleAtSite.civilEngineer.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nearby Residential Areas */}
            <div className="container pollution_cntr inner_container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 style={{ textAlign: "center", fontSize: "18pt" }}>{t("construction.residentialAreas.title")}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/01/children-near-construction-site.png"
                                alt={t("construction.residentialAreas.children.imgAlt")}
                                width="108"
                                height="160"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("construction.residentialAreas.children.title")}</h2>
                                <p>{t("construction.residentialAreas.children.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/01/pregnant-lady.png"
                                alt={t("construction.residentialAreas.pregnantLadies.imgAlt")}
                                width="108"
                                height="160"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("construction.residentialAreas.pregnantLadies.title")}</h2>
                                <p>{t("construction.residentialAreas.pregnantLadies.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/01/old-people-near-construction-site.png"
                                alt={t("construction.residentialAreas.oldPeople.imgAlt")}
                                width="108"
                                height="160"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("construction.residentialAreas.oldPeople.title")}</h2>
                                <p>{t("construction.residentialAreas.oldPeople.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/01/people-with-health-issue.png"
                                alt={t("construction.residentialAreas.healthIssues.imgAlt")}
                                width="108"
                                height="160"
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("construction.residentialAreas.healthIssues.title")}</h2>
                                <p>{t("construction.residentialAreas.healthIssues.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Guidelines Section */}
            <div className="container-fluid" style={{ backgroundColor: "#f8f2e7" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="introducing_box sub_title_box text-center">
                                <h2 className="title_heading">
                                    {t("construction.guidelines.title")}{" "}
                                    <span className="bold_text">{t("construction.guidelines.highlight")}</span>
                                </h2>
                                <p>{t("construction.guidelines.description")}</p>
                            </div>
                            <div className="introduce_button" style={{ display: "flex", justifyContent: "center" }}>
                                <a
                                    className="bg-btn bg-green view_btn"
                                    data-bs-toggle="collapse"
                                    href="#guidelinesCollapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="guidelinesCollapse"
                                >
                                    {t("construction.guidelines.knowMore")}{" "}
                                    <img
                                        className="alignnone"
                                        src="https://www.pranaair.com/wp-content/uploads/2023/05/view-button.png"
                                        width="24"
                                        height="24"
                                        alt={t("construction.guidelines.viewBtnAlt")}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Guidelines Details (Collapsible) */}
            <div className="collapse" id="guidelinesCollapse">
                <div className="container-fluid table_specifiction_collapse" style={{ backgroundColor: "#f8f2e7" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 style={{ textAlign: "center" }}>{t("construction.guidelinesDetails.title")}</h3>
                            </div>
                            <div className="col-md-4">
                                <p style={{ textAlign: "center" }}>
                                    <img
                                        className="wp-image-66977 aligncenter"
                                        src="https://www.pranaair.com/wp-content/uploads/2023/02/DPCC-300x286.png"
                                        alt={t("construction.guidelinesDetails.dpcc.imgAlt")}
                                        width="186"
                                        height="177"
                                    />
                                    <strong>{t("construction.guidelinesDetails.dpcc.abbr")}</strong>{" "}
                                    {t("construction.guidelinesDetails.dpcc.fullName")}
                                </p>
                            </div>
                            <div className="col-md-4">
                                <p style={{ textAlign: "center" }}>
                                    <img
                                        className="wp-image-66977 aligncenter"
                                        src="https://www.pranaair.com/wp-content/uploads/2023/02/HSPCB.png"
                                        alt={t("construction.guidelinesDetails.hspcb.imgAlt")}
                                        width="186"
                                        height="177"
                                    />
                                    <strong>{t("construction.guidelinesDetails.hspcb.abbr")}</strong>{" "}
                                    {t("construction.guidelinesDetails.hspcb.fullName")}
                                </p>
                            </div>
                            <div className="col-md-4">
                                <p style={{ textAlign: "center" }}>
                                    <img
                                        className="wp-image-66977 aligncenter"
                                        src="https://www.pranaair.com/wp-content/uploads/2023/02/UPPCB.png"
                                        alt={t("construction.guidelinesDetails.uppcb.imgAlt")}
                                        width="186"
                                        height="177"
                                    />
                                    <strong>{t("construction.guidelinesDetails.uppcb.abbr")}</strong>{" "}
                                    {t("construction.guidelinesDetails.uppcb.fullName")}
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p style={{ textAlign: "center", fontSize: "12pt" }}>
                                    {t("construction.guidelinesDetails.instructions.intro")}
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="alert alert-info">{t("construction.guidelinesDetails.instructions.item1")}</div>
                            </div>
                            <div className="col-md-6">
                                <div className="alert alert-info">{t("construction.guidelinesDetails.instructions.item2")}</div>
                            </div>
                            <div className="col-md-6">
                                <div className="alert alert-info">{t("construction.guidelinesDetails.instructions.item3")}</div>
                            </div>
                            <div className="col-md-6">
                                <div className="alert alert-info">{t("construction.guidelinesDetails.instructions.item4")}</div>
                            </div>
                            <div className="col-md-12">
                                <h3 style={{ textAlign: "center", color: "#78ae60" }}>
                                    {t("construction.guidelinesDetails.pressRelease.title")}
                                </h3>
                                <p style={{ textAlign: "center" }}>
                                    <a href="https://pib.gov.in/Pressreleaseshare.aspx?PRID=1759914" rel="nofollow">
                                        {t("construction.guidelinesDetails.pressRelease.link")}
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="air_heading" style={{ textAlign: "center" }}>
                                    {t("construction.guidelinesDetails.howWeCanHelp")}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ambient Monitor Section */}
            <div className="ambient_monitor_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="nav nav-pills nav-justified" id="ambientMonitorTabs" role="tablist">
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
                                        <span className="tab_img">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/05/Prana-Air-Ambient-Air-quality-monitor-for-construction.webp"
                                                alt={t("construction.ambientMonitor.tabs.monitor.imgAlt")}
                                                height="183"
                                            />
                                        </span>
                                        {t("construction.ambientMonitor.tabs.monitor.title")}
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="menu1-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#menu1"
                                        type="button"
                                        role="tab"
                                        aria-controls="menu1"
                                        aria-selected="false"
                                    >
                                        <span className="tab_img">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/05/aqi-api-for-construction.png"
                                                alt={t("construction.ambientMonitor.tabs.apiData.imgAlt")}
                                                width="242"
                                                height="183"
                                            />
                                        </span>
                                        {t("construction.ambientMonitor.tabs.apiData.title")}
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="menu2-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#menu2"
                                        type="button"
                                        role="tab"
                                        aria-controls="menu2"
                                        aria-selected="false"
                                    >
                                        <span className="tab_img">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/05/cctv-camera.png"
                                                alt={t("construction.ambientMonitor.tabs.cctvCamera.imgAlt")}
                                                width="242"
                                                height="183"
                                            />
                                        </span>
                                        {t("construction.ambientMonitor.tabs.cctvCamera.title")}
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="ambientMonitorTabsContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="ambient_monitor_box">
                                        <p>{t("construction.ambientMonitor.content.monitor.description")}</p>
                                        <h5 className="features">{t("construction.ambientMonitor.content.monitor.featuresTitle")}</h5>
                                        <ul>
                                            {t("construction.ambientMonitor.content.monitor.features", { returnObjects: true }).map(
                                                (feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ),
                                            )}
                                        </ul>

                                        <ul className="paramete_list">
                                            {t("construction.ambientMonitor.content.monitor.parameters", { returnObjects: true }).map(
                                                (param, index) => (
                                                    <li key={index}>{param}</li>
                                                ),
                                            )}
                                        </ul>

                                        <div className="ambient_btn_box">
                                            <a
                                                href="https://www.pranaair.com/wp-content/uploads/2024/05/Prana-Air-ambient-quality-monitor-brochure-for-construction-sites.pdf"
                                                className="broucher_btn"
                                            >
                                                {t("construction.ambientMonitor.content.monitor.brochureBtn")}
                                            </a>
                                            <a href="#get_in_touch" className="broucher_btn get_quote_btn">
                                                {t("construction.ambientMonitor.content.monitor.quoteBtn")}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="menu1" role="tabpanel" aria-labelledby="menu1-tab">
                                    <div className="ambient_monitor_box">
                                        <p>{t("construction.ambientMonitor.content.apiData.description")}</p>
                                        <h5 className="features">{t("construction.ambientMonitor.content.apiData.featuresTitle")}</h5>
                                        <ul>
                                            {t("construction.ambientMonitor.content.apiData.features", { returnObjects: true }).map(
                                                (feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ),
                                            )}
                                        </ul>

                                        <ul className="paramete_list"></ul>

                                        <div className="ambient_btn_box">
                                            <a href="#" className="broucher_btn">
                                                {t("construction.ambientMonitor.content.apiData.brochureBtn")}
                                            </a>
                                            <a href="#get_in_touch" className="broucher_btn get_quote_btn">
                                                {t("construction.ambientMonitor.content.apiData.quoteBtn")}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="menu2" role="tabpanel" aria-labelledby="menu2-tab">
                                    <div className="ambient_monitor_box">
                                        <p>{t("construction.ambientMonitor.content.cctvCamera.description")}</p>
                                        <h5 className="features">{t("construction.ambientMonitor.content.cctvCamera.featuresTitle")}</h5>
                                        <ul className="feature_list_box">
                                            {t("construction.ambientMonitor.content.cctvCamera.features", { returnObjects: true }).map(
                                                (feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ),
                                            )}
                                        </ul>

                                        <ul className="paramete_list"></ul>

                                        <div className="ambient_btn_box">
                                            <a href="#" className="broucher_btn">
                                                {t("construction.ambientMonitor.content.cctvCamera.brochureBtn")}
                                            </a>
                                            <a href="#get_in_touch" className="broucher_btn get_quote_btn">
                                                {t("construction.ambientMonitor.content.cctvCamera.quoteBtn")}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Air Quality Monitoring Section */}
            <div className="container-fluid quality_solution_section top_space_heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="introducing_box sub_title_box text-center">
                                <h2 className="title_heading">
                                    {t("construction.airQualityMonitoring.title")}{" "}
                                    <span className="bold_text">{t("construction.airQualityMonitoring.highlight")}</span>
                                </h2>
                                <strong>{t("construction.airQualityMonitoring.subtitle")}</strong>
                                <p>{t("construction.airQualityMonitoring.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs for Air Quality Solutions */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav nav-tabs" id="aqmTabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="aqm-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#aqm"
                                    type="button"
                                    role="tab"
                                    aria-controls="aqm"
                                    aria-selected="true"
                                >
                                    {t("construction.airQualitySolutions.tabs.monitor")}
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="tvapp-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tvapp"
                                    type="button"
                                    role="tab"
                                    aria-controls="tvapp"
                                    aria-selected="false"
                                >
                                    {t("construction.airQualitySolutions.tabs.display")}
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="webdashboard-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#webdashboard"
                                    type="button"
                                    role="tab"
                                    aria-controls="webdashboard"
                                    aria-selected="false"
                                >
                                    {t("construction.airQualitySolutions.tabs.dashboard")}
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="aqmTabsContent">
                            <div className="tab-pane fade show active" id="aqm" role="tabpanel" aria-labelledby="aqm-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h2>
                                            <span style={{ color: "#78ae60" }}>
                                                {t("construction.airQualitySolutions.content.monitor.title")}
                                            </span>
                                        </h2>
                                        <p>{t("construction.airQualitySolutions.content.monitor.description")}</p>
                                        <ul className="paramete_list new-para">
                                            {t("construction.airQualitySolutions.content.monitor.parameters", { returnObjects: true }).map(
                                                (param, index) => (
                                                    <li key={index}>{param}</li>
                                                ),
                                            )}
                                        </ul>
                                        <a
                                            className="new-brochure"
                                            href="https://www.pranaair.com/wp-content/uploads/2024/05/Prana-Air-ambient-quality-monitor-brochure-for-construction-sites.pdf"
                                        >
                                            {t("construction.airQualitySolutions.content.monitor.brochureLink")}
                                        </a>
                                    </div>
                                    <div className="col-md-6 new-monitor-bg">
                                        <a href="#">
                                            <img
                                                className="wp-image-74252 aligncenter"
                                                src="https://www.pranaair.com/wp-content/uploads/2024/05/Prana-Air-Ambient-Air-quality-monitor-for-construction.webp"
                                                alt={t("construction.airQualitySolutions.content.monitor.imgAlt")}
                                                width="306"
                                                height="419"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tvapp" role="tabpanel" aria-labelledby="tvapp-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h2>
                                            <span style={{ color: "#78ae60" }}>
                                                {t("construction.airQualitySolutions.content.display.title")}
                                            </span>
                                        </h2>
                                        <p>{t("construction.airQualitySolutions.content.display.description")}</p>
                                        <ul className="paramete_list">
                                            {t("construction.airQualitySolutions.content.display.features", { returnObjects: true }).map(
                                                (feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <img
                                            className="wp-image-74236 aligncenter"
                                            src="https://www.pranaair.com/wp-content/uploads/2023/05/led-and-android-tv-display.png"
                                            alt={t("construction.airQualitySolutions.content.display.imgAlt")}
                                            width="420"
                                            height="318"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="webdashboard" role="tabpanel" aria-labelledby="webdashboard-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h2>
                                            <span style={{ color: "#78ae60" }}>
                                                {t("construction.airQualitySolutions.content.dashboard.title")}
                                            </span>
                                        </h2>
                                        <p>{t("construction.airQualitySolutions.content.dashboard.description")}</p>
                                        <ul className="paramete_list">
                                            {t("construction.airQualitySolutions.content.dashboard.platforms", { returnObjects: true }).map(
                                                (platform, index) => (
                                                    <li key={index}>{platform}</li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <img
                                            className="wp-image-74195 aligncenter"
                                            src="https://www.pranaair.com/wp-content/uploads/2023/05/aqi-cloud-storage-and-data-dashboard.png"
                                            alt={t("construction.airQualitySolutions.content.dashboard.imgAlt")}
                                            width="480"
                                            height="363"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Monitor Features Cards */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="new-card-monitor">
                            <div className="new-card-text">
                                <h3>{t("construction.monitorFeatures.uninterrupted.title")}</h3>
                                <p>{t("construction.monitorFeatures.uninterrupted.description")}</p>
                            </div>
                            <div className="new-card-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/05/Uninterrupted-Performance.webp"
                                    alt={t("construction.monitorFeatures.uninterrupted.imgAlt")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="new-card-monitor">
                            <div className="new-card-text">
                                <h3>{t("construction.monitorFeatures.gps.title")}</h3>
                                <p>{t("construction.monitorFeatures.gps.description")}</p>
                            </div>
                            <div className="new-card-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/05/GPS-Enabled.webp"
                                    alt={t("construction.monitorFeatures.gps.imgAlt")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="new-card-monitor">
                            <div className="new-card-text">
                                <h3>{t("construction.monitorFeatures.sdCard.title")}</h3>
                                <p>{t("construction.monitorFeatures.sdCard.description")}</p>
                            </div>
                            <div className="new-card-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/05/SD-CARD-STORAGE.webp"
                                    alt={t("construction.monitorFeatures.sdCard.imgAlt")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Waterproof Banner */}
            <div className="container-fluid air-qulity-monitor-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="air-qlty-banner-txt">
                                <h2>{t("construction.waterproofBanner.title")}</h2>
                                <p>{t("construction.waterproofBanner.description")}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="waterproof-housing">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/05/IP68-Weatherproof.png"
                                    alt={t("construction.waterproofBanner.imgAlt")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Web Dashboard Section */}
            <div className="container web-dash">
                <div className="row">
                    <div className="col-md-6">
                        <div className="web-dash-heading">
                            <h2>{t("construction.webDashboard.title")}</h2>
                            <p>{t("construction.webDashboard.description")}</p>
                            <ul>
                                <li>
                                    <a href="https://apps.apple.com/tt/app/aqi/id1439684571">
                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/05/icon-_apple.png" alt="" />{" "}
                                        {t("construction.webDashboard.downloadIOS.prefix")}{" "}
                                        <strong>{t("construction.webDashboard.downloadIOS.platform")}</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://play.google.com/store/apps/details?id=com.aqi.data">
                                        <img src="https://www.pranaair.com/wp-content/uploads/2024/05/icon-android.png" alt="" />{" "}
                                        {t("construction.webDashboard.downloadAndroid.prefix")}{" "}
                                        <strong>{t("construction.webDashboard.downloadAndroid.platform")}</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="web-dash-img">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2024/05/aqi-app-and-web-dashboard.webp"
                                alt={t("construction.webDashboard.imgAlt")}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Freemium Services */}
            <div className="container-fluid top_space_heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="introducing_box sub_title_box text-center">
                                <h2 className="title_heading">
                                    {t("construction.dataServices.title")}{" "}
                                    <span className="bold_text">{t("construction.dataServices.highlight")}</span>
                                </h2>
                                <p>{t("construction.dataServices.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container inner_container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2024/05/Air-Quality-Monitor-services.webp"
                                alt={t("construction.servicesGrid.monitor.imgAlt")}
                            />
                            <h4>{t("construction.servicesGrid.monitor.title")}</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/05/led-display-and-tv-dashboard-at-construction-site.jpg"
                                alt={t("construction.servicesGrid.display.imgAlt")}
                            />
                            <h4>{t("construction.servicesGrid.display.title")}</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/05/aqi-cloud-and-data-dashboards.jpg"
                                alt={t("construction.servicesGrid.dashboard.imgAlt")}
                            />
                            <h4>{t("construction.servicesGrid.dashboard.title")}</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Installation Section */}
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 style={{ textAlign: "center", fontSize: "18pt" }}>{t("construction.installation.title")}</h3>
                            <InstallCarousel />
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            <div className="container">
                <div className="row testimonial-bg-image">
                    <div className="col-md-9">
                        <p>{t("construction.testimonial.quote")}</p>
                    </div>
                    <div className="col-md-3">
                        <img
                            className="wp-image-74390 aligncenter"
                            src="https://www.pranaair.com/wp-content/uploads/2023/05/unity-group-logo.png"
                            alt={t("construction.testimonial.logoAlt")}
                            width="182"
                            height="63"
                        />
                        <p style={{ textAlign: "center" }}>
                            <strong>{t("construction.testimonial.name")}</strong>
                            <br />
                            {t("construction.testimonial.position")}
                        </p>
                    </div>
                </div>
            </div>

            {/* RMC Plant Section */}
            <div className="container-fluid rmc-plant">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="rmc-plant-sec">
                                <ul>
                                    <li>
                                        <h5>
                                            {t("construction.rmcPlant.description.part1")}{" "}
                                            <b>{t("construction.rmcPlant.description.highlight")}</b>{" "}
                                            {t("construction.rmcPlant.description.part2")}
                                        </h5>
                                    </li>
                                    <li>
                                        <Link href={`${domain}/solutions-by-application/constructions`}>
                                            {t("construction.rmcPlant.knowMore")}
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/05/plant-btn-icon.png"
                                                alt={t("construction.rmcPlant.btnIconAlt")}
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clientele Section */}
            <div className="container-fluid top_space_heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="introducing_box sub_title_box text-center">
                                <h2 className="title_heading">
                                    {t("construction.clientele.title")}{" "}
                                    <span className="bold_text">{t("construction.clientele.highlight")}</span>
                                </h2>
                                <p>{t("construction.clientele.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Client Logos */}
            <div className="container inner_container client_logo_section">
                <div className="row">
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/05/L-and-T-300x154.png"
                            alt="Client Logo"
                            className="img-responsive"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/05/omax-300x154.png"
                            alt="Client Logo"
                            className="img-responsive"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/05/unity-group-300x154.png"
                            alt="Client Logo"
                            className="img-responsive"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/05/NKG-300x154.png"
                            alt="Client Logo"
                            className="img-responsive"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/05/signature-global-comp-logo-300x154.png"
                            alt="Client Logo"
                            className="img-responsive"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/05/central-park-comp-logo-300x154.png"
                            alt="Client Logo"
                            className="img-responsive"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/05/dcm-shriram-logo-300x154.png"
                            alt="Client Logo"
                            className="img-responsive"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/05/emaar-300x154.png"
                            alt="Client Logo"
                            className="img-responsive"
                        />
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="container-fluid faq_ask_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="introducing_box sub_title_box text-center">
                                <h2 className="title_heading">
                                    {t("construction.faq.title")} <span className="bold_text">{t("construction.faq.highlight")}</span>
                                </h2>
                                <p>
                                    {t("construction.faq.description")}
                                    <br />
                                    {t("construction.faq.helpText")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Accordion */}
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
                                            {t("construction.faq.questions.q1.question")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse1"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="heading1"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("construction.faq.questions.q1.answer")}</div>
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
                                            {t("construction.faq.questions.q2.question")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse2"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading2"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("construction.faq.questions.q2.answer")}</div>
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
                                            {t("construction.faq.questions.q3.question")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse3"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading3"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("construction.faq.questions.q3.answer")}</div>
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
                                            {t("construction.faq.questions.q4.question")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse4"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading4"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("construction.faq.questions.q4.answer")}</div>
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
                                            {t("construction.faq.questions.q5.question")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse5"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading5"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("construction.faq.questions.q5.answer")}</div>
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
                                            {t("construction.faq.questions.q6.question")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse6"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading6"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("construction.faq.questions.q6.answer")}</div>
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
                                            {t("construction.faq.questions.q7.question")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse7"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading7"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("construction.faq.questions.q7.answer")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <div className="container-fluid airqulality_contact_section inner_container" id="get_in_touch">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contact-heading">
                                <h2>{t("construction.contact.title")}</h2>
                                <p>{t("construction.contact.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactForm pageName="Constructions Page" />
            </div>
            {/* Industrial Applications */}
            <div className="container-fluid seperate_industrial_box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="introducing_box sub_title_box text-center">
                                <h2 className="title_heading">
                                    {t("construction.industrialApplications.title")}{" "}
                                    <span className="bold_text">{t("construction.industrialApplications.highlight")}</span>
                                </h2>
                                <p>
                                    {t("construction.industrialApplications.description")}
                                    <br />
                                    {t("construction.industrialApplications.descriptionLine2")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industrial Applications Carousel */}
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
