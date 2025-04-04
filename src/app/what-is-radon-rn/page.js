"use client"
import "./styles.css"
import "react-multi-carousel/lib/styles.css"

export default function RadonPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="full-width-section" style={{ backgroundColor: "#028b7b" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="fadeInUp" style={{ paddingTop: "35px" }}>
                <p className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                    <img
                      className="aligncenter"
                      src="https://www.pranaair.com/wp-content/uploads/2022/10/radon-rn-300x300.jpg"
                      alt="radon rn"
                      width="87"
                      height="87"
                    />
                  </span>
                </p>

                <h1 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "50pt", lineHeight: "1.1" }}>What is Radon (Rn)?</span>
                </h1>
                <p className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "16pt" }}>
                    Radon (Rn) is a naturally occurring radioactive gas that is formed by the decay of radium, which is
                    found in most soils. Radon can be found in the atmosphere outdoors. But it is not a health concern
                    as it rapidly dilutes in the atmosphere to very low levels. It is a health concern indoors where
                    this dilution is not possible and the air is not disturbed.
                  </span>
                </p>
              </div>
              <div style={{ height: "42px" }}></div>
              <div>
                <h2 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24pt" }}>Radon, Radioactivity, and its decayed products</span>
                </h2>
                <p className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    As radon decays, it emits a form of radiation known as alpha particles. These radon changes into
                    other radioactive elements known as decay products. Hence, Radon and its decay products enter your
                    lungs while you breathe. As a result, all of the lung cells can damage. Over time, radon exposure
                    damages more and more cells, increasing the likelihood that one of the cells will develop cancer.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Where does Radon come from */}
      <section className="container">
        <div className="row">
          <div className="col-md-12">
            <div style={{ marginBottom: "50px" }}>
              <h2 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>Where does Radon (Rn) come from?</span>
              </h2>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Radon is emitted from soil grains and rocks. It moves as a gas through the soil at varying rates and
                  distances depending on soil texture and other natural and climatic factors. This can seep through
                  cracks and openings in the floor into an enclosed space where radon can accumulate.
                </span>
              </p>
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2022/10/radon-exhalation-from-soil.jpg"
                alt="radon exhalation from soil"
                width="100%"
                height="auto"
              />
            </div>
            <div style={{ height: "50px" }}></div>

            {/* Sources of radon at homes */}
            <div style={{ marginBottom: "50px" }}>
              <h3 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>Sources of radon (Rn) at homes</span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Radon penetrates structures through floor splits or floor-wall joints, gaps around pipes or cables,
                  tiny pores in block walls, cavities in the walls, or drainage systems or sewers. It doesnt matter if
                  your house has a basement or not, the surface closest to the ground will have higher radon levels.
                  Hence, Radon levels are typically higher in basements, cellars, and ground-level residential spaces.
                  As more and more buildings and houses are becoming air-tight, it is impossible for radon gas to pass
                  through the windows via ventilation and as a result, radon levels can be extremely high indoors.
                </span>
              </p>
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2022/10/sources-of-radon-at-home.jpg"
                alt="sources of radon at home"
                width="100%"
                height="auto"
              />
            </div>
            <div style={{ height: "50px" }}></div>

            {/* What makes radon more dangerous */}
            <div style={{ borderBottomWidth: "50px" }}>
              <h2 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>What makes radon (Rn) more dangerous?</span>
              </h2>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Radon gas is radioactive and has no odor, taste, or smell which makes it difficult for the human body
                  to sense it. It is a carcinogen proven to cause lung cancer in humans. As, Studies have shown an
                  increase in lung cancer rates as a result of increased radon exposure. It classifies by health
                  authorities as a category-one cancer-causing agent. It is the leading cause of lung cancer among
                  non-smokers and the leading cause of cancer after smoking. Each year, around 21,000 people in the
                  United States die from radon-induced lung cancer.
                </span>
              </p>
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2022/10/health-impacts-of-radon.jpg"
                alt="health impacts of radon"
                width="100%"
                height="auto"
              />
            </div>
            <div style={{ height: "50px" }}></div>

            {/* Who is more affected by radon exposure */}
            <div style={{ paddingBottom: "50px" }}>
              <h2 style={{ textAlign: "center" }}>Who is more affected by radon exposure?</h2>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Radon takes 5-10 years to develop. Children are the most affected by radon exposure, whether exposed
                  in homes or schools. As they are still growing and their lungs and other organs are still at the
                  developing stage. They have more life to live, and hence, the after-effects of radon exposure are very
                  much visible in children, sooner or later.
                </span>
              </p>
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2022/10/who-are-more-dangerous-to-radon-1024x906.png"
                alt="who are more dangerous to exposure"
                width="403"
                height="357"
              />
            </div>

            {/* Health Impacts By Radon */}
            <div style={{ height: "60px" }}></div>
            <div>
              <h2 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>Health Impacts By Radon</span>
              </h2>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  It acts after 5-20 years of exposure. When exposed to radon, it wont seriously affect your health in
                  the short term. But you will surely feel and see its serious effects on your health after 5-20 years.
                  Alpha particles do not travel very far, but they travel at half the speed of light and with enough
                  energy to dent bulletproof plastic. Imagine what it can do to your body. Radons radioactive particles
                  can cause harm even decades after initial exposure. Each decade, 10 to 40 thousand people die from
                  radon-induced lung cancer.
                </span>
              </p>
              <p style={{ textAlign: "center" }}>
                <img
                  className="aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/10/84000-deaths-from-lung-cancer-due-to-radon-1024x637.jpg"
                  alt="84000 deaths from lung cancer due to radon"
                  width="100%"
                  height="auto"
                />
              </p>
            </div>
            <div style={{ height: "50px" }}></div>

            {/* Symptoms of radon sickness */}
            <div style={{ paddingBottom: "20px" }}>
              <h3 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>Symptoms of radon (Rn) sickness</span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  How to know if you are exposed to radon or not. Look for the following symptoms:
                </span>
              </p>
            </div>

            {/* Symptoms grid */}
            <div className="row symptoms-row" style={{ marginBottom: "20px" }}>
              <div className="col-md-6">
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <img
                      className="aligncenter"
                      src="https://www.pranaair.com/wp-content/uploads/2022/10/difficulty-in-breathing-200x300.png"
                      alt="difficulty in breathing due to radon"
                      width="200"
                      height="300"
                    />
                  </span>
                </p>
                <h4 style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "14pt" }}>Shortness or difficulty in breathing</span>
                  </strong>
                </h4>
              </div>
              <div className="col-md-6">
                <h4 style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "14pt" }}>
                      <img
                        className="alignnone"
                        src="https://www.pranaair.com/wp-content/uploads/2022/10/pain-in-the-chest-due-to-radon-239x300.png"
                        alt="pain in the chest"
                        width="239"
                        height="300"
                      />
                    </span>
                  </strong>
                </h4>
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>Pain or tightness in the chest</strong>
                  </span>
                </h4>
              </div>
            </div>

            <div className="row symptoms-row" style={{ paddingTop: "25px" }}>
              <div className="col-md-6">
                <h4 style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "14pt" }}>
                      <img
                        className="alignnone"
                        src="https://www.pranaair.com/wp-content/uploads/2022/10/worsenging-of-cough-due-to-radon-196x300.png"
                        alt="worsening of cough"
                        width="196"
                        height="300"
                      />
                    </span>
                  </strong>
                </h4>
                <h4 style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "14pt" }}>Worsening of cough</span>
                  </strong>
                </h4>
              </div>
              <div className="col-md-6">
                <img
                  className="aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/10/trouble-in-swallowing-due-to-radon-239x300.png"
                  alt="trouble in swallowing"
                  width="239"
                  height="300"
                />
                <h4 style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "14pt" }}>Trouble in swallowing</span>
                  </strong>
                </h4>
              </div>
            </div>

            {/* Why is it important to monitor Radon */}
            <div style={{ paddingTop: "60px" }}>
              <div style={{ height: "60px" }}></div>
              <div>
                <h2 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24pt" }}>Why is it important to monitor Radon?</span>
                </h2>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt" }}>
                    As we discussed, radon is an invisible, odorless, and tasteless gas, there is no possible way to
                    know if it is present inside your premises or not using the human senses. Radon concentrations in a
                    home should ideally be less than 100 Bq/m3. And as radon levels change depending on various factors
                    such as temperature, ventilation,
                    <a href="https://www.pranaair.com/?page_id=54100">humidity</a>, wind speed and direction, rainfall,
                    snow, air pressure, the foundation of your building, building insulation, etc. there is the need to
                    monitor it continuously, so that proper actions can be taken accordingly that will ensure that
                    levels remain as low as possible.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

