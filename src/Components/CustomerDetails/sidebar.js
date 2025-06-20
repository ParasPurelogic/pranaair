"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTachometerAlt,
    faShoppingBag,
    faMapMarkerAlt,
    faCreditCard,
    faUser,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons"
import logout from "@/actions/logout"

export default function Sidebar({ activeSection, onSelectSection }) {
    const navItems = [
        { name: "Dashboard", icon: faTachometerAlt, section: "dashboard" },
        { name: "Orders", icon: faShoppingBag, section: "orders" },
        { name: "Addresses", icon: faMapMarkerAlt, section: "addresses" },
        { name: "Payment Methods", icon: faCreditCard, section: "payment-methods" },
        { name: "Profile", icon: faUser, section: "profile" },
    ]

    return (
        <div
            className="d-flex flex-column p-3 bg-white border-end shadow-sm"
            style={{ width: "250px", minHeight: "calc(100vh - 72px)" }}
        >
            <div className="text-center mb-4">
                <div
                    className="rounded-circle bg-light d-inline-flex justify-content-center align-items-center mb-2"
                    style={{ width: "80px", height: "80px", fontSize: "2.5rem", fontWeight: "bold", color: "#6c757d" }}
                >
                    RU
                </div>
                <h6 className="mb-0">Regular User</h6>
                <small className="text-muted">user@pranaair.com</small>
            </div>
            <ul className="nav nav-pills flex-column mb-auto">
                {navItems.map((item) => (
                    <li className="nav-item" key={item.section}>
                        <button
                            className={`nav-link w-100 text-start d-flex align-items-center ${activeSection === item.section ? "active bg-primary text-white" : "text-dark"}`}
                            onClick={() => onSelectSection(item.section)}
                            style={{ borderRadius: "0.375rem", marginBottom: "0.25rem" }}
                        >
                            <FontAwesomeIcon icon={item.icon} className="me-2" />
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
            <hr />
            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <button className="nav-link text-dark d-flex align-items-center" onClick={logout}>
                        <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    )
}
