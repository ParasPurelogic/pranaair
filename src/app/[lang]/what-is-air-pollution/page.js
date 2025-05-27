import "./styles.css"
import Image from "next/image"
import Link from "next/link"
import { getServerTranslation } from "@/i18n/server"

export default async function AirPollution() {
  const { t } = await getServerTranslation("pollution")
  return (
    <main>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2023/02/air-pollution.png?id=67100)",
        }}
      >
        <div className="container">
          <div className="hero-content">
            <h2 className="whitetext" style={{ fontSize: "24pt" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/02/air-icon.png"
                alt={t("hero.iconAlt")}
                width={38}
                height={22}
                style={{ display: "inline", marginRight: "10px" }}
              />
              {t("hero.title")}
            </h2>
            <p
              className="whitetext"
              style={{ textAlign: "left", wordWrap: "break-word", width: "auto", fontSize: "16pt" }}
            >
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* What is Air Pollution Section */}
      <section className="what-is-section">
        <div className="container">
          <div className="content-wrapper">
            <Image
              className="full-width-image"
              src="https://www.pranaair.com/wp-content/uploads/2023/02/what-is-air-pollution-and-causes-1024x491.jpg"
              alt={t("whatIs.imageAlt")}
              width={1024}
              height={491}
            />

            <h1 style={{ textAlign: "center", marginTop: "20px" }}>
              <strong>
                <span style={{ fontSize: "24pt" }}>
                  <span style={{ color: "#2a2a2c" }}>{t("whatIs.titlePart1")}</span>{" "}
                  <span style={{ color: "#0687e3" }}>{t("whatIs.titlePart2")}</span>
                </span>
              </strong>
            </h1>

            <p style={{ textAlign: "center", fontSize: "14pt" }}>{t("whatIs.description")}</p>
          </div>
        </div>
      </section>

      {/* Air Contaminants Section */}
      <section className="contaminants-section">
        <div className="container">
          <h2 className="air_heading" style={{ fontSize: "24pt" }}>
            {t("contaminants.title")}
          </h2>

          <div className="contaminant-item">
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "36pt" }}>01</span>{" "}
              <span style={{ fontSize: "20pt" }}>{t("contaminants.pm.title")}</span>
            </h3>
            <p style={{ textAlign: "center", fontSize: "14pt" }}>{t("contaminants.pm.description")}</p>
          </div>

          <div className="card2-container">
            <div className="card2">
              <Link href="/air-quality-monitor">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/pm1-parameter.png"
                  alt={t("contaminants.pm.pm1Alt")}
                  width={116}
                  height={108}
                />
              </Link>
            </div>
            <div className="card2">
              <Link href="/air-quality-monitor">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/pm2.5-pollutant-icon.png"
                  alt={t("contaminants.pm.pm25Alt")}
                  width={116}
                  height={108}
                />
              </Link>
            </div>
            <div className="card2">
              <Link href="/air-quality-monitor">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/pm10-pollutant-icon.png"
                  alt={t("contaminants.pm.pm10Alt")}
                  width={116}
                  height={108}
                />
              </Link>
            </div>
          </div>

          <div className="contaminant-item" style={{ marginTop: "40px" }}>
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "36pt" }}>02</span>{" "}
              <span style={{ fontSize: "20pt" }}>{t("contaminants.gases.title")}</span>
            </h3>
            <p style={{ textAlign: "center", fontSize: "14pt" }}>{t("contaminants.gases.description")}</p>
          </div>

          <div className="card-container">
            <div className="card">
              <Link href="/air-quality-monitor">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/no2-icon.png"
                  alt={t("contaminants.gases.no2Alt")}
                  width={166}
                  height={155}
                />
              </Link>
            </div>
            <div className="card">
              <Link href="/air-quality-monitor">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/so2-icon.png"
                  alt={t("contaminants.gases.so2Alt")}
                  width={166}
                  height={155}
                />
              </Link>
            </div>
            <div className="card">
              <Link href="/air-quality-monitor">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/co2-gas-icon.png"
                  alt={t("contaminants.gases.co2Alt")}
                  width={166}
                  height={155}
                />
              </Link>
            </div>
            <div className="card">
              <Link href="/air-quality-monitor">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/co.png"
                  alt={t("contaminants.gases.coAlt")}
                  width={166}
                  height={155}
                />
              </Link>
            </div>
            <div className="card">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/02/ch4-icon.png"
                alt={t("contaminants.gases.ch4Alt")}
                width={166}
                height={155}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Air Pollution Section */}
      <section className="types-section">
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center", fontSize: "24pt" }}>
            {t("types.title")} <span style={{ color: "#0687e3" }}>{t("types.titleHighlight")}</span>
          </h2>

          <div className="pollution-type">
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "36pt" }}>01</span>{" "}
              <span style={{ fontSize: "20pt" }}>{t("types.indoor.title")}</span>
            </h3>
            <p style={{ textAlign: "center", fontSize: "14pt" }}>{t("types.indoor.description")}</p>

            <Image
              className="full-width-image"
              src="https://www.pranaair.com/wp-content/uploads/2023/02/indoor-air-pollution-1024x653.jpg"
              alt={t("types.indoor.imageAlt")}
              width={832}
              height={530}
            />
          </div>

          <div className="pollution-type" style={{ marginTop: "40px" }}>
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "36pt" }}>02</span>{" "}
              <span style={{ fontSize: "20pt" }}>{t("types.outdoor.title")}</span>
            </h3>
            <p style={{ textAlign: "center", fontSize: "14pt" }}>{t("types.outdoor.description")}</p>

            <Image
              className="full-width-image"
              src="https://www.pranaair.com/wp-content/uploads/2023/02/outdoor-air-pollution-sources-1024x815.jpg"
              alt={t("types.outdoor.imageAlt")}
              width={841}
              height={670}
            />
          </div>

          <div className="saveyourfuture_box">
            <span className="future_img">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/02/save-your-future.png"
                alt={t("types.quote.imageAlt")}
                width={100}
                height={100}
              />
            </span>
            <h3>
              <span style={{ fontSize: "16pt", color: "#0687e3" }}>
                <em>{t("types.quote.text")}</em>
              </span>
            </h3>
          </div>
        </div>
      </section>

      {/* Air Quality Index Section */}
      <section className="aqi-section">
        <div className="container">
          <h3 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "18pt" }}>{t("aqi.question1")}</span>
            <br />
            <span style={{ color: "#0687e3", fontSize: "18pt" }}>{t("aqi.question2")}</span>
          </h3>

          <div className="aqi-content">
            <div className="aqi-text">
              <p style={{ textAlign: "center", fontSize: "14pt" }}>{t("aqi.description")}</p>
            </div>
            <div className="aqi-image">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/02/aqi-air-quality-index-mobile-app-263x300.jpg"
                alt={t("aqi.imageAlt")}
                width={408}
                height={466}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pollution Sources Section */}
      <section className="sources-section">
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "24pt" }}>
            {t("sources.title")} <span style={{ color: "#0687e3" }}>{t("sources.titleHighlight")}</span>
          </h2>

          {/* Indoor Pollution Sources */}
          <div className="pollution-sources">
            <button className="source-button">{t("sources.indoor.buttonText")}</button>
            <p
              className="air_heading"
              style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}
            >
              {t("sources.indoor.description")}
            </p>

            <div className="sources-grid">
              <div className="source-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/tobacco-smoke.png"
                  alt={t("sources.indoor.items.tobacco.imageAlt")}
                  width={300}
                  height={300}
                />
                <h3>
                  <strong>{t("sources.indoor.items.tobacco.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  {t("sources.indoor.items.tobacco.description")}
                </p>
              </div>

              <div className="source-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/burning-fuels.png"
                  alt={t("sources.indoor.items.fuels.imageAlt")}
                  width={300}
                  height={300}
                />
                <h3>
                  <strong>{t("sources.indoor.items.fuels.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  {t("sources.indoor.items.fuels.description")}
                </p>
              </div>

              <div className="source-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/air-freshener.png"
                  alt={t("sources.indoor.items.fresheners.imageAlt")}
                  width={300}
                  height={300}
                />
                <h3>
                  <strong>{t("sources.indoor.items.fresheners.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  {t("sources.indoor.items.fresheners.description")}
                </p>
              </div>

              <div className="source-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/cooking-fumes.png"
                  alt={t("sources.indoor.items.cooking.imageAlt")}
                  width={300}
                  height={300}
                />
                <h3>
                  <strong>{t("sources.indoor.items.cooking.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  {t("sources.indoor.items.cooking.description")}
                </p>
              </div>

              <div className="source-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/pet-dander.png"
                  alt={t("sources.indoor.items.petDander.imageAlt")}
                  width={300}
                  height={300}
                />
                <h3>
                  <strong>{t("sources.indoor.items.petDander.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  {t("sources.indoor.items.petDander.description")}
                </p>
              </div>

              <div className="source-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/photocopiers-and-printer.png"
                  alt={t("sources.indoor.items.printers.imageAlt")}
                  width={300}
                  height={300}
                />
                <h3>
                  <strong>{t("sources.indoor.items.printers.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  {t("sources.indoor.items.printers.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Outdoor Pollution Sources */}
          <div className="pollution-sources">
            <button className="source-button">{t("sources.outdoor.buttonText")}</button>
            <p
              className="air_heading"
              style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}
            >
              {t("sources.outdoor.description")}
            </p>

            <div className="sources-grid">
              <div className="source-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/power-plant.png"
                  alt={t("sources.outdoor.items.powerPlant.imageAlt")}
                  width={300}
                  height={300}
                />
                <h3>
                  <strong>{t("sources.outdoor.items.powerPlant.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  {t("sources.outdoor.items.powerPlant.description")}
                </p>
              </div>

              <div className="source-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/garbage-burning.png"
                  alt={t("sources.outdoor.items.garbage.imageAlt")}
                  width={300}
                  height={300}
                />
                <h3>
                  <strong>{t("sources.outdoor.items.garbage.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  {t("sources.outdoor.items.garbage.description")}
                </p>
              </div>

              <div className="source-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/cd-activities.png"
                  alt={t("sources.outdoor.items.construction.imageAlt")}
                  width={300}
                  height={300}
                />
                <h3>
                  <strong>{t("sources.outdoor.items.construction.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  {t("sources.outdoor.items.construction.description")}
                </p>
              </div>

              <div className="source-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/unpaved-roads.png"
                  alt={t("sources.outdoor.items.roads.imageAlt")}
                  width={300}
                  height={300}
                />
                <h3>
                  <strong>{t("sources.outdoor.items.roads.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  {t("sources.outdoor.items.roads.description")}
                </p>
              </div>

              <div className="source-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/oil-refineries.png"
                  alt={t("sources.outdoor.items.refineries.imageAlt")}
                  width={300}
                  height={300}
                />
                <h3>
                  <strong>{t("sources.outdoor.items.refineries.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  {t("sources.outdoor.items.refineries.description")}
                </p>
              </div>

              <div className="source-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/wildfires-volcanic-eruptions.png"
                  alt={t("sources.outdoor.items.wildfires.imageAlt")}
                  width={300}
                  height={300}
                />
                <h3>
                  <strong>{t("sources.outdoor.items.wildfires.title")}</strong>
                </h3>
                <p style={{ textAlign: "center", wordWrap: "break-word", width: "100%", fontSize: "14pt" }}>
                  {t("sources.outdoor.items.wildfires.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Impacts Section */}
      <section className="health-impacts-section">
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center", fontSize: "24pt" }}>
            {t("healthImpacts.title")} <span style={{ color: "#0687e3" }}>{t("healthImpacts.titleHighlight")}</span>
          </h2>

          <div className="health-impacts-content">
            <div className="health-impact-boxes left">
              <div className="impact-box">
                <p style={{ textAlign: "center", fontSize: "16pt", color: "#646478" }}>
                  {t("healthImpacts.impacts.left.impact1")}
                </p>
              </div>

              <div className="impact-box">
                <p style={{ textAlign: "center", fontSize: "16pt", color: "#646478" }}>
                  {t("healthImpacts.impacts.left.impact2")}
                </p>
              </div>

              <div className="impact-box">
                <p style={{ textAlign: "center", fontSize: "16pt", color: "#646478" }}>
                  {t("healthImpacts.impacts.left.impact3")}
                </p>
              </div>
            </div>

            <div className="health-impact-image">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/02/health-impacts-by-air-pollution-814x1024.png"
                alt={t("healthImpacts.imageAlt")}
                width={389}
                height={489}
              />
            </div>

            <div className="health-impact-boxes right">
              <div className="impact-box">
                <p style={{ textAlign: "center", fontSize: "16pt", color: "#646478" }}>
                  {t("healthImpacts.impacts.right.impact1")}
                </p>
              </div>

              <div className="impact-box">
                <p style={{ textAlign: "center", fontSize: "16pt", color: "#646478" }}>
                  {t("healthImpacts.impacts.right.impact2")}
                </p>
              </div>

              <div className="impact-box">
                <p style={{ textAlign: "center", fontSize: "16pt", color: "#646478" }}>
                  {t("healthImpacts.impacts.right.impact3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "24pt" }}>
            {t("solutions.title")} <span style={{ color: "#0687e3" }}>{t("solutions.titleHighlight")}</span>
          </h2>
          <p className="air_heading" style={{ textAlign: "center", fontSize: "15pt" }}>
            {t("solutions.subtitle")}
          </p>

          {/* Indoor Solutions */}
          <div className="solutions-container">
            <h3 style={{ textAlign: "center", fontSize: "24pt" }}>{t("solutions.indoor.title")}</h3>

            <div className="solutions-grid">
              <div className="solution-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/smoking-295x300.png"
                  alt={t("solutions.indoor.items.control.imageAlt")}
                  width={188}
                  height={191}
                />
                <h4>
                  <strong>{t("solutions.indoor.items.control.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "14pt", color: "#646478" }}>
                  {t("solutions.indoor.items.control.description")}
                </p>
              </div>

              <div className="solution-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Improve-ventilation-295x300.png"
                  alt={t("solutions.indoor.items.ventilation.imageAlt")}
                  width={188}
                  height={191}
                />
                <h4>
                  <strong>{t("solutions.indoor.items.ventilation.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "14pt", color: "#646478" }}>
                  {t("solutions.indoor.items.ventilation.description")}
                </p>
              </div>

              <div className="solution-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/humidity-level-295x300.png"
                  alt={t("solutions.indoor.items.humidity.imageAlt")}
                  width={188}
                  height={191}
                />
                <h4>
                  <strong>{t("solutions.indoor.items.humidity.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "14pt", color: "#646478" }}>
                  {t("solutions.indoor.items.humidity.description")}
                </p>
              </div>

              <div className="solution-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Keep-your-indoor-spaces-clean-295x300.png"
                  alt={t("solutions.indoor.items.clean.imageAlt")}
                  width={188}
                  height={191}
                />
                <h4>
                  <strong>{t("solutions.indoor.items.clean.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "14pt", color: "#646478" }}>
                  {t("solutions.indoor.items.clean.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Outdoor Solutions */}
          <div className="solutions-container">
            <h3 style={{ textAlign: "center", fontSize: "24pt" }}>{t("solutions.outdoor.title")}</h3>

            <div className="solutions-grid">
              <div className="solution-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Reduce-emissions.png"
                  alt={t("solutions.outdoor.items.emissions.imageAlt")}
                  width={188}
                  height={191}
                />
                <h4>
                  <strong>{t("solutions.outdoor.items.emissions.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "14pt", color: "#646478" }}>
                  {t("solutions.outdoor.items.emissions.description")}
                </p>
              </div>

              <div className="solution-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Avoid-waste-burning.png"
                  alt={t("solutions.outdoor.items.waste.imageAlt")}
                  width={188}
                  height={191}
                />
                <h4>
                  <strong>{t("solutions.outdoor.items.waste.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "14pt", color: "#646478" }}>
                  {t("solutions.outdoor.items.waste.description")}
                </p>
              </div>

              <div className="solution-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Plant-more-trees.png"
                  alt={t("solutions.outdoor.items.trees.imageAlt")}
                  width={188}
                  height={191}
                />
                <h4>
                  <strong>{t("solutions.outdoor.items.trees.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "14pt", color: "#646478" }}>
                  {t("solutions.outdoor.items.trees.description")}
                </p>
              </div>

              <div className="solution-item">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/Support-clean-air-initiatives.png"
                  alt={t("solutions.outdoor.items.initiatives.imageAlt")}
                  width={188}
                  height={191}
                />
                <h4>
                  <strong>{t("solutions.outdoor.items.initiatives.title")}</strong>
                </h4>
                <p style={{ textAlign: "center", fontSize: "14pt", color: "#646478" }}>
                  {t("solutions.outdoor.items.initiatives.description")}
                </p>
              </div>
            </div>

            <p
              style={{
                textAlign: "center",
                wordWrap: "break-word",
                width: "100%",
                fontSize: "15pt",
                color: "#646478",
                marginTop: "50px",
              }}
            >
              {t("solutions.conclusion")}
            </p>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions Section */}
      <section className="air-quality-solutions">
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center", fontSize: "24pt" }}>
            {t("products.title")} <span style={{ color: "#0687e3" }}>{t("products.titleHighlight")}</span>
          </h2>

          <div className="solutions-products">
            <div className="product-item">
              <Link href="/air-quality-monitor">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/air-pollution-monitor.jpg"
                  alt={t("products.items.monitor.imageAlt")}
                  width={300}
                  height={160}
                />
              </Link>
              <h4 style={{ textAlign: "center" }}>
                <Link href="/air-quality-monitor">
                  <strong>
                    <span style={{ fontSize: "14pt" }}>{t("products.items.monitor.title")}</span>
                  </strong>
                </Link>
              </h4>
            </div>

            <div className="product-item">
              <Link href="/fresh-air-machine">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/fresh-air-machine-prana-air.jpg"
                  alt={t("products.items.freshAir.imageAlt")}
                  width={300}
                  height={160}
                />
              </Link>
              <h4 style={{ textAlign: "center" }}>
                <Link href="/fresh-air-machine">
                  <strong>
                    <span style={{ fontSize: "14pt" }}>{t("products.items.freshAir.title")}</span>
                  </strong>
                </Link>
              </h4>
            </div>

            <div className="product-item">
              <Link href="/air-mask">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/02/anti-pollution-mask.jpg"
                  alt={t("products.items.mask.imageAlt")}
                  width={300}
                  height={160}
                />
              </Link>
              <h4 style={{ textAlign: "center" }}>
                <Link href="/air-mask">
                  <strong>
                    <span style={{ fontSize: "14pt" }}>{t("products.items.mask.title")}</span>
                  </strong>
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Monitor Products Section */}
      <section className="monitor-products-section">
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center", fontSize: "24pt" }}>
            {t("monitors.title")} <span style={{ color: "#0687e3" }}>{t("monitors.titleHighlight")}</span>{" "}
            {t("monitors.titleEnd")}
          </h2>

          <div className="caaqms-banner">
            <Link href="/air-quality-monitor">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/01/prana-air-caaqms-outdoor-monitor--1024x512.jpg"
                alt={t("monitors.imageAlt")}
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

