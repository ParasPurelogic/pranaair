"use client"

export default function AirQualityStandardTabs() {
    return (
        <div className="page-tabs out">
            <ul className="nav nav-tabs" id="standard-tabs-nav" role="tablist">
                <li className="nav-item home-tab-title">
                    <button
                        className="nav-link active"
                        id="indoor-standard-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#indoor-standard"
                        type="button"
                        role="tab"
                        aria-controls="indoor-standard"
                        aria-selected="true"
                    >
                        <span className="ult-span-text">Indoor</span>
                    </button>
                </li>
                <li className="nav-item home-tab-title">
                    <button
                        className="nav-link"
                        id="outdoor-standard-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#outdoor-standard"
                        type="button"
                        role="tab"
                        aria-controls="outdoor-standard"
                        aria-selected="false"
                    >
                        <span className="ult-span-text">Outdoor</span>
                    </button>
                </li>
            </ul>

            <div className="tab-content">
                <div
                    className="tab-pane fade show active"
                    id="indoor-standard"
                    role="tabpanel"
                    aria-labelledby="indoor-standard-tab"
                >
                    <div className="ult_tabitemname">
                        <div className="air-standard-parameter">
                            <ul>
                                <li>
                                    <strong>Parameters:</strong>
                                </li>
                                <li>PM 2.5</li>
                                <li>O3</li>
                                <li>TVOC</li>
                                <li>HCHO</li>
                                <li>CO</li>
                            </ul>
                            <ul>
                                <li>
                                    <strong>WELL:</strong>
                                </li>
                                <li>35 µg/m3</li>
                                <li>&lt;9 ppm</li>
                                <li>&lt;500 µg/m3</li>
                                <li>&lt;27 ppb</li>
                                <li>&lt;51 ppb</li>
                            </ul>
                            <ul>
                                <li>
                                    <strong>LEED:</strong>
                                </li>
                                <li>15 µg/m3</li>
                                <li>10 ppm</li>
                                <li>500 µg/m3</li>
                                <li>27 ppb</li>
                                <li>.075 ppm</li>
                            </ul>
                            <ul>
                                <li>
                                    <strong>ASHRAE:</strong>
                                </li>
                                <li>35 µg/m3</li>
                                <li>11 ppm</li>
                                <li>–</li>
                                <li>33 µg/m3</li>
                                <li>.075 ppm</li>
                            </ul>
                            <ul>
                                <li>
                                    <strong>WHO-Europe:</strong>
                                </li>
                                <li>–</li>
                                <li>10 ppm (8h)</li>
                                <li>–</li>
                                <li>0.1 mg/m3</li>
                                <li>0.064 ppm (8h)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="outdoor-standard" role="tabpanel" aria-labelledby="outdoor-standard-tab">
                    <div className="ult_tabitemname">
                        <div className="air-standard-parameter">
                            <ul>
                                <li>
                                    <strong>Parameters:</strong>
                                </li>
                                <li>PM 2.5</li>
                                <li>PM 10</li>
                                <li>O3</li>
                                <li>NO2</li>
                                <li>SO2</li>
                            </ul>
                            <ul>
                                <li>
                                    <strong>Time</strong>
                                </li>
                                <li>
                                    Annual Mean
                                    <br /> 24-hr Mean.
                                </li>
                                <li>
                                    Annual Mean
                                    <br /> 24-hr Mean.
                                </li>
                                <li>8-hr Mean.</li>
                                <li>
                                    Annual Mean
                                    <br /> 1-hr Mean.
                                </li>
                                <li>24-hr Mean.</li>
                            </ul>
                            <ul>
                                <li>
                                    <strong>WHO</strong>
                                </li>
                                <li>
                                    5 µg/m3
                                    <br /> 15 µg/m3
                                </li>
                                <li>
                                    5 µg/m3
                                    <br /> 45 µg/m3
                                </li>
                                <li>100 µg/m3</li>
                                <li>
                                    10 µg/m3
                                    <br /> 200 µg/m3
                                </li>
                                <li>40 µg/m3</li>
                            </ul>
                            <ul>
                                <li>
                                    <strong>India (CPCB)</strong>
                                </li>
                                <li>
                                    40 µg/m3
                                    <br /> 60 µg/m3
                                </li>
                                <li>
                                    60 µg/m3
                                    <br /> 100 µg/m3
                                </li>
                                <li>100 µg/m3</li>
                                <li>
                                    40 µg/m3
                                    <br /> 80 µg/m3 (24-hr)
                                </li>
                                <li>80 µg/m3</li>
                            </ul>
                            <ul>
                                <li>
                                    <strong>US (EPA)</strong>
                                </li>
                                <li>
                                    15 µg/m3
                                    <br /> 35 µg/m3
                                </li>
                                <li>
                                    –<br /> 150 µg/m3
                                </li>
                                <li>0.070 ppm</li>
                                <li>
                                    53 ppb
                                    <br /> 100 ppb
                                </li>
                                <li>75 ppb (1-hr)</li>
                            </ul>
                            <ul>
                                <li>
                                    <strong>European (EEA)</strong>
                                </li>
                                <li>
                                    Limit value, 25 µg/m3
                                    <br /> –
                                </li>
                                <li>
                                    Limit value, 40 µg/m3
                                    <br /> Limit value, 50 µg/m3 (1-hr)
                                </li>
                                <li>Target value, 120µg/m3</li>
                                <li>
                                    40 µg/m3
                                    <br /> Limit value, 200 µg/m3
                                </li>
                                <li>–</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
