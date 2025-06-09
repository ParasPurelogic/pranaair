import "./styles.css"
import Image from "next/image"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain } from "@/config"

export default async function AmmoniaPage() {
  const { t } = await getServerTranslation("what-ammonia")

  return (
    <main>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          paddingTop: "130px",
          paddingBottom: "130px",
          backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2023/02/ammonia-nh3-air-pollutant.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="hero-content" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
            <h2>
              <span className="whitetext" style={{ fontSize: "24pt" }}>
                <Image
                  className="alignnone wp-image-67627"
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/nh3-ammonia-icon-290x300.png"
                  alt={t("ammonia.hero.iconAlt")}
                  width={82}
                  height={85}
                />{" "}
                {t("ammonia.hero.title")}
              </span>
            </h2>
            <p className="whitetext" style={{ textAlign: "left", wordWrap: "break-word", width: "auto" }}>
              <span style={{ fontSize: "16pt" }}>{t("ammonia.hero.description")}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Ammonia in Human Body Section */}
      <section className="ammonia-human-body" style={{ paddingTop: "50px", backgroundColor: "#fefdfd" }}>
        <div className="container">
          <div className="content-section" style={{ paddingBottom: "35px" }}>
            <h4 className="air_heading" style={{ textAlign: "center" }}>
              <strong>
                <span style={{ fontSize: "24pt" }}>
                  <span style={{ color: "#2a2a2c" }}>
                    {t("ammonia.humanBody.titlePart1")}{" "}
                    <span style={{ color: "#2fbcbc" }}>{t("ammonia.humanBody.titlePart2")}</span>
                  </span>
                </span>
              </strong>
            </h4>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("ammonia.humanBody.description")}</span>
            </p>
            <p style={{ textAlign: "center" }}>
              <Image
                className="aligncenter wp-image-67737"
                src="https://www.pranaair.com/wp-content/uploads/2023/02/ammonia-nh3-in-human-body-891x1024.png"
                alt={t("ammonia.humanBody.imageAlt")}
                width={733}
                height={842}
              />
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        className="quote-section"
        style={{
          marginTop: "90px",
          marginBottom: "50px",
          paddingTop: "30px",
          paddingRight: "20px",
          paddingBottom: "30px",
          paddingLeft: "5px",
          background:
            "#fefdfd url(https://www.pranaair.com/wp-content/uploads/2023/02/background.png) center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "15pt" }}>
              {t("ammonia.quote.text")} - <em>{t("ammonia.quote.source")}</em>
            </span>
          </p>
        </div>
      </section>

      {/* Emission Sources Section */}
      <section
        className="emission-sources"
        style={{
          paddingTop: "50px",
          paddingBottom: "80px",
          backgroundColor: "#d8fff8",
        }}
      >
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>
              {t("ammonia.emissionSources.titlePart1")}{" "}
              <span style={{ color: "#2fbcbc" }}>{t("ammonia.emissionSources.titlePart2")}</span>
            </span>
          </h2>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>{t("ammonia.emissionSources.description")}</span>
          </p>

          <div className="sources-grid" style={{ paddingBottom: "35px" }}>
            <div className="sources-row">
              <div className="source-item">
                <h3 style={{ textAlign: "center" }}>
                  <Image
                    className="size-medium wp-image-67209 aligncenter"
                    src="https://www.pranaair.com/wp-content/uploads/2023/02/vehicular-emissions.png"
                    alt={t("ammonia.emissionSources.vehicle.imageAlt")}
                    width={300}
                    height={300}
                  />
                  <strong>{t("ammonia.emissionSources.vehicle.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%" }}>
                  <span style={{ fontSize: "14pt", color: "#646478" }}>
                    {t("ammonia.emissionSources.vehicle.description")}
                  </span>
                </p>
              </div>
              <div className="source-item">
                <h3 style={{ textAlign: "center" }}>
                  <Image
                    className="size-medium wp-image-67209 aligncenter"
                    src="https://www.pranaair.com/wp-content/uploads/2023/02/agriculture-activities.png"
                    alt={t("ammonia.emissionSources.agriculture.imageAlt")}
                    width={300}
                    height={300}
                  />
                  <strong>{t("ammonia.emissionSources.agriculture.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%" }}>
                  <span style={{ fontSize: "14pt", color: "#646478" }}>
                    {t("ammonia.emissionSources.agriculture.description")}
                  </span>
                </p>
              </div>
              <div className="source-item">
                <h3 style={{ textAlign: "center" }}>
                  <Image
                    className="size-medium wp-image-67209 aligncenter"
                    src="https://www.pranaair.com/wp-content/uploads/2023/02/industries.png"
                    alt={t("ammonia.emissionSources.industries.imageAlt")}
                    width={300}
                    height={300}
                  />
                  <strong>{t("ammonia.emissionSources.industries.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%" }}>
                  <span style={{ fontSize: "14pt", color: "#646478" }}>
                    {t("ammonia.emissionSources.industries.description")}
                  </span>
                </p>
              </div>
            </div>

            <div className="sources-row" style={{ paddingTop: "30px", paddingBottom: "35px" }}>
              <div className="source-item">
                <h3 style={{ textAlign: "center" }}>
                  <Image
                    className="size-medium wp-image-67209 aligncenter"
                    src="https://www.pranaair.com/wp-content/uploads/2023/02/household-emissions.png"
                    alt={t("ammonia.emissionSources.household.imageAlt")}
                    width={300}
                    height={300}
                  />
                  <strong>{t("ammonia.emissionSources.household.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%" }}>
                  <span style={{ fontSize: "14pt", color: "#646478" }}>
                    {t("ammonia.emissionSources.household.description")}
                  </span>
                </p>
              </div>
              <div className="source-item">
                <h3 style={{ textAlign: "center" }}>
                  <Image
                    className="size-medium wp-image-67209 aligncenter"
                    src="https://www.pranaair.com/wp-content/uploads/2023/02/sewage-plant.png"
                    alt={t("ammonia.emissionSources.sewage.imageAlt")}
                    width={300}
                    height={300}
                  />
                  <strong>{t("ammonia.emissionSources.sewage.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%" }}>
                  <span style={{ fontSize: "14pt", color: "#646478" }}>
                    {t("ammonia.emissionSources.sewage.description")}
                  </span>
                </p>
              </div>
              <div className="source-item">
                <h3 style={{ textAlign: "center" }}>
                  <Image
                    className="size-medium wp-image-67209 aligncenter"
                    src="https://www.pranaair.com/wp-content/uploads/2023/02/building-material.png"
                    alt={t("ammonia.emissionSources.building.imageAlt")}
                    width={300}
                    height={300}
                  />
                  <strong>{t("ammonia.emissionSources.building.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%" }}>
                  <span style={{ fontSize: "14pt", color: "#646478" }}>
                    {t("ammonia.emissionSources.building.description")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ammonia in Environment Section */}
      <section className="ammonia-environment">
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>
              <span style={{ color: "#2fbcbc" }}>{t("ammonia.environment.titlePart1")}</span>{" "}
              {t("ammonia.environment.titlePart2")}
            </span>
          </h2>

          <div className="environment-row" style={{ paddingBottom: "40px" }}>
            <div className="environment-text">
              <span style={{ fontSize: "15pt" }}>
                <span style={{ color: "#2fbcbc", fontSize: "22pt" }}>A</span>
                {t("ammonia.environment.atmospheric")}
              </span>
            </div>
            <div className="environment-image">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/02/ammonia-nh3-in-human-body-891x1024.png"
                alt={t("ammonia.environment.atmosphericImageAlt")}
                width={891}
                height={1024}
              />
            </div>
          </div>

          <div className="environment-row" style={{ paddingBottom: "50px" }}>
            <div className="environment-text">
              <span style={{ fontSize: "15pt" }}>
                <span style={{ color: "#2fbcbc", fontSize: "22pt" }}>A</span>
                {t("ammonia.environment.waterways")}
              </span>
            </div>
            <div className="environment-image">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/02/ammonia-nh3-in-human-body-891x1024.png"
                alt={t("ammonia.environment.waterwaysImageAlt")}
                width={891}
                height={1024}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Health Effects Section */}
      <section className="health-effects" style={{ paddingTop: "90px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>
              {t("ammonia.healthEffects.titlePart1")}{" "}
              <span style={{ color: "#2fbcbc" }}>{t("ammonia.healthEffects.titlePart2")}</span>
            </span>
          </h2>

          <section className="health_effects_section">
            <h2 className="health_heading mobile_level_heading">{t("ammonia.healthEffects.subtitle")}</h2>

            <div className="level_range_cntr health_effect_box">
              <div className="lavel_box">
                <span>{t("ammonia.healthEffects.levels.title")}</span>
                <span className="mg_text">
                  <b>
                    (µg/m<sup>3</sup>)
                  </b>
                </span>
              </div>
              <div className="health_color">
                <span>{t("ammonia.healthEffects.levels.healthEffects")}</span>
              </div>
            </div>

            <div className="level_range_cntr">
              <div className="lavel_box">
                <span>{t("ammonia.healthEffects.levels.good.title")}</span>
                <p>
                  <span>{t("ammonia.healthEffects.levels.good.range")} </span>
                  <span className="mobile_mg_text">
                    (mg/m<sup>3</sup>)
                  </span>
                </p>
              </div>
              <div className="health_color Good_color">
                <span>{t("ammonia.healthEffects.levels.good.description")}</span>
              </div>
            </div>

            <div className="level_range_cntr">
              <div className="lavel_box">
                <span>{t("ammonia.healthEffects.levels.satisfactory.title")}</span>
                <p>
                  <span>{t("ammonia.healthEffects.levels.satisfactory.range")}</span>
                  <span className="mobile_mg_text">
                    (mg/m<sup>3</sup>)
                  </span>
                </p>
              </div>
              <div className="health_color Satisfactory_color">
                <span>{t("ammonia.healthEffects.levels.satisfactory.description")}</span>
              </div>
            </div>

            <div className="level_range_cntr">
              <div className="lavel_box">
                <span>{t("ammonia.healthEffects.levels.moderate.title")}</span>
                <p>
                  <span>{t("ammonia.healthEffects.levels.moderate.range")}</span>
                  <span className="mobile_mg_text">
                    (mg/m<sup>3</sup>)
                  </span>
                </p>
              </div>
              <div className="health_color Moderately_color">
                <span>{t("ammonia.healthEffects.levels.moderate.description")}</span>
              </div>
            </div>

            <div className="level_range_cntr">
              <div className="lavel_box">
                <span>{t("ammonia.healthEffects.levels.poor.title")}</span>
                <p>
                  <span>{t("ammonia.healthEffects.levels.poor.range")}</span>
                  <span className="mobile_mg_text">
                    (mg/m<sup>3</sup>)
                  </span>
                </p>
              </div>
              <div className="health_color poor_color">
                <span>{t("ammonia.healthEffects.levels.poor.description")}</span>
              </div>
            </div>

            <div className="level_range_cntr">
              <div className="lavel_box">
                <span>{t("ammonia.healthEffects.levels.veryPoor.title")}</span>
                <p>
                  <span>{t("ammonia.healthEffects.levels.veryPoor.range")}</span>
                  <span className="mobile_mg_text">
                    (mg/m<sup>3</sup>)
                  </span>
                </p>
              </div>
              <div className="health_color verypoor_color">
                <span>{t("ammonia.healthEffects.levels.veryPoor.description")}</span>
              </div>
            </div>

            <div className="level_range_cntr">
              <div className="lavel_box">
                <span>{t("ammonia.healthEffects.levels.severe.title")}</span>
                <p>
                  <span>{t("ammonia.healthEffects.levels.severe.range")}</span>
                  <span className="mobile_mg_text">
                    (mg/m<sup>3</sup>)
                  </span>
                </p>
              </div>
              <div className="health_color Severe_color">
                <span>{t("ammonia.healthEffects.levels.severe.description")}</span>
              </div>
            </div>

            <i className="bottom_text">{t("ammonia.healthEffects.disclaimer")}</i>
          </section>
        </div>
      </section>

      {/* Health Hazards Section */}
      <section className="health-hazards" style={{ paddingTop: "40px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>
              {t("ammonia.healthHazards.titlePart1")}{" "}
              <span style={{ color: "#2fbcbc" }}>{t("ammonia.healthHazards.titlePart2")}</span>
            </span>
          </h2>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>{t("ammonia.healthHazards.description1")}</span>
            <span style={{ fontSize: "14pt" }}>{t("ammonia.healthHazards.description2")}</span>
          </p>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>{t("ammonia.healthHazards.subtitle")}</span>
          </p>

          <div className="hazards-grid" style={{ marginRight: "10px", marginLeft: "10px", paddingBottom: "35px" }}>
            <div className="hazard-item">
              <Image
                className="alignnone size-medium wp-image-67795 aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/02/skin-irritation-296x300.jpg"
                alt={t("ammonia.healthHazards.skinIrritation.imageAlt")}
                width={296}
                height={300}
              />
              <h3 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "15pt" }}>
                  <strong>{t("ammonia.healthHazards.skinIrritation.title")}</strong>
                </span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("ammonia.healthHazards.skinIrritation.description")}</span>
              </p>
            </div>
            <div className="hazard-item">
              <Image
                className="alignnone size-medium wp-image-67795 aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/02/seizure.jpg"
                alt={t("ammonia.healthHazards.seizures.imageAlt")}
                width={296}
                height={300}
              />
              <h3 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "15pt" }}>
                  <strong>{t("ammonia.healthHazards.seizures.title")}</strong>
                </span>
              </h3>
              <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%" }}>
                <span style={{ fontSize: "14pt" }}>{t("ammonia.healthHazards.seizures.description")}</span>
              </p>
            </div>
          </div>

          <div className="hazards-grid" style={{ marginRight: "10px", marginLeft: "10px", paddingBottom: "35px" }}>
            <div className="hazard-item">
              <Image
                className="alignnone size-medium wp-image-67795 aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/02/breathing-issue.jpg"
                alt={t("ammonia.healthHazards.breathingIssues.imageAlt")}
                width={296}
                height={300}
              />
              <h3 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "15pt" }}>
                  <strong>{t("ammonia.healthHazards.breathingIssues.title")}</strong>
                </span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("ammonia.healthHazards.breathingIssues.description")}</span>
              </p>
            </div>
            <div className="hazard-item">
              <Image
                className="alignnone size-medium wp-image-67795 aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/02/digestive-issue.jpg"
                alt={t("ammonia.healthHazards.digestiveIssues.imageAlt")}
                width={296}
                height={300}
              />
              <h3 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "15pt" }}>
                  <strong>{t("ammonia.healthHazards.digestiveIssues.title")}</strong>
                </span>
              </h3>
              <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%" }}>
                <span style={{ fontSize: "14pt" }}>{t("ammonia.healthHazards.digestiveIssues.description")}</span>
              </p>
            </div>
          </div>

          <p style={{ textAlign: "center", paddingTop: "50px" }}>
            <span style={{ fontSize: "15pt" }}>{t("ammonia.healthHazards.conclusion")}</span>
          </p>
        </div>
      </section>

      {/* Safety Regulations Section */}
      <section className="safety-regulations" style={{ paddingTop: "90px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>
              {t("ammonia.safetyRegulations.titlePart1")}{" "}
              <span style={{ color: "#2fbcbc" }}>{t("ammonia.safetyRegulations.titlePart2")}</span>{" "}
              {t("ammonia.safetyRegulations.titlePart3")}{" "}
              <span style={{ color: "#2fbcbc" }}>{t("ammonia.safetyRegulations.titlePart4")}</span>{" "}
              {t("ammonia.safetyRegulations.titlePart5")}{" "}
            </span>
            <span style={{ fontSize: "24pt" }}>
              {t("ammonia.safetyRegulations.titlePart6")}{" "}
              <span style={{ color: "#2fbcbc" }}>{t("ammonia.safetyRegulations.titlePart7")}</span>{" "}
              {t("ammonia.safetyRegulations.titlePart8")}
            </span>
          </h2>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "15pt" }}>{t("ammonia.safetyRegulations.subtitle")}</span>
          </p>

          <div className="regulations-grid" style={{ paddingBottom: "60px" }}>
            <div className="regulation-item">
              <h3 style={{ textAlign: "center" }}>
                <Image
                  className="aligncenter wp-image-67841 size-medium"
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Personal-protective-equipment.png"
                  alt={t("ammonia.safetyRegulations.ppe.imageAlt")}
                  width={290}
                  height={300}
                />
                <strong>{t("ammonia.safetyRegulations.ppe.title")}</strong>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("ammonia.safetyRegulations.ppe.description")}</span>
              </p>
            </div>
            <div className="regulation-item">
              <h3 style={{ textAlign: "center" }}>
                <Image
                  className="aligncenter wp-image-67841 size-medium"
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Proper-ventilation.png"
                  alt={t("ammonia.safetyRegulations.ventilation.imageAlt")}
                  width={290}
                  height={300}
                />
                <strong>{t("ammonia.safetyRegulations.ventilation.title")}</strong>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("ammonia.safetyRegulations.ventilation.description")}</span>
              </p>
            </div>
            <div className="regulation-item">
              <h3 style={{ textAlign: "center" }}>
                <Image
                  className="aligncenter wp-image-67841 size-medium"
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Transportation-regulations.png"
                  alt={t("ammonia.safetyRegulations.transportation.imageAlt")}
                  width={290}
                  height={300}
                />
                <strong>{t("ammonia.safetyRegulations.transportation.title")}</strong>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("ammonia.safetyRegulations.transportation.description")}</span>
              </p>
            </div>
          </div>

          <div className="regulations-grid">
            <div className="regulation-item">
              <h3 style={{ textAlign: "center" }}>
                <Image
                  className="aligncenter wp-image-67841 size-medium"
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Inspection-and-maintenance.png"
                  alt={t("ammonia.safetyRegulations.inspection.imageAlt")}
                  width={290}
                  height={300}
                />
                <strong>{t("ammonia.safetyRegulations.inspection.title")}</strong>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("ammonia.safetyRegulations.inspection.description")}</span>
              </p>
            </div>
            <div className="regulation-item">
              <h3 style={{ textAlign: "center" }}>
                <Image
                  className="aligncenter wp-image-67841 size-medium"
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Emergency-response-plans.png"
                  alt={t("ammonia.safetyRegulations.emergency.imageAlt")}
                  width={290}
                  height={300}
                />
                <strong>{t("ammonia.safetyRegulations.emergency.title")}</strong>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("ammonia.safetyRegulations.emergency.description")}</span>
              </p>
            </div>
            <div className="regulation-item">
              <h3 style={{ textAlign: "center" }}>
                <Image
                  className="aligncenter wp-image-67841 size-medium"
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Regulatory-compliance.png"
                  alt={t("ammonia.safetyRegulations.compliance.imageAlt")}
                  width={290}
                  height={300}
                />
                <strong>{t("ammonia.safetyRegulations.compliance.title")}</strong>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("ammonia.safetyRegulations.compliance.description")}</span>
              </p>
            </div>
          </div>

          <div style={{ paddingTop: "60px" }}>
            <p style={{ textAlign: "justify" }}>
              <Image
                className="wp-image-67896 alignleft"
                src="https://www.pranaair.com/wp-content/uploads/2023/02/alert-icon.png"
                alt={t("ammonia.safetyRegulations.alertIconAlt")}
                width={65}
                height={54}
              />
              <span style={{ fontSize: "14pt" }}>{t("ammonia.safetyRegulations.conclusion")}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Ambient Air Quality Monitoring Section */}
      <section className="air-quality-monitoring" style={{ paddingTop: "90px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>
              <span style={{ color: "#2fbcbc" }}>
                {t("ammonia.airQualityMonitoring.titlePart1")}{" "}
                <span style={{ color: "#333333" }}>{t("ammonia.airQualityMonitoring.titlePart2")}</span>
              </span>
            </span>
          </h2>
          <a href="#">
            <Image
              className="aligncenter wp-image-67915"
              src="https://www.pranaair.com/wp-content/uploads/2023/02/ammonia-sensor-on-ambient-monitor-300x234.jpg"
              alt={t("ammonia.airQualityMonitoring.imageAlt")}
              width={800}
              height={624}
            />
          </a>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>{t("ammonia.airQualityMonitoring.description")}</span>
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="product-section" style={{ paddingTop: "80px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>
              {t("ammonia.product.titlePart1")}{" "}
              <span style={{ color: "#2fbcbc" }}>{t("ammonia.product.titlePart2")}</span>{" "}
              {t("ammonia.product.titlePart3")}
            </span>
            <span style={{ fontSize: "24pt" }}>{t("ammonia.product.titlePart4")}</span>
          </h2>
          <div style={{ paddingTop: "40px" }}>
            <Link href={`${domain}/air-quality-monitor`}>
              <Image
                className="size-large wp-image-65217 aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/prana-air-caaqms-outdoor-monitor--1024x512.jpg"
                alt={t("ammonia.product.imageAlt")}
                width={1024}
                height={512}
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

