import "./style.css"
import { getServerTranslation } from "@/i18n/server"
import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
  const lang = params?.lang || "en";
  const slug = "air-quality-monitor"; // page-specific slug
  const { t } = await getServerTranslation("junior-pollution");
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
export default async function JuniorPollutionMask() {
  const { t } = await getServerTranslation("junior-pollution")
  return (
    <main>
      {/* Banner Section */}
      <section className="child-mask-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="banner-content">
                <h1>
                  {t(
                    "adultKidMask.banner.title",

                  )}
                </h1>
                <a href="https://www.pranaair.com/checkout/?add-to-cart=6257">
                  {t("adultKidMask.banner.cta")}
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img
                className="clid-mask-img"
                src="https://www.pranaair.com/wp-content/uploads/2021/03/Boy-and-girl-wearing-adult-kid-mask.png"
                alt={t("adultKidMask.banner.imageAlt")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="product-sec">
        <div className="container">
          <div className="text-center">
            <h1>
              <span style={{ fontSize: "24pt" }}>{t("adultKidMask.product.title")}</span>
              <sup>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt={t("adultKidMask.product.logoAlt")}
                />
              </sup>
            </h1>
            <p>{t("adultKidMask.product.description")}</p>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="info-list position-right">
                <div className="info-list-item">
                  <div className="icon-wrapper">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/03/mask-hepa-filter-layers.png"
                      alt={t("adultKidMask.product.features.hepaFilter.iconAlt")}
                    />
                  </div>
                  <div className="info-content">
                    <h3>
                      <span style={{ fontSize: "15pt" }}>
                        <strong>{t("adultKidMask.product.features.hepaFilter.title")}</strong>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="info-list position-right">
                <div className="info-list-item">
                  <div className="icon-wrapper">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/03/efficiency-rate.png"
                      alt={t("adultKidMask.product.features.efficiency.iconAlt")}
                    />
                  </div>
                  <div className="info-content">
                    <h3>
                      <span style={{ fontSize: "15pt" }}>
                        <strong>{t("adultKidMask.product.features.efficiency.title")}</strong>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="info-list position-right">
                <div className="info-list-item">
                  <div className="icon-wrapper">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/03/fan-speed.png"
                      alt={t("adultKidMask.product.features.fanSpeed.iconAlt")}
                    />
                  </div>
                  <div className="info-content">
                    <h3>
                      <span style={{ fontSize: "15pt" }}>
                        <strong>{t("adultKidMask.product.features.fanSpeed.title")}</strong>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-junior-pollution-mask.png"
                alt={t("adultKidMask.product.mainImageAlt")}
                className="img-fluid"
              />
            </div>

            <div className="col-md-4">
              <div className="info-list">
                <div className="info-list-item">
                  <div className="icon-wrapper">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/03/micro-ventilation.png"
                      alt={t("adultKidMask.product.features.ventilators.iconAlt")}
                    />
                  </div>
                  <div className="info-content">
                    <h3>
                      <span style={{ fontSize: "15pt" }}>
                        <strong>{t("adultKidMask.product.features.ventilators.title")}</strong>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="info-list">
                <div className="info-list-item">
                  <div className="icon-wrapper">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/03/micro-usb-charger.png"
                      alt={t("adultKidMask.product.features.usbCharging.iconAlt")}
                    />
                  </div>
                  <div className="info-content">
                    <h3>
                      <span style={{ fontSize: "15pt" }}>
                        <strong>{t("adultKidMask.product.features.usbCharging.title")}</strong>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="info-list">
                <div className="info-list-item">
                  <div className="icon-wrapper">
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2021/03/battery-life.png"
                      alt={t("adultKidMask.product.features.batteryLife.iconAlt")}
                    />
                  </div>
                  <div className="info-content">
                    <h3>
                      <span style={{ fontSize: "15pt" }}>
                        <strong>{t("adultKidMask.product.features.batteryLife.title")}</strong>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="col-push-sec duplicate">
        <div className="container">
          {/* 5 Layer HEPA Filter */}
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-5-layers-hepa-filter.png"
                alt={t("adultKidMask.features.hepaFilter.imageAlt")}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 col-md-6 padd companions-col">
              <div style={{ height: "10px" }}></div>
              <h2 className="cus-heading">
                <span style={{ fontSize: "23pt" }}>
                  <strong>{t("adultKidMask.features.hepaFilter.title")}</strong>
                </span>
              </h2>
              <span style={{ fontSize: "13pt" }}>{t("adultKidMask.features.hepaFilter.description")}</span>
            </div>
          </div>

          {/* 95.99% Efficiency */}
          <div className="row">
            <div className="col-lg-6 col-md-6 paddcompanions-col">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-mask-filter-efficiency.png"
                alt={t("adultKidMask.features.efficiency.imageAlt")}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 col-md-6 padd companions-col">
              <div style={{ height: "10px" }}></div>
              <h2 className="cus-heading">
                <span style={{ fontSize: "23pt" }}>
                  <strong>{t("adultKidMask.features.efficiency.title")}</strong>
                </span>
              </h2>
              <span style={{ fontSize: "13pt" }}>{t("adultKidMask.features.efficiency.description")}</span>
            </div>
          </div>

          {/* 3 Different Fan Speed */}
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-mask-fan-speeds.png"
                alt={t("adultKidMask.features.fanSpeed.imageAlt")}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 col-md-6 padd companions-col">
              <div style={{ height: "10px" }}></div>
              <h2 className="cus-heading">
                <span style={{ fontSize: "23pt" }}>
                  <strong>{t("adultKidMask.features.fanSpeed.title")}</strong>
                </span>
              </h2>
              <span style={{ fontSize: "13pt" }}>{t("adultKidMask.features.fanSpeed.description")}</span>
            </div>
          </div>

          {/* 2 Micro Ventilators */}
          <div className="row">
            <div className="col-lg-6 col-md-6 paddcompanions-col">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/junior-mask-micro-ventilators.jpeg"
                alt={t("adultKidMask.features.ventilators.imageAlt")}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 col-md-6 padd companions-col">
              <div style={{ height: "10px" }}></div>
              <h2 className="cus-heading">
                <span style={{ fontSize: "23pt" }}>
                  <strong>{t("adultKidMask.features.ventilators.title")}</strong>
                </span>
              </h2>
              <span style={{ fontSize: "13pt" }}>{t("adultKidMask.features.ventilators.description")}</span>
            </div>
          </div>

          {/* USB Charging */}
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-usb-charging-junior-mask.png"
                alt={t("adultKidMask.features.usbCharging.imageAlt")}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 col-md-6 padd companions-col">
              <div style={{ height: "10px" }}></div>
              <h2 className="cus-heading">
                <span style={{ fontSize: "23pt" }}>
                  <strong>{t("adultKidMask.features.usbCharging.title")}</strong>
                </span>
              </h2>
              <span style={{ fontSize: "13pt" }}>{t("adultKidMask.features.usbCharging.description")}</span>
            </div>
          </div>

          {/* Battery Efficiency */}
          <div className="row">
            <div className="col-lg-6 col-md-6 paddcompanions-col">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/usb-recharging-battery-mask.jpeg"
                alt={t("adultKidMask.features.batteryEfficiency.imageAlt")}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 col-md-6 padd companions-col">
              <div style={{ height: "10px" }}></div>
              <h2 className="cus-heading">
                <span style={{ fontSize: "23pt" }}>{t("adultKidMask.features.batteryEfficiency.title")}</span>
              </h2>
              <span style={{ fontSize: "13pt" }}>{t("adultKidMask.features.batteryEfficiency.description")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="padd-more">
        <img
          className="img-fluid w-100"
          src="https://www.pranaair.com/wp-content/uploads/2021/05/a-boy-with-prana-air-junior-pollution-mask.jpeg"
          alt="A boy with Prana Air junior pollution mask"
        />
      </section>

      {/* Video Section */}
      <section className="col-push-sec duplicate">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <iframe
                title="YouTube video player"
                src="https://www.youtube.com/embed/__sbrcI0VDU"
                width="100%"
                height="415"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-lg-6 col-md-6 padd companions-col">
              <div style={{ height: "10px" }}></div>
              <h2 className="cus-heading">
                <span style={{ fontSize: "23pt" }}>
                  <strong>Unboxing of Adult-Kid Mask</strong>
                </span>
              </h2>
              <p style={{ textAlign: "justify" }}>
                <span style={{ fontSize: "14pt" }}>
                  Adults/Children can wear it at school or any outdoor activity.{" "}
                </span>
                <span style={{ fontSize: "14pt" }}>No more worrying about catching airborne health issues. </span>
                <span style={{ fontSize: "14pt" }}>
                  Suitable for children aged between 5 and 15 years. The mask comes with two different size of seals -
                  large and small, that can easily fit to adults and children.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="detail-row">
        <div className="container">
          <h2 className="head-proxima">{t("adultKidMask.productDetails.title")}</h2>

          <div className="row">
            <div className="col-lg-6 col-md-6 detail-img-col">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-adult-kid-mask.jpeg"
                alt={t("adultKidMask.productDetails.imageAlt")}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 col-md-6 table-col">
              <div className="animateme scrollme">
                <table>
                  <tbody>
                    <tr>
                      <th>{t("adultKidMask.productDetails.table.header.features")}</th>
                      <th>{t("adultKidMask.productDetails.table.header.mask")}</th>
                    </tr>
                    <tr>
                      <th>{t("adultKidMask.productDetails.table.rows.colors.label")}</th>
                      <td>{t("adultKidMask.productDetails.table.rows.colors.value")}</td>
                    </tr>
                    <tr>
                      <th>{t("adultKidMask.productDetails.table.rows.filterLayers.label")}</th>
                      <td>{t("adultKidMask.productDetails.table.rows.filterLayers.value")}</td>
                    </tr>
                    <tr>
                      <th>{t("adultKidMask.productDetails.table.rows.hepaCompliant.label")}</th>
                      <td>{t("adultKidMask.productDetails.table.rows.hepaCompliant.value")}</td>
                    </tr>
                    <tr>
                      <th>{t("adultKidMask.productDetails.table.rows.purificationEfficiency.label")}</th>
                      <td>{t("adultKidMask.productDetails.table.rows.purificationEfficiency.value")}</td>
                    </tr>
                    <tr>
                      <th>{t("adultKidMask.productDetails.table.rows.fanSpeed.label")}</th>
                      <td>{t("adultKidMask.productDetails.table.rows.fanSpeed.value")}</td>
                    </tr>
                    <tr>
                      <th>{t("adultKidMask.productDetails.table.rows.chargingMode.label")}</th>
                      <td>{t("adultKidMask.productDetails.table.rows.chargingMode.value")}</td>
                    </tr>
                    <tr>
                      <th>{t("adultKidMask.productDetails.table.rows.chargingTime.label")}</th>
                      <td>{t("adultKidMask.productDetails.table.rows.chargingTime.value")}</td>
                    </tr>
                    <tr>
                      <th>{t("adultKidMask.productDetails.table.rows.batteryDuration.label")}</th>
                      <td>{t("adultKidMask.productDetails.table.rows.batteryDuration.value")}</td>
                    </tr>
                    <tr>
                      <th>{t("adultKidMask.productDetails.table.rows.batteryCapacity.label")}</th>
                      <td>{t("adultKidMask.productDetails.table.rows.batteryCapacity.value")}</td>
                    </tr>
                    <tr>
                      <th>{t("adultKidMask.productDetails.table.rows.dimensions.label")}</th>
                      <td>{t("adultKidMask.productDetails.table.rows.dimensions.value")}</td>
                    </tr>
                    <tr>
                      <th>{t("adultKidMask.productDetails.table.rows.weight.label")}</th>
                      <td>{t("adultKidMask.productDetails.table.rows.weight.value")}</td>
                    </tr>
                    <tr>
                      <th>{t("adultKidMask.productDetails.table.rows.voltage.label")}</th>
                      <td>{t("adultKidMask.productDetails.table.rows.voltage.value")}</td>
                    </tr>
                    <tr>
                      <th>{t("adultKidMask.productDetails.table.rows.noise.label")}</th>
                      <td>{t("adultKidMask.productDetails.table.rows.noise.value")}</td>
                    </tr>
                    <tr>
                      <th>{t("adultKidMask.productDetails.table.rows.price.label")}</th>
                      <td>{t("adultKidMask.productDetails.table.rows.price.value")}</td>
                    </tr>
                    <tr>
                      <th></th>
                      <th>
                        <p style={{ textAlign: "center" }}>
                          <a className="bg-btn bg-green" href="https://www.pranaair.com/checkout/?add-to-cart=6257">
                            {t("adultKidMask.productDetails.buyNow")}
                          </a>
                        </p>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Section */}
      <section style={{ backgroundColor: "#385266", padding: "30px 0" }}>
        <div className="container">
          <p style={{ textAlign: "center", fontSize: "14pt", color: "#ffffff", fontWeight: "bold" }}>
            {t("adultKidMask.blueSection.paragraph1")}
          </p>
          <p style={{ textAlign: "center", fontSize: "14pt", color: "#ffffff", fontWeight: "bold" }}>
            {t("adultKidMask.blueSection.paragraph2")}
          </p>
        </div>
      </section>

      {/* What's in the Box Section */}
      <section className="bg-grey content-row">
        <div className="container">
          <h2 className="cus-heading" style={{ textAlign: "center" }}>
            {t("adultKidMask.whatsInBox.title")}{" "}
            <img
              src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
              alt={t("adultKidMask.product.logoAlt")}
            />
          </h2>
          <h2 className="cus-heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>
              {t("adultKidMask.product.title")}
              <img
                src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                alt={t("adultKidMask.product.logoAlt")}
              />
            </span>
          </h2>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-xs-12 mt-30">
              <div className="hover-box animateme scrollme">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-junior-pollution-mask-box.png"
                  alt={t("adultKidMask.whatsInBox.images.box.alt")}
                />
                <div className="hover-body">
                  <a title="Motion Mask" data-rel="lightbox-gallery-1"></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-12 mt-30">
              <div className="hover-box animateme scrollme">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-children-mask-box-backview.png"
                  alt={t("adultKidMask.whatsInBox.images.boxBack.alt")}
                />
                <div className="hover-body">
                  <a title="Motion Mask" data-rel="lightbox-gallery-1"></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-12 mt-30">
              <div className="hover-box animateme scrollme">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/junior-pollution-mask-box-topview.png"
                  alt={t("adultKidMask.whatsInBox.images.boxTop.alt")}
                />
                <div className="hover-body">
                  <a title="Motion Mask" data-rel="lightbox-gallery-1"></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-12 mt-30">
              <div className="hover-box animateme scrollme">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-junior-pollution-mask-parts.png"
                  alt={t("adultKidMask.whatsInBox.images.parts.alt")}
                />
                <div className="hover-body">
                  <a title="Motion Mask" data-rel="lightbox-gallery-1"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="protect-row"
        style={{
          backgroundImage:
            "url(https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-pollution-mask-for-kids.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "160px 0",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 hideatmobile setheight">
              <h2 className="head-proxima" style={{ fontSize: "46px", color: "#ffffff", lineHeight: "1.3" }}>
                {t("adultKidMask.protectCta.heading")}
              </h2>
              <div style={{ height: "20px" }}></div>
              <p style={{ fontSize: "20px", color: "#ffffff", lineHeight: "1.6" }}>
                {t("adultKidMask.protectCta.description")}
              </p>
              <div style={{ height: "55px" }}></div>
              <div className="amazone-btn">
                <a className="bg-btn bg-green" href="https://www.pranaair.com/checkout/?add-to-cart=6257">
                  {t("adultKidMask.protectCta.buyNow")}
                </a>
                <a className="bg-btn bg-orange alignnone" href="https://www.amazon.in/dp/B08JQK2Z3N?ref=myi_title_dp">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/quality-amazon.png"
                    alt={t("adultKidMask.protectCta.amazonLogoAlt")}
                  />
                  {t("adultKidMask.protectCta.amazon")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
