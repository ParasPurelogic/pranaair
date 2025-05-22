"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { throttle } from "./throttle"
import { ChevronDownIcon, ChevronUpIcon } from "./chevron-icons"

export default function DroneTabsSlider({
    vtolSliderImages = [],
    quadSliderImages = [],
    vtolContent = {
        title: "Prana VTOL",
        description: "",
        specs: [],
    },
    quadContent = {
        title: "Prana Quad",
        description: "",
        specs: [],
    },
    buttonText = {
        requestQuote: "Request a quote",
        brochure: "Brochure",
    },
}) {
    const [activeTab, setActiveTab] = useState("vtol")
    const [activeSlide, setActiveSlide] = useState(0)
    const sectionRef = useRef(null)
    const tabsRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current && tabsRef.current) {
                const sectionRect = sectionRef.current.getBoundingClientRect()
                const sectionTop = sectionRect.top
                const sectionBottom = sectionRect.bottom
                const tabsHeight = tabsRef.current.offsetHeight

                if (sectionTop <= 0 && sectionBottom > tabsHeight) {
                    tabsRef.current.classList.add("sticky-tabs")
                } else {
                    tabsRef.current.classList.remove("sticky-tabs")
                }
            }
        }
        const throttledScroll = throttle(handleScroll, 100)
        window.addEventListener("scroll", throttledScroll)
        return () => window.removeEventListener("scroll", throttledScroll)
    }, [])

    const handleTabClick = (tab) => {
        setActiveTab(tab)
        setActiveSlide(0) // Reset active slide when changing tabs
    }

    const handleSlideClick = (index) => {
        setActiveSlide(index)
    }

    const handlePrevSlide = () => {
        const images = activeTab === "vtol" ? vtolSliderImages : quadSliderImages
        setActiveSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const handleNextSlide = () => {
        const images = activeTab === "vtol" ? vtolSliderImages : quadSliderImages
        setActiveSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    const renderSpecCards = (specs) => {
        if (!specs || specs.length === 0) return null

        // Group specs into rows
        const firstRow = specs.slice(0, 6)
        const secondRow = specs.slice(6)

        return (
            <div className="specs-container">
                <div className="specs-row">{firstRow.map((spec, index) => renderSpecCard(spec, index))}</div>
                {secondRow.length > 0 && (
                    <div className="specs-row">{secondRow.map((spec, index) => renderSpecCard(spec, index))}</div>
                )}
            </div>
        )
    }

    const renderSpecCard = (spec, index) => {
        switch (spec.type) {
            case "text":
                return (
                    <div key={index} className="spec-card spec-card-text">
                        <div className="spec-title">{spec.title}</div>
                    </div>
                )
            case "value":
                return (
                    <div key={index} className="spec-card spec-card-value">
                        {spec.title && <div className="spec-title">{spec.title}</div>}
                        <div className="spec-value">
                            {spec.value}
                            <span className="spec-unit">{spec.unit}</span>
                        </div>
                        {!spec.title && <div className="spec-title">{spec.title}</div>}
                    </div>
                )
            case "description":
                return (
                    <div key={index} className="spec-card spec-card-description">
                        <div className="spec-title">{spec.title}</div>
                        <div className="spec-description">{spec.description}</div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className="category-tabs" ref={tabsRef}>
            <button className={`category-tab ${activeTab === "vtol" ? "active" : ""}`} onClick={() => handleTabClick("vtol")}>
                {vtolContent.title}
            </button>
            <button className={`category-tab ${activeTab === "quad" ? "active" : ""}`} onClick={() => handleTabClick("quad")}>
                {quadContent.title}
            </button>

            <div className="drone-details" ref={sectionRef}>
                {activeTab === "vtol" ? (
                    <>
                        <div className="drone-title-overlay">{vtolContent.title}</div>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="drone-info">
                                    <div className="drone-description">
                                        <p>{vtolContent.description}</p>
                                    </div>

                                    <div className="drone-buttons">
                                        <button className="btn-request">{buttonText.requestQuote}</button>
                                        <button className="btn-brochure">
                                            <Image src="/img/btn-icon.png" alt="Logo" width={23} height={23} />
                                            {buttonText.brochure}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="drone-image-container">
                                    <div className="drone-image">
                                        <img
                                            src={vtolSliderImages[activeSlide] || "/placeholder.svg"}
                                            alt="Prana VTOL Air Quality Drone"
                                            className="img-fluid"
                                        />
                                    </div>

                                    {/* Slider Card */}
                                    <div className="slider-card">
                                        <button className="slider-arrow" onClick={handlePrevSlide}>
                                            <ChevronUpIcon />
                                        </button>

                                        <div className="slider-thumbnails">
                                            {vtolSliderImages.map((image, index) => (
                                                <div
                                                    key={index}
                                                    className={`slider-thumbnail ${activeSlide === index ? "active" : ""}`}
                                                    onClick={() => handleSlideClick(index)}
                                                >
                                                    <img src={image || "/placeholder.svg"} alt={`VTOL view ${index + 1}`} />
                                                </div>
                                            ))}
                                        </div>

                                        <button className="slider-arrow" onClick={handleNextSlide}>
                                            <ChevronDownIcon />
                                        </button>
                                    </div>

                                    {/* Mobile Navigation Dots */}
                                    <div className="navigation-dots">
                                        {vtolSliderImages.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`nav-dot ${activeSlide === index ? "active" : ""}`}
                                                onClick={() => handleSlideClick(index)}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Spec Cards */}
                        {renderSpecCards(vtolContent.specs)}
                    </>
                ) : (
                    <div className="quad-drone-content">
                        <div className="drone-title-overlay">{quadContent.title}</div>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="drone-info">
                                    <div className="drone-description">
                                        <p>{quadContent.description}</p>
                                    </div>

                                    <div className="drone-buttons">
                                        <button className="btn-request">{buttonText.requestQuote}</button>
                                        <button className="btn-brochure">
                                            <span className="circle"></span>
                                            {buttonText.brochure}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="drone-image-container">
                                    <div className="drone-image">
                                        <img
                                            src={quadSliderImages[activeSlide] || "/placeholder.svg"}
                                            alt="Prana QUAD Drone"
                                            className="img-fluid"
                                        />
                                    </div>

                                    {/* Slider Card */}
                                    <div className="slider-card">
                                        <button className="slider-arrow" onClick={handlePrevSlide}>
                                            <ChevronUpIcon />
                                        </button>

                                        <div className="slider-thumbnails">
                                            {quadSliderImages.map((image, index) => (
                                                <div
                                                    key={index}
                                                    className={`slider-thumbnail ${activeSlide === index ? "active" : ""}`}
                                                    onClick={() => handleSlideClick(index)}
                                                >
                                                    <img src={image || "/placeholder.svg"} alt={`QUAD view ${index + 1}`} />
                                                </div>
                                            ))}
                                        </div>

                                        <button className="slider-arrow" onClick={handleNextSlide}>
                                            <ChevronDownIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Spec Cards */}
                        {renderSpecCards(quadContent.specs)}
                    </div>
                )}
            </div>
        </div>
    )
}
