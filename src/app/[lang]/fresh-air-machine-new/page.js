import "./style.css"
import Image from "next/image"
import Link from "@/Components/TranslateLink"
import VideoPopup from "@/Components/Pages/AirQualityCommonMonitor/video-popup"
import FresherCarousel from "@/Components/Pages/FreshAirMachine/applications-slider"
import ContactForm from "@/Components/Contacform/ContactForm"


export default async function CommonMonitorPage() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
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
    const bannersldier = {
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
    const trusted = {
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
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }
    return (
        <main>
            {/* Hero Section */}
            <section className="hero-sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero-heading">
                                <h1>Lower Your Indoor AQI Levels to Single Digits</h1>
                                <p>High outdoor AQI? The Fresh Air Machine keeps your indoor air in the fresh single digits.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-link">
                                <Link href="#">Request a quote</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="video-box">
                                <VideoPopup videoUrl="https://www.youtube.com/embed/vKTDgUu1K_E?autoplay=1&mute=1" />
                            </div>
                            <div className="scroll-explore">
                                <a href="#explore"><Image src="/img/explore-icon.png" alt="" width={10} height={10} /> Scroll to explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* For Any Moment Any Mood */}
            <section id="explore" className="any-mood">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="any-moment-heading">
                                <h2>Fresh Air</h2>
                                <h3>For Any Moment. Any Mood.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <FresherCarousel responsive={responsive} className="app-slider">
                                <div className="app-slide-img-box">
                                    <Image src="/img/turn-your-personal-space.webp" alt="" width={200} height={150} />
                                    <div className="any-moment-box">
                                        <h3>Me Time</h3>
                                        <p>Turn your personal space into a clean-air retreat. Whether youre reading, meditating, or just unwinding.</p>
                                    </div>
                                </div>
                                <div className="app-slide-img-box">
                                    <Image src="/img/turn-your-personal-space.webp" alt="" width={200} height={150} />
                                    <div className="any-moment-box">
                                        <h3>Me Time</h3>
                                        <p>Turn your personal space into a clean-air retreat. Whether you re reading, meditating, or just unwinding.</p>
                                    </div>
                                </div>
                                <div className="app-slide-img-box">
                                    <Image src="/img/turn-your-personal-space.webp" alt="" width={200} height={150} />
                                    <div className="any-moment-box">
                                        <h3>Me Time</h3>
                                        <p>Turn your personal space into a clean-air retreat. Whether youre reading, meditating, or just unwinding.</p>
                                    </div>
                                </div>
                                <div className="app-slide-img-box">
                                    <Image src="/img/turn-your-personal-space.webp" alt="" width={200} height={150} />
                                    <div className="any-moment-box">
                                        <h3>Me Time</h3>
                                        <p>Turn your personal space into a clean-air retreat. Whether youre reading, meditating, or just unwinding.</p>
                                    </div>
                                </div>
                            </FresherCarousel>
                        </div>
                    </div>
                </div>
            </section>

            {/* Toxic Pollutants */}
            <section className="toxic-sec-bg">
                <section className="toxic-img">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="toxic-heading">
                                    <h2>Toxic Pollutants,</h2>
                                    <h3>It can reduce </h3>
                                    <p>
                                        Indoor air can trap harmful toxins that make you sick. Clear them out with the Fresh Air Machine and breathe fresh healthy air at home.
                                    </p>
                                </div>
                                <div className="particular">
                                    <ul>
                                        <li className="floating">
                                            <Image src="/img/particulate-matter.png" alt="" width={40} height={40} />
                                            <p>FormalDehyde (HCHO)</p>
                                        </li>
                                        <li className="floating">
                                            <Image src="/img/particulate-matter.png" alt="" width={40} height={40} />
                                            <p>FormalDehyde (HCHO)</p>
                                        </li>
                                        <li className="floating">
                                            <Image src="/img/particulate-matter.png" alt="" width={40} height={40} />
                                            <p>FormalDehyde (HCHO)</p>
                                        </li>
                                        <li className="floating">
                                            <Image src="/img/particulate-matter.png" alt="" width={40} height={40} />
                                            <p>FormalDehyde (HCHO)</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {/* In Minutes */}
            <section className="aqi-levels-digits">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hazardous-video-box-heading">
                                <h2>From Hazardous to Heavenly -</h2>
                                <h3>In Minutes.</h3>
                            </div>
                            <div className="hazardous-video-box">
                                <Image src="/img/hazardous-heavenly-video.webp" alt="" width={400} height={400} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Effortlessly */}
            <section className="effortless-sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="efforless-text">
                                <h2>Take Control of Your Air –</h2>
                                <h3>Effortlessly.</h3>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="effortless-data">
                                <ul>
                                    <li>
                                        <span><Image src="/img/real-time-data.png" alt="" width={100} height={100} /></span>
                                        <span>
                                            <h3>Real-time Data Display</h3>
                                            <p>Monitor CO2 (ppm) PM2.5 Temperature Humidity and TVOC instantly</p>
                                        </span>
                                    </li>
                                    <li>
                                        <span><Image src="/img/real-time-data.png" alt="" width={100} height={100} /></span>
                                        <span>
                                            <h3>Real-time Data Display</h3>
                                            <p>Monitor CO2 (ppm) PM2.5 Temperature Humidity and TVOC instantly</p>
                                        </span>
                                    </li>
                                    <li>
                                        <span><Image src="/img/real-time-data.png" alt="" width={100} height={100} /></span>
                                        <span>
                                            <h3>Real-time Data Display</h3>
                                            <p>Monitor CO2 (ppm) PM2.5 Temperature Humidity and TVOC instantly</p>
                                        </span>
                                    </li>
                                    <li>
                                        <span><Image src="/img/real-time-data.png" alt="" width={100} height={100} /></span>
                                        <span>
                                            <h3>Real-time Data Display</h3>
                                            <p>Monitor CO2 (ppm) PM2.5 Temperature Humidity and TVOC instantly</p>
                                        </span>
                                    </li>
                                    <li>
                                        <span><Image src="/img/real-time-data.png" alt="" width={100} height={100} /></span>
                                        <span>
                                            <h3>Real-time Data Display</h3>
                                            <p>Monitor CO2 (ppm) PM2.5 Temperature Humidity and TVOC instantly</p>
                                        </span>
                                    </li>
                                    <li>
                                        <span><Image src="/img/real-time-data.png" alt="" width={100} height={100} /></span>
                                        <span>
                                            <h3>Real-time Data Display</h3>
                                            <p>Monitor CO2 (ppm) PM2.5 Temperature Humidity and TVOC instantly</p>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pick Your Fresh Air Variant */}
            <section className="pick-fresh-air-variant">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="pick-fresh-heaidng">
                                <h2>Pick Your Fresh Air Variant</h2>
                                <h3>Personalized The Air You Are Breathing</h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pick-fresh-para">
                                <p>From small bedrooms to big workspaces theres a perfect Fresh Air Machine for every space. Find the one that fits your space—and your vibe.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid br-line">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-sec">
                                {/* Tab Buttons */}
                                <ul className="nav nav-tabs tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active tab-button"
                                            id="tab1-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tab1"
                                            type="button"
                                            role="tab"
                                            aria-controls="tab1"
                                            aria-selected="true"
                                        >
                                            <h4>AeroLite 1200</h4>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link tab-button"
                                            id="tab2-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tab2"
                                            type="button"
                                            role="tab"
                                            aria-controls="tab2"
                                            aria-selected="false"
                                        >
                                            <h4>AeroLite 1200</h4>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link tab-button"
                                            id="tab3-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tab3"
                                            type="button"
                                            role="tab"
                                            aria-controls="tab3"
                                            aria-selected="false"
                                        >
                                            <h4>AeroLite 1200</h4>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link tab-button"
                                            id="tab4-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tab4"
                                            type="button"
                                            role="tab"
                                            aria-controls="tab4"
                                            aria-selected="false"
                                        >
                                            <h4>AeroLite 1200</h4>
                                        </button>
                                    </li>
                                </ul>

                                {/* Tab Content */}
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                                        <div className="tab-main-box">
                                            <div className="tab-cont-img">
                                                <Image src="/img/aerolite-1200.webp" alt="" width={400} height={400} />
                                            </div>
                                            <div className="tab-inner-content">
                                                <h3>AeroLite 1200 </h3>
                                                <span>“The best upgrade for my small flat – I wake up feeling fresh!”</span>
                                                <div className="inner-flex">
                                                    <div className="lft">
                                                        <h4>Perfect For :</h4>
                                                        <ul>
                                                            <li><Image src="/img/bed-double.png" alt="" width={20} height={20} /> Bedrooms</li>
                                                            <li><Image src="/img/bed-double.png" alt="" width={20} height={20} /> study rooms </li>
                                                            <li><Image src="/img/bed-double.png" alt="" width={20} height={20} /> studio apartments</li>
                                                        </ul>
                                                    </div>
                                                    <div className="rgt">
                                                        <h4>Coverage :</h4>
                                                        <span>Up to</span>
                                                        <h5>1200 sq. ft.</h5>
                                                    </div>
                                                </div>
                                                <div className="highlight">
                                                    <h4>Highlights :</h4>
                                                    <ul>
                                                        <li>Ultra-quiet operation – perfect for sleep and focus</li>
                                                        <li>Ultra-quiet operation – perfect for sleep and focus</li>
                                                        <li>Ultra-quiet operation – perfect for sleep and focus</li>
                                                        <li>Ultra-quiet operation – perfect for sleep and focus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                                        <div className="tab-main-box">
                                            <div className="tab-cont-img">
                                                <Image src="/img/aerolite-1200.webp" alt="" width={400} height={400} />
                                            </div>
                                            <div className="tab-inner-content">
                                                <h3>AeroLite 1200 </h3>
                                                <span>“The best upgrade for my small flat – I wake up feeling fresh!”</span>
                                                <div className="inner-flex">
                                                    <div className="lft">
                                                        <h4>Perfect For :</h4>
                                                        <ul>
                                                            <li><Image src="/img/bed-double.png" alt="" width={20} height={20} /> Bedrooms</li>
                                                            <li><Image src="/img/bed-double.png" alt="" width={20} height={20} /> study rooms </li>
                                                            <li><Image src="/img/bed-double.png" alt="" width={20} height={20} /> studio apartments</li>
                                                        </ul>
                                                    </div>
                                                    <div className="rgt">
                                                        <h4>Coverage :</h4>
                                                        <span>Up to</span>
                                                        <h5>1200 sq. ft.</h5>
                                                    </div>
                                                </div>
                                                <div className="highlight">
                                                    <h4>Highlights :</h4>
                                                    <ul>
                                                        <li>Ultra-quiet operation – perfect for sleep and focus</li>
                                                        <li>Ultra-quiet operation – perfect for sleep and focus</li>
                                                        <li>Ultra-quiet operation – perfect for sleep and focus</li>
                                                        <li>Ultra-quiet operation – perfect for sleep and focus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                                        <div className="tab-main-box">
                                            <div className="tab-cont-img">
                                                <Image src="/img/aerolite-1200.webp" alt="" width={400} height={400} />
                                            </div>
                                            <div className="tab-inner-content">
                                                <h3>AeroLite 1200 </h3>
                                                <span>“The best upgrade for my small flat – I wake up feeling fresh!”</span>
                                                <div className="inner-flex">
                                                    <div className="lft">
                                                        <h4>Perfect For :</h4>
                                                        <ul>
                                                            <li><Image src="/img/bed-double.png" alt="" width={20} height={20} /> Bedrooms</li>
                                                            <li><Image src="/img/bed-double.png" alt="" width={20} height={20} /> study rooms </li>
                                                            <li><Image src="/img/bed-double.png" alt="" width={20} height={20} /> studio apartments</li>
                                                        </ul>
                                                    </div>
                                                    <div className="rgt">
                                                        <h4>Coverage :</h4>
                                                        <span>Up to</span>
                                                        <h5>1200 sq. ft.</h5>
                                                    </div>
                                                </div>
                                                <div className="highlight">
                                                    <h4>Highlights :</h4>
                                                    <ul>
                                                        <li>Ultra-quiet operation – perfect for sleep and focus</li>
                                                        <li>Ultra-quiet operation – perfect for sleep and focus</li>
                                                        <li>Ultra-quiet operation – perfect for sleep and focus</li>
                                                        <li>Ultra-quiet operation – perfect for sleep and focus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                                        <div className="tab-main-box">
                                            <div className="tab-cont-img">
                                                <Image src="/img/aerolite-1200.webp" alt="" width={400} height={400} />
                                            </div>
                                            <div className="tab-inner-content">
                                                <h3>AeroLite 1200 </h3>
                                                <span>“The best upgrade for my small flat – I wake up feeling fresh!”</span>
                                                <div className="inner-flex">
                                                    <div className="lft">
                                                        <h4>Perfect For :</h4>
                                                        <ul>
                                                            <li><Image src="/img/bed-double.png" alt="" width={20} height={20} /> Bedrooms</li>
                                                            <li><Image src="/img/bed-double.png" alt="" width={20} height={20} /> study rooms </li>
                                                            <li><Image src="/img/bed-double.png" alt="" width={20} height={20} /> studio apartments</li>
                                                        </ul>
                                                    </div>
                                                    <div className="rgt">
                                                        <h4>Coverage :</h4>
                                                        <span>Up to</span>
                                                        <h5>1200 sq. ft.</h5>
                                                    </div>
                                                </div>
                                                <div className="highlight">
                                                    <h4>Highlights :</h4>
                                                    <ul>
                                                        <li>Ultra-quiet operation – perfect for sleep and focus</li>
                                                        <li>Ultra-quiet operation – perfect for sleep and focus</li>
                                                        <li>Ultra-quiet operation – perfect for sleep and focus</li>
                                                        <li>Ultra-quiet operation – perfect for sleep and focus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="#">Request a quote <Image src="/img/link-icon.png" alt="" width={50} height={50} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <FresherCarousel responsive={bannersldier} className="banner-slider-box" arrows={false} showDots={true}>
                            <div className="banner-slider-img">
                                <div className="banner-slider-heading">
                                    <h2>From Hazardous to Heavenly -</h2>
                                    <h3>In Minutes.</h3>
                                    <p>Bringing AQI down to single digits, the Fresh Air Machine transforms your room into a pollution-free sanctuary.</p>
                                </div>
                                <Image src="/img/fresh-air-machine-transforms.webp" alt="" width={200} height={150} />
                            </div>
                            <div className="banner-slider-img">
                                <div className="banner-slider-heading">
                                    <h2>From Hazardous to Heavenly -</h2>
                                    <h3>In Minutes.</h3>
                                    <p>Bringing AQI down to single digits, the Fresh Air Machine transforms your room into a pollution-free sanctuary.</p>
                                </div>
                                <Image src="/img/fresh-air-machine-transforms.webp" alt="" width={200} height={150} />
                            </div>
                        </FresherCarousel>
                    </div>
                    <div className="modes-bg">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tow-modes-heading">
                                    <h2>Two modes of</h2>
                                    <h3>Circulation</h3>
                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mode-box">
                                    <Image src="/img/mode-recircuation.webp" alt="" width={200} height={200} />
                                    <ul>
                                        <li>01</li>
                                        <li>Mode: Recirculation</li>
                                    </ul>
                                    <p>The air inside the room passes through the fresh air machine via an open damper. The machine filters and n recirculates the air back into the room, which is advantageous during high pollution levels outside</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mode-box">
                                    <Image src="/img/mode-recircuation.webp" alt="" width={200} height={200} />
                                    <ul>
                                        <li>01</li>
                                        <li>Mode: Recirculation</li>
                                    </ul>
                                    <p>The air inside the room passes through the fresh air machine via an open damper. The machine filters and n recirculates the air back into the room, which is advantageous during high pollution levels outside</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology That Breathes for You */}
            <section className="tech-breathes">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tech-breath-heading">
                                <h2>Technology</h2>
                                <h3>That Breathes for You</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tech-tab-box">
                                {/* Tab Buttons */}
                                <ul className="nav nav-tabs tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active tab-button"
                                            id="tab5-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tab5"
                                            type="button"
                                            role="tab"
                                            aria-controls="tab5"
                                            aria-selected="true"
                                        >
                                            <h4>AeroLite 1200</h4>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link tab-button"
                                            id="tab6-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tab6"
                                            type="button"
                                            role="tab"
                                            aria-controls="tab6"
                                            aria-selected="false"
                                        >
                                            <h4>AeroLite 1200</h4>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link tab-button"
                                            id="tab7-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tab7"
                                            type="button"
                                            role="tab"
                                            aria-controls="tab7"
                                            aria-selected="false"
                                        >
                                            <h4>AeroLite 1200</h4>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link tab-button"
                                            id="tab8-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tab8"
                                            type="button"
                                            role="tab"
                                            aria-controls="tab8"
                                            aria-selected="false"
                                        >
                                            <h4>AeroLite 1200</h4>
                                        </button>
                                    </li>
                                </ul>

                                {/* Tab Content */}
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab5" role="tabpanel" aria-labelledby="tab5-tab">
                                        <div className="tab-main-box-img">
                                            <Image src="/img/technology-breathes-for-you.webp" alt="" width={200} height={200} />
                                            <p><span>Purify your air</span> without punishing the planet. <span>Our energy-saving tech and long-lasting filters</span> are designed to <span>reduce your carbon footprint</span> while maximising impact on your health.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab6" role="tabpanel" aria-labelledby="tab6-tab">
                                        <div className="tab-main-box-img">
                                            <Image src="/img/technology-breathes-for-you.webp" alt="" width={200} height={200} />
                                            <p><span>Purify your air</span> without punishing the planet. <span>Our energy-saving tech and long-lasting filters</span> are designed to <span>reduce your carbon footprint</span> while maximising impact on your health.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab7" role="tabpanel" aria-labelledby="tab7-tab">
                                        <div className="tab-main-box-img">
                                            <Image src="/img/technology-breathes-for-you.webp" alt="" width={200} height={200} />
                                            <p><span>Purify your air</span> without punishing the planet. <span>Our energy-saving tech and long-lasting filters</span> are designed to <span>reduce your carbon footprint</span> while maximising impact on your health.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab8" role="tabpanel" aria-labelledby="tab8-tab">
                                        <div className="tab-main-box-img">
                                            <Image src="/img/technology-breathes-for-you.webp" alt="" width={200} height={200} />
                                            <p><span>Purify your air</span> without punishing the planet. <span>Our energy-saving tech and long-lasting filters</span> are designed to <span>reduce your carbon footprint</span> while maximising impact on your health.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Loved by Families */}
            <section className="loved-family">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="loved-heading">
                                <h2>Loved by Families,</h2>
                                <h3>Trusted by Professionals</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <FresherCarousel responsive={trusted} className="review-slider">
                    <div className="app-slide-review-box">
                        <Image src="/img/rating.png" alt="" width={100} height={100} />
                        <p>“The air inside the room passes through the fresh air machine via an open damper. The machine filters and n recirculates the air back into the room, which is advantageous during high pollution levels outside”</p>
                        <h3>Priya M.</h3>
                    </div>
                    <div className="app-slide-review-box">
                        <Image src="/img/rating.png" alt="" width={100} height={100} />
                        <p>“The air inside the room passes through the fresh air machine via an open damper. The machine filters and n recirculates the air back into the room, which is advantageous during high pollution levels outside”</p>
                        <h3>Priya M.</h3>
                    </div>
                    <div className="app-slide-review-box">
                        <Image src="/img/rating.png" alt="" width={100} height={100} />
                        <p>“The air inside the room passes through the fresh air machine via an open damper. The machine filters and n recirculates the air back into the room, which is advantageous during high pollution levels outside”</p>
                        <h3>Priya M.</h3>
                    </div>
                    <div className="app-slide-review-box">
                        <Image src="/img/rating.png" alt="" width={100} height={100} />
                        <p>“The air inside the room passes through the fresh air machine via an open damper. The machine filters and n recirculates the air back into the room, which is advantageous during high pollution levels outside”</p>
                        <h3>Priya M.</h3>
                    </div>
                    <div className="app-slide-review-box">
                        <Image src="/img/rating.png" alt="" width={100} height={100} />
                        <p>“The air inside the room passes through the fresh air machine via an open damper. The machine filters and n recirculates the air back into the room, which is advantageous during high pollution levels outside”</p>
                        <h3>Priya M.</h3>
                    </div>
                </FresherCarousel>
            </section>

            {/* Variant Comparison Section */}
            <div className="container-fluid variant-sec">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="variant-comparison">
                            <h2>Find Your Perfect Fit: </h2>
                            <h3>Variant Comparison</h3>
                        </div>
                    </div>
                </div>
            </div>
            <section className="variant-comparison-sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="main-title-variant">
                                <li><h4 className="main-title">Features</h4></li>
                                <li>
                                    <h5>AeroLite 1200 </h5>
                                    <span>(Small Spaces)</span>
                                </li>
                                <li>
                                    <h5>AeroLite 1200 </h5>
                                    <span>(Small Spaces)</span>
                                </li>
                                <li>
                                    <h5>AeroLite 1200 </h5>
                                    <span>(Small Spaces)</span>
                                </li>
                                <li>
                                    <h5>AeroLite 1200 </h5>
                                    <span>(Small Spaces)</span>
                                </li>
                            </ul>
                            <div className="variant-comparison-box">
                                <ul className="variant-feature">
                                    <li><h4 className="variant-text">Coverage Area</h4></li>
                                    <li><h4 className="variant-text">Coverage Area</h4></li>
                                    <li><h4 className="variant-text">Coverage Area</h4></li>
                                    <li><h4 className="variant-text">Coverage Area</h4></li>
                                    <li><h4 className="variant-text">Coverage Area</h4></li>
                                    <li><h4 className="variant-text">Coverage Area</h4></li>
                                    <li><h4 className="variant-text">Coverage Area</h4></li>
                                    <li><h4 className="variant-text">Coverage Area</h4></li>
                                    <li><h4 className="variant-text">Coverage Area</h4></li>
                                </ul>
                                <ul>
                                    <li><h5 className="variant-tile">Up to 1200 sq. ft.</h5></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><h5 className="variant-tile">Bedrooms, small offices</h5></li>
                                    <li><h5 className="variant-tile">Low</h5></li>
                                    <li><h5 className="variant-tile">Ultra-quiet</h5></li>
                                    <li><a href="#">Request a quote <Image alt="" width={50} height={50} src="/img/link-icon.png" /></a></li>
                                </ul>
                                <ul>
                                    <li><h5 className="variant-tile">Up to 1200 sq. ft.</h5></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><h5 className="variant-tile">Bedrooms, small offices</h5></li>
                                    <li><h5 className="variant-tile">Low</h5></li>
                                    <li><h5 className="variant-tile">Ultra-quiet</h5></li>
                                    <li><a href="#">Request a quote <Image alt="" width={50} height={50} src="/img/link-icon.png" /></a></li>
                                </ul>
                                <ul>
                                    <li><h5 className="variant-tile">Up to 1200 sq. ft.</h5></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><h5 className="variant-tile">Bedrooms, small offices</h5></li>
                                    <li><h5 className="variant-tile">Low</h5></li>
                                    <li><h5 className="variant-tile">Ultra-quiet</h5></li>
                                    <li><a href="#">Request a quote <Image alt="" width={50} height={50} src="/img/link-icon.png" /></a></li>
                                </ul>
                                <ul>
                                    <li><h5 className="variant-tile">Up to 1200 sq. ft.</h5></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                    <li><h5 className="variant-tile">Bedrooms, small offices</h5></li>
                                    <li><h5 className="variant-tile">Low</h5></li>
                                    <li><h5 className="variant-tile">Ultra-quiet</h5></li>
                                    <li><a href="#">Request a quote <Image alt="" width={50} height={50} src="/img/link-icon.png" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Future-Ready */}
            <section className="future-ready-sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="future-heading">
                                <h2>Eco-Friendly. Energy-Efficient</h2>
                                <h3>Future-Ready.</h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="future-para">
                                <p>
                                    <span>Purify your air</span> without punishing the planet. <span>Our energy-saving tech and long-lasting filters</span> are designed to<span> reduce your carbon footprint</span> while maximising impact on your health.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="low-maintenance">
                                <ul>
                                    <li>
                                        <h4>Low-maintenance, recyclable filters</h4>
                                        <p>Unwind in your room with air as fresh as a forest trail. No noise, no pollution – just peace.</p>
                                    </li>
                                    <li>
                                        <Image src="/img/low-maintenance.png" alt="" width={100} height={100} />
                                    </li>
                                </ul>
                            </div>
                            <div className="low-maintenance">
                                <ul>
                                    <li>
                                        <h4>40% less energy than traditional purifier</h4>
                                        <p>Unwind in your room with air as fresh as a forest trail. No noise, no pollution – just peace.</p>
                                    </li>
                                    <li>
                                        <Image src="/img/less-energy-traditional-purifier.png" alt="" width={100} height={100} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="green-building">
                                <ul>
                                    <li>
                                        <h4>Ideal for green buildings and conscious consumers</h4>
                                        <p>Unwind in your room with air as fresh as a forest trail. No noise, no pollution – just peace.</p>
                                    </li>
                                    <li>
                                        <Image src="/img/ideal-for-green-buildings.webp" alt="" width={100} height={100} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Settle for Better Air */}
            <section className="why-settle-sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="why-settle-heading">
                                <h2>Why Settle for “Better” Air</h2>
                                <h3>When You Can Have the Best?</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="spend-time">
                                <ul>
                                    <li className="floating">
                                        <Image src="/img/particulate-matter.png" alt="" width={50} height={50} />
                                        <span>FormalDehyde (HCHO)</span>
                                    </li>
                                    <li className="floating">
                                        <Image src="/img/particulate-matter.png" alt="" width={50} height={50} />
                                        <span>FormalDehyde (HCHO)</span>
                                    </li>
                                    <li className="floating">
                                        <Image src="/img/particulate-matter.png" alt="" width={50} height={50} />
                                        <span>FormalDehyde (HCHO)</span>
                                    </li>
                                    <li className="floating">
                                        <Image src="/img/particulate-matter.png" alt="" width={50} height={50} />
                                        <span>FormalDehyde (HCHO)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="spend-time-para">
                                <p>
                                    You spend 90% of your time indoors—but is the air you’re breathing really safe? With rising pollution, poor indoor air can lead to fatigue, allergies, and even anxiety.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="spend-time-para fresh-air-machine">
                                <p>
                                    You spend 90% of your time indoors—but is the air you’re breathing really safe? With rising pollution, poor indoor air can lead to fatigue, allergies, and even anxiety.
                                </p>
                            </div>
                            <div className="fresh-air-machine-para">
                                <Image src="/img/fresh-air-machine-filter.webp" alt="" width={50} height={50} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get in Touch */}
            <section className="get-in-sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="get-in-heading">
                                <h2>Get in Touch</h2>
                                <h3>With Us</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-box">
                                <Image src="/img/get-in-touch.webp" alt="" width={200} height={200} />
                                <div className="contact-details">
                                    <h4>Contact Info</h4>
                                    <p>Looking for Fresh Air Machine?</p>
                                    <ul>
                                        <li>
                                            <span>
                                                <Image src="/img/contact-call-icon.png" alt="" width={15} height={15} />
                                            </span>
                                            <h4>
                                                <span>Phone Number:</span>
                                                (+91) 73918-73918
                                            </h4>
                                        </li>
                                        <li>
                                            <span>
                                                <Image src="/img/contact-call-icon.png" alt="" width={15} height={15} />
                                            </span>
                                            <h4>
                                                <span>Phone Number:</span>
                                                (+91) 73918-73918
                                            </h4>
                                        </li>
                                        <li>
                                            <span>
                                                <Image src="/img/contact-call-icon.png" alt="" width={15} height={15} />
                                            </span>
                                            <h4>
                                                <span>Phone Number:</span>
                                                (+91) 73918-73918
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form-box">
                                <ContactForm pageName="Fresh Air Machine Page" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frequently Asked Questions */}
            <section className="faq-sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="faq-heading">
                                <h2>Frequently</h2>
                                <h3>Asked Questions</h3>
                                <p>
                                    Whether you are setting up a cozy reading nook or running a conference room, there is a Fresh Air
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
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
                                            Eco-Friendly. Energy-Efficient ?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            <p>
                                                You spend 90% of your time indoors—but is the air you’re breathing really safe? With rising pollution, poor indoor air can lead to fatigue, allergies, and even anxiety.
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
                                            Eco-Friendly. Energy-Efficient ?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            <p>
                                                You spend 90% of your time indoors—but is the air you’re breathing really safe? With rising pollution, poor indoor air can lead to fatigue, allergies, and even anxiety.
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
                                            Eco-Friendly. Energy-Efficient ?
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            <p>
                                                You spend 90% of your time indoors—but is the air you’re breathing really safe? With rising pollution, poor indoor air can lead to fatigue, allergies, and even anxiety.
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
                                            Eco-Friendly. Energy-Efficient ?
                                        </button>
                                    </h2>
                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            <p>
                                                You spend 90% of your time indoors—but is the air you’re breathing really safe? With rising pollution, poor indoor air can lead to fatigue, allergies, and even anxiety.
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
                                            Eco-Friendly. Energy-Efficient ?
                                        </button>
                                    </h2>
                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body faq-tab-para">
                                            <p>
                                                You spend 90% of your time indoors—but is the air you’re breathing really safe? With rising pollution, poor indoor air can lead to fatigue, allergies, and even anxiety.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}