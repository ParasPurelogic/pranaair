import "./styles.css"
import { getServerTranslation } from "@/i18n/server"
import Image from "next/image"
import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
  const lang = params?.lang || "en";
  const slug = "air-quality-monitor"; // page-specific slug
  const { t } = await getServerTranslation("what-methane");
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
export default async function Methane() {
  const { t } = await getServerTranslation("what-methane")
  return (
    <main>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="banner-txt" data-aos="fade-in">
                <h1>
                  {t("methane.banner.title")}{" "}
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/methane-icon.png"
                    alt={t("methane.banner.iconAlt")}
                    width={50}
                    height={50}
                  />
                </h1>
                <p>{t("methane.banner.description")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner-img" data-aos="fade-in">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/methane-gas-banner.png"
                  alt={t("methane.banner.bannerAlt")}
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Change Section */}
      <section className="climate-chang-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="climate-change-heading" data-aos="fade-left">
                <h2 className="climate-headings">
                  {t("methane.climateChange.titlePrefix")}{" "}
                  <span className="change">{t("methane.climateChange.titleHighlight")}</span>
                </h2>
                <p>{t("methane.climateChange.paragraph1")}</p>
                <p>{t("methane.climateChange.paragraph2")}</p>
              </div>
              <div className="climate-change-cars-img" data-aos="fade-right">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/climate-change-due-to-methane-gas.png"
                  alt={t("methane.climateChange.imageAlt")}
                  width={800}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methane in Environment Section */}
      <section className="mithane-in-envoirment-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="climate-change-heading mithane-in-enviroment" data-aos="fade-left">
                <h2 className="climate-headings">
                  {t("methane.environment.titlePrefix")}{" "}
                  <span className="change">{t("methane.environment.titleHighlight")}</span>
                </h2>
                <p>{t("methane.environment.description")}</p>
              </div>
              <div className="climate-change-cars-img" data-aos="fade-right">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/methane-in-the-environment.png"
                  alt={t("methane.environment.imageAlt")}
                  width={800}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sources of Methane Section */}
      <section className="source-of-methane-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="climate-change-heading source-of-methane-heading" data-aos="fade-left">
                <h2 className="climate-headings">
                  {t("methane.sources.titlePrefix")}{" "}
                  <span className="change">{t("methane.sources.titleHighlight")}</span>
                </h2>
                <p>{t("methane.sources.description")}</p>
              </div>
              <div className="row methane-sources-box">
                <div className="col-md-4">
                  <div className="source-of-methane-img" data-aos="fade-in">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/sewage-treatment-plants.png"
                      alt={t("methane.sources.industrial.alt")}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="source-inner-txt-para">
                    <h3>{t("methane.sources.industrial.title")}</h3>
                    <p>{t("methane.sources.industrial.description")}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="source-of-methane-img" data-aos="fade-in">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/biomass-burning.png"
                      alt={t("methane.sources.biomass.alt")}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="source-inner-txt-para">
                    <h3>{t("methane.sources.biomass.title")}</h3>
                    <p>{t("methane.sources.biomass.description")}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="source-of-methane-img" data-aos="fade-in">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/landfills.png"
                      alt={t("methane.sources.landfills.alt")}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="source-inner-txt-para">
                    <h3>{t("methane.sources.landfills.title")}</h3>
                    <p>{t("methane.sources.landfills.description")}</p>
                  </div>
                </div>
              </div>
              <div className="row methane-sources-box">
                <div className="col-md-4">
                  <div className="source-of-methane-img" data-aos="fade-in">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/manure-production.png"
                      alt={t("methane.sources.manure.alt")}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="source-inner-txt-para">
                    <h3>{t("methane.sources.manure.title")}</h3>
                    <p>{t("methane.sources.manure.description")}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="source-of-methane-img" data-aos="fade-in">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/energy-production.png"
                      alt={t("methane.sources.energy.alt")}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="source-inner-txt-para">
                    <h3>{t("methane.sources.energy.title")}</h3>
                    <p>{t("methane.sources.energy.description")}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="source-of-methane-img" data-aos="fade-in">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/waste-water-treatment.png"
                      alt={t("methane.sources.wastewater.alt")}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="source-inner-txt-para">
                    <h3>{t("methane.sources.wastewater.title")}</h3>
                    <p>{t("methane.sources.wastewater.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earth Section */}
      <section className="earth-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="earth-para">
                <p>{t("methane.earth.description")}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="earth-img" data-aos="fade-down">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/souce-of-methane-gas.png"
                  alt={t("methane.earth.imageAlt")}
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methane Poisoning Section */}
      <section className="methane-poisoning-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="climate-change-heading methane-poisioning-heading" data-aos="fade-left">
                <h2 className="climate-headings">
                  {t("methane.poisoning.titlePrefix")}{" "}
                  <span className="change">{t("methane.poisoning.titleHighlight")}</span>
                </h2>
                <p>{t("methane.poisoning.description")}</p>
              </div>
              <div className="row methane-sources-box">
                <div className="col-md-4">
                  <div className="source-of-methane-img" data-aos="fade-in">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/dizziness.png"
                      alt={t("methane.poisoning.symptoms.dizziness.alt")}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="source-inner-txt-para methane-poisoning-inner-txt">
                    <h3>{t("methane.poisoning.symptoms.dizziness.title")}</h3>
                    <p>{t("methane.poisoning.symptoms.dizziness.description")}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="source-of-methane-img" data-aos="fade-in">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/Nausea-and-vomiting.png"
                      alt={t("methane.poisoning.symptoms.nausea.alt")}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="source-inner-txt-para methane-poisoning-inner-txt">
                    <h3>{t("methane.poisoning.symptoms.nausea.title")}</h3>
                    <p>{t("methane.poisoning.symptoms.nausea.description")}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="source-of-methane-img" data-aos="fade-in">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/Breathing-difficulties.png"
                      alt={t("methane.poisoning.symptoms.breathing.alt")}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="source-inner-txt-para methane-poisoning-inner-txt">
                    <h3>{t("methane.poisoning.symptoms.breathing.title")}</h3>
                    <p>{t("methane.poisoning.symptoms.breathing.description")}</p>
                  </div>
                </div>
              </div>
              <div className="row methane-sources-box">
                <div className="col-md-4">
                  <div className="source-of-methane-img" data-aos="fade-in">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/Confusion.png"
                      alt={t("methane.poisoning.symptoms.confusion.alt")}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="source-inner-txt-para methane-poisoning-inner-txt">
                    <h3>{t("methane.poisoning.symptoms.confusion.title")}</h3>
                    <p>{t("methane.poisoning.symptoms.confusion.description")}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="source-of-methane-img" data-aos="fade-in">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/Weakness-and-fatigue.png"
                      alt={t("methane.poisoning.symptoms.weakness.alt")}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="source-inner-txt-para methane-poisoning-inner-txt">
                    <h3>{t("methane.poisoning.symptoms.weakness.title")}</h3>
                    <p>{t("methane.poisoning.symptoms.weakness.description")}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="source-of-methane-img" data-aos="fade-in">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/Chest-pain-or-tightness.png"
                      alt={t("methane.poisoning.symptoms.chestPain.alt")}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="source-inner-txt-para methane-poisoning-inner-txt">
                    <h3>{t("methane.poisoning.symptoms.chestPain.title")}</h3>
                    <p>{t("methane.poisoning.symptoms.chestPain.description")}</p>
                  </div>
                </div>
              </div>
              <div className="row medical-txt-box">
                <div className="col-md-3">
                  <div className="medical-icon" data-aos="fade-down">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/medical-icon.png"
                      alt={t("methane.poisoning.medical.iconAlt")}
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="medical-para" data-aos="fade-in">
                    <p>{t("methane.poisoning.medical.advice")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Hazard Section */}
      <section className="health-hazard-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="health-hazards-header">
                <h2>
                  <span className="health-hazards-blue">{t("methane.healthHazards.titlePrefix")}</span>{" "}
                  {t("methane.healthHazards.titleSuffix")}
                </h2>
                <div className="divider"></div>
                <p>{t("methane.healthHazards.description")}</p>
              </div>

              <div className="row hazard-cards">
                <div className="col-md-3">
                  <div className="hazard-card">
                    <div className="hazard-icon">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/Asphyxiation.png"
                        alt={t("methane.healthHazards.asphyxiation.alt")}
                        width={100}
                        height={100}
                      />
                    </div>
                    <h3>{t("methane.healthHazards.asphyxiation.title")}</h3>
                    <p>{t("methane.healthHazards.asphyxiation.description")}</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="hazard-card">
                    <div className="hazard-icon">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/Explosive-risk.png"
                        alt={t("methane.healthHazards.explosive.alt")}
                        width={100}
                        height={100}
                      />
                    </div>
                    <h3>{t("methane.healthHazards.explosive.title")}</h3>
                    <p>{t("methane.healthHazards.explosive.description")}</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="hazard-card">
                    <div className="hazard-icon">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/Neurological-effects.png"
                        alt={t("methane.healthHazards.neurological.alt")}
                        width={100}
                        height={100}
                      />
                    </div>
                    <h3>{t("methane.healthHazards.neurological.title")}</h3>
                    <p>{t("methane.healthHazards.neurological.description")}</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="hazard-card">
                    <div className="hazard-icon">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/Respiratory-irritation.png"
                        alt={t("methane.healthHazards.respiratory.alt")}
                        width={100}
                        height={100}
                      />
                    </div>
                    <h3>{t("methane.healthHazards.respiratory.title")}</h3>
                    <p>{t("methane.healthHazards.respiratory.description")}</p>
                  </div>
                </div>
              </div>

              <div className="row quote-section">
                <div className="col-md-12">
                  <div className="quote-para">
                    <Image
                      className="quote-icon"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/quote-icon.png"
                      alt={t("methane.healthHazards.quote.iconAlt")}
                      width={50}
                      height={50}
                    />
                    <p>{t("methane.healthHazards.quote.text")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methane Work Place Section */}
      <section className="methane-work-place-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="climate-change-heading methane-work-place-heading" data-aos="fade-left">
                <h2 className="climate-headings">
                  {t("methane.workplaceExposure.titlePrefix")}{" "}
                  <span className="change">{t("methane.workplaceExposure.titleHighlight")}</span>
                </h2>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="wrk-place-exposure-limits-logo single-logo-img" data-aos="fade-down">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/osha-logo.png"
                      alt={t("methane.workplaceExposure.osha.alt")}
                      width={200}
                      height={100}
                    />
                  </div>
                  <div className="work-place-exposure-limits-para" data-aos="fade-up">
                    <p>{t("methane.workplaceExposure.osha.description")}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wrk-place-exposure-limits-logo" data-aos="fade-down">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/niosh-logo.png"
                      alt={t("methane.workplaceExposure.niosh.alt")}
                      width={200}
                      height={100}
                    />
                  </div>
                  <div className="work-place-exposure-limits-para" data-aos="fade-up">
                    <p>{t("methane.workplaceExposure.niosh.description")}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wrk-place-exposure-limits-logo" data-aos="fade-down">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/acgih-logo.png"
                      alt={t("methane.workplaceExposure.acgih.alt")}
                      width={200}
                      height={100}
                    />
                  </div>
                  <div className="work-place-exposure-limits-para" data-aos="fade-up">
                    <p>{t("methane.workplaceExposure.acgih.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reduce Methane Poisoning Section */}
      <section className="reduce-methane-poisoning-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="climate-change-heading methane-reduce-heading" data-aos="fade-left">
                <h2 className="climate-headings">
                  {t("methane.prevention.titlePrefix")}{" "}
                  <span className="change">{t("methane.prevention.titleHighlight")}</span>{" "}
                  {t("methane.prevention.titleSuffix")}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="reduce-methane-ways-imgs" data-aos="fade-down">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/ventilation.png"
                  alt={t("methane.prevention.ventilation.alt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="reduce-methane-ways-txts">
                <h3>{t("methane.prevention.ventilation.title")}</h3>
                <p>{t("methane.prevention.ventilation.description")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="reduce-methane-ways-imgs" data-aos="fade-down">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/detection.png"
                  alt={t("methane.prevention.detection.alt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="reduce-methane-ways-txts">
                <h3>{t("methane.prevention.detection.title")}</h3>
                <p>{t("methane.prevention.detection.description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="reduce-methane-ways-imgs" data-aos="fade-down">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/maintenance.png"
                  alt={t("methane.prevention.maintenance.alt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="reduce-methane-ways-txts">
                <h3>{t("methane.prevention.maintenance.title")}</h3>
                <p>{t("methane.prevention.maintenance.description")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="reduce-methane-ways-imgs" data-aos="fade-down">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/training.png"
                  alt={t("methane.prevention.training.alt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="reduce-methane-ways-txts">
                <h3>{t("methane.prevention.training.title")}</h3>
                <p>{t("methane.prevention.training.description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="reduce-methane-ways-imgs" data-aos="fade-down">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/regulation.png"
                  alt={t("methane.prevention.regulations.alt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="reduce-methane-ways-txts">
                <h3>{t("methane.prevention.regulations.title")}</h3>
                <p>{t("methane.prevention.regulations.description")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="note-box">
                <h3>{t("methane.prevention.note.title")}</h3>
                <p>{t("methane.prevention.note.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

