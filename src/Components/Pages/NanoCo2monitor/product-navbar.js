"use client"

import { useEffect, useRef } from "react"

export default function ProductNavbar() {
    const navbarRef = useRef(null)
    const tabsContainerRef = useRef(null)

    // Add scroll event listener for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            const navbar = navbarRef.current
            if (navbar) {
                if (window.scrollY > 0) {
                    navbar.classList.add("sticky")
                } else {
                    navbar.classList.remove("sticky")
                }
            }
        }

        window.addEventListener("scroll", handleScroll)

        // Clean up event listener
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // Handle horizontal scrolling for tabs on mobile
    useEffect(() => {
        const tabsContainer = tabsContainerRef.current
        if (tabsContainer) {
            const handleWheel = (e) => {
                if (window.innerWidth < 768) {
                    e.preventDefault()
                    tabsContainer.scrollLeft += e.deltaY
                }
            }

            tabsContainer.addEventListener("wheel", handleWheel, { passive: false })

            return () => {
                tabsContainer.removeEventListener("wheel", handleWheel)
            }
        }
    }, [])

    // Function to scroll to section when tab is clicked
    const scrollToTabSection = (sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
            // Add offset for the sticky header
            const yOffset = -70
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset

            window.scrollTo({
                top: y,
                behavior: "smooth",
            })
        }
    }

    return (
        <div className="product-navbar" ref={navbarRef}>
            <div className="container">
                <div className="nav-tabs" ref={tabsContainerRef}>
                    <button
                        className="nav-tab"
                        onClick={() => scrollToTabSection("Overview")}
                        data-bs-toggle="tab"
                        data-bs-target="#Overview"
                    >
                        Overview
                    </button>
                    <button
                        className="nav-tab"
                        onClick={() => scrollToTabSection("Features")}
                        data-bs-toggle="tab"
                        data-bs-target="#Features"
                    >
                        Features
                    </button>
                    <button
                        className="nav-tab"
                        onClick={() => scrollToTabSection("Functions")}
                        data-bs-toggle="tab"
                        data-bs-target="#Functions"
                    >
                        Functions
                    </button>
                    <button
                        className="nav-tab"
                        onClick={() => scrollToTabSection("Tech-Specs")}
                        data-bs-toggle="tab"
                        data-bs-target="#Tech-Specs"
                    >
                        Tech-Specs
                    </button>
                    <button
                        className="nav-tab"
                        onClick={() => scrollToTabSection("Compare")}
                        data-bs-toggle="tab"
                        data-bs-target="#Compare"
                    >
                        Compare
                    </button>
                    <button
                        className="nav-tab"
                        onClick={() => scrollToTabSection("FAQs")}
                        data-bs-toggle="tab"
                        data-bs-target="#FAQs"
                    >
                        FAQs
                    </button>
                </div>
            </div>
        </div>
    )
}
