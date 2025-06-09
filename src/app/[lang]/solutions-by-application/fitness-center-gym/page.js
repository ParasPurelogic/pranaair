import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import FitnessCarousel from "@/Components/Pages/FitnessCenterGym/fitness-gym"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain } from "@/config"

export default async function AirQualitySolutionsFitnessPage() {
    const { t } = await getServerTranslation("fitness-gym")
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
    const airQualityMonitors = [
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/12/prana-air-squair-air-monitor-in-fitness-center-gym.png",
            imageAlt: "prana air squair monitor as the air quality solutions for restaurant or cafe",
            title: "Prana Air SQUAIR<br /> Air quality monitor",
            description: "SQUAIR monitor is a smart indoor air quality monitoring device that can detect particulate matters, temperature, humidity, and gas parameters.",
            features: [
                "Detects PM2.5, PM10, CO2, TVOC, Noise, Light (LUX), Temperature & humidity",
                "Mode of connectivity: WiFi, GSM, BMS",
                "Mobile & Smart TV App, web-dashboard",
            ],
            knowMoreLink: "/air-quality-monitor/squair-air-monitor/",
            hasRentOption: true,
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/12/prana-air-sensible-plus-air-monitor-for-fitness-center-gym.jpg",
            imageAlt: "prana air sensible+ air quality monitor for restaurants and cafe",
            title: "Prana Air Sensible+<br /> Air quality monitor",
            description: "This is a smart air quality monitor that comes with 7 inch touch screen display that gives more insightful data.",
            features: [
                "Detects PM2.5, PM10, CO2, TVOC, HCHO, Temperature, Humidity",
                "7 Inch LED Touch Screen Display",
                "5000 mAh Battery InBuilt",
                "WiFi Connectivity With Mobile App",
            ],
            knowMoreLink: "/air-quality-monitor/squair-air-monitor/",
            hasRentOption: true,
        },
    ];
    return (
        <div>
            <div
                className="row school_banner_box"
                style={{
                    backgroundImage:
                        "url('https://www.pranaair.com/wp-content/uploads/2022/12/air-quality-solutions-for-fitness-center.jpg')",
                }}
            >
                <div className="col-md-6 banner_quality_box">
                    <div className="pocket_title_box school_aqi_box">
                        <h1>
                            {t("fitness.banner.title")} <span className="bold_text">{t("fitness.banner.highlight")}</span>
                        </h1>
                        <p>{t("fitness.banner.description")}</p>
                        <a className="pocket_buy_btn" href="#get_in_touch">
                            {t("fitness.banner.cta")}
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
                                {t("fitness.pollutants.title")} <span className="bold_text">{t("fitness.pollutants.highlight")}</span>
                            </h2>
                            <p>{t("fitness.pollutants.description")}</p>
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
                                alt={t("fitness.pollutantFeatures.pm25.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("fitness.pollutantFeatures.pm25.title")}</h2>
                                <p>{t("fitness.pollutantFeatures.pm25.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-gas-icon.png"
                                alt={t("fitness.pollutantFeatures.co2.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("fitness.pollutantFeatures.co2.title")}</h2>
                                <p>{t("fitness.pollutantFeatures.co2.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-parameter-icon.png"
                                alt={t("fitness.pollutantFeatures.tvoc.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("fitness.pollutantFeatures.tvoc.title")}</h2>
                                <p>{t("fitness.pollutantFeatures.tvoc.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/12/microbe-icon.png"
                                alt={t("fitness.pollutantFeatures.microbial.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("fitness.pollutantFeatures.microbial.title")}</h2>
                                <p>{t("fitness.pollutantFeatures.microbial.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/12/odor-icon.png"
                                alt={t("fitness.pollutantFeatures.odor.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("fitness.pollutantFeatures.odor.title")}</h2>
                                <p>{t("fitness.pollutantFeatures.odor.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/08/noise-icon.png"
                                alt={t("fitness.pollutantFeatures.noise.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("fitness.pollutantFeatures.noise.title")}</h2>
                                <p>{t("fitness.pollutantFeatures.noise.description")}</p>
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
                        "url('https://www.pranaair.com/wp-content/uploads/2022/12/air-pollution-problem-in-fitness-center-gym.jpg')",
                }}
            >
                <div className="col-md-12">
                    <div className="school_box_cntr">
                        <ul>
                            <li className="first_school_box">
                                <span className="school_icon_box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-icon-2.png"
                                        alt={t("fitness.pollutionEffects.pm25.imgAlt")}
                                    />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>{t("fitness.pollutionEffects.pm25.title")}</h3>
                                    <p>{t("fitness.pollutionEffects.pm25.description")}</p>
                                </div>
                            </li>
                            <li className="second_school_box">
                                <span className="school_icon_box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-icon.png"
                                        alt={t("fitness.pollutionEffects.co2.imgAlt")}
                                    />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>{t("fitness.pollutionEffects.co2.title")}</h3>
                                    <p>{t("fitness.pollutionEffects.co2.description")}</p>
                                </div>
                            </li>
                            <li className="third_school_box">
                                <span className="school_icon_box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2022/08/ozone-o3-icon.png"
                                        alt={t("fitness.pollutionEffects.noise.imgAlt")}
                                    />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>{t("fitness.pollutionEffects.noise.title")}</h3>
                                    <p>{t("fitness.pollutionEffects.noise.description")}</p>
                                </div>
                            </li>
                            <li className="fourth_school_box">
                                <span className="school_icon_box">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2022/12/bacteria-icon.png"
                                        alt={t("fitness.pollutionEffects.microbe.imgAlt")}
                                    />
                                </span>
                                <div className="schhol_text_box">
                                    <h3>{t("fitness.pollutionEffects.microbe.title")}</h3>
                                    <p>{t("fitness.pollutionEffects.microbe.description")}</p>
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
                                {t("fitness.risk.title")} <span className="bold_text">{t("fitness.risk.highlight")}</span>
                            </h2>
                            <p>{t("fitness.risk.description")}</p>
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
                                src="https://www.pranaair.com/wp-content/uploads/2022/12/gym-personal-trainer.png"
                                alt={t("fitness.riskGroups.personalTrainer.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("fitness.riskGroups.personalTrainer.title")}</h2>
                                <p>{t("fitness.riskGroups.personalTrainer.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/12/service-technicians.png"
                                alt={t("fitness.riskGroups.serviceTechnician.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("fitness.riskGroups.serviceTechnician.title")}</h2>
                                <p>{t("fitness.riskGroups.serviceTechnician.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/12/front-desk-staff.png"
                                alt={t("fitness.riskGroups.frontDeskStaff.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("fitness.riskGroups.frontDeskStaff.title")}</h2>
                                <p>{t("fitness.riskGroups.frontDeskStaff.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="risk_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/12/gym-members.png"
                                alt={t("fitness.riskGroups.members.imgAlt")}
                            />
                            <div className="feature_wrap_box">
                                <h2>{t("fitness.riskGroups.members.title")}</h2>
                                <p>{t("fitness.riskGroups.members.description")}</p>
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
                                {t("fitness.solutions.title")} <span className="bold_text">{t("fitness.solutions.highlight")}</span>
                            </h2>
                            <p>{t("fitness.solutions.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bootstrap Tabs Section */}
            <div className="container air_quality_tab_sec">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav nav-tabs" id="airQualityTabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="air-quality-monitors-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#air-quality-monitors"
                                    type="button"
                                    role="tab"
                                    aria-controls="air-quality-monitors"
                                    aria-selected="true"
                                >
                                    {t("fitness.tabs.monitors")}
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="fresh-air-machine-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#fresh-air-machine"
                                    type="button"
                                    role="tab"
                                    aria-controls="fresh-air-machine"
                                    aria-selected="false"
                                >
                                    {t("fitness.tabs.freshAir")}
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
                                    {t("fitness.tabs.apiData")}
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="airQualityTabsContent">
                            <div
                                className="tab-pane fade show active inner_container"
                                id="air-quality-monitors"
                                role="tabpanel"
                                aria-labelledby="air-quality-monitors-tab"
                            >
                                <div className="owl-slider">
                                    {/* Air Quality Monitors content would go here */}
                                    <div className="monitor-placeholder">
                                        <FitnessCarousel appfitness={airQualityMonitors} />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="fresh-air-machine"
                                role="tabpanel"
                                aria-labelledby="fresh-air-machine-tab"
                            >
                                <div className="slider_cntr">
                                    <div className="slider_img_box">
                                        <Link href={`${domain}/fresh-air-machine`}>
                                            <img
                                                style={{ width: "100%" }}
                                                src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-fresh-air-machine-for-iaq-solution.jpg"
                                                alt={t("fitness.tabContent.freshAir.imgAlt")}
                                            />
                                        </Link>
                                    </div>
                                    <div className="slider_details_box">
                                        <h3>
                                            {t("fitness.tabContent.freshAir.title")}
                                            <br /> {t("fitness.tabContent.freshAir.subtitle")}
                                        </h3>
                                        <span>{t("fitness.tabContent.freshAir.description")}</span>
                                        <ul className="airquality_list">
                                            <li>{t("fitness.tabContent.freshAir.features.item1")}</li>
                                            <li>{t("fitness.tabContent.freshAir.features.item2")}</li>
                                            <li>{t("fitness.tabContent.freshAir.features.item3")}</li>
                                        </ul>
                                        <Link href={`${domain}/fresh-air-machine`} className="knowmore_btn">
                                            {t("fitness.tabContent.freshAir.knowMore")}
                                        </Link>
                                        <Link href={`${domain}/air-quality-monitor/rental-air-monitor`} className="rent_btn">
                                            {t("fitness.tabContent.freshAir.rent")}
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
                                            alt={t("fitness.tabContent.apiData.imgAlt")}
                                        />
                                    </div>
                                    <div className="slider_details_box">
                                        <h3>
                                            {t("fitness.tabContent.apiData.title")}
                                            <br /> {t("fitness.tabContent.apiData.subtitle")}
                                        </h3>
                                        <span>{t("fitness.tabContent.apiData.description")}</span>
                                        <ul className="airquality_list">
                                            <li>{t("fitness.tabContent.apiData.features.item1")}</li>
                                            <li>{t("fitness.tabContent.apiData.features.item2")}</li>
                                            <li>{t("fitness.tabContent.apiData.features.item3")}</li>
                                        </ul>
                                        <br />
                                        <a href="#get_in_touch" className="knowmore_btn">
                                            {t("fitness.tabContent.apiData.knowMore")}
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
                                {t("fitness.dataServices.title")}{" "}
                                <span className="bold_text">{t("fitness.dataServices.highlight")}</span>
                            </h2>
                            <p>{t("fitness.dataServices.description")}</p>
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
                                alt={t("fitness.dataServices.features.tvDashboard.imgAlt")}
                            />
                            <h4>{t("fitness.dataServices.features.tvDashboard.title")}</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/12/aqi-customized-tablet-app.jpg"
                                alt={t("fitness.dataServices.features.customApp.imgAlt")}
                            />
                            <h4>{t("fitness.dataServices.features.customApp.title")}</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="app_service_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-data-qrcode-for-airpot.jpg"
                                alt={t("fitness.dataServices.features.qrCode.imgAlt")}
                            />
                            <h4>{t("fitness.dataServices.features.qrCode.title")}</h4>
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
                                {t("fitness.effects.title")} <span className="bold_text">{t("fitness.effects.highlight")}</span>
                            </h2>
                            <p>{t("fitness.effects.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container inner_container airgraph_cntr">
                <div className="row">
                    <div className="col-md-6 air_graph_box">
                        <div className="air_quality_box">
                            <h3>
                                <span style={{ fontSize: "15pt", color: "#78ae60" }}>{t("fitness.effects.cleanAir.title")}</span>
                            </h3>
                            <ul className="airquality_list">
                                <li>{t("fitness.effects.cleanAir.benefits.item1")}</li>
                                <li>{t("fitness.effects.cleanAir.benefits.item2")}</li>
                                <li>{t("fitness.effects.cleanAir.benefits.item3")}</li>
                                <li>{t("fitness.effects.cleanAir.benefits.item4")}</li>
                            </ul>
                        </div>
                        <span className="vs_text">{t("fitness.effects.vsText")}</span>
                    </div>
                    <div className="col-md-6 air_qualiity_right">
                        <div className="air_quality_box">
                            <h3>
                                <span style={{ fontSize: "15pt", color: "#e86868" }}>{t("fitness.effects.uncleanAir.title")}</span>
                            </h3>
                            <ul className="airquality_list red_list">
                                <li>{t("fitness.effects.uncleanAir.drawbacks.item1")}</li>
                                <li>{t("fitness.effects.uncleanAir.drawbacks.item2")}</li>
                                <li>{t("fitness.effects.uncleanAir.drawbacks.item3")}</li>
                                <li>{t("fitness.effects.uncleanAir.drawbacks.item4")}</li>
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
                                            1. What are the major pollutants that are present in a gym?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse1"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="heading1"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">
                                            Many pollutants can be present inside a typical gym area setting. CO2, TVOC, and dust particles
                                            are the main pollutants followed by noise, CO, airborne pathogens, temperature, etc.
                                        </div>
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
                                            2. What are the health impacts of the pollutants present inside the gym?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse2"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading2"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">
                                            Physical discomforts like headaches, nausea, dizziness, etc. among gym goers and staff.
                                        </div>
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
                                            3. What are some criteria that need to be kept in mind for a healthy and comfortable gyming
                                            experience?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse3"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading3"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">
                                            Ventilation rate, noise, comfort level, mold score, organic aerosols, etc. are some of the
                                            criteria.
                                        </div>
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
                                            4. Why is it necessary to have air quality monitoring solutions?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse4"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading4"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">
                                            To know the nature of pollutants and by how much are they present in a gym so that necessary
                                            actions can be taken.
                                        </div>
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
                                            5. How can I check the AQI of my gym using your device?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse5"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading5"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">
                                            Prana Air Monitors are WiFi enabled so you don’t need to set up a wire framework to extract and display the data. Simply connect the monitor to the dashboard through WiFi connectivity and view the real-time data on your screens.
                                        </div>
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
                                            6. Are any other parameters included in the monitors other than the air pollutants?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse6"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading6"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">
                                            Yes, you can monitor the temperature, noise, and humidity in an area.
                                        </div>
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
                                            7. Are there any additional benefits that come with the solutions?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse7"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading7"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">
                                            Customizable dashboard, 24*7 remote access to the data, get health tips, real-time and historical
                                            data analysis, QR code to scan and know the real-time AQI of that area, and many more.
                                        </div>
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
                                Our <span className="bold_text">Clientele</span>
                            </h2>
                            <p>We are honored to work with so many well-known companies.</p>
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
                                <h2>{t("fitness.contact.title")}</h2>
                                <p>{t("fitness.contact.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactForm pageName="Fitness Center Gym Page" />
            </div>

            {/* Industrial Applications */}
            <div className="container seperate_industrial_box">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                {t("fitness.industrialApplications.title")}{" "}
                                <span className="bold_text">{t("fitness.industrialApplications.highlight")}</span>
                            </h2>
                            <p>{t("fitness.industrialApplications.description")}</p>
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
