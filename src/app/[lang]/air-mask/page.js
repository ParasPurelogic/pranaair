import Image from "next/image"
import "./style.css"
import { getServerTranslation } from "@/i18n/server"
import { domain, supportedLanguages } from "@/config"

// ✅ SEO Metadata
export async function generateMetadata({ params }) {
  const lang = params?.lang || "en";
  const slug = "air-quality-monitor"; // page-specific slug
  const { t } = await getServerTranslation("air-mask");
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

export default async function AirMaskPage() {
  const { t } = await getServerTranslation("air-mask")
  return (
    <div className="air-mask-page">
      {/* Banner Section */}
      <div className="banner-mask">
        <div className="container">
          <div className="row">
            <div className="col-md-6 top-head"></div>
            <div className="col-md-6">
              <div className="banner-contant">
                <span className="motorize">{t("airMask.motorized")}</span>
                <h1>{t("airMask.heading")}</h1>
                <p>{t("airMask.description")}</p>
                <ul>
                  <li>
                    <form
                      className="cart"
                      action="https://www.pranaair.com/product/n95-pollution-mask/"
                      encType="multipart/form-data"
                      method="post"
                    >
                      <button
                        className="single_add_to_cart_button button alt bnner-btn"
                        name="add-to-cart"
                        type="submit"
                        value="9561"
                      >
                        {t("airMask.buyNow")}
                      </button>
                    </form>
                  </li>
                  <li>
                    <div className="woocom-list-content">
                      <span className="woocs_price_code">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>{t("airMask.price")}</bdi>
                        </span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Anti Pollution Mask Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "22pt" }}>{t("heading.title")}</span>
              <sup>
                <Image
                  className="mask-img"
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </sup>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "13pt" }}>{t("heading.subtitle")}</span>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div style={{ height: "45px" }}></div>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-2nd-gen-n95-pollution-mask-online.jpg"
              alt={t("image.alt")}
              width={600}
              height={600}
            />
          </div>
          <div className="col-md-6">
            <div style={{ height: "20px" }}></div>
            <h2>
              <strong>
                <span style={{ fontSize: "16pt" }}>{t("features.title")}</span>
              </strong>
            </h2>

            <div className="info-list">
              {[
                {
                  icon: "layer.png",
                  title: t("features.layer.title"),
                  desc: t("features.layer.desc"),
                },
                {
                  icon: "fan.png",
                  title: t("features.fan.title"),
                  desc: t("features.fan.desc"),
                },
                {
                  icon: "ventilation.png",
                  title: t("features.vent.title"),
                  desc: t("features.vent.desc"),
                },
                {
                  icon: "95.png",
                  title: t("features.efficiency.title"),
                  desc: t("features.efficiency.desc"),
                },
                {
                  icon: "usb.png",
                  title: t("features.usb.title"),
                  desc: t("features.usb.desc"),
                },
              ].map((item, i) => (
                <div className="info-list-item" key={i}>
                  <div className="info-icon">
                    <Image
                      src={`https://www.pranaair.com/wp-content/uploads/2021/02/${item.icon}`}
                      alt={item.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="info-content">
                    <h3>{item.title}</h3>
                    <p>
                      <span style={{ fontSize: "12pt" }}>{item.desc}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Need for Air Mask Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ fontSize: "13pt", textAlign: "center" }}>
              <span style={{ fontSize: "18pt" }}>{t("need.title")}</span>
            </h2>
            <p style={{ fontSize: "13pt", textAlign: "center" }}>{t("need.description")}</p>
          </div>
        </div>
      </div>

      {/* Virus Effectiveness Section */}
      <div
        className="virus-effectiveness-section"
        style={{
          backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2022/10/outdoor-air-pollution-level.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h3 className="whitetext" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "18pt" }}>{t("effectiveness.title")}</span>
              </h3>
              <p className="whitetext" style={{ fontSize: "13pt", textAlign: "center" }}>
                {t("effectiveness.description")}
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>

      {/* Winter Air Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: "center", fontSize: "22px", fontWeight: "500", paddingTop: "25px" }}>
              {t("winter.title")}
            </h3>
            <p style={{ fontSize: "13pt", textAlign: "center" }}>
              {t("winter.description")}
            </p>
          </div>
        </div>
      </div>

      {/* What Happens Section */}
      <div
        className="what-happens-section"
        style={{
          backgroundImage:
            "url(https://www.pranaair.com/wp-content/uploads/2021/10/prana-air-anti-pollution-n95-mask-scaled.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="what-happens-content">
                <h2 style={{ textAlign: "left" }}>
                  <span style={{ color: "#000000" }}>
                    <span style={{ fontSize: "18pt" }}>
                      {t("noMask.title.part1")}<strong>{t("noMask.title.part2")}</strong>
                    </span>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                      alt="logo"
                      width={30}
                      height={30}
                    />
                  </span>
                </h2>
                <div style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "14pt", color: "#000000" }}>
                    <span style={{ color: "#000000" }}>
                      {t("noMask.paragraph1")}
                    </span>
                  </span>
                  <br />
                  <br />
                  <span style={{ color: "#000000", fontSize: "14pt" }}>
                    {t("noMask.paragraph2")}
                  </span>
                  <br />
                  <br />
                  <span style={{ color: "#000000", fontSize: "14pt" }}>
                    {t("noMask.paragraph3")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile What Happens Section */}
      <div className="container showatmobile">
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16pt" }}>
                <span style={{ color: "#000" }}>{t("noMaskMobile.title.part1")}</span>
                <strong>
                  <span style={{ color: "#000" }}>{t("noMaskMobile.title.part2")}</span>
                </strong>
              </span>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                alt="logo"
                width={30}
                height={30}
              />
            </h2>
            <div style={{ textAlign: "center" }}>
              <span style={{ color: "#000", fontSize: "12pt" }}>{t("noMaskMobile.paragraph1")}</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ color: "#000", fontSize: "12pt" }}>{t("noMaskMobile.paragraph2")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Air Mask Filtration Section */}
      <div className="mask-filter-row">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "22pt" }}>
                  <span style={{ fontSize: "22pt" }}>{t("filtration.title")}</span>
                </span>
                <sup>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt={t("airMask.logoAlt")}
                    width={30}
                    height={30}
                  />
                </sup>
              </h2>
              <div style={{ height: "20px" }}></div>
              <div className="text-center">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-multi-layers-filter-of-n95-mask.png"
                  alt={t("filtration.imageAlt")}
                  width={745}
                  height={538}
                />
              </div>

              <div className="animateme scrollme">
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/motion-mask-fan-icon.png"
                    alt={t("filtration.features.fanSpeed.iconAlt")}
                    width={80}
                    height={80}
                  />
                  <h4>{t("filtration.features.fanSpeed.title")}</h4>
                </div>
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/motion-mask-filter-layer-icon.png"
                    alt={t("filtration.features.layerProtection.iconAlt")}
                    width={80}
                    height={80}
                  />
                  <h4>{t("filtration.features.layerProtection.title")}</h4>
                </div>
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/mask-battery-icon.png"
                    alt={t("filtration.features.batteryLife.iconAlt")}
                    width={80}
                    height={80}
                  />
                  <h4>{t("filtration.features.batteryLife.title")}</h4>
                </div>
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/motion-mask-weight-icon.png"
                    alt={t("filtration.features.lightweight.iconAlt")}
                    width={80}
                    height={80}
                  />
                  <h4>{t("filtration.features.lightweight.title")}</h4>
                </div>
                <div className="clear"></div>
              </div>

              <div style={{ height: "20px" }}></div>
              <p
                style={{ fontSize: "20px", textAlign: "center", color: "#383838", lineHeight: "1.8" }}
                className="head-proxima"
              >
                {t("filtration.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Perfect Outdoor Companions Section */}
      <div className="col-push-sec">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-6 bg-img-sec"
              style={{
                backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2019/09/adult-pollution-mask.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2021/09/2nd-gen-95-mask.jpg"
                alt={t("companions.imageAlt")}
                width={900}
                height={577}
                className="mask-img"
              />
            </div>
            <div className="col-md-6 padd companions-col">
              <h4
                className="cus-heading wpb_animate_when_almost_visible wpb_fadeInDown fadeInDown wpb_start_animation animated"
                style={{ textAlign: "left" }}
              >
                <strong>
                  <span style={{ fontSize: "24pt" }}>{t("companions.title")}</span>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt={t("airMask.logoAlt")}
                    width={30}
                    height={30}
                  />
                </strong>
              </h4>
              <div style={{ height: "10px" }}></div>
              <p style={{ fontSize: "16px", textAlign: "left", color: "#383838", lineHeight: "1.8" }}>
                {t("companions.description")}
              </p>

              <div className="animateme scrollme">
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/pm2.5-icon.png"
                    alt={t("companions.pollutants.pm25.iconAlt")}
                    width={80}
                    height={80}
                  />
                  <h4>{t("companions.pollutants.pm25.title")}</h4>
                </div>
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/carbon-monoxide-icon.png"
                    alt={t("companions.pollutants.carbonMonoxide.iconAlt")}
                    width={80}
                    height={80}
                  />
                  <h4>{t("companions.pollutants.carbonMonoxide.title")}</h4>
                </div>
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/so2-icon.png"
                    alt={t("companions.pollutants.sulphurDioxide.iconAlt")}
                    width={80}
                    height={80}
                  />
                  <h4>{t("companions.pollutants.sulphurDioxide.title")}</h4>
                </div>
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/dust-icon.png"
                    alt={t("companions.pollutants.dust.iconAlt")}
                    width={80}
                    height={80}
                  />
                  <h4>{t("companions.pollutants.dust.title")}</h4>
                </div>
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/smoke-icon.png"
                    alt={t("companions.pollutants.smoke.iconAlt")}
                    width={80}
                    height={80}
                  />
                  <h4>{t("companions.pollutants.smoke.title")}</h4>
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Micro Ventilator Section */}
      <div className="padd-more">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-6 bg-img-sec"
              style={{
                backgroundImage:
                  "url(https://www.pranaair.com/wp-content/uploads/2019/09/air-mask-micro-ventilator.png)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-motorizied-system-n95-mask.png"
                alt={t("ventilator.imageAlt")}
                width={576}
                height={570}
                className="mask-img"
              />
            </div>
            <div className="col-md-6 padd companions-col">
              <h4 className="cus-heading wpb_animate_when_almost_visible wpb_fadeInDown fadeInDown wpb_start_animation animated">
                <strong>
                  <span style={{ fontSize: "24pt" }}>{t("ventilator.title")}</span>
                </strong>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("airMask.logoAlt")}
                  width={30}
                  height={30}
                />
              </h4>
              <div style={{ height: "10px" }}></div>
              <p style={{ textAlign: "justify" }}>
                {t("ventilator.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stylish Section */}
      <div className="col-push-sec padd-more">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-6 bg-img-sec"
              style={{
                backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2019/09/prana-air-stylish-mask.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2021/10/a-lady-wearing-prana-air-n95-pollution-mask.jpg"
                alt={t("stylish.imageAlt")}
                width={900}
                height={584}
                className="mask-img"
              />
            </div>
            <div className="col-md-6 padd companions-col">
              <h4 className="cus-heading wpb_animate_when_almost_visible wpb_fadeInDown fadeInDown wpb_start_animation animated">
                <span style={{ fontSize: "24pt" }}>
                  <strong>{t("stylish.title")}</strong>
                </span>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("airMask.logoAlt")}
                  width={30}
                  height={30}
                />
              </h4>
              <div style={{ height: "10px" }}></div>
              <p style={{ textAlign: "justify" }}>
                <span style={{ fontSize: "12pt" }}>{t("stylish.description")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section with Tabs */}
      <div className="product-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tabs-container">
                {/* Bootstrap Nav Tabs */}
                <ul className="nav nav-tabs tabs-header" id="productTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="motion-mask-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#motion-mask-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="motion-mask-tab-pane"
                      aria-selected="true"
                    >
                      {t("productTabs.tabs.secondGen")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="city-mask-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#city-mask-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="city-mask-tab-pane"
                      aria-selected="false"
                    >
                      {t("productTabs.tabs.junior")}
                    </button>
                  </li>
                </ul>

                {/* Bootstrap Tab Content */}
                <div className="tab-content tabs-content" id="productTabsContent">
                  <div
                    className="tab-pane fade show active"
                    id="motion-mask-tab-pane"
                    role="tabpanel"
                    aria-labelledby="motion-mask-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <Image
                          src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-2nd-gen-n95-pollution-mask-online.jpg"
                          alt={t("productTabs.secondGen.imageAlt")}
                          width={572}
                          height={429}
                        />
                      </div>
                      <div className="col-md-1"></div>
                      <div className="col-md-5">
                        <div className="animateme scrollme">
                          <table>
                            <tbody>
                              <tr>
                                <th>{t("productTabs.specs.colors")}</th>
                                <td>{t("productTabs.secondGen.colors")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.filterLayers")}</th>
                                <td>{t("productTabs.secondGen.filterLayers")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.hepaCompliant")}</th>
                                <td>{t("productTabs.secondGen.hepaCompliant")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.purificationEfficiency")}</th>
                                <td>{t("productTabs.secondGen.purificationEfficiency")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.fanSpeed")}</th>
                                <td>{t("productTabs.secondGen.fanSpeed")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.chargingMode")}</th>
                                <td>{t("productTabs.secondGen.chargingMode")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.chargingTime")}</th>
                                <td>{t("productTabs.secondGen.chargingTime")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.batteryDuration")}</th>
                                <td>{t("productTabs.secondGen.batteryDuration")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.batteryCapacity")}</th>
                                <td>{t("productTabs.secondGen.batteryCapacity")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.weight")}</th>
                                <td>{t("productTabs.secondGen.weight")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.voltage")}</th>
                                <td>{t("productTabs.secondGen.voltage")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.noise")}</th>
                                <td>{t("productTabs.secondGen.noise")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.price")}</th>
                                <td>{t("productTabs.secondGen.price")}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="city-mask-tab-pane"
                    role="tabpanel"
                    aria-labelledby="city-mask-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <Image
                          src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-adult-kid-n95-mask.jpg"
                          alt={t("productTabs.junior.imageAlt")}
                          width={600}
                          height={600}
                        />
                      </div>
                      <div className="col-md-1"></div>
                      <div className="col-md-5">
                        <div className="animateme scrollme">
                          <table>
                            <tbody>
                              <tr>
                                <th>{t("productTabs.specs.colors")}</th>
                                <td>{t("productTabs.junior.colors")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.filterLayers")}</th>
                                <td>{t("productTabs.junior.filterLayers")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.hepaCompliant")}</th>
                                <td>{t("productTabs.junior.hepaCompliant")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.purificationEfficiency")}</th>
                                <td>{t("productTabs.junior.purificationEfficiency")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.fanSpeed")}</th>
                                <td>{t("productTabs.junior.fanSpeed")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.chargingMode")}</th>
                                <td>{t("productTabs.junior.chargingMode")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.chargingTime")}</th>
                                <td>{t("productTabs.junior.chargingTime")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.batteryDuration")}</th>
                                <td>{t("productTabs.junior.batteryDuration")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.batteryCapacity")}</th>
                                <td>{t("productTabs.junior.batteryCapacity")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.dimensions")}</th>
                                <td>{t("productTabs.junior.dimensions")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.weight")}</th>
                                <td>{t("productTabs.junior.weight")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.voltage")}</th>
                                <td>{t("productTabs.junior.voltage")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.noise")}</th>
                                <td>{t("productTabs.junior.noise")}</td>
                              </tr>
                              <tr>
                                <th>{t("productTabs.specs.price")}</th>
                                <td>{t("productTabs.junior.price")}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div
        className="video-sec"
        style={{
          paddingTop: "5px",
          paddingBottom: "0px",
          backgroundColor: "#f8f8f8",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 style={{ fontSize: "25px", textAlign: "center" }}>{t("unboxing.title")}</h5>
              <div className="row">
                <div className="col-md-12">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/qdhz331zR7A?start=6"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What's in the Box Section */}
      <div
        className="bg-grey content-row"
        style={{
          paddingTop: "70px",
          paddingBottom: "50px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="cus-heading wpb_animate_when_almost_visible wpb_fadeInDown fadeInDown wpb_start_animation animated"
                style={{ textAlign: "center" }}
              >
                {t("boxContents.title")}
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </h2>
              <p
                className="cus-heading wpb_animate_when_almost_visible wpb_fadeInDown fadeInDown wpb_start_animation animated"
                style={{ textAlign: "center" }}
              >
                <span style={{ fontSize: "18pt" }}>{t("boxContents.maskType")}</span>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: "20px" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="hover-box animateme scrollme">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2021/10/2nd-gen-n95-anti-pollution-mask-scaled.jpg"
                alt="Prana Air 2nd gen mask box"
                width={600}
                height={400}
              />
              <div className="hover-body">
                <a
                  title="Adult Air Pollution Mask"
                  href="https://www.pranaair.com/wp-content/uploads/2021/10/2nd-gen-n95-anti-pollution-mask-scaled.jpg"
                  data-rel="lightbox-gallery-1"
                ></a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hover-box animateme scrollme">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2021/10/2nd-gen-mask-caps-scaled.jpg"
                alt="Prana Air 2nd gen mask cap"
                width={600}
                height={400}
              />
              <div className="hover-body">
                <a
                  title="Adult Pollution Mask"
                  href="https://www.pranaair.com/wp-content/uploads/2021/10/2nd-gen-mask-caps-scaled.jpg"
                  data-rel="lightbox-gallery-1"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mask Product Specification Section */}
      <div
        className="bg-black detail-row"
        style={{
          paddingTop: "70px",
          paddingBottom: "70px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4
                style={{
                  fontSize: "30px",
                  textAlign: "left",
                  color: "#fff",
                  lineHeight: "36px",
                }}
                className="head-proxima"
              >
                {t("specifications.title")}
              </h4>
              <div style={{ height: "15px" }}></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 detail-img-col">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2021/10/box-content-of-2nd-gen-mask.jpg"
                alt={t("specifications.imageAlt")}
                width={592}
                height={395}
              />
            </div>
            <div className="col-md-6 table-col">
              <div className="animateme scrollme">
                <table>
                  <tbody>
                    <tr>
                      <th>{t("specifications.table.header.features")}</th>
                      <th>{t("specifications.table.header.juniorMask")}</th>
                      <th>{t("specifications.table.header.secondGenMask")}</th>
                    </tr>
                    <tr>
                      <th>{t("specifications.table.rows.colors.label")}</th>
                      <td>{t("specifications.table.rows.colors.juniorMask")}</td>
                      <td>{t("specifications.table.rows.colors.secondGenMask")}</td>
                    </tr>
                    <tr>
                      <th>{t("specifications.table.rows.filterLayers.label")}</th>
                      <td>{t("specifications.table.rows.filterLayers.juniorMask")}</td>
                      <td>{t("specifications.table.rows.filterLayers.secondGenMask")}</td>
                    </tr>
                    <tr>
                      <th>{t("specifications.table.rows.hepaCompliant.label")}</th>
                      <td>{t("specifications.table.rows.hepaCompliant.juniorMask")}</td>
                      <td>{t("specifications.table.rows.hepaCompliant.secondGenMask")}</td>
                    </tr>
                    <tr>
                      <th>{t("specifications.table.rows.purificationEfficiency.label")}</th>
                      <td>{t("specifications.table.rows.purificationEfficiency.juniorMask")}</td>
                      <td>{t("specifications.table.rows.purificationEfficiency.secondGenMask")}</td>
                    </tr>
                    <tr>
                      <th>{t("specifications.table.rows.fanSpeed.label")}</th>
                      <td>{t("specifications.table.rows.fanSpeed.juniorMask")}</td>
                      <td>{t("specifications.table.rows.fanSpeed.secondGenMask")}</td>
                    </tr>
                    <tr>
                      <th>{t("specifications.table.rows.chargingMode.label")}</th>
                      <td>{t("specifications.table.rows.chargingMode.juniorMask")}</td>
                      <td>{t("specifications.table.rows.chargingMode.secondGenMask")}</td>
                    </tr>
                    <tr>
                      <th>{t("specifications.table.rows.chargingTime.label")}</th>
                      <td>{t("specifications.table.rows.chargingTime.juniorMask")}</td>
                      <td>{t("specifications.table.rows.chargingTime.secondGenMask")}</td>
                    </tr>
                    <tr>
                      <th>{t("specifications.table.rows.batteryDuration.label")}</th>
                      <td>{t("specifications.table.rows.batteryDuration.juniorMask")}</td>
                      <td>{t("specifications.table.rows.batteryDuration.secondGenMask")}</td>
                    </tr>
                    <tr>
                      <th>{t("specifications.table.rows.batteryCapacity.label")}</th>
                      <td>{t("specifications.table.rows.batteryCapacity.juniorMask")}</td>
                      <td>{t("specifications.table.rows.batteryCapacity.secondGenMask")}</td>
                    </tr>
                    <tr>
                      <th>{t("specifications.table.rows.dimensions.label")}</th>
                      <td>{t("specifications.table.rows.dimensions.juniorMask")}</td>
                      <td>{t("specifications.table.rows.dimensions.secondGenMask")}</td>
                    </tr>
                    <tr>
                      <th>{t("specifications.table.rows.weight.label")}</th>
                      <td>{t("specifications.table.rows.weight.juniorMask")}</td>
                      <td>{t("specifications.table.rows.weight.secondGenMask")}</td>
                    </tr>
                    <tr>
                      <th>{t("specifications.table.rows.voltage.label")}</th>
                      <td>{t("specifications.table.rows.voltage.juniorMask")}</td>
                      <td>{t("specifications.table.rows.voltage.secondGenMask")}</td>
                    </tr>
                    <tr>
                      <th>{t("specifications.table.rows.noise.label")}</th>
                      <td>{t("specifications.table.rows.noise.juniorMask")}</td>
                      <td>{t("specifications.table.rows.noise.secondGenMask")}</td>
                    </tr>
                    <tr>
                      <th>{t("specifications.table.rows.price.label")}</th>
                      <td>{t("specifications.table.rows.price.juniorMask")}</td>
                      <td>{t("specifications.table.rows.price.secondGenMask")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Protect Yourself Section */}
      <div
        className="protect-row"
        style={{
          paddingTop: "160px",
          paddingBottom: "160px",
          backgroundImage:
            "url(https://www.pranaair.com/wp-content/uploads/2021/10/prana-air-n95-air-pollution-mask-scaled.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                style={{
                  fontSize: "48px",
                  textAlign: "center",
                  color: "#ffffff",
                  lineHeight: "1.3",
                }}
                className="head-proxima"
              >
                {t("protect.heading.line1")}
                <br />
                {t("protect.heading.line2")}
                <br />
                {t("protect.heading.line3")}
              </h2>
              <div style={{ height: "20px" }}></div>
              <p
                style={{
                  fontSize: "23px",
                  textAlign: "center",
                  color: "#ffffff",
                  lineHeight: "1.6",
                }}
              >
                {t("protect.description.line1")}
                <br />
                {t("protect.description.line2")}
              </p>
              <div style={{ height: "30px" }}></div>
              <p style={{ textAlign: "center" }}>
                <a className="bg-btn bg-green" href="#">
                  {t("protect.buttons.buyNow")}
                </a>
                <a
                  className="bg-btn bg-orange alignnone"
                  href="https://www.amazon.in/Prana-Air-2nd-Gen-Multi-Layers/dp/B08F2LHKTV/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/quality-amazon.png"
                    alt={t("protect.buttons.amazonAlt")}
                    width={15}
                    height={15}
                  />
                  {t("protect.buttons.amazon")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Using Bootstrap Accordion */}
      <div className="container">
        {/* <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "18pt" }}>{t("faq.title.line1")}</span>
              <br />
              <span style={{ fontSize: "18pt" }}>{t("faq.title.line2")}</span>
            </h3>

            <div className="accordion faq-accordion" id="faqAccordion">
              {t("faq.questions", { returnObjects: true }).map((question, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`heading${index + 1}`}>
                    <button
                      className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index + 1}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index + 1}`}
                    >
                      {`${index + 1}. ${question.question}`}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index + 1}`}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    aria-labelledby={`heading${index + 1}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{question.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
