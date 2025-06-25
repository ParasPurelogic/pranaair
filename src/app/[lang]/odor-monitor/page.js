import "./style.css"
import Image from "next/image"
import Link from "next/link"
import FresherCarousel from "@/Components/Pages/FreshAirMachine/applications-slider"

export default function OdorMonitor() {
    const trusted = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-content">
                                <h1 className="hero-title">Odor Monitor</h1>
                                <h2 className="hero-subtitle">Tired of Unpleasant Odors? Let is Keep Them in Check!</h2>
                                <p className="hero-description">
                                    Check and monitor pollutants causing odour in your washrooms or any indoor space.
                                </p>
                                <button className="buy-now-btn">
                                    <span>Buy Now</span>
                                    <div className="btn-icon">
                                        <Image width={38} height={38} alt="Arrow" src="/img/buy-now-btn.webp" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container-fluid">
                    <h2 className="section-title">
                        <span className="title-gray">
                            Features of
                            <br />
                        </span>
                        <span className="title-dark">Cair Odour Monitor</span>
                    </h2>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="feature-card">
                                <ul>
                                    <li>
                                        <h3>Real-time Smell Monitoring</h3>
                                        <p>H2S, NH3, HCHO, TVOC, Temperature, and Humidity.</p>
                                    </li>
                                    <li>
                                        <Image width={40} height={40} alt="Monitor illustration" src="/img/real-time-smell-monitor.webp" />
                                    </li>
                                </ul>
                            </div>

                            <ul className="type-c">
                                <div className="feature-card">
                                    <ul>
                                        <li>
                                            <h3>Type-C USB Cable</h3>
                                            <p>Charge your Odor monitor anytime with a Type-C USB cable.</p>
                                        </li>
                                        <li>
                                            <Image width={40} height={40} alt="Monitor illustration" src="/img/type-c-usb-cable.webp" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="feature-card">
                                    <ul className="sd-card">
                                        <li>
                                            <h3>Micro SD Card Storage</h3>
                                            <p>Access your odor monitor data anytime. </p>
                                        </li>
                                        <li>
                                            <Image width={40} height={40} alt="Monitor illustration" src="/img/micro-sd-card.webp" />
                                        </li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="main-box">
                                <div className="feature-card wifi-data">
                                    <ul>
                                        <li>
                                            <h3>Wi-Fi + Cloud Data Storage</h3>
                                            <p>Data accessibility on AQI is mobile, TV, Tablet App or web-dashboard.</p>
                                        </li>
                                        <li>
                                            <Image width={40} height={40} alt="Monitor illustration" src="/img/wifi-cloud-data-storage.webp" />
                                        </li>
                                    </ul>
                                </div>
                                <ul>
                                    <div className="feature-card">
                                        <ul className="battery-capity">
                                            <li>
                                                <h3>Battery Capacity</h3>
                                                <p>Experience long lasting functions with a 1600 mAh lithium-ion battery.</p>
                                            </li>
                                            <li>
                                                <Image width={40} height={40} alt="Monitor illustration" src="/img/battery-capacity.webp" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="feature-card">
                                        <ul className="portable-device">
                                            <li>
                                                <h3>Portable Device</h3>
                                                <p>Carry the device anywhere and detect odours on your own.</p>
                                            </li>
                                            <li>
                                                <Image width={40} height={40} alt="Monitor illustration" src="/img/portable-device.webp" />
                                            </li>
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Parameters Section */}
            <section className="parameters-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="parameters-content">
                                <h2 className="parameters-title">
                                    <span className="title-gray">
                                        Parameters of
                                        <br />
                                    </span>
                                    <span style={{ color: "#f9faff" }}>Cair Odour Monitor</span>
                                </h2>

                                <p className="parameters-description">
                                    Track the exact pollutants that cause indoor odors and poor air quality:
                                </p>

                                <div className="parameters-grid">
                                    <div className="parameter-item">
                                        <div className="parameter-icon">
                                            <Image width={40} height={40} alt="Monitor illustration" src="/img/cair-tvoc.png" />
                                        </div>
                                        <h3>Total Volatile Compounds (TVOC)</h3>
                                    </div>
                                    <div className="parameter-item">
                                        <div className="parameter-icon">
                                            <Image width={40} height={40} alt="Monitor illustration" src="/img/cair-tvoc.png" />
                                        </div>
                                        <h3>Formaldehyde (HCHO)</h3>
                                    </div>
                                    <div className="parameter-item">
                                        <div className="parameter-icon">
                                            <Image width={40} height={40} alt="Monitor illustration" src="/img/cair-tvoc.png" />
                                        </div>
                                        <h3>Temperature</h3>
                                    </div>
                                    <div className="parameter-item">
                                        <div className="parameter-icon">
                                            <Image width={40} height={40} alt="Monitor illustration" src="/img/cair-tvoc.png" />
                                        </div>
                                        <h3>Ammonia (NH3)</h3>
                                    </div>
                                    <div className="parameter-item">
                                        <div className="parameter-icon">
                                            <Image width={40} height={40} alt="Monitor illustration" src="/img/cair-tvoc.png" />
                                        </div>
                                        <h3>Hydrogen Sulphide (H2S)</h3>
                                    </div>
                                    <div className="parameter-item">
                                        <div className="parameter-icon">
                                            <Image width={40} height={40} alt="Monitor illustration" src="/img/cair-tvoc.png" />
                                        </div>
                                        <h3>Humidity</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7"></div>
                    </div>
                </div>

            </section>

            {/* Wifi Connectivity Section */}
            <section className="wifi-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wifi-badge">
                                <h2>Wifi Connectivity</h2>
                            </div>
                            <p className="wifi-description">
                                Stay one step ahead of unpleasant smells and poor indoor air quality. <span>Connect your Cair Odor Monitor to Wi-Fi for live data updates, automatic syncing, and real-time alerts.</span> Whether at home, in the office, or in commercial restrooms, you will always be <span>informed about the air quality around you.</span>
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wifi-image">
                                <Image
                                    alt="Design"
                                    src="/img/cair-odor-monitor-to-wifi-for-eal-time-update.webp"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="separator"></div>

            {/* Visuals Section */}
            <section className="visuals-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="visuals-title">
                                <span className="title-gray">Types of </span>
                                <span className="title-dark">Visuals</span>
                            </h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="visuals-description">
                                Easily access critical odor readings through intuitive screen views on your device. The Cair Odor Monitor provides multiple display modes.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="mt-5 main-tab-box">
                                <ul className="nav nav-tabs" id="visualTabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="concentrated-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#concentrated"
                                            type="button"
                                            role="tab"
                                            aria-controls="concentrated"
                                            aria-selected="true"
                                        >
                                            Concentrated Values
                                            <Image width={30} height={30} alt="Monitor illustration" src="/img/tab-icon.png" />
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="historic-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#historic"
                                            type="button"
                                            role="tab"
                                            aria-controls="historic"
                                            aria-selected="false"
                                        >
                                            Historic Graphs
                                            <Image width={30} height={30} alt="Monitor illustration" src="/img/tab-icon.png" />
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="parameter-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#parameter"
                                            type="button"
                                            role="tab"
                                            aria-controls="parameter"
                                            aria-selected="false"
                                        >
                                            Parameter Range
                                            <Image width={30} height={30} alt="Monitor illustration" src="/img/tab-icon.png" />
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="screensaver-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#screensaver"
                                            type="button"
                                            role="tab"
                                            aria-controls="screensaver"
                                            aria-selected="false"
                                        >
                                            Screen saver
                                            <Image width={30} height={30} alt="Monitor illustration" src="/img/tab-icon.png" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="tab-content visual-tab" id="visualTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="concentrated"
                                    role="tabpanel"
                                    aria-labelledby="concentrated-tab"
                                >
                                    <div style={{ marginTop: "40px" }}>
                                        <Image
                                            style={{ width: "100%", height: "492px" }}
                                            alt="Concentrated Values"
                                            src="/img/concentrated-values.webp"
                                            width={1230}
                                            height={492}
                                        />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="historic" role="tabpanel" aria-labelledby="historic-tab">
                                    <div style={{ marginTop: "40px" }}>
                                        <Image
                                            style={{ width: "100%", height: "492px" }}
                                            alt="Concentrated Values"
                                            src="/img/historic-graphs.webp"
                                            width={1230}
                                            height={492}
                                        />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="parameter" role="tabpanel" aria-labelledby="parameter-tab">
                                    <div style={{ marginTop: "40px" }}>
                                        <Image
                                            style={{ width: "100%", height: "492px" }}
                                            alt="Parameter Range"
                                            src="/img/parameter-range.webp"
                                            width={1230}
                                            height={492}
                                        />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="screensaver" role="tabpanel" aria-labelledby="screensaver-tab">
                                    <div style={{ marginTop: "40px" }}>
                                        <Image
                                            style={{ width: "100%", height: "492px" }}
                                            alt="Concentrated Values"
                                            src="/img/screen-saver.webp"
                                            width={1230}
                                            height={492}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pollutants Ranges Section */}
            <section className="pollutants-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="pollutants-title">
                                <h2 className="title-gray">
                                    Odour
                                    <br />
                                </h2>
                                <h3 className="title-dark">Pollutants Ranges</h3>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="pollutants-card">
                                <div className="param-box">
                                    <ul className="nav nav-tabs pollutant-nav-tabs" id="pollutantTabs" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="tvoc-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#tvoc"
                                                type="button"
                                                role="tab"
                                                aria-controls="tvoc"
                                                aria-selected="true"
                                            >
                                                TVOC
                                                <Image width={30} height={30} alt="Monitor illustration" src="/img/tab-icon.png" />
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="nh3-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nh3"
                                                type="button"
                                                role="tab"
                                                aria-controls="nh3"
                                                aria-selected="false"
                                            >
                                                NH3
                                                <Image width={30} height={30} alt="Monitor illustration" src="/img/tab-icon.png" />
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="hcho-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#hcho"
                                                type="button"
                                                role="tab"
                                                aria-controls="hcho"
                                                aria-selected="false"
                                            >
                                                HCHO
                                                <Image width={30} height={30} alt="Monitor illustration" src="/img/tab-icon.png" />
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="h2s-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#h2s"
                                                type="button"
                                                role="tab"
                                                aria-controls="h2s"
                                                aria-selected="false"
                                            >
                                                H2S
                                                <Image width={30} height={30} alt="Monitor illustration" src="/img/tab-icon.png" />
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="temp-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#temp"
                                                type="button"
                                                role="tab"
                                                aria-controls="temp"
                                                aria-selected="false"
                                            >
                                                Temp.
                                                <Image width={30} height={30} alt="Monitor illustration" src="/img/tab-icon.png" />
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="humi-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#humi"
                                                type="button"
                                                role="tab"
                                                aria-controls="humi"
                                                aria-selected="false"
                                            >
                                                Humi.
                                                <Image width={30} height={30} alt="Monitor illustration" src="/img/tab-icon.png" />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pollutants-card">
                            <div className="tab-content" id="pollutantTabContent">
                                <div className="tab-pane fade show active" id="tvoc" role="tabpanel" aria-labelledby="tvoc-tab">
                                    <div>
                                        <div className="range-bar">
                                            <div className="range-segment" style={{ backgroundColor: "#59b61f", borderRadius: "10px 0px 0px 10px" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#eec732" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#ea8c34" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#e95478" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#b33fba" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#c81f33", borderRadius: "0px 10px 10px 0px" }}></div>
                                        </div>

                                        <div className="range-labels">
                                            <div className="range-label">
                                                <div className="range-level">Good</div>
                                                <div className="range-value">0</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Moderate</div>
                                                <div className="range-value">50</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Poor</div>
                                                <div className="range-value">100</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Unhealthy</div>
                                                <div className="range-value">200</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Severe</div>
                                                <div className="range-value">300</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Hazardous</div>
                                                <div className="range-value">400</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-value last-value">500+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nh3" role="tabpanel" aria-labelledby="nh3-tab">
                                    <div>
                                        <div className="range-bar">
                                            <div className="range-segment" style={{ backgroundColor: "#59b61f" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#eec732" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#ea8c34" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#e95478" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#b33fba" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#c81f33" }}></div>
                                        </div>
                                        <div className="range-labels">
                                            <div className="range-label">
                                                <div className="range-level">Good</div>
                                                <div className="range-value">0</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Moderate</div>
                                                <div className="range-value">50</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Poor</div>
                                                <div className="range-value">100</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Unhealthy</div>
                                                <div className="range-value">200</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Severe</div>
                                                <div className="range-value">300</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Hazardous</div>
                                                <div className="range-value">400</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-value last-value">500+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="hcho" role="tabpanel" aria-labelledby="hcho-tab">
                                    <div>
                                        <div className="range-bar">
                                            <div className="range-segment" style={{ backgroundColor: "#59b61f" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#eec732" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#ea8c34" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#e95478" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#b33fba" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#c81f33" }}></div>
                                        </div>
                                        <div className="range-labels">
                                            <div className="range-label">
                                                <div className="range-level">Good</div>
                                                <div className="range-value">0</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Moderate</div>
                                                <div className="range-value">50</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Poor</div>
                                                <div className="range-value">100</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Unhealthy</div>
                                                <div className="range-value">200</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Severe</div>
                                                <div className="range-value">300</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Hazardous</div>
                                                <div className="range-value">400</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-value last-value">500+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="h2s" role="tabpanel" aria-labelledby="h2s-tab">
                                    <div>
                                        <div className="range-bar">
                                            <div className="range-segment" style={{ backgroundColor: "#59b61f" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#eec732" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#ea8c34" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#e95478" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#b33fba" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#c81f33" }}></div>
                                        </div>
                                        <div className="range-labels">
                                            <div className="range-label">
                                                <div className="range-level">Good</div>
                                                <div className="range-value">0</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Moderate</div>
                                                <div className="range-value">50</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Poor</div>
                                                <div className="range-value">100</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Unhealthy</div>
                                                <div className="range-value">200</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Severe</div>
                                                <div className="range-value">300</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Hazardous</div>
                                                <div className="range-value">400</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-value last-value">500+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="temp" role="tabpanel" aria-labelledby="temp-tab">
                                    <div>
                                        <div className="range-bar">
                                            <div className="range-segment" style={{ backgroundColor: "#59b61f" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#eec732" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#ea8c34" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#e95478" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#b33fba" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#c81f33" }}></div>
                                        </div>
                                        <div className="range-labels">
                                            <div className="range-label">
                                                <div className="range-level">Good</div>
                                                <div className="range-value">0</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Moderate</div>
                                                <div className="range-value">50</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Poor</div>
                                                <div className="range-value">100</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Unhealthy</div>
                                                <div className="range-value">200</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Severe</div>
                                                <div className="range-value">300</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Hazardous</div>
                                                <div className="range-value">400</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-value last-value">500+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="humi" role="tabpanel" aria-labelledby="humi-tab">
                                    <div>
                                        <div className="range-bar">
                                            <div className="range-segment" style={{ backgroundColor: "#59b61f" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#eec732" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#ea8c34" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#e95478" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#b33fba" }}></div>
                                            <div className="range-segment" style={{ backgroundColor: "#c81f33" }}></div>
                                        </div>
                                        <div className="range-labels">
                                            <div className="range-label">
                                                <div className="range-level">Good</div>
                                                <div className="range-value">0</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Moderate</div>
                                                <div className="range-value">50</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Poor</div>
                                                <div className="range-value">100</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Unhealthy</div>
                                                <div className="range-value">200</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Severe</div>
                                                <div className="range-value">300</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-level">Hazardous</div>
                                                <div className="range-value">400</div>
                                            </div>
                                            <div className="range-label">
                                                <div className="range-value last-value">500+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="highlight">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="highlight-heading">
                                <h2 className="title-gray">Highlights of the</h2>
                                <h3 className="title-dark">Cair Odour Monitor</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="cair-odour-box">
                                <div className="txt">
                                    <h4>1600mAh </h4>
                                    <h5>Battery Monitor</h5>
                                    <p>extended usage time with our high-capacity battery.</p>
                                </div>
                                <div className="img-monitor">
                                    <Image width={200} height={200} alt="battery monitor" src="/img/battery-monitor.webp" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cair-odour-box">
                                <div className="txt non-grd">
                                    <h4>Type C </h4>
                                    <p>Charge your device quickly and safely using Type-C.</p>
                                </div>
                                <div className="img-monitor">
                                    <Image width={200} height={200} alt="battery monitor" src="/img/type-c-monitor.webp" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="cair-odour-box">
                                <div className="txt non-grd">
                                    <h4>Dimension</h4>
                                    <p>Designed for convenience,lightweight and easy to carry.</p>
                                </div>
                                <div className="img-monitor">
                                    <Image width={200} height={200} alt="battery monitor" src="/img/dimension.webp" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="opration">
                                <h3>Operation Buttons</h3>
                                <p>Access different screens or use device easily with three operational buttons on the device.</p>
                                <Image width={200} height={200} alt="battery monitor" src="/img/operation-button.webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Connect your Odour Monitoring */}
            <section className="connect-monitor">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="connect-device-heading">
                                <h2 className="title-gray">Connect your Odour Monitoring Device with </h2>
                                <h3 className="title-dark">Mobile, Web-dashboard, TV app connectivity </h3>
                            </div>
                            <div className="mt-5 main-tab-box connect-tab-box">
                                <ul className="nav nav-tabs" id="visualTabs1" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="mob-tab1"
                                            data-bs-toggle="tab"
                                            data-bs-target="#mob1"
                                            type="button"
                                            role="tab"
                                            aria-controls="mob1"
                                            aria-selected="true"
                                        >
                                            Mobile App
                                            <Image width={30} height={30} alt="Monitor illustration" src="/img/tab-icon.png" />
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="web-tab1"
                                            data-bs-toggle="tab"
                                            data-bs-target="#web1"
                                            type="button"
                                            role="tab"
                                            aria-controls="web1"
                                            aria-selected="false"
                                        >
                                            Web Dashboard
                                            <Image width={30} height={30} alt="Monitor illustration" src="/img/tab-icon.png" />
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="tv-tab1"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tv1"
                                            type="button"
                                            role="tab"
                                            aria-controls="tv1"
                                            aria-selected="false"
                                        >
                                            Smart TV
                                            <Image width={30} height={30} alt="Monitor illustration" src="/img/tab-icon.png" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-content app-mob-web" id="visualTabContent1">
                                <div
                                    className="tab-pane fade show active"
                                    id="mob1"
                                    role="tabpanel"
                                    aria-labelledby="mob-tab1"
                                >
                                    <div className="mob-txt-part">
                                        <div className="mob-app-heading">
                                            <h2><span>Connect your</span> Cair
                                                Odour Monitor to your mobile.</h2>
                                            <ul>
                                                <li>
                                                    <Link href="#" className="ios-app-btn">
                                                        <span><Image alt="Web Dashboard" src="/img/ios-app.webp" width={40} height={40} /></span>
                                                        <span>Download on the <br />
                                                            <p>App Store</p>
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="android-app-btn ios-app-btn">
                                                        <span><Image alt="Web Dashboard" src="/img/play-store-app.webp" width={40} height={40} /></span>
                                                        <span>Get it on <br />
                                                            <p>Google Play</p>
                                                        </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mob-part">
                                            <div className="mob-img">
                                                <ul>
                                                    <li>
                                                        <Image alt="Web Dashboard" src="/img/history-data.webp" width={300} height={300} />
                                                    </li>
                                                    <li>
                                                        <Image alt="Web Dashboard" src="/img/odor-monitor-in-app.webp" width={500} height={500} />
                                                    </li>
                                                    <li>
                                                        <Image alt="Web Dashboard" src="/img/average.webp" width={500} height={500} />
                                                    </li>
                                                    <li>
                                                        <Image alt="Web Dashboard" src="/img/comfort.webp" width={500} height={500} />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="web1"
                                    role="tabpanel"
                                    aria-labelledby="web-tab1"
                                >
                                    <div className="web-txt-part">
                                        <div className="web-dashboard">
                                            <Image alt="Web Dashboard" src="/img/cair-odor-monitor-data-onweb-dashboard.webp" width={600} height={600} />
                                        </div>
                                        <div className="web-dashboard-txt">
                                            <h2><span>Access</span> Cair Odor Monitor
                                                Data directly on web-dashboard</h2>
                                            <Link href="#">View Dashboard</Link>
                                            <Image alt="Web Dashboard" src="/img/history-analysis-on-web-dashboard.webp" width={400} height={400} />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tv1"
                                    role="tabpanel"
                                    aria-labelledby="tv-tab1"
                                >
                                    <div className="tv-txt-part">
                                        <div className="tv-dashboard">
                                            <Image alt="Web Dashboard" src="/img/cair-odour-mnitor-data-on-v.webp" width={600} height={600} />
                                        </div>
                                        <div className="tv-dashboard-txt">
                                            <h2><span>See your </span> Cair
                                                Odour Monitor data on TV.</h2>
                                            <Link href="#">Download TV App</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="app-industry">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="app-heading">
                                <h2>Applications of the odor</h2>
                                <h3>monitor: from industry to home</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application slider */}
            <section className="slider-app">
                <FresherCarousel responsive={trusted} className="review-slider" centerMode={true}>
                    <div className="app-slide-review-box">
                        <Image src="/img/rice-field-people-bridge-walking-thailand.webp" alt="" width={800} height={400} />
                        <h4>Sewage Treatment Plants</h4>
                    </div>
                    <div className="app-slide-review-box">
                        <Image src="/img/public-toilets.webp" alt="" width={800} height={400} />
                        <h4>Public Toilets</h4>
                    </div>
                    <div className="app-slide-review-box">
                        <Image src="/img/wastewater-facilities.webp" alt="" width={800} height={400} />
                        <h4>Wastewater Facilities</h4>
                    </div>
                    <div className="app-slide-review-box">
                        <Image src="/img/oil-gas-industries.webp" alt="" width={800} height={400} />
                        <h4>Oil & Gas Industries:</h4>
                    </div>
                    <div className="app-slide-review-box">
                        <Image src="/img/landfills.webp" alt="" width={800} height={400} />
                        <h4>Landfills</h4>
                    </div>
                    <div className="app-slide-review-box">
                        <Image src="/img/industrial-zones.webp" alt="" width={800} height={400} />
                        <h4>Industrial Zones</h4>
                    </div>
                </FresherCarousel>
            </section>

            {/* The Science of Smells */}
            <section className="science-smell">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="science-smell-heading">
                                <h2><span>The Science of Smells:</span> Which
                                    Pollutant Causes Which Odour?</h2>
                            </div>
                            <div className="science-smell-box">
                                <div className="pollutant-cause-img-box">
                                    <Image src="/img/ammonia.webp" alt="" width={300} height={400} />
                                    <div className="cause-txt-box">
                                        <h3>Ammonia (NH₃)</h3>
                                        <p>Sharp, pungent, and overpowering</p>
                                    </div>
                                </div>
                                <div className="pollutant-cause-img-box">
                                    <Image src="/img/hydrogen-sulfide.webp" alt="" width={300} height={400} />
                                    <div className="cause-txt-box">
                                        <h3>Hydrogen Sulfide (H₂S)</h3>
                                        <p>Has a rotten egg or sewage-like odor.</p>
                                    </div>
                                </div>
                                <div className="pollutant-cause-img-box">
                                    <Image src="/img/volatile-organic-compounds.webp" alt="" width={300} height={400} />
                                    <div className="cause-txt-box">
                                        <h3>Volatile Organic Compounds (VOCs)</h3>
                                        <p>Often gives off a paint-like, musty, or solvent odor.</p>
                                    </div>
                                </div>
                                <div className="pollutant-cause-img-box">
                                    <Image src="/img/formaldehyde.webp" alt="" width={300} height={400} />
                                    <div className="cause-txt-box">
                                        <h3>Formaldehyde (HCHO)</h3>
                                        <p>Smells like sharp chemicals, preservatives, or nail polish.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transform Your Monitor */}
            <section className="time-saver">
                <div className="time-saver-img">
                    <Image src="/img/time-saver-transform-monitor.webp" alt="" width={1000} height={500} />
                </div>
                <div className="time-saver-txt">
                    <h2><span>Transform Your Monitor into A</span> Time Saver</h2>
                    <p>Activate the Time Saver mode on your odour monitor to optimize battery usage and dim the screen for minimal distraction.</p>
                </div>
            </section>

            {/* What Indoor activities */}
            <section className="what-indoor">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="whats-indoor-heading">
                                <h2>
                                    <span> What Indoor activities  raises</span> Odour Score?
                                </h2>
                                <p>Some everyday activities can increase odour levels indoors. Understanding these activities helps in odour management and prevention!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="odour-score">
                                <ul className="top-icon">
                                    <li><Image src="/img/voc-icon.png" alt="" width={100} height={100} /></li>
                                    <li><Image src="/img/voc-icon.png" alt="" width={100} height={100} /></li>
                                    <li><Image src="/img/voc-icon.png" alt="" width={100} height={100} /></li>
                                </ul>
                                <ul className="bottom-icon">
                                    <li><Image src="/img/voc-icon.png" alt="" width={100} height={100} /></li>
                                    <li><Image src="/img/voc-icon.png" alt="" width={100} height={100} /></li>
                                    <li><Image src="/img/voc-icon.png" alt="" width={100} height={100} /></li>
                                </ul>
                                <h4>Cooking</h4>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="cleaing-score">
                                <ul className="top-icon">
                                    <li><Image src="/img/cleaning-h2s.png" alt="" width={100} height={100} /></li>
                                    <li><Image src="/img/cleaning-h2s.png" alt="" width={100} height={100} /></li>
                                    <li><Image src="/img/cleaning-h2s.png" alt="" width={100} height={100} /></li>
                                </ul>
                                <ul className="bottom-icon">
                                    <li><Image src="/img/cleaning-h2s.png" alt="" width={100} height={100} /></li>
                                    <li><Image src="/img/cleaning-h2s.png" alt="" width={100} height={100} /></li>
                                    <li><Image src="/img/cleaning-h2s.png" alt="" width={100} height={100} /></li>
                                </ul>
                                <h4>Cleaning</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="cleaing-score waste-disposal">
                                <ul className="top-icon">
                                    <li><Image src="/img/waste-disosal-nh3.png" alt="" width={100} height={100} /></li>
                                    <li><Image src="/img/waste-disosal-nh3.png" alt="" width={100} height={100} /></li>
                                    <li><Image src="/img/waste-disosal-nh3.png" alt="" width={100} height={100} /></li>
                                </ul>
                                <ul className="bottom-icon">
                                    <li><Image src="/img/waste-disosal-nh3.png" alt="" width={100} height={100} /></li>
                                    <li><Image src="/img/waste-disosal-nh3.png" alt="" width={100} height={100} /></li>
                                    <li><Image src="/img/waste-disosal-nh3.png" alt="" width={100} height={100} /></li>
                                </ul>
                                <h4>Waste Disposal</h4>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="odour-score">
                                <ul className="top-icon">
                                    <li><Image src="/img/paining-hcho.png" alt="" width={100} height={100} /></li>
                                    <li><Image src="/img/paining-hcho.png" alt="" width={100} height={100} /></li>
                                    <li><Image src="/img/paining-hcho.png" alt="" width={100} height={100} /></li>
                                </ul>
                                <ul className="bottom-icon">
                                    <li><Image src="/img/paining-hcho.png" alt="" width={100} height={100} /></li>
                                    <li><Image src="/img/paining-hcho.png" alt="" width={100} height={100} /></li>
                                    <li><Image src="/img/paining-hcho.png" alt="" width={100} height={100} /></li>
                                </ul>
                                <h4>Painting & Renovating</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="tech-spec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tech-heading">
                                <h2><span>Technical</span>
                                    <br />
                                    Specifications</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="btn-tech">
                                <Link href="#">Brochure</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row mob-grid">
                        <div className="col-lg-6">
                            <div className="tech-parameter">
                                <ul>
                                    <li>Parameters:</li>
                                    <li><h4>H2S, NH3, HCHO, TVOC, Humid, Temp.</h4></li>
                                </ul>
                                <ul>
                                    <li>Connectivity:</li>
                                    <li><h4>WiFi</h4></li>
                                </ul>
                                <ul>
                                    <li>Screen :</li>
                                    <li><h4>Coloured LED</h4></li>
                                </ul>
                                <ul>
                                    <li>Dimension : </li>
                                    <li><h4>11*3.4*7.5 cm</h4></li>
                                </ul>
                                <ul>
                                    <li>Weight:</li>
                                    <li><h4>175g</h4></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tech-parameter">
                                <ul>
                                    <li>Operations:</li>
                                    <li><h4>Button on the top</h4></li>
                                </ul>
                                <ul>
                                    <li>Battery capacity: </li>
                                    <li><h4>1600mAh</h4></li>
                                </ul>
                                <ul>
                                    <li>Storage:</li>
                                    <li><h4>Micro SD Card Storage AQI Cloud Storage</h4></li>
                                </ul>
                                <ul>
                                    <li>Mobile App:</li>
                                    <li><h4>AQI</h4></li>
                                </ul>
                                <ul>
                                    <li>Power Supply:</li>
                                    <li><h4>Type-C</h4></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fc-logo">
                    <Image src="/img/fc.png" alt="" width={100} height={30} />
                </div>
            </section>

            {/* Frequently Asked Questions */}
            <section className="faq-sec" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tech-heading faq-heading">
                                <h2><span>Frequently</span>
                                    <br />
                                    Asked Questions</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
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
                                            1.  What is the CAiR Odour Monitor?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            <p>
                                                The CAIR Odour monitor is an advanced device to check and monitor unpleasant smells in your environment. It can ensure a healthy and pleasant environment.
                                            </p>
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
                                            2. How does the CAiR Odor Monitor work?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            <p>
                                                The Odour monitor works with advanced sensors to identify pollutants causing odour. Always charge your monitor with the charger that comes along in the box for better operations.
                                            </p>
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
                                            3. Is the CAiR Odor Monitor easy to use or set up?
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            <p>
                                                Yes! The CAiR Odor Monitor is a compact and lightweight device that is easy to use. And it comes with a manual for an easy setup process.
                                            </p>
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
                                            4. Can I access the data remotely?
                                        </button>
                                    </h2>
                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            <p>
                                                Absolutely! You can access the real-time data of your device anytime anywhere with WiFi connectivity in your mobile or web dashboard.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
