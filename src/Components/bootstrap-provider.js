"use client"

import { useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

export default function BootstrapProvider({ children }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js")
            .then(() => {
                console.log("Bootstrap JS loaded")
            })
            .catch((err) => console.error("Error loading Bootstrap JS:", err))
    }, [])

    return <>{children}</>
}
