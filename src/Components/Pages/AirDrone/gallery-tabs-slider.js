"use client"
import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "./chevron-icons"

export default function GalleryTabsSlider({ vtolGalleryImages, quadGalleryImages, tabLabels }) {
    const [activeTab, setActiveTab] = useState("vtol")
    const [activeSlide, setActiveSlide] = useState(0)

    const handleTabClick = (tab) => {
        setActiveTab(tab)
        setActiveSlide(0) // Reset active slide when changing tabs
    }

    const handleSlideClick = (index) => {
        setActiveSlide(index)
    }

    const handlePrevSlide = () => {
        const images = activeTab === "vtol" ? vtolGalleryImages : quadGalleryImages
        setActiveSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const handleNextSlide = () => {
        const images = activeTab === "vtol" ? vtolGalleryImages : quadGalleryImages
        setActiveSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className="category-tabs gallery-tab">
            <div className="category-inner-tab">
                <button className={`category-tab ${activeTab === "vtol" ? "active" : ""}`} onClick={() => handleTabClick("vtol")}>
                    {tabLabels.vtol}
                </button>
                <button className={`category-tab ${activeTab === "quad" ? "active" : ""}`} onClick={() => handleTabClick("quad")}>
                    {tabLabels.quad}
                </button>
            </div>
            <div className="drone-details">
                {activeTab === "vtol" ? (
                    <>
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="gallery-image-container">
                                    <div className="drone-sensor-image">
                                        <img
                                            src={vtolGalleryImages[activeSlide] || "/placeholder.svg"}
                                            alt="Prana VTOL Air Quality Drone"
                                            className="img-fluid"
                                        />
                                    </div>

                                    {/* Slider Card */}
                                    <div className="gallery-slider-card">
                                        <button className="slider-arrow" onClick={handlePrevSlide}>
                                            <ChevronUpIcon />
                                        </button>

                                        <div className="slider-thumbnails gallery-thumbnail">
                                            {vtolGalleryImages.map((image, index) => (
                                                <div
                                                    key={index}
                                                    className={`slider-thumbnail ${activeSlide === index ? "active fade-in" : ""}`}
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
                                        {vtolGalleryImages.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`nav-dot ${activeSlide === index ? "active fade-in" : ""}`}
                                                onClick={() => handleSlideClick(index)}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="quad-drone-content">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="gallery-image-container">
                                    <div className="drone-sensor-image">
                                        <img
                                            src={quadGalleryImages[activeSlide] || "/placeholder.svg"}
                                            alt="Prana QUAD Drone"
                                            className="img-fluid"
                                        />
                                    </div>

                                    {/* Slider Card */}
                                    <div className="gallery-slider-card">
                                        <button className="slider-arrow" onClick={handlePrevSlide}>
                                            <ChevronUpIcon />
                                        </button>

                                        <div className="slider-thumbnails">
                                            {quadGalleryImages.map((image, index) => (
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
                    </div>
                )}
            </div>
        </div>
    )
}
