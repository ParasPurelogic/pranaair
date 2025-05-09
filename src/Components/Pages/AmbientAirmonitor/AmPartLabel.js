import Image from "next/image"

export default function AMPartsLabelTab() {
    return (
        <div className="part-label-tab">
            <ul className="nav nav-tabs" id="partsLabelTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="ambient-pm-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#ambient-pm"
                        type="button"
                        role="tab"
                        aria-controls="ambient-pm"
                        aria-selected="true"
                    >
                        Ambient PM
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="ambient-pro-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#ambient-pro"
                        type="button"
                        role="tab"
                        aria-controls="ambient-pro"
                        aria-selected="false"
                    >
                        Ambient Pro
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="prana-sense-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#prana-sense"
                        type="button"
                        role="tab"
                        aria-controls="prana-sense"
                        aria-selected="false"
                    >
                        Prana Sense
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="partsLabelTabContent">
                <div className="tab-pane fade show active" id="ambient-pm" role="tabpanel" aria-labelledby="ambient-pm-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <Image
                                className="ambeint-pm"
                                src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-air-Ambient-PM.webp"
                                alt="ambient-pm-monitor-pranaair"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="col-md-6 list-line">
                            <div className="ambient-lite-label-list">
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num1.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>Mode Button</h4>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num2.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>Power Button</h4>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num3.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>PM Sensor Inlet (2)</h4>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num4.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>Air Inlet - Temperature & Humidity</h4>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num5.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>Micro SD Card Slot</h4>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num6.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>Weather Station Slot</h4>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num7.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>12V DC</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="ambient-pro" role="tabpanel" aria-labelledby="ambient-pro-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <Image
                                className="ambeint-pro"
                                src="https://www.pranaair.com/wp-content/uploads/2024/10/Parts-Label-Ambient-pro.webp"
                                alt="ambient-pro-monitor-pranaair.png"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="col-md-6 list-line">
                            <div className="ambient-pro-label-list">
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num1.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                    </li>
                                    <li>
                                        <h4>Gases Inlet</h4>
                                        SO2, NO2, CO, O3, TVOCS, H2S and NH3.
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num2.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                    </li>
                                    <li>
                                        <h4>7 inch LED Data Display</h4>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num3.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                    </li>
                                    <li>
                                        <h4>Air Inlet</h4>
                                        Noise & PM (1, 2.5, 10), Temperature, Humidity and Pressure.
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num4.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                    </li>
                                    <li>
                                        <h4>Weather</h4>
                                        LUX, Wind Speed, Wind Direction, UV and Rainfall.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="prana-sense" role="tabpanel" aria-labelledby="prana-sense-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <Image
                                className="ambeint-lite"
                                src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-sense-monitor-pranaair.webp"
                                alt="ambient-lite-monitor-pranaair"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="col-md-6 list-line">
                            <div className="ambient-lite-label-list">
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num1.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>PM Sensor Inlet (2)</h4>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num2.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>GPS Antenna</h4>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num3.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>Air Inlet - T/H</h4>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num4.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>Mode Button</h4>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num5.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>Micro SD Card Slot</h4>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num6.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>Power Button</h4>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/num7.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>12V DC</h4>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2024/10/num8.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>Weather Station Slot</h4>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2024/10/num9.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>RS485/ Relay</h4>
                                    </li>
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2024/10/num10.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <h4>Air Out</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
