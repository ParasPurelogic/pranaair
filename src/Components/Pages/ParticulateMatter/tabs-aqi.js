"use client"

export default async function AqiTabsPM() {
    const aqiLevels = [
        { range: "0-50", label: "Good", colorClass: "bg-success" },
        { range: "51-100", label: "Moderate", colorClass: "bg-warning" },
        { range: "101-200", label: "Poor", colorClass: "bg-orange" },
        { range: "201-300", label: "Unhealthy", colorClass: "bg-danger" },
        { range: "301-400", label: "Severe", colorClass: "bg-purple" },
        { range: "401-500", label: "Hazardous", colorClass: "bg-dark" },
    ]

    const pm25Levels = [
        { range: "0-30", label: "Good", colorClass: "bg-success" },
        { range: "31-60", label: "Moderate", colorClass: "bg-warning" },
        { range: "61-90", label: "Poor", colorClass: "bg-orange" },
        { range: "91-120", label: "Unhealthy", colorClass: "bg-danger" },
        { range: "121-250", label: "Severe", colorClass: "bg-purple" },
        { range: "250+", label: "Hazardous", colorClass: "bg-dark" },
    ]
    return (
        <main>
            <div className="container mt-4">
                <div className="card">
                    <div className="card-header p-0">
                        <ul className="nav nav-tabs card-header-tabs" id="aqiTabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="aqi-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#aqi"
                                    type="button"
                                    role="tab"
                                    aria-controls="aqi"
                                    aria-selected="true"
                                >
                                    AQI
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="pm25-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#pm25"
                                    type="button"
                                    role="tab"
                                    aria-controls="pm25"
                                    aria-selected="false"
                                >
                                    PM 2.5
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="card-body">
                        <div className="tab-content" id="aqiTabsContent">
                            <div className="tab-pane fade show active" id="aqi" role="tabpanel" aria-labelledby="aqi-tab" tabIndex={0}>
                                <div className="row g-3">
                                    {aqiLevels.map((level, index) => (
                                        <div key={index} className="col-md-4 col-sm-6">
                                            <div className="card h-100 border-0 shadow-sm">
                                                <div className={`card-header text-white text-center ${level.colorClass}`}>
                                                    <h5 className="card-title mb-0 fw-bold">{level.range}</h5>
                                                </div>
                                                <div className="card-body text-center py-2">
                                                    <h6 className="card-text mb-0 fw-semibold">{level.label}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pm25" role="tabpanel" aria-labelledby="pm25-tab" tabIndex={0}>
                                <div className="row g-3">
                                    {pm25Levels.map((level, index) => (
                                        <div key={index} className="col-md-4 col-sm-6">
                                            <div className="card h-100 border-0 shadow-sm">
                                                <div className={`card-header text-white text-center ${level.colorClass}`}>
                                                    <h5 className="card-title mb-0 fw-bold">{level.range}</h5>
                                                </div>
                                                <div className="card-body text-center py-2">
                                                    <h6 className="card-text mb-0 fw-semibold">{level.label}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
        .bg-orange {
          background-color: #fd7e14 !important;
        }
        .bg-purple {
          background-color: #6f42c1 !important;
        }
        .nav-tabs .nav-link {
          border-radius: 0;
          font-weight: 600;
          color: #495057;
        }
        .nav-tabs .nav-link.active {
          background-color: #fff;
          border-color: #dee2e6 #dee2e6 #fff;
          color: #0d6efd;
        }
        .nav-tabs .nav-link:hover {
          border-color: #e9ecef #e9ecef #dee2e6;
          isolation: isolate;
        }
        .card {
          border: 1px solid #dee2e6;
        }
        .card-header-tabs {
          margin-bottom: -1px;
        }
      `}</style>
            </div>
        </main>
    );
}
