"use client"

export default function PartsLabelTabs() {
    return (
        <>
            <div className="label-part-tab">
                <ul className="nav nav-tabs" id="partsLabelTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="parts-label-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#parts-label-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="parts-label-tab-pane"
                            aria-selected="true"
                        >
                            Parts & Label
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="disassambley-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#disassambley-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="disassambley-tab-pane"
                            aria-selected="false"
                        >
                            Disassambley
                        </button>
                    </li>
                </ul>
            </div>
            <div className="tab-content" id="partsLabelTabsContent">
                <div
                    className="tab-pane fade show active"
                    id="parts-label-tab-pane"
                    role="tabpanel"
                    aria-labelledby="parts-label-tab"
                    tabIndex={0}
                >
                    <div className="row part-labe-bg">
                        <div className="col-md-6">
                            <div className="part-lables-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2023/12/parts-and-label-cair-monitor.png"
                                    alt="parts and label cair monitor"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="part-label-box">
                                <ul>
                                    <li>
                                        <span className="num">1</span>
                                        <h4>NDIR Co2 sensor</h4>
                                    </li>
                                    <li>
                                        <span className="num">2</span>
                                        <h4>Laser particulate sensor (PM1, PM2.5, PM10)</h4>
                                    </li>
                                    <li>
                                        <span className="num">3</span>
                                        <h4>MEMS volatile organic compound sensor</h4>
                                    </li>
                                    <li>
                                        <span className="num">4</span>
                                        <h4>Electrochemical based Formaldehyde (HCHO) sensor</h4>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span className="num">5</span>
                                        <h4>Wifi module</h4>
                                    </li>
                                    <li>
                                        <span className="num">6</span>
                                        <h4>Buzzer</h4>
                                    </li>
                                    <li>
                                        <span className="num">7</span>
                                        <h4>Temperature and Humidity Sensor</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="disassambley-tab-pane"
                    role="tabpanel"
                    aria-labelledby="disassambley-tab"
                    tabIndex={0}
                >
                    <div className="row mob-disassamble">
                        <div className="col-md-6">
                            <div className="disassamble-img">
                                <div className="glow-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2023/12/disassambley-cair-monitor.png" alt="" />
                                </div>
                            </div>
                            <div className="disassamble-glow-img">
                                <div className="glow-img">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-inside-parts-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="disassamble-text">
                                <h2>CAir+</h2>
                                <h3>Air Quality Monitor</h3>
                                <p>
                                    Prana Air employs a holistic approach to assess indoor air quality using its proprietary Air Quality
                                    Index (AQI). Through its innovative technology, Prana Air monitors pollutants such as PM2.5 and PM10,
                                    alongside particle counts, temperature, humidity, total volatile organic compounds (TVOC), and
                                    formaldehyde (HCHO).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
