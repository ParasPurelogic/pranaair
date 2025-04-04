"use client"
import Image from "next/image"
import "./styles.css"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"

export default function OzonePage() {
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
      <section className="full-width-section" style={{ backgroundColor: "#5c87ba", paddingBottom: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="text-center fade-in-up" style={{ paddingTop: "15px" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/10/what-is-ozone.png"
                  alt="what is ozone o3"
                  width={224}
                  height={194}
                  className="aligncenter"
                />
                <h1 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                    What is Ozone (O<sub>3</sub>)?
                  </span>
                </h1>
                <p className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "16pt" }}>
                    Ozone (O3) is a molecule composed of three oxygen atoms. It is found in the natural environment.
                    Nitrogen (78%) is the most abundant gas found in the atmosphere, followed by oxygen (21%). The
                    remaining 1% is a pool of several other gases. Such as carbon dioxide, neon, hydrogen, and so on.
                    Ozone is also one of the gases included in this 1% share. As it corresponds to approximately
                    0.00001% ozone in the ambient air. Because of its active nature of oxidizing things, nature
                    continuously creates it with various electrochemical and electrostatic effects. Thus, its nature
                    regulates the amount of mold, viruses, bacteria, and VOCs in the ambient air in this way.
                  </span>
                </p>
              </div>

              <div style={{ height: "50px" }}></div>

              <div>
                <h2 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24pt" }}>Ozone (o3): A friend or a foe?</span>
                </h2>
                <p className="whitetext" style={{ textAlign: "center" }}>
                  <em>
                    <span style={{ fontSize: "14pt" }}>As the EPA says, Ozone is good up there, but bad nearby.</span>
                  </em>
                </p>
                <p className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    1. Stratospheric ozone acts as our natural sunscreen. It absorbs the suns harmful UV rays. As
                    preventing them from reaching the surface or the air. This layer is being depleted as a result of
                    humans active use of CFCs. CFCs chlorinated organic chemicals utilized as propellants and
                    refrigerants. They are used to keep things cool. And they are hence used in a variety of products
                    such as air conditioners and refrigerators. They are also found in aerosol cans, spray paints,
                    deodorants, and other products. Moreover, they are to blame for the ozone layers depletion. As a
                    result of their extreme stability, they can persist in the atmosphere for a very long time after
                    being discharged (10 -100 years).
                  </span>
                </p>
                <p className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    2. When ozone is at ground level, especially when trapped indoors, it is a respiratory tract
                    irritant that affects asthmatics and can harm plants. Because electrochemical and electrostatic
                    effects are not naturally present indoors. Unless there is a continual flow of fresh air from
                    outside. So, the quantity of ozone indoors will progressively drop to near zero. Giving spores,
                    viruses, bacteria, and other airborne viruses a competitive advantage. So its safe to say that
                    ozone should maintain indoors in a reasonable amount. As to prevent the growth of mold, bacteria,
                    viruses, and other microbes. As these can cause further disruptions and physical discomfort.
                  </span>
                </p>
              </div>

              <div style={{ height: "20px" }}></div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Indoor Air Pollutant Section */}
      <section style={{ paddingBottom: "65px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>Is Ozone (o3) an indoor air pollutant?</span>
              </h2>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Ozone in the indoor environment can be exceedingly dangerous. Especially if it is confined indoors and
                  fresh air from outside cannot enter via ventilation. It can have a detrimental effect on the
                  occupants health.
                </span>
              </p>

              <div style={{ height: "20px" }}></div>

              <div style={{ paddingBottom: "25px" }}>
                <h3 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18pt" }}>Is ozone harmful to humans?</span>
                </h3>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    When exposed to O3, it can induce a variety of diseases and discomforts. Ozone in high quantities
                    can irritate the skin and cause cellular damage. For example, O3 can cause cellular damage in the
                    same way as chlorine can cause skin damage in a swimming pool if used at high concentrations. Ozone
                    can cause various health effects on the human body.
                  </span>
                </p>
              </div>

              {/* Health Effects Row 1 */}
              <div className="row" style={{ paddingBottom: "25px" }}>
                <div className="col-md-6">
                  <div style={{ height: "50px" }}></div>
                  <div>
                    <h4 style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        <Image
                          src="https://www.pranaair.com/wp-content/uploads/2022/12/respiratory-tract-irritation-by-ozone.png"
                          alt="respiratory tract irritation due to ozone"
                          width={443}
                          height={227}
                          className="aligncenter"
                        />
                        <strong>1. Respiratory tract irritation</strong>
                      </span>
                    </h4>
                    <p style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        Ozone exposure can cause airway constriction. As causing air to become trapped in the alveoli
                        and irritating the respiratory tract.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h4 style={{ textAlign: "center" }}>
                      <strong>
                        <span style={{ fontSize: "12pt" }}>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/12/skin-irritation-due-to-ozone.png"
                            alt="cough due to ozone"
                            width={532}
                            height={372}
                            className="alignnone"
                          />
                        </span>
                      </strong>
                    </h4>
                    <h4 style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        <strong>2. Cough</strong>
                      </span>
                    </h4>
                    <p style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        Depending upon the levels of exposure, ozone can cause coughing, soreness, and scratchiness in
                        the throat.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Health Effects Row 2 */}
              <div className="row" style={{ paddingTop: "40px" }}>
                <div className="col-md-6">
                  <div>
                    <h4 style={{ textAlign: "center" }}>
                      <strong>
                        <span style={{ fontSize: "12pt" }}>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/12/chest-tightness-due-to-ozone.png"
                            alt="chest tightness due to ozone"
                            width={443}
                            height={227}
                            className="alignnone"
                          />
                        </span>
                      </strong>
                    </h4>
                    <h4 style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        <strong>3. Chest Tightness</strong>
                      </span>
                    </h4>
                    <p style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        Ozone exposure can cause tightness in the chest and the person may experience difficulty in
                        breathing as well.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h4 style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        <strong>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/12/skin-irritation-due-to-ozone.png"
                            alt="skin irritation due to ozone"
                            width={443}
                            height={227}
                            className="alignnone"
                          />
                        </strong>
                      </span>
                    </h4>
                    <h4 style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        <strong>4. Skin irritation</strong>
                      </span>
                    </h4>
                    <p style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        O3 is one of the most hazardous pollutants. As it capable of initiating oxidative processes and
                        activating inflammatory reactions. And it resulting in the start of a variety of skin issues.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Health Effects Row 3 */}
              <div className="row" style={{ paddingTop: "60px" }}>
                <div className="col-md-6">
                  <div>
                    <h4 style={{ textAlign: "center" }}>
                      <strong>
                        <span style={{ fontSize: "12pt" }}>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/12/reduced-lung-function-due-to-ozone.png"
                            alt="reduced lung function due to ozone"
                            width={443}
                            height={227}
                            className="alignnone"
                          />
                        </span>
                      </strong>
                    </h4>
                    <h4 style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        <strong>5. Reduced lung function</strong>
                      </span>
                    </h4>
                    <p style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        Ozone exposure constricts the airways. And it obstructiveness restricts the lungs from
                        functioning normally, reducing lung function.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h4 style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        <strong>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/12/cellular-damages-due-to-ozone.png"
                            alt="cellular damages due to ozone"
                            width={443}
                            height={227}
                            className="alignnone"
                          />
                        </strong>
                      </span>
                    </h4>
                    <h4 style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        <strong>6. Cellular Damages</strong>
                      </span>
                    </h4>
                    <p style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        Excess ozone exposure for a longer duration may trigger cell damage and dysfunction. Thus, it is
                        leading to metabolic alterations.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sources of Ozone Section */}
      <section className="full-width-section" style={{ backgroundColor: "#5987c2", paddingBottom: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="whitetext" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>Sources of Ozone (o3) indoors</span>
              </h2>
              <p className="whitetext" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Ozone can come from outdoor smog via ventilation, but it also has indoor sources. These include:
                </span>
              </p>

              <div style={{ height: "50px" }}></div>

              {/* Sources Row 1 */}
              <div className="row" style={{ borderBottomWidth: "50px" }}>
                <div className="col-md-6">
                  <div style={{ height: "20px" }}></div>
                  <div>
                    <h4 className="whitetext" style={{ fontSize: "14pt", textAlign: "center" }}>
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2022/10/photocopier-300x239.png"
                        alt="ozone from photocopier"
                        width={300}
                        height={239}
                        className="aligncenter"
                      />
                      <strong>
                        <span style={{ fontSize: "14pt" }}>1. Photocopiers</span>
                      </strong>
                    </h4>
                    <p className="whitetext" style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        A standard approach was used in a study by the AIHA to determine the O3 emission from 69
                        different photocopying machines. The emission rates ranged from 0 to 1350 g/min, with a mean of
                        259 and a standard deviation of 302.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h4 className="whitetext">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/10/air-cleaner-194x300.png"
                            alt="ozone gas from air cleaner"
                            width={194}
                            height={300}
                            className="aligncenter"
                          />
                        </span>
                      </strong>
                    </h4>
                    <h4 className="whitetext" style={{ textAlign: "center" }}>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>2. Some electronic air cleaners</span>
                      </strong>
                    </h4>
                    <p className="whitetext" style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        Some air cleaning systems can generate O3. Which can be hazardous to ones health. A few
                        machines marketed as air purifiers purposefully release high levels of O3, the major contributor
                        to smog.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Sources Row 2 */}
              <div className="row" style={{ paddingTop: "50px" }}>
                <div className="col-md-6">
                  <div style={{ paddingTop: "40px" }}>
                    <h4 className="whitetext">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/10/electrical-appliances-300x217.png"
                            alt="ozone from electrical appliances"
                            width={300}
                            height={217}
                            className="aligncenter"
                          />
                        </span>
                      </strong>
                    </h4>
                    <h4 className="whitetext" style={{ textAlign: "center" }}>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>3. Home electrical appliances</span>
                      </strong>
                    </h4>
                    <p className="whitetext" style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        Many appliances used in homes such as refrigerators, air conditioners, vegetable washers, facial
                        steamers, etc. use built-in ozone generators also known as ionizers.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h4 className="whitetext">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/10/disinfectants-230x300.png"
                            alt="ozone from disinfectants"
                            width={230}
                            height={300}
                            className="aligncenter"
                          />
                        </span>
                      </strong>
                    </h4>
                    <h4 className="whitetext" style={{ textAlign: "center" }}>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>4. UV lights/lamps</span>
                      </strong>
                    </h4>
                    <p className="whitetext" style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        UV Light ranging from 160-240nm can create O3 from O2 by disrupting the O2 molecules by
                        splitting them into two atoms. They further attach to other O2 molecules. And it creates ozone
                        (O3).
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Sources Row 3 */}
              <div className="row" style={{ paddingTop: "50px" }}>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div>
                    <h4 className="whitetext">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/10/uv-light-233x300.png"
                            alt="ozone from uv light"
                            width={233}
                            height={300}
                            className="aligncenter"
                          />
                        </span>
                      </strong>
                    </h4>
                    <h4 className="whitetext" style={{ textAlign: "center" }}>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>5. Disinfectants</span>
                      </strong>
                    </h4>
                    <p className="whitetext" style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        Ozone has a great oxidizing nature. Due to which it is utilized in many sterilizing agents and
                        disinfectants that are generally used in hospitals. But these disinfectants emit ozone gas, and
                        if trapped, this can be hazardous.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Detect Ozone Section */}
      <section style={{ paddingBottom: "60px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>How to detect ozone (o3)?</span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  How to know if one of these above-mentioned appliances is producing Ozone? Ozone has a distinct odor
                  that could describe as a fresh bleach-like smell. If you can smell it then theres too much O3 gas
                  present in the air to be breathing continuously. It can also be measured using advanced instruments.
                  Such as, Prana Air monitors to measure O3 in the air:
                </span>
              </p>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/10/ozone-monitoring-device-1024x995.png"
                alt="ozone monitoring device"
                width={597}
                height={580}
                className="aligncenter"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ozone Levels Section */}
      <section style={{ paddingBottom: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fade-in-up">
                <h3 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24pt" }}>What do different ozone levels say?</span>
                </h3>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    Ozone is an indoor air pollutant that can measure using modern technology. It measures in PPM (Parts
                    Per Million). Hence, Ozone can be classified into six categories based on its concentration in a
                    confined setting.
                  </span>
                </p>
              </div>

              <div style={{ height: "45px" }}></div>

              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                  <div className="fade-in-up">
                    <span style={{ fontSize: "14pt" }}>Good: 0-0.05</span>
                    <br />
                    <span style={{ fontSize: "14pt" }}>Moderate: 0.6-0.9</span>
                    <br />
                    <span style={{ fontSize: "14pt" }}>Poor: 0.10-0.12</span>
                    <br />
                    <span style={{ fontSize: "14pt" }}>Unhealthy: 0.13-0.16</span>
                    <br />
                    <span style={{ fontSize: "14pt" }}>Severe: 0.17-0.20</span>
                    <br />
                    <span style={{ fontSize: "14pt" }}>Hazardous: Above 0.21</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="fade-in-up">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2022/12/ozone-color-bar.png"
                      alt="ozone levels"
                      width={200}
                      height={200}
                      className="aligncenter"
                    />
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fade-in-up">
                <h3 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24pt" }}>Choose Your Air Quality Monitor To Measure Ozone (O3)</span>
                </h3>
                <hr />
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
              >
                <div>
                  <div className="product-card">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2021/04/prana-air-squair-air-monitor.jpg"
                      alt="prana air squair ozone Air Quality Monitor"
                      width={300}
                      height={300}
                    />
                    <h4>Pocket Monitor</h4>
                    <p>Portable air quality monitor for O3 detection</p>
                  </div>
                </div>
                <div>
                  <div className="product-card">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2021/04/prana-air-sensible-plus-air-quality-monitor.jpg"
                      alt="prana air sensible plus ozone Monitor"
                      width={300}
                      height={300}
                    />
                    <h4>Ambient Air Monitor</h4>
                    <p>Advanced O3 monitoring for indoor environments</p>
                  </div>
                </div>
                <div>
                  <div className="product-card">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/02/prana-air-ozone-o3-sensor-with-board.jpg"
                      alt="prana air ozone sensor"
                      width={300}
                      height={300}
                    />
                    <h4>Industrial O3 Monitor</h4>
                    <p>Heavy-duty ozone monitoring for industrial applications</p>
                  </div>
                </div>
                <div>
                  <div className="product-card">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/03/Sensible-monitor-prana-air.png"
                      alt="prana air sensible ozone detector"
                      width={300}
                      height={300}
                    />
                    <h4>Multi-Gas Detector</h4>
                    <p>Monitors multiple gases including O3</p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

