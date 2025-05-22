import Image from "next/image"
import "./style.css"
import { getServerTranslation } from "@/i18n/server"

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
              <span style={{ fontSize: "22pt" }}>Anti Pollution Mask</span>
              <sup>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </sup>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "13pt" }}>
                Stay healthy and breathe clean air with <strong>Prana Air</strong> N95 pollution mask which has a highly
                advanced hepa filter.
              </span>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div style={{ height: "45px" }}></div>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-2nd-gen-n95-pollution-mask-online.jpg"
              alt="Prana Air N95 Mask"
              width={600}
              height={600}
            />
          </div>
          <div className="col-md-6">
            <div style={{ height: "20px" }}></div>
            <h2>
              <strong>
                <span style={{ fontSize: "16pt" }}>Product Features:</span>
              </strong>
            </h2>

            <div className="info-list">
              <div className="info-list-item">
                <div className="info-icon">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/layer.png"
                    alt="Layer Icon"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="info-content">
                  <h3>5 Layer Hepa Filters</h3>
                  <p>
                    <span style={{ fontSize: "12pt" }}>Maximum protection from PM2.5, pollen, dust, and smoke</span>
                  </p>
                </div>
              </div>

              <div className="info-list-item">
                <div className="info-icon">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/fan.png"
                    alt="Fan Icon"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="info-content">
                  <h3>3 Modes of Fan Speed</h3>
                  <p>
                    <span style={{ fontSize: "12pt" }}>
                      Control the air volume and circulation with different modes
                    </span>
                  </p>
                </div>
              </div>

              <div className="info-list-item">
                <div className="info-icon">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/ventilation.png"
                    alt="Ventilation Icon"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="info-content">
                  <h3>Micro Ventilator</h3>
                  <p>
                    <span style={{ fontSize: "12pt" }}>
                      Acts as a wall between outdoor polluted air and indoor purified air
                    </span>
                  </p>
                </div>
              </div>

              <div className="info-list-item">
                <div className="info-icon">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/95.png"
                    alt="95% Icon"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="info-content">
                  <h3>95.99% Efficiency</h3>
                  <p>
                    <span style={{ fontSize: "12pt" }}>
                      Advanced filtration technology to filter polluted air particles
                    </span>
                  </p>
                </div>
              </div>

              <div className="info-list-item">
                <div className="info-icon">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/usb.png"
                    alt="USB Icon"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="info-content">
                  <h3>Micro USB Charging</h3>
                  <p>
                    <span style={{ fontSize: "12pt" }}>Easily rechargeable battery with a micro USB cable</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Need for Air Mask Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ fontSize: "13pt", textAlign: "center" }}>
              <span style={{ fontSize: "18pt" }}>What is the need to use an air mask?</span>
            </h2>
            <p style={{ fontSize: "13pt", textAlign: "center" }}>
              According to WHO statistics, there were an estimated 6.5 million deaths globally in 2012 from air
              pollution-related disorders. That amounts to 11.6% of all homicides worldwide, more than the number of
              deaths from tuberculosis, HIV/AIDS, and traffic accidents. According to a new report by the WHO, fine
              particles (PM2.5) kill 7 million of the global population annually. According to a paper published in the
              Lancet Planetary Health, air pollution causes approximately 9 million premature deaths each year, or one
              in every six deaths worldwide. That is why it is important to save ourselves and our loved ones from
              harmful air pollution.
            </p>
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
                <span style={{ fontSize: "18pt" }}>
                  Is Prana Air mask effective against viruses such as Sars-Cov-2?
                </span>
              </h3>
              <p className="whitetext" style={{ fontSize: "13pt", textAlign: "center" }}>
                Prana Air mask can prevent the spread and inhalation of droplets larger than 0.3μg in size. When a
                person sneezes or coughs, the &gt;5μg Droplets fall to the ground due to gravity, while the 0.3μg
                droplets move through the air. The danger of infection is greatly decreased when the mask is used
                properly and in accordance with the instructions.
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
              Breathe Clean Air this Winter
            </h3>
            <p style={{ fontSize: "13pt", textAlign: "center" }}>
              Every year India sees an alarming increase in air pollution around the Diwali festival. The concentration
              of PM2.5 is recorded 5–6 times higher than safe limits set by NAAQS (National Ambient Air Quality
              Standards). Breathing this air puts you and your loved ones at risk of heart diseases, respiratory
              diseases, and lung cancer. Relieve yourself and your loved ones from the clutches of these fatal ailments
              and switch to the Prana 2nd Gen N95 mask which has the 5-layer filtration system so that you can breathe
              clean and fresh air. It has a HEPA filter which is known to filter out particles as small as 2.5 microns.
              It also ensures comfort with its adjustable fan feature.
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
                      What<strong> happens if you dont wear a pollution mask?</strong>
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
                      According to WHO recommendations, annual average PM2.5 concentrations should be under 10
                      micrograms (mcg) per cubic meter, however, the vast majority of people (99%) on earth live in
                      places where this limit is exceeded.
                    </span>
                  </span>
                  <br />
                  <br />
                  <span style={{ color: "#000000", fontSize: "14pt" }}>
                    Many individuals believe that the only air pollutants present are dirt and smoke. The real culprit,
                    however, is PM2.5. These are fine particulate particles about 1/13th the size of human hair. This
                    pollutant is hazardous because it penetrates deeply into your respiratory tract, reaching your
                    lungs, and then can enter your bloodstream, triggering a variety of health problems.
                  </span>
                  <br />
                  <br />
                  <span style={{ color: "#000000", fontSize: "14pt" }}>
                    When exposed to such fine particles, it can produce short-term health effects such as irritation of
                    the eyes, nose, and throat, which can lead to coughing, sneezing, runny nose, and shortness of
                    breath, to mention a few. Long-term exposure to PM2.5 can harm the lungs and cause asthma and heart
                    problems.
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
                <span style={{ color: "#000" }}>What</span>
                <strong>
                  <span style={{ color: "#000" }}> happens if you dont wear a pollution mask?</span>
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
              <span style={{ color: "#000", fontSize: "12pt" }}>
                Many people think dirt and smoke are the only air pollutants present in the air. However, the real
                culprit of all is PM2.5. It is a fine particulate matter that is 1/13th of the diameter of a human hair.
                This pollutant is dangerous as they penetrate deep into your respiratory tract, reaching your lungs and
                causing you various health trouble.
              </span>
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ color: "#000", fontSize: "12pt" }}>
                Once exposed to such fine particles, it can cause short-term health effects such as eyes, nose, throat
                irritation, which can further become a cause to coughing, sneezing, runny nose, shortness of breath to
                name a few. Exposed to PM2.5 for a long time can affect the lungs and may also cause asthma and heart
                disease.
              </span>
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
                  <span style={{ fontSize: "22pt" }}>Air Mask Filtration</span>
                </span>
                <sup>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                </sup>
              </h2>
              <div style={{ height: "20px" }}></div>
              <div className="text-center">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/prana-air-multi-layers-filter-of-n95-mask.png"
                  alt="Prana Air Mask Filtration"
                  width={745}
                  height={538}
                />
              </div>

              <div className="animateme scrollme">
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/motion-mask-fan-icon.png"
                    alt="mask fan icon"
                    width={80}
                    height={80}
                  />
                  <h4>3 Different Fan Speeds</h4>
                </div>
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/motion-mask-filter-layer-icon.png"
                    alt="mask filter layer icon"
                    width={80}
                    height={80}
                  />
                  <h4>5 Layer Protection</h4>
                </div>
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/mask-battery-icon.png"
                    alt="mask battery icon"
                    width={80}
                    height={80}
                  />
                  <h4>Upto 2 Hrs Battery Life</h4>
                </div>
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/motion-mask-weight-icon.png"
                    alt="mask battery icon"
                    width={80}
                    height={80}
                  />
                  <h4>70 Grams Lightweight</h4>
                </div>
                <div className="clear"></div>
              </div>

              <div style={{ height: "20px" }}></div>
              <p
                style={{ fontSize: "20px", textAlign: "center", color: "#383838", lineHeight: "1.8" }}
                className="head-proxima"
              >
                Our masks come with 5 different filter layers that serve as multiple layers of protection against
                different air pollutants:
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
                alt="Prana Air N95 Mask 2nd Gen"
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
                  <span style={{ fontSize: "24pt" }}>Perfect Outdoor Companions</span>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                </strong>
              </h4>
              <div style={{ height: "10px" }}></div>
              <p style={{ fontSize: "16px", textAlign: "left", color: "#383838", lineHeight: "1.8" }}>
                Prana Air Anti Pollution Mask is designed with comfort in mind to provide optimum protection from
                hazardous pollutants such as dust, particle matter (PM2.5 and PM10), carbon monoxide, and sulphur
                dioxide, which are commonly found in smoke from vehicle exhausts, factories, and bushfires.
              </p>

              <div className="animateme scrollme">
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/pm2.5-icon.png"
                    alt="pm2.5 icon"
                    width={80}
                    height={80}
                  />
                  <h4>PM 2.5</h4>
                </div>
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/carbon-monoxide-icon.png"
                    alt="carbon monoxide icon"
                    width={80}
                    height={80}
                  />
                  <h4>Carbon Monoxide</h4>
                </div>
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/so2-icon.png"
                    alt="so2 icon"
                    width={80}
                    height={80}
                  />
                  <h4>Sulphur Dioxide</h4>
                </div>
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/dust-icon.png"
                    alt="dust icon"
                    width={80}
                    height={80}
                  />
                  <h4>Dust</h4>
                </div>
                <div className="icon-col">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/05/smoke-icon.png"
                    alt="smoke icon"
                    width={80}
                    height={80}
                  />
                  <h4>Smoke</h4>
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
                alt="Prana Air Mask Micro Ventilator"
                width={576}
                height={570}
                className="mask-img"
              />
            </div>
            <div className="col-md-6 padd companions-col">
              <h4 className="cus-heading wpb_animate_when_almost_visible wpb_fadeInDown fadeInDown wpb_start_animation animated">
                <strong>
                  <span style={{ fontSize: "24pt" }}>Micro Ventilator</span>
                </strong>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </h4>
              <div style={{ height: "10px" }}></div>
              <p style={{ textAlign: "justify" }}>
                The best thing with our air mask is that they have a micro-ventilator which eliminates the unpleasant
                build-up of carbon dioxide, and prevents you from breathing in recycled air. It is easily chargeable
                with a micro USB cable and comes with different fan modes. It is adjustable depending on the pollution
                level.
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
                alt="Prana Air N95 Mask Stylish"
                width={900}
                height={584}
                className="mask-img"
              />
            </div>
            <div className="col-md-6 padd companions-col">
              <h4 className="cus-heading wpb_animate_when_almost_visible wpb_fadeInDown fadeInDown wpb_start_animation animated">
                <span style={{ fontSize: "24pt" }}>
                  <strong>Stylish</strong>
                </span>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </h4>
              <div style={{ height: "10px" }}></div>
              <p style={{ textAlign: "justify" }}>
                <span style={{ fontSize: "12pt" }}>
                  Our fashionable and stylish anti-pollution face mask can be worn anywhere. You are protected wherever
                  and everywhere you go.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section with Tabs - Using Bootstrap Tabs */}
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
                      2nd Gen Mask
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
                      Junior Mask
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
                          alt="Prana Air N95 Mask"
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
                                <th>Colors</th>
                                <td>White with 3 caps - pink, grey, white</td>
                              </tr>
                              <tr>
                                <th>Filter layers</th>
                                <td>5</td>
                              </tr>
                              <tr>
                                <th>HEPA compliant</th>
                                <td>Yes</td>
                              </tr>
                              <tr>
                                <th>Purification efficiency</th>
                                <td>upto 95.99%</td>
                              </tr>
                              <tr>
                                <th>Fan speed</th>
                                <td>3 modes</td>
                              </tr>
                              <tr>
                                <th>Charging mode</th>
                                <td>USB charging</td>
                              </tr>
                              <tr>
                                <th>Charging time</th>
                                <td>1 to 1.5 hours</td>
                              </tr>
                              <tr>
                                <th>Battery duration</th>
                                <td> Upto 2 hours</td>
                              </tr>
                              <tr>
                                <th>Battery capacity</th>
                                <td>680 mAh</td>
                              </tr>
                              <tr>
                                <th>Weight</th>
                                <td>70 grams</td>
                              </tr>
                              <tr>
                                <th>Voltage</th>
                                <td>3.7V-5.2V</td>
                              </tr>
                              <tr>
                                <th>Noise</th>
                                <td>&lt;28dB(A)</td>
                              </tr>
                              <tr>
                                <th>Price</th>
                                <td>2990 INR</td>
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
                          alt="Prana Air Junior Mask"
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
                                <th>Colors</th>
                                <td>White, Pink, Blue</td>
                              </tr>
                              <tr>
                                <th>Filter layers</th>
                                <td>5</td>
                              </tr>
                              <tr>
                                <th>HEPA compliant</th>
                                <td>Yes</td>
                              </tr>
                              <tr>
                                <th>Purification efficiency</th>
                                <td>&gt;95%</td>
                              </tr>
                              <tr>
                                <th>Fan speed</th>
                                <td>3 modes</td>
                              </tr>
                              <tr>
                                <th>Charging mode</th>
                                <td>USB charging</td>
                              </tr>
                              <tr>
                                <th>Charging time</th>
                                <td>1.5 hours</td>
                              </tr>
                              <tr>
                                <th>Battery duration</th>
                                <td>upto 3 hours</td>
                              </tr>
                              <tr>
                                <th>Battery capacity</th>
                                <td>1000 mAh</td>
                              </tr>
                              <tr>
                                <th>Dimensions</th>
                                <td>120x110x50 (mm)</td>
                              </tr>
                              <tr>
                                <th>Weight</th>
                                <td>62 grams</td>
                              </tr>
                              <tr>
                                <th>Voltage</th>
                                <td>5V</td>
                              </tr>
                              <tr>
                                <th>Noise</th>
                                <td>&lt;28db(A)</td>
                              </tr>
                              <tr>
                                <th>Price</th>
                                <td>2499 INR</td>
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
              <h5 style={{ fontSize: "25px", textAlign: "center" }}>Unboxing Video of 2nd Gen Pollution Mask</h5>
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
                What is in the box?
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
                <span style={{ fontSize: "18pt" }}>2nd Gen Mask</span>
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
                  color: "#040404",
                  lineHeight: "36px",
                }}
                className="head-proxima"
              >
                Mask Product Specification
              </h4>
              <div style={{ height: "15px" }}></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 detail-img-col">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2021/10/box-content-of-2nd-gen-mask.jpg"
                alt="Prana Air N95 Mask Specification"
                width={592}
                height={395}
              />
            </div>
            <div className="col-md-6 table-col">
              <div className="animateme scrollme">
                <table>
                  <tbody>
                    <tr>
                      <th>PRODUCT FEATURES</th>
                      <th>JUNIOR MASK</th>
                      <th>2nd Gen Mask</th>
                    </tr>
                    <tr>
                      <th>Colors</th>
                      <td>White, Pink, Yellow</td>
                      <td>White, Pink, Grey</td>
                    </tr>
                    <tr>
                      <th>Filter layers</th>
                      <td>5</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <th>HEPA compliant</th>
                      <td>Yes</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th>Purification efficiency</th>
                      <td>&gt;upto 95%</td>
                      <td>upto 95.99%</td>
                    </tr>
                    <tr>
                      <th>Fan speed</th>
                      <td>3 modes</td>
                      <td>3 modes</td>
                    </tr>
                    <tr>
                      <th>Charging mode</th>
                      <td>USB charging</td>
                      <td>USB charging</td>
                    </tr>
                    <tr>
                      <th>Charging time</th>
                      <td>1.5-2 hours</td>
                      <td>1.5 hours</td>
                    </tr>
                    <tr>
                      <th>Battery duration</th>
                      <td>upto 3 hours</td>
                      <td>upto 2 hours</td>
                    </tr>
                    <tr>
                      <th>Battery capacity</th>
                      <td>1000 mAh</td>
                      <td>680 mAh</td>
                    </tr>
                    <tr>
                      <th>Dimensions</th>
                      <td>120x110x50 (mm)</td>
                      <td>110x90x50 (mm)</td>
                    </tr>
                    <tr>
                      <th>Weight</th>
                      <td>62 grams</td>
                      <td>78 grams</td>
                    </tr>
                    <tr>
                      <th>Voltage</th>
                      <td>5V</td>
                      <td>3.7V-5.2V</td>
                    </tr>
                    <tr>
                      <th>Noise</th>
                      <td>&lt;28db(A)</td>
                      <td>&lt;28db(A)</td>
                    </tr>
                    <tr>
                      <th>Price</th>
                      <td>1990 INR</td>
                      <td>999 INR</td>
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
                Dont wait any longer.
                <br />
                Start protecting yourself
                <br />
                today.
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
                Our pollution masks are made of eco-friendly
                <br />
                plastic, lightweight and comfortable to wear.
              </p>
              <div style={{ height: "30px" }}></div>
              <p style={{ textAlign: "center" }}>
                <a className="bg-btn bg-green" href="#">
                  Buy Now
                </a>
                <a
                  className="bg-btn bg-orange alignnone"
                  href="https://www.amazon.in/Prana-Air-2nd-Gen-Multi-Layers/dp/B08F2LHKTV/"
                >
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2021/02/quality-amazon.png"
                    alt="amazon"
                    width={15}
                    height={15}
                  />
                  amazon
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Using Bootstrap Accordion */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "18pt" }}>Frequently Asked Questions</span>
              <br />
              <span style={{ fontSize: "18pt" }}>About Prana Air Mask</span>
            </h3>

            <div className="accordion faq-accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    1. Is the air mask available in white color only?
                  </button>
                </h2>
                <div
                  id="collapse1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    - There are 3 colors of the cap only for 2nd Gen Mask- White, Pink, Grey.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    2. Are the mask straps adjustable?
                  </button>
                </h2>
                <div
                  id="collapse2"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">- Yes, you can adjust the air mask straps.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                  >
                    3. How to charge it?
                  </button>
                </h2>
                <div
                  id="collapse3"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">- It is easily chargeable with a micro USB cable.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapse4"
                  >
                    4. How many modes of the fan are there?
                  </button>
                </h2>
                <div
                  id="collapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    - The air mask comes with 3 different fan modes. It is adjustable depending on the pollution level.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading5">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                    aria-expanded="false"
                    aria-controls="collapse5"
                  >
                    5. How much does it weigh?
                  </button>
                </h2>
                <div
                  id="collapse5"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading5"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">- It is a lightweight air mask, with a weight of 70 grams.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading6">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse6"
                    aria-expanded="false"
                    aria-controls="collapse6"
                  >
                    6. How long does the battery last when fully charged?
                  </button>
                </h2>
                <div
                  id="collapse6"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading6"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">- The battery lasts up to 2 hours on a single full charge.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading7">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse7"
                    aria-expanded="false"
                    aria-controls="collapse7"
                  >
                    7. Does the air mask help protect from viruses like COVID-19?
                  </button>
                </h2>
                <div
                  id="collapse7"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading7"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    -Yes, it is highly recommended to wear a mask to stop the virus from spreading.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse8"
                    aria-expanded="false"
                    aria-controls="collapse8"
                  >
                    8. How many filters does the mask have?
                  </button>
                </h2>
                <div
                  id="collapse8"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading8"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    - There is only 1 filter with multi-layer of pre-filter & HEPA filter.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading9">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse9"
                    aria-expanded="false"
                    aria-controls="collapse9"
                  >
                    9. What air pollutants can the mask filter out?
                  </button>
                </h2>
                <div
                  id="collapse9"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading9"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    - Dust (PM10, PM2.5), Carbon Monoxide, Sulphur Dioxide, Smoke, etc.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading10">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse10"
                    aria-expanded="false"
                    aria-controls="collapse10"
                  >
                    10. Is the fan speed adjustable?
                  </button>
                </h2>
                <div
                  id="collapse10"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading10"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    - Yes, the fan speed is adjustable, you can adjust it with 3 different modes.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading11">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse11"
                    aria-expanded="false"
                    aria-controls="collapse11"
                  >
                    11. How efficient is the Prana Air- Air Mask?
                  </button>
                </h2>
                <div
                  id="collapse11"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading11"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">- The purification efficiency of the air mask is up to 95.99%.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
