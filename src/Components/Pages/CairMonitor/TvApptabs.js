"use client"
import { useState } from "react"

export default function TvAppTabs() {
    const [activeTvTab, setActiveTvTab] = useState("tab5")

    return (
        <div className="tav-app-screen">
            <div id="tab5" className={`tabb ${activeTvTab === "tab5" ? "d-block" : "d-none"}`}>
                <div className="show-img">
                    <h3>TV App</h3>
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/01/indoor-outdoor-aqi-range-on-tv-app.jpg"
                        alt="indoor outdoor aqi range on tv app"
                    />
                </div>
            </div>

            <div id="tab6" className={`tabb ${activeTvTab === "tab6" ? "d-block" : "d-none"}`}>
                <div className="show-img">
                    <h3>TV App</h3>
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/01/indoor-outdoor-all-parameters-on-tv-screen.jpg"
                        alt="aqi-tv-app-screen"
                    />
                </div>
            </div>

            <div id="tab7" className={`tabb ${activeTvTab === "tab7" ? "d-block" : "d-none"}`}>
                <div className="show-img">
                    <h3>TV App</h3>
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/01/outdoor-and-indoor-data-show-in-tv-app.jpg"
                        alt="outdoor and indoor data show in tv app"
                    />
                </div>
            </div>

            <div id="tab8" className={`tabb ${activeTvTab === "tab8" ? "d-block" : "d-none"}`}>
                <div className="show-img">
                    <h3>TV App</h3>
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/01/aqi-data-in-tv-screen.jpg"
                        alt="aqi data in tv screen"
                    />
                </div>
            </div>

            <div className="all-btn">
                <button
                    className={`tab-button ${activeTvTab === "tab5" ? "active" : ""}`}
                    onClick={() => setActiveTvTab("tab5")}
                >
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/01/indoor-outdoor-aqi-range-on-tv-app.jpg"
                        alt="indoor outdoor aqi range on tv app"
                    />
                </button>
                <button
                    className={`tab-button ${activeTvTab === "tab6" ? "active" : ""}`}
                    onClick={() => setActiveTvTab("tab6")}
                >
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/01/indoor-outdoor-all-parameters-on-tv-screen.jpg"
                        alt="aqi tv app for pocket pm2.5 monitor"
                    />
                </button>
                <button
                    className={`tab-button ${activeTvTab === "tab7" ? "active" : ""}`}
                    onClick={() => setActiveTvTab("tab7")}
                >
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/01/outdoor-and-indoor-data-show-in-tv-app.jpg"
                        alt="outdoor and indoor data show in tv app"
                    />
                </button>
                <button
                    className={`tab-button ${activeTvTab === "tab8" ? "active" : ""}`}
                    onClick={() => setActiveTvTab("tab8")}
                >
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/01/aqi-data-in-tv-screen.jpg"
                        alt="aqi data in tv screen"
                    />
                </button>
            </div>
        </div>
    )
}
