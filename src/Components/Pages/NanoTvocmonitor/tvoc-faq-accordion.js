export default function TVOCFaqAccordion() {
    return (
        <div className="accordion" id="tvocFaqAccordion">
            <div className="accordion-item faq-item">
                <h4 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        1. What gases can this nano monitor of Prana Air detect?
                    </button>
                </h4>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#tvocFaqAccordion"
                >
                    <div className="accordion-body faq-para">
                        <p>This nano monitor is designed to detect TVOC and HCHO gases.</p>
                    </div>
                </div>
            </div>

            <div className="accordion-item faq-item">
                <h4 className="accordion-header" id="headingTwo">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        2. Can this nano monitor detect gases other than TVOC and HCHO?
                    </button>
                </h4>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#tvocFaqAccordion"
                >
                    <div className="accordion-body faq-para">
                        <p>No, this device is specifically designed to detect TVOC and HCHO gases only.</p>
                    </div>
                </div>
            </div>

            <div className="accordion-item faq-item">
                <h4 className="accordion-header" id="headingThree">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                        3. Can Prana Air nano TVOC/HCHO monitor measure temperature and humidity levels?
                    </button>
                </h4>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#tvocFaqAccordion"
                >
                    <div className="accordion-body faq-para">
                        <p>Yes, this device also measures temperature and humidity levels in addition to TVOC and HCHO gases.</p>
                    </div>
                </div>
            </div>

            <div className="accordion-item faq-item">
                <h4 className="accordion-header" id="headingFour">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                    >
                        4. How accurate is this nano TVOC/HCHO monitor?
                    </button>
                </h4>
                <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#tvocFaqAccordion"
                >
                    <div className="accordion-body faq-para">
                        <p>The device is equipped with high-precision sensors that provide accurate and reliable data (±5%).</p>
                    </div>
                </div>
            </div>

            <div className="accordion-item faq-item">
                <h4 className="accordion-header" id="headingFive">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                    >
                        5. Is this nano monitor easy to use?
                    </button>
                </h4>
                <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#tvocFaqAccordion"
                >
                    <div className="accordion-body faq-para">
                        <p>Yes, the device is designed to be user-friendly and easy to operate.</p>
                    </div>
                </div>
            </div>

            <div className="accordion-item faq-item">
                <h4 className="accordion-header" id="headingSix">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                    >
                        6. Is Prana Air nano monitor portable?
                    </button>
                </h4>
                <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#tvocFaqAccordion"
                >
                    <div className="accordion-body faq-para">
                        <p>Yes, the device is small and compact, making it easy to carry around wherever you go.</p>
                    </div>
                </div>
            </div>

            <div className="accordion-item faq-item">
                <h4 className="accordion-header" id="headingSeven">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                    >
                        7. Does this monitor have alarm system?
                    </button>
                </h4>
                <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#tvocFaqAccordion"
                >
                    <div className="accordion-body faq-para">
                        <p>
                            Yes, it gives an alarm sound when the TVOCs value is yellow color{" "}
                            <b>
                                0.100mg/m<sup>3</sup>.{" "}
                            </b>{" "}
                            It will start a beep cycle alarm, once every 10 minutes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
