
import StickyNav from "@/Components/Pages/NanoComonitor/sticky-nav"
import "./style.css"
import ProductImageTabs from "@/Components/Pages/NanoComonitor/product-image-tabs"
import COMonitorSlider from "@/Components/Pages/NanoComonitor/co-monitor-slider"
import FaqAccordion from "@/Components/Pages/NanoComonitor/faq-accordion"

export default function NanoCOMonitor() {

  return (
    <div>
      {/* Header Section */}
      <StickyNav />

      {/* Breadcrumbs Section */}
      <section className="bredcrums-pages">
        <div className="container">
          <div className="row page-breadcrum">
            <div className="col-md-12">
              <div className="static-breadcrums">
                <ul>
                  <li style={{ listStyleType: "none" }}>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="/air-quality-monitors">Air Quality Monitors </a> &gt;
                      </li>
                      <li>
                        <a href="#">
                          <b>Nano Monitor</b>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keychain Monitor Section */}
      <section className="keychain-monitor-section" id="overview">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ipad">
              <ProductImageTabs />
            </div>

            <div className="col-md-4 ipad">
              <div className="product-text">
                <div className="inner-product-txt">
                  <h1>Nano CO Monitor</h1>
                  Your portable health device
                </div>
                <div className="mrp-sec">
                  <div className="discount-mrp woocom-list-content">
                    <h6>m.r.p.</h6>
                    ₹8,990
                  </div>
                  <section className="articles-container">
                    <article className="article">
                      <p>
                        Prana Air nano CO monitor is a small portable device that enables real-time monitoring of carbon
                        monoxide (CO) levels. With its advanced and innovative cutting-edge technology, you can keep
                        track of your carbon footprint in real-time.
                      </p>
                      <p>
                        It is a low-cost monitor that can give the same data reading like the high-end equipments
                      </p>


                    </article>
                  </section>
                </div>
              </div>
            </div>

            <div className="col-md-4 ipad">
              <div className="add-cart-box">
                <div className="model-box">
                  <h5>model</h5>
                  <select className="nav dropbtn">
                    <option value="/air-quality-monitor/handheld/nano-co-monitor/">Nano CO</option>
                    <option value="/air-quality-monitor/handheld/nano-co2-monitor/">Nano CO2</option>
                    <option value="/air-quality-monitor/handheld/nano-tvoc-monitor/">Nano TVOC/HCHO</option>
                    <option value="/breathalyzer/">Breathalyzer</option>
                  </select>

                  <div className="model-box">
                    <h5>Quantity</h5>
                    <div className="stepper"></div>
                    <div className="buy-btns">
                      <form className="cart new-cart" action="#" method="post">
                        <div className="quantity buttons_added">
                          <input
                            type="number"
                            id="quantity"
                            step="1"
                            min="1"
                            max="9999"
                            name="quantity"
                            defaultValue="1"
                            title="Qty"
                            className="input-text qty text"
                            size="4"
                            pattern="[0-9]*"
                            inputMode="numeric"
                          />
                        </div>
                        <form
                          className="cart new-cart"
                          action="https://www.pranaair.com/air-quality-monitor/handheld/nano-co-monitor/"
                          method="post"
                          encType="multipart/form-data"
                        >
                          <button
                            type="submit"
                            name="add-to-cart"
                            value="76353"
                            className="single_add_to_cart_button button alt"
                          >
                            Buy Now
                          </button>
                        </form>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women Bag Banner Section */}
      <section className="women-bag-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="women-banner-txt">
                <h3>Monitoring CO Gas</h3>
                <h5>has never been this easy!</h5>
                Prana Air nano CO monitor is convenient to carry over larger distances with a simple yet attractive
                style and high data accuracy.
              </div>
              <div className="health-icon">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/cycling-icon-new.png"
                      alt="cycling icon"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/health-icon-new.png"
                      alt="health icon"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/running-icon-new.png"
                      alt="running icon"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/sitting-icon-new.png"
                      alt="sitting icon"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-portable-nano-co-monitor.png"
                alt="Woman with CO Monitor"
                className="womwn-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Quality Section */}
      <section className="product-quality-section" id="features">
        {/* Content remains the same */}
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-8 produt-img ipad">
              <div className="product-features">
                <ul className="product-features-list-one">
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/co-monitor-icon.png"
                      alt="real-time co monitoring icon"
                    />
                    Real-time Monitoring
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/mini-device-icon.png"
                      alt="portable co monitor icon"
                    />
                    Portable Device
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/electrochemical-sensor.png"
                      alt="electrochemical sensor on nano co monitor"
                    />
                    Electrochemical Sensor
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/dynamic-ui-icon-1.png"
                      alt="Dynamic UI on co monitor"
                    />
                    Dynamic UI
                  </li>
                </ul>
                <ul className="product-features-list-two">
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/mah-battery-icon.png"
                      alt="battery icon"
                    />
                    1000 mAh Battery
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/hd-clr-icon.png"
                      alt="HD-Color-Display"
                    />
                    HD Color Display
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/c-type-icon.png"
                      alt="type-c charging"
                    />
                    Type-C Charging
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 ipad">
              <div className="product-quantity-txt">
                <h5>Nano CO Monitor</h5>
                <h3>Qualitative features</h3>
                It has a small, compact body with a minimal and attractive style. People adore our nano health
                consultant and the way it combines aesthetics and technology.-
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High Definition Banner Section */}
      <section className="high-defination-banner">
        {/* Content remains the same */}
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="highr-defination-txt">
                <h3>1.9</h3>
                <h5>Ultra High Definition color Display</h5>
                Prana Air portable CO monitor is designed with a simple yet attractive style, making it convenient to
                carry over long distances.
              </div>
            </div>
            <div className="col-md-5">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-high-resolution-display.png"
                alt="High Definition Display"
                className="high-dispaly-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Handy Portable Section */}
      <section className="heandy-portable-section">
        {/* Content remains the same */}
        <div className="container">
          <div className="row">
            <div className="col-md-6 handy-bg ipad">
              <div className="handy-box">
                <div className="handy-img">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/05/handy-device.png" alt="handy-device" />
                </div>
                <div className="handy-txt">
                  <h4>Handy</h4>
                  Equipped with high-precision sensors, the ultra-high definition color screen of Nano CO monitor offers
                  a more user-friendly and convenient way to monitor the real-time CO levels.
                </div>
              </div>
            </div>
            <div className="col-md-6 ipad">
              <div className="handy-box handy-box-left">
                <div className="handy-img portable-img">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-portable-co-monitor-detector.png"
                    alt="prana air portable co monitor detector"
                  />
                </div>
                <div className="handy-txt portable-txt">
                  <h4>Portable</h4>
                  The mini health consultant from Prana Air is loved for its sleek, compact design that seamlessly
                  combines aesthetics and advanced technology, making it a popular choice among users.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Monoxide Section */}
      <section className="corbon-monoxide-section">
        {/* Content remains the same */}
        <div className="container">
          <div className="row">
            <div className="col-md-6 ipad">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/health-effects-of-carbon-monoxide-gas-2048x1130.jpeg"
                alt="Carbon Monoxide Hazards"
                className="carbon-monoxide-img"
              />
            </div>
            <div className="col-md-6 ipad">
              <div className="monoxide-txt">
                <h4>Carbon Monoxide Hazards: Why is it critical?</h4>
                Carbon monoxide is a colorless, odorless, and non-irritating gas, therefore it cannot be detected with
                mere human senses. It is also likely to explode when mixed with air (limit: 12.5%∼74.2%). CO is very
                easy to combine with hemoglobin, which further makes it difficult for the blood to carry oxygen to other
                body parts. This compromises the tissue respiration rate and even death in severe cases. CO gas has
                toxic effects on tissues and cells of the whole body, especially on the cerebral cortex.
              </div>
            </div>
          </div>
          <div className="row healt-hazards">
            <div className="col-md-4">
              <h4 className="hazard-txt-co">
                Health Hazards of <span> CO Gas </span>
              </h4>
              <div className="health-hazars-data">
                <div className="inner-data">
                  0-1 ppm :<h4>normal level</h4>
                  <div className="bar"></div>
                </div>
                <div className="inner-data innr-last-data">
                  51-100 PPM :<h4>OSHA Exposure Limits</h4>
                  <div className="pink"></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="health-hazars-data pd-hazard">
                <div className="inner-data">
                  2-9 PPM :<h4>ASHRAE 62-1989 Specific standard living area</h4>
                  <div className="yellow"></div>
                </div>
                <div className="inner-data innr-last-data">
                  101-200 PPM :<h4>Mild headache, fatigue, nausea, and dizziness</h4>
                  <div className="purpule"></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="health-hazars-data pd-hazard">
                <div className="inner-data">
                  10-50 PPM :<h4>Avg. 8-hour stay in OSHA confined spaces</h4>
                  <div className="orange"></div>
                </div>
                <div className="inner-data innr-last-data">
                  &gt;800 PPM :<h4>Dizziness, nausea, and convulsion, death within 2-3 hrs.</h4>
                  <div className="red"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CO Monitor Outdoor Slider */}
      <section className="co-monitore-outdoor-slider">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <COMonitorSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Real Time Data Section */}
      <section className="real-time-data-section">
        {/* Content remains the same */}
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-6 ipad">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-real-time-monitoring-device.png"
                alt="Real Time Data"
                className="real-time-data-img"
              />
            </div>
            <div className="col-md-6 ipad">
              <div className="real-time-data-txt deskshow">
                <h5>Real-time Data</h5>
                <h4>CO levels within seconds</h4>
                Our advanced CO-Electrochemical sensing technology provides real-time data and insights on carbon
                emissions, enabling you to stay informed and reduce harmful carbon monoxide levels for a healthier
                lifestyle.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Banner */}
      <div className="container-fluid">
        <div className="row out-door-banner">
          <div className="col-md-12">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2023/05/measuring-vehicle-emission-with-prana-air-co-monitor-2048x742.jpg"
              alt="Outdoor Monitor Device"
              className="outdoor-monitor-device-img"
            />
          </div>
        </div>
      </div>

      {/* Electrochemical Heading */}
      <div className="container">
        <div className="row electrochemical-heading">
          <div className="col-md-12">
            <div className="electrochecmial-para">
              <h5 className="heading-bg">Electrochemical Sensing Technology</h5>
              <h4>For CO Detection</h4>
              It works by electrochemically oxidizing the CO gas at a platinum electrode, which generates a current
              proportional to the CO gas concentration. The generated current is then measured and processed by an
              electronic circuit to determine the CO concentration.
            </div>
          </div>
        </div>
      </div>

      {/* Smart Chip Section */}
      <section className="smart-chip-section">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-5">
              <div className="smart-chip-txt">
                <h5>High-sensitive Smart Chip</h5>
                <h4>for more Accurate Detection</h4>
                Built-in high-performance smart chip for electrochemical carbon monoxide detection to ensure more
                accurate detection by the instrument.
                <ul className="smart-chip-quality">
                  <li>High Sensitivity</li>
                  <li>Accurate Data</li>
                  <li>Fast Operation Speed</li>
                  <li>Energy Efficient</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-smart-chip-sensor-on-co-monitor-2048x1829.png"
                alt="Smart Chip"
                className="smart-chip-img floating"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Attractive Details Section */}
      <section className="attractive-details-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 ipad">
              <div className="attractive-txt">
                <h4>Attractive details for easy carrying</h4>
              </div>
            </div>
            <div className="col-md-9 ipad"></div>
          </div>
          <div className="row ipad mob-scroll">
            <div className="col-md-4 ipad">
              <div className="attract-bg-box">
                <div className="top_head">
                  <p>
                    <span className="range_no">01</span>
                  </p>
                  <h4>
                    Type C <span className="detail_text">Charging</span>
                  </h4>
                </div>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-with-type-c-charger.jpeg"
                  alt="prana air nano co monitor with type c charger"
                />
              </div>
            </div>
            <div className="col-md-4 attract-bg ipad">
              <div className="attract-bg-box">
                <div className="top_head">
                  <p>
                    <span className="range_no">02</span>
                  </p>
                  <h4>
                    Anti-loss <span className="detail_text">Lanyard</span>
                  </h4>
                </div>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/anti-loss-lanyard-strap-on-co-monitor.jpeg"
                  alt="anti loss lanyard strap on co monitor"
                />
              </div>
            </div>
            <div className="col-md-4 attract-bg">
              <div className="attract-bg-box">
                <div className="top_head">
                  <p>
                    <span className="range_no">03</span>
                  </p>
                  <h4>
                    Ultra HD <span className="detail_text">Color screen</span>
                  </h4>
                </div>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/ultra-hd-screen-on-prana-air-co-monitor.jpeg"
                  alt="ultra hd screen on prana air co monitor"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Key Function Section */}
      <section className="product-key-function-section" id="Keyfunctions">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="product-function-txt">
                <h4>Product Key Functions</h4>
              </div>
            </div>
            <div className="col-md-9"></div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-button-functions.jpeg"
                alt="Product Key Functions"
                className="product-key-function"
              />
            </div>
            <div className="col-md-7">
              <div className="power-key-box">
                <ul>
                  <li>power key</li>
                  <li>Long Press : On/Off</li>
                  <li>Single Press : Change Temp. Unit (°C/F)</li>
                </ul>
              </div>

              <div className="turn-alarm">
                <ul>
                  <li>Single Press : Turn Alarm </li>
                  <li>
                    on <img src="https://www.pranaair.com/wp-content/uploads/2023/05/volume-on.png" alt="volume-on" />
                    <span>|</span> off{" "}
                    <img src="https://www.pranaair.com/wp-content/uploads/2023/05/volume-off.png" alt="volume-off" />
                  </li>
                </ul>
              </div>

              <div className="brightness-levels">
                <ul>
                  <li>Single Press : Change Brightness Levels </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/full-brightness.png"
                      alt="full-brightness"
                    />
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/half-brightness.png"
                      alt="half-brightness"
                    />
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/low-brightness.png"
                      alt="low-brightness.png"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Endurance Section */}
      <section className="battery-endurance-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="battery-txt">
                <h5>Large-capacity Polymer</h5>
                <h4>1000 mAh Battery Endurance</h4>
                Safe and Durable high-performance 1000 mAh large capacity polymer lithium ion battery, with super long
                endurance.
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-long-battery-capacity.png"
                alt="Large Battery"
                className="large-battery-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Banner */}
      <div className="container-fluid">
        <div className="row out-door-banner">
          <div className="col-md-12">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2023/05/real-time-measuring-of-co-gas-in-kitchen-2048x634.jpeg"
              alt="Outdoor Monitor Device"
              className="outdoor-monitor-device-img"
            />
          </div>
        </div>
      </div>

      {/* Real Time CO Detection */}
      <section className="real-time-co-detection">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-6">
              <div className="real-time-co-dect-heading">
                <h4>Real-time CO detection with</h4>
                <h5>An intelligent alarm system</h5>
                <span>
                  Green: <p>Safe, No alarm sound:</p>
                </span>
                <span>
                  Yellow, Orange, Red: <p>Drip sound cycle alarm, once every 3 minutes.</p>
                </span>
                <h6>Know the CO around you within 2 seconds:</h6>
                <p className="2sec">
                  Detects CO in real-time with <span>2 seconds</span> data refresh rate.
                </p>
              </div>

              <div className="co2-bar">
                <ul className="security">
                  <li>Security</li>
                  <li>Cycle Alarm</li>
                  <li>Cycle Alarm</li>
                  <li>Cycle Alarm</li>
                </ul>

                <div className="bar-box">
                  <ul className="bar-colr">
                    <li>
                      <div className="co-data"></div>
                    </li>
                    <li>
                      <span>0-50 PPM</span>
                    </li>
                    <li>
                      <div className="co-data orange-bar"></div>
                    </li>
                    <li>
                      <span>51-100 PPM</span>
                    </li>
                  </ul>
                  <ul className="bar-colr">
                    <li>
                      <div className="co-data yellow-bar"></div>
                    </li>
                    <li>
                      <span>101-200 PPM</span>
                    </li>
                    <li className="last-bar">
                      <div className="co-data red-bar"></div>
                    </li>
                    <li>
                      <span>≥201 PPM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-with-alarm-system.png"
                alt="CO Detection"
                className="co-detection-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specification */}
      <section className="technical-specification" id="spec">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="attractive-txt product-specification-heading">
                CO Monitor
                <h4>Technical Specifications</h4>
              </div>
            </div>
            <div className="col-md-9">
              <div className="brochore-btn">
                <a href="#">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/05/brochore-btn.png" alt="brochore-btn" />{" "}
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
          <div className="row mid-box">
            <div className="col-md-4 box-line">
              <div className="product-specifi shdw-line">
                Product Name :<h4>Nano CO Monitor</h4>
              </div>
              <div className="product-specifi">
                Warm-up time :<h4>35 Sec</h4>
              </div>
              <div className="product-specifi">
                Working Temp. :<h4>-20~60°C</h4>
              </div>
            </div>
            <div className="col-md-4 box-line">
              <div className="product-specifi">
                Detection Range :<h4>0-1000 PPM</h4>
              </div>
              <div className="product-specifi">
                Data Refresh Rate :<h4>2 Sec</h4>
              </div>
              <div className="product-specifi">
                Charging Mode :<h4>USB Type-C</h4>
              </div>
            </div>
            <div className="col-md-4 box-line">
              <div className="product-specifi">
                Working Voltage :<h4>DC5V0 . 5A</h4>
              </div>
              <div className="product-specifi">
                Operating Humidity :<h4>0-95% RH</h4>
              </div>
              <div className="product-specifi">
                Product Dimensions :<h4>W85 x D51 x H17 (mm)</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-sec" id="compare">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="attractive-txt comparision-heading">
                <h4>Comparison of Prana Air Nano CO Monitor Vs A High-End Monitor</h4>
              </div>
            </div>
            <div className="col-md-7"></div>
          </div>
          <div className="row mob-scroll">
            <div className="col-md-3">
              <div className="comp-heading mobshow">
                <h4>CO Monitor</h4>
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
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-low-cost.png"
                    alt="prana air nano co monitor low cost"
                  />
                </div>
                <div className="disc-inner-img-two">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/tsi-high-end-co-monitor.png"
                    alt="tsi high end co monitor"
                  />
                </div>
              </div>
              <div className="product-feature">
                <ul className="mini-co-monitor">
                  <li>Nano CO Monitor</li>
                  <li className="tab-bg">CO, Temperature, Humidity</li>
                  <li>Low Cost</li>
                  <li className="tab-bg">75g</li>
                  <li>0-1000 ppm</li>
                  <li className="tab-bg">±5%</li>
                  <li>Electrochemical Sensor</li>
                  <li className="tab-bg">Small &amp; easy to carry</li>
                </ul>
                <ul className="co-multifuntion-monitor">
                  <li>High-End CO Monitor</li>
                  <li>CO</li>
                  <li>High Cost</li>
                  <li>Almost 1 Kg</li>
                  <li>0-5000 ppm</li>
                  <li>±3%</li>
                  <li>Electrochemical Sensor</li>
                  <li>Comparatively less portable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="attractive-txt faq-heading">
                <h4>Frequently Asked Questions About CO &amp; Its Monitoring</h4>
              </div>
            </div>
            <div className="col-md-9"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
