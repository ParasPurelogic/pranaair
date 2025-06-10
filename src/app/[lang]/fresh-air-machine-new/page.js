import "./style.css"
import Image from "next/image"
import Link from "@/Components/TranslateLink"
import VideoPopup from "@/Components/Pages/AirQualityCommonMonitor/video-popup"
import FresherCarousel from "@/Components/Pages/FreshAirMachine/applications-slider"


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
                                <Link href="#any-mm"><Image src="/img/explore-icon.png" alt="" width={10} height={10} /> Scroll to explore</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* For Any Moment Any Mood */}
            <section id="any-mm" className="any-mood">
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
                                        <li>
                                            <Image src="/img/particulate-matter.png" alt="" width={40} height={40} />
                                            <p>FormalDehyde (HCHO)</p>
                                        </li>
                                        <li>
                                            <Image src="/img/particulate-matter.png" alt="" width={40} height={40} />
                                            <p>FormalDehyde (HCHO)</p>
                                        </li>
                                        <li>
                                            <Image src="/img/particulate-matter.png" alt="" width={40} height={40} />
                                            <p>FormalDehyde (HCHO)</p>
                                        </li>
                                        <li>
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
                    <div className="row br-line">
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
                </div>
            </section>

            {/* From Hazardous to Heavenly  */}
            <section className="slider-sec">
                <div className="container-fluid">
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
                </div>
            </section>
        </main>
    )
}