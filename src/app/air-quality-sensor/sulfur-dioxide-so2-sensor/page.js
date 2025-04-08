"use client"
import { useEffect, useState, useRef } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import Link from "next/link"
import Image from "next/image";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"


export default function AirDronePage() {
    const [trackTab, trackActiveSpecTab] = useState("MobileApp")
    const [discTab, discActiveSpecTab] = useState("SensorDisc")
    const [introTab, introActiveSpecTab] = useState("IntroSensor")
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 53,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <div className="air-drone-page">
            <main className="air-drone-page">
                {/* Hero Section */}
                <section className="product-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-img">
                                    <div className="tab-content">
                                        <div className={`tab-pane ${trackTab === "MobileApp" ? "show active" : ""}`}>
                                            <div className="sensor-img">
                                                <Image src="/img/so2-sensor.webp" alt="so2-sensor" width={100} height={100} />
                                            </div>
                                        </div>
                                        <div className={`tab-pane ${trackTab === "TVApp" ? "show active" : ""}`}>
                                            <div className="sensor-img">
                                                <Image src="/img/so2-sensor.webp" alt="so2-sensor" width={100} height={100} />
                                            </div>
                                        </div>
                                        <div className={`tab-pane ${trackTab === "WebDashboard" ? "show active" : ""}`}>
                                            <div className="sensor-img">
                                                <Image src="/img/so2-sensor.webp" alt="so2-sensor" width={100} height={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="nav nav-tabs sensor-product-tab" role="tablist">
                                        <li className="nav-item">
                                            <button className={`nav-link ${trackTab === "MobileApp" ? "active" : ""}`} onClick={() => trackActiveSpecTab("MobileApp")}
                                                href="#"
                                            >
                                                <div className="sensor-img-thumb">
                                                    <Image src="/img/so2-sensor.webp" alt="so2-sensor" width={100} height={100} />
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button className={`nav-link ${trackTab === "TVApp" ? "active" : ""}`} onClick={() => trackActiveSpecTab("TVApp")}
                                                href="#"
                                            >
                                                <div className="sensor-img-thumb">
                                                    <Image src="/img/so2-sensor.webp" alt="so2-sensor" width={100} height={100} />
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button className={`nav-link ${trackTab === "WebDashboard" ? "active" : ""}`} onClick={() => trackActiveSpecTab("WebDashboard")}
                                                href="#"
                                            >
                                                <div className="sensor-img-thumb">
                                                    <Image src="/img/so2-sensor.webp" alt="so2-sensor" width={100} height={100} />
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="product-discription">
                                    <h1>SO2 SENSOR</h1>
                                    <span><Image src="/img/highly-precise.png" alt="so2-sensor" width={50} height={50} /></span>
                                    <ul className="nav nav-tabs sensor-disc-tab" role="tablist">
                                        <li className="nav-item">
                                            <button className={`nav-link ${discTab === "SensorDisc" ? "active" : ""}`} onClick={() => discActiveSpecTab("SensorDisc")}
                                                href="#">
                                                <div className="sensor-tab-btn">
                                                    <Image src="/img/so2-sensor.webp" alt="so2-sensor" width={50} height={50} />
                                                    <span>0.01 PPM</span>
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button className={`nav-link ${discTab === "TVApp" ? "active" : ""}`} onClick={() => discActiveSpecTab("TVApp")}
                                                href="#">
                                                <div className="sensor-tab-btn">
                                                    <Image src="/img/so2-sensor.webp" alt="so2-sensor" width={50} height={50} />
                                                    <span>0.001 PPM</span>
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="product-disc">
                                        <div className="tab-content">
                                            <div className={`tab-pane ${discTab === "SensorDisc" ? "show active" : ""}`}>
                                                <div className="product-rate">
                                                    <span>₹     17,990.00</span>
                                                    <p>Prana Air SO2 sensor is made with precision and fineness for both industrial-grade and consumer-grade safety monitoring. The sensor is based on electrochemical technology for highly toxic SO2 gas. </p>
                                                    <ul>
                                                        <li>
                                                            <button onClick={decrement} className="dicrement">–</button>
                                                        </li>
                                                        <li>
                                                            {quantity}
                                                        </li>
                                                        <li>
                                                            <button onClick={increment} className="increment">+</button>
                                                        </li>
                                                    </ul>
                                                    <ul className="buy-now-btn">
                                                        <li>
                                                            <button className="add-cart product-buy">
                                                                Add to cart <span className="fw-bold">+</span>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="buy-now product-buy">
                                                                Buy now
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={`tab-pane ${discTab === "TVApp" ? "show active" : ""}`}>
                                                <div className="product-rate">
                                                    <span>20,990.00</span>
                                                    <p>Prana Air SO2 sensor is made with precision and fineness for both industrial-grade and consumer-grade safety monitoring. The sensor is based on electrochemical technology for highly toxic SO2 gas. </p>
                                                    <ul>
                                                        <li>
                                                            <button onClick={decrement} className="dicrement">–</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={increment} className="increment">+</button>
                                                        </li>
                                                    </ul>
                                                    <ul className="buy-now-btn">
                                                        <li>
                                                            <button className="add-cart product-buy">
                                                                Add to cart <span className="fw-bold">+</span>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="buy-now product-buy">
                                                                Buy now
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* sensor introduction */}
                <section className="intro">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="intro-heading">
                                    <h2><span>SO2 Sensor</span> Introduction</h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="variant-box">
                                    <ul className="nav nav-tabs variant-tab" role="tablist">
                                        <li className="nav-item">
                                            <button className={`nav-link ${introTab === "IntroSensor" ? "active" : ""}`} onClick={() => introActiveSpecTab("IntroSensor")}
                                                href="#">
                                                <div className="variant-tab-btn">
                                                    <span>Variant A</span>
                                                    <Image src="/img/variant-icon.png" alt="so2-sensor" width={50} height={50} />
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button className={`nav-link ${introTab === "TVApp" ? "active" : ""}`} onClick={() => introActiveSpecTab("TVApp")}
                                                href="#">
                                                <div className="variant-tab-btn">
                                                    <span>Variant B</span>
                                                    <Image src="/img/variant-icon.png" alt="so2-sensor" width={50} height={50} />
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tab-content">
                                    <div className={`tab-pane ${introTab === "IntroSensor" ? "show active" : ""}`}>
                                        <div className="sensor-txt">
                                            <div className="content">
                                                <p>The Prana Air SO2 sensor is designed with great accuracy and quality for both industrial and home safety monitoring. It uses electrochemical technology to detect harmful sulfur dioxide (SO2) gas.
                                                    This sensor is small, lightweight, and affordable, making it easy to use in different monitoring and safety systems. It is durable, lasts a long time, and can be used in a variety of settings, including factories, businesses, and homes.</p>
                                                <ul>
                                                    <li><strong>0.01 PPM</strong> Resolution</li>
                                                    <li><strong>50 PPM</strong> Range</li>
                                                </ul>
                                            </div>
                                            <div className="sensor-imgs">
                                                <h3>SO2 SENSOR </h3>
                                                <Image src="/img/so2-sensor-inbuilt-pcb.webp" alt="so2-sensor-inbuilt-pcb" width={50} height={50} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-pane ${introTab === "TVApp" ? "show active" : ""}`}>
                                        <div className="sensor-txt">
                                            <div className="content">
                                                <p>The Prana Air SO2 sensor is designed with great accuracy and quality for both industrial and home safety monitoring. It uses electrochemical technology to detect harmful sulfur dioxide (SO2) gas.
                                                    This sensor is small, lightweight, and affordable, making it easy to use in different monitoring and safety systems. It is durable, lasts a long time, and can be used in a variety of settings, including factories, businesses, and homes.</p>
                                                <ul>
                                                    <li><strong>0.01 PPM</strong> Resolution</li>
                                                    <li><strong>50 PPM</strong> Range</li>
                                                </ul>
                                            </div>
                                            <div className="sensor-imgs">
                                                <h3>SO SENSOR </h3>
                                                <Image src="/img/so2-sensor-inbuilt-pcb.webp" alt="so2-sensor-inbuilt-pcb" width={50} height={50} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="why-choose-heading">
                                    <h2>Why To Choose Prana Air <span>SO2 Sensor?</span> </h2>
                                </div>
                                <div className="why-choose-icon">
                                    <ul>
                                        <li>
                                            <Image src="/img/Compact.png" alt="so2-sensor" width={50} height={50} />
                                            <h3>Compact</h3>
                                            <p>The sensors compact size allows easy installation in any space, making it suitable for both portable and fixed monitoring devices.</p>
                                        </li>
                                        <li>
                                            <Image src="/img/Compact.png" alt="so2-sensor" width={50} height={50} />
                                            <h3>Compact</h3>
                                            <p>The sensors compact size allows easy installation in any space, making it suitable for both portable and fixed monitoring devices.</p>
                                        </li>
                                        <li>
                                            <Image src="/img/Compact.png" alt="so2-sensor" width={50} height={50} />
                                            <h3>Compact</h3>
                                            <p>The sensors compact size allows easy installation in any space, making it suitable for both portable and fixed monitoring devices.</p>
                                        </li>
                                        <li>
                                            <Image src="/img/Compact.png" alt="so2-sensor" width={50} height={50} />
                                            <h3>Compact</h3>
                                            <p>The sensors compact size allows easy installation in any space, making it suitable for both portable and fixed monitoring devices.</p>
                                        </li>
                                        <li>
                                            <Image src="/img/Compact.png" alt="so2-sensor" width={50} height={50} />
                                            <h3>Compact</h3>
                                            <p>The sensors compact size allows easy installation in any space, making it suitable for both portable and fixed monitoring devices.</p>
                                        </li>
                                        <li>
                                            <Image src="/img/Compact.png" alt="so2-sensor" width={50} height={50} />
                                            <h3>Compact</h3>
                                            <p>The sensors compact size allows easy installation in any space, making it suitable for both portable and fixed monitoring devices.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* SO2 Sensor Calibration video */}
                <section className="calibration-video">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="video-box">
                                    <Image src="/img/so2-sensor-calibration.webp" alt="so2-sensor" width={50} height={50} />
                                </div>
                                <div className="video-txt">
                                    <h2>SO2 Sensor Calibration</h2>
                                    <p>Calibrating an SO2 sensor means checking if it gives correct readings by comparing it to a standard measurement. This is done in specific conditions: a temperature of 23°C (plus or minus 3°C), humidity of 50% (plus or minus 15%), air pressure between 0.9 and 1.1 atm, and an airspeed of 0.05 m/s. This process makes sure the sensor gives accurate and reliable results. To do this, a special gas cylinder approved by NIST (a trusted measurement standard) is used as a reference.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* what technology used */}
                <section className="what-tech">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="what-tech-heading">
                                    <h2>What technology is being used in SO2 Sensor?</h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bg">
                                    <Image src="/img/tech-bg.jpg" alt="so2-sensor" width={50} height={50} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tech-txt">
                                    <h3>SO2 Sensor Introduction</h3>
                                    <Link href="#">Learn more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* what is sulfur */}
                <section className="what-is-sulfur">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="sulfur-heading">
                                    <h2>What is Sulfur Di-Oxide?</h2>
                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                            <div className="col-lg-12">
                                <div className="sulfur-img">
                                    <Image src="/img/what-is-sulfur-di-oxide.webp" alt="so2-sensor" width={50} height={50} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sulfur-txt">
                                    <p>Sulfur dioxide (SO₂) is a toxic gas with a strong, burnt smell. Its odor is sharp and irritating, though it is not the same as nitric acid.
                                        SO₂ is an acidic and corrosive gas. When it reacts with other substances in the air, it can form harmful compounds like sulfuric acid and sulfate pollutants, which contribute to air pollution and acid rain.
                                        The main sources of SO₂ include burning fossil fuels, power plants, metal extraction, industrial processes, volcanoes, vehicle emissions, oil refining, and diesel engines. However, the Indian government’s move toward BSVI-compliant engines has helped reduce SO₂ emissions from vehicles.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* light mode */}
                <section className="light-mode">
                    <div className="container">
                        <div className="col-lg-6">
                            <div className="light-mode-txt">
                                <h2>What technology is being used in SO2 Sensor?</h2>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                        <div className="col-lg-12">
                            <div className="light-mode-img">
                                <Image src="/img/SO2-light-mode.webp" alt="so2-sensor" width={50} height={50} />
                                <p>
                                    The SO2 sensor uses electrochemical gas sensing technology to detect sulfur dioxide in the air. Our monitors use a special sensor to detect sulfur dioxide (SO2), a harmful gas found in the air. This SO2 sensor works using a simple chemical process. It has two key parts called electrodes and a special material that connects them. When SO2 enters the sensor, a chemical reaction happens. This reaction creates a tiny electric current. The more SO2 in the air, the stronger the current.By measuring this current, our sensor tells us exactly how much SO2 is present. This helps in tracking air pollution and keeping the air cleaner and safer for everyone.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* sensor chip */}
                <section className="sensor-chip">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="sensor-chip-img">
                                    <Image src="/img/sensor-chip.webp" alt="so2-sensor" width={50} height={50} />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="sensor-chip-txt">
                                    <ul>
                                        <li>
                                            <h2>SO2 Sensor  Introduction</h2>
                                            <Link href="#">Buy Now</Link>
                                        </li>
                                        <li>
                                            <p>
                                                Prana Air offers top-quality air quality monitoring solutions as our SO2 sensor that works with advanced technology and offering accurate readings.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* app slider */}
                <section className="app-slider">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slider-title">
                                    <h2>Applications of SO2 Sensor</h2>
                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="col-lg-12">
                            <div className="slider-app">
                                
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
