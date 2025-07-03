"use client";
import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomDragCursorCarousel = ({
    children,
    responsive,
    showDots = false,
    arrows = true,
}) => {
    const [isHovering, setIsHovering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [cursorText, setCursorText] = useState("DRAG");

    const nextRef = useRef(null);
    const prevRef = useRef(null);

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });

        // Check if hovering over NEXT or PREV arrows
        if (nextRef.current && nextRef.current.contains(e.target)) {
            setCursorText("NEXT");
        } else if (prevRef.current && prevRef.current.contains(e.target)) {
            setCursorText("PREV");
        } else {
            setCursorText("DRAG");
        }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
        setIsHovering(false);
        setCursorText("DRAG");
    };

    // Custom arrows
    const CustomLeftArrow = ({ onClick }) => (
        <div ref={prevRef} className="custom-arrow left" onClick={onClick}>
            &#8592;
        </div>
    );

    const CustomRightArrow = ({ onClick }) => (
        <div ref={nextRef} className="custom-arrow right" onClick={onClick}>
            &#8594;
        </div>
    );

    return (
        <div
            style={{ position: "relative" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovering && (
                <div
                    style={{
                        position: "fixed",
                        top: mousePos.y,
                        left: mousePos.x,
                        transform: "translate(-50%, -50%)",
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#7AB261",
                        color: "#fff",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "none",
                        zIndex: 9,
                        fontWeight: "500",
                        borderTop: "2px solid #d7d8dbc2",
                    }}
                >
                    {cursorText}
                </div>
            )}

            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                swipeable={true}        // Allow swipe on touch devices
                draggable={true}        // Enable mouse dragging
                centerMode={true}
                arrows={arrows}
                showDots={showDots}
                keyBoardControl={true}
                beforeChange={(nextSlide, { currentSlide }) => {
                    const diff = nextSlide - currentSlide;
                    if (diff > 0) setCursorText("NEXT");
                    else if (diff < 0) setCursorText("PREV");
                    else setCursorText("DRAG");
                }}
                afterChange={() => {
                    setTimeout(() => setCursorText("DRAG"), 500);
                }}
                containerClass="carousel-container"
                itemClass="carousel-item-padding"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
            >
                {children}
            </Carousel>
        </div>
    );
};

export default CustomDragCursorCarousel;
