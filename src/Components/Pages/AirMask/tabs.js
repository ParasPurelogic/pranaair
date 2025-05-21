"use client"

import { useState } from "react"

export function Tabs({ items }) {
    const [activeTab, setActiveTab] = useState(items[0]?.id || "")

    return (
        <div className="tabs-container">
            <ul className="nav nav-tabs" role="tablist">
                {items.map((item) => (
                    <li key={item.id} className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${activeTab === item.id ? "active" : ""}`}
                            id={`${item.id}-tab`}
                            data-bs-toggle="tab"
                            data-bs-target={`#${item.id}`}
                            type="button"
                            role="tab"
                            aria-controls={item.id}
                            aria-selected={activeTab === item.id}
                            onClick={() => setActiveTab(item.id)}
                        >
                            {item.title}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="tab-content">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`tab-pane fade ${activeTab === item.id ? "show active" : ""}`}
                        id={item.id}
                        role="tabpanel"
                        aria-labelledby={`${item.id}-tab`}
                    >
                        {item.content}
                    </div>
                ))}
            </div>
        </div>
    )
}
