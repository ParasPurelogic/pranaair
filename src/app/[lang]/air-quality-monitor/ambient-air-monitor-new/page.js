import FadeInText from "@/Components/FadeInText";
import "./style.css"
import TabSlider from "@/Components/Pages/AmbientAirmonitor/hero-slider";
import Image from "next/image";
import Link from "next/link";

export default async function AmbientAirMonito() {
    const tabs = [
        {
            key: 'ambient-pm',
            tablabel: 'Ambient PM',
            label: 'Essential Ambient Real-Time Monitoring',
            heading: 'Ambient PM – Reliable. Compact. Insightful.',
            content: 'Measure PM2.5, PM10, temperature, humidity, and AQI with a smart, efficient air quality monitor designed for everyday environmental tracking.',
            image: '/img/ambient-pm.webp',
            cta: {
                href: '/contact/ambient',
            },
        },
        {
            key: 'prana-sense',
            tablabel: 'Prana Sense',
            label: 'Smart Outdoor Air Monitoring, Redefined',
            heading: 'Prana Sense – Scalable. Sustainable. Real-Time.',
            content: 'Track pollutants and weather with accuracy, add-on solar power support, and remote access — ideal for smart cities and field deployments.',
            image: '/img/prana-sense.webp',
            cta: {
                href: '/contact/ambient',
            },
        },
        {
            key: 'ambient-pro',
            tablabel: 'Ambient Pro',
            label: 'All-in-One Environmental Intelligence',
            heading: 'Ambient Pro – Integrated. Powerful. Complete Monitoring. ',
            content: 'Monitor gases, particles, and full weather data in one advanced system with a built-in weather station and seamless connectivity.',
            image: '/img/ambient-pro.webp',
            cta: {
                href: '/contact/ambient',
            },
        },
    ];
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                <TabSlider tabs={tabs}></TabSlider>
            </section>

            {/* Explore Section */}
            <section className="explore-our">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-headign">
                                <FadeInText>
                                    <span className="sub-heading">Explore Our Range</span>
                                    <h2 className="page-heading">Choose Your Perfect Ambient Air Monitor</h2>
                                    <p>Prana Air’s ambient air quality monitoring devices are where your search stops.</p>
                                </FadeInText>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-tabs" id="partsLabelTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="ambient-pm-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#ambient-pm"
                                        type="button"
                                        role="tab"
                                        aria-controls="ambient-pm"
                                        aria-selected="true"
                                    >
                                        Ambient PM
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="ambient-pro-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#ambient-pro"
                                        type="button"
                                        role="tab"
                                        aria-controls="ambient-pro"
                                        aria-selected="false"
                                    >
                                        Prana Sense
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="prana-sense-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#prana-sense"
                                        type="button"
                                        role="tab"
                                        aria-controls="prana-sense"
                                        aria-selected="false"
                                    >
                                        Ambient Pro
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-12">
                            <div className="tab-content" id="partsLabelTabContent">
                                <div className="tab-pane fade show active" id="ambient-pm" role="tabpanel" aria-labelledby="ambient-pm-tab">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="main-box">
                                                <div className="choose-monitor-txt">
                                                    <h3><strong>Ambient PM –</strong> Simple by Design, Powerful in Data. </h3>
                                                    <p>Monitor what truly matters. PM2.5, PM10, AQI, Temperature, and Humidity –
                                                        all in one compact device. Simple to use. Reliable by design.</p>
                                                </div>
                                                <div className="feature">
                                                    <p>Features</p>
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <Image src="/img/low-cost-icon.png" width={40} height={40} alt=""></Image>
                                                            </span>
                                                            <span>Low-cost real-time air
                                                                quality monitoring</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <Image src="/img/low-cost-icon.png" width={40} height={40} alt=""></Image>
                                                            </span>
                                                            <span>Low-cost real-time air
                                                                quality monitoring</span>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <Image src="/img/low-cost-icon.png" width={40} height={40} alt=""></Image>
                                                            </span>
                                                            <span>Low-cost real-time air
                                                                quality monitoring</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <Image src="/img/low-cost-icon.png" width={40} height={40} alt=""></Image>
                                                            </span>
                                                            <span>Low-cost real-time air
                                                                quality monitoring</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="parameters">
                                                    <ul>
                                                        <li>AQI</li>
                                                        <li>AQI</li>
                                                        <li>AQI</li>
                                                        <li>AQI</li>
                                                        <li>Temperature</li>
                                                        <li>Humidity</li>
                                                    </ul>
                                                </div>
                                                <div className="button-brochure">
                                                    <ul>
                                                        <li>
                                                            <Link href="#">
                                                                <Image src="/img/download-brochure.png" width={27} height={27} alt=""></Image>
                                                                Download Brochure
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                Get a Quote
                                                                <Image src="/img/get-icon.png" width={16} height={16} alt=""></Image>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="choose-monitor-img">
                                                <Image src="/img/ambient-pm-monitor.webp" width={500} height={500} alt=""></Image>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="ambient-pro" role="tabpanel" aria-labelledby="ambient-pro-tab">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="main-box">
                                                <div className="choose-monitor-txt">
                                                    <h3><strong>Prana Sense –</strong> Simple by Design, Powerful in Data. </h3>
                                                    <p>Monitor what truly matters. PM2.5, PM10, AQI, Temperature, and Humidity –
                                                        all in one compact device. Simple to use. Reliable by design.</p>
                                                </div>
                                                <div className="feature">
                                                    <p>Features</p>
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <Image src="/img/low-cost-icon.png" width={40} height={40} alt=""></Image>
                                                            </span>
                                                            <span>Low-cost real-time air
                                                                quality monitoring</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <Image src="/img/low-cost-icon.png" width={40} height={40} alt=""></Image>
                                                            </span>
                                                            <span>Low-cost real-time air
                                                                quality monitoring</span>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <Image src="/img/low-cost-icon.png" width={40} height={40} alt=""></Image>
                                                            </span>
                                                            <span>Low-cost real-time air
                                                                quality monitoring</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <Image src="/img/low-cost-icon.png" width={40} height={40} alt=""></Image>
                                                            </span>
                                                            <span>Low-cost real-time air
                                                                quality monitoring</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="parameters">
                                                    <ul>
                                                        <li>AQI</li>
                                                        <li>AQI</li>
                                                        <li>AQI</li>
                                                        <li>AQI</li>
                                                        <li>Temperature</li>
                                                        <li>Humidity</li>
                                                    </ul>
                                                </div>
                                                <div className="button-brochure">
                                                    <ul>
                                                        <li>
                                                            <Link href="#">
                                                                <Image src="/img/download-brochure.png" width={27} height={27} alt=""></Image>
                                                                Download Brochure
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                Get a Quote
                                                                <Image src="/img/get-icon.png" width={16} height={16} alt=""></Image>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="choose-monitor-img">
                                                <Image src="/img/ambient-pm-monitor.webp" width={500} height={500} alt=""></Image>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="prana-sense" role="tabpanel" aria-labelledby="prana-sense-tab">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="main-box">
                                                <div className="choose-monitor-txt">
                                                    <h3><strong>Ambient Pro –</strong> Simple by Design, Powerful in Data. </h3>
                                                    <p>Monitor what truly matters. PM2.5, PM10, AQI, Temperature, and Humidity –
                                                        all in one compact device. Simple to use. Reliable by design.</p>
                                                </div>
                                                <div className="feature">
                                                    <p>Features</p>
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <Image src="/img/low-cost-icon.png" width={40} height={40} alt=""></Image>
                                                            </span>
                                                            <span>Low-cost real-time air
                                                                quality monitoring</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <Image src="/img/low-cost-icon.png" width={40} height={40} alt=""></Image>
                                                            </span>
                                                            <span>Low-cost real-time air
                                                                quality monitoring</span>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <Image src="/img/low-cost-icon.png" width={40} height={40} alt=""></Image>
                                                            </span>
                                                            <span>Low-cost real-time air
                                                                quality monitoring</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <Image src="/img/low-cost-icon.png" width={40} height={40} alt=""></Image>
                                                            </span>
                                                            <span>Low-cost real-time air
                                                                quality monitoring</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="parameters">
                                                    <ul>
                                                        <li>AQI</li>
                                                        <li>AQI</li>
                                                        <li>AQI</li>
                                                        <li>AQI</li>
                                                        <li>Temperature</li>
                                                        <li>Humidity</li>
                                                    </ul>
                                                </div>
                                                <div className="button-brochure">
                                                    <ul>
                                                        <li>
                                                            <Link href="#">
                                                                <Image src="/img/download-brochure.png" width={27} height={27} alt=""></Image>
                                                                Download Brochure
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                Get a Quote
                                                                <Image src="/img/get-icon.png" width={16} height={16} alt=""></Image>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="choose-monitor-img">
                                                <Image src="/img/ambient-pm-monitor.webp" width={500} height={500} alt=""></Image>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Performance Section */}
            <section className="performance">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="perform-heading">
                                <FadeInText>
                                    <span className="sub-heading">Performance Meets Affordability</span>
                                    <h2 className="page-heading">Why Prana Air Stands Out in Air Monitoring?</h2>
                                </FadeInText>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="performance-meets">
                                <ul>
                                    <li>
                                        <Image src="/img/realt-time.png" width={100} height={75} alt=""></Image>
                                        <p>Real-time air quality monitoring</p>
                                    </li>
                                    <li>
                                        <Image src="/img/realt-time.png" width={100} height={75} alt=""></Image>
                                        <p>Real-time air quality monitoring</p>
                                    </li>
                                    <li>
                                        <Image src="/img/realt-time.png" width={100} height={75} alt=""></Image>
                                        <p>Real-time air quality monitoring</p>
                                    </li>
                                    <li>
                                        <Image src="/img/realt-time.png" width={100} height={75} alt=""></Image>
                                        <p>Real-time air quality monitoring</p>
                                    </li>
                                    <li>
                                        <Image src="/img/realt-time.png" width={100} height={75} alt=""></Image>
                                        <p>Real-time air quality monitoring</p>
                                    </li>
                                    <li>
                                        <Image src="/img/realt-time.png" width={100} height={75} alt=""></Image>
                                        <p>Real-time air quality monitoring</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}