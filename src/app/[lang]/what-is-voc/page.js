"use client"
import "./styles.css"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"

export default function VOCPage() {
  const { t } = useTranslation("home")

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
      <section className="full-width-section bg-green">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="empty-space" style={{ height: "50px" }}></div>
              <div className="text-center fade-in-up">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/voc-gas-icon-281x300.png"
                  alt="voc gas icon"
                  width="228"
                  height="243"
                  className="aligncenter"
                />
                <h1 className="whitetext heaidng">What is VOC?</h1>
              </div>
              <div className="text-center fade-in-up">
                <p className="whitetext" style={{ fontSize: "16pt" }}>
                  Volatile Organic Compounds (VOCs) are a broad category of airborne organic compounds, that contain
                  carbon and hydrogen, evaporate and disperse easily at room temperature. VOCs are emitted by a wide
                  range of construction materials, paints, furnishings, and everyday consumer products. You will know
                  when a VOC is around you just by the strong smell of it.
                </p>
              </div>
              <div className="text-center fade-in-up">
                <h2 className="whitetext">Why are we discussing VOCs?</h2>
                <p className="whitetext" style={{ fontSize: "14pt" }}>
                  VOCs are highly harmful since they evaporate at room temperature and they are emitted by a variety of
                  sources that we are unaware of. Depending on the exposure levels, they may cause short-term headaches,
                  and eye, throat, and nose irritation, while long-term exposures may cause serious kidney damage and
                  cancer.
                </p>
              </div>
              <div className="text-center fade-in-up">
                <h2 className="whitetext">VOCs and TVOCs</h2>
                <p className="whitetext" style={{ fontSize: "14pt" }}>
                  As there are thousands of VOCs and many can exist in a room setting, TVOCs (Total Volatile Organic
                  Compounds) are used to represent different groups of VOCs that can exist in an indoor environment.
                  Total Volatile Organic Compounds (TVOCs) represent a class of VOCs that use to indicate the total pool
                  of contaminants. Or we can say that the total sum of VOCs is known as TVOCs.
                </p>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Primary Sources of VOCs */}
      <section className="full-width-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center fade-in-up">
                <h2 style={{ fontSize: "32px", paddingTop: "40px", paddingBottom: "30px" }}>Primary Sources of VOCs</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="fade-in-left">
                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <img
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-furniture-300x300.png"
                            alt="source of voc from furniture"
                            width="184"
                            height="184"
                          />
                          1. Plywood and Furniture
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>
                      The primary VOC found in plywood and particle boards is formaldehyde or HCHO. Since, new furniture
                      contains a high amount of VOCs and as time passes, they slowly escape from the wooden furniture.
                      This is known as off-gassing.
                    </p>
                    <div style={{ clear: "both" }}></div>

                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <img
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-vinyl-flooring-300x300.png"
                            alt="sources of voc from vinyl flooring"
                            width="184"
                            height="184"
                          />
                          2. Vinyl Flooring
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>
                      A vinyl floor will emit some amount of VOCs for a short period after the installation due to the
                      materials used in vinyl production. They can contaminate the air quality where they installed and
                      can cause various respiratory issues over time.
                    </p>
                    <div style={{ clear: "both" }}></div>

                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <img
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-carpets-300x300.png"
                            alt="voc from carpets"
                            width="184"
                            height="184"
                          />
                          3. Carpets and Upholstery
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>
                      Various chemicals are used in the manufacturing of carpets and upholstery. VOCs in them can
                      therefore be highly concerning. Due to this, they could pose several health issues.
                    </p>
                    <div style={{ clear: "both" }}></div>

                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <img
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-smoking-300x300.png"
                            alt="voc from smoking"
                            width="184"
                            height="184"
                          />
                          4. Smoking and tobacco products
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>
                      VOCs in large amounts produced when tobacco products are burnt and incomplete combustion of
                      tobacco takes place. So, these VOCs are responsible for various respiratory and heart diseases.
                    </p>
                    <div style={{ clear: "both" }}></div>

                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <img
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-printers-300x300.png"
                            alt="voc from printers"
                            width="184"
                            height="184"
                          />
                          5. Photocopying and Printing
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>
                      To print a document, the toner that used for printing is heated. They emit small amounts of VOCs
                      that are produced by this process. Even harmful ozone can produce by laser printers.
                    </p>
                    <div style={{ clear: "both" }}></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="fade-in-right">
                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <img
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-perfumes-300x300.png"
                            alt="voc from perfumes"
                            width="184"
                            height="184"
                          />
                          6. Perfumes
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>
                      Have you ever had a sharp pain in your head when someone wearing strong perfume walks by? That is
                      due to the high amount of VOCs that are present in perfumes which can cause dizziness and
                      headaches.
                    </p>
                    <div style={{ clear: "both" }}></div>

                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <img
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-cleaning-products-300x300.png"
                            alt="voc from cleaning products"
                            width="184"
                            height="184"
                          />
                          7. Cleaning products and Air Fresheners
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>
                      Exposure to VOCs present in many household cleaning products and air fresheners is known to cause
                      serious harm to human health. These commonly include asthma, eczema, endocrine disruption, etc.
                    </p>
                    <div style={{ clear: "both" }}></div>

                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <img
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-paints-300x300.png"
                            alt="voc from paints"
                            width="184"
                            height="184"
                          />
                          8. Paints
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>
                      Ever wondered why a freshly painted wall smell has a strong smell and as time passes it wears off?
                      This is because of the VOCs that are present in paints. They slowly wear off as time passes due to
                      off-gassing.
                    </p>
                    <div style={{ clear: "both" }}></div>

                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <img
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-markers-or-glue-300x300.png"
                            alt="voc from markers or glue"
                            width="184"
                            height="184"
                          />
                          9. Markers, glue, and whiteners
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>
                      Hobby supplies are made to dry quickly at room temperature. That is why hobby items such as
                      markers, glue, and whiteners made with materials containing VOCs that evaporate at room
                      temperature, making these products equally harmful.
                    </p>
                    <div style={{ clear: "both" }}></div>

                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <img
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-burning-candle-300x300.png"
                            alt="voc from burning candle"
                            width="184"
                            height="184"
                          />
                          10. Candle and incense burning
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>
                      Scented candles or incense sticks are made in such a way that they create a pleasant aroma in
                      their immediate surroundings. However, they produce with VOC-containing components that, when
                      burned, evaporate and disperse around the room, which can be annoying to certain people.
                    </p>
                    <div style={{ clear: "both" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Effects of VOCs */}
      <section className="full-width-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center fade-in-up">
                <h2 style={{ fontSize: "24pt", paddingTop: "40px", paddingBottom: "30px" }}>Health Effects of VOCs</h2>
                <p style={{ fontSize: "14pt" }}>
                  VOCs propensity to create health impacts ranges significantly, from very hazardous to those with no
                  known health effects. The concentration and duration of chemical exposure affect how VOCs affect human
                  health.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/line-bar-design.png"
                  alt="health effects of VOCs"
                  className="img-fluid"
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="fade-in-up">
                    <h3>
                      <strong>Short-term health effects may include:-</strong>
                    </h3>
                    <p style={{ fontSize: "12pt", fontStyle: "italic" }}>
                      Short-term health effects of VOCs can last from hours to days. Some of the symptoms may include
                      shortness of breath, allergic skin reactions, dizziness, nausea, and fatigue. Short-term health
                      effects may include:
                    </p>
                    <div className="text-center">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/09/shot-term-health-effects-due-to-voc.png"
                        alt="short-term health effects of VOCs"
                        className="img-fluid"
                        style={{ paddingBottom: "15px" }}
                      />
                    </div>
                    <h5>
                      <strong>- Eye, nose, and throat irritation:</strong>
                    </h5>
                    <p style={{ fontSize: "12pt" }}>
                      VOCs create strong odors These can irritate your eyes, your nose and throat if you inhale them.
                    </p>
                    <h5>
                      <strong>- Skin problems:</strong>
                    </h5>
                    <p style={{ fontSize: "12pt" }}>
                      When VOCs are exposed to sunlight and NOx, causes a photochemical reaction that emits O3 that can
                      cause various skin problems.
                    </p>
                    <h5>
                      <strong>- Headaches:</strong>
                    </h5>
                    <p style={{ fontSize: "12pt" }}>
                      Strong smells in the presence of VOCs can cause headaches when exposed to relatively low levels in
                      the short term.
                    </p>
                    <h5>
                      <strong>- Vomiting:</strong>
                    </h5>
                    <p style={{ fontSize: "12pt" }}>
                      VOCs can cause nausea and dizziness in the short term, which can lead to loss of coordination and
                      vomiting.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="fade-in-up">
                    <h3>Long-term health effects</h3>
                    <p style={{ fontSize: "12pt", fontStyle: "italic" }}>
                      Long-term exposure to VOCs can be very harmful to your health, with symptoms lasting for years.
                      Because, VOCs such as benzene, and C6H6, can have long-term effects on your health. Symptoms may
                      include chronic headaches and loss of coordination. Long-term health impacts may include:
                    </p>
                    <div className="text-center">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2022/09/long-term-health-effects-due-to-voc.png"
                        alt="long-term health effects of VOCs"
                        className="img-fluid"
                        style={{ paddingBottom: "15px" }}
                      />
                    </div>
                    <h5>
                      <strong>- Irritation in the lungs:</strong>
                    </h5>
                    <p style={{ fontSize: "12pt" }}>
                      Exposure to VOCs at high levels can cause inflammation in the airways, which can cause lung
                      irritation.
                    </p>
                    <h5>
                      <strong>- Liver and kidney damages:</strong>
                    </h5>
                    <p style={{ fontSize: "12pt" }}>
                      Inhaling VOCs for longer durations can cause various health issues including damage to the kidney
                      and lungs.
                    </p>
                    <h5>
                      <strong>- Central Nervous System damages:</strong>
                    </h5>
                    <p style={{ fontSize: "12pt" }}>
                      Long-term exposures to toxins such as toluene and xylene can cause severe damage to the nervous
                      system.
                    </p>
                    <h5>
                      <strong>- Cancer:</strong>
                    </h5>
                    <p style={{ fontSize: "12pt" }}>
                      Many VOCs indoors are probable or considered carcinogens by several authorities. These include
                      benzene and formaldehyde.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preventive Measures */}
      <section className="full-width-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center fade-in-up">
                <h2 style={{ paddingTop: "40px", paddingBottom: "30px" }}>
                  Preventive Measures to Reduce VOC Levels in Your Space
                </h2>
                <p style={{ fontSize: "14pt" }}>
                  Indoor air is often up to 5x more polluted than ambient air and as we spend more than 90% of our time
                  indoors, it is important to keep the TVOC levels in check and try to reduce them as much as possible.
                </p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="fade-in-up">
                    <h4 className="text-center">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <img
                            className="aligncenter"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/maintain-good-ventilation-300x300.png"
                            alt="maintain good ventilation to reduce voc"
                            width="240"
                            height="240"
                          />
                          1. Ventilation
                        </span>
                      </strong>
                    </h4>
                    <p className="text-center">
                      Ventilation is extremely important when it comes to reducing indoor air pollutants. Keep your
                      doors and windows open so that these chemicals can reduce via ventilation.
                    </p>
                    <h4 className="text-center">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <img
                            className="aligncenter"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/climate-control-300x300.png"
                            alt="climate control to reduce voc"
                            width="240"
                            height="240"
                          />
                          2. Climate Control
                        </span>
                      </strong>
                    </h4>
                    <p className="text-center">
                      VOCs evaporate and disperse at room temperature and above. Temperature and humidity should be as
                      low as possible to avoid evaporation and dispersion of VOCs.
                    </p>
                    <h4 className="text-center">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <img
                            className="aligncenter"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/dispose-unused-chemicals-300x300.png"
                            alt="dispose unused chemicals to reduce voc"
                            width="240"
                            height="240"
                          />
                          3. Dispose of unused chemicals
                        </span>
                      </strong>
                    </h4>
                    <p className="text-center">
                      Clear out or dispose of any unwanted and unused chemicals. Disposal of unused chemicals and buy
                      paints or varnishes whenever you need them.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="fade-in-up">
                    <h4 className="text-center">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <img
                            className="aligncenter"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/avoid-chemical-leakage-300x300.png"
                            alt="avoid chemical leakage to reduce voc"
                            width="240"
                            height="240"
                          />
                          4. Check for chemical leakages
                        </span>
                      </strong>
                    </h4>
                    <p className="text-center">
                      Chemical leakage can cause damage to the property and harm to human health as well. If you have
                      stored chemicals, always keep a check for any chemical leakages.
                    </p>
                    <h4 className="text-center">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <img
                            className="aligncenter"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/right-time-for-house-renovations-300x300.png"
                            alt="right time for house renovations to reduce voc"
                            width="240"
                            height="240"
                          />
                          5. Choose the right time for renovations
                        </span>
                      </strong>
                    </h4>
                    <p className="text-center">
                      When renovating, humans should not expose to emissions. Hence, renovations must be done when no
                      people are present in that indoor setting.
                    </p>
                    <h4 className="text-center">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <img
                            className="aligncenter"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/control-the-sources-300x300.png"
                            alt="control the sources to reduce voc"
                            width="240"
                            height="240"
                          />
                          6. Control Potential VOC emitters
                        </span>
                      </strong>
                    </h4>
                    <p className="text-center">
                      Burning of fuels such as kerosene must avoid indoors. Sources such as fuel burning and indoor
                      smoking should reduce to keep VOC levels in check.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <section className="full-width-section product-carousel-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center fade-in-up">
                <h3 style={{ fontSize: "24pt" }}>Choose Your Air Quality Monitor To Measure VOCs</h3>
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
                <div className="product-card">
                  <div className="product-image-container">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/04/prana-air-squair-air-monitor.jpg"
                      alt="SQUAIR Monitor"
                      className="product-image"
                    />
                  </div>
                  <h4 className="product-title">SQUAIR Monitor</h4>
                </div>
                <div className="product-card">
                  <div className="product-image-container">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/04/prana-air-sensible-plus-air-quality-monitor.jpg"
                      alt="Sensible+ Monitor"
                      className="product-image"
                    />
                  </div>
                  <h4 className="product-title">Sensible+ Monitor</h4>
                </div>
                <div className="product-card">
                  <div className="product-image-container">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/03/Sensible-monitor-prana-air.png"
                      alt="Sensible Monitor"
                      className="product-image"
                    />
                  </div>
                  <h4 className="product-title">Sensible Monitor</h4>
                </div>
                <div className="product-card">
                  <div className="product-image-container">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/Main-screen.webp"
                      alt="Cair+ Monitor"
                      className="product-image"
                    />
                  </div>
                  <h4 className="product-title">Cair+ Monitor</h4>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

