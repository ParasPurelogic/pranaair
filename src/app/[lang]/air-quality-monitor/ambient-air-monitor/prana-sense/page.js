import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import ApplicationsSlider from "@/Components/Pages/PranaSensMonitor/applications-slider"
import ProductSlider from "@/Components/Pages/PranaSensMonitor/product-slider"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain } from "@/config"

// ✅ SEO Metadata
export async function generateMetadata() {
    const { t } = await getServerTranslation("prana-sense");
    const title = t("meta.title");
    const description = t("meta.description");
    const image = t("meta.image") || "https://www.pranaair.com/images/air-drone.jpg";
    const url = `https://www.pranaair.com/air-drone`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
            languages: {
                en: "https://www.pranaair.com/air-drone",
                hi: "https://www.pranaair.com/hi/air-drone",
            }
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "Prana Air",
            type: "website",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: "Air Drone - Prana Air"
                }
            ]
        }
    };
}
export default async function PranaSense() {
    const { t } = await getServerTranslation("prana-sense")

    const applications = [
        {
            id: 1,
            image: "https://www.pranaair.com/wp-content/uploads/2024/09/construction-site.webp",
            title: t("applications.items.1.title"),
            alt: t("applications.items.1.alt"),
        },
        {
            id: 2,
            image: "https://www.pranaair.com/wp-content/uploads/2024/09/Sea-Ports.webp",
            title: t("applications.items.2.title"),
            alt: t("applications.items.2.alt"),
        },
        {
            id: 3,
            image: "https://www.pranaair.com/wp-content/uploads/2024/09/Schools-and-Universities.webp",
            title: t("applications.items.3.title"),
            alt: t("applications.items.3.alt"),
        },
        {
            id: 4,
            image: "https://www.pranaair.com/wp-content/uploads/2024/09/Railways-and-Metros.webp",
            title: t("applications.items.4.title"),
            alt: t("applications.items.4.alt"),
        },
        {
            id: 5,
            image: "https://www.pranaair.com/wp-content/uploads/2024/09/Roads-And-Highways.webp",
            title: t("applications.items.5.title"),
            alt: t("applications.items.5.alt"),
        },
        {
            id: 6,
            image: "https://www.pranaair.com/wp-content/uploads/2024/09/Industries.webp",
            title: t("applications.items.6.title"),
            alt: t("applications.items.6.alt"),
        },
        {
            id: 7,
            image: "https://www.pranaair.com/wp-content/uploads/2024/09/Parking-Lots.webp",
            title: t("applications.items.7.title"),
            alt: t("applications.items.7.alt"),
        },
    ];
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hero-text">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/prana-air-logo.png"
                                    alt={t("hero.logo.alt") || "prana"}
                                />
                                <h1>{t("hero.title") || "Prana Sense Outdoor Air Quality Monitor"}</h1>
                                <p>
                                    {t("hero.description") ||
                                        "Revolutionizing Air Quality Monitoring with cutting-edge technology for better accuracy and reliability with seamless connectivity and comprehensive data access."}
                                </p>
                                <a href="#get-in-touch">
                                    {t("hero.contactButton") || "Contact Us"}{" "}
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/09/download-btn.png"
                                        alt={t("hero.buttonIcon.alt") || "button icon"}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="why-choose">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="why-choose-heading">
                                <h2>{t("whyChoose.featuresTitle") || "Features"}</h2>
                                <h3>{t("whyChoose.title") || "Why Choose Prana Sense?"}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="why-choose-prana">
                                <ul>
                                    <li>
                                        <h3>
                                            {t("whyChoose.features.1.title") || "Next-Gen Sensor Technology"}{" "}
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/Next-Gen-Sensor-Technology.webp"
                                                alt={t("whyChoose.features.1.alt") || "high technology air quality sensors"}
                                            />
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            {t("whyChoose.features.2.title") || "Smart Calibration"}{" "}
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/Smart-Calibration.webp"
                                                alt={t("whyChoose.features.2.alt") || "smart calibration for the sensors"}
                                            />
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            {t("whyChoose.features.3.title") || "Affordable Excellence"}{" "}
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/Affordable-Excellence.webp"
                                                alt={t("whyChoose.features.3.alt") || "easy affordable price"}
                                            />
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            {t("whyChoose.features.4.title") || "Always Connected"}{" "}
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/Always-Connected.webp"
                                                alt={t("whyChoose.features.4.alt") || "hassle free data connectivity"}
                                            />
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            {t("whyChoose.features.5.title") || "Real-time insights"}{" "}
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/Real-time-insights.webp"
                                                alt={t("whyChoose.features.5.alt") || "real-time air quality data insights"}
                                            />
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            {t("whyChoose.features.6.title") || "Unbeatable Accuracy"}{" "}
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/Unbeatable-Accuracy.webp"
                                                alt={t("whyChoose.features.6.alt") || "highly accurate air quality data"}
                                            />
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            {t("whyChoose.features.7.title") || "Seamless Connectivity"}{" "}
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/Prana-Sense-Seamless-Connectivity.webp"
                                                alt={t("whyChoose.features.7.alt") || "seamless data connectivity wifi and GSM"}
                                            />
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            {t("whyChoose.features.8.title") || "Cost-Effective Maintenance"}{" "}
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/Cost-Effective-Maintenances.webp"
                                                alt={t("whyChoose.features.8.alt") || "cost effective maintenance"}
                                            />
                                        </h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gas Monitor Section */}
            <section className="gas-monitor-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="gas-monitor-heading">
                                <h2>
                                    {t("gasMonitor.title") || "Precision Pollutant Detection:"}{" "}
                                    <strong>{t("gasMonitor.subtitle") || "Outdoor Air Quality Monitoring"}</strong>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="pollutant-gas-monitor">
                                <ul>
                                    <li>
                                        <h3>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/10/PM.png"
                                                alt={t("gasMonitor.pollutants.pm.alt") || "sensor of Particular Matter PM2.5, PM10, PM1"}
                                            />{" "}
                                            {t("gasMonitor.pollutants.pm.title") || "Particular Matter (PM1,2.5 & 10)"}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/10/Temp.png"
                                                alt={t("gasMonitor.pollutants.temp.alt") || "sensor of Temperature and Humidity"}
                                            />{" "}
                                            {t("gasMonitor.pollutants.temp.title") || "Temperature & Humidity"}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/10/noise-icon.png"
                                                alt={t("gasMonitor.pollutants.noise.alt") || "sensor of noise monitoring"}
                                            />{" "}
                                            {t("gasMonitor.pollutants.noise.title") || "Noise Monitoring"}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/Sulfur-Dioxide.png"
                                                alt={t("gasMonitor.pollutants.so2.alt") || "sensor of SO2 gas"}
                                            />{" "}
                                            {t("gasMonitor.pollutants.so2.title") || "Sulfur Dioxide (SO2)"}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/Nitrogen-Dioxide.png"
                                                alt={t("gasMonitor.pollutants.no2.alt") || "sensor of NO2 gas"}
                                            />{" "}
                                            {t("gasMonitor.pollutants.no2.title") || "Nitrogen Dioxide (NO2)"}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/Ozone.png"
                                                alt={t("gasMonitor.pollutants.o3.alt") || "sensor of Ozone gas"}
                                            />{" "}
                                            {t("gasMonitor.pollutants.o3.title") || "Ozone (O3)"}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/Hydrogen-Sulfide.png"
                                                alt={t("gasMonitor.pollutants.h2s.alt") || "sensor of H2S gas"}
                                            />{" "}
                                            {t("gasMonitor.pollutants.h2s.title") || "Hydrogen Sulfide (H2S)"}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/NH3.png"
                                                alt={t("gasMonitor.pollutants.nh3.alt") || "sensor of Ammonia NH3"}
                                            />{" "}
                                            {t("gasMonitor.pollutants.nh3.title") || "Ammonia (NH3)"}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/CO.png"
                                                alt={t("gasMonitor.pollutants.co.alt") || "sensor of CO gas"}
                                            />{" "}
                                            {t("gasMonitor.pollutants.co.title") || "Carbon Monoxide (CO)"}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/CH4.png"
                                                alt={t("gasMonitor.pollutants.ch4.alt") || "sensor of Methane CH4"}
                                            />{" "}
                                            {t("gasMonitor.pollutants.ch4.title") || "Methane (CH4)"}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/VOC.png"
                                                alt={t("gasMonitor.pollutants.tvoc.alt") || "sensor of TVOC odor monitoring"}
                                            />{" "}
                                            {t("gasMonitor.pollutants.tvoc.title") || "TVOC Monitoring"}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/CO2.png"
                                                alt={t("gasMonitor.pollutants.co2.alt") || "sensor of CO2 gas"}
                                            />{" "}
                                            {t("gasMonitor.pollutants.co2.title") || "CO₂ Sensing"}
                                        </h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interruption Section */}
            <section className="interruption-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="interruption-txt">
                                <h2>{t("powerBackup.title") || "Power to Last without interruption"}</h2>
                                <p>
                                    {t("powerBackup.description") ||
                                        "Get mega power backup that keep your air quality monitoring working for days."}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="battery-txt">
                                <span className="battry">{t("powerBackup.batteryLabel") || "Battery"}</span>
                                <h3>
                                    {t("powerBackup.batteryCapacity") || "40,000"}{" "}
                                    <span className="mah">{t("powerBackup.mah") || "mAh"}</span>
                                </h3>
                            </div>
                            <div className="battery-txt backup-txt">
                                <span className="battry">{t("powerBackup.backupLabel") || "Battery Backup"}</span>
                                <h3>
                                    {t("powerBackup.backupHours") || "96"}{" "}
                                    <span className="mah">{t("powerBackup.hours") || "Hours"}</span>
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="power-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-sense-battery-backup.webp"
                                    alt={
                                        t("powerBackup.imageAlt") ||
                                        "prana sense ambient air quality monitoring device with inbuilt battery"
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solar Innovation */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="solar-heading">
                            <h2>{t("solarInnovation.title") || "Solar Innovation"}</h2>
                            <h3>{t("solarInnovation.subtitle") || "power-up your air quality monitor with sunlight"}</h3>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="solar-txt">
                            <p>
                                {t("solarInnovation.description") ||
                                    "Solar-Powered Reliability for continuous operation without power supply and Eco-friendly monitoring."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="solar-innovation-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="solar-panel-txt">
                                <ul className="solar-box">
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/Prana-sense.png"
                                            alt="Prana Sense ambient air quality monitor with solar panel"
                                        />
                                    </li>
                                    <li>
                                        <h4>{t("solarInnovation.solarPanel.title") || "Solar Panel"}</h4>
                                        <h5>
                                            {t("solarInnovation.solarPanel.power") || "30"}{" "}
                                            <span className="watt">{t("solarInnovation.solarPanel.unit") || "Watt"}</span>
                                        </h5>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="no-addi-box">
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/no-additional-controller.png"
                                            alt="Prana Sense ambient air quality monitor with No additional controllers"
                                        />
                                    </li>
                                    <li>
                                        <h4>
                                            {t("solarInnovation.noController.title") || "No additional controllers or connectors Needed"}
                                        </h4>
                                        <p>
                                            {t("solarInnovation.noController.description") ||
                                                "Direct connect solar panel to the air quality monitor without additional controllers or connectors."}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>

            {/* Waterproof Section */}
            <section className="waterproof-resistabnt-sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <video id="myVideo" autoPlay loop muted width="300" height="150">
                                <source
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/all-weather-warrior-video.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                    <div className="row text-sec">
                        <div className="col-md-6">
                            <div className="waterproof-resistant-txt">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/IP68.png"
                                    alt={t("waterproof.ipRating.alt") || "Prana Sense is a weatherproof ambient air quality monitor"}
                                />
                                <h3>{t("waterproof.title") || "All-Weather Warrior"}</h3>
                                <p>
                                    {t("waterproof.description") ||
                                        "Built to Last that stands in every Weather condition and ensures reliable performance in rain, heatwaves, dust etc."}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="all-weather-monitor-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/Weather-resistant-ambient-air-quality-monitor.webp"
                                    alt={t("waterproof.image.alt") || "Weather resistant ambient air quality monitor"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Weather Data */}
            <section className="weather-data-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="weaher-data">
                                <h2>{t("weatherData.title") || "Weather Data"}</h2>
                                <p>{t("weatherData.description") || "Not just an air quality monitor: Weather Monitoring"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="weather-monitor-headimg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="weather-data-para">
                                <p>
                                    <strong>{t("weatherMonitor.overview.strong") || "Get a complete Environmental overview:"}</strong>{" "}
                                    {t("weatherMonitor.overview.text") ||
                                        "Optional weather station for real-time data weather monitoring capabilities."}{" "}
                                    <Link href={`${domain}/air-quality-monitor/weather-station`}>
                                        <strong>{t("weatherMonitor.overview.link") || "Weather Station"}</strong>
                                    </Link>
                                </p>
                            </div>
                            <div className="card-box">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/Wind-Gust.webp"
                                            alt={t("weatherMonitor.parameters.windGust.alt") || "measuring wind gust parameter"}
                                        />
                                    </li>
                                    <li className="mg-tp">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/Solar-Irradiance.webp"
                                            alt={t("weatherMonitor.parameters.solarIrradiance.alt") || "measuring solar irradiance"}
                                        />
                                    </li>
                                    <li className="mg-tp">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/Wind-Direction.webp"
                                            alt={t("weatherMonitor.parameters.windDirection.alt") || "measuring wind direction"}
                                        />
                                    </li>
                                </ul>
                                <ul>
                                    <li className="speed">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/Wind-Speed-Direction.webp"
                                            alt={t("weatherMonitor.parameters.windSpeedDirection.alt") || "measuring wind speed direction"}
                                        />
                                    </li>
                                    <li className="chart">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/Wind-Rose-Chart.webp"
                                            alt={t("weatherMonitor.parameters.windRoseChart.alt") || "wind rose chart"}
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/UV-Index.webp"
                                            alt={t("weatherMonitor.parameters.uvIndex.alt") || "measuring UV index"}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="weather-data-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/air-quality-monitor-with-weather-station.webp"
                                    alt={
                                        t("weatherMonitor.image.alt") ||
                                        "Prana Sense ambient air quality monitor with weather station monitoring air quality and weather data"
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Smart Features */}
            <section className="smart-feature">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="innovation-heading">
                                <h2>{t("smartFeatures.heading") || "Innovations"}</h2>
                                <h3>{t("smartFeatures.subheading") || "Smart Features for Seamless Operation"}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mob-row">
                        <div className="col-md-4">
                            <div className="smart-feature-box">
                                <div className="smart-feature-txt">
                                    <h3 style={{ color: "#263d4f" }}>{t("smartFeatures.gps.title") || "Pinpoint Precision"}</h3>
                                    <p style={{ color: "#263d4f" }}>
                                        {t("smartFeatures.gps.description") || "Integrated GPS for exact location tracking"}
                                    </p>
                                </div>
                                <div className="gps">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/09/Pinpoint-Precision.webp"
                                        alt={t("smartFeatures.gps.imageAlt") || "Prana Sense with GPS integration to locate exact location"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="smart-feature-box-display">
                                <div className="smart-feature-txt">
                                    <h3>{t("smartFeatures.display.title") || "Crystal Clear Display"}</h3>
                                    <p>
                                        {t("smartFeatures.display.description") || "3.5-inch monochrome screen for easy data visualisation"}
                                    </p>
                                </div>
                                <div className="clear-display">
                                    <h4>{t("smartFeatures.display.size") || "3.5"}</h4>
                                    <span className="display">{t("smartFeatures.display.label") || "Display"}</span>
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/09/Crystal-Clear-Display.webp"
                                        alt={t("smartFeatures.display.imageAlt") || "air quality data display on clear big screen"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="smart-feature-data">
                                <div className="smart-feature-txt">
                                    <h3>{t("smartFeatures.storage.title") || "Onboard Data Storage"}</h3>
                                    <p>{t("smartFeatures.storage.description") || "SD card support for secure, local data logging"}</p>
                                </div>
                                <div className="data-storage">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/09/Onboard-Data-Storage.webp"
                                        alt={t("smartFeatures.storage.imageAlt") || "onboard data storage on micro SD card"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Connectivity Section */}
            <section className="connectivety-sec">
                <div className="container">
                    <div className="row mob-flex">
                        <div className="col-md-6">
                            <div className="stay-monitor-img">
                                <ul>
                                    <li className="wifi">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/Wi-Fi.png"
                                            alt={t("connectivity.options.wifi.imageAlt") || "wifi connectivity on Prana Sense"}
                                        />
                                        {t("connectivity.options.wifi.label") || "Wi-Fi"}
                                    </li>
                                </ul>
                                <div className="connect-monitor">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/09/Anytime-connect-prana-sense-monitor.webp"
                                        alt={
                                            t("connectivity.mainImage.alt") ||
                                            "Easy data connectivity of Prana Sense Outdoor air quality monitor"
                                        }
                                    />
                                </div>
                                <ul>
                                    <li className="rs-mod">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/RS485.png"
                                            alt={t("connectivity.options.rs485.imageAlt") || "RS485 connectivity on Prana Sense"}
                                        />
                                        {t("connectivity.options.rs485.label") || "RS485"}
                                        <span className="rs">{t("connectivity.options.rs485.modbus") || "(MODBUS)"}</span>
                                    </li>
                                    <li className="gsm">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/GSM.png"
                                            alt={t("connectivity.options.gsm.imageAlt") || "GSM connectivity on Prana Sense"}
                                        />
                                        {t("connectivity.options.gsm.label") || "GSM"}
                                    </li>
                                    <li className="lora">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/LoRa.png"
                                            alt={t("connectivity.options.lora.imageAlt") || "LoRa connectivity on Prana Sense"}
                                        />
                                        {t("connectivity.options.lora.label") || "LoRa"}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="connect-anywhere-txt">
                                <h2>{t("connectivity.title") || "Connectivity"}</h2>
                                <h3>{t("connectivity.subtitle") || "Stay Connected Anytime, Anywhere"}</h3>
                                <p>
                                    {t("connectivity.description") ||
                                        "Always stay connected and informed with Multi-Mode Connectivity: RS485, WiFi, LoRa, and 4G options in your Prana Sense."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced Technology */}
            <section className="adv-monitor">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="innovation-heading adv-tec-heading">
                                <h2>{t("advancedTech.heading") || "Prana Sense"}</h2>
                                <h3>{t("advancedTech.subheading") || "Air Quality Monitoring with Advanced Technology"}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="power-box">
                                <h3>{t("advancedTech.powerSource.title") || "Power Source"}</h3>
                                <ul className="colar">
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/solar.png"
                                            alt={
                                                t("advancedTech.powerSource.solar.imageAlt") ||
                                                "solar power source in Prana Sense ambient air quality monitor"
                                            }
                                        />
                                        {t("advancedTech.powerSource.solar.label") || "Solar"}
                                    </li>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/ac.png"
                                            alt={
                                                t("advancedTech.powerSource.dc.imageAlt") ||
                                                "DC power source in Prana Sense ambient air quality monitor"
                                            }
                                        />
                                        {t("advancedTech.powerSource.dc.label") || "D/C"}
                                    </li>
                                </ul>
                                <div className="data-ofline">
                                    <div className="data-ofline-img">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/air-quality-monitor.webp"
                                            alt={t("advancedTech.image.alt") || "Prana Sense Air Quality Monitoring with Advanced Technology"}
                                        />
                                    </div>
                                    <div className="data-ofline-txt">
                                        <h3>{t("advancedTech.offlineStorage.title") || "Offline Data Storage"}</h3>
                                        <ul>
                                            <li>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/sd-card.png"
                                                    alt={
                                                        t("advancedTech.offlineStorage.sdCard.imageAlt") ||
                                                        "data storage in micro SD card in Prana Sense ambient air quality monitor"
                                                    }
                                                />
                                                {t("advancedTech.offlineStorage.sdCard.label") || "SD Card"}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="connectivity-heading">
                                <h3>{t("advancedTech.connectivity.title") || "Connectivity"}</h3>
                                <div className="connectivity-ofline">
                                    <div className="connectivity-img">
                                        <ul>
                                            <li>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/Wi-Fi.png"
                                                    alt={t("advancedTech.connectivity.wifi.imageAlt") || "wifi connectivity"}
                                                />
                                                {t("advancedTech.connectivity.wifi.label") || "Wi-Fi"}
                                            </li>
                                            <li>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/GSM.png"
                                                    alt={t("advancedTech.connectivity.gsm.imageAlt") || "GSM connectivity"}
                                                />
                                                {t("advancedTech.connectivity.gsm.label") || "GSM"}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="connectivity-txt">
                                        <h3>{t("advancedTech.cloudStorage.title") || "Cloud Storage"}</h3>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/09/cloud-storage.png"
                                            alt={t("advancedTech.cloudStorage.imageAlt") || "cloud data storage"}
                                        />
                                    </div>
                                </div>
                                <div className="lora-mo">
                                    <span className="or">{t("advancedTech.connectivity.or") || "Or"}</span>
                                    <ul>
                                        <li>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/LoRa.png"
                                                alt={t("advancedTech.connectivity.lora.imageAlt") || "LoRa connectivity"}
                                            />
                                            {t("advancedTech.connectivity.lora.label") || "LoRa"}
                                        </li>
                                        <li>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/09/RS485.png"
                                                alt={t("advancedTech.connectivity.rs485.imageAlt") || "RS485 connectivity"}
                                            />
                                            {t("advancedTech.connectivity.rs485.label") || "RS485"}
                                            <span className="rs-mod">{t("advancedTech.connectivity.rs485.modbus") || "(MODBUS)"}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <ul className="app">
                                <li>
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/09/aqi-mob-app.png"
                                        alt={t("advancedTech.applications.mobile.imageAlt") || "data connectivity on AQI mobile app"}
                                    />
                                    <h4>{t("advancedTech.applications.mobile.title") || "AQI Mobile Application"}</h4>
                                </li>
                                <li>
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/09/aqi-web-dash.png"
                                        alt={
                                            t("advancedTech.applications.web.imageAlt") ||
                                            "air quality data accessibility on AQI web-dashboard"
                                        }
                                    />
                                    <h4>{t("advancedTech.applications.web.title") || "AQI Web Dashboard"}</h4>
                                </li>
                                <li>
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/09/aqi-tv-app.png"
                                        alt={t("advancedTech.applications.tv.imageAlt") || "air quality data accessibility on AQI TV app"}
                                    />
                                    <h4>{t("advancedTech.applications.tv.title") || "AQI TV Application"}</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Noise Monitoring */}
            <section className="noise-monitor">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div id="noise-heading">
                                <h2>{t("noiseMonitor.title") || "Noise Monitoring"}</h2>
                                <h3>{t("noiseMonitor.subtitle") || "Hear the difference with Prana Sense"}</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="noise-para">
                                <p>
                                    {t("noiseMonitor.description") ||
                                        "Prana Sense Monitor noise levels from 30 to 130 dB with 1 dB accuracy, ensuring precise acoustic measurements."}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="monitor-noise-box">
                                <li>
                                    <h5>{t("noiseMonitor.range.label") || "Monitor noise levels from"}</h5>
                                    <h6>{t("noiseMonitor.range.value") || "30 - 130 dB"}</h6>
                                </li>
                                <li>
                                    <h5>{t("noiseMonitor.accuracy.label") || "Accuracy"}</h5>
                                    <h6>{t("noiseMonitor.accuracy.value") || "1 dB"}</h6>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="applications">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="app-heading">
                                <h2>{t("applications.heading.title") || "Applications"}</h2>
                                <h3>{t("applications.heading.subtitle") || "Versatility in Every Application"}</h3>
                                <p>
                                    {t("applications.heading.description") ||
                                        "Monitor air quality with Prana Sense in diverse environments and needs."}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <ApplicationsSlider applications={applications} />
                </div>
            </section>


            {/* Monitor Wall */}
            <section id="monitor-wall">
                <div className="wall-monitor-img">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/10/monitor-at-wall-with-apps-data.webp"
                        alt="Prana Sense ambient air quality monitor installed outside a building and data accessing on mobile app"
                    />
                </div>
            </section>

            {/* Data Accessibility Tab */}
            <section className="aqi-data-tab-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tab-heading">
                                <h2>{t("dataAccessibility.title") || "Seamless accessibility"}</h2>
                                <h3>{t("dataAccessibility.subtitle") || "Air Quality Data at Your Fingertips"}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row tab-inner">
                        <div className="col-12">
                            <div className="tab-section">
                                <ul className="nav nav-tabs justify-content-center" id="accessibilityTabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="mobile-app-tab-btn"
                                            data-bs-toggle="tab"
                                            data-bs-target="#mobile-app-tab"
                                            type="button"
                                            role="tab"
                                            aria-controls="mobile-app-tab"
                                            aria-selected="true"
                                        >
                                            {t("dataAccessibility.tabs.mobileApp.tabLabel") || "Mobile App"}
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="web-dashboard-tab-btn"
                                            data-bs-toggle="tab"
                                            data-bs-target="#web-dashboard-tab"
                                            type="button"
                                            role="tab"
                                            aria-controls="web-dashboard-tab"
                                            aria-selected="false"
                                        >
                                            {t("dataAccessibility.tabs.webDashboard.tabLabel") || "Web Dashboard"}
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="tv-application-tab-btn"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tv-application-tab"
                                            type="button"
                                            role="tab"
                                            aria-controls="tv-application-tab"
                                            aria-selected="false"
                                        >
                                            {t("dataAccessibility.tabs.tvApplication.tabLabel") || "TV Application"}
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="accessibilityTabsContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="mobile-app-tab"
                                        role="tabpanel"
                                        aria-labelledby="mobile-app-tab-btn"
                                    >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="tab-txt">
                                                    <h3>{t("dataAccessibility.tabs.mobileApp.title") || "See the data on your smartphone"}</h3>
                                                    <p>
                                                        {t("dataAccessibility.tabs.mobileApp.description") ||
                                                            "Get Prana Senses real-time environmental insights right in your pocket for convenient monitoring and peace of mind."}
                                                    </p>
                                                    <div className="connect-btn-box">
                                                        <a href="https://apps.apple.com/tt/app/aqi/id1439684571" className="iso-btn">
                                                            <ul className="seamless-connect-btn">
                                                                <li>
                                                                    <img
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/07/app-store.png"
                                                                        alt={t("dataAccessibility.tabs.mobileApp.appStore.imageAlt") || "ios app logo"}
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <span className="btn-txt-small">
                                                                        {t("dataAccessibility.tabs.mobileApp.appStore.smallText") || "Download on the"}
                                                                    </span>
                                                                    <br />
                                                                    <span className="btan-txt">
                                                                        {t("dataAccessibility.tabs.mobileApp.appStore.largeText") || "App Store"}
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </a>
                                                        <a
                                                            href="https://play.google.com/store/apps/details?id=com.aqi.data"
                                                            className="play-store-btn"
                                                        >
                                                            <ul className="seamless-connect-btn">
                                                                <li>
                                                                    <img
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/07/google-play.png"
                                                                        alt={t("dataAccessibility.tabs.mobileApp.googlePlay.imageAlt") || "android app"}
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <span className="btn-txt-small">
                                                                        {t("dataAccessibility.tabs.mobileApp.googlePlay.smallText") || "Get it on"}
                                                                    </span>
                                                                    <br />
                                                                    <span className="btan-txt">
                                                                        {t("dataAccessibility.tabs.mobileApp.googlePlay.largeText") || "Google Play"}
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="tab-img smart-phn">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/09/air-quality-data-at-your-smartphone.webp"
                                                        alt={
                                                            t("dataAccessibility.tabs.mobileApp.image.alt") ||
                                                            "insightful air quality data accessibility on AQI mobile app"
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="web-dashboard-tab"
                                        role="tabpanel"
                                        aria-labelledby="web-dashboard-tab-btn"
                                    >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="tab-txt">
                                                    <h3>
                                                        {t("dataAccessibility.tabs.webDashboard.title") || "Air Quality Data on Web Dashboard"}
                                                    </h3>
                                                    <p>
                                                        {t("dataAccessibility.tabs.webDashboard.description") ||
                                                            "Monitor real-time Prana Senses data on your laptop anytime anywhere with the web-dashboard data accessibility feature."}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="tab-img web-img">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/08/aqi-web-dashboard.png"
                                                        alt={
                                                            t("dataAccessibility.tabs.webDashboard.image.alt") ||
                                                            "more details air quality data insights on AQI web-dashboard"
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="tv-application-tab"
                                        role="tabpanel"
                                        aria-labelledby="tv-application-tab-btn"
                                    >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="tab-txt">
                                                    <h3>{t("dataAccessibility.tabs.tvApplication.title") || "See the data on your Smart TV"}</h3>
                                                    <p>
                                                        {t("dataAccessibility.tabs.tvApplication.description") ||
                                                            "Get real-time environmental insights of Prana Sense on your smart TV to ensure continuous monitoring."}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="tab-img tv-img">
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2024/07/Tv-connectivity.png"
                                                        alt={
                                                            t("dataAccessibility.tabs.tvApplication.image.alt") || "air quality data on AQI TV app"
                                                        }
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
            </section>

            {/* Sensor Innovation */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sensor-heading">
                            <h2>{t("sensorInnovation.title") || "Sensor innovation"}</h2>
                            <h3>
                                <strong>{t("sensorInnovation.strong1") || "Double"}</strong>{" "}
                                {t("sensorInnovation.middle") || "the Sensors,"}{" "}
                                <strong>{t("sensorInnovation.strong2") || "Double"}</strong>{" "}
                                {t("sensorInnovation.end") || "the Security"}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <section className="semsor-inovation">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="sensor-para">
                                <p>
                                    {t("sensorInnovation.paragraph1") || "The advanced technology of"}{" "}
                                    <strong>{t("sensorInnovation.dualSensors") || "dual sensors"}</strong>{" "}
                                    {t("sensorInnovation.paragraph1End") || "in our monitors safeguards against possible sensor failure."}
                                </p>
                                <p>
                                    {t("sensorInnovation.paragraph2Start") || "Also"}{" "}
                                    <strong>
                                        {t("sensorInnovation.paragraph2Strong") || "ensures continuous monitoring with zero downtime"}
                                    </strong>
                                    .{" "}
                                    {t("sensorInnovation.paragraph2End") ||
                                        "It offers a faster response time in any discrepancies and is also a reliable option to tackle the situation."}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="sensor-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/double-sensor-air-quality-monitor.webp"
                                    alt={
                                        t("sensorInnovation.image.alt") ||
                                        "highly accurate and advanced air quality sensors in Prana Sense Monitor"
                                    }
                                />
                                <ul>
                                    <li>
                                        <span className="green">1</span>
                                        {t("sensorInnovation.primarySensor") || "Primary sensor"}
                                    </li>
                                    <li>
                                        <span className="yellow">1</span>
                                        {t("sensorInnovation.reserveSensor") || "Reserve sensor"}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sensor Data */}
            <section className="sensor-data">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="sensor-data-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/Sensor-Data-Aligned.webp"
                                    alt={t("sensorData.scenario1.image.alt") || "chart showing air quality sensor Data Aligned"}
                                />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="sensor-data-para">
                                <h2>{t("sensorData.scenario1.title") || "Scenario 1"}</h2>
                                <h3>
                                    {t("sensorData.scenario1.heading") || "Sensor Data"}{" "}
                                    <span className="green-txt" style={{ color: "#34a853" }}>
                                        {t("sensorData.scenario1.status") || "Aligned"}
                                    </span>
                                </h3>
                                <p>
                                    {t("sensorData.scenario1.description") ||
                                        "Dual sensor technology to ensure continuous PM monitoring. The primary and reserve sensors data are aligning. Thus, the reserve sensor goes on the sleep mode."}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mob-flex">
                        <div className="col-md-5">
                            <div className="sensor-data-para">
                                <h2>{t("sensorData.scenario2.title") || "Scenario 2"}</h2>
                                <h3>
                                    {t("sensorData.scenario2.heading") || "Sensor Data"}{" "}
                                    <span className="green-txt" style={{ color: "#c63939" }}>
                                        {t("sensorData.scenario2.status") || "Not Aligned"}
                                    </span>
                                </h3>
                                <p>
                                    {t("sensorData.scenario2.description") ||
                                        "The data of primary sensor and reserve sensor not aligned. Hence the reserve sensor takes over the function on Primary sensor without changing."}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="sensor-data-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/Sensor-Data-Not-Aligned.webp"
                                    alt={t("sensorData.scenario2.image.alt") || "chart showing air quality sensor Data Not Aligned"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Slider */}
            <section className="slider-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="video-txt">
                                <h2>{t("productManufacturing.title") || "Product"}</h2>
                                <h3>{t("productManufacturing.subtitle") || "In-house Manufacturing"}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductSlider />

            {/* Technical Specifications */}
            <section className="technical-specification">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="spec-heading">
                                <h4>{t("techSpecsCompact.title") || "Technical Specifications"}</h4>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="brochore-btn">
                                <a href="#">
                                    {t("techSpecsCompact.brochure.text") || "Brochure"}{" "}
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2024/09/download-btn.png"
                                        alt={t("techSpecsCompact.brochure.iconAlt") || "brochore-btn"}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row mid-box mob-scroll">
                        <div className="col-md-6">
                            <div className="product-specifi">
                                {t("techSpecsCompact.specs.productName.label") || "Product Name :"}
                                <h4>{t("techSpecsCompact.specs.productName.value") || "Prana Sense"}</h4>
                            </div>
                            <div className="product-specifi shdw-line">
                                {t("techSpecsCompact.specs.solarPanel.label") || "Solar Panel:"}
                                <h4>{t("techSpecsCompact.specs.solarPanel.value") || "30Watt"}</h4>
                            </div>
                            <div className="product-specifi">
                                {t("techSpecsCompact.specs.ledScreen.label") || "LED Screen Size:"}
                                <h4>{t("techSpecsCompact.specs.ledScreen.value") || "3.5inch"}</h4>
                            </div>
                            <div className="product-specifi shdw-line">
                                {t("techSpecsCompact.specs.dimension.label") || "Dimension :"}
                                <h4>{t("techSpecsCompact.specs.dimension.value") || "230*150*85mm"}</h4>
                            </div>
                            <div className="product-specifi">
                                {t("techSpecsCompact.specs.weight.label") || "Weight:"}
                                <h4>{t("techSpecsCompact.specs.weight.value") || "1kg"}</h4>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="product-specifi">
                                {t("techSpecsCompact.specs.batteryHours.label") || "Battery working hours :"}
                                <h4>{t("techSpecsCompact.specs.batteryHours.value") || "96hrs"}</h4>
                            </div>
                            <div className="product-specifi shdw-line">
                                {t("techSpecsCompact.specs.batteryCapacity.label") || "Battery capacity:"}
                                <h4>{t("techSpecsCompact.specs.batteryCapacity.value") || "40,000mAh"}</h4>
                            </div>
                            <div className="product-specifi">
                                {t("techSpecsCompact.specs.connectivity.label") || "Connectivity:"}
                                <h4>{t("techSpecsCompact.specs.connectivity.value") || "LoRa, GSM, WiFi, RS485"}</h4>
                            </div>
                            <div className="product-specifi shdw-line">
                                {t("techSpecsCompact.specs.locationTracking.label") || "Location Tracking:"}
                                <h4>{t("techSpecsCompact.specs.locationTracking.value") || "GPS"}</h4>
                            </div>
                            <div className="product-specifi">
                                {t("techSpecsCompact.specs.weatherRating.label") || "Weather Rating:"}
                                <h4>{t("techSpecsCompact.specs.weatherRating.value") || "IP68"}</h4>
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
                            <h2>{t("getInTouch.title") || "Get in Touch"}</h2>
                            <p>
                                {t("getInTouch.description") ||
                                    "Please help us know what requirements you have. Our team will contact you very soon."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm pageName="Prana Sense Page" />

            {/* FAQ Section */}
            <section className="tab-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="frequently-asked-questions">
                                <h2>
                                    {t("faq.heading.part1") || "Frequently Asked"}{" "}
                                    <span className="faq">{t("faq.heading.part2") || "Questions"}</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-8"></div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item my-tab-section">
                                    <h4 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            {t("faq.questions.1.question") ||
                                                "1. What makes Prana Sense different from other air quality monitors?"}
                                        </button>
                                    </h4>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>
                                                {t("faq.questions.1.answer") ||
                                                    "Prana Sense is not your ordinary outdoor air quality monitor because it is a complete environmental monitoring device. Additionally, it can operate with solar power."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item my-tab-section">
                                    <h4 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            {t("faq.questions.2.question") || "2. Can I use Prana Sense in remote areas?"}
                                        </button>
                                    </h4>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>
                                                {t("faq.questions.2.answer") ||
                                                    "Yes, the Prana Sense monitor can be used in remote areas as it has an option for solar panels. It can connect directly to the device without the need for a controller."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item my-tab-section">
                                    <h4 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            {t("faq.questions.3.question") ||
                                                "3. What parameters can be monitored with the Dual sensor technology?"}
                                        </button>
                                    </h4>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>
                                                {t("faq.questions.3.answer") ||
                                                    "Dual-sensor technology is available for Particulate Matter. It offers the continuous monitoring of PM in the air without facing any difficulty."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item my-tab-section">
                                    <h4 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                        >
                                            {t("faq.questions.4.question") || "4. What if both sensors data does not aligned?"}
                                        </button>
                                    </h4>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>
                                                {t("faq.questions.4.answer") ||
                                                    "In dual-sensor technology, the reserve sensor works for one month to check the primary sensors working capabilities. If both sensors data is not aligned, the reserve sensor takes over and the primary sensor goes to sleep."}
                                            </p>
                                        </div>
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
