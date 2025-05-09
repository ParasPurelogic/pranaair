export default function PocketPlatformContent() {
    return (
        <div className="tab-content" id="platformTabsContent">
            {/* AQI App Content */}
            <div className="tab-pane fade show active" id="aqi-app" role="tabpanel" aria-labelledby="aqi-app-tab">
                <div className="platform-content">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="platform-description">
                                Access the real-time particulate matter PM1, PM2.5, PM10 data
                                <br />
                                of your PM2.5 monitor in AQI mobile app.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="app-info">
                                <h2 className="app-title">Health Advice</h2>
                                <p className="app-subtitle">
                                    Prana Air Pocket PM2.5 Monitor
                                    <br />
                                    offers real-time health advice based
                                    <br />
                                    on current air quality conditions.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="app-features-layout">
                                <div className="app-phone-container">
                                    <img
                                        src="https://www.pranaair.com/wp-content/uploads/2023/08/pm-monitor-mob-app.png"
                                        alt="AQI Mobile App"
                                        className="app-phone-image"
                                    />
                                </div>

                                <div className="app-feature-item feature-01">
                                    <div className="feature-number">01</div>
                                    <h3 className="feature-title">Health Advice</h3>
                                    <div className="feature-image-container">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/09/health-advice-of-pm-pollution.webp"
                                            alt="health advice of pm pollution level on AQI app"
                                            className="feature-image"
                                        />
                                    </div>
                                </div>

                                <div className="app-feature-item feature-02">
                                    <div className="feature-number">02</div>
                                    <h3 className="feature-title">Historic Data</h3>
                                    <div className="feature-image-container">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-pm-datas-on-AQI-app.png"
                                            alt="historic pm data on AQI app from Prana Air Pocket PM Monitor"
                                            className="feature-image"
                                        />
                                    </div>
                                </div>

                                <div className="app-feature-item feature-03">
                                    <div className="feature-number">03</div>
                                    <h3 className="feature-title">Monthly Insight</h3>
                                    <div className="feature-image-container">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/monthly-insight-data.png"
                                            alt="monthly calender pm data on AQI app"
                                            className="feature-image"
                                        />
                                    </div>
                                </div>

                                <div className="app-feature-item feature-04">
                                    <div className="feature-number">04</div>
                                    <h3 className="feature-title">Filtration Score</h3>
                                    <div className="feature-image-container">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/08/filtration-score.png"
                                            alt="air pollution filtration score detected on AQI app"
                                            className="feature-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* AQI Dashboard Content */}
            <div className="tab-pane fade" id="aqi-dashboard" role="tabpanel" aria-labelledby="aqi-dashboard-tab">
                <div className="platform-content">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="platform-description">
                                The dashboard is a free and easy-to-use tool that allows you to
                                <br />
                                connect your PM2.5 monitor and access your data from anywhere
                                <br />
                                in the world.
                            </p>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="dashboard-features">
                                <div className="dashboard-feature-item">
                                    <div className="feature-icon">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/real-time-co2-level.png"
                                            alt="Real-time PM2.5 air quality level"
                                        />
                                    </div>
                                    <div className="feature-text">
                                        <h3>Real-time PM2.5 air quality level</h3>
                                    </div>
                                </div>

                                <div className="dashboard-feature-item">
                                    <div className="feature-icon">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-data.png"
                                            alt="Insightful air quality web-dashboard"
                                        />
                                    </div>
                                    <div className="feature-text">
                                        <h3>Insightful air quality web-dashboard</h3>
                                    </div>
                                </div>

                                <div className="dashboard-feature-item">
                                    <div className="feature-icon">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-co2-graph-level.png"
                                            alt="Historical air quality graphs of PM level"
                                        />
                                    </div>
                                    <div className="feature-text">
                                        <h3>Historical air quality graphs of PM level</h3>
                                    </div>
                                </div>

                                <div className="dashboard-feature-item">
                                    <div className="feature-icon">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/health-recommendation.png"
                                            alt="Air quality health recommendations"
                                        />
                                    </div>
                                    <div className="feature-text">
                                        <h3>Air quality health recommendations</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="dashboard-preview">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/pm2.5-aqi-dashboard.png"
                                    alt="AQI Dashboard Preview"
                                    className="dashboard-preview-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* AQI TV App Content */}
            <div className="tab-pane fade" id="aqi-tv-app" role="tabpanel" aria-labelledby="aqi-tv-app-tab">
                <div className="platform-content">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="platform-description">
                                Get a real-time overview of your PM2.5 air quality on the big
                                <br />
                                screen with AQI TV app.
                            </p>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="tv-app-features">
                                <div className="tv-app-feature-item">
                                    <div className="feature-icon">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/real-time-co2-level.png"
                                            alt="Real-time PM1, PM2.5, PM10 air quality level"
                                        />
                                    </div>
                                    <div className="feature-text">
                                        <h3>Real-time PM1, PM2.5, PM10 air quality level</h3>
                                    </div>
                                </div>

                                <div className="tv-app-feature-item">
                                    <div className="feature-icon">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-data.png"
                                            alt="Historical PM data for 1, 8, 12 hours"
                                        />
                                    </div>
                                    <div className="feature-text">
                                        <h3>Historical PM data for 1, 8, 12 hours.</h3>
                                    </div>
                                </div>

                                <div className="tv-app-feature-item">
                                    <div className="feature-icon">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/control-tv-app-form-mobile.png"
                                            alt="Control AQI TV app from smartphone"
                                        />
                                    </div>
                                    <div className="feature-text">
                                        <h3>Control AQI TV app from smartphone.</h3>
                                    </div>
                                </div>

                                <div className="tv-app-feature-item">
                                    <div className="feature-icon">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/indicate-valid-score-co2.png"
                                            alt="The data indicates air quality score"
                                        />
                                    </div>
                                    <div className="feature-text">
                                        <h3>The data indicates air quality score.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="tv-app-preview">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-tv-app-for-pocket-pm2.5-monitor.webp"
                                    alt="AQI TV App Preview"
                                    className="tv-app-preview-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
