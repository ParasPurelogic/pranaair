import "./styles.css"
import { getServerTranslation } from "@/i18n/server"
import Image from "next/image"

export default async function TemperaturePage() {
  const { t } = await getServerTranslation("what-temperature")

  return (
    <main>
      {/* Banner Section */}
      <section className="home-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="left-cloud">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/banner-cloud.png"
                  alt={t("temperature.banner.cloudAlt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="tem-meter">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/banner-temperature-meter.png"
                  alt={t("temperature.banner.temperatureMeterAlt")}
                  width={150}
                  height={300}
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="banner-text">
                <h1>
                  {t("temperature.banner.titleStart")}{" "}
                  <span className="tem-heading">{t("temperature.banner.titleHighlight")}</span>{" "}
                  {t("temperature.banner.titleEnd")}
                </h1>
                <p>{t("temperature.banner.description")}</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="right-cloud">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/banner-cloud-small.png"
                  alt={t("temperature.banner.smallCloudAlt")}
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="bottom-cloud">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/banner-cloud.png"
                  alt={t("temperature.banner.bottomCloudAlt")}
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temperature Classification Section */}
      <section className="tem-classification">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="hot-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Hot-temperature.png"
                  alt={t("temperature.classification.hotImageAlt")}
                  width={250}
                  height={300}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="temp-classification-text">
                <h2>{t("temperature.classification.title")}</h2>
                <p>{t("temperature.classification.description")}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cold-temp-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Cold-temperature.png"
                  alt={t("temperature.classification.coldImageAlt")}
                  width={250}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temperature Measurement Units Section */}
      <section className="temp-measure-unit">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="temp-measure-unit-heading">
                <h2>{t("temperature.units.title")}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="temp-unit-caps">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Degrees-Celsius.png"
                  alt={t("temperature.units.celsiusAlt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="temp-unit-text">
                <h3>{t("temperature.units.celsius")}</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="temp-unit-caps">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Degrees-Fahrenheit.png"
                  alt={t("temperature.units.fahrenheitAlt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="temp-unit-text">
                <h3>{t("temperature.units.fahrenheit")}</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="temp-unit-caps">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Kelvin.png"
                  alt={t("temperature.units.kelvinAlt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="temp-unit-text">
                <h3>{t("temperature.units.kelvin")}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Temperature Affects Air Quality Section */}
      <section className="temp-affect-air-quality">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="temp-affect-air-quality-text">
                <h2>{t("temperature.airQuality.title")}</h2>
                <p>{t("temperature.airQuality.description")}</p>
              </div>
              <div className="temp-affect-heading-box">
                <h3>{t("temperature.airQuality.hotTitle")}</h3>
              </div>
            </div>
          </div>
          <div className="row mob-revers">
            <div className="col-md-7">
              <div className="temp-affect-hot-cold-text">
                <h3>{t("temperature.airQuality.indoor")}</h3>
                <p>{t("temperature.airQuality.hotIndoorDescription")}</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="temp-affect-hot-cold-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/indoor-hot-weather.png"
                  alt={t("temperature.airQuality.hotIndoorImageAlt")}
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="temp-affect-hot-cold-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/hot-weather-outdoors.png"
                  alt={t("temperature.airQuality.hotOutdoorImageAlt")}
                  width={400}
                  height={300}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="temp-affect-hot-cold-text outdoor-right-side">
                <h3>{t("temperature.airQuality.outdoor")}</h3>
                <p>{t("temperature.airQuality.hotOutdoorDescription")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="temp-affect-heading-box">
                <h3>{t("temperature.airQuality.coldTitle")}</h3>
              </div>
            </div>
          </div>
          <div className="row mob-revers">
            <div className="col-md-7">
              <div className="temp-affect-hot-cold-text">
                <h3>{t("temperature.airQuality.indoor")}</h3>
                <p>{t("temperature.airQuality.coldIndoorDescription")}</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="temp-affect-hot-cold-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/indoor-pollutants-in-winters.png"
                  alt={t("temperature.airQuality.coldIndoorImageAlt")}
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="temp-affect-hot-cold-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/outdoor-pollution-in-winters.png"
                  alt={t("temperature.airQuality.coldOutdoorImageAlt")}
                  width={400}
                  height={300}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="temp-affect-hot-cold-text outdoor-right-side">
                <h3>{t("temperature.airQuality.outdoor")}</h3>
                <p className="cold-temp-outdoor-last-para">{t("temperature.airQuality.coldOutdoorDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temperature Scale Section */}
      <section className="temp-scale">
        <div className="container">
          <div className="row">
            <div className="col-md-1">
              <div className="temp-scale-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/temperature-scale.png"
                  alt={t("temperature.scale.imageAlt")}
                  width={100}
                  height={400}
                />
              </div>
            </div>
            <div className="col-md-11">
              <div className="temp-scale-para">
                <p>{t("temperature.scale.absoluteZeroDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temperature Inversion Section */}
      <section className="temp-inversion">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="temp-inversion-text">
                <h2>{t("temperature.inversion.title")}</h2>
                <p>{t("temperature.inversion.description1")}</p>
                <p>{t("temperature.inversion.description2")}</p>
                <p>{t("temperature.inversion.description3")}</p>
              </div>
              <div className="temp-inversion-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/temperature-inversion.jpg"
                  alt={t("temperature.inversion.imageAlt")}
                  width={800}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meteorological Factors Section */}
      <section className="meterological-fectors">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="meterological-fector-heading">
                <h2>{t("temperature.meteorological.title")}</h2>
                <p>{t("temperature.meteorological.description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="meterological-fector-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Wind-Speed-and-Direction.png"
                  alt={t("temperature.meteorological.windImageAlt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="meterological-fector-text">
                <h3>{t("temperature.meteorological.windTitle")}</h3>
                <p>{t("temperature.meteorological.windDescription")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meterological-fector-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Humidity.png"
                  alt={t("temperature.meteorological.humidityImageAlt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="meterological-fector-text">
                <h3>{t("temperature.meteorological.humidityTitle")}</h3>
                <p>{t("temperature.meteorological.humidityDescription")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="meterological-fector-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Density-of-air.png"
                  alt={t("temperature.meteorological.densityImageAlt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="meterological-fector-text">
                <h3>{t("temperature.meteorological.densityTitle")}</h3>
                <p>{t("temperature.meteorological.densityDescription")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meterological-fector-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Solar-radiation.png"
                  alt={t("temperature.meteorological.solarImageAlt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="meterological-fector-text">
                <h3>{t("temperature.meteorological.solarTitle")}</h3>
                <p>{t("temperature.meteorological.solarDescription")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="meterological-fector-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Rainfall.png"
                  alt={t("temperature.meteorological.rainfallImageAlt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="meterological-fector-text">
                <h3>{t("temperature.meteorological.rainfallTitle")}</h3>
                <p>{t("temperature.meteorological.rainfallDescription")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meterological-fector-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Atmospheric-Pressure.png"
                  alt={t("temperature.meteorological.pressureImageAlt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="meterological-fector-text">
                <h3>{t("temperature.meteorological.pressureTitle")}</h3>
                <p>{t("temperature.meteorological.pressureDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human Health Effects Section */}
      <section className="affect-human-health">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="human-health-affect-heading">
                <h2>{t("temperature.health.title")}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="meterological-fector-img health-affect-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/heat-related-illnesses.png"
                  alt={t("temperature.health.heatIllnessImageAlt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="meterological-fector-text health-affect-text">
                <h3>{t("temperature.health.heatIllnessTitle")}</h3>
                <p>{t("temperature.health.heatIllnessDescription")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meterological-fector-img health-affect-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/cardiovascular-health.png"
                  alt={t("temperature.health.cardiovascularImageAlt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="meterological-fector-text health-affect-text">
                <h3>{t("temperature.health.cardiovascularTitle")}</h3>
                <p>{t("temperature.health.cardiovascularDescription")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="meterological-fector-img health-affect-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/respiratory-effects.png"
                  alt={t("temperature.health.respiratoryImageAlt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="meterological-fector-text health-affect-text">
                <h3>{t("temperature.health.respiratoryTitle")}</h3>
                <p>{t("temperature.health.respiratoryDescription")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meterological-fector-img health-affect-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/dehydration.png"
                  alt={t("temperature.health.dehydrationImageAlt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="meterological-fector-text health-affect-text">
                <h3>{t("temperature.health.dehydrationTitle")}</h3>
                <p>{t("temperature.health.dehydrationDescription")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="meterological-fector-img health-affect-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Impact-on-mental-health.png"
                  alt={t("temperature.health.mentalImageAlt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="meterological-fector-text health-affect-text">
                <h3>{t("temperature.health.mentalTitle")}</h3>
                <p>{t("temperature.health.mentalDescription")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meterological-fector-img health-affect-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/infectious-diseases.png"
                  alt={t("temperature.health.infectiousImageAlt")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="meterological-fector-text health-affect-text">
                <h3>{t("temperature.health.infectiousTitle")}</h3>
                <p>{t("temperature.health.infectiousDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Monitor Products Slider Section */}
      <section className="air-quality-monitor-products-slider">
        {/* This section was empty in the original code */}
      </section>
    </main>
  )
}

