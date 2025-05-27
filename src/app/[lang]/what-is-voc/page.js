import "./styles.css"
import { getServerTranslation } from "@/i18n/server"
import MeasureCarousel from "@/Components/Pages/CarbonDioxide/measure-co2-slider"
import Image from "next/image"

export default async function VOCPage() {
  const { t } = await getServerTranslation("voc")

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
      {/* Banner Section */}
      <section className="full-width-section bg-green">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="empty-space" style={{ height: "50px" }}></div>
              <div className="text-center fade-in-up">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/voc-gas-icon-281x300.png"
                  alt={t("voc.banner.iconAlt")}
                  width={228}
                  height={243}
                  className="aligncenter"
                />
                <h1 className="whitetext heaidng">{t("voc.banner.title")}</h1>
              </div>
              <div className="text-center fade-in-up">
                <p className="whitetext" style={{ fontSize: "16pt" }}>
                  {t("voc.banner.description")}
                </p>
              </div>
              <div className="text-center fade-in-up">
                <h2 className="whitetext">{t("voc.banner.whyDiscussing.title")}</h2>
                <p className="whitetext" style={{ fontSize: "14pt" }}>
                  {t("voc.banner.whyDiscussing.description")}
                </p>
              </div>
              <div className="text-center fade-in-up">
                <h2 className="whitetext">{t("voc.banner.vocsAndTvocs.title")}</h2>
                <p className="whitetext" style={{ fontSize: "14pt" }}>
                  {t("voc.banner.vocsAndTvocs.description")}
                </p>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Primary Sources of VOCs */}
      <section className="full-width-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center fade-in-up">
                <h2 style={{ fontSize: "32px", paddingTop: "40px", paddingBottom: "30px" }}>
                  {t("voc.sources.title")}
                </h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="fade-in-left">
                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-furniture-300x300.png"
                            alt={t("voc.sources.furniture.imageAlt")}
                            width={184}
                            height={184}
                          />
                          {t("voc.sources.furniture.title")}
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>{t("voc.sources.furniture.description")}</p>
                    <div style={{ clear: "both" }}></div>

                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-vinyl-flooring-300x300.png"
                            alt={t("voc.sources.vinylFlooring.imageAlt")}
                            width={184}
                            height={184}
                          />
                          {t("voc.sources.vinylFlooring.title")}
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>
                      {t("voc.sources.vinylFlooring.description")}
                    </p>
                    <div style={{ clear: "both" }}></div>

                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-carpets-300x300.png"
                            alt={t("voc.sources.carpets.imageAlt")}
                            width={184}
                            height={184}
                          />
                          {t("voc.sources.carpets.title")}
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>{t("voc.sources.carpets.description")}</p>
                    <div style={{ clear: "both" }}></div>

                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-smoking-300x300.png"
                            alt={t("voc.sources.smoking.imageAlt")}
                            width={184}
                            height={184}
                          />
                          {t("voc.sources.smoking.title")}
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>{t("voc.sources.smoking.description")}</p>
                    <div style={{ clear: "both" }}></div>

                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-printers-300x300.png"
                            alt={t("voc.sources.printing.imageAlt")}
                            width={184}
                            height={184}
                          />
                          {t("voc.sources.printing.title")}
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>{t("voc.sources.printing.description")}</p>
                    <div style={{ clear: "both" }}></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="fade-in-right">
                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-perfumes-300x300.png"
                            alt={t("voc.sources.perfumes.imageAlt")}
                            width={184}
                            height={184}
                          />
                          {t("voc.sources.perfumes.title")}
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>{t("voc.sources.perfumes.description")}</p>
                    <div style={{ clear: "both" }}></div>

                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-cleaning-products-300x300.png"
                            alt={t("voc.sources.cleaningProducts.imageAlt")}
                            width={184}
                            height={184}
                          />
                          {t("voc.sources.cleaningProducts.title")}
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>
                      {t("voc.sources.cleaningProducts.description")}
                    </p>
                    <div style={{ clear: "both" }}></div>

                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-paints-300x300.png"
                            alt={t("voc.sources.paints.imageAlt")}
                            width={184}
                            height={184}
                          />
                          {t("voc.sources.paints.title")}
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>{t("voc.sources.paints.description")}</p>
                    <div style={{ clear: "both" }}></div>

                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-markers-or-glue-300x300.png"
                            alt={t("voc.sources.markers.imageAlt")}
                            width={184}
                            height={184}
                          />
                          {t("voc.sources.markers.title")}
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>{t("voc.sources.markers.description")}</p>
                    <div style={{ clear: "both" }}></div>

                    <h4>
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            className="alignleft"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/voc-from-burning-candle-300x300.png"
                            alt={t("voc.sources.candles.imageAlt")}
                            width={184}
                            height={184}
                          />
                          {t("voc.sources.candles.title")}
                        </span>
                      </strong>
                    </h4>
                    <p style={{ textAlign: "justify", fontSize: "12pt" }}>{t("voc.sources.candles.description")}</p>
                    <div style={{ clear: "both" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Effects of VOCs */}
      <section className="full-width-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center fade-in-up">
                <h2 style={{ fontSize: "24pt", paddingTop: "40px", paddingBottom: "30px" }}>
                  {t("voc.healthEffects.title")}
                </h2>
                <p style={{ fontSize: "14pt" }}>{t("voc.healthEffects.description")}</p>
              </div>
              <div className="text-center">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/line-bar-design.png"
                  alt={t("voc.healthEffects.designImageAlt")}
                  width={600}
                  height={100}
                  className="img-fluid"
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="fade-in-up">
                    <h3>
                      <strong>{t("voc.healthEffects.shortTerm.title")}</strong>
                    </h3>
                    <p style={{ fontSize: "12pt", fontStyle: "italic" }}>
                      {t("voc.healthEffects.shortTerm.description")}
                    </p>
                    <div className="text-center">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2022/09/shot-term-health-effects-due-to-voc.png"
                        alt={t("voc.healthEffects.shortTerm.imageAlt")}
                        width={400}
                        height={300}
                        className="img-fluid"
                        style={{ paddingBottom: "15px" }}
                      />
                    </div>
                    <h5>
                      <strong>{t("voc.healthEffects.shortTerm.eyeIrritation.title")}</strong>
                    </h5>
                    <p style={{ fontSize: "12pt" }}>{t("voc.healthEffects.shortTerm.eyeIrritation.description")}</p>
                    <h5>
                      <strong>{t("voc.healthEffects.shortTerm.skinProblems.title")}</strong>
                    </h5>
                    <p style={{ fontSize: "12pt" }}>{t("voc.healthEffects.shortTerm.skinProblems.description")}</p>
                    <h5>
                      <strong>{t("voc.healthEffects.shortTerm.headaches.title")}</strong>
                    </h5>
                    <p style={{ fontSize: "12pt" }}>{t("voc.healthEffects.shortTerm.headaches.description")}</p>
                    <h5>
                      <strong>{t("voc.healthEffects.shortTerm.vomiting.title")}</strong>
                    </h5>
                    <p style={{ fontSize: "12pt" }}>{t("voc.healthEffects.shortTerm.vomiting.description")}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="fade-in-up">
                    <h3>{t("voc.healthEffects.longTerm.title")}</h3>
                    <p style={{ fontSize: "12pt", fontStyle: "italic" }}>
                      {t("voc.healthEffects.longTerm.description")}
                    </p>
                    <div className="text-center">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2022/09/long-term-health-effects-due-to-voc.png"
                        alt={t("voc.healthEffects.longTerm.imageAlt")}
                        width={400}
                        height={300}
                        className="img-fluid"
                        style={{ paddingBottom: "15px" }}
                      />
                    </div>
                    <h5>
                      <strong>{t("voc.healthEffects.longTerm.lungIrritation.title")}</strong>
                    </h5>
                    <p style={{ fontSize: "12pt" }}>{t("voc.healthEffects.longTerm.lungIrritation.description")}</p>
                    <h5>
                      <strong>{t("voc.healthEffects.longTerm.organDamage.title")}</strong>
                    </h5>
                    <p style={{ fontSize: "12pt" }}>{t("voc.healthEffects.longTerm.organDamage.description")}</p>
                    <h5>
                      <strong>{t("voc.healthEffects.longTerm.nervousSystem.title")}</strong>
                    </h5>
                    <p style={{ fontSize: "12pt" }}>{t("voc.healthEffects.longTerm.nervousSystem.description")}</p>
                    <h5>
                      <strong>{t("voc.healthEffects.longTerm.cancer.title")}</strong>
                    </h5>
                    <p style={{ fontSize: "12pt" }}>{t("voc.healthEffects.longTerm.cancer.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preventive Measures */}
      <section className="full-width-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center fade-in-up">
                <h2 style={{ paddingTop: "40px", paddingBottom: "30px" }}>{t("voc.preventiveMeasures.title")}</h2>
                <p style={{ fontSize: "14pt" }}>{t("voc.preventiveMeasures.description")}</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="fade-in-up">
                    <h4 className="text-center">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            className="aligncenter"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/maintain-good-ventilation-300x300.png"
                            alt={t("voc.preventiveMeasures.ventilation.imageAlt")}
                            width={240}
                            height={240}
                          />
                          {t("voc.preventiveMeasures.ventilation.title")}
                        </span>
                      </strong>
                    </h4>
                    <p className="text-center">{t("voc.preventiveMeasures.ventilation.description")}</p>
                    <h4 className="text-center">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            className="aligncenter"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/climate-control-300x300.png"
                            alt={t("voc.preventiveMeasures.climateControl.imageAlt")}
                            width={240}
                            height={240}
                          />
                          {t("voc.preventiveMeasures.climateControl.title")}
                        </span>
                      </strong>
                    </h4>
                    <p className="text-center">{t("voc.preventiveMeasures.climateControl.description")}</p>
                    <h4 className="text-center">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            className="aligncenter"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/dispose-unused-chemicals-300x300.png"
                            alt={t("voc.preventiveMeasures.disposeChemicals.imageAlt")}
                            width={240}
                            height={240}
                          />
                          {t("voc.preventiveMeasures.disposeChemicals.title")}
                        </span>
                      </strong>
                    </h4>
                    <p className="text-center">{t("voc.preventiveMeasures.disposeChemicals.description")}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="fade-in-up">
                    <h4 className="text-center">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            className="aligncenter"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/avoid-chemical-leakage-300x300.png"
                            alt={t("voc.preventiveMeasures.checkLeakages.imageAlt")}
                            width={240}
                            height={240}
                          />
                          {t("voc.preventiveMeasures.checkLeakages.title")}
                        </span>
                      </strong>
                    </h4>
                    <p className="text-center">{t("voc.preventiveMeasures.checkLeakages.description")}</p>
                    <h4 className="text-center">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            className="aligncenter"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/right-time-for-house-renovations-300x300.png"
                            alt={t("voc.preventiveMeasures.renovationTiming.imageAlt")}
                            width={240}
                            height={240}
                          />
                          {t("voc.preventiveMeasures.renovationTiming.title")}
                        </span>
                      </strong>
                    </h4>
                    <p className="text-center">{t("voc.preventiveMeasures.renovationTiming.description")}</p>
                    <h4 className="text-center">
                      <strong>
                        <span style={{ fontSize: "14pt" }}>
                          <Image
                            className="aligncenter"
                            src="https://www.pranaair.com/wp-content/uploads/2022/09/control-the-sources-300x300.png"
                            alt={t("voc.preventiveMeasures.controlSources.imageAlt")}
                            width={240}
                            height={240}
                          />
                          {t("voc.preventiveMeasures.controlSources.title")}
                        </span>
                      </strong>
                    </h4>
                    <p className="text-center">{t("voc.preventiveMeasures.controlSources.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <section className="full-width-section product-carousel-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center fade-in-up">
                <h3 style={{ fontSize: "24pt" }}>{t("voc.products.title")}</h3>
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

