"use client"

export default function ProductImageTabs() {
    return (
        <div>
            <div className="tab-content">
                <div className="tab-pane fade show active tabcontent" id="Comonitora" role="tabpanel" aria-labelledby="comonitora-tab">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-device.png"
                        alt="prana air nano co monitor device"
                    />
                </div>

                <div className="tab-pane fade tabcontent" id="Comanitorb" role="tabpanel" aria-labelledby="comanitorb-tab">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-front-view.png"
                        alt="Prana Air nano co monitor front view"
                    />
                </div>

                <div className="tab-pane fade tabcontent" id="Comanitorc" role="tabpanel" aria-labelledby="comanitorc-tab">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-left-side-view.png"
                        alt="prana air nano co monitor left side view"
                    />
                </div>

                <div className="tab-pane fade tabcontent" id="Comanitord" role="tabpanel" aria-labelledby="comanitord-tab">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-back-side-view.png"
                        alt="Prana Air nano co monitor back side view"
                    />
                </div>
            </div>

            <div className="tab">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active tablinks"
                            id="comonitora-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#Comonitora"
                            type="button"
                            role="tab"
                            aria-controls="Comonitora"
                            aria-selected="true"
                        >
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-device.png"
                                alt="prana air nano co monitor device"
                            />
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link tablinks"
                            id="comanitorb-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#Comanitorb"
                            type="button"
                            role="tab"
                            aria-controls="Comanitorb"
                            aria-selected="false"
                        >
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-front-view.png"
                                alt="Prana Air nano co monitor front view"
                            />
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link tablinks"
                            id="comanitorc-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#Comanitorc"
                            type="button"
                            role="tab"
                            aria-controls="Comanitorc"
                            aria-selected="false"
                        >
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-left-side-view.png"
                                alt="prana air nano co monitor left side view"
                            />
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link tablinks"
                            id="comanitord-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#Comanitord"
                            type="button"
                            role="tab"
                            aria-controls="Comanitord"
                            aria-selected="false"
                        >
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-back-side-view.png"
                                alt="Prana Air nano co monitor back side view"
                            />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
