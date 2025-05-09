"use client"

import { useState, useEffect } from "react"

export default function StickyNav() {
    const [isSticky, setIsSticky] = useState(false)
    const [activeNavItem, setActiveNavItem] = useState("overview")

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleNavClick = (id) => {
        setActiveNavItem(id)
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className={`container-fluid ${isSticky ? "sticky" : ""}`} id="new-header">
            <ul id="menu">
                <li>
                    <a
                        href="#overview"
                        className={activeNavItem === "overview" ? "active" : ""}
                        onClick={() => handleNavClick("overview")}
                    >
                        Overview
                    </a>
                </li>
                <li>
                    <a
                        href="#features"
                        className={activeNavItem === "features" ? "active" : ""}
                        onClick={() => handleNavClick("features")}
                    >
                        Features
                    </a>
                </li>
                <li>
                    <a
                        href="#Keyfunctions"
                        className={activeNavItem === "Keyfunctions" ? "active" : ""}
                        onClick={() => handleNavClick("Keyfunctions")}
                    >
                        Functions
                    </a>
                </li>
                <li>
                    <a href="#spec" className={activeNavItem === "spec" ? "active" : ""} onClick={() => handleNavClick("spec")}>
                        Tech-Specs
                    </a>
                </li>
                <li>
                    <a
                        href="#compare"
                        className={activeNavItem === "compare" ? "active" : ""}
                        onClick={() => handleNavClick("compare")}
                    >
                        Compare
                    </a>
                </li>
            </ul>
        </div>
    )
}
