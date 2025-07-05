import FadeInText from "@/Components/FadeInText";
import "./style.css"
import TabSlider from "@/Components/Pages/AmbientAirmonitor/hero-slider";
import Image from "next/image";
import Link from "next/link";
import FresherCarousel from "@/Components/Pages/FreshAirMachine/applications-slider"
import CustomDragCursorCarousel from "@/Components/Pages/AmbientAirmonitor/MotionCarousel";
import ToxicPollutantsSection from "@/Components/Pages/AmbientAirmonitor/zoom-animation"

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
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
        },
    };
    const toxicContent = {
        heading: 'Your Data. Always Within Reach.',
        subheading: 'Your Data. Always Within Reach.',
        description: 'Your Data. Always Within Reach.',
        pollutants: [
            {
                label: 'Your',
                image: "/img/hcho.png",
            },
            {
                label: 'Your',
                image: "/img/particulate-matter.png",
            },
            {
                label: 'Your',
                image: "/img/tvoc-icon.png",
            },
            {
                label: 'Your',
                image: "/img/carbon-dioxide.png",
            },
        ],
    }
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
    const study = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }
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
                                    <div className="row mob-row">
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
                                                                <Image src="/img/portable-icon.png" width={40} height={40} alt=""></Image>
                                                            </span>
                                                            <span>Portable and easy to
                                                                carry anywhere</span>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <Image src="/img/weatherproof-icon.png" width={40} height={40} alt=""></Image>
                                                            </span>
                                                            <span>Fully Waterproof
                                                                Housing</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <Image src="/img/compact-device.png" width={40} height={40} alt=""></Image>
                                                            </span>
                                                            <span>Compact and light
                                                                weight design</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="parameters">
                                                    <ul>
                                                        <li>AQI</li>
                                                        <li>PM1</li>
                                                        <li>PM2.5</li>
                                                        <li>PM10</li>
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
                                    <div className="row mob-row">
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
                                                <Image src="/img/prana-sense-air-monitor.webp" width={500} height={500} alt=""></Image>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="prana-sense" role="tabpanel" aria-labelledby="prana-sense-tab">
                                    <div className="row mob-row">
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
                                                <Image src="/img/ambient-pro-air-monitor.webp" width={500} height={500} alt=""></Image>
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
                                        <Image src="/img/real-time-data-monitoring.png" width={100} height={75} alt=""></Image>
                                        <p>Real-time air quality monitoring</p>
                                    </li>
                                    <li>
                                        <Image src="/img/low-cost-monitors.png" width={100} height={75} alt=""></Image>
                                        <p>Real-time air quality monitoring</p>
                                    </li>
                                    <li>
                                        <Image src="/img/reliable-sensors.png" width={100} height={75} alt=""></Image>
                                        <p>Highly accurate and reliable sensors</p>
                                    </li>
                                    <li>
                                        <Image src="/img/cloud-data-access.png" width={100} height={75} alt=""></Image>
                                        <p>Data accessibility on website, mobile & TV apps</p>
                                    </li>
                                    <li>
                                        <Image src="/img/connectivity.png" width={100} height={75} alt=""></Image>
                                        <p>Multiple modes of connectivity</p>
                                    </li>
                                    <li>
                                        <Image src="/img/low-cost-maintenance.png" width={100} height={75} alt=""></Image>
                                        <p>Low-cost maintenance expense</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insights Section */}
            <section className="insights-tab">
                <div className="part-label-tab">
                    <div className="tab-content" id="partsLabelTabContent2">
                        <div className="tab-pane fade show active" id="ambient-pm-2" role="tabpanel" aria-labelledby="ambient-pm-tab-2">
                            <div className="common-bg weather">
                                <FadeInText>
                                    <span>Ambient PM</span>
                                    <h2>Weather-Enhanced Monitoring for Smarter Air Quality Insights</h2>
                                    <p>Easily connect to Prana Air’s weather station through a single cable — turning Ambient PM into a more advanced, multi-parameter environmental monitor.</p>
                                    <Link href="#" className="hero-btn">
                                        Know More
                                        <Image src='/img/hero-btn.png' width={50} height={50} alt="arrow icon" />
                                    </Link>
                                </FadeInText>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="ambient-pro-2" role="tabpanel" aria-labelledby="ambient-pro-tab-2">
                            <div className="common-bg sense">
                                <FadeInText>
                                    <span>Prana Sense</span>
                                    <h2>Weather-Enhanced Monitoring for Smarter Air Quality Insights</h2>
                                    <p>Easily connect to Prana Air’s weather station through a single cable — turning Ambient PM into a more advanced, multi-parameter environmental monitor.</p>
                                    <Link href="#" className="hero-btn">
                                        Know More
                                        <Image src='/img/hero-btn.png' width={50} height={50} alt="arrow icon" />
                                    </Link>
                                </FadeInText>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="prana-sense-2" role="tabpanel" aria-labelledby="prana-sense-tab-2">
                            <div className="common-bg ambient-pro">
                                <FadeInText>
                                    <span>Ambient Pro</span>
                                    <h2>Weather-Enhanced Monitoring for Smarter Air Quality Insights</h2>
                                    <p>Easily connect to Prana Air’s weather station through a single cable — turning Ambient PM into a more advanced, multi-parameter environmental monitor.</p>
                                    <Link href="#" className="hero-btn">
                                        Know More
                                        <Image src='/img/hero-btn.png' width={50} height={50} alt="arrow icon" />
                                    </Link>
                                </FadeInText>
                            </div>
                        </div>
                    </div>
                    <ul className="nav nav-tabs" id="partsLabelTab2" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="ambient-pm-tab-2" data-bs-toggle="tab"
                                data-bs-target="#ambient-pm-2" type="button" role="tab" aria-controls="ambient-pm-2"
                                aria-selected="true">
                                Ambient PM
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="ambient-pro-tab-2" data-bs-toggle="tab" data-bs-target="#ambient-pro-2"
                                type="button" role="tab" aria-controls="ambient-pro-2" aria-selected="false">
                                Ambient Pro
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="prana-sense-tab-2" data-bs-toggle="tab" data-bs-target="#prana-sense-2"
                                type="button" role="tab" aria-controls="prana-sense-2" aria-selected="false">
                                Prana Sense
                            </button>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Built for Every Scenario */}
            <section className="built-scenario">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="built-heading">
                                <FadeInText>
                                    <span className="sub-heading">Built for Every Scenario</span>
                                    <h2 className="page-heading">From Smart Cities to Construction Sites – Real-World Impact</h2>
                                    <p>From construction sites to smart cities, Ambient Monitors help industries safeguard health, ensure compliance, and reduce environmental impact.</p>
                                </FadeInText>
                            </div>
                        </div>
                    </div>
                </div>
                <CustomDragCursorCarousel responsive={responsive}>
                    <div className="app-slide-review-box">
                        <Image src="/img/building-new-concrete-houses.webp" alt="" width={800} height={400} />
                        <h4>Sewage Treatment Plants</h4>
                        <p>Construction sites are a major source of dust and other pollutants. Prana Air can help construction sites to monitor their air quality levels and take steps to reduce emissions.</p>
                    </div>
                    <div className="app-slide-review-box">
                        <Image src="/img/smart-city-air-quality-monitor.webp" alt="" width={800} height={400} />
                        <h4>Public Toilets</h4>
                        <p>Construction sites are a major source of dust and other pollutants. Prana Air can help construction sites to monitor their air quality levels and take steps to reduce emissions.</p>
                    </div>
                    <div className="app-slide-review-box">
                        <Image src="/img/parking-lot-air-quality-monitor.webp" alt="" width={800} height={400} />
                        <h4>Wastewater Facilities</h4>
                        <p>Construction sites are a major source of dust and other pollutants. Prana Air can help construction sites to monitor their air quality levels and take steps to reduce emissions.</p>
                    </div>
                    <div className="app-slide-review-box">
                        <Image src="/img/airport-air-quality-monitor.webp" alt="" width={800} height={400} />
                        <h4>Oil & Gas Industries:</h4>
                        <p>Construction sites are a major source of dust and other pollutants. Prana Air can help construction sites to monitor their air quality levels and take steps to reduce emissions.</p>
                    </div>
                    <div className="app-slide-review-box">
                        <Image src="/img/construction-workers-carrying-shovel-construction-site.webp" alt="" width={800} height={400} />
                        <h4>Landfills</h4>
                        <p>Construction sites are a major source of dust and other pollutants. Prana Air can help construction sites to monitor their air quality levels and take steps to reduce emissions.</p>
                    </div>
                    <div className="app-slide-review-box">
                        <Image src="/img/construction-site.webp" alt="" width={800} height={400} />
                        <h4>Industrial Zones</h4>
                        <p>Construction sites are a major source of dust and other pollutants. Prana Air can help construction sites to monitor their air quality levels and take steps to reduce emissions.</p>
                    </div>
                </CustomDragCursorCarousel>
            </section>

            {/* Modes of Connectivity */}
            <ToxicPollutantsSection toxicContent={toxicContent} />

            {/* Accurate. Outdoor. Smart. */}
            <section className="reliable">
                <FresherCarousel responsive={trusted} className="review-slider">
                    <div className="accurate-box">
                        <Image src="/img/reliable-outdoor-monitor.webp" alt="" width={1000} height={600} />
                        <div className="accurate-text">
                            <FadeInText>
                                <span className="sub-heading">Accurate. Outdoor. Smart.</span>
                                <h2 className="page-heading">Reliable Outdoor PM & AQI Monitoring</h2>
                                <Link href="">Request a quote <Image src="/img/accurate-icon.png" alt="" width={16} height={16} /></Link>
                            </FadeInText>
                        </div>
                    </div>
                    <div className="accurate-box">
                        <Image src="/img/comprehensive-monitor.webp" alt="" width={1000} height={600} />
                        <div className="accurate-text">
                            <FadeInText>
                                <span className="sub-heading">Accurate. Outdoor. Smart.</span>
                                <h2 className="page-heading">Reliable Outdoor PM & AQI Monitoring</h2>
                                <Link href="">Request a quote <Image src="/img/accurate-icon.png" alt="" width={16} height={16} /></Link>
                            </FadeInText>
                        </div>
                    </div>
                    <div className="accurate-box">
                        <Image src="/img/next-gen-outdoor.webp" alt="" width={1000} height={600} />
                        <div className="accurate-text">
                            <FadeInText>
                                <span className="sub-heading">Accurate. Outdoor. Smart.</span>
                                <h2 className="page-heading">Reliable Outdoor PM & AQI Monitoring</h2>
                                <Link href="">Request a quote <Image src="/img/accurate-icon.png" alt="" width={16} height={16} /></Link>
                            </FadeInText>
                        </div>
                    </div>
                </FresherCarousel>
            </section>

            {/* Parts & Label */}
            <section className="part-label">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="part-heaidng">
                                <FadeInText>
                                    <span className="sub-heading">Parts & Label</span>
                                    <h2 className="page-heading">Components & Identification</h2>
                                </FadeInText>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="nav nav-tabs" id="partsLabelTab3" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="ambient-pm-tab-3" data-bs-toggle="tab"
                                        data-bs-target="#ambient-pm-3" type="button" role="tab" aria-controls="ambient-pm-3"
                                        aria-selected="true">
                                        Ambient PM
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="ambient-pro-tab-3" data-bs-toggle="tab" data-bs-target="#ambient-pro-3"
                                        type="button" role="tab" aria-controls="ambient-pro-3" aria-selected="false">
                                        Prana Sense
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="prana-sense-tab-3" data-bs-toggle="tab" data-bs-target="#prana-sense-3"
                                        type="button" role="tab" aria-controls="prana-sense-3" aria-selected="false">
                                        Ambient Pro
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="part-label-tab">
                    <div className="tab-content" id="partsLabelTabContent3">
                        <div className="tab-pane fade show active" id="ambient-pm-3" role="tabpanel" aria-labelledby="ambient-pm-tab-3">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="part-item-img">
                                            <Image src="/img/ambient-pm-parts-label.webp" alt="" width={1000} height={600} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="part-ponts">
                                            <ul>
                                                <li>
                                                    <span>1</span>
                                                    <p>PM Sensor Inlet (2)</p>
                                                </li>
                                                <li>
                                                    <span>2</span>
                                                    <p>GPS Antenna</p>
                                                </li>
                                                <li>
                                                    <span>3</span>
                                                    <p>Air Inlet - T/H</p>
                                                </li>
                                                <li>
                                                    <span>4</span>
                                                    <p>Mode Button</p>
                                                </li>
                                                <li>
                                                    <span>5</span>
                                                    <p>Micro SD Card Slot</p>
                                                </li>
                                                <li>
                                                    <span>6</span>
                                                    <p>Power Button</p>
                                                </li>
                                                <li>
                                                    <span>7</span>
                                                    <p>12V DC</p>
                                                </li>
                                                <li>
                                                    <span>8</span>
                                                    <p>Weather Station Slot</p>
                                                </li>
                                                <li>
                                                    <span>9</span>
                                                    <p>RS485/ Relay</p>
                                                </li>
                                                <li>
                                                    <span>10</span>
                                                    <p>Air Out</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="ambient-pro-3" role="tabpanel" aria-labelledby="ambient-pro-tab-3">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="part-item-img prana-sens">
                                            <Image src="/img/prana-sense-parts-label.webp" alt="" width={1000} height={600} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="part-ponts">
                                            <ul>
                                                <li>
                                                    <span>1</span>
                                                    <p>Mode Button</p>
                                                </li>
                                                <li>
                                                    <span>2</span>
                                                    <p>Power Button</p>
                                                </li>
                                                <li>
                                                    <span>3</span>
                                                    <p>PM Sensor Inlet (2)</p>
                                                </li>
                                                <li>
                                                    <span>4</span>
                                                    <p>Air Inlet - Temperature & Humidity</p>
                                                </li>
                                                <li>
                                                    <span>5</span>
                                                    <p>Micro SD Card Slot</p>
                                                </li>
                                                <li>
                                                    <span>6</span>
                                                    <p>Weather Station Slot</p>
                                                </li>
                                                <li>
                                                    <span>7</span>
                                                    <p>12V DC</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="prana-sense-3" role="tabpanel" aria-labelledby="prana-sense-tab-3">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="part-item-img ambient-pro-label">
                                            <Image src="/img/ambient-pro-parts-label.webp" alt="" width={1000} height={600} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="part-ponts">
                                            <ul>
                                                <li>
                                                    <span>1</span>
                                                    <p>Mode Button</p>
                                                </li>
                                                <li>
                                                    <span>2</span>
                                                    <p>Weather station</p>
                                                </li>
                                                <li>
                                                    <span>3</span>
                                                    <p>PM Sensor Inlet (2)</p>
                                                </li>
                                                <li>
                                                    <span>4</span>
                                                    <p>Air Inlet - Temperature & Humidity</p>
                                                </li>
                                                <li>
                                                    <span>5</span>
                                                    <p>Micro SD Card Slot</p>
                                                </li>
                                                <li>
                                                    <span>6</span>
                                                    <p>Weather Station Slot</p>
                                                </li>
                                                <li>
                                                    <span>7</span>
                                                    <p>12V DC</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data & Access */}
            <section className="data-access">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="data-heading">
                                <FadeInText>
                                    <span className="sub-heading">Connectivity That Fits Your Network.</span>
                                    <h2 className="page-heading">Data Accessibility & Analysis</h2>
                                </FadeInText>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="nav nav-tabs" id="partsLabelTab4" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="ambient-pm-tab-4" data-bs-toggle="tab"
                                        data-bs-target="#ambient-pm-4" type="button" role="tab" aria-controls="ambient-pm-4"
                                        aria-selected="true">
                                        Ambient PM
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="ambient-pro-tab-4" data-bs-toggle="tab" data-bs-target="#ambient-pro-4"
                                        type="button" role="tab" aria-controls="ambient-pro-4" aria-selected="false">
                                        Prana Sense
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="prana-sense-tab-4" data-bs-toggle="tab" data-bs-target="#prana-sense-4"
                                        type="button" role="tab" aria-controls="prana-sense-4" aria-selected="false">
                                        Ambient Pro
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="datatab">
                                <div className="tab-content" id="partsLabelTabContent4">
                                    <div className="tab-pane fade show active" id="ambient-pm-4" role="tabpanel" aria-labelledby="ambient-pm-tab-4">
                                        <div className="data-box ama">
                                            <div className="logo-brand-aq">
                                                <Image src="/img/aqi-logo.png" width={100} height={60} alt="" ></Image>
                                            </div>
                                            <div className="data-text">
                                                <h3>AQI Mobile App</h3>
                                                <p>Access your ambient air monitor data on the app.</p>
                                                <ul>
                                                    <li>
                                                        <Link href="#"><Image src="/img/app-btn.png" width={190} height={50} alt=""  ></Image> </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#"><Image src="/img/playstore-btn.png" width={190} height={50} alt=""  ></Image> </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="real-time">
                                                <ul>
                                                    <li>
                                                        <Image src="/img/real-time.png" width={190} height={50} alt=""  ></Image>
                                                        <p>Real-time air quality API for accurate global data</p>
                                                    </li>
                                                    <li>
                                                        <Image src="/img/insightful-dashboard.png" width={190} height={50} alt=""  ></Image>
                                                        <p>Insightful Air quality monitoring dashboard</p>
                                                    </li>
                                                    <li>
                                                        <Image src="/img/world-air-pollution-map.png" width={190} height={50} alt=""  ></Image>
                                                        <p>World air pollution map and weather map</p>
                                                    </li>
                                                    <li>
                                                        <Image src="/img/compare-different-air-quality-parameters.png" width={190} height={50} alt=""  ></Image>
                                                        <p>Compare different air quality parameters of two or more location</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="ambient-pro-4" role="tabpanel" aria-labelledby="ambient-pro-tab-4">
                                        <div className="data-box aqd">
                                            <div className="logo-brand-aq">
                                                <Image src="/img/aqi-logo.png" width={100} height={60} alt=""  ></Image>
                                            </div>
                                            <div className="data-text">
                                                <h3>AQI Mobile App</h3>
                                                <p>Access your ambient air monitor data on the app.</p>
                                                <ul>
                                                    <li>
                                                        <Link href="#"><Image src="/img/app-btn.png" width={190} height={50} alt=""  ></Image> </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#"><Image src="/img/playstore-btn.png" width={190} height={50} alt=""  ></Image> </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="real-time">
                                                <ul>
                                                    <li>
                                                        <Image src="/img/analysis-polluted-city.png" width={190} height={50} alt=""  ></Image>
                                                        <p>Analysis: World’s most polluted cities and countries.</p>
                                                    </li>
                                                    <li>
                                                        <Image src="/img/health-advice.png" width={190} height={50} alt=""  ></Image>
                                                        <p>Health advice based on real-time air quality index</p>
                                                    </li>
                                                    <li>
                                                        <Image src="/img/weather-forecast.png" width={190} height={50} alt=""  ></Image>
                                                        <p>Weather forecast of your current selected location</p>
                                                    </li>
                                                    <li>
                                                        <Image src="/img/compare-different-air-quality-parameters.png" width={190} height={50} alt=""  ></Image>
                                                        <p>Compare different air quality parameters of two or more location</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="prana-sense-4" role="tabpanel" aria-labelledby="prana-sense-tab-4">
                                        <div className="data-box ata">
                                            <div className="logo-brand-aq">
                                                <Image src="/img/aqi-logo.png" width={100} height={60} alt=""  ></Image>
                                            </div>
                                            <div className="data-text">
                                                <h3>AQI Mobile App</h3>
                                                <p>Access your ambient air monitor data on the app.</p>
                                                <ul>
                                                    <li>
                                                        <Link href="#"><Image src="/img/app-btn.png" width={190} height={50} alt=""  ></Image> </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#"><Image src="/img/playstore-btn.png" width={190} height={50} alt=""  ></Image> </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="real-time">
                                                <ul>
                                                    <li>
                                                        <Image src="/img/compare-different-air-quality-parameters.png" width={190} height={50} alt=""  ></Image>
                                                        <p>Outdoor vs Indoor Air Quality data</p>
                                                    </li>
                                                    <li>
                                                        <Image src="/img/24x7-remote-access.png" width={190} height={50} alt=""  ></Image>
                                                        <p>24*7 remote access to the monitored data</p>
                                                    </li>
                                                    <li>
                                                        <Image src="/img/aqi-tv-app.png" width={190} height={50} alt=""  ></Image>
                                                        <p>AQI TV app controlled by AQI mobile app.</p>
                                                    </li>
                                                    <li>
                                                        <Image src="/img/multiple-ranges.png" width={190} height={50} alt=""  ></Image>
                                                        <p>Choose from multiple ranges of themes.</p>
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

            {/* construction site */}
            <section className="construction-site">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <FadeInText>
                                <span className="sub-heading">Air Quality Compliance Made Easy</span>
                                <h2 className="page-heading">Construction Sites Covered by Ambient Monitor</h2>
                                <Link href="" className="hero-btn">
                                    Request a Quote
                                    <Image src='/img/hero-btn.png' width={50} height={50} alt="arrow icon" />
                                </Link>
                            </FadeInText>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="float-img">
                                <ul>
                                    <li>
                                        <Image src='/img/construction-covered.webp' width={50} height={50} alt="arrow icon" />
                                    </li>
                                    <li>
                                        <Image src='/img/dpcc-guidlines.webp' width={50} height={50} alt="arrow icon" />
                                    </li>
                                    <li>
                                        <Image src='/img/bmc.webp' width={50} height={50} alt="arrow icon" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="case-study">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="case-heading">
                                <FadeInText>
                                    <span className="sub-heading">Case Studies</span>
                                    <h2 className="page-heading">Strategic Implementation Overview</h2>
                                    <p>Here are some of the top organisations that have installed our ambient monitors.</p>
                                </FadeInText>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <FresherCarousel responsive={study} className="case-slider">
                                <div className="app-slide-review-box">
                                    <Link href="">
                                        <Image src='/img/prana-air-ambient-air-quality-monitors-tata-steel.webp' width={150} height={150} alt="arrow icon" />
                                        <h3>Aided TATA STEEL Plant In Hyperlocal Air Monitoring</h3>
                                    </Link>
                                </div>
                                <div className="app-slide-review-box">
                                    <Link href="">
                                        <Image src='/img/prana-air-ambient-air-quality-monitors-tata-steel.webp' width={150} height={150} alt="arrow icon" />
                                        <h3>Aided TATA STEEL Plant In Hyperlocal Air Monitoring</h3>
                                    </Link>
                                </div>
                                <div className="app-slide-review-box">
                                    <Link href="">
                                        <Image src='/img/prana-air-ambient-air-quality-monitors-tata-steel.webp' width={150} height={150} alt="arrow icon" />
                                        <h3>Aided TATA STEEL Plant In Hyperlocal Air Monitoring</h3>
                                    </Link>
                                </div>
                                <div className="app-slide-review-box">
                                    <Link href="">
                                        <Image src='/img/prana-air-ambient-air-quality-monitors-tata-steel.webp' width={150} height={150} alt="arrow icon" />
                                        <h3>Aided TATA STEEL Plant In Hyperlocal Air Monitoring</h3>
                                    </Link>
                                </div>
                                <div className="app-slide-review-box">
                                    <Link href="">
                                        <Image src='/img/prana-air-ambient-air-quality-monitors-tata-steel.webp' width={150} height={150} alt="arrow icon" />
                                        <h3>Aided TATA STEEL Plant In Hyperlocal Air Monitoring</h3>
                                    </Link>
                                </div>
                                <div className="app-slide-review-box">
                                    <Link href="">
                                        <Image src='/img/prana-air-ambient-air-quality-monitors-tata-steel.webp' width={150} height={150} alt="arrow icon" />
                                        <h3>Aided TATA STEEL Plant In Hyperlocal Air Monitoring</h3>
                                    </Link>
                                </div>
                            </FresherCarousel>
                        </div>
                    </div>
                </div>
            </section>

            {/* dive */}
            <div className="details-heading">
                <FadeInText>
                    <span className="sub-heading">Dive into the Details</span>
                    <h2 className="page-heading">What Powers Each Ambient Air Monitor</h2>
                </FadeInText>
            </div>
            <section className="comparison-section">
                <div className="table-wrapper">
                    <table className="comparison-table">
                        <thead>
                            <tr className="compar-heading">
                                <th>Features</th>
                                <th><span>Ambient Pro</span></th>
                                <th><span>Ambient PM</span></th>
                                <th><span>Prana Sense</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Basic Parameters</td>
                                <td>AQI, PM1, PM2.5, PM10, Temperature and Humidity</td>
                                <td>Ambient Lite + O3, CH4, Noise, NH3, LUX, Wind Speed, Wind Direction, Rainfall and UV Index</td>
                                <td>PM10, PM2.5, PM1, temp., Humi., CO2, NO2, CO, SO2, O3, NH3, TVOC, MOS, Noise, CH4</td>
                            </tr>
                            <tr>
                                <td>Connectivity</td>
                                <td>WiFi or GSM</td>
                                <td>WiFi or GSM(4G) and RS-485 (MODBUS)</td>
                                <td>Wi-Fi, GSM, LoRa and RS-485</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>600g (Approx)</td>
                                <td>1.4kg (Approx)</td>
                                <td>1 kg (Approx)</td>
                            </tr>
                            <tr>
                                <td>Data Interval</td>
                                <td>30s to 1 hour</td>
                                <td>30 sec to 1 Hour</td>
                                <td>30 sec to 1 Hour</td>
                            </tr>
                            <tr>
                                <td>USB Type</td>
                                <td>Micro USB</td>
                                <td>--</td>
                                <td>--</td>
                            </tr>
                            <tr>
                                <td>Mobile App</td>
                                <td>AQI App (available on iOS and Android)</td>
                                <td>AQI Mobile App</td>
                                <td>AQI Mobile App</td>
                            </tr>
                            <tr>
                                <td>Dimensions</td>
                                <td>16.5 x 5 x 11.5 (cm)</td>
                                <td>18 x 38 (cm)</td>
                                <td>230 x 150 x 85mm</td>
                            </tr>
                            <tr>
                                <td>Storage</td>
                                <td>AQI Cloud Storage</td>
                                <td>AQI Cloud Storage</td>
                                <td>Micro SD Card Storage + Cloud Storage (with AQI Dashboard)</td>
                            </tr>
                            <tr>
                                <td>Housing</td>
                                <td>Weatherproof</td>
                                <td>Weatherproof</td>
                                <td>Weatherproof</td>
                            </tr>
                            <tr>
                                <td>Power</td>
                                <td>--</td>
                                <td>--</td>
                                <td>Inbuilt Solar Panel</td>
                            </tr>
                            <tr>
                                <td>Display Size</td>
                                <td>--</td>
                                <td>--</td>
                                <td>Monochrome 3.5 inch</td>
                            </tr>
                            <tr>
                                <td>Battery</td>
                                <td>--</td>
                                <td>--</td>
                                <td>40,000 mAh in-built Backup (96 Hours)</td>
                            </tr>
                            <tr className="buttons-row">
                                <td></td>
                                <td>
                                    <div className="compare-btn">
                                        <Link href="#" className="download-brochur"><Image src="/img/download-brochure.png" alt="" width={20} height={20} /> Download Brochure</Link>
                                        <Link href="#" className="quote"><Image src="/img/get-icon.png" alt="" width={20} height={20} /> Get a Quote </Link>
                                    </div>
                                </td>
                                <td>
                                    <div className="compare-btn">
                                        <Link href="#" className="download-brochur"><Image src="/img/download-brochure.png" alt="" width={20} height={20} /> Download Brochure</Link>
                                        <Link href="#" className="quote"><Image src="/img/get-icon.png" alt="" width={20} height={20} /> Get a Quote </Link>
                                    </div>
                                </td>
                                <td>
                                    <div className="compare-btn">
                                        <Link href="#" className="download-brochur"><Image src="/img/download-brochure.png" alt="" width={20} height={20} /> Download Brochure</Link>
                                        <Link href="#" className="quote"><Image src="/img/get-icon.png" alt="" width={20} height={20} /> Get a Quote </Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Clintele */}
            <section className="all-company-sec">
                <div className="client-heading">
                    <FadeInText>
                        <span className="sub-heading">Clintele</span>
                        <h2 className="page-heading">Organisations We Work With</h2>
                    </FadeInText>
                </div>
                <div className="container-fluid">
                    <div className="col-lg-12">
                        <div className="container-fluid">
                            <div className="marquee">
                                <div className="marquee-inner">
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/taj.png" alt="taj logo" />
                                            </li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/mahindra.png" alt="mahindra" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/renault-nissan.png" alt="renault logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/marriott.png" alt="marriott logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/tata.png" alt="tata logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/havells.png" alt="havells logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/microsoft.png" alt="microsoft logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/iit-bombay.png" alt="iit-bombay logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/UOC.png" alt="UOC logo" />
                                            </li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Symbiosis-Pune.png" alt="Symbiosis logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Siemens.png" alt="Siemens logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Schneider-Electric-.png" alt="Schneider logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/OLA.png" alt="OLA logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/WRI.png" alt="WRI logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/BITS-pilani.png" alt="BITS-pilani logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/BIRLA-Ultratech.png" alt="BIRLA-Ultratech logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/taj.png" alt="taj logo" />
                                            </li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/mahindra.png" alt="mahindra" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/renault-nissan.png" alt="renault logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/marriott.png" alt="marriott logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/tata.png" alt="tata logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/havells.png" alt="havells logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/microsoft.png" alt="microsoft logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/iit-bombay.png" alt="iit-bombay logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/UOC.png" alt="UOC logo" />
                                            </li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Symbiosis-Pune.png" alt="Symbiosis logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Siemens.png" alt="Siemens logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Schneider-Electric-.png" alt="Schneider logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/OLA.png" alt="OLA logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/WRI.png" alt="WRI logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/BITS-pilani.png" alt="BITS-pilani logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/BIRLA-Ultratech.png" alt="BIRLA-Ultratech logo" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="marquee">
                                <div className="marquee-inner-rgt">
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/BCG-Boston-Consulting-Group.png" alt="BCG-Boston-Consulting-Group logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Adani-Group.png" alt="Adani-Group logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/hyderabad-iit.png" alt="hyderabad-iit logo" />
                                            </li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/iit-kanpur.png" alt="iit-kanpur logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/rorkee-iit.png" alt="iit roorkee logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/marriott.png" alt="marriott logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/dae.png" alt="dae logo" />
                                            </li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/iiot.png" alt="iiot logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/bhu.png" alt="bhu logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/iit-rorkee.png" alt="iit-rorkee logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/LODHA.png" alt="LODHA logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Leighton.png" alt="Leighton logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/InterGlobe-Aviation-Indigo.png" alt="InterGlobe-Aviation-Indigo logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/IIT-Banaras.png" alt="IIT-Banaras" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/FOOD-works.png" alt="FOOD-works logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Emaar.png" alt="Emaar logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/CII.png" alt="CII logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/CEEW.png" alt="CEEW logo" /></li>
                                        </ul>
                                    </div>

                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/BCG-Boston-Consulting-Group.png" alt="BCG-Boston-Consulting-Group logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Adani-Group.png" alt="Adani-Group logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/hyderabad-iit.png" alt="hyderabad-iit logo" />
                                            </li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/iit-kanpur.png" alt="iit-kanpur logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/rorkee-iit.png" alt="iit roorkee logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/marriott.png" alt="marriott logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/dae.png" alt="dae logo" />
                                            </li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/iiot.png" alt="iiot logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/bhu.png" alt="bhu logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/iit-rorkee.png" alt="iit-rorkee logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/LODHA.png" alt="LODHA logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Leighton.png" alt="Leighton logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/InterGlobe-Aviation-Indigo.png" alt="InterGlobe-Aviation-Indigo logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/IIT-Banaras.png" alt="IIT-Banaras" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/FOOD-works.png" alt="FOOD-works logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/Emaar.png" alt="Emaar logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="marquee-img-box">
                                        <ul>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/CII.png" alt="CII logo" /></li>
                                            <li><img className="arrow" src="https://www.pranaair.com/wp-content/uploads/2024/03/CEEW.png" alt="CEEW logo" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison of technologies */}
            <section className="caqm-section">
                <div className="compare-heading">
                    <FadeInText>
                        <span className="sub-heading">Comparison of technologies</span>
                        <h2 className="page-heading">Prana Air CAAQMS vs Traditional CAAQMS</h2>
                    </FadeInText>
                </div>
                <div className="container-fluid">
                    <div className="comparison-grid">
                        <div className="feature-list">
                            <ul>
                                <li>Pollutants</li>
                                <li>Monitor Size</li>
                                <li>Real-time Data</li>
                                <li>Portability</li>
                                <li>Device Cost</li>
                                <li>Manpower</li>
                                <li>Accuracy</li>
                                <li>Technology</li>
                                <li>Data Accessibility</li>
                            </ul>
                        </div>

                        {/* Prana Air Column */}
                        <div className="compare-img">
                            <Image
                                src="/img/prana-air-ambient-caaqms-monitor.png"
                                width={150}
                                height={150}
                                alt="Prana Air CAAQMS"
                            />
                            <h3>Prana Air CAAQMS</h3>
                            <div className="column prana">
                                <ul>
                                    <li>PM10, PM2.5, SO2, NO2, O3, CO</li>
                                    <li>Compact & lightweight</li>
                                    <li>In less than 30 seconds.</li>
                                    <li>Easy portability</li>
                                    <li>Low cost</li>
                                    <li>Very less manpower</li>
                                    <li>Highly accurate & precise</li>
                                    <li>Sensor based</li>
                                    <li>Available on website, mobile & TV app</li>
                                </ul>
                            </div>
                        </div>

                        {/* Traditional Column */}
                        <div className="compare-img">
                            <Image
                                src="/img/traditional-caaqms-.png"
                                width={150}
                                height={150}
                                alt="Prana Air CAAQMS"
                            />
                            <h3>Traditional CAAQMS</h3>
                            <div className="column traditional">
                                <ul>
                                    <li>PM10, PM2.5, SO2, NO2, O3, CO</li>
                                    <li>Compact & lightweight</li>
                                    <li>In less than 30 seconds.</li>
                                    <li>Easy portability</li>
                                    <li>Low cost</li>
                                    <li>Very less manpower</li>
                                    <li>Highly accurate & precise</li>
                                    <li>Sensor based</li>
                                    <li>Available on website, mobile & TV app</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}