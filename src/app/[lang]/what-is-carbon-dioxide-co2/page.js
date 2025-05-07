"use client"

import { useState } from "react"
import Image from "next/image"
import "./styles.css"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"

export default function CarbonDioxidePage() {
  const [activeTab, setActiveTab] = useState("aqi")

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
      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="banner-content">
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2022/12/what-is-co2.png"
              alt="what is co2 carbon dioxide"
              width={224}
              height={194}
              className="banner-icon"
            />
            <h1 className="whitetext">
              <span className="heading_top_white">
                What is Carbon Dioxide (CO<sub>2</sub>)?
              </span>
            </h1>
            <p className="whitetext">
              <span>
                Carbon Dioxide (CO<sub>2</sub>) is a transparent gas and natural component of air, that acts as a
                greenhouse gas in the atmosphere. It is generally harmless in small quantities but can affect severely
                as the quantities rise, especially indoors where ventilation is low and indoor air cannot recirculate.
                Hence, it can impact sleep patterns, productivity, concentration levels, etc.
              </span>
            </p>
          </div>

          <div className="environment-importance">
            <h2 className="whitetext">
              <span>How is it important in the environment?</span>
            </h2>
            <p className="whitetext">
              <span>
                CO<sub>2</sub> helps plants in the process of photosynthesis, a process through which plants make their
                food. Many animals and humans both depend on plants for their survival. Therefore photosynthesis is
                important for the survival of plants, animals, and humans.
              </span>
            </p>
            <p className="whitetext">
              <span>
                CO<sub>2</sub> helps in trapping the heat and energy from the sun within the earths atmosphere. Because
                this helps in preventing the temperature from getting inhospitably cold and oceans from freezing into
                solid.
              </span>
            </p>
            <div className="plant-icon-container">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/plant-icon-300x271.png"
                alt="plant icon"
                width={161}
                height={145}
                className="plant-icon"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Indoor CO2 Levels Section */}
      <section className="indoor-co2-levels">
        <div className="container">
          <h2>
            <span>
              What do indoor Carbon Dioxide (CO<sub>2)</sub> levels say?
            </span>
          </h2>
          <p>
            <span>
              CO<sub>2</sub> is commonly measured in PPM (Parts Per Million). ASHRAE (The American Society of Heating,
              Refrigerating and Air-Conditioning Engineers) recommended that carbon dioxide levels indoors should be
              maintained below 1000 ppm.
            </span>
          </p>

          <div className="co2-levels-container">
            <div className="co2-levels-list">
              <p>
                <span>Good – 300-600</span>
              </p>
              <p>
                <span>Moderate – 601-800</span>
              </p>
              <p>
                <span>Poor – 801-1000</span>
              </p>
              <p>
                <span>Unhealthy – 1001-1200</span>
              </p>
              <p>
                <span>Severe – 1201-1500</span>
              </p>
              <p>
                <span>Hazardous – Above 1051</span>
              </p>
            </div>
            <div className="co2-levels-image">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/color-scale-of-co2.png"
                alt="CO2 levels chart"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CO2 Sources Section */}
      <section className="co2-sources">
        <div className="container">
          <h2>
            <span>Where does Carbon Dioxide (CO2) come from indoors?</span>
          </h2>
          <p>
            <span>
              The main source of CO<sub>2</sub> indoors is respiration. Because as we inhale oxygen and release CO
              <sub>2</sub>. In the modern age, homes are becoming more airtight, ventilation does not happen that
              frequently and fresh air cannot enter indoors. Many ventilation systems that are used nowadays recirculate
              the air indoors rather than bringing less CO<sub>2</sub> contaminated air from outdoors. As a result, the
              same air is recirculating and recirculating. Hence, this increases the carbon dioxide contamination
              indoors.
            </span>
          </p>
          <div className="co2-sources-image">
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2022/12/sources-of-indoor-co2-level-1024x635.jpg"
              alt="sources of indoor Carbon Dioxide (CO2) level"
              width={1024}
              height={635}
              className="sources-image"
            />
          </div>
        </div>
      </section>

      {/* Health Effects Section */}
      <section className="health-effects">
        <div className="container">
          <h2>
            <span>Health Effects</span>
          </h2>
          <p>
            <span>
              High levels of CO<sub>2</sub> are responsible for
            </span>
          </p>

          <div className="health-effects-grid">
            <div className="health-effect-item">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/low-productivity-due-to-high-co2-300x194.jpg"
                alt="low productivity due to high Carbon Dioxide (CO2)"
                width={456}
                height={295}
                className="health-effect-image"
              />
              <h4>
                <span>1. Lower productivity</span>
              </h4>
              <p>
                <span>
                  High CO<sub>2</sub> affects concentration and attention and in turn productivity.
                </span>
              </p>
            </div>

            <div className="health-effect-item">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/disturbing-sleep-due-to-high-co2.jpg"
                alt="disturbing sleep due to high Carbon Dioxide (CO2)"
                width={456}
                height={295}
                className="health-effect-image"
              />
              <h4>
                <span>2. Disturbed sleep</span>
              </h4>
              <p>
                <span>When limits exceed, one can have difficulty in their sleeping patterns as well.</span>
              </p>
            </div>

            <div className="health-effect-item">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/increased-blood-pressure-due-to-high-co2.jpg"
                alt="Increased blood pressure and heart rate"
                width={456}
                height={295}
                className="health-effect-image"
              />
              <h4>
                <span>3. Increased blood pressure & heart rate</span>
              </h4>
              <p>
                <span>
                  High CO<sub>2</sub> levels can trigger high BP problems due to the vasodilating effect.
                </span>
              </p>
            </div>

            <div className="health-effect-item">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/headache-due-to-high-co2.jpg"
                alt="headache due to high Carbon Dioxide (CO2)"
                width={456}
                height={295}
                className="health-effect-image"
              />
              <h4>
                <span>4. Headache</span>
              </h4>
              <p>
                <span>
                  CO<sub>2</sub> levels highly influence cerebral blood flow, which can cause headache problems.
                </span>
              </p>
            </div>

            <div className="health-effect-item">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/restlessness-due-to-high-co2.jpg"
                alt="restlessness due to high Carbon Dioxide (CO2)"
                width={456}
                height={295}
                className="health-effect-image"
              />
              <h4>
                <span>5. Restlessness</span>
              </h4>
              <p>
                <span>
                  Disorders such as hypercapnia can happen when CO<sub>2</sub> levels are high.
                </span>
              </p>
            </div>

            <div className="health-effect-item">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/diziness-due-to-high-co2.jpg"
                alt="diziness due to high Carbon Dioxide (CO2)"
                width={456}
                height={295}
                className="health-effect-image"
              />
              <h4>
                <span>6. Dizziness</span>
              </h4>
              <p>
                <span>
                  At high levels, CO<sub>2</sub> is known to cause dizziness, vertigo, and other symptoms.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="tips-section">
        <div className="container">
          <h2 className="whitetext">
            <span>How to achieve the ideal Carbon Dioxide (CO2) levels indoors?</span>
          </h2>
          <p className="whitetext">
            <span>10 tips to reduce carbon dioxide levels indoors:</span>
          </p>

          <div className="tips-grid">
            {/* Tip 1 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/ventilation.jpg"
                  alt="Ventilation"
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>1. Ventilation</span>
                </h4>
                <p className="whitetext">
                  <span>
                    Makes it easy for the flow of air. Besides, it is the easiest and most economical way of reducing CO
                    <sub>2</sub>.
                  </span>
                </p>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/use-air-filtration.jpg"
                  alt="Filtration"
                  width={200}
                  height={100}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>2. Filtration</span>
                </h4>
                <p className="whitetext">
                  <span>
                    Air filters with activated carbon filters will help reduce the CO
                    <sub>2</sub> concentration indoors.
                  </span>
                </p>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/plant-trees.jpg"
                  alt="Plants"
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>3. Plants</span>
                </h4>
                <p className="whitetext">
                  <span>
                    Indoor plants such as Snake Plant, Aloe vera, and money plant are known as the natural air filters.
                  </span>
                </p>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/co2-level-indoor.jpg"
                  alt="Decreasing people"
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>4. Decreasing</span>
                </h4>
                <p className="whitetext">
                  <span>
                    The number of people in a room also helps in reducing CO<sub>2</sub> concentrations.
                  </span>
                </p>
              </div>
            </div>

            {/* Tip 5 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/co2-device.jpg"
                  alt="Air quality monitor"
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>5. Use an air quality monitor</span>
                </h4>
                <p className="whitetext">
                  <span>
                    This will help in tracking and keeping a check on the CO<sub>2</sub> levels indoors.
                  </span>
                </p>
              </div>
            </div>

            {/* Tip 6 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/control-co2-emissions.jpg"
                  alt="Control CO2 emissions"
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>6. Control CO2 emissions</span>
                </h4>
                <p className="whitetext">
                  <span>The usage of gas-powered heaters, coal burning, etc. must be controlled.</span>
                </p>
              </div>
            </div>

            {/* Tip 7 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/stop-smoking.jpg"
                  alt="Avoid smoking"
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>7. Avoid smoking</span>
                </h4>
                <p className="whitetext">
                  <span>
                    Indoors as smoking contributes to the overall CO<sub>2</sub> concentrations indoors.
                  </span>
                </p>
              </div>
            </div>

            {/* Tip 8 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/use-air-purifier.jpg"
                  alt="Air purification"
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>8. Air purification</span>
                </h4>
                <p className="whitetext">
                  <span>
                    It does not help in reducing the CO<sub>2</sub> levels but filtered air is better than unfiltered
                    air.
                  </span>
                </p>
              </div>
            </div>

            {/* Tip 9 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/stop-open-fire.jpg"
                  alt="Open flames"
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>9. Open flames</span>
                </h4>
                <p className="whitetext">
                  <span>
                    Must be limited as CO<sub>2</sub> is the primary pollutant emitted by an open fire, such as
                    fireplaces.
                  </span>
                </p>
              </div>
            </div>

            {/* Tip 10 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/check-fuel-leaks.jpg"
                  alt="Check fuel leaks"
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>10. Keep a check on fuel leaks</span>
                </h4>
                <p className="whitetext">
                  <span>
                    CO<sub>2</sub> is released when fuels are burned improperly.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measure CO2 Section */}
      <section className="measure-co2">
        <div className="container">
          <h2 className="whitetext">
            <span>How to Measure CO2 level?</span>
          </h2>
          <p className="whitetext">
            <span>
              Prana Air CO<sub>2</sub> monitor has an embedded sensor that is a Non-Dispersive InfraRed (NDIR) sensor
              with 1 PPM resolution and a 10,000 PPM range. With an LCD screen and multiple data displays, monitor the
              carbon dioxide levels indoors as well as outdoors.
            </span>
          </p>
          <div className="co2-monitor-image">
            <a href="#">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/good-co2-level-with-pocket-monitor-1024x574.png"
                alt="good co2 level with pocket monitor"
                width={819}
                height={459}
                className="monitor-image"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="product-carousel">
        <div className="container">
          <h3>
            <span>Choose Your Air Quality Monitor To Measure CO2</span>
          </h3>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            className="product-slider"
          >
            <div className="product-item">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-co2-sensor.jpg"
                alt="CO2 Sensor"
                width={300}
                height={300}
              />
              <h4>CO2 Sensor</h4>
              <p>Measures CO2 levels with high accuracy</p>
            </div>
            <div className="product-item">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-pocket-co2-monitor.jpg"
                alt="Pocket CO2 Monitor"
                width={300}
                height={300}
              />
              <h4>Pocket CO2 Monitor</h4>
              <p>Portable CO2 monitoring solution</p>
            </div>
            <div className="product-item">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2021/04/prana-air-squair-air-monitor.jpg"
                alt="SQUAIR Air Monitor"
                width={300}
                height={300}
              />
              <h4>SQUAIR Air Monitor</h4>
              <p>Measures CO2 and other pollutants</p>
            </div>
            <div className="product-item">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2021/04/prana-air-sensible-plus-air-quality-monitor.jpg"
                alt="Sensible+ Advanced CO2 Monitor"
                width={300}
                height={300}
              />
              <h4>Sensible+ Advanced CO2 Monitor</h4>
              <p>Professional grade monitoring</p>
            </div>
          </Carousel>
        </div>
      </section>
    </main>
  )
}

