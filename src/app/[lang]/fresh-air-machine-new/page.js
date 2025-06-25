import "./style.css"
import Image from "next/image"
import Link from "@/Components/TranslateLink"
import VideoPopup from "@/Components/Pages/AirQualityCommonMonitor/video-popup"
import FresherCarousel from "@/Components/Pages/FreshAirMachine/applications-slider"
import ContactForm from "@/Components/Contacform/ContactForm"
import AnyMomentScrollCards from "@/Components/Pages/FreshAirMachine/gsap-animation"
import ToxicPollutantsSection from "@/Components/Pages/FreshAirMachine/zoom-animation"
import { getServerTranslation } from "@/i18n/server"

export default async function CommonMonitorPage() {
    const { t } = await getServerTranslation("fresh-air-machine-new")
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
            title: t("anyMoment.meTime.title"),
            desc: t("anyMoment.meTime.desc"),
            image: "/img/turn-your-personal-space.webp",
        },
        {
            title: t("anyMoment.freshClassrooms.title"),
            desc: t("anyMoment.freshClassrooms.desc"),
            image: "/img/fresh-classrooms.webp",
        },
        {
            title: t("anyMoment.partyTime.title"),
            desc: t("anyMoment.partyTime.desc"),
            image: "/img/party-time.webp",
        },
        {
            title: t("anyMoment.familyTime.title"),
            desc: t("anyMoment.familyTime.desc"),
            image: "/img/family-time.webp",
        },
        {
            title: t("anyMoment.workSmarter.title"),
            desc: t("anyMoment.workSmarter.desc"),
            image: "/img/work-smarter.webp",
        },
        {
            title: t("anyMoment.healthierCare.title"),
            desc: t("anyMoment.healthierCare.desc"),
            image: "/img/healthier-care-centres.webp",
        },
    ]
    const toxicContent = {
        heading: t("toxicPollutants.heading"),
        subheading: t("toxicPollutants.subheading"),
        description: t("toxicPollutants.description"),
        pollutants: [
            {
                label: t("toxicPollutants.pollutants.formaldehyde"),
                image: "/img/hcho.png",
            },
            {
                label: t("toxicPollutants.pollutants.particulateMatter"),
                image: "/img/particulate-matter.png",
            },
            {
                label: t("toxicPollutants.pollutants.tvoc"),
                image: "/img/tvoc-icon.png",
            },
            {
                label: t("toxicPollutants.pollutants.carbonDioxide"),
                image: "/img/carbon-dioxide.png",
            },
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
                                <h1>{t("hero.title")}</h1>
                                <p>{t("hero.description")}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-link">
                                <Link href="#form">{t("hero.requestQuote")}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="video-box">
                                <VideoPopup videoUrl="https://www.youtube.com/embed/vKTDgUu1K_E?autoplay=1&mute=1" />
                            </div>
                            <div className="scroll-explore">
                                <a href="#explore">
                                    <Image src="/img/explore-icon.png" alt="" width={10} height={10} /> {t("hero.scrollToExplore")}
                                </a>
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
                                    <h2>{t("anyMoment.heading")}</h2>
                                    <h3>{t("anyMoment.subheading")}</h3>
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

                {/* In Minutes */}
                <section className="aqi-levels-digits">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hazardous-video-box-heading">
                                    <h2>{t("inMinutes.heading")}</h2>
                                    <h3>{t("inMinutes.subheading")}</h3>
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

                {/* Toxic Pollutants */}
                <ToxicPollutantsSection toxicContent={toxicContent} />

                {/* Effortlessly */}
                <section className="effortless-sec">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="efforless-text">
                                    <h2>{t("effortless.heading")}</h2>
                                    <h3>{t("effortless.subheading")}</h3>
                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="effortless-data">
                                    <ul>
                                        <li>
                                            <span>
                                                <Image src="/img/real-time-data.png" alt="" width={100} height={100} />
                                            </span>
                                            <span>
                                                <h3>{t("effortless.features.realTimeData.title")}</h3>
                                                <p>{t("effortless.features.realTimeData.description")}</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <Image src="/img/adjustable-fan.png" alt="" width={100} height={100} />
                                            </span>
                                            <span>
                                                <h3>{t("effortless.features.adjustableFan.title")}</h3>
                                                <p>{t("effortless.features.adjustableFan.description")}</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <Image src="/img/heating-cooling-modes.png" alt="" width={100} height={100} />
                                            </span>
                                            <span>
                                                <h3>{t("effortless.features.heatingCooling.title")}</h3>
                                                <p>{t("effortless.features.heatingCooling.description")}</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <Image src="/img/child-lock.png" alt="" width={100} height={100} />
                                            </span>
                                            <span>
                                                <h3>{t("effortless.features.childLock.title")}</h3>
                                                <p>{t("effortless.features.childLock.description")}</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <Image src="/img/manual-auto-modes.png" alt="" width={100} height={100} />
                                            </span>
                                            <span>
                                                <h3>{t("effortless.features.manualAuto.title")}</h3>
                                                <p>{t("effortless.features.manualAuto.description")}</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <Image src="/img/wifi-connected.png" alt="" width={100} height={100} />
                                            </span>
                                            <span>
                                                <h3>{t("effortless.features.wifiConnected.title")}</h3>
                                                <p>{t("effortless.features.wifiConnected.description")}</p>
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
                                    <h2>{t("variants.heading")}</h2>
                                    <h3>{t("variants.subheading")}</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="pick-fresh-para">
                                    <p>{t("variants.description")}</p>
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
                                                <h4>{t("variants.products.aeroLite1200.name")}</h4>
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
                                                <h4>{t("variants.products.airGlide2000.name")}</h4>
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
                                                <h4>{t("variants.products.arcticDuo2000.name")}</h4>
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
                                                    <h3>{t("variants.products.aeroLite1200.name")}</h3>
                                                    <span>{t("variants.products.aeroLite1200.testimonial")}</span>
                                                    <div className="inner-flex">
                                                        <div className="lft">
                                                            <h4>{t("variants.perfectFor")}:</h4>
                                                            <ul>
                                                                <li>
                                                                    <Image src="/img/bed-double.png" alt="" width={20} height={20} />{" "}
                                                                    {t("variants.products.aeroLite1200.perfectFor.bedrooms")}
                                                                </li>
                                                                <li>
                                                                    <Image src="/img/study-rooms.png" alt="" width={20} height={20} />{" "}
                                                                    {t("variants.products.aeroLite1200.perfectFor.studyRooms")}
                                                                </li>
                                                                <li>
                                                                    <Image src="/img/studio-apastments.png" alt="" width={20} height={20} />{" "}
                                                                    {t("variants.products.aeroLite1200.perfectFor.studioApartments")}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="rgt">
                                                            <h4>{t("variants.coverage")}:</h4>
                                                            <span>{t("variants.upTo")}</span>
                                                            <h5>{t("variants.products.aeroLite1200.coverage")}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="highlight">
                                                        <h4>{t("variants.highlights")}:</h4>
                                                        <ul>
                                                            <li>{t("variants.products.aeroLite1200.highlights.ultraQuiet")}</li>
                                                            <li>{t("variants.products.aeroLite1200.highlights.lightweight")}</li>
                                                            <li>{t("variants.products.aeroLite1200.highlights.aqiReduction")}</li>
                                                            <li>{t("variants.products.aeroLite1200.highlights.idealFor")}</li>
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
                                                    <h3>{t("variants.products.airGlide2000.name")}</h3>
                                                    <span>{t("variants.products.airGlide2000.testimonial")}</span>
                                                    <div className="inner-flex">
                                                        <div className="lft">
                                                            <h4>{t("variants.perfectFor")}:</h4>
                                                            <ul>
                                                                <li>
                                                                    <Image src="/img/large-halls.png" alt="" width={20} height={20} />{" "}
                                                                    {t("variants.products.airGlide2000.perfectFor.largeHalls")}
                                                                </li>
                                                                <li>
                                                                    <Image src="/img/shared-offices.png" alt="" width={20} height={20} />{" "}
                                                                    {t("variants.products.airGlide2000.perfectFor.sharedOffices")}
                                                                </li>
                                                                <li>
                                                                    <Image src="/img/clinics.png" alt="" width={20} height={20} />{" "}
                                                                    {t("variants.products.airGlide2000.perfectFor.clinics")}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="rgt">
                                                            <h4>{t("variants.coverage")}:</h4>
                                                            <span>{t("variants.upTo")}</span>
                                                            <h5>{t("variants.products.airGlide2000.coverage")}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="highlight">
                                                        <h4>{t("variants.highlights")}:</h4>
                                                        <ul>
                                                            <li>{t("variants.products.airGlide2000.highlights.powerfulAirflow")}</li>
                                                            <li>{t("variants.products.airGlide2000.highlights.consistentAqi")}</li>
                                                            <li>{t("variants.products.airGlide2000.highlights.whisperQuiet")}</li>
                                                            <li>{t("variants.products.airGlide2000.highlights.idealFor")}</li>
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
                                                    <h3>{t("variants.products.arcticDuo2000.name")}</h3>
                                                    <span>{t("variants.products.arcticDuo2000.testimonial")}</span>
                                                    <div className="inner-flex">
                                                        <div className="lft">
                                                            <h4>{t("variants.perfectFor")}:</h4>
                                                            <ul>
                                                                <li>
                                                                    <Image src="/img/smart-home.png" alt="" width={20} height={20} />{" "}
                                                                    {t("variants.products.arcticDuo2000.perfectFor.smartHomes")}
                                                                </li>
                                                                <li>
                                                                    <Image src="/img/modular-setups.png" alt="" width={20} height={20} />{" "}
                                                                    {t("variants.products.arcticDuo2000.perfectFor.modularSetups")}
                                                                </li>
                                                                <li>
                                                                    <Image src="/img/offices.png" alt="" width={20} height={20} />{" "}
                                                                    {t("variants.products.arcticDuo2000.perfectFor.offices")}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="rgt">
                                                            <h4>{t("variants.coverage")}:</h4>
                                                            <span>{t("variants.upTo")}</span>
                                                            <h5>{t("variants.products.arcticDuo2000.coverage")}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="highlight">
                                                        <h4>{t("variants.highlights")}:</h4>
                                                        <ul>
                                                            <li>{t("variants.products.arcticDuo2000.highlights.integrates")}</li>
                                                            <li>{t("variants.products.arcticDuo2000.highlights.dualBenefit")}</li>
                                                            <li>{t("variants.products.arcticDuo2000.highlights.smartChoice")}</li>
                                                            <li>{t("variants.products.arcticDuo2000.highlights.bestFor")}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="#">
                                            {t("variants.requestQuote")} <Image src="/img/link-icon.png" alt="" width={50} height={50} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <FresherCarousel responsive={bannersldier} className="banner-slider-box" arrows={false} showDots={true}>
                                <div className="banner-slider-img">
                                    <div className="banner-slider-heading fresher-machine-heading">
                                        <h2>{t("carousel.slide1.heading")}</h2>
                                        <h3>{t("carousel.slide1.subheading")}</h3>
                                        <p>{t("carousel.slide1.description")}</p>
                                    </div>
                                    <Image src="/img/fresh-air-machine-transforms.webp" alt="" width={200} height={150} />
                                </div>
                                <div className="banner-slider-img">
                                    <div className="banner-slider-heading">
                                        <h2>{t("carousel.slide2.heading")}</h2>
                                        <h3>{t("carousel.slide2.subheading")}</h3>
                                        <p>{t("carousel.slide2.description")}</p>
                                    </div>
                                    <Image src="/img/form-hazardous-to-heavenly.webp" alt="" width={200} height={150} />
                                </div>
                            </FresherCarousel>
                        </div>
                        <div className="modes-bg">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="tow-modes-heading">
                                        <h2>{t("modes.heading")}</h2>
                                        <h3>{t("modes.subheading")}</h3>
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
                                            <li>{t("modes.recirculation.title")}</li>
                                        </ul>
                                        <p>{t("modes.recirculation.description")}</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mode-box">
                                        <Image className="outdoor-img" src="/img/mode-outdoor-air.webp" alt="" width={200} height={200} />
                                        <ul>
                                            <li>02</li>
                                            <li>{t("modes.outdoorAir.title")}</li>
                                        </ul>
                                        <p>{t("modes.outdoorAir.description")}</p>
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
                                    <h2>{t("technology.heading")}</h2>
                                    <h3>{t("technology.subheading")}</h3>
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
                                                <h4>{t("variants.products.aeroLite1200.name")}</h4>
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
                                                <h4>{t("variants.products.airGlide2000.name")}</h4>
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
                                                <h4>{t("variants.products.arcticDuo2000.name")}</h4>
                                            </button>
                                        </li>
                                    </ul>

                                    {/* Tab Content */}
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="tab5" role="tabpanel" aria-labelledby="tab5-tab">
                                            <div className="tab-main-box-img">
                                                <Image src="/img/aerolite1200.webp" alt="" width={200} height={200} />
                                                <p>{t("technology.products.aeroLite1200.description")}</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab6" role="tabpanel" aria-labelledby="tab6-tab">
                                            <div className="tab-main-box-img">
                                                <Image src="/img/airglide2000.webp" alt="" width={200} height={200} />
                                                <p>{t("technology.products.airGlide2000.description")}</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab7" role="tabpanel" aria-labelledby="tab7-tab">
                                            <div className="tab-main-box-img">
                                                <Image src="/img/airglide2000.webp" alt="" width={200} height={200} />
                                                <p>{t("technology.products.arcticDuo2000.description")}</p>
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
                                    <h2>{t("testimonials.heading")}</h2>
                                    <h3>{t("testimonials.subheading")}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FresherCarousel responsive={trusted} className="review-slider">
                        <div className="app-slide-review-box">
                            <Image src="/img/rating.png" alt="" width={100} height={100} />
                            <p>
                                <strong>{t("testimonials.reviews.startup.title")}</strong>
                                {t("testimonials.reviews.startup.content")}
                            </p>
                            <h3>{t("testimonials.reviews.startup.author")}</h3>
                        </div>
                        <div className="app-slide-review-box">
                            <Image src="/img/rating.png" alt="" width={100} height={100} />
                            <p>
                                <strong>{t("testimonials.reviews.preschool.title")}</strong>
                                {t("testimonials.reviews.preschool.content")}
                            </p>
                            <h3>{t("testimonials.reviews.preschool.author")}</h3>
                        </div>
                        <div className="app-slide-review-box">
                            <Image src="/img/rating.png" alt="" width={100} height={100} />
                            <p>
                                <strong>{t("testimonials.reviews.lab.title")}</strong>
                                {t("testimonials.reviews.lab.content")}
                            </p>
                            <h3>{t("testimonials.reviews.lab.author")}</h3>
                        </div>
                        <div className="app-slide-review-box">
                            <Image src="/img/rating.png" alt="" width={100} height={100} />
                            <p>
                                <strong>{t("testimonials.reviews.gym.title")}</strong>
                                {t("testimonials.reviews.gym.content")}
                            </p>
                            <h3>{t("testimonials.reviews.gym.author")}</h3>
                        </div>
                        <div className="app-slide-review-box">
                            <Image src="/img/rating.png" alt="" width={100} height={100} />
                            <p>
                                <strong>{t("testimonials.reviews.homeowner.title")}</strong>
                                {t("testimonials.reviews.homeowner.content")}
                            </p>
                            <h3>{t("testimonials.reviews.homeowner.author")}</h3>
                        </div>
                    </FresherCarousel>
                </section>

                {/* Variant Comparison Section */}
                <div className="container-fluid variant-sec">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="variant-comparison">
                                <h2>{t("comparison.heading")}</h2>
                                <h3>{t("comparison.subheading")}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="variant-comparison-sec">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="main-title-variant">
                                    <li>
                                        <h4 className="main-title">{t("comparison.features")}</h4>
                                    </li>
                                    <li>
                                        <h5>{t("variants.products.aeroLite1200.name")}</h5>
                                        <span>({t("comparison.smallSpaces")})</span>
                                    </li>
                                    <li>
                                        <h5>{t("variants.products.airGlide2000.name")}</h5>
                                        <span>({t("comparison.largeRooms")})</span>
                                    </li>
                                    <li>
                                        <h5>{t("variants.products.arcticDuo2000.name")}</h5>
                                        <span>({t("comparison.hybridWithAc")})</span>
                                    </li>
                                    <li>
                                        <h5>{t("variants.products.frostAir2000.name")}</h5>
                                        <span>({t("comparison.builtInCooling")})</span>
                                    </li>
                                </ul>
                                <div className="variant-comparison-box">
                                    <ul className="variant-feature">
                                        <li>
                                            <h4 className="variant-text">{t("comparison.table.coverageArea")}</h4>
                                        </li>
                                        <li>
                                            <h4 className="variant-text">{t("comparison.table.aqiSingleDigits")}</h4>
                                        </li>
                                        <li>
                                            <h4 className="variant-text">{t("comparison.table.freshAirInflow")}</h4>
                                        </li>
                                        <li>
                                            <h4 className="variant-text">{t("comparison.table.compatibleAc")}</h4>
                                        </li>
                                        <li>
                                            <h4 className="variant-text">{t("comparison.table.builtInCompressor")}</h4>
                                        </li>
                                        <li>
                                            <h4 className="variant-text">{t("comparison.table.coolingFunctionality")}</h4>
                                        </li>
                                        <li>
                                            <h4 className="variant-text">{t("comparison.table.idealFor")}</h4>
                                        </li>
                                        <li>
                                            <h4 className="variant-text">{t("comparison.table.powerConsumption")}</h4>
                                        </li>
                                        <li>
                                            <h4 className="variant-text">{t("comparison.table.noiseLevel")}</h4>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <h5 className="variant-tile">{t("variants.products.aeroLite1200.coverage")}</h5>
                                        </li>
                                        <li>
                                            <Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>
                                            <Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>
                                            <Image className="variant-icon" src="/img/wrong-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>
                                            <Image className="variant-icon" src="/img/wrong-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>
                                            <Image className="variant-icon" src="/img/wrong-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>
                                            <h5 className="variant-tile">{t("comparison.table.aeroLite.idealFor")}</h5>
                                        </li>
                                        <li>
                                            <h5 className="variant-tile">{t("comparison.table.aeroLite.powerConsumption")}</h5>
                                        </li>
                                        <li>
                                            <h5 className="variant-tile">{t("comparison.table.aeroLite.noiseLevel")}</h5>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {t("variants.requestQuote")} <Image alt="" width={50} height={50} src="/img/link-icon.png" />
                                            </a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <h5 className="variant-tile">{t("variants.products.airGlide2000.coverage")}</h5>
                                        </li>
                                        <li>
                                            <Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>
                                            <Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>
                                            <Image className="variant-icon" src="/img/wrong-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>
                                            <Image className="variant-icon" src="/img/wrong-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>
                                            <Image className="variant-icon" src="/img/wrong-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>
                                            <h5 className="variant-tile">{t("comparison.table.airGlide.idealFor")}</h5>
                                        </li>
                                        <li>
                                            <h5 className="variant-tile">{t("comparison.table.airGlide.powerConsumption")}</h5>
                                        </li>
                                        <li>
                                            <h5 className="variant-tile">{t("comparison.table.airGlide.noiseLevel")}</h5>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {t("variants.requestQuote")} <Image alt="" width={50} height={50} src="/img/link-icon.png" />
                                            </a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <h5 className="variant-tile">{t("variants.products.arcticDuo2000.coverage")}</h5>
                                        </li>
                                        <li>
                                            <Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>
                                            <Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>
                                            <Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>
                                            <Image className="variant-icon" src="/img/wrong-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>
                                            <h5 className="variant-tile">{t("comparison.table.arcticDuo.coolingFunctionality")}</h5>
                                        </li>
                                        <li>
                                            <h5 className="variant-tile">{t("comparison.table.arcticDuo.idealFor")}</h5>
                                        </li>
                                        <li>
                                            <h5 className="variant-tile">{t("comparison.table.arcticDuo.powerConsumption")}</h5>
                                        </li>
                                        <li>
                                            <h5 className="variant-tile">{t("comparison.table.arcticDuo.noiseLevel")}</h5>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {t("variants.requestQuote")} <Image alt="" width={50} height={50} src="/img/link-icon.png" />
                                            </a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <h5 className="variant-tile">{t("variants.products.frostAir2000.coverage")}</h5>
                                        </li>
                                        <li>
                                            <Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>
                                            <Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>___</li>
                                        <li>
                                            <Image className="variant-icon" src="/img/correct-icon.png" alt="" width={40} height={40} />
                                        </li>
                                        <li>
                                            <h5 className="variant-tile">{t("comparison.table.frostAir.coolingFunctionality")}</h5>
                                        </li>
                                        <li>
                                            <h5 className="variant-tile">{t("comparison.table.frostAir.idealFor")}</h5>
                                        </li>
                                        <li>
                                            <h5 className="variant-tile">{t("comparison.table.frostAir.powerConsumption")}</h5>
                                        </li>
                                        <li>
                                            <h5 className="variant-tile">{t("comparison.table.frostAir.noiseLevel")}</h5>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {t("variants.requestQuote")} <Image alt="" width={50} height={50} src="/img/link-icon.png" />
                                            </a>
                                        </li>
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
                                    <h2>{t("greenClean.heading")}</h2>
                                    <h3>{t("greenClean.subheading")}</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="future-para">
                                    <p>
                                        <span>{t("greenClean.description.breatheCleaner")}</span> {t("greenClean.description.rest")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="low-maintenance">
                                    <ul>
                                        <li>
                                            <h4>{t("greenClean.features.lowMaintenance.title")}</h4>
                                            <p>{t("greenClean.features.lowMaintenance.description")}</p>
                                        </li>
                                        <li>
                                            <Image src="/img/low-maintenance.png" alt="" width={100} height={100} />
                                        </li>
                                    </ul>
                                </div>
                                <div className="low-maintenance">
                                    <ul>
                                        <li>
                                            <h4>{t("greenClean.features.lessEnergy.title")}</h4>
                                            <p>{t("greenClean.features.lessEnergy.description")}</p>
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
                                            <h4>{t("greenClean.features.greenHomes.title")}</h4>
                                            <p>{t("greenClean.features.greenHomes.description")}</p>
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
                                    <h2>{t("whySettle.heading")}</h2>
                                    <h3>{t("whySettle.subheading")}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="spend-time">
                                    <ul>
                                        <li className="floating">
                                            <Image src="/img/particulate-matter.png" alt="" width={50} height={50} />
                                            <span>{t("toxicPollutants.pollutants.formaldehyde")}</span>
                                        </li>
                                        <li className="floating">
                                            <Image src="/img/particulate-matter.png" alt="" width={50} height={50} />
                                            <span>{t("toxicPollutants.pollutants.formaldehyde")}</span>
                                        </li>
                                        <li className="floating">
                                            <Image src="/img/particulate-matter.png" alt="" width={50} height={50} />
                                            <span>{t("toxicPollutants.pollutants.formaldehyde")}</span>
                                        </li>
                                        <li className="floating">
                                            <Image src="/img/particulate-matter.png" alt="" width={50} height={50} />
                                            <span>{t("toxicPollutants.pollutants.formaldehyde")}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="spend-time-para">
                                    <p>{t("whySettle.leftContent")}</p>
                                </div>
                            </div>
                            <div className="col-lg-6 mob-flex">
                                <div className="spend-time-para fresh-air-machine">
                                    <p>{t("whySettle.rightContent")}</p>
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
                                    <h2>{t("contact.heading")}</h2>
                                    <h3>{t("contact.subheading")}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-box">
                                    <Image src="/img/get-in-touch.webp" alt="" width={200} height={200} />
                                    <div className="contact-details">
                                        <h4>{t("contact.contactInfo")}</h4>
                                        <p>{t("contact.lookingFor")}</p>
                                        <ul>
                                            <li>
                                                <span>
                                                    <Image src="/img/contact-call-icon.png" alt="" width={15} height={15} />
                                                </span>
                                                <h4>
                                                    <span>{t("contact.phoneNumber")}:</span>
                                                    (+91) 73918-73918
                                                </h4>
                                            </li>
                                            <li>
                                                <span>
                                                    <Image src="/img/contact-location-icon.png" alt="" width={15} height={15} />
                                                </span>
                                                <h4>
                                                    <span>706, 7th Floor, Sec 10, Rohini, Delhi 85, India</span>
                                                </h4>
                                            </li>
                                            <li>
                                                <span>
                                                    <Image src="/img/contact-mail-icon.png" alt="" width={15} height={15} />
                                                </span>
                                                <h4>
                                                    <span>info@purelogic.in</span>
                                                    contact@purelogic.in
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
                                    <h2>{t("faq.heading")}</h2>
                                    <h3>{t("faq.subheading")}</h3>
                                    <p>{t("faq.description")}</p>
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
                                                {t("faq.questions.q1.question")}
                                            </button>
                                        </h2>
                                        <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body faq-tab-para">
                                                <p>{t("faq.questions.q1.answer")}</p>
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
                                                {t("faq.questions.q2.question")}
                                            </button>
                                        </h2>
                                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body faq-tab-para">
                                                <p>{t("faq.questions.q2.answer")}</p>
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
                                                {t("faq.questions.q3.question")}
                                            </button>
                                        </h2>
                                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body faq-tab-para">
                                                <p>{t("faq.questions.q3.answer")}</p>
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
                                                {t("faq.questions.q4.question")}
                                            </button>
                                        </h2>
                                        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body faq-tab-para">
                                                <p>{t("faq.questions.q4.answer")}</p>
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
                                                aria-controls="faq5"
                                            >
                                                {t("faq.questions.q5.question")}
                                            </button>
                                        </h2>
                                        <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body faq-tab-para">
                                                <p>{t("faq.questions.q5.answer")}</p>
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