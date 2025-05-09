
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm";
import AqiRangesTab from "@/Components/Pages/CairMonitor/AqiRangtab"
import FaqAccordion from "@/Components/Pages/CairMonitor/FaqAccordion"
import PartsLabelTabs from "@/Components/Pages/CairMonitor/PartsLabeltabs"
import TrackQualityTabs from "@/Components/Pages/CairMonitor/TrackQualitytabs"
import VisualTabs from "@/Components/Pages/CairMonitor/VisualTabs"
import InstallationSlider from "@/Components/Pages/CairMonitor/InstallationSlider"

export default function CairMonitor() {

  return (
    <div>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="row inner-banner-section">
            <div className="col-md-6">
              <div className="banner-content">
                <h1>
                  <span className="hd-txt-color">Cair+</span>
                  <br />
                  Indoor Air Quality Monitor
                </h1>
                <p>
                  Track your indoor air quality with a low-cost, highly accurate, and portable device. It makes
                  invisible air contaminants presence visible in your house.
                </p>
                <ul className="banner-table">
                  <li>Low Cost</li>
                  <li>Accurate</li>
                  <li>Portable</li>
                </ul>

                <form className="cart" action="https://www.pranaair.com/product/cair-plus-monitor/" method="post">
                  <button
                    className="single_add_to_cart_button button alt button button_slide slide_right"
                    name="add-to-cart"
                    type="submit"
                  >
                    Buy Now{" "}
                    <img
                      className="banner-btn-arrow"
                      src="https://www.pranaair.com/wp-content/uploads/2023/12/Vector-1.png"
                      alt=""
                    />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="car-in-outdoor-monitior-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="carin-in-outdoor-heading">
                <h2>Features of Cair+ Monitor</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="car-in-outdoor-para">
                <p>Cair+ monitoring device is where your search stops</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="cair-indoor-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/11/pranaair-cair-monitor-all-specifications.webp"
                  alt="pranaair cair monitor all specification"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="carin-tab-box-main">
                <div className="carin-tab-box-left">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/real-time-monitoring-icon.png"
                        alt="real time air quality monitoring icon"
                      />
                    </li>
                    <li>
                      <h4>Real-Time Monitoring</h4>
                      <p>AQI, PM2.5, PM10, CO2, TVOC, HCHO, Temperature, and Humidity.</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/micro-sd-card-storage.png"
                        alt="micro sd card storage"
                      />
                    </li>
                    <li>
                      <h4>Micro SD Card Storage</h4>
                      <p> Provide better data storage with a micro SD card</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/type-c-usb-cable.png"
                        alt="type c usb cable"
                      />
                    </li>
                    <li>
                      <h4>Type-C USB Cable</h4>
                      <p>Charge the air quality device anytime with a Type-C USB cable.</p>
                    </li>
                  </ul>
                </div>
                <div className="carin-tab-box-right">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/wifi-cloud-data-storage.png"
                        alt="wifi cloud data storage"
                      />
                    </li>
                    <li>
                      <h4>Wi-Fi + Cloud Data Storage</h4>
                      <p>Data accessibility on AQIs mobile, TV, Tablet App or web-dashboard.</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/lithium-ion-battery.png"
                        alt="lithium-ion battery"
                      />
                    </li>
                    <li>
                      <h4>Battery Capacity</h4>
                      <p>With a 1600 mAh lithium-ion battery, it can last upto 3 Hrs on a full charge.</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/portable-device.png"
                        alt="portable device"
                      />
                    </li>
                    <li>
                      <h4>Portable Device</h4>
                      <p>Carry the device anywhere and measure the air quality on your own.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEED WELL Section */}
      <div className="container">
        <div className="row leed-well">
          <div className="col-12">
            <div className="leed-well-heading">
              <h2>Cair+ meets all standard of IAQ</h2>
              <p>LEED v4.1, WELL, WHO, ASHRAE - Meet your standards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Parameters Section */}
      <section className="cair-monitore-slider-section slider-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="content-tab-box">
                <h3>
                  <span className="txt-color">Cair +</span>
                  <br />
                  Indoor Air Quality monitor
                </h3>
              </div>
            </div>
            <div className="col-md-7">
              <div className="parameter-para">
                <p>
                  Measure the air quality of your place on your own air pollution device for indoor and outdoor. Along
                  our new Cair+ air monitor, you will get a free ambient air quality monitor.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="content-tab-box">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/11/cair-indoor-air-quality-monitor.webp"
                  alt="prana air cair indoor air quality monitor device"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="parameters-icons-box">
                <h4>Parameters</h4>
                <div className="parameter-icons">
                  <div className="parameter-icons-left">
                    <ul>
                      <li>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-aqi-parameter.png"
                          alt="cair aqi parameter"
                        />
                        <h5>AQI</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/pm1-parameter.png"
                          alt="pm1 parameter"
                        />
                        <h5>PM1</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-pm2.5-parameter.png"
                          alt="cair pm2.5 parameter"
                        />
                        <h5>PM2.5</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-pm10-parameter.png"
                          alt="cair pm10 parameter"
                        />
                        <h5>PM10</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="parameter-icons-right">
                    <ul>
                      <li>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-co2-parameter.png"
                          alt="cair co2 parameter"
                        />
                        <h5>CO2</h5>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="parameter-icons">
                  <div className="parameter-icons-left">
                    <ul>
                      <li>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-tvoc-parameter.png"
                          alt="cair tvoc parameter"
                        />
                        <h5>TVOC</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-hcho-parameter.png"
                          alt="cair hcho parameter"
                        />
                        <h5>HCHO</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          className="temp-icon"
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-temp-parameter.png"
                          alt="cair temp parameter"
                        />
                        <h5>Temp.</h5>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-humidity-parameter.png"
                          alt="cair humidity parameter"
                        />
                        <h5>Humi.</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="parameter-icons-right">
                    <ul>
                      <li className="partical-count">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/12/cair-pc0.3-parameter.png"
                          alt="cair pc0.3 parameter"
                        />
                        <h5>
                          Particle Counts
                          <br />
                          (0.3, 0.5, 1.0, 2.5, 5.0, 10 μm)
                        </h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="app-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="app-heading">
                <h2>
                  <strong>Cair+</strong> Installation
                </h2>
                <p>Install Cair+ device anywhere indoor your house, office, resturants etc</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <InstallationSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Clock Section */}
      <section className="monitor-turn-into-clock">
        <div className="container">
          <div className="row mob-row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="monitor-clock-text">
                <h2>Transform Your Device into a</h2>
                <h3>
                  Cl
                  <span className="clock-icon">
                    <img
                      className="hithere"
                      src="https://www.pranaair.com/wp-content/uploads/2023/12/clock-icon.png"
                      alt="clock icon"
                    />
                  </span>
                  ck
                </h3>
                <p>
                  Transit your device into a clock with an AQI display by activating the screen saver mode. AQI (Air
                  Quality Index) also displays the indoor air quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Pollution Section */}
      <section className="air-pollition-section">
        <div className="container">
          <div className="row mob-img">
            <div className="col-md-6">
              <div className="air-pollution-para">
                <h2>What is Indoor Air Pollution?</h2>
                <p>
                  Indoor air pollution, originating from various sources like tobacco smoke and household products,
                  poses health risks such as respiratory issues and allergies. Common pollutants include particulate
                  matter and volatile organic compounds. Adequate ventilation is crucial for mitigating these concerns,
                  as poor air quality can lead to headaches and fatigue. Regular monitoring, adherence to standards, and
                  mitigation strategies are key to creating environments conducive to well-being.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pollution-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/01/health-problem-of-indoor-air-pollution.jpg"
                  alt="health problem of indoor air pollution"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WiFi Connectivity Section */}
      <section className="wifi-connective-section">
        <div className="container-fluid">
          <div className="row wifi-mob-row">
            <div className="col-md-5 wifi-connect-heading">
              <h2>
                <img src="https://www.pranaair.com/wp-content/uploads/2024/01/wifi.png" alt="wifi connectivity" /> Wifi
                Connectivity
              </h2>
              <p>
                Wifi connectivity feature to access the tools data on your smartphones, AQI India app, android TV and
                tabs. With it, you can ensure particular places information whenever you require.
              </p>
              <h3 className="bg">Remote Data Accessibility</h3>
            </div>
            <div className="col-md-7 wifi-connect-img"></div>
          </div>
        </div>
      </section>

      {/* Office Monitor Section */}
      <section className="cair-monitor-ofc">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cair-ofc-monitor">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/11/prana-air-cair-indoor-air-quality-monitor-in-office.webp"
                  alt="prana air cair indoor air quality monitor in office"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="quote-heading">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/12/quote-icon.png" alt="quote icon" />
                <h2>Cair+</h2>
                <h3>Indoor Quality monitor</h3>
                <p>
                  Indoor pollution is a major concern due to many issues. Cair+ ensures thermal comfort in your house.
                  As it exhibits real-time temperature and humidity. Check the filtration and ventilation with pollutant
                  levels in the air.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AQI Mobile App Section */}
      <section className="aqi-mobile-app">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="aqi-mobile-text">
                <h2>
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png" alt="aqi logo" /> Mobile
                </h2>
                <h3>Application</h3>
                <ul>
                  <li>Attainability of Air quality alerts in your area.</li>
                  <li>Air quality graph, health advice as per the real-time air quality,</li>
                  <li>Steer through countries to check AQI across the world</li>
                  <li>Easy managing of your Air quality monitors</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cair-data-on-app">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/01/pranaair-cair-air-quality-monitor-connected-with-aqi-app.jpg"
                  alt="prana air cair air quality monitor connected with aqi mobile app"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventilation Risks Section */}
      <section className="ventilation-pose-health-risk">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="high-co2level">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/12/high-co2-level.png"
                  alt="high co2 level"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="high-co2level">
                <img
                  className="right-icon"
                  src="https://www.pranaair.com/wp-content/uploads/2023/12/high-co2-level.png"
                  alt="high co2 level"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="health-risk-text">
                <h2>High CO2 Levels and Poor Ventilation Pose Health Risks</h2>
                <p>
                  When ventilation is inadequate, the accumulation of CO2 increases, negatively impacting air quality.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="poor-health-box" style={{ animationDuration: "4s" }}>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/12/ventilation.png"
                    alt="bad ventilation due to high co2 level"
                  />
                </li>
                <li>
                  <h3>Ventilation Score</h3>
                  the provision of fresh air to your room
                </li>
                <li>
                  <h4 style={{ color: "#fb291e" }}>05</h4>
                  <h5 style={{ color: "#fb291e" }}>Moderate</h5>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="high-co2level">
                <img
                  className="bottm-left-icon"
                  src="https://www.pranaair.com/wp-content/uploads/2023/12/high-co2-level.png"
                  alt="high co2 level"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="high-co2level">
                <img
                  className="bottom-icon"
                  src="https://www.pranaair.com/wp-content/uploads/2023/12/high-co2-level.png"
                  alt="high co2 level"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AQI Ranges Section */}
      <section className="aqi-ranges-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tab-range-heading">
                <h2>Pollutants Ranges</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tab-range-para">
                <p>
                  Air Quality Index to check the values of every pollutant in your area. Through it, you can make
                  well-informed decisions for indoor air quality.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <AqiRangesTab />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Visuals Section */}
      <section className="types-visuals-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="graph-title visual-title">
                <h2>Types of Visuals</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="graph-para visual-para">
                <p>
                  Different screens access various information on one device. Makes it more convenient for better
                  follow-up
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              < VisualTabs />
            </div>
          </div>
        </div>
      </section>

      {/* Graph Heading Section */}
      <div className="container">
        <div className="row graph-heading">
          <div className="col-md-6">
            <div className="graph-title">
              <h2>Data Comparing Graph</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="graph-para">
              <p>
                A comparison of BAM and Prana Airs Cair+ shows both data are correlated. Our device also shows accurate
                data as a high-end device.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Graph Chart Section */}
      <div className="container-fluid">
        <div className="row graph-chartt">
          <div className="col">
            <div className="graph-chart-img">
              <img src="https://www.pranaair.com/wp-content/uploads/2023/12/graph-chart-scaled.jpg" alt="graph chart" />
            </div>
          </div>
        </div>
      </div>

      {/* AQI TV App Section */}
      <div className="container-fluid">
        <div className="row graph-chart aqi-tv-screen">
          <div className="col-md-6">
            <div className="aqi-tv-app-title">
              <h2>
                <img src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png" alt="aqi-logo" /> TV
                Application
              </h2>
              <h3>
                Compare Real-time <span className="pink">Indoor</span> and <span className="pink">Outdoor</span> air
                quality in one place.
              </h3>
              <p>So you can make the right decision whether to stay in or go out.</p>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>

      {/* track quality Section */}
      <section className="tv-app-section">
        <div className="container">
          <div className="row aqi-app-heading">
            <div className="col-md-6">
              <div className="track-aqi-heading">
                <h2>
                  Track the <span className="txt-color">quality of the air</span> you breathe on different
                  <span className="aqi-logo">
                    <img src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png" />
                  </span>{" "}
                  platforms
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="graph-para track-aqi-para">
                <p>Get access of air quality data on TV, Mobile App, Web Dashboard</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <TrackQualityTabs />
            </div>
          </div>
        </div>
      </section>

      {/* health index Section */}
      <div className="graph-heading container">
        <div className="row">
          <div className="col-md-6">
            <div className="graph-title health-index-heading">
              <h2>
                <span className="txt-color">AI</span> Calculated{" "}
                <span className="txt-color">Health</span> Index-Score
              </h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="graph-para">
              <p>
                Ensure hows your indoor environment and thermal comfort. Our
                device confirms it by temperature, Humidity, and concentrations of
                Air pollutants.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="health-index-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="co2-bar">
                <ul className="security">
                  <li>Bad</li>
                  <li>Moderate</li>
                  <li>Good</li>
                </ul>
                <ul className="rang">
                  <li>0</li>
                  <li>5</li>
                  <li>10</li>
                </ul>
              </div>

              <div className="health-index-score">
                <div className="health-index-score-box">
                  <ul className="position-one" style={{ animationDuration: "4s" }}>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/ventilation.png"
                        alt="ventilation"
                      />
                    </li>
                    <li>
                      <h3>Ventilation Score</h3>
                      <p>the provision of fresh air to your room</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#fbb400" }}>05</h4>
                      <h5>Moderate</h5>
                    </li>
                  </ul>
                  <ul className="position-two" style={{ animationDuration: "6s" }}>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/odor-score.png"
                        alt="odor score"
                      />
                    </li>
                    <li>
                      <h3>Odor score</h3>
                      <p>a distinctive smell in the room</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#f4231c" }}>05</h4>
                      <h5>Bad</h5>
                    </li>
                  </ul>
                  <ul className="position-three" style={{ animationDuration: "4s" }}>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/mold-score.png"
                        alt="mold score"
                      />
                    </li>
                    <li>
                      <h3>Mold Score</h3>
                      <p>probability of mold formation in the room</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#29b713" }}>05</h4>
                      <h5>Good</h5>
                    </li>
                  </ul>
                </div>
                <div className="health-index-score-box">
                  <ul className="position-four" style={{ animationDuration: "6s" }}>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/capacity-index.png"
                        alt="capacity index"
                      />
                    </li>
                    <li>
                      <h3>Capacity index</h3>
                      <p>people capacity of the room</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#29b713" }}>05</h4>
                      <h5>Good</h5>
                    </li>
                  </ul>
                  <ul className="position-five" style={{ animationDuration: "4s" }}>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/comfort-score.png"
                        alt="comfort score"
                      />
                    </li>
                    <li>
                      <h3>Comfort score</h3>
                      <p>a state of physical ease in the room</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#29b713" }}>10</h4>
                      <h5>Good</h5>
                    </li>
                  </ul>
                  <ul className="position-six" style={{ animationDuration: "6s" }}>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/filtration-score.png"
                        alt="filtration score"
                      />
                    </li>
                    <li>
                      <h3>Filtration Score</h3>
                      <p>efficiency of filter in the room</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#f4231c" }}>10</h4>
                      <h5>Bad</h5>
                    </li>
                  </ul>
                </div>
                <div className="health-index-score-box">
                  <ul className="position-seven" style={{ animationDuration: "4s" }}>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/mites-scroe.png"
                        alt="mites score"
                      />
                    </li>
                    <li>
                      <h3>Mites Score</h3>
                      <p>presence of any mites in the room</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#f4231c" }}>02</h4>
                      <h5>Bad</h5>
                    </li>
                  </ul>
                  <ul className="position-eight" style={{ animationDuration: "6s" }}>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/virus-index.png"
                        alt="virus index"
                      />
                    </li>
                    <li>
                      <h3>Virus Index</h3>
                      <p>probability of virus formation in the room</p>
                    </li>
                    <li>
                      <h4 style={{ color: "#f4231c" }}>02</h4>
                      <h5>Bad</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* historic data Section */}
      <section className="access-real-time-historic-data">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="historic-data-text">
                <h2>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png"
                    alt="aqi-logo"
                  />
                  Web Dashboard
                </h2>
                <h3>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/12/quote-data.png"
                    alt="quote data"
                  />
                  Access Real-time and Historic Data
                </h3>
                <p>
                  Our platform offers easy access to crucial information for air quality.
                  Individuals can make the best decision with ease. Accessing real-time
                  data regardless of their location or daytime.
                </p>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      {/* Parts and Labels Section */}
      <div className="container">
        <div className="row parts-label-tabs">
          <div className="col-md-6">
            <div className="parts-label-heading">
              <h2>Parts and Labels</h2>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row parts-label-tabsection">
          <div className="col-12">
            <PartsLabelTabs />
          </div>
        </div>
      </div>

      {/* long battery Section */}
      <section className="long-battery-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="long-battery animated fadeInUp">
                <p>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/12/1600mah-long-battery.jpg"
                    alt="1600mAh long battery"
                  />
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="long-battery-text animated fadeInUp">
                <h2>1600mAh</h2>
                <h5>Battery Monitor</h5>
                <p>1600 mAh battery makes it mobile, and more productive. Quick to charge with a USB type-C cable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* tech spec Section */}
      <section className="tech-spec-section">
        <div className="container">
          <div className="row tech-spec-line">
            <div className="col-md-6">
              <div className="graph-title tech-spec-heading animated fadeInUp">
                <h2>Technical Specifications</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="animated fadeInUp">
                <p>
                  <a
                    className="tech-spec-btn"
                    href="https://www.pranaair.com/wp-content/uploads/2024/02/Prana-air-Cair-Air-quality-monitor-brochure.pdf"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                      alt="brochure-icon"
                    />
                    Brochure
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="car-in-outdoor-tab">
                <div className="tab-pane active">
                  <div className="row texh-spec-box">
                    <div className="col-md-6">
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Parameters:</h5>
                          </li>
                          <li>AQI, PM1, PM2.5, PM10, TVOCs, HCHO, CO2, Particle Counts, Temp. & Humi.</li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Connectivity:</h5>
                          </li>
                          <li>Wi-Fi</li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Color:</h5>
                          </li>
                          <li>Ivory</li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Size:</h5>
                          </li>
                          <li>11 x 3.4 x 7.5 (in cm)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Storage:</h5>
                          </li>
                          <li>
                            Micro SD Card Storage +<br />
                            AQI Cloud Storage
                          </li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Weight:</h5>
                          </li>
                          <li>175g</li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Screen:</h5>
                          </li>
                          <li>Color LED Display</li>
                        </ul>
                      </div>
                      <div className="tech-spec-list">
                        <ul>
                          <li>
                            <h5>Power Supply:</h5>
                          </li>
                          <li>Type C USB Cable</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row how-to-connect">
            <div className="col-12">
              <div className="how-to-connect-heading animated fadeInUp">
                <h2>How to connect</h2>
              </div>
            </div>
          </div>

          <div className="row qr-code-bg">
            <div className="col-md-4">
              <div className="qr-code-img">
                <ul>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2024/04/cair-manual.png" alt="QR code for manual" />
                  </li>
                  <li>
                    <h5>SCAN THE QR CODE</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="or-txt">
                <p>or</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <p>
                  <a
                    className="manual-btn"
                    href="https://www.pranaair.com/wp-content/uploads/2024/02/Prana-Air-Cair-Air-Quality-Monitor-Manual.pdf"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/brochure-icon.png"
                      alt="brochure-icon"
                    />
                    Download Manual
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* airqulality contact Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-heading">
              <h2>Get in Touch</h2>
              <p>
                Please help us know what requirements you have. Our team will
                contact you very soon.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm pageName="Cair Monitor Page" />

      {/* FAQs Section */}
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="faq-heading">
                <h2>FAQs of Cair+ Monitor</h2>
              </div>
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

