export default function VideoSection() {
    return (
        <section className="video-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Watch Our Story</span>
                    <h2 className="section-title">Learn More About Prana Air</h2>
                </div>

                <div className="video-container-wrapper">
                    <div className="video-container">
                        <iframe
                            src="https://www.youtube.com/embed/nKmkJGCgP78"
                            title="Prana Air Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
