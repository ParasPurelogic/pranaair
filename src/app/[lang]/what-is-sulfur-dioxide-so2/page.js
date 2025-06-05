import "./styles.css"
import { getServerTranslation } from "@/i18n/server"
import MeasureCarousel from "@/Components/Pages/CarbonDioxide/measure-co2-slider"
import Image from "next/image"

export default async function SulfurDioxidePage() {
  const { t } = await getServerTranslation("what-sulfur-dioxide")
  const measureProducts = [
    {
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-co2-sensor.jpg",
      imageAlt: t("products.co2Sensor.imageAlt"),
      title: t("products.co2Sensor.title"),
      description: t("products.co2Sensor.description"),
      width: 300,
      height: 300
    },
    {
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-pocket-co2-monitor.jpg",
      imageAlt: t("products.pocketCO2.imageAlt"),
      title: t("products.pocketCO2.title"),
      description: t("products.pocketCO2.description"),
      width: 300,
      height: 300
    },
    {
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2021/04/prana-air-squair-air-monitor.jpg",
      imageAlt: t("products.squair.imageAlt"),
      title: t("products.squair.title"),
      description: t("products.squair.description"),
      width: 300,
      height: 300
    },
    {
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2021/04/prana-air-sensible-plus-air-quality-monitor.jpg",
      imageAlt: t("products.sensiblePlus.imageAlt"),
      title: t("products.sensiblePlus.title"),
      description: t("products.sensiblePlus.description"),
      width: 300,
      height: 300
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="full-width-section" style={{ backgroundColor: "#b3e1eb", paddingBottom: "60px" }}>
        <div className="container">
          <div className="empty-space" style={{ height: "40px" }}></div>
          <div className="content-section fade-in-up" style={{ paddingTop: "15px" }}>
            <h1 style={{ textAlign: "center" }}></h1>
            <h1 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                <Image
                  className="wp-image-60375 aligncenter"
                  src="/placeholder.svg?height=70&width=424&query=sulfur dioxide SO2 chemical formula"
                  alt={t("so2.hero.formulaAlt")}
                  width={424}
                  height={70}
                />
              </span>
            </h1>
            <h1 style={{ textAlign: "center" }}>
              <span className="heading_top_white" style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                {t("so2.hero.title")}
              </span>
            </h1>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16pt" }}>{t("so2.hero.description")}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="full-width-section" style={{ backgroundColor: "#fefdfd" }}>
        <div className="container">
          <div className="content-section fade-in-up" style={{ paddingBottom: "35px" }}>
            <h4 style={{ textAlign: "center" }}>
              <strong>
                <span style={{ fontSize: "24pt" }}>{t("so2.sources.title")}</span>
              </strong>
            </h4>
          </div>

          {/* Volcanic Eruption */}
          <div className="row-inner" style={{ display: "flex", alignItems: "center", paddingBottom: "10px" }}>
            <div className="column-inner" style={{ width: "33.33%" }}>
              <div className="content-section fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <Image
                        className="aligncenter wp-image-63805"
                        src="/placeholder.svg?height=302&width=302&query=volcanic eruption emitting sulfur dioxide"
                        alt={t("so2.sources.volcanic.imageAlt")}
                        width={302}
                        height={302}
                      />
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "66.67%" }}>
              <div className="content-section">
                <span style={{ fontSize: "14pt" }}>{t("so2.sources.volcanic.description")}</span>
              </div>
            </div>
          </div>

          {/* Fossil Fuels */}
          <div className="row-inner" style={{ display: "flex", alignItems: "center", paddingBottom: "10px" }}>
            <div className="column-inner" style={{ width: "33.33%" }}>
              <div className="content-section fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <Image
                        className="aligncenter wp-image-63805"
                        src="/placeholder.svg?height=302&width=302&query=fossil fuel burning coal oil diesel"
                        alt={t("so2.sources.fossilFuels.imageAlt")}
                        width={302}
                        height={302}
                      />
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "66.67%" }}>
              <div className="content-section">
                <span style={{ fontSize: "14pt" }}>{t("so2.sources.fossilFuels.description")}</span>
              </div>
            </div>
          </div>

          {/* Extraction of Fuel */}
          <div className="row-inner" style={{ display: "flex", alignItems: "center", paddingBottom: "25px" }}>
            <div className="column-inner" style={{ width: "33.33%" }}>
              <div className="content-section fade-in-up">
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <Image
                        className="aligncenter wp-image-63805"
                        src="/placeholder.svg?height=302&width=302&query=fuel extraction oil refining industrial process"
                        alt={t("so2.sources.extraction.imageAlt")}
                        width={302}
                        height={302}
                      />
                    </strong>
                  </span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "66.67%" }}>
              <div className="content-section">
                <span style={{ fontSize: "14pt" }}>{t("so2.sources.extraction.description")}</span>
              </div>
            </div>
          </div>

          {/* SO2 in the Atmosphere */}
          <div className="row-inner" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
            <div className="column-inner">
              <div className="content-section fade-in-up" style={{ paddingBottom: "20px" }}>
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24pt" }}>
                    <strong>{t("so2.atmosphere.title")}</strong>
                  </span>
                </h4>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("so2.atmosphere.description")}</span>
                </p>
                <Image
                  className="aligncenter wp-image-64719"
                  src="/placeholder.svg?height=609&width=616&query=sulfur dioxide atmospheric reactions acid rain formation"
                  alt={t("so2.atmosphere.imageAlt")}
                  width={616}
                  height={609}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Impacts Section */}
      <section
        className="full-width-section"
        style={{ backgroundColor: "#b3e1eb", paddingTop: "50px", paddingBottom: "40px" }}
      >
        <div className="container">
          <div className="content-section fade-in-up">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>{t("so2.healthImpacts.title")}</span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                <span style={{ fontSize: "14pt" }}>{t("so2.healthImpacts.subtitle")}</span>
              </span>
            </p>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16pt" }}>
                <strong>
                  <span style={{ fontSize: "18pt" }}>{t("so2.healthImpacts.healthImpactTitle")}</span>
                </strong>
              </span>
            </p>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("so2.healthImpacts.description")}</span>
            </p>
          </div>

          <div className="row-inner" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="column-inner" style={{ width: "20%" }}>
              <div className="content-section fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="/placeholder.svg?height=300&width=288&query=eye irritation nose irritation symptoms"
                  alt={t("so2.healthImpacts.symptoms.eyes.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("so2.healthImpacts.symptoms.eyes.title")}</span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "20%" }}>
              <div className="content-section fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="/placeholder.svg?height=300&width=288&query=cough wheezing respiratory symptoms"
                  alt={t("so2.healthImpacts.symptoms.cough.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("so2.healthImpacts.symptoms.cough.title")}</span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "20%" }}>
              <div className="content-section fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="/placeholder.svg?height=300&width=288&query=throat irritation respiratory tract inflammation"
                  alt={t("so2.healthImpacts.symptoms.throat.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("so2.healthImpacts.symptoms.throat.title")}</span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "20%" }}>
              <div className="content-section fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="/placeholder.svg?height=300&width=288&query=child asthma attack breathing difficulty"
                  alt={t("so2.healthImpacts.symptoms.asthma.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("so2.healthImpacts.symptoms.asthma.title")}</span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "20%" }}>
              <div className="content-section fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="/placeholder.svg?height=300&width=288&query=heart disease cardiovascular problems"
                  alt={t("so2.healthImpacts.symptoms.heart.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("so2.healthImpacts.symptoms.heart.title")}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section
        className="full-width-section"
        style={{ backgroundColor: "#b3e1eb", paddingTop: "50px", paddingBottom: "40px" }}
      >
        <div className="container">
          <div className="content-section fade-in-up">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>{t("so2.environmentalImpacts.title")}</span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("so2.environmentalImpacts.description")}</span>
            </p>
          </div>

          {/* First row of environmental impacts */}
          <div className="row-inner" style={{ display: "flex", flexWrap: "wrap", paddingBottom: "50px" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <div className="content-section fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="/placeholder.svg?height=300&width=288&query=monument damage stone corrosion acid rain"
                  alt={t("so2.environmentalImpacts.effects.monuments.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("so2.environmentalImpacts.effects.monuments.title")}</span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "25%" }}>
              <div className="content-section fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="/placeholder.svg?height=300&width=288&query=plant tissue damage leaf damage pollution"
                  alt={t("so2.environmentalImpacts.effects.plantTissues.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("so2.environmentalImpacts.effects.plantTissues.title")}</span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "25%" }}>
              <div className="content-section fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="/placeholder.svg?height=300&width=288&query=acid rain environmental damage pollution"
                  alt={t("so2.environmentalImpacts.effects.acidRain.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("so2.environmentalImpacts.effects.acidRain.title")}</span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "25%" }}>
              <div className="content-section fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="/placeholder.svg?height=300&width=288&query=plant growth vegetation damage pollution effects"
                  alt={t("so2.environmentalImpacts.effects.vegetation.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("so2.environmentalImpacts.effects.vegetation.title")}</span>
                </h4>
              </div>
            </div>
          </div>

          {/* Second row of environmental impacts */}
          <div className="row-inner" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <div className="content-section fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="/placeholder.svg?height=300&width=288&query=leaf damage plant deterioration pollution"
                  alt={t("so2.environmentalImpacts.effects.leaves.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("so2.environmentalImpacts.effects.leaves.title")}</span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "25%" }}>
              <div className="content-section fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="/placeholder.svg?height=300&width=288&query=marine life damage ocean acidification pollution"
                  alt={t("so2.environmentalImpacts.effects.marineLife.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("so2.environmentalImpacts.effects.marineLife.title")}</span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "25%" }}>
              <div className="content-section fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="/placeholder.svg?height=300&width=288&query=soil damage agricultural land pollution effects"
                  alt={t("so2.environmentalImpacts.effects.soil.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("so2.environmentalImpacts.effects.soil.title")}</span>
                </h4>
              </div>
            </div>
            <div className="column-inner" style={{ width: "25%" }}>
              <div className="content-section fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="/placeholder.svg?height=300&width=288&query=animal lung damage wildlife health pollution"
                  alt={t("so2.environmentalImpacts.effects.animals.imageAlt")}
                  width={288}
                  height={300}
                />
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("so2.environmentalImpacts.effects.animals.title")}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Effects Section */}
      <section className="health_effects_section">
        <h2 className="health_heading">{t("so2.healthEffectsTable.title")}</h2>
        <h2 className="health_heading mobile_level_heading">{t("so2.healthEffectsTable.mobileTitle")}</h2>

        <div className="level_range_cntr health_effect_box">
          <div className="lavel_box">
            <span>{t("so2.healthEffectsTable.levels")}</span>
            <span className="mg_text">
              <b>{t("so2.healthEffectsTable.unit")}</b>
            </span>
          </div>
          <div className="health_color">
            <span>{t("so2.healthEffectsTable.healthEffects")}</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>{t("so2.healthEffectsTable.levels.good.label")}</span>
            <p>
              <span>{t("so2.healthEffectsTable.levels.good.range")}</span>
              <span className="mobile_mg_text">{t("so2.healthEffectsTable.mobileUnit")}</span>
            </p>
          </div>
          <div className="health_color Good_color">
            <span>{t("so2.healthEffectsTable.levels.good.effect")}</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>{t("so2.healthEffectsTable.levels.satisfactory.label")}</span>
            <p>
              <span>{t("so2.healthEffectsTable.levels.satisfactory.range")}</span>
              <span className="mobile_mg_text">{t("so2.healthEffectsTable.mobileUnit")}</span>
            </p>
          </div>
          <div className="health_color Satisfactory_color">
            <span>{t("so2.healthEffectsTable.levels.satisfactory.effect")}</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>{t("so2.healthEffectsTable.levels.moderate.label")}</span>
            <p>
              <span>{t("so2.healthEffectsTable.levels.moderate.range")}</span>
              <span className="mobile_mg_text">{t("so2.healthEffectsTable.mobileUnit")}</span>
            </p>
          </div>
          <div className="health_color Moderately_color">
            <span>{t("so2.healthEffectsTable.levels.moderate.effect")}</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>{t("so2.healthEffectsTable.levels.poor.label")}</span>
            <p>
              <span>{t("so2.healthEffectsTable.levels.poor.range")}</span>
              <span className="mobile_mg_text">{t("so2.healthEffectsTable.mobileUnit")}</span>
            </p>
          </div>
          <div className="health_color poor_color">
            <span>{t("so2.healthEffectsTable.levels.poor.effect")}</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>{t("so2.healthEffectsTable.levels.veryPoor.label")}</span>
            <p>
              <span>{t("so2.healthEffectsTable.levels.veryPoor.range")}</span>
              <span className="mobile_mg_text">{t("so2.healthEffectsTable.mobileUnit")}</span>
            </p>
          </div>
          <div className="health_color verypoor_color">
            <span>{t("so2.healthEffectsTable.levels.veryPoor.effect")}</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>{t("so2.healthEffectsTable.levels.severe.label")}</span>
            <p>
              <span>{t("so2.healthEffectsTable.levels.severe.range")}</span>
              <span className="mobile_mg_text">{t("so2.healthEffectsTable.mobileUnit")}</span>
            </p>
          </div>
          <div className="health_color Severe_color">
            <span>{t("so2.healthEffectsTable.levels.severe.effect")}</span>
          </div>
        </div>

        <i className="bottom_text">{t("so2.healthEffectsTable.note")}</i>
      </section>

      {/* Corrective Measures Section */}
      <section className="full-width-section" style={{ backgroundColor: "#fefdfd", paddingBottom: "40px" }}>
        <div className="container">
          <div className="content-section fade-in-up">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>{t("so2.correctiveMeasures.title")}</span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("so2.correctiveMeasures.description")}</span>
            </p>
          </div>

          <div className="empty-space"></div>

          {/* Corrective Measures */}
          <div className="row-inner" style={{ display: "flex", alignItems: "center" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <Image
                src="/placeholder.svg?height=150&width=150&query=sustainable energy renewable sources solar wind"
                alt={t("so2.correctiveMeasures.measures.sustainableEnergy.imageAlt")}
                className="aligncenter fade-in-up"
                width={150}
                height={150}
              />
            </div>
            <div className="column-inner" style={{ width: "75%" }}>
              <div className="content-section fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    {t("so2.correctiveMeasures.measures.sustainableEnergy.description")}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row-inner" style={{ display: "flex", alignItems: "center" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <Image
                src="/placeholder.svg?height=142&width=181&query=alternative fuels hydrogen electric vehicles"
                alt={t("so2.correctiveMeasures.measures.alternativeFuels.imageAlt")}
                className="aligncenter fade-in-up"
                width={181}
                height={142}
              />
            </div>
            <div className="column-inner" style={{ width: "75%" }}>
              <div className="content-section fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    {t("so2.correctiveMeasures.measures.alternativeFuels.description")}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row-inner" style={{ display: "flex", alignItems: "center" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <Image
                src="/placeholder.svg?height=142&width=181&query=residential housing away from industrial areas"
                alt={t("so2.correctiveMeasures.measures.accommodations.imageAlt")}
                className="aligncenter fade-in-up"
                width={181}
                height={142}
              />
            </div>
            <div className="column-inner" style={{ width: "75%" }}>
              <div className="content-section fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    {t("so2.correctiveMeasures.measures.accommodations.description")}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row-inner" style={{ display: "flex", alignItems: "center" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <Image
                src="/placeholder.svg?height=142&width=181&query=renewable energy sources solar wind hydropower"
                alt={t("so2.correctiveMeasures.measures.renewableEnergy.imageAlt")}
                className="aligncenter fade-in-up"
                width={181}
                height={142}
              />
            </div>
            <div className="column-inner" style={{ width: "75%" }}>
              <div className="content-section fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    {t("so2.correctiveMeasures.measures.renewableEnergy.description")}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row-inner" style={{ display: "flex", alignItems: "center" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <Image
                src="/placeholder.svg?height=150&width=150&query=zero sulfur fuel clean gasoline diesel"
                alt={t("so2.correctiveMeasures.measures.zeroSulfurFuels.imageAlt")}
                className="aligncenter fade-in-up"
                width={150}
                height={150}
              />
            </div>
            <div className="column-inner" style={{ width: "75%" }}>
              <div className="content-section fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    {t("so2.correctiveMeasures.measures.zeroSulfurFuels.description")}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row-inner" style={{ display: "flex", alignItems: "center" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <Image
                src="/placeholder.svg?height=150&width=150&query=avoid exercise during pollution high air quality"
                alt={t("so2.correctiveMeasures.measures.avoidExercise.imageAlt")}
                className="aligncenter fade-in-up"
                width={150}
                height={150}
              />
            </div>
            <div className="column-inner" style={{ width: "75%" }}>
              <div className="content-section fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>
                    {t("so2.correctiveMeasures.measures.avoidExercise.description")}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row-inner" style={{ display: "flex", alignItems: "center" }}>
            <div className="column-inner" style={{ width: "25%" }}>
              <Image
                src="/placeholder.svg?height=150&width=150&query=power plant scrubbers pollution control equipment"
                alt={t("so2.correctiveMeasures.measures.scrubbers.imageAlt")}
                className="aligncenter fade-in-up"
                width={150}
                height={150}
              />
            </div>
            <div className="column-inner" style={{ width: "75%" }}>
              <div className="content-section fade-in-up">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt" }}>{t("so2.correctiveMeasures.measures.scrubbers.description")}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="empty-space" style={{ height: "50px" }}></div>
        </div>
      </section>

      {/* Air Quality Sensor Section */}
      <section
        className="full-width-section"
        style={{ backgroundColor: "#b3e1eb", paddingTop: "35px", paddingBottom: "35px" }}
      >
        <div className="container">
          <div className="content-section fade-in-up">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>{t("so2.sensor.title")}</span>
            </h2>
            <Image
              className="aligncenter wp-image-64498"
              src="/placeholder.svg?height=400&width=683&query=air quality sensor SO2 sulfur dioxide monitoring device"
              alt={t("so2.sensor.imageAlt")}
              width={683}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section>
        <div className="container">
          <div className="content-section fade-in-up">
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>{t("so2.products.title")}</span>
            </h3>
          </div>

          <MeasureCarousel applications={measureProducts} />

          <div style={{ textAlign: "center" }}>
            <a
              href="https://www.pranaair.com/air-quality-monitor/ambient-air-monitor/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/placeholder.svg?height=400&width=800&query=air quality monitors outdoor ambient monitoring equipment"
                alt={t("so2.products.learnMoreAlt")}
                className="fade-in-up"
                style={{ maxWidth: "100%" }}
                width={800}
                height={400}
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

