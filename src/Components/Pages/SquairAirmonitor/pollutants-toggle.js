"use client"
import { useState } from "react"
import ParticlesComponent from "./particles-component"

export default function PollutantsToggle() {
    const [showPollutants, setShowPollutants] = useState(false)

    // Function to toggle pollutants visibility
    const togglePollutants = () => {
        setShowPollutants(!showPollutants)
    }

    return (
        <div className="pollutionParticlesHoverEffect">
            <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/indoor-air-pollutants.jpeg"
                alt="invisible indoor air pollutants"
                width="100%"
            />
            <input
                type="button"
                name="type"
                id="pollutedeffectBtn"
                value={showPollutants ? "Hide the invisible" : "See the invisible"}
                onClick={togglePollutants}
            />
            <div id="pollutedOnHover" style={{ opacity: showPollutants ? 1 : 0 }}>
                <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/squair-polution-paticle-name.png"
                    alt="indoor air pollutants"
                    width="100%"
                    className="motion-css"
                />
                <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/invisible-air-pollutants-of-indoor-pollution.jpeg"
                    alt="invisible air pollutants of indoor pollution"
                    width="100%"
                />
                <div id="particles-js"></div>
                {/* Include the ParticlesComponent when pollutants are shown */}
                {showPollutants && <ParticlesComponent />}
            </div>
        </div>
    )
}
