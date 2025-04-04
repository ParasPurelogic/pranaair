"use client"
import Image from "next/image"
import "./styles.css"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"

export default function HumidityPage() {
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
      <section className="full-width-section blue-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
              <div className="empty-space" style={{ height: "50px" }}></div>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-icon.png"
                alt="Humidity Icon"
                width={200}
                height={200}
                className="center-image"
              />
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "15px" }}>
                <h1 className="whitetext" style={{ textAlign: "center", fontSize: "50pt", lineHeight: "1.1" }}>
                  What Is Humidity?
                </h1>
              </div>
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "40px", paddingBottom: "30px" }}>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "16pt" }}>
                  Humidity is the term for the gaseous water content in the air. The quantity of gaseous water (water
                  vapor) in the atmosphere is known as HUMIDITY, which can change when water is present in excess
                  amounts. For example, when it is about to rain, there is a lot of water vapor in the air.
                </p>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Where does Humidity come from? */}
      <section className="full-width-section blue-bg" style={{ paddingBottom: "80px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "15px", paddingBottom: "20px" }}>
                <h2 className="whitetext" style={{ textAlign: "center", fontSize: "24pt", lineHeight: "1.1" }}>
                  Where does Humidity come from?
                </h2>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "16pt" }}>
                  There are many factors that decide the humidity of a place, both indoors and outdoors. Temperature
                  plays an important role in deciding the relative humid levels indoors as well as outdoors. For
                  example, when the temperature is hot, the humid level decreases as the air can hold more water
                  content. But when the temperature decreases, the air cannot hold much moisture. Hence, the relative
                  humid level increases. Therefore, when the temperature indoors is cold or hot enough, we need to warm
                  or cool it up, respectfully, to maintain the ideal humidity levels. When there is 100% humidity in the
                  air, it will rain as the air wont be able to hold more water vapour.
                </p>
              </div>
              <div className="image-box text-center">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/humidity-cloud-image.png"
                  alt="Humidity Icon"
                  width={500}
                  height={300}
                  className="center-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relative & Absolute Humidity */}
      <section className="full-width-section blue-bg" style={{ paddingBottom: "80px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "40px" }}>
                <h2 className="whitetext" style={{ textAlign: "center", fontSize: "20pt" }}>
                  What is the difference between Relative &amp; Absolute Humidity?
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "40px" }}>
                <h2 className="whitetext" style={{ textAlign: "center", fontSize: "18pt" }}>
                  <strong>Relative Humidity</strong>
                </h2>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  The ratio of the amount of water vapour in the atmosphere to the highest amount of vapour that the air
                  can hold is known as relative humidity.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "40px" }}>
                <h2 className="whitetext" style={{ textAlign: "center", fontSize: "18pt" }}>
                  <strong>Absolute Humidity</strong>
                </h2>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  Whereas the quantity of water vapour present in a particular amount of air at a given time and
                  temperature is known as absolute humidity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Are humidity and moisture the same? */}
      <section className="full-width-section blue-bg" style={{ paddingTop: "50px", paddingBottom: "30px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "40px", paddingBottom: "30px" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/humidity-icon.png"
                  alt="Humidity Icon"
                  width={195}
                  height={194}
                  className="center-image"
                />
                <h2 className="whitetext" style={{ textAlign: "center" }}>
                  Are humidity and moisture the same?
                </h2>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  Humidity is the amount of water vapour in the air in its gaseous state. Whereas moisture is the
                  content of water in its liquid state. When air reaches its limit to absorb water in the form of water
                  vapour, water will begin to condense as drops in the air that is why clouds form. That is known as
                  moisture. When humidity reaches its peak, rainfall happens, that is moisture.
                </p>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>

      {/* Factors that affect Humidity Level */}
      <section className="full-width-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "40px", paddingBottom: "30px" }}>
                <h2 style={{ textAlign: "center", fontSize: "24pt" }}>
                  Factors that affect <strong>Humidity</strong> Level Indoor &amp; Outdoor
                </h2>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingBottom: "50px" }}>
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingBottom: "40px" }}>
                <h3 style={{ textAlign: "center", fontSize: "18pt" }}>Outdoors Environment</h3>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-air-movement.png"
                    alt="Humidity due to air movement"
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>Air Movement</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>
                    Higher wind speeds result in less water evaporation and lowers it, while lower wind speeds result in
                    more evaporation &amp; higher humidity.
                  </p>
                </div>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-high-temperature.png"
                    alt="Humidity due to temperature"
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>Temperature</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>
                    The air can store more water vapour when the temperature increases, hence a warmer atmosphere may
                    have a higher level of it.
                  </p>
                </div>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-wind-speed.png"
                    alt="Humidity due to wind speed"
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>Wind Speed</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>
                    Lower wind speeds result in more water evaporation &amp; higher humidity, while higher wind speeds
                    result in less evaporation &amp; lower its level.
                  </p>
                </div>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-precipitation.png"
                    alt="Precipitation"
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>Precipitation</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>
                    Its level will rise the longer it rains because the air is constantly absorbing water.
                  </p>
                </div>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-air-pressure.png"
                    alt="Humidity due to air pressure"
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>Air Pressure</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>
                    It depends on the atmospheric pressures at different geographical locations, temperature, and air
                    pressure in the respective area.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-box">
                <h3 style={{ textAlign: "center", fontSize: "18pt" }}>Indoor Environment</h3>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-cooking.png"
                    alt="Humidity due to cooking or boiling water"
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>Cooking or boiling water</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>
                    Cooking and water boiling activities release water vapour in the air. This will add to the relative
                    level of that room.
                  </p>
                </div>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-gas-heaters.png"
                    alt="Gas heater"
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>Appliances such as Gas Heaters</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>
                    One litre of moisture is produced every hour while using a non-fueled gas heater.
                  </p>
                </div>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidit-due-to-ventilation-rate.png"
                    alt="Ventilation rate"
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>Ventilation Rate</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>
                    Its high level indicates inadequate ventilation. Extremely high indoor humidity is linked to an
                    increase in the development of bacteria and mould.
                  </p>
                </div>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-drying-clothes.png"
                    alt="Humidity due to drying cloths indoor"
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>Drying the clothes indoors</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>
                    Drying the clothes indoors can increase its relative level in a room and therefore will increase the
                    risks of mould and bacteria growth.
                  </p>
                </div>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-water-leakages.png"
                    alt="Water leakages"
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>Water leakages</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>
                    Water leakages can increase both moisture &amp; humidity. As a result, the air will become stale
                    &amp; the chances of getting sick due to bacteria will increase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens When Humidity Level Is Very Low & High? */}
      <section className="full-width-section light-green-bg" style={{ paddingTop: "50px", paddingBottom: "30px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box animation-fadeInUp" style={{ paddingBottom: "50px" }}>
                <h2 style={{ textAlign: "center", fontSize: "24pt" }}>
                  What Happens When <strong>Humidity</strong> Level Is Very Low &amp; High?
                </h2>
                <p style={{ textAlign: "center", fontSize: "14pt" }}>
                  The ideal or healthy range of it should be maintained between 30-60%. Because it is unhealthy when it
                  exceeds or is lower than the ideal limit, it causes many discomforts. Hence, it can result in the
                  growth of mold and bacteria.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingBottom: "40px" }}>
                <h3 style={{ textAlign: "center", fontSize: "18pt" }}>When humidity is high (&gt; or = to 60%)</h3>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/mold-and-mildew-due-to-high-humidity.png"
                    alt="Encourages Mold & Mildew due to high humidity"
                    width={150}
                    height={150}
                    className="alignleft"
                  />
                  <h4 style={{ textAlign: "left" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>Encourages Mold &amp; Mildew</span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "left", fontSize: "14pt" }}>
                    When its relative level is more than 60%, it can promote the growth of mold and mildew. Certain
                    types of toxic molds can seriously impact ones health. For example, black mold is considered very
                    dangerous for humans.
                  </p>
                </div>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/bacteria-due-to-humidity.png"
                    alt="Virus and bacteria due to high humidity"
                    width={150}
                    height={150}
                    className="alignleft"
                  />
                  <h4 style={{ textAlign: "left" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>Virus and bacteria</span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "left", fontSize: "14pt" }}>
                    When you spend too much time in too humid conditions, it might trigger allergies &amp; make you
                    sick. Because viruses and bacteria thrive in humidity above 60% which can cause various respiratory
                    illness symptoms.
                  </p>
                </div>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/excess-sweating.png"
                    alt="Excess sweating due to high humidity"
                    width={150}
                    height={150}
                    className="alignleft"
                  />
                  <h4 style={{ textAlign: "left" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>Excess Sweating</span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "left", fontSize: "14pt" }}>
                    Humidity means that the air contains water vapour. When the air becomes more humid, people
                    experience excessive sweating. Because the sweat will not evaporate easily. Or it will take more
                    time than usual due to high water vapour in the air.
                  </p>
                </div>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/increase-respiratory.png"
                    alt="Increase respiratory due to high humidity"
                    width={150}
                    height={150}
                    className="alignleft"
                  />
                  <h4 style={{ textAlign: "left" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>Increased Respiration</span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "left", fontSize: "14pt" }}>
                    Due to high temperature, when our bodies heat up naturally, we sweat. That sweat then evaporates to
                    keep our bodies cool. Due to excess moisture in the air, our bodies need to work harder to cool off.
                    This increases blood circulation and respiration.
                  </p>
                </div>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/wall-damage.png"
                    alt="Wall damage due to high humidity"
                    width={150}
                    height={150}
                    className="alignleft"
                  />
                  <h4 style={{ textAlign: "left" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>Damage Your Belongings</span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "left", fontSize: "14pt" }}>
                    High humidity can damage your furniture, floorings, wallpaper, paintwork, etc. High humidity results
                    in condensation that gather on your walls. So, the paint will start to flake and the wallpaper will
                    curl up.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-box">
                <h3 style={{ textAlign: "center", fontSize: "18pt" }}>When humidity is low (&lt; 30%)</h3>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/germs-and-virus-with-low-humidity.png"
                    alt="Virus and germs due to low humidity"
                    width={150}
                    height={150}
                    className="alignright"
                  />
                  <h4 style={{ textAlign: "right" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>Germs and Viruses</span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "right", fontSize: "14pt" }}>
                    Due to low humid level, germs &amp; viruses disperse, and travel around freely. As a result, they
                    thrive in low humid level, and diseases such as RTIs are more common when relative level is low.
                  </p>
                </div>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/sceptibility-to-respiratory.png"
                    alt="Sceptibility to respiratory due to low humidity"
                    width={150}
                    height={150}
                    className="alignright"
                  />
                  <h4 style={{ textAlign: "right" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>Susceptibility to respiratory diseases</span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "right", fontSize: "14pt" }}>
                    Low humid level and low temperatures result in more susceptibility to catching respiratory diseases,
                    colds, and many other respiratory tract infections like sinusitis, otitis, bronchitis, and
                    pneumonia. This is because low humid level will result in drying out the airways.
                  </p>
                </div>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/dry-skin.png"
                    alt="Dry skin due to low humidity"
                    width={150}
                    height={150}
                    className="alignright"
                  />
                  <h4 style={{ textAlign: "right" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>Dry Hair and Dry Skin</span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "right", fontSize: "14pt" }}>
                    When the air has low humid, skin, and hair do not retain or get enough moisture. As a result, the
                    skin will flake resulting in skin irritation and itching and can worsen skin conditions like eczema
                    and psoriasis. Whereas hair will become more dry, frizzy, dull, and will break more often.
                  </p>
                </div>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/influenza.png"
                    alt="Influenza due to low humidity"
                    width={150}
                    height={150}
                    className="alignright"
                  />
                  <h4 style={{ textAlign: "right" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>Influenza</span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "right", fontSize: "14pt" }}>
                    Low relative humidity results in chances of spreading influenza. Low humidity further reduces the
                    ability of cilia (hair-like structures in the airway cells) in removing viruses such as Covid 19 and
                    preventing damage done to the lungs due to such viruses.
                  </p>
                </div>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/low-performance-of-student.png"
                    alt="Low performance of student due to low humidity"
                    width={150}
                    height={150}
                    className="alignright"
                  />
                  <h4 style={{ textAlign: "right" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>Decreased performance</span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "right", fontSize: "14pt" }}>
                    Even minor variations in relative humidity and temperature can create measurable changes in your
                    abilities to concentrate or accomplish tasks, especially in places like schools and offices where
                    concentration is extremely important.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How To Maintain the Good Humidity Indoor? */}
      <section className="full-width-section blue-bg" style={{ marginTop: "30px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "30px", paddingBottom: "50px" }}>
                <h2 className="whitetext" style={{ textAlign: "center", fontSize: "24pt" }}>
                  How To Maintain the Good Humidity Indoor?
                </h2>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "18pt" }}>
                  Healthy or ideal indoor relative humid levels should be between 30-60%.
                </p>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingBottom: "35px" }}>
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingBottom: "15px" }}>
                <div className="text-center">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/fix-leakage.png"
                    alt="Fix leakage or any pipe leak"
                    width={200}
                    height={195}
                    className="center-image"
                  />
                </div>
                <h4 className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  <strong>Fix any leakages or pipe leaks</strong>
                </h4>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  Fix any broken pipes, faucets, and leakages that can result in more moisture and condensation indoors.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingBottom: "15px" }}>
                <div className="text-center">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/dry-cloths-outside-300x174.png"
                    alt="Dry cloths outside"
                    width={316}
                    height={183}
                    className="center-image"
                  />
                </div>
                <h4 className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  <strong>Dry your clothes outside</strong>
                </h4>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  Its recommended to dry your laundry outdoors as they can increase the relative humid level of a room
                  if dried indoors.
                </p>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingBottom: "35px" }}>
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingBottom: "15px" }}>
                <div className="text-center">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/relocate-indoor-plants-300x155.png"
                    alt="Relocate indoor plants"
                    width={300}
                    height={155}
                    className="center-image"
                  />
                </div>
                <h4 className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  <strong>Relocate your indoor plants</strong>
                </h4>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  If the relative humid level of a room is higher and it has plants in that room, consider relocating
                  them as they are a potential source.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingBottom: "15px" }}>
                <div className="text-center">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/use-a-dehumidifier.png"
                    alt="Use a dehumidifier"
                    width={112}
                    height={154}
                    className="center-image"
                  />
                </div>
                <h4 className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  <strong>Use Dehumidifiers</strong>
                </h4>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  Dehumidifiers will help you reduce the relative humid level of your space if you have high level
                  problems in your room.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingBottom: "15px" }}>
                <div className="text-center">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/use-charcoal-pieces.png"
                    alt="Use charcoal pieces"
                    width={234}
                    height={213}
                    className="center-image"
                  />
                </div>
                <h4 className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  <strong>Use charcoal pieces</strong>
                </h4>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  Charcoal is a great absorber. A single piece of charcoal can reduce humid levels in your air. They
                  just need to be replaced every 2-3 months.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-box">
                <div className="text-center">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/open-windows.png"
                    alt="Open windows"
                    width={194}
                    height={199}
                    className="center-image"
                  />
                </div>
                <h4 className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  <strong>Open windows</strong>
                </h4>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  Opening windows in areas with high level of it, such as bathrooms is one of the easy solutions. This
                  will increase ventilation as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Humidity levels and what do they mean? */}
      <section className="full-width-section light-green-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box animation-fadeInUp" style={{ marginBottom: "30px", paddingTop: "30px" }}>
                <h2 style={{ textAlign: "center" }}>Humidity levels and what do they mean?</h2>
                <p style={{ textAlign: "center", fontSize: "14pt" }}>
                  Healthy or ideal indoor relative humid levels should be between 30-60%
                </p>

                <table
                  className="humidity-table"
                  style={{ width: "98.7412%", height: "164px" }}
                  border="1"
                  cellSpacing="0"
                  cellPadding="0"
                >
                  <tbody>
                    <tr style={{ height: "27px" }}>
                      <td style={{ textAlign: "center", width: "22.6893%", height: "27px" }}>
                        <span style={{ fontSize: "12pt" }}>
                          <strong>
                            <span style={{ color: "#000000" }}>Humidity Level</span>
                          </strong>
                        </span>
                      </td>
                      <td style={{ textAlign: "center", width: "173.118%", height: "27px" }}>
                        <span style={{ fontSize: "12pt" }}>
                          <strong>
                            <span style={{ color: "#000000" }}>What does it mean?</span>
                          </strong>
                        </span>
                      </td>
                    </tr>
                    <tr style={{ height: "55px" }}>
                      <td style={{ width: "22.6893%", textAlign: "center", height: "55px" }}>
                        <span style={{ color: "#000000", fontSize: "12pt" }}>= 70%</span>
                      </td>
                      <td style={{ width: "173.118%", height: "55px", textAlign: "left" }}>
                        <span style={{ color: "#000000", fontSize: "12pt" }}>
                          Dust mites, the most common dust allergens for asthma, thrive when relative humid level is at
                          or above 70.
                        </span>
                      </td>
                    </tr>
                    <tr style={{ height: "27px" }}>
                      <td style={{ width: "22.6893%", textAlign: "center", height: "27px" }}>
                        <span style={{ color: "#000000", fontSize: "12pt" }}>30-60%</span>
                      </td>
                      <td style={{ width: "173.118%", height: "27px", textAlign: "left" }}>
                        <span style={{ color: "#000000", fontSize: "12pt" }}>Ideal relative humidity indoors.</span>
                      </td>
                    </tr>
                    <tr style={{ height: "55px" }}>
                      <td style={{ width: "22.6893%", textAlign: "center", height: "55px" }}>
                        <span style={{ color: "#000000", fontSize: "12pt" }}>&gt;30%</span>
                      </td>
                      <td style={{ width: "173.118%", height: "55px", textAlign: "left" }}>
                        <span style={{ color: "#000000", fontSize: "12pt" }}>
                          Low relative humid level. Increases the chances of catching airborne viruses. Eye, nose, and
                          throat dryness.
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p style={{ textAlign: "center", fontSize: "14pt" }}>
                  Healthy or ideal indoor relative humidity levels should be between 30-60%. It levels &gt;= 70% promote
                  the growth of dust mites, the most common dust allergens for asthma, and they thrive when relative
                  humidity is at or above 70. Further, its level below 30% mean relative humid level is low that
                  increases the chances of catching airborne viruses. Eye, nose, and throat dryness.
                </p>
              </div>

              <div className="content-box animation-fadeInUp" style={{ paddingTop: "30px" }}>
                <h2 style={{ textAlign: "center", fontSize: "18pt" }}>WHO Guidelines of Humidity</h2>
                <table className="who-table" style={{ width: "90.9916%" }} border="1" cellSpacing="0" cellPadding="0">
                  <tbody>
                    <tr>
                      <td style={{ width: "47.0358%", textAlign: "center" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>
                          <strong>Measure</strong>
                        </span>
                      </td>
                      <td style={{ width: "90.0448%", textAlign: "center" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>
                          <strong>Risk Estimate</strong>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "47.0358%" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>Self-reported humidity</span>
                      </td>
                      <td style={{ width: "90.0448%", textAlign: "left" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>- 2.71 (1.07–6.91) for cold</span>
                        <br />
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>- 3.02 (1.14–7.98) for sore throat</span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "47.0358%" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>Signs of high humidity</span>
                      </td>
                      <td style={{ width: "90.0448%", textAlign: "left" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>- 3.97 (3.74–4.22)</span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "47.0358%" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>
                          Absolute indoor humidity &gt; median, 5.8 g/kg
                        </span>
                      </td>
                      <td style={{ width: "90.0448%", textAlign: "left" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>- 1.7 (1.0–2.9)</span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "47.0358%" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>Relative humidity &gt; 45%</span>
                      </td>
                      <td style={{ width: "90.0448%", textAlign: "left" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>- 0.8 (0.4–1.5)</span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "47.0358%" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>Absolute indoor humidity level</span>
                      </td>
                      <td style={{ width: "90.0448%", textAlign: "left" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>- &gt; 5.8 g/m3, 2.0 (1.2–3.4)</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Air Quality Monitor */}
      <section className="full-width-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box">
                <h3 style={{ textAlign: "center", fontSize: "24pt" }}>
                  Choose Your Air Quality Monitor To Measure Humidity Level
                </h3>
                <hr />
              </div>
              <div className="product-carousel">
                <Carousel
                  responsive={responsive}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                  infinite={true}
                  showDots={false}
                  arrows={true}
                >
                  <div className="product-item">
                    <div className="product-image">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2021/04/prana-air-squair-air-monitor.jpg"
                        alt="SQUAIR Air Monitor"
                        width={300}
                        height={300}
                      />
                    </div>
                    <h4>SQUAIR Air Monitor</h4>
                  </div>
                  <div className="product-item">
                    <div className="product-image">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2023/03/Sensible-monitor-prana-air.png"
                        alt="sensible Monitor for humidity"
                        width={300}
                        height={300}
                      />
                    </div>
                    <h4>Sensible Monitor</h4>
                  </div>
                  <div className="product-item">
                    <div className="product-image">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2021/04/prana-air-sensible-plus-air-quality-monitor.jpg"
                        alt="sensible plus monitor for humidity"
                        width={300}
                        height={300}
                      />
                    </div>
                    <h4>Sensible+ Monitor</h4>
                  </div>
                  <div className="product-item">
                    <div className="product-image">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2025/01/Main-screen.webp"
                        alt="cair monitor for humidity monitoring"
                        width={300}
                        height={200}
                      />
                    </div>
                    <h4>Cair+ Monitor</h4>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

