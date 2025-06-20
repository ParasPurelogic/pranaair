"use client"

import { useState } from "react"
import Sidebar from "./sidebar"
import OrdersSection from "./orders-section"
import AddressesSection from "./addresses-section"
import ProfileSection from "./profile-section"

function renderSection(activeSection) {
    switch (activeSection) {
        case "orders":
            return <OrdersSection />
        case "addresses":
            return <AddressesSection />
        case "profile":
            return <ProfileSection />
        default:
            return <OrdersSection />
    }
}

export default function DashboardLayout() {
    const [activeSection, setActiveSection] = useState("orders")
    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="d-flex flex-grow-1">
                <Sidebar activeSection={activeSection} onSelectSection={setActiveSection} />
                <main className="flex-grow-1 bg-light">{renderSection(activeSection)}</main>
            </div>
        </div>
    )
}
