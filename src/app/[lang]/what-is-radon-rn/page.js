import "./styles.css"
import { getServerTranslation } from "@/i18n/server"
import Image from "next/image"
import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
  const lang = params?.lang || "en";
  const slug = "air-quality-monitor"; // page-specific slug
  const { t } = await getServerTranslation("what-radon-rn");
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
export default async function RadonPage() {
  const { t } = await getServerTranslation("what-radon-rn")
  return (
    <main>
      {/* Hero Section */}
      <section className="full-width-section" style={{ backgroundColor: "#028b7b" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="fadeInUp" style={{ paddingTop: "35px" }}>
                <p className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                    <Image
                      className="aligncenter"
                      src="https://www.pranaair.com/wp-content/uploads/2022/10/radon-rn-300x300.jpg"
                      alt={t("radon.hero.iconAlt")}
                      width={87}
                      height={87}
                    />
                  </span>
                </p>

                <h1 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "50pt", lineHeight: "1.1" }}>{t("radon.hero.title")}</span>
                </h1>
                <p className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "16pt" }}>{t("radon.hero.description")}</span>
                </p>
              </div>
              <div style={{ height: "42px" }}></div>
              <div>
                <h2 className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24pt" }}>{t("radon.radioactivity.title")}</span>
                </h2>
                <p className="whitetext" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>{t("radon.radioactivity.description")}</span>
                </p>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Where does Radon come from */}
      <section className="container">
        <div className="row">
          <div className="col-md-12">
            <div style={{ marginBottom: "50px" }}>
              <h2 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>{t("radon.sources.title")}</span>
              </h2>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("radon.sources.description")}</span>
              </p>
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2022/10/radon-exhalation-from-soil.jpg"
                alt={t("radon.sources.imageAlt")}
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div style={{ height: "50px" }}></div>

            {/* Sources of radon at homes */}
            <div style={{ marginBottom: "50px" }}>
              <h3 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>{t("radon.homeSources.title")}</span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("radon.homeSources.description")}</span>
              </p>
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2022/10/sources-of-radon-at-home.jpg"
                alt={t("radon.homeSources.imageAlt")}
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div style={{ height: "50px" }}></div>

            {/* What makes radon more dangerous */}
            <div style={{ borderBottomWidth: "50px" }}>
              <h2 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>{t("radon.dangerous.title")}</span>
              </h2>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("radon.dangerous.description")}</span>
              </p>
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2022/10/health-impacts-of-radon.jpg"
                alt={t("radon.dangerous.imageAlt")}
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div style={{ height: "50px" }}></div>

            {/* Who is more affected by radon exposure */}
            <div style={{ paddingBottom: "50px" }}>
              <h2 style={{ textAlign: "center" }}>{t("radon.affected.title")}</h2>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("radon.affected.description")}</span>
              </p>
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2022/10/who-are-more-dangerous-to-radon-1024x906.png"
                alt={t("radon.affected.imageAlt")}
                width={403}
                height={357}
              />
            </div>

            {/* Health Impacts By Radon */}
            <div style={{ height: "60px" }}></div>
            <div>
              <h2 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>{t("radon.healthImpacts.title")}</span>
              </h2>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("radon.healthImpacts.description")}</span>
              </p>
              <p style={{ textAlign: "center" }}>
                <Image
                  className="aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/10/84000-deaths-from-lung-cancer-due-to-radon-1024x637.jpg"
                  alt={t("radon.healthImpacts.imageAlt")}
                  width={800}
                  height={497}
                  style={{ width: "100%", height: "auto" }}
                />
              </p>
            </div>
            <div style={{ height: "50px" }}></div>

            {/* Symptoms of radon sickness */}
            <div style={{ paddingBottom: "20px" }}>
              <h3 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "24pt" }}>{t("radon.symptoms.title")}</span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("radon.symptoms.description")}</span>
              </p>
            </div>

            {/* Symptoms grid */}
            <div className="row symptoms-row" style={{ marginBottom: "20px" }}>
              <div className="col-md-6">
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <Image
                      className="aligncenter"
                      src="https://www.pranaair.com/wp-content/uploads/2022/10/difficulty-in-breathing-200x300.png"
                      alt={t("radon.symptoms.breathingDifficulty.imageAlt")}
                      width={200}
                      height={300}
                    />
                  </span>
                </p>
                <h4 style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "14pt" }}>{t("radon.symptoms.breathingDifficulty.title")}</span>
                  </strong>
                </h4>
              </div>
              <div className="col-md-6">
                <h4 style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "14pt" }}>
                      <Image
                        className="alignnone"
                        src="https://www.pranaair.com/wp-content/uploads/2022/10/pain-in-the-chest-due-to-radon-239x300.png"
                        alt={t("radon.symptoms.chestPain.imageAlt")}
                        width={239}
                        height={300}
                      />
                    </span>
                  </strong>
                </h4>
                <h4 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>{t("radon.symptoms.chestPain.title")}</strong>
                  </span>
                </h4>
              </div>
            </div>

            <div className="row symptoms-row" style={{ paddingTop: "25px" }}>
              <div className="col-md-6">
                <h4 style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "14pt" }}>
                      <Image
                        className="alignnone"
                        src="https://www.pranaair.com/wp-content/uploads/2022/10/worsenging-of-cough-due-to-radon-196x300.png"
                        alt={t("radon.symptoms.worseningCough.imageAlt")}
                        width={196}
                        height={300}
                      />
                    </span>
                  </strong>
                </h4>
                <h4 style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "14pt" }}>{t("radon.symptoms.worseningCough.title")}</span>
                  </strong>
                </h4>
              </div>
              <div className="col-md-6">
                <Image
                  className="aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2022/10/trouble-in-swallowing-due-to-radon-239x300.png"
                  alt={t("radon.symptoms.swallowingTrouble.imageAlt")}
                  width={239}
                  height={300}
                />
                <h4 style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "14pt" }}>{t("radon.symptoms.swallowingTrouble.title")}</span>
                  </strong>
                </h4>
              </div>
            </div>

            {/* Why is it important to monitor Radon */}
            <div style={{ paddingTop: "60px" }}>
              <div style={{ height: "60px" }}></div>
              <div>
                <h2 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24pt" }}>{t("radon.monitoring.title")}</span>
                </h2>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "12pt" }}>{t("radon.monitoring.description")}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

