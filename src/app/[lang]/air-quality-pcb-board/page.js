"use client"
import { useState, useEffect } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm";

export default function PranaAirPCB() {
    // State for tabs
    const [activeTab, setActiveTab] = useState("WiFi")
    const [activeFaqIndex, setActiveFaqIndex] = useState(0)
    const [activeProductTab, setActiveProductTab] = useState("Sensors")

    // Responsive settings for carousel
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    }


    // Product data for carousel
    const sensorProducts = [
        { id: 59609, name: "Sensor 1", image: "https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-chlorine-cl2-sensor-with-digital-board.jpg" },
        { id: 69043, name: "Sensor 2", image: "https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-chlorine-cl2-sensor-with-digital-board.jpg" },
        { id: 12661, name: "Sensor 3", image: "https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-h2s-sensor-with-digital-board-1.jpg" },
        { id: 12666, name: "Sensor 4", image: "https://www.pranaair.com/wp-content/uploads/2022/12/prana-air-nitrogen-dioxide-no2-sensor-with-board.jpg" },
        { id: 59554, name: "Sensor 5", image: "https://www.pranaair.com/wp-content/uploads/2022/11/prana-air-carbon-monoxide-co-sensor-with-board.jpg" },
        { id: 69037, name: "Sensor 6", image: "https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-chlorine-cl2-sensor-with-digital-board.jpg" },
        { id: 15424, name: "Sensor 7", image: "https://www.pranaair.com/wp-content/uploads/2022/12/prana-air-nitrogen-dioxide-no2-sensor-with-board.jpg" },
    ]

    const monitorProducts = [
        { id: 76353, name: "Monitor 1", image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-portable-alcohol-tester.png" },
        { id: 77731, name: "Monitor 2", image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor.png" },
        { id: 76924, name: "Monitor 3", image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-tvoc-hcho-odor-monitor.png" },
        { id: 77733, name: "Monitor 4", image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-tvoc-hcho-odor-monitor.png" },
        { id: 52265, name: "Monitor 5", image: "https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-pocket-co2-monitor-180x180.jpg" },
        { id: 22466, name: "Monitor 6", image: "https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-smart-air-quality-monitor-180x180.jpg" },
        { id: 12151, name: "Monitor 7", image: "https://www.pranaair.com/wp-content/uploads/2021/04/prana-air-squair-air-monitor.jpg" },
        { id: 20807, name: "Monitor 8", image: "https://www.pranaair.com/wp-content/uploads/2023/03/Sensible-monitor-prana-air-180x180.png" },
    ]
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js")
            .then(() => {
                console.log("Bootstrap JS loaded");
            })
            .catch((err) => console.error("Error loading Bootstrap JS:", err));
    }, []);
    return (
        <>
            {/* Banner Section */}
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 fadeInLeft">
                            <div className="banner-txt">
                                <h1>Prana Air</h1>
                                <h2>Air Quality</h2>
                                <h3>PCB Board</h3>
                                <h4>For indoor &amp; outdoor</h4>
                                <ul className="indoor-outdoor">
                                    <li>SO2</li>
                                    <li>NO2</li>
                                    <li>CO</li>
                                    <li>PM2.5</li>
                                    <li>Ozone</li>
                                </ul>
                                <p className="banner-para">
                                    Cutting-edge PCB technology to identify and detect indoor and outdoor air pollutants
                                </p>
                                <div className="buy-now-box">
                                    <a
                                        className="single_add_to_cart_button button button_slide slide_right alt custom-checkout-btn"
                                        href="#get-in-touch"
                                    >
                                        Request A Quote
                                        <img className="banner-btn-arrow" src="https://www.pranaair.com/wp-content/uploads/2023/06/banner-btn-arrow.png" alt="" />
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
                                    alt="chip-computer-svgrepo-com"
                                />{" "}
                                Air Quality
                            </h2>
                            <h3>Printed Circuit Board (PCBs)</h3>
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
                                Air pollutions impact on human life necessitates the monitoring of air quality. To assess pollution
                                levels, Printed Circuit Boards (PCBs), which consist of embedded metal wires (traces) and metal areas
                                (planes) within a rigid structure housing electrical circuitry, play a crucial role. PCBs enable the
                                precise measurement and analysis of air pollutants, contributing to effective environmental monitoring
                                and mitigation strategies.
                                <p className="para-txt">
                                    PCBs are vital for air quality monitoring, providing intricate circuit platforms for connectivity,
                                    integration, and analysis.
                                </p>
                            </div>

                            <div className="row">
                                <div className="col-md-6 shdw-line">
                                    <div className="pcb-customize-txt">
                                        <div className="box-1">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/gas-environmental-sensors.png"
                                                alt="gas environmental sensors"
                                            />
                                            <h3>Gas+Environmental Sensors</h3>
                                        </div>
                                        <div className="box-1">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/selectivity-sensitivity.png"
                                                alt="selectivity & sensitivity"
                                            />
                                            <h3>Sensitivity &amp; Selectivity</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 last-shdw-line">
                                    <div className="pcb-customize-txt">
                                        <div className="box-1">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/flexibility-communication.png"
                                                alt="flexibility communication"
                                            />
                                            <h3>Communication Flexibility</h3>
                                        </div>
                                        <div className="box-1">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/durability-robustness-.png"
                                                alt="durability & robustness"
                                            />
                                            <h3>Robustness &amp; Durability</h3>
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
                                                alt="capability calibration"
                                            />
                                            <h3>Calibration Capability</h3>
                                        </div>
                                        <div className="box-1">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/effectiveness-cost.png"
                                                alt="effectiveness cost"
                                            />
                                            <h3>Cost-Effectiveness</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 last-shdw-line">
                                    <div className="pcb-customize-txt">
                                        <div className="box-1">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/reliability-accuracy-.png"
                                                alt="reliability accuracy"
                                            />
                                            <h3>Accuracy &amp; Reliability</h3>
                                        </div>
                                        <div className="box-1">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2023/07/power-low-consumption.png"
                                                alt="power low consumption"
                                            />
                                            <h3>Low Power Consumption</h3>
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
                                <h2>Multiple Communication Interfaces</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="my-tab">
                                <div className="tab-navigation">
                                    <ul className="nav nav-tabs">
                                        <li className={`tab-inner-title ${activeTab === "WiFi" ? "active" : ""}`}>
                                            <button onClick={() => setActiveTab("WiFi")}>WiFi</button>
                                        </li>
                                        <li className={`tab-inner-title ${activeTab === "UART" ? "active" : ""}`}>
                                            <button onClick={() => setActiveTab("UART")}>UART</button>
                                        </li>
                                        <li className={`tab-inner-title ${activeTab === "GSM" ? "active" : ""}`}>
                                            <button onClick={() => setActiveTab("GSM")}>GSM</button>
                                        </li>
                                        <li className={`tab-inner-title ${activeTab === "RS-485" ? "active" : ""}`}>
                                            <button onClick={() => setActiveTab("RS-485")}>RS-485</button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content">
                                    {activeTab === "WiFi" && (
                                        <div className="tab-pane active">
                                            <div className="tab-img-para">
                                                <h2>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/07/wifi-svgrepo-com.png"
                                                        alt="wifi svgrepo com"
                                                    />{" "}
                                                    WiFi Connectivity
                                                </h2>
                                                PCBs with WiFi connectivity integrate air quality sensors, enabling the measurement of various
                                                parameters crucial for effective air quality monitoring. This enables wireless communication
                                                with the help of IoT.
                                            </div>
                                            <div className="text-center tab-image">
                                                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/pcb-board-wifi-connectivity-2048x945.jpg" alt="WiFi PCB" className="img-fluid" />
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "UART" && (
                                        <div className="tab-pane active">
                                            <div className="tab-img-para">
                                                <h2>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/07/uart-icon.png"
                                                        alt="uart icon"
                                                    />{" "}
                                                    UART
                                                </h2>
                                                The UART (Universal Asynchronous Receiver-Transmitter) is a form of hardware communication
                                                interface that can be found in microcontrollers and other electronic devices. By sequentially
                                                transmitting and receiving data, UART enables serial communication.
                                            </div>
                                            <div className="text-center tab-image">
                                                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/pcb-board-wifi-connectivity-2048x945.jpg" alt="UART PCB" className="img-fluid" />
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "GSM" && (
                                        <div className="tab-pane active">
                                            <div className="tab-img-para">
                                                <h2>
                                                    <img src="https://www.pranaair.com/wp-content/uploads/2023/07/gsm-icom.png" alt="gsm icon" />{" "}
                                                    GSM
                                                </h2>
                                                GSM integration links PCBs to cellular networks, enabling remote monitoring, control, and
                                                communication. Enhances connectivity, facilitates wireless data transmission and control.
                                            </div>
                                            <div className="text-center tab-image">
                                                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/pcb-board-wifi-connectivity-2048x945.jpg" alt="GSM PCB" className="img-fluid" />
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "RS-485" && (
                                        <div className="tab-pane active">
                                            <div className="tab-img-para">
                                                <h2>
                                                    <img
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/07/rs-485-jocn.png"
                                                        alt="rs 485 icon"
                                                    />{" "}
                                                    RS-485
                                                </h2>
                                                RS-485 is a balanced transmission line standard facilitating high-speed, long-distance data
                                                transmission for multi-drop communication in PCBs, commonly used in industrial automation and
                                                control systems.
                                            </div>
                                            <div className="text-center tab-image">
                                                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/pcb-board-wifi-connectivity-2048x945.jpg" alt="RS-485 PCB" className="img-fluid" />
                                            </div>
                                        </div>
                                    )}
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
                                <h2>PCB</h2>
                                <h3>Variations</h3>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="air-quality-sensore-para">
                                Explore Prana Airs extensive selection of Printed Circuit Boards, providing seamless customization
                                options to meet diverse air quality monitoring needs with precision and satisfaction.
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="text-center pcb-sensore-img fadeIn">
                                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/prana-air-ambient-air-quality-pcb-monitor-2048x1093.jpg" alt="PCB Variation" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div className="row pcb-sensore-colm">
                        <div className="col-md-6">
                            <div className="text-center pcb-sensore-img fadeIn">
                                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/prana-air-ambient-lite-air-quality-monitor-pcb.jpg" alt="PCB Variation" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center pcb-sensore-img fadeIn">
                                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/air-quality-monitor-pcb-768x395.jpg" alt="PCB Variation" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div className="row pcb-sensore-colm">
                        <div className="col-md-6">
                            <div className="text-center pcb-sensore-img fadeIn">
                                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/prana-air-pm-air-quality-pcb-768x371.jpg" alt="PCB Variation" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center pcb-sensore-img fadeIn">
                                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/prana-air-sensor-digital-board-768x370.jpg" alt="PCB Variation" className="img-fluid" />
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
                                <h2>FAQs of Cair+ Monitor</h2>
                            </div>
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
                                            1. What types of Printed Circuit Boards (PCBs) does Prana Air offer?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Prana Air offers a range of PCBs tailored for air quality monitoring, ensuring efficient and accurate data collection.
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
                                            2. Can Prana Air PCBs be customized to specific requirements?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Absolutely! Prana Air PCBs are designed to be easily customized, allowing for seamless integration with various air quality monitoring systems.
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
                                            3. Are Prana Air PCBs compatible with different air quality sensors?
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Yes, Prana Air PCBs are versatile and compatible with a wide range of Prana Air- air quality sensors, enabling comprehensive monitoring of pollutants.
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
                                            4. How reliable are Prana Air PCBs for long-term air quality monitoring?
                                        </button>
                                    </h2>
                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Prana Air PCBs are built to withstand long-term operation, providing reliable and consistent performance for continuous air quality monitoring.
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
                                            5. Does Prana Air provide technical support for their PCBs?
                                        </button>
                                    </h2>
                                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Certainly! Prana Air offers comprehensive technical support to ensure smooth implementation and operation of their PCBs for air quality monitoring.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq6"
                                            aria-expanded="false"
                                        >
                                            6. Are Prana Air PCBs compliant with industry standards and regulations?
                                        </button>
                                    </h2>
                                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            Yes, Prana Air PCBs adhere to industry standards and regulations, ensuring reliable performance and compliance with air quality monitoring requirements.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq7"
                                            aria-expanded="false"
                                        >
                                            7. What are the different communication modes available for connecting PCBs?
                                        </button>
                                    </h2>
                                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            PCBs can be connected using various communication modes, such as UART, WiFi, RS-485, and GSM, offering flexibility and compatibility with diverse systems and devices.                                        </div>
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
                                <h2>Get in Touch</h2>
                                <p>
                                    Please help us know what requirements you have. Our team will
                                    contact you very soon.
                                </p>
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
                                        <h2>You May Also Like</h2>
                                        <h3>These Products</h3>
                                    </div>
                                </div>
                                <div className="col-md-9"></div>
                            </div>

                            <div className="prouct-slider-tab">
                                <ul className="nav nav-tabs">
                                    <li className={activeProductTab === "Sensors" ? "active" : ""}>
                                        <button onClick={() => setActiveProductTab("Sensors")}>Sensors</button>
                                    </li>
                                    <li className={activeProductTab === "Monitors" ? "active" : ""}>
                                        <button onClick={() => setActiveProductTab("Monitors")}>Monitors</button>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    {activeProductTab === "Sensors" && (
                                        <div className="tab-pane active">
                                            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
                                                {sensorProducts.map((product) => (
                                                    <div key={product.id} className="product-item">
                                                        <div className="product-image">
                                                            <img src={product.image || "/placeholder.svg"} alt={product.name} className="img-fluid" />
                                                        </div>
                                                        <div className="product-info">
                                                            <h4>{product.name}</h4>
                                                            <a href="#" className="btn btn-sm btn-outline-primary">
                                                                View Details
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Carousel>
                                        </div>
                                    )}

                                    {activeProductTab === "Monitors" && (
                                        <div className="tab-pane active">
                                            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
                                                {monitorProducts.map((product) => (
                                                    <div key={product.id} className="product-item">
                                                        <div className="product-image">
                                                            <img src={product.image || "/placeholder.svg"} alt={product.name} className="img-fluid" />
                                                        </div>
                                                        <div className="product-info">
                                                            <h4>{product.name}</h4>
                                                            <a href="#" className="btn btn-sm btn-outline-primary">
                                                                View Details
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Carousel>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

