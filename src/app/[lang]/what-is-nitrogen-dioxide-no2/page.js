import "./styles.css"
import Image from "next/image"
import { getServerTranslation } from "@/i18n/server"
import MeasureCarousel from "@/Components/Pages/CarbonDioxide/measure-co2-slider"

export default async function NitrogenDioxidePage() {
  const { t } = await getServerTranslation("what-nitrogen")
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
      {/* Header Section */}
      <section className="full-width-section bg-light-green">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="empty-space-40"></div>
              <div className="text-center fade-in-up">
                <h1 className="text-center">
                  <Image
                    className="wp-image-60375 aligncenter"
                    src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-formula.png"
                    alt={t("no2.header.formulaAlt")}
                    width={424}
                    height={70}
                  />
                </h1>
                <h1 className="text-center">
                  <span className="heading_top_white" style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                    {t("no2.header.title")}
                  </span>
                </h1>
                <p className="text-center">
                  <span style={{ fontSize: "16pt" }}>{t("no2.header.description")}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="bg-white">
        <div className="container">
          <div className="fade-in-up">
            <h4 className="text-center">
              <strong>
                <span style={{ fontSize: "24pt" }}>{t("no2.sources.title")}</span>
              </strong>
            </h4>
            <p className="text-center">
              <span style={{ fontSize: "14pt" }}>{t("no2.sources.description")}</span>
            </p>
          </div>

          {/* Natural Causes */}
          <div className="row align-items-center mb-50">
            <div className="col-12">
              <div className="fade-in-up">
                <h3 className="text-center">
                  <span style={{ fontSize: "18pt" }}>{t("no2.sources.natural.title")}</span>
                </h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-Volcanic.png"
                        alt={t("no2.sources.natural.volcanic.alt")}
                        width={302}
                        height={302}
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.sources.natural.volcanic.description")}</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-Fertilizer.png"
                        alt={t("no2.sources.natural.fertilizer.alt")}
                        width={302}
                        height={302}
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.sources.natural.fertilizer.description")}</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-lighting.png"
                        alt={t("no2.sources.natural.lightning.alt")}
                        width={302}
                        height={302}
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.sources.natural.lightning.description")}</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-oceans.png"
                        alt={t("no2.sources.natural.oceans.alt")}
                        width={302}
                        height={302}
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.sources.natural.oceans.description")}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Manmade Causes */}
          <div className="row align-items-center mb-50">
            <div className="col-12">
              <div className="fade-in-up">
                <h3 className="text-center">
                  <span style={{ fontSize: "18pt" }}>{t("no2.sources.manmade.title")}</span>
                </h3>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-car-pollution.png"
                        alt={t("no2.sources.manmade.vehicles.alt")}
                        width={302}
                        height={302}
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.sources.manmade.vehicles.description")}</span>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-power-plant.png"
                        alt={t("no2.sources.manmade.powerPlants.alt")}
                        width={302}
                        height={302}
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.sources.manmade.powerPlants.description")}</span>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-ammonia-emiting-fertilizer.png"
                        alt={t("no2.sources.manmade.ammoniaFertilizers.alt")}
                        width={302}
                        height={302}
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.sources.manmade.ammoniaFertilizers.description")}</span>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-big-machines.png"
                        alt={t("no2.sources.manmade.dieselMachines.alt")}
                        width={302}
                        height={302}
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.sources.manmade.dieselMachines.description")}</span>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="fade-in-up">
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      <Image
                        className="aligncenter wp-image-63805"
                        src="https://www.pranaair.com/wp-content/uploads/2023/01/no2-from-gas-stove.png"
                        alt={t("no2.sources.manmade.stoves.alt")}
                        width={302}
                        height={302}
                      />
                    </strong>
                  </span>
                </h4>
                <p className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.sources.manmade.stoves.description")}</span>
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>

          <div className="empty-space"></div>
          <div className="mb-50">
            <p className="text-center">
              <span style={{ fontSize: "14pt" }}>{t("no2.sources.mainSource")}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Health & Environmental Impacts Section */}
      <section className="full-width-section bg-light-green py-50">
        <div className="container">
          <div className="fade-in-up mb-30">
            <h2 className="text-center">
              <span style={{ fontSize: "24pt" }}>{t("no2.impacts.title")}</span>
            </h2>
            <p className="text-center">
              <span style={{ fontSize: "14pt" }}>{t("no2.impacts.description")}</span>
            </p>
          </div>

          {/* Health Impacts */}
          <div className="row mb-30">
            <div className="col-12">
              <div className="fade-in-up">
                <h3 className="text-center">
                  <span style={{ fontSize: "18pt" }}>{t("no2.impacts.health.title")}</span>
                </h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/lungs-problem-due-to-no2.png"
                  alt={t("no2.impacts.health.effects.lungs.alt")}
                  width={288}
                  height={300}
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.impacts.health.effects.lungs.title")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/breathing-problems-due-to-no2.png"
                  alt={t("no2.impacts.health.effects.breathing.alt")}
                  width={288}
                  height={300}
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.impacts.health.effects.breathing.title")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/asthma-due-to-no2.png"
                  alt={t("no2.impacts.health.effects.asthma.alt")}
                  width={288}
                  height={300}
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.impacts.health.effects.asthma.title")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/low-Immunity-due-to-no2.png"
                  alt={t("no2.impacts.health.effects.immunity.alt")}
                  width={288}
                  height={300}
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.impacts.health.effects.immunity.title")}</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="row mb-70">
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/throat-problem-due-to-no2.png"
                  alt={t("no2.impacts.health.effects.throat.alt")}
                  width={288}
                  height={300}
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.impacts.health.effects.throat.title")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/Coughing-due-to-no2.png"
                  alt={t("no2.impacts.health.effects.coughing.alt")}
                  width={288}
                  height={300}
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.impacts.health.effects.coughing.title")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/heart-problem-due-to-no2.png"
                  alt={t("no2.impacts.health.effects.heart.alt")}
                  width={288}
                  height={300}
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.impacts.health.effects.heart.title")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/premature-death-due-to-no2.png"
                  alt={t("no2.impacts.health.effects.premature.alt")}
                  width={288}
                  height={300}
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.impacts.health.effects.premature.title")}</span>
                </h4>
              </div>
            </div>
          </div>

          {/* Environmental Effects */}
          <div className="row mb-30">
            <div className="col-12">
              <div className="fade-in-up">
                <h3 className="text-center">
                  <span style={{ fontSize: "18pt" }}>{t("no2.impacts.environmental.title")}</span>
                </h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/hazy-air-due-to-no2.png"
                  alt={t("no2.impacts.environmental.effects.smog.alt")}
                  width={288}
                  height={300}
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.impacts.environmental.effects.smog.title")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/polluting-water-due-to-no2.png"
                  alt={t("no2.impacts.environmental.effects.water.alt")}
                  width={288}
                  height={300}
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.impacts.environmental.effects.water.title")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/ground-ozone-due-to-no2.png"
                  alt={t("no2.impacts.environmental.effects.ozone.alt")}
                  width={288}
                  height={300}
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.impacts.environmental.effects.ozone.title")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/increasing-PM-level-due-to-no2.png"
                  alt={t("no2.impacts.environmental.effects.pm.alt")}
                  width={288}
                  height={300}
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.impacts.environmental.effects.pm.title")}</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/acid-rain-caused-by-no2-gas.png"
                  alt={t("no2.impacts.environmental.effects.acidRain.alt")}
                  width={288}
                  height={300}
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.impacts.environmental.effects.acidRain.title")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/plant-growth-due-to-no2.png"
                  alt={t("no2.impacts.environmental.effects.vegetation.alt")}
                  width={288}
                  height={300}
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.impacts.environmental.effects.vegetation.title")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/form-pm-due-to-nox.png"
                  alt={t("no2.impacts.environmental.effects.noxPm.alt")}
                  width={288}
                  height={300}
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.impacts.environmental.effects.noxPm.title")}</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fade-in-up">
                <Image
                  className="size-medium wp-image-64434 aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/stressor-to-plants-due-to-no2.png"
                  alt={t("no2.impacts.environmental.effects.plantStress.alt")}
                  width={288}
                  height={300}
                />
                <h4 className="text-center">
                  <span style={{ fontSize: "14pt" }}>{t("no2.impacts.environmental.effects.plantStress.title")}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corrective Measures Section */}
      <section className="full-width-section bg-white py-40">
        <div className="container">
          <div className="fade-in-up">
            <h2 className="text-center">
              <span style={{ fontSize: "24pt" }}>{t("no2.measures.title")}</span>
            </h2>
            <p className="text-center">
              <span style={{ fontSize: "14pt" }}>{t("no2.measures.description")}</span>
            </p>
          </div>

          <div className="empty-space"></div>

          <div className="row align-items-center">
            <div className="col-12">
              <div className="timeline">
                <div className="timeline-item">
                  <h4>{t("no2.measures.steps.lowEmission")}</h4>
                </div>
                <div className="timeline-item">
                  <h4>{t("no2.measures.steps.alternateFuels")}</h4>
                </div>
                <div className="timeline-item">
                  <h4>{t("no2.measures.steps.avoidCongestion")}</h4>
                </div>
                <div className="timeline-item">
                  <h4>{t("no2.measures.steps.publicTransport")}</h4>
                </div>
                <div className="timeline-item">
                  <h4>{t("no2.measures.steps.closedEnvironment")}</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="empty-space-50"></div>
        </div>
      </section>

      {/* Health Effects Section */}
      <section className="health_effects_section">
        <h2 className="health_heading">{t("no2.healthLevels.title")}</h2>
        <h2 className="health_heading mobile_level_heading">{t("no2.healthLevels.mobileTitle")}</h2>

        <div className="level_range_cntr health_effect_box">
          <div className="lavel_box">
            <span>{t("no2.healthLevels.table.headers.levels")}</span>
            <span className="mg_text">
              <b>{t("no2.healthLevels.table.headers.units")}</b>
            </span>
          </div>
          <div className="health_color">
            <span>{t("no2.healthLevels.table.headers.healthEffects")}</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>{t("no2.healthLevels.table.levels.good.category")}</span>
            <p>
              <span>0-40 </span>
              <span className="mobile_mg_text">{t("no2.healthLevels.table.mobileUnits")}</span>
            </p>
          </div>
          <div className="health_color Good_color">
            <span>{t("no2.healthLevels.table.levels.good.effect")}</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>{t("no2.healthLevels.table.levels.satisfactory.category")}</span>
            <p>
              <span>41-80</span>
              <span className="mobile_mg_text">{t("no2.healthLevels.table.mobileUnits")}</span>
            </p>
          </div>
          <div className="health_color Satisfactory_color">
            <span>{t("no2.healthLevels.table.levels.satisfactory.effect")}</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>{t("no2.healthLevels.table.levels.moderate.category")}</span>
            <p>
              <span>81-180</span>
              <span className="mobile_mg_text">{t("no2.healthLevels.table.mobileUnits")}</span>
            </p>
          </div>
          <div className="health_color Moderately_color">
            <span>{t("no2.healthLevels.table.levels.moderate.effect")}</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>{t("no2.healthLevels.table.levels.poor.category")}</span>
            <p>
              <span>181-280</span>
              <span className="mobile_mg_text">{t("no2.healthLevels.table.mobileUnits")}</span>
            </p>
          </div>
          <div className="health_color poor_color">
            <span>{t("no2.healthLevels.table.levels.poor.effect")}</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>{t("no2.healthLevels.table.levels.veryPoor.category")}</span>
            <p>
              <span>281-400</span>
              <span className="mobile_mg_text">{t("no2.healthLevels.table.mobileUnits")}</span>
            </p>
          </div>
          <div className="health_color verypoor_color">
            <span>{t("no2.healthLevels.table.levels.veryPoor.effect")}</span>
          </div>
        </div>
        <div className="level_range_cntr">
          <div className="lavel_box">
            <span>{t("no2.healthLevels.table.levels.severe.category")}</span>
            <p>
              <span>400+</span>
              <span className="mobile_mg_text">{t("no2.healthLevels.table.mobileUnits")}</span>
            </p>
          </div>
          <div className="health_color Severe_color">
            <span>{t("no2.healthLevels.table.levels.severe.effect")}</span>
          </div>
        </div>

        <i className="bottom_text">{t("no2.healthLevels.table.footnote")}</i>
      </section>

      {/* Air Quality Sensor Section */}
      <section className="full-width-section bg-light-green py-35">
        <div className="container">
          <div className="fade-in-up">
            <h2 className="text-center">
              <span style={{ fontSize: "24pt" }}>{t("no2.sensor.title")}</span>
            </h2>
            <Image
              className="aligncenter wp-image-64498"
              src="https://www.pranaair.com/wp-content/uploads/2023/01/Prana-air-nO2-sensors.jpg"
              alt={t("no2.sensor.imageAlt")}
              width={683}
              height={383}
            />
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-40">
        <div className="container">
          <div className="fade-in-up">
            <h3 className="text-center">
              <span style={{ fontSize: "24pt" }}>{t("no2.products.title")}</span>
            </h3>
          </div>

          <div className="product-carousel-container">
            <MeasureCarousel applications={measureProducts} />
          </div>

          <div className="text-center mt-40">
            <a href="https://www.pranaair.com/air-quality-monitor/ambient-air-monitor/">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/01/prana-air-caaqms-outdoor-monitor-.jpg"
                alt={t("no2.products.ambientMonitorAlt")}
                width={1024}
                height={512}
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
