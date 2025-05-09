import ProductCarousel from "@/Components/Pages/CarbonDioxidesensor/product-carousel"
import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import CO2GraphAnimation from "@/Components/Pages/CarbonDioxidesensor/co2-graph-animation"

export default function CO2SensorPage() {

  // Text content for the CO2 graph animation
  const graphTitle = "Create multiple alerts"
  const graphDescription =
    "Carbon dioxide is a gas exhaled by human beings as a part of their respiration process. As the population grows and the number of individuals per square foot rises."
  const graphImageUrl = "https://www.pranaair.com/wp-content/uploads/2025/01/analysis-data.webp"

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-heading">
                <h1>
                  <strong>CO2</strong> SENSOR
                  <br />
                  NDIR Technology
                </h1>
                <h3>1 PPM Resolution</h3>
                <a href="#contact">
                  Request A Quote{" "}
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/12/btn-icon.jpg" alt="Button Icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Heading Section */}
      <div className="container-fluid">
        <div className="row feature-heaidng">
          <div className="col-md-8">
            <div className="feature-heading">
              <h2>
                Advanced Carbon Dioxide (CO₂) sensor with <span className="amazing">NDIR Technology</span>
              </h2>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>

      {/* Feature Section */}
      <section className="feature-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tab-container">
                {/* Tab Content */}
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                      alt="Prana Air PM Sensor"
                    />
                  </div>
                  <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                      alt="Prana Air PM2.5 Sensor"
                    />
                  </div>
                  <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                      alt="Prana Air PM Sensor of metallic body"
                    />
                  </div>
                  <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                      alt="Prana Air PM2.5 Sensor of side view"
                    />
                  </div>
                </div>
                {/* Tab Buttons */}
                <ul className="nav nav-tabs tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active tab-button"
                      id="tab1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tab1"
                      type="button"
                      role="tab"
                      aria-controls="tab1"
                      aria-selected="true"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                        alt="Prana Air PM Sensor"
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tab-button"
                      id="tab2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tab2"
                      type="button"
                      role="tab"
                      aria-controls="tab2"
                      aria-selected="false"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                        alt="Prana Air PM2.5 Sensor"
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tab-button"
                      id="tab3-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tab3"
                      type="button"
                      role="tab"
                      aria-controls="tab3"
                      aria-selected="false"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                        alt="Prana Air PM Sensor of metallic body"
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tab-button"
                      id="tab4-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tab4"
                      type="button"
                      role="tab"
                      aria-controls="tab4"
                      aria-selected="false"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/advanced-carbon-dioxide-sensor.webp"
                        alt="Prana Air PM2.5 Sensor of side view"
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-para">
                <p>
                  Breathe smarter with Prana Airs state-of-the-art CO₂ sensor, powered by{" "}
                  <strong>Non-Dispersive Infrared (NDIR) technology</strong>. This advanced sensor provides unparalleled
                  accuracy in real-time CO₂ monitoring, ensuring healthier indoor environments for your{" "}
                  <strong>home, office, or industrial space.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="key-feature-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="key-feature-heading">
                <h2>Key features of the CO2 sensor</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="key-box">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Unmatched-Accuracy.png"
                      alt="Unmatched Accuracy"
                    />
                  </li>
                  <li>
                    <h3>Unmatched Accuracy</h3>
                    Our CO2 sensor offers the high accuracy for the CO2 concentration readings with a 1 PPM resolution.
                  </li>
                </ul>
                <ul className="dark">
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Long-term-working-power.png"
                      alt="Long-term working power"
                    />
                  </li>
                  <li>
                    <h3>Long-term working power</h3>
                    The robust NDIR technology in our sensor ensures the long-term performance with less drift over
                    time.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="key-box">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Smaller-in-size.png"
                      alt="Smaller in size"
                    />
                  </li>
                  <li>
                    <h3>Smaller in size</h3>
                    Its size makes our CO2 sensor easy to install in any system or device and make it portable for easy
                    installation.
                  </li>
                </ul>
                <ul className="dark">
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Any-environment-adaptability.png"
                      alt="Any environment adaptability"
                    />
                  </li>
                  <li>
                    <h3>Any environment adaptability</h3>
                    Our CO2 sensor is suitable for various applications like air quality monitors, greenhouses, HVAC
                    systems etc.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="key-box">
                <ul className="dark">
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Auto-and-manual-calibration.png"
                      alt="Auto and manual calibration"
                    />
                  </li>
                  <li>
                    <h3>Auto and manual calibration</h3>
                    Our CO2 sensor offers the automatic and manual calibration function to maintain better accuracy in
                    different condition.
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Signal-output-PWMUART.png"
                      alt="Signal output PWM/UART"
                    />
                  </li>
                  <li>
                    <h3>Signal output PWM/UART</h3>
                    This sensor supports 2 advanced CO2 data output formats for easy data transfer and compatibility
                    with multiple platforms.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="key-box">
                <ul className="dark">
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Use-less-energy.png"
                      alt="Use less energy"
                    />
                  </li>
                  <li>
                    <h3>Use less energy</h3>
                    Our co2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                    accurate.
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/Better-customer-support.png"
                      alt="Better customer support"
                    />
                  </li>
                  <li>
                    <h3>Better customer support</h3>
                    Our co2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                    accurate.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="tech-co-sec">
        <div className="container">
          <div className="row br-btm">
            <div className="col-md-8">
              <div className="tech-co-heading">
                <h2>Technology we use in Non Dispersive Infrared (NDIR) CO2 Sensor</h2>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="calculate-co-heading">
                <h3>How does Prana Airs CO2 sensor work and calculate Its concentration?</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tech-co-para">
                <p>
                  Our carbon dioxide (CO2) sensors are based on <strong>NDIR technology</strong>, which stands for Non-
                  Dispersive Infrared radiation. This procedure is commonly used to detect carbon- based gases in the
                  atmosphere, such as CO2.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="ndir-sensor-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/NDIR-CO2-Sensor.webp"
                  alt="NDIR CO2 Sensor"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Necessary Section */}
      <section className="why-necessary-sec">
        <div className="container">
          <div className="row br-btm">
            <div className="col-md-6">
              <div className="why-necessary-heading">
                <h2>Why is it necessary to monitor carbon dioxide gas?</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="why-necessary-para">
                <p>
                  Carbon dioxide is a gas exhaled by human beings as a part of their respiration process. As the
                  population grows and the number of individuals per square foot rises, CO2 concentrations can be
                  substantially higher indoors than they are outside. The usual CO2 level in outdoor air is 400 parts
                  per million or ppm, and it is now growing at a rate of 2 ppm every year. Indoors, due to stuffy rooms
                  or insufficient ventilation,
                </p>
              </div>
              <div className="health-impact-heading">
                <h3>Health Impacts</h3>
              </div>
            </div>
          </div>
          <div className="row mob-flex-scroll">
            <div className="col-md-2">
              <div className="health-impact-box">
                <img src="https://www.pranaair.com/wp-content/uploads/2025/01/dizziness.webp" alt="Dizziness" />
                <h4>Dizziness</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div className="health-impact-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/side-view-man-dealing-with-imposter-syndrome.webp"
                  alt="Restlessness"
                />
                <h4>Restlessness</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div className="health-impact-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/mental-health.webp"
                  alt="Altered brain activity"
                />
                <h4>Altered brain activity</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div className="health-impact-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/man-using-asthma-inhaler-while-sitting-couch-home.webp"
                  alt="Breathing difficulty"
                />
                <h4>Breathing difficulty</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div className="health-impact-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/young-male-psysician-with-patient-measuring-blood-pressure.webp"
                  alt="Blood pressure elevation"
                />
                <h4>Blood pressure elevation</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div className="health-impact-box">
                <img src="https://www.pranaair.com/wp-content/uploads/2025/02/Nausea.webp" alt="Nausea" />
                <h4>Nausea</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="monitor-heading">
                <h3>Analysis of CO2 graph</h3>
              </div>
              {/* GSAP ScrollTrigger Animation Section */}
              <CO2GraphAnimation title={graphTitle} description={graphDescription} imageUrl={graphImageUrl} />
              <div className="row">
                <div className="col-md-6">
                  <div className="monitor-box-heading">
                    <h3>Why is Monitoring CO₂ Crucial?</h3>
                    <p>Excess CO₂ in enclosed spaces can lead to:</p>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
              <div className="row mob-crucial-scroll">
                <div className="col-md-4">
                  <div className="monitor-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/entrepreneur-working-overtime-marketing-project-falling-asleep-desk-while-looking-financial-documents-trying-respect-deadline.webp"
                      alt="Reduced Alertness"
                    />
                    <h4>Reduced Alertness:</h4>
                    <p>High CO₂ levels impair focus and productivity.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="monitor-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/black-woman-wearing-face-mask-holding-her-chest-pain-while-sitting-sofa-living-room.webp"
                      alt="Health Issues"
                    />
                    <h4>Health Issues</h4>
                    <p>Long-term exposure impacts respiratory health and cognitive functions.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="monitor-box">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/02/young-woman-working-office.webp"
                      alt="Poor Indoor Comfort"
                    />
                    <h4>Poor Indoor Comfort</h4>
                    <p>Stale air contributes to discomfort and fatigue.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Index Score Section */}
      <section className="index-score-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="index-heading">
                <h2>CO2 Air Quality Index Score and What does it say?</h2>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="custom-tabs-container">
                <div className="custom-tabs">
                  <ul className="nav nav-tabs" id="indexScoreTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="custom-tab green active"
                        id="custom-tab1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#custom-tab1"
                        type="button"
                        role="tab"
                        aria-controls="custom-tab1"
                        aria-selected="true"
                      >
                        <h3>
                          Good <img src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png" alt="" />
                        </h3>
                        <ul>
                          <li>0</li>
                          <li>600</li>
                        </ul>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="custom-tab yellow"
                        id="custom-tab2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#custom-tab2"
                        type="button"
                        role="tab"
                        aria-controls="custom-tab2"
                        aria-selected="false"
                      >
                        <h3>
                          Moderate <img src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png" alt="" />
                        </h3>
                        <ul>
                          <li>601</li>
                          <li>800</li>
                        </ul>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="custom-tab orange"
                        id="custom-tab3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#custom-tab3"
                        type="button"
                        role="tab"
                        aria-controls="custom-tab3"
                        aria-selected="false"
                      >
                        <h3>
                          Poor <img src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png" alt="" />
                        </h3>
                        <ul>
                          <li>0</li>
                          <li>600</li>
                        </ul>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="custom-tab pink"
                        id="custom-tab4-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#custom-tab4"
                        type="button"
                        role="tab"
                        aria-controls="custom-tab4"
                        aria-selected="false"
                      >
                        <h3>
                          Unhealthy{" "}
                          <img src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png" alt="" />
                        </h3>
                        <ul>
                          <li>0</li>
                          <li>600</li>
                        </ul>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="custom-tab puple"
                        id="custom-tab5-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#custom-tab5"
                        type="button"
                        role="tab"
                        aria-controls="custom-tab5"
                        aria-selected="false"
                      >
                        <h3>
                          Severe <img src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png" alt="" />
                        </h3>
                        <ul>
                          <li>0</li>
                          <li>600</li>
                        </ul>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="custom-tab red"
                        id="custom-tab6-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#custom-tab6"
                        type="button"
                        role="tab"
                        aria-controls="custom-tab6"
                        aria-selected="false"
                      >
                        <h3>
                          Hazardous{" "}
                          <img src="https://www.pranaair.com/wp-content/uploads/2025/01/tab-icon.png" alt="" />
                        </h3>
                        <ul>
                          <li>0</li>
                          <li>600</li>
                        </ul>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="indexScoreTabsContent">
                  <div
                    id="custom-tab1"
                    className="tab-pane fade show active"
                    role="tabpanel"
                    aria-labelledby="custom-tab1-tab"
                  >
                    <p>
                      Our CO2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                      accurate.
                    </p>
                  </div>
                  <div id="custom-tab2" className="tab-pane fade" role="tabpanel" aria-labelledby="custom-tab2-tab">
                    <p>
                      Our CO2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                      accurate.
                    </p>
                  </div>
                  <div id="custom-tab3" className="tab-pane fade" role="tabpanel" aria-labelledby="custom-tab3-tab">
                    <p>
                      Our CO2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                      accurate.
                    </p>
                  </div>
                  <div id="custom-tab4" className="tab-pane fade" role="tabpanel" aria-labelledby="custom-tab4-tab">
                    <p>
                      Our CO2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                      accurate.
                    </p>
                  </div>
                  <div id="custom-tab5" className="tab-pane fade" role="tabpanel" aria-labelledby="custom-tab5-tab">
                    <p>
                      Our CO2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                      accurate.
                    </p>
                  </div>
                  <div id="custom-tab6" className="tab-pane fade" role="tabpanel" aria-labelledby="custom-tab6-tab">
                    <p>
                      Our CO2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                      accurate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensor Calibration Section */}
      <section className="sensor-calibration-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sensor-calibration-heading">
                <h2>Sensor Calibration</h2>
              </div>
            </div>
            <div className="col-md-9">
              <div className="calibration-para">
                <p>
                  Prana Air sensors are calibrated by the zero-point calibration method. This method reveals a range of
                  measurements of the instrument. The zero point for sensor calibration is 400 ppm and the calibration
                  cycle is of 96 hours (4 days) duration.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="calibration-video">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/01/sensor-calibration-video.webp"
                  alt="Sensor Calibration Video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="app-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="app-heading">
                <h2>Applications of Prana Air CO2 Sensor</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <ProductCarousel className="app-slider" showDots={true} arrows={false}>
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/01/Air-Filtration-Systems.webp"
                    alt="Air Filtration Systems"
                  />
                  <h3>Air Filtration Systems</h3>
                  <p>
                    Our co2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                    accurate.
                  </p>
                </div>
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/02/HVAC-Industry.webp"
                    alt="HVAC Industry"
                  />
                  <h3>HVAC Industry</h3>
                  <p>
                    Our co2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                    accurate.
                  </p>
                </div>
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/02/Research-Purposes.webp"
                    alt="Research Purposes"
                  />
                  <h3>Research Purposes</h3>
                  <p>
                    Our co2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                    accurate.
                  </p>
                </div>
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/02/smoke-rises-from-factory-chimney-polluting-nature-generated-by-ai.webp"
                    alt="Landfill Gas Monitoring"
                  />
                  <h3>Landfill Gas Monitoring</h3>
                  <p>
                    Our co2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                    accurate.
                  </p>
                </div>
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/02/young-women-using-home-technology.webp"
                    alt="Smart Homes"
                  />
                  <h3>Smart Homes</h3>
                  <p>
                    Our co2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                    accurate.
                  </p>
                </div>
                <div className="slider-box">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2025/02/people-office-working-project.webp"
                    alt="Offices"
                  />
                  <h3>Offices</h3>
                  <p>
                    Our co2 sensor is apt for real-time air monitoring due to low response time. They are quick and
                    accurate.
                  </p>
                </div>
              </ProductCarousel>
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="source-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="source-heading">
                <h2>Sources Of Carbon Dioxide Gas</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="manmade-heading">
                <h3>Manmade Sources</h3>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row mob-row">
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/global-warming-pollution.webp"
                  alt="Combustion of fuel"
                />
                <h5>Combustion of fuel by cars, aircraft, or trucks.</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/burning-fire-background-green-trees.webp"
                  alt="Burning of waste"
                />
                <h5>Burning of waste in the open</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/pollution-concept-factory-emision.webp"
                  alt="Industries"
                />
                <h5>Industries that use burning operations</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/man-smoking-cigarette.webp"
                  alt="Smoking"
                />
                <h5>Smoking</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="manmade-heading">
                <h3>Natural Sources</h3>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row mob-row">
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/beautiful-shot-rocks-seashore.webp"
                  alt="Carbonate rocks"
                />
                <h5>Carbonate rocks after contact with water react and produce this gas</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/beautiful-shot-active-volcano-with-flowing-lava-smoke-clear-sky.webp"
                  alt="Volcanic eruption"
                />
                <h5>Volcanic eruption produces a large amount of CO2</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/glaciers-icebergs-ai-generated-image.webp"
                  alt="Glaciers"
                />
                <h5>Occurs in glaciers as it is easily dissolved in water</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="manmade-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/oil-pump-background-industrial-landscape-winter-sky-smoke.webp"
                  alt="Petroleum deposits"
                />
                <h5>Petroleum deposits</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="tech-spec-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tech-spec-heading">
                <h2>Technical Specifications</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="construction-btn">
                <ul>
                  <li>
                    <a href="#">
                      Arduino Code
                      <img src="https://www.pranaair.com/wp-content/uploads/2024/12/tab-btn.png" alt="link icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pranaair.com/wp-content/uploads/2025/01/prana-air-pas-out-1-outdoor-pm-sensor-datasheet.pdf">
                      Datasheet
                      <img src="https://www.pranaair.com/wp-content/uploads/2024/12/tab-btn.png" alt="link icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="tech-spec-tabel">
                <ul>
                  <li>
                    <h3>Product Name:</h3>
                  </li>
                  <li>
                    <h4>PM Sensor</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>Rated voltage:</h3>
                  </li>
                  <li>
                    <h4>5V</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>Communication Port Level:</h3>
                  </li>
                  <li>
                    <h4>3.3 V</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>Dimensions L x W x H :</h3>
                  </li>
                  <li>
                    <h4>4.5 x 4.5 x 2 cm</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>Particle Size Resolution:</h3>
                  </li>
                  <li>
                    <h4>0.3 µm</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>Storage Temperature :</h3>
                  </li>
                  <li>
                    <h4>-20~85 C°</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>Working Temperature:</h3>
                  </li>
                  <li>
                    <h4>-20~70 C°</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>Working humidity:</h3>
                  </li>
                  <li>
                    <h4>0~99C%RH (No Moisture formation)</h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>Rated current:</h3>
                  </li>
                  <li>
                    <h4>70mA</h4>
                  </li>
                </ul>
                <ul className="tech-bg">
                  <li>
                    <h3>Mass concentration data resolution:</h3>
                  </li>
                  <li>
                    <h4>1 μg/m3</h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="outdoor-bg-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2025/02/Dimensions-co2-sensor.webp"
                  alt="Dimensions CO2 Sensor"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="airqulality_contact_section inner_container" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-heading">
                <h2>Get in Touch</h2>
                <p>Please help us know what requirements you have. Our team will contact you very soon.</p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm pageName="Carbon Dioxide Co2 Sensor Page" />
      </section>

      {/* You May Also Like Section */}
      <section className="also-like">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="also-like-heading">
                <h2>You may also like</h2>
              </div>
              <ProductCarousel className="allsensor-slide" showDots={true} arrows={false} >
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/CO2-gas-sensor.jpg"
                      alt="prana air co2 sensor"
                    />
                  </a>
                  <h5>
                    Co2 Sensor
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/CO-gas-sensor.jpg"
                      alt="Prana Air CO gas sensor"
                    />
                  </a>
                  <h5>
                    CO Sensor
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Ammonia-gas-sensor.jpg"
                      alt="prana air ammonia sensor NH3"
                    />
                  </a>
                  <h5>
                    Ammonia Sensor
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/H2S-gas-sensor.jpg"
                      alt="Prana Air H2S sensor"
                    />
                  </a>
                  <h5>
                    H2S Sensor
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Ozone-gas-sensor.jpg"
                      alt="Prana Air Ozone sensor O3"
                    />
                  </a>
                  <h5>
                    Ozone Gas
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Chlorine-gas-sensor.jpg"
                      alt="Prana Air Chlorine sensor"
                    />
                  </a>
                  <h5>
                    Chlorine Gas
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/SO2-gas-sensor.jpg"
                      alt="Prana Air SO2 sensor"
                    />
                  </a>
                  <h5>
                    SO2 Sensor
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
                <div className="may-also">
                  <a href="#">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/No2-gas-sensor.jpg"
                      alt="Prana Air NO2 sensor"
                    />
                  </a>
                  <h5>
                    NO2 Sensor
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/03/arrow-link.png" alt="link icon" />
                  </h5>
                </div>
              </ProductCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
