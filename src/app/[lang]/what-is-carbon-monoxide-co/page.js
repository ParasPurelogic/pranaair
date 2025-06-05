import "./styles.css"
import { getServerTranslation } from "@/i18n/server"
import Image from "next/image"

export default async function CarbonMonoxidePage() {
  const { t } = await getServerTranslation("what-carbon-monoxide-co")
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
                <h1 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                    <Image
                      className="wp-image-60375 aligncenter"
                      src="https://www.pranaair.com/wp-content/uploads/2022/12/carbon-monoxide-co.png"
                      alt={t("hero.iconAlt")}
                      width={224}
                      height={194}
                    />
                  </span>
                </h1>
                <h1 className="whitetext" style={{ textAlign: "center" }}>
                  <span className="heading_top_white" style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                    {t("hero.title")}
                  </span>
                </h1>
                <p className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "16pt" }}>{t("hero.description")}</span>
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
                <span style={{ fontSize: "24pt" }}>{t("sources.title")}</span>
              </strong>
            </h4>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16pt" }}>{t("sources.description")}</span>
            </p>
            <h4 style={{ textAlign: "center" }}>
              <strong>
                <span style={{ fontSize: "18pt" }}>{t("sources.naturalTitle")}</span>
              </strong>
            </h4>
          </div>

          <div className="row" style={{ paddingBottom: "25px" }}>
            <div className="col-md-4">
              <div className="fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/Volcanic.png"
                        alt={t("sources.natural.volcanic.imageAlt")}
                        width={456}
                        height={295}
                      />
                      {t("sources.natural.volcanic.title")}
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
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/forest-fire.png"
                        alt={t("sources.natural.forestFires.imageAlt")}
                        width={456}
                        height={295}
                      />
                      {t("sources.natural.forestFires.title")}
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
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/co-gas-from-coal-mines.png"
                        alt={t("sources.natural.coalMines.imageAlt")}
                        width={247}
                        height={247}
                      />
                      {t("sources.natural.coalMines.title")}
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
                    <span style={{ fontSize: "18pt" }}>{t("sources.manmadeTitle")}</span>
                  </strong>
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <Image
                        className="aligncenter wp-image-64349 size-medium"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/car-pollution-300x199.png"
                        alt={t("sources.manmade.vehicles.imageAlt")}
                        width={300}
                        height={199}
                      />
                      {t("sources.manmade.vehicles.title")}
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
                      <Image
                        className="aligncenter wp-image-63805 new-img"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/Industrial.png"
                        alt={t("sources.manmade.industries.imageAlt")}
                        width={456}
                        height={295}
                      />
                      {t("sources.manmade.industries.title")}
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
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/metal-manufacturing.png"
                        alt={t("sources.manmade.metalManufacturing.imageAlt")}
                        width={456}
                        height={295}
                      />
                      {t("sources.manmade.metalManufacturing.title")}
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
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/Electricity-supply.png"
                        alt={t("sources.manmade.electricitySupply.imageAlt")}
                        width={456}
                        height={295}
                      />
                      {t("sources.manmade.electricitySupply.title")}
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
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/smoking.png"
                        alt={t("sources.manmade.smoking.imageAlt")}
                        width={456}
                        height={295}
                      />
                      {t("sources.manmade.smoking.title")}
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
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/burning.png"
                        alt={t("sources.manmade.burningWaste.imageAlt")}
                        width={456}
                        height={295}
                      />
                      {t("sources.manmade.burningWaste.title")}
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
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/co-frompower-plant.png"
                        alt={t("sources.manmade.powerPlants.imageAlt")}
                        width={456}
                        height={295}
                      />
                      {t("sources.manmade.powerPlants.title")}
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
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2022/12/co-from-gas-extraction-from-sea.png"
                        alt={t("sources.manmade.gasExtraction.imageAlt")}
                        width={456}
                        height={295}
                      />
                      {t("sources.manmade.gasExtraction.title")}
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
              <span style={{ fontSize: "24pt" }}>{t("healthImpacts.title")}</span>
            </h2>
            <p className="whitetext" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("healthImpacts.description1")}</span>
            </p>
            <h4 className="whitetext" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16pt" }}>
                <strong>{t("healthImpacts.subtitle")}</strong>
              </span>
            </h4>
            <p className="whitetext" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("healthImpacts.description2")}</span>
            </p>
            <p className="whitetext" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("healthImpacts.description3")}</span>
            </p>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/flu-288x300.png"
                  alt={t("healthImpacts.effects.flu.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("healthImpacts.effects.flu.title")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/Fatigue.png"
                  alt={t("healthImpacts.effects.fatigue.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("healthImpacts.effects.fatigue.title")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/Headache.png"
                  alt={t("healthImpacts.effects.headache.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("healthImpacts.effects.headache.title")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/Chest-pain.png"
                  alt={t("healthImpacts.effects.chestPain.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("healthImpacts.effects.chestPain.title")}</span>
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
                  border={1}
                  cellSpacing={0}
                  cellPadding={0}
                >
                  <tbody>
                    <tr style={{ height: "36px" }}>
                      <td style={{ textAlign: "center", height: "36px", width: "164.87%" }} colSpan={2} rowSpan={1}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>
                          <strong>{t("standards.carbonMonoxideTitle")}</strong>
                        </span>
                      </td>
                    </tr>
                    <tr style={{ height: "36px" }}>
                      <td style={{ textAlign: "center", width: "49.7872%", height: "34px" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>{t("standards.govtBody")}</span>
                      </td>
                      <td style={{ textAlign: "center", width: "115.083%", height: "34px" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>{t("standards.breakpoints")}</span>
                      </td>
                    </tr>
                    <tr style={{ height: "36px" }}>
                      <td style={{ textAlign: "center", height: "36px", width: "49.7872%" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>{t("standards.india.name")}</span>
                      </td>
                      <td style={{ textAlign: "center", height: "36px", width: "115.083%" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>{t("standards.india.value")}</span>
                      </td>
                    </tr>
                    <tr style={{ height: "36px" }}>
                      <td style={{ textAlign: "center", height: "36px", width: "49.7872%" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>{t("standards.epa.name")}</span>
                      </td>
                      <td style={{ textAlign: "center", height: "36px", width: "115.083%" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>{t("standards.epa.value")}</span>
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
                  border={1}
                  cellSpacing={0}
                  cellPadding={0}
                >
                  <tbody>
                    <tr style={{ height: "36px" }}>
                      <td style={{ textAlign: "center", height: "36px", width: "166.221%" }} colSpan={2} rowSpan={1}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>
                          <strong>{t("standards.standardsTitle")}</strong>
                        </span>
                      </td>
                    </tr>
                    <tr style={{ height: "36px" }}>
                      <td style={{ textAlign: "center", width: "49.7872%", height: "34px" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>{t("standards.california.name")}</span>
                      </td>
                      <td style={{ textAlign: "center", width: "116.434%", height: "34px" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>{t("standards.california.value")}</span>
                      </td>
                    </tr>
                    <tr style={{ height: "36px" }}>
                      <td style={{ textAlign: "center", height: "36px", width: "49.7872%" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>{t("standards.aaqs.name")}</span>
                      </td>
                      <td style={{ textAlign: "center", height: "36px", width: "116.434%" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>{t("standards.aaqs.value")}</span>
                      </td>
                    </tr>
                    <tr style={{ height: "36px" }}>
                      <td style={{ textAlign: "center", height: "36px", width: "49.7872%" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>{t("standards.who.name")}</span>
                      </td>
                      <td style={{ textAlign: "center", height: "36px", width: "116.434%" }}>
                        <span style={{ fontSize: "14pt", color: "#000000" }}>{t("standards.who.value")}</span>
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
                <h2 className="health_heading">{t("healthEffectsTable.title")}</h2>
                <h2 className="health_heading mobile_level_heading">{t("healthEffectsTable.subtitle")}</h2>

                <div className="level_range_cntr health_effect_box">
                  <div className="lavel_box">
                    <span>{t("healthEffectsTable.levelsHeader")}</span>
                    <span className="mg_text">
                      <b>
                        (mg/m<sup>3</sup>)
                      </b>
                    </span>
                  </div>
                  <div className="health_color">
                    <span>{t("healthEffectsTable.healthEffectsHeader")}</span>
                  </div>
                </div>
                <div className="level_range_cntr">
                  <div className="lavel_box">
                    <span>{t("healthEffectsTable.levels.good.level")}</span>
                    <p>
                      <span>{t("healthEffectsTable.levels.good.range")}</span>
                      <span className="mobile_mg_text">
                        (mg/m<sup>3</sup>)
                      </span>
                    </p>
                  </div>
                  <div className="health_color Good_color">
                    <span>{t("healthEffectsTable.levels.good.effect")}</span>
                  </div>
                </div>
                <div className="level_range_cntr">
                  <div className="lavel_box">
                    <span>{t("healthEffectsTable.levels.satisfactory.level")}</span>
                    <p>
                      <span>{t("healthEffectsTable.levels.satisfactory.range")}</span>
                      <span className="mobile_mg_text">
                        (mg/m<sup>3</sup>)
                      </span>
                    </p>
                  </div>
                  <div className="health_color Satisfactory_color">
                    <span>{t("healthEffectsTable.levels.satisfactory.effect")}</span>
                  </div>
                </div>
                <div className="level_range_cntr">
                  <div className="lavel_box">
                    <span>{t("healthEffectsTable.levels.moderate.level")}</span>
                    <p>
                      <span>{t("healthEffectsTable.levels.moderate.range")}</span>
                      <span className="mobile_mg_text">
                        (mg/m<sup>3</sup>)
                      </span>
                    </p>
                  </div>
                  <div className="health_color Moderately_color">
                    <span>{t("healthEffectsTable.levels.moderate.effect")}</span>
                  </div>
                </div>
                <div className="level_range_cntr">
                  <div className="lavel_box">
                    <span>{t("healthEffectsTable.levels.poor.level")}</span>
                    <p>
                      <span>{t("healthEffectsTable.levels.poor.range")}</span>
                      <span className="mobile_mg_text">
                        (mg/m<sup>3</sup>)
                      </span>
                    </p>
                  </div>
                  <div className="health_color poor_color">
                    <span>{t("healthEffectsTable.levels.poor.effect")}</span>
                  </div>
                </div>
                <div className="level_range_cntr">
                  <div className="lavel_box">
                    <span>{t("healthEffectsTable.levels.veryPoor.level")}</span>
                    <p>
                      <span>{t("healthEffectsTable.levels.veryPoor.range")}</span>
                      <span className="mobile_mg_text">
                        (mg/m<sup>3</sup>)
                      </span>
                    </p>
                  </div>
                  <div className="health_color verypoor_color">
                    <span>{t("healthEffectsTable.levels.veryPoor.effect")}</span>
                  </div>
                </div>
                <div className="level_range_cntr">
                  <div className="lavel_box">
                    <span>{t("healthEffectsTable.levels.severe.level")}</span>
                    <p>
                      <span>{t("healthEffectsTable.levels.severe.range")}</span>
                      <span className="mobile_mg_text">
                        (mg/m<sup>3</sup>)
                      </span>
                    </p>
                  </div>
                  <div className="health_color Severe_color">
                    <span>{t("healthEffectsTable.levels.severe.effect")}</span>
                  </div>
                </div>

                <i className="bottom_text">{t("healthEffectsTable.disclaimer")}</i>
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
              <span style={{ fontSize: "24pt" }}>{t("correctiveMeasures.title")}</span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("correctiveMeasures.description")}</span>
            </p>
            <h4 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                <strong>
                  <span style={{ fontSize: "18pt" }}>{t("correctiveMeasures.subtitle")}</span>
                </strong>
              </span>
            </h4>
          </div>

          <div className="row align-items-center">
            <div className="col-md-3">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/Ventilation-180x180.png"
                alt={t("correctiveMeasures.measures.ventilation.imageAlt")}
                width={180}
                height={180}
                className="img-fluid fade-in-up"
              />
            </div>
            <div className="col-md-9">
              <div className="fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>{t("correctiveMeasures.measures.ventilation.title")}</strong>{" "}
                    {t("correctiveMeasures.measures.ventilation.description")}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-3">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/Public-transport-181x142.png"
                alt={t("correctiveMeasures.measures.publicTransport.imageAlt")}
                width={181}
                height={142}
                className="img-fluid fade-in-up"
              />
            </div>
            <div className="col-md-9">
              <div className="fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>{t("correctiveMeasures.measures.publicTransport.title")}</strong>{" "}
                    {t("correctiveMeasures.measures.publicTransport.description")}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-3">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/alternate-fuel-181x142.png"
                alt={t("correctiveMeasures.measures.alternateFuels.imageAlt")}
                width={181}
                height={142}
                className="img-fluid fade-in-up"
              />
            </div>
            <div className="col-md-9">
              <div className="fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>{t("correctiveMeasures.measures.alternateFuels.title")}</strong>{" "}
                    {t("correctiveMeasures.measures.alternateFuels.description")}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-3">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/non-fule-alternative-181x142.png"
                alt={t("correctiveMeasures.measures.nonFuelAlternatives.imageAlt")}
                width={181}
                height={142}
                className="img-fluid fade-in-up"
              />
            </div>
            <div className="col-md-9">
              <div className="fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>{t("correctiveMeasures.measures.nonFuelAlternatives.title")}</strong>{" "}
                    {t("correctiveMeasures.measures.nonFuelAlternatives.description")}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-3">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/Recycle-180x180.png"
                alt={t("correctiveMeasures.measures.recycling.imageAlt")}
                width={180}
                height={180}
                className="img-fluid fade-in-up"
              />
            </div>
            <div className="col-md-9">
              <div className="fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>{t("correctiveMeasures.measures.recycling.title")}</strong>{" "}
                    {t("correctiveMeasures.measures.recycling.description")}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div style={{ height: "50px" }}></div>

          <div className="row">
            <div className="col-md-12">
              <h2 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>{t("monitoring.title")}</span>
              </h2>
              <Image
                className="aligncenter wp-image-64498"
                src="https://www.pranaair.com/wp-content/uploads/2022/12/air-quality-monitor-to-measure-co-level-1024x1024.png"
                alt={t("monitoring.imageAlt")}
                width={683}
                height={683}
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
                  <span style={{ fontSize: "24pt" }}>{t("products.title")}</span>
                </h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/11/prana-air-carbon-monoxide-co-sensor-with-board.jpg"
                  alt={t("products.modelA.imageAlt")}
                  width={400}
                  height={300}
                  className="img-fluid"
                />
                <h4 style={{ textAlign: "center" }}>{t("products.modelA.title")}</h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/Sensible-monitor-prana-air.png"
                  alt={t("products.modelB.imageAlt")}
                  width={400}
                  height={300}
                  className="img-fluid"
                />
                <h4 style={{ textAlign: "center" }}>{t("products.modelB.title")}</h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-device.png"
                  alt={t("products.modelC.imageAlt")}
                  width={400}
                  height={300}
                  className="img-fluid"
                />
                <h4 style={{ textAlign: "center" }}>{t("products.modelC.title")}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

