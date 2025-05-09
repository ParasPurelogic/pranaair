"use client"

export default function AirQualityTypeTabs() {
    return (
        <div className="page-tabs out">
            <ul className="nav nav-tabs" id="type-tabs-nav" role="tablist">
                <li className="nav-item home-tab-title">
                    <button
                        className="nav-link active"
                        id="indoor-type-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#indoor-type"
                        type="button"
                        role="tab"
                        aria-controls="indoor-type"
                        aria-selected="true"
                    >
                        <span className="ult-span-text">Ambient Monitoring</span>
                    </button>
                </li>
                <li className="nav-item home-tab-title">
                    <button
                        className="nav-link"
                        id="outdoor-type-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#outdoor-type"
                        type="button"
                        role="tab"
                        aria-controls="outdoor-type"
                        aria-selected="false"
                    >
                        <span className="ult-span-text">Indoor Monitoring</span>
                    </button>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="indoor-type" role="tabpanel" aria-labelledby="indoor-type-tab">
                    <div className="ult_tabitemname">
                        <div className="air-quality-type">
                            <div className="air-quality-type-content">
                                <h3>Indoor Air Quality</h3>
                                <p>
                                    Indoor air quality (IAQ) refers to the air quality within and around buildings and structures,
                                    especially as it relates to the health and comfort of building occupants. Understanding and
                                    controlling common pollutants indoors can help reduce your risk of indoor health concerns.
                                </p>
                                <p>
                                    Indoor air can be 2-5 times more polluted than outdoor air. Poor indoor air quality has been linked to
                                    a range of health issues, from minor discomfort to serious respiratory conditions.
                                </p>
                            </div>
                            <div className="air-quality-type-image">
                                <img className="types-img" src="https://www.pranaair.com/wp-content/uploads/2024/09/Prana-sense.webp" alt="Indoor Air Quality" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="outdoor-type" role="tabpanel" aria-labelledby="outdoor-type-tab">
                    <div className="ult_tabitemname">
                        <div className="air-quality-type">
                            <div className="air-quality-type-content">
                                <h3>Outdoor Air Quality</h3>
                                <p>
                                    Outdoor air quality refers to the condition of the air in the open environment. It is affected by a
                                    variety of factors including industrial emissions, vehicle exhaust, weather conditions, wildfires, and
                                    other natural and human activities.
                                </p>
                                <p>
                                    Poor outdoor air quality can have significant impacts on human health, particularly for vulnerable
                                    populations such as children, the elderly, and those with pre-existing respiratory or cardiovascular
                                    conditions.
                                </p>
                            </div>
                            <div className="air-quality-type-image">
                                <img className="types-img" src="https://www.pranaair.com/wp-content/uploads/2024/09/Indoor-monitor.webp" alt="Outdoor Air Quality" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
