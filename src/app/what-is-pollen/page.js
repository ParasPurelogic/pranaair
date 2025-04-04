"use client"
import "./styles.css"
import "react-multi-carousel/lib/styles.css"

export default function WhatIsPollen() {
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
      {/* Banner Section */}
      <section className="full-width-section" style={{ backgroundColor: "#f6c65a", paddingBottom: "60px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div style={{ height: "40px" }}></div>
              <div className="fadeInUp">
                <h1 className="" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                    <img
                      className="aligncenter"
                      src="https://www.pranaair.com/wp-content/uploads/2023/01/pollen.png"
                      alt="what is pollen"
                      width="224"
                      height="194"
                    />
                  </span>
                  <span className="heading_top_white" style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                    What is Pollen?
                  </span>
                </h1>
                <p className="" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "16pt" }}>
                    Pollen is a powdery substance that releases by certain plants and trees, especially flowers that
                    helps them reproduce. As it carried by the wind or insects like bees and butterflies that act as an
                    agent for reproduction in plants. But did you know it also acts as an air pollutant?
                  </span>
                </p>
              </div>
              <div style={{ height: "50px" }}></div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section style={{ paddingTop: "50px", paddingBottom: "60px" }}>
        <div className="container">
          <div className="fadeInUp" style={{ paddingBottom: "30px" }}>
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                How is it <span style={{ color: "#e9a342" }}>important?</span>
              </span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "15pt" }}>
                Pollen is a powdery material discharged from a male flowers antlers that performs an important role in
                plant reproduction. And pollination is the process through which, it is conveyed by various agents. This
                occurs during the summer, spring, and autumn seasons. Hence, the fruits and vegetables we consume were
                once flowers that were pollinated and grown into fruits or vegetables.
              </span>
            </p>
            &nbsp;
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                What is <span style={{ color: "#e9a342" }}>pollination?</span>
              </span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "15pt" }}>
                Pollination is the process of transferring pollen grains from one flower to the other. Or the same
                flower with the help of insects, wind, or sometimes even water. Two broad categories of plants that
                reproduce with the help of pollination are:
              </span>
            </p>
            &nbsp;
          </div>

          <div className="row" style={{ paddingBottom: "50px" }}>
            <div className="col-md-5">
              <div className="fadeInUp">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/angiosperms.png"
                  alt="Angiosperms"
                  className="img-fluid"
                  style={{ margin: "0 auto", display: "block" }}
                />
              </div>
            </div>
            <div className="col-md-7">
              <h4>
                <strong>
                  <span style={{ fontSize: "14pt" }}>Angiosperms</span>
                </strong>
              </h4>
              <span style={{ fontSize: "15pt" }}>
                Angiosperms are flowering plants with reproductive systems in their flowers (seeds enclosed within the
                ovary). They have a seasonal life cycle. And these pollinated by insects, wind, and water. With it, they
                usually have flat leaves and hardwood. For instance, apple, maple, rose, wheat, and dandelion, among
                others.
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5">
              <div className="fadeInUp">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/gymnosperms.png"
                  alt="Gymnosperms"
                  className="img-fluid"
                  style={{ margin: "0 auto", display: "block" }}
                />
              </div>
            </div>
            <div className="col-md-7">
              <h4>
                <strong>
                  <span style={{ fontSize: "14pt" }}>Gymnosperms</span>
                </strong>
              </h4>
              <span style={{ fontSize: "15pt" }}>
                Gymnosperms are non-flowering plants with reproductive systems in their cones (uncovered seeds). They
                are evergreen and pollinated primarily by wind. They have needle-like leaves and softwood. For example
                cypress, pine, yew, spruce, etc.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Effects on Humans Section */}
      <section style={{ paddingBottom: "100px" }}>
        <div className="container">
          <div className="fadeInUp">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                Does pollen affect <span style={{ color: "#e9a342" }}>humans?</span>
              </span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "15pt" }}>
                As discussed above, the wind is the common carrier of pollen grains. And it can remain suspended in the
                air for days. When inhaled, a person can experience sneezing, irritation in the eyes and the respiratory
                tract, runny nose, etc. Some people are more susceptible to these symptoms than others. This is commonly
                known as pollen allergy. This can be extremely dangerous for people with respiratory diseases like
                asthma, as it acts as a trigger for asthma.
              </span>
            </p>
            &nbsp;
            <p style={{ textAlign: "center" }}>
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/human-health-effects-by-pollen-1024x933.jpg"
                alt="human health effects by pollen"
                width="709"
                height="646"
              />
            </p>
          </div>
          <div style={{ height: "70px" }}></div>
          <div className="content-box" style={{ border: "1px solid #e9a342" }}>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                <em>
                  An allergen, such as pollen, can cause an asthma attack in someone who has allergic asthma. The
                  frequency of allergic asthma is around 80% in children with asthma and 60% in adults.{" "}
                </em>
                <em>- Kenneth Mendez, President, and CEO of the Asthma and Allergy Foundation of America (AAFA).</em>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Health Effects Section */}
      <section style={{ paddingBottom: "100px" }}>
        <div className="container">
          <div className="fadeInUp">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                Health Effects of <span style={{ color: "#e9a342" }}>pollen on humans</span>
              </span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "15pt" }}>
                Allergic reactions from pollen can range from mild to severe and from person to person. In some cases,
                allergies can trigger a life-threatening reaction known as anaphylaxis. As, inhaling it can cause
                symptoms like:
              </span>
            </p>
          </div>

          <div className="row">
            <div className="col-md-1-5">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/sneezing-282x300.jpg"
                alt="Pollen effects"
                width="282"
                height="300"
              />
              <p style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>Sneezing </span>
                </strong>
              </p>
            </div>
            <div className="col-md-1-5">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/noise-irritation-282x300.jpg"
                alt="human health effects by pollen"
                width="282"
                height="300"
              />
              <p style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>Irritation</span>
                </strong>
                <br />
                <strong>
                  <span style={{ fontSize: "14pt" }}>in the nose</span>
                </strong>
              </p>
            </div>
            <div className="col-md-1-5">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/eye-irritation-282x300.jpg"
                alt=""
                width="282"
                height="300"
              />
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  <strong>Redness and </strong>
                </span>
                <br />
                <span style={{ fontSize: "14pt" }}>
                  <strong>eye irritation</strong>
                </span>
              </p>
            </div>
            <div className="col-md-1-5">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/scratchy-throat-282x300.jpg"
                alt=""
                width="282"
                height="300"
              />
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>Scratchy</span>
                <br />
                <span style={{ fontSize: "14pt" }}>throat </span>
              </p>
            </div>
            <div className="col-md-1-5">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/chest-tightening-282x300.jpg"
                alt=""
                width="282"
                height="300"
              />
              <p style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>Chest</span>
                </strong>
                <br />
                <strong>
                  <span style={{ fontSize: "14pt" }}>tightening </span>
                </strong>
              </p>
            </div>
          </div>

          <div style={{ paddingTop: "35px" }}>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                <strong>
                  <span style={{ color: "#e9a342" }}>Hay fever</span>
                </strong>{" "}
                (also known as allergic rhinitis) is an allergic reaction that can cause the above-mentioned symptoms.
                Anaphylaxis, triggering of asthma, and many more are life threatening effects of its allergies.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Protection Section */}
      <section>
        <div className="container">
          <div className="fadeInUp" style={{ paddingBottom: "30px" }}>
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                How you can <span style={{ color: "#e9a342" }}>save yourself</span> from pollen?
              </span>
            </h2>
          </div>

          <div className="row">
            <div className="col-md-6">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/limit-outdoors-300x296.jpg"
                alt="limit outdoors"
                width="300"
                height="296"
              />
              <h3 style={{ textAlign: "center" }}>Limit outdoors</h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  If you suffer from pollen allergies, limit your outdoor activities when the count is high. This
                  generally happens between 5 am to 10 am. Other than that, spring months contain the highest count
                  throughout the year.{" "}
                </span>
              </p>
            </div>
            <div className="col-md-6">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/take-bath.jpg"
                alt="take a bath"
                width="300"
                height="296"
              />
              <h3 style={{ textAlign: "center" }}>Take a bath and change your clothes</h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  When you come from outside, take a bath to wash off any pollen on your body. A fresh set of clothes
                  will further help in reducing its allergy episodes.{" "}
                </span>
              </p>
            </div>
          </div>

          <div className="separator" style={{ borderTop: "2px solid #f6c65a", marginTop: "35px" }}></div>

          <div className="row" style={{ paddingTop: "25px" }}>
            <div className="col-md-6">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/consult-doctor.jpg"
                alt="consult a doctor"
                width="300"
                height="296"
              />
              <h3 style={{ textAlign: "center" }}>Consult a doctor</h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  When you experience any symptoms, contact and consult a doctor to prevent any life-threatening allergy
                  attacks.{" "}
                </span>
              </p>
            </div>
            <div className="col-md-6">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/proper-medication.jpg"
                alt="Take proper medication"
                width="300"
                height="296"
              />
              <h3 style={{ textAlign: "center" }}>Take proper medication</h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  If you already have allergy asthma, take proper medication as prescribed by your doctor to avoid any
                  unforeseen circumstances.
                </span>
              </p>
            </div>
          </div>

          <div className="separator" style={{ borderTop: "2px solid #f6c65a", marginTop: "35px" }}></div>

          <div className="row" style={{ paddingTop: "25px" }}>
            <div className="col-md-12">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/close-windows.jpg"
                alt="close windows during pollen season"
                width="300"
                height="296"
              />
              <h3 style={{ textAlign: "center" }}>Windows closed during pollen season</h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Keep your windows and doors closed around the pollen season when pollen levels are at their highest in
                  the air. Since, it can enter your house and settle on surfaces like carpets, etc. And it is dangerous
                  for asthmatic people who get triggered by allergic asthma.{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section style={{ paddingTop: "100px" }}>
        <div className="container">
          <div className="fadeInUp" style={{ paddingBottom: "30px" }}>
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                Solutions for <span style={{ color: "#e9a342" }}>Pollen Allergies</span>
              </span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                If you are allergic to it, consider purchasing an excellent N-95 mask. Because it can prevent the
                inhalation of pollen particles. When a proper mask is used effectively and per the recommendations. So
                the risk of pollen allergies is considerably reduced. Hence, an <a href="#">N95</a> anti
                anti-pollution mask will not only prevent you from pollen but also other air pollutants. Since, these
                are harmful to your and your loved ones healths.
              </span>
            </p>
            &nbsp;
            <p style={{ textAlign: "center" }}>
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/n95-mask-for-pollen-allergies-300x282.jpg"
                alt="n95 mask for pollen allergies"
                width="459"
                height="431"
              />
            </p>
          </div>
          <div className="separator" style={{ borderTop: "2px solid #f6c65a" }}></div>
        </div>
      </section>
    </main>
  )
}

