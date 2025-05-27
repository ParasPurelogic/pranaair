import Image from "next/image"
import "./styles.css"
import { getServerTranslation } from "@/i18n/server"

export default async function HydrogenSulfidePage() {
  const { t } = await getServerTranslation("hydrogensulfide")
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundColor: "#60cadf", padding: "30px 0 80px 0" }}>
        <div className="container">
          <div className="hero-content" style={{ padding: "100px 0" }}>
            <div style={{ textAlign: "center" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/h2s-gas-icon.png"
                alt={t("h2s.hero.iconAlt")}
                width={180}
                height={176}
                className="aligncenter"
              />
            </div>

            <h2 style={{ textAlign: "center", fontSize: "36pt", lineHeight: "1.2" }}>
              <span className="whitetext">{t("h2s.hero.title")}</span>
            </h2>

            <p className="whitetext" style={{ overflowWrap: "break-word", width: "auto", textAlign: "center" }}>
              <span style={{ fontSize: "18pt" }}>{t("h2s.hero.description")}</span>
            </p>
          </div>
        </div>
      </section>

      {/* H2S in Environment Section */}
      <section className="environment-section" style={{ paddingTop: "50px", backgroundColor: "#fefdfd" }}>
        <div className="container">
          <div className="environment-content" style={{ paddingBottom: "35px" }}>
            <h4 className="air_heading" style={{ textAlign: "center" }}>
              <strong>
                <span style={{ fontSize: "24pt" }}>
                  <span style={{ color: "#2a2a2c" }}>
                    <span style={{ color: "#60cadf" }}>{t("h2s.environment.titleHighlight")}</span>{" "}
                    {t("h2s.environment.titleSuffix")}
                  </span>
                </span>
              </strong>
            </h4>

            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("h2s.environment.description")}</span>
            </p>

            <div style={{ textAlign: "center" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/hydrogen-sulfide-in-the-environment-1024x526.jpg"
                alt={t("h2s.environment.imageAlt")}
                width={1024}
                height={526}
                className="aligncenter"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Do You Know Section */}
      <section
        className="do-you-know-section"
        style={{
          marginTop: "90px",
          marginBottom: "50px",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundImage: "url('https://www.pranaair.com/wp-content/uploads/2023/03/bng-vector.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-11" style={{ paddingLeft: "30px" }}>
              <h2 className="douknow_text">
                <span style={{ color: "#60cadf" }}>{t("h2s.doYouKnow.title")}</span>
              </h2>
              <p style={{ textAlign: "left" }}>
                <span style={{ fontSize: "15pt" }}>
                  {t("h2s.doYouKnow.description")}
                  <em> - {t("h2s.doYouKnow.source")}</em>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="sources-section" style={{ paddingTop: "90px", backgroundColor: "#bbe5fb" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "24pt" }}>{t("h2s.sources.title")}</h2>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>{t("h2s.sources.description")}</span>
          </p>

          <h3 style={{ textAlign: "center", fontSize: "18pt" }}>{t("h2s.sources.natural.title")}</h3>

          <div className="row">
            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/volcanic-gases.png"
                  alt={t("h2s.sources.natural.volcanic.alt")}
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>{t("h2s.sources.natural.volcanic.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>{t("h2s.sources.natural.volcanic.description")}</p>
              </div>
            </div>

            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/gas-wells.png"
                  alt={t("h2s.sources.natural.gasWells.alt")}
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>{t("h2s.sources.natural.gasWells.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>{t("h2s.sources.natural.gasWells.description")}</p>
              </div>
            </div>

            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/natural-reservoirs.png"
                  alt={t("h2s.sources.natural.reservoirs.alt")}
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>{t("h2s.sources.natural.reservoirs.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  {t("h2s.sources.natural.reservoirs.description")}
                </p>
              </div>
            </div>

            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/natural-springs.png"
                  alt={t("h2s.sources.natural.springs.alt")}
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>{t("h2s.sources.natural.springs.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>{t("h2s.sources.natural.springs.description")}</p>
              </div>
            </div>

            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/crude-petroleum.png"
                  alt={t("h2s.sources.natural.petroleum.alt")}
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>{t("h2s.sources.natural.petroleum.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  {t("h2s.sources.natural.petroleum.description")}
                </p>
              </div>
            </div>
          </div>

          <div style={{ paddingTop: "30px" }}>
            <h3 style={{ textAlign: "center", fontSize: "18pt" }}>{t("h2s.sources.industrial.title")}</h3>
          </div>

          <div className="row" style={{ paddingBottom: "40px" }}>
            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/sewage-treatment-plants.png"
                  alt={t("h2s.sources.industrial.sewage.alt")}
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>{t("h2s.sources.industrial.sewage.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  {t("h2s.sources.industrial.sewage.description")}
                </p>
              </div>
            </div>

            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/refineries.png"
                  alt={t("h2s.sources.industrial.refineries.alt")}
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>{t("h2s.sources.industrial.refineries.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  {t("h2s.sources.industrial.refineries.description")}
                </p>
              </div>
            </div>

            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/kraft-paper-mills.png"
                  alt={t("h2s.sources.industrial.paperMills.alt")}
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>{t("h2s.sources.industrial.paperMills.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  {t("h2s.sources.industrial.paperMills.description")}
                </p>
              </div>
            </div>

            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/food-processing.png"
                  alt={t("h2s.sources.industrial.foodProcessing.alt")}
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>{t("h2s.sources.industrial.foodProcessing.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  {t("h2s.sources.industrial.foodProcessing.description")}
                </p>
              </div>
            </div>

            <div className="col-md-1-5">
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/water-treatment-plants.png"
                  alt={t("h2s.sources.industrial.waterTreatment.alt")}
                  width={200}
                  height={200}
                  className="aligncenter"
                />
                <h4 style={{ textAlign: "center", fontSize: "13pt" }}>
                  <strong>{t("h2s.sources.industrial.waterTreatment.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "13pt" }}>
                  {t("h2s.sources.industrial.waterTreatment.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Hazards Section */}
      <section className="health-hazards-section" style={{ paddingTop: "90px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center", fontSize: "24pt" }}>
            {t("h2s.healthHazards.titlePrefix")}{" "}
            <span style={{ color: "#60cadf" }}>{t("h2s.healthHazards.titleHighlight")}</span>
          </h2>

          <p style={{ textAlign: "center", fontSize: "13pt" }}>{t("h2s.healthHazards.description")}</p>

          <div style={{ textAlign: "center" }}>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/03/h2s-health-hazards-1024x763.jpg"
              alt={t("h2s.healthHazards.imageAlt")}
              width={800}
              height={596}
              className="aligncenter"
            />
          </div>

          <p style={{ textAlign: "center", fontSize: "14pt" }}>{t("h2s.healthHazards.tableDescription")}</p>
        </div>
      </section>

      {/* H2S Levels Table */}
      <section className="h2s-levels-section" style={{ paddingTop: "40px" }}>
        <div className="container">
          <div className="h2levels_table">
            <div className="thead_top">
              <ul>
                <li>{t("h2s.levelsTable.header.levels")}</li>
                <li>{t("h2s.levelsTable.header.duration")}</li>
              </ul>
            </div>

            <table width="100%">
              <thead className="thead_row">
                <tr>
                  <th></th>
                  <th>{t("h2s.levelsTable.timeHeaders.fifteenMin")}</th>
                  <th>{t("h2s.levelsTable.timeHeaders.moreThanFifteenMin")}</th>
                  <th>{t("h2s.levelsTable.timeHeaders.oneToFourHours")}</th>
                  <th>{t("h2s.levelsTable.timeHeaders.fourToEightHours")}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="Good_color">
                  <td>10</td>
                  <td>-</td>
                  <td>-</td>
                  <td>{t("h2s.levelsTable.effects.eyeIrritation")}</td>
                  <td>{t("h2s.levelsTable.effects.maxTolerable")}</td>
                </tr>
                <tr className="Satisfactory_color">
                  <td>50-100</td>
                  <td>{t("h2s.levelsTable.effects.lossOfSmell")}</td>
                  <td>{t("h2s.levelsTable.effects.eyeIrritation")}</td>
                  <td>{t("h2s.levelsTable.effects.eyeBronchialIrritation")}</td>
                  <td>{t("h2s.levelsTable.effects.respiratoryDistress")}</td>
                </tr>
                <tr className="Moderately_color">
                  <td>150-250</td>
                  <td>{t("h2s.levelsTable.effects.eyeSkinIrritation")}</td>
                  <td>{t("h2s.levelsTable.effects.eyeBronchialIrritation")}</td>
                  <td>{t("h2s.levelsTable.effects.respiratoryDistress")}</td>
                  <td>{t("h2s.levelsTable.effects.dangerContinuous")}</td>
                </tr>
                <tr className="poor_color">
                  <td>300-400</td>
                  <td>{t("h2s.levelsTable.effects.lossOfSmellEye")}</td>
                  <td>{t("h2s.levelsTable.effects.severeRespiratory")}</td>
                  <td>{t("h2s.levelsTable.effects.pulmonaryEdema")}</td>
                  <td>{t("h2s.levelsTable.effects.pulmonaryEdema")}</td>
                </tr>
                <tr className="verypoor_color">
                  <td>500-1,000</td>
                  <td>{t("h2s.levelsTable.effects.lossOfConsciousness")}</td>
                  <td>{t("h2s.levelsTable.effects.riskPulmonaryDeath")}</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>

            <div className="thead_top Severe_color">
              <ul>
                <li>&gt;1,000</li>
                <li>{t("h2s.levelsTable.effects.immediateLoss")}</li>
              </ul>
            </div>
          </div>

          <p style={{ textAlign: "right" }}>
            <em>{t("h2s.levelsTable.source")}</em>
          </p>
        </div>
      </section>

      {/* Preventive Measures Section */}
      <section className="preventive-measures-section" style={{ paddingTop: "90px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center", fontSize: "24pt" }}>
            <span style={{ color: "#60cadf" }}>{t("h2s.preventiveMeasures.titlePrefix")}</span>{" "}
            {t("h2s.preventiveMeasures.titleMiddle")}{" "}
            <span style={{ color: "#60cadf" }}>{t("h2s.preventiveMeasures.titleSuffix")}</span>
          </h2>

          <div className="row prevention_section">
            <div className="col-md-3" style={{ textAlign: "center" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/storage-space-200x200.png"
                alt={t("h2s.preventiveMeasures.monitorStorage.alt")}
                width={200}
                height={200}
              />
            </div>
            <div className="col-md-9">
              <p>
                <span style={{ fontSize: "14pt" }}>
                  <strong>{t("h2s.preventiveMeasures.monitorStorage.title")}</strong>
                </span>
              </p>
              <p>
                <span style={{ fontSize: "14pt" }}>{t("h2s.preventiveMeasures.monitorStorage.description")}</span>
              </p>
            </div>
          </div>

          <div className="row prevention_section">
            <div className="col-md-3" style={{ textAlign: "center" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/maintain-temperature-200x200.png"
                alt={t("h2s.preventiveMeasures.temperature.alt")}
                width={200}
                height={200}
              />
            </div>
            <div className="col-md-9">
              <p>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("h2s.preventiveMeasures.temperature.title")}</span>
                </strong>
              </p>
              <p>
                <span style={{ fontSize: "14pt" }}>{t("h2s.preventiveMeasures.temperature.description")}</span>
              </p>
            </div>
          </div>

          <div className="row prevention_section">
            <div className="col-md-3" style={{ textAlign: "center" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/no-smoking-area-200x200.png"
                alt={t("h2s.preventiveMeasures.noSmoking.alt")}
                width={200}
                height={200}
              />
            </div>
            <div className="col-md-9">
              <p>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("h2s.preventiveMeasures.noSmoking.title")}</span>
                </strong>
              </p>
              <p>
                <span style={{ fontSize: "14pt" }}>{t("h2s.preventiveMeasures.noSmoking.description")}</span>
              </p>
            </div>
          </div>

          <div className="row prevention_section">
            <div className="col-md-3" style={{ textAlign: "center" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/proper-ventilation-200x200.png"
                alt={t("h2s.preventiveMeasures.ventilation.alt")}
                width={200}
                height={200}
              />
            </div>
            <div className="col-md-9">
              <p>
                <span style={{ fontSize: "14pt" }}>
                  <strong>{t("h2s.preventiveMeasures.ventilation.title")}</strong>
                </span>
              </p>
              <p>
                <span style={{ fontSize: "14pt" }}>{t("h2s.preventiveMeasures.ventilation.description")}</span>
              </p>
            </div>
          </div>

          <div className="row prevention_section">
            <div className="col-md-3" style={{ textAlign: "center" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/precautionary-measure-200x200.png"
                alt={t("h2s.preventiveMeasures.protectiveGear.alt")}
                width={200}
                height={200}
              />
            </div>
            <div className="col-md-9">
              <p>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("h2s.preventiveMeasures.protectiveGear.title")}</span>
                </strong>
              </p>
              <p>
                <span style={{ fontSize: "14pt" }}>{t("h2s.preventiveMeasures.protectiveGear.description")}</span>
              </p>
            </div>
          </div>

          <div className="row prevention_section">
            <div className="col-md-3" style={{ textAlign: "center" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/fire-extinguisher-200x200.png"
                alt={t("h2s.preventiveMeasures.fireSafety.alt")}
                width={200}
                height={200}
              />
            </div>
            <div className="col-md-9">
              <p>
                <span style={{ fontSize: "14pt" }}>
                  <strong>{t("h2s.preventiveMeasures.fireSafety.title")}</strong>
                </span>
              </p>
              <p>
                <span style={{ fontSize: "14pt" }}>{t("h2s.preventiveMeasures.fireSafety.description")}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How To Detect H2S Gas Section */}
      <section className="detect-h2s-section" style={{ paddingTop: "90px", paddingBottom: "25px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center", fontSize: "24pt" }}>
            {t("h2s.detection.title")} <span style={{ color: "#2fbcbc" }}>{t("h2s.detection.titleHighlight")}</span>
          </h2>

          <p style={{ textAlign: "center", fontSize: "14pt" }}>{t("h2s.detection.description")}</p>

          <div className="row">
            <div className="col-md-6">
              <h4 style={{ textAlign: "center", fontSize: "18pt" }}>
                <strong>
                  <span style={{ color: "#020303" }}>{t("h2s.detection.sensor.title")}</span>
                </strong>
              </h4>

              <p style={{ textAlign: "center" }}>
                <a href="#">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-h2s-sensor-of-highly-accurate-1024x788.jpg"
                    alt={t("h2s.detection.sensor.alt")}
                    width={350}
                    height={269}
                    className="aligncenter"
                  />
                </a>
              </p>
            </div>

            <div className="col-md-6">
              <h3 style={{ textAlign: "center", fontSize: "18pt" }}>
                <strong>
                  <span style={{ color: "#000000" }}>{t("h2s.detection.monitor.title")}</span>
                </strong>
              </h3>

              <p style={{ textAlign: "center" }}>
                <a href="#">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/03/h2s-ambient-air-quality-monitor-932x1024.png"
                    alt={t("h2s.detection.monitor.alt")}
                    width={300}
                    height={330}
                    className="aligncenter"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Air Quality Monitor Section */}
      <section className="choose-monitor-section" style={{ paddingTop: "80px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center", fontSize: "24pt" }}>
            {t("h2s.chooseMonitor.title")}
          </h2>

          <p style={{ textAlign: "center" }}>
            <a href="#">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/01/prana-air-caaqms-outdoor-monitor--1024x512.jpg"
                alt={t("h2s.chooseMonitor.imageAlt")}
                width={1024}
                height={512}
                className="aligncenter"
              />
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}

