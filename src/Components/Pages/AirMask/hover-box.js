"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function HoverBox({ image, link, title }) {
    const boxRef = useRef(null)

    useEffect(() => {
        const box = boxRef.current
        if (!box) return

        const hoverBody = box.querySelector(".hover-body")

        const handleMouseEnter = () => {
            if (hoverBody) {
                hoverBody.style.visibility = "visible"
                hoverBody.style.opacity = "1"
            }
        }

        const handleMouseLeave = () => {
            if (hoverBody) {
                hoverBody.style.visibility = "hidden"
                hoverBody.style.opacity = "0"
            }
        }

        box.addEventListener("mouseenter", handleMouseEnter)
        box.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            box.removeEventListener("mouseenter", handleMouseEnter)
            box.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    return (
        <div className="hover-box animateme scrollme" ref={boxRef}>
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} width={image.width} height={image.height} />
            <div className="hover-body">
                <a title={title} href={link} data-rel="lightbox-gallery-1"></a>
            </div>
        </div>
    )
}
