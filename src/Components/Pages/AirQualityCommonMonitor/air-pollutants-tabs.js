"use client"

export default function AirPollutantsTabs() {
    return (
        <div className="key-parameter">
            <ul className="nav nav-tabs" id="pollutant-tabs-nav" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="pm-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#pm"
                        type="button"
                        role="tab"
                        aria-controls="pm"
                        aria-selected="true"
                    >
                        PM2.5/10
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="co2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#co2"
                        type="button"
                        role="tab"
                        aria-controls="co2"
                        aria-selected="false"
                    >
                        CO2
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="tvoc-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#tvoc"
                        type="button"
                        role="tab"
                        aria-controls="tvoc"
                        aria-selected="false"
                    >
                        TVOC
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="hcho-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#hcho"
                        type="button"
                        role="tab"
                        aria-controls="hcho"
                        aria-selected="false"
                    >
                        HCHO
                    </button>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="pm" role="tabpanel" aria-labelledby="pm-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="healt-impact-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/sources-of-pm2.5.jpg"
                                    alt="Sources of PM2.5"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 pm-pg">
                            <div className="key-para">
                                <h3>Particulate Matter</h3>
                                <h4>Sources</h4>
                                <p>
                                    Indoor sources- cooking, candle burning, tobacco smoking, kerosene heaters, construction activities.
                                    Outdoor sources- forest fires, earthquakes, volcanic eruptions, power plants, waste treatment plants,
                                    oil refineries, etc.
                                </p>
                                <h4>Health Impact</h4>
                                <p>
                                    PM 2.5 diameter is less than 2.5 microns and easily enters the lungs and bloodstream. It causes
                                    sneezing, inflammation, skin allergies, asthma, coughing, pneumonia, irregular heartbeat, nonfatal
                                    heart attacks, etc. A high PM 2.5 level reduces the visibility. It can also lead to environmental
                                    changes as well. PM10 causes allergies that can influence sensitive groups.
                                </p>

                                <a className="key-btn" href="/what-is-particulate-matter-pm/">
                                    Explore More
                                </a>

                                <img
                                    className="para-bg"
                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/pm-bg.png"
                                    alt="background img"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="co2" role="tabpanel" aria-labelledby="co2-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="healt-impact-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/sources-of-CO2.jpg"
                                    alt="Sources of CO2"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 co-pg">
                            <div className="key-para">
                                <h3>CO2</h3>
                                <h4>Sources</h4>
                                <p>
                                    The top source of indoor presence of CO2 is humans. As humans inhale oxygen and exhale CO2. It also
                                    releases from heating devices, oil-burning coal, and gas burning. CO2 is also emitted because of
                                    Deforestation or soil degradation.
                                </p>
                                <h4>Health Impact</h4>
                                <p>
                                    High CO2 levels highly influence the individuals performance in a school or office. CO2 exposure can
                                    cause headaches, dizziness, restlessness, breathing difficulty, increased heart rate, and other
                                    symptoms. CO2 emissions also cause global warming. Long-term exposure can cause extreme health issues.
                                    Such as cardiac arrest, and impaired cognitive function.
                                </p>

                                <a className="key-btn" href="/what-is-carbon-dioxide-co2/">
                                    Explore More
                                </a>

                                <img
                                    className="para-bg"
                                    src="https://www.pranaair.com/wp-content/uploads/2024/03/CO2-bg.png"
                                    alt="background img"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="tvoc" role="tabpanel" aria-labelledby="tvoc-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="healt-impact-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/sources-of-tvoc-odor-gas.jpg"
                                    alt="Sources of TVOC"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 tvoc-pg">
                            <div className="key-para">
                                <h3>TVOC</h3>
                                <h4>Sources</h4>
                                <p>
                                    Indoor- Paint, glue, soaps, fabrics, wood, cleansers, plastic products, solvents, etc. TVOCs vaporate
                                    at room temperature and release into the air. Outdoor sources of TVOCs are industrial processes,
                                    wildfires, and vehicle emissions.
                                </p>
                                <h4>Health Impact</h4>
                                <p>
                                    TVOCs evaporate at room temperature. It causes strong odors that cause headaches, fatigue (tiredness),
                                    dizziness, nosebleeding, and eye, nose, and throat irritation. High exposure to TVOCs can cause severe
                                    health issues. Such as nausea, asthma, and damage to the kidneys, liver, or nervous system. Some
                                    chemicals can also cause cancer in animals.
                                </p>

                                <a className="key-btn" href="/what-is-voc/">
                                    Explore More
                                </a>

                                <img
                                    className="para-bg"
                                    src="https://www.pranaair.com/wp-content/uploads/2024/03/TVOC-bg.png"
                                    alt="background img"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="hcho" role="tabpanel" aria-labelledby="hcho-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="healt-impact-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/sources-of-hcho-gas.jpg"
                                    alt="Sources of HCHO"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 hcho-pg">
                            <div className="key-para">
                                <h3>HCHO</h3>
                                <h4>Sources</h4>
                                <p>
                                    Indoor: Smoking, cleaning products, furniture, burning fuel, cosmetics, paint, incense lighting, etc.
                                    releases HCHO in the indoor air. Outdoor: HCHO releases from natural gases burning, gasoline, etc.
                                </p>
                                <h4>Health Impact</h4>
                                <p>
                                    HCHO exposure can cause extreme health issues. Any individual can face irritation of the eyes, nose,
                                    and throat. It can also lead to skin or lung allergies. With it, it increases the chances of some
                                    types of cancer and also causes consciousness loss, pneumonia, and other extreme health issues. HCHO
                                    exposure can also affect reproductive health.
                                </p>

                                <img
                                    className="para-bg"
                                    src="https://www.pranaair.com/wp-content/uploads/2024/03/HCHO-bg.png"
                                    alt="background img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
