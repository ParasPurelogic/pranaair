"use client"

import { useEffect } from "react"

export default function VideoPopup({ videoUrl }) {
    useEffect(() => {
        const playButton = document.getElementById("playButton")
        const videoPopup = document.getElementById("videoPopup")
        const closeBtn = document.getElementById("closeBtn")
        const videoFrame = document.getElementById("videoFrame")

        const fullVideoUrl = `${videoUrl}?autoplay=1&mute=1`

        const openPopup = () => {
            if (videoPopup) videoPopup.style.display = "flex"
            if (videoFrame) videoFrame.src = fullVideoUrl
            if (closeBtn) closeBtn.style.display = "block"
        }

        const closePopup = () => {
            if (videoPopup) videoPopup.style.display = "none"
            if (videoFrame) videoFrame.src = ""
            if (closeBtn) closeBtn.style.display = "none"
        }

        if (playButton) playButton.addEventListener("click", openPopup)
        if (closeBtn) closeBtn.addEventListener("click", closePopup)
        if (videoPopup) {
            window.addEventListener("click", (event) => {
                if (event.target === videoPopup) {
                    closePopup()
                }
            })
        }

        return () => {
            if (playButton) playButton.removeEventListener("click", openPopup)
            if (closeBtn) closeBtn.removeEventListener("click", closePopup)
            if (videoPopup) window.removeEventListener("click", closePopup)
        }
    }, [videoUrl])


    return (
        <div className="video-container">
            <button id="playButton">
                <img src="https://www.pranaair.com/wp-content/uploads/2025/01/play-button.png" alt="Play" />
            </button>

            <div id="videoPopup" className="popup">
                <div className="popup-content">
                    <span id="closeBtn" className="close">&times;</span>
                    <iframe
                        id="videoFrame"
                        width="650"
                        height="400"
                        src=""
                        title="YouTube video player"
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
