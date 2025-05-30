import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm";
import { getServerTranslation } from "@/i18n/server"

export default async function AirSanitizer() {
  const { t } = await getServerTranslation("air-sanitizer")

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
                    alt={t("pmSensorHero.positiveIonAlt")}
                  />
                </div>
                <div className="ion negative" style={{ top: "30%", left: "30%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/negative-ion-icon.png"
                    alt={t("pmSensorHero.negativeIonAlt")}
                  />
                </div>
                <div className="ion positive" style={{ top: "50%", left: "15%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/positive-ion-icon.png"
                    alt={t("pmSensorHero.positiveIonAlt")}
                  />
                </div>
                <div className="ion negative" style={{ top: "60%", left: "25%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/negative-ion-icon.png"
                    alt={t("pmSensorHero.negativeIonAlt")}
                  />
                </div>
                <div className="ion positive" style={{ top: "80%", left: "20%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/positive-ion-icon.png"
                    alt={t("pmSensorHero.positiveIonAlt")}
                  />
                </div>
              </div>

              {/* Product image with background */}
              <div className="product-image-container">
                <div className="product-bg"></div>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-sanitizer-cum-air-purifier.png"
                  alt={t("pmSensorHero.productImageAlt")}
                  className="product-image"
                />
              </div>

              {/* Virus particles */}
              <div className="virus-particles">
                <div className="virus" style={{ top: "20%", right: "15%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/virus-icon.png"
                    alt={t("pmSensorHero.virusAlt")}
                  />
                </div>
                <div className="virus" style={{ top: "35%", right: "5%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/bacteria-icon.png"
                    alt={t("pmSensorHero.bacteriaAlt")}
                  />
                </div>
                <div className="virus" style={{ top: "50%", right: "20%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/covid19-virus.png"
                    alt={t("pmSensorHero.covidVirusAlt")}
                  />
                </div>
                <div className="virus" style={{ top: "65%", right: "10%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/corona-virus-icon.png"
                    alt={t("pmSensorHero.coronaVirusAlt")}
                  />
                </div>
                <div className="virus" style={{ top: "80%", right: "25%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/germs-icon.png"
                    alt={t("pmSensorHero.germsAlt")}
                  />
                </div>
                <div className="virus" style={{ bottom: "10%", left: "40%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/harmful-virus-icon.png"
                    alt={t("pmSensorHero.harmfulVirusAlt")}
                  />
                </div>
                <div className="virus" style={{ bottom: "20%", right: "40%" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/allergens-icon.png"
                    alt={t("pmSensorHero.allergensAlt")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="gradient-bar-top"></div>
            <h1 className="product-title">{t("pmSensorHero.title")}</h1>
            <h2 className="product-code">{t("pmSensorHero.productCode")}</h2>
            <p className="product-description">{t("pmSensorHero.description")}</p>
            <div className="price-section">
              <span className="price-label">{t("pmSensorHero.priceLabel")}</span>
              <span className="price-value">{t("pmSensorHero.priceValue")}</span>
            </div>
            <form
              className="cart"
              action="https://www.pranaair.com/product/air-sanitizer/"
              encType="multipart/form-data"
              method="post"
            >
              <button
                className="single_add_to_cart_button button alt button button_slide slide_right"
                name="add-to-cart"
                type="submit"
                value="14022"
              >
                {t("pmSensorHero.buyNowButton")}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Certified Space Technology Section */}
      <section className="certified_bg_img">
        <div className="certified_space_box">
          <h2 style={{ paddingTop: 0 }}>{t("pmSensorHero.certifiedSpaceTech")}</h2>
        </div>
      </section>

      {/* Air Sanitizer Description */}
      <section>
        <div className="specification_box monitor_box text-center">
          <h2 className="specification_heading featured_heading">
            <div className="gradient-bar"></div>
            <span style={{ fontSize: "20pt" }}>{t("airSanitizer.title")}</span>
          </h2>
          <p>
            <span style={{ fontSize: "13pt" }}>{t("airSanitizer.description1")}</span>
            <br />
            <span style={{ fontSize: "13pt" }}>{t("airSanitizer.description2")}</span>
            <br />
            <span style={{ fontSize: "13pt" }}>{t("airSanitizer.description3")}</span>
          </p>
        </div>
      </section>

      {/* Five Stage Actions */}
      <section>
        <div className="specification_box monitor_box text-center">
          <h2 className="specification_heading featured_heading">
            <div className="gradient-bar"></div>
            <span style={{ fontSize: "20pt" }}>{t("fiveStageActions.title")}</span>
          </h2>
          <h3 className="aqi_heading">
            <span style={{ fontSize: "14pt" }}>{t("fiveStageActions.subtitle")}</span>
          </h3>
        </div>
      </section>

      {/* Features Section */}
      <section className="featured_section featured_bg_section">
        <div className="featured_ctnr">
          <div className="feature_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/03/air-sanitizer-uv-light-bacteria.png"
              alt={t("features.uvLight.imageAlt")}
            />
            <div className="feature_wrap_box">
              <h2>{t("features.uvLight.title")}</h2>
              <p>{t("features.uvLight.description")}</p>
            </div>
          </div>
          <div className="feature_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/03/Sanitizer-Controlled-Ozone.png"
              alt={t("features.controlledOzone.imageAlt")}
            />
            <div className="feature_wrap_box">
              <h2>{t("features.controlledOzone.title")}</h2>
              <p>{t("features.controlledOzone.description")}</p>
            </div>
          </div>
          <div className="feature_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/03/positive-negative-ions.png"
              alt={t("features.ions.imageAlt")}
            />
            <div className="feature_wrap_box">
              <h2>{t("features.ions.title")}</h2>
              <p>{t("features.ions.description")}</p>
            </div>
          </div>
          <div className="feature_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/03/Prana-Air-Photocatalytic-Oxidation.png"
              alt={t("features.photocatalytic.imageAlt")}
            />
            <div className="feature_wrap_box">
              <h2>{t("features.photocatalytic.title")}</h2>
              <p>{t("features.photocatalytic.description")}</p>
            </div>
          </div>
          <div className="feature_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/03/Electrostatic.png"
              alt={t("features.electrostatic.imageAlt")}
            />
            <div className="feature_wrap_box">
              <h2>{t("features.electrostatic.title")}</h2>
              <p>{t("features.electrostatic.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="featured_section howitwork_section">
        <div className="specification_box monitor_box text-center">
          <h2 className="specification_heading featured_heading">
            <div className="gradient-bar"></div>
            <span style={{ fontSize: "20pt" }}>{t("howItWorks.title")}</span>
          </h2>
        </div>

        <div className="howit_work_cntr clearfix">
          <div className="howitworks_img_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/air-sanitizer-Electrostatic-Filtration.png"
              alt={t("howItWorks.electrostaticFiltration.imageAlt")}
            />
          </div>
          <div className="howitworks_box">
            <h3>{t("howItWorks.electrostaticFiltration.title")}</h3>
            <p style={{ fontSize: "12pt" }}>{t("howItWorks.electrostaticFiltration.description")}</p>
          </div>
        </div>

        <div className="howit_work_cntr clearfix float_right">
          <div className="howitworks_img_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/air-sanitizer-Ionization-Chamber.png"
              alt={t("howItWorks.ionizationChamber.imageAlt")}
            />
          </div>
          <div className="howitworks_box">
            <h3>{t("howItWorks.ionizationChamber.title")}</h3>
            <p style={{ fontSize: "12pt" }}>{t("howItWorks.ionizationChamber.description")}</p>
          </div>
        </div>

        <div className="howit_work_cntr clearfix">
          <div className="howitworks_img_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/air-sanitizer-Regulated-Purification.png"
              alt={t("howItWorks.regulatedPurification.imageAlt")}
            />
          </div>
          <div className="howitworks_box">
            <h3>{t("howItWorks.regulatedPurification.title")}</h3>
            <p style={{ fontSize: "12pt" }}>{t("howItWorks.regulatedPurification.description")}</p>
          </div>
        </div>

        <div className="howit_work_cntr clearfix float_right">
          <div className="howitworks_img_box">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/air-sanitizer-Photocatalytic-Disinfection.png"
              alt={t("howItWorks.photocatalyticDisinfection.imageAlt")}
            />
          </div>
          <div className="howitworks_box">
            <h3>{t("howItWorks.photocatalyticDisinfection.title")}</h3>
            <p style={{ fontSize: "12pt" }}>{t("howItWorks.photocatalyticDisinfection.description")}</p>
          </div>
        </div>
      </section>

      {/* Cleans 99.99% Section - Updated to match reference design */}
      <section className="featured_section">
        <div className="specification_box monitor_box text-center">
          <h2 className="specification_heading featured_heading kills_head">
            <div className="gradient-bar"></div>
            <span style={{ fontSize: "20pt" }}>{t("cleansPollutants.title")}</span>
          </h2>
          <h3 className="aqi_heading kills_para">{t("cleansPollutants.subtitle")}</h3>
          <h2 className="removal_heading">
            <sup>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/virus-icon.png"
                alt={t("cleansPollutants.virusIconAlt")}
              />
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
              alt={t("productFeatures.productImageAlt")}
            />
          </div>
          <div className="features-diagram-container">
            <div className="feature-item">
              <div className="feature-item-header">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/03/pco-cell.png"
                  alt={t("productFeatures.pcoCell.imageAlt")}
                />
                <h3>{t("productFeatures.pcoCell.title")}</h3>
              </div>
              <p>{t("productFeatures.pcoCell.description")}</p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/03/pre-filter.png"
                  alt={t("productFeatures.preFilter.imageAlt")}
                />
                <h3>{t("productFeatures.preFilter.title")}</h3>
              </div>
              <p>{t("productFeatures.preFilter.description")}</p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/03/control-button.png"
                  alt={t("productFeatures.controlButton.imageAlt")}
                />
                <h3>{t("productFeatures.controlButton.title")}</h3>
              </div>
              <p>{t("productFeatures.controlButton.description")}</p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/03/outlet.png"
                  alt={t("productFeatures.airOutlet.imageAlt")}
                />
                <h3>{t("productFeatures.airOutlet.title")}</h3>
              </div>
              <p>{t("productFeatures.airOutlet.description")}</p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/03/purification.png"
                  alt={t("productFeatures.purificationPlate.imageAlt")}
                />
                <h3>{t("productFeatures.purificationPlate.title")}</h3>
              </div>
              <p>{t("productFeatures.purificationPlate.description")}</p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/03/Remote.png"
                  alt={t("productFeatures.remoteControl.imageAlt")}
                />
                <h3>{t("productFeatures.remoteControl.title")}</h3>
              </div>
              <p>{t("productFeatures.remoteControl.description")}</p>
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
            <span style={{ fontSize: "20pt" }}>{t("comparison.title")}</span>
          </h2>
        </div>

        <div className="tablesenitizer_box">
          <table>
            <tbody>
              <tr>
                <th>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.tableHeaders.serialNumber")}
                  </span>
                </th>
                <th>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.tableHeaders.productSpecification")}
                  </span>
                </th>
                <th>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.tableHeaders.pranaAirSanitizer")}
                  </span>
                </th>
                <th>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.tableHeaders.contemporaryAirPurifiers")}
                  </span>
                </th>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>1</span>
                </td>
                <td className="td_first">
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.technologyUsed.specification")}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.technologyUsed.pranaAir")}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.technologyUsed.contemporary")}
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>2</span>
                </td>
                <td className="td_first">
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.actionOfPurifying.specification")}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.actionOfPurifying.pranaAir")}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.actionOfPurifying.contemporary")}
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>3</span>
                </td>
                <td className="td_first">
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.efficiencyAgainstMicrobes.specification")}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.efficiencyAgainstMicrobes.pranaAir")}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.efficiencyAgainstMicrobes.contemporary")}
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>4</span>
                </td>
                <td className="td_first">
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.rangeOfAction.specification")}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.rangeOfAction.pranaAir")}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.rangeOfAction.contemporary")}
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>5</span>
                </td>
                <td className="td_first">
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.useOfFilter.specification")}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.useOfFilter.pranaAir")}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.useOfFilter.contemporary")}
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>6</span>
                </td>
                <td className="td_first">
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.maintenanceCost.specification")}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.maintenanceCost.pranaAir")}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.maintenanceCost.contemporary")}
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>7</span>
                </td>
                <td className="td_first">
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.efficiencyAgainstVOCs.specification")}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.efficiencyAgainstVOCs.pranaAir")}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.efficiencyAgainstVOCs.contemporary")}
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>8</span>
                </td>
                <td className="td_first">
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.reducesRecontamination.specification")}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.reducesRecontamination.pranaAir")}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "12pt", color: "#000000" }}>
                    {t("comparison.rows.reducesRecontamination.contemporary")}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Range of Action Section - Added to match reference design */}
      <section className="air-puruifer_section">
        <div className="range-of-action-container">
          <div className="range-title">{t("rangeOfAction.title")}</div>
          <div className="range-comparison">
            <div className="range-item">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/ordinary-air-purifier.png"
                alt={t("rangeOfAction.airPurifier.imageAlt")}
              />
              <h3>{t("rangeOfAction.airPurifier.title")}</h3>
              <div className="range-value">{t("rangeOfAction.airPurifier.range")}</div>
              <p>{t("rangeOfAction.airPurifier.description")}</p>
            </div>
            <div className="range-item">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sanitizer-with-normal-purifier.png"
                alt={t("rangeOfAction.airSanitizer.imageAlt")}
              />
              <h3>{t("rangeOfAction.airSanitizer.title")}</h3>
              <div className="range-value">{t("rangeOfAction.airSanitizer.range")}</div>
              <p>{t("rangeOfAction.airSanitizer.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wondrous Observations - Updated to match reference design */}
      <section className="featured_section">
        <div className="specification_box monitor_box text-center">
          <h2 className="specification_heading featured_heading observation_head">
            <div className="gradient-bar"></div>
            <span style={{ fontSize: "20pt" }}>{t("wondrousObservations.title")}</span>
          </h2>
        </div>
      </section>

      {/* Graph Sections - Updated to match reference design */}
      <section className="featured_section graph_section">
        <div className="modern-observation-row">
          <div className="modern-observation-image">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/graph-of-reduction-of-microbes.png"
              alt={t("graphSections.microorganismsList.imageAlt")}
              className="graph-img"
            />
          </div>
          <div className="modern-observation-content">
            <div className="modern-observation-list">
              <ul>
                {t("graphSections.microorganismsList.pathogens", { returnObjects: true }).map((pathogen, index) => (
                  <li key={index}>{pathogen}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="featured_section graph_section">
        <div className="modern-observation-row reverse">
          <div className="modern-observation-content">
            <h3>{t("graphSections.fluReduction.title")}</h3>
            <p>{t("graphSections.fluReduction.description")}</p>
          </div>
          <div className="modern-observation-image">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/graph-of-Reduction-in-number-of-Flu-Related.png"
              alt={t("graphSections.fluReduction.imageAlt")}
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
              alt={t("graphSections.airborneContaminants.imageAlt")}
              className="graph-img"
            />
          </div>
          <div className="modern-observation-content">
            <h3>{t("graphSections.airborneContaminants.title")}</h3>
            <p>{t("graphSections.airborneContaminants.description")}</p>
          </div>
        </div>
      </section>

      <section className="featured_section graph_section">
        <div className="modern-observation-row reverse">
          <div className="modern-observation-content">
            <h3>{t("graphSections.staphReduction.title")}</h3>
            <p>{t("graphSections.staphReduction.description")}</p>
          </div>
          <div className="modern-observation-image">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/05/grapha-of-reduction-in-staph.png"
              alt={t("graphSections.staphReduction.imageAlt")}
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
            <span style={{ fontSize: "20pt" }}>{t("testingResults.title")}</span>
          </h2>
          <p className="aqi_heading">
            <span style={{ fontSize: "12pt" }}>{t("testingResults.description1")}</span>
            <br />
            <span style={{ fontSize: "12pt" }}>{t("testingResults.description2")}</span>
            <br />
            <span style={{ fontSize: "12pt" }}>{t("testingResults.description3")}</span>
          </p>
        </div>
      </section>

      {/* Elimination Graphs - Updated to match reference design */}
      <section className="featured_section">
        <div className="elimination-grid">
          <div className="elimination-item">
            <h3>{t("eliminationGraphs.staphylococcusAlbus.title")}</h3>
            <p>
              <span style={{ fontSize: "12pt" }}>
                {t("eliminationGraphs.staphylococcusAlbus.description1")} <b>Staphylococcus albus</b>
              </span>
              <br />
              <span style={{ fontSize: "12pt" }}>{t("eliminationGraphs.staphylococcusAlbus.description2")}</span>
            </p>
            <div className="elimination-graph">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/99-Elimination-of-surface-bound-Staphylococcus-albus.jpeg"
                alt={t("eliminationGraphs.staphylococcusAlbus.imageAlt")}
              />
            </div>
          </div>
          <div className="elimination-item">
            <h3>{t("eliminationGraphs.staphylococcusAureus.title")}</h3>
            <p>
              <span style={{ fontSize: "12pt" }}>
                {t("eliminationGraphs.staphylococcusAureus.description1")} <b>Staphylococcus aureus</b>
              </span>
              <br />
              <span style={{ fontSize: "12pt" }}>{t("eliminationGraphs.staphylococcusAureus.description2")}</span>
            </p>
            <div className="elimination-graph">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/99-Elimination-of-surface-bound-Staphylococcus-aureus.jpeg"
                alt={t("eliminationGraphs.staphylococcusAureus.imageAlt")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Elimination Graphs Section */}
      <section className="featured_section">
        <div className="elimination-grid">
          <div className="elimination-item">
            <h3>{t("additionalEliminationGraphs.escherichiaColiElimination.title")}</h3>
            <p>
              <span style={{ fontSize: "12pt" }}>
                {t("additionalEliminationGraphs.escherichiaColiElimination.description1")} <b>Escherichia coli</b>
              </span>
              <br />
              <span style={{ fontSize: "12pt" }}>
                {t("additionalEliminationGraphs.escherichiaColiElimination.description2")}
              </span>
            </p>
            <div className="elimination-graph">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/99-Elimination-of-surface-bound-Escherichia-coli.jpeg"
                alt={t("additionalEliminationGraphs.escherichiaColiElimination.imageAlt")}
              />
            </div>
          </div>
          <div className="elimination-item">
            <h3>{t("additionalEliminationGraphs.klebsiellaPneumoniaeElimination.title")}</h3>
            <p>
              <span style={{ fontSize: "12pt" }}>
                {t("additionalEliminationGraphs.klebsiellaPneumoniaeElimination.description1")}{" "}
                <b>Klebsiella pneumoniae</b>
              </span>
              <br />
              <span style={{ fontSize: "12pt" }}>
                {t("additionalEliminationGraphs.klebsiellaPneumoniaeElimination.description2")}
              </span>
            </p>
            <div className="elimination-graph">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/99-Elimination-of-surface-bound-Klebsiella-pneumoniae.jpeg"
                alt={t("additionalEliminationGraphs.klebsiellaPneumoniaeElimination.imageAlt")}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="featured_section text-center">
        <div className="elimination_graph_box">
          <h3>{t("additionalEliminationGraphs.h1n1Elimination.title")}</h3>
          <p>
            <span style={{ fontSize: "12pt" }}>
              {t("additionalEliminationGraphs.h1n1Elimination.description1")} <b>H1N1</b>
            </span>
            <br />
            <span style={{ fontSize: "12pt" }}>{t("additionalEliminationGraphs.h1n1Elimination.description2")}</span>
          </p>
        </div>
        <div className="elimination_graph">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2021/05/99-Elimination-of-surface-bound-H1N1.jpeg"
            alt={t("additionalEliminationGraphs.h1n1Elimination.imageAlt")}
          />
        </div>
      </section>

      {/* Product Specifications - Updated with Bootstrap Tabs */}
      <section className="modern-product-specifications">
        <div className="container mx-auto">
          <div className="download-brochure-container">
            <button className="download-brochure-button">{t("productSpecifications.downloadBrochure")}</button>
          </div>

          <div className="product-spec-content">
            <div className="product-images-container">
              {/* Bootstrap Tabs for Product Images */}
              <div className="main-product-image">
                <div className="tab-content" id="productTabContent">
                  <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-purifying-air-sanitizer-1.jpg"
                      alt={t("productSpecifications.imageAlts.frontView")}
                    />
                  </div>
                  <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-sanitizer-and-purifier.jpg"
                      alt={t("productSpecifications.imageAlts.sideView")}
                    />
                  </div>
                  <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-sanitizer-backside-1.jpg"
                      alt={t("productSpecifications.imageAlts.backView")}
                    />
                  </div>
                </div>
              </div>

              <div className="product-thumbnails">
                <ul className="nav nav-tabs" id="productTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active thumbnail-btn"
                      id="tab1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tab1"
                      type="button"
                      role="tab"
                      aria-controls="tab1"
                      aria-selected="true"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-purifying-air-sanitizer-1.jpg"
                        alt={t("productSpecifications.imageAlts.thumbnail1")}
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link thumbnail-btn"
                      id="tab2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tab2"
                      type="button"
                      role="tab"
                      aria-controls="tab2"
                      aria-selected="false"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-sanitizer-and-purifier.jpg"
                        alt={t("productSpecifications.imageAlts.thumbnail2")}
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link thumbnail-btn"
                      id="tab3-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tab3"
                      type="button"
                      role="tab"
                      aria-controls="tab3"
                      aria-selected="false"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-sanitizer-backside-1.jpg"
                        alt={t("productSpecifications.imageAlts.thumbnail3")}
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="product-specs-table">
              <h2>{t("productSpecifications.title")}</h2>
              <table>
                <tbody>
                  <tr>
                    <td>
                      {t("productSpecifications.specifications.sanitizingTechnology.label")}
                      <br />
                      {t("productSpecifications.specifications.filter.label")}
                    </td>
                    <td>
                      {t("productSpecifications.specifications.sanitizingTechnology.value")}
                      <br />
                      {t("productSpecifications.specifications.filter.value")}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {t("productSpecifications.specifications.settings.label")}
                      <br />
                      {t("productSpecifications.specifications.noiseLevel.label")}
                    </td>
                    <td>{t("productSpecifications.specifications.settings.value")}</td>
                  </tr>
                  <tr>
                    <td>{t("productSpecifications.specifications.display.label")}</td>
                    <td>{t("productSpecifications.specifications.display.value")}</td>
                  </tr>
                  <tr>
                    <td>{t("productSpecifications.specifications.productSize.label")}</td>
                    <td>{t("productSpecifications.specifications.productSize.value")}</td>
                  </tr>
                  <tr>
                    <td>{t("productSpecifications.specifications.weight.label")}</td>
                    <td>{t("productSpecifications.specifications.weight.value")}</td>
                  </tr>
                  <tr>
                    <td>{t("productSpecifications.specifications.power.label")}</td>
                    <td>{t("productSpecifications.specifications.power.value")}</td>
                  </tr>
                  <tr>
                    <td>{t("productSpecifications.specifications.coverage.label")}</td>
                    <td>
                      279 m<sup>3</sup> ( 3,000ft<sup>2</sup> )
                    </td>
                  </tr>
                  <tr>
                    <td>{t("productSpecifications.specifications.ionsConcentration.label")}</td>
                    <td>
                      2*10<sup>6</sup>/ cm<sup>3</sup>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="get-quote-button">{t("productSpecifications.getQuote")}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Aggressive Cleaning Section - Updated to match reference design */}
      <section className="modern-cleaning-section">
        <div className="container mx-auto">
          <div className="section-header">
            <div className="gradient-bar"></div>
            <h2>{t("aggressiveCleaning.title")}</h2>
            <p>{t("aggressiveCleaning.subtitle")}</p>
          </div>

          <div className="cleaning-grid">
            <div className="cleaning-card">
              <div className="cleaning-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-sanitizer-sanitizes-the-virus.png"
                  alt={t("aggressiveCleaning.cards.sanitize.imageAlt")}
                />
              </div>
              <h3>{t("aggressiveCleaning.cards.sanitize.title")}</h3>
              <h4>{t("aggressiveCleaning.cards.sanitize.subtitle")}</h4>
              <p>{t("aggressiveCleaning.cards.sanitize.description")}</p>
              <div className="card-number">{t("aggressiveCleaning.cards.sanitize.number")}</div>
            </div>

            <div className="cleaning-card">
              <div className="cleaning-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-sanitizer-eliminates-the-airborne.png"
                  alt={t("aggressiveCleaning.cards.sterilize.imageAlt")}
                />
              </div>
              <h3>{t("aggressiveCleaning.cards.sterilize.title")}</h3>
              <h4>{t("aggressiveCleaning.cards.sterilize.subtitle")}</h4>
              <p>{t("aggressiveCleaning.cards.sterilize.description")}</p>
              <div className="card-number">{t("aggressiveCleaning.cards.sterilize.number")}</div>
            </div>

            <div className="cleaning-card">
              <div className="cleaning-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-sanitizer-Ionize-the-ions.png"
                  alt={t("aggressiveCleaning.cards.ionize.imageAlt")}
                />
              </div>
              <h3>{t("aggressiveCleaning.cards.ionize.title")}</h3>
              <h4>{t("aggressiveCleaning.cards.ionize.subtitle")}</h4>
              <p>{t("aggressiveCleaning.cards.ionize.description")}</p>
              <div className="card-number">{t("aggressiveCleaning.cards.ionize.number")}</div>
            </div>

            <div className="cleaning-card">
              <div className="cleaning-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-sanitizer-purifies-the-air-inside.png"
                  alt={t("aggressiveCleaning.cards.purify.imageAlt")}
                />
              </div>
              <h3>{t("aggressiveCleaning.cards.purify.title")}</h3>
              <h4>{t("aggressiveCleaning.cards.purify.subtitle")}</h4>
              <p>{t("aggressiveCleaning.cards.purify.description")}</p>
              <div className="card-number">{t("aggressiveCleaning.cards.purify.number")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Kills & Eliminates Section - Updated to match reference design */}
      <section className="modern-kills-section">
        <div className="container mx-auto">
          <div className="section-header">
            <div className="gradient-bar"></div>
            <h2>{t("killsEliminates.title")}</h2>
          </div>

          <div className="kills-grid">
            <div className="kills-card">
              <div className="kills-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/air-sanitizer-kills-virus.png"
                  alt={t("killsEliminates.cards.virusBacteria.imageAlt")}
                />
              </div>
              <h3>{t("killsEliminates.cards.virusBacteria.title")}</h3>
            </div>

            <div className="kills-card">
              <div className="kills-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/air-sanitizer-eliminates-smoke.png"
                  alt={t("killsEliminates.cards.smokeFumes.imageAlt")}
                />
              </div>
              <h3>
                {t("killsEliminates.cards.smokeFumes.title")}
                <br />
                {t("killsEliminates.cards.smokeFumes.subtitle")}
              </h3>
            </div>

            <div className="kills-card">
              <div className="kills-image">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/air-sanitizer-kills-toxic-gases.png"
                  alt={t("killsEliminates.cards.toxicGases.imageAlt")}
                />
              </div>
              <h3>{t("killsEliminates.cards.toxicGases.title")}</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section - Updated to match reference design */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-heading">
              <h2>{t("contact.heading")}</h2>
              <p>{t("contact.description")}</p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm pageName="Air Sanitizer Page" />

      {/* FAQ Section - Updated with Bootstrap Accordion */}
      <section className="faq_section" style={{ paddingTop: "20px" }}>
        <div className="specification_box monitor_box text-center">
          <h2 className="specification_heading featured_heading">
            <div className="gradient-bar"></div>
            <span style={{ fontSize: "20pt" }}>{t("faq.title")}</span>
          </h2>
          <h3 className="aqi_heading">
            <span style={{ fontSize: "14pt" }}>{t("faq.subtitle")}</span>
          </h3>
        </div>
      </section>

      <section className="accordian_section accordian_section2 sinitizer_faq_section">
        <div className="container mx-auto">
          {/* Bootstrap Accordion for FAQ */}
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >
                  1. What does this Air Sanitizer do?
                </button>
              </h2>
              <div
                id="collapse1"
                className="accordion-collapse collapse show"
                aria-labelledby="faq1"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Air Sanitizer serves to make breathing simpler, purer, and healthier. This helpful, in-home unit
                  releases the cleanest and the freshest air conceivable all through the home. It performs comprehensive
                  air cleaning, including elimination of fetid odours, smoke and other unpleasant atmospheric
                  pollutants.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  2. How does it operate?
                </button>
              </h2>
              <div
                id="collapse2"
                className="accordion-collapse collapse"
                aria-labelledby="faq2"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Air Sanitizer operates through a 4-step process that includes pre-filtration, ionization, regulated
                  oxidation, and photocatalytic disinfection.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  3. How much does it weigh?
                </button>
              </h2>
              <div
                id="collapse3"
                className="accordion-collapse collapse"
                aria-labelledby="faq3"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Although it the task it performs is heavy-duty, Air Sanitizer weighs just 3.86 kg (8.5 lbs). You
                  wouldnt have to create any extra space for this device. Place it anywhere you want!
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  4. Is Air Sanitizer effective against harmful pathogens?
                </button>
              </h2>
              <div
                id="collapse4"
                className="accordion-collapse collapse"
                aria-labelledby="faq4"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, Air Sanitizer effectively wipes out 99.99% of the total microbes present in the air. It disarms
                  more than 90% microbes in the first 6 hours of operation, including all common household pathogens
                  like Escherichia coli, Staphylococcus spp., H1N1 virus, and even Hepatitis virus.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq5">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  5. Does it offer protection against SARS-CoV-2 virus?
                </button>
              </h2>
              <div
                id="collapse5"
                className="accordion-collapse collapse"
                aria-labelledby="faq5"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Absolutely. It offers protection against the SARS-CoV-2 virus which is responsible for the ongoing
                  coronavirus pandemic.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq6">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse6"
                >
                  6. Will Air Sanitizer work in large auditoriums?
                </button>
              </h2>
              <div
                id="collapse6"
                className="accordion-collapse collapse"
                aria-labelledby="faq6"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes. Our Air Sanitizer disinfects a space up to an astonishing range of 3,000 sq. feet. Therefore, it
                  is an apt choice for spacious indoor environments.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq7">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse7"
                  aria-expanded="false"
                  aria-controls="collapse7"
                >
                  7. It generates ozone. Should I be worried?
                </button>
              </h2>
              <div
                id="collapse7"
                className="accordion-collapse collapse"
                aria-labelledby="faq7"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  No. There is nothing to worry about! The PCO cell expels out ozone in controlled amount. In normal
                  mode, the ozone output is less than 0.02 ppm.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq8">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse8"
                  aria-expanded="false"
                  aria-controls="collapse8"
                >
                  8. What is PCO?
                </button>
              </h2>
              <div
                id="collapse8"
                className="accordion-collapse collapse"
                aria-labelledby="faq8"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  This mode of disinfection works on the principle of photocatalytic oxidation (PCO). It wipes out 99%
                  of the biological contaminants, such as bacteria, viruses, fungi, mold &amp; spores in less than 24
                  hours through molecular dissociation.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq9">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse9"
                  aria-expanded="false"
                  aria-controls="collapse9"
                >
                  9. What is High Mode?
                </button>
              </h2>
              <div
                id="collapse9"
                className="accordion-collapse collapse"
                aria-labelledby="faq9"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  In this mode of operation, the purification plate releases activated oxygen that catalyzes the
                  breakdown of odour-producing contaminants for ultra-power performance.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq10">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse10"
                  aria-expanded="false"
                  aria-controls="collapse10"
                >
                  10. What is Away Mode?
                </button>
              </h2>
              <div
                id="collapse10"
                className="accordion-collapse collapse"
                aria-labelledby="faq10"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  In this mode of operation, you can run this device with no occupancy or during sleep hours. The users
                  can set a timer to automatically shut the equipment off. This is to optimize the output when the room
                  or home is unoccupied.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

