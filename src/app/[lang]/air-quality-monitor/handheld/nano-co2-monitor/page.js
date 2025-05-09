
import ProductNavbar from "@/Components/Pages/NanoCo2monitor/product-navbar"
import "./style.css"
import ProductGalleryTabs from "@/Components/Pages/NanoCo2monitor/product-gallery-tabs"
import CO2MonitorSlider from "@/Components/Pages/NanoCo2monitor/co2-monitor-slider"
import ProductComparison from "@/Components/Pages/NanoCo2monitor/product-comparison"
import FaqAccordionCO2 from "@/Components/Pages/NanoCo2monitor/faq-accordion-co2"

export default function NanoCO2MonitorPage() {
  return (
    <main className="nano-co2-monitor-page">
      {/* Sticky Navigation Bar */}
      <ProductNavbar />

      {/* SECTION 1: Product Overview */}
      <section className="product-overview" id="Overview">
        <div className="container">
          <div className="row align-items-stretch">
            {/* Product Gallery */}
            <div className="col-lg-4">
              <ProductGalleryTabs />
            </div>

            <div className="col-lg-4">
              <div className="product-info">
                <h1 className="product-title">Nano CO2 Monitor</h1>
                <p className="product-subtitle">Your portable health consultant</p>

                <div className="product-price">
                  <span className="price-label">M.R.P.</span>
                  <span className="price-value">₹ 2,490.00</span>
                </div>

                <div className="product-description">
                  <p>
                    Prana Air Nano CO2 monitor with NDIR Sensor is a handy air quality monitoring device that helps you
                    monitor CO2 levels in real-time. Track your carbon footprint in real-time with an advanced and
                    innovative cutting edge technology. Empowering you to make informed decisions about CO2 levels
                    around you.
                  </p>
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="col-lg-4">
              <div className="product-options">
                <div className="option-group">
                  <label>Model</label>
                  <div className="select-wrapper">
                    <select className="form-select">
                      <option>Nano CO2</option>
                      <option>Nano CO</option>
                      <option>Nano TVOC/HCHO</option>
                    </select>
                  </div>
                </div>

                <div className="option-group">
                  <label>Quantity</label>
                  <input type="number" className="form-control" min="1" defaultValue="1" />
                </div>

                <form
                  className="cart new-cart"
                  action="https://www.pranaair.com/air-quality-monitor/handheld/nano-co2-monitor/"
                  method="post"
                  encType="multipart/form-data"
                >
                  <button
                    type="submit"
                    name="add-to-cart"
                    value="77731"
                    className="single_add_to_cart_button button alt"
                  >
                    Buy Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CO2 Monitoring Banner */}
      <section className="new-monitor-section-feature">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">{/* This div will contain the background image */}</div>
            <div className="col-lg-6 col-md-12">
              <div className="monitor_right_box">
                <h2>CO2 Monitoring has never been this easy!</h2>
                <p>
                  Prana Air Nano CO2 monitor is convenient to carry over larger distances with a simple yet attractive
                  style.
                </p>
                <ul className="monitor_features">
                  <li>
                    <div className="feature-icon-circle">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/running-fitness-icon.png"
                        alt="use for fitness icon"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon-circle">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/cycing-icon.png"
                        alt="cycling use icon"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon-circle">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/work-out-icon.png"
                        alt="work out icon"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon-circle">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/working-in-office-icon.png"
                        alt="use for office work icon"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Features */}
      <section className="monitor_section qualitative_feature_sec" id="Features">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="Qualitativ_feature_box feature-icon">
                <h2>Qualitative features of Nano CO2 Monitor | Portable</h2>
                <p>
                  It has a small, compact body with a minimal and attractive style. People adore our mini health
                  consultant and the way it combines aesthetics and technology.
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/co2-real-time-icon.png"
                      alt="Real-time CO2 Monitoring"
                    />
                  </div>
                  <div className="feature-text">
                    <span>
                      Real-time CO2
                      <br />
                      Monitoring
                    </span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img src="https://www.pranaair.com/wp-content/uploads/2023/06/ndir.png" alt="NDIR Technology" />
                  </div>
                  <div className="feature-text">
                    <span>
                      NDIR
                      <br />
                      Technology
                    </span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/mini-device-icon.png"
                      alt="Mini & Portable Device"
                    />
                  </div>
                  <div className="feature-text">
                    <span>
                      Mini & Portable
                      <br />
                      Device
                    </span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/hd-clr-icon.png"
                      alt="HD Color Display"
                    />
                  </div>
                  <div className="feature-text">
                    <span>
                      HD Color
                      <br />
                      Display
                    </span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/mah-battery-icon.png"
                      alt="700 mAh Lithium battery"
                    />
                  </div>
                  <div className="feature-text">
                    <span>
                      700 mAh Lithium
                      <br />
                      battery
                    </span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/c-type-icon.png"
                      alt="Type-C interface"
                    />
                  </div>
                  <div className="feature-text">
                    <span>
                      Type-C
                      <br />
                      interface
                    </span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/dynamic-ui-icon-1.png"
                      alt="Dynamic UI"
                    />
                  </div>
                  <div className="feature-text">
                    <span>Dynamic UI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Ultra High Definition Display */}
      <section className="monitor_section ultra_high_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-ultra-hd-screen.png"
                alt="Ultra HD Display"
                className="img-fluid hd-img-device"
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="ultra_heading">
                <h2 className="display-title">
                  <span className="inch_text">19</span>
                  Ultra High Definition color Display
                </h2>
                <p>
                  The ultra-high definition color screen has high-precision sensors installed to precisely monitor the
                  CO2 gas concentration in real-time, and reading is more user-friendly and convenient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Handy & Portable */}
      <section className="handy-portable-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="handy-box">
                <div className="handy-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-handy-nano-co2-monitor.png"
                    alt="Hand holding Prana Air Nano CO2 monitor"
                    className="img-fluid"
                  />
                </div>
                <div className="handy-content">
                  <h3>Handy</h3>
                  <p>
                    The monitor is very user-friendly and convenient to measure CO2 gas concentration in real-time. It
                    is very easy to hold with one hand.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="portable-box">
                <div className="portable-image">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-portable-co2-monitor.png"
                    alt="Prana Air Nano CO2 monitor with lanyard"
                    className="img-fluid"
                  />
                </div>
                <div className="portable-content">
                  <h3>Portable</h3>
                  <p>
                    It has a small, compact body with a simple, attractive style. People adore our mini health
                    consultant and the way it combines aesthetics and technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Carbon Dioxide in the respiratory environment */}
      <section className="environment_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="carbon_dioxide_box">
                <h2>Carbon Dioxide</h2>
                <h3>in the respiratory environment</h3>
                <p>
                  The respiratory environment is critical. CO2 impacts the comfort levels of a person. When Its level
                  exceeds the limits, it can do both short-term and long-term damage to ones health. Excess CO2 levels
                  can result in stuffiness, dizziness, loss of attention, and other health issues.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="respiratory-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/health-effects-of-co2-gas.jpeg"
                  alt="Carbon Dioxide in respiratory environment"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="health-hazards">
                <h3 className="health_head">
                  Health Hazards of <span className="highlight_text">CO2</span>
                </h3>
                <div className="hazard-grid">
                  <div className="hazard-item">
                    <div className="hazard-icon">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/Feeling-sleepy-and-drowsy.png"
                        alt="Feeling sleepy and drowsy"
                      />
                    </div>
                    <div className="hazard-content">
                      <h4>Feeling sleepy and drowsy</h4>
                      <div className="hazard-level">
                        <span>1000-2000 PPM :</span>
                        <div className="hazard-indicator yellow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="hazard-item">
                    <div className="hazard-icon">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/smooth-breathing-icon.png"
                        alt="Smooth Breathing"
                      />
                    </div>
                    <div className="hazard-content">
                      <h4>Smooth Breathing</h4>
                      <div className="hazard-level">
                        <span>400-1000 PPM :</span>
                        <div className="hazard-indicator green"></div>
                      </div>
                    </div>
                  </div>
                  <div className="hazard-item">
                    <div className="hazard-icon">
                      <img src="https://www.pranaair.com/wp-content/uploads/2023/06/headache.png" alt="Headache" />
                    </div>
                    <div className="hazard-content">
                      <h4>Headache, lethargy, and inability to concentrate</h4>
                      <div className="hazard-level">
                        <span>2000-3000 PPM :</span>
                        <div className="hazard-indicator orange"></div>
                      </div>
                    </div>
                  </div>
                  <div className="hazard-item">
                    <div className="hazard-icon">
                      <img src="https://www.pranaair.com/wp-content/uploads/2023/06/brain.png" alt="Brain damage" />
                    </div>
                    <div className="hazard-content">
                      <h4>Can cause brain damage, coma, even death</h4>
                      <div className="hazard-level">
                        <span>&gt;5000 PPM :</span>
                        <div className="hazard-indicator red"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Small, Sleek, Reliable */}
      <section className="slider_section">
        <CO2MonitorSlider />
      </section>

      {/* SECTION 8: Banner Image */}
      <section className="image_responsive_sec">
        <img
          src="https://www.pranaair.com/wp-content/uploads/2023/06/measuring-co2-level-in-office-with-prana-air-device.jpeg"
          alt="CO2 Monitor Banner"
          className="img-fluid banner-outdoor"
        />
      </section>

      {/* SECTION 9: Real-time CO2 Air quality monitoring */}
      <section className="minigraph_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="mini-co-monitoring-keychain">
                <div className="monitior-heading">
                  <h3>Real-time CO2</h3>
                  <h4>Air quality monitoring</h4>
                </div>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/air-quality-monitoring-co2-gas.png"
                  alt="co2 air quality monitor graph"
                  className="img-fluid"
                />
                <ul className="dot-icon">
                  <li>
                    <h3>
                      CO<sub>2</sub> Level
                    </h3>
                  </li>
                  <li>
                    <h3>Occupancy</h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="Qualitativ_feature_box mini-co2">
                <h3>Accurate</h3>
                <h2>
                  CO<sub>2</sub> Detection
                </h2>
                <p>
                  Indoor CO<sub>2</sub> levels are influenced by various factors, with occupancy being a significant
                  one. Our advanced NDIR Sensor Technology monitor efficiently tracks and measures CO<sub>2</sub>{" "}
                  levels, helping maintain a healthy and comfortable indoor environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: NDIR Technology */}
      <section>
        <div className="container">
          <div className="ndirtechnology_box text-center electrochecmial-para">
            <h5 className="heading-bg">NDIR Technology</h5>
            <h4>
              For CO<sub>2</sub> Detection
            </h4>
            <p>
              For monitoring CO<sub>2</sub>, NDIR sensors are preferred over other detection technologies due to their
              precision, long-term stability, and low power consumption. The sensor is comprised of an infrared emitter,
              a detector, an optical filter, a gas cell, and signal-processing circuitry that detects CO2 in the
              immediate environment by real-time air quality monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11: High-sensitive Smart Chip */}
      <section className="highsensitive_section mob-revers">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="high_sensitive_box">
                <h3>
                  High-sensitive <span className="blue_head">Smart Chip</span>
                </h3>
                <h4>for more Accurate Detection</h4>
                <p>
                  Built-in high-performance chip for air quality detection ensures more accurate instrument detection.
                </p>
                <ul className="sensitive_list">
                  <li>High-sensitivity</li>
                  <li>Fast Operation speed</li>
                  <li>Data Accuracy</li>
                  <li>Energy Efficient</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 sensitive_bg_image">
              <div className="chip-sensor-img floating">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/smart-chip-for-prana-air-co2-monitor.png"
                  alt="Smart Chip Sensor"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Attractive details */}
      <section>
        <div className="container">
          <h2 className="sub_heading">Attractive details for easy carrying</h2>
          <div className="row product_grid_section">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="attractive_box interface_box">
                <div className="top_head">
                  <span className="range_no">01</span>
                  <h4>
                    Type C <span className="detail_text">Interface</span>
                  </h4>
                </div>
                <img
                  className="type-c"
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor-type-c-charging.png"
                  alt="prana air nano co2 monitor type-c charging"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="attractive_box anti_box">
                <div className="top_head">
                  <span className="range_no">02</span>
                  <h4>
                    Anti-loss <span className="detail_text">Lanyard</span>
                  </h4>
                </div>
                <img
                  className="landyard"
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-co2-monitor-lanyard.png"
                  alt="prana air co2 monitor lanyard"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="attractive_box">
                <div className="top_head">
                  <span className="range_no">03</span>
                  <h4>
                    Ultra HD <span className="detail_text">Color screen</span>
                  </h4>
                </div>
                <img
                  className="ultra-hd"
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-ultra-hd-screen.png"
                  alt="prana air nano co2 monitor hd screen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: Product Key functions */}
      <section className="product_key_section" id="Functions">
        <div className="container">
          <h2 className="sub_heading">Product Key functions</h2>
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
              <div className="product-key-img text-center">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor-key-functions.png"
                  alt="Product Key Functions"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="product-key-functions">
                <div className="key-function-item d-flex mb-4">
                  <div className="key-function-image me-3">
                    <img
                      className="d-none d-md-block"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/on-off-key.png"
                      alt="on off key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <img
                      className="d-block d-md-none"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/mob-brightness-btn.png"
                      alt="brightness key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="key-function-text">
                    <h3 className="mb-0 fs-5">On/Off key</h3>
                  </div>
                </div>

                <div className="key-function-item d-flex mb-4 calibration">
                  <div className="key-function-image me-3">
                    <img
                      className="d-none d-md-block"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/auto-calibration-key.png"
                      alt="auto calibration key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <img
                      className="d-block d-md-none"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/mob-power-btn.png"
                      alt="power button key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="key-function-text">
                    <h3 className="mb-0 fs-5">One-button automatic calibration</h3>
                  </div>
                </div>

                <div className="key-function-item d-flex brightness">
                  <div className="key-function-image me-3">
                    <img
                      className="d-none d-md-block"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/bright-adjust-key.png"
                      alt="brightness adjust key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <img
                      className="d-block d-md-none"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/auto-btn.png"
                      alt="auto calibration key"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="key-function-text">
                    <h3 className="mb-0 fs-5">Brightness adjusting button</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: Battery Capacity */}
      <section className="capacity_polymer_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="Qualitativ_feature_box">
                <h2>Large-capacity Polymer</h2>
                <span className="battery_text">Battery endurance</span>
                <p>
                  Safe and Durable high-performance 700 mAh large capacity polymer lithium battery, with super long
                  endurance.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 capacity_img">
              <div className="battery-device-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/long-battery-life-of-prana-air-co2-monitor.png"
                  alt="Battery Capacity"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15: Technical Specifications */}
      <section className="technical-specification" id="Tech-Specs">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="attractive-txt product-specification-heading">
                <h3>Nano CO2 Monitor</h3>
                <h4>Technical Specifications</h4>
              </div>
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="brochore-btn">
                <a href="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor-brochure.pdf">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/05/brochore-btn.png" alt="brochore-btn" />{" "}
                  Download Brochure
                </a>
              </div>
            </div>
          </div>

          <div className="row mid-box">
            <div className="col-lg-4 col-md-12 box-line">
              <div className="product-specifi">
                Product Name :<h4>Nano CO2 Monitor</h4>
              </div>
              <div className="product-specifi">
                Warm-up time :<h4>35 Sec</h4>
              </div>
              <div className="product-specifi">
                Working Temp. :<h4>-10~50°C</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 box-line">
              <div className="product-specifi">
                Detection Range :<h4>Upto -5000 PPM</h4>
              </div>
              <div className="product-specifi">
                Data Refresh Rate :<h4>2 Sec</h4>
              </div>
              <div className="product-specifi">
                Charging Mode :<h4>USB Type-C</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 box-line">
              <div className="product-specifi">
                Working Voltage :<h4>3.6V</h4>
              </div>
              <div className="product-specifi">
                Operating Humidity :<h4>0-95% RH</h4>
              </div>
              <div className="product-specifi">
                Interface Dimensions :<h4>50.6 x 17 x 85 (mm)</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 16: Banner Image */}
      <section className="image_responsive_sec">
        <img
          src="https://www.pranaair.com/wp-content/uploads/2023/06/monitoring-real-time-co2-gas-level-in-restaurant.jpeg"
          alt="CO2 Monitor Banner"
          className="img-fluid party-outdoor-img"
        />
      </section>

      {/* SECTION 17: Intelligent Alarm System */}
      <section className="intelligent-alarm-system" id="Alarm">
        <div className="container">
          <div className="intelligent-alarm-container">
            <div className="alarm-device-container">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/alert-of-alarm-system-in-prana-air-co2-monitor.png"
                alt="Intelligent Alarm System"
                className="alarm-device-image"
              />
              <div className="sound-waves">
                <div className="sound-wave"></div>
                <div className="sound-wave"></div>
                <div className="sound-wave"></div>
              </div>
            </div>
            <div className="alarm-content">
              <h3 className="alarm-title">Real-time</h3>
              <h2 className="alarm-subtitle">
                <span className="highlight">CO2</span> detection with an intelligent alarm system
              </h2>

              <div className="alarm-description">
                <div className="alarm-level-item">
                  <span className="alarm-level-label">Green:</span>
                  <span className="alarm-level-text">Safe, No alarm sound</span>
                </div>
                <div className="alarm-level-item">
                  <span className="alarm-level-label">Yellow, Orange, and Red:</span>
                  <span className="alarm-level-text">Drip sound cycle alarm, once every 10 minutes.</span>
                </div>
              </div>

              <div className="co2-levels">
                <div className="co2-level">
                  <div className="co2-level-indicator co2-level-green"></div>
                  <span className="co2-level-text">400 – 1000 ± 50PPM</span>
                </div>
                <div className="co2-level">
                  <div className="co2-level-indicator co2-level-yellow"></div>
                  <span className="co2-level-text">1001 – 1200 ± 50PPM</span>
                </div>
                <div className="co2-level">
                  <div className="co2-level-indicator co2-level-orange"></div>
                  <span className="co2-level-text">1201 – 1500 ± 50PPM</span>
                </div>
                <div className="co2-level">
                  <div className="co2-level-indicator co2-level-red"></div>
                  <span className="co2-level-text">1501 ± 50PPM</span>
                </div>
              </div>

              <div className="alarm-note">Know the CO2 around you within 2 seconds:</div>
              <div className="alarm-note-text">
                Detects CO2 in real-time with <span className="highlight">2 seconds</span> data refresh rate.
              </div>

              <div className="gradient-bar"></div>
              <div className="gradient-labels">
                <div className="gradient-label">Security</div>
                <div className="gradient-label">Cycle Alarm</div>
                <div className="gradient-label">Cycle Alarm</div>
                <div className="gradient-label">Cycle Alarm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 18: Product Comparison */}
      <section className="comparison-section" id="Compare">
        <ProductComparison />
      </section>

      {/* SECTION 19: FAQs */}
      <section className="faqs-section" id="FAQs">
        <div className="container">
          <h2 className="faqs-title">Frequently Asked</h2>
          <h3 className="faqs-subtitle">Questions About Nano CO2 Monitor</h3>
          <FaqAccordionCO2 />
        </div>
      </section>
    </main>
  )
}
