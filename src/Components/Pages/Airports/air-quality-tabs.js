import BootstrapTabs from "../BootstrapTabsReuse/bootstrap-tabs"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain } from "@/config"
export default async function AirQualityTabs() {
    const { t } = await getServerTranslation("airports")
    const tabs = [
        {
            title: t("airQualityTabs.tabs.airQualityMonitors"),
            content: (
                <div className="tab-pane">
                    <h3 style={{ textAlign: "center", lineHeight: "1.6" }}>
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/arrow.png"
                            alt={t("airQualityTabs.airQualityMonitors.firstSection.iconAlt")}
                            width="34"
                            height="34"
                        />{" "}
                        {t("airQualityTabs.airQualityMonitors.firstSection.title")}
                    </h3>
                    <p style={{ textAlign: "center" }}>
                        <span style={{ fontSize: "12pt" }}>
                            {t("airQualityTabs.airQualityMonitors.firstSection.description")}
                        </span>
                    </p>

                    <div id="myCarousel" className="carousel slide">
                        <ol className="carousel-indicators">
                            <li className="active" data-target="#myCarousel" data-slide-to="0"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <div className="slider_cntr">
                                    <div className="slider_details_box">
                                        <h4 style={{ fontSize: "20px" }}>{t("airQualityTabs.airQualityMonitors.carousel.squair.title")}</h4>
                                        <span>{t("airQualityTabs.airQualityMonitors.carousel.squair.description")}</span>
                                        <ul className="airquality_list">
                                            <li>{t("airQualityTabs.airQualityMonitors.carousel.squair.features.feature1")}</li>
                                            <li>{t("airQualityTabs.airQualityMonitors.carousel.squair.features.feature2")}</li>
                                            <li>{t("airQualityTabs.airQualityMonitors.carousel.squair.features.feature3")}</li>
                                        </ul>
                                        <Link href={`${domain}/air-quality-monitor/squair-air-monitor`} className="knowmore_btn">
                                            {t("airQualityTabs.common.knowMoreButton")}
                                        </Link>
                                        <Link href={`${domain}/air-quality-monitor/rental-air-monitor/`} className="rent_btn">
                                            {t("airQualityTabs.airQualityMonitors.carousel.squair.rentButton")}
                                        </Link>
                                    </div>
                                    <div className="slider_img_box">
                                        <Link href={`${domain}/air-quality-monitor/squair-air-monitor`}>
                                            <img
                                                style={{ width: "100%" }}
                                                src="https://www.pranaair.com/wp-content/uploads/2022/09/prana-air-squair-monitor-in-airport.jpg"
                                                alt={t("airQualityTabs.airQualityMonitors.carousel.squair.imageAlt")}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="slider_cntr">
                                    <div className="slider_details_box">
                                        <h3 style={{ fontSize: "20px" }}>{t("airQualityTabs.airQualityMonitors.carousel.sensible.title")}</h3>
                                        <span>{t("airQualityTabs.airQualityMonitors.carousel.sensible.description")}</span>
                                        <ul className="airquality_list">
                                            <li>{t("airQualityTabs.airQualityMonitors.carousel.sensible.features.feature1")}</li>
                                            <li>{t("airQualityTabs.airQualityMonitors.carousel.sensible.features.feature2")}</li>
                                            <li>{t("airQualityTabs.airQualityMonitors.carousel.sensible.features.feature3")}</li>
                                        </ul>
                                        <Link
                                            href={`${domain}/air-quality-monitor/sensible-plus-air-monitor/`}
                                            className="knowmore_btn"
                                        >
                                            {t("airQualityTabs.common.knowMoreButton")}
                                        </Link>
                                    </div>
                                    <div className="slider_img_box">
                                        <Link href={`${domain}/air-quality-monitor/sensible-plus-air-monitor/`}>
                                            <img
                                                style={{ width: "100%" }}
                                                src="https://www.pranaair.com/wp-content/uploads/2022/09/prana-air-sensible-plus-monitor-for-airport.jpg"
                                                alt={t("airQualityTabs.airQualityMonitors.carousel.sensible.imageAlt")}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </a>
                    </div>

                    <h3 style={{ textAlign: "center", lineHeight: "1.6", marginTop: "45px" }}>
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/2nd-icon.png"
                            alt={t("airQualityTabs.airQualityMonitors.loraSection.iconAlt")}
                            width="34"
                            height="34"
                        />{" "}
                        {t("airQualityTabs.airQualityMonitors.loraSection.title")}
                    </h3>
                    <p style={{ textAlign: "center" }}>
                        <span style={{ fontSize: "12pt" }}>
                            {t("airQualityTabs.airQualityMonitors.loraSection.description.part1")}{" "}
                            <strong>{t("airQualityTabs.airQualityMonitors.loraSection.description.emphasis")}</strong>{" "}
                            {t("airQualityTabs.airQualityMonitors.loraSection.description.part2")}
                        </span>
                    </p>

                    <div className="text-center">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/air-quality-monitoring-using-lora-technology-in-airport.jpg"
                            alt={t("airQualityTabs.airQualityMonitors.loraSection.mainImageAlt")}
                            className="img-fluid"
                        />
                    </div>

                    <h3 style={{ textAlign: "center", marginTop: "30px" }}>
                        <span style={{ fontSize: "18pt" }}>{t("airQualityTabs.airQualityMonitors.loraFeatures.title")}</span>
                    </h3>

                    <div className="row pollution_cntr inner_container">
                        <div className="col-md-2 col-sm-4">
                            <div className="feature_box">
                                <img
                                    className=""
                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/wireless-communication-tech.png"
                                    alt={t("airQualityTabs.airQualityMonitors.loraFeatures.feature1.iconAlt")}
                                    width="84"
                                    height="61"
                                />
                                <div className="feature_wrap_box">
                                    <h4>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.loraFeatures.feature1.title")}</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="feature_box">
                                <img
                                    className=""
                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/nodes.png"
                                    alt={t("airQualityTabs.airQualityMonitors.loraFeatures.feature2.iconAlt")}
                                    width="84"
                                    height="61"
                                />
                                <div className="feature_wrap_box">
                                    <h4>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.loraFeatures.feature2.title")}</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="feature_box">
                                <img
                                    className=""
                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/iot.png"
                                    alt={t("airQualityTabs.airQualityMonitors.loraFeatures.feature3.iconAlt")}
                                    width="84"
                                    height="61"
                                />
                                <div className="feature_wrap_box">
                                    <h4>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.loraFeatures.feature3.title")}</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="feature_box">
                                <img
                                    className=""
                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/local-network.png"
                                    alt={t("airQualityTabs.airQualityMonitors.loraFeatures.feature4.iconAlt")}
                                    width="84"
                                    height="61"
                                />
                                <div className="feature_wrap_box">
                                    <h4>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.loraFeatures.feature4.title")}</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="feature_box">
                                <img
                                    className=""
                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/nearby.png"
                                    alt={t("airQualityTabs.airQualityMonitors.loraFeatures.feature5.iconAlt")}
                                    width="84"
                                    height="61"
                                />
                                <div className="feature_wrap_box">
                                    <h4>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.loraFeatures.feature5.title")}</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pollution_cntr inner_container">
                        <div className="col-md-2 col-sm-4"></div>
                        <div className="col-md-2 col-sm-4">
                            <div className="feature_box">
                                <img
                                    className=""
                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/maintenance.png"
                                    alt={t("airQualityTabs.airQualityMonitors.loraFeatures.feature6.iconAlt")}
                                    width="84"
                                    height="61"
                                />
                                <div className="feature_wrap_box">
                                    <h4>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.loraFeatures.feature6.title")}</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="feature_box">
                                <img
                                    className=""
                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/local-network-server.png"
                                    alt={t("airQualityTabs.airQualityMonitors.loraFeatures.feature7.iconAlt")}
                                    width="84"
                                    height="61"
                                />
                                <div className="feature_wrap_box">
                                    <h4>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.loraFeatures.feature7.title")}</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="feature_box">
                                <img
                                    className=""
                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/no-expense.png"
                                    alt={t("airQualityTabs.airQualityMonitors.loraFeatures.feature8.iconAlt")}
                                    width="84"
                                    height="61"
                                />
                                <div className="feature_wrap_box">
                                    <h4>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.loraFeatures.feature8.title")}</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4"></div>
                    </div>

                    <div className="text-center mt-5">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/lora-air-quality-monitor-in-aerobridge-airport.jpg"
                            alt={t("airQualityTabs.airQualityMonitors.loraSection.networkDiagramAlt")}
                            className="img-fluid"
                        />
                    </div>

                    <div className="table_sensor_box table_tab_box mt-5">
                        <h3 style={{ textAlign: "center" }}>
                            <span style={{ fontSize: "18pt" }}>
                                <strong>
                                    <b>{t("airQualityTabs.airQualityMonitors.comparisonTable.title")}</b>
                                </strong>
                            </span>
                        </h3>
                        <table style={{ width: "98.9458%", height: "182px" }}>
                            <tbody>
                                <tr style={{ height: "26px" }}>
                                    <th style={{ width: "28.3148%", height: "26px" }}>
                                        <span style={{ fontSize: "13pt" }}>{t("airQualityTabs.airQualityMonitors.comparisonTable.header.specifications")}</span>
                                    </th>
                                    <th style={{ width: "37.3675%", height: "26px" }}>
                                        <span style={{ fontSize: "13pt" }}>{t("airQualityTabs.airQualityMonitors.comparisonTable.header.wifi")}</span>
                                    </th>
                                    <th style={{ width: "148.718%", height: "26px" }}>
                                        <span style={{ fontSize: "13pt" }}>{t("airQualityTabs.airQualityMonitors.comparisonTable.header.lora")}</span>
                                    </th>
                                </tr>
                                <tr style={{ height: "26px" }}>
                                    <td style={{ width: "28.3148%", textAlign: "left", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>
                                            <strong>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.range.label")}</strong>
                                        </span>
                                    </td>
                                    <td style={{ width: "37.3675%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.range.wifi")}</span>
                                    </td>
                                    <td style={{ width: "148.718%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.range.lora")}</span>
                                    </td>
                                </tr>
                                <tr style={{ height: "26px" }}>
                                    <td style={{ width: "28.3148%", textAlign: "left", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>
                                            <strong>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.gateway.label")}</strong>
                                        </span>
                                    </td>
                                    <td style={{ width: "37.3675%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.gateway.wifi")}</span>
                                    </td>
                                    <td style={{ width: "148.718%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.gateway.lora")}</span>
                                    </td>
                                </tr>
                                <tr style={{ height: "26px" }}>
                                    <td style={{ width: "28.3148%", textAlign: "left", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>
                                            <strong>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.configuration.label")}</strong>
                                        </span>
                                    </td>
                                    <td style={{ width: "37.3675%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.configuration.wifi")}</span>
                                    </td>
                                    <td style={{ width: "148.718%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.configuration.lora")}</span>
                                    </td>
                                </tr>
                                <tr style={{ height: "26px" }}>
                                    <td style={{ width: "28.3148%", textAlign: "left", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>
                                            <strong>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.dataAccessibility.label")}</strong>
                                        </span>
                                    </td>
                                    <td style={{ width: "37.3675%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.dataAccessibility.wifi")}</span>
                                    </td>
                                    <td style={{ width: "148.718%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.dataAccessibility.lora")}</span>
                                    </td>
                                </tr>
                                <tr style={{ height: "26px" }}>
                                    <td style={{ width: "28.3148%", textAlign: "left", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>
                                            <strong>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.powerConsumption.label")}</strong>
                                        </span>
                                    </td>
                                    <td style={{ width: "37.3675%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.powerConsumption.wifi")}</span>
                                    </td>
                                    <td style={{ width: "148.718%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.powerConsumption.lora")}</span>
                                    </td>
                                </tr>
                                <tr style={{ height: "26px" }}>
                                    <td style={{ width: "28.3148%", textAlign: "left", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>
                                            <strong>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.sustainable.label")}</strong>
                                        </span>
                                    </td>
                                    <td style={{ width: "37.3675%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.sustainable.wifi")}</span>
                                    </td>
                                    <td style={{ width: "148.718%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>{t("airQualityTabs.airQualityMonitors.comparisonTable.rows.sustainable.lora")}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ),
        },
        {
            title: t("airQualityTabs.tabs.freshAirMachine"),
            content: (
                <div className="tab-pane">
                    <div id="myCarousel2" className="carousel slide">
                        <ol className="carousel-indicators">
                            <li className="active" data-target="#myCarousel2" data-slide-to="0"></li>
                            <li data-target="#myCarousel2" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <div className="slider_cntr">
                                    <div className="slider_img_box">
                                        <Link href={`${domain}/fresh-air-machine/`}>
                                            <img
                                                style={{ width: "100%" }}
                                                src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-fresh-air-machine-for-iaq-solution.jpg"
                                                alt={t("airQualityTabs.freshAirMachine.imageAlt")}
                                            />
                                        </Link>
                                    </div>
                                    <div className="slider_details_box">
                                        <h3>
                                            {t("airQualityTabs.freshAirMachine.title.line1")}
                                            <br /> {t("airQualityTabs.freshAirMachine.title.line2")}
                                        </h3>
                                        <span>{t("airQualityTabs.freshAirMachine.description")}</span>
                                        <ul className="airquality_list">
                                            <li>{t("airQualityTabs.freshAirMachine.features.feature1")}</li>
                                            <li>{t("airQualityTabs.freshAirMachine.features.feature2")}</li>
                                            <li>{t("airQualityTabs.freshAirMachine.features.feature3")}</li>
                                        </ul>
                                        <Link href={`${domain}/fresh-air-machine/`} className="knowmore_btn">
                                            {t("airQualityTabs.common.knowMoreButton")}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="left carousel-control" href="#myCarousel2" data-slide="prev">
                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                        </a>
                        <a className="right carousel-control" href="#myCarousel2" data-slide="next">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            ),
        },
        {
            title: t("airQualityTabs.tabs.apiData"),
            content: (
                <div className="tab-pane">
                    <div id="myCarousel3" className="carousel slide">
                        <ol className="carousel-indicators">
                            <li className="active" data-target="#myCarousel3" data-slide-to="0"></li>
                            <li data-target="#myCarousel3" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <div className="slider_cntr">
                                    <div className="slider_img_box">
                                        <img
                                            style={{ width: "100%" }}
                                            src="https://www.pranaair.com/wp-content/uploads/2022/08/aqi-api-data-for-institutes.jpg"
                                            alt={t("airQualityTabs.apiData.imageAlt")}
                                        />
                                    </div>
                                    <div className="slider_details_box">
                                        <h3>
                                            {t("airQualityTabs.apiData.title.line1")}
                                            <br /> {t("airQualityTabs.apiData.title.line2")}
                                        </h3>
                                        <span>{t("airQualityTabs.apiData.description")}</span>
                                        <ul className="airquality_list">
                                            <li>{t("airQualityTabs.apiData.features.feature1")}</li>
                                            <li>{t("airQualityTabs.apiData.features.feature2")}</li>
                                            <li>{t("airQualityTabs.apiData.features.feature3")}</li>
                                        </ul>
                                        <br />
                                        <a href="#get_in_touch" className="knowmore_btn">
                                            {t("airQualityTabs.common.knowMoreButton")}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="left carousel-control" href="#myCarousel3" data-slide="prev">
                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                        </a>
                        <a className="right carousel-control" href="#myCarousel3" data-slide="next">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            ),
        },
    ]

    return <BootstrapTabs tabs={tabs} />
}
