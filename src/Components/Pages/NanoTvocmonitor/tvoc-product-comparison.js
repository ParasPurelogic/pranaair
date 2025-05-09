export default function TVOCProductComparison() {
    return (
        <div className="row mob-scroll">
            <div className="col-md-3">
                <div className="comp-heading mobshow">
                    <h4>TVOC Monitor</h4>
                </div>
                <div className="product-discription">
                    <ul>
                        <li>Description :</li>
                        <li>Parameter :</li>
                        <li>Price :</li>
                        <li>Weight :</li>
                        <li>Range :</li>
                        <li>Accuracy :</li>
                        <li>Technology :</li>
                        <li>Portability :</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-9">
                <div className="dis-img">
                    <div className="disc-inner-img-one">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-tvoc-hcho-odor-monitor.png"
                            alt="prana air nano tvoc monitor low cost"
                        />
                    </div>
                    <div className="disc-inner-img-two">
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/06/high-end-tvoc-monitor.png"
                            alt="tsi high end tvoc monitor"
                        />
                    </div>
                </div>
                <div className="product-feature">
                    <ul className="mini-co-monitor">
                        <li>Nano TVOC Monitor</li>
                        <li className="tab-bg">TVOC, HCHO, Temp, Humidity</li>
                        <li>Low Cost</li>
                        <li className="tab-bg">75g</li>
                        <li>0~9.999 mg/m3</li>
                        <li className="tab-bg">±5%</li>
                        <li>MOS Sensing</li>
                        <li className="tab-bg">Small & easy to carry</li>
                    </ul>
                    <ul className="co-multifuntion-monitor">
                        <li>High-End TVOC Monitor</li>
                        <li>TVOC</li>
                        <li>High Cost</li>
                        <li>Almost 1 Kg</li>
                        <li>0-20,000 ppb</li>
                        <li>±3%</li>
                        <li>PID Sensing</li>
                        <li>Comparatively less portable</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
