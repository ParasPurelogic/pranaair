"use client"
import "./styles.css"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"

export default function AirPollution() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
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
          backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2023/02/air-pollution.png?id=67100)",
        }}
      >
        <div className="container">
          <div className="hero-content">
            <h2 className="whitetext" style={{ fontSize: "24pt" }}>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/02/air-icon.png"
                alt="air icon"
                width="38"
                height="22"
                style={{ display: "inline", marginRight: "10px" }}
              />
              Air
            </h2>
            <p
              className="whitetext"
              style={{ textAlign: "left", wordWrap: "break-word", width: "auto", fontSize: "16pt" }}
            >
              Air is an invisible mixture of various gases. It exists naturally in our environment. Oxygen is one of the
              various gases present in the air that we breathe. Furthermore, various gases present in air causes air
              pollution.
            </p>
          </div>
        </div>
      </section>

      {/* What is Air Pollution Section */}
      <section className="what-is-section">
        <div className="container">
          <div className="content-wrapper">
            <img
              className="full-width-image"
              src="https://www.pranaair.com/wp-content/uploads/2023/02/what-is-air-pollution-and-causes-1024x491.jpg"
              alt="what is air pollution and causes"
              width="1024"
              height="491"
            />

            <h1 style={{ textAlign: "center", marginTop: "20px" }}>
              <strong>
                <span style={{ fontSize: "24pt" }}>
                  <span style={{ color: "#2a2a2c" }}>What is</span>{" "}
                  <span style={{ color: "#0687e3" }}>Air Pollution?</span>
                </span>
              </strong>
            </h1>

            <p style={{ textAlign: "center", fontSize: "14pt" }}>
              Air pollution happens when gases, dust, dirt, pollen, soot, viruses, etc. contaminate the air making it
              unclean, unhealthy, and toxic to breathe. The amount of air pollution present in the air determines its
              effects on humans, animals, plants, and the entire ecosystem. Hence, the amount of pollution in the air
              affects the level of harm it poses to humans, animals, and plants.
            </p>
          </div>
        </div>
      </section>

      {/* Air Contaminants Section */}
      <section className="contaminants-section">
        <div className="container">
          <h2 className="air_heading" style={{ fontSize: "24pt" }}>
            Some common but extremely dangerous air contaminants are
          </h2>

          <div className="contaminant-item">
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "36pt" }}>01</span> <span style={{ fontSize: "20pt" }}>Particulate Matter</span>
            </h3>
            <p style={{ textAlign: "center", fontSize: "14pt" }}>
              Small breathable dust particles and liquid droplets suspended in the air. And it can easily enter deep
              into the lungs.
            </p>
          </div>

          <div className="card2-container">
            <div className="card2">
              <a href="/air-quality-monitor">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/pm1-parameter.png"
                  alt="pm1 parameter"
                  width="116"
                  height="108"
                />
              </a>
            </div>
            <div className="card2">
              <a href="/air-quality-monitor">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/pm2.5-pollutant-icon.png"
                  alt="pm2.5 parameter"
                  width="116"
                  height="108"
                />
              </a>
            </div>
            <div className="card2">
              <a href="/air-quality-monitor">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/pm10-pollutant-icon.png"
                  alt="pm10 parameter"
                  width="116"
                  height="108"
                />
              </a>
            </div>
          </div>

          <div className="contaminant-item" style={{ marginTop: "40px" }}>
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "36pt" }}>02</span> <span style={{ fontSize: "20pt" }}>Harmful Gases</span>
            </h3>
            <p style={{ textAlign: "center", fontSize: "14pt" }}>
              There are numerous gases in the air. But they become harmful when they exceed their desired limits. Some
              examples are Nitrogen Dioxide, Sulphur Dioxide, Carbon Dioxide, Methane, Carbon Monoxide, etc.
            </p>
          </div>

          <div className="card-container">
            <div className="card">
              <a href="/air-quality-monitor">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/no2-icon.png"
                  alt="no2 icon"
                  width="166"
                  height="155"
                />
              </a>
            </div>
            <div className="card">
              <a href="/air-quality-monitor">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/so2-icon.png"
                  alt="so2 parameter"
                  width="166"
                  height="155"
                />
              </a>
            </div>
            <div className="card">
              <a href="/air-quality-monitor">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-gas-icon.png"
                  alt="co2 parameter"
                  width="166"
                  height="155"
                />
              </a>
            </div>
            <div className="card">
              <a href="/air-quality-monitor">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/co.png"
                  alt="co parameter"
                  width="166"
                  height="155"
                />
              </a>
            </div>
            <div className="card">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/02/ch4-icon.png"
                alt="ch4 parameter"
                width="166"
                height="155"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Air Pollution Section */}
      <section className="types-section">
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center", fontSize: "24pt" }}>
            There are two types of <span style={{ color: "#0687e3" }}>Air Pollution</span>
          </h2>

          <div className="pollution-type">
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "36pt" }}>01</span>{" "}
              <span style={{ fontSize: "20pt" }}>Indoor Air Pollution</span>
            </h3>
            <p style={{ textAlign: "center", fontSize: "14pt" }}>
              According to the WHO, when dust, gases, and allergens contaminate the air in indoor spaces like homes,
              offices, schools, etc. it is known as indoor air pollution. Indoor air can be 10 times worse than
              outdoors. Because these pollutants are trapped in closed spaces and cannot move freely.
            </p>

            <img
              className="full-width-image"
              src="https://www.pranaair.com/wp-content/uploads/2023/02/indoor-air-pollution-1024x653.jpg"
              alt="indoor air pollution"
              width="832"
              height="530"
            />
          </div>

          <div className="pollution-type" style={{ marginTop: "40px" }}>
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "36pt" }}>02</span>{" "}
              <span style={{ fontSize: "20pt" }}>Outdoor Air Pollution</span>
            </h3>
            <p style={{ textAlign: "center", fontSize: "14pt" }}>
              Outdoor air pollution occurs when dangerous air pollutants contaminate the air outdoors. This can happen
              due to natural events. Such as forest burning and volcanic eruptions or due to human activities such as
              garbage burning, etc.
            </p>

            <img
              className="full-width-image"
              src="https://www.pranaair.com/wp-content/uploads/2023/02/outdoor-air-pollution-sources-1024x815.jpg"
              alt="outdoor air pollution sources"
              width="841"
              height="670"
            />
          </div>

          <div className="saveyourfuture_box">
            <span className="future_img">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/02/save-your-future.png"
                alt="Save your future"
              />
            </span>
            <h3>
              <span style={{ fontSize: "16pt", color: "#0687e3" }}>
                <em>
                  According to the UN health organization air pollution exposure caused an estimated 1.1 million deaths
                  in India in 2016 among people of all ages.
                </em>
              </span>
            </h3>
          </div>
        </div>
      </section>

      {/* Air Quality Index Section */}
      <section className="aqi-section">
        <div className="container">
          <h3 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "18pt" }}>
              You must have read or heard somewhere that pollution levels are high or low.
            </span>
            <br />
            <span style={{ color: "#0687e3", fontSize: "18pt" }}>But what exactly does that mean?</span>
          </h3>

          <div className="aqi-content">
            <div className="aqi-text">
              <p style={{ textAlign: "center", fontSize: "14pt" }}>
                High levels of air pollution indicate that the air is heavily contaminated. Thus, it can hurt people
                more severely. Low air pollution levels imply few health risks. But How do we determine if air pollution
                is high or low? By calculating the average air pollution concentration over a standard time, we can
                determine the quality of the air. It is divided into six categories depending upon the level of harm
                they can do and this index is known as the Air Quality Index (AQI). Hence, we can determine the quality
                of the air around us with the use of this index. For example, an AQI value of 45 is considered good but
                AQI levels above 300 represent hazardous air quality.
              </p>
            </div>
            <div className="aqi-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/02/aqi-air-quality-index-mobile-app-263x300.jpg"
                alt="aqi air quality index mobile app"
                width="408"
                height="466"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pollution Sources Section */}
      <section className="sources-section">
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "24pt" }}>
            Where does air pollution <span style={{ color: "#0687e3" }}>come from?</span>
          </h2>

          {/* Indoor Pollution Sources */}
          <div className="pollution-sources">
            <button className="source-button">Indoor Air Pollution Sources</button>
            <p
              className="air_heading"
              style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}
            >
              Cooking, tobacco smoke, burning fuels and kerosene, mold, air fresheners, nail polish removers, pet
              dander, and many more. When there is no circulation of air and indoor air is trapped inside, CO2 levels
              will rise.
            </p>

            <div className="sources-grid">
              <div className="source-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/tobacco-smoke.png"
                  alt="tobacco smoke"
                  width="300"
                  height="300"
                />
                <h3>
                  <strong>Tobacco smoke</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  Cigarette smoking is not only injurious to the person who is smoking. But it is equally injurious to
                  people indoors who inhale second-hand smoke.
                </p>
              </div>

              <div className="source-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/burning-fuels.png"
                  alt="Burning Fuels & Kerosene"
                  width="300"
                  height="300"
                />
                <h3>
                  <strong>Burning Fuels & Kerosene</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  Incomplete combustion of fuels in various home appliances such as stoves, furnaces, etc. release CO
                  and PM.
                </p>
              </div>

              <div className="source-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/air-freshener.png"
                  alt="Air fresheners"
                  width="300"
                  height="300"
                />
                <h3>
                  <strong>Air fresheners</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  Air fresheners and cleaning agents are a potential source of VOCs. If used in excess amounts, they can
                  cause headaches, nausea, etc.
                </p>
              </div>

              <div className="source-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/cooking-fumes.png"
                  alt="cooking fumes"
                  width="300"
                  height="300"
                />
                <h3>
                  <strong>Cooing Fumes</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  Cooking activities can emit various air pollutants. Humidity levels inside the home can increase when
                  more water is used in cooking.
                </p>
              </div>

              <div className="source-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/pet-dander.png"
                  alt="pet dander"
                  width="300"
                  height="300"
                />
                <h3>
                  <strong>Pet Dander</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  This acts as a stressor for respiratory disorders as well as a trigger for asthma attacks. Therefore,
                  animal contact must be reduced as much as possible
                </p>
              </div>

              <div className="source-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/photocopiers-and-printer.png"
                  alt="Photocopiers and printers"
                  width="300"
                  height="300"
                />
                <h3>
                  <strong>Photocopiers & Printers</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  These are O3 emitters in a home or office setting. Ozone levels, when exceeding the limits can cause
                  various health effects.
                </p>
              </div>
            </div>
          </div>

          {/* Outdoor Pollution Sources */}
          <div className="pollution-sources">
            <button className="source-button">Outdoor Pollution Sources</button>
            <p
              className="air_heading"
              style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}
            >
              Vehicles, factories, garbage burning, dust, power plants, construction and demolition activities, oil
              refineries, emissions from aircraft and planes, wildfires, volcanic eruptions, etc.
            </p>

            <div className="sources-grid">
              <div className="source-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/power-plant.png"
                  alt="power plan"
                  width="300"
                  height="300"
                />
                <h3>
                  <strong>Power Plant</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  Industries and power plants are the main source of air pollution sources outdoors. Emissions from
                  power plants cause photochemical smog.
                </p>
              </div>

              <div className="source-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/garbage-burning.png"
                  alt="Garbage Burning"
                  width="300"
                  height="300"
                />
                <h3>
                  <strong>Garbage Burning</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  Emissions from burning garbage produce various toxic gases and air pollutants such as CO, CO2, NO2,
                  Smoke, dust, etc.
                </p>
              </div>

              <div className="source-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/cd-activities.png"
                  alt="C&D activities"
                  width="300"
                  height="300"
                />
                <h3>
                  <strong>C&D activities</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  Waste generated at construction and destruction activities substantially increase PM2.5 and PM10
                  levels in the air, hence in the nearby areas.
                </p>
              </div>

              <div className="source-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/unpaved-roads.png"
                  alt="Unpaved roads"
                  width="300"
                  height="300"
                />
                <h3>
                  <strong>Unpaved roads</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  Unpaved roads emit particulate matter, PM pollution (PM2.5, PM10), dust, and debris. Hence, it can
                  increase the overall PM levels of that area.
                </p>
              </div>

              <div className="source-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/oil-refineries.png"
                  alt="Oil refineries & brick kilns"
                  width="300"
                  height="300"
                />
                <h3>
                  <strong>Oil refineries & brick kilns</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  Pre-processing and processing of oil and bricks emit various pollutants including toxic metals,
                  particulates, toxic gases like methane, etc.
                </p>
              </div>

              <div className="source-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/wildfires-volcanic-eruptions.png"
                  alt="Wildfires and Volcanic eruptions"
                  width="300"
                  height="300"
                />
                <h3>
                  <strong>Wildfires & Volcanic eruptions</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  These are natural sources of outdoor air pollution. Because they emit carbon monoxide, black carbon,
                  etc. which is injurious to wildlife as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Impacts Section */}
      <section className="health-impacts-section">
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center", fontSize: "24pt" }}>
            Health <span style={{ color: "#0687e3" }}>Impacts By Air Pollution</span>
          </h2>

          <div className="health-impacts-content">
            <div className="health-impact-boxes left">
              <div className="impact-box">
                <p style={{ textAlign: "center", fontSize: "16pt", color: "#646478" }}>Headaches, dizziness, nausea</p>
              </div>

              <div className="impact-box">
                <p style={{ textAlign: "center", fontSize: "16pt", color: "#646478" }}>
                  Difficulty in breathing, Sweating
                </p>
              </div>

              <div className="impact-box">
                <p style={{ textAlign: "center", fontSize: "16pt", color: "#646478" }}>
                  Irritation in the eyes, nose, and throat
                </p>
              </div>
            </div>

            <div className="health-impact-image">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/02/health-impacts-by-air-pollution-814x1024.png"
                alt="health impacts by air pollution"
                width="389"
                height="489"
              />
            </div>

            <div className="health-impact-boxes right">
              <div className="impact-box">
                <p style={{ textAlign: "center", fontSize: "16pt", color: "#646478" }}>
                  Worsen asthma & respiratory diseases
                </p>
              </div>

              <div className="impact-box">
                <p style={{ textAlign: "center", fontSize: "16pt", color: "#646478" }}>
                  Damages to the lungs and kidney
                </p>
              </div>

              <div className="impact-box">
                <p style={{ textAlign: "center", fontSize: "16pt", color: "#646478" }}>Cancer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "24pt" }}>
            How you can effectively <span style={{ color: "#0687e3" }}>reduce air pollution</span>
          </h2>
          <p className="air_heading" style={{ textAlign: "center", fontSize: "15pt" }}>
            Adopt these simple yet effective tips and play your part in improving air quality.
          </p>

          {/* Indoor Solutions */}
          <div className="solutions-container">
            <h3 style={{ textAlign: "center", fontSize: "24pt" }}>Indoor Solutions</h3>

            <div className="solutions-grid">
              <div className="solution-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/smoking-295x300.png"
                  alt="air pollution by smoking"
                  width="188"
                  height="191"
                />
                <h4>
                  <strong>Control indoor air pollution sources</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "14pt", color: "#646478" }}>
                  Actively identify and eliminate sources of indoor air pollution, such as cleaning agents, aerosol
                  sprays, tobacco smoke, etc.
                </p>
              </div>

              <div className="solution-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Improve-ventilation-295x300.png"
                  alt="Improve ventilation"
                  width="188"
                  height="191"
                />
                <h4>
                  <strong>Improve ventilation</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "14pt", color: "#646478" }}>
                  Trapped spaces can feel stuffy and stale. Hence, good ventilation is a major factor when it comes to
                  improving indoor air quality
                </p>
              </div>

              <div className="solution-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/humidity-level-295x300.png"
                  alt="humidity level"
                  width="188"
                  height="191"
                />
                <h4>
                  <strong>Monitor your humidity levels</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "14pt", color: "#646478" }}>
                  Excess moisture will promote mold and mildew growth and increases the chances of viral infections.
                  Germ dispersion is easy in low humidity.
                </p>
              </div>

              <div className="solution-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Keep-your-indoor-spaces-clean-295x300.png"
                  alt="Keep your indoor spaces clean"
                  width="188"
                  height="191"
                />
                <h4>
                  <strong>Keep your indoor spaces clean</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "14pt", color: "#646478" }}>
                  Keeping your indoor spaces clean will help in reducing episodes of allergies build-up on certain
                  surfaces indoors.
                </p>
              </div>
            </div>
          </div>

          {/* Outdoor Solutions */}
          <div className="solutions-container">
            <h3 style={{ textAlign: "center", fontSize: "24pt" }}>Outdoor Solutions</h3>

            <div className="solutions-grid">
              <div className="solution-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Reduce-emissions.png"
                  alt="reduce emissions"
                  width="188"
                  height="191"
                />
                <h4>
                  <strong>Reduce Emissions</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "14pt", color: "#646478" }}>
                  Walk or ride. Avoid cars or bikes for short distances. Encourage usage of public transport,
                  carpooling, biking, and support initiatives such as e-vehicles.
                </p>
              </div>

              <div className="solution-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Avoid-waste-burning.png"
                  alt="Avoid the burning of waste"
                  width="188"
                  height="191"
                />
                <h4>
                  <strong>Avoid Waste Burning</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "14pt", color: "#646478" }}>
                  Avoid the burning of waste and garbage in the open and adopt proper garbage disposal methods. Because
                  open burning can release pollutants into the air.
                </p>
              </div>

              <div className="solution-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Plant-more-trees.png"
                  alt="plant more trees"
                  width="188"
                  height="191"
                />
                <h4>
                  <strong>Plant more trees</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "14pt", color: "#646478" }}>
                  Planting more trees will assist in the natural filtration of air pollutants. This will further help in
                  reducing the overall air pollution levels in the air.
                </p>
              </div>

              <div className="solution-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Support-clean-air-initiatives.png"
                  alt="Support clean air initiatives"
                  width="188"
                  height="191"
                />
                <h4>
                  <strong>Support clean air initiatives</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "14pt", color: "#646478" }}>
                  Participate in local clean air programs. As to offer your support to groups that work to improve
                  outdoor air quality.
                </p>
              </div>
            </div>

            <p
              style={{
                textAlign: "center",
                wordWrap: "break-word",
                width: "100%",
                fontSize: "15pt",
                color: "#646478",
                marginTop: "50px",
              }}
            >
              Encourage your family and friends to adopt these tips to reduce air pollution and the health effects that
              people face when exposed to air pollution.
            </p>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions Section */}
      <section className="air-quality-solutions">
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center", fontSize: "24pt" }}>
            Air Quality <span style={{ color: "#0687e3" }}>Solutions</span>
          </h2>

          <div className="solutions-products">
            <div className="product-item">
              <a href="/air-quality-monitor">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/air-pollution-monitor.jpg"
                  alt="air quality monitor solution"
                  width="300"
                  height="160"
                />
              </a>
              <h4 style={{ textAlign: "center" }}>
                <a href="/air-quality-monitor">
                  <strong>
                    <span style={{ fontSize: "14pt" }}>Air Quality Monitor</span>
                  </strong>
                </a>
              </h4>
            </div>

            <div className="product-item">
              <a href="/fresh-air-machine">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/fresh-air-machine-prana-air.jpg"
                  alt="Fresh Air Machine"
                  width="300"
                  height="160"
                />
              </a>
              <h4 style={{ textAlign: "center" }}>
                <a href="/fresh-air-machine">
                  <strong>
                    <span style={{ fontSize: "14pt" }}>Fresh Air Machine</span>
                  </strong>
                </a>
              </h4>
            </div>

            <div className="product-item">
              <a href="/air-mask">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/anti-pollution-mask.jpg"
                  alt="n95 anti pollution mask"
                  width="300"
                  height="160"
                />
              </a>
              <h4 style={{ textAlign: "center" }}>
                <a href="/air-mask">
                  <strong>
                    <span style={{ fontSize: "14pt" }}>N95 Mask</span>
                  </strong>
                </a>
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Monitor Products Section */}
      <section className="monitor-products-section">
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center", fontSize: "24pt" }}>
            Choose Your <span style={{ color: "#0687e3" }}>Air Quality Monitor</span> To
            <br />
            Measure Air Pollution
          </h2>

          <div className="products-carousel">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
            >
              <div className="carousel-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/product-1.jpg"
                  alt="Air Quality Monitor"
                  width="250"
                  height="250"
                />
                <h4>Pocket Air Quality Monitor</h4>
                <p>₹12,999.00</p>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/product-2.jpg"
                  alt="Air Quality Monitor"
                  width="250"
                  height="250"
                />
                <h4>Nano CO Monitor</h4>
                <p>₹7,999.00</p>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/product-3.jpg"
                  alt="Air Quality Monitor"
                  width="250"
                  height="250"
                />
                <h4>Nano CO2 Monitor</h4>
                <p>₹8,999.00</p>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/product-4.jpg"
                  alt="Air Quality Monitor"
                  width="250"
                  height="250"
                />
                <h4>Nano TVOC Monitor</h4>
                <p>₹9,999.00</p>
              </div>
            </Carousel>
          </div>

          <div className="caaqms-banner">
            <a href="/air-quality-monitor">
              <img
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

