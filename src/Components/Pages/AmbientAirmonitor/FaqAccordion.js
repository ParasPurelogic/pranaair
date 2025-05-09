export default function FaqAccordion() {
    return (
        <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                        aria-expanded="true"
                        aria-controls="faq1"
                    >
                        1. What parameters OxyCo does monitor?
                    </button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                        OxyCo is designed to monitor real-time Oxygen, carbon monoxide, temperature and humidity in your air.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                        aria-expanded="false"
                        aria-controls="faq2"
                    >
                        2. What is the battery capacity of the OxyCo?
                    </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                        The compact monitor is packed with a 1000mAh battery that works for a long time.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                        aria-expanded="false"
                        aria-controls="faq3"
                    >
                        3. How can I access OxyCo data?
                    </button>
                </h2>
                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                        You can seamlessly access the OxyCo data by downloading it in different formats or transferring it to your
                        email.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                        aria-expanded="false"
                        aria-controls="faq4"
                    >
                        4. Why do Oxygen Calibration?
                    </button>
                </h2>
                <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                        The OxyCo monitor performs Oxygen Calibration to maintain optimal accuracy in the device readings.
                    </div>
                </div>
            </div>
        </div>
    )
}
