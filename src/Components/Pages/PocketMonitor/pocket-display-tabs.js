export default function PocketDisplayTabs() {
    return (
        <div className="display-content">
            <h2 className="display-title">
                Multiple Data-Displays
                <img src="https://www.pranaair.com/wp-content/uploads/2023/09/leaf-icon.png" alt="" className="leaf-icon" />
                <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt="Prana Air"
                    className="title-icon"
                />
            </h2>
            <p className="display-description">
                Displaying the real-time PM2.5 levels in form of both the emoticon and numerical levels like face, number and
                graph.
            </p>

            <ul className="nav display-options" id="pocketDisplayTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a
                        className="display-option-primary active"
                        id="aqi-tab"
                        data-bs-toggle="tab"
                        href="#aqi"
                        role="tab"
                        aria-controls="aqi"
                        aria-selected="true"
                    >
                        <div className="display-option-icon">
                            <img src="https://www.pranaair.com/wp-content/uploads/2023/08/face-number-icon.png" alt="" />
                        </div>
                        <div className="display-option-content">
                            <h3>AQI, PM 1, PM2.5 & PM10 Display</h3>
                            <p>Front view</p>
                        </div>
                    </a>
                </li>

                <div className="display-options-row">
                    <li className="nav-item" role="presentation">
                        <a
                            className="display-option-secondary"
                            id="graph-tab"
                            data-bs-toggle="tab"
                            href="#graph"
                            role="tab"
                            aria-controls="graph"
                            aria-selected="false"
                        >
                            <div className="display-option-icon">
                                <img src="https://www.pranaair.com/wp-content/uploads/2023/08/graphic-screen.png" alt="" />
                            </div>
                            <div className="display-option-content">
                                <h3>Graph Screen</h3>
                                <p>Historical Data</p>
                            </div>
                        </a>
                    </li>

                    <li className="nav-item" role="presentation">
                        <a
                            className="display-option-secondary"
                            id="particle-tab"
                            data-bs-toggle="tab"
                            href="#particle"
                            role="tab"
                            aria-controls="particle"
                            aria-selected="false"
                        >
                            <div className="display-option-icon">
                                <img src="https://www.pranaair.com/wp-content/uploads/2023/08/number-screen.png" alt="" />
                            </div>
                            <div className="display-option-content">
                                <h3>Particle Count</h3>
                                <p>Numerical View</p>
                            </div>
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    )
}
