"use client"
import "./style.css"
import Link from "next/link"
import Image from "next/image"
import SensorNavBar from "@/Components/Sensorbar/SensorNavBar"
import QuantityCounter from "@/Components/Pages/SulfurDioxide/quantity-counter"
import ContactForm from "@/Components/Contacform/ContactForm"
import ProductCarousel from "@/Components/Pages/SulfurDioxide/product-carousel"

export default function SensorPageTemplate({
    sensorName,
    sensorType,
    pageName,
    productImages,
    variants,
    description,
    descriptions,
    introduction,
    calibration,
    technology,
    whatIsSection,
    lightMode,
    sensorChip,
    applications,
    technicalSpecs,
    gallery,
    contact,
    relatedProducts,
}) {
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
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    const galleryResponsive = {
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
        <div className="air-drone-page">
            <main className="air-drone-page">
                <SensorNavBar />

                {/* Hero Section */}
                <section className="product-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-img">
                                    <div className="tab-content">
                                        {productImages.main.map((image, index) => (
                                            <div
                                                key={index}
                                                className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                                                id={`ProductImage${index}`}
                                                role="tabpanel"
                                                aria-labelledby={`ProductImage${index}-tab`}
                                            >
                                                <div className="sensor-img">
                                                    <Image
                                                        src={image || "/placeholder.svg"}
                                                        alt={`${sensorName} Image ${index + 1}`}
                                                        width={400}
                                                        height={400}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <ul className="nav nav-tabs sensor-product-tab" role="tablist">
                                        {productImages.thumbnails.map((thumb, index) => (
                                            <li key={index} className="nav-item" role="presentation">
                                                <button
                                                    className={`nav-link ${index === 0 ? "active" : ""}`}
                                                    id={`ProductImage${index}-tab`}
                                                    data-bs-toggle="tab"
                                                    data-bs-target={`#ProductImage${index}`}
                                                    type="button"
                                                    role="tab"
                                                    aria-controls={`ProductImage${index}`}
                                                    aria-selected={index === 0}
                                                >
                                                    <div className="sensor-img-thumb">
                                                        <Image
                                                            src={thumb || "/placeholder.svg"}
                                                            alt={`${sensorName} Thumbnail ${index + 1}`}
                                                            width={100}
                                                            height={80}
                                                        />
                                                    </div>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="product-discription">
                                    <h1>{sensorName}</h1>
                                    <span>
                                        <Image src="/img/highly-precise.png" alt="Highly Precise" width={50} height={50} />
                                    </span>
                                    <ul className="nav nav-tabs sensor-disc-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="StandardVariant-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#StandardVariant"
                                                type="button"
                                                role="tab"
                                                aria-controls="StandardVariant"
                                                aria-selected="true"
                                            >
                                                <div className="sensor-tab-btn">
                                                    <Image
                                                        src={variants.standard.image || "/placeholder.svg"}
                                                        alt="Standard Variant"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <span>{variants.standard.ppm}</span>
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="PremiumVariant-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#PremiumVariant"
                                                type="button"
                                                role="tab"
                                                aria-controls="PremiumVariant"
                                                aria-selected="false"
                                            >
                                                <div className="sensor-tab-btn">
                                                    <Image
                                                        src={variants.premium.image || "/placeholder.svg"}
                                                        alt="Premium Variant"
                                                        width={30}
                                                        height={30}
                                                    />
                                                    <span>{variants.premium.ppm}</span>
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="product-disc">
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane fade show active"
                                                id="StandardVariant"
                                                role="tabpanel"
                                                aria-labelledby="StandardVariant-tab"
                                            >
                                                <div className="product-rate">
                                                    <span>{variants.standard.price}</span>
                                                    <p>{description}</p>
                                                    <QuantityCounter />
                                                    <ul className="buy-now-btn">
                                                        <li>
                                                            <button className="add-cart product-buy">
                                                                Add to Cart <span className="fw-bold">+</span>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="buy-now product-buy">Buy Now</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="PremiumVariant"
                                                role="tabpanel"
                                                aria-labelledby="PremiumVariant-tab"
                                            >
                                                <div className="product-rate">
                                                    <span>{variants.premium.price}</span>
                                                    <p>{descriptions}</p>
                                                    <QuantityCounter />
                                                    <ul className="buy-now-btn">
                                                        <li>
                                                            <button className="add-cart product-buy">
                                                                Add to Cart <span className="fw-bold">+</span>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="buy-now product-buy">Buy Now</button>
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

                {/* Introduction Section */}
                <section className="intro">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="intro-heading">
                                    <h2>
                                        <span>{introduction.titleHighlight}</span> {introduction.title}
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="variant-box">
                                    <ul className="nav nav-tabs variant-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="IntroVariantA-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#IntroVariantA"
                                                type="button"
                                                role="tab"
                                                aria-controls="IntroVariantA"
                                                aria-selected="true"
                                            >
                                                <div className="variant-tab-btn">
                                                    <span>Variant A</span>
                                                    <Image src="/img/variant-icon.png" alt="Variant Icon" width={50} height={50} />
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="IntroVariantB-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#IntroVariantB"
                                                type="button"
                                                role="tab"
                                                aria-controls="IntroVariantB"
                                                aria-selected="false"
                                            >
                                                <div className="variant-tab-btn">
                                                    <span>Variant B</span>
                                                    <Image src="/img/variant-icon.png" alt="Variant Icon" width={50} height={50} />
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
                                    <div
                                        className="tab-pane fade show active"
                                        id="IntroVariantA"
                                        role="tabpanel"
                                        aria-labelledby="IntroVariantA-tab"
                                    >
                                        <div className="sensor-txt">
                                            <div className="content">
                                                <p>{introduction.description}</p>
                                                <ul>
                                                    <li>
                                                        <strong>{introduction.specs.resolution.value}</strong> {introduction.specs.resolution.label}
                                                    </li>
                                                    <li>
                                                        <strong>{introduction.specs.range.value}</strong> {introduction.specs.range.label}
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sensor-imgs">
                                                <h3>{sensorName}</h3>
                                                <Image
                                                    src={introduction.sensorImages.variantA || "/placeholder.svg"}
                                                    alt={`${sensorName} Variant A`}
                                                    width={300}
                                                    height={200}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="IntroVariantB" role="tabpanel" aria-labelledby="IntroVariantB-tab">
                                        <div className="sensor-txt">
                                            <div className="content">
                                                <p>{introduction.description}</p>
                                                <ul>
                                                    <li>
                                                        <strong>{introduction.specs.resolution.value}</strong> {introduction.specs.resolution.label}
                                                    </li>
                                                    <li>
                                                        <strong>{introduction.specs.range.value}</strong> {introduction.specs.range.label}
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sensor-imgs">
                                                <h3>{sensorName} Variant B</h3>
                                                <Image
                                                    src={introduction.sensorImages.variantB || "/placeholder.svg"}
                                                    alt={`${sensorName} Variant B`}
                                                    width={300}
                                                    height={200}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="why-choose-heading">
                                    <h2>
                                        Why Choose <span>{sensorType}</span> Sensor?
                                    </h2>
                                </div>
                                <div className="why-choose-icon">
                                    <ul>
                                        {introduction.whyChooseFeatures.map((feature, index) => (
                                            <li key={index}>
                                                <Image src={feature.icon || "/placeholder.svg"} alt={feature.iconAlt} width={50} height={50} />
                                                <h3>{feature.title}</h3>
                                                <p>{feature.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Calibration Video Section */}
                <section className="calibration-video">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="video-box">
                                    <Image
                                        src={calibration.videoImage || "/placeholder.svg"}
                                        alt={calibration.videoAlt}
                                        width={800}
                                        height={400}
                                    />
                                </div>
                                <div className="video-txt">
                                    <h2>{calibration.title}</h2>
                                    <p>{calibration.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technology Section */}
                <section className="what-tech">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="what-tech-heading">
                                    <h2>{technology.title}</h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bg">
                                    <h3>{technology.subtitle}</h3>
                                    <Link href={technology.learnMoreLink}>Learn More</Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tech-txt">
                                    <h3>{technology.subtitle}</h3>
                                    <Link href={technology.learnMoreLink}>Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is Section */}
                <section className="what-is-sulfur">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="sulfur-heading">
                                    <h2>{whatIsSection.title}</h2>
                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                            <div className="col-lg-12">
                                <div className="sulfur-img">
                                    <Image
                                        src={whatIsSection.image || "/placeholder.svg"}
                                        alt={whatIsSection.imageAlt}
                                        width={800}
                                        height={400}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sulfur-txt">
                                    <p>{whatIsSection.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Light Mode Section */}
                <section className="light-mode">
                    <div className="container">
                        <div className="col-lg-6">
                            <div className="light-mode-txt">
                                <h2>{lightMode.title}</h2>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                        <div className="col-lg-12">
                            <div className="light-mode-img">
                                <Image src={lightMode.image || "/placeholder.svg"} alt={lightMode.imageAlt} width={800} height={400} />
                                <p>{lightMode.description}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sensor Chip Section */}
                <section className="sensor-chip">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="sensor-chip-img">
                                    <Image
                                        src={sensorChip.image || "/placeholder.svg"}
                                        alt={sensorChip.imageAlt}
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="sensor-chip-txt">
                                    <ul>
                                        <li>
                                            <h2>{sensorChip.title}</h2>
                                            <Link href={sensorChip.buyNowLink}>Buy Now</Link>
                                        </li>
                                        <li>
                                            <p>{sensorChip.description}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications Section */}
                <section className="app-slider-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slider-title">
                                    <h2>{applications.title}</h2>
                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <ProductCarousel responsive={responsive} className="app-slider">
                                    {applications.items.map((app) => (
                                        <div key={app.id}>
                                            <div className="app-slide-img-box">
                                                <Image src={app.image || "/placeholder.svg"} alt={app.alt} width={200} height={150} />
                                                <h3>{app.title}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </ProductCarousel>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Specifications Section */}
                <section className="tech-spec-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tech-heading">
                                    <h2>{technicalSpecs.title}</h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="variant-box">
                                    <ul className="nav nav-tabs variant-tab tech-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="TechSpecA-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#TechSpecA"
                                                type="button"
                                                role="tab"
                                                aria-controls="TechSpecA"
                                                aria-selected="true"
                                            >
                                                <div className="variant-tab-btn">
                                                    <span>{technicalSpecs.variants.variantA}</span>
                                                    <Image src="/img/variant-icon.png" alt="Variant Icon" width={50} height={50} />
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="TechSpecB-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#TechSpecB"
                                                type="button"
                                                role="tab"
                                                aria-controls="TechSpecB"
                                                aria-selected="false"
                                            >
                                                <div className="variant-tab-btn">
                                                    <span>{technicalSpecs.variants.variantB}</span>
                                                    <Image src="/img/variant-icon.png" alt="Variant Icon" width={50} height={50} />
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="TechSpecA" role="tabpanel" aria-labelledby="TechSpecA-tab">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="tech-spec-txt">
                                            {Object.entries(technicalSpecs.specs)
                                                .slice(0, 5)
                                                .map(([key, spec]) => (
                                                    <ul key={key}>
                                                        <li>
                                                            <h4>{spec.label}</h4>
                                                        </li>
                                                        <li>
                                                            <h5>{spec.value}</h5>
                                                        </li>
                                                    </ul>
                                                ))}
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="tech-spec-txt">
                                            {Object.entries(technicalSpecs.specs)
                                                .slice(5, 10)
                                                .map(([key, spec]) => (
                                                    <ul key={key}>
                                                        <li>
                                                            <h4>{spec.label}</h4>
                                                        </li>
                                                        <li>
                                                            <h5>{spec.value}</h5>
                                                        </li>
                                                    </ul>
                                                ))}
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="tech-spec-img">
                                            <Image
                                                src={technicalSpecs.images.variantA || "/placeholder.svg"}
                                                alt={`${sensorName} Technical Specifications`}
                                                width={300}
                                                height={200}
                                            />
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        Buy Now <Image src="/img/tech-btn-icon.png" alt="Buy Now Icon" width={20} height={20} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <Image
                                                            src="/img/data-document-sheet-icon.png"
                                                            alt="Data Sheet Icon"
                                                            width={20}
                                                            height={20}
                                                        />{" "}
                                                        Data Sheet{" "}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="TechSpecB" role="tabpanel" aria-labelledby="TechSpecB-tab">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="tech-spec-txt">
                                            {Object.entries(technicalSpecs.specs)
                                                .slice(0, 5)
                                                .map(([key, spec]) => (
                                                    <ul key={key}>
                                                        <li>
                                                            <h4>{spec.label}</h4>
                                                        </li>
                                                        <li>
                                                            <h5>{spec.value}</h5>
                                                        </li>
                                                    </ul>
                                                ))}
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="tech-spec-txt">
                                            {Object.entries(technicalSpecs.specs)
                                                .slice(5, 10)
                                                .map(([key, spec]) => (
                                                    <ul key={key}>
                                                        <li>
                                                            <h4>{spec.label}</h4>
                                                        </li>
                                                        <li>
                                                            <h5>{spec.value}</h5>
                                                        </li>
                                                    </ul>
                                                ))}
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="tech-spec-img">
                                            <Image
                                                src={technicalSpecs.images.variantB || "/placeholder.svg"}
                                                alt={`${sensorName} Technical Specifications Variant B`}
                                                width={300}
                                                height={200}
                                            />
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        Buy Now <Image src="/img/tech-btn-icon.png" alt="Buy Now Icon" width={20} height={20} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <Image
                                                            src="/img/data-document-sheet-icon.png"
                                                            alt="Data Sheet Icon"
                                                            width={20}
                                                            height={20}
                                                        />{" "}
                                                        Data Sheet{" "}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sensor Gallery Section */}
                <section className="sensor-gallery-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sensor-gallery-heading">
                                    <h2>
                                        {gallery.title} <span>{gallery.titleHighlight}</span>
                                    </h2>
                                    <p>{gallery.description}</p>
                                </div>
                                <div className="sensor-gallery-img">
                                    <ProductCarousel responsive={galleryResponsive} className="sensor-slider">
                                        {gallery.images.map((image, index) => (
                                            <div key={index}>
                                                <div className="sensor-img-box">
                                                    <Image
                                                        src={image || "/placeholder.svg"}
                                                        alt={`${sensorName} Gallery ${index + 1}`}
                                                        width={600}
                                                        height={400}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </ProductCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="airqulality_contact_section inner_container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="contact-heading">
                                    <h2>{contact.title}</h2>
                                    <p>{contact.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContactForm pageName={pageName} />
                </section>

                {/* Related Products Section */}
                <section className="you-may-also">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="you-may-also-heading">
                                    <h2>{relatedProducts.title}</h2>
                                    <ul>
                                        {relatedProducts.items.map((product) => (
                                            <li key={product.id}>
                                                <Link href={product.link}>
                                                    <Image src={product.image || "/placeholder.svg"} alt={product.alt} width={80} height={60} />
                                                    <span>
                                                        {product.name}{" "}
                                                        <Image src="/img/tech-btn-icon.png" alt="Arrow Icon" width={20} height={20} />
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
