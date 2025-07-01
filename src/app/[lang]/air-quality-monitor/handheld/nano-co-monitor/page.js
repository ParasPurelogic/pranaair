import StickyNav from "@/Components/Pages/NanoComonitor/sticky-nav"
import "./style.css"
import COMonitorSlider from "@/Components/Pages/NanoComonitor/co-monitor-slider"
import FaqAccordion from "@/Components/Pages/NanoComonitor/faq-accordion"
import { getServerTranslation } from "@/i18n/server"
import { domain, supportedLanguages } from "@/config"

// ✅ SEO Metadata //
export async function generateMetadata({ params }) {
  const lang = params?.lang || "en";
  const slug = "air-quality-monitor"; // page-specific slug
  const { t } = await getServerTranslation("nano-co");
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
export default async function NanoCOMonitor() {
  const { t } = await getServerTranslation("nano-co")
  const faqs = [
    {
      id: "faq1",
      title: t("faq.faq1.title") || "1. What is the ideal range of CO levels in indoor environments?",
      content: t("faq.faq1.content") ||
        "The ideal range of CO levels in indoor environments is below 9 parts per million (ppm). However, it is recommended to maintain levels below 5 ppm for better indoor air quality and to ensure safety.",
    },
    {
      id: "faq2",
      title: t("faq.faq2.title") || "2. How often should I check the CO levels using the portable monitor?",
      content: t("faq.faq2.content") ||
        "If you are exposed to CO gas, you should check it often. Due to the compact size of the monitor, it is easy to carry so you can carry it easily, without any hassle.",
    },
    {
      id: "faq3",
      title: t("faq.faq3.title") || "3. How accurate are the readings on the monitor?",
      content: t("faq.faq3.content") || "±(5ppmm + 5%)",
    },
    {
      id: "faq4",
      title: t("faq.faq4.title") || "4. How does the alarm on the monitor work?",
      content: t("faq.faq4.content") || "To activate or deactivate the alarm, use the 'S' button on the monitor.",
    },
    {
      id: "faq5",
      title: t("faq.faq5.title") || "5. How many times does the alarm work?",
      content: t("faq.faq5.content") || "50-100 ppm- 3 times per 3 minutes\n101-200 ppm- 5 times per 3 minutes\n> 200 ppm- 10 times per minute",
    },
    {
      id: "faq6",
      title: t("faq.faq6.title") || "6. What is the use time of the monitor?",
      content: t("faq.faq6.content") || "About 14 hours after a full charge",
    },
    {
      id: "faq7",
      title: t("faq.faq7.title") || "7. Can the portable CO monitor be used in vehicles, such as cars and trucks?",
      content: t("faq.faq7.content") ||
        "Due to its compact size and accurate data, the mini air quality monitor is highly versatile and suitable for a wide range of indoor and outdoor applications.",
    },
  ]
  const nanoSliderContent = [
    {
      image: "https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-smart-real-time-portable-co-monitor.jpeg",
      alt: t("nanoSlider.slide1.alt") || "real-time measuring of vehicle co emissions with prana air co monitor",
      heading: t("nanoSlider.slide1.heading") || "Portable · Easy to Carry",
      description: t("nanoSlider.slide1.description") || "Prana Air's nano air quality monitor is designed to help you achieve a healthier lifestyle. With its compact and user-friendly design, you can easily stay informed about the air you breathe without the need for bulky and complex equipment.",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2023/05/pocket-friendly-co-monitor.jpg",
      alt: t("nanoSlider.slide2.alt") || "prana air pocket friendly co monitor",
      heading: t("nanoSlider.slide2.heading") || "Pocket-friendly · Lightweight",
      description: t("nanoSlider.slide2.description") || "Real-time monitoring of CO levels allows you to make data-driven decisions to improve the air quality of your surrounding environment!",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <StickyNav />
      {/* Breadcrumbs Section */}
      <section className="bredcrums-pages">
        <div className="container">
          <div className="row page-breadcrum">
            <div className="col-md-12">
              <div className="static-breadcrums">
                <ul>
                  <li style={{ listStyleType: "none" }}>
                    <ul>
                      <li>
                        <a href="#">{t("breadcrumbs.home") || "Home"}</a>
                      </li>
                      <li>
                        <a href="/air-quality-monitors">
                          {t("breadcrumbs.airQualityMonitors") || "Air Quality Monitors"}
                        </a>{" "}
                        &gt;
                      </li>
                      <li>
                        <a href="#">
                          <b>{t("breadcrumbs.nanoMonitor") || "Nano Monitor"}</b>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keychain Monitor Section */}
      <section className="keychain-monitor-section" id="overview">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ipad">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active tabcontent"
                  id="Comonitora"
                  role="tabpanel"
                  aria-labelledby="comonitora-tab"
                >
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-device.png"
                    alt={t("keychainMonitor.images.device.alt") || "prana air nano co monitor device"}
                  />
                </div>

                <div
                  className="tab-pane fade tabcontent"
                  id="Comanitorb"
                  role="tabpanel"
                  aria-labelledby="comanitorb-tab"
                >
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-front-view.png"
                    alt={t("keychainMonitor.images.frontView.alt") || "Prana Air nano co monitor front view"}
                  />
                </div>

                <div
                  className="tab-pane fade tabcontent"
                  id="Comanitorc"
                  role="tabpanel"
                  aria-labelledby="comanitorc-tab"
                >
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-left-side-view.png"
                    alt={t("keychainMonitor.images.leftSideView.alt") || "prana air nano co monitor left side view"}
                  />
                </div>

                <div
                  className="tab-pane fade tabcontent"
                  id="Comanitord"
                  role="tabpanel"
                  aria-labelledby="comanitord-tab"
                >
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-back-side-view.png"
                    alt={t("keychainMonitor.images.backSideView.alt") || "Prana Air nano co monitor back side view"}
                  />
                </div>
              </div>

              <div className="tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active tablinks"
                      id="comonitora-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Comonitora"
                      type="button"
                      role="tab"
                      aria-controls="Comonitora"
                      aria-selected="true"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-device.png"
                        alt={t("keychainMonitor.images.device.alt") || "prana air nano co monitor device"}
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tablinks"
                      id="comanitorb-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Comanitorb"
                      type="button"
                      role="tab"
                      aria-controls="Comanitorb"
                      aria-selected="false"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-front-view.png"
                        alt={t("keychainMonitor.images.frontView.alt") || "Prana Air nano co monitor front view"}
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tablinks"
                      id="comanitorc-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Comanitorc"
                      type="button"
                      role="tab"
                      aria-controls="Comanitorc"
                      aria-selected="false"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-left-side-view.png"
                        alt={t("keychainMonitor.images.leftSideView.alt") || "prana air nano co monitor left side view"}
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tablinks"
                      id="comanitord-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Comanitord"
                      type="button"
                      role="tab"
                      aria-controls="Comanitord"
                      aria-selected="false"
                    >
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-back-side-view.png"
                        alt={t("keychainMonitor.images.backSideView.alt") || "Prana Air nano co monitor back side view"}
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 ipad">
              <div className="product-text">
                <div className="inner-product-txt">
                  <h1>{t("keychainMonitor.productTitle") || "Nano CO Monitor"}</h1>
                  {t("keychainMonitor.productSubtitle") || "Your portable health device"}
                </div>
                <div className="mrp-sec">
                  <div className="discount-mrp woocom-list-content">
                    <h6>{t("keychainMonitor.mrp") || "m.r.p."}</h6>
                    {t("keychainMonitor.price") || "₹8,990"}
                  </div>
                  <section className="articles-container">
                    <article className="article">
                      <p>
                        {t("keychainMonitor.description.paragraph1") ||
                          "Prana Air nano CO monitor is a small portable device that enables real-time monitoring of carbon monoxide (CO) levels. With its advanced and innovative cutting-edge technology, you can keep track of your carbon footprint in real-time."}
                      </p>
                      <p>
                        {t("keychainMonitor.description.paragraph2") ||
                          "It is a low-cost monitor that can give the same data reading like the high-end equipments"}
                      </p>
                    </article>
                  </section>
                </div>
              </div>
            </div>

            <div className="col-md-4 ipad">
              <div className="add-cart-box">
                <div className="model-box">
                  <h5>{t("keychainMonitor.model.title") || "model"}</h5>
                  <select className="nav dropbtn">
                    <option value="/air-quality-monitor/handheld/nano-co-monitor/">
                      {t("keychainMonitor.model.options.nanoCO") || "Nano CO"}
                    </option>
                    <option value="/air-quality-monitor/handheld/nano-co2-monitor/">
                      {t("keychainMonitor.model.options.nanoCO2") || "Nano CO2"}
                    </option>
                    <option value="/air-quality-monitor/handheld/nano-tvoc-monitor/">
                      {t("keychainMonitor.model.options.nanoTVOC") || "Nano TVOC/HCHO"}
                    </option>
                    <option value="/breathalyzer/">
                      {t("keychainMonitor.model.options.breathalyzer") || "Breathalyzer"}
                    </option>
                  </select>

                  <div className="model-box">
                    <h5>{t("keychainMonitor.quantity.title") || "Quantity"}</h5>
                    <div className="stepper"></div>
                    <div className="buy-btns">
                      <form className="cart new-cart" action="#">
                        <div className="quantity buttons_added">
                          <input
                            type="number"
                            id="quantity"
                            step="1"
                            min="1"
                            max="9999"
                            name="quantity"
                            defaultValue="1"
                            title="Qty"
                            className="input-text qty text"
                            size="4"
                            pattern="[0-9]*"
                            inputMode="numeric"
                          />
                        </div>
                        <button
                          type="submit"
                          name="add-to-cart"
                          value="76353"
                          className="single_add_to_cart_button button alt"
                        >
                          {t("keychainMonitor.buyNowButton") || "Buy Now"}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Women Bag Banner Section */}
      <section className="women-bag-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="women-banner-txt">
                <h3>{t("womenBagBanner.heading") || "Monitoring CO Gas"}</h3>
                <h5>{t("womenBagBanner.subheading") || "has never been this easy!"}</h5>
                {t("womenBagBanner.description") ||
                  "Prana Air nano CO monitor is convenient to carry over larger distances with a simple yet attractive style and high data accuracy."}
              </div>
              <div className="health-icon">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/cycling-icon-new.png"
                      alt={t("womenBagBanner.icons.cycling") || "cycling icon"}
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/health-icon-new.png"
                      alt={t("womenBagBanner.icons.health") || "health icon"}
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/running-icon-new.png"
                      alt={t("womenBagBanner.icons.running") || "running icon"}
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/sitting-icon-new.png"
                      alt={t("womenBagBanner.icons.sitting") || "sitting icon"}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-portable-nano-co-monitor.png"
                alt={t("womenBagBanner.mainImage") || "Woman with CO Monitor"}
                className="womwn-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Quality Section */}
      <section className="product-quality-section" id="features">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-8 produt-img ipad">
              <div className="product-features">
                <ul className="product-features-list-one">
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/co-monitor-icon.png"
                      alt={t("productQuality.features.realTimeMonitoring.alt") || "real-time co monitoring icon"}
                    />
                    {t("productQuality.features.realTimeMonitoring.text") || "Real-time Monitoring"}
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/mini-device-icon.png"
                      alt={t("productQuality.features.portableDevice.alt") || "portable co monitor icon"}
                    />
                    {t("productQuality.features.portableDevice.text") || "Portable Device"}
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/electrochemical-sensor.png"
                      alt={
                        t("productQuality.features.electrochemicalSensor.alt") ||
                        "electrochemical sensor on nano co monitor"
                      }
                    />
                    {t("productQuality.features.electrochemicalSensor.text") || "Electrochemical Sensor"}
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/dynamic-ui-icon-1.png"
                      alt={t("productQuality.features.dynamicUI.alt") || "Dynamic UI on co monitor"}
                    />
                    {t("productQuality.features.dynamicUI.text") || "Dynamic UI"}
                  </li>
                </ul>
                <ul className="product-features-list-two">
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/mah-battery-icon.png"
                      alt={t("productQuality.features.battery.alt") || "battery icon"}
                    />
                    {t("productQuality.features.battery.text") || "1000 mAh Battery"}
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/hd-clr-icon.png"
                      alt={t("productQuality.features.hdDisplay.alt") || "HD-Color-Display"}
                    />
                    {t("productQuality.features.hdDisplay.text") || "HD Color Display"}
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/c-type-icon.png"
                      alt={t("productQuality.features.typeCCharging.alt") || "type-c charging"}
                    />
                    {t("productQuality.features.typeCCharging.text") || "Type-C Charging"}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 ipad">
              <div className="product-quantity-txt">
                <h5>{t("productQuality.title") || "Nano CO Monitor"}</h5>
                <h3>{t("productQuality.subtitle") || "Qualitative features"}</h3>
                {t("productQuality.description") ||
                  "It has a small, compact body with a minimal and attractive style. People adore our nano health consultant and the way it combines aesthetics and technology.-"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High Definition Banner Section */}
      <section className="high-defination-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="highr-defination-txt">
                <h3>{t("highDefinitionBanner.displaySize") || "1.9"}</h3>
                <h5>{t("highDefinitionBanner.displayTitle") || "Ultra High Definition color Display"}</h5>
                {t("highDefinitionBanner.description") ||
                  "Prana Air portable CO monitor is designed with a simple yet attractive style, making it convenient to carry over long distances."}
              </div>
            </div>
            <div className="col-md-5">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-high-resolution-display.png"
                alt={t("highDefinitionBanner.imageAlt") || "High Definition Display"}
                className="high-dispaly-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Handy Portable Section */}
      <section className="heandy-portable-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 handy-bg ipad">
              <div className="handy-box">
                <div className="handy-img">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/handy-device.png"
                    alt={t("handyPortableSection.handy.imageAlt") || "handy-device"}
                  />
                </div>
                <div className="handy-txt">
                  <h4>{t("handyPortableSection.handy.title") || "Handy"}</h4>
                  {t("handyPortableSection.handy.description") ||
                    "Equipped with high-precision sensors, the ultra-high definition color screen of Nano CO monitor offers a more user-friendly and convenient way to monitor the real-time CO levels."}
                </div>
              </div>
            </div>
            <div className="col-md-6 ipad">
              <div className="handy-box handy-box-left">
                <div className="handy-img portable-img">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-portable-co-monitor-detector.png"
                    alt={t("handyPortableSection.portable.imageAlt") || "prana air portable co monitor detector"}
                  />
                </div>
                <div className="handy-txt portable-txt">
                  <h4>{t("handyPortableSection.portable.title") || "Portable"}</h4>
                  {t("handyPortableSection.portable.description") ||
                    "The mini health consultant from Prana Air is loved for its sleek, compact design that seamlessly combines aesthetics and advanced technology, making it a popular choice among users."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Monoxide Section */}
      <section className="corbon-monoxide-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ipad">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/health-effects-of-carbon-monoxide-gas-2048x1130.jpeg"
                alt={t("carbonMonoxide.imageAlt") || "Carbon Monoxide Hazards"}
                className="carbon-monoxide-img"
              />
            </div>
            <div className="col-md-6 ipad">
              <div className="monoxide-txt">
                <h4>{t("carbonMonoxide.title") || "Carbon Monoxide Hazards: Why is it critical?"}</h4>
                {t("carbonMonoxide.description") ||
                  "Carbon monoxide is a colorless, odorless, and non-irritating gas, therefore it cannot be detected with mere human senses. It is also likely to explode when mixed with air (limit: 12.5%∼74.2%). CO is very easy to combine with hemoglobin, which further makes it difficult for the blood to carry oxygen to other body parts. This compromises the tissue respiration rate and even death in severe cases. CO gas has toxic effects on tissues and cells of the whole body, especially on the cerebral cortex."}
              </div>
            </div>
          </div>
          <div className="row healt-hazards">
            <div className="col-md-4">
              <h4 className="hazard-txt-co">
                {t("carbonMonoxide.hazards.title") || "Health Hazards of"}{" "}
                <span> {t("carbonMonoxide.hazards.titleSpan") || "CO Gas"} </span>
              </h4>
              <div className="health-hazars-data">
                <div className="inner-data">
                  {t("carbonMonoxide.hazards.level1.range") || "0-1 ppm :"}
                  <h4>{t("carbonMonoxide.hazards.level1.description") || "normal level"}</h4>
                  <div className="bar"></div>
                </div>
                <div className="inner-data innr-last-data">
                  {t("carbonMonoxide.hazards.level4.range") || "51-100 PPM :"}
                  <h4>{t("carbonMonoxide.hazards.level4.description") || "OSHA Exposure Limits"}</h4>
                  <div className="pink"></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="health-hazars-data pd-hazard">
                <div className="inner-data">
                  {t("carbonMonoxide.hazards.level2.range") || "2-9 PPM :"}
                  <h4>
                    {t("carbonMonoxide.hazards.level2.description") || "ASHRAE 62-1989 Specific standard living area"}
                  </h4>
                  <div className="yellow"></div>
                </div>
                <div className="inner-data innr-last-data">
                  {t("carbonMonoxide.hazards.level5.range") || "101-200 PPM :"}
                  <h4>
                    {t("carbonMonoxide.hazards.level5.description") || "Mild headache, fatigue, nausea, and dizziness"}
                  </h4>
                  <div className="purpule"></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="health-hazars-data pd-hazard">
                <div className="inner-data">
                  {t("carbonMonoxide.hazards.level3.range") || "10-50 PPM :"}
                  <h4>
                    {t("carbonMonoxide.hazards.level3.description") || "Avg. 8-hour stay in OSHA confined spaces"}
                  </h4>
                  <div className="orange"></div>
                </div>
                <div className="inner-data innr-last-data">
                  {t("carbonMonoxide.hazards.level6.range") || ">800 PPM :"}
                  <h4>
                    {t("carbonMonoxide.hazards.level6.description") ||
                      "Dizziness, nausea, and convulsion, death within 2-3 hrs."}
                  </h4>
                  <div className="red"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CO Monitor Outdoor Slider */}
      <section className="co-monitore-outdoor-slider">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <COMonitorSlider nanoSliderContent={nanoSliderContent} />
            </div>
          </div>
        </div>
      </section>

      {/* Real Time Data Section */}
      <section className="real-time-data-section">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-6 ipad">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-real-time-monitoring-device.png"
                alt={t("realTimeData.imageAlt") || "Real Time Data"}
                className="real-time-data-img"
              />
            </div>
            <div className="col-md-6 ipad">
              <div className="real-time-data-txt deskshow">
                <h5>{t("realTimeData.title") || "Real-time Data"}</h5>
                <h4>{t("realTimeData.subtitle") || "CO levels within seconds"}</h4>
                {t("realTimeData.description") ||
                  "Our advanced CO-Electrochemical sensing technology provides real-time data and insights on carbon emissions, enabling you to stay informed and reduce harmful carbon monoxide levels for a healthier lifestyle."}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Banner */}
      <div className="container-fluid">
        <div className="row out-door-banner">
          <div className="col-md-12">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2023/05/measuring-vehicle-emission-with-prana-air-co-monitor-2048x742.jpg"
              alt={t("outdoorBanner.imageAlt") || "Outdoor Monitor Device"}
              className="outdoor-monitor-device-img"
            />
          </div>
        </div>
      </div>

      {/* Electrochemical Heading */}
      <div className="container">
        <div className="row electrochemical-heading">
          <div className="col-md-12">
            <div className="electrochecmial-para">
              <h5 className="heading-bg">
                {t("electrochemicalHeading.title") || "Electrochemical Sensing Technology"}
              </h5>
              <h4>{t("electrochemicalHeading.subtitle") || "For CO Detection"}</h4>
              {t("electrochemicalHeading.description") ||
                "It works by electrochemically oxidizing the CO gas at a platinum electrode, which generates a current proportional to the CO gas concentration. The generated current is then measured and processed by an electronic circuit to determine the CO concentration."}
            </div>
          </div>
        </div>
      </div>

      {/* Smart Chip Section */}
      <section className="smart-chip-section">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-5">
              <div className="smart-chip-txt">
                <h5>{t("smartChip.title") || "High-sensitive Smart Chip"}</h5>
                <h4>{t("smartChip.subtitle") || "for more Accurate Detection"}</h4>
                {t("smartChip.description") ||
                  "Built-in high-performance smart chip for electrochemical carbon monoxide detection to ensure more accurate detection by the instrument."}
                <ul className="smart-chip-quality">
                  <li>{t("smartChip.features.sensitivity") || "High Sensitivity"}</li>
                  <li>{t("smartChip.features.accuracy") || "Accurate Data"}</li>
                  <li>{t("smartChip.features.speed") || "Fast Operation Speed"}</li>
                  <li>{t("smartChip.features.efficiency") || "Energy Efficient"}</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-smart-chip-sensor-on-co-monitor-2048x1829.png"
                alt={t("smartChip.imageAlt") || "Smart Chip"}
                className="smart-chip-img floating"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Attractive Details Section */}
      <section className="attractive-details-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 ipad">
              <div className="attractive-txt">
                <h4>{t("attractiveDetails.title") || "Attractive details for easy carrying"}</h4>
              </div>
            </div>
            <div className="col-md-9 ipad"></div>
          </div>
          <div className="row ipad mob-scroll">
            <div className="col-md-4 ipad">
              <div className="attract-bg-box">
                <div className="top_head">
                  <p>
                    <span className="range_no">01</span>
                  </p>
                  <h4>
                    {t("attractiveDetails.features.typeC.title") || "Type C"}{" "}
                    <span className="detail_text">{t("attractiveDetails.features.typeC.subtitle") || "Charging"}</span>
                  </h4>
                </div>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-with-type-c-charger.jpeg"
                  alt={
                    t("attractiveDetails.features.typeC.imageAlt") || "prana air nano co monitor with type c charger"
                  }
                />
              </div>
            </div>
            <div className="col-md-4 attract-bg ipad">
              <div className="attract-bg-box">
                <div className="top_head">
                  <p>
                    <span className="range_no">02</span>
                  </p>
                  <h4>
                    {t("attractiveDetails.features.lanyard.title") || "Anti-loss"}{" "}
                    <span className="detail_text">{t("attractiveDetails.features.lanyard.subtitle") || "Lanyard"}</span>
                  </h4>
                </div>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/anti-loss-lanyard-strap-on-co-monitor.jpeg"
                  alt={t("attractiveDetails.features.lanyard.imageAlt") || "anti loss lanyard strap on co monitor"}
                />
              </div>
            </div>
            <div className="col-md-4 attract-bg">
              <div className="attract-bg-box">
                <div className="top_head">
                  <p>
                    <span className="range_no">03</span>
                  </p>
                  <h4>
                    {t("attractiveDetails.features.screen.title") || "Ultra HD"}{" "}
                    <span className="detail_text">
                      {t("attractiveDetails.features.screen.subtitle") || "Color screen"}
                    </span>
                  </h4>
                </div>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/05/ultra-hd-screen-on-prana-air-co-monitor.jpeg"
                  alt={t("attractiveDetails.features.screen.imageAlt") || "ultra hd screen on prana air co monitor"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Key Function Section */}
      <section className="product-key-function-section" id="Keyfunctions">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="product-function-txt">
                <h4>{t("productKeyFunction.title") || "Product Key Functions"}</h4>
              </div>
            </div>
            <div className="col-md-9"></div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-button-functions.jpeg"
                alt={t("productKeyFunction.imageAlt") || "Product Key Functions"}
                className="product-key-function"
              />
            </div>
            <div className="col-md-7">
              <div className="power-key-box">
                <ul>
                  <li>{t("productKeyFunction.powerKey.title") || "power key"}</li>
                  <li>{t("productKeyFunction.powerKey.longPress") || "Long Press : On/Off"}</li>
                  <li>{t("productKeyFunction.powerKey.singlePress") || "Single Press : Change Temp. Unit (°C/F)"}</li>
                </ul>
              </div>

              <div className="turn-alarm">
                <ul>
                  <li>{t("productKeyFunction.alarmKey.singlePress") || "Single Press : Turn Alarm "}</li>
                  <li>
                    {t("productKeyFunction.alarmKey.on") || "on"}{" "}
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/volume-on.png"
                      alt={t("productKeyFunction.alarmKey.volumeOnAlt") || "volume-on"}
                    />
                    <span>|</span> {t("productKeyFunction.alarmKey.off") || "off"}{" "}
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/volume-off.png"
                      alt={t("productKeyFunction.alarmKey.volumeOffAlt") || "volume-off"}
                    />
                  </li>
                </ul>
              </div>

              <div className="brightness-levels">
                <ul>
                  <li>
                    {t("productKeyFunction.brightnessKey.singlePress") || "Single Press : Change Brightness Levels "}
                  </li>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/full-brightness.png"
                      alt={t("productKeyFunction.brightnessKey.fullBrightnessAlt") || "full-brightness"}
                    />
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/half-brightness.png"
                      alt={t("productKeyFunction.brightnessKey.halfBrightnessAlt") || "half-brightness"}
                    />
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/05/low-brightness.png"
                      alt={t("productKeyFunction.brightnessKey.lowBrightnessAlt") || "low-brightness"}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Endurance Section */}
      <section className="battery-endurance-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="battery-txt">
                <h5>{t("batteryEndurance.title") || "Large-capacity Polymer"}</h5>
                <h4>{t("batteryEndurance.subtitle") || "1000 mAh Battery Endurance"}</h4>
                {t("batteryEndurance.description") ||
                  "Safe and Durable high-performance 1000 mAh large capacity polymer lithium ion battery, with super long endurance."}
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/nano-co-monitor-long-battery-capacity.png"
                alt={t("batteryEndurance.imageAlt") || "Large Battery"}
                className="large-battery-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Banner */}
      <div className="container-fluid">
        <div className="row out-door-banner">
          <div className="col-md-12">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2023/05/real-time-measuring-of-co-gas-in-kitchen-2048x634.jpeg"
              alt="Outdoor Monitor Device"
              className="outdoor-monitor-device-img"
            />
          </div>
        </div>
      </div>

      {/* Real Time CO Detection */}
      <section className="real-time-co-detection">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-6">
              <div className="real-time-co-dect-heading">
                <h4>{t("realTimeCODetection.title") || "Real-time CO detection with"}</h4>
                <h5>{t("realTimeCODetection.subtitle") || "An intelligent alarm system"}</h5>
                <span>
                  {t("realTimeCODetection.levels.green.color") || "Green"}:{" "}
                  <p>{t("realTimeCODetection.levels.green.description") || "Safe, No alarm sound:"}</p>
                </span>
                <span>
                  {t("realTimeCODetection.levels.coloredLevels.colors") || "Yellow, Orange, Red"}:{" "}
                  <p>
                    {t("realTimeCODetection.levels.coloredLevels.description") ||
                      "Drip sound cycle alarm, once every 3 minutes."}
                  </p>
                </span>
                <h6>{t("realTimeCODetection.detectionSpeed.title") || "Know the CO around you within 2 seconds:"}</h6>
                <p className="2sec">
                  {t("realTimeCODetection.detectionSpeed.description") || "Detects CO in real-time with"}{" "}
                  <span>{t("realTimeCODetection.detectionSpeed.refreshRate") || "2 seconds"}</span>{" "}
                  {t("realTimeCODetection.detectionSpeed.suffix") || "data refresh rate."}
                </p>
              </div>

              <div className="co2-bar">
                <ul className="security">
                  <li>{t("realTimeCODetection.barLevels.security") || "Security"}</li>
                  <li>{t("realTimeCODetection.barLevels.cycleAlarm1") || "Cycle Alarm"}</li>
                  <li>{t("realTimeCODetection.barLevels.cycleAlarm2") || "Cycle Alarm"}</li>
                  <li>{t("realTimeCODetection.barLevels.cycleAlarm3") || "Cycle Alarm"}</li>
                </ul>

                <div className="bar-box">
                  <ul className="bar-colr">
                    <li>
                      <div className="co-data"></div>
                    </li>
                    <li>
                      <span>{t("realTimeCODetection.ppmLevels.level1") || "0-50 PPM"}</span>
                    </li>
                    <li>
                      <div className="co-data orange-bar"></div>
                    </li>
                    <li>
                      <span>{t("realTimeCODetection.ppmLevels.level2") || "51-100 PPM"}</span>
                    </li>
                  </ul>
                  <ul className="bar-colr">
                    <li>
                      <div className="co-data yellow-bar"></div>
                    </li>
                    <li>
                      <span>{t("realTimeCODetection.ppmLevels.level3") || "101-200 PPM"}</span>
                    </li>
                    <li className="last-bar">
                      <div className="co-data red-bar"></div>
                    </li>
                    <li>
                      <span>{t("realTimeCODetection.ppmLevels.level4") || "≥201 PPM"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-with-alarm-system.png"
                alt={t("realTimeCODetection.imageAlt") || "CO Detection"}
                className="co-detection-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specification */}
      <section className="technical-specification" id="spec">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="attractive-txt product-specification-heading">
                {t("technicalSpecification.heading") || "CO Monitor"}
                <h4>{t("technicalSpecification.subheading") || "Technical Specifications"}</h4>
              </div>
            </div>
            <div className="col-md-9">
              <div className="brochore-btn">
                <a href="#">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/brochore-btn.png"
                    alt={t("technicalSpecification.brochure.alt") || "brochore-btn"}
                  />{" "}
                  {t("technicalSpecification.brochure.text") || "Download Brochure"}
                </a>
              </div>
            </div>
          </div>
          <div className="row mid-box">
            <div className="col-md-4 box-line">
              <div className="product-specifi shdw-line">
                {t("technicalSpecification.specs.productName.label") || "Product Name :"}
                <h4>{t("technicalSpecification.specs.productName.value") || "Nano CO Monitor"}</h4>
              </div>
              <div className="product-specifi">
                {t("technicalSpecification.specs.warmupTime.label") || "Warm-up time :"}
                <h4>{t("technicalSpecification.specs.warmupTime.value") || "35 Sec"}</h4>
              </div>
              <div className="product-specifi">
                {t("technicalSpecification.specs.workingTemp.label") || "Working Temp. :"}
                <h4>{t("technicalSpecification.specs.workingTemp.value") || "-20~60°C"}</h4>
              </div>
            </div>
            <div className="col-md-4 box-line">
              <div className="product-specifi">
                {t("technicalSpecification.specs.detectionRange.label") || "Detection Range :"}
                <h4>{t("technicalSpecification.specs.detectionRange.value") || "0-1000 PPM"}</h4>
              </div>
              <div className="product-specifi">
                {t("technicalSpecification.specs.refreshRate.label") || "Data Refresh Rate :"}
                <h4>{t("technicalSpecification.specs.refreshRate.value") || "2 Sec"}</h4>
              </div>
              <div className="product-specifi">
                {t("technicalSpecification.specs.chargingMode.label") || "Charging Mode :"}
                <h4>{t("technicalSpecification.specs.chargingMode.value") || "USB Type-C"}</h4>
              </div>
            </div>
            <div className="col-md-4 box-line">
              <div className="product-specifi">
                {t("technicalSpecification.specs.workingVoltage.label") || "Working Voltage :"}
                <h4>{t("technicalSpecification.specs.workingVoltage.value") || "DC5V0 . 5A"}</h4>
              </div>
              <div className="product-specifi">
                {t("technicalSpecification.specs.operatingHumidity.label") || "Operating Humidity :"}
                <h4>{t("technicalSpecification.specs.operatingHumidity.value") || "0-95% RH"}</h4>
              </div>
              <div className="product-specifi">
                {t("technicalSpecification.specs.dimensions.label") || "Product Dimensions :"}
                <h4>{t("technicalSpecification.specs.dimensions.value") || "W85 x D51 x H17 (mm)"}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-sec" id="compare">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="attractive-txt comparision-heading">
                <h4>{t("comparison.heading") || "Comparison of Prana Air Nano CO Monitor Vs A High-End Monitor"}</h4>
              </div>
            </div>
            <div className="col-md-7"></div>
          </div>
          <div className="row mob-scroll">
            <div className="col-md-3">
              <div className="comp-heading mobshow">
                <h4>{t("comparison.subheading") || "CO Monitor"}</h4>
              </div>
              <div className="product-discription">
                <ul>
                  <li>{t("comparison.parameters.description") || "Description :"}</li>
                  <li>{t("comparison.parameters.parameter") || "Parameter :"}</li>
                  <li>{t("comparison.parameters.price") || "Price :"}</li>
                  <li>{t("comparison.parameters.weight") || "Weight :"}</li>
                  <li>{t("comparison.parameters.range") || "Range :"}</li>
                  <li>{t("comparison.parameters.accuracy") || "Accuracy :"}</li>
                  <li>{t("comparison.parameters.technology") || "Technology :"}</li>
                  <li>{t("comparison.parameters.portability") || "Portability :"}</li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="dis-img">
                <div className="disc-inner-img-one">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-co-monitor-low-cost.png"
                    alt={t("comparison.images.nanoMonitor") || "prana air nano co monitor low cost"}
                  />
                </div>
                <div className="disc-inner-img-two">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/tsi-high-end-co-monitor.png"
                    alt={t("comparison.images.highEndMonitor") || "tsi high end co monitor"}
                  />
                </div>
              </div>
              <div className="product-feature">
                <ul className="mini-co-monitor">
                  <li>{t("comparison.nanoMonitor.name") || "Nano CO Monitor"}</li>
                  <li className="tab-bg">{t("comparison.nanoMonitor.parameter") || "CO, Temperature, Humidity"}</li>
                  <li>{t("comparison.nanoMonitor.price") || "Low Cost"}</li>
                  <li className="tab-bg">{t("comparison.nanoMonitor.weight") || "75g"}</li>
                  <li>{t("comparison.nanoMonitor.range") || "0-1000 ppm"}</li>
                  <li className="tab-bg">{t("comparison.nanoMonitor.accuracy") || "±5%"}</li>
                  <li>{t("comparison.nanoMonitor.technology") || "Electrochemical Sensor"}</li>
                  <li className="tab-bg">{t("comparison.nanoMonitor.portability") || "Small & easy to carry"}</li>
                </ul>
                <ul className="co-multifuntion-monitor">
                  <li>{t("comparison.highEndMonitor.name") || "High-End CO Monitor"}</li>
                  <li>{t("comparison.highEndMonitor.parameter") || "CO"}</li>
                  <li>{t("comparison.highEndMonitor.price") || "High Cost"}</li>
                  <li>{t("comparison.highEndMonitor.weight") || "Almost 1 Kg"}</li>
                  <li>{t("comparison.highEndMonitor.range") || "0-5000 ppm"}</li>
                  <li>{t("comparison.highEndMonitor.accuracy") || "±3%"}</li>
                  <li>{t("comparison.highEndMonitor.technology") || "Electrochemical Sensor"}</li>
                  <li>{t("comparison.highEndMonitor.portability") || "Comparatively less portable"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="attractive-txt faq-heading">
                <h4>Frequently Asked Questions About CO &amp; Its Monitoring</h4>
              </div>
            </div>
            <div className="col-md-9"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <FaqAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
