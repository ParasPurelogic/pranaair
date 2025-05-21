"use client"

import { useState } from "react"

export default function VideoPlayer({ thumbnailSrc, videoSrc, iconSrc }) {
    const [isPlaying, setIsPlaying] = useState(false)

    const playVideo = () => {
        const videoOverlay = document.getElementById("video-overlay")
        if (videoOverlay) {
            videoOverlay.classList.add("open")
            videoOverlay.innerHTML = `<a class="video-overlay-close">&times;</a><video controls autoplay><source src="${videoSrc}" type="video/mp4"></video>`

            const closeButton = videoOverlay.querySelector(".video-overlay-close")
            if (closeButton) {
                closeButton.addEventListener("click", closeVideo)
            }

            setIsPlaying(true)
        }
    }

    const closeVideo = () => {
        const videoOverlay = document.getElementById("video-overlay")
        if (videoOverlay) {
            videoOverlay.classList.remove("open")
            videoOverlay.innerHTML = ""
            setIsPlaying(false)
        }
    }

    return (
        <div style={{ position: "relative" }}>
            <img
                src={thumbnailSrc || "/placeholder.svg"}
                alt="Video Thumbnail"
                className={iconSrc ? "use-videop" : "video-thumnail-img"}
            />
            {iconSrc ? (
                <div className="video-play-button" onClick={playVideo}>
                    <img src={iconSrc || "/placeholder.svg"} alt="Play Button" />
                </div>
            ) : (
                <a
                    id="play-video"
                    className="video-play-button"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault()
                        playVideo()
                    }}
                >
                    <span></span>
                </a>
            )}
        </div>
    )
}
