"use client"

import { useEffect, useState } from "react"
import "./style.css"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"

export default function HospitalPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeFaq, setActiveFaq] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeSourceSlide, setActiveSourceSlide] = useState(0)
  const [activeAppSlide, setActiveAppSlide] = useState(0)

  // Responsive settings for different carousels
  const healthImpactResponsive = {
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

  const sourcesResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
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

  const appSliderResponsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  }

  const industrialAppsResponsive = {
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

  // Toggle FAQ
  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null)
    } else {
      setActiveFaq(index)
    }
  }

  // Health impacts data
  const healthImpacts = [
    {
      title: "Weakened Immunity",
      description: "Lowered ability to fight infections.",
      icon: "https://www.pranaair.com/wp-content/uploads/2023/08/hospital-weakened-immunity.png",
    },
    {
      title: "Neurological problems",
      description: "Dementia and Alzheimer's disease.",
      icon: "https://www.pranaair.com/wp-content/uploads/2023/08/hospital-neurological-problems.png",
    },
    {
      title: "Respiratory problems",
      description: "Coughing, wheezing, and shortness of breath",
      icon: "https://www.pranaair.com/wp-content/uploads/2023/08/Mask-group.png",
    },
    {
      title: "Cancer",
      description: "Lung cancer, as well as other types of cancer.",
      icon: "https://www.pranaair.com/wp-content/uploads/2023/08/hospital-respiratory-problems.png",
    },
    {
      title: "Chronic respiratory diseases",
      description: "Heart disease, stroke, and arrhythmias.",
      icon: "https://www.pranaair.com/wp-content/uploads/2023/08/hospital-cardiovascular-problems.png",
    },
  ]

  // Air pollutants data
  const airPollutants = [
    {
      title: "PM & PM10",
      description: "It irritates the lungs and airways, leading to respiratory problems.",
      icon: "https://www.pranaair.com/wp-content/uploads/2023/07/pm-icon.png",
      position: { top: "20%", left: "20%" },
    },
    {
      title: "VOCs",
      description: "It irritates the eyes, nose, and throat.",
      icon: "https://www.pranaair.com/wp-content/uploads/2023/07/vocs-icon.png",
      position: { top: "15%", right: "20%" },
    },
    {
      title: "CO",
      description: "It reduces the amount of oxygen that the blood can carry",
      icon: "https://www.pranaair.com/wp-content/uploads/2023/02/co.png",
      position: { top: "45%", left: "30%" },
    },
    {
      title: "Ozone",
      description: "Respiratory irritation, worsens asthma",
      icon: "https://www.pranaair.com/wp-content/uploads/2023/07/ozone-icon.png",
      position: { bottom: "25%", left: "25%" },
    },
    {
      title: "HCHO",
      description: "Irritation, allergies, respiratory discomfort",
      icon: "https://www.pranaair.com/wp-content/uploads/2023/07/hcho-icon.png",
      position: { top: "35%", right: "15%" },
    },
    {
      title: "Microbes",
      description: "It can cause respiratory infections, skin infections",
      icon: "https://www.pranaair.com/wp-content/uploads/2023/04/microbes-icon.png",
      position: { bottom: "30%", right: "20%" },
    },
  ]

  // Sources of air pollution data
  const pollutionSources = [
    {
      title: "Equipment",
      description:
        "Hospitals use a variety of equipment that can emit pollutants into the air, such as generators, sterilizers, and medical devices. These pollutants can include particulate matter (PM), VOCs, and ozone.",
      image: "https://www.pranaair.com/wp-content/uploads/2023/08/air-pollutants-from-hospital-equipments.jpg",
    },
    {
      title: "Waste",
      description:
        "Hospitals generate a lot of waste, some of which can be burned or incinerated, releasing pollutants into the air. These pollutants can include PM, VOCs, and heavy metals.",
      image:
        "https://www.pranaair.com/wp-content/uploads/2023/08/air-pollutants-from-cleaning-products-waste-materials.jpg",
    },
    {
      title: "Cleaning products",
      description:
        "Hospitals use a variety of cleaning products that can contain VOCs, which can pollute the air. These pollutants can irritate the eyes, nose, and throat.",
      image: "https://www.pranaair.com/wp-content/uploads/2023/08/air-pollutants-from-cleaning-products.jpg",
    },
    {
      title: "High occupancy",
      description:
        "Air pollution in hospitals due to high occupancy and CO2 can be a serious concern, as it can impact the health & well-being of patients, healthcare workers, and visitors.",
      image: "https://www.pranaair.com/wp-content/uploads/2023/08/high-co2-from-high-occupancy.jpg",
    },
  ]

  // App slider data
  const appSlides = [
    {
      title: "TV Dashboard App",
      description:
        "AQI TV App can be used to track air pollution levels in a hospital by displaying real-time data on a large screen. This makes it easy for staff and patients to see the air quality levels and to take steps to protect their health if necessary.",
      image: "https://www.pranaair.com/wp-content/uploads/2023/08/aqi-tv-app-data-in-hospital.jpg",
    },
    {
      title: "Web-Dashboard / Tablet App",
      description:
        "By using an AQI web-dashboard and table app, hospitals can improve their ability to monitor and track air pollution levels. This information can be used to protect the health of staff and patients and to improve the overall quality of care in the hospital.",
      image: "https://www.pranaair.com/wp-content/uploads/2023/08/aqi-web-or-table-app-for-hospital.jpg",
    },
    {
      title: "AQI Mobile App",
      description:
        "This app can be used to monitor and track air pollution levels in a hospital. It displays real-time data and sends alerts when air quality levels reach unhealthy levels.",
      image: "https://www.pranaair.com/wp-content/uploads/2023/08/aqi-app-to-check-hospital-air-quality.jpg",
    },
  ]

  // Monitor data for carousel
  const monitorSlides = [
    {
      title: "SQUAIR Air Monitor",
      description:
        "Experience the remarkable Prana Air SQUAIR Monitor – a next-generation smart indoor air quality tracking device for hospital environments. This innovative device goes beyond the ordinary, with the ability to detect odors, gauge humidity levels, and meticulously analyze a wide range of toxic gas parameters.",
      features: [
        "Detects TVOCs (odor), temperature, and humidity as well",
        "Mobile & Smart TV App Enabled",
        "Reliable Web Dashboard Accessibility",
      ],
      image: "https://www.pranaair.com/wp-content/uploads/2023/08/prana-air-squair-monitore.jpg",
      hasRentOption: true,
    },
    {
      title: "Sensible+ Monitor",
      description:
        "Presenting our state-of-the-art smart device, boasting a sleek 7-inch touchscreen display that delivers in-depth, real-time air quality data insights specifically tailored for hospitals.",
      features: ["7 Inch LED Touch Screen Display", "5000 mAh Battery InBuilt", "WiFi Connectivity With Mobile App"],
      image: "https://www.pranaair.com/wp-content/uploads/2023/08/sensible-air-quality-monitor-for-hospital.jpg",
      hasRentOption: false,
    },
  ]

  // Client logos
  const clientLogos = [
    { name: "Morgan Stanley", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/morgan-stanley-logo.png" },
    { name: "Ola", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/ola-logo.png" },
    { name: "Microsoft", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/microsoft-logo.png" },
    { name: "IIT", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/iit-logo.png" },
    { name: "Renault Nissan", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/renault-nissan-logo.png" },
    { name: "Tata", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/tata-logo.png" },
    { name: "CSIR", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/csir-logo.png" },
    { name: "Mahindra", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/mahindra-logo.png" },
    { name: "Interglobe", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/interglobe-logo.png" },
    { name: "GMDA", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/gmda-logo.png" },
    { name: "Leighton", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/leighton-logo.png" },
    { name: "Havells", logo: "https://www.pranaair.com/wp-content/uploads/2022/08/havells-logo.png" },
  ]

  // Industrial applications data
  const industrialApps = [
    {
      title: "Solutions for Bank",
      image: "https://www.pranaair.com/wp-content/uploads/2023/01/air-quality-solutions-for-banks.jpg",
      alt: "air quality solutions for banks",
      link: "https://www.pranaair.com/solutions-by-application/bank-financial-institutions/",
    },
    {
      title: "Solutions for Hotel",
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-hotel.jpg",
      alt: "air quality solutions for hotel business",
      link: "https://www.pranaair.com/solutions-by-application/hotel-businesses/",
    },
    {
      title: "Solutions for Restaurant",
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-restaurant.jpg",
      alt: "air quality solutions for restaurants",
      link: "https://www.pranaair.com/solutions-by-application/restaurants/",
    },
    {
      title: "Solutions for Airport",
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-airport.jpg",
      alt: "air quality solutions for airport",
      link: "https://www.pranaair.com/solutions-by-application/airports/",
    },
    {
      title: "Solutions for Fitness & Gym",
      image: "https://www.pranaair.com/wp-content/uploads/2023/04/air-quality-solution-for-fitness-gym.jpg",
      alt: "air quality solutions for fitness and gym",
      link: "https://www.pranaair.com/solutions-by-application/fitness-center-gym/",
    },
    {
      title: "Solutions for Parking Lot",
      image: "https://www.pranaair.com/wp-content/uploads/2023/05/solution-for-parking-lot.jpg",
      alt: "air quality solutions for car parking lot",
      link: "https://www.pranaair.com/solutions-by-application/parking-lot/",
    },
    {
      title: "Solutions for Washroom",
      image: "https://www.pranaair.com/wp-content/uploads/2023/05/air-solutions-for-washroom-and-bathroom.jpg",
      alt: "air quality solutions for washroom or bathroom",
      link: "https://www.pranaair.com/solutions-by-application/washroom-and-bathroom/",
    },
    {
      title: "Solutions for Institutes",
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-institute.jpg",
      alt: "air quality solutions for schools and institutes",
      link: "https://www.pranaair.com/solutions-by-application/institutes/",
    },
  ]

  // FAQ data
  const faqData = [
    {
      question: "1. What is Prana Air's expertise in air quality monitoring for hospitals?",
      answer:
        "Prana Air specializes in providing advanced air quality monitoring solutions specifically tailored for hospital environments, ensuring a healthier and safer indoor atmosphere.",
    },
    {
      question: "2. What benefits can Prana Air system bring to hospitals?",
      answer:
        "Prana Air systems help hospitals improve patient recovery rates, enhance infection control, and create a more comfortable healing environment by providing purified air rich in oxygen while filtering out pollutants and odors.",
    },
    {
      question: "3. Is Prana Air's system easy to integrate into existing hospital infrastructure?",
      answer:
        "Yes, Prana Air solutions are designed for seamless integration, minimizing disruption to hospital operations. Our team ensures a smooth setup and offers ongoing support.",
    },
    {
      question: "4. What type of pollutants can the Prana Air fresh air system detect and filter?",
      answer:
        "The fresh air machine system can eliminate a wide range of pollutants, including VOCs, particulate matter, odors, and allergens. Its filtration technology effectively removes these contaminants.",
    },
    {
      question: "5. Does Prana Air provide maintenance and support for their systems?",
      answer:
        "Yes, Prana Air offers comprehensive maintenance and support services to keep the air quality monitoring system running optimally in hospitals.",
    },
    {
      question: "6. Is the data from the Prana Air monitor accessible remotely?",
      answer:
        "Absolutely. Prana Air provides a user-friendly platform that allows hospitals to access real-time and historical data remotely, enabling prompt decision-making and quick responses to air quality fluctuations.",
    },
    {
      question: "7. Is the data generated by the Prana Air monitor compliant with industry standards?",
      answer:
        "Yes, Prana Air's monitoring solutions adhere to industry standards for accuracy and reliability, ensuring hospitals receive data that meets quality and regulatory requirements.",
    },
    {
      question: "8. How does the Prana Air monitor contribute to creating a healthier hospital environment?",
      answer:
        "By providing accurate, real-time data, the Prana Air monitor empowers hospitals to proactively address air quality concerns, enhance patient care, protect staff health, and maintain a safe and comfortable atmosphere that supports healing and recovery.",
    },
  ]

  // Add click handlers for school box items
  useEffect(() => {
    const handleSchoolBoxClick = () => {
      const schoolBoxItems = document.querySelectorAll(".school_box_cntr li")

      schoolBoxItems.forEach((item) => {
        item.addEventListener("click", function () {
          const textBox = this.querySelector(".schhol_text_box")
          if (textBox) {
            // Hide all other text boxes first
            document.querySelectorAll(".schhol_text_box").forEach((box) => {
              if (box !== textBox) {
                box.style.display = "none"
              }
            })

            // Toggle the clicked text box
            textBox.style.display = textBox.style.display === "none" || textBox.style.display === "" ? "block" : "none"
          }
        })
      })
    }

    // Call the function after component mounts
    handleSchoolBoxClick()

    // Cleanup event listeners on unmount
    return () => {
      const schoolBoxItems = document.querySelectorAll(".school_box_cntr li")
      schoolBoxItems.forEach((item) => {
        item.removeEventListener("click", () => {})
      })
    }
  }, [])

  return (
    <main className="hospital-page">
      {/* Banner Section - Updated to match the modern design */}
      <section className="modern-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 banner-content">
              <h1>
                Air quality monitoring & solutions for <span className="text-primary">Hospital</span>
              </h1>
              <p>
                Air quality management is essential for ensuring the health and safety of patients, staff, and visitors
                in hospitals.
              </p>
              <p className="tagline">Fresh Air, Healthy Life</p>
              <a href="#get_in_touch" className="cta-button">
                Request A Quote
              </a>
            </div>
            <div className="col-lg-6 banner-image">{/* Banner image is set in CSS background */}</div>
          </div>
        </div>
      </section>

      {/* Factors Affecting Air Quality Section - Updated with modern icons and layout */}
      <section className="factors-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              Factors affecting air quality in <span className="text-primary">Hospital</span>
            </h2>
            <p>Some of the key components of air pollution in hospitals include:</p>
          </div>

          <div className="factors-grid">
            <div className="factor-card">
              <div className="factor-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/pm-icon.png" alt="PM icon" />
              </div>
              <h3>PM</h3>
              <p>Comes from surgeries, medical equipment, construction, HVAC systems</p>
            </div>

            <div className="factor-card">
              <div className="factor-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/co2-icon.png" alt="CO2 icon" />
              </div>
              <h3>CO2</h3>
              <p>Higher the number of occupancies, higher the CO2 level</p>
            </div>

            <div className="factor-card">
              <div className="factor-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/02/co.png" alt="CO icon" />
              </div>
              <h3>CO</h3>
              <p>It can come from ventilation systems, medical equipment, and waste disposal</p>
            </div>

            <div className="factor-card">
              <div className="factor-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/ozone-icon.png" alt="Ozone icon" />
              </div>
              <h3>Ozone</h3>
              <p>Ozone generators are used to disinfect water, air, and medical equipments</p>
            </div>

            <div className="factor-card">
              <div className="factor-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/vocs-icon.png" alt="VOCs icon" />
              </div>
              <h3>VOCs</h3>
              <p>Found in cleaning agents, disinfectants, paints, adhesives, and medical gases</p>
            </div>

            <div className="factor-card">
              <div className="factor-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/hcho-icon.png" alt="HCHO icon" />
              </div>
              <h3>HCHO</h3>
              <p>Building materials like pressed wood, carpets, furniture, and certain medical devices</p>
            </div>

            <div className="factor-card">
              <div className="factor-icon">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/04/microbes-icon.png" alt="Microbes icon" />
              </div>
              <h3>Microbes</h3>
              <p>Patients, healthcare workers, the environment, food, and water</p>
            </div>
          </div>
        </div>
      </section>

      {/* Air Pollutants Section - Full-width with always visible information */}
      <section className="air-pollutants-section">
        <div className="section-header text-center">
          <h2>
            Air <span className="text-primary">Pollutants</span> in Hospitals
          </h2>
          <p>Common air pollutants found in hospitals and their health effects</p>
        </div>

        <div className="pollutants-visual-fullwidth">
          <div className="hospital-image-container">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2023/08/air-pollutants-in-hospitals.jpg"
              alt="Hospital environment with air pollutants visualization"
              className="img-fluid"
            />

            <div className="pollutants-overlay">
              {/* PM & PM10 */}
              <div className="pollutant-item-visible" style={{ top: "20%", left: "20%" }}>
                <div className="pollutant-icon-visible">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/07/pm-icon.png" alt="PM & PM10" />
                </div>
                <div className="pollutant-connector" style={{ width: "80px", top: "30px", left: "60px" }}></div>
                <div className="pollutant-info-visible" style={{ left: "140px", top: "-10px" }}>
                  <h3>PM & PM10</h3>
                  <p>It irritates the lungs and airways, leading to respiratory problems.</p>
                </div>
              </div>

              {/* VOCs */}
              <div className="pollutant-item-visible" style={{ top: "15%", right: "30%" }}>
                <div className="pollutant-icon-visible">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/07/vocs-icon.png" alt="VOCs" />
                </div>
                <div className="pollutant-connector" style={{ width: "80px", top: "30px", left: "60px" }}></div>
                <div className="pollutant-info-visible" style={{ left: "140px", top: "-10px" }}>
                  <h3>VOCs</h3>
                  <p>It irritates the eyes, nose, and throat.</p>
                </div>
              </div>

              {/* CO */}
              <div className="pollutant-item-visible" style={{ top: "45%", left: "30%" }}>
                <div className="pollutant-icon-visible">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/02/co.png" alt="CO" />
                </div>
                <div className="pollutant-connector" style={{ width: "80px", top: "30px", left: "60px" }}></div>
                <div className="pollutant-info-visible" style={{ left: "140px", top: "-10px" }}>
                  <h3>CO</h3>
                  <p>It reduces the amount of oxygen that the blood can carry</p>
                </div>
              </div>

              {/* HCHO */}
              <div className="pollutant-item-visible" style={{ top: "30%", right: "15%" }}>
                <div className="pollutant-icon-visible">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/07/hcho-icon.png" alt="HCHO" />
                </div>
                <div className="pollutant-connector" style={{ width: "80px", top: "30px", right: "60px" }}></div>
                <div className="pollutant-info-visible" style={{ right: "140px", top: "-10px" }}>
                  <h3>HCHO</h3>
                  <p>Irritation, allergies, respiratory discomfort</p>
                </div>
              </div>

              {/* Ozone */}
              <div className="pollutant-item-visible" style={{ bottom: "30%", left: "25%" }}>
                <div className="pollutant-icon-visible">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/07/ozone-icon.png" alt="Ozone" />
                </div>
                <div className="pollutant-connector" style={{ width: "80px", top: "30px", left: "60px" }}></div>
                <div className="pollutant-info-visible" style={{ left: "140px", top: "-10px" }}>
                  <h3>Ozone</h3>
                  <p>Respiratory irritation, worsens asthma</p>
                </div>
              </div>

              {/* Microbes */}
              <div className="pollutant-item-visible" style={{ bottom: "25%", right: "20%" }}>
                <div className="pollutant-icon-visible">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/04/microbes-icon.png" alt="Microbes" />
                </div>
                <div className="pollutant-connector" style={{ width: "80px", top: "30px", right: "60px" }}></div>
                <div className="pollutant-info-visible" style={{ right: "140px", top: "-10px" }}>
                  <h3>Microbes</h3>
                  <p>It can cause respiratory infections, skin infections</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Impacts Section - Updated with modern card design */}
      <section className="health-impacts-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              Health <span className="text-primary">Impacts</span>
            </h2>
            <p>Poor air quality in hospitals can have a number of negative health impacts, including:</p>
          </div>

          <div className="health-impacts-slider">
            <Carousel
              responsive={healthImpactResponsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              beforeChange={(nextSlide) => setActiveSlide(nextSlide)}
              partialVisible={false}
              centerMode={false}
            >
              {healthImpacts.map((impact, index) => (
                <div key={index} className="health-impact-card">
                  <div className="impact-icon">
                    <img src={impact.icon || "/placeholder.svg"} alt={impact.title} />
                  </div>
                  <h3>{impact.title}</h3>
                  <p>{impact.description}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Quote Section - Updated with modern quote design */}
      {/* Quote Section - Updated to match reference design */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-container">
            <div className="quote-content">
              <h2>DO YOU KNOW?</h2>
              <p>
                The World Health Organization (WHO) estimates that indoor air pollution causes 4.3 million deaths each
                year worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources of Air Pollution Section - NEW */}
      <section className="pollution-sources-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              Sources of air pollution in <span className="text-primary">Hospital</span>
            </h2>
            <p>
              Air pollutants in hospitals stem from medical procedures (VOCs, aerosols), cleaning chemicals (VOC
              emissions), medical equipment (particulates), HVAC systems (contaminant recirculation),
              construction/renovation (dust, particles), and human activity (outdoor pollutants)
            </p>
          </div>

          <div className="sources-slider">
            <Carousel
              responsive={sourcesResponsive}
              infinite={true}
              showDots={true}
              arrows={true}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="sources-carousel-container"
              dotListClass="sources-carousel-dots"
              itemClass="sources-carousel-item"
              beforeChange={(nextSlide) => setActiveSourceSlide(nextSlide)}
              partialVisible={false}
              centerMode={false}
            >
              {pollutionSources.map((source, index) => (
                <div key={index} className="source-card">
                  <div className="source-image">
                    <img src={source.image || "/placeholder.svg"} alt={source.title} className="img-fluid" />
                  </div>
                  <div className="source-content">
                    <h3>{source.title}</h3>
                    <p>{source.description}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions Section - Updated with modern tabs and card design */}
      <section className="solutions-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              Air Quality <span className="text-primary">Solutions</span>
            </h2>
            <p>
              Air quality monitoring is an essential part of air quality management in hospitals. By monitoring air
              quality, hospitals can identify areas where air quality is poor and take steps to improve it.
            </p>
          </div>

          <div className="solutions-tabs">
            <div className="tabs-header">
              <button className={activeTab === 0 ? "active" : ""} onClick={() => setActiveTab(0)}>
                Air Quality Monitors
              </button>
              <button className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>
                Fresh Air Solution
              </button>
            </div>

            <div className="tabs-content">
              <div className={`tab-pane ${activeTab === 0 ? "active" : ""}`}>
                <div className="solution-card monitor-slider-container">
                  <Carousel
                    responsive={{
                      all: {
                        breakpoint: { max: 4000, min: 0 },
                        items: 1,
                      },
                    }}
                    infinite={true}
                    showDots={true}
                    arrows={true}
                    keyBoardControl={true}
                    customTransition="all .5s"
                    transitionDuration={500}
                    containerClass="monitor-carousel-container"
                    dotListClass="monitor-carousel-dots"
                    itemClass="monitor-carousel-item"
                    partialVisible={false}
                    centerMode={false}
                  >
                    {monitorSlides.map((monitor, index) => (
                      <div key={index} className="monitor-slide">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="monitor-content">
                              <h3>{monitor.title}</h3>
                              <p>{monitor.description}</p>
                              <ul className="feature-list">
                                {monitor.features.map((feature, i) => (
                                  <li key={i}>{feature}</li>
                                ))}
                              </ul>
                              <div className="action-buttons">
                                <a href="#" className="primary-button">
                                  Know More
                                </a>
                                {monitor.hasRentOption && (
                                  <a href="#" className="secondary-button">
                                    Looking to Rent?
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="monitor-image">
                              <img
                                src={monitor.image || "/placeholder.svg"}
                                alt={monitor.title}
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>

              <div className={`tab-pane ${activeTab === 1 ? "active" : ""}`}>
                <div className="solution-card">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="solution-image">
                        <img
                          src="https://www.pranaair.com/wp-content/uploads/2023/08/fresh-air-solutions-for-hospital-scaled.jpg"
                          alt="Fresh Air Machine"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="solution-content">
                        <h3>Fresh Air Machine</h3>
                        <p>
                          Prana Air fresh air machine is an advanced air purifier that can remove up to 99.5% of
                          pollutants, allergens, odors, and enough oxygen for hospitals. It is easy to use and maintain,
                          and it can be controlled with a mobile app or a remote control. The machine is a great way to
                          improve the air quality in hospitals and create a healthier environment for patients, staff,
                          and visitors.
                        </p>
                        <ul className="feature-list">
                          <li>Comes with multi-layers HEPA Filters</li>
                          <li>Promising you up to 99.5% efficiency</li>
                          <li>Improves air ventilation</li>
                        </ul>
                        <div className="action-buttons">
                          <a href="#" className="primary-button">
                            Know More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Solutions Section - NEW */}
      <section className="app-solutions-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              App <span className="text-primary">Solutions</span>
            </h2>
            <p>Our mobile and dashboard applications help you monitor and manage air quality in real-time</p>
          </div>

          <div className="app-slider-container">
            <Carousel
              responsive={appSliderResponsive}
              infinite={true}
              showDots={false}
              arrows={true}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="app-carousel-container"
              beforeChange={(nextSlide) => setActiveAppSlide(nextSlide)}
              partialVisible={false}
              centerMode={false}
            >
              {appSlides.map((app, index) => (
                <div key={index} className="app-slide">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="app-content">
                        <h3>{app.title}</h3>
                        <p>{app.description}</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="app-image">
                        <img src={app.image || "/placeholder.svg"} alt={app.title} className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Comparison Section - Updated with modern comparison layout */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              The <span className="text-primary">Comparison</span>
            </h2>
            <p>
              Prana Air Fresh Air Machine elevates hospital air quality by filtering out pollutants, allergens, and
              odors while delivering ample oxygen. Without it, the air may lack purification and oxygenation,
              potentially impacting both patient recovery and infection control.
            </p>
          </div>

          <div className="comparison-container">
            <div className="row">
              <div className="col-md-6">
                <div className="comparison-card negative">
                  <h3>Without Fresh Air Solutions</h3>
                  <ul className="comparison-list negative">
                    <li>Increase risk of infection</li>
                    <li>Reduce comfort level</li>
                    <li>Increase absenteeism</li>
                  </ul>
                  <div className="comparison-chart">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/08/without-fresh-air-solution-in-hospital.jpeg"
                      alt="Air Quality Graph Without Fresh Air Solutions"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="comparison-card positive">
                  <h3>With Fresh Air Solutions</h3>
                  <ul className="comparison-list positive">
                    <li>Increase work productivity</li>
                    <li>Increase comfort level</li>
                    <li>Reduce risk of infection</li>
                  </ul>
                  <div className="comparison-chart">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/08/with-fresh-air-solution-in-hospital.jpeg"
                      alt="Air Quality Graph With Fresh Air Solutions"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientele Section - NEW */}
      <section className="clientele-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              Our <span className="text-primary">Clientele</span>
            </h2>
            <p>We are honored to work with so many well-known companies.</p>
          </div>

          <div className="client-logos">
            <div className="row">
              {clientLogos.map((client, index) => (
                <div key={index} className="col-6 col-md-3 client-logo-wrapper">
                  <div className="client-logo">
                    <img src={client.logo || "/placeholder.svg"} alt={client.name} className="img-fluid" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated with modern contact form */}
      <section id="get_in_touch" className="contact-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p>Please let us know your requirements so we can get back to you soon.</p>
          </div>

          <div className="contact-container">
            <div className="row">
              <div className="col-lg-4">
                <div className="contact-info">
                  <h3>Contact Info</h3>
                  <p>Looking for air quality solutions for Hospital?</p>
                  <ul className="contact-details">
                    <li>
                      <span className="icon">📞</span>
                      Phone Number: (+91) 73918-73918
                    </li>
                    <li>
                      <span className="icon">✉️</span>
                      Email Address: info@purelogic.in
                    </li>
                    <li>
                      <span className="icon">📍</span>
                      Office Location: 706, 7th Floor, Sec 10, Rohini, Delhi 85, India
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="contact-form">
                  <form>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <label>Your Full Name</label>
                        <input type="text" className="form-control" placeholder="Enter your name" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label>Your Phone No</label>
                        <input type="tel" className="form-control" placeholder="Enter your phone number" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>Your Email</label>
                        <input type="email" className="form-control" placeholder="Enter your email" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <label>Your Organisation</label>
                        <input type="text" className="form-control" placeholder="Enter your organisation" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <label className="message-label">Message</label>
                        <textarea className="form-control" rows="4" placeholder="Write message here"></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <button type="submit" className="submit-button">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p>Have questions? Were here to help.</p>
          </div>

          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFaq === index ? "active" : ""}`}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">{activeFaq === index ? "−" : "+"}</span>
                </div>
                <div className="faq-answer" style={{ display: activeFaq === index ? "block" : "none" }}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Applications Section */}
      <section className="industrial-applications-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              Industrial <span className="text-primary">Applications</span>
            </h2>
            <p>
              Regardless of how small or large a business is, Prana Air offers a wide choice of Smart, affordable, and
              highly accurate air quality solutions for various industries.
            </p>
          </div>

          <div className="applications-slider">
            <Carousel
              responsive={industrialAppsResponsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .2s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              partialVisible={false}
              centerMode={false}
            >
              {industrialApps.map((item, index) => (
                <div key={index} className="application-card">
                  <div className="application-image">
                    <a href={item.link}>
                      <img src={item.image || "/placeholder.svg"} alt={item.alt} />
                    </a>
                  </div>
                  <a href={item.link} className="application-title">
                    <h4>{item.title}</h4>
                  </a>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  )
}

