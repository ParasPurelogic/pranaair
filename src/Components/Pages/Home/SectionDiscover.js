import Image from "next/image"
import Link from "next/link"
import { getServerTranslation } from "../../../i18n/server";

export default async function SectionDiscover() {
    // Translator
    const { t } = await getServerTranslation("home")

    return (
        <section className="discover-air-quality">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="discover-header">
                            <div className="discover-air-quality-heading">
                                <h2>{t("discovers.title")}</h2>
                            </div>
                            <div className="discover-air-quality-para">
                                <p>{t("discovers.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="seamless-tab">
                    <div className="row">
                        <div className="col-lg-4">
                            <ul className="nav nav-tabs tabs-header" id="productTabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="tab1-tab" data-bs-toggle="tab"
                                        data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1"
                                        aria-selected="true">
                                        <div className="product-catgeory">
                                            <h3>
                                                {t("tabs.monitors")} <i className="tab-arrow"></i>
                                            </h3>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2"
                                        type="button" role="tab">
                                        <div className="product-catgeory">
                                            <h3>
                                                {t("tabs.sensors")} <i className="tab-arrow"></i>
                                            </h3>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3"
                                        type="button" role="tab" aria-controls="tab3" aria-selected="false">
                                        <div className="product-catgeory">
                                            <h3>
                                                {t("tabs.pcbs")} <i className="tab-arrow"></i>
                                            </h3>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab4-tab" data-bs-toggle="tab" data-bs-target="#tab4"
                                        type="button" role="tab" aria-controls="tab4" aria-selected="false">
                                        <div className="product-catgeory">
                                            <h3>
                                                {t("tabs.weather")} <i className="tab-arrow"></i>
                                            </h3>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab5-tab" data-bs-toggle="tab" data-bs-target="#tab5"
                                        type="button" role="tab" aria-controls="tab5" aria-selected="false">
                                        <div className="product-catgeory">
                                            <h3>
                                                {t("tabs.purifiers")} <i className="tab-arrow"></i>
                                            </h3>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content" id="productTabsContent">
                                {/* Air Quality Monitors Tab Content */}
                                <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                                    <div className="aq-monitor-box">
                                        <div className="discover-air-quality-page-img">
                                            <Link href="/air-quality-monitor/handheld/pocket-monitor/" className="page-link">
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-pocket-pm2.5-monitor-portable-PM2.5-Monitor.jpg"
                                                    alt="prana air pocket pm2.5 monitor portable" width={400} height={200}
                                                    className="monitor-image" />
                                                <ul>
                                                    <li>Pocket PM2.5 Monitor</li>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                            alt="arrow icon" width={15} height={15} className="arrow-icon" />
                                                    </li>
                                                </ul>
                                            </Link>
                                        </div>
                                        <div className="discover-air-quality-page-img">
                                            <Link href="/air-quality-monitor/air-drone/" className="page-link">
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-Air-Quality-Drone.jpg"
                                                    alt="prana air air quality drone" width={400} height={200}
                                                    className="monitor-image" />
                                                <ul>
                                                    <li>Air Quality Drone</li>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                            alt="arrow icon" width={15} height={15} className="arrow-icon" />
                                                    </li>
                                                </ul>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="aq-monitor-last">
                                        <div className="discover-air-quality-page-img cair-monitor">
                                            <Link href="/air-quality-monitor/cair-monitor/" className="page-link">
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-indoor-Cair-Monitor.jpg"
                                                    alt="prana air cair indoor air quality monitor" width={400} height={200}
                                                    className="monitor-image" />
                                                <ul>
                                                    <li>Cair + Monitor</li>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                            alt="arrow icon" width={15} height={15} className="arrow-icon" />
                                                    </li>
                                                </ul>
                                            </Link>
                                        </div>
                                        <div className="discover-air-quality-page-img cair-monitor ambient-lite">
                                            <Link href="/air-quality-monitor/ambient-air-monitor/" className="page-link">
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-Ambient-Lite-monitor.jpg"
                                                    alt="prana air ambient air quality monitor" width={400} height={200}
                                                    className="monitor-image" />
                                                <ul>
                                                    <li>Ambient Lite Monitor</li>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                            alt="arrow icon" width={15} height={15} className="arrow-icon" />
                                                    </li>
                                                </ul>
                                            </Link>
                                        </div>
                                        <div className="see-more-box">
                                            <Link href="/air-quality-monitor/" className="see-more">
                                                {t("discovers.button")}
                                                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                    alt="arrow icon" width={15} height={15} className="arrow-icon" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Air Quality Sensors Tab Content */}
                                <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                                    <div className="sensor-row">
                                        <ul className="all-sensor">
                                            <li>
                                                <div className="discover-air-sensor-page-img">
                                                    <Link href="/air-quality-sensor/outdoor-pm-sensor/"
                                                        className="sensor-page-link">
                                                        <div className="img-box">
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-pm-sensor.jpg"
                                                                alt="prana air outdoor pm2.5 sensor" width={250} height={150}
                                                                className="sensor-image" />
                                                        </div>
                                                        <ul>
                                                            <li>PM Sensor</li>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                                    alt="arrow icon" width={15} height={15}
                                                                    className="arrow-icon" />
                                                            </li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="discover-air-sensor-page-img">
                                                    <Link href="/air-quality-sensor/outdoor-pm-sensor/"
                                                        className="sensor-page-link">
                                                        <div className="img-box">
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-pm-sensor.jpg"
                                                                alt="prana air outdoor pm2.5 sensor" width={250} height={150}
                                                                className="sensor-image" />
                                                        </div>
                                                        <ul>
                                                            <li>PM Sensor</li>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                                    alt="arrow icon" width={15} height={15}
                                                                    className="arrow-icon" />
                                                            </li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="discover-air-sensor-page-img">
                                                    <Link href="/air-quality-sensor/outdoor-pm-sensor/"
                                                        className="sensor-page-link">
                                                        <div className="img-box">
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-pm-sensor.jpg"
                                                                alt="prana air outdoor pm2.5 sensor" width={250} height={150}
                                                                className="sensor-image" />
                                                        </div>
                                                        <ul>
                                                            <li>PM Sensor</li>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                                    alt="arrow icon" width={15} height={15}
                                                                    className="arrow-icon" />
                                                            </li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="discover-air-sensor-page-img">
                                                    <Link href="/air-quality-sensor/outdoor-pm-sensor/"
                                                        className="sensor-page-link">
                                                        <div className="img-box">
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-pm-sensor.jpg"
                                                                alt="prana air outdoor pm2.5 sensor" width={250} height={150}
                                                                className="sensor-image" />
                                                        </div>
                                                        <ul>
                                                            <li>PM Sensor</li>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                                    alt="arrow icon" width={15} height={15}
                                                                    className="arrow-icon" />
                                                            </li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="all-sensor">
                                            <li>
                                                <div className="discover-air-sensor-page-img">
                                                    <Link href="/air-quality-sensor/outdoor-pm-sensor/"
                                                        className="sensor-page-link">
                                                        <div className="img-box">
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-pm-sensor.jpg"
                                                                alt="prana air outdoor pm2.5 sensor" width={250} height={150}
                                                                className="sensor-image" />
                                                        </div>
                                                        <ul>
                                                            <li>PM Sensor</li>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                                    alt="arrow icon" width={15} height={15}
                                                                    className="arrow-icon" />
                                                            </li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="discover-air-sensor-page-img">
                                                    <Link href="/air-quality-sensor/outdoor-pm-sensor/"
                                                        className="sensor-page-link">
                                                        <div className="img-box">
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-pm-sensor.jpg"
                                                                alt="prana air outdoor pm2.5 sensor" width={250} height={150}
                                                                className="sensor-image" />
                                                        </div>
                                                        <ul>
                                                            <li>PM Sensor</li>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                                    alt="arrow icon" width={15} height={15}
                                                                    className="arrow-icon" />
                                                            </li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="discover-air-sensor-page-img">
                                                    <Link href="/air-quality-sensor/outdoor-pm-sensor/"
                                                        className="sensor-page-link">
                                                        <div className="img-box">
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-pm-sensor.jpg"
                                                                alt="prana air outdoor pm2.5 sensor" width={250} height={150}
                                                                className="sensor-image" />
                                                        </div>
                                                        <ul>
                                                            <li>PM Sensor</li>
                                                            <li>
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                                    alt="arrow icon" width={15} height={15}
                                                                    className="arrow-icon" />
                                                            </li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="knwo-more-box">
                                                    <a href="/air-quality-sensor" className="see-more">Know More

                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                            alt="arrow icon" width={10} height={10}
                                                            className="arrow-icon" />
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Air Quality PCBs Tab Content */}
                                <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                                    <div className="aq-monitor-pcb-box">
                                        <div className="discover-air-quality-pcb-page-img">
                                            <Link href="/air-quality-pcb-board/" className="pcb-page-link">
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/pranaair-pcb-board.webp"
                                                    alt="air quality pcb boards of prana air" width={500} height={300}
                                                    className="pcb-image" />
                                                <ul>
                                                    <li>Air Quality PCBs</li>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                            alt="arrow icon" width={15} height={15} className="arrow-icon" />
                                                    </li>
                                                </ul>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Weather Station Tab Content */}
                                <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                                    <div className="aq-monitor-pcb-box">
                                        <div className="discover-air-quality-pcb-page-img weather-st-img">
                                            <Link href="/air-quality-monitor/weather-station/" className="pcb-page-link">
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-Weather-station.jpg"
                                                    alt="Weather station of prana air" width={500} height={300}
                                                    className="weather-image" />
                                                <ul>
                                                    <li>Weather Station</li>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                            alt="arrow icon" width={15} height={15} className="arrow-icon" />
                                                    </li>
                                                </ul>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Air Purifiers Tab Content */}
                                <div className="tab-pane fade" id="tab5" role="tabpanel" aria-labelledby="tab5-tab">
                                    <div className="aq-monitor-box">
                                        <div className="discover-air-quality-page-img">
                                            <Link href="/wearable-air-purifier/" className="page-link">
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-Hanging-Purifier.jpg"
                                                    alt="prana air wearable personal air purifier" width={400} height={200}
                                                    className="purifier-image" />
                                                <ul>
                                                    <li>Wearable Air Purifier</li>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                            alt="arrow icon" width={15} height={15} className="arrow-icon" />
                                                    </li>
                                                </ul>
                                            </Link>
                                        </div>
                                        <div className="discover-air-quality-page-img">
                                            <Link href="/fresh-air-machine" className="page-link">
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-Fresh-air-Machine.jpg"
                                                    alt="prana air wearable personal air purifier" width={400} height={200}
                                                    className="purifier-image" />
                                                <ul>
                                                    <li>Fresh air machine</li>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                            alt="arrow icon" width={15} height={15} className="arrow-icon" />
                                                    </li>
                                                </ul>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="aq-monitor-box">
                                        <div className="discover-air-quality-page-img">
                                            <Link href="/outdoor-air-purifier" className="page-link">
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-outdoor-air-Purifier.jpg"
                                                    alt="prana air wearable personal air purifier" width={400} height={200}
                                                    className="purifier-image" />
                                                <ul>
                                                    <li>Outdoor air Purifier</li>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                            alt="arrow icon" width={15} height={15} className="arrow-icon" />
                                                    </li>
                                                </ul>
                                            </Link>
                                        </div>
                                        <div className="discover-air-quality-page-img">
                                            <Link href="/car-air-filter" className="page-link">
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-Car-cabin-filters.jpg"
                                                    alt="prana air wearable personal air purifier" width={400} height={200}
                                                    className="purifier-image" />
                                                <ul>
                                                    <li>Car Cabin Filter</li>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                                            alt="arrow icon" width={15} height={15} className="arrow-icon" />
                                                    </li>
                                                </ul>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience Shopping Section */}
            <div className="shopping-section">
                <div className="container">
                    <div className="shopping-content">
                        <div className="experince-heading">
                            <h3>{t("shopping.title")}</h3>
                        </div>
                        <div className="experience-function">
                            <ul className="experince-shoping">
                                <li>
                                    <Image src="https://www.pranaair.com/wp-content/uploads/2025/01/shipping-truck.png"
                                        alt="Free Shipping icon" width={45} height={45} />
                                    {t("shopping.globalShipping")}
                                </li>
                                <li>
                                    <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/Quick-Delivery.png"
                                        alt="quick delivery icon" width={45} height={45} />
                                    {t("shopping.quickDelivery")}
                                </li>
                            </ul>
                            <ul className="experince-shoping">
                                <li>
                                    <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/Warranty-Products.png"
                                        alt="warranty products icon" width={45} height={45} />
                                    {t("shopping.warrantyProducts")}
                                </li>
                                <li>
                                    <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/Return-Policy.png"
                                        alt="return policy icon" width={45} height={45} />
                                    {t("shopping.returnPolicy")}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}