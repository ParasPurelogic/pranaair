import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import PCBProductSlider from "@/Components/Pages/AirPcbBoard/pcb-product-slider"
import { getServerTranslation } from "@/i18n/server"
export default async function PranaAirPCB() {
    const { t } = await getServerTranslation("air-quality-pcb-board")
    // Product data for carousel
    const sensorProducts = [
        {
            id: 59609,
            name: "Sensor 1",
            image: "https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-chlorine-cl2-sensor-with-digital-board.jpg",
        },
        {
            id: 69043,
            name: "Sensor 2",
            image: "https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-chlorine-cl2-sensor-with-digital-board.jpg",
        },
        {
            id: 12661,
            name: "Sensor 3",
            image: "https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-h2s-sensor-with-digital-board-1.jpg",
        },
        {
            id: 12666,
            name: "Sensor 4",
            image: "https://www.pranaair.com/wp-content/uploads/2022/12/prana-air-nitrogen-dioxide-no2-sensor-with-board.jpg",
        },
        {
            id: 59554,
            name: "Sensor 5",
            image: "https://www.pranaair.com/wp-content/uploads/2022/11/prana-air-carbon-monoxide-co-sensor-with-board.jpg",
        },
        {
            id: 69037,
            name: "Sensor 6",
            image: "https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-chlorine-cl2-sensor-with-digital-board.jpg",
        },
        {
            id: 15424,
            name: "Sensor 7",
            image: "https://www.pranaair.com/wp-content/uploads/2022/12/prana-air-nitrogen-dioxide-no2-sensor-with-board.jpg",
        },
    ]
    const monitorProducts = [
        {
            id: 76353,
            name: "Monitor 1",
            image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-portable-alcohol-tester.png",
        },
        {
            id: 77731,
            name: "Monitor 2",
            image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor.png",
        },
        {
            id: 76924,
            name: "Monitor 3",
            image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-tvoc-hcho-odor-monitor.png",
        },
        {
            id: 77733,
            name: "Monitor 4",
            image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-tvoc-hcho-odor-monitor.png",
        },
        {
            id: 52265,
            name: "Monitor 5",
            image: "https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-pocket-co2-monitor-180x180.jpg",
        },
        {
            id: 22466,
            name: "Monitor 6",
            image: "https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-smart-air-quality-monitor-180x180.jpg",
        },
        {
            id: 12151,
            name: "Monitor 7",
            image: "https://www.pranaair.com/wp-content/uploads/2021/04/prana-air-squair-air-monitor.jpg",
        },
        {
            id: 20807,
            name: "Monitor 8",
            image: "https://www.pranaair.com/wp-content/uploads/2023/03/Sensible-monitor-prana-air-180x180.png",
        },
    ]

    return (
        <>
            {/* Banner Section */}
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 fadeInLeft">
                            <div className="banner-txt">
                                <h1>{t("pcbBanner.title.brand")}</h1>
                                <h2>{t("pcbBanner.title.airQuality")}</h2>
                                <h3>{t("pcbBanner.title.pcbBoard")}</h3>
                                <h4>{t("pcbBanner.title.forIndoorOutdoor")}</h4>
                                <ul className="indoor-outdoor">
                                    <li>{t("pcbBanner.pollutants.so2")}</li>
                                    <li>{t("pcbBanner.pollutants.no2")}</li>
                                    <li>{t("pcbBanner.pollutants.co")}</li>
                                    <li>{t("pcbBanner.pollutants.pm25")}</li>
                                    <li>{t("pcbBanner.pollutants.ozone")}</li>
                                </ul>
                                <p className="banner-para">
                                    {t("pcbBanner.description")}
                                </p>
                                <div className="buy-now-box">
                                    <a
                                        className="single_add_to_cart_button button button_slide slide_right alt custom-checkout-btn"
                                        href="#get-in-touch"
                                    >
                                        {t("pcbBanner.requestButton")}
                                        <img
                                            className="banner-btn-arrow"
                                            src="https://www.pranaair.com/wp-content/uploads/2023/06/banner-btn-arrow.png"
                                            alt={t("pcbBanner.altTexts.buttonArrow")}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>

            {/* Circuit Board Section */}
            <div className="container">
                <div className="row fadeIn">
                    <div className="col-12">
                        <div className="circuit-board">
                            <h2>
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2023/07/chip-computer-svgrepo-com.png"
                                    alt={t("circuitBoard.altTexts.chipIcon")}
                                />{" "}
                                {t("circuitBoard.title.airQuality")}
                            </h2>
                            <h3>{t("circuitBoard.title.pcb")}</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Circuit Board Description Section */}
            <section className="circuit-borad-section">
                <div className="container">
                    <div className="row fadeIn printed-circuit-board-bg">
                        <div className="col-12">
                            <div className="pcb-board-txt">
                                {t("pcbDescription.mainText")}
                                <p className="para-txt">{t("pcbDescription.summary")}</p>
                            </div>

                            <div className="row">
                                <div className="col-md-6 shdw-line">
                                    <div className="pcb-customize-txt">
                                        <div className="box-1">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/gas-environmental-sensors.png"
                                                alt={t("pcbDescription.features.sensors.altText")}
                                            />
                                            <h3>{t("pcbDescription.features.sensors.title")}</h3>
                                        </div>
                                        <div className="box-1">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/selectivity-sensitivity.png"
                                                alt={t("pcbDescription.features.sensitivity.altText")}
                                            />
                                            <h3>{t("pcbDescription.features.sensitivity.title")}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 last-shdw-line">
                                    <div className="pcb-customize-txt">
                                        <div className="box-1">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/flexibility-communication.png"
                                                alt={t("pcbDescription.features.communication.altText")}
                                            />
                                            <h3>{t("pcbDescription.features.communication.title")}</h3>
                                        </div>
                                        <div className="box-1">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/durability-robustness-.png"
                                                alt={t("pcbDescription.features.robustness.altText")}
                                            />
                                            <h3>{t("pcbDescription.features.robustness.title")}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 shdw-line">
                                    <div className="pcb-customize-txt">
                                        <div className="box-1">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/capability-calibration.png"
                                                alt={t("pcbDescription.features.calibration.altText")}
                                            />
                                            <h3>{t("pcbDescription.features.calibration.title")}</h3>
                                        </div>
                                        <div className="box-1">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/effectiveness-cost.png"
                                                alt={t("pcbDescription.features.costEffectiveness.altText")}
                                            />
                                            <h3>{t("pcbDescription.features.costEffectiveness.title")}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 last-shdw-line">
                                    <div className="pcb-customize-txt">
                                        <div className="box-1">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/reliability-accuracy-.png"
                                                alt={t("pcbDescription.features.accuracy.altText")}
                                            />
                                            <h3>{t("pcbDescription.features.accuracy.title")}</h3>
                                        </div>
                                        <div className="box-1">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/power-low-consumption.png"
                                                alt={t("pcbDescription.features.powerConsumption.altText")}
                                            />
                                            <h3>{t("pcbDescription.features.powerConsumption.title")}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Communication Interfaces Section */}
            <section className="tab-imgs-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tab-main-heading">
                                <h2>{t("communicationInterfaces.title")}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="my-tab">
                                <div className="tab-navigation">
                                    <ul className="nav nav-tabs" id="communicationTabs" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="wifi-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#wifi-content"
                                                type="button"
                                                role="tab"
                                                aria-controls="wifi-content"
                                                aria-selected="true"
                                            >
                                                {t("communicationInterfaces.tabs.wifi")}
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="uart-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#uart-content"
                                                type="button"
                                                role="tab"
                                                aria-controls="uart-content"
                                                aria-selected="false"
                                            >
                                                {t("communicationInterfaces.tabs.uart")}
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="gsm-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#gsm-content"
                                                type="button"
                                                role="tab"
                                                aria-controls="gsm-content"
                                                aria-selected="false"
                                            >
                                                {t("communicationInterfaces.tabs.gsm")}
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="rs485-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#rs485-content"
                                                type="button"
                                                role="tab"
                                                aria-controls="rs485-content"
                                                aria-selected="false"
                                            >
                                                {t("communicationInterfaces.tabs.rs485")}
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content" id="communicationTabsContent">
                                    <div className="tab-pane fade show active" id="wifi-content" role="tabpanel" aria-labelledby="wifi-tab">
                                        <div className="tab-img-para">
                                            <h2>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/07/wifi-svgrepo-com.png"
                                                    alt={t("communicationInterfaces.wifi.altText")}
                                                />{" "}
                                                {t("communicationInterfaces.wifi.title")}
                                            </h2>
                                            {t("communicationInterfaces.wifi.description")}
                                        </div>
                                        <div className="text-center tab-image">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/pcb-board-wifi-connectivity-2048x945.jpg"
                                                alt={t("communicationInterfaces.wifi.imageAlt")}
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="uart-content" role="tabpanel" aria-labelledby="uart-tab">
                                        <div className="tab-img-para">
                                            <h2>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/07/uart-icon.png"
                                                    alt={t("communicationInterfaces.uart.altText")}
                                                />{" "}
                                                {t("communicationInterfaces.uart.title")}
                                            </h2>
                                            {t("communicationInterfaces.uart.description")}
                                        </div>
                                        <div className="text-center tab-image">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/pcb-board-wifi-connectivity-2048x945.jpg"
                                                alt={t("communicationInterfaces.uart.imageAlt")}
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="gsm-content" role="tabpanel" aria-labelledby="gsm-tab">
                                        <div className="tab-img-para">
                                            <h2>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/07/gsm-icom.png"
                                                    alt={t("communicationInterfaces.gsm.altText")}
                                                />{" "}
                                                {t("communicationInterfaces.gsm.title")}
                                            </h2>
                                            {t("communicationInterfaces.gsm.description")}
                                        </div>
                                        <div className="text-center tab-image">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/pcb-board-wifi-connectivity-2048x945.jpg"
                                                alt={t("communicationInterfaces.gsm.imageAlt")}
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="rs485-content" role="tabpanel" aria-labelledby="rs485-tab">
                                        <div className="tab-img-para">
                                            <h2>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/07/rs-485-jocn.png"
                                                    alt={t("communicationInterfaces.rs485.altText")}
                                                />{" "}
                                                {t("communicationInterfaces.rs485.title")}
                                            </h2>
                                            {t("communicationInterfaces.rs485.description")}
                                        </div>
                                        <div className="text-center tab-image">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/pcb-board-wifi-connectivity-2048x945.jpg"
                                                alt={t("communicationInterfaces.rs485.imageAlt")}
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PCB Variations Section */}
            <section className="air-qualty-sensore">
                <div className="container">
                    <div className="row fadeIn">
                        <div className="col-md-3">
                            <div className="air-quality-sensore">
                                <h2>{t("pcbVariations.title.main")}</h2>
                                <h3>{t("pcbVariations.title.sub")}</h3>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="air-quality-sensore-para">{t("pcbVariations.description")}</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="text-center pcb-sensore-img fadeIn">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2023/07/prana-air-ambient-air-quality-pcb-monitor-2048x1093.jpg"
                                    alt={t("pcbVariations.images.main.alt")}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row pcb-sensore-colm">
                        <div className="col-md-6">
                            <div className="text-center pcb-sensore-img fadeIn">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2023/07/prana-air-ambient-lite-air-quality-monitor-pcb.jpg"
                                    alt={t("pcbVariations.images.ambientLite.alt")}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center pcb-sensore-img fadeIn">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2023/07/air-quality-monitor-pcb-768x395.jpg"
                                    alt={t("pcbVariations.images.airQualityMonitor.alt")}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row pcb-sensore-colm">
                        <div className="col-md-6">
                            <div className="text-center pcb-sensore-img fadeIn">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2023/07/prana-air-pm-air-quality-pcb-768x371.jpg"
                                    alt={t("pcbVariations.images.pmAirQuality.alt")}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center pcb-sensore-img fadeIn">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2023/07/prana-air-sensor-digital-board-768x370.jpg"
                                    alt={t("pcbVariations.images.sensorDigitalBoard.alt")}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="faq-heading">
                                <h2>{t("pcbFAQ.title")}</h2>
                            </div>
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            {t("pcbFAQ.question1")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("pcbFAQ.answer1")}</div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            {t("pcbFAQ.question2")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("pcbFAQ.answer2")}</div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            {t("pcbFAQ.question3")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("pcbFAQ.answer3")}</div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                        >
                                            {t("pcbFAQ.question4")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingFour"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("pcbFAQ.answer4")}</div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                            {t("pcbFAQ.question5")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFive"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingFive"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("pcbFAQ.answer5")}</div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix"
                                            aria-expanded="false"
                                            aria-controls="collapseSix"
                                        >
                                            {t("pcbFAQ.question6")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseSix"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingSix"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("pcbFAQ.answer6")}</div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseSeven"
                                            aria-expanded="false"
                                            aria-controls="collapseSeven"
                                        >
                                            {t("pcbFAQ.question7")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseSeven"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingSeven"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body faq-tab-para">{t("pcbFAQ.answer7")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contat-form-section" id="get-in-touch">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contact-heading">
                                <h2>{t("contactHeadingNew.title")}</h2>
                                <p>{t("contactHeadingNew.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactForm pageName="Air Quality Pcb Board Page" />
            </section>

            {/* Product Slider Section */}
            <section className="product-section-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="air-quality-sensore product-sldier-heading">
                                        <h2>{t("relatedProductsHeading.title")}</h2>
                                        <h3>{t("relatedProductsHeading.subtitle")}</h3>
                                    </div>
                                </div>
                                <div className="col-md-9"></div>
                            </div>

                            <div className="prouct-slider-tab">
                                <ul className="nav nav-tabs" id="productTabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="sensors-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#sensors-content"
                                            type="button"
                                            role="tab"
                                            aria-controls="sensors-content"
                                            aria-selected="true"
                                        >
                                            Sensors
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="monitors-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#monitors-content"
                                            type="button"
                                            role="tab"
                                            aria-controls="monitors-content"
                                            aria-selected="false"
                                        >
                                            Monitors
                                        </button>
                                    </li>
                                </ul>

                                <div className="tab-content" id="productTabsContent">
                                    <div
                                        className="tab-pane show active"
                                        id="sensors-content"
                                        role="tabpanel"
                                        aria-labelledby="sensors-tab"
                                    >
                                        <PCBProductSlider activeTab="Sensors" products={sensorProducts} />
                                    </div>
                                    <div className="tab-pane" id="monitors-content" role="tabpanel" aria-labelledby="monitors-tab">
                                        <PCBProductSlider activeTab="Monitors" products={monitorProducts} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
