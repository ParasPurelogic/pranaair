"use client"

export default function PollutantTabs() {
    return (
        <div className="tabs-container">
            <ul className="nav nav-tabs" id="pollutantTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="pm25-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#pm25-content"
                        type="button"
                        role="tab"
                        aria-controls="pm25-content"
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
                        data-bs-target="#co2-content"
                        type="button"
                        role="tab"
                        aria-controls="co2-content"
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
                        data-bs-target="#tvoc-content"
                        type="button"
                        role="tab"
                        aria-controls="tvoc-content"
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
                        data-bs-target="#hcho-content"
                        type="button"
                        role="tab"
                        aria-controls="hcho-content"
                        aria-selected="false"
                    >
                        HCHO
                    </button>
                </li>
            </ul>

            <div className="tab-content" id="pollutantTabsContent">
                <div className="tab-pane fade show active" id="pm25-content" role="tabpanel" aria-labelledby="pm25-tab">
                    <div className="tab-para-txt">
                        <h4 style={{ textAlign: "justify" }}>
                            <strong>Its Sources:</strong>
                        </h4>
                        <p style={{ textAlign: "justify" }}>
                            According to WHO, 9 out of 10 people breathe air containing high levels of pollutants and over 7 million
                            people die each year as a result of tiny particles in contaminated air. PM2.5 and PM10 are tiny breathable
                            particles and major contributors to these pollutants that are suspended in the air. Some of the major
                            sources include cooking, incense burning, fungi mold, and contaminants carried in by outsiders.
                        </p>
                        <h4 style={{ textAlign: "justify" }}>
                            <strong>Health Impacts:</strong>
                        </h4>
                        <p style={{ textAlign: "justify" }}>
                            Irritation in the eyes, nose, and throat, coughing, sneezing, and breathing difficulties are some of its
                            short-term health impacts. Long-term exposures can worsen asthma and lung difficulties, as well as cause
                            heart attacks and irregular heartbeat.
                        </p>
                    </div>
                </div>

                <div className="tab-pane fade" id="co2-content" role="tabpanel" aria-labelledby="co2-tab">
                    <div className="tab-para-txt">
                        <h4 style={{ textAlign: "justify" }}>
                            <strong>Its Sources:</strong>
                        </h4>
                        <p style={{ textAlign: "justify" }}>
                            Outdoor CO2, breathing, contaminants carried in by outsiders, and the ventilation rate of the room or
                            building are all major sources of CO2.
                        </p>
                        <h4 style={{ textAlign: "justify" }}>
                            <strong>Health Impacts:</strong>
                        </h4>
                        <p style={{ textAlign: "justify" }}>
                            Normal ambient CO2 levels are 220-400 ppm. but indoor CO2 levels can reach 2000 ppm, causing lethargy,
                            drowsiness, and stale, stuffy air. Short-term impacts include poor focus and an elevated heart rate.
                            Long-term consequences include coma, death, and impaired brain development in children due to oxygen
                            deprivation.
                        </p>
                    </div>
                </div>

                <div className="tab-pane fade" id="tvoc-content" role="tabpanel" aria-labelledby="tvoc-tab">
                    <div className="tab-para-txt">
                        <h4 style={{ textAlign: "justify" }}>
                            <span style={{ color: "#000000" }}>
                                <strong>Its Sources:</strong>
                            </span>
                        </h4>
                        <p style={{ textAlign: "justify" }}>
                            Total Volatile Organic Compounds (TVOC) are the total amount of gases and smells released by numerous
                            toxins and chemicals present in daily items such as paints and varnishes, cosmetics, carpets, curtains,
                            furniture, hobby products, and so on. If you have poor ventilation or an enclosed space, they contaminate
                            the fresh air within.
                        </p>
                        <h4 style={{ textAlign: "justify" }}>
                            <span style={{ color: "#000000" }}>
                                <strong>Health Impacts:</strong>
                            </span>
                        </h4>
                        <p style={{ textAlign: "justify" }}>
                            Headaches, nausea, coughing, skin irritation, and other short-term consequences of TVOC include headaches,
                            nausea, coughing, and skin irritation. Long-term effects on the liver, spleen, blood, and respiratory
                            disorders such as asthma and cancer.
                        </p>
                    </div>
                </div>

                <div className="tab-pane fade" id="hcho-content" role="tabpanel" aria-labelledby="hcho-tab">
                    <div className="tab-para-txt">
                        <h4 style={{ textAlign: "justify" }}>
                            <strong>Its Sources:</strong>
                        </h4>
                        <p style={{ textAlign: "justify" }}>
                            HCHO, or formaldehyde is a compound that evaporates at room temperature. It is a typical indoor air
                            pollutant released by building materials (particleboard, plywood, and other pressed-wood products),
                            smoking, household items, and the use of unvented, fuel-burning equipment such as gas stoves or kerosene
                            space heaters (according to US EPA).
                        </p>
                        <h4 style={{ textAlign: "justify" }}>
                            <strong>Health Impacts:</strong>
                        </h4>
                        <p style={{ textAlign: "justify" }}>
                            Even at low concentrations, it can irritate a persons eyes, nose, throat, and lungs, or induce an asthma
                            attack, according to CARB (California Air Resources Board). Prolonged exposure to formaldehyde can even
                            cause cancer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
