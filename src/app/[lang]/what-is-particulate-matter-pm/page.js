import "./styles.css"
import { getServerTranslation } from "@/i18n/server"
import MeasureCarousel from "@/Components/Pages/CarbonDioxide/measure-co2-slider"
import AqiTabsPM from "@/Components/Pages/ParticulateMatter/tabs-aqi"
import Image from "next/image"

export default async function ParticularMatterPage() {
  const { t } = await getServerTranslation("particulate")

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
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="banner-content">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/what-is-particulate-matter-pm.png"
                  alt={t("pm.hero.imageAlt")}
                  width={224}
                  height={194}
                  className="wp-image-60375 sick"
                />
                <h1 className="whitetext text-center">
                  <span className="heading_top_white">{t("pm.hero.title")}</span>
                </h1>
                <p className="whitetext text-center">
                  <span>{t("pm.hero.description")}</span>
                </p>
                <p className="whitetext text-center">
                  <span>{t("pm.hero.aqliInfo")}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Are Particulates and Air Pollution the same thing? */}
      <section className="particulates-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">
                <span>{t("pm.particulates.title")}</span>
              </h2>
              <p className="text-center">
                <span>{t("pm.particulates.description")}</span>
              </p>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/air-pollutants-in-the-air.jpg"
                alt={t("pm.particulates.imageAlt")}
                width={1024}
                height={366}
                className="aligncenter wp-image-63976 size-large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Particulate Matter */}
      <section className="types-pm-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">
                <span>{t("pm.types.title")}</span>
              </h2>
              <p className="text-center">
                <span>{t("pm.types.description")}</span>
              </p>
            </div>
          </div>
          <div className="row pm-types">
            <div className="col-md-4">
              <div className="pm-type-card">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/pm1-size-300x300.png"
                  alt={t("pm.types.pm1.imageAlt")}
                  width={300}
                  height={300}
                  className="aligncenter"
                />
                <h4 className="text-center">
                  <strong>{t("pm.types.pm1.title")}</strong>
                </h4>
                <p className="text-center">{t("pm.types.pm1.description")}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pm-type-card">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/pm2.5-size-300x300.png"
                  alt={t("pm.types.pm25.imageAlt")}
                  width={300}
                  height={300}
                  className="aligncenter"
                />
                <h4 className="text-center">
                  <strong>{t("pm.types.pm25.title")}</strong>
                </h4>
                <p className="text-center">{t("pm.types.pm25.description")}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pm-type-card">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/pm10-size-300x300.png"
                  alt={t("pm.types.pm10.imageAlt")}
                  width={300}
                  height={300}
                  className="aligncenter"
                />
                <h4 className="text-center">
                  <strong>{t("pm.types.pm10.title")}</strong>
                </h4>
                <p className="text-center">{t("pm.types.pm10.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where does Particulate Matter come from */}
      <section className="pm-sources-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">
                <span>{t("pm.sources.title")}</span>
              </h2>
              <p className="text-center">
                <span>{t("pm.sources.primary")}</span>
              </p>
              <p className="text-center">
                <span>{t("pm.sources.secondary")}</span>
              </p>
              <p className="text-center">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/sources-of-particulate-matter-1024x452.jpg"
                  alt={t("pm.sources.imageAlt")}
                  width={1024}
                  height={452}
                  className="aligncenter wp-image-64013 size-large"
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PM - Air Quality Guidelines */}
      <section className="pm-guidelines-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">
                <span>{t("pm.guidelines.title")}</span>
              </h2>
              <p className="text-center">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/PM-Air-Quaity-Guidelines-1024x414.jpg"
                  alt={t("pm.guidelines.imageAlt")}
                  width={751}
                  height={304}
                  className="wp-image-64034 aligncenter"
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What level of Particulate Matter is unhealthy */}
      <section className="pm-unhealthy-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">
                <span>{t("pm.unhealthy.title")}</span>
              </h2>
              <p className="text-center">
                <span>{t("pm.unhealthy.description")}</span>
              </p>
            </div>
          </div>

          {/* Tabs for AQI */}
          <AqiTabsPM />
        </div>
      </section>

      {/* Why you should care about PM */}
      <section className="pm-care-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">
                <span>{t("pm.care.title")}</span>
              </h2>
              <h3 className="text-center">
                <span>{t("pm.care.subtitle")}</span>
              </h3>
              <p className="text-center">
                <span>{t("pm.care.description")}</span>
              </p>
            </div>
          </div>
          <div className="row pm-effects">
            <div className="col-md-1-5">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/eyes-273x300.png"
                alt={t("pm.care.effects.eyes.imageAlt")}
                width={273}
                height={300}
                className="aligncenter"
              />
              <p className="text-center">
                <span>{t("pm.care.effects.eyes.text")}</span>
              </p>
            </div>
            <div className="col-md-1-5">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/Nose-269x300.png"
                alt={t("pm.care.effects.nose.imageAlt")}
                width={269}
                height={300}
                className="aligncenter"
              />
              <p className="text-center">
                <span>{t("pm.care.effects.nose.text")}</span>
              </p>
            </div>
            <div className="col-md-1-5">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/throat-269x300.png"
                alt={t("pm.care.effects.throat.imageAlt")}
                width={269}
                height={300}
                className="aligncenter"
              />
              <p className="text-center">
                <span>{t("pm.care.effects.throat.text")}</span>
              </p>
            </div>
            <div className="col-md-1-5">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/asthma-269x300.png"
                alt={t("pm.care.effects.asthma.imageAlt")}
                width={269}
                height={300}
                className="aligncenter"
              />
              <p className="text-center">
                <span>{t("pm.care.effects.asthma.text")}</span>
              </p>
            </div>
            <div className="col-md-1-5">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/heart-269x300.png"
                alt={t("pm.care.effects.heart.imageAlt")}
                width={269}
                height={300}
                className="aligncenter"
              />
              <p className="text-center">
                <span>{t("pm.care.effects.heart.text")}</span>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">
                <span>{t("pm.care.sickness.title")}</span>
              </h3>
              <p className="text-center">
                <span>{t("pm.care.sickness.description")}</span>
              </p>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/sick-due-to-pm-air-pollution-600x1024.png"
                alt={t("pm.care.sickness.imageAlt")}
                width={200}
                height={200}
                className="sick"
              />

              <h3 className="text-center">
                <span>{t("pm.care.healthImpacts.title")}</span>
              </h3>
              <p className="text-center">
                <span>{t("pm.care.healthImpacts.description")}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to reduce PM exposure */}
      <section className="pm-reduce-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">
                <span>{t("pm.reduce.title")}</span>
              </h3>
              <p className="text-center">
                <span>{t("pm.reduce.description")}</span>
              </p>

              <h4 className="text-center">
                <strong>
                  <span>{t("pm.reduce.indoor.title")}</span>
                </strong>
              </h4>
              <p className="text-center">
                <span>{t("pm.reduce.indoor.description")}</span>
              </p>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/air-purifier-as-the-solution-for-indoor-air-pollution.jpg"
                alt={t("pm.reduce.indoor.imageAlt")}
                width={828}
                height={693}
                className="aligncenter"
              />

              <h4 className="text-center">
                <strong>
                  <span>{t("pm.reduce.outdoor.title")}</span>
                </strong>
              </h4>
              <p className="text-center">
                <span>{t("pm.reduce.outdoor.description")}</span>
              </p>
              <p className="text-center">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/N95-air-pollution-mask.jpg"
                  alt={t("pm.reduce.outdoor.imageAlt")}
                  width={504}
                  height={473}
                  className="sick"
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PM2.5 Air Quality Monitor */}
      <section className="pm-monitor-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">
                <span>{t("pm.monitor.title")}</span>
              </h3>
              <p className="text-center">
                <span>{t("pm.monitor.description")}</span>
              </p>

              <Image
                src="https://www.pranaair.com/wp-content/uploads/2022/12/pm2.5-air-quality-monitor-1024x546.png"
                alt={t("pm.monitor.imageAlt")}
                width={779}
                height={415}
                className="sick"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Air Quality Monitor */}
      <section className="pm-products-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">
                <span>{t("pm.products.title")}</span>
              </h3>

              {/* Product Carousel */}
              <div className="product-carousel">
                <MeasureCarousel applications={measureProducts} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
