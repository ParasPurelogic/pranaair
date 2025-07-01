import Image from "next/image"
import "./styles.css"
import MeasureCarousel from "@/Components/Pages/CarbonDioxide/measure-co2-slider"
import { getServerTranslation } from "@/i18n/server"
import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
  const lang = params?.lang || "en";
  const slug = "air-quality-monitor"; // page-specific slug
  const { t } = await getServerTranslation("what-carbon-dioxide");
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
export default async function CarbonDioxidePage() {
  const { t } = await getServerTranslation("what-carbon-dioxide")
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
      <section className="banner-section">
        <div className="container">
          <div className="banner-content">
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2022/12/what-is-co2.png"
              alt={t("banner.iconAlt")}
              width={224}
              height={194}
              className="banner-icon"
            />
            <h1 className="whitetext">
              <span className="heading_top_white">{t("banner.title")}</span>
            </h1>
            <p className="whitetext">
              <span>{t("banner.description")}</span>
            </p>
          </div>

          <div className="environment-importance">
            <h2 className="whitetext">
              <span>{t("environment.title")}</span>
            </h2>
            <p className="whitetext">
              <span>{t("environment.description1")}</span>
            </p>
            <p className="whitetext">
              <span>{t("environment.description2")}</span>
            </p>
            <div className="plant-icon-container">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/plant-icon-300x271.png"
                alt={t("environment.iconAlt")}
                width={161}
                height={145}
                className="plant-icon"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Indoor CO2 Levels Section */}
      <section className="indoor-co2-levels">
        <div className="container">
          <h2>
            <span>{t("indoorLevels.title")}</span>
          </h2>
          <p>
            <span>{t("indoorLevels.description")}</span>
          </p>

          <div className="co2-levels-container">
            <div className="co2-levels-list">
              <p>
                <span>{t("indoorLevels.levels.good")}</span>
              </p>
              <p>
                <span>{t("indoorLevels.levels.moderate")}</span>
              </p>
              <p>
                <span>{t("indoorLevels.levels.poor")}</span>
              </p>
              <p>
                <span>{t("indoorLevels.levels.unhealthy")}</span>
              </p>
              <p>
                <span>{t("indoorLevels.levels.severe")}</span>
              </p>
              <p>
                <span>{t("indoorLevels.levels.hazardous")}</span>
              </p>
            </div>
            <div className="co2-levels-image">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/color-scale-of-co2.png"
                alt={t("indoorLevels.chartAlt")}
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CO2 Sources Section */}
      <section className="co2-sources">
        <div className="container">
          <h2>
            <span>{t("sources.title")}</span>
          </h2>
          <p>
            <span>{t("sources.description")}</span>
          </p>
          <div className="co2-sources-image">
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2022/12/sources-of-indoor-co2-level-1024x635.jpg"
              alt={t("sources.imageAlt")}
              width={1024}
              height={635}
              className="sources-image"
            />
          </div>
        </div>
      </section>

      {/* Health Effects Section */}
      <section className="health-effects">
        <div className="container">
          <h2>
            <span>{t("healthEffects.title")}</span>
          </h2>
          <p>
            <span>{t("healthEffects.subtitle")}</span>
          </p>

          <div className="health-effects-grid">
            <div className="health-effect-item">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/low-productivity-due-to-high-co2-300x194.jpg"
                alt={t("healthEffects.effects.productivity.imageAlt")}
                width={456}
                height={295}
                className="health-effect-image"
              />
              <h4>
                <span>{t("healthEffects.effects.productivity.title")}</span>
              </h4>
              <p>
                <span>{t("healthEffects.effects.productivity.description")}</span>
              </p>
            </div>

            <div className="health-effect-item">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/disturbing-sleep-due-to-high-co2.jpg"
                alt={t("healthEffects.effects.sleep.imageAlt")}
                width={456}
                height={295}
                className="health-effect-image"
              />
              <h4>
                <span>{t("healthEffects.effects.sleep.title")}</span>
              </h4>
              <p>
                <span>{t("healthEffects.effects.sleep.description")}</span>
              </p>
            </div>

            <div className="health-effect-item">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/increased-blood-pressure-due-to-high-co2.jpg"
                alt={t("healthEffects.effects.bloodPressure.imageAlt")}
                width={456}
                height={295}
                className="health-effect-image"
              />
              <h4>
                <span>{t("healthEffects.effects.bloodPressure.title")}</span>
              </h4>
              <p>
                <span>{t("healthEffects.effects.bloodPressure.description")}</span>
              </p>
            </div>

            <div className="health-effect-item">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/headache-due-to-high-co2.jpg"
                alt={t("healthEffects.effects.headache.imageAlt")}
                width={456}
                height={295}
                className="health-effect-image"
              />
              <h4>
                <span>{t("healthEffects.effects.headache.title")}</span>
              </h4>
              <p>
                <span>{t("healthEffects.effects.headache.description")}</span>
              </p>
            </div>

            <div className="health-effect-item">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/restlessness-due-to-high-co2.jpg"
                alt={t("healthEffects.effects.restlessness.imageAlt")}
                width={456}
                height={295}
                className="health-effect-image"
              />
              <h4>
                <span>{t("healthEffects.effects.restlessness.title")}</span>
              </h4>
              <p>
                <span>{t("healthEffects.effects.restlessness.description")}</span>
              </p>
            </div>

            <div className="health-effect-item">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/diziness-due-to-high-co2.jpg"
                alt={t("healthEffects.effects.dizziness.imageAlt")}
                width={456}
                height={295}
                className="health-effect-image"
              />
              <h4>
                <span>{t("healthEffects.effects.dizziness.title")}</span>
              </h4>
              <p>
                <span>{t("healthEffects.effects.dizziness.description")}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="tips-section">
        <div className="container">
          <h2 className="whitetext">
            <span>{t("tips.title")}</span>
          </h2>
          <p className="whitetext">
            <span>{t("tips.subtitle")}</span>
          </p>

          <div className="tips-grid">
            {/* Tip 1 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/ventilation.jpg"
                  alt={t("tips.items.ventilation.imageAlt")}
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>{t("tips.items.ventilation.title")}</span>
                </h4>
                <p className="whitetext">
                  <span>{t("tips.items.ventilation.description")}</span>
                </p>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/use-air-filtration.jpg"
                  alt={t("tips.items.filtration.imageAlt")}
                  width={200}
                  height={100}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>{t("tips.items.filtration.title")}</span>
                </h4>
                <p className="whitetext">
                  <span>{t("tips.items.filtration.description")}</span>
                </p>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/plant-trees.jpg"
                  alt={t("tips.items.plants.imageAlt")}
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>{t("tips.items.plants.title")}</span>
                </h4>
                <p className="whitetext">
                  <span>{t("tips.items.plants.description")}</span>
                </p>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/co2-level-indoor.jpg"
                  alt={t("tips.items.decreasing.imageAlt")}
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>{t("tips.items.decreasing.title")}</span>
                </h4>
                <p className="whitetext">
                  <span>{t("tips.items.decreasing.description")}</span>
                </p>
              </div>
            </div>

            {/* Tip 5 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/co2-device.jpg"
                  alt={t("tips.items.monitor.imageAlt")}
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>{t("tips.items.monitor.title")}</span>
                </h4>
                <p className="whitetext">
                  <span>{t("tips.items.monitor.description")}</span>
                </p>
              </div>
            </div>

            {/* Tip 6 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/control-co2-emissions.jpg"
                  alt={t("tips.items.emissions.imageAlt")}
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>{t("tips.items.emissions.title")}</span>
                </h4>
                <p className="whitetext">
                  <span>{t("tips.items.emissions.description")}</span>
                </p>
              </div>
            </div>

            {/* Tip 7 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/stop-smoking.jpg"
                  alt={t("tips.items.smoking.imageAlt")}
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>{t("tips.items.smoking.title")}</span>
                </h4>
                <p className="whitetext">
                  <span>{t("tips.items.smoking.description")}</span>
                </p>
              </div>
            </div>

            {/* Tip 8 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/use-air-purifier.jpg"
                  alt={t("tips.items.purification.imageAlt")}
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>{t("tips.items.purification.title")}</span>
                </h4>
                <p className="whitetext">
                  <span>{t("tips.items.purification.description")}</span>
                </p>
              </div>
            </div>

            {/* Tip 9 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/stop-open-fire.jpg"
                  alt={t("tips.items.flames.imageAlt")}
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>{t("tips.items.flames.title")}</span>
                </h4>
                <p className="whitetext">
                  <span>{t("tips.items.flames.description")}</span>
                </p>
              </div>
            </div>

            {/* Tip 10 */}
            <div className="tip-card">
              <div className="tip-card-image">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/check-fuel-leaks.jpg"
                  alt={t("tips.items.fuelLeaks.imageAlt")}
                  width={300}
                  height={200}
                  className="tip-img"
                />
              </div>
              <div className="tip-card-content">
                <h4 className="whitetext">
                  <span>{t("tips.items.fuelLeaks.title")}</span>
                </h4>
                <p className="whitetext">
                  <span>{t("tips.items.fuelLeaks.description")}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measure CO2 Section */}
      <section className="measure-co2">
        <div className="container">
          <h2 className="whitetext">
            <span>{t("measure.title")}</span>
          </h2>
          <p className="whitetext">
            <span>{t("measure.description")}</span>
          </p>
          <div className="co2-monitor-image">
            <a href="#">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/good-co2-level-with-pocket-monitor-1024x574.png"
                alt={t("measure.imageAlt")}
                width={819}
                height={459}
                className="monitor-image"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="product-carousel">
        <div className="container">
          <h3>
            <span>{t("productCarousel.title")}</span>
          </h3>
          <MeasureCarousel applications={measureProducts} />
        </div>
      </section>
    </main>
  )
}

