"use client"

import { useState } from "react"

export default function VisualTabs() {
    const [activeVisualTab, setActiveVisualTab] = useState("section1")

    return (
        <>
            <div className="graph-minitor-device">
                <div id="section1" className={`ntabcontent ${activeVisualTab === "section1" ? "d-block" : "d-none"}`}>
                    <div className="show-img">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/Main-screen.webp"
                            alt="aqi tv app for pocket pm2.5 monitor"
                        />
                    </div>
                    <h5>Displays indoor and outdoor data of AQI with LED lights highlighting each pollutant.</h5>
                </div>

                <div id="section2" className={`ntabcontent ${activeVisualTab === "section2" ? "d-block" : "d-none"}`}>
                    <div className="show-img">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/Graph-screen.webp"
                            alt="prana air cair air quality monitor graph screen"
                        />
                    </div>
                    <h5>Check the air quality trend in your house with the graph of quality ups and downs.</h5>
                </div>

                <div id="section3" className={`ntabcontent ${activeVisualTab === "section3" ? "d-block" : "d-none"}`}>
                    <div className="show-img">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/Concentrated-Value-visuals.webp"
                            alt=" prana air cair air quality monitor particle counts"
                        />
                    </div>
                    <h5>Ensure real-time values of each pollutant with its condition as by different colors</h5>
                </div>

                <div id="section4" className={`ntabcontent ${activeVisualTab === "section4" ? "d-block" : "d-none"}`}>
                    <div className="show-img">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/Clock-Screen.webp"
                            alt="prana air cair air quality monitor clock screen"
                        />
                    </div>
                    <h5>Activate the screen saver on your device to make it a digital clock with AQI.</h5>
                </div>

                <div id="section5" className={`ntabcontent ${activeVisualTab === "section5" ? "d-block" : "d-none"}`}>
                    <div className="show-img">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2025/01/Parameter-Ranges.webp"
                            alt="prana air cair air quality monitor parameter ranges"
                        />
                    </div>
                    <h5>Check the Air quality parameters in your room and decide per the status from good to severe.</h5>
                </div>
            </div>

            <div className="new-ntabb">
                <button
                    className={`ntab ntablinks ${activeVisualTab === "section1" ? "active" : ""}`}
                    onClick={() => setActiveVisualTab("section1")}
                >
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/concentrated-values.png"
                        alt="prana air cair air quality monitor particle counts"
                    />
                    <h5>Main Screens</h5>
                </button>
                <button
                    className={`ntab ntablinks ${activeVisualTab === "section2" ? "active" : ""}`}
                    onClick={() => setActiveVisualTab("section2")}
                >
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/humi-graph.png"
                        alt="prana air cair air quality monitor graph screen"
                    />
                    <h5>Historic Graphs</h5>
                </button>
                <button
                    className={`ntab ntablinks ${activeVisualTab === "section3" ? "active" : ""}`}
                    onClick={() => setActiveVisualTab("section3")}
                >
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/concentration-value.png"
                        alt="prana air cair air quality monitor concentration screen"
                    />
                    <h5>Concentrated Values</h5>
                </button>
                <button
                    className={`ntab ntablinks ${activeVisualTab === "section4" ? "active" : ""}`}
                    onClick={() => setActiveVisualTab("section4")}
                >
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/clock-screen.png"
                        alt="prana air cair air quality monitor clock screen"
                    />
                    <h5>Screen saver</h5>
                </button>
                <button
                    className={`ntab ntablinks ${activeVisualTab === "section5" ? "active" : ""}`}
                    onClick={() => setActiveVisualTab("section5")}
                >
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/air-qualtiy-parameters.png"
                        alt="prana air cair air quality monitor parameters"
                    />
                    <h5>Parameter Range</h5>
                </button>
            </div>
        </>
    )
}
