export default function PocketDisplayContent() {
    return (
        <div className="tab-content" id="pocketDisplayTabContent">
            <div className="tab-pane fade show active" id="aqi" role="tabpanel" aria-labelledby="aqi-tab">
                <div className="display-device">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pocket-pm2.5-monitor-wifi.png"
                        alt="PM2.5 monitor face and number screen"
                        className="display-device-image"
                    />
                </div>
            </div>
            <div className="tab-pane fade" id="graph" role="tabpanel" aria-labelledby="graph-tab">
                <div className="display-device">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pm2.5-monitor-graph.png"
                        alt="PM2.5 monitor graph screen"
                        className="display-device-image"
                    />
                </div>
            </div>
            <div className="tab-pane fade" id="particle" role="tabpanel" aria-labelledby="particle-tab">
                <div className="display-device">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-pm2.5-monitor-particle-count.png"
                        alt="PM2.5 monitor particle count screen"
                        className="display-device-image"
                    />
                </div>
            </div>
        </div>
    )
}
