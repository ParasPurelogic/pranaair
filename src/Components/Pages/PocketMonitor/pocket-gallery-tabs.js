export default function PocketGalleryTabs() {
    return (
        <div className="gallery-container">
            <div className="tab-content" id="galleryTabContent">
                <div className="tab-pane fade show active" id="front-view" role="tabpanel" aria-labelledby="front-view-tab">
                    <div className="gallery-main-image">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-smart-portable-monitor.png"
                            alt="prana-air-smart-portable-monitor"
                        />
                    </div>
                </div>
                <div className="tab-pane fade" id="side-view" role="tabpanel" aria-labelledby="side-view-tab">
                    <div className="gallery-main-image">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2021/03/pocket-monitor-side-view.jpeg"
                            alt="pocket-monitor-side-view"
                        />
                    </div>
                </div>
                <div className="tab-pane fade" id="back-view" role="tabpanel" aria-labelledby="back-view-tab">
                    <div className="gallery-main-image">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2021/03/pm-pocket-monitor-sideview.jpeg"
                            alt="pm-pocket-monitor-sideview"
                        />
                    </div>
                </div>
            </div>
            <ul className="nav gallery-thumbnails" id="galleryTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <a
                        className="nav-link gallery-thumbnail active"
                        id="front-view-tab"
                        data-bs-toggle="tab"
                        href="#front-view"
                        role="tab"
                        aria-controls="front-view"
                        aria-selected="true"
                    >
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-smart-portable-monitor-280x280.png"
                            alt="prana-air-smart-portable-monitor"
                        />
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a
                        className="nav-link gallery-thumbnail"
                        id="side-view-tab"
                        data-bs-toggle="tab"
                        href="#side-view"
                        role="tab"
                        aria-controls="side-view"
                        aria-selected="false"
                    >
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2021/03/pocket-monitor-side-view-300x273.jpeg"
                            alt="pocket-monitor-side-view"
                        />
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a
                        className="nav-link gallery-thumbnail"
                        id="back-view-tab"
                        data-bs-toggle="tab"
                        href="#back-view"
                        role="tab"
                        aria-controls="back-view"
                        aria-selected="false"
                    >
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2021/03/pm-pocket-monitor-sideview-300x273.jpeg"
                            alt="pm-pocket-monitor-sideview"
                        />
                    </a>
                </li>
            </ul>
            <div className="gallery-brochure">
                <a href="#" className="download-brochure-btn">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png"
                        alt="Download Brochure"
                        className="btn-icon"
                    />
                    <span>Download Brochure</span>
                </a>
            </div>
        </div>
    )
}
