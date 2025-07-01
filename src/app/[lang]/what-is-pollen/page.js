import "./styles.css"
import { getServerTranslation } from "@/i18n/server"
import Image from "next/image"
import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
  const lang = params?.lang || "en";
  const slug = "air-quality-monitor"; // page-specific slug
  const { t } = await getServerTranslation("what-pollen");
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
export default async function WhatIsPollen() {
  const { t } = await getServerTranslation("what-pollen")

  return (
    <main>
      {/* Banner Section */}
      <section className="full-width-section" style={{ backgroundColor: "#f6c65a", paddingBottom: "60px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div style={{ height: "40px" }}></div>
              <div className="fadeInUp">
                <h1 className="" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                    <Image
                      className="aligncenter"
                      src="https://www.pranaair.com/wp-content/uploads/2023/01/pollen.png"
                      alt={t("hero.iconAlt")}
                      width={224}
                      height={194}
                    />
                  </span>
                  <span className="heading_top_white" style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                    {t("hero.title")}
                  </span>
                </h1>
                <p className="" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "16pt" }}>{t("hero.description")}</span>
                </p>
              </div>
              <div style={{ height: "50px" }}></div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section style={{ paddingTop: "50px", paddingBottom: "60px" }}>
        <div className="container">
          <div className="fadeInUp" style={{ paddingBottom: "30px" }}>
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                {t("importance.howImportant.prefix")}{" "}
                <span style={{ color: "#e9a342" }}>{t("importance.howImportant.highlight")}</span>
              </span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "15pt" }}>{t("importance.howImportant.description")}</span>
            </p>
            &nbsp;
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                {t("importance.pollination.prefix")}{" "}
                <span style={{ color: "#e9a342" }}>{t("importance.pollination.highlight")}</span>
              </span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "15pt" }}>{t("importance.pollination.description")}</span>
            </p>
            &nbsp;
          </div>

          <div className="row" style={{ paddingBottom: "50px" }}>
            <div className="col-md-5">
              <div className="fadeInUp">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/angiosperms.png"
                  alt={t("importance.plantTypes.angiosperms.alt")}
                  width={400}
                  height={300}
                  className="img-fluid"
                  style={{ margin: "0 auto", display: "block" }}
                />
              </div>
            </div>
            <div className="col-md-7">
              <h4>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("importance.plantTypes.angiosperms.title")}</span>
                </strong>
              </h4>
              <span style={{ fontSize: "15pt" }}>{t("importance.plantTypes.angiosperms.description")}</span>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5">
              <div className="fadeInUp">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/01/gymnosperms.png"
                  alt={t("importance.plantTypes.gymnosperms.alt")}
                  width={400}
                  height={300}
                  className="img-fluid"
                  style={{ margin: "0 auto", display: "block" }}
                />
              </div>
            </div>
            <div className="col-md-7">
              <h4>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("importance.plantTypes.gymnosperms.title")}</span>
                </strong>
              </h4>
              <span style={{ fontSize: "15pt" }}>{t("importance.plantTypes.gymnosperms.description")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Effects on Humans Section */}
      <section style={{ paddingBottom: "100px" }}>
        <div className="container">
          <div className="fadeInUp">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                {t("effects.title.prefix")} <span style={{ color: "#e9a342" }}>{t("effects.title.highlight")}</span>
              </span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "15pt" }}>{t("effects.description")}</span>
            </p>
            &nbsp;
            <p style={{ textAlign: "center" }}>
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/human-health-effects-by-pollen-1024x933.jpg"
                alt={t("effects.imageAlt")}
                width={709}
                height={646}
              />
            </p>
          </div>
          <div style={{ height: "70px" }}></div>
          <div className="content-box" style={{ border: "1px solid #e9a342" }}>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                <em>{t("effects.quote.text")} </em>
                <em>{t("effects.quote.attribution")}</em>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Health Effects Section */}
      <section style={{ paddingBottom: "100px" }}>
        <div className="container">
          <div className="fadeInUp">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                {t("healthEffects.title.prefix")}{" "}
                <span style={{ color: "#e9a342" }}>{t("healthEffects.title.highlight")}</span>
              </span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "15pt" }}>{t("healthEffects.description")}</span>
            </p>
          </div>

          <div className="row">
            <div className="col-md-1-5">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/sneezing-282x300.jpg"
                alt={t("healthEffects.symptoms.sneezing.alt")}
                width={282}
                height={300}
              />
              <p style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("healthEffects.symptoms.sneezing.title")}</span>
                </strong>
              </p>
            </div>
            <div className="col-md-1-5">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/noise-irritation-282x300.jpg"
                alt={t("healthEffects.symptoms.noseIrritation.alt")}
                width={282}
                height={300}
              />
              <p style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("healthEffects.symptoms.noseIrritation.title")}</span>
                </strong>
                <br />
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("healthEffects.symptoms.noseIrritation.subtitle")}</span>
                </strong>
              </p>
            </div>
            <div className="col-md-1-5">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/eye-irritation-282x300.jpg"
                alt={t("healthEffects.symptoms.eyeIrritation.alt")}
                width={282}
                height={300}
              />
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  <strong>{t("healthEffects.symptoms.eyeIrritation.title")}</strong>
                </span>
                <br />
                <span style={{ fontSize: "14pt" }}>
                  <strong>{t("healthEffects.symptoms.eyeIrritation.subtitle")}</strong>
                </span>
              </p>
            </div>
            <div className="col-md-1-5">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/scratchy-throat-282x300.jpg"
                alt={t("healthEffects.symptoms.scratchyThroat.alt")}
                width={282}
                height={300}
              />
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("healthEffects.symptoms.scratchyThroat.title")}</span>
                <br />
                <span style={{ fontSize: "14pt" }}>{t("healthEffects.symptoms.scratchyThroat.subtitle")}</span>
              </p>
            </div>
            <div className="col-md-1-5">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/chest-tightening-282x300.jpg"
                alt={t("healthEffects.symptoms.chestTightening.alt")}
                width={282}
                height={300}
              />
              <p style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("healthEffects.symptoms.chestTightening.title")}</span>
                </strong>
                <br />
                <strong>
                  <span style={{ fontSize: "14pt" }}>{t("healthEffects.symptoms.chestTightening.subtitle")}</span>
                </strong>
              </p>
            </div>
          </div>

          <div style={{ paddingTop: "35px" }}>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                <strong>
                  <span style={{ color: "#e9a342" }}>{t("healthEffects.hayFever.title")}</span>
                </strong>{" "}
                {t("healthEffects.hayFever.description")}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Protection Section */}
      <section>
        <div className="container">
          <div className="fadeInUp" style={{ paddingBottom: "30px" }}>
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                {t("protection.title.prefix")}{" "}
                <span style={{ color: "#e9a342" }}>{t("protection.title.highlight")}</span>{" "}
                {t("protection.title.suffix")}
              </span>
            </h2>
          </div>

          <div className="row">
            <div className="col-md-6">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/limit-outdoors-300x296.jpg"
                alt={t("protection.methods.limitOutdoors.alt")}
                width={300}
                height={296}
              />
              <h3 style={{ textAlign: "center" }}>{t("protection.methods.limitOutdoors.title")}</h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("protection.methods.limitOutdoors.description")}</span>
              </p>
            </div>
            <div className="col-md-6">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/take-bath.jpg"
                alt={t("protection.methods.takeBath.alt")}
                width={300}
                height={296}
              />
              <h3 style={{ textAlign: "center" }}>{t("protection.methods.takeBath.title")}</h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("protection.methods.takeBath.description")}</span>
              </p>
            </div>
          </div>

          <div className="separator" style={{ borderTop: "2px solid #f6c65a", marginTop: "35px" }}></div>

          <div className="row" style={{ paddingTop: "25px" }}>
            <div className="col-md-6">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/consult-doctor.jpg"
                alt={t("protection.methods.consultDoctor.alt")}
                width={300}
                height={296}
              />
              <h3 style={{ textAlign: "center" }}>{t("protection.methods.consultDoctor.title")}</h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("protection.methods.consultDoctor.description")}</span>
              </p>
            </div>
            <div className="col-md-6">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/proper-medication.jpg"
                alt={t("protection.methods.properMedication.alt")}
                width={300}
                height={296}
              />
              <h3 style={{ textAlign: "center" }}>{t("protection.methods.properMedication.title")}</h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("protection.methods.properMedication.description")}</span>
              </p>
            </div>
          </div>

          <div className="separator" style={{ borderTop: "2px solid #f6c65a", marginTop: "35px" }}></div>

          <div className="row" style={{ paddingTop: "25px" }}>
            <div className="col-md-12">
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/close-windows.jpg"
                alt={t("protection.methods.closeWindows.alt")}
                width={300}
                height={296}
              />
              <h3 style={{ textAlign: "center" }}>{t("protection.methods.closeWindows.title")}</h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>{t("protection.methods.closeWindows.description")}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section style={{ paddingTop: "100px" }}>
        <div className="container">
          <div className="fadeInUp" style={{ paddingBottom: "30px" }}>
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24pt" }}>
                {t("solutions.title.prefix")} <span style={{ color: "#e9a342" }}>{t("solutions.title.highlight")}</span>
              </span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>{t("solutions.description")}</span>
            </p>
            &nbsp;
            <p style={{ textAlign: "center" }}>
              <Image
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/01/n95-mask-for-pollen-allergies-300x282.jpg"
                alt={t("solutions.maskImageAlt")}
                width={459}
                height={431}
              />
            </p>
          </div>
          <div className="separator" style={{ borderTop: "2px solid #f6c65a" }}></div>
        </div>
      </section>
    </main>
  )
}

