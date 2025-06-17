import "./style.css"
import Image from "next/image"
import Link from "@/Components/TranslateLink"
import VideoPopup from "@/Components/Pages/AirQualityCommonMonitor/video-popup"
import FresherCarousel from "@/Components/Pages/FreshAirMachine/applications-slider"
import ContactForm from "@/Components/Contacform/ContactForm"
import AnyMomentScrollCards from "@/Components/Pages/FreshAirMachine/gsap-animation"
import ToxicPollutantsSection from "@/Components/Pages/FreshAirMachine/zoom-animation"


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
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }
    const anyMomentData = [
        {
            title: "Me Time",
            desc: "Turn your personal space into a clean-air retreat. Whether you're reading, meditating, or just unwinding.",
            image: "/img/turn-your-personal-space.webp",
        },
        {
            title: "Fresh Classrooms",
            desc: "Improve focus, reduce allergens, and create a safe, breathable space for each student.",
            image: "/img/fresh-classrooms.webp",
        },
        {
            title: "Party Time",
            desc: "Hosting friends? Keep the vibes high and the pollution low. Perfect air, even in a packed room.",
            image: "/img/party-time.webp",
        },
        {
            title: "Family Time",
            desc: "A safer, cleaner home for the ones you love. Great for kids, elderly, and pets.",
            image: "/img/family-time.webp",
        },
        {
            title: "Work Smarter",
            desc: "Boost focus, reduce fatigue, and create a more productive workspace—one breath at a time.",
            image: "/img/work-smarter.webp",
        },
        {
            title: "Healthier Care Centres",
            desc: "Clean air isn’t optional in healthcare—it’s essential. Create a safer space for patients, staff, and visitors.",
            image: "/img/healthier-care-centres.webp",
        },
    ]
    const toxicContent = {
        heading: "Toxic Pollutants,",
        subheading: "It can reduce",
        description:
            "Indoor air can trap harmful toxins that make you sick. Clear them out with the Fresh Air Machine and breathe fresh, healthy air at home.",
        pollutants: [
            "FormalDehyde (HCHO)",
            "Particulate Matter (PM10, PM2.5)",
            "Total Volatile Organic Compounds(TVOC)",
            "Carbon Dioxide(CO2)",
        ],
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
                                <Link href="#form">Request a quote</Link>
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
            {/* Sticky Spacer */}
            <div className="sticky-space"></div>

            {/* Sticky box */}
            <div className="sticky-box">
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
                                <AnyMomentScrollCards anyMomentData={anyMomentData} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Toxic Pollutants */}
                <ToxicPollutantsSection toxicContent={toxicContent} />

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
                                    <video
                                        src="/img/fresh-air-machine-video-for-page.webm"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        style={{ width: "100%", height: "auto" }}
                                    />
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
                                            <span><Image src="/img/adjustable-fan.png" alt="" width={100} height={100} /></span>
                                            <span>
                                                <h3>Adjustable Fan Speeds</h3>
                                                <p>Choose the airflow level you want</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span><Image src="/img/heating-cooling-modes.png" alt="" width={100} height={100} /></span>
                                            <span>
                                                <h3>Heating & Cooling Modes</h3>
                                                <p>Toggle comfort settings to suit your needs</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span><Image src="/img/child-lock.png" alt="" width={100} height={100} /></span>
                                            <span>
                                                <h3>Child Lock</h3>
                                                <p>Keep settings safe from curious little hands</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span><Image src="/img/manual-auto-modes.png" alt="" width={100} height={100} /></span>
                                            <span>
                                                <h3>Manual & Auto Modes</h3>
                                                <p>Set it and forget it—or fine-tune as you wish</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span><Image src="/img/wifi-connected.png" alt="" width={100} height={100} /></span>
                                            <span>
                                                <h3>Wi-Fi Connected</h3>
                                                <p>For real-time outdoor AQI syncing</p>
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
                                    <p>From small bedrooms to big workspaces, there’s a perfect Fresh Air Machine for every space. Find the one that fits your space—and your vibe.</p>
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
                                                <h4>AirGlide 2000</h4>
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
                                                <h4>Arctic Duo 2000 </h4>
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
                                                <h4>FrostAir 2000</h4>
                                            </button>
                                        </li>
                                    </ul>

                                    {/* Tab Content */}
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                                            <div className="tab-main-box">
                                                <div className="tab-cont-img">
                                                    <Image src="/img/freaher-machine.webp" alt="" width={400} height={400} />
                                                </div>
                                                <div className="tab-inner-content">
                                                    <h3>AeroLite 1200 </h3>
                                                    <span>“The best upgrade for my small flat – I wake up feeling fresh!”</span>
                                                    <div className="inner-flex">
                                                        <div className="lft">
                                                            <h4>Perfect For :</h4>
                                                            <ul>
                                                                <li><Image src="/img/bed-double.png" alt="" width={20} height={20} /> Bedrooms</li>
                                                                <li><Image src="/img/study-rooms.png" alt="" width={20} height={20} /> study rooms </li>
                                                                <li><Image src="/img/studio-apastments.png" alt="" width={20} height={20} /> studio apartments</li>
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
                                                            <li>Lightweight, sleek, and fits into small spaces</li>
                                                            <li>Brings AQI to less than 10 in minutes</li>
                                                            <li>Ideal for single rooms or personal use</li>
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
                                                    <h3>AirGlide 2000 </h3>
                                                    <span>“Our whole family breathes better – even during Delhi winters.”</span>
                                                    <div className="inner-flex">
                                                        <div className="lft">
                                                            <h4>Perfect For :</h4>
                                                            <ul>
                                                                <li><Image src="/img/large-halls.png" alt="" width={20} height={20} /> Large halls</li>
                                                                <li><Image src="/img/shared-offices.png" alt="" width={20} height={20} /> shared offices </li>
                                                                <li><Image src="/img/clinics.png" alt="" width={20} height={20} /> clinics apartments</li>
                                                            </ul>
                                                        </div>
                                                        <div className="rgt">
                                                            <h4>Coverage :</h4>
                                                            <span>Up to</span>
                                                            <h5>2000 sq. ft.</h5>
                                                        </div>
                                                    </div>
                                                    <div className="highlight">
                                                        <h4>Highlights :</h4>
                                                        <ul>
                                                            <li>Powerful airflow for large open spaces</li>
                                                            <li>Consistent single-digit AQI even with high occupancy</li>
                                                            <li>Whisper-quiet yet strong performance</li>
                                                            <li>Ideal for families, clinics, and businesses</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                                            <div className="tab-main-box">
                                                <div className="tab-cont-img">
                                                    <Image src="/img/aerolite.webp" alt="" width={400} height={400} />
                                                </div>
                                                <div className="tab-inner-content">
                                                    <h3>Arctic Duo 2000 </h3>
                                                    <span> “Feels like breathing in a premium resort. Cool, clean, and quiet.”</span>
                                                    <div className="inner-flex">
                                                        <div className="lft">
                                                            <h4>Perfect For :</h4>
                                                            <ul>
                                                                <li><Image src="/img/smart-home.png" alt="" width={20} height={20} /> Smart homes</li>
                                                                <li><Image src="/img/modular-setups.png" alt="" width={20} height={20} /> modular setups </li>
                                                                <li><Image src="/img/offices.png" alt="" width={20} height={20} /> Offices </li>
                                                            </ul>
                                                        </div>
                                                        <div className="rgt">
                                                            <h4>Coverage :</h4>
                                                            <span>Up to</span>
                                                            <h5>2000 sq. ft.</h5>
                                                        </div>
                                                    </div>
                                                    <div className="highlight">
                                                        <h4>Highlights :</h4>
                                                        <ul>
                                                            <li>Integrates with compressor AC units</li>
                                                            <li>Dual benefit: air purification + active cooling</li>
                                                            <li>Smart choice for modern climate-controlled spaces</li>
                                                            <li>Best for those who already have an AC setup</li>
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
                                                    <h3>FrostAir 2000  </h3>
                                                    <span>“We live in a rented flat with no AC – FrostAir made it livable!”</span>
                                                    <div className="inner-flex">
                                                        <div className="lft">
                                                            <h4>Perfect For :</h4>
                                                            <ul>
                                                                <li><Image src="/img/multi-use-rooms.png" alt="" width={20} height={20} /> multi-use rooms</li>
                                                                <li><Image src="/img/home-without-ac.png" alt="" width={20} height={20} /> Homes without AC </li>
                                                                <li><Image src="/img/rentals.png" alt="" width={20} height={20} /> rentals</li>
                                                            </ul>
                                                        </div>
                                                        <div className="rgt">
                                                            <h4>Coverage :</h4>
                                                            <span>Up to</span>
                                                            <h5>2000 sq. ft.</h5>
                                                        </div>
                                                    </div>
                                                    <div className="highlight">
                                                        <h4>Highlights :</h4>
                                                        <ul>
                                                            <li>Inbuilt compressor delivers fresh, cooled air</li>
                                                            <li>No external AC needed – it’s a 2-in-1 solution</li>
                                                            <li>Seamless setup, perfect for warm zones</li>
                                                            <li>Great for non-AC spaces or AC alternatives</li>
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
                                    <div className="banner-slider-heading fresher-machine-heading">
                                        <h2>From Polluted to Protected</h2>
                                        <h3>— Fresh Air Machine</h3>
                                        <p>Because the air you breathe should nurture, not worry you. Remove 99.5% of hidden pollutants and invite in wellness.</p>
                                    </div>
                                    <Image src="/img/fresh-air-machine-transforms.webp" alt="" width={200} height={150} />
                                </div>
                                <div className="banner-slider-img">
                                    <div className="banner-slider-heading">
                                        <h2>AQI Below 10.</h2>
                                        <h3>In Minutes.</h3>
                                        <p>With AI-powered 99.5% purification, HEPA filters, UV light and ionizer—transform your home into a fresh-air sanctuary for the entire family.</p>
                                    </div>
                                    <Image src="/img/form-hazardous-to-heavenly.webp" alt="" width={200} height={150} />
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
                                        <Image className="outdoor-img" src="/img/mode-outdoor-air.webp" alt="" width={200} height={200} />
                                        <ul>
                                            <li>02</li>
                                            <li>Mode: Outdoor Air</li>
                                        </ul>
                                        <p>In this mode, the closed damper enables outside air to enter the fresh air machine for purification, before entering indoors. This is advantageous when indoor pollution levels are high, making air recirculation ineffective .</p>
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
                                                <h4>AirGlide 2000</h4>
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
                                                <h4>Arctic Duo 2000</h4>
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
                                                <h4>FrostAir 2000</h4>
                                            </button>
                                        </li>
                                    </ul>

                                    {/* Tab Content */}
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="tab5" role="tabpanel" aria-labelledby="tab5-tab">
                                            <div className="tab-main-box-img">
                                                <Image src="/img/technology-breathes-for-you.webp" alt="" width={200} height={200} />
                                                <p>Made for small spaces where fresh air matters most—quiet, compact, and perfect for bedrooms or study corners.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab6" role="tabpanel" aria-labelledby="tab6-tab">
                                            <div className="tab-main-box-img">
                                                <Image src="/img/technology-breathes-for-you.webp" alt="" width={200} height={200} />
                                                <p>Handles busy rooms with ease. Great for families, clinics, or shared offices where clean air needs to go the distance.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab7" role="tabpanel" aria-labelledby="tab7-tab">
                                            <div className="tab-main-box-img">
                                                <Image src="/img/technology-breathes-for-you.webp" alt="" width={200} height={200} />
                                                <p>Already have an AC? This one boosts it with fresh, clean air—perfect for modern homes and smart setups.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab8" role="tabpanel" aria-labelledby="tab8-tab">
                                            <div className="tab-main-box-img">
                                                <Image src="/img/technology-breathes-for-you.webp" alt="" width={200} height={200} />
                                                <p>No AC? No problem. This all-in-one cools and purifies—ideal for rentals or rooms that need a full comfort upgrade.
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
                            <p><strong>Our Office Feels Energized!</strong>
                                We have installed in our co-working space and the atmosphere has totally changed. It is quieter fresher and feels healthier—our employees love it. The continuous flow of fresh air without pollutants is a game-changer.</p>
                            <h3> — Startup Founder Bengaluru</h3>
                        </div>
                        <div className="app-slide-review-box">
                            <Image src="/img/rating.png" alt="" width={100} height={100} />
                            <p><strong>Fresh Air Without Compromise</strong>
                                Running a preschool means keeping kids safe and healthy. This machine ensures indoor air stays clean even during bad AQI days. Parents have noticed the difference—and so have we.</p>
                            <h3> — Preschool Owner Noida</h3>
                        </div>
                        <div className="app-slide-review-box">
                            <Image src="/img/rating.png" alt="" width={100} height={100} />
                            <p><strong>Reliable in Critical Spaces</strong>
                                In our small diagnostic lab we needed a solution that wouldnt just circulate the same indoor air. Prana Air is machine gives us that fresh air exchange while maintaining hygiene and comfort. Absolutely essential.</p>
                            <h3> — Lab Manager Mumbai</h3>
                        </div>
                        <div className="app-slide-review-box">
                            <Image src="/img/rating.png" alt="" width={100} height={100} />
                            <p><strong>Clean Air for Every Breath</strong>
                                We installed this system in our gym to ensure members get fresh oxygen-rich air even during peak hours. It handles sweat odour and outside dust effortlessly. Members have actually commented on how clean’ it smells</p>
                            <h3> — Fitness Centre Owner Pune</h3>
                        </div>
                        <div className="app-slide-review-box">
                            <Image src="/img/rating.png" alt="" width={100} height={100} />
                            <p><strong>One-Time Setup Long-Term Results</strong>
                                We have been using the Prana Air Fresh Air Machine in our villa for 6 months now. It is silent efficient and we dont even feel the outside pollution anymore. A must-have for urban homes.</p>
                            <h3> — Architect & Homeowner Gurugram</h3>
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
                                        <h5>AirGlide 2000 </h5>
                                        <span>(Large Rooms)</span>
                                    </li>
                                    <li>
                                        <h5>Arctic Duo 2000  </h5>
                                        <span>(Hybrid with AC)</span>
                                    </li>
                                    <li>
                                        <h5>FrostAir 2000</h5>
                                        <span>(Built-in Cooling)</span>
                                    </li>
                                </ul>
                                <div className="variant-comparison-box">
                                    <ul className="variant-feature">
                                        <li><h4 className="variant-text">Coverage Area</h4></li>
                                        <li><h4 className="variant-text">Brings AQI to Single Digits</h4></li>
                                        <li><h4 className="variant-text">Fresh Air Inflow</h4></li>
                                        <li><h4 className="variant-text">Compatible with Compressor AC</h4></li>
                                        <li><h4 className="variant-text">Built-in Compressor</h4></li>
                                        <li><h4 className="variant-text">Cooling Functionality</h4></li>
                                        <li><h4 className="variant-text">Ideal For</h4></li>
                                        <li><h4 className="variant-text">Power Consumption</h4></li>
                                        <li><h4 className="variant-text">Noise Level</h4></li>
                                    </ul>
                                    <ul>
                                        <li><h5 className="variant-tile">Up to 1200 sq. ft.</h5></li>
                                        <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                        <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                        <li><Image className="variant-icon" src="/img/wrong-icon.png" alt="" width={40} height={40} /></li>
                                        <li><Image className="variant-icon" src="/img/wrong-icon.png" alt="" width={40} height={40} /></li>
                                        <li><Image className="variant-icon" src="/img/wrong-icon.png" alt="" width={40} height={40} /></li>
                                        <li><h5 className="variant-tile">Bedrooms, small offices</h5></li>
                                        <li><h5 className="variant-tile">Low</h5></li>
                                        <li><h5 className="variant-tile">Ultra-quiet</h5></li>
                                        <li><a href="#">Request a quote <Image alt="" width={50} height={50} src="/img/link-icon.png" /></a></li>
                                    </ul>
                                    <ul>
                                        <li><h5 className="variant-tile">Up to 2000 sq. ft.</h5></li>
                                        <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                        <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                        <li><Image className="variant-icon" src="/img/wrong-icon.png" alt="" width={40} height={40} /></li>
                                        <li><Image className="variant-icon" src="/img/wrong-icon.png" alt="" width={40} height={40} /></li>
                                        <li><Image className="variant-icon" src="/img/wrong-icon.png" alt="" width={40} height={40} /></li>
                                        <li><h5 className="variant-tile">Living rooms, clinics, open areas</h5></li>
                                        <li><h5 className="variant-tile">Moderate</h5></li>
                                        <li><h5 className="variant-tile">Quiet</h5></li>
                                        <li><a href="#">Request a quote <Image alt="" width={50} height={50} src="/img/link-icon.png" /></a></li>
                                    </ul>
                                    <ul>
                                        <li><h5 className="variant-tile">Up to 2000 sq. ft.</h5></li>
                                        <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                        <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                        <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                        <li><Image className="variant-icon" src="/img/wrong-icon.png" alt="" width={40} height={40} /></li>
                                        <li><h5 className="variant-tile">AC Integration Required</h5></li>
                                        <li><h5 className="variant-tile">Smart homes, conference rooms</h5></li>
                                        <li><h5 className="variant-tile">Moderate-High</h5></li>
                                        <li><h5 className="variant-tile">Quiet with AC mode</h5></li>
                                        <li><a href="#">Request a quote <Image alt="" width={50} height={50} src="/img/link-icon.png" /></a></li>
                                    </ul>
                                    <ul>
                                        <li><h5 className="variant-tile">Up to 2000 sq. ft.</h5></li>
                                        <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                        <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                        <li>___</li>
                                        <li><Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} /></li>
                                        <li><h5 className="variant-tile">Inbuilt Air Cooling</h5></li>
                                        <li><h5 className="variant-tile">Homes/offices without a separate AC</h5></li>
                                        <li><h5 className="variant-tile">High</h5></li>
                                        <li><h5 className="variant-tile">Quiet (With Cooling)</h5></li>
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
                                    <h2>Green And Clean For You.</h2>
                                    <h3>Safest To The Planet</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="future-para">
                                    <p>
                                        <span>Breathe cleaner</span> air without harming the planet. With energy-saving tech and long-lasting filters, you get a healthier home and a smaller carbon footprint.
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
                                            <p>Filters made to last, so you don’t have to replace them constantly. Just swap to change and recycle.</p>
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
                                            <p>The advanced design uses up to 40% less energy than standard air purifiers, enjoy cleaner air without the high power bill. </p>
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
                                            <h4>Perfect for Green Homes and Mindful Living</h4>
                                            <p>This purifier is a perfect match for green-certified buildings and anyone looking to reduce their environmental impact—without compromising on clean and healthy air.</p>
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
                                        We spend 90% of your time indoors—but is the indoor air you are breathing really safe? With rising pollution, poor indoor air can lead to fatigue, allergies, and even anxiety.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 mob-flex">
                                <div className="spend-time-para fresh-air-machine">
                                    <p>
                                        The Fresh Air Machine doesn’t just filter – it transforms.
                                        Breathe easy while you live, work, sleep, and relax in air that feels fresh, light, and completely worry-free.
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
                <section id="form" className="get-in-sec">
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
                                                1. Can I use the Fresh Air Machine in any room?
                                            </button>
                                        </h2>
                                        <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body faq-tab-para">
                                                <p>
                                                    Yes! We have models designed for different room sizes, from compact spaces like bedrooms to large areas like living rooms or offices. Choose the one that fits your space and needs!
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
                                                2. How long does it take to purify the air?
                                            </button>
                                        </h2>
                                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body faq-tab-para">
                                                <p>
                                                    The Fresh Air Machine works fast. It can bring your AQI down to single digits in just a few minutes, so you’ll start breathing cleaner air almost immediately.
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
                                                3. Is the Fresh Air Machine noisy?
                                            </button>
                                        </h2>
                                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body faq-tab-para">
                                                <p>
                                                    Nope Our machines are designed to run quietly so you can enjoy fresh air without disruptions. Whether you are sleeping working or relaxing the machine operates quietly in the background.
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
                                                4. How do I maintain the Fresh Air Machine?
                                            </button>
                                        </h2>
                                        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body faq-tab-para">
                                                <p>
                                                    Our machines are low maintenance! Simply replace the filters when needed (depending on usage), and they are recyclable. No complex setups or regular maintenance required.
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
                                                5. Is the Fresh Air Machine energy-efficient?
                                            </button>
                                        </h2>
                                        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body faq-tab-para">
                                                <p>
                                                    Yes, it uses up to 40% less energy compared to traditional purifiers, making it an eco-friendly and cost-effective choice for keeping your air clean without a high energy bill.
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
        </main>
    )
}