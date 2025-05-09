"use client"

import { useEffect } from "react"

export default function VideoPopup() {
    useEffect(() => {
        // Video Popup Functionality
        const playButton = document.getElementById("playButton")
        const videoPopup = document.getElementById("videoPopup")
        const closeBtn = document.getElementById("closeBtn")
        const videoFrame = document.getElementById("videoFrame")

        // YouTube video URL
        const videoUrl = "https://www.youtube.com/embed/vKTDgUu1K_E?autoplay=1&mute=1"

        // Show the popup and play the video
        if (playButton) {
            playButton.addEventListener("click", () => {
                if (videoPopup) {
                    videoPopup.style.display = "flex"
                }
                if (videoFrame) {
                    videoFrame.src = videoUrl
                }
            })
        }

        // Close the popup
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                if (videoPopup) {
                    videoPopup.style.display = "none"
                }
                if (videoFrame) {
                    videoFrame.src = ""
                }
            })
        }

        // Close the popup if clicked outside the video content
        if (videoPopup) {
            window.addEventListener("click", (event) => {
                if (event.target === videoPopup) {
                    videoPopup.style.display = "none"
                    if (videoFrame) {
                        videoFrame.src = ""
                    }
                }
            })
        }

        // Cleanup event listeners on unmount
        return () => {
            if (playButton) {
                playButton.removeEventListener("click", () => { })
            }
            if (closeBtn) {
                closeBtn.removeEventListener("click", () => { })
            }
            if (videoPopup) {
                window.removeEventListener("click", () => { })
            }
        }
    }, [])

    return (
        <div className="video-container">
            <button id="playButton">
                <img src="https://www.pranaair.com/wp-content/uploads/2025/01/play-button.png" alt="" />
            </button>

            <div id="videoPopup" className="popup">
                <div className="popup-content">
                    <span id="closeBtn" className="close">
                        &times;
                    </span>
                    <iframe
                        id="videoFrame"
                        width="650"
                        height="400"
                        src=""
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="wrapper">
                <div className="video-main">
                    <div className="promo-video">
                        <div className="waves-block">
                            <div className="waves wave-1 work"></div>
                            <div className="waves wave-2 work"></div>
                            <div className="waves wave-3 work"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
