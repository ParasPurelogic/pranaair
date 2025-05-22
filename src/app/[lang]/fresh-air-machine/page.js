
import "./style.css"
import "react-multi-carousel/lib/styles.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import PollutantTabs from "@/Components/Pages/FreshAirMachine/pollutant-tabs"
import FaqAccordion from "@/Components/Pages/FreshAirMachine/faq-accordion"
import ProductImageTabs from "@/Components/Pages/FreshAirMachine/product-image-tabs"

export default function FreshAirMachine() {
  const faqItems = [
    {
      question: "1. What is the difference between an air purifier and this fresh air machine?",
      answer:
        "Prana Air's fresh air machine filters the ambient air and then brings that air inside your home. Whereas, room air purifiers refilter and recirculate the same air inside your room again and again.",
    },
    {
      question: "2. How many filters are present in the device?",
      answer: "Our air purifying machine consists of three 13-grade HEPA filters.",
    },
    {
      question: "3. Is there any warranty on the machine?",
      answer: "Yes, there is 1-year warranty on the fresh air machine",
    },
    {
      question: "4. How to install the machine?",
      answer: "You don't have to be concerned about the setup. Our in-house technician will install the device.",
    },
    {
      question: "5. What is the dimension of filters used in the machine?",
      answer:
        "Prana Air Fresh Air Machine has three filters. 1st filter: 39.5 x 4.5 x 19 (cm), 2nd filter: 39.5 x 4.5 x 19 (cm), 3rd filter: 39.5 x 20 x 19 (cm).",
    },
    {
      question: "6. Can I change a particular filter from the 3 filters?",
      answer: "Yes, you can change a filter individually if there is a need.",
    },
    {
      question: "7. What air pollutants can this machine filter?",
      answer:
        "Air pollutants like PM1, PM2.5, and PM10, CO2, TVOC & HCHO can be excluded from the clean air coming out of the machine's outlet.",
    },
    {
      question: "8. What is the coverage area of the machine?",
      answer:
        "Prana Air Fresh Air Machine offers a coverage area of 1200 square feet. This means that our device can easily function in a very large room or two small rooms with utmost precision.",
    },
  ]

  return (
    <div className="fresh-air-machine-page">

      {/* Banner Section */}
      <div className="home-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="banner-text">
                <h1>Prana air</h1>
                <h2>Fresh Air Machine</h2>
                <p>One stop air quality solution for indoor air pollution</p>
                <a href="#fresh_air_machine_contact">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Air Machine Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="clean-air-para">
              <h1 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "20pt", lineHeight: "1" }}>
                  <strong>Clean Air Machine As (IAQ) Indoor Air Quality </strong>
                </span>
                <span style={{ fontSize: "18pt" }}>
                  <strong>
                    Solution
                    <sup>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                        alt="logo"
                        width="32"
                        height="24"
                      />
                    </sup>
                  </strong>
                </span>
              </h1>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  One-stop solution for indoor air quality solution by Prana Air <strong>Fresh Air Machine, </strong>
                  working as an air purifier with the capability to filter out air pollutants up to 99.5% efficiency and
                  multi-layer HEPA filters.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="featured_bg_section">
        <div className="container">
          <div className="featured_ctnr">
            <div className="feature_box">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/automatic-air-partition.png"
                alt="automatic air intake partition in prana air fresh air machine"
                width="175"
                height="auto"
              />
              <div className="feature_wrap_box">
                <h2>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>Automatic Air Partition</strong>
                  </span>
                </h2>
                <span style={{ fontSize: "12pt" }}>
                  There is a partition for air intake which can be controlled by a mobile app remotely.
                </span>
              </div>
            </div>
            <div className="feature_box">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/large-coverage-area.png"
                alt="very large area coverage by prana air fresh air machine"
                width="175"
                height="auto"
              />
              <div className="feature_wrap_box">
                <h2>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>Large Coverage Area</strong>
                  </span>
                </h2>
                <span style={{ fontSize: "12pt" }}>
                  Its area coverage size is very large as compared to the normal air purifier.
                </span>
              </div>
            </div>
            <div className="feature_box">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/12/promising-99-efficiency-of-fresh-air-machine.jpg"
                alt="promising 99% efficiency of prana air fresh air machine"
              />
              <div className="feature_wrap_box">
                <h2>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>99.5% Efficiency</strong>
                  </span>
                </h2>
                <span style={{ fontSize: "12pt" }}>
                  Air pollutants like pm2.5, pm10 - dust particles, CO<sub>2</sub>, TVOC &amp; HCHO are easily filtered
                  out up to 99.5%
                </span>
              </div>
            </div>
            <div className="feature_box">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/12/fresh-air-machine-hepa-filter.jpg"
                alt="hepa filter prana air fresh air machine"
              />
              <div className="feature_wrap_box">
                <h2>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>13 Grade HEPA</strong>
                  </span>
                </h2>
                <span style={{ fontSize: "12pt" }}>
                  3 phases of multi-layer HEPA filters clean out maximum air pollutants.
                </span>
              </div>
            </div>
          </div>

          <div className="featured_ctnr">
            <div className="feature_box">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/prana-air-fresh-air-machine-mobile-app-and-led-display-monitor.png"
                alt="mobile app and led display for prana air fresh air machine as controller"
                width="163"
                height="auto"
              />
              <div className="feature_wrap_box">
                <h2>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>Mobile App &amp; LED Display</strong>
                  </span>
                </h2>
                <span style={{ fontSize: "12pt" }}>
                  The machine can be controlled by a mobile app and led display monitor, and the data can be accessed on
                  both remotely.
                </span>
              </div>
            </div>
            <div className="feature_box">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/ionizer-in-prana-air-fresh-air-machine.png"
                alt="ionizer in prana air fresh air machine"
                width="163"
                height="auto"
              />
              <div className="feature_wrap_box">
                <h2>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>Ionizer</strong>
                  </span>
                </h2>
                <span style={{ fontSize: "12pt" }}>
                  The function of an ionizer is to release negatively charged ions that can reduce airborne pollutants
                  and improve indoor air quality.
                </span>
              </div>
            </div>
            <div className="feature_box">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/uv-light.png"
                alt="uv light in prana air fresh air machine"
                width="163"
                height="auto"
              />
              <div className="feature_wrap_box">
                <h2>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>UV Light</strong>
                  </span>
                </h2>
                <span style={{ fontSize: "12pt" }}>
                  The function of UV light is to disinfect the air by neutralizing airborne germs, such as viruses,
                  bacteria, and mold.
                </span>
              </div>
            </div>
            <div className="feature_box">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/heat-exchanger.png"
                alt="heat exchanger in prana air fresh air machine"
                width="163"
                height="auto"
              />
              <div className="feature_wrap_box">
                <h2>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>Heating</strong>
                  </span>
                </h2>
                <span style={{ fontSize: "12pt" }}>
                  It can also provide warm air anytime whenever you feel cool, especially in winter.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multi Images Section */}
      <div className="container multi-imgs">
        <div className="row">
          <div className="col-md-6">
            <div className="clean-air-machine-imgs">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/07/multi-layer-hepa-filters.png"
                alt="Multi-layer HEPA+ Carbon Filters"
              />
            </div>
            <div className="air-quality-solution-txt">
              <h3>Multi-layer HEPA+ Carbon Filters</h3>
              <p>
                There are multi-layer grade-13 HEPA+ Carbon filters that removes tiny particles like allergens, dust,
                and fine particle matter. This provides more efficient air filtration.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="clean-air-machine-imgs">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/07/large-coverage-area.png"
                alt="Large Coverage Area"
              />
            </div>
            <div className="air-quality-solution-txt">
              <h3>Large Coverage Area</h3>
              <p>
                Its coverage area is 1200 square feet, which is perfect for large rooms or 2 small rooms.It covers 2-3x
                more area than other air purifiers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container multi-imgs-bottom">
        <div className="row">
          <div className="col-md-6">
            <div className="clean-air-machine-imgs">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/07/filtration-of-99.5-efficiency.png"
                alt="Promising Upto 99.5% efficiency"
              />
            </div>
            <div className="air-quality-solution-txt">
              <h3>Promising Upto 99.5% efficiency</h3>
              <p>
                This fresh air machine can filter out upto 99.5% of unwanted particles, gems, mold, bacteria, etc.
                providing garden-fresh air indoor environment.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="clean-air-machine-imgs">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/07/ai-enabled-airflow.png"
                alt="AI-Enabled Air Flow"
              />
            </div>
            <div className="air-quality-solution-txt">
              <h3>AI-Enabled Air Flow</h3>
              <p>
                The machine is designed to understand the number of occupancies present in a room. Then, it automates
                the airflow accordingly without any human intervention.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="container">
        <div className="lets-find-heading">
          <h2 style={{ textAlign: "center" }}>
            Lets Find Out How Prana Air Fresh Air Machine Purifies Indoor Air Pollution
            <span style={{ fontSize: "24pt" }}>
              <sup>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt="logo"
                  width="32"
                  height="24"
                />
              </sup>
            </span>
          </h2>
        </div>
        <div className="video-container">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/_3Sn_BjiwfA"
            title="How Prana Air Fresh Air Machine maintains indoor good air quality"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Indoor Pollutant Section */}
      <div className="container">
        <div className="indoor-pollutant-heading">
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "18pt" }}>Key Parameters, Its Sources &amp; the Health Impacts</span>
          </h2>
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "18pt" }}>By Indoor Air Pollution (AQI)</span>
            <span style={{ fontSize: "24pt" }}>
              <sup>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt="logo"
                  width="32"
                  height="24"
                />
              </sup>
            </span>
          </h2>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <PollutantTabs />
          </div>
          <div className="col-md-6">
            <div className="pollutant-icons">
              <div className="tvocs-iocn">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/tvocs.png" alt="TVOCs Icon" />
              </div>
              <div className="germs-iocn">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/germs-and-bacteria.png"
                  alt="Germs Icon"
                />
              </div>
              <div className="pollutant-indoor-bg">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/pollutants-indoor.jpg"
                  alt="Pollutant Indoor Background"
                />
              </div>
              <div className="pm10-iocn">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/pm10.png" alt="PM10 Icon" />
              </div>
              <div className="pm25-iocn">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/pm2.5.png" alt="PM2.5 Icon" />
              </div>
              <div className="dust-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/dust.png" alt="Dust Icon" />
              </div>
              <div className="co2-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/co2.png" alt="CO2 Icon" />
              </div>
              <div className="hcho-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/hcho.png" alt="HCHO Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Specifications Section */}
      <div className="container product-specifications">
        <div className="prana-air-clean-machine-heading">
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>Prana Air IAQ Solutions</span>
            <span style={{ fontSize: "24pt" }}>
              <sup>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt="logo"
                  width="32"
                  height="24"
                />
              </sup>
            </span>
          </h2>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "12pt" }}>
              Take a look at some photos of the clean air machine, internal and external parts how it looks like. You
              can see the numbers and thickness of the filters.
            </span>
          </p>
        </div>
      </div>

      {/* Image Tabs */}
      <div className="container">
        <ProductImageTabs />
      </div>

      {/* Machine Working Mechanism */}
      <div className="container">
        <div className="machine-working-heading">
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>Machine Working Mechanism</span>
            <span style={{ fontSize: "24pt" }}>
              <sup>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt="logo"
                  width="32"
                  height="24"
                />
              </sup>
            </span>
          </h2>
        </div>
        <div className="matching-workig-img">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2024/01/pranaair-advanced-fresh-air-machine-scaled.jpg"
            alt="pranaair-advanced-fresh-air-machine"
          />
        </div>
        <div className="matching-workig-para">
          <p>
            Take a look at some photos of the clean air machine, internal and external parts how it looks like. You can
            see the numbers and thickness of the filters.
          </p>
        </div>
      </div>

      {/* Filter Technology */}
      <div className="container">
        <div className="firsh-air-two-mode-heading tech-heading">
          <h2>
            Filter Technology
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
              alt="logo"
              width="32"
              height="24"
            />
          </h2>
        </div>
        <div className="matching-workig-para tech-para">
          <p>
            Advanced Multi-Layer HEPA and Carbon Filters ensure 99.97% particle capture. Say goodbye to impurities and
            odors. Breathe fresh, live fresh – get yours now!
          </p>
        </div>
        <div className="technology-image">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/07/technology.jpg"
            alt="filter technology of prana air fresh air machine"
          />
        </div>
      </div>

      {/* Control Air Breath Section */}
      <div className="control-air-breath">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="control-air-breath-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/control-the-fresh-air-mahcine-remotely.png"
                  alt="control the air you breathe with prana air fresh air machine"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="control-breath-heading">
                <h2>
                  Control the Air You Breathe
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt="logo"
                    width="32"
                    height="24"
                  />
                </h2>
                <p>
                  The user has complete control over the machine with an smart app or LED-display Controller to
                  customize and optimize air flow to their exact preferences. Enjoy the benefits of continuous flow of
                  fresh, oxygen-rich air, creating a comfortable and healthy living space. Say goodbye to stale air,
                  allergies, and unpleasant odors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Energy-Efficient Heating Section */}
      <div className="control-air-breath">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="comfort-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/winter-comfort.png" alt="comfort icon" />
              </div>
              <div className="control-breath-heading">
                <h2>
                  Energy-Efficient Heating (Winter Comfort)
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt="logo"
                    width="32"
                    height="24"
                  />
                </h2>
                <p>
                  During colder months, the heating plate warms the air, offering an energy-efficient solution. Users
                  have the option to activate the heating plate, ensuring a comfortable and inviting environment
                  throughout the winter season.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="control-air-breath-img hot-cold-air-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/energy-efficient-heating-winter-comfort.png"
                  alt="energy efficient heating in prana air fresh air machine"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fresh Air Two Modes */}
      <div className="container">
        <div className="firsh-air-two-mode-heading">
          <h2>
            Fresh Air - Two modes
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
              alt="logo"
              width="32"
              height="24"
            />
          </h2>
        </div>
        <div className="row">
          <div className="col-md-6 shdw-line">
            <div className="recicular-img">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/07/recirculation-mode-on-fresh-air-machine.png"
                alt="recirculation mode in prana air fresh air machine"
              />
            </div>
            <div className="firsh-air-two-modes-txt">
              <ul>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/recirculation-door-img.png"
                    alt="recirculation door img"
                  />
                </li>
                <li>
                  <h3>Mode 1 : Recirculation</h3>
                  <p>
                    The air inside the room passes through the fresh air machine via an open damper. The machine filters
                    and recirculates the air back into the room, which is advantageous during high pollution levels
                    outside
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="recicular-img">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/07/outdoor-air-mode-on-fresh-air-machine.png"
                alt="outdoor air mode in prana air fresh air machine"
              />
            </div>
            <div className="firsh-air-two-modes-txt outdoor-txt-mode">
              <ul>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/outdoor-air-door-img.png"
                    alt="outdoor air door img"
                  />
                </li>
                <li>
                  <h3>Mode 2 : Outdoor Air</h3>
                  <p>
                    In this mode, the closed damper enables outside air to enter thefresh air machine for purification,
                    before entering indoors. This is advantageous when indoor pollution levels are high, making air
                    recirculation ineffective.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="container">
        <div className="firsh-air-two-mode-heading">
          <h2>
            Technical Specifications
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
              alt="logo"
              width="32"
              height="24"
            />
          </h2>
        </div>
        <div className="row">
          <div className="broucher-btn">
            <a href="https://www.pranaair.com/wp-content/uploads/2023/07/prana-air-fresh-air-machine-brochure-doc.pdf">
              <img src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png" alt="brochure button" />
              Download Brochure
            </a>
          </div>
        </div>
        <div className="row box-bg">
          <div className="col-md-4">
            <div className="tech-spec">
              <ul>
                <li>
                  <h5>Product:</h5>
                </li>
                <li>
                  <h3>Air purifying machine</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>CADR:</h5>
                </li>
                <li>
                  <h3>
                    1000 m<sup>3</sup>/h
                  </h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>Overbottom Pressure:</h5>
                </li>
                <li>
                  <h3>110 Pa</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>No. of Filters:</h5>
                </li>
                <li>
                  <h3>Multilayer HEPA+ Carbon</h3>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 box-shdw-line">
            <div className="tech-spec">
              <ul>
                <li>
                  <h5>Power:</h5>
                </li>
                <li>
                  <h3>0.45KW</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>Voltage:</h5>
                </li>
                <li>
                  <h3>220V</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>Purification Efficiency:</h5>
                </li>
                <li>
                  <h3>Up to 99.5%</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>Product Dimension:</h5>
                </li>
                <li>
                  <h3>1450 x 450 x 450 (mm)</h3>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tech-spec">
              <ul>
                <li>
                  <h5>Coverage Area:</h5>
                </li>
                <li>
                  <h3>1200 Sq. Ft</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>Filtration Stage:</h5>
                </li>
                <li>
                  <h3>Multiple stage</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>Type of Filter:</h5>
                </li>
                <li>
                  <h3>13 grade HEPA filters</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h5>Device Control:</h5>
                </li>
                <li>
                  <h3>Mobile app &amp; LED monitor</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="container">
        <div className="compare-heading">
          <div className="firsh-air-two-mode-heading">
            <h2>
              Room Air Purifier Vs Prana Air Fresh Air Machine
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                alt="logo"
                width="32"
                height="24"
              />
            </h2>
          </div>
        </div>
      </div>

      <div className="container mob-scroll">
        <div className="row">
          <div className="col-md-2">
            <div className="room-air-purifier-spec">
              <ul>
                <li>
                  <h5>Mode</h5>
                </li>
                <li>
                  <h5>Ventilation</h5>
                </li>
                <li>
                  <h5>CO2 emissions</h5>
                </li>
                <li>
                  <h5>Number of filters</h5>
                </li>
                <li>
                  <h5>Filter life</h5>
                </li>
                <li>
                  <h5>Coverage Area</h5>
                </li>
                <li>
                  <h5>Purification Efficiency</h5>
                </li>
                <li>
                  <h5>PM2.5 &amp; PM10</h5>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div className="room-air-purifier">
              <h3>Room Air Purifier</h3>
              <ul>
                <li className="list-bg">
                  <h5>Re-circulation and re-filtration of the same air.</h5>
                </li>
                <li>
                  <h5>It does not support a ventilation mechanism.</h5>
                </li>
                <li className="list-bg">
                  <h5>No, it cannot purify co2 gas.</h5>
                </li>
                <li>
                  <h5>It may have 1-2 filters which may or may not include HEPA filters.</h5>
                </li>
                <li className="list-bg">
                  <h5>The average life is 6 months depending on the air quality level.</h5>
                </li>
                <li>
                  <h5>It can cover an area from 250 to 400 sq. ft.</h5>
                </li>
                <li className="list-bg">
                  <h5>Up to 98% efficiency rate</h5>
                </li>
                <li>
                  <h5>
                    It can filter particulate matter (PM2.5, PM10) to an extent, as the same air is recirculated inside
                    the room.
                  </h5>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div className="room-air-purifier prana-air-fresh-machine">
              <h3>Prana Air Fresh Air Machine</h3>
              <ul className="tabs-list">
                <li>
                  <h5>It purifies the outside air and then brings that filtered air indoors.</h5>
                </li>
                <li>
                  <h5>It supports the ventilation mechanism.</h5>
                </li>
                <li>
                  <h5>Yes, it purifies gases including CO2.</h5>
                </li>
                <li>
                  <h5>It has 3 separate 13-grade multi-layer True HEPA filters.</h5>
                </li>
                <li>
                  <h5>It can last up to 1 year depending upon the ambient air quality.</h5>
                </li>
                <li>
                  <h5>It can cover a 1200 sq. ft. area.</h5>
                </li>
                <li>
                  <h5>Up to 99.5% efficiency rate</h5>
                </li>
                <li>
                  <h5>
                    It purifies the air from pollutants like PM2.5 and 10 as it filters these out from the air before
                    they can enter indoors.
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* HVAC vs Fresh Air Machine */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              className="havc-img"
              src="https://www.pranaair.com/wp-content/uploads/2022/06/hvac-machine-1024x572.jpg"
              alt="difference between hvac system and prana air fresh air machine"
            />
          </div>
          <div className="col-md-6">
            <div className="diff-vs-fresh-air-heading">
              <h2>A Big Difference Between HVAC System And</h2>
              <h2>
                Prana Air Fresh Air Machine
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt="logo"
                  width="32"
                  height="24"
                />
              </h2>
              <p style={{ textAlign: "justify" }}>
                HVAC (Heating, Ventilation, and Air Conditioning) systems are found in shopping malls, hotels, and
                hospitals, among other places. HVAC systems are mostly used for heating, air conditioning, and
                ventilation, as the name indicates. Although no such air filters are put within an HVAC system, it may
                have 1-2 filters that may filter out dust particles visible to the naked eye. However, as the rate of
                pollution and poor air quality rises, there is an urgent need to adopt smarter options. Dust, pollen,
                mold, smoke, particulate matter, pet dander, and VOCs are all filtered out by the HEPA air filtering
                system used in Prana Airs Fresh Air Machine. HEPA stands for High-Efficiency Particulate Absorbing
                Filters, and it is, as the name implies, more efficient and less expensive than typical HVAC
                purification systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="container">
        <div className="app-prana-heading">
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "18pt" }}>Applications of Prana Air Fresh Air Machine</span>
            <span style={{ fontSize: "24pt" }}>
              <sup>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt="logo"
                  width="32"
                  height="24"
                />
              </sup>
            </span>
          </h2>
        </div>

        <div className="applications-grid">
          <div className="application-card">
            <div className="application-overlay">
              <p>
                In hospitals, the transmission of airborne viruses and bacteria pathogens, as well as diseases, is
                highly common. Patients conditions may deteriorate and recovery may be hindered if they breathe
                contaminated air. Prana Airs air Fresh air machines are essential for preventing the transmission of
                such harmful pathogens.
              </p>
            </div>
            <img
              src="https://www.pranaair.com/wp-content/uploads/2022/06/fresh-air-machine-for-hospital.jpg"
              alt="fresh air machine for hospital"
            />
            <div className="application-title">HOSPITALS</div>
          </div>

          <div className="application-card">
            <div className="application-overlay">
              <p>
                In hotels, poor ventilation is a serious issue. Many chemicals used in hotel cleaning, sanitization, and
                room refreshing may release pollutants that are potentially dangerous to people. They can irritate your
                eyes, nose, and throat, as well as cause respiratory tract harm. Long-term side effects might aggravate
                asthma and bronchitis. Fresh air machines are extremely helpful in such environments.
              </p>
            </div>
            <img
              src="https://www.pranaair.com/wp-content/uploads/2022/06/fresh-air-machine-for-hotel.jpg"
              alt="fresh air machine for hotel"
            />
            <div className="application-title">HOTELS</div>
          </div>

          <div className="application-card">
            <div className="application-overlay">
              <p>
                Fresh Air Machines are being installed in offices because they filter various contaminants and therefore
                minimize air pollution indoors. Employees are more productive when they work in a cleaner atmosphere.
              </p>
            </div>
            <img
              src="https://www.pranaair.com/wp-content/uploads/2022/06/fresh-air-machine-for-office.jpg"
              alt="fresh air machine for office"
            />
            <div className="application-title">OFFICES</div>
          </div>

          <div className="application-card">
            <div className="application-overlay">
              <p>
                Students are more susceptible to air-borne diseases as they inhale more air as compared to adults.
                Stuffiness in the air can hinder their concentration levels as well as early lung development. Breathing
                cleaner air will increase the concentration level among students and will prevent infections that spread
                contagious diseases.
              </p>
            </div>
            <img
              src="https://www.pranaair.com/wp-content/uploads/2022/06/fresh-air-machine-for-school.jpg"
              alt="fresh air machine for school"
            />
            <div className="application-title">SCHOOLS/UNIVERSITIES</div>
          </div>

          <div className="application-card">
            <div className="application-overlay">
              <p>
                Malls have traditionally used HVAC systems. However, as peoples health concerns grow, they want to
                breathe clean air indoors as well. Because HVAC systems lack an air filtering component, HEPA filtration
                systems are being added to clean the ambient air that enters congested locations such as malls.
              </p>
            </div>
            <img
              src="https://www.pranaair.com/wp-content/uploads/2022/06/fresh-air-machine-for-shopping-malls.png"
              alt="fresh air machine for shopping malls"
            />
            <div className="application-title">SHOPPING MALLS</div>
          </div>

          <div className="application-card">
            <div className="application-overlay">
              <p>
                Pollutants can cause more harm to the human body indoors than outdoors. As we spent 80-95% of our life
                indoors, there is a need for cleaner air to sustain. Major sources of indoor pollutants are those that
                seep into your homes from ambient air. A fresh air machine will clean the air that enters indoors
                beforehand so the cleaner air can enter indoors. This is especially good for youngsters in their growth
                stages, the elderly, and healthy people as well.
              </p>
            </div>
            <img
              src="https://www.pranaair.com/wp-content/uploads/2022/06/fresh-air-machine-for-home.jpg"
              alt="fresh air machine for home"
            />
            <div className="application-title">HOME</div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
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
      <ContactForm pageName="Fresh Air Machine Page" />

      {/* FAQ Section */}
      <div className="container">
        <div className="faq-heading">
          <h3 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "18pt" }}>Frequently Asked Questions</span>
            <span style={{ fontSize: "18pt" }}>
              About Prana Air Fresh Air Machine
              <sup>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt="logo"
                  width="32"
                  height="24"
                />
              </sup>
            </span>
          </h3>
        </div>
        <FaqAccordion faqItems={faqItems} />
      </div>
    </div>
  )
}
