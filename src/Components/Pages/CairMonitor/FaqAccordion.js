
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
                    >
                        1. What does Prana Air Cair+ air quality monitor measure?
                    </button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                        Prana Air Cair+ is an air quality monitor designed to measure indoor air pollutants - AQI, PM2.5, PM10, CO2,
                        TVOC, HCHO, Temperature, and Humidity. It provides accurate data on various pollutants, helping you
                        understand and improve your indoor air quality.
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
                    >
                        2. How does the device connect to the internet?
                    </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                        Cair+ monitor features WiFi connectivity, allowing it to seamlessly connect to your home network. This
                        enables you to access real-time air quality data on various devices, including your mobile, tablet, TV app,
                        and through a web dashboard.
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
                    >
                        3. What platforms are supported for accessing data?
                    </button>
                </h2>
                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                        Prana Air Cair+ device supports multiple platforms for data access. You can monitor air quality data on your
                        mobile devices (iOS and Android), tablets, and even your television. Additionally, a web dashboard is
                        available for easy access via a computer.
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
                    >
                        4. Is Cair+ monitor portable?
                    </button>
                </h2>
                <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                        Yes, Prana Air Cair+ monitor is designed to be portable. Its compact size allows you to move it around your
                        living spaces effortlessly, ensuring that you can monitor air quality in different rooms or areas of your
                        home.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq5"
                        aria-expanded="false"
                    >
                        5. How accurate is the air quality data provided by Cair+?
                    </button>
                </h2>
                <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body faq-tab-para">
                        Cair+ monitor is known for its high accuracy in measuring air quality. Its advanced sensors provide precise
                        readings of various pollutants, giving you reliable information to make informed decisions about improving
                        your indoor air quality.
                    </div>
                </div>
            </div>
        </div>
    )
}
