"use client"
import "./styles.css"
import "react-multi-carousel/lib/styles.css"

export default function TemperaturePage() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <main>
      {/* Banner Section */}
      <section className="home-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="left-cloud">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/banner-cloud.png" alt="Cloud" />
              </div>
              <div className="tem-meter">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/banner-temperature-meter.png"
                  alt="Temperature Meter"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="banner-text">
                <h1>
                  What does the word <span className="tem-heading">Temperature</span> mean?
                </h1>
                <p>
                  Temperature is an important physical quantity to determine how hot or cold a place is. This applies to
                  both inside and outside areas. Usually, indoor places are more comfortable than outdoor places because
                  we use air conditioners or heaters inside.
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="right-cloud">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/banner-cloud-small.png" alt="Cloud" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="bottom-cloud">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/banner-cloud.png" alt="Cloud" />
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
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Hot-temperature.png"
                  alt="Hot Temperature"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="temp-classification-text">
                <h2>Temperature classification</h2>
                <p>
                  When it comes to temperature, it can be divided into two categories: hot and cold. Cold temperatures
                  suggest a lower degree of warmth or even a chilliness in the air, whereas hot temperatures indicate a
                  higher level of warmth. Air conditioning systems aid in temperature regulation, providing relaxation
                  during hot weather, while room heaters provide warmth during colder weather.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cold-temp-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Cold-temperature.png"
                  alt="Cold Temperature"
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
                <h2>Temperature measurement units</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="temp-unit-caps">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/Degrees-Celsius.png" alt="Celsius" />
              </div>
              <div className="temp-unit-text">
                <h3>Degrees Celsius</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="temp-unit-caps">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Degrees-Fahrenheit.png"
                  alt="Fahrenheit"
                />
              </div>
              <div className="temp-unit-text">
                <h3>Degrees Fahrenheit</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="temp-unit-caps">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/Kelvin.png" alt="Kelvin" />
              </div>
              <div className="temp-unit-text">
                <h3>Kelvin</h3>
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
                <h2>How temperature affects Air Quality?</h2>
                <p>
                  Air quality can influence in various ways by different temperatures. The impact of temperature on air
                  quality is diverse and depends on specific conditions. For instance, high temperatures can exacerbate
                  air pollution problems in several ways.
                </p>
              </div>
              <div className="temp-affect-heading-box">
                <h3>Hot temperatures</h3>
              </div>
            </div>
          </div>
          <div className="row mob-revers">
            <div className="col-md-7">
              <div className="temp-affect-hot-cold-text">
                <h3>Indoor</h3>
                <p>
                  High indoor temperature can have negative consequences on air quality. Indoor spaces can serve as
                  sources of different air pollutants, including TVOCs (Total Volatile Organic Compounds), radon, CO2
                  (carbon dioxide), CO (carbon monoxide), PM1 (particulate matter with a diameter of 1 micrometer), O3
                  (ozone), and more. The combination of these pollutants can pose risks to the average individuals
                  health.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="temp-affect-hot-cold-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/indoor-hot-weather.png"
                  alt="Indoor Hot Temperature"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="temp-affect-hot-cold-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/hot-weather-outdoors.png"
                  alt="Outdoor Hot Temperature"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="temp-affect-hot-cold-text outdoor-right-side">
                <h3>Outdoors</h3>
                <p>
                  Stagnant air becomes more widespread during hot weather, hindering the natural dispersion of
                  contaminants. This can cause contaminants to accumulate in the atmosphere, resulting in lower air
                  quality. Extreme heat can promote the development of ozone gas and particle pollution. High
                  temperatures additionally trigger forest fires, which can worsen air quality and reduce forest land
                  area.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="temp-affect-heading-box">
                <h3>Cold temperatures</h3>
              </div>
            </div>
          </div>
          <div className="row mob-revers">
            <div className="col-md-7">
              <div className="temp-affect-hot-cold-text">
                <h3>Indoor</h3>
                <p>
                  In colder temperatures, people often spend more time indoors compared to hot weather. Additionally,
                  during this time, doors and windows are typically kept closed to retain warmth. However, this can lead
                  to the trapping of pollutants indoors, which can have adverse effects, particularly on sensitive
                  groups.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="temp-affect-hot-cold-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/indoor-pollutants-in-winters.png"
                  alt="Indoor Cold Temperature"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="temp-affect-hot-cold-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/outdoor-pollution-in-winters.png"
                  alt="Outdoor Cold Temperature"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="temp-affect-hot-cold-text outdoor-right-side">
                <h3>Outdoors</h3>
                <p className="cold-temp-outdoor-last-para">
                  In colder temperatures, the air in the atmosphere becomes chilly. This cold air is denser compared to
                  hot air, which leads to an interesting phenomenon: the trapping of pollutants. Due to the higher
                  density, cold air has a tendency to trap pollutants closer to the ground, resulting in reduced air
                  quality. This phenomenon is often observed during the winter season when fog becomes more prevalent.
                  Other than this, temperature inversions are also tend to occur during winter season.
                </p>
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
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/temperature-scale.png"
                  alt="Temperature Scale"
                />
              </div>
            </div>
            <div className="col-md-11">
              <div className="temp-scale-para">
                <p>
                  In theory, absolute zero is the lowest temperature at which a substance has no heat energy. It is
                  defined as zero Kelvin (0 Kelvin), which corresponds to -273.16 degrees Celsius and -459.69 degrees
                  Fahrenheit.
                </p>
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
                <h2>Temperature Inversion</h2>
                <p>
                  Temperature inversion is a common occurrence during winter, characterized by a unique temperature
                  differentiation pattern. Normally, the temperature gradient follows a pattern from warm air to cooler
                  air and then to the coldest air. However, during winter inversion, sometimes, the situation is
                  reversed. The cooler layer rests immediately above the grounds surface, followed by warmer air and
                  then the coldest air at higher altitudes.
                </p>
                <p>
                  This inversion phenomenon creates a trapping effect for air pollutants near the Earths surface. The
                  pollutants, instead of dispersing into the atmosphere, become trapped within the lower layer of colder
                  air. This stagnant condition makes it difficult for the pollutants to dissipate, leading to increased
                  concentrations of air pollution.
                </p>
                <p>
                  The problem is further exacerbated during winter due to the burning of wood and coal for heating
                  purposes. These activities release additional pollutants into the air, which, coupled with the
                  inversion effect, contribute to deteriorating air quality during the winter season.
                </p>
              </div>
              <div className="temp-inversion-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/temperature-inversion.jpg"
                  alt="Temperature Inversion"
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
                <h2>Other meteorological factors that affect air quality</h2>
                <p>
                  Air quality in a given geographical area is significantly influenced by various meteorological
                  conditions. These weather conditions play a crucial role in shaping and altering the quality of the
                  air we breathe. Some of these meteorological conditions that affect air quality are as follows:
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="meterological-fector-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Wind-Speed-and-Direction.png"
                  alt="Wind Speed and Direction"
                />
              </div>
              <div className="meterological-fector-text">
                <h3>Wind Speed and Direction</h3>
                <p>
                  The wind is a natural mechanism for improving air quality. It can carry pollutants from hotspots to
                  less polluted areas.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meterological-fector-img">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/Humidity.png" alt="Humidity" />
              </div>
              <div className="meterological-fector-text">
                <h3>Humidity</h3>
                <p>
                  Humidity in the air makes the air more heavy and denser, which means it can trap air pollutants such
                  as particle pollution, smoke, etc.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="meterological-fector-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Density-of-air.png"
                  alt="Density of air"
                />
              </div>
              <div className="meterological-fector-text">
                <h3>Density of air</h3>
                <p>
                  The density of air highly influences air pollution dispersal. The higher the air density, the higher
                  the amount of pollutants that trap inside it.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meterological-fector-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Solar-radiation.png"
                  alt="Solar radiation"
                />
              </div>
              <div className="meterological-fector-text">
                <h3>Solar radiation</h3>
                <p>
                  Solar radiation plays a vital role in photochemical reactions that take place on the earths surface.
                  That mainly includes ozone (O3) gas generation.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="meterological-fector-img">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/Rainfall.png" alt="Rainfall" />
              </div>
              <div className="meterological-fector-text">
                <h3>Rainfall</h3>
                <p>
                  Rainfall helps in clearing the air of dust particles, particle pollution, smoke, etc., and hence,
                  influences the air quality by clearing the air quality of that area.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meterological-fector-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Atmospheric-Pressure.png"
                  alt="Atmospheric Pressure"
                />
              </div>
              <div className="meterological-fector-text">
                <h3>Atmospheric Pressure</h3>
                <p>
                  The vertical mixing of air contaminants can heavily influence by atmospheric pressure. This is where
                  the concept of Temperature Inversion comes into play.
                </p>
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
                <h2>How does temperature affect human health?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="meterological-fector-img health-affect-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/heat-related-illnesses.png"
                  alt="Heat-related Illnesses"
                />
              </div>
              <div className="meterological-fector-text health-affect-text">
                <h3>Heat-related Illnesses</h3>
                <p>
                  High temperatures can cause heat exhaustion and heat stroke, leading to symptoms like dizziness and
                  even organ failure in extreme cases.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meterological-fector-img health-affect-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/cardiovascular-health.png"
                  alt="Cardiovascular Health"
                />
              </div>
              <div className="meterological-fector-text health-affect-text">
                <h3>Cardiovascular Health</h3>
                <p>
                  Hot temperatures stress the cardiovascular system, increasing the risk of strokes, heart attacks, and
                  other cardiovascular problems.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="meterological-fector-img health-affect-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/respiratory-effects.png"
                  alt="Respiratory Effects"
                />
              </div>
              <div className="meterological-fector-text health-affect-text">
                <h3>Respiratory Effects</h3>
                <p>
                  Temperature fluctuations can worsen respiratory issues like asthma, and COPD, making breathing more
                  difficult and exacerbating symptoms.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meterological-fector-img health-affect-img">
                <img src="https://www.pranaair.com/wp-content/uploads/2023/07/dehydration.png" alt="Dehydration" />
              </div>
              <div className="meterological-fector-text health-affect-text">
                <h3>Dehydration</h3>
                <p>
                  During a heatwave, staying hydrated is crucial as high temperatures and excessive sweating can cause
                  dehydration, fatigue, and heat-related illnesses.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="meterological-fector-img health-affect-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Impact-on-mental-health.png"
                  alt="Impact on Mental Health"
                />
              </div>
              <div className="meterological-fector-text health-affect-text">
                <h3>Impact on Mental Health</h3>
                <p>
                  Extreme temperatures can disrupt sleep, increase stress levels, cause irritation, and contribute to
                  seasonal affective disorder (SAD).
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meterological-fector-img health-affect-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/infectious-diseases.png"
                  alt="Infectious Diseases"
                />
              </div>
              <div className="meterological-fector-text health-affect-text">
                <h3>Infectious Diseases</h3>
                <p>
                  Temperature impacts disease occurrence and spread by influencing the transmission and survival of
                  diseases like malaria and respiratory infections.
                </p>
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

