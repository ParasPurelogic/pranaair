"use client"
import "./styles.css"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"

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

export default function CarbonMonoxidePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="full-width-section" style={{ backgroundColor: "#74698c", paddingBottom: "60px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div style={{ height: "40px" }}></div>
              <div className="fade-in-up" style={{ paddingTop: "15px" }}>
                <h1 className="whitetext" style={{ textAlign: "center" }}></h1>
                <h1 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                    <img
                      className="wp-image-60375 aligncenter"
                      src="https://www.pranaair.com/wp-content/uploads/2022/12/carbon-monoxide-co.png"
                      alt="what is co carbon monoxide"
                      width="224"
                      height="194"
                    />
                  </span>
                </h1>
                <h1 className="whitetext" style={{ textAlign: "center" }}>
                  <span className="heading_top_white" style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                    About Carbon Monoxide (CO) Gas
                  </span>
                </h1>
                <p className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "16pt" }}>
                    Carbon monoxide (Co) is a flammable gas that is colorless, tasteless, and odorless. Moreover, It is
                    the most frequent and dangerous gas found in both indoor and outdoor settings. Hence, Humans are
                    unable to smell this gas. Carbon monoxide poisoning is caused by prolonged exposure to this gas at
                    high levels. Furthermore, We can only discover and avoid any disasters caused by this toxic gas by
                    co-monitoring. It is created both artificially and naturally. CO, on the other hand, is naturally
                    present in the atmosphere but in extremely small amounts. On the other hand, it is naturally present
                    in the atmosphere but in extremely small amounts.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Where does CO come from section */}
      <section style={{ backgroundColor: "#fefdfd" }}>
        <div className="container">
          <div className="fade-in-up">
            <h4 style={{ textAlign: "center" }}>
              <strong>
                <span style={{ fontSize: "24pt" }}>Where does CO come from?</span>
              </strong>
            </h4>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16pt" }}>
                Carbon monoxide (CO) is a dangerous toxic gas, and poisonous if inhaled in larger quantities. Because it
                can be released through various anthropogenic sources but CO can exist in the natural environment as
                well.
              </span>
            </p>
            <h4 style={{ textAlign: "center" }}>
              <strong>
                <span style={{ fontSize: "18pt" }}>Natural Sources:</span>
              </strong>
            </h4>
          </div>

          <div className="row" style={{ paddingBottom: "25px" }}>
            <div className="col-md-4">
              <div className="fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/Volcanic.png"
                        alt="co from Volcanic eruption "
                        width="456"
                        height="295"
                      />
                      1. Volcanic eruption
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/forest-fire.png"
                        alt="Carbon monoxide (CO) from Forest fires "
                        width="456"
                        height="295"
                      />
                      3. Forest fires
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/co-gas-from-coal-mines.png"
                        alt="Carbon monoxide (CO) from Natural gases released from coal mines"
                        width="247"
                        height="247"
                      />
                      4. Natural gases released
                      <br />
                      from coal mines
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
            <div className="col-md-12">
              <div style={{ paddingBottom: "20px" }}>
                <h4 style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "18pt" }}>Manmade Sources:</span>
                  </strong>
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-64349 size-medium"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/car-pollution-300x199.png"
                        alt="Carbon monoxide (CO) from vehicle pollution"
                        width="300"
                        height="199"
                      />
                      1. Combustion by commercial as
                      <br />
                      well as airplanes, tractor, truck, etc.
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805 new-img"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/Industrial.png"
                        alt="co from Industries working at high temperatures and using carbon compounds as raw products."
                        width="456"
                        height="295"
                      />
                      2. Industries working at high
                      <br />
                      temperatures and using carbon
                      <br />
                      compounds as raw products.
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
          </div>

          <div className="row" style={{ paddingBottom: "25px" }}>
            <div className="col-md-6">
              <div className="fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/metal-manufacturing.png"
                        alt="co from Metal Manufacturing"
                        width="456"
                        height="295"
                      />
                      3. Metal Manufacturing
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/Electricity-supply.png"
                        alt="co from Electricity supply"
                        width="456"
                        height="295"
                      />
                      4. Electricity supply
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
          </div>

          <div className="row" style={{ paddingBottom: "25px" }}>
            <div className="col-md-6">
              <div className="fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/smoking.png"
                        alt="co from Smoking"
                        width="456"
                        height="295"
                      />
                      5. Smoking
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/burning.png"
                        alt="co from Burning waste"
                        width="456"
                        height="295"
                      />
                      6. Burning waste
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
          </div>

          <div className="row" style={{ paddingBottom: "40px" }}>
            <div className="col-md-6">
              <div className="fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/co-frompower-plant.png"
                        alt="Carbon monoxide (CO) from Power plants"
                        width="456"
                        height="295"
                      />
                      7. Power plants
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <img
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/co-from-gas-extraction-from-sea.png"
                        alt="co from Extraction of gas from sea or land"
                        width="456"
                        height="295"
                      />
                      8. Extraction of gas
                      <br />
                      from sea or land
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Environmental Impacts Section */}
      <section
        className="full-width-section"
        style={{ paddingTop: "50px", paddingBottom: "40px", backgroundColor: "#7ac96d" }}
      >
        <div className="container">
          <div className="fade-in-up">
            <h2 className="whitetext" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>Health &amp; Environmental Impacts of Carbon Monoxide (CO) Gas</span>
            </h2>
            <p className="whitetext" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                CO levels in the atmosphere are generally normal, and they are unlikely to harm you. When these levels
                rise in an indoor or outdoor setting, various health risks to both people and the environment arise.
              </span>
            </p>
            <h4 className="whitetext" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16pt" }}>
                <strong>Lets find out the harmful effects of carbon monoxide (CO) gas on our health.</strong>
              </span>
            </h4>
            <p className="whitetext" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                CO is one of the most toxic gases in the environment. Because it harms humans. The most prevalent and
                harmful health impact is that it interacts with hemoglobin. As by preventing oxygen from reacting with
                hemoglobin and being transferred to the bodys many organs. Hence, resulting in organ failure.
              </span>
            </p>
            <p className="whitetext" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                It is especially dangerous for heart patients. Since, it causes a lack of oxygen in the body. Hence, It
                makes us feel sick, and one of the most common symptoms is vomiting. Furthermore, CO poisoning can also
                cause the flu. If not treated promptly, it can result in coma and, in rare circumstances, death due to
                the severe range of effects on the body.
              </span>
            </p>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/flu-288x300.png"
                  alt=" Flu, nausea due to co gas"
                  width="288"
                  height="300"
                />
                <h4 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}> Flu, Nausea</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/Fatigue.png"
                  alt="Fatigue due to co gas "
                  width="288"
                  height="300"
                />
                <h4 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}> Fatigue </span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/Headache.png"
                  alt=" Headache due to co gas"
                  width="288"
                  height="300"
                />
                <h4 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}> Headache</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <img
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/Chest-pain.png"
                  alt=" Chest pain due to co gas"
                  width="288"
                  height="300"
                />
                <h4 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}> Chest Pain</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CO Standards Section */}
      <section style={{ paddingBottom: "40px" }}>
        <div className="container">
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="fade-in-up">
                <table
                  dir="ltr"
                  style={{ width: "74.6783%", height: "142px" }}
                  border="1"
                  cellSpacing="0"
                  cellPadding="0"
                >
                  <tbody>
                    <tr style={{ height: "36px" }}>
                      <td style={{ textAlign: "center", height: "36px", width: "164.87%" }} colSpan="2" rowSpan="1">
                        <span style={{ fontSize: "14pt", color: "#000000" }}>
                          <strong>Carbon Monoxide</strong>
                        </span>
                      </td>
                    </tr>
                    <tr style={{ height: "36px" }}>
                      <td style={{ textAlign: "center", width: "49.7872%", height: "34px" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>Govt. Body</span>
                      </td>
                      <td style={{ textAlign: "center", width: "115.083%", height: "34px" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>Breakpoints</span>
                      </td>
                    </tr>
                    <tr style={{ height: "36px" }}>
                      <td style={{ textAlign: "center", height: "36px", width: "49.7872%" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>India</span>
                      </td>
                      <td style={{ textAlign: "center", height: "36px", width: "115.083%" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>0.0-27 -&gt; Good</span>
                      </td>
                    </tr>
                    <tr style={{ height: "36px" }}>
                      <td style={{ textAlign: "center", height: "36px", width: "49.7872%" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>EPA</span>
                      </td>
                      <td style={{ textAlign: "center", height: "36px", width: "115.083%" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>0.0-4.4 -&gt; Good</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>

          <div className="row" style={{ paddingBottom: "50px" }}>
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="fade-in-up">
                <table
                  dir="ltr"
                  style={{ width: "75.6565%", height: "142px" }}
                  border="1"
                  cellSpacing="0"
                  cellPadding="0"
                >
                  <tbody>
                    <tr style={{ height: "36px" }}>
                      <td style={{ textAlign: "center", height: "36px", width: "166.221%" }} colSpan="2" rowSpan="1">
                        <span style={{ fontSize: "14pt", color: "#000000" }}>
                          <strong>Carbon Monoxide Standards</strong>
                        </span>
                      </td>
                    </tr>
                    <tr style={{ height: "36px" }}>
                      <td style={{ textAlign: "center", width: "49.7872%", height: "34px" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>California</span>
                      </td>
                      <td style={{ textAlign: "center", width: "116.434%", height: "34px" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>8hrs - 9 PPM </span>
                      </td>
                    </tr>
                    <tr style={{ height: "36px" }}>
                      <td style={{ textAlign: "center", height: "36px", width: "49.7872%" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>AAQS</span>
                      </td>
                      <td style={{ textAlign: "center", height: "36px", width: "116.434%" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>1 hour - 20 PPM</span>
                      </td>
                    </tr>
                    <tr style={{ height: "36px" }}>
                      <td style={{ textAlign: "center", height: "36px", width: "49.7872%" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>WHO</span>
                      </td>
                      <td style={{ textAlign: "center", height: "36px", width: "116.434%" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>24hrs - 3.5 PPM</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <section className="health_effects_section">
                <h2 className="health_heading">Carbon Monoxide (CO) and the harm it causes</h2>
                <h2 className="health_heading mobile_level_heading">CO Levels and their health effects</h2>

                <div className="level_range_cntr health_effect_box">
                  <div className="lavel_box">
                    <span>Levels</span>
                    <span className="mg_text">
                      <b>
                        (mg/m<sup>3</sup>)
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
                      <span>0-1.0 </span>
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
                      <span>1.1-2.0</span>
                      <span className="mobile_mg_text">
                        (mg/m<sup>3</sup>)
                      </span>
                    </p>
                  </div>
                  <div className="health_color Satisfactory_color">
                    <span>Slight headache experienced after 1-3 hours</span>
                  </div>
                </div>
                <div className="level_range_cntr">
                  <div className="lavel_box">
                    <span>Moderately polluted</span>
                    <p>
                      <span>2.1-10</span>
                      <span className="mobile_mg_text">
                        (mg/m<sup>3</sup>)
                      </span>
                    </p>
                  </div>
                  <div className="health_color Moderately_color">
                    <span>Nausea, drowsiness, dangerous after 3hrs of exposure</span>
                  </div>
                </div>
                <div className="level_range_cntr">
                  <div className="lavel_box">
                    <span>Poor</span>
                    <p>
                      <span>10-17</span>
                      <span className="mobile_mg_text">
                        (mg/m<sup>3</sup>)
                      </span>
                    </p>
                  </div>
                  <div className="health_color poor_color">
                    <span>Qualmish, headache, death within 3 hrs of exposure </span>
                  </div>
                </div>
                <div className="level_range_cntr">
                  <div className="lavel_box">
                    <span>Very poor</span>
                    <p>
                      <span>17-34</span>
                      <span className="mobile_mg_text">
                        (mg/m<sup>3</sup>)
                      </span>
                    </p>
                  </div>
                  <div className="health_color verypoor_color">
                    <span>Exposures can cause death within 2 hrs </span>
                  </div>
                </div>
                <div className="level_range_cntr">
                  <div className="lavel_box">
                    <span>Severe</span>
                    <p>
                      <span>34+</span>
                      <span className="mobile_mg_text">
                        (mg/m<sup>3</sup>)
                      </span>
                    </p>
                  </div>
                  <div className="health_color Severe_color">
                    <span>Fatal within 60 minutes of exposure </span>
                  </div>
                </div>

                <i className="bottom_text">*8-hour average for CO by CPCB</i>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Corrective Measures Section */}
      <section className="full-width-section" style={{ paddingBottom: "40px", backgroundColor: "#fefdfd" }}>
        <div className="container">
          <div className="fade-in-up">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>Corrective Measures To Reduce Carbon Monoxide (CO) Gas</span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                CO cannot be readily eradicated with air purifiers or other ways. Thus corrective measures are the only
                option to avoid any exposure in real life. The only way to discover and avoid problems is to monitor
                them. To decrease exposure and generation of this hazardous gas, preventive measures must be performed.
              </span>
            </p>
            <h4 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                <strong>
                  <span style={{ fontSize: "18pt" }}>Some of the measures are mentioned below;</span>
                </strong>
              </span>
            </h4>
          </div>

          <div className="row align-items-center">
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/Ventilation-180x180.png"
                alt="Ventilation"
                className="img-fluid fade-in-up"
              />
            </div>
            <div className="col-md-9">
              <div className="fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>– Ventilation:</strong> A well-ventilated room is the easiest and most effective way to
                    tackle CO pollution. Because ventilation not only reduces the concentration of CO. It also increases
                    fresh air in the room.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/Public-transport-181x142.png"
                alt="Public Transport"
                className="img-fluid fade-in-up"
              />
            </div>
            <div className="col-md-9">
              <div className="fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>– Public transport:</strong> By using public transport we can easily reduce our carbon
                    footprint and hence CO production.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/alternate-fuel-181x142.png"
                alt="Alternate Fuels"
                className="img-fluid fade-in-up"
              />
            </div>
            <div className="col-md-9">
              <div className="fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>– Alternate fuels:</strong> new power sources like hydrogen fuel cars or electric cars are
                    good alternatives to traditional fuel cars. Because they help reduce emission pollution from these
                    cars.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/non-fule-alternative-181x142.png"
                alt="Non-fuel Alternatives"
                className="img-fluid fade-in-up"
              />
            </div>
            <div className="col-md-9">
              <div className="fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>– Non-fuel alternatives:</strong> Using cycles or other alternatives can be effective in
                    keeping a check on the pollution
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/12/Recycle-180x180.png"
                alt="Recycling"
                className="img-fluid fade-in-up"
              />
            </div>
            <div className="col-md-9">
              <div className="fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>– Recycling</strong> rather than burning waste is an option for reducing CO pollution in the
                    surrounding.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div style={{ height: "50px" }}></div>

          <div className="row">
            <div className="col-md-12">
              <h2 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>Air quality monitor to measure CO</span>
              </h2>
              <img
                className="aligncenter wp-image-64498"
                src="https://www.pranaair.com/wp-content/uploads/2022/12/air-quality-monitor-to-measure-co-level-1024x1024.png"
                alt="air quality monitor to measure Carbon monoxide (CO) level"
                width="683"
                height="683"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Air Quality Monitor Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fade-in-up">
                <h3 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24pt" }}>Choose Your Air Quality Monitor To Measure CO Gas</span>
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
              >
                <div>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/11/prana-air-carbon-monoxide-co-sensor-with-board.jpg"
                    alt="prana air CO sensor"
                    className="img-fluid"
                  />
                  <h4 style={{ textAlign: "center" }}>CO Monitor Model A</h4>
                </div>
                <div>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/03/Sensible-monitor-prana-air.png"
                    alt="prana air co monitor"
                    className="img-fluid"
                  />
                  <h4 style={{ textAlign: "center" }}>CO Monitor Model B</h4>
                </div>
                <div>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-device.png"
                    alt="prana air handheld CO Monitor"
                    className="img-fluid"
                  />
                  <h4 style={{ textAlign: "center" }}>CO Monitor Model C</h4>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

