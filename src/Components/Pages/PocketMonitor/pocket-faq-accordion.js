export default function PocketFaqAccordion() {
    return (
        <div className="accordion" id="pocketFaqAccordion">
            <div className="accordion-item faq-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button faq-question"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        <span className="question-number">1.</span>
                        <span className="question-text">What is PM2.5, and why is it important to monitor?</span>
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#pocketFaqAccordion"
                >
                    <div className="accordion-body faq-answer">
                        <p>
                            PM2.5 refers to fine particulate matter with a diameter of 2.5 micrometers or smaller. It includes
                            pollutants like dust, smoke, and pollutants that can be harmful to health. Monitoring PM2.5 levels is
                            crucial because high concentrations can lead to respiratory and cardiovascular problems.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item faq-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                        className="accordion-button faq-question collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        <span className="question-number">2.</span>
                        <span className="question-text">How does Prana Air Pocket PM2.5 monitor work?</span>
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#pocketFaqAccordion"
                >
                    <div className="accordion-body faq-answer">
                        <p>
                            The Prana Air Pocket PM2.5 monitor uses a high-precision laser sensor to detect and measure airborne
                            particles. The sensor counts the number of particles in different size ranges (PM1, PM2.5, and PM10) and
                            calculates the concentration in micrograms per cubic meter (µg/m³). This data is then displayed on the LCD
                            screen and can be transmitted via WiFi to the AQI app for remote monitoring and analysis.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item faq-item">
                <h2 className="accordion-header" id="headingThree">
                    <button
                        className="accordion-button faq-question collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                        <span className="question-number">3.</span>
                        <span className="question-text">Is the Prana Air PM2.5 monitor easy to use?</span>
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#pocketFaqAccordion"
                >
                    <div className="accordion-body faq-answer">
                        <p>
                            Yes, the Prana Air PM2.5 monitor is designed for ease of use. Simply power it on, and it immediately
                            begins measuring air quality. The clear LCD display shows readings in real-time, with color-coded
                            indicators for easy interpretation. Connecting to the AQI app is straightforward with the step-by-step
                            instructions provided.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item faq-item">
                <h2 className="accordion-header" id="headingFour">
                    <button
                        className="accordion-button faq-question collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                    >
                        <span className="question-number">4.</span>
                        <span className="question-text">Is the device portable?</span>
                    </button>
                </h2>
                <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#pocketFaqAccordion"
                >
                    <div className="accordion-body faq-answer">
                        <p>
                            The Pocket PM2.5 Monitor is one of the smallest and most portable air quality monitors available. Weighing
                            just 60 grams and measuring 5.8 x 2.5 x 4.6 cm, it fits easily in your pocket or bag. The 450 mAh battery
                            provides 3-4 hours of continuous use, making it perfect for monitoring air quality on the go.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item faq-item">
                <h2 className="accordion-header" id="headingFive">
                    <button
                        className="accordion-button faq-question collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                    >
                        <span className="question-number">5.</span>
                        <span className="question-text">Is there a mobile app for monitoring the data remotely?</span>
                    </button>
                </h2>
                <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#pocketFaqAccordion"
                >
                    <div className="accordion-body faq-answer">
                        <p>
                            Yes, the Prana Air Pocket PM2.5 Monitor connects to the AQI mobile app (available for both iOS and
                            Android). Through the app, you can view real-time data, historical trends, health advice based on current
                            air quality, and monthly insights. The data is stored in the AQI cloud, allowing you to access it from
                            anywhere at any time.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item faq-item">
                <h2 className="accordion-header" id="headingSix">
                    <button
                        className="accordion-button faq-question collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                    >
                        <span className="question-number">6.</span>
                        <span className="question-text">Is Prana Air PM2.5 monitor suitable for outdoor use?</span>
                    </button>
                </h2>
                <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#pocketFaqAccordion"
                >
                    <div className="accordion-body faq-answer">
                        <p>
                            Yes, the Prana Air PM2.5 monitor is designed for both indoor and outdoor use. Its portable design makes it
                            ideal for checking air quality in various environments, from your home and office to outdoor spaces like
                            parks or construction sites. The device can measure PM levels up to 999 µg/m³, making it suitable for a
                            wide range of air quality conditions.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item faq-item">
                <h2 className="accordion-header" id="headingSeven">
                    <button
                        className="accordion-button faq-question collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                    >
                        <span className="question-number">7.</span>
                        <span className="question-text">Does it have warranty period?</span>
                    </button>
                </h2>
                <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#pocketFaqAccordion"
                >
                    <div className="accordion-body faq-answer">
                        <p>
                            Yes, the Prana Air Pocket PM2.5 Monitor comes with a standard 1-year manufacturers warranty that covers
                            defects in materials and workmanship under normal use. Extended warranty options are also available at the
                            time of purchase. For warranty claims or service, please contact our customer support team with your
                            purchase details.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
