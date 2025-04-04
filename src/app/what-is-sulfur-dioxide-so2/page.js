"use client"
import "./styles.css"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"

export default function SulfurDioxidePage() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
      <section className="full-width-section" style={{ backgroundColor: "#b3e1eb", paddingBottom: "60px" }}>
        <div className="container">
          <div className="empty-space" style={{ height: "40px" }}></div>
          <div className="content-section fade-in-up" style={{ paddingTop: "15px" }}>
            <h1 style={{ textAlign: "center" }}></h1>
            <h1 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                <img
                  className="wp-image-60375 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/SO2-formula.png"
                  alt="what is sulfur dioxide so2"
                  width="424"
                  height="70"
                />
              </span>
            </h1>
            <h1 style={{ textAlign: "center" }}>
              <span className="heading_top_white" style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                What is Sulfur Dioxide SO<sub>2</sub>?
              </span>
            </h1>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16pt" }}>
                Sulfur Dioxide is a gaseous form of air pollution, made from two components- sulfur and oxygen. This
                forms when sulfur-rich fuels burn such as oil, diesel, or coal. Sulfur dioxide already exists in the air
                composition but due to its various natural and man-made sources, the SO2 concentration can rise,
                resulting in severe effects on humans, plants, and the entire ecosystem.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="full-width-section" style={{ backgroundColor: "#fefdfd" }}>
        <div className="container">
          <div className="content-section fade-in-up" style={{ paddingBottom: "35px" }}>
            <h4 style={{ textAlign: "center" }}>
              <strong>
                <span style={{ fontSize: "24pt" }}>Sources Of Sulfur Dioxide Gas</span>
              </strong>
            </h4>
          </div>

          {/* Volcanic Eruption */}
          <div className="row-inner" style={{ display: "flex", alignItems: "center", paddingBottom: "10px" }}>
            <div className="column-inner" style={{ width: "33.33%" }}>
              <div className="content-section fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/Volcanic.png"
                        alt="co from Volcanic eruption"
                        width="302"
                        height="302"
                      />
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "66.67%" }}>
              <div className="content-section">
                <span style={{ fontSize: "14pt" }}>
                  <strong>–Volcanic eruption</strong> is one of the many natural causes of sulfur oxides. As molten lava
                  rises to the surface, the pressure on the magma decreases, causing dissolved sulfur and other volatile
                  components to combine to produce various new gases. Volcano eruptions emit sulfides that can travel
                  upwards in the stratosphere and combines with water particles that cause acid rain.
                </span>
              </div>
            </div>
          </div>

          {/* Fossil Fuels */}
          <div className="row-inner" style={{ display: "flex", alignItems: "center", paddingBottom: "10px" }}>
            <div className="column-inner" style={{ width: "33.33%" }}>
              <div className="content-section fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/Fossile-fuel.jpg"
                        alt="co from Volcanic eruption"
                        width="302"
                        height="302"
                      />
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "66.67%" }}>
              <div className="content-section">
                <span style={{ fontSize: "14pt" }}>
                  <strong>– Fossil fuels</strong> and especially the ones with a low filtration process have a high
                  volume of sulfur in it which helps in the formation of many sulfur oxides. The burning of fossil fuels
                  such as oil, coal, diesel, and other elements that contain sulfur emits sulfur dioxide into the
                  atmosphere.
                </span>
              </div>
            </div>
          </div>

          {/* Extraction of Fuel */}
          <div className="row-inner" style={{ display: "flex", alignItems: "center", paddingBottom: "25px" }}>
            <div className="column-inner" style={{ width: "33.33%" }}>
              <div className="content-section fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/Extraction-of-fuel.jpg"
                        alt="co from Volcanic eruption"
                        width="302"
                        height="302"
                      />
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "66.67%" }}>
              <div className="content-section">
                <span style={{ fontSize: "14pt" }}>
                  – Among these combustion of fuels in plants and processes including extraction, refining of oil, etc
                  are the major source of sulfur dioxide formation. Internal combustion engines, especially diesel
                  engines are the major sources of sulfur dioxide production in urban areas. Indian governments push
                  for BSVI engines has made a significant impact on pollution as a whole.
                </span>
              </div>
            </div>
          </div>

          {/* SO2 in the Atmosphere */}
          <div className="row-inner" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
            <div className="column-inner">
              <div className="content-section fade-in-up" style={{ paddingBottom: "20px" }}>
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24pt" }}>
                    <strong>
                      SO<sub>2</sub> in the Atmosphere
                    </strong>
                  </span>
                </h4>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    Sulfur Oxides are present in the atmosphere at low concentrations. Most of it is by human activities
                    including the burning of fuel and essentially ship fuel as it has a high concentration of sulfur. In
                    urban areas, a high concentration of sulfur oxides is detected. The life of sulfur dioxide in the
                    atmosphere is less than a week during which it reacts with other atmospheric pollutants and forms
                    various different compounds. When SO2 reacts with the oxygen present in the environment, it forms
                    sulfur trioxide which dissolves with water vapor and forms sulfuric acid (H2SO4), a major acid rain
                    component. It forms secondary pollutants like smog and particulate matter after attaching itself to
                    dust particles which is quite harmful to the health and environment.
                  </span>
                </p>
                <img
                  className="aligncenter wp-image-64719"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/so2-in-atmosphere-1024x1013.jpg"
                  alt="so2 in the atmosphere"
                  width="616"
                  height="609"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Impacts Section */}
      <section
        className="full-width-section"
        style={{ backgroundColor: "#b3e1eb", paddingTop: "50px", paddingBottom: "40px" }}
      >
        <div className="container">
          <div className="content-section fade-in-up">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                Health &amp; Environmental Impacts of SO<sub>2</sub> Gas
              </span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                <span style={{ fontSize: "14pt" }}>
                  Lets find out the harmful effects of sulfur dioxide gas on our health.
                </span>
              </span>
            </p>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16pt" }}>
                <strong>
                  <span style={{ fontSize: "18pt" }}>Health Impact</span>
                </strong>
              </span>
            </p>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                If there is a high concentration of SO<sub>2</sub>, you can easily inhale SO<sub>2</sub>, which
                eventually sticks to the membrane of the nose and respiratory tract. Its short health impact can be felt
                quickly but the long-term impacts are very dangerous even to the extent of reduced lung capacity. It
                results in difficulty in breathing and tightening of airways. People with comorbidities are at high risk
                as it can aggravate those conditions to a point of no return.
              </span>
            </p>
          </div>

          <div className="row-inner" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="column-inner" style={{ width: "20%" }}>
              <div className="content-section fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/eyes-1.png"
                  alt="eyes problem due to so2 gas"
                  width="288"
                  height="300"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}> Eyes, nose, irritation</span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "20%" }}>
              <div className="content-section fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/Cough.png"
                  alt="Cough due to so2 gas"
                  width="288"
                  height="300"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}> Cough, wheezing </span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "20%" }}>
              <div className="content-section fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/throat-1.png"
                  alt="throat problem due to so2 gas"
                  width="288"
                  height="300"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}> Respiratory tract inflammation &amp; irritation</span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "20%" }}>
              <div className="content-section fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/asthma-1.png"
                  alt="Risk of asthma attacks increases in children"
                  width="288"
                  height="300"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}> Risk of asthma attacks increases in children</span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "20%" }}>
              <div className="content-section fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/heart-1.png"
                  alt="Heart diseases"
                  width="288"
                  height="300"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}> Heart diseases </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section
        className="full-width-section"
        style={{ backgroundColor: "#b3e1eb", paddingTop: "50px", paddingBottom: "40px" }}
      >
        <div className="container">
          <div className="content-section fade-in-up">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>Environmental Impact</span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                The impact of SO<sub>2</sub> on the environment is beyond comprehensible. It limits plant growth and
                also damages leaves turning them yellow. At a high concentration in the atmosphere, it reacts with
                atmospheric moisture to create an acidic compound responsible for acid rain and damaging soil
                properties.
              </span>
            </p>
          </div>

          {/* First row of environmental impacts */}
          <div className="row-inner" style={{ display: "flex", flexWrap: "wrap", paddingBottom: "50px" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <div className="content-section fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/Monument.png"
                  alt="Monument damages due to so2 gas"
                  width="288"
                  height="300"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    {" "}
                    It damages and stains stones including culturally important monuments and statues.{" "}
                  </span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "25%" }}>
              <div className="content-section fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/plant-tissues.png"
                  alt="plant tissues problems due to so2 gas"
                  width="288"
                  height="300"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}> Impact plant growth by damaging exposed tissues in leaves</span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "25%" }}>
              <div className="content-section fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/acid-rain.png"
                  alt="Increased chances of acid rain"
                  width="288"
                  height="300"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}> Increased chances of acid rain </span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "25%" }}>
              <div className="content-section fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/plant-growth.png"
                  alt="Affects the vegetation, growth of plants"
                  width="288"
                  height="300"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>Affects the vegetation, growth of plants</span>
                </h4>
              </div>
            </div>
          </div>

          {/* Second row of environmental impacts */}
          <div className="row-inner" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <div className="content-section fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/leaf.png"
                  alt="damage plan leaf due to so2"
                  width="288"
                  height="300"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>Deteriorates leaves quality and color </span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "25%" }}>
              <div className="content-section fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/damage-marine-life.png"
                  alt="damage marine life due to so2 gas"
                  width="288"
                  height="300"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}> Affects marine life by acidifying the water ways</span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "25%" }}>
              <div className="content-section fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/alter-soil.png"
                  alt="alter soil due to so2 gas"
                  width="288"
                  height="300"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}> Alters soil properties, agricultural land properties</span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "25%" }}>
              <div className="content-section fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/affect-animals.png"
                  alt="Affects the vegetation, growth of plants"
                  width="288"
                  height="300"
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    Destruction of parts of lungs and inflammation in the airways in animals
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Effects Section */}
      <section className="health_effects_section">
        <h2 className="health_heading">Sulfur Dioxide (SO2) and the harm it causes</h2>
        <h2 className="health_heading mobile_level_heading">SO2 Levels and their health effects</h2>

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
              <span>0-40 </span>
              <span className="mobile_mg_text">
                (mg/m<sup>3</sup>)
              </span>
            </p>
          </div>
          <div className="health_color Good_color">
            <span>Fresh air</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>Satisfactory</span>
            <p>
              <span>41-80</span>
              <span className="mobile_mg_text">
                (mg/m<sup>3</sup>)
              </span>
            </p>
          </div>
          <div className="health_color Satisfactory_color">
            <span>Irritation in the eyes and respiratory tract experienced</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>Moderately polluted</span>
            <p>
              <span>81-380</span>
              <span className="mobile_mg_text">
                (mg/m<sup>3</sup>)
              </span>
            </p>
          </div>
          <div className="health_color Moderately_color">
            <span>Reflex bronchoconstriction with increased pulmonary resistance experienced</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>Poor</span>
            <p>
              <span>381-800</span>
              <span className="mobile_mg_text">
                (mg/m<sup>3</sup>)
              </span>
            </p>
          </div>
          <div className="health_color poor_color">
            <span>Brain and lung damages after exposure of 3 hours </span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>Very poor</span>
            <p>
              <span>801-1600</span>
              <span className="mobile_mg_text">
                (mg/m<sup>3</sup>)
              </span>
            </p>
          </div>
          <div className="health_color verypoor_color">
            <span>Exposures can cause Skin and respiratory tract burns </span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>Severe</span>
            <p>
              <span>1600+</span>
              <span className="mobile_mg_text">
                (mg/m<sup>3</sup>)
              </span>
            </p>
          </div>
          <div className="health_color Severe_color">
            <span>Life-threatening, Fatal within 60 minutes of exposure </span>
          </div>
        </div>

        <i className="bottom_text">*NAQI as per CBCB. 2-h hourly average values.</i>
      </section>

      {/* Corrective Measures Section */}
      <section className="full-width-section" style={{ backgroundColor: "#fefdfd", paddingBottom: "40px" }}>
        <div className="container">
          <div className="content-section fade-in-up">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                Corrective Measures To Reduce SO<sub>2</sub> Gas
              </span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                For the solutions to contain so2 concentration, first we need to monitor it and identify the areas where
                its concentration doesnt meet the recommended standards. After identifying the target areas, some of
                the below mentioned corrective measures can be implemented:
              </span>
            </p>
          </div>

          <div className="empty-space"></div>

          {/* Corrective Measures */}
          <div className="row-inner" style={{ display: "flex", alignItems: "center" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/Sustainable-energy-150x150.png"
                alt="Promote sustainable energy sources"
                className="aligncenter fade-in-up"
              />
            </div>
            <div className="column-inner" style={{ width: "75%" }}>
              <div className="content-section fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>– Promote sustainable energy sources</strong> synergistic emission reduction includes the
                    usage of water energy, wind energy, solar energy, etc. instead of fossil fuels to reduce SO2
                    emissions.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row-inner" style={{ display: "flex", alignItems: "center" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/Alternative-fuels-181x142.png"
                alt="Alternative fuels"
                className="aligncenter fade-in-up"
                width="181"
                height="142"
              />
            </div>
            <div className="column-inner" style={{ width: "75%" }}>
              <div className="content-section fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>– Alternative fuels like hydrogen cells, electrical, etc.</strong> This will help in
                    reducing emissions from fossil fuel burning that emits SO2. Air pollution can be reduced
                    substantially when we use alternative fuels.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row-inner" style={{ display: "flex", alignItems: "center" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/Home-181x142.png"
                alt="Accommodations away from industrial areas"
                className="aligncenter fade-in-up"
                width="181"
                height="142"
              />
            </div>
            <div className="column-inner" style={{ width: "75%" }}>
              <div className="content-section fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>– Accommodations away from industrial areas</strong> will help in reducing the effects of
                    air pollution and harmful substances that can affect the residents, especially sensitive groups that
                    live near industrial areas.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row-inner" style={{ display: "flex", alignItems: "center" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/Renewable-sources-181x142.png"
                alt="Switch to a renewable source of energy"
                className="aligncenter fade-in-up"
                width="181"
                height="142"
              />
            </div>
            <div className="column-inner" style={{ width: "75%" }}>
              <div className="content-section fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>– Switch to a renewable source of energy</strong> such as solar, wind, and hydropower. Air
                    pollution and economic growth go hand-in-hand. Using renewable sources of energy would be an
                    economic approach to reducing emissions.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row-inner" style={{ display: "flex", alignItems: "center" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/Sulfur-fuel-150x150.png"
                alt="Using zero sulfur content fuels"
                className="aligncenter fade-in-up"
              />
            </div>
            <div className="column-inner" style={{ width: "75%" }}>
              <div className="content-section fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>– Using zero sulfur content fuels</strong> in cars and other vehicles will help in reducing
                    ambient air pollution. Reducing sulfur fuels will help in reducing tailpipe HC, CO, and NOx
                    emissions.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row-inner" style={{ display: "flex", alignItems: "center" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/Exercise-150x150.png"
                alt="Avoid exercising during high-pollution"
                className="aligncenter fade-in-up"
              />
            </div>
            <div className="column-inner" style={{ width: "75%" }}>
              <div className="content-section fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>– Avoid exercising during high-pollution</strong> days as when you work out you inhale more
                    O2 than normal along with other air pollutants. This means you inhale more air pollution when you
                    work out during high-pollution days.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row-inner" style={{ display: "flex", alignItems: "center" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/Coal-plant-150x150.png"
                alt="Installation of power plants with scrubbers"
                className="aligncenter fade-in-up"
              />
            </div>
            <div className="column-inner" style={{ width: "75%" }}>
              <div className="content-section fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>– Installation of power plants with scrubbers.</strong> The smokestack scrubber helps in
                    collecting harmful chemicals and toxins and then releases clean air into the atmosphere through the
                    smokestack.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="empty-space" style={{ height: "50px" }}></div>
        </div>
      </section>

      {/* Air Quality Sensor Section */}
      <section
        className="full-width-section"
        style={{ backgroundColor: "#b3e1eb", paddingTop: "35px", paddingBottom: "35px" }}
      >
        <div className="container">
          <div className="content-section fade-in-up">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                Air quality sensor to measure SO<sub>2</sub>
              </span>
            </h2>
            <img
              className="aligncenter wp-image-64498"
              src="https://www.pranaair.com/wp-content/uploads/2022/12/prana-air-so2-gas-sensor.png"
              alt="air quality monitor to measure so2 level"
              width="683"
         
            />
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section>
        <div className="container">
          <div className="content-section fade-in-up">
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                Choose Your Air Quality Monitor To Measure SO<sub>2</sub> Gas
              </span>
            </h3>
          </div>

          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="product-carousel"
            style={{ paddingBottom: "40px" }}
          >
            <div className="product-item">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/11/prana-air-sulfur-ioxide-so2-sensor-with-board.jpg"
                alt="prana air so2 sensor"
                width="100%"
              />
              <h4>Ambient Air Monitor</h4>
              <p>Measures SO2, NO2, CO, O3, PM2.5, PM10</p>
            </div>
            <div className="product-item">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/03/Sensible-monitor-prana-air.png"
                alt="prana air so2 Air Quality Monitor"
                width="100%"
              />
              <h4>Industrial SO2 Monitor</h4>
              <p>Specialized for industrial environments</p>
            </div>
          </Carousel>

          <div style={{ textAlign: "center" }}>
            <a
              href="https://www.pranaair.com/air-quality-monitor/ambient-air-monitor/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/01/prana-air-caaqms-outdoor-monitor-.jpg"
                alt="Learn more about our air quality monitors"
                className="fade-in-up"
                style={{ maxWidth: "100%" }}
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

