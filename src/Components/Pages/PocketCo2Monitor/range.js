"use client"
import Image from "next/image"
import "bootstrap/dist/css/bootstrap.min.css"

export default function RangeMonitorPage({ rangeData = [] }) {
    // Custom tab handlers without React state
    const handleRangeHover = (event) => {
        document.querySelectorAll(".range_cntr li").forEach((item) => {
            item.classList.remove("active_range")
        })
        event.currentTarget.classList.add("active_range")
    }

    return (
        <section className="range_section">
            <div className="range_cntr">
                <ul>
                    {rangeData.map((range) => (
                        <li
                            key={range.id}
                            className={`${range.id} ${range.isActive ? "active_range" : ""}`}
                            onMouseEnter={handleRangeHover}
                        >
                            <span className="range_text">{range.name}</span>
                            <div className="range_color"></div>
                            <small className="range_no">{range.range}</small>
                            <div className="hover_range_box">
                                <Image
                                    src={range.image.src || "/placeholder.svg"}
                                    width={range.image.width}
                                    height={range.image.height}
                                    alt={range.image.alt}
                                />
                                <div className="tooltip_aqi">
                                    {range.id === "hazaedous_range" ? (
                                        <span style={{ fontSize: "12pt" }}>{range.tooltip}</span>
                                    ) : (
                                        range.tooltip
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
