"use client"

export default function PranaSenseFaqAccordion() {
    return (
        <section className="tab-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="frequently-asked-questions">
                            <h2>
                                Frequently Asked <span className="faq">Questions</span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-8"></div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="accordion" id="faqAccordion">
                            <div className="accordion-item my-tab-section">
                                <h4 className="accordion-header">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        1. What makes Prana Sense different from other air quality monitors?
                                    </button>
                                </h4>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>
                                            Prana Sense is not your ordinary outdoor air quality monitor because it is a complete
                                            environmental monitoring device. Additionally, it can operate with solar power.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item my-tab-section">
                                <h4 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        2. Can I use Prana Sense in remote areas?
                                    </button>
                                </h4>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>
                                            Yes, the Prana Sense monitor can be used in remote areas as it has an option for solar panels. It
                                            can connect directly to the device without the need for a controller.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item my-tab-section">
                                <h4 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        3. What parameters can be monitored with the Dual sensor technology?
                                    </button>
                                </h4>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>
                                            Dual-sensor technology is available for Particulate Matter. It offers the continuous monitoring of
                                            PM in the air without facing any difficulty.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item my-tab-section">
                                <h4 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        4. What if both sensors data does not aligned?
                                    </button>
                                </h4>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>
                                            In dual-sensor technology, the reserve sensor works for one month to check the primary sensors
                                            working capabilities. If both sensors data is not aligned, the reserve sensor takes over and the
                                            primary sensor goes to sleep.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
