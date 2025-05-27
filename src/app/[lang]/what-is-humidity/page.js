import Image from "next/image"
import "./styles.css"
import MeasureCarousel from "@/Components/Pages/CarbonDioxide/measure-co2-slider"
import { getServerTranslation } from "@/i18n/server"

export default async function HumidityPage() {
  const { t } = await getServerTranslation("humidity")
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
      <section className="full-width-section blue-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
              <div className="empty-space" style={{ height: "50px" }}></div>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-icon.png"
                alt={t("humidity.hero.iconAlt")}
                width={200}
                height={200}
                className="center-image"
              />
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "15px" }}>
                <h1 className="whitetext" style={{ textAlign: "center", fontSize: "50pt", lineHeight: "1.1" }}>
                  {t("humidity.hero.title")}
                </h1>
              </div>
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "40px", paddingBottom: "30px" }}>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "16pt" }}>
                  {t("humidity.hero.description")}
                </p>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Where does Humidity come from? */}
      <section className="full-width-section blue-bg" style={{ paddingBottom: "80px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "15px", paddingBottom: "20px" }}>
                <h2 className="whitetext" style={{ textAlign: "center", fontSize: "24pt", lineHeight: "1.1" }}>
                  {t("humidity.origin.title")}
                </h2>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "16pt" }}>
                  {t("humidity.origin.description")}
                </p>
              </div>
              <div className="image-box text-center">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/humidity-cloud-image.png"
                  alt={t("humidity.origin.imageAlt")}
                  width={500}
                  height={300}
                  className="center-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relative & Absolute Humidity */}
      <section className="full-width-section blue-bg" style={{ paddingBottom: "80px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "40px" }}>
                <h2 className="whitetext" style={{ textAlign: "center", fontSize: "20pt" }}>
                  {t("humidity.types.title")}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "40px" }}>
                <h2 className="whitetext" style={{ textAlign: "center", fontSize: "18pt" }}>
                  <strong>{t("humidity.types.relative.title")}</strong>
                </h2>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  {t("humidity.types.relative.description")}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "40px" }}>
                <h2 className="whitetext" style={{ textAlign: "center", fontSize: "18pt" }}>
                  <strong>{t("humidity.types.absolute.title")}</strong>
                </h2>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  {t("humidity.types.absolute.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Are humidity and moisture the same? */}
      <section className="full-width-section blue-bg" style={{ paddingTop: "50px", paddingBottom: "30px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "40px", paddingBottom: "30px" }}>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/09/humidity-icon.png"
                  alt={t("humidity.moisture.iconAlt")}
                  width={195}
                  height={194}
                  className="center-image"
                />
                <h2 className="whitetext" style={{ textAlign: "center" }}>
                  {t("humidity.moisture.title")}
                </h2>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  {t("humidity.moisture.description")}
                </p>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>

      {/* Factors that affect Humidity Level */}
      <section className="full-width-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "40px", paddingBottom: "30px" }}>
                <h2 style={{ textAlign: "center", fontSize: "24pt" }}>{t("humidity.factors.title")}</h2>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingBottom: "50px" }}>
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingBottom: "40px" }}>
                <h3 style={{ textAlign: "center", fontSize: "18pt" }}>{t("humidity.factors.outdoor.title")}</h3>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-air-movement.png"
                    alt={t("humidity.factors.outdoor.airMovement.alt")}
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>{t("humidity.factors.outdoor.airMovement.title")}</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>{t("humidity.factors.outdoor.airMovement.description")}</p>
                </div>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-high-temperature.png"
                    alt={t("humidity.factors.outdoor.temperature.alt")}
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>{t("humidity.factors.outdoor.temperature.title")}</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>{t("humidity.factors.outdoor.temperature.description")}</p>
                </div>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-wind-speed.png"
                    alt={t("humidity.factors.outdoor.windSpeed.alt")}
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>{t("humidity.factors.outdoor.windSpeed.title")}</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>{t("humidity.factors.outdoor.windSpeed.description")}</p>
                </div>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-precipitation.png"
                    alt={t("humidity.factors.outdoor.precipitation.alt")}
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>{t("humidity.factors.outdoor.precipitation.title")}</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>{t("humidity.factors.outdoor.precipitation.description")}</p>
                </div>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-air-pressure.png"
                    alt={t("humidity.factors.outdoor.airPressure.alt")}
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>{t("humidity.factors.outdoor.airPressure.title")}</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>{t("humidity.factors.outdoor.airPressure.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-box">
                <h3 style={{ textAlign: "center", fontSize: "18pt" }}>{t("humidity.factors.indoor.title")}</h3>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-cooking.png"
                    alt={t("humidity.factors.indoor.cooking.alt")}
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>{t("humidity.factors.indoor.cooking.title")}</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>{t("humidity.factors.indoor.cooking.description")}</p>
                </div>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-gas-heaters.png"
                    alt={t("humidity.factors.indoor.gasHeaters.alt")}
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>{t("humidity.factors.indoor.gasHeaters.title")}</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>{t("humidity.factors.indoor.gasHeaters.description")}</p>
                </div>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidit-due-to-ventilation-rate.png"
                    alt={t("humidity.factors.indoor.ventilation.alt")}
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>{t("humidity.factors.indoor.ventilation.title")}</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>{t("humidity.factors.indoor.ventilation.description")}</p>
                </div>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-drying-clothes.png"
                    alt={t("humidity.factors.indoor.dryingClothes.alt")}
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>{t("humidity.factors.indoor.dryingClothes.title")}</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>{t("humidity.factors.indoor.dryingClothes.description")}</p>
                </div>
                <div className="factor-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/humidity-due-to-water-leakages.png"
                    alt={t("humidity.factors.indoor.waterLeakages.alt")}
                    width={100}
                    height={100}
                    className="alignleft"
                  />
                  <h4>
                    <span style={{ color: "#179bbf" }}>{t("humidity.factors.indoor.waterLeakages.title")}</span>
                  </h4>
                  <p style={{ fontSize: "14pt" }}>{t("humidity.factors.indoor.waterLeakages.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens When Humidity Level Is Very Low & High? */}
      <section className="full-width-section light-green-bg" style={{ paddingTop: "50px", paddingBottom: "30px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box animation-fadeInUp" style={{ paddingBottom: "50px" }}>
                <h2 style={{ textAlign: "center", fontSize: "24pt" }}>{t("humidity.effects.title")}</h2>
                <p style={{ textAlign: "center", fontSize: "14pt" }}>{t("humidity.effects.description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingBottom: "40px" }}>
                <h3 style={{ textAlign: "center", fontSize: "18pt" }}>{t("humidity.effects.high.title")}</h3>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/mold-and-mildew-due-to-high-humidity.png"
                    alt={t("humidity.effects.high.mold.alt")}
                    width={150}
                    height={150}
                    className="alignleft"
                  />
                  <h4 style={{ textAlign: "left" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>
                        {t("humidity.effects.high.mold.title")}
                      </span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "left", fontSize: "14pt" }}>{t("humidity.effects.high.mold.description")}</p>
                </div>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/bacteria-due-to-humidity.png"
                    alt={t("humidity.effects.high.bacteria.alt")}
                    width={150}
                    height={150}
                    className="alignleft"
                  />
                  <h4 style={{ textAlign: "left" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>
                        {t("humidity.effects.high.bacteria.title")}
                      </span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "left", fontSize: "14pt" }}>
                    {t("humidity.effects.high.bacteria.description")}
                  </p>
                </div>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/excess-sweating.png"
                    alt={t("humidity.effects.high.sweating.alt")}
                    width={150}
                    height={150}
                    className="alignleft"
                  />
                  <h4 style={{ textAlign: "left" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>
                        {t("humidity.effects.high.sweating.title")}
                      </span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "left", fontSize: "14pt" }}>
                    {t("humidity.effects.high.sweating.description")}
                  </p>
                </div>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/increase-respiratory.png"
                    alt={t("humidity.effects.high.respiration.alt")}
                    width={150}
                    height={150}
                    className="alignleft"
                  />
                  <h4 style={{ textAlign: "left" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>
                        {t("humidity.effects.high.respiration.title")}
                      </span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "left", fontSize: "14pt" }}>
                    {t("humidity.effects.high.respiration.description")}
                  </p>
                </div>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/wall-damage.png"
                    alt={t("humidity.effects.high.damage.alt")}
                    width={150}
                    height={150}
                    className="alignleft"
                  />
                  <h4 style={{ textAlign: "left" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>
                        {t("humidity.effects.high.damage.title")}
                      </span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "left", fontSize: "14pt" }}>{t("humidity.effects.high.damage.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-box">
                <h3 style={{ textAlign: "center", fontSize: "18pt" }}>{t("humidity.effects.low.title")}</h3>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/germs-and-virus-with-low-humidity.png"
                    alt={t("humidity.effects.low.germs.alt")}
                    width={150}
                    height={150}
                    className="alignright"
                  />
                  <h4 style={{ textAlign: "right" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>
                        {t("humidity.effects.low.germs.title")}
                      </span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "right", fontSize: "14pt" }}>{t("humidity.effects.low.germs.description")}</p>
                </div>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/sceptibility-to-respiratory.png"
                    alt={t("humidity.effects.low.respiratory.alt")}
                    width={150}
                    height={150}
                    className="alignright"
                  />
                  <h4 style={{ textAlign: "right" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>
                        {t("humidity.effects.low.respiratory.title")}
                      </span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "right", fontSize: "14pt" }}>
                    {t("humidity.effects.low.respiratory.description")}
                  </p>
                </div>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/dry-skin.png"
                    alt={t("humidity.effects.low.drySkin.alt")}
                    width={150}
                    height={150}
                    className="alignright"
                  />
                  <h4 style={{ textAlign: "right" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>
                        {t("humidity.effects.low.drySkin.title")}
                      </span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "right", fontSize: "14pt" }}>
                    {t("humidity.effects.low.drySkin.description")}
                  </p>
                </div>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/influenza.png"
                    alt={t("humidity.effects.low.influenza.alt")}
                    width={150}
                    height={150}
                    className="alignright"
                  />
                  <h4 style={{ textAlign: "right" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>
                        {t("humidity.effects.low.influenza.title")}
                      </span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "right", fontSize: "14pt" }}>
                    {t("humidity.effects.low.influenza.description")}
                  </p>
                </div>
                <div className="effect-item">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/low-performance-of-student.png"
                    alt={t("humidity.effects.low.performance.alt")}
                    width={150}
                    height={150}
                    className="alignright"
                  />
                  <h4 style={{ textAlign: "right" }}>
                    <strong>
                      <span style={{ color: "#179bbf", fontSize: "14pt" }}>
                        {t("humidity.effects.low.performance.title")}
                      </span>
                    </strong>
                  </h4>
                  <p style={{ textAlign: "right", fontSize: "14pt" }}>
                    {t("humidity.effects.low.performance.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How To Maintain the Good Humidity Indoor? */}
      <section className="full-width-section blue-bg" style={{ marginTop: "30px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box animation-fadeInUp" style={{ paddingTop: "30px", paddingBottom: "50px" }}>
                <h2 className="whitetext" style={{ textAlign: "center", fontSize: "24pt" }}>
                  {t("humidity.maintenance.title")}
                </h2>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "18pt" }}>
                  {t("humidity.maintenance.subtitle")}
                </p>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingBottom: "35px" }}>
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingBottom: "15px" }}>
                <div className="text-center">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/fix-leakage.png"
                    alt={t("humidity.maintenance.fixLeakage.alt")}
                    width={200}
                    height={195}
                    className="center-image"
                  />
                </div>
                <h4 className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  <strong>{t("humidity.maintenance.fixLeakage.title")}</strong>
                </h4>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  {t("humidity.maintenance.fixLeakage.description")}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingBottom: "15px" }}>
                <div className="text-center">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/dry-cloths-outside-300x174.png"
                    alt={t("humidity.maintenance.dryOutside.alt")}
                    width={316}
                    height={183}
                    className="center-image"
                  />
                </div>
                <h4 className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  <strong>{t("humidity.maintenance.dryOutside.title")}</strong>
                </h4>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  {t("humidity.maintenance.dryOutside.description")}
                </p>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingBottom: "35px" }}>
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingBottom: "15px" }}>
                <div className="text-center">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/relocate-indoor-plants-300x155.png"
                    alt={t("humidity.maintenance.relocatePlants.alt")}
                    width={300}
                    height={155}
                    className="center-image"
                  />
                </div>
                <h4 className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  <strong>{t("humidity.maintenance.relocatePlants.title")}</strong>
                </h4>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  {t("humidity.maintenance.relocatePlants.description")}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingBottom: "15px" }}>
                <div className="text-center">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/use-a-dehumidifier.png"
                    alt={t("humidity.maintenance.dehumidifier.alt")}
                    width={112}
                    height={154}
                    className="center-image"
                  />
                </div>
                <h4 className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  <strong>{t("humidity.maintenance.dehumidifier.title")}</strong>
                </h4>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  {t("humidity.maintenance.dehumidifier.description")}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="content-box animation-fadeInUp" style={{ paddingBottom: "15px" }}>
                <div className="text-center">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/use-charcoal-pieces.png"
                    alt={t("humidity.maintenance.charcoal.alt")}
                    width={234}
                    height={213}
                    className="center-image"
                  />
                </div>
                <h4 className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  <strong>{t("humidity.maintenance.charcoal.title")}</strong>
                </h4>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  {t("humidity.maintenance.charcoal.description")}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-box">
                <div className="text-center">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/open-windows.png"
                    alt={t("humidity.maintenance.openWindows.alt")}
                    width={194}
                    height={199}
                    className="center-image"
                  />
                </div>
                <h4 className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  <strong>{t("humidity.maintenance.openWindows.title")}</strong>
                </h4>
                <p className="whitetext" style={{ textAlign: "center", fontSize: "14pt" }}>
                  {t("humidity.maintenance.openWindows.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Humidity levels and what do they mean? */}
      <section className="full-width-section light-green-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box animation-fadeInUp" style={{ marginBottom: "30px", paddingTop: "30px" }}>
                <h2 style={{ textAlign: "center" }}>{t("humidity.levels.title")}</h2>
                <p style={{ textAlign: "center", fontSize: "14pt" }}>{t("humidity.levels.subtitle")}</p>

                <table
                  className="humidity-table"
                  style={{ width: "98.7412%", height: "164px" }}
                  border="1"
                  cellSpacing="0"
                  cellPadding="0"
                >
                  <tbody>
                    <tr style={{ height: "27px" }}>
                      <td style={{ textAlign: "center", width: "22.6893%", height: "27px" }}>
                        <span style={{ fontSize: "12pt" }}>
                          <strong>
                            <span style={{ color: "#000000" }}>{t("humidity.levels.table.humidityLevel")}</span>
                          </strong>
                        </span>
                      </td>
                      <td style={{ textAlign: "center", width: "173.118%", height: "27px" }}>
                        <span style={{ fontSize: "12pt" }}>
                          <strong>
                            <span style={{ color: "#000000" }}>{t("humidity.levels.table.meaning")}</span>
                          </strong>
                        </span>
                      </td>
                    </tr>
                    <tr style={{ height: "55px" }}>
                      <td style={{ width: "22.6893%", textAlign: "center", height: "55px" }}>
                        <span style={{ color: "#000000", fontSize: "12pt" }}>= 70%</span>
                      </td>
                      <td style={{ width: "173.118%", height: "55px", textAlign: "left" }}>
                        <span style={{ color: "#000000", fontSize: "12pt" }}>
                          {t("humidity.levels.table.seventyPercent")}
                        </span>
                      </td>
                    </tr>
                    <tr style={{ height: "27px" }}>
                      <td style={{ width: "22.6893%", textAlign: "center", height: "27px" }}>
                        <span style={{ color: "#000000", fontSize: "12pt" }}>30-60%</span>
                      </td>
                      <td style={{ width: "173.118%", height: "27px", textAlign: "left" }}>
                        <span style={{ color: "#000000", fontSize: "12pt" }}>{t("humidity.levels.table.ideal")}</span>
                      </td>
                    </tr>
                    <tr style={{ height: "55px" }}>
                      <td style={{ width: "22.6893%", textAlign: "center", height: "55px" }}>
                        <span style={{ color: "#000000", fontSize: "12pt" }}>&gt;30%</span>
                      </td>
                      <td style={{ width: "173.118%", height: "55px", textAlign: "left" }}>
                        <span style={{ color: "#000000", fontSize: "12pt" }}>
                          {t("humidity.levels.table.belowThirty")}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p style={{ textAlign: "center", fontSize: "14pt" }}>{t("humidity.levels.conclusion")}</p>
              </div>

              <div className="content-box animation-fadeInUp" style={{ paddingTop: "30px" }}>
                <h2 style={{ textAlign: "center", fontSize: "18pt" }}>{t("humidity.who.title")}</h2>
                <table className="who-table" style={{ width: "90.9916%" }} border="1" cellSpacing="0" cellPadding="0">
                  <tbody>
                    <tr>
                      <td style={{ width: "47.0358%", textAlign: "center" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>
                          <strong>{t("humidity.who.table.measure")}</strong>
                        </span>
                      </td>
                      <td style={{ width: "90.0448%", textAlign: "center" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>
                          <strong>{t("humidity.who.table.riskEstimate")}</strong>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "47.0358%" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>
                          {t("humidity.who.table.selfReported")}
                        </span>
                      </td>
                      <td style={{ width: "90.0448%", textAlign: "left" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>{t("humidity.who.table.coldRisk")}</span>
                        <br />
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>
                          {t("humidity.who.table.soreThroatRisk")}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "47.0358%" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>{t("humidity.who.table.signsHigh")}</span>
                      </td>
                      <td style={{ width: "90.0448%", textAlign: "left" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>
                          {t("humidity.who.table.signsHighRisk")}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "47.0358%" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>
                          {t("humidity.who.table.absoluteIndoor")}
                        </span>
                      </td>
                      <td style={{ width: "90.0448%", textAlign: "left" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>
                          {t("humidity.who.table.absoluteRisk")}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "47.0358%" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>{t("humidity.who.table.relative45")}</span>
                      </td>
                      <td style={{ width: "90.0448%", textAlign: "left" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>
                          {t("humidity.who.table.relative45Risk")}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "47.0358%" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>
                          {t("humidity.who.table.absoluteLevel")}
                        </span>
                      </td>
                      <td style={{ width: "90.0448%", textAlign: "left" }}>
                        <span style={{ fontSize: "12pt", color: "#2e2d2d" }}>
                          {t("humidity.who.table.absoluteLevelRisk")}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Air Quality Monitor */}
      <section className="full-width-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box">
                <h3 style={{ textAlign: "center", fontSize: "24pt" }}>{t("humidity.monitor.title")}</h3>
                <hr />
              </div>
              <div className="product-carousel">
                <MeasureCarousel applications={measureProducts} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

