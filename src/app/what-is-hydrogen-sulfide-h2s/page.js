"use client"
import Image from "next/image"
import "./styles.css"
import "react-multi-carousel/lib/styles.css"

export default function HydrogenSulfidePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundColor: "#60cadf", padding: "30px 0 80px 0" }}>
        <div className="container">
          <div className="hero-content" style={{ padding: "100px 0" }}>
            <div style={{ textAlign: "center" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/h2s-gas-icon.png"
                alt="h2s gas icon"
                width={180}
                height={176}
                className="aligncenter"
              />
            </div>

            <h2 style={{ textAlign: "center", fontSize: "36pt", lineHeight: "1.2" }}>
              <span className="whitetext">
                Hydrogen Sulfide (H<sub>2</sub>S)
              </span>
            </h2>

            <p className="whitetext" style={{ overflowWrap: "break-word", width: "auto", textAlign: "center" }}>
              <span style={{ fontSize: "18pt" }}>
                Hydrogen Sulfide, H<sub>2</sub>S is a highly toxic gas that has a distinctive and unpleasant rotten-egg
                smell. It is a colorless gas, that can occur naturally in the air via various crude or natural oil
                sources, volcanic gases, and spring waters. Trace amounts of H<sub>2</sub>S can be found in the
                atmosphere which is generally not harmful.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* H2S in Environment Section */}
      <section className="environment-section" style={{ paddingTop: "50px", backgroundColor: "#fefdfd" }}>
        <div className="container">
          <div className="environment-content" style={{ paddingBottom: "35px" }}>
            <h4 className="air_heading" style={{ textAlign: "center" }}>
              <strong>
                <span style={{ fontSize: "24pt" }}>
                  <span style={{ color: "#2a2a2c" }}>
                    <span style={{ color: "#60cadf" }}>Hydrogen Sulfide</span> in the Environment
                  </span>
                </span>
              </strong>
            </h4>

            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                Hydrogen Sulfide is produced by bacterial breakage of animal, plant, and human waste. It can be produced
                by volcanic gases, and natural springs as well. H<sub>2</sub>S gas dissolved in the soil helps in the
                root growth of plants.
              </span>
            </p>

            <div style={{ textAlign: "center" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/hydrogen-sulfide-in-the-environment-1024x526.jpg"
                alt="hydrogen sulfide in the environment"
                width={1024}
                height={526}
                className="aligncenter"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Do You Know Section */}
      <section
        className="do-you-know-section"
        style={{
          marginTop: "90px",
          marginBottom: "50px",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundImage: "url('https://www.pranaair.com/wp-content/uploads/2023/03/bng-vector.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-11" style={{ paddingLeft: "30px" }}>
              <h2 className="douknow_text">
                <span style={{ color: "#60cadf" }}>DO YOU KNOW</span>
              </h2>
              <p style={{ textAlign: "left" }}>
                <span style={{ fontSize: "15pt" }}>
                  The primary target organ of hydrogen sulfide poisoning is the respiratory system. Once inhaled,
                  hydrogen sulfide is quickly absorbed by the lungs. This may result in cardiac arrest or even death
                  since it affects the neurological and cardiac tissues. The most well-known symptom of hydrogen sulfide
                  poisoning is sudden death among sewage workers. All exposures to H<sub>2</sub>S should be avoided
                  because they have severe harmful effects.
                  <em> - Saiyed, H N. Indian Journal of Medical Research; New Delhi</em>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="sources-section" style={{ paddingTop: "90px", backgroundColor: "#bbe5fb" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "24pt" }}>Sources of Hydrogen Sulphide Gas</h2>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>
              Hydrogen sulphide gas is produced naturally from decaying organic matter and industrial processes, and can
              be lethal in high concentrations. Following are some of its potential sources:
            </span>
          </p>

          <h3 style={{ textAlign: "center", fontSize: "18pt" }}>Natural Sources</h3>

          <div className="row">
            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/volcanic-gases.png"
                  alt="h2s from volcanic gases"
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>Volcanic Gases</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  During volcanic activity, volcanoes naturally release H2S gas through their vents and cracks.
                </p>
              </div>
            </div>

            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/gas-wells.png"
                  alt="h2s from gas wells"
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>Gas wells</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  H2S gas may be present in natural gas wells and could be released during production and drilling.
                </p>
              </div>
            </div>

            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/natural-reservoirs.png"
                  alt="h2s from natural reservoirs"
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>Natural Gas Reservoirs</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  It may be present in natural gas reservoirs, and can be discharged during processing and extraction.
                </p>
              </div>
            </div>

            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/natural-springs.png"
                  alt="h2s gas from natural springs"
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>Natural Springs</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  As sulfur-containing minerals react with water to produce H2S gas, natural springs can be a source of
                  H2S gas.
                </p>
              </div>
            </div>

            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/crude-petroleum.png"
                  alt="h2s from crude petroleum"
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>Crude Petroleum</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  Crude petroleum may produce H2S gas during extraction and processing, posing health and safety issues.
                </p>
              </div>
            </div>
          </div>

          <div style={{ paddingTop: "30px" }}>
            <h3 style={{ textAlign: "center", fontSize: "18pt" }}>Industrial Sources</h3>
          </div>

          <div className="row" style={{ paddingBottom: "40px" }}>
            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/sewage-treatment-plants.png"
                  alt="h2s from sewage treatment plants"
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>Sewage Treatment</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  From the decomposition of the organic content in wastewater, sewage treatment plants might emit H2S
                  gas.
                </p>
              </div>
            </div>

            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/refineries.png"
                  alt="h2s from refineries"
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>Refineries</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  Refineries can generate H2S gas by the processing of sulphur-containing crude oil. The gas can pose
                  threat to ones health and safety.
                </p>
              </div>
            </div>

            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/kraft-paper-mills.png"
                  alt="h2s from kraft paper mills"
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>Kraft Paper Mills</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  In the pulping process, kraft paper mills use chemicals based on sulphur, which produces H2S gas as a
                  byproduct
                </p>
              </div>
            </div>

            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/food-processing.png"
                  alt="h2s from food processing"
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>Food Processing</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  Food processing units that utilize sulphurs and sulphuric acid emit H2S gas into the surrounding
                  environment.
                </p>
              </div>
            </div>

            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/water-treatment-plants.png"
                  alt="h2s from water treatment plants"
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>Wastewater Treatment</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  Wastewater treatment plants produce H2S gas during the breakdown of organic matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Hazards Section */}
      <section className="health-hazards-section" style={{ paddingTop: "90px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center", fontSize: "24pt" }}>
            Hydrogen Sulphide gas <span style={{ color: "#60cadf" }}>Health Hazards</span>
          </h2>

          <p style={{ textAlign: "center", fontSize: "13pt" }}>
            H2S is extremely hazardous for workers, laborers, miners, etc. that have to work with this gas continuously,
            on a regular basis. It is a highly flammable gas and can react with steel at ambient temperature. This makes
            handling, storage, transportation, and working with the gas very laborious and demanding.
          </p>

          <div style={{ textAlign: "center" }}>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/03/h2s-health-hazards-1024x763.jpg"
              alt="h2s health hazards"
              width={800}
              height={596}
              className="aligncenter"
            />
          </div>

          <p style={{ textAlign: "center", fontSize: "14pt" }}>
            Keeping in mind the acute health hazards of occupational hydrogen sulfide emissions, the following table
            shows the levels of H<sub>2</sub>S in PPM by the Industrial Safety and Chemical Hazards Sectional Committee.
          </p>
        </div>
      </section>

      {/* H2S Levels Table */}
      <section className="h2s-levels-section" style={{ paddingTop: "40px" }}>
        <div className="container">
          <div className="h2levels_table">
            <div className="thead_top">
              <ul>
                <li>
                  H<sub>2</sub>S levels (PPM)
                </li>
                <li>Duration of exposure</li>
              </ul>
            </div>

            <table width="100%">
              <thead className="thead_row">
                <tr>
                  <th></th>
                  <th>15 min</th>
                  <th>&gt;15 min</th>
                  <th>&gt;1h-4h</th>
                  <th>&gt;4-8ht</th>
                </tr>
              </thead>
              <tbody>
                <tr className="Good_color">
                  <td>10</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Eye irritation</td>
                  <td>
                    Maximum tolerable <br /> concentration for prolonged exposure
                  </td>
                </tr>
                <tr className="Satisfactory_color">
                  <td>50-100</td>
                  <td>
                    Loss of olfactory
                    <br /> perception
                  </td>
                  <td>Eye irritation</td>
                  <td>
                    Eye and
                    <br />
                    bronchial irritation
                  </td>
                  <td>
                    Serious respiratory <br />
                    distress and asthenia
                  </td>
                </tr>
                <tr className="Moderately_color">
                  <td>150-250</td>
                  <td>Eye and skin irritation</td>
                  <td>Eye and bronchial irritation</td>
                  <td>
                    Serious respiratory
                    <br />
                    distress and asthenia
                  </td>
                  <td>
                    Danger in case of
                    <br />
                    continuous exposure
                  </td>
                </tr>
                <tr className="poor_color">
                  <td>300-400</td>
                  <td>
                    Loss of olfactory
                    <br />
                    perception eye
                  </td>
                  <td>
                    Severe respiratory distress
                    <br />
                    acute asthenia
                  </td>
                  <td>
                    Pulmonary edema &<br />
                    risk of death
                  </td>
                  <td>
                    Pulmonary edema &<br />
                    risk of death
                  </td>
                </tr>
                <tr className="verypoor_color">
                  <td>500-1,000</td>
                  <td>
                    Loss of consciousness
                    <br />
                    respiratory distress
                  </td>
                  <td>
                    Risk of pulmonary
                    <br />
                    edema and death
                  </td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>

            <div className="thead_top Severe_color">
              <ul>
                <li>&gt;1,000</li>
                <li>
                  Immediate loss of consciousness and
                  <br />
                  respiratory distress
                </li>
              </ul>
            </div>
          </div>

          <p style={{ textAlign: "right" }}>
            <em>* As per BUREAU OF INDIAN STANDARDS</em>
          </p>
        </div>
      </section>

      {/* Preventive Measures Section */}
      <section className="preventive-measures-section" style={{ paddingTop: "90px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center", fontSize: "24pt" }}>
            <span style={{ color: "#60cadf" }}>Preventive measures</span> if you are working with{" "}
            <span style={{ color: "#60cadf" }}>Hydrogen Sulphide</span>
          </h2>

          <div className="row prevention_section">
            <div className="col-md-3" style={{ textAlign: "center" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/storage-space-200x200.png"
                alt="Monitor your storage space"
                width={200}
                height={200}
              />
            </div>
            <div className="col-md-9">
              <p>
                <span style={{ fontSize: "14pt" }}>
                  <strong>Monitor your storage space</strong>
                </span>
              </p>
              <p>
                <span style={{ fontSize: "14pt" }}>
                  Make sure to monitor the storage area in real time so that any spillages or leakages can be identified
                  and immediate strategies can be adopted.
                </span>
              </p>
            </div>
          </div>

          <div className="row prevention_section">
            <div className="col-md-3" style={{ textAlign: "center" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/maintain-temperature-200x200.png"
                alt="Keep an eye on the temperature"
                width={200}
                height={200}
              />
            </div>
            <div className="col-md-9">
              <p>
                <strong>
                  <span style={{ fontSize: "14pt" }}>Keep an eye on the temperature</span>
                </strong>
              </p>
              <p>
                <span style={{ fontSize: "14pt" }}>
                  Maintain the temperature where the gas is stored as the higher temperature can decompose the gass
                  elements that can cause the bursting of the storage container.
                </span>
              </p>
            </div>
          </div>

          <div className="row prevention_section">
            <div className="col-md-3" style={{ textAlign: "center" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/no-smoking-area-200x200.png"
                alt="No smoking near storage area"
                width={200}
                height={200}
              />
            </div>
            <div className="col-md-9">
              <p>
                <strong>
                  <span style={{ fontSize: "14pt" }}>No smoking near storage area</span>
                </strong>
              </p>
              <p>
                <span style={{ fontSize: "14pt" }}>
                  The area where the gas is stored should be NO SMOKING AREA as the gas is highly flammable. A small
                  spark can be deadly if there is hydrogen sulphide gas in the air.
                </span>
              </p>
            </div>
          </div>

          <div className="row prevention_section">
            <div className="col-md-3" style={{ textAlign: "center" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/proper-ventilation-200x200.png"
                alt="Ventilation is the key"
                width={200}
                height={200}
              />
            </div>
            <div className="col-md-9">
              <p>
                <span style={{ fontSize: "14pt" }}>
                  <strong>Ventilation is the key</strong>
                </span>
              </p>
              <p>
                <span style={{ fontSize: "14pt" }}>
                  The area must be highly ventilated. Hydrogen sulfide is heavier than air. It can easily travel to any
                  source of ignition. That is why ventilation is important in storage areas.
                </span>
              </p>
            </div>
          </div>

          <div className="row prevention_section">
            <div className="col-md-3" style={{ textAlign: "center" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/precautionary-measure-200x200.png"
                alt="Use precautionary measure"
                width={200}
                height={200}
              />
            </div>
            <div className="col-md-9">
              <p>
                <strong>
                  <span style={{ fontSize: "14pt" }}>Use precautionary measure</span>
                </strong>
              </p>
              <p>
                <span style={{ fontSize: "14pt" }}>
                  Protective gear must be used while handling the gas such as safety goggles, airtight clothing,
                  respiratory protection gear, etc. Prevent direct skin contact.
                </span>
              </p>
            </div>
          </div>

          <div className="row prevention_section">
            <div className="col-md-3" style={{ textAlign: "center" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/fire-extinguisher-200x200.png"
                alt="Ready to use fire safety"
                width={200}
                height={200}
              />
            </div>
            <div className="col-md-9">
              <p>
                <span style={{ fontSize: "14pt" }}>
                  <strong>Ready to use fire safety</strong>
                </span>
              </p>
              <p>
                <span style={{ fontSize: "14pt" }}>
                  Keep a fire extinguisher in hand if any accident happens. There are high chances of fire as the
                  hydrogen sulphide gas is highly flammable.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How To Detect H2S Gas Section */}
      <section className="detect-h2s-section" style={{ paddingTop: "90px", paddingBottom: "25px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center", fontSize: "24pt" }}>
            How To Detect{" "}
            <span style={{ color: "#2fbcbc" }}>
              H<sub>2</sub>S Gas
            </span>
          </h2>

          <p style={{ textAlign: "center", fontSize: "14pt" }}>
            An air quality monitor/sensor can detect H2S gas and furnish real-time information on its concentration in
            the air. This data can aid in making well-informed decisions to safeguard public health and the environment.
          </p>

          <div className="row">
            <div className="col-md-6">
              <h4 style={{ textAlign: "center", fontSize: "18pt" }}>
                <strong>
                  <span style={{ color: "#020303" }}>
                    H<sub>2</sub>S Sensor
                  </span>
                </strong>
              </h4>

              <p style={{ textAlign: "center" }}>
                <a href="#">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-h2s-sensor-of-highly-accurate-1024x788.jpg"
                    alt="prana air h2s sensor of highly accurate"
                    width={350}
                    height={269}
                    className="aligncenter"
                  />
                </a>
              </p>
            </div>

            <div className="col-md-6">
              <h3 style={{ textAlign: "center", fontSize: "18pt" }}>
                <strong>
                  <span style={{ color: "#000000" }}>
                    H<sub>2</sub>S Monitor
                  </span>
                </strong>
              </h3>

              <p style={{ textAlign: "center" }}>
                <a href="#">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/03/h2s-ambient-air-quality-monitor-932x1024.png"
                    alt="h2s ambient air quality monitor"
                    width={300}
                    height={330}
                    className="aligncenter"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Air Quality Monitor Section */}
      <section className="choose-monitor-section" style={{ paddingTop: "80px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center", fontSize: "24pt" }}>
            Choose An Air Quality Monitor To Measure
            <br />
            Hydrogen Sulfide (H<sub>2</sub>S) Gas
          </h2>

          <p style={{ textAlign: "center" }}>
            <a href="#">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/01/prana-air-caaqms-outdoor-monitor--1024x512.jpg"
                alt="prana air caaqms outdoor monitor"
                width={1024}
                height={512}
                className="aligncenter"
              />
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}

