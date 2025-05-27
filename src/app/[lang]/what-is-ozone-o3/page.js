import Image from "next/image"
import "./styles.css"
import { getServerTranslation } from "@/i18n/server"
import MeasureCarousel from "@/Components/Pages/CarbonDioxide/measure-co2-slider"


export default async function OzonePage() {
  const { t } = await getServerTranslation("ozone")
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
      <section className="full-width-section" style={{ backgroundColor: "#5c87ba", paddingBottom: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="text-center fade-in-up" style={{ paddingTop: "15px" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/10/what-is-ozone.png"
                  alt={t("ozone.hero.imageAlt")}
                  width={224}
                  height={194}
                  className="aligncenter"
                />
                <h1 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "50pt", lineHeight: "1.1" }}>{t("ozone.hero.title")}</span>
                </h1>
                <p className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "16pt" }}>{t("ozone.hero.description")}</span>
                </p>
              </div>

              <div style={{ height: "50px" }}></div>

              <div>
                <h2 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24pt" }}>{t("ozone.friendOrFoe.title")}</span>
                </h2>
                <p className="whitetext" style={{ textAlign: "center" }}>
                  <em>
                    <span style={{ fontSize: "14pt" }}>{t("ozone.friendOrFoe.epaQuote")}</span>
                  </em>
                </p>
                <p className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("ozone.friendOrFoe.stratosphericDescription")}</span>
                </p>
                <p className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("ozone.friendOrFoe.groundLevelDescription")}</span>
                </p>
              </div>

              <div style={{ height: "20px" }}></div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Indoor Air Pollutant Section */}
      <section style={{ paddingBottom: "65px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>{t("ozone.indoorPollutant.title")}</span>
              </h2>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("ozone.indoorPollutant.description")}</span>
              </p>

              <div style={{ height: "20px" }}></div>

              <div style={{ paddingBottom: "25px" }}>
                <h3 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18pt" }}>{t("ozone.harmfulToHumans.title")}</span>
                </h3>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("ozone.harmfulToHumans.description")}</span>
                </p>
              </div>

              {/* Health Effects Row 1 */}
              <div className="row" style={{ paddingBottom: "25px" }}>
                <div className="col-md-6">
                  <div style={{ height: "50px" }}></div>
                  <div>
                    <h4 style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        <Image
                          src="https://www.pranaair.com/wp-content/uploads/2022/12/respiratory-tract-irritation-by-ozone.png"
                          alt={t("ozone.healthEffects.respiratoryIrritation.imageAlt")}
                          width={443}
                          height={227}
                          className="aligncenter"
                        />
                        <strong>{t("ozone.healthEffects.respiratoryIrritation.title")}</strong>
                      </span>
                    </h4>
                    <p style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        {t("ozone.healthEffects.respiratoryIrritation.description")}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h4 style={{ textAlign: "center" }}>
                      <strong>
                        <span style={{ fontSize: "12pt" }}>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/12/skin-irritation-due-to-ozone.png"
                            alt={t("ozone.healthEffects.cough.imageAlt")}
                            width={532}
                            height={372}
                            className="alignnone"
                          />
                        </span>
                      </strong>
                    </h4>
                    <h4 style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        <strong>{t("ozone.healthEffects.cough.title")}</strong>
                      </span>
                    </h4>
                    <p style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>{t("ozone.healthEffects.cough.description")}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Health Effects Row 2 */}
              <div className="row" style={{ paddingTop: "40px" }}>
                <div className="col-md-6">
                  <div>
                    <h4 style={{ textAlign: "center" }}>
                      <strong>
                        <span style={{ fontSize: "12pt" }}>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/12/chest-tightness-due-to-ozone.png"
                            alt={t("ozone.healthEffects.chestTightness.imageAlt")}
                            width={443}
                            height={227}
                            className="alignnone"
                          />
                        </span>
                      </strong>
                    </h4>
                    <h4 style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        <strong>{t("ozone.healthEffects.chestTightness.title")}</strong>
                      </span>
                    </h4>
                    <p style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>{t("ozone.healthEffects.chestTightness.description")}</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h4 style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        <strong>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/12/skin-irritation-due-to-ozone.png"
                            alt={t("ozone.healthEffects.skinIrritation.imageAlt")}
                            width={443}
                            height={227}
                            className="alignnone"
                          />
                        </strong>
                      </span>
                    </h4>
                    <h4 style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        <strong>{t("ozone.healthEffects.skinIrritation.title")}</strong>
                      </span>
                    </h4>
                    <p style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>{t("ozone.healthEffects.skinIrritation.description")}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Health Effects Row 3 */}
              <div className="row" style={{ paddingTop: "60px" }}>
                <div className="col-md-6">
                  <div>
                    <h4 style={{ textAlign: "center" }}>
                      <strong>
                        <span style={{ fontSize: "12pt" }}>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/12/reduced-lung-function-due-to-ozone.png"
                            alt={t("ozone.healthEffects.reducedLungFunction.imageAlt")}
                            width={443}
                            height={227}
                            className="alignnone"
                          />
                        </span>
                      </strong>
                    </h4>
                    <h4 style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        <strong>{t("ozone.healthEffects.reducedLungFunction.title")}</strong>
                      </span>
                    </h4>
                    <p style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        {t("ozone.healthEffects.reducedLungFunction.description")}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h4 style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        <strong>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/12/cellular-damages-due-to-ozone.png"
                            alt={t("ozone.healthEffects.cellularDamage.imageAlt")}
                            width={443}
                            height={227}
                            className="alignnone"
                          />
                        </strong>
                      </span>
                    </h4>
                    <h4 style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>
                        <strong>{t("ozone.healthEffects.cellularDamage.title")}</strong>
                      </span>
                    </h4>
                    <p style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>{t("ozone.healthEffects.cellularDamage.description")}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sources of Ozone Section */}
      <section className="full-width-section" style={{ backgroundColor: "#5987c2", paddingBottom: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="whitetext" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>{t("ozone.sources.title")}</span>
              </h2>
              <p className="whitetext" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("ozone.sources.description")}</span>
              </p>

              <div style={{ height: "50px" }}></div>

              {/* Sources Row 1 */}
              <div className="row" style={{ borderBottomWidth: "50px" }}>
                <div className="col-md-6">
                  <div style={{ height: "20px" }}></div>
                  <div>
                    <h4 className="whitetext" style={{ fontSize: "14pt", textAlign: "center" }}>
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2022/10/photocopier-300x239.png"
                        alt={t("ozone.sources.photocopiers.imageAlt")}
                        width={300}
                        height={239}
                        className="aligncenter"
                      />
                      <strong>
                        <span style={{ fontSize: "14pt" }}>{t("ozone.sources.photocopiers.title")}</span>
                      </strong>
                    </h4>
                    <p className="whitetext" style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>{t("ozone.sources.photocopiers.description")}</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h4 className="whitetext">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/10/air-cleaner-194x300.png"
                            alt={t("ozone.sources.airCleaners.imageAlt")}
                            width={194}
                            height={300}
                            className="aligncenter"
                          />
                        </span>
                      </strong>
                    </h4>
                    <h4 className="whitetext" style={{ textAlign: "center" }}>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>{t("ozone.sources.airCleaners.title")}</span>
                      </strong>
                    </h4>
                    <p className="whitetext" style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>{t("ozone.sources.airCleaners.description")}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Sources Row 2 */}
              <div className="row" style={{ paddingTop: "50px" }}>
                <div className="col-md-6">
                  <div style={{ paddingTop: "40px" }}>
                    <h4 className="whitetext">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/10/electrical-appliances-300x217.png"
                            alt={t("ozone.sources.homeAppliances.imageAlt")}
                            width={300}
                            height={217}
                            className="aligncenter"
                          />
                        </span>
                      </strong>
                    </h4>
                    <h4 className="whitetext" style={{ textAlign: "center" }}>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>{t("ozone.sources.homeAppliances.title")}</span>
                      </strong>
                    </h4>
                    <p className="whitetext" style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>{t("ozone.sources.homeAppliances.description")}</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h4 className="whitetext">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/10/disinfectants-230x300.png"
                            alt={t("ozone.sources.uvLights.imageAlt")}
                            width={230}
                            height={300}
                            className="aligncenter"
                          />
                        </span>
                      </strong>
                    </h4>
                    <h4 className="whitetext" style={{ textAlign: "center" }}>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>{t("ozone.sources.uvLights.title")}</span>
                      </strong>
                    </h4>
                    <p className="whitetext" style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>{t("ozone.sources.uvLights.description")}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Sources Row 3 */}
              <div className="row" style={{ paddingTop: "50px" }}>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div>
                    <h4 className="whitetext">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2022/10/uv-light-233x300.png"
                            alt={t("ozone.sources.disinfectants.imageAlt")}
                            width={233}
                            height={300}
                            className="aligncenter"
                          />
                        </span>
                      </strong>
                    </h4>
                    <h4 className="whitetext" style={{ textAlign: "center" }}>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>{t("ozone.sources.disinfectants.title")}</span>
                      </strong>
                    </h4>
                    <p className="whitetext" style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt" }}>{t("ozone.sources.disinfectants.description")}</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Detect Ozone Section */}
      <section style={{ paddingBottom: "60px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>{t("ozone.detection.title")}</span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("ozone.detection.description")}</span>
              </p>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/10/ozone-monitoring-device-1024x995.png"
                alt={t("ozone.detection.deviceImageAlt")}
                width={597}
                height={580}
                className="aligncenter"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ozone Levels Section */}
      <section style={{ paddingBottom: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fade-in-up">
                <h3 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24pt" }}>{t("ozone.levels.title")}</span>
                </h3>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("ozone.levels.description")}</span>
                </p>
              </div>

              <div style={{ height: "45px" }}></div>

              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                  <div className="fade-in-up">
                    <span style={{ fontSize: "14pt" }}>{t("ozone.levels.good")}</span>
                    <br />
                    <span style={{ fontSize: "14pt" }}>{t("ozone.levels.moderate")}</span>
                    <br />
                    <span style={{ fontSize: "14pt" }}>{t("ozone.levels.poor")}</span>
                    <br />
                    <span style={{ fontSize: "14pt" }}>{t("ozone.levels.unhealthy")}</span>
                    <br />
                    <span style={{ fontSize: "14pt" }}>{t("ozone.levels.severe")}</span>
                    <br />
                    <span style={{ fontSize: "14pt" }}>{t("ozone.levels.hazardous")}</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="fade-in-up">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2022/12/ozone-color-bar.png"
                      alt={t("ozone.levels.colorBarAlt")}
                      width={200}
                      height={200}
                      className="aligncenter"
                    />
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fade-in-up">
                <h3 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24pt" }}>{t("ozone.products.title")}</span>
                </h3>
                <hr />
              </div>
              <MeasureCarousel applications={measureProducts} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

