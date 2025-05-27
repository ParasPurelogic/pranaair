"use client"
import { useState } from "react"
import "./style.css"
import "react-multi-carousel/lib/styles.css"
import ContactForm from "@/Components/Contacform/ContactForm";


export default function AirSanitizer() {
  const [activeTab, setActiveTab] = useState("tab1")
  const [activeFaq, setActiveFaq] = useState(0)

  // Function to handle tab changes
  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <main>
      {/* Banner Section - Completely redesigned to match reference UI */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="product-area">
              {/* Positive/Negative ions */}
              <div className="ion-particles">
                <div className="ion positive" style={{ top: "20%", left: "10%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/positive-ion-icon.png"
                    alt="positive ion"
                  />
                </div>
                <div className="ion negative" style={{ top: "30%", left: "30%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/negative-ion-icon.png"
                    alt="negative ion"
                  />
                </div>
                <div className="ion positive" style={{ top: "50%", left: "15%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/positive-ion-icon.png"
                    alt="positive ion"
                  />
                </div>
                <div className="ion negative" style={{ top: "60%", left: "25%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/negative-ion-icon.png"
                    alt="negative ion"
                  />
                </div>
                <div className="ion positive" style={{ top: "80%", left: "20%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/positive-ion-icon.png"
                    alt="positive ion"
                  />
                </div>
              </div>

              {/* Product image with background */}
              <div className="product-image-container">
                <div className="product-bg"></div>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-sanitizer-cum-air-purifier.png"
                  alt="Prana Air Sanitizer"
                  className="product-image"
                />
              </div>

              {/* Virus particles */}
              <div className="virus-particles">
                <div className="virus" style={{ top: "20%", right: "15%" }}>
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/05/virus-icon.png" alt="virus" />
                </div>
                <div className="virus" style={{ top: "35%", right: "5%" }}>
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/05/bacteria-icon.png" alt="bacteria" />
                </div>
                <div className="virus" style={{ top: "50%", right: "20%" }}>
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/05/covid19-virus.png" alt="covid virus" />
                </div>
                <div className="virus" style={{ top: "65%", right: "10%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/corona-virus-icon.png"
                    alt="corona virus"
                  />
                </div>
                <div className="virus" style={{ top: "80%", right: "25%" }}>
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/05/germs-icon.png" alt="germs" />
                </div>
                <div className="virus" style={{ bottom: "10%", left: "40%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/harmful-virus-icon.png"
                    alt="harmful virus"
                  />
                </div>
                <div className="virus" style={{ bottom: "20%", right: "40%" }}>
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/05/allergens-icon.png" alt="allergens" />
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="gradient-bar-top"></div>
            <h1 className="product-title">AIR SANITIZER</h1>
            <h2 className="product-code">BI-AR-HS-AR001</h2>
            <p className="product-description">
              Prana Air Sanitizer Cum Air Purifier has a cutting-edge space technology that works even in microgravity
              and wipes out 99.99% of pathogens.
            </p>
            <div className="price-section">
              <span className="price-label">MRP</span>
              <span className="price-value">₹ 29,990.00</span>
            </div>
            <form class="cart" action="https://www.pranaair.com/product/air-sanitizer/" enctype="multipart/form-data" method="post">
              <button class="single_add_to_cart_button button alt button button_slide slide_right" name="add-to-cart"
                type="submit" value="14022">Buy Now</button></form>
          </div>
        </div>
      </section>

      {/* Certified Space Technology Section */}
      <section className="certified_bg_img">
        <div className="certified_space_box">
          <h2 style={{ paddingTop: 0 }}>Certified Space Technology</h2>
        </div>
      </section>

      {/* Air Sanitizer Description */}
      <section>
        <div className="specification_box monitor_box text-center">
          <h2 className="specification_heading featured_heading">
            <div className="gradient-bar"></div>
            <span style={{ fontSize: "20pt" }}>Air Sanitizer Cum Air Purifier</span>
          </h2>
          <p>
            <span style={{ fontSize: "13pt" }}>
              Impure indoor air is a major concern for households. Prana Air sanitizer is a mega cleanser
            </span>
            <br />
            <span style={{ fontSize: "13pt" }}>
              that disinfects the air around you. This supreme air purifier clears out germs and pollutants, and makes
              air breathable.
            </span>
            <br />
            <span style={{ fontSize: "13pt" }}>
              The purifier also makes your space free from repulsive and putrid odours. In short, this magical machine
              renders yours life livable and air breathable.
            </span>
          </p>
        </div>
      </section>

      {/* Five Stage Actions */}
      <section>
        <div className="specification_box monitor_box text-center">
          <h2 className="specification_heading featured_heading">
            <div className="gradient-bar"></div>
            <span style={{ fontSize: "20pt" }}>Five Stage Actions</span>
          </h2>
          <h3 className="aqi_heading">
            <span style={{ fontSize: "14pt" }}>
              What makes our product different &amp; better than its contemporaries
            </span>
          </h3>
        </div>
      </section>

      {/* Features Section */}
      <section className="featured_section featured_bg_section">
        <div className="featured_ctnr">
          <div className="feature_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/03/air-sanitizer-uv-light-bacteria.png"
              alt="air sanitizer uv light bacteria"
            />
            <div className="feature_wrap_box">
              <h2>UV Light Kills Bacteria</h2>
              <p>The ultraviolet radiations are effective in making the environment free from microbes.</p>
            </div>
          </div>
          <div className="feature_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/03/Sanitizer-Controlled-Ozone.png"
              alt="air sanitizer controls ozone"
            />
            <div className="feature_wrap_box">
              <h2>Controlled Ozone</h2>
              <p>Controlled levels of ozone gas to eliminate the remnant allergens and microbes.</p>
            </div>
          </div>
          <div className="feature_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/03/positive-negative-ions.png"
              alt="air sanitizer positive negative ions"
            />
            <div className="feature_wrap_box">
              <h2>Positive &amp; Negative Ions</h2>
              <p>An array of million of ions to remove dust and other particulate pollutants.</p>
            </div>
          </div>
          <div className="feature_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/03/Prana-Air-Photocatalytic-Oxidation.png"
              alt="prana air photocatalytic oxidation"
            />
            <div className="feature_wrap_box">
              <h2>Photocatalytic Oxidation</h2>
              <p>Removal of biological contaminants via molecular dissociation.</p>
            </div>
          </div>
          <div className="feature_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/03/Electrostatic.png"
              alt="air sanitizer electrostatic"
            />
            <div className="feature_wrap_box">
              <h2>Electrostatic</h2>
              <p>The pre-filter keeps the purifier clean and filters out initial impurities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="featured_section howitwork_section">
        <div className="specification_box monitor_box text-center">
          <h2 className="specification_heading featured_heading">
            <div className="gradient-bar"></div>
            <span style={{ fontSize: "20pt" }}>Packed With 4-in-1 Ultra Strength</span>
          </h2>
        </div>

        <div className="howit_work_cntr clearfix">
          <div className="howitworks_img_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/air-sanitizer-Electrostatic-Filtration.png"
              alt="air sanitizer electrostatic filtration"
            />
          </div>
          <div className="howitworks_box">
            <h3>Electrostatic Filtration</h3>
            <p style={{ fontSize: "12pt" }}>
              Purification begins with an electrostatic pre-filter to keep the purifier clean along with active
              filtration of impurities. What makes it better than the usual HEPA filter is its washability &amp;
              reusability.
            </p>
          </div>
        </div>

        <div className="howit_work_cntr clearfix float_right">
          <div className="howitworks_img_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/air-sanitizer-Ionization-Chamber.png"
              alt="air sanitizer ionization chamber"
            />
          </div>
          <div className="howitworks_box">
            <h3>Ionization Chamber</h3>
            <p style={{ fontSize: "12pt" }}>
              The purifier creates a continuous stream of millions of negative ions that charge the pollutants. This
              causes them to clump together, making them heavier &amp; easy to get rid of. They can either get sucked
              into the home HVAC system or just settle down on the floor.
            </p>
          </div>
        </div>

        <div className="howit_work_cntr clearfix">
          <div className="howitworks_img_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/air-sanitizer-Regulated-Purification.png"
              alt="air sanitizer regulated purification"
            />
          </div>
          <div className="howitworks_box">
            <h3>Regulated Purification</h3>
            <p style={{ fontSize: "12pt" }}>
              The users can adjust the oxidation setting according to their comfort. In the High Mode, the purification
              plate releases activated oxygen that catalyzes the breakdown of odour-producing contaminants. Through the
              Away Mode, the users can set a timer to automatically shut the equipment off. This is to optimize the
              output when the room or home is unoccupied.
            </p>
          </div>
        </div>

        <div className="howit_work_cntr clearfix float_right">
          <div className="howitworks_img_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/air-sanitizer-Photocatalytic-Disinfection.png"
              alt="air sanitizer photocatalytic disinfection"
            />
          </div>
          <div className="howitworks_box">
            <h3>Photocatalytic Disinfection</h3>
            <p style={{ fontSize: "12pt" }}>
              This mode of disinfection works on the principle of photocatalytic oxidation (PCO). It wipes out 99% of
              the biological contaminants, such as bacteria, viruses, fungi, mold &amp; spores in less than 24 hours
              through molecular dissociation. This means that the destruction of the pathogens take place at the
              molecular level.
            </p>
          </div>
        </div>
      </section>

      {/* Cleans 99.99% Section - Updated to match reference design */}
      <section className="featured_section">
        <div className="specification_box monitor_box text-center">
          <h2 className="specification_heading featured_heading kills_head">
            <div className="gradient-bar"></div>
            <span style={{ fontSize: "20pt" }}>Cleans 99.99% of Pollutants and Microbes</span>
          </h2>
          <h3 className="aqi_heading kills_para">
            Kills pathogens including H1N1 virus, Klebsiella pneumonea, Escherichia coli, Staphylococcus albus etc.
          </h3>
          <h2 className="removal_heading">
            <sup>
              <img src="https://www.pranaair.com/wp-content/uploads/2021/03/virus-icon.png" alt="virus icon" />
            </sup>
          </h2>
        </div>
      </section>

      {/* Product Features Section - Updated to match reference design */}
      <section className="featured_section product_featured_sec">
        <div className="product-features-diagram">
          <div className="product-center-image">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sanitizer-with-purifier.png"
              alt="Prana Air Sanitizer"
            />
          </div>
          <div className="features-diagram-container">
            <div className="feature-item">
              <div className="feature-item-header">
                <img src="https://www.pranaair.com/wp-content/uploads/2021/03/pco-cell.png" alt="PCO Cell" />
                <h3>PCO Cell</h3>
              </div>
              <p>A section based on photocatylitic oxidation to wipe out 99% of microbes in less than 24 hours.</p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <img src="https://www.pranaair.com/wp-content/uploads/2021/03/pre-filter.png" alt="Pre Filter" />
                <h3>Pre Filter</h3>
              </div>
              <p>Reusable and washable Electrostatic prefilter for the purpose of initial purification.</p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/03/control-button.png"
                  alt="Control Button"
                />
                <h3>Control Button</h3>
              </div>
              <p>Regulate the functions of this air purifier with the control buttons.</p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <img src="https://www.pranaair.com/wp-content/uploads/2021/03/outlet.png" alt="Air Outlet" />
                <h3>Air Outlet</h3>
              </div>
              <p>
                The air outlet releases the purest and the most fresh air for the users. Be ready to breath in comfort.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/03/purification.png"
                  alt="Purification Plate"
                />
                <h3>Purification Plate</h3>
              </div>
              <p>The plate releases a lot of negative ions to render the air pure and breathable.</p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <img src="https://www.pranaair.com/wp-content/uploads/2021/03/Remote.png" alt="Remote Control" />
                <h3>Remote Control</h3>
              </div>
              <p>
                The device comes with a remote control to regulate the functions as per the comfort of the user from a
                distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="popup-tutorial popup-tutorial-top">
        <div className="container mx-auto text-center py-10">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/3zoicWFwYZI"
            title="Prana Air Sanitizer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="featured_section">
        <div className="specification_box monitor_box text-center">
          <h2 className="specification_heading featured_heading">
            <div className="gradient-bar"></div>
            <span style={{ fontSize: "20pt" }}>Air Sanitizer vs Air Purifier (any)</span>
          </h2>
        </div>

        <div className="tablesenitizer_box">
          <table>
            <tbody>
              <tr>
                <th>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Sl.No.</span>
                </th>
                <th>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Product Specification</span>
                </th>
                <th>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Prana Air Sanitizer</span>
                </th>
                <th>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Contemporary Air Purifiers</span>
                </th>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>1</span>
                </td>
                <td className="td_first">
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Technology Used For Purification</span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    4-In-1: Electrostatic Filtration, Ionization, Regulated Purification &amp; Photocatalytic
                    Disinfection
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    Pre-Filters, Activated Carbon Filter, And/Or HEPA Filters
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>2</span>
                </td>
                <td className="td_first">
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Action of Purifying Contaiminants</span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Used technology kills them.</span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Filter traps them.</span>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>3</span>
                </td>
                <td className="td_first">
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Efficiency Against Microbes</span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>99.99%</span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>99.95 to 99.99%</span>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>4</span>
                </td>
                <td className="td_first">
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Range Of Action</span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>3000 Sq.Ft.</span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>500-1000 Sq.Ft.</span>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>5</span>
                </td>
                <td className="td_first">
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Use of Filter for Purification</span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Not Required</span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Yes</span>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>6</span>
                </td>
                <td className="td_first">
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Maintenance/Replacement of Filter Cost</span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>No</span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Yes</span>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>7</span>
                </td>
                <td className="td_first">
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Efficiency Against VOCs</span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Yes</span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>No</span>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>8</span>
                </td>
                <td className="td_first">
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Reduces Recontamination</span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>Yes</span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>No</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Range of Action Section - Added to match reference design */}
      <section className="air-puruifer_section">
        <div className="range-of-action-container">
          <div className="range-title">RANGE OF ACTION</div>
          <div className="range-comparison">
            <div className="range-item">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/ordinary-air-purifier.png"
                alt="Regular Air Purifier"
              />
              <h3>AIR PURIFIER (ANY)</h3>
              <div className="range-value">300 sq. ft.</div>
              <p>(Small - medium rooms)</p>
            </div>
            <div className="range-item">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sanitizer-with-normal-purifier.png"
                alt="Prana Air Sanitizer"
              />
              <h3>AIR SANITIZER</h3>
              <div className="range-value">3000 sq. ft.</div>
              <p>(Large Areas)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wondrous Observations - Updated to match reference design */}
      <section className="featured_section">
        <div className="specification_box monitor_box text-center">
          <h2 className="specification_heading featured_heading observation_head">
            <div className="gradient-bar"></div>
            <span style={{ fontSize: "20pt" }}>Wondrous Observations</span>
          </h2>
        </div>
      </section>

      {/* Graph Sections - Updated to match reference design */}
      <section className="featured_section graph_section">
        <div className="modern-observation-row">
          <div className="modern-observation-image">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/graph-of-reduction-of-microbes.png"
              alt="graph of reduction of microbes"
              className="graph-img"
            />
          </div>
          <div className="modern-observation-content">
            <div className="modern-observation-list">
              <ul>
                <li>Staphylococcus aureus (staph)</li>
                <li>Escherichia coli</li>
                <li>Bacillus spp.</li>
                <li>Staphylococcus aureus (MRSA)</li>
                <li>Streptococcus spp.</li>
                <li>Pseudomonas spp.</li>
                <li>Listeria monocytogenes</li>
                <li>Candida albicans</li>
                <li>Stachybotrys chartarum</li>
                <li>Influenza Virus H5N1 (avian bird-flu)</li>
                <li>Hepatitis</li>
                <li>H1N1 (swine flu)</li>
                <li>Norovirus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="featured_section graph_section">
        <div className="modern-observation-row reverse">
          <div className="modern-observation-content">
            <h3>80% + Reduction in number of Flu-Related Dismissals</h3>
            <p>
              The graph demonstrates the decrease in the number of Flu-Related Dismissals. A reduction of more than 80%
              was observed after the installation of air purification units. The number of dismissals further decreased
              with an increase in the air purification units. This graph confirms the high-end performance and
              efficiency of the device.
            </p>
          </div>
          <div className="modern-observation-image">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/graph-of-Reduction-in-number-of-Flu-Related.png"
              alt="graph of reduction in number of flu"
              className="graph-img"
            />
          </div>
        </div>
      </section>

      <section className="featured_section graph_section">
        <div className="modern-observation-row">
          <div className="modern-observation-image">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/graph-of-Reduction-of-Airborne-Contaminants.png"
              alt="reduction of airborne contaminants"
              className="graph-img"
            />
          </div>
          <div className="modern-observation-content">
            <h3>Reduction of Airborne Contaminants</h3>
            <p>
              Pathogens are the biological agents (microorganisms) that can infect its host with the associated disease.
              Close to a 100% reduction in the airborne pathogens was achieved during the operating hours of Air
              Sanitizer.
            </p>
          </div>
        </div>
      </section>

      <section className="featured_section graph_section">
        <div className="modern-observation-row reverse">
          <div className="modern-observation-content">
            <h3>100% Reduction in cases of Staph</h3>
            <p>
              Staphylococcus spp. is a class of bacteria that causes skin-based infections. Staph infections are common
              in health-care centers that are not sanitized regularly. The graph depicts a whopping decrease in the
              cases of Staph infection after the installation of Air Sanitizer.
            </p>
          </div>
          <div className="modern-observation-image">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/grapha-of-reduction-in-staph.png"
              alt="graph of reduction in staph"
              className="graph-img"
            />
          </div>
        </div>
      </section>

      {/* Testing Results - Updated to match reference design */}
      <section className="featured_section testing_result">
        <div className="specification_box monitor_box text-center">
          <h2 className="specification_heading featured_heading">
            <div className="gradient-bar"></div>
            <span style={{ fontSize: "20pt" }}>Testing Results</span>
          </h2>
          <p className="aqi_heading">
            <span style={{ fontSize: "12pt" }}>
              The aggressive air sanitization technology can reduce the quantity of virus, bacteria and other harmful
            </span>
            <br />
            <span style={{ fontSize: "12pt" }}>
              substances in the air as well as surface-bound, including Klebsiella pneumoniae, Escherichia coli,
              Staphylococcus
            </span>
            <br />
            <span style={{ fontSize: "12pt" }}>aureus, Staphylococcus albus, etc.</span>
          </p>
        </div>
      </section>

      {/* Elimination Graphs - Updated to match reference design */}
      <section className="featured_section">
        <div className="elimination-grid">
          <div className="elimination-item">
            <h3>99.99% Elimination of surface-bound Staphylococcus albus</h3>
            <p>
              <span style={{ fontSize: "12pt" }}>
                Eliminates surface-bound pathogens such as <b>Staphylococcus albus</b>
              </span>
              <br />
              <span style={{ fontSize: "12pt" }}>with an efficiency of upto 99.99% within 30mins of operation.</span>
            </p>
            <div className="elimination-graph">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/99-Elimination-of-surface-bound-Staphylococcus-albus.jpeg"
                alt="99% eliminating surface of bound staphylococcus albus"
              />
            </div>
          </div>
          <div className="elimination-item">
            <h3>99.99% Elimination of surface-bound Staphylococcus aureus</h3>
            <p>
              <span style={{ fontSize: "12pt" }}>
                Eliminates surface-bound pathogens such as <b>Staphylococcus aureus</b>
              </span>
              <br />
              <span style={{ fontSize: "12pt" }}>with an efficiency of upto 99.99% within 30mins of operation.</span>
            </p>
            <div className="elimination-graph">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/99-Elimination-of-surface-bound-Staphylococcus-aureus.jpeg"
                alt="air sanitizer eliminating surface bound of staphylococcus aureus"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="featured_section">
        <div className="elimination-grid">
          <div className="elimination-item">
            <h3>99.99% Elimination of surface-bound Escherichia coli</h3>
            <p>
              <span style={{ fontSize: "12pt" }}>
                Eliminates surface-bound pathogens such as <b>Escherichia coli</b> with
              </span>
              <br />
              <span style={{ fontSize: "12pt" }}>an efficiency of upto 99.99% within 30mins of operation.</span>
            </p>
            <div className="elimination-graph">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/99-Elimination-of-surface-bound-Escherichia-coli.jpeg"
                alt="99% eliminating surface bound of escherishia coli"
              />
            </div>
          </div>
          <div className="elimination-item">
            <h3>99.99% Elimination of surface-bound Klebsiella pneumoniae</h3>
            <p>
              <span style={{ fontSize: "12pt" }}>
                Eliminates surface-bound pathogens such as <b>Klebsiella pneumoniae</b>
              </span>
              <br />
              <span style={{ fontSize: "12pt" }}> with an efficiency of upto 99.99% within 30mins of operation.</span>
            </p>
            <div className="elimination-graph">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/99-Elimination-of-surface-bound-Klebsiella-pneumoniae.jpeg"
                alt="99% eliminating surface bound of klebsiella pneumoniae"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="featured_section text-center">
        <div className="elimination_graph_box">
          <h3>99.99% Elimination of surface-bound H1N1</h3>
          <p>
            <span style={{ fontSize: "12pt" }}>
              Eliminates surface-bound pathogens such as <b>H1N1</b> with
            </span>
            <br />
            <span style={{ fontSize: "12pt" }}>an efficiency of upto 99.99% within 30mins of operation.</span>
          </p>
        </div>
        <div className="elimination_graph">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2021/05/99-Elimination-of-surface-bound-H1N1.jpeg"
            alt="99% Elimination of surface bound H1N1"
          />
        </div>
      </section>

      {/* Product Specifications - Updated to match reference design */}
      <section className="modern-product-specifications">
        <div className="container mx-auto">
          <div className="download-brochure-container">
            <button className="download-brochure-button">Download Brochure</button>
          </div>

          <div className="product-spec-content">
            <div className="product-images-container">
              <div className="main-product-image">
                <div id="tab1" className={`tab-content ${activeTab === "tab1" ? "active" : ""}`}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-purifying-air-sanitizer-1.jpg"
                    alt="Prana Air Sanitizer Front View"
                  />
                </div>
                <div id="tab2" className={`tab-content ${activeTab === "tab2" ? "active" : ""}`}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-sanitizer-and-purifier.jpg"
                    alt="Prana Air Sanitizer Side View"
                  />
                </div>
                <div id="tab3" className={`tab-content ${activeTab === "tab3" ? "active" : ""}`}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-sanitizer-backside-1.jpg"
                    alt="Prana Air Sanitizer Back View"
                  />
                </div>
              </div>
              <div className="product-thumbnails">
                <button
                  className={`thumbnail-btn ${activeTab === "tab1" ? "active" : ""}`}
                  onClick={() => handleTabClick("tab1")}
                >
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-purifying-air-sanitizer-1.jpg"
                    alt="Thumbnail 1"
                  />
                </button>
                <button
                  className={`thumbnail-btn ${activeTab === "tab2" ? "active" : ""}`}
                  onClick={() => handleTabClick("tab2")}
                >
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-sanitizer-and-purifier.jpg"
                    alt="Thumbnail 2"
                  />
                </button>
                <button
                  className={`thumbnail-btn ${activeTab === "tab3" ? "active" : ""}`}
                  onClick={() => handleTabClick("tab3")}
                >
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-sanitizer-backside-1.jpg"
                    alt="Thumbnail 3"
                  />
                </button>
              </div>
            </div>

            <div className="product-specs-table">
              <h2>Product Specification</h2>
              <table>
                <tbody>
                  <tr>
                    <td>
                      Sanitizing Technology
                      <br />
                      Filter
                    </td>
                    <td>
                      Controlled Ozone, PCO, Negative Ions, UV Light
                      <br />
                      Pre-filter
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Settings
                      <br />
                      Noise Level
                    </td>
                    <td>32dB, 36dB, 41dB, 46dB, 51dB</td>
                  </tr>
                  <tr>
                    <td>Display</td>
                    <td>LCD Display</td>
                  </tr>
                  <tr>
                    <td>Product Size</td>
                    <td>315mm (L) * 229mm (W) * 280mm (H) ( 9 * 124 * 11 )</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>3.86 kg (8.5 lbs)</td>
                  </tr>
                  <tr>
                    <td>Power</td>
                    <td>54W DC 38V/3A (with power adaptor)</td>
                  </tr>
                  <tr>
                    <td>Coverage</td>
                    <td>
                      279 m<sup>3</sup> ( 3,000ft<sup>2</sup> )
                    </td>
                  </tr>
                  <tr>
                    <td>Ions Concentration</td>
                    <td>
                      2*10<sup>6</sup>/ cm<sup>3</sup>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="get-quote-button">Get A Quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* Aggressive Cleaning Section - Updated to match reference design */}
      <section className="modern-cleaning-section">
        <div className="container mx-auto">
          <div className="section-header">
            <div className="gradient-bar"></div>
            <h2>Aggressive Cleaning For Living Space</h2>
            <p>Eliminate the surface-bound virus and bacteria</p>
          </div>

          <div className="cleaning-grid">
            <div className="cleaning-card">
              <div className="cleaning-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-sanitizer-sanitizes-the-virus.png"
                  alt="Bacteria under microscope"
                />
              </div>
              <h3>Sanitize</h3>
              <h4>Eliminate surface bound germs</h4>
              <p>
                Effectively sanitizes the surfaces-the controlled ozone. Concentration levels will proactively oxidize
                surface-bound germs to assure the cleanliness and hygiene of your space.
              </p>
              <div className="card-number">01</div>
            </div>

            <div className="cleaning-card">
              <div className="cleaning-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-sanitizer-eliminates-the-airborne.png"
                  alt="Virus under microscope"
                />
              </div>
              <h3>Sterilize</h3>
              <h4>Eliminate airborne germs</h4>
              <p>
                With its incredible oxidation capacity, ozone helps in elimination of airborne bacteria, virus and
                fungi while also doubling as an effective odour-control agent to prevent unpleasant smells from
                lingering in the air we breathe.
              </p>
              <div className="card-number">02</div>
            </div>

            <div className="cleaning-card">
              <div className="cleaning-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-sanitizer-Ionize-the-ions.png"
                  alt="Ions visualization"
                />
              </div>
              <h3>Ionize</h3>
              <h4>Fresher indoor air</h4>
              <p>
                Revels in an overall calming effect with millions of negative ions that freshen up the indoor air
                quality. Negative ions also aid in relieving stress, boosting energy levels, and increasing overall
                alertness.
              </p>
              <div className="card-number">03</div>
            </div>

            <div className="cleaning-card">
              <div className="cleaning-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-sanitizer-purifies-the-air-inside.png"
                  alt="Dust mite under microscope"
                />
              </div>
              <h3>Purify</h3>
              <h4>Eliminate airborne allergens</h4>
              <p>
                Eases your breathing by cleaning musty odours, and removing the dust, mites, pet danders, pollens, and
                other allergens.
              </p>
              <div className="card-number">04</div>
            </div>
          </div>
        </div>
      </section>

      {/* Kills & Eliminates Section - Updated to match reference design */}
      <section className="modern-kills-section">
        <div className="container mx-auto">
          <div className="section-header">
            <div className="gradient-bar"></div>
            <h2>Kills & Eliminates</h2>
          </div>

          <div className="kills-grid">
            <div className="kills-card">
              <div className="kills-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/air-sanitizer-kills-virus.png"
                  alt="Virus and bacteria visualization"
                />
              </div>
              <h3>Virus & Bacteria</h3>
            </div>

            <div className="kills-card">
              <div className="kills-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/air-sanitizer-eliminates-smoke.png"
                  alt="Smoke and fumes visualization"
                />
              </div>
              <h3>
                Smoke and Fumes
                <br />
                Particles
              </h3>
            </div>

            <div className="kills-card">
              <div className="kills-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/air-sanitizer-kills-toxic-gases.png"
                  alt="Toxic gases visualization"
                />
              </div>
              <h3>Toxic Gases</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated to match reference design */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-heading">
              <h2>Get in Touch</h2>
              <p>
                Please help us know what requirements you have. Our team will
                contact you very soon.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm pageName="Air Sanitizer Page" />

      {/* FAQ Section */}
      <section className="faq_section" style={{ paddingTop: "20px" }}>
        <div className="specification_box monitor_box text-center">
          <h2 className="specification_heading featured_heading">
            <div className="gradient-bar"></div>
            <span style={{ fontSize: "20pt" }}>FAQs</span>
          </h2>
          <h3 className="aqi_heading">
            <span style={{ fontSize: "14pt" }}>
              Find out any frequently asked questions about Prana Air - Air Sanitizer.
            </span>
          </h3>
        </div>
      </section>

      <section className="accordian_section accordian_section2 sinitizer_faq_section">
        <div className="container mx-auto">
          <div className="vc_tta-accordion">
            <div className={`vc_tta-panel ${activeFaq === 0 ? "vc_active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleFaq(0)}>
                <h4 className="vc_tta-panel-title">
                  <a>1. What does this Air Sanitizer do?</a>
                </h4>
              </div>
              <div className="vc_tta-panel-body">
                <p>
                  Air Sanitizer serves to make breathing simpler, purer, and healthier. This helpful, in-home unit
                  releases the cleanest and the freshest air conceivable all through the home. It performs comprehensive
                  air cleaning, including elimination of fetid odours, smoke and other unpleasant atmospheric
                  pollutants.
                </p>
              </div>
            </div>

            <div className={`vc_tta-panel ${activeFaq === 1 ? "vc_active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleFaq(1)}>
                <h4 className="vc_tta-panel-title">
                  <a>2. How does it operate?</a>
                </h4>
              </div>
              <div className="vc_tta-panel-body">
                <p>
                  Air Sanitizer operates through a 4-step process that includes pre-filtration, ionization, regulated
                  oxidation, and photocatalytic disinfection.
                </p>
              </div>
            </div>

            <div className={`vc_tta-panel ${activeFaq === 2 ? "vc_active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleFaq(2)}>
                <h4 className="vc_tta-panel-title">
                  <a>3. How much does it weigh?</a>
                </h4>
              </div>
              <div className="vc_tta-panel-body">
                <p>
                  Although it the task it performs is heavy-duty, Air Sanitizer weighs just 3.86 kg (8.5 lbs). You
                  wouldnt have to create any extra space for this device. Place it anywhere you want!
                </p>
              </div>
            </div>

            <div className={`vc_tta-panel ${activeFaq === 3 ? "vc_active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleFaq(3)}>
                <h4 className="vc_tta-panel-title">
                  <a>4. Is Air Sanitizer effective against harmful pathogens?</a>
                </h4>
              </div>
              <div className="vc_tta-panel-body">
                <p>
                  Yes, Air Sanitizer effectively wipes out 99.99% of the total microbes present in the air. It disarms
                  more than 90% microbes in the first 6 hours of operation, including all common household pathogens
                  like Escherichia coli, Staphylococcus spp., H1N1 virus, and even Hepatitis virus.
                </p>
              </div>
            </div>

            <div className={`vc_tta-panel ${activeFaq === 4 ? "vc_active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleFaq(4)}>
                <h4 className="vc_tta-panel-title">
                  <a>5. Does it offer protection against SARS-CoV-2 virus?</a>
                </h4>
              </div>
              <div className="vc_tta-panel-body">
                <p>
                  Absolutely. It offers protection against the SARS-CoV-2 virus which is responsible for the ongoing
                  coronavirus pandemic.
                </p>
              </div>
            </div>

            <div className={`vc_tta-panel ${activeFaq === 5 ? "vc_active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleFaq(5)}>
                <h4 className="vc_tta-panel-title">
                  <a>6. Will Air Sanitizer work in large auditoriums?</a>
                </h4>
              </div>
              <div className="vc_tta-panel-body">
                <p>
                  Yes. Our Air Sanitizer disinfects a space up to an astonishing range of 3,000 sq. feet. Therefore, it
                  is an apt choice for spacious indoor environments.
                </p>
              </div>
            </div>

            <div className={`vc_tta-panel ${activeFaq === 6 ? "vc_active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleFaq(6)}>
                <h4 className="vc_tta-panel-title">
                  <a>7. It generates ozone. Should I be worried?</a>
                </h4>
              </div>
              <div className="vc_tta-panel-body">
                <p>
                  No. There is nothing to worry about! The PCO cell expels out ozone in controlled amount. In normal
                  mode, the ozone output is less than 0.02 ppm.
                </p>
              </div>
            </div>

            <div className={`vc_tta-panel ${activeFaq === 7 ? "vc_active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleFaq(7)}>
                <h4 className="vc_tta-panel-title">
                  <a>8. What is PCO?</a>
                </h4>
              </div>
              <div className="vc_tta-panel-body">
                <p>
                  This mode of disinfection works on the principle of photocatalytic oxidation (PCO). It wipes out 99%
                  of the biological contaminants, such as bacteria, viruses, fungi, mold &amp; spores in less than 24
                  hours through molecular dissociation.
                </p>
              </div>
            </div>

            <div className={`vc_tta-panel ${activeFaq === 8 ? "vc_active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleFaq(8)}>
                <h4 className="vc_tta-panel-title">
                  <a>9. What is High Mode?</a>
                </h4>
              </div>
              <div className="vc_tta-panel-body">
                <p>
                  In this mode of operation, the purification plate releases activated oxygen that catalyzes the
                  breakdown of odour-producing contaminants for ultra-power performance.
                </p>
              </div>
            </div>

            <div className={`vc_tta-panel ${activeFaq === 9 ? "vc_active" : ""}`}>
              <div className="vc_tta-panel-heading" onClick={() => toggleFaq(9)}>
                <h4 className="vc_tta-panel-title">
                  <a>10. What is Away Mode?</a>
                </h4>
              </div>
              <div className="vc_tta-panel-body">
                <p>
                  In this mode of operation, you can run this device with no occupancy or during sleep hours. The users
                  can set a timer to automatically shut the equipment off. This is to optimize the output when the room
                  or home is unoccupied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

