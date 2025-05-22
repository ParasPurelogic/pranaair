"use client"
import { useState } from "react"

export default function BootstrapTabs({ tabs, defaultActiveTab = 0 }) {
    const [activeTab, setActiveTab] = useState(defaultActiveTab)

    return (
        <div className="tabs-container">
            <div className="tabs-header">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab-button ${activeTab === index ? "active" : ""}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </div>
                ))}
            </div>
            <div className="tabs-content">{tabs[activeTab].content}</div>
        </div>
    )
}
