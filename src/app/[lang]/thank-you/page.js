import "./style.css"
export default function ThankYouPage() {
    return (
        <div className="thank-you-container">
            <div className="thank-you-sec">
                <div className="thank-you-box">
                    {/* Logo in top right */}
                    <div className="logo-thankyou">
                        <img src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-logo.webp" alt="Prana Air Logo" />
                    </div>

                    {/* Main content */}
                    <div className="thank-you-content">
                        {/* Checkmark icon */}
                        <div className="success-icon">
                            <div className="shield-icon">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 2L3 7V12C3 16.55 6.84 20.74 9.91 21.74C11.04 22.08 12.96 22.08 14.09 21.74C17.16 20.74 21 16.55 21 12V7L12 2Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M9 12L11 14L15 10"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Thank you message */}
                        <h1>
                            <strong>Thank You</strong> for Your Submission!
                        </h1>

                        <p>
                            We have received your information and our team will be in touch with you shortly. In the meantime feel free
                            to explore more of our website.
                        </p>

                        {/* Action buttons */}
                        <ul className="action-buttons">
                            <li>
                                <a className="home-btn" href="https://www.pranaair.com/">
                                    Go Back to Homepage
                                </a>
                            </li>
                            <li>
                                <a className="monitor-btn" href="/?page_id=18093">
                                    Explore Our Air Quality Monitors
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
