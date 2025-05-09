
import Image from "next/image"
import Link from "next/link"

export default function TechSpecTab() {
    return (
        <>
            <div className="tech-tab-spec">
                <ul className="nav nav-tabs" id="techTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="ambient-pm-tech-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#ambient-pm-tech"
                            type="button"
                            role="tab"
                            aria-controls="ambient-pm-tech"
                            aria-selected="true"
                        >
                            Ambient PM
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="ambient-pro-tech-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#ambient-pro-tech"
                            type="button"
                            role="tab"
                            aria-controls="ambient-pro-tech"
                            aria-selected="false"
                        >
                            Ambient Pro
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="prana-sense-tech-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#prana-sense-tech"
                            type="button"
                            role="tab"
                            aria-controls="prana-sense-tech"
                            aria-selected="false"
                        >
                            Prana Sense
                        </button>
                    </li>
                </ul>
            </div>
            <div className="tab-content" id="techTabContent">
                <div
                    className="tab-pane fade show active"
                    id="ambient-pm-tech"
                    role="tabpanel"
                    aria-labelledby="ambient-pm-tech-tab"
                >
                    <a
                        className="tech-spec-btn"
                        href="https://www.pranaair.com/wp-content/uploads/2024/06/construction-site-Prana-Air-Air-quality-monitor-brochure.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                            alt="brochure-icon"
                            width={20}
                            height={20}
                        />
                        Brochure
                    </a>
                    <div className="tech-spec-parameter">
                        <ul className="basic-pm">
                            <li>
                                <h4>Basic Parameters:</h4>
                            </li>
                            <li>AQI, PM1, PM2.5, PM10, Temperature and Humidity</li>
                        </ul>
                        <ul className="tech-color-box">
                            <li>
                                <h4>Basic PM + Weather Station:</h4>
                            </li>
                            <li>Basic parameters + LUX, Solar Irradiance, Wind Speed, Wind Direction, Rainfall, Gust & UV Index</li>
                        </ul>
                        <div className="tech-spec-inner-parameter">
                            <div className="tech-spec-inner-one ambient-lite-pm">
                                <ul>
                                    <li>
                                        <h4>Connectivity</h4>
                                    </li>
                                    <li>Wifi or GSM</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Weight:</h4>
                                    </li>
                                    <li>600g (Approx)</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Data Interval:</h4>
                                    </li>
                                    <li>30s to 1hour</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>USB Type:</h4>
                                    </li>
                                    <li>Micro USB</li>
                                </ul>
                            </div>
                            <div className="tech-spec-inner-two">
                                <ul>
                                    <li>
                                        <h4>Mobile app:</h4>
                                    </li>
                                    <li>AQI App (available on ios and android)</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Dimensions:</h4>
                                    </li>
                                    <li>16.5 x 5 x 11.5 (cm)</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Storage:</h4>
                                    </li>
                                    <li>AQI Cloud Storage</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Housing</h4>
                                    </li>
                                    <li>Weatherproof</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="ambient-pro-tech" role="tabpanel" aria-labelledby="ambient-pro-tech-tab">
                    <div className="tech-spec-parameter">
                        <ul>
                            <li>
                                <h4>Parameters:</h4>
                            </li>
                            <li>Ambient Lite + O3, CH4, Noise, NH3, LUX, Wind Speed, Wind Direction, Rainfall and UV Index</li>
                        </ul>
                        <div className="tech-spec-inner-parameter">
                            <div className="tech-spec-inner-one-pm">
                                <ul>
                                    <li>
                                        <h4>Connectivity</h4>
                                    </li>
                                    <li>Wifi or GSM(4G) and RS-485 (MODBUS)</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Weight:</h4>
                                    </li>
                                    <li>1.4kg. (Approx)</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Battery:</h4>
                                    </li>
                                    <li>—</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>USB Type:</h4>
                                    </li>
                                    <li>—</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Data Interval:</h4>
                                    </li>
                                    <li>30 sec to 1 Hour</li>
                                </ul>
                            </div>
                            <div className="tech-spec-inner-two mg-top">
                                <ul>
                                    <li>
                                        <h4>Mobile app:</h4>
                                    </li>
                                    <li>AQI Mobile App</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Dimensions:</h4>
                                    </li>
                                    <li>18 X 38 (cm)</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Storage:</h4>
                                    </li>
                                    <li>AQI Cloud Storage</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Housing</h4>
                                    </li>
                                    <li>Weatherproof</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="prana-sense-tech" role="tabpanel" aria-labelledby="prana-sense-tech-tab">
                    <Link className="tech-spec-btn" href="#">
                        <Image
                            src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                            alt="brochure-icon"
                            width={20}
                            height={20}
                        />
                        Brochure
                    </Link>
                    <div className="tech-spec-parameter">
                        <ul>
                            <li>
                                <h4>Parameters:</h4>
                            </li>
                            <li>PM10, PM2.5 & PM1, temp., Humid, CO2, NO2, CO, SO2, O3,NH3, TVOC MOS, Noise,CH4</li>
                        </ul>
                        <div className="tech-spec-inner-parameter">
                            <div className="tech-spec-inner-one-pm">
                                <ul>
                                    <li>
                                        <h4>Connectivity</h4>
                                    </li>
                                    <li>Wi-Fi, GSM, LoRa,and RS-485</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Weight:</h4>
                                    </li>
                                    <li>1 kg. (Approx)</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Power:</h4>
                                    </li>
                                    <li>Inbuilt Solar Panel</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Data Interval:</h4>
                                    </li>
                                    <li>30 sec to 1 Hour</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Display Size:</h4>
                                    </li>
                                    <li>Monochrome 3.5 inch</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Battery:</h4>
                                    </li>
                                    <li>40,000 mAh in-built Backup (96 Hours)</li>
                                </ul>
                            </div>
                            <div className="tech-spec-inner-two mg-top">
                                <ul>
                                    <li>
                                        <h4>Mobile app:</h4>
                                    </li>
                                    <li>AQI Mobile App</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Dimensions:</h4>
                                    </li>
                                    <li>230 X 150 X 85mm</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Housing</h4>
                                    </li>
                                    <li>Weatherproof</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Power Supply:</h4>
                                    </li>
                                    <li>Direct Power Supply or Solar (30watt)</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Storage:</h4>
                                    </li>
                                    <li>Micro SD Card Storage + Cloud Storage (with AQI Dashboard)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
