export default function PocketConnectivitySteps() {
    return (
        <div className="connectivity-steps">
            <ul className="nav nav-tabs connectivity-tabs" id="connectivityTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="connectivity-step nav-link active"
                        id="step1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#step1"
                        type="button"
                        role="tab"
                        aria-controls="step1"
                        aria-selected="true"
                    >
                        <div className="step-icon">
                            <img src="https://www.pranaair.com/wp-content/uploads/2023/08/install.png.png" alt="Install AQI App" />
                        </div>
                        <div className="step-content">
                            <h4 className="step-title">1. INSTALL AQI APP & SIGN UP</h4>
                            <p className="step-description">
                                Install the AQI app on your smartphones from the app store. Sign up & log in through your account.
                            </p>
                        </div>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="connectivity-step nav-link"
                        id="step2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#step2"
                        type="button"
                        role="tab"
                        aria-controls="step2"
                        aria-selected="false"
                    >
                        <div className="step-icon">
                            <img src="https://www.pranaair.com/wp-content/uploads/2023/09/connect.png" alt="Connect Device" />
                        </div>
                        <div className="step-content">
                            <h4 className="step-title">2. CONNECT THE DEVICE WITH THE APP</h4>
                            <p className="step-description">
                                Go to My Device & select Pocket PM2.5 Monitor. Long press the power button on top of the device until a
                                QR code appears on the screen.
                            </p>
                        </div>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="connectivity-step nav-link"
                        id="step3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#step3"
                        type="button"
                        role="tab"
                        aria-controls="step3"
                        aria-selected="false"
                    >
                        <div className="step-icon">
                            <img src="https://www.pranaair.com/wp-content/uploads/2023/09/scan-qr-code.png" alt="Scan QR Code" />
                        </div>
                        <div className="step-content">
                            <h4 className="step-title">3. SCAN THE QR & CONFIGURE WIFI</h4>
                            <p className="step-description">
                                Scan the QR code or Enter the device ID displayed on your device screen. Fill in your Wi-Fi details.
                                Your device should successfully be connected now.
                            </p>
                        </div>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="connectivity-step nav-link"
                        id="step4-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#step4"
                        type="button"
                        role="tab"
                        aria-controls="step4"
                        aria-selected="false"
                    >
                        <div className="step-icon">
                            <img src="https://www.pranaair.com/wp-content/uploads/2023/09/data.png" alt="Get Insightful Data" />
                        </div>
                        <div className="step-content">
                            <h4 className="step-title">4. NOW GET THE INSIGHTFUL DATA-</h4>
                            <p className="step-description">
                                Analyse the PM2.5 level in real-time & historical data stored in the AQI cloud through the app on your
                                smartphone.
                            </p>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    )
}
