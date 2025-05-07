"use client"
import "./styles.css"
import "react-multi-carousel/lib/styles.css"

export default function AmmoniaPage() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <main>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          paddingTop: "130px",
          paddingBottom: "130px",
          backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2023/02/ammonia-nh3-air-pollutant.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="hero-content" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
            <h2>
              <span className="whitetext" style={{ fontSize: "24pt" }}>
                <img
                  className="alignnone wp-image-67627"
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/nh3-ammonia-icon-290x300.png"
                  alt="nh3 ammonia icon"
                  width="82"
                  height="85"
                />{" "}
                Ammonia (NH<sub>3</sub>)
              </span>
            </h2>
            <p className="whitetext" style={{ textAlign: "left", wordWrap: "break-word", width: "auto" }}>
              <span style={{ fontSize: "16pt" }}>
                Ammonia (NH<sub>3</sub>) is a toxic gas that is made up of one nitrogen and three hydrogen atoms.
                Naturally, it is found in small amounts, but can be produced through industries. Since, ammonia uses in
                the manufacturing of fertilizers, refrigeration, and cleaning products. It used as a raw product for
                making chemicals such as nitric oxide.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Ammonia in Human Body Section */}
      <section className="ammonia-human-body" style={{ paddingTop: "50px", backgroundColor: "#fefdfd" }}>
        <div className="container">
          <div className="content-section" style={{ paddingBottom: "35px" }}>
            <h4 className="air_heading" style={{ textAlign: "center" }}>
              <strong>
                <span style={{ fontSize: "24pt" }}>
                  <span style={{ color: "#2a2a2c" }}>
                    Ammonia in the <span style={{ color: "#2fbcbc" }}>human body</span>
                  </span>
                </span>
              </strong>
            </h4>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                Ammonia can found in the blood culture of humans. Normal ammonia blood levels range between 15 to 45
                micrograms/dL. There are medical reasons as well as external factors that can increase blood ammonia
                toxicity in the body. Hence it can result in various health problems, that depend on the nature of
                ammonia exposure. These include inhalation, ingestion, or direct contact with the eyes or the skin,
                which can cause a severe burn.
              </span>
            </p>
            <p style={{ textAlign: "center" }}>
              <img
                className="aligncenter wp-image-67737"
                src="https://www.pranaair.com/wp-content/uploads/2023/02/ammonia-nh3-in-human-body-891x1024.png"
                alt="ammonia nh3 in human body"
                width="733"
                height="842"
              />
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        className="quote-section"
        style={{
          marginTop: "90px",
          marginBottom: "50px",
          paddingTop: "30px",
          paddingRight: "20px",
          paddingBottom: "30px",
          paddingLeft: "5px",
          background:
            "#fefdfd url(https://www.pranaair.com/wp-content/uploads/2023/02/background.png) center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "15pt" }}>
              A single episode of exposure to chemicals or chemical compounds resulted in 41 U.S. workers dying on the
              job in 2017; this is an increase of 7 deaths from 2016. From 2011 to 2017, this number fluctuated between
              33 and 55 fatal injuries every year, for a total of 297 fatalities for the seven years. -{" "}
              <em>US Bureau of Labour Statistics</em>
            </span>
          </p>
        </div>
      </section>

      {/* Emission Sources Section */}
      <section
        className="emission-sources"
        style={{
          paddingTop: "50px",
          paddingBottom: "80px",
          backgroundColor: "#d8fff8",
        }}
      >
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>
              Ammonia (NH<sub>3</sub>) <span style={{ color: "#2fbcbc" }}>: Main Emission Sources </span>
            </span>
          </h2>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>
              Cooking, tobacco smoke, burning fuels and kerosene, mold, air fresheners, nail polish removers, pet
              dander, and many more. When there is no circulation of air and indoor air trapped inside, CO2 levels will
              rise.
            </span>
          </p>

          <div className="sources-grid" style={{ paddingBottom: "35px" }}>
            <div className="sources-row">
              <div className="source-item">
                <h3 style={{ textAlign: "center" }}>
                  <img
                    className="size-medium wp-image-67209 aligncenter"
                    src="https://www.pranaair.com/wp-content/uploads/2023/02/vehicular-emissions.png"
                    alt="ammonia from vehicular emissions"
                    width="300"
                    height="300"
                  />
                  <strong>Vehicle emissions</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%" }}>
                  <span style={{ fontSize: "14pt", color: "#646478" }}>
                    Gasoline burning produces ammonia in the air by 0.30–0.47 g/kg. Whereas diesel burning contributes
                    0.34–0.50 g/kg.
                  </span>
                </p>
              </div>
              <div className="source-item">
                <h3 style={{ textAlign: "center" }}>
                  <img
                    className="size-medium wp-image-67209 aligncenter"
                    src="https://www.pranaair.com/wp-content/uploads/2023/02/agriculture-activities.png"
                    alt="ammonia from agriculture activities"
                    width="300"
                    height="300"
                  />
                  <strong>Agricultural activities</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%" }}>
                  <span style={{ fontSize: "14pt", color: "#646478" }}>
                    Chemical fertilizers, slurries, and synthetic manures carry ammonia, hence farmers are at a high
                    risk of ammonia exposure.
                  </span>
                </p>
              </div>
              <div className="source-item">
                <h3 style={{ textAlign: "center" }}>
                  <img
                    className="size-medium wp-image-67209 aligncenter"
                    src="https://www.pranaair.com/wp-content/uploads/2023/02/industries.png"
                    alt="ammonia from factories"
                    width="300"
                    height="300"
                  />
                  <strong>Industries</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%" }}>
                  <span style={{ fontSize: "14pt", color: "#646478" }}>
                    Ammonia is used in various manufacturing processes such as fertilizer industries, urea manufacturing
                    industries, and many more.
                  </span>
                </p>
              </div>
            </div>

            <div className="sources-row" style={{ paddingTop: "30px", paddingBottom: "35px" }}>
              <div className="source-item">
                <h3 style={{ textAlign: "center" }}>
                  <img
                    className="size-medium wp-image-67209 aligncenter"
                    src="https://www.pranaair.com/wp-content/uploads/2023/02/household-emissions.png"
                    alt="ammonia from household emissions"
                    width="300"
                    height="300"
                  />
                  <strong>Household emissions</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%" }}>
                  <span style={{ fontSize: "14pt", color: "#646478" }}>
                    Sources such as cooking, cleaning agents, metabolic activities, and smoking can all contribute to
                    household ammonia emitters.
                  </span>
                </p>
              </div>
              <div className="source-item">
                <h3 style={{ textAlign: "center" }}>
                  <img
                    className="size-medium wp-image-67209 aligncenter"
                    src="https://www.pranaair.com/wp-content/uploads/2023/02/sewage-plant.png"
                    alt="ammonia from sewage plant"
                    width="300"
                    height="300"
                  />
                  <strong>Sewage Treatment plants</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%" }}>
                  <span style={{ fontSize: "14pt", color: "#646478" }}>
                    Processing of sewage waste can produce a high amount of ammonia. If not monitored and controlled, it
                    can be fatal.
                  </span>
                </p>
              </div>
              <div className="source-item">
                <h3 style={{ textAlign: "center" }}>
                  <img
                    className="size-medium wp-image-67209 aligncenter"
                    src="https://www.pranaair.com/wp-content/uploads/2023/02/building-material.png"
                    alt="ammonia from building material"
                    width="300"
                    height="300"
                  />
                  <strong>Building materials</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%" }}>
                  <span style={{ fontSize: "14pt", color: "#646478" }}>
                    Cement concretes that are used to build houses release ammonia. Paint and solvents also have traces
                    of ammonia gas.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ammonia in Environment Section */}
      <section className="ammonia-environment">
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>
              <span style={{ color: "#2fbcbc" }}>Ammonia</span> in Enviornment
            </span>
          </h2>

          <div className="environment-row" style={{ paddingBottom: "40px" }}>
            <div className="environment-text">
              <span style={{ fontSize: "15pt" }}>
                <span style={{ color: "#2fbcbc", fontSize: "22pt" }}>A</span>tmospheric sulfates and nitrates mix with
                ammonia which further forms into second-hand particle pollution (PM2.5).
              </span>
            </div>
            <div className="environment-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/02/ammonia-nh3-in-human-body-891x1024.png"
                alt="Ammonia in environment"
                width="100%"
              />
            </div>
          </div>

          <div className="environment-row" style={{ paddingBottom: "50px" }}>
            <div className="environment-text">
              <span style={{ fontSize: "15pt" }}>
                <span style={{ color: "#2fbcbc", fontSize: "22pt" }}>A</span>mmonia assists in the acidification,
                salinization, and oxidation of ammonium salts in waterways that affect the marine life.
              </span>
            </div>
            <div className="environment-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/02/ammonia-nh3-in-human-body-891x1024.png"
                alt="Ammonia in waterways"
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Health Effects Section */}
      <section className="health-effects" style={{ paddingTop: "90px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>
              Ammonia concentrations <span style={{ color: "#2fbcbc" }}>and Health Affects</span>
            </span>
          </h2>

          <section className="health_effects_section">
            <h2 className="health_heading mobile_level_heading">NH3 Levels and their health effects</h2>

            <div className="level_range_cntr health_effect_box">
              <div className="lavel_box">
                <span>Levels</span>
                <span className="mg_text">
                  <b>
                    (µg/m<sup>3</sup>)
                  </b>
                </span>
              </div>
              <div className="health_color">
                <span>Health Effects</span>
              </div>
            </div>

            <div className="level_range_cntr">
              <div className="lavel_box">
                <span>Good</span>
                <p>
                  <span>0-200 </span>
                  <span className="mobile_mg_text">
                    (mg/m<sup>3</sup>)
                  </span>
                </p>
              </div>
              <div className="health_color Good_color">
                <span>Air is good to inhale</span>
              </div>
            </div>

            <div className="level_range_cntr">
              <div className="lavel_box">
                <span>Satisfactory</span>
                <p>
                  <span>201-400</span>
                  <span className="mobile_mg_text">
                    (mg/m<sup>3</sup>)
                  </span>
                </p>
              </div>
              <div className="health_color Satisfactory_color">
                <span> Irritation in the eyes and respiratory tract</span>
              </div>
            </div>

            <div className="level_range_cntr">
              <div className="lavel_box">
                <span>Moderate</span>
                <p>
                  <span>401-800</span>
                  <span className="mobile_mg_text">
                    (mg/m<sup>3</sup>)
                  </span>
                </p>
              </div>
              <div className="health_color Moderately_color">
                <span>Skin and mouth irritation can be experienced</span>
              </div>
            </div>

            <div className="level_range_cntr">
              <div className="lavel_box">
                <span>Poor</span>
                <p>
                  <span>801-1200</span>
                  <span className="mobile_mg_text">
                    (mg/m<sup>3</sup>)
                  </span>
                </p>
              </div>
              <div className="health_color poor_color">
                <span>Exposures can cause skin, eyes, and respiratory tract burns </span>
              </div>
            </div>

            <div className="level_range_cntr">
              <div className="lavel_box">
                <span>Very poor</span>
                <p>
                  <span>1200-1800</span>
                  <span className="mobile_mg_text">
                    (mg/m<sup>3</sup>)
                  </span>
                </p>
              </div>
              <div className="health_color verypoor_color">
                <span>30-minute exposure can be fatal</span>
              </div>
            </div>

            <div className="level_range_cntr">
              <div className="lavel_box">
                <span>Severe</span>
                <p>
                  <span>1800+</span>
                  <span className="mobile_mg_text">
                    (mg/m<sup>3</sup>)
                  </span>
                </p>
              </div>
              <div className="health_color Severe_color">
                <span>Can result in rapid Respiratory Arrest</span>
              </div>
            </div>

            <i className="bottom_text">*NAQI as per CBCB. 2-h hourly average values.</i>
          </section>
        </div>
      </section>

      {/* Health Hazards Section */}
      <section className="health-hazards" style={{ paddingTop: "40px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>
              Health Hazards of <span style={{ color: "#2fbcbc" }}>Ammonia Poisoning</span>
            </span>
          </h2>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>
              Ammonia gas can be bad for health due to its irritant and toxic properties. Thus, it is essential to take
              proper{" "}
            </span>
            <span style={{ fontSize: "14pt" }}>
              precautions when handling it to prevent exposure and ensure personal safety.
            </span>
          </p>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>
              Following are some common health hazards one can experience if exposed to ammonia gas:
            </span>
          </p>

          <div className="hazards-grid" style={{ marginRight: "10px", marginLeft: "10px", paddingBottom: "35px" }}>
            <div className="hazard-item">
              <img
                className="alignnone size-medium wp-image-67795 aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/02/skin-irritation-296x300.jpg"
                alt="skin irritation due to ammonia"
                width="296"
                height="300"
              />
              <h3 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "15pt" }}>
                  <strong>Skin irritation</strong>
                </span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  It can cause skin irritation, including burning and itching, which may lead to rashes and blisters
                  with prolonged exposure.
                </span>
              </p>
            </div>
            <div className="hazard-item">
              <img
                className="alignnone size-medium wp-image-67795 aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/02/seizure.jpg"
                alt="seizure due to ammonia"
                width="296"
                height="300"
              />
              <h3 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "15pt" }}>
                  <strong>Seizures</strong>
                </span>
              </h3>
              <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%" }}>
                <span style={{ fontSize: "14pt" }}>
                  High levels of ammonia exposure can lead to poisoning, which can cause symptoms such as confusion,
                  dizziness, and seizures, and can even be fatal in severe cases.
                </span>
              </p>
            </div>
          </div>

          <div className="hazards-grid" style={{ marginRight: "10px", marginLeft: "10px", paddingBottom: "35px" }}>
            <div className="hazard-item">
              <img
                className="alignnone size-medium wp-image-67795 aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/02/breathing-issue.jpg"
                alt="Long-term breathing issues due to ammonia"
                width="296"
                height="300"
              />
              <h3 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "15pt" }}>
                  <strong>Long-term breathing issues</strong>
                </span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Chronic exposure to low levels of ammonia can also lead to long-term health effects such as chronic
                  bronchitis, asthma, and lung damage.
                </span>
              </p>
            </div>
            <div className="hazard-item">
              <img
                className="alignnone size-medium wp-image-67795 aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/02/digestive-issue.jpg"
                alt="Digestive issues due to ammonia"
                width="296"
                height="300"
              />
              <h3 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "15pt" }}>
                  <strong>Digestive issues</strong>
                </span>
              </h3>
              <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%" }}>
                <span style={{ fontSize: "14pt" }}>
                  Ingestion of ammonia can lead to digestive issues such as nausea, vomiting, and abdominal pain.
                </span>
              </p>
            </div>
          </div>

          <p style={{ textAlign: "center", paddingTop: "50px" }}>
            <span style={{ fontSize: "15pt" }}>
              It is essential to take proper precautions when handling ammonia to prevent exposure and ensure personal
              safety. This includes wearing protective gear, using proper ventilation, and following safe handling
              procedures.
            </span>
          </p>
        </div>
      </section>

      {/* Safety Regulations Section */}
      <section className="safety-regulations" style={{ paddingTop: "90px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>
              Safety <span style={{ color: "#2fbcbc" }}>Regulations</span> and{" "}
              <span style={{ color: "#2fbcbc" }}>guidelines</span> for{" "}
            </span>
            <span style={{ fontSize: "24pt" }}>
              handling <span style={{ color: "#2fbcbc" }}>Ammonia gas</span> in different industries
            </span>
          </h2>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "15pt" }}>Some common safety regulations and guidelines include:</span>
          </p>

          <div className="regulations-grid" style={{ paddingBottom: "60px" }}>
            <div className="regulation-item">
              <h3 style={{ textAlign: "center" }}>
                <img
                  className="aligncenter wp-image-67841 size-medium"
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Personal-protective-equipment.png"
                  alt="Personal protective equipment"
                  width="290"
                  height="300"
                />
                <strong>Personal protective equipment (PPE)</strong>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Workers handling ammonia gas should wear appropriate PPE, such as respirators, goggles, gloves, and
                  protective clothing, to prevent exposure.
                </span>
              </p>
            </div>
            <div className="regulation-item">
              <h3 style={{ textAlign: "center" }}>
                <img
                  className="aligncenter wp-image-67841 size-medium"
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Proper-ventilation.png"
                  alt="Proper ventilation"
                  width="290"
                  height="300"
                />
                <strong>Proper ventilation</strong>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Facilities handling ammonia gas should have proper ventilation systems to prevent the buildup of
                  hazardous concentrations of ammonia gas in the air.
                </span>
              </p>
            </div>
            <div className="regulation-item">
              <h3 style={{ textAlign: "center" }}>
                <img
                  className="aligncenter wp-image-67841 size-medium"
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Transportation-regulations.png"
                  alt="Transportation regulations"
                  width="290"
                  height="300"
                />
                <strong>Transportation regulations</strong>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Ammonia gas is considered a hazardous material for transportation, and specific regulations apply to
                  its transport by road, rail, or sea.
                </span>
              </p>
            </div>
          </div>

          <div className="regulations-grid">
            <div className="regulation-item">
              <h3 style={{ textAlign: "center" }}>
                <img
                  className="aligncenter wp-image-67841 size-medium"
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Inspection-and-maintenance.png"
                  alt="Inspection and maintenance"
                  width="290"
                  height="300"
                />
                <strong>Inspection and maintenance</strong>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Equipment and facilities handling ammonia gas should be regularly inspected and maintained to prevent
                  leaks or other safety hazards.
                </span>
              </p>
            </div>
            <div className="regulation-item">
              <h3 style={{ textAlign: "center" }}>
                <img
                  className="aligncenter wp-image-67841 size-medium"
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Emergency-response-plans.png"
                  alt="Emergency response plans"
                  width="290"
                  height="300"
                />
                <strong>Emergency response plans</strong>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Facilities must have emergency plans for ammonia gas incidents. Workers need training and access to
                  gas masks, air supply systems, and emergency showers.
                </span>
              </p>
            </div>
            <div className="regulation-item">
              <h3 style={{ textAlign: "center" }}>
                <img
                  className="aligncenter wp-image-67841 size-medium"
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Regulatory-compliance.png"
                  alt="Regulatory compliance"
                  width="290"
                  height="300"
                />
                <strong>Regulatory compliance</strong>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Facilities handling ammonia gas must comply with relevant safety regulations and standards, such as
                  those set by OSHA, EPA, or local authorities.
                </span>
              </p>
            </div>
          </div>

          <div style={{ paddingTop: "60px" }}>
            <p style={{ textAlign: "justify" }}>
              <img
                className="wp-image-67896 alignleft"
                src="https://www.pranaair.com/wp-content/uploads/2023/02/alert-icon.png"
                alt="alert icon"
                width="65"
                height="54"
              />
              <span style={{ fontSize: "14pt" }}>
                Overall, safety regulations and guidelines for handling ammonia gas are essential to prevent accidents,
                protect workers and the public, and ensure compliance with environmental and safety regulations.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Ambient Air Quality Monitoring Section */}
      <section className="air-quality-monitoring" style={{ paddingTop: "90px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>
              <span style={{ color: "#2fbcbc" }}>
                Ambient <span style={{ color: "#333333" }}>Air Quality Monitoring</span>
              </span>
            </span>
          </h2>
          <a href="#">
            <img
              className="aligncenter wp-image-67915"
              src="https://www.pranaair.com/wp-content/uploads/2023/02/ammonia-sensor-on-ambient-monitor-300x234.jpg"
              alt="ammonia sensor on ambient monitor"
              width="800"
              height="624"
            />
          </a>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>
              It is important to regularly monitor ammonia gas in the ambient air, especially in industrial and
              agricultural settings where it is commonly used. This can help prevent exposure to harmful levels of
              ammonia gas and protect the environment. Monitoring ammonia gas in the ambient air is important for
              protecting human health, and the environment, and ensuring regulatory compliance. Regular monitoring can
              help identify sources of ammonia emissions and implement measures to reduce them, leading to a safer and
              healthier environment for everyone.
            </span>
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="product-section" style={{ paddingTop: "80px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>
              Choose Your <span style={{ color: "#2fbcbc" }}>Air Quality Monitor</span> To
            </span>
            <span style={{ fontSize: "24pt" }}>
              Measure Ammonia (NH<sub>3</sub>) Pollutant
            </span>
          </h2>
          <div style={{ paddingTop: "40px" }}>
            <a href="#">
              <img
                className="size-large wp-image-65217 aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/prana-air-caaqms-outdoor-monitor--1024x512.jpg"
                alt="prana air caaqms outdoor monitor"
                width="1024"
                height="512"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

