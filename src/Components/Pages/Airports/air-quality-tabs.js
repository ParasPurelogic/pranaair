"use client"
import BootstrapTabs from "../BootstrapTabsReuse/bootstrap-tabs"

export default function AirQualityTabs() {
    const tabs = [
        {
            title: "Air Quality Monitors",
            content: (
                <div className="tab-pane">
                    <h3 style={{ textAlign: "center", lineHeight: "1.6" }}>
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/arrow.png"
                            alt="1st air quality monitoring"
                            width="34"
                            height="34"
                        />{" "}
                        Air Quality Monitoring (with Wi-Fi or GSM)
                    </h3>
                    <p style={{ textAlign: "center" }}>
                        <span style={{ fontSize: "12pt" }}>
                            Prana Air provides the smart indoor air quality monitors WiFi &amp; GSM connectivity.
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
                                        <h4 style={{ fontSize: "20px" }}>Squair Air Monitor</h4>
                                        <span>
                                            Squair monitor is a smart indoor air quality monitoring device that can detect IAQ pollutants.
                                        </span>
                                        <ul className="airquality_list">
                                            <li>Detects PM2.5, CO, CO2, TVOC, noise, temp., & humidity</li>
                                            <li>Mobile & Smart TV App Enabled</li>
                                            <li>Reliable Web Dashboard Accessibility</li>
                                        </ul>
                                        <a href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/" className="knowmore_btn">
                                            Know More
                                        </a>
                                        <a href="https://www.pranaair.com/air-quality-monitor/rental-air-monitor/" className="rent_btn">
                                            Looking to Rent?
                                        </a>
                                    </div>
                                    <div className="slider_img_box">
                                        <a href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/">
                                            <img
                                                style={{ width: "100%" }}
                                                src="https://www.pranaair.com/wp-content/uploads/2022/09/prana-air-squair-monitor-in-airport.jpg"
                                                alt="prana air squair air quality monitor for airport"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="slider_cntr">
                                    <div className="slider_details_box">
                                        <h3 style={{ fontSize: "20px" }}>Sensible+ Air Monitor</h3>
                                        <span>
                                            This is a smart air quality monitor that comes with 7 inch touch screen display that gives more
                                            insightful data.
                                        </span>
                                        <ul className="airquality_list">
                                            <li>7 Inch LED Touch Screen Display</li>
                                            <li>5000 mAh Battery InBuilt</li>
                                            <li>WiFi Connectivity With Mobile App</li>
                                        </ul>
                                        <a
                                            href="https://www.pranaair.com/air-quality-monitor/sensible-plus-air-monitor/"
                                            className="knowmore_btn"
                                        >
                                            Know More
                                        </a>
                                    </div>
                                    <div className="slider_img_box">
                                        <a href="https://www.pranaair.com/air-quality-monitor/sensible-plus-air-monitor/">
                                            <img
                                                style={{ width: "100%" }}
                                                src="https://www.pranaair.com/wp-content/uploads/2022/09/prana-air-sensible-plus-monitor-for-airport.jpg"
                                                alt="prana air sensible+ air quality monitor for airport"
                                            />
                                        </a>
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
                            alt="2nd lora air quality monitoring"
                            width="34"
                            height="34"
                        />{" "}
                        Air Quality Monitoring (with LoRa)
                    </h3>
                    <p style={{ textAlign: "center" }}>
                        <span style={{ fontSize: "12pt" }}>
                            LoRa technology is a new wireless protocol designed specifically for long-range &amp; low-power
                            communications. LoRa stands for <strong>Long Range</strong> and is mainly targeted for IoT networks. This
                            technology enables to connect a number of applications running on the same network.
                        </span>
                    </p>

                    <div className="text-center">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/air-quality-monitoring-using-lora-technology-in-airport.jpg"
                            alt="LoRa air quality monitoring for airport"
                            className="img-fluid"
                        />
                    </div>

                    <h3 style={{ textAlign: "center", marginTop: "30px" }}>
                        <span style={{ fontSize: "18pt" }}>Unique Features of LoRa</span>
                    </h3>

                    <div className="row pollution_cntr inner_container">
                        <div className="col-md-2 col-sm-4">
                            <div className="feature_box">
                                <img
                                    className=""
                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/wireless-communication-tech.png"
                                    alt="lora is Wireless Communication"
                                    width="84"
                                    height="61"
                                />
                                <div className="feature_wrap_box">
                                    <h4>
                                        <span style={{ fontSize: "12pt" }}>Wireless Communication</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="feature_box">
                                <img
                                    className=""
                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/nodes.png"
                                    alt="lora Upto 2000 nodes connectivity"
                                    width="84"
                                    height="61"
                                />
                                <div className="feature_wrap_box">
                                    <h4>
                                        <span style={{ fontSize: "12pt" }}>Upto 2000 nodes connectivity</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="feature_box">
                                <img
                                    className=""
                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/iot.png"
                                    alt="IoT technology"
                                    width="84"
                                    height="61"
                                />
                                <div className="feature_wrap_box">
                                    <h4>
                                        <span style={{ fontSize: "12pt" }}>IoT technology</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="feature_box">
                                <img
                                    className=""
                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/local-network.png"
                                    alt="Local area connectivity"
                                    width="84"
                                    height="61"
                                />
                                <div className="feature_wrap_box">
                                    <h4>
                                        <span style={{ fontSize: "12pt" }}>Local area connectivity</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="feature_box">
                                <img
                                    className=""
                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/nearby.png"
                                    alt="Upto 5kms signal coverage"
                                    width="84"
                                    height="61"
                                />
                                <div className="feature_wrap_box">
                                    <h4>
                                        <span style={{ fontSize: "12pt" }}>Upto 5kms signal coverage</span>
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
                                    alt="lora Easy to install"
                                    width="84"
                                    height="61"
                                />
                                <div className="feature_wrap_box">
                                    <h4>
                                        <span style={{ fontSize: "12pt" }}>Easy to install</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="feature_box">
                                <img
                                    className=""
                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/local-network-server.png"
                                    alt="Local server operation"
                                    width="84"
                                    height="61"
                                />
                                <div className="feature_wrap_box">
                                    <h4>
                                        <span style={{ fontSize: "12pt" }}>Local server operation</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="feature_box">
                                <img
                                    className=""
                                    src="https://www.pranaair.com/wp-content/uploads/2022/09/no-expense.png"
                                    alt="lora No operational/ recurring expenses"
                                    width="84"
                                    height="61"
                                />
                                <div className="feature_wrap_box">
                                    <h4>
                                        <span style={{ fontSize: "12pt" }}>No operational/ recurring expenses</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4"></div>
                    </div>

                    <div className="text-center mt-5">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/lora-air-quality-monitor-in-aerobridge-airport.jpg"
                            alt="LoRa network diagram"
                            className="img-fluid"
                        />
                    </div>

                    <div className="table_sensor_box table_tab_box mt-5">
                        <h3 style={{ textAlign: "center" }}>
                            <span style={{ fontSize: "18pt" }}>
                                <strong>
                                    <b>How LoRa is different from Wi-Fi connectivity?</b>
                                </strong>
                            </span>
                        </h3>
                        <table style={{ width: "98.9458%", height: "182px" }}>
                            <tbody>
                                <tr style={{ height: "26px" }}>
                                    <th style={{ width: "28.3148%", height: "26px" }}>
                                        <span style={{ fontSize: "13pt" }}>Specifications</span>
                                    </th>
                                    <th style={{ width: "37.3675%", height: "26px" }}>
                                        <span style={{ fontSize: "13pt" }}>Wi-Fi</span>
                                    </th>
                                    <th style={{ width: "148.718%", height: "26px" }}>
                                        <span style={{ fontSize: "13pt" }}>LoRa</span>
                                    </th>
                                </tr>
                                <tr style={{ height: "26px" }}>
                                    <td style={{ width: "28.3148%", textAlign: "left", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>
                                            <strong>1. Range</strong>
                                        </span>
                                    </td>
                                    <td style={{ width: "37.3675%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>Upto 30m (approx)</span>
                                    </td>
                                    <td style={{ width: "148.718%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>Upto 5000m (5km)</span>
                                    </td>
                                </tr>
                                <tr style={{ height: "26px" }}>
                                    <td style={{ width: "28.3148%", textAlign: "left", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>
                                            <strong>2. Gateway</strong>
                                        </span>
                                    </td>
                                    <td style={{ width: "37.3675%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>It can connect very few devices.</span>
                                    </td>
                                    <td style={{ width: "148.718%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>It can connect upto 2000 nodes.</span>
                                    </td>
                                </tr>
                                <tr style={{ height: "26px" }}>
                                    <td style={{ width: "28.3148%", textAlign: "left", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>
                                            <strong>3. Configuration</strong>
                                        </span>
                                    </td>
                                    <td style={{ width: "37.3675%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>Need to re-configure if wi-fi password changes</span>
                                    </td>
                                    <td style={{ width: "148.718%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>No such need</span>
                                    </td>
                                </tr>
                                <tr style={{ height: "26px" }}>
                                    <td style={{ width: "28.3148%", textAlign: "left", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>
                                            <strong>4. Data </strong>
                                            <strong>Accessibility</strong>
                                        </span>
                                    </td>
                                    <td style={{ width: "37.3675%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>Cloud storage</span>
                                    </td>
                                    <td style={{ width: "148.718%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>Local network or Cloud storage</span>
                                    </td>
                                </tr>
                                <tr style={{ height: "26px" }}>
                                    <td style={{ width: "28.3148%", textAlign: "left", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>
                                            <strong>5. Power Consumption</strong>
                                        </span>
                                    </td>
                                    <td style={{ width: "37.3675%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>Very High</span>
                                    </td>
                                    <td style={{ width: "148.718%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>Very Low</span>
                                    </td>
                                </tr>
                                <tr style={{ height: "26px" }}>
                                    <td style={{ width: "28.3148%", textAlign: "left", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>
                                            <strong>6. Sustainable</strong>
                                        </span>
                                    </td>
                                    <td style={{ width: "37.3675%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>No</span>
                                    </td>
                                    <td style={{ width: "148.718%", height: "26px" }}>
                                        <span style={{ fontSize: "12pt" }}>Yes</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ),
        },
        {
            title: "Fresh Air Machine",
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
                                        <a href="https://www.pranaair.com/fresh-air-machine/">
                                            <img
                                                style={{ width: "100%" }}
                                                src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-fresh-air-machine-for-iaq-solution.jpg"
                                                alt="prana air fresh air machine as iaq solution for airport"
                                            />
                                        </a>
                                    </div>
                                    <div className="slider_details_box">
                                        <h3>
                                            Fresh Air Machine
                                            <br /> As IAQ Solution
                                        </h3>
                                        <span>
                                            One-stop solution for indoor air pollution by Prana Air Fresh Air Machine working as an air
                                            purifier with the capability to filter out 99.5% efficiency and multi-layer HEPA filters.
                                        </span>
                                        <ul className="airquality_list">
                                            <li>Comes with multi-layers HEPA Filters</li>
                                            <li>Compact Design makes it easy to place</li>
                                            <li>Promising you up to 99.5% efficiency</li>
                                        </ul>
                                        <a href="https://www.pranaair.com/fresh-air-machine/" className="knowmore_btn">
                                            Know More
                                        </a>
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
            title: "API Data",
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
                                            alt="aqi api data for airport"
                                        />
                                    </div>
                                    <div className="slider_details_box">
                                        <h3>
                                            AQI API Data
                                            <br /> For Airport
                                        </h3>
                                        <span>Avail the real-time air quality data of nearby outdoor area on the web.</span>
                                        <ul className="airquality_list">
                                            <li>Integrate the airports data on the web</li>
                                            <li>Access the real-time data quickly</li>
                                            <li>Take precautions from the air pollution</li>
                                        </ul>
                                        <br />
                                        <a href="#get_in_touch" className="knowmore_btn">
                                            Know More
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
