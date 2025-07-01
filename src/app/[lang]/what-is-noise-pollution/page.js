import "./styles.css"
import Image from "next/image"
import { getServerTranslation } from "@/i18n/server"
import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
  const lang = params?.lang || "en";
  const slug = "air-quality-monitor"; // page-specific slug
  const { t } = await getServerTranslation("what-noise-pollution");
  const title = t("meta.title");
  const description = t("meta.description");
  const image = t("meta.image") || `${domain}/images/${slug}.jpg`;

  const languages = supportedLanguages.reduce((acc, code) => {
    acc[code] = `${domain}/${code}/${slug}`;
    return acc;
  }, {});

  return {
    title,
    description,
    alternates: {
      canonical: `${domain}/${lang}/${slug}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${domain}/${lang}/${slug}`,
      siteName: "Prana Air",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
export default async function NoisePollutionPage() {
  const { t } = await getServerTranslation("what-noise-pollution")
  return (
    <main>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ paddingTop: "30px", paddingBottom: "60px", backgroundColor: "#8789ab" }}
      >
        <div className="container">
          <div className="text-center" style={{ paddingTop: "15px" }}>
            <Image
              className="aligncenter"
              src="https://www.pranaair.com/wp-content/uploads/2023/03/noise-pollution.png"
              alt={t("noise.hero.iconAlt")}
              width={200}
              height={221}
            />
            <h1 className="whitetext" style={{ textAlign: "center" }}>
              <span className="heading_top_white" style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                {t("noise.hero.title")}
              </span>
            </h1>
            <p className="whitetext topsection" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16pt" }}>{t("noise.hero.description")}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Sound vs Noise Section */}
      <section className="sound-vs-noise" style={{ paddingBottom: "60px", backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ paddingTop: "15px" }}>
            <div className="air_heading">
              <h2 className="headingfont" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "36pt" }}>{t("noise.soundVsNoise.titlePrefix")}</span>
              </h2>
              <h2 className="headingfont" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "36pt" }}>
                  <span style={{ color: "#f099cf" }}>{t("noise.soundVsNoise.sound")} </span>
                  {t("noise.soundVsNoise.and")}{" "}
                  <span style={{ color: "#f099cf" }}>{t("noise.soundVsNoise.noise")}</span>
                </span>
              </h2>
            </div>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("noise.soundVsNoise.paragraph1")}</span>
            </p>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("noise.soundVsNoise.paragraph2")}</span>
            </p>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("noise.soundVsNoise.paragraph3")}</span>
            </p>
            <Image
              className="size-large aligncenter"
              src="https://www.pranaair.com/wp-content/uploads/2023/03/differences-of-sound-and-noise-1024x390.jpg"
              alt={t("noise.soundVsNoise.imageAlt")}
              width={1024}
              height={390}
            />
          </div>
        </div>
      </section>

      {/* When Noise Irritates Section */}
      <section
        className="noise-irritation"
        style={{ paddingTop: "50px", paddingBottom: "60px", backgroundColor: "#f0f0f3" }}
      >
        <div className="container">
          <div style={{ paddingTop: "15px" }}>
            <h2 className="air_heading" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "36pt" }}>
                {t("noise.irritation.titlePrefix")}{" "}
                <span style={{ color: "#8789ab" }}>{t("noise.irritation.titleHighlight")}</span>
              </span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt", color: "#646478" }}>{t("noise.irritation.description")}</span>
            </p>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "18pt", color: "#646478" }}>{t("noise.irritation.signsTitle")}</span>
            </p>
          </div>

          <div className="row" style={{ paddingTop: "25px" }}>
            <div className="col-md-3 noisesign">
              <h3 style={{ textAlign: "center" }}>
                <span style={{ color: "#8789ab" }}>{t("noise.irritation.signs.annoyance.title")}</span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.irritation.signs.annoyance.description")}</span>
              </p>
            </div>
            <div className="col-md-3 noisesigns">
              <h3 style={{ textAlign: "center" }}>
                <span style={{ color: "#8789ab" }}>{t("noise.irritation.signs.distraction.title")}</span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.irritation.signs.distraction.description")}</span>
              </p>
            </div>
            <div className="col-md-6">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/03/signs-of-noise-pollution.png"
                alt={t("noise.irritation.signs.imageAlt")}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="noisesigns">
                <h3 style={{ textAlign: "center" }}>
                  <span style={{ color: "#8789ab" }}>{t("noise.irritation.signs.stress.title")}</span>
                </h3>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("noise.irritation.signs.stress.description")}</span>
                </p>
              </div>
            </div>
            <div className="col-md-3 noisesign">
              <h3 style={{ textAlign: "center" }}>
                <span style={{ color: "#8789ab" }}>{t("noise.irritation.signs.sleep.title")}</span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.irritation.signs.sleep.description")}</span>
              </p>
            </div>
            <div className="col-md-3 noisesigns">
              <h3 style={{ textAlign: "center" }}>
                <span style={{ color: "#8789ab" }}>{t("noise.irritation.signs.discomfort.title")}</span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.irritation.signs.discomfort.description")}</span>
              </p>
            </div>
            <div className="col-md-12 noisesigns">
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt", color: "#646478" }}>{t("noise.irritation.prevention")}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Noise Pollution Section */}
      <section className="noise-pollution-definition" style={{ paddingTop: "50px" }}>
        <div className="container">
          <div style={{ paddingTop: "15px" }}>
            <h2 className="air_heading" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "36pt" }}>
                {t("noise.definition.titlePrefix")}{" "}
                <span style={{ color: "#8789ab" }}>{t("noise.definition.titleHighlight")}</span>
              </span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("noise.definition.description")}</span>
            </p>
          </div>
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/03/what-is-noise-pollution.png"
            alt={t("noise.definition.imageAlt")}
            width={1200}
            height={600}
            style={{ width: "100%", height: "auto", paddingTop: "25px", paddingBottom: "60px" }}
          />
        </div>
      </section>

      {/* Causes of Noise Pollution Section */}
      <section
        className="causes-noise-pollution"
        style={{ paddingTop: "50px", paddingBottom: "50px", backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <div style={{ paddingBottom: "35px" }}>
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "36pt" }}>
                <strong>
                  <span style={{ lineHeight: "1" }}>
                    <span style={{ color: "#8789ab" }}>{t("noise.causes.titleHighlight")}</span>{" "}
                    {t("noise.causes.titleSuffix")}
                  </span>
                </strong>
              </span>
            </h2>
            <p className="air_heading" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("noise.causes.description")}</span>
            </p>
          </div>

          <div className="row" style={{ paddingBottom: "10px" }}>
            <div className="col-md-4 text-center">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/indusrial-activities.png"
                alt={t("noise.causes.sources.industrial.alt")}
                width={170}
                height={170}
              />
            </div>
            <div className="col-md-8">
              <h4>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("noise.causes.sources.industrial.title")}</span>
                </strong>
              </h4>
              <span style={{ fontSize: "14pt" }}>{t("noise.causes.sources.industrial.description")}</span>
            </div>
          </div>

          <div className="row" style={{ paddingBottom: "25px" }}>
            <div className="col-md-4 text-center">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/entertainment-activities.png"
                alt={t("noise.causes.sources.entertainment.alt")}
                width={170}
                height={170}
              />
            </div>
            <div className="col-md-8">
              <h4>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("noise.causes.sources.entertainment.title")}</span>
                </strong>
              </h4>
              <span style={{ fontSize: "14pt" }}>{t("noise.causes.sources.entertainment.description")}</span>
            </div>
          </div>

          <div className="row" style={{ paddingBottom: "25px" }}>
            <div className="col-md-4 text-center">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/urbanization.png"
                alt={t("noise.causes.sources.urbanization.alt")}
                width={170}
                height={170}
              />
            </div>
            <div className="col-md-8">
              <h4>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("noise.causes.sources.urbanization.title")}</span>
                </strong>
              </h4>
              <span style={{ fontSize: "14pt" }}>{t("noise.causes.sources.urbanization.description")}</span>
            </div>
          </div>

          <div className="row" style={{ paddingBottom: "25px" }}>
            <div className="col-md-4 text-center">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/natural-disasters.png"
                alt={t("noise.causes.sources.naturalDisasters.alt")}
                width={170}
                height={170}
              />
            </div>
            <div className="col-md-8">
              <h4>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("noise.causes.sources.naturalDisasters.title")}</span>
                </strong>
              </h4>
              <span style={{ fontSize: "14pt" }}>{t("noise.causes.sources.naturalDisasters.description")}</span>
            </div>
          </div>

          <div className="row" style={{ paddingBottom: "25px" }}>
            <div className="col-md-4 text-center">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/household-activities.png"
                alt={t("noise.causes.sources.household.alt")}
                width={170}
                height={170}
              />
            </div>
            <div className="col-md-8">
              <h4>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("noise.causes.sources.household.title")}</span>
                </strong>
              </h4>
              <span style={{ fontSize: "14pt" }}>{t("noise.causes.sources.household.description")}</span>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "30px" }}>
            <div className="col-md-12">
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.causes.mitigation")}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO Recommendation Section */}
      <section className="who-recommendation" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/loud-noise-speaker.png"
                alt={t("noise.who.iconAlt")}
                width={148}
                height={164}
              />
            </div>
            <div className="col-md-9">
              <span style={{ fontSize: "14pt" }}>{t("noise.who.recommendation")}</span>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "40px" }}>
            <div className="col-md-12">
              <h2 className="air_heading" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "36pt" }}>
                  {t("noise.homeAppliances.titlePrefix")}{" "}
                  <span style={{ color: "#8789ab" }}>{t("noise.homeAppliances.titleHighlight1")}</span>{" "}
                  {t("noise.homeAppliances.titleMiddle")}{" "}
                  <span style={{ color: "#8789ab" }}>{t("noise.homeAppliances.titleHighlight2")}</span>
                </span>
              </h2>
            </div>
          </div>

          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/04/noise-from-home-appliances.jpg"
            alt={t("noise.homeAppliances.imageAlt")}
            width={1200}
            height={600}
            style={{ width: "100%", height: "auto", paddingTop: "30px" }}
          />

          <div className="row" style={{ paddingTop: "35px" }}>
            <div className="col-md-2">
              <h4 style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("noise.homeAppliances.appliances.refrigerators.range")}</span>
                </strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  {t("noise.homeAppliances.appliances.refrigerators.description")}
                </span>
              </p>
            </div>
            <div className="col-md-2">
              <h4 style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("noise.homeAppliances.appliances.vacuum.range")}</span>
                </strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.homeAppliances.appliances.vacuum.description")}</span>
              </p>
            </div>
            <div className="col-md-2">
              <h4 style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("noise.homeAppliances.appliances.washing.range")}</span>
                </strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.homeAppliances.appliances.washing.description")}</span>
              </p>
            </div>
            <div className="col-md-2">
              <h4 style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("noise.homeAppliances.appliances.smokeAlarms.range")}</span>
                </strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.homeAppliances.appliances.smokeAlarms.description")}</span>
              </p>
            </div>
            <div className="col-md-2">
              <h4 style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("noise.homeAppliances.appliances.homeTheatre.range")}</span>
                </strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.homeAppliances.appliances.homeTheatre.description")}</span>
              </p>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "40px" }}>
            <div className="col-md-12">
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.homeAppliances.warning")}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Acoustics Section */}
      <section className="acoustics" style={{ marginTop: "50px", paddingTop: "50px", backgroundColor: "#f7f7f8" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "36pt" }}>
              {t("noise.acoustics.titlePrefix")}{" "}
              <span style={{ color: "#8789ab" }}>{t("noise.acoustics.titleHighlight1")}</span>{" "}
              {t("noise.acoustics.titleMiddle")}
            </span>
            <span style={{ fontSize: "36pt" }}>
              {t("noise.acoustics.titleSuffix")}{" "}
              <span style={{ color: "#8789ab" }}>{t("noise.acoustics.titleHighlight2")}</span>
            </span>
          </h2>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>{t("noise.acoustics.description")}</span>
          </p>

          <div style={{ paddingTop: "50px" }}>
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "36pt" }}>
                {t("noise.acoustics.buildingComfort.titlePrefix")}{" "}
                <span style={{ color: "#8789ab" }}>{t("noise.acoustics.buildingComfort.titleHighlight")}</span>
              </span>
            </h2>
            <p className="textbox" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("noise.acoustics.buildingComfort.description")}</span>
            </p>
          </div>

          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/04/acoustic-building-comfort.png"
            alt={t("noise.acoustics.buildingComfort.imageAlt")}
            width={1200}
            height={600}
            style={{ width: "100%", height: "auto", paddingTop: "20px" }}
          />

          <div style={{ marginBottom: "50px", paddingTop: "30px" }}>
            <p className="textbox" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("noise.acoustics.buildingComfort.factors")}</span>
            </p>
          </div>

          <div className="row flexicon" style={{ marginBottom: "50px" }}>
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <p style={{ textAlign: "left" }}>
                <Image
                  className="alignleft"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/frequency-of-noise.png"
                  alt={t("noise.acoustics.buildingComfort.factorsList.frequency.alt")}
                  width={69}
                  height={69}
                />
                <span style={{ fontSize: "14pt" }}>
                  {t("noise.acoustics.buildingComfort.factorsList.frequency.title")}
                </span>
              </p>
            </div>
            <div className="col-md-2">
              <p style={{ textAlign: "left" }}>
                <Image
                  className="alignleft"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/duration-of-noise.png"
                  alt={t("noise.acoustics.buildingComfort.factorsList.duration.alt")}
                  width={69}
                  height={69}
                />
                <span style={{ fontSize: "14pt" }}>
                  {t("noise.acoustics.buildingComfort.factorsList.duration.title")}
                </span>
              </p>
            </div>
            <div className="col-md-2">
              <p style={{ textAlign: "left" }}>
                <Image
                  className="alignleft"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/background-noise.png"
                  alt={t("noise.acoustics.buildingComfort.factorsList.background.alt")}
                  width={69}
                  height={69}
                />
                <span style={{ fontSize: "14pt" }}>
                  {t("noise.acoustics.buildingComfort.factorsList.background.title")}
                </span>
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Acceptable Noise Levels Section */}
      <section
        className="acceptable-noise-levels"
        style={{ marginTop: "50px", marginBottom: "70px", paddingTop: "50px" }}
      >
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "36pt" }}>
              {t("noise.acceptableLevels.titlePrefix")}{" "}
              <span style={{ color: "#8789ab" }}>{t("noise.acceptableLevels.titleHighlight")}</span>
            </span>
            <span style={{ fontSize: "36pt" }}>{t("noise.acceptableLevels.titleSuffix")}</span>
          </h2>

          <div className="row" style={{ paddingTop: "35px" }}>
            <div className="col-md-2"></div>
            <div className="col-md-8" style={{ paddingLeft: "30px" }}>
              <Image
                className="alignleft"
                src="https://www.pranaair.com/wp-content/uploads/2023/04/green-300x44.png"
                alt={t("noise.acceptableLevels.levels.sleeping.colorAlt")}
                width={211}
                height={31}
              />
              <p style={{ textAlign: "justify" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.acceptableLevels.levels.sleeping.description")}</span>
              </p>
              <Image
                className="alignleft"
                src="https://www.pranaair.com/wp-content/uploads/2023/04/light-green-300x44.png"
                alt={t("noise.acceptableLevels.levels.living.colorAlt")}
                width={211}
                height={31}
              />
              <p style={{ textAlign: "justify" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.acceptableLevels.levels.living.description")}</span>
              </p>
              <Image
                className="alignleft"
                src="https://www.pranaair.com/wp-content/uploads/2023/04/yellow-300x44.png"
                alt={t("noise.acceptableLevels.levels.work.colorAlt")}
                width={211}
                height={31}
              />
              <p style={{ textAlign: "justify" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.acceptableLevels.levels.work.description")}</span>
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section
        className="fun-fact"
        style={{
          borderTopWidth: "70px",
          paddingBottom: "25px",
          backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2023/04/noise-bg-image.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h4 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "18pt" }}>
              <strong>{t("noise.funFact.title")}</strong>
            </span>
          </h4>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>{t("noise.funFact.description")}</span>
          </p>
        </div>
      </section>

      {/* Excessive Noise Effects Section */}
      <section className="excessive-noise-effects" style={{ marginTop: "40px", paddingTop: "50px" }}>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "36pt" }}>
              {t("noise.excessiveEffects.titlePrefix")}{" "}
              <span style={{ color: "#8789ab" }}>{t("noise.excessiveEffects.titleHighlight")}</span>
            </span>
          </h2>
          <p className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>{t("noise.excessiveEffects.description")}</span>
          </p>

          <div className="row">
            <div className="col-md-4">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/stress-and-anxiety.png"
                alt={t("noise.excessiveEffects.effects.stress.alt")}
                width={300}
                height={300}
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>{t("noise.excessiveEffects.effects.stress.title")}</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.excessiveEffects.effects.stress.description")}</span>
              </p>
            </div>
            <div className="col-md-4">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/Interference-with-communication.png"
                alt={t("noise.excessiveEffects.effects.communication.alt")}
                width={300}
                height={300}
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>{t("noise.excessiveEffects.effects.communication.title")}</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  {t("noise.excessiveEffects.effects.communication.description")}
                </span>
              </p>
            </div>
            <div className="col-md-4">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/Deafness.png"
                alt={t("noise.excessiveEffects.effects.deafness.alt")}
                width={300}
                height={300}
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>{t("noise.excessiveEffects.effects.deafness.title")}</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.excessiveEffects.effects.deafness.description")}</span>
              </p>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "20px", paddingBottom: "40px" }}>
            <div className="col-md-4">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/Troubled-sleep.png"
                alt={t("noise.excessiveEffects.effects.sleep.alt")}
                width={300}
                height={300}
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>{t("noise.excessiveEffects.effects.sleep.title")}</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.excessiveEffects.effects.sleep.description")}</span>
              </p>
            </div>
            <div className="col-md-4">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/High-blood-pressure.png"
                alt={t("noise.excessiveEffects.effects.bloodPressure.alt")}
                width={300}
                height={300}
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>{t("noise.excessiveEffects.effects.bloodPressure.title")}</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  {t("noise.excessiveEffects.effects.bloodPressure.description")}
                </span>
              </p>
            </div>
            <div className="col-md-4">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/Wildlife.png"
                alt={t("noise.excessiveEffects.effects.wildlife.alt")}
                width={300}
                height={300}
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>{t("noise.excessiveEffects.effects.wildlife.title")}</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.excessiveEffects.effects.wildlife.description")}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Effects Section */}
      <section className="environmental-effects" style={{ marginTop: "80px", paddingTop: "30px" }}>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "36pt" }}>{t("noise.environmentalEffects.titlePrefix")}</span>
          </h2>
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "36pt", color: "#8789ab" }}>{t("noise.environmentalEffects.titleHighlight")}</span>
          </h2>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>{t("noise.environmentalEffects.description")}</span>
          </p>

          <Image
            src="https://www.pranaair.com/wp-content/uploads/2023/03/effects-of-noise-pollution-on-environment.jpg"
            alt={t("noise.environmentalEffects.imageAlt")}
            width={1200}
            height={600}
            style={{ width: "100%", height: "auto", paddingTop: "30px", paddingBottom: "30px" }}
          />

          <div className="row" style={{ paddingTop: "30px", paddingBottom: "60px" }}>
            <div className="col-md-3">
              <h4 style={{ textAlign: "center" }}>
                <strong>{t("noise.environmentalEffects.effects.community.title")}</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  {t("noise.environmentalEffects.effects.community.description")}
                </span>
              </p>
            </div>
            <div className="col-md-3">
              <h4 style={{ textAlign: "center" }}>
                <strong>{t("noise.environmentalEffects.effects.habitat.title")}</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.environmentalEffects.effects.habitat.description")}</span>
              </p>
            </div>
            <div className="col-md-3">
              <h4 style={{ textAlign: "center" }}>
                <strong>{t("noise.environmentalEffects.effects.plantGrowth.title")}</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  {t("noise.environmentalEffects.effects.plantGrowth.description")}
                </span>
              </p>
            </div>
            <div className="col-md-3">
              <h4 style={{ textAlign: "center" }}>
                <strong>{t("noise.environmentalEffects.effects.ecosystem.title")}</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  {t("noise.environmentalEffects.effects.ecosystem.description")}
                </span>
              </p>
            </div>
          </div>

          <div className="row" style={{ paddingBottom: "15px", backgroundColor: "#f9f9f9" }}>
            <div className="col-md-3">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/04/do-you-know-about-noise.png"
                alt={t("noise.environmentalEffects.study.iconAlt")}
                width={300}
                height={200}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-md-9">
              <span style={{ fontSize: "14pt" }}>{t("noise.environmentalEffects.study.description")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Noise Levels Section */}
      <section className="noise-levels" style={{ marginTop: "90px", paddingTop: "20px", paddingBottom: "40px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "36pt" }}>
              {t("noise.noiseLevels.titlePrefix")}{" "}
              <span style={{ color: "#8789ab" }}>{t("noise.noiseLevels.titleHighlight")}</span>{" "}
              {t("noise.noiseLevels.titleSuffix")}
            </span>
          </h2>

          <div style={{ paddingTop: "25px", paddingBottom: "30px" }}>
            <section className="health_effects_section">
              <div className="level_range_cntr health_effect_box">
                <div className="lavel_box">
                  <span>{t("noise.noiseLevels.table.headers.levels")}</span>
                  <span className="mg_text">
                    <b>{t("noise.noiseLevels.table.headers.units")}</b>
                  </span>
                </div>
                <div className="health_color">
                  <span>{t("noise.noiseLevels.table.headers.healthEffects")}</span>
                </div>
              </div>
              <div className="level_range_cntr">
                <div className="lavel_box">
                  <span>{t("noise.noiseLevels.table.levels.peace.category")}</span>
                  <p>
                    <span>0-40 </span>
                    <span className="mobile_mg_text">{t("noise.noiseLevels.table.mobileUnits")}</span>
                  </p>
                </div>
                <div className="health_color Good_color">
                  <span>{t("noise.noiseLevels.table.levels.peace.effect")}</span>
                </div>
              </div>
              <div className="level_range_cntr">
                <div className="lavel_box">
                  <span>{t("noise.noiseLevels.table.levels.silent.category")}</span>
                  <p>
                    <span>41-50</span>
                    <span className="mobile_mg_text">{t("noise.noiseLevels.table.mobileUnits")}</span>
                  </p>
                </div>
                <div className="health_color Satisfactory_color">
                  <span>{t("noise.noiseLevels.table.levels.silent.effect")}</span>
                </div>
              </div>
              <div className="level_range_cntr">
                <div className="lavel_box">
                  <span>{t("noise.noiseLevels.table.levels.disturbing.category")}</span>
                  <p>
                    <span>51-60</span>
                    <span className="mobile_mg_text">{t("noise.noiseLevels.table.mobileUnits")}</span>
                  </p>
                </div>
                <div className="health_color Moderately_color">
                  <span>{t("noise.noiseLevels.table.levels.disturbing.effect")}</span>
                </div>
              </div>
              <div className="level_range_cntr">
                <div className="lavel_box">
                  <span>{t("noise.noiseLevels.table.levels.bustling.category")}</span>
                  <p>
                    <span>61-70</span>
                    <span className="mobile_mg_text">{t("noise.noiseLevels.table.mobileUnits")}</span>
                  </p>
                </div>
                <div className="health_color poor_color">
                  <span>{t("noise.noiseLevels.table.levels.bustling.effect")}</span>
                </div>
              </div>
              <div className="level_range_cntr">
                <div className="lavel_box">
                  <span>{t("noise.noiseLevels.table.levels.loud.category")}</span>
                  <p>
                    <span>71-80</span>
                    <span className="mobile_mg_text">{t("noise.noiseLevels.table.mobileUnits")}</span>
                  </p>
                </div>
                <div className="health_color verypoor_color">
                  <span>{t("noise.noiseLevels.table.levels.loud.effect")}</span>
                </div>
              </div>
              <div className="level_range_cntr">
                <div className="lavel_box">
                  <span>{t("noise.noiseLevels.table.levels.extremelyLoud.category")}</span>
                  <p>
                    <span>81-90(+)</span>
                    <span className="mobile_mg_text">{t("noise.noiseLevels.table.mobileUnits")}</span>
                  </p>
                </div>
                <div className="health_color Severe_color">
                  <span>{t("noise.noiseLevels.table.levels.extremelyLoud.effect")}</span>
                </div>
              </div>
            </section>
          </div>

          <p style={{ textAlign: "center", marginTop: "35px", paddingBottom: "60px" }}>
            <span style={{ fontSize: "14pt" }}>{t("noise.noiseLevels.disclaimer")}</span>
          </p>

          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8" style={{ marginTop: "30px", paddingBottom: "20px" }}>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.noiseLevels.examples.title")}</span>
              </p>
              <table>
                <thead>
                  <tr>
                    <th>{t("noise.noiseLevels.examples.table.headers.levels")}</th>
                    <th>{t("noise.noiseLevels.examples.table.headers.indoor")}</th>
                    <th>{t("noise.noiseLevels.examples.table.headers.outdoor")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>50-60 dB</td>
                    <td>{t("noise.noiseLevels.examples.table.rows.conversation.indoor")}</td>
                    <td>{t("noise.noiseLevels.examples.table.rows.conversation.outdoor")}</td>
                  </tr>
                  <tr>
                    <td>50-60 dB</td>
                    <td>{t("noise.noiseLevels.examples.table.rows.music.indoor")}</td>
                    <td>{t("noise.noiseLevels.examples.table.rows.music.outdoor")}</td>
                  </tr>
                  <tr>
                    <td>70-80 dB</td>
                    <td>{t("noise.noiseLevels.examples.table.rows.traffic.indoor")}</td>
                    <td>{t("noise.noiseLevels.examples.table.rows.traffic.outdoor")}</td>
                  </tr>
                  <tr>
                    <td>70-75 dB</td>
                    <td>{t("noise.noiseLevels.examples.table.rows.vacuum.indoor")}</td>
                    <td>{t("noise.noiseLevels.examples.table.rows.vacuum.outdoor")}</td>
                  </tr>
                  <tr>
                    <td>85-100 dB</td>
                    <td>{t("noise.noiseLevels.examples.table.rows.loudMusic.indoor")}</td>
                    <td>{t("noise.noiseLevels.examples.table.rows.loudMusic.outdoor")}</td>
                  </tr>
                  <tr>
                    <td>80-120 dB</td>
                    <td>{t("noise.noiseLevels.examples.table.rows.powerTools.indoor")}</td>
                    <td>{t("noise.noiseLevels.examples.table.rows.powerTools.outdoor")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Reducing Noise Pollution Section */}
      <section
        className="reducing-noise-pollution"
        style={{ marginTop: "80px", paddingTop: "60px", backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "36pt", color: "#8789ab" }}>
              {t("noise.reducing.titleHighlight")}{" "}
              <span style={{ color: "#000000" }}>{t("noise.reducing.titleSuffix")}</span>
            </span>
          </h2>
          <p className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>{t("noise.reducing.description")}</span>
          </p>

          <div className="row">
            <div className="col-md-6">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/use-noise-barriers.png"
                alt={t("noise.reducing.methods.barriers.alt")}
                width={300}
                height={300}
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>{t("noise.reducing.methods.barriers.title")}</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.reducing.methods.barriers.description")}</span>
              </p>
            </div>
            <div className="col-md-6">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/plant-trees.png"
                alt={t("noise.reducing.methods.trees.alt")}
                width={300}
                height={300}
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>{t("noise.reducing.methods.trees.title")}</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.reducing.methods.trees.description")}</span>
              </p>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "35px" }}>
            <div className="col-md-6">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/regulators.png"
                alt={t("noise.reducing.methods.regulations.alt")}
                width={300}
                height={300}
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>{t("noise.reducing.methods.regulations.title")}</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.reducing.methods.regulations.description")}</span>
              </p>
            </div>
            <div className="col-md-6">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/insulate-buildings.png"
                alt={t("noise.reducing.methods.insulation.alt")}
                width={300}
                height={300}
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>{t("noise.reducing.methods.insulation.title")}</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.reducing.methods.insulation.description")}</span>
              </p>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "10px", paddingBottom: "40px" }}>
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/educate-people-300x300.png"
                alt={t("noise.reducing.methods.education.alt")}
                width={300}
                height={300}
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>{t("noise.reducing.methods.education.title")}</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("noise.reducing.methods.education.description")}</span>
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>

      {/* Precautions Section */}
      <section className="precautions" style={{ marginTop: "60px", marginBottom: "30px" }}>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "36pt", color: "#8789ab" }}>
              <span style={{ color: "#000000" }}>{t("noise.precautions.titlePrefix")}</span>{" "}
              {t("noise.precautions.titleHighlight")}
            </span>
          </h2>
          <p className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>{t("noise.precautions.description")}</span>
          </p>

          <Image
            className="aligncenter"
            src="https://www.pranaair.com/wp-content/uploads/2023/03/air-quality-device-to-detect-noise.png"
            alt={t("noise.precautions.imageAlt")}
            width={458}
            height={503}
          />
        </div>
      </section>

      {/* Noise Measuring Devices Section */}
      <section className="noise-measuring-devices" style={{ marginTop: "80px" }}>
        <div className="container">
          <h3 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>
              {t("noise.devices.titlePrefix")}{" "}
              <span style={{ color: "#8789ab" }}>{t("noise.devices.titleHighlight")}</span>{" "}
              {t("noise.devices.titleSuffix")}
            </span>
          </h3>

          <div className="row">
            <div className="col-md-6">
              <a href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/">
                <Image
                  className="aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-squair-monitor-1024x807.png"
                  alt={t("noise.devices.squair.alt")}
                  width={500}
                  height={394}
                  style={{ width: "auto", height: "auto" }}
                />
                <h4 style={{ textAlign: "center" }}>
                  <strong>{t("noise.devices.squair.title")}</strong>
                </h4>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("noise.devices.squair.description")}</span>
                </p>
              </a>
            </div>
            <div className="col-md-6" style={{ borderTopWidth: "20px" }}>
              <a href="https://www.pranaair.com/air-quality-monitor/ambient-air-monitor/">
                <Image
                  className="aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-noise-sensor-in-ambient-monitor-1024x1024.png"
                  alt={t("noise.devices.ambient.alt")}
                  width={350}
                  height={350}
                  style={{ paddingTop: "10px", width: "auto", height: "auto" }}
                />
                <h4 style={{ textAlign: "center" }}>
                  <strong>{t("noise.devices.ambient.title")}</strong>
                </h4>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("noise.devices.ambient.description")}</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

