import "./styles.css"
import Image from "next/image"
import { getServerTranslation } from "@/i18n/server"

export default async function MoldPage() {
  const { t } = await getServerTranslation("what-mold")
  return (
    <main className="mold-page">
      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="banner-content fadeInUp">
            <Image
              className="mold-icon"
              src="https://www.pranaair.com/wp-content/uploads/2023/04/mold.png"
              alt={t("mold.banner.iconAlt")}
              width={150}
              height={150}
            />
            <h1 className="whitetext">
              <span>{t("mold.banner.title")}</span>
            </h1>
            <p className="whitetext">
              <span>{t("mold.banner.description")}</span>
            </p>
          </div>
        </div>
      </section>

      {/* How is mold formed section */}
      <section className="content-section">
        <div className="container">
          <div className="section-content fadeInUp">
            <h2 className="air_heading">
              {t("mold.formation.titlePrefix")} <span className="highlight">{t("mold.formation.titleHighlight")}</span>
            </h2>
            <p className="text-center">{t("mold.formation.description")}</p>

            <div className="image-container">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/how-is-mold-formed.jpg"
                alt={t("mold.formation.imageAlt")}
                width={800}
                height={500}
                className="content-image"
              />
            </div>
          </div>

          <div className="section-content fadeInUp">
            <h2 className="air_heading">
              {t("mold.origin.titlePrefix")} <span className="highlight">{t("mold.origin.titleHighlight")}</span>
            </h2>
            <p className="text-center">{t("mold.origin.description")}</p>

            <div className="image-container">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/indoor-sources-of-mold.jpg"
                alt={t("mold.origin.imageAlt")}
                width={800}
                height={500}
                className="content-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Health effects section */}
      <section className="health-effects-section">
        <div className="container">
          <div className="section-content fadeInUp">
            <h2 className="air_heading">
              {t("mold.healthEffects.titlePrefix")}{" "}
              <span className="highlight">{t("mold.healthEffects.titleHighlight")}</span>{" "}
              {t("mold.healthEffects.titleSuffix")}
            </h2>
            <p className="text-center">{t("mold.healthEffects.description")}</p>
          </div>

          <div className="symptoms-grid">
            <div className="symptom-item fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/arrow-icon.png"
                alt={t("mold.healthEffects.symptoms.arrowAlt")}
                width={30}
                height={30}
                className="arrow-icon"
              />
              <p>{t("mold.healthEffects.symptoms.allergies")}</p>
            </div>
            <div className="symptom-item fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/arrow-icon.png"
                alt={t("mold.healthEffects.symptoms.arrowAlt")}
                width={30}
                height={30}
                className="arrow-icon"
              />
              <p>{t("mold.healthEffects.symptoms.breathing")}</p>
            </div>
            <div className="symptom-item fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/arrow-icon.png"
                alt={t("mold.healthEffects.symptoms.arrowAlt")}
                width={30}
                height={30}
                className="arrow-icon"
              />
              <p>{t("mold.healthEffects.symptoms.skin")}</p>
            </div>
            <div className="symptom-item fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/arrow-icon.png"
                alt={t("mold.healthEffects.symptoms.arrowAlt")}
                width={30}
                height={30}
                className="arrow-icon"
              />
              <p>{t("mold.healthEffects.symptoms.nausea")}</p>
            </div>
          </div>

          <div className="section-content fadeInUp">
            <p className="text-center">{t("mold.healthEffects.longTermDescription")}</p>
          </div>

          <div className="health-conditions-grid">
            <div className="health-condition fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/Hypersensitivity-Pneumonitis-due-to-mold-300x300.png"
                alt={t("mold.healthEffects.conditions.pneumonitis.alt")}
                width={300}
                height={300}
                className="condition-image"
              />
              <h4>{t("mold.healthEffects.conditions.pneumonitis.title")}</h4>
              <p>{t("mold.healthEffects.conditions.pneumonitis.description")}</p>
            </div>
            <div className="health-condition fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/asthma-due-to-mold-300x300.png"
                alt={t("mold.healthEffects.conditions.asthma.alt")}
                width={300}
                height={300}
                className="condition-image"
              />
              <h4>{t("mold.healthEffects.conditions.asthma.title")}</h4>
              <p>{t("mold.healthEffects.conditions.asthma.description")}</p>
            </div>
          </div>

          <div className="section-content fadeInUp">
            <p className="text-center">{t("mold.healthEffects.prevention")}</p>
          </div>
        </div>
      </section>

      {/* Humidity and mold growth section */}
      <section className="content-section">
        <div className="container">
          <div className="section-content fadeInUp">
            <h2 className="air_heading">
              {t("mold.humidity.titlePrefix")} <span className="highlight">{t("mold.humidity.titleHighlight1")}</span>{" "}
              {t("mold.humidity.titleMiddle")} <span className="highlight">{t("mold.humidity.titleHighlight2")}</span>{" "}
              {t("mold.humidity.titleSuffix")}
            </h2>
            <p className="text-center">{t("mold.humidity.description")}</p>
          </div>

          <div className="table-responsive fadeInUp">
            <table className="humidity-table">
              <thead>
                <tr>
                  <th>{t("mold.humidity.table.headers.humidityLevel")}</th>
                  <th>{t("mold.humidity.table.headers.moldLevel")}</th>
                  <th>{t("mold.humidity.table.headers.description")}</th>
                  <th>{t("mold.humidity.table.headers.healthEffects")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30-60%</td>
                  <td>{t("mold.humidity.table.levels.normal.level")}</td>
                  <td>{t("mold.humidity.table.levels.normal.description")}</td>
                  <td>{t("mold.humidity.table.levels.normal.healthEffects")}</td>
                </tr>
                <tr>
                  <td>61-65%</td>
                  <td>{t("mold.humidity.table.levels.elevated.level")}</td>
                  <td>{t("mold.humidity.table.levels.elevated.description")}</td>
                  <td>{t("mold.humidity.table.levels.elevated.healthEffects")}</td>
                </tr>
                <tr>
                  <td>65-70%</td>
                  <td>{t("mold.humidity.table.levels.high.level")}</td>
                  <td>{t("mold.humidity.table.levels.high.description")}</td>
                  <td>{t("mold.humidity.table.levels.high.healthEffects")}</td>
                </tr>
                <tr>
                  <td>&gt; 70%</td>
                  <td>{t("mold.humidity.table.levels.extreme.level")}</td>
                  <td>{t("mold.humidity.table.levels.extreme.description")}</td>
                  <td>{t("mold.humidity.table.levels.extreme.healthEffects")}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="section-content fadeInUp">
            <p className="text-center">{t("mold.humidity.disclaimer")}</p>
          </div>
        </div>
      </section>

      {/* Mold on walls section */}
      <section className="mold-walls-section">
        <div className="container">
          <div className="section-content fadeInUp">
            <h2 className="air_heading">
              {t("mold.walls.titlePrefix")} <span className="highlight">{t("mold.walls.titleHighlight")}</span>
            </h2>
            <p className="text-center">{t("mold.walls.description")}</p>

            <div className="image-container">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/mold-grown-on-wall.png"
                alt={t("mold.walls.imageAlt")}
                width={600}
                height={400}
                className="wall-mold-image"
              />
            </div>
          </div>

          <div className="factors-grid">
            <div className="factor-item fadeInUp">
              <h4>
                <span className="highlight">{t("mold.walls.factors.moisture.title")}</span>
              </h4>
              <p>{t("mold.walls.factors.moisture.description")}</p>
            </div>
            <div className="factor-item fadeInUp">
              <h4>
                <span className="highlight">{t("mold.walls.factors.ventilation.title")}</span>
              </h4>
              <p>{t("mold.walls.factors.ventilation.description")}</p>
            </div>
            <div className="factor-item fadeInUp">
              <h4>
                <span className="highlight">{t("mold.walls.factors.organic.title")}</span>
              </h4>
              <p>{t("mold.walls.factors.organic.description")}</p>
            </div>
            <div className="factor-item fadeInUp">
              <h4>
                <span className="highlight">{t("mold.walls.factors.darkness.title")}</span>
              </h4>
              <p>{t("mold.walls.factors.darkness.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How mold affects home section */}
      <section className="content-section">
        <div className="container">
          <div className="section-content fadeInUp">
            <h2 className="air_heading">
              {t("mold.homeEffects.titlePrefix")}{" "}
              <span className="highlight">{t("mold.homeEffects.titleHighlight")}</span>{" "}
              {t("mold.homeEffects.titleSuffix")}
            </h2>
            <p className="text-center">{t("mold.homeEffects.description")}</p>
          </div>

          <div className="effects-list">
            <div className="effect-item fadeInUp">
              <div className="effect-content">
                <h3>{t("mold.homeEffects.effects.structural.title")}</h3>
                <p>{t("mold.homeEffects.effects.structural.description")}</p>
              </div>
              <div className="effect-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/weakening-of-the-structure.png"
                  alt={t("mold.homeEffects.effects.structural.alt")}
                  width={150}
                  height={150}
                />
              </div>
            </div>

            <div className="effect-item fadeInUp">
              <div className="effect-content">
                <h3>{t("mold.homeEffects.effects.staining.title")}</h3>
                <p>{t("mold.homeEffects.effects.staining.description")}</p>
              </div>
              <div className="effect-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/staining-and-discoloration.png"
                  alt={t("mold.homeEffects.effects.staining.alt")}
                  width={150}
                  height={150}
                />
              </div>
            </div>

            <div className="effect-item fadeInUp">
              <div className="effect-content">
                <h3>{t("mold.homeEffects.effects.smell.title")}</h3>
                <p>{t("mold.homeEffects.effects.smell.description")}</p>
              </div>
              <div className="effect-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/unpleasant-smell.png"
                  alt={t("mold.homeEffects.effects.smell.alt")}
                  width={150}
                  height={150}
                />
              </div>
            </div>

            <div className="effect-item fadeInUp">
              <div className="effect-content">
                <h3>{t("mold.homeEffects.effects.health.title")}</h3>
                <p>{t("mold.homeEffects.effects.health.description")}</p>
              </div>
              <div className="effect-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/health-issues.png"
                  alt={t("mold.homeEffects.effects.health.alt")}
                  width={150}
                  height={150}
                />
              </div>
            </div>

            <div className="effect-item fadeInUp">
              <div className="effect-content">
                <h3>{t("mold.homeEffects.effects.property.title")}</h3>
                <p>{t("mold.homeEffects.effects.property.description")}</p>
              </div>
              <div className="effect-icon">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/deacrease-in-property-value.png"
                  alt={t("mold.homeEffects.effects.property.alt")}
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mold and fungi comparison section */}
      <section className="content-section">
        <div className="container">
          <div className="section-content fadeInUp">
            <h2 className="air_heading">
              {t("mold.fungi.titlePrefix")} <span className="highlight">{t("mold.fungi.titleHighlight1")}</span>{" "}
              {t("mold.fungi.titleMiddle")} <span className="highlight">{t("mold.fungi.titleHighlight2")}</span>{" "}
              {t("mold.fungi.titleSuffix")}
            </h2>
            <p className="text-center">{t("mold.fungi.description")}</p>
          </div>

          <div className="section-content fadeInUp">
            <h4 className="fungi-heading">{t("mold.fungi.fungiHeading")}</h4>
            <p className="text-center">{t("mold.fungi.typesDescription")}</p>
          </div>

          <div className="fungi-types-grid">
            <div className="fungi-type fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/73068.jpg"
                alt={t("mold.fungi.types.type1Alt")}
                width={200}
                height={200}
              />
            </div>
            <div className="fungi-type fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/73077.jpg"
                alt={t("mold.fungi.types.type2Alt")}
                width={200}
                height={200}
              />
            </div>
            <div className="fungi-type fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/73059.jpg"
                alt={t("mold.fungi.types.type3Alt")}
                width={200}
                height={200}
              />
            </div>
          </div>

          <div className="section-content fadeInUp">
            <h2 className="air_heading">{t("mold.prevention.title")}</h2>
          </div>

          <div className="prevention-grid">
            <div className="prevention-item fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/ventilation.png"
                alt={t("mold.prevention.methods.improvements.alt")}
                width={150}
                height={150}
              />
              <h4>{t("mold.prevention.methods.improvements.title")}</h4>
              <p>{t("mold.prevention.methods.improvements.description")}</p>
            </div>
            <div className="prevention-item fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/dehumidifier.png"
                alt={t("mold.prevention.methods.moisture.alt")}
                width={150}
                height={150}
              />
              <h4>{t("mold.prevention.methods.moisture.title")}</h4>
              <p>{t("mold.prevention.methods.moisture.description")}</p>
            </div>
            <div className="prevention-item fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/control-humidity.png"
                alt={t("mold.prevention.methods.humidity.alt")}
                width={150}
                height={150}
              />
              <h4>{t("mold.prevention.methods.humidity.title")}</h4>
              <p>{t("mold.prevention.methods.humidity.description")}</p>
            </div>
            <div className="prevention-item fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/eliminating-moiture.png"
                alt={t("mold.prevention.methods.eliminating.alt")}
                width={150}
                height={150}
              />
              <h4>{t("mold.prevention.methods.eliminating.title")}</h4>
              <p>{t("mold.prevention.methods.eliminating.description")}</p>
            </div>
            <div className="prevention-item fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/prevent-long-term-mold.png"
                alt={t("mold.prevention.methods.longTerm.alt")}
                width={150}
                height={150}
              />
              <h4>{t("mold.prevention.methods.longTerm.title")}</h4>
              <p>{t("mold.prevention.methods.longTerm.description")}</p>
            </div>
            <div className="prevention-item fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/mold-removal.png"
                alt={t("mold.prevention.methods.removal.alt")}
                width={150}
                height={150}
              />
              <h4>{t("mold.prevention.methods.removal.title")}</h4>
              <p>{t("mold.prevention.methods.removal.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to know if house has mold section */}
      <section className="detection-section">
        <div className="container">
          <div className="section-content fadeInUp">
            <h2 className="air_heading">
              <span className="highlight">{t("mold.detection.titleHighlight")}</span> {t("mold.detection.titleSuffix")}
            </h2>
            <p className="text-center">{t("mold.detection.description")}</p>
          </div>

          <div className="detection-grid">
            <div className="detection-item fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/musty-smell-due-to-mold.png"
                alt={t("mold.detection.methods.smell.alt")}
                width={150}
                height={150}
              />
              <h4>{t("mold.detection.methods.smell.title")}</h4>
              <p>{t("mold.detection.methods.smell.description")}</p>
            </div>
            <div className="detection-item fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/visible-mold.png"
                alt={t("mold.detection.methods.visible.alt")}
                width={150}
                height={150}
              />
              <h4>{t("mold.detection.methods.visible.title")}</h4>
              <p>{t("mold.detection.methods.visible.description")}</p>
            </div>
            <div className="detection-item fadeInUp">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/temperature-humidity-level.png"
                alt={t("mold.detection.methods.conditions.alt")}
                width={150}
                height={150}
              />
              <h4>{t("mold.detection.methods.conditions.title")}</h4>
              <p>{t("mold.detection.methods.conditions.description")}</p>
            </div>
          </div>

          <div className="section-content fadeInUp">
            <p className="text-center">{t("mold.detection.importance")}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

