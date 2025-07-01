import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import { getServerTranslation } from "@/i18n/server"
import RestaurantsApplicationsCarousel from "@/Components/Pages/Restaurants/sliderquality"
import Link from "@/Components/TranslateLink"
import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
    const lang = params?.lang || "en";
    const slug = "air-quality-monitor"; // page-specific slug
    const { t } = await getServerTranslation("restaurants");
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
    const { t } = await getServerTranslation("restaurants")
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
    const restaurantProducts = [
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-squair-monitor-for-restaurant.jpg",
            imageAlt: "prana air squair monitor as the air quality solutions for restaurant or cafe",
            title: "Prana Air SQUAIR<br /> Air quality monitor",
            description: "SQUAIR monitor is a smart indoor air quality monitoring device that measures particulate matters & toxic gases of a restaurant or cafe.",
            features: [
                "Detects PM2.5, PM10, CO2, TVOC, Noise, Light (LUX), Temperature & humidity",
                "Mode of connectivity: WiFi, GSM, BMS",
                "Mobile & Smart TV App, web-dashboard"
            ],
            knowMoreLink: "https://www.pranaair.com/air-quality-monitor/squair-air-monitor/",
            hasRentOption: true
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-sensible-plus-monitor-for-restaurant.jpg",
            imageAlt: "prana air sensible+ air quality monitor for restaurants and cafe",
            title: "Prana Air Sensible+<br /> Air quality monitor",
            description: "This is a smart air quality monitor with a touch screen display that gives you more insightful data for a restaurant.",
            features: [
                "Detects PM2.5, PM10, CO2, TVOC, HCHO, Temperature, Humidity",
                "7 Inch LED Touch Screen Display",
                "5000 mAh Battery InBuilt",
                "WiFi Connectivity With Mobile App"
            ],
            knowMoreLink: "https://www.pranaair.com/air-quality-monitor/squair-air-monitor/",
            hasRentOption: true
        }
    ];
    return (
        <div>
            {/* Banner Section */}
            <div
                className="row school_banner_box"
                style={{
                    backgroundImage:
                        "url('https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-solutions-for-restaurant-businesses.jpg')",
                }}
            >
                <div className="col-md-6 banner_quality_box">
                    <div className="pocket_title_box school_aqi_box">
                        <h1>
                            {t("restaurantBanner.title")} <span className="bold_text">{t("restaurantBanner.highlight")}</span>
                        </h1>
                        <p>{t("restaurantBanner.description")}</p>
                        <ul className="rate_list">
                            {["kitchen", "cafe", "restaurant"].map((item) => (
                                <li key={item}>{t(`restaurantBanner.categories.${item}`)}</li>
                            ))}
                        </ul>
                        <a className="pocket_buy_btn" href="#get_in_touch">
                            {t("restaurantBanner.cta")}
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
                                {t("restaurantPollutants.title")}{" "}
                                <span className="bold_text">{t("restaurantPollutants.highlight")}</span>
                            </h2>
                            <p>{t("restaurantPollutants.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pollutants Features */}
            <div className="container pollution_cntr inner_container">
                <div className="row">
                    {["pm25", "co2", "tvoc", "co", "no2", "noise"].map((pollutant) => (
                        <div className="col-md-3" key={pollutant}>
                            <div className="feature_box">
                                <img
                                    src={`https://www.pranaair.com/wp-content/uploads/2022/08/${pollutant === "pm25"
                                        ? "pm2.5-parameter.png"
                                        : pollutant === "co2"
                                            ? "co2-gas-icon.png"
                                            : pollutant === "tvoc"
                                                ? "tvoc-parameter-icon.png"
                                                : pollutant === "co"
                                                    ? "co-icon.png"
                                                    : pollutant === "no2"
                                                        ? "no2-icon.png"
                                                        : "noise-icon.png"
                                        }`}
                                    alt={t(`restaurantPollutants.items.${pollutant}.imageAlt`)}
                                />
                                <div className="feature_wrap_box">
                                    <h2>{t(`restaurantPollutants.items.${pollutant}.title`)}</h2>
                                    <p>{t(`restaurantPollutants.items.${pollutant}.description`)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* School Image Box */}
            <div
                className="row school_img_box"
                style={{
                    backgroundImage:
                        "url('https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-problems-in-restaurants-and-cafes-scaled.jpg')",
                }}
            >
                <div className="col-md-12">
                    <div className="school_box_cntr">
                        <ul>
                            {["pm25", "co2", "noise", "no2"].map((pollutant, index) => (
                                <li className={`${["first", "second", "third", "fourth"][index]}_school_box`} key={pollutant}>
                                    <span className="school_icon_box">
                                        <img
                                            src={`https://www.pranaair.com/wp-content/uploads/2022/08/${pollutant === "pm25"
                                                ? "pm2.5-icon-2.png"
                                                : pollutant === "co2"
                                                    ? "co2-icon.png"
                                                    : pollutant === "noise"
                                                        ? "ozone-o3-icon.png"
                                                        : "no2-icon-for-restaurant.png"
                                                }`}
                                            alt={t(`restaurantImageBox.items.${pollutant}.imageAlt`)}
                                        />
                                    </span>
                                    <div className="schhol_text_box">
                                        <h3>{t(`restaurantImageBox.items.${pollutant}.title`)}</h3>
                                        <p>{t(`restaurantImageBox.items.${pollutant}.description`)}</p>
                                    </div>
                                </li>
                            ))}
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
                                {t("restaurantRisk.title")} <span className="bold_text">{t("restaurantRisk.highlight")}</span>
                            </h2>
                            <p>{t("restaurantRisk.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Risk Features */}
            <div className="container pollution_cntr inner_container">
                <div className="row">
                    {["respiratory", "staff", "chef", "customers"].map((risk) => (
                        <div className="col-md-3" key={risk}>
                            <div className="risk_box">
                                <img
                                    src={`https://www.pranaair.com/wp-content/uploads/2022/08/${risk === "respiratory"
                                        ? "respiratory-ill.png"
                                        : risk === "staff"
                                            ? "staff.png"
                                            : risk === "chef"
                                                ? "chef.png"
                                                : "customer.png"
                                        }`}
                                    alt={t(`restaurantRisk.items.${risk}.imageAlt`)}
                                />
                                <div className="feature_wrap_box">
                                    <h2>{t(`restaurantRisk.items.${risk}.title`)}</h2>
                                    <p>{t(`restaurantRisk.items.${risk}.description`)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Air Quality Solutions Section */}
            <div className="container quality_solution_section top_space_heading">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                {t("restaurantSolutions.title")} <span className="bold_text">{t("restaurantSolutions.highlight")}</span>
                            </h2>
                            <p>{t("restaurantSolutions.description")}</p>
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
                                {["monitors", "freshAir", "apiData"].map((tab, index) => (
                                    <li className="nav-item" role="presentation" key={tab}>
                                        <button
                                            className={`nav-link ${index === 0 ? "active" : ""}`}
                                            id={`${tab}-tab`}
                                            data-bs-toggle="tab"
                                            data-bs-target={`#${tab}`}
                                            type="button"
                                            role="tab"
                                            aria-controls={tab}
                                            aria-selected={index === 0 ? "true" : "false"}
                                        >
                                            {t(`restaurantSolutions.tabs.${tab}`)}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="tab-content" id="airQualityTabsContent">
                            <div className="tab-pane fade show active" id="monitors" role="tabpanel" aria-labelledby="monitors-tab">
                                <div className="tab-pane active inner_container">
                                    <div className="owl-slider">
                                        <RestaurantsApplicationsCarousel applications={restaurantProducts} />
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="freshAir" role="tabpanel" aria-labelledby="freshAir-tab">
                                <div className="slider_cntr">
                                    <div className="slider_img_box">
                                        <Link href={`${domain}/fresh-air-machine`}>
                                            <img
                                                style={{ width: "100%" }}
                                                src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-fresh-air-machine-for-iaq-solution.jpg"
                                                alt={t("restaurantSolutions.freshAir.imageAlt")}
                                            />
                                        </Link>
                                    </div>
                                    <div className="slider_details_box">
                                        <h3>
                                            {t("restaurantSolutions.freshAir.title")}
                                            <br /> {t("restaurantSolutions.freshAir.subtitle")}
                                        </h3>
                                        <span>{t("restaurantSolutions.freshAir.description")}</span>
                                        <ul className="airquality_list">
                                            {[1, 2, 3].map((num) => (
                                                <li key={num}>{t(`restaurantSolutions.freshAir.features.feature${num}`)}</li>
                                            ))}
                                        </ul>
                                        <Link href={`${domain}/fresh-air-machine`} className="knowmore_btn">
                                            {t("restaurantSolutions.knowMore")}
                                        </Link>
                                        <Link href={`${domain}/air-quality-monitor/rental-air-monitor`} className="rent_btn">
                                            {t("restaurantSolutions.lookingToRent")}
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="apiData" role="tabpanel" aria-labelledby="apiData-tab">
                                <div className="slider_cntr">
                                    <div className="slider_img_box">
                                        <img
                                            style={{ width: "100%" }}
                                            src="https://www.pranaair.com/wp-content/uploads/2022/08/aqi-api-data-for-institutes.jpg"
                                            alt={t("restaurantSolutions.apiData.imageAlt")}
                                        />
                                    </div>
                                    <div className="slider_details_box">
                                        <h3>
                                            {t("restaurantSolutions.apiData.title")}
                                            <br /> {t("restaurantSolutions.apiData.subtitle")}
                                        </h3>
                                        <span>{t("restaurantSolutions.apiData.description")}</span>
                                        <ul className="airquality_list">
                                            {[1, 2, 3].map((num) => (
                                                <li key={num}>{t(`restaurantSolutions.apiData.features.feature${num}`)}</li>
                                            ))}
                                        </ul>
                                        <br />
                                        <a href="#get_in_touch" className="knowmore_btn">
                                            {t("restaurantSolutions.knowMore")}
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
                                {t("restaurantFreemium.title")} <span className="bold_text">{t("restaurantFreemium.highlight")}</span>
                            </h2>
                            <p>{t("restaurantFreemium.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container inner_container">
                <div className="row">
                    {["tvApp", "customApp", "qrCode"].map((service) => (
                        <div className="col-md-4" key={service}>
                            <div className="app_service_box">
                                <img
                                    src={`https://www.pranaair.com/wp-content/uploads/2022/08/restaurant-${service === "tvApp"
                                        ? "tv-dashboard-app.jpg"
                                        : service === "customApp"
                                            ? "aqi-customized-dashboard-app.jpg"
                                            : "aqi-qr-code-scan.jpg"
                                        }`}
                                    alt={t(`restaurantFreemium.services.${service}.imageAlt`)}
                                />
                                <h4>{t(`restaurantFreemium.services.${service}.title`)}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Effects of Air Pollution */}
            <div className="container top_space_heading">
                <div className="row">
                    <div className="col-md-12">
                        <div className="introducing_box sub_title_box text-center">
                            <h2 className="title_heading">
                                {t("restaurantComparison.title")} - {t("restaurantComparison.highlight")}
                            </h2>
                            <p>{t("restaurantComparison.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container inner_container airgraph_cntr">
                <div className="row">
                    <div className="col-md-6 air_graph_box">
                        <div className="air_quality_box">
                            <h3>
                                <span style={{ fontSize: "15pt", color: "#78ae60" }}> {t("restaurantComparison.clean.title")}</span>
                            </h3>
                            <ul className="airquality_list">
                                {[1, 2, 3].map((num) => (
                                    <li key={num}>{t(`restaurantComparison.clean.benefits.benefit${num}`)}</li>
                                ))}
                            </ul>
                        </div>
                        <span className="vs_text">VS</span>
                    </div>
                    <div className="col-md-6 air_qualiity_right">
                        <div className="air_quality_box">
                            <h3>
                                <span style={{ fontSize: "15pt", color: "#e86868" }}> {t("restaurantComparison.unclean.title")}</span>
                            </h3>
                            <ul className="airquality_list red_list">
                                {[1, 2, 3].map((num) => (
                                    <li key={num}>{t(`restaurantComparison.unclean.drawbacks.drawback${num}`)}</li>
                                ))}
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
                                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                    <div className="accordion-item" key={num}>
                                        <h2 className="accordion-header">
                                            <button
                                                className={`accordion-button ${num === 1 ? "" : "collapsed"}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#faq${num}`}
                                                aria-expanded={num === 1 ? "true" : "false"}
                                            >
                                                {t(`restaurantFaq.questions.q${num}`)}
                                            </button>
                                        </h2>
                                        <div
                                            id={`faq${num}`}
                                            className={`accordion-collapse collapse ${num === 1 ? "show" : ""}`}
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body faq-tab-para">{t(`restaurantFaq.answers.a${num}`)}</div>
                                        </div>
                                    </div>
                                ))}
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
                            <p>{t("restaurantClientele.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container client_logo_section inner_container">
                <div className="row">
                    {["morgan", "ola", "microsoft", "iit"].map((client) => (
                        <div className="col-md-3" key={client}>
                            <img
                                src={`https://www.pranaair.com/wp-content/uploads/2022/08/${client === "morgan"
                                    ? "MORGAN-STANLEY.png"
                                    : client === "ola"
                                        ? "OLA.png"
                                        : client === "microsoft"
                                            ? "MICROSOFT.png"
                                            : "IIT-BHU.png"
                                    }`}
                                className="img-responsive"
                                alt={t(`restaurantClientele.clients.${client}.alt`)}
                            />
                        </div>
                    ))}
                </div>
                <div className="row">
                    {["renault", "tata", "csir", "mahindra"].map((client) => (
                        <div className="col-md-3" key={client}>
                            <img
                                src={`https://www.pranaair.com/wp-content/uploads/2022/08/${client === "renault"
                                    ? "RENAULT-NISSAN.png"
                                    : client === "tata"
                                        ? "TATA.png"
                                        : client === "csir"
                                            ? "CSIR.png"
                                            : "MAHINDRA.png"
                                    }`}
                                className="img-responsive"
                                alt={t(`restaurantClientele.clients.${client}.alt`)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Section */}
            <div className=" airqulality_contact_section inner_container" id="get_in_touch">
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
                <ContactForm pageName="Restaurants Monitor Page" />
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
          <script>
            document.addEventListener('DOMContentLoaded', function() {
              // Initialize school box interactions
              const schoolBoxItems = document.querySelectorAll(".school_box_cntr li");
              schoolBoxItems.forEach((item) => {
                item.addEventListener("click", function () {
                  const textBox = this.querySelector(".schhol_text_box");
                  if (textBox) {
                    if (textBox.style.display === "none" || textBox.style.display === "") {
                      document.querySelectorAll(".schhol_text_box").forEach((box) => {
                        box.style.display = "none";
                      });
                      textBox.style.display = "inline-block";
                    } else {
                      textBox.style.display = "none";
                    }
                  }
                });
              });
            });
          </script>
        `,
                }}
            />
        </div>
    )
}
