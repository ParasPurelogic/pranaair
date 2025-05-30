"use client"
import { useState } from "react"
import Image from "next/image"

export default function TechSpecTabs({
    vtolSpecs = [],
    quadSpecs = [],
    tabLabels = {
        vtol: "Prana VTOL",
        quad: "Prana Quad",
    },
    brochureText = "Brochure",
}) {
    const [activePartTab, setActivePartTab] = useState("Parts & Label")

    return (
        <section className="tech-spec">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="parts-label-heading">
                            <h2>
                                <span>Technical</span> Specifications
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="nav nav-tabs tech-tab">
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activePartTab === "Parts & Label" ? "active" : ""}`}
                                    onClick={() => setActivePartTab("Parts & Label")}
                                    href="#!"
                                >
                                    {tabLabels.vtol}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activePartTab === "Disassambley" ? "active" : ""}`}
                                    onClick={() => setActivePartTab("Disassambley")}
                                    href="#!"
                                >
                                    {tabLabels.quad}
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <a className="brochure-btn" href="#">
                            <Image src="/img/btn-icon.png" alt="Logo" width={200} height={100} /> Brochure
                        </a>
                    </div>
                    <div className="tab-content">
                        <div className={`tab-pane ${activePartTab === "Parts & Label" ? "show active fade-in" : ""}`}>
                            <div className="row texh-spec-box">
                                <div className="col-md-12">
                                    {vtolSpecs &&
                                        vtolSpecs.slice(0, 8).map((spec, index) => (
                                            <div key={index} className={`tech-spec-list ${index % 2 === 1 ? "bg" : ""}`}>
                                                <ul>
                                                    <li>
                                                        <h5>{spec.title}</h5>
                                                    </li>
                                                    <li>{spec.value}</li>
                                                </ul>
                                            </div>
                                        ))}
                                </div>
                                <div className="col-md-6">
                                    {vtolSpecs &&
                                        vtolSpecs.slice(8).map((spec, index) => (
                                            <div key={index} className={`tech-spec-list ${index % 2 === 1 ? "bg" : ""}`}>
                                                <ul>
                                                    <li>
                                                        <h5>{spec.title}</h5>
                                                    </li>
                                                    <li>{spec.value}</li>
                                                </ul>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane ${activePartTab === "Disassambley" ? "show active fade-in" : ""}`}>
                            <div className="row texh-spec-box">
                                <div className="col-md-6">
                                    {quadSpecs &&
                                        quadSpecs.slice(0, 8).map((spec, index) => (
                                            <div key={index} className={`tech-spec-list ${index % 2 === 1 ? "bg" : ""}`}>
                                                <ul>
                                                    <li>
                                                        <h5>{spec.title}</h5>
                                                    </li>
                                                    <li>{spec.value}</li>
                                                </ul>
                                            </div>
                                        ))}
                                </div>
                                <div className="col-md-6">
                                    {quadSpecs &&
                                        quadSpecs.slice(8).map((spec, index) => (
                                            <div key={index} className={`tech-spec-list ${index % 2 === 1 ? "bg" : ""}`}>
                                                <ul>
                                                    <li>
                                                        <h5>{spec.title}</h5>
                                                    </li>
                                                    <li>{spec.value}</li>
                                                </ul>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <div className="roch-icon">
                            <Image src="/img/rohs.png" alt="rohs" width={50} height={50} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
