"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function TestimonialsSlider() {
    const customer = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
        desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
        tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
        mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
    }

    return (
        <div className="app-slider-inner">
            <Carousel responsive={customer} infinite autoPlay autoPlaySpeed={6000}>
                <div className="review-img">
                    <div className="review-box">
                        <img src="https://www.pranaair.com/wp-content/uploads/2025/02/quote-icon.png" alt="" />
                        <p className="hide-txt">
                            Its a great product that can indicate the level of PM2.5 in a closed or outdoor environment. Its not 100%
                            accurate and given its size and price I think it would be an unrealistic expectation to have that level of
                            accuracy. It tells you the order of magnitude of PM2.5 pollution in a place and it also indicates the
                            measurement extremely fast. I have tested and triangulated the device output with other readings (from air
                            purifiers) and I dont think the margin of error is beyond 10%. However, this has been at levels of PM2.5
                            below 100. I am not sure if the margin of error expands or reduces with the PM2.5 increases to levels
                            beyond 150. If you wish to know, on an indicative basis, of the range of pollution in a place at a point
                            of time, then this would be a highly recommended device.
                        </p>

                        <ul>
                            <li>
                                <h3>Sameer W.</h3>
                            </li>
                            <li>
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="review-img">
                    <div className="review-box">
                        <img src="https://www.pranaair.com/wp-content/uploads/2025/02/quote-icon.png" alt="" />
                        <p className="hide-txt">
                            Its a great product that can indicate the level of PM2.5 in a closed or outdoor environment. Its not 100%
                            accurate and given its size and price I think it would be an unrealistic expectation to have that level of
                            accuracy. It tells you the order of magnitude of PM2.5 pollution in a place and it also indicates the
                            measurement extremely fast. I have tested and triangulated the device output with other readings (from air
                            purifiers) and I dont think the margin of error is beyond 10%. However, this has been at levels of PM2.5
                            below 100. I am not sure if the margin of error expands or reduces with the PM2.5 increases to levels
                            beyond 150. If you wish to know, on an indicative basis, of the range of pollution in a place at a point
                            of time, then this would be a highly recommended device.
                        </p>

                        <ul>
                            <li>
                                <h3>Sameer W.</h3>
                            </li>
                            <li>
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="review-img">
                    <div className="review-box">
                        <img src="https://www.pranaair.com/wp-content/uploads/2025/02/quote-icon.png" alt="" />
                        <p className="hide-txt">
                            Its a great product that can indicate the level of PM2.5 in a closed or outdoor environment. Its not 100%
                            accurate and given its size and price I think it would be an unrealistic expectation to have that level of
                            accuracy. It tells you the order of magnitude of PM2.5 pollution in a place and it also indicates the
                            measurement extremely fast. I have tested and triangulated the device output with other readings (from air
                            purifiers) and I dont think the margin of error is beyond 10%. However, this has been at levels of PM2.5
                            below 100. I am not sure if the margin of error expands or reduces with the PM2.5 increases to levels
                            beyond 150. If you wish to know, on an indicative basis, of the range of pollution in a place at a point
                            of time, then this would be a highly recommended device.
                        </p>

                        <ul>
                            <li>
                                <h3>Sameer W.</h3>
                            </li>
                            <li>
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="review-img">
                    <div className="review-box">
                        <img src="https://www.pranaair.com/wp-content/uploads/2025/02/quote-icon.png" alt="" />
                        <p className="hide-txt">
                            Its a great product that can indicate the level of PM2.5 in a closed or outdoor environment. Its not 100%
                            accurate and given its size and price I think it would be an unrealistic expectation to have that level of
                            accuracy. It tells you the order of magnitude of PM2.5 pollution in a place and it also indicates the
                            measurement extremely fast. I have tested and triangulated the device output with other readings (from air
                            purifiers) and I dont think the margin of error is beyond 10%. However, this has been at levels of PM2.5
                            below 100. I am not sure if the margin of error expands or reduces with the PM2.5 increases to levels
                            beyond 150. If you wish to know, on an indicative basis, of the range of pollution in a place at a point
                            of time, then this would be a highly recommended device.
                        </p>

                        <ul>
                            <li>
                                <h3>Sameer W.</h3>
                            </li>
                            <li>
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
