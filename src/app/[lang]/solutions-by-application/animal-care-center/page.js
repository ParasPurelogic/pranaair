"use client"
import "./style.css"
import "react-multi-carousel/lib/styles.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import Carousel from "react-multi-carousel"
import FaqAccordion from "@/Components/Pages/Airports/faq-accordion"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"

export default function AnimalCarePage() {
  // Carousel responsive settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const industrialResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  }

  // Carousel data
  const carouselItems = [
    {
      id: 1,
      icon: "https://www.pranaair.com/wp-content/uploads/2024/08/tv-aqi-app-icon.png",
      title: "AQI TV App",
      description:
        "Access real-time air quality data on a large TV screen in the animal health care farm etc. Get continuous 24/7 remote monitoring to stay informed about AQI levels and ensure a healthier environment.",
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/animal-car-tv.jpg",
    },
    {
      id: 2,
      icon: "https://www.pranaair.com/wp-content/uploads/2024/08/AQI-Dashboard-icon.jpg",
      title: "AQI Web-Dashboard",
      description:
        "Get real-time data from animal facility on a web dashboard to make informed decisions. Explore global pollution trends receive health advice based on real-time air quality indexes and easily compare air quality parameters across multiple locations.",
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/animal-car-dashboard.jpg",
    },
    {
      id: 3,
      icon: "https://www.pranaair.com/wp-content/uploads/2024/08/mobile-AQI-APP-icon.png",
      title: "AQI Mobile App",
      description:
        "Monitor real-time air quality data from animal facility anytime anywhere with our mobile app. View global air pollution and weather maps and easily compare air quality parameters across multiple locations with the AQI App.",
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/animal-car-phone.jpg",
    },
  ]

  return (
    <div>
      {/* SECTION 1: Hero Section */}
      <div className="hero-section">
        <div className="school_banner_box">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="pocket_title_box school_aqi_box">
                  <h1>
                    Air quality solutions for{" "}
                    <span className="bold_text" style={{ color: "#78ae60" }}>
                      Animal Facilities
                    </span>
                  </h1>
                  Advanced air quality solutions to enhance the well-being of animals and staff with research accuracy.
                  <p className="banner-high-co2">Farms | Laboratories | Health-care</p>
                  <a className="banner-btn" href="#get_in_touch" aria-label="Get a Quote">
                    Get a Quote
                  </a>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Common Pollutants */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="introducing_box sub_title_box text-center">
              <h2 className="title_heading">
                Common Pollutants affecting air quality in <span style={{ color: "#78ae60" }}>Animal Facilities</span>
              </h2>
              <p>Animal facilities are highly exposed to various pollutants that are emitted from different sources.</p>
            </div>
          </div>
        </div>

        <div className="pollutants-grid">
          <div className="pollutant-item">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2024/08/Particulate-Matter.png"
              alt="Particulate Matter icon"
            />
            <h3>Particulate Matter</h3>
            <p>Emits from Dust dander bedding particles and feed etc.</p>
          </div>

          <div className="pollutant-item">
            <img src="https://www.pranaair.com/wp-content/uploads/2024/08/Ammonia.png" alt="Ammonia icon" />
            <h3>Ammonia</h3>
            <p>Produced by animal waste especially from urine.</p>
          </div>

          <div className="pollutant-item">
            <img src="https://www.pranaair.com/wp-content/uploads/2024/08/TVOC.png" alt="TVOC icon" />
            <h3>TVOC</h3>
            <p>Emits from cleaning agents disinfectants and chemicals.</p>
          </div>

          <div className="bottom-pollutants">
            <div className="pollutant-item">
              <img src="https://www.pranaair.com/wp-content/uploads/2024/08/Pathogens.png" alt="Pathogens icon" />
              <h3>Pathogens</h3>
              <p>Improper storage of feed can produce bacteria viruses and fungi</p>
            </div>

            <div className="pollutant-item">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2024/08/Carbon-Dioxide.png"
                alt="Carbon Dioxide icon"
              />
              <h3>Carbon Dioxide</h3>
              <p>Inadequate ventilation lead to High levels of CO2</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Air pollution sources */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="source-heading">
              <h2>Air pollution sources in Animal facilities</h2>
              Air pollution in animal facilities releases from various internal and external sources.
            </div>
          </div>
        </div>
      </div>

      <div className="railway-staion-plateform">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="animal-facility">Farms | Laboratories | Health-care</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="source-box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Dust.png"
                  alt="dust and particles"
                  width="102"
                  height="99"
                />
                <div className="source-wrap_box">
                  <h2>
                    <strong>Dust and particles</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="source-box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Cleaning-Agents-and-Disinfectants.png"
                  alt="Cleaning Agents and Disinfectants"
                  width="102"
                  height="99"
                />
                <div className="source-wrap_box">
                  <h2>
                    <strong>Cleaning Agents and Disinfectants</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="source-box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Research-Activities.png"
                  alt="Research Activities"
                  width="102"
                  height="99"
                />
                <div className="source-wrap_box">
                  <h2>
                    <strong>Research Activities</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="source-box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Ventilation-Systems.png"
                  alt="Ventilation Systems"
                  width="102"
                  height="99"
                />
                <div className="source-wrap_box">
                  <h2>
                    <strong>Ventilation Systems</strong>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <div className="source-box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Animal-Bedding.png"
                  alt="Animal Bedding"
                  width="102"
                  height="99"
                />
                <div className="source-wrap_box">
                  <h2>
                    <strong>Animal Bedding</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="source-box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Animal-Dander.png"
                  alt="Animal Dander"
                  width="102"
                  height="99"
                />
                <div className="source-wrap_box">
                  <h2>
                    <strong>Animal Dander</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="source-box">
                <img
                  className=""
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Animal-Feed.png"
                  alt="Animal Feed"
                  width="102"
                  height="99"
                />
                <div className="source-wrap_box">
                  <h2>
                    <strong>Animal Feed</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>

      {/* SECTION 4: Challenges in Maintaining Air Quality */}
      <div className="area-of-concern">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">Challenges in Maintaining Air Quality</h2>
                There are several challenges in maintaining good optimal air quality in animal facilities such as:
              </div>
            </div>
          </div>

          <div className="row gap-20 mg-l">
            <div className="col-md-4">
              <div className="area-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Ventilation-Systems.jpg"
                  alt="Ventilation Systems in animal care center"
                />
                <h3>Ventilation Systems</h3>
                Poor systems affect the proper ventilation and fail to provide adequate air exchange.
              </div>
            </div>
            <div className="col-md-4">
              <div className="area-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Temperature-and-Humidity-Control.jpg"
                  alt="Temperature and Humidity Control in animal care center"
                />
                <h3>Temperature and Humidity Control</h3>
                It is crucial for animal comfort but outdoor weather conditions can affect the control.
              </div>
            </div>
            <div className="col-md-4">
              <div className="area-para">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Cross-Contamination.jpg"
                  alt="Cross-Contamination in animal facilities"
                />
                <h3>Cross-Contamination</h3>
                Improper airflow management in animal facilities spreads airborne pollutants between rooms.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: Who is at Risk? */}
      <div className="who-risk">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">
                  Who is at{" "}
                  <span style={{ color: "#78ae60" }}>
                    <strong>Risk?</strong>
                  </span>
                </h2>
                Air pollution have significant threat to everyones health in animal facilities.
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="passengers-box">
                <div className="risk-img">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/Animal-Health.png"
                    alt="air quality and Animal Health"
                  />
                </div>
                <h3>Animal Health</h3>
                Poor air quality in any animal facility can cause respiratory distress infections and other health
                issues to animals.
              </div>
            </div>
            <div className="col-md-4">
              <div className="passengers-box">
                <div className="risk-img">
                  <img
                    className="loco-pilot"
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/Staff-and-farmworkers.png"
                    alt="air quality on the health of Staff and farmworkers"
                  />
                </div>
                <h3>Staff and farmworkers</h3>
                Poor air quality in animal farms labs care centers can be harmful to staff health as well which can
                lead to various health conditions.
              </div>
            </div>
            <div className="col-md-4">
              <div className="passengers-box">
                <div className="risk-img">
                  <img
                    className="driver"
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/Research-outcomes.png"
                    alt="air quality studies on Research"
                  />
                </div>
                <h3>Research outcomes</h3>
                Various air pollutants can affect the outcomes of research as can alter the data or cause invalid
                conclusions.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6: Guidelines */}
      <div className="guidelines-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">
                  Air pollution{" "}
                  <span style={{ color: "#78ae60" }}>
                    <strong>Guidelines for Animal facilities</strong>{" "}
                  </span>
                </h2>
                <h3>Check out different countries guidelines for Air quality in Animal Care Centers</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="guidelines-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/ccac.png"
                  alt="CCAC guidelines for animal facilities"
                />
                <a
                  href="https://www.pranaair.com/wp-content/uploads/2024/08/CCAC_guidelines-Laboratory.pdf"
                  aria-label="CCAC Guidelines Laboratory Animal Facilities"
                >
                  CCAC Guidelines Laboratory Animal Facilities
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="guidelines-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/cpcsea-animal-facility.png"
                  alt="CPCSEA GUIDELINES for animal facilities"
                />
                <a
                  href="https://www.pranaair.com/wp-content/uploads/2024/08/cpcsea.pdf"
                  aria-label="CPCSEA Guidelines For Laboratory Animal Facility"
                >
                  CPCSEA Guidelines For Laboratory Animal Facility
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="guidelines-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Environmental-Quality-in-Animal-Production-Housing-Facilities.png"
                  alt="Environmental Quality in Animal Production Housing Facilities"
                />
                <a
                  href="https://www.pranaair.com/wp-content/uploads/2024/08/airbase_11092.pdf"
                  aria-label="Environmental Quality in Animal Production Housing Facilities"
                >
                  Environmental Quality in Animal Production Housing Facilities
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="guidelines-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/animal-care-facility.png"
                  alt="western illinois university guidelines for laboratory animal care facility"
                />
                <a
                  href="https://www.pranaair.com/wp-content/uploads/2024/08/hs_Laboratory_Animal_Care_Facility.pdf"
                  aria-label="Laboratory Animal Care Facility"
                >
                  Laboratory Animal Care Facility
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 7: Air quality Solutions */}
      <div className="air-quality-solution">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">
                  Air quality{" "}
                  <span style={{ color: "#78ae60" }}>
                    <strong>Solutions</strong>{" "}
                  </span>
                </h2>
                Installing air quality solutions throughout the facility allows for managing the air pollution exposure
                to staff and animals health by providing clean air to breathe. Moreover it helps in better and more
                accurate research outcomes.
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              {/* Bootstrap Tabs */}
              <ul className="nav nav-tabs" id="airQualityTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="monitors-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#monitors"
                    type="button"
                    role="tab"
                    aria-controls="monitors"
                    aria-selected="true"
                  >
                    Air quality Monitors
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="fresh-air-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#fresh-air"
                    type="button"
                    role="tab"
                    aria-controls="fresh-air"
                    aria-selected="false"
                  >
                    Fresh air machine
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="data-display-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#data-display"
                    type="button"
                    role="tab"
                    aria-controls="data-display"
                    aria-selected="false"
                  >
                    Data Display
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="airQualityTabsContent">
                <div className="tab-pane show active" id="monitors" role="tabpanel" aria-labelledby="monitors-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="air-quality-tab-img">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2024/08/pranaair-sensible-air-quality-device.jpg"
                          alt="prana air sensible indoor air quality monitor for animal facilities"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="air-quality-heading">
                        <h3>Prana Air Sensible+Air quality monitor</h3>
                        Advanced air quality monitor can measures particulate matter CO2 VOCs and other pollutants.
                      </div>
                      <ul className="airquality_list">
                        <li>Real-time air quality monitoring</li>
                        <li>Help in immediate adjustments</li>
                        <li>Monitors Multiple Indoor Pollutants</li>
                      </ul>
                      <div className="btns-bottom">
                        <a className="knowmore_btn" href="#" aria-label="Indoor Air Quality Monitor">
                          Indoor Air Monitor
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane " id="fresh-air" role="tabpanel" aria-labelledby="fresh-air-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="air-quality-tab-img">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2024/08/Prana-Air-Fresh-Air-Machines.jpg"
                          alt="prana air fresh air machine for animal care falicities"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="air-quality-heading">
                        <h3>Prana Air Fresh Air Machine</h3>
                        Cutting-edge indoor air purifier to filter out various pollutants and provide clean air for
                        everyone.
                      </div>
                      <ul className="airquality_list">
                        <li>Removes 99.5% of Indoor Pollutants</li>
                        <li>Covers Up to 1200 Sq Ft</li>
                        <li>AI-Powered Automatic Airflow</li>
                      </ul>
                      <div className="btns-bottom">
                        <a className="knowmore_btn" href="#" aria-label="Fresh air machine for animal care center">
                          Fresh Air Machine
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane " id="data-display" role="tabpanel" aria-labelledby="data-display-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="air-quality-tab-img">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2024/08/animal-car-tv-display.jpg"
                          alt="AQI TV app for displaying air quality monitor for animal facilities"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="air-quality-heading">
                        <h3>Prana Air Customized TV Display</h3>
                        Customized digital display can install in the facilities for 24/7 real-time data visualization.
                      </div>
                      <ul className="airquality_list">
                        <li>Real-Time Air Quality Data Display</li>
                        <li>Customizable Display Settings</li>
                        <li>Access to Both Indoor and Outdoor Data</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 8: Effects of Air Pollution */}
      <div className="effect-air-pollution">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">
                  The Effects of Air Pollution -
                  <span style={{ color: "#78ae60" }}>
                    <strong>Animal facilities</strong>
                  </span>
                </h2>
                Air quality in animal farm hospitals and labs is crucial for animal health and accurate research
                outcomes. Here check the comparison:
              </div>
            </div>
          </div>

          <div className="row line">
            <div className="col-md-6">
              <div className="air_quality_box">
                <h3>Without Air Quality Solutions</h3>
                <ul className="airquality_list red_list">
                  <li>Poor health and discomfort for animals.</li>
                  <li>High respiratory issues risks for staff.</li>
                  <li>Inaccuracy in researches outcomes.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="air_quality_box">
                <h3>With Air Quality Solutions</h3>
                <ul className="airquality_list">
                  <li>Enhanced comfort and health for animals.</li>
                  <li>Reduced staff risk for respiratory issues.</li>
                  <li>Accurate and reliable research results.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 9: Slider */}
      <div className="slider">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={7000}
                keyBoardControl={true}
                customTransition="all .5s"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {carouselItems.map((item) => (
                  <div key={item.id}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="slidder-txt">
                          <img src={item.icon || "/placeholder.svg"} alt={item.title} />
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="slider-img">
                          <img src={item.image || "/placeholder.svg"} alt={`${item.title} for animal care center`} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 10: Our Clientele */}
      <div className="our-client">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">
                  Our{" "}
                  <span style={{ color: "#78ae60" }}>
                    <strong>Clientele</strong>
                  </span>
                </h2>
                Our partnerships with these renowned organizations reflect our commitment to excellence and innovation.
              </div>
            </div>
          </div>

          <div className="row client_logo_section inner_container">
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png"
                  alt="morgan stanley logo"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png" alt="ola logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png" alt="microsoft logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png" alt="iit banaras logo" />
              </div>
            </div>
          </div>

          <div className="row client_logo_section">
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/RENAULT-NISSAN.png"
                  alt="renault nissan logo"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/TATA.png" alt="tata logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/CSIR.png" alt="csir logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MAHINDRA.png" alt="mahindra logo" />
              </div>
            </div>
          </div>

          <div className="row client_logo_section">
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/INTERGLOBE.png" alt="interglobe logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/GMDA-1.png" alt="gmda logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img
                  style={{ paddingTop: "20px" }}
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/leighton-logo.png"
                  alt="leighton logo"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-logo">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/08/HAVELLS.png" alt="havells logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 11: Get in Touch */}
      <div className="contact-section-box" id="get_in_touch">
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
        <ContactForm pageName="Animal Care Center Page" />
      </div>

      {/* SECTION 12: FAQ */}
      <div className="faq_ask_section" id="faq_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">
                  Frequently Asked <span style={{ color: "#78ae60" }}>Questions</span>
                </h2>
                <p>Have questions? Were here to help.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <FaqAccordion faqItems={faqItems} />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 13: Industrial Applications */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="introducing_box sub_title_box text-center">
              <h2 className="title_heading">
                Industrial{" "}
                <span className="bold_text" style={{ color: "#78ae60" }}>
                  Applications
                </span>
              </h2>
              Prana Air offers a diverse selection of smart affordable and remarkably precise air quality solutions
              catering to various sectors irrespective of their scale.
            </div>
          </div>
        </div>

        <div className="row pd-bt">
          <div className="col-md-12">
            <div className="owl-slider">
              <IndustrialApplicationsCarousel applications={industrialApplications} />
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Scripts */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        `,
        }}
      />
    </div>
  )
}
