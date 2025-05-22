"use client"

import { useEffect } from "react"

export default function VideoOverlay() {
    useEffect(() => {
        // Initialize video overlay functionality
        const playVideo = document.getElementById("play-video")
        const playVideo2 = document.getElementById("play-video2")
        const videoOverlay = document.getElementById("video-overlay")
        const videoOverlay2 = document.getElementById("video-overlay2")
        const videoOverlayClose = document.querySelectorAll(".video-overlay-close")

        if (playVideo) {
            playVideo.addEventListener("click", (e) => {
                e.preventDefault()
                videoOverlay.classList.add("open")
                videoOverlay.innerHTML +=
                    '<video controls autoplay> <source src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-outdoor-air-purifier-filtration.mp4" type="video/mp4"></video>'
            })
        }

        if (playVideo2) {
            playVideo2.addEventListener("click", (e) => {
                e.preventDefault()
                videoOverlay2.classList.add("open")
                videoOverlay2.innerHTML +=
                    '<video controls autoplay> <source src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-outdoor-air-purifier.mp4" type="video/mp4"></video>'
            })
        }

        if (videoOverlayClose) {
            videoOverlayClose.forEach((close) => {
                close.addEventListener("click", (e) => {
                    e.preventDefault()
                    closeVideo()
                })
            })
        }

        document.addEventListener("keyup", (e) => {
            if (e.key === "Escape") {
                closeVideo()
            }
        })

        function closeVideo() {
            const openOverlays = document.querySelectorAll(".video-overlay.open")
            openOverlays.forEach((overlay) => {
                overlay.classList.remove("open")
                const videos = overlay.querySelectorAll("video")
                videos.forEach((video) => {
                    video.remove()
                })
            })
        }

        // Add click event for video overlays
        const overlays = document.querySelectorAll(".video-overlay")
        overlays.forEach((overlay) => {
            overlay.addEventListener("click", (e) => {
                if (e.target === overlay) {
                    closeVideo()
                }
            })
        })

        return () => {
            // Cleanup event listeners
            if (playVideo) {
                playVideo.removeEventListener("click", () => { })
            }
            if (playVideo2) {
                playVideo2.removeEventListener("click", () => { })
            }
            if (videoOverlayClose) {
                videoOverlayClose.forEach((close) => {
                    close.removeEventListener("click", () => { })
                })
            }
            document.removeEventListener("keyup", () => { })
        }
    }, [])

    return null
}
