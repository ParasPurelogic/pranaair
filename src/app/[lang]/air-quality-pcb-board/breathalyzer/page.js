import Link from "next/link"
import Image from "next/image"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import QuantityCounter from "@/Components/Pages/Breathalyzer/quantity-counter"

export default function BreathalyzerPage() {
  // Scroll to section when clicking on navigation
  const handleTabClick = (tab) => {
    const element = document.getElementById(tab)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Update the product features section
  const updateProductFeatures = () => {
    return (
      <div className="product-features">
        <ul className="product-features-list-one">
          <li>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/06/compact-size.png"
              alt="compact size"
              width={60}
              height={60}
            />
            <h3>Compact and Portable</h3>
          </li>
          <li>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/06/reliable-icon.png"
              alt="reliable icon"
              width={60}
              height={60}
            />
            <h3>Accurate and Reliable</h3>
          </li>
        </ul>
        <ul className="product-features-list-two">
          <li>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/06/stable-data-icon.png"
              alt="stable data icon"
              width={60}
              height={60}
            />
            <h3>Stable Performance</h3>
          </li>
          <li>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/06/contact-less-icon.png"
              alt="Contactless Testing"
              width={60}
              height={60}
            />
            <h3>Contactless Testing</h3>
          </li>
        </ul>
        <ul className="product-features-list-two">
          <li>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/06/fuel-cell-sensor.png"
              alt="fuel cell sensor"
              width={60}
              height={60}
            />
            <h3>GB05 Fuel Cell</h3>
          </li>
          <li>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2023/06/on-board-storage.png"
              alt="on board storage"
              width={60}
              height={60}
            />
            <h3>On-Board Storage</h3>
          </li>
        </ul>
      </div>
    )
  }

  // Fix the Product Functions section to match the design in the screenshot
  const updateProductFunctions = () => {
    return (
      <div className="row">
        <div className="col-lg-6 col-md-12 key-func-right-bg ipad">
          <div id="main-order" className="product-key-func-box">
            <div id="heading-ord" className="prodt-heading">
              <p>Product</p>
              <h4>Key functions</h4>
            </div>
            <div id="img-ord" className="prodt-img">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-key-functions.png"
                alt="prana air breathalyzer key functions"
                width={190}
                height={300}
              />
            </div>
            <div id="key-word-ord" className="key-heading">
              <ul>
                <li>
                  Air
                  <h4>Inlet</h4>
                </li>
                <li>
                  Screen
                  <h4>Display</h4>
                </li>
                <li>
                  Power
                  <h4>Button</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 key-func-left-bg ipad">
          <div className="product-dimension-box">
            <ul>
              <li>
                Product
                <h4>Dimensions</h4>
                <p>
                  Prana Air Breathalyzer: Blending sleek design palm-sized convenience and compact dimensions for
                  effortless portability and accurate alcohol detection on the go.
                </p>
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/dimension-of-prana-air-breathalyzer.png"
                  alt="prana air breathalyzer dimension"
                  width={320}
                  height={200}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="breathalyzer-container">

      {/* Product Navigation */}
      {/* Breadcrumb */}
      <div className="static-breadcrums">
        <ul>
          <li>
            <Link href="/">Home</Link> <span>&gt;</span>
          </li>
          <li>
            <Link href="/air-quality-monitor">Air Quality Monitors</Link> <span>&gt;</span>
          </li>
          <li>
            <Link href="#">
              <b>Breathalyzer</b>
            </Link>
          </li>
        </ul>
      </div>

      {/* Product Section */}
      <section className="keychain-monitor-section" id="overview">
        <div className="container">
          <div className="row order-colum">
            {/* Product Images */}
            <div className="col-lg-4 col-md-12 ipad" id="product">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="Comonitora">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-portable-alcohol-tester.png"
                    alt="prana air breathalyzer portable alcohol tester"
                    width={400}
                    height={450}
                  />
                </div>

                <div className="tab-pane fade" id="Comonitorb">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-alcohol-detector.png"
                    alt="prana air breathalyzer alcohol detector"
                    width={400}
                    height={450}
                  />
                </div>

                <div className="tab-pane fade" id="Comonitorc">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-portable-breathalyzer-device.png"
                    alt="prana air portable breathalyzer device"
                    width={400}
                    height={450}
                  />
                </div>

                <div className="tab-pane fade" id="Comonitord">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-device.png"
                    alt="prana air breathalyzer device"
                    width={400}
                    height={450}
                  />
                </div>
              </div>

              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#Comonitora"
                    type="button"
                    role="tab"
                    aria-controls="Comonitora"
                    aria-selected="true"
                  >
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-portable-alcohol-tester.png"
                      alt="breathly-img-front"
                      width={80}
                      height={80}
                    />
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#Comonitorb"
                    type="button"
                    role="tab"
                    aria-controls="Comonitorb"
                    aria-selected="false"
                  >
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-alcohol-detector.png"
                      alt="breathly-img-left"
                      width={80}
                      height={80}
                    />
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#Comonitorc"
                    type="button"
                    role="tab"
                    aria-controls="Comonitorc"
                    aria-selected="false"
                  >
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-portable-breathalyzer-device.png"
                      alt="breathly-img-bottom"
                      width={80}
                      height={80}
                    />
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#Comonitord"
                    type="button"
                    role="tab"
                    aria-controls="Comonitord"
                    aria-selected="false"
                  >
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-device.png"
                      alt="breathly-img-back-min"
                      width={80}
                      height={80}
                    />
                  </button>
                </li>
              </ul>
            </div>

            {/* Product Details */}
            <div className="col-lg-4 col-md-12 ipad" id="text">
              <div className="product-text">
                <div className="inner-product-txt">
                  <h1>Breathalyzer</h1>
                  <h4>Alcohol Detector</h4>
                  <p>Handheld | Fast Detect | Very Accurate</p>
                </div>
                <div className="mrp-sec">
                  <div className="discount-mrp woocom-list-content">
                    <h6>m.r.p.</h6>
                    <h5>₹ 6990.00</h5>
                  </div>
                  <section className="articles-container">
                    <article className="article">
                      <p>
                        Prana Air Breathalyzer is the ultimate portable device for accurate alcohol detection. With its
                        cutting-edge fuel cell technology you can rely on precise and trustworthy results. Ensure
                        safety and peace of mind wherever you go with this highly accurate and convenient breathalyzer.
                      </p>
                      <p className="extra-content collapse" id="showMoreContent">
                        Order yours today and prioritize responsible drinking.
                      </p>
                      <button
                        className="read-more btn"
                        data-bs-toggle="collapse"
                        data-bs-target="#showMoreContent"
                        aria-expanded="false"
                        aria-controls="showMoreContent"
                      >
                        Show More
                      </button>
                    </article>
                  </section>
                </div>
              </div>
            </div>

            {/* Buy Button */}
            <div className="col-lg-4 col-md-12 ipad" id="buybtn">
              <div className="add-cart-box">
                <div className="model-box">
                  <h5>model</h5>
                  <center>
                    <select className="nav dropbtn" defaultValue="#">
                      <option value="#">Breathalyzer</option>
                      <option value="https://www.pranaair.com/air-quality-monitor/handheld/nano-tvoc-monitor/">
                        Nano TVOC & HCHO
                      </option>
                      <option value="https://www.pranaair.com/air-quality-monitor/handheld/nano-co-monitor/">
                        Nano CO
                      </option>
                      <option value="https://www.pranaair.com/air-quality-monitor/handheld/nano-co-monitor/">
                        Nano CO2
                      </option>
                    </select>
                  </center>

                  <div className="model-box">
                    <h5>Quantity</h5>
                    <QuantityCounter />
                    <div className="buy-btns">
                      <br />
                      <form
                        className="cart new-cart"
                        action="https://www.pranaair.com/air-quality-monitor/handheld/breathalyzer/"
                        method="post"
                        encType="multipart/form-data"
                      >
                        <button
                          type="submit"
                          name="add-to-cart"
                          value="77733"
                          className="single_add_to_cart_button button alt"
                        >
                          Add to Cart
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

      {/* Features Section */}
      <section className="product-quality-section" id="features">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-lg-8 col-md-12 produt-img ipad">
              <div className="product-quantity-txt">
                <h3>Qualitative features of the Breathalyzer</h3>
                <p>
                  Experience the Power of Precision with our Sleek Compact Alcohol Detector - Your Perfect Companion
                  for Responsible Decisions.
                </p>
              </div>
              {updateProductFeatures()}
            </div>
            <div className="col-lg-4 col-md-12 ipad product-img-right">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-portable-alcohol-tester.png"
                alt="Breathalyzer"
                width={210}
                height={300}
                className="tvoc-high-definition-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contactless Section */}
      <section className="contact-less-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="contact-less-txt">
                <h4>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/contactless-icon.png"
                    alt="contactless breathalyzer icon"
                    width={50}
                    height={50}
                  />
                  Contactless
                </h4>
                <h5>Alcohol Detection</h5>
                <p>
                  Accurately measures BAC (Blood Alcohol Concentration) and alcohol concentration to eliminate drunk
                  driving risks. Make responsible decisions and protect yourself and others on the road with Prana Air
                  Breathalyzer ensuring accurate results.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/06/a-man-using-prana-air-breathalyzer.png"
                alt="Contactless testing"
                width={420}
                height={300}
                className="contact-less-men-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Functions Section */}
      <section className="product-function-section" id="functions">
        <div className="container">{updateProductFunctions()}</div>
      </section>

      {/* Did You Know Section */}
      <section className="did-u-know-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="did-u-know-txt">
                <ul>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/do-you-know-icon.png"
                      alt="do you know icon"
                      width={80}
                      height={80}
                    />
                  </li>
                  <li>
                    <h4>DID YOU KNOW?</h4>
                    <p>
                      According to the Traffic Injury Prevention study <b>2-33%</b> of injured and <b>6-48%</b> of
                      those who died in road traffic accidents had consumed alcohol. In <b>2019</b> there were{" "}
                      <b>12256</b> accidents caused by drunk driving with <b>5325</b> people killed and{" "}
                      <b>10564 injured</b>.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="how-to-use-sec">
        <div className="container">
          <div className="row br-btm">
            <div className="col-lg-6 col-md-12">
              <div className="how-to-use-heading">
                <h2>How to use Breathalyzer</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tab-box">
                <ul className="nav nav-tabs tab-heading" id="howToUseTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="alcohol-test-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#alcohol-test"
                      type="button"
                      role="tab"
                      aria-controls="alcohol-test"
                      aria-selected="true"
                    >
                      Alcohol Test
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="date-time-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#date-time"
                      type="button"
                      role="tab"
                      aria-controls="date-time"
                      aria-selected="false"
                    >
                      Date & Time
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="history-export-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#history-export"
                      type="button"
                      role="tab"
                      aria-controls="history-export"
                      aria-selected="false"
                    >
                      History & Data Export
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="howToUseTabsContent">
                  <div
                    className="tab-pane fade show active"
                    id="alcohol-test"
                    role="tabpanel"
                    aria-labelledby="alcohol-test-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="tab-content-box">
                          <h3>Test Alcohol</h3>
                          <p>
                            Follow these step-by-step instructions to precisely measure the alcohol level in every
                            breath sample.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="auto-power-off">
                          <ul>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2025/02/automatically-powers-off.png"
                                alt="Auto power off"
                                width={60}
                                height={60}
                              />
                            </li>
                            <li>The device automatically powers off after 20 seconds of inactivity.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="row mob-row-parametere">
                      <div className="col-md-4">
                        <div className="tab-logo-box">
                          <h3>01</h3>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/prana-air-logo.jpg"
                            alt="Prana Air Logo"
                            width={150}
                            height={100}
                          />
                          <p>Press the button for a second till the Prana Air Logo and Wait will appear.</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="tab-logo-box">
                          <h3>02</h3>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/blow-for-5-6-seconds-until-the-bar-fills.jpg"
                            alt="Blow for 5-6 seconds"
                            width={150}
                            height={100}
                          />
                          <p>Blow when the test bar shows blow for 5-6 seconds until the bar fills.</p>
                        </div >
                      </div >
                      <div className="col-md-4">
                        <div className="tab-logo-box">
                          <h3>03</h3>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/Alcohol-level-green-yellow-red-displays.jpg"
                            alt="Alcohol level display"
                            width={150}
                            height={100}
                          />
                          <p>Alcohol level (green/yellow/red) displays.</p>
                        </div>
                      </div>
                    </div >

                    <div className="row">
                      <div className="col-md-6">
                        <div className="ranges-display">
                          <ul className="rang">
                            <li>0~0.10mg/l</li>
                            <li>0.10~0.40mg/l</li>
                            <li>0.40~1.00mg/l</li>
                          </ul>
                          <ul className="rang-clr">
                            <li>Green</li>
                            <li>Yellow</li>
                            <li>Red</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="point-para">
                          <p>0.08%BAC means 0.08g (80mg) of alcohol per 100ml of blood.</p>
                        </div>
                      </div>
                    </div>
                  </div >

                  <div className="tab-pane fade" id="date-time" role="tabpanel" aria-labelledby="date-time-tab">
                    <div className="tab-content-box">
                      <h3>Setting the Time and Date on Your Breathalyzer</h3>
                      <p>Ensure accurate data logging by setting the correct time and date on your breathalyzer.</p>
                    </div>

                    <div className="row mob-row-parametere">
                      <div className="col-md-4">
                        <div className="tab-logo-box">
                          <h3>01</h3>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/Press-the-button-for-few-second.jpg"
                            alt="Prana Air Logo"
                            width={150}
                            height={100}
                          />
                          <p>Press the button for a second till the Prana Air Logo and Wait will appear.</p>
                        </div >
                      </div >
                      <div className="col-md-4">
                        <div className="tab-logo-box">
                          <h3>02</h3>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/turn-on-long-press-the-button.png"
                            alt="Blow for 5-6 seconds"
                            width={150}
                            height={100}
                          />
                          <p>Once the device is turn on long-press the button to enter settings.</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="tab-logo-box">
                          <h3>03</h3>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/Use-short-long-press-to-adjust-time.jpg"
                            alt="Alcohol level display"
                            width={150}
                            height={100}
                          />
                          <p>
                            Use short/long presses to adjust time and date and Long-press again to return to the main
                            screen.
                          </p>
                        </div>
                      </div>
                    </div >
                  </div >

                  <div
                    className="tab-pane fade"
                    id="history-export"
                    role="tabpanel"
                    aria-labelledby="history-export-tab"
                  >
                    <div className="tab-content-box">
                      <h3>Viewing Historical Records</h3>
                      <p>
                        Easily access past test results along with their date and time to check records anytime and
                        anywhere.
                      </p>
                    </div>
                    <div className="tab-content-box data-txt">
                      <h3>Data Export:</h3>
                      <p>Effortlessly export your data for future analysis.</p>
                    </div>

                    <div className="row mob-row-parametere">
                      <div className="col-md-4">
                        <div className="tab-logo-box">
                          <h3>01</h3>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/Press-the-button-for-few-second.jpg"
                            alt="Prana Air Logo"
                            width={150}
                            height={100}
                          />
                          <p>Press and hold the button until the Prana Air logo appears on the screen.</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="tab-logo-box">
                          <h3>02</h3>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/Use-short-long-press-to-adjust-time.jpg"
                            alt="Blow for 5-6 seconds"
                            width={150}
                            height={100}
                          />
                          <p>Short-press to view past records with date time and alcohol level.</p>
                        </div >
                      </div >
                      <div className="col-md-4">
                        <div className="tab-logo-box data-box">
                          <h3>03</h3>
                          <p>Connect via Type-C cable enable USB mode and access records in an Excel file.</p>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2025/02/Connect-via-Type-C-cable.webp"
                            alt="Alcohol level display"
                            width={150}
                            height={100}
                          />
                        </div >
                      </div >
                    </div >
                  </div >
                </div >
              </div >

              <div className="row br-top">
                <div className="col-md-12">
                  <div className="tutroials-heading">
                    <h4>Tutorials</h4>
                  </div>
                </div>
              </div>

              <div className="row mob-row-video">
                <div className="col-md-6">
                  <div className="video-container">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/S-1hOGdcwIQ"
                      title="Unboxing Video Of Prana Air Breathalyzer Alcohol Tester"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="video-container">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/b0opxV6JFk0"
                      title="How to Use Prana Air Breathalyzer Alcohol Detector"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div >
          </div >
        </div >
      </section >

      {/* Simplified Operation Section */}
      < section className="simplify-section" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 simplify-left-bg ipad">
              <div className="row">
                <div className="col-md-8">
                  <div className="simpli-oprt-txt">
                    <h4>Simplified Operation</h4>
                    <p>One-Button Operation Just Switch On and Blow into the Air Inlet.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="simpli-img-left">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/man-using-breathalyzer-easily.png"
                      alt="Simple operation"
                      width={273}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 simplify-right-bg ipad">
              <div className="row">
                <div className="col-md-8">
                  <div className="instent-result-txt">
                    <h4>Instant Results at Your Fingertips</h4>
                    <p>Get Accurate BAC Measurements within Seconds!</p>
                    <ul>
                      <li>less then</li>
                      <li>10s Response time</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="simpli-img-right">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-real-time-alcohol-detector.png"
                      alt="Instant results"
                      width={235}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Ranges Section */}
      < section className="ranges-section" >
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="range-section">
                <h4>Ranges</h4>
                <p>One-Button Operation Just Switch On and Blow into the Air Inlet.</p>
              </div>
            </div>
            <div className="col-md-2">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/06/bottle-icon-100x100.png"
                alt="alcohol icon"
                width={45}
                height={45}
                className="alcohol-icon"
              />
            </div>
          </div>
          <div className="row alcohol-bg">
            <div className="col-md-4 ipad">
              <div className="range-bar-box">
                <ul>
                  <li>
                    <h4>No Alcohol</h4>
                  </li>
                  <li>
                    0~0.10mg/l
                    <div className="bar"></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 ipad">
              <div className="range-bar-box">
                <ul>
                  <li>
                    <h4>Alcohol</h4>
                  </li>
                  <li>
                    0.10~0.40mg/l
                    <div className="yellow"></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 ipad">
              <div className="range-bar-box">
                <ul>
                  <li>
                    <h4>High Alcohol</h4>
                  </li>
                  <li>
                    0.40~1.00mg/l
                    <div className="red"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="per-ml-text">*0.08%BAC means 0.08g (80mg) of alcohol per 100ml of blood.</div>
            </div>
          </div>
        </div>
      </section >

      {/* Data Export Section */}
      < section className="data-export-section" >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 ipad">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/06/data-export-feature-in-prana-air-breathalyzer-device.jpeg"
                alt="Data export"
                width={400}
                height={300}
                className="data-img"
              />
            </div>
            <div className="col-lg-7 col-md-12 export-data-bg ipad">
              <div className="data-export-txt">
                <h4>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/connectivity-icon.png"
                    alt="connectivity icon"
                    width={30}
                    height={30}
                  />
                  Data Export
                </h4>
                <p>Download the recorded data in Excel file format with the help of a type-C data cable.</p>
              </div>
              <ul className="store-box">
                <li>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/data-storage-icon.png"
                    alt="data storage icon"
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  Storable
                  <h4>1000 records</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section >

      {/* Fuel Cell Section */}
      < section className="fule-cell-section" >
        <div className="container">
          <div className="row fule-cell-bg">
            <div className="col-lg-7 col-md-12 ipad">
              <div className="fule-cell-txt">
                <h4>
                  Fuel Cell
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/breathalyzer-accuracy.jpeg"
                    alt="breathalyzer accuracy"
                    width={150}
                    height={100}
                  />
                </h4>
                <h3>Type Electrochemical Alcohol tester</h3>
                <p>
                  Independent Gb05 fuel cell alcohol detector with compact size highly sensitive electrochemical sensor
                  for accurate breath alcohol detection.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="cell-img-top-txt">
                <h4>Fuel Cell</h4>
                <p>Sensor</p>
              </div>
              <div className="sensore-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-fuel-cell-sensor.png"
                  alt="Sensor"
                  width={350}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Quote Section */}
      < section className="quote-section" >
        <div className="container">
          <div className="row">
            <div className="col-md-12 ipad">
              <div className="quote-txt">
                <strong>India</strong>
                <p>
                  had the highest number of road traffic accidents injuries and deaths as compared to any other
                  country in the world. People killed in drunk driving-related traffic accidents account for 3.5% of all
                  road fatalities. (Report by Ministry Road Transport and Highways)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Detection Section */}
      < section className="detection-section" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 ipad">
              <div className="detect-device-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-data-accuracy-with-fuel-cell-sensor.png"
                  alt="Detection device"
                  width={500}
                  height={400}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ipad">
              <div className="detection-txt">
                <h4>Detection Type</h4>
                <p>Accurate Alcohol Level Measurement No False Positives. Detects Alcohol Levels in:</p>
                <ul>
                  <li>mg/L</li>
                  <li>mg/dL</li>
                  <li>%BAC</li>
                </ul>
              </div>
              <ul className="detect-icons">
                <li>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/not-detect-cold-drink.png"
                    alt="cold drink"
                    width={52}
                    height={52}
                  />
                </li>
                <li>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/not-detect-garlic.png"
                    alt="garlic icon"
                    width={52}
                    height={52}
                  />
                </li>
                <li>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/not-detect-onion.png"
                    alt="onion icon"
                    width={52}
                    height={52}
                  />
                </li>
                <li>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/not-detect-carrot.png"
                    alt="carrot icon"
                    width={52}
                    height={52}
                  />
                </li>
                <li>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/not-detect-milk.png"
                    alt="milk icon"
                    width={52}
                    height={52}
                  />
                </li>
                <li>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/not-detect-food-smell.png"
                    alt="food smell icon"
                    width={52}
                    height={52}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section >

      {/* Comparison Section */}
      < section className="comparison-sec" id="compare" >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="breathlayzer-comparision-heading">
                <h4>
                  <span>Prana</span> Air vs. Existing Breathalyzers
                </h4>
                <p>A Comprehensive Comparison for Better Decision Making</p>
              </div>
            </div>
            <div className="col-md-9"></div>
          </div>
          <div className="row mob-scroll">
            <div className="col-md-3">
              <div className="product-discription">
                <div className="mobshow com-heading">
                  <h4>Comprehensive</h4>
                  <p>Breathalyzer</p>
                </div>
                <ul>
                  <li>Fuel Cell Sensor :</li>
                  <li>Alcohol Test :</li>
                  <li>Data Export :</li>
                  <li>Onion Garlic Smell:</li>
                  <li>Price :</li>
                  <li>Accuracy :</li>
                  <li>Weight :</li>
                  <li>Portability :</li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="dis-img">
                <div className="disc-inner-img-one">
                  <h4>
                    <strong>Prana Air</strong> Breathalyzer
                  </h4>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-for-comparison.jpeg"
                    alt="prana air breathalyzer"
                    width={205}
                    height={200}
                  />
                </div>
                <div className="disc-inner-img-two">
                  <h4>Ordinary Breathalyzers</h4>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/ordinary-breathalyzer-for-comparison.jpeg"
                    alt="ordinary cheap breathalyzer"
                    width={205}
                    height={200}
                  />
                </div>
                <div className="disc-inner-img-three">
                  <h4>High-End Breathalyzers</h4>
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/high-end-breathalyzer-for-comparison.jpeg"
                    alt="high end expensive breathalyzer"
                    width={205}
                    height={200}
                  />
                </div>
              </div>
              <div className="product-feature">
                <ul className="mini-co-monitor">
                  <li>✔</li>
                  <li className="tab-bg">✔</li>
                  <li>✔</li>
                  <li className="tab-bg">Not detected</li>
                  <li>$$$$</li>
                  <li className="tab-bg">Very High</li>
                  <li>Lightweight</li>
                  <li className="tab-bg">Easily Portable</li>
                </ul>
                <ul className="co-multifuntion-monitor">
                  <li>X</li>
                  <li>✔</li>
                  <li>X</li>
                  <li>Detected as alcohol</li>
                  <li>$$$</li>
                  <li>Low</li>
                  <li>Lightweight</li>
                  <li>Easily Portable</li>
                </ul>
                <ul className="co-multifuntion-monitor">
                  <li>✔</li>
                  <li>✔</li>
                  <li>✔</li>
                  <li>Not detected</li>
                  <li>$$$$$</li>
                  <li>Very High</li>
                  <li>Bulky</li>
                  <li>Comparatively less portable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* BAC Standard Section */}
      < section className="data-export-section" >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 ipad">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2023/06/police-checking-alcohol-test-with-a-breathalyzer.jpeg"
                alt="BAC Standard"
                width={400}
                height={300}
                className="data-img bca-img"
              />
            </div>
            <div className="col-lg-7 col-md-12 export-data-bg bca-stanrd-bg ipad">
              <div className="bca-txt">
                <h4>%BAC</h4>
                <h3>Standard</h3>
                <p>
                  The permissible BAC in India - <b>0.03% or 30mg and US/UK - 0.08% or 80mg per 100ml of blood</b>
                </p>
                <a
                  className="myBtn"
                  href="https://www.pranaair.com/wp-content/uploads/2023/06/alcohol-concentration-standards.jpg"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Standards
                </a>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Attractive Details Section */}
      < section className="attractive-details-section" >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="attractive-txt">
                <h4>Attractive</h4>
                <p>details for easy carrying</p>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 col-md-12">
              <div className="tft-display-box">
                <h3>TFT HD Display</h3>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-tft-display.png"
                  alt="TFT HD Display"
                  width={600}
                  height={400}
                  className="feature-img"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="type-c-box">
                    <div className="type-c-content">
                      <h3>Type C</h3>
                      <p>Interface</p>
                    </div>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalzyer-with-type-c-charging.png"
                      alt="Type C Interface"
                      width={600}
                      height={200}
                      className="feature-img"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="lithium-box">
                    <div className="lithium-content">
                      <h3>Lithium</h3>
                      <p>Battery</p>
                    </div>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-breathalyzer-battery-capacity.png"
                      alt="Lithium Battery"
                      width={600}
                      height={200}
                      className="feature-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Technical Specifications Section */}
      < section className="technical-specification" id="spec" >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="attractive-txt product-specification-heading">
                <p>Product</p>
                <h4>Technical specifications</h4>
              </div>
            </div>
            <div className="col-md-9">
              <div className="brochore-btn">
                <a href="https://www.pranaair.com/wp-content/uploads/2023/08/prana-air-alcohol-breathalyzer-brochure.pdf">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/brochore-btn.png"
                    alt="brochore-btn"
                    width={20}
                    height={20}
                  />
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
          <div className="row mid-box mob-scroll">
            <div className="col-md-6 box-line">
              <div className="product-specifi">
                Product Name :<h4>Breathalyzer</h4>
              </div>
              <div className="product-specifi shdw-line">
                Sensor :<h4>Electrochemical Fuel Cell</h4>
              </div>
              <div className="product-specifi">
                Working current :<h4>-20~60°C</h4>
              </div>
              <div className="product-specifi shdw-line">
                Device dimension :<h4>6.6 x 4x 1.6 (cm)</h4>
              </div>
              <div className="product-specifi">
                Blowing continuity test :<h4>35 Sec</h4>
              </div>
              <div className="product-specifi shdw-line">
                Measuring Range :<h4>0 ~ 1.00mg/l</h4>
              </div>
              <div className="product-specifi">
                Battery:
                <h4>Lithium Ion (210 mAh)</h4>
              </div>
              <div className="product-specifi shdw-line">
                Instrument weight :<h4>30 grams</h4>
              </div>
            </div>
            <div className="col-md-6 box-line">
              <div className="product-specifi">
                Response Time :<h4>10 seconds</h4>
              </div>
              <div className="product-specifi">
                Measurements :<h4>BAC (%)</h4>
              </div>
              <div className="product-specifi">
                Display :<h4>TFT HD Screen</h4>
              </div>
              <div className="product-specifi">
                Data Export :<h4>Export to an computer</h4>
              </div>
              <div className="product-specifi">
                Data Refresh Rate :<h4>2 Sec</h4>
              </div>
              <div className="product-specifi">
                Charging Mode :<h4>USB Type-C</h4>
              </div>
              <div className="product-specifi">
                Data Storage :<h4>On-board 1000 records</h4>
              </div>
              <div className="row">
                <div className="col-md-8"></div>
                <div className="col-md-4">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/rosh-icon.png"
                    alt="ROHS Certified"
                    width={80}
                    height={80}
                    className="rosh-iocn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Applications Section */}
      < section className="co-monitore-outdoor-slider" >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="breathalyzer-slider-heading">
                <h2>Breathalyzer</h2>
                <h3>Applications</h3>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row applications-slider">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="breathalyzer-slider-img">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/doctor-talking-with-his-patient.jpg"
                      alt="doctor talking with his patient clinic"
                      width={280}
                      height={200}
                    />
                    <h4>Be Aware of Your Health</h4>
                    <p>
                      Monitor your alcohol intake to promote overall health and well-being making conscious choices
                      about alcohol consumption.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="breathalyzer-slider-img">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/people-celebrating-party.jpg"
                      alt="people celebrating party"
                      width={280}
                      height={200}
                    />
                    <h4>Drinking in Limit</h4>
                    <p>
                      Help maintain responsible drinking habits by using the breathalyzer to gauge your alcohol levels
                      and stay within legal limits.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="breathalyzer-slider-img">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/personal-use-of-breathalyzer-before-drive.jpeg"
                      alt="personal use of breathalyzer before drive"
                      width={280}
                      height={200}
                    />
                    <h4>Self-Testing</h4>
                    <p>
                      Monitor your alcohol levels and make informed decisions about driving or engaging in activities
                      that may be affected by alcohol consumption.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="breathalyzer-slider-img">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/prevent-drink-and-drive.jpg"
                      alt="Enhancing Road Safety"
                      width={280}
                      height={200}
                    />
                    <h4>Enhancing Road Safety</h4>
                    <p>
                      Road Police with Breathalyzers to Ensure Compliance with Traffic Regulations to Promote
                      Responsible and Safe Behavior for Drivers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* FAQ Section */}
      < section className="faq" >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="attractive-txt faq-heading">
                <h4>Frequently Asked Questions About Prana Air Breathalyzer</h4>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h3>1. How does Prana Air Breathalyzer work?</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Prana Air Breathalyzer utilizes advanced electrochemical sensors to accurately measure alcohol
                        levels in your breath.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <h3>2. How long does it take to get the results?</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        You can get the results within 10 seconds of blowing into the device providing quick and
                        convenient alcohol level readings.
                      </p >
                    </div >
                  </div >
                </div >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <h3>3. Does Prana Air Breathalyzer detect other substances besides alcohol?</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        No Prana Air Breathalyzer is specifically designed to measure alcohol levels and does not
                        detect other substances.
                      </p >
                    </div >
                  </div >
                </div >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <h3>4. Is the device easy to use?</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes the Prana Air Breathalyzer features a user - friendly design with simple one - button
                        operation making it easy for anyone to use.
                      </p >
                    </div >
                  </div >
                </div >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <h3>5. How portable is the Prana Air Breathalyzer?</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        The device has a sleek and compact design making it highly portable and convenient to carry
                        wherever you go.
                      </p >
                    </div >
                  </div >
                </div >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      <h3>6. How accurate is the Prana Air Breathalyzer?</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Prana Air Breathalyzer utilizes advanced Gb05 Fuel cell technology providing highly accurate
                        alcohol level measurements for reliable results.
                      </p >
                    </div >
                  </div >
                </div >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      <h3>7. Can I export the test data for record-keeping purposes?</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes Prana Air Breathalyzer allows you to export the test record data to a computer
                        facilitating easy record - keeping in an excel file format.
                      </p >
                    </div >
                  </div >
                </div >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEight">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      <h3>8. Is Prana Air Breathalyzer suitable for professional use?</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes the devices high sensitivity stability and precise detection make it suitable for
                        professional applications such as law enforcement workplace safety and alcohol testing
                        centers.
                      </p >
                    </div >
                  </div >
                </div >
              </div >
            </div >
          </div >
        </div >
      </section >
    </div >
  )
}
