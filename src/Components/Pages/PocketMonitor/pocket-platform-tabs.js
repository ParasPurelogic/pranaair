export default function PocketPlatformTabs() {
    return (
        <div className="platform-tabs-container">
            <ul className="platform-tabs nav nav-tabs" id="platformTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="platform-tab nav-link active"
                        id="aqi-app-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#aqi-app"
                        type="button"
                        role="tab"
                        aria-controls="aqi-app"
                        aria-selected="true"
                    >
                        <span className="platform-icon">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/09/leaf-icon.png"
                                alt=""
                                className="tab-leaf-icon"
                            />
                        </span>
                        AQI App
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="platform-tab nav-link"
                        id="aqi-dashboard-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#aqi-dashboard"
                        type="button"
                        role="tab"
                        aria-controls="aqi-dashboard"
                        aria-selected="false"
                    >
                        <span className="platform-icon d-none">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/09/leaf-icon.png"
                                alt=""
                                className="tab-leaf-icon"
                            />
                        </span>
                        AQI Dashboard
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="platform-tab nav-link"
                        id="aqi-tv-app-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#aqi-tv-app"
                        type="button"
                        role="tab"
                        aria-controls="aqi-tv-app"
                        aria-selected="false"
                    >
                        <span className="platform-icon d-none">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/09/leaf-icon.png"
                                alt=""
                                className="tab-leaf-icon"
                            />
                        </span>
                        AQI TV App
                    </button>
                </li>
            </ul>
        </div>
    )
}
