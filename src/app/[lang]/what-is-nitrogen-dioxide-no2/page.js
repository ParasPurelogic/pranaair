"use client"
import "./styles.css"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"

export default function NitrogenDioxidePage() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <main>
      {/* Header Section */}
      <section className="full-width-section bg-light-green">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="empty-space-40"></div>
              <div className="text-center fade-in-up">
                <h1 className="text-center">
                  <img
                    className="wp-image-60375 aligncenter"
                    src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-formula.png"
                    alt="what is nitrogen dioxide (NO2)"
                    width="424"
                    height="70"
                  />
                </h1>
                <h1 className="text-center">
                  <span className="heading_top_white" style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                    What is Nitrogen Dioxide NO<sub>2</sub>?
                  </span>
                </h1>
                <p className="text-center">
                  <span style={{ fontSize: "16pt" }}>
                    Nitrogen Dioxide (NO<sub>2</sub>), accounts for more than 70% of the air present in the environment. And it is the most abundant gas present. For instance, Traffic on the road and the burning of fossil fuels result in poisonous NO<sub>2</sub> air pollution. Hence, it is harmful to humans, plants, and animals.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="bg-white">
        <div className="container">
          <div className="fade-in-up">
            <h4 className="text-center">
              <strong>
                <span style={{ fontSize: "24pt" }}>Sources Of Nitrogen Dioxide (NO2) Gas</span>
              </strong>
            </h4>
            <p className="text-center">
              <span style={{ fontSize: "14pt" }}>
                NO<sub>2</sub> is present in the environment in a very small quantity. But due to our excessive use of resources and other activities, nitrogen dioxide level is increasing to a troublesome level. There are both natural and men-made causes of the formation of the no2 gas.
              </span>
            </p>
          </div>

          {/* Natural Causes */}
          <div className="row align-items-center mb-50">
            <div className="col-12">
              <div className="fade-in-up">
                <h3 className="text-center">
                  <span style={{ fontSize: "18pt" }}>Natural causes include:</span>
                </h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-Volcanic.png"
                        alt="Volcano eruption or active volcanic sites. "
                        width="302"
                        height="302"
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>Volcano eruption or</span>
                  <br />
                  <span style={{ fontSize: "14pt" }}>active volcanic sites.</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-Fertilizer.png"
                        alt="no2 from Fertilizer "
                        width="302"
                        height="302"
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>Biological decay of</span>
                  <br />
                  <span style={{ fontSize: "14pt" }}>waste for fertilizer</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-lighting.png"
                        alt="no2 from Fertilizer "
                        width="302"
                        height="302"
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Lightning strikes-
                    <br />
                    facilitates the formation
                    <br />
                    of the NO<sub>2</sub> gas.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-oceans.png"
                        alt="no2 from oceans"
                        width="302"
                        height="302"
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>Oceans</span>
                </p>
              </div>
            </div>
          </div>

          {/* Manmade Causes */}
          <div className="row align-items-center mb-50">
            <div className="col-12">
              <div className="fade-in-up">
                <h3 className="text-center">
                  <span style={{ fontSize: "18pt" }}>Manmade means of production of Nitrogen Dioxide (NO2) gas are: </span>
                </h3>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-car-pollution.png"
                        alt="no2 from car pollution "
                        width="302"
                        height="302"
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Car, truck, boots,
                    <br />
                    and airplane emissions
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-power-plant.png"
                        alt="no2 from power plant "
                        width="302"
                        height="302"
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Power
                    <br />
                    plants
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-ammonia-emiting-fertilizer.png"
                        alt="no2 from ammonia emitting fertilizers "
                        width="302"
                        height="302"
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Ammonia-emitting fertilizers
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-big-machines.png"
                        alt="no2 from diesel vehicles"
                        width="302"
                        height="302"
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Diesel-powered
                    <br />
                    heavy machines
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-gas-stove.png"
                        alt="no2 from Kerosene and gas stoves"
                        width="302"
                        height="302"
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Kerosene and
                    <br />
                    gas stoves
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>

          <div className="empty-space"></div>
          <div className="mb-50">
            <p className="text-center">
              <span style={{ fontSize: "14pt" }}>
                The main source of nitrogen dioxide produced by human activity is the combustion of fossil fuels. Such as the fuel used in automobiles, the creation of nitric acid, welding, explosives, refinement of petrol and metals, and commercial and food processing.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Health & Environmental Impacts Section */}
      <section className="full-width-section bg-light-green py-50">
        <div className="container">
          <div className="fade-in-up mb-30">
            <h2 className="text-center">
              <span style={{ fontSize: "24pt" }}>Health &amp; Environmental Impacts of NO<sub>2</sub> Gas</span>
            </h2>
            <p className="text-center">
              <span style={{ fontSize: "14pt" }}>
                NO<sub>2</sub> is part of the NOx group of highly reactive gases. Whereas NO<sub>2</sub> is a brownish acidic gas with and pungent odor. It reacts with O2 to form nitric acid responsible for corrosion. And it also plays role in the formation of other pollutants like smog, PM, and acid rain. It is a flame accelerator but itself not combustible.
              </span>
            </p>
          </div>

          {/* Health Impacts */}
          <div className="row mb-30">
            <div className="col-12">
              <div className="fade-in-up">
                <h3 className="text-center">
                  <span style={{ fontSize: "18pt" }}>Health Impacts Due to Nitrogen Dioxide (NO2)</span>
                </h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/lungs-problem-due-to-no2.png"
                  alt="lungs problem due to no2"
                  width="288"
                  height="300"
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Altered lungs
                    <br />
                    function
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/breathing-problems-due-to-no2.png"
                  alt="breathing problems due to no2 "
                  width="288"
                  height="300"
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Breathing
                    <br />
                    problem
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/asthma-due-to-no2.png"
                  alt=" asthma due to no2s"
                  width="288"
                  height="300"
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>Asthma</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/low-Immunity-due-to-no2.png"
                  alt="low Immunity due to no2"
                  width="288"
                  height="300"
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Reduced
                    <br />
                    immunity
                  </span>
                </h4>
              </div>
            </div>
          </div>

          <div className="row mb-70">
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/throat-problem-due-to-no2.png"
                  alt="throat problem due to no2"
                  width="288"
                  height="300"
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Irritation in
                    <br />
                    airways
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/Coughing-due-to-no2.png"
                  alt="Coughing due to no2 "
                  width="288"
                  height="300"
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Coughing, breathing
                    <br />
                    difficulty, wheezing
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/heart-problem-due-to-no2.png"
                  alt=" aheart problem due to no2"
                  width="288"
                  height="300"
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Heart
                    <br />
                    failure
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/premature-death-due-to-no2.png"
                  alt="premature death due to no2"
                  width="288"
                  height="300"
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Reduced birth
                    <br />
                    weight, high risk
                    <br />
                    of premature death
                  </span>
                </h4>
              </div>
            </div>
          </div>

          {/* Environmental Effects */}
          <div className="row mb-30">
            <div className="col-12">
              <div className="fade-in-up">
                <h3 className="text-center">
                  <span style={{ fontSize: "18pt" }}>Environmental effects are severe due to </span>
                  <br />
                  <span style={{ fontSize: "18pt" }}>excessive concentration of this gas:</span>
                </h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/hazy-air-due-to-no2.png"
                  alt="hazy air due to no2"
                  width="288"
                  height="300"
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>Hazy air (smog)</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/polluting-water-due-to-no2.png"
                  alt="polluting water due to no2"
                  width="288"
                  height="300"
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>Polluting water</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/ground-ozone-due-to-no2.png"
                  alt="o3 due to no2"
                  width="288"
                  height="300"
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Generates ground
                    <br />
                    level O3
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/increasing-PM-level-due-to-no2.png"
                  alt="Increases PM levels due to no2"
                  width="288"
                  height="300"
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Increases
                    <br />
                    PM levels
                  </span>
                </h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/acid-rain-caused-by-no2-gas.png"
                  alt="acid rain due to no2"
                  width="288"
                  height="300"
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Acid rain- forming
                    <br />
                    an acidic compound
                    <br />
                    with moisture present
                    <br />
                    in the air
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/plant-growth-due-to-no2.png"
                  alt="plant growth due to no2 "
                  width="288"
                  height="300"
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Affects the vegetation,
                    <br />
                    growth of plants
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/form-pm-due-to-nox.png"
                  alt=" nox"
                  width="288"
                  height="300"
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    NOx + other
                    <br />
                    chemicals leads
                    <br />
                    to formation of PM.
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/stressor-to-plants-due-to-no2.png"
                  alt="stressor to plants due to no2"
                  width="288"
                  height="300"
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    Acts as a stressor to
                    <br />
                    plants and results
                    <br />
                    in chlorophyll content
                    <br />
                    reduction.
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corrective Measures Section */}
      <section className="full-width-section bg-white py-40">
        <div className="container">
          <div className="fade-in-up">
            <h2 className="text-center">
              <span style={{ fontSize: "24pt" }}>Corrective Measures To Reduce Nitrogen Dioxide (NO2) Gas</span>
            </h2>
            <p className="text-center">
              <span style={{ fontSize: "14pt" }}>
                The primary preventive measure is to monitor the concentration of NO<sub>2</sub> which our Prana air sensor and Air quality monitors are quite useful. Other than that there are some corrective measures that could help us keep safe from the respiratory repercussion of this gas:
              </span>
            </p>
          </div>

          <div className="empty-space"></div>

          <div className="row align-items-center">
            <div className="col-12">
              <div className="timeline">
                <div className="timeline-item">
                  <h4>Vehicles with low emission rates can help us with the reduced production of NO<sub>2</sub></h4>
                </div>
                <div className="timeline-item">
                  <h4>Alternate fuels including hydrogen cells and electric-powered cars can be useful in bringing down the overall footprint of NO<sub>2</sub> production.</h4>
                </div>
                <div className="timeline-item">
                  <h4>Avoid traffic congestion. Improving engines to be more efficient</h4>
                </div>
                <div className="timeline-item">
                  <h4>Using public transport</h4>
                </div>
                <div className="timeline-item">
                  <h4>Use of a closed environment for the production of fertilizer and processing of the gases produced in it.</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="empty-space-50"></div>
        </div>
      </section>

      {/* Health Effects Section */}
      <section className="health_effects_section">
        <h2 className="health_heading">Nitrogen Dioxide (NO<sub>2</sub>) and the harm it causes</h2>
        <h2 className="health_heading mobile_level_heading">NO<sub>2</sub> Levels and their health effects</h2>

        <div className="level_range_cntr health_effect_box">
          <div className="lavel_box">
            <span>Levels</span>
            <span className="mg_text"><b>(µg/m<sup>3</sup>)</b></span>
          </div>
          <div className="health_color">
            <span>Health Effects</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>Good</span>
            <p><span>0-40 </span><span className="mobile_mg_text">(mg/m<sup>3</sup>)</span></p>
          </div>
          <div className="health_color Good_color">
            <span>Fresh air</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>Satisfactory</span>
            <p><span>41-80</span><span className="mobile_mg_text">(mg/m<sup>3</sup>)</span></p>
          </div>
          <div className="health_color Satisfactory_color">
            <span> Coughing, difficulty in breathing experienced</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>Moderately polluted</span>
            <p><span>81-180</span><span className="mobile_mg_text">(mg/m<sup>3</sup>)</span></p>
          </div>
          <div className="health_color Moderately_color">
            <span>Breathing difficulties, aggravation of asthma</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>Poor</span>
            <p><span>181-280</span><span className="mobile_mg_text">(mg/m<sup>3</sup>)</span></p>
          </div>
          <div className="health_color poor_color">
            <span>Reduced brain functionality,
              and lung function alterations</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>Very poor</span>
            <p><span>281-400</span><span className="mobile_mg_text">(mg/m<sup>3</sup>)</span></p>
          </div>
          <div className="health_color verypoor_color">
            <span>Brain damage and heart failure</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>Severe</span>
            <p><span>400+</span><span className="mobile_mg_text">(mg/m<sup>3</sup>)</span></p>
          </div>
          <div className="health_color Severe_color">
            <span>Life-threatening </span>
          </div>
        </div>

        <i className="bottom_text">*NAQI as per CBCB. 2-h hourly average values.</i>
      </section>

      {/* Air Quality Sensor Section */}
      <section className="full-width-section bg-light-green py-35">
        <div className="container">
          <div className="fade-in-up">
            <h2 className="text-center">
              <span style={{ fontSize: "24pt" }}>Air quality sensor to measure NO<sub>2</sub></span>
            </h2>
            <img
              className="aligncenter wp-image-64498"
              src="https://www.pranaair.com/wp-content/uploads/2023/01/Prana-air-nO2-sensors.jpg"
              alt="Prana Air NO2 gas sensor"
              width="683"
              height="383"
            />
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-40">
        <div className="container">
          <div className="fade-in-up">
            <h3 className="text-center">
              <span style={{ fontSize: "24pt" }}>Choose Your Air Quality Monitor To Measure NO<sub>2</sub> Gas</span>
            </h3>
          </div>

          <div className="product-carousel-container">
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
            >
              <div className="product-card">
                <div className="product-image-container">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/12/prana-air-nitrogen-dioxide-no2-sensor-with-board.jpg"
                    alt="prana air no2 sensor"
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h4 className="product-title">Prana Air NO2 Sensor</h4>
                </div>
              </div>

              <div className="product-card">
                <div className="product-image-container">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/03/Sensible-monitor-prana-air.png"
                    alt="prana air sensible monitor for no2 monitoring"
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h4 className="product-title">Sensible Monitor</h4>

                </div>
              </div>
            </Carousel>
          </div>

          <div className="text-center mt-40">
            <a href="https://www.pranaair.com/air-quality-monitor/ambient-air-monitor/">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/01/prana-air-caaqms-outdoor-monitor-.jpg"
                alt="prana air Ambient Air Monitor"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
